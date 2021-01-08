import { getWriting, getAllWritingsWithSlug } from "@/lib/graphcms";
import Head from "next/head";
import math from "@/lib/remark-math";
import FilledNav from "@/components/fillednav";
import rehypePrism from "@mapbox/rehype-prism";
import footnotes from "remark-numbered-footnotes";
import renderToString from "next-mdx-remote/render-to-string";
import MyTable from "@/components/mdx/table";
import { useEffect } from "react";
const components = {
  table: MyTable,
};
export default function Portfolio({ data, contentHtml }) {
  useEffect(() => {
    import("@/lib/rendermath").then((renderMath) => {
      renderMath.default();
    });
  }, []);
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
      rehypePlugins: [rehypePrism],
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
