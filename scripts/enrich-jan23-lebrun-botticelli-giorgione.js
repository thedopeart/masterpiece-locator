const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: "elisabeth-vigee-le-brun-marie-antoinette-in-a-muslin-dress",
    description: `<p><a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Élisabeth Vigée Le Brun</strong></a> painted this portrait of Marie Antoinette in 1783, depicting the queen in a simple muslin dress rather than the formal court attire expected of French royalty. The portrait, known as "La Reine en Gaulle" or "Marie Antoinette en chemise," caused immediate scandal when displayed at the Salon du Louvre. The queen's critics saw only a woman painted in her underwear.</p>

<p>The dress had multiple names, each carrying its own controversy. "En chemise" referred to undergarments. "En gaulle" pointed to the imported muslin fabric, seen as unpatriotic when French silk workers were struggling. "À la Creole" suggested colonial exoticism inappropriate for a European queen. Marie Antoinette's sister-in-law had been painted in similar attire without incident, but the queen's enemies seized on this image as evidence of her frivolity and disregard for propriety.</p>

<p>The backlash was severe enough that Vigée Le Brun painted a replacement <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>, "Marie Antoinette with a Rose," showing the queen in proper formal dress. Some historians now view this scandal as an early turning point in public opinion against Marie Antoinette, predating even the infamous Diamond Necklace Affair. The original painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, a document of the moment when a simple <strong>muslin dress</strong> became political dynamite.</p>`,
    faqs: [
      {
        question: "Where can I see Marie Antoinette in a Muslin Dress?",
        answer: "This portrait hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. <a href=\"/apps/masterpieces/artist/elisabeth-vigee-le-brun\"><strong>Vigée Le Brun</strong></a> also painted a replacement portrait, \"Marie Antoinette with a Rose,\" after this one caused scandal at the 1783 Salon."
      },
      {
        question: "Why was this portrait so controversial?",
        answer: "The queen's simple <strong>muslin chemise dress</strong> shocked viewers who expected formal court attire. Critics called it underwear. The imported muslin was seen as unpatriotic, and the informal style seemed improper for royalty. <a href=\"/apps/masterpieces/artist/elisabeth-vigee-le-brun\"><strong>Vigée Le Brun</strong></a> had to replace it at the Salon."
      },
      {
        question: "What are the different names for this portrait?",
        answer: "The painting is called \"La Reine en Gaulle,\" \"Marie Antoinette en chemise,\" and \"à la Creole.\" Each name reflects different criticisms: \"gaulle\" for the foreign fabric, \"<strong>chemise</strong>\" suggesting underwear, and \"Creole\" implying inappropriate colonial exoticism for a French queen."
      },
      {
        question: "Did this portrait damage Marie Antoinette's reputation?",
        answer: "Some historians believe this scandal marked an early turning point against <strong>Marie Antoinette</strong>, predating the Diamond Necklace Affair. The image of a queen in casual dress gave her critics ammunition, contributing to the narrative of royal frivolity that would intensify through the Revolution."
      }
    ]
  },
  {
    slug: "sandro-botticelli-the-discovery-of-the-body-of-holofernes",
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted The Discovery of the Body of Holofernes around 1470-1472, creating one half of a small diptych illustrating the biblical story of Judith. This panel shows the aftermath: Assyrian soldiers have entered their general's tent to find him decapitated, his headless body sprawled across the bed. The companion piece, The Return of Judith to Bethulia, depicts the heroine and her maid fleeing with their prize.</p>

<p>Botticelli made a striking choice. Rather than show the violent act itself, he painted the moments before and after. Judith walks triumphantly away. The soldiers discover their leader's corpse. The decapitation happens off-stage, left to the viewer's imagination. The body of <strong>Holofernes</strong> dominates this panel's foreground, its youthful proportions and relaxed posture suggesting deep sleep rather than violent death. Botticelli studied anatomy from live models and drew on Greco-Roman sculpture for this early nude.</p>

<p>The two panels once shared a carved walnut frame, forming a proper diptych. They entered the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> collection in 1632, though the frame has since been lost. In Renaissance Florence, Judith symbolized liberty and victory over tyranny, making these small panels carry political weight beyond their intimate scale.</p>`,
    faqs: [
      {
        question: "Where can I see The Discovery of the Body of Holofernes?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, along with its companion panel, The Return of Judith to Bethulia. Both entered the Medici collection in 1632 after being bequeathed by Antoine de Medici."
      },
      {
        question: "What is the companion piece to this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> painted The Return of Judith to Bethulia as a <strong>companion panel</strong>. It shows Judith and her maid fleeing with Holofernes' severed head. The two works originally shared a walnut frame as a diptych."
      },
      {
        question: "Who was Holofernes?",
        answer: "<strong>Holofernes</strong> was an Assyrian general besieging the Jewish city of Bethulia in the biblical Book of Judith. The widow Judith entered his camp, seduced him, and beheaded him while he slept drunk. <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> depicts the soldiers discovering his corpse."
      },
      {
        question: "Why was Judith important in Renaissance Florence?",
        answer: "In <strong>Renaissance Florence</strong>, Judith symbolized liberty and victory over tyranny. The story of a woman defeating a powerful oppressor resonated with Florentine civic pride. <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli's</strong></a> diptych carried political meaning beyond its biblical subject."
      }
    ]
  },
  {
    slug: "sandro-botticelli-madonna-and-child",
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this Madonna and Child around 1470, during his early years as an independent artist in Florence. The work shows the clear influence of his teacher, Filippo Lippi, whose tender Madonna compositions Botticelli studied and imitated throughout the 1460s. Lippi's workshop training shaped Botticelli's approach to the subject: intimate scale, soft modeling, and emotional warmth between mother and child.</p>

<p>The gold background connects this panel to medieval tradition, but the figures themselves point toward the Renaissance naturalism Botticelli would develop further. The Virgin's face shows the delicate features and slightly melancholic expression that would become Botticelli trademarks. The Christ child reaches toward his mother with convincing infant gesture. These devotional panels were meant for private prayer, and Botticelli produced many variations on the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Madonna</strong></a> theme during these formative years.</p>

<p>By 1472, Botticelli's name appeared in the Books of the Company of Saint Luke, the painters' guild in Florence. That same year, Filippino Lippi, son of his former teacher, was listed as a student in Botticelli's own workshop. The pupil had become a master. This early <strong>devotional panel</strong> now hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a>, evidence of where one of the Renaissance's most distinctive styles began.</p>`,
    faqs: [
      {
        question: "Where can I see Botticelli's early Madonna and Child?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, which holds multiple Madonna paintings from <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli's</strong></a> early career, including the Madonna della Loggia and Madonna of the Rose Garden."
      },
      {
        question: "How did Filippo Lippi influence Botticelli?",
        answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> trained in <strong>Filippo Lippi's</strong> workshop between 1460 and 1467. He learned to paint tender Madonna compositions with soft modeling and intimate emotional warmth. Many of Botticelli's early Madonnas directly imitate Lippi's famous examples."
      },
      {
        question: "What was this painting used for?",
        answer: "Small <strong>devotional panels</strong> like this were made for private prayer in homes and chapels. <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> produced many variations on the Madonna and Child theme during the 1460s and 1470s to meet demand from Florentine patrons seeking objects for personal worship."
      },
      {
        question: "Why does this painting have a gold background?",
        answer: "The <strong>gold background</strong> connects this panel to medieval tradition, where gold symbolized divine light and heavenly presence. By 1470, <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> was transitioning toward more naturalistic Renaissance settings, making this a pivotal moment in his stylistic development."
      }
    ]
  },
  {
    slug: "giorgione-the-three-ages-of-man",
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted The Three Ages of Man around 1500-1501, creating one of his characteristic enigmatic compositions. Three figures emerge from a dark background: an old man in shadow, a young man holding sheet music, and a boy at the center. The scene appears to show a music lesson, but its deeper meaning has puzzled scholars for centuries. Is this simply education passing between generations? An allegory of life's stages? Or something else entirely?</p>

<p>The title dates from the 17th century. Earlier viewers called it a singing lesson. Some scholars suggest it depicts Jesus meeting the rich young man from Scripture. The ambiguity is probably intentional. <strong>Giorgione</strong> pioneered a kind of Venetian painting where mood and atmosphere mattered more than clear narrative. The figures emerge gradually from darkness through sfumato, that soft-focus technique borrowed from Leonardo da Vinci, with hair rendered in subtle brushstrokes and features dissolving at the edges.</p>

<p>The painting passed through the collection of Gabriele Vendramin, then to painter Nicolas Régnier, before the Medici family acquired it sometime between 1666 and 1675. It now hangs at the <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence. For Giorgione, <strong>music</strong> represented spiritual harmony, the unifying thread connecting youth, maturity, and age.</p>`,
    faqs: [
      {
        question: "Where can I see The Three Ages of Man?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, in the Galleria Palatina. The Medici family acquired it between 1666 and 1675 from the collection of painter Nicolas Régnier."
      },
      {
        question: "What is the subject of this painting?",
        answer: "The exact subject remains debated. The title \"<strong>Three Ages of Man</strong>\" dates from the 17th century, but earlier viewers saw a music lesson. Some scholars interpret it as Jesus meeting the rich young man. <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> likely intended the ambiguity."
      },
      {
        question: "What is sfumato technique?",
        answer: "<strong>Sfumato</strong> creates soft, hazy transitions between tones rather than sharp outlines. <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> borrowed this technique from Leonardo da Vinci, using thin glazes to make figures emerge gradually from dark backgrounds with dreamlike atmospheric effect."
      },
      {
        question: "Is the attribution to Giorgione certain?",
        answer: "The painting was initially attributed to Jacopo Palma il Vecchio. In 1880, art historian Giovanni Morelli re-attributed it to <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>, and most scholars now accept this, though some debate remains given the scarcity of documented Giorgione works."
      }
    ]
  },
  {
    slug: "giorgione-the-adoration-of-the-kings",
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted The Adoration of the Kings around 1506-1507, creating an unusually intimate version of a subject often treated with monumental grandeur. The small panel shows the Virgin, Child, and Joseph seated on stable steps while the three Magi present their gifts. Caspar has already given his myrrh to Joseph. Melchior, the eldest king, offers a golden bowl. Young Balthasar kneels further back, holding a glass orb of frankincense.</p>

<p>The composition moves horizontally, a gentle procession rather than the crowded spectacles other artists favored. Attendants in exotic turbans recall the Magi's Eastern origins, while the landscape opens behind them in soft Venetian haze. The three kings themselves embody the ages of man: elder, middle-aged, and youth, adding allegorical depth to the <strong>Epiphany</strong> scene. A groom stands with his back to us, a detail later painters borrowed, suggesting Giorgione's influence extended beyond this small panel.</p>

<p>The painting belongs to the "Allendale Group," a set of works that form the foundation of Giorgione scholarship. It was long attributed to Giovanni Bellini before scholars recognized Giorgione's hand. The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London acquired it from the Miles collection at Leigh Court, where it had hung since the early 19th century.</p>`,
    faqs: [
      {
        question: "Where can I see Giorgione's Adoration of the Kings?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It was previously in the Miles collection at Leigh Court near Bristol, where it was attributed to Giovanni Bellini until scholars recognized <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione's</strong></a> authorship."
      },
      {
        question: "Who are the three kings in the painting?",
        answer: "The <strong>three Magi</strong> are Caspar (who has given his myrrh), Melchior (the oldest, offering gold), and Balthasar (the youngest, holding frankincense). <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> depicts them as three ages of man: elder, middle-aged, and youth."
      },
      {
        question: "What is the Allendale Group?",
        answer: "The \"<strong>Allendale Group</strong>\" is a set of paintings that form the cornerstone of <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> scholarship, named after the Allendale Nativity in Washington. This Adoration is part of the group, helping scholars understand Giorgione's authentic style."
      },
      {
        question: "How does this differ from other Adoration paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione's</strong></a> version is unusually <strong>intimate and horizontal</strong> rather than monumental. The small scale and gentle procession contrast with crowded altarpiece treatments by other artists. Landscape and atmosphere matter as much as the figures themselves."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment...\n');

  let updated = 0;
  let errors = 0;

  for (const artwork of artworksToUpdate) {
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
      updated++;
    } catch (error) {
      console.error(`✗ Error updating ${artwork.slug}:`, error.message);
      errors++;
    }
  }

  console.log(`\nComplete! Updated: ${updated}, Errors: ${errors}`);
  await prisma.$disconnect();
}

main();
