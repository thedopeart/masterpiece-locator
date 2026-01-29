const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ A BAR AT THE FOLIES-BERGÈRE ============
  'a-bar-at-the-folies-bergere': [
    { question: "Where can I see A Bar at the Folies-Bergère?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Édouard Manet</strong></a> painted it in 1882, the year before his death. It was his last major work and is considered one of his finest achievements." },
    { question: "What's wrong with the mirror reflection?", answer: "The reflection behind the barmaid doesn't match the viewer's perspective. The reflected figure leans toward a man who should be standing where the viewer is, but we don't see him. Art historians have debated this for over a century: intentional ambiguity, spatial experimentation, or simply Manet bending the rules." },
    { question: "Who is the barmaid?", answer: "Her name was <strong>Suzon</strong>, and she actually worked at the Folies-Bergère. Manet painted her in his studio, not at the venue. Her distant, slightly melancholy expression contrasts with the lively crowd reflected behind her, creating a tension between public spectacle and private isolation." },
    { question: "What style is this painting?", answer: "It bridges <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> and modern painting. Manet used loose brushwork for the reflected crowd and still-life precision for the bottles. He's often called the father of modern art because his work challenged academic conventions without fully abandoning tradition." },
    { question: "How big is the painting?", answer: "It measures <strong>96 cm × 130 cm</strong> (37.8 × 51.2 inches). The Folies-Bergère was a famous Parisian music hall and café-concert. Manet captured the bottles, oranges, and flowers on the marble bar with striking detail, almost like a <strong>still life within a portrait</strong>." }
  ],

  // ============ A SUNDAY ON LA GRANDE JATTE ============
  'a-sunday-on-la-grande-jatte': [
    { question: "Where can I see A Sunday on La Grande Jatte?", answer: "It's at the <a href='/apps/masterpieces/museum/art-institute-of-chicago'><strong>Art Institute of Chicago</strong></a>, where it's been since 1926. The painting is enormous and occupies its own prominent wall space. It's one of the museum's most visited works." },
    { question: "What technique did Seurat use?", answer: "<a href='/apps/masterpieces/artist/georges-seurat'><strong>Georges Seurat</strong></a> developed a technique called <strong>Pointillism</strong> (he preferred 'Chromoluminarism'), applying tiny dots of pure color side by side. From a distance, the viewer's eye blends them together. He spent about two years on this painting, completing it in 1886." },
    { question: "What is the scene?", answer: "Parisians relaxing on a Sunday afternoon on the island of <strong>La Grande Jatte</strong> in the Seine river. The figures include a woman with a monkey on a leash, soldiers, workers, and bourgeois couples. Despite the leisure setting, everyone appears strangely still and formal, almost like figures in an Egyptian frieze." },
    { question: "How big is the painting?", answer: "It's massive: <strong>207.6 cm × 308 cm</strong> (about 6 feet 10 inches × 10 feet 1 inch). Seurat also painted a <strong>pointillist border</strong> directly on the canvas edge. The scale lets you see individual dots up close while the full image only coheres at a distance." },
    { question: "What art movement is this?", answer: "It's the defining work of <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionism</strong></a>, specifically Neo-Impressionism. Seurat wanted to put Impressionist color theory on a scientific foundation. Where the Impressionists worked intuitively, he calculated his color relationships with mathematical precision." }
  ],

  // ============ PORTRAIT OF ADELE BLOCH-BAUER II ============
  'adele-bloch-bauer-ii': [
    { question: "Where can I see Portrait of Adele Bloch-Bauer II?", answer: "It's at the <strong>Neue Galerie</strong> in New York City. The painting was restituted to the Bloch-Bauer family heirs in 2006 after a landmark legal battle over Nazi-looted art. <a href='/apps/masterpieces/artist/gustav-klimt'><strong>Klimt</strong></a> painted it in 1912, five years after the more famous gold portrait." },
    { question: "How does this differ from the first portrait?", answer: "The first portrait (1907) is covered in <strong>gold leaf</strong> and ornamental patterns. This second version uses a <strong>vibrant, colorful palette</strong> with floral patterns influenced by East Asian art. Adele wears a large hat and stands against a wall of <a href='https://luxurywallart.com/collections/colorful-artwork' target='_blank' rel='noopener'><strong>colorful</strong></a> decorative motifs." },
    { question: "Who was Adele Bloch-Bauer?", answer: "<strong>Adele Bloch-Bauer</strong> was a wealthy Viennese socialite and patron of the arts. She was the only person Klimt painted twice. She died of meningitis in 1925 at age 43. The Nazis seized both portraits after annexing Austria in 1938." },
    { question: "How much did this painting sell for?", answer: "It sold at auction in November 2006 for <strong>$87.9 million</strong>, then the third-highest price ever paid for a painting. The first Adele portrait had sold privately earlier that year for $135 million to Ronald Lauder for the Neue Galerie." },
    { question: "What style is this painting?", answer: "It's part of Klimt's later work after his <strong>Golden Phase</strong>. The style blends <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolist</strong></a> portraiture with decorative elements from Japanese and Chinese art. The flat, patterned background anticipates later abstract developments in European painting." }
  ],

  // ============ ADORATION OF THE MAGI (BOTTICELLI) ============
  'adoration-magi-botticelli': [
    { question: "Where can I see this painting?", answer: "It's at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence, Italy. <a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> painted it around 1475 for the chapel of Gaspare di Zanobi del Lama in the church of Santa Maria Novella." },
    { question: "Are real people depicted in this painting?", answer: "Yes. Botticelli included portraits of the <strong>Medici family</strong> as the Three Magi and their entourage. Cosimo de' Medici kneels before the Virgin, while his sons Piero and Giovanni appear as the other two kings. Botticelli also painted <strong>himself</strong> looking out at the viewer from the far right." },
    { question: "What art movement does this represent?", answer: "It's an <a href='/apps/masterpieces/movement/renaissance'><strong>Early Renaissance</strong></a> work from Florence. The painting shows Botticelli's developing skill with composition and portraiture. The triangular arrangement of figures around the Holy Family was innovative for the time and influenced later treatments of the subject." },
    { question: "How big is The Adoration of the Magi?", answer: "It measures <strong>111 cm × 134 cm</strong> (43.7 × 52.8 inches). Botticelli painted it in <strong>tempera on wood panel</strong>. The inclusion of so many recognizable Medici faces made the painting both a devotional work and a political statement of Medici power in Florence." },
    { question: "Why did Botticelli include the Medici?", answer: "The patron, Gaspare del Lama, was a <strong>Medici associate</strong> who wanted to demonstrate his loyalty. Including the ruling family in a religious painting was common in Renaissance Florence. It served as both flattery and a public display of political allegiance." }
  ],

  // ============ ALMOND BLOSSOMS ============
  'almond-blossoms': [
    { question: "Where can I see Almond Blossoms?", answer: "It's at the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam. <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted it in February 1890 in Saint-Rémy-de-Provence, France, shortly before leaving the asylum where he'd been treated." },
    { question: "Why did Van Gogh paint Almond Blossoms?", answer: "He made it as a <strong>gift for his newborn nephew</strong>, named Vincent Willem after him. Van Gogh's brother Theo and his wife Jo had just had the baby. The blossoming almond tree symbolizes <strong>new life and hope</strong>. Van Gogh wrote to Theo that he'd started it immediately after hearing the news." },
    { question: "What influenced the style?", answer: "Van Gogh was deeply influenced by <strong>Japanese woodblock prints</strong>, particularly <a href='/apps/masterpieces/movement/ukiyo-e'><strong>ukiyo-e</strong></a> art. The flat areas of color, bold outlines, and cropped composition directly echo Japanese printmaking. He'd been collecting and studying Japanese prints for years." },
    { question: "How big is Almond Blossoms?", answer: "The canvas measures <strong>73.3 cm × 92.4 cm</strong> (28.9 × 36.4 inches). The pale <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> sky background makes the white blossoms glow. Van Gogh used thick outlines around the branches, giving them an almost graphic, decorative quality." },
    { question: "What happened to Van Gogh after painting this?", answer: "He suffered another severe mental breakdown shortly after completing it. He left the Saint-Rémy asylum in May 1890 and moved to Auvers-sur-Oise near Paris. He died in July 1890, just five months later. The painting stayed in the family and eventually passed to the Van Gogh Museum." }
  ],

  // ============ ANXIETY (MUNCH) ============
  'anxiety-munch': [
    { question: "Where can I see Anxiety by Munch?", answer: "It's at the <a href='/apps/masterpieces/museum/munch-museum'><strong>Munch Museum</strong></a> in Oslo, Norway. <a href='/apps/masterpieces/artist/edvard-munch'><strong>Edvard Munch</strong></a> painted it in 1894, a year after his famous The Scream. The museum holds the world's largest collection of Munch's work." },
    { question: "How does Anxiety relate to The Scream?", answer: "It uses the same <strong>swirling orange sky and blue-black landscape</strong> from The Scream but replaces the single figure with a crowd of pale, hollow-eyed faces. Munch reused this backdrop deliberately. Both paintings belong to his 'Frieze of Life' series exploring themes of anxiety, love, and death." },
    { question: "What is depicted?", answer: "A group of ghostly figures in <strong>dark clothing and top hats</strong> walk along a path (believed to be the same Ekeberg Hill location as The Scream). Their blank, skull-like faces express collective dread. The blood-red sky and distorted landscape amplify the feeling of shared existential panic." },
    { question: "What art movement is this?", answer: "It's a key work of <a href='/apps/masterpieces/movement/expressionism'><strong>Expressionism</strong></a>. Munch prioritized emotional truth over visual accuracy. The distorted forms and intense colors communicate psychological states that realistic painting couldn't capture. His work directly influenced German Expressionist groups like Die Brücke." },
    { question: "How big is Anxiety?", answer: "The painting measures <strong>94 cm × 73 cm</strong> (37 × 28.7 inches). It's an oil on canvas. Munch created multiple versions of his major themes, including lithograph versions of Anxiety. He believed in revisiting subjects to explore different emotional angles." }
  ],

  // ============ AREAREA ============
  'arearea': [
    { question: "Where can I see Arearea?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/paul-gauguin'><strong>Paul Gauguin</strong></a> painted it in 1892 during his first stay in Tahiti. The title means 'Joyousness' in Tahitian." },
    { question: "What does the painting depict?", answer: "Two Tahitian women sit in a <strong>vivid landscape</strong> with a red dog in the foreground. In the background, figures appear to worship near a statue. Gauguin combined observed reality with imagination and Polynesian mythology. The flat, bold colors and simplified forms break from European naturalistic tradition." },
    { question: "Why did Gauguin go to Tahiti?", answer: "He left France in 1891 seeking a '<strong>primitive paradise</strong>' untouched by Western civilization. He was disillusioned with European society and wanted to paint in a place with vibrant color and untouched culture. The reality was more complicated: Tahiti was already heavily colonized by France." },
    { question: "What style is Arearea?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> with strong Symbolist influences. Gauguin developed a style called <strong>Synthetism</strong>, using flat patches of bold color, dark outlines, and simplified forms. His approach influenced Fauvism and early modern art." },
    { question: "Why is the dog red?", answer: "Gauguin wasn't painting what he literally saw. The <strong>red dog</strong> is a deliberate artistic choice, using color for emotional and decorative impact rather than realism. This anti-naturalistic use of color was radical in the 1890s and directly influenced Henri Matisse and the Fauvist painters." }
  ],

  // ============ ARNOLFINI PORTRAIT ============
  'arnolfini-portrait': [
    { question: "Where can I see the Arnolfini Portrait?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/jan-van-eyck'><strong>Jan van Eyck</strong></a> painted it in 1434. The painting has been in England since at least the 16th century and entered the National Gallery's collection in 1842." },
    { question: "Is this a wedding portrait?", answer: "That's the traditional interpretation, but scholars debate it. Some see it as a <strong>legal document</strong> recording a marriage or betrothal. Others argue it's simply a double portrait of a wealthy couple. The mirror inscription 'Jan van Eyck was here, 1434' has fueled theories that Van Eyck served as an official witness." },
    { question: "What do the symbols mean?", answer: "Nearly every object carries meaning. The single lit candle may represent <strong>God's presence</strong>. The dog symbolizes fidelity. The removed shoes suggest standing on holy ground. The oranges reference wealth (they were expensive imports). Even the carved figure on the bedpost is Saint Margaret, patron of childbirth." },
    { question: "What's special about the mirror?", answer: "The <strong>convex mirror</strong> on the back wall reflects the entire room, including two figures entering through the door (one possibly Van Eyck himself). It's an astonishing technical feat: Van Eyck painted ten tiny scenes from the Passion of Christ around the mirror's frame, each barely visible to the naked eye." },
    { question: "What art movement does this belong to?", answer: "It's a masterwork of the <a href='/apps/masterpieces/movement/northern-renaissance'><strong>Northern Renaissance</strong></a>. Van Eyck was one of the first painters to exploit <strong>oil paint's</strong> full potential, building up translucent layers (glazes) to achieve luminous detail impossible in tempera. His technique influenced European painting for centuries." }
  ],

  // ============ THE BASKET OF APPLES ============
  'basket-of-apples': [
    { question: "Where can I see The Basket of Apples?", answer: "It's at the <a href='/apps/masterpieces/museum/art-institute-of-chicago'><strong>Art Institute of Chicago</strong></a>. <a href='/apps/masterpieces/artist/paul-cezanne'><strong>Paul Cézanne</strong></a> painted it around 1893. It's one of his most famous still life paintings." },
    { question: "Why does the table look crooked?", answer: "Cézanne deliberately painted the table from <strong>multiple viewpoints simultaneously</strong>. The table edge doesn't align on either side of the cloth, and the bottle tilts at an angle that defies gravity. He was more interested in capturing how we actually perceive objects (from shifting angles) than in creating photographic accuracy." },
    { question: "Why is Cézanne's still life important?", answer: "His approach to breaking down forms into geometric shapes and using <strong>multiple perspectives</strong> directly led to <a href='/apps/masterpieces/movement/cubism'><strong>Cubism</strong></a>. Picasso called Cézanne 'the father of us all.' These still lifes weren't simple exercises. They were experiments that changed the direction of Western art." },
    { question: "What style is The Basket of Apples?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. Cézanne moved beyond Impressionism's focus on light to explore the <strong>underlying structure</strong> of objects. His brushwork is visible and constructive, building form through patches of color rather than blending." },
    { question: "How big is the painting?", answer: "It measures <strong>65 cm × 80 cm</strong> (25.6 × 31.5 inches). Cézanne arranged real objects in his studio for these compositions, but he worked so slowly that he used <strong>wax fruit</strong> because real fruit rotted before he finished. The painting shows a wine bottle, biscuits, a basket of apples, and a rumpled cloth." }
  ],

  // ============ BATHERS AT ASNIÈRES ============
  'bathers-asnieres': [
    { question: "Where can I see Bathers at Asnières?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/georges-seurat'><strong>Georges Seurat</strong></a> painted it in 1884, when he was just 24 years old. It was his first large-scale composition and announced him as a major new talent." },
    { question: "What is depicted?", answer: "Young working-class men <strong>bathing and lounging</strong> along the Seine at Asnières, an industrial suburb northwest of Paris. Factory chimneys smoke in the background. The scene contrasts leisure and labor: these are workers resting, not bourgeois at play. The stillness gives the ordinary moment a monumental quality." },
    { question: "How big is Bathers at Asnières?", answer: "It's huge: <strong>201 cm × 300 cm</strong> (6 feet 7 inches × 9 feet 10 inches). Seurat made numerous preparatory oil sketches and drawings before the final canvas. The large scale was typically reserved for history painting, so applying it to working-class bathers was a <strong>deliberate provocation</strong>." },
    { question: "Is this a Pointillist painting?", answer: "Not quite. Seurat painted most of it using broader <strong>crosshatch brushstrokes</strong>, closer to Impressionist technique. He added small dots of contrasting color later in specific areas (like the hat and the water). His full Pointillist method wouldn't emerge until A Sunday on La Grande Jatte two years later." },
    { question: "What art movement is this?", answer: "It bridges <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> and <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionism</strong></a>. The subject (outdoor leisure) and light are Impressionist, but the composed, almost frozen quality of the figures and Seurat's systematic color theory point toward something new and more structured." }
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
