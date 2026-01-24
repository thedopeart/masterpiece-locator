const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'dora-maar-au-chat-picasso',
    description: `<p><a href="/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted Dora Maar au Chat in 1941 during the Nazi occupation of France, depicting his muse and fellow artist seated with a small black cat on her shoulders. The large canvas, over four feet tall, fractures her form into <strong>faceted Cubist planes</strong> and bold color blocks, capturing both her intensity and the tensions of their relationship during wartime.</p>
<p><strong>Dora Maar</strong> (1907-1997) was a French photographer and Surrealist artist who exhibited alongside Man Ray and Salvador Dalí before meeting Picasso in 1935. She documented the creation of Guernica and profoundly influenced his work. Later she remarked that his portraits of her were "all Picassos. Not one is Dora Maar."</p>
<p>Picasso called Dora his "Afghan cat," and the feline on her shoulder carries symbolic weight, linking cats with female cunning in classical art tradition. In May 2006, the painting sold at Sotheby's for <strong>$95.2 million</strong>, then the second-highest auction price ever paid for any artwork.</p>`,
    faqs: [
      {
        question: "Who was Dora Maar?",
        answer: "<strong>Dora Maar</strong> was a French photographer and Surrealist artist who exhibited internationally before meeting Picasso. She documented the creation of Guernica and became his muse for nearly nine years."
      },
      {
        question: "Why does the painting feature a cat?",
        answer: "Picasso called Dora an \"<strong>Afghan cat</strong>\" for her personality. The cat symbolizes female mystique and cunning in classical art tradition, adding psychological depth to the portrait."
      },
      {
        question: "When was this painted?",
        answer: "Picasso painted it in <strong>1941</strong> during the Nazi occupation of France, a period of intense personal and political tension that infused his work with psychological complexity."
      }
    ]
  },
  {
    slug: 'orange-red-yellow-rothko',
    description: `<p><a href="/artist/mark-rothko"><strong>Mark Rothko</strong></a> painted Orange, Red, Yellow in 1961, creating one of his most luminous <a href="/movement/color-field"><strong>Color Field</strong></a> compositions. The canvas, over two meters tall, presents warm vermillion rectangles floating over a cooler crimson ground, their edges hovering slightly from the canvas perimeter. The colors seem to pulse and shift as viewers stare.</p>
<p>Rothko built this radiant effect through <strong>thin, translucent layers</strong> of pigment meticulously applied using a technique he kept secret even from studio assistants. He intended his large-scale works to envelop viewers, evoking emotional responses he compared to Greek tragedy or religious experience. The chromatic afterimage created by staring at one color affects perception of the adjacent hues.</p>
<p>The painting came from the collection of David Pincus, who had acquired it directly. At Christie's in May 2012, it sold for <strong>$86.9 million</strong>, setting a record for post-war contemporary art at public auction and nearly doubling the presale estimate.</p>`,
    faqs: [
      {
        question: "What is Color Field painting?",
        answer: "<a href=\"/movement/color-field\"><strong>Color Field painting</strong></a> uses large expanses of color to evoke emotional responses. Rothko pioneered the movement, seeking transcendence through pure color rather than representational imagery."
      },
      {
        question: "How did Rothko create the glowing effect?",
        answer: "Rothko applied <strong>thin, translucent layers</strong> of pigment over time, a proprietary technique he kept secret. The layered glazes create surfaces where colors appear to emanate light from within."
      },
      {
        question: "How big is this painting?",
        answer: "The canvas measures approximately <strong>236 by 206 cm</strong> (93 by 81 inches). Rothko painted at monumental scale so viewers would feel immersed in color rather than observing from a distance."
      }
    ]
  },
  {
    slug: 'suprematist-composition-malevich',
    description: `<p><a href="/artist/kazimir-malevich"><strong>Kazimir Malevich</strong></a> painted Suprematist Composition in 1916, the same year he published his Suprematist Manifesto. The canvas presents a bold <strong>blue rectangle</strong> suspended over a red beam, distilling artistic expression to fundamental geometric forms. The limited color palette and precise composition embody his search for art's "zero degree."</p>
<p><strong>Suprematism</strong>, which Malevich founded in 1913, rejected representation in favor of pure geometric abstraction. He believed this approach liberated artists from copying nature, achieving what he called "the supremacy of pure artistic feeling." The movement's influence extended to the Bauhaus and became foundational to 20th-century abstract art.</p>
<p>The painting remained with Malevich until 1927, later passing through the Stedelijk Museum Amsterdam for 50 years. At Christie's in May 2018, it sold for <strong>$85.8 million</strong>, setting a record for any Russian artist at auction.</p>`,
    faqs: [
      {
        question: "What is Suprematism?",
        answer: "<strong>Suprematism</strong> was founded by Malevich in 1913, focusing on \"the supremacy of pure artistic feeling\" over representation. The movement reduced art to fundamental geometric forms: circles, squares, and rectangles."
      },
      {
        question: "Why is this painting historically important?",
        answer: "Created in 1916 during the announcement of the Suprematist Manifesto, it represents a <strong>watershed moment</strong> when painting abandoned representation entirely for pure geometric abstraction."
      },
      {
        question: "What is meant by 'zero degree' in art?",
        answer: "Malevich called geometric abstraction art's <strong>\"zero degree\"</strong>, meaning its most basic, irreducible form. By stripping away representation, he sought art's essential nature."
      }
    ]
  },
  {
    slug: 'triptych-1976-bacon',
    description: `<p><a href="/artist/francis-bacon"><strong>Francis Bacon</strong></a> created Triptych, 1976 as the centerpiece for his landmark 1977 exhibition at Galerie Claude Bernard in Paris. The three-panel composition draws on <strong>classical Greek mythology</strong>, referencing Prometheus and featuring symbolic harpies that represent the artist's existential anxieties and creative demons.</p>
<p>The work synthesizes motifs from across Bacon's career into his most ambitious and enigmatic triptych. Unlike his earlier crucifixion studies that employed Christian symbolism, this painting confronts his <strong>private artistic struggles</strong> through classical allegory. Each panel measures 78 by 58 inches, rendered in oil and pastel with characteristic distorted figures.</p>
<p>Russian businessman Roman Abramovich acquired the work at Sotheby's in May 2008 for <strong>$86.3 million</strong>, exceeding the $70 million estimate. It ranks as the second-highest price ever paid for a Bacon painting.</p>`,
    faqs: [
      {
        question: "What does this triptych depict?",
        answer: "The work draws on <strong>Greek mythology</strong>, referencing Prometheus and featuring harpies that symbolize Bacon's existential anxieties and creative demons. It combines motifs from across his career."
      },
      {
        question: "Why did Bacon work in triptych format?",
        answer: "Bacon believed <strong>multiple panels</strong> prevented forced narrative interpretation. The triptych allowed him to present sequential psychological studies rather than single definitive statements."
      },
      {
        question: "Where was this painting first exhibited?",
        answer: "Bacon created it as the centerpiece for his <strong>1977 Paris exhibition</strong> at Galerie Claude Bernard, where it caused an immediate sensation among critics and collectors."
      }
    ]
  },
  {
    slug: 'le-bassin-aux-nympheas-monet',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted Le bassin aux nymphéas in 1919, one of four highly finished monumental renderings from his late water lily period. The canvas, measuring 100 by 300 cm, presents an <strong>endless expanse of water</strong> with floating lily pads and sky reflections, eliminating any clear foreground or background.</p>
<p>Monet created his water garden at Giverny specifically as a painting subject, rerouting a river to establish the pond and cultivating hybrid water lily varieties for varied colors. While his 1899 series featured the Japanese bridge as compositional anchor, these later works <strong>dispense with the bridge entirely</strong>, focusing solely on water, reflections, and lilies in an almost abstract approach.</p>
<p>The series ultimately culminated in the Grandes Décorations, 22 monumental canvases now at the Musée de l'Orangerie. This 1919 canvas sold at Christie's London in June 2008 for <strong>$80.5 million</strong>, setting a world record for Monet and the highest price ever achieved by Christie's in Europe at that time.</p>`,
    faqs: [
      {
        question: "Why did Monet focus on water lilies?",
        answer: "Monet <strong>designed his Giverny garden</strong> specifically as a painting subject, cultivating hybrid water lilies for varied colors. The pond became his primary focus for three decades, inspiring about 250 paintings."
      },
      {
        question: "How does this differ from earlier water lily works?",
        answer: "The 1919 paintings <strong>eliminate the Japanese bridge</strong> that anchored his 1899 series. By focusing solely on water surfaces and reflections, Monet created nearly abstract, immersive compositions."
      },
      {
        question: "Where does this fit in Monet's career?",
        answer: "Created near the end of his life, it represents <a href=\"/movement/impressionism\"><strong>Impressionism's</strong></a> evolution toward abstraction. The series culminated in his monumental Grandes Décorations at the Musée de l'Orangerie."
      }
    ]
  },
  {
    slug: 'false-start-jasper-johns',
    description: `<p><a href="/artist/jasper-johns"><strong>Jasper Johns</strong></a> painted False Start in 1959, creating a bold exploration of language and visual perception. The 54 by 67-inch canvas features explosive brushstrokes with stenciled color names, RED, YELLOW, ORANGE, BLUE, and GRAY, splashed across the surface. Johns <strong>deliberately mismatches</strong> the word colors with the paint beneath, forcing viewers to question the relationship between language and what they see.</p>
<p>When viewers read "GRAY" spelled in red letters on yellow paint, it creates cognitive dissonance that challenges automatic visual responses. The title came from a racing print Johns spotted at Cedar Tavern, a bar frequented by New York artists during the <a href="/movement/abstract-expressionism"><strong>Abstract Expressionist</strong></a> era.</p>
<p>In 2006, collectors Kenneth and Anne Griffin acquired False Start from David Geffen for <strong>$80 million</strong> in a private transaction, making it the most expensive painting by a living artist at that time.</p>`,
    faqs: [
      {
        question: "Why are the color names wrong?",
        answer: "Johns <strong>intentionally mismatched</strong> stenciled color names with the paint beneath them. Reading \"RED\" in blue letters creates cognitive dissonance that challenges how language shapes perception."
      },
      {
        question: "Where did the title come from?",
        answer: "Johns named it after a <strong>racing print</strong> he saw at Cedar Tavern, a New York bar frequented by Abstract Expressionist artists in the 1950s."
      },
      {
        question: "Why is this painting significant?",
        answer: "It pioneered <strong>conceptual approaches</strong> within Abstract Expressionism, using language to disrupt visual perception. The $80 million sale in 2006 made it the most expensive work by a living artist."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 6 ===\n');

  let updated = 0;
  let skipped = 0;

  for (const update of artworkUpdates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: update.slug }
    });

    if (!artwork) {
      console.log(`Skipped (not found): ${update.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: update.description,
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${artwork.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
