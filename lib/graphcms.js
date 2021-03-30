async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllPortfoliosWithSlug() {
  const data = await fetchAPI(`
    {
      portfolios {
        slug
      }
    }
  `);
  return data.portfolios;
}

export async function getAllSnippetsWithSlug() {
  const data = await fetchAPI(`
    {
      snippets {
        slug
      }
    }
  `);
  return data.snippets;
}

export async function getAllWritingsWithSlug() {
  const data = await fetchAPI(`
    {
      writings {
        slug
      }
    }
  `);
  return data.writings;
}

export async function getHomepage() {
  const data = await fetchAPI(`
  {
    homepages(first: 1) {
      name
      description
      email
      socialLinks {
        linkType
        link
      }
    }
    jobs {
      company
      duration
      title
      logo {
        url
      }
    }
    timelineItems {
      date
      description
      category
      title {
        html
      }
    }
  }

  `);
  return data;
}

export async function getAbout() {
  const data = await fetchAPI(`
  {
    abouts(first: 1) {
      cv {
        html
      }
      technologies {
        name
        link
        image {
          url
        }
      }
    }
  }
  

  `);
  return data.abouts;
}

export async function getPortfolios() {
  const data = await fetchAPI(`
{
  portfolios(orderBy: date_DESC) {
    id
    title
    slug
    date
    description
    featured
    categories
    coverImage {
      handle
      width
      height
      url
    }
  }
}
  `);
  return data.portfolios;
}

export async function getSnippets() {
  const data = await fetchAPI(`
{
  snippets {
    title
    language
    description
    slug
  }
}
  `);
  return data.snippets;
}

export async function getWritings() {
  const data = await fetchAPI(`
{
  writings(orderBy: date_DESC) {
    id
    title
    date
    slug
  }
}
  `);
  return data.writings;
}

export async function getPortfolioCategories() {
  const data = await fetchAPI(`
{
  __type(name: "PortfolioCategories") {
    enumValues {
      name
    }
  }
}
  `);
  return data.__type.enumValues;
}

export async function getSnippetLanguages() {
  const data = await fetchAPI(`
{
  __type(name: "SnippetLanguages") {
    enumValues {
      name
    }
  }
}
  `);
  return data.__type.enumValues;
}

export async function getPortfolio(slug) {
  const data = await fetchAPI(
    `
query PostBySlug($slug: String!) {
  portfolio(where: {slug: $slug}) {
    id
    markdown
    title
    description
    technologies {
      name
      image {
        handle
        width
        height
        url
      }
      link
    }
    github
    website
    coders
    npm
  }
}
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data.portfolio;
}

export async function getWriting(slug) {
  const data = await fetchAPI(
    `
query PostBySlug($slug: String!) {
  writing(where: {slug: $slug}) {
    id
    markdown
    title
    date
  }
}
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data.writing;
}

export async function getSnippet(slug) {
  const data = await fetchAPI(
    `
    query SnippetBySlug($slug: String!) {
      snippet(where: {slug: $slug}) {
        title
        description
        content
      }
    }
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data.snippet;
}
