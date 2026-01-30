const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'ernest-meissonier-the-portrait-of-a-sergeant': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hamburger-kunsthalle\"><strong>Hamburger Kunsthalle</strong></a> in Hamburg, Germany." },
    { question: "What does this painting depict?", answer: "It shows a <strong>military sergeant</strong> in period costume. Meissonier was famous for painting Napoleonic soldiers with <strong>obsessive accuracy</strong>, even collecting authentic uniforms and weapons as studio props." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> created this work. His tiny, jewel-like military paintings made him the <strong>highest-paid artist in 19th-century France</strong>." }
  ],
  'ernst-ludwig-kirchner-seated-lady-dodo': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich." },
    { question: "What does this painting depict?", answer: "It shows <strong>Dodo (Doris Grosse)</strong>, Kirchner's companion and model during the Die Brücke years. He painted her with <strong>angular forms and bold color</strong> typical of German Expressionism." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Ernst Ludwig Kirchner</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> portrait. He co-founded <strong>Die Brücke</strong> in 1905, Germany's first Expressionist group." }
  ],
  'ernst-ludwig-kirchner-street-dresden': [
    { question: "Where is Street, Dresden?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>pedestrians on a Dresden street</strong>, rendered with jagged lines and clashing colors. Kirchner captured modern city life as something <strong>anxious and electrifying</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Ernst Ludwig Kirchner</strong></a> created this key <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> work. His street scenes influenced how 20th-century artists depicted <strong>urban alienation</strong>." }
  ],
  'ernst-ludwig-kirchner-the-caf233': [
    { question: "Where is The Café?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/br252cke-museum-berlin-germany\"><strong>Brücke Museum</strong></a> in Berlin, dedicated to the Die Brücke artists." },
    { question: "What does this painting depict?", answer: "The scene shows figures in a <strong>café interior</strong>. Kirchner painted modern social spaces with <strong>sharp angles and nervous energy</strong>, turning everyday gatherings into psychological dramas." },
    { question: "Who painted The Café?", answer: "<a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Ernst Ludwig Kirchner</strong></a> created this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> scene. His work was branded <strong>\"degenerate art\"</strong> by the Nazis in 1937, contributing to his suicide the following year." }
  ],
  'eugene-delacroix-study-of-a-reclining-nude': [
    { question: "What does this work depict?", answer: "It shows a <strong>reclining female nude</strong>, a study demonstrating Delacroix's mastery of the human form. His figure studies use <strong>warm, sensuous color</strong> rather than the cool precision of academic drawing." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> made this work. He was the leader of French <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, championing <strong>color and emotion</strong> over the Neoclassical emphasis on line." },
    { question: "What style is this work?", answer: "It's <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>. Delacroix's nudes glow with <strong>Rubens-inspired warmth</strong>. He kept a detailed journal recording his color theories, which later influenced the Impressionists." }
  ],
  'eugene-delacroix-massacre-of-chios-study': [
    { question: "Where is this study?", answer: "This study is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, alongside the finished monumental painting." },
    { question: "What does this study depict?", answer: "It's a preparatory work for the <strong>Massacre at Chios</strong>, showing Greek civilians slaughtered by Ottoman forces in 1822. The finished painting caused a scandal at the 1824 Salon for its <strong>brutal honesty</strong>." },
    { question: "Who made this study?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> work. The finished painting established him as the <strong>radical alternative to Ingres</strong> in French art." }
  ],
  'eugene-delacroix-seated-nude-mademoiselle-rose': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "It shows a <strong>seated nude model known as Mademoiselle Rose</strong>. Painted around 1820, it reveals Delacroix's early skill at combining <strong>academic figure painting with rich, warm color</strong>." },
    { question: "Who painted this nude?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this early work. Even in student exercises, his <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> temperament shows through the <strong>sensuous handling of flesh tones</strong>." }
  ],
  'eugene-delacroix-selfportrait-as-hamlet': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-national-eug232ne-delacroix-paris-france\"><strong>Musée national Eugène Delacroix</strong></a> in Paris, the artist's former studio." },
    { question: "What does this painting depict?", answer: "Delacroix portrays himself as <strong>Shakespeare's Hamlet</strong>. He was deeply influenced by English literature and theater, painting scenes from Shakespeare, Byron, and Walter Scott throughout his career." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> self-portrait. His identification with <strong>Hamlet's brooding intensity</strong> captures the Romantic artist's self-image perfectly." }
  ],
  'eugene-delacroix-macbeth-and-the-witches': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-national-eug232ne-delacroix-paris-france\"><strong>Musée national Eugène Delacroix</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Macbeth encountering the three witches</strong> on the heath. Delacroix painted Shakespeare's darkest play with <strong>swirling, atmospheric drama</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> scene. Shakespeare's plays were a lifelong obsession. He painted subjects from Hamlet, Othello, and Macbeth repeatedly." }
  ],
  'eugene-delacroix-the-barque-of-dante-dante-and-virgil-in-the-underw': [
    { question: "Where is The Barque of Dante?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, where it made Delacroix famous at the 1822 Salon." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Dante and Virgil crossing the river Styx</strong>, surrounded by damned souls. It's Delacroix's debut masterwork, painted when he was just 24." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this in 1822. The painting launched French <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, with its <strong>muscular figures and turbulent emotion</strong> challenging Neoclassical restraint." }
  ],
  'eugene-delacroix-male-academy-figure': [
    { question: "What does this work depict?", answer: "It's a <strong>male academy figure</strong>, a standard exercise from art school training. Delacroix transforms the routine assignment into something <strong>vibrant and muscular</strong> through his handling of color and light." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> made this academic exercise. Even in student work, his <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> instinct for <strong>dramatic lighting and warm flesh tones</strong> is visible." },
    { question: "What style is this work?", answer: "It's an <strong>academic figure study</strong> with Romantic energy. Delacroix trained at the École des Beaux-Arts but quickly rebelled against its emphasis on <strong>line over color</strong>." }
  ],
  'eugene-delacroix-summer-diana-surprised-at-her-bath-by-actaeon': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts</strong></a> in Boston." },
    { question: "What does this painting depict?", answer: "The scene shows the mythological moment when <strong>Actaeon stumbles upon Diana bathing</strong>. Diana punished him by turning him into a stag, to be killed by his own hounds." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> mythological scene. His treatment of classical subjects emphasizes <strong>sensuality and drama</strong> over the calm idealism of Neoclassicism." }
  ],
  'eustache-le-sueur-st-bruno-appearing-to-comte-roger': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. Le Sueur's St. Bruno cycle is one of the Louvre's treasures of 17th-century French painting." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Bruno appearing in a vision to Comte Roger</strong>. Le Sueur painted a cycle of 22 paintings on St. Bruno's life for the Paris Charterhouse." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. Called the <strong>\"French Raphael,\"</strong> he brought a classical clarity to French religious painting." }
  ],
  'eustache-le-sueur-the-birth-of-cupid': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>birth of Cupid (Eros)</strong>, the god of love. Le Sueur painted mythological subjects with a <strong>gentle, classical elegance</strong> influenced by Raphael." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> (1616-1655) created this work. He died at 38, cutting short a career that rivaled <strong>Poussin's</strong> in its devotion to classical ideals." }
  ],
  'eustache-le-sueur-the-virgin-and-child-with-saint-john-the-baptist': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Virgin Mary with the Christ Child and young St. John the Baptist</strong>. Le Sueur painted this sacred subject with <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>serene</strong></a>, Raphaelesque grace." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> devotional painting. His religious works combine <strong>calm classical composition</strong> with genuine tenderness." }
  ],
  'eustache-le-sueur-saint-bruno-the-feet-of-pope-urban-ii': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, part of the St. Bruno cycle." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Bruno at the feet of Pope Urban II</strong>. Bruno founded the Carthusian order, and this cycle tells his life story across <strong>22 canvases</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting between 1645 and 1648. The St. Bruno cycle is considered his <strong>finest achievement</strong>." }
  ],
  'eustache-le-sueur-presentation-of-the-virgin-in-the-temple': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>young Virgin Mary being presented at the Temple</strong>. Le Sueur renders this subject with the <strong>architectural clarity and gentle color</strong> that earned him comparison to Raphael." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> work. He never visited Italy but absorbed <strong>Raphael's style</strong> through prints and copies available in Paris." }
  ],
  'angel-of-death-morgan': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong><a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\">Angel</a> of Death</strong>, a winged figure associated with mortality. De Morgan painted allegorical and mythological subjects with Pre-Raphaelite richness and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> mystery." },
    { question: "Who painted The Angel of Death?", answer: "<a href=\"/apps/masterpieces/artist/evelyn-de-morgan\"><strong>Evelyn De Morgan</strong></a> created this work. She was one of the most accomplished <strong>female Pre-Raphaelite painters</strong>, though her reputation was overshadowed by male contemporaries for decades." },
    { question: "What style is this painting?", answer: "It blends <strong>Pre-Raphaelite detail with <a href=\"/apps/masterpieces/movement/symbolism\">Symbolist</a> themes</strong>. De Morgan's allegorical paintings address death, the soul, and spiritual transformation with vivid color and careful draftsmanship." }
  ],
  'felix-vallotton-the-coal-scuttles': [
    { question: "Where is The Coal Scuttles?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-cantonal-des-beauxarts-lausanne-switzerlan\"><strong>Musée Cantonal des Beaux-Arts</strong></a> in Lausanne, Switzerland." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>coal scuttles</strong>, an ordinary domestic subject. Vallotton painted everyday objects with <strong>flat color and sharp outlines</strong>, giving mundane subjects a strange, almost surreal presence." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/felix-vallotton\"><strong>Félix Vallotton</strong></a> created this scene. A Swiss-French artist and Nabis member, he's known for <strong>woodcuts and paintings</strong> that combine decorative flatness with psychological unease." }
  ],
  'felix-vallotton-the-artists-mother': [
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of Vallotton's mother</strong>. He painted family members with the same cool, precise observation he brought to all his subjects, without sentimentality." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/felix-vallotton\"><strong>Félix Vallotton</strong></a> (1865-1925) created this work. Born in Lausanne, he moved to Paris at 17 and joined the <strong>Nabis</strong> alongside Bonnard and Vuillard." },
    { question: "What style did Vallotton work in?", answer: "His painting style combines <strong>flat color areas with hard edges</strong>, influenced by Japanese prints and his own woodcut practice. There's a detached, almost <strong>unsettling clarity</strong> to his portraits." }
  ],
  'ferdinand-georg-waldmuller-prater-landscape': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/alte-nationalgalerie-berlin-germany\"><strong>Alte Nationalgalerie</strong></a> in Berlin." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Prater</strong>, Vienna's famous park. Waldmüller painted it with <strong>brilliant sunlight and precise botanical detail</strong>, capturing every leaf and shadow." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/ferdinand-georg-waldmuller\"><strong>Ferdinand Georg Waldmüller</strong></a> created this work. He was Austria's leading <strong>Biedermeier painter</strong>, famous for sunlit <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and genre scenes of remarkable clarity." }
  ],
  'ferdinand-georg-waldmuller-self-portrait-at-the-age-of-35': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/ferdinand-georg-waldmuller\"><strong>Ferdinand Georg Waldmüller</strong></a> (1793-1865) created this work. He was a professor at the Vienna Academy who advocated painting <strong>directly from nature</strong>, decades before the Impressionists." },
    { question: "What style is this painting?", answer: "It's <strong>Biedermeier realism</strong>, characterized by meticulous detail, warm color, and bourgeois subjects. Waldmüller's insistence on <strong>plein-air painting</strong> was radical for early 19th-century Vienna." }
  ],
  'ferdinand-georg-waldmuller-still-life-with-roses-strawberries-and-bread': [
    { question: "Where is this still life?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>roses, strawberries, and bread</strong> arranged as a still life. Waldmüller painted every petal and berry with <strong>photographic precision</strong> and warm, natural light." },
    { question: "Who painted this still life?", answer: "<a href=\"/apps/masterpieces/artist/ferdinand-georg-waldmuller\"><strong>Ferdinand Georg Waldmüller</strong></a> created this work. His <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> still lifes demonstrate the <strong>crystalline clarity</strong> that made him Austria's most admired realist painter." }
  ],
  'ferdinand-georg-waldmuller-tree-by-the-brook': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong><a href=\"https://luxurywallart.com/collections/paintings-of-trees\" target=\"_blank\" rel=\"noopener\">tree</a> beside a brook</strong>, bathed in natural sunlight. Waldmüller painted outdoors, studying how light falls on foliage with scientific precision." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/ferdinand-georg-waldmuller\"><strong>Ferdinand Georg Waldmüller</strong></a> created this work. His commitment to <strong>painting from nature</strong> made him a forerunner of realist and Impressionist landscape painting." },
    { question: "What style is this painting?", answer: "It's <strong>Biedermeier naturalism</strong>. Waldmüller's landscapes capture Austrian scenery with a <strong>luminous precision</strong> that anticipates photography, recording every detail of leaf, bark, and water." }
  ],
  'fernand-khnopff-who-shall-deliver-me': [
    { question: "What does this painting depict?", answer: "The work takes its title from <strong>Christina Rossetti's poem</strong>. Khnopff painted enigmatic faces and figures that hover between reality and dream, embodying <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> mystery." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/fernand-khnopff\"><strong>Fernand Khnopff</strong></a> created this painting. He was Belgium's leading <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a>, known for <strong>enigmatic portraits</strong> that suggest hidden psychological depths." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, a late 19th-century movement that rejected Realism for <strong>inner experience, dreams, and mystery</strong>. Khnopff's cool, androgynous figures influenced Klimt and the Vienna Secession." }
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
