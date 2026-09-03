import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/car-rental-fe",
  assetPrefix: "/car-rental-fe/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;