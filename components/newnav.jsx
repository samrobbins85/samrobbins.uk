import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  NewspaperIcon,
  AcademicCapIcon,
  UserIcon,
  CollectionIcon,
  CodeIcon,
  HomeIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ActiveLink from "@/components/ActiveLink";
import { useRouter } from "next/router";
import Link from "next/link";

const items = [
  { name: "About", href: "/about", icon: UserIcon },
  {
    name: "Writing",
    items: [
      { name: "Blog", href: "/blog", icon: NewspaperIcon },
      { name: "Essays", href: "/essays", icon: AcademicCapIcon },
    ],
  },
  { name: "Portfolio", href: "/portfolio", icon: CollectionIcon },
  { name: "Snippets", href: "/snippets", icon: CodeIcon },
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
                ? "text-gray-900 font-semibold"
                : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-cyan-500"
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
                  ? "text-gray-600"
                  : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
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
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {data.items.map((item) => (
                    <ActiveLink
                      key={item.name}
                      href={item.href}
                      activeClassName="!text-black"
                    >
                      <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 text-gray-500">
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-cyan-500"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium">{item.name}</p>
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
    <ActiveLink href={data.href} activeClassName="!text-black font-semibold">
      <a className="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-cyan-500 rounded-md">
        {data.name}
      </a>
    </ActiveLink>
  );
}

function MobileItem({ data }) {
  return (
    <ActiveLink key={data.name} href={data.href} activeClassName="!text-black">
      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 text-gray-500">
        <data.icon
          className="flex-shrink-0 h-6 w-6 text-cyan-500"
          aria-hidden="true"
        />
        <span className="ml-3 text-base font-medium ">{data.name}</span>
      </a>
    </ActiveLink>
  );
}

export default function Nav() {
  return (
    <Popover className="relative bg-white z-10">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-center md:space-x-10">
              <div className="flex justify-start pl-4 md:hidden -my-2">
                <Link href="/">
                  <a>
                    <span className="sr-only">Workflow</span>
                    <HomeIcon className="h-8 w-8 text-gray-500" />
                  </a>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden px-4">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <ActiveLink
                  href="/"
                  activeClassName="!text-black font-semibold"
                >
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-cyan-500 rounded-md">
                    Home
                  </a>
                </ActiveLink>
                {items.map((x) => {
                  if ("items" in x) {
                    return <DesktopDropdown key={x.name} data={x} />;
                  }
                  return <DesktopSingle key={x.name} data={x} />;
                })}
              </Popover.Group>
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
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 flex justify-between flex-row-reverse">
                  <div className="flex justify-end">
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-2 flex-grow pr-8">
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
