import { MarkGithubIcon, LinkIcon } from "@primer/octicons-react";
import Linkedin from "@/svg/linkedin";
import Npm from "@/svg/npm";
import Twitter from "@/svg/twitter";
import Unsplash from "@/svg/unsplash";

function SocialLink({ link, icon, className, name }) {
  return (
    <a href={link} className={`text-gray-600 ${className}`} aria-label={name}>
      {icon}
    </a>
  );
}

export default function SocialSwitch({ linkType, link }) {
  switch (linkType) {
    case "github":
      return (
        <SocialLink
          name="GitHub"
          link={link}
          icon={
            <MarkGithubIcon aria-hidden="true" size={16} className="h-6 w-6" />
          }
          className="hover:text-black focus:text-black"
        />
      );
    case "unsplash":
      return (
        <SocialLink
          name="Unsplash"
          link={link}
          icon={<Unsplash aria-hidden="true" className="h-6 w-6" />}
          className="hover:text-black focus:text-black"
        />
      );
    case "npm":
      return (
        <SocialLink
          name="npm"
          link={link}
          icon={<Npm aria-hidden="true" className="h-6" />}
          className="hover:text-npm focus:text-npm"
        />
      );
    case "linkedin":
      return (
        <SocialLink
          name="LinkedIn"
          link={link}
          icon={<Linkedin aria-hidden="true" className="h-6" />}
          className="hover:text-linkedin focus:text-linkedin"
        />
      );
    case "twitter":
      return (
        <SocialLink
          name="Twitter"
          link={link}
          icon={<Twitter aria-hidden="true" className="h-6" />}
          className="hover:text-twitter focus:text-twitter"
        />
      );
    default:
      return (
        <SocialLink
          name="Generic Link"
          link={link}
          icon={<LinkIcon aria-hidden="true" size={16} className="h-6 w-6 " />}
          className="hover:text-black focus:text-black"
        />
      );
  }
}
