import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
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
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "8348650db5154c01999667d263b7e6e1", "spa": true}'
      />
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
