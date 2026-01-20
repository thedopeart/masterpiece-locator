const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'adriaen-van-ostade-sense-of-hearing',
    faqs: [
      { question: "Who painted Sense of Hearing?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> created this allegorical scene. He specialized in Dutch peasant life and tavern scenes during the Golden Age." },
      { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg. The Hermitage holds a strong collection of Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> art." },
      { question: "What is the Five Senses series?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> painted the five senses as peasant genre scenes. Each sense gets an earthy, humorous interpretation." }
    ]
  },
  {
    slug: 'gerard-david-the-judgement-of-cambyses',
    faqs: [
      { question: "What story does The Judgement of Cambyses tell?", answer: "Persian King Cambyses orders a corrupt judge flayed alive. <a href=\"/artist/gerard-david\"><strong>Gerard David</strong></a> painted this gruesome scene as a warning to Bruges officials." },
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/groeningemuseum-bruges-belgium\"><strong>Groeningemuseum</strong></a> in Bruges. The painting originally hung in the town hall as a moral reminder to judges." },
      { question: "What style is Gerard David?", answer: "<a href=\"/artist/gerard-david\"><strong>David</strong></a> was one of the last great Flemish Primitives. His detailed <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> style bridges medieval and Renaissance traditions." }
    ]
  },
  {
    slug: 'claude-monet-water-lily-pond-evening-left-panel',
    faqs: [
      { question: "What is this Water Lily Pond painting?", answer: "<a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> painted his lily pond throughout his later years. This evening scene captures the <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>natural</strong></a> beauty of Giverny at dusk." },
      { question: "Where is this painting?", answer: "It's at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The Met has an extensive Monet collection." },
      { question: "Did Monet paint many water lily panels?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> created about 250 water lily paintings over 30 years. His <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> vision evolved toward near-abstraction." }
    ]
  },
  {
    slug: 'the-ray',
    faqs: [
      { question: "What is The Ray by Chardin?", answer: "<a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Jean-Baptiste-Siméon Chardin</strong></a> painted a gutted ray fish with extraordinary realism. The raw subject shocked and impressed 18th-century viewers." },
      { question: "Where can I see The Ray?", answer: "It hangs at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. This 1728 work established Chardin's reputation as a still life master." },
      { question: "Why is The Ray famous?", answer: "<a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a> elevated common kitchen subjects to high art. Diderot praised his ability to make dead fish seem alive and breathing." }
    ]
  },
  {
    slug: 'the-cyclops',
    faqs: [
      { question: "What does The Cyclops by Redon show?", answer: "A single-eyed giant gazes longingly at a sleeping nymph below. <a href=\"/artist/odilon-redon\"><strong>Odilon Redon</strong></a> created this dreamlike scene from Greek mythology." },
      { question: "Where is The Cyclops displayed?", answer: "It's at the <a href=\"/museum/kroeller-mueller-museum\"><strong>Kröller-Müller Museum</strong></a> in the Netherlands. Redon painted it in 1914 with his characteristic <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>vibrant colors</strong></a>." },
      { question: "What movement was Redon part of?", answer: "<a href=\"/artist/odilon-redon\"><strong>Redon</strong></a> was a leading Symbolist artist. His mysterious, fantastical images influenced Surrealism decades later." }
    ]
  },
  {
    slug: 'adolph-menzel-balcony-room',
    faqs: [
      { question: "What is Balcony Room by Menzel?", answer: "<a href=\"/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> painted this sunlit interior around 1845. Wind moves the curtains as light floods an empty room with almost photographic precision." },
      { question: "Where is Balcony Room displayed?", answer: "It's at the <a href=\"/museum/alte-nationalgalerie-berlin-germany\"><strong>Alte Nationalgalerie</strong></a> in Berlin. Menzel is Germany's most important 19th-century Realist painter." },
      { question: "Why is this painting important?", answer: "<a href=\"/artist/adolph-menzel\"><strong>Menzel's</strong></a> attention to natural light anticipated <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> by decades. The empty room becomes a study in atmosphere." }
    ]
  },
  {
    slug: 'portrait-man-roman-coin',
    faqs: [
      { question: "Who is the man in this portrait?", answer: "The sitter holds a coin of Emperor Nero, suggesting interest in antiquity. <a href=\"/artist/hans-memling\"><strong>Hans Memling</strong></a> painted this around 1480 with characteristic Flemish detail." },
      { question: "Where is this painting?", answer: "It's at the <a href=\"/museum/musee-royal-beaux-arts-antwerp\"><strong>Musée Royal des Beaux-Arts</strong></a> in Antwerp. Memling created many <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> masterpieces." },
      { question: "What style is Hans Memling?", answer: "<a href=\"/artist/hans-memling\"><strong>Memling</strong></a> was a major Flemish Primitive, known for serene faces and detailed <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> realism." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-lawyer-in-his-study',
    faqs: [
      { question: "What does Lawyer in His Study show?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> depicts a lawyer surrounded by papers and books. Unlike his peasant scenes, this shows middle-class Dutch professional life." },
      { question: "What style did van Ostade work in?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> painted Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre scenes. He studied with Frans Hals and influenced many later artists." },
      { question: "Where is this painting?", answer: "It's in a <a href=\"/museum/private-collection\"><strong>private collection</strong></a>. Van Ostade's intimate interior scenes remain popular with collectors." }
    ]
  },
  {
    slug: 'van-gogh-miners',
    faqs: [
      { question: "When did Van Gogh paint miners?", answer: "<a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> drew and painted miners during his time in the Belgian Borinage region. He lived among coal miners while working as a preacher." },
      { question: "Why did Van Gogh focus on workers?", answer: "<a href=\"/artist/van-gogh\"><strong>Van Gogh</strong></a> identified with laboring people. His early dark palette and heavy forms show social concern before his colorful French period." },
      { question: "Where can I see Van Gogh's miner works?", answer: "Many are at the <a href=\"/museum/kr246llerm252ller-museum-otterlo-netherlands\"><strong>Kröller-Müller Museum</strong></a> in the Netherlands, home to the world's second-largest Van Gogh collection." }
    ]
  },
  {
    slug: 'the-apparition-moreau',
    faqs: [
      { question: "What is The Apparition about?", answer: "Salome confronts the floating head of John the Baptist. <a href=\"/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> painted this decadent, jewel-encrusted vision of biblical horror." },
      { question: "Where is The Apparition displayed?", answer: "It's at <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. Moreau created several versions of this haunting scene." },
      { question: "What movement was Moreau part of?", answer: "<a href=\"/artist/gustave-moreau\"><strong>Moreau</strong></a> was a leading Symbolist, creating mysterious, <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre</strong></a> images that influenced Art Nouveau and Surrealism." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 17)...');
  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: { faqs: update.faqs, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (e) {
      console.error(`✗ Failed: ${update.slug}`, e.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
