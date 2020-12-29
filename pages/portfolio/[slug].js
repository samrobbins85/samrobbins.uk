import { getPortfolio, getAllPortfoliosWithSlug } from "@/lib/graphcms";
import remark from "remark";
import Image from "next/image";
import Head from "next/head";
import FilledNav from "@/components/fillednav";
var remark2rehype = require("remark-rehype");
var html = require("rehype-stringify");
const rehypePrism = require("@mapbox/rehype-prism");
import GitHub from "@/components/svg/github";
import NPM from "@/components/svg/npm";
import Globe from "@/components/svg/globe";
import { Menu, Transition } from "@headlessui/react";
import { RepoIcon } from "@primer/octicons-react";
export default function Portfolio({ data, contentHtml, names }) {
  return (
    <>
      <Head>
        <title>{data.title} | Sam Robbins</title>
      </Head>
      <FilledNav />

      <div className="p-4 max-w-85ch mx-auto">
        <h1 className="text-5xl sm:text-6xl text-center font-bold pt-10">
          {data.title}
        </h1>
        <h2 className="text-center text-gray-600 text-lg pt-6">
          {data.description}
        </h2>
        <div className="flex justify-center pt-10 gap-x-12 flex-wrap gap-y-4">
          {data.npm ? (
            <a href={data.npm}>
              <div className="h-12 w-44 px-8 py-2 rounded bg-red-700 text-white text-lg  hover:shadow flex items-center justify-center">
                <NPM className="text-white fill-current inline-block h-12" />
              </div>
            </a>
          ) : undefined}
          {data.website ? (
            <a href={data.website}>
              <div className="h-12 w-44 px-8 py-2 rounded text-gray-700 border border-gray-400 text-lg tracking-wide hover:shadow flex items-center justify-center">
                <Globe className="h-8 w-8 text-black mr-2" />
                <span>Website</span>
              </div>
            </a>
          ) : undefined}
          {data.github ? (
            data.github.length > 1 ? (
              <div className="relative inline-block text-left">
                <Menu>
                  {({ open }) => (
                    <>
                      <span className="rounded-md shadow-sm">
                        <Menu.Button className="inline-flex h-12 w-44 justify-center px-4 py-2 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-black border border-gray-300 rounded-md hover:text-white focus:outline-none items-center focus:ring-2 focus:ring-cyan -500 focus:ring-opacity-50">
                          <GitHub className="mr-2" />
                          <span>GitHub</span>
                          <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Menu.Button>
                      </span>

                      <Transition
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-20"
                        >
                          <div className="py-1">
                            {data.github.map((item) => (
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={item}
                                    className={`${
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700"
                                    } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left text-blue-700 font-bold`}
                                  >
                                    <RepoIcon
                                      size={24}
                                      className="mr-1 text-black"
                                    />
                                    {item.split("/").slice(-1)[0]}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            ) : (
              <a href={data.github[0]}>
                <div className="h-12 w-44 px-8 py-2 rounded bg-black text-white text-lg tracking-wide flex items-center">
                  <GitHub className="text-white mr-3 inline-block" />

                  <span className="font-semibold">GitHub</span>
                </div>
              </a>
            )
          ) : undefined}
        </div>
        {data.coders.length !== 0 && (
          <div className="pt-4">
            <h2 className="text tracking-widest text-center uppercase ">
              Made by
            </h2>
            <div className="flex justify-center py-4">
              <div class="flex space-x-2 overflow-hidden gap-x-4 flex-wrap gap-y-2 justify-center">
                {data.coders.map((coder, index) => (
                  <div className="flex items-center gap-x-2">
                    <div className="inline-block h-10 w-10 relative">
                      <Image
                        className="rounded-full"
                        src={"https://github.com/" + coder + ".png"}
                        alt={coder}
                        layout="fill"
                        objectFit="contain"
                        priority={true}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p>{names[index]}</p>
                      <a
                        className="text-blue-700 hover:underline"
                        href={`https://github.com/${coder}`}
                      >
                        <p>{coder}</p>
                      </a>
                    </div>
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
                  priority={true}
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
  var names = [];
  if (data.coders.length !== 0) {
    for (var i = 0; i < data.coders.length; i++) {
      var name = await fetch("https://api.github.com/users/" + data.coders[i], {
        headers: {
          Authorization: "token" + process.env.GITHUB_TOKEN,
        },
      });
      var out = await name.json();
      names.push(out.name);
    }
  }
  return {
    props: {
      data,
      contentHtml,
      names,
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
