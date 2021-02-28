import TimelineIcon from "./timelineicon";
import DescriptionSwitcher from "./descriptionSwitcher";

export default function TimeLineItem({ end, data }) {
  return (
    <li>
      <div className="relative pb-8">
        {!end && (
          <span
            className="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start space-x-3">
          <TimelineIcon type={data.__typename} />
          <div className="min-w-0 flex-1 z-10">
            <DescriptionSwitcher data={data} />
          </div>
        </div>
      </div>
    </li>
  );
}
