import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "image.tmdb.org" }],
  },
  cacheComponents: true,
}

export default nextConfig
