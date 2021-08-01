import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Inter.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />

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

        <body className="bg-radix-slate1 text-radix-slate12">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
