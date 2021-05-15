import { getWritings } from "@/lib/graphcms";
import Head from "next/head";
import Paper from "@/components/writing/paper";
import Nav from "@/components/newnav";

export default function Portfolio({ writings }) {
  return (
    <>
      <Head>
        <title>Essays | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape("Writing")}**/${escape(
            "Sam Robbins"
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content="Essays" />
      </Head>
      <Nav />
      <div className="pt-6 px-2">
        <header>
          <h1 className="text-5xl font-medium text-center font-serif text-nord-10 dark:text-nord-8">
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
      </div>
    </>
  );
}

export async function getStaticProps() {
  const writings = (await getWritings()) || [];
  return {
    props: { writings },
  };
}
