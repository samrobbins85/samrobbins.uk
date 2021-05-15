import GridItem from "@/components/griditem";

export default function Grid({ portfolios }) {
  return (
    <>
      {portfolios
        .filter((item) => item.featured)
        .slice(0, 3)
        .map((item) => (
          <div className="w-full sm:w-1/3 lg:w-1/4" key={item.title}>
            <GridItem item={item} />
          </div>
        ))}
    </>
  );
}
