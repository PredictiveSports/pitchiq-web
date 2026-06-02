import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitchIQ — Read the game. Call the pitch.",
  description:
    "The training tool that helps catchers and pitchers think one pitch ahead — powered by real game data.",
  metadataBase: new URL("https://pitchiq.predictivesports.io"),
  openGraph: {
    title: "PitchIQ — Read the game. Call the pitch.",
    description:
      "The training tool that helps catchers and pitchers think one pitch ahead — powered by real game data.",
    siteName: "PitchIQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
