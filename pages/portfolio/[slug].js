import { getPortfolio, getAllPortfoliosWithSlug } from "@/lib/graphcms";
import remark from "remark";
import NavBar from "@/components/nav";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
var remark2rehype = require("remark-rehype");
var html = require("rehype-stringify");
const rehypePrism = require("@mapbox/rehype-prism");
export default function Portfolio({ data, contentHtml }) {
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
      </Head>
      <FilledNav />

      <div className="p-4 max-w-85ch mx-auto">
        <h1 className="text-7xl text-center font-bold pt-20">{data.title}</h1>
        <h2 className="text-center text-gray-600 text-lg pt-6">
          {data.description}
        </h2>
        <div className="flex justify-center pt-10 gap-12">
          <a href={data.github[0]}>
            <div className=" px-8 py-2 rounded bg-black text-white text-lg tracking-wide">
              GitHub
            </div>
          </a>
          {data.website ? (
            <a href={data.website}>
              <div className=" px-8 py-2 rounded bg-cyan-700 text-white text-lg tracking-wide hover:shadow hover:bg-cyan-800">
                Website
              </div>
            </a>
          ) : undefined}
        </div>
        <div className="py-2 pt-10">
          <h2 className="text tracking-widest text-center uppercase ">
            Made with
          </h2>
          <div className="flex justify-center gap-x-8">
            {data.technologies.map((item) => (
              <a href={item.link}>
                <img
                  className="h-20 w-40 object-contain"
                  src={item.image.url}
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
        <div
          className="prose mx-auto"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPortfolio(params.slug);
  const output = await remark()
    .use(remark2rehype)
    .use(rehypePrism)
    .use(html)
    .process(data.markdown);
  const contentHtml = output.toString();
  return {
    props: {
      data,
      contentHtml,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPortfoliosWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
  };
}
