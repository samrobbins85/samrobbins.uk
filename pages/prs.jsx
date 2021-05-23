import getSearch from "@/lib/githubapi";
import Layout from "@/components/layout";
import Image from "next/image";

const githubLoader = ({ src, width }) => `${src}&s=${width}`;

function GitHubImage(props) {
  return <Image {...props} loader={githubLoader} />;
}

export default function Home({ prs }) {
  return (
    <Layout
      title="Pull Requests"
      description="Pull requests I've made on GitHub"
    >
      <h1 className="text-5xl font-semibold pb-6 text-center text-nord-10 dark:text-nord-8">
        Pull Requests
      </h1>
      <div className="grid gap-y-4">
        {prs.map((pr) => (
          <div
            className="flex gap-4 bg-nord-5 border border-nord-4 dark:bg-nord-0 dark:border-nord-2 p-4"
            key={pr.title}
          >
            <div className="h-12 w-12 flex-shrink-0 relative">
              <GitHubImage
                src={pr.repository.owner.avatarUrl}
                alt={pr.repository.owner.name}
                layout="fill"
                className="h-12 w-12"
                sizes="10vw"
              />
            </div>
            <div className="grid sm:flex justify-between flex-grow flex-wrap gap-x-2">
              <div>
                <a
                  href={pr.permalink}
                  className="text-black hover:text-blue-600 dark:text-nord-6 dark:hover:text-blue-400"
                >
                  <h2 className="font-semibold break-words">{pr.title}</h2>
                </a>
                <a
                  className="text-nord-3 hover:text-blue-600 dark:text-nord-4 dark:hover:text-blue-400 break-all"
                  href={pr.repository.url}
                >
                  {pr.repository.owner.login}/{pr.repository.name}
                </a>
              </div>
              <p className="text-nord-3 dark:text-nord-4 italic">
                {pr.mergedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let prs = await getSearch();
  prs = prs.map((x) => x.node);
  prs.forEach((_, index) => {
    const date = new Date(prs[index].mergedAt).toLocaleString("en-gb", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    prs[index].mergedAt = date;
  });
  return {
    props: { prs },
    revalidate: 86400,
  };
}
