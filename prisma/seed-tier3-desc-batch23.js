const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'frederic-leighton-the-fisherman-and-the-siren': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/bristol-city-museum-and-art-gallery-bristol-uk\"><strong>Bristol City Museum and Art Gallery</strong></a> in England." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>fisherman ensnared by a siren</strong>, her body coiling around him. Leighton painted the mythological theme with <strong>sensuous grace</strong> and anatomical precision." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a> created this Victorian Classicist painting. He was the most powerful figure in British art, serving as <strong>President of the Royal Academy</strong> for over two decades." }
  ],
  'frederic-leighton-the-reconciliation-of-the-montagues-and-capulets': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Montague and Capulet families reconciling</strong> over the bodies of Romeo and Juliet. Leighton painted Shakespeare's tragedy with the <strong>classical grandeur</strong> of Renaissance history painting." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a> created this early work, exhibited at the Royal Academy in 1855. Queen Victoria bought it immediately, launching his <strong>meteoric career</strong>." },
    { question: "What style is this painting?", answer: "It's <strong>Victorian Classicism</strong>. Leighton combined <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> composition with rich color, creating paintings that appealed to Victorian England's love of both <strong>beauty and moral narrative</strong>." }
  ],
  'funeral-of-a-mummy': [
    { question: "What does this painting depict?", answer: "The scene shows an <strong>ancient Egyptian funeral procession</strong> carrying a mummy. Bridgman painted North African and Egyptian subjects with <strong>archaeological detail and theatrical staging</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/frederick-arthur-bridgman\"><strong>Frederick Arthur Bridgman</strong></a> created this Orientalist scene. An American who settled in Paris, he traveled extensively in <strong>North Africa and Egypt</strong>, painting the scenes that made him famous." },
    { question: "What style is this painting?", answer: "It's <strong>Orientalism</strong>, a 19th-century genre depicting the Middle East and North Africa. Bridgman combined <strong>academic technique with exotic subjects</strong>, appealing to Western fascination with ancient civilizations." }
  ],
  'frida-kahlo-self-portrait': [
    { question: "What does this self-portrait show?", answer: "Kahlo depicts herself with her characteristic <strong>unflinching direct gaze, heavy brows, and symbolic elements</strong>. She painted 55 self-portraits, using her own image to explore identity, pain, and Mexican culture." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a> created this work. A catastrophic bus accident at 18 left her in lifelong pain, and painting became her way of <strong>confronting suffering</strong>." },
    { question: "What style did Kahlo work in?", answer: "Her work blends <strong>Mexican folk art, <a href=\"/apps/masterpieces/movement/surrealism\">Surrealism</a>, and raw autobiography</strong>. André Breton called her a Surrealist, but Kahlo rejected the label, saying she painted <strong>her own reality, not dreams</strong>." }
  ],
  'gabriel-metsu-the-prodigal-son': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>biblical parable of the Prodigal Son</strong>, a popular Dutch Golden Age subject. Metsu renders it as a <strong>tavern scene</strong>, the wayward son squandering his inheritance." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting. He was one of the finest Dutch genre painters, rivaling <strong>Vermeer and Ter Borch</strong> in refinement." }
  ],
  'gabriel-metsu-woman-taken-in-adultery': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>biblical episode of the woman caught in adultery</strong>, brought before Christ. Metsu paints it as a <strong>dramatic crowd scene</strong> with rich costume detail." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> (1629-1667) created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious scene. His early works tackled <strong>biblical subjects</strong> before he shifted to the domestic genre scenes he's best known for." }
  ],
  'gabriel-metsu-the-huntsman-and-the-lady': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>huntsman presenting game to a lady</strong>. Metsu painted courtship and flirtation with <strong>subtle wit</strong>, using everyday interactions to suggest deeper social dynamics." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. His paintings of <strong>elegant Dutch interiors</strong> rank alongside Vermeer's for their refinement and psychological insight." }
  ],
  'gabriel-metsu-the-dismissal-of-hagar': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museum-de-lakenhal-leiden-netherlands\"><strong>Museum De Lakenhal</strong></a> in Leiden, Metsu's birthplace." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Abraham dismissing Hagar and Ishmael</strong>, a biblical subject popular with Dutch painters. Metsu treats it with <strong>emotional restraint and rich color</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this early <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> work. Born in Leiden, he later moved to Amsterdam where he developed the <strong>polished genre style</strong> that made his reputation." }
  ],
  'gabriel-metsu-the-sick-child': [
    { question: "Where is The Sick Child?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>mother holding her sick child</strong>, one of the most tender images in Dutch art. Metsu captures genuine <strong>parental worry</strong> with quiet restraint." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting. It's considered one of his finest works, demonstrating his ability to combine <strong>technical polish with real emotional depth</strong>." }
  ],
  'gabriel-metsu-the-tippler-the-wine-drinker': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>wine drinker</strong>, a common Dutch genre subject. Metsu paints the tippler with <strong>wry humor</strong>, his flushed face and relaxed pose telling the story without moralizing." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre piece. Dutch Golden Age painters often depicted <strong>drinking scenes</strong> as moral warnings, though Metsu's touch is gentler than most." }
  ],
  'gabriel-metsu-the-sleeping-sportsman': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>sportsman dozing after a hunt</strong>. Metsu paints the quiet moment with <strong>silvery light and fine textures</strong>, his hallmarks as a genre painter." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. His ability to render <strong>silk, fur, and metal</strong> with Vermeer-like subtlety made him one of the most prized Dutch painters." }
  ],
  'gabriel-metsu-the-apple-peeler': [
    { question: "Where is The Apple Peeler?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman peeling an apple</strong>, a subject of domestic tranquility. Metsu turned simple household tasks into <strong>poetic compositions</strong> of light, texture, and quiet absorption." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting. His domestic scenes rival <strong>Vermeer's</strong> in their luminous calm and attention to everyday beauty." }
  ],
  'gabriel-metsu-the-old-drinker': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam." },
    { question: "What does this painting depict?", answer: "The scene shows an <strong>elderly man drinking</strong>. Metsu paints the figure with <strong>warmth rather than mockery</strong>, his soft light and careful detail elevating a tavern character into a sympathetic portrait." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. He died at just 38, leaving a small but <strong>exceptionally refined body of work</strong>." }
  ],
  'gentile-da-fabriano-madonna-and-child': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/yale-art-gallery\"><strong>Yale University Art Gallery</strong></a> in New Haven, Connecticut." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna and Child</strong> in Gentile's characteristic <strong>International Gothic style</strong>, with elegant drapery, <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> leaf, and refined grace." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>early Renaissance</strong></a> devotional painting. He was the leading Italian painter of the <strong>International Gothic style</strong>, prized for his ornate, luminous surfaces." }
  ],
  'gentile-da-fabriano-the-annunciation': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Annunciation</strong>, Gabriel telling Mary she'll bear the Christ Child. Gentile renders it with the <strong>delicate line and rich gilding</strong> of International Gothic." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> created this panel. His <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angel</strong></a> figures are among the most graceful in Italian art, combining <strong>Byzantine elegance with Gothic fluidity</strong>." },
    { question: "What style is this painting?", answer: "It's <strong>International Gothic</strong>, a refined court style of the late 14th and early 15th centuries. Gentile's work bridges this decorative tradition and the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> naturalism that followed." }
  ],
  'gentile-da-fabriano-madonna': [
    { question: "Where is this Madonna?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-museum-of-san-matteo-pisa-italy\"><strong>National Museum of San Matteo</strong></a> in Pisa, Italy." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna</strong> with Gentile's signature <strong>graceful line and luminous gold ground</strong>. His Madonnas embody the International Gothic ideal of refined, courtly beauty." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> (c. 1370-1427) created this panel. He was the most sought-after painter in early 15th-century Italy, working for popes, doges, and condottieri across the peninsula." }
  ],
  'gentile-da-fabriano-madonna-with-st-julian-and-st-laurenzius': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/frick-collection\"><strong>Frick Collection</strong></a> in New York, one of America's finest small museums." },
    { question: "What does this painting depict?", answer: "It shows the <strong>Madonna with St. Julian and St. Lawrence</strong>. Gentile's altarpieces glow with <strong>rich gold and jewel-like color</strong>, reflecting the luxurious taste of his aristocratic patrons." },
    { question: "Who painted this altarpiece?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>early Renaissance</strong></a> work. His elaborate, decorative style represented the height of <strong>International Gothic sophistication</strong> in Italian painting." }
  ],
  'gentile-da-fabriano-madonna-with-child-and-stcatherine-stnicolas-and-d': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna and Child with St. Catherine, St. Nicholas, and a donor</strong>. The inclusion of the donor kneeling before the Virgin reflects the <strong>patronage system of early Renaissance Italy</strong>." },
    { question: "Who painted this altarpiece?", answer: "<a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> created this work. Michelangelo reportedly said Gentile's art was <strong>\"as gentle as his name,\"</strong> praising the elegant refinement of his style." }
  ],
  'george-bellows-the-cliff-dwellers': [
    { question: "Where is The Cliff Dwellers?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/lacma\"><strong>Los Angeles County Museum of Art</strong></a>." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>teeming New York tenement street</strong>, packed with immigrants, children, and laundry lines. Bellows captured <strong>urban energy and overcrowding</strong> with raw, physical brushwork." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>George Bellows</strong></a> created this in 1913. A member of the <strong>Ashcan School</strong>, he painted gritty New York life with an energy that made him one of America's most acclaimed early 20th-century painters." }
  ],
  'george-caleb-bingham-the-jolly-flatboatmen': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>flatboatmen dancing and playing music on the Missouri River</strong>. Bingham celebrated <strong>frontier life along America's western rivers</strong> with luminous light and democratic optimism." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-caleb-bingham\"><strong>George Caleb Bingham</strong></a> created this iconic American painting. He's the finest painter of <strong>Mississippi and Missouri River life</strong>, capturing the westward expansion with a rare combination of realism and poetry." }
  ],
  'george-frederick-watts-life39s-illusions': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate</strong></a> in London." },
    { question: "What does this painting depict?", answer: "The scene is an <strong>allegory of life's deceptive pleasures</strong>. Watts painted grand allegorical subjects, earning the nickname <strong>\"England's Michelangelo\"</strong> for his ambitious moral themes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>George Frederick Watts</strong></a> created this <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> allegory. He painted <strong>Hope, Love and Death, and other abstract concepts</strong> as grand figures, giving Victorian moral ideals visual form." }
  ],
  'george-frederick-watts-lady-margaret-beaumont-and-her-daughter': [
    { question: "What does this painting depict?", answer: "It's a <strong>double portrait of Lady Margaret Beaumont and her daughter</strong>. Watts painted society portraits to fund his allegorical work, bringing the same <strong>dignity and warmth</strong> to both genres." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>George Frederick Watts</strong></a> created this work. He painted portraits of <strong>Victorian England's most prominent figures</strong>, donating many to the National Portrait Gallery." },
    { question: "What style is this painting?", answer: "It's <strong>Victorian portraiture</strong> with a <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> sensibility. Watts's portraits have a <strong>soft, ethereal quality</strong> that distinguishes them from the sharper realism of his contemporaries." }
  ],
  'george-frederick-watts-selfportrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate</strong></a> in London." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>George Frederick Watts</strong></a> (1817-1904) created this work. He was one of the most honored Victorian painters, twice refusing a <strong>baronetcy</strong> but accepting the Order of Merit." },
    { question: "What is Watts known for?", answer: "He's best known for <strong>allegorical paintings like Hope</strong>, which became one of the most reproduced images of the Victorian era. His <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> works gave abstract moral concepts a <strong>monumental physical presence</strong>." }
  ],
  'george-frederick-watts-sir-galahad': [
    { question: "Where is Sir Galahad?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/fogg-museum-harvard-art-museums-cambridge-ma-us\"><strong>Fogg Museum</strong></a> at Harvard University in Cambridge, Massachusetts." },
    { question: "What does this painting depict?", answer: "It shows <strong>Sir Galahad</strong>, the purest knight of the Round Table, who achieved the Holy Grail. Watts painted him as a <strong>symbol of spiritual aspiration and moral courage</strong>." },
    { question: "Who painted Sir Galahad?", answer: "<a href=\"/apps/masterpieces/artist/george-frederick-watts\"><strong>George Frederick Watts</strong></a> created this work. Arthurian legend was a major source for Victorian art, and Watts's Galahad embodies the era's <strong>ideal of noble purpose</strong>." }
  ],
  'george-inness-lake-albano-italy': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/phillips-collection\"><strong>The Phillips Collection</strong></a> in Washington, D.C." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Lake Albano</strong> in the hills south of Rome. Inness painted Italian <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> with a <strong>soft, atmospheric style</strong> influenced by the French Barbizon painters." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/george-inness\"><strong>George Inness</strong></a> created this landscape. He's considered one of America's greatest <a href=\"/apps/masterpieces/movement/romanticism\"><strong>landscape</strong></a> painters, known for a <strong>meditative, tonal style</strong> that moved beyond the Hudson River School's detailed realism." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
