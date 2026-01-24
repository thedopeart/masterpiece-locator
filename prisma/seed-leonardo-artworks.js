const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Leonardo da Vinci Artworks ===\n');

  const leonardoId = 'cmkhrge5p000sj6iobkcy7vhp';

  // Museum IDs
  const museums = {
    louvre: 'd6b2c0bc-239d-4a46-90f9-2d4c67df6501',
    nationalGalleryLondon: 'cmkhrgci2000ej6ioarjgjphz',
    uffizi: '4ce015ba-cf66-408a-b8bc-a84b48bee334',
    vatican: 'cmkhrgd19000nj6io0n23ez4q',
    accademiaVenice: 'cmkjdx3uh00065nnrw76bxlr1',
  };

  // Create Krakow museum if needed
  let krakowMuseum = await prisma.museum.findFirst({
    where: { slug: 'national-museum-krakow' }
  });

  if (!krakowMuseum) {
    krakowMuseum = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'National Museum in Krakow',
        slug: 'national-museum-krakow',
        city: 'Krakow',
        country: 'Poland',
        description: 'The National Museum in Krakow is one of the largest museums in Poland, housing Lady with an Ermine by Leonardo da Vinci.',
        updatedAt: new Date(),
      }
    });
    console.log('Created museum: National Museum in Krakow');
  }

  const artworks = [
    {
      title: 'Lady with an Ermine',
      slug: 'lady-with-an-ermine',
      year: 1490,
      medium: 'Oil on walnut panel',
      dimensions: '54 cm × 39 cm',
      museumId: krakowMuseum.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/800px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg',
    },
    {
      title: 'Virgin of the Rocks (Louvre)',
      slug: 'virgin-of-the-rocks-louvre',
      year: 1486,
      medium: 'Oil on panel, transferred to canvas',
      dimensions: '199 cm × 122 cm',
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Leonardo_da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg/800px-Leonardo_da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg',
    },
    {
      title: 'Virgin of the Rocks (London)',
      slug: 'virgin-of-the-rocks-london',
      year: 1508,
      medium: 'Oil on panel',
      dimensions: '189.5 cm × 120 cm',
      museumId: museums.nationalGalleryLondon,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28National_Gallery_London%29.jpg/800px-Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28National_Gallery_London%29.jpg',
    },
    {
      title: 'La Belle Ferronnière',
      slug: 'la-belle-ferronniere',
      year: 1496,
      medium: 'Oil on walnut panel',
      dimensions: '62 cm × 44 cm',
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Leonardo_da_Vinci_-_La_Belle_Ferronni%C3%A8re.jpg/800px-Leonardo_da_Vinci_-_La_Belle_Ferronni%C3%A8re.jpg',
    },
    {
      title: 'Saint John the Baptist',
      slug: 'saint-john-the-baptist-leonardo',
      year: 1516,
      medium: 'Oil on walnut panel',
      dimensions: '69 cm × 57 cm',
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg/800px-Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg',
    },
    {
      title: 'The Virgin and Child with Saint Anne',
      slug: 'virgin-and-child-with-saint-anne',
      year: 1510,
      medium: 'Oil on wood',
      dimensions: '168 cm × 130 cm',
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg/800px-Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg',
    },
    {
      title: 'Adoration of the Magi',
      slug: 'adoration-of-the-magi-leonardo',
      year: 1481,
      medium: 'Oil on wood',
      dimensions: '246 cm × 243 cm',
      museumId: museums.uffizi,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg/800px-Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg',
    },
    {
      title: 'Saint Jerome in the Wilderness',
      slug: 'saint-jerome-wilderness-leonardo',
      year: 1482,
      medium: 'Oil on walnut panel',
      dimensions: '103 cm × 75 cm',
      museumId: museums.vatican,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Leonardo_da_Vinci_-_Saint_Jerome.jpg/800px-Leonardo_da_Vinci_-_Saint_Jerome.jpg',
    },
    {
      title: 'Vitruvian Man',
      slug: 'vitruvian-man',
      year: 1490,
      medium: 'Pen, ink and wash on paper',
      dimensions: '34.6 cm × 25.5 cm',
      museumId: museums.accademiaVenice,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/800px-Da_Vinci_Vitruve_Luc_Viatour.jpg',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of artworks) {
    const exists = await prisma.artwork.findFirst({
      where: { slug: art.slug }
    });

    if (exists) {
      console.log(`Skipped (exists): ${art.title}`);
      skipped++;
      continue;
    }

    await prisma.artwork.create({
      data: {
        id: randomUUID(),
        title: art.title,
        slug: art.slug,
        year: art.year,
        medium: art.medium,
        dimensions: art.dimensions,
        imageUrl: art.imageUrl,
        artistId: leonardoId,
        museumId: art.museumId,
        updatedAt: new Date(),
      }
    });

    console.log(`Added: ${art.title}`);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
