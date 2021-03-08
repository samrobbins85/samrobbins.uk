import Trophy from "@/components/svg/trophy";

export default function Hackathon({ data }) {
  return (
    <>
      <div className="text-gray-600">
        <div>
          Prize winner at{" "}
          <span className="font-semibold text-black">{data.name}</span>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      {/* <div className="mt-4 border rounded -ml-4 bg-white w-1/2">
        <div className="grid sm:grid-cols-4">
          <div className="grid items-center justify-items-start py-2 px-4 gap-y-2 sm:col-span-3 auto-rows-min">
            <p className="text-center text-xl font-semibold">{data.project}</p>
            <p>{data.projectDescription}</p>
            <p className="italic">
              <Trophy className="text-yellow-600 h-4 w-4 inline-block mr-2" />
              {data.achievement}
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
