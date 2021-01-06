import Link from "next/link";
import Image from "next/image";
export default function Hexagon({ image, name, slug, project }) {
  return (
    <li className="hex">
      <div className="hexIn">
        <div className="hexLink">
          <Image src={image} alt={name} layout="fill" />
          {slug ? (
            <Link href={"/portfolio/" + slug}>
              <a>
                <h1 className="text-cyan-600 hover:underline">{name}</h1>
                <p>{project}</p>
              </a>
            </Link>
          ) : (
            <>
              <h1>{name}</h1>
              <p>{project}</p>
            </>
          )}
        </div>
      </div>
    </li>
  );
}
