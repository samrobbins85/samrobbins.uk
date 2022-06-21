function Button({
  count,
  title,
  onClick,
  item,
  category,
}: {
  count?: Number;
  title: string;
  onClick: any;
  item: string;
  category: string | Boolean;
}) {
  return (
    <button
      className={`flex items-center px-2 py-1 font-medium rounded sky-bg-int  text-radix-sky11 ${
        item === category && "outline-solid outline-radix-sky7 inset-outline"
      }
    `}
      type="button"
      key={item}
      onClick={onClick}
    >
      <span className={`capitalize ${count && "pr-2"}`}>{title}</span>{" "}
      {count && (
        <span className="text-sm text-radix-gray11">{count.toString()}</span>
      )}
    </button>
  );
}

export default function Categories({
  setCategory,
  category,
  categories,
}: {
  setCategory: Function;
  category: string | Boolean;
  categories: any;
}) {
  return (
    <div className="flex justify-center gap-x-4 text-lg py-6 mb-6 flex-wrap gap-y-8 ">
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
    </div>
  );
}
