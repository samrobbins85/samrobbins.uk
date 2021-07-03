import { MarkGithubIcon } from "@primer/octicons-react";
import Linkedin from "@/svg/linkedin";
import Npm from "@/svg/npm";
import Twitter from "@/svg/twitter";
import Unsplash from "@/svg/unsplash";

export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      icon: MarkGithubIcon,
      link: "https://github.com/samrobbins85",
      className: "hover:text-radix-slate12 focus:text-radix-slate12",
      modifier: "w-6",
    },
    {
      name: "npm",
      icon: Npm,
      link: "https://www.npmjs.com/~samrobbins",
      className: "hover:!text-npm focus:!text-npm",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sam-robbins-gb/",
      className: "hover:!text-linkedin focus:!text-linkedin",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/samrobbins85",
      className: "hover:!text-twitter focus:!text-twitter",
    },
    {
      name: "Unsplash",
      icon: Unsplash,
      link: "https://unsplash.com/@samrobbins",
      className: "hover:text-radix-slate12 focus:text-radix-slate12",
    },
  ];
  return (
    <>
      {links.map((link) => (
        <a
          href={link.link}
          className={`text-radix-slate11 ${link.className}`}
          aria-label={link.name}
          key={link.name}
        >
          <link.icon
            aria-hidden="true"
            size={16}
            className={`h-6 ${link.modifier}`}
          />
        </a>
      ))}
    </>
  );
}
