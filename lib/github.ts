import { getSdk } from "./github.generated";

import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GITHUB}`,
  },
});

const sdk = getSdk(client);

export async function getPRs() {
  const data = await sdk.getPRs();

  return data.search.edges.map((x) => x.node);
}
