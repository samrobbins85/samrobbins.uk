import Image from "next/image";
import Link from "next/link";
export default function PortfolioItem({ slug, image, title, description }) {
  return (
    <Link href={"/portfolio/" + slug}>
      <a class="border border-gray-300 rounded hover:shadow-lg w-52">
        <div class="h-32 w-full object-contain p-4 relative">
          <Image src={image} layout="fill" objectFit="contain" />
        </div>
        <hr class="my-4" />
        <div class="px-4">
          <h2 class="font-semibold h-16">{title}</h2>
          <p class="text-gray-600 pb-4">{description}</p>
        </div>
      </a>
    </Link>
  );
}
