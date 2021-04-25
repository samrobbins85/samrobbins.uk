import Link from "next/link";
import Image from "next/image";

export default function Grid({ portfolios }) {
  return (
    <>
      {portfolios
        .filter((item) => item.featured)
        .map((item) => (
          <div className="w-full sm:w-2/5 lg:w-1/5" key={item.title}>
            <Link href={`/portfolio/${item.slug}`}>
              <a className="group focus:outline-none">
                <div className="border border-gray-300 rounded hover:shadow-lg group-focus:shadow-xl h-full grid grid-cols-4 sm:grid-cols-1 auto-rows-min sm:divide-x-0 divide-x divide-gray-200 sm:divide-y dark:bg-gray-600 dark:border-gray-800 dark:divide-gray-800">
                  <div className="relative h-32 object-contain m-2 self-center">
                    <Image
                      src={item.coverImage.url}
                      layout="fill"
                      objectFit="contain"
                      alt={item.title}
                    />
                  </div>
                  <div className="px-4 col-span-3 py-4">
                    <h2 className="font-semibold h-16">{item.title}</h2>
                    <p className="text-gray-600 pb-4 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </>
  );
}
