const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 20: tier 3 index 190-199
const newFaqs = {
  'george-bellows-both-members-of-this-club': [
    { question: "What does this boxing painting depict?", answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>George Bellows</strong></a> painted this <strong>interracial boxing match</strong> in 1909. The title is ironic, referencing a club that excluded Black members, while showing both fighters as equals in the ring." }
  ],
  'juan-gris-bottles-and-knife': [
    { question: "What style is this painting?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Juan Gris</strong></a> was a leading <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> who developed <strong>Synthetic Cubism</strong>, using flat, colored shapes and collage elements to represent objects from multiple viewpoints simultaneously." }
  ],
  'boulevard-montmartre-night': [
    { question: "What makes this night scene special?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> painted this from a hotel window above <strong>Boulevard Montmartre</strong> in 1897. The gaslit street creates a shimmering nocturnal atmosphere, making it one of his most popular <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> views." }
  ],
  'henri-fantin-latour-bouquet-of-flowers': [
    { question: "How were Fantin-Latour's flower paintings received?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour's</strong></a> floral still lifes were hugely popular with <strong>English collectors</strong>, who bought them regularly through dealers. His careful, realistic approach to flowers contrasted with his more experimental friends like Manet and Monet." }
  ],
  'paul-gauguin-bouquet-of-peonies-on-a-musical-score': [
    { question: "Did Gauguin paint still lifes?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted still lifes early in his career before his famous South Pacific period. This <strong>peony arrangement on sheet music</strong> shows the influence of Cézanne and Manet on his developing Post-Impressionist style." }
  ],
  'edgar-degas-bowing-dancer': [
    { question: "How did Degas compose his dance scenes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> used <strong>asymmetric compositions and cropped figures</strong> inspired by Japanese prints and photography. A dancer bowing at the edge of the stage creates an informal, snapshot-like feeling." }
  ],
  'caravaggio-boy-bitten-by-a-lizard': [
    { question: "What makes this early Caravaggio notable?", answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted this around 1594 as one of his early genre works. The boy's <strong>startled expression</strong> shows his gift for capturing fleeting emotion, a skill that would define his revolutionary <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." }
  ],
  'caspar-david-friedrich-boy-sleeping-on-a-grave': [
    { question: "What themes recur in Friedrich's work?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> repeatedly explored <strong>death, solitude, and the passage of time</strong>. A child sleeping on a grave combines innocence with mortality, a characteristic <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> meditation on life's impermanence." }
  ],
  'joaquin-sorolla-boy-with-a-ball': [
    { question: "Where did Sorolla paint many of his beach scenes?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted extensively on the beaches of <strong>Valencia</strong>, his home city. His images of children playing in surf and sunlight are among the most joyful works of Spanish <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." }
  ],
  'akseli-gallen-kallela-boy-with-a-crow': [
    { question: "What is Gallen-Kallela's importance to Finland?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela</strong></a> is Finland's <strong>national artist</strong>, famous for paintings based on the Kalevala epic. His early realist works like this boy portrait show his training before he turned to Finnish mythology." }
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
