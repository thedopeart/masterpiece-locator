const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'woman-iii-de-kooning',
    description: `<p><a href="/artist/willem-de-kooning"><strong>Willem de Kooning</strong></a> painted Woman III in 1953 as part of his six-painting Woman series, which debuted at New York's Sidney Janis Gallery that same year. The 68 by 48-inch canvas presents an abstracted female figure with <strong>exaggerated eyes, sharp teeth, and claw-like hands</strong>, rendered through aggressive gestural brushwork in a restrained palette of muted grays and whites.</p>
<p>The Woman series sparked immediate controversy. Critics like Clement Greenberg saw de Kooning's return to figuration as a betrayal of <a href="/movement/abstract-expressionism"><strong>Abstract Expressionism's</strong></a> pure abstraction. Feminist voices objected to what they interpreted as violent imagery directed at women. De Kooning dismissed both critiques, maintaining he had always worked both figuratively and abstractly.</p>
<p>Woman III is the only painting from the early series remaining in <strong>private hands</strong>. MoMA acquired Woman I; the others entered museum collections. The Tehran Museum of Art once owned Woman III before David Geffen acquired it. In 2006, dealer Larry Gagosian brokered its sale to Steven A. Cohen for <strong>$137.5 million</strong>, making it one of the most expensive paintings ever sold.</p>`,
    faqs: [
      {
        question: "Why was the Woman series controversial?",
        answer: "Critics saw it as a <strong>betrayal of pure abstraction</strong>. De Kooning had been a leader of non-figurative painting, so returning to recognizable forms shocked the art world. Feminists also objected to the aggressive depiction of female figures."
      },
      {
        question: "Where can I see Woman III?",
        answer: "Woman III is the <strong>only early Woman painting</strong> in private hands, owned by Steven A. Cohen. The other five are in museum collections, including Woman I at MoMA in New York."
      },
      {
        question: "How does Woman III differ from other Woman paintings?",
        answer: "Woman III uses a <strong>restrained gray and white palette</strong>, while other paintings in the series feature warmer flesh tones. The muted colors give it a more ghostly, spectral quality."
      }
    ]
  },
  {
    slug: 'untitled-basquiat-1982-skull',
    description: `<p><a href="/artist/jean-michel-basquiat"><strong>Jean-Michel Basquiat</strong></a> painted this monumental skull in 1982 when he was just 21 years old. The 72 by 68-inch canvas presents a <strong>fractured head</strong> rendered in black brushstrokes with red, yellow, and white rivulets against a vivid blue background. A three-pronged crown, Basquiat's signature motif, hovers in the upper corner amid illegible typography.</p>
<p>The skull references Basquiat's Haitian heritage, where such imagery evokes voodoo rituals and mortality. But it also functions as <strong>self-portraiture</strong>, exploring the artist's experience as a Black man navigating a predominantly white art world. The fractured form suggests inner turmoil, the pressures of sudden fame and the addiction struggles that would claim his life at 27.</p>
<p>The painting sold for just $4,000 in 1982 and changed hands at Christie's in 1984 for $19,000. It remained hidden from public view until May 2017, when it appeared at Sotheby's and sold to Japanese billionaire Yusaku Maezawa for <strong>$110.5 million</strong>, a record for any American artist. Maezawa plans to display it in a contemporary art museum in his hometown of Chiba, Japan.</p>`,
    faqs: [
      {
        question: "Why did Basquiat paint skulls?",
        answer: "Skulls connect to his <strong>Haitian heritage</strong>, referencing voodoo rituals and mortality. They also function as self-portraits exploring identity, race, and his experience as a Black artist in the predominantly white art world."
      },
      {
        question: "How old was Basquiat when he painted this?",
        answer: "Basquiat was just <strong>21 years old</strong> in 1982, his most artistically significant year. He died of a heroin overdose in 1988 at age 27, leaving behind a remarkable body of work created in less than a decade."
      },
      {
        question: "Where can I see this painting?",
        answer: "Japanese billionaire <strong>Yusaku Maezawa</strong> owns the painting and plans to display it at a contemporary art museum in Chiba, Japan. It was loaned to the Brooklyn Museum and Seattle Art Museum in 2018."
      }
    ]
  },
  {
    slug: 'meules-haystacks-monet',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted Meules (Haystacks) in 1890 as part of a 25-painting series exploring how light transforms the same subject across different times of day and seasons. This canvas captures <strong>grain stacks at sunset</strong> near his home in Giverny, their forms ablaze in reds, oranges, and vibrant greens as diagonal beams of light rake across the French countryside.</p>
<p>The Haystacks series marked a turning point in Monet's career and <a href="/movement/impressionism"><strong>Impressionism</strong></a> itself. By painting the same subject repeatedly, Monet pioneered the concept of series painting, showing how fleeting atmospheric effects could be the true subject of art. He worked outdoors to capture immediate impressions, then refined his canvases in the studio using layered pigments.</p>
<p>Chicago collector Bertha Honoré Palmer acquired this canvas from dealer Paul Durand-Ruel in 1892, just one year after Monet's Paris exhibition. It remained in her family until 1986, when it sold for $2.53 million. At Sotheby's in 2019, it brought <strong>$110.7 million</strong>, setting the record for any <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>Impressionist</strong></a> work.</p>`,
    faqs: [
      {
        question: "Why is the Haystacks series so important?",
        answer: "Monet pioneered <strong>series painting</strong>, capturing the same subject under different light conditions. This focus on atmosphere over subject matter pushed Impressionism toward abstraction and influenced 20th-century art."
      },
      {
        question: "How did Monet capture the light effects?",
        answer: "Monet combined <strong>outdoor observation</strong> with studio refinement. He painted en plein air to capture immediate impressions, then layered pigments in the studio to replicate the exact colors of dawn, noon, or sunset."
      },
      {
        question: "Why is this painting worth $110 million?",
        answer: "The price reflects the <strong>Haystacks series' importance</strong> to art history, this canvas's exceptional sunset palette, and its distinguished provenance from the Palmer family collection dating to 1892."
      }
    ]
  },
  {
    slug: 'rabbit-koons',
    description: `<p><a href="/artist/jeff-koons"><strong>Jeff Koons</strong></a> created Rabbit in 1986, transforming a cheap inflatable Easter bunny into a <strong>mirror-polished stainless steel sculpture</strong> standing just over three feet tall. The reflective surface turns viewers into part of the artwork, their distorted images sliding across the bunny's sleek curves. Only three numbered editions and one artist's proof exist.</p>
<p>Rabbit builds on Koons' earlier Inflatable Flower and Bunny from 1979, but the material transformation carries conceptual weight. What was once soft and leaky becomes armorlike and permanent. The mirrored surface evokes luxury goods and consumer desire while commenting on the artificial, deceptive nature of contemporary culture.</p>
<p>The sculpture divides critics sharply. Some see it as a defining statement of <strong>postmodern art</strong>, challenging boundaries between high culture and kitsch. Others dismiss it as cynical self-merchandising. In May 2019, one edition sold at Christie's for <strong>$91.1 million</strong>, setting the record for any living artist. The Broad in Los Angeles and the Museum of Contemporary Art Chicago hold other editions.</p>`,
    faqs: [
      {
        question: "Why is Rabbit so expensive?",
        answer: "The $91.1 million price reflects its status as a <strong>defining postmodern artwork</strong>, its extreme rarity (only 4 exist), and its conceptual significance in blurring lines between art and consumer culture."
      },
      {
        question: "How many Rabbit sculptures exist?",
        answer: "Only <strong>four versions exist</strong>: three numbered editions plus one artist's proof. Two are in museums (The Broad, MCA Chicago), making privately held editions exceptionally rare."
      },
      {
        question: "What does Rabbit mean?",
        answer: "The <strong>mirror-polished surface</strong> reflects viewers, making them part of the artwork. The transformation from cheap toy to luxury object comments on consumerism, desire, and the artificial nature of contemporary culture."
      }
    ]
  },
  {
    slug: 'pool-two-figures-hockney',
    description: `<p><a href="/artist/david-hockney"><strong>David Hockney</strong></a> completed Portrait of an Artist (Pool with Two Figures) in May 1972, combining his signature themes of <strong>swimming pools and double portraiture</strong>. A clothed man stands at a pool's edge in southern France, gazing down at a swimmer gliding underwater. The monumental canvas measures seven by ten feet, rendered in acrylics with Hockney's characteristic clarity.</p>
<p>The painting emerged from personal heartbreak. Hockney began the first version in October 1971 as his five-year relationship with Peter Schlesinger was ending. After six months of struggle, he <strong>destroyed that canvas</strong>, unable to resolve the spatial relationship between the figures. Just two months before his exhibition deadline, he started fresh, completing the final version in an intensive two-week sprint of 18-hour workdays.</p>
<p>Hockney flew to France to photograph the underwater perspective at filmmaker Tony Richardson's villa near Saint-Tropez. The emotional depth beneath the serene surface, the sense of separation and longing, elevates the painting beyond his earlier pool works. In November 2018, it sold at Christie's for <strong>$90.3 million</strong>, then a record for any living artist.</p>`,
    faqs: [
      {
        question: "Who are the two figures in the painting?",
        answer: "The standing figure is <strong>Mo McDermott</strong>; the swimmer is John St Clair. Hockney originally conceived the composition with his ex-lover Peter Schlesinger as the standing figure, but their relationship ended during the painting's creation."
      },
      {
        question: "Why did Hockney destroy the first version?",
        answer: "He struggled for six months with the <strong>pool perspective</strong> and the spatial relationship between figures. Unable to resolve the background (trying walls, glass, mountains), he destroyed it and started fresh just two months before his deadline."
      },
      {
        question: "Where was the painting made?",
        answer: "Hockney flew to <strong>southern France</strong> near Saint-Tropez to photograph the underwater perspective at filmmaker Tony Richardson's villa. He then completed the painting in London during an intensive two-week sprint."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 4 ===\n');

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
