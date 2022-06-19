import rehypePrism from "@mapbox/rehype-prism";
import remarkGfm from "remark-gfm";
import { MyTable, MyImg } from "@/components/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@/components/layout";
import { essaySlugs, getEssay } from "@/lib/datocms";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
import behead from "remark-behead";
import "katex/dist/katex.css";
import {
  LineChart,
  BarChart,
  PieChart,
  BarMulti,
} from "@/components/writing/chart";
import Map from "@/components/writing/map";
import remarkUnwrapImages from "remark-unwrap-images";
import { InferGetStaticPropsType } from "next";
const components = {
  table: MyTable,
  img: MyImg,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  BarChart,
  LineChart,
  PieChart,
  BarMulti,
  Map,
};

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function Essay({
  data,
  renderedOutput,
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={data.title}>
      <header className="font-serif pb-8">
        <h1 className="text-center text-4xl">{data.title}</h1>
        <p className="text-center text-2xl italic">{date}</p>
      </header>

      <article className="mx-auto prose prose-serif dark:prose-light dark:prose-serifLight">
        <MDXRemote {...renderedOutput} components={components} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getEssay(params.slug);
  const renderedOutput = await serialize(data.content, {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkGfm,
        [behead, { depth: 1 }],
        remarkUnwrapImages,
      ],
      rehypePlugins: [rehypeKatex, rehypePrism],
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
