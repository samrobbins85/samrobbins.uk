import { GlobeAltIcon } from "@heroicons/react/outline";

export default function WebsiteButton({ url }) {
  return (
    <a
      className="focus:ring-gray-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 rounded h-12 w-44 px-8 py-2 text-gray-700 border border-gray-400 text-lg tracking-wide hover:shadow flex items-center justify-center"
      href={url}
    >
      <GlobeAltIcon aria-hidden="true" className="h-8 w-8 text-black mr-2" />
      Website
    </a>
  );
}
