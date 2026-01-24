const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'johannes-vermeer-young-woman-with-a-water-pitcher',
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this serene domestic scene around 1662, showing a young woman at a window holding a gilt water pitcher while her other hand rests on the casement. The composition exemplifies Vermeer's mastery of light: cool northern daylight floods through the leaded glass, illuminating the woman's blue dress and white headdress while casting subtle shadows across the room.</p>

<p>This painting made history in 1889 when it became the <strong>first Vermeer to enter an American collection</strong>, purchased by Henry Marquand for just eight hundred dollars. Today it would be priceless. The work belongs to Vermeer's "pearl pictures" period, named for the luminous quality of light that gives his paintings their distinctive glow. The geometry feels deliberate: three rectangles (window, map, basin) structure the composition around the central figure.</p>

<p>Scholars have debated the painting's meaning. Some see a simple domestic moment, while others read symbolic significance in the woman's posture, the jewelry box on the table, or the map of the Netherlands on the wall. Vermeer leaves interpretation open. The painting now hangs at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, where it remains one of the most beloved examples of Dutch <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Golden Age painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Young Woman with a Water Pitcher?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York City. It became the first Vermeer to enter an American collection when purchased in 1889 for just eight hundred dollars.`
      },
      {
        question: "What are Vermeer's 'pearl pictures'?",
        answer: `The <strong>"pearl pictures"</strong> refer to paintings from <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer's</strong></a> mature period around 1662, characterized by their luminous, pearlescent quality of light. The term describes the distinctive glow that makes his domestic scenes feel almost supernatural.`
      },
      {
        question: "What objects appear in the painting?",
        answer: `The composition includes a <strong>gilt water pitcher</strong>, a metal basin, a jewelry box on the table, a map of the Netherlands, and a leaded glass window. These carefully arranged objects create the geometric structure Vermeer favored.`
      },
      {
        question: "Why is this painting significant for American museums?",
        answer: `This was the <strong>first Vermeer</strong> acquired by any American collection, purchased in 1889 for eight hundred dollars. It helped establish interest in Dutch Golden Age painting among American collectors and institutions.`
      }
    ]
  },
  {
    slug: 'johannes-vermeer-the-music-lesson',
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted The Music Lesson around 1662-1664, creating one of his most sophisticated explorations of space, light, and human connection. A young woman stands at a virginal (a type of keyboard instrument) while a gentleman watches from beside her. The instrument's lid bears a Latin inscription: "MUSICA LETITIAE COMES MEDICINA DOLORUM" (Music is the companion of joy and the medicine of sorrow).</p>

<p>Vermeer hides a secret in the tilted mirror above the virginal. While the woman appears to focus on her playing when viewed directly, her reflection shows her <strong>turning toward the man</strong>. This subtle revelation transforms a music lesson into something more intimate, suggesting romantic attachment beneath the formal surface. The painting brilliantly uses space, pulling viewers through the foreground table and chairs toward the distant figures.</p>

<p>King George III purchased this painting in 1762, and it has remained in the <a href="/apps/masterpieces/museum/royal-collection-uk"><strong>Royal Collection</strong></a> ever since. Unlike most Vermeers in public museums, it hangs in the private apartments of British monarchs, though it occasionally appears in exhibitions. The work demonstrates why Vermeer's <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>interior scenes</strong></a> continue to fascinate viewers centuries later.</p>`,
    faqs: [
      {
        question: "Where can I see The Music Lesson?",
        answer: `This painting belongs to the <a href="/apps/masterpieces/museum/royal-collection-uk"><strong>Royal Collection</strong></a> of the British monarchy, acquired by King George III in 1762. It normally hangs in private royal apartments but occasionally appears in special exhibitions.`
      },
      {
        question: "What does the Latin inscription mean?",
        answer: `The virginal's lid reads <strong>"MUSICA LETITIAE COMES MEDICINA DOLORUM"</strong> meaning "Music is the companion of joy and the medicine of sorrow." This motto was common on musical instruments and reflects the era's belief in music's emotional power.`
      },
      {
        question: "What secret does the mirror reveal?",
        answer: `While the woman appears focused on playing when viewed directly, the tilted mirror shows her <strong>turning toward the gentleman</strong>. <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer</strong></a> uses this hidden detail to suggest romantic interest beneath the formal music lesson.`
      },
      {
        question: "What is a virginal?",
        answer: `A <strong>virginal</strong> is a small keyboard instrument popular in seventeenth-century homes, similar to a harpsichord but more compact. Learning to play was considered an essential accomplishment for young women of good families.`
      }
    ]
  },
  {
    slug: 'johannes-vermeer-woman-reading-a-letter-woman-in-blue-reading-a-let',
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this intimate scene around 1662-1665, showing a woman absorbed in reading a letter. She stands in profile wearing a blue jacket, her face illuminated by soft light from an unseen window. Behind her hangs a large map of the Netherlands, and chairs bracket the composition on either side. The moment feels utterly private, as if we've glimpsed something not meant for our eyes.</p>

<p>The woman's body suggests she may be <strong>pregnant</strong>, a detail that has sparked centuries of interpretation. Vincent van Gogh wrote admiringly of the "beautiful pregnant Dutch lady" in this painting. If she is expecting, the letter likely comes from her absent husband, perhaps a sailor or merchant whose travels are symbolized by the map. The blue of her jacket, made from precious ultramarine pigment, indicates wealth and status.</p>

<p>This was the first Vermeer acquired by the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, purchased in 1885. The museum now holds four Vermeers, but this remains among the most beloved. The painting captures something essential about Vermeer's art: the transformation of ordinary domestic moments into scenes of profound <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>emotional depth</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Woman in Blue Reading a Letter?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam. It was the first Vermeer the museum acquired, purchased in 1885, and remains one of its most treasured works.`
      },
      {
        question: "Is the woman in the painting pregnant?",
        answer: `Many viewers believe the woman appears <strong>pregnant</strong>, though scholars debate whether this reflects reality or simply the fashion of the era. Vincent van Gogh described her as a "beautiful pregnant Dutch lady," supporting the traditional interpretation.`
      },
      {
        question: "What does the map symbolize?",
        answer: `The large <strong>map of the Netherlands</strong> behind the woman may symbolize an absent lover, perhaps a sailor or merchant traveling abroad. <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer</strong></a> often used maps to suggest distance, travel, and separation in his domestic scenes.`
      },
      {
        question: "Why is the blue jacket significant?",
        answer: `The woman's blue jacket was painted with <strong>ultramarine</strong>, the most expensive pigment available, made from ground lapis lazuli imported from Afghanistan. Its use indicates both her wealth and Vermeer's willingness to invest in the finest materials.`
      }
    ]
  },
  {
    slug: 'parmigianino-selfportrait-in-a-convex-mirror',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> created this self-portrait around 1524 when he was just twenty-one years old, painting his reflection as seen in a barber's convex mirror. To heighten the illusion, he painted on a specially prepared curved wooden panel that mimics the mirror's shape. The result is startling: his hand looms enormously in the foreground while his face recedes smoothly in the center.</p>

<p>The young artist made this tour-de-force to <strong>impress Pope Clement VII</strong> during a visit to Rome. It worked. The technical virtuosity demonstrated both artistic skill and intellectual sophistication, playing with Renaissance ideas about perception, reality, and the nature of representation itself. Giorgio Vasari wrote that the painting seemed "more real than reality."</p>

<p>Centuries later, American poet John Ashbery wrote a long meditation on this painting, "Self-Portrait in a Convex Mirror," which won the Pulitzer Prize, National Book Award, and National Book Critics Circle Award in 1976. The work continues to inspire artists and writers exploring questions of <strong>identity and perception</strong>. The original now hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, a masterpiece of <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Mannerist invention</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see the Self-Portrait in a Convex Mirror?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum's collection includes major works of Italian Renaissance and Mannerist painting.`
      },
      {
        question: "Why is the hand so large in the painting?",
        answer: `<a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> painted what he actually saw in a <strong>convex mirror</strong>, which distorts objects near the edges and makes them appear larger. He even painted on a curved panel to enhance the illusion of looking into a mirror.`
      },
      {
        question: "How old was Parmigianino when he painted this?",
        answer: `The artist was only <strong>twenty-one years old</strong> when he created this self-portrait around 1524. He made it to impress Pope Clement VII and demonstrate his technical virtuosity during a visit to Rome.`
      },
      {
        question: "What is the John Ashbery connection?",
        answer: `American poet John Ashbery wrote <strong>"Self-Portrait in a Convex Mirror"</strong> (1975), a long meditation on this painting. The poem won the Pulitzer Prize, National Book Award, and National Book Critics Circle Award, bringing renewed attention to Parmigianino's work.`
      }
    ]
  },
  {
    slug: 'caravaggio-young-sick-bacchus',
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this early self-portrait around 1593-1594, depicting himself as the wine god Bacchus during a period of serious illness. The figure's face has a sickly, jaundiced cast, and the lips appear pale rather than the rosy hue typical of Bacchus imagery. Instead of the god's traditional grape vine crown, Caravaggio wears a wreath of ivy, a substitution that signals something is wrong.</p>

<p>The painting was likely made while Caravaggio recovered from an illness, possibly <strong>malaria</strong>, which was common in Rome. Working with a mirror, he captured his own weakened state with unflinching honesty. The grapes and peaches he holds look ripe and inviting, but the young man offering them appears too unwell to enjoy them. This tension between pleasure and suffering runs throughout Caravaggio's work.</p>

<p>The painting originally belonged to the workshop of Giuseppe Cesari, Caravaggio's early employer. In 1607, Cardinal Scipione Borghese seized Cesari's property and claimed this work along with others. It now hangs at the <a href="/apps/masterpieces/museum/borghese-gallery"><strong>Borghese Gallery</strong></a> in Rome, where it represents the <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>young artist's</strong></a> raw talent before he developed his mature revolutionary style.</p>`,
    faqs: [
      {
        question: "Where can I see Young Sick Bacchus?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/borghese-gallery"><strong>Borghese Gallery</strong></a> in Rome, Italy. It entered the collection in 1607 when Cardinal Scipione Borghese seized property belonging to Caravaggio's former employer.`
      },
      {
        question: "Is this really a self-portrait?",
        answer: `Yes, <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted himself using a <strong>mirror</strong> during a period of serious illness, probably malaria. The sickly, jaundiced appearance reflects his actual condition rather than an artistic choice.`
      },
      {
        question: "Why does Bacchus look ill in this painting?",
        answer: `Caravaggio painted this while recovering from illness, capturing his own <strong>weakened state</strong> with characteristic honesty. The pale lips, yellowish skin, and ivy wreath (instead of grapes) all signal the god's uncharacteristic sickness.`
      },
      {
        question: "When did Caravaggio paint this work?",
        answer: `Caravaggio created this painting around <strong>1593-1594</strong> during his early years in Rome. It predates his revolutionary mature style but already shows his interest in dramatic realism and psychological complexity.`
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
