import Head from "next/head";
import Link from "next/link";
import SocialLinks from "@/components/home/social";
import Nav from "@/components/nav";
import GridItem from "@/components/griditem";
import { getPortfolios } from "../lib/graphcms";
import { getHome } from "../lib/datocms";
import { GetStaticProps } from "next";
import style from "./index.module.css";
import ContactButton from "@/components/home/contactButton";

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
      <div className={style.wrapper}>
        <h1 className={style.title}>{home.title}</h1>
        <h2 className={style.description}>{home.description}</h2>
        <div className={style.contact}>
          <ContactButton email={home.email} />
          <div className={style.socialLinks}>
            <SocialLinks />
          </div>
        </div>
        <h2 className={style.projectsTitle}>Projects</h2>

        <div className={style.portfolioGrid}>
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

        <p className={style.portfolioCallout}>
          To see all my projects, check out my{" "}
          <Link href="/portfolio">
            <a className="link">portfolio</a>
          </Link>
        </p>
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
