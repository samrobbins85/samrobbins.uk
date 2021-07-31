import Head from "next/head";
import Nav from "@/components/nav";

export default function Layout({
  title,
  children,
  fullWidth,
  description,
}: {
  title: string;
  children: React.ReactNode;
  fullWidth?: Boolean;
  description?: string;
}) {
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
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
      </Head>
      <Nav />
      <main className={`${!fullWidth && "max-w-85ch"} mx-auto p-4`}>
        {children}
      </main>
    </>
  );
}
