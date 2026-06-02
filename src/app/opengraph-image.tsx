import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";
export const alt = "PitchIQ — Read the game. Call the pitch.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const iconData = await readFile(
    join(process.cwd(), "public", "icon-1024.png")
  );
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1b1e",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: 100,
            width: 500,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(74, 168, 224, 0.15), transparent 70%)",
          }}
        />

        {/* App icon */}
        <img
          src={iconSrc}
          width={100}
          height={100}
          style={{
            borderRadius: 22,
            marginBottom: 32,
            boxShadow: "0 18px 50px -16px rgba(0,0,0,0.8)",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Read the game.
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
              color: "#4ab8f0",
            }}
          >
            Call the pitch.
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#9ca3af",
            marginTop: 28,
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          The training tool that helps catchers and pitchers think one pitch
          ahead.
        </div>
      </div>
    ),
    { ...size }
  );
}
