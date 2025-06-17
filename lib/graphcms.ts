import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphcms.generated";
import { limit } from "./throttle";
const client = new GraphQLClient(process.env.GRAPHCMS_URL, {
  headers: { Authorization: `Bearer ${process.env.GRAPHCMS_PROD}` },
});
const sdk = getSdk(client);

export async function getAllPortfoliosWithSlug() {
  return limit(() =>
    sdk.getAllPortfoliosWithSlug().then((res) => res.portfolios)
  );
}

export async function getAllSnippetsWithSlug() {
  return limit(() => sdk.getAllSnippetsWithSlug().then((res) => res.snippets));
}

export async function getPortfolios() {
  return limit(() => sdk.getPortfolios().then((res) => res.portfolios));
}

export async function getSnippets() {
  return limit(() => sdk.getSnippets().then((res) => res.snippets));
}

export async function getPortfolioCategories() {
  return limit(() =>
    sdk.getPortfolioCategories().then((res) => res.__type.enumValues)
  );
}

export async function getSnippetLanguages() {
  return limit(() =>
    sdk.getSnippetLanguages().then((res) => res.__type.enumValues)
  );
}

export async function getTechnologyCategories() {
  return limit(() =>
    sdk.getTechnologyCategories().then((res) => res.__type.enumValues)
  );
}

export async function getPortfolio(slug: string) {
  return limit(() => sdk.getPortfolio({ slug }).then((res) => res.portfolio));
}

export async function getSnippet(slug: string) {
  return limit(() => sdk.getSnippet({ slug }).then((res) => res.snippet));
}
