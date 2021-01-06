import Image from "next/image";
import Link from "next/link";
export default function PortfolioItem({ slug, image, title, description }) {
  return (
    <Link href={"/portfolio/" + slug}>
      <a className="border border-gray-300 rounded hover:shadow-lg w-52">
        <div className="h-32 w-full object-contain p-4 relative">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
        <hr className="my-4" />
        <div className="px-4">
          <h2 className="font-semibold h-16">{title}</h2>
          <p className="text-gray-600 pb-4">{description}</p>
        </div>
      </a>
    </Link>
  );
}
