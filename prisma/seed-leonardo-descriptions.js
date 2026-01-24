const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'lady-with-an-ermine',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted Lady with an Ermine around <strong>1490</strong> in Milan, depicting Cecilia Gallerani, the teenage mistress of Duke Ludovico Sforza. She holds a white ermine, a symbol of purity and also a pun on the duke's membership in the Order of the Ermine. The animal's Greek name, <strong>galê</strong>, echoes Gallerani's surname.</p>

<p>The portrait broke from convention by showing Cecilia in <strong>three-quarter view</strong>, turning as if someone just entered the room. Her alert expression and the ermine's tense posture create a sense of interrupted moment. Leonardo's <strong>sfumato technique</strong> softens the transitions between light and shadow on her face, a method he would perfect in the Mona Lisa years later.</p>

<p>The painting passed through various collections before the Czartoryski family acquired it in 1800. Nazis seized it during World War II, and Hans Frank kept it in his Krakow headquarters. After the war, Poland recovered it. The work now hangs at the <a href="/apps/masterpieces/museum/national-museum-krakow"><strong>National Museum in Krakow</strong></a>, Poland's most prized painting.</p>`,
    faqs: [
      {
        question: "Who is the woman in Lady with an Ermine?",
        answer: "<strong>Cecilia Gallerani</strong>, the teenage mistress of Ludovico Sforza, Duke of Milan. She was about 16 when <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted her portrait around 1490."
      },
      {
        question: "Why is she holding an ermine?",
        answer: "The <strong>ermine symbolizes purity</strong> and references the Duke's Order of the Ermine. It's also a pun: the Greek word for ermine (galê) echoes Gallerani's name."
      },
      {
        question: "Where can I see Lady with an Ermine?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/national-museum-krakow\"><strong>National Museum in Krakow</strong></a>, Poland. It's considered Poland's most valuable artwork."
      },
      {
        question: "What happened to the painting during World War II?",
        answer: "<strong>Nazis seized it</strong> in 1939. Hans Frank, the Nazi governor of occupied Poland, kept it in his Krakow headquarters. Poland recovered it after the war."
      }
    ]
  },
  {
    slug: 'virgin-of-the-rocks-louvre',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted the first Virgin of the Rocks between <strong>1483 and 1486</strong> for the Confraternity of the Immaculate Conception in Milan. The scene shows the Virgin Mary with the infant Jesus, young John the Baptist, and an angel in a mysterious rocky grotto. Water pools and strange geological formations surround the figures.</p>

<p>Leonardo arranged the four figures in a <strong>pyramidal composition</strong>, with Mary at the apex. The angel points toward John while looking directly at the viewer, a gesture that sparked theological debate. Leonardo's revolutionary use of <strong>sfumato</strong> creates soft, hazy atmosphere, and his understanding of geology shows in the precisely rendered rock formations.</p>

<p>A payment dispute with the Confraternity led Leonardo to sell this version, possibly to the French king. He later painted a <a href="/apps/masterpieces/art/virgin-of-the-rocks-london">second version</a> for the original patrons. This first version hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, where it remains one of the museum's most important <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> works.</p>`,
    faqs: [
      {
        question: "Why are there two versions of Virgin of the Rocks?",
        answer: "A <strong>payment dispute</strong> led Leonardo to sell the first version. He then painted a second for the original patrons. The Louvre has the first; the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery London</strong></a> has the second."
      },
      {
        question: "What is the angel pointing at?",
        answer: "The angel points toward <strong>infant John the Baptist</strong> while looking at the viewer. This gesture sparked debate among theologians about its meaning and appropriateness."
      },
      {
        question: "Where is the Louvre version displayed?",
        answer: "In the <strong>Grande Galerie</strong> at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>, Paris. It hangs near other Italian Renaissance masterpieces in one of the world's most visited museums."
      },
      {
        question: "What makes the rocky setting significant?",
        answer: "Leonardo's <strong>geological accuracy</strong> reflects his scientific interests. The strange formations also create a mysterious, almost otherworldly atmosphere for the sacred scene."
      }
    ]
  },
  {
    slug: 'virgin-of-the-rocks-london',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted this second version of Virgin of the Rocks between <strong>1495 and 1508</strong>, completing the commission he'd originally received in 1483. After selling the first version, Leonardo and his assistants created this replacement for the Confraternity of the Immaculate Conception's chapel in San Francesco Grande, Milan.</p>

<p>Several differences distinguish this from the <a href="/apps/masterpieces/art/virgin-of-the-rocks-louvre">Louvre version</a>. The angel no longer points or stares at the viewer. <strong>Halos appear</strong> above the holy figures. John the Baptist carries his traditional cross-staff. The colors are cooler and the lighting more even. Scholars debate how much Leonardo painted himself versus his workshop.</p>

<p>When Napoleon suppressed Milanese religious institutions, the painting was sold. Scottish painter Gavin Hamilton bought it in 1785 and brought it to England. The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> acquired it in 1880, where it remains a centerpiece of their <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> collection.</p>`,
    faqs: [
      {
        question: "How does this differ from the Louvre version?",
        answer: "The angel <strong>no longer points</strong> at John. Halos appear on the figures. John carries a cross-staff. Colors are cooler and lighting more even. Some sections may be by assistants."
      },
      {
        question: "Did Leonardo paint all of it himself?",
        answer: "Scholars believe <strong>assistants helped</strong>, particularly Ambrogio de Predis. Leonardo likely designed and supervised everything, painting key areas himself over the 13-year production."
      },
      {
        question: "Where can I see this version?",
        answer: "At the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It's displayed in the Sainsbury Wing with other Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> paintings."
      },
      {
        question: "Why did he paint it twice?",
        answer: "Leonardo <strong>sold the first version</strong> during a payment dispute. The Confraternity still needed an altarpiece, so he created this second version to fulfill the original contract."
      }
    ]
  },
  {
    slug: 'la-belle-ferronniere',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted La Belle Ferronnière around <strong>1490-1496</strong> in Milan, depicting an unknown woman often identified as one of Duke Ludovico Sforza's mistresses. She wears a <strong>ferronnière</strong>, a headband with a jewel centered on the forehead, which gave the painting its name centuries later.</p>

<p>The subject gazes past the viewer with a reserved, almost cool expression. A stone parapet separates her from the picture plane, a compositional device borrowed from Flemish portraits. Leonardo's subtle modeling creates <strong>lifelike dimensionality</strong>, especially around her eyes and the soft transitions of her neck. The dark background focuses attention entirely on her face.</p>

<p>The sitter's identity remains debated. Candidates include <strong>Lucrezia Crivelli</strong> and Cecilia Gallerani (also depicted in Lady with an Ermine). The painting entered the French royal collection, possibly as early as Francis I's reign. It now hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> alongside Leonardo's other works.</p>`,
    faqs: [
      {
        question: "Who is the woman in the painting?",
        answer: "Her identity is <strong>unknown</strong>. Candidates include Lucrezia Crivelli and other mistresses of Duke Ludovico Sforza. The debate continues among art historians."
      },
      {
        question: "What is a ferronnière?",
        answer: "A <strong>thin headband</strong> with a jewel positioned at the center of the forehead. It was fashionable in Renaissance Italy. The painting takes its name from this accessory."
      },
      {
        question: "Where is La Belle Ferronnière displayed?",
        answer: "At the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, in the same gallery as the Mona Lisa and Virgin of the Rocks. It's part of the world's largest Leonardo collection."
      },
      {
        question: "Is this definitely by Leonardo?",
        answer: "Yes, modern scholarship <strong>confirms Leonardo's authorship</strong>. Some earlier critics suggested Giovanni Antonio Boltraffio, but technical analysis supports Leonardo."
      }
    ]
  },
  {
    slug: 'saint-john-the-baptist-leonardo',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted Saint John the Baptist between <strong>1513 and 1516</strong>, likely his final painting. The saint emerges from deep shadow, his face illuminated by an unseen light source. He points upward with his right hand while holding a cross (now barely visible) and smiling with an expression that has puzzled viewers for centuries.</p>

<p>The extreme <strong>sfumato</strong> dissolves the figure's edges into darkness, creating an almost ethereal presence. John's androgynous features and mysterious smile echo the Mona Lisa, which Leonardo was also working on during these years. The <strong>pointing gesture</strong> toward heaven represents John's role as the prophet who announced Christ's coming.</p>

<p>Leonardo kept this painting until his death in 1519, when it passed to his assistant Salai. Francis I of France acquired it for the royal collection. The darkened varnish has made the already dim painting nearly black in areas, though the face remains strikingly visible. It hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Why does Saint John look so mysterious?",
        answer: "Leonardo used extreme <strong>sfumato</strong>, the same technique behind Mona Lisa's enigmatic expression. The androgynous features and smile create deliberate ambiguity."
      },
      {
        question: "What is John pointing at?",
        answer: "He points <strong>toward heaven</strong>, representing his role as the prophet who announced Christ's coming. \"Behold the Lamb of God\" was his famous declaration."
      },
      {
        question: "Is this Leonardo's last painting?",
        answer: "Likely yes. Leonardo worked on it between <strong>1513-1516</strong> and kept it until his death in 1519. He may have continued refining it in France."
      },
      {
        question: "Where can I see Saint John the Baptist?",
        answer: "At the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, displayed near the Mona Lisa. Despite darkened varnish, the illuminated face remains striking."
      }
    ]
  },
  {
    slug: 'virgin-and-child-with-saint-anne',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> worked on The Virgin and Child with Saint Anne from around <strong>1503 to 1519</strong>, leaving it unfinished at his death. Three generations appear: Saint Anne, her daughter Mary, and the infant Jesus reaching toward a lamb. The figures interlock in a complex <strong>pyramidal composition</strong> that influenced generations of artists.</p>

<p>Leonardo explored this subject for decades, creating multiple cartoons and studies. The version in the Louvre shows Mary sitting on her mother's lap while leaning toward Jesus, who grasps a lamb symbolizing his future sacrifice. The <strong>mysterious landscape</strong> behind them features Leonardo's characteristic blue mountains fading into atmospheric haze.</p>

<p>Sigmund Freud famously analyzed this painting in 1910, finding hidden psychological meaning in the composition. Whether or not his interpretation holds, the <strong>emotional complexity</strong> of three generations interacting remains powerfully moving. The painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, showing visible signs of its unfinished state.</p>`,
    faqs: [
      {
        question: "Why is Mary sitting on Anne's lap?",
        answer: "This <strong>unusual arrangement</strong> compresses three generations into one pyramidal form. It may symbolize the continuity of grace through generations, from Anne to Mary to Christ."
      },
      {
        question: "Is this painting finished?",
        answer: "No. Leonardo worked on it for <strong>over 15 years</strong> but left it incomplete at his death in 1519. Some areas remain in underpainting, visible beneath transparent glazes."
      },
      {
        question: "What does the lamb symbolize?",
        answer: "The <strong>sacrificial lamb</strong> represents Christ's future crucifixion. Jesus reaching for it shows his acceptance of his destiny, while Mary tries to hold him back."
      },
      {
        question: "Where is this painting displayed?",
        answer: "At the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. A major restoration completed in 2012 revealed colors and details obscured by centuries of varnish."
      }
    ]
  },
  {
    slug: 'adoration-of-the-magi-leonardo',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> began the Adoration of the Magi in <strong>1481</strong> for the monastery of San Donato a Scopeto near Florence, but abandoned it unfinished when he left for Milan the following year. The large panel, nearly <strong>2.5 meters square</strong>, shows the Three Kings presenting gifts to the infant Jesus while a crowd of figures swirls around them.</p>

<p>Though incomplete, the painting reveals Leonardo's revolutionary approach. He organized dozens of figures into a <strong>pyramidal composition</strong> centered on Mary and Jesus. Background figures engage in violent combat on horseback, contrasting with the peaceful adoration in the foreground. The unfinished state exposes Leonardo's working method: brown underpainting establishes forms before color would be applied.</p>

<p>The monastery eventually hired Filippino Lippi to paint a replacement. Leonardo's abandoned panel remained with the Benci family before entering the Medici collections. A <strong>controversial restoration</strong> completed in 2017 removed centuries of overpainting, revealing Leonardo's original browns and greens. It now hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      {
        question: "Why did Leonardo abandon this painting?",
        answer: "He left Florence for Milan in <strong>1482</strong> to work for Duke Ludovico Sforza. Leonardo often left works unfinished when new opportunities arose."
      },
      {
        question: "What does the unfinished state reveal?",
        answer: "It shows Leonardo's <strong>working method</strong>: brown underpainting establishes light and shadow before color glazes. It's like seeing an X-ray of his creative process."
      },
      {
        question: "What's happening in the background?",
        answer: "<strong>Horsemen fight</strong> amid ruined architecture, possibly representing the pagan world giving way to Christianity. The violence contrasts sharply with the peaceful adoration."
      },
      {
        question: "Where can I see the Adoration of the Magi?",
        answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. A 2017 restoration removed later overpainting to reveal Leonardo's original vision."
      }
    ]
  },
  {
    slug: 'saint-jerome-wilderness-leonardo',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> began Saint Jerome in the Wilderness around <strong>1482</strong> but left it dramatically unfinished. The aged saint kneels in a rocky landscape, beating his chest with a stone in penance. A lion, his traditional companion, stretches across the foreground. Jerome's emaciated body shows Leonardo's detailed knowledge of <strong>human anatomy</strong>.</p>

<p>The painting exists in various stages of completion. Jerome's head and torso are highly developed, showing precise understanding of <strong>neck muscles and skeletal structure</strong>. Other areas remain in rough sketch or bare brown underpainting. The composition places Jerome off-center, his gaze directed toward a barely visible crucifix at the upper right.</p>

<p>The panel's history is murky. Legend says Cardinal Fesch found it cut into two pieces, with Jerome's head used as a <strong>box lid</strong> in a Roman junk shop. Whether true or not, the panel was reassembled and eventually acquired by the Vatican. It now hangs in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a> in Rome.</p>`,
    faqs: [
      {
        question: "Why is the painting unfinished?",
        answer: "Leonardo likely abandoned it when he <strong>moved to Milan</strong> around 1482. Like the Adoration of the Magi, it was left behind when new opportunities called him away."
      },
      {
        question: "What does the painting show anatomically?",
        answer: "Jerome's <strong>neck muscles and skeletal structure</strong> demonstrate Leonardo's anatomical studies. The sternocleidomastoid muscle is precisely rendered, showing his scientific approach."
      },
      {
        question: "Is the story about being cut in half true?",
        answer: "Possibly. Cardinal Fesch claimed he found Jerome's head being used as a <strong>box lid</strong>. Whether legend or fact, the panel does show signs of having been separated and rejoined."
      },
      {
        question: "Where is Saint Jerome displayed?",
        answer: "In the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>, Rome. It's the only Leonardo in the Vatican's collection, displayed in the Pinacoteca."
      }
    ]
  },
  {
    slug: 'vitruvian-man',
    description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> drew Vitruvian Man around <strong>1490</strong>, illustrating the ideal human proportions described by the ancient Roman architect Vitruvius. A nude male figure stands in two superimposed positions: arms outstretched within a square, and legs and arms spread within a circle. The drawing demonstrates that a perfectly proportioned human body fits both geometric forms.</p>

<p>Leonardo's notes, written in his characteristic <strong>mirror script</strong>, surround the image. They describe the proportional relationships Vitruvius outlined: the body is eight heads tall, the arm span equals height, the face divides into thirds. Leonardo adjusted some ratios based on his own measurements of human bodies, improving on the ancient text.</p>

<p>The drawing measures just <strong>34 by 25 centimeters</strong>, executed in pen, ink, and wash on paper. It symbolizes the Renaissance belief in humanity as the measure of all things, connecting art, science, and philosophy. The original rarely leaves the <a href="/apps/masterpieces/museum/gallerie-dell-accademia-venice"><strong>Gallerie dell'Accademia</strong></a> in Venice due to its fragility, though it remains one of the most reproduced images in history.</p>`,
    faqs: [
      {
        question: "What is Vitruvian Man demonstrating?",
        answer: "That a perfectly proportioned human body fits inside both a <strong>circle and a square</strong>. This illustrates ancient Roman architect Vitruvius's theories about ideal human proportions."
      },
      {
        question: "Why is it so famous?",
        answer: "It symbolizes the <strong>Renaissance ideal</strong> connecting art, science, and human potential. The image has become a universal symbol of humanity and classical proportion."
      },
      {
        question: "Can I see the original?",
        answer: "Rarely. It's kept in storage at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice and only occasionally displayed due to the paper's fragility."
      },
      {
        question: "What's the mirror writing around it?",
        answer: "Leonardo's notes describing <strong>Vitruvius's proportions</strong>: the face is 1/10 of height, the foot is 1/7, etc. Leonardo wrote right-to-left, readable in a mirror."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Leonardo Artwork Descriptions ===\n');

  let updated = 0;
  let skipped = 0;

  for (const update of artworkUpdates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: update.slug }
    });

    if (!artwork) {
      console.log(`Skipped (not found): ${update.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: update.description,
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${artwork.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
