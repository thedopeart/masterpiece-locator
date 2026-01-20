/**
 * Generate Unique Artwork Descriptions with Wikipedia + Metadata Fallback
 *
 * Strategy:
 * 1. Try Wikipedia first for real content to synthesize from
 * 2. Fall back to metadata with VARIED templates (not repetitive)
 * 3. All descriptions are UNIQUE - uses artwork title, year, medium, museum for variation
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
 * Pick random item from array
 */
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

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
 * Get century text
 */
function getCentury(year) {
  if (!year) return null;
  const century = Math.ceil(year / 100);
  const suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
  const suffix = suffixes[century % 10] || 'th';
  return `${century}${suffix} century`;
}

/**
 * Extract descriptive words from title
 */
function extractTitleElements(title) {
  const cleanTitle = title.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
  const words = cleanTitle.toLowerCase();

  const elements = {
    hasLight: /light|sun|dawn|dusk|morning|evening|night|moon/.test(words),
    hasNature: /tree|flower|garden|forest|river|mountain|sky|cloud/.test(words),
    hasColor: /blue|red|green|gold|white|black|grey|gray/.test(words),
    hasSeason: /spring|summer|autumn|fall|winter/.test(words),
    hasLocation: /at|in|near|view of|scene/.test(words),
    isStudy: /study|sketch|preparatory/.test(words),
    isSeries: /\d+|no\.|number|version/.test(words),
  };

  return elements;
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
      // Continue
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
    // Fail silently
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
    context: []
  };

  const yearMatch = wikiText.match(/(?:painted|created|completed|dated|circa|c\.|around)\s*(?:in\s*)?(\d{4})/i);
  if (yearMatch) {
    const extractedYear = parseInt(yearMatch[1]);
    if (artist?.birthYear && artist?.deathYear) {
      if (extractedYear >= artist.birthYear && extractedYear <= artist.deathYear + 10) {
        facts.year = extractedYear;
      }
    } else {
      facts.year = extractedYear;
    }
  }

  const mediumMatch = wikiText.match(/(?:oil on canvas|oil on panel|oil on wood|tempera|fresco|watercolor|gouache)/i);
  if (mediumMatch) {
    facts.medium = mediumMatch[0];
  }

  const sentences = wikiText.split(/[.!?]+/).filter(s => s.trim().length > 20);
  sentences.forEach(sentence => {
    const lower = sentence.toLowerCase();
    if (lower.includes('commission')) facts.context.push('commissioned');
    if (lower.includes('famous') || lower.includes('masterpiece')) facts.context.push('famous');
    if (lower.includes('influence')) facts.context.push('influential');
    if (lower.includes('technique') || lower.includes('innovation')) facts.context.push('innovative');
  });

  facts.context = [...new Set(facts.context)];
  return facts;
}

/**
 * Generate description from metadata with VARIED templates
 */
