/**
 * Enrich Artwork Descriptions from Wikipedia
 *
 * This script fetches Wikipedia content for artworks missing descriptions
 * and synthesizes unique, original descriptions based on that research.
 *
 * Usage:
 *   node scripts/enrich-artwork-descriptions.js [--limit=50] [--artist=van-gogh] [--dry-run]
 *
 * The script:
 * 1. Finds artworks missing descriptions
 * 2. Searches Wikipedia for the artwork
 * 3. Extracts key facts (year, medium, context, significance)
 * 4. Synthesizes a unique description (not copied verbatim)
 * 5. Updates the database
 */

const { PrismaClient } = require('@prisma/client');
const crypto = require('crypto');

const prisma = new PrismaClient();

const USER_AGENT = 'MasterpieceLocator/1.0 (Educational Art Research; contact@example.com)';
const DELAY_MS = 500; // Be respectful to Wikipedia
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Parse command line arguments
const args = process.argv.slice(2);
const getArg = (name) => {
  const arg = args.find(a => a.startsWith(`--${name}=`));
  return arg ? arg.split('=')[1] : null;
};

const LIMIT = parseInt(getArg('limit')) || 50;
const ARTIST_FILTER = getArg('artist');
const DRY_RUN = args.includes('--dry-run');

/**
 * Search Wikipedia for an artwork
 */
