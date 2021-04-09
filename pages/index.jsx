import Head from "next/head";
import FilledNav from "@/components/fillednav";
import Link from "next/link";
import SocialSwitch from "@/components/home/socialswitch";
import Grid from "@/components/home/grid";
import { getHomepage, getAbout, getPortfolios } from "../lib/graphcms";

export default function Home({ homepage, portfolios }) {
  const data = homepage.homepages[0];
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
      <div className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold py-4 pb-8">
          Hi, I‘m Sam Robbins
        </h1>
        <h2 className="text-lg text-gray-800">
          {data.description}. You can find my CV/Resume{" "}
          <a
            className="text-cyan-700 hover:underline focus:underline"
            href="https://cv.samrobbins.uk"
          >
            here
          </a>
          .
        </h2>
        <div className="flex gap-x-4 py-8 items-start gap-y-4">
          <Link href={`mailto:${data.email}`}>
            <a className="border px-4 py-2 rounded hover:bg-gray-50 focus:bg-gray-50 font-medium whitespace-nowrap">
              Contact Me
            </a>
          </Link>
          <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 justify-center">
            {data.socialLinks.map((entry) => (
              <SocialSwitch
                linkType={entry.linkType}
                link={entry.link}
                key={entry.linkType}
              />
            ))}
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="flex flex-wrap container mx-auto justify-center py-4 px-4 gap-4">
          <Grid portfolios={portfolios} />
        </div>
        <div>
          <p className="text-center">
            To see all my projects, check out my{" "}
            <Link href="/portfolio">
              <a className="text-cyan-700 hover:underline">porfolio</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const portfolios = (await getPortfolios()) || [];

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
    props: { homepage, about, portfolios },
  };
}
