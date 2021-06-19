import { GlobeAltIcon } from "@heroicons/react/outline";
import Npm from "@/svg/npm";
import { MarkGithubIcon } from "@primer/octicons-react";

function GenericButton({ url, label, icon }) {
  return (
    <a
      href={url}
      className="text-nord3 dark:text-nord4 hover:text-black dark:hover:text-white hover:bg-nord4 dark:hover:bg-nord0 p-2 rounded focus:outline-solid outline-nord8 outline-0.5"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export function WebsiteButton({ url }) {
  return (
    <GenericButton
      url={url}
      label="Website"
      icon={<GlobeAltIcon aria-hidden="true" className="h-6 w-6" />}
    />
  );
}

export function GitHubSingle({ url }) {
  return (
    <GenericButton
      url={url}
      label="GitHub"
      icon={<MarkGithubIcon aria-hidden="true" className="h-6 w-6" />}
    />
  );
}

export function NPMButton({ url }) {
  return (
    <GenericButton
      url={url}
      label="npm"
      icon={<Npm aria-hidden="true" className="h-6" />}
    />
  );
}
