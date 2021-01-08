import { motion, AnimateSharedLayout } from "framer-motion";
export default function Categories({ setCategory, category, categories }) {
  return (
    <AnimateSharedLayout>
      <motion.div
        className="cursor-pointer flex-col flex h-2"
        animate
        key={"All"}
        onClick={() => setCategory("All")}
      >
        All
        {"All" === category && (
          <motion.div
            layoutId="underline"
            className="border-b-4 border-red-600"
          />
        )}
      </motion.div>
      {categories.map((item) => (
        <motion.div
          className="cursor-pointer flex-col flex h-2"
          animate
          key={item}
          onClick={() => setCategory(item)}
        >
          <span className="capitalize">{item.replace(/_/g, " ")}</span>
          {item === category && (
            <motion.div
              layoutId="underline"
              className="border-b-4 border-red-600"
            />
          )}
        </motion.div>
      ))}
    </AnimateSharedLayout>
  );
}
