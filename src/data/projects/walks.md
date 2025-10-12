---
title: "Walks"
slug: "walks"
description: "A website to track my walks"
date: 2025-10-12
icon: "gis:signpost"
github: "https://github.com/samrobbins85/walks"
website: "https://walks.samrobbins.uk"
technologies:
  - "astro"
  - "cloudflare-r2"
  - "leaflet"
  - "turf"
  - "photoswipe"
---

One of my hobbies is hiking and I like to join together paths to generate large loops or trails, and wanted a way to visualise my progress on this. I plot each of my walks in OS Maps beforehand, which lets me export the route as a GPX file, which I could then use [Placemark](https://play.placemark.io/) to tidy up and export as GeoJSON. This GeoJSON could then be plotted by leaflet onto a map.

## Colouring

The first challenge was colouring the paths, I wanted each to be distinct, and so this could be turned into a graph colouring problem, but with a slight variation in that instead of minimising the number of colours used, I wanted to make the best use of the list of colours I had.

In order to do this I used this code

```js
const getColorFromNeighbours = (neighbourColours) => {
  const unused = brewerColors.filter(
    (colour) => !neighbourColours.includes(colour)
  );
  return unused[Math.floor(Math.random() * unused.length)];
};

export function calculateGraphColouring(routes) {
  let adjacency = Object.fromEntries(routes.map((route) => [route.slug, []]));
  const colouring = Object.fromEntries(
    routes.map((route) => [route.slug, undefined])
  );
  routes.forEach((focusRoute, index) => {
    const bufferedLine = turf.buffer(focusRoute.geojson, 3, {
      units: "kilometers",
    });
    routes.slice(index + 1).forEach((comparisonRoute) => {
      const intersect = turf.booleanIntersects(
        bufferedLine,
        comparisonRoute.geojson
      );
      if (intersect) {
        adjacency[focusRoute.slug].push(comparisonRoute.slug);
        adjacency[comparisonRoute.slug].push(focusRoute.slug);
      }
    });
  });

  Object.entries(adjacency).forEach(([node, neighbours]) => {
    const used_neighbour_colours = neighbours.map(
      (neighbour) => colouring[neighbour]
    );
    colouring[node] = getColorFromNeighbours(used_neighbour_colours);
  });
  return colouring;
}
```

This loops over the routes and uses Turf to find if another route is within 3km of it, at which point I consider them adjacent, as some paths start from one opposite ends of a village and things like that. This gets me an object that looks like

```json
{
  "alnmouth-to-ashington": ["alnmouth-to-bamburgh", "ashington-to-whitley-bay"],
  "alnmouth-to-bamburgh": ["alnmouth-to-ashington"]
  // and so on
}
```

Then when colouring a node, I check the colours assigned to the neighbours, and pick a random colour from the remaining colours, a distinction from traditional greedy colouring where I would choose the lowest available index in the list.

## Bounds

On the map I also wanted it to start on Northumberland, where I do most of my hiking, and to not allow people to pan away from the routes entirely.

For the Northumberland bounds I just added these manually and set `map.fitBounds(coordinates)`. For the overall bounds I initialised an empty `let combinedBounds = L.latLngBounds([])` and when adding the routes to the map I also ran `combinedBounds.extend(layer.getBounds())` and set `map.setMaxBounds(combinedBounds.pad(0.2))`.

## Images

Initially I used images in the repository and kept them in the same folder as the rest of the walk data so I could pull out the images based on the slug. However after adding more walks this caused the repository to get very large which was slowing down deployments and getting close to GitHub's repository size limit. One option would have been git LFS but the limits for GitHub are quite small and it would still require the deployment to pull the images. So instead I looked at Cloudflare R2, an equivalent to Amazon S3 but with 10GB free, which would be plenty for my needs.

In the image upload, I wanted to set metadata to mark one of them as the cover image which would be shown on the walk card and to provide image widths and heights for the gallery at the bottom to work correctly. As this can't be done in the cloudflare GUI, I set up a separate project [walk-image-manager](https://github.com/samrobbins85/walk-image-manager) which is a command line tool to assist with the uploading. It takes a folder as the input and shows the images in a list to choose the cover photo and adds them all to R2. One of the fiddlier parts was getting the image dimensions as the libraries available for deno/npm didn't support `.webp`, so instead I used `identify`, a part of `imagemagick` which has a wide support for image formats like this

```ts
async function getImageDimensions(path: string) {
  const cmd = new Deno.Command("identify", {
    args: ["-format", "%w %h", path],
    stdout: "piped",
    stderr: "piped",
  });

  const { code, stdout, stderr } = await cmd.output();

  if (code !== 0) {
    const errorString = new TextDecoder().decode(stderr);
    throw new Error(`identify failed: ${errorString}`);
  }

  const output = new TextDecoder().decode(stdout).trim();
  const [width, height] = output.split(" ");

  return { width, height };
}
```

In Astro I can then request the objects with the prefix of the slug, and get the Metadata and turn this into an object that can be used on the walk pages to populate all the images

```ts
export default async function getImages(slug: string) {
  const listResp = await s3.send(
    new ListObjectsV2Command({
      Bucket: import.meta.env.R2_BUCKET,
      Prefix: `${slug}/`,
      Delimiter: undefined,
    })
  );
  if (!listResp?.Contents) {
    return [];
  }

  const mappedContents = await Promise.all(
    listResp.Contents.map(async (file) => {
      const tags = await s3.send(
        new HeadObjectCommand({
          Bucket: import.meta.env.R2_BUCKET,
          Key: file.Key,
        })
      );
      return {
        ...file,
        src: import.meta.env.PUBLIC_ASSET_SERVER + file.Key,
        cover: tags.Metadata?.cover === "true",
        width: tags.Metadata?.width,
        height: tags.Metadata?.height,
      };
    })
  );
  return mappedContents;
}
```
