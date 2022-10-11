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
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        <h1 style={{ fontSize: 64, textAlign: "center", fontWeight: 800 }}>
          {title}
        </h1>
        {hasTitle && <p>Sam Robbins</p>}
      </div>
    ),
    {
      width: 600,
      height: 400,
    }
  );
}
