import { getHomepage } from "../lib/graphcms";
import Head from "next/head";
export default function Home({ homepage }) {
  const data = homepage[0];
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
      </Head>
      <div className="pt-6 px-2">
        <h1 className="text-center text-4xl font-semibold">{data.name}</h1>
        <h2 className="text-lg text-gray-800 text-center">
          {data.description}
        </h2>
        <div className="flex justify-center gap-x-4 pt-4">
          {data.socialLinks.map((entry) => (
            <a href={entry.link}>
              <img
                className="h-12 w-20"
                src={entry.image.url}
                alt={entry.name}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const homepage = (await getHomepage()) || [];
  return {
    props: { homepage },
  };
}
