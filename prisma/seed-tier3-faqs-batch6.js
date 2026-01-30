const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 6: tier 3 artworks index 50-59
const newFaqs = {
  'rembrandt-adam-and-eva': [
    { question: "What medium is this Adam and Eve work?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this as an <strong>etching</strong> in 1638. His version shows the couple with raw, unidealized bodies, a departure from the smooth classical nudes typical of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> depictions." }
  ],
  'george-frederick-watts-adam-and-eve': [
    { question: "What was G.F. Watts's artistic philosophy?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>G.F. Watts</strong></a> believed art should convey <strong>moral and spiritual ideas</strong>. A leading Victorian painter and sculptor, he tackled grand themes of life, death, and hope through allegorical compositions." }
  ],
  'rembrandt-adam-and-eve': [
    { question: "How does this differ from Rembrandt's etching of the same subject?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> returned to the <strong>Adam and Eve</strong> theme across different media. His painted and etched versions each bring a distinct emotional quality, reflecting his evolving approach to biblical narratives." }
  ],
  'lucas-cranach-elder-adam-and-eve-in-paradise': [
    { question: "What style defines Cranach's nudes?", answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-the-elder\"><strong>Lucas Cranach the Elder</strong></a> painted Adam and Eve many times with <strong>elongated, elegant figures</strong> against dark backgrounds. His distinctive Northern <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> style made these compositions instantly recognizable." }
  ],
  'jan-van-eyck-adam-from-the-left-wing-of-the-ghent-altarpiece': [
    { question: "What is the Ghent Altarpiece?", answer: "The <strong>Ghent Altarpiece</strong> (1432) is one of the most important artworks of the Northern <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. Painted by <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> and his brother Hubert, it consists of 12 panels in Saint Bavo's Cathedral, Ghent." }
  ],
  'fra-angelico-adoration-and-annunciation': [
    { question: "Where can you see Fra Angelico's frescoes?", answer: "Many of <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico's</strong></a> finest works are at the <strong>Convent of San Marco</strong> in Florence, where he painted frescoes in each monk's cell. His devotional art combines <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> perspective with radiant spiritual imagery." }
  ],
  'robert-campin-adoration-of-shepherds': [
    { question: "Who was Robert Campin?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> was an early Netherlandish painter, often identified as the <strong>Master of Flémalle</strong>. He helped pioneer oil painting techniques and realistic domestic settings in religious scenes before Jan van Eyck." }
  ],
  'correggio-adoration-of-the-christ-child': [
    { question: "What was Correggio known for?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> was an Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter celebrated for his <strong>soft modeling and illusionistic ceiling frescoes</strong>. His tender religious scenes influenced the later Baroque style with their warmth and emotional directness." }
  ],
  'diego-velazquez-adoration-of-the-kings': [
    { question: "When did Velázquez paint this?", answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> painted this early in his career around 1619, before becoming court painter to <strong>Philip IV</strong>. The naturalistic faces suggest he used real people from Seville as models for the biblical figures." }
  ],
  'perugino-adoration-of-the-kings-epiphany': [
    { question: "What is Perugino best remembered for?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> was one of the finest <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painters and <strong>Raphael's teacher</strong>. His serene compositions, soft landscapes, and graceful figures shaped the High Renaissance style that his famous pupil perfected." }
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
