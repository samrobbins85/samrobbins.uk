import Link from "next/link";
import Image from "next/image";

const graphcmsLoader = ({ src, width }) => {
  let url = src.split("/");
  url.splice(3, 0, `resize=width:${width}`);
  url = url.join("/");
  return url;
};

interface Screenshot {
  width?: number;
  height?: number;
  url: string;
}

interface Props {
  title: string;
  description: string;
  screenshot: Screenshot;
  slug: string;
  wide?: Boolean;
}

export default function GridItem({
  title,
  description,
  screenshot,
  slug,
  wide,
}: Props) {
  console.log(screenshot);
  return (
    <div
      className={`bg-radix-slate3 p-2 grid ${
        wide ? "sm:grid-cols-2" : "w-[24rem]"
      } rounded `}
    >
      <div className="text-center">
        <Link href={`/portfolio/${slug}`}>
          <a>
            <h3 className="text-2xl font-semibold text-center pt-4 hover:underline mb-2 text-radix-cyan11">
              {title}
            </h3>
          </a>
        </Link>

        <p className={`py-4 text-center text-radix-slate11 ${!wide && "h-16"}`}>
          {description}
        </p>
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
    </div>
  );
}
