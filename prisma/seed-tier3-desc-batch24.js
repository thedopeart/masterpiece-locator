const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'george-inness-the-storm': [
    { question: "Where is The Storm displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/reynolda-house-museum-of-american-art-winstonsalem\"><strong>Reynolda House Museum of American Art</strong></a> in Winston-Salem, North Carolina." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>storm sweeping across a landscape</strong>. Inness's late works dissolve detail into <strong>atmospheric mood</strong>, creating landscapes that feel more spiritual than geographic." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-inness\"><strong>George Inness</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape. His late style, influenced by <strong>Swedenborg's mysticism</strong>, dissolved forms into luminous, tonal atmospheres." }
  ],
  'george-stubbs-zebra': [
    { question: "Where is Zebra displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Center for British Art</strong></a> in New Haven, Connecticut." },
    { question: "What does this painting depict?", answer: "It shows a <strong>zebra</strong>, one of the first painted from life in Europe. Stubbs was asked to paint this animal after it arrived in England as a gift, treating it with the same <strong>anatomical precision</strong> he gave racehorses." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>George Stubbs</strong></a> created this painting. He dissected horses for 18 months to produce his landmark book <strong>The Anatomy of the Horse</strong> (1766), making him the greatest animal painter in British art." }
  ],
  'george-stubbs-mares-and-foals-in-a-river-landscape': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>mares and foals in a tranquil river <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\">landscape</a></strong>. Stubbs painted <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horses</strong></a> with unmatched anatomical knowledge, giving each animal individual character." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>George Stubbs</strong></a> created this painting. His horse portraits were commissioned by <strong>English aristocrats and racing enthusiasts</strong>, but his scientific rigor elevated animal painting to a fine art." }
  ],
  'george-stubbs-mares-and-foals-in-a-wooded-landscape': [
    { question: "What does this painting depict?", answer: "The scene shows <strong><a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\">mares and foals</a> beneath trees</strong>. Stubbs arranged his horse groups in frieze-like compositions, giving them a <strong>classical dignity</strong> usually reserved for human figures." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>George Stubbs</strong></a> created this landscape. His deep understanding of <strong>equine anatomy</strong> let him paint horses with a truth no other artist has matched." },
    { question: "What style is this painting?", answer: "It's 18th-century <strong>British sporting art</strong> elevated to fine art. Stubbs combined <strong>scientific observation with Romantic landscape</strong>, transforming commissioned horse portraits into compositions of genuine beauty." }
  ],
  'georges-de-la-tour-the-beggars39-brawl': [
    { question: "Where is The Beggars' Brawl?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/getty-center\"><strong>Getty Center</strong></a> in Los Angeles." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>beggars fighting</strong>, painted with La Tour's characteristic sharp observation. His daylight scenes have a <strong>raw, unflinching realism</strong> that contrasts with his more famous candlelit works." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-de-la-tour\"><strong>Georges de La Tour</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> scene. Forgotten for centuries, he was rediscovered in the 1900s and is now recognized as one of France's <strong>greatest 17th-century painters</strong>." }
  ],
  'georges-seurat-stone-breakers-leraincy': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>stone breakers at Le Raincy</strong>, a suburb of Paris. Seurat painted working-class subjects in his early career before developing <strong>Pointillism</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> created this early work. He invented <strong>Pointillism</strong>, applying tiny dots of pure color that blend optically, revolutionizing <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>." }
  ],
  'georges-seurat-seated-woman': [
    { question: "Where is this drawing?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-picasso-paris-france\"><strong>Musée Picasso</strong></a> in Paris." },
    { question: "What does this work depict?", answer: "It shows a <strong>seated woman</strong> rendered in Seurat's distinctive conté crayon technique. His drawings use <strong>velvety black tones</strong> built up through delicate shading on textured paper." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> made this drawing. His <strong>conté crayon drawings</strong> are as celebrated as his paintings, achieving remarkable depth through subtle gradations of light and shadow." }
  ],
  'georges-seurat-suburb': [
    { question: "Where is Suburb?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/musee-d39art-moderne-de-troyes-troyes-france\"><strong>Musée d'Art Moderne de Troyes</strong></a> in France." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>Parisian suburb</strong>. Seurat painted the edges of the city with <strong>quiet stillness</strong>, finding poetry in empty streets and industrial landscapes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> created this <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> landscape. He died at just 31, leaving a small body of work that permanently changed how artists thought about <strong>color and light</strong>." }
  ],
  'georges-seurat-soldier-fencing-another-reclining': [
    { question: "What does this work depict?", answer: "The scene shows <strong>soldiers, one fencing and another reclining</strong>. Seurat made these studies during his year of military service, practicing the <strong>tonal drawing</strong> that would define his style." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> made this drawing. His military service in 1879-1880 gave him time to develop his <strong>conté crayon technique</strong> of building form through gradations of tone." },
    { question: "What style is this work?", answer: "It's an early <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> study. Seurat's drawings dissolve figures into <strong>soft, atmospheric shadows</strong>, anticipating the optical effects of his later Pointillist paintings." }
  ],
  'georges-seurat-peasants-driving-stakes': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>peasants driving stakes into the ground</strong>. Seurat painted rural labor with the <strong>monumental stillness</strong> that characterizes all his figure compositions." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> created this early work. Before inventing Pointillism, he painted working-class subjects influenced by <strong>Millet and the Barbizon tradition</strong>." },
    { question: "What style is this painting?", answer: "It's early <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. Seurat's figures have a <strong>frozen, sculptural quality</strong> that gives even simple labor scenes an almost ceremonial gravity." }
  ],
  'georges-seurat-the-hedge-also-known-as-the-clearing': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>hedge or clearing</strong> in the Parisian suburbs. Seurat found beauty in <strong>overlooked, transitional landscapes</strong> between city and countryside." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> created this <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> landscape. His suburban scenes capture the <strong>quiet melancholy</strong> of spaces that are neither fully urban nor fully rural." },
    { question: "What technique did Seurat use?", answer: "Seurat applied <strong>small, systematic brushstrokes of pure color</strong> that mix optically when viewed from a distance. This scientific approach to color, called <strong>Pointillism or Divisionism</strong>, influenced Signac, Matisse, and the Futurists." }
  ],
  'georges-seurat-vase-of-flowers': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/harvard-art-museums-cambridge-ma-us\"><strong>Harvard Art Museums</strong></a> in Cambridge, Massachusetts." },
    { question: "What does this painting depict?", answer: "It shows a <strong>vase of <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\">flowers</a></strong> painted with Seurat's characteristic <strong>broken color technique</strong>. Even still lifes received his methodical approach to optical color mixing." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> created this <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> still life. His scientific color theories influenced a generation of painters from <strong>Signac to Matisse to Mondrian</strong>." }
  ],
  'gerard-david-the-crucifixion': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Crucifixion of Christ</strong>. Gerard David renders the subject with the <strong>jewel-like color and meticulous detail</strong> of the Netherlandish tradition." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panel. He was the last major painter of the <strong>Bruges school</strong>, carrying on the tradition of Van Eyck and Memling." }
  ],
  'gerard-david-triptych-of-the-sedano-family': [
    { question: "Where is this triptych?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The triptych shows the <strong>Sedano family in prayer</strong>, flanking a central religious scene. Donor portraits in triptychs were a hallmark of <strong>Netherlandish painting</strong>." },
    { question: "Who painted this triptych?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> altarpiece. His work represents the <strong>final flowering of the Bruges tradition</strong> before Antwerp became the center of Netherlandish art." }
  ],
  'gerard-david-lineage-of-saint-anne': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-lyon-lyon-france\"><strong>Musée des Beaux-Arts de Lyon</strong></a> in France." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>lineage (family tree) of St. Anne</strong>, the Virgin Mary's mother. David paints the holy family with <strong>serene dignity and luminous color</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panel. His quiet, contemplative style brought the <strong>Bruges painting tradition</strong> to a graceful close." }
  ],
  'gerard-david-the-nativity': [
    { question: "Where is The Nativity?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>birth of Christ</strong>. David paints the Nativity with the <strong>intimate devotional feeling</strong> and precise detail characteristic of Netherlandish art." },
    { question: "Who painted this Nativity?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> (c. 1460-1523) created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panel. He was the leading painter in <strong>Bruges</strong> during the early 16th century." }
  ],
  'gerard-david-the-flaying-of-the-corrupt-judge-sisamnes': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/groeningemuseum\"><strong>Groeningemuseum</strong></a> in Bruges, Belgium." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>King Cambyses ordering the corrupt judge Sisamnes to be flayed alive</strong>. David painted this gruesome subject as a <strong>civic warning about justice</strong> for the Bruges town hall." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panel in 1498. It's one of the most <strong>viscerally disturbing paintings</strong> of the period, rendered with clinical Netherlandish precision." }
  ],
  'gerard-david-the-judgement-of-cambyses-2-panels': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/groeningemuseum\"><strong>Groeningemuseum</strong></a> in Bruges." },
    { question: "What does this painting depict?", answer: "The two panels show the <strong>Judgement of Cambyses</strong>: the arrest of the corrupt judge Sisamnes and his punishment. David painted these as <strong>justice panels</strong> for Bruges's civic authorities." },
    { question: "Who painted these panels?", answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a> created these <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panels. They hung in the <strong>Bruges town hall</strong> as a reminder to judges of the consequences of corruption." }
  ],
  'gerard-ter-borch-woman-drinking-wine': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman drinking wine</strong>. Ter Borch painted domestic moments with <strong>exquisite refinement</strong>, his rendering of satin and silk rivaling Vermeer's." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. He's celebrated for painting <strong>satin fabric</strong> with a luminous sheen no other Dutch painter could match." }
  ],
  'gerard-ter-borch-woman-playing-the-lute': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong><a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\">woman</a> playing a lute</strong>. Ter Borch painted music-making scenes with a <strong>quiet intimacy</strong> that suggests private emotional worlds behind domestic routines." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting. His refined interiors influenced <strong>Vermeer</strong>, who likely studied Ter Borch's treatment of light on fabric." }
  ],
  'gerard-ter-borch-woman-peeling-apple': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman peeling an apple</strong>, a subject of quiet domestic concentration. Ter Borch elevates everyday tasks into <strong>moments of hushed, luminous beauty</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. His <strong>silvery palette and exquisite fabric textures</strong> set a standard for Dutch interior painting." }
  ],
  'gerard-van-honthorst-the-mocking-of-christ': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/lacma\"><strong>Los Angeles County Museum of Art</strong></a>." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>soldiers mocking Christ</strong> before the Crucifixion. Honthorst paints it with <strong>dramatic candlelight</strong>, his signature technique learned from Caravaggio in Rome." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-van-honthorst\"><strong>Gerard van Honthorst</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. The Italians nicknamed him <strong>\"Gherardo delle Notti\"</strong> (Gerard of the Night) for his mastery of candlelit scenes." }
  ],
  'the-matchmaker': [
    { question: "Where is The Matchmaker?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/centraal-museum\"><strong>Centraal Museum</strong></a> in Utrecht, Netherlands." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>matchmaker arranging a meeting</strong>, a subject mixing humor with moral commentary. Honthorst painted merry company scenes with <strong>theatrical lighting and lively expressions</strong>." },
    { question: "Who painted The Matchmaker?", answer: "<a href=\"/apps/masterpieces/artist/gerard-van-honthorst\"><strong>Gerard van Honthorst</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. He led the <strong>Utrecht Caravaggisti</strong>, Dutch painters who brought Caravaggio's dramatic lighting back from Italy." }
  ],
  'gerard-van-honthorst-supper-party-with-lute-player': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>supper party with a lute player</strong>, lit by candlelight. Honthorst's night scenes place figures around a <strong>single light source</strong>, creating dramatic contrasts of shadow and glow." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-van-honthorst\"><strong>Gerard van Honthorst</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> scene. His candlelit compositions influenced <strong>Georges de La Tour</strong> and the broader European tradition of nocturnal painting." }
  ],
  'gerard-van-honthorst-the-liberation-of-peter': [
    { question: "What does this painting depict?", answer: "The scene shows an <strong>angel liberating St. Peter from prison</strong>, a subject perfectly suited to Honthorst's <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>nocturnal</strong></a> style. The angel's light pierces the dungeon darkness with <strong>supernatural radiance</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gerard-van-honthorst\"><strong>Gerard van Honthorst</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious scene. His night paintings combine <strong>Caravaggio's drama</strong> with a Northern European clarity of detail." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Caravaggism. Honthorst was the most successful of the <strong>Utrecht Caravaggisti</strong>, eventually becoming court painter to the English king Charles I and the Dutch stadtholder." }
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
