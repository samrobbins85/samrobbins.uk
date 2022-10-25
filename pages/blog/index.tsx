import { getAllBlogs } from "@/lib/datocms";
import Link from "next/link";
import Layout from "@/components/layout";
import { InferGetStaticPropsType } from "next";

export default function Blog({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title="Blog" description="Blogs about a range of technical topics">
      <h1 className="text-5xl font-semibold text-center text-radix-slate12">
        Blog
      </h1>

      <div className="grid">
        {blogs.map((item) => (
          <article className="py-4" key={item.title}>
            <Link href={`/blog/${item.slug}`}>
              <h2 className="font-semibold text-xl sm:text-2xl text-radix-cyan11">
                {item.title}
              </h2>
            </Link>
            <div className="py-1">
              <time
                className="text-radix-slate11 text-sm uppercase"
                dateTime={item.date}
              >
                {new Date(item.date).toLocaleString("en-gb", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
            </div>
            <p className="sm:text-lg text-radix-slate11">{item.description}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = (await getAllBlogs()) || [];
  return {
    props: { blogs },
  };
}
