const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'giovanni-bellini-transfiguration-of-christ-on-mount-tabor',
    description: `<p><a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a> painted this early interpretation of the Transfiguration around 1455, showing the moment when Christ revealed his divine nature to three disciples on Mount Tabor. Jesus stands radiant between Moses and Elijah while Peter, James, and John cower below, overwhelmed by the vision. The painting originally hung in the Church of San Job in Venice before entering museum collections.</p>

<p>Scholars once attributed this work to Andrea Mantegna, Bellini's brother-in-law, whose influence clearly shows in the crisp outlines and sculptural treatment of figures. The <strong>hard linear style</strong> differs from the soft, atmospheric approach Bellini would later develop. Yet even here, his sensitivity to light and landscape hints at his future direction. The rocky setting frames the supernatural event while grounding it in observable nature.</p>

<p>The Transfiguration was a significant subject in Venetian churches, representing Christ's promise of salvation and his connection to Old Testament prophecy. Bellini would return to religious subjects throughout his long career, becoming the most influential painter in Venice before Titian emerged. This early panel now belongs to the <a href="/apps/masterpieces/museum/museo-correr"><strong>Museo Correr</strong></a> in Venice, where it documents the beginning of a career that shaped <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>Venetian Renaissance painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Bellini's Transfiguration of Christ?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/museo-correr"><strong>Museo Correr</strong></a> in Venice, Italy. The museum, located on St. Mark's Square, holds important works from the early Venetian Renaissance.`
      },
      {
        question: "Why was this painting attributed to Mantegna?",
        answer: `The crisp outlines and sculptural figure treatment resemble the style of <strong>Andrea Mantegna</strong>, <a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Bellini's</strong></a> brother-in-law. Scholars now recognize it as Bellini's early work showing Mantegna's strong influence before he developed his own softer approach.`
      },
      {
        question: "What does the Transfiguration depict?",
        answer: `The scene shows <strong>Christ revealing his divine nature</strong> on Mount Tabor to disciples Peter, James, and John. Moses and Elijah appear beside Jesus, connecting him to Old Testament prophecy. The disciples cower, overwhelmed by the vision.`
      },
      {
        question: "Where was this painting originally displayed?",
        answer: `The painting originally hung in the <strong>Church of San Job</strong> in Venice. Religious subjects like the Transfiguration were significant in Venetian churches, representing Christ's promise of salvation to worshippers.`
      }
    ]
  },
  {
    slug: 'tintoretto-st-george',
    description: `<p><a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> painted this dynamic image of Saint George around 1543-1544, early in his career when he was developing the energetic style that would distinguish him from other Venetian painters. The warrior saint appears in vigorous motion, his figure cutting diagonally across the canvas with the restless energy that became Tintoretto's trademark.</p>

<p>Saint George held special significance for Venice as one of the city's <strong>patron saints</strong>. His legendary defeat of a dragon symbolized the triumph of Christianity over paganism and, by extension, Venice's own victories over enemies. Tintoretto depicts the saint as a powerful figure of action rather than static devotional icon. Bold lighting carves the form from shadow, creating dramatic contrasts that anticipate Baroque painting.</p>

<p>Even in this early work, Tintoretto shows his ambition to combine Michelangelo's powerful drawing with Titian's Venetian color. He reportedly kept a sign in his studio declaring this dual allegiance. The speed and confidence of his brushwork would later earn him the nickname "Il Furioso." This painting now hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, representing the emergence of a painter who would fill Venice with <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>monumental religious works</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Tintoretto's St. George?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The museum holds an important collection of Venetian Renaissance paintings.`
      },
      {
        question: "Why was Saint George important to Venice?",
        answer: `Saint George was one of <strong>Venice's patron saints</strong>. His legendary defeat of a dragon symbolized Christianity's triumph over paganism and, by extension, Venice's victories over its enemies. The saint appeared throughout Venetian art and civic imagery.`
      },
      {
        question: "What makes Tintoretto's style distinctive?",
        answer: `<a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> combined <strong>dynamic movement and dramatic lighting</strong> with Venetian color. His figures twist and surge with restless energy. He reportedly aimed to unite Michelangelo's drawing with Titian's palette.`
      },
      {
        question: "When did Tintoretto paint this work?",
        answer: `Tintoretto created this painting around <strong>1543-1544</strong>, early in his career. Even at this stage, his emerging dynamic style distinguishes his work from the more serene approach of other Venetian painters.`
      }
    ]
  },
  {
    slug: 'tintoretto-solomon-and-sheba',
    description: `<p><a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> painted this sumptuous scene around 1545, depicting the legendary meeting between King Solomon and the Queen of Sheba. The Old Testament queen traveled from Arabia to test Solomon's wisdom with difficult questions, arriving with a vast retinue bearing gifts of gold, spices, and precious stones. Tintoretto sets this encounter within an elaborate architectural space filled with courtiers in rich Venetian fabrics.</p>

<p>The painting showcases the <strong>luxurious color</strong> that distinguished Venetian art from the more austere Florentine tradition. Sheba's attendants wear silks and brocades rendered with visible delight in their textures and patterns. The architectural setting creates dramatic recession into space, with columns and arches framing the royal encounter. Solomon receives his famous visitor with the gravity befitting a legendary wise king.</p>

<p>This work belongs to Tintoretto's early mature period, when he was establishing his reputation in Venice. The combination of biblical narrative with contemporary Venetian splendor appealed to patrons who saw their own city reflected in Solomon's court. The painting now hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, where it represents the theatrical grandeur of <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>Venetian Renaissance painting</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Solomon and Sheba?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum's collection includes major works of Italian Renaissance painting.`
      },
      {
        question: "What is the biblical story depicted?",
        answer: `According to the Old Testament, the <strong>Queen of Sheba</strong> traveled from Arabia to test King Solomon's legendary wisdom with difficult questions. She arrived with a vast retinue bearing gifts of gold, spices, and precious stones.`
      },
      {
        question: "Why did Venetian artists favor this subject?",
        answer: `Venetian patrons saw their own city reflected in <strong>Solomon's wealthy court</strong>. <a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a> could display rich fabrics, elaborate architecture, and ceremonial grandeur that celebrated Venice's commercial prosperity and cultural refinement.`
      },
      {
        question: "What distinguishes Venetian color from other Italian traditions?",
        answer: `Venetian painters emphasized <strong>rich, luminous color</strong> and textural effects over the linear precision favored in Florence. Silks, brocades, and flesh tones glowed with a warmth that became synonymous with the Venetian school.`
      }
    ]
  },
  {
    slug: 'titian-the-holy-family-with-a-shepherd',
    description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this intimate religious scene around 1510, during his early career when the influence of his teacher Giorgione remained strong. Mary sits with the infant Christ while Joseph rests nearby, and a shepherd appears in the background, adding pastoral depth to the composition. The landscape opens behind them with the soft, atmospheric quality characteristic of early Venetian Renaissance painting.</p>

<p>The work combines sacred subject matter with the <strong>poetic naturalism</strong> that defined Giorgione's brief career. Rather than placing the Holy Family in a formal architectural setting, Titian situates them in countryside that feels observed rather than invented. The shepherd connects the scene to the Nativity narrative while giving the composition spatial depth. His presence also links the religious subject to the pastoral poetry popular in Renaissance Venice.</p>

<p>Titian was still finding his distinctive voice when he painted this panel, but already shows the warmth of color and sensitivity to light that would define his mature work. The painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, where it represents both the Giorgionesque origins of Titian's art and the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>intimate devotional painting</strong></a> that Venetian patrons treasured.</p>`,
    faqs: [
      {
        question: "Where can I see The Holy Family with a Shepherd?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, England. The museum holds several important works by Titian spanning different periods of his long career.`
      },
      {
        question: "How does Giorgione's influence appear in this painting?",
        answer: `The soft, <strong>atmospheric landscape</strong> and poetic naturalism reflect the style of Giorgione, <a href="/apps/masterpieces/artist/titian"><strong>Titian's</strong></a> teacher. Rather than formal settings, both artists favored pastoral scenes that felt observed rather than invented.`
      },
      {
        question: "Why is a shepherd included in the Holy Family scene?",
        answer: `The <strong>shepherd</strong> connects the scene to the Nativity narrative, where shepherds were first to worship the newborn Christ. His presence also adds spatial depth and links the religious subject to pastoral poetry popular in Renaissance Venice.`
      },
      {
        question: "When did Titian paint this work?",
        answer: `Titian created this painting around <strong>1510</strong>, early in his career. He was still developing his distinctive style, though the warmth of color and sensitivity to light already hint at his mature achievements.`
      }
    ]
  },
  {
    slug: 'leonardo-da-vinci-study-for-the-madonna-with-the-fruit-bowl',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> created this preparatory drawing around 1478, exploring poses for a Madonna and Child composition. Executed in pen and ink on paper, the sheet shows Leonardo's restless mind testing different arrangements of mother and infant. Multiple sketched positions overlap as he worked toward an ideal grouping, revealing the creative process behind his finished paintings.</p>

<p>The drawing belongs to Leonardo's early Florentine period, when he was still working in Andrea del Verrocchio's workshop while developing his independent practice. The <strong>rapid, searching lines</strong> capture moments of movement and gesture that a finished painting would freeze into permanence. Leonardo filled countless pages with such studies, building his compositions through exhaustive preparation rather than direct painting.</p>

<p>Few artists left such complete records of their working methods. These sketches show Leonardo observing real mothers with children, noting how infants twist and reach, how women balance weight while holding babies. The naturalism that distinguishes his Madonnas began with drawings like this one. The sheet now belongs to the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, where it offers insight into how a Renaissance master developed his <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>celebrated compositions</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Leonardo drawing?",
        answer: `This study is held at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. The museum's collection includes several drawings and paintings by Leonardo, offering insight into his creative process.`
      },
      {
        question: "What does this drawing show?",
        answer: `The sheet shows <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo</strong></a> testing different poses for a <strong>Madonna and Child</strong> composition. Multiple sketched positions overlap as he worked toward an ideal arrangement, revealing his preparatory process.`
      },
      {
        question: "What medium did Leonardo use for this study?",
        answer: `Leonardo created this drawing in <strong>pen and ink on paper</strong>. He made countless such studies, building compositions through exhaustive preparation. The rapid, searching lines capture movement before a finished painting would freeze it.`
      },
      {
        question: "When did Leonardo create this drawing?",
        answer: `Leonardo made this study around <strong>1478</strong> during his early Florentine period. He was still connected to Verrocchio's workshop while developing his independent practice and distinctive approach to composition.`
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
