// import DatoImage from "@/components/datoimage";
import Layout from "@/components/layout";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
export default function Photos({ unsplash }) {
  console.log(unsplash);
  return (
    // <p>Placeholder</p>
    <Layout title="Photos" description="My Photography">
      {unsplash.map((item) => (
        <div key={item.id}>
          <Image
            {...item}
            placeholder="blur"
            alt="Img"
            // src={item.urls.regular}
            // alt={item.alt_description}
            // width={item.width}
            // height={item.height}
            // placeholder="blur"
            // blurDataURL={item.blurDataURL}
          />
          <p>{item.alt_description}</p>
        </div>
      ))}
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
  // await unsplash.forEach(async (item, index) => {
  //   const { base64 } = await getPlaiceholder(item.urls.regular);
  //   test[index].blur_hash = base64;
  // });
  let ret = await Promise.all(
    unsplash.map(async (item) => {
      const { base64, img } = await getPlaiceholder(item.urls.regular, {
        size: 10,
      });
      return { ...img, blurDataURL: base64, id: item.id };
    })
  );

  return {
    props: {
      unsplash: ret,
    },
  };
}
