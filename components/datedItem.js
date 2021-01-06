import Image from "next/image";
export default function DatedItem({
  image,
  colour,
  achievement,
  description,
  date,
  formatdate,
}) {
  return (
    <div className="grid grid-cols-12 items-center">
      <div className="col-span-3">
        <div
          className="rounded-full border h-16 w-16 sm:h-24 sm:w-24 flex justify-center border-none items-center"
          style={{ backgroundColor: colour }}
        >
          <div className="relative h-10 w-10 sm:h-20 sm:w-20">
            <Image src={image.url} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="col-span-5 sm:col-span-6 flex items-center pr-2">
        <div>
          <div className="font-medium text-xl">{achievement}</div>
          <div className="text-gray-700 text-sm">{description}</div>
        </div>
      </div>
      <div className="col-span-4 sm:col-span-3 border-l border-gray-400 pl-4 flex items-center my-4">
        {formatdate
          ? new Date(date).toLocaleString("en-gb", {
              month: "short",
              year: "numeric",
            })
          : date}
      </div>
    </div>
  );
}
