import Link from "next/link";
import Image from "next/image";

export default function Grid({ portfolios }) {
  return (
    <>
      {portfolios
        .filter((item) => item.featured)
        .slice(0, 3)
        .map((item) => (
          <div className="w-full sm:w-1/3 lg:w-1/4" key={item.title}>
            <Link href={`/portfolio/${item.slug}`}>
              <a className="group focus:outline-none">
                <div className="border border-gray-300 rounded hover:shadow-lg group-focus:shadow-xl h-full grid grid-cols-4 sm:grid-cols-1 auto-rows-min sm:divide-x-0 divide-x divide-gray-200 sm:divide-y">
                  <img
                    src={item.coverImage.url}
                    className="h-32 object-contain self-center mx-auto py-2"
                    alt={item.title}
                  />
                  <div className="px-4 col-span-3 py-4">
                    <h2 className="font-semibold h-16">{item.title}</h2>
                    <p className="text-gray-600 pb-4">{item.description}</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </>
  );
}
