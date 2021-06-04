import {
  getPortfolio,
  getAllPortfoliosWithSlug,
  getTechnologyCategories,
} from "@/lib/graphcms";
import rehypePrism from "@mapbox/rehype-prism";
import GitHubButton from "@/components/portfolio/githubButton";
import Coder from "@/components/portfolio/coder";
import { MyTable } from "@/components/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { WebsiteButton, NPMButton } from "@/components/portfolio/smallbutton";
import Layout from "@/components/layout";

const components = {
  table: MyTable,
};

function Category({ name, technologies }) {
  const items = technologies.filter((item) => name === item.category);
  if (items.length === 0) {
    return null;
  }
  return (
    <div>
      <p className="font-semibold text-sm uppercase pb-1 tracking-wide">
        {name}
      </p>
      <ul>
        {items.map((y) => (
          <li>
            <a
              className="text-nord-10 dark:text-nord-8 hover:underline"
              href={y.link}
            >
              {y.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Portfolio({ data, renderedOutput, names, categories }) {
  return (
    <Layout title={data.title} description={data.description}>
      <h1 className="text-5xl sm:text-6xl text-center font-bold pt-2">
        {data.title}
      </h1>
      <h2 className="text-center text-gray-600 text-lg pt-6 dark:text-gray-300">
        {data.description}
      </h2>
      <div className="flex justify-center pt-6 gap-x-12 flex-wrap gap-y-4 items-center">
        {data.website ? <WebsiteButton url={data.website} /> : undefined}
        {data.github ? <GitHubButton repos={data.github} /> : undefined}
        {data.npm ? <NPMButton url={data.npm} /> : undefined}
      </div>
      {data.coders.length !== 0 && (
        <div className="pt-4">
          <h2 className="text tracking-widest text-center uppercase ">
            Made by
          </h2>
          <div className="flex justify-center py-4">
            <div className="flex space-x-2 overflow-hidden gap-x-4 flex-wrap gap-y-2 justify-center">
              {data.coders.map((username, index) => (
                <Coder username={username} name={names[index]} key={username} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-nord-6 dark:bg-nord-0 dark:border-gray-800 max-w-prose mx-auto my-4 border border-nord-5">
        <div className="grid sm:grid-cols-4 px-4 gap-y-6 py-6 justify-center text-center">
          {categories.map((x) => (
            <Category name={x.name} technologies={data.technologies} />
          ))}
        </div>
      </div>
      <div className="prose dark:prose-light mx-auto">
        <MDXRemote {...renderedOutput} components={components} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPortfolio(params.slug);
  const categories = await getTechnologyCategories();

  const renderedOutput = await serialize(data.markdown, {
    components,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });
  const names = [];
  if (data.coders.length !== 0) {
    for (let i = 0; i < data.coders.length; i++) {
      const name = await fetch(
        `https://api.github.com/users/${data.coders[i]}`,
        {
          headers: {
            // eslint-disable-next-line no-undef
            Authorization: `token ${process.env.GITHUB}`,
          },
        }
      );
      const out = await name.json();
      names.push(out.name);
    }
  }
  return {
    props: {
      data,
      renderedOutput,
      names,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPortfoliosWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
