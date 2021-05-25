import { GlobeAltIcon } from "@heroicons/react/outline";
import Npm from "@/svg/npm";
import { MarkGithubIcon } from "@primer/octicons-react";

export function WebsiteButton({ url }) {
  return (
    <a
      href={url}
      className="text-nord-3 dark:text-nord-4 hover:text-black dark:hover:text-white hover:bg-nord-4 dark:hover:bg-nord-0 p-2 rounded focus:ring focus:ring-nord-8 focus:outline-none"
      aria-label="Website"
    >
      <GlobeAltIcon aria-hidden="true" className="h-6 w-6" />
    </a>
  );
}

export function GitHubSingle({ url }) {
  return (
    <a
      href={url}
      className="text-nord-3 dark:text-nord-4 hover:text-black dark:hover:text-white hover:bg-nord-4 dark:hover:bg-nord-0 p-2 rounded focus:ring focus:ring-nord-8 focus:outline-none"
      aria-label="Website"
    >
      <MarkGithubIcon aria-hidden="true" className="h-6 w-6" />
    </a>
  );
}

export function NPMButton({ url }) {
  return (
    <a
      href={url}
      className="text-nord-3 dark:text-nord-4 hover:text-black dark:hover:text-white hover:bg-nord-4 dark:hover:bg-nord-0 p-2 rounded focus:ring focus:ring-nord-8 focus:outline-none"
      aria-label="Website"
    >
      <Npm aria-hidden="true" className="h-6" />
    </a>
  );
}
