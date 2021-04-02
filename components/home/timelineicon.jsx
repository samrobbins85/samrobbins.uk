import Trophy from "@/svg/trophy";
import { MortarBoardIcon } from "@primer/octicons-react";
import Pass from "@/svg/pass";
import Podium from "@/svg/podium";
import { CodeIcon } from "@heroicons/react/solid";

export default function TimelineIcon({ type }) {
  switch (type) {
    case "Event":
      return <Pass aria-hidden="true" className="text-gray-700 h-6 w-6" />;
    case "Education":
      return (
        <MortarBoardIcon
          aria-hidden="true"
          size={16}
          className="text-purple-700 h-6 w-6"
        />
      );
    case "Hackathon":
      return <CodeIcon aria-hidden="true" className="text-blue-700 h-6 w-6" />;
    case "Award":
      return <Trophy aria-hidden="true" className="text-yellow-600 h-6 w-6" />;
    case "Speaking":
      return <Podium aria-hidden="true" className="text-red-500 h-6 w-6" />;
    default:
      return <CodeIcon aria-hidden="true" className="text-blue-700 h-6 w-6" />;
  }
}