function generateFromMetadata(artwork, artist, museum, movements) {
  const paragraphs = [];
  const artistName = artist?.name || 'The artist';
  const artistLink = artist?.slug ? internalLink(artistName, 'artist', artist.slug) : artistName;
  const subject = classifySubject(artwork.title, artwork.medium);
  const period = movements?.[0]?.name || getPeriodName(artwork.year);
  const century = getCentury(artwork.year);
  const titleElements = extractTitleElements(artwork.title);

  // Clean title for use in text
  const cleanTitle = artwork.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

  // === PARAGRAPH 1: Introduction - Multiple variations ===
  let intro = '';
  const introVariations = [];

  if (artwork.year && artwork.medium) {
    introVariations.push(
      `${artistLink} completed "${cleanTitle}" in ${artwork.year}, working in ${artwork.medium.toLowerCase()}.`,
      `Dating to ${artwork.year}, this ${artwork.medium.toLowerCase()} painting by ${artistLink} shows the artist at work.`,
      `"${cleanTitle}" is a ${artwork.medium.toLowerCase()} work from ${artwork.year} by ${artistLink}.`,
      `In ${artwork.year}, ${artistLink} produced this ${artwork.medium.toLowerCase()} painting.`
    );
  } else if (artwork.year) {
    introVariations.push(
      `${artistLink} created "${cleanTitle}" around ${artwork.year}.`,
      `From ${artwork.year}, this work by ${artistLink} remains significant.`,
      `"${cleanTitle}" dates to ${artwork.year}, during ${artistLink}'s productive period.`
    );
  } else if (artwork.medium) {
    introVariations.push(
      `This ${artwork.medium.toLowerCase()} work by ${artistLink} presents "${cleanTitle}".`,
      `${artistLink} rendered "${cleanTitle}" in ${artwork.medium.toLowerCase()}.`,
      `Working in ${artwork.medium.toLowerCase()}, ${artistLink} created this piece.`
    );
  } else {
    introVariations.push(
      `"${cleanTitle}" by ${artistLink} represents the artist's approach to painting.`,
      `${artistLink} produced "${cleanTitle}" as part of their body of work.`,
      `This painting by ${artistLink} carries the title "${cleanTitle}".`
    );
  }

  intro = pick(introVariations);

  // Add movement/period context
  if (movements && movements.length > 0) {
    const movementLink = internalLink(movements[0].name, 'movement', movements[0].slug);
    const movementPhrases = [
      ` The work reflects ${movementLink} principles that shaped ${century || 'the era'}'s art.`,
      ` As a ${movementLink} artist, ${artistName} explored ideas central to that movement.`,
      ` The painting connects to the ${movementLink} movement's broader concerns.`,
      ` ${movementLink} influences appear throughout the composition.`
    ];
    intro += pick(movementPhrases);
  } else if (period) {
    const periodPhrases = [
      ` The ${period} period provided the artistic context for this work.`,
      ` Stylistically, the painting belongs to the ${period} tradition.`,
      ` The work emerged from the ${period} artistic environment.`
    ];
    intro += pick(periodPhrases);
  }

  // Add nationality context (varied)
  if (artist?.nationality) {
    const nationalityPhrases = [
      ` ${artistName}'s ${artist.nationality} background informed their visual approach.`,
      ` As a ${artist.nationality} painter, ${artistName} brought regional sensibilities to the work.`,
      ` The ${artist.nationality} artistic tradition shaped ${artistName}'s development.`,
      `` // Sometimes skip this entirely for variety
    ];
    intro += pick(nationalityPhrases);
  }

  paragraphs.push(intro);

  // === PARAGRAPH 2: Subject/composition - Many variations per type ===
  let subjectPara = '';

  if (subject === 'portrait') {
    const portraitVariations = [
      `The portrait format allowed ${artistName} to focus on human presence and character. Facial features and posture communicate something of the subject's personality. The background and costume provide historical and social context.`,
      `Portraiture demands attention to both likeness and expression. ${artistName} balanced accurate observation with artistic interpretation. The sitter's gaze and positioning suggest their status and temperament.`,
      `${artistName} approached portraiture as a study in human character. Details of dress, setting, and expression work together to suggest the subject's identity. The artist's brushwork gives the figure life and dimension.`,
      `The portrait captures a specific individual at a particular moment. ${artistName} rendered features with care while suggesting inner qualities. Light falls across the face to define structure and mood.`
    ];
    subjectPara = pick(portraitVariations);
  } else if (subject === 'religious') {
    const religiousVariations = [
      `The religious subject connected ${artistName} to centuries of devotional art. Sacred narratives provided structure for exploring spiritual themes. The composition balances reverence with artistic expression.`,
      `Religious imagery carried deep meaning for audiences of the period. ${artistName} interpreted traditional iconography with personal vision. The work served both contemplative and decorative purposes.`,
      `${artistName} addressed a subject rich in artistic tradition. Biblical or hagiographic narratives offered opportunities for dramatic composition. The artist brought individual interpretation to familiar themes.`,
      `Devotional art required both adherence to tradition and artistic skill. ${artistName} navigated these demands with attention to symbolic detail. The painting functions as both spiritual object and aesthetic achievement.`
    ];
    subjectPara = pick(religiousVariations);
  } else if (subject === 'landscape') {
    const landscapeVariations = [
      `The landscape composition records ${artistName}'s response to natural scenery. Atmospheric effects and spatial depth create a sense of place. The painting invites viewers into an observed or imagined environment.`,
      `${artistName} translated outdoor observation into painted form. Sky, terrain, and vegetation combine to establish mood and setting. The work reflects both the specific location and the artist's interpretation.`,
      `Landscape painting offered ${artistName} a subject for exploring light and atmosphere. Natural forms provided the raw material for composition. The result captures a moment in time and weather.`,
      `The natural world inspired ${artistName}'s approach to color and form. Trees, water, or mountains establish the scene's character. The landscape serves as both subject and vehicle for painterly expression.`
    ];
    subjectPara = pick(landscapeVariations);

    // Add title-specific details if present
    if (titleElements.hasLight) {
      subjectPara += ` The treatment of light gives the scene its particular character.`;
    } else if (titleElements.hasSeason) {
      subjectPara += ` Seasonal qualities inform the palette and atmosphere.`;
    }
  } else if (subject === 'mythology') {
    const mythVariations = [
      `Classical mythology provided ${artistName} with dramatic subject matter. Ancient stories offered scope for idealized figures and dynamic compositions. The narrative allowed exploration of human themes through legendary contexts.`,
      `${artistName} drew on mythological sources familiar to educated viewers. Such subjects permitted artistic license with form and setting. The painting interprets ancient narrative through the artist's visual language.`,
      `Mythological themes connected ${artistName}'s work to Renaissance humanist traditions. Gods, heroes, and symbolic figures populate the composition. The ancient story provides framework for artistic invention.`,
      `The mythological subject gave ${artistName} freedom to explore idealized beauty. Classical narratives carried cultural prestige and interpretive richness. The painting presents ancient themes through period artistic conventions.`
    ];
    subjectPara = pick(mythVariations);
  } else if (subject === 'stillLife') {
    const stillLifeVariations = [
      `The still life arrangement transforms objects into subjects for contemplation. ${artistName} rendered textures and surfaces with careful attention. Such compositions often carried symbolic meanings about impermanence.`,
      `${artistName} organized everyday objects into a structured composition. Light reveals the material qualities of each element. The genre demanded technical skill in depicting varied surfaces.`,
      `Still life painting elevated humble objects to artistic significance. ${artistName} demonstrated skill in rendering glass, fabric, and organic matter. The arrangement suggests meanings beyond mere representation.`,
      `The assembled objects provided ${artistName} with a controlled subject. Each element contributes to the overall design. The painting rewards attention to detail and material rendering.`
    ];
    subjectPara = pick(stillLifeVariations);
  } else if (subject === 'figurative') {
    const figVariations = [
      `The figure study demonstrates ${artistName}'s understanding of human anatomy. The body's forms provided subject matter for artistic exploration. Light and pose combine to create sculptural presence.`,
      `${artistName} approached the human figure with observational care. Bodily structure and gesture carry expressive weight. The painting shows the artist working from direct study or established conventions.`,
      `Figure painting required ${artistName} to master form and movement. The human body offered endless possibilities for composition. The work balances naturalistic observation with artistic arrangement.`,
      `The depicted figure reveals ${artistName}'s approach to representing the body. Anatomy, posture, and lighting work together to establish presence. The painting engages with traditions of figure study and representation.`
    ];
    subjectPara = pick(figVariations);
  } else if (subject === 'coastal') {
    const coastalVariations = [
      `Marine subjects attracted ${artistName} with their atmospheric possibilities. Water, sky, and light combine in endlessly variable ways. The coastal setting provides both subject and mood.`,
      `${artistName} captured the character of sea and shore. Such subjects demanded skill in rendering water, weather, and reflection. The painting evokes the distinctive qualities of coastal environments.`,
      `The maritime subject offered ${artistName} opportunities for atmospheric effect. Ships, waves, or shorelines anchor the composition. The work reflects the period's interest in marine painting.`,
      `Coastal scenery provided ${artistName} with a dynamic subject. The meeting of land and water creates visual interest. The painting captures something of the sea's ever-changing character.`
    ];
    subjectPara = pick(coastalVariations);
  } else if (subject === 'animal') {
    const animalVariations = [
      `Animal subjects required ${artistName} to observe form and movement closely. The creature's anatomy and behavior inform the composition. Such paintings often connected to broader interests in nature and sport.`,
      `${artistName} rendered the animal subject with attention to physical accuracy. The painting demonstrates familiarity with the creature's form and character. The work belongs to traditions of animal painting and natural observation.`,
      `The animal subject gave ${artistName} a focused subject for study. Fur, feather, or hide demanded careful rendering of texture. The painting captures the creature's essential qualities.`,
      `${artistName} approached the animal subject with observational care. Movement, posture, and expression convey the creature's nature. The work reflects artistic interest in the natural world.`
    ];
    subjectPara = pick(animalVariations);
  } else if (subject === 'floral') {
    const floralVariations = [
      `Floral subjects gave ${artistName} a vehicle for exploring color and form. The arrangement of blooms creates rhythm and visual interest. Such paintings balance naturalistic observation with decorative appeal.`,
      `${artistName} rendered flowers with attention to their delicate structures. Light reveals petal textures and subtle color variations. The floral subject offered opportunities for both scientific accuracy and artistic expression.`,
      `The floral composition demonstrates ${artistName}'s skill with organic forms. Each bloom contributes to the overall arrangement. The painting celebrates natural beauty through careful observation.`,
      `Flower painting allowed ${artistName} to work with rich color and varied form. The bouquet or garden provided an arrangement of natural subjects. The work balances decorative appeal with observational accuracy.`
    ];
    subjectPara = pick(floralVariations);
  } else if (subject === 'abstract') {
    const abstractVariations = [
      `The composition explores relationships of form, color, and space. ${artistName} moved beyond representational subjects toward pure visual expression. The painting asks viewers to engage with its formal qualities directly.`,
      `${artistName} developed a visual language beyond literal representation. Shapes, colors, and textures create their own meanings. The work invites contemplation of its material and compositional elements.`,
      `Abstract concerns guided ${artistName}'s approach to this painting. The canvas becomes a field for exploring visual relationships. Meaning emerges from the interaction of painted elements.`,
      `The painting prioritizes visual experience over narrative content. ${artistName} organized form and color according to internal logic. The work stands as an object for direct aesthetic engagement.`
    ];
    subjectPara = pick(abstractVariations);
  } else {
    // General fallback with variety
    const generalVariations = [
      `The composition reveals ${artistName}'s approach to pictorial organization. Visual elements work together to establish the painting's character. The work demonstrates both technical ability and artistic intention.`,
      `${artistName} brought skill and vision to this subject. Form, color, and composition serve the painting's overall effect. The work rewards attention to its specific qualities and details.`,
      `The painting shows ${artistName} engaging with subject and medium. Artistic choices shape how viewers encounter the image. The work carries the marks of its maker's hand and eye.`,
      `${artistName} created a composition that balances various pictorial elements. The painting's structure guides the viewer's experience. Technical execution supports the work's expressive aims.`
    ];
    subjectPara = pick(generalVariations);
  }

  paragraphs.push(subjectPara);

  // === PARAGRAPH 3: Museum/location context ===
  let locationPara = '';

  if (museum) {
    const museumLink = internalLink(museum.name, 'museum', museum.slug);
    const cityRef = museum.city ? ` in ${museum.city}` : '';

    const museumVariations = [
      `The painting now belongs to ${museumLink}${cityRef}. Seeing the original offers an experience no reproduction can match. The work takes its place among the museum's holdings.`,
      `${museumLink}${cityRef} houses this painting in its collection. Visitors encounter the work in the context of related pieces. The museum setting reveals qualities of scale, color, and surface.`,
      `Today the work resides at ${museumLink}${cityRef}. The collection provides context for understanding the painting's place in art history. Original works communicate differently than photographs or prints.`,
      `The painting can be viewed at ${museumLink}${cityRef}. Direct encounter with the original reveals brushwork and color relationships. The museum preserves the work for present and future audiences.`
    ];
    locationPara = pick(museumVariations);
  }

  // Add LWA link
  if (subject && LWA_COLLECTIONS[subject]) {
    const lwaLink = externalLink(LWA_COLLECTIONS[subject]);
    const lwaVariations = [
      ` Those interested in similar aesthetics can explore ${lwaLink} for contemporary interpretations.`,
      ` For art inspired by this tradition, ${lwaLink} offers quality options.`,
      ` The ${lwaLink} collection carries forward this visual tradition.`,
      ` Explore ${lwaLink} for works that echo these aesthetic values.`
    ];
    if (locationPara) {
      locationPara += pick(lwaVariations);
    } else {
      locationPara = `This artistic tradition continues to resonate with contemporary audiences. ${pick(lwaVariations)}`;
    }
  }

  if (locationPara) {
    paragraphs.push(locationPara);
  }

  // === PARAGRAPH 4: Artist context (sometimes include, sometimes skip for variety) ===
  if (artist?.nationality && artist?.birthYear && Math.random() > 0.3) {
    const lifespan = artist.deathYear ? `(${artist.birthYear}-${artist.deathYear})` : `(born ${artist.birthYear})`;

    const bioVariations = [
      `${artistName} ${lifespan} was a ${artist.nationality} painter${movements?.length > 0 ? ` associated with ${movements.map(m => m.name).join(' and ')}` : ''}. The artist's career produced a substantial body of work.`,
      `Born in ${artist.birthYear}, ${artistName} worked as a ${artist.nationality} artist${movements?.length > 0 ? ` within the ${movements[0].name} context` : ''}. This painting represents one aspect of their broader production.`,
      `The ${artist.nationality} artist ${artistName} ${lifespan}${movements?.length > 0 ? ` contributed to the ${movements[0].name} movement` : ' developed a distinctive artistic approach'}. Their paintings remain valued for their particular qualities.`
    ];

    paragraphs.push(pick(bioVariations));
  }

  return paragraphs.join('\n\n');
}

