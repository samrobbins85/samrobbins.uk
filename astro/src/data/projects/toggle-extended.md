---
title: "Toggle Extended"
slug: "toggle-extended"
description: "Extending on the features provided from Toggl"
date: 2021-07-11
icon: "simple-icons:toggl"
website: "https://toggl.samrobbins.uk/"
github: "https://github.com/samrobbins85/toggl-extended"
technologies:
  - "tailwind-css"
  - "next-js"
  - "react"
  - "toggl"
  - "wise"
  - "swr"
  - "axios"
---

This project is designed to allow me to take the hours I've worked on any client in Toggl, provide my rate in any currency, and find out how much I'll earn for that period of time.

The first step is getting the user login, for this I used the API token, it's mentioned in the [documentation](https://github.com/toggl/toggl_api_docs/blob/master/chapters/authentication.md) that the username password combination could also be used, but I couldn't get this working, possibly because I have 2FA enabled. Regardless I prefer using the token as it's easier for the user to revoke and I don't want to touch user's passwords. This then gets encoded using base64 as `xxxx:api_token` with `xxxx` being your api token and `api_token` literally being that verbatim.

This then gets used to fetch the workspaces the user has, allowing them to select which one they want to use. Both the token and the workspace are stored in localStorage so that this will be persisted between sessions. In addition, these two details are required for every other request, and so they're stored in global state to easily access.

The next input is for the client, for this I used the `react-select` library as I wanted the user to be able to both select and search for their client, and this has the added benefit of selecting multiple clients if that proves useful.

The input for duration initially uses the current date, but can be changed by the user using the default browser datepicker, then I use a select to choose between common durations. This does offer less flexibility than a free form input, but the structure makes it quicker and means that you can select a month, which simply adding a day picker couldn't allow for.

All this information is then enough to display to the user the number of hours they've worked. When the temporal proposal for JavaScript comes out, this formatting work will be nicer, as currently it's a bit ugly:

```js
function formatDuration(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${hours}:${minutes}:${seconds}`;
}
```

I display both decimal hours and hours:minutes:seconds for flexibility as both are useful information, and the decimal hours allows for manually calculating rate if you want.

## Rate and currency

For allowing for different currency inputs I used the [Wise API](https://api-docs.transferwise.com/), partially because it's free, and because it's what I personally use for exchanging money, and so is the most useful number to me. This is fetched using `getStaticProps` along with a `revalidate` parameter of a day as exchange rates don't fluctuate that much, and so even if the data is a day old it will still be pretty accurate. This also allows me to prevent passing my API key to the user as the wise API is strange in that it only lets you create an API key linked to an account, luckily this can be a sandbox account, so no damage could actually be done, but still not the kind of API key I want to be giving out publicly.

This data is then used for the currency selector by turning it into an array and mapping over it, with the addition of not exchanging the currency and staying with GBP at an exchange rate of 1.

Once this is done, the earnings can then be displayed. I show this both in the source currency and my currency, so you know both what to invoice for and what you'll receive. The library [currency-symbol-map](https://www.npmjs.com/package/currency-symbol-map) is very useful here, as it allows me to show the currency symbol for any of the selected currencies, making it obvious which is the foreign currency.

## CORS issues

The toggl API implements CORS, which wasn't an issue using my local development, however when it came to hosting, it prevented the site from working. They do let you get in contact with them to add your domain to the configuration, however as this is just a small site, that seemed like a bad use of their time. Therefore, my solution for this was to implement a proxy using Next.js rewrites, as then the responses would be coming from the correct domain. This was surprisingly simple, just requiring a small change to my `next.config.js`

```js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/toggl/:slug*",
        destination: "https://api.track.toggl.com/:slug*",
      },
    ];
  },
};
```
