import ActiveLink from "@/components/ActiveLink";
import { Popover } from "@headlessui/react";
import Menu from "./menu";

function MyPopover() {
  return (
    <Popover className="relative">
      <Popover.Button>Solutions</Popover.Button>

      <Popover.Panel className="absolute z-100">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}
export default function NavBar({ text, title }) {
  return (
    <nav className="flex justify-center px-2 text-xl gap-x-4  text-gray-700 pt-4">
      <ActiveLink exact href="/" activeClassName="text-black font-semibold">
        <a>
          <span>{title}</span>
        </a>
      </ActiveLink>
      {text.map((item) => (
        <ActiveLink
          href={`/${item.path}`}
          activeClassName="font-semibold text-black"
          key={item.title}
        >
          <a>
            <span>{item.title}</span>
          </a>
        </ActiveLink>
      ))}
      <Menu />
    </nav>
  );
}
