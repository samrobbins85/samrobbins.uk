import { getHomepage } from "../lib/graphcms";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import Image from "next/image";
import TimeLineItem from "@/components/timelineItem";
import PortfolioItem from "@/components/home/portfolioitem";
import RightArrow from "@/components/svg/rightarrow";
export default function Home({ homepage }) {
  const data = homepage[0];
  return (
    <>
      {/* <Head>
        <title>Sam Robbins</title>
      </Head> */}
      <FilledNav />
      <div className="py-6 px-2 max-w-85ch mx-auto">
        <h1 className="text-6xl font-bold w-3/4 py-4 pb-8">
          Hi, I'm <span className="text-cyan-600">Sam</span> <br /> I study
          Computer Science at{" "}
          <span className="text-purple-800 inline-block">
            Durham University
          </span>
        </h1>
        <h2 className="text-lg text-gray-800 text-center">
          {data.description}
        </h2>
        <div className="flex justify-center gap-x-4 py-8">
          {data.socialLinks.map((entry) => (
            <a className="h-12 w-20 relative" href={entry.link}>
              <Image src={entry.image.url} alt={entry.name} layout="fill" />
            </a>
          ))}
        </div>
        <div className="pt-12">
          <h2 className="text-4xl font-black">Projects</h2>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            {data.portfolios.map((item) => (
              <PortfolioItem
                slug={item.slug}
                image={item.coverImage.url}
                title={item.title}
                description={item.description}
              />
            ))}
            <Link href="/portfolio/">
              <a class="border border-gray-300 sm:border-none rounded hover:shadow-lg sm:hover:shadow-none w-52">
                <div class="px-4 h-52">
                  <h2 class="text-2xl pt-4 h-16">
                    View all my projects on my portfolio page
                    <RightArrow className="text-gray-600 h-20 w-20 mx-auto mt-6" />
                  </h2>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h2 class=" text-4xl font-black pb-4">Achievements</h2>
        </div>
        <div class="max-w-xl p-8">
          <div class="flow-root">
            <ul class="-mb-8">
              {data.achievements.map((item, i) =>
                i === data.achievements.length - 1 ? (
                  <TimeLineItem
                    image={item.image.url}
                    title={item.achievement}
                    date={item.date}
                    description={item.description}
                    icon={item.icon}
                    end={true}
                  />
                ) : (
                  <TimeLineItem
                    image={item.image.url}
                    title={item.achievement}
                    date={item.date}
                    description={item.description}
                    icon={item.icon}
                  />
                )
              )}
            </ul>
          </div>
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
