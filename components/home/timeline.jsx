import TimelineIcon from "./timelineicon";
import Description from "./description";

export default function TimeLineItem({ data }) {
  return (
    <li>
      <div className="relative pb-8">
        <div className="relative flex items-start space-x-3">
          <TimelineIcon type={data.category} />
          <div className="min-w-0 flex-1 z-10 w-64">
            <Description
              title={data.title}
              date={data.date}
              description={data.description}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
