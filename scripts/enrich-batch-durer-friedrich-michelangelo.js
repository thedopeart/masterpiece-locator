const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'albrecht-durer-selfportrait',
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted this self-portrait in 1493 at age twenty-two, making it his earliest surviving self-portrait in oil. He created the work in Strasbourg during his journeyman travels, intending it as a gift for his fiancée Agnes Frey back in Nuremberg. The young artist presents himself as a fashionably dressed gentleman, holding a sprig of thistle in his right hand.</p>

<p>The <strong>thistle's meaning</strong> has sparked scholarly debate. Some read it as a symbol of fidelity, appropriate for a betrothal portrait. Others connect it to Christ's Passion, since thistles evoke the crown of thorns. The German word for thistle (Männertreu) literally means "man's fidelity," supporting the romantic interpretation. Whatever its symbolism, the plant draws attention to Dürer's elegant hands and his status as a refined craftsman rather than mere laborer.</p>

<p>Dürer would become famous for self-portraits throughout his career, but this early work already shows his confidence and ambition. He inscribes the painting: "My affairs will go as ordained on high." The mix of piety and self-assurance defined his personality. The portrait now hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, representing the beginning of a tradition of artist <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-representation</strong></a> that Dürer would elevate to new heights.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of the Artist Holding a Thistle?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. It represents Dürer's earliest surviving self-portrait in oil and documents his appearance at age twenty-two.`
      },
      {
        question: "What does the thistle symbolize?",
        answer: `Scholars debate the <strong>thistle's meaning</strong>. Some interpret it as a symbol of fidelity (the German word means "man's fidelity"), appropriate since <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Dürer</strong></a> painted this for his fiancée. Others connect it to Christ's Passion and the crown of thorns.`
      },
      {
        question: "Why did Dürer paint this self-portrait?",
        answer: `Dürer created this work in Strasbourg during his journeyman travels as a <strong>gift for his fiancée</strong> Agnes Frey back in Nuremberg. The portrait presented him as a fashionable, refined gentleman worthy of her family's approval.`
      },
      {
        question: "How old was Dürer in this self-portrait?",
        answer: `Dürer was <strong>twenty-two years old</strong> when he painted this in 1493. He inscribed it with the words "My affairs will go as ordained on high," reflecting both his piety and youthful confidence.`
      }
    ]
  },
  {
    slug: 'albrecht-durer-selfportrait-with-a-wrap',
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> created this silverpoint self-portrait in 1484 when he was just thirteen years old. The drawing shows the young artist in three-quarter view, wearing a cap and wrapped garment, his right hand pointing toward himself in a gesture that may indicate the difficulty of drawing with a mirror. The remarkable skill displayed at such a young age marks it as one of art history's most precocious works.</p>

<p>Silverpoint is an unforgiving medium. The metal stylus leaves permanent marks on specially prepared paper, allowing no erasure or correction. That a thirteen-year-old could produce such confident, accurate linework speaks to <strong>extraordinary natural talent</strong> combined with rigorous training in his father's goldsmith workshop. Dürer later added an inscription identifying the drawing as his own work from childhood, recognizing its significance to his artistic development.</p>

<p>This is the <strong>earliest known self-portrait</strong> by any artist who would go on to major historical importance. While medieval artists occasionally included themselves in larger compositions, the independent self-portrait as a genre barely existed before Dürer. The drawing now belongs to the <a href="/apps/masterpieces/museum/albertina"><strong>Albertina</strong></a> in Vienna, where it represents the origins of both Dürer's career and the modern tradition of artistic <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-examination</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Dürer's Self-Portrait at Age 13?",
        answer: `This silverpoint drawing belongs to the <a href="/apps/masterpieces/museum/albertina"><strong>Albertina</strong></a> in Vienna, Austria. The museum holds one of the world's greatest collections of drawings, including several works by Dürer.`
      },
      {
        question: "How old was Dürer when he made this drawing?",
        answer: `<a href="/apps/masterpieces/artist/albrecht-durer"><strong>Dürer</strong></a> was just <strong>thirteen years old</strong> in 1484 when he created this self-portrait. The remarkable skill displayed at such a young age marks it as one of art history's most precocious works.`
      },
      {
        question: "What is silverpoint?",
        answer: `<strong>Silverpoint</strong> uses a silver stylus to draw on specially prepared paper. The medium allows no erasure or correction, making every mark permanent. Dürer's confident linework at age thirteen demonstrates extraordinary skill in this demanding technique.`
      },
      {
        question: "Why is this drawing historically significant?",
        answer: `This is the <strong>earliest known self-portrait</strong> by any artist who would achieve major historical importance. It documents the beginning of Dürer's lifelong practice of self-representation and the modern tradition of artistic self-examination.`
      }
    ]
  },
  {
    slug: 'caspar-david-friedrich-the-summer',
    description: `<p><a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted The Summer in 1807 as part of a series depicting the times of day and seasons. The composition shows two lovers embracing within a leafy bower, surrounded by the full abundance of summer vegetation. Flowers bloom, vines climb, and the natural world reaches its peak of vitality, framing the human couple in a celebration of life and love.</p>

<p>Friedrich typically avoided depicting <strong>human intimacy</strong> so directly. His figures usually appear alone, contemplating nature from behind, their backs to the viewer. Here the embrace feels almost hidden within the bower, sheltered by nature rather than exposed to it. The summer setting represents the prime of life, paralleling the couple's romantic connection with the season's warmth and fertility.</p>

<p>The series pairs this work with other seasons, creating a meditation on the cycle of life from youth to old age, morning to evening. Friedrich's Romantic vision saw nature as a mirror for human experience, each season carrying symbolic weight. The painting now hangs at the <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich, where it represents the more intimate, lyrical side of an artist better known for <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>sublime landscapes</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Friedrich's The Summer?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich, Germany. The museum holds several important works by German Romantic painters including Friedrich.`
      },
      {
        question: "What series does this painting belong to?",
        answer: `The Summer belongs to Friedrich's <strong>Times of Day series</strong>, which pairs seasons with times of day to create a meditation on life's cycle. Summer and midday represent the prime of life, while winter and evening suggest age and mortality.`
      },
      {
        question: "Why is the subject unusual for Friedrich?",
        answer: `<a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Friedrich</strong></a> rarely depicted <strong>human intimacy</strong> so directly. His figures typically appear alone, contemplating nature with their backs to viewers. This embracing couple represents an unusually warm, personal subject for his work.`
      },
      {
        question: "What does summer symbolize in Romantic art?",
        answer: `Summer represents the <strong>prime of life</strong>, parallel to midday in the daily cycle. The season's warmth, fertility, and abundance of vegetation symbolize youth, love, and vitality before autumn's decline and winter's dormancy.`
      }
    ]
  },
  {
    slug: 'caspar-david-friedrich-rock-arch-in-the-uttewalder-grund',
    description: `<p><a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted this view of a natural rock arch around 1801, during his early explorations of the Elbe Sandstone Mountains near Dresden. The dramatic stone formation frames a glimpse of forest beyond, its massive weight seemingly suspended overhead. The careful observation of geological detail shows Friedrich developing the precise naturalism that would underpin his more symbolic later works.</p>

<p>The Uttewalder Grund is a narrow gorge in what is now Saxon Switzerland, an area Friedrich returned to throughout his career. These <strong>sandstone formations</strong>, carved by erosion into dramatic shapes, offered ready-made Romantic subjects: ancient, mysterious, untouched by human hands. Friedrich documented them with scientific accuracy while finding in their forms suggestions of something beyond mere geology.</p>

<p>This early painting already hints at Friedrich's emerging Romantic sensibility. Nature appears both beautiful and somewhat threatening, its scale dwarfing any potential human presence. The arch frames the view like a cathedral window, inviting spiritual interpretation of the landscape. The work now belongs to the <strong>Folkwang Museum</strong> in Essen, where it represents the origins of a vision that would make Friedrich Germany's greatest <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>Romantic landscape painter</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Rock Arch in the Uttewalder Grund?",
        answer: `This painting belongs to the <strong>Folkwang Museum</strong> in Essen, Germany. The museum holds an important collection of nineteenth-century German painting including several works by Friedrich.`
      },
      {
        question: "Where is the Uttewalder Grund?",
        answer: `The Uttewalder Grund is a narrow gorge in the <strong>Elbe Sandstone Mountains</strong> near Dresden, in an area now called Saxon Switzerland. <a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Friedrich</strong></a> explored and painted these dramatic rock formations throughout his career.`
      },
      {
        question: "When did Friedrich paint this work?",
        answer: `Friedrich created this painting around <strong>1801</strong>, early in his career. The careful geological observation shows him developing the precise naturalism that would support his more symbolic mature works.`
      },
      {
        question: "What makes this subject Romantic?",
        answer: `The <strong>ancient rock formation</strong>, carved by nature into dramatic shapes, embodies Romantic themes: the sublime power of nature, geological time dwarfing human history, and landscape that invites spiritual interpretation beyond mere scenery.`
      }
    ]
  },
  {
    slug: 'michelangelo-st-anne-with-virgin-and-child-christ',
    description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> created this pen and ink study around 1502, exploring a composition of Saint Anne with the Virgin Mary and the Christ Child. The pyramidal arrangement shows Anne supporting Mary on her lap, who in turn holds the infant Jesus. Though Michelangelo never completed a painting from this design, the drawing reveals his powerful approach to the traditional subject.</p>

<p>The composition responds to Leonardo da Vinci's famous treatment of the same subject, which had caused a sensation in Florence. Both artists grappled with the challenge of <strong>uniting three figures</strong> into a coherent group while expressing the theological relationship between grandmother, mother, and divine child. Michelangelo's version emphasizes muscular forms and dynamic tension, contrasting with Leonardo's softer, more mysterious approach.</p>

<p>The drawing demonstrates Michelangelo's characteristic concern with the human body as a vehicle for meaning. Even in this preliminary sketch, the figures possess monumental weight and sculptural presence. He would apply similar principles to his Sistine Chapel figures just a few years later. The sheet now belongs to the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>Ashmolean Museum</strong></a> in Oxford, where it offers insight into the competitive artistic environment of Renaissance Florence.</p>`,
    faqs: [
      {
        question: "Where can I see this Michelangelo drawing?",
        answer: `This study belongs to the <strong>Ashmolean Museum</strong> in Oxford, England. The museum's collection includes important drawings from the Italian Renaissance, documenting artists' working processes.`
      },
      {
        question: "Did Michelangelo complete a painting from this drawing?",
        answer: `No, <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> never completed a <strong>painting of this subject</strong>. The drawing remains a preparatory study that reveals his thinking about composition and form, but the project was abandoned.`
      },
      {
        question: "How does this relate to Leonardo da Vinci?",
        answer: `The drawing responds to <strong>Leonardo's famous treatment</strong> of the same subject, which had caused a sensation in Florence. Both artists explored how to unite three generations into a coherent pyramidal composition.`
      },
      {
        question: "What medium did Michelangelo use?",
        answer: `Michelangelo created this study in <strong>pen and ink on paper</strong> around 1502. The rapid, confident strokes show his characteristic approach to preliminary drawings, emphasizing muscular forms and sculptural presence.`
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
