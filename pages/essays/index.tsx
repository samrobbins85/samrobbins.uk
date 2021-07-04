import { getAllEssays } from "@/lib/datocms";
import Head from "next/head";
import Paper from "@/components/writing/paper";
import Layout from "@/components/layout";

export default function Portfolio({ writings }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/newsreader-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout
        title="Essays"
        description="Essays I've written at university and for other purposes"
      >
        <header>
          <h1 className="text-5xl font-medium text-center font-serif text-radix-mint11">
            Essays
          </h1>
        </header>
        <main className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
          {writings.map((item) => (
            <Paper
              slug={item.slug}
              title={item.title}
              date={item.date}
              key={item.title}
            />
          ))}
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const writings = (await getAllEssays()) || [];
  writings.forEach((item, index) => {
    const date = new Date(item.date).toLocaleString("en-gb", {
      month: "long",
      year: "numeric",
    });
    writings[index].date = date;
  });
  return {
    props: { writings },
  };
}
