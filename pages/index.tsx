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
      className="w-32 text-center px-4 py-2 rounded justify-self-center slate-bg-int text-radix-slate11 border slate-border-int font-semibold"
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
          name="description"
          content="The personal website of Sam Robbins, software developer"
        />

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
      <main className="py-6 px-4 max-w-85ch mx-auto">
        <header>
          <h1 className="text-4xl sm:text-5xl font-bold py-4 pb-8 text-radix-mint11">
            {home.title}
          </h1>
          <h2 className="text-lg text-radix-slate11">{home.description}</h2>
          <div className="grid sm:flex gap-x-4 pt-8 pb-4 items-start gap-y-4 flex-wrap justify-center sm:justify-start">
            <ContactButton email={home.email} />
            <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 justify-center ">
              <SocialLinks />
            </div>
          </div>
        </header>
        <section>
          <h2 className="text-3xl font-semibold">Projects</h2>
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
                <a className="hover:underline text-radix-cyan11">portfolio</a>
              </Link>
            </p>
          </div>
        </section>
      </main>
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
