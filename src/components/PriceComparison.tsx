'use client';

import { generatePriceComparisons, type PriceComparison } from '@/lib/price-comparisons';

interface PriceComparisonProps {
  priceUsdCents: bigint;
  artworkTitle: string;
  variant?: 'card' | 'inline' | 'full';
}

function formatPrice(cents: bigint): string {
  const millions = Number(cents) / 100 / 1000000;
  if (millions >= 1) {
    return `$${millions.toFixed(millions % 1 === 0 ? 0 : 1)}M`;
  }
  return `$${(Number(cents) / 100).toLocaleString()}`;
}

export default function PriceComparisonModule({
  priceUsdCents,
  artworkTitle,
  variant = 'card'
}: PriceComparisonProps) {
  const comparisons = generatePriceComparisons(priceUsdCents);

  if (comparisons.length === 0) return null;

  if (variant === 'inline') {
    // Simple inline version for sidebars
    const top = comparisons[0];
    return (
      <p className="text-sm text-neutral-600">
        <span className="mr-1">{top.emoji}</span>
        That's {top.text}
      </p>
    );
  }

  if (variant === 'full') {
    // Full version with all comparisons for dedicated pages
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200/50">
        <h3 className="font-bold text-neutral-900 mb-1 flex items-center gap-2">
          <span className="text-xl">💰</span>
          What {formatPrice(priceUsdCents)} buys you
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          {artworkTitle} sold for enough to buy:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {comparisons.map((comparison, i) => (
            <div
              key={i}
              className="bg-white/80 rounded-lg p-3 flex items-center gap-3"
            >
              <span className="text-2xl">{comparison.emoji}</span>
              <div>
                <div className="font-semibold text-neutral-900">
                  {comparison.quantity.toLocaleString()}
                </div>
                <div className="text-sm text-neutral-600">
                  {comparison.quantity === 1 ? comparison.itemName : pluralizeDisplay(comparison.itemName)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default card version
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200/50">
      <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
        <span>💰</span>
        Price in Perspective
      </h3>
      <p className="text-sm text-neutral-600 mb-3">
        At {formatPrice(priceUsdCents)}, this equals:
      </p>
      <ul className="space-y-2">
        {comparisons.slice(0, 4).map((comparison, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <span>{comparison.emoji}</span>
            <span className="text-neutral-700">{comparison.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function pluralizeDisplay(name: string): string {
  if (name.endsWith('s') || name.endsWith('ch') || name.endsWith('x')) {
    return name + 'es';
  }
  if (name.endsWith('y') && !['a', 'e', 'i', 'o', 'u'].includes(name[name.length - 2])) {
    return name.slice(0, -1) + 'ies';
  }
  return name + 's';
}
