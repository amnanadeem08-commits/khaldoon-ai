import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Khaldoon AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#0E141C",
          color: "#F5F2EA",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: "0.2em", color: "#B58E45", textTransform: "uppercase" }}>
          Khaldoon AI
        </div>
        <div style={{ display: "flex", fontSize: 64, marginTop: 24, lineHeight: 1.1, maxWidth: 900 }}>
          Turn Excel files into dashboards.
        </div>
      </div>
    ),
    { ...size },
  );
}
