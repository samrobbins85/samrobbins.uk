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
            <div className="flex gap-4 bg-nord-6 dark:bg-nord-0  py-4 px-4">
              <img
                src={pr.repository.owner.avatarUrl}
                alt={pr.repository.owner.name}
                className="h-12 w-12"
              />
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
                <p className="text-nord-3">
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
  // const req = await fetch(
  //   "https://api.github.com/search/issues?q=is:pr author:samrobbins85 archived:false is:merged -org:samrobbins85&per_page=100",
  //   {
  //     headers: {
  //       // eslint-disable-next-line no-undef
  //       Authorization: `token ${process.env.GITHUB_TOKEN}`,
  //     },
  //   }
  // );

  // const prs = await req.json();

  // for (let i = 0; i < prs.items.length; i++) {
  //   const name = await fetch(prs.items[i].repository_url, {
  //     headers: {
  //       // eslint-disable-next-line no-undef
  //       Authorization: `token ${process.env.GITHUB_TOKEN}`,
  //     },
  //   });
  //   const out = await name.json();
  //   console.log(out);
  // }

  let prs = await getSearch();
  prs = prs.map((x) => x.node);
  return {
    props: { prs },
  };
}
