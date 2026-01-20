const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'lamentation-of-christ-mantegna',
    faqs: [
      { question: "Why is Mantegna's Lamentation of Christ famous for its perspective?", answer: "<a href=\"/artist/andrea-mantegna\" style=\"color: #028161;\"><strong>Andrea Mantegna</strong></a> painted Christ from an extreme foreshortened angle at the viewer's feet. This bold <a href=\"/movement/renaissance\" style=\"color: #028161;\"><strong>Renaissance</strong></a> technique creates raw emotional impact and draws you directly into the mourning scene." },
      { question: "Where can I see the Lamentation of Christ in person?", answer: "The original hangs at the <a href=\"/museum/pinacoteca-di-brera\" style=\"color: #C9A84C;\"><strong>Pinacoteca di Brera</strong></a> in Milan. It's one of their most visited works. For <a href=\"/movement/renaissance\" style=\"color: #028161;\"><strong>Renaissance</strong></a> art lovers, it's a must-see." },
      { question: "What makes the composition of Lamentation of Christ so unusual?", answer: "<a href=\"/artist/andrea-mantegna\" style=\"color: #028161;\"><strong>Mantegna</strong></a> placed the viewer at Christ's pierced feet, looking up the body. The mourners crowd into a tight corner. This wasn't decorative art. It was meant to shake you spiritually." }
    ]
  },
  {
    slug: 'haystacks-end-of-summer',
    faqs: [
      { question: "How many haystack paintings did Monet create?", answer: "<a href=\"/artist/claude-monet\" style=\"color: #028161;\"><strong>Claude Monet</strong></a> painted about 25 haystack canvases between 1890-1891. Each captured different light conditions and seasons. This series helped define <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionism's</strong></a> focus on fleeting atmospheric effects." },
      { question: "Where is Haystacks (End of Summer) displayed?", answer: "You'll find this piece at the <a href=\"/museum/art-institute-of-chicago\" style=\"color: #C9A84C;\"><strong>Art Institute of Chicago</strong></a>. They hold several <a href=\"/artist/claude-monet\" style=\"color: #028161;\"><strong>Monet</strong></a> works, making it a great spot for <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionist</strong></a> fans." },
      { question: "What inspired Monet to paint haystacks repeatedly?", answer: "<a href=\"/artist/claude-monet\" style=\"color: #028161;\"><strong>Monet</strong></a> noticed how light transformed these simple grain stacks throughout the day. He'd work on multiple canvases simultaneously, switching as conditions changed. Browse similar <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>landscape artwork</strong></a> for your walls." }
    ]
  },
  {
    slug: 'assumption-of-the-virgin-titian',
    faqs: [
      { question: "Why is Titian's Assumption of the Virgin considered a masterpiece?", answer: "<a href=\"/artist/titian\" style=\"color: #028161;\"><strong>Titian</strong></a> broke with Venetian tradition by using dramatic movement and bold reds. The composition pulls your eye upward through three distinct zones. It established him as Venice's leading <a href=\"/movement/renaissance\" style=\"color: #028161;\"><strong>Renaissance</strong></a> painter." },
      { question: "Where is the Assumption of the Virgin located?", answer: "It remains in its original home at the <a href=\"/museum/basilica-dei-frari\" style=\"color: #C9A84C;\"><strong>Basilica dei Frari</strong></a> in Venice. The massive altarpiece measures over 22 feet tall. <a href=\"/artist/titian\" style=\"color: #028161;\"><strong>Titian</strong></a> designed it specifically for that space." },
      { question: "What religious scene does this Titian painting depict?", answer: "It shows the Virgin Mary ascending to heaven, surrounded by angels and watched by the apostles below. <a href=\"/artist/titian\" style=\"color: #028161;\"><strong>Titian's</strong></a> treatment influenced <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>spiritual and religious art</strong></a> for centuries." }
    ]
  },
  {
    slug: 'the-turkish-bath',
    faqs: [
      { question: "What makes The Turkish Bath controversial?", answer: "<a href=\"/artist/jean-auguste-dominique-ingres\" style=\"color: #028161;\"><strong>Ingres</strong></a> painted it at age 82, filling a circular canvas with nude women in a harem setting. The voyeuristic composition sparked debate then and now. It reflects <a href=\"/movement/neoclassicism\" style=\"color: #028161;\"><strong>Neoclassical</strong></a> fascination with exotic subjects." },
      { question: "Where can I see The Turkish Bath?", answer: "The <a href=\"/museum/louvre\" style=\"color: #C9A84C;\"><strong>Louvre Museum</strong></a> in Paris owns this work. <a href=\"/artist/jean-auguste-dominique-ingres\" style=\"color: #028161;\"><strong>Ingres</strong></a> originally sold it to a prince whose wife demanded its return. It changed hands several times before reaching the Louvre." },
      { question: "Why did Ingres choose a round canvas for The Turkish Bath?", answer: "The tondo format creates an intimate peephole effect, like viewing through a keyhole. <a href=\"/artist/jean-auguste-dominique-ingres\" style=\"color: #028161;\"><strong>Ingres</strong></a> used this shape to heighten the sense of private voyeurism. Explore similar <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>women in art</strong></a> themes." }
    ]
  },
  {
    slug: 'violin-checkerboard',
    faqs: [
      { question: "What style is Violin and Checkerboard painted in?", answer: "<a href=\"/artist/juan-gris\" style=\"color: #028161;\"><strong>Juan Gris</strong></a> worked in Synthetic Cubism, which used flatter planes and brighter colors than early Cubism. He layered shapes to suggest objects without fully depicting them. It's more decorative than Picasso's fractured approach." },
      { question: "Where is Violin and Checkerboard displayed?", answer: "You can see it at <a href=\"/museum/the-met\" style=\"color: #C9A84C;\"><strong>The Metropolitan Museum of Art</strong></a> in New York. <a href=\"/artist/juan-gris\" style=\"color: #028161;\"><strong>Gris</strong></a> painted it in 1913, at the height of his Cubist period. The Met holds several of his works." },
      { question: "Why did Cubist painters like Juan Gris favor musical instruments?", answer: "Violins and guitars offered recognizable curves that could be fragmented and reassembled. <a href=\"/artist/juan-gris\" style=\"color: #028161;\"><strong>Gris</strong></a> loved how their forms created visual rhythm. Check out <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>abstract wall art</strong></a> inspired by this era." }
    ]
  },
  {
    slug: 'rape-sabine-women',
    faqs: [
      { question: "What story does The Rape of the Sabine Women depict?", answer: "<a href=\"/artist/nicolas-poussin\" style=\"color: #028161;\"><strong>Nicolas Poussin</strong></a> illustrated the Roman legend where Romulus's men abducted women from the neighboring Sabine tribe. It's about Rome's founding, not modern concepts of the term. The <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a> drama is intense." },
      { question: "Where is Poussin's Rape of the Sabine Women located?", answer: "The <a href=\"/museum/louvre\" style=\"color: #C9A84C;\"><strong>Louvre Museum</strong></a> in Paris displays this version from 1638. <a href=\"/artist/nicolas-poussin\" style=\"color: #028161;\"><strong>Poussin</strong></a> actually painted the subject twice. The Met owns an earlier version from around 1634." },
      { question: "What makes Poussin's composition style distinctive?", answer: "<a href=\"/artist/nicolas-poussin\" style=\"color: #028161;\"><strong>Poussin</strong></a> arranged figures like a theatrical stage, with clear foreground action and architectural backdrops. His <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a> approach influenced French academic painting for two centuries." }
    ]
  },
  {
    slug: 'white-roses-fantin',
    faqs: [
      { question: "What was Henri Fantin-Latour known for painting?", answer: "<a href=\"/artist/henri-fantin-latour\" style=\"color: #028161;\"><strong>Henri Fantin-Latour</strong></a> became famous for his flower paintings and group portraits of artists. His roses were especially popular with English collectors. He painted with soft, delicate brushwork that feels timeless." },
      { question: "What style did Fantin-Latour work in?", answer: "He's hard to categorize. <a href=\"/artist/henri-fantin-latour\" style=\"color: #028161;\"><strong>Fantin-Latour</strong></a> knew the Impressionists but painted more traditionally. His florals have a quiet realism that still feels fresh. Browse similar <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>floral artwork</strong></a> for your home." },
      { question: "Why are Fantin-Latour's flower paintings so collectible?", answer: "<a href=\"/artist/henri-fantin-latour\" style=\"color: #028161;\"><strong>Fantin-Latour</strong></a> captured flowers at their peak, with petals that seem to glow from within. His technique balanced precision with softness. Victorian collectors couldn't get enough of them." }
    ]
  },
  {
    slug: 'dempsey-firpo',
    faqs: [
      { question: "What moment does Dempsey and Firpo capture?", answer: "<a href=\"/artist/george-bellows\" style=\"color: #028161;\"><strong>George Bellows</strong></a> painted the exact second Jack Dempsey was knocked through the ropes by Luis Firpo in their 1923 fight. Dempsey climbed back and won. It's one of boxing's most dramatic moments." },
      { question: "Where is Dempsey and Firpo displayed?", answer: "The <a href=\"/museum/whitney-museum\" style=\"color: #C9A84C;\"><strong>Whitney Museum of American Art</strong></a> in New York owns this painting. <a href=\"/artist/george-bellows\" style=\"color: #028161;\"><strong>Bellows</strong></a> was actually at the fight and made sketches. He finished the painting shortly before his death." },
      { question: "Why did George Bellows paint boxing scenes?", answer: "<a href=\"/artist/george-bellows\" style=\"color: #028161;\"><strong>Bellows</strong></a> loved raw American energy. Boxing gave him dramatic lighting, powerful bodies in motion, and working-class grit. Check out <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>people and portraits</strong></a> artwork with similar intensity." }
    ]
  },
  {
    slug: 'where-do-we-come-from',
    faqs: [
      { question: "What is the meaning behind Gauguin's Where Do We Come From?", answer: "<a href=\"/artist/paul-gauguin\" style=\"color: #028161;\"><strong>Paul Gauguin</strong></a> painted this as his spiritual testament, depicting life's journey from birth to death. He'd planned suicide after finishing it. The title poses humanity's eternal questions about existence." },
      { question: "Where can I see Where Do We Come From? What Are We? Where Are We Going?", answer: "The <a href=\"/museum/mfa-boston\" style=\"color: #C9A84C;\"><strong>Museum of Fine Arts, Boston</strong></a> displays this massive canvas. At nearly 13 feet wide, it's <a href=\"/artist/paul-gauguin\" style=\"color: #028161;\"><strong>Gauguin's</strong></a> largest work and the crown of their <a href=\"/movement/post-impressionism\" style=\"color: #028161;\"><strong>Post-Impressionist</strong></a> collection." },
      { question: "How should you read the composition of this Gauguin painting?", answer: "<a href=\"/artist/paul-gauguin\" style=\"color: #028161;\"><strong>Gauguin</strong></a> intended you to read it right to left, like a Tahitian text. Life begins with a sleeping infant and ends with an old woman. Explore <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>spiritual artwork</strong></a> with similar depth." }
    ]
  },
  {
    slug: 'miracle-relic-cross',
    faqs: [
      { question: "What miracle does Carpaccio's painting depict?", answer: "<a href=\"/artist/vittore-carpaccio\" style=\"color: #028161;\"><strong>Vittore Carpaccio</strong></a> showed a relic of the True Cross healing a possessed man on Venice's Rialto Bridge. The painting doubles as a detailed record of 15th-century Venetian life and architecture." },
      { question: "Where is The Miracle of the Relic of the Cross displayed?", answer: "It hangs at the <a href=\"/museum/gallerie-dellaccademia\" style=\"color: #C9A84C;\"><strong>Gallerie dell'Accademia</strong></a> in Venice, alongside other paintings from the same <a href=\"/movement/renaissance\" style=\"color: #028161;\"><strong>Renaissance</strong></a> miracle cycle. <a href=\"/artist/vittore-carpaccio\" style=\"color: #028161;\"><strong>Carpaccio's</strong></a> version is the most architecturally detailed." },
      { question: "Why is this Carpaccio painting valuable to historians?", answer: "<a href=\"/artist/vittore-carpaccio\" style=\"color: #028161;\"><strong>Carpaccio</strong></a> documented Venice's old wooden Rialto Bridge before it was replaced. He included gondolas, merchant dress, and daily life with precision. It's both <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>religious art</strong></a> and visual history." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 10)...');
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
