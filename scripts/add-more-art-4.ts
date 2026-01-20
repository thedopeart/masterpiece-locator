import { prisma } from '../src/lib/db';

/**
 * Add more artists and paintings - Batch 4
 * All artists died 70+ years ago (public domain)
 */

async function main() {
  // Get existing movements
  const renaissance = await prisma.movement.findFirst({ where: { slug: 'renaissance' } });
  const baroque = await prisma.movement.findFirst({ where: { slug: 'baroque' } });
  const romanticism = await prisma.movement.findFirst({ where: { slug: 'romanticism' } });
  const impressionism = await prisma.movement.findFirst({ where: { slug: 'impressionism' } });
  const postImpressionism = await prisma.movement.findFirst({ where: { slug: 'post-impressionism' } });
  const expressionism = await prisma.movement.findFirst({ where: { slug: 'expressionism' } });
  const symbolism = await prisma.movement.findFirst({ where: { slug: 'symbolism' } });
  const realism = await prisma.movement.findFirst({ where: { slug: 'realism' } });
  const rococo = await prisma.movement.findFirst({ where: { slug: 'rococo' } });

  // Add new museums
  const museums = [
    {
      name: 'Musée de l\'Orangerie',
      slug: 'musee-de-lorangerie',
      city: 'Paris',
      country: 'France',
      description: 'A museum of impressionist and post-impressionist paintings, famous for its oval rooms displaying Monet\'s Water Lilies.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Paris_Jardin_des_Tuileries_Mus%C3%A9e_de_l%27Orangerie_2014.jpg/1280px-Paris_Jardin_des_Tuileries_Mus%C3%A9e_de_l%27Orangerie_2014.jpg',
    },
    {
      name: 'Philadelphia Museum of Art',
      slug: 'philadelphia-museum-of-art',
      city: 'Philadelphia',
      country: 'United States',
      description: 'One of the largest art museums in the United States, known for its impressive collection spanning 2,000 years.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Philadelphia_Museum_of_Art_2015.jpg/1280px-Philadelphia_Museum_of_Art_2015.jpg',
    },
    {
      name: 'Hermitage Museum',
      slug: 'hermitage-museum',
      city: 'Saint Petersburg',
      country: 'Russia',
      description: 'One of the world\'s largest and oldest museums, housing over 3 million items in the Winter Palace.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Spb_06-2012_Palace_Embankment_various_14.jpg/1280px-Spb_06-2012_Palace_Embankment_various_14.jpg',
    },
    {
      name: 'Museo Nacional Centro de Arte Reina Sofía',
      slug: 'museo-reina-sofia',
      city: 'Madrid',
      country: 'Spain',
      description: 'Spain\'s national museum of 20th-century art, home to Picasso\'s Guernica.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Edificio_Sabatini%2C_Museo_Reina_Sof%C3%ADa.jpg/1280px-Edificio_Sabatini%2C_Museo_Reina_Sof%C3%ADa.jpg',
    },
    {
      name: 'Museum Boijmans Van Beuningen',
      slug: 'museum-boijmans',
      city: 'Rotterdam',
      country: 'Netherlands',
      description: 'A major art museum in Rotterdam with works from the medieval period to the 21st century.',
    },
    {
      name: 'Courtauld Gallery',
      slug: 'courtauld-gallery',
      city: 'London',
      country: 'United Kingdom',
      description: 'A small but outstanding collection of Impressionist and Post-Impressionist paintings at Somerset House.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/The_Great_Room%2C_Somerset_House%2C_London-2Oct2009.jpg/1280px-The_Great_Room%2C_Somerset_House%2C_London-2Oct2009.jpg',
    },
  ];

  for (const museum of museums) {
    await prisma.museum.upsert({
      where: { slug: museum.slug },
      update: {},
      create: museum,
    });
    console.log(`Created museum: ${museum.name}`);
  }

  // Get museums for artworks
  const nationalGallery = await prisma.museum.findFirst({ where: { slug: 'national-gallery' } });
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const uffizi = await prisma.museum.findFirst({ where: { slug: 'uffizi-gallery' } });
  const museeOrsay = await prisma.museum.findFirst({ where: { slug: 'musee-dorsay' } });
  const artInstituteChicago = await prisma.museum.findFirst({ where: { slug: 'art-institute-of-chicago' } });
  const met = await prisma.museum.findFirst({ where: { slug: 'metropolitan-museum-of-art' } });
  const prado = await prisma.museum.findFirst({ where: { slug: 'museo-del-prado' } });
  const moma = await prisma.museum.findFirst({ where: { slug: 'museum-of-modern-art' } });
  const orangerie = await prisma.museum.findFirst({ where: { slug: 'musee-de-lorangerie' } });
  const philadelphia = await prisma.museum.findFirst({ where: { slug: 'philadelphia-museum-of-art' } });
  const hermitage = await prisma.museum.findFirst({ where: { slug: 'hermitage-museum' } });
  const reinaSofia = await prisma.museum.findFirst({ where: { slug: 'museo-reina-sofia' } });
  const boijmans = await prisma.museum.findFirst({ where: { slug: 'museum-boijmans' } });
  const courtauld = await prisma.museum.findFirst({ where: { slug: 'courtauld-gallery' } });
  const ngaWashington = await prisma.museum.findFirst({ where: { slug: 'national-gallery-of-art' } });

  // Add new artists
  const artists = [
    {
      name: 'Jean-Baptiste-Siméon Chardin',
      slug: 'jean-baptiste-simeon-chardin',
      nationality: 'French',
      birthYear: 1699,
      deathYear: 1779,
      bioShort: 'A French painter known for his still lifes and genre scenes of domestic life, admired for his mastery of color and texture.',
      movements: rococo ? [rococo.id] : [],
    },
    {
      name: 'Camille Corot',
      slug: 'camille-corot',
      nationality: 'French',
      birthYear: 1796,
      deathYear: 1875,
      bioShort: 'A French landscape painter who bridged Neoclassicism and Impressionism, known for his atmospheric Italian and French landscapes.',
      movements: realism ? [realism.id] : [],
    },
    {
      name: 'Odilon Redon',
      slug: 'odilon-redon',
      nationality: 'French',
      birthYear: 1840,
      deathYear: 1916,
      bioShort: 'A French Symbolist painter known for his dreamlike and fantastical imagery, working in both dark charcoals and vibrant pastels.',
      movements: symbolism ? [symbolism.id] : [],
    },
    {
      name: 'Pierre Bonnard',
      slug: 'pierre-bonnard',
      nationality: 'French',
      birthYear: 1867,
      deathYear: 1947,
      bioShort: 'A French painter known for his colorful domestic scenes and landscapes, associated with the Nabis and Post-Impressionism.',
      movements: postImpressionism ? [postImpressionism.id] : [],
    },
    {
      name: 'Édouard Vuillard',
      slug: 'edouard-vuillard',
      nationality: 'French',
      birthYear: 1868,
      deathYear: 1940,
      bioShort: 'A French painter and printmaker associated with the Nabis, known for his intimate interior scenes.',
      movements: postImpressionism ? [postImpressionism.id] : [],
    },
    {
      name: 'James Abbott McNeill Whistler',
      slug: 'james-mcneill-whistler',
      nationality: 'American',
      birthYear: 1834,
      deathYear: 1903,
      bioShort: 'An American artist active in Britain known for his tonal paintings, including Whistler\'s Mother.',
      movements: impressionism ? [impressionism.id] : [],
    },
    {
      name: 'Théodore Géricault',
      slug: 'theodore-gericault',
      nationality: 'French',
      birthYear: 1791,
      deathYear: 1824,
      bioShort: 'A pioneer of the Romantic movement, known for The Raft of the Medusa and his powerful depictions of horses.',
      movements: romanticism ? [romanticism.id] : [],
    },
    {
      name: 'Paolo Veronese',
      slug: 'paolo-veronese',
      nationality: 'Italian',
      birthYear: 1528,
      deathYear: 1588,
      bioShort: 'A major Venetian painter of the Renaissance known for his large-scale history paintings and vibrant colors.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Pieter Bruegel the Elder',
      slug: 'pieter-bruegel-elder',
      nationality: 'Flemish',
      birthYear: 1525,
      deathYear: 1569,
      bioShort: 'A Netherlandish painter known for his landscapes and peasant scenes, considered the greatest 16th-century Flemish painter.',
      movements: renaissance ? [renaissance.id] : [],
    },
    {
      name: 'Hans Holbein the Younger',
      slug: 'hans-holbein-younger',
      nationality: 'German',
      birthYear: 1497,
      deathYear: 1543,
      bioShort: 'A German-Swiss painter known for his precise and realistic portraits, court painter to Henry VIII.',
      movements: renaissance ? [renaissance.id] : [],
    },
  ];

  for (const artist of artists) {
    const { movements, ...artistData } = artist;
    await prisma.artist.upsert({
      where: { slug: artist.slug },
      update: {},
      create: {
        ...artistData,
        movements: {
          connect: movements.map(id => ({ id })),
        },
      },
    });
    console.log(`Created artist: ${artist.name}`);
  }

  // Get artists for artworks
  const chardin = await prisma.artist.findFirst({ where: { slug: 'jean-baptiste-simeon-chardin' } });
  const corot = await prisma.artist.findFirst({ where: { slug: 'camille-corot' } });
  const redon = await prisma.artist.findFirst({ where: { slug: 'odilon-redon' } });
  const bonnard = await prisma.artist.findFirst({ where: { slug: 'pierre-bonnard' } });
  const vuillard = await prisma.artist.findFirst({ where: { slug: 'edouard-vuillard' } });
  const whistler = await prisma.artist.findFirst({ where: { slug: 'james-mcneill-whistler' } });
  const gericault = await prisma.artist.findFirst({ where: { slug: 'theodore-gericault' } });
  const veronese = await prisma.artist.findFirst({ where: { slug: 'paolo-veronese' } });
  const bruegel = await prisma.artist.findFirst({ where: { slug: 'pieter-bruegel-elder' } });
  const holbein = await prisma.artist.findFirst({ where: { slug: 'hans-holbein-younger' } });

  // Get existing artists
  const monet = await prisma.artist.findFirst({ where: { slug: 'claude-monet' } });
  const vanGogh = await prisma.artist.findFirst({ where: { slug: 'vincent-van-gogh' } });
  const cezanne = await prisma.artist.findFirst({ where: { slug: 'paul-cezanne' } });
  const renoir = await prisma.artist.findFirst({ where: { slug: 'pierre-auguste-renoir' } });
  const manet = await prisma.artist.findFirst({ where: { slug: 'edouard-manet' } });

  // Add new artworks
  const artworks = [
    // Monet - more works
    {
      title: 'Water Lilies (Nymphéas)',
      slug: 'water-lilies-orangerie',
      artistId: monet?.id,
      museumId: orangerie?.id,
      year: 1926,
      medium: 'Oil on canvas',
      dimensions: 'Various panels',
      description: 'Monet\'s monumental water lily murals, painted for the French state and displayed in two oval rooms.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg',
      searchVolumeTier: 1,
    },
    {
      title: 'Rouen Cathedral (Sunset)',
      slug: 'rouen-cathedral-sunset',
      artistId: monet?.id,
      museumId: museeOrsay?.id,
      year: 1894,
      medium: 'Oil on canvas',
      dimensions: '100 cm × 65 cm',
      description: 'Part of Monet\'s series depicting Rouen Cathedral at different times of day and seasons.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Claude_Monet_-_Rouen_Cathedral%2C_Facade_%28Sunset%29.JPG',
      searchVolumeTier: 2,
    },
    // Van Gogh - more works
    {
      title: 'The Potato Eaters',
      slug: 'the-potato-eaters',
      artistId: vanGogh?.id,
      museumId: null, // Van Gogh Museum - need to add
      year: 1885,
      medium: 'Oil on canvas',
      dimensions: '82 cm × 114 cm',
      description: 'Van Gogh\'s first major work, depicting a peasant family eating their evening meal.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Van-gogh-potato-eaters.jpg',
      searchVolumeTier: 1,
    },
    {
      title: 'Wheatfield with Crows',
      slug: 'wheatfield-with-crows',
      artistId: vanGogh?.id,
      museumId: null, // Van Gogh Museum
      year: 1890,
      medium: 'Oil on canvas',
      dimensions: '50.5 cm × 103 cm',
      description: 'One of Van Gogh\'s final paintings, a turbulent landscape often interpreted as reflecting his state of mind.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Vincent_van_Gogh_%281853-1890%29_-_Wheat_Field_with_Crows_%281890%29.jpg',
      searchVolumeTier: 1,
    },
    // Cézanne - more works
    {
      title: 'The Large Bathers',
      slug: 'the-large-bathers',
      artistId: cezanne?.id,
      museumId: philadelphia?.id,
      year: 1906,
      medium: 'Oil on canvas',
      dimensions: '210.5 cm × 250.8 cm',
      description: 'Cézanne\'s largest painting and his culminating work on the theme of bathers.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Paul_C%C3%A9zanne_-_Les_Grandes_Baigneuses_%28The_Large_Bathers%29.jpg',
      searchVolumeTier: 2,
    },
    // Renoir
    {
      title: 'Luncheon of the Boating Party',
      slug: 'luncheon-of-the-boating-party',
      artistId: renoir?.id,
      museumId: null, // Phillips Collection
      year: 1881,
      medium: 'Oil on canvas',
      dimensions: '130 cm × 173 cm',
      description: 'A vibrant scene of Renoir\'s friends enjoying lunch on a balcony overlooking the Seine.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg',
      searchVolumeTier: 1,
    },
    // Manet
    {
      title: 'The Fifer',
      slug: 'the-fifer',
      artistId: manet?.id,
      museumId: museeOrsay?.id,
      year: 1866,
      medium: 'Oil on canvas',
      dimensions: '161 cm × 97 cm',
      description: 'A portrait of a young military musician, notable for its flat color areas and lack of modeling.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/%C3%89douard_Manet_-_Le_Joueur_de_fifre.jpg',
      searchVolumeTier: 2,
    },
    // Chardin
    {
      title: 'The Ray',
      slug: 'the-ray',
      artistId: chardin?.id,
      museumId: louvre?.id,
      year: 1728,
      medium: 'Oil on canvas',
      dimensions: '114 cm × 146 cm',
      description: 'A still life of a gutted ray and kitchen objects, Chardin\'s reception piece to the Royal Academy.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Jean-Baptiste_Sim%C3%A9on_Chardin_-_The_Ray_-_WGA04739.jpg',
      searchVolumeTier: 3,
    },
    // Géricault
    {
      title: 'The Charging Chasseur',
      slug: 'the-charging-chasseur',
      artistId: gericault?.id,
      museumId: louvre?.id,
      year: 1812,
      medium: 'Oil on canvas',
      dimensions: '349 cm × 266 cm',
      description: 'A dramatic equestrian portrait that established Géricault\'s reputation as a painter.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Th%C3%A9odore_G%C3%A9ricault_-_Officier_de_chasseurs_%C3%A0_cheval_de_la_garde_imp%C3%A9riale_chargeant.jpg',
      searchVolumeTier: 3,
    },
    // Veronese
    {
      title: 'The Wedding at Cana',
      slug: 'wedding-at-cana',
      artistId: veronese?.id,
      museumId: louvre?.id,
      year: 1563,
      medium: 'Oil on canvas',
      dimensions: '677 cm × 994 cm',
      description: 'Veronese\'s largest painting, a sumptuous depiction of Christ\'s first miracle at a Venetian-style feast.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Paolo_Veronese_-_The_Wedding_at_Cana_-_WGA24881.jpg',
      searchVolumeTier: 2,
    },
    // Bruegel
    {
      title: 'The Tower of Babel',
      slug: 'tower-of-babel',
      artistId: bruegel?.id,
      museumId: boijmans?.id,
      year: 1563,
      medium: 'Oil on panel',
      dimensions: '60 cm × 74.5 cm',
      description: 'A smaller version of Bruegel\'s famous painting depicting the biblical Tower of Babel.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Rotterdam%29_-_Google_Art_Project.jpg',
      searchVolumeTier: 2,
    },
    {
      title: 'Hunters in the Snow',
      slug: 'hunters-in-the-snow',
      artistId: bruegel?.id,
      museumId: null, // Kunsthistorisches Museum Vienna
      year: 1565,
      medium: 'Oil on panel',
      dimensions: '117 cm × 162 cm',
      description: 'One of the most famous winter landscapes in art history, part of a series depicting the months.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg',
      searchVolumeTier: 1,
    },
    // Holbein
    {
      title: 'The Ambassadors',
      slug: 'the-ambassadors',
      artistId: holbein?.id,
      museumId: nationalGallery?.id,
      year: 1533,
      medium: 'Oil on oak',
      dimensions: '207 cm × 209.5 cm',
      description: 'A double portrait famous for its anamorphic skull at the bottom, a memento mori.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg',
      searchVolumeTier: 1,
    },
    // Redon
    {
      title: 'The Cyclops',
      slug: 'the-cyclops',
      artistId: redon?.id,
      museumId: null, // Kröller-Müller Museum
      year: 1914,
      medium: 'Oil on cardboard mounted on panel',
      dimensions: '64 cm × 51 cm',
      description: 'A dreamlike depiction of the Cyclops Polyphemus gazing at the sleeping nymph Galatea.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Odilon_Redon_-_The_Cyclops_-_Google_Art_Project.jpg',
      searchVolumeTier: 3,
    },
    // Bonnard
    {
      title: 'The Dining Room in the Country',
      slug: 'dining-room-in-country',
      artistId: bonnard?.id,
      museumId: null, // Minneapolis Institute of Art
      year: 1913,
      medium: 'Oil on canvas',
      dimensions: '164.5 cm × 205.7 cm',
      description: 'A luminous interior scene showing the view from a dining room into a sunlit garden.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Pierre_Bonnard_-_The_Dining_Room_in_the_Country_-_The_Minneapolis_Institute_of_Art.jpg',
      searchVolumeTier: 3,
    },
    // Whistler - add his most famous work
    {
      title: 'Nocturne in Black and Gold: The Falling Rocket',
      slug: 'nocturne-black-gold-falling-rocket',
      artistId: whistler?.id,
      museumId: null, // Detroit Institute of Arts
      year: 1875,
      medium: 'Oil on panel',
      dimensions: '60.3 cm × 46.4 cm',
      description: 'An atmospheric painting of fireworks over Cremorne Gardens, subject of Whistler\'s famous libel trial.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Whistler-Nocturne_in_black_and_gold.jpg',
      searchVolumeTier: 2,
    },
    // Corot
    {
      title: 'Ville-d\'Avray',
      slug: 'ville-davray',
      artistId: corot?.id,
      museumId: met?.id,
      year: 1867,
      medium: 'Oil on canvas',
      dimensions: '49.2 cm × 65.4 cm',
      description: 'A characteristic landscape of the pond near Corot\'s family home, showing his silvery tones.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Corot_VilleDAvray.jpg',
      searchVolumeTier: 3,
    },
  ];

  for (const artwork of artworks) {
    if (!artwork.artistId) {
      console.log(`Skipping ${artwork.title} - artist not found`);
      continue;
    }
    await prisma.artwork.upsert({
      where: { slug: artwork.slug },
      update: {},
      create: artwork,
    });
    console.log(`Created artwork: ${artwork.title}`);
  }

  await prisma.$disconnect();
  console.log('\nDone! Added more artists and artworks - Batch 4');
}

main().catch(console.error);
