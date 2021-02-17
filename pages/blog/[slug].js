import { getBlog, getAllBlogsWithSlug } from "@/lib/graphcms";
import Head from "next/head";
import readingTime from "reading-time";
import FilledNav from "@/components/fillednav";
import rehypePrism from "@mapbox/rehype-prism";
import renderToString from "next-mdx-remote/render-to-string";
import MyTable from "@/components/mdx/table";
import Ad from "@/components/ad";
const components = {
  table: MyTable,
};
export default function Blog({ data, contentHtml, time }) {
  const content = contentHtml.renderedOutput;
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
      </Head>
      <FilledNav />

      <div className="max-w-85ch p-4 mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold text-center">
          {data.title}
        </h1>
        <p className="text-center sm:text-lg text-gray-600 py-2">
          {data.description}
        </p>
        <p className="text-center py-1 text-gray-600">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
        <p className="flex justify-center items-center text-gray-600 py-1 pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4 sm:h-6 sm:w-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          {Math.ceil(time.minutes) + " Minutes reading time"}
        </p>
        <Ad />
        <hr className="py-4" />
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getBlog(params.slug);
  const contentHtml = await renderToString(data.markdown, {
    components: components,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  });
  const time = readingTime(data.markdown);

  return {
    props: {
      data,
      contentHtml,
      time,
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
