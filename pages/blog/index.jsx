import { getAllBlogs } from "@/lib/datocms";
import Link from "next/link";
import Layout from "@/components/layout";

export default function Blog({ blogs }) {
  return (
    <Layout title="Blog">
      <h1 className="text-5xl font-semibold text-center text-nord-10 dark:text-nord-8">
        Blog
      </h1>

      <div className="grid">
        {blogs.map((item) => (
          <div className="py-4" key={item.title}>
            <div>
              <Link href={`/blog/${item.slug}`}>
                <a>
                  <h2 className="font-semibold text-xl sm:text-2xl text-cyan-700 dark:text-cyan-400">
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
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = (await getAllBlogs()) || [];
  return {
    props: { blogs },
  };
}
