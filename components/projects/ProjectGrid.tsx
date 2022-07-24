import Link from "next/link";
import { Icon } from "@iconify/react";
interface Project {
  categories: string[];
  title?: string;
  slug: string;
  description?: string;
  icon: string;
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
          <Link href={`/projects/${x.slug}`} key={x.title}>
            <a className="group focus:outline-none w-full sm:w-2/5 lg:w-1/4">
              <article className="px-2 py-2 rounded h-full border-2 group-focus:border-radix-slate7 border-transparent group-hover:bg-radix-slate2 flex items-center">
                <div className="flex items-center gap-x-4 ">
                  <div className="h-8 w-8 shrink-0">
                    <Icon
                      icon={x.icon}
                      className="h-8 w-8 text-radix-slate9 grayscale"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="w-min-sm">{x.title}</h2>
                    <span className="text-radix-slate11 text-sm">
                      {x.description}
                    </span>
                  </div>
                </div>
              </article>
            </a>
          </Link>
        ))}
    </div>
  );
}
