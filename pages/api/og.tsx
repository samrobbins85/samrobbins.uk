import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
export const config = {
  runtime: "edge",
};

const fontLight = fetch(
  new URL("../../fonts/inter/inter-latin-ext-400-normal.woff", import.meta.url)
).then((res) => res.arrayBuffer());

const fontBold = fetch(
  new URL("../../fonts/inter/inter-latin-ext-700-normal.woff", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontLightData = await fontLight;
  const fontBoldData = await fontBold;

  const { searchParams } = new URL(req.url);
  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "Sam Robbins";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fbfcfd",
          fontSize: 64,
          fontWeight: 400,
          fontFamily: '"Inter"',
        }}
      >
        <h1
          style={{
            fontSize: 128,
            textAlign: "center",
            fontWeight: 700,
            fontFamily: "Inter Bold",
          }}
        >
          {title}
        </h1>
        {hasTitle && <div>Sam Robbins</div>}
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: fontLightData,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter Bold",
          data: fontBoldData,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
