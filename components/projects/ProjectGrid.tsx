import Link from "next/link";

interface Project {
  categories: string[];
  title?: string;
  slug: string;
  description?: string;
}

export default function ProjectGrid({
  projects,
  category,
}: {
  projects: Project[];
  category: string;
}) {
  return (
    <div className="flex flex-wrap  justify-center mx-auto gap-x-4 gap-y-4">
      {projects
        .filter((item) =>
          category !== "All" ? item.categories.includes(category) : item
        )
        .map((x) => (
          <div className="w-full sm:w-2/5 lg:w-1/5" key={x.title}>
            <Link href={`/projects/${x.slug}`}>
              <a className="group focus:outline-none">
                <div className="px-2 py-2 rounded shadow-sm h-full group-focus:bg-radix-slate5 group-hover:bg-radix-slate4 bg-radix-slate3">
                  <div className="flex">
                    <span className="font-medium w-min-sm">{x.title}</span>
                  </div>
                  <span className="text-radix-slate11">{x.description}</span>
                </div>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
}
