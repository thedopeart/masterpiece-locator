const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 1: First 10 tier 3 artworks (append 1 FAQ to each, bringing total to 3)
// + musicians-caravaggio-met (slug mismatch fix)
const newFaqs = {
  'van-gogh-au-charbonnage-caf233': [
    { question: "When did Van Gogh paint Au Charbonnage Café?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> created this drawing in 1878 while living in the Borinage coal mining district of Belgium. He'd moved there as a lay preacher before deciding to become an artist." }
  ],
  'ernest-meissonier-1814-campagne-de-france-napoleon-and-his-staff-ret': [
    { question: "What does Meissonier's 1814 painting depict?", answer: "It shows <strong>Napoleon</strong> and his exhausted staff retreating through a bleak winter landscape after the Battle of Laon. <a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Meissonier</strong></a> spent years researching Napoleonic campaigns to achieve historical accuracy." }
  ],
  'raoul-dufy-4th-of-july': [
    { question: "What style is Raoul Dufy's 4th of July?", answer: "Dufy painted this in his signature <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a>-influenced style, using bright, loose brushwork to capture the festive energy of an American Independence Day celebration with <strong>flags and crowds</strong>." }
  ],
  'mary-cassatt-a-baby-smiling-at-two-young-women': [
    { question: "What movement was Mary Cassatt part of?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> was a key member of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> movement and one of only a few American artists in the group. She's known for her tender depictions of <strong>mothers and children</strong>." }
  ],
  'gabriel-metsu-a-baker-blowing-his-horn': [
    { question: "What is the baker doing in this painting?", answer: "The baker blows a <strong>horn to announce fresh bread</strong> is ready for sale. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> specialized in Dutch Golden Age genre scenes that captured everyday life in 17th-century Holland." }
  ],
  'frans-hals-a-banquet-of-the-officers-of-the-st-george-militia': [
    { question: "What type of painting is this?", answer: "It's a <strong>militia group portrait</strong>, a genre popular in the Dutch Golden Age. <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> painted several such commissions, showing officers of Haarlem's civic guard companies during celebratory banquets." }
  ],
  'rembrandt-a-beggar-and-a-companion-piece-turned-to-the-left': [
    { question: "What medium did Rembrandt use for this work?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created this as an <strong>etching</strong>, one of hundreds he produced throughout his career. His prints of beggars and street figures from the early 1630s show his interest in depicting people from all walks of life." }
  ],
  'rembrandt-a-beggar-and-a-companion-piece-turned-to-the-right': [
    { question: "Why did Rembrandt depict beggars?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> often sketched and etched <strong>figures from Amsterdam's streets</strong>, including beggars. These works weren't commissions. They reflect his genuine curiosity about people on the margins of Dutch society." }
  ],
  'rembrandt-a-beggar-standing-and-leaning-on-a-stick': [
    { question: "When did Rembrandt create his beggar etchings?", answer: "Most of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> beggar etchings date to the <strong>early 1630s</strong>, when he was still a young artist in Leiden. The raw, sympathetic portrayals contrast sharply with his polished commissioned portraits." }
  ],
  'rembrandt-a-beggar-warming-his-hands-over-a-chafing-dish': [
    { question: "What is a chafing dish?", answer: "A <strong>chafing dish</strong> is a portable container used to hold hot coals for warmth. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> captured this small, human detail of a beggar seeking warmth, showing his eye for everyday moments." }
  ],
  'musicians-caravaggio-met': [
    { question: "Where is Caravaggio's The Musicians displayed?", answer: "You can see it at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted it around 1595 for Cardinal Francesco Maria Del Monte, one of his earliest patrons." }
  ],
};

async function seed() {
  for (const [slug, addFaqs] of Object.entries(newFaqs)) {
    try {
      const artwork = await prisma.artwork.findUnique({ where: { slug }, select: { faqs: true } });
      if (!artwork) { console.error(`✗ Not found: ${slug}`); continue; }
      const existing = (artwork.faqs && Array.isArray(artwork.faqs)) ? artwork.faqs : [];
      const merged = [...existing, ...addFaqs];
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: merged, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}: ${existing.length} → ${merged.length} FAQs`);
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
    }
  }
  await prisma.$disconnect();
}
seed();
