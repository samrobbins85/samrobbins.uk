/* eslint-disable global-require */
import { Feed } from "feed";
import path from "path";
import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from "fs";
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
}

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

async function getAllBlogs() {
  const data = await fetchAPI(`
  {
    allArticles(orderBy: date_DESC) {
      slug
      title
      description
      date
    }
  }
  `);
  return data.allArticles;
}

const siteUrl = "https://samrobbins.uk";
const feed = new Feed({
  title: "Sam Robbins' Blog",
  description: "Posts about web development and more",
  id: siteUrl,
  link: siteUrl,
  language: "en",
  image: `${siteUrl}/favicon.svg`,
  favicon: `${siteUrl}/favicon.svg`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Sam Robbins`,
  feedLinks: {
    rss: `${siteUrl}/feed.xml`,
    json: `${siteUrl}/feed.json`,
    atom: `${siteUrl}/atom.xml`,
  },
  author: {
    name: "Sam Robbins",
    link: "https://twitter.com/samrobbins85",
  },
});

// // await getAllBlogs().forEach((x) => console.log(x.title));
// await console.log(getAllBlogs);
const blogs = await getAllBlogs();

blogs.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: siteUrl + "/" + post.slug,
    link: siteUrl + "/" + post.slug,
    description: post.description,
    date: new Date(post.date),
  });
});

fs.writeFileSync("./public/feed.xml", feed.rss2());
fs.writeFileSync("./public/atom.xml", feed.atom1());
fs.writeFileSync("./public/feed.json", feed.json1());
