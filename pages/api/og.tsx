import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
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
          fontWeight: 600,
          fontFamily: "Inter",
        }}
      >
        <h1 style={{ fontSize: 128, textAlign: "center", fontWeight: 900 }}>
          {title}
        </h1>
        {hasTitle && <div>Sam Robbins</div>}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
