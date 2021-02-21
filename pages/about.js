import FilledNav from "@/components/fillednav";
import { getAbout } from "@/lib/graphcms";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import TimeLineItem from "@/components/about/timeline";
export default function About({ about }) {
  const data = about[0];
  return (
    <>
      <Head>
        <title>About | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape("About")}**/${escape(
            "Sam Robbins"
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content="About" />
      </Head>
      <FilledNav />
      <div className="">
        <div className="max-w-85ch mx-auto py-8 px-2">
          <h1 className="text-5xl font-semibold">About</h1>
          <div className="py-6 border border-gray-300 rounded max-w-sm mx-auto px-2 my-4">
            <h2
              className="text-center text-xl italic about"
              dangerouslySetInnerHTML={{ __html: data.cv.html }}
            />
          </div>
          <h2 className="text-3xl font-semibold">Jobs</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.jobs.map((item) => (
              <div
                className="flex gap-x-4 px-6 py-4 items-center"
                key={item.company}
              >
                <img
                  src={item.logo.url}
                  className="h-16 w-16"
                  alt={item.title}
                />
                <div className="grid text-lg">
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
                {data.timeline.map((item, i) => (
                  <TimeLineItem
                    data={item}
                    end={i === data.timeline.length - 1}
                    key={item.date}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">Skills</h2>
            <h3 className="text-xl text-gray-600">
              These are the tools I love to use
            </h3>
            <div className="flex justify-center gap-x-8 flex-wrap gap-y-4 py-4">
              {data.technologies.map((item) => (
                <a
                  className="relative h-20 w-40"
                  href={item.link}
                  key={item.name}
                >
                  <Image
                    src={item.image.url}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                    sizes="50vw"
                  />
                </a>
              ))}
            </div>
            <p className="text-center text-lg text-gray-600">
              {"To see the full range of technologies I've used, go to my "}
              <Link href="./portfolio">
                <a className="text-blue-700 hover:underline">portfolio page</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const about = (await getAbout()) || [];
  about[0]["timeline"] = about[0]["timeline"]
    .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0))
    .reverse();
  return {
    props: { about },
  };
}
