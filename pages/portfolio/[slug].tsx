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
import { InferGetStaticPropsType } from "next";

const components = {
  table: MyTable,
};

function Category({ name, technologies }) {
  const items = technologies.filter((item) => name === item.category);
  if (items.length === 0) {
    return null;
  }
  return (
    <div className="flex-1/2 sm:flex-1/4">
      <p className="font-semibold text-sm uppercase pb-1 tracking-wide">
        {name}
      </p>
      <ul>
        {items.map((y) => (
          <li key={y.name}>
            <a
              className="text-radix-cyan11 hover:underline focus:underline"
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

export default function Portfolio({
  data,
  renderedOutput,
  names,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={data.title} description={data.description}>
      <h1 className="text-5xl sm:text-6xl text-center font-bold pt-2">
        {data.title}
      </h1>
      <h2 className="text-center text-radix-slate11 text-lg pt-6">
        {data.description}
      </h2>
      <div className="flex justify-center pt-6 gap-x-12 flex-wrap gap-y-4 items-center">
        {data.website ? <WebsiteButton url={data.website} /> : undefined}
        {data.github ? <GitHubButton repos={data.github} /> : undefined}
        {data.npm ? <NPMButton url={data.npm} /> : undefined}
      </div>
      {data.coders.length !== 0 && (
        <aside className="pt-4">
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
        </aside>
      )}

      <aside className="slate-bg slate-border max-w-prose mx-auto my-4 border ">
        <div className="flex flex-wrap px-4 gap-y-6 py-6 justify-center text-center">
          {categories.map((x) => (
            <Category name={x} technologies={data.technologies} key={x} />
          ))}
        </div>
      </aside>
      <div className="prose dark:prose-light mx-auto">
        <MDXRemote {...renderedOutput} components={components} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPortfolio(params.slug);
  const categoriesData = await getTechnologyCategories();
  let categories = categoriesData.map((x) => x.name);
  // Sorts categories by how many items have that category
  const techlist = data.technologies.map((item) => item.category);
  categories = categories.sort(
    (a, b) =>
      techlist.filter((item) => item === b).length -
      techlist.filter((item) => item === a).length
  );

  const renderedOutput = await serialize(data.markdown, {
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
