import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  poweredByHeader: false,
  
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.devnot.com",
        pathname: "/uploads/**",
      },
    ],
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.devnot.com",
          },
        ],
        destination: "https://devnot.com/:path*",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;