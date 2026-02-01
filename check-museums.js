const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

p.museum.findMany({
  select: {
    slug: true, name: true, city: true, country: true,
    address: true, latitude: true, longitude: true,
    websiteUrl: true, ticketUrl: true, ticketPriceRange: true,
    hoursOfOperation: true,
    _count: { select: { Artwork: true } }
  },
  orderBy: { name: 'asc' }
}).then(museums => {
  const real = museums.filter(m => m.slug !== 'private-collection');

  const isFullyEnriched = m => !!(m.address && m.latitude && m.longitude && m.websiteUrl && m.ticketPriceRange && m.hoursOfOperation && JSON.stringify(m.hoursOfOperation) !== '{}');
  const hasEssentials = m => !!(m.address && m.latitude && m.longitude && m.websiteUrl && m.ticketPriceRange);
  const hasBasic = m => !!(m.address && m.latitude && m.longitude && m.websiteUrl);

  // Tier 1: 10+ artworks (premium)
  const tier1 = real.filter(m => m._count.Artwork >= 10).sort((a, b) => b._count.Artwork - a._count.Artwork);
  // Tier 2: 2-9 artworks (essential)
  const tier2 = real.filter(m => m._count.Artwork >= 2 && m._count.Artwork < 10).sort((a, b) => b._count.Artwork - a._count.Artwork);
  // Tier 3: 1 artwork (basic)
  const tier3 = real.filter(m => m._count.Artwork === 1);

  console.log('=== TIER 1: PREMIUM (10+ artworks) ===');
  console.log('Total:', tier1.length);
  console.log('Already fully enriched:', tier1.filter(isFullyEnriched).length);
  console.log('Need work:', tier1.filter(m => !isFullyEnriched(m)).length);
  console.log('\nNeed work:');
  tier1.filter(m => !isFullyEnriched(m)).forEach(m => {
    const missing = [];
    if (!m.address) missing.push('addr');
    if (!m.latitude || !m.longitude) missing.push('coords');
    if (!m.websiteUrl) missing.push('web');
    if (!m.ticketPriceRange) missing.push('price');
    if (!m.hoursOfOperation || JSON.stringify(m.hoursOfOperation) === '{}') missing.push('hours');
    console.log(`  [${m._count.Artwork}] ${m.name} | ${m.city}, ${m.country} | missing: ${missing.join(', ')}`);
  });

  console.log('\n=== TIER 2: ESSENTIAL (2-9 artworks) ===');
  console.log('Total:', tier2.length);
  console.log('Already has essentials:', tier2.filter(hasEssentials).length);
  console.log('Need work:', tier2.filter(m => !hasEssentials(m)).length);

  console.log('\n=== TIER 3: BASIC (1 artwork) ===');
  console.log('Total:', tier3.length);
  console.log('Already has basics:', tier3.filter(hasBasic).length);
  console.log('Need work:', tier3.filter(m => !hasBasic(m)).length);

  // Also check: important museums with few artworks in our DB
  // (we still need these enriched per user's instructions)
  const importantSmall = tier2.concat(tier3).filter(m => {
    const n = m.name.toLowerCase();
    return n.includes('national') || n.includes('metropolitan') || n.includes('modern') ||
           n.includes('royal') || n.includes('gallery') || n.includes('palazzo') ||
           n.includes('basilica') || n.includes('cathedral') || n.includes('château');
  });
  console.log('\n=== "IMPORTANT" SMALL MUSEUMS (by name pattern) ===');
  console.log('Total matching:', importantSmall.length);

  p.$disconnect();
}).catch(e => { console.error(e); p.$disconnect(); });
