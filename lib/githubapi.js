async function fetchAPI(query, { variables } = {}) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
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

export default async function getSearch() {
  const data = await fetchAPI(`
  {
    search(query: "is:pr author:samrobbins85 archived:false is:merged -org:samrobbins85", type: ISSUE, first: 100) {
      edges {
        node {
          ... on PullRequest {
            title
            permalink
            mergedAt
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
  `);
  return data.search.edges;
}
