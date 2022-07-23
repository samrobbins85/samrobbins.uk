export default function Contributor({
  username,
  name,
}: {
  username: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-x-2" key={username}>
      <div className="inline-block h-10 w-10 relative">
        <img
          className="rounded-full"
          src={`https://github.com/${username}.png`}
          alt={username}
        />
      </div>
      <div className="flex flex-col">
        <p>{name}</p>
        <a
          className="text-radix-blue11 hover:underline"
          href={`https://github.com/${username}`}
        >
          <p>{username}</p>
        </a>
      </div>
    </div>
  );
}
