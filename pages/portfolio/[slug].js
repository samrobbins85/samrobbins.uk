import { getPortfolio, getAllPortfoliosWithSlug } from "@/lib/graphcms";
import remark from "remark";
import Image from "next/image";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
var remark2rehype = require("remark-rehype");
var html = require("rehype-stringify");
const rehypePrism = require("@mapbox/rehype-prism");
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Name({ username }) {
  const { data, error } = useSWR(
    "https://api.github.com/users/" + username,
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div></div>;
  return (
    <div className="flex flex-col">
      <p>{data.name}</p>
      <a
        className="text-blue-700 hover:underline"
        href={`https://github.com/${username}`}
      >
        <p>{username}</p>
      </a>
    </div>
  );
}

export default function Portfolio({ data, contentHtml }) {
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
      </Head>
      <FilledNav />

      <div className="p-4 max-w-85ch mx-auto">
        <h1 className="text-7xl text-center font-bold pt-10">{data.title}</h1>
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
        {data.coders.length !== 0 && (
          <div className="pt-4">
            <h2 className="text tracking-widest text-center uppercase ">
              Made by
            </h2>
            <div className="flex justify-center py-4">
              <div class="flex space-x-2 overflow-hidden gap-x-4">
                {data.coders.map((coder) => (
                  <div className="flex items-center gap-x-2">
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src={"https://github.com/" + coder + ".png"}
                      alt={coder}
                    />
                    <Name username={coder} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="py-2 pt-10">
          <h2 className="text tracking-widest text-center uppercase ">
            Made using
          </h2>
          <div className="flex justify-center gap-x-8 flex-wrap gap-y-4 py-4">
            {data.technologies.map((item) => (
              <a className="relative h-20 w-40" href={item.link}>
                <Image
                  src={item.image.url}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            ))}
          </div>
        </div>
        <hr className="py-2" />
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
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await getAllPortfoliosWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
