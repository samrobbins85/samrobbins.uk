import { getWritings } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function Portfolio({ writings }) {
  const [category, setCategory] = useState(false);
  return (
    <>
      <FilledNav />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center">Portfolio</h1>
        <div>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            <AnimatePresence exitBeforeEnter>
              {writings.map((item) => (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="w-full sm:w-2/5 lg:w-1/5 border border-gray-300 rounded hover:shadow-lg"
                  key={item.title}
                >
                  <Link href={"/writing/" + item.slug}>
                    <a>
                      <div class="px-4">
                        <h2 class="font-semibold h-16">{item.title}</h2>
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
  const writings = (await getWritings()) || [];
  return {
    props: { writings },
  };
}
