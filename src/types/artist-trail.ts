// Types for Artist Trail Maps feature

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface WhatToSee {
  name: string;
  type: "museum" | "landmark" | "neighborhood" | "trail";
  address?: string;
  description: string;
  ticketUrl?: string;
  hours?: string;
  note?: string;
  famousWorks?: string[];
  vanGoghWorks?: string[];
}

export interface PaintingFromHere {
  slug: string;
  title: string;
  year: number;
}

export interface TrailStop {
  order: number;
  slug: string;
  place: string;
  region: string;
  country: string;
  coordinates: Coordinates;
  years: string;
  ageRange: string;
  type: "birthplace" | "lived" | "worked" | "death";
  shortDescription: string;
  description: string;
  significance: string;
  highlight?: boolean;
  mustVisit?: boolean;
  whatToSee: WhatToSee[];
  paintingsFromHere: PaintingFromHere[];
  artworksHereNow: number;
  artworksNote?: string;
  image?: string;
}

export interface TopMuseum {
  slug: string;
  name: string;
  city: string;
  country: string;
  count: number;
  note?: string;
  coordinates: Coordinates;
  highlights: string[];
}

export interface CurrentLocations {
  title: string;
  description: string;
  topMuseums: TopMuseum[];
}

export interface SuggestedItinerary {
  name: string;
  duration: string;
  description: string;
  stops: string[];
  museums?: string[];
  highlight?: boolean;
}

export interface TimelineEvent {
  year: number;
  event: string;
}

export interface ArtistTrail {
  artist: string;
  artistName: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  lifespan: string;
  totalLocations: number;
  totalPaintings: number;
  primaryCountries: string[];
  introduction: string;
  trail: TrailStop[];
  currentLocations: CurrentLocations;
  suggestedItineraries: SuggestedItinerary[];
  timeline: TimelineEvent[];
}
