const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'robert-delaunay-the-red-tower': [
    { question: "What does The Red Tower depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Robert Delaunay</strong></a> painted the <strong>Eiffel Tower</strong> in fragmented, Cubist-influenced planes of red and surrounding architecture. The tower was his most repeated subject, symbolizing modernity and Paris." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-national-d39art-moderne-paris-france\"><strong>Musée National d'Art Moderne</strong></a> in Paris. The museum holds France's premier collection of <strong>20th-century art</strong>." },
    { question: "What style is this painting?", answer: "Delaunay developed <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> toward pure color abstraction, a style called <strong>Orphism</strong>. His fractured views of the Eiffel Tower broke the subject into dynamic, shifting perspectives." }
  ],
  'robert-delaunay-the-cardiff-team': [
    { question: "What does The Cardiff Team depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> painted a <strong>rugby scene</strong> combined with the Eiffel Tower, a Ferris wheel, and advertising posters. The composition merges sport, urban life, and modernity into a single energetic image." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/bavarian-state-painting-collections-munich-germany\"><strong>Bavarian State Painting Collections</strong></a> in Munich. The museum holds important examples of <strong>early modern European</strong> art." },
    { question: "What movement does this belong to?", answer: "It's an <strong>Orphist</strong> work rooted in <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>. Delaunay used <strong>simultaneous color contrasts</strong> to create visual energy and movement across the canvas." }
  ],
  'robert-delaunay-the-three-graces': [
    { question: "What does The Three Graces depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> reinterpreted the classical subject of the <strong>Three Graces</strong> through his color-based abstraction. The mythological figures dissolve into circular patterns of vibrant hues." },
    { question: "What style is this painting?", answer: "It reflects Delaunay's <strong>Orphism</strong>, an offshoot of <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> focused on pure color relationships. The circular forms and <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful patterns</strong></a> create rhythm without relying on line." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Delaunay's fusion of classical subjects with <strong>abstract color theory</strong> made him a pioneer of non-representational painting." }
  ],
  'robert-delaunay-window-eiffel-tower': [
    { question: "What does Window, Eiffel Tower show?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> painted the <strong>Eiffel Tower seen through a window</strong>, fragmenting the view into prismatic color planes. The window motif let him explore how light breaks into spectral colors." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/staatliche-kunsthalle-karlsruhe-karlsruhe-germany\"><strong>Staatliche Kunsthalle Karlsruhe</strong></a> in Germany. The museum holds a broad collection of <strong>European painting</strong>." },
    { question: "What movement is this associated with?", answer: "It belongs to Delaunay's <strong>Windows series</strong>, central to his development of Orphism from <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>. These works pushed toward pure abstraction through <strong>simultaneous color contrasts</strong>." }
  ],
  'robert-delaunay-simultaneous-contrasts-sun-and-moon': [
    { question: "What does Simultaneous Contrasts: Sun and Moon depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> painted <strong>circular forms</strong> representing the sun and moon in contrasting colors. The composition is fully abstract, relying entirely on color relationships to create visual movement." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York. It's a key work in MoMA's collection of <strong>early abstraction</strong>." },
    { question: "What style is this work?", answer: "It's a landmark of <strong>Orphism</strong>, Delaunay's color-focused branch of <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>. The painting demonstrates his theory that <strong>color alone</strong> could create form, depth, and rhythm." }
  ],
  'robert-delaunay-the160city160of160paris': [
    { question: "What does The City of Paris depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> created a monumental composition combining the <strong>Three Graces, the Eiffel Tower, and Parisian architecture</strong>. The painting synthesizes classical tradition with modern urban life." },
    { question: "Where is this painting displayed?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/georges-pompidou-center-paris-france\"><strong>Centre Pompidou</strong></a> in Paris. The large-scale work is one of Delaunay's most <strong>ambitious compositions</strong>." },
    { question: "What movement does this belong to?", answer: "It bridges <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> and Orphism, using <strong>fragmented planes</strong> and vibrant color to celebrate Paris as the capital of modernity." }
  ],
  'robert-delaunay-pouring': [
    { question: "What does Pouring depict?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> created this work exploring <strong>fluid color relationships</strong> and dynamic form. The composition shows his interest in how colors interact when placed in proximity." },
    { question: "What style is this painting?", answer: "It's an <strong>Orphist</strong> work, Delaunay's extension of <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> toward pure <strong>color abstraction</strong>. His theories influenced the Blaue Reiter group and early abstract painters." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Delaunay's <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract works</strong></a> represent some of the earliest fully non-representational paintings in European art." }
  ],
  'robert-delaunay-windows-open-simultaneously-1st-part-3rd-motif': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a> painted overlapping <strong>transparent color planes</strong> suggesting light seen through windows. The series explored how prismatic colors create spatial depth without traditional perspective." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/guggenheim\"><strong>Solomon R. Guggenheim Museum</strong></a> in New York. The museum's collection emphasizes <strong>abstract and non-objective art</strong>." },
    { question: "What movement is this associated with?", answer: "It's part of Delaunay's <strong>Windows series</strong>, central to <a href=\"/apps/masterpieces/movement/cubism\"><strong>Orphist Cubism</strong></a>. Apollinaire coined the term Orphism to describe Delaunay's <strong>light-and-color-based</strong> approach to abstraction." }
  ],
  'rogier-van-der-weyden-the-annunciation': [
    { question: "What does this Annunciation show?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> painted the <strong>Angel Gabriel</strong> appearing to the Virgin Mary in a detailed Flemish interior. Every object in the room carries symbolic meaning related to Mary's purity." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/sabauda-gallery-turin-italy\"><strong>Sabauda Gallery</strong></a> in Turin, Italy. The gallery preserves important <strong>Northern European paintings</strong> collected by the House of Savoy." },
    { question: "What style is this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting with <strong>precise detail and emotional intensity</strong>. Van der Weyden was the most influential Flemish painter of the mid-15th century." }
  ],
  'rogier-van-der-weyden-virgin-and-child': [
    { question: "What does this Virgin and Child show?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Van der Weyden</strong></a> painted <strong>Mary holding the Christ Child</strong> with the emotional tenderness that defines his art. The intimate scale suggests it was made for private devotion." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid. The museum holds one of Spain's finest <strong>private art collections</strong>." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> devotional panel. Van der Weyden's <strong>expressive figures</strong> and refined oil technique influenced Flemish painting for generations." }
  ],
  'rogier-van-der-weyden-madonna-and-child': [
    { question: "What does this Madonna and Child depict?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Van der Weyden</strong></a> painted the <strong>Virgin and infant Jesus</strong> with delicate emotion and careful attention to fabric and skin. His Madonnas are known for their quiet, human warmth." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado's <strong>Flemish collection</strong> is one of the finest outside Belgium and the Netherlands." },
    { question: "What style characterizes this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting with van der Weyden's signature <strong>emotional clarity</strong> and luminous oil technique. His influence extended across Europe through copies and followers." }
  ],
  'rogier-van-der-weyden-mary-altarpiece': [
    { question: "What does the Mary Altarpiece depict?", answer: "<a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Van der Weyden</strong></a> created this altarpiece showing scenes from the <strong>life of the Virgin Mary</strong>. The multi-panel format allowed him to narrate key moments with his characteristic emotional depth." },
    { question: "Where can I see this altarpiece?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie in Berlin</strong></a>. The museum holds major works from the <strong>Early Netherlandish</strong> tradition." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> altarpiece. Van der Weyden's <strong>narrative power and emotional range</strong> made him the most sought-after painter in mid-15th-century Europe." }
  ],
  'rosa-bonheur-plowing-in-the-nivernais': [
    { question: "What does Plowing in the Nivernais depict?", answer: "<a href=\"/apps/masterpieces/artist/rosa-bonheur\"><strong>Rosa Bonheur</strong></a> painted <strong>oxen plowing a field</strong> in the Nivernais region of France. The monumental treatment of agricultural labor reflects her deep knowledge of animal anatomy." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The painting was commissioned by the <strong>French state</strong> and exhibited at the 1849 Salon." },
    { question: "Why is Rosa Bonheur significant?", answer: "Bonheur was one of the most famous <strong>female artists</strong> of the 19th century. Her <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> animal paintings earned her international fame and the French Legion of Honor." }
  ],
  'rosa-bonheur-the-horse-fair-reduced-version': [
    { question: "What does The Horse Fair show?", answer: "<a href=\"/apps/masterpieces/artist/rosa-bonheur\"><strong>Rosa Bonheur</strong></a> painted a <strong>lively horse market</strong> in Paris with spirited animals and handlers. This is a reduced version of her most famous painting, which measures over 16 feet wide." },
    { question: "Where is this version displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The full-scale original hangs at the <strong>Metropolitan Museum of Art</strong> in New York." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> work showcasing Bonheur's mastery of <strong><a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\">horse anatomy</a></strong> and movement. She studied horses at Parisian markets for over a year to prepare this composition." }
  ],
  'rudolf-ernst-the-carpet-makers': [
    { question: "What does The Carpet Makers depict?", answer: "<a href=\"/apps/masterpieces/artist/rudolf-ernst\"><strong>Rudolf Ernst</strong></a> painted <strong>artisans weaving carpets</strong> in a richly decorated Moorish interior. The scene reflects the Orientalist tradition of European artists depicting the Islamic world." },
    { question: "What style is this painting?", answer: "It's an <strong>Orientalist</strong> work with meticulous attention to <strong>architectural detail, tiles, and textiles</strong>. Ernst specialized in North African and Middle Eastern subjects painted with photographic precision." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Ernst's Orientalist interiors, with their <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful patterns</strong></a> and warm light, remain popular among collectors of 19th-century academic painting." }
  ],
  'salvator-rosa-lucrezia-as-poetry': [
    { question: "What does Lucrezia as Poetry depict?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> painted <strong>Lucrezia</strong> personifying Poetry, blending portraiture with allegorical meaning. Rosa was himself a poet, musician, and actor as well as a painter." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut. The museum was America's first public art museum, founded in <strong>1842</strong>." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> allegorical portrait. Rosa's <strong>rebellious personality</strong> and varied talents made him a proto-Romantic figure, admired by later generations for his independent spirit." }
  ],
  'salvator-rosa-landscape-with-armed-men': [
    { question: "What does Landscape with Armed Men show?", answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> painted <strong>armed figures</strong> in a wild, rocky landscape. His bandit scenes combined dramatic nature with menacing human presence, creating a mood of danger." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/lacma\"><strong>Los Angeles County Museum of Art</strong></a>. LACMA holds a broad collection of <strong>European art</strong> spanning multiple centuries." },
    { question: "What style defines this work?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> landscape with Rosa's signature <strong>wild, untamed nature</strong>. His rugged landscapes influenced the later Romantic movement's fascination with the sublime." }
  ],
  'sassetta-st-thomas-inspired-by-the-dove-of-the-holy-ghost': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/sassetta\"><strong>Sassetta</strong></a> painted <strong>Saint Thomas Aquinas</strong> receiving divine inspiration from the dove of the Holy Spirit. The gold background and graceful forms reflect the Sienese Gothic tradition." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/budapest-museum-of-fine-arts-budapest-hungary\"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. The museum holds significant examples of <strong>Italian panel painting</strong>." },
    { question: "What style is this work?", answer: "Sassetta worked in the <strong>International Gothic</strong> style with influences from the early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. His <strong>elegant line and delicate color</strong> distinguish Sienese painting from the more naturalistic Florentine school." }
  ],
  'sassetta-saint-nicholas-of-bari': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/sassetta\"><strong>Sassetta</strong></a> depicted <strong>Saint Nicholas of Bari</strong>, one of Christianity's most popular saints. The panel likely formed part of a larger altarpiece dedicated to the saint's life and miracles." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The museum's Italian collection includes important <strong>Sienese Gothic panels</strong>." },
    { question: "What period does this represent?", answer: "It's a 15th-century Sienese work bridging <strong>Gothic and early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a></strong> styles. Sassetta's refined color sense and lyrical compositions made him Siena's leading painter of his generation." }
  ],
  'sebastiano-del-piombo-sacred-conversation': [
    { question: "What does Sacred Conversation depict?", answer: "<a href=\"/apps/masterpieces/artist/sebastiano-del-piombo\"><strong>Sebastiano del Piombo</strong></a> painted a <strong>sacra conversazione</strong>, showing the Madonna and Child with saints in quiet communion. The composition reflects the Venetian tradition of rich color and atmospheric light." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice. The museum holds Venice's most important collection of <strong>Renaissance painting</strong>." },
    { question: "What style is this work?", answer: "Sebastiano combined <strong>Venetian color</strong> with the monumental forms he learned from Michelangelo in Rome. His work bridges the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> traditions of Venice and Florence." }
  ],
  'simon-vouet-virginia-da-vezzo-the-artist39s-wife-as-the-magdal': [
    { question: "Who is depicted in this painting?", answer: "<a href=\"/apps/masterpieces/artist/simon-vouet\"><strong>Simon Vouet</strong></a> painted his wife <strong>Virginia da Vezzo</strong> as Mary Magdalene. Da Vezzo was herself a painter, and Vouet frequently used her as a model for religious and allegorical figures." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/lacma\"><strong>Los Angeles County Museum of Art</strong></a>. The museum's European collection includes fine examples of <strong>French Baroque</strong> painting." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting combining <strong>portraiture and religious imagery</strong>. Vouet brought the Italian Baroque style back to France, shaping French painting for decades." }
  ],
  'simon-vouet-selfportrait': [
    { question: "What does Vouet's Self-Portrait reveal?", answer: "<a href=\"/apps/masterpieces/artist/simon-vouet\"><strong>Simon Vouet</strong></a> painted himself as a confident, <strong>accomplished artist</strong>. As court painter to Louis XIII, Vouet held the most prestigious artistic position in France." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-lyon-lyon-france\"><strong>Musée des Beaux-Arts de Lyon</strong></a>. The museum holds one of France's largest <strong>fine art collections</strong> outside Paris." },
    { question: "What style is this self-portrait?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> portrait with <strong>dramatic lighting</strong> influenced by Vouet's years studying in Italy. He absorbed Caravaggio's chiaroscuro and brought it to the French court." }
  ],
  'simon-vouet-sophonisba-receiving-the-poisoned-chalice': [
    { question: "What story does this painting tell?", answer: "<a href=\"/apps/masterpieces/artist/simon-vouet\"><strong>Simon Vouet</strong></a> depicted <strong>Sophonisba</strong>, a Carthaginian noblewoman who drank poison rather than be captured by Rome. The subject of noble self-sacrifice was popular in Baroque history painting." },
    { question: "Where can I see this painting?", answer: "It's at <a href=\"/apps/masterpieces/museum/museumslandschaft-hessen-kassel-kassel-germany\"><strong>Museumslandschaft Hessen Kassel</strong></a> in Germany. The museum holds an important collection of <strong>Old Master paintings</strong>." },
    { question: "What movement does this belong to?", answer: "It's a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> history painting with <strong>theatrical composition</strong> and rich color. Vouet's narrative paintings brought Italian grandeur to the French artistic tradition." }
  ],
  'simone-martini-the-miracle-of-the-child-attacked-and-rescued-by-a': [
    { question: "What miracle does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/simone-martini\"><strong>Simone Martini</strong></a> painted a scene where <strong>Augustine Novello</strong> rescues a child from attack. The narrative panel is part of an altarpiece illustrating the blessed monk's miracles." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pinacoteca-nazionale-di-bologna-bologna-italy\"><strong>Pinacoteca Nazionale di Bologna</strong></a>. The gallery preserves important examples of <strong>Italian medieval and Renaissance</strong> painting." },
    { question: "What style is this work?", answer: "Martini was a master of the <strong>Sienese Gothic</strong> style, known for <strong>graceful line and luminous color</strong>. His elegant approach influenced the International Gothic movement across Europe." }
  ],
  'simone-martini-saint-catherine-of-alexandria-polyptych': [
    { question: "What does this polyptych show?", answer: "<a href=\"/apps/masterpieces/artist/simone-martini\"><strong>Simone Martini</strong></a> depicted <strong>Saint Catherine of Alexandria</strong> in a multi-panel altarpiece format. Catherine was a popular saint in medieval devotion, known for her wisdom and martyrdom." },
    { question: "Where can I see this polyptych?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-museum-of-san-matteo-pisa-italy\"><strong>National Museum of San Matteo</strong></a> in Pisa, Italy. The museum holds important <strong>Tuscan medieval art</strong>." },
    { question: "What movement does this belong to?", answer: "It's a <strong>Sienese Gothic</strong> altarpiece with Martini's trademark <strong>gold backgrounds and flowing drapery</strong>. His refined style made him the most internationally celebrated Italian painter before the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." }
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
