import TimeLineItem from "@/components/about/timeline";
import { useState } from "react";
import { ChevronDownIcon } from "@primer/octicons-react";
import Layout from "@/components/layout";
import { getAbout } from "../lib/datocms";
import Image from "next/image";
import { useTheme } from "next-themes";
import Job from "@/components/about/job";
export default function About({ about }) {
  const [expand, setExpand] = useState(false);
  const { resolvedTheme } = useTheme();
  return (
    <Layout title="About" description="About me">
      <header>
        <h1 className="text-5xl font-semibold pb-4 text-center text-radix-mint11">
          About
        </h1>
        <div className="flex justify-center">
          <div className="border px-6 py-4 rounded text-lg slate-bg slate-border  text-center">
            For more details, check out my{" "}
            <a
              className="border-b-2 border-radix-cyan11"
              href="https://cv.samrobbins.uk"
            >
              CV
            </a>{" "}
            or{" "}
            <a
              className="border-b-2 border-radix-cyan11"
              href="https://www.polywork.com/samrobbins"
            >
              Polywork
            </a>
          </div>
        </div>
      </header>
      <section className="pt-4">
        <h2 className="text-3xl font-semibold">Jobs</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {about.jobs.map((item) => (
            <Job
              key={item.company}
              logo={item.logo}
              title={item.role}
              duration={item.duration}
              company={item.company}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold pt-6">Skills</h2>
        <p className="text-lg text-radix-slate11">
          Some of my favourite technologies to use
        </p>
        <div className="flex justify-center gap-x-8 flex-wrap gap-y-4 py-4">
          {about.skills.map((item) => (
            <a className="relative h-18 w-24" href={item.link} key={item.name}>
              <Image
                src={
                  resolvedTheme === "light"
                    ? item.logo.url
                    : item.lightlogo?.url || item.logo.url
                }
                alt={item.name}
                layout="fill"
                objectFit="contain"
              />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-semibold py-6">Timeline</h2>
        <ul className="px-1">
          {about.timeline
            .slice(0, expand ? about.timeline.length : 5)
            .map((item) => (
              <TimeLineItem data={item} key={item.description} />
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
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const about = await getAbout();
  // I think this is no longer necessary, but better safe than sorry
  about.timeline = about.timeline
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
    props: { about },
  };
}
