export default function Code() {
  return (
    <div className="relative h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center  object-contain p-2">
      <div className="relative h-full w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-700"
          viewBox="0 0 512 512"
        >
          <title>Code Slash</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M160 368L32 256l128-112M352 368l128-112-128-112M304 96l-96 320"
          />
        </svg>
      </div>
    </div>
  );
}
