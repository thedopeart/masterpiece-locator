const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Prices stored in cents (USD)
const toUsdCents = (millions) => BigInt(millions * 1000000 * 100);

const auctionData = [
  {
    artworkId: 'cmkhxh2vs00408teksxferpv8', // Portrait of Adele Bloch-Bauer I
    saleDate: new Date('2006-06-18'),
    priceUsd: toUsdCents(135),
    auctionHouse: 'Private Sale',
    saleLocation: 'New York',
    buyer: 'Ronald Lauder / Neue Galerie',
    seller: 'Maria Altmann',
    isRecord: true,
    notes: 'Purchased after landmark Supreme Court case returned the painting to the Altmann family. Was the most expensive painting ever sold at the time.',
    sourceUrl: 'https://www.nytimes.com/2006/06/19/arts/design/19klim.html'
  },
  {
    artworkId: 'cmkjenzxe000vigyh8qgykr4f', // Portrait of Adele Bloch-Bauer II
    saleDate: new Date('2006-11-08'),
    priceUsd: toUsdCents(87.9),
    auctionHouse: "Christie's",
    saleLocation: 'New York',
    buyer: 'Private Collector',
    seller: 'Maria Altmann',
    isRecord: false,
    notes: 'Part of the restituted Klimt paintings from the Altmann case.',
    sourceUrl: 'https://www.christies.com/en/lot/lot-4797025'
  },
  {
    artworkId: 'cmkjepehq0003m9r4rgyoxstf', // Portrait of Dr. Gachet
    saleDate: new Date('1990-05-15'),
    priceUsd: toUsdCents(82.5),
    auctionHouse: "Christie's",
    saleLocation: 'New York',
    buyer: 'Ryoei Saito',
    seller: 'Siegfried Kramarsky family',
    isRecord: true,
    notes: 'Set world record for any artwork at auction. Saito controversially stated he wanted it cremated with him. Later sold privately.',
    sourceUrl: 'https://www.nytimes.com/1990/05/16/arts/van-gogh-s-portrait-of-dr-gachet-sold-for-82.5-million.html'
  },
  {
    artworkId: 'cmkhxh219003q8tekmyrq9kp8', // Irises
    saleDate: new Date('1987-11-11'),
    priceUsd: toUsdCents(53.9),
    auctionHouse: "Sotheby's",
    saleLocation: 'New York',
    buyer: 'Alan Bond',
    seller: 'John Whitney Payson',
    isRecord: true,
    notes: 'Set auction record at the time. Bond defaulted on payment; later resold to J. Paul Getty Museum.',
    sourceUrl: 'https://www.nytimes.com/1987/11/12/arts/record-53.9-million-for-a-van-gogh.html'
  },
  {
    artworkId: 'cmkhrgqxj0028j6io9t2muelp', // The Scream
    saleDate: new Date('2012-05-02'),
    priceUsd: toUsdCents(119.9),
    auctionHouse: "Sotheby's",
    saleLocation: 'New York',
    buyer: 'Leon Black',
    seller: 'Petter Olsen',
    isRecord: true,
    notes: 'One of four versions. The only version in private hands. Most expensive artwork sold at auction at the time.',
    sourceUrl: 'https://www.sothebys.com/en/auctions/ecatalogue/2012/impressionist-modern-art-evening-sale-n08871/lot.20.html'
  },
  {
    artworkId: 'cmkjenzn2000tigyhmgt37jtj', // When Will You Marry?
    saleDate: new Date('2015-02-01'),
    priceUsd: toUsdCents(210),
    auctionHouse: 'Private Sale',
    saleLocation: 'Switzerland',
    buyer: 'Qatar Museums (reported)',
    seller: 'Rudolf Staechelin Family Trust',
    isRecord: true,
    notes: 'Reported as highest price ever for a painting at the time. Exact price disputed; estimates range $210-300M.',
    sourceUrl: 'https://www.nytimes.com/2015/02/06/arts/design/gauguin-painting-is-said-to-fetch-nearly-300-million.html'
  },
  {
    artworkId: 'cmkhrgob8001ej6iocdj4mfcl', // Sunflowers
    saleDate: new Date('1987-03-30'),
    priceUsd: toUsdCents(39.9),
    auctionHouse: "Christie's",
    saleLocation: 'London',
    buyer: 'Yasuda Fire and Marine Insurance',
    seller: 'Private Collection',
    isRecord: true,
    notes: 'Set world record at the time. Now displayed at the Seiji Togo Memorial Sompo Japan Nipponkoa Museum of Art in Tokyo.',
    sourceUrl: 'https://www.christies.com/lot/lot-4282633'
  },
  {
    artworkId: 'cmkhrgrm9002gj6ioszmwn6fh', // Dance at Le Moulin de la Galette
    saleDate: new Date('1990-05-17'),
    priceUsd: toUsdCents(78.1),
    auctionHouse: "Sotheby's",
    saleLocation: 'New York',
    buyer: 'Ryoei Saito',
    seller: 'Betsey Cushing Whitney',
    isRecord: false,
    notes: 'Second version of the painting (smaller study). The primary version remains at Musee d\'Orsay.',
    sourceUrl: 'https://www.nytimes.com/1990/05/18/arts/renoir-and-van-gogh-sold-for-160-6-million.html'
  },
  {
    artworkId: 'cmkhxh17t003g8tek4yogfldz', // The Card Players (Cézanne)
    saleDate: new Date('2011-04-01'),
    priceUsd: toUsdCents(250),
    auctionHouse: 'Private Sale',
    saleLocation: 'Unknown',
    buyer: 'State of Qatar',
    seller: 'George Embiricos',
    isRecord: true,
    notes: 'One of five versions in the series. Reported as highest price ever paid for a painting at the time. Exact price disputed ($250-300M range).',
    sourceUrl: 'https://www.vanityfair.com/culture/2012/02/qatar-buys-cezanne-card-players-201202'
  }
];

async function main() {
  console.log('Seeding auction sale data...');

  for (const sale of auctionData) {
    // Check if artwork exists
    const artwork = await prisma.artwork.findUnique({
      where: { id: sale.artworkId },
      select: { id: true, title: true }
    });

    if (!artwork) {
      console.log(`Skipping: Artwork ${sale.artworkId} not found`);
      continue;
    }

    // Create auction sale record
    const created = await prisma.auctionSale.create({
      data: sale
    });

    console.log(`Created auction sale for "${artwork.title}": $${Number(sale.priceUsd) / 100 / 1000000}M`);

    // Update artwork with cached price data
    await prisma.artwork.update({
      where: { id: sale.artworkId },
      data: {
        lastSalePrice: sale.priceUsd,
        lastSaleDate: sale.saleDate,
        priceCategory: 'sold',
        updatedAt: new Date()
      }
    });
  }

  console.log('\nAuction data seeding complete!');

  // Show summary
  const count = await prisma.auctionSale.count();
  console.log(`Total auction sales in database: ${count}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
