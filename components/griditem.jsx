import Link from "next/link";
import Image from "next/image";

const graphcmsLoader = ({ src, width }) => {
  let url = src.split("/");
  url.splice(3, 0, `resize=width:${width}`);
  url = url.join("/");
  return url;
};

export default function GridItem({
  title,
  description,
  screenshot,
  slug,
  wide,
}) {
  return (
    <div
      className={`bg-nord6 dark:bg-nord0 p-2 grid ${
        wide ? "sm:grid-cols-2" : "max-w-sm"
      } rounded `}
      key={title}
    >
      <div className="text-center">
        <p className="text-2xl font-semibold text-center pt-4 text-nord2 dark:text-nord6">
          {title}
        </p>
        <p className="py-4 text-center dark:text-nord5 h-16">{description}</p>
        {wide && (
          <Link href={`/portfolio/${slug}`}>
            <a className="hidden sm:block hover:underline text-cyan-700 dark:text-cyan-300">
              Find out more
            </a>
          </Link>
        )}
      </div>
      <div className="p-4">
        <Image
          loader={graphcmsLoader}
          width={screenshot.width}
          height={screenshot.height}
          src={screenshot.url}
          // sizes="(min-width: 768px) 42ch, 80vw"
          alt={title}
        />
      </div>
      <Link href={`/portfolio/${slug}`}>
        <a
          className={`${
            wide && "sm:hidden"
          } hover:underline pb-2 text-center text-cyan-700 dark:text-cyan-300`}
        >
          Find out more
        </a>
      </Link>
    </div>
  );
}
