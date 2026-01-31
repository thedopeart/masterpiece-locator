const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'artist-unknown',
    bioFull: `<p><strong>Artist unknown</strong> designates works whose creators have not been identified. Throughout history, many skilled sculptors, metalworkers, and ceramicists worked without signing their pieces or were part of large workshops where individual authorship wasn't recorded. This is especially common with ancient and medieval art, where the concept of individual artistic credit didn't always apply.</p><p>The works attributed to unknown artists in our collection span cultures, centuries, and materials. From bronze figurines to carved stone reliefs, these pieces remind us that some of the finest objects in museum collections were made by people whose names didn't survive. Our collection includes <strong>8 works</strong> by unidentified artists at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Why are so many artworks attributed to unknown artists?", answer: "Before the Renaissance, <strong>individual authorship</strong> wasn't always valued or recorded. Workshop production, lack of signatures, and lost records mean many skilled makers remain anonymous." },
      { question: "Are unknown artist works less valuable?", answer: "Not at all. Many <strong>museum masterworks</strong> have no known creator. The quality and historical significance of the object matter more than a name in most cases." },
      { question: "Where can I see these works?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays these pieces alongside attributed works, letting the art speak for itself regardless of authorship." },
    ],
  },
  {
    slug: 'italian',
    bioFull: `<p><strong>Italian sculpture</strong> encompasses one of the richest artistic traditions in the Western world, spanning from ancient Roman works through the Renaissance and Baroque to the modern era. Italy produced many of history's greatest sculptors, from Donatello and Michelangelo to Bernini and Canova. The country's abundance of marble, particularly from Carrara, and its role as the center of the Roman Catholic Church created an unmatched demand for sculptural work.</p><p>Works attributed simply to "Italian" indicate pieces whose specific creator hasn't been identified but whose origin in the Italian artistic tradition is clear from style, materials, or provenance. Our collection includes <strong>7 works</strong> of Italian origin at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Why are some works labeled just 'Italian'?", answer: "When a piece clearly comes from the <strong>Italian tradition</strong> based on style and materials, but the specific sculptor can't be identified, museums attribute it broadly to its country of origin." },
      { question: "What materials did Italian sculptors favor?", answer: "<strong>Carrara marble</strong> was the most prized material, used from Roman times through the present. Italian artists also excelled in bronze casting, terracotta, and wood carving." },
      { question: "Where can I see Italian sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays Italian works alongside pieces from identified masters. The Uffizi, the Vatican Museums, and the Bargello in Florence hold the world's greatest collections." },
    ],
  },
  {
    slug: 'german',
    bioFull: `<p><strong>German sculpture</strong> has a long tradition stretching from medieval wood carving through the Baroque and Rococo to modern art. Germany produced some of Europe's finest woodcarvers, including Tilman Riemenschneider and Veit Stoss, whose altarpieces and religious figures rank among the masterworks of late Gothic art. The country was also a center for porcelain production, with Meissen and Nymphenburg setting European standards.</p><p>Works attributed to "German" indicate pieces from the German-speaking lands whose specific maker is unknown. Our collection includes <strong>6 works</strong> of German origin at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is German sculpture known for?", answer: "Germany's sculptural tradition is famous for <strong>late Gothic woodcarving</strong>, Baroque church decoration, and porcelain production. Masters like Riemenschneider created some of Europe's finest religious sculptures." },
      { question: "What materials did German sculptors use?", answer: "<strong>Lime wood</strong> was the preferred material for carved altarpieces and religious figures. German artists also worked in stone, bronze, ivory, and porcelain." },
      { question: "Where can I see German sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> holds several pieces. In Germany, the Germanisches Nationalmuseum in Nuremberg and Munich's Bayerisches Nationalmuseum have major collections." },
    ],
  },
  {
    slug: 'spanish',
    bioFull: `<p><strong>Spanish sculpture</strong> is especially known for its tradition of <strong>polychrome wood carving</strong>, or <em>imaginería</em>, which reached its peak in the 17th century. Spanish sculptors created intensely realistic religious figures painted in lifelike colors for churches and processional use. Masters like Juan Martínez Montañés, Alonso Cano, and Pedro de Mena produced devotional works of startling emotional power.</p><p>Works in our collection attributed to "Spanish" come from this broad tradition without a confirmed individual maker. Our collection includes <strong>5 Spanish works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Spanish sculpture known for?", answer: "Spain's greatest contribution to sculpture is <strong>polychrome wood carving</strong> (<em>imaginería</em>), producing intensely realistic religious figures painted in lifelike colors for churches and Holy Week processions." },
      { question: "What period was Spain's sculptural peak?", answer: "The <strong>17th century</strong> was the golden age of Spanish sculpture. Masters like Montañés, Cano, and Mena created devotional figures with an emotional realism unmatched in European art." },
      { question: "Where can I see Spanish sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has examples. Spain's finest collections are in the National Sculpture Museum in Valladolid and the cathedrals of Seville and Granada." },
    ],
  },
  {
    slug: 'tibeto-chinese',
    bioFull: `<p><strong>Tibeto-Chinese sculpture</strong> refers to Buddhist art produced at the intersection of Tibetan and Chinese traditions, particularly during the Yuan, Ming, and Qing dynasties when Tibet and China maintained close political and religious ties. These works blend <strong>Tibetan Buddhist iconography</strong> with Chinese casting techniques and aesthetic sensibilities, creating a distinctive hybrid style.</p><p>Common subjects include seated Buddhas, bodhisattvas, and wrathful deities rendered in gilt bronze with fine detail. The Qing Emperor Qianlong (r. 1735-1796) was a major patron of Tibeto-Chinese Buddhist art, commissioning works for temples in Beijing and beyond. Our collection includes <strong>5 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Tibeto-Chinese sculpture?", answer: "It's <strong>Buddhist art</strong> blending Tibetan iconography with Chinese casting techniques, produced mainly during the Yuan through Qing dynasties. Common forms include gilt bronze Buddhas, bodhisattvas, and wrathful deities." },
      { question: "Why do Tibetan and Chinese styles mix?", answer: "Close <strong>political and religious ties</strong> between Tibet and China, especially during the Yuan and Qing dynasties, created a hybrid artistic tradition. Qing Emperor Qianlong was a major patron of this style." },
      { question: "Where can I see Tibeto-Chinese art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays several examples. The Palace Museum in Beijing and the Rubin Museum of Art in New York hold major collections." },
    ],
  },
  {
    slug: 'english',
    bioFull: `<p><strong>English sculpture</strong> has a rich history from medieval church carvings through the great portrait busts of the 18th century and into the modern era. England's medieval churches and cathedrals contain some of Europe's finest stone carving, though much was destroyed during the Reformation. The 18th century brought a classical revival, with sculptors like Joseph Nollekens and John Flaxman producing refined marble works.</p><p>Works attributed simply to "English" are pieces whose specific maker hasn't been identified. Our collection includes <strong>5 English works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is English sculpture known for?", answer: "England's sculptural tradition includes <strong>medieval church carving</strong>, 18th-century classical portrait busts, and modern works by Henry Moore and Barbara Hepworth. Much medieval work was lost during the Reformation." },
      { question: "What materials did English sculptors use?", answer: "English sculptors worked in <strong>limestone, marble, alabaster, and wood</strong>. The country's rich tradition of woodcarving peaked with artists like Grinling Gibbons in the 17th century." },
      { question: "Where can I see English sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has examples. In England, the V&A in London holds the most comprehensive sculpture collection." },
    ],
  },
  {
    slug: 'jalisco',
    bioFull: `<p><strong>Jalisco</strong> was a pre-Columbian culture from western Mexico, part of the same <strong>shaft tomb tradition</strong> shared with neighboring Colima and Nayarit. Active from roughly 200 BCE to 500 CE, Jalisco artists produced distinctive ceramic figures characterized by elongated heads, pointed noses, and a more angular style compared to the rounded Colima forms.</p><p>Jalisco figures were placed in deep shaft-and-chamber tombs as offerings for the dead. They depict warriors, musicians, seated couples, and individuals in various poses, providing a window into daily life in western Mexico before European contact. Our collection includes <strong>5 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What makes Jalisco art distinctive?", answer: "Jalisco ceramics feature <strong>elongated heads and pointed noses</strong> with an angular style. They're part of the Western Mexico shaft tomb tradition, alongside Colima and Nayarit, but have their own recognizable aesthetic." },
      { question: "What do Jalisco figures depict?", answer: "They show <strong>warriors, musicians, seated couples</strong>, and daily-life scenes. Like their Colima and Nayarit neighbors, Jalisco artists focused on secular human subjects rather than religious iconography." },
      { question: "Where can I see Jalisco art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays several pieces. The National Museum of Anthropology in Mexico City holds the largest overall collection." },
    ],
  },
  {
    slug: 'flemish',
    bioFull: `<p><strong>Flemish sculpture</strong> refers to work from the southern Low Countries (present-day Belgium), a region that produced some of Europe's finest artists from the medieval period onward. Flemish sculptors excelled in <strong>wood carving, alabaster reliefs, and bronze</strong>, often creating elaborate altarpieces and devotional objects for churches across northern Europe.</p><p>The tradition reached its peak in the 15th and 16th centuries, when Antwerp and Brussels workshops exported carved altarpieces throughout the continent. Flemish sculptors were known for their attention to naturalistic detail and expressive faces. Our collection includes <strong>5 Flemish works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Flemish sculpture known for?", answer: "Flemish artists excelled at <strong>carved wooden altarpieces</strong> and alabaster reliefs. Workshops in Antwerp and Brussels exported elaborate church furnishings throughout northern Europe in the 15th and 16th centuries." },
      { question: "What materials did Flemish sculptors use?", answer: "They worked primarily in <strong>oak wood, alabaster, and bronze</strong>. Polychromed wooden altarpieces with gilded details were a Flemish specialty, known for their naturalistic figures and expressive faces." },
      { question: "Where can I see Flemish sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has examples. Major European collections include the Royal Museums of Fine Arts in Brussels and the Rijksmuseum in Amsterdam." },
    ],
  },
  {
    slug: 'archaic',
    bioFull: `<p><strong>Archaic</strong> designates art from the Archaic period of ancient Greece (roughly 700-480 BCE), a time when Greek sculptors developed the conventions that would define Western art. The period is famous for the <strong>kouros and kore</strong> figures: rigid, forward-facing statues of young men and women with the distinctive "Archaic smile." These carved marble figures evolved steadily toward greater naturalism over two centuries.</p><p>Archaic sculptors also produced elaborate temple decoration, relief carvings, and small bronze votives. The period ended with the Persian Wars, after which Greek art entered the Classical phase. Our collection includes <strong>4 Archaic works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What defines Archaic Greek sculpture?", answer: "The hallmarks are <strong>kouros and kore figures</strong>: rigid, frontal statues with the characteristic \"Archaic smile.\" Over two centuries, these figures evolved from stiff forms toward increasingly natural poses." },
      { question: "When was the Archaic period?", answer: "The Archaic period lasted from roughly <strong>700 to 480 BCE</strong>, ending with the Persian Wars. It laid the foundation for the Classical period's naturalistic human figures." },
      { question: "Where can I see Archaic sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has several pieces. The National Archaeological Museum in Athens and the Acropolis Museum hold the finest collections." },
    ],
  },
  {
    slug: 'lombard',
    bioFull: `<p><strong>Lombard sculpture</strong> refers to works from Lombardy in northern Italy, a region with a rich artistic tradition stretching from the early medieval period through the Renaissance. Lombardy's position as a crossroads between Italian, Germanic, and French artistic traditions gave its sculpture a distinctive character. Milan, the region's capital, was a major center for both stone carving and metalwork.</p><p>Lombard sculptors contributed to major building projects including Milan Cathedral and the Certosa di Pavia, producing carved facades, capitals, and devotional figures. Our collection includes <strong>4 Lombard works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Lombard sculpture?", answer: "It refers to sculpture from <strong>Lombardy in northern Italy</strong>, a region at the crossroads of Italian, Germanic, and French traditions. Milan was the main center for stone carving and metalwork." },
      { question: "What are notable Lombard sculptural projects?", answer: "Major projects include the decoration of <strong>Milan Cathedral</strong> and the Certosa di Pavia, both featuring elaborate carved facades, figures, and architectural ornament spanning several centuries." },
      { question: "Where can I see Lombard art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has examples. In Italy, the Museo del Duomo in Milan and the Certosa di Pavia display the tradition at its finest." },
    ],
  },
  {
    slug: 'pietro-tacca',
    bioFull: `<p><a href="/apps/masterpieces/artist/pietro-tacca"><strong>Pietro Tacca</strong></a> (1577-1640) was an Italian sculptor and the chief pupil of <a href="/apps/masterpieces/artist/giambologna"><strong>Giambologna</strong></a>, whom he succeeded as court sculptor to the Medici in 1608. Working in Florence, Tacca bridged the <strong>Mannerist and early Baroque</strong> styles, producing monumental bronzes that remain landmarks of their cities.</p><p>His most famous works include the <em>Monument of the Four Moors</em> in Livorno and the <strong>equestrian statue of Philip IV</strong> in Madrid, notable for its daringly balanced rearing horse. He also created Florence's beloved <em>Il Porcellino</em> fountain, a bronze boar whose nose visitors rub for luck. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Who trained Pietro Tacca?", answer: "Tacca was the chief pupil of <a href=\"/apps/masterpieces/artist/giambologna\"><strong>Giambologna</strong></a> and succeeded him as Medici court sculptor in 1608. He continued the Florentine tradition of monumental bronze casting." },
      { question: "What is Tacca's most famous work?", answer: "His <strong>equestrian statue of Philip IV</strong> in Madrid is celebrated for its daring composition: a rearing horse balanced on its hind legs. He also created Florence's beloved <em>Il Porcellino</em> bronze boar fountain." },
      { question: "Where can I see Tacca's sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> holds smaller works. His monumental pieces remain in Florence (Il Porcellino), Livorno (Four Moors), and Madrid (Philip IV)." },
    ],
  },
  {
    slug: 'constantin-meunier',
    bioFull: `<p><a href="/apps/masterpieces/artist/constantin-meunier"><strong>Constantin Meunier</strong></a> (1831-1905) is listed in our collection under a variant spelling of <a href="/apps/masterpieces/artist/constantin-emile-meunier"><strong>Constantin Emile Meunier</strong></a>. This Belgian sculptor and painter became one of Europe's principal social-realist artists, famous for his bronze monuments celebrating <strong>industrial workers, miners, and dockworkers</strong>.</p><p>After painting for 30 years, Meunier returned to sculpture at age 50, creating powerful bronzes like <em>The Puddler</em>, <em>The Hammerman</em>, and the <strong>Monument to Labour</strong>. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Is this the same as Constantin Emile Meunier?", answer: "Yes. <a href=\"/apps/masterpieces/artist/constantin-emile-meunier\"><strong>Constantin Emile Meunier</strong></a> appears under both names in museum catalogs. He was a Belgian social-realist sculptor known for bronze monuments to industrial workers." },
      { question: "What is Meunier known for?", answer: "He's famous for <strong>social-realist bronze sculpture</strong> depicting laborers, miners, and dockworkers. His Monument to Labour elevated the working class to monumental artistic subjects." },
      { question: "Where can I see Meunier's work?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds several bronzes. The Constantin Meunier Museum in Brussels preserves his studio and a large collection of his work." },
    ],
  },
  {
    slug: 'john-trumbull',
    bioFull: `<p><a href="/apps/masterpieces/artist/john-trumbull"><strong>John Trumbull</strong></a> (1756-1843) was an American painter best known for his <strong>historical paintings of the American Revolution</strong>. Born in Lebanon, Connecticut, he served as an aide-de-camp to George Washington before studying art in London under Benjamin West. Trumbull's firsthand experience of the war gave his paintings an authority that pure studio painters couldn't match.</p><p>His most famous work, <em>Declaration of Independence</em>, hangs in the U.S. Capitol Rotunda. He also painted battle scenes, portraits of Founding Fathers, and landscapes. Trumbull donated his collection to Yale, founding what became the <strong>Yale University Art Gallery</strong>, the oldest college art museum in the Western hemisphere.</p>`,
    faqs: [
      { question: "What is John Trumbull famous for?", answer: "Trumbull is known as the <strong>\"Painter of the Revolution\"</strong> for his historical canvases depicting the American War of Independence. His <em>Declaration of Independence</em> hangs in the U.S. Capitol Rotunda." },
      { question: "Did Trumbull fight in the Revolution?", answer: "Yes. He served as <strong>aide-de-camp to George Washington</strong> before pursuing art. His military experience gave his battle paintings a firsthand authenticity that set them apart." },
      { question: "What is Trumbull's legacy?", answer: "He founded the <strong>Yale University Art Gallery</strong> by donating his collection, creating the oldest college art museum in the Western hemisphere. His historical paintings remain icons of American identity." },
    ],
  },
  {
    slug: 'clodion-claude-michel',
    bioFull: `<p><a href="/apps/masterpieces/artist/clodion-claude-michel"><strong>Clodion</strong></a> (1738-1814), born Claude Michel, was a French sculptor who bridged the <strong>Rococo and Neoclassical</strong> eras. He trained under his uncle Lambert-Sigisbert Adam and later Jean-Baptiste Pigalle before spending nine years in Rome (1762-1771). Clodion became the most sought-after maker of small-scale terracotta figures in 18th-century France.</p><p>His signature subjects were <strong>nymphs, satyrs, and bacchantes</strong>, modeled with a lively sensuality that collectors prized. While the French Revolution disrupted his career, he adapted to the Neoclassical taste and continued working until his death. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/met"><strong>Met</strong></a> and the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Clodion known for?", answer: "Clodion was the leading maker of <strong>small-scale terracotta sculpture</strong> in 18th-century France. His lively nymphs, satyrs, and bacchantes were prized by collectors for their sensual energy." },
      { question: "What style did Clodion work in?", answer: "He began in the <strong>Rococo style</strong> with playful mythological subjects, then adapted to Neoclassicism after the French Revolution. His terracottas bridged both periods with characteristic skill." },
      { question: "Where can I see Clodion's work?", answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Met</strong></a> in New York and the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> both hold examples. The Louvre in Paris has his largest museum collection." },
    ],
  },
  {
    slug: 'frederick-william-macmonnies',
    bioFull: `<p><a href="/apps/masterpieces/artist/frederick-william-macmonnies"><strong>Frederick William MacMonnies</strong></a> (1863-1937) was an American sculptor of the <strong>Beaux-Arts school</strong> and one of the most successful expatriate artists of his generation. He apprenticed under <a href="/apps/masterpieces/artist/augustus-saint-gaudens"><strong>Augustus Saint-Gaudens</strong></a> at age 17, then studied in Paris at the École des Beaux-Arts. He was the first American sculptor to win a gold medal at the Paris Salon.</p><p>MacMonnies' grand <strong>Columbian Fountain</strong> for the 1893 World's Columbian Exposition in Chicago made him famous. His <em>Bacchante and Infant Faun</em> caused a public controversy over its nudity, eventually prompting him to shift toward less provocative subjects. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> and the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Who trained MacMonnies?", answer: "He apprenticed under <a href=\"/apps/masterpieces/artist/augustus-saint-gaudens\"><strong>Augustus Saint-Gaudens</strong></a> at 17, then studied at Paris's <strong>École des Beaux-Arts</strong>. He became the first American sculptor to win a gold medal at the Paris Salon." },
      { question: "What is MacMonnies' most famous work?", answer: "His <strong>Columbian Fountain</strong> for the 1893 World's Columbian Exposition in Chicago made him famous. His <em>Bacchante and Infant Faun</em> sparked a major controversy over its nudity." },
      { question: "Where can I see MacMonnies' sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> and the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> both hold works. The Met in New York displays his <em>Bacchante</em>." },
    ],
  },
  {
    slug: 'master-of-the-saint-omer-apostles',
    bioFull: `<p>The <strong>Master of the Saint-Omer Apostles</strong> is the conventional name given to an unidentified medieval sculptor active in northern France or the Low Countries in the <strong>14th century</strong>. Named after a group of carved Apostle figures associated with Saint-Omer in the Pas-de-Calais region, this anonymous master produced devotional stone or wood sculptures in the Gothic style.</p><p>Like many medieval artists, the Master is known only through the group of works attributed to his hand based on stylistic similarities. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was the Master of the Saint-Omer Apostles?", answer: "An <strong>anonymous medieval sculptor</strong> named after carved Apostle figures associated with Saint-Omer in northern France. The conventional name groups works attributed to the same hand based on style." },
      { question: "When was the Master active?", answer: "The sculptor was active in the <strong>14th century</strong> in northern France or the Low Countries, producing Gothic devotional figures. Individual identity was rarely recorded for medieval workshop sculptors." },
      { question: "Where can I see these works?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds three pieces attributed to this master, providing a window into 14th-century Gothic carving traditions." },
    ],
  },
  {
    slug: 'aztec-mexica',
    bioFull: `<p><strong>Aztec (Mexica)</strong> refers to the dominant people of the Aztec Empire, centered at <strong>Tenochtitlan</strong> (present-day Mexico City) from the 14th to early 16th centuries. Mexica sculptors inherited over 2,000 years of Mesoamerican stone carving tradition and produced powerful religious imagery in volcanic rock, jade, and turquoise for temples and public ceremonial spaces.</p><p>The Mexica are distinguished from the broader "Ancient Aztec" label by their specific ethnic identity as the founders and rulers of the Triple Alliance empire. Their sculptural conventions include frontal views, strict <strong>symmetry</strong>, and turquoise mosaic decoration. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Who were the Mexica?", answer: "The <strong>Mexica</strong> were the dominant people of the Aztec Empire, founders of Tenochtitlan (now Mexico City). They ruled the Triple Alliance empire from the 14th century until the Spanish conquest in 1521." },
      { question: "What did Mexica sculptors create?", answer: "They produced <strong>religious stone sculpture</strong> for temples and ceremonies, using volcanic rock, jade, and turquoise. Their work follows strict conventions: frontal views, rigid symmetry, and turquoise mosaic decoration." },
      { question: "Where can I see Mexica art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays pieces. The National Museum of Anthropology in Mexico City holds the world's largest collection of Aztec/Mexica sculpture." },
    ],
  },
  {
    slug: 'benedetto-buglioni',
    bioFull: `<p><a href="/apps/masterpieces/artist/benedetto-buglioni"><strong>Benedetto Buglioni</strong></a> (c. 1459-1521) was an Italian Renaissance sculptor who specialized in <strong>glazed terracotta</strong>, working in a tradition closely associated with the famous della Robbia workshop. Trained under Luca and Andrea della Robbia, Buglioni opened his own studio with his brother in the early 1480s and developed a softer, more watercolor-like glaze palette that distinguished his work from the brighter della Robbia style.</p><p>His terracotta sculptures served as more affordable alternatives to marble for churches and public buildings. His masterwork, a <strong>St. Christine</strong> statue in Bolsena (1503-1508), shows his skill at combining the medium's decorative qualities with devotional purpose. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> and the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Buglioni known for?", answer: "He specialized in <strong>glazed terracotta sculpture</strong> in the della Robbia tradition, developing a softer, more watercolor-like glaze palette. His work was a more affordable alternative to marble for churches." },
      { question: "How does Buglioni relate to the della Robbias?", answer: "He trained under <strong>Luca and Andrea della Robbia</strong> before opening his own competing studio. His glazes are subtler than the bright della Robbia style, giving his work a distinctive softness." },
      { question: "Where can I see Buglioni's work?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> and the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> both display his terracottas." },
    ],
  },
  {
    slug: 'ancient-etruscan',
    bioFull: `<p><strong>Ancient Etruscan sculpture</strong> was produced in central Italy between the 10th and 1st centuries BCE by the Etruscan civilization, which predated and deeply influenced Rome. Etruscan artists were <strong>master bronzesmiths</strong> whose work was exported across the Mediterranean. They also excelled in terracotta, which became their preferred medium due to the lack of local hard stone like marble.</p><p>Etruscan sculpture has distinctive features: egg-shaped heads, almond eyes, long noses, and expressive hand gestures. Most surviving works come from tombs, which were packed with <strong>sarcophagi and grave goods</strong>. The Sarcophagus of the Spouses, showing a reclining couple at a banquet, is one of the most iconic. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What are Etruscan sculptures made of?", answer: "Etruscans were <strong>master bronzesmiths</strong> and also excelled in terracotta. They preferred terracotta for larger works because central Italy lacked local marble or hard stone quarries." },
      { question: "What do Etruscan sculptures look like?", answer: "They feature <strong>egg-shaped heads, almond eyes</strong>, long noses, and expressive gestures. While influenced by Greek art from 750 BCE onward, Etruscan sculpture retained its own distinctive character." },
      { question: "Where can I see Etruscan art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has pieces. Italy's National Etruscan Museum in Rome (Villa Giulia) and the Vatican's Museo Etrusco hold the finest collections." },
    ],
  },
  {
    slug: 'erastus-dow-palmer',
    bioFull: `<p><a href="/apps/masterpieces/artist/erastus-dow-palmer"><strong>Erastus Dow Palmer</strong></a> (1817-1904) was a self-taught American sculptor from Albany, New York. He began his career as a <strong>portrait cameo-carver</strong> before transitioning to full-scale marble sculpture in the Neoclassical style. Unlike most American sculptors of his generation, Palmer never studied in Italy, developing his craft entirely in the United States.</p><p>His major exhibition, "the Palmer Marbles," at the National Academy of Design in 1856 established his reputation. His <em>White Captive</em> (1858) is held at the Met. Palmer also created the <strong>Chancellor Robert R. Livingston</strong> statue in the U.S. Capitol. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What is Erastus Dow Palmer known for?", answer: "Palmer was a <strong>self-taught Neoclassical sculptor</strong> who never studied abroad. His marble figures, including <em>The White Captive</em>, earned him recognition as one of 19th-century America's leading sculptors." },
      { question: "What made Palmer unusual?", answer: "Unlike most American sculptors of his era, Palmer <strong>never studied in Italy</strong>. He developed his craft entirely in Albany, New York, starting as a portrait cameo-carver before moving to full-scale marble." },
      { question: "Where can I see Palmer's sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds several works. His <em>White Captive</em> is at the Met, and a statue of Livingston stands in the U.S. Capitol." },
    ],
  },
  {
    slug: 'sino-tibetan',
    bioFull: `<p><strong>Sino-Tibetan sculpture</strong> refers to Buddhist art produced in the cultural overlap between China and Tibet, particularly during the Ming and Qing dynasties. These works combine <strong>Tibetan Buddhist iconography</strong> with Chinese metalworking and aesthetic traditions, typically rendered in gilt bronze with fine decorative detail.</p><p>Common subjects include seated Buddhas, multi-armed bodhisattvas, and deities from the Tibetan Buddhist pantheon. The style reflects centuries of religious and political exchange between the two regions. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Sino-Tibetan sculpture?", answer: "<strong>Buddhist art</strong> combining Tibetan iconography with Chinese metalworking techniques. Most pieces are gilt bronze figures of Buddhas, bodhisattvas, and Tibetan Buddhist deities from the Ming and Qing dynasties." },
      { question: "How does it differ from Tibeto-Chinese art?", answer: "The terms overlap significantly. \"Sino-Tibetan\" tends to emphasize the <strong>Chinese production context</strong>, while both labels describe the same hybrid Buddhist artistic tradition spanning Tibet and China." },
      { question: "Where can I see Sino-Tibetan art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays several pieces. The Rubin Museum of Art in New York and the Palace Museum in Beijing hold major collections." },
    ],
  },
  {
    slug: 'th-odore-rivi-re',
    bioFull: `<p><a href="/apps/masterpieces/artist/th-odore-rivi-re"><strong>Théodore Rivière</strong></a> (1857-1912) was a French sculptor known for his <strong>Orientalist subjects</strong> and Art Nouveau style. He studied under Falguière and Jouffroy in Paris, developing a specialty in historical, mythological, and allegorical compositions using mixed materials including bronze, marble, onyx, and ivory.</p><p>His masterwork, <em>Salammbô chez Matho</em>, based on Flaubert's novel, won a gold medal at the <strong>1900 Exposition Universelle</strong> and earned him an appointment as officer of the Légion d'honneur in 1906. Rivière was one of the leading chryselephantine (gold and ivory) sculptors of the Belle Époque. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What is Théodore Rivière known for?", answer: "Rivière specialized in <strong>Orientalist and mythological sculpture</strong> using mixed materials. His chryselephantine (bronze and ivory) works were among the finest of the Belle Époque era." },
      { question: "What is his most famous work?", answer: "<em>Salammbô chez Matho</em>, based on Flaubert's novel, won a <strong>gold medal at the 1900 Exposition Universelle</strong>. It combines bronze, marble, and ivory in a dramatic Orientalist composition." },
      { question: "Where can I see Rivière's sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds several pieces. The Musée d'Orsay in Paris also displays his work alongside other Belle Époque sculptors." },
    ],
  },
  {
    slug: 'albert-ernest-carrier-belleuse',
    bioFull: `<p><a href="/apps/masterpieces/artist/albert-ernest-carrier-belleuse"><strong>Albert-Ernest Carrier-Belleuse</strong></a> (1824-1887) was one of the most important French sculptors of the 19th century and a remarkably versatile artist. He worked in England with the Minton pottery (1850-1855), served as artistic director at <strong>Sèvres porcelain</strong> manufactory from 1876, and maintained a busy Paris studio producing everything from monumental commissions to decorative terracottas.</p><p>Carrier-Belleuse is also notable for having <strong>employed Auguste Rodin</strong> as his assistant from 1864 to 1870. His own style ranged freely from unadorned realism to neo-Baroque exuberance and Rococo elegance. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> and the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Carrier-Belleuse's connection to Rodin?", answer: "He <strong>employed Auguste Rodin as his assistant</strong> from 1864 to 1870. Carrier-Belleuse was already one of France's most prominent sculptors when the young Rodin worked in his studio." },
      { question: "What roles did Carrier-Belleuse hold?", answer: "He served as <strong>artistic director at Sèvres</strong> porcelain manufactory from 1876 and earlier worked with England's Minton pottery. He was both a fine artist and an influential figure in decorative arts production." },
      { question: "Where can I see his work?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> and the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> both hold examples of his sculpture." },
    ],
  },
  {
    slug: 'pre-angkorean',
    bioFull: `<p><strong>Pre-Angkorean sculpture</strong> refers to Khmer art from the 6th through 8th centuries CE, before the founding of the Angkor empire. The oldest known Khmer stone sculptures, dating to the early 6th century, were found in cave temples at <strong>Phnom Da</strong> near Angkor Borei, a major city of the Funan kingdom.</p><p>These early works show strong <strong>Indian influence</strong>, depicting Hindu and Buddhist deities in styles borrowed from Indian merchants and missionaries. But Khmer artists also pushed toward their own identity, breaking from Indian models with increasingly local features. Common subjects include Vishnu, Shiva (often as a linga), and the combined deity <strong>Harihara</strong>. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Pre-Angkorean sculpture?", answer: "It's Khmer art from the <strong>6th through 8th centuries</strong>, before the Angkor empire. These early sandstone sculptures of Hindu and Buddhist deities show Indian influence but with emerging local Khmer characteristics." },
      { question: "What subjects do Pre-Angkorean sculptures depict?", answer: "Most depict <strong>Hindu and Buddhist deities</strong>: Vishnu, Shiva (often as a linga), Buddha, and Harihara, a combined form of Vishnu and Shiva unique to Khmer religious art." },
      { question: "Where can I see Pre-Angkorean art?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> displays several pieces. The National Museum of Cambodia in Phnom Penh holds the most comprehensive collection." },
    ],
  },
  {
    slug: 'james-pradier',
    bioFull: `<p><a href="/apps/masterpieces/artist/james-pradier"><strong>James Pradier</strong></a> (1790-1852), born Jean-Jacques Pradier in Geneva, was one of the most renowned Swiss sculptors of the 19th century. He won the <strong>Prix de Rome</strong> and studied at the Villa Medici from 1814 to 1818 before launching his career at the Paris Salon in 1819. His Neoclassical style combined cool, polished finishes with a sensual treatment of the human figure.</p><p>Pradier secured major public commissions in Paris and was known for mythological subjects with <strong>subtle erotic undertones</strong> beneath their classical surface. He was one of the most commercially successful sculptors of his generation. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What style did Pradier work in?", answer: "Pradier worked in a <strong>Neoclassical style</strong> with polished finishes and sensual treatment of the human figure. His mythological subjects balanced classical restraint with subtle erotic undertones." },
      { question: "What was Pradier's training?", answer: "He won the <strong>Prix de Rome</strong> and studied at the Villa Medici in Rome from 1814 to 1818. Born in Geneva, he built his career in Paris and became one of the city's most successful sculptors." },
      { question: "Where can I see Pradier's work?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds several pieces. The Musée d'Art et d'Histoire in Geneva and the Louvre in Paris also display his sculpture." },
    ],
  },
  {
    slug: 'maya',
    bioFull: `<p><strong>Maya sculpture</strong> spans over two millennia, from the first millennium BCE through the post-Classic period. Maya artists worked in stone, stucco, wood, bone, shell, and fired clay, creating everything from monumental stelae to miniature jade carvings. During the Classic Period (c. 250-900 CE), powerful city-states like <strong>Tikal, Palenque, and Copán</strong> commissioned elaborate sculptural programs for royal courts and temples.</p><p>The stelae, tall carved stone slabs covered with portraits and hieroglyphic texts, are the most distinctive Maya sculptural form. Maya artists are notable for having <strong>signed their works</strong>, an unusual practice in the ancient Americas. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What are Maya stelae?", answer: "<strong>Stelae</strong> are tall carved stone slabs covered with ruler portraits and hieroglyphic texts. They were erected at major city-states during the Classic Period (250-900 CE) to honor kings and record events." },
      { question: "What materials did Maya sculptors use?", answer: "They worked in <strong>stone, stucco, wood, bone, shell, jade</strong>, and fired clay. Jade was especially valued, symbolizing water, new growth, and primordial places in Maya cosmology." },
      { question: "Where can I see Maya sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has pieces. The National Museum of Anthropology in Mexico City and the Museo Nacional de Arqueología in Guatemala hold the largest collections." },
    ],
  },
  {
    slug: 'rachette',
    bioFull: `<p><strong>Jean-Dominique Rachette</strong> (1744-1809) was a French-born sculptor who became the chief modeler at Russia's <strong>Imperial Porcelain Factory</strong> in Saint Petersburg from 1779. Born in Montpellier, he studied at the Academy of Fine Arts in Copenhagen and the Royal Academy in Paris before working in Denmark, Hamburg, and Berlin.</p><p>Rachette's most significant achievement was the <strong>"People of Russia" series</strong>, inspired by ethnographer Johann Gottlieb Georgi's book on the peoples of the Russian Empire. Running from 1780 to 1804, this ambitious porcelain series depicted the diverse ethnic groups of Russia. He was awarded the title of Academician in 1785 and professor of sculpture in 1800. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "Who was Rachette?", answer: "<strong>Jean-Dominique Rachette</strong> (1744-1809) was a French sculptor who became chief modeler at Russia's Imperial Porcelain Factory. He's best known for his \"People of Russia\" porcelain series." },
      { question: "What is the 'People of Russia' series?", answer: "An ambitious <strong>porcelain figure series</strong> (1780-1804) depicting the diverse ethnic groups of the Russian Empire, based on ethnographer Johann Gottlieb Georgi's published descriptions." },
      { question: "Where can I see Rachette's work?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> holds examples. The Hermitage and State Russian Museum in Saint Petersburg have the most comprehensive collections." },
    ],
  },
  {
    slug: 'giuseppe-mazza',
    bioFull: `<p><a href="/apps/masterpieces/artist/giuseppe-mazza"><strong>Giuseppe Maria Mazza</strong></a> (1653-1741) was the leading sculptor of <strong>Baroque Bologna</strong>. Originally trained as a painter, he brought a distinctly pictorial quality to his sculpture, working primarily in terracotta and stucco. Influenced by Alessandro Algardi but with an 18th-century vivacity, Mazza produced religious works for churches alongside mythological commissions for aristocratic patrons.</p><p>His compositions are balanced and self-contained, with fine surface detail that reflects his painter's eye. He created works for Prince Andreas of Liechtenstein and decorated churches across northern Italy. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a> and the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What is Giuseppe Mazza known for?", answer: "Mazza was the leading sculptor of <strong>Baroque Bologna</strong>, specializing in terracotta and stucco. His training as a painter gave his sculptural work a distinctive pictorial quality." },
      { question: "What subjects did Mazza sculpt?", answer: "He produced <strong>religious works for churches</strong> and mythological commissions for aristocratic patrons, including Prince Andreas of Liechtenstein. His style balanced Algardi's influence with 18th-century energy." },
      { question: "Where can I see Mazza's work?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> and the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> both hold examples of his terracotta and stucco work." },
    ],
  },
  {
    slug: 'ancient-olmec',
    bioFull: `<p>The <strong>Olmec civilization</strong> (c. 1400-400 BCE) is regarded as the "mother culture" of Mesoamerica, the first major civilization to develop in the region. Based in the Gulf Coast lowlands of present-day Veracruz and Tabasco, Mexico, Olmec artists produced monumental stone sculpture and fine jade carvings that established the artistic vocabulary for all later Mesoamerican cultures.</p><p>The Olmec are best known for their <strong>colossal basalt heads</strong>. Sixteen have been recovered, ranging from 1.5 to 3.4 meters tall and weighing up to 25 tons. Carved from boulders transported over 150 kilometers from the Sierra de los Tuxtlas mountains, they likely portray individual rulers. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>National Museum of Anthropology</strong></a> in Mexico City and the <a href="/apps/masterpieces/museum/met"><strong>Met</strong></a>.</p>`,
    faqs: [
      { question: "What are the Olmec colossal heads?", answer: "Sixteen <strong>basalt heads</strong> ranging up to 3.4 meters tall and 25 tons have been found at Olmec sites. Transported over 150 km, they likely portray powerful individual rulers and are Mesoamerica's most iconic ancient sculptures." },
      { question: "Why are the Olmec called the 'mother culture'?", answer: "The Olmec were the <strong>first major Mesoamerican civilization</strong> (c. 1400-400 BCE), establishing artistic styles and traditions that influenced all later cultures including the Maya, Zapotec, and Aztec." },
      { question: "Where can I see Olmec art?", answer: "The <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>National Museum of Anthropology</strong></a> in Mexico City has the best collection. The <a href=\"/apps/masterpieces/museum/met\"><strong>Met</strong></a> in New York also displays important Olmec pieces." },
    ],
  },
  {
    slug: 'alexander-blazys',
    bioFull: `<p><a href="/apps/masterpieces/artist/alexander-blazys"><strong>Alexander Blazys</strong></a> (1894-1963) was a Lithuanian-American sculptor who brought <strong>modernist sculpture</strong> to Cleveland after immigrating in 1925. He had studied in Europe and exhibited at the Salon des Indépendants in Paris before settling in Ohio, where he headed the sculpture department at the Cleveland School of Art from 1926 to 1938.</p><p>Blazys won first prize for sculpture at the Cleveland Museum's annual May Shows three years running (1926-1928). His style merged <strong>rhythmic movement inspired by music</strong> with Cubist geometric planes, and he also designed ceramic pieces for Cowan Pottery. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was Alexander Blazys?", answer: "A <strong>Lithuanian-American sculptor</strong> (1894-1963) who introduced modernist sculpture to Cleveland. He headed the Cleveland School of Art's sculpture department and won three consecutive May Show first prizes." },
      { question: "What style did Blazys work in?", answer: "He combined <strong>Cubist geometric planes</strong> with rhythmic movement inspired by music. He also designed ceramics for Cowan Pottery, bridging fine art and decorative arts production." },
      { question: "Where can I see Blazys' work?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds several sculptures, including pieces that won first prize at the museum's annual May Shows in the late 1920s." },
    ],
  },
  {
    slug: 'henry-kirke-brown',
    bioFull: `<p><a href="/apps/masterpieces/artist/henry-kirke-brown"><strong>Henry Kirke Brown</strong></a> (1814-1886) was an American sculptor who helped bring <strong>bronze casting techniques</strong> to the United States. After studying in Italy from 1842 to 1846, he returned determined to create a distinctively American sculptural tradition rather than simply imitating European classical models.</p><p>Brown was one of the first American sculptors to cast his own works in bronze. His most famous piece, the <strong>equestrian statue of George Washington</strong> in New York's Union Square (1856), was only the second equestrian statue made in the United States. He championed realist style and American themes throughout his career. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What is Henry Kirke Brown known for?", answer: "Brown was a pioneer in <strong>American bronze casting</strong> and championed distinctly American subjects over European classical imitation. His George Washington statue in Union Square was only the second equestrian statue made in the US." },
      { question: "Why is Brown historically important?", answer: "He was among the <strong>first American sculptors to cast his own bronzes</strong>, helping establish the technical infrastructure for American bronze sculpture. He insisted on American themes over classical copies." },
      { question: "Where can I see Brown's sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> holds works. His equestrian George Washington stands in Union Square, New York City." },
    ],
  },
  {
    slug: 'richard-serra',
    bioFull: `<p><a href="/apps/masterpieces/artist/richard-serra"><strong>Richard Serra</strong></a> (1938-2024) was an American sculptor known for his massive <strong>steel installations</strong> that transform the spaces they occupy. Born in San Francisco, he studied at Yale before emerging in the late 1960s as one of the most important process and minimalist artists. His mature work consists of enormous curved and tilted steel plates, often weighing hundreds of tons.</p><p>Serra's sculptures demand physical engagement. Walking through pieces like <em>Torqued Ellipses</em> or <em>The Matter of Time</em> creates a visceral experience of enclosure, weight, and shifting perspective that can't be captured in photographs. His public installations sparked both admiration and controversy, notably the <em>Tilted Arc</em> in New York, which was removed after a public hearing in 1989. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Olympic Sculpture Park</strong></a> in Seattle.</p>`,
    faqs: [
      { question: "What is Richard Serra known for?", answer: "Serra is known for <strong>massive steel sculptures</strong> made of curved and tilted plates, often weighing hundreds of tons. His work transforms architectural space and demands physical engagement from viewers." },
      { question: "What happened with Tilted Arc?", answer: "<em>Tilted Arc</em> (1981), a 120-foot curved steel wall in Manhattan's Federal Plaza, was <strong>removed in 1989</strong> after public hearings. The controversy became a landmark debate about public art and artistic freedom." },
      { question: "Where can I see Serra's sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/olympic-sculpture-park\"><strong>Olympic Sculpture Park</strong></a> in Seattle displays his outdoor work. The Guggenheim Bilbao holds <em>The Matter of Time</em>, and Dia:Beacon in New York shows several large pieces." },
    ],
  },
  {
    slug: 'ignaz-g-nther',
    bioFull: `<p><a href="/apps/masterpieces/artist/ignaz-g-nther"><strong>Ignaz Günther</strong></a> (1725-1775) was the most important sculptor in 18th-century Germany, working primarily in <strong>polychromed wood</strong> in the Bavarian Rococo tradition. Born in Altmannstein, he studied in Munich, Mannheim, and Vienna before establishing himself as Bavaria's leading church sculptor.</p><p>Günther's figures are ecstatic and elegant, with <strong>elongated proportions</strong> and angular drapery arrangements that give them a distinctive nervous energy. His masterwork, the polychrome <em>Guardian Angel</em> (1763) in Munich's Bürgersaal, captures the Rococo at its most refined. He was appointed court sculptor in 1773, just two years before his death. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What is Ignaz Günther known for?", answer: "Günther is considered the <strong>finest German sculptor of the 18th century</strong>. He carved polychrome wood figures with elongated proportions and angular drapery that define the Bavarian Rococo style." },
      { question: "What is his most famous work?", answer: "The polychrome <em>Guardian Angel</em> (1763) in Munich's Bürgersaal is considered his masterwork. The <strong>elegantly elongated figures</strong> with their angular drapery capture Bavarian Rococo at its peak." },
      { question: "Where can I see Günther's sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds examples. In Munich, his works remain in churches including the Bürgersaal and various Bavarian pilgrimage churches." },
    ],
  },
  {
    slug: 'andrea-riccio',
    bioFull: `<p><a href="/apps/masterpieces/artist/andrea-riccio"><strong>Andrea Riccio</strong></a> (c. 1470-1532), born Andrea Briosco, was an Italian Renaissance sculptor and the foremost bronze artist of early 16th-century Padua. Nicknamed "Riccio" (curly) for his hair, he trained as a goldsmith before becoming the leading figure in <strong>Paduan bronze sculpture</strong>.</p><p>Riccio's masterwork is the monumental <strong>paschal candlestick</strong> at the Basilica of San Antonio in Padua (1507-1516), decorated with reliefs of classical and allegorical subjects. He also produced a huge output of smaller bronzes: inkwells, door knockers, fire-dogs, and decorative figures that were collected across Europe. Called "sovereign over bronze" by contemporaries, he established Padua as the greatest center for bronze sculpture in 16th-century Italy. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What is Andrea Riccio known for?", answer: "Riccio was the leading <strong>bronze sculptor of Renaissance Padua</strong>, known for both monumental works and small collectible bronzes. His contemporaries called him \"sovereign over bronze.\"" },
      { question: "What is Riccio's masterwork?", answer: "The <strong>paschal candlestick</strong> at San Antonio in Padua (1507-1516) is his greatest achievement. Standing over 3.5 meters tall, it's decorated with classical and allegorical relief scenes." },
      { question: "Where can I see Riccio's bronzes?", answer: "The <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> holds several pieces. The Basilica of San Antonio in Padua displays his monumental candlestick, and the V&A in London has small bronzes." },
    ],
  },
  {
    slug: 'ancient-maya',
    bioFull: `<p>The <strong>Ancient Maya</strong> produced one of the most sophisticated sculptural traditions in the pre-Columbian Americas, spanning from the first millennium BCE through the Spanish conquest. Maya artists worked in <strong>stone, stucco, wood, jade, bone, and shell</strong>, creating everything from monumental carved stelae to miniature jade pendants that were passed down for generations.</p><p>During the Classic Period (c. 250-900 CE), powerful city-states like Tikal, Calakmul, Palenque, and Copán commissioned elaborate sculptural programs. The Maya are notable for having <strong>signed their artworks</strong> and for their advanced hieroglyphic writing system, which adorns many sculptural surfaces. Our collection includes <strong>3 works</strong> at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>National Museum of Anthropology</strong></a> in Mexico City and the <a href="/apps/masterpieces/museum/british-library-london-uk"><strong>British Museum</strong></a>.</p>`,
    faqs: [
      { question: "What makes Maya sculpture distinctive?", answer: "Maya artists <strong>signed their works</strong> and incorporated hieroglyphic writing into sculptures. Their mastery of stone carving, jade, and stucco produced some of the most sophisticated art in the ancient Americas." },
      { question: "What are Maya stelae?", answer: "<strong>Stelae</strong> are tall carved stone slabs with ruler portraits and hieroglyphic texts, erected at major city-states during the Classic Period (250-900 CE) to honor rulers and record historical events." },
      { question: "Where can I see Ancient Maya sculpture?", answer: "The <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>National Museum of Anthropology</strong></a> in Mexico City and the <a href=\"/apps/masterpieces/museum/british-library-london-uk\"><strong>British Museum</strong></a> both hold important collections." },
    ],
  },
];

(async () => {
  let ok = 0, fail = 0;
  for (const u of updates) {
    try {
      await p.artist.update({ where: { slug: u.slug }, data: { bioFull: u.bioFull, faqs: u.faqs } });
      ok++;
      console.log(`OK ${u.slug}`);
    } catch (e) {
      fail++;
      console.log(`FAIL ${u.slug}: ${e.message}`);
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await p.$disconnect();
})();
