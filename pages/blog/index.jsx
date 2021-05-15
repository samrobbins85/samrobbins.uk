import { getAllBlogs } from "@/lib/datocms";
import Link from "next/link";
import Head from "next/head";
import Nav from "@/components/newnav";

export default function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape("Blog")}**/${escape(
            "Sam Robbins"
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
        <meta property="og:title" content="Blog" />
      </Head>
      <Nav />
      <main className="max-w-85ch mx-auto px-4 py-8">
        <h1 className="text-5xl font-semibold text-center text-nord-10 dark:text-nord-8">
          Blog
        </h1>

        <div className="grid">
          {blogs.map((item) => (
            <div className="py-4" key={item.title}>
              <div>
                <Link href={`/blog/${item.slug}`}>
                  <a>
                    <h2 className="font-semibold text-xl sm:text-2xl text-cyan-600 dark:text-cyan-300">
                      {item.title}
                    </h2>
                  </a>
                </Link>
                <div className="py-1">
                  <time
                    className="text-gray-600 dark:text-gray-300 text-sm uppercase"
                    dateTime={item.date}
                  >
                    {new Date(item.date).toLocaleString("en-gb", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p className="sm:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const blogs = (await getAllBlogs()) || [];
  return {
    props: { blogs },
  };
}
