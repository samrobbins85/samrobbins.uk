import Education from "./education";
import Event from "./event";
import Code from "./code";
export default function TimelineIcon({ type }) {
  switch (type) {
    case "Event":
      return <Event />;
    case "Education":
      return <Education />;
    case "Hackathon":
      return <Code />;
  }
}
