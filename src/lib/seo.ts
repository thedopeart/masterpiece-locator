/**
 * SEO utility functions for meta title and description generation
 *
 * Limits:
 * - Meta titles: 60 characters max
 * - Meta descriptions: 160 characters max
 */

const META_TITLE_LIMIT = 60;
const META_DESCRIPTION_LIMIT = 160;

/**
 * Truncates a string to a maximum length, adding ellipsis if needed.
 * Tries to break at word boundaries for cleaner results.
 */
function truncateAtWord(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;

  // Find the last space before the limit
  const truncated = text.slice(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(" ");

  // If we found a space and it's not too far back, break there
  if (lastSpace > maxLength * 0.6) {
    return truncated.slice(0, lastSpace);
  }

  // Otherwise just hard truncate
  return truncated;
}

/**
 * Creates a meta title within the 60 character limit.
 * Removes trailing punctuation if truncated.
 */
export function createMetaTitle(title: string): string {
  if (title.length <= META_TITLE_LIMIT) return title;

  let truncated = truncateAtWord(title, META_TITLE_LIMIT);

  // Clean up trailing punctuation that looks awkward
  truncated = truncated.replace(/[,;:\-–—&]$/, "").trim();

  return truncated;
}

/**
 * Creates a meta description within the 160 character limit.
 * Tries to end at a sentence or phrase boundary.
 */
export function createMetaDescription(description: string): string {
  if (description.length <= META_DESCRIPTION_LIMIT) return description;

  let truncated = truncateAtWord(description, META_DESCRIPTION_LIMIT);

  // Try to end at a sentence if possible
  const lastPeriod = truncated.lastIndexOf(".");
  const lastQuestion = truncated.lastIndexOf("?");
  const lastSentenceEnd = Math.max(lastPeriod, lastQuestion);

  // If we have a sentence end in the last 40% of the text, use it
  if (lastSentenceEnd > META_DESCRIPTION_LIMIT * 0.6) {
    return truncated.slice(0, lastSentenceEnd + 1);
  }

  // Clean up trailing punctuation
  truncated = truncated.replace(/[,;:\-–—&]$/, "").trim();

  return truncated;
}

/**
 * Artwork page meta title generator
 * Format: "Where Is {Title}? See It at {Museum}" (60 char limit)
 */
export function artworkMetaTitle(title: string, museum: string | null): string {
  // Try full format first
  const fullTitle = `Where Is ${title}? See It at ${museum || "This Museum"}`;
  if (fullTitle.length <= META_TITLE_LIMIT) return fullTitle;

  // Try shorter museum reference
  const shortMuseum = `Where Is ${title}? Museum Location`;
  if (shortMuseum.length <= META_TITLE_LIMIT) return shortMuseum;

  // Just the question
  const questionOnly = `Where Is ${title}?`;
  if (questionOnly.length <= META_TITLE_LIMIT) return questionOnly;

  // Truncate the artwork title itself
  return createMetaTitle(`Where Is ${title}?`);
}

/**
 * Artwork page meta description generator
 * Format: "{Title} by {Artist} is at {Museum} in {City}. Gallery location, visiting hours, tickets & nearby masterpieces."
 */
export function artworkMetaDescription(
  title: string,
  artist: string | null,
  museum: string | null,
  city: string | null
): string {
  const artistPart = artist ? ` by ${artist}` : "";
  const locationPart = museum
    ? ` is at ${museum}${city ? ` in ${city}` : ""}`
    : "";

  const fullDesc = `${title}${artistPart}${locationPart}. Gallery location, visiting hours, tickets & nearby masterpieces.`;

  return createMetaDescription(fullDesc);
}

/**
 * Artist page meta title generator
 * Format: "{Name} Paintings: {X} Works at {Y} Museums" (60 char limit)
 */
export function artistMetaTitle(
  name: string,
  artworkCount: number,
  museumCount: number,
  lifespan?: string
): string {
  // Try full format
  if (museumCount > 0) {
    const fullTitle = `${name} Paintings: ${artworkCount} Works at ${museumCount} Museums`;
    if (fullTitle.length <= META_TITLE_LIMIT) return fullTitle;

    // Shorter version
    const shorter = `${name}: ${artworkCount} Paintings at ${museumCount} Museums`;
    if (shorter.length <= META_TITLE_LIMIT) return shorter;
  }

  // Fallback with lifespan
  const withLifespan = lifespan ? `${name} ${lifespan} Paintings & Art` : `${name} Paintings & Art`;
  if (withLifespan.length <= META_TITLE_LIMIT) return withLifespan;

  // Just name + paintings
  const simple = `${name} Paintings`;
  if (simple.length <= META_TITLE_LIMIT) return simple;

  return createMetaTitle(name);
}

/**
 * Artist page meta description generator
 */
export function artistMetaDescription(
  name: string,
  artworkCount: number,
  museumCount: number,
  topMuseum: string | null,
  notableWork: string | null,
  bioShort: string | null
): string {
  if (artworkCount > 0 && museumCount > 0) {
    let desc = `See ${name}'s paintings in person. ${artworkCount} works across ${museumCount} museums`;

    if (topMuseum) {
      desc += ` including ${topMuseum}`;
    }

    if (notableWork) {
      desc += `. Famous works: ${notableWork}`;
    } else {
      desc += ".";
    }

    return createMetaDescription(desc);
  }

  if (bioShort) {
    return createMetaDescription(bioShort);
  }

  return createMetaDescription(`Where to see ${name}'s art. Museum locations and famous paintings.`);
}

/**
 * Museum page meta title generator
 * Format: "{Museum} Famous Paintings: {X} Masterpieces to See" (60 char limit)
 */
export function museumMetaTitle(name: string, artworkCount: number): string {
  // Try full format
  const fullTitle = `${name} Famous Paintings: ${artworkCount} Masterpieces to See`;
  if (fullTitle.length <= META_TITLE_LIMIT) return fullTitle;

  // Shorter version
  const shorter = `${name}: ${artworkCount} Famous Paintings`;
  if (shorter.length <= META_TITLE_LIMIT) return shorter;

  // Just count
  const simple = `${name} Paintings`;
  if (simple.length <= META_TITLE_LIMIT) return simple;

  return createMetaTitle(name);
}

/**
 * Museum page meta description generator
 */
export function museumMetaDescription(
  name: string,
  city: string,
  artworkCount: number,
  topArtists: string[],
  topWorks: string[]
): string {
  let desc: string;

  if (topWorks.length >= 1) {
    const artistsPart = topArtists.length > 0 ? ` by ${topArtists.join(", ")}` : "";
    desc = `What to see at ${name} in ${city}. ${artworkCount} famous paintings${artistsPart}. Tickets, hours & visitor tips.`;
  } else {
    desc = `Visit ${name} in ${city}. Famous paintings collection, tickets, hours & visitor guide.`;
  }

  return createMetaDescription(desc);
}

/**
 * City page meta title generator
 * Format: "Art Museums in {City}: {X} Museums & {Y} Paintings" (60 char limit)
 */
export function cityMetaTitle(
  cityName: string,
  museumCount: number,
  artworkCount: number
): string {
  // Try full format
  const fullTitle = `Art Museums in ${cityName}: ${museumCount} Museums & ${artworkCount} Paintings`;
  if (fullTitle.length <= META_TITLE_LIMIT) return fullTitle;

  // Shorter version
  const shorter = `Art Museums in ${cityName}: ${museumCount} Museums`;
  if (shorter.length <= META_TITLE_LIMIT) return shorter;

  // Simplest
  const simple = `Art Museums in ${cityName}`;
  if (simple.length <= META_TITLE_LIMIT) return simple;

  return createMetaTitle(`${cityName} Art Museums`);
}

/**
 * City page meta description generator
 */
export function cityMetaDescription(
  cityName: string,
  museumCount: number,
  artworkCount: number,
  topMuseum: string | null
): string {
  let desc = `Best art museums in ${cityName}. See ${artworkCount} famous paintings across ${museumCount} museums`;

  if (topMuseum) {
    desc += ` including ${topMuseum}`;
  }

  desc += ". Plan your visit.";

  return createMetaDescription(desc);
}

/**
 * Era page meta title generator
 * Format: "{Era} Art: {X} Movements & {Y} Artists to Discover" (60 char limit)
 */
export function eraMetaTitle(
  eraName: string,
  movementCount: number,
  artistCount: number
): string {
  // Try full format
  const fullTitle = `${eraName}: ${movementCount} Movements & ${artistCount} Artists to Discover`;
  if (fullTitle.length <= META_TITLE_LIMIT) return fullTitle;

  // Shorter version
  const shorter = `${eraName}: ${artistCount} Artists & Famous Paintings`;
  if (shorter.length <= META_TITLE_LIMIT) return shorter;

  // Simplest
  const simple = `${eraName} Paintings & Artists`;
  if (simple.length <= META_TITLE_LIMIT) return simple;

  return createMetaTitle(`${eraName} Art`);
}

/**
 * Era page meta description generator
 */
export function eraMetaDescription(
  eraName: string,
  dateRange: string,
  movementCount: number,
  artistCount: number,
  topMovements: string[],
  topArtists: string[]
): string {
  let desc = `Explore ${eraName} (${dateRange}). `;

  if (topMovements.length > 0) {
    desc += `${movementCount} movements including ${topMovements.slice(0, 3).join(", ")}. `;
  }

  if (topArtists.length > 0) {
    desc += `See works by ${topArtists.slice(0, 3).join(", ")} and ${artistCount} more artists.`;
  } else {
    desc += `Discover ${artistCount} artists and their masterpieces in museums worldwide.`;
  }

  return createMetaDescription(desc);
}

/**
 * Movement page meta title generator
 * Format: "{Movement}: {X} Artists & Famous Paintings" (60 char limit)
 */
export function movementMetaTitle(
  movementName: string,
  artistCount: number
): string {
  // Try full format
  const fullTitle = `${movementName}: ${artistCount} Artists & Famous Paintings`;
  if (fullTitle.length <= META_TITLE_LIMIT) return fullTitle;

  // Shorter version
  const shorter = `${movementName} Art: ${artistCount} Artists`;
  if (shorter.length <= META_TITLE_LIMIT) return shorter;

  // Simplest
  const simple = `${movementName} Paintings`;
  if (simple.length <= META_TITLE_LIMIT) return simple;

  return createMetaTitle(movementName);
}

/**
 * Movement page meta description generator
 */
export function movementMetaDescription(
  movementName: string,
  dateRange: string,
  artistCount: number,
  topArtists: string[],
  characteristics: string[]
): string {
  let desc = `${movementName} (${dateRange}). `;

  if (topArtists.length > 0) {
    desc += `See works by ${topArtists.slice(0, 3).join(", ")}`;
    if (artistCount > 3) {
      desc += ` and ${artistCount - 3} more artists`;
    }
    desc += ". ";
  }

  if (characteristics.length > 0) {
    desc += `Known for ${characteristics.slice(0, 2).join(" and ").toLowerCase()}.`;
  }

  return createMetaDescription(desc);
}
