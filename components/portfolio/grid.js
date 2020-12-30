import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Grid({ portfolios, category }) {
  return (
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
                <div className="relative h-32 object-contain m-2">
                  <Image
                    src={item.coverImage.url}
                    layout="fill"
                    objectFit="contain"
                    alt={item.title}
                  />
                </div>
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
  );
}
