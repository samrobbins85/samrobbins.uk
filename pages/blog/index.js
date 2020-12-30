import FilledNav from "@/components/fillednav";
import { getBlogs } from "@/lib/graphcms";
import Link from "next/link";
import Head from "next/head";
export default function Blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Blog | Sam Robbins</title>
      </Head>
      <FilledNav />
      <div className="max-w-85ch mx-auto px-2 py-4">
        <h1 className="text-5xl font-semibold">Blog</h1>
        <div class="grid pt-4">
          {blogs.map((item) => (
            <div class="py-4">
              <div>
                <Link href={"/blog/" + item.slug}>
                  <a>
                    <h2 class="font-semibold text-xl sm:text-2xl text-blue-700">
                      {item.title}
                    </h2>
                  </a>
                </Link>
                <div class="py-1">
                  <time
                    class="text-gray-600 text-sm uppercase"
                    datetime={item.date}
                  >
                    {new Date(item.date).toLocaleString("en-gb", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <p class="sm:text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const blogs = (await getBlogs()) || [];
  return {
    props: { blogs },
  };
}
