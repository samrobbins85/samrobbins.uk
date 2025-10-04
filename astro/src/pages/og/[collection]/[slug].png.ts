import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import fs from "fs/promises";

const fontData = await fs.readFile("./src/assets/fonts/Inter-Regular.ttf");

export async function getStaticPaths() {
  const collections = ["blogs", "projects", "snippets", "essays"] as const;
  const paths = [];

  for (const collectionName of collections) {
    const items = await getCollection(collectionName);

    for (const item of items) {
      paths.push({
        params: {
          collection: collectionName,
          // @ts-ignore
          slug: item.data?.slug ?? item.id,
        },
        props: { item, collectionName },
      });
    }
  }

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const { item } = props;

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#FCFCFD",
          padding: "80px",
          justifyContent: "space-between",
          alignItems: "center",
        },
        children: [
          {
            type: "h1",
            props: {
              style: {
                fontSize: "72px",
                fontWeight: "bold",
                color: "black",
                margin: 0,
                lineHeight: 1.2,
                textAlign: "center",
              },
              children: item.data.title,
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                fontSize: "40px",
                color: "#94a3b8",
              },
              children: "Sam Robbins",
            },
          },
        ],
      },
    } as any,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png as any, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
