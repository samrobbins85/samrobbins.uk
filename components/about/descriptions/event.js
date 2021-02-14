export default function Event({ data }) {
  return (
    <>
      <div>
        <div className="text-sm">
          <h3 className="font-medium text-gray-900">{data.eventName}</h3>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          {new Date(data.date).toLocaleString("en-gb", {
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="mt-2 text-gray-700">
        <p>{data.location}</p>
      </div>
    </>
  );
}
