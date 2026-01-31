const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== FIXING T3 SCULPTURE LINKS ===\n');

  // STEP 1: Fix old-format links (/artist/ → /apps/masterpieces/artist/, etc.)
  const oldFormat = await prisma.artwork.findMany({
    where: {
      artworkType: 'sculpture',
      searchVolumeTier: 3,
      OR: [
        { description: { contains: 'href="/artist/' } },
        { description: { contains: 'href="/museum/' } },
        { description: { contains: 'href="/movement/' } },
        { description: { contains: 'href="/artwork/' } }
      ]
    },
    select: { slug: true, description: true }
  });

  let fixedCount = 0;
  for (const s of oldFormat) {
    let desc = s.description;
    desc = desc.replace(/href="\/artist\//g, 'href="/apps/masterpieces/artist/');
    desc = desc.replace(/href="\/museum\//g, 'href="/apps/masterpieces/museum/');
    desc = desc.replace(/href="\/movement\//g, 'href="/apps/masterpieces/movement/');
    desc = desc.replace(/href="\/artwork\//g, 'href="/apps/masterpieces/art/');
    if (desc !== s.description) {
      await prisma.artwork.update({
        where: { slug: s.slug },
        data: { description: desc, updatedAt: new Date() }
      });
      fixedCount++;
    }
  }
  console.log(`✓ Fixed old-format links on ${fixedCount} sculptures\n`);

  // STEP 2: Add artist links for sculptures with known culture-artists that have no artist link
  // These sculptures have descriptions but no link to their artist page
  const artistMap = {
    'ancient-egyptian': { name: 'Ancient Egyptian', linkText: 'Ancient Egyptian' },
    'ancient-greek': { name: 'Ancient Greek', linkText: 'Ancient Greek' },
    'ancient-roman': { name: 'Ancient Roman', linkText: 'Ancient Roman' },
    'auguste-rodin': { name: 'Auguste Rodin', linkText: 'Rodin' },
    'alexander-calder': { name: 'Alexander Calder', linkText: 'Calder' },
    'ancient-assyrian': { name: 'Ancient Assyrian', linkText: 'Assyrian' },
    'ancient-celtic': { name: 'Ancient Celtic', linkText: 'Celtic' },
    'ancient-ife': { name: 'Ancient Ife', linkText: 'Ife' },
    'ancient-chinese': { name: 'Ancient Chinese', linkText: 'Chinese' },
    'ancient-benin': { name: 'Ancient Benin', linkText: 'Benin' },
    'ancient-aztec': { name: 'Ancient Aztec', linkText: 'Aztec' },
    'ancient-japanese': { name: 'Ancient Japanese', linkText: 'Japanese' },
    'ancient-olmec': { name: 'Ancient Olmec', linkText: 'Olmec' },
    'ancient-kongo': { name: 'Ancient Kongo', linkText: 'Kongo' },
    'ancient-maya': { name: 'Ancient Maya', linkText: 'Maya' },
    'ancient-nok': { name: 'Ancient Nok', linkText: 'Nok' },
    'ancient-moche': { name: 'Ancient Moche', linkText: 'Moche' },
    'ancient-persian': { name: 'Ancient Persian', linkText: 'Persian' },
    'ancient-mesopotamian': { name: 'Ancient Mesopotamian', linkText: 'Mesopotamian' },
    'ancient-muisca': { name: 'Ancient Muisca', linkText: 'Muisca' },
    'ancient-polynesian': { name: 'Ancient Polynesian', linkText: 'Polynesian' },
  };

  // Get all T3 sculptures with known artists that lack artist links
  const needsLink = await prisma.artwork.findMany({
    where: {
      artworkType: 'sculpture',
      searchVolumeTier: 3,
      artistId: { not: null },
      NOT: [
        { description: { contains: '/apps/masterpieces/artist' } }
      ]
    },
    select: { slug: true, title: true, description: true, Artist: { select: { slug: true, name: true } } }
  });

  let addedCount = 0;
  for (const s of needsLink) {
    if (!s.description || !s.Artist) continue;
    const artistSlug = s.Artist.slug;
    const config = artistMap[artistSlug];
    if (!config) continue;

    let desc = s.description;
    const artistLink = `<a href="/apps/masterpieces/artist/${artistSlug}"><strong>${config.linkText}</strong></a>`;

    // Strategy: Find the first mention of the artist name or culture name and wrap it
    // Try multiple patterns
    const patterns = [
      // Full name with "by" prefix
      new RegExp(`by\\s+<strong>${escapeRegex(s.Artist.name)}</strong>`),
      new RegExp(`by\\s+${escapeRegex(s.Artist.name)}`),
      // Full name bold
      new RegExp(`<strong>${escapeRegex(s.Artist.name)}</strong>`),
      // Full name plain
      new RegExp(escapeRegex(s.Artist.name)),
      // For "Ancient X (Unknown)" artists, try just "Ancient X"
      new RegExp(`<strong>${escapeRegex(s.Artist.name.replace(' (Unknown)', ''))}</strong>`),
      new RegExp(escapeRegex(s.Artist.name.replace(' (Unknown)', ''))),
      // Try link text only
      new RegExp(`<strong>${escapeRegex(config.linkText)}</strong>`),
      new RegExp(`\\b${escapeRegex(config.linkText)}\\b`),
    ];

    let replaced = false;
    for (const pattern of patterns) {
      if (pattern.test(desc)) {
        const match = desc.match(pattern)[0];
        // Don't replace if already inside an <a> tag
        const idx = desc.indexOf(match);
        const before = desc.substring(Math.max(0, idx - 50), idx);
        if (before.includes('<a ') && !before.includes('</a>')) continue;

        desc = desc.replace(pattern, artistLink);
        replaced = true;
        break;
      }
    }

    // If no text match found, prepend artist link to first paragraph
    if (!replaced) {
      const firstPTag = '<p>';
      const insertAfter = desc.indexOf(firstPTag);
      if (insertAfter !== -1) {
        desc = desc.substring(0, insertAfter + firstPTag.length) +
          `${artistLink} ` +
          desc.substring(insertAfter + firstPTag.length);
        // Lowercase the next character if it was uppercase (to flow grammatically)
        replaced = true;
      }
    }

    if (replaced && desc !== s.description) {
      await prisma.artwork.update({
        where: { slug: s.slug },
        data: { description: desc, updatedAt: new Date() }
      });
      addedCount++;
    }
  }
  console.log(`✓ Added artist links to ${addedCount} sculptures`);

  console.log('\n=== DONE ===');
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
