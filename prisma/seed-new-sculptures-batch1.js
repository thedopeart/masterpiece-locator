const { PrismaClient } = require('@prisma/client');
const { randomUUID } = require('crypto');
const prisma = new PrismaClient();

// B1 Batch 1: Add famous sculptures - public art, Rodin, Bernini, Canova, modern

// Known artist IDs
const ARTISTS = {
  rodin: 'd0f97211-9b5e-4607-a58f-96bfe7025347',
  bernini: 'c1eea0bc-201c-4ea4-b2d0-9489f6b9dd2d',
  canova: 'ca8723f0-c818-47c4-9541-24401cc0e986',
  giacometti: 'artist-giacometti',
  koons: 'artist-jeff-koons',
};

// New artists to create
const newArtists = [
  { name: 'Arturo Di Modica', slug: 'arturo-di-modica', birthYear: 1941, deathYear: 2021, nationality: 'Italian-American' },
  { name: 'Lee Lawrie', slug: 'lee-lawrie', birthYear: 1877, deathYear: 1963, nationality: 'American' },
  { name: 'Kristen Visbal', slug: 'kristen-visbal', birthYear: 1962, deathYear: null, nationality: 'American' },
  { name: 'Yevgeny Vuchetich', slug: 'yevgeny-vuchetich', birthYear: 1908, deathYear: 1974, nationality: 'Soviet' },
  { name: 'Robert Smithson', slug: 'robert-smithson', birthYear: 1938, deathYear: 1973, nationality: 'American' },
  { name: 'Guido Galletti', slug: 'guido-galletti', birthYear: 1893, deathYear: 1977, nationality: 'Italian' },
];

