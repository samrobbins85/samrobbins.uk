import { getWriting, getAllWritingsWithSlug } from "@/lib/graphcms";
import remark from "remark";
import Head from "next/head";
import math from "remark-math";
import katex from "rehype-katex";
import FilledNav from "@/components/fillednav";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import rehypePrism from "@mapbox/rehype-prism";
import footnotes from "remark-footnotes";
import gfm from "remark-gfm";
export default function Portfolio({ data, contentHtml }) {
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
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getWriting(params.slug);
  const output = await remark()
    .use(footnotes)
    .use(math)
    .use(gfm)
    .use(remark2rehype)
    .use(katex)
    .use(rehypePrism)
    .use(html)
    .process(data.markdown);
  const contentHtml = output.toString();

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
