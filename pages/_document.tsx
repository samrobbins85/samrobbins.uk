import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="Description"
            content="The personal website of Sam Robbins, Computer Science student from Durham University"
          />
          <link
            rel="preload"
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed.xml"
          />
          <link
            rel="alternate"
            type="application/atom+xml"
            title="Atom 1.0"
            href="/atom.xml"
          />
          <link
            rel="alternate"
            type="application/json"
            title="JSON Feed"
            href="/feed.json"
          />
        </Head>

        <body className="dark:bg-nord1 dark:text-white bg-nord6.1 text-gray-800">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
