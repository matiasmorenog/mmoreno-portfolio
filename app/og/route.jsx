import { ImageResponse } from "next/og";

export const runtime = "edge";
export const revalidate = 31536000;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          color: "#f2f7ff",
          background:
            "radial-gradient(circle at 90% 8%, #2f4f77 0%, #122338 45%, #0b1320 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 1,
            color: "#7de2db",
          }}
        >
          MATIAS MORENO
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 62, fontWeight: 800, lineHeight: 1.1 }}>
            React Frontend Developer
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#c6d6ea" }}>
            Architecture • Performance • Product UI
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9cb4cf" }}>
          mmoreno-portfolio.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
