import Education from "./education";
import Event from "./event";
import Code from "./code";
import Award from "./award";
import Podium from "./podium";

export default function TimelineIcon({ type }) {
  switch (type) {
    case "Event":
      return <Event />;
    case "Education":
      return <Education />;
    case "Hackathon":
      return <Code />;
    case "Award":
      return <Award />;
    case "Speaking":
      return <Podium />;
    default:
      return <Code />;
  }
}
