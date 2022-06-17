import React from "react";
import { Icon } from "@icons-pack/react-simple-icons";

type Props = {
  links: {
    name: string;
    icon: Icon;
    link: string;
    className: string;
    modifier?: string;
  }[];
};

export default function SocialLinks({ links }: Props) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 py-2 justify-center ">
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
    </div>
  );
}
