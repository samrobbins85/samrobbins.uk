---
title: "Oxford Digithon"
slug: "oxford-digithon"
description: "A Firefox Browser Extension"
date: 2020-05-30
icon: "simple-icons:firefoxbrowser"
github: "https://github.com/karina-talibzhanova/oxfordhack2020"
technologies:
  - "javascript"
  - "firefox-webextensions"
---

For this project we created a web browser extension designed to make you less productive. It did this by making productive websites difficult to use and directing you away from them.

This was created using the WebExtensions API so should be compatible with browsers other than Mozilla Firefox, but all our testing was done on that.

## Installation

To install, first download the project from the GitHub linked at the top of the page

```bash
git clone https://github.com/karina-talibzhanova/oxfordhack2020.git
```

Then navigate to the url `about:debugging#/runtime/this-firefox`, this gives you the option to load a temporary addon. By selecting any file in the root level of the directory downloaded, the extension will be installed.

## Features

### Page detection

This extension will detect if you are on a productive page to move you away from it. In order to detect these changes, the following two functions are used

```js
async function handleActivated(info) {
  try {
    let tabInfo = await browser.tabs.get(info.tabId);
    action_url(tabInfo.url, info.tabId);
  } catch (error) {
    console.error(error);
  }
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    action_url(changeInfo.url, tabID);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
browser.tabs.onActivated.addListener(handleActivated);
```

Due to the different nature of the result of a created tab compared to switching to a tab, two different functions were needed, but they then feed into the same function.

### Timer

There is a timer visible in the icon of the extension which will count down when you are on productive websites, and when you are at the end of the timer, it will redirect you to a distracting page. This was created using the following function for redirection:

```js
function close_tab(tabID) {
  browser.tabs.create({ url: "https://www.facebook.com" });
  browser.tabs.remove(tabID);
  browser.browserAction.setBadgeBackgroundColor({ color: "green" });
  browser.browserAction.setBadgeText({ text: "✓" });
}
```

And this function for the timer:

```js
function time_notification(url, tabID) {
  console.log("Creating a timer!");
  var seconds = 60;
  browser.notifications.create("reee", {
    type: "basic",
    title: "Timer",
    message:
      "You have " +
      String(seconds) +
      " seconds to get back to procrastinating.",
  });
  if (typeof countdown != "undefined") {
    clearInterval(countdown);
    console.log("Removing a timer");
  }

  countdown = setInterval(function () {
    if (seconds <= 0) {
      clearInterval(countdown);
      close_tab(tabID);
      // mess around with the user here
    } else if (good.includes(url)) {
      clearInterval(countdown);
    } else {
      seconds -= 1;
      browser.browserAction.setBadgeText({ text: String(seconds) });
    }
  }, 1000);
}
```

### Changing the background colours of all the divs

Due to the more aggressive nature of this intervention, it needed to be implemented as a content script, which we named `page-eater.js`. This file is then referenced in the `manifest.json` in the following way:

```json
{
  "content_scripts": [
    {
      "matches": ["*://*/*"],
      "js": ["page-eater.js"]
    }
  ]
}
```

The `"matches"` parameter takes a regular expression of which pages to run on, in our case, most pages, the `"js"` parameter then takes the file name of the content script.

In order to make the internet somewhat usable, we limited the scope of this intervention to wikipedia and ran the following code

```js
if (window.location.href.startsWith("https://en.wikipedia.org")) {
  for (let j = 0; j < document.getElementsByTagName("*").length; j++) {
    var elem = document.getElementsByTagName("*")[j];
    elem.style["background-color"] =
      "rgb(" +
      String(Math.floor(Math.random() * 255)) +
      "," +
      String(Math.floor(Math.random() * 255)) +
      "," +
      String(Math.floor(Math.random() * 255)) +
      ")";
  }
}
```

### Removing divs

Another content script based intervention is to progressively remove all the divs from the page until it is unusable. Again, this is an aggressive method, so we limited the scope to stack overflow.

```js
if (window.location.href.startsWith("https://stackoverflow.com")) {
  var index_count = document.getElementsByClassName("question-summary").length;
  var i = 0;
  var delete_elems = setInterval(function () {
    if (i >= index_count) {
      clearInterval(delete_elems);
    }

    var elem = document.getElementsByClassName("question-summary")[i];
    elem.style["opacity"] = 0;
    i += 1;
  }, 1000);
}
```
