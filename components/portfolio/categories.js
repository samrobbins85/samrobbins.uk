import { motion, AnimateSharedLayout } from "framer-motion";
export default function Categories({ setCategory, category, categories }) {
  return (
    <AnimateSharedLayout>
      <motion.div
        className="cursor-pointer flex-col flex h-2"
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
          className="cursor-pointer flex-col flex h-2"
          animate
          key={item.name}
          onClick={() => setCategory(item.name)}
        >
          <span className="capitalize">{item.name.replace(/_/g, " ")}</span>
          {item.name === category && (
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
