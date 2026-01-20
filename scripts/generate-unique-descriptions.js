/**
 * Generate Unique Artwork Descriptions with Wikipedia + Metadata Fallback
 *
 * Strategy:
 * 1. Try Wikipedia first for real content to synthesize from
 * 2. Fall back to metadata (artist, style, period, subject, museum) if not found
 * 3. All descriptions are UNIQUE - never copied verbatim
 * 4. Bold font for all interlinks
 * 5. Target 150-200 words
 *
 * Usage:
 *   node scripts/generate-unique-descriptions.js [--limit=50] [--dry-run]
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
 * Generate BOLD internal link HTML
 */
function internalLink(text, type, slug) {
  return `<a href="/${type}/${slug}"><strong>${text}</strong></a>`;
}

/**
 * Generate BOLD external LWA link HTML
 */
function externalLink(collection) {
  return `<a href="${collection.url}" target="_blank" rel="noopener"><strong>${collection.text}</strong></a>`;
}

/**
 * Classify artwork subject from title/medium
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
 * Get period name from year
 */
function getPeriodName(year) {
  if (!year) return null;
  if (year < 1500) return 'Renaissance';
  if (year < 1600) return 'High Renaissance';
  if (year < 1700) return 'Baroque';
  if (year < 1800) return 'Rococo and Neoclassical';
  if (year < 1850) return 'Romantic';
  if (year < 1880) return 'Realist';
  if (year < 1920) return 'Impressionist and Modern';
  return 'Modern and Contemporary';
}

/**
 * Sleep utility
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Search Wikipedia for artwork
 */
async function searchWikipedia(title, artistName) {
  const searchQueries = [
    `${title} ${artistName} painting`,
    `${title} painting ${artistName}`,
    title
  ];

  for (const query of searchQueries) {
    try {
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=5`;
      const response = await fetch(searchUrl);
      const data = await response.json();

      if (data.query?.search?.length > 0) {
        // Filter out list pages and disambiguation
        const validResults = data.query.search.filter(r =>
          !r.title.toLowerCase().includes('list of') &&
          !r.title.toLowerCase().includes('(disambiguation)') &&
          !r.title.toLowerCase().includes('gallery of')
        );

        if (validResults.length > 0) {
          return validResults[0].title;
        }
      }
    } catch (error) {
      // Silently continue to next query
    }
    await sleep(100);
  }

  return null;
}

/**
 * Get Wikipedia page extract
 */
async function getWikipediaExtract(pageTitle) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=extracts&exintro=true&explaintext=true&format=json`;
    const response = await fetch(url);
    const data = await response.json();

    const pages = data.query?.pages;
    if (pages) {
      const page = Object.values(pages)[0];
      if (page.extract && page.extract.length > 100) {
        return page.extract;
      }
    }
  } catch (error) {
    // Silently fail
  }
  return null;
}

/**
 * Extract facts from Wikipedia text
 */
function extractFacts(wikiText, artwork, artist) {
  const facts = {
    year: null,
    medium: null,
    dimensions: null,
    location: null,
    subject: null,
    context: []
  };

  // Extract year patterns
  const yearMatch = wikiText.match(/(?:painted|created|completed|dated|circa|c\.|around)\s*(?:in\s*)?(\d{4})/i);
  if (yearMatch) {
    const extractedYear = parseInt(yearMatch[1]);
    // Validate against artist lifespan
    if (artist?.birthYear && artist?.deathYear) {
      if (extractedYear >= artist.birthYear && extractedYear <= artist.deathYear + 10) {
        facts.year = extractedYear;
      }
    } else {
      facts.year = extractedYear;
    }
  }

  // Extract medium
  const mediumMatch = wikiText.match(/(?:oil on canvas|oil on panel|oil on wood|tempera|fresco|watercolor|gouache|pastel|charcoal)/i);
  if (mediumMatch) {
    facts.medium = mediumMatch[0];
  }

  // Extract dimensions
  const dimMatch = wikiText.match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)\s*(?:cm|in|inches)/i);
  if (dimMatch) {
    facts.dimensions = dimMatch[0];
  }

  // Extract contextual sentences (avoid copy-paste, just gather facts)
  const sentences = wikiText.split(/[.!?]+/).filter(s => s.trim().length > 20);

  // Look for sentences with useful context
  sentences.forEach(sentence => {
    const lower = sentence.toLowerCase();
    if (lower.includes('commission') || lower.includes('patron')) {
      facts.context.push('commissioned work');
    }
    if (lower.includes('religious') || lower.includes('devotional')) {
      facts.context.push('religious subject');
    }
    if (lower.includes('portrait') || lower.includes('likeness')) {
      facts.context.push('portrait');
    }
    if (lower.includes('landscape') || lower.includes('scenery')) {
      facts.context.push('landscape');
    }
    if (lower.includes('famous') || lower.includes('renowned') || lower.includes('masterpiece')) {
      facts.context.push('notable work');
    }
    if (lower.includes('influence') || lower.includes('inspired')) {
      facts.context.push('influential');
    }
  });

  // Deduplicate context
  facts.context = [...new Set(facts.context)];

  return facts;
}

