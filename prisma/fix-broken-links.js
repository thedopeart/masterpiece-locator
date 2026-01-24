const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Fixing Broken Internal Links ===\n');

  // Define slug replacements
  const museumReplacements = {
    // Louvre variants
    'louvre': 'louvre-paris-france',
    'louvre-museum': 'louvre-paris-france',
    'musee-du-louvre': 'louvre-paris-france',
    'the-louvre': 'louvre-paris-france',

    // Prado variants
    'prado': 'museo-del-prado-madrid-spain',
    'museo-del-prado': 'museo-del-prado-madrid-spain',

    // Uffizi variants
    'uffizi': 'uffizi-gallery-florence-italy',
    'uffizi-gallery': 'uffizi-gallery-florence-italy',

    // National Gallery London
    'national-gallery-london': 'national-gallery',
    'national-gallery-london-uk': 'national-gallery',

    // Hermitage
    'hermitage-museum-saint-petersburg-russia': 'hermitage',
    'hermitage-museum': 'hermitage',

    // Met variants
    'metropolitan-museum-of-art-met-new-york-city-ny-us': 'met',
    'metropolitan-museum': 'met',
    'metropolitan-museum-of-art': 'met',
    'the-metropolitan-museum-of-art': 'met',

    // Orsay
    'mus233e-d39orsay-paris-france': 'musee-dorsay',
    'musee-dorsay-paris-france': 'musee-dorsay',

    // Other major museums
    'kunsthistorisches-museum-vienna-austria': 'kunsthistorisches-museum',
    'rijksmuseum-amsterdam-netherlands': 'rijksmuseum',
    'tretyakov-gallery-moscow-russia': 'tretyakov-gallery',
    'museum-of-modern-art-moma': 'moma',
    'art-institute-of-chicago': 'art-institute-chicago',
    'art-institute-of-chicago-chicago-il-us-national-ga': 'art-institute-chicago',
    'borghese-gallery-rome': 'borghese-gallery-rome-italy',
    'alte-pinakothek-munich-germany': 'alte-pinakothek',
    'philadelphia-museum-of-art-philadelphia-pa-us': 'philadelphia-museum-of-art',
    'national-gallery-of-art-washington-dc-us': 'national-gallery-of-art',
    'kunstmuseum-basel-basel-switzerland': 'kunstmuseum-basel',
    'vatican-museums-rome': 'vatican-museums',
    'vatican-museums-vatican-city': 'vatican-museums',

    // Tate
    'tate-modern-london': 'tate-modern-london-uk',
    'tate-modern': 'tate-modern-london-uk',
    'tate-britain-london-uk': 'tate-britain',

    // Courtauld
    'courtauld-gallery': 'courtauld-gallery-london',

    // Boston MFA
    'museum-of-fine-arts-boston': 'mfa-boston',
    'museum-of-fine-arts-mfa-boston-ma-us': 'mfa-boston',

    // British Museum
    'british-museum-london-uk': 'british-museum',
    'british-museum-london': 'british-museum',

    // Berlin museums
    'staatliche-museen-zu-berlin-berlin-germany': 'gem228ldegalerie-berlin-germany',

    // Wallace Collection
    'wallace-collection-london-uk': 'wallace-collection',
    'wallace-collection-london': 'wallace-collection',

    // Wadsworth
    'wadsworth-atheneum-hartford-ct-us': 'wadsworth-atheneum',

    // Rembrandt House - doesn't exist, remove links
    'rembrandt-house-museum': '',
    'his-house-this-is-now-recreated-in-the-original-ro': '',

    // Brooklyn Museum
    'brooklyn-museum-new-york-city-ny-us': 'brooklyn-museum',

    // Kröller-Müller
    'kr246llerm252ller-museum-otterlo-netherlands': 'kroeller-mueller-museum',
    'kroller-muller-museum': 'kroeller-mueller-museum',

    // MoMA variant
    'museum-of-modern-art-moma-new-york-city-ny-us': 'moma',

    // Kunsthaus Zurich
    'kunsthaus-z252rich-z252rich-switzerland': 'kunsthaus-zurich',
    'kunsthaus-zurich-switzerland': 'kunsthaus-zurich',

    // Van Gogh Museum
    'van-gogh-museum-amsterdam-netherlands': 'van-gogh-museum',
    'van-gogh-museum-amsterdam': 'van-gogh-museum',

    // Thyssen
    'thyssen-bornemisza-museum': 'thyssenbornemisza-museum-madrid-spain',
    'thyssen-bornemisza-museum-madrid': 'thyssenbornemisza-museum-madrid-spain',

    // Frick
    'frick-collection-new-york-city-ny-us': 'frick-collection',
    'frick-collection-new-york': 'frick-collection',

    // Brera
    'palazzo-brera-milan-italy': 'pinacoteca-di-brera',
    'pinacoteca-brera': 'pinacoteca-di-brera',
    'brera-milan': 'pinacoteca-di-brera',

    // Belgium Royal Museums
    'royal-museums-of-fine-arts-of-belgium-brussels-bel': 'royal-museums-belgium',
    'royal-museums-of-fine-arts-of-belgium': 'royal-museums-belgium',

    // Dulwich
    'dulwich-picture-gallery-london-uk': 'dulwich-picture-gallery',
    'dulwich-picture-gallery-london': 'dulwich-picture-gallery',

    // Neue Pinakothek
    'neue-pinakothek-munich-germany': 'neue-pinakothek',
    'neue-pinakothek-munich': 'neue-pinakothek',

    // Groeningemuseum
    'groeningemuseum-bruges-belgium': 'groeningemuseum',
    'groeningemuseum-bruges': 'groeningemuseum',

    // State Hermitage
    'state-hermitage-museum': 'hermitage',
    'state-hermitage-museum-st-petersburg': 'hermitage',

    // Accademia Venice
    'gallerie-dellaccademia-venice': 'gallerie-dell-accademia-venice',
    'accademia-gallery-venice': 'gallerie-dell-accademia-venice',
  };

  const artistReplacements = {
    'vincent-van-gogh': 'van-gogh',
    'rembrandt-van-rijn': 'rembrandt',
    'henri-de-toulouse-lautrec': 'henri-toulouse-lautrec',
    'pieter-bruegel-the-elder': 'pieter-bruegel-elder',
    'lucas-cranach-the-elder': 'lucas-cranach-elder',
  };

  const movementReplacements = {
    'realism': 'american-realism',
    'early-renaissance': 'renaissance',
    'high-renaissance': 'renaissance',
    'italian-renaissance': 'renaissance',
  };

  // Get all artworks with descriptions and FAQs
  const artworks = await prisma.artwork.findMany({
    where: {
      OR: [
        { description: { not: null } },
        { faqs: { not: null } }
      ]
    },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      faqs: true,
    }
  });

  console.log(`Processing ${artworks.length} artworks...\n`);

  let totalFixed = 0;
  let artworksUpdated = 0;

  for (const artwork of artworks) {
    let description = artwork.description || '';
    let faqs = artwork.faqs || [];
    let changed = false;

    // Fix museum links
    for (const [wrong, correct] of Object.entries(museumReplacements)) {
      const pattern = new RegExp(`/apps/masterpieces/museum/${wrong}(?="|')`, 'g');

      if (correct === '') {
        // Remove the entire link if replacement is empty
        const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/museum/${wrong}"[^>]*>.*?</a>`, 'gi');
        if (linkPattern.test(description)) {
          description = description.replace(linkPattern, (match) => {
            // Extract the text content
            const textMatch = match.match(/>([^<]+)</);
            totalFixed++;
            changed = true;
            return textMatch ? textMatch[1] : '';
          });
        }
      } else if (pattern.test(description)) {
        description = description.replace(pattern, `/apps/masterpieces/museum/${correct}`);
        totalFixed++;
        changed = true;
      }

      // Fix in FAQs
      if (Array.isArray(faqs)) {
        faqs = faqs.map(faq => {
          if (faq.answer) {
            if (correct === '') {
              const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/museum/${wrong}"[^>]*>.*?</a>`, 'gi');
              if (linkPattern.test(faq.answer)) {
                const newAnswer = faq.answer.replace(linkPattern, (match) => {
                  const textMatch = match.match(/>([^<]+)</);
                  totalFixed++;
                  changed = true;
                  return textMatch ? textMatch[1] : '';
                });
                return { ...faq, answer: newAnswer };
              }
            } else if (pattern.test(faq.answer)) {
              totalFixed++;
              changed = true;
              return { ...faq, answer: faq.answer.replace(pattern, `/apps/masterpieces/museum/${correct}`) };
            }
          }
          return faq;
        });
      }
    }

    // Fix artist links
    for (const [wrong, correct] of Object.entries(artistReplacements)) {
      const pattern = new RegExp(`/apps/masterpieces/artist/${wrong}(?="|')`, 'g');

      if (pattern.test(description)) {
        description = description.replace(pattern, `/apps/masterpieces/artist/${correct}`);
        totalFixed++;
        changed = true;
      }

      if (Array.isArray(faqs)) {
        faqs = faqs.map(faq => {
          if (faq.answer && pattern.test(faq.answer)) {
            totalFixed++;
            changed = true;
            return { ...faq, answer: faq.answer.replace(pattern, `/apps/masterpieces/artist/${correct}`) };
          }
          return faq;
        });
      }
    }

    // Fix movement links
    for (const [wrong, correct] of Object.entries(movementReplacements)) {
      const pattern = new RegExp(`/apps/masterpieces/movement/${wrong}(?="|')`, 'g');

      if (pattern.test(description)) {
        description = description.replace(pattern, `/apps/masterpieces/movement/${correct}`);
        totalFixed++;
        changed = true;
      }

      if (Array.isArray(faqs)) {
        faqs = faqs.map(faq => {
          if (faq.answer && pattern.test(faq.answer)) {
            totalFixed++;
            changed = true;
            return { ...faq, answer: faq.answer.replace(pattern, `/apps/masterpieces/movement/${correct}`) };
          }
          return faq;
        });
      }
    }

    // Update if changed
    if (changed) {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          description,
          faqs,
          updatedAt: new Date()
        }
      });
      artworksUpdated++;

      if (artworksUpdated % 100 === 0) {
        console.log(`Updated ${artworksUpdated} artworks...`);
      }
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Total link fixes: ${totalFixed}`);
  console.log(`Artworks updated: ${artworksUpdated}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
