import { getPortfolios } from "@/lib/graphcms";
import NavBar from "@/components/nav";
import Link from "next/link";
export default function Portfolio({ portfolios }) {
  return (
    <>
      <NavBar
        title="Sam Robbins"
        text={[{ title: "Portfolio", path: "portfolio" }]}
      />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-semibold text-center">Portfolio</h1>
        <div>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-x-4">
            {portfolios.map((item) => (
              <Link href={"/portfolio/" + item.slug}>
                <a class="w-full sm:w-2/5 lg:w-1/5 border border-gray-300 rounded hover:shadow-lg">
                  <img
                    class="h-32 w-full object-contain p-4"
                    src={item.coverImage.url}
                  />
                  <hr class="my-4" />
                  <div class="px-4">
                    <h2 class="font-semibold h-16">{item.title}</h2>
                    <p class="text-gray-600 pb-4">{item.description}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];
  return {
    props: { portfolios },
  };
}
