const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 56: tier 3 index 670-687 (18 artworks - FINAL BATCH)
const newFaqs = {
  'juan-gris-grapes': [
    { question: "How did Juan Gris approach still life?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Juan Gris</strong></a> painted still lifes with <strong>precise geometric structure</strong> and rich color. His Synthetic Cubist approach built forms from flat, overlapping planes rather than fragmenting them like early Cubism." }
  ],
  'georges-seurat-grassy-riverbank': [
    { question: "What role did landscapes play in Seurat's work?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat's</strong></a> landscape studies along <strong>Parisian riverbanks</strong> tested his color theories in natural settings. These smaller works informed the carefully planned compositions of his large exhibition paintings." }
  ],
  'viktor-vasnetsov-grave-digger': [
    { question: "Who was Viktor Vasnetsov?", answer: "<strong>Viktor Vasnetsov</strong> was a Russian painter known for <strong>fairy-tale and historical subjects</strong>. He helped establish a distinctly Russian national style, drawing from folklore, medieval history, and the Orthodox tradition." }
  ],
  'pierre-puvis-de-chavannes-greek-colony-marseille': [
    { question: "What was Puvis de Chavannes's style?", answer: "<strong>Puvis de Chavannes</strong> painted large <strong>mural-like compositions</strong> with flat, muted colors and classical subjects. His simplified style influenced Post-Impressionists like Gauguin and the Nabis group." }
  ],
  'jean-leon-gerome-greek-interior-gyneceum': [
    { question: "What is a gyneceum?", answer: "A <strong>gyneceum</strong> was the women's quarters in an ancient Greek house. <a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gérôme</strong></a> recreated classical interiors with archaeological accuracy, imagining daily life in ancient Greece with vivid detail." }
  ],
  'claude-monet-grove-of-olive-trees-in-bordighera': [
    { question: "What attracted Monet to olive trees?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> was fascinated by the <strong>silver-green foliage of Mediterranean olives</strong> during his 1884 Italian trip. Their twisted trunks and shimmering leaves offered new challenges for his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> palette." }
  ],
  'david-teniers-younger-guardroom': [
    { question: "What are guardroom scenes?", answer: "<strong>David Teniers the Younger</strong> popularized the <strong>guardroom genre</strong>, showing soldiers at rest surrounded by armor and weapons. These scenes combined still life, genre painting, and military themes in a distinctly Flemish tradition." }
  ],
  'hyacinthe-rigaud-gueidan': [
    { question: "What defines Rigaud's portrait style?", answer: "<strong>Hyacinthe Rigaud</strong> created <strong>grand, theatrical portraits</strong> that emphasized wealth and social status through luxurious fabrics, dramatic poses, and classical settings. He was the preferred portraitist of the French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> court." }
  ],
  'juan-gris-guitar-and-glass': [
    { question: "Why did Cubists paint guitars so often?", answer: "The <strong>guitar's curved body and flat neck</strong> offered ideal forms for Cubist exploration. <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> used musical instruments to demonstrate how objects can be simultaneously viewed from multiple angles." }
  ],
  'juan-gris-guitar-and-glasses-banjo-and-glasses': [
    { question: "What is Synthetic Cubism?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> was a master of <strong>Synthetic Cubism</strong>, which builds images from flat shapes and collage elements rather than breaking objects apart. His compositions are more colorful and legible than Analytic Cubism." }
  ],
  'edouard-manet-guitar-and-hat': [
    { question: "What still life objects did Manet favor?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> painted <strong>Spanish-themed still lifes</strong> reflecting his admiration for Velázquez and Goya. Guitars, hats, and cloaks evoked the romance of Spain that fascinated 19th-century French artists." }
  ],
  'juan-gris-guitar-and-pipe': [
    { question: "How did Gris use color in Cubism?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> brought <strong>rich, harmonious color</strong> to Cubism, moving beyond the muted browns and grays of Picasso and Braque's early experiments. His palette gives Cubist compositions warmth and visual clarity." }
  ],
  'juan-gris-guitar-on-a-chair': [
    { question: "What everyday objects did Gris paint?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> focused on <strong>café objects</strong>: guitars, glasses, newspapers, pipes, and fruit bowls. These familiar items become vehicles for exploring how we perceive three-dimensional form on a flat surface." }
  ],
  'juan-gris-guitar-on-the-table': [
    { question: "How does Gris differ from Picasso's Cubism?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> worked with <strong>more rigorous geometry and cleaner color</strong> than Picasso. He described his method as \"deductive,\" starting from abstract forms and arriving at recognizable objects, the reverse of Picasso's approach." }
  ],
  'joaquin-sorolla-guitar-players-valencia': [
    { question: "How did Sorolla capture Spanish light?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted Valencian scenes with <strong>brilliant Mediterranean sunlight</strong> and bold, loose brushwork. His outdoor paintings capture the warmth and vitality of Spanish daily life with dazzling luminosity." }
  ],
  'adolph-menzel-guitarist': [
    { question: "What range of subjects did Menzel paint?", answer: "<strong>Adolph Menzel</strong> painted everything from <strong>royal courts to everyday street scenes</strong>. His ability to capture figures in natural, unposed moments made him Germany's most important realist painter of the 19th century." }
  ],
  'edouard-manet-gypsy-with-a-cigarette': [
    { question: "How did Manet handle unconventional subjects?", answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> painted <strong>marginal social figures</strong> with the same dignity as aristocrats. His direct, unflinching approach to unconventional subjects helped establish modern painting's rejection of academic hierarchies." }
  ],
  'paul-delaroche-h233micycle-central-section': [
    { question: "What is the Hémicycle?", answer: "<strong>Delaroche's Hémicycle</strong> is a massive mural in the École des Beaux-Arts in Paris, depicting <strong>75 great artists throughout history</strong>. This ambitious work took four years to complete and remains one of the most famous academic paintings." }
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
