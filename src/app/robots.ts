import { MetadataRoute } from "next";

// Canonical URL for SEO (Shopify proxy URL, not Vercel)
const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/search?"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
