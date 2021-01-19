import Image from "next/image";
import Link from "next/link";
export default function PortfolioItem({ slug, image, title, description }) {
  return (
    <Link href={"/portfolio/" + slug}>
      <a className="border border-gray-300 rounded hover:shadow-lg sm:w-52 sm:block grid grid-cols-4 w-full py-2 items-center">
        <div className="h-16 sm:h-32 w-1/2 object-contain p-4 relative mx-auto">
          <Image src={image} layout="fill" objectFit="contain" alt={title} />
        </div>
        <hr className="my-4 hidden sm:block" />
        <div className="px-4 col-span-3">
          <h2 className="font-semibold sm:h-16 pb-2">{title}</h2>
          <p className="text-gray-600 pb-4">{description}</p>
        </div>
      </a>
    </Link>
  );
}
