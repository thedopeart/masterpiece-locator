const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 16: tier 3 artworks index 150-159
const newFaqs = {
  'albert-joseph-moore-battledore': [
    { question: "What is battledore?", answer: "<strong>Battledore</strong> is an early form of badminton played with wooden paddles. <a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Albert Moore</strong></a> used the game as a pretext for painting classically draped women in graceful poses, typical of the Aesthetic Movement." }
  ],
  'albert-bierstadt-bavarian-landscape': [
    { question: "What was Bierstadt known for?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a> was a German-American painter famous for <strong>grand landscapes of the American West</strong>. Before his Western expeditions, he also painted European scenery including the Bavarian Alps." }
  ],
  'amedeo-modigliani-bearded-man': [
    { question: "What defines Modigliani's portrait style?", answer: "<a href=\"/apps/masterpieces/artist/amedeo-modigliani\"><strong>Modigliani</strong></a> is instantly recognizable for his <strong>elongated faces and necks</strong>, almond-shaped eyes, and simplified forms. His portraits blend African sculpture, Brancusi's influence, and Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> tradition." }
  ],
  'beat-whites-red-wedge': [
    { question: "What is this poster about?", answer: "This 1919 propaganda poster uses <strong>abstract geometric shapes</strong> to represent the Russian Civil War: the red wedge symbolizes the Bolsheviks breaking through the White Army. El Lissitzky created it as a pioneering work of <a href=\"/apps/masterpieces/movement/constructivism\"><strong>Constructivist</strong></a> design." }
  ],
  'francisco-de-zurbaran-beato-serapio': [
    { question: "Who was Beato Serapio?", answer: "<strong>Blessed Serapion</strong> was a 13th-century Mercedarian friar martyred in Algiers. <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a> painted this powerful depiction of his martyrdom with stark lighting typical of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious painting." }
  ],
  'maurice-denis-beauty-in-the-autumn-wood': [
    { question: "What group did Maurice Denis belong to?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Maurice Denis</strong></a> was a founding member of the <strong>Nabis</strong>, a Post-Impressionist group. He famously declared that a painting is \"essentially a flat surface covered with colors assembled in a certain order.\"" }
  ],
  'max-liebermann-beer-garden-in-munich': [
    { question: "Why is this painting famous?", answer: "This 1884 painting established <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> as Germany's leading <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a>. The <strong>dappled sunlight through trees</strong> over a crowded beer garden became one of the most popular images in German art." }
  ],
  'edgar-degas-before-the-race': [
    { question: "What viewpoint did Degas choose for horse racing scenes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> favored moments <strong>before and after races</strong> rather than the race itself. Jockeys warming up, horses being led to the start, and the nervous energy of preparation appealed to his interest in unscripted movement." }
  ],
  'william-hogarth-before-the-seduction-and-after': [
    { question: "What was Hogarth's approach to storytelling?", answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a> invented the \"<strong>modern moral subject</strong>,\" using sequential paintings and prints to tell cautionary tales about 18th-century London society, vice, and hypocrisy." }
  ],
  'rembrandt-beggar-in-a-high-cap-standing': [
    { question: "Why are Rembrandt's beggar prints collected?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> beggar etchings are prized for their <strong>spontaneous, empathetic line work</strong>. Even in his lifetime, collectors sought these small prints, which show his ability to capture character in just a few strokes." }
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
