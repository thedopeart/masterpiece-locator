const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'flag-jasper-johns',
    description: `<p><a href="/artist/jasper-johns"><strong>Jasper Johns</strong></a> created Flag in 1954-55 at age 24, inspired by a dream of the American flag. The 42 by 60-inch canvas uses <strong>encaustic</strong>, a wax-based medium, over newspaper collage on fabric mounted to plywood. The layered technique allows viewers to glimpse fragments of newspaper beneath the painted surface.</p>
<p>By choosing such a familiar, everyday object, Johns challenged viewers to reconsider what makes art valuable. The flag eliminated subjective color choices: the subject dictated red, white, and blue. This conceptual approach marked a watershed moment, bridging <a href="/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> and the emerging <a href="/movement/pop-art"><strong>Pop Art</strong></a> movement.</p>
<p>The original 1954-55 version resides at MoMA. A 1960 variant from author Michael Crichton's collection sold at Christie's in 2010 for <strong>$28.6 million</strong>, then a record for the artist.</p>`,
    faqs: [
      {
        question: "Why did Jasper Johns paint the American flag?",
        answer: "Johns created it after a <strong>dream about the flag</strong>. By using such a recognizable subject, he challenged viewers to question what makes something worthy of art and stripped away subjective color decisions."
      },
      {
        question: "What is encaustic?",
        answer: "<strong>Encaustic</strong> uses heated wax as a painting medium. Johns applied it over newspaper strips, creating textured surfaces where the collaged layers remain visible beneath the paint."
      },
      {
        question: "Where can I see the original Flag?",
        answer: "The original 1954-55 version is in <strong>MoMA's</strong> permanent collection in New York. Several later versions exist in museums and private collections worldwide."
      }
    ]
  },
  {
    slug: 'jimson-weed-okeeffe',
    description: `<p><a href="/artist/georgia-okeeffe"><strong>Georgia O'Keeffe</strong></a> painted Jimson Weed/White Flower No. 1 in 1932, magnifying a poisonous New Mexico wildflower to fill the 48 by 40-inch canvas. The white petals spiral outward against swirling green leaves and a dreamy blue sky, transforming a <strong>common weed into monumental art</strong>.</p>
<p>O'Keeffe enlarged flowers to demand attention, famously stating she wanted to make "busy New Yorkers take time to see what I see." Her close-up perspective, influenced by modernist photography, pushed botanical subjects toward abstraction while maintaining precise observation. The jimson weed grew abundantly around her New Mexico ranch.</p>
<p>In November 2014, the painting sold at Sotheby's for <strong>$44.4 million</strong>, tripling the high estimate and setting the record for any artwork by a female artist at auction. The <strong>Crystal Bridges Museum</strong> in Arkansas acquired it, where it now anchors their American art collection.</p>`,
    faqs: [
      {
        question: "Why did O'Keeffe paint flowers so large?",
        answer: "O'Keeffe believed <strong>monumental scale</strong> would force viewers to truly see flowers. She wanted the petals to command attention the way skyscrapers did in New York."
      },
      {
        question: "What is jimson weed?",
        answer: "<strong>Jimson weed</strong> (Datura stramonium) is a toxic wildflower that grew around O'Keeffe's New Mexico ranch. She found artistic value in this common, even dangerous plant."
      },
      {
        question: "Why is the auction price significant?",
        answer: "At $44.4 million, it became the <strong>most expensive artwork</strong> by a female artist ever sold at auction, more than tripling the previous record."
      }
    ]
  },
  {
    slug: 'abstraktes-bild-richter',
    description: `<p><a href="/artist/gerhard-richter"><strong>Gerhard Richter</strong></a> created Abstraktes Bild in 1986, a monumental canvas standing over 300 cm tall. The painting showcases his revolutionary <strong>squeegee technique</strong>, where industrial tools replace traditional brushes. Richter drags, scrapes, and smears layers of oil paint across the surface in rapid movements.</p>
<p>The process merges control with chance. Richter described it as "losing control" compared to brush painting, a central element of his artistic philosophy. The squeegee creates richly textured fields of color that both obscure and reveal underlayers, with each mark capturing the instantaneous moment of creation.</p>
<p>In February 2015, the painting sold at Sotheby's London for <strong>$46.3 million</strong>, establishing Richter as the most expensive living European artist. The same work had sold for just $607,500 in 1999, demonstrating the dramatic appreciation of his market over sixteen years.</p>`,
    faqs: [
      {
        question: "What is the squeegee technique?",
        answer: "Richter uses a <strong>flexible Perspex tool</strong> to drag and scrape paint across canvas instead of brushes. The method creates unpredictable effects while allowing some artistic control."
      },
      {
        question: "Why did the painting appreciate so much?",
        answer: "From $607,500 in 1999 to <strong>$46.3 million</strong> in 2015, the appreciation reflects Richter's growing recognition as one of the most important living painters."
      },
      {
        question: "How does Richter maintain control?",
        answer: "He varies <strong>direction, angle, and speed</strong> of the squeegee, layering multiple passes and manipulating wet paint. The result balances intentional composition with artistic chance."
      }
    ]
  },
  {
    slug: 'balloon-dog-orange-koons',
    description: `<p><a href="/artist/jeff-koons"><strong>Jeff Koons</strong></a> created Balloon Dog (Orange) between 1994 and 2000 as part of his Celebration series. The 12-foot <strong>mirror-polished stainless steel</strong> sculpture transforms the simple joy of a twisted balloon animal into monumental permanence. Its reflective surface incorporates the surrounding environment into the work itself.</p>
<p>Five unique color variants exist: blue, magenta, yellow, orange, and red. Unlike editioned sculptures, each is a one-of-a-kind work rather than a numbered copy. The high-chromium finish and translucent color coating required precision engineering to achieve.</p>
<p>In November 2013, the orange version sold at Christie's for <strong>$58.4 million</strong>, then the most expensive work by a living artist ever auctioned. The record stood until Koons' own Rabbit sold for $91.1 million in 2019. Balloon Dog endures as a cultural icon, balancing childhood whimsy with museum-quality craftsmanship.</p>`,
    faqs: [
      {
        question: "How many Balloon Dog sculptures exist?",
        answer: "Five <strong>unique monumental versions</strong> were created (one in each color). Each is a one-of-a-kind work, not a numbered edition. Porcelain reproductions also exist."
      },
      {
        question: "How does Balloon Dog differ from Rabbit?",
        answer: "<strong>Balloon Dog</strong> (1994-2000) came first and sold for $58.4 million. Rabbit (1986) later achieved $91.1 million in 2019. Both are mirror-polished stainless steel from the Celebration series."
      },
      {
        question: "What is the sculpture made of?",
        answer: "High-chromium <strong>stainless steel</strong> with a translucent color coating. The mirror finish required precision engineering to achieve the reflective surface."
      }
    ]
  },
  {
    slug: 'houses-lestaque-braque',
    description: `<p><a href="/artist/georges-braque"><strong>Georges Braque</strong></a> painted Houses at l'Estaque in 1908, breaking Mediterranean village buildings into geometric forms that helped launch <a href="/movement/cubism"><strong>Cubism</strong></a>. The 73 by 60 cm canvas reduces houses to windowless cubes, trees to simple shapes, and eliminates traditional perspective entirely.</p>
<p>When the 1908 Salon d'Automne jury rejected the painting, Henri Matisse mocked it for being composed of "cubes," inadvertently naming the entire movement. Braque had visited l'Estaque, a coastal town that <a href="/artist/paul-cezanne"><strong>Cézanne</strong></a> frequently painted, three times between 1907-1908 after the elder artist's retrospective deeply influenced Paris's avant-garde.</p>
<p>The painting directly adapted Cézanne's method of breaking forms into geometric shapes and flattening pictorial space. Now at the <strong>Kunstmuseum Bern</strong>, it stands as one of the foundational works of 20th-century abstraction.</p>`,
    faqs: [
      {
        question: "Is this the first Cubist painting?",
        answer: "Art historians debate this. Most consider it either <strong>Proto-Cubist</strong> or the first Cubist landscape. Its rejection at the Salon marked a pivotal moment in the movement's birth."
      },
      {
        question: "How did Cézanne influence this work?",
        answer: "Braque borrowed Cézanne's method of <strong>reducing forms to geometric shapes</strong>, flattening space, and using progressive color gradations. L'Estaque itself was a location Cézanne painted."
      },
      {
        question: "Where did the name 'Cubism' come from?",
        answer: "When the Salon jury rejected this painting, <strong>Matisse mocked it</strong> for being composed of \"cubes.\" The dismissive critique accidentally named one of art history's most important movements."
      }
    ]
  },
  {
    slug: 'triptych-oresteia-bacon',
    description: `<p><a href="/artist/francis-bacon"><strong>Francis Bacon</strong></a> created Triptych Inspired by the Oresteia of Aeschylus in 1981, his only painting to explicitly reference the Greek dramatist in its title. Three panels, each 198 by 147 cm, present haunting imagery: a half-opened door revealing an empty chair, and a box-shaped structure supporting a <strong>mutilated figure with exposed spine</strong>.</p>
<p>Rather than illustrating specific characters from Aeschylus's trilogy, Bacon sought to capture the <strong>emotional intensity of tragedy</strong> itself. He explained to writer Michel Leiris that he attempted "to create images of the sensations that some of the episodes created inside me." The work channels ancient Greek catharsis to examine the human condition.</p>
<p>Norwegian billionaire Hans Rasmus Astrup purchased it in 1987 for the Astrup Fearnley Museum in Oslo. In June 2020, Sotheby's sold it for <strong>$84.6 million</strong> in a live-streamed virtual auction, making it Bacon's third most expensive work.</p>`,
    faqs: [
      {
        question: "Why did Bacon reference Aeschylus?",
        answer: "Bacon was fascinated by <strong>Greek tragedy's</strong> emotional intensity. Rather than illustrating the story, he sought to capture the visceral sensations the ancient drama produced within him."
      },
      {
        question: "What does the imagery represent?",
        answer: "The <strong>empty chair and mutilated figure</strong> evoke absence, suffering, and psychological devastation. Bacon translated ancient themes of violence and revenge into visceral contemporary imagery."
      },
      {
        question: "Is this his only work referencing Greek tragedy?",
        answer: "While Bacon frequently cited Aeschylus as inspiration, this 1981 triptych is the <strong>only painting</strong> where he explicitly named the Greek dramatist in the title."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 7 (Final) ===\n');

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
