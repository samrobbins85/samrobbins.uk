import Head from "next/head";
import Nav from "@/components/newnav";

export default function Layout({ title, children, fullWidth, description }) {
  return (
    <>
      <Head>
        <title>{title} | Sam Robbins</title>
        <meta
          property="og:image"
          content={`https://og.samrobbins.uk/api/${escape(title)}`}
        />
        <meta property="og:title" content={title} />
        {description && (
          <meta property="og:description" content={description} />
        )}
      </Head>
      <Nav />
      <div className={`${!fullWidth && "max-w-85ch"} mx-auto px-4 py-8`}>
        {children}
      </div>
    </>
  );
}
