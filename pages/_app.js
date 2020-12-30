import "../styles/index.css";
import "../styles/prism-atom-dark.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sam Robbins</title>
        <meta
          name="Description"
          content="The personal website of Sam Robbins, Computer Science student from Durham University"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
