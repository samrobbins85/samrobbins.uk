import GridItem from "@/components/griditem";

export default function Grid({ portfolios }) {
  return (
    <>
      {portfolios
        .filter((item) => item.featured)
        .map((item) => (
          <div className="w-full sm:w-2/5 lg:w-1/5" key={item.title}>
            <GridItem item={item} />
          </div>
        ))}
    </>
  );
}
