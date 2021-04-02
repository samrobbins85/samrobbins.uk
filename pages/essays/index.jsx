import { getWritings } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import Head from "next/head";
import Paper from "@/components/writing/paper";

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
      <FilledNav />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center font-latex">
          Essays
        </h1>
        <div>
          <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            {writings.map((item) => (
              <Paper
                slug={item.slug}
                title={item.title}
                date={item.date}
                key={item.title}
              />
            ))}
          </div>
        </div>
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
