const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Prices stored in cents (USD)
const toUsdCents = (millions) => BigInt(millions * 1000000 * 100);

const PRIVATE_COLLECTION_ID = 'd882cf2c-16fc-4314-bbdc-09e4a2630a26';

// Existing artist IDs
const EXISTING_ARTISTS = {
  'leonardo': 'cmkhrge5p000sj6iobkcy7vhp',
  'warhol': 'cmkhrgl5t0015j6iorl32suls',
  'picasso': 'cmkhrgh1y000xj6iox4amrhzf',
  'modigliani': 'cmkilpgro000ao9d7u7ke8rje',
  'pollock': 'cmkhrgnh5001aj6iojn4fpofe'
};

// New artists to create
const newArtists = [
  {
    id: 'artist-de-kooning',
    slug: 'willem-de-kooning',
    name: 'Willem de Kooning',
    birthYear: 1904,
    deathYear: 1997,
    nationality: 'Dutch-American',
    bioShort: 'Abstract Expressionist painter known for his gestural style and Women series.',
    updatedAt: new Date()
  },
  {
    id: 'artist-bacon',
    slug: 'francis-bacon',
    name: 'Francis Bacon',
    birthYear: 1909,
    deathYear: 1992,
    nationality: 'British-Irish',
    bioShort: 'Figurative painter known for raw, unsettling imagery and distorted figures.',
    updatedAt: new Date()
  },
  {
    id: 'artist-rothko',
    slug: 'mark-rothko',
    name: 'Mark Rothko',
    birthYear: 1903,
    deathYear: 1970,
    nationality: 'American',
    bioShort: 'Abstract Expressionist known for large color field paintings with floating rectangles.',
    updatedAt: new Date()
  },
  {
    id: 'artist-basquiat',
    slug: 'jean-michel-basquiat',
    name: 'Jean-Michel Basquiat',
    birthYear: 1960,
    deathYear: 1988,
    nationality: 'American',
    bioShort: 'Neo-Expressionist artist who rose from graffiti to become one of the most influential painters of his generation.',
    updatedAt: new Date()
  },
  {
    id: 'artist-freud',
    slug: 'lucian-freud',
    name: 'Lucian Freud',
    birthYear: 1922,
    deathYear: 2011,
    nationality: 'British',
    bioShort: 'Realist painter known for his psychologically intense portraits and nudes.',
    updatedAt: new Date()
  },
  {
    id: 'artist-johns',
    slug: 'jasper-johns',
    name: 'Jasper Johns',
    birthYear: 1930,
    deathYear: null,
    nationality: 'American',
    bioShort: 'Neo-Dadaist known for paintings of flags, targets, and numbers.',
    updatedAt: new Date()
  },
  {
    id: 'artist-twombly',
    slug: 'cy-twombly',
    name: 'Cy Twombly',
    birthYear: 1928,
    deathYear: 2011,
    nationality: 'American',
    bioShort: 'Abstract painter known for large-scale, calligraphic, graffiti-like works.',
    updatedAt: new Date()
  },
  {
    id: 'artist-lichtenstein',
    slug: 'roy-lichtenstein',
    name: 'Roy Lichtenstein',
    birthYear: 1923,
    deathYear: 1997,
    nationality: 'American',
    bioShort: 'Pop artist famous for comic-strip inspired paintings with Ben-Day dots.',
    updatedAt: new Date()
  },
  {
    id: 'artist-giacometti',
    slug: 'alberto-giacometti',
    name: 'Alberto Giacometti',
    birthYear: 1901,
    deathYear: 1966,
    nationality: 'Swiss',
    bioShort: 'Sculptor and painter known for elongated, thin bronze figures.',
    updatedAt: new Date()
  }
];

