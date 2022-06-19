import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import Categories from "@/components/categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import Layout from "@/components/layout";
import GridItem from "@/components/griditem";
import { PortfolioCategories } from "@/lib/graphcms.generated";
import { InferGetStaticPropsType } from "next";

export default function Portfolio({
  portfolios,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [category, setCategory] = useState("All");
  useEffect(() => {
    if (category !== "All" && category !== router.asPath.split("#")[1]) {
      router.replace(`#${category}`, undefined, { shallow: true });
    } else if (category === "All") {
      router.replace("", undefined, { shallow: true });
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
    <Layout
      title="Portfolio"
      description="Projects I have made in my own time or as part of my degree"
      fullWidth
    >
      <h1 className="text-5xl font-semibold text-center text-radix-mint11">
        Portfolio
      </h1>

      <div className="flex justify-center mx-auto gap-x-8 gap-y-8 py-4 flex-wrap">
        {portfolios
          .filter((item) => item.featured)
          .slice(0, 3)
          .map((item) => (
            <GridItem
              title={item.title}
              description={item.description}
              screenshot={item.screenshot}
              slug={item.slug}
              key={item.title}
            />
          ))}
      </div>

      <div className="mx-auto max-w-6xl py-4">
        <div className="flex justify-center gap-x-4 text-lg py-6 mb-6 flex-wrap gap-y-8 ">
          <Categories
            setCategory={setCategory}
            category={category}
            categories={categories}
          />
        </div>
        <PortfolioGrid portfolios={portfolios} category={category} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];
  let tempCategories = (await getPortfolioCategories()).map((x) => x.name);
  const categories = {};
  tempCategories.forEach((element) => {
    categories[element] = portfolios.filter((x) =>
      x.categories.includes(element as PortfolioCategories)
    ).length;
  });
  return {
    props: { portfolios, categories },
  };
}
