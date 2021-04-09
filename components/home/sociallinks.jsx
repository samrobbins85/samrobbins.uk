import { MarkGithubIcon } from "@primer/octicons-react";
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

export default function SocialLinks({
  github,
  unsplash,
  npm,
  linkedin,
  twitter,
}) {
  return (
    <>
      {github && (
        <SocialLink
          name="GitHub"
          link={github}
          icon={
            <MarkGithubIcon aria-hidden="true" size={16} className="h-6 w-6" />
          }
          className="hover:text-black focus:text-black"
        />
      )}

      {npm && (
        <SocialLink
          name="npm"
          link={npm}
          icon={<Npm aria-hidden="true" className="h-6" />}
          className="hover:text-npm focus:text-npm"
        />
      )}
      {linkedin && (
        <SocialLink
          name="LinkedIn"
          link={linkedin}
          icon={<Linkedin aria-hidden="true" className="h-6" />}
          className="hover:text-linkedin focus:text-linkedin"
        />
      )}
      {twitter && (
        <SocialLink
          name="Twitter"
          link={twitter}
          icon={<Twitter aria-hidden="true" className="h-6" />}
          className="hover:text-twitter focus:text-twitter"
        />
      )}
      {unsplash && (
        <SocialLink
          name="Unsplash"
          link={unsplash}
          icon={<Unsplash aria-hidden="true" className="h-6 w-6" />}
          className="hover:text-black focus:text-black"
        />
      )}
    </>
  );
}
