const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'alonso-cano-the-crucifixion': [
    { question: "Where is this Crucifixion displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The Hermitage holds a notable selection of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> paintings." },
    { question: "Who painted this Crucifixion?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> created this work. He trained alongside <strong>Velázquez</strong> in Seville and became one of Spain's most versatile Baroque artists, working as painter, sculptor, and architect." },
    { question: "What style is this painting?", answer: "It's a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious work. Cano's Crucifixion scenes tend toward <strong>restrained emotion and classical beauty</strong>, distinguishing him from the more dramatic approach of contemporaries like Zurbarán." }
  ],
  'alonso-cano-st-james-the-greater': [
    { question: "Where is St. James the Greater displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's part of the museum's Spanish painting collection." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>St. James the Greater</strong>, patron saint of Spain. He's traditionally depicted as a pilgrim with staff and shell, or as an apostle. James is central to Spanish Catholic identity." },
    { question: "Who was Alonso Cano?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> (1601-1667) was a Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter from Granada. Called the \"Spanish Michelangelo,\" he excelled in <strong>painting, sculpture, and architecture</strong>." }
  ],
  'vision-saint-john-cano': [
    { question: "Where is The Vision of Saint John displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London. The museum is known for its Old Master paintings and decorative arts, all free to visit." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Saint John the Evangelist receiving a divine vision</strong>. Cano painted this around 1636, combining Spanish religious intensity with a softer, more classical approach to the human figure." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> created this in 1636. He studied under Francisco Pacheco in Seville alongside <strong>Velázquez</strong>, then worked in Madrid and Granada as painter, sculptor, and cathedral architect." }
  ],
  'alphonse-mucha-lorenzaccio': [
    { question: "What is Lorenzaccio?", answer: "This is a <strong>theatrical poster</strong> designed for a production of Alfred de Musset's play <em>Lorenzaccio</em>, starring Sarah Bernhardt. Mucha's poster designs for Bernhardt made him famous overnight in 1890s Paris." },
    { question: "Who designed this poster?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this design. He was a Czech artist who became the defining figure of <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>, known for ornate posters featuring <strong>flowing hair, floral motifs, and elegant typography</strong>." },
    { question: "What style is this work?", answer: "It's a prime example of <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> graphic design. Mucha's posters feature <strong>sinuous lines, decorative borders, and idealized female figures</strong> that defined the look of Belle Époque Paris." }
  ],
  'alphonse-mucha-summer': [
    { question: "What does Summer depict?", answer: "This work shows a <strong>female figure representing the season of summer</strong>. It's part of Mucha's seasonal series, where each season is personified by a woman surrounded by appropriate flowers, colors, and mood." },
    { question: "Who created Summer?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> designed this piece. His <strong>decorative panels of the four seasons</strong> were among his most popular works, reproduced as prints and screens across Europe." },
    { question: "What style is this work?", answer: "It's classic <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>. Mucha's seasonal panels use <strong>soft colors, flowing lines, and botanical details</strong> to create a sense of natural harmony and feminine beauty." }
  ],
  'alphonse-mucha-salammb244': [
    { question: "What is Salammbô?", answer: "This work illustrates Gustave Flaubert's novel <strong><em>Salammbô</em></strong>, set in ancient Carthage. Mucha depicted the priestess Salammbô with his signature ornamental style, blending <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> elegance with exotic imagery." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this piece. Beyond commercial posters, he tackled literary and historical subjects, always applying his <strong>distinctive decorative approach</strong>." },
    { question: "What style did Mucha work in?", answer: "Mucha is the defining artist of <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a>. His style combines <strong>Byzantine mosaics, Czech folk art, and Japanese prints</strong> into richly ornamental compositions that remain instantly recognizable." }
  ],
  'alphonse-mucha-spirit-of-spring': [
    { question: "What does Spirit of Spring depict?", answer: "The work shows a <strong>young woman embodying spring</strong>, surrounded by blossoms and flowing fabric. Mucha personified seasons and natural forces as beautiful women in elaborate decorative settings." },
    { question: "Who created Spirit of Spring?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> designed this piece. His seasonal and <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral compositions</strong></a> remain some of the most reproduced images in decorative art history." },
    { question: "What is Art Nouveau?", answer: "<a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> was a decorative style popular from the 1890s to about 1910. It emphasized <strong>organic curves, natural forms, and ornamental beauty</strong>. Mucha's posters became its most iconic expression." }
  ],
  'alphonse-mucha-luchon': [
    { question: "What is Luchon?", answer: "This is an <strong>advertising poster for Luchon</strong>, a spa town in the French Pyrenees. Mucha designed commercial posters for everything from theaters to travel destinations, always in his signature decorative style." },
    { question: "Who designed this poster?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this advertisement. His commercial work elevated <strong>poster design to fine art</strong>, and collectors tore his posters off Parisian walls the day they went up." },
    { question: "What style is this poster?", answer: "It's <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> graphic design. Mucha's travel posters combine <strong>elegant female figures with ornamental borders</strong>, making even advertisements into collectible works of art." }
  ],
  'alphonse-mucha-spring': [
    { question: "What does Spring depict?", answer: "The work shows a <strong>woman personifying spring</strong> amid flowers and soft colors. Mucha created multiple versions of seasonal themes throughout his career, each treating the subject with fresh decorative variations." },
    { question: "Who created Spring?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> designed this piece. Born in Moravia (now Czech Republic), he became Paris's most sought-after <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> designer after his 1894 poster for Sarah Bernhardt." },
    { question: "Where can I see Mucha's work?", answer: "The <a href=\"/apps/masterpieces/museum/mucha-museum-prague-czech-republic\"><strong>Mucha Museum</strong></a> in Prague holds the largest permanent collection. His works are also in major museums worldwide, and his <strong>Slav Epic</strong> cycle is displayed in Prague's National Gallery." }
  ],
  'alphonse-mucha-poster-for-victorien-sardous-gismonda-starring-sar': [
    { question: "What is this Gismonda poster?", answer: "This is the <strong>1894 poster that made Mucha famous</strong>. Sarah Bernhardt needed an emergency poster for her play <em>Gismonda</em>. Mucha's design was so striking that Bernhardt signed him to a six-year contract on the spot." },
    { question: "Who designed this poster?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this breakthrough work. It launched his career and helped define the <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> movement. Parisians reportedly <strong>cut the posters down from billboards</strong> to keep them." },
    { question: "Why is this poster important?", answer: "The Gismonda poster is considered a <strong>turning point in graphic design history</strong>. Its tall, narrow format, muted palette, and ornamental framing broke from typical bold lithographic posters, creating what became known as the \"Mucha style.\"" }
  ],
  'alphonse-mucha-prophetess': [
    { question: "Where is Prophetess displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mucha-museum-prague-czech-republic\"><strong>Mucha Museum</strong></a> in Prague, the world's only museum dedicated to Alphonse Mucha's life and work." },
    { question: "What does Prophetess depict?", answer: "The work shows a <strong>female prophetic figure</strong> in Mucha's characteristic decorative style. Later in his career, he turned toward more spiritual and nationalist subjects, including his monumental <strong>Slav Epic</strong> cycle." },
    { question: "Who painted Prophetess?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> created this work. While famous for <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> posters, he increasingly focused on <strong>Slavic identity and spiritual themes</strong> in his later paintings." }
  ],
  'amedeo-modigliani-the-tuscan-road': [
    { question: "Where is The Tuscan Road displayed?", answer: "This early work is at the <a href=\"/apps/masterpieces/museum/museo-civico-giovanni-fattori-livorno-italy\"><strong>Museo Civico Giovanni Fattori</strong></a> in Livorno, Italy, Modigliani's birthplace." },
    { question: "What does The Tuscan Road depict?", answer: "The painting shows a <strong>road through the Tuscan countryside</strong>. It's an early landscape from before Modigliani developed his famous elongated portrait style in Paris." },
    { question: "Who painted The Tuscan Road?", answer: "<a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Amedeo Modigliani</strong></a> painted this in his youth. He left Livorno for Paris in 1906, where he developed the <strong>elongated faces and almond eyes</strong> that define his mature work." }
  ],
  'amedeo-modigliani-seated-nude': [
    { question: "What does Seated Nude depict?", answer: "The painting shows a <strong>nude woman in a seated pose</strong>. Modigliani's nudes caused a scandal when first exhibited in 1917. The police shut down his only solo show for indecency on opening night." },
    { question: "Who painted Seated Nude?", answer: "<a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Amedeo Modigliani</strong></a> created this work. His nudes are now among the <strong>most expensive paintings ever sold</strong>, with one fetching $170 million at auction in 2015." },
    { question: "What style did Modigliani work in?", answer: "Modigliani developed a unique style blending <strong>Italian Renaissance grace with African sculpture and Parisian modernism</strong>. His elongated forms and warm palette set his <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figure paintings</strong></a> apart from any single movement." }
  ],
  'amedeo-modigliani-woman39s-head-with-beauty-spot': [
    { question: "What does this painting depict?", answer: "The work shows a <strong>woman's face with a beauty spot</strong>, rendered in Modigliani's signature style: elongated neck, almond-shaped eyes, and a serene, mask-like expression." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Amedeo Modigliani</strong></a> created this work. He painted over 300 portraits during his short life, each featuring his <strong>distinctive elongated forms</strong> influenced by African and Oceanic sculpture." },
    { question: "Why are Modigliani's portraits distinctive?", answer: "His subjects have <strong>long necks, tilted heads, and blank or asymmetric eyes</strong>. This wasn't abstraction for its own sake. Modigliani drew on Italian Mannerism, Brancusi's sculpture, and African masks to create a deeply personal portrait style." }
  ],
  'amedeo-modigliani-woman39s-head-in-profile': [
    { question: "What does this work depict?", answer: "The piece shows a <strong>woman's head in profile</strong>, with Modigliani's characteristic simplified features. His profile views emphasize the elegant line of neck and jaw that became his visual signature." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Amedeo Modigliani</strong></a> (1884-1920) created this piece. He died of tubercular meningitis at 35 in Paris. His lover Jeanne Hébuterne died the following day." },
    { question: "What influenced Modigliani's style?", answer: "His elongated forms draw on <strong>African sculpture, Italian Mannerism, and Brancusi's carvings</strong>. Modigliani originally wanted to be a sculptor but turned to painting due to health problems caused by stone dust." }
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
