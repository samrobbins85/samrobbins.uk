---
title: "Prevent a Vercel site from being indexed"
date: 2021-05-20
description: "Use headers to ensure that a site deployed on Vercel isn't indexed"
---

There are cases in which you won't want a site to be indexed. For me, this was because I have a previous version of my portfolio website available as a template, and that outdated template was coming up when searching about me because I included some information about me.

To solve this problem, the [x-robots-tag](https://developers.google.com/search/docs/advanced/robots/robots_meta_tag) is provided, which allows you to specify if you want your site to be visible on search engines. This tag is to be set as an HTTP header from requests made to the website, and this is made easy in Vercel, you can read more about all the headers [here](https://vercel.com/docs/edge-network/headers), and how to implement them [here](https://vercel.com/docs/edge-network/headers). In my case, I want the whole site to not be indexed, and so I want a source pattern that covers the whole site, for Vercel this pattern is `/(.*)`.

There are a range of options for the `x-robots-tag`, I'm going to choose `noindex`, which will ensure that any of the pages on the site won't be indexed, however links from the site to other sites will be indexed. This is fine for me as it means that social links will be indexed and things like that, however if you don't want any indexing to happen, you can use `none`.

Now to the actual implementation, you want to create a `vercel.json` file if you don't have one already, and add

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "x-robots-tag",
          "value": "noindex"
        }
      ]
    }
  ]
}
```

If you already have a `vercel.json` file, ignore the outer braces, and just add the `headers` key inside your object.

Your site should redeploy on changing this file, and once it has deployed, then you can run

```bash
curl -I [url]
```

Replacing `[url]` with whatever the domain you don't want indexing is. This will give you a big list of properties, the one you're looking for is `x-robots-tag`, and it should be whatever you have set it to
