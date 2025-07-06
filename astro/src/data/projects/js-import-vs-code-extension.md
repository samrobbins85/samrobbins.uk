---
title: "JS Import VS Code Extension"
slug: "js-import-vs-code-extension"
description: "Install selected JS imports in VS Code"
date: 2022-06-29
icon: "simple-icons:visualstudiocode"
website: "https://marketplace.visualstudio.com/items?itemName=SamRobbins.vscode-js-import-install"
github: "https://github.com/samrobbins85/vscode-js-import-install"
technologies:
  - "javascript"
  - "acorn"
  - "rollup"
---

When trying snippets of JavaScript from the internet, I often ran into the issue that I didn't have the libraries installed, and so needed to look at each of the imports and turn them into a `yarn add` or `npm install` command.

To solve this, I created a VS Code Extension that allows you to highlight some imports, and all the libraries that aren't installed will be installed for you.

I started from the [VS Code Extension Template](https://code.visualstudio.com/api/get-started/your-first-extension) and replaced the hello world function with one called `getInstall`. To get this to run on right click I needed to add a new key to the `contributes` key in `package.json`

```json
"menus": {
    "editor/context": [
        {
            "command": "vscode-js-import-install.install",
            "group": "z_commands"
        }
    ]
}
```

To get the current selection I first needed to get the active text editor which can be found with `vscode.window.activeTextEditor` using the default `vscode` import. From here getting the text of the selection is:

```
editor.document.getText(editor.selection)
```

Due to the transition to es modules, I needed to be able to handle both `require` and `import` statements. I could have handled each of these separately, but decided to use the `rollup` bundler to convert the string to commonjs so I would only have `require` statements. I tried a few different approaches to this, including `babel` and `esbuild`, but as none of these are designed for this particular task it was tricky to find good functions that would allow for processing a string, and rollup ended up being the easiest. The function ended up looking like this

```js
async function roll(text) {
  const out = await rollup({
    input: "entry",
    plugins: [virtual({ entry: text })],
  });
  const gen = await out.generate({ format: "cjs" });
  return gen.output[0].code;
}
```

`@rollup/plugin-virtual` was used here to allow me to pass a string as rollup is typically used on files

Once I had a consistent data format, I then needed to parse the selection, for this I used `acorn` along with the `acorn-walk` package to walk the AST.

```js
walk.simple(acorn.parse(result, { ecmaVersion: 2020 }), {
  CallExpression(node) {
    if (node.callee.name === "require") {
      deps.push(node.arguments[0].value);
    }
  },
});
```

This goes over the string, looking at all `CallExpression`s which is all the called expressions in the code, such as `require("library")`, on each of these, it is checked that the function is named `require` and the first argument of the function is added to a list of dependencies.

Next is tidying the install to not include currently installed dependencies. This is done by reading the `package.json` in the project and parsing it to read the `dependencies` and `devDependencies` objects.

```js
async function getCurrentDependencies() {
  const doc = await vscode.workspace.openTextDocument(
    vscode.workspace.workspaceFolders[0].uri.path + "/package.json"
  );
  const json = JSON.parse(doc.getText());
  return [
    ...Object.keys(json.dependencies),
    ...Object.keys(json.devDependencies),
  ];
}
```

I also wanted to exclude reserved names included in node.js such as `fs`, for this I used the `builtin-modules` library which gives a list of these names.

Then with these two lists I could filter the list of selected dependencies to find the ones to install

```js
const toInstall = deps.filter(
  (item) =>
    !currentDependencies.includes(item) && !builtinModules.includes(item)
);
```

Next was finding the package manager to use, for this I decided just to look at `npm` and `yarn` as those are what I use, but this method could be expanded to look for things like `pnpm`. I started with the assumption that the package manager was `npm` and then read the files in the workspace to see if any were `yarn.lock` the yarn lockfile, and if so change the package manager to `yarn`

```js
async function getPackageManager() {
  let packageManager = "npm";
  const dir = await vscode.workspace.fs.readDirectory(
    vscode.workspace.workspaceFolders[0].uri
  );
  const entries = dir.map((item) => item[0]);
  if (entries.includes("yarn.lock")) {
    packageManager = "yarn";
  }
  return packageManager;
}
```

From there I could create a new terminal and run the install command, making sure to use `install` for `npm` and `add` for `yarn`

```js
const packageManager = await getPackageManager();
const terminal = vscode.window.createTerminal("Package Installer");
terminal.sendText(
  `${packageManager} ${
    packageManager === "npm" ? "install" : "add"
  } ${toInstall.join(" ")}`
);
```

Then to ensure this was released to the VS Code marketplace on new GitHub releases I used GitHub actions to run a deploy script on new releases

```yaml
on:
  release:
    types:
      - created

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14.x
      - name: Install vsce
        run: npm install -g vsce
      - run: yarn
      - name: Publish
        if: startsWith(github.ref, 'refs/tags/')
        run: yarn run deploy
        env:
          VSCE_PAT: ${{ secrets.VSCE_PAT }}
```

Where `deploy` is `vsce publish`
