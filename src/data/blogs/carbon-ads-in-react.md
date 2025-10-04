---
title: "Carbon Ads in React"
date: 2021-03-14
description: "Creating a React component for Carbon Ads"
---

Recently I wanted to add adverts to my website, and [Carbon Ads](https://www.carbonads.net/) was the solution that jumped to mind. From seeing them around the internet, they were never clickbaity and were tailored for developers. However, the documentation for adding these to your project is very limited, just giving a JavaScript `script` tag to use. This is fine for static websites, but causes problems on Single Page Apps such as sites made with React as `script` tags don't load in the normal fashion. The result of this was that the ad would duplicate every time you went back to a page.

My first solution for this was to just hide the duplicated Ads using CSS as they had different class names, however this created more elements in the DOM than needed and was all round a very hacky solution.

However, I then saw that [VitePress](https://vitepress.vuejs.org/) had [implemented it in their code](https://vitepress.vuejs.org/config/carbon-ads.html) and so took a look to see how they were doing it. You can see exactly how they implemented it [here](https://github.com/vuejs/vitepress/blob/master/src/client/theme-default/components/CarbonAds.vue), but it boils down to

When the component is mounted:

- Create a script element
- Name this `_carbonads_js`
- Give this the `src` defined in the tag given to you by Carbon Ads
- Add this to a `div`

Knowing how they did it, I could then easily translate it to React

```jsx
import { useEffect, useRef } from "react";

export default function Ad({ code, placement }) {
  const reference = useRef();

  useEffect(() => {
    reference.current.innerHTML = "";
    const s = document.createElement("script");
    s.id = "_carbonads_js";
    s.src = `//cdn.carbonads.com/carbon.js?serve=${code}&placement=${placement}`;
    reference.current.appendChild(s);
  }, []);
  return <div className="flex justify-center my-2" ref={reference} />;
}
```

One thing you'll notice about this solution is that at the start I clear the `innerHTML` of the reference. This was because I was still getting the previous loaded ad left behind, so that needed to be removed to insert a new one. I'm not fully sure about why this is needed in React but not in Vue. Also, the `div` has some Tailwind CSS styles on it that I gave it to centre the ad

The styles for this component could be included inside the component using whichever CSS-in-JS package you want. However, because of the structure of my site with Tailwind CSS and that the classes to target are unique, I just included them in the global stylesheet.
