import { getAllSnippetsWithSlug, getSnippet } from "@/lib/graphcms";
import rehypePrism from "@mapbox/rehype-prism";
import renderToString from "next-mdx-remote/render-to-string";
import MyTable from "@/components/mdx/table";
import FilledNav from "@/components/fillednav";

const components = {
  table: MyTable,
};
export default function Snippet({ data, contentHtml }) {
  return (
    <>
      <FilledNav />
      <div className="max-w-85ch mx-auto p-4">
        <h1 className="text-4xl font-semibold">{data.title}</h1>
        <h2 className="text-xl text-gray-600">{data.description}</h2>
        <p
          className="prose py-6"
          dangerouslySetInnerHTML={{ __html: contentHtml.renderedOutput }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSnippet(params.slug);
  const contentHtml = await renderToString(data.content, {
    components,
    mdxOptions: {
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
  const snippets = await getAllSnippetsWithSlug();
  return {
    paths: snippets.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
