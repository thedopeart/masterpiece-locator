const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 40: tier 3 index 390-399
const newFaqs = {
  'adriaen-van-ostade-dancing-couple-and-merry-company-in-an-interior': [
    { question: "What mood do Van Ostade's dance scenes convey?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade's</strong></a> dancing scenes radiate <strong>communal joy and warmth</strong>. His peasant celebrations show people enjoying music and movement in candlelit tavern interiors, celebrating the simple pleasures of Dutch village life." }
  ],
  'adriaen-van-ostade-dancing-farmers': [
    { question: "How were peasant scenes viewed in the Golden Age?", answer: "Dutch <strong>peasant genre paintings</strong> served as both entertainment and moral commentary. <a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade's</strong></a> dancing farmers could be read as celebrating honest folk or as gentle warnings about excess." }
  ],
  'albert-joseph-moore-dancing-girl-resting': [
    { question: "What was Moore's relationship to classical art?", answer: "<a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Moore</strong></a> dedicated his career to painting <strong>women in classical drapery</strong> arranged in harmonious compositions. He cared less about narrative than about achieving perfect balance of form, color, and decorative beauty." }
  ],
  'rembrandt-daniel-and-king-cyrus-in-front-of-the-idol-of-bel': [
    { question: "What story is depicted?", answer: "From the Book of Daniel: <strong>Daniel proves to King Cyrus</strong> that the idol Bel doesn't actually eat the food offerings. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> drew on obscure biblical stories that let him explore human deception and revelation." }
  ],
  'thomas-cole-daniel-boone-sitting-at-the-door-of-his-cabin-on-t': [
    { question: "Why did Cole paint Daniel Boone?", answer: "<a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> depicted the American frontiersman as a <strong>solitary figure in the wilderness</strong>. Boone embodied the Romantic ideal of man communing with nature, a central theme of the Hudson River School." }
  ],
  'gustave-dore-daniel-interpreting-the-writing-on-the-wall': [
    { question: "What is the writing on the wall?", answer: "In the Book of Daniel, mysterious words \"<strong>Mene, Mene, Tekel, Upharsin</strong>\" appear during Belshazzar's feast, foretelling Babylon's fall. <a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Doré</strong></a> illustrated this dramatic biblical scene for his 1866 Bible." }
  ],
  'william-adolphe-bouguereau-dante-and-virgil': [
    { question: "What scene from Dante is depicted?", answer: "<a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> painted <strong>two damned souls fighting</strong> in Hell while Dante and Virgil watch. The technical perfection of the struggling nude figures showcases his academic mastery and won him early fame." }
  ],
  'edgar-degas-dante-and-virgil-at-the-entrance-to-hell': [
    { question: "Did Degas paint historical subjects?", answer: "Early in his career, <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted <strong>historical and literary subjects</strong> in the academic tradition. He later abandoned these for modern Parisian life, but his early training in composition shaped all his later work." }
  ],
  'frederic-leighton-dante-in-exile': [
    { question: "Why was Dante exiled?", answer: "<strong>Dante Alighieri</strong> was exiled from Florence in 1302 for political reasons and never returned. <a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Leighton</strong></a> depicted the poet in exile, a subject that resonated with Victorian admiration for literary genius and suffering." }
  ],
  'otto-mueller-das-gro223e-paar': [
    { question: "What does the title mean?", answer: "\"<strong>Das Große Paar</strong>\" means \"The Large Couple\" in German. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> couples are rendered with angular simplicity, their bodies merging with the landscape in earth-toned harmony." }
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
