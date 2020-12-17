import { getPortfolios } from "@/lib/graphcms";

export default function Portfolio({ portfolios }) {
  return (
    <div className="pt-6 px-2">
      <h1 className="text-4xl font-semibold text-center">Portfolio</h1>
      <div className="grid grid-cols-6 container mx-auto">
        {portfolios.map((item) => (
          <div className="shadow h-20">{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];
  return {
    props: { portfolios },
  };
}
