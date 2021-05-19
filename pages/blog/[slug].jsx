import { getBlog, getAllBlogsWithSlug } from "@/lib/datocms";
import { renderRule } from "react-datocms";
import { isCode } from "datocms-structured-text-utils";
import { render } from "datocms-structured-text-to-html-string";
import rehype from "rehype";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeStringify from "rehype-stringify";
import Layout from "@/components/layout";

export default function Blog({ dato, stringContent }) {
  return (
    <Layout title={dato.title}>
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
    </Layout>
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
