import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import Linkedin from "@/svg/linkedin";
import Npm from "@/svg/npm";
import Twitter from "@/svg/twitter";
import Unsplash from "@/svg/unsplash";

function SocialLink({ link, icon, className }) {
  return (
    <a href={link} className={`text-gray-600 ${className}`}>
      {icon}
    </a>
  );
}

export default function SocialSwitch({ linkType, link }) {
  switch (linkType) {
    case "github":
      return (
        <SocialLink
          link={link}
          icon={<MarkGithubIcon size={16} className="h-6 w-6" />}
          className="hover:text-black focus:text-black"
        />
      );
    case "unsplash":
      return (
        <SocialLink
          link={link}
          icon={<Unsplash className="h-6 w-6" />}
          className="hover:text-black focus:text-black"
        />
      );
    case "npm":
      return (
        <SocialLink
          link={link}
          icon={<Npm className="h-6" />}
          className="hover:text-npm focus:text-npm"
        />
      );
    case "linkedin":
      return (
        <SocialLink
          link={link}
          icon={<Linkedin className="h-6 " />}
          className="hover:text-linkedin focus:text-linkedin"
        />
      );
    case "twitter":
      return (
        <SocialLink
          link={link}
          icon={<Twitter className="h-6" />}
          className="hover:text-twitter focus:text-twitter"
        />
      );
    default:
      return (
        <SocialLink
          link={link}
          icon={<LinkIcon size={16} className="h-6 w-6 " />}
          className="hover:text-black focus:text-black"
        />
      );
  }
}
