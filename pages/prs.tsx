import Layout from "@/components/layout";
import Image, { ImageProps } from "next/image";
import { InferGetStaticPropsType } from "next";
import { getPRs } from "@/lib/github";
const githubLoader = ({ src, width }) => `${src}&s=${width}`;

function GitHubImage(props: ImageProps) {
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
    <div className="flex gap-4 border slate-bg slate-border p-4">
      <div className="h-12 w-12 flex-shrink-0 relative">
        <GitHubImage
          src={image}
          alt={owner_name}
          fill
          className="h-12 w-12"
          sizes="10vw"
        />
      </div>
      <div className="grid sm:flex justify-between flex-grow flex-wrap gap-x-2">
        <div>
          <a href={link} className="hover:text-radix-blue11">
            <h2 className="font-semibold break-words">{title}</h2>
          </a>
          <a
            className="text-radix-slate11 hover:text-radix-blue11 break-all"
            href={repo_url}
          >
            {owner_login}/{repo_name}
          </a>
        </div>
        <p className="text-radix-slate11 italic">{date}</p>
      </div>
    </div>
  );
}

export default function Home({
  prs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title="Pull Requests"
      description="Contributions made to open source projects on GitHub"
    >
      <h1 className="text-5xl font-semibold pb-6 text-center text-radix-slate12">
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
            date={pr.createdAt}
          />
        ))}
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  let data = await getPRs();
  let prs = data as Extract<typeof data[number], { title: string }>[];
  prs.forEach((_, index) => {
    const date = new Date(prs[index].createdAt).toLocaleString("en-gb", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    prs[index].createdAt = date;
  });
  return {
    props: { prs },
    revalidate: 86400,
  };
};
