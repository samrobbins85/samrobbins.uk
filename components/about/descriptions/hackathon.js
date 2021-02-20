import Trophy from "@/components/svg/trophy";

export default function Hackathon({ data }) {
  return (
    <>
      <div>
        <div className="text-sm">
          <h3 className="font-medium text-gray-900">{data.name}</h3>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="mt-4 border rounded -ml-16 sm:ml-auto z-10 bg-white">
        <div className="grid grid-cols-4">
          <div className="px-4 py-2 hidden sm:block">
            <img
              className="w-32 h-32 object-contain"
              src={data.image.url}
              alt={data.name}
            />
          </div>
          <div className="grid items-center justify-items-start py-2 px-4 gap-y-2 col-span-3 auto-rows-min">
            <p className="text-center text-xl font-semibold">{data.project}</p>
            <p>{data.projectDescription}</p>
            <p className="italic">
              <Trophy className="text-yellow-600 h-4 w-4 inline-block mr-2" />
              {data.achievement}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
