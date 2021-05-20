import Head from "next/head";
import Link from "next/link";
import Grid from "@/components/home/grid";
import SocialLinks from "@/components/home/social";
import Nav from "@/components/newnav";
import { getPortfolios } from "../lib/graphcms";
import { getHome } from "../lib/datocms";

export default function Home({ portfolios, home }) {
  const colours = [
    {
      bg: "bg-blue-100 dark:bg-nord-8",
      text: "text-cyan-700 dark:text-cyan-800",
      description: "dark:text-nord-0",
    },
    {
      bg: "bg-red-100 dark:bg-nord-11",
      text: "text-red-700 dark:text-red-100",
      description: "dark:text-black",
      link: "dark:text-black",
    },
    {
      bg: "bg-green-100 dark:bg-nord-14",
      text: "text-green-700 dark:text-green-900",
      description: "dark:text-black",
    },
    {
      bg: "bg-purple-100 dark:bg-nord-15",
      text: "text-purple-700 dark:text-purple-900",
      description: "dark:text-black",
      link: "dark:text-indigo-900",
    },
    {
      bg: "bg-yellow-50 dark:bg-nord-13",
      text: "text-yellow-700 dark:text-yellow-900",
      description: "dark:text-black",
    },
    {
      bg: "bg-orange-50 dark:bg-nord-12",
      text: "text-orange-700 dark:text-orange-900",
      description: "dark:text-black",
      link: "dark:text-cyan-900",
    },
  ];
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
      <Nav />
      <div className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold py-4 pb-8 text-nord-10 dark:text-nord-8">
          {home.title}
        </h1>
        <h2 className="text-lg text-gray-800 dark:text-gray-200">
          {home.description}
        </h2>
        <div className="flex gap-x-4 pt-8 pb-4 items-start gap-y-4 flex-wrap">
          <a
            href={`mailto:${home.email}`}
            className="border border-nord-4 bg-nord-4 dark:border-gray-700 px-4 py-2 rounded hover:bg-nord-5 focus:bg-gray-50 dark:hover:bg-nord-2 dark:focus:bg-nord-2 font-medium whitespace-nowrap dark:bg-dark-contrast"
          >
            Contact Me
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 justify-center">
            <SocialLinks />
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-nord-10 dark:text-nord-8">
          Projects
        </h2>
        {/* <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
          <Grid portfolios={portfolios} />
        </div> */}

        <div className="grid gap-x-8 gap-y-8 py-4">
          {portfolios
            .filter((item) => item.featured)
            .slice(0, 3)
            .map((item, index) => (
              <div
                className={`${colours[index].bg} p-2 grid sm:grid-cols-2 rounded`}
              >
                <div className="text-center">
                  <p
                    className={`text-2xl font-semibold text-center pt-4 ${colours[index].text}`}
                  >
                    {item.title}
                  </p>
                  <p className={`py-4 text-center ${colours.description}`}>
                    {item.description}
                  </p>
                  <Link href={`/portfolio/${item.slug}`}>
                    <a
                      className={`hidden sm:block underline text-blue-900 ${colours[index].link}`}
                    >
                      Find out more
                    </a>
                  </Link>
                </div>
                <img
                  className="transform sm:rotate-3 p-4"
                  src={item.screenshot.url}
                  alt="A11y"
                />
                <Link href={`/portfolio/${item.slug}`}>
                  <a
                    className={`sm:hidden underline pb-2 text-center text-blue-900 ${colours[index].link}`}
                  >
                    Find out more
                  </a>
                </Link>
              </div>
            ))}
        </div>

        <div>
          <p className="text-center">
            To see all my projects, check out my{" "}
            <Link href="/portfolio">
              <a className="text-cyan-700 hover:underline dark:text-cyan-300">
                portfolio
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];
  const home = (await getHome()) || {};

  return {
    props: { portfolios, home },
  };
}
