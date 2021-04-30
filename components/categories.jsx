function Button({ count, title, onClick, item, category }) {
  return (
    <button
      className={`ring-1 flex items-center ring-gray-300 px-2 py-1  focus:outline-none focus:!ring-cyan-400 dark:bg-dark-contrast dark:ring-gray-800 ${
        item === category && "ring-2 !ring-cyan-400"
      }
    }`}
      type="button"
      key={item}
      onClick={onClick}
    >
      <span className={`capitalize ${count && "pr-2"}`}>{title}</span>{" "}
      {count && (
        <span className="text-sm text-gray-600 dark:text-gray-200">
          {count}
        </span>
      )}
    </button>
  );
}

export default function Categories({ setCategory, category, categories }) {
  return (
    <>
      <Button
        title="All"
        onClick={() => setCategory("All")}
        item="All"
        category={category}
      />
      {Object.keys(categories).map((item) => (
        <Button
          title={item.replace(/_/g, " ")}
          onClick={() => setCategory(item)}
          item={item}
          count={categories[item]}
          category={category}
          key={item}
        />
      ))}
    </>
  );
}
