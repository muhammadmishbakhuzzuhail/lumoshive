import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Client/tech logos are SVG; allow the optimizer to serve them.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
