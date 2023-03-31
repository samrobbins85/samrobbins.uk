import localFont from "next/font/local";

const etBook = localFont({
  src: [
    {
      path: "../../fonts/et-book/normal.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../../fonts/et-book/italic.woff2",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../../fonts/et-book/bold.woff2",
      weight: "bold",
      style: "normal",
    },
  ],
  variable: "--font-etBook",
});

export default etBook;
