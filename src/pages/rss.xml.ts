import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: any) {
  const blogs = await getCollection("blogs");

  return rss({
    title: "Sam's Blog",
    description: "A blog from Sam Robbins",
    site: context.site,
    items: blogs
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((blog) => ({
        title: blog.data.title,
        pubDate: blog.data.date,
        description: blog.data.description,
        link: `/blog/${blog.id}`,
      })),
  });
}
