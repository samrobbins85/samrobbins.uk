import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import { useEffect, useState } from "react";
import Head from "next/head";
import Categories from "@/components/portfolio/categories";
import Grid from "@/components/portfolio/grid";
import { useRouter } from "next/router";

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
    if (categories.includes(router.asPath.split("#")[1])) {
      setCategory(router.asPath.split("#")[1]);
    } else {
      setCategory("All");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape("Portfolio")}**/${escape(
            "Sam Robbins"
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content="Portfolio" />
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
  let categories = await getPortfolioCategories();
  categories = categories.map((x) => x.name);
  return {
    props: { portfolios, categories },
  };
}
