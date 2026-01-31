/**
 * Sculpture category definitions for /sculptures pages.
 * Categories derived from the `medium` field on Artwork records where artworkType = "sculpture".
 */

export interface SculptureCategory {
  slug: string;
  name: string;
  description: string;
  /** Prisma `medium` field patterns to match (case-insensitive contains) */
  mediumPatterns: string[];
  /** For origin-based categories, match against artist name instead */
  artistPatterns?: string[];
}

export const SCULPTURE_CATEGORIES: SculptureCategory[] = [
  {
    slug: "bronze",
    name: "Bronze Sculptures",
    description: "Bronze has been the sculptor's preferred metal for over 5,000 years. Its durability and ability to capture fine detail made it the material of choice from Ancient Greece through Rodin and beyond.",
    mediumPatterns: ["bronze"],
  },
  {
    slug: "marble",
    name: "Marble Sculptures",
    description: "Marble sculpture reached its peak in ancient Greece and Renaissance Italy. The stone's translucency gives carved skin an almost lifelike glow that no other material can match.",
    mediumPatterns: ["marble"],
  },
  {
    slug: "terracotta",
    name: "Terracotta Sculptures",
    description: "Fired clay sculpture spans cultures from ancient Mesopotamia to Renaissance Florence. Terracotta's warmth and workability made it popular for both finished works and preparatory models.",
    mediumPatterns: ["terracotta", "terra cotta", "terra-cotta"],
  },
  {
    slug: "limestone",
    name: "Limestone Sculptures",
    description: "Limestone's softness makes it easy to carve, which is why ancient Egyptian and medieval European sculptors favored it. Many of the world's oldest surviving sculptures are limestone.",
    mediumPatterns: ["limestone"],
  },
  {
    slug: "stone",
    name: "Stone Sculptures",
    description: "Stone carving is the oldest sculptural tradition, predating civilization itself. From granite to sandstone, each type offers different textures and challenges for the sculptor.",
    mediumPatterns: ["stone", "granite", "sandstone", "basalt", "diorite", "quartzite", "schist", "steatite", "serpentine", "gneiss"],
  },
  {
    slug: "wood",
    name: "Wood Sculptures",
    description: "Wood carving appears in nearly every culture on earth. From medieval European altarpieces to African masks, wood's versatility and availability made it a universal sculptural medium.",
    mediumPatterns: ["wood", "wooden", "oak", "walnut", "cedar", "pine", "ebony", "boxwood"],
  },
  {
    slug: "ivory",
    name: "Ivory Sculptures",
    description: "Ivory carving dates back to the Paleolithic era. For centuries, its smooth, dense surface made it prized for miniature figures and relief panels. Historic works survive in museums worldwide.",
    mediumPatterns: ["ivory"],
  },
  {
    slug: "porcelain",
    name: "Porcelain Sculptures",
    description: "Porcelain sculpture emerged in China and later flourished in European factories like Meissen and Sevres. The material's whiteness and ability to hold fine detail created a distinct sculptural tradition.",
    mediumPatterns: ["porcelain", "ceramic", "faience", "stoneware"],
  },
  {
    slug: "ancient-egyptian",
    name: "Ancient Egyptian Sculptures",
    description: "Egyptian sculpture served religious and funerary purposes for over 3,000 years. Strict conventions governed proportions and poses, creating one of the most recognizable artistic traditions in history.",
    mediumPatterns: [],
    artistPatterns: ["ancient egyptian", "egyptian"],
  },
  {
    slug: "ancient-greek",
    name: "Ancient Greek Sculptures",
    description: "Greek sculptors pursued idealized human form with mathematical precision. From rigid Archaic figures to the flowing drapery of the Hellenistic period, Greek sculpture defined Western artistic standards for centuries.",
    mediumPatterns: [],
    artistPatterns: ["ancient greek", "greek"],
  },
  {
    slug: "ancient-roman",
    name: "Ancient Roman Sculptures",
    description: "Roman sculptors combined Greek idealism with unflinching realism, especially in portraiture. Their busts and public monuments documented emperors, generals, and everyday citizens with striking individuality.",
    mediumPatterns: [],
    artistPatterns: ["ancient roman", "roman"],
  },
];

/**
 * Get a category by slug
 */
export function getCategoryBySlug(slug: string): SculptureCategory | undefined {
  return SCULPTURE_CATEGORIES.find(c => c.slug === slug);
}

/**
 * Get all category slugs for static generation
 */
export function getAllCategorySlugs(): string[] {
  return SCULPTURE_CATEGORIES.map(c => c.slug);
}

/**
 * Build a Prisma where clause for a sculpture category
 */
export function buildCategoryWhereClause(category: SculptureCategory) {
  const conditions: Record<string, unknown>[] = [];

  // Medium-based matching
  if (category.mediumPatterns.length > 0) {
    conditions.push(
      ...category.mediumPatterns.map(pattern => ({
        medium: { contains: pattern, mode: "insensitive" as const },
      }))
    );
  }

  // Artist name-based matching (for ancient civilizations)
  if (category.artistPatterns && category.artistPatterns.length > 0) {
    conditions.push(
      ...category.artistPatterns.map(pattern => ({
        Artist: { name: { contains: pattern, mode: "insensitive" as const } },
      }))
    );
  }

  return {
    artworkType: "sculpture",
    OR: conditions.length > 0 ? conditions : undefined,
  };
}
