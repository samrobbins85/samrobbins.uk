import Location from "@/components/svg/location";

export default function Event({ data }) {
  return (
    <>
      <div>
        <h3 className="font-medium text-gray-600">
          Attended{" "}
          <span className="font-semibold text-black">{data.eventName}</span>
        </h3>
        <p className="mt-0.5 text-sm text-gray-500">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      {/* <div className="mt-4 border rounded -ml-4 z-10 bg-white w-1/2">
        <div className="grid sm:grid-cols-4">
          <div className="grid items-center justify-items-start py-2 px-4 gap-y-2 sm:col-span-3 auto-rows-min">
            <p className="text-center text-xl font-semibold">
              {data.eventName}
            </p>
            <p className="italic">
              <Location className="text-gray-600 h-4 w-4 inline-block mr-2" />
              {data.location}
            </p>
            <p>{data.description}</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
