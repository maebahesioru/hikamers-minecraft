import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
