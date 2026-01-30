const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'parmigianino-virgin-and-child': [
    { question: "What does this Virgin and Child show?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted the <strong>Virgin holding the Christ Child</strong> with his trademark elongated elegance. The smooth modeling and refined proportions show Mannerism at its most polished." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/courtauld-gallery-london\"><strong>Courtauld Gallery</strong></a> in London, which holds a distinguished collection of Old Master and Impressionist paintings." },
    { question: "Why did Parmigianino elongate his figures?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> stretched proportions to achieve <strong>ideal grace</strong> beyond what nature provides. Mannerist artists believed art should surpass nature, and elongation was one method of creating a superhuman beauty." }
  ],
  'parmigianino-madonna-with-saint-zacharias': [
    { question: "What does Madonna with Saint Zacharias depict?", answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted the <strong>Madonna and Child with St. Zacharias</strong> and other figures. The composition's refined elegance and cool palette mark it as a mature work of Italian Mannerism." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. The Uffizi holds several important <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> works." },
    { question: "Who was Saint Zacharias?", answer: "<strong>Zacharias</strong> (Zechariah) was the father of John the Baptist. His inclusion alongside the Madonna connects Old and New Testament narratives, a common practice in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> religious painting." }
  ],
  'paul-cezanne-the-four-seasons-summer': [
    { question: "What does The Four Seasons, Summer show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted <strong>Summer</strong> as part of a decorative Four Seasons series created early in his career. The work shows his initial academic approach before he developed the revolutionary structural style he's known for." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris. The Four Seasons panels were painted for his father's estate, the Jas de Bouffan." },
    { question: "How does this compare to Cézanne's later work?", answer: "This <strong>early decorative work</strong> is dramatically different from <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> mature paintings. He hadn't yet developed the structured brushwork, geometric simplification, and revolutionary approach to form that would make him the father of modern art." }
  ],
  'paul-cezanne-still-life-with-bread-and-eggs': [
    { question: "What does this still life show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> arranged <strong>bread and eggs</strong> on a table with a dark background. This early still life uses heavier paint and darker tones than his later work but already shows his interest in the solid structure of objects." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/cincinnati-art-museum-cincinnati-oh-us\"><strong>Cincinnati Art Museum</strong></a> in Ohio." },
    { question: "Why are Cézanne's still lifes important?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> still lifes revolutionized painting by treating <strong>everyday objects as geometric forms</strong>. His apples, bottles, and tabletops became the laboratory where he worked out the ideas that led to Cubism and modern abstraction." }
  ],
  'paul-cezanne-landscape-in-the-ile-de-france': [
    { question: "What does this landscape show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted the <strong>Île-de-France</strong> countryside near Paris. His structured brushstrokes build the landscape into interlocking planes of color, treating nature as architecture." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> landscapes command some of the highest prices in art history at auction." },
    { question: "How did Cézanne approach landscape?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> wanted to \"<strong>treat nature by the cylinder, the sphere, the cone</strong>.\" He built landscapes from parallel brushstrokes that simultaneously describe surface and suggest underlying geometric structure, laying the groundwork for Cubism." }
  ],
  'paul-cezanne-stove-in-the-atelier': [
    { question: "What does Stove in the Atelier show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted a <strong>stove in his studio</strong>, an intimate view of the artist's workspace. The dark, heavily painted surface reflects his early style, influenced by Courbet's thick, palette-knife application." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What was Cézanne's early style like?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> early paintings used <strong>dark tones, thick paint, and dramatic subjects</strong>. He gradually lightened his palette through contact with the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>, especially Pissarro, before developing his own structural approach." }
  ],
  'paul-cezanne-woman-with-parrot': [
    { question: "What does Woman with Parrot show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted a <strong>woman with a parrot</strong>, a subject with roots in 18th-century French painting. The dark palette and heavy application place it among his early works before his Impressionist period." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> early figure paintings are less well-known than his landscapes and still lifes but show his developing ambition." },
    { question: "How did Cézanne evolve as a painter?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> moved from <strong>dark, romantic early work</strong> through Impressionism to his mature structural style. Each phase built on the last, and his late paintings, reducing nature to essential forms, made him the bridge between 19th-century art and modernism." }
  ],
  'paul-cezanne-landscape-with-mill': [
    { question: "What does Landscape with Mill depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted a <strong>landscape featuring a mill</strong>, building the scene from structured brushstrokes that give equal weight to trees, buildings, and sky. Every element contributes to the painting's overall architecture." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted hundreds of landscapes, primarily in Provence and the Île-de-France." },
    { question: "What makes Cézanne's landscapes revolutionary?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> rejected both photographic realism and Impressionist spontaneity. He sought to reveal <strong>permanent structure beneath appearance</strong>, using directional brushstrokes that function like building blocks. Picasso and Braque built Cubism on this foundation." }
  ],
  'paul-cezanne-the-four-seasons-autumn': [
    { question: "What does The Four Seasons, Autumn show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted <strong>Autumn</strong> as part of his youthful Four Seasons decorative panels. The allegorical figure style reflects academic conventions he would later abandon entirely." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris, alongside the other panels from the series." },
    { question: "When did Cézanne paint the Four Seasons?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted these panels around <strong>1860-61</strong>, when he was barely 20. They decorated his father's house in Aix-en-Provence and represent his most conventional, academic moment before he found his own radical path." }
  ],
  'paul-cezanne-the-judgement-of-paris': [
    { question: "What mythological scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> depicted the <strong>Judgement of Paris</strong>, where the Trojan prince chose Venus as the most beautiful goddess. The mythological subject is unusual for Cézanne, belonging to his early experimental period." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> mythological works are rare and mostly from his youth." },
    { question: "Did Cézanne paint many mythological subjects?", answer: "Rarely. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> explored <strong>mythological and romantic subjects</strong> early on but soon turned to landscape, still life, and bathers. His mature work dealt with form and structure rather than narrative." }
  ],
  'paul-cezanne-portrait-of-a-man': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted a <strong>male portrait</strong> with the same structural approach he brought to landscapes: the face built from planes of color rather than smooth modeling." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted relatively few portraits compared to his landscape and still life output." },
    { question: "How did Cézanne approach portraiture?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> famously required <strong>over 100 sittings</strong> for some portraits. He treated faces the same way he treated apples: as solid forms to be analyzed through color and structure. His portraits can feel monumental and almost architectural." }
  ],
  'paul-cezanne-seascape': [
    { question: "What does Cézanne's Seascape show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted the <strong>Mediterranean coast</strong> with his structured brushwork, treating the sea and sky as interlocking planes of blue and green. Even fluid water becomes solid and architectural under his hand." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> coastal views are less common than his Provençal landscapes." },
    { question: "Did Cézanne paint many seascapes?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted the sea occasionally, primarily around <strong>L'Estaque</strong> near Marseille. These coastal views show how he applied his structural methods to water and atmospheric space." }
  ],
  'paul-cezanne-the-kiss-of-the-muse': [
    { question: "What does The Kiss of the Muse depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted a <strong>muse kissing an artist</strong>, a romantic, allegorical subject from his early period. The dark palette and imaginative theme reflect the influence of Delacroix and Romantic painting." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "How does this relate to Cézanne's mature work?", answer: "It's almost unrecognizable as <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a>. These <strong>early Romantic works</strong> show an artist deeply influenced by Delacroix's passion before he stripped away narrative and emotion to focus on the pure structure of visual perception." }
  ],
  'paul-cezanne-landscape': [
    { question: "What does this landscape show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted a <strong>landscape</strong> with his characteristic method: parallel brushstrokes building form through color rather than line. Each stroke simultaneously describes what's there and creates pictorial structure." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> produced landscapes prolifically, especially of the area around Aix-en-Provence." },
    { question: "Why is Cézanne called the father of modern art?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> showed that painting could <strong>reorganize visual reality</strong> rather than just copy it. His method of building pictures from color patches inspired Cubism, and his idea that art should reveal structure beneath appearance influenced virtually every modern art movement." }
  ],
  'paul-cezanne-the-four-seasons-spring': [
    { question: "What does The Four Seasons, Spring show?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted <strong>Spring</strong> as an allegorical female figure, part of his youthful decorative panels. The conventional approach bears little resemblance to the radical painting he would later produce." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris, with the other Four Seasons panels." },
    { question: "What happened to these decorative panels?", answer: "The panels decorated the <strong>Jas de Bouffan</strong>, <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne's</strong></a> family estate near Aix. When the property was sold after his father's death, the panels were removed and eventually entered public collections." }
  ],
  'paul-delaroche-the-temptation-of-saint-anthony': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a> painted <strong>St. Anthony</strong> beset by temptations in the desert. The dramatic lighting and emotional intensity reflect Delaroche's skill at bringing historical and religious subjects to vivid life." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London, known for its fine 18th and 19th-century French painting." },
    { question: "What is Delaroche known for?", answer: "<a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Paul Delaroche</strong></a> was a leading French <strong>history painter</strong> who bridged Romanticism and academic art. His dramatic scenes of English and French history, painted with meticulous realism, made him enormously popular in the 1830s-40s." }
  ],
  'paul-delaroche-resting-on-the-banks-of-the-tiber': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a> painted figures <strong>resting by the Tiber River</strong> in Rome. The Italian setting reflects his time in Rome, where he absorbed classical art and Mediterranean landscape." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. Russian collectors were enthusiastic patrons of French academic painting." },
    { question: "Did Delaroche spend time in Italy?", answer: "Yes. <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a> traveled to <strong>Italy</strong> multiple times and spent his final years in Rome. The Italian landscape and classical heritage influenced his later work, which became more contemplative than his earlier dramatic history paintings." }
  ],
  'paul-delaroche-the-children-of-edward': [
    { question: "What historical scene does this depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a> painted the <strong>Princes in the Tower</strong>: the young sons of Edward IV, imprisoned and likely murdered in the Tower of London in 1483. The two frightened boys huddle together, awaiting an uncertain fate." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's one of <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche's</strong></a> most famous and reproduced paintings." },
    { question: "Why was this painting so popular?", answer: "The image of <strong>two innocent children</strong> facing a terrible fate struck a deep emotional chord with 19th-century audiences. <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche's</strong></a> meticulous realism made the historical scene feel immediate and personal, turning history into visceral drama." }
  ],
  'paul-gauguin-the-seine-at-the-pont-d39iena': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted the <strong>Seine at the Pont d'Iéna</strong> in Paris, an early work from his Impressionist period. Before Tahiti, he painted Parisian scenes influenced by Pissarro and the Impressionist circle." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "What was Gauguin's early career like?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> started as a <strong>stockbroker who painted on weekends</strong>. He exhibited with the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> in the early 1880s before abandoning his career, family, and eventually Europe to paint in the South Pacific." }
  ],
  'paul-gauguin-the-seine-opposite-the-wharf-de-passy': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted a <strong>view of the Seine</strong> near Passy, a Parisian neighborhood. The muted palette and careful observation show his debt to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> during his formative years." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> early Parisian works are valued for documenting his artistic evolution." },
    { question: "How does this differ from Gauguin's famous work?", answer: "This quiet <strong>Parisian riverscape</strong> is worlds away from the bold colors and Polynesian subjects that made <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> famous. It shows how radically he transformed his art over the following decade." }
  ],
  'paul-gauguin-tree-in-the-farm-yard': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted a <strong>tree in a farmyard</strong>, a rural subject reflecting his time painting in the French countryside before his Tahitian voyages. The natural subject matter shows Impressionist and early Post-Impressionist influences." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> French-period landscapes are less famous but show his developing sense of color." },
    { question: "Where did Gauguin paint before Tahiti?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted in <strong>Paris, Brittany, Provence, and Martinique</strong> before departing for Tahiti in 1891. His Brittany period was particularly important, where he developed the bold outlines and flat color of <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>." }
  ],
  'paul-gauguin-the-seine-in-paris': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted <strong>the Seine in Paris</strong>, one of several early riverscapes from his amateur period. The work demonstrates competent Impressionist technique before his dramatic artistic transformation." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> early works are collected as documents of his remarkable artistic journey." },
    { question: "When did Gauguin decide to become a full-time artist?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> left his <strong>banking career in 1883</strong> to paint full-time, a decision that caused his marriage to collapse. His willingness to sacrifice everything for art became central to his legend and to the Romantic idea of the artist." }
  ],
  'paul-gauguin-still-life-with-oysters': [
    { question: "What does Still Life with Oysters show?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> arranged <strong>oysters</strong> in a still life composition. Even in this conventional subject, he was developing the bold color sense and simplified forms that would later distinguish his <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/virginia-museum-of-fine-arts-richmond-va-us\"><strong>Virginia Museum of Fine Arts</strong></a> in Richmond." },
    { question: "Did Gauguin paint many still lifes?", answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted still lifes throughout his career, from early <strong>Impressionist arrangements</strong> to bold Tahitian compositions with tropical fruit and flowers. The genre let him experiment with color relationships at every stage of his development." }
  ],
  'paul-signac-the-milliner': [
    { question: "What does The Milliner depict?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> painted a <strong>hat-maker at work</strong> using his Pointillist technique: tiny dots of pure color placed side by side to blend optically. The modern subject and scientific color method define Neo-Impressionism." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/eg-b252hrle-foundation-z252rich-switzerland\"><strong>E.G. Bührle Foundation</strong></a> in Zürich, Switzerland." },
    { question: "What is Signac known for?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Paul Signac</strong></a> was a leading <strong>Neo-Impressionist</strong> who developed Pointillism alongside Seurat. After Seurat's death, Signac became the movement's principal theorist and practitioner, championing the systematic application of color theory." }
  ],
  'paul-signac-saint-brac-le-bechet': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> painted <strong>Saint-Briac</strong>, a Breton coastal village, using his Pointillist dot technique. The shimmering light on water and sky demonstrates how separated color can create luminous atmospheric effects." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> painted extensively along the French coast, and his harbor and seaside views are among his most sought-after works." },
    { question: "Why did Signac paint harbors?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> was an avid <strong>sailor</strong> who traveled the French coast by boat. Harbors, with their reflected light, colorful boats, and shimmering water, provided ideal subjects for his Pointillist technique of building images from dots of pure color." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
