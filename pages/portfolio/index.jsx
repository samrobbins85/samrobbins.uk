import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import Head from "next/head";
import Grid from "@/components/portfolio/grid";
import Categories from "@/components/portfolio/categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OtherGrid from "@/components/portfolio/otherGrid";
import Nav from "@/components/newnav";

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
      <Nav />
      <main className="pt-6 px-2">
        <h1 className="text-5xl font-semibold text-center">Portfolio</h1>

        <div>
          <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            <Grid portfolios={portfolios} />
          </div>
          <div className="mx-auto container py-4">
            <h2 className="text-2xl py-4 font-semibold">All Projects</h2>
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
      </main>
    </>
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
