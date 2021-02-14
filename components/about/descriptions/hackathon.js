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
      <div className="mt-2 text-gray-700">
        <p>{data.project}</p>
      </div>
    </>
  );
}
