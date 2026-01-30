const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'paul-signac-saint-briac-courtyard-of-the-ville-hue': [
    { question: "What technique did Paul Signac use in Saint Briac, Courtyard of the Ville Hue?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Paul Signac</strong></a> painted this scene using <strong>Pointillism</strong>, applying small dots of pure color side by side. The technique creates vibrant optical mixing when viewed from a distance." },
    { question: "What does this painting depict?", answer: "It shows a <strong>courtyard scene</strong> in Saint-Briac-sur-Mer, a coastal town in Brittany, France. Signac visited this area multiple times during the 1880s, drawn to its light and architecture." },
    { question: "Where is this painting currently held?", answer: "This work is held in a <strong>private collection</strong>. Signac's Breton landscapes from the <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionist</strong></a> period remain highly sought after by collectors worldwide." }
  ],
  'paul-signac-still-life-with-a-book': [
    { question: "When did Paul Signac paint Still Life with a Book?", answer: "<a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> created this still life during his early career when he was developing his <strong>Pointillist technique</strong>. The composition reflects his methodical approach to color theory." },
    { question: "Where can I see this painting?", answer: "You can view it at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie in Berlin</strong></a>, Germany. The museum holds an extensive collection spanning European painting from the 13th to 18th centuries." },
    { question: "What movement does this work belong to?", answer: "It belongs to <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionism</strong></a>, a movement Signac co-founded with Georges Seurat. The <strong>still life genre</strong> gave Signac a controlled setting to experiment with color relationships." }
  ],
  'paul-signac-the-dining-room': [
    { question: "What is notable about The Dining Room by Paul Signac?", answer: "This <strong>domestic interior scene</strong> is one of <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac's</strong></a> most recognized early works. It shows a woman setting a table, painted entirely in the Pointillist dot technique with carefully planned color contrasts." },
    { question: "Where is The Dining Room displayed?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/kroeller-mueller-museum\"><strong>Kröller-Müller Museum</strong></a> in the Netherlands. The museum houses one of the world's finest collections of <strong>Neo-Impressionist</strong> paintings." },
    { question: "What style is this painting?", answer: "It's a prime example of <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionism</strong></a>, using tiny dots of <strong>complementary colors</strong> placed side by side. Signac applied scientific color theory to capture the soft light of an indoor scene." }
  ],
  'paul-signac-saint-briac-the-marker-le-cheval': [
    { question: "What does this Signac painting show?", answer: "It depicts the <strong>Le Cheval marker</strong>, a navigational landmark near Saint-Briac-sur-Mer in Brittany. <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> was drawn to coastal subjects throughout his career as a keen sailor." },
    { question: "What technique is used here?", answer: "Signac used <strong>Pointillism</strong>, placing small strokes of pure color to capture the <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionist</strong></a> approach to light. The coastal setting allowed him to explore blues, greens, and sandy tones." },
    { question: "Where is this painting located?", answer: "This work is in a <strong>private collection</strong>. Signac's Breton <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal scenes</strong></a> from the 1880s are among his earliest and most collectible works." }
  ],
  'paul-signac-the-road-to-gennevilliers': [
    { question: "What does The Road to Gennevilliers depict?", answer: "It shows a <strong>rural road</strong> leading to Gennevilliers, a suburb northwest of Paris. <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Signac</strong></a> captured the flat terrain and open sky typical of the Île-de-France landscape." },
    { question: "Where can I view this painting?", answer: "It's displayed at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds the world's largest collection of <strong>Impressionist and Post-Impressionist</strong> art." },
    { question: "What art movement does this belong to?", answer: "This painting is part of the <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionist</strong></a> movement. Signac's <strong>landscape compositions</strong> from this period show his shift from Impressionism to systematic color application." }
  ],
  'peder-severin-kroyer-women-of-concarneau': [
    { question: "What does Women of Concarneau depict?", answer: "<a href=\"/apps/masterpieces/artist/peder-severin-kroyer\"><strong>P.S. Krøyer</strong></a> painted women from the fishing town of Concarneau in Brittany, France. The scene captures <strong>daily working life</strong> with the natural light Krøyer became famous for rendering." },
    { question: "Where is this painting displayed?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun\"><strong>National Gallery of Denmark</strong></a> in Copenhagen. The museum holds Denmark's most important collection of <strong>Scandinavian art</strong>." },
    { question: "Why did Krøyer visit France?", answer: "Krøyer traveled to France to study <strong>plein air painting</strong> and the techniques of the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>. His time in Brittany shaped his approach to natural light and outdoor scenes." }
  ],
  'peder-severin-kroyer-the-hirschsprung-family': [
    { question: "Who is depicted in The Hirschsprung Family?", answer: "The painting shows <strong>Heinrich Hirschsprung</strong> and his family. Hirschsprung was a major Danish tobacco manufacturer and art collector whose collection became the <a href=\"/apps/masterpieces/museum/hirschsprung-collection-copenhagen-denmark\"><strong>Hirschsprung Collection</strong></a> museum." },
    { question: "Who painted this group portrait?", answer: "<a href=\"/apps/masterpieces/artist/peder-severin-kroyer\"><strong>P.S. Krøyer</strong></a> painted this <strong>group portrait</strong>, one of his most ambitious compositions. Krøyer was Denmark's leading painter and a master of capturing natural light in interior settings." },
    { question: "Where can I see this work?", answer: "It's displayed at the <a href=\"/apps/masterpieces/museum/hirschsprung-collection-copenhagen-denmark\"><strong>Hirschsprung Collection</strong></a> in Copenhagen. The museum itself grew from <strong>Hirschsprung's personal art collection</strong>, which he donated to the Danish state in 1902." }
  ],
  'summer-evening-skagen-beach': [
    { question: "What does Summer Evening at Skagen Beach show?", answer: "It depicts <a href=\"/apps/masterpieces/artist/peder-severin-kroyer\"><strong>Krøyer's</strong></a> wife Anna and fellow artist Marie Triepcke walking along <strong>Skagen's beach</strong> at dusk. The soft blue light of the Nordic summer evening defines the mood." },
    { question: "Where is this painting displayed?", answer: "You can see it at the <a href=\"/apps/masterpieces/museum/skagens-museum\"><strong>Skagens Museum</strong></a> in Denmark. The museum is dedicated to the <strong>Skagen Painters</strong>, a colony of Scandinavian artists who gathered at Denmark's northern tip." },
    { question: "Why is this painting famous?", answer: "It's considered a defining work of <strong>Scandinavian art</strong> and the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> movement in Denmark. Krøyer's ability to capture the unique <strong>blue hour light</strong> of Skagen made it iconic." }
  ],
  'delivery-of-the-keys': [
    { question: "What does The Delivery of the Keys depict?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> painted Christ handing the <strong>keys to heaven</strong> to Saint Peter. This biblical scene symbolizes the transfer of spiritual authority and the founding of the papacy." },
    { question: "Where is this fresco located?", answer: "It's on the wall of the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Sistine Chapel</strong></a> in Vatican City. Perugino painted it around 1481-1482 as part of a cycle depicting the <strong>life of Christ</strong>." },
    { question: "What makes this composition notable?", answer: "Perugino used precise <strong>linear perspective</strong> to create depth, with a central temple flanked by triumphal arches. This spatial arrangement influenced his student Raphael and shaped <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> composition." }
  ],
  'perugino-the-miracles-of-san-bernardino-the-healing-of-the-': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> depicted <strong>San Bernardino of Siena</strong> performing a miracle: healing the blind and deaf Riccardo Micuzio. It's part of a series illustrating the saint's miraculous deeds." },
    { question: "Where can I see this painting?", answer: "It hangs in the <a href=\"/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia, Italy. The gallery preserves Umbrian art from the <strong>13th through 19th centuries</strong>." },
    { question: "What style is this painting?", answer: "It reflects the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> style with clear spatial organization and <strong>balanced composition</strong>. Perugino's figures stand in an architectural setting that demonstrates his mastery of perspective." }
  ],
  'perugino-st-jerome-who-attends-two-unfairly-hanged': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> depicted <strong>Saint Jerome</strong> attending to two men who were unjustly hanged. The scene illustrates the saint's intervention and the theme of divine justice." },
    { question: "Where is this painting held?", answer: "It's in the collection of the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum holds several works by Perugino, reflecting his importance in <strong>Italian Renaissance</strong> painting." },
    { question: "What art movement does this belong to?", answer: "It belongs to the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> tradition. Perugino was a leading <strong>Umbrian painter</strong> whose graceful style and spatial clarity made him one of the most sought-after artists of his era." }
  ],
  'perugino-st-jerome-who-resurrected-the-bishop-andrea': [
    { question: "What miracle does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> portrayed <strong>Saint Jerome</strong> performing the miracle of resurrecting Bishop Andrea. This subject was part of a cycle depicting Jerome's most celebrated miracles." },
    { question: "Where can I view this painting?", answer: "It's housed at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, France. The painting was likely acquired during the Napoleonic campaigns that brought many <strong>Italian masterworks</strong> to France." },
    { question: "What period does this painting represent?", answer: "It's a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> work, showing Perugino's characteristic <strong>serene compositions</strong> and softly modeled figures. His approach directly influenced his most famous student, Raphael." }
  ],
  'perugino-the-adoration-of-the-magi': [
    { question: "What does Perugino's Adoration of the Magi show?", answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> painted the <strong>Three Wise Men</strong> presenting gifts to the infant Christ. The scene includes the Holy Family surrounded by attendants in a classically composed landscape." },
    { question: "Where is this painting displayed?", answer: "You can see it at the <a href=\"/apps/masterpieces/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia. The gallery holds major works from Perugino's career in his home region of <strong>Umbria</strong>." },
    { question: "What style characterizes this work?", answer: "It embodies the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> ideal of harmonious composition. Perugino arranged his figures with a <strong>gentle symmetry</strong> and luminous color palette that became his trademark." }
  ],
  'peter-paul-rubens-selfportrait-in-a-circle-of-friends-from-mantua': [
    { question: "Who is depicted in this painting?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> portrayed himself among friends he made during his time in <strong>Mantua, Italy</strong>. He served as court painter to the Duke of Mantua from 1600 to 1608, a formative period in his career." },
    { question: "Where can I see this painting?", answer: "It's held at the <a href=\"/apps/masterpieces/museum/wallrafrichartz-museum-cologne-germany\"><strong>Wallraf-Richartz Museum</strong></a> in Cologne, Germany. The museum houses a strong collection of <strong>Baroque art</strong> including several Rubens works." },
    { question: "Why is this self-portrait significant?", answer: "It's one of Rubens' earliest <strong>self-portraits</strong>, created during his Italian years. The group format reflects the social circles and humanist friendships that shaped <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> artistic culture." }
  ],
  'peter-paul-rubens-madonna-and-child-with-the-donors-alexandre-goubea': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> painted the <strong>Madonna and Child</strong> alongside donors Alexandre Goubeau and his wife Anne Antoni. Donor portraits were a common practice in Flemish religious painting." },
    { question: "Where is this painting held?", answer: "It's in the <a href=\"/apps/masterpieces/museum/musee-des-beauxarts-de-tours-tours-france\"><strong>Musée des Beaux-Arts de Tours</strong></a> in France. The museum's collection includes notable <strong>Flemish and Italian</strong> works." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> devotional painting with Rubens' typical <strong>warm color palette</strong> and dynamic composition. The inclusion of living donors alongside sacred figures follows a long Netherlandish tradition." }
  ],
  'peter-paul-rubens-the-fall-of-phaeton': [
    { question: "What myth does The Fall of Phaeton depict?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> painted the Greek myth of <strong>Phaeton</strong>, son of Helios, who lost control of the sun chariot and was struck down by Zeus's thunderbolt. The scene captures the moment of catastrophic descent." },
    { question: "Where is this painting displayed?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. Rubens reworked this painting at least twice, and <strong>X-ray analysis</strong> reveals significant changes beneath the surface." },
    { question: "What makes this composition notable?", answer: "The <strong>diagonal composition</strong> of falling horses and figures creates intense drama, typical of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> dynamism. Rubens used swirling movement and foreshortening to pull the viewer into the chaos." }
  ],
  'peter-paul-rubens-the-battle-of-the-amazons': [
    { question: "What does The Battle of the Amazons depict?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> painted a fierce battle between <strong>Greek warriors and Amazons</strong> on a bridge. The subject comes from ancient mythology, where Amazons were legendary female warriors." },
    { question: "Where is this painting located?", answer: "It's at <a href=\"/apps/masterpieces/museum/sanssouci-potsdam-germany\"><strong>Sanssouci</strong></a> in Potsdam, Germany. The palace was built as Frederick the Great's summer residence and houses an impressive <strong>art collection</strong>." },
    { question: "What style defines this work?", answer: "It's a masterwork of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting, filled with <strong>violent motion and energy</strong>. Rubens packed the composition with intertwined figures, creating a vortex of action centered on the bridge." }
  ],
  'peter-paul-rubens-study-for-an-equestrian-portrait-of-the-duke-of-le': [
    { question: "Who is the subject of this portrait?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> created this study for a portrait of the <strong>Duke of Lerma</strong>, a powerful Spanish statesman under King Philip III. The equestrian format conveyed political authority and military prowess." },
    { question: "Where is this study held?", answer: "This preparatory work is in the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The finished equestrian portrait hangs in the <strong>Prado in Madrid</strong>." },
    { question: "Why is this study significant?", answer: "It reveals Rubens' working process for a major <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> commission. The <strong>equestrian portrait</strong> genre held high prestige, and this study shows how Rubens planned the horse's dynamic pose." }
  ],
  'peter-paul-rubens-the-baptism-of-christ': [
    { question: "What does Rubens' Baptism of Christ depict?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> painted John the Baptist pouring water over <strong>Christ in the River Jordan</strong>. Angels attend the scene while the Holy Spirit descends, following the Gospel narrative." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious painting with Rubens' characteristic <strong>warm flesh tones</strong> and dramatic lighting. The composition builds upward from the water to the heavenly light above." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Rubens produced numerous <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious works</strong></a> throughout his career, many commissioned by churches and Catholic patrons across Europe." }
  ],
  'peter-paul-rubens-the-circumcision-of-christ': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> depicted the <strong>circumcision of the infant Christ</strong>, a subject drawn from the Gospel of Luke. The ceremony takes place in a temple setting with onlookers and attendants." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> work reflecting the <strong>Counter-Reformation emphasis</strong> on religious imagery. Rubens was the leading Catholic painter in Northern Europe during this period." },
    { question: "Where is this painting now?", answer: "It's held in a <strong>private collection</strong>. Rubens produced many altarpieces and religious works for <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> settings, especially for Jesuit churches in Antwerp." }
  ],
  'petrus-christus-st-eligius-as-a-goldsmith-showing-a-ring-to-the-en': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> painted <strong>Saint Eligius</strong> working as a goldsmith, showing a ring to a young engaged couple. The detailed workshop setting includes scales, coins, and jewelry displayed on shelves." },
    { question: "Where can I see this painting?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The painting is one of the museum's prized examples of <strong>Early Netherlandish</strong> art." },
    { question: "Why is this work notable?", answer: "It's one of the earliest paintings to show a <strong>commercial transaction</strong> in detail. The work blends religious symbolism with genre painting, a hallmark of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>." }
  ],
  'petrus-christus-the-annunciation': [
    { question: "What does Petrus Christus' Annunciation show?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> depicted the <strong>Angel Gabriel</strong> announcing to the Virgin Mary that she would bear the Son of God. The scene is set within a detailed Flemish interior." },
    { question: "Where is this painting displayed?", answer: "It's held at the <a href=\"/apps/masterpieces/museum/groeningemuseum\"><strong>Groeningemuseum</strong></a> in Bruges, Belgium. The museum preserves the finest collection of <strong>Flemish Primitive</strong> paintings in the world." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting with <strong>meticulous detail</strong> in textures and light. Christus inherited and adapted the techniques of Jan van Eyck, who died in Bruges in 1441." }
  ],
  'petrus-christus-the-virgin-and-child-enthroned-with-saints-jerome-': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> painted the <strong>Virgin and Child</strong> on a throne, flanked by Saints Jerome and Francis. This type of composition, called a sacra conversazione, was popular in <strong>15th-century devotional art</strong>." },
    { question: "Where can I view this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The museum houses an important collection spanning <strong>700 years of European art</strong>." },
    { question: "What movement is this associated with?", answer: "It belongs to the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>. Christus blended <strong>Flemish realism</strong> with Italian spatial ideas, creating a bridge between Northern and Southern European painting traditions." }
  ],
  'petrus-christus-madonna-with-the-child': [
    { question: "What does this Madonna painting show?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> portrayed the <strong>Virgin Mary holding the Christ Child</strong> in an intimate, devotional format. The painting reflects the Flemish tradition of small-scale religious panels for private worship." },
    { question: "Where is this painting held?", answer: "It's in the collection of the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, Spain. The Prado holds significant <strong>Flemish paintings</strong> acquired by Spanish monarchs who patronized Netherlandish artists." },
    { question: "What artistic tradition does this represent?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> work in the tradition established by Jan van Eyck. Christus continued the Bruges school's emphasis on <strong>luminous oil painting</strong> and fine detail." }
  ],
  'petrus-christus-madonna-and-child': [
    { question: "How does this Madonna and Child differ from Christus' other versions?", answer: "<a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> painted multiple versions of this subject, each with distinct <strong>compositional choices</strong>. This version reflects his mature style with softer modeling and more refined spatial depth." },
    { question: "Where can I see this painting?", answer: "It's housed at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. The museum holds one of Central Europe's finest collections of <strong>Old Master paintings</strong>." },
    { question: "What period does this work belong to?", answer: "It's from the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, when Bruges was a major center for <strong>oil painting</strong>. Christus worked in the city after van Eyck's death, becoming one of its leading painters." }
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
