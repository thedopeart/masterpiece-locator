const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'claude-monet-the-moreno-garden-at-bordighera',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this vibrant garden scene in 1884 during a trip to the Italian Riviera, where the Mediterranean light and subtropical vegetation offered entirely new subjects for his brush. The Moreno Garden in Bordighera dazzled him with its exotic palm trees, citrus groves, and intense colors that differed dramatically from the muted tones of northern France.</p>

<p>The painting bursts with <strong>brilliant blues and greens</strong> that capture the unique luminosity of the southern coast. Tall palms thrust upward against an azure sky while dense undergrowth fills the lower canvas with layered foliage. Monet worked quickly during his Italian stay, producing numerous canvases despite complaining in letters that the scenery was almost too beautiful, too perfect to paint.</p>

<p>This work marked a departure from the river scenes and Norman landscapes that dominated Monet's earlier career. The exotic vegetation challenged him to find new ways of rendering light through unfamiliar forms. He would return to French subjects afterward, but the Mediterranean palette influenced his color choices for years to come. The painting now belongs to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, where it represents Monet's ability to respond to <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>new landscapes</strong></a> with fresh vision.</p>`,
    faqs: [
      {
        question: "Where can I see The Moreno Garden at Bordighera?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois. The museum holds one of America's finest collections of Impressionist paintings.`
      },
      {
        question: "Where is Bordighera?",
        answer: `Bordighera is a town on the <strong>Italian Riviera</strong>, near the French border. <a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> traveled there in 1884, captivated by the Mediterranean light and subtropical vegetation that differed dramatically from northern France.`
      },
      {
        question: "Why did Monet travel to Italy?",
        answer: `Monet sought <strong>new subjects and light</strong> different from his usual Norman landscapes. The exotic palm trees, citrus groves, and intense Mediterranean colors challenged him to develop new approaches to rendering unfamiliar vegetation.`
      },
      {
        question: "What makes this painting distinctive in Monet's work?",
        answer: `The <strong>brilliant blues and greens</strong> and exotic palm trees differ dramatically from Monet's usual river scenes and northern French landscapes. The Mediterranean palette influenced his color choices for years afterward.`
      }
    ]
  },
  {
    slug: 'claude-monet-the-japanese-bridge-4',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of the Japanese bridge at Giverny in 1899, capturing one of the most iconic subjects in his entire body of work. The green arched bridge spans the water lily pond he had created on his property, its curves echoed by the drooping wisteria that hangs from its rails. Dappled light filters through the foliage, creating a shimmering atmosphere above the calm water.</p>

<p>Monet designed this garden specifically for painting. He diverted a stream to create the pond, planted water lilies, and constructed the <strong>Japanese-style bridge</strong> inspired by prints by Hiroshige and other ukiyo-e artists he collected. The result was a living canvas that changed with seasons, weather, and time of day, providing him subjects for the rest of his life.</p>

<p>This painting comes from the beginning of Monet's late period, when he increasingly focused on his garden rather than traveling to find subjects. He would paint the bridge and pond hundreds of times over the following decades, moving toward ever greater abstraction. The work now hangs at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, representing the start of an obsessive project that would produce some of <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>Impressionism's</strong></a> final masterpieces.</p>`,
    faqs: [
      {
        question: "Where can I see The Japanese Bridge?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York City. The museum holds several important works from Monet's Giverny period.`
      },
      {
        question: "Why did Monet build a Japanese bridge?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> was inspired by <strong>Japanese woodblock prints</strong> he collected, particularly works by Hiroshige. He designed his entire water garden as a living canvas, creating subjects specifically for painting.`
      },
      {
        question: "How many times did Monet paint this bridge?",
        answer: `Monet painted the Japanese bridge and water lily pond <strong>hundreds of times</strong> over the final decades of his life. He returned to this subject obsessively, moving toward ever greater abstraction.`
      },
      {
        question: "Where is Giverny?",
        answer: `Giverny is a village in <strong>northern France</strong> where Monet lived from 1883 until his death in 1926. He designed elaborate gardens there, including the famous water lily pond, which are now open to visitors.`
      }
    ]
  },
  {
    slug: 'pierre-auguste-renoir-reclining-nude',
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted this reclining nude around 1883, during a transitional period when he was moving away from pure Impressionism toward a more classical approach. The figure stretches across the canvas in a traditional pose that echoes Old Master paintings, her flesh rendered in the warm pink and peach tones that became Renoir's trademark treatment of the female body.</p>

<p>This work belongs to what critics call Renoir's <strong>"Ingres period"</strong> or "dry period," named after the nineteenth-century master whose precise draftsmanship Renoir suddenly admired. After traveling to Italy and seeing Raphael's frescoes, he grew dissatisfied with Impressionism's dissolved forms and sought more defined contours. The reclining nude shows this shift: softly brushed backgrounds but clearer outlines around the figure.</p>

<p>Renoir would eventually synthesize these approaches, combining classical form with Impressionist color in his final decades. This painting now belongs to a <strong>private collection</strong>, less accessible than his major museum works but significant for understanding his artistic development. The nude subject remained central to his art, a celebration of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>sensuous beauty</strong></a> that he pursued until his death despite crippling arthritis.</p>`,
    faqs: [
      {
        question: "Where can I see this Renoir painting?",
        answer: `This painting belongs to a <strong>private collection</strong>, making it less accessible than Renoir's works in public museums. It represents his transitional "Ingres period" of the 1880s.`
      },
      {
        question: "What is Renoir's 'Ingres period'?",
        answer: `After traveling to Italy, <a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Renoir</strong></a> grew dissatisfied with Impressionism's dissolved forms and sought more <strong>defined contours</strong> inspired by Ingres and Raphael. This "dry period" featured clearer outlines than his earlier work.`
      },
      {
        question: "Why did Renoir paint so many nudes?",
        answer: `The <strong>female nude</strong> remained central to Renoir's art throughout his career. He saw it as the ultimate subject for exploring color, light, and the celebration of sensuous beauty. He continued painting nudes even as arthritis crippled his hands.`
      },
      {
        question: "What makes Renoir's flesh tones distinctive?",
        answer: `Renoir developed a trademark palette of <strong>warm pinks, peaches, and rose tones</strong> for rendering skin. His flesh seems to glow from within, softer and warmer than the academic nudes of his contemporaries.`
      }
    ]
  },
  {
    slug: 'paul-cezanne-selfportrait',
    description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted this self-portrait around 1880, one of more than two dozen he created over his career. The image shows the artist with his characteristic bald head and dark beard, his expression stern and penetrating. Rather than flattering himself, Cézanne analyzed his own features with the same rigorous attention he brought to apples and mountains.</p>

<p>The face emerges from the canvas through <strong>geometric construction</strong>, built up in planes and patches of color that anticipate Cubism by three decades. Cézanne described his method as treating nature "by the cylinder, the sphere, the cone," and his self-portraits demonstrate this approach applied to human features. The result feels simultaneously solid and fragmented, present yet analyzed.</p>

<p>Cézanne lived as a recluse in Provence, avoiding Paris and working in isolation. Self-portraits offered a practical solution: he was always available as a model, patient with the slow, laborious process his method required. This example remains in a <strong>private collection</strong>, one of many Cézanne works that helped define the bridge between Impressionism and <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>modern art</strong></a>. Picasso and Braque would soon push his geometric construction toward full abstraction.</p>`,
    faqs: [
      {
        question: "Where can I see this Cézanne self-portrait?",
        answer: `This painting belongs to a <strong>private collection</strong>. Cézanne painted more than two dozen self-portraits, with examples in major museums worldwide including the Musée d'Orsay, National Gallery, and Metropolitan Museum.`
      },
      {
        question: "How many self-portraits did Cézanne paint?",
        answer: `<a href="/apps/masterpieces/artist/paul-cezanne"><strong>Cézanne</strong></a> created <strong>more than two dozen</strong> self-portraits over his career. Living as a recluse in Provence, he was always available as his own patient model for the slow, laborious process his method required.`
      },
      {
        question: "What makes Cézanne's style proto-Cubist?",
        answer: `Cézanne built forms through <strong>geometric planes</strong> and patches of color, treating nature "by the cylinder, the sphere, the cone." This approach anticipated Cubism by decades and directly influenced Picasso and Braque.`
      },
      {
        question: "Why does Cézanne look so stern in his self-portraits?",
        answer: `Cézanne analyzed himself with the same <strong>rigorous attention</strong> he brought to still lifes and landscapes, without flattery or idealization. His penetrating gaze reflects his intense concentration and methodical approach to painting.`
      }
    ]
  },
  {
    slug: 'edvard-munch-spring-day-on-karl-johan-street',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this bright street scene in 1890, capturing Oslo's main boulevard on a spring day when the bourgeoisie came out to promenade. Well-dressed figures stroll beneath trees just coming into leaf, the afternoon light casting long shadows across the pavement. The mood feels optimistic, almost festive, a striking contrast to the psychological intensity of Munch's later work.</p>

<p>The painting shows clear <strong>Impressionist influence</strong> in its broken brushwork, outdoor subject, and interest in transient effects of light. Munch had encountered French painting during visits to Paris, and here he applies those lessons to Norwegian subject matter. Karl Johan Street was the social center of Kristiania (as Oslo was then called), where seeing and being seen mattered to the city's respectable classes.</p>

<p>Within a few years, Munch would transform this same street into a scene of existential horror in his famous Evening on Karl Johan, showing hollow-eyed figures moving like ghosts. But this earlier version captures the street's surface pleasantness before Munch developed his Expressionist vision. The painting now belongs to the <strong>Bergen Billedgalleri</strong> (KODE Art Museums), representing Munch before he became the painter of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>anxiety and dread</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Spring Day on Karl Johan Street?",
        answer: `This painting is displayed at the <strong>Bergen Billedgalleri</strong> (part of KODE Art Museums) in Bergen, Norway. The museum holds significant works from Norwegian art history including several Munch paintings.`
      },
      {
        question: "Where is Karl Johan Street?",
        answer: `Karl Johan Street is the <strong>main boulevard of Oslo</strong> (then called Kristiania), running from the Royal Palace to the central railway station. It was the social center where the bourgeoisie promenaded to see and be seen.`
      },
      {
        question: "How does this differ from Munch's later work?",
        answer: `This bright, pleasant scene shows <strong>Impressionist influence</strong> before Munch developed his Expressionist style. He later painted the same street as a scene of existential horror in Evening on Karl Johan, with hollow-eyed ghostlike figures.`
      },
      {
        question: "When did Munch paint this work?",
        answer: `<a href="/apps/masterpieces/artist/edvard-munch"><strong>Munch</strong></a> created this painting in <strong>1890</strong>, early in his career before the psychological intensity that would define works like The Scream. It shows him absorbing French Impressionist influences.`
      }
    ]
  }
];

async function main() {
  console.log('Starting enrichment of 5 artworks...\n');

  for (const artwork of artworks) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
