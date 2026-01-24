const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ MANET ============
  'edouard-manet-the-barque-of-dante-copy-after-delacroix': [
    { question: "Why did Manet copy Delacroix?", answer: "<a href='/apps/masterpieces/artist/edouard-manet'><strong>Manet</strong></a> made this copy as a <strong>study exercise</strong>, a common practice for young artists. Delacroix's dramatic Romanticism influenced Manet's development before he pioneered modern art." },
    { question: "Where is this painting displayed?", answer: "The copy is at the <strong>Musée des Beaux-Arts de Lyon</strong> in France. The original Delacroix hangs at the Louvre in Paris." },
    { question: "When did Manet create this copy?", answer: "Manet made this copy in the <strong>1850s</strong> during his formative years, before developing his distinctive style that would influence <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>." }
  ],

  'edouard-manet-pierrot-dancing': [
    { question: "What does Pierrot Dancing depict?", answer: "The painting shows <strong>Pierrot</strong>, a stock character from Italian commedia dell'arte, in his traditional white costume. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Manet</strong></a> was drawn to theatrical subjects throughout his career." },
    { question: "Where is this painting located?", answer: "Pierrot Dancing is in a <strong>private collection</strong>. Manet's theatrical subjects appear in several works, including The Old Musician at the National Gallery of Art." },
    { question: "What artistic influences does this show?", answer: "The theatrical subject and loose brushwork show influences of <strong>Spanish masters</strong> like Velázquez and Goya, artists Manet greatly admired." }
  ],

  'edouard-manet-surprised-nymph': [
    { question: "Where can I see Surprised Nymph?", answer: "This painting is at the <strong>Museo Nacional de Bellas Artes</strong> in Buenos Aires, Argentina. It's one of <a href='/apps/masterpieces/artist/edouard-manet'><strong>Manet's</strong></a> major works outside Europe and North America." },
    { question: "What mythological subject does this depict?", answer: "The painting shows a <strong>nude nymph</strong> surprised while bathing, a classical subject Manet reinterpreted with his modern, direct approach to the female figure." },
    { question: "How does this relate to Manet's other nudes?", answer: "Like Olympia and Le Déjeuner sur l'herbe, this work shows Manet's <strong>unconventional approach</strong> to the nude, combining classical themes with contemporary sensibility." }
  ],

  'edouard-manet-study-of-trees': [
    { question: "What type of work is Study of Trees?", answer: "This is a <strong>plein air study</strong>, painted outdoors directly from nature. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Manet</strong></a> made such studies throughout his career, influencing the Impressionists." },
    { question: "Where is this study located?", answer: "The work is in a <strong>private collection</strong>. Many of Manet's landscape studies remained with his family or were sold privately." },
    { question: "How does this connect to Impressionism?", answer: "Manet's <strong>outdoor painting practice</strong> and fresh approach to nature directly influenced younger artists like <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> and the <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> movement." }
  ],

  // ============ RAPHAEL ============
  'raphael-st-george-and-the-dragon': [
    { question: "How many St. George paintings did Raphael create?", answer: "<a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted <strong>at least two versions</strong> of St. George and the Dragon. The more famous version is at the National Gallery of Art in Washington, D.C." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>Saint George</strong>, a Christian martyr, slaying a dragon to rescue a princess. This legend was popular in <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> art." },
    { question: "Where is this version located?", answer: "This version is in a <strong>private collection</strong>. Other Raphael St. George paintings are at the National Gallery of Art and the Louvre." }
  ],

  'raphael-the-madonna-conestabile': [
    { question: "Where is the Madonna Conestabile displayed?", answer: "This small painting is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. It's named after the Conestabile family who once owned it." },
    { question: "When did Raphael paint this Madonna?", answer: "<a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted this around <strong>1502-1504</strong> in his early career, showing the influence of his teacher Perugino in the soft, serene style." },
    { question: "What makes this painting technically notable?", answer: "Despite being only about <strong>7 inches in diameter</strong>, the painting demonstrates Raphael's mastery of composition and his ability to create intimate, devotional works." }
  ],

  'raphael-self-portrait': [
    { question: "Where is Raphael's Self-Portrait displayed?", answer: "This drawing is at the <a href='/apps/masterpieces/museum/ashmolean-museum-oxford-uk'><strong>Ashmolean Museum</strong></a> in Oxford, UK. It shows the artist as a young man in his early twenties." },
    { question: "How old was Raphael in this self-portrait?", answer: "<a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> was approximately <strong>23 years old</strong> when he created this image, already an established master in the <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> art world." },
    { question: "What medium is this work?", answer: "This is a <strong>chalk drawing</strong> rather than a painting. Raphael was as skilled in drawing as in painting, leaving many preparatory studies and finished drawings." }
  ],

  'raphael-st-sebastian': [
    { question: "Where can I see Raphael's St. Sebastian?", answer: "This early work is at the <a href='/apps/masterpieces/museum/accademia-carrara-bergamo-italy'><strong>Accademia Carrara</strong></a> in Bergamo, Italy. It dates from Raphael's youth, around 1501-1502." },
    { question: "What does this painting depict?", answer: "The painting shows <strong>Saint Sebastian</strong>, a Christian martyr shot with arrows. <a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> depicts him in the traditional manner, tied to a tree or column." },
    { question: "How does this compare to Raphael's mature work?", answer: "This <strong>early work</strong> shows the influence of Perugino and Umbrian painting. Raphael's style would evolve significantly after moving to Florence and Rome." }
  ],

  'raphael-portrait-of-a-man': [
    { question: "Where is this portrait displayed?", answer: "The Portrait of a Man is at the <a href='/apps/masterpieces/museum/borghese-gallery-rome-italy'><strong>Borghese Gallery</strong></a> in Rome, Italy, alongside other <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> masterpieces." },
    { question: "Who is depicted in this portrait?", answer: "The <strong>sitter's identity is unknown</strong>. Various scholars have suggested he may be a courtier, artist, or patron, but no identification has been confirmed." },
    { question: "When did Raphael paint this?", answer: "<a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted this during his <strong>Roman period</strong> (1508-1520), when he created his most celebrated works including the Vatican Stanze." }
  ],

  'raphael-madonna-and-child': [
    { question: "Where is this Madonna and Child?", answer: "This painting is at the <a href='/apps/masterpieces/museum/norton-simon-museum-pasadena-ca-us'><strong>Norton Simon Museum</strong></a> in Pasadena, California. The museum holds significant <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> works." },
    { question: "How many Madonnas did Raphael paint?", answer: "<a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted <strong>dozens of Madonnas</strong> throughout his career. They were highly sought after by patrons and established his reputation for ideal beauty." },
    { question: "What characterizes Raphael's Madonna paintings?", answer: "Raphael's Madonnas are known for their <strong>serene beauty</strong>, harmonious compositions, and the tender relationship between mother and child." }
  ],

  'raphael-solly-madonna': [
    { question: "Where is the Solly Madonna displayed?", answer: "This early Raphael work is at the <a href='/apps/masterpieces/museum/gem228ldegalerie-berlin-germany'><strong>Gemäldegalerie</strong></a> in Berlin. It's named after Edward Solly, an English collector who once owned it." },
    { question: "When did Raphael paint the Solly Madonna?", answer: "<a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted this around <strong>1500-1502</strong>, when he was only about 17-19 years old, showing remarkable skill for his age." },
    { question: "What influences are visible in this early work?", answer: "The painting shows strong influence of <strong>Perugino</strong>, Raphael's teacher, in the soft modeling, gentle expressions, and Umbrian landscape background." }
  ],

  // ============ VAN GOGH ============
  'van-gogh-two-sketches-of-a-man-leaning-on-his-spade': [
    { question: "What type of work is this?", answer: "This is a <strong>drawing study</strong> showing a laborer, a subject <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> frequently depicted during his Dutch period when he focused on peasant life and work." },
    { question: "When did Van Gogh create this drawing?", answer: "This dates from Van Gogh's <strong>early Dutch period</strong> (1881-1885) when he was learning to draw and focused on depicting working-class subjects." },
    { question: "Where is this drawing located?", answer: "The drawing is in a <strong>private collection</strong>. Van Gogh's early drawings are dispersed across many collections worldwide." }
  ],

  'van-gogh-town-d39avray-l39etang-au-batelier': [
    { question: "Where can I see this painting?", answer: "This work is at the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam, which holds the world's largest collection of <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh's</strong></a> art." },
    { question: "What location does this painting depict?", answer: "The painting shows <strong>Ville-d'Avray</strong>, a commune near Paris known for its picturesque ponds. The area was popular with artists including Corot." },
    { question: "What period does this represent?", answer: "This is from Van Gogh's <strong>Paris period</strong> (1886-1888) when he was influenced by <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> and began using brighter colors." }
  ],

  'van-gogh-vicarage-and-church-at-etten': [
    { question: "What is depicted in this drawing?", answer: "The drawing shows the <strong>vicarage and church at Etten</strong> in the Netherlands, where <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh's</strong></a> father served as a Protestant minister." },
    { question: "When did Van Gogh create this work?", answer: "This dates from <strong>1876</strong>, during Van Gogh's early artistic development before he committed fully to becoming an artist." },
    { question: "What significance did Etten have for Van Gogh?", answer: "Etten was Van Gogh's <strong>family home</strong> where he stayed several times. His complicated relationship with religion and family played out there." }
  ],

  'van-gogh-vincent39s-boarding-house-in-hackford-road-brixton': [
    { question: "Where can I see this work?", answer: "This drawing is at the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam. It documents <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh's</strong></a> time in London." },
    { question: "When did Van Gogh live in London?", answer: "Van Gogh lived in London from <strong>1873-1875</strong>, working for the art dealer Goupil & Cie. This was before he became an artist." },
    { question: "Why is this drawing historically significant?", answer: "It documents <strong>Van Gogh's London residence</strong> at 87 Hackford Road, Brixton. The building still exists and has a blue plaque commemorating his stay." }
  ],
};

async function main() {
  console.log('=== Adding Missing FAQs (Batch 2) ===\n');

  let updated = 0;
  for (const [slug, faqArray] of Object.entries(faqs)) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: {
        faqs: faqArray,
        updatedAt: new Date()
      }
    });

    if (result.count > 0) {
      console.log('Updated:', slug);
      updated++;
    } else {
      console.log('Not found:', slug);
    }
  }

  console.log(`\n=== Complete: ${updated} artworks updated ===`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
