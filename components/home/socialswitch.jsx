import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import Gmail from "./SocialIcons/gmail";
import Linkedin from "./SocialIcons/linkedin";
import Npm from "./SocialIcons/npm";
import Twitter from "./SocialIcons/twitter";

export default function SocialSwitch({ linkType, link }) {
  switch (linkType) {
    case "github":
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-black focus:text-black"
        >
          <MarkGithubIcon size={16} className="h-6 w-6 " />
        </a>
      );
    case "npm":
      return (
        <a href={link} className="text-gray-600 hover:text-npm focus:text-npm">
          <Npm className="h-6" />
        </a>
      );
    case "email":
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-gmail focus:text-gmail"
        >
          <Gmail className="h-6" />
        </a>
      );
    case "linkedin":
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-linkedin focus:text-linkedin"
        >
          <Linkedin className="h-6 " />
        </a>
      );
    case "twitter":
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-twitter focus:text-twitter"
        >
          <Twitter className="h-6" />
        </a>
      );
    default:
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-black focus:text-black"
        >
          <LinkIcon size={16} className="h-6 w-6 " />
        </a>
      );
  }
}
