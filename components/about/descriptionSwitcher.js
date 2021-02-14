import Event from "./descriptions/event";
import Hackathon from "./descriptions/hackathon";
import Education from "./descriptions/education";

export default function DescriptionSwitcher({ data }) {
  switch (data.__typename) {
    case "Event":
      return <Event data={data} />;
    case "Education":
      return <Education data={data} />;
    case "Hackathon":
      return <Hackathon data={data} />;
  }
}