async function searchWikipedia(title, artistName) {
  try {
    // Clean up title for search
    const cleanTitle = title
      .replace(/&quot;/g, '"')
      .replace(/&#\d+;/g, '')
      .replace(/\([^)]+\)/g, '') // Remove parentheticals
      .trim();

    // Try different search queries
    const queries = [
      `${cleanTitle} ${artistName} painting`,
      `${cleanTitle} (${artistName} painting)`,
      `"${cleanTitle}" ${artistName}`,
    ];

    for (const query of queries) {
      const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&srlimit=5`;

      const response = await fetch(searchUrl, {
        headers: { 'User-Agent': USER_AGENT }
      });

      if (!response.ok) continue;
      const data = await response.json();

      if (!data.query?.search?.length) continue;

      // Check each result for relevance
      for (const result of data.query.search) {
        const resultTitleLower = result.title.toLowerCase();
        const searchTitleLower = cleanTitle.toLowerCase();
        const artistLower = artistName.toLowerCase().split(' ').pop(); // Last name

        // Skip list pages and disambiguation pages
        if (resultTitleLower.startsWith('list of') ||
            resultTitleLower.includes('(disambiguation)') ||
            resultTitleLower.includes('paintings by')) {
          continue;
        }

        // Check if this looks like our artwork
        const isMatch =
          // Title contains our search title
          resultTitleLower.includes(searchTitleLower) ||
          // Our title contains the result (minus parenthetical)
          searchTitleLower.includes(resultTitleLower.replace(/ \(.*\)/, '')) ||
          // Result contains artist name and snippet mentions painting
          (resultTitleLower.includes(artistLower) &&
           (result.snippet.toLowerCase().includes('painting') ||
            result.snippet.toLowerCase().includes('canvas') ||
            result.snippet.toLowerCase().includes('oil')));

        if (isMatch) {
          return result.title;
        }
      }
    }
  } catch (err) {
    // Silent fail
  }
  return null;
}

/**
 * Get Wikipedia page content
 */
async function getWikipediaContent(pageTitle) {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=extracts|pageimages|categories&exintro=false&explaintext=true&format=json`;

    const response = await fetch(url, {
      headers: { 'User-Agent': USER_AGENT }
    });

    if (!response.ok) return null;
    const data = await response.json();

    const pages = Object.values(data.query?.pages || {});
    if (!pages.length || pages[0].missing) return null;

    const page = pages[0];
    return {
      title: page.title,
      extract: page.extract,
      categories: page.categories?.map(c => c.title) || []
    };
  } catch (err) {
    return null;
  }
}

/**
 * Extract key facts from Wikipedia content
 */
function extractFacts(wikiContent, artworkTitle, artistName) {
  const extract = wikiContent.extract || '';
  const facts = {
    year: null,
    medium: null,
    dimensions: null,
    currentLocation: null,
    context: [],
    significance: [],
    style: [],
    subject: []
  };

  // Extract year (look for patterns like "painted in 1889" or "created 1503-1519")
  const yearPatterns = [
    /(?:painted|created|completed|made|executed|produced)\s+(?:in\s+)?(?:circa\s+|c\.\s*)?(\d{4})/i,
    /(?:from|between)\s+(\d{4})/i,
    /\b(1[4-9]\d{2})\b/
  ];
  for (const pattern of yearPatterns) {
    const match = extract.match(pattern);
    if (match) {
      facts.year = match[1];
      break;
    }
  }

  // Extract medium
  const mediumPatterns = [
    /(?:oil\s+on\s+canvas|oil\s+painting|tempera|fresco|watercolor|pastel|acrylic|gouache|oil\s+on\s+panel|oil\s+on\s+wood)/i,
  ];
  for (const pattern of mediumPatterns) {
    const match = extract.match(pattern);
    if (match) {
      facts.medium = match[0];
      break;
    }
  }

  // Extract context and significance from sentences
  const sentences = extract.split(/\.\s+/);

  for (const sentence of sentences.slice(0, 15)) { // First 15 sentences
    const sentLower = sentence.toLowerCase();

    // Skip very short or very long sentences
    if (sentence.length < 30 || sentence.length > 400) continue;

    // Context sentences (about creation, commission, inspiration)
    if (sentLower.includes('commission') ||
        sentLower.includes('painted for') ||
        sentLower.includes('created for') ||
        sentLower.includes('inspired by') ||
        sentLower.includes('depicts') ||
        sentLower.includes('shows') ||
        sentLower.includes('portrays')) {
      facts.context.push(sentence.trim());
    }

    // Significance sentences
    if (sentLower.includes('famous') ||
        sentLower.includes('renowned') ||
        sentLower.includes('iconic') ||
        sentLower.includes('influential') ||
        sentLower.includes('masterpiece') ||
        sentLower.includes('considered') ||
        sentLower.includes('regarded') ||
        sentLower.includes('one of the') ||
        sentLower.includes('best known') ||
        sentLower.includes('most famous')) {
      facts.significance.push(sentence.trim());
    }

    // Style information
    if (sentLower.includes('style') ||
        sentLower.includes('technique') ||
        sentLower.includes('brushwork') ||
        sentLower.includes('color') ||
        sentLower.includes('composition') ||
        sentLower.includes('perspective')) {
      facts.style.push(sentence.trim());
    }

    // Subject matter
    if (sentLower.includes('subject') ||
        sentLower.includes('scene') ||
        sentLower.includes('figure') ||
        sentLower.includes('landscape') ||
        sentLower.includes('portrait')) {
      facts.subject.push(sentence.trim());
    }
  }

  return facts;
}

/**
 * Synthesize a unique description from extracted facts
 * This creates original text, not copied from Wikipedia
 */
function synthesizeDescription(facts, artworkTitle, artistName, existingYear, existingMedium) {
  const parts = [];

  // Opening - vary the structure
  const openers = [
    () => {
      const year = facts.year || existingYear;
      const medium = facts.medium || existingMedium;
      if (year && medium) {
        return `${artistName} created this ${medium.toLowerCase()} work in ${year}.`;
      } else if (year) {
        return `This work dates to ${year}, during ${artistName}'s active period.`;
      } else if (medium) {
        return `Executed in ${medium.toLowerCase()}, this piece showcases ${artistName}'s technical approach.`;
      }
      return null;
    },
    () => {
      if (facts.context.length > 0) {
        // Rewrite the context, don't copy
        const ctx = facts.context[0];
        if (ctx.toLowerCase().includes('commission')) {
          return `Originally commissioned as a private work, this painting demonstrates ${artistName}'s ability to satisfy demanding patrons.`;
        }
        if (ctx.toLowerCase().includes('depicts') || ctx.toLowerCase().includes('shows')) {
          // Extract what it depicts and rewrite
          const depicts = ctx.match(/(?:depicts|shows|portrays)\s+([^,\.]+)/i);
          if (depicts) {
            return `The composition presents ${depicts[1].trim()}, rendered with ${artistName}'s characteristic attention to detail.`;
          }
        }
      }
      return null;
    }
  ];

  // Try openers until one works
  for (const opener of openers) {
    const result = opener();
    if (result) {
      parts.push(result);
      break;
    }
  }

  // Middle section - synthesize from facts
  if (facts.style.length > 0) {
    // Don't copy, synthesize
    const styleInfo = facts.style[0].toLowerCase();
    if (styleInfo.includes('brushwork')) {
      parts.push(`The brushwork reflects the artist's mature technique.`);
    } else if (styleInfo.includes('color')) {
      parts.push(`The color palette demonstrates ${artistName}'s distinctive approach to light and atmosphere.`);
    } else if (styleInfo.includes('composition')) {
      parts.push(`The composition draws the viewer's eye through carefully balanced elements.`);
    }
  }

  if (facts.subject.length > 0 && parts.length < 2) {
    const subjectInfo = facts.subject[0].toLowerCase();
    if (subjectInfo.includes('landscape')) {
      parts.push(`As a landscape work, it captures a specific moment in time and place.`);
    } else if (subjectInfo.includes('portrait')) {
      parts.push(`The portrait reveals both the subject's character and the artist's observational skill.`);
    } else if (subjectInfo.includes('religious') || subjectInfo.includes('biblical')) {
      parts.push(`The religious subject matter was common for the period, yet the treatment here is distinctive.`);
    }
  }

  // Closing - significance
  if (facts.significance.length > 0) {
    // Don't copy the "famous" statements, synthesize
    const sig = facts.significance[0].toLowerCase();
    if (sig.includes('masterpiece') || sig.includes('most famous')) {
      parts.push(`This ranks among the artist's most celebrated works.`);
    } else if (sig.includes('influential')) {
      parts.push(`The painting influenced later artists and movements.`);
    } else if (sig.includes('one of the')) {
      parts.push(`Art historians consider this a key work in the artist's output.`);
    }
  }

  // Ensure we have at least something
  if (parts.length === 0) {
    return null; // Not enough info to synthesize
  }

  return parts.join(' ');
}

/**
 * Synthesize historical significance text
 */
function synthesizeSignificance(facts, artworkTitle, artistName) {
  if (facts.significance.length === 0 && facts.context.length === 0) {
    return null;
  }

  const parts = [];

  // Look for specific significance indicators
  for (const sig of facts.significance.slice(0, 2)) {
    const sigLower = sig.toLowerCase();

    if (sigLower.includes('icon') || sigLower.includes('symbol')) {
      parts.push(`This work has become a cultural touchstone, recognized far beyond the art world.`);
    } else if (sigLower.includes('pioneer') || sigLower.includes('first')) {
      parts.push(`The painting marked a turning point in artistic technique or subject matter.`);
    } else if (sigLower.includes('influence')) {
      parts.push(`Generations of artists have studied and drawn inspiration from this work.`);
    } else if (sigLower.includes('controversy') || sigLower.includes('scandal')) {
      parts.push(`The work sparked debate when it first appeared, challenging contemporary expectations.`);
    }
  }

  // Add context about historical importance
  for (const ctx of facts.context.slice(0, 1)) {
    const ctxLower = ctx.toLowerCase();
    if (ctxLower.includes('commission') && ctxLower.includes('king') || ctxLower.includes('pope') || ctxLower.includes('duke')) {
      parts.push(`Commissioned by powerful patrons, it reflects the artistic ambitions of the era.`);
    }
  }

  if (parts.length === 0) {
    return null;
  }

  return parts.join(' ');
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(70));
  console.log('ARTWORK DESCRIPTION ENRICHMENT');
  console.log(DRY_RUN ? '(DRY RUN - No changes will be made)' : '');
  console.log('='.repeat(70));

  // Build query
  const whereClause = {
    description: null,
    Artist: { isNot: null } // Only artworks with known artists
  };

  if (ARTIST_FILTER) {
    whereClause.Artist = { slug: ARTIST_FILTER };
  }

  // Get artworks needing descriptions
  const artworks = await prisma.artwork.findMany({
    where: whereClause,
    take: LIMIT,
    orderBy: { searchVolumeTier: 'asc' }, // Prioritize high-traffic artworks
    select: {
      id: true,
      title: true,
      year: true,
      medium: true,
      description: true,
      historicalSignificance: true,
      Artist: { select: { name: true, slug: true } }
    }
  });

  console.log(`\nFound ${artworks.length} artworks to process\n`);

  let enriched = 0;
  let notFound = 0;
  let insufficientData = 0;

  for (let i = 0; i < artworks.length; i++) {
    const artwork = artworks[i];
    const artistName = artwork.Artist?.name || 'Unknown';

    console.log(`[${i + 1}/${artworks.length}] ${artwork.title}`);
    console.log(`    Artist: ${artistName}`);

    await sleep(DELAY_MS);

    // Search Wikipedia
    const pageTitle = await searchWikipedia(artwork.title, artistName);

    if (!pageTitle) {
      console.log(`    ✗ Not found on Wikipedia`);
      notFound++;
      continue;
    }

    console.log(`    Found: ${pageTitle}`);

    await sleep(DELAY_MS);

    // Get content
    const wikiContent = await getWikipediaContent(pageTitle);

    if (!wikiContent || !wikiContent.extract || wikiContent.extract.length < 100) {
      console.log(`    ✗ Insufficient Wikipedia content`);
      insufficientData++;
      continue;
    }

    // Extract facts
    const facts = extractFacts(wikiContent, artwork.title, artistName);

    // Synthesize description
    const description = synthesizeDescription(
      facts,
      artwork.title,
      artistName,
      artwork.year,
      artwork.medium
    );

    // Synthesize historical significance
    const significance = synthesizeSignificance(facts, artwork.title, artistName);

    if (!description) {
      console.log(`    ✗ Could not synthesize description`);
      insufficientData++;
      continue;
    }

    console.log(`    ✓ Generated description (${description.length} chars)`);
    if (significance) {
      console.log(`    ✓ Generated significance (${significance.length} chars)`);
    }

    if (DRY_RUN) {
      console.log(`    [DRY RUN] Would save:`);
      console.log(`      Description: ${description.substring(0, 100)}...`);
      if (significance) {
        console.log(`      Significance: ${significance.substring(0, 100)}...`);
      }
    } else {
      // Update database
      const updateData = { description };
      if (significance && !artwork.historicalSignificance) {
        updateData.historicalSignificance = significance;
      }
      // Update year/medium if we found them and they're missing
      if (facts.year && !artwork.year) {
        updateData.year = parseInt(facts.year);
      }
      if (facts.medium && !artwork.medium) {
        updateData.medium = facts.medium;
      }

      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          ...updateData,
          updatedAt: new Date()
        }
      });
    }

    enriched++;
    console.log('');
  }

  // Summary
  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log(`Processed: ${artworks.length}`);
  console.log(`Enriched: ${enriched}`);
  console.log(`Not found on Wikipedia: ${notFound}`);
  console.log(`Insufficient data: ${insufficientData}`);

  if (DRY_RUN) {
    console.log('\nThis was a dry run. Run without --dry-run to save changes.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
