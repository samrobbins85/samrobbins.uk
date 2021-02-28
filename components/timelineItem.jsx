import Image from "next/image";

export default function TimeLineItem({
  end,
  image,
  title,
  icon,
  date,
  description,
}) {
  return (
    <li>
      <div className="relative pb-8">
        {!end && (
          <span
            className="absolute top-5 left-8 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start space-x-3">
          <div className="relative h-16 w-16 rounded-full bg-white flex items-center justify-center ring-2 ring-gray-400 object-contain p-2">
            <div className="relative h-full w-full">
              <Image
                src={image}
                layout="fill"
                objectFit="contain"
                alt={title}
                sizes="10vw"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-1 bg-white rounded-full px-0.5 py-px">
              <img aria-hidden="true" src={icon?.url} alt="" />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <h3 className="font-medium text-gray-900">{title}</h3>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                {new Date(date).toLocaleString("en-gb", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="mt-2 text-gray-700">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
