import { getBlog, getAllBlogsWithSlug } from "@/lib/datocms";
import Head from "next/head";
import { renderRule } from "react-datocms";
import { isCode } from "datocms-structured-text-utils";
import Nav from "@/components/newnav";
import { render } from "datocms-structured-text-to-html-string";
import rehype from "rehype";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";

export default function Blog({ dato, stringContent }) {
  return (
    <>
      <Head>
        <title>{dato.title} | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(dato.title)}**/${escape(
            dato.description
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content={dato.title} />
        <meta property="og:description" content={dato.description} />
      </Head>
      <Nav />

      <div className="max-w-85ch p-4 mx-auto">
        <header className="py-2 pb-4">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center">
            {dato.title}
          </h1>
          <p className="text-center py-1 text-gray-600 dark:text-gray-200">
            {new Date(Date.parse(dato.date)).toLocaleString("en-gb", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </header>
        <main>
          <article
            className="prose dark:prose-light mx-auto"
            dangerouslySetInnerHTML={{ __html: stringContent }}
          />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const dato = await getBlog(params.slug);
  const content = render(dato.structuredtext, {
    customRules: [
      renderRule(isCode, ({ adapter: { renderNode, renderText }, key, node }) =>
        renderNode(
          "pre",
          { key, class: `language-${node.language}` },
          renderNode(
            "code",
            { key, class: `language-${node.language}` },
            renderText(node.code)
          )
        )
      ),
    ],
  });
  const processedContent = await rehype()
    .use(rehypePrism)
    .use(rehypeStringify, { omitOptionalTags: true })
    .process(content);
  const stringContent = String(processedContent);
  return {
    props: {
      dato,
      stringContent,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllBlogsWithSlug();
  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
