const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Expanding Louvre Collection ===\n');

  // Get the Louvre
  const louvre = await prisma.museum.findFirst({
    where: { slug: 'louvre-paris-france' }
  });

  if (!louvre) {
    console.log('ERROR: Louvre not found in database');
    return;
  }

  console.log(`Found: ${louvre.name} (${louvre.id})\n`);

  // Get existing artists
  const leonardo = await prisma.artist.findFirst({ where: { slug: 'leonardo-da-vinci' } });
  const vermeer = await prisma.artist.findFirst({ where: { slug: 'johannes-vermeer' } });
  const delacroix = await prisma.artist.findFirst({ where: { slug: 'eugene-delacroix' } });
  const david = await prisma.artist.findFirst({ where: { slug: 'jacques-louis-david' } });
  const gericault = await prisma.artist.findFirst({ where: { slug: 'theodore-gericault' } });
  const ingres = await prisma.artist.findFirst({ where: { slug: 'jean-auguste-dominique-ingres' } });
  const veronese = await prisma.artist.findFirst({ where: { slug: 'paolo-veronese' } });
  const caravaggio = await prisma.artist.findFirst({ where: { slug: 'caravaggio' } });
  const rembrandt = await prisma.artist.findFirst({ where: { slug: 'rembrandt' } });
  const raphael = await prisma.artist.findFirst({ where: { slug: 'raphael' } });
  const titian = await prisma.artist.findFirst({ where: { slug: 'titian' } });

  // Get Ancient Greek artist
  const ancientGreek = await prisma.artist.findFirst({ where: { slug: 'ancient-greek' } });

  // Get Ancient Egyptian artist
  const ancientEgyptian = await prisma.artist.findFirst({ where: { slug: 'ancient-egyptian' } });

  // Get or create Ancient Mesopotamian
  let mesopotamianId;
  const existingMesopotamian = await prisma.artist.findFirst({ where: { slug: 'ancient-mesopotamian' } });
  if (!existingMesopotamian) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Ancient Mesopotamian (Unknown)',
        slug: 'ancient-mesopotamian',
        nationality: 'Mesopotamian',
        updatedAt: new Date(),
      }
    });
    mesopotamianId = artist.id;
    console.log('Created artist: Ancient Mesopotamian');
  } else {
    mesopotamianId = existingMesopotamian.id;
    console.log('Artist exists: Ancient Mesopotamian');
  }

  // Get or create Jan van Eyck
  let vanEyckId;
  const existingVanEyck = await prisma.artist.findFirst({ where: { slug: 'jan-van-eyck' } });
  if (!existingVanEyck) {
    const artist = await prisma.artist.create({
      data: {
        id: randomUUID(),
        name: 'Jan van Eyck',
        slug: 'jan-van-eyck',
        birthYear: 1390,
        deathYear: 1441,
        nationality: 'Flemish',
        updatedAt: new Date(),
      }
    });
    vanEyckId = artist.id;
    console.log('Created artist: Jan van Eyck');
  } else {
    vanEyckId = existingVanEyck.id;
    console.log('Artist exists: Jan van Eyck');
  }

  console.log('\n--- Adding Artworks ---\n');

  const artworks = [
    // === LEONARDO ===
    {
      title: 'Virgin of the Rocks (Louvre version)',
      slug: 'virgin-of-rocks-louvre',
      year: 1486,
      medium: 'Oil on panel (transferred to canvas)',
      dimensions: '199 cm × 122 cm (78.3 × 48 in)',
      artistId: leonardo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28Louvre%29.jpg/800px-Leonardo_da_Vinci_-_Virgin_of_the_Rocks_%28Louvre%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'La Belle Ferronnière',
      slug: 'belle-ferronniere-leonardo',
      year: 1497,
      medium: 'Oil on walnut panel',
      dimensions: '62 cm × 44 cm (24.4 × 17.3 in)',
      artistId: leonardo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Leonardo_da_Vinci_-_La_Belle_Ferroni%C3%A8re.jpg/800px-Leonardo_da_Vinci_-_La_Belle_Ferroni%C3%A8re.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Saint John the Baptist',
      slug: 'saint-john-baptist-leonardo',
      year: 1516,
      medium: 'Oil on walnut panel',
      dimensions: '69 cm × 57 cm (27.2 × 22.4 in)',
      artistId: leonardo?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg/800px-Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg',
      artworkType: 'painting',
    },

    // === VERMEER ===
    {
      title: 'The Lacemaker',
      slug: 'lacemaker-vermeer',
      year: 1670,
      medium: 'Oil on canvas (mounted on panel)',
      dimensions: '24.5 cm × 21 cm (9.6 × 8.3 in)',
      artistId: vermeer?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg/800px-Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Astronomer',
      slug: 'astronomer-vermeer',
      year: 1668,
      medium: 'Oil on canvas',
      dimensions: '51.5 cm × 45.5 cm (20.3 × 17.9 in)',
      artistId: vermeer?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg/800px-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg',
      artworkType: 'painting',
    },

    // === FRENCH MASTERS ===
    {
      title: 'Liberty Leading the People',
      slug: 'liberty-leading-people-delacroix',
      year: 1830,
      medium: 'Oil on canvas',
      dimensions: '260 cm × 325 cm (102.4 × 128 in)',
      artistId: delacroix?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg/800px-Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Coronation of Napoleon',
      slug: 'coronation-napoleon-david',
      year: 1807,
      medium: 'Oil on canvas',
      dimensions: '621 cm × 979 cm (244.5 × 385.4 in)',
      artistId: david?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg/800px-Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Raft of the Medusa',
      slug: 'raft-of-medusa-gericault',
      year: 1819,
      medium: 'Oil on canvas',
      dimensions: '491 cm × 716 cm (193.3 × 282 in)',
      artistId: gericault?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/800px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Grande Odalisque',
      slug: 'grande-odalisque-ingres',
      year: 1814,
      medium: 'Oil on canvas',
      dimensions: '91 cm × 162 cm (35.8 × 63.8 in)',
      artistId: ingres?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg/800px-Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Turkish Bath',
      slug: 'turkish-bath-ingres',
      year: 1862,
      medium: 'Oil on canvas (mounted on panel)',
      dimensions: '108 cm diameter (42.5 in)',
      artistId: ingres?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jean-Auguste-Dominique_Ingres_-_The_Turkish_Bath_-_WGA11854.jpg/800px-Jean-Auguste-Dominique_Ingres_-_The_Turkish_Bath_-_WGA11854.jpg',
      artworkType: 'painting',
    },

    // === ITALIAN MASTERS ===
    {
      title: 'The Wedding at Cana',
      slug: 'wedding-at-cana-veronese',
      year: 1563,
      medium: 'Oil on canvas',
      dimensions: '677 cm × 994 cm (266.5 × 391.3 in)',
      artistId: veronese?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paolo_Veronese_-_The_Wedding_at_Cana_-_WGA24877.jpg/800px-Paolo_Veronese_-_The_Wedding_at_Cana_-_WGA24877.jpg',
      artworkType: 'painting',
    },
    {
      title: 'The Death of the Virgin',
      slug: 'death-of-virgin-caravaggio',
      year: 1606,
      medium: 'Oil on canvas',
      dimensions: '369 cm × 245 cm (145.3 × 96.5 in)',
      artistId: caravaggio?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Death_of_the_Virgin-Caravaggio_%281606%29.jpg/800px-Death_of_the_Virgin-Caravaggio_%281606%29.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Bathsheba at Her Bath',
      slug: 'bathsheba-bath-rembrandt',
      year: 1654,
      medium: 'Oil on canvas',
      dimensions: '142 cm × 142 cm (55.9 × 55.9 in)',
      artistId: rembrandt?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rembrandt_Harmensz._van_Rijn_016.jpg/800px-Rembrandt_Harmensz._van_Rijn_016.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Portrait of Baldassare Castiglione',
      slug: 'portrait-castiglione-raphael',
      year: 1515,
      medium: 'Oil on canvas',
      dimensions: '82 cm × 67 cm (32.3 × 26.4 in)',
      artistId: raphael?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Raffaello_Sanzio_-_Ritratto_di_Baldassarre_Castiglione_-_Google_Art_Project.jpg/800px-Raffaello_Sanzio_-_Ritratto_di_Baldassarre_Castiglione_-_Google_Art_Project.jpg',
      artworkType: 'painting',
    },
    {
      title: 'Man with a Glove',
      slug: 'man-with-glove-titian',
      year: 1523,
      medium: 'Oil on canvas',
      dimensions: '100 cm × 89 cm (39.4 × 35 in)',
      artistId: titian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Titian_-_Portrait_of_a_Man_%28%27L%27homme_au_gant%27%29.jpg/800px-Titian_-_Portrait_of_a_Man_%28%27L%27homme_au_gant%27%29.jpg',
      artworkType: 'painting',
    },

    // === FLEMISH ===
    {
      title: 'The Madonna of Chancellor Rolin',
      slug: 'madonna-chancellor-rolin-van-eyck',
      year: 1435,
      medium: 'Oil on panel',
      dimensions: '66 cm × 62 cm (26 × 24.4 in)',
      artistId: vanEyckId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Jan_van_Eyck_-_The_Virgin_of_Chancellor_Rolin.jpg/800px-Jan_van_Eyck_-_The_Virgin_of_Chancellor_Rolin.jpg',
      artworkType: 'painting',
    },

    // === ANCIENT ART ===
    {
      title: 'Winged Victory of Samothrace',
      slug: 'winged-victory-samothrace',
      year: -190,
      medium: 'Parian marble',
      dimensions: '328 cm (10.8 ft) tall',
      artistId: ancientGreek?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg/800px-Nike_of_Samothrake_Louvre_Ma2369_n4.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Venus de Milo',
      slug: 'venus-de-milo',
      year: -130,
      medium: 'Parian marble',
      dimensions: '204 cm (6.7 ft) tall',
      artistId: ancientGreek?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Aphrodite_of_Milos_%28Louvre%29_%28cropped%29.jpg/800px-Aphrodite_of_Milos_%28Louvre%29_%28cropped%29.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Great Sphinx of Tanis',
      slug: 'great-sphinx-tanis',
      year: -2600,
      medium: 'Pink granite',
      dimensions: '183 cm × 480 cm (6 × 15.7 ft)',
      artistId: ancientEgyptian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Grand_sphinx_de_Tanis_profil.jpg/800px-Grand_sphinx_de_Tanis_profil.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Seated Scribe',
      slug: 'seated-scribe-louvre',
      year: -2500,
      medium: 'Painted limestone, rock crystal, magnesite, copper',
      dimensions: '53.7 cm (21.1 in) tall',
      artistId: ancientEgyptian?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Scribe_accroupi_Egypte_Louvre.jpg/800px-Scribe_accroupi_Egypte_Louvre.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Code of Hammurabi',
      slug: 'code-of-hammurabi',
      year: -1754,
      medium: 'Diorite',
      dimensions: '225 cm (7.4 ft) tall',
      artistId: mesopotamianId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Milkau_Oberer_Teil_der_Stele_mit_dem_Text_von_Hammurapis_Gesetzescode_369-2.jpg/800px-Milkau_Oberer_Teil_der_Stele_mit_dem_Text_von_Hammurapis_Gesetzescode_369-2.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Winged Human-Headed Bulls from Khorsabad',
      slug: 'winged-bulls-khorsabad-louvre',
      year: -713,
      medium: 'Gypsum alabaster',
      dimensions: '440 cm (14.4 ft) tall',
      artistId: mesopotamianId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taureau_ail%C3%A9_Khorsabad-AO_19857.jpg/800px-Taureau_ail%C3%A9_Khorsabad-AO_19857.jpg',
      artworkType: 'sculpture',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of artworks) {
    if (!art.artistId) {
      console.log(`Skipped (no artist): ${art.title}`);
      skipped++;
      continue;
    }

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
        artistId: art.artistId,
        museumId: louvre.id,
        artworkType: art.artworkType,
        updatedAt: new Date(),
      }
    });

    console.log(`Added: ${art.title}`);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}`);
  console.log(`Skipped: ${skipped}`);

  const totalCount = await prisma.artwork.count({
    where: { museumId: louvre.id }
  });
  console.log(`\nLouvre total artworks: ${totalCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
