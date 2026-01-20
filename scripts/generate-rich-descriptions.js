/**
 * Generate Rich Artwork Descriptions with Interlinking
 *
 * Creates 150-200 word descriptions with links to:
 * - Internal: artists, museums, movements (Masterpiece Locator)
 * - External: LuxuryWallArt.com collections
 *
 * Usage:
 *   node scripts/generate-rich-descriptions.js [--limit=50] [--dry-run]
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const LIMIT = parseInt(getArg('limit')) || 50;
const DRY_RUN = args.includes('--dry-run');

// LuxuryWallArt collection mappings by subject
const LWA_COLLECTIONS = {
  portrait: { url: 'https://luxurywallart.com/collections/people-portraits', text: 'portrait wall art' },
  religious: { url: 'https://luxurywallart.com/collections/spiritual-religious', text: 'religious artwork' },
  landscape: { url: 'https://luxurywallart.com/collections/landscapes', text: 'landscape paintings' },
  coastal: { url: 'https://luxurywallart.com/collections/coastal-ocean', text: 'coastal art' },
  floral: { url: 'https://luxurywallart.com/collections/floral-nature', text: 'floral artwork' },
  animal: { url: 'https://luxurywallart.com/collections/animal-artwork', text: 'animal wall art' },
  abstract: { url: 'https://luxurywallart.com/collections/abstract', text: 'abstract paintings' },
  figurative: { url: 'https://luxurywallart.com/collections/figurative', text: 'figurative art' },
  mythology: { url: 'https://luxurywallart.com/collections/fantasy', text: 'mythological artwork' },
  stillLife: { url: 'https://luxurywallart.com/collections/floral-nature', text: 'still life paintings' }
};

/**
 * Analyze artwork for subject classification
 */
function classifySubject(title, medium) {
  const text = `${title} ${medium || ''}`.toLowerCase();

  if (/portrait|self-portrait|likeness|head of|bust of/.test(text)) return 'portrait';
  if (/christ|madonna|virgin|saint|holy|crucifixion|biblical|angel|apostle/.test(text)) return 'religious';
  if (/landscape|view|countryside|river|mountain|forest|valley|sunset|field/.test(text)) return 'landscape';
  if (/sea|ocean|coast|beach|marine|ship|boat|harbor/.test(text)) return 'coastal';
  if (/flower|floral|rose|lily|tulip|bouquet|garden/.test(text)) return 'floral';
  if (/horse|dog|cat|lion|bird|animal|hunt/.test(text)) return 'animal';
  if (/abstract|composition|untitled/.test(text)) return 'abstract';
  if (/nude|bather|figure|woman|man\b/.test(text)) return 'figurative';
  if (/venus|apollo|diana|cupid|myth|goddess|nymph/.test(text)) return 'mythology';
  if (/still life|fruit|vase|table|vanitas|shells/.test(text)) return 'stillLife';

  return null;
}

/**
 * Get period and style context
 */
function getPeriodContext(year, movements) {
  if (!year && (!movements || movements.length === 0)) return null;

  let period = '';
  if (year) {
    if (year < 1500) period = 'Renaissance';
    else if (year < 1600) period = 'High Renaissance and Mannerist';
    else if (year < 1700) period = 'Baroque';
    else if (year < 1800) period = 'Rococo and Neoclassical';
    else if (year < 1850) period = 'Romantic';
    else if (year < 1880) period = 'Realist';
    else if (year < 1920) period = 'Impressionist and Modern';
    else period = 'Modern and Contemporary';
  }

  if (movements && movements.length > 0) {
    return movements[0].name;
  }

  return period;
}

/**
 * Generate internal link HTML
 */
function internalLink(text, type, slug) {
  return `<a href="/${type}/${slug}">${text}</a>`;
}

/**
 * Generate external LWA link HTML
 */
function externalLink(collection) {
  return `<a href="${collection.url}" target="_blank" rel="noopener">${collection.text}</a>`;
}

/**
 * Generate rich description with links
 */
