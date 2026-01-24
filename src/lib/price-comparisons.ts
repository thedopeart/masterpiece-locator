// Price comparison data - what things cost (in USD)
// Sources: Various 2024 estimates, rounded for clarity

interface ComparisonItem {
  name: string;
  price: number; // in USD
  emoji: string;
  category: 'vehicle' | 'property' | 'luxury' | 'experience' | 'other';
}

const COMPARISON_ITEMS: ComparisonItem[] = [
  // Vehicles
  { name: 'Boeing 747', price: 418_000_000, emoji: '✈️', category: 'vehicle' },
  { name: 'Boeing 737', price: 100_000_000, emoji: '✈️', category: 'vehicle' },
  { name: 'Gulfstream G700 private jet', price: 78_000_000, emoji: '🛩️', category: 'vehicle' },
  { name: 'superyacht', price: 50_000_000, emoji: '🛥️', category: 'vehicle' },
  { name: 'Bugatti Chiron', price: 3_000_000, emoji: '🏎️', category: 'vehicle' },
  { name: 'Ferrari SF90', price: 500_000, emoji: '🏎️', category: 'vehicle' },
  { name: 'Tesla Model S', price: 90_000, emoji: '🚗', category: 'vehicle' },
  { name: 'average new car', price: 48_000, emoji: '🚗', category: 'vehicle' },

  // Property
  { name: 'Manhattan penthouse', price: 50_000_000, emoji: '🏙️', category: 'property' },
  { name: 'Beverly Hills mansion', price: 30_000_000, emoji: '🏠', category: 'property' },
  { name: 'average US home', price: 420_000, emoji: '🏡', category: 'property' },
  { name: 'private island', price: 15_000_000, emoji: '🏝️', category: 'property' },

  // Luxury items
  { name: 'Patek Philippe Grandmaster Chime watch', price: 31_000_000, emoji: '⌚', category: 'luxury' },
  { name: 'Hope Diamond', price: 250_000_000, emoji: '💎', category: 'luxury' },
  { name: 'Rolex Daytona', price: 50_000, emoji: '⌚', category: 'luxury' },
  { name: 'Hermès Birkin bag', price: 12_000, emoji: '👜', category: 'luxury' },

  // Experiences & Services
  { name: 'Super Bowl ad (30 sec)', price: 7_000_000, emoji: '📺', category: 'experience' },
  { name: 'trip to space (Virgin Galactic)', price: 450_000, emoji: '🚀', category: 'experience' },
  { name: 'year at Harvard', price: 80_000, emoji: '🎓', category: 'experience' },
  { name: 'round-the-world cruise', price: 50_000, emoji: '🚢', category: 'experience' },

  // Other fun comparisons
  { name: 'NBA team average value', price: 3_000_000_000, emoji: '🏀', category: 'other' },
  { name: 'NFL team average value', price: 4_500_000_000, emoji: '🏈', category: 'other' },
  { name: 'iPhone 15 Pro', price: 1_200, emoji: '📱', category: 'other' },
  { name: 'Big Mac', price: 5.50, emoji: '🍔', category: 'other' },
  { name: 'cup of coffee', price: 5, emoji: '☕', category: 'other' },
];

export interface PriceComparison {
  text: string;
  emoji: string;
  quantity: number;
  itemName: string;
}

/**
 * Generate fun price comparisons for an artwork price
 * @param priceUsdCents - Price in USD cents (as stored in database)
 * @returns Array of comparison objects
 */
export function generatePriceComparisons(priceUsdCents: bigint): PriceComparison[] {
  const priceUsd = Number(priceUsdCents) / 100;
  const comparisons: PriceComparison[] = [];

  // Find good comparisons (where quantity is between 1 and 10000)
  for (const item of COMPARISON_ITEMS) {
    const quantity = Math.floor(priceUsd / item.price);

    if (quantity >= 1 && quantity <= 50000) {
      // Format the quantity nicely
      const formattedQty = quantity >= 1000
        ? `${(quantity / 1000).toFixed(1).replace(/\.0$/, '')}K`
        : quantity.toLocaleString();

      comparisons.push({
        text: `${formattedQty} ${quantity === 1 ? item.name : pluralize(item.name)}`,
        emoji: item.emoji,
        quantity,
        itemName: item.name,
      });
    }
  }

  // Sort by most interesting (prefer quantities between 2-100)
  comparisons.sort((a, b) => {
    const scoreA = getInterestScore(a.quantity);
    const scoreB = getInterestScore(b.quantity);
    return scoreB - scoreA;
  });

  // Return top 4-5 most interesting comparisons
  return comparisons.slice(0, 5);
}

function getInterestScore(quantity: number): number {
  // Prefer round numbers and quantities that are easy to visualize
  if (quantity >= 2 && quantity <= 10) return 100;
  if (quantity >= 10 && quantity <= 100) return 80;
  if (quantity >= 100 && quantity <= 1000) return 60;
  if (quantity === 1) return 50; // "More than a Boeing 747" is still interesting
  return 40;
}

function pluralize(name: string): string {
  // Simple pluralization for our comparison items
  if (name.endsWith('s') || name.endsWith('ch') || name.endsWith('x')) {
    return name + 'es';
  }
  if (name.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(name[name.length - 2])) {
    return name.slice(0, -1) + 'ies';
  }
  return name + 's';
}

/**
 * Format a single headline comparison for sharing
 */
export function getHeadlineComparison(priceUsdCents: bigint, artworkTitle: string): string {
  const priceUsd = Number(priceUsdCents) / 100;
  const priceM = (priceUsd / 1_000_000).toFixed(0);

  // Find the most impressive single comparison
  const boeing747 = Math.floor(priceUsd / 418_000_000);
  if (boeing747 >= 1) {
    return `At $${priceM}M, ${artworkTitle} sold for more than ${boeing747} Boeing 747${boeing747 > 1 ? 's' : ''}`;
  }

  const privateJets = Math.floor(priceUsd / 78_000_000);
  if (privateJets >= 2) {
    return `At $${priceM}M, ${artworkTitle} cost more than ${privateJets} private jets`;
  }

  const superyachts = Math.floor(priceUsd / 50_000_000);
  if (superyachts >= 2) {
    return `At $${priceM}M, ${artworkTitle} cost more than ${superyachts} superyachts`;
  }

  const homes = Math.floor(priceUsd / 420_000);
  return `At $${priceM}M, ${artworkTitle} cost as much as ${homes.toLocaleString()} average US homes`;
}
