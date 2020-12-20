import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  MotionConfig,
  AnimatePresence,
} from "framer-motion";
export default function Portfolio({ portfolios, categories }) {
  const [category, setCategory] = useState(false);
  return (
    <>
      <FilledNav />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center">Portfolio</h1>
        <div className="flex justify-center gap-x-4 text-lg py-2 flex-wrap gap-y-2">
          <AnimateSharedLayout>
            <motion.div
              className="cursor-pointer"
              animate
              key={false}
              onClick={() => setCategory(false)}
            >
              All
              {false === category && (
                <motion.div
                  layoutId="underline"
                  className="border-b-4 border-red-600"
                />
              )}
            </motion.div>
            {categories.map((item) => (
              <motion.div
                className="cursor-pointer"
                animate
                key={item.name}
                onClick={() => setCategory(item.name)}
              >
                <span className="capitalize">
                  {item.name.replace(/_/g, " ")}
                </span>
                {item.name === category && (
                  <motion.div
                    layoutId="underline"
                    className="border-b-4 border-red-600"
                  />
                )}
              </motion.div>
            ))}
          </AnimateSharedLayout>
        </div>
        <div>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            <AnimatePresence exitBeforeEnter>
              {portfolios
                .filter((item) =>
                  category ? item.categories.includes(category) : item
                )
                .map((item) => (
                  <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    className="w-full sm:w-2/5 lg:w-1/5 border border-gray-300 rounded hover:shadow-lg"
                    key={item.title}
                  >
                    <Link href={"/portfolio/" + item.slug}>
                      <a>
                        <img
                          class="h-32 w-full object-contain p-4"
                          src={item.coverImage.url}
                        />
                        <hr class="my-4" />
                        <div class="px-4">
                          <h2 class="font-semibold h-16">{item.title}</h2>
                          <p class="text-gray-600 pb-4">{item.description}</p>
                        </div>
                      </a>
                    </Link>
                  </motion.div>
                ))}
            </AnimatePresence>
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
