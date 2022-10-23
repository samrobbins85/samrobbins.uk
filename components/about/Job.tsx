import DatoImage from "../datoimage";

interface Props {
  company: string;
  logo: {
    url: string;
    width?: number | string;
    height?: number | string;
  };
  title: string;
  duration: string;
}

export default function Job({ company, logo, title, duration }: Props) {
  return (
    <div className="flex gap-x-6 px-6 py-4 items-center">
      <div className="h-16 w-16 min-w-16 flex">
        <DatoImage
          unoptimized={logo.url.endsWith(".svg")}
          aria-hidden="true"
          className="object-contain"
          src={logo.url}
          width={logo.width}
          height={logo.height}
          alt={company + " logo"}
        />
      </div>
      <div className="grid">
        <span className="font-semibold">{title}</span>
        <span className="text-radix-slate11">{company}</span>
        <span className="text-radix-slate11">{duration}</span>
      </div>
    </div>
  );
}
