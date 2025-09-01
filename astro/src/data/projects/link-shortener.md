---
title: "Link Shortener"
slug: "link-shortener"
description: "A link shortener and link tree made with the Raindrop API"
date: 2021-07-21
icon: "heroicons:link"
github: "https://github.com/samrobbins85/link-shortener"
website: "https://links.samrobbins.uk/"
technologies:
  - "tailwind-css"
  - "next-js"
  - "raindrop"
---

This was a nice small project to make a link shortener. The links I want are stored in [raindrop](https://raindrop.io), and they have an API I can use to fetch my links. To get access to your API token, go into settings, then integrations, and at the bottom there is a for developers tab, when you create your app, the "test token" will allow you to authenticate requests.

The useful endpoint for this project is `raindrops`. This allows you to specify a collection and get a list of all the "raindrops" (bookmarks) in that collection, so this request is all you need:

```js
const request = await fetch(
  `https://api.raindrop.io/rest/v1/raindrops/${process.env.collection}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.test_token}`,
    },
  }
);
```

The collection environment variable here is my collection that contains the links, this is the number at the end of the URL when you go to that collection on the website.

I then used the titles as the paths I wanted, and the descriptions get shown on the linktree. For the redirection, I used an API route in Next.js. This takes the provided path and filters the provided links by it, if there is a match then it will redirect to that link, otherwise will show a 404.

```js
const link = data.items.filter((item) => item.title === slug[0]);
if (link.length > 0) {
  res.redirect(link[0].link);
} else {
  res.status(404);
}
```

The redirects will fetch on every request, and the linktree uses `revalidate` in Next.js to serve new data every 60 seconds, otherwise serve the data from the last request.
