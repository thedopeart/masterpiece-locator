/**
 * Text utilities for cleaning and formatting display text
 */

// Decode HTML entities to their actual characters
export function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&#233;': 'é',
    '&#232;': 'è',
    '&#234;': 'ê',
    '&#224;': 'à',
    '&#226;': 'â',
    '&#228;': 'ä',
    '&#246;': 'ö',
    '&#252;': 'ü',
    '&#39;': "'",
    '&apos;': "'",
    '&quot;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&nbsp;': ' ',
    '&#8211;': '–',
    '&#8212;': '—',
  };

  let result = text;
  for (const [entity, char] of Object.entries(entities)) {
    result = result.replace(new RegExp(entity, 'g'), char);
  }

  // Also handle numeric entities like &#123;
  result = result.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)));

  return result;
}

// Check if a museum entry is valid (not malformed data)
export function isValidMuseum(museum: { name: string; city: string; country: string }): boolean {
  // Filter out malformed entries
  const invalidPatterns = [
    /^collection of/i,
    /^grounds of/i,
    /^world and houses/i,
    /^its collection/i,
    /^Destroyed$/i,
  ];

  for (const pattern of invalidPatterns) {
    if (pattern.test(museum.name)) {
      return false;
    }
  }

  // Name should be reasonably short (not a full sentence)
  if (museum.name.length > 100) {
    return false;
  }

  return true;
}

// Check if a city entry is actually a country (data quality issue)
const knownCountries = [
  'US', 'USA', 'UK', 'Italy', 'France', 'Germany', 'Spain', 'Netherlands',
  'Belgium', 'Austria', 'Switzerland', 'Russia', 'Finland', 'Sweden',
  'Norway', 'Denmark', 'Poland', 'Czech Republic', 'Hungary', 'Portugal',
  'Greece', 'Ireland', 'Scotland', 'Wales', 'Japan', 'China', 'Australia',
  'Canada', 'Mexico', 'Brazil', 'Argentina', 'India'
];

export function isCountryNotCity(cityName: string): boolean {
  return knownCountries.includes(cityName);
}

// Normalize city name for grouping (handle variations)
export function normalizeCity(city: string, country: string): { city: string; country: string } {
  // If city is actually a country, mark as "Various"
  if (isCountryNotCity(city)) {
    return { city: `Various (${city})`, country: city };
  }

  // Handle Unknown
  if (city === 'Unknown' || !city) {
    return { city: 'Unknown Location', country: country || 'Unknown' };
  }

  return { city, country };
}

// Check if this is a private collection
export function isPrivateCollection(museumName: string): boolean {
  return /private collection/i.test(museumName);
}

// Get display name for private collections
export function getPrivateCollectionLabel(museumName: string): string {
  // If it's just "Private Collection", be more descriptive
  if (museumName.toLowerCase().trim() === 'private collection') {
    return 'Private Collection (Location Unknown)';
  }
  // Otherwise decode and return as-is
  return decodeHtmlEntities(museumName);
}
