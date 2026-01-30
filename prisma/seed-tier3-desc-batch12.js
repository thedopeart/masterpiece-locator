const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'camille-pissarro-village-at-the-foot-of-a-hill-in-saint-thomas-anti': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>village below a hillside on Saint Thomas</strong> in the Caribbean. Pissarro was born on this island in 1830 and painted its tropical landscape before emigrating to France." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this early landscape. He's the only major <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> born outside Europe, and his <strong>Caribbean upbringing</strong> gave his color sense a distinctive warmth." },
    { question: "What style is this painting?", answer: "This early work predates Pissarro's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> period. His <strong>Saint Thomas paintings</strong> use brighter, more saturated color than his later French landscapes, reflecting the intensity of Caribbean light." }
  ],
  'camille-pissarro-the-telegraph-tower-at-montmartre': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>optical telegraph tower on Montmartre</strong>, which relayed messages across France before the electric telegraph replaced it. Pissarro painted this piece of vanishing technology in the Parisian landscape." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this scene. He painted Paris and its surroundings throughout his career, documenting <strong>how modernization changed the landscape</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Pissarro applied the movement's outdoor technique to <strong>urban and suburban subjects</strong>, recording the changing face of Paris and its environs." }
  ],
  'camille-pissarro-landscape-at-le-varenne-saint-hilaire': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>countryside at La Varenne-Saint-Hilaire</strong>, a village along the Marne River. Pissarro painted this area repeatedly, studying how seasons and weather transformed the same views." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this work. Known as the <strong>\"father of Impressionism,\"</strong> he was the only artist to exhibit in all eight <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> exhibitions." },
    { question: "What makes Pissarro's landscapes distinctive?", answer: "Pissarro combined <strong>Impressionist light with a structured approach to composition</strong>. His landscapes feel grounded and organized compared to Monet's more atmospheric approach, reflecting Pissarro's admiration for Corot and Courbet." }
  ],
  'camille-pissarro-laundress-on-the-banks-of-the-river': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>laundress working at the riverbank</strong>. Pissarro frequently painted women laboring outdoors, reflecting his anarchist sympathies and genuine respect for working people." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this figure-in-landscape. He uniquely merged <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> technique with <strong>social themes</strong>, painting peasants and laborers rather than the leisure scenes Renoir and Monet preferred." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> with a social dimension. Pissarro's <strong>working figures in landscape settings</strong> connect him to Millet's earlier peasant paintings while using the Impressionists' outdoor color and light." }
  ],
  'canaletto-the-piazzetta-towards-san-giorgio-maggiore': [
    { question: "Where is this painting?", answer: "This view belongs to the <a href=\"/apps/masterpieces/museum/royal-collection-uk\"><strong>Royal Collection</strong></a> in the United Kingdom. British collectors were Canaletto's most enthusiastic patrons, and the Royal Collection holds many of his finest views." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Venice's Piazzetta looking toward San Giorgio Maggiore</strong> across the lagoon. Canaletto captured the city's architecture with precise perspective and luminous detail." },
    { question: "Who painted this view of Venice?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> created this veduta (view painting). He was Venice's most famous painter of <strong>architectural views</strong>, producing detailed cityscapes for the Grand Tour trade during the <a href=\"/apps/masterpieces/movement/baroque\"><strong>18th century</strong></a>." }
  ],
  'canaletto-venice-the-grand-canal-looking-north-east-from-pal': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Grand Canal from Palazzo Balbi toward the Rialto Bridge</strong>. Canaletto painted this stretch of the canal many times, varying the light, weather, and gondola traffic." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> (1697-1768) created this Venetian veduta. British aristocrats on the Grand Tour commissioned these views as <strong>luxurious souvenirs of their Italian travels</strong>." },
    { question: "What technique did Canaletto use?", answer: "Canaletto used a <strong>camera obscura</strong> to achieve precise perspective in his views. He projected the scene onto paper, traced the outlines, then painted with meticulous detail and a bright, clear palette." }
  ],
  'canaletto-the-grand-canal-from-the-campo-san-vio-venice': [
    { question: "Where is this painting displayed?", answer: "This view is at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, which holds one of the finest private art collections ever assembled." },
    { question: "What does this painting show?", answer: "The scene captures the <strong>Grand Canal from the Campo San Vio</strong>. Canaletto's views of Venice document the city's 18th-century appearance with near-photographic precision and warm, golden light." },
    { question: "Who was Canaletto?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> was Venice's greatest view painter. His precise architectural views were so popular with <strong>British Grand Tourists</strong> that he spent nearly a decade working in England." }
  ],
  'canaletto-rio-dei-mendicanti': [
    { question: "Where is this painting displayed?", answer: "This work is at <a href=\"/apps/masterpieces/museum/ca39-rezzonico-museo-del-settecento-venice-italy\"><strong>Ca' Rezzonico</strong></a> in Venice, a palazzo museum dedicated to 18th-century Venetian art and life." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Rio dei Mendicanti</strong>, a canal in Venice's Castello district. Unlike his famous Grand Canal views, this captures a <strong>quieter, more intimate corner</strong> of the city." },
    { question: "Who painted this canal scene?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> created this veduta. While his Grand Canal views are most famous, he also painted <strong>smaller canals and lesser-known corners</strong> of Venice with equal precision." }
  ],
  'canaletto-the-grand-canal-seen-from-rialto-toward-the-north': [
    { question: "What does this painting depict?", answer: "The view looks <strong>north along the Grand Canal from the Rialto</strong>, one of Venice's most iconic vantage points. Canaletto painted this perspective multiple times for different patrons." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> created this Grand Canal veduta. His workshop produced many views of the same subjects, so scholars carefully distinguish <strong>autograph works from studio copies</strong>." },
    { question: "What is a veduta?", answer: "A <strong>veduta</strong> (Italian for \"view\") is a highly detailed, usually large-scale painting of a cityscape. Canaletto perfected the genre, making Venice's architecture the subject of some of the 18th century's most collected paintings." }
  ],
  'canaletto-san-giacomo-di-rialto': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany\"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden, Germany. The gallery holds a famous group of Canaletto views." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>San Giacomo di Rialto</strong>, reputedly the oldest church in Venice, with its distinctive clock face and portico. Canaletto captures the bustling market square around it." },
    { question: "Who painted this Venetian scene?", answer: "<a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> created this view. The Dresden gallery's collection of his work, assembled by Augustus III of Saxony, is one of the finest groups of <strong>Venetian vedute</strong> outside Britain." }
  ],
  'carl-larsson-the-old-man-and-the-new-trees': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm. Larsson is one of Sweden's most beloved artists." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/carl-larsson\"><strong>Carl Larsson</strong></a> created this painting. He's famous for his <strong>watercolors of Swedish domestic life</strong>, depicting his family and home in Sundborn with warmth, color, and decorative charm." },
    { question: "What style did Larsson work in?", answer: "Larsson developed a distinctive <strong>light, decorative style</strong> influenced by Japanese prints and Arts and Crafts design. His idyllic home scenes shaped the Swedish ideal of cozy, beautiful domestic living." }
  ],
  'carl-spitzweg-praying-peasant-girl-in-the-woods': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young peasant girl praying in a forest clearing</strong>. Spitzweg combined gentle humor with genuine affection for ordinary people, making him one of Germany's most popular 19th-century painters." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Carl Spitzweg</strong></a> created this scene. He was a self-taught Munich painter known for <strong>warmly humorous genre scenes</strong> of bookworms, hermits, and small-town characters." },
    { question: "What style is this painting?", answer: "Spitzweg worked in the <strong>Biedermeier tradition</strong>, a German and Austrian style focused on domestic life, modest pleasures, and gentle humor. His paintings are quieter and more personal than the grand historical canvases of his era." }
  ],
  'carl-spitzweg-sunday-stroll': [
    { question: "Where is Sunday Stroll displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/residenzgalerie-salzburg-austria\"><strong>Residenzgalerie</strong></a> in Salzburg, Austria." },
    { question: "What does Sunday Stroll depict?", answer: "The scene shows <strong>townspeople on a Sunday walk</strong>, a gentle observation of bourgeois routine. Spitzweg captured these small moments of daily life with affectionate humor and warm color." },
    { question: "Who was Carl Spitzweg?", answer: "<a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Carl Spitzweg</strong></a> (1808-1885) was a Munich painter beloved for his <strong>witty, warmhearted genre scenes</strong>. His most famous work, The Bookworm, is an icon of German Biedermeier art." }
  ],
  'carlos-schwabe-sadness': [
    { question: "Where is Sadness displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-d39art-et-d39histoire-geneva-switzerland\"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva, Switzerland." },
    { question: "Who painted Sadness?", answer: "<a href=\"/apps/masterpieces/artist/carlos-schwabe\"><strong>Carlos Schwabe</strong></a> created this work. He was a German-Swiss <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter and illustrator known for <strong>dreamlike, allegorical compositions</strong> that personify emotions and spiritual states." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, a late 19th-century movement that rejected Realism in favor of <strong>inner emotional and spiritual experience</strong>. Schwabe's work shares the mystical quality of Gustave Moreau and Odilon Redon." }
  ],
  'carolus-duran-sleeping-man': [
    { question: "Where is Sleeping Man displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in France, one of the largest art museums outside Paris." },
    { question: "Who painted Sleeping Man?", answer: "<a href=\"/apps/masterpieces/artist/carolus-duran\"><strong>Carolus-Duran</strong></a> created this work. He was a prominent French portrait painter and teacher whose students included <strong>John Singer Sargent</strong>, who became the greatest society portraitist of his era." },
    { question: "What style did Carolus-Duran work in?", answer: "He painted in a <strong>bold, direct manner</strong> influenced by Velázquez and Manet. His technique of building forms with broad strokes of color rather than careful drawing revolutionized portrait painting and shaped Sargent's approach." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
