import { getWriting, getAllWritingsWithSlug } from "@/lib/graphcms";
import Head from "next/head";
import math from "remark-math";
import katex from "rehype-katex";
import FilledNav from "@/components/fillednav";
import rehypePrism from "@mapbox/rehype-prism";
import footnotes from "remark-footnotes";
import renderToString from "next-mdx-remote/render-to-string";
import MyTable from "@/components/mdx/table";
const components = {
  table: MyTable,
};
export default function Portfolio({ data, contentHtml }) {
  const content = contentHtml.renderedOutput;
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
      </Head>
      <FilledNav />

      <div className="p-4 latex-style mx-auto">
        <h1>{data.title}</h1>
        <p className="author">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>

        <div
          className="mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getWriting(params.slug);
  const contentHtml = await renderToString(data.markdown, {
    components: components,
    mdxOptions: {
      remarkPlugins: [footnotes, math],
      rehypePlugins: [katex, rehypePrism],
    },
  });

  return {
    props: {
      data,
      contentHtml,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllWritingsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
