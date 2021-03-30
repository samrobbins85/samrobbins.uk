import FilledNav from "@/components/fillednav";
import Categories from "@/components/snippets/categories";
import { useState } from "react";
import { getSnippetLanguages, getSnippets } from "@/lib/graphcms";
import Link from "next/link";
import background from "@/lib/snippet";

export default function Snippets({ categories, snippets }) {
  const [category, setCategory] = useState("All");
  return (
    <>
      <FilledNav />
      <div className="max-w-85ch mx-auto p-4">
        <h1 className="text-5xl font-semibold">Snippets</h1>
        <h2 className="text-xl text-gray-600 py-2">
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
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
          {snippets
            .filter((item) =>
              category !== "All" ? item.language.includes(category) : item
            )
            .map((x) => (
              <div className="w-full sm:w-1/2 lg:w-1/4" key={x.title}>
                <Link href={`/snippets/${x.slug}`}>
                  <a>
                    <div className="bg-gray-900 h-full py-2 rounded">
                      {category === "All" && (
                        <div
                          className={`${background(
                            x.language
                          )} w-min px-2 rounded-r mb-2 mt-1 font-semibold`}
                        >
                          {x.language}
                        </div>
                      )}
                      <h3 className="text-xl text-white font-mono px-2">
                        {x.title}
                      </h3>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
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
