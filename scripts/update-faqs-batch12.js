const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'ghent-altarpiece',
    faqs: [
      { question: "What is the Ghent Altarpiece?", answer: "It's a polyptych of 12 oak panels by <a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a>, completed in 1432. The work depicts the Adoration of the Mystic Lamb and remains one of the most important <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> artworks." },
      { question: "Where can I see the Ghent Altarpiece?", answer: "You can view it at <a href=\"/museum/saint-bavo-cathedral\"><strong>Saint Bavo's Cathedral</strong></a> in Ghent, Belgium. The altarpiece has been stolen multiple times throughout history and was famously looted by the Nazis." },
      { question: "Why is the Ghent Altarpiece so famous?", answer: "It pioneered oil painting techniques and influenced generations of artists. <a href=\"/artist/jan-van-eyck\"><strong>Van Eyck's</strong></a> detailed realism and luminous colors were revolutionary for the 15th century." },
      { question: "How big is the Ghent Altarpiece?", answer: "When open, the altarpiece spans approximately 11.5 x 15 feet (3.5 x 4.6 m). For <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\"><strong>religious artwork</strong></a>, this scale was meant to awe cathedral visitors." }
    ]
  },
  {
    slug: 'diana-leaving-bath',
    faqs: [
      { question: "What does Diana Leaving the Bath depict?", answer: "<a href=\"/artist/francois-boucher\"><strong>François Boucher</strong></a> painted the Roman goddess Diana with her nymphs after bathing. The sensual scene typifies Rococo elegance with soft colors and idealized <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>feminine beauty</strong></a>." },
      { question: "Where is Diana Leaving the Bath displayed?", answer: "The painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. Boucher created it in 1742 for the private enjoyment of French aristocrats." },
      { question: "What style is Diana Leaving the Bath?", answer: "It's a prime example of French Rococo, emphasizing decorative elegance over dramatic tension. <a href=\"/artist/francois-boucher\"><strong>Boucher</strong></a> was the leading painter of this playful, aristocratic style." }
    ]
  },
  {
    slug: 'the-oxbow',
    faqs: [
      { question: "What is The Oxbow painting about?", answer: "<a href=\"/artist/thomas-cole\"><strong>Thomas Cole</strong></a> contrasts wild American wilderness with settled farmland in the Connecticut River Valley. The dramatic storm clouds divide savage nature from pastoral civilization." },
      { question: "Where can I see The Oxbow?", answer: "It's displayed at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Cole painted it in 1836 as a statement about America's relationship with <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a>." },
      { question: "Why is The Oxbow significant?", answer: "It helped establish American landscape painting as a serious genre. <a href=\"/artist/thomas-cole\"><strong>Cole</strong></a> founded the Hudson River School, and this work embodies Romantic ideas about nature and progress." },
      { question: "Is there a hidden detail in The Oxbow?", answer: "Yes, <a href=\"/artist/thomas-cole\"><strong>Cole</strong></a> painted himself at his easel on the hillside. Hebrew letters spelling \"Noah\" or \"Shaddai\" appear carved into the cleared hillside, though interpretations vary." }
    ]
  },
  {
    slug: 'the-sin',
    faqs: [
      { question: "What does The Sin by Franz von Stuck show?", answer: "A pale woman's face emerges from darkness, wrapped by a massive snake. <a href=\"/artist/franz-von-stuck\"><strong>Von Stuck</strong></a> reimagines Eve as a dangerous femme fatale, a theme popular in Symbolist art." },
      { question: "Where is The Sin displayed?", answer: "You can see it at <a href=\"/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich. Von Stuck created multiple versions of this subject, and it became his signature image." },
      { question: "What style is The Sin?", answer: "<a href=\"/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a> worked in Munich Secession and Symbolist styles. The painting's dark eroticism influenced later artists including young Kandinsky, who studied with him." }
    ]
  },
  {
    slug: 'walk-on-beach',
    faqs: [
      { question: "What makes Walk on the Beach special?", answer: "<a href=\"/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a> captures Mediterranean sunlight reflecting off wet sand and white fabric. His loose brushwork conveys the movement of figures along the <a href=\"https://luxurywallart.com/collections/beach-artwork\" target=\"_blank\" rel=\"noopener\"><strong>beach</strong></a>." },
      { question: "Where is Walk on the Beach located?", answer: "The <a href=\"/museum/sorolla-museum\"><strong>Sorolla Museum</strong></a> in Madrid displays this work. The museum is the artist's former home and studio, filled with his sun-drenched paintings." },
      { question: "What style did Sorolla paint in?", answer: "<a href=\"/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> developed a Spanish variant of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> focused on intense Mediterranean light. His beach scenes made him internationally famous in his lifetime." }
    ]
  },
  {
    slug: 'yellow-cow',
    faqs: [
      { question: "Why did Franz Marc paint a yellow cow?", answer: "<a href=\"/artist/franz-marc\"><strong>Marc</strong></a> assigned emotional meanings to colors. Yellow represented femininity and joy. The leaping cow expresses pure animal vitality against a landscape of blue and red." },
      { question: "Where can I see The Yellow Cow?", answer: "It hangs at <a href=\"/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich. Marc painted it in 1911, likely as a tribute to his wife Maria. For <a href=\"https://luxurywallart.com/collections/cow-art\" target=\"_blank\" rel=\"noopener\"><strong>cow artwork</strong></a>, this remains iconic." },
      { question: "What movement was Franz Marc part of?", answer: "<a href=\"/artist/franz-marc\"><strong>Marc</strong></a> co-founded Der Blaue Reiter (The Blue Rider) with Kandinsky. This German Expressionist group believed color could express spiritual truths about nature and existence." },
      { question: "What happened to Franz Marc?", answer: "<a href=\"/artist/franz-marc\"><strong>Marc</strong></a> was killed at Verdun in 1916, age 36. The German army had planned to withdraw him as a cultural treasure, but the order came too late." }
    ]
  },
  {
    slug: 'lady-green-jacket',
    faqs: [
      { question: "Who painted Lady in a Green Jacket?", answer: "<a href=\"/artist/august-macke\"><strong>August Macke</strong></a> created this vibrant portrait in 1913. He was a key member of the German Expressionist movement and close friend of Franz Marc." },
      { question: "Where is Lady in a Green Jacket displayed?", answer: "The <a href=\"/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich houses this painting. The museum has the world's largest collection of Blue Rider artworks." },
      { question: "What style is Lady in a Green Jacket?", answer: "<a href=\"/artist/august-macke\"><strong>Macke</strong></a> blended Fauvism's bold colors with Cubist structure. His <a href=\"https://luxurywallart.com/collections/green-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>green</strong></a> jacket radiates against warm background tones, creating visual harmony." }
    ]
  },
  {
    slug: 'niagara-church',
    faqs: [
      { question: "What makes Church's Niagara painting famous?", answer: "<a href=\"/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> captured the falls from the Canadian side, placing viewers at the edge of the rushing water. No land appears in the foreground, creating an immersive effect." },
      { question: "Where can I see Niagara by Church?", answer: "The painting is at <a href=\"/museum/corcoran-gallery\"><strong>Corcoran Gallery of Art</strong></a> (now part of the National Gallery) in Washington D.C. It made Church famous when exhibited in 1857." },
      { question: "How big is Church's Niagara?", answer: "The canvas spans over 7 feet wide (42.5 x 90.5 inches). <a href=\"/artist/frederic-edwin-church\"><strong>Church</strong></a> wanted viewers to feel the scale of the falls. For <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape art</strong></a>, size matters." }
    ]
  },
  {
    slug: 'port-saint-tropez',
    faqs: [
      { question: "What technique did Signac use in Port of Saint-Tropez?", answer: "<a href=\"/artist/paul-signac\"><strong>Paul Signac</strong></a> used Pointillism, applying small dots of pure color that blend optically. The technique creates shimmering light effects perfect for <a href=\"https://luxurywallart.com/collections/coastal-ocean\" target=\"_blank\" rel=\"noopener\"><strong>coastal scenes</strong></a>." },
      { question: "Where is The Port of Saint-Tropez displayed?", answer: "You can see it at <a href=\"/museum/national-museum-western-art-tokyo\"><strong>National Museum of Western Art</strong></a> in Tokyo. Signac loved Saint-Tropez and helped make it an artist colony." },
      { question: "What movement was Signac part of?", answer: "<a href=\"/artist/paul-signac\"><strong>Signac</strong></a> co-founded Neo-Impressionism with Georges Seurat. After Seurat's early death, Signac became the movement's chief theorist and practitioner." }
    ]
  },
  {
    slug: 'eiffel-tower-delaunay',
    faqs: [
      { question: "Why did Delaunay paint the Eiffel Tower?", answer: "<a href=\"/artist/robert-delaunay\"><strong>Robert Delaunay</strong></a> saw the tower as a symbol of modern life. He painted it repeatedly, fragmenting and reconstructing the structure through Cubist techniques." },
      { question: "Where can I see Delaunay's Eiffel Tower?", answer: "This version hangs at <a href=\"/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a>. Delaunay created dozens of Eiffel Tower paintings between 1909 and 1912." },
      { question: "What style is Delaunay's Eiffel Tower?", answer: "<a href=\"/artist/robert-delaunay\"><strong>Delaunay</strong></a> developed Orphism, emphasizing bright color over monochrome Cubism. The <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> geometric forms capture the tower's energy and height." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 12)...');
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
