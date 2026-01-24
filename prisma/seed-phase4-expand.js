const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toUsdCents = (millions) => BigInt(Math.round(millions * 1000000 * 100));

const PRIVATE_COLLECTION_ID = 'd882cf2c-16fc-4314-bbdc-09e4a2630a26';

// Get or create artist
async function getOrCreateArtist(artistData) {
  let artist = await prisma.artist.findFirst({
    where: { slug: artistData.slug }
  });

  if (!artist) {
    artist = await prisma.artist.create({
      data: {
        id: `artist-${artistData.slug}`,
        ...artistData,
        updatedAt: new Date()
      }
    });
    console.log(`  Created artist: ${artistData.name}`);
  }

  return artist;
}

// New artists needed
const newArtists = [
  {
    slug: 'david-hockney',
    name: 'David Hockney',
    birthYear: 1937,
    deathYear: null,
    nationality: 'British',
    bioShort: 'Contemporary artist known for swimming pool paintings and iPad drawings.'
  },
  {
    slug: 'jeff-koons',
    name: 'Jeff Koons',
    birthYear: 1955,
    deathYear: null,
    nationality: 'American',
    bioShort: 'Contemporary artist known for neo-pop sculptures including Balloon Dog series.'
  },
  {
    slug: 'kazimir-malevich',
    name: 'Kazimir Malevich',
    birthYear: 1879,
    deathYear: 1935,
    nationality: 'Ukrainian-Russian',
    bioShort: 'Pioneer of geometric abstract art and founder of Suprematism movement.'
  },
  {
    slug: 'gerhard-richter',
    name: 'Gerhard Richter',
    birthYear: 1932,
    deathYear: null,
    nationality: 'German',
    bioShort: 'Contemporary painter known for photo-realistic and abstract works.'
  },
  {
    slug: 'qi-baishi',
    name: 'Qi Baishi',
    birthYear: 1864,
    deathYear: 1957,
    nationality: 'Chinese',
    bioShort: 'Master of ink wash painting known for shrimp, birds, and nature subjects.'
  },
  {
    slug: 'paul-gauguin',
    name: 'Paul Gauguin',
    birthYear: 1848,
    deathYear: 1903,
    nationality: 'French',
    bioShort: 'Post-Impressionist known for Tahitian paintings and bold colors.'
  },
  {
    slug: 'fernand-leger',
    name: 'Fernand Léger',
    birthYear: 1881,
    deathYear: 1955,
    nationality: 'French',
    bioShort: 'Cubist painter known for tubular forms and mechanical aesthetic.'
  },
  {
    slug: 'egon-schiele',
    name: 'Egon Schiele',
    birthYear: 1890,
    deathYear: 1918,
    nationality: 'Austrian',
    bioShort: 'Expressionist known for raw, provocative figurative works and self-portraits.'
  }
];

