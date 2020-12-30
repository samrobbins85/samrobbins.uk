import { getWritings } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import Head from "next/head";
import Paper from "@/components/writing/paper";
export default function Portfolio({ writings }) {
  return (
    <>
      <Head>
        <title>Writing | Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center font-latex">
          Writing
        </h1>
        <div>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            {writings.map((item) => (
              <Paper slug={item.slug} title={item.title} date={item.date} />
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
