import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exciting-gift-fd9a4caa36.media.strapiapp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "exciting-gift-fd9a4caa36.strapiapp.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
