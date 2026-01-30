const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 38: tier 3 index 370-379
const newFaqs = {
  'artemisia-gentileschi-danae': [
    { question: "What myth does Danaë depict?", answer: "In Greek myth, <strong>Danaë</strong> was imprisoned by her father but visited by Zeus as a shower of gold. <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Artemisia Gentileschi</strong></a> painted this popular <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> subject with her characteristic female strength." }
  ],
  'adriaen-van-ostade-dance-at-the-inn': [
    { question: "What atmosphere do Van Ostade's inn scenes capture?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade's</strong></a> tavern dances show <strong>peasants celebrating with music and drink</strong>. His warm, golden interiors capture the lively communal spirit of Dutch village life during the Golden Age." }
  ],
  'edgar-degas-dance-opera': [
    { question: "What venue did Degas frequent?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> had a subscription to the <strong>Paris Opera</strong>, giving him backstage access to rehearsals and performances. This privileged view shaped his iconic depictions of dancers at work." }
  ],
  'edgar-degas-dancer-in-green-tutu': [
    { question: "Why did Degas love pastels?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> increasingly used <strong>pastels</strong> in his later career because they combined drawing and color. Their chalky brilliance let him capture the vivid greens and pinks of ballet costumes." }
  ],
  'edgar-degas-dancer-in-her-dressing-room': [
    { question: "What private moments did Degas capture?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> showed dancers in <strong>private, unguarded moments</strong>: adjusting costumes, stretching, resting. These backstage glimpses contrast with the polished performances the public sees." }
  ],
  'edgar-degas-dancer-in-pink-dress': [
    { question: "How did Degas use color in his dancer works?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> used <strong>pink, green, and blue tutus</strong> as opportunities for vibrant color studies. The costumes become abstract patches of color against the warm tones of rehearsal room floors." }
  ],
  'edgar-degas-dancer-resting': [
    { question: "What makes Degas's resting dancers interesting?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> found <strong>resting dancers</strong> as compelling as performing ones. The contrast between the demanding physicality of ballet and the exhausted relaxation between routines fascinated him throughout his career." }
  ],
  'edgar-degas-dancer-seen-from-behind-and-3-studies-of-feet': [
    { question: "Did Degas make anatomical studies?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> filled sketchbooks with <strong>studies of feet, hands, and poses</strong>. His careful observation of dancers' bodies in motion gave his finished works their convincing naturalism." }
  ],
  'edgar-degas-dancer-with-a-fan': [
    { question: "What props appear in Degas's dance scenes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> included props like <strong>fans, bouquets, and ribbons</strong> in his dancer compositions. These objects add color accents and tell stories about the social rituals surrounding ballet performances." }
  ],
  'edgar-degas-dancers-at-the-old-opera-house': [
    { question: "Which opera house did Degas depict?", answer: "Degas painted at both the old <strong>Rue Le Peletier Opera</strong> (destroyed by fire in 1873) and the new Palais Garnier. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>His</strong></a> scenes capture the transition between these two iconic Parisian venues." }
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
