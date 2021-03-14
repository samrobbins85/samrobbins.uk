export default function Signup() {
  return (
    <div className="border p-4 rounded" id="revue-embed">
      <h2 className="font-bold text-2xl">
        Want to find out when I post a new blog or project?
      </h2>
      <h3 className="text-lg text-gray-700">Sign up for my newsletter</h3>
      <form
        action="https://www.getrevue.co/profile/samrobbins85/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="grid sm:grid-cols-4 py-1 gap-y-2">
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring focus:ring-cyan-300 focus:ring-opacity-50 sm:col-span-3"
            placeholder="Email Address"
            type="email"
            name="member[email]"
            id="member_email"
          />

          <input
            className="px-2 sm:mx-4 rounded transition-colors duration-200 bg-white border hover:bg-gray-50 focus:bg-gray-50  font-semibold cursor-pointer h-8 sm:h-auto"
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            id="member_submit"
          />
        </div>
        <div className="text-gray-700">
          By subscribing, you agree with Revue’s{" "}
          <a
            className="text-cyan-700 hover:underline focus:underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.getrevue.co/terms"
          >
            Terms
          </a>{" "}
          and{" "}
          <a
            className="text-cyan-700 hover:underline focus:underline"
            target="_blank"
            rel="noreferrer"
            href="https://www.getrevue.co/privacy"
          >
            Privacy Policy
          </a>
          .
        </div>
      </form>
    </div>
  );
}
