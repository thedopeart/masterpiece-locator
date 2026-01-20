/**
 * Generate Artwork Descriptions from Metadata
 *
 * For artworks without Wikipedia pages, this script generates descriptions
 * using artist info + artwork metadata (title, year, medium, museum).
 *
 * Usage:
 *   node scripts/generate-descriptions-from-metadata.js [--limit=100] [--dry-run]
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const LIMIT = parseInt(getArg('limit')) || 100;
const DRY_RUN = args.includes('--dry-run');

/**
 * Analyze artwork title for subject matter
 */
function analyzeTitle(title) {
  const titleLower = title.toLowerCase();

  const subjects = {
    portrait: /portrait|self-portrait|head of|bust of|likeness/i,
    religious: /christ|madonna|virgin|saint|st\.|holy|crucifixion|resurrection|nativity|biblical|angel|apostle|mary|jesus|god|prayer|church/i,
    mythology: /venus|apollo|diana|jupiter|mars|cupid|bacchus|nymph|muse|greek|roman|myth|goddess|god\b/i,
    landscape: /landscape|view of|scene|countryside|river|mountain|forest|garden|park|sunset|sunrise|coast|sea|lake/i,
    stillLife: /still life|flowers|fruit|vase|table|shells|dead|vanitas/i,
    genre: /peasant|tavern|inn|market|feast|wedding|dance|music|card|game|interior|kitchen|domestic/i,
    historical: /battle|war|siege|victory|treaty|coronation|death of|murder|execution/i,
    animal: /horse|dog|cat|lion|bird|hunt|animal/i,
    nude: /nude|bather|bath|naked/i
  };

  for (const [type, pattern] of Object.entries(subjects)) {
    if (pattern.test(titleLower)) {
      return type;
    }
  }

  return 'general';
}

/**
 * Get period context based on year
 */
function getPeriodContext(year) {
  if (!year) return null;

  if (year < 1400) return 'Medieval';
  if (year < 1500) return 'Early Renaissance';
  if (year < 1600) return 'High Renaissance';
  if (year < 1700) return 'Baroque';
  if (year < 1800) return 'Rococo and Neoclassical';
  if (year < 1850) return 'Romantic';
  if (year < 1880) return 'Realist';
  if (year < 1910) return 'Impressionist and Post-Impressionist';
  if (year < 1950) return 'Modern';
  return 'Contemporary';
}

/**
 * Generate description templates based on subject type
 */
