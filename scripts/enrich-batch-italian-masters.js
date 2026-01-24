const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'cimabue-madonna-and-child-enthroned-maesta',
    description: `<p><a href="/apps/masterpieces/artist/cimabue"><strong>Cimabue</strong></a> painted this monumental altarpiece around 1280-1290 for the church of Santa Trinita in Florence. Standing over twelve feet tall, the work shows the Virgin Mary enthroned with the Christ child on her lap, surrounded by eight angels arranged symmetrically on either side. Beneath the elaborate throne, four prophets peer upward from arched openings, creating a sense of sacred architecture within the painting itself.</p>

<p>The Santa Trinita Maestà represents a crucial moment in Western art history. While Cimabue worked within the <strong>Byzantine tradition</strong> of gold backgrounds and formal poses, he began pushing toward something new. The Virgin's face shows subtle modeling, and the throne creates an illusion of three-dimensional space that earlier Byzantine icons never attempted. These innovations would influence Cimabue's student Giotto, who would carry the revolution much further.</p>

<p>The painting remained in Santa Trinita until 1919, when it was moved to the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> for preservation. Today it hangs in the same room as similar monumental Madonnas by Duccio and Giotto, allowing visitors to witness the transformation of Italian <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious art</strong></a> across three crucial decades.</p>`,
    faqs: [
      {
        question: "Where can I see Cimabue's Santa Trinita Maestà?",
        answer: `This altarpiece is displayed at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It shares a room with monumental Madonnas by Duccio and Giotto, creating an extraordinary comparison of three masters who transformed Italian painting.`
      },
      {
        question: "How large is the Santa Trinita Maestà?",
        answer: `The painting stands over <strong>twelve feet tall</strong> (385 x 223 cm), making it one of the largest panel paintings of its era. Its monumental scale was designed to dominate the altar of Santa Trinita church in Florence.`
      },
      {
        question: "Why is Cimabue important in art history?",
        answer: `<a href="/apps/masterpieces/artist/cimabue"><strong>Cimabue</strong></a> represents the transition from flat Byzantine art toward the naturalism of the Renaissance. He introduced subtle three-dimensional modeling and spatial depth, innovations that his student <strong>Giotto</strong> would develop further.`
      },
      {
        question: "What figures appear in this painting?",
        answer: `The composition shows the Virgin and Child enthroned, flanked by <strong>eight angels</strong> arranged symmetrically. Below the throne, four Old Testament prophets look upward from arched openings, connecting the scene to biblical prophecy about Christ's coming.`
      }
    ]
  },
  {
    slug: 'duccio-madonna-rucellai',
    description: `<p><a href="/apps/masterpieces/artist/duccio-di-buoninsegna"><strong>Duccio di Buoninsegna</strong></a> painted the Rucellai Madonna in 1285 for a confraternity at Santa Maria Novella in Florence. The massive altarpiece rises over fourteen feet tall, showing the Virgin enthroned with the Christ child while six angels kneel at either side. It remains Duccio's first documented work and established his reputation as a master of the Sienese school.</p>

<p>For centuries, this painting was wrongly attributed to Cimabue. Only in 1889 did scholars discover documents proving <strong>Duccio</strong> as the true artist. The confusion speaks to how closely these two masters worked within similar traditions, though Duccio's approach shows distinctly Sienese characteristics: more elegant lines, sweeter expressions, and more decorative treatment of the angels' robes and wings.</p>

<p>The name "Rucellai" comes from the chapel in Santa Maria Novella where the painting hung for centuries, not from the patron who commissioned it. Today it occupies a place of honor at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a>, displayed alongside the monumental Madonnas of Cimabue and Giotto. This grouping offers a rare chance to compare how three different masters approached the same <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>sacred subject</strong></a> during Italian art's transformative decades.</p>`,
    faqs: [
      {
        question: "Where can I see the Rucellai Madonna?",
        answer: `The painting is displayed at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence. It hangs in a room with similar monumental Madonnas by Cimabue and Giotto, making comparison between these three Proto-Renaissance masters possible.`
      },
      {
        question: "Why was the Rucellai Madonna attributed to the wrong artist?",
        answer: `For centuries, scholars believed <strong>Cimabue</strong> painted this work. Only in 1889 did researchers discover documents proving <a href="/apps/masterpieces/artist/duccio-di-buoninsegna"><strong>Duccio di Buoninsegna</strong></a> as the true artist. The two masters worked in similar styles during this transitional period.`
      },
      {
        question: "How large is the Rucellai Madonna?",
        answer: `This altarpiece stands over <strong>fourteen feet tall</strong> (450 x 290 cm), making it one of the largest Italian panel paintings of its era. Its enormous scale was intended to dominate the church interior where worshippers gathered.`
      },
      {
        question: "What makes Duccio's style distinctive?",
        answer: `Duccio's Sienese approach features more <strong>elegant lines and sweeter expressions</strong> than his Florentine contemporaries. The angels' flowing robes and decorative details show his preference for lyrical beauty over the volumetric solidity that Florentine painters pursued.`
      }
    ]
  },
  {
    slug: 'giotto-st-francis-giving-his-mantle-to-a-poor-man',
    description: `<p><a href="/apps/masterpieces/artist/giotto-di-bondone"><strong>Giotto di Bondone</strong></a> painted this fresco around 1297-1299 as part of his twenty-eight scene cycle depicting the life of Saint Francis in the Upper Basilica at Assisi. The image shows a young Francis encountering a poorly dressed knight on a road outside his hometown. Without hesitation, Francis removes his own fine cloak and offers it to the stranger.</p>

<p>The scene captures one of Francis's earliest acts of charity, before his formal conversion and founding of the Franciscan order. Giotto places the figures in a believable <strong>Italian landscape</strong> with buildings that recede convincingly into space. The mountains slope naturally, the architecture casts shadows, and the figures stand with weight and solidity on the ground. These effects seem obvious now but were revolutionary in the 1290s, breaking decisively from the flat, symbolic approach of Byzantine painting.</p>

<p>The fresco remains in its original location at the <a href="/apps/masterpieces/museum/assisi-basilica"><strong>Basilica of Saint Francis of Assisi</strong></a>, where pilgrims have viewed it for over seven hundred years. The Saint Francis cycle established Giotto as the most innovative painter of his generation and laid the groundwork for the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious art</strong></a> of the Renaissance.</p>`,
    faqs: [
      {
        question: "Where can I see this Giotto fresco?",
        answer: `This fresco remains in its original location in the Upper Church of the <a href="/apps/masterpieces/museum/assisi-basilica"><strong>Basilica of Saint Francis of Assisi</strong></a> in Umbria, Italy. It forms part of a twenty-eight scene cycle covering the walls of the church.`
      },
      {
        question: "What story does this fresco depict?",
        answer: `The scene shows a young <strong>Saint Francis</strong> giving his cloak to a poor knight he encounters on a road outside Assisi. This early act of charity occurred before Francis's religious conversion and foreshadowed his life of voluntary poverty.`
      },
      {
        question: "Why is Giotto's Saint Francis cycle important?",
        answer: `<a href="/apps/masterpieces/artist/giotto-di-bondone"><strong>Giotto</strong></a> introduced revolutionary naturalism with believable landscapes, three-dimensional figures, and spatial depth. His innovations broke from flat Byzantine conventions and established foundations for <strong>Renaissance painting</strong>.`
      },
      {
        question: "When was the Saint Francis cycle painted?",
        answer: `Giotto completed these frescoes around <strong>1297-1299</strong>, though some scholars debate the exact dates and extent of his personal involvement. The cycle established his reputation as the most innovative painter of the late medieval period.`
      }
    ]
  },
  {
    slug: 'masaccio-madonna-casini',
    description: `<p><a href="/apps/masterpieces/artist/masaccio"><strong>Masaccio</strong></a> painted this small devotional panel around 1426 for Cardinal Antonio Casini, whose name it now bears. The intimate work shows the Virgin Mary holding the Christ child, who reaches toward his mouth with a cluster of grapes. Despite its modest size, the painting demonstrates Masaccio's revolutionary approach to volume and light that would transform Renaissance art.</p>

<p>The <strong>grapes</strong> carry deliberate symbolic weight. They reference both the Eucharist (wine becoming Christ's blood) and foreshadow the Passion, since grapes must be crushed to produce wine. The child's direct gaze at the viewer creates an unsettling awareness of the sacrifice to come. Masaccio retains the traditional gold background expected for devotional panels while pushing forward with his three-dimensional modeling of faces and hands.</p>

<p>Cardinal Casini served as papal secretary and likely used this panel for private prayer. The work now hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, where it represents the more intimate side of Masaccio's brief career. He died at only twenty-six, but his innovations in rendering solid, weighty figures in believable space influenced every <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>major painter</strong></a> who followed.</p>`,
    faqs: [
      {
        question: "Where can I see the Madonna Casini?",
        answer: `This small devotional panel is displayed at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It represents the more intimate side of Masaccio's work compared to his monumental frescoes in the Brancacci Chapel.`
      },
      {
        question: "What do the grapes symbolize in this painting?",
        answer: `The <strong>grapes</strong> Christ holds carry dual symbolism. They reference the Eucharist, where wine becomes Christ's blood, and foreshadow his Passion since grapes must be crushed to produce wine. The child's gaze acknowledges this sacrificial meaning.`
      },
      {
        question: "Who was Cardinal Casini?",
        answer: `Antonio Casini served as <strong>papal secretary</strong> and commissioned this panel for private devotion. <a href="/apps/masterpieces/artist/masaccio"><strong>Masaccio</strong></a> created the intimate work around 1426, and the painting has carried the cardinal's name ever since.`
      },
      {
        question: "Why is Masaccio important despite dying young?",
        answer: `Masaccio died at only <strong>twenty-six</strong> but revolutionized painting with his treatment of volume, light, and three-dimensional space. His innovations in the Brancacci Chapel frescoes and works like this panel influenced every major Renaissance painter who followed.`
      }
    ]
  },
  {
    slug: 'fra-angelico-predella-of-the-san-domenico-altarpiece',
    description: `<p><a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> painted these predella panels around 1423-1424 as the base section of a larger altarpiece for San Domenico, the Dominican convent in Fiesole outside Florence. The predella originally contained five narrative scenes depicting events from the lives of various saints, designed to be viewed at close range by worshippers kneeling before the altar.</p>

<p>This work belongs to Fra Angelico's early period, before he developed the more refined style seen in his later San Marco frescoes. The panels already display his gift for <strong>clear storytelling</strong> and luminous color. Each scene unfolds in carefully constructed architectural settings that show the influence of the new Renaissance interest in perspective and spatial depth.</p>

<p>The predella panels were separated from the main altarpiece at some point in their history. While the central Madonna and Child remains in Fiesole, several predella scenes traveled to the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. Fra Angelico would go on to become one of the most beloved painters of the early Renaissance, known for <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual devotion</strong></a> expressed through radiant colors and gentle figures.</p>`,
    faqs: [
      {
        question: "Where can I see the San Domenico predella panels?",
        answer: `Several predella panels from this altarpiece are now at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. The main altarpiece remains at San Domenico in Fiesole, but the sections were separated at some point in their history.`
      },
      {
        question: "What is a predella?",
        answer: `A <strong>predella</strong> is the horizontal band of small paintings at the base of an altarpiece. These narrative scenes were positioned at eye level for kneeling worshippers, allowing close contemplation of stories from the lives of Christ or the saints.`
      },
      {
        question: "When did Fra Angelico paint this work?",
        answer: `<a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> created these panels around <strong>1423-1424</strong> during his early career. The work predates his famous frescoes at San Marco in Florence, though it already shows his characteristic clarity and luminous color.`
      },
      {
        question: "What scenes appear in the predella?",
        answer: `The predella originally contained <strong>five narrative scenes</strong> from the lives of various saints. Each panel shows events in carefully constructed architectural settings that reflect the growing Renaissance interest in perspective and spatial depth.`
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
