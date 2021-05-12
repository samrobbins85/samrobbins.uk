import Link from "next/link";
import Image from "next/image";

export default function GridItem({ item }) {
  return (
    <Link href={`/portfolio/${item.slug}`}>
      <a className="group focus:outline-none">
        <div className="border border-gray-300 rounded hover:shadow-lg group-focus:shadow-xl h-full grid grid-cols-4 sm:grid-cols-1 auto-rows-max sm:divide-x-0 divide-x divide-gray-300 sm:divide-y bg-nord-4 dark:bg-dark-contrast dark:border-gray-800 dark:divide-gray-800">
          <div className="p-2 bg-nord-5">
            <div className="relative h-32 object-contain self-center">
              <Image
                src={item.coverImage.url}
                layout="fill"
                objectFit="contain"
                alt={item.title}
              />
            </div>
          </div>
          <div className="px-4 col-span-3 py-4 bg-nord-4 h-full">
            <h2 className="font-semibold h-16">{item.title}</h2>
            <p className="text-gray-700 pb-4 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
