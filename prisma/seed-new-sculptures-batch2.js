const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

// B1 Batch 2: Classical + modern sculptures

const ARTISTS = {
  ancientGreek: '003d1062-cb74-4372-90fa-b1bcfa9d16ae',
  ancientRoman: '0a510957-ab4a-4fe4-a27c-1e8a74c66d2f',
  bernini: 'c1eea0bc-201c-4ea4-b2d0-9489f6b9dd2d',
};

const MUSEUMS = {
  uffizi: '4ce015ba-cf66-408a-b8bc-a84b48bee334',
  louvre: 'd6b2c0bc-239d-4a46-90f9-2d4c67df6501',
  capitoline: '22ab3075-e702-4519-9ee6-33fd97bb27f3',
  vatican: 'cmkhrgd19000nj6io0n23ez4q',
};

const newArtists = [
  { name: 'Praxiteles', slug: 'praxiteles', birthYear: -400, deathYear: -330, nationality: 'Greek' },
  { name: 'Polykleitos', slug: 'polykleitos', birthYear: -480, deathYear: -405, nationality: 'Greek' },
  { name: 'Judy Chicago', slug: 'judy-chicago', birthYear: 1939, deathYear: null, nationality: 'American' },
  { name: 'Jonathan Borofsky', slug: 'jonathan-borofsky', birthYear: 1942, deathYear: null, nationality: 'American' },
  { name: 'Denis-Adrien Debouvrie', slug: 'denis-adrien-debouvrie', birthYear: null, deathYear: null, nationality: 'Belgian' },
];

