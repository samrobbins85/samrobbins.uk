import { getWritings } from "@/lib/graphcms";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
export default function Portfolio({ writings }) {
  return (
    <>
      <Head>
        <title>Writing | Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center font-latex">
          Writing
        </h1>
        <div>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            <AnimatePresence exitBeforeEnter>
              {writings.map((item) => (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  className="border border-gray-300 hover:shadow-lg w-56 h-72"
                  key={item.title}
                >
                  <Link href={"/writing/" + item.slug}>
                    <a>
                      <div class="px-4 py-4 font-latex text-center flex flex-col gap-y-2">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <h3>Sam Robbins</h3>
                        <h3 className="italic">
                          {new Date(item.date).toLocaleString("en-gb", {
                            month: "long",
                            year: "numeric",
                          })}
                        </h3>
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
