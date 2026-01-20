import { prisma } from '../src/lib/db';

/**
 * Final batch - More masterpieces to reach 200+ artworks
 * All public domain (artists died 70+ years ago)
 */

async function main() {
  console.log('Adding final batch of artworks...\n');

  // Get all artists and museums
  const artistMap: Record<string, string> = {};
  const allArtists = await prisma.artist.findMany({ select: { id: true, slug: true } });
  for (const a of allArtists) artistMap[a.slug] = a.id;

  const museumMap: Record<string, string> = {};
  const allMuseums = await prisma.museum.findMany({ select: { id: true, slug: true } });
  for (const m of allMuseums) museumMap[m.slug] = m.id;

  // More famous artworks
  const artworks = [
    // More Monet
    { title: 'Bridge over a Pond of Water Lilies', slug: 'bridge-water-lilies', artistSlug: 'claude-monet', museumSlug: 'metropolitan-museum-of-art', year: 1899, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Claude_Monet_-_Water_Lilies_and_Japanese_Bridge.jpg' },
    { title: 'The Japanese Footbridge', slug: 'japanese-footbridge', artistSlug: 'claude-monet', museumSlug: 'national-gallery-of-art', year: 1899, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg' },
    { title: 'Woman with a Parasol', slug: 'woman-parasol', artistSlug: 'claude-monet', museumSlug: 'national-gallery-of-art', year: 1875, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg' },
    { title: 'La Grenouillère', slug: 'la-grenouillere-monet', artistSlug: 'claude-monet', museumSlug: 'metropolitan-museum-of-art', year: 1869, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/La_Grenouill%C3%A8re_MET_DT833.jpg' },

    // More Renoir
    { title: 'Bal du moulin de la Galette', slug: 'bal-moulin-galette', artistSlug: 'pierre-auguste-renoir', museumSlug: 'musee-dorsay', year: 1876, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg' },
    { title: 'Two Sisters (On the Terrace)', slug: 'two-sisters-terrace', artistSlug: 'pierre-auguste-renoir', museumSlug: 'art-institute-of-chicago', year: 1881, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29.jpg' },
    { title: 'The Luncheon of the Boating Party', slug: 'luncheon-boating-party-renoir', artistSlug: 'pierre-auguste-renoir', museumSlug: 'phillips-collection', year: 1881, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg' },

    // More Degas
    { title: 'The Star (Dancer on Stage)', slug: 'the-star-dancer', artistSlug: 'edgar-degas', museumSlug: 'musee-dorsay', year: 1878, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Edgar_Degas_-_The_Star_-_Google_Art_Project.jpg' },
    { title: 'The Bellelli Family', slug: 'bellelli-family', artistSlug: 'edgar-degas', museumSlug: 'musee-dorsay', year: 1867, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Edgar_Degas_-_The_Bellelli_Family_-_Google_Art_Project.jpg' },
    { title: 'Dancers in Blue', slug: 'dancers-blue', artistSlug: 'edgar-degas', museumSlug: 'musee-dorsay', year: 1890, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Edgar_Degas_-_Dancers_in_blue.jpg' },

    // More Cézanne
    { title: 'The Basket of Apples', slug: 'basket-of-apples', artistSlug: 'paul-cezanne', museumSlug: 'art-institute-of-chicago', year: 1895, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Paul_C%C3%A9zanne%2C_The_Basket_of_Apples.jpg' },
    { title: 'Still Life with Apples', slug: 'still-life-apples-cezanne', artistSlug: 'paul-cezanne', museumSlug: null, year: 1898, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/C%C3%A9zanne%2C_Paul_-_Still_Life_with_Apples_-_Google_Art_Project.jpg' },

    // More Van Gogh
    { title: 'The Yellow House', slug: 'yellow-house', artistSlug: 'vincent-van-gogh', museumSlug: 'van-gogh-museum', year: 1888, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg' },
    { title: 'Portrait of Dr. Gachet', slug: 'portrait-dr-gachet', artistSlug: 'vincent-van-gogh', museumSlug: null, year: 1890, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Portrait_of_Dr._Gachet.jpg' },
    { title: 'The Night Café', slug: 'night-cafe', artistSlug: 'vincent-van-gogh', museumSlug: 'yale-art-gallery', year: 1888, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Vincent_Willem_van_Gogh_076.jpg' },
    { title: 'Starry Night Over the Rhône', slug: 'starry-night-rhone', artistSlug: 'vincent-van-gogh', museumSlug: 'musee-dorsay', year: 1888, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Starry_Night_Over_the_Rhone.jpg' },

    // More Gauguin
    { title: 'Arearea (Joyousness)', slug: 'arearea', artistSlug: 'paul-gauguin', museumSlug: 'musee-dorsay', year: 1892, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Paul_Gauguin_-_Arearea_-_Google_Art_Project.jpg' },
    { title: 'The Yellow Christ', slug: 'yellow-christ', artistSlug: 'paul-gauguin', museumSlug: null, year: 1889, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Paul_Gauguin_-_Le_Christ_jaune.jpg' },
    { title: 'When Will You Marry?', slug: 'when-will-you-marry', artistSlug: 'paul-gauguin', museumSlug: null, year: 1892, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Paul_Gauguin%2C_Nafea_Faa_Ipoipo%3F_%281892%29.jpg' },

    // More Klimt
    { title: 'Portrait of Adele Bloch-Bauer II', slug: 'adele-bloch-bauer-ii', artistSlug: 'gustav-klimt', museumSlug: null, year: 1912, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Gustav_Klimt_047.jpg' },
    { title: 'The Tree of Life', slug: 'tree-of-life-klimt', artistSlug: 'gustav-klimt', museumSlug: null, year: 1909, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Klimt_Tree_of_Life_1909.jpg' },
    { title: 'Death and Life', slug: 'death-and-life', artistSlug: 'gustav-klimt', museumSlug: null, year: 1915, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg' },

    // More Munch
    { title: 'Madonna', slug: 'madonna-munch', artistSlug: 'edvard-munch', museumSlug: null, year: 1894, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Edvard_Munch_-_Madonna_%281894-1895%29.jpg' },
    { title: 'The Sick Child', slug: 'sick-child', artistSlug: 'edvard-munch', museumSlug: null, year: 1886, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Munch_Det_Syke_Barn_1885-86.jpg' },
    { title: 'Anxiety', slug: 'anxiety-munch', artistSlug: 'edvard-munch', museumSlug: null, year: 1894, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Edvard_Munch_-_Anxiety_-_Google_Art_Project.jpg' },

    // More Toulouse-Lautrec
    { title: 'Moulin Rouge: La Goulue', slug: 'moulin-rouge-la-goulue', artistSlug: 'henri-toulouse-lautrec', museumSlug: null, year: 1891, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Lautrec_moulin_rouge%2C_la_goulue_%28poster%29_1891.jpg' },
    { title: 'Jane Avril', slug: 'jane-avril', artistSlug: 'henri-toulouse-lautrec', museumSlug: null, year: 1893, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Toulouse-Lautrec_-_Jane_Avril_-_Google_Art_Project.jpg' },

    // Seurat
    { title: 'Bathers at Asnières', slug: 'bathers-asnieres', artistSlug: 'georges-seurat', museumSlug: 'national-gallery', year: 1884, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Georges_Seurat_-_Bathers_at_Asni%C3%A8res_-_Google_Art_Project.jpg' },
    { title: 'The Circus', slug: 'the-circus-seurat', artistSlug: 'georges-seurat', museumSlug: 'musee-dorsay', year: 1891, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Seurat-Le_Cirque.jpg' },

    // More Goya
    { title: 'The Nude Maja', slug: 'nude-maja', artistSlug: 'francisco-goya', museumSlug: 'museo-del-prado', year: 1800, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Francisco_de_Goya_-_La_maja_desnuda_-_Google_Art_Project.jpg' },
    { title: 'The Clothed Maja', slug: 'clothed-maja', artistSlug: 'francisco-goya', museumSlug: 'museo-del-prado', year: 1800, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Goya_Maja_vestida.jpg' },
    { title: 'The Dog', slug: 'the-dog-goya', artistSlug: 'francisco-goya', museumSlug: 'museo-del-prado', year: 1823, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Goya_Dog.jpg' },

    // More Delacroix
    { title: 'The Death of Sardanapalus', slug: 'death-sardanapalus', artistSlug: 'eugene-delacroix', museumSlug: 'louvre', year: 1827, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Delacroix_-_La_Mort_de_Sardanapale_%281827%29.jpg' },
    { title: 'Women of Algiers', slug: 'women-of-algiers', artistSlug: 'eugene-delacroix', museumSlug: 'louvre', year: 1834, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Eug%C3%A8ne_Delacroix_-_Women_of_Algiers_in_their_Apartment_-_WGA6204.jpg' },

    // More Manet
    { title: 'The Balcony', slug: 'the-balcony-manet', artistSlug: 'edouard-manet', museumSlug: 'musee-dorsay', year: 1869, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg' },
    { title: 'Music in the Tuileries', slug: 'music-tuileries', artistSlug: 'edouard-manet', museumSlug: 'national-gallery', year: 1862, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/%C3%89douard_Manet_-_Music_in_the_Tuileries_-_Google_Art_Project.jpg' },

    // More Rembrandt
    { title: 'The Jewish Bride', slug: 'jewish-bride', artistSlug: 'rembrandt', museumSlug: 'rijksmuseum', year: 1667, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Rembrandt_Harmensz._van_Rijn_-_The_Jewish_Bride_-_Google_Art_Project.jpg' },
    { title: 'The Storm on the Sea of Galilee', slug: 'storm-sea-galilee', artistSlug: 'rembrandt', museumSlug: null, year: 1633, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg' },
    { title: 'Bathsheba at Her Bath', slug: 'bathsheba-bath', artistSlug: 'rembrandt', museumSlug: 'louvre', year: 1654, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Rembrandt_Harmensz._van_Rijn_016.jpg' },

    // More Vermeer
    { title: 'Woman Holding a Balance', slug: 'woman-holding-balance', artistSlug: 'johannes-vermeer', museumSlug: 'national-gallery-of-art', year: 1664, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Vermeer%2C_Woman_Holding_a_Balance.jpg' },
    { title: 'The Lacemaker', slug: 'the-lacemaker', artistSlug: 'johannes-vermeer', museumSlug: 'louvre', year: 1670, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Jan_Vermeer_-_The_Lacemaker_%28c.1669-1670%29.jpg' },
    { title: 'Woman Reading a Letter', slug: 'woman-reading-letter', artistSlug: 'johannes-vermeer', museumSlug: 'rijksmuseum', year: 1663, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Johannes_Vermeer_-_Woman_reading_a_letter_-_Google_Art_Project.jpg' },

    // More Botticelli
    { title: 'The Adoration of the Magi', slug: 'adoration-magi-botticelli', artistSlug: 'sandro-botticelli', museumSlug: 'uffizi-gallery', year: 1476, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Sandro_Botticelli_-_The_Adoration_of_the_Magi_-_Google_Art_Project.jpg' },
    { title: 'Pallas and the Centaur', slug: 'pallas-centaur', artistSlug: 'sandro-botticelli', museumSlug: 'uffizi-gallery', year: 1482, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Sandro_Botticelli_-_Pallas_and_the_Centaur_-_Google_Art_Project.jpg' },

    // Velázquez
    { title: 'The Surrender of Breda', slug: 'surrender-breda', artistSlug: 'diego-velazquez', museumSlug: 'museo-del-prado', year: 1635, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Velazquez-The_Surrender_of_Breda.jpg' },
    { title: 'Portrait of Innocent X', slug: 'portrait-innocent-x', artistSlug: 'diego-velazquez', museumSlug: null, year: 1650, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Vel%C3%A1zquez_%E2%80%93_Retrato_del_Papa_Inocencio_X.jpg' },
    { title: 'The Rokeby Venus', slug: 'rokeby-venus', artistSlug: 'diego-velazquez', museumSlug: 'national-gallery', year: 1650, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/74/RokebyVenus.jpg' },
  ];

  let count = 0;
  for (const artwork of artworks) {
    const artistId = artistMap[artwork.artistSlug];
    const museumId = artwork.museumSlug ? museumMap[artwork.museumSlug] : null;

    if (!artistId) {
      console.log(`Skipping ${artwork.title} - artist not found`);
      continue;
    }

    try {
      await prisma.artwork.upsert({
        where: { slug: artwork.slug },
        update: {},
        create: {
          title: artwork.title,
          slug: artwork.slug,
          artistId,
          museumId,
          year: artwork.year,
          imageUrl: artwork.imageUrl,
          searchVolumeTier: 1,
        },
      });
      count++;
    } catch (e) {
      console.log(`Skipped ${artwork.title}`);
    }
  }

  console.log(`Created ${count} artworks`);

  // Final count
  const artists = await prisma.artist.count();
  const totalArtworks = await prisma.artwork.count();
  const museums = await prisma.museum.count();
  const movements = await prisma.movement.count();

  console.log('\n=== FINAL DATABASE COUNTS ===');
  console.log('Artists:', artists);
  console.log('Artworks:', totalArtworks);
  console.log('Museums:', museums);
  console.log('Movements:', movements);

  await prisma.$disconnect();
}

main().catch(console.error);
