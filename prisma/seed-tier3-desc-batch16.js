const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'david-teniers-younger-the-musette-player': [
    { question: "Where is The Musette Player?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The Louvre holds a strong collection of Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>musician playing a musette</strong> (a type of bagpipe). Teniers painted musicians, drinkers, and card players in tavern settings with polished technique and gentle humor." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> created this genre scene. He produced over <strong>2,000 paintings</strong> and was court painter to Archduke Leopold Wilhelm in Brussels." }
  ],
  'david-teniers-younger-smokers-in-an-interior': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>men smoking in a tavern interior</strong>. Pipe smoking was a novelty in 17th-century Europe, and Flemish painters like Teniers and <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> made it a popular genre subject." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> (1610-1690) created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre scene. His tavern interiors are more refined than Brouwer's rougher versions, reflecting his higher social status." }
  ],
  'fall-rebel-angels-beccafumi': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/pinacoteca-siena\"><strong>Pinacoteca Nazionale di Siena</strong></a>, the main art museum of Siena, Italy." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>rebel angels falling from heaven</strong>, cast down by the Archangel Michael. Beccafumi painted the tumbling figures with dramatic foreshortening and flickering, iridescent color." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/domenico-beccafumi\"><strong>Domenico Beccafumi</strong></a> created this in 1528. He was Siena's greatest <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> painter, known for <strong>unusual color harmonies and ecstatic, twisting figures</strong>." }
  ],
  'domenico-beccafumi-the-miraculous-communion-of-saint-catherine-of-sie': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/getty-center\"><strong>Getty Center</strong></a> in Los Angeles." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Saint Catherine of Siena receiving communion miraculously</strong>. Catherine is Siena's patron saint, and Beccafumi painted several episodes from her life for local churches." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/domenico-beccafumi\"><strong>Domenico Beccafumi</strong></a> created this <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> panel. His <strong>glowing color and spiritual intensity</strong> made him the ideal painter for Siena's deeply devotional artistic culture." }
  ],
  'domenico-beccafumi-saint-catherine-of-siena-receiving-the-stigmata': [
    { question: "Where is this painting?", answer: "This work is also at the <a href=\"/apps/masterpieces/museum/getty-center\"><strong>Getty Center</strong></a> in Los Angeles, paired with its companion panel of Catherine's communion." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Saint Catherine receiving the stigmata</strong>, the wounds of Christ. Beccafumi painted the mystical moment with ecstatic light effects and the elongated proportions typical of <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>." },
    { question: "Who was Beccafumi?", answer: "<a href=\"/apps/masterpieces/artist/domenico-beccafumi\"><strong>Domenico Beccafumi</strong></a> (1486-1551) was Siena's leading painter. His <strong>iridescent palette and visionary compositions</strong> stand apart from the more rational art of contemporary Florence and Rome." }
  ],
  'domenico-ghirlandaio-st-barbara-crushing-her-infidel-father': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>Saint Barbara triumphing over her pagan father</strong>, who tried to kill her for converting to Christianity. It's a dramatic subject from early Christian hagiography." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/domenico-ghirlandaio\"><strong>Domenico Ghirlandaio</strong></a> created this panel. He was one of Florence's busiest <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painters and the <strong>teacher of the young Michelangelo</strong>." },
    { question: "What is Ghirlandaio known for?", answer: "Ghirlandaio is best known for his <strong>fresco cycles in Santa Maria Novella and the Sistine Chapel</strong>. His workshop trained Michelangelo, and his detailed, narrative style documents Florentine Renaissance life." }
  ],
  'dosso-dossi-sacra-conversazione': [
    { question: "What does Sacra Conversazione depict?", answer: "A \"sacred conversation\" shows the <strong>Madonna and Child with saints in an informal grouping</strong>. Dossi painted this popular devotional format with the rich color and atmospheric landscape typical of Ferrarese painting." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/dosso-dossi\"><strong>Dosso Dossi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. He was court painter to the Este family in Ferrara, known for <strong>vivid color, poetic landscapes, and mythological subjects</strong>." },
    { question: "What style did Dossi work in?", answer: "Dossi blended <strong>Venetian color with Ferrarese fantasy</strong>. His landscapes glow with an almost magical light, influenced by Giorgione and Titian but with a dreamlike quality uniquely his own." }
  ],
  'dosso-dossi-saint-george': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/getty-center\"><strong>Getty Center</strong></a> in Los Angeles." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Saint George</strong>, the dragon-slaying knight saint. Dossi renders the subject with rich Venetian-influenced color and the atmospheric landscape that defines his Ferrarese style." },
    { question: "Who was Dosso Dossi?", answer: "<a href=\"/apps/masterpieces/artist/dosso-dossi\"><strong>Dosso Dossi</strong></a> (c. 1490-1542) was the leading <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter of Ferrara. The poet Ariosto mentioned him alongside Michelangelo and Raphael in <strong>Orlando Furioso</strong>." }
  ],
  'dosso-dossi-the-three-ages-of-man': [
    { question: "Where is The Three Ages of Man?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>three figures representing youth, maturity, and old age</strong>. This allegorical subject was popular in Renaissance art, and Dossi treats it with his characteristic <strong>rich color and poetic mood</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/dosso-dossi\"><strong>Dosso Dossi</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> allegory. His style combines <strong>Giorgione's atmospheric mystery</strong> with the vibrant color of his native Ferrara." }
  ],
  'duccio-madonna-and-child-fragment': [
    { question: "Where is this fragment displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. Even as a fragment, it's a precious survival from the dawn of Italian painting." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/duccio\"><strong>Duccio di Buoninsegna</strong></a> (c. 1255-1319) created this work. He was Siena's greatest medieval painter and a founder of the Italian painting tradition alongside Giotto in Florence." },
    { question: "What style is this painting?", answer: "It bridges <strong>Byzantine icon painting and early Italian naturalism</strong>. Duccio softened rigid Byzantine formulas with gentle emotion and flowing line, creating a distinctly Sienese style that influenced painting for over a century." }
  ],
  'eastman-johnson-the-counterfeiters': [
    { question: "Where is The Counterfeiters?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/american-museum-of-western-art-anschutz-collection\"><strong>American Museum of Western Art</strong></a> (Anschutz Collection) in Denver, Colorado." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>men engaged in counterfeiting</strong>, a criminal activity that was widespread in 19th-century America before standardized currency. Johnson painted it as a dramatic narrative genre scene." },
    { question: "Who painted The Counterfeiters?", answer: "<a href=\"/apps/masterpieces/artist/eastman-johnson\"><strong>Eastman Johnson</strong></a> created this work. He was one of America's leading <strong>genre and portrait painters</strong> in the mid-19th century, sometimes called \"the American Rembrandt.\"" }
  ],
  'eastman-johnson-the-card-players': [
    { question: "What does The Card Players depict?", answer: "The scene shows <strong>men playing cards</strong>, a classic genre subject. Johnson painted American daily life with warmth and careful observation, from parlor games to maple sugar camps." },
    { question: "Who painted The Card Players?", answer: "<a href=\"/apps/masterpieces/artist/eastman-johnson\"><strong>Eastman Johnson</strong></a> (1824-1906) created this work. He studied in Düsseldorf, The Hague, and Paris before establishing himself as a leading <strong>American genre painter</strong>." },
    { question: "What style did Johnson work in?", answer: "Johnson painted in a <strong>realist style</strong> influenced by Dutch Old Masters and the Düsseldorf school. His warm palette and intimate domestic subjects give his work a distinctly <strong>American character</strong>." }
  ],
  'edgar-degas-woman-on-a-sofa': [
    { question: "Where is Woman on a Sofa?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. The museum holds an important collection of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> art." },
    { question: "What does this painting depict?", answer: "The painting shows a <strong>woman reclining on a sofa</strong>. Degas captured private, unposed moments of women at rest, creating compositions that feel candid rather than arranged." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this scene. He's best known for ballet dancers, but his paintings of <strong>women in domestic settings</strong> are equally important to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." }
  ],
  'edgar-degas-mary-cassatt-at-the-louvre': [
    { question: "Where is this work displayed?", answer: "This print is at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>. It's one of Degas's most celebrated works on paper." },
    { question: "What does this work depict?", answer: "The scene shows <strong>Mary Cassatt viewing art at the Louvre</strong>, leaning on her umbrella. Degas depicted his fellow <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> as a modern, independent woman in a public space." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this print. He and <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> had a close artistic friendship, influencing each other's work on <strong>printmaking and modern life subjects</strong>." }
  ],
  'edgar-degas-madame-gobillard-yves-morisot': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Who is depicted?", answer: "The subject is <strong>Yves Morisot (Madame Gobillard)</strong>, sister of painter <a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a>. Degas was close to the Morisot family and painted several members." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work. His portraits of friends and fellow artists form some of his most <strong>psychologically penetrating</strong> work within <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." }
  ],
  'edgar-degas-portrait-of-a-lady-in-grey': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds several Degas works." },
    { question: "What does this portrait show?", answer: "The painting depicts a <strong>woman wearing grey</strong>. Degas's portraits avoid flattery, instead capturing his subjects with <strong>unflinching directness and unconventional poses</strong>." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> (1834-1917) created this work. Though associated with <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, he preferred to call himself a <strong>Realist</strong> and focused on drawing over plein-air color." }
  ],
  'edgar-degas-landscape-at-valerysursomme': [
    { question: "Where is this landscape?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>landscape at Valery-sur-Somme</strong> in northern France. Degas rarely painted pure landscapes, making this work an unusual example of his engagement with the <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>genre</strong></a>." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work. Unlike Monet or Pissarro, he was primarily a <strong>figure painter</strong> who worked mostly indoors, making his landscapes rare and distinctive." }
  ],
  'edgar-degas-study-for-the-medieval-war-scene': [
    { question: "What is this study for?", answer: "This 1858 drawing is a study for <strong>Scene of War in the Middle Ages</strong>, one of Degas's early history paintings. Before turning to modern life, he trained in the classical tradition of historical subjects." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> drew this at age 24. His early <strong>classical training</strong> gave him the draftsmanship that underpins even his most spontaneous-looking <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> works." },
    { question: "Why did Degas paint historical subjects?", answer: "Degas studied at the École des Beaux-Arts and spent years in Italy copying Old Masters. <strong>History painting was the academic pinnacle</strong>, and his early ambition was to succeed in this traditional genre before modern life captured his attention." }
  ],
  'edgar-degas-self-portrait-in-a-soft-hat': [
    { question: "Where is this self-portrait?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/clark-art-institute\"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts. The Clark holds an outstanding collection of French <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> art." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> portrayed himself wearing a soft hat. His self-portraits from the 1850s-60s show a <strong>serious young artist</strong> before he found his signature subjects of dancers and modern Paris." },
    { question: "What style is this painting?", answer: "This early work reflects Degas's <strong>classical training</strong> more than his later Impressionist style. The careful modeling and dark palette show his study of Rembrandt and Ingres before he embraced modern subjects." }
  ],
  'edgar-degas-woman-having-her-hair-combed': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman having her hair combed</strong> by an attendant. Degas painted women at their toilette repeatedly in the 1880s, capturing private grooming rituals from unexpected angles." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this in 1886. His <strong>bather and toilette series</strong> showed women in unguarded, natural poses that challenged traditional nude painting." },
    { question: "What style is this painting?", answer: "It's late <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Degas used <strong>pastel and unusual viewpoints</strong> to make these intimate scenes feel voyeuristic yet respectful, as if the viewer has glimpsed an unposed moment." }
  ],
  'edgar-degas-the-racecourse-amateur-jockeys': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>amateur jockeys at the racecourse</strong>. Horse racing was one of Degas's lifelong subjects, alongside ballet and modern Parisian life. He painted the tension before the race as much as the action." },
    { question: "Who painted this racecourse scene?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work. His <strong>racecourse paintings</strong> combine his love of movement and horses with the cropped, asymmetric compositions inspired by Japanese prints and photography." }
  ],
  'edgar-degas-ukrainian-dancers': [
    { question: "What does Ukrainian Dancers depict?", answer: "The painting shows <strong>dancers in Ukrainian costume</strong>. While best known for ballet, Degas also painted folk and theatrical dancers, drawn to the color and movement of performance in all forms." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this late work. His interest in <strong>dance extended beyond ballet</strong> to folk traditions and theatrical performances." },
    { question: "What style is this painting?", answer: "It's late <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. As Degas's eyesight declined, his work became <strong>bolder in color and freer in handling</strong>, with thick pastel strokes replacing the precise draftsmanship of his earlier years." }
  ],
  'edgar-degas-still-life-with-lizard': [
    { question: "What does this painting depict?", answer: "The painting shows a <strong>still life arrangement including a lizard</strong>. It's an unusual subject for Degas, who rarely painted still lifes, preferring figures in motion and modern urban scenes." },
    { question: "Who painted this still life?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this rare still life. He painted fewer than a dozen still lifes in his entire career, making examples like this <strong>highly unusual within his output</strong>." },
    { question: "What is Degas known for?", answer: "Degas is famous for painting <strong>ballet dancers, racehorses, and women bathing</strong>. He exhibited with the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> but preferred the label Realist, emphasizing drawing and composition over plein-air color." }
  ],
  'edgar-degas-woman-having-a-bath': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman bathing</strong>, painted from above in 1890. Degas's bather series used radical viewpoints to show the body in natural, unposed positions." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this in 1890. His bathers caused controversy at the 1886 <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> exhibition. Critics debated whether the images were voyeuristic or honestly observational." },
    { question: "What technique did Degas use?", answer: "Degas increasingly worked in <strong>pastel over monotype</strong> for his bather series. The chalky pastel allowed him to build rich color and texture while working quickly, suiting his <strong>declining eyesight</strong> in later years." }
  ],
  'edgar-degas-the-festival-of-the-owner': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "What does this painting depict?", answer: "The scene captures a <strong>festive gathering or celebration</strong>. Degas painted moments of social ritual and entertainment with his trademark asymmetric compositions and attention to human gesture." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> (1834-1917) created this painting. He participated in seven of the eight <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> exhibitions, more than any artist except Pissarro." }
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
