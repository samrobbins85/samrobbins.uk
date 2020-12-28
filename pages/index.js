import { getHomepage } from "../lib/graphcms";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import DatedItem from "@/components/datedItem";
import Image from "next/image";
export default function Home({ homepage }) {
  const data = homepage[0];
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="py-6 px-2 max-w-85ch mx-auto">
        <h1 className="text-center text-4xl font-semibold">{data.name}</h1>
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
          <div class="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-x-4">
            {data.portfolios.map((item) => (
              <Link href={"/portfolio/" + item.slug}>
                <a class="w-full sm:w-2/3 lg:w-1/3 border border-gray-300 rounded hover:shadow-lg">
                  <div class="h-32 w-full object-contain p-4 relative">
                    <Image src={item.coverImage.url} layout="fill" />
                  </div>
                  <hr class="my-4" />
                  <div class="px-4">
                    <h2 class="font-semibold h-16">{item.title}</h2>
                    <p class="text-gray-600 pb-4">{item.description}</p>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 class=" text-4xl font-black pb-4">Achievements</h2>
          <div class="flex justify-center flex-col gap-y-8">
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
