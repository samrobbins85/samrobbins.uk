import Link from "next/link";

export default function OtherGrid({ portfolios, category }) {
  return (
    <div className="grid container mx-auto gap-x-4 gap-y-4 grid-cols-4">
      {portfolios
        .filter((item) =>
          category !== "All" ? item.categories.includes(category) : item
        )
        .map((x) => (
          <div key={x.title}>
            <Link href={`/portfolio/${x.slug}`}>
              <a className="group focus:outline-none">
                <div className="px-2 py-2 border shadow-sm h-full rounded group-focus:shadow-xl hover:shadow-xl">
                  <div className="flex">
                    <span className="font-medium w-min-sm">{x.title}</span>
                  </div>
                  <span className="text-gray-700">{x.description}</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}
