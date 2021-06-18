import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body className="dark:bg-nord1 dark:text-white bg-nord6.1">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
