import math from "@/lib/remark-math";
import rehypePrism from "@mapbox/rehype-prism";
import footnotes from "remark-numbered-footnotes";
import { MyTable, MyImg } from "@/components/mdx";
import { useEffect } from "react";
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
  BarChartDual,
} from "@/components/writing/chart";
import Map from "@/components/writing/map";
const components = {
  table: MyTable,
  img: MyImg,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  BarChart,
  LineChart,
  PieChart,
  BarChartDual,
  Map,
};

export default function Essay({ data, renderedOutput, date }) {
  useEffect(() => {
    import("@/lib/rendermath").then((renderMath) => {
      renderMath.default();
    });
  }, []);
  return (
    <Layout title={data.title}>
      <header className="font-serif pb-8">
        <h1 className="text-center text-4xl">{data.title}</h1>
        <p className="text-center text-2xl italic">{date}</p>
      </header>

      <article className="mx-auto prose prose-serif dark:prose-light dark:prose-serifLight">
        <MDXRemote {...renderedOutput} components={components} />
        <Map
          data={{
            UKC: 0.0,
            UKD: 0.0,
            UKE: 0.0,
            UKF: 0.0,
            UKG: 0.0,
            UKH: 0.4444444444,
            UKI: null,
            UKJ: 0.1290322581,
            UKK: 0.0,
          }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const data = await getEssay(params.slug);
  const renderedOutput = await serialize(data.content, {
    mdxOptions: {
      remarkPlugins: [footnotes, math, [behead, { depth: 1 }]],
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