function getSubjectDescription(subjectType, title, artistName) {
  const templates = {
    portrait: [
      `This portrait demonstrates ${artistName}'s ability to capture character and presence.`,
      `The work reveals ${artistName}'s skill in rendering human likeness and personality.`,
      `${artistName} brings psychological depth to this portrait study.`
    ],
    religious: [
      `${artistName} approaches this religious subject with reverence and artistic sensitivity.`,
      `The devotional theme reflects the spiritual concerns of the artist's era.`,
      `This religious work showcases ${artistName}'s interpretation of sacred narrative.`
    ],
    mythology: [
      `${artistName} draws on classical mythology for this composition.`,
      `The mythological subject allowed ${artistName} to explore idealized forms.`,
      `Classical themes provided rich material for ${artistName}'s artistic vision.`
    ],
    landscape: [
      `${artistName} captures atmosphere and light in this landscape view.`,
      `The natural setting demonstrates ${artistName}'s observational skills.`,
      `This landscape reflects ${artistName}'s response to the natural world.`
    ],
    stillLife: [
      `${artistName} transforms everyday objects into a meditation on form and light.`,
      `The still life arrangement invites close contemplation of texture and color.`,
      `This composition demonstrates ${artistName}'s mastery of detail and observation.`
    ],
    genre: [
      `${artistName} captures a moment of everyday life with characteristic insight.`,
      `The scene offers a window into the social world of the artist's time.`,
      `This genre subject allowed ${artistName} to explore human interaction and behavior.`
    ],
    historical: [
      `${artistName} brings dramatic weight to this historical subject.`,
      `The composition conveys the gravity of the depicted events.`,
      `Historical narrative provided scope for ${artistName}'s ambitious vision.`
    ],
    animal: [
      `${artistName} demonstrates keen observation of animal form and movement.`,
      `The subject allowed ${artistName} to explore natural forms and vitality.`,
      `This work reflects ${artistName}'s interest in the animal world.`
    ],
    nude: [
      `${artistName} explores the human form with artistic sensitivity.`,
      `The figure study demonstrates ${artistName}'s understanding of anatomy and light.`,
      `This work reflects the classical tradition of figure painting.`
    ],
    general: [
      `This work demonstrates ${artistName}'s distinctive artistic approach.`,
      `${artistName} brings technical skill and vision to this composition.`,
      `The painting reflects ${artistName}'s mature artistic concerns.`
    ]
  };

  const options = templates[subjectType] || templates.general;
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Generate a description from available metadata
 */
function generateDescription(artwork, artist) {
  const parts = [];
  const artistName = artist?.name || 'The artist';
  const subjectType = analyzeTitle(artwork.title);

  // Opening with date/medium if available
  if (artwork.year && artwork.medium) {
    const openers = [
      `Created in ${artwork.year}, this ${artwork.medium.toLowerCase()} work`,
      `This ${artwork.medium.toLowerCase()} from ${artwork.year}`,
      `Painted in ${artwork.year} using ${artwork.medium.toLowerCase()}, this piece`
    ];
    parts.push(openers[Math.floor(Math.random() * openers.length)]);
  } else if (artwork.year) {
    parts.push(`Dating to ${artwork.year}, this work`);
  } else if (artwork.medium) {
    parts.push(`Executed in ${artwork.medium.toLowerCase()}, this piece`);
  }

  // Add period context
  const period = getPeriodContext(artwork.year);
  if (period && parts.length > 0) {
    parts[0] += ` exemplifies the ${period} period.`;
  } else if (parts.length > 0) {
    parts[0] += ` showcases ${artistName}'s technical abilities.`;
  }

  // Subject-specific content
  parts.push(getSubjectDescription(subjectType, artwork.title, artistName));

  // Artist context if we have bio info
  if (artist?.nationality && artist?.birthYear) {
    const artistContext = [
      `As a ${artist.nationality} artist active in the ${Math.floor(artist.birthYear / 100) * 100}s, ${artistName} developed a distinctive visual language.`,
      `${artistName}'s ${artist.nationality} heritage informed a unique artistic perspective.`,
      `Working in the ${artist.nationality} tradition, ${artistName} contributed significantly to the period's artistic development.`
    ];
    // Only add sometimes to vary length
    if (Math.random() > 0.5) {
      parts.push(artistContext[Math.floor(Math.random() * artistContext.length)]);
    }
  }

  // Museum context if available
  if (artwork.Museum?.name) {
    const museumPhrases = [
      `The painting is now held in the collection of ${artwork.Museum.name}.`,
      `Today, the work can be viewed at ${artwork.Museum.name}.`,
      `${artwork.Museum.name} houses this painting in its permanent collection.`
    ];
    // Only add sometimes
    if (Math.random() > 0.6) {
      parts.push(museumPhrases[Math.floor(Math.random() * museumPhrases.length)]);
    }
  }

  // Ensure minimum quality
  if (parts.length < 2) {
    parts.push(`The work demonstrates the qualities that define ${artistName}'s contribution to art history.`);
  }

  return parts.join(' ');
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('GENERATE DESCRIPTIONS FROM METADATA');
  console.log(DRY_RUN ? '(DRY RUN - No changes will be made)' : '');
  console.log('='.repeat(70));

  // Get artworks needing descriptions (that have an artist)
  const artworks = await prisma.artwork.findMany({
    where: {
      description: null,
      Artist: { isNot: null }
    },
    take: LIMIT,
    orderBy: { searchVolumeTier: 'asc' },
    select: {
      id: true,
      title: true,
      year: true,
      medium: true,
      description: true,
      Artist: {
        select: {
          name: true,
          nationality: true,
          birthYear: true,
          deathYear: true,
          bioShort: true
        }
      },
      Museum: {
        select: { name: true, city: true }
      }
    }
  });

  console.log(`\nFound ${artworks.length} artworks to process\n`);

  let generated = 0;
  let skipped = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const artistName = artwork.Artist?.name || 'Unknown';

    console.log(`[${i + 1}/${artworks.length}] ${artwork.title}`);
    console.log(`    Artist: ${artistName}`);
    console.log(`    Year: ${artwork.year || 'Unknown'} | Medium: ${artwork.medium || 'Unknown'}`);

    // Generate description
    const description = generateDescription(artwork, artwork.Artist);

    if (!description || description.length < 80) {
      console.log(`    ✗ Could not generate adequate description`);
      skipped++;
      continue;
    }

    console.log(`    ✓ Generated (${description.length} chars)`);

    if (DRY_RUN) {
      console.log(`    [DRY RUN] ${description.substring(0, 120)}...`);
    } else {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          description,
          updatedAt: new Date()
        }
      });
    }

    generated++;
    console.log('');
  }

  // Summary
  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Processed: ${artworks.length}`);
  console.log(`Generated: ${generated}`);
  console.log(`Skipped: ${skipped}`);

  if (DRY_RUN) {
    console.log('\nThis was a dry run. Run without --dry-run to save changes.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
