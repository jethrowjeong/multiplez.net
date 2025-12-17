import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
