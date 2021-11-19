import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphcms.generated";
const client = new GraphQLClient(process.env.GRAPHCMS_URL, {
  headers: { Authorization: `Bearer ${process.env.GRAPHCMS_PROD}` },
});
const sdk = getSdk(client);

export async function getAllPortfoliosWithSlug() {
  const data = await sdk.getAllPortfoliosWithSlug();
  return data.portfolios;
}

export async function getAllSnippetsWithSlug() {
  const data = await sdk.getAllSnippetsWithSlug();
  return data.snippets;
}

export async function getPortfolios() {
  const data = await sdk.getPortfolios();
  return data.portfolios;
}

export async function getSnippets() {
  const data = await sdk.getSnippets();
  return data.snippets;
}

export async function getPortfolioCategories() {
  const data = await sdk.getPortfolioCategories();
  return data.__type.enumValues;
}

export async function getSnippetLanguages() {
  const data = await sdk.getSnippetLanguages();
  return data.__type.enumValues;
}

export async function getTechnologyCategories() {
  const data = await sdk.getTechnologyCategories();
  return data.__type.enumValues;
}

export async function getPortfolio(slug) {
  const data = await sdk.getPortfolio({ slug });
  return data.portfolio;
}

export async function getSnippet(slug) {
  const data = await sdk.getSnippet({ slug });
  return data.snippet;
}
