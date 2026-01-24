const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const artwork = await prisma.artwork.findFirst({
    where: { slug: 'the-last-supper' }
  });

  if (!artwork) {
    console.log('Artwork not found');
    return;
  }

  const description = `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted The Last Supper between <strong>1495 and 1498</strong> on a wall of the refectory at Santa Maria delle Grazie in Milan. The mural captures the exact moment after Jesus announces that one of his <strong>twelve apostles</strong> will betray him. Shock, denial, and anguish ripple across the table in waves of <strong>gesture and expression</strong>, each figure responding with distinct personality.</p>

<p>Leonardo's composition revolutionized how artists depicted this biblical scene. He grouped the apostles in <strong>four clusters of three</strong>, creating rhythmic visual movement that flows toward Christ at the center. <strong>Judas Iscariot</strong> sits with the other apostles rather than isolated across the table as earlier painters showed him. You can identify Judas by his shadowed face, the money bag he clutches, and his recoil from Jesus.</p>

<p>The experimental technique proved disastrous for preservation. Leonardo painted on <strong>dry plaster</strong> (a secco) rather than wet fresco, allowing him to work slowly and achieve soft shadows impossible with traditional methods. The paint began <strong>flaking within his lifetime</strong>. By 1556, Giorgio Vasari called it "a muddle of blots." A doorway cut through the bottom in 1652 destroyed Christ's feet. Napoleon's troops used the room as a stable. <strong>Allied bombs</strong> in 1943 destroyed the refectory but sandbags protected the mural itself.</p>

<p>The work measures <strong>460 by 880 centimeters</strong> (15 by 29 feet), covering an entire wall. A major restoration from 1978 to 1999 removed centuries of overpainting and stabilized the surface, though only about <strong>20% of Leonardo's original paint</strong> survives. Visitors now view it in small, timed groups at <a href="/apps/masterpieces/museum/santa-maria-delle-grazie"><strong>Santa Maria delle Grazie</strong></a>, designated a <strong>UNESCO World Heritage Site</strong> in 1980 specifically because of this <a href="/movement/renaissance"><strong>Renaissance</strong></a> masterwork.</p>`;

  const faqs = [
    {
      question: "Where is Leonardo's Last Supper located?",
      answer: "The mural covers the north wall of the refectory (dining hall) at <a href=\"/apps/masterpieces/museum/santa-maria-delle-grazie\"><strong>Santa Maria delle Grazie</strong></a>, a church and Dominican convent in Milan, Italy. The site became a <strong>UNESCO World Heritage Site</strong> in 1980."
    },
    {
      question: "Why is The Last Supper so damaged?",
      answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted on <strong>dry plaster</strong> instead of wet fresco, which caused flaking almost immediately. A doorway was cut through Christ's feet in 1652. Napoleon's troops used the room as a stable. Allied bombs in 1943 destroyed the surrounding building. Only about <strong>20% of the original paint</strong> survives today."
    },
    {
      question: "How big is The Last Supper?",
      answer: "The mural measures <strong>460 by 880 centimeters</strong> (approximately 15 by 29 feet), covering an entire wall of the refectory. It remains <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo's</strong></a> largest surviving work and one of the biggest <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> paintings ever created."
    },
    {
      question: "Can I visit The Last Supper in person?",
      answer: "Yes, but access is strictly controlled. Visitors enter in groups of <strong>25 people maximum</strong> for exactly <strong>15-minute viewings</strong>. You must book tickets months in advance through the official site or authorized vendors. The controlled environment helps preserve what remains of the fragile mural."
    },
    {
      question: "How can you identify Judas in the painting?",
      answer: "<strong>Judas Iscariot</strong> sits fourth from the left, leaning away from Jesus with his face in shadow. He clutches a <strong>small money bag</strong> containing his thirty pieces of silver. Unlike earlier depictions that isolated Judas across the table, Leonardo placed him among the other apostles, making him harder to spot at first glance."
    },
    {
      question: "What moment does The Last Supper depict?",
      answer: "Leonardo captured the instant after Jesus says <strong>\"One of you will betray me.\"</strong> Each apostle reacts with shock, denial, or confusion. The dramatic responses create emotional waves flowing outward from Christ, who remains calm at the center. This psychological intensity was revolutionary for religious painting."
    },
    {
      question: "How long did Leonardo take to paint The Last Supper?",
      answer: "Leonardo worked on the mural from <strong>1495 to 1498</strong>, roughly three years. His slow, perfectionist approach frustrated the prior of Santa Maria delle Grazie, who complained to the Duke of Milan. Leonardo reportedly threatened to use the prior's face as the model for Judas if he kept complaining."
    },
    {
      question: "What was the 1999 restoration?",
      answer: "A <strong>21-year restoration</strong> (1978-1999) led by Pinin Brambilla Barcilon removed centuries of dirt, glue, and overpainting by earlier restorers. The team stabilized the fragile surface and revealed details invisible for hundreds of years. The work sparked controversy because some felt too much original material was lost."
    }
  ];

  await prisma.artwork.update({
    where: { id: artwork.id },
    data: {
      description,
      faqs,
      updatedAt: new Date()
    }
  });

  console.log('Updated: The Last Supper by Leonardo da Vinci');
  console.log('Description length:', description.length, 'characters');
  console.log('FAQs:', faqs.length);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
