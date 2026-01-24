const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'claude-monet-rouen-cathedralthe-gate-grey-weather',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Rouen Cathedral in 1894 as part of a series of over thirty paintings capturing the Gothic facade under different light conditions. He rented rooms in a building directly across from the cathedral, setting up his easels at the windows and working on multiple canvases simultaneously as the light changed throughout the day.</p>

<p>This version shows the portal under <strong>grey weather</strong>, when overcast skies flatten the stone into muted tones of blue, grey, and violet. Monet built up the paint surface in thick, encrusted layers that physically mimic the texture of carved stone. The architecture dissolves into pure color and light, barely holding its form. Fellow painters Pissarro and Cézanne praised the series for pushing painting toward new territory.</p>

<p>Monet worked obsessively on these paintings, beginning in 1892 and finishing in his studio at Giverny in 1894. When twenty of the series appeared at an 1895 exhibition, eight sold before the show ended. The paintings now hang in museums worldwide. This canvas belongs to the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, where visitors can compare multiple versions and witness how completely <a href="https://luxurywallart.com/collections/grey-art" target="_blank" rel="noopener"><strong>atmospheric conditions</strong></a> transform our perception of the same subject.</p>`,
    faqs: [
      {
        question: "Where can I see Rouen Cathedral, The Gate, Grey Weather?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds several paintings from Monet's Rouen Cathedral series, allowing visitors to compare different light conditions on the same facade.`
      },
      {
        question: "How many Rouen Cathedral paintings did Monet create?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> painted over <strong>thirty versions</strong> of Rouen Cathedral between 1892 and 1894. He worked on multiple canvases simultaneously, switching between them as the light changed throughout the day.`
      },
      {
        question: "Where did Monet paint this series?",
        answer: `Monet rented rooms in a building <strong>directly across</strong> from the cathedral, setting up his easels at the windows. This elevated vantage point gave him a consistent view of the Gothic facade while allowing him to observe changing light conditions.`
      },
      {
        question: "What makes the paint texture unusual?",
        answer: `Monet built up <strong>thick, encrusted layers</strong> of paint that physically mimic the texture of carved stone. This heavily worked surface was unusual even for Impressionism and shows how far he pushed the medium.`
      }
    ]
  },
  {
    slug: 'claude-monet-rouen-cathedral-morning-white-harmony',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this morning view of Rouen Cathedral in 1894, capturing the Gothic facade bathed in soft, diffused light. The "White Harmony" of the title describes the pale, luminous atmosphere of early morning, when mist and gentle sunlight wash the stone in tones of cream, pale blue, and silver. The cathedral seems to glow from within rather than reflect light from outside.</p>

<p>Monet began this series in 1892, renting rooms opposite the cathedral and working on multiple canvases as <strong>light conditions shifted</strong>. He would sometimes work on as many as fourteen paintings in a single day, moving from one to another as the sun moved across the sky. The effort exhausted him. He wrote to his wife Alice that the work was driving him mad, that he had nightmares of the cathedral in different colors.</p>

<p>When Monet exhibited twenty of these paintings in 1895, the art world took notice. Eight sold before the exhibition closed. Critics and fellow artists recognized the series as a landmark achievement in capturing atmospheric effects. This version now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, representing Monet's ability to transform solid <a href="https://luxurywallart.com/collections/neutral-art" target="_blank" rel="noopener"><strong>architecture into pure light</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Rouen Cathedral, Morning - White Harmony?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum's collection includes multiple paintings from Monet's Rouen Cathedral series.`
      },
      {
        question: "What does 'White Harmony' mean in the title?",
        answer: `The title describes the <strong>pale, luminous atmosphere</strong> of early morning light. <a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> used terms like "harmony" to indicate the dominant color effect of each painting in the series.`
      },
      {
        question: "How did Monet work on this series?",
        answer: `Monet worked on <strong>multiple canvases simultaneously</strong>, sometimes as many as fourteen in one day, switching between them as light conditions changed. He found the process exhausting and wrote that he had nightmares about the cathedral.`
      },
      {
        question: "Was the Cathedral series successful?",
        answer: `Very successful. When twenty paintings appeared at an 1895 exhibition, <strong>eight sold before it closed</strong>. Critics and fellow artists praised the series as a landmark achievement in capturing atmospheric effects.`
      }
    ]
  },
  {
    slug: 'claude-monet-waterloo-bridge-at-sunset-pink-effect',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Waterloo Bridge between 1900 and 1904 as part of his London series, working from a balcony at the Savoy Hotel overlooking the Thames. The sunset transforms the scene into veils of pink and gold, with the bridge's arches barely visible through luminous haze. Industrial smoke from factories along the river mingles with natural fog to create effects impossible anywhere else.</p>

<p>Monet made three extended visits to London, eventually producing over one hundred paintings of the city. He focused on three subjects: Waterloo Bridge, Charing Cross Bridge, and the Houses of Parliament. This canvas belongs to the <strong>forty-one paintings</strong> he made of Waterloo Bridge alone, each capturing different times of day and atmospheric conditions. The famous London fog fascinated him precisely because it dissolved solid forms into colored atmosphere.</p>

<p>The pink effect of sunset appears throughout Monet's work, but London's polluted air intensified the colors beyond anything he found in France. He finished many of these canvases back in his studio at Giverny, working from memory and sketches. This painting now belongs to the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, a reminder of how <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>industrial atmosphere</strong></a> created some of Impressionism's most beautiful effects.</p>`,
    faqs: [
      {
        question: "Where can I see Waterloo Bridge at Sunset, Pink Effect?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The museum holds several paintings from Monet's London series.`
      },
      {
        question: "Where did Monet paint the London series?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> worked from a balcony at the <strong>Savoy Hotel</strong> overlooking the Thames. This elevated position gave him views of Waterloo Bridge, Charing Cross Bridge, and the Houses of Parliament.`
      },
      {
        question: "How many Waterloo Bridge paintings did Monet create?",
        answer: `Monet painted <strong>forty-one versions</strong> of Waterloo Bridge between 1900 and 1904. Each captures different times of day and atmospheric conditions, with fog and industrial smoke creating constantly changing effects.`
      },
      {
        question: "Why did Monet love London fog?",
        answer: `The fog <strong>dissolved solid forms</strong> into colored atmosphere, creating effects impossible elsewhere. Industrial smoke from factories intensified colors, especially at sunset, producing the pink and gold veils visible in this painting.`
      }
    ]
  },
  {
    slug: 'claude-monet-waterloo-bridge-in-the-fog',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Waterloo Bridge in 1903, showing the structure nearly dissolved into London fog. The bridge's arches appear as ghostly suggestions rather than solid forms, while the Thames below reflects muted blues and grays. Monet famously declared that "without the fog, London would not be beautiful," and this painting demonstrates exactly what he meant.</p>

<p>Working from his balcony at the Savoy Hotel, Monet captured the unique atmosphere of <strong>industrial-age London</strong>. Coal smoke from factories and homes combined with natural river mist to create the famous "pea soupers" that made the city both hazardous and hauntingly beautiful. The pollution that damaged lungs also filtered light in ways that fascinated the painter. Colors softened and merged, solid objects lost their edges, and the entire city became a study in atmospheric effects.</p>

<p>Monet spent parts of three winters in London between 1899 and 1901, but finished many paintings afterward in his Giverny studio. He worked from memory and sketches, sometimes struggling to recapture the precise effects he had witnessed. This canvas now hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, representing <a href="https://luxurywallart.com/collections/grey-art" target="_blank" rel="noopener"><strong>Impressionism's</strong></a> ability to find poetry in even the most polluted urban landscapes.</p>`,
    faqs: [
      {
        question: "Where can I see Waterloo Bridge in the Fog?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The museum's collection includes multiple works from Monet's London series.`
      },
      {
        question: "What did Monet say about London fog?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> famously declared that <strong>"without the fog, London would not be beautiful."</strong> The atmospheric effects created by fog and industrial smoke fascinated him and became central to his London paintings.`
      },
      {
        question: "What caused London's famous fog?",
        answer: `The fog combined <strong>natural river mist</strong> with coal smoke from factories and homes, creating the famous "pea soupers" that characterized industrial-age London. While hazardous to health, this pollution created the atmospheric effects Monet found beautiful.`
      },
      {
        question: "Did Monet finish these paintings in London?",
        answer: `Monet began paintings on location but <strong>finished many in his Giverny studio</strong>, working from memory and sketches. He sometimes struggled to recapture the precise atmospheric effects he had witnessed in London.`
      }
    ]
  },
  {
    slug: 'claude-monet-weeping-willow-and-waterlily-pond',
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of his water garden at Giverny between 1916 and 1919, during the final decade of his life. Cascading willow branches frame the famous lily pond, their green tendrils reflected in dark water alongside floating blossoms. The large scale and loose handling push the image toward abstraction, dissolving forms into pure color and gesture.</p>

<p>Monet created this work during World War I, when the sound of artillery could be heard from his garden. While France bled, the elderly painter found refuge in his pond, producing <strong>meditations on nature</strong> that ignored the surrounding catastrophe. His eyesight was failing from cataracts, which may explain the increasingly bold brushwork and intense colors. He refused surgery until 1923, painting through his deteriorating vision.</p>

<p>The weeping willow appears throughout Monet's late work, its drooping branches suggesting mourning even as the water lilies promise renewal. Some scholars read these paintings as elegies for the war dead, though Monet rarely discussed such meanings. The painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, where its <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>immersive scale</strong></a> anticipates Abstract Expressionism by decades.</p>`,
    faqs: [
      {
        question: "Where can I see Weeping Willow and Water-Lily Pond?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, England. The museum holds several important works spanning Monet's entire career.`
      },
      {
        question: "When did Monet paint this work?",
        answer: `<a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> created this painting between <strong>1916 and 1919</strong>, during World War I. He worked in his garden at Giverny while artillery could be heard in the distance, finding refuge in nature during the conflict.`
      },
      {
        question: "How did failing eyesight affect Monet's late work?",
        answer: `Monet suffered from <strong>cataracts</strong> that progressively worsened his vision, possibly contributing to his increasingly bold brushwork and intense colors. He refused surgery until 1923, continuing to paint despite his deteriorating sight.`
      },
      {
        question: "Why is the weeping willow significant?",
        answer: `The <strong>weeping willow</strong> appears throughout Monet's late work, its drooping branches suggesting mourning. Some scholars interpret these wartime paintings as elegies for the dead, though Monet rarely discussed symbolic meanings in his work.`
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
