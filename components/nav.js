import Link from "next/link";
export default function NavBar({ text, title }) {
  return (
    <div className="bg-gray-100 border-b-2 border-gray-300 h-12 flex items-center px-2 text-lg gap-x-4">
      <Link href="/">
        <a>
          <span>{title}</span>
        </a>
      </Link>
      {text.map((item) => (
        <Link href={"/" + item.path}>
          <a>
            <span>{item.title}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
