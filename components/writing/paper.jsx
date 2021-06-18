import Link from "next/link";

export default function Paper({ slug, title, date }) {
  return (
    <Link href={`/essays/${slug}`}>
      <a>
        <div className="border border-gray-300 dark:border-gray-800 dark:bg-dark-contrast hover:shadow-lg w-56 h-72 bg-nord-6">
          <div className="px-4 py-4 font-serif text-center flex flex-col gap-y-2">
            <h2 className="text-xl font-medium">{title}</h2>
            <h3 className="italic">{date}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
}
