import Image from "next/image";
import GraphImg from "graphcms-image";
export default function DatedItem({
  image,
  colour,
  achievement,
  description,
  date,
}) {
  return (
    <div class="grid grid-cols-12">
      <div class="col-span-3">
        <div
          class="rounded-full border h-16 w-16 sm:h-24 sm:w-24 flex justify-center border-none "
          style={{ backgroundColor: colour }}
        >
          {image.width !== 0 && image.height !== 0 ? (
            <div className="h-20 w-20 self-end">
              <GraphImg image={image} maxWidth={800} />
            </div>
          ) : (
            <div className="relative p-5 sm:p-8">
              <Image className="object-contain" src={image.url} layout="fill" />
            </div>
          )}
        </div>
      </div>
      <div class="col-span-5 sm:col-span-6 flex items-center pr-2">
        <div>
          <div class="font-medium text-xl">{achievement}</div>
          <div class="text-gray-700 text-sm">{description}</div>
        </div>
      </div>
      <div class="col-span-4 sm:col-span-3 border-l border-gray-400 pl-4 flex items-center my-4">
        {new Date(date).toLocaleString("en-gb", {
          month: "short",
          year: "numeric",
        })}
      </div>
    </div>
  );
}
