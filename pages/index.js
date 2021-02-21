import { getHomepage } from "../lib/graphcms";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import PortfolioItem from "@/components/home/portfolioitem";
import RightArrow from "@/components/svg/rightarrow";
import SocialSwitch from "@/components/home/socialswitch";
export default function Home({ homepage }) {
  const data = homepage[0];
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
          {"Hi, I'm Sam Robbins"}
        </h1>
        <h2 className="text-lg text-gray-800">{data.description}</h2>
        <div className="flex gap-x-4 py-8">
          {data.socialLinks.map((entry) => (
            <SocialSwitch
              linkType={entry.linkType}
              link={entry.link}
              key={entry.linkType}
            />
          ))}
        </div>
        <div className="pt-2">
          <h2 className="text-4xl font-black">Projects</h2>
          <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
            {data.portfolios.map((item) => (
              <PortfolioItem
                slug={item.slug}
                image={item.coverImage.url}
                title={item.title}
                description={item.description}
                key={item.title}
              />
            ))}
            <div className="hidden sm:flex">
              <Link href="/portfolio/">
                <a className="w-52 group">
                  <div className="px-4 h-52">
                    <h2 className="text-2xl pt-4 h-16">
                      View all my projects on my portfolio page
                      <RightArrow className="text-gray-600 h-20 w-20 mx-auto mt-6 group-hover:text-blue-700" />
                    </h2>
                  </div>
                </a>
              </Link>
            </div>
            <div className="block sm:hidden text-lg text-gray-700 text-center">
              View all my projects on my{" "}
              <Link href="/portfolio">
                <a className="text-blue-700 hover:underline">portfolio page</a>
              </Link>
            </div>
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
