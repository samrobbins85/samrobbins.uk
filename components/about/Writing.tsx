import DatoImage from "../datoimage";

interface Props {
  publisher: string;
  logo: {
    url: string;
    width?: number;
    height?: number;
  };
  title: string;
  link: string;
  date: string;
}

export default function Writing({ publisher, logo, title, link, date }: Props) {
  return (
    <div className="flex gap-x-6 px-6 py-4 items-start">
      <div className="h-16 w-16 min-w-16 flex justify-center">
        <DatoImage
          unoptimized={logo.url.endsWith(".svg")}
          aria-hidden="true"
          className="object-contain"
          src={logo.url}
          width={logo.width}
          height={logo.height}
          alt={publisher + " logo"}
        />
      </div>
      <div className="grid  content-baseline">
        <a
          className="hover:underline text-radix-cyan11 font-semibold"
          href={link}
        >
          {title}
        </a>
        <span className="text-radix-slate11">
          {publisher} -{" "}
          {new Date(date).toLocaleString("en-gb", {
            month: "long",
            year: "numeric",
          })}
        </span>
        {/* <span className="text-radix-slate11">
          {" "}
          {new Date(date).toLocaleString("en-gb", {
            month: "long",
            year: "numeric",
          })}
        </span> */}
      </div>
    </div>
  );
}
