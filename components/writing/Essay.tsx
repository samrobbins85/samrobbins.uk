import Link from "next/link";
import etBook from "@/lib/font";

interface Props {
  slug: string;
  title: string;
  date: string;
}

export default function Essay({ slug, title, date }: Props) {
  return (
    <Link href={`/essays/${slug}`}>
      <div
        className={`border ${etBook.className} font-serif slate-bg-int slate-border-int hover:shadow-lg w-56 h-72`}
      >
        <div className="px-4 py-4 text-center flex flex-col gap-y-2">
          <h2 className="text-xl font-medium">{title}</h2>
          <h3 className="italic">{date}</h3>
        </div>
      </div>
    </Link>
  );
}
