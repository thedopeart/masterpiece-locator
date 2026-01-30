const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'juan-de-juanes-retrato-de-un-caballero-santiaguista': [
    { question: "Who is the knight in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> painted an unidentified <strong>Knight of the Order of Santiago</strong>, one of Spain's most prestigious military-religious orders. The red cross of Santiago on his chest marks his membership." },
    { question: "Where is this portrait displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds the largest collection of <a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes's</strong></a> work." },
    { question: "Did Juan de Juanes paint many portraits?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> was primarily a <strong>religious painter</strong>, so secular portraits like this are relatively rare in his output. When he did paint portraits, he brought the same polished precision he applied to altarpieces." }
  ],
  'juan-de-juanes-san-esteban-conducido-al-martirio': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> painted <strong>St. Stephen being led to his martyrdom</strong>. It's part of a cycle of paintings depicting scenes from the saint's life, originally created for a Valencian church." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, alongside other panels from the same <strong>St. Stephen series</strong>." },
    { question: "How does this fit with the other Stephen paintings?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> created a <strong>narrative cycle</strong> following Stephen from preaching to execution. Each panel advances the story, and together they formed a complete visual telling of the saint's life and death." }
  ],
  'juan-de-juanes-la-virgen-sedente': [
    { question: "What does La Virgen, Sedente show?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> painted the <strong>seated Virgin Mary</strong> in a devotional format. The gentle pose and idealized features reflect his debt to Raphael's Madonnas, adapted for Spanish religious taste." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. <a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes's</strong></a> Marian images were hugely popular in Counter-Reformation Spain." },
    { question: "Why was Juan de Juanes compared to Raphael?", answer: "His <strong>soft modeling</strong>, balanced compositions, and idealized faces closely echo <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> Italian masters. <a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> absorbed these influences so thoroughly that contemporaries called him the \"Spanish Raphael.\"" }
  ],
  'juan-de-valdes-leal-sic-transit-gloria-mundi-the-end-of-worldly-glory': [
    { question: "What does Sic Transit Gloria Mundi mean?", answer: "It means \"<strong>thus passes the glory of the world</strong>.\" <a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> painted a vanitas scene showing death triumphing over worldly possessions, power, and knowledge. It's one of the most powerful memento mori paintings in Spanish art." },
    { question: "Where is this painting displayed?", answer: "It's in the <a href=\"/apps/masterpieces/museum/hospital-de-la-caridad-seville-spain\"><strong>Hospital de la Caridad</strong></a> in Seville, a charitable institution where it was designed to remind visitors of mortality and the importance of charity." },
    { question: "Why is this painting so striking?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> depicted <strong>decomposing corpses</strong> alongside symbols of earthly power with brutal directness. Murillo reportedly said no one could look at the painting without holding their nose. It's Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> at its most confrontational." }
  ],
  'juan-de-valdes-leal-virgin-of-the-immaculate-conception-with-sts-andre': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> painted the <strong>Immaculate Conception</strong> of the Virgin Mary flanked by Saints Andrew and John the Baptist. The Immaculate Conception was a particularly important doctrine in 17th-century Spain." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museum-of-fine-arts-of-seville-seville-spain\"><strong>Museum of Fine Arts of Seville</strong></a>, the artist's home city. Seville was a major center of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting in Spain." },
    { question: "What is Valdés Leal known for?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> was a leading <strong>Sevillian Baroque</strong> painter known for dramatic, emotionally intense religious works. His vanitas paintings are among the most visceral in European art, though he also produced conventional devotional images." }
  ],
  'juan-de-valdes-leal-the-conversion-and-baptism-of-st-augustine-by-st-a': [
    { question: "What scene does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> depicted <strong>St. Ambrose baptizing St. Augustine</strong>, a pivotal moment in Christian history. Augustine's conversion from pagan philosophy to Christianity was one of the most celebrated events in Catholic tradition." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri. Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting is well represented in American museum collections." },
    { question: "How does Valdés Leal's style compare to Murillo's?", answer: "Both worked in Seville, but <a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> was <strong>more dramatic and turbulent</strong> than Murillo's softer, sweeter approach. His brushwork is rougher, his compositions more dynamic, and his emotional range more extreme." }
  ],
  'juan-gris-still-life-with-bottle-and-cigars': [
    { question: "What does this Cubist still life show?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Juan Gris</strong></a> arranged a <strong>bottle and cigars</strong> in fractured geometric planes. His approach to <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> was more structured and colorful than Picasso's or Braque's, with clearly recognizable objects despite the abstraction." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris's</strong></a> Cubist still lifes are highly valued and regularly appear at major auctions." },
    { question: "How does Gris differ from Picasso and Braque?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> practiced what he called <strong>Synthetic Cubism</strong>: starting with abstract shapes and building toward recognizable objects, rather than breaking objects apart. His work tends to be more colorful, orderly, and architecturally precise." }
  ],
  'juan-gris-the-packet-of-cigars': [
    { question: "What does The Packet of Cigars show?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> depicted a <strong>cigar packet</strong> through overlapping geometric planes and collage-like composition. Everyday objects like tobacco, newspapers, and bottles were standard <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> subjects." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> produced many still lifes featuring café and studio objects during his most productive years in Paris." },
    { question: "Why did Cubists paint everyday objects?", answer: "<a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> painters chose <strong>familiar, simple objects</strong> because the subject itself wasn't the point. The real interest was in how form, space, and multiple viewpoints could be represented simultaneously on a flat surface." }
  ],
  'juan-gris-still-life-with-flowers': [
    { question: "What does Still Life with Flowers show?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> painted <strong>flowers</strong> through his distinctive <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> lens: geometric facets, overlapping planes, and bold color. The result transforms a traditional subject into something architecturally precise and modern." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> (MoMA) in New York. MoMA holds important works by all three major Cubists: Picasso, Braque, and <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a>." },
    { question: "When did Gris paint this?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> worked primarily between 1911 and his early death in 1927. His <strong>mature Synthetic Cubist</strong> works from the late 1910s and 1920s are considered his finest, marked by clear color and elegant structure." }
  ],
  'juan-gris-still-life-with-oil-lamp': [
    { question: "What does Still Life with Oil Lamp depict?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> arranged an <strong>oil lamp</strong> and surrounding objects in interlocking geometric shapes. The lamp is recognizable despite the <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> fragmentation, reflecting his commitment to legibility within abstraction." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kroeller-mueller-museum\"><strong>Kröller-Müller Museum</strong></a> in the Netherlands. The museum holds a strong collection of early 20th-century modern art." },
    { question: "What makes Gris's Cubism unique?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> brought <strong>mathematical precision</strong> and clear color to Cubism. Where Picasso and Braque often worked in muted earth tones, Gris used brighter hues and more defined shapes, creating compositions that feel almost crystalline." }
  ],
  'juan-gris-landscape-at-ceret': [
    { question: "What does Landscape at Ceret show?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> painted the town of <strong>Céret</strong> in the French Pyrenees through a <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> framework. Buildings, trees, and hillsides are broken into geometric planes while remaining recognizable as a townscape." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/moderna-museet-stockholm-sweden\"><strong>Moderna Museet</strong></a> in Stockholm. The museum holds important early modernist works." },
    { question: "Why was Céret important for Cubism?", answer: "<strong>Céret</strong> became a gathering place for Cubist painters in the early 1910s. Picasso, Braque, and <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> all worked there, and the town's angular architecture and Mediterranean light suited the Cubist approach to fragmented form." }
  ],
  'juan-gris-three-lamps': [
    { question: "What does Three Lamps depict?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> arranged <strong>three lamps</strong> in a <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> composition of overlapping planes and controlled color. The repetition of similar forms let him explore variations in angle and light across a single canvas." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunstmuseum-bern-bern-switzerland\"><strong>Kunstmuseum Bern</strong></a> in Switzerland. The museum holds a diverse modern art collection." },
    { question: "How prolific was Juan Gris?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> died at just <strong>40 years old</strong> in 1927, but he produced a substantial body of work in his short career. His disciplined approach to <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> influenced artists like Ozenfant and Le Corbusier." }
  ],
  'juan-gris-the-guitar': [
    { question: "What does The Guitar show?", answer: "<a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a> painted a <strong>guitar</strong> in his characteristic <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> style: the instrument is broken into geometric facets but remains clearly identifiable. Guitars were a favorite subject for all three major Cubist painters." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/georges-pompidou-center-paris-france\"><strong>Centre Pompidou</strong></a> in Paris. The museum holds one of Europe's most important collections of modern and contemporary art." },
    { question: "Why did Cubists paint guitars so often?", answer: "The <strong>guitar's curved shape</strong> provided an interesting challenge for Cubist geometry. It also connected to café culture, Spanish identity (for Picasso and <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Gris</strong></a>), and the tradition of still life with musical instruments." }
  ],
  'jules-bastien-lepage-resting-country-people': [
    { question: "What does Resting Country People show?", answer: "<a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a> painted <strong>rural workers at rest</strong>, capturing a moment of exhaustion and quiet between tasks. His naturalistic approach brought plein-air technique to peasant subjects with unflinching honesty." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hamburger-kunsthalle\"><strong>Hamburger Kunsthalle</strong></a> in Germany. The museum holds a wide-ranging European art collection." },
    { question: "What is Bastien-Lepage known for?", answer: "<a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a> pioneered <strong>Naturalism</strong> in French painting, combining Impressionist-influenced plein-air technique with the serious subject matter of <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a>. He died young at 36 but influenced painters across Europe and America." }
  ],
  'jules-bastien-lepage-priam-at-achilles-feet': [
    { question: "What scene does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a> painted the moment from the Iliad when <strong>King Priam kneels before Achilles</strong> to beg for the return of his son Hector's body. It's an academic history painting from early in his career." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in northern France, one of the country's largest fine arts museums outside Paris." },
    { question: "How does this differ from Bastien-Lepage's later work?", answer: "This <strong>classical subject</strong> is very different from the rural naturalism he became famous for. <a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a> trained in the academic tradition before shifting to contemporary peasant scenes that made his reputation." }
  ],
  'jules-breton-the-gleaners': [
    { question: "What does The Gleaners by Jules Breton show?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted <strong>women gleaning</strong> (gathering leftover grain after harvest), a subject also famously treated by Millet. Breton's version tends toward a more idealized, poetic vision of rural labor." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton's</strong></a> peasant paintings were enormously popular in the 19th century and remain sought after." },
    { question: "How does Breton compare to Millet?", answer: "Both painted <strong>French peasant life</strong>, but <a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> gave his figures more grace and beauty. Where Millet emphasized the weight of labor, Breton found poetry and dignity in rural scenes, making his work more commercially popular in his time." }
  ],
  'jules-breton-the-day-after-san-sebastian': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted a scene related to the <strong>feast day of San Sebastián</strong>, likely showing the aftermath of village celebrations. His work frequently documented the customs and rhythms of rural French community life." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton's</strong></a> paintings of rural festivals and religious observances were popular with French and American collectors." },
    { question: "What subjects did Breton favor?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted <strong>peasant women, harvest scenes, and village festivals</strong> in the Artois region of northern France. His romanticized view of rural life struck a chord with audiences nostalgic for traditional ways as industrialization transformed the country." }
  ],
  'jules-breton-ruins-of-saint-bavo39s-abbey-in-ghent': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted the <strong>ruins of Saint Bavo's Abbey</strong> in Ghent, Belgium. The atmospheric treatment of crumbling medieval architecture shows his skill with landscape and mood, beyond his typical peasant subjects." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museum-of-fine-arts-ghent-belgium\"><strong>Museum of Fine Arts, Ghent</strong></a>, fittingly located near the abbey ruins themselves." },
    { question: "Did Breton paint many architectural subjects?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> is known primarily for <strong>figure paintings</strong> of rural life. Architectural views like this are rarer in his work but demonstrate his broader ability as a painter of atmosphere and place." }
  ],
  'jules-breton-young-peasant-woman-playing-with-cockchafers': [
    { question: "What is this painting about?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted a <strong>young country woman playing with beetles</strong> (cockchafers), a charming rural scene. The subject captures a moment of simple pleasure in nature, typical of his affectionate view of peasant life." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton's</strong></a> intimate scenes of rural women were among his most commercially successful works." },
    { question: "How did Breton depict peasant women?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted peasant women as <strong>beautiful, dignified figures</strong> in natural settings. Unlike Millet's heavier, more laboring bodies, Breton's women have a grace that appealed to bourgeois audiences while still honoring rural life." }
  ],
  'jules-breton-landscape-courri232res-france': [
    { question: "What does this landscape show?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted the countryside around <strong>Courrières</strong> in northern France, his hometown. The flat Artois farmland with its big skies provided the setting for most of his career's work." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/sheffield-galleries-and-museums-sheffield-uk\"><strong>Sheffield Galleries and Museums</strong></a> in England. British collections hold a number of French 19th-century landscapes." },
    { question: "Why was Courrières important to Breton?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> spent most of his life in <strong>Courrières</strong>, painting its people and landscapes. Like Constable in Suffolk, he found that deep roots in one place gave his art an authenticity that traveled well." }
  ],
  'song-of-the-lark': [
    { question: "What does The Song of the Lark depict?", answer: "<a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> painted a <strong>peasant girl pausing in a field at dawn</strong>, listening to a lark's song. The figure is backlit by the rising sun, creating one of the most beloved images of rural life in 19th-century art." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>, where it's one of the most popular paintings in the collection. Willa Cather named her novel after it." },
    { question: "Why is this painting so beloved?", answer: "The image of a <strong>solitary figure pausing to listen</strong> in golden morning light resonates deeply. <a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Breton</strong></a> captured a universal moment: the beauty of being alone in nature, fully present. It's his most famous work by far." }
  ],
  'jusepe-de-ribera-st-andrew': [
    { question: "What does St. Andrew depict?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> painted <strong>St. Andrew</strong>, one of Christ's apostles, with the X-shaped cross of his martyrdom. Ribera's rough, realistic style gives the saint a weathered, earthy presence far from idealized beauty." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> painted many single-figure saints, and they appear in both museums and private holdings." },
    { question: "What is Ribera known for?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> was a Spanish painter who worked in Naples. He combined <strong>Caravaggio's dramatic lighting</strong> with unflinching realism, painting saints and philosophers as rough-skinned, weathered men rather than idealized figures." }
  ],
  'jusepe-de-ribera-the-martyrdom-of-st-bartholomew': [
    { question: "What does The Martyrdom of St. Bartholomew show?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> depicted <strong>St. Bartholomew being flayed alive</strong>, one of the most gruesome martyrdom subjects in art. Ribera's visceral realism makes the viewer feel the saint's agony, rendered under harsh, dramatic light." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. <a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera's</strong></a> works were collected by Spanish viceroys in Naples and sent back to Spain." },
    { question: "Why did Ribera paint such violent subjects?", answer: "<strong>Counter-Reformation</strong> patrons wanted art that stirred powerful emotions and reinforced faith through suffering. <a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera's</strong></a> <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> realism made martyrdom scenes viscerally convincing, serving the Church's goal of inspiring devotion through empathy." }
  ],
  'jusepe-de-ribera-saint-peter-and-saint-paul': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> painted <strong>Saints Peter and Paul</strong> together, two foundational figures of Christianity. His rough, naturalistic treatment gives them the look of real men rather than polished icons." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-strasbourg-strasbourg-fra\"><strong>Musée des Beaux-Arts de Strasbourg</strong></a> in France. <a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera's</strong></a> works are spread across European collections." },
    { question: "How did Caravaggio influence Ribera?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> absorbed <strong>Caravaggio's chiaroscuro</strong> (strong light-dark contrast) while working in Naples. He pushed the realism even further, painting wrinkled skin, calloused hands, and worn faces with almost clinical precision." }
  ],
  'jusepe-de-ribera-st-sebastian-tended-by-the-holy-women': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> painted <strong>St. Sebastian after his arrow martyrdom</strong>, being tended by holy women. Unlike the more common depiction of Sebastian tied to a post, this shows the compassionate aftermath." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/bilbao-fine-arts-museum-bilbao-spain\"><strong>Bilbao Fine Arts Museum</strong></a> in Spain. The museum holds a growing collection of Spanish and European Old Master paintings." },
    { question: "What makes Ribera's religious paintings distinctive?", answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> painted saints as <strong>real, suffering human beings</strong>. His combination of Caravaggesque lighting, physical realism, and emotional intensity made his religious works among the most powerful of the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> era." }
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
