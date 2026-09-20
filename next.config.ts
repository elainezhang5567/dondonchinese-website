import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Serve modern formats automatically. Add `remotePatterns` here if photos
    // are ever hosted on a CDN instead of /public/images.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
