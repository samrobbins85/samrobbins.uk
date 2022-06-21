import { GlobeAltIcon } from "@heroicons/react/outline";
import Npm from "@/components/svg/npm";
import { MarkGithubIcon } from "@primer/octicons-react";

function GenericButton({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon: JSX.Element;
}) {
  return (
    <a
      href={url}
      className="text-radix-slate11 hover:text-radix-slate12 hover:bg-radix-slate4 p-2 rounded focus:outline-solid outline-radix-sky8 outline-0.5"
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
      label="NPM"
      icon={<Npm aria-hidden="true" className="h-6" />}
    />
  );
}
