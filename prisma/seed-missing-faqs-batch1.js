const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ VERMEER ============
  'johannes-vermeer-the-love-letter': [
    { question: "Where can I see The Love Letter by Vermeer?", answer: "The Love Letter is displayed at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam, Netherlands. It's one of several Vermeer paintings in their world-class collection of <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> art." },
    { question: "What is depicted in The Love Letter?", answer: "The painting shows a <strong>maidservant delivering a letter</strong> to her mistress, who holds a lute. The viewer observes through a doorway, creating a sense of intimacy and voyeurism typical of Vermeer's domestic scenes." },
    { question: "Why is the doorway framing significant?", answer: "Vermeer uses the <strong>doorway as a frame</strong> to create depth and make viewers feel like observers of a private moment. This compositional device heightens the painting's intimate atmosphere." }
  ],

  'johannes-vermeer-woman-with-a-lute': [
    { question: "Where is Woman with a Lute displayed?", answer: "This painting is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York City. It's one of only about 35 known works by <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer</strong></a>." },
    { question: "When did Vermeer paint Woman with a Lute?", answer: "Vermeer painted this work around <strong>1662-1663</strong> during his most productive period. The painting shows his masterful treatment of light streaming through a window." },
    { question: "What is the woman doing in this painting?", answer: "The woman <strong>tunes a lute</strong> while gazing toward a window, possibly awaiting someone. Musical instruments in Dutch paintings often symbolized love and harmony." }
  ],

  'johannes-vermeer-youg-woman-playing-a-guitar': [
    { question: "Where can I see Young Woman Playing a Guitar?", answer: "This late Vermeer work is displayed at <a href='/apps/masterpieces/museum/kenwood-house'><strong>Kenwood House</strong></a> in London, part of the Iveagh Bequest collection." },
    { question: "What makes this painting unusual for Vermeer?", answer: "Unlike most Vermeer paintings, this one shows the subject <strong>looking directly at the viewer</strong> with a slight smile, creating an unusually engaging and intimate connection." },
    { question: "Is this painting considered authentic?", answer: "Yes, though it's a <strong>late work</strong> from around 1672, some scholars note differences in technique. It remains accepted as an authentic Vermeer and shows his continued mastery of light and texture." }
  ],

  'johannes-vermeer-view-of-delft': [
    { question: "Where can I see View of Delft?", answer: "View of Delft is displayed at the <a href='/apps/masterpieces/museum/mauritshuis'><strong>Mauritshuis</strong></a> in The Hague, Netherlands, alongside Vermeer's famous Girl with a Pearl Earring." },
    { question: "Why is View of Delft considered important?", answer: "It's one of only <strong>two landscapes</strong> Vermeer painted and is celebrated for its luminous depiction of light on water and buildings. Marcel Proust called it 'the most beautiful painting in the world.'" },
    { question: "What technique did Vermeer use for the light effects?", answer: "Vermeer used <strong>pointillé technique</strong>, applying small dots of paint to create shimmering reflections on water and buildings. This predates Impressionism by two centuries." }
  ],

  // ============ KLIMT ============
  'gustav-klimt-young-girl-seated': [
    { question: "What style is Young Girl Seated painted in?", answer: "<a href='/apps/masterpieces/artist/gustav-klimt'><strong>Gustav Klimt</strong></a> painted this in a more <strong>naturalistic style</strong> than his famous golden works. It demonstrates his classical training before developing his distinctive decorative approach." },
    { question: "When did Klimt paint this work?", answer: "This painting dates from Klimt's <strong>early career</strong> in the 1890s, before he fully developed his famous gold-leaf style seen in works like The Kiss." },
    { question: "Where is this painting located?", answer: "Young Girl Seated is in a <strong>private collection</strong>. Many of Klimt's early portraits remain privately held, making his later museum works more accessible to the public." }
  ],

  'gustav-klimt-portrait-of-a-girl-head-slightly-turned-left': [
    { question: "What period does this portrait represent?", answer: "This portrait shows <a href='/apps/masterpieces/artist/gustav-klimt'><strong>Klimt's</strong></a> <strong>early academic style</strong>, demonstrating his technical skill in traditional portraiture before his transition to Symbolism and Art Nouveau." },
    { question: "How does this differ from Klimt's famous works?", answer: "Unlike his gold-adorned later portraits, this work uses a <strong>more subdued palette</strong> and traditional techniques, showing Klimt's versatility and classical foundation." },
    { question: "Where is this painting now?", answer: "The painting is held in a <strong>private collection</strong>. Klimt's early works are less frequently exhibited than his iconic later pieces." }
  ],

  'gustav-klimt-two-girls-with-an-oleander': [
    { question: "Where can I see Two Girls With An Oleander?", answer: "This painting is displayed at the <a href='/apps/masterpieces/museum/wadsworth-atheneum'><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, one of the oldest public art museums in the United States." },
    { question: "What style is this painting?", answer: "The work represents <a href='/apps/masterpieces/artist/gustav-klimt'><strong>Klimt's</strong></a> <strong>transitional period</strong>, showing elements of both his academic training and emerging interest in decorative, symbolic elements." },
    { question: "What is the significance of the oleander?", answer: "Oleander is a <strong>beautiful but poisonous plant</strong>, often symbolizing danger beneath beauty. This duality was a theme Klimt explored throughout his career." }
  ],

  // ============ CARAVAGGIO ============
  'caravaggio-portrait-of-a-courtesan': [
    { question: "Is this painting definitively by Caravaggio?", answer: "The attribution to <a href='/apps/masterpieces/artist/caravaggio'><strong>Caravaggio</strong></a> is <strong>disputed among scholars</strong>. Some believe it may be by a follower or from his circle rather than by the master himself." },
    { question: "What is depicted in this painting?", answer: "The portrait shows a <strong>young woman</strong>, traditionally identified as a courtesan based on her attire and presentation. The intimate pose is characteristic of Caravaggio's naturalistic approach." },
    { question: "Where is this painting located?", answer: "The painting is in a <strong>private collection</strong>. Its uncertain attribution has kept it from major museum collections where authenticated Caravaggios are displayed." }
  ],

  'caravaggio-the-lute-player': [
    { question: "Where can I see The Lute Player?", answer: "The primary version is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. Another version exists at the Metropolitan Museum in New York." },
    { question: "Why did Caravaggio paint multiple versions?", answer: "<a href='/apps/masterpieces/artist/caravaggio'><strong>Caravaggio</strong></a> painted <strong>at least two versions</strong> of this composition, a common practice when works were in high demand. Both show a musician with flowers and fruit." },
    { question: "What makes this painting technically notable?", answer: "The painting demonstrates Caravaggio's mastery of <strong>still life and figure painting</strong> combined. The realistic musical score, reflective lute surface, and soft flesh tones showcase his technical virtuosity." }
  ],

  // ============ LEONARDO ============
  'leonardo-da-vinci-study-of-the-hanged-bernardo-di-bandino-baroncelli': [
    { question: "What does this drawing depict?", answer: "<a href='/apps/masterpieces/artist/leonardo-da-vinci'><strong>Leonardo da Vinci</strong></a> sketched <strong>Bernardo Baroncelli</strong>, one of the Pazzi conspirators who assassinated Giuliano de' Medici in 1478. Leonardo drew him after his public hanging." },
    { question: "Why is this drawing historically significant?", answer: "It's a rare <strong>documentary drawing</strong> by Leonardo, recording a major political event. Leonardo's detailed notes about the man's clothing make it an important historical document." },
    { question: "Where can I see this drawing?", answer: "The drawing is held at the <a href='/apps/masterpieces/museum/musee-bonnat'><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France. It's one of many Leonardo drawings dispersed across European collections." }
  ],

  // ============ BOTTICELLI ============
  'sandro-botticelli-madonna-and-child-with-an-angel': [
    { question: "Where can I see this Botticelli Madonna?", answer: "This painting is at the <a href='/apps/masterpieces/museum/isabella-stewart-gardner'><strong>Isabella Stewart Gardner Museum</strong></a> in Boston, displayed in the same arrangement where Isabella Gardner originally placed it." },
    { question: "What style characterizes this painting?", answer: "<a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> painted this in his characteristic <strong>Early Renaissance</strong></a> style, with flowing lines, delicate features, and a serene atmosphere typical of his devotional works." },
    { question: "When did Botticelli paint this work?", answer: "The painting dates from the <strong>1460s-1470s</strong>, during Botticelli's early career in Florence when he was developing the graceful style that would define his masterpieces." }
  ],

  'sandro-botticelli-madonna-of-the-rosegarden': [
    { question: "Where is the Madonna of the Rosegarden displayed?", answer: "This painting is at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence, Italy, alongside other major <a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> works." },
    { question: "What is the significance of the rose garden setting?", answer: "The <strong>enclosed rose garden</strong> (hortus conclusus) is a traditional symbol of the Virgin Mary's purity in Christian iconography. Roses themselves symbolize Mary and divine love." },
    { question: "What style period does this represent?", answer: "The painting exemplifies the <a href='/apps/masterpieces/movement/renaissance'><strong>Early Renaissance</strong></a> in Florence, with its elegant lines, rich symbolism, and devotional subject matter." }
  ],

  'sandro-botticelli-the-virgin-and-child-surrounded-by-five-angels': [
    { question: "Where can I see this painting?", answer: "This Botticelli tondo is displayed at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris, France, in their Italian Renaissance galleries." },
    { question: "What is a tondo?", answer: "A tondo is a <strong>circular painting or relief</strong>. This format was popular in Renaissance Florence, especially for devotional images and wedding gifts." },
    { question: "Why did Botticelli paint so many Madonnas?", answer: "<a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> received numerous <strong>commissions for devotional works</strong> from Florentine families. These Madonna paintings were intended for private worship in wealthy homes." }
  ],

  'sandro-botticelli-sebastian': [
    { question: "What does this painting depict?", answer: "The painting shows <strong>Saint Sebastian</strong>, an early Christian martyr who survived being shot with arrows. <a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> depicts the moment of his martyrdom." },
    { question: "Why was Saint Sebastian a popular subject?", answer: "Saint Sebastian's <strong>semi-nude martyrdom</strong> allowed Renaissance artists to study and display the male form while maintaining religious propriety. He was also invoked against plague." },
    { question: "Where is this painting located?", answer: "This version is in a <strong>private collection</strong>. Botticelli painted the subject multiple times; other versions are in museums including the Berlin Gemäldegalerie." }
  ],

  'sandro-botticelli-the-madonna-of-the-roses': [
    { question: "Where is The Madonna of the Roses displayed?", answer: "This painting is at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence, alongside the artist's most famous works including Primavera and Birth of Venus." },
    { question: "What is the symbolism of roses in this painting?", answer: "Roses symbolize the <strong>Virgin Mary</strong> in Christian art. Red roses represent Christ's passion and sacrifice, while white roses symbolize Mary's purity." },
    { question: "How does this compare to Botticelli's mythological works?", answer: "While famous for mythological paintings, <a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> produced many <strong>devotional works</strong>. Both share his characteristic graceful lines and idealized beauty." }
  ],
};

async function main() {
  console.log('=== Adding Missing FAQs (Batch 1) ===\n');

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
