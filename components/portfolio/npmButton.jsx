import NPM from "@/components/svg/npm_alt";

export default function NpmButton({ url }) {
  return (
    <a
      className="focus:ring-red-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-offset-1 rounded"
      href={url}
    >
      <div className="h-12 w-44 px-8 py-2 rounded bg-red-700 text-white text-lg  hover:shadow flex items-center justify-center">
        <NPM className="text-white fill-current inline-block h-12" />
      </div>
    </a>
  );
}
