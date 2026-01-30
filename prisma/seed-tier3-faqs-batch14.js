const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 14: tier 3 artworks index 130-139
const newFaqs = {
  'francis-picabia-bank-at-poissy': [
    { question: "What was Picabia's early style?", answer: "<a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Picabia</strong></a> began as a <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Post-Impressionist</strong></a> landscape painter before radically shifting to <strong>abstract and Dada art</strong>. His early riverside scenes show a talent for light and atmosphere." }
  ],
  'camille-pissarro-banks-of-a-river-with-barge': [
    { question: "What role did Pissarro play in Impressionism?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> was the only artist who exhibited at all eight <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> exhibitions. His <strong>river and rural scenes</strong> defined the movement's focus on everyday outdoor subjects." }
  ],
  'francis-picabia-banks-of-the-orne-at-benouville': [
    { question: "Where is Benouville?", answer: "<strong>Benouville</strong> is a village in Normandy along the River Orne. <a href=\"/apps/masterpieces/artist/francis-picabia\"><strong>Picabia</strong></a> painted several Normandy landscapes early in his career, following in the footsteps of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>." }
  ],
  'frans-hals-banquet-of-the-officers-of-the-st-george-civic-gua': [
    { question: "How many civic guard portraits did Hals paint?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> painted <strong>five major civic guard group portraits</strong> in Haarlem between 1616 and 1639. Each shows officers at banquets, capturing their personalities with his characteristically loose brushwork." }
  ],
  'banquet-piece-mince-pie': [
    { question: "What is a banquet piece?", answer: "A <strong>banquet piece</strong> (banketje) is a Dutch Golden Age still life genre showing lavish table settings with food and fine objects. Willem Claesz. Heda was a master of this style, rendering silver, glass, and food textures with photographic precision." }
  ],
  'piero-della-francesca-baptism-of-christ': [
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> painted it around 1448-50 for a church in his hometown of Borgo Sansepolcro, using his trademark <strong>geometric clarity and pale light</strong>." }
  ],
  'piero-della-francesca-baptism-of-christ-detail': [
    { question: "What makes Piero's Baptism distinctive?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero</strong></a> used <strong>mathematical proportions</strong> to structure the composition. The central tree divides the panel precisely, and Christ stands at the exact center, reflecting Piero's dual expertise in painting and geometry." }
  ],
  'andrea-del-sarto-baptism-of-the-people': [
    { question: "Who was Andrea del Sarto?", answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> was a Florentine <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter known as the \"faultless painter\" for his <strong>technical perfection</strong>. He bridged the High Renaissance and Mannerism with graceful, richly colored compositions." }
  ],
  'adriaen-van-ostade-barber-extracting-of-tooth': [
    { question: "Were tooth-pulling scenes common in art?", answer: "<strong>Tooth extraction</strong> was a popular subject in Dutch genre painting, often shown as a comical or painful scene. <a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> depicted barber-surgeons at work, reflecting the era when barbers performed minor surgeries." }
  ],
  'camille-pissarro-barges-at-le-roche-guyon': [
    { question: "Where is La Roche-Guyon?", answer: "<strong>La Roche-Guyon</strong> is a village on the Seine northwest of Paris. <a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> painted many Seine river scenes, capturing barges and reflections with the soft, broken brushwork of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." }
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
