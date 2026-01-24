const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Missing Masterpieces ===\n');

  // Museum IDs
  const museums = {
    mauritshuis: 'cmkhrgcx4000lj6ioj7nw8vk1',
    uffizi: '4ce015ba-cf66-408a-b8bc-a84b48bee334',
    vatican: 'cmkhrgd19000nj6io0n23ez4q',
    prado: '5dd3c121-e963-4f73-aac1-fafa17ff9b58',
    hamburger: 'cmkjzosua000eoty11xljyyrg',
    orsay: 'cmkhrgcsx000jj6iooirmr673',
    marmottan: 'da2a9d60-57fb-4d8b-8557-0d9f795f50e4',
    phillips: 'cmkjekifj000mkfvswqvk0lm6',
    belvedere: 'cmkilpbym0000o9d7z6opft0u',
    krollerMuller: 'cmkjekdz10006kfvsgtynyt13',
    getty: '1c0f8a71-4f2c-4bc5-aba4-de7d73e42f21',
    vanGoghMuseum: 'cmkhrgcg3000dj6ioieur5cmi',
    louvre: 'd6b2c0bc-239d-4a46-90f9-2d4c67df6501',
  };

  // Artist IDs
  const artists = {
    vermeer: 'cmkhrggho000wj6iokwnzlc9y',
    botticelli: 'cmkhrgf45000uj6io5euhb1x2',
    michelangelo: 'cmkhrgimd0010j6io0ax66jch',
    raphael: 'cmkhrgj460011j6ioorg4dvhg',
    bosch: 'cmkhxgur8001k8tek34d3lalh',
    friedrich: 'cmkhxgrzh001e8tekkt67le4b',
    whistler: 'cmkijtt080022ccbd74yj224q',
    vanGogh: 'cmkhrgde4000rj6ioaqp2rm4l',
    monet: 'cmkhrgema000tj6io2uiska3i',
    renoir: 'cmkhrgk640013j6io2v25ym31',
    klimt: 'cmkhrgn330019j6iou1x7ccg3',
    hokusai: 'cmkijtrit001zccbdsxk4i1du',
    davidJL: 'cmkijto4z001sccbdrgzytu8c',
    gericault: 'cmkijttg60023ccbdpj7v2rcq',
  };

  const artworks = [
    // === TOP PRIORITY ICONIC WORKS ===
    {
      title: 'Girl with a Pearl Earring',
      slug: 'girl-with-a-pearl-earring',
      year: 1665,
      medium: 'Oil on canvas',
      dimensions: '44.5 cm × 39 cm',
      artistId: artists.vermeer,
      museumId: museums.mauritshuis,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg',
    },
    {
      title: 'The Birth of Venus',
      slug: 'birth-of-venus',
      year: 1485,
      medium: 'Tempera on canvas',
      dimensions: '172.5 cm × 278.9 cm',
      artistId: artists.botticelli,
      museumId: museums.uffizi,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/800px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    },
    {
      title: 'The Creation of Adam',
      slug: 'creation-of-adam',
      year: 1512,
      medium: 'Fresco',
      dimensions: '280 cm × 570 cm',
      artistId: artists.michelangelo,
      museumId: museums.vatican,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/800px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg',
    },
    {
      title: 'The School of Athens',
      slug: 'school-of-athens',
      year: 1511,
      medium: 'Fresco',
      dimensions: '500 cm × 770 cm',
      artistId: artists.raphael,
      museumId: museums.vatican,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg',
    },
    {
      title: 'The Garden of Earthly Delights',
      slug: 'garden-of-earthly-delights',
      year: 1510,
      medium: 'Oil on oak panels',
      dimensions: '220 cm × 389 cm',
      artistId: artists.bosch,
      museumId: museums.prado,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/800px-The_Garden_of_earthly_delights.jpg',
    },
    {
      title: 'Wanderer above the Sea of Fog',
      slug: 'wanderer-above-sea-of-fog',
      year: 1818,
      medium: 'Oil on canvas',
      dimensions: '94.8 cm × 74.8 cm',
      artistId: artists.friedrich,
      museumId: museums.hamburger,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/800px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
    },
    {
      title: "Whistler's Mother",
      slug: 'whistlers-mother',
      year: 1871,
      medium: 'Oil on canvas',
      dimensions: '144.3 cm × 162.4 cm',
      artistId: artists.whistler,
      museumId: museums.orsay,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/800px-Whistlers_Mother_high_res.jpg',
    },

    // === VAN GOGH GAPS ===
    {
      title: 'Café Terrace at Night',
      slug: 'cafe-terrace-at-night',
      year: 1888,
      medium: 'Oil on canvas',
      dimensions: '80.7 cm × 65.3 cm',
      artistId: artists.vanGogh,
      museumId: museums.krollerMuller,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg/800px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg',
    },
    {
      title: 'Bedroom in Arles',
      slug: 'bedroom-in-arles',
      year: 1888,
      medium: 'Oil on canvas',
      dimensions: '72 cm × 90 cm',
      artistId: artists.vanGogh,
      museumId: museums.vanGoghMuseum,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg',
    },
    {
      title: 'Irises',
      slug: 'irises-van-gogh',
      year: 1889,
      medium: 'Oil on canvas',
      dimensions: '71 cm × 93 cm',
      artistId: artists.vanGogh,
      museumId: museums.getty,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/800px-Irises-Vincent_van_Gogh.jpg',
    },
    {
      title: 'Almond Blossoms',
      slug: 'almond-blossoms',
      year: 1890,
      medium: 'Oil on canvas',
      dimensions: '73.3 cm × 92.4 cm',
      artistId: artists.vanGogh,
      museumId: museums.vanGoghMuseum,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg',
    },

    // === MONET/RENOIR GAPS ===
    {
      title: 'Impression, Sunrise',
      slug: 'impression-sunrise',
      year: 1872,
      medium: 'Oil on canvas',
      dimensions: '48 cm × 63 cm',
      artistId: artists.monet,
      museumId: museums.marmottan,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg',
    },
    {
      title: 'Bal du moulin de la Galette',
      slug: 'bal-du-moulin-de-la-galette',
      year: 1876,
      medium: 'Oil on canvas',
      dimensions: '131 cm × 175 cm',
      artistId: artists.renoir,
      museumId: museums.orsay,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/800px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg',
    },
    {
      title: 'Luncheon of the Boating Party',
      slug: 'luncheon-of-the-boating-party',
      year: 1881,
      medium: 'Oil on canvas',
      dimensions: '130 cm × 173 cm',
      artistId: artists.renoir,
      museumId: museums.phillips,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg',
    },

    // === OTHER NOTABLE GAPS ===
    {
      title: 'The Kiss',
      slug: 'the-kiss-klimt',
      year: 1908,
      medium: 'Oil and gold leaf on canvas',
      dimensions: '180 cm × 180 cm',
      artistId: artists.klimt,
      museumId: museums.belvedere,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg',
    },
    {
      title: 'The Great Wave off Kanagawa',
      slug: 'great-wave-off-kanagawa',
      year: 1831,
      medium: 'Woodblock print',
      dimensions: '25.7 cm × 37.8 cm',
      artistId: artists.hokusai,
      museumId: null, // Multiple museums have copies
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/800px-Tsunami_by_hokusai_19th_century.jpg',
    },
    {
      title: 'Napoleon Crossing the Alps',
      slug: 'napoleon-crossing-the-alps',
      year: 1801,
      medium: 'Oil on canvas',
      dimensions: '261 cm × 221 cm',
      artistId: artists.davidJL,
      museumId: null, // Multiple versions exist
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/800px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg',
    },
    {
      title: 'The Raft of the Medusa',
      slug: 'raft-of-the-medusa',
      year: 1819,
      medium: 'Oil on canvas',
      dimensions: '491 cm × 716 cm',
      artistId: artists.gericault,
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/800px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg',
    },
    {
      title: 'The Oath of the Horatii',
      slug: 'oath-of-the-horatii',
      year: 1784,
      medium: 'Oil on canvas',
      dimensions: '329.8 cm × 424.8 cm',
      artistId: artists.davidJL,
      museumId: museums.louvre,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/800px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg',
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
        artistId: art.artistId,
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
