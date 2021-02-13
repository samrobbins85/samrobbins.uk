import Code from "./code"
import Award from "./award"
import Education from "./education"
import Event from "./event"
export default function TimeLineItem(props) {
  return (
    <li>
      <div className="relative pb-8">
        {!props.end && (
          <span
            className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          ></span>
        )}
        <div className="relative flex items-start space-x-3">
            <Event />
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <h3 className="font-medium text-gray-900">{props.title}</h3>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                {new Date(props.date).toLocaleString("en-gb", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="mt-2 text-gray-700">
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
