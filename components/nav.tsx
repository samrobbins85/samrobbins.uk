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
  const onPage = items
    .find((x) => x.name === data.name)
    .items.map((x) => x.href)
    .find((x) => asPath.startsWith(x));
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open || onPage
                ? "text-gray-900 font-semibold dark:text-white"
                : "text-nord3 dark:text-gray-300",
              "group inline-flex items-center text-base font-medium !outline-nord8 focus:outline-solid !outline-0.5 outline-offset-1 rounded-md"
            )}
          >
            <span>{data.name}</span>
            <ChevronDownIcon
              className={classNames(
                open || onPage
                  ? "text-gray-600 dark:text-white"
                  : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-white"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-50  mt-3 transform px-2 w-screen max-w-xs sm:px-0 ml-0 left-1/2 -translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden relative grid gap-6 bg-nord6 dark:bg-nord0 px-5 py-6 sm:gap-8 sm:p-8">
                {data.items.map((item) => (
                  <ActiveLink
                    key={item.name}
                    href={item.href}
                    activeClassName="!text-black dark:!text-white font-semibold"
                  >
                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-nord5 text-gray-600 dark:hover:bg-nord2 dark:text-gray-200 focus:outline-none focus:bg-nord5 dark:focus:bg-nord2">
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-nord10 dark:text-nord8"
                        aria-hidden="true"
                      />
                      <p className="ml-4 text-base">{item.name}</p>
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
      <a className="text-base font-medium text-nord3 dark:text-gray-300 hover:text-gray-900 outline-nord8 focus-visible:outline-solid outline-0.5 outline-offset-1 rounded-md">
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
      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-nord4 text-gray-500 dark:text-gray-200 dark:hover:bg-nord2 focus:bg-nord4 dark:focus:bg-nord2 focus:outline-none">
        <data.icon
          className="flex-shrink-0 h-6 w-6 text-nord10 dark:text-nord8"
          aria-hidden="true"
        />
        <span className="ml-3 text-base font-medium ">{data.name}</span>
      </a>
    </ActiveLink>
  );
}

function switchTheme(theme: string, setTheme: Function) {
  if (theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();

  function ThemeComponent() {
    return (
      <button
        type="button"
        className="p-2 hover:bg-nord4 dark:hover:bg-nord2 rounded-lg focus:outline-solid focus:outline-nord8 focus:outline-0.5"
        onClick={() => switchTheme(resolvedTheme, setTheme)}
        aria-label="Toggle Dark Mode"
      >
        {resolvedTheme === "light" && (
          <MoonIcon className="h-6 w-6 text-nord0" />
        )}
        {resolvedTheme === "dark" && (
          <SunIcon className="h-6 w-6 text-nord13" />
        )}
      </button>
    );
  }
  return (
    <Popover className="relative bg-nord6.1 dark:bg-nord1 z-10">
      <>
        <div className="border-b-2 border-nord6 dark:border-nord0 h-18 md:grid md:grid-cols-12">
          <div className="flex justify-between items-center md:justify-center md:space-x-10 md:col-start-2 md:col-end-12 h-full">
            <Link href="/">
              <a className="ml-4 md:hidden -my-2 focus-visible:outline-solid outline-nord8 outline-0.5 rounded-md p-2">
                <span className="sr-only">Home</span>
                <HomeIcon className="h-8 w-8 text-gray-500 dark:text-gray-300" />
              </a>
            </Link>
            <div className="-my-2 md:hidden px-4">
              <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center hover:bg-nord4 dark:hover:bg-nord2 focus:outline-solid focus:outline-nord8 focus:outline-0.5">
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
            <ThemeComponent />
          </div>
        </div>

        <Popover.Panel className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg bg-nord6 dark:bg-nord0 pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <ThemeComponent />
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
