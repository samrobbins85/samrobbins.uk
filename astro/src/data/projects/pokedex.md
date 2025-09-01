---
title: "Pokedex"
slug: "pokedex"
description: "A Pokedex made using PokeAPI"
date: 2021-02-24
icon: "ic:baseline-catching-pokemon"
website: "https://pokedex.samrobbins.uk/"
github: "https://github.com/samrobbins85/pokedex"
technologies:
  - "tailwind-css"
  - "next-js"
  - "react"
  - "javascript"
  - "poke-api"
  - "swr"
  - "fuse-js"
---

This project uses PokeAPI, this is a RESTful API that allows you to fetch the details of Pokémon. This has the advantage of being able to simply fetch the data, however, the data may not always be exactly what you want.

## Data fetching

For data fetching I used the library `swr`, this provides simple methods for fetching data. Using this, I could detect if the data hadn't arrived yet as `data` wouldn't be true, and instead display a skeleton, reducing CLS. This also works well with pagination as the query will rerun if the string provided changed. This meant that I could use state of `pageIndex` and update this as the user clicked forward or backward, and just keep using the data provided, and it would be correct.

## Search

Search was done using fuse.js, this is a lightweight search library with a simple API. To perform the search, I needed to have a list of all the Pokémon, rather than just one page. To solve this, I used `getStaticProps` in Next.js to first fetch the first page, which would tell me how many Pokémon there were, then make a second request for that number of Pokémon, giving me an object with all the Pokémon. I then performed the search on this object, using `filter` to only show the results with a high likelihood of being correct.

## Images

To get a view of all the Pokémon, I accessed the `/v2/pokemon` endpoint. This provides the name of each Pokémon and the URL to of the API to get more information about that specific Pokémon. This is useful information, but doesn't provide the URL to the image of the Pokémon. Fortunately, the images are saved according to a certain structure, which relates the number of the Pokémon (provided in the URL to get more information about the Pokémon). So I could use this to get the images I wanted, but they wouldn't always be present. To fix this, I used the `onError` property of the image, to set the image to a poke ball if the image resulted in a 404.

## Details page

The details page was set up as a dynamic route in Next.js, so none of the pages were generated at build time, and instead the router would let the page know which Pokémon had been requested, and display that page. This was done as there are thousands of Pokémon, and so generating every page would have resulted in a long build process. If the request for the Pokémon resulted in an error, then the user would be shown a 404 error, as that likely meant that they were navigating to a Pokémon that didn't exist.

This page also includes a description of the Pokémon, however the descriptions are only present for the species, rather than the Pokémon, and so a second request is made for the species, and then a random selection of the flavor text entries in English are presented.
