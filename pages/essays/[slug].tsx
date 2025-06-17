import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import { MyTable, MyImg } from "@/components/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@/components/layout";
import { essaySlugs, getEssay } from "@/lib/datocms";
import behead from "remark-behead";
import "katex/dist/katex.css";
import Map from "@/components/writing/Map";
import rehypeUnwrapImages from "rehype-unwrap-images";
import { InferGetStaticPropsType } from "next";
import {
  LineChart,
  BarChart,
  PieChart,
  BarMulti,
} from "@/components/writing/chart";

const components = {
  table: MyTable,
  img: MyImg,
  BarChart,
  LineChart,
  PieChart,
  BarMulti,
  Map,
};

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import etBook from "@/lib/font";

export default function Essay({
  data,
  renderedOutput,
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={data.title}>
      <header className={`font-serif ${etBook.className} pb-8`}>
        <h1 className="text-center text-4xl">{data.title}</h1>
        <p className="text-center text-2xl italic">{date}</p>
      </header>

      <article
        className={`mx-auto ${etBook.className} prose prose-serif dark:prose-light dark:prose-serifLight`}
      >
        <MDXRemote {...renderedOutput} components={components} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getEssay(params.slug);
  const renderedOutput = await serialize(data.content, {
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkGfm, [behead, { depth: 1 }]],
      rehypePlugins: [rehypeKatex, rehypePrism, rehypeUnwrapImages],
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
