import Head from "next/head";
import Link from "next/link";
import SocialLinks from "@/components/home/social";
import Nav from "@/components/nav";
import GridItem from "@/components/griditem";
import { getPortfolios } from "../lib/graphcms";
import { getHome } from "../lib/datocms";
import { GetStaticProps } from "next";

function ContactButton({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="w-32 text-center border border-nord4 bg-nord6 dark:border-gray-700 px-4 py-2 rounded hover:bg-nord5 focus:bg-gray-50 dark:hover:bg-nord2 dark:focus:bg-nord2 font-medium whitespace-nowrap dark:bg-nord0 justify-self-center"
    >
      Contact Me
    </a>
  );
}

export default function Home({ portfolios, home }) {
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.samrobbins.uk/api/${escape("Sam Robbins")}`}
        />
        <meta property="og:title" content="Sam Robbins" />
        <meta
          property="og:description"
          content="The personal website of Sam Robbins"
        />
      </Head>
      <Nav />
      <div className="py-6 px-4 max-w-85ch mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold py-4 pb-8 ">
          {home.title}
        </h1>
        <h2 className="text-lg text-gray-600 dark:text-gray-200">
          {home.description}
        </h2>
        <div className="grid sm:flex gap-x-4 pt-8 pb-4 items-start gap-y-4 flex-wrap justify-center sm:justify-start">
          <ContactButton email={home.email} />
          <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 justify-center ">
            <SocialLinks />
          </div>
        </div>
        <h2 className="text-3xl font-semibold text-nord0 dark:text-nord5">
          Projects
        </h2>

        <div className="grid gap-8 py-4">
          {portfolios
            .filter((item) => item.featured)
            .slice(0, 3)
            .map((item) => (
              <GridItem
                title={item.title}
                description={item.description}
                screenshot={item.screenshot}
                slug={item.slug}
                key={item.title}
                wide
              />
            ))}
        </div>

        <div>
          <p className="text-center">
            To see all my projects, check out my{" "}
            <Link href="/portfolio">
              <a className="text-link hover:underline dark:text-darkLink">
                portfolio
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const portfolios = (await getPortfolios()) || [];
  const home = (await getHome()) || {};

  return {
    props: { portfolios, home },
  };
};
