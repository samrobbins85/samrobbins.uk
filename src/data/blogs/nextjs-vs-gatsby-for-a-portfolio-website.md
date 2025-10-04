---
title: "Next.js vs Gatsby for a portfolio website"
date: 2020-12-29
description: "Going through my decision of choosing a react static site generator"
---

When choosing a React static site generator, there are two major choices, Gatsby and Next.js, with fairly different approaches.

## Advantages of Gatsby

**Plugins** Gatsby has a huge range of plugins to make things simpler, including connections to CMSs and markdown processing.

**Image Component** Both frameworks now have an image component, but Gatsby has had one for much longer and so has had time to make it better.

## Advantages of Next.js

**I already know it** Obviously this one won't apply to everyone, but there's a big advantage to just choosing the framework you're most familiar with as there's no learning curve.

**Increased Flexibility** Gatsby is very much about "The Gatsby way of building", providing a range of systems in which you can build your app, whereas Next.js is more like an extension of Create React App, making it easier to build a wider variety of applications. Next.js also provides opportunities for having a backend through `getServerSideProps` and their API routes should I ever need to use it.

**Development Experience** Gatsby takes a lot longer to start the development server, which makes developing using it a somewhat painful experience on larger or more complex sites.

**Links with companies to optimize performance** As the most popular React framework, Next.js has seen contribution from Google and Facebook, using Next.js as the testing ground for new features.

## Conclusion

Overall, I decided to go with Next.js for my new site, and so far I'm very happy with my choice. Both solutions are good however, and you can't really go wrong either way.
