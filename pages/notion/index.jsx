import Layout from "@/components/layout";
import { Client } from "@notionhq/client";

export default function Home({ response }) {
  console.log(response);
  console.log(
    response.results
      .map((x) => x.properties.Slug.rich_text[0]?.plain_text)
      .filter(Boolean)
  );
  return (
    <Layout title="Notion" description="Pull requests I've made on GitHub">
      <h1 className="text-5xl font-semibold pb-6 text-center text-nord-10 dark:text-nord-8">
        Notion
      </h1>
      <div className="grid gap-y-4">
        {response.results.map((x) => (
          <div>
            <a href={`/notion/${x.properties.Slug.rich_text[0]?.plain_text}`}>
              <h2 className="font-semibold">
                {x.properties.Name.title[0]?.plain_text}
              </h2>
            </a>
            <p>{x.properties.Description.rich_text[0]?.plain_text}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTI0N_TOKEN });
  const databaseId = "11868a0e2256457c9998569c84f05fa0";
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: { response },
  };
}
