function Button({ count, title, onClick, item, category }: {count?: Number, title: string, onClick: any, item:string, category: string|Boolean}) {
  return (
    <button
      className={`flex items-center px-2 py-1 outline-nord4 outline-solid outline-0.5 focus:outline-1 focus:outline-solid focus:outline-cyan-400 bg-nord5 dark:bg-nord0  ${
        item === category && "outline-solid !outline-cyan-400 outline-0.5"
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

export default function Categories({ setCategory, category, categories }: {setCategory: Function, category: string|Boolean, categories:string[]}) {
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
