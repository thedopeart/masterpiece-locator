const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Classical Greek/Roman Sculptures ===\n');

  // Get existing museums
  const louvre = await prisma.museum.findFirst({ where: { slug: 'louvre' } });
  const britishMuseum = await prisma.museum.findFirst({ where: { name: { contains: 'British' } } });

  // Create Vatican Museums
  let vaticanId;
  const existingVatican = await prisma.museum.findFirst({ where: { slug: 'vatican-museums' } });
  if (!existingVatican) {
    const vatican = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Vatican Museums',
        slug: 'vatican-museums',
        city: 'Vatican City',
        country: 'Vatican City',
        address: 'Viale Vaticano, 00165 Roma',
        latitude: 41.9065,
        longitude: 12.4536,
        websiteUrl: 'https://www.museivaticani.va',
        ticketUrl: 'https://www.museivaticani.va/content/museivaticani/en/visita-i-musei/biglietteria.html',
        ticketPriceRange: '€17-21',
        description: 'The Vatican Museums house one of the world\'s greatest art collections, including the Sistine Chapel, Raphael Rooms, and ancient sculpture galleries. The Pio-Clementino Museum contains masterpieces like the Laocoön, Apollo Belvedere, and Belvedere Torso.',
        updatedAt: new Date(),
      }
    });
    vaticanId = vatican.id;
    console.log('Created museum: Vatican Museums');
  } else {
    vaticanId = existingVatican.id;
    console.log('Museum exists: Vatican Museums');
  }

  // Create Capitoline Museums
  let capitolineId;
  const existingCapitoline = await prisma.museum.findFirst({ where: { slug: 'capitoline-museums' } });
  if (!existingCapitoline) {
    const capitoline = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Capitoline Museums',
        slug: 'capitoline-museums',
        city: 'Rome',
        country: 'Italy',
        address: 'Piazza del Campidoglio 1, 00186 Roma',
        latitude: 41.8931,
        longitude: 12.4828,
        websiteUrl: 'https://www.museicapitolini.org',
        ticketPriceRange: '€11.50-15',
        description: 'The Capitoline Museums on Rome\'s Capitoline Hill form the world\'s oldest public museum, founded in 1471. The collection includes ancient Roman sculptures, Renaissance art, and the iconic bronze she-wolf that symbolizes Rome\'s founding.',
        updatedAt: new Date(),
      }
    });
    capitolineId = capitoline.id;
    console.log('Created museum: Capitoline Museums');
  } else {
    capitolineId = existingCapitoline.id;
    console.log('Museum exists: Capitoline Museums');
  }

  // Create Naples Archaeological Museum
  let naplesId;
  const existingNaples = await prisma.museum.findFirst({ where: { slug: 'naples-archaeological-museum' } });
  if (!existingNaples) {
    const naples = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Naples National Archaeological Museum',
        slug: 'naples-archaeological-museum',
        city: 'Naples',
        country: 'Italy',
        address: 'Piazza Museo 19, 80135 Napoli',
        latitude: 40.8533,
        longitude: 14.2506,
        websiteUrl: 'https://mann-napoli.it',
        ticketPriceRange: '€15-18',
        description: 'The Naples National Archaeological Museum houses the world\'s finest collection of Roman artifacts, including treasures from Pompeii and Herculaneum. The Farnese Collection includes colossal sculptures like the Farnese Hercules and Farnese Bull.',
        updatedAt: new Date(),
      }
    });
    naplesId = naples.id;
    console.log('Created museum: Naples Archaeological Museum');
  } else {
    naplesId = existingNaples.id;
    console.log('Museum exists: Naples Archaeological Museum');
  }

  // Create National Archaeological Museum Athens
  let athensId;
  const existingAthens = await prisma.museum.findFirst({ where: { slug: 'national-archaeological-museum-athens' } });
  if (!existingAthens) {
    const athens = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'National Archaeological Museum of Athens',
        slug: 'national-archaeological-museum-athens',
        city: 'Athens',
        country: 'Greece',
        address: '28is Oktovriou 44, Athens 106 82',
        latitude: 37.9891,
        longitude: 23.7322,
        websiteUrl: 'https://www.namuseum.gr',
        ticketPriceRange: '€12',
        description: 'Greece\'s largest museum houses the world\'s finest collection of ancient Greek art, spanning from prehistory to late antiquity. Treasures include Mycenaean gold, Cycladic figurines, and bronze masterpieces like the Artemision Bronze.',
        updatedAt: new Date(),
      }
    });
    athensId = athens.id;
    console.log('Created museum: National Archaeological Museum Athens');
  } else {
    athensId = existingAthens.id;
    console.log('Museum exists: National Archaeological Museum Athens');
  }

  // Create Delphi Archaeological Museum
  let delphiId;
  const existingDelphi = await prisma.museum.findFirst({ where: { slug: 'delphi-archaeological-museum' } });
  if (!existingDelphi) {
    const delphi = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Delphi Archaeological Museum',
        slug: 'delphi-archaeological-museum',
        city: 'Delphi',
        country: 'Greece',
        address: 'Delphi 330 54, Greece',
        latitude: 38.4824,
        longitude: 22.5010,
        websiteUrl: 'https://www.culture.gov.gr/en/service/SitePages/view.aspx?iID=3404',
        ticketPriceRange: '€12 (combined with site)',
        description: 'The Delphi Archaeological Museum displays treasures from the ancient sanctuary of Apollo, once considered the center of the world. Highlights include the Charioteer of Delphi, one of the finest surviving Greek bronzes.',
        updatedAt: new Date(),
      }
    });
    delphiId = delphi.id;
    console.log('Created museum: Delphi Archaeological Museum');
  } else {
    delphiId = existingDelphi.id;
    console.log('Museum exists: Delphi Archaeological Museum');
  }

  // Create Palazzo Massimo (National Roman Museum)
  let palazzoMassimoId;
  const existingPM = await prisma.museum.findFirst({ where: { slug: 'palazzo-massimo' } });
  if (!existingPM) {
    const pm = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Palazzo Massimo alle Terme',
        slug: 'palazzo-massimo',
        city: 'Rome',
        country: 'Italy',
        address: 'Largo di Villa Peretti 2, 00185 Roma',
        latitude: 41.9016,
        longitude: 12.4986,
        websiteUrl: 'https://www.museonazionaleromano.beniculturali.it',
        ticketPriceRange: '€10-12',
        description: 'Palazzo Massimo houses the finest collection of ancient Roman art in the National Roman Museum system. Highlights include the Boxer at Rest, Discobolus Lancellotti, and stunning frescoes from ancient Roman villas.',
        updatedAt: new Date(),
      }
    });
    palazzoMassimoId = pm.id;
    console.log('Created museum: Palazzo Massimo');
  } else {
    palazzoMassimoId = existingPM.id;
    console.log('Museum exists: Palazzo Massimo');
  }

  // Create Olympia Archaeological Museum
  let olympiaId;
  const existingOlympia = await prisma.museum.findFirst({ where: { slug: 'olympia-archaeological-museum' } });
  if (!existingOlympia) {
    const olympia = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Archaeological Museum of Olympia',
        slug: 'olympia-archaeological-museum',
        city: 'Olympia',
        country: 'Greece',
        address: 'Ancient Olympia 270 65, Greece',
        latitude: 37.6388,
        longitude: 21.6295,
        websiteUrl: 'https://www.culture.gov.gr/en/service/SitePages/view.aspx?iID=3397',
        ticketPriceRange: '€12 (combined with site)',
        description: 'The Archaeological Museum of Olympia displays treasures from the sanctuary where the ancient Olympic Games were held. Masterpieces include the Hermes of Praxiteles, Temple of Zeus pediments, and Nike of Paionios.',
        updatedAt: new Date(),
      }
    });
    olympiaId = olympia.id;
    console.log('Created museum: Olympia Archaeological Museum');
  } else {
    olympiaId = existingOlympia.id;
    console.log('Museum exists: Olympia Archaeological Museum');
  }

  // Create Reggio Calabria Museum
  let reggioId;
  const existingReggio = await prisma.museum.findFirst({ where: { slug: 'reggio-calabria-museum' } });
  if (!existingReggio) {
    const reggio = await prisma.museum.create({
      data: {
        id: randomUUID(),
        name: 'Museo Nazionale della Magna Grecia',
        slug: 'reggio-calabria-museum',
        city: 'Reggio Calabria',
        country: 'Italy',
        address: 'Piazza de Nava 26, 89123 Reggio Calabria',
        latitude: 38.1089,
        longitude: 15.6429,
        websiteUrl: 'https://www.museoarcheologicoreggiocalabria.it',
        ticketPriceRange: '€8-10',
        description: 'This museum in southern Italy houses the Riace Bronzes, two of the finest surviving Greek bronze statues. Discovered by a scuba diver in 1972, these 5th-century BCE warriors are among the most important archaeological finds of the 20th century.',
        updatedAt: new Date(),
      }
    });
    reggioId = reggio.id;
    console.log('Created museum: Reggio Calabria Museum');
  } else {
    reggioId = existingReggio.id;
    console.log('Museum exists: Reggio Calabria Museum');
  }

  // Create artists for ancient sculptors
  const ancientArtists = [
    {
      name: 'Ancient Greek (Unknown)',
      slug: 'ancient-greek',
      nationality: 'Greek',
    },
    {
      name: 'Ancient Roman (Unknown)',
      slug: 'ancient-roman',
      nationality: 'Roman',
    },
    {
      name: 'Praxiteles',
      slug: 'praxiteles',
      birthYear: -400,
      deathYear: -330,
      nationality: 'Greek (Athenian)',
    },
    {
      name: 'Lysippos',
      slug: 'lysippos',
      birthYear: -390,
      deathYear: -300,
      nationality: 'Greek',
    },
    {
      name: 'Polykleitos',
      slug: 'polykleitos',
      birthYear: -480,
      deathYear: -410,
      nationality: 'Greek (Argive)',
    },
    {
      name: 'Leochares',
      slug: 'leochares',
      birthYear: -370,
      deathYear: -320,
      nationality: 'Greek (Athenian)',
    },
  ];

  const artistIds = {};
  for (const artistData of ancientArtists) {
    const existing = await prisma.artist.findFirst({ where: { slug: artistData.slug } });
    if (existing) {
      artistIds[artistData.slug] = existing.id;
      console.log(`Artist exists: ${artistData.name}`);
    } else {
      const artist = await prisma.artist.create({
        data: {
          id: randomUUID(),
          ...artistData,
          updatedAt: new Date(),
        }
      });
      artistIds[artistData.slug] = artist.id;
      console.log(`Created artist: ${artistData.name}`);
    }
  }

  // Get Agesander for Laocoön (may exist from tier 5)
  const agesander = await prisma.artist.findFirst({ where: { slug: 'agesander-of-rhodes' } });
  if (agesander) artistIds['agesander-of-rhodes'] = agesander.id;

  console.log('\n--- Adding Sculptures ---\n');

  const sculptures = [
    // Louvre masterpieces
    {
      title: 'Venus de Milo',
      slug: 'venus-de-milo',
      year: -130,
      medium: 'Parian marble',
      dimensions: '204 cm (6 ft 8 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: louvre?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Venus_de_Milo_Louvre_Ma399.jpg/800px-Venus_de_Milo_Louvre_Ma399.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Winged Victory of Samothrace',
      slug: 'winged-victory-samothrace',
      year: -190,
      medium: 'Parian marble',
      dimensions: '244 cm (8 ft) tall',
      artistId: artistIds['ancient-greek'],
      museumId: louvre?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Nike_of_Samothrake_Louvre_Ma2369_n4.jpg/800px-Nike_of_Samothrake_Louvre_Ma2369_n4.jpg',
      artworkType: 'sculpture',
    },

    // Vatican masterpieces
    {
      title: 'Laocoön and His Sons',
      slug: 'laocoon-and-his-sons',
      year: -40,
      medium: 'Marble',
      dimensions: '208 cm (6 ft 10 in) tall',
      artistId: agesander ? artistIds['agesander-of-rhodes'] : artistIds['ancient-greek'],
      museumId: vaticanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg/800px-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Apollo Belvedere',
      slug: 'apollo-belvedere',
      year: -350,
      medium: 'Marble (Roman copy)',
      dimensions: '224 cm (7 ft 4 in) tall',
      artistId: artistIds['leochares'],
      museumId: vaticanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Apollo_Belvedere.jpg/800px-Apollo_Belvedere.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Augustus of Prima Porta',
      slug: 'augustus-prima-porta',
      year: -20,
      medium: 'Marble',
      dimensions: '208 cm (6 ft 10 in) tall',
      artistId: artistIds['ancient-roman'],
      museumId: vaticanId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-Augustus.jpg/800px-Statue-Augustus.jpg',
      artworkType: 'sculpture',
    },

    // Capitoline Museums
    {
      title: 'Dying Gaul',
      slug: 'dying-gaul',
      year: -230,
      medium: 'Marble (Roman copy)',
      dimensions: '93 cm × 187 cm (37 × 74 in)',
      artistId: artistIds['ancient-greek'],
      museumId: capitolineId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Dying_Gaul.jpg/800px-Dying_Gaul.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Capitoline Wolf',
      slug: 'capitoline-wolf',
      year: -500,
      medium: 'Bronze',
      dimensions: '75 cm × 114 cm (30 × 45 in)',
      artistId: artistIds['ancient-roman'],
      museumId: capitolineId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/She-wolf_suckles_Romulus_and_Remus.jpg/800px-She-wolf_suckles_Romulus_and_Remus.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Marcus Aurelius Equestrian Statue',
      slug: 'marcus-aurelius-equestrian',
      year: 175,
      medium: 'Bronze',
      dimensions: '424 cm (13 ft 11 in) tall',
      artistId: artistIds['ancient-roman'],
      museumId: capitolineId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/0_Marcus_Aurelius_-_Piazza_del_Campidoglio_%282%29.jpg/800px-0_Marcus_Aurelius_-_Piazza_del_Campidoglio_%282%29.jpg',
      artworkType: 'sculpture',
    },

    // Naples
    {
      title: 'Farnese Hercules',
      slug: 'farnese-hercules',
      year: -320,
      medium: 'Marble (Roman copy)',
      dimensions: '317 cm (10 ft 5 in) tall',
      artistId: artistIds['lysippos'],
      museumId: naplesId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Farnese_Hercules_3637104088_9c95d7fe3c_b.jpg/800px-Farnese_Hercules_3637104088_9c95d7fe3c_b.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Farnese Bull',
      slug: 'farnese-bull',
      year: -150,
      medium: 'Marble',
      dimensions: '370 cm (12 ft 2 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: naplesId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Toro_farnese%2C_veduta_01.JPG/800px-Toro_farnese%2C_veduta_01.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Farnese Atlas',
      slug: 'farnese-atlas',
      year: 150,
      medium: 'Marble',
      dimensions: '185 cm (6 ft 1 in) tall',
      artistId: artistIds['ancient-roman'],
      museumId: naplesId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/MAN_Atlante_fronte_1040572.JPG/800px-MAN_Atlante_fronte_1040572.JPG',
      artworkType: 'sculpture',
    },

    // Athens
    {
      title: 'Artemision Bronze',
      slug: 'artemision-bronze',
      year: -460,
      medium: 'Bronze',
      dimensions: '209 cm (6 ft 10 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: athensId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NAMA_Pos%C3%A9idon.jpg/800px-NAMA_Pos%C3%A9idon.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Mask of Agamemnon',
      slug: 'mask-of-agamemnon',
      year: -1550,
      medium: 'Gold',
      dimensions: '26 cm × 20 cm (10 × 8 in)',
      artistId: artistIds['ancient-greek'],
      museumId: athensId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/MaskOfAgamemnon.jpg/800px-MaskOfAgamemnon.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Antikythera Youth',
      slug: 'antikythera-youth',
      year: -340,
      medium: 'Bronze',
      dimensions: '196 cm (6 ft 5 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: athensId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/NAMA_X15118_Marathon_Boy_3.jpg/800px-NAMA_X15118_Marathon_Boy_3.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Jockey of Artemision',
      slug: 'jockey-of-artemision',
      year: -150,
      medium: 'Bronze',
      dimensions: '290 cm × 250 cm (9 ft 6 in × 8 ft 2 in)',
      artistId: artistIds['ancient-greek'],
      museumId: athensId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NAMA_X15177_Marathon_Boy_3.JPG/800px-NAMA_X15177_Marathon_Boy_3.JPG',
      artworkType: 'sculpture',
    },

    // Delphi
    {
      title: 'Charioteer of Delphi',
      slug: 'charioteer-of-delphi',
      year: -478,
      medium: 'Bronze',
      dimensions: '180 cm (5 ft 11 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: delphiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Delphi_charioteer_front_DSC06255.JPG/800px-Delphi_charioteer_front_DSC06255.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Sphinx of Naxos',
      slug: 'sphinx-of-naxos',
      year: -560,
      medium: 'Naxian marble',
      dimensions: '222 cm (7 ft 3 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: delphiId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sphinx_of_Naxos_close-up%2C_Delphi%2C_Greece.jpg/800px-Sphinx_of_Naxos_close-up%2C_Delphi%2C_Greece.jpg',
      artworkType: 'sculpture',
    },

    // Palazzo Massimo
    {
      title: 'Boxer at Rest',
      slug: 'boxer-at-rest',
      year: -330,
      medium: 'Bronze',
      dimensions: '128 cm (50 in) tall (seated)',
      artistId: artistIds['ancient-greek'],
      museumId: palazzoMassimoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Boxer_of_Quirinal.jpg/800px-Boxer_of_Quirinal.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Discobolus Lancellotti',
      slug: 'discobolus-lancellotti',
      year: -450,
      medium: 'Marble (Roman copy)',
      dimensions: '155 cm (5 ft 1 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: palazzoMassimoId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Discobolus_Lancelotti_Massimo.jpg/800px-Discobolus_Lancelotti_Massimo.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Sleeping Hermaphroditus',
      slug: 'sleeping-hermaphroditus',
      year: -150,
      medium: 'Marble',
      dimensions: '169 cm (5 ft 7 in) long',
      artistId: artistIds['ancient-greek'],
      museumId: louvre?.id, // Famous Louvre version with Bernini mattress
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hermaphrodite_Louvre_face.jpg/800px-Hermaphrodite_Louvre_face.jpg',
      artworkType: 'sculpture',
    },

    // Olympia
    {
      title: 'Hermes and the Infant Dionysus',
      slug: 'hermes-infant-dionysus',
      year: -340,
      medium: 'Parian marble',
      dimensions: '215 cm (7 ft 1 in) tall',
      artistId: artistIds['praxiteles'],
      museumId: olympiaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Hermes_di_Prassitele%2C_at_Olimpia%2C_front.jpg/800px-Hermes_di_Prassitele%2C_at_Olimpia%2C_front.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Nike of Paionios',
      slug: 'nike-of-paionios',
      year: -420,
      medium: 'Parian marble',
      dimensions: '215 cm (7 ft 1 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: olympiaId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nike_of_Paionios_of_Mende_in_Ancient_Olympia.jpg/800px-Nike_of_Paionios_of_Mende_in_Ancient_Olympia.jpg',
      artworkType: 'sculpture',
    },

    // Reggio Calabria - Riace Bronzes
    {
      title: 'Riace Warrior A',
      slug: 'riace-warrior-a',
      year: -450,
      medium: 'Bronze',
      dimensions: '198 cm (6 ft 6 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: reggioId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Reggio_calabria_museo_nazionale_bronzi_di_riace.jpg/800px-Reggio_calabria_museo_nazionale_bronzi_di_riace.jpg',
      artworkType: 'sculpture',
    },
    {
      title: 'Riace Warrior B',
      slug: 'riace-warrior-b',
      year: -450,
      medium: 'Bronze',
      dimensions: '197 cm (6 ft 6 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: reggioId,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Riace_bronzes_-_Statue_B.jpg/800px-Riace_bronzes_-_Statue_B.jpg',
      artworkType: 'sculpture',
    },

    // British Museum additions
    {
      title: 'Discobolus (Townley)',
      slug: 'discobolus-townley',
      year: -450,
      medium: 'Marble (Roman copy)',
      dimensions: '169 cm (5 ft 7 in) tall',
      artistId: artistIds['ancient-greek'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG/800px-Discobolus_in_National_Roman_Museum_Palazzo_Massimo_alle_Terme.JPG',
      artworkType: 'sculpture',
    },
    {
      title: 'Nereid Monument Sculptures',
      slug: 'nereid-monument',
      year: -390,
      medium: 'Marble',
      dimensions: 'Multiple figures, largest 140 cm',
      artistId: artistIds['ancient-greek'],
      museumId: britishMuseum?.id,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/British_Museum_Room_17_Nereid_Monument_reconstructed.jpg/800px-British_Museum_Room_17_Nereid_Monument_reconstructed.jpg',
      artworkType: 'sculpture',
    },
  ];

  let added = 0;
  let skipped = 0;

  for (const art of sculptures) {
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
        museumId: art.museumId,
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

  const sculptureCount = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  console.log(`\nTotal sculptures: ${sculptureCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
