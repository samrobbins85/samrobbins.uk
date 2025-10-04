---
title: "Hugo versions in hosting"
date: 2020-06-26
description: "Issues when it comes to the versions of Hugo supplied by hosting"
---

I recently wanted to add some syntax highlighting to my Hugo theme, a simple enough task right? Hop over onto the Hugo documentation [here](https://gohugo.io/getting-started/configuration-markup#highlight) and change the config file. I then ran `hugo server` to check everything was working, and it was looking wonderful

So what's the problem? I wanted to deploy it. I use Vercel hosting for all my projects, which is fantastic and as you will see, this is more an oversight on my part than their fault. I pushed the code to GitHub and checked the preview link, and no styling! Very confused, I try and deploy on Netlify, but I get exactly the same result.

The problem here is one that I was actually warned about in the Vercel logs, but I just ignored, my theme was incompatible with the version of Hugo installed. At some point between the version of Hugo Vercel had and the version I had the syntax highlighting features had been changed/added.

The solution to this, in Vercel at least is simply to specify the version of Hugo I needed, you can see how to do this [here](https://vercel.com/guides/deploying-hugo-with-vercel). All you need to do is to edit your `vercel.json` adding the following lines:

```json
{
  "build": {
    "env": {
      "HUGO_VERSION": "0.71.0"
    }
  }
}
```

Replacing the version with whatever version works best for you.

So a lesson for the future, if it "Works on my machine™" but not when deployed, check the versions running.
