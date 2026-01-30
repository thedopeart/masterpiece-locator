const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'camille-corot-the-forum-seen-from-the-farnese-gardens': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. Corot's Italian oil sketches are among the Orsay's most prized landscape paintings." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Roman Forum viewed from the Farnese Gardens</strong> on the Palatine Hill. Corot painted this during his first Italian trip in the 1820s, capturing ancient ruins in clear morning light." },
    { question: "Who painted this view of Rome?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this plein-air study. His Italian views painted directly from nature are now considered <strong>pioneering works of outdoor painting</strong> that paved the way for <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." }
  ],
  'camille-corot-the-roman-campagna-la-cervara': [
    { question: "Where is this painting displayed?", answer: "This landscape is at the <a href=\"/apps/masterpieces/museum/kunsthaus-zurich\"><strong>Kunsthaus Zürich</strong></a> in Switzerland. The museum holds an important collection of 19th-century European painting." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Roman Campagna near La Cervara</strong>, the rolling countryside outside Rome. Corot captured the dry, golden light of the Italian landscape with remarkable freshness and directness." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this work. His Italian <strong>plein-air studies</strong> were painted for personal use, not exhibition, which gave them a freedom that his formal Salon paintings often lacked." }
  ],
  'camille-corot-rome-view-from-the-farnese-gardens': [
    { question: "Where is this painting?", answer: "This view is at <a href=\"/apps/masterpieces/museum/phillips-collection\"><strong>The Phillips Collection</strong></a> in Washington, D.C., America's first museum of modern art." },
    { question: "What does this painting show?", answer: "The scene captures <strong>Rome seen from the Farnese Gardens</strong>. Corot painted several views from this vantage point, each capturing different light conditions over the ancient city's rooftops and ruins." },
    { question: "Who was Camille Corot?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> (1796-1875) was a French landscape painter who bridged <strong>Neoclassicism and Impressionism</strong>. Monet called him \"the greatest landscape painter\" and his outdoor studies influenced the entire movement." }
  ],
  'camille-corot-rome-the-basilica-of-constantine': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-cantonal-des-beauxarts-lausanne-switzerlan\"><strong>Musée Cantonal des Beaux-Arts</strong></a> in Lausanne, Switzerland." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>ruins of the Basilica of Constantine</strong> (Maxentius) in the Roman Forum. Corot painted these massive Roman vaults with an architect's eye for structure and a painter's sense of light." },
    { question: "Who painted this view?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this during his Italian travels. His Roman studies combine <strong>topographic accuracy with atmospheric poetry</strong>, recording ancient monuments under living skies." }
  ],
  'camille-corot-the-pont-de-narni': [
    { question: "Where is The Pont de Narni?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-canada-ottawa-canada\"><strong>National Gallery of Canada</strong></a> in Ottawa. A related finished version hangs at the Louvre." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>ancient Roman bridge at Narni</strong> in Umbria, Italy. Corot painted the ruined bridge spanning a river valley, bathed in warm Italian light. It's one of his most admired outdoor studies." },
    { question: "Who painted The Pont de Narni?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> painted this around 1826. This oil sketch, painted directly on site, is now considered <strong>more valuable artistically</strong> than the polished Salon version he made from it." }
  ],
  'camille-corot-rome-the-trinita-dei-monti-view-from-the-gardens-o': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-d39art-et-d39histoire-geneva-switzerland\"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva, Switzerland." },
    { question: "What does this painting show?", answer: "The scene captures the <strong>Trinità dei Monti church</strong> above the Spanish Steps, seen from the gardens of the French Academy. Corot painted this Roman landmark with crisp outdoor light and clear geometry." },
    { question: "Who painted this Roman view?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this study during his formative years in Rome. These <strong>plein-air Italian sketches</strong> are now among the most sought-after works of 19th-century <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape painting</strong></a>." }
  ],
  'camille-corot-selfportrait': [
    { question: "Where is Corot's self-portrait?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's one of the rare self-portraits by an artist better known for landscapes." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> painted himself with the same <strong>direct, unaffected honesty</strong> he brought to his landscapes. He was known for his generous, modest personality." },
    { question: "Why is Corot important?", answer: "Corot is the critical link between <strong>classical landscape and Impressionism</strong>. His outdoor painting influenced Monet, Pissarro, and Morisot. He also mentored younger artists and was famously generous, supporting Daumier financially in old age." }
  ],
  'camille-corot-rome-castle-sant-angelo': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Castel Sant'Angelo</strong>, the cylindrical fortress on the Tiber in Rome. Originally Hadrian's mausoleum, it became a papal fortress. Corot painted its massive form against the Roman sky." },
    { question: "Who painted this Roman view?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> created this study. His three trips to Italy (1825-28, 1834, 1843) produced a body of <strong>outdoor oil sketches</strong> that revolutionized European landscape painting." }
  ],
  'camille-corot-the-tibre-river-hemmed-in-by-the-collines': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Tiber River flowing between hills</strong> in the Roman countryside. Corot captured the river's winding course with soft tonal transitions and gentle atmospheric perspective." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a> painted this Italian river scene. His landscapes of the <strong>Tiber valley</strong> combine topographic observation with a poetic sense of light and distance." },
    { question: "What style is this painting?", answer: "It's <strong>plein-air landscape painting</strong> from the early 19th century. Corot worked outdoors decades before the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>, establishing the practice of painting directly from nature that they would make famous." }
  ],
  'camille-pissarro-landscape-with-figures-by-a-river': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford, the world's oldest university museum." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>figures along a riverbank</strong>. Pissarro often included working people in his landscapes, reflecting his interest in rural labor and his anarchist political sympathies." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this work. He was the <strong>only artist to exhibit in all eight <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> shows</strong>, earning the nickname \"father of Impressionism\" from his younger colleagues." }
  ],
  'camille-pissarro-woman-carrying-a-pitcher-on-her-head': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/eg-b252hrle-foundation-z252rich-switzerland\"><strong>E.G. Bührle Foundation</strong></a> in Zürich, Switzerland, now part of the Kunsthaus Zürich." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman balancing a water pitcher on her head</strong>. Pissarro frequently painted peasant women at work, giving rural labor a quiet dignity that connects to Millet's earlier tradition." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this figure study. He uniquely combined <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> light effects with a <strong>social conscience</strong>, depicting working people with empathy and respect." }
  ],
  'camille-pissarro-landscape-with-house-in-the-woods-in-saint-thomas-': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>house in the woods on Saint Thomas</strong> in the Caribbean. Pissarro was born on the island (then the Danish West Indies) and painted tropical landscapes before moving to Paris." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this early landscape. Born in <strong>Saint Thomas in 1830</strong>, he's the only major Impressionist with Caribbean origins, which gave his palette a distinctive warmth." },
    { question: "What style is this painting?", answer: "This early work predates Pissarro's full <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> development. His <strong>Caribbean landscapes</strong> show the tropical light and lush vegetation of his birthplace, painted in a more traditional style than his later French work." }
  ],
  'camille-pissarro-the-harvest': [
    { question: "What does The Harvest depict?", answer: "The painting shows a <strong>harvest scene in the French countryside</strong>. Pissarro painted agricultural labor repeatedly, combining Impressionist light with genuine interest in the lives of rural workers." },
    { question: "Who painted The Harvest?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this work. He lived in rural communities outside Paris (Pontoise, then Éragny) and painted <strong>farming life</strong> with the same dedication Monet gave to water lilies." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> applied to rural subjects. Pissarro's harvest scenes combine <strong>plein-air color and light</strong> with compositions that honor the physical labor of the countryside." }
  ],
  'camille-pissarro-village-corner': [
    { question: "What does Village Corner depict?", answer: "The painting shows a <strong>quiet corner of a French village</strong>. Pissarro painted the towns and hamlets around Pontoise and Éragny with an eye for everyday architecture and rural atmosphere." },
    { question: "Who painted Village Corner?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this scene. He preferred painting <strong>ordinary rural life</strong> over the leisure subjects favored by Monet and Renoir, giving his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> a grounded, earthy character." },
    { question: "Why is Pissarro important?", answer: "Pissarro was the <strong>\"father of Impressionism\"</strong>, the only artist in all eight group exhibitions. He mentored Cézanne and Gauguin, and his political ideals shaped his art's focus on working people and rural communities." }
  ],
  'camille-pissarro-la-varenne-de-st-hilaire': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. The museum holds a notable collection of French <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painting." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>La Varenne-Saint-Hilaire</strong>, a village along the Marne River east of Paris. Pissarro painted the area's gentle riverside landscape with characteristic attention to light and seasonal atmosphere." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> created this work. He painted the <strong>Île-de-France countryside</strong> for decades, documenting how light, weather, and seasons transformed familiar views." }
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
