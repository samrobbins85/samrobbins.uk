import { getAllSnippetsWithSlug, getSnippet } from "@/lib/graphcms";
import rehypePrism from "@mapbox/rehype-prism";
// import renderToString from "next-mdx-remote/render-to-string";
import MyTable from "@/components/mdx/table";
import Head from "next/head";
import Nav from "@/components/newnav";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

const components = {
  table: MyTable,
};
export default function Snippet({ data, serialized }) {
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(data.title)}**/${escape(
            data.description
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
      </Head>
      <Nav />
      <div className="max-w-65ch mx-auto p-4">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300">
          {data.description}
        </h2>
        <p className="prose py-6">
          <MDXRemote {...serialized} components={components} />
        </p>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSnippet(params.slug);
  const serialized = await serialize(data.content, {
    components,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });

  return {
    props: {
      data,
      serialized,
    },
  };
}

export async function getStaticPaths() {
  const snippets = await getAllSnippetsWithSlug();
  return {
    paths: snippets.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
