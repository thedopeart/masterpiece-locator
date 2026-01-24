const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Prices stored in cents (USD)
const toUsdCents = (millions) => BigInt(millions * 1000000 * 100);

const valuationData = [
  {
    artworkId: 'cmkhrgovg001kj6io0g3z05pp', // Mona Lisa
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(900),
    valuationType: 'insurance',
    source: 'Insurance valuation (inflation-adjusted from 1962)',
    notes: 'Insured for $100M in 1962 for US tour. Adjusted for inflation equals approximately $900M-1B. Cannot legally be sold as French national treasure.',
    sourceUrl: 'https://www.guinnessworldrecords.com/world-records/most-valuable-painting-(insurance-valuation)'
  },
  {
    artworkId: 'cmkhrgo31001cj6ionpesj1i4', // The Starry Night
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(200),
    valuationType: 'expert',
    source: 'Art market analysts',
    notes: 'Part of MoMA permanent collection. Never been sold. Expert estimates range $100-200M based on comparable Van Gogh sales.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgqfl0022j6iol4nrdqkt', // Guernica
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(200),
    valuationType: 'expert',
    source: 'Art historians',
    notes: 'Spanish national treasure held at Museo Reina Sofia. Cannot be sold or moved from Spain per Picasso estate terms. Priceless historical significance.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkilpldc000to9d7pbpsnc78', // The Kiss (Klimt)
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(150),
    valuationType: 'expert',
    source: 'Art market analysts',
    notes: 'Austrian national treasure at Belvedere Museum. Legally protected from sale. Estimated based on other Klimt sales.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkjdya7v0021u6v2lg7uo9li', // The Last Supper (Leonardo)
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(1000),
    valuationType: 'expert',
    source: 'Art historians',
    notes: 'Painted directly on wall of Santa Maria delle Grazie, Milan. Cannot be sold or moved. Among the most valuable artworks in existence.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgpqk001uj6io4jtr17i4', // The Night Watch
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(500),
    valuationType: 'expert',
    source: 'Rijksmuseum / Art historians',
    notes: 'Dutch national treasure. Never been sold. Core of Rijksmuseum collection. Estimated based on significance and insurance.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgq3a001yj6iop2m81hkl', // Girl with a Pearl Earring
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(100),
    valuationType: 'expert',
    source: 'Art market analysts',
    notes: 'Owned by Mauritshuis since 1902. Vermeer market comparison based on rare sales. Called the "Mona Lisa of the North."',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgpdw001qj6ioqsedfnxh', // The Birth of Venus (Botticelli)
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(500),
    valuationType: 'expert',
    source: 'Art historians',
    notes: 'Italian national treasure at the Uffizi. Cannot be sold. One of the most recognized paintings in Western art.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgr3k002aj6ioc1xmikob', // The Creation of Adam
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(1000),
    valuationType: 'expert',
    source: 'Art historians',
    notes: 'Part of the Sistine Chapel ceiling at the Vatican. Cannot be sold. Among the most reproduced religious images ever created.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgqrf0026j6iomgjh51lh', // The Persistence of Memory
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(150),
    valuationType: 'expert',
    source: 'Art market analysts',
    notes: 'Given to MoMA in 1934. Part of permanent collection. Most famous Dali work. Estimated based on other Surrealist sales.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkiju2oq004rccbdoqosmeyi', // American Gothic
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(50),
    valuationType: 'expert',
    source: 'Art Institute of Chicago',
    notes: 'Purchased for $300 in 1930. Now a cultural icon. Part of Art Institute permanent collection.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkiju2bm004nccbdjvgodtel', // Nighthawks
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(75),
    valuationType: 'expert',
    source: 'Art Institute of Chicago',
    notes: 'Purchased for $3,000 in 1942. Most recognized American painting. Cannot be deaccessioned per museum policy.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhxh1vh003o8tekox95crkr', // The Garden of Earthly Delights
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(300),
    valuationType: 'expert',
    source: 'Art historians',
    notes: 'Spanish royal collection since 1593. At Museo del Prado. Cannot be sold as national patrimony.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgrfn002ej6ioy0d772ts', // Las Meninas
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(400),
    valuationType: 'expert',
    source: 'Art historians',
    notes: 'Spanish royal collection. Centerpiece of Museo del Prado. Considered one of the most analyzed paintings in Western art.',
    sourceUrl: null
  },
  {
    artworkId: 'cmkhrgp1o001mj6ioeodfgyd7', // Water Lilies (MoMA)
    valuationDate: new Date('2023-01-01'),
    estimateUsd: toUsdCents(80),
    valuationType: 'auction_estimate',
    source: 'Based on comparable Monet Water Lilies sales',
    notes: 'One of approximately 250 Water Lilies paintings. Various versions have sold at auction for $27-80M.',
    sourceUrl: null
  }
];

async function main() {
  console.log('Seeding artwork valuations...');

  for (const valuation of valuationData) {
    // Check if artwork exists
    const artwork = await prisma.artwork.findUnique({
      where: { id: valuation.artworkId },
      select: { id: true, title: true }
    });

    if (!artwork) {
      console.log(`Skipping: Artwork ${valuation.artworkId} not found`);
      continue;
    }

    // Create valuation record
    await prisma.artworkValuation.create({
      data: valuation
    });

    console.log(`Created valuation for "${artwork.title}": $${Number(valuation.estimateUsd) / 100 / 1000000}M`);

    // Update artwork with price category
    await prisma.artwork.update({
      where: { id: valuation.artworkId },
      data: {
        priceCategory: 'priceless',
        updatedAt: new Date()
      }
    });
  }

  console.log('\nValuation data seeding complete!');

  // Show summary
  const count = await prisma.artworkValuation.count();
  console.log(`Total valuations in database: ${count}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
