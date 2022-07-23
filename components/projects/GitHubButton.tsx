import { Menu } from "@headlessui/react";
import { RepoIcon, MarkGithubIcon } from "@primer/octicons-react";
import { GitHubSingle } from "./SmallButton";

export default function GitHubButton({ repos }: { repos: string[] }) {
  if (repos.length > 1) {
    return <GitHubMultiple repos={repos} />;
  }
  return <GitHubSingle url={repos[0]} />;
}

function GitHubMultiple({ repos }) {
  return (
    <div className="relative inline-block text-left">
      <Menu>
        <>
          <Menu.Button className="text-radix-slate11 hover:text-radix-slate12 hover:bg-radix-slate4 p-2 rounded focus:ring focus:ring-radix-sky8 focus:outline-none highlight">
            <MarkGithubIcon size={16} className="h-6 w-6" />
          </Menu.Button>

          <Menu.Items className="absolute -right-2 w-56 mt-2 origin-top-right bg-radix-slate1 border border-radix-slate7 divide-y  rounded-md shadow-lg outline-none">
            <div className="relative">
              <div className="absolute h-0 w-0 border-8 border-radix-slate1 border-b-transparent border-r-transparent rotate-45 right-5 -top-2 outline-radix-slate7 outline-px outline-solid -z-20"></div>
              <div className="absolute w-[1.3rem] bg-radix-slate1 h-px right-[1.1rem] top-[-0.05rem]"></div>
              <div className="py-1 z-50">
                {repos.map((item) => (
                  <Menu.Item key={item}>
                    {({ active }) => (
                      <a
                        href={item}
                        className={`${
                          active
                            ? "bg-radix-slate4 text-radix-blue11"
                            : "text-radix-slate12"
                        } flex justify-start w-full px-4 py-2 text-sm leading-5 text-left  font-bold`}
                      >
                        <RepoIcon
                          size={24}
                          className="mr-1 text-radix-slate12"
                        />
                        {item.split("/").slice(-1)[0]}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </div>
          </Menu.Items>
        </>
      </Menu>
    </div>
  );
}
