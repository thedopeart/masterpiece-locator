const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updates = [
    {
      slug: 'duke-duchess-urbino',
      faqs: [
        {
          question: "Where can I see the Duke and Duchess of Urbino portraits?",
          answer: "These twin portraits are displayed at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. They remain one of the most celebrated Renaissance diptychs in the collection."
        },
        {
          question: "Who painted the Duke and Duchess of Urbino?",
          answer: "<a href=\"/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> created these portraits around 1472. He was a master of mathematical perspective and geometric composition."
        },
        {
          question: "Who are depicted in these portraits?",
          answer: "The paintings show <strong>Federico da Montefeltro</strong>, Duke of Urbino, and his wife Battista Sforza. Both are shown in strict profile against panoramic landscape backgrounds."
        },
        {
          question: "Why is Federico shown from his left side only?",
          answer: "The Duke lost his right eye and the bridge of his nose in a jousting accident. <strong>Profile portraits</strong> allowed artists to show only his undamaged left side."
        }
      ]
    },
    {
      slug: 'expulsion-masaccio',
      faqs: [
        {
          question: "Where is Masaccio's Expulsion fresco located?",
          answer: "This fresco is in the <a href=\"/museum/brancacci-chapel\"><strong>Brancacci Chapel</strong></a> in Florence's Santa Maria del Carmine church. The chapel contains the most important early Renaissance frescoes."
        },
        {
          question: "Who painted The Expulsion from the Garden of Eden?",
          answer: "<a href=\"/artist/masaccio\"><strong>Masaccio</strong></a> painted this fresco around 1427. He died at just 26 but revolutionized painting with his naturalistic approach to the human figure."
        },
        {
          question: "What makes this Expulsion scene so famous?",
          answer: "Masaccio depicted raw <strong>human emotion</strong> unlike any artist before him. Adam covers his face in shame while Eve's anguished cry is among the most powerful expressions in art history."
        },
        {
          question: "Was this fresco altered over time?",
          answer: "Fig leaves were painted over Adam and Eve's nudity in 1680. A 1980s restoration removed these additions, revealing <strong>Masaccio's original figures</strong> as he intended them."
        }
      ]
    },
    {
      slug: 'feast-saint-nicholas',
      faqs: [
        {
          question: "Where is The Feast of Saint Nicholas displayed?",
          answer: "This painting hangs at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's one of Jan Steen's most beloved depictions of Dutch family life."
        },
        {
          question: "Who painted The Feast of Saint Nicholas?",
          answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a> created this work around 1665-1668. He specialized in lively <strong>genre scenes</strong> showing Dutch households in comic disarray."
        },
        {
          question: "What holiday does the painting depict?",
          answer: "The painting shows <strong>Sinterklaas</strong> (Saint Nicholas Day), celebrated on December 5th in the Netherlands. Children receive gifts in their shoes if they've been good."
        },
        {
          question: "Why is one child crying in the painting?",
          answer: "A naughty boy received only a birch rod in his shoe instead of treats. His siblings laugh while grandmother beckons him toward a hidden gift. Steen loved portraying <strong>family chaos</strong>."
        }
      ]
    },
    {
      slug: 'the-fifer',
      faqs: [
        {
          question: "Where can I see The Fifer?",
          answer: "This painting is on display at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It's among Manet's most recognizable and influential works."
        },
        {
          question: "Who painted The Fifer?",
          answer: "<a href=\"/artist/edouard-manet\"><strong>Édouard Manet</strong></a> painted this in 1866. Though often grouped with the <a href=\"/movement/impressionism\"><strong>Impressionists</strong></a>, he considered himself a Realist."
        },
        {
          question: "What is shown in The Fifer?",
          answer: "A young military musician stands against a flat background, playing the fife. The boy wears the <strong>red and black uniform</strong> of the Imperial Guard infantry."
        },
        {
          question: "Why was The Fifer controversial?",
          answer: "The Salon jury rejected it in 1866. Critics called it a playing card, not a painting. Manet's flat color areas and lack of <strong>traditional modeling</strong> shocked academic taste."
        }
      ]
    },
    {
      slug: 'flagellation-piero',
      faqs: [
        {
          question: "Where is The Flagellation of Christ displayed?",
          answer: "This small panel is at the <a href=\"/museum/galleria-nazionale-marche\"><strong>Galleria Nazionale delle Marche</strong></a> in Urbino, Italy. It remains one of the most mysterious paintings of the Renaissance."
        },
        {
          question: "Who painted The Flagellation of Christ?",
          answer: "<a href=\"/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> created this work around 1455-1460. His mathematical precision in perspective makes the space almost architectural."
        },
        {
          question: "What makes this painting so mysterious?",
          answer: "Three figures stand in the foreground while Christ is whipped far in the background. Art historians have debated the identity of these <strong>enigmatic foreground figures</strong> for centuries."
        },
        {
          question: "How big is The Flagellation of Christ?",
          answer: "The painting measures just 59 × 81.5 cm (23 × 32 inches). Despite its <strong>small size</strong>, the complex perspective and mysterious composition have fascinated scholars for centuries."
        }
      ]
    },
    {
      slug: 'floor-scrapers',
      faqs: [
        {
          question: "Where can I see The Floor Scrapers?",
          answer: "This painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum owns several major works by Caillebotte including Paris Street; Rainy Day."
        },
        {
          question: "Who painted The Floor Scrapers?",
          answer: "<a href=\"/artist/gustave-caillebotte\"><strong>Gustave Caillebotte</strong></a> painted this in 1875. A wealthy collector and painter, he helped fund early <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> exhibitions."
        },
        {
          question: "Why was The Floor Scrapers rejected by the Salon?",
          answer: "The Salon jury found <strong>working-class labor</strong> an improper subject. Showing shirtless workers doing manual labor was considered vulgar for high art in 1875."
        },
        {
          question: "What makes The Floor Scrapers technically interesting?",
          answer: "Caillebotte used extreme perspective to show the <strong>converging floorboards</strong>. Light from tall windows catches dust particles and highlights the workers' muscular backs."
        }
      ]
    },
    {
      slug: 'golden-stairs',
      faqs: [
        {
          question: "Where is The Golden Stairs displayed?",
          answer: "This painting is at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It's one of Burne-Jones's largest and most famous canvases."
        },
        {
          question: "Who painted The Golden Stairs?",
          answer: "<a href=\"/artist/edward-burne-jones\"><strong>Edward Burne-Jones</strong></a> completed this in 1880. He was a leading figure in the late <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> movement."
        },
        {
          question: "What does The Golden Stairs depict?",
          answer: "Eighteen young women in classical robes descend a spiral staircase carrying musical instruments. The painting has no narrative. It's purely about <strong>rhythm and beauty</strong>."
        },
        {
          question: "Who modeled for The Golden Stairs?",
          answer: "Several models sat for multiple figures, including the artist's daughter Margaret. The <strong>dreamlike repetition</strong> of similar faces creates a hypnotic, otherworldly effect."
        }
      ]
    },
    {
      slug: 'grand-canal-canaletto',
      faqs: [
        {
          question: "Where can I see Canaletto's Grand Canal painting?",
          answer: "This view of Venice hangs at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The museum holds several of Canaletto's finest Venetian scenes."
        },
        {
          question: "Who painted The Grand Canal and the Church of the Salute?",
          answer: "<a href=\"/artist/canaletto\"><strong>Canaletto</strong></a> painted this around 1730. He specialized in <strong>vedute</strong> (view paintings) that captured Venice with photographic precision."
        },
        {
          question: "What building is shown in this painting?",
          answer: "The domed church is <strong>Santa Maria della Salute</strong>, built in 1631 to thank the Virgin Mary for ending a plague. It remains one of Venice's most iconic landmarks."
        },
        {
          question: "Who collected Canaletto's paintings?",
          answer: "British aristocrats on the <strong>Grand Tour</strong> prized his views as souvenirs. Canaletto eventually moved to England for nearly a decade to serve his wealthy patrons directly."
        }
      ]
    },
    {
      slug: 'great-red-dragon',
      faqs: [
        {
          question: "Where is The Great Red Dragon displayed?",
          answer: "This watercolor is at the <a href=\"/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York. Blake created a series of dragon paintings, with others in different collections."
        },
        {
          question: "Who created The Great Red Dragon?",
          answer: "<a href=\"/artist/william-blake\"><strong>William Blake</strong></a> painted this around 1805-1810. The visionary artist and poet created deeply personal images drawn from scripture and imagination."
        },
        {
          question: "What biblical scene does this painting show?",
          answer: "The image illustrates <strong>Revelation 12</strong>, where a seven-headed dragon threatens a woman clothed with the sun. Blake's dragon is terrifyingly muscular, seen from behind."
        },
        {
          question: "Why is The Great Red Dragon famous today?",
          answer: "Thomas Harris featured Blake's dragon paintings in his novel <strong>Red Dragon</strong>. The film adaptations brought these visionary images to millions of new viewers."
        }
      ]
    },
    {
      slug: 'gross-clinic',
      faqs: [
        {
          question: "Where can I see The Gross Clinic?",
          answer: "This painting is at the <a href=\"/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. It's considered the greatest American painting of the 19th century by many scholars."
        },
        {
          question: "Who painted The Gross Clinic?",
          answer: "<a href=\"/artist/thomas-eakins\"><strong>Thomas Eakins</strong></a> completed this masterpiece in 1875. He was America's most uncompromising <strong>Realist painter</strong>."
        },
        {
          question: "What is happening in The Gross Clinic?",
          answer: "Dr. Samuel Gross performs surgery on a patient's thigh while lecturing students. His bloody scalpel hand catches the light as his mother <strong>shields her eyes in horror</strong>."
        },
        {
          question: "Why was The Gross Clinic controversial?",
          answer: "The unflinching depiction of surgery with <strong>visible blood</strong> shocked 1876 audiences. It was hung in the medical section of the Centennial Exhibition, not the art gallery."
        }
      ]
    }
  ];

  for (const update of updates) {
    await prisma.artwork.update({
      where: { slug: update.slug },
      data: {
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });
    console.log(`Updated: ${update.slug}`);
  }

  console.log('\nDone! Updated 10 artworks with FAQs.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
