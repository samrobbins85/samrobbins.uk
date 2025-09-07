---
title: "Adding captions to images in MDX"
date: 2020-09-14
description: "How to add a caption to an image using MDX"
---

Using [MDX](https://mdxjs.com/) you can overwrite the default components that are provided by Markdown. In this blog I will use this to add captions to images.

The first thing to do is to look at the [table of components](https://mdxjs.com/table-of-components) for MDX, and here we can see that images are represented by `img`. By following the link we can see the markdown

```markdown
![alpha](https://example.com/favicon.ico "bravo")
```

Yields the following items

```javascript
{
  type: 'image',
  url: 'https://example.com/favicon.ico',
  title: 'bravo',
  alt: 'alpha'
}
```

To adapt this component, we are going to use `title` as the caption

Then we create a React component, where each of the keys are passed inside props

```jsx
function MyImg(props) {
  if (props.title !== undefined) {
    return (
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption>{props.title}</figcaption>
      </figure>
    );
  } else {
    return <img src={props.src} alt={props.alt} />;
  }
}
```

A conditional statement is used here so that no excess formatting is introduced if no title is present. The standard figure layout is used as a tag is there specifically for captions

You can then pass this component to MDX in the method detailed [here](https://mdxjs.com/getting-started/#working-with-components) and the captions should not display themselves. You can then apply CSS or classes to the HTML tags in order to style it as you want.
