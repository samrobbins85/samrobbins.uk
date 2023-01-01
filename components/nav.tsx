import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  RectangleStackIcon,
  HomeIcon,
  SunIcon,
  MoonIcon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";
import { GitPullRequestIcon } from "@primer/octicons-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import ActiveLink from "@/components/ActiveLink";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type page = { name: string; href: string; icon: any };

type Items = (page | { name: string; items: page[] })[];

const items: Items = [
  { name: "Projects", href: "/projects", icon: RectangleStackIcon },
  { name: "Blog", href: "/blog", icon: DocumentTextIcon },
  { name: "Essays", href: "/essays", icon: AcademicCapIcon },
  { name: "Snippets", href: "/snippets", icon: ScissorsIcon },
  { name: "Pull Requests", href: "/prs", icon: GitPullRequestIcon },
];

// If I ever want to bring it back, dropdowns look like this
// {
//   name: "Code",
//   items: [
//     { name: "Projects", href: "/projects", icon: CollectionIcon },
//     { name: "Snippets", href: "/snippets", icon: ScissorsIcon },
//     { name: "Pull Requests", href: "/prs", icon: GitPullRequestIcon },
//   ],
// },

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DesktopDropdown({ data }) {
  const { asPath } = useRouter();
  const onPage = data.items
    .map((x) => x.href)
    .find((x) => asPath.startsWith(x));
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open || onPage
                ? "text-radix-slate12 font-semibold "
                : "text-radix-slate11",
              "group inline-flex items-center text-base font-medium !outline-radix-sky8 focus:outline-solid !outline-0.5 outline-offset-1 rounded-md"
            )}
          >
            <span>{data.name}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-radix-slate10" : "text-radix-slate8",
                "ml-2 h-5 w-5 group-hover:text-radix-slate10"
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
              <div className="rounded-lg shadow-lg overflow-hidden relative grid gap-6 bg-radix-slate3 px-5 py-6 sm:gap-8 sm:p-8">
                {data.items.map((item) => (
                  <ActiveLink
                    key={item.name}
                    href={item.href}
                    activeClassName="!text-radix-slate12 font-semibold"
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-radix-slate5 focus:outline-none focus:bg-radix-slate5 text-radix-slate11"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-radix-sky11"
                      aria-hidden="true"
                    />
                    <p className="ml-4 text-base">{item.name}</p>
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
      activeClassName="!text-radix-slate12 font-semibold"
      className="text-base font-medium text-radix-slate11 hover:text-radix-slate12 outline-radix-sky8 focus-visible:outline-solid outline-0.5 outline-offset-1 rounded-md"
    >
      {data.name}
    </ActiveLink>
  );
}

function MobileItem({ data }) {
  return (
    <ActiveLink
      key={data.name}
      href={data.href}
      activeClassName="!text-radix-slate12"
      className="-m-3 p-3 flex items-center rounded-md hover:bg-radix-slate5 text-radix-slate11 focus:bg-radix-slate5 focus:outline-none"
    >
      <data.icon
        className="flex-shrink-0 h-6 w-6 text-radix-sky11"
        aria-hidden="true"
      />
      <span className="ml-3 text-base font-medium ">{data.name}</span>
    </ActiveLink>
  );
}

function ThemeComponent() {
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function switchTheme(theme: string, setTheme: Function) {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <button
      type="button"
      className="p-2 hover:bg-radix-slate4 rounded-lg focus:outline-solid focus:outline-radix-sky8 focus:outline-0.5"
      onClick={() => switchTheme(resolvedTheme, setTheme)}
      aria-label="Toggle Dark Mode"
    >
      {resolvedTheme === "light" && (
        <MoonIcon className="h-6 w-6 text-radix-slate11" />
      )}
      {resolvedTheme === "dark" && (
        <SunIcon className="h-6 w-6 text-radix-amber10" />
      )}
    </button>
  );
}

export default function Nav() {
  return (
    <Popover as="nav" className="relative z-10">
      <div className="border-b-2 border-radix-slate6 h-18 md:grid md:grid-cols-12">
        <div className="flex justify-between items-center md:justify-center md:space-x-10 md:col-start-2 md:col-end-12 h-full">
          <Link
            href="/"
            className="ml-4 md:hidden -my-2 focus-visible:outline-solid outline-radix-sky8 outline-0.5 rounded-md p-2"
          >
            <span className="sr-only">Home</span>
            <HomeIcon className="h-8 w-8 text-radix-slate11" />
          </Link>
          <div className="-my-2 md:hidden px-4">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center hover:bg-radix-slate4 focus:outline-solid focus:outline-radix-sky8 focus:outline-0.5">
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                className="h-6 w-6 text-radix-slate11 "
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group className="hidden md:flex space-x-10">
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
        <div className="rounded-lg shadow-lg bg-radix-slate3 pt-5 pb-6 px-5">
          <div className="flex items-center justify-between">
            <ThemeComponent />
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center focus:outline-radix-sky8 focus:outline-solid text-radix-slate11 hover:bg-radix-slate4">
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="grid gap-y-8 mt-4">
            {items.map((item) => {
              if ("items" in item) {
                return item.items.map((x) => (
                  <MobileItem key={x.name} data={x} />
                ));
              }
              return <MobileItem key={item.name} data={item} />;
            })}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}
