import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // rewrites for openweather to avoid cors
  async rewrites() {
    return [
      {
        source: "/api/openweather/:path*",
        destination: "https://api.openweathermap.org/data/3.0/:path*",
      },
    ];
  },
};

export default nextConfig;
