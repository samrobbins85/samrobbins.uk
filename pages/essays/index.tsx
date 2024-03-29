import { getAllEssays } from "@/lib/datocms";
import Essay from "@/components/writing/Essay";
import Layout from "@/components/layout";
import { InferGetStaticPropsType } from "next";
import etBook from "@/lib/font";

export default function Portfolio({
  writings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Essays"
      description="Essays I've written at university and for other purposes"
    >
      <header>
        <h1
          className={`text-5xl font-medium text-center ${etBook.className} font-serif text-radix-slate12`}
        >
          Essays
        </h1>
      </header>
      <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
        {writings.map((item) => (
          <Essay
            slug={item.slug}
            title={item.title}
            date={item.date}
            key={item.title}
          />
        ))}
      </div>
    </Layout>
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
