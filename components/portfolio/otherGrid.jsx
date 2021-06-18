import Link from "next/link";

export default function OtherGrid({ portfolios, category }) {
  return (
    <div className="flex flex-wrap  justify-center mx-auto gap-x-4 gap-y-4">
      {portfolios
        .filter((item) =>
          category !== "All" ? item.categories.includes(category) : item
        )
        .map((x) => (
          <div className="w-full sm:w-2/5 lg:w-1/5" key={x.title}>
            <Link href={`/portfolio/${x.slug}`}>
              <a className="group focus:outline-none">
                <div className="px-2 py-2 border border-nord4 shadow-sm h-full group-focus:bg-nord4 group-hover:bg-nord4 bg-nord6 dark:bg-nord0 dark:border-gray-800 dark:group-hover:bg-nord2">
                  <div className="flex">
                    <span className="font-medium w-min-sm">{x.title}</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {x.description}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}
