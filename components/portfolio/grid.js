import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function Grid({ portfolios, category }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <AnimatePresence>
      {portfolios
        .filter((item) =>
          category ? item.categories.includes(category) : item
        )
        .map((item) => (
          <motion.div
            layout={!shouldReduceMotion}
            transition={{ duration: 0.3 }}
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
                <hr className="my-4" />
                <div className="px-4">
                  <h2 className="font-semibold h-16">{item.title}</h2>
                  <p className="text-gray-600 pb-4">{item.description}</p>
                </div>
              </a>
            </Link>
          </motion.div>
        ))}
    </AnimatePresence>
  );
}
