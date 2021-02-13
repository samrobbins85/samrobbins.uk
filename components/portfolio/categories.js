import { motion, AnimateSharedLayout } from "framer-motion";
export default function Categories({ setCategory, category, categories }) {
  return (
    <AnimateSharedLayout>
      <motion.button
        className={`h-2 text-gray-600 focus:text-black focus:font-semibold focus:outline-none ${"All"=== category && "font-semibold"}`}
        animate
        key={"All"}
        onClick={() => setCategory("All")}
      >
        All
        {"All" === category && (
          <motion.div
            layoutId="underline"
            className="border-b-4 border-cyan-600"
          />
        )}
      </motion.button>
      {categories.map((item) => (
        <motion.button
          className={`h-2 text-gray-600 focus:text-black focus:font-semibold focus:outline-none ${item===category && "font-semibold"}
          }`}
          animate
          key={item}
          onClick={() => setCategory(item)}
        >
          <span className="capitalize">{item.replace(/_/g, " ")}</span>
          {item === category && (
            <motion.div
              layoutId="underline"
              className="border-b-4 border-cyan-600"
            />
          )}
        </motion.button>
      ))}
    </AnimateSharedLayout>
  );
}
