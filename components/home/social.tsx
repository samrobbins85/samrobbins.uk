import Npm from "@/svg/npm";
import { Linkedin, Twitter, Github } from "@icons-pack/react-simple-icons";
import Polywork from "@/svg/polywork";
export default function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/samrobbins85",
      className: "hover:text-radix-slate12 focus:text-radix-slate12",
      modifier: "w-6",
    },
    {
      name: "npm",
      icon: Npm,
      link: "https://www.npmjs.com/~samrobbins",
      className: "hover:text-npm focus:text-npm",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/samrobbins85",
      className: "hover:text-twitter focus:text-twitter",
    },
    {
      name: "Polywork",
      icon: Polywork,
      link: "https://www.polywork.com/samrobbins",
      className: "hover:text-polywork focus:text-polywork",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sam-robbins-gb/",
      className: "hover:text-linkedin focus:text-linkedin",
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
            size={24}
            className={`h-6${" " + link.modifier || ""}`}
          />
        </a>
      ))}
    </>
  );
}
