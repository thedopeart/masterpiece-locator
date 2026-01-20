// Re-export Prisma types for convenience
export type {
  Artwork,
  Artist,
  Museum,
  Movement,
  ProductMatch,
} from "@prisma/client";

// Extended types with relations
export interface ArtworkWithRelations {
  id: string;
  slug: string;
  title: string;
  year: number | null;
  medium: string | null;
  dimensions: string | null;
  description: string | null;
  historicalSignificance: string | null;
  imageUrl: string | null;
  imageAttribution: string | null;
  isPermanent: boolean;
  galleryRoom: string | null;
  wikidataId: string | null;
  wikipediaUrl: string | null;
  searchVolumeTier: number;
  styleTags: string[];
  moodTags: string[];
  primaryColors: string[];
  artist: {
    id: string;
    slug: string;
    name: string;
    birthYear: number | null;
    deathYear: number | null;
    nationality: string | null;
  } | null;
  museum: {
    id: string;
    slug: string;
    name: string;
    city: string;
    country: string;
    address: string | null;
  } | null;
}

export interface ArtistWithArtworks {
  id: string;
  slug: string;
  name: string;
  birthYear: number | null;
  deathYear: number | null;
  nationality: string | null;
  movements: string[];
  bioShort: string | null;
  bioFull: string | null;
  imageUrl: string | null;
  wikipediaUrl: string | null;
  artworks: {
    id: string;
    slug: string;
    title: string;
    year: number | null;
    imageUrl: string | null;
    museum: {
      name: string;
      city: string;
    } | null;
  }[];
}

export interface MuseumWithArtworks {
  id: string;
  slug: string;
  name: string;
  city: string;
  country: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  websiteUrl: string | null;
  ticketUrl: string | null;
  ticketPriceRange: string | null;
  description: string | null;
  imageUrl: string | null;
  artworks: {
    id: string;
    slug: string;
    title: string;
    year: number | null;
    imageUrl: string | null;
    artist: {
      name: string;
    } | null;
  }[];
}

// Search result types
export interface SearchResult {
  type: "artwork" | "artist" | "museum";
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  imageUrl: string | null;
}

// Product matching types
export interface ProductRecommendation {
  shopifyProductId: string;
  title: string;
  handle: string;
  imageUrl: string;
  price: string;
  matchType: string;
  matchStrength: number;
}
