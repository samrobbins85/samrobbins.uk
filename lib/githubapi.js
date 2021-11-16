import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GITHUB}`,
  },
});
const GitHubSearch = gql`
  {
    search(
      query: "is:pr author:samrobbins85 archived:false is:merged -org:samrobbins85"
      type: ISSUE
      first: 100
    ) {
      edges {
        node {
          ... on PullRequest {
            title
            permalink
            createdAt
            repository {
              name
              url
              owner {
                avatarUrl
                login
                ... on Organization {
                  name
                }
                ... on User {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default async function getSearch() {
  const data = await graphQLClient.request(GitHubSearch);
  return data.search.edges;
}
