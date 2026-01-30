const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 32: tier 3 index 310-319
const newFaqs = {
  'camille-corot-civita-castellana-buildings-high-in-the-rocks-la-p': [
    { question: "Why did Corot visit Italy?", answer: "<a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Corot</strong></a> made three trips to Italy, sketching <strong>ancient towns and rocky landscapes</strong> en plein air. His Italian studies at Civita Castellana show the direct, luminous observation that later influenced the Impressionists." }
  ],
  'edward-burne-jones-clara-von-bork': [
    { question: "Who was Clara von Bork?", answer: "<strong>Clara von Bork</strong> was a legendary Pomeranian noblewoman accused of witchcraft. <a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> painted her as a beautiful but sinister figure, reflecting the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> fascination with femmes fatales." }
  ],
  'william-holman-hunt-claudio-and-isabella': [
    { question: "What Shakespeare play is referenced?", answer: "The scene is from <strong>Measure for Measure</strong>, where Claudio begs his sister Isabella to sacrifice her virtue to save his life. <a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>Hunt</strong></a> painted literary subjects with <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> moral intensity." }
  ],
  'paul-gauguin-clearing': [
    { question: "Where did Gauguin paint landscapes?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted landscapes in <strong>Brittany, Martinique, and Tahiti</strong>. His clearings and forest scenes use flat color areas and bold outlines that broke from Impressionism toward Symbolism." }
  ],
  'edward-burne-jones-clerk-saunders': [
    { question: "What is Clerk Saunders?", answer: "\"<strong>Clerk Saunders</strong>\" is a Scottish border ballad about a murdered lover whose ghost returns. <a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> often drew on medieval ballads and legends for his haunting, dreamlike <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> paintings." }
  ],
  'eustache-le-sueur-clio-euterpe-and-thalia': [
    { question: "Who are the Muses in this painting?", answer: "<strong>Clio</strong> (history), <strong>Euterpe</strong> (music), and <strong>Thalia</strong> (comedy) are three of the nine Greek Muses. <a href=\"/apps/masterpieces/artist/eustache-le-sueur\"><strong>Le Sueur</strong></a> painted them as part of a decorative series for a Parisian mansion." }
  ],
  'joshua-reynolds-clotworthy-skeffington-later-1st-earl-of-massereen': [
    { question: "What was Joshua Reynolds's role in British art?", answer: "<a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Joshua Reynolds</strong></a> was the first president of the Royal Academy and Britain's leading <strong>portrait painter</strong>. He elevated portraiture by incorporating classical poses and grand manner compositions." }
  ],
  'van-gogh-coal-shoveler': [
    { question: "When did Van Gogh draw laborers?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> drew <strong>miners, weavers, and laborers</strong> during his early years in Belgium and the Netherlands (1880-85). These dark, empathetic works reflect his social conscience before he discovered color in Paris." }
  ],
  'van-gogh-coalmine-in-the-borinage': [
    { question: "What was the Borinage?", answer: "The <strong>Borinage</strong> is a coal mining region in southern Belgium where <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> worked as a lay preacher in 1878-79. Witnessing miners' suffering deeply affected him and shaped his commitment to depicting working people." }
  ],
  'claude-lorrain-coast-scene-with-europa-and-the-bull': [
    { question: "What was Claude Lorrain known for?", answer: "<strong>Claude Lorrain</strong> was the greatest <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> landscape painter, famous for <strong>golden-lit harbor and pastoral scenes</strong>. His idealized Italian landscapes influenced English landscape painting for over a century." }
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
