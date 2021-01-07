import Image from "next/image";
export default function Coder({ coder, name }) {
  return (
    <div className="flex items-center gap-x-2" key={coder}>
      <div className="inline-block h-10 w-10 relative">
        <Image
          className="rounded-full"
          src={"https://github.com/" + coder + ".png"}
          alt={coder}
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        <a
          className="text-blue-700 hover:underline"
          href={`https://github.com/${coder}`}
        >
          <p>{coder}</p>
        </a>
      </div>
    </div>
  );
}
