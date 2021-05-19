import Categories from "@/components/categories";
import { useState } from "react";
import { getSnippetLanguages, getSnippets } from "@/lib/graphcms";
import Link from "next/link";
import background from "@/lib/snippet";
import Layout from "@/components/layout";

function Card({ title, slug, language, category }) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a className="w-full sm:w-1/2 lg:w-1/4 focus:ring-gray-800 focus:ring-2 focus:ring-offset-2 focus:outline-none rounded bg-nord-0">
        <div className="h-full py-2 ">
          {category === "All" && (
            <div
              className={`${background(
                language
              )} w-min px-2 rounded-r mb-2 mt-1 font-semibold`}
            >
              {language}
            </div>
          )}
          <h3 className="text-xl text-white font-mono px-2">{title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default function Snippets({ categories, snippets }) {
  const [category, setCategory] = useState("All");
  return (
    <Layout title="Snippets">
      <h1 className="text-5xl font-medium font-mono text-center">Snippets</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300 py-2 text-center">
        Little bits of code I use that don't deserve a blog, but are still
        useful
      </h2>
      <div className="flex justify-center gap-x-4 text-lg py-6 mb-6 flex-wrap gap-y-8 ">
        <Categories
          setCategory={setCategory}
          category={category}
          categories={categories}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 text-black">
        {snippets
          .filter((item) =>
            category !== "All" ? item.language.includes(category) : item
          )
          .map((x) => (
            <Card
              key={x.title}
              category={category}
              title={x.title}
              slug={x.slug}
              language={x.language}
            />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let temp = await getSnippetLanguages();
  const snippets = await getSnippets();

  const categories = {};
  temp = temp.map((x) => x.name);
  temp.forEach((element) => {
    if (snippets.filter((x) => x.language === element).length > 0) {
      categories[element] = snippets.filter(
        (x) => x.language === element
      ).length;
    }
  });
  return {
    props: { categories, snippets },
  };
}
