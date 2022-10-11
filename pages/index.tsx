import Head from "next/head";
import SocialLinks from "@/components/home/SocialLinks";
import Nav from "@/components/nav";
import { getHome, getAbout } from "../lib/datocms";
import { InferGetStaticPropsType } from "next";
import Npm from "@/components/svg/npm";
import {
  Linkedin,
  Twitter,
  Github,
  Polywork,
} from "@icons-pack/react-simple-icons";
import Job from "@/components/about/Job";
import TimeLineItem from "@/components/about/TimelineItem";

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

const links = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/samrobbins85",
    className: "hover:text-radix-slate12 focus:text-radix-slate12",
    modifier: "w-6",
  },
  {
    name: "npm",
    icon: Npm,
    link: "https://www.npmjs.com/~samrobbins",
    className: "hover:text-npm focus:text-npm",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/samrobbins85",
    className: "hover:text-twitter focus:text-twitter",
  },
  {
    name: "Polywork",
    icon: Polywork,
    link: "https://www.polywork.com/samrobbins",
    className: "hover:text-polywork focus:text-polywork",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/sam-robbins-gb/",
    className: "hover:text-linkedin focus:text-linkedin",
  },
];

export default function Home({
  home,
  about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
        <meta
          name="description"
          content="The personal website of Sam Robbins, software developer"
        />

        <meta property="og:image" content="/api/og" />
        <meta property="og:title" content="Sam Robbins" />
        <meta
          property="og:description"
          content="The personal website of Sam Robbins"
        />
      </Head>
      <Nav />
      <main className="py-6 px-4 max-w-85ch mx-auto">
        <header>
          <h1 className="text-4xl sm:text-5xl font-bold py-4 pb-8 text-radix-slate12">
            {home.title}
          </h1>
          <h2 className="text-lg text-radix-slate11">{home.description}</h2>
          <div className="grid sm:flex gap-x-4 pt-8 pb-4 items-start gap-y-4 flex-wrap justify-center sm:justify-start">
            <ContactButton email={home.email} />
            <SocialLinks links={links} />
          </div>
        </header>

        <section className="pt-4">
          <h2 className="text-3xl font-semibold">Jobs</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {about.jobs.map((item) => (
              <Job
                key={item.company}
                logo={item.logo}
                title={item.role}
                duration={item.duration}
                company={item.company}
              />
            ))}
          </div>
          <p className="flex justify-center italic">
            For more details, check out my&nbsp;
            <a
              className="hover:underline text-radix-cyan11"
              href="https://cv.samrobbins.uk"
            >
              CV
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold py-6">Timeline</h2>
          <ul className="px-1">
            {about.timeline.map((item) => (
              <TimeLineItem
                category={item.category}
                link={item.link}
                title={item.title}
                date={item.date}
                description={item.description}
                key={item.description}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const home = (await getHome()) || {};
  const about = await getAbout();
  // I think this is no longer necessary, but better safe than sorry
  about.timeline = about.timeline
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
    props: { home, about },
  };
}
