import Link from "next/link";
import Image from "next/image";
import style from "./griditem.module.css";
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
    <div className={wide ? style.wideWrapper : style.narrowWrapper}>
      <div className={style.titleWrapper}>
        <p className={style.title}>{title}</p>
        <p className={style.description}>{description}</p>
        {wide && (
          <Link href={`/portfolio/${slug}`}>
            <a className={style.link}>Find out more</a>
          </Link>
        )}
      </div>
      <div className={style.imageWrapper}>
        <Image
          loader={graphcmsLoader}
          width={screenshot.width}
          height={screenshot.height}
          src={screenshot.url}
          sizes="(min-width: 768px) 42ch, 80vw"
          alt={title}
        />
      </div>
      <Link href={`/portfolio/${slug}`}>
        <a className={wide ? style.wideBottomLink : style.bottomLink}>
          Find out more
        </a>
      </Link>
    </div>
  );
}
