import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import Grid from "@/components/portfolio/grid";
import Categories from "@/components/categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OtherGrid from "@/components/portfolio/otherGrid";
import Layout from "@/components/layout";

export default function Portfolio({ portfolios, categories }) {
  const router = useRouter();
  const [category, setCategory] = useState(false);
  useEffect(() => {
    if (category) {
      if (category !== "All" && category !== router.asPath.split("#")[1]) {
        router.replace(`#${category}`, undefined, { shallow: true });
      } else if (category === "All") {
        router.replace("", undefined, { shallow: true });
      }
    }
  }, [category]);
  useEffect(() => {
    if (Object.keys(categories).includes(router.asPath.split("#")[1])) {
      setCategory(router.asPath.split("#")[1]);
    } else {
      setCategory("All");
    }
  }, []);
  return (
    <Layout title="Portfolio" fullWidth>
      <h1 className="text-5xl font-semibold text-center text-nord-10 dark:text-nord-8">
        Portfolio
      </h1>

      <div>
        <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
          <Grid portfolios={portfolios} />
        </div>
        <div className="mx-auto max-w-6xl py-4">
          <h2 className="text-2xl py-4 font-semibold text-nord-10 dark:text-nord-8">
            All Projects
          </h2>
          <div className="flex justify-center gap-x-4 text-lg py-6 mb-6 flex-wrap gap-y-8 ">
            <Categories
              setCategory={setCategory}
              category={category}
              categories={categories}
            />
          </div>
          <OtherGrid portfolios={portfolios} category={category} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];
  let temp = await getPortfolioCategories();
  const categories = {};
  temp = temp.map((x) => x.name);
  temp.forEach((element) => {
    categories[element] = portfolios.filter((x) =>
      x.categories.includes(element)
    ).length;
  });
  return {
    props: { portfolios, categories },
  };
}
