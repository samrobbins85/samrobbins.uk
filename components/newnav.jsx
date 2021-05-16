import { Fragment } from "react";
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DesktopDropdown({ data }) {
  const { asPath } = useRouter();
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ||
                items
                  .find((x) => x.name === data.name)
                  .items.map((x) => x.href)
                  .find((x) => asPath.startsWith(x))
                ? "text-gray-900 font-semibold dark:text-white"
                : "text-nord-3 dark:text-gray-300",
              "group  dark:bg-nord-1 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-nord-8 ring-offset-nord-6 dark:ring-offset-nord-1"
            )}
          >
            <span>{data.name}</span>
            <ChevronDownIcon
              className={classNames(
                open ||
                  items
                    .find((x) => x.name === data.name)
                    .items.map((x) => x.href)
                    .find((x) => asPath.startsWith(x))
                  ? "text-gray-600 dark:text-white"
                  : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-white"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-50  mt-3 transform px-2 w-screen max-w-xs sm:px-0 ml-0 left-1/2 -translate-x-1/2"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-nord-4 dark:bg-nord-0 px-5 py-6 sm:gap-8 sm:p-8">
                  {data.items.map((item) => (
                    <ActiveLink
                      key={item.name}
                      href={item.href}
                      activeClassName="!text-black dark:!text-white font-semibold"
                    >
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-nord-5 text-gray-600 dark:hover:bg-nord-2 dark:text-gray-200">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-nord-10 dark:text-nord-8"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base">{item.name}</p>
                        </div>
                      </a>
                    </ActiveLink>
                  ))}
                </div>
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
      <a className="text-base font-medium text-nord-3 dark:text-gray-300 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-4 focus-visible:ring-cyan-500 focus:ring-transparent focus:ring-offset-transparent rounded-md">
        {data.name}
      </a>
    </ActiveLink>
  );
}

function MobileItem({ data }) {
  return (
    <ActiveLink
      key={data.name}
      href={data.href}
      activeClassName="!text-black dark:!text-white"
    >
      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-nord-4 text-gray-500 dark:text-gray-200 dark:hover:bg-nord-2">
        <data.icon
          className="flex-shrink-0 h-6 w-6 text-cyan-500"
          aria-hidden="true"
        />
        <span className="ml-3 text-base font-medium ">{data.name}</span>
      </a>
    </ActiveLink>
  );
}

function switchTheme(theme, setTheme) {
  if (theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function ThemeComponent({ theme, onClick }) {
  return (
    <button
      type="button"
      className="p-2 hover:bg-nord-4 dark:hover:bg-nord-2 rounded-lg focus:ring focus:ring-nord-8  focus:outline-none"
      onClick={onClick}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" && <MoonIcon className="h-6 w-6 text-nord-0" />}
      {theme === "dark" && <SunIcon className="h-6 w-6 text-nord-13" />}
    </button>
  );
}

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Popover className="relative bg-nord-6 dark:bg-nord-1 z-10">
      {({ open }) => (
        <>
          <div className="border-b-2 border-nord-5 dark:border-nord-0 h-18 md:grid md:grid-cols-12">
            <div className="flex justify-between items-center md:justify-center md:space-x-10  md:col-start-2 md:col-end-12 h-full">
              <div className="flex justify-start pl-4 md:hidden -my-2">
                <Link href="/">
                  <a>
                    <span className="sr-only">Home</span>
                    <HomeIcon className="h-8 w-8 text-gray-500 dark:text-gray-300" />
                  </a>
                </Link>
              </div>
              <div className="-my-2 md:hidden px-4">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center  hover:bg-nord-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nord-8 dark:hover:bg-nord-2">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon
                    className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:text-gray-300"
                    aria-hidden="true"
                  />
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
              <ThemeComponent
                theme={resolvedTheme}
                onClick={() => switchTheme(resolvedTheme, setTheme)}
              />
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-nord-5 divide-y-2 divide-gray-50 dark:bg-nord-0">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <ThemeComponent
                      theme={resolvedTheme}
                      onClick={() => switchTheme(resolvedTheme, setTheme)}
                    />
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center  hover:bg-nord-4 dark:hover:bg-nord-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nord-8">
                        <span className="sr-only">Close menu</span>
                        <XIcon
                          className="h-6 w-6 text-gray-400 hover:text-gray-500 dark:text-gray-300"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-4 flex-grow">
                    <nav className="grid gap-y-8">
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
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
