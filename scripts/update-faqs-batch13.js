const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'maesta-santa-trinita',
    faqs: [
      { question: "Who painted the Maestà of Santa Trinita?", answer: "<a href=\"/artist/cimabue\"><strong>Cimabue</strong></a> created this massive altarpiece around 1290. He was Giotto's teacher and one of the last great Byzantine-influenced painters in Italy." },
      { question: "Where is the Maestà of Santa Trinita displayed?", answer: "You can see it at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence. Originally made for Santa Trinita church, it now hangs in a room with similar works by Giotto and Duccio." },
      { question: "What does Maestà mean?", answer: "Maestà means \"majesty\" in Italian, referring to the Virgin Mary enthroned with Christ. <a href=\"/artist/cimabue\"><strong>Cimabue's</strong></a> version shows her surrounded by angels in gold-ground splendor typical of <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\"><strong>religious art</strong></a>." }
    ]
  },
  {
    slug: 'man-writing-letter',
    faqs: [
      { question: "Who painted Man Writing a Letter?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> created this intimate scene in 1665. He excelled at domestic interiors showing middle-class Dutch life during the Golden Age." },
      { question: "Where can I see Man Writing a Letter?", answer: "It's displayed at the <a href=\"/museum/national-gallery-ireland\"><strong>National Gallery of Ireland</strong></a> in Dublin. It has a companion piece, Woman Reading a Letter, also in the collection." },
      { question: "What style is Man Writing a Letter?", answer: "It's a Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting. <a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> rivals Vermeer in capturing quiet moments of daily life with careful attention to light and texture." }
    ]
  },
  {
    slug: 'moneylender-wife',
    faqs: [
      { question: "What is The Moneylender and His Wife about?", answer: "<a href=\"/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> shows a couple weighing coins while a prayer book lies open nearby. The scene contrasts material wealth with spiritual concerns." },
      { question: "Where is The Moneylender and His Wife?", answer: "The <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris displays this work. Matsys painted it in 1514, establishing a theme later artists would frequently revisit." },
      { question: "What details appear in The Moneylender and His Wife?", answer: "A convex mirror reflects a window and figure outside. <a href=\"/artist/quentin-matsys\"><strong>Matsys</strong></a> borrowed this device from van Eyck. For <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold-themed art</strong></a>, the coins and scales add visual richness." }
    ]
  },
  {
    slug: 'merry-family',
    faqs: [
      { question: "What is The Merry Family about?", answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a> depicts a chaotic household where adults drink and smoke while children imitate them. A scroll reads 'As the old sing, so pipe the young.'" },
      { question: "Where can I see The Merry Family?", answer: "It's at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. Steen painted many such scenes of domestic disorder, giving rise to the Dutch phrase 'a Jan Steen household.'" },
      { question: "Was Jan Steen serious or humorous?", answer: "<a href=\"/artist/jan-steen\"><strong>Steen</strong></a> balanced comedy with moral messages. His seemingly fun <a href=\"/movement/baroque\"><strong>Baroque</strong></a> scenes actually warned viewers about the consequences of excess and bad parenting." }
    ]
  },
  {
    slug: 'triumph-divine-providence',
    faqs: [
      { question: "What is the Triumph of Divine Providence?", answer: "It's a massive ceiling fresco by <a href=\"/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> glorifying the Barberini family and Pope Urban VIII. The illusionistic painting seems to open the ceiling to the heavens." },
      { question: "Where can I see this fresco?", answer: "Visit <a href=\"/museum/palazzo-barberini\"><strong>Palazzo Barberini</strong></a> in Rome to see it. The work took seven years (1633-1639) and covers the entire ceiling of the grand salon." },
      { question: "Why is this fresco important?", answer: "<a href=\"/artist/pietro-da-cortona\"><strong>Pietro da Cortona</strong></a> pioneered High <a href=\"/movement/baroque\"><strong>Baroque</strong></a> ceiling painting. His swirling figures and dramatic perspective influenced church and palace decorations across Europe." }
    ]
  },
  {
    slug: 'fortune-teller-caravaggio',
    faqs: [
      { question: "What happens in The Fortune Teller?", answer: "A gypsy girl reads a young man's palm while secretly slipping off his ring. <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> captures the moment of deception with psychological intensity." },
      { question: "Where is Caravaggio's Fortune Teller?", answer: "The <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> has this version. Another version exists in Rome. Both show <a href=\"/artist/caravaggio\"><strong>Caravaggio's</strong></a> revolutionary use of contemporary street life as subject matter." },
      { question: "What makes this painting significant?", answer: "<a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> rejected idealized classical subjects for scenes of everyday people. His <a href=\"/movement/baroque\"><strong>Baroque</strong></a> naturalism and dramatic lighting changed European painting." }
    ]
  },
  {
    slug: 'oath-horatii',
    faqs: [
      { question: "What does The Oath of the Horatii depict?", answer: "Three Roman brothers swear to fight for Rome against the Curiatii of Alba Longa. <a href=\"/artist/jacques-louis-david\"><strong>David</strong></a> shows them receiving swords from their father while women weep nearby." },
      { question: "Where is The Oath of the Horatii?", answer: "It hangs at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. Painted in 1784, it became a rallying image for the French Revolution five years later." },
      { question: "What style is The Oath of the Horatii?", answer: "<a href=\"/artist/jacques-louis-david\"><strong>Jacques-Louis David</strong></a> pioneered <a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a>, rejecting Rococo frivolity for Roman virtue. The stark composition and stoic heroes defined the movement." }
    ]
  },
  {
    slug: 'garden-earthly-delights',
    faqs: [
      { question: "What is The Garden of Earthly Delights?", answer: "<a href=\"/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a> painted this triptych showing Eden, earthly pleasures, and Hell. Hundreds of bizarre creatures and naked figures populate surreal landscapes." },
      { question: "Where can I see The Garden of Earthly Delights?", answer: "It's at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. The triptych is Bosch's most famous work and draws visitors from around the world." },
      { question: "What does The Garden of Earthly Delights mean?", answer: "Scholars still debate <a href=\"/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> intent. Some see moral warning against sin, others a vision of lost paradise. The painting's mystery fuels endless interpretation." },
      { question: "How big is The Garden of Earthly Delights?", answer: "Open, the triptych spans about 13 feet wide. <a href=\"/artist/hieronymus-bosch\"><strong>Bosch</strong></a> packed incredible detail into every inch. For <a href=\"https://luxurywallart.com/collections/surrealism-art\" target=\"_blank\" rel=\"noopener\"><strong>surrealist art</strong></a>, it's a foundational influence." }
    ]
  },
  {
    slug: 'arnolfini-portrait',
    faqs: [
      { question: "Who are the people in the Arnolfini Portrait?", answer: "Giovanni di Nicolao Arnolfini and his wife appear in their Bruges home. <a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> signed the painting above the mirror: 'Jan van Eyck was here, 1434.'" },
      { question: "Where is the Arnolfini Portrait displayed?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London owns it. The painting is a masterpiece of <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> detail and symbolism." },
      { question: "What do the symbols mean in the Arnolfini Portrait?", answer: "The single candle may represent God's presence. The dog symbolizes fidelity. Oranges suggest wealth. <a href=\"/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> loaded the scene with meaning scholars still decode." },
      { question: "Is the woman in the Arnolfini Portrait pregnant?", answer: "Probably not. Her pose and gathered dress followed fashion of the time. <a href=\"/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> showed stylish elegance rather than pregnancy in this formal <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a>." }
    ]
  },
  {
    slug: 'raft-of-medusa',
    faqs: [
      { question: "What event does The Raft of the Medusa show?", answer: "<a href=\"/artist/theodore-gericault\"><strong>Théodore Géricault</strong></a> depicted survivors of the French frigate Méduse, wrecked in 1816. The 147 people on a makeshift raft suffered starvation and cannibalism." },
      { question: "Where can I see The Raft of the Medusa?", answer: "It dominates a wall at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. At roughly 16 x 23 feet, the painting's massive scale immerses viewers in the tragedy." },
      { question: "Why was The Raft of the Medusa controversial?", answer: "<a href=\"/artist/theodore-gericault\"><strong>Géricault</strong></a> criticized government incompetence that caused the disaster. The raw depiction of suffering and death shocked audiences used to idealized classical subjects." },
      { question: "What style is The Raft of the Medusa?", answer: "It bridges <a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a> and Romanticism. <a href=\"/artist/theodore-gericault\"><strong>Géricault</strong></a> used classical composition but chose a modern, politically charged subject with raw emotional power." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 13)...');
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
