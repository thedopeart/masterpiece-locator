const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 8: tier 3 artworks index 70-79
const newFaqs = {
  'gustave-courbet-after-dinner-at-ornans': [
    { question: "Why was this painting significant?", answer: "This 1849 work helped establish <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a> as a leader of <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a>. By showing <strong>ordinary people after a meal</strong> on a monumental scale usually reserved for history paintings, he challenged academic conventions." }
  ],
  'edouard-vuillard-after-the-ball': [
    { question: "What group was Vuillard part of?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Vuillard</strong></a> belonged to the <strong>Nabis</strong>, a Post-Impressionist group influenced by Gauguin. His intimate domestic scenes feature flattened patterns and muted colors that blur the line between figure and decoration." }
  ],
  'edgar-degas-after-the-bath': [
    { question: "Why did Degas paint so many bathers?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> produced hundreds of <strong>bather pastels and paintings</strong> in his later career. He was fascinated by capturing women in natural, unposed moments, often viewed from unusual angles that give the scenes a voyeuristic quality." }
  ],
  'mary-cassatt-after-the-bullfight': [
    { question: "Did Mary Cassatt paint bullfighting scenes?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted this during an early visit to Spain around 1873, before she settled into her signature <strong>mother-and-child subjects</strong>. Her Spanish works show the influence of Velázquez and Goya on her developing style." }
  ],
  'john-william-waterhouse-after-the-dance': [
    { question: "What literary sources inspired Waterhouse?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> drew from Greek mythology, Arthurian legend, and poetry by Keats and Tennyson. His paintings of <strong>beautiful women</strong> in classical settings made him one of the most popular <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a>-influenced artists." }
  ],
  'adolph-menzel-afternoon-in-the-tuileries-gardens': [
    { question: "What was Adolph Menzel known for?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> was Germany's most prominent <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> painter in the 19th century. His <strong>detailed observation</strong> of modern life, from factories to Parisian gardens, earned comparisons to French Impressionists." }
  ],
  'akseli-gallen-kallela-aino-myth-triptych': [
    { question: "What is the Aino myth?", answer: "The <strong>Aino myth</strong> comes from Finland's national epic, the Kalevala. <a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela</strong></a> depicted the story of the maiden Aino, who drowns herself rather than marry the old sage Väinämöinen, in this iconic Finnish painting." }
  ],
  'albrecht-durer-albrecht-durer-the-elder': [
    { question: "Who is the subject of this portrait?", answer: "It depicts <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer's</strong></a> father, a <strong>goldsmith from Nuremberg</strong>. The elder Dürer trained his son in metalworking before the young artist turned to painting and printmaking, becoming the greatest Northern Renaissance artist." }
  ],
  'rembrandt-alexander-the-great': [
    { question: "Did Rembrandt paint many historical figures?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> frequently painted <strong>biblical and historical subjects</strong>, giving ancient figures a sense of real human presence. His Alexander reflects the same psychological depth he brought to his commissioned portraits." }
  ],
  'alexandre-cabanel-alfred-bruyas': [
    { question: "Who was Alfred Bruyas?", answer: "<strong>Alfred Bruyas</strong> was a wealthy French art collector and patron who supported many 19th-century painters. <a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Cabanel</strong></a> painted this portrait of one of his era's most important art collectors, whose collection now resides in the Musée Fabre, Montpellier." }
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
