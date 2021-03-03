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
    socialLinks {
      linkType
      link
    }
    portfolios {
      id
      title
      slug
      coverImage {
        url
      }
      description
    }
    achievements(orderBy: date_DESC) {
      date
      description
      image {
        handle
        width
        height
        url
      }
      achievement
      backgroundColour {
        hex
      }
      icon {
        url
      }
    }
  }
}

  `);
  return data.homepages;
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
      jobs {
        company
        duration
        title
        logo {
          url
        }
      }
      timeline {
        __typename
        ... on Hackathon {
          date
          project
          slug
          name
          achievement
          image {
            url
          }
          projectDescription
        }
        ... on Event {
          date
          eventName
          location
          logo {
            url
          }
          description
        }
        ... on Education {
          date
          institution
          qualification
          image {
            url
          }
          description
        }
        ... on Award {
          title
          id
          company
          date
          description
          image {
            url
          }
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
    github
    website
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
