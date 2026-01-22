import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // basePath ensures all internal links include /apps/masterpieces prefix
  basePath: "/apps/masterpieces",

  // assetPrefix serves static assets from Vercel directly (not through Shopify proxy)
  // Only apply in production - in dev, serve locally
  assetPrefix: isProd
    ? "https://masterpiece-locator.vercel.app/apps/masterpieces"
    : undefined,

  // Required for Shopify proxy to work correctly
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://*.myshopify.com https://luxurywallart.com",
          },
        ],
      },
    ];
  },

  // Image domains for external images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images.metmuseum.org",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "luxurywallart.com",
      },
      {
        protocol: "https",
        hostname: "www.rijksmuseum.nl",
      },
      {
        protocol: "https",
        hostname: "api.artic.edu",
      },
      {
        protocol: "https",
        hostname: "**.wikiart.org",
      },
    ],
  },
};

export default nextConfig;
