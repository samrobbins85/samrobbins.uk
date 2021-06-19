import math from "@/lib/remark-math";
import rehypePrism from "@mapbox/rehype-prism";
import footnotes from "remark-numbered-footnotes";
import { MyTable, MyImg } from "@/components/mdx";
import { useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@/components/layout";
import { essaySlugs, getEssay } from "@/lib/datocms";
import "katex/dist/katex.css";

const components = {
  table: MyTable,
  img: MyImg,
};
export default function Portfolio({ data, renderedOutput, date }) {
  useEffect(() => {
    import("@/lib/rendermath").then((renderMath) => {
      renderMath.default();
    });
  }, []);
  return (
    <Layout title={data.title}>
      <header className="font-serif pb-2">
        <h1 className="text-center text-4xl font-semibold">{data.title}</h1>
        <p className="text-center text-xl">{date}</p>
      </header>

      <main>
        <article className="mx-auto prose font-serif dark:prose-light">
          <MDXRemote {...renderedOutput} components={components} />
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getEssay(params.slug);
  const renderedOutput = await serialize(data.content, {
    mdxOptions: {
      remarkPlugins: [footnotes, math],
      rehypePlugins: [rehypePrism],
    },
  });
  const date = new Date(data.date).toLocaleString("en-gb", {
    month: "long",
    year: "numeric",
  });

  return {
    props: {
      data,
      renderedOutput,
      date,
    },
  };
}

export async function getStaticPaths() {
  const posts = await essaySlugs();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