const sculptures = [
  {
    title: 'Medici Venus',
    slug: 'medici-venus',
    year: -100,
    medium: 'Marble',
    dimensions: '153 cm (60 in) tall',
    artistSlug: 'ancientGreek',
    museumId: MUSEUMS.uffizi,
    searchVolumeTier: 2,
    description: `<p>The Medici Venus is a <strong>1st-century BCE marble</strong> of Aphrodite, a Roman copy of a lost Greek bronze. She stands in the Venus Pudica (modest Venus) pose, one hand covering her chest and the other her groin. The figure is 153 cm tall and has been at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence since 1677.</p>

<p>For centuries she was considered <strong>the most beautiful ancient sculpture in the world</strong>, and she was the prize of the Medici collection. Napoleon seized her in 1802 and took her to Paris. She was returned to Florence after Waterloo in 1815. Canova's Venus Italica was commissioned as a replacement during her absence.</p>`,
    faqs: [
      { question: "Where can I see the Medici Venus?", answer: "In the <strong>Tribuna</strong> at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence, Italy. She's been there since 1677. The Tribuna is a small, octagonal room designed specifically to display the Medici family's finest works." },
      { question: "How old is the Medici Venus?", answer: "The marble dates to the <strong>1st century BCE</strong>. It's a Roman copy of a lost Greek bronze, probably based on the Aphrodite of Knidos by <a href='/apps/masterpieces/artist/praxiteles'><strong>Praxiteles</strong></a>. For centuries, it was ranked as the finest classical nude sculpture in existence." },
      { question: "Was the Medici Venus stolen?", answer: "Napoleon took her to Paris in <strong>1802</strong> as part of his systematic looting of Italian art. She was displayed at the Louvre. After his defeat at Waterloo, she was returned to Florence in 1815. <a href='/apps/masterpieces/artist/antonio-canova'><strong>Canova</strong></a> carved a replacement (Venus Italica) during her absence." }
    ]
  },
  {
    title: 'Capitoline Venus',
    slug: 'capitoline-venus',
    year: -150,
    medium: 'Marble',
    dimensions: '193 cm (76 in) tall',
    artistSlug: 'ancientRoman',
    museumId: MUSEUMS.capitoline,
    searchVolumeTier: 3,
    description: `<p>The Capitoline Venus is a <strong>Roman marble copy</strong> of a Greek original from around the 2nd century BCE. She stands in the Venus Pudica pose, covering herself modestly after emerging from a bath. The sculpture is 193 cm tall and has been at the <a href="/apps/masterpieces/museum/capitoline-museums"><strong>Capitoline Museums</strong></a> in Rome since 1752.</p>

<p>Pope Benedict XIV bought it from the Stazi collection to prevent it from leaving Rome. She has her own dedicated room (the Gabinetto della Venere) in the Palazzo Nuovo. The figure is one of several Roman copies of a lost Hellenistic original, along with the Medici Venus.</p>`,
    faqs: [
      { question: "Where can I see the Capitoline Venus?", answer: "In the <strong>Gabinetto della Venere</strong> (Venus Cabinet), a dedicated room in the Palazzo Nuovo at the <a href='/apps/masterpieces/museum/capitoline-museums'><strong>Capitoline Museums</strong></a> in Rome. She's been there since Pope Benedict XIV bought her in 1752." },
      { question: "How is it different from the Medici Venus?", answer: "Both are Roman copies of a similar Greek original. The Capitoline Venus is slightly taller at <strong>193 cm (76 inches)</strong> and has a more upright posture. Her proportions are slightly heavier. Art historians debate which copy is closer to the lost Hellenistic original." }
    ]
  },
  {
    title: 'Venus Callipyge',
    slug: 'venus-callipyge',
    year: -100,
    medium: 'Marble',
    dimensions: '152 cm (60 in) tall',
    artistSlug: 'ancientRoman',
    museumId: null,
    searchVolumeTier: 3,
    description: `<p>Venus Callipyge ('Venus of the Beautiful Buttocks') is a <strong>Roman marble</strong> of a partially draped woman looking back over her shoulder at her own backside. The name comes from the Greek words kallos (beauty) and pyge (buttocks). She's at the Museo Archeologico Nazionale in Naples.</p>

<p>The sculpture is probably a <strong>1st or 2nd century CE Roman copy</strong> of a lost Hellenistic original. The figure lifts her peplos to reveal herself in a gesture that's been interpreted as both playful and erotic. The pose inspired countless later works, from Baroque paintings to modern photography.</p>`,
    faqs: [
      { question: "Where can I see the Venus Callipyge?", answer: "At the <strong>Museo Archeologico Nazionale</strong> in Naples, Italy. It was originally part of the Farnese collection and moved to Naples in the 18th century." },
      { question: "What does 'Callipyge' mean?", answer: "It's Greek for '<strong>beautiful buttocks</strong>' (kallos + pyge). The figure looks back over her shoulder at her own backside while lifting her garment. The name was given much later. The original Greek or Roman title is unknown." }
    ]
  },
  {
    title: 'Artemis of Versailles',
    slug: 'artemis-of-versailles',
    year: -100,
    medium: 'Marble',
    dimensions: '200 cm (79 in) tall',
    artistSlug: 'ancientRoman',
    museumId: MUSEUMS.louvre,
    searchVolumeTier: 3,
    description: `<p>The Diana of Versailles (or Artemis of Versailles) is a <strong>2-meter Roman marble</strong> depicting the goddess of the hunt striding forward, reaching for an arrow in her quiver with one hand while a leaping deer stands at her side. It's a 1st or 2nd century CE copy of a lost Greek bronze attributed to Leochares (c. 325 BCE).</p>

<p>Pope Paul IV gave it to King Henry II of France in 1556. It was displayed at Versailles before moving to the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, where it remains today. The dynamic pose and flowing drapery make it one of the finest surviving images of the goddess.</p>`,
    faqs: [
      { question: "Where can I see the Diana of Versailles?", answer: "At the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. She's been in France since 1556, when Pope Paul IV gifted her to King Henry II. She was at the Palace of Versailles before moving to the Louvre during the Revolution." },
      { question: "How big is the Diana of Versailles?", answer: "She stands <strong>200 cm (about 6 feet 7 inches)</strong> tall. The marble is a Roman copy of a Greek bronze from around 325 BCE, possibly by Leochares (who also made the original Apollo Belvedere). The goddess strides forward with a small leaping deer at her side." }
    ]
  },
  {
    title: 'Doryphoros',
    slug: 'doryphoros-spear-bearer',
    year: -440,
    medium: 'Marble (Roman copy of bronze original)',
    dimensions: '212 cm (83 in) tall',
    artistSlug: 'polykleitos',
    museumId: null,
    searchVolumeTier: 2,
    description: `<p>The Doryphoros (Spear Bearer) by <a href="/apps/masterpieces/artist/polykleitos"><strong>Polykleitos</strong></a> is one of the most influential sculptures in Western art history. The original bronze was created around <strong>440 BCE</strong> and is now lost. What survives are Roman marble copies, the best of which is at the Museo Archeologico Nazionale in Naples.</p>

<p>Polykleitos wrote a treatise called the <strong>Canon</strong> laying out the ideal mathematical proportions of the human body. The Doryphoros was his demonstration piece. The figure uses <strong>contrapposto</strong>: weight on one leg, opposite arm engaged, creating an S-curve through the body. This weight-shift technique became the foundation of Western figurative sculpture for the next 2,400 years.</p>`,
    faqs: [
      { question: "Where can I see the Doryphoros?", answer: "The best Roman marble copy is at the <strong>Museo Archeologico Nazionale</strong> in Naples. Other copies exist at the Minneapolis Institute of Art and various European museums. The original bronze by <a href='/apps/masterpieces/artist/polykleitos'><strong>Polykleitos</strong></a> (c. 440 BCE) is lost." },
      { question: "Why is the Doryphoros important?", answer: "It defined <strong>ideal human proportions</strong> in Western art. Polykleitos wrote a mathematical treatise (the Canon) and built this sculpture to demonstrate it. The figure also popularized <strong>contrapposto</strong>, the weight-shift pose that became the basis for nearly all figurative sculpture from <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>ancient Greece</strong></a> through the Renaissance and beyond." },
      { question: "What does 'Doryphoros' mean?", answer: "It's Greek for '<strong>spear bearer</strong>.' The figure originally held a spear in his left hand (lost in the Roman copies). He stands 212 cm (about 7 feet) tall. The body follows a 1:7 head-to-body ratio that Polykleitos considered mathematically perfect." }
    ]
  },
  {
    title: 'Aphrodite of Knidos',
    slug: 'aphrodite-of-knidos',
    year: -350,
    medium: 'Marble (Roman copies of lost original)',
    dimensions: 'Approximately 205 cm (81 in) tall',
    artistSlug: 'praxiteles',
    museumId: null,
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/praxiteles"><strong>Praxiteles</strong></a> created the Aphrodite of Knidos around <strong>350 BCE</strong>, and it became the most famous sculpture in the ancient world. It was the <strong>first life-size female nude</strong> in Greek art. The original stood in an open temple on the island of Knidos (modern Turkey), where visitors traveled from across the Mediterranean to see it.</p>

<p>The original is lost. Over 50 Roman copies survive in varying quality. The best-known include the Colonna Venus (Vatican Museums) and copies in Munich and the Louvre. Pliny the Elder wrote that a man once broke into the temple at night, so overcome by the statue's beauty. The influence of this single sculpture on Western art is hard to overstate.</p>`,
    faqs: [
      { question: "Where can I see the Aphrodite of Knidos?", answer: "The original by <a href='/apps/masterpieces/artist/praxiteles'><strong>Praxiteles</strong></a> is lost. Over 50 Roman copies survive. The <strong>Colonna Venus</strong> at the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a> is considered one of the closest to the original. Others are at the Louvre and the Glyptothek in Munich." },
      { question: "Why is the Aphrodite of Knidos famous?", answer: "It was the <strong>first life-size female nude</strong> in <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>Greek art</strong></a>. Created around 350 BCE, it broke a major taboo. Earlier Greek sculpture showed men nude and women clothed. Praxiteles' nude Aphrodite was so popular that the people of Knidos refused enormous offers to sell it." },
      { question: "What does the sculpture show?", answer: "Aphrodite stands <strong>preparing to bathe</strong>, one hand reaching for a cloth draped over a water jar. The pose is natural rather than posed: she's been caught mid-action. This 'surprised' quality became the model for virtually every Venus sculpture made for the next 2,000 years, including the Medici Venus and Venus de Milo." }
    ]
  },
  {
    title: 'Peplos Kore',
    slug: 'peplos-kore',
    year: -530,
    medium: 'Marble (originally painted)',
    dimensions: '120 cm (47 in) tall',
    artistSlug: 'ancientGreek',
    museumId: null,
    searchVolumeTier: 3,
    description: `<p>The Peplos Kore is an <strong>Archaic Greek marble</strong> of a young woman, dating to around 530 BCE. She was found on the Acropolis in Athens in 1886. The name refers to her garment, the peplos, a heavy wool dress pinned at the shoulders. She stands about 120 cm tall and was originally brightly painted.</p>

<p>Recent analysis suggests she may actually depict the goddess <strong>Athena or Artemis</strong>, not a generic maiden. Traces of paint show she wore a <strong>red and blue dress</strong> with green details and had painted eyes and lips. She's at the Acropolis Museum in Athens. The faint 'Archaic smile' on her face is characteristic of Greek sculpture from this period.</p>`,
    faqs: [
      { question: "Where can I see the Peplos Kore?", answer: "At the <strong>Acropolis Museum</strong> in Athens, Greece. She was found buried on the Acropolis in 1886, along with dozens of other archaic statues that had been ritually buried after the Persian destruction of 480 BCE." },
      { question: "Was the Peplos Kore painted?", answer: "Yes. Analysis shows she was <strong>brightly colored</strong>: red and blue dress, green details, painted eyes and lips. Reconstructions show how dramatically different <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>ancient Greek</strong></a> sculpture looked with its original paint. The Acropolis Museum displays color reconstructions alongside the original." }
    ]
  },
  {
    title: 'Fountain of the Four Rivers',
    slug: 'fountain-four-rivers-bernini',
    year: 1651,
    medium: 'Travertine marble and Egyptian granite obelisk',
    dimensions: 'Approximately 30 m (98 ft) total height with obelisk',
    artistSlug: 'bernini',
    museumId: null,
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini</strong></a> designed the Fountain of the Four Rivers for Pope Innocent X, completing it in 1651 in <strong>Piazza Navona</strong>, Rome. Four massive marble figures represent the Nile, Ganges, Danube, and Río de la Plata, the great rivers of the four known continents. An ancient Egyptian obelisk rises from a hollow rock formation at the center.</p>

<p>The engineering is as impressive as the art. The obelisk appears to balance on thin air above the hollow rock base. Bernini carved a dove (the pope's family symbol) at the top. The fountain is free to see, outdoors, in one of Rome's most beautiful squares. It's the centerpiece of Piazza Navona and one of the finest <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> fountains ever made.</p>`,
    faqs: [
      { question: "Where is the Fountain of the Four Rivers?", answer: "In <strong>Piazza Navona</strong>, central Rome. Free to visit, outdoors, accessible anytime. The square has three fountains, and Bernini's is the largest, in the center. It's surrounded by cafes and street artists. One of the best spots in Rome to sit and watch the world go by." },
      { question: "What do the four figures represent?", answer: "Each figure represents a major river from one of the four known continents: the <strong>Nile</strong> (Africa), <strong>Ganges</strong> (Asia), <strong>Danube</strong> (Europe), and <strong>Río de la Plata</strong> (Americas). <a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> designed them but his assistants carved most of the figures. The Nile's head is veiled because its source was unknown in 1651." },
      { question: "Is the obelisk really balanced on nothing?", answer: "It looks that way. The Egyptian obelisk sits on a <strong>hollow rock formation</strong> with openings you can see through. It's an optical illusion: the obelisk is actually supported by hidden structural elements inside the rock. The engineering was daring for 1651 and caused public anxiety. Pope Innocent X reportedly worried it might collapse." }
    ]
  },
  {
    title: 'Tian Tan Buddha',
    slug: 'tian-tan-buddha',
    year: 1993,
    medium: 'Bronze',
    dimensions: '34 m (112 ft) tall, 250 tonnes',
    artistSlug: null,
    searchVolumeTier: 2,
    description: `<p>The Tian Tan Buddha (or Big Buddha) is a <strong>34-meter (112-foot) bronze</strong> seated on a hilltop at Ngong Ping on Lantau Island, Hong Kong. Completed in 1993, it took 12 years to build. The figure depicts Shakyamuni Buddha sitting in a lotus position facing north, symbolically looking toward mainland China.</p>

<p>The bronze weighs <strong>250 tonnes</strong> and sits on a three-platform lotus throne modeled after the Altar of Heaven (Tian Tan) at the Temple of Heaven in Beijing. Visitors climb 268 steps to reach the base. Inside the pedestal is a museum with Buddhist relics. The Ngong Ping 360 cable car offers dramatic views of the statue during the approach.</p>`,
    faqs: [
      { question: "Where is the Tian Tan Buddha?", answer: "At <strong>Ngong Ping</strong> on Lantau Island, Hong Kong. You can reach it by the Ngong Ping 360 cable car (25 minutes from Tung Chung) or by bus. Climbing the 268 steps to the base is free. The surrounding Po Lin Monastery offers vegetarian meals." },
      { question: "How big is the Tian Tan Buddha?", answer: "The seated bronze figure is <strong>34 meters (112 feet) tall</strong> and weighs 250 tonnes. It sits on a three-level pedestal modeled after the Altar of Heaven in Beijing. Completed in 1993, it was the world's largest outdoor seated bronze Buddha at the time." },
      { question: "Why does the Buddha face north?", answer: "The figure faces north, <strong>symbolically looking toward mainland China</strong>. This is unusual: most Buddha statues face south for good feng shui. The deliberate orientation is a gesture of welcome and connection between Hong Kong and the mainland." }
    ]
  },
  {
    title: 'Christ of the Abyss',
    slug: 'christ-of-the-abyss',
    year: 1954,
    medium: 'Bronze',
    dimensions: '250 cm (8 ft 2 in) tall',
    artistSlug: 'guido-galletti',
    museumId: null,
    searchVolumeTier: 3,
    description: `<p>Christ of the Abyss is a <strong>2.5-meter bronze statue of Christ</strong> submerged in the Mediterranean Sea near Portofino, Italy. <strong>Guido Galletti</strong> sculpted it, and it was placed at a depth of 17 meters (56 feet) in the waters of San Fruttuoso bay in 1954. The figure stands on the seabed with arms raised toward the surface.</p>

<p>Italian diver Duilio Marcante conceived the idea to honor Dario Gonzatti, the first Italian scuba diver to die using an aqualung, in 1947. The bronze was cast using donated medals and naval equipment. Replicas were later placed near Grenada in the Caribbean and off Key Largo, Florida. The original was restored in 2003 after decades of marine encrustation.</p>`,
    faqs: [
      { question: "Where is Christ of the Abyss?", answer: "The original is <strong>underwater</strong> in San Fruttuoso bay near Portofino, Italy, at about 17 meters (56 feet) depth. Divers and snorkelers can visit it. Replicas are in <strong>Grenada</strong> (Caribbean) and off <strong>Key Largo, Florida</strong> (in John Pennekamp Coral Reef State Park, at about 7.6 meters depth)." },
      { question: "Why is there a statue underwater?", answer: "Italian diver Duilio Marcante proposed it in memory of <strong>Dario Gonzatti</strong>, the first Italian to die using scuba equipment, in 1947. The bronze was placed in 1954 as a symbol of peace and protection for all who work and travel by sea." }
    ]
  },
  {
    title: 'The Dinner Party',
    slug: 'the-dinner-party',
    year: 1979,
    medium: 'Ceramic, porcelain, textile, mixed media',
    dimensions: '14.6 m (48 ft) per side (triangular table)',
    artistSlug: 'judy-chicago',
    museumId: null,
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/judy-chicago"><strong>Judy Chicago</strong></a> created The Dinner Party between 1974 and 1979 with the help of over 400 volunteers. It's a massive triangular banquet table with <strong>39 place settings</strong>, each honoring a significant woman from history, from the Primordial Goddess to Georgia O'Keeffe. The names of another 999 women are inscribed on the white tile floor beneath.</p>

<p>Each setting features a hand-painted ceramic plate with a butterfly or vulva-inspired design, an embroidered runner, and a chalice. The piece was controversial when first shown: some critics called it kitsch, others celebrated it as a landmark of feminist art. It's been permanently installed at the <strong>Brooklyn Museum</strong>'s Elizabeth A. Sackler Center for Feminist Art since 2007.</p>`,
    faqs: [
      { question: "Where can I see The Dinner Party?", answer: "It's permanently installed at the <strong>Brooklyn Museum</strong> in New York, in the Elizabeth A. Sackler Center for Feminist Art. Free with museum admission (suggested donation). <a href='/apps/masterpieces/artist/judy-chicago'><strong>Judy Chicago</strong></a> created it between 1974 and 1979." },
      { question: "What is The Dinner Party?", answer: "A massive triangular table with <strong>39 place settings</strong>, each honoring a woman from history: figures like Hatshepsut, Sappho, Hildegard of Bingen, Sojourner Truth, and Georgia O'Keeffe. Each setting has a hand-painted ceramic plate, embroidered runner, and chalice. The floor lists 999 additional women's names in gold." },
      { question: "How big is The Dinner Party?", answer: "Each side of the triangular table is about <strong>14.6 meters (48 feet)</strong> long. The whole installation fills a dedicated gallery. Over 400 volunteers helped create the ceramics, needlework, and china-painting over five years. It's one of the most significant works of <strong>feminist art</strong> ever made." }
    ]
  },
  {
    title: 'Hammering Man',
    slug: 'hammering-man-borofsky',
    year: 1991,
    medium: 'Painted steel with motorized arm',
    dimensions: 'Various (14.6 m / 48 ft in Seattle)',
    artistSlug: 'jonathan-borofsky',
    museumId: null,
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/jonathan-borofsky"><strong>Jonathan Borofsky</strong></a> created multiple Hammering Man sculptures for cities around the world. The most famous is the <strong>14.6-meter (48-foot) painted steel silhouette</strong> outside the Seattle Art Museum, installed in 1991. The flat, black figure swings a motorized arm up and down four times per minute, hammering silently.</p>

<p>Other versions stand in Frankfurt (21 meters), Basel, Seoul, and several other cities. Borofsky intended the figure as a tribute to <strong>all workers</strong>. The Seattle version's arm stops on Labor Day each year. In 1993, someone strapped a ball and chain to its ankle as a prank, which the museum left in place for a while.</p>`,
    faqs: [
      { question: "Where is the Hammering Man?", answer: "Multiple versions exist worldwide. The most famous is the <strong>14.6-meter (48-foot) version outside the Seattle Art Museum</strong>. Others are in Frankfurt (21 meters, the tallest), Basel, Seoul, New York, Minneapolis, and other cities. Free to view outdoors." },
      { question: "Does the Hammering Man actually move?", answer: "Yes. A <strong>motorized arm swings up and down</strong> four times per minute, 20 hours a day. It rests from midnight to 4 a.m. and stops entirely on Labor Day each year, a deliberate tribute to the workers the sculpture represents." },
      { question: "What does the Hammering Man represent?", answer: "<a href='/apps/masterpieces/artist/jonathan-borofsky'><strong>Borofsky</strong></a> said it honors <strong>all workers</strong>. The featureless silhouette is deliberately generic: no face, no identity, just the universal act of labor. The repetitive motion echoes the daily routine of work. It's both a monument and a quiet social commentary." }
    ]
  },
  {
    title: 'Jeanneke Pis',
    slug: 'jeanneke-pis',
    year: 1985,
    medium: 'Bronze',
    dimensions: '50 cm (20 in) tall',
    artistSlug: 'denis-adrien-debouvrie',
    museumId: null,
    searchVolumeTier: 3,
    description: `<p>Jeanneke Pis is a <strong>50 cm bronze fountain</strong> of a crouching girl urinating, installed in 1985 as a female counterpart to Brussels' famous Manneken Pis. Sculptor <a href="/apps/masterpieces/artist/denis-adrien-debouvrie"><strong>Denis-Adrien Debouvrie</strong></a> created it. The statue sits behind iron gates in a small alcove on the Impasse de la Fidélité, a narrow alley off Rue des Bouchers near the Grand Place.</p>

<p>It's much less famous than Manneken Pis but just as tiny and arguably funnier to stumble upon. Tourists toss coins at her feet for good luck. The alley is easy to miss if you're not looking for it.</p>`,
    faqs: [
      { question: "Where is Jeanneke Pis?", answer: "In a small alcove behind iron gates on the <strong>Impasse de la Fidélité</strong>, a narrow alley off Rue des Bouchers in central Brussels. It's near the Grand Place but easy to miss. Free to see. Tourists throw coins at her feet." },
      { question: "What's the connection to Manneken Pis?", answer: "She's the <strong>female counterpart</strong>. Manneken Pis (the peeing boy) dates to 1619. Jeanneke Pis was installed in 1985, nearly 370 years later. There's also a <strong>Zinneke Pis</strong> (a peeing dog) nearby, completing Brussels' oddly specific trio of urinating statues." }
    ]
  },
];

async function seed() {
  // Create new artists
  const artistIds = {};
  for (const data of newArtists) {
    const existing = await prisma.artist.findFirst({ where: { slug: data.slug } });
    if (existing) {
      artistIds[data.slug] = existing.id;
      console.log(`Artist exists: ${data.slug}`);
    } else {
      const artist = await prisma.artist.create({
        data: { id: randomUUID(), ...data, updatedAt: new Date() }
      });
      artistIds[data.slug] = artist.id;
      console.log(`✓ Created artist: ${data.name}`);
    }
  }

  let created = 0;
  let skipped = 0;

  for (const s of sculptures) {
    const existing = await prisma.artwork.findFirst({ where: { slug: s.slug } });
    if (existing) {
      console.log(`Exists: ${s.slug}`);
      skipped++;
      continue;
    }

    let artistId = null;
    if (s.artistSlug) {
      artistId = ARTISTS[s.artistSlug] || artistIds[s.artistSlug] || null;
    }

    await prisma.artwork.create({
      data: {
        id: randomUUID(),
        title: s.title,
        slug: s.slug,
        year: s.year,
        medium: s.medium,
        dimensions: s.dimensions,
        description: s.description,
        faqs: s.faqs,
        artistId,
        museumId: s.museumId || null,
        artworkType: 'sculpture',
        searchVolumeTier: s.searchVolumeTier || 3,
        updatedAt: new Date(),
      }
    });
    console.log(`✓ Created: ${s.title}`);
    created++;
  }

  console.log(`\nDone: ${created} created, ${skipped} skipped`);
  await prisma.$disconnect();
}

seed();
