import { getPortfolio, getAllPortfoliosWithSlug } from "@/lib/graphcms";
import Image from "next/image";
import rehypePrism from "@mapbox/rehype-prism";
import GitHubButton from "@/components/portfolio/githubButton";
import Coder from "@/components/portfolio/coder";
import MyTable from "@/components/mdx/table";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import { WebsiteButton, NPMButton } from "@/components/portfolio/smallbutton";
import Layout from "@/components/layout";

const components = {
  table: MyTable,
};
export default function Portfolio({ data, renderedOutput, names }) {
  return (
    <Layout title={data.title}>
      <h1 className="text-5xl sm:text-6xl text-center font-bold pt-2">
        {data.title}
      </h1>
      <h2 className="text-center text-gray-600 text-lg pt-6 dark:text-gray-300">
        {data.description}
      </h2>
      <div className="flex justify-center pt-10 gap-x-12 flex-wrap gap-y-4">
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
      <div className="py-2 pt-10">
        <h2 className="text tracking-widest text-center uppercase ">
          Made using
        </h2>
        <div className="flex justify-center gap-x-8 flex-wrap gap-y-4 py-4">
          {data.technologies.map((item) => (
            <a className="relative h-18 w-24" href={item.link} key={item.name}>
              <Image
                src={item.image.url}
                alt={item.name}
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          ))}
        </div>
      </div>
      <hr className="py-2" />
      <div className="prose dark:prose-light mx-auto">
        <MDXRemote {...renderedOutput} components={components} />
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPortfolio(params.slug);
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
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
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
