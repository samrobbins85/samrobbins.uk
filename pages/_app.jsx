import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import Head from "next/head";
import "@fontsource/newsreader/variable.css";
import "@fontsource/newsreader/variable-italic.css";
import { ThemeProvider } from "next-themes";

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
      </Head>
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
