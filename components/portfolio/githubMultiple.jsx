import { Menu, Transition } from "@headlessui/react";
import {
  RepoIcon,
  MarkGithubIcon,
  ChevronDownIcon,
} from "@primer/octicons-react";

export default function GitHubMultiple({ repos }) {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <span className="rounded-md shadow-sm">
              <Menu.Button
                className={`inline-flex h-12 w-44 justify-center px-4 py-2 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-black border border-gray-300 rounded-md hover:text-white focus:outline-none items-center focus:ring-2 focus:ring-black focus:ring-opacity-50 ${
                  open
                    ? "ring-2 ring-black ring-opacity-50 text-white"
                    : undefined
                }`}
              >
                <MarkGithubIcon size={16} className="mr-2 h-6 w-6" />
                <span className="font-semibold tracking-wide text-lg">
                  GitHub
                </span>
                <ChevronDownIcon className="ml-2" size={16} />
              </Menu.Button>
            </span>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-20"
              >
                <div className="py-1">
                  {repos.map((item) => (
                    <Menu.Item key={item}>
                      {({ active }) => (
                        <a
                          href={item}
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700"
                          } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left text-blue-700 font-bold`}
                        >
                          <RepoIcon size={24} className="mr-1 text-black" />
                          {item.split("/").slice(-1)[0]}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
