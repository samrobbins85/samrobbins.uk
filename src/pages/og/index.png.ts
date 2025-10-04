import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import fs from "fs/promises";

const fontData = await fs.readFile("./src/assets/fonts/Inter-Regular.ttf");

export const GET: APIRoute = async () => {
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
          justifyContent: "center",
          alignItems: "center",
        },
        children: [
          {
            type: "h1",
            props: {
              style: {
                fontSize: "92px",
                fontWeight: "bold",
                color: "black",
                margin: 0,
                lineHeight: 1.2,
                textAlign: "center",
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
