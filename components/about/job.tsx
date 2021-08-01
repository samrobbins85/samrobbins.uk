import DatoImage from "../datoimage";

export default function Job({ company, logo, title, duration }) {
  return (
    <div className="flex gap-x-4 px-6 py-4 items-center">
      <div className="h-16 w-16">
        <DatoImage
          aria-hidden="true"
          src={logo.url}
          width={logo.width}
          height={logo.height}
          alt={title}
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
