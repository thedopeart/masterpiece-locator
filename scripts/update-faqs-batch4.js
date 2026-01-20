const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updates = [
    {
      slug: 'merry-family',
      faqs: [
        {
          question: "Where is The Merry Family displayed?",
          answer: "This painting hangs at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's one of Jan Steen's finest depictions of Dutch domestic chaos."
        },
        {
          question: "Who painted The Merry Family?",
          answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a> created this work around 1668. His chaotic household scenes gave rise to the Dutch expression 'a Jan Steen household.'"
        },
        {
          question: "What is happening in The Merry Family?",
          answer: "A multigenerational family celebrates raucously. Children smoke, drink, and make noise while parents join in. A parrot and scattered objects add to the <strong>domestic disorder</strong>."
        },
        {
          question: "What is the painting's message?",
          answer: "A plaque above the scene reads 'As the old sing, so pipe the young.' Steen warns that <strong>children learn bad habits</strong> from their parents' example."
        }
      ]
    },
    {
      slug: 'the-milkmaid',
      faqs: [
        {
          question: "Where can I see The Milkmaid?",
          answer: "This painting is at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's considered the museum's most treasured possession."
        },
        {
          question: "Who painted The Milkmaid?",
          answer: "<a href=\"/artist/johannes-vermeer\"><strong>Johannes Vermeer</strong></a> created this around 1658-1660. Only about 35 paintings by him survive, making each one precious."
        },
        {
          question: "What makes The Milkmaid so famous?",
          answer: "Vermeer elevated a simple domestic scene to timeless art. The <strong>quiet concentration</strong> of a servant pouring milk becomes almost sacred through his treatment of light."
        },
        {
          question: "What is the milkmaid pouring?",
          answer: "She pours milk to make bread pudding or porridge. Bread and a ceramic jug rest on the table. The <strong>humble subject</strong> shows Vermeer's interest in everyday life."
        }
      ]
    },
    {
      slug: 'miracle-relic-cross',
      faqs: [
        {
          question: "Where is the Miracle of the Relic of the Cross displayed?",
          answer: "This painting is at the <a href=\"/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice. It's part of a cycle depicting miracles of a holy relic."
        },
        {
          question: "Who painted this miracle scene?",
          answer: "<a href=\"/artist/vittore-carpaccio\"><strong>Vittore Carpaccio</strong></a> painted this in 1496. He specialized in narrative paintings filled with <strong>Venetian cityscapes</strong> and crowds."
        },
        {
          question: "What miracle does the painting show?",
          answer: "A relic of the True Cross falls into a canal but refuses to be retrieved by anyone except the patriarch. The painting captures <strong>15th-century Venice</strong> in vivid detail."
        },
        {
          question: "What makes this painting valuable historically?",
          answer: "Carpaccio documented Venice's architecture, costumes, and social life. The <strong>wooden Rialto Bridge</strong> appears before it was rebuilt in stone."
        }
      ]
    },
    {
      slug: 'moneylender-wife',
      faqs: [
        {
          question: "Where is The Moneylender and His Wife displayed?",
          answer: "This painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. It's a foundational work of Flemish genre painting."
        },
        {
          question: "Who painted The Moneylender and His Wife?",
          answer: "<a href=\"/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a> created this in 1514. He was a leading painter in Antwerp during the early 16th century."
        },
        {
          question: "What does The Moneylender and His Wife show?",
          answer: "A man weighs coins while his wife turns from her prayer book to watch. A <strong>convex mirror</strong> reflects a window and tiny figure, recalling Van Eyck's Arnolfini Portrait."
        },
        {
          question: "What is the painting's moral message?",
          answer: "The wife's distraction from devotion warns about <strong>wealth corrupting faith</strong>. Symbols throughout remind viewers to balance material and spiritual concerns."
        }
      ]
    },
    {
      slug: 'ninth-wave',
      faqs: [
        {
          question: "Where can I see The Ninth Wave?",
          answer: "This painting is at the <a href=\"/museum/russian-museum\"><strong>State Russian Museum</strong></a> in Saint Petersburg. It's the most famous Russian seascape ever painted."
        },
        {
          question: "Who painted The Ninth Wave?",
          answer: "<a href=\"/artist/ivan-aivazovsky\"><strong>Ivan Aivazovsky</strong></a> created this masterpiece in 1850. He painted over 6,000 works, most depicting the <a href=\"https://luxurywallart.com/collections/wave-art\" target=\"_blank\" rel=\"noopener\"><strong>sea</strong></a>."
        },
        {
          question: "What does The Ninth Wave depict?",
          answer: "Shipwreck survivors cling to wreckage as sunrise breaks over stormy seas. The <strong>massive ninth wave</strong> approaches, threatening to overwhelm them."
        },
        {
          question: "Why is it called The Ninth Wave?",
          answer: "Sailors believed every ninth wave was the largest and most dangerous. Despite the threat, the <strong>golden sunrise</strong> suggests hope for the survivors."
        }
      ]
    },
    {
      slug: 'origin-of-the-milky-way',
      faqs: [
        {
          question: "Where is The Origin of the Milky Way displayed?",
          answer: "This painting hangs at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It's one of Tintoretto's most dynamic mythological scenes."
        },
        {
          question: "Who painted The Origin of the Milky Way?",
          answer: "<a href=\"/artist/tintoretto\"><strong>Tintoretto</strong></a> created this around 1575-1580. The Venetian master was known for dramatic lighting and dynamic compositions."
        },
        {
          question: "What myth does this painting illustrate?",
          answer: "Jupiter brings his illegitimate son Hercules to nurse from sleeping Juno. Her spurting milk creates stars above and <strong>lilies below</strong> (now lost from the painting)."
        },
        {
          question: "Was the painting originally larger?",
          answer: "The canvas was cut down at some point. The lower section showing <strong>lilies sprouting from milk drops</strong> no longer survives, altering the composition."
        }
      ]
    },
    {
      slug: 'the-oxbow',
      faqs: [
        {
          question: "Where can I see The Oxbow?",
          answer: "This painting is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It's Cole's most celebrated American <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a>."
        },
        {
          question: "Who painted The Oxbow?",
          answer: "<a href=\"/artist/thomas-cole\"><strong>Thomas Cole</strong></a> painted this in 1836. He founded the <strong>Hudson River School</strong>, America's first major art movement."
        },
        {
          question: "What does The Oxbow show?",
          answer: "A thunderstorm clears over the Connecticut River valley. Wild nature on the left contrasts with <strong>cultivated farmland</strong> on the right, divided by the dramatic bend in the river."
        },
        {
          question: "Where is the artist in the painting?",
          answer: "Cole painted himself at his easel in the lower center, tiny against the vast landscape. His presence invites viewers to <strong>contemplate nature's grandeur</strong>."
        }
      ]
    },
    {
      slug: 'penitent-magdalen-la-tour',
      faqs: [
        {
          question: "Where is La Tour's Penitent Magdalen displayed?",
          answer: "This version is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. La Tour painted several candlelit Magdalen scenes."
        },
        {
          question: "Who painted The Penitent Magdalen?",
          answer: "<a href=\"/artist/georges-de-la-tour\"><strong>Georges de La Tour</strong></a> created this around 1640. His mysterious candlelit scenes fell into obscurity until the 20th century."
        },
        {
          question: "What does The Penitent Magdalen show?",
          answer: "Mary Magdalene contemplates a skull by candlelight. Her hand rests on a <strong>human skull</strong> as she meditates on mortality and repentance."
        },
        {
          question: "What makes La Tour's lighting special?",
          answer: "A single candle illuminates the dark scene, its flame reflected in a mirror. La Tour mastered <strong>tenebrism</strong>, the dramatic contrast of light and shadow."
        }
      ]
    },
    {
      slug: 'port-saint-tropez',
      faqs: [
        {
          question: "Where is The Port of Saint-Tropez displayed?",
          answer: "This painting is at the <a href=\"/museum/national-museum-western-art-tokyo\"><strong>National Museum of Western Art</strong></a> in Tokyo. It's a prime example of Neo-Impressionist technique."
        },
        {
          question: "Who painted The Port of Saint-Tropez?",
          answer: "<a href=\"/artist/paul-signac\"><strong>Paul Signac</strong></a> created this in 1901. He developed <strong>Pointillism</strong> alongside Georges Seurat."
        },
        {
          question: "What technique does this painting use?",
          answer: "Signac applied pure colors in small, separate brushstrokes that blend in the viewer's eye. This <strong>Divisionist technique</strong> creates vibrant, shimmering light."
        },
        {
          question: "Why did Signac paint Saint-Tropez?",
          answer: "Signac discovered the fishing village in 1892 and made it his home. He attracted other artists to the <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>Mediterranean coast</strong></a>, helping make it famous."
        }
      ]
    },
    {
      slug: 'rape-sabine-women',
      faqs: [
        {
          question: "Where is Poussin's Rape of the Sabine Women?",
          answer: "This version is at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. Poussin painted an earlier version now in the Metropolitan Museum."
        },
        {
          question: "Who painted The Rape of the Sabine Women?",
          answer: "<a href=\"/artist/nicolas-poussin\"><strong>Nicolas Poussin</strong></a> painted this around 1637-1638. The French artist spent most of his career in Rome, studying classical antiquity."
        },
        {
          question: "What story does this painting tell?",
          answer: "Early Romans, lacking wives, invited neighboring Sabines to a festival and seized their women. The painting captures the <strong>chaos and violence</strong> of the abduction."
        },
        {
          question: "Why was this subject popular?",
          answer: "The story appeared in ancient Roman histories as founding mythology. Artists used it to demonstrate skill at depicting <strong>dramatic action</strong> and the human figure in motion."
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
