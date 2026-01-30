const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 36: tier 3 index 350-359
const newFaqs = {
  'matthias-grunewald-crucifixion': [
    { question: "What is Grünewald's most famous work?", answer: "<strong>Matthias Grünewald's</strong> Isenheim Altarpiece crucifixion is one of the most <strong>viscerally powerful religious paintings</strong> ever created. Christ's tortured, lesion-covered body was meant to comfort plague-suffering hospital patients." }
  ],
  'raphael-crucifixion': [
    { question: "When did Raphael paint this?", answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> painted this during his <strong>early Umbrian period</strong>, around 1502-03, still showing the influence of his teacher <a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a>. The gentle, balanced composition predates his grander Roman works." }
  ],
  'robert-campin-crucifixion': [
    { question: "How did Campin depict the crucifixion?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Campin</strong></a> brought <strong>Netherlandish realism</strong> to the crucifixion scene. His detailed rendering of textures, fabrics, and landscape reflects the early 15th-century revolution in oil painting technique." }
  ],
  'michelangelo-crucifixion': [
    { question: "What medium is Michelangelo's Crucifixion?", answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> created several crucifixion <strong>drawings and paintings</strong> throughout his life. His late crucifixion drawings, made for Vittoria Colonna, show an increasingly spiritual, stripped-down approach to the subject." }
  ],
  'piero-della-francesca-crucifixion': [
    { question: "How does Piero approach the crucifixion?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> depicts the crucifixion with <strong>geometric calm and clarity</strong>. His figures stand with statuesque dignity rather than emotional anguish, reflecting his mathematical approach to <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> composition." }
  ],
  'jan-van-eyck-crucifixion-and-last-judgement-diptych': [
    { question: "What makes Van Eyck's technique special?", answer: "<a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> perfected <strong>oil painting techniques</strong> that allowed unprecedented detail. His diptych combines a realistically crowded crucifixion with a terrifying Last Judgment, both rendered with microscopic precision." }
  ],
  'masaccio-crucifixion-of-st-peter': [
    { question: "How did Peter die according to tradition?", answer: "According to tradition, <strong>St. Peter was crucified upside down</strong> in Rome, requesting this position because he felt unworthy to die the same way as Christ. <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a> depicted this with his characteristic naturalism." }
  ],
  'hieronymus-bosch-crucifixion-with-a-donor': [
    { question: "What is a donor portrait?", answer: "A <strong>donor portrait</strong> includes the person who paid for the painting, shown kneeling in prayer within the religious scene. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> version shows a restrained crucifixion compared to his more fantastical works." }
  ],
  'fra-angelico-crucifixion-with-the-virgin-john-the-evangelist-an': [
    { question: "Where did Fra Angelico paint crucifixion scenes?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> painted crucifixions in the monks' cells at <strong>San Marco convent</strong> in Florence. Each cell received a different fresco for personal meditation, creating one of the most moving sacred spaces in art." }
  ],
  'henri-toulouse-lautrec-cuirassier': [
    { question: "What is a cuirassier?", answer: "A <strong>cuirassier</strong> was a cavalry soldier wearing a breastplate (cuirass). <a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> painted this military subject early in his career, showing the equestrian skill he learned at his family's estate." }
  ],
};

async function seed() {
  for (const [slug, addFaqs] of Object.entries(newFaqs)) {
    try {
      const artwork = await prisma.artwork.findUnique({ where: { slug }, select: { faqs: true } });
      if (!artwork) { console.error(`✗ Not found: ${slug}`); continue; }
      const existing = (artwork.faqs && Array.isArray(artwork.faqs)) ? artwork.faqs : [];
      const merged = [...existing, ...addFaqs];
      await prisma.artwork.update({ where: { slug }, data: { faqs: merged, updatedAt: new Date() } });
      console.log(`✓ ${slug}: ${existing.length} → ${merged.length} FAQs`);
    } catch (err) { console.error(`✗ Failed: ${slug} - ${err.message}`); }
  }
  await prisma.$disconnect();
}
seed();
