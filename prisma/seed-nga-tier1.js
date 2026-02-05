/**
 * Seed NGA Tier 1 Famous Paintings
 * High-SEO-value masterpieces at the National Gallery of Art
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const NGA_MUSEUM_ID = "cmkjdx4px00095nnrfyajckdx";

const TIER1_PAINTINGS = [
  {
    slug: "lavender-mist-pollock",
    title: "Number 1, 1950 (Lavender Mist)",
    artistSlug: "jackson-pollock",
    year: 1950,
    medium: "Oil, enamel, and aluminum on canvas",
    dimensions: "221 × 300 cm (87 × 118 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/06/Lavender_Mist.jpg",
    wikidataId: "Q3345052",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Number_1,_1950_(Lavender_Mist)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> created this monumental painting in the summer of 1950, during the peak of his "drip" period. Despite its name, the painting contains no lavender pigment. The title came from art critic Clement Greenberg, who saw lavender tones in the complex web of white, blue, yellow, gray, and rose paint.</p>
<p>Pollock worked on an unstretched canvas laid flat on his studio floor, dripping and pouring household enamel and aluminum paint in rhythmic, dance-like movements. The result is a shimmering surface that seems to pulse with energy. Lavender Mist is considered one of his three greatest works, alongside Autumn Rhythm and One: Number 31.</p>
<p>The painting entered the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> collection in 1976 and remains one of the most important examples of <a href="/apps/masterpieces/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> in any museum.</p>`,
    faqs: [
      { question: "Where is Lavender Mist displayed?", answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock's</strong></a> masterpiece hangs in the East Building of the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, in the galleries dedicated to <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>." },
      { question: "Why is it called Lavender Mist if there's no lavender?", answer: "Art critic Clement Greenberg coined the subtitle. He perceived lavender tones in the layered white, gray, pink, and blue paint, though <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> used no actual lavender pigment." },
      { question: "How did Pollock create his drip paintings?", answer: "<a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock</strong></a> laid unstretched canvas on his studio floor and dripped household enamel paint from sticks and hardened brushes, moving around and over the canvas in rhythmic gestures." },
      { question: "How big is Lavender Mist?", answer: "The painting measures 221 × 300 cm (about 7 × 10 feet), making it one of <a href=\"/apps/masterpieces/artist/jackson-pollock\"><strong>Pollock's</strong></a> largest and most ambitious works." }
    ]
  },
  {
    slug: "family-of-saltimbanques",
    title: "Family of Saltimbanques",
    artistSlug: "pablo-picasso",
    year: 1905,
    medium: "Oil on canvas",
    dimensions: "212.8 × 229.6 cm (83.8 × 90.4 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/ca/Family_of_Saltimbanques.JPG",
    wikidataId: "Q2412281",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Family_of_Saltimbanques",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this monumental canvas in 1905, during his Rose Period. Six circus performers stand in a barren landscape: a harlequin, a jester, two acrobats, a young girl, and a seated woman. Their poses suggest both isolation and quiet solidarity.</p>
<p>The saltimbanques were itinerant entertainers who traveled from town to town, living on society's margins. Picasso identified with these outsiders, and some scholars see the tall harlequin as a self-portrait. The warm pinks and earth tones replace the melancholy blues of his earlier work.</p>
<p>At over seven feet tall and wide, this is the largest painting from Picasso's Rose Period and is considered its masterpiece. It has been at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> since 1963.</p>`,
    faqs: [
      { question: "Where can I see Family of Saltimbanques?", answer: "This <a href=\"/apps/masterpieces/artist/pablo-picasso\"><strong>Picasso</strong></a> masterpiece is displayed at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's one of the most important early Picassos in any American museum." },
      { question: "What is a saltimbanque?", answer: "Saltimbanques were traveling circus performers in early 20th-century Europe. <a href=\"/apps/masterpieces/artist/pablo-picasso\"><strong>Picasso</strong></a> was drawn to these marginalized artists as symbols of the bohemian life." },
      { question: "What is Picasso's Rose Period?", answer: "The Rose Period (1904-1906) followed <a href=\"/apps/masterpieces/artist/pablo-picasso\"><strong>Picasso's</strong></a> Blue Period. Warmer pinks and earth tones replaced cold blues, and circus performers became his main subjects." }
    ]
  },
  {
    slug: "laocoon-el-greco",
    title: "Laocoön",
    artistSlug: "el-greco",
    year: 1614,
    medium: "Oil on canvas",
    dimensions: "137.5 × 172.5 cm (54.1 × 67.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/El_Greco_%28Domenikos_Theotokopoulos%29_-_Laoco%C3%B6n_-_Google_Art_Project.jpg",
    wikidataId: "Q2666625",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Laoco%C3%B6n_(El_Greco)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted this dramatic scene between 1610 and 1614, near the end of his life. It depicts the Trojan priest Laocoön and his sons being strangled by sea serpents, punishment from the gods for warning Troy about the wooden horse.</p>
<p>What makes this painting extraordinary is its setting. Instead of ancient Troy, El Greco placed the scene before Toledo, Spain, where he lived and worked. The city's distinctive skyline is unmistakable in the background. This bold anachronism transforms classical myth into a vision of divine judgment over contemporary Spain.</p>
<p>The elongated figures, eerie lighting, and apocalyptic atmosphere are hallmarks of El Greco's late style. The painting is the only mythological subject in his surviving work and hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is El Greco's Laocoön displayed?", answer: "This late masterpiece by <a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's his only surviving mythological painting." },
      { question: "Why is Toledo in a Greek myth painting?", answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a> placed the ancient Trojan story before Toledo, where he lived. Scholars see this as a statement about divine judgment over Spain or a meditation on his adopted city." },
      { question: "Who was Laocoön?", answer: "Laocoön was a Trojan priest who warned his countrymen not to trust the Greek wooden horse. The gods sent serpents to kill him and his sons, silencing the warning that might have saved Troy." }
    ]
  },
  {
    slug: "la-condition-humaine",
    title: "The Human Condition",
    artistSlug: "rene-magritte",
    year: 1933,
    medium: "Oil on canvas",
    dimensions: "100 × 81 cm (39.4 × 31.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/eb/Magritte_TheSonOfMan.jpg",
    wikidataId: "Q3205030",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Human_Condition_(Magritte)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/rene-magritte"><strong>René Magritte</strong></a> painted this philosophical puzzle in 1933. An easel stands before a window, holding a canvas that perfectly continues the landscape visible through the glass. Where does the painting end and reality begin? That's precisely Magritte's point.</p>
<p>The work questions how we perceive and represent the world. The painted tree on the canvas merges seamlessly with the "real" tree outside, yet both are equally painted by Magritte. He wrote that the painting shows "how we see the world: we see it as being outside ourselves even though it is only a mental representation."</p>
<p>This is one of <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealism's</strong></a> most influential images. The version at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> is the 1933 original; Magritte painted several variations on this theme.</p>`,
    faqs: [
      { question: "Where can I see The Human Condition by Magritte?", answer: "The 1933 original is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. <a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> painted several versions; another is in Geneva." },
      { question: "What does The Human Condition mean?", answer: "<a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> explored how we perceive reality. The painting-within-a-painting shows that our view of the world is always a mental construction, never unmediated truth." },
      { question: "What movement is Magritte associated with?", answer: "<a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>René Magritte</strong></a> was a leading <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> painter, known for thought-provoking images that challenge perception and logic." }
    ]
  },
  {
    slug: "cape-cod-evening-hopper",
    title: "Cape Cod Evening",
    artistSlug: "edward-hopper",
    year: 1939,
    medium: "Oil on canvas",
    dimensions: "76.2 × 101.6 cm (30 × 40 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/15/Cape_Cod_Evening.jpg",
    wikidataId: "Q5035539",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Cape_Cod_Evening",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a> painted this scene of American solitude in 1939, working from his studio in Truro, Massachusetts. A couple stands outside their house in the fading light while their collie gazes into the encroaching woods. No one looks at anyone else.</p>
<p>Hopper captures the psychological distance that can exist between people who share a life. The woman appears lost in thought, the man faces the dog, and the dog watches something unseen in the trees. The deep shadows of evening amplify the sense of isolation.</p>
<p>Like all of Hopper's mature work, the painting isn't a literal portrait of a place. He combined elements from different locations and posed his wife Jo as the female figure. The painting is a highlight of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> American collection.</p>`,
    faqs: [
      { question: "Where is Cape Cod Evening displayed?", answer: "This <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> masterpiece is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, in the American art galleries." },
      { question: "Is Cape Cod Evening a real place?", answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> combined elements from various Cape Cod locations. He worked from sketches and memory in his Truro studio, not from a single scene." },
      { question: "Who modeled for Cape Cod Evening?", answer: "Hopper's wife Josephine (Jo) posed for the woman, as she did for most female figures in his paintings. <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> kept detailed records of his working process." }
    ]
  },
  {
    slug: "improvisation-31-kandinsky",
    title: "Improvisation 31 (Sea Battle)",
    artistSlug: "wassily-kandinsky",
    year: 1913,
    medium: "Oil on canvas",
    dimensions: "140.3 × 119.7 cm (55.2 × 47.1 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Vassily_Kandinsky%2C_1913_-_Composition_6.jpg",
    wikidataId: "Q20188567",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Improvisation_31_(Sea_Battle)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> painted this explosive canvas in 1913, during his crucial transition toward pure abstraction. The title hints at naval warfare, and traces of boats, oars, and cannons can be detected in the swirling forms. But Kandinsky was moving beyond representation.</p>
<p>Kandinsky believed colors and forms could express spiritual truths directly, without depicting objects. He called works like this "Improvisations" because they emerged spontaneously from inner necessity, like musical improvisation. The diagonal slash of black, the bursts of red and yellow, the cool blue passages all work as pure visual energy.</p>
<p>This painting represents a pivotal moment in art history: the emergence of abstract art as a conscious movement. It hangs in the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> East Building.</p>`,
    faqs: [
      { question: "Where can I see Improvisation 31?", answer: "This pioneering abstract work by <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> is displayed in the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> East Building in Washington, DC." },
      { question: "Is Improvisation 31 abstract?", answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> was moving toward full abstraction in 1913. Traces of boats and battle can be seen, but the emphasis is on color and form as expressive forces in themselves." },
      { question: "What did Kandinsky mean by 'Improvisation'?", answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> used musical terms for his paintings. 'Improvisations' emerged spontaneously from emotion, while 'Compositions' were more carefully planned works." }
    ]
  },
  {
    slug: "annunciation-van-eyck",
    title: "The Annunciation",
    artistSlug: "jan-van-eyck",
    year: 1436,
    medium: "Oil on canvas (transferred from panel)",
    dimensions: "90.2 × 34.1 cm (35.5 × 13.4 in) each panel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Eyck_-_The_Annunciation.jpg",
    wikidataId: "Q2367846",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Annunciation_(van_Eyck,_Washington)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted this Annunciation around 1434-1436, using the oil technique he helped perfect. The angel Gabriel announces to Mary that she will bear the Son of God. Her reply is written upside down so that God, looking down, can read it.</p>
<p>Every detail carries meaning. The white lilies signify Mary's purity. The floor tiles depict scenes from the Hebrew Bible that prefigure Christ's life and death. The dove of the Holy Spirit descends on golden rays. Van Eyck rendered these symbols with breathtaking precision.</p>
<p>The painting's narrow format suggests it may have been wings of a triptych, though no central panel survives. It is one of the treasures of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> and among the finest Northern Renaissance paintings in America.</p>`,
    faqs: [
      { question: "Where is Van Eyck's Annunciation?", answer: "This masterpiece of <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Why is Mary's text upside down?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> painted Mary's response upside down so God, viewing from heaven, could read it. This clever detail shows his attention to theological symbolism." },
      { question: "What do the floor tiles mean?", answer: "The tiles show Old Testament scenes that Christians understood as prophecies of Christ: David slaying Goliath, Samson destroying the temple, and others. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> filled his works with such learned references." }
    ]
  },
  {
    slug: "venus-with-mirror-titian",
    title: "Venus with a Mirror",
    artistSlug: "titian",
    year: 1555,
    medium: "Oil on canvas",
    dimensions: "124.5 × 105.5 cm (49 × 41.5 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/87/Titian_-_Venus_with_a_Mirror_-_Google_Art_Project.jpg",
    wikidataId: "Q2380052",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Venus_with_a_Mirror_(Titian)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this sensuous Venus around 1555, when he was in his sixties and at the height of his powers. The goddess of love gazes into a mirror held by two cupids while a third drapes her in a fur-lined red cloak. The image became one of his most copied compositions.</p>
<p>Titian's mastery of flesh tones and textures is on full display. The warm glow of Venus's skin, the cool gleam of pearls and gold, the softness of fur and velvet are rendered with a freedom of brushwork that anticipates painters centuries later.</p>
<p>The painting was once owned by the Russian Tsars and hung in the Hermitage before it was sold to Andrew Mellon in 1931. It is now among the most prized <a href="/apps/masterpieces/movement/high-renaissance"><strong>Renaissance</strong></a> paintings at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Titian's Venus with a Mirror?", answer: "This <a href=\"/apps/masterpieces/movement/high-renaissance\"><strong>Renaissance</strong></a> masterpiece is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, in the Italian galleries." },
      { question: "Was Venus with a Mirror a famous image?", answer: "Yes, <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian's</strong></a> workshop produced multiple versions, and the composition was widely copied. The theme of Venus admiring herself became a staple of European painting." },
      { question: "How did this painting come to America?", answer: "The painting was in the Russian Imperial collection until the Soviet government sold it to Andrew Mellon in 1931. Mellon's collection founded the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery</strong></a> in 1937." }
    ]
  },
  {
    slug: "girl-with-red-hat-vermeer",
    title: "Girl with the Red Hat",
    artistSlug: "johannes-vermeer",
    year: 1666,
    medium: "Oil on panel",
    dimensions: "23.2 × 18.1 cm (9.1 × 7.1 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Vermeer_-_Girl_with_a_Red_Hat.JPG",
    wikidataId: "Q2608889",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Girl_with_a_Red_Hat",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this intimate portrait around 1665-1666. A young woman looks over her shoulder at the viewer, her parted lips suggesting she's about to speak. Her dramatic red hat and blue robe create a striking contrast.</p>
<p>This is one of Vermeer's smallest paintings, roughly the size of a paperback book, yet its visual impact is enormous. Light glints off her pearl earring and the carved lion finials of her chair. The soft focus of the background suggests Vermeer may have used a camera obscura as a compositional aid.</p>
<p>The painting is one of only four Vermeers in the United States and a jewel of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> collection in Washington.</p>`,
    faqs: [
      { question: "Where is Girl with the Red Hat displayed?", answer: "This rare <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. Only about 35 Vermeer paintings survive worldwide." },
      { question: "How big is Girl with the Red Hat?", answer: "The painting is tiny: just 23 × 18 cm (9 × 7 inches). Despite its small size, <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> mastery of light and color gives it tremendous presence." },
      { question: "Is this related to Girl with a Pearl Earring?", answer: "Both paintings show similar techniques and both feature pearl earrings, but they are separate works. <em>Girl with a Pearl Earring</em> is at the Mauritshuis in The Hague; this <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> is in Washington." }
    ]
  },
  {
    slug: "self-portrait-rembrandt-1659",
    title: "Self-Portrait (1659)",
    artistSlug: "rembrandt-van-rijn",
    year: 1659,
    medium: "Oil on canvas",
    dimensions: "84.5 × 66 cm (33.3 × 26 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Rembrandt_Harmensz._van_Rijn_135.jpg",
    wikidataId: "Q17339671",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Self-Portrait_(Rembrandt,_Washington)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt</strong></a> painted this self-portrait in 1659, three years after declaring bankruptcy. At 53, his face shows the weight of financial ruin and personal loss. Yet there is no self-pity in his gaze, only a penetrating honesty.</p>
<p>Rembrandt painted himself throughout his life, creating an unparalleled visual autobiography. The early self-portraits show a confident young artist; the late ones, like this, reveal a man who has suffered but continues to look unflinchingly at the truth of his own aging.</p>
<p>The painting demonstrates Rembrandt's mature technique: thick impasto in the highlights, subtle glazes in the shadows, and an almost sculptural sense of form. It is one of approximately 80 self-portraits he created and a centerpiece of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Rembrandt's 1659 Self-Portrait?", answer: "This late self-portrait is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. The gallery holds several <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> paintings." },
      { question: "Why did Rembrandt paint so many self-portraits?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> created about 80 self-portraits over 40 years. They served as studies in expression, advertisements of his skill, and a unique record of one life examined with ruthless honesty." },
      { question: "What was happening in Rembrandt's life in 1659?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> had declared bankruptcy in 1656. His house and collections were sold. Despite financial ruin, he continued painting masterworks like this self-portrait." }
    ]
  }
];

// Artists that may need creation
const ARTISTS_TO_CREATE = {
  "jackson-pollock": {
    id: "jackson-pollock",
    slug: "jackson-pollock",
    name: "Jackson Pollock",
    birthYear: 1912,
    deathYear: 1956,
    nationality: "American",
    bioShort: "Pioneer of Abstract Expressionism, famous for his revolutionary drip painting technique.",
    wikidataId: "Q37571",
    faqs: []
  },
  "edward-hopper": {
    id: "edward-hopper",
    slug: "edward-hopper",
    name: "Edward Hopper",
    birthYear: 1882,
    deathYear: 1967,
    nationality: "American",
    bioShort: "American realist painter known for scenes of solitude and modern American life.",
    wikidataId: "Q203401",
    faqs: []
  },
  "wassily-kandinsky": {
    id: "wassily-kandinsky",
    slug: "wassily-kandinsky",
    name: "Wassily Kandinsky",
    birthYear: 1866,
    deathYear: 1944,
    nationality: "Russian",
    bioShort: "Pioneer of abstract art who believed color and form could express spiritual truths.",
    wikidataId: "Q61064",
    faqs: []
  },
  "rene-magritte": {
    id: "rene-magritte",
    slug: "rene-magritte",
    name: "René Magritte",
    birthYear: 1898,
    deathYear: 1967,
    nationality: "Belgian",
    bioShort: "Surrealist painter known for thought-provoking images that challenge perception.",
    wikidataId: "Q7836",
    faqs: []
  }
};

async function main() {
  console.log("=== Seeding NGA Tier 1 Paintings ===\n");

  const nga = await prisma.museum.findUnique({ where: { id: NGA_MUSEUM_ID } });
  if (!nga) {
    console.error("NGA museum not found!");
    return;
  }
  console.log("Museum:", nga.name, "\n");

  // Create missing artists
  for (const [slug, data] of Object.entries(ARTISTS_TO_CREATE)) {
    const existing = await prisma.artist.findUnique({ where: { slug } });
    if (!existing) {
      await prisma.artist.create({ data: { ...data, updatedAt: new Date() } });
      console.log("✅ Created artist:", data.name);
    }
  }

  let added = 0, skipped = 0;

  for (const painting of TIER1_PAINTINGS) {
    const existing = await prisma.artwork.findUnique({ where: { slug: painting.slug } });
    if (existing) {
      console.log("⏭️  Skip:", painting.title);
      skipped++;
      continue;
    }

    const artist = await prisma.artist.findUnique({ where: { slug: painting.artistSlug } });

    await prisma.artwork.create({
      data: {
        id: `nga-${painting.slug}`,
        slug: painting.slug,
        title: painting.title,
        year: painting.year,
        medium: painting.medium,
        dimensions: painting.dimensions,
        imageUrl: painting.imageUrl,
        wikidataId: painting.wikidataId,
        wikipediaUrl: painting.wikipediaUrl,
        searchVolumeTier: painting.searchVolumeTier,
        description: painting.description,
        faqs: painting.faqs,
        artistId: artist?.id || null,
        museumId: NGA_MUSEUM_ID,
        artworkType: "painting",
        updatedAt: new Date()
      }
    });

    console.log("✅ Added:", painting.title);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}, Skipped: ${skipped}`);

  await prisma.$disconnect();
}

main().catch(console.error);
