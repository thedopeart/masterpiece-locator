const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 44: tier 3 index 430-449 (20 artworks)
const newFaqs = {
  'deposition-pontormo': [
    { question: "What makes Pontormo's Deposition distinctive?", answer: "<strong>Pontormo's</strong> Deposition is a masterwork of <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>. The figures float in an <strong>ambiguous, weightless space</strong> with electric pastel colors, creating an otherworldly emotional intensity." }
  ],
  'paolo-veronese-deposition-of-christ': [
    { question: "What was Veronese known for?", answer: "<a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Paolo Veronese</strong></a> was famous for <strong>luminous color and grand compositions</strong>. His religious and mythological paintings feature rich fabrics, classical architecture, and a festive quality that defined Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." }
  ],
  'quentin-matsys-der-kanonikus-stephan-gardiner': [
    { question: "What does this portrait depict?", answer: "<strong>Quentin Matsys</strong> painted church officials and scholars with the sharp characterization typical of early Netherlandish portraiture. His <strong>detailed, unflinching realism</strong> set a standard for Northern European portrait painting." }
  ],
  'otto-mueller-der-mord': [
    { question: "What does 'Der Mord' mean?", answer: "\"<strong>Der Mord</strong>\" means \"The Murder\" in German. <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> treatment uses angular forms and raw emotion to convey violence without graphic detail." }
  ],
  'alonso-cano-descent-into-limbo': [
    { question: "What is the Descent into Limbo?", answer: "The <strong>Harrowing of Hell</strong> depicts Christ descending to free righteous souls who died before his crucifixion. <a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> painted this dramatic theological subject in his Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." }
  ],
  'gustav-klimt-design-for-a-theater-curtain': [
    { question: "What decorative work did Klimt do?", answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> began his career as a <strong>decorative painter</strong> for Vienna's theaters and public buildings. These early commissions developed the ornamental approach that later defined his iconic <a href=\"/apps/masterpieces/movement/art-nouveau\"><strong>Art Nouveau</strong></a> paintings." }
  ],
  'edvard-munch-despair': [
    { question: "How does Despair relate to The Scream?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> painted <strong>Despair</strong> as an earlier version of the same experience that became The Scream. Both depict a figure on a bridge with a blood-red sky, but Despair shows a more subdued emotional state." }
  ],
  'correggio-diana': [
    { question: "Where did Correggio paint mythological subjects?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> painted Diana and other mythological subjects as <strong>ceiling frescoes</strong> in the Camera di San Paolo, Parma. His illusionistic painted architecture and playful putti anticipated Baroque decoration." }
  ],
  'jacques-louis-david-diana-and-apollo-piercing-with-their-arrows-the-ch': [
    { question: "What myth is depicted?", answer: "The <strong>children of Niobe</strong> were killed by Apollo and Diana after their mother boasted of having more children than the goddess Leto. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> painted this Greek tragedy in rigorous <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> style." }
  ],
  'johannes-vermeer-diana-and-her-companions': [
    { question: "Is this typical of Vermeer?", answer: "No, this early mythological painting is quite different from <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> famous <strong>quiet domestic interiors</strong>. He painted it before developing the intimate, light-filled style that made him one of art history's most admired painters." }
  ],
  'rembrandt-diana-at-the-bath': [
    { question: "How did Rembrandt paint nudes?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> nudes were famously <strong>realistic rather than idealized</strong>. His Diana shows a real woman's body, which shocked contemporaries accustomed to classical perfection, but now feels refreshingly honest." }
  ],
  'francois-boucher-diana-getting-out-of-her-bath': [
    { question: "What does this painting represent?", answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a> used the myth of <strong>Diana bathing</strong> as an excuse for an elegant, sensuous nude. His porcelain-smooth figures and pastel colors epitomize the French <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> style at its most refined." }
  ],
  'edgar-degas-diego-martelli': [
    { question: "Who was Diego Martelli?", answer: "<strong>Diego Martelli</strong> was an Italian art critic who championed the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> in Italy. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted him from above, surrounded by papers, in a characteristically unconventional composition." }
  ],
  'john-william-waterhouse-diogenes': [
    { question: "Who was Diogenes?", answer: "<strong>Diogenes</strong> was an ancient Greek philosopher who lived in extreme simplicity to prove that virtue was better than wealth. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted him with the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> detail he applied to all classical subjects." }
  ],
  'jules-bastien-lepage-diogenes': [
    { question: "Who was Jules Bastien-Lepage?", answer: "<strong>Jules Bastien-Lepage</strong> was a French <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> painter who influenced plein air painting worldwide. His naturalistic approach to figures in landscapes bridged <strong>academic painting and Impressionism</strong>." }
  ],
  'salvator-rosa-diogenes-casting-away-his-cup': [
    { question: "Why did Rosa paint Diogenes?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> identified with <strong>Diogenes's defiance of convention</strong>. Rosa himself was known as a rebellious artist who rejected flattery and painted what he chose, making the philosopher an ideal subject." }
  ],
  'salvator-rosa-diogenes-throwing-away-his-drinking-cup': [
    { question: "What moment is shown?", answer: "Diogenes sees a child <strong>drinking from cupped hands</strong> and throws away his cup, realizing even it was unnecessary luxury. <a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Rosa</strong></a> painted this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> moral lesson with dramatic landscape setting." }
  ],
  'raphael-diotalevi-madonna': [
    { question: "What is the Diotalevi Madonna?", answer: "Named after its former owners, this is an <strong>early Madonna and Child</strong> by <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>, painted around 1504. It shows the influence of his teacher Perugino in its gentle symmetry and soft <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> colors." }
  ],
  'hans-memling-diptych-of-john-the-baptist-and-st-veronica-st-joh': [
    { question: "What is a diptych?", answer: "A <strong>diptych</strong> is a two-paneled artwork that can be opened and closed like a book. <a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Memling</strong></a> created many small devotional diptychs for private prayer, combining refined technique with quiet spiritual intensity." }
  ],
  'gerard-ter-borch-dispatch': [
    { question: "What social world does ter Borch depict?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Ter Borch</strong></a> painted the <strong>prosperous Dutch middle class</strong> in elegant interiors. His scenes of letter-writing, music-making, and conversation capture the refined domestic culture of Golden Age Holland." }
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
