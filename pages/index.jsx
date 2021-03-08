import Head from "next/head";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import SocialSwitch from "@/components/home/socialswitch";
import TimeLineItem from "@/components/about/timeline";
import { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";
import { getHomepage, getAbout } from "../lib/graphcms";

export default function Home({ homepage, about }) {
  const data = homepage[0];
  const aboutData = about[0];
  const [expand, setExpand] = useState(false);
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
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
      <div className="py-6 px-2 max-w-85ch mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold py-4 pb-8">
          Hi, I‘m Sam Robbins
        </h1>
        <h2 className="text-lg text-gray-800">{data.description}</h2>
        <div className="flex gap-x-4 py-8 items-center">
          <Link href={`mailto:${data.email}`}>
            <a className="border px-4 py-2 rounded hover:bg-gray-50 focus:bg-gray-50 font-medium">
              Contact Me
            </a>
          </Link>
          {data.socialLinks.map((entry) => (
            <SocialSwitch
              linkType={entry.linkType}
              link={entry.link}
              key={entry.linkType}
            />
          ))}
        </div>
        <h2 className="text-3xl font-semibold">Jobs</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {aboutData.jobs.map((item) => (
            <div
              className="flex gap-x-4 px-6 py-4 items-center"
              key={item.company}
            >
              <img src={item.logo.url} className="h-16 w-16" alt={item.title} />
              <div className="grid">
                <span className="font-semibold">{item.title}</span>
                <span className="text-gray-700">{item.company}</span>
                <span className="text-gray-700">{item.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold">Timeline</h2>
        <div className="py-8 px-1">
          <div className="flow-root">
            <ul className="-mb-8">
              {aboutData.timeline
                .slice(0, expand ? aboutData.timeline.length : 5)
                .map((item, i) => (
                  <TimeLineItem
                    data={item}
                    end={expand ? i === aboutData.timeline.length - 1 : i === 4}
                    key={item.date}
                  />
                ))}
            </ul>
          </div>
        </div>
        {!expand && (
          <div className="flex justify-center">
            <button
              className="flex items-center"
              type="button"
              onClick={() => setExpand(true)}
            >
              <ChevronDownIcon className="mr-2" size={16} />
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
  const about = (await getAbout()) || [];
  about[0].timeline = about[0].timeline
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
