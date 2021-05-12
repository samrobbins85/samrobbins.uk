import Head from "next/head";
import DatoImage from "@/components/datoimage";
import TimeLineItem from "@/components/home/timeline";
import { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import Nav from "@/components/newnav";
import { getAbout } from "../lib/datocms";

export default function Home({ prs }) {
  console.log(prs);
  const [expand, setExpand] = useState(false);
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
        {prs.items.map((x) => (
          <p>{x.title}</p>
        ))}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch(
    "https://api.github.com/search/issues?q=is:pr author:samrobbins85 archived:false is:merged -org:samrobbins85 ",
    {
      headers: {
        // eslint-disable-next-line no-undef
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    }
  );
  const prs = await req.json();
  return {
    props: { prs },
  };
}
