const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'tribute-money',
    faqs: [
      { question: "What does The Tribute Money depict?", answer: "Christ tells Peter to find a coin in a fish's mouth to pay the temple tax. <a href=\"/artist/masaccio\"><strong>Masaccio</strong></a> shows three moments in one scene: the demand, the miracle, and the payment." },
      { question: "Where can I see The Tribute Money?", answer: "It's a fresco at the <a href=\"/museum/brancacci-chapel\"><strong>Brancacci Chapel</strong></a> in Florence. Masaccio painted it around 1425, revolutionizing perspective and naturalism." },
      { question: "Why is Masaccio's Tribute Money important?", answer: "<a href=\"/artist/masaccio\"><strong>Masaccio</strong></a> pioneered <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painting with realistic figures, atmospheric perspective, and coherent light. Michelangelo studied these frescoes closely." }
    ]
  },
  {
    slug: 'midsummer-dance',
    faqs: [
      { question: "What is Midsummer Dance about?", answer: "<a href=\"/artist/anders-zorn\"><strong>Anders Zorn</strong></a> captured Swedish villagers dancing around a maypole at midsummer. The painting celebrates traditional folk culture with <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>vibrant colors</strong></a>." },
      { question: "Where is Midsummer Dance displayed?", answer: "The <a href=\"/museum/national-museum-stockholm\"><strong>National Museum</strong></a> in Stockholm owns this work. Zorn is Sweden's most celebrated painter." },
      { question: "What style did Anders Zorn work in?", answer: "<a href=\"/artist/anders-zorn\"><strong>Zorn</strong></a> combined <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> light effects with strong draftsmanship. His loose brushwork captures movement and festive atmosphere beautifully." }
    ]
  },
  {
    slug: 'tower-blue-horses',
    faqs: [
      { question: "What happened to The Tower of Blue Horses?", answer: "This major work by <a href=\"/artist/franz-marc\"><strong>Franz Marc</strong></a> disappeared after World War II. The Nazis seized it as 'degenerate art,' and it hasn't been seen since 1945." },
      { question: "What did The Tower of Blue Horses show?", answer: "Four <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>blue horses</strong></a> stacked vertically against a colorful sky. <a href=\"/artist/franz-marc\"><strong>Marc</strong></a> used blue to represent spirituality and masculinity." },
      { question: "Where was it last displayed?", answer: "The painting was at <a href=\"/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich before the war. Art historians still hope it survives somewhere." }
    ]
  },
  {
    slug: 'winter-landscape-skaters',
    faqs: [
      { question: "What makes Avercamp's winter scenes special?", answer: "<a href=\"/artist/hendrick-avercamp\"><strong>Hendrick Avercamp</strong></a> specialized in lively winter <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> filled with dozens of figures skating, playing, and socializing on frozen waterways." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam owns this panoramic scene. Avercamp was deaf from birth and observed life with particular intensity." },
      { question: "When was this painted?", answer: "<a href=\"/artist/hendrick-avercamp\"><strong>Avercamp</strong></a> created this around 1608 during the Little Ice Age. His paintings document how harsh Dutch winters brought communities together outdoors." }
    ]
  },
  {
    slug: 'woman-reading-letter-metsu',
    faqs: [
      { question: "What is Woman Reading a Letter about?", answer: "A woman reads a letter while her maid draws back a curtain to reveal a seascape. <a href=\"/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> suggests the letter brings news from a sailor abroad." },
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/national-gallery-ireland\"><strong>National Gallery of Ireland</strong></a> in Dublin. It pairs with 'Man Writing a Letter' also in the collection." },
      { question: "How does this compare to Vermeer?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Metsu</strong></a> rivaled Vermeer in depicting quiet domestic moments. Both Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> masters excelled at showing light on interior surfaces." }
    ]
  },
  {
    slug: 'descent-rogier',
    faqs: [
      { question: "Who painted this Descent from the Cross?", answer: "<a href=\"/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> created this masterpiece around 1435. It's considered one of the greatest <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> paintings." },
      { question: "Where is Rogier's Descent displayed?", answer: "The <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid owns it. Philip II of Spain acquired it in the 16th century." },
      { question: "What makes this Descent from the Cross special?", answer: "<a href=\"/artist/rogier-van-der-weyden\"><strong>Rogier</strong></a> arranged ten figures in a shallow space like sculpture. The grief is palpable. Mary's pose mirrors Christ's, connecting mother and son in death." }
    ]
  },
  {
    slug: 'flaming-june',
    faqs: [
      { question: "What does Flaming June show?", answer: "A woman sleeps curled in a chair, draped in sheer orange fabric. <a href=\"/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a> created this iconic image of languorous Victorian beauty in 1895." },
      { question: "Where is Flaming June displayed?", answer: "The <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London displays it now. The painting was nearly lost, sold cheaply and passed around before being recognized as a masterpiece." },
      { question: "Why is Flaming June so popular?", answer: "<a href=\"/artist/frederic-leighton\"><strong>Leighton's</strong></a> sensual scene combines classical composition with <a href=\"https://luxurywallart.com/collections/orange-art\" target=\"_blank\" rel=\"noopener\"><strong>vibrant orange</strong></a> against deep blue sea. It's endlessly reproduced on posters and products." }
    ]
  },
  {
    slug: 'george-washington-lansdowne',
    faqs: [
      { question: "Who painted this George Washington portrait?", answer: "<a href=\"/artist/gilbert-stuart\"><strong>Gilbert Stuart</strong></a> created this full-length state portrait in 1796. It shows Washington at 64, in his last year as president." },
      { question: "Where is the Lansdowne portrait?", answer: "The <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. owns it. Stuart painted several versions; this one went to British Prime Minister Lansdowne." },
      { question: "Why is this portrait famous?", answer: "<a href=\"/artist/gilbert-stuart\"><strong>Stuart's</strong></a> dignified image shaped how Americans see Washington. The sword, books, and classical columns present him as a modern Roman statesman." }
    ]
  },
  {
    slug: 'washington-crossing-delaware',
    faqs: [
      { question: "Is Washington Crossing the Delaware historically accurate?", answer: "Not entirely. <a href=\"/artist/emanuel-leutze\"><strong>Emanuel Leutze</strong></a> painted it in Germany using the wrong flag and boats. But the heroic image captured American imagination." },
      { question: "Where can I see this painting?", answer: "The original is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. At 21 feet wide, it dominates its gallery." },
      { question: "When did the actual crossing happen?", answer: "Washington crossed on Christmas night 1776 for a surprise attack on Trenton. <a href=\"/artist/emanuel-leutze\"><strong>Leutze</strong></a> painted it 75 years later to inspire democratic ideals." }
    ]
  },
  {
    slug: 'marriage-a-la-mode',
    faqs: [
      { question: "What is Marriage A-la-Mode about?", answer: "<a href=\"/artist/william-hogarth\"><strong>William Hogarth</strong></a> satirizes an arranged marriage between aristocracy and wealth. This scene shows the bored couple ignoring each other after a night out." },
      { question: "Where are the Marriage A-la-Mode paintings?", answer: "All six paintings hang at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London. Hogarth created them in 1743-1745 as a moral narrative." },
      { question: "What style is Hogarth known for?", answer: "<a href=\"/artist/william-hogarth\"><strong>Hogarth</strong></a> invented the 'modern moral subject,' telling stories through paintings with theatrical staging and symbolic details. His satire influenced British art for generations." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 15)...');
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
