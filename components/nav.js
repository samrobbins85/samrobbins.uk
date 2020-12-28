import Link from "next/link";
import ActiveLink from "@/components/ActiveLink";
export default function NavBar({ text, title }) {
  return (
    <div className=" border-b-2 border-gray-300 h-14 flex items-center px-2 text-lg gap-x-4">
      <ActiveLink exact={true} href="/" activeClassName="font-semibold">
        <a>
          <span>{title}</span>
        </a>
      </ActiveLink>
      {text.map((item) => (
        <ActiveLink href={"/" + item.path} activeClassName="font-semibold">
          <a>
            <span>{item.title}</span>
          </a>
        </ActiveLink>
      ))}
    </div>
  );
}
