import { getBlog, getAllBlogsWithSlug } from "@/lib/datocms";
import rehypePrism from "@mapbox/rehype-prism";
import Layout from "@/components/layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MyTable, MyPre } from "@/components/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.css";
import remarkUnwrapImages from "remark-unwrap-images";
import { InferGetStaticPropsType } from "next";

const components = {
  table: MyTable,
  pre: MyPre,
};

export default function Blog({
  dato,
  content,
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={dato.title} description={dato.description}>
      <header className="py-2 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center">
          {dato.title}
        </h1>
        <p className="text-center py-1 text-radix-slate11">{date}</p>
      </header>
      <article className="prose dark:prose-light mx-auto">
        <MDXRemote {...content} components={components} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const dato = await getBlog(params.slug);
  const content = await serialize(dato.markdown, {
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkUnwrapImages],
      rehypePlugins: [rehypeKatex, rehypePrism],
    },
  });
  const date = new Date(Date.parse(dato.date)).toLocaleString("en-gb", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    props: {
      dato,
      content,
      date,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllBlogsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
