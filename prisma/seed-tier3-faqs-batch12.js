const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 12: tier 3 artworks index 110-119
const newFaqs = {
  'isaac-levitan-autumn-leaves': [
    { question: "Why is Levitan important to Russian art?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> developed the \"mood landscape\" genre in Russian painting, conveying <strong>emotional states through nature</strong>. Chekhov considered him Russia's finest landscape artist, and his autumn scenes remain icons of Russian culture." }
  ],
  'autumn-hudson-river': [
    { question: "What does this painting show?", answer: "It shows the <strong>Hudson River valley in autumn</strong> with sweeping views of colorful foliage. Jasper Francis Cropsey was a Hudson River School painter known for his vivid depictions of American fall landscapes." }
  ],
  'isaac-levitan-autumn-road-in-a-village': [
    { question: "What atmosphere does this painting convey?", answer: "<a href=\"/apps/masterpieces/artist/isaac-levitan\"><strong>Levitan</strong></a> captured the <strong>quiet melancholy of rural Russia</strong> with muddy roads and overcast skies. His village scenes show an honest, unglamorous countryside that resonated with Russian literary realism." }
  ],
  'nicolas-poussin-bacchanal-of-putti': [
    { question: "What is a bacchanal?", answer: "A <strong>bacchanal</strong> is a scene of revelry inspired by Bacchus, the Roman god of wine. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted playful putti (cherubs) in this lighthearted classical scene, combining his love of antiquity with <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> energy." }
  ],
  'joaquin-sorolla-bacchante': [
    { question: "What light effects is Sorolla known for?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> was a master of painting <strong>Mediterranean sunlight</strong>. His works shimmer with reflected light on skin, water, and white fabric, earning him the nickname \"painter of light\" among Spanish <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>." }
  ],
  'michelangelo-bacchus': [
    { question: "What type of work is Michelangelo's Bacchus?", answer: "It's a life-size <strong>marble sculpture</strong> carved in 1496-97, one of <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo's</strong></a> earliest major works. The swaying, intoxicated Roman god of wine was considered shocking for its realistic depiction of drunkenness." }
  ],
  'back-view-venus': [
    { question: "Who was Jules Pascin?", answer: "<strong>Jules Pascin</strong> was a Bulgarian-American artist associated with the School of Paris. Known for his delicate, sensual <a href=\"/apps/masterpieces/movement/expressionism\"><strong>figurative work</strong></a>, he painted nudes and bohemian life with soft, translucent watercolor-like technique." }
  ],
  'otto-mueller-badende': [
    { question: "What group did Otto Mueller belong to?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Otto Mueller</strong></a> was a member of <strong>Die Brücke</strong> (The Bridge), a German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> group. His bathers in natural settings reflect his interest in harmony between the human figure and landscape." }
  ],
  'otto-mueller-badende-in-braun': [
    { question: "What medium did Mueller often use?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> frequently worked with <strong>distemper on burlap</strong>, giving his paintings a matte, earthy quality. His muted browns and greens create a sense of figures merging naturally with their surroundings." }
  ],
  'otto-mueller-badeszene-mit-vier-figuren-haus-und-boot-nach-rech': [
    { question: "What subjects did Mueller prefer?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> repeatedly painted <strong>nudes in landscapes</strong>, often bathers by lakes and rivers. His simplified, angular figures and earthy palette distinguish his work from the bolder colors of other <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionists</strong></a>." }
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
