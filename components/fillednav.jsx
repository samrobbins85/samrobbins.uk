import NavBar from "@/components/nav";

export default function FilledNav() {
  return (
    <NavBar
      title="Home"
      text={[
        { title: "Blog", path: "blog" },
        { title: "Portfolio", path: "portfolio" },
        { title: "Writing", path: "writing" },
        { title: "Snippets", path: "snippets" },
      ]}
    />
  );
}
