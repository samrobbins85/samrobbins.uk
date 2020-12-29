import { getHomepage } from "../lib/graphcms";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import Image from "next/image";
import TimeLineItem from "@/components/timelineItem";
export default function Home({ homepage }) {
  const data = homepage[0];
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="py-6 px-2 max-w-85ch mx-auto">
        <h1 className="text-6xl font-bold w-3/4 py-4 pb-8">
          Hi, I'm <span className="text-cyan-500">Sam</span> <br /> I study
          Computer Science at{" "}
          <span className="text-purple-800 inline-block">
            Durham University
          </span>
        </h1>
        <h2 className="text-lg text-gray-800 text-center">
          {data.description}
        </h2>
        <div className="flex justify-center gap-x-4 pt-4">
          {data.socialLinks.map((entry) => (
            <a className="h-12 w-20 relative" href={entry.link}>
              <Image src={entry.image.url} alt={entry.name} layout="fill" />
            </a>
          ))}
        </div>
        <div className="pt-4">
          <h2 className="text-4xl font-black">Projects</h2>
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            {data.portfolios.map((item) => (
              <Link href={"/portfolio/" + item.slug}>
                <a class="border border-gray-300 rounded hover:shadow-lg w-52">
                  <div class="h-32 w-full object-contain p-4 relative">
                    <Image
                      src={item.coverImage.url}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <hr class="my-4" />
                  <div class="px-4">
                    <h2 class="font-semibold h-16">{item.title}</h2>
                    <p class="text-gray-600 pb-4">{item.description}</p>
                  </div>
                </a>
              </Link>
            ))}
            <Link href="/portfolio/">
              <a class="border border-gray-300 rounded hover:shadow-lg w-52">
                <div class="px-4 h-52">
                  <h2 class="text-2xl pt-4 h-16">
                    View all my projects on my portfolio page
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="text-gray-600 h-20 w-20 mx-auto mt-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </h2>
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <h2 class=" text-4xl font-black pb-4">Achievements</h2>
          {/* <div class="flex justify-center flex-col gap-y-8">
            {data.achievements.map((item) => (
              <DatedItem
                colour={item.backgroundColour.hex}
                image={item.image}
                description={item.description}
                achievement={item.achievement}
                date={item.date}
                formatdate={true}
              />
            ))}
          </div> */}
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
