const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Additional FAQs to append to existing ones (each artwork currently has 3, adding 2 more)
const additionalFaqs = {
  'adoration-magi-gentile': [
    { question: "What makes Gentile da Fabriano's Adoration of the Magi special?", answer: "<a href='/apps/masterpieces/artist/gentile-da-fabriano'><strong>Gentile da Fabriano</strong></a> created one of the most lavish altarpieces of the <a href='/apps/masterpieces/movement/renaissance'><strong>Early Renaissance</strong></a>. The gold leaf, rich fabrics, and crowded procession represent the <strong>International Gothic</strong> style at its peak. Every surface gleams with decorative detail, from the harnesses to the exotic animals." },
    { question: "How big is the Adoration of the Magi?", answer: "The main panel measures approximately <strong>300 cm × 282 cm</strong> (9 feet 10 inches × 9 feet 3 inches) including the elaborate Gothic frame with predella panels below and pointed arches above. It's displayed at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence." }
  ],

  'assumption-of-the-virgin-titian': [
    { question: "How big is the Assumption of the Virgin?", answer: "It's enormous: <strong>690 cm × 360 cm</strong> (22 feet 8 inches × 11 feet 10 inches), making it one of the largest altarpieces in Venice. <a href='/apps/masterpieces/artist/titian'><strong>Titian</strong></a> painted it for the high altar of the <a href='/apps/masterpieces/museum/basilica-dei-frari'><strong>Basilica dei Frari</strong></a> in Venice, where it still hangs." },
    { question: "What art movement is this painting part of?", answer: "It's a landmark of the <strong>Venetian High <a href='/apps/masterpieces/movement/renaissance'>Renaissance</a></strong>. Titian was only about 28 when he completed it in 1518. The dramatic upward composition, vibrant reds and golds, and emotional intensity established him as Venice's leading painter overnight." }
  ],

  'bedroom-in-arles': [
    { question: "How many versions of the Bedroom did Van Gogh paint?", answer: "<a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted <strong>three versions</strong>. The first (October 1888) is at the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam. The second is at the <a href='/apps/masterpieces/museum/art-institute-of-chicago'><strong>Art Institute of Chicago</strong></a>. The third is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a>." },
    { question: "Why does the room look distorted?", answer: "The room's <strong>trapezoidal shape</strong> was real, not artistic license. Van Gogh's bedroom at the Yellow House in Arles had irregular walls. He wanted the painting to express 'absolute restfulness' through simplified forms and bold, flat <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> and <a href='https://luxurywallart.com/collections/yellow-paintings' target='_blank' rel='noopener'><strong>yellow</strong></a> colors." }
  ],

  'dempsey-firpo': [
    { question: "What moment does this painting capture?", answer: "<a href='/apps/masterpieces/artist/george-bellows'><strong>George Bellows</strong></a> captured the moment <strong>Luis Ángel Firpo knocked Jack Dempsey out of the ring</strong> during their 1923 heavyweight bout at the Polo Grounds in New York. Dempsey fell into the press row, was pushed back, and won by knockout in the second round." },
    { question: "What style is Dempsey and Firpo?", answer: "It's <strong>American Realism</strong> with dynamic, almost expressionistic energy. Bellows was a member of the <strong>Ashcan School</strong>, which depicted gritty urban life. The painting is at the <a href='/apps/masterpieces/museum/whitney-museum'><strong>Whitney Museum of American Art</strong></a> in New York." }
  ],

  'flaming-june': [
    { question: "Why was Flaming June forgotten for decades?", answer: "After Frederic Leighton's death in 1896, Victorian academic painting fell out of fashion. The painting <strong>disappeared into obscurity</strong> and was reportedly found over a chimney piece in a house in the 1960s. A British art dealer bought it cheaply. It's now at the <strong>Museo de Arte de Ponce</strong> in Puerto Rico." },
    { question: "What art style does this represent?", answer: "It's late <strong>Victorian Classicism</strong>, also called Aesthetic Movement painting. Leighton prioritized beauty of form and color over narrative. The sleeping woman's <a href='https://luxurywallart.com/collections/orange-art' target='_blank' rel='noopener'><strong>orange</strong></a> drapery and graceful pose reference classical sculpture while the oleander plant behind her symbolizes both beauty and poison." }
  ],

  'george-washington-lansdowne': [
    { question: "Why is the Lansdowne portrait historically important?", answer: "<a href='/apps/masterpieces/artist/gilbert-stuart'><strong>Gilbert Stuart</strong></a> painted it in 1796, creating the <strong>definitive image of Washington</strong> as a statesman. It's a full-length portrait showing Washington in a gesture of oratory. Stuart painted multiple copies, and the image became the basis for the portrait on the US one-dollar bill." },
    { question: "Where can I see this painting?", answer: "The primary version is at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C. Stuart originally painted it for the Marquis of Lansdowne (hence the name), a British supporter of American independence. Several authorized copies exist in institutions across the United States." }
  ],

  'marriage-a-la-mode': [
    { question: "What is the Marriage A-la-Mode series about?", answer: "<a href='/apps/masterpieces/artist/william-hogarth'><strong>William Hogarth</strong></a> painted six scenes satirizing <strong>arranged aristocratic marriages</strong> motivated by money. The series follows a loveless marriage between a bankrupt earl's son and a merchant's daughter. It ends in adultery, murder, and suicide. The Tête à Tête shows the couple's boredom after a night apart." },
    { question: "Where can I see this painting?", answer: "The complete series of six paintings is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. Hogarth painted them around 1743. He intended the series as engravings first, paintings second. The satirical 'modern moral subjects' were a genre he essentially invented." }
  ],

  'midsummer-dance': [
    { question: "What does Midsummer Dance depict?", answer: "<a href='/apps/masterpieces/artist/anders-zorn'><strong>Anders Zorn</strong></a> painted a traditional Swedish <strong>Midsummer celebration</strong> in the village of Mora, Dalarna. Couples dance around a maypole in the soft light of the Nordic summer night. Zorn captured the scene with loose, confident brushwork that rivals the best <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> painting." },
    { question: "Where can I see Midsummer Dance?", answer: "It's at the <a href='/apps/masterpieces/museum/nationalmuseum-stockholm-sweden'><strong>Nationalmuseum</strong></a> in Stockholm, Sweden. Zorn painted it in 1897. He's Sweden's most internationally recognized painter, celebrated for his ability to capture light, water, and flesh with extraordinary fluency." }
  ],

  'the-city-leger': [
    { question: "What does The City depict?", answer: "<a href='/apps/masterpieces/artist/fernand-leger'><strong>Fernand Léger</strong></a> painted a <strong>fragmented urban landscape</strong> of geometric shapes, steel girders, staircases, and tiny human figures. The flat, brightly colored forms celebrate modern industrial life. Léger saw beauty in machinery and urban architecture that other artists ignored." },
    { question: "What art movement is this?", answer: "It's associated with <a href='/apps/masterpieces/movement/cubism'><strong>Cubism</strong></a> and Purism. Léger developed his own style called '<strong>Tubism</strong>' because of his preference for cylindrical, mechanical forms. The City (1919) bridges wartime Cubism and the machine-age aesthetics of the 1920s." }
  ],

  'the-dance-derain': [
    { question: "What style is The Dance?", answer: "<a href='/apps/masterpieces/artist/andre-derain'><strong>André Derain</strong></a> painted this in a bold, primitivist style influenced by both <a href='/apps/masterpieces/movement/fauvism'><strong>Fauvism</strong></a> and early Cubism. The flattened figures and earthy palette reflect his interest in African and Oceanic art, which many Parisian avant-garde artists were studying around 1906." },
    { question: "How does this relate to Matisse's Dance?", answer: "Derain and <strong>Matisse</strong> were close collaborators in the Fauvist movement. Both painted dance scenes, but Derain's version is darker and more angular. Matisse's famous Dance (1910) uses flowing curves and bright color, while Derain's approach is rougher and more geometric." }
  ],

  'immaculate-conception-murillo': [
    { question: "What style is this painting?", answer: "<a href='/apps/masterpieces/artist/bartolome-murillo'><strong>Bartolomé Esteban Murillo</strong></a> painted in the Spanish <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> style. This version (c. 1678) shows the Virgin Mary in a soft, idealized manner that made Murillo the most popular Spanish painter of the 17th century. His gentle, devotional approach contrasted with Velázquez's psychological realism." },
    { question: "Where can I see this painting?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid. Murillo painted <strong>over 20 versions</strong> of the Immaculate Conception throughout his career. This doctrine (that Mary was born without original sin) was especially popular in 17th-century Spain." }
  ],

  'merry-family': [
    { question: "What does The Merry Family depict?", answer: "<a href='/apps/masterpieces/artist/jan-steen'><strong>Jan Steen</strong></a> painted a <strong>chaotic household celebration</strong> where adults drink and smoke while children join in. A grandmother teaches a child to smoke a pipe. The Dutch phrase 'a Jan Steen household' still means a messy, disorderly home. The painting is a comic morality scene typical of <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> genre painting." },
    { question: "Where can I see this painting?", answer: "It's at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam. Steen painted it in 1668. A banner in the painting reads 'As the old ones sing, the young ones chirp,' a Dutch proverb meaning children imitate their parents' behavior, for better or worse." }
  ],

  'moneylender-wife': [
    { question: "What does The Moneylender and His Wife depict?", answer: "A <strong>money-changer weighs coins</strong> on a scale while his wife, holding a book of hours (a prayer book), glances at the gold. A convex mirror on the table reflects a window and a figure. The painting comments on the tension between <strong>worldly wealth and spiritual life</strong>. It's an early example of genre painting with moral undertones." },
    { question: "Where can I see this painting?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <strong>Quentin Matsys</strong> painted it in 1514. The painting influenced Dutch and Flemish genre painting for generations. The convex mirror is a clear reference to Van Eyck's Arnolfini Portrait, painted 80 years earlier." }
  ],

  'roses-heliogabalus': [
    { question: "What does The Roses of Heliogabalus depict?", answer: "<a href='/apps/masterpieces/artist/lawrence-alma-tadema'><strong>Lawrence Alma-Tadema</strong></a> painted the Roman emperor Elagabalus (Heliogabalus) <strong>smothering his dinner guests with rose petals</strong> dropped from a false ceiling. The ancient account says some guests suffocated. Alma-Tadema reportedly had fresh roses shipped from the Riviera weekly while painting this in 1888." },
    { question: "How big is the painting?", answer: "It measures <strong>132.7 cm × 214.4 cm</strong> (52.2 × 84.4 inches). The <a href='https://luxurywallart.com/collections/pink-wall-art' target='_blank' rel='noopener'><strong>pink</strong></a> cascade of rose petals is painted with obsessive botanical accuracy. Alma-Tadema was famous for his archaeological precision: every marble surface, fabric, and object is based on documented Roman sources." }
  ],

  'the-sin': [
    { question: "What does The Sin depict?", answer: "<a href='/apps/masterpieces/artist/franz-von-stuck'><strong>Franz von Stuck</strong></a> painted a <strong>femme fatale</strong> with a large serpent coiled around her body. The woman stares directly at the viewer from deep shadow. Only her face and torso are illuminated. The painting reflects the <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolist</strong></a> fascination with dangerous female sexuality and the biblical Eve." },
    { question: "How many versions did Von Stuck paint?", answer: "Von Stuck painted <strong>multiple versions</strong> of The Sin between 1893 and the early 1900s. He was obsessed with the subject. The most famous version is at the <a href='/apps/masterpieces/museum/alte-pinakothek'><strong>Neue Pinakothek</strong></a> in Munich. Von Stuck designed his own villa (now a museum) in Munich where he displayed his work." }
  ],

  'tower-blue-horses': [
    { question: "What happened to The Tower of Blue Horses?", answer: "The painting has been <strong>missing since 1945</strong>. It was confiscated by the Nazis as 'degenerate art' in 1937. Hermann Göring reportedly kept it, but it vanished at the end of World War II. Despite decades of searching, it has never been found. It may have been destroyed, hidden, or held in a private collection." },
    { question: "What style is this painting?", answer: "It's a key work of German <a href='/apps/masterpieces/movement/expressionism'><strong>Expressionism</strong></a> and the Der Blaue Reiter (Blue Rider) group. <strong>Franz Marc</strong> painted it in 1913 using <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> to represent spirituality and the masculine. Four horses stand stacked in a tower-like composition against a vibrant, abstract landscape." }
  ],

  'tribute-money': [
    { question: "Why is the Tribute Money art historically important?", answer: "<a href='/apps/masterpieces/artist/masaccio'><strong>Masaccio</strong></a> painted it around 1425 in the <a href='/apps/masterpieces/museum/brancacci-chapel'><strong>Brancacci Chapel</strong></a> in Florence. It's one of the first paintings to use <strong>single-point linear perspective</strong> and atmospheric perspective systematically. Masaccio was only about 25 when he painted it, and he died just two years later." },
    { question: "What does the scene depict?", answer: "Three moments from <strong>Matthew 17:24-27</strong> appear in one composition. Center: Jesus tells Peter where to find a coin. Left: Peter retrieves the coin from a fish's mouth. Right: Peter pays the tax collector. This '<strong>continuous narrative</strong>' technique (showing multiple moments in one scene) was common in early <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> painting." }
  ],

  'triumph-bacchus-ariadne': [
    { question: "What does the painting depict?", answer: "<a href='/apps/masterpieces/artist/annibale-carracci'><strong>Annibale Carracci</strong></a> painted the mythological <strong>wedding procession of Bacchus and Ariadne</strong> across the sky, surrounded by reveling satyrs and nymphs. It's the central panel of the Farnese Gallery ceiling in Rome, painted between 1597 and 1601. The dynamic composition and classical references set the standard for <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> ceiling painting." },
    { question: "Where can I see this fresco?", answer: "It's in the <a href='/apps/masterpieces/museum/palazzo-farnese'><strong>Palazzo Farnese</strong></a> in Rome, now the French Embassy. Public access is limited to guided tours that must be booked in advance. The entire ceiling program was hugely influential: Rubens, Bernini, and later Baroque artists all studied it closely." }
  ],

  'the-turkish-bath': [
    { question: "When did Ingres paint The Turkish Bath?", answer: "<a href='/apps/masterpieces/artist/jean-auguste-dominique-ingres'><strong>Ingres</strong></a> completed it in <strong>1862 at age 82</strong>, making it one of the most ambitious paintings by an artist so late in life. He'd been working on harem-themed nude compositions for decades. The circular (tondo) format gives it the feeling of peering through a keyhole." },
    { question: "Where can I see The Turkish Bath?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. The painting contains over <strong>25 nude women</strong> bathing, lounging, and playing music. Ingres based the scene on Lady Mary Wortley Montagu's letters describing Turkish bathhouses. Like the Grande Odalisque, it blends <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> technique with Romantic exoticism." }
  ],

  'view-dordrecht': [
    { question: "What does View of Dordrecht show?", answer: "<a href='/apps/masterpieces/artist/aelbert-cuyp'><strong>Aelbert Cuyp</strong></a> painted a golden, light-filled panorama of <strong>Dordrecht</strong>, his hometown, seen from across the Maas river. Boats dot the water and the city's Grote Kerk rises on the skyline. The warm, amber light that Cuyp is famous for bathes the entire scene." },
    { question: "What style is this painting?", answer: "It's <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> landscape painting. Cuyp was deeply influenced by <strong>Italianate light</strong>, painting Dutch scenes with the warm, golden glow of Mediterranean sunshine. His luminous landscapes later influenced English painters like Turner and Constable." }
  ],

  'view-of-toledo': [
    { question: "Why is View of Toledo art historically significant?", answer: "<a href='/apps/masterpieces/artist/el-greco'><strong>El Greco</strong></a> painted one of the <strong>first pure landscape paintings</strong> in Western art. Before this (c. 1596-1600), landscapes were almost always backgrounds for figures. El Greco made the stormy Spanish sky and dramatic terrain the subject itself. The painting is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>." },
    { question: "What style is View of Toledo?", answer: "It bridges <a href='/apps/masterpieces/movement/mannerism'><strong>Mannerism</strong></a> and proto-Expressionism. El Greco's elongated forms, livid <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> and grey palette, and swirling clouds create an emotionally charged vision. The city's topography is rearranged for dramatic effect. Expressionists and Cubists later claimed El Greco as a forerunner." }
  ],

  'violin-checkerboard': [
    { question: "What style is Violin and Checkerboard?", answer: "<a href='/apps/masterpieces/artist/juan-gris'><strong>Juan Gris</strong></a> was a leading figure in <strong>Synthetic <a href='/apps/masterpieces/movement/cubism'>Cubism</a></strong>. This 1913 painting builds a composition from overlapping flat planes of color and texture. Unlike Analytic Cubism (which broke objects apart), Synthetic Cubism assembled new forms from abstract shapes, collage, and decorative patterns." },
    { question: "How does this differ from Picasso's Cubism?", answer: "Gris brought a more <strong>orderly, geometric clarity</strong> to Cubism. Where <a href='/apps/masterpieces/artist/pablo-picasso'><strong>Picasso</strong></a> and Braque fragmented forms intuitively, Gris constructed them methodically. His colors are brighter and his compositions more legible. He's sometimes called the 'third Cubist' after Picasso and Braque." }
  ],

  'walk-on-beach': [
    { question: "What does Walk on the Beach depict?", answer: "<a href='/apps/masterpieces/artist/joaquin-sorolla'><strong>Joaquín Sorolla</strong></a> painted his wife <strong>Clotilde</strong> and their eldest daughter María walking along the beach at Valencia in 1909. Wind catches their white dresses and parasol. Sorolla captured the bright Mediterranean light and seaside atmosphere with rapid, confident brushwork." },
    { question: "What style is this painting?", answer: "It's Spanish <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>, though Sorolla preferred the term 'Luminism.' He was obsessed with <strong>sunlight on white fabric and skin</strong>. The <a href='https://luxurywallart.com/collections/coastal-decor' target='_blank' rel='noopener'><strong>coastal</strong></a> setting shows his ability to render light, sand, and water with dazzling freshness." }
  ],

  'washington-crossing-delaware': [
    { question: "Is the painting historically accurate?", answer: "Not really. <a href='/apps/masterpieces/artist/emanuel-leutze'><strong>Emanuel Leutze</strong></a> painted it in <strong>Düsseldorf, Germany</strong> in 1851 using the Rhine River as a reference. The flag shown didn't exist yet in 1776, the ice looks wrong for the Delaware, and the boat is too small. But the painting captured the <strong>spirit of determination</strong> that made it an American icon." },
    { question: "How big is Washington Crossing the Delaware?", answer: "It's massive: <strong>378.5 cm × 647.7 cm</strong> (12 feet 5 inches × 21 feet 3 inches). It's at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. Leutze painted it as inspiration for European democratic movements. The first version was damaged by fire; this is the second version." }
  ],

  'where-do-we-come-from': [
    { question: "Why did Gauguin consider this his masterpiece?", answer: "<a href='/apps/masterpieces/artist/paul-gauguin'><strong>Gauguin</strong></a> painted it in Tahiti in late 1897 while ill and suicidal. He intended it as his <strong>final artistic statement</strong> before attempting to take his own life. The mural-sized canvas reads right to left: birth, life, and death. He survived and later called it his greatest work." },
    { question: "How big is this painting?", answer: "It measures <strong>139.1 cm × 374.6 cm</strong> (about 4 feet 7 inches × 12 feet 3 inches). It's at the <strong>Museum of Fine Arts, Boston</strong>. The <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> composition uses flat areas of color and Polynesian imagery to address the most fundamental questions of human existence." }
  ],

  'white-roses-fantin': [
    { question: "What style is White Roses?", answer: "<a href='/apps/masterpieces/artist/henri-fantin-latour'><strong>Henri Fantin-Latour</strong></a> was a <strong>Realist painter</strong> known for his flower still lifes and group portraits. His roses are rendered with soft, luminous precision. Though he exhibited alongside the Impressionists, he never adopted their loose technique, preferring careful tonal modeling." },
    { question: "Why are Fantin-Latour's flower paintings significant?", answer: "His <a href='https://luxurywallart.com/collections/floral-art' target='_blank' rel='noopener'><strong>floral</strong></a> still lifes became hugely popular in England and influenced European flower painting for decades. He painted with a <strong>velvety softness</strong> that made each petal feel alive. His work bridged the gap between Dutch Golden Age still life tradition and modern painting." }
  ],

  'winter-landscape-skaters': [
    { question: "What does this painting show?", answer: "<a href='/apps/masterpieces/artist/hendrick-avercamp'><strong>Hendrick Avercamp</strong></a> painted a <strong>frozen canal or river</strong> filled with Dutch townspeople skating, playing kolf (an early form of golf), sledding, and socializing. Hundreds of tiny figures populate the icy scene. Avercamp specialized almost exclusively in winter landscapes and became known as 'de Stomme van Kampen' (the Mute of Kampen) because he was deaf and mute." },
    { question: "What art movement is this?", answer: "It's <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> painting, early 17th century. Avercamp's winter scenes captured a period known as the '<strong>Little Ice Age</strong>' when Dutch waterways froze regularly. His panoramic compositions, viewed from a high vantage point, influenced later Dutch landscape painters." }
  ],

  'woman-child-courtyard': [
    { question: "What style is this painting?", answer: "<a href='/apps/masterpieces/artist/pieter-de-hooch'><strong>Pieter de Hooch</strong></a> was a master of <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> genre painting. He's known for <strong>sunlit domestic interiors</strong> and courtyards with carefully rendered perspective. This painting shows his characteristic use of doorways and passages that lead the eye through successive spaces." },
    { question: "How does De Hooch compare to Vermeer?", answer: "Both painted quiet Dutch interiors, but De Hooch favored <strong>multiple rooms and outdoor spaces</strong> connected by doorways. <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer</strong></a> focused on single rooms with more refined light effects. De Hooch was actually more famous during their lifetimes. Vermeer's reputation only surpassed his in the 19th century." }
  ],

  'woman-reading-letter-metsu': [
    { question: "What style is this painting?", answer: "<a href='/apps/masterpieces/artist/gabriel-metsu'><strong>Gabriel Metsu</strong></a> painted in the <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> genre tradition. This is actually part of a <strong>pendant pair</strong> with 'Man Writing a Letter.' The two paintings were designed to hang together, telling a story of correspondence between lovers." },
    { question: "How does Metsu compare to Vermeer?", answer: "Both painted women reading letters in <strong>sunlit Dutch interiors</strong>. Metsu's version is more narrative and anecdotal, while <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer's</strong></a> are more meditative and formally composed. Metsu was highly regarded in his own time and commanded higher prices than Vermeer." }
  ],

  // Slug mismatch: demoiselles
  'demoiselles-avignon-picasso': [
    { question: "Why is Les Demoiselles d'Avignon considered revolutionary?", answer: "<a href='/apps/masterpieces/artist/pablo-picasso'><strong>Picasso</strong></a> shattered conventional perspective by showing <strong>five female figures from multiple viewpoints simultaneously</strong>. The two right-side faces were inspired by African masks. The angular, fractured forms broke every rule of traditional figure painting and opened the door to <a href='/apps/masterpieces/movement/cubism'><strong>Cubism</strong></a>." },
    { question: "Where can I see Les Demoiselles d'Avignon?", answer: "It's at the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York. Picasso painted it in 1907 but kept it hidden for years. Even his close friends were shocked. Matisse thought it was a joke. Braque said looking at it was like 'drinking kerosene.' It wasn't publicly exhibited until 1916." }
  ],
};

async function seed() {
  for (const [slug, newFaqs] of Object.entries(additionalFaqs)) {
    try {
      const artwork = await prisma.artwork.findUnique({
        where: { slug },
        select: { faqs: true }
      });

      if (!artwork) {
        console.error(`✗ Not found: ${slug}`);
        continue;
      }

      const existingFaqs = (artwork.faqs && Array.isArray(artwork.faqs)) ? artwork.faqs : [];
      const mergedFaqs = [...existingFaqs, ...newFaqs];

      await prisma.artwork.update({
        where: { slug },
        data: { faqs: mergedFaqs, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${slug} (${existingFaqs.length} → ${mergedFaqs.length} FAQs)`);
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
    }
  }
  await prisma.$disconnect();
}

seed();
