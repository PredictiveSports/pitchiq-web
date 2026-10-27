import type { Metadata } from "next";
import { IS_ALPHA } from "@/lib/links";
import "./globals.css";

export const metadata: Metadata = {
  title: "PitchIQ — Read the game. Call the pitch.",
  description:
    "The training tool that helps catchers and pitchers think one pitch ahead — powered by real game data.",
  // Canonical URLs point at prod even on alpha, so alpha never competes with it.
  metadataBase: new URL("https://pitchiq.predictivesports.io"),
  ...(IS_ALPHA && { robots: { index: false, follow: false } }),
  openGraph: {
    title: "PitchIQ — Read the game. Call the pitch.",
    description:
      "The training tool that helps catchers and pitchers think one pitch ahead — powered by real game data.",
    siteName: "PitchIQ",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "PitchIQ — Read the game. Call the pitch.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {IS_ALPHA && (
          <div className="alpha-banner" role="note">
            Alpha site for testing. Accounts, teams and payments here aren&rsquo;t real.
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
