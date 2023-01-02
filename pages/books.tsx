import Layout from "@/components/layout";
import Parser from "rss-parser";
import Head from "next/head";

function BookCollection({ data }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
      {data.map((item) => (
        <div key={item.title} className="px-4 w-52">
          <div className="h-72">
            <img
              className="object-contain h-full object-bottom"
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <p>
            <a href={item.link} className="text-lg">
              {item.title}
            </a>
          </p>
          <p className="text-gray-600 pb-4">{item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default function Books({ read, reading }) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/newsreader-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout title="Books">
        <div className="font-serif">
          <h1 className="text-5xl text-center">Books</h1>
          <h2 className="text-3xl font-semibold pt-4 pb-6">Reading</h2>
          <BookCollection data={reading} />
          <h2 className="text-3xl font-semibold pt-4 pb-6">Read</h2>
          <BookCollection data={read} />
        </div>
      </Layout>
    </>
  );
}

async function dataFromFeed(feed) {
  return Promise.all(
    feed.items.map(async (item) => {
      const url = item.link.split("-").slice(-1)[0];
      const data = await (
        await fetch(`https://oku.club/api/books/${url}`)
      ).json();

      return {
        author: item.creator,
        title: item.title,
        link: item.link,
        thumbnail: data.book.imageLinks.thumbnail,
      };
    })
  );
}

export const getStaticProps = async () => {
  let parser = new Parser();
  const readFeed = await parser.parseURL(
    "https://oku.club/rss/collection/IcU8v"
  );
  const readingFeed = await parser.parseURL(
    "https://oku.club/rss/collection/WSiHD"
  );
  const read = await dataFromFeed(readFeed);
  const reading = await dataFromFeed(readingFeed);
  return { props: { read, reading }, revalidate: 86400 };
};
