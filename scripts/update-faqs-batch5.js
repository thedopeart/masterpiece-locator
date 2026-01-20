const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // Batch 13
  {
    slug: "hunters-in-the-snow",
    faqs: [
      { question: "What is Hunters in the Snow about?", answer: "This 1565 painting by <a href=\"/artist/pieter-bruegel-the-elder\"><strong>Pieter Bruegel the Elder</strong></a> depicts weary hunters returning to a snow-covered Flemish village. It's one of six surviving works from his <strong>Months series</strong>, representing winter." },
      { question: "Where is Hunters in the Snow displayed?", answer: "The painting hangs at the <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. It's been part of their collection since the museum opened in 1891 and remains one of their most visited works." },
      { question: "Why is this winter landscape so famous?", answer: "Bruegel's composition creates remarkable depth, drawing your eye from the hunters down into the valley below. The work influenced countless <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape paintings</strong></a> and still shapes how artists depict winter scenes today." },
      { question: "What details make this painting special?", answer: "Look for the <strong>frozen ponds</strong> where villagers skate and play, the silhouetted birds in bare trees, and distant Alpine peaks. These elements create a <a href=\"https://luxurywallart.com/collections/country-farm-paintings\" target=\"_blank\" rel=\"noopener\"><strong>rural atmosphere</strong></a> that feels both specific and timeless." }
    ]
  },
  {
    slug: "water-lilies-orangerie",
    faqs: [
      { question: "What makes the Orangerie Water Lilies unique?", answer: "<a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> designed these massive murals specifically for two oval rooms at the museum. The eight panels wrap around visitors, creating an immersive 360-degree experience of his Giverny pond." },
      { question: "Where can I see these Water Lilies panels?", answer: "These murals are permanently installed at the <a href=\"/museum/musee-de-lorangerie\"><strong>Musée de l'Orangerie</strong></a> in Paris. Monet donated them to France in 1922, and the museum was renovated specifically to house them." },
      { question: "How does this relate to Impressionism?", answer: "Monet was a founder of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, and these late works push the style to its limits. The paintings blur the line between <strong>abstraction</strong> and representation, focusing purely on light, color, and reflection." },
      { question: "What inspired Monet's water lily obsession?", answer: "Monet spent his final 30 years painting the pond at his Giverny home. These <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral compositions</strong></a> became his primary subject, resulting in over 250 oil paintings of water lilies." }
    ]
  },
  {
    slug: "adoration-magi-botticelli",
    faqs: [
      { question: "What's depicted in Botticelli's Adoration of the Magi?", answer: "This 1476 <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> masterpiece shows the three Magi presenting gifts to the infant Jesus. <a href=\"/artist/sandro-botticelli\"><strong>Botticelli</strong></a> included portraits of the powerful <strong>Medici family</strong> as the wise men and their attendants." },
      { question: "Where is Botticelli's self-portrait in this painting?", answer: "Botticelli painted himself standing at the far right edge, gazing directly at viewers. He wears a <strong>golden-yellow robe</strong> and stands apart from the crowd. You can see it at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence." },
      { question: "Why did Botticelli include the Medici family?", answer: "The Medici were Florence's ruling family and major art patrons. Including them honored his benefactors while adding political prestige to the work. This type of <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait integration</strong></a> was common in Renaissance commissions." },
      { question: "What makes this Adoration scene different from others?", answer: "Unlike traditional compositions, Botticelli arranged figures in a <strong>triangular formation</strong> around the Holy Family. The ruined classical architecture symbolizes the old pagan world giving way to Christianity. It's now housed at the <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a>." }
    ]
  },
  {
    slug: "the-star-dancer",
    faqs: [
      { question: "What does The Star by Degas show?", answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> captures a <strong>prima ballerina</strong> taking her bow on stage at the Paris Opera. The unusual high angle, as if viewed from a box seat, creates a dramatic perspective on the lone dancer." },
      { question: "Where is The Star (Dancer on Stage) located?", answer: "This 1878 pastel hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It's one of Degas's most recognized ballet works and a highlight of the museum's <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> collection." },
      { question: "Why did Degas paint so many ballet dancers?", answer: "Degas was obsessed with movement and the human form. The Paris Opera gave him access to rehearsals and performances. His <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figure studies</strong></a> of dancers number over 1,500 works in various media." },
      { question: "What technique did Degas use for this work?", answer: "Degas worked in <strong>pastel on paper</strong>, not oil paint. This allowed him to capture the soft, powdery quality of stage lighting and the dancer's tutu. The medium gave him speed and luminosity that oils couldn't match." }
    ]
  },
  {
    slug: "jewish-bride",
    faqs: [
      { question: "What is The Jewish Bride painting about?", answer: "This 1667 work by <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> shows an intimate moment between a couple. The man gently places his hand on the woman's chest while she touches his hand. The true subjects' identities remain unknown." },
      { question: "Where can I see The Jewish Bride?", answer: "The painting is displayed at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's considered one of Rembrandt's greatest works and a masterpiece of <a href=\"/movement/baroque\"><strong>Baroque</strong></a> portraiture." },
      { question: "Why is it called The Jewish Bride?", answer: "The title came from an Amsterdam collector in the 1800s who thought it depicted a Jewish father giving his daughter a necklace. Modern scholars believe it may show a biblical couple or a <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait commission</strong></a>." },
      { question: "What makes Rembrandt's technique special here?", answer: "Rembrandt applied paint in thick, textured layers called <strong>impasto</strong>, especially on the couple's ornate clothing. The gold and red fabrics seem to glow from within. Van Gogh once said he'd give ten years of his life to sit before this <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>golden masterwork</strong></a>." }
    ]
  },
  // Batch 14
  {
    slug: "the-kiss-klimt",
    faqs: [
      { question: "What makes The Kiss by Gustav Klimt so famous?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Gustav Klimt's</strong></a> masterpiece is celebrated for its <strong>gold leaf technique</strong> and intimate portrayal of romantic love. The painting's decorative patterns and tender embrace have made it one of the most recognized artworks worldwide." },
      { question: "Where is The Kiss displayed?", answer: "You can see this iconic painting at the <a href=\"/museum/belvedere-museum\"><strong>Belvedere Museum</strong></a> in Vienna, Austria. It's been part of their permanent collection since 1908 and remains their most visited piece." },
      { question: "What style is The Kiss painted in?", answer: "The painting represents Klimt's <strong>Golden Phase</strong>, blending <strong>Art Nouveau</strong> with Byzantine influences. If you love this ornate style, explore our <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold art collection</strong></a> for similar pieces." },
      { question: "What do the patterns in The Kiss symbolize?", answer: "The <strong>geometric rectangles</strong> on the man's robe represent masculinity, while the woman's <strong>circular floral patterns</strong> symbolize femininity. Together they create visual harmony reflecting the couple's unity." }
    ]
  },
  {
    slug: "jane-avril",
    faqs: [
      { question: "Who was Jane Avril?", answer: "Jane Avril was a famous <strong>can-can dancer</strong> at the Moulin Rouge in Paris. <a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Henri de Toulouse-Lautrec</strong></a> created several posters featuring her, helping establish her as a cultural icon of 1890s Parisian nightlife." },
      { question: "What art movement does this poster represent?", answer: "This work is part of the <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> movement. Toulouse-Lautrec's bold outlines and flat color areas also influenced the development of <strong>Art Nouveau</strong> poster design." },
      { question: "Why did Toulouse-Lautrec create posters?", answer: "He found <strong>commercial poster art</strong> gave him creative freedom and wide public exposure. His advertising work for Parisian cabarets is now considered fine art, displayed in major museums worldwide." },
      { question: "What makes this poster artistically significant?", answer: "The <strong>dynamic composition</strong> and Japanese-inspired flat colors were groundbreaking for commercial art. Browse our <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people paintings</strong></a> for similarly expressive figure work." }
    ]
  },
  {
    slug: "nude-maja",
    faqs: [
      { question: "Why is The Nude Maja historically significant?", answer: "<a href=\"/artist/francisco-goya\"><strong>Francisco Goya's</strong></a> painting was the first major Western artwork to show a <strong>nude woman</strong> without mythological or religious justification. This bold approach caused scandal and brought Goya before the Spanish Inquisition." },
      { question: "Where can I see The Nude Maja today?", answer: "The painting hangs at the <a href=\"/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid, Spain. It's displayed alongside its companion piece, The Clothed Maja, allowing visitors to compare both versions." },
      { question: "Who was the woman in The Nude Maja?", answer: "Her identity remains a mystery. Some historians suggest she was the <strong>Duchess of Alba</strong>, while others believe she was a model. Goya never revealed who posed for this controversial work." },
      { question: "What style is The Nude Maja painted in?", answer: "Goya painted this during his transition between <strong>Rococo</strong> and <strong>Romanticism</strong>. For similar figure studies, check our <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women art collection</strong></a>." }
    ]
  },
  {
    slug: "japanese-footbridge",
    faqs: [
      { question: "What is depicted in The Japanese Footbridge?", answer: "<a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> painted the iconic <strong>green arched bridge</strong> in his Giverny garden. The water lilies, willow trees, and reflections became subjects he'd return to for decades." },
      { question: "Where is The Japanese Footbridge displayed?", answer: "This 1899 version hangs at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington D.C. Monet painted over a dozen variations of this bridge throughout his career." },
      { question: "What movement does this painting represent?", answer: "It's a prime example of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, focusing on <strong>light and atmosphere</strong> rather than precise details. Monet's loose brushwork captures a fleeting moment in his beloved garden." },
      { question: "Why did Monet paint his garden so often?", answer: "Monet designed his Giverny garden specifically as a <strong>painting subject</strong>. He spent 43 years there, obsessively documenting how light changed across seasons. Explore similar works in our <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature art collection</strong></a>." }
    ]
  },
  {
    slug: "clothed-maja",
    faqs: [
      { question: "How does The Clothed Maja relate to The Nude Maja?", answer: "<a href=\"/artist/francisco-goya\"><strong>Francisco Goya</strong></a> painted both works around 1800 with identical poses and compositions. Scholars believe the clothed version may have been created to hang over the nude, concealing it from casual viewers." },
      { question: "Where is The Clothed Maja displayed?", answer: "Both Maja paintings hang side by side at the <a href=\"/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid. This arrangement lets visitors appreciate Goya's technical skill in rendering both fabric and skin." },
      { question: "What is the woman wearing in this painting?", answer: "She wears a <strong>maja costume</strong>, the fashionable dress of Spanish working-class women that aristocrats adopted. The tight bodice, sash, and transparent jacket were considered provocative for the era." },
      { question: "Which painting is considered more valuable?", answer: "Art historians generally consider both <strong>equally significant</strong> as a pair. The clothed version actually shows more technical virtuosity in its detailed fabric rendering. See our <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait art</strong></a> for similar classical works." }
    ]
  },
  // Batch 15
  {
    slug: "the-descent-from-the-cross",
    faqs: [
      { question: "What is The Descent from the Cross?", answer: "This <strong>altarpiece triptych</strong> by <a href=\"/artist/peter-paul-rubens\"><strong>Peter Paul Rubens</strong></a> shows Christ being lowered from the cross. It's one of the most powerful works of <a href=\"/movement/baroque\"><strong>Baroque</strong></a> religious art, painted in 1614." },
      { question: "Where is The Descent from the Cross displayed?", answer: "The painting hangs in the <a href=\"/museum/cathedral-of-our-lady-antwerp\"><strong>Cathedral of Our Lady</strong></a> in Antwerp, Belgium. It was commissioned for the cathedral and remains in its original location to this day." },
      { question: "Why is this painting significant?", answer: "Rubens created a deeply <strong>emotional composition</strong> with dramatic lighting and physical tension. If you're drawn to religious themes, explore our <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual art collection</strong></a> for similar works." }
    ]
  },
  {
    slug: "anxiety-munch",
    faqs: [
      { question: "What does Anxiety by Edvard Munch depict?", answer: "This 1894 painting shows a <strong>crowd of pale, anxious figures</strong> against a turbulent sky. <a href=\"/artist/edvard-munch\"><strong>Edvard Munch</strong></a> used the same swirling landscape he'd painted in The Scream one year earlier." },
      { question: "Where can I see Anxiety in person?", answer: "The painting is housed at the <a href=\"/museum/munch-museum\"><strong>Munch Museum</strong></a> in Oslo, Norway. The museum holds the world's largest collection of Munch's work, including many of his psychologically intense pieces." },
      { question: "What art movement does Anxiety belong to?", answer: "It's a key work of <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>, a movement focused on raw emotional experience over realistic depiction. For art with similar intensity, browse our <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre collection</strong></a>." },
      { question: "How does Anxiety relate to The Scream?", answer: "Both paintings share the same <strong>blood-red sky</strong> and winding path in Kristiania (now Oslo). Munch often revisited themes, and these works explore his ongoing struggle with mental anguish and existential dread." }
    ]
  },
  {
    slug: "the-balcony-manet",
    faqs: [
      { question: "Who is depicted in The Balcony?", answer: "The painting features <strong>Berthe Morisot</strong> seated in white, along with violinist Fanny Claus and painter Antoine Guillemet. <a href=\"/artist/edouard-manet\"><strong>Édouard Manet</strong></a> portrayed his friends and fellow artists in this 1869 work." },
      { question: "Where is The Balcony located?", answer: "You'll find it at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum's collection of <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> works makes it the perfect home for this transitional piece." },
      { question: "What makes The Balcony unique?", answer: "Manet created an oddly <strong>disconnected mood</strong>. The three figures don't interact or even look at each other. This psychological distance gives the painting its strange, almost unsettling quality." },
      { question: "What style inspired this painting?", answer: "Manet drew from Spanish painting, particularly Goya's <strong>Majas on a Balcony</strong>. For similar figure compositions, check out our <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people paintings</strong></a> collection." }
    ]
  },
  {
    slug: "starry-night-over-rhone",
    faqs: [
      { question: "What does Starry Night Over the Rhône show?", answer: "Painted in September 1888, it captures the <strong>Arles waterfront at night</strong> with gas lamps reflecting on the water. <a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> painted it outdoors under the stars, using candlelight on his hat." },
      { question: "Where is Starry Night Over the Rhône displayed?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It's one of several night scenes Van Gogh painted during his time in the south of France." },
      { question: "How does this relate to The Starry Night?", answer: "Van Gogh painted this nearly a year before his famous <strong>Starry Night</strong>. Both explore night skies, but this one shows an actual location while the later version came from imagination and memory." },
      { question: "What movement does this painting represent?", answer: "It's a masterpiece of <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. For artwork with similar rich blues and yellows, explore our <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue wall art</strong></a> and <a href=\"https://luxurywallart.com/collections/yellow-paintings\" target=\"_blank\" rel=\"noopener\"><strong>yellow paintings</strong></a>." }
    ]
  },
  {
    slug: "primavera",
    faqs: [
      { question: "What is Primavera about?", answer: "This 1480 painting is an <strong>allegory of spring</strong> featuring Venus, Mercury, the Three Graces, and Flora. <a href=\"/artist/sandro-botticelli\"><strong>Sandro Botticelli</strong></a> filled the scene with over 500 identified plant species." },
      { question: "Where can I see Primavera?", answer: "It's displayed at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The painting was commissioned by the Medici family and has remained in Florence for over five centuries." },
      { question: "What art movement does Primavera belong to?", answer: "It's a celebrated work of the Italian <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>. Botticelli blended classical mythology with contemporary Florentine culture to create this layered, symbolic composition." },
      { question: "Why is Primavera considered important?", answer: "The painting's <strong>graceful figures</strong> and mythological themes influenced art for centuries. For nature-inspired pieces with similar beauty, browse our <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature art collection</strong></a>." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks with FAQs...`);

  for (const update of updates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title}`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
