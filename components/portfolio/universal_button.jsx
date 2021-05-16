import { GlobeAltIcon } from "@heroicons/react/outline";
import NPM from "@/components/svg/npm_alt";
import { MarkGithubIcon } from "@primer/octicons-react";

function Skeleton({ url, children, bg, border, text, ring }) {
  return (
    <a
      className={`focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 rounded h-12 w-44 px-8 py-2 border text-lg tracking-wide hover:shadow flex items-center justify-center ${bg} ${border} ${text} ${ring}`}
      href={url}
    >
      {children}
    </a>
  );
}

export function NpmButton({ url }) {
  return (
    <Skeleton
      url={url}
      bg="bg-red-700"
      border="border-transparent"
      text="text-white"
      ring="focus:ring-red-700"
    >
      <NPM
        aria-hidden="true"
        className="text-white fill-current inline-block h-12"
      />
    </Skeleton>
  );
}

export function WebsiteButton({ url }) {
  return (
    <Skeleton
      url={url}
      bg="bg-white"
      border="border-gray-400"
      text="text-gray-700"
      ring="focus:ring-gray-600"
    >
      <GlobeAltIcon aria-hidden="true" className="h-8 w-8 text-black mr-2" />
      Website
    </Skeleton>
  );
}

export function GitHubSingle({ url }) {
  return (
    <Skeleton
      url={url}
      bg="bg-black"
      border="border-transparent"
      text="text-white"
      ring="focus:ring-black"
    >
      <MarkGithubIcon
        aria-hidden="true"
        className="text-white mr-3 inline-block h-6 w-6"
      />
      GitHub
    </Skeleton>
  );
}