function generateRichDescription(artwork, artist, museum, movements) {
  const paragraphs = [];
  const artistName = artist?.name || 'The artist';
  const artistLink = artist?.slug ? internalLink(artistName, 'artist', artist.slug) : artistName;
  const subject = classifySubject(artwork.title, artwork.medium);
  const period = getPeriodContext(artwork.year, movements);

  // === PARAGRAPH 1: Introduction with artist and date context ===
  let intro = '';

  if (artwork.year && artwork.medium) {
    const yearContext = artwork.year < 1800
      ? `In ${artwork.year}, ${artistLink} created this remarkable ${artwork.medium.toLowerCase()} painting that`
      : `Created in ${artwork.year}, this ${artwork.medium.toLowerCase()} work by ${artistLink}`;
    intro = yearContext;
  } else if (artwork.year) {
    intro = `Dating to ${artwork.year}, this painting by ${artistLink}`;
  } else {
    intro = `This work by ${artistLink}`;
  }

  // Add period/movement context
  if (period && movements && movements.length > 0) {
    const movementLink = internalLink(movements[0].name, 'movement', movements[0].slug);
    intro += ` exemplifies the ${movementLink} movement, which transformed the artistic landscape of its era.`;
  } else if (period) {
    intro += ` reflects the artistic concerns of the ${period} period, capturing the visual language of its time.`;
  } else {
    intro += ` demonstrates the artist's distinctive approach to painting and keen artistic sensibility.`;
  }

  // Add a sentence about the artist's broader significance
  if (artist?.nationality) {
    intro += ` As a ${artist.nationality} artist, ${artistName} brought unique cultural perspectives to their work.`;
  }

  paragraphs.push(intro);

  // === PARAGRAPH 2: Subject matter and artistic approach ===
  let subjectPara = '';

  const titleClean = artwork.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

  if (subject === 'portrait') {
    subjectPara = `The portrait reveals ${artistName}'s ability to capture not just physical likeness but psychological presence. Through careful attention to expression and posture, the artist creates a sense of the subject's inner life. The handling of light and shadow adds depth and dimension to the figure.`;
  } else if (subject === 'religious') {
    subjectPara = `The religious subject matter connects this work to centuries of devotional art tradition. ${artistName} brings a personal interpretation to the sacred narrative, balancing reverence with artistic innovation. The composition guides the viewer's contemplation through carefully considered visual elements.`;
  } else if (subject === 'landscape') {
    subjectPara = `The landscape composition captures both the physical character of the location and an atmospheric mood. ${artistName} demonstrates a sensitivity to natural light and the subtle variations of sky, land, and vegetation. The work invites viewers to experience a sense of place and moment.`;
  } else if (subject === 'mythology') {
    subjectPara = `Drawing on classical mythology, ${artistName} engages with humanist themes that resonated with educated audiences of the time. The mythological subject provided opportunity to explore idealized forms and dramatic narrative. Ancient stories offered a framework for addressing timeless human concerns.`;
  } else if (subject === 'stillLife') {
    subjectPara = `The still life arrangement transforms ordinary objects into subjects for artistic contemplation. ${artistName} demonstrates mastery of texture, light, and spatial relationships. Such compositions often carried symbolic meanings about transience and the passage of time.`;
  } else if (subject === 'figurative') {
    subjectPara = `The figure study demonstrates ${artistName}'s understanding of human anatomy and form. Through careful observation, the artist captures both the physical structure and the expressive potential of the body. Light and shadow model the figure with sculptural presence.`;
  } else {
    subjectPara = `The composition demonstrates ${artistName}'s command of visual elements including color, form, and spatial arrangement. Each element contributes to a unified whole that rewards close looking. The work reflects both technical accomplishment and artistic vision.`;
  }

  paragraphs.push(subjectPara);

  // === PARAGRAPH 3: Museum location and viewing context ===
  let locationPara = '';

  if (museum) {
    const museumLink = internalLink(museum.name, 'museum', museum.slug);
    const cityRef = museum.city ? ` in ${museum.city}` : '';
    locationPara = `Today, this painting resides in the permanent collection of ${museumLink}${cityRef}, where visitors can experience its presence firsthand. Seeing the work in person reveals details of brushwork, scale, and color that reproductions cannot fully convey. The museum's collection provides important context for understanding this piece alongside other significant works from the same period and artistic tradition.`;
  }

  // Add LWA collection link if relevant subject
  if (subject && LWA_COLLECTIONS[subject]) {
    const lwaLink = externalLink(LWA_COLLECTIONS[subject]);
    if (locationPara) {
      locationPara += ` For collectors and art enthusiasts inspired to bring similar aesthetics into their own spaces, ${lwaLink} offers high-quality contemporary interpretations of this enduring artistic tradition.`;
    } else {
      locationPara = `The artistic tradition represented by this work continues to inspire contemporary artists and collectors around the world. The themes and aesthetic sensibilities explored here remain relevant to modern audiences. Explore ${lwaLink} for carefully curated modern interpretations that bring this timeless aesthetic into living spaces and home decor.`;
    }
  }

  if (locationPara) {
    paragraphs.push(locationPara);
  } else {
    // Fallback paragraph if no museum or LWA link
    paragraphs.push(`This work represents an important contribution to the artist's body of work and to the broader history of Western painting. The themes and techniques demonstrated here influenced subsequent generations of artists and continue to resonate with contemporary viewers.`);
  }

  // === PARAGRAPH 4: Artist context (if we have bio info) ===
  if (artist?.nationality && artist?.birthYear) {
    const lifespan = artist.deathYear
      ? `(${artist.birthYear}-${artist.deathYear})`
      : `(born ${artist.birthYear})`;

    let artistPara = `${artistName} ${lifespan} was a ${artist.nationality} artist`;

    if (movements && movements.length > 0) {
      const movementNames = movements.slice(0, 2).map(m => m.name).join(' and ');
      artistPara += ` associated with ${movementNames}.`;
    } else {
      artistPara += ` whose work contributed significantly to the art of the period.`;
    }

    artistPara += ` The ${artistLink.includes('<a') ? 'artist' : artistName}'s body of work demonstrates consistent themes and evolving technique across their career.`;

    paragraphs.push(artistPara);
  }

  return paragraphs.join('\n\n');
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('GENERATE RICH DESCRIPTIONS WITH INTERLINKING');
  console.log(DRY_RUN ? '(DRY RUN - No changes will be made)' : '');
  console.log('='.repeat(70));

  // Get artworks - prioritize those with short descriptions
  const artworks = await prisma.artwork.findMany({
    where: {
      Artist: { isNot: null },
      OR: [
        { description: null },
        { description: { not: { contains: '<a href' } } } // No links yet
      ]
    },
    take: LIMIT,
    orderBy: { searchVolumeTier: 'asc' },
    include: {
      Artist: {
        include: { Movement: true }
      },
      Museum: true
    }
  });

  console.log(`\nFound ${artworks.length} artworks to process\n`);

  let updated = 0;
  let skipped = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const artist = artwork.Artist;
    const museum = artwork.Museum;
    const movements = artist?.Movement || [];

    console.log(`[${i + 1}/${artworks.length}] ${artwork.title}`);
    console.log(`    Artist: ${artist?.name || 'Unknown'}`);
    console.log(`    Museum: ${museum?.name || 'None'}`);
    console.log(`    Movements: ${movements.map(m => m.name).join(', ') || 'None'}`);

    const description = generateRichDescription(artwork, artist, museum, movements);
    const wordCount = description.split(/\s+/).length;
    const hasLinks = description.includes('<a href');

    console.log(`    ✓ Generated: ${wordCount} words, ${hasLinks ? 'with links' : 'no links'}`);

    if (DRY_RUN) {
      console.log(`    [DRY RUN] Preview:`);
      console.log(`    ${description.substring(0, 200).replace(/\n/g, ' ')}...`);
    } else {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          description,
          updatedAt: new Date()
        }
      });
    }

    updated++;
    console.log('');
  }

  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Processed: ${artworks.length}`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);

  if (DRY_RUN) {
    console.log('\nThis was a dry run. Run without --dry-run to save changes.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
