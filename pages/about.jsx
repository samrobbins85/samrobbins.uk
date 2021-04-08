import Head from "next/head";
import FilledNav from "@/components/fillednav";

import TimeLineItem from "@/components/home/timeline";
import { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { getHomepage } from "../lib/graphcms";
import { getAbout } from "../lib/datocms";

export default function Home({ homepage, about }) {
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
      <FilledNav />
      <div className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-5xl font-semibold">About</h1>
        <h2 className="text-3xl font-semibold py-6">Published Articles</h2>
        <div className="grid">
          {about.articles.map((x) => (
            <div className="flex">
              <img
                className="h-12 w-12 mr-2"
                src={x.logo.url}
                alt={x.publisher}
              />
              <div className="grid">
                <a
                  href={x.link}
                  className="text-xl font-semibold text-cyan-700 hover:underline flex items-baseline gap-x-1"
                >
                  {x.title}
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
                <span className="text-gray-600">{x.description}</span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold py-6">Timeline</h2>
        <ul className="px-1">
          {homepage.timelineItems
            .slice(0, expand ? homepage.timelineItems.length : 5)
            .map((item, i) => (
              <TimeLineItem
                data={item}
                end={expand ? i === homepage.timelineItems.length - 1 : i === 4}
                key={item.description}
              />
            ))}
        </ul>
        {!expand && (
          <div className="flex justify-center">
            <button
              className="flex items-center"
              type="button"
              onClick={() => setExpand(true)}
            >
              <ChevronDownIcon aria-hidden="true" className="mr-2" size={16} />
              <span>Show more</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const homepage = (await getHomepage()) || [];
  const about = await getAbout();
  homepage.timelineItems = homepage.timelineItems
    .sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      }
      if (b.date > a.date) {
        return -1;
      }
      return 0;
    })
    .reverse();
  return {
    props: { homepage, about },
  };
}
