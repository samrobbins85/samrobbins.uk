import { getAllBlogsWithSlug } from "@/lib/graphcms";
import { getAllBlogs } from "@/lib/datocms";
import Head from "next/head";
import FilledNav from "@/components/fillednav";

import Ad from "@/components/ad";
import { StructuredText } from "react-datocms";

export default function Blog({ dato }) {
  return (
    <>
      <Head>
        <title>{dato.title} | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(dato.title)}**/${escape(
            dato.description
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content={dato.title} />
        <meta property="og:description" content={dato.description} />
      </Head>
      <FilledNav />

      <div className="max-w-85ch p-4 mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center">
          {dato.title}
        </h1>
        <p className="text-center sm:text-lg text-gray-600 py-2">
          {dato.description}
        </p>
        <p className="text-center py-1 text-gray-600">
          {new Date(Date.parse(dato.date)).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
        <Ad />
        <hr className="py-4" />
        <div className="prose mx-auto">
          <StructuredText data={dato.structuredtext} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const dato = await getAllBlogs(params.slug);
  // const data = await getBlog(params.slug);
  // const contentHtml = await renderToString(data.markdown, {
  //   components: components,
  //   mdxOptions: {
  //     rehypePlugins: [rehypePrism],
  //   },
  // });

  return {
    props: {
      dato,
      // data,
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
