const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'jonathan-scott-hartley',
    bioFull: `<p><a href="/apps/masterpieces/artist/jonathan-scott-hartley"><strong>Jonathan Scott Hartley</strong></a> (1845-1912) was an American sculptor who specialized in <strong>portrait busts and ideal figures</strong> during the Gilded Age. Born in Albany, New York, he studied at the Royal Academy in London and the École des Beaux-Arts in Paris. He became the son-in-law of painter John Frederick Kensett.</p><p>Hartley produced portrait busts of prominent Americans, including writers, politicians, and artists. His work reflects the polished academic naturalism popular in late 19th-century American sculpture, with careful attention to individual character and dignified presentation.</p>`,
    faqs: [
      { question: "What did Jonathan Scott Hartley create?", answer: "Hartley created <strong>portrait busts and ideal figures</strong> in the academic tradition. His portraits of prominent Americans display the refined naturalism typical of Gilded Age sculpture." },
      { question: "Where can I see his work?", answer: "Works are at the <strong>Metropolitan Museum of Art</strong> in New York and various American museums and public buildings from the late 19th century." },
    ],
  },
  {
    slug: 'cristoforo-di-geremia',
    bioFull: `<p><a href="/apps/masterpieces/artist/cristoforo-di-geremia"><strong>Cristoforo di Geremia</strong></a> (c. 1430-1476) was an Italian medalist and goldsmith active in Rome and Mantua during the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. He created portrait medals for several popes and humanist scholars, working in the tradition established by Pisanello.</p><p>His medals are prized for their <strong>sharply modeled portraits and elaborate reverse compositions</strong> featuring allegorical scenes. A medal of Pope Paul II and his work for the papal court demonstrate his status as one of the leading medalists of the mid-15th century.</p>`,
    faqs: [
      { question: "What is Cristoforo di Geremia known for?", answer: "He was a <strong>Renaissance portrait medalist</strong> who created medals for popes and humanist scholars. His work continues the tradition established by Pisanello, with finely detailed portraits and allegorical reverses." },
      { question: "Where can I see his medals?", answer: "Medals are at the <strong>British Museum</strong>, the National Gallery of Art in Washington, and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    ],
  },
  {
    slug: 'giovanni-della-robbia',
    bioFull: `<p><a href="/apps/masterpieces/artist/giovanni-della-robbia"><strong>Giovanni della Robbia</strong></a> (1469-1529) was a Florentine sculptor who continued the family tradition of <strong>glazed terracotta sculpture</strong> pioneered by his grandfather Luca and his father Andrea della Robbia. He ran the della Robbia workshop during its final productive decades, creating polychrome glazed altarpieces, lunettes, and decorative roundels.</p><p>Giovanni expanded the family palette beyond the characteristic blue and white, introducing greens, purples, and yellows into increasingly elaborate compositions. His work at the Ospedale del Ceppo in Pistoia, a polychrome terracotta frieze depicting the Seven Works of Mercy, is one of his most ambitious projects. The workshop declined after his death.</p>`,
    faqs: [
      { question: "What is Giovanni della Robbia known for?", answer: "Giovanni continued his family's tradition of <strong>glazed polychrome terracotta sculpture</strong>. He expanded the palette beyond the classic blue and white, producing colorful altarpieces and architectural decorations in Florence and Tuscany." },
      { question: "Where can I see della Robbia terracottas?", answer: "Works are at the <strong>Bargello Museum in Florence</strong>, the V&A in London, and the Ospedale del Ceppo in Pistoia. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> and Met also hold examples." },
    ],
  },
  {
    slug: 'andrea-della-robbia',
    bioFull: `<p><a href="/apps/masterpieces/artist/andrea-della-robbia"><strong>Andrea della Robbia</strong></a> (1435-1525) was a Florentine sculptor who inherited and refined the technique of <strong>glazed terracotta</strong> invented by his uncle Luca della Robbia. Born in Florence, he took over the family workshop and expanded production significantly, creating blue-and-white Madonna reliefs, altarpieces, and architectural ornaments for churches across Tuscany.</p><p>Andrea's style is sweeter and more tender than Luca's, with gentle Madonnas and charming infant figures that proved enormously popular. The <strong>roundels of swaddled babies</strong> on the facade of the Ospedale degli Innocenti in Florence are among his most beloved works. His prolific workshop made della Robbia terracotta synonymous with Florentine <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> devotional art.</p>`,
    faqs: [
      { question: "What is Andrea della Robbia known for?", answer: "Andrea is known for <strong>blue-and-white glazed terracotta Madonnas and devotional reliefs</strong>. His gentle, sweet-faced figures made della Robbia terracottas some of the most beloved <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> artworks." },
      { question: "Where can I see his work?", answer: "Key works are in <strong>Florence</strong>: the Bargello, the Ospedale degli Innocenti facade, and numerous Tuscan churches. The <strong>Metropolitan Museum of Art</strong> and the V&A in London also hold important pieces." },
    ],
  },
  {
    slug: 'workshop-of-andrea-della-robbia',
    bioFull: `<p>The <strong>workshop of Andrea della Robbia</strong> was one of the most productive sculptural enterprises in <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Florence, specializing in <strong>glazed terracotta</strong> devotional art. Andrea (1435-1525) expanded the technique invented by his uncle Luca della Robbia into a large-scale commercial operation, producing blue-and-white Madonnas, altarpieces, and architectural decorations for churches across Italy.</p><p>Workshop pieces follow Andrea's established formulas but may have been executed by assistants, including his sons Giovanni, Luca II, and other trained craftsmen. The consistent quality of the glazing technique made della Robbia products recognizable and popular, though distinguishing Andrea's own hand from workshop production can be challenging.</p>`,
    faqs: [
      { question: "What did Andrea della Robbia's workshop produce?", answer: "The workshop produced <strong>glazed terracotta Madonnas, altarpieces, and architectural ornaments</strong>. Blue-and-white devotional reliefs were their specialty, with dozens of pieces created for churches throughout Tuscany and beyond." },
      { question: "How do workshop pieces differ from Andrea's own?", answer: "Workshop pieces follow <strong>Andrea's established designs and glazing technique</strong> but may show less refined modeling or more formulaic compositions. The quality of glazing remains consistent since it was a standardized technical process." },
    ],
  },
  {
    slug: 'henri-chapu',
    bioFull: `<p><a href="/apps/masterpieces/artist/henri-chapu"><strong>Henri Chapu</strong></a> (1833-1891) was a French sculptor who won the Prix de Rome in 1855 and became one of the most respected academic sculptors of the Third Republic. Born in Le Mée-sur-Seine, he studied under James Pradier and François Duret at the École des Beaux-Arts.</p><p>Chapu's <strong><em>Joan of Arc</em></strong> (1870) at the Musée d'Orsay, depicting the saint as a listening peasant girl rather than a warrior, was widely praised for its understated sincerity. His monument to painter Henri Regnault and his tomb reliefs in Père Lachaise cemetery demonstrate a refined classical style that balanced idealism with naturalism. He was elected to the Institut de France in 1880.</p>`,
    faqs: [
      { question: "What is Henri Chapu known for?", answer: "Chapu's <strong><em>Joan of Arc at Domrémy</em></strong> (1870), showing Joan as a contemplative peasant girl, is his most admired work. His funerary monuments and portrait busts exemplify refined French academic sculpture." },
      { question: "Where can I see Chapu's work?", answer: "The Joan of Arc is at the <strong>Musée d'Orsay</strong> in Paris. Funerary monuments are at Père Lachaise cemetery and various French museums. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> also holds pieces." },
    ],
  },
  {
    slug: 'andrea-briosco-called-riccio',
    bioFull: `<p><a href="/apps/masterpieces/artist/andrea-briosco-called-riccio"><strong>Andrea Briosco, called Riccio</strong></a> (c. 1470-1532) was a Paduan sculptor who became the greatest <strong>small bronze artist</strong> of the Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. Nicknamed "Riccio" (curly) for his hair, he trained under Bartolomeo Bellano and was steeped in the humanist culture of Padua's university.</p><p>Riccio's masterwork is the elaborate <strong>Paschal Candelabrum</strong> (1507-16) in Padua's Basilica of Sant'Antonio, a massive bronze candelabra covered with mythological and allegorical reliefs. His small bronzes of satyrs, oil lamps, inkwells, and decorative objects are treasured by collectors. They combine classical learning with a lively, earthy wit, making him the favorite sculptor of Padua's intellectual elite.</p>`,
    faqs: [
      { question: "What is Riccio known for?", answer: "Riccio was the greatest <strong>Renaissance small bronze sculptor</strong>. His Paschal Candelabrum in Padua's Basilica of Sant'Antonio is his masterwork, while his small bronzes of satyrs and decorative objects are prized by collectors worldwide." },
      { question: "Where can I see Riccio's bronzes?", answer: "The Paschal Candelabrum is in <strong>Padua's Basilica of Sant'Antonio</strong>. Small bronzes are at the <strong>Bargello in Florence</strong>, the V&A in London, the Frick Collection, and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
    ],
  },
  {
    slug: 'francesco-fanelli',
    bioFull: `<p><a href="/apps/masterpieces/artist/francesco-fanelli"><strong>Francesco Fanelli</strong></a> (c. 1577-c. 1661) was a Genoese-born sculptor who became one of the first Italian <strong>bronze sculptors to work in England</strong>, serving King Charles I. He moved to London around 1632 and was appointed the king's sculptor. His small bronzes of horses, equestrian figures, and mythological subjects introduced Italian Baroque style to the English court.</p><p>Fanelli's <strong>equestrian statuettes</strong> are particularly admired for their dynamic movement and fine surface detail. After the English Civil War disrupted court patronage, he likely returned to the Continent. His small bronzes are now rare and highly sought by collectors of early English sculpture.</p>`,
    faqs: [
      { question: "What is Francesco Fanelli known for?", answer: "Fanelli was one of the first <strong>Italian bronze sculptors to work in England</strong>, serving Charles I. His equestrian statuettes and small mythological bronzes introduced Italian Baroque sculpture to the English court." },
      { question: "Where can I see Fanelli's bronzes?", answer: "Works are at the <strong>Victoria and Albert Museum</strong> in London and the Wallace Collection. The <strong>Royal Collection</strong> holds pieces from his time as sculptor to Charles I." },
    ],
  },
  {
    slug: 'johann-fredrich-l-ck',
    bioFull: `<p><a href="/apps/masterpieces/artist/johann-fredrich-l-ck"><strong>Johann Friedrich Lück</strong></a> (c. 1727-1797) was a German porcelain modeler who worked at the <strong>Frankenthal Porcelain Factory</strong> in the Palatinate region. He created small-scale porcelain figures, groups, and decorative objects in the Rococo style, contributing to the factory's reputation for elegant figurative work.</p><p>Lück's pieces include pastoral scenes, mythological subjects, and genre figures typical of 18th-century porcelain production. The Frankenthal factory (1755-99), patronized by the Elector Palatinate, was one of the most important porcelain manufactories in Germany, and Lück's contributions helped establish its artistic character.</p>`,
    faqs: [
      { question: "What did Johann Friedrich Lück create?", answer: "Lück modeled <strong>Rococo porcelain figures and groups</strong> at the Frankenthal Porcelain Factory. His pastoral, mythological, and genre scenes reflect the elegant figurative style prized in 18th-century German courts." },
      { question: "Where can I see Frankenthal porcelain?", answer: "Collections are at the <strong>Kurpfälzisches Museum in Heidelberg</strong>, the V&A in London, and the Metropolitan Museum of Art. Frankenthal pieces appear in major European decorative arts collections." },
    ],
  },
  {
    slug: 'giovanni-maria-mosca',
    bioFull: `<p><a href="/apps/masterpieces/artist/giovanni-maria-mosca"><strong>Giovanni Maria Mosca</strong></a> (c. 1493-c. 1573), also known as Padovano, was an Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> sculptor from Padua who spent most of his career in Poland. After working in Venice and Padua, he moved to Kraków around 1529, where he became the leading sculptor at the court of King Sigismund I.</p><p>In Poland, Mosca created <strong>tomb monuments, portrait reliefs, and architectural decorations</strong> that introduced Italian Renaissance style to Polish art. His tomb of Bishop Piotr Tomicki in Wawel Cathedral and other Kraków commissions bridged Italian and Central European sculptural traditions. He helped shape the distinctive Renaissance character of Polish royal art.</p>`,
    faqs: [
      { question: "What is Giovanni Maria Mosca known for?", answer: "Mosca brought <strong>Italian Renaissance sculpture to Poland</strong>, creating tomb monuments and reliefs for the royal court in Kraków. His work introduced Paduan sculptural style to Central European art." },
      { question: "Where can I see his work?", answer: "Major works are in <strong>Wawel Cathedral, Kraków</strong>, including tomb monuments for Polish bishops and nobles. His earliest works survive in Paduan and Venetian churches." },
    ],
  },
  {
    slug: 'chup-cuaro',
    bioFull: `<p><strong>Chupícuaro</strong> refers to an ancient Mesoamerican culture that flourished in the Guanajuato region of central Mexico from approximately 400 BCE to 250 CE. Named after the archaeological site near the Lerma River (now submerged under the Solís Dam reservoir), the culture is known primarily through its distinctive <strong>polychrome ceramic figures</strong>.</p><p>Chupícuaro figurines, especially the "pretty lady" type with wide hips, elaborate body paint patterns, and slanted eyes, are among the most recognizable pre-Columbian ceramics. The red, cream, and brown painted patterns on these figures suggest body decoration or textile designs. They were likely associated with fertility rituals and funerary practices.</p>`,
    faqs: [
      { question: "What is Chupícuaro art?", answer: "<strong>Chupícuaro ceramics</strong> from central Mexico (400 BCE-250 CE) feature distinctive polychrome figurines with geometric body paint patterns. The 'pretty lady' figures with wide hips and slanted eyes are the most recognized type." },
      { question: "Where can I see Chupícuaro figures?", answer: "The <strong>National Museum of Anthropology in Mexico City</strong> holds a major collection. Pieces are also at the <strong>Metropolitan Museum of Art</strong> and the Los Angeles County Museum of Art." },
    ],
  },
  {
    slug: 'tiwanaku',
    bioFull: `<p><strong>Tiwanaku</strong> (also spelled Tiahuanaco) was a pre-Columbian civilization based near the southern shore of Lake Titicaca in present-day Bolivia, flourishing from roughly 500 to 1000 CE. As one of the most important precursors to the Inca Empire, Tiwanaku developed a distinctive artistic style characterized by <strong>geometric precision and monumental stone carving</strong>.</p><p>The site's most famous sculpture is the <strong>Gateway of the Sun</strong>, carved from a single block of andesite and decorated with the Staff God (Viracocha) surrounded by running winged figures. Tiwanaku stone sculptures of standing figures with blocky proportions and elaborate headdresses influenced art across the central Andes for centuries. The site became a UNESCO World Heritage Site in 2000.</p>`,
    faqs: [
      { question: "What is Tiwanaku art?", answer: "<strong>Tiwanaku</strong> art from Bolivia (500-1000 CE) features geometric stone carvings, monumental gateways, and blocky standing figures. The Gateway of the Sun with its Staff God image is the civilization's most iconic artwork." },
      { question: "Where can I see Tiwanaku art?", answer: "The archaeological site of <strong>Tiwanaku near La Paz, Bolivia</strong> is a UNESCO World Heritage Site. The Museo Nacional de Arqueología in La Paz and the <strong>Metropolitan Museum of Art</strong> hold important pieces." },
    ],
  },
  {
    slug: 'teotihuacan',
    bioFull: `<p><strong>Teotihuacan</strong> was an ancient Mesoamerican city northeast of modern Mexico City that reached its peak between 100 and 550 CE, with a population of up to 200,000, making it one of the largest cities in the ancient world. Its art and architecture influenced Mesoamerican cultures for centuries.</p><p>Teotihuacan sculpture includes <strong>monumental stone masks</strong> with serene, idealized features, temple decorations featuring the Feathered Serpent (Quetzalcoatl) and Tlaloc the rain god, and small stone figurines. The masks, carved from greenstone, serpentine, and other hard stones, are among the most prized pre-Columbian artworks. The Pyramid of the Sun and Pyramid of the Moon, along the Avenue of the Dead, remain among the most impressive ancient structures in the Americas.</p>`,
    faqs: [
      { question: "What is Teotihuacan art?", answer: "<strong>Teotihuacan art</strong> includes serene stone masks, temple sculptures of Quetzalcoatl and Tlaloc, and painted murals. The hard stone masks with their idealized, meditative expressions are among the most collected pre-Columbian artworks." },
      { question: "Where can I see Teotihuacan art?", answer: "The <strong>National Museum of Anthropology in Mexico City</strong> has the largest collection. The archaeological site itself is a UNESCO World Heritage Site. Masks and figures appear at the <strong>Metropolitan Museum</strong> and the British Museum." },
    ],
  },
  {
    slug: 'thutmose',
    bioFull: `<p><a href="/apps/masterpieces/artist/thutmose"><strong>Thutmose</strong></a> was an ancient Egyptian sculptor active during the reign of Pharaoh Akhenaten (c. 1353-1336 BCE) at the royal capital of Amarna. He's known as the creator of the <strong>painted limestone bust of Nefertiti</strong>, one of the most famous artworks from the ancient world, discovered in the ruins of his workshop in 1912 by German archaeologists.</p><p>Thutmose's workshop contained numerous portrait studies and unfinished works that give rare insight into an ancient sculptor's process. His name was found on an ivory horse blinker inscribed "The King's Favourite and Master of Works, the Sculptor Thutmose." The Nefertiti bust, now at Berlin's Neues Museum, remains the subject of an ongoing repatriation dispute between Germany and Egypt.</p>`,
    faqs: [
      { question: "What did Thutmose create?", answer: "Thutmose created the <strong>famous painted bust of Nefertiti</strong> (c. 1345 BCE), arguably the most recognized artwork from ancient Egypt. His workshop at Amarna also produced portrait studies of Akhenaten and other royal family members." },
      { question: "Where is the Nefertiti bust?", answer: "The bust is at the <strong>Neues Museum in Berlin</strong>, Germany. Egypt has repeatedly requested its return. The bust was found in Thutmose's workshop ruins in 1912 and taken to Berlin by the excavation's German sponsor." },
    ],
  },
  {
    slug: 'duccio-di-buoninsegna',
    bioFull: `<p><a href="/apps/masterpieces/artist/duccio-di-buoninsegna"><strong>Duccio di Buoninsegna</strong></a> (c. 1255-c. 1319) was a Sienese painter who founded the Sienese school of painting and created one of the most important works in Italian art: the <strong>Maestà</strong> (1308-11), a massive double-sided altarpiece for Siena Cathedral. While primarily a painter, his influence on Sienese artistic tradition extended to all visual arts.</p><p>Duccio combined <strong>Byzantine gold-ground tradition</strong> with a new warmth, emotional depth, and spatial awareness that pointed toward the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. The Maestà's front shows the Virgin enthroned among saints, while the back contains 26 narrative scenes from Christ's Passion painted with remarkable subtlety. When the altarpiece was completed, it was carried through Siena's streets in a public procession.</p>`,
    faqs: [
      { question: "What is Duccio's Maestà?", answer: "The <strong>Maestà</strong> (1308-11) is a massive double-sided altarpiece originally in Siena Cathedral. The front shows the Virgin enthroned; the back has 26 Passion scenes. It's now mostly at the <strong>Museo dell'Opera del Duomo</strong> in Siena." },
      { question: "How did Duccio influence Italian art?", answer: "Duccio founded the <strong>Sienese school of painting</strong>, emphasizing elegant line, rich color, and emotional tenderness. His approach offered an alternative to Giotto's Florentine realism and influenced Sienese art for over a century." },
    ],
  },
  {
    slug: 'robert-smithson',
    bioFull: `<p><a href="/apps/masterpieces/artist/robert-smithson"><strong>Robert Smithson</strong></a> (1938-1973) was an American artist who became the leading figure of the Land Art (or Earthworks) movement. Born in Passaic, New Jersey, he began as a painter before turning to sculpture and site-specific installations in the late 1960s. His writings on art, entropy, and landscape were as influential as his artworks.</p><p>Smithson's <strong><em>Spiral Jetty</em></strong> (1970), a 1,500-foot coil of black basalt rock, earth, and salt crystals extending into the Great Salt Lake in Utah, is the most iconic work of Land Art. It periodically appears and disappears beneath the lake's fluctuating water levels. He died at 35 in a plane crash while surveying a site for a new earthwork in Texas.</p>`,
    faqs: [
      { question: "What is Spiral Jetty?", answer: "<strong><em>Spiral Jetty</em></strong> (1970) is a 1,500-foot coil of black basalt rock extending into Utah's Great Salt Lake. It's the most famous work of Land Art and periodically submerges beneath the lake's rising water levels." },
      { question: "Where can I see Smithson's work?", answer: "Spiral Jetty is on the <strong>northeastern shore of the Great Salt Lake</strong>, Utah (owned by the Dia Art Foundation). His non-sites and sculptures are at <strong>Dia:Beacon</strong> and <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York." },
    ],
  },
  {
    slug: 'george-kolbe',
    bioFull: `<p><a href="/apps/masterpieces/artist/george-kolbe"><strong>Georg Kolbe</strong></a> (1877-1947) was a German sculptor who became one of the most prominent figurative artists in early 20th-century Germany. Born in Waldheim, Saxony, he studied painting in Dresden, Munich, and Paris before turning to sculpture around 1900. His bronze figures of dancers and athletes combine classical proportions with modern simplicity.</p><p>Kolbe's <strong><em>Morning</em></strong> (1925), a standing nude with arms raised, was placed by Ludwig Mies van der Rohe in the German Pavilion at the 1929 Barcelona International Exposition, one of the most famous architectural settings in modern design. His relationship with the Nazi regime (he continued working under it without resistance) complicates his legacy. The Georg Kolbe Museum in Berlin occupies his former home and studio.</p>`,
    faqs: [
      { question: "What is Kolbe known for?", answer: "Kolbe is known for <strong>elegant bronze nudes of dancers and athletes</strong>. His <em>Morning</em> in Mies van der Rohe's Barcelona Pavilion is one of the most celebrated pairings of modern sculpture and architecture." },
      { question: "Where can I see Kolbe's work?", answer: "The <strong>Georg Kolbe Museum</strong> in Berlin occupies his former studio. Works also appear at the Alte Nationalgalerie in Berlin and major German museums." },
    ],
  },
  {
    slug: 'do-ho-suh',
    bioFull: `<p><a href="/apps/masterpieces/artist/do-ho-suh"><strong>Do Ho Suh</strong></a> (born 1962) is a Korean sculptor and installation artist known for <strong>translucent fabric replicas of architectural spaces</strong> and works exploring themes of home, displacement, and collective identity. Born in Seoul, he studied at Seoul National University and the Rhode Island School of Design before settling in New York.</p><p>Suh's signature works include full-scale replicas of his apartments and childhood home sewn from transparent colored polyester fabric, creating ghostly, portable versions of domestic spaces. His <em>Floor</em> (1997-2000), a glass floor supported by thousands of tiny plastic figures, addresses the individual's relationship to the collective. He maintains studios in London, New York, and Seoul.</p>`,
    faqs: [
      { question: "What is Do Ho Suh known for?", answer: "Suh creates <strong>translucent fabric replicas of architectural spaces</strong>, including full-scale versions of apartments and childhood homes. These ghostly structures explore displacement, memory, and the meaning of home for someone living between cultures." },
      { question: "Where can I see Suh's installations?", answer: "Major works are at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, the <strong>Tate Modern</strong> in London, and the National Museum of Modern and Contemporary Art in Seoul. His fabric houses tour international exhibitions regularly." },
    ],
  },
  {
    slug: 'georges-braque',
    bioFull: `<p><a href="/apps/masterpieces/artist/georges-braque"><strong>Georges Braque</strong></a> (1882-1963) was a French painter and sculptor who co-invented <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a> with Pablo Picasso between 1908 and 1914. Born in Argenteuil, he trained as a house painter (like his father) before studying fine art in Paris. After a brief Fauvist period, his 1908 landscapes of L'Estaque, with their simplified geometric forms, prompted the critic Louis Vauxcelles to coin the term "Cubism."</p><p>Braque and Picasso worked so closely during the Cubist years that their paintings are sometimes hard to tell apart. Braque introduced <strong>collage into fine art</strong> (papier collé) and pioneered the use of stenciled letters, sand, and other materials on canvas. After World War I (where he was seriously wounded), his work grew quieter and more lyrical. Our collection includes works at leading museums.</p>`,
    faqs: [
      { question: "How did Braque contribute to Cubism?", answer: "Braque <strong>co-invented Cubism with Picasso</strong> between 1908-14 and introduced collage (papier collé) into fine art. His 1908 L'Estaque landscapes prompted the critic who coined the term 'Cubism.'" },
      { question: "Where can I see Braque's work?", answer: "Major works are at the <strong>Centre Pompidou</strong> in Paris, <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, and the Kunstmuseum Basel. The Fondation Maeght in Saint-Paul-de-Vence also holds important pieces." },
    ],
  },
  {
    slug: 'qi-baishi',
    bioFull: `<p><a href="/apps/masterpieces/artist/qi-baishi"><strong>Qi Baishi</strong></a> (1864-1957) was a Chinese painter and calligrapher who became one of the most celebrated artists in modern Chinese art. Born into a peasant family in Xiangtan, Hunan, he worked as a carpenter and wood carver before teaching himself painting. He didn't begin traveling and developing his mature style until his forties.</p><p>Qi Baishi is best known for his <strong>lively ink paintings of shrimp, crabs, birds, and flowers</strong>, rendered with a few confident brushstrokes that combine folk art directness with scholarly refinement. He was named a "People's Artist" by the Chinese government in 1953. In 2017, his <em>Twelve Landscape Screens</em> sold for <strong>$140.8 million</strong>, making it the most expensive Chinese artwork at auction.</p>`,
    faqs: [
      { question: "What is Qi Baishi known for?", answer: "Qi Baishi is famous for <strong>vivid ink-wash paintings of shrimp, crabs, and flowers</strong>. His seemingly simple brushwork combines folk art energy with classical Chinese painting techniques, bridging traditional and modern Chinese art." },
      { question: "Where can I see Qi Baishi's work?", answer: "The <strong>Beijing Fine Art Academy</strong> and the National Art Museum of China hold major collections. Works also appear at the <strong>Metropolitan Museum of Art</strong> and Asian art museums worldwide." },
    ],
  },
];

async function main() {
  let success = 0, fail = 0;
  for (const u of updates) {
    try {
      await p.artist.update({ where: { slug: u.slug }, data: { bioFull: u.bioFull, faqs: u.faqs } });
      console.log('OK', u.slug);
      success++;
    } catch (e) {
      console.error('FAIL', u.slug, e.message.slice(0, 120));
      fail++;
    }
  }
  console.log(`\nDone: ${success} success, ${fail} fail`);
  await p.$disconnect();
}
main();
