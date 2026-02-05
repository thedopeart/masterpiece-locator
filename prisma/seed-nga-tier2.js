/**
 * Seed NGA Tier 2 Famous Paintings
 * Medium-high SEO value masterpieces at the National Gallery of Art
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const NGA_MUSEUM_ID = "cmkjdx4px00095nnrfyajckdx";

const TIER2_PAINTINGS = [
  {
    slug: "young-girl-reading-fragonard",
    title: "A Young Girl Reading",
    artistSlug: "jean-honore-fragonard",
    year: 1770,
    medium: "Oil on canvas",
    dimensions: "81.1 × 64.8 cm (31.9 × 25.5 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Fragonard%2C_The_Reader.jpg",
    wikidataId: "Q2415779",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Young_Girl_Reading",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> painted this intimate portrait around 1770, capturing a young woman absorbed in her book. She wears a lemon-yellow dress with purple ribbons, her profile illuminated by soft light. The identity of the sitter is unknown.</p>
<p>Fragonard was the master of <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> painting, and this work shows his virtuoso brushwork at its best. The buttery strokes of yellow paint, the feathery treatment of the collar, and the soft modeling of the face reveal an artist painting with complete freedom and confidence.</p>
<p>The painting is one of the most beloved works at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> and exemplifies the refined sensibility of 18th-century French painting.</p>`,
    faqs: [
      { question: "Where is A Young Girl Reading displayed?", answer: "This <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> masterpiece by <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Who was the girl in the painting?", answer: "The model's identity is unknown. <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> often painted figures as types rather than specific portraits, focusing on mood and atmosphere." },
      { question: "What style is A Young Girl Reading?", answer: "The painting exemplifies the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> style: intimate scale, pastel colors, loose brushwork, and a focus on pleasure and refinement." }
    ]
  },
  {
    slug: "napoleon-in-his-study-david",
    title: "The Emperor Napoleon in His Study at the Tuileries",
    artistSlug: "jacques-louis-david",
    year: 1812,
    medium: "Oil on canvas",
    dimensions: "203.9 × 125.1 cm (80.3 × 49.3 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    wikidataId: "Q2628596",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Emperor_Napoleon_in_His_Study_at_the_Tuileries",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this portrait in 1812, at the height of Napoleon's power. The Emperor stands in his study at 4:13 AM (the clock shows the time), having worked through the night on the Code Napoléon, his legal reforms visible on the desk.</p>
<p>Every detail is symbolic. The candles have burned low, showing his tireless dedication. His hand rests in his waistcoat in his characteristic pose. The sword and military hat remind us of his conquests, but the emphasis is on Napoleon as lawgiver and administrator.</p>
<p>David, once a revolutionary painter, became Napoleon's court artist. This is one of the most famous imperial portraits and now hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Napoleon in His Study?", answer: "This famous portrait by <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Why is the clock set to 4:13 AM?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> showed Napoleon working through the night on his legal code, demonstrating his tireless dedication to governance, not just military conquest." },
      { question: "Why does Napoleon have his hand in his coat?", answer: "This pose was common in portraiture of the era, signifying calm authority. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> depicted Napoleon this way in several portraits." }
    ]
  },
  {
    slug: "old-musician-manet",
    title: "The Old Musician",
    artistSlug: "edouard-manet",
    year: 1862,
    medium: "Oil on canvas",
    dimensions: "187.4 × 248.3 cm (73.8 × 97.8 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/%C3%89douard_Manet_-_Le_Vieux_Musicien.jpg",
    wikidataId: "Q2593816",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Old_Musician",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this monumental canvas in 1862, one of his largest works. An old street musician sits surrounded by outcasts: a ragpicker, a gypsy girl, street children, and a wandering Jew. They gather in a barren landscape on the outskirts of Paris.</p>
<p>Manet drew on Old Master compositions, particularly Velázquez's groupings of marginal figures. But his subject matter was modern: the displaced people pushed to society's edges by Baron Haussmann's reconstruction of Paris.</p>
<p>This early masterpiece shows Manet developing the style that would make him the father of modern painting. It hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is The Old Musician displayed?", answer: "This early <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> masterpiece is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Who are the people in The Old Musician?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> painted outcasts from 1860s Paris: street performers, ragpickers, and displaced people affected by the city's modernization under Haussmann." },
      { question: "Why is The Old Musician significant?", answer: "It's one of <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet's</strong></a> largest and most ambitious early works, showing his blend of Old Master tradition with modern subjects—a formula that influenced <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." }
    ]
  },
  {
    slug: "the-railway-manet",
    title: "The Railway",
    artistSlug: "edouard-manet",
    year: 1873,
    medium: "Oil on canvas",
    dimensions: "93.3 × 111.5 cm (36.7 × 43.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Edouard_Manet_-_The_Railway_-_Google_Art_Project.jpg",
    wikidataId: "Q2447387",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Railway_(Manet)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this scene in 1873, using the garden of his friend Alphonse Hirsch, which overlooked the Gare Saint-Lazare railway cutting. A woman looks up from her book while a little girl watches the steam rising from the trains below.</p>
<p>The painting captures modern urban life: the iron railings, the billowing steam of industry, the new leisure class. The woman is Victorine Meurent, Manet's favorite model, who also posed for Olympia. The child is the daughter of a friend.</p>
<p>Critics at the 1874 Salon were puzzled—where was the railway? Only steam is visible. But this indirection was precisely Manet's modern point. The painting is now at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is Manet's The Railway?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's one of <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet's</strong></a> key works from the 1870s." },
      { question: "Why can't we see the train?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> showed only steam rising from the railway cutting. This modern approach—suggesting rather than depicting—confused 1874 Salon visitors but anticipated <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> concerns." },
      { question: "Who is the woman in The Railway?", answer: "Victorine Meurent, <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet's</strong></a> favorite model. She also posed for Olympia and Le Déjeuner sur l'herbe. The girl is the daughter of artist Alphonse Hirsch." }
    ]
  },
  {
    slug: "giuliano-de-medici-botticelli",
    title: "Giuliano de' Medici",
    artistSlug: "sandro-botticelli",
    year: 1478,
    medium: "Tempera on panel",
    dimensions: "75.6 × 52.6 cm (29.8 × 20.7 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sandro_Botticelli_066.jpg",
    wikidataId: "Q3769856",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Portrait_of_Giuliano_de%27_Medici_(Botticelli)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this posthumous portrait of Giuliano de' Medici after the young prince was murdered in the Pazzi Conspiracy of 1478. Giuliano and his brother Lorenzo were attacked during Mass in Florence Cathedral; Giuliano died, but Lorenzo escaped.</p>
<p>Botticelli shows Giuliano with half-closed eyes and a melancholic expression, perhaps suggesting his death. The partially open door behind him may symbolize his passage from life. The portrait commemorates a fallen Medici prince and Botticelli's own patron.</p>
<p>Several versions of this portrait exist, painted by Botticelli and his workshop. This one, at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, is considered among the finest.</p>`,
    faqs: [
      { question: "Where is Botticelli's Giuliano de' Medici?", answer: "This <a href=\"/apps/masterpieces/movement/early-renaissance\"><strong>Renaissance</strong></a> portrait is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Who was Giuliano de' Medici?", answer: "Giuliano was the younger brother of Lorenzo the Magnificent. He was murdered in 1478 during the Pazzi Conspiracy, an assassination attempt in Florence Cathedral." },
      { question: "Why does Giuliano look sad?", answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> painted this after Giuliano's death. The half-closed eyes and sorrowful expression may memorialize the murdered prince, with the open door symbolizing his departure from life." }
    ]
  },
  {
    slug: "adoration-magi-lippi-angelico",
    title: "The Adoration of the Magi",
    artistSlug: "fra-angelico",
    year: 1445,
    medium: "Tempera on panel",
    dimensions: "137.2 cm (54 in) diameter (tondo)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Fra_Angelico_-_Adoration_of_the_Magi_-_WGA00640.jpg",
    wikidataId: "Q3604867",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Adoration_of_the_Magi_(Fra_Angelico_and_Filippo_Lippi)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> and <strong>Fra Filippo Lippi</strong> collaborated on this spectacular tondo around 1440-1460. The circular format, over four feet in diameter, is filled with a swirling procession of the Magi coming to honor the infant Christ.</p>
<p>The painting brims with detail: exotic costumes, prancing horses, hunting dogs, a peacock, and scores of attendants winding through a fantastical landscape. The Medici family, likely patrons, may be portrayed among the crowd.</p>
<p>Two of the greatest <a href="/apps/masterpieces/movement/early-renaissance"><strong>Early Renaissance</strong></a> painters worked on this panel. It is one of the most elaborate Epiphany scenes ever created and a treasure of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is this Adoration of the Magi?", answer: "This collaborative masterpiece by <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> and <strong>Fra Filippo Lippi</strong> is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Why did two artists paint this?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> and <strong>Lippi</strong> were both Dominican friars and leading painters. Collaboration was common in Renaissance workshops, especially for large commissions." },
      { question: "What is a tondo?", answer: "A tondo is a circular painting. The format was popular for domestic devotional works in Renaissance Florence. This one is over four feet across." }
    ]
  },
  {
    slug: "jack-in-the-pulpit-iv-okeeffe",
    title: "Jack-in-the-Pulpit No. IV",
    artistSlug: "georgia-okeeffe",
    year: 1930,
    medium: "Oil on canvas",
    dimensions: "101.6 × 76.2 cm (40 × 30 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/98/Jack-in-the-Pulpit_No._IV_%28O%27Keeffe%29.jpg",
    wikidataId: "Q20201088",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jack-in-the-Pulpit_(O%27Keeffe)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/georgia-okeeffe"><strong>Georgia O'Keeffe</strong></a> created this painting in 1930 as part of a series of six depicting the jack-in-the-pulpit flower. Each painting in the series progressively zooms closer, transforming the blossom into an abstract composition.</p>
<p>In this fourth painting, the dark spadix (the "jack") rises dramatically from the enfolding spathe (the "pulpit"). O'Keeffe magnifies the flower to monumental scale, revealing forms that become almost abstract while remaining rooted in observation.</p>
<p>O'Keeffe's flower paintings made her famous and remain her most recognizable works. This painting is at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> East Building.</p>`,
    faqs: [
      { question: "Where can I see Jack-in-the-Pulpit No. IV?", answer: "This <a href=\"/apps/masterpieces/artist/georgia-okeeffe\"><strong>O'Keeffe</strong></a> flower painting is in the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> East Building in Washington, DC." },
      { question: "Why did O'Keeffe paint flowers so large?", answer: "<a href=\"/apps/masterpieces/artist/georgia-okeeffe\"><strong>O'Keeffe</strong></a> wanted viewers to really see flowers. By magnifying them, she revealed forms and colors that typically go unnoticed, creating images that hover between representation and abstraction." },
      { question: "Is this part of a series?", answer: "Yes, <a href=\"/apps/masterpieces/artist/georgia-okeeffe\"><strong>O'Keeffe</strong></a> painted six jack-in-the-pulpit images in 1930, each progressively more abstracted and close-up. No. IV shows the dramatic dark spadix rising from the pale spathe." }
    ]
  },
  {
    slug: "mrs-sheridan-gainsborough",
    title: "Mrs. Richard Brinsley Sheridan",
    artistSlug: "thomas-gainsborough",
    year: 1787,
    medium: "Oil on canvas",
    dimensions: "220 × 154 cm (86.6 × 60.6 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Thomas_Gainsborough_-_Mrs._Richard_Brinsley_Sheridan.jpg",
    wikidataId: "Q8076111",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mrs._Richard_Brinsley_Sheridan_(Gainsborough)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this portrait of Elizabeth Linley Sheridan in 1787. She was a celebrated singer who had eloped with the playwright Richard Brinsley Sheridan years earlier, and remained one of the great beauties of Georgian England.</p>
<p>Gainsborough shows her outdoors, her hair and dress blowing in the wind, posed against a stormy sky. The loose brushwork in the foliage and sky contrasts with the careful rendering of her face and the shimmering fabric of her dress.</p>
<p>This is one of Gainsborough's most romantic portraits and among the finest 18th-century British paintings at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is Mrs. Sheridan by Gainsborough?", answer: "This portrait is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, in the British galleries." },
      { question: "Who was Mrs. Sheridan?", answer: "Elizabeth Linley Sheridan was a famous singer who eloped with playwright Richard Brinsley Sheridan. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> painted her several times." },
      { question: "What style is this portrait?", answer: "<a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough's</strong></a> fluid brushwork and outdoor setting show the influence of Rococo sensibility, while the scale and ambition reflect the Grand Manner of British portraiture." }
    ]
  },
  {
    slug: "self-portrait-van-gogh-nga",
    title: "Self-Portrait",
    artistSlug: "vincent-van-gogh",
    year: 1889,
    medium: "Oil on canvas",
    dimensions: "57.79 × 44.5 cm (22.7 × 17.5 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Self-Portrait_-_Google_Art_Project_%28719161%29.jpg",
    wikidataId: "Q18689458",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Self-Portrait_(Van_Gogh,_Washington)",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted this self-portrait in 1889 at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, where he had committed himself after his breakdown. The swirling blue-green background anticipates The Starry Night, painted the same year.</p>
<p>Van Gogh's gaze is intense and searching. The short, rhythmic brushstrokes create an almost sculptural surface, the paint thick and gestural. His palette has shifted to the cool blues and greens he associated with healing and calm.</p>
<p>This is one of over 30 self-portraits van Gogh created in his brief career. It is a highlight of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> and one of the most powerful <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> works in America.</p>`,
    faqs: [
      { question: "Where is Van Gogh's NGA Self-Portrait?", answer: "This 1889 self-portrait is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's one of the most important <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> paintings in America." },
      { question: "When did Van Gogh paint this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted this in 1889 while at the Saint-Rémy asylum, the same period he created The Starry Night. The swirling background shows similar energy." },
      { question: "How many self-portraits did Van Gogh paint?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> created over 30 self-portraits in his 10-year career. They document his artistic evolution and psychological state from Paris through his final years in France." }
    ]
  },
  {
    slug: "rouen-cathedral-west-facade-monet",
    title: "Rouen Cathedral: West Façade, Sunlight",
    artistSlug: "claude-monet",
    year: 1894,
    medium: "Oil on canvas",
    dimensions: "100.1 × 65.8 cm (39.4 × 25.9 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Claude_Monet_-_Rouen_Cathedral%2C_West_Fa%C3%A7ade%2C_Sunlight_-_Google_Art_Project.jpg",
    wikidataId: "Q20167524",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Rouen_Cathedral_(Monet_series)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted over 30 views of Rouen Cathedral between 1892 and 1894, studying how light transformed the Gothic façade at different times of day and in different weather. This version shows the west front bathed in afternoon sunlight.</p>
<p>The stone dissolves into a shimmering tapestry of color: gold, rose, and lavender where sunlight strikes; blue and violet in the shadows. Monet worked from a room across the square, returning day after day to capture these fleeting effects.</p>
<p>The Rouen Cathedral series represents the peak of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism's</strong></a> investigation of light. The <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> owns this luminous example.</p>`,
    faqs: [
      { question: "Where can I see Monet's Rouen Cathedral?", answer: "The <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> has one of <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet's</strong></a> approximately 30 Rouen Cathedral paintings. Others are at Musée d'Orsay, Metropolitan Museum, and elsewhere." },
      { question: "Why did Monet paint the cathedral so many times?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> wanted to capture how light transforms a subject. The cathedral became a screen for displaying morning mist, noon glare, and evening glow." },
      { question: "How long did Monet work on the series?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> worked on the Rouen Cathedral series from 1892 to 1894, painting from a rented room across the square and finishing canvases in his Giverny studio." }
    ]
  }
];

// Artists that may need creation
const ARTISTS_TO_CREATE = {
  "jean-honore-fragonard": {
    id: "jean-honore-fragonard",
    slug: "jean-honore-fragonard",
    name: "Jean-Honoré Fragonard",
    birthYear: 1732,
    deathYear: 1806,
    nationality: "French",
    bioShort: "Master of French Rococo painting known for exuberant brushwork and sensual subjects.",
    wikidataId: "Q127171",
    faqs: []
  },
  "jacques-louis-david": {
    id: "jacques-louis-david",
    slug: "jacques-louis-david",
    name: "Jacques-Louis David",
    birthYear: 1748,
    deathYear: 1825,
    nationality: "French",
    bioShort: "Leading Neoclassical painter who became official artist of the French Revolution and Napoleon.",
    wikidataId: "Q83155",
    faqs: []
  },
  "georgia-okeeffe": {
    id: "georgia-okeeffe",
    slug: "georgia-okeeffe",
    name: "Georgia O'Keeffe",
    birthYear: 1887,
    deathYear: 1986,
    nationality: "American",
    bioShort: "Pioneer of American modernism known for magnified flowers and New Mexico landscapes.",
    wikidataId: "Q46408",
    faqs: []
  },
  "thomas-gainsborough": {
    id: "thomas-gainsborough",
    slug: "thomas-gainsborough",
    name: "Thomas Gainsborough",
    birthYear: 1727,
    deathYear: 1788,
    nationality: "British",
    bioShort: "Leading 18th-century British portrait and landscape painter with fluid brushwork.",
    wikidataId: "Q192517",
    faqs: []
  },
  "fra-angelico": {
    id: "fra-angelico",
    slug: "fra-angelico",
    name: "Fra Angelico",
    birthYear: 1395,
    deathYear: 1455,
    nationality: "Italian",
    bioShort: "Early Renaissance painter and Dominican friar known for devotional works of radiant beauty.",
    wikidataId: "Q5664",
    faqs: []
  }
};

async function main() {
  console.log("=== Seeding NGA Tier 2 Paintings ===\n");

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

  for (const painting of TIER2_PAINTINGS) {
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
