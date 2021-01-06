import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import { useState } from "react";
import Head from "next/head";
import Categories from "@/components/portfolio/categories";
import Grid from "@/components/portfolio/grid";
export default function Portfolio({ portfolios, categories }) {
  const [category, setCategory] = useState(false);
  return (
    <>
      <Head>
        <title>Portfolio | Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center">Portfolio</h1>
        <div className="flex justify-center gap-x-4 text-lg py-6 flex-wrap gap-y-8 ">
          <Categories
            setCategory={setCategory}
            categories={categories}
            category={category}
          />
        </div>
        <div>
          <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            <Grid category={category} portfolios={portfolios} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];
  const categories = await getPortfolioCategories();
  return {
    props: { portfolios, categories },
  };
}
