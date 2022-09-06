import Layout from "@/components/layout";
import Parser from "rss-parser";
export default function Books({ feed, books }) {
  console.log(feed);
  console.log(books);
  return (
    <Layout title="Books">
      <h2>Reading</h2>
      <h2 className="text-3xl font-semibold pt-4 pb-6">Read</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {books.map((item) => (
          <div key={item.title} className="px-4 w-52">
            <div className="flex items-end h-72">
              <img
                className="w-52 py-4 "
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <p className="text-center">
              <a href={item.link} className="text-lg">
                {item.title}
              </a>
            </p>
            <p className="text-gray-600 text-center pb-4">{item.author}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  let parser = new Parser();
  const feed = await parser.parseURL("https://oku.club/rss/collection/IcU8v");
  const books = await Promise.all(
    feed.items.map(async (item) => {
      const url = item.link.split("-").slice(-1)[0];
      const data = await fetch(`https://oku.club/api/books/${url}`);
      const result = await data.json();

      return {
        author: item.creator,
        title: item.title,
        link: item.link,
        thumbnail: result.book.imageLinks.thumbnail,
      };
    })
  );
  return { props: { feed, books } };
};
