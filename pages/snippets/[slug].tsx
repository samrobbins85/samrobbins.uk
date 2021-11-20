import { getAllSnippetsWithSlug, getSnippet } from "@/lib/graphcms";
import rehypePrism from "@mapbox/rehype-prism";
import { MyTable } from "@/components/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@/components/layout";
import { InferGetStaticPropsType } from "next";

const components = {
  table: MyTable,
};
export default function Snippet({
  data,
  serialized,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={data.title} description={data.description}>
      <h1 className="text-4xl font-semibold pb-2">{data.title}</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300">
        {data.description}
      </h2>
      <p className="prose py-6 dark:prose-light mx-auto">
        <MDXRemote {...serialized} components={components} />
      </p>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSnippet(params.slug);
  const serialized = await serialize(data.content, {
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
