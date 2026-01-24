import { ArtistTrail } from "@/types/artist-trail";

// Import trail data files using relative paths
import vanGoghTrail from "../../data/artist-trails/vincent-van-gogh.json";
import monetTrail from "../../data/artist-trails/claude-monet.json";
import picassoTrail from "../../data/artist-trails/pablo-picasso.json";
import kahloTrail from "../../data/artist-trails/frida-kahlo.json";
import daliTrail from "../../data/artist-trails/salvador-dali.json";
import rembrandtTrail from "../../data/artist-trails/rembrandt.json";

// Map of artist slugs to trail data
const trailDataMap: Record<string, ArtistTrail> = {
  "vincent-van-gogh": vanGoghTrail as unknown as ArtistTrail,
  "claude-monet": monetTrail as unknown as ArtistTrail,
  "pablo-picasso": picassoTrail as unknown as ArtistTrail,
  "frida-kahlo": kahloTrail as unknown as ArtistTrail,
  "salvador-dali": daliTrail as unknown as ArtistTrail,
  "rembrandt": rembrandtTrail as unknown as ArtistTrail,
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
