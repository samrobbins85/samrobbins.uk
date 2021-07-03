import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import "../styles/radix/skyDark.css";
import "../styles/radix/grayDark.css";

import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import type { AppProps } from "next/app";

interface CustomComponent {
  Component: {
    theme: string;
  };
}

type CustomApp = CustomComponent & AppProps;

function MyApp({ Component, pageProps }: CustomApp) {
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
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
