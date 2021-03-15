export default function Categories({ setCategory, category, categories }) {
  return (
    <>
      <button
        className={`ring-1 ring-gray-300 focus:ring-cyan-400 px-2 py-1 rounded focus:outline-none ${
          category === "All" && "ring-2 ring-cyan-400"
        }`}
        type="button"
        key="All"
        onClick={() => setCategory("All")}
      >
        All
      </button>
      {Object.keys(categories).map((item) => (
        <button
          className={`ring-1 flex items-center ring-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-cyan-400 ${
            item === category && "ring-2 ring-cyan-400"
          }
          }`}
          type="button"
          key={item}
          onClick={() => setCategory(item)}
        >
          <span className="capitalize pr-2">{item.replace(/_/g, " ")}</span>{" "}
          <span className="text-sm text-gray-600">{categories[item]}</span>
        </button>
      ))}
    </>
  );
}
