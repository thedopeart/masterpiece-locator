const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 53: tier 3 index 610-629 (20 artworks)
const newFaqs = {
  'gerard-ter-borch-gallant-conversation-the-paternal-admonition': [
    { question: "What is the 'Paternal Admonition' about?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Ter Borch's</strong></a> famous scene was long misread as a father scolding his daughter. It actually shows a <strong>gallant proposition</strong> in a bordello, with the woman's satin gown painted with extraordinary skill." }
  ],
  'lawrence-alma-tadema-gallo-roman-women': [
    { question: "What is Gallo-Roman culture?", answer: "<strong>Gallo-Roman</strong> refers to the blending of Celtic Gallic and Roman cultures in ancient France. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> recreated this hybrid civilization with his trademark archaeological precision and luminous marble surfaces." }
  ],
  'winslow-homer-game-of-croquet': [
    { question: "What social activity is depicted?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> painted <strong>croquet</strong>, a popular outdoor pastime that allowed men and women to socialize together. His early genre scenes capture post-Civil War American leisure with fresh, direct observation." }
  ],
  'jean-baptiste-simeon-chardin-game-still-life-with-hunting-dog': [
    { question: "What type of still life is this?", answer: "<a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> painted <strong>hunting trophies</strong> (game birds and animals) with quiet dignity. His still lifes avoid Flemish excess, achieving a restrained harmony that Diderot praised as \"truth itself.\"" }
  ],
  'claude-monet-garden-in-bordighera-impression-of-morning': [
    { question: "Where is Bordighera?", answer: "<strong>Bordighera</strong> is a town on the Italian Riviera near the French border. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> visited in 1884 and painted its exotic gardens and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> Mediterranean light with vibrant blues and greens." }
  ],
  'georges-seurat-gardener': [
    { question: "How did Seurat approach figure studies?", answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a> drew solitary working figures with <strong>conté crayon</strong>, building form through velvety gradations of dark and light. These studies show his mastery of tonal drawing before he developed Pointillism." }
  ],
  'claude-monet-gardener39s-house-at-antibes': [
    { question: "What drew Monet to Antibes?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted at <strong>Antibes in 1888</strong>, captivated by the intense Mediterranean light and color. His Antibes canvases are among his most vibrant, with bold pinks, blues, and golden tones." }
  ],
  'paul-signac-gasometers-at-clichy': [
    { question: "Why did Signac paint industrial subjects?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> painted <strong>gasometers and factories</strong> in the Parisian suburbs, showing modern industrial life through the lens of <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionist</strong></a> color theory. He found beauty in unexpected subjects." }
  ],
  'george-caleb-bingham-general-richard-gentry': [
    { question: "Who was George Caleb Bingham?", answer: "<strong>George Caleb Bingham</strong> was a Missouri painter known for <strong>frontier scenes and political paintings</strong>. His portraits of Western figures documented American expansion with a clarity influenced by old master traditions." }
  ],
  'edgar-degas-gentlemen-jockeys-before-the-start': [
    { question: "What fascinated Degas about racing?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> was drawn to the <strong>movement, color, and tension</strong> of the racetrack. His compositions often show the moments before a race, capturing nervous energy through cropped, asymmetrical framing." }
  ],
  'giovanni-battista-moroni-gian-federico-madruzzo-oil-canvas-giovanni-battist': [
    { question: "What made Moroni's portraits distinctive?", answer: "<strong>Giovanni Battista Moroni</strong> painted <strong>psychologically direct portraits</strong> of Lombard nobility. His sitters look out with natural, unposed expressions that anticipate modern portraiture's emphasis on personality." }
  ],
  'hyacinthe-rigaud-gian-francesco-ii-brignole-sale': [
    { question: "What was Rigaud's style?", answer: "<strong>Hyacinthe Rigaud</strong> was the leading <strong>French court portraitist</strong> under Louis XIV. His grand, formal style emphasized luxurious fabrics, dramatic poses, and aristocratic authority in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> tradition." }
  ],
  'giovanni-battista-moroni-gian-lodovico-madruzzo': [
    { question: "Who were the Madruzzo family?", answer: "The <strong>Madruzzo</strong> were a powerful noble family from Trent, Italy. <strong>Moroni</strong> served as their preferred portraitist, painting multiple family members with the quiet realism that defined his work." }
  ],
  'george-stubbs-gimcrack-on-newmarket-heath-with-a-trainer-a-stabl': [
    { question: "Who was Gimcrack?", answer: "<strong>Gimcrack</strong> was a famous 18th-century racehorse known for his speed and grey coat. <a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a> painted him on Newmarket Heath, England's most prestigious racing ground, with his characteristic anatomical precision." }
  ],
  'dante-gabriel-rossetti-giotto-painting-the-portrait-of-dante': [
    { question: "What connection links Giotto and Dante?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> (named after Dante Alighieri) painted <strong>Giotto portraying the great poet</strong>. This subject united Rossetti's two heroes: the father of Italian painting and the father of Italian poetry." }
  ],
  'giorgione-giovanni-borgherini-and-his-tutor': [
    { question: "How many works survive by Giorgione?", answer: "Only about <strong>six paintings</strong> are firmly attributed to <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>. Despite dying at around 30, his atmospheric mood and mysterious subjects transformed Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting." }
  ],
  'arnold-bocklin-girl-and-boy-picking-flowers': [
    { question: "What themes define Böcklin's art?", answer: "<strong>Arnold Böcklin</strong> painted <strong>mythological and pastoral scenes</strong> that blend reality with fantasy. His symbolic, dreamlike imagery influenced the Symbolist movement and later inspired Giorgio de Chirico's metaphysical art." }
  ],
  'edvard-munch-girl-combing-her-hair': [
    { question: "How did Munch portray women?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> painted women as figures of <strong>beauty, mystery, and anxiety</strong>. His images of women combing hair or in private moments carry emotional weight beyond simple domestic observation." }
  ],
  'jan-steen-girl-eating-oysters': [
    { question: "What did oysters symbolize in Dutch art?", answer: "In 17th-century Dutch painting, <strong>oysters symbolized sensuality and seduction</strong>. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> played on this association with his characteristic humor, showing a young woman enjoying her meal with a knowing smile." }
  ],
  'paul-delaroche-girl-in-a-basin': [
    { question: "What was Delaroche known for?", answer: "<strong>Paul Delaroche</strong> was a French painter famous for <strong>dramatic historical scenes</strong>. This more intimate subject shows his versatility and his polished academic technique, which made him one of the most popular painters of his era." }
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
