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

export async function getAllBlogs(slug) {
  const data = await fetchAPI(
    `
query MyQuery($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    title
    description
    date
    structuredtext{
      value
    }
  }
}
  `,

    {
      variables: {
        slug,
      },
    }
  );
  return data.article;
}
