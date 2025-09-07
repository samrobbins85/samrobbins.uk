---
title: "Publishing a React component library with Tailwind CSS"
date: 2020-12-04
description: "Making an NPM package for a React component library with Tailwind CSS"
---

First you need to make an npm package, this can be done with `npm init` provided you have npm installed on your computer. For the name if you want a scoped package, e.g. `@samrobbins/package`, ensure that the package name follows that structure, otherwise, you can just go with `package`. Remember that these have to be unique, so check npm to ensure you're not overlapping. Also ensure that your `main` key is `output.js`, or if you want it to be something different, then substitute your different name when I use `output.js` further down in this file

The first thing we need is a JavaScript bundler, for this I've chosen rollup, but you could do this with any of them. To install rollup, run

```shell
npm i rollup
```

The config file for rollup is `rollup.config.js`, so create that file, and we'll start simple with this

```javascript
export default {
  input: "./index.js",
  output: {
    file: "./output.js",
    format: "esm",
  },
};
```

This takes the file `index.js` and creates a file `output.js`, with the format of ES Modules (`esm`).

At the time of writing, the postcss plugin we'll use later is only compatible with postcss 7, so we'll install everything for the compatibility version of Tailwind CSS

```shell
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

and create a simple `postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Then we can initialize Tailwind CSS

```shell
npx tailwindcss init
```

This will create a `tailwind.config.js` file, and we can add to purge whichever folder we're going to put our components in by adding a `purge` key like this

```javascript
module.exports = {
  purge: ["./components/**/*.js"],
  //...
};
```

Create a `styles` folder with `tailwind.css` inside, with the following text

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This allows you to use things like `@layers` in the future if you need to.

Now Tailwind is set up, we want to go back to rollup so it understands what to do with it

For this we want to use the `rollup-plugin-postcss` plugin, which can be installed like this

```shell
npm install rollup-plugin-postcss
```

You can then use this in your `rollup.config.js` file by adding this at the top

```javascript
import postcss from "rollup-plugin-postcss";
```

Then going into the main object, add a key called `plugins`, which is a list of functions, and you can add postcss like this

```javascript
plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
```

Here we're giving it the path of our postcss path under `config`, telling it which files to run postcss on with `extensions` and minimizing the output with `minimise`. An important key here is `inject`, this determines where in the head of your page the css will be inserted. This is very important with Tailwind CSS as it has an order of priority, allowing for patterns like `block md:flex` and it will use display block less than the `md `viewport width, then `flex `after that. However, if there is a definition for `block` after the definition for `md:flex`, then this pattern will not work as expected. So in order for the CSS to work as you would expect you want it at the top, and the `inject` key used as shown does this.

As these are React components, we expect React to be included in the application we're using these, so we want to add `react` and `react-dom` as peer dependencies. So add a `peerDependencies` key in your `package.json` and add the latest versions of those packages, at the time of writing, looking like this

```json
"peerDependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
},
```

You can then specify the same kind of thing in `rollup.config.js` by adding these under the `external` key like this

```json
external: ["react", "react-dom"],
```

Next we want to generate the `index.js` file we referenced earlier. How specifically you export from your component files may change this, but for my example, I'm doing `export default` from all my component files. So for each component I have, I want to add a line that looks like this

```javascript
export { default as Answer } from "./components/answer.js";
```

This will reexport the default export as `Answer` from this file.

If you run `rollup -c` (`-c` specifying that you have a custom config) you should see that it builds to an `output.js` file. However, if you look in here, you will see that the CSS is huge as Tailwind doesn't know if you're running locally or in production, and so assumes local and includes all the styles. You can quickly get around this by running

```bash
NODE_ENV=production rollup -c
```

but any way to set the environment variable `NODE_ENV` to production will work

## NPM publishing

Now we want to publish this package to npm, so make sure you have an npm account, then login with `npm login`, and add the flag `--scope` with your username, so I do:

```shell
npm login --scope=@samrobbins
```

Then to publish from the command line you can do

```shell
npm publish --access public
```

and this will publish it to npm. You need the `--access public` flag if you have a free account as scoped packages default to restricted but restricted packages are paid on npm.

## GitHub Action

Now we have a published package, but it's a bit of a pain to have to do this manually every time, so you can go further by creating a GitHub action to do it automatically

You can do this by creating a file insider `.github/workflows` of the `yml `format, for example, I created `publish.yml`

We'll go through this step by step, but if you want the whole file I'll put it at the bottom

First we want a name for our workflow, so we can see from the UI what is running if we have multiple actions, so set

```yaml
name: Node.js package
```

or whatever you want it called.

Next we want a trigger for this, I've chosen to have it when I create a GitHub release so that GitHub releases and NPM are in sync, but you can change the trigger if you want.

```yaml
on:
  release:
    types: [created]
```

Then we want to determine what is actually running. We don't need any operating specific features, so `ubuntu` is the best choice for the operating system to run it on.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
```

The rest of these steps sit underneath the `build:` key just like `runs-on`

First we want to get the code from our repository, this can be done with the `actions/checkout` action

```yaml
- uses: actions/checkout@v2
```

Then we want to set up our Node.js environment. Using the latest version of Node.js is suggested as some packages will use more modern Node.js features, for example I had Tailwind fail on Node.js 10. And we want to use the official npm registry as that's the one everyone is used to, but if you want to use something like the GitHub package repository, you could change that here.

```yaml
- uses: actions/setup-node@v1
  with:
    node-version: "12.x"
    registry-url: "https://registry.npmjs.org"
```

Then we want to install all our packages, and run the build command

```yaml
- run: npm install
- run: npm run-script build
```

And finally we want to publish. Instead of using `npm login` like we did locally, here we want to instead use a token. This can be found on the npm website, and make sure you get a **publish** token. Then add this as `NPM_TOKEN` in the repository you will be running the action in.

This will allow the final statement to work

```yaml
- run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

So in total, the file should look like this

```yaml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: "12.x"
          registry-url: "https://registry.npmjs.org"
      - run: npm install
      - run: npm run-script build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

And that's it! Whenever you create a release, it'll be published
