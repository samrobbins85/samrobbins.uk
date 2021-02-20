export default function Hackathon({ data }) {
  return (
    <>
      <div>
        <div className="text-sm">
          <h3 className="font-medium text-gray-900">{data.institution}</h3>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="mt-4 border rounded -ml-16 sm:ml-auto z-10 bg-white">
        <div className="grid sm:grid-cols-4">
          <div className="px-4 py-2 hidden sm:block col-span-1">
            <img
              className="w-32 object-contain"
              src={data.image.url}
              alt={data.name}
            />
          </div>
          <div className="grid items-center justify-items-start py-2 px-4 gap-y-2 sm:col-span-3 auto-rows-min">
            <p className="text-center text-xl font-semibold">
              {data.qualification}
            </p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
