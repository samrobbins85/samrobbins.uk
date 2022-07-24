import { getPortfolios, getPortfolioCategories } from "@/lib/graphcms";
import Categories from "@/components/Categories";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Layout from "@/components/layout";
import { PortfolioCategories } from "@/lib/graphcms.generated";
import { InferGetStaticPropsType } from "next";

export default function Projects({
  projects,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const [category, setCategory] = useState("All");
  useEffect(() => {
    if (category !== "All" && category !== router.asPath.split("#")[1]) {
      router.replace(`#${category}`, undefined, { shallow: true });
    } else if (category === "All") {
      router.replace("", undefined, { shallow: true });
    }
  }, [category]);
  useEffect(() => {
    if (Object.keys(categories).includes(router.asPath.split("#")[1])) {
      setCategory(router.asPath.split("#")[1]);
    } else {
      setCategory("All");
    }
  }, []);
  return (
    <Layout
      title="Projects"
      description="Projects I have made in my own time or as part of my degree"
      fullWidth
    >
      <h1 className="text-5xl font-semibold text-center text-radix-mint11">
        Projects
      </h1>

      <div className="mx-auto max-w-6xl py-4">
        <Categories
          setCategory={setCategory}
          category={category}
          categories={categories}
        />
        <ProjectGrid projects={projects} category={category} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = (await getPortfolios()) || [];
  let tempCategories = (await getPortfolioCategories()).map((x) => x.name);
  const categories = {};
  tempCategories.forEach((element) => {
    categories[element] = projects.filter((x) =>
      x.categories.includes(element as PortfolioCategories)
    ).length;
  });
  return {
    props: { projects, categories },
  };
}
