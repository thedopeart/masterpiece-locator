const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 4: tier 3 artworks index 30-39
const newFaqs = {
  'william-merritt-chase-a-fishmarket-in-venice-aka-venetian-fish-market-th': [
    { question: "Where did William Merritt Chase study?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>Chase</strong></a> trained in Munich before becoming a leading American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a>. His Venice paintings capture the city's <strong>markets and canals</strong> with bold, confident brushwork." }
  ],
  'john-william-waterhouse-a-flower-stall': [
    { question: "What themes defined Waterhouse's work?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>J.W. Waterhouse</strong></a> blended <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> detail with classical and literary themes. While known for mythological <strong>women</strong>, he also painted charming everyday scenes like this flower stall." }
  ],
  'adriaen-van-ostade-a-frozen-lake': [
    { question: "Were winter scenes common in Dutch art?", answer: "Winter landscapes were a popular genre during the <strong>Dutch Golden Age</strong>, especially depicting frozen canals and lakes. <a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> contributed to this tradition alongside painters like Hendrick Avercamp." }
  ],
  'albert-joseph-moore-a-garden': [
    { question: "What style is Albert Moore associated with?", answer: "<a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Albert Moore</strong></a> was part of the <strong>Aesthetic Movement</strong>, which valued beauty for its own sake. His paintings feature women in classical drapery arranged in harmonious, decorative compositions." }
  ],
  'eustache-le-sueur-a-gathering-of-friends': [
    { question: "What period did Eustache Le Sueur work in?", answer: "<a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Le Sueur</strong></a> was a French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter active in the mid-1600s. Sometimes called the \"French Raphael,\" he favored <strong>classical elegance</strong> over dramatic Baroque intensity." }
  ],
  'giovanni-battista-moroni-a-gentleman-in-adoration-before-the-madonna': [
    { question: "What was Moroni best known for?", answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-moroni\"><strong>Moroni</strong></a> was one of the finest <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> portrait painters. His <strong>realistic, psychologically penetrating portraits</strong> of Bergamo's nobility influenced later generations of portraitists." }
  ],
  'frederic-leighton-a-girl-feeding-peacocks': [
    { question: "Who was Frederic Leighton?", answer: "<a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Lord Leighton</strong></a> was president of the Royal Academy and a leading Victorian painter. His <strong>classical subjects</strong> feature rich colors and idealized beauty, often depicting women in ancient Mediterranean settings." }
  ],
  'gerard-ter-borch-a-guard-room-interior-with-a-soldier-blowing-smoke': [
    { question: "What type of scene is this?", answer: "This is a <strong>guardroom scene</strong>, a popular Dutch Golden Age genre showing soldiers at leisure. <a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> was known for his refined technique and ability to render fabrics with near-photographic detail." }
  ],
  'william-hogarth-a-harlot39s-progress-plate-2': [
    { question: "What is A Harlot's Progress about?", answer: "It's a series of six engravings telling the <strong>moral downfall</strong> of a young woman in London. <a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> used satirical narrative art to comment on 18th-century English society, vice, and corruption." }
  ],
  'van-gogh-a-house-magros': [
    { question: "Where is Magros?", answer: "<strong>Magros</strong> is a location in the south of France. <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted many rural houses and landscapes during his time in Provence, capturing their sun-drenched walls and vibrant surroundings." }
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
