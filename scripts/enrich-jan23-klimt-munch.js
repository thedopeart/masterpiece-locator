const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: "gustav-klimt-sappho",
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted Sappho between 1888 and 1890, depicting the ancient Greek poetess from the island of Lesbos. This small work, measuring just 39 by 31.6 centimeters, belongs to Klimt's early <strong>historicist period</strong>, years before he developed the golden, decorative style that would make him famous. The painting reflects the academic training and classical interests that dominated his youth.</p>

<p>During these years, Klimt worked with his brother Ernst and fellow artist Franz Matsch as the "Künstler-Compagnie," a company that won major decorative commissions across Vienna. Their most prestigious project came in 1886 when they received 10,000 guilders to paint ceiling panels for the newly built Imperial Burgtheater. Klimt executed four of the ten scenes depicting theater history from antiquity through the 18th century. Emperor Franz Josef I awarded him the Golden Order of Merit in 1888 for this work.</p>

<p>The influence of Lawrence Alma-Tadema and John William Waterhouse appears in Klimt's careful reconstruction of ancient settings. But even in these early commissions, Klimt was beginning to diverge from his partners' strict <strong>historicism</strong>. Sappho now hangs in the Vienna Museum, a reminder of where one of art history's most distinctive styles began, in the polished academic tradition he would soon abandon.</p>`,
    faqs: [
      {
        question: "Where can I see Gustav Klimt's Sappho?",
        answer: "This painting is displayed at the <strong>Vienna Museum</strong> in Austria. The small work measures 39 by 31.6 centimeters and represents <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> early historicist period before his famous golden style emerged."
      },
      {
        question: "Who was Sappho?",
        answer: "<strong>Sappho</strong> was an ancient Greek poetess from the island of Lesbos, active around 600 BCE. She's considered one of the greatest lyric poets of antiquity. <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> depicted her as part of his interest in classical subjects during the 1880s."
      },
      {
        question: "What style is this painting?",
        answer: "This painting belongs to <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> early <strong>historicist</strong> period, influenced by academic painters like Lawrence Alma-Tadema. It predates the decorative golden style of works like The Kiss by nearly two decades."
      },
      {
        question: "What was the Künstler-Compagnie?",
        answer: "The Künstler-Compagnie was a company formed by <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a>, his brother Ernst, and Franz Matsch in the 1880s. They won major decorative commissions in Vienna, including ceiling paintings for the Imperial Burgtheater that earned Gustav the Golden Order of Merit."
      }
    ]
  },
  {
    slug: "gustav-klimt-klara-klimt",
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted this portrait of his older sister Klara around 1880, when he was still a teenager studying at the Vienna School of Arts and Crafts. The small, intimate work shows Klara in a straightforward realistic style, far removed from the ornamental extravagance Klimt would later develop. It captures her with the directness typical of family portraits made during his student years.</p>

<p>Klara Klimt was the eldest of seven children born to gold engraver Ernest Klimt and his wife Anna. She never married, reportedly suffering from psychological difficulties that plagued her throughout life. Gustav wrote about her in 1899: "my older sister has gone insane a few years ago." Despite these troubles, the family remained close, and the Klimt brothers created numerous <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of their parents and siblings during their years of study.</p>

<p>The painting demonstrates Klimt's early technical skill in conventional <strong>academic realism</strong>. There's no gold leaf, no decorative patterning, no symbolic abstraction. Just careful observation of his sister's features and quiet presence. The work now belongs to the <a href="/apps/masterpieces/museum/leopold-museum"><strong>Leopold Museum</strong></a> collection, offering visitors a glimpse of Klimt before he became Klimt.</p>`,
    faqs: [
      {
        question: "Where can I see the Portrait of Klara Klimt?",
        answer: "This early portrait is held in the <a href=\"/apps/masterpieces/museum/leopold-museum\"><strong>Leopold Museum</strong></a> collection in Vienna. The museum houses significant works from <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt's</strong></a> career, including pieces from his formative years."
      },
      {
        question: "Who was Klara Klimt?",
        answer: "<strong>Klara Klimt</strong> (1860-1937) was Gustav's older sister, the eldest of seven children in the family. She never married and suffered from psychological difficulties throughout her life. Gustav painted this portrait of her around 1880 when he was still a student."
      },
      {
        question: "How does this differ from Klimt's famous style?",
        answer: "This early work shows straightforward <strong>academic realism</strong> with no gold leaf, decorative patterns, or symbolic abstraction. <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> painted it as a teenager, nearly two decades before developing the ornamental style seen in The Kiss or his golden portraits."
      },
      {
        question: "Did Klimt paint other family members?",
        answer: "Yes. During their student years, <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav</strong></a> and his brother Ernst created numerous portraits of their parents and siblings. Gustav also painted a large-scale portrait of their mother Anna around 1897-98, though that work's current location is unknown."
      }
    ]
  },
  {
    slug: "edvard-munch-self-portrait",
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> created this lithograph in Berlin in 1895, one of his first experiments with the medium. His face emerges from solid black, illuminated only by a white rectangle at his neck and the ghostly form of his own features. At the bottom of the image, a <strong>skeletal arm</strong> appears, resting on what seems to be the picture's frame. The bones serve as a memento mori, a reminder of death that transforms the whole composition into something like a funerary tablet.</p>

<p>Munch was thirty-two years old and at a vibrant point in his career, embraced by avant-garde circles in Berlin alongside August Strindberg and other artists exploring psychological unease. Yet death had stalked him since childhood. His mother died of tuberculosis when he was five. His sister Sophie died of the same disease when he was fourteen. "I was born dying," Munch claimed as an old man. "Sickness, insanity and death were the dark angels standing guard at my cradle."</p>

<p>The technique mimics a woodcut more than a typical lithograph, with thick ink wash brushed over lithographic chalk to create that impenetrable black ground. Years later, Munch reprinted the image with the skeletal arm blacked out, as if even he found the <strong>mortality</strong> symbol too direct. The original version is held at the <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo.</p>`,
    faqs: [
      {
        question: "Where can I see Munch's Self-Portrait with Skeleton Arm?",
        answer: "The original 1895 lithograph is held at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo. Impressions also exist in other collections including the British Museum and Princeton University Art Museum."
      },
      {
        question: "What does the skeleton arm represent?",
        answer: "The <strong>skeletal arm</strong> functions as a memento mori, a traditional reminder of mortality. It appears to rest on the picture frame, transforming the self-portrait into something resembling a funerary monument. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> later reprinted the image with the arm blacked out."
      },
      {
        question: "Why was Munch preoccupied with death?",
        answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch's</strong></a> mother died of <strong>tuberculosis</strong> when he was five, and his beloved sister Sophie died of the same disease when he was fourteen. He claimed, \"Sickness, insanity and death were the dark angels standing guard at my cradle.\""
      },
      {
        question: "What technique did Munch use for this print?",
        answer: "Though technically a <strong>lithograph</strong>, <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> created the image to resemble a woodcut. He drew the basic design in lithographic chalk, then brushed thick ink wash over it to create the solid black background that dominates the composition."
      }
    ]
  },
  {
    slug: "edvard-munch-sister-inger",
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this large portrait of his younger sister Inger in 1892, showing her standing face-on in a black and violet dress. She appears monumental, erect, her expression controlled yet guarded. Her hands clasp together at her stomach in a protective gesture. The pose feels constrained, the gaze thoughtful and introverted, revealing little of whatever lies behind that composed exterior.</p>

<p>Inger Munch was born in 1868 and would outlive her famous brother, dying in 1952. Unlike their sister Sophie, who succumbed to tuberculosis at fourteen, Inger remained healthy and became one of Oslo's first photographers to document the Akerselva river running through the city. She stayed close to Edvard throughout his life, one of the few stable relationships in an existence marked by anxiety and psychological turmoil.</p>

<p>The painting measures 172.5 by 122.5 centimeters, a substantial canvas that gives Inger's figure real presence. Munch renders the <strong>black and violet</strong> dress with careful attention to the dotted pattern, the somber palette matching his sister's reserved demeanor. The <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> purchased the work in 1899, just seven years after its completion, recognizing early that this quiet <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> stood among Munch's finest.</p>`,
    faqs: [
      {
        question: "Where can I see Inger in Black and Violet?",
        answer: "This portrait hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo. The museum purchased it in 1899, just seven years after <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> completed it."
      },
      {
        question: "Who was Inger Munch?",
        answer: "<strong>Inger Munch</strong> (1868-1952) was Edvard's younger sister. Unlike their sister Sophie who died young of tuberculosis, Inger lived a long life and became one of Oslo's first photographers to document the Akerselva river. She remained close to her brother throughout his troubled life."
      },
      {
        question: "How large is this painting?",
        answer: "The canvas measures 172.5 by 122.5 centimeters (approximately 68 by 48 inches), making it a substantial, near life-size <strong>portrait</strong>. The scale gives Inger's figure a monumental presence despite her reserved, introverted pose."
      },
      {
        question: "What style is this painting?",
        answer: "This work represents <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch's</strong></a> <strong>naturalist period</strong> in the early 1890s. The careful rendering of the patterned dress and controlled composition contrast with the more expressionistic works like The Scream that he would create shortly after."
      }
    ]
  },
  {
    slug: "edvard-munch-spring",
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted Spring in 1889, returning once again to the trauma that defined his childhood: his sister Sophie's death from tuberculosis at age fourteen. A sick girl sits by a window where flowers grow, her face pale, a bloody handkerchief in her hands. An older woman, likely an aunt, sits beside her in concern. Sunlight pours through the glass, an emblem of hope set against the desperation of the scene.</p>

<p>The painting measures 169 by 264 centimeters, a massive canvas that gave Munch room to demonstrate his command of light and atmosphere. Critics had attacked his earlier treatment of this subject, The Sick Child, as unfinished and unskilled. Spring was his answer, painted in a more accessible <strong>naturalist style</strong> that showcased his technical abilities without abandoning his deeply personal subject matter. The gamble worked. This painting helped secure him a state grant to study with Léon Bonnat in Paris.</p>

<p>Munch used a girl named Betzy Nielsen as his model, struck by her bloodless pallor and red hair as a powerful incarnation of Sophie. The <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> now holds this work, where it stands as perhaps Munch's last major attempt at <strong>Impressionist technique</strong> before he moved toward the raw expressionism of his most famous works.</p>`,
    faqs: [
      {
        question: "Where can I see Munch's Spring?",
        answer: "Spring is displayed at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo (now part of Nasjonalmuseet). The large canvas measures 169 by 264 centimeters, making it one of <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch's</strong></a> most ambitious early works."
      },
      {
        question: "What is the connection to Munch's sister Sophie?",
        answer: "<strong>Sophie Munch</strong> died of tuberculosis in 1877 at age fourteen. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard</strong></a> returned to this traumatic loss repeatedly throughout his career, painting versions of The Sick Child and Spring to process his grief and memory of her illness."
      },
      {
        question: "Why did Munch paint this after The Sick Child?",
        answer: "Critics attacked The Sick Child as unfinished and unskilled. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> painted Spring in a more polished <strong>naturalist style</strong> to prove his technical abilities. The strategy worked, helping him secure a state grant to study in Paris."
      },
      {
        question: "What does the spring light symbolize?",
        answer: "The <strong>sunlight</strong> streaming through the window where flowers grow represents hope amid illness. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> deliberately contrasts this bright, life-affirming light with the pale sick girl and her bloody handkerchief, creating tension between despair and renewal."
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
