---
title: "Moving away from Hugo"
date: 2020-12-17
description: "My decision to move away from Hugo as a Static Site Generator"
---

As part of the [Digital Ocean App Platform Hackathon](https://dev.to/devteam/announcing-the-digitalocean-app-platform-hackathon-on-dev-2i1k) I am going to remake my Portfolio website. The question here is why, when I have an existing portfolio website that does its job?

There are many reasons for this, but first I'll go over why I love my current setup

# Why Hugo is great

**Hugo is really really fast**, it does in milliseconds what will take other static site generators minutes. This means that I never need to worry about how long my build will take, and so the content is updated as fast as possible.

**Hugo is already set up to be a blogging platform**, there is built in support to mark files as drafts and so not publish them. You also don't need to add any boilerplate code to get up and running with a blog format where you have a page of all the blogs and lots of blog pages.

# Why I might want to move from Hugo

**I can use a CMS**, this gives a better authoring experience than what is possible with Hugo. I currently use Forestry as a CMS for Hugo, but due to it being git based rather than API based, there is a limit to the features it can provide. An example of this is when adding technologies to my portfolio projects, I have to manually set up the technology each time with title, image and link, whereas with an API based CMS I can predefine the technologies and just include them with one click.

**I can use React**, I'm thinking of moving away to a React based static site generator. This provides an advantage as I don't need to manually include Alpine.js which I currently use for the interactivity and React provides a greater range of features. I can also use React libraries such as Framer Motion to provide animation on the website.

**Greater flexibility**, Hugo is great at doing what it is designed to do, but I was already somewhat stretching the use case for Hugo with single pages beyond the index page. In comparison, React based static site generators are just frameworks for single page apps, and I can make whatever I want with them.
