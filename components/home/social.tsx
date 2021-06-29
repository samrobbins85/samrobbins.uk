import { MarkGithubIcon } from "@primer/octicons-react";
import Linkedin from "@/svg/linkedin";
import Npm from "@/svg/npm";
import Twitter from "@/svg/twitter";
import Unsplash from "@/svg/unsplash";
import style from "./social.module.css";

export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      icon: MarkGithubIcon,
      link: "https://github.com/samrobbins85",
      className: style.github,
      modifier: "w-6",
    },
    {
      name: "npm",
      icon: Npm,
      link: "https://www.npmjs.com/~samrobbins",
      className: style.npm,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sam-robbins-gb/",
      className: style.linkedin,
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/samrobbins85",
      className: style.twitter,
    },
    {
      name: "Unsplash",
      icon: Unsplash,
      link: "https://unsplash.com/@samrobbins",
      className: style.unsplash,
    },
  ];
  return (
    <>
      {links.map((link) => (
        <a
          href={link.link}
          className={link.className}
          aria-label={link.name}
          key={link.name}
        >
          <link.icon aria-hidden="true" size={16} />
        </a>
      ))}
    </>
  );
}
