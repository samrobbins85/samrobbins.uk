import getSearch from "@/lib/githubapi";
import Layout from "@/components/layout";
import Image from "next/image";
import { GetStaticProps } from "next";
const githubLoader = ({ src, width }) => `${src}&s=${width}`;

function GitHubImage(props) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} loader={githubLoader} />;
}

function PullRequest({
  title,
  image,
  link,
  repo_url,
  owner_login,
  owner_name,
  repo_name,
  date,
}) {
  return (
    <div className="flex gap-4 bg-nord5 border border-nord4 dark:bg-nord0 dark:border-nord2 p-4">
      <div className="h-12 w-12 flex-shrink-0 relative">
        <GitHubImage
          src={image}
          alt={owner_name}
          layout="fill"
          className="h-12 w-12"
          sizes="10vw"
        />
      </div>
      <div className="grid sm:flex justify-between flex-grow flex-wrap gap-x-2">
        <div>
          <a
            href={link}
            className="text-black hover:text-blue-600 dark:text-nord6 dark:hover:text-blue-400"
          >
            <h2 className="font-semibold break-words">{title}</h2>
          </a>
          <a
            className="text-nord3 hover:text-blue-600 dark:text-nord4 dark:hover:text-blue-400 break-all"
            href={repo_url}
          >
            {owner_login}/{repo_name}
          </a>
        </div>
        <p className="text-nord3 dark:text-nord4 italic">{date}</p>
      </div>
    </div>
  );
}

export default function Home({ prs }) {
  return (
    <Layout
      title="Pull Requests"
      description="Pull requests I've made on GitHub"
    >
      <h1 className="text-5xl font-semibold pb-6 text-center text-nord10 dark:text-nord8">
        Pull Requests
      </h1>
      <div className="grid gap-y-4">
        {prs.map((pr) => (
          <PullRequest
            key={pr.title}
            title={pr.title}
            image={pr.repository.owner.avatarUrl}
            link={pr.permalink}
            repo_url={pr.repository.url}
            owner_login={pr.repository.owner.login}
            owner_name={pr.repository.owner.name}
            repo_name={pr.repository.name}
            date={pr.mergedAt}
          />
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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
};
