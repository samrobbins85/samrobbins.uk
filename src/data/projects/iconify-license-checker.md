---
title: "Iconify License Checker"
slug: "iconify-license-checker"
description: "Check the licenses of icons on your page"
date: 2022-07-28
icon: "simple-icons:iconify"
github: "https://github.com/samrobbins85/iconify-license-checker"
npm: "https://www.npmjs.com/package/@samrobbins/iconify-license"
technologies:
  - "javascript"
  - "puppeteer"
---

Recently I started working with icons from iconify, it's a really great system for unifying access to a variety of icon sets. However I wanted to make sure I was abiding by the conditions of all the licenses I was using.

Looking at the network requests made by the react component they provide, each of the requests was a standard form which included the icon set and each individual icon like this:

```
https://api.iconify.design/bi.json?icons=car-front-fill%2Cmarkdown-fill
```

Here the icon set is `bi` (after `.design` and before `.json`) and the icons were car-front-fill and markdown-fill (at the end, separated by `%2C`, an encoded comma).

The first step was getting all of these network requests, for this I used puppeteer, setting up the browser and page like normal with

```js
const browser = await puppeteer.launch();
const page = await browser.newPage();
```

Then the specific code to enable this is:

```js
await page.setRequestInterception(true);
const requests = [];
page.on("request", (request) => {
  requests.push(request.url());
  request.continue();
});
```

This sets up request interception on the page, then creates an empty array to fill with requests. The next part listens to the "request" events on the page, and adds all the urls to the array I created.

Then I make the actual request:

```js
await page.goto(url, {
  waitUntil: "networkidle2",
});
await browser.close();
```

This `waitUntil` is important as without it only the initial requests will be captured, the ones to iconify take a little longer because they take until react runs.

This array includes every request, so it gets filtered down to just the iconify ones with

```js
const iconifyRequests = requests.filter((item) =>
  item.startsWith("https://api.iconify.design/")
);
```

Next I need to get the icon set and specific icons out, for this I used group capturing in regular expressions with this regex]

```js
const re =
  /https:\/\/api\.iconify\.design\/(?<iconset>.+)\.json\?icons=(?<icons>.+)/;
```

Each URL is then tested against this regular expression, and turned into an object with the shape

```js
{
  iconSetName: [icon1, icon2];
}
```

Using the following code

```js
const iconsInSets = iconifyRequests
  .map((item) => item.match(re).groups)
  .reduce(
    (obj, item) =>
      Object.assign(obj, { [item.iconset]: item.icons.split("%2C") }),
    {}
  );
```

Then to find the licenses I use the library `@iconify/json` which has a function `lookupCollections` which gives all the icon sets, including their license

For each icon set, I looked up their license and grouped them by that to be the shape:

```js
license: [iconSet1, iconSet2];
```

Using this code:

```js
const allCollections = await lookupCollections();
let result = {};
Object.keys(iconsInSets).forEach((item) => {
  if (allCollections[item].license.spdx in result) {
    result[allCollections[item].license.spdx].push(item);
  } else {
    result[allCollections[item].license.spdx] = [item];
  }
});
```

The two created objects can then be used to log the licenses, which icon sets use it, and which icons are used in that icon set. I used the chalk library to create distinction between the three sets of data, along with indentation:

```js
Object.entries(result).forEach(([license, set]) => {
  console.log(chalk.bold(license));
  set.forEach((item) => {
    console.log(" " + item);
    iconsInSets[item].forEach((item) => console.log("   " + chalk.dim(item)));
  });
});
```