/**
 * Synthesize unique description from Wikipedia facts
 * Never copies verbatim - always generates fresh content
 */
function synthesizeFromWiki(artwork, artist, museum, movements, wikiFacts) {
  const paragraphs = [];
  const artistName = artist?.name || 'The artist';
  const artistLink = artist?.slug ? internalLink(artistName, 'artist', artist.slug) : artistName;
  const subject = classifySubject(artwork.title, artwork.medium);

  // Use Wikipedia year if available, otherwise artwork year
  const year = wikiFacts.year || artwork.year;
  const medium = wikiFacts.medium || artwork.medium;
  const period = movements?.[0]?.name || getPeriodName(year);

  // === PARAGRAPH 1: Introduction with context ===
  let intro = '';

  if (year && medium) {
    intro = `${artistLink} created this ${medium.toLowerCase()} work in ${year}`;
  } else if (year) {
    intro = `Dating to ${year}, this painting by ${artistLink}`;
  } else {
    intro = `This work by ${artistLink}`;
  }

  // Add movement context with bold link
  if (movements && movements.length > 0) {
    const movementLink = internalLink(movements[0].name, 'movement', movements[0].slug);
    intro += `, during the height of the ${movementLink} movement.`;
  } else if (period) {
    intro += `, reflecting the ${period} artistic tradition.`;
  } else {
    intro += `.`;
  }

  // Add Wikipedia-derived context
  if (wikiFacts.context.includes('notable work')) {
    intro += ` The painting stands among the artist's most recognized achievements.`;
  }
  if (wikiFacts.context.includes('commissioned work')) {
    intro += ` Originally created on commission, it demonstrates the patronage systems of the era.`;
  }

  paragraphs.push(intro);

  // === PARAGRAPH 2: Subject and artistic approach ===
  let subjectPara = '';

  if (subject === 'portrait') {
    subjectPara = `The portrait captures more than physical likeness. ${artistName}'s approach reveals psychological depth through subtle details of expression and posture. Light models the features with careful attention, creating a sense of presence that transcends the centuries.`;
  } else if (subject === 'religious') {
    subjectPara = `The religious subject connects to centuries of devotional tradition. ${artistName} interprets the sacred narrative with both reverence and artistic innovation, guiding the viewer's contemplation through composition and color. Such works served both spiritual and aesthetic purposes in their original settings.`;
  } else if (subject === 'landscape') {
    subjectPara = `The landscape composition balances observation with artistic interpretation. ${artistName} captures atmosphere, light, and the character of place with sensitivity. Natural elements create rhythm and depth, inviting the viewer into a specific moment and location.`;
  } else if (subject === 'mythology') {
    subjectPara = `Drawing on classical mythology, ${artistName} engages humanist themes that resonated with educated audiences. The mythological framework provided opportunity for idealized forms and dramatic narrative, addressing timeless concerns through ancient stories.`;
  } else if (subject === 'stillLife') {
    subjectPara = `The still life transforms ordinary objects into subjects for contemplation. ${artistName}'s handling of texture, light, and spatial relationships demonstrates technical mastery. Such compositions often carried symbolic meaning, reflecting on transience and material existence.`;
  } else if (wikiFacts.context.includes('influential')) {
    subjectPara = `This composition influenced subsequent generations of artists. ${artistName}'s approach to form, color, and subject matter established patterns that others would study and adapt. The work rewards close attention to its technical and expressive qualities.`;
  } else {
    subjectPara = `The composition reveals ${artistName}'s command of visual elements. Color, form, and spatial arrangement work together to create a unified whole. Technical skill serves expressive purpose, rewarding both immediate impression and sustained looking.`;
  }

  paragraphs.push(subjectPara);

  // === PARAGRAPH 3: Museum and viewing context ===
  let locationPara = '';

  if (museum) {
    const museumLink = internalLink(museum.name, 'museum', museum.slug);
    const cityRef = museum.city ? ` in ${museum.city}` : '';
    locationPara = `The painting now resides at ${museumLink}${cityRef}, where visitors experience it firsthand. Seeing the original reveals qualities of brushwork, scale, and color that reproductions cannot fully convey. The museum's collection provides context alongside other significant works from this period.`;
  }

  // Add LWA collection link if relevant
  if (subject && LWA_COLLECTIONS[subject]) {
    const lwaLink = externalLink(LWA_COLLECTIONS[subject]);
    if (locationPara) {
      locationPara += ` For those drawn to this aesthetic, ${lwaLink} offers quality contemporary interpretations of this enduring tradition.`;
    } else {
      locationPara = `The artistic tradition represented here continues to inspire artists and collectors. Explore ${lwaLink} for modern interpretations that bring this aesthetic into living spaces.`;
    }
  }

  if (locationPara) {
    paragraphs.push(locationPara);
  }

  // === PARAGRAPH 4: Artist context ===
  if (artist?.nationality && artist?.birthYear) {
    const lifespan = artist.deathYear ? `(${artist.birthYear}-${artist.deathYear})` : `(born ${artist.birthYear})`;
    let artistPara = `${artistName} ${lifespan} was a ${artist.nationality} artist`;

    if (movements && movements.length > 0) {
      artistPara += ` associated with ${movements.map(m => m.name).join(' and ')}.`;
    } else {
      artistPara += ` whose work contributed to the artistic developments of the period.`;
    }

    paragraphs.push(artistPara);
  }

  return paragraphs.join('\n\n');
}

