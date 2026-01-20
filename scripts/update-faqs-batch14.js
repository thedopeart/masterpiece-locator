const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'landscape-flight-egypt',
    faqs: [
      { question: "Who painted Landscape with the Flight into Egypt?", answer: "<a href=\"/artist/joachim-patinir\"><strong>Joachim Patinir</strong></a> created this work around 1520. He's considered the inventor of landscape painting as an independent genre." },
      { question: "Where can I see this painting?", answer: "It's at the <a href=\"/museum/musee-royal-beaux-arts-antwerp\"><strong>Musée Royal des Beaux-Arts</strong></a> in Antwerp. Patinir's panoramic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> influenced generations of artists." },
      { question: "What makes Patinir's landscapes distinctive?", answer: "<a href=\"/artist/joachim-patinir\"><strong>Patinir</strong></a> pioneered the 'world landscape' format, showing vast panoramas with tiny figures. The religious subject becomes almost secondary to the sweeping natural scenery." }
    ]
  },
  {
    slug: 'landscape-isaac-rebecca',
    faqs: [
      { question: "Who painted this landscape?", answer: "<a href=\"/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a> created this idealized scene in 1648. The French artist spent most of his career in Rome, perfecting luminous Italian landscapes." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London owns this work. It's also called 'The Mill' and shows Claude's mastery of golden light." },
      { question: "What style is this painting?", answer: "<a href=\"/artist/claude-lorrain\"><strong>Claude</strong></a> defined the classical <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> tradition. His compositions balanced nature and architecture with soft atmospheric perspective." }
    ]
  },
  {
    slug: 'nymphs-satyr',
    faqs: [
      { question: "What is Nymphs and Satyr about?", answer: "Four playful nymphs drag a reluctant satyr toward water. <a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> created this sensual scene with academic precision and smooth, idealized figures." },
      { question: "Where can I see Nymphs and Satyr?", answer: "The <a href=\"/museum/clark-art-institute\"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts displays this large canvas. It's one of Bouguereau's most reproduced works." },
      { question: "What style is Bouguereau known for?", answer: "<a href=\"/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> was the leading French academic painter of his era. His realistic technique and mythological subjects delighted Victorian audiences." }
    ]
  },
  {
    slug: 'roses-heliogabalus',
    faqs: [
      { question: "What does The Roses of Heliogabalus show?", answer: "The Roman emperor Heliogabalus smothers dinner guests with rose petals dropped from above. <a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> depicts decadence and cruelty with lavish detail." },
      { question: "Who painted The Roses of Heliogabalus?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a> created this in 1888. He specialized in luxurious scenes of ancient Rome with meticulous archaeological accuracy." },
      { question: "Are the roses in the painting real?", answer: "<a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> had fresh roses shipped weekly from the French Riviera while painting. His dedication to <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> accuracy was legendary." }
    ]
  },
  {
    slug: 'hylas-nymphs',
    faqs: [
      { question: "What myth does Hylas and the Nymphs depict?", answer: "Water nymphs lure the beautiful youth Hylas into their pool, where he drowns. <a href=\"/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted this seductive scene from Greek mythology in 1896." },
      { question: "Where can I see Hylas and the Nymphs?", answer: "It's at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The painting became controversial in 2018 when temporarily removed for a debate about the male gaze." },
      { question: "What movement was Waterhouse part of?", answer: "<a href=\"/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> worked in the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> tradition, focusing on literary and mythological subjects with detailed naturalism." }
    ]
  },
  {
    slug: 'fur-traders-missouri',
    faqs: [
      { question: "What does Fur Traders Descending the Missouri show?", answer: "<a href=\"/artist/george-caleb-bingham\"><strong>George Caleb Bingham</strong></a> painted a French trader and his son in a dugout canoe with a bear cub. The misty river scene captures American frontier life." },
      { question: "Where is this painting displayed?", answer: "It's at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Bingham painted it in 1845, documenting Missouri River trade before it disappeared." },
      { question: "What's the animal in the boat?", answer: "The dark creature chained at the bow is a bear cub, not a cat as often assumed. <a href=\"/artist/george-caleb-bingham\"><strong>Bingham</strong></a> shows the <a href=\"https://luxurywallart.com/collections/animal-artwork\" target=\"_blank\" rel=\"noopener\"><strong>animal</strong></a> as cargo for sale." }
    ]
  },
  {
    slug: 'kindred-spirits',
    faqs: [
      { question: "Who are the Kindred Spirits in this painting?", answer: "Painter Thomas Cole and poet William Cullen Bryant stand on a cliff overlooking Kaaterskill Clove. <a href=\"/artist/asher-brown-durand\"><strong>Asher Brown Durand</strong></a> painted this tribute after Cole's death." },
      { question: "Where can I see Kindred Spirits?", answer: "It's at <a href=\"/museum/crystal-bridges\"><strong>Crystal Bridges Museum of American Art</strong></a> in Arkansas. The painting sold for $35 million in 2005, a record for American art." },
      { question: "What movement does this represent?", answer: "<a href=\"/artist/asher-brown-durand\"><strong>Durand</strong></a> was a leader of the Hudson River School. The painting celebrates American <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> and romantic friendship." }
    ]
  },
  {
    slug: 'madonna-with-the-long-neck',
    faqs: [
      { question: "Why does the Madonna have a long neck?", answer: "<a href=\"/artist/parmigianino\"><strong>Parmigianino</strong></a> deliberately elongated figures for elegant effect. This <a href=\"/movement/mannerism\"><strong>Mannerist</strong></a> style rejected Renaissance naturalism for sophisticated artifice." },
      { question: "Where is Madonna with the Long Neck displayed?", answer: "The <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence houses this unfinished work. Note the tiny prophet figure at lower right and the missing background." },
      { question: "Is this painting finished?", answer: "<a href=\"/artist/parmigianino\"><strong>Parmigianino</strong></a> worked on it from 1534 until his death in 1540 but never completed it. The bare canvas at right shows his intentions for a colonnade." }
    ]
  },
  {
    slug: 'descent-from-the-cross',
    faqs: [
      { question: "Who painted Descent from the Cross?", answer: "<a href=\"/artist/peter-paul-rubens\"><strong>Peter Paul Rubens</strong></a> created this altarpiece in 1612-1614. It's considered one of his finest <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\"><strong>religious</strong></a> works." },
      { question: "Where can I see this painting?", answer: "Visit <a href=\"/museum/antwerp-cathedral\"><strong>Cathedral of Our Lady</strong></a> in Antwerp. The massive triptych remains in its original location, as Rubens intended." },
      { question: "What makes this Descent special?", answer: "<a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> captured the physical weight of Christ's body as figures struggle to lower it. The diagonal composition creates powerful <a href=\"/movement/baroque\"><strong>Baroque</strong></a> drama." }
    ]
  },
  {
    slug: 'woman-child-courtyard',
    faqs: [
      { question: "Who painted Woman and Child in a Courtyard?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a> created this domestic scene around 1658. He rivaled Vermeer in depicting quiet moments of Dutch life." },
      { question: "Where is this painting displayed?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London owns it. De Hooch specialized in sunlit courtyards and interiors with precise perspective." },
      { question: "What style is de Hooch known for?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> mastered <a href=\"/movement/baroque\"><strong>Baroque</strong></a> genre painting, showing everyday life with careful attention to light passing through doorways and windows." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 14)...');
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
