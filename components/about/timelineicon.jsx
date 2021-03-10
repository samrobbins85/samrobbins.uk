import Education from "./education";
import Event from "./event";
import Code from "./code";
import Award from "./award";

export default function TimelineIcon({ type }) {
  console.log(type);
  switch (type) {
    case "Event":
      return <Event />;
    case "Education":
      return <Education />;
    case "Hackathon":
      return <Code />;
    case "Award":
      return <Award />;
    default:
      return <Code />;
  }
}
