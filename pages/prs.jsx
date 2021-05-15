import Head from "next/head";
import Nav from "@/components/newnav";
import getSearch from "@/lib/githubapi";

export default function Home({ prs }) {
  return (
    <>
      <Head>
        <title>Pull Requests | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(
            "Sam Robbins"
          )}**.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content="Pull Requests | Sam Robbins" />
        <meta
          property="og:description"
          content="The personal website of Sam Robbins"
        />
      </Head>
      <Nav />
      <main className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-5xl font-semibold pb-6 text-center">
          Pull Requests
        </h1>
        <div className="grid gap-y-4">
          {prs.map((pr) => (
            <div className="flex gap-4 bg-nord-5 border border-nord-4 dark:bg-nord-0 dark:border-nord-2 p-4">
              <div className="h-12 w-12">
                <img
                  src={pr.repository.owner.avatarUrl}
                  alt={pr.repository.owner.name}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between flex-grow flex-wrap gap-x-2">
                <div>
                  <a
                    href={pr.permalink}
                    className="text-black hover:text-blue-600 dark:text-nord-6 dark:hover:text-blue-400"
                  >
                    <h2 className="font-semibold">{pr.title}</h2>
                  </a>
                  <a
                    className="text-nord-3 hover:text-blue-600 dark:text-nord-4 dark:hover:text-blue-400"
                    href={pr.repository.url}
                  >
                    {pr.repository.owner.login}/{pr.repository.name}
                  </a>
                </div>
                <p className="text-nord-3 dark:text-nord-4">
                  {new Date(pr.mergedAt).toLocaleString("en-gb", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let prs = await getSearch();
  prs = prs.map((x) => x.node);
  return {
    props: { prs },
  };
}
