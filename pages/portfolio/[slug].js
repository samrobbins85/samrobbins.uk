import { getPortfolio, getAllPortfoliosWithSlug } from "@/lib/graphcms";
import remark from "remark";
import html from "remark-html";
import NavBar from "@/components/nav";
import Head from "next/head";
export default function Portfolio({ data, contentHtml }) {
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
      </Head>
      <NavBar
        title="Sam Robbins"
        text={[{ title: "Portfolio", path: "portfolio" }]}
      />
      <div className="p-4">
        <h1 className="text-4xl text-center font-semibold">{data.title}</h1>
        <h2 className="text-center text-gray-600 text-lg">
          {data.description}
        </h2>
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPortfolio(params.slug);
  const output = await remark().use(html).process(data.markdown);
  const contentHtml = output.toString();
  return {
    props: {
      data,
      contentHtml,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPortfoliosWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
