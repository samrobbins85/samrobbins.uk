---
title: "Photography portfolio"
slug: "photography-portfolio"
description: "A website to display my photography"
date: 2021-01-30
icon: "heroicons:camera"
website: "https://photos.samrobbins.uk/"
github: "https://github.com/samrobbins85/photos"
technologies:
  - "next-js"
  - "contentful"
  - "tailwind-css"
  - "simple-react-lightbox"
  - "motion"
  - "graphql"
---

One of my hobbies is photography, and I wanted a way to display my best pictures, and so decided to build a website for them. I chose Contentful for this as they by far have the largest bandwidth at .75 TB, and also have image optimization. Another good option for this would be Prismic as they have 100 GB of bandwidth but offer better image optimization using imgix, this would allow for serving the best format of images based on the browser, something Contentful doesn't offer.

Contentful has also recently launched a GraphQL API for fetching the content, which I much prefer over a REST API for this kind of request. As I was fetching data through `getStaticProps` in Next.js, performant features for GraphQL weren't important for me, so I just used the native `fetch` like this:

```js
async function fetchGraphQL(query, { variables } = {}, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
    }
  ).then((response) => response.json());
}
```

Then I pass in the GraphQL query using the `query` parameter, and if I need to use variables, these could also be supplied.

For this project I wanted to use the new Next.js `Image` component to optimize the images and load them optimally, they currently don't have a loader for Contentful, so I used the even newer feature of providing a custom loader. I created a new component called `CImage`, that included the loader, and used this in place of the base `Image` in all places, this component used the following code

```jsx
import Image from "next/image";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
export default function CImage(props) {
  return <Image {...props} loader={myLoader} />;
}
```

This will load the correct width for the viewport and allow customization of the quality, and if unchanged, use a quality of 75.

I also wanted to use Framer Motion to animate the lightbox when clicking on an image, however Framer only works with native HTML elements, not with React components. Even though I couldn't use it, I did want to try to make it, and created a working example using `AnimateSharedLayout` and `AnimatePresence` like this

```jsx
<AnimateSharedLayout type="crossfade">
  {pagedata.imagesCollection.items.map((x) => (
    <motion.div
      onClick={() => setSelectedId(x.url)}
      className="overflow-hidden mb-8 rounded-lg"
    >
      <motion.img
        layoutId={x.url}
        src={x.url}
        width={x.width}
        height={x.height}
        className="rounded-lg overflow-hidden mb-8 pb-0"
      />
    </motion.div>
  ))}
  <AnimatePresence>
    {selectedId && (
      <Modal selectedId={selectedId} setSelectedId={setSelectedId} />
    )}
  </AnimatePresence>
</AnimateSharedLayout>
```

Where the `Modal` component handled clicking outside to dismiss and included some more `motion` elements to allow for animation

```jsx
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
export default function Modal({ selectedId, setSelectedId }) {
  const node = useRef();
  const handleClickOutside = (e) => {
    console.log(e);
    if (selectedId) {
      if (node.current.contains(e.target)) {
        return;
      }
      setSelectedId(null);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="z-10 fixed pt-20 left-0 top-0 w-full h-full overflow-auto bg-black-opaque"
    >
      <motion.img
        layoutId={selectedId}
        className="max-w-2/3 max-h-3/4 z-10 m-auto text-center"
        src={selectedId}
        ref={node}
      />
    </motion.div>
  );
}
```

However, in order to also be able to use `next/image` I couldn't use this, and instead implemented [simple-react-lightbox](https://simple-react-lightbox.dev/). Sadly due to the way that images are loaded using `next/image` I couldn't just use the simple wrapper provided as the images wouldn't load. Fortunately `simple-react-lightbox` allows you to create a lightbox just using props to a component. So using the data from the CMS I could create an object to pass to the component using the following map

```js
const elements = pagedata.imagesCollection.items.map((x) => ({
  src: x.url,
}));
```

Then to open the images I added `onClick` to the images to open the lightbox. Simple React Lightbox provides a `useLightbox` hook which allows you to open and close the lightbox, and importantly you can open a specified image using its index using

```js
const { openLightbox, closeLightbox } = useLightbox();
openLightbox(2);
```

to open the 3rd picture (indexed from zero hence 2 is passed).

JavaScript maps allow you to also include the index, so I used the following map to loop over the images and open the correct one on click

```jsx
{
  pagedata.imagesCollection.items.map((x, index) => (
    <div
      onClick={() => openLightbox(index)}
      className="overflow-hidden mb-8 rounded-lg cursor-pointer"
    >
      <CImage
        src={x.url}
        width={x.width}
        height={x.height}
        className="rounded-lg overflow-hidden mb-8 pb-0"
      />
    </div>
  ));
}
```
