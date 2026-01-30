const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'young-woman-candle-schalcken': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young woman illuminated by candlelight</strong>. Schalcken specialized in nocturnal scenes lit by candles, torches, or firelight, creating <strong>warm, glowing atmospheres</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/godfried-schalcken\"><strong>Godfried Schalcken</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. A pupil of Gerrit Dou, he became the leading <strong>candlelight painter</strong> of the late Dutch Golden Age." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> fine painting in the Leiden tradition. Schalcken's candlelit scenes achieve a <strong>warm luminosity</strong> that influenced later painters including Joseph Wright of Derby." }
  ],
  'guercino-st-william-of-aquitaine-receiving-the-cowl-of-st-b': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/pinacoteca-nazionale-di-bologna-bologna-italy\"><strong>Pinacoteca Nazionale di Bologna</strong></a>, near Guercino's hometown of Cento." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. William of Aquitaine receiving a monk's cowl</strong>, renouncing his noble status. Guercino paints the moment with <strong>dramatic light and emotional conviction</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/guercino\"><strong>Guercino</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> altarpiece. His nickname means \"squinter\" (he was cross-eyed), but his artistic vision produced some of the most <strong>powerful religious paintings</strong> of the 17th century." }
  ],
  'guercino-susanna-and-the-elders': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/parma-national-gallery-parma-italy\"><strong>Parma National Gallery</strong></a> in Italy." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Susanna being spied on by two elders</strong> while bathing, a biblical subject about false accusation. Guercino renders it with <strong>rich Baroque drama</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/guercino\"><strong>Guercino</strong></a> (1591-1666) created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. He was one of Bologna's greatest painters, rivaling <strong>Guido Reni</strong> for dominance of Italian painting after Caravaggio." }
  ],
  'guercino-the-liberation-of-st-peter': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
    { question: "What does this painting depict?", answer: "The scene shows an <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angel</strong></a> <strong>freeing St. Peter from prison</strong>. Guercino paints the nocturnal scene with dramatic contrasts of <strong>divine light and dungeon darkness</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/guercino\"><strong>Guercino</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious painting. His early style shows strong <strong>Caravaggesque drama</strong>, though he later adopted a lighter, more classical manner." }
  ],
  'guercino-the-vision-of-st-jerome': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Jerome experiencing a divine vision</strong>. Guercino paints the aged saint with <strong>dramatic chiaroscuro</strong>, his weathered body lit by supernatural radiance." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/guercino\"><strong>Guercino</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. Pope Gregory XV summoned him to Rome in 1621 to paint the <strong>ceiling of the Casino Ludovisi</strong>, one of the great Baroque illusionistic frescoes." }
  ],
  'guercino-return-of-the-prodigal-son': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>prodigal son returning to his father</strong>, a biblical parable of forgiveness. Guercino captures the <strong>emotional embrace</strong> with characteristic warmth and theatrical lighting." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/guercino\"><strong>Guercino</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious scene. He ran the most productive <strong>workshop in Bologna</strong>, producing paintings, drawings, and frescoes throughout his long career." }
  ],
  'guido-reni-self-portrait': [
    { question: "What does this self-portrait show?", answer: "Reni depicts himself with the <strong>idealized beauty</strong> he brought to all his subjects. His self-portraits project the image of the artist as a <strong>refined, almost divine figure</strong>." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/guido-reni\"><strong>Guido Reni</strong></a> (1575-1642) created this work. He was considered the <strong>greatest Italian painter of his generation</strong>, rivaling Caravaggio's fame during the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> era." },
    { question: "What style did Reni work in?", answer: "He developed a <strong>classical Baroque style</strong> of extraordinary elegance. His figures have an <strong>otherworldly beauty</strong> that made him the most admired painter in Europe until taste shifted toward Caravaggio in the 20th century." }
  ],
  'guido-reni-madonna-with-child-and-st-john-the-baptist': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna with the Christ Child and young St. John the Baptist</strong>. Reni paints them with his trademark <strong>pale, luminous beauty and upward-gazing eyes</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/guido-reni\"><strong>Guido Reni</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> devotional painting. His idealized Madonnas were so popular that his workshop produced <strong>countless versions</strong> for churches and collectors across Europe." }
  ],
  'gustave-caillebotte-study-for-39the-parquet-planers39': [
    { question: "What does this work depict?", answer: "It's a <strong>preparatory study for The Floor Scrapers</strong>, showing workers planing a wooden floor. Caillebotte's studies reveal his <strong>methodical, almost architectural approach</strong> to composition." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> made this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> study. He was independently wealthy and used his fortune to <strong>buy and exhibit his friends' paintings</strong>, shaping the Impressionist movement." },
    { question: "What is the finished painting?", answer: "The finished <strong>Floor Scrapers</strong> (1875) hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>. It was rejected by the Salon for depicting <strong>manual labor</strong> with the grandeur of a history painting." }
  ],
  'gustave-caillebotte-yerres-colonnade-of-the-casin': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>colonnade at the Casin</strong> on the Caillebotte family estate at Yerres. He painted his family's property repeatedly, documenting its <strong>gardens, river, and architecture</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. His paintings of the Yerres estate capture <strong>bourgeois leisure</strong> with a cool, photographic eye unique among the Impressionists." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> with an <strong>unusually precise, architectural quality</strong>. Caillebotte trained as an engineer, and his paintings show perspective and structure more rigorously than his fellow Impressionists." }
  ],
  'gustave-caillebotte-selfportrait-with-pith-helmet': [
    { question: "What does this self-portrait show?", answer: "Caillebotte depicts himself <strong>wearing a pith helmet</strong>, suggesting outdoor activity. His self-portraits are rare, making this an unusual glimpse of the artist himself." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> (1848-1894) created this work. Beyond painting, he was a <strong>yacht designer, stamp collector, and gardener</strong> whose collection of Impressionist art formed the core of the Musée d'Orsay." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Caillebotte's approach to portraiture is <strong>more direct and photographic</strong> than Renoir's or Monet's, reflecting his interest in modern optics and perspective." }
  ],
  'gustave-caillebotte-willows-by-the-yerres': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>willow <a href=\"https://luxurywallart.com/collections/paintings-of-trees\" target=\"_blank\" rel=\"noopener\">trees</a> along the Yerres River</strong>. Caillebotte painted the waterways near his family estate with a <strong>cool, precise naturalism</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. His river paintings anticipate <strong>Monet's later water lily series</strong> in their close attention to reflections and surface patterns." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Caillebotte's landscapes balance <strong>Impressionist light effects with structured composition</strong>, giving his nature scenes a clarity others in the group didn't pursue." }
  ],
  'gustave-caillebotte-landscape-with-railway-tracks': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>landscape cut by railway tracks</strong>. Caillebotte painted modern infrastructure alongside nature, capturing how <strong>industrialization reshaped the French countryside</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. His interest in <strong>modern urban and suburban subjects</strong> gives his work a documentary quality." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> with a distinctly <strong>modern, almost photographic sensibility</strong>. Caillebotte's compositions often use unusual perspectives that anticipate snapshot photography." }
  ],
  'gustave-caillebotte-woman-seated-beneath-a-tree': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong><a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\">woman</a> seated beneath a tree</strong> on the Caillebotte estate. He painted figures in dappled outdoor light with <strong>casual, natural poses</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. His fortune let him paint without commercial pressure, producing work that was <strong>more experimental than his peers realized</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Caillebotte's figure-in-landscape paintings combine <strong>natural light with precise spatial composition</strong>, bridging Impressionism and early modernism." }
  ],
  'gustave-caillebotte-the-parquet-planers-the-floor-scrapers': [
    { question: "Where is The Floor Scrapers?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>three men scraping a parquet floor</strong>, their muscular backs bent to the task. Caillebotte painted working-class labor with the <strong>monumental dignity</strong> of classical figure painting." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this in 1875. The Salon rejected it for showing <strong>\"vulgar\" subject matter</strong>, so he exhibited it at the second <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> exhibition instead." }
  ],
  'gustave-caillebotte-the-park-on-the-caillebotte-property-at-yerres': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>park on the Caillebotte family property</strong> at Yerres, south of Paris. He painted the estate's <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>grounds</strong></a> with loving attention to <strong>light filtering through trees</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> landscape. The Yerres estate was his artistic laboratory, where he developed his <strong>distinctive blend of realism and Impressionist light</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Caillebotte died at 45, leaving his art collection to the French state. After a bitter fight, 38 paintings were accepted, forming the <strong>nucleus of what became the Musée d'Orsay</strong>." }
  ],
  'gustave-caillebotte-woman-seated-on-the-lawn': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman seated on a lawn</strong> in dappled sunlight. Caillebotte captures outdoor light with the <strong>analytical precision</strong> of an engineer turned painter." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. Long overshadowed by Monet and Renoir, his reputation has risen dramatically since a <strong>major retrospective in 1994</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> with Caillebotte's characteristic <strong>sharp focus and bold perspective</strong>, qualities that distinguish him from the softer approach of Monet and Renoir." }
  ],
  'gustave-caillebotte-woman-at-a-dressing-table': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman at a dressing table</strong>, an intimate domestic moment. Caillebotte painted private interiors with the same <strong>cool, observational clarity</strong> he brought to street scenes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> interior. His domestic scenes share Degas's interest in <strong>candid, unposed moments</strong> but with a more geometric sensibility." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Caillebotte's interiors have a <strong>photographic quality</strong> that sets them apart from the more painterly approach of his Impressionist colleagues." }
  ],
  'gustave-caillebotte-yerres-soldiers-in-the-woods': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>soldiers in the woods near Yerres</strong>. Caillebotte occasionally painted military figures in landscape settings, combining <strong>plein-air technique with genre subject matter</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. His range of subjects, from <strong>floor scrapers to rainy boulevards to rural landscapes</strong>, is broader than most Impressionists." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Caillebotte brought an <strong>engineer's eye for structure</strong> to Impressionist technique, producing paintings that feel more composed and deliberate than his peers' work." }
  ],
  'gustave-courbet-valley-of-the-loue': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Valley of the Loue</strong> in Courbet's native Franche-Comté. He painted this landscape repeatedly, building <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>rocky cliffs and forests</strong></a> with thick, physical paint." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> landscape. He championed painting from direct observation, declaring <strong>\"Show me an angel and I'll paint one\"</strong> to reject idealized art." },
    { question: "What style is this painting?", answer: "It's <strong>Realism</strong>. Courbet built his landscapes with a <strong>palette knife</strong>, creating thick surfaces that make rock and foliage feel physically present." }
  ],
  'gustave-courbet-the-forest-in-autumn': [
    { question: "What does this painting depict?", answer: "The scene shows an <strong>autumn forest</strong> in Courbet's native Jura region. He painted forests with <strong>dark, earthy colors</strong> and thick impasto that gives the trees an almost sculptural presence." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this landscape. The founder of <strong>Realism</strong>, he rejected both Romantic idealism and academic convention, insisting on painting only <strong>what he could see</strong>." },
    { question: "What style is this painting?", answer: "It's <strong>Realism</strong>. Courbet's forest paintings use <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a> and heavy paint to create landscapes that feel <strong>dense, physical, and rooted in the real world</strong>." }
  ],
  'gustave-courbet-the-cellist-self-portrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden." },
    { question: "What does this painting depict?", answer: "Courbet portrays himself as a <strong>cellist</strong>, combining self-portraiture with his love of music. He painted himself frequently, always with the <strong>bold confidence</strong> that defined his public persona." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this work. His self-portraits present him as a <strong>Romantic rebel</strong>, a role he cultivated as the most controversial French painter of his era." }
  ],
  'gustave-courbet-the-draughts-players': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>men playing draughts (checkers)</strong>. Courbet painted ordinary people at leisure with the same seriousness that academic painters reserved for <strong>mythological or historical subjects</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> genre scene. His insistence on painting <strong>everyday life without idealization</strong> scandalized the French art establishment and changed the course of modern art." },
    { question: "What style is this painting?", answer: "It's <strong>Realism</strong>, the movement Courbet founded. He declared that painting should depict <strong>\"real and existing things\"</strong>, rejecting the angels, gods, and heroes of academic tradition." }
  ],
  'gustave-courbet-the-stone-breaker': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>man breaking stones</strong>, the same backbreaking labor Courbet painted in his famous large-scale Stone Breakers (destroyed in 1945). He gave <strong>working-class suffering</strong> the scale of grand painting." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> work. His paintings of laborers were political acts, asserting that <strong>ordinary workers deserved artistic attention</strong> equal to kings and saints." },
    { question: "What style is this painting?", answer: "It's <strong>Realism</strong>. Courbet's worker paintings shocked the 1850 Salon. Critics called them ugly and dangerous. He responded by building his own <strong>\"Pavilion of Realism\"</strong> to exhibit independently." }
  ],
  'gustave-courbet-the-wounded-man': [
    { question: "Where is The Wounded Man?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "Courbet portrays himself as a <strong>wounded man lying beneath a tree</strong>. X-rays revealed he originally painted himself with a woman, then painted her out after a romantic breakup." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> self-portrait around 1844-1854. The painting's hidden history, revealed by <strong>X-ray analysis</strong>, makes it one of art history's most intriguing palimpsests." }
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
