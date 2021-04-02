import { MarkGithubIcon } from "@primer/octicons-react";

export default function GitHubSingle({ repo }) {
  return (
    <a
      className="focus:ring-black focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 rounded h-12 w-44 px-8 py-2  bg-black text-white text-lg tracking-wide flex items-center font-semibold"
      href={repo}
    >
      <MarkGithubIcon
        aria-hidden="true"
        className="text-white mr-3 inline-block h-6 w-6"
      />
      GitHub
    </a>
  );
}
