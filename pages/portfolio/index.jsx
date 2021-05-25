import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import Categories from "@/components/categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import OtherGrid from "@/components/portfolio/otherGrid";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

const graphcmsLoader = ({ src, width }) => {
  let url = src.split("/");
  url.splice(3, 0, `resize=width:${width}`);
  url = url.join("/");
  return url;
};

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

      <div className="flex justify-center mx-auto gap-x-8 gap-y-8 py-4 flex-wrap">
        {portfolios
          .filter((item) => item.featured)
          .slice(0, 3)
          .map((item) => (
            <div className="bg-nord-5 dark:bg-nord-0 p-2 grid rounded max-w-sm">
              <div className="text-center">
                <p className="text-2xl font-semibold text-center pt-4 text-nord-2 dark:text-nord-6">
                  {item.title}
                </p>
                <p className="py-4 text-center dark:text-nord-5 h-16">
                  {item.description}
                </p>
              </div>
              <div className="p-4">
                <Image
                  loader={graphcmsLoader}
                  width={item.screenshot.width}
                  height={item.screenshot.height}
                  src={item.screenshot.url}
                  alt={item.title}
                />
              </div>
              <Link href={`/portfolio/${item.slug}`}>
                <a className=" underline pb-2 text-center text-blue-900 dark:text-cyan-300">
                  Find out more
                </a>
              </Link>
            </div>
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
        <OtherGrid portfolios={portfolios} category={category} />
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
