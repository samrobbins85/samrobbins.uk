export default function DescriptionSwitcher({ title, date, description }) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h3
            className="font-medium "
            dangerouslySetInnerHTML={{ __html: title.html }}
          />
          <p className="pl-4 text-sm tracking-wide text-gray-500 text-right">
            {new Date(date).toLocaleString("en-gb", {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="text-gray-700">{description}</div>
    </>
  );
}
