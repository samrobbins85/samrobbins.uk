import { Menu, Transition } from "@headlessui/react";
import { RepoIcon, MarkGithubIcon } from "@primer/octicons-react";
import { GitHubSingle } from "./smallbutton";

export default function GitHubButton({ repos }) {
  if (repos.length > 1) {
    return <GitHubMultiple repos={repos} />;
  }
  return <GitHubSingle url={repos[0]} />;
}

function GitHubMultiple({ repos }) {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button
              className={`text-nord-3 dark:text-nord-4 dark:hover:text-white hover:text-black p-2 hover:bg-nord-4  dark:hover:bg-nord-0 rounded focus:ring focus:ring-nord-8 focus:outline-none ${
                open ? " text-black" : undefined
              }`}
            >
              <MarkGithubIcon size={16} className="h-6 w-6" />
            </Menu.Button>

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
                className="absolute -right-2 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none z-20"
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
