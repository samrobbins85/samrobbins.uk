import Trophy from "@/svg/trophy";
import { MortarBoardIcon } from "@primer/octicons-react";
import Pass from "@/svg/pass";
import Podium from "@/svg/podium";
import { CodeIcon } from "@heroicons/react/solid";

export default function TimelineIcon({ type }) {
  switch (type) {
    case "Event":
      return (
        <Pass
          aria-hidden="true"
          className="text-nord-2 dark:text-nord-4 h-6 w-6"
        />
      );
    case "Education":
      return (
        <MortarBoardIcon
          aria-hidden="true"
          size={16}
          className="text-nord-15 h-6 w-6"
        />
      );
    case "Hackathon":
      return <CodeIcon aria-hidden="true" className="text-nord-10 h-6 w-6" />;
    case "Award":
      return <Trophy aria-hidden="true" className="text-nord-13 h-6 w-6" />;
    case "Speaking":
      return <Podium aria-hidden="true" className="text-nord-11 h-6 w-6" />;
    default:
      return (
        <CodeIcon
          aria-hidden="true"
          className="text-blue-700 dark:text-blue-200 h-6 w-6"
        />
      );
  }
}
