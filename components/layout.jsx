import Head from "next/head";
import Nav from "@/components/newnav";

export default function Layout({ title, children, fullWidth }) {
  return (
    <>
      <Head>
        <title>{title} | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.csnotes.me/**${escape(title)}**/${escape(
            "Sam Robbins"
          )}.png?theme=dark&md=1&fontSize=100px`}
        />
      </Head>
      <Nav />
      <div className={`${!fullWidth && "max-w-85ch"} mx-auto px-4 py-8`}>
        {children}
      </div>
    </>
  );
}
