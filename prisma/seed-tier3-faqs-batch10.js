const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 10: tier 3 artworks index 90-99
const newFaqs = {
  'piet-mondrian-at-work-on-the-land': [
    { question: "Did Mondrian paint landscapes?", answer: "Before his iconic abstract grids, <a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a> painted <strong>Dutch landscapes and farmland</strong>. His early figurative work shows a gradual evolution toward the geometric abstraction he later became famous for." }
  ],
  'edwin-landseer-attachment': [
    { question: "What subjects was Landseer famous for?", answer: "<a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Edwin Landseer</strong></a> was Victorian England's most popular <strong>animal painter</strong>. He's best remembered for his sentimental portrayals of dogs and Highland stags, and for sculpting the lions at Trafalgar Square." }
  ],
  'jean-baptiste-simeon-chardin-attributes-of-the-arts-with-a-bust-of-mercury': [
    { question: "What does this still life symbolize?", answer: "The objects represent the <strong>visual arts</strong>: drawing, painting, sculpture, and architecture. <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> arranged them as an allegorical tribute to artistic practice, rendered with his trademark quiet precision." }
  ],
  'francesco-guardi-audience-granted-by-the-doge': [
    { question: "What city did Guardi primarily paint?", answer: "<a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a> was a Venetian painter famous for his <strong>vedute (city views)</strong> and scenes of Venetian ceremonies. He captured the fading grandeur of 18th-century Venice with atmospheric, loose brushwork." }
  ],
  'edvard-munch-august-stindberg': [
    { question: "Who was August Strindberg?", answer: "<strong>August Strindberg</strong> was a Swedish playwright and author, one of the founders of modern drama. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> painted this portrait of his fellow Scandinavian, capturing the writer's intense, brooding personality." }
  ],
  'george-frederick-watts-augusta-lady-castletown': [
    { question: "What type of portraits did Watts paint?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>G.F. Watts</strong></a> painted portraits of prominent Victorians for his \"Hall of Fame\" project, aiming to record the <strong>great minds of his era</strong>. His subjects included politicians, scientists, artists, and society figures." }
  ],
  'piero-della-francesca-augustinian-saint': [
    { question: "What is Piero della Francesca known for?", answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> was an Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter and mathematician. His works feature <strong>geometric clarity, calm figures</strong>, and masterful use of perspective and light." }
  ],
  'edvard-munch-aunt-karen-in-the-rocking-chair': [
    { question: "Who was Aunt Karen to Munch?", answer: "<strong>Karen Bjølstad</strong> was <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch's</strong></a> maternal aunt who raised him and his siblings after their mother died of tuberculosis. She appears in several of his paintings as a quiet, domestic presence." }
  ],
  'jean-honore-fragonard-aurora-triumphing-over-night': [
    { question: "What style defines Fragonard's work?", answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> was a master of the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> style, known for <strong>playful, sensuous paintings</strong> with light brushwork and pastel tones. His career ended abruptly when the French Revolution made his aristocratic subjects unfashionable." }
  ],
  'van-gogh-austin-friars-church-london': [
    { question: "Did Van Gogh live in London?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> lived in <strong>London from 1873 to 1876</strong>, working for an art dealer. Austin Friars was a Dutch Reformed Church he attended. His time in England preceded his decision to become an artist." }
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