/**
 * Synthesize description from Wikipedia facts
 */
function synthesizeFromWiki(artwork, artist, museum, movements, wikiFacts) {
  const paragraphs = [];
  const artistName = artist?.name || 'The artist';
  const artistLink = artist?.slug ? internalLink(artistName, 'artist', artist.slug) : artistName;
  const subject = classifySubject(artwork.title, artwork.medium);
  const cleanTitle = artwork.title.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');

  const year = wikiFacts.year || artwork.year;
  const medium = wikiFacts.medium || artwork.medium;
  const period = movements?.[0]?.name || getPeriodName(year);

  // Intro with Wikipedia-derived context
  let intro = '';
  if (year && medium) {
    intro = `${artistLink} created "${cleanTitle}" in ${year}, using ${medium.toLowerCase()}.`;
  } else if (year) {
    intro = `"${cleanTitle}" dates to ${year}, when ${artistLink} was actively working.`;
  } else {
    intro = `${artistLink} produced "${cleanTitle}" as part of their artistic output.`;
  }

  if (movements && movements.length > 0) {
    const movementLink = internalLink(movements[0].name, 'movement', movements[0].slug);
    intro += ` The painting reflects the ${movementLink} movement's aesthetic concerns.`;
  } else if (period) {
    intro += ` The work belongs to the ${period} artistic context.`;
  }

  if (wikiFacts.context.includes('famous')) {
    intro += ` The painting has become one of the artist's most recognized works.`;
  }
  if (wikiFacts.context.includes('commissioned')) {
    intro += ` The work was originally created on commission.`;
  }

  paragraphs.push(intro);

  // Add subject paragraph using the varied templates
  const subjectPara = generateSubjectParagraph(subject, artistName, cleanTitle);
  if (subjectPara) {
    paragraphs.push(subjectPara);
  }

  // Museum context
  if (museum) {
    const museumLink = internalLink(museum.name, 'museum', museum.slug);
    const cityRef = museum.city ? ` in ${museum.city}` : '';
    let locationPara = `Today the painting is held at ${museumLink}${cityRef}. The original reveals qualities that reproductions cannot capture.`;

    if (subject && LWA_COLLECTIONS[subject]) {
      const lwaLink = externalLink(LWA_COLLECTIONS[subject]);
      locationPara += ` For similar aesthetics, explore ${lwaLink}.`;
    }
    paragraphs.push(locationPara);
  }

  return paragraphs.join('\n\n');
}