// Additional auction sales to add
const additionalSales = [
  // $150M+ tier
  {
    artwork: {
      slug: 'no-6-violet-green-red-rothko',
      title: 'No. 6 (Violet, Green and Red)',
      year: 1951,
      medium: 'Oil on canvas',
      artistSlug: 'mark-rothko',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2014-08-01'),
      priceUsd: toUsdCents(186),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Dmitry Rybolovlev',
      seller: 'Yves Bouvier',
      isRecord: false,
      notes: 'Part of controversial Bouvier Affair. Rybolovlev later sued, claiming he overpaid by $500M across multiple purchases.'
    }
  },
  {
    artwork: {
      slug: 'pendant-portraits-rembrandt',
      title: 'Pendant Portraits of Maerten Soolmans and Oopjen Coppit',
      year: 1634,
      medium: 'Oil on canvas (pair)',
      artistSlug: 'rembrandt-van-rijn',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2015-09-01'),
      priceUsd: toUsdCents(180),
      auctionHouse: 'Private Sale',
      saleLocation: 'Paris',
      buyer: 'French & Dutch Governments (jointly)',
      seller: 'Rothschild Family',
      isRecord: true,
      notes: 'Purchased jointly by Louvre and Rijksmuseum. Alternates display between Paris and Amsterdam every 5 years.'
    }
  },
  {
    artwork: {
      slug: 'nu-couche-left-side-modigliani',
      title: 'Nu Couché (sur le côté gauche)',
      year: 1917,
      medium: 'Oil on canvas',
      artistSlug: 'amedeo-modigliani',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2018-05-14'),
      priceUsd: toUsdCents(157.2),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Largest painting Modigliani ever made. Set auction record for the artist.'
    }
  },
  {
    artwork: {
      slug: 'woman-iii-de-kooning',
      title: 'Woman III',
      year: 1953,
      medium: 'Oil on canvas',
      artistSlug: 'willem-de-kooning',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2006-11-18'),
      priceUsd: toUsdCents(137.5),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Steven A. Cohen',
      seller: 'David Geffen',
      isRecord: false,
      notes: 'Third in de Kooning\'s controversial Woman series. Previously owned by Tehran Museum until 1994.'
    }
  },
  // $100M-$150M tier
  {
    artwork: {
      slug: 'meules-haystacks-monet',
      title: 'Meules (Haystacks)',
      year: 1890,
      medium: 'Oil on canvas',
      artistSlug: 'claude-monet',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2019-05-14'),
      priceUsd: toUsdCents(110.7),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'First Impressionist work to sell for over $100M. Part of Monet\'s iconic Haystacks series.'
    }
  },
  {
    artwork: {
      slug: 'fillette-corbeille-fleurie-picasso',
      title: 'Fillette à la corbeille fleurie',
      year: 1905,
      medium: 'Oil on canvas',
      artistSlug: 'pablo-picasso',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2018-05-08'),
      priceUsd: toUsdCents(115),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Estate of David Rockefeller',
      isRecord: false,
      notes: 'Rose Period masterpiece. From the historic Rockefeller collection sale that raised $835M for charity.'
    }
  },
  {
    artwork: {
      slug: 'nude-green-leaves-bust-picasso',
      title: 'Nude, Green Leaves and Bust',
      year: 1932,
      medium: 'Oil on canvas',
      artistSlug: 'pablo-picasso',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2010-05-04'),
      priceUsd: toUsdCents(106.5),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Brody Family',
      isRecord: true,
      notes: 'Depicts Marie-Thérèse Walter. Was the most expensive artwork ever sold at auction at the time.'
    }
  },
  {
    artwork: {
      slug: 'silver-car-crash-warhol',
      title: 'Silver Car Crash (Double Disaster)',
      year: 1963,
      medium: 'Silkscreen ink and silver paint on linen',
      artistSlug: 'andy-warhol',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2013-11-13'),
      priceUsd: toUsdCents(105.4),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: false,
      notes: 'Part of Warhol\'s Death and Disaster series. One of only four double silver car crashes.'
    }
  },
  {
    artwork: {
      slug: 'boy-with-pipe-picasso',
      title: 'Garçon à la pipe (Boy with a Pipe)',
      year: 1905,
      medium: 'Oil on canvas',
      artistSlug: 'pablo-picasso',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2004-05-05'),
      priceUsd: toUsdCents(104.2),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Guido Barilla (reported)',
      seller: 'John Hay Whitney Estate',
      isRecord: true,
      notes: 'Rose Period work. First artwork ever sold for over $100M at auction. Broke 15-year record.'
    }
  },
  {
    artwork: {
      slug: 'chariot-giacometti',
      title: 'Chariot',
      year: 1950,
      medium: 'Painted bronze',
      artistSlug: 'alberto-giacometti',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2014-11-04'),
      priceUsd: toUsdCents(101),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: false,
      notes: 'Iconic sculpture of a figure on a chariot. One of Giacometti\'s most recognized works.'
    }
  },
  // $90M-$100M tier
  {
    artwork: {
      slug: 'dora-maar-au-chat-picasso',
      title: 'Dora Maar au Chat',
      year: 1941,
      medium: 'Oil on canvas',
      artistSlug: 'pablo-picasso',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2006-05-03'),
      priceUsd: toUsdCents(95.2),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Boris Ivanishvili (reported)',
      seller: 'Gidwitz Family',
      isRecord: false,
      notes: 'Portrait of Picasso\'s lover and muse Dora Maar seated with a small cat on her shoulder.'
    }
  },
  {
    artwork: {
      slug: 'rabbit-koons',
      title: 'Rabbit',
      year: 1986,
      medium: 'Stainless steel',
      artistSlug: 'jeff-koons',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2019-05-15'),
      priceUsd: toUsdCents(91.1),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Robert Mnuchin (for client)',
      seller: 'S.I. Newhouse Jr. Estate',
      isRecord: true,
      notes: 'Set record for most expensive work by a living artist. Iconic inflatable rabbit cast in steel.'
    }
  },
  {
    artwork: {
      slug: 'pool-two-figures-hockney',
      title: 'Portrait of an Artist (Pool with Two Figures)',
      year: 1972,
      medium: 'Acrylic on canvas',
      artistSlug: 'david-hockney',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2018-11-15'),
      priceUsd: toUsdCents(90.3),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Joe Lewis',
      isRecord: true,
      notes: 'Briefly held record for living artist. Double portrait inspired by two photographs Hockney found on his studio floor.'
    }
  },
  // $80M-$90M tier
  {
    artwork: {
      slug: 'triptych-oresteia-bacon',
      title: 'Triptych Inspired by the Oresteia of Aeschylus',
      year: 1981,
      medium: 'Oil on canvas (triptych)',
      artistSlug: 'francis-bacon',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2020-06-29'),
      priceUsd: toUsdCents(84.6),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: false,
      notes: 'Inspired by Greek tragedy. Sold during pandemic via livestream auction.'
    }
  },
  {
    artwork: {
      slug: 'flag-jasper-johns',
      title: 'Flag',
      year: 1958,
      medium: 'Encaustic on canvas',
      artistSlug: 'jasper-johns',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2010-05-11'),
      priceUsd: toUsdCents(28.6),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: false,
      notes: 'One of Johns\' iconic flag paintings. Another version reportedly sold privately for $110M in 2014.'
    }
  },
  // $60M-$80M tier
  {
    artwork: {
      slug: 'balloon-dog-orange-koons',
      title: 'Balloon Dog (Orange)',
      year: 1994,
      medium: 'Mirror-polished stainless steel with transparent color coating',
      artistSlug: 'jeff-koons',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2013-11-12'),
      priceUsd: toUsdCents(58.4),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Peter Brant',
      isRecord: true,
      notes: 'Set record for most expensive work by a living artist at the time. One of five unique colors in the series.'
    }
  },
  {
    artwork: {
      slug: 'suprematist-composition-malevich',
      title: 'Suprematist Composition',
      year: 1916,
      medium: 'Oil on canvas',
      artistSlug: 'kazimir-malevich',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2018-05-15'),
      priceUsd: toUsdCents(85.8),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Masterpiece of geometric abstraction. Set record for Russian avant-garde art.'
    }
  },
  {
    artwork: {
      slug: 'le-reve-picasso',
      title: 'Le Rêve (The Dream)',
      year: 1932,
      medium: 'Oil on canvas',
      artistSlug: 'pablo-picasso',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2013-03-26'),
      priceUsd: toUsdCents(155),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Steven A. Cohen',
      seller: 'Steve Wynn',
      isRecord: false,
      notes: 'Portrait of Marie-Thérèse Walter. Wynn accidentally put his elbow through it in 2006, repaired for $90K.'
    }
  },
  {
    artwork: {
      slug: 'wasserschlangen-ii-klimt',
      title: 'Wasserschlangen II (Water Serpents II)',
      year: 1907,
      medium: 'Oil on canvas',
      artistSlug: 'gustav-klimt',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2012-01-01'),
      priceUsd: toUsdCents(183.8),
      auctionHouse: 'Private Sale',
      saleLocation: 'Vienna',
      buyer: 'Dmitry Rybolovlev',
      seller: 'Yves Bouvier',
      isRecord: false,
      notes: 'Erotic masterpiece featuring entwined female figures. Part of the Bouvier Affair controversy.'
    }
  },
  {
    artwork: {
      slug: 'twelve-landscape-screens-qi-baishi',
      title: 'Twelve Landscape Screens',
      year: 1925,
      medium: 'Ink and color on paper (12 panels)',
      artistSlug: 'qi-baishi',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2017-12-17'),
      priceUsd: toUsdCents(140.8),
      auctionHouse: 'Poly Auction',
      saleLocation: 'Beijing',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Most expensive Chinese artwork ever sold at auction. Rare landscape set by the ink painting master.'
    }
  },
  {
    artwork: {
      slug: 'abstraktes-bild-richter',
      title: 'Abstraktes Bild',
      year: 1986,
      medium: 'Oil on canvas',
      artistSlug: 'gerhard-richter',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2015-02-10'),
      priceUsd: toUsdCents(46.3),
      auctionHouse: "Sotheby's",
      saleLocation: 'London',
      buyer: 'Private Collector',
      seller: 'Eric Clapton',
      isRecord: true,
      notes: 'From Richter\'s celebrated abstract series. Previously owned by guitarist Eric Clapton.'
    }
  },
  {
    artwork: {
      slug: 'houses-lestaque-braque',
      title: 'Houses at l\'Estaque',
      year: 1908,
      medium: 'Oil on canvas',
      artistSlug: 'georges-braque',
      searchVolumeTier: 3
    },
    auction: {
      saleDate: new Date('2019-05-13'),
      priceUsd: toUsdCents(50),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Foundational Cubist work. The painting that critic Louis Vauxcelles described as made of "cubes."'
    }
  },
  {
    artwork: {
      slug: 'le-bassin-aux-nympheas-monet',
      title: 'Le bassin aux nymphéas',
      year: 1919,
      medium: 'Oil on canvas',
      artistSlug: 'claude-monet',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2008-06-24'),
      priceUsd: toUsdCents(80.5),
      auctionHouse: "Christie's",
      saleLocation: 'London',
      buyer: 'Private Collector',
      seller: 'J. Irwin & Xenia S. Miller Collection',
      isRecord: true,
      notes: 'Part of Monet\'s late Water Lilies series. Record for Monet at the time.'
    }
  },
  {
    artwork: {
      slug: 'triptych-1976-bacon',
      title: 'Triptych, 1976',
      year: 1976,
      medium: 'Oil on canvas (triptych)',
      artistSlug: 'francis-bacon',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2008-05-14'),
      priceUsd: toUsdCents(86.3),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Roman Abramovich (reported)',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'One of Bacon\'s late triptychs featuring distorted figures. Set record for post-war art at the time.'
    }
  },
  {
    artwork: {
      slug: 'jimson-weed-okeeffe',
      title: 'Jimson Weed/White Flower No. 1',
      year: 1932,
      medium: 'Oil on canvas',
      artistSlug: 'georgia-okeeffe',
      searchVolumeTier: 2
    },
    auction: {
      saleDate: new Date('2014-11-20'),
      priceUsd: toUsdCents(44.4),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Walmart Heiress (Crystal Bridges Museum)',
      seller: 'Georgia O\'Keeffe Museum',
      isRecord: true,
      notes: 'Set record for any female artist at auction. Now at Crystal Bridges Museum in Arkansas.'
    }
  }
];