// New artworks with their auction data
const newArtworks = [
  {
    artwork: {
      id: 'artwork-salvator-mundi',
      slug: 'salvator-mundi',
      title: 'Salvator Mundi',
      year: 1500,
      medium: 'Oil on walnut panel',
      dimensions: '45.4 cm × 65.6 cm (17.9 in × 25.8 in)',
      description: null,
      searchVolumeTier: 1,
      artistId: EXISTING_ARTISTS.leonardo,
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Renaissance', 'Religious'],
      moodTags: ['Serene', 'Mystical'],
      primaryColors: ['Blue', 'Brown'],
      lastSalePrice: toUsdCents(450.3),
      lastSaleDate: new Date('2017-11-15'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2017-11-15'),
      priceUsd: toUsdCents(450.3),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Badr bin Abdullah Al Saud (for Mohammed bin Salman)',
      seller: 'Dmitry Rybolovlev',
      isRecord: true,
      notes: 'Most expensive painting ever sold at auction. Attribution to Leonardo disputed by some scholars. Currently location unknown.',
      sourceUrl: 'https://www.christies.com/lot/lot-6110563'
    }
  },
  {
    artwork: {
      id: 'artwork-interchange',
      slug: 'interchange',
      title: 'Interchange',
      year: 1955,
      medium: 'Oil on canvas',
      dimensions: '200.7 cm × 175.3 cm (79 in × 69 in)',
      description: null,
      searchVolumeTier: 2,
      artistId: 'artist-de-kooning',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Abstract Expressionism'],
      moodTags: ['Dynamic', 'Energetic'],
      primaryColors: ['Yellow', 'Orange', 'Blue'],
      lastSalePrice: toUsdCents(300),
      lastSaleDate: new Date('2015-09-01'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2015-09-01'),
      priceUsd: toUsdCents(300),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Kenneth C. Griffin',
      seller: 'David Geffen',
      isRecord: true,
      notes: 'Purchased alongside Number 17A by Pollock for combined $500M. At the time, highest price ever paid for a painting.',
      sourceUrl: 'https://www.nytimes.com/2016/02/19/arts/design/ken-griffin-paid-500-million-for-two-paintings.html'
    }
  },
  {
    artwork: {
      id: 'artwork-shot-marilyn',
      slug: 'shot-sage-blue-marilyn',
      title: 'Shot Sage Blue Marilyn',
      year: 1964,
      medium: 'Acrylic and silkscreen ink on linen',
      dimensions: '101.6 cm × 101.6 cm (40 in × 40 in)',
      description: null,
      searchVolumeTier: 1,
      artistId: EXISTING_ARTISTS.warhol,
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Pop Art'],
      moodTags: ['Bold', 'Iconic'],
      primaryColors: ['Blue', 'Yellow', 'Red'],
      lastSalePrice: toUsdCents(195),
      lastSaleDate: new Date('2022-05-09'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2022-05-09'),
      priceUsd: toUsdCents(195),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Larry Gagosian',
      seller: 'Thomas and Doris Ammann Foundation',
      isRecord: true,
      notes: 'Most expensive American artwork ever sold. Most expensive 20th century artwork at auction. One of the "Shot Marilyns" (shot by a visitor in 1964).',
      sourceUrl: 'https://www.christies.com/lot/lot-6369449'
    }
  },
  {
    artwork: {
      id: 'artwork-femmes-alger',
      slug: 'les-femmes-dalger-version-o',
      title: "Les Femmes d'Alger (Version O)",
      year: 1955,
      medium: 'Oil on canvas',
      dimensions: '114 cm × 146.4 cm (44.9 in × 57.6 in)',
      description: null,
      searchVolumeTier: 2,
      artistId: EXISTING_ARTISTS.picasso,
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Cubism', 'Modern'],
      moodTags: ['Bold', 'Sensual'],
      primaryColors: ['Blue', 'Red', 'Gray'],
      lastSalePrice: toUsdCents(179.4),
      lastSaleDate: new Date('2015-05-11'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2015-05-11'),
      priceUsd: toUsdCents(179.4),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Hamad bin Jassim bin Jaber Al Thani (reported)',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Final and most highly finished of 15 versions inspired by Delacroix. Set auction record for any artwork at the time.',
      sourceUrl: 'https://www.christies.com/lot/lot-5893293'
    }
  },
  {
    artwork: {
      id: 'artwork-nu-couche-modigliani',
      slug: 'nu-couche-modigliani-1917',
      title: 'Nu Couché',
      year: 1917,
      medium: 'Oil on canvas',
      dimensions: '60 cm × 92 cm (23.6 in × 36.2 in)',
      description: null,
      searchVolumeTier: 2,
      artistId: EXISTING_ARTISTS.modigliani,
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Modernism', 'Expressionism'],
      moodTags: ['Sensual', 'Intimate'],
      primaryColors: ['Red', 'Brown', 'Cream'],
      lastSalePrice: toUsdCents(170.4),
      lastSaleDate: new Date('2015-11-09'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2015-11-09'),
      priceUsd: toUsdCents(170.4),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Liu Yiqian',
      seller: 'Laura and Stafford Broumand',
      isRecord: true,
      notes: 'Second highest price for a Modigliani. Buyer paid with American Express credit card.',
      sourceUrl: 'https://www.christies.com/lot/lot-5940766'
    }
  },
  {
    artwork: {
      id: 'artwork-number-17a',
      slug: 'number-17a-pollock',
      title: 'Number 17A',
      year: 1948,
      medium: 'Oil on fiberboard',
      dimensions: '112 cm × 86.5 cm (44.1 in × 34.1 in)',
      description: null,
      searchVolumeTier: 2,
      artistId: EXISTING_ARTISTS.pollock,
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Abstract Expressionism', 'Action Painting'],
      moodTags: ['Dynamic', 'Chaotic'],
      primaryColors: ['Yellow', 'Black', 'White'],
      lastSalePrice: toUsdCents(200),
      lastSaleDate: new Date('2015-09-01'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2015-09-01'),
      priceUsd: toUsdCents(200),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Kenneth C. Griffin',
      seller: 'David Geffen',
      isRecord: true,
      notes: 'Purchased alongside Interchange by de Kooning for combined $500M. Most expensive Pollock ever sold.',
      sourceUrl: 'https://www.nytimes.com/2016/02/19/arts/design/ken-griffin-paid-500-million-for-two-paintings.html'
    }
  },
  {
    artwork: {
      id: 'artwork-three-studies-freud',
      slug: 'three-studies-of-lucian-freud',
      title: 'Three Studies of Lucian Freud',
      year: 1969,
      medium: 'Oil on canvas (triptych)',
      dimensions: '198 cm × 147.5 cm (78 in × 58.1 in) each panel',
      description: null,
      searchVolumeTier: 2,
      artistId: 'artist-bacon',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Figurative', 'Expressionism'],
      moodTags: ['Intense', 'Psychological'],
      primaryColors: ['Orange', 'Yellow', 'Brown'],
      lastSalePrice: toUsdCents(142.4),
      lastSaleDate: new Date('2013-11-12'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2013-11-12'),
      priceUsd: toUsdCents(142.4),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Elaine Wynn (reported)',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Set world record for any artwork at auction (broken by Salvator Mundi in 2017). Depicts fellow artist Lucian Freud.',
      sourceUrl: 'https://www.christies.com/lot/lot-5738476'
    }
  },
  {
    artwork: {
      id: 'artwork-orange-red-yellow',
      slug: 'orange-red-yellow-rothko',
      title: 'Orange, Red, Yellow',
      year: 1961,
      medium: 'Oil on canvas',
      dimensions: '236.2 cm × 206.4 cm (93 in × 81.3 in)',
      description: null,
      searchVolumeTier: 2,
      artistId: 'artist-rothko',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Abstract Expressionism', 'Color Field'],
      moodTags: ['Contemplative', 'Warm'],
      primaryColors: ['Orange', 'Red', 'Yellow'],
      lastSalePrice: toUsdCents(86.9),
      lastSaleDate: new Date('2012-05-08'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2012-05-08'),
      priceUsd: toUsdCents(86.9),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'David Pincus estate',
      isRecord: true,
      notes: 'Set record for contemporary art at auction at the time. Most expensive Rothko ever sold.',
      sourceUrl: 'https://www.christies.com/lot/lot-5555955'
    }
  },
  {
    artwork: {
      id: 'artwork-untitled-basquiat-skull',
      slug: 'untitled-basquiat-1982-skull',
      title: 'Untitled (Skull)',
      year: 1982,
      medium: 'Acrylic and spray paint on canvas',
      dimensions: '183 cm × 173 cm (72 in × 68 in)',
      description: null,
      searchVolumeTier: 1,
      artistId: 'artist-basquiat',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Neo-Expressionism', 'Street Art'],
      moodTags: ['Raw', 'Intense'],
      primaryColors: ['Blue', 'Yellow', 'Black'],
      lastSalePrice: toUsdCents(110.5),
      lastSaleDate: new Date('2017-05-18'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2017-05-18'),
      priceUsd: toUsdCents(110.5),
      auctionHouse: "Sotheby's",
      saleLocation: 'New York',
      buyer: 'Yusaku Maezawa',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Most expensive American artwork at auction at the time. Buyer later displayed it in Brooklyn Museum.',
      sourceUrl: 'https://www.sothebys.com/en/auctions/ecatalogue/2017/contemporary-art-evening-auction-n09653/lot.31.html'
    }
  },
  {
    artwork: {
      id: 'artwork-false-start',
      slug: 'false-start-jasper-johns',
      title: 'False Start',
      year: 1959,
      medium: 'Oil on canvas',
      dimensions: '170.8 cm × 137.2 cm (67.3 in × 54 in)',
      description: null,
      searchVolumeTier: 3,
      artistId: 'artist-johns',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Neo-Dada', 'Pop Art'],
      moodTags: ['Vibrant', 'Conceptual'],
      primaryColors: ['Red', 'Yellow', 'Blue', 'Orange'],
      lastSalePrice: toUsdCents(80),
      lastSaleDate: new Date('2006-10-01'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2006-10-01'),
      priceUsd: toUsdCents(80),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Kenneth C. Griffin',
      seller: 'Anne Dias-Griffin',
      isRecord: true,
      notes: 'Record for a living artist at the time. Features stenciled color names that contradict the actual colors painted.',
      sourceUrl: 'https://www.artnews.com/art-news/news/jasper-johns-false-start-sells-for-80-million-184/'
    }
  },
  {
    artwork: {
      id: 'artwork-masterpiece-lichtenstein',
      slug: 'masterpiece-lichtenstein',
      title: 'Masterpiece',
      year: 1962,
      medium: 'Oil and magna on canvas',
      dimensions: '137.2 cm × 137.2 cm (54 in × 54 in)',
      description: null,
      searchVolumeTier: 3,
      artistId: 'artist-lichtenstein',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Pop Art'],
      moodTags: ['Ironic', 'Bold'],
      primaryColors: ['Yellow', 'Blue', 'Red'],
      lastSalePrice: toUsdCents(165),
      lastSaleDate: new Date('2017-01-24'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2017-01-24'),
      priceUsd: toUsdCents(165),
      auctionHouse: 'Private Sale',
      saleLocation: 'New York',
      buyer: 'Steve Cohen (reported)',
      seller: 'Agnes Gund',
      isRecord: true,
      notes: 'Speech bubble reads: "Why, Brad darling, this painting is a masterpiece!" Record for a Lichtenstein.',
      sourceUrl: 'https://www.nytimes.com/2017/01/25/arts/design/agnes-gund-sells-a-lichtenstein-to-start-utilitarian-art-fund.html'
    }
  },
  {
    artwork: {
      id: 'artwork-pointing-man',
      slug: 'pointing-man-giacometti',
      title: "L'Homme au doigt (Pointing Man)",
      year: 1947,
      medium: 'Bronze',
      dimensions: '178 cm (70 in) height',
      description: null,
      searchVolumeTier: 3,
      artistId: 'artist-giacometti',
      museumId: PRIVATE_COLLECTION_ID,
      styleTags: ['Existentialism', 'Modernism'],
      moodTags: ['Solitary', 'Contemplative'],
      primaryColors: ['Bronze', 'Brown'],
      lastSalePrice: toUsdCents(141.3),
      lastSaleDate: new Date('2015-05-11'),
      priceCategory: 'sold',
      updatedAt: new Date()
    },
    auction: {
      saleDate: new Date('2015-05-11'),
      priceUsd: toUsdCents(141.3),
      auctionHouse: "Christie's",
      saleLocation: 'New York',
      buyer: 'Private Collector',
      seller: 'Private Collection',
      isRecord: true,
      notes: 'Most expensive sculpture ever sold at auction. Cast #2 of 6 editions. Depicts an emaciated figure pointing into the void.',
      sourceUrl: 'https://www.christies.com/lot/lot-5893283'
    }
  }
];

async function main() {
  console.log('=== PHASE 2: Adding Missing Artworks ===\n');

  // Step 1: Create new artists
  console.log('Creating new artists...');
  for (const artist of newArtists) {
    try {
      await prisma.artist.upsert({
        where: { id: artist.id },
        update: artist,
        create: artist
      });
      console.log(`  Created/updated artist: ${artist.name}`);
    } catch (err) {
      console.log(`  Error with ${artist.name}: ${err.message}`);
    }
  }

  console.log('\nCreating artworks and auction records...');

  // Step 2: Create artworks and their auction records
  for (const { artwork, auction } of newArtworks) {
    try {
      // Create artwork
      await prisma.artwork.upsert({
        where: { id: artwork.id },
        update: artwork,
        create: artwork
      });

      // Create auction sale
      await prisma.auctionSale.create({
        data: {
          artworkId: artwork.id,
          ...auction
        }
      });

      const price = Number(artwork.lastSalePrice) / 100 / 1000000;
      console.log(`  Created: ${artwork.title} - $${price}M`);
    } catch (err) {
      console.log(`  Error with ${artwork.title}: ${err.message}`);
    }
  }

  // Summary
  console.log('\n=== PHASE 2 COMPLETE ===');

  const totalArtists = await prisma.artist.count();
  const totalAuctions = await prisma.auctionSale.count();
  const soldCount = await prisma.artwork.count({ where: { priceCategory: 'sold' } });

  console.log(`Total artists in database: ${totalArtists}`);
  console.log(`Total auction records: ${totalAuctions}`);
  console.log(`Artworks with sale data: ${soldCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
