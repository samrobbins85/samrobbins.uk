---
title: "LaTeX Tailwind plugin"
slug: "latex-tailwind-plugin"
description: "Tailwind CSS plugin to style prose like LaTeX"
date: 2020-12-30
icon: "simple-icons:latex"
website: "https://latex-tailwind.vercel.app/"
github: "https://github.com/samrobbins85/latex-tailwind"
npm: "https://www.npmjs.com/package/latex-tailwind"
technologies:
  - "tailwind-css"
  - "next-js"
---

This project is heavily inspired by [LaTeX.css](https://latex.now.sh/), but improves on it by only styling within a `div` of a specified class. This was important for me as I only wanted a certain part of my website to be styled in this way.

The first thing I needed for this was to write a function which took a dictionary and prefixed every entry with the class I wanted. For this I adapted some code found on stackoverflow to modify the keys in the way I wanted

```js
function prefix(inobj, prefix) {
  let replacedItems = Object.keys(inobj).map((key) => {
    const newKey = prefix + key;
    return {
      [newKey]: inobj[key],
    };
  });

  return replacedItems.reduce((a, b) => Object.assign({}, a, b));
}
```

Next I needed the fonts, luckily this was already included with LaTeX.css, so I could use jsdelivr to include them in my project. To include a font face in a Tailwind Plugin you need to add it to `base` like this

```js
base = {
  "@font-face": [
    {
      "font-family": "'Latin Modern'",
      "font-style": "normal",
      "font-weight": "normal",
      "font-display": "block",
      src: 'url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-regular.ttf") format("truetype") , url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-regular.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/vincentdoerig/latex-css/fonts/LM-regular.woff2") format("woff2")',
    },
  ],
};
```

I could then add the class `.latex-style` with `fontFamily: "LatinModern"` to my components and everything in the `div` would now show with that font.

I then went through adding the styles to `base` and `components` where appropriate, and using my `prefix` function for both to ensure the styles don't spread elsewhere.

Next up was adding some options. This can be extracted from the theme key in `tailwind.config.js`, so I gave two options, `footnotes` and `syntax`. Footnotes will also style footnotes, the reason why this is behind an option is that `remark-footnotes` will create the `div` for footnotes separate to the class the footnotes are defined in, so enabling this will style globally. `syntax` enables syntax highlighting for `prism.js`, and this will keep the style within the `div`, but is unnecessary for some websites, and so is not enabled by default.
