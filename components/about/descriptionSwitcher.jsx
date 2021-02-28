import Event from "./descriptions/event";
import Hackathon from "./descriptions/hackathon";
import Education from "./descriptions/education";
import Award from "./descriptions/award";

export default function DescriptionSwitcher({ data }) {
  // Default case is disabled here because an error should be thrown if it isn't one of these 4
  // eslint-disable-next-line default-case
  switch (data.__typename) {
    case "Event":
      return <Event data={data} />;
    case "Education":
      return <Education data={data} />;
    case "Hackathon":
      return <Hackathon data={data} />;
    case "Award":
      return <Award data={data} />;
  }
}
