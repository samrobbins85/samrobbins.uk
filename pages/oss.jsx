import Head from "next/head";
import Nav from "@/components/newnav";
import getSearch from "@/lib/githubapi";

export default function Home({ prs }) {
  console.log(prs);
  return (
    <>
      <Head>
        <title>About | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(
            "Sam Robbins"
          )}**.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content="Sam Robbins" />
        <meta
          property="og:description"
          content="The personal website of Sam Robbins"
        />
      </Head>
      <Nav />
      <main className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-5xl font-semibold pb-4 text-center">Open Source</h1>
        <div className="grid gap-y-2">
          {prs.map((pr) => (
            <div className="flex gap-4 bg-gray-100 py-2 px-2">
              <img
                src={pr.repository.owner.avatarUrl}
                alt={pr.repository.owner.name}
                className="h-12 w-12"
              />
              <div>
                <h2 className="font-semibold">{pr.title}</h2>
                <p>{pr.repository.name}</p>
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
