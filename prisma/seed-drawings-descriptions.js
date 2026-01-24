const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Drawing Descriptions ===\n');

  const updates = [
    {
      slug: 'vitruvian-man',
      description: `<p>The <strong>Vitruvian Man</strong> is <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci's</strong></a> study of ideal human proportions, showing a male figure in two superimposed positions within a circle and square. Created around 1490 with pen, ink, and metalpoint, the drawing illustrates principles described by the Roman architect Vitruvius, who believed the human body could define perfect geometric forms.</p>
<p>Leonardo's annotations (in his characteristic mirror writing) explore how the body's measurements relate mathematically. A man's arm span equals his height; his face is one-tenth of his height. The dual pose allows both positions to fit the geometry: arms horizontal fit the square, arms raised fit the circle. This <strong>fusion of art and science</strong> exemplifies Renaissance humanism's belief that man is the measure of all things.</p>
<p>The drawing is rarely displayed due to its fragility. It's held at the <a href="/apps/masterpieces/museum/accademia-venice"><strong>Gallerie dell'Accademia</strong></a> in Venice.</p>`,
      faqs: [
        {
          question: "Where is the Vitruvian Man?",
          answer: "The drawing is at the <a href=\"/apps/masterpieces/museum/accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice. It's rarely displayed to protect the fragile paper."
        },
        {
          question: "What does Vitruvian Man represent?",
          answer: "It illustrates <strong>ideal human proportions</strong> described by the Roman architect Vitruvius. The body fits both a circle and square, demonstrating humanity's geometric perfection."
        },
        {
          question: "How big is the Vitruvian Man?",
          answer: "The drawing measures <strong>34.6 × 25.5 cm</strong> (13.6 × 10 inches). Despite its modest size, it's one of the world's most recognized images."
        },
        {
          question: "Who created the Vitruvian Man?",
          answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a> created it around 1490. The accompanying text is written in his characteristic mirror script."
        }
      ]
    },
    {
      slug: 'study-head-of-leda-leonardo',
      description: `<p>The <strong>Study for the Head of Leda</strong> shows <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci's</strong></a> preparation for a lost painting of Leda and the Swan. Created around 1506, the black chalk drawing captures an idealized female face with downcast eyes and an elaborate braided hairstyle. The gentle sfumato shading demonstrates Leonardo's mastery of tonal gradation.</p>
<p>In Greek mythology, Zeus seduced Leda in the form of a swan, resulting in the birth of Helen of Troy. Leonardo painted at least one version of this subject, now lost but known through copies. This study shows the <strong>intricate coiled hairstyle</strong> that became a signature of Leonardo's female figures, echoing natural forms like water vortices and plant growth.</p>
<p>The drawing is part of the Royal Collection at Windsor Castle.</p>`,
      faqs: [
        {
          question: "Where is this Leonardo drawing?",
          answer: "The drawing is in the <strong>Royal Collection</strong> at Windsor Castle, UK. It's part of a major holding of Leonardo drawings acquired by King Charles I."
        },
        {
          question: "What painting was this study for?",
          answer: "Leonardo painted <strong>Leda and the Swan</strong>, showing the Greek myth where Zeus seduced Leda. The original is lost but known through copies."
        },
        {
          question: "Why is the hairstyle significant?",
          answer: "The <strong>coiled braids</strong> echo natural forms Leonardo studied obsessively, like water currents and plant tendrils. This integration of natural patterns defined his style."
        },
        {
          question: "How big is the drawing?",
          answer: "The study measures <strong>17.7 × 14.7 cm</strong> (7 × 5.8 inches). The intimate scale suited Leonardo's private preparatory work."
        }
      ]
    },
    {
      slug: 'studies-foetus-womb-leonardo',
      description: `<p>The <strong>Studies of the Foetus in the Womb</strong> represent <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci's</strong></a> pioneering anatomical investigations. Created around 1511, these pen and ink drawings show a human fetus at various stages, with the uterus drawn open to reveal its contents. Leonardo's observations combined dissection findings with theoretical speculation.</p>
<p>Leonardo performed numerous dissections throughout his life, documenting <strong>human anatomy</strong> with unprecedented accuracy. However, these particular drawings show some errors, suggesting he relied partly on animal dissection and earlier texts. The notation explains his belief that the fetus draws nourishment through the umbilical cord and does not breathe until birth.</p>
<p>The drawings are in the Royal Collection at Windsor Castle, part of a major holding of Leonardo's anatomical studies.</p>`,
      faqs: [
        {
          question: "Where are these Leonardo drawings?",
          answer: "The drawings are in the <strong>Royal Collection</strong> at Windsor Castle. They're part of the largest collection of Leonardo drawings in the world."
        },
        {
          question: "Are the drawings anatomically accurate?",
          answer: "Partly. Leonardo combined <strong>human dissection</strong> with animal studies and older texts, resulting in some inaccuracies despite revolutionary observation."
        },
        {
          question: "How big are the drawings?",
          answer: "The sheet measures <strong>30.4 × 22 cm</strong> (12 × 8.7 inches). Multiple studies fill the page with Leonardo's characteristic density of observation."
        },
        {
          question: "Why did Leonardo study anatomy?",
          answer: "Leonardo believed understanding the body's structure was essential for <strong>depicting it accurately</strong> in art. His anatomical studies also reflected pure scientific curiosity."
        }
      ]
    },
    {
      slug: 'praying-hands-durer',
      description: `<p><strong>Praying Hands</strong> (Betende Hände) by <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> depicts two hands pressed together in prayer, drawn with extraordinary precision in 1508. The blue-tinted paper provides a middle tone, allowing Dürer to add both dark ink lines and white highlights. The hands belonged to a model, possibly Dürer's brother or an assistant.</p>
<p>Dürer created this study for the <strong>Heller Altarpiece</strong>, a major commission from Frankfurt merchant Jakob Heller. The hands appeared on an apostle figure in the central panel, which was later destroyed by fire (only copies survive). This preparatory study achieved independent fame, becoming one of the most reproduced images in art history.</p>
<p>The drawing is at the <a href="/apps/masterpieces/museum/albertina-museum"><strong>Albertina</strong></a> in Vienna.</p>`,
      faqs: [
        {
          question: "Where is Praying Hands?",
          answer: "The drawing is at the <a href=\"/apps/masterpieces/museum/albertina-museum\"><strong>Albertina</strong></a> in Vienna. It's one of the museum's most popular works."
        },
        {
          question: "What was this a study for?",
          answer: "Dürer drew it for the <strong>Heller Altarpiece</strong>, a major commission. The hands belonged to an apostle in the central panel, which was later destroyed by fire."
        },
        {
          question: "Why is it so famous?",
          answer: "The <strong>photographic precision</strong> and devotional subject made it universally appealing. It became one of the most reproduced images in art history."
        },
        {
          question: "How big is Praying Hands?",
          answer: "The drawing measures <strong>29.1 × 19.7 cm</strong> (11.5 × 7.8 inches). The modest size suited its function as a preparatory study."
        }
      ]
    },
    {
      slug: 'young-hare-durer',
      description: `<p>The <strong>Young Hare</strong> (Feldhase) by <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> captures a wild hare with photographic precision, each hair rendered individually in watercolor and gouache. Created in 1502, the study demonstrates Dürer's unmatched ability to observe and record nature. The catchlight in the hare's eye even reflects the window of Dürer's studio.</p>
<p>Dürer likely kept the hare temporarily in his workshop to study it from life. The <strong>wet nose</strong> and alert posture suggest a living animal rather than a specimen. Such nature studies were not intended for sale but served as reference material for paintings. The Young Hare has become an icon of German Renaissance art and natural history illustration.</p>
<p>The watercolor is at the <a href="/apps/masterpieces/museum/albertina-museum"><strong>Albertina</strong></a> in Vienna.</p>`,
      faqs: [
        {
          question: "Where is the Young Hare?",
          answer: "The watercolor is at the <a href=\"/apps/masterpieces/museum/albertina-museum\"><strong>Albertina</strong></a> in Vienna. It's one of the most famous animal studies in art history."
        },
        {
          question: "Was the hare alive when painted?",
          answer: "Probably yes. The <strong>alert posture and wet nose</strong> suggest Dürer kept a live hare temporarily in his studio for observation."
        },
        {
          question: "How big is the Young Hare?",
          answer: "The watercolor measures <strong>25.1 × 22.6 cm</strong> (9.9 × 8.9 inches). The near life-size scale enhances its remarkable realism."
        },
        {
          question: "What makes it technically impressive?",
          answer: "Dürer rendered <strong>each individual hair</strong> in watercolor and gouache. The eye even reflects his studio window, demonstrating unprecedented observational skill."
        }
      ]
    },
    {
      slug: 'rhinoceros-durer',
      description: `<p><strong>Dürer's Rhinoceros</strong> depicts an Indian rhinoceros that arrived in Lisbon in 1515, the first seen in Europe since Roman times. <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> never saw the animal himself, creating this woodcut from descriptions and a sketch sent from Portugal. The resulting image, while inaccurate in details, became the definitive rhinoceros image in Europe for centuries.</p>
<p>Dürer showed the rhinoceros with <strong>armor-like plates</strong>, a small horn on its shoulders, and scaly legs, none of which Indian rhinos actually have. Despite these errors, the image's power made it the accepted representation of rhinoceroses until live specimens became common in European zoos. The woodcut demonstrates how art could shape scientific understanding.</p>
<p>Impressions exist in many museums, including the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where can I see Dürer's Rhinoceros?",
          answer: "Impressions exist in many museums including the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>. As a print, multiple copies were made from the woodblock."
        },
        {
          question: "Did Dürer see a real rhinoceros?",
          answer: "No. Dürer worked from <strong>descriptions and a sketch</strong> sent from Portugal. He never saw the actual animal, which drowned in a shipwreck."
        },
        {
          question: "Why is it inaccurate?",
          answer: "The <strong>armor plates and extra horn</strong> don't match real Indian rhinos. Dürer's imagination filled gaps in his sources, creating a fantastical creature."
        },
        {
          question: "How big is the print?",
          answer: "The woodcut measures <strong>23.5 × 29.8 cm</strong> (9.3 × 11.7 inches). The substantial size allowed detailed rendering of the animal's textures."
        }
      ]
    },
    {
      slug: 'great-piece-turf-durer',
      description: `<p><strong>The Great Piece of Turf</strong> (Das große Rasenstück) shows a patch of meadow grass at close range, each blade and plantain leaf painted individually. Created in 1503 by <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a>, this watercolor transforms humble vegetation into a subject worthy of serious artistic attention. The low viewpoint places the viewer at ground level, eye-to-eye with dandelions and yarrow.</p>
<p>Dürer's nature studies represented a <strong>revolutionary approach</strong> to observing the natural world. Rather than using nature merely as background, he examined it with the same attention given to human subjects. The Great Piece of Turf anticipates modern ecological thinking in its insistence that ordinary plants deserve careful study.</p>
<p>The watercolor is at the <a href="/apps/masterpieces/museum/albertina-museum"><strong>Albertina</strong></a> in Vienna.</p>`,
      faqs: [
        {
          question: "Where is The Great Piece of Turf?",
          answer: "The watercolor is at the <a href=\"/apps/masterpieces/museum/albertina-museum\"><strong>Albertina</strong></a> in Vienna, alongside Dürer's other famous nature studies."
        },
        {
          question: "What plants are shown?",
          answer: "The patch includes <strong>dandelions, yarrow, meadow grass, and plantain</strong>. Dürer rendered each species accurately enough for botanical identification."
        },
        {
          question: "Why is a patch of grass significant?",
          answer: "Dürer's serious treatment of <strong>ordinary vegetation</strong> was revolutionary. He insisted that humble subjects deserved the same artistic attention as noble ones."
        },
        {
          question: "How big is the painting?",
          answer: "The watercolor measures <strong>41 × 31.5 cm</strong> (16.1 × 12.4 inches). The substantial size allowed life-size depiction of the plants."
        }
      ]
    },
    {
      slug: 'studies-libyan-sibyl',
      description: `<p>The <strong>Studies for the Libyan Sibyl</strong> show <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> preparation for one of the Sistine Chapel ceiling's most dynamic figures. Created around 1511, the red chalk drawing depicts a muscular male model twisting to look back over his shoulder, capturing the complex pose Michelangelo would transform into a female sibyl. The main study dominates the sheet, with smaller hand and toe studies surrounding it.</p>
<p>Michelangelo used <strong>male models</strong> for all his figures, even female ones, believing the male body better demonstrated muscular structure. The Libyan Sibyl appears on the ceiling turning to close her book of prophecy, her powerful body matching the twisting pose studied here. The drawing demonstrates how Renaissance artists prepared their compositions through careful anatomical study.</p>
<p>The drawing is at the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Michelangelo drawing?",
          answer: "The drawing is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. It's one of the finest Michelangelo drawings in America."
        },
        {
          question: "Why is a female figure studied from a male model?",
          answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> preferred <strong>male models</strong> for all figures, believing the male body better demonstrated muscular structure and heroic form."
        },
        {
          question: "Where does the Libyan Sibyl appear?",
          answer: "She appears on the <strong>Sistine Chapel ceiling</strong>, turning to close her book of prophecy. The dynamic twisting pose matches this preparatory study."
        },
        {
          question: "How big is the drawing?",
          answer: "The sheet measures <strong>28.9 × 21.4 cm</strong> (11.4 × 8.4 inches). Multiple studies fill the page, a common practice for Renaissance artists."
        }
      ]
    },
    {
      slug: 'fall-of-phaeton-michelangelo',
      description: `<p><strong>The Fall of Phaeton</strong> depicts the moment when Zeus strikes down Phaeton, who had lost control of his father Apollo's sun chariot. Created in 1533 by <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>, this black chalk drawing was a gift for the artist's beloved friend Tommaso de' Cavalieri. The composition shows cascading figures, horses, and the falling chariot in a complex arrangement.</p>
<p>Michelangelo made several versions of this subject for Cavalieri, a young Roman nobleman with whom the aging artist had an intense emotional relationship. The gift drawings were <strong>highly finished presentation pieces</strong>, not working studies, demonstrating Michelangelo's affection through artistic virtuosity. The mythological subject of forbidden desire and divine punishment may have carried personal meaning.</p>
<p>This version is at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is The Fall of Phaeton?",
          answer: "This version is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>. Michelangelo made several versions for his friend Tommaso de' Cavalieri."
        },
        {
          question: "Who was Tommaso de' Cavalieri?",
          answer: "Cavalieri was a <strong>young Roman nobleman</strong> with whom Michelangelo had an intense friendship. The artist made elaborate gift drawings to express his affection."
        },
        {
          question: "What is the Phaeton myth?",
          answer: "Phaeton drove his father Apollo's <strong>sun chariot</strong> but lost control. Zeus struck him down to prevent the earth from burning, a tale of youthful recklessness and divine punishment."
        },
        {
          question: "How big is the drawing?",
          answer: "The sheet measures <strong>41.3 × 23.4 cm</strong> (16.3 × 9.2 inches). The highly finished presentation format suited its purpose as a gift."
        }
      ]
    },
    {
      slug: 'head-of-muse-raphael',
      description: `<p>The <strong>Head of a Muse</strong> by <a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> shows the upturned face of a young woman, her serene expression and soft features exemplifying Renaissance ideals of beauty. Created around 1510 in black chalk, the study was preparation for Raphael's fresco Parnassus in the Vatican's Stanza della Segnatura. The muse's ethereal gaze directed heavenward captures the divine inspiration of poetry and music.</p>
<p>Raphael's <strong>smooth, idealized style</strong> contrasts with Michelangelo's muscular intensity. This drawing demonstrates his mastery of sfumato, the subtle blending of tones that Leonardo pioneered. The muse appears in the finished fresco among the poets gathered around Apollo on Mount Parnassus, though the painting includes less delicate shading than this intimate study.</p>
<p>The drawing is at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Raphael's Head of a Muse?",
          answer: "The drawing is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It's one of the finest Raphael drawings in their collection."
        },
        {
          question: "What fresco was this for?",
          answer: "Raphael used this study for his <strong>Parnassus fresco</strong> in the Vatican's Stanza della Segnatura. The muse appears among poets surrounding Apollo."
        },
        {
          question: "How big is the drawing?",
          answer: "The sheet measures <strong>30.5 × 22.2 cm</strong> (12 × 8.7 inches). The intimate scale suited preparatory work for larger paintings."
        },
        {
          question: "What technique did Raphael use?",
          answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> used <strong>black chalk</strong> with subtle sfumato blending. This soft technique captured the muse's ethereal, divinely inspired expression."
        }
      ]
    },
    {
      slug: 'three-crosses-rembrandt',
      description: `<p><strong>The Three Crosses</strong> is <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> most ambitious printmaking achievement, depicting the Crucifixion at the moment of Christ's death. Created in 1653, the drypoint and burin print shows divine light streaming down onto Christ while surrounding figures react with awe and despair. Rembrandt reworked the plate multiple times, creating dramatically different versions.</p>
<p>The first states show a balanced composition with clear figures. In the fourth state, Rembrandt <strong>transformed the plate</strong> by adding dense darkness, obscuring many figures and creating an apocalyptic atmosphere. This radical revision demonstrates his willingness to destroy successful work in pursuit of greater emotional impact. The print's multiple states document his evolving vision over several years.</p>
<p>Impressions exist in many museums, including the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Where can I see The Three Crosses?",
          answer: "Impressions exist in many museums including the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a>. Different states show Rembrandt's evolving vision."
        },
        {
          question: "What are the different states?",
          answer: "Rembrandt reworked the plate <strong>multiple times</strong>. Early states show clear figures; the fourth state adds dramatic darkness, completely transforming the composition."
        },
        {
          question: "What technique did Rembrandt use?",
          answer: "He used <strong>drypoint and burin</strong>, techniques that create rich, velvety blacks. The dramatic light effects pushed printmaking to new expressive heights."
        },
        {
          question: "How big is the print?",
          answer: "The plate measures <strong>38.5 × 45 cm</strong> (15.2 × 17.7 inches). This large format was ambitious for the demanding drypoint technique."
        }
      ]
    }
  ];

  let updated = 0;
  for (const item of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: item.slug },
        data: {
          description: item.description,
          faqs: item.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${item.slug}`);
      updated++;
    } catch (error) {
      console.log(`Error updating ${item.slug}: ${error.message}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}/${updates.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
