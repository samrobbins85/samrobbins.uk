import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
