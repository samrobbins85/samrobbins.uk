import { getHomepage } from "../lib/graphcms";

export default function Home({ homepage }) {
  const data = homepage[0];
  return (
    <div className="pt-6">
      <h1 className="text-center text-4xl font-semibold">{data.name}</h1>
    </div>
  );
}

export async function getStaticProps() {
  const homepage = (await getHomepage()) || [];
  return {
    props: { homepage },
  };
}
