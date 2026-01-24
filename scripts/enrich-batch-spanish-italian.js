const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'diego-velazquez-madre-maria-jeronima-de-la-fuente',
    description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this powerful portrait in 1620 when he was just twenty-one years old, capturing the Franciscan nun María Jerónima de la Fuente as she prepared to depart Spain for the Philippines. She traveled there to found a convent, a journey from which she knew she would never return. The inscription on the painting records her mission: to suffer and die for Christ among the pagans.</p>

<p>Velázquez portrays the nun with <strong>unflinching realism</strong>. Her weathered face shows determination rather than serenity, her grip on the crucifix suggesting fierce conviction. No softening idealization smooths her features. This directness was unusual for religious portraiture, which typically emphasized spiritual transcendence over physical presence. The young Velázquez already demonstrated the psychological penetration that would later make him court painter to Philip IV.</p>

<p>The dark background and stark lighting concentrate attention entirely on the sitter and her crucifix. This economy of means would remain characteristic of Velázquez's mature work. María Jerónima successfully established her convent in Manila and died there in 1630. Her portrait now hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, an early masterpiece from one of history's greatest <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait painters</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Madre María Jerónima de la Fuente?",
        answer: `This portrait hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, Spain. It represents one of Velázquez's earliest masterpieces, painted when he was just twenty-one years old.`
      },
      {
        question: "Who was María Jerónima de la Fuente?",
        answer: `María Jerónima was a <strong>Franciscan nun</strong> departing Spain for the Philippines to found a convent. She knew she would never return. <a href="/apps/masterpieces/artist/diego-velazquez"><strong>Velázquez</strong></a> captured her on the eve of this one-way journey in 1620.`
      },
      {
        question: "What makes this portrait remarkable?",
        answer: `Velázquez portrays the nun with <strong>unflinching realism</strong>, showing her weathered face and fierce determination without idealizing softness. This psychological directness was unusual for religious portraiture and anticipates his mature work as court painter.`
      },
      {
        question: "How old was Velázquez when he painted this?",
        answer: `Velázquez was only <strong>twenty-one years old</strong> in 1620 when he created this portrait. The remarkable psychological depth and technical skill displayed at such a young age mark it as an early masterpiece.`
      }
    ]
  },
  {
    slug: 'el-greco-st-francis-receiving-the-stigmata',
    description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted numerous versions of Saint Francis receiving the stigmata, returning to this subject throughout his career in Toledo. The scene shows the saint kneeling on Mount Alverna as rays of light descend from a vision of Christ, imprinting the wounds of crucifixion onto Francis's hands, feet, and side. The dramatic night setting intensifies the supernatural encounter.</p>

<p>El Greco's <strong>elongated Mannerist figures</strong> stretch upward as if drawn toward heaven. Francis's brown habit flows in agitated folds while his face registers ecstatic suffering. Brother Leo, his companion, often appears nearby, either witnessing or sleeping through the miracle. The artist used such subjects to explore his distinctive vision: bodies becoming almost immaterial, earthly gravity overcome by spiritual force.</p>

<p>The popularity of Saint Francis in Counter-Reformation Spain created steady demand for such images. El Greco's workshop produced multiple versions, making precise attribution and dating challenging. The subject perfectly suited his artistic temperament, allowing him to depict the moment when flesh receives divine wounds and human experience touches the supernatural. These paintings now hang in museums worldwide, representing El Greco's ability to transform <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious subjects</strong></a> into visions of transcendence.</p>`,
    faqs: [
      {
        question: "Where can I see El Greco's St. Francis Receiving the Stigmata?",
        answer: `<a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted <strong>multiple versions</strong> of this subject, now scattered across museums worldwide including the Prado, the Walters Art Museum, and various European collections.`
      },
      {
        question: "What is the stigmata?",
        answer: `The <strong>stigmata</strong> are wounds corresponding to those Christ received during crucifixion. According to tradition, Saint Francis received these marks on Mount Alverna in 1224, becoming the first person to bear them as a sign of spiritual union with Christ.`
      },
      {
        question: "Why did El Greco paint this subject so often?",
        answer: `Saint Francis was extremely popular in <strong>Counter-Reformation Spain</strong>, creating steady demand for images of the saint. The subject also suited El Greco's mystical vision, allowing him to depict the supernatural transformation of human flesh.`
      },
      {
        question: "What is distinctive about El Greco's style?",
        answer: `El Greco's <strong>elongated Mannerist figures</strong> stretch upward as if drawn toward heaven. His agitated drapery, dramatic lighting, and bodies that seem almost immaterial created a distinctive vision of spiritual transcendence.`
      }
    ]
  },
  {
    slug: 'parmigianino-virgin-and-child-with-an-angel',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> painted this elegant Madonna and Child around 1524, demonstrating the refined Mannerist style that made him one of the most influential Italian artists of his generation. The Virgin holds the Christ child while an angel attends beside them, all three figures rendered with the elongated proportions and graceful poses that define Mannerism at its most sophisticated.</p>

<p>The painting showcases Parmigianino's mastery of <strong>soft sfumato modeling</strong>, blending tones to create faces of almost porcelain delicacy. His Madonna type became famous: impossibly elegant, with a long neck and tapering fingers, beautiful in a way that goes beyond natural observation. The sweet expressions avoid the emotional intensity found in High Renaissance prototypes, aiming instead at aesthetic refinement.</p>

<p>Parmigianino was still in his early twenties when he created this work, shortly before leaving Parma for Rome to further his career. His early death at thirty-seven cut short a brilliant trajectory, but paintings like this established conventions that artists would follow for decades. The work now belongs to the <a href="/apps/masterpieces/museum/stadel"><strong>Städel Museum</strong></a> in Frankfurt, where it represents the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>elegant idealism</strong></a> of sixteenth-century Mannerism.</p>`,
    faqs: [
      {
        question: "Where can I see Virgin and Child with an Angel?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/stadel"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The museum holds an important collection of Old Master paintings including Italian Renaissance works.`
      },
      {
        question: "What makes Parmigianino's Madonna type distinctive?",
        answer: `<a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino's</strong></a> Madonnas feature <strong>impossibly elegant proportions</strong>: long necks, tapering fingers, and graceful poses that go beyond natural observation. This refined idealism became influential throughout sixteenth-century European art.`
      },
      {
        question: "What is sfumato?",
        answer: `<strong>Sfumato</strong> is a technique of softly blending tones to create gradual transitions between areas of light and shadow. Parmigianino mastered this approach, giving his figures an almost porcelain delicacy.`
      },
      {
        question: "When did Parmigianino paint this work?",
        answer: `Parmigianino created this painting around <strong>1524</strong> when he was still in his early twenties, shortly before leaving Parma for Rome. His early death at thirty-seven made each surviving work more precious.`
      }
    ]
  },
  {
    slug: 'francisco-goya-the-sacrifice-to-priapus',
    description: `<p><a href="/apps/masterpieces/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Sacrifice to Priapus around 1771, early in his career when he was designing tapestry cartoons for the Spanish royal factory. The subject depicts worshippers making offerings to Priapus, the ancient Greco-Roman god of fertility and gardens. The scene glows with the Rococo lightness and bright colors that characterized Goya's work before his later turn toward darkness.</p>

<p>Mythological subjects like this were common decorative choices for aristocratic interiors. Goya treats the <strong>pagan fertility theme</strong> with playful elegance rather than moral gravity, appropriate for tapestries meant to brighten palace rooms. The figures arrange themselves in graceful groupings, the landscape opens into atmospheric distance, and nothing hints at the disturbing visions that would later emerge from his brush.</p>

<p>This early work shows Goya absorbing the international Rococo style before developing his more personal manner. The career trajectory from charming mythological decorations to the terrifying Black Paintings represents one of art history's most dramatic transformations. The painting remains in a <strong>private collection</strong>, less accessible than Goya's major works in public museums but valuable for understanding the origins of an artist who would become Spain's most <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>influential painter</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see The Sacrifice to Priapus?",
        answer: `This early Goya painting remains in a <strong>private collection</strong>, making it less accessible than his major works in public museums like the Prado. It documents his early career before his famous dark period.`
      },
      {
        question: "Who was Priapus?",
        answer: `<strong>Priapus</strong> was the ancient Greco-Roman god of fertility, gardens, and male virility. <a href="/apps/masterpieces/artist/francisco-goya"><strong>Goya</strong></a> depicts worshippers making offerings to this pagan deity, a common decorative subject for aristocratic interiors.`
      },
      {
        question: "How does this differ from Goya's later work?",
        answer: `This early painting shows <strong>Rococo lightness</strong> and bright colors, nothing like the dark visions of his later period. The contrast between charming mythological decorations and his later Black Paintings represents one of art history's most dramatic transformations.`
      },
      {
        question: "When did Goya paint this work?",
        answer: `Goya created this painting around <strong>1771</strong> while designing tapestry cartoons for the Spanish royal factory. He was in his mid-twenties and still developing his personal style.`
      }
    ]
  },
  {
    slug: 'titian-madonna-and-child-with-sts-anthony-of-padua-and-ro',
    description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this devotional altarpiece around 1510, showing the Madonna and Child enthroned between Saints Anthony of Padua and Roch. Both saints had special significance for communities threatened by plague: Anthony was invoked against pestilence, while Roch was believed to protect against the disease that had left its mark on his own body. Their presence suggests the painting may have been commissioned during an outbreak.</p>

<p>The work belongs to Titian's early period when Giorgione's influence remained strong. The <strong>warm Venetian color</strong> and atmospheric softness connect it to the poetic naturalism that defined early sixteenth-century Venice. The pyramidal composition groups the figures into a stable, harmonious arrangement, with Mary and the Christ child at the apex and the saints flanking them below.</p>

<p>Titian would develop far beyond this relatively conventional devotional format, eventually becoming the most sought-after painter in Europe. But early works like this demonstrate his mastery of traditional forms before he began pushing boundaries. The painting now hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, part of the extraordinary collection of Venetian painting that Spanish monarchs assembled through Habsburg family connections and <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>royal patronage</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this Titian painting?",
        answer: `This altarpiece hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, Spain. The museum holds an exceptional collection of Venetian Renaissance painting acquired through Spanish royal patronage.`
      },
      {
        question: "Why are Saints Anthony and Roch included?",
        answer: `Both saints were <strong>protectors against plague</strong>. Anthony of Padua was invoked against pestilence, while Roch was believed to guard against the disease. Their presence suggests this altarpiece may have been commissioned during an epidemic.`
      },
      {
        question: "When did Titian paint this work?",
        answer: `<a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> created this painting around <strong>1510</strong>, early in his career when Giorgione's influence remained strong. The warm Venetian color and atmospheric softness characterize his early style.`
      },
      {
        question: "What is the composition structure?",
        answer: `The painting uses a <strong>pyramidal composition</strong>, grouping figures into a stable, harmonious arrangement. Mary and the Christ child occupy the apex while the plague saints flank them below, a conventional but effective devotional format.`
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
