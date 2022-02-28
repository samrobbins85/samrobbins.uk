// import DatoImage from "@/components/datoimage";
import Layout from "@/components/layout";
import Image from "next/image";
import Masonry from "react-masonry-css";
function unsplashLoader({ src, width, quality }) {
  return `${src}&w=${width}&q=${quality || 75}`;
}
export default function Photos({ unsplash }) {
  console.log(unsplash);
  return (
    // <p>Placeholder</p>
    <Layout title="Photos" description="My Photography">
      <Masonry
        breakpointCols={3}
        className="masonry"
        columnClassName="masonry_column"
      >
        {unsplash.map((item) => (
          <div key={item.id}>
            <Image
              src={item.urls.raw}
              alt={item.alt_description}
              loader={unsplashLoader}
              width={item.width}
              height={item.height}
              layout="responsive"
              sizes="50vw"
            />
          </div>
        ))}
      </Masonry>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.unsplash.com/users/samrobbins/photos?per_page=100",
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_TOKEN}`,
      },
    }
  );
  const unsplash = await res.json();
  console.log(unsplash);

  return {
    props: {
      unsplash,
    },
  };
}