/**
 * Generate subject-specific paragraph (helper for variety)
 */
function generateSubjectParagraph(subject, artistName, title) {
  const variations = {
    portrait: [
      `The portrait captures its subject with attention to expression and bearing. ${artistName} balanced physical accuracy with psychological suggestion. Details of costume and setting provide historical context.`,
      `Portraiture allowed ${artistName} to study human character and presence. The sitter's features and posture communicate personality. The painting combines observational skill with artistic interpretation.`
    ],
    religious: [
      `The sacred subject connected the painting to devotional traditions. ${artistName} brought individual interpretation to religious iconography. The work served both spiritual contemplation and artistic expression.`,
      `Religious imagery provided ${artistName} with meaningful subject matter. The painting balances traditional symbolism with personal vision. Such works functioned within the devotional practices of their era.`
    ],
    landscape: [
      `The landscape composition captures atmosphere and place. ${artistName} translated outdoor observation into painted form. Light, color, and spatial depth create the scene's character.`,
      `Natural scenery provided ${artistName} with subjects for exploring light and form. The painting evokes a specific environment through careful observation. The work balances representation with artistic interpretation.`
    ],
    default: [
      `The composition demonstrates ${artistName}'s pictorial skills. Form, color, and arrangement work together purposefully. The painting rewards attention to its specific visual qualities.`,
      `${artistName} brought technical ability and artistic vision to this work. The composition organizes its elements with care. The painting carries the marks of its maker's intentions and choices.`
    ]
  };

  const options = variations[subject] || variations.default;
  return pick(options);
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

  const artworks = await prisma.artwork.findMany({
    where: {
      Artist: { isNot: null },
      OR: [
        { description: null },
        { description: { not: { contains: '<strong>' } } }
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

    if (!description) {
      if (wikiTitle) {
        console.log(`    Wikipedia: Extract too short, using metadata`);
      } else {
        console.log(`    Wikipedia: Not found, using metadata`);
      }
      description = generateFromMetadata(artwork, artist, museum, movements);
      metadataFallback++;
    }

    const wordCount = description.split(/\s+/).length;
    const hasBoldLinks = description.includes('<strong>');

    console.log(`    Source: ${source} | Words: ${wordCount} | Bold links: ${hasBoldLinks ? 'yes' : 'no'}`);

    if (DRY_RUN) {
      console.log(`    [DRY RUN] Preview:`);
      console.log(`    ${description.substring(0, 250).replace(/\n/g, ' ')}...`);
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
