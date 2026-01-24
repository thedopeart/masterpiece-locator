const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: "johannes-vermeer-the-concert",
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted The Concert around 1664, depicting three figures engaged in music-making within a wealthy Dutch home. A woman sits at a harpsichord, her back partially turned, while a man plays the lute facing away from the viewer entirely. A second woman stands singing, completing this intimate domestic scene. On the wall behind them hangs a copy of Dirck van Baburen's The Procuress, a painting Vermeer's mother-in-law actually owned.</p>

<p>The Concert became the centerpiece of the largest art theft in history. On March 18, 1990, two men dressed as police officers talked their way into Boston's <a href="/apps/masterpieces/museum/isabella-stewart-gardner"><strong>Isabella Stewart Gardner Museum</strong></a> and stole thirteen works, including this Vermeer. The painting alone accounts for roughly half the theft's estimated $500 million value. No arrests have been made. No works recovered. The museum still displays the empty frame where The Concert once hung, alongside a $10 million reward for information.</p>

<p>Isabella Stewart Gardner purchased the painting in 1892 for $5,000 at the estate sale of Théophile Thoré, the critic who'd revived Vermeer's reputation decades earlier. It was her first major acquisition. One of only 34 confirmed Vermeers in existence, The Concert may be the most valuable stolen object in the world. The case remains open.</p>`,
    faqs: [
      {
        question: "Where can I see The Concert by Vermeer?",
        answer: "You can't. The Concert was stolen from the <a href=\"/apps/masterpieces/museum/isabella-stewart-gardner\"><strong>Isabella Stewart Gardner Museum</strong></a> in Boston on March 18, 1990 and has never been recovered. The museum displays its empty frame as a placeholder and offers a $10 million reward for its return."
      },
      {
        question: "Why is The Concert so valuable?",
        answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> left behind only 34 confirmed paintings, making each one extraordinarily rare. The Concert is considered one of his finest works, with estimates placing its value at $250 million or more, representing half the total value of the Gardner heist."
      },
      {
        question: "What is shown in The Concert?",
        answer: "Three figures make music in a Dutch interior: a woman at a harpsichord, a man playing lute with his back turned, and a standing woman singing. A painting of The Procuress hangs on the wall, adding layered meaning about music and seduction common in <strong>Dutch Golden Age</strong> art."
      },
      {
        question: "Has the Gardner Museum theft been solved?",
        answer: "No. Despite being the largest art theft in history, no arrests have been made and none of the thirteen stolen works have been recovered. The FBI investigated connections to organized crime, but The Concert and the other pieces remain missing after more than three decades."
      }
    ]
  },
  {
    slug: "johannes-vermeer-the-geographer",
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted The Geographer between 1668 and 1669, showing a scholar dressed in a Japanese-style robe, dividers in hand, caught mid-thought as he gazes toward a window. Maps, charts, and a celestial globe crowd the room. The figure leans forward with a kind of restless energy unusual for Vermeer's typically still compositions. Light floods in from the left, illuminating the geographer's face and the tools of his trade scattered across the table.</p>

<p>This is one of only three paintings Vermeer signed and dated, and he did it twice here. Technical examination confirmed both signatures are original. The painting forms a pair with The Astronomer, created around the same time using the same model and even canvas from the same bolt of material. Some art historians believe the sitter was <strong>Antonie van Leeuwenhoek</strong>, the pioneering microscopist who lived blocks away from Vermeer in Delft. Both men were born within a week of each other in 1632. Van Leeuwenhoek would later serve as trustee of Vermeer's estate after the artist's death.</p>

<p>The globe on the cupboard shows the Indian Ocean, a nod to Dutch maritime trade, while the wall chart depicts European coastlines published by Willem Blaeu. The Geographer now hangs at the <a href="/apps/masterpieces/museum/stadel"><strong>Städel Museum</strong></a> in Frankfurt, where it remains one of the most studied examples of <strong>Dutch Golden Age</strong> painting.</p>`,
    faqs: [
      {
        question: "Where can I see The Geographer?",
        answer: "The Geographer is displayed at the <a href=\"/apps/masterpieces/museum/stadel\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The museum holds an important collection of European paintings from the Middle Ages through the present day."
      },
      {
        question: "Who is the figure in The Geographer?",
        answer: "The model's identity isn't confirmed, but many scholars believe it may be <strong>Antonie van Leeuwenhoek</strong>, the famous microscopist who lived near <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> in Delft. Both were born the same week in 1632, and van Leeuwenhoek later managed Vermeer's estate."
      },
      {
        question: "Is The Geographer connected to The Astronomer?",
        answer: "Yes. The two paintings form a pendant pair, created around the same time using the same model wearing the same Japanese robe. A 2017 study found both canvases came from the same bolt of material, confirming <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> conceived them as companions."
      },
      {
        question: "What objects appear in The Geographer?",
        answer: "The room contains a celestial globe by Jodocus Hondius showing the Indian Ocean, a sea chart of European coasts by Willem Blaeu, dividers for measuring distances, rolled maps, and Delft tiles along the baseboard. Each object reflects the <strong>Dutch maritime trade</strong> that made such scholarship possible."
      }
    ]
  },
  {
    slug: "johannes-vermeer-study-of-a-young-woman",
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this young woman around 1665-1667, capturing her in soft light against a dark background. She wears exotic clothing and costume jewelry, a pearl earring catching the glow as she turns toward the viewer. Her expression is gentle but reserved, her features unpretentious. The painting belongs to a genre called <strong>tronie</strong>, a Dutch term for studies of faces and expressions rather than commissioned portraits.</p>

<p>This work shares obvious similarities with Vermeer's more famous Girl with a Pearl Earring. Both feature women with pearl earrings, scarves draped over their shoulders, and that same deep black backdrop unusual for Vermeer. They're nearly identical in size. But where the Mauritshuis painting has become an icon, Study of a Young Woman remains less known. The sitter here has a broader face, widely spaced eyes, and what critics have called a homelier appearance, leading some to speculate she might have been Vermeer's own daughter rather than a professional model.</p>

<p>The painting sold for just 3 Dutch guilders at a Rotterdam auction in 1816. That's roughly 30 grams of silver. It passed through Belgian aristocracy before Charles and Jayne Wrightsman purchased it privately in the 1950s. They donated it to the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a> in 1979, where it now hangs as one of only a handful of Vermeers in American collections.</p>`,
    faqs: [
      {
        question: "Where can I see Study of a Young Woman?",
        answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York City. It was donated by Charles and Jayne Wrightsman in 1979 and remains one of the few authentic Vermeers in American museum collections."
      },
      {
        question: "Is this painting related to Girl with a Pearl Earring?",
        answer: "The two are often compared but aren't companion pieces. Both show women with pearl earrings against dark backgrounds and share nearly identical dimensions. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> created them as <strong>tronies</strong>, character studies rather than formal portraits, using similar compositional approaches."
      },
      {
        question: "What is a tronie?",
        answer: "A <strong>tronie</strong> is a Dutch 17th-century painting type focusing on faces, expressions, and exotic costumes rather than depicting specific individuals. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> created several, prized for their demonstration of artistic skill and intriguing character rather than portrait likeness."
      },
      {
        question: "Who is the woman in this painting?",
        answer: "Her identity is unknown. Some scholars suggest she may have been <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> daughter, given her unpretentious features and the intimate quality of the work. But as a tronie, the painting wasn't meant to document a specific person."
      }
    ]
  },
  {
    slug: "leonardo-da-vinci-the-baptism-of-christ",
    description: `<p>The Baptism of Christ emerged from Andrea del Verrocchio's Florence workshop around 1472-1475, with a young <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> contributing what would become the painting's most celebrated element: the angel on the far left. Leonardo was roughly eighteen when he painted that figure, a kneeling youth with rosy cheeks and light hair caught by the wind. The face is delicate, sweet, rendered with a softness that stands apart from the harder forms around it.</p>

<p>Giorgio Vasari told a famous story about this collaboration. He claimed that when Verrocchio saw what his young apprentice had accomplished, he put down his brushes and never painted again. The truth is more practical. Verrocchio was already a renowned sculptor who'd taken on painting commissions as a sideline. He simply refocused on what he did best. But the anecdote captures something real about the gap in skill that emerged. Modern analysis suggests Leonardo contributed more than just the angel. The misty <strong>landscape</strong>, golden atmospheric light, and even portions of Christ's figure appear to be his work, painted in oils while the rest of the panel was executed in tempera.</p>

<p>The painting originally hung in the Church of San Salvi before moving to the Vallombrosan Sisterhood. It entered the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> collection in 1959, where visitors can compare master and student side by side.</p>`,
    faqs: [
      {
        question: "Where can I see The Baptism of Christ?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum houses one of the world's most important collections of <strong>Renaissance art</strong>, including multiple works by Leonardo and his contemporaries."
      },
      {
        question: "Which part did Leonardo paint?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted the angel on the far left, widely considered the painting's finest passage. Modern analysis suggests he also contributed the misty landscape background and possibly portions of Christ's figure, all executed in oils rather than the tempera used elsewhere."
      },
      {
        question: "Did Verrocchio really quit painting after seeing Leonardo's work?",
        answer: "That's the story Giorgio Vasari told, but it's likely exaggerated. Verrocchio was primarily a sculptor who took painting commissions on the side. After this collaboration, he simply returned to his strengths in bronze and marble rather than competing with his gifted young apprentice."
      },
      {
        question: "How old was Leonardo when he worked on this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> was approximately eighteen years old and still an apprentice in Verrocchio's workshop when he contributed to The Baptism of Christ. The painting demonstrates remarkable skill for someone so early in his career."
      }
    ]
  },
  {
    slug: "leonardo-da-vinci-madonna-with-a-flower-madonna-benois",
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> began this Madonna and Child around 1478, likely the first painting he completed entirely on his own after leaving Verrocchio's workshop. The scene shows Mary playfully offering a small flower to the infant Jesus, who reaches for it with chubby fingers and unfocused eyes. There's a warmth here, a domestic intimacy that breaks from the stiff formality typical of religious paintings at the time.</p>

<p>The flower itself carries weight beyond decoration. It's a crucifer, a plant with petals arranged in the shape of a cross, a quiet symbol of the Crucifixion to come. Mary seems unaware of its meaning. The child grasps at it like any baby would grab at something shiny. Leonardo painted several versions of the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Madonna and Child</strong></a> theme throughout his career, but this one captures something uniquely human about the relationship between mother and son.</p>

<p>The painting takes its name from the Benois family, who owned it for generations. When Maria Benois decided to sell in 1912, London dealers offered 500,000 francs. Instead, the Russian public raised funds to keep it, and Maria sold it to the government for just 150,000 roubles as a goodwill gesture. The Benois Madonna entered the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in 1914, where it remains one of only two Leonardo paintings in Russian collections.</p>`,
    faqs: [
      {
        question: "Where can I see the Benois Madonna?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. It's one of only two Leonardo works in Russian collections, the other being the Madonna Litta also at the Hermitage."
      },
      {
        question: "What is the flower's meaning in this painting?",
        answer: "Mary holds a crucifer, a plant with petals arranged in a cross shape, symbolizing the <strong>Crucifixion</strong> to come. <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> used this quiet symbol to foreshadow Christ's fate while the infant reaches for it innocently, unaware of its meaning."
      },
      {
        question: "Why is it called the Benois Madonna?",
        answer: "The painting is named after the Benois family, Russian art collectors who owned it for generations. When Maria Benois sold it to the Russian government in 1914, she accepted a reduced price so the work could remain in Russia rather than go to foreign dealers."
      },
      {
        question: "When did Leonardo paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> began this painting around 1478-1480. It's likely his first work completed independently after leaving Andrea del Verrocchio's workshop, making it an important milestone in his early career as an artist."
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
