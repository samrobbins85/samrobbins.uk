import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import Linkedin from "@/svg/linkedin";
import Npm from "@/svg/npm";
import Twitter from "@/svg/twitter";
import Unsplash from "@/svg/unsplash";

export default function SocialSwitch({ linkType, link }) {
  switch (linkType) {
    case "github":
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-black focus:text-black"
        >
          <MarkGithubIcon size={16} className="h-6 w-6" />
        </a>
      );
    case "unsplash":
      return (
        <a
          href={link}
          className="text-gray-600 hover:text-black focus:text-black"
        >
          <Unsplash className="h-6 w-6" />
        </a>
      );
    case "npm":
      return (
        <a href={link} className="text-gray-600 hover:text-npm focus:text-npm">
          <Npm className="h-6" />
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
