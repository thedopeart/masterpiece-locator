const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'caspar-david-friedrich-ship-in-the-arctic-ocean',
    description: `<p><a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted The Sea of Ice between 1823 and 1824, depicting a ship crushed and swallowed by massive slabs of polar ice. The HMS Griper, or a vessel like it, lies nearly invisible beneath jagged ice sheets that thrust upward like a frozen cathedral. The scene captures the aftermath of disaster rather than the moment of destruction, leaving viewers to contemplate nature's overwhelming power.</p>

<p>Friedrich drew inspiration from William Edward Parry's Arctic expeditions, which captivated European audiences in the 1820s. But the painting also carries <strong>deeply personal significance</strong>. When Friedrich was thirteen, his younger brother Johann drowned after falling through ice while trying to save Caspar from the same fate. This childhood trauma resurfaces in the frozen desolation of the image, transforming a topical subject into a meditation on guilt, loss, and nature's indifference to human ambition.</p>

<p>Contemporary audiences found the painting too radical and disturbing. It went unsold during Friedrich's lifetime, a commercial failure that contributed to his declining reputation in later years. Today it hangs at the <a href="/apps/masterpieces/museum/hamburger-kunsthalle"><strong>Hamburger Kunsthalle</strong></a> in Hamburg, recognized as one of the most powerful statements of <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>Romantic sublime</strong></a> in nineteenth-century art.</p>`,
    faqs: [
      {
        question: "Where can I see The Sea of Ice?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/hamburger-kunsthalle"><strong>Hamburger Kunsthalle</strong></a> in Hamburg, Germany. The museum holds the world's largest collection of Friedrich's work, making it essential for understanding his vision.`
      },
      {
        question: "What ship is shown in the painting?",
        answer: `The crushed vessel is believed to represent <strong>HMS Griper</strong> or a similar ship from William Edward Parry's Arctic expeditions of the 1820s. These voyages captured European imagination and inspired <a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Friedrich's</strong></a> frozen disaster scene.`
      },
      {
        question: "Why does this painting have personal meaning for Friedrich?",
        answer: `When Friedrich was thirteen, his younger brother <strong>Johann drowned</strong> after falling through ice while trying to rescue Caspar. This childhood trauma gives the frozen destruction an autobiographical dimension of guilt and grief.`
      },
      {
        question: "Was this painting successful when first exhibited?",
        answer: `The painting went <strong>unsold</strong> during Friedrich's lifetime. Contemporary audiences found it too radical and disturbing. Only later generations recognized it as a masterpiece of Romantic art.`
      }
    ]
  },
  {
    slug: 'john-constable-the-vale-of-dedham',
    description: `<p><a href="/apps/masterpieces/artist/john-constable"><strong>John Constable</strong></a> painted this view of the Stour Valley in 1802 when he was twenty-six years old, making it his first major landscape work. The composition looks across Dedham Vale from Gun Hill, with the tower of Dedham church rising in the middle distance and the winding River Stour threading through the pastoral scene. This countryside, where Constable grew up, would become the defining subject of his entire career.</p>

<p>The painting establishes themes Constable would develop for decades: the <strong>changeable English sky</strong>, the play of light across fields, the quiet dignity of agricultural landscape. He painted what he knew intimately rather than seeking picturesque foreign scenery. "These scenes made me a painter," he wrote, referring to the Stour Valley, "and I am grateful." The directness of observation already distinguishes his work from more formulaic landscape painting.</p>

<p>Constable's daughter Isabel donated this early work to the <a href="/apps/masterpieces/museum/victoria-and-albert-museum"><strong>Victoria and Albert Museum</strong></a> in 1888, recognizing its importance in understanding her father's artistic development. The painting now represents the beginning of a <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape vision</strong></a> that would influence artists from the Barbizon School to the Impressionists.</p>`,
    faqs: [
      {
        question: "Where can I see Dedham Vale?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/victoria-and-albert-museum"><strong>Victoria and Albert Museum</strong></a> in London. Constable's daughter Isabel donated it to the museum in 1888, recognizing its significance as his first major landscape work.`
      },
      {
        question: "Why was the Stour Valley important to Constable?",
        answer: `<a href="/apps/masterpieces/artist/john-constable"><strong>Constable</strong></a> grew up in this <strong>Suffolk countryside</strong> and painted it throughout his career. He wrote, "These scenes made me a painter, and I am grateful," explaining his lifelong dedication to this familiar landscape.`
      },
      {
        question: "What landmark appears in the painting?",
        answer: `The tower of <strong>Dedham Church</strong> rises in the middle distance, serving as the focal point of the composition. This medieval church appears in many of Constable's Stour Valley paintings as a familiar landmark.`
      },
      {
        question: "How old was Constable when he painted this?",
        answer: `Constable was <strong>twenty-six years old</strong> in 1802 when he completed this work. It represents his first major landscape painting, establishing the direct observation of nature that would define his mature style.`
      }
    ]
  },
  {
    slug: 'edouard-manet-the-spanish-singer',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted The Spanish Singer in 1860, creating the work that would launch his public career. A man in traditional Spanish costume sits playing guitar, surrounded by studio props including a jug and onions. The painting earned an Honorable Mention at the Salon of 1861, Manet's first significant recognition, and attracted attention from critics including Baudelaire and Théophile Gautier.</p>

<p>Sharp-eyed viewers notice something wrong: the guitar is <strong>strung for a left-handed player</strong>, though the model holds it right-handed. Manet staged the scene in his studio with a hired model and borrowed props, prioritizing visual impact over accuracy. This willingness to sacrifice realism for effect would characterize his entire approach. The painting's bold brushwork and direct lighting also broke from academic conventions.</p>

<p>After the Salon, a group of young artists visited Manet's studio, drawn by the painting's unconventional power. This circle would eventually include future Impressionists. The work now hangs at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, representing the moment when Manet emerged as a leader of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>avant-garde painting</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see The Spanish Singer?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York City. It represents Manet's breakthrough at the Salon of 1861, where it earned an Honorable Mention and critical praise.`
      },
      {
        question: "What is wrong with the guitar in the painting?",
        answer: `The guitar is <strong>strung for a left-handed player</strong>, but the model holds it right-handed. <a href="/apps/masterpieces/artist/edouard-manet"><strong>Manet</strong></a> staged the scene in his studio with borrowed props, prioritizing visual impact over musical accuracy.`
      },
      {
        question: "Why was this painting important for Manet's career?",
        answer: `This was Manet's <strong>first Salon success</strong>, painted when he was twenty-eight. Critics including Baudelaire and Gautier praised it, and young artists visited his studio afterward, establishing him as a leader of the avant-garde.`
      },
      {
        question: "Why did Manet choose a Spanish subject?",
        answer: `<strong>Spanish themes</strong> were fashionable in Paris during the 1860s. Manet admired Velázquez and Goya, and Spanish culture offered opportunities for bold costume and dramatic effect that appealed to his artistic temperament.`
      }
    ]
  },
  {
    slug: 'edouard-manet-lola-de-valence',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this portrait of the Spanish dancer Lola Meléa in 1862, capturing her during performances with the Royal Spanish Ballet troupe that visited Paris that year. She stands in full costume with her fan, poised between movements, the stage scenery visible behind her. The painting combines portrait and theatrical performance in a composition that feels both posed and spontaneous.</p>

<p>The poet Charles Baudelaire was so taken with the painting that he wrote a quatrain for it, describing Lola as possessing "the unexpected charm of a <strong>pink and black jewel</strong>." When Manet included this poem on the frame, the combination of sensuous image and provocative verse caused scandal. The work appeared at the Salon des Refusés in 1863, the famous exhibition of rejected paintings that marked a turning point in French art.</p>

<p>Lola de Valence captures Manet's ongoing fascination with Spanish culture and his ability to transform contemporary subjects into striking artistic statements. The bold contrasts and visible brushwork anticipate his mature style. The painting now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, where it represents both Manet's <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Spanish period</strong></a> and his friendship with Baudelaire.</p>`,
    faqs: [
      {
        question: "Where can I see Lola de Valence?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum holds an extensive collection of Manet's work spanning his entire career.`
      },
      {
        question: "Who was Lola de Valence?",
        answer: `Lola Meléa, known as <strong>Lola de Valence</strong>, was a lead dancer with the Royal Spanish Ballet troupe that performed in Paris in 1862. <a href="/apps/masterpieces/artist/edouard-manet"><strong>Manet</strong></a> painted her during this engagement, captivated by her stage presence.`
      },
      {
        question: "What did Baudelaire write about this painting?",
        answer: `The poet Charles Baudelaire wrote a quatrain describing Lola as having "the unexpected charm of a <strong>pink and black jewel</strong>." When Manet added this verse to the frame, the sensuous combination caused scandal among viewers.`
      },
      {
        question: "Where was this painting first exhibited?",
        answer: `The painting appeared at the <strong>Salon des Refusés</strong> in 1863, the famous exhibition of works rejected by the official Salon. This show, which also included Manet's Déjeuner sur l'herbe, marked a turning point in French art history.`
      }
    ]
  },
  {
    slug: 'jean-honore-fragonard-the-bathers',
    description: `<p><a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> painted The Bathers around 1765, creating a rare nude subject in a career more often devoted to clothed figures in garden settings. A tumble of voluptuous women splash and recline in a verdant landscape, their flesh tones glowing against the lush greens of the surrounding foliage. The influence of his teacher François Boucher shows in the subject matter, while the loose, energetic brushwork recalls Rubens.</p>

<p>The painting captures the <strong>hedonistic spirit of Rococo</strong> at its most exuberant. Bodies twist and overlap in a dynamic composition that suggests motion and pleasure. Fragonard applies paint with visible freedom, building forms through bold strokes rather than careful blending. This technical bravura gives the scene its sense of vitality and spontaneity, as if the moment might dissolve at any second.</p>

<p>While Fragonard is best known for works like The Swing, The Bathers reveals his ability to handle the classical nude tradition with distinctly French sensibility. The painting now hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, representing the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>playful sensuality</strong></a> that defined aristocratic French taste before the Revolution swept that world away.</p>`,
    faqs: [
      {
        question: "Where can I see Fragonard's Bathers?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. The museum's French painting collection includes several works by Fragonard and his teacher Boucher.`
      },
      {
        question: "Is this a typical subject for Fragonard?",
        answer: `No, <strong>nude subjects</strong> are relatively rare in Fragonard's work. He more often painted clothed figures in garden settings or romantic scenarios. This painting shows his ability to handle the classical nude tradition with French Rococo sensibility.`
      },
      {
        question: "Who influenced Fragonard's style?",
        answer: `<a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Fragonard</strong></a> studied under <strong>François Boucher</strong>, whose influence shows in the sensuous subject matter. The loose, energetic brushwork also recalls the Flemish master Rubens, whom Fragonard admired.`
      },
      {
        question: "What is Rococo art?",
        answer: `<strong>Rococo</strong> was an eighteenth-century French style characterized by playfulness, sensuality, and decorative elegance. It flourished under aristocratic patronage before the French Revolution and favored subjects of pleasure, romance, and refined entertainment.`
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
