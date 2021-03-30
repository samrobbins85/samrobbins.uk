export default function background(language) {
  const colors = {
    JavaScript: "bg-yellow-200",
    CSS: "bg-blue-200",
    HTML: "bg-orange-200",
    LaTeX: "bg-teal-200",
    Shell: "bg-green-200",
  };
  return colors[language] ?? "bg-gray-200";
}
