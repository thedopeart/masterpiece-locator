const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'scrovegni-chapel',
    description: `<p>The <strong>Scrovegni Chapel</strong> (Cappella degli Scrovegni) in Padua contains one of the most important fresco cycles in Western art, painted by <strong>Giotto</strong> between 1303 and 1305. Enrico Scrovegni commissioned the chapel to atone for his father's usury, which Dante condemned in the Inferno.</p><p>Giotto covered the walls with 38 scenes from the lives of the Virgin Mary and Christ, plus a monumental <strong>Last Judgment</strong> on the entrance wall. These frescoes broke with Byzantine convention, introducing naturalistic emotion and spatial depth that launched the course of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting. Visits are limited to 25 people for 15 minutes at a time, with a mandatory dehumidification chamber beforehand, to protect the fragile surfaces.</p>`,
  },
  {
    slug: 'cloisters',
    description: `<p>The <strong>Cloisters</strong> in Fort Tryon Park, northern Manhattan, is a branch of the Metropolitan Museum of Art dedicated to the art and architecture of medieval Europe. The museum incorporates elements from five French medieval cloisters, reassembled stone by stone.</p><p>Opened in 1938, the building was funded by John D. Rockefeller Jr., who also donated the surrounding parkland and purchased land across the Hudson to preserve the view. The collection includes the <strong>Unicorn Tapestries</strong>, a series of seven late-medieval tapestries of mysterious origin, and Romanesque and Gothic sculpture, stained glass, and illuminated manuscripts.</p>`,
  },
  {
    slug: 'museum-ludwig-cologne-germany',
    description: `<p>The <strong>Museum Ludwig</strong> in Cologne opened in 1986, built to house the Pop Art collection donated by chocolate manufacturers Peter and Irene Ludwig. Their gift of over 350 works included one of Europe's largest collections of American Pop Art outside the United States.</p><p>Roy Lichtenstein, Andy Warhol, and Jasper Johns are extensively represented. The museum also holds the <strong>third-largest Picasso collection in the world</strong>, with over 900 works spanning the artist's career. Russian avant-garde, German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>, and contemporary photography round out a collection focused on 20th- and 21st-century art.</p>`,
  },
  {
    slug: 'harvard-art-museums-cambridge-ma-us',
    description: `<p>The <strong>Harvard Art Museums</strong> in Cambridge, Massachusetts, unite three formerly separate collections: the Fogg Museum (founded 1895), the Busch-Reisinger Museum (Germanic art), and the Arthur M. Sackler Museum (Asian and Islamic art). A 2014 renovation by Renzo Piano brought all three under one glass-roofed building.</p><p>The combined holdings exceed 250,000 objects, from ancient Greek vases to contemporary installations. Strengths include French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>, and medieval art. The Straus Center for Conservation, visible through glass walls, lets visitors watch conservators at work. It's among the most important university art museums in the world.</p>`,
  },
  {
    slug: 'royal-academy-of-arts-ra-london-uk',
    description: `<p>The <strong>Royal Academy of Arts</strong> was founded in 1768 by George III with Joshua Reynolds as its first president. It occupies Burlington House on Piccadilly, a Palladian mansion expanded over the centuries. The RA operates as an independent institution led by practicing artists and architects.</p><p>The permanent collection includes Michelangelo's <strong>Taddei Tondo</strong>, the only marble sculpture by Michelangelo in the United Kingdom, and a self-portrait by Reynolds. The annual Summer Exhibition, running since 1769, is the world's longest-running open-submission art show. A 2018 expansion by David Chipperfield connected Burlington House to Burlington Gardens, doubling the exhibition space.</p>`,
  },
  {
    slug: 'stedelijk-museum-amsterdam-netherlands',
    description: `<p>The <strong>Stedelijk Museum</strong> in Amsterdam opened in 1895 and focuses on modern and contemporary art and design from 1870 to the present. The collection of roughly 90,000 objects makes it one of the largest modern art museums in the world.</p><p>Strengths include De Stijl (Mondrian, Van Doesburg), <a href="/apps/masterpieces/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> (De Kooning, Pollock), Pop Art, and Fluxus. The museum holds the largest collection of Malevich paintings outside Russia. A 2012 extension nicknamed "the bathtub" for its white composite-clad shape doubled the exhibition space. CoBrA, Bauhaus, and contemporary design and photography fill out the holdings.</p>`,
  },
  {
    slug: 'national-museum-of-western-art-tokyo-japan',
    description: `<p>The <strong>National Museum of Western Art</strong> in Tokyo opened in 1959 to house the collection of Japanese industrialist Matsukata Kojiro, who acquired European art on a massive scale between 1916 and 1927. Le Corbusier designed the main building, now a UNESCO World Heritage Site.</p><p>The 6,000-work collection spans from medieval panel painting through 20th-century art, with strengths in French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionism</strong></a>. Monet, Renoir, and Rodin (over 50 bronzes in the forecourt) feature prominently. Matsukata's collection was confiscated by France after World War II and returned to Japan in 1959 as a diplomatic gesture.</p>`,
  },
  {
    slug: 'art-gallery-of-ontario-ago-toronto-canada',
    description: `<p>The <strong>Art Gallery of Ontario</strong> in Toronto was founded in 1900 and is one of the largest art museums in North America, with a collection of over 120,000 works. A 2008 transformation by Frank Gehry, who grew up across the street, wrapped the building in a curving glass and titanium facade.</p><p>The gallery holds the world's largest public collection of <strong>Henry Moore sculpture</strong>, donated by the artist in 1974. Canadian art, including the Group of Seven landscape painters and Indigenous works, forms the collection's backbone. European old masters, <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> paintings, contemporary art, and an extensive photography collection round out the holdings.</p>`,
  },
  {
    slug: 'st-peter39s-basilica-vatican',
    description: `<p><strong>St. Peter's Basilica</strong> in Vatican City is the largest church in the world by interior measure and one of Christianity's holiest sites. Construction began in 1506 under Pope Julius II, replacing Constantine's 4th-century basilica. Bramante, Michelangelo, Maderno, and Bernini all contributed to the design over 120 years.</p><p>Michelangelo's <strong>Pietà</strong> (1498-1499), carved when he was just 24, stands inside the first chapel on the right. Bernini's massive bronze baldachin rises 29 meters over the high altar, and his colonnade shapes the approach from St. Peter's Square. The basilica houses paintings, mosaics, and tombs spanning five centuries of papal history.</p>`,
  },
  {
    slug: 'kunstmuseum-bern-bern-switzerland',
    description: `<p>The <strong>Kunstmuseum Bern</strong> is the oldest art museum in Switzerland with a permanent collection, established in 1879. The main building on Hodlerstrasse holds over 3,000 paintings and 48,000 drawings, prints, and photographs spanning from medieval times to the present.</p><p>Paul Klee, who grew up in Bern, is well represented (the nearby Zentrum Paul Klee holds the major Klee collection). In 2014, the museum accepted the controversial Gurlitt collection: roughly 1,500 works found in the Munich apartment of Cornelius Gurlitt, many suspected of being looted by the Nazis. Provenance research continues on the bequest.</p>`,
  },
  {
    slug: 'israel-museum-jerusalem-israel',
    description: `<p>The <strong>Israel Museum</strong> in Jerusalem opened in 1965 and is the country's largest cultural institution. The collection spans 5,000 years, from prehistoric artifacts through contemporary art, with around 500,000 objects.</p><p>The <strong>Shrine of the Book</strong>, a distinctive white dome designed by Armand Bartos and Frederick Kiesler, houses the Dead Sea Scrolls, among the oldest known biblical manuscripts. The archaeology wing traces life in the Holy Land from the Stone Age onward. The fine art collection includes European old masters, <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painting, and a large sculpture garden designed by Isamu Noguchi.</p>`,
  },
  {
    slug: 'musee-fesch-ajaccio-france',
    description: `<p>The <strong>Musée Fesch</strong> in Ajaccio, Corsica, was established through the bequest of Cardinal Joseph Fesch, Napoleon's uncle, who amassed one of the largest private art collections in early 19th-century Europe. He acquired roughly 16,000 paintings, many during the Napoleonic looting of Italian churches.</p><p>The museum holds the largest collection of Italian paintings in France outside the Louvre, with works by <a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli</strong></a>, Bellini, Titian, and Veronese. Fesch's original bequest to Ajaccio was challenged by his heirs, and only a portion of the collection reached Corsica. The adjoining Chapelle Impériale contains tombs of the Bonaparte family.</p>`,
  },
  {
    slug: 'national-museum-of-ancient-art-mnaa-lisbon-portuga',
    description: `<p>The <strong>National Museum of Ancient Art</strong> (Museu Nacional de Arte Antiga) in Lisbon, commonly called the MNAA, is Portugal's most important art museum. Founded in 1884, it occupies a 17th-century palace in the Santos neighborhood overlooking the Tagus River.</p><p>The collection of over 40,000 objects spans European painting, sculpture, and decorative arts from the Middle Ages through the 19th century. Nuno Gonçalves's <strong>Panels of Saint Vincent</strong> (c. 1470), a polyptych depicting Portuguese society, is the museum's most celebrated work. Portuguese gold and silverwork, Asian export art reflecting Portugal's colonial history, and Hieronymus Bosch's Temptation of St. Anthony are additional highlights.</p>`,
  },
  {
    slug: 'mus233e-national-d39art-moderne-paris-france',
    description: `<p>The <strong>Musée National d'Art Moderne</strong> in Paris occupies the fourth and fifth floors of the Centre Pompidou, the inside-out building designed by Renzo Piano and Richard Rogers that opened in 1977. The museum holds over 120,000 works, making it one of the world's two largest collections of modern and contemporary art.</p><p>Holdings span from 1905 to the present, with major works by Matisse, Picasso, Kandinsky, Duchamp, and virtually every significant 20th-century movement. The Brancusi studio, reconstructed outside the building, preserves the Romanian sculptor's workshop exactly as he left it. The museum rotates roughly 600 works at a time from its vast holdings.</p>`,
  },
  {
    slug: 'palazzo-venezia-rome-italy',
    description: `<p><strong>Palazzo Venezia</strong> in Rome was built beginning in 1455 for Cardinal Pietro Barbo (later Pope Paul II) and is one of the first great <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> civic palaces in the city. Mussolini used it as his headquarters from 1929 to 1943, delivering speeches from the balcony overlooking Piazza Venezia.</p><p>Today it houses the National Museum of Palazzo Venezia, with collections of medieval and Renaissance paintings, sculptures, ceramics, tapestries, and arms. The museum's intimate galleries display Giorgione, Pisanello, and a notable collection of small bronzes. The palace's courtyard and gardens offer a quiet retreat from the traffic of central Rome.</p>`,
  },
  {
    slug: 'cathedral-of-our-lady-antwerp-belgium',
    description: `<p>The <strong>Cathedral of Our Lady</strong> (Onze-Lieve-Vrouwekathedraal) in Antwerp is Belgium's tallest building, with a Gothic tower reaching 123 meters. Construction began in 1352 and continued for nearly 170 years. The cathedral was heavily damaged and looted during the French Revolution, then restored in the 19th century.</p><p>Four major paintings by <a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> hang inside, including the <strong>Raising of the Cross</strong> (1610) and the <strong>Descent from the Cross</strong> (1612-1614), both monumental triptychs that demonstrate Rubens at the height of his <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> powers. The cathedral has been a UNESCO World Heritage Site since 1999.</p>`,
  },
  {
    slug: 'saint-bavo-cathedral',
    description: `<p><strong>Saint Bavo's Cathedral</strong> (Sint-Baafskathedraal) in Ghent, Belgium, is a Gothic church dating to the 10th century that houses one of the most important paintings in art history: the <strong>Ghent Altarpiece</strong> (1432) by Hubert and Jan van Eyck.</p><p>The polyptych of 12 panels, also called The Adoration of the Mystic Lamb, is considered the first major masterwork of oil painting and a founding work of the Northern <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. It has been stolen, dismembered, hidden from the Nazis, and partially lost over six centuries. A multi-year restoration completed panel by panel has revealed colors unseen for generations. Rubens's Entry of St. Bavo into the Convent of Ghent also hangs in the cathedral.</p>`,
  },
  {
    slug: 'bargello-palazzo-del-popolo-florence-italy',
    description: `<p>The <strong>Bargello</strong> (Palazzo del Podestà) in Florence is a fortress-like palace built in 1255 that became Italy's first national museum of sculpture in 1865. Before that, it served as a prison and police headquarters, and executions were carried out in its courtyard.</p><p>The collection holds some of the finest <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> sculpture in existence: Donatello's bronze <strong>David</strong> (the first free-standing nude since antiquity), Verrocchio's David, Cellini bronzes, and Giambologna's Mercury. Michelangelo's early Bacchus and Brutus are also here. The building's severe medieval architecture provides a striking backdrop for the sculptures.</p>`,
  },
  {
    slug: 'bowes-museum-barnard-castle-uk',
    description: `<p>The <strong>Bowes Museum</strong> in Barnard Castle, County Durham, looks like a French château dropped into the English countryside, because that's essentially what it is. John Bowes and his French actress wife Joséphine designed it in the style of a grand Parisian museum, though neither lived to see it open in 1892.</p><p>The collection includes European fine and decorative arts from the medieval period onward: El Greco, Goya, Boucher, and Canaletto hang in the painting galleries. The museum's star attraction is a <strong>life-size mechanical silver swan</strong>, made around 1773, that "catches" a silver fish when wound up. Tapestries, ceramics, costume, and furniture fill out an eclectic collection assembled for public benefit from the start.</p>`,
  },
  {
    slug: 'museo-opera-duomo-siena',
    description: `<p>The <strong>Museo dell'Opera del Duomo</strong> in Siena, also known as the Museo dell'Opera Metropolitana, was established in 1869 in the right nave of the unfinished extension of Siena Cathedral. The 14th-century Black Death halted the cathedral's ambitious expansion plans, leaving the shell that now houses the museum.</p><p>Duccio di Buoninsegna's <strong>Maestà</strong> (1308-1311), the museum's centerpiece, is one of the most important paintings of the Middle Ages. Originally painted for the cathedral's high altar, it depicts the Virgin and Child surrounded by angels and saints. The museum also preserves sculptures by Giovanni Pisano that once decorated the cathedral facade. A panoramic viewpoint from the unfinished nave wall offers sweeping views of Siena.</p>`,
  },
];

async function main() {
  let ok = 0, fail = 0;
  for (const u of updates) {
    try {
      await p.museum.update({ where: { slug: u.slug }, data: { description: u.description } });
      ok++;
      console.log(`OK ${u.slug}`);
    } catch (e) {
      fail++;
      console.log(`FAIL ${u.slug}: ${e.message.split('\\n')[0]}`);
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await p.$disconnect();
}

main();
