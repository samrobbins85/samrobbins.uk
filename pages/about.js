import FilledNav from "@/components/fillednav";
import DatedItem from "@/components/datedItem";
import { getAbout } from "@/lib/graphcms";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Hexagon from "@/components/about/hexagon";
export default function About({ about }) {
  const data = about[0];
  return (
    <>
      <Head>
        <title>About | Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="max-w-85ch mx-auto py-8 px-2">
        <h1 className="text-5xl font-semibold">About</h1>
        <div className="py-6 border border-gray-300 rounded max-w-sm mx-auto px-2 my-4">
          <h3
            className="text-center text-xl italic about"
            dangerouslySetInnerHTML={{ __html: data.cv.html }}
          />
        </div>
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="flex justify-center flex-col gap-y-8 py-2">
          {data.experiences.map((item) => (
            <DatedItem
              colour={item.backgroundColour.hex}
              image={item.logo}
              description={item.company}
              achievement={item.title}
              date={item.duration}
              formatdate={false}
              key={item.title}
            />
          ))}
        </div>
        <div className="px-2 py-4">
          <h2 className="text-3xl font-semibold py-2">Hackathons</h2>
          <h3 className="text-xl text-gray-600">
            Hover over the stickers to find out more
          </h3>
          <ul className="hexGrid py-4">
            {data.hackathons.map((item) => (
              <Hexagon
                image={item.image.url}
                name={item.name}
                slug={item.slug}
                project={item.project}
                key={item.name}
              />
            ))}
          </ul>
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
    </>
  );
}

export async function getStaticProps() {
  const about = (await getAbout()) || [];
  return {
    props: { about },
  };
}
