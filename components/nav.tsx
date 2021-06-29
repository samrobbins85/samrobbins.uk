import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  UserIcon,
  CollectionIcon,
  HomeIcon,
  SunIcon,
  MoonIcon,
  ScissorsIcon,
} from "@heroicons/react/outline";
import { GitPullRequestIcon } from "@primer/octicons-react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ActiveLink from "@/components/ActiveLink";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import style from "./nav.module.css";
const items = [
  { name: "About", href: "/about", icon: UserIcon },
  {
    name: "Writing",
    items: [
      { name: "Blog", href: "/blog", icon: DocumentTextIcon },
      { name: "Essays", href: "/essays", icon: AcademicCapIcon },
    ],
  },
  {
    name: "Code",
    items: [
      { name: "Portfolio", href: "/portfolio", icon: CollectionIcon },
      { name: "Snippets", href: "/snippets", icon: ScissorsIcon },
      { name: "Pull Requests", href: "/prs", icon: GitPullRequestIcon },
    ],
  },
];

function DesktopDropdown({ data }) {
  const { asPath } = useRouter();
  const onPage = items
    .find((x) => x.name === data.name)
    .items.map((x) => x.href)
    .find((x) => asPath.startsWith(x));
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={
              open || onPage
                ? style.openDesktopButton
                : style.closedDesktopButton
            }
          >
            <span>{data.name}</span>
            <ChevronDownIcon
              className={
                open || onPage ? style.openChevron : style.closedChevron
              }
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            enter={style.enter}
            enterFrom={style.enterFrom}
            enterTo={style.enterTo}
            leave={style.leave}
            leaveFrom={style.leaveFrom}
            leaveTo={style.leaveTo}
          >
            <Popover.Panel className={style.desktopPopover}>
              <div className={style.popoverItem}>
                {data.items.map((item) => (
                  <ActiveLink
                    key={item.name}
                    href={item.href}
                    activeClassName={style.activeItemLink}
                  >
                    <a className={style.itemLink}>
                      <item.icon className={style.icon} aria-hidden="true" />
                      <p className={style.desktopDropdownText}>{item.name}</p>
                    </a>
                  </ActiveLink>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function DesktopSingle({ data }) {
  return (
    <ActiveLink
      href={data.href}
      activeClassName="!text-black dark:!text-white font-semibold"
    >
      <a className={style.desktopSingleLink}>{data.name}</a>
    </ActiveLink>
  );
}

function MobileItem({ data }) {
  return (
    <ActiveLink
      key={data.name}
      href={data.href}
      activeClassName={style.activeItemLink}
    >
      <a className={style.itemLink}>
        <data.icon className={style.icon} aria-hidden="true" />
        <span className={style.mobileItemText}>{data.name}</span>
      </a>
    </ActiveLink>
  );
}

function ThemeComponent({
  resolvedTheme,
  setTheme,
}: {
  resolvedTheme: string;
  setTheme: Function;
}) {
  function switchTheme() {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <button
      type="button"
      className={style.themeButton}
      onClick={() => switchTheme()}
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === "light" && <MoonIcon className={style.moonIcon} />}
      {resolvedTheme === "dark" && <SunIcon className={style.sunIcon} />}
    </button>
  );
}

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Popover className={style.popover}>
      <>
        <div className={style.wrapper}>
          <div className={style.innerWrapper}>
            <Link href="/">
              <a className={style.homeLink} aria-label="Home">
                <HomeIcon className={style.homeIcon} />
              </a>
            </Link>
            <div className={style.menuButtonWrapper}>
              <Popover.Button
                className={style.menuButton}
                aria-label="Open Menu"
              >
                <MenuIcon className={style.menuIcon} aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <DesktopSingle data={{ name: "Home", href: "/" }} />
              {items.map((x) => {
                if ("items" in x) {
                  return <DesktopDropdown key={x.name} data={x} />;
                }
                return <DesktopSingle key={x.name} data={x} />;
              })}
            </Popover.Group>
          </div>
          <div className="col-start-12 hidden md:grid justify-center content-center auto-rows-min ">
            <ThemeComponent resolvedTheme={resolvedTheme} setTheme={setTheme} />
          </div>
        </div>

        <Popover.Panel className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg bg-nord6 dark:bg-nord0 pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <ThemeComponent
                resolvedTheme={resolvedTheme}
                setTheme={setTheme}
              />
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center  hover:bg-nord4 dark:hover:bg-nord2 focus:outline-nord8 focus:outline-solid text-gray-400 hover:text-gray-500 dark:text-gray-300">
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6 " aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="grid gap-y-8 mt-4">
              {items.map((item) => {
                if ("items" in item) {
                  return item.items.map((x) => (
                    <MobileItem key={x.name} data={x} />
                  ));
                }
                return <MobileItem key={item.name} data={item} />;
              })}
            </nav>
          </div>
        </Popover.Panel>
      </>
    </Popover>
  );
}
