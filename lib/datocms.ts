import { getSdk } from "./dato.generated";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://graphql.datocms.com/", {
  headers: { Authorization: `Bearer ${process.env.DATO}` },
});
const sdk = getSdk(client);

export async function getAllBlogsWithSlug() {
  const data = await sdk.GetAllBlogsWithSlug();
  return data.allArticles;
}

export async function essaySlugs() {
  const data = await sdk.GetAllEssaysWithSlug();
  return data.allEssays;
}

export async function getAllBlogs() {
  const data = await sdk.GetAllBlogs();
  return data.allArticles;
}

export async function getAllEssays() {
  const data = await sdk.GetAllEssays();
  return data.allEssays;
}

export async function getAbout() {
  const data = await sdk.getAbout();
  return data.about;
}

export async function getHome() {
  const data = await sdk.GetHome();
  return data.homepage;
}

export async function getBlog(slug) {
  const data = await sdk.GetBlog({ slug });
  return data.article;
}

export async function getEssay(slug) {
  const data = await sdk.GetEssay({ slug });
  return data.essay;
}
