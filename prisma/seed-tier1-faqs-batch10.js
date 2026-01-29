const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ WHEN WILL YOU MARRY? ============
  'when-will-you-marry': [
    { question: "Where can I see When Will You Marry?", answer: "It's at the <a href='/apps/masterpieces/museum/kunstmuseum-basel'><strong>Kunstmuseum Basel</strong></a> in Switzerland, on loan. <a href='/apps/masterpieces/artist/paul-gauguin'><strong>Paul Gauguin</strong></a> painted it in 1892 during his first stay in Tahiti. In 2015, it reportedly sold privately for approximately <strong>$300 million</strong>, one of the highest prices ever paid for a painting." },
    { question: "What does the painting depict?", answer: "Two <strong>Tahitian women</strong> sit in a lush tropical landscape. The woman in front wears Western-style clothing and a flower behind her ear (traditionally signaling she's looking for a husband). The woman behind her makes a gesture that may be a Buddhist mudra. The title in Tahitian is 'Nafea Faa Ipoipo.'" },
    { question: "Why did Gauguin paint in Tahiti?", answer: "He left France in 1891 seeking a <strong>'primitive' paradise</strong> far from European civilization. He wanted vivid color, untouched culture, and artistic freedom. The reality was complicated: Tahiti was already a French colony, and Gauguin's romantic vision didn't match the colonized society he found." },
    { question: "How big is the painting?", answer: "It measures <strong>101.5 cm × 77.5 cm</strong> (40 × 30.5 inches). Gauguin used flat areas of bold color with dark outlines, a style he called <strong>Synthetism</strong>. The <a href='https://luxurywallart.com/collections/colorful-artwork' target='_blank' rel='noopener'><strong>colorful</strong></a> palette and simplified forms influenced Matisse, the Fauves, and early modernism." },
    { question: "What art movement is this?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> with Symbolist overtones. Gauguin rejected the Impressionists' focus on light for a more emotional, symbolic approach. His bold, anti-naturalistic use of color (the ground is orange-yellow, the foliage deep blue-green) prioritized feeling over observation." }
  ],

  // ============ WHISTLER'S MOTHER ============
  'whistlers-mother': [
    { question: "Where can I see Whistler's Mother?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/james-mcneill-whistler'><strong>James McNeill Whistler</strong></a> painted it in 1871. The French government purchased it in 1891. It's one of the few American paintings in a major European collection." },
    { question: "What is the painting's actual title?", answer: "Whistler titled it '<strong>Arrangement in Grey and Black No. 1</strong>.' He insisted the subject was less important than the formal composition of colors and shapes. The popular name 'Whistler's Mother' is what stuck. The tension between Whistler's formalism and the painting's emotional impact is part of its appeal." },
    { question: "Who is the woman?", answer: "<strong>Anna McNeill Whistler</strong>, the artist's mother. She was 67 when she posed. Originally, a different model was planned, but when that person didn't show up, Whistler asked his mother to stand in. She reportedly found standing too tiring, so he had her sit, creating the iconic profile pose." },
    { question: "How big is the painting?", answer: "It measures <strong>144.3 cm × 162.4 cm</strong> (56.8 × 63.9 inches). The palette is severely restricted to <strong>grays, blacks, and muted whites</strong>. A framed etching and a curtain with a subtle pattern provide the only decorative elements. The simplicity gives the painting a quiet, almost meditative power." },
    { question: "Why is this painting an American icon?", answer: "It became a <strong>symbol of motherhood</strong> in American culture, especially after a 1934 US postage stamp featured it. During the Great Depression and World War II, it represented maternal sacrifice and domestic resilience. Whistler would have hated this interpretation. He cared about composition, not sentiment." }
  ],

  // ============ WOMAN HOLDING A BALANCE ============
  'woman-holding-balance': [
    { question: "Where can I see Woman Holding a Balance?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C. <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer</strong></a> painted it around 1662-1663. It's one of the finest Vermeers in any American collection." },
    { question: "What is the woman weighing?", answer: "Nothing. The balance pans are <strong>empty</strong>. Earlier interpretations assumed she was weighing gold or pearls (which sit on the table), but close examination revealed empty scales. She's contemplating the act of balance itself, not weighing material goods." },
    { question: "What is the painting behind her?", answer: "A <strong>Last Judgment scene</strong> hangs on the wall directly behind the woman, with Christ weighing souls. The parallel is deliberate: she weighs earthly things while Christ weighs spiritual ones. Vermeer embedded moral meaning in what appears to be a simple domestic scene." },
    { question: "How big is the painting?", answer: "It measures <strong>42.5 cm × 38 cm</strong> (16.7 × 15 inches). Like most Vermeer paintings, it's small. Light enters from a window on the left, illuminating the woman's face and the <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> cloth on the table. The <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> setting is intimate and precise." },
    { question: "What makes Vermeer's technique special here?", answer: "The soft light that wraps around the woman's face and hands demonstrates Vermeer's mastery of <strong>diffused illumination</strong>. He likely used a camera obscura to study light effects. The result is a stillness and clarity that no other 17th-century painter achieved so consistently." }
  ],

  // ============ WOMAN WITH A PARASOL ============
  'woman-parasol': [
    { question: "Where can I see Woman with a Parasol?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted it in 1875. It shows his wife Camille and their son Jean on a breezy summer hillside." },
    { question: "What makes this painting special?", answer: "Monet captured a <strong>single, fleeting moment</strong> with extraordinary spontaneity. The wind whips Camille's veil and skirt. Clouds streak across the sky. The tall grass bends. Everything is in motion. Monet painted it quickly, outdoors, working directly from observation rather than studio preparation." },
    { question: "Who are the figures?", answer: "<strong>Camille Doncieux</strong>, Monet's first wife, holds the parasol. Their son <strong>Jean</strong> (about 8 years old) stands partly hidden in the grass. Camille died in 1879 at age 32. Monet later painted two similar compositions (1886) with a different model, but never with the same emotional charge." },
    { question: "How big is the painting?", answer: "It measures <strong>100 cm × 81 cm</strong> (39.4 × 31.9 inches). The low viewpoint (looking up at Camille against the sky) gives her a monumental quality despite the casual subject. Broad, visible brushstrokes build the <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> grass and white clouds with energetic confidence." },
    { question: "What style is this?", answer: "It's a defining work of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>. The emphasis on outdoor light, visible brushwork, everyday subject matter, and capturing a transient moment are all core Impressionist principles. Monet doesn't describe details. He describes how light and air feel at a specific instant." }
  ],

  // ============ WOMAN READING A LETTER ============
  'woman-reading-letter': [
    { question: "Where can I see Woman Reading a Letter?", answer: "It's at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam. <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer</strong></a> painted it around 1663. A recent restoration (completed 2021) removed overpaint to reveal a large Cupid painting on the background wall that Vermeer had originally included." },
    { question: "What changed after the 2021 restoration?", answer: "For centuries, the background was a <strong>bare white wall</strong>. Researchers discovered that someone (possibly after Vermeer's death) painted over a large <strong>painting-within-a-painting showing Cupid</strong>. Restoring it transforms the meaning: the Cupid suggests the letter is a love letter, adding romantic context Vermeer intended." },
    { question: "What is the woman doing?", answer: "She stands by a window in <strong>blue clothing</strong>, absorbed in reading a letter. Light falls on her face and the paper. She appears to be pregnant. The open window might symbolize connection to the outside world and the absent letter writer. Everything about the scene suggests quiet, private emotion." },
    { question: "How big is the painting?", answer: "It measures <strong>46.5 cm × 39 cm</strong> (18.3 × 15.4 inches). The intimate scale is typical of Vermeer. Soft daylight illuminates the scene from the left. The <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> interior is sparse but carefully arranged: a table with a cloth, a bowl of fruit, a chair." },
    { question: "Why are Vermeer's paintings so rare?", answer: "Only about <strong>35 paintings</strong> by Vermeer are known to survive. He worked slowly and died young (age 43, in 1675) leaving his family in debt. His work was largely forgotten until the 1860s, when critic Théophile Thoré-Bürger rediscovered and championed him." }
  ],

  // ============ WOMEN OF ALGIERS ============
  'women-of-algiers': [
    { question: "Where can I see Women of Algiers?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/eugene-delacroix'><strong>Eugène Delacroix</strong></a> painted it in 1834 after visiting a harem in Algiers during a diplomatic mission to North Africa in 1832. The visit lasted only a few hours but inspired one of his most celebrated works." },
    { question: "What does the painting show?", answer: "Three <strong>Algerian women</strong> sit in richly decorated quarters with a Black servant. They smoke, recline on cushions, and exist in a private world. Delacroix made sketches during his brief visit and worked from memory and watercolors back in Paris. The scene blends observation with European fantasy about the 'Orient.'" },
    { question: "Why did Picasso paint variations of this?", answer: "<a href='/apps/masterpieces/artist/pablo-picasso'><strong>Picasso</strong></a> created <strong>15 paintings</strong> called 'Les Femmes d'Alger' between 1954 and 1955, reworking Delacroix's composition through a Cubist lens. Version 'O,' the final painting, sold at Christie's in 2015 for <strong>$179.4 million</strong>, a record at the time." },
    { question: "How big is the painting?", answer: "It measures <strong>180 cm × 229 cm</strong> (70.9 × 90.2 inches). The warm color palette and sensuous fabrics reflect Delacroix's fascination with North African light and color. The painting helped establish <a href='/apps/masterpieces/movement/romanticism'><strong>Orientalism</strong></a> as a genre in 19th-century French art." },
    { question: "Is this painting considered problematic today?", answer: "Yes. Modern scholars critique both the painting and the Orientalist tradition it represents. The <strong>male European gaze</strong> on secluded women raises questions about power, colonialism, and representation. Delacroix idealized and exoticized a culture France was actively colonizing. These tensions are now part of how the painting is studied." }
  ],

  // ============ THE YELLOW CHRIST ============
  'yellow-christ': [
    { question: "Where can I see The Yellow Christ?", answer: "It's at the <strong>Albright-Knox Art Gallery</strong> (now Buffalo AKG Art Museum) in Buffalo, New York. <a href='/apps/masterpieces/artist/paul-gauguin'><strong>Paul Gauguin</strong></a> painted it in 1889 in Pont-Aven, Brittany. It's one of the key paintings of his pre-Tahiti period." },
    { question: "What does the painting show?", answer: "A <strong>bright yellow Christ</strong> on a crucifix set in the Breton countryside. Three peasant women kneel nearby in traditional Breton clothing. The fields are orange and yellow, the trees autumnal red. Gauguin based the Christ figure on a wooden crucifix in the chapel of Trémalo near Pont-Aven." },
    { question: "Why is Christ yellow?", answer: "Gauguin used color <strong>symbolically rather than naturalistically</strong>. The <a href='https://luxurywallart.com/collections/yellow-paintings' target='_blank' rel='noopener'><strong>yellow</strong></a> Christ may represent spiritual light, folk simplicity, or the harvest season. Gauguin rejected Impressionist naturalism for a style where color conveyed emotion and meaning directly, without imitating nature." },
    { question: "What art movement is this?", answer: "It's a landmark of <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionism</strong></a> and <strong>Cloisonnism</strong>, a style using bold outlines and flat color areas inspired by medieval stained glass and Japanese prints. Along with Émile Bernard, Gauguin developed this approach in Pont-Aven. It influenced the Nabis group and early Fauvism." },
    { question: "How big is The Yellow Christ?", answer: "It measures <strong>92.1 cm × 73.4 cm</strong> (36.2 × 28.9 inches). The simplified forms, dark outlines, and non-naturalistic color represented a radical break from the Impressionists. Gauguin painted it two years before leaving for Tahiti, where he would push these ideas even further." }
  ],
};

async function seed() {
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${slug} (${faqData.length} FAQs)`);
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
    }
  }
  await prisma.$disconnect();
}

seed();
