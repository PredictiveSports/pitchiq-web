import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit `privacy/index.html` rather than `privacy.html`. GitHub Pages resolves a
  // directory + index.html unambiguously; without this, `out/privacy.html` and an
  // `out/privacy/` directory of RSC payloads both claim the /privacy URL.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