/**
 * Generate description from metadata only (no Wikipedia)
 */
function generateFromMetadata(artwork, artist, museum, movements) {
  const paragraphs = [];
  const artistName = artist?.name || 'The artist';
  const artistLink = artist?.slug ? internalLink(artistName, 'artist', artist.slug) : artistName;
  const subject = classifySubject(artwork.title, artwork.medium);
  const period = movements?.[0]?.name || getPeriodName(artwork.year);

  // === PARAGRAPH 1: Introduction ===
  let intro = '';

  if (artwork.year && artwork.medium) {
    intro = `${artistLink} painted this ${artwork.medium.toLowerCase()} work in ${artwork.year}`;
  } else if (artwork.year) {
    intro = `Created in ${artwork.year}, this painting by ${artistLink}`;
  } else if (artwork.medium) {
    intro = `This ${artwork.medium.toLowerCase()} work by ${artistLink}`;
  } else {
    intro = `This painting by ${artistLink}`;
  }

  if (movements && movements.length > 0) {
    const movementLink = internalLink(movements[0].name, 'movement', movements[0].slug);
    intro += ` reflects the ${movementLink} movement's influence on European art.`;
  } else if (period) {
    intro += ` belongs to the ${period} tradition.`;
  } else {
    intro += ` demonstrates the artist's distinctive approach.`;
  }

  if (artist?.nationality) {
    intro += ` As a ${artist.nationality} artist, ${artistName} brought specific cultural perspectives to their work.`;
  }

  paragraphs.push(intro);

  // === PARAGRAPH 2: Subject analysis ===
  let subjectPara = '';

  if (subject === 'portrait') {
    subjectPara = `Portrait painting requires both technical skill and psychological insight. ${artistName} captures the subject with attention to expression and character. The handling of light defines features while suggesting inner life beyond surface appearance.`;
  } else if (subject === 'religious') {
    subjectPara = `Religious painting carried deep significance in its historical context. ${artistName} interprets sacred subject matter with respect for tradition while bringing personal artistic vision. Such works served devotional purposes while also demonstrating artistic achievement.`;
  } else if (subject === 'landscape') {
    subjectPara = `Landscape painting captures both place and atmosphere. ${artistName} observes natural light, terrain, and weather with care. The composition creates depth and mood, inviting viewers to experience a specific location and moment.`;
  } else if (subject === 'mythology') {
    subjectPara = `Mythological subjects allowed artists to explore idealized forms and dramatic narrative. ${artistName} draws on classical sources familiar to educated audiences. Ancient stories provided frameworks for addressing human themes with artistic freedom.`;
  } else if (subject === 'stillLife') {
    subjectPara = `Still life painting elevates everyday objects to subjects of artistic attention. ${artistName} renders texture, light, and spatial relationships with precision. The genre often carried symbolic meanings about mortality and material existence.`;
  } else if (subject === 'figurative') {
    subjectPara = `Figure painting demonstrates understanding of human form and movement. ${artistName} captures bodily presence through careful observation. Light and shadow model the figure with sculptural dimension and expressive weight.`;
  } else if (subject === 'coastal') {
    subjectPara = `Marine and coastal subjects offered opportunities for atmospheric effects. ${artistName} captures water, sky, and light with sensitivity to changing conditions. The sea has drawn painters for its drama and its subtle moods.`;
  } else if (subject === 'animal') {
    subjectPara = `Animal painting requires close observation of form and behavior. ${artistName} renders the subject with attention to anatomy and movement. Such works often reflected broader interests in nature and the hunt.`;
  } else {
    subjectPara = `The composition demonstrates ${artistName}'s command of pictorial elements. Form, color, and arrangement work together toward expressive effect. Technical skill serves the artist's larger vision and purpose.`;
  }

  paragraphs.push(subjectPara);

  // === PARAGRAPH 3: Museum context ===
  let locationPara = '';

  if (museum) {
    const museumLink = internalLink(museum.name, 'museum', museum.slug);
    const cityRef = museum.city ? ` in ${museum.city}` : '';
    locationPara = `Today the painting is held at ${museumLink}${cityRef}. Viewing the original reveals details of brushwork and color that reproductions cannot capture. The museum context places the work alongside related pieces from the same tradition.`;
  }

  if (subject && LWA_COLLECTIONS[subject]) {
    const lwaLink = externalLink(LWA_COLLECTIONS[subject]);
    if (locationPara) {
      locationPara += ` Those drawn to this style can explore ${lwaLink} for contemporary works in similar aesthetic traditions.`;
    } else {
      locationPara = `This artistic tradition continues to inspire contemporary artists and collectors. Explore ${lwaLink} for quality modern works that carry forward these aesthetic values.`;
    }
  }

  if (locationPara) {
    paragraphs.push(locationPara);
  } else {
    paragraphs.push(`The work represents ${artistName}'s contribution to art history and continues to reward careful attention from viewers today.`);
  }

  // === PARAGRAPH 4: Artist bio ===
  if (artist?.nationality && artist?.birthYear) {
    const lifespan = artist.deathYear ? `(${artist.birthYear}-${artist.deathYear})` : `(born ${artist.birthYear})`;
    let artistPara = `${artistName} ${lifespan} was a ${artist.nationality} artist`;

    if (movements && movements.length > 0) {
      artistPara += ` working within the ${movements.map(m => m.name).join(' and ')} tradition.`;
    } else {
      artistPara += ` whose body of work contributed to the artistic developments of the era.`;
    }

    paragraphs.push(artistPara);
  }

  return paragraphs.join('\n\n');
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('GENERATE UNIQUE DESCRIPTIONS');
  console.log('Wikipedia-first with metadata fallback + Bold interlinking');
  console.log(DRY_RUN ? '(DRY RUN - No changes will be made)' : '');
  console.log('='.repeat(70));

  // Get artworks needing better descriptions
  const artworks = await prisma.artwork.findMany({
    where: {
      Artist: { isNot: null },
      OR: [
        { description: null },
        { description: { not: { contains: '<strong>' } } } // No bold links yet
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
  let wikiSuccess = 0;
  let metadataFallback = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const artist = artwork.Artist;
    const museum = artwork.Museum;
    const movements = artist?.Movement || [];

    console.log(`[${i + 1}/${artworks.length}] ${artwork.title}`);
    console.log(`    Artist: ${artist?.name || 'Unknown'}`);

    // Try Wikipedia first
    let description = null;
    let source = 'metadata';

    const wikiTitle = await searchWikipedia(artwork.title, artist?.name);

    if (wikiTitle) {
      console.log(`    Wikipedia: Found "${wikiTitle}"`);
      const wikiExtract = await getWikipediaExtract(wikiTitle);

      if (wikiExtract && wikiExtract.length > 150) {
        const wikiFacts = extractFacts(wikiExtract, artwork, artist);
        description = synthesizeFromWiki(artwork, artist, museum, movements, wikiFacts);
        source = 'wikipedia';
        wikiSuccess++;
      }
    }

    // Fall back to metadata if Wikipedia didn't work
    if (!description) {
      console.log(`    Wikipedia: Not found, using metadata`);
      description = generateFromMetadata(artwork, artist, museum, movements);
      metadataFallback++;
    }

    const wordCount = description.split(/\s+/).length;
    const hasBoldLinks = description.includes('<strong>');

    console.log(`    Source: ${source} | Words: ${wordCount} | Bold links: ${hasBoldLinks ? 'yes' : 'no'}`);

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

    // Rate limiting for Wikipedia
    await sleep(200);
  }

  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Processed: ${artworks.length}`);
  console.log(`Updated: ${updated}`);
  console.log(`Wikipedia-based: ${wikiSuccess}`);
  console.log(`Metadata fallback: ${metadataFallback}`);

  if (DRY_RUN) {
    console.log('\nThis was a dry run. Run without --dry-run to save changes.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