const sculptures = [
  {
    title: 'Charging Bull',
    slug: 'charging-bull-nyc',
    year: 1989,
    medium: 'Bronze',
    dimensions: '340 cm (11 ft) tall, 4,900 kg (10,800 lb)',
    artistSlug: 'arturo-di-modica',
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/arturo-di-modica"><strong>Arturo Di Modica</strong></a> installed Charging Bull as guerrilla art on December 15, 1989, dropping it in front of the New York Stock Exchange without permission. Police impounded it. Public outcry got it reinstalled two blocks south on Broadway, at Bowling Green in Manhattan's Financial District.</p>

<p>The <strong>3.4-meter bronze bull</strong> weighs nearly 5 tonnes. Di Modica spent about $350,000 of his own money creating it in his SoHo studio over two years. He meant it as a symbol of American financial optimism after the 1987 stock market crash. Tourists rub its horns and nose for good luck, polishing those areas to a bright gold sheen.</p>

<p>The sculpture became one of New York's most photographed landmarks and an icon of <a href="https://luxurywallart.com/collections/wall-street-art" target="_blank" rel="noopener"><strong>Wall Street</strong></a> culture. Di Modica fought for decades to retain artistic rights over the work. He died in 2021.</p>`,
    faqs: [
      { question: "Where is the Charging Bull?", answer: "It's at <strong>Bowling Green</strong> in Lower Manhattan, near the southern tip of Broadway. It's free to visit, outdoors, and accessible 24 hours. The closest subway station is Bowling Green (4/5 trains). Expect crowds: it's one of the most photographed spots in New York." },
      { question: "Who made the Charging Bull?", answer: "Sicilian-born American sculptor <a href='/apps/masterpieces/artist/arturo-di-modica'><strong>Arturo Di Modica</strong></a> created it in 1989. He <strong>self-funded the entire project</strong> at a cost of about $350,000 and installed it illegally outside the NYSE as a Christmas gift to New York." },
      { question: "How big is the Charging Bull?", answer: "The bronze sculpture stands <strong>3.4 meters (11 feet) tall</strong>, is 4.9 meters (16 feet) long, and weighs about 3,200 kg (7,100 pounds). Di Modica cast it in his SoHo studio over two years. The polished horns and nose are rubbed daily by tourists for good luck." },
      { question: "What does the Charging Bull symbolize?", answer: "Di Modica created it as a symbol of <strong>financial optimism and strength</strong> after the 1987 stock market crash. A 'bull market' refers to rising stock prices. The sculpture captures aggressive forward momentum. It's become a global icon of <a href='https://luxurywallart.com/collections/wall-street-art' target='_blank' rel='noopener'><strong>Wall Street</strong></a> and capitalism." }
    ]
  },
  {
    title: 'Atlas',
    slug: 'atlas-rockefeller-center',
    year: 1937,
    medium: 'Bronze',
    dimensions: '4.6 m (15 ft) tall, on a 2.7 m (9 ft) pedestal',
    artistSlug: 'lee-lawrie',
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/lee-lawrie"><strong>Lee Lawrie</strong></a> and sculptor René Paul Chambellan created this <strong>Art Deco bronze</strong> for Rockefeller Center in 1937. The 4.6-meter figure of the Titan Atlas holds the celestial sphere on his shoulders, his body leaning forward under the weight. It's the largest sculpture at Rockefeller Center.</p>

<p>The sphere shows the traditional astronomical rings: the ecliptic, equatorial, and meridian circles. Atlas faces St. Patrick's Cathedral across Fifth Avenue, which caused some controversy at the time. Critics called the placement confrontational. The sculpture weighs about 7 tonnes and sits on a granite pedestal in front of the International Building.</p>`,
    faqs: [
      { question: "Where is the Atlas statue?", answer: "It's in front of the <strong>International Building at Rockefeller Center</strong>, 630 Fifth Avenue, Manhattan. Atlas faces St. Patrick's Cathedral across the street. It's free to view and outdoors. The surrounding plaza is also home to the famous Rockefeller Center Christmas tree each winter." },
      { question: "How big is Atlas?", answer: "The bronze figure stands <strong>4.6 meters (15 feet) tall</strong> on a 2.7-meter (9-foot) granite pedestal. The entire piece weighs about 7 tonnes. <a href='/apps/masterpieces/artist/lee-lawrie'><strong>Lee Lawrie</strong></a> and René Paul Chambellan designed it in the <strong>Art Deco</strong> style that defines Rockefeller Center." },
      { question: "What does Atlas hold?", answer: "He's holding the <strong>celestial sphere</strong>, not the Earth. The armillary sphere shows astronomical rings (the ecliptic, equator, and meridian). In Greek mythology, Atlas was a Titan condemned by Zeus to hold up the sky. The north-south axis of the sphere is tilted at 23.5 degrees, matching Earth's actual axial tilt." }
    ]
  },
  {
    title: 'Fearless Girl',
    slug: 'fearless-girl',
    year: 2017,
    medium: 'Bronze',
    dimensions: '127 cm (50 in) tall',
    artistSlug: 'kristen-visbal',
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/kristen-visbal"><strong>Kristen Visbal</strong></a> sculpted Fearless Girl as a <strong>127 cm (50-inch) bronze</strong> of a young girl standing with her hands on her hips, chin up, facing forward. Originally installed in March 2017 directly opposite the Charging Bull on International Women's Day, she now stands in front of the New York Stock Exchange.</p>

<p>State Street Global Advisors commissioned the statue to promote gender diversity on corporate boards. The piece became an instant viral sensation and sparked debate about public art, feminism, and corporate messaging. She was moved to her current location at the NYSE in December 2018. Whether you see her as a genuine feminist icon or clever corporate marketing depends on who you ask.</p>`,
    faqs: [
      { question: "Where is Fearless Girl now?", answer: "She stands in front of the <strong>New York Stock Exchange</strong> at 11 Broad Street in Manhattan. She was moved there in December 2018 from her original spot facing the Charging Bull at Bowling Green. Free to visit, outdoors." },
      { question: "Who made Fearless Girl?", answer: "<a href='/apps/masterpieces/artist/kristen-visbal'><strong>Kristen Visbal</strong></a>, a Delaware-based sculptor, created the bronze in 2017. <strong>State Street Global Advisors</strong> commissioned it for International Women's Day to promote gender diversity on corporate boards. The piece went viral within hours of its installation." },
      { question: "How tall is Fearless Girl?", answer: "She stands <strong>127 cm (about 4 feet 2 inches)</strong> tall. The small scale is intentional: a young girl facing down a massive bull. The contrast in size was the whole point when she was originally positioned opposite the 3.4-meter Charging Bull." }
    ]
  },
  {
    title: 'The Motherland Calls',
    slug: 'the-motherland-calls',
    year: 1967,
    medium: 'Reinforced concrete over metal frame',
    dimensions: '85 m (279 ft) tall, 8,000 tonnes',
    artistSlug: 'yevgeny-vuchetich',
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/yevgeny-vuchetich"><strong>Yevgeny Vuchetich</strong></a> designed The Motherland Calls to commemorate the <strong>Battle of Stalingrad</strong>, one of the bloodiest battles in human history. The statue stands on Mamayev Kurgan, a hill in Volgograd (formerly Stalingrad), Russia, where some of the fiercest fighting took place in 1942-43.</p>

<p>At <strong>85 meters (279 feet)</strong> from base to sword tip, it was the tallest statue in the world when completed in 1967. The figure is a woman striding forward with a raised sword, mouth open in a battle cry. The sword alone is 33 meters long. She's made of reinforced concrete over a metal frame and weighs about 8,000 tonnes. An estimated 35,000 identified soldiers are buried in the hill beneath her.</p>`,
    faqs: [
      { question: "How tall is The Motherland Calls?", answer: "The figure stands <strong>85 meters (279 feet)</strong> from base to the tip of the sword. The sword alone is 33 meters (108 feet) long. When completed in 1967, it was the tallest statue in the world. The entire structure weighs about 8,000 tonnes." },
      { question: "Where is The Motherland Calls?", answer: "On <strong>Mamayev Kurgan</strong>, a hilltop memorial complex in Volgograd (formerly Stalingrad), Russia. The site is a massive war memorial with an eternal flame, mass graves, and a Hall of Military Glory. Over 35,000 identified soldiers from the <strong>Battle of Stalingrad</strong> are buried in the hill." },
      { question: "What does The Motherland Calls represent?", answer: "<a href='/apps/masterpieces/artist/yevgeny-vuchetich'><strong>Vuchetich</strong></a> depicted a <strong>woman charging forward with a raised sword</strong>, calling her children to fight. She represents Mother Russia rallying her people during the devastating 1942-43 battle. The open mouth and fierce expression convey urgency and defiance." }
    ]
  },
  {
    title: 'Leshan Giant Buddha',
    slug: 'leshan-giant-buddha',
    year: 803,
    medium: 'Stone (carved from cliff face)',
    dimensions: '71 m (233 ft) tall',
    artistSlug: null,
    searchVolumeTier: 2,
    description: `<p>The Leshan Giant Buddha is a <strong>71-meter (233-foot) stone sculpture</strong> of Maitreya carved into a cliff face where the Min, Dadu, and Qingyi rivers converge in Sichuan Province, China. Construction began in 713 CE under the direction of a Chinese monk named Haitong and was completed in 803 CE, nearly 90 years later.</p>

<p>It's the <strong>largest stone Buddha in the world</strong>. The figure sits with hands on its knees, facing the rivers. The head alone is 14.7 meters tall. Over a thousand buns of coiled hair were individually carved into the scalp. A clever drainage system hidden in the hair, collar, and chest channels rainwater away to prevent erosion. It became a UNESCO World Heritage Site in 1996.</p>`,
    faqs: [
      { question: "How tall is the Leshan Giant Buddha?", answer: "It stands <strong>71 meters (233 feet)</strong> tall, making it the largest stone Buddha sculpture in the world. The head is 14.7 meters tall, and each ear is 7 meters long. The figure was carved directly into a red sandstone cliff over 90 years, from 713 to 803 CE." },
      { question: "Where is the Leshan Giant Buddha?", answer: "In <strong>Sichuan Province, China</strong>, at the confluence of the Min, Dadu, and Qingyi rivers near the city of Leshan. It's about 2 hours from Chengdu by bus. You can view it from a boat on the river or walk down stairs carved alongside the cliff to stand at its feet." },
      { question: "Why was the Leshan Giant Buddha built?", answer: "A monk named <strong>Haitong</strong> initiated the project in 713 CE, believing that a large Buddha figure would calm the turbulent river waters where the three rivers meet and protect the boats and fishermen. Local legend says the amount of stone removed during carving actually did slow the river currents." }
    ]
  },
  {
    title: 'Spring Temple Buddha',
    slug: 'spring-temple-buddha',
    year: 2008,
    medium: 'Copper cast on steel frame',
    dimensions: '128 m (420 ft) tall, 153 m (502 ft) with pedestal',
    artistSlug: null,
    searchVolumeTier: 3,
    description: `<p>The Spring Temple Buddha in Lushan County, Henan Province, China, is one of the <strong>tallest statues in the world</strong> at 128 meters (420 feet), or 153 meters (502 feet) including its pedestal and throne. The copper-cast figure depicts Vairocana Buddha standing with one hand raised. Construction began in 1997 and finished in 2008.</p>

<p>The statue required <strong>1,100 copper cast pieces</strong> and over 108 kg of gold for the surface. It stands on a 25-meter lotus throne atop a 20-meter building. The project was partly a response to the Taliban's destruction of the Bamiyan Buddhas in Afghanistan in 2001, which accelerated fundraising and construction.</p>`,
    faqs: [
      { question: "How tall is the Spring Temple Buddha?", answer: "The figure itself is <strong>128 meters (420 feet)</strong> tall. Including the lotus throne and building base, the total height reaches 153 meters (502 feet). It's one of the tallest statues in the world. Made from 1,100 copper pieces over a steel frame, finished in 2008." },
      { question: "Where is the Spring Temple Buddha?", answer: "In <strong>Lushan County, Henan Province, China</strong>. It's in the Fodushan Scenic Area, named after the hot springs in the region. The nearest city is Pingdingshan. The site includes a monastery and a large staircase leading to the base." }
    ]
  },
  {
    title: 'Monument to Balzac',
    slug: 'monument-to-balzac-rodin',
    year: 1898,
    medium: 'Bronze (from plaster original)',
    dimensions: '270 cm (106 in) tall',
    artistSlug: 'rodin',
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> spent seven years on his portrait of the French novelist Honoré de Balzac, and the result nearly destroyed his reputation. The Société des Gens de Lettres commissioned it in 1891, expecting a conventional likeness. Rodin delivered a <strong>massive, cloaked figure</strong> with an abstracted face tilted upward, more like a force of nature than a man.</p>

<p>When unveiled at the 1898 Salon, critics called it a 'sack of plaster' and a 'snowman.' The literary society rejected it and hired another sculptor. Rodin considered it his boldest work and kept the plaster in his garden at Meudon. The first bronze cast wasn't made until 1939, decades after his death. Today, casts stand at the <a href="/apps/masterpieces/museum/musee-rodin"><strong>Musée Rodin</strong></a> in Paris and MoMA in New York.</p>`,
    faqs: [
      { question: "Where can I see Rodin's Balzac?", answer: "Bronze casts are at the <a href='/apps/masterpieces/museum/musee-rodin'><strong>Musée Rodin</strong></a> in Paris (garden) and the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art</strong></a> in New York. Other casts exist in various collections. The original plaster is at the Musée Rodin in Meudon." },
      { question: "Why was the Balzac rejected?", answer: "The literary society that commissioned it expected a <strong>realistic portrait</strong>. <a href='/apps/masterpieces/artist/auguste-rodin'><strong>Rodin</strong></a> instead delivered an abstract, massive cloaked figure that emphasized Balzac's creative power over his physical appearance. Critics at the 1898 Salon mocked it. Rodin considered it his most daring sculpture." },
      { question: "How big is the Monument to Balzac?", answer: "The bronze stands <strong>270 cm (about 9 feet)</strong> tall. Rodin spent seven years researching Balzac's body type, visiting his tailor, and studying portraits. He made over 40 studies before settling on the wrapped, monolithic form that so shocked audiences." }
    ]
  },
  {
    title: 'The Three Shades',
    slug: 'the-three-shades-rodin',
    year: 1881,
    medium: 'Bronze',
    dimensions: '191 cm (75 in) tall',
    artistSlug: 'rodin',
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Rodin</strong></a> placed The Three Shades at the very top of his Gates of Hell, inspired by Dante's Inferno. The three figures are identical: the same male body cast three times and arranged in a circle, heads bowed, arms pointing downward toward the damned souls below. They represent the <strong>spirits who guard the entrance to Hell</strong>.</p>

<p>Rodin based the figure on his earlier Adam sculpture, itself inspired by <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> figures in the Sistine Chapel. The heavy, muscular bodies and drooping postures convey weight and despair. Each figure leans forward at an extreme angle. When displayed as an independent group (separate from the Gates), the three converging bodies create a powerful sense of gravity and hopelessness.</p>`,
    faqs: [
      { question: "Where can I see The Three Shades?", answer: "A large bronze cast stands in the garden of the <a href='/apps/masterpieces/museum/musee-rodin'><strong>Musée Rodin</strong></a> in Paris. Other casts exist at museums worldwide, including the Rodin Museum in Philadelphia. The figures also appear atop the full <strong>Gates of Hell</strong> installation." },
      { question: "Why are all three figures the same?", answer: "<a href='/apps/masterpieces/artist/auguste-rodin'><strong>Rodin</strong></a> deliberately cast the <strong>same figure three times</strong> and arranged them in a circle. The repetition emphasizes the universality of suffering. In Dante's Inferno, the shades (spirits) at Hell's gate warn: 'Abandon all hope, ye who enter here.'" },
      { question: "How does this relate to the Gates of Hell?", answer: "The Three Shades sit on top of Rodin's <strong>Gates of Hell</strong>, a massive bronze doorway based on Dante's Inferno. They point downward at the hundreds of writhing figures below. The Gates project occupied Rodin for 37 years (1880-1917) and spawned many independent works, including The Thinker." }
    ]
  },
  {
    title: 'Blessed Ludovica Albertoni',
    slug: 'blessed-ludovica-albertoni-bernini',
    year: 1674,
    medium: 'Marble',
    dimensions: 'Life-size, approximately 188 cm (74 in) long',
    artistSlug: 'bernini',
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> carved this as his <strong>final major sculpture</strong>, completing it in 1674 at age 75. It shows the Blessed Ludovica Albertoni, a Roman noblewoman and Franciscan tertiary, at the moment of her death, in a state of spiritual ecstasy. She reclines on her deathbed, clutching her chest, mouth open, eyes half-closed.</p>

<p>Like his earlier Ecstasy of Saint Teresa, Bernini blurred the line between spiritual rapture and physical sensation. The drapery folds cascade in turbulent waves around her body. Bernini designed the altar, lighting, and surrounding architecture as one unified <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> composition. The sculpture is in the Altieri Chapel at San Francesco a Ripa in Rome's Trastevere neighborhood.</p>`,
    faqs: [
      { question: "Where can I see Blessed Ludovica Albertoni?", answer: "It's in the <strong>Altieri Chapel</strong> at the church of San Francesco a Ripa in Rome's Trastevere neighborhood. Free to enter. The chapel is small and the sculpture sits above the altar, lit by a window that Bernini designed as part of the installation." },
      { question: "How does this compare to the Ecstasy of Saint Teresa?", answer: "<a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> created both works to show women in states of spiritual ecstasy, but Ludovica is more intimate. There's no angel, no dramatic framing. Just a dying woman on her bed. Bernini was 75 when he finished it. The <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> mastery of fabric and flesh is just as impressive as the Teresa, 22 years earlier." }
    ]
  },
  {
    title: 'Perseus with the Head of Medusa',
    slug: 'perseus-canova',
    year: 1804,
    medium: 'Marble',
    dimensions: '242 cm (95 in) tall',
    artistSlug: 'canova',
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/antonio-canova"><strong>Antonio Canova</strong></a> carved this marble Perseus as a <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> response to the ancient Apollo Belvedere. The figure stands in a near-identical pose, but holds Medusa's severed head instead of a bow. Canova finished the first version in 1801 and a second in 1804.</p>

<p>When Napoleon looted the Apollo Belvedere from the Vatican in 1798, Pope Pius VII placed Canova's Perseus in its spot as a worthy replacement. The Apollo was eventually returned after Waterloo, but the Perseus stayed. It's still in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>, in the same Cortile del Belvedere gallery as the Apollo it was meant to replace.</p>`,
    faqs: [
      { question: "Where can I see Canova's Perseus?", answer: "It's in the <strong>Cortile del Belvedere</strong> at the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a> in Rome, displayed near the Apollo Belvedere. A second version is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York." },
      { question: "How does this relate to the Apollo Belvedere?", answer: "<a href='/apps/masterpieces/artist/antonio-canova'><strong>Canova</strong></a> deliberately based the pose on the Apollo Belvedere. When Napoleon took the Apollo to Paris in 1798, the Pope put Canova's Perseus in its place. The marble stands <strong>242 cm (about 8 feet)</strong> tall. It's considered one of the finest <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> sculptures ever made." }
    ]
  },
  {
    title: 'The Three Graces',
    slug: 'three-graces-canova',
    year: 1817,
    medium: 'Marble',
    dimensions: '182 cm (72 in) tall',
    artistSlug: 'canova',
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/antonio-canova"><strong>Antonio Canova</strong></a> carved two versions of The Three Graces. The first (1814-17) is at the <strong>Hermitage Museum</strong> in St. Petersburg. The second (1815-17) was jointly purchased by the Victoria and Albert Museum and the National Galleries of Scotland, alternating display between London and Edinburgh.</p>

<p>The three figures, Aglaea, Euphrosyne, and Thalia, stand in an embrace, their bodies intertwined. Canova polished the marble to a near-translucent glow and applied a light wax finish to give it a warm, skin-like quality. The group exemplifies <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> ideals: classical subject, restrained emotion, and flawless surface. It's one of the most reproduced sculptures of the 19th century.</p>`,
    faqs: [
      { question: "Where can I see The Three Graces?", answer: "Two versions exist. One is at the <strong>Hermitage Museum</strong> in St. Petersburg. The other alternates between the <strong>Victoria and Albert Museum</strong> in London and the <strong>National Galleries of Scotland</strong> in Edinburgh. Check which location has it before visiting." },
      { question: "How big is The Three Graces?", answer: "The marble group stands <strong>182 cm (about 6 feet)</strong> tall. <a href='/apps/masterpieces/artist/antonio-canova'><strong>Canova</strong></a> polished the surface and applied a <strong>thin wax finish</strong> to make the marble look warm and skin-like. The <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> technique was so refined that viewers described the figures as looking alive." },
      { question: "Who are the Three Graces?", answer: "In Greek mythology, they're <strong>Aglaea, Euphrosyne, and Thalia</strong>, daughters of Zeus. They represent beauty, charm, and joy. Classical artists traditionally showed them nude, standing close together. Canova's version has them embracing in a circular arrangement, each visible from a different angle." }
    ]
  },
  {
    title: 'Cupid and Psyche',
    slug: 'cupid-and-psyche-canova',
    year: 1793,
    medium: 'Marble',
    dimensions: '155 cm (61 in) tall',
    artistSlug: 'canova',
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/antonio-canova"><strong>Antonio Canova</strong></a> carved Cupid and Psyche between 1787 and 1793. The marble captures the moment Cupid revives Psyche with a kiss after she's fallen into a death-like sleep from opening Proserpina's box. He leans over her, wings spread, one hand cradling her head.</p>

<p>The composition forms an <strong>X-shape</strong> when viewed from the side: the intersecting diagonals of their bodies create tension and grace. Canova's polished marble and idealized forms made it a masterpiece of <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassicism</strong></a>. The original is at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. A second version, with slight differences, is at the Hermitage Museum in St. Petersburg.</p>`,
    faqs: [
      { question: "Where can I see Cupid and Psyche?", answer: "The original is at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. A second version is at the <strong>Hermitage Museum</strong> in St. Petersburg. <a href='/apps/masterpieces/artist/antonio-canova'><strong>Canova</strong></a> carved both between 1787 and 1793." },
      { question: "What myth does Cupid and Psyche depict?", answer: "From Apuleius' <strong>The Golden Ass</strong>. Psyche, a mortal woman, opens a forbidden box from the underworld and falls into a deathlike sleep. Cupid (Eros), her divine lover, finds her and <strong>revives her with a kiss</strong>. Canova captures the moment just before their lips meet." },
      { question: "How big is Cupid and Psyche?", answer: "The marble group is <strong>155 cm (about 5 feet 1 inch) tall</strong>. The X-shaped composition of their intertwined bodies is best appreciated from the side. Canova's surface polish gives the marble a soft, almost warm appearance that defines <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> sculpture." }
    ]
  },
  {
    title: 'Puppy',
    slug: 'puppy-koons',
    year: 1992,
    medium: 'Stainless steel, soil, flowering plants',
    dimensions: '1,234 cm (40 ft 6 in) tall',
    artistSlug: 'koons',
    searchVolumeTier: 3,
    description: `<p><strong>Jeff Koons</strong> created Puppy in 1992: a <strong>12-meter (40-foot) West Highland terrier</strong> covered entirely in living flowers. The stainless steel armature holds soil and an irrigation system that supports roughly 70,000 flowering plants. It was originally shown at a castle in Germany, then moved permanently to the terrace outside the <a href="/apps/masterpieces/museum/guggenheim-bilbao"><strong>Guggenheim Bilbao</strong></a> in 1997.</p>

<p>The sculpture changes with the seasons as different flowers bloom and fade. Maintenance crews replant it twice a year. It's become Bilbao's unofficial mascot and one of the most photographed landmarks in Spain's Basque Country.</p>`,
    faqs: [
      { question: "Where is Koons' Puppy?", answer: "It's on the terrace outside the <a href='/apps/masterpieces/museum/guggenheim-bilbao'><strong>Guggenheim Bilbao</strong></a> in Spain. Free to see from the plaza (no museum ticket needed). It's been there since the museum opened in 1997. The <strong>12-meter flower-covered dog</strong> is hard to miss." },
      { question: "Is Puppy made of real flowers?", answer: "Yes. About <strong>70,000 living plants</strong> grow on a stainless steel frame filled with soil and fed by an internal irrigation system. The flowers change seasonally. Maintenance crews replant it twice a year. Different blooms give Puppy a slightly different appearance each time you visit." },
      { question: "How big is Puppy?", answer: "It stands <strong>12.3 meters (about 40 feet 6 inches)</strong> tall. Koons modeled it after a West Highland White Terrier. The scale transforms a cute domestic pet into something monumental. The contrast between the kitsch subject and the massive size is typical of Koons' approach." }
    ]
  },
  {
    title: 'Spiral Jetty',
    slug: 'spiral-jetty',
    year: 1970,
    medium: 'Black basalt, earth, salt crystals',
    dimensions: '457 m (1,500 ft) long, 4.6 m (15 ft) wide',
    artistSlug: 'robert-smithson',
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/robert-smithson"><strong>Robert Smithson</strong></a> built Spiral Jetty in April 1970 using <strong>6,650 tons of black basalt, earth, and salt crystals</strong> to create a 457-meter (1,500-foot) counterclockwise coil extending into the Great Salt Lake in Utah. It's the most famous work of the Land Art (or Earth Art) movement.</p>

<p>Smithson chose the site for its remote, post-industrial landscape and the lake's red-pink algae-tinted water. The jetty was submerged for most of the 1970s-90s as lake levels rose. Since 2002 it's been mostly visible, now coated in white salt crystals that were never part of the original plan. Smithson died in a plane crash in 1973 at age 35 while surveying a site for another earthwork.</p>`,
    faqs: [
      { question: "Where is Spiral Jetty?", answer: "On the northeastern shore of the <strong>Great Salt Lake</strong> in Box Elder County, Utah. It's about 2.5 hours from Salt Lake City via dirt roads. There are no facilities, no signs, and no admission charge. Visibility depends on lake water levels: it's been mostly exposed since 2002." },
      { question: "How big is Spiral Jetty?", answer: "The coil is <strong>457 meters (1,500 feet) long</strong> and 4.6 meters (15 feet) wide. <a href='/apps/masterpieces/artist/robert-smithson'><strong>Smithson</strong></a> used 6,650 tons of black basalt and earth to build it in April 1970. It spirals counterclockwise into the lake. Salt crystals now coat its surface white." },
      { question: "What art movement is Spiral Jetty part of?", answer: "It's the defining work of <strong>Land Art</strong> (or Earth Art), a 1960s-70s movement that rejected galleries and used the landscape itself as a medium. Artists like Smithson, Michael Heizer, and Walter De Maria created large-scale works in remote locations. The movement questioned the art market by making works that couldn't be sold or moved." }
    ]
  },
  {
    title: 'Dog',
    slug: 'dog-giacometti',
    year: 1951,
    medium: 'Bronze',
    dimensions: '47 cm (18.5 in) tall, 100 cm (39 in) long',
    artistSlug: 'giacometti',
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/alberto-giacometti"><strong>Alberto Giacometti</strong></a> sculpted Dog in 1951, creating a thin, emaciated bronze canine with its nose low to the ground. Like his elongated human figures, the dog is stretched and skeletal, with spindly legs and a narrow body. It captures a stray dog's posture perfectly: ribs showing, head down, walking with no destination.</p>

<p>Giacometti said he identified with the dog. 'One day I was walking along the Rue de Vanves in the rain, close to the walls of the buildings, with my head down, feeling a little sad. I felt like a dog just then.' The bronze is among his most popular works. Casts are in major collections worldwide, including MoMA and the Fondation Giacometti in Paris.</p>`,
    faqs: [
      { question: "Where can I see Giacometti's Dog?", answer: "Casts are in several major museums: <a href='/apps/masterpieces/museum/moma'><strong>MoMA</strong></a> in New York, the <strong>Fondation Giacometti</strong> in Paris, and the <strong>Hirshhorn Museum</strong> in Washington, D.C., among others. <a href='/apps/masterpieces/artist/alberto-giacometti'><strong>Giacometti</strong></a> made multiple bronze casts from the 1951 original plaster." },
      { question: "Why did Giacometti make a skinny dog?", answer: "The emaciated form matches his <strong>elongated human sculptures</strong>. Giacometti said he identified with the dog: 'I felt like a dog' while walking alone in the rain in Paris. The thin, bone-visible body with head lowered captures loneliness and survival. It's existentialist sculpture at its most direct." },
      { question: "How big is Giacometti's Dog?", answer: "The bronze is <strong>47 cm (18.5 inches) tall</strong> and 100 cm (39 inches) long. Like all of Giacometti's post-war sculptures, the surface is rough and textured. He worked and reworked the plaster constantly, building up and scraping away material until the form felt right." }
    ]
  },
];

async function seed() {
  // Create new artists
  const artistIds = { ...ARTISTS };
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

  // Create sculptures
  let created = 0;
  let skipped = 0;

  for (const s of sculptures) {
    const existing = await prisma.artwork.findFirst({ where: { slug: s.slug } });
    if (existing) {
      console.log(`Exists: ${s.slug}`);
      skipped++;
      continue;
    }

    const artistId = s.artistSlug ? (artistIds[s.artistSlug] || null) : null;

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