async function main() {
  console.log('=== PHASE 4: Expanding to Top 50 Sales ===\n');

  // First, get existing artist IDs we need
  const existingArtists = {};
  const artistSlugs = ['mark-rothko', 'rembrandt-van-rijn', 'amedeo-modigliani', 'willem-de-kooning',
    'claude-monet', 'pablo-picasso', 'andy-warhol', 'alberto-giacometti', 'francis-bacon',
    'jasper-johns', 'gustav-klimt', 'georges-braque', 'georgia-okeeffe'];

  for (const slug of artistSlugs) {
    const artist = await prisma.artist.findFirst({ where: { slug } });
    if (artist) {
      existingArtists[slug] = artist.id;
    }
  }

  // Create new artists
  console.log('Creating new artists...');
  for (const artistData of newArtists) {
    const artist = await getOrCreateArtist(artistData);
    existingArtists[artistData.slug] = artist.id;
  }

  // Also check for Georgia O'Keeffe
  let okeeffe = await prisma.artist.findFirst({ where: { slug: 'georgia-okeeffe' } });
  if (!okeeffe) {
    okeeffe = await prisma.artist.create({
      data: {
        id: 'artist-georgia-okeeffe',
        slug: 'georgia-okeeffe',
        name: "Georgia O'Keeffe",
        birthYear: 1887,
        deathYear: 1986,
        nationality: 'American',
        bioShort: 'American modernist known for large-scale flower paintings and New Mexico landscapes.',
        updatedAt: new Date()
      }
    });
    console.log("  Created artist: Georgia O'Keeffe");
  }
  existingArtists['georgia-okeeffe'] = okeeffe.id;

  // Check for Georges Braque
  let braque = await prisma.artist.findFirst({ where: { slug: 'georges-braque' } });
  if (!braque) {
    braque = await prisma.artist.create({
      data: {
        id: 'artist-georges-braque',
        slug: 'georges-braque',
        name: 'Georges Braque',
        birthYear: 1882,
        deathYear: 1963,
        nationality: 'French',
        bioShort: 'Co-founder of Cubism alongside Picasso. Known for pioneering collage techniques.',
        updatedAt: new Date()
      }
    });
    console.log('  Created artist: Georges Braque');
  }
  existingArtists['georges-braque'] = braque.id;

  console.log('\nCreating artworks and auction records...');
  let created = 0;
  let skipped = 0;

  for (const { artwork, auction } of additionalSales) {
    // Check if artwork already exists
    const existing = await prisma.artwork.findFirst({
      where: { slug: artwork.slug }
    });

    if (existing) {
      console.log(`  Skipped (exists): ${artwork.title}`);
      skipped++;
      continue;
    }

    const artistId = existingArtists[artwork.artistSlug];
    if (!artistId) {
      console.log(`  Skipped (no artist): ${artwork.title} - ${artwork.artistSlug}`);
      skipped++;
      continue;
    }

    try {
      // Create artwork
      const newArtwork = await prisma.artwork.create({
        data: {
          id: `artwork-${artwork.slug}`,
          slug: artwork.slug,
          title: artwork.title,
          year: artwork.year,
          medium: artwork.medium,
          artistId: artistId,
          museumId: PRIVATE_COLLECTION_ID,
          searchVolumeTier: artwork.searchVolumeTier || 2,
          styleTags: [],
          moodTags: [],
          primaryColors: [],
          lastSalePrice: auction.priceUsd,
          lastSaleDate: auction.saleDate,
          priceCategory: 'sold',
          updatedAt: new Date()
        }
      });

      // Create auction sale
      await prisma.auctionSale.create({
        data: {
          artworkId: newArtwork.id,
          ...auction
        }
      });

      const price = Number(auction.priceUsd) / 100 / 1000000;
      console.log(`  Created: ${artwork.title} - $${price.toFixed(1)}M`);
      created++;
    } catch (err) {
      console.log(`  Error with ${artwork.title}: ${err.message}`);
    }
  }

  // Summary
  console.log('\n=== PHASE 4 COMPLETE ===');
  console.log(`Created: ${created} new auction records`);
  console.log(`Skipped: ${skipped} (already exist or missing artist)`);

  const totalAuctions = await prisma.auctionSale.count();
  const totalValue = await prisma.auctionSale.aggregate({
    _sum: { priceUsd: true }
  });

  console.log(`\nTotal auction records: ${totalAuctions}`);
  console.log(`Total value: $${(Number(totalValue._sum.priceUsd) / 100 / 1000000000).toFixed(2)}B`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
