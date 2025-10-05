---
title: "Capitalize first letter of string"
language: "JavaScript"
date: 2021-04-18
---

If just showing on a website, may be easier to use `text-transform: capitalize`

```js
const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
```
