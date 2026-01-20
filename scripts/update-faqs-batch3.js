const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updates = [
    {
      slug: 'horse-fair',
      faqs: [
        {
          question: "Where can I see The Horse Fair?",
          answer: "This monumental painting is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. At over 16 feet wide, it dominates the gallery."
        },
        {
          question: "Who painted The Horse Fair?",
          answer: "<a href=\"/artist/rosa-bonheur\"><strong>Rosa Bonheur</strong></a> completed this work in 1853. She was the most famous <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>animal painter</strong></a> of the 19th century."
        },
        {
          question: "What does The Horse Fair depict?",
          answer: "The painting shows the <strong>horse market</strong> held in Paris near the asylum of Salpêtrière. Handlers struggle to control spirited Percheron draft horses."
        },
        {
          question: "How did Rosa Bonheur research this painting?",
          answer: "Bonheur visited the market for over a year, sketching horses. She dressed in <strong>men's clothing</strong> to move freely and obtained police permission to do so."
        }
      ]
    },
    {
      slug: 'immaculate-conception-murillo',
      faqs: [
        {
          question: "Where is Murillo's Immaculate Conception displayed?",
          answer: "This painting hangs at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. It's considered the finest of Murillo's many depictions of this subject."
        },
        {
          question: "Who painted The Immaculate Conception of Los Venerables?",
          answer: "<a href=\"/artist/bartolome-murillo\"><strong>Bartolomé Esteban Murillo</strong></a> created this masterpiece in 1678. He defined the Spanish Baroque image of the Virgin Mary."
        },
        {
          question: "What does the Immaculate Conception mean?",
          answer: "The doctrine holds that Mary was conceived without <strong>original sin</strong>. Murillo shows her standing on a crescent moon, surrounded by cherubs and heavenly light."
        },
        {
          question: "Why is this painting called 'of Los Venerables'?",
          answer: "It was painted for the Hospital de los Venerables Sacerdotes in Seville. Napoleon's troops later seized it. Spain finally <strong>recovered the painting</strong> in 1941."
        }
      ]
    },
    {
      slug: 'isle-of-dead',
      faqs: [
        {
          question: "Where can I see The Isle of the Dead?",
          answer: "The original 1880 version is at <a href=\"/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a>. Böcklin created five versions, now in museums across Europe and New York."
        },
        {
          question: "Who painted The Isle of the Dead?",
          answer: "<a href=\"/artist/arnold-bocklin\"><strong>Arnold Böcklin</strong></a> first painted this haunting image in 1880. The Swiss Symbolist created five versions over the following years."
        },
        {
          question: "What does The Isle of the Dead show?",
          answer: "A small boat approaches a rocky island with towering cypress trees. A white-shrouded figure accompanies a coffin. The <strong>mysterious destination</strong> suggests death and the afterlife."
        },
        {
          question: "Who commissioned The Isle of the Dead?",
          answer: "A widow named Marie Berna commissioned a painting to dream by. Böcklin's <strong>melancholic vision</strong> became wildly popular, reproduced in countless homes across Europe."
        }
      ]
    },
    {
      slug: 'jewish-cemetery',
      faqs: [
        {
          question: "Where is The Jewish Cemetery displayed?",
          answer: "This painting hangs at the <a href=\"/museum/gemaldegalerie-alte-meister\"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden, Germany. A second version exists at the Detroit Institute of Arts."
        },
        {
          question: "Who painted The Jewish Cemetery?",
          answer: "<a href=\"/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a> created this around 1654-1657. He was the greatest Dutch <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> painter of the 17th century."
        },
        {
          question: "What makes The Jewish Cemetery significant?",
          answer: "Ruisdael combines the actual Beth Haim cemetery near Amsterdam with invented ruins and stormy skies. The painting meditates on <strong>mortality and time</strong>."
        },
        {
          question: "Is the cemetery in the painting real?",
          answer: "The tombs are based on the <strong>Portuguese-Jewish cemetery</strong> at Ouderkerk. Ruisdael added ruined churches, dead trees, and dramatic weather for emotional effect."
        }
      ]
    },
    {
      slug: 'judgment-cambyses',
      faqs: [
        {
          question: "Where is The Judgment of Cambyses displayed?",
          answer: "This diptych hangs at the <a href=\"/museum/groeningemuseum\"><strong>Groeningemuseum</strong></a> in Bruges, Belgium. It was originally painted for the town hall's magistrates' room."
        },
        {
          question: "Who painted The Judgment of Cambyses?",
          answer: "<a href=\"/artist/gerard-david\"><strong>Gerard David</strong></a> completed this work in 1498. He was the last great master of the Bruges school of painting."
        },
        {
          question: "What story does The Judgment of Cambyses tell?",
          answer: "A corrupt judge named Sisamnes is arrested and <strong>flayed alive</strong> on the king's orders. The gruesome scene warned magistrates against taking bribes."
        },
        {
          question: "Why was this painting hung in the town hall?",
          answer: "It served as a warning to judges who might be tempted by corruption. The <strong>graphic punishment</strong> reminded officials of the consequences of injustice."
        }
      ]
    },
    {
      slug: 'lackawanna-valley',
      faqs: [
        {
          question: "Where is The Lackawanna Valley displayed?",
          answer: "This painting is at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It's a key work of American landscape painting."
        },
        {
          question: "Who painted The Lackawanna Valley?",
          answer: "<a href=\"/artist/george-inness\"><strong>George Inness</strong></a> painted this in 1855. He was commissioned by the Delaware, Lackawanna, and Western Railroad."
        },
        {
          question: "What does The Lackawanna Valley show?",
          answer: "A boy lies in a field watching a <strong>steam locomotive</strong> approach. The painting shows industry arriving in the American wilderness, with cut tree stumps dotting the hillside."
        },
        {
          question: "Why is this painting historically important?",
          answer: "Inness struggled to balance the railroad's demands with artistic vision. The work captures America's <strong>ambivalence about progress</strong> disrupting pastoral landscapes."
        }
      ]
    },
    {
      slug: 'lady-of-shalott',
      faqs: [
        {
          question: "Where can I see The Lady of Shalott?",
          answer: "This painting hangs at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It's one of the most popular works in the museum's collection."
        },
        {
          question: "Who painted The Lady of Shalott?",
          answer: "<a href=\"/artist/john-william-waterhouse\"><strong>John William Waterhouse</strong></a> created this in 1888. Though later than the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a>, he shared their love of medieval subjects."
        },
        {
          question: "What story does The Lady of Shalott tell?",
          answer: "The painting illustrates Tennyson's poem about a woman cursed to view the world only through a mirror. She leaves her tower to seek <strong>Lancelot</strong> and dies."
        },
        {
          question: "What is the Lady holding?",
          answer: "She releases the chain mooring her boat while tapestry threads tangle around her. Three candles blow out, symbolizing her <strong>approaching death</strong>."
        }
      ]
    },
    {
      slug: 'the-large-bathers',
      faqs: [
        {
          question: "Where is Cézanne's Large Bathers displayed?",
          answer: "This painting is at the <a href=\"/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. It's the largest and most ambitious of Cézanne's bather compositions."
        },
        {
          question: "Who painted The Large Bathers?",
          answer: "<a href=\"/artist/paul-cezanne\"><strong>Paul Cézanne</strong></a> worked on this painting from 1900-1906. He spent seven years developing this monumental composition."
        },
        {
          question: "What makes The Large Bathers significant?",
          answer: "Cézanne created a new kind of <strong>figure composition</strong> that influenced Picasso and Matisse. The geometric simplification of bodies pointed toward Cubism."
        },
        {
          question: "Why are the figures so distorted?",
          answer: "Cézanne sacrificed anatomical accuracy to integrate figures with the landscape. Bodies become <strong>architectural forms</strong> that echo the arching trees above them."
        }
      ]
    },
    {
      slug: 'large-blue-horses',
      faqs: [
        {
          question: "Where can I see The Large Blue Horses?",
          answer: "This painting is at the <a href=\"/museum/minneapolis-institute-of-art\"><strong>Minneapolis Institute of Art</strong></a>. It's the museum's most beloved and recognized work."
        },
        {
          question: "Who painted The Large Blue Horses?",
          answer: "<a href=\"/artist/franz-marc\"><strong>Franz Marc</strong></a> created this in 1911. He founded Der Blaue Reiter (The Blue Rider) group with Kandinsky."
        },
        {
          question: "Why are the horses blue?",
          answer: "Marc associated <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue</strong></a> with spirituality and masculinity. He believed animals possessed purity that modern humans had lost."
        },
        {
          question: "What happened to Franz Marc?",
          answer: "Marc was killed at the Battle of Verdun in 1916 at age 36. The German army had belatedly listed him for <strong>withdrawal from combat</strong> as a notable artist."
        }
      ]
    },
    {
      slug: 'light-of-world',
      faqs: [
        {
          question: "Where can I see The Light of the World?",
          answer: "The original hangs at <a href=\"/museum/keble-college\"><strong>Keble College Chapel</strong></a>, Oxford. Hunt painted larger versions now in Manchester and St Paul's Cathedral, London."
        },
        {
          question: "Who painted The Light of the World?",
          answer: "<a href=\"/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> completed this in 1853. He was a founding member of the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite Brotherhood</strong></a>."
        },
        {
          question: "What does The Light of the World symbolize?",
          answer: "Christ holds a lantern and knocks on an overgrown door representing the <strong>human soul</strong>. The door has no outside handle; it can only be opened from within."
        },
        {
          question: "How popular was this painting?",
          answer: "The St Paul's version toured the British Empire in 1905-1907. Over <strong>seven million people</strong> viewed it in Australia, New Zealand, South Africa, and Canada."
        }
      ]
    }
  ];

  for (const update of updates) {
    await prisma.artwork.update({
      where: { slug: update.slug },
      data: {
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });
    console.log(`Updated: ${update.slug}`);
  }

  console.log('\nDone! Updated 10 artworks with FAQs.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
