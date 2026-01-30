const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 28: tier 3 index 270-279
const newFaqs = {
  'luca-signorelli-christ-and-the-doubting-thomas': [
    { question: "Who was Luca Signorelli?", answer: "<a href=\"/apps/masterpieces/artist/luca-signorelli\"><strong>Luca Signorelli</strong></a> was an Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter known for his <strong>powerful anatomical figures</strong>. His Last Judgment frescoes in Orvieto Cathedral influenced Michelangelo's Sistine Chapel ceiling." }
  ],
  'rembrandt-christ-and-the-woman-of-samaria-among-ruins': [
    { question: "What story does this depict?", answer: "It shows <strong>Jesus meeting a Samaritan woman at a well</strong>, a New Testament scene about crossing social boundaries. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> etched multiple versions of this subject, exploring different settings and compositions." }
  ],
  'rembrandt-christ-and-the-woman-of-samaria-an-arched-print': [
    { question: "Why did Rembrandt revisit subjects?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> often returned to the same <strong>biblical stories across different media</strong>. Each version explores new lighting, composition, or emotional emphasis, showing his restless experimentation with narrative expression." }
  ],
  'rembrandt-christ-appearing-to-the-apostles': [
    { question: "How did Rembrandt treat religious subjects?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> approached biblical scenes with <strong>emotional intimacy</strong> rather than grandeur. His Christ appears not as a triumphant figure but as a gentle, human presence among ordinary-looking apostles." }
  ],
  'albrecht-durer-christ-as-the-man-of-sorrows': [
    { question: "What is the Man of Sorrows?", answer: "The <strong>Man of Sorrows</strong> is a devotional image showing Christ suffering after the crucifixion. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a> created deeply felt religious works combining Northern European detail with Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> form." }
  ],
  'rembrandt-christ-at-emmaus': [
    { question: "What happens at Emmaus?", answer: "Two disciples recognize the <strong>risen Christ while breaking bread</strong> at supper, a key resurrection story. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> painted this subject multiple times, using dramatic light to reveal the moment of recognition." }
  ],
  'rembrandt-christ-before-pilate': [
    { question: "What scale is this print?", answer: "This is one of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> most ambitious <strong>large-format etchings</strong>. The crowd scene before Pilate shows his ability to handle complex multi-figure compositions with dramatic light and shadow." }
  ],
  'gerard-van-honthorst-christ-before-the-high-priest': [
    { question: "Why is Honthorst called 'Gherardo delle Notti'?", answer: "<strong>Gerard van Honthorst</strong> was nicknamed \"Gherardo of the Nights\" in Italy for his <strong>candlelit scenes</strong>. This dramatic nighttime trial scene shows his mastery of artificial light, influenced by <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> tenebrism." }
  ],
  'raphael-christ-blessing': [
    { question: "When did Raphael paint this?", answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> painted this early in his career, around 1505. The gentle, idealized Christ shows the <strong>serene grace</strong> that would become his hallmark during the High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
  ],
  'giovanni-bellini-christ-blessing': [
    { question: "What was Giovanni Bellini's contribution to art?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a> transformed Venetian painting by introducing <strong>oil glazes and atmospheric light</strong>. His devotional images glow with a warmth that influenced Giorgione, Titian, and the entire Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
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
