import { ArtistTrail } from "@/types/artist-trail";

// Import trail data files using relative paths
import vanGoghTrail from "../../data/artist-trails/vincent-van-gogh.json";

// Map of artist slugs to trail data
const trailDataMap: Record<string, ArtistTrail> = {
  "vincent-van-gogh": vanGoghTrail as unknown as ArtistTrail,
};

// Get all available trails
export function getAllTrails(): ArtistTrail[] {
  return Object.values(trailDataMap);
}

// Get all trail slugs
export function getAllTrailSlugs(): string[] {
  return Object.keys(trailDataMap);
}

// Get trail data by artist slug
export function getTrailData(artistSlug: string): ArtistTrail | null {
  return trailDataMap[artistSlug] || null;
}

// Check if an artist has a trail
export function hasTrail(artistSlug: string): boolean {
  return artistSlug in trailDataMap;
}
