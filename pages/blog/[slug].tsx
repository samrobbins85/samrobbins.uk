import { getBlog, getAllBlogsWithSlug } from "@/lib/datocms";
import rehypePrism from "@mapbox/rehype-prism";
import Layout from "@/components/layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { MyTable } from "@/components/mdx";
import { useEffect } from "react";
import math from "@/lib/remark-math";
import "katex/dist/katex.css";

const components = {
  table: MyTable,
};

export default function Blog({ dato, content, date }) {
  useEffect(() => {
    import("@/lib/rendermath").then((renderMath) => {
      renderMath.default();
    });
  }, []);
  return (
    <Layout title={dato.title}>
      <header className="py-2 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center">
          {dato.title}
        </h1>
        <p className="text-center py-1 text-gray-600 dark:text-gray-200">
          {date}
        </p>
      </header>
      <main>
        <article className="prose dark:prose-light mx-auto">
          <MDXRemote {...content} components={components} />
        </article>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const dato = await getBlog(params.slug);
  const content = await serialize(dato.markdown, {
    mdxOptions: {
      remarkPlugins: [math],
      rehypePlugins: [rehypePrism],
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
