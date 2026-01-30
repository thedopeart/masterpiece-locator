const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 18: tier 3 artworks index 170-179
const newFaqs = {
  'pieter-bruegel-elder-big-fishes-eat-small-fishes': [
    { question: "What does this image represent?", answer: "It's a <strong>visual proverb</strong> about the powerful consuming the weak. <a href=\"/apps/masterpieces/artist/pieter-bruegel-the-elder\"><strong>Pieter Bruegel the Elder</strong></a> often used Flemish proverbs as subjects, combining humor and moral commentary in densely detailed prints." }
  ],
  'gustave-caillebotte-billiards': [
    { question: "What was Caillebotte's role in Impressionism?", answer: "<a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Caillebotte</strong></a> was both an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painter and the movement's most important patron. He collected works by Monet, Renoir, and Degas, and his <strong>modern urban scenes</strong> used bold perspective." }
  ],
  'emanuel-leutze-bird-nesting': [
    { question: "What is Emanuel Leutze best known for?", answer: "<strong>Emanuel Leutze</strong> is best remembered for \"Washington Crossing the Delaware.\" A German-American painter, he specialized in <strong>American historical subjects</strong>, though he also painted genre scenes like this one." }
  ],
  'francisco-de-zurbaran-birth-of-the-virgin': [
    { question: "What was Zurbarán's specialty?", answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a> excelled at painting <strong>monastic and religious subjects</strong> with stark, dramatic lighting. His still lifes and devotional works for Spanish monasteries define the contemplative side of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting." }
  ],
  'perugino-birth-of-the-virgin': [
    { question: "Where did Perugino work?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> worked primarily in <strong>Perugia and Florence</strong>, and also contributed to the Sistine Chapel. His calm, balanced compositions with gentle landscapes were widely admired and directly shaped young Raphael's early style." }
  ],
  'alphonse-mucha-biscuits-champagne-lef232vre-utile': [
    { question: "What design style did Mucha create?", answer: "<a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Alphonse Mucha</strong></a> defined the <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> poster style with <strong>flowing lines, floral motifs</strong>, and idealized women. His commercial designs for biscuits, champagne, and theater became icons of Belle Époque Paris." }
  ],
  'alphonse-mucha-biscuits-lefevre-utile': [
    { question: "Who commissioned Mucha's commercial posters?", answer: "<strong>Lefèvre-Utile</strong> was a French biscuit company that hired <a href=\"/apps/masterpieces/artist/alphonse-mucha\"><strong>Mucha</strong></a> for advertising. His decorative <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> designs turned commercial posters into collectible art." }
  ],
  'otto-mueller-blaue-badende': [
    { question: "What does the title mean?", answer: "\"<strong>Blaue Badende</strong>\" translates to \"Blue Bathers\" in German. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Otto Mueller</strong></a> used cool blue tones in this <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> bathing scene, contrasting with his typically earthy palette." }
  ],
  'bernardino-luini-blessing-christ': [
    { question: "How closely did Luini follow Leonardo?", answer: "<a href=\"/apps/masterpieces/artist/bernardino-luini\"><strong>Luini</strong></a> adopted Leonardo's <strong>sfumato technique</strong> so faithfully that some of his works were once attributed to Leonardo himself. His soft, gentle Christ figures show this Milanese master at his most devotional." }
  ],
  'robert-campin-blessing-christ-and-praying-virgin': [
    { question: "What technique did Campin pioneer?", answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> was among the first to use <strong>oil paint for detailed realism</strong> in the early 15th century. His works place sacred figures in convincingly rendered domestic interiors, a hallmark of Early Netherlandish painting." }
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
