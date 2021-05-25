import { Client } from "@notionhq/client";

import Layout from "@/components/layout";
import { NotionRenderer } from "react-notion-x";

export default function Blog({ response, page }) {
  //   console.log(response.results[0].id);
  console.log(page);
  return (
    <Layout>
      <h1 className="text-4xl font-semibold pb-2">Hello!</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300">World</h2>
      {/* <NotionRenderer recordMap={page.results} /> */}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const notion = new Client({ auth: process.env.NOTI0N_TOKEN });
  const databaseId = "11868a0e2256457c9998569c84f05fa0";
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Slug",
      text: {
        contains: params.slug,
      },
    },
  });

  const page = await notion.blocks.children.list({
    block_id: response.results[0].id,
  });
  return {
    props: { response, page },
  };
}

export async function getStaticPaths() {
  const notion = new Client({ auth: process.env.NOTI0N_TOKEN });
  const databaseId = "11868a0e2256457c9998569c84f05fa0";
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  const paths = response.results
    .map((x) => x.properties.Slug.rich_text[0]?.plain_text)
    .filter(Boolean);
  return {
    paths: paths.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
