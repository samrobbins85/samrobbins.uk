import Link from "next/link";
import Image from "next/image";

const graphcmsLoader = ({ src, width }) => {
  let url = src.split("/");
  url.splice(3, 0, `resize=width:${width}`);
  url = url.join("/");
  return url;
};

interface Screenshot {
  width: string;
  height: string;
  url: string;
}

export default function GridItem({
  title,
  description,
  screenshot,
  slug,
  wide,
}: {
  title: string;
  description: string;
  screenshot: Screenshot;
  slug: string;
  wide?: Boolean;
}) {
  return (
    <div
      className={`bg-radix-slate3 p-2 grid ${
        wide ? "sm:grid-cols-2" : "w-[24rem]"
      } rounded `}
    >
      <div className="text-center">
        <p className="text-2xl font-semibold text-center pt-4">{title}</p>
        <p className={`py-4 text-center text-radix-slate11 ${!wide && "h-16"}`}>
          {description}
        </p>
        {wide && (
          <div className="flex justify-center">
            <Link href={`/portfolio/${slug}`}>
              <a className="hidden sm:block hover:underline text-radix-cyan11">
                Find out more
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className="p-4">
        <Image
          loader={graphcmsLoader}
          width={screenshot.width}
          height={screenshot.height}
          src={screenshot.url}
          sizes="(min-width: 768px) 42ch, 80vw"
          alt={title}
        />
      </div>
      <div className="flex justify-center">
        <Link href={`/portfolio/${slug}`}>
          <a
            className={`${
              wide && "sm:hidden"
            } hover:underline mb-2 text-center text-radix-cyan11`}
          >
            Find out more
          </a>
        </Link>
      </div>
    </div>
  );
}
