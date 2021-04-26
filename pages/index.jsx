import Head from "next/head";
import Link from "next/link";
import Grid from "@/components/home/grid";
import SocialLinks from "@/components/home/sociallinks";
import Nav from "@/components/newnav";
import { getPortfolios } from "../lib/graphcms";
import { getHome } from "../lib/datocms";

export default function Home({ portfolios, home }) {
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
      <main className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold py-4 pb-8">
          {home.title}
        </h1>
        <h2 className="text-lg text-gray-800">{home.description}</h2>
        <div className="flex gap-x-4 pt-8 pb-4 items-start gap-y-4 flex-wrap">
          <a
            href={`mailto:${home.email}`}
            className="border px-4 py-2 rounded hover:bg-gray-50 focus:bg-gray-50 font-medium whitespace-nowrap"
          >
            Contact Me
          </a>

          <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 justify-center">
            <SocialLinks
              github={home.github}
              unsplash={home.unsplash}
              npm={home.npm}
              linkedin={home.linkedin}
              twitter={home.twitter}
            />
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
              <a className="text-cyan-700 hover:underline">portfolio</a>
            </Link>
          </p>
        </div>
      </main>
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
