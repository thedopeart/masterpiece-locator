import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";
import { ERAS } from "@/lib/eras";
import { getAllTrailSlugs } from "@/lib/artist-trails";

// Canonical URL for SEO (Shopify proxy URL, not Vercel)
const BASE_URL = "https://luxurywallart.com/apps/masterpieces";

// Force dynamic generation to avoid build-time database issues
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all dynamic content from database sequentially to avoid connection pool issues
  const artworks = await prisma.artwork.findMany({
    select: { slug: true, updatedAt: true, searchVolumeTier: true },
  });

  const artists = await prisma.artist.findMany({
    select: { slug: true, updatedAt: true },
  });

  const museums = await prisma.museum.findMany({
    select: { slug: true, city: true, updatedAt: true },
  });

  const movements = await prisma.movement.findMany({
    select: { slug: true, updatedAt: true },
  });

  // Get unique cities for city pages
  const cities = [...new Set(museums.map((m) => m.city))].map((city) => ({
    slug: city.toLowerCase().replace(/\s+/g, "-"),
    city,
  }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/search`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/artists`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/museums`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/movements`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/discover`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/trails`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Era pages (static from eras.ts)
  const eraPages: MetadataRoute.Sitemap = ERAS.map((era) => ({
    url: `${BASE_URL}/era/${era.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Artwork pages - priority based on search volume tier (1 = highest priority)
  const artworkPages: MetadataRoute.Sitemap = artworks.map((artwork) => ({
    url: `${BASE_URL}/art/${artwork.slug}`,
    lastModified: artwork.updatedAt,
    changeFrequency: "monthly" as const,
    priority: artwork.searchVolumeTier === 1 ? 0.9 : artwork.searchVolumeTier === 2 ? 0.8 : 0.7,
  }));

  // Artist pages
  const artistPages: MetadataRoute.Sitemap = artists.map((artist) => ({
    url: `${BASE_URL}/artist/${artist.slug}`,
    lastModified: artist.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Museum pages
  const museumPages: MetadataRoute.Sitemap = museums.map((museum) => ({
    url: `${BASE_URL}/museum/${museum.slug}`,
    lastModified: museum.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Movement pages
  const movementPages: MetadataRoute.Sitemap = movements.map((movement) => ({
    url: `${BASE_URL}/movement/${movement.slug}`,
    lastModified: movement.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/city/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Artist trail pages
  const trailSlugs = getAllTrailSlugs();
  const trailPages: MetadataRoute.Sitemap = trailSlugs.map((slug) => ({
    url: `${BASE_URL}/trail/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...eraPages,
    ...artworkPages,
    ...artistPages,
    ...museumPages,
    ...movementPages,
    ...cityPages,
    ...trailPages,
  ];
}
