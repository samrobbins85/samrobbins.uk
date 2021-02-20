import { MarkGithubIcon } from "@primer/octicons-react";

export default function GitHubSingle({ repo }) {
  return (
    <a
      className="focus:ring-black focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 rounded"
      href={repo}
    >
      <div className="h-12 w-44 px-8 py-2 rounded bg-black text-white text-lg tracking-wide flex items-center">
        <MarkGithubIcon className="text-white mr-3 inline-block h-6 w-6" />

        <span className="font-semibold">GitHub</span>
      </div>
    </a>
  );
}
