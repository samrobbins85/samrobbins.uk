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
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(data.title)}**/${escape(
            "Sam Robbins"
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content={data.title} />
      </Head>
      <FilledNav />

      <div className="p-4 mx-auto max-w-85ch">
        <div className="font-serif py-2">
          <h1 className="text-center text-4xl font-semibold">{data.title}</h1>
          <p className="text-center text-xl">
            {new Date(data.date).toLocaleString("en-gb", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div
          className="mx-auto prose font-serif"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getWriting(params.slug);
  const contentHtml = await renderToString(data.markdown, {
    components,
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
