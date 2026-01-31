const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'capitoline-museums-rome-italy',
    description: `<p>The <strong>Capitoline Museums</strong> (Musei Capitolini) in Rome are considered the world's oldest public museum, established in 1471 when Pope Sixtus IV donated a group of bronze statues to the people of Rome. The collection is housed in two palaces flanking Piazza del Campidoglio, designed by Michelangelo.</p><p>Holdings include ancient Roman sculpture, the iconic <strong>She-Wolf</strong> bronze (a symbol of Rome), the colossal head and hand of Constantine, and <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> paintings by Caravaggio, Guercino, and Guido Reni. The Pinacoteca Capitolina occupies the Palazzo dei Conservatori, while the Palazzo Nuovo across the square displays classical marble statues. Together they document over 2,500 years of Roman history and art.</p>`,
  },
  {
    slug: 'galerie-neue-meister-dresden-germany',
    description: `<p>The <strong>Galerie Neue Meister</strong> (New Masters Gallery) in Dresden focuses on 19th- and 20th-century painting, complementing the Alte Meister gallery in the same complex. Housed in the Albertinum since 1965, the collection holds over 2,500 paintings covering <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>, <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, and German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>.</p><p>Caspar David Friedrich's works form a centerpiece, alongside paintings by Monet, Degas, and van Gogh. The collection suffered massive losses during World War II and the Soviet occupation, but has been gradually rebuilt. The Albertinum itself was renovated between 2004 and 2010, adding a dramatic rooftop archive designed by Volker Staab.</p>`,
  },
  {
    slug: 'pinacoteca-tosio-martinengo-brescia-italy',
    description: `<p>The <strong>Pinacoteca Tosio Martinengo</strong> in Brescia reopened in 2018 after a decade-long renovation, housed in a 16th-century palazzo. The gallery was formed by merging the collections of Count Paolo Tosio and Count Leopardo Martinengo da Barco, both donated to the city in the 19th century.</p><p>The collection surveys Brescian and Northern Italian painting from the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> through the 18th century. Raphael, Foppa, Romanino, and Moretto da Brescia feature prominently. The renovation reorganized the galleries thematically, and the museum now includes interactive displays aimed at younger visitors.</p>`,
  },
  {
    slug: 'museo-nacional-de-bellas-artes-mnba-buenos-aires-a',
    description: `<p>The <strong>Museo Nacional de Bellas Artes</strong> in Buenos Aires was founded in 1896 and moved into its current building, a former water pumping station, in 1933. The collection of over 12,000 works is the largest art collection in Latin America.</p><p>European holdings include paintings by El Greco, Goya, Rembrandt, Monet, and Degas. The Argentine art collection traces the country's artistic development from colonial times through the 20th century. Rodin sculptures, a major group of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> paintings, and contemporary Argentine art make the MNBA one of the most visited museums in South America. Admission is free.</p>`,
  },
  {
    slug: 'national-museum-of-serbia-belgrade-serbia',
    description: `<p>The <strong>National Museum of Serbia</strong> in Belgrade was founded in 1844, making it one of the oldest museums in southeastern Europe. After a 15-year closure for renovation, it reopened in 2018 in its original 1903 building on Republic Square.</p><p>The collection holds over 400,000 objects spanning archaeology, numismatics, and fine art. The most celebrated item is the <strong>Miroslavljevo Jevanđelje</strong> (Miroslav Gospel), a 12th-century illuminated manuscript and Serbia's most important cultural artifact. European paintings by Rubens, Renoir, Matisse, and Picasso feature alongside the largest collection of Serbian medieval and modern art.</p>`,
  },
  {
    slug: 'national-museum-of-san-matteo-pisa-italy',
    description: `<p>The <strong>National Museum of San Matteo</strong> in Pisa occupies a former Benedictine convent on the banks of the Arno. The museum preserves one of the most important collections of medieval and <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Tuscan painting and sculpture, drawn largely from Pisan churches and convents.</p><p>Crucifixes, polyptychs, and altarpieces by Giunta Pisano, Simone Martini, and Gentile da Fabriano trace the development of Italian painting from the 12th through 15th centuries. The sculpture collection includes works by the Pisano family, whose pulpits in Pisa's Baptistery and Cathedral rank among the greatest achievements of medieval Italian art.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-bordeaux-bordeaux-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Bordeaux</strong> was founded in 1801 under Napoleon's Chaptal Decree, with initial holdings transferred from the Louvre and confiscated collections. The museum occupies two wings flanking the Hôtel de Ville in the Jardin de la Mairie.</p><p>The collection spans European painting from the 15th century to the present, with strong representation of Dutch, Flemish, and Italian masters alongside the expected French schools. Delacroix's <strong>Greece on the Ruins of Missolonghi</strong> is a highlight. The north wing covers art up to the 18th century; the south wing takes over from the 19th century onward.</p>`,
  },
  {
    slug: 'academy-of-fine-arts-vienna-vienna-austria',
    description: `<p>The <strong>Academy of Fine Arts Vienna</strong> (Akademie der bildenden Künste) was established in 1692, making it one of the oldest art academies in Europe. Its picture gallery, open to the public, holds a small but distinguished collection built through faculty donations and bequests over three centuries.</p><p>The most famous work is Hieronymus Bosch's <strong>Last Judgment</strong> triptych, one of the most important Northern <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> paintings outside the Low Countries. Cranach, Rubens, and Guardi are also represented. The academy is perhaps equally known for twice rejecting Adolf Hitler's application in 1907 and 1908.</p>`,
  },
  {
    slug: 'morgan-library-and-museum-pierpont-morgan-library-',
    description: `<p>The <strong>Morgan Library and Museum</strong> in Manhattan originated as the private library of financier J. Pierpont Morgan, housed in a 1906 McKim, Mead and White building adjacent to his Madison Avenue home. Morgan's son donated the library to the public in 1924.</p><p>The holdings include medieval and <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> manuscripts, early printed books, old master drawings, and ancient Near Eastern seals. A Gutenberg Bible, three copies of which Morgan acquired, anchors the collection. Drawings by Rembrandt, Michelangelo, and Leonardo feature alongside literary manuscripts by Dickens, Brontë, and Thoreau. Renzo Piano designed a 2006 expansion that connected the historic buildings.</p>`,
  },
  {
    slug: 'kelvingrove-art-gallery-and-museum-glasgow-uk',
    description: `<p><strong>Kelvingrove Art Gallery and Museum</strong> in Glasgow opened in 1901 for the Glasgow International Exhibition. The red sandstone building in Argyle Street, next to Kelvingrove Park, holds one of Europe's great civic art collections: over 8,000 objects across 22 themed galleries.</p><p>Salvador Dalí's <strong>Christ of Saint John of the Cross</strong>, purchased in 1952 for £8,200, is the most visited single painting in Scotland. The collection also includes works by Rembrandt, Botticelli, and the Glasgow Boys. Natural history, arms and armor, and Charles Rennie Mackintosh furniture fill the non-art galleries. A three-year renovation completed in 2006 restored the building. Admission is free.</p>`,
  },
  {
    slug: 'hampton-court-palace-london-uk',
    description: `<p><strong>Hampton Court Palace</strong> in Surrey was built by Cardinal Thomas Wolsey beginning in 1514 and seized by Henry VIII in 1529. It served as a royal residence until the reign of George II. The Royal Collection's paintings hang throughout the State Apartments, largely as they were displayed in the 17th and 18th centuries.</p><p>Mantegna's <strong>Triumphs of Caesar</strong>, nine large canvases painted in the 1480s and 1490s, occupy their own gallery. The Tudor kitchens, the Great Hall, and William III's <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> apartments are all open to visitors. The famous hedge maze, planted around 1700, draws visitors alongside the art. Historic Royal Palaces manages the site.</p>`,
  },
  {
    slug: 'national-gallery-in-prague-prague-czech-republic',
    description: `<p>The <strong>National Gallery in Prague</strong> was established in 1796 by the Society of Patriotic Friends of the Arts, making it one of the oldest public art galleries in Central Europe. The collection is spread across several buildings, including the Veletržní Palace (Trade Fair Palace) for modern art and Sternberg Palace for European old masters.</p><p>Holdings span from medieval Bohemian panel paintings through contemporary art, with over 400,000 objects. The medieval collection includes extraordinary Czech Gothic altarpieces and illuminated manuscripts. French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, Czech <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a>, and early 20th-century avant-garde works feature in the modern wing.</p>`,
  },
  {
    slug: 'bristol-city-museum-and-art-gallery-bristol-uk',
    description: `<p><strong>Bristol Museum and Art Gallery</strong> opened in 1905 in an Edwardian Baroque building on Queens Road. The fine art collection spans Old Masters through contemporary British art, with particular depth in French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painting and the Bristol School of landscape artists.</p><p>The museum is best known for its connection to <strong>Banksy</strong>, the anonymous street artist believed to be from Bristol, who staged a major exhibition here in 2009 that drew over 300,000 visitors. Geology, archaeology, and natural history collections share the building with the art galleries. Admission is free.</p>`,
  },
  {
    slug: 'mucha-museum-prague-czech-republic',
    description: `<p>The <strong>Mucha Museum</strong> in Prague is the world's only museum dedicated to Alphonse Mucha (1860-1939), the Czech artist who became synonymous with the <strong>Art Nouveau</strong> poster style during his years in Paris. The museum opened in 1998 in the Kaunický Palace.</p><p>The collection, managed by the Mucha Foundation, includes posters, paintings, photographs, and personal items spanning Mucha's entire career. His iconic theater posters for Sarah Bernhardt and the monumental Slav Epic, a cycle of 20 large canvases depicting Slavic history, represent the two poles of his work: commercial design and patriotic art.</p>`,
  },
  {
    slug: 'parma-national-gallery-parma-italy',
    description: `<p>The <strong>Galleria Nazionale di Parma</strong> occupies the Palazzo della Pilotta, a massive unfinished palace complex built by the Farnese family in the late 16th century. The gallery was established in 1752 and holds one of northern Italy's most significant painting collections.</p><p><a href="/apps/masterpieces/artist/correggio"><strong>Correggio</strong></a> and Parmigianino dominate the holdings, with major altarpieces and devotional paintings. Correggio's <strong>Madonna of St. Jerome</strong> is the gallery's most celebrated work. The Farnese collection also includes paintings by Leonardo, El Greco, and Canaletto. The same palace houses the Farnese Theatre, a wooden theater built in 1618.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-dole-dole-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Dole</strong> in the Jura region of France occupies the 18th-century Pavilion des Officiers. The collection was established during the Revolutionary era from confiscated artworks and has grown through donations and purchases over two centuries.</p><p>The museum holds French, Italian, and Flemish paintings from the 16th through 19th centuries, along with a notable collection of local Comtois art. Courbet, who was born nearby in Ornans, is represented. Dole is also the birthplace of Louis Pasteur, and the town's museums reflect both its artistic and scientific heritage.</p>`,
  },
  {
    slug: 'turku-art-museum-turku-finland',
    description: `<p>The <strong>Turku Art Museum</strong> opened in 1904 in a granite Art Nouveau building on Puolalanmäki hill, designed by architect Gustaf Nyström. It was the first purpose-built art museum in Finland and remains one of the country's most important regional galleries.</p><p>The collection focuses on Finnish and Nordic art, with works spanning the 19th century to the present. The building's fortress-like exterior, inspired by medieval Nordic architecture, has become a Turku landmark. A contemporary art satellite, the Wäinö Aaltonen Museum, opened nearby in 1967.</p>`,
  },
  {
    slug: 'querini-stampalia-foundation-venice-italy',
    description: `<p>The <strong>Querini Stampalia Foundation</strong> in Venice was established in 1869 through the bequest of Count Giovanni Querini Stampalia, who left his 16th-century palazzo, library, and art collection to the city. Carlo Scarpa's famous 1961-1963 renovation of the ground floor and garden is considered a masterwork of modern architecture.</p><p>The picture gallery on the upper floors preserves Venetian painting from the 14th through 18th centuries in period-furnished rooms. Giovanni Bellini's <strong>Presentation at the Temple</strong> and genre scenes by Pietro Longhi are highlights. The foundation also operates a library of 350,000 volumes and hosts contemporary art exhibitions.</p>`,
  },
  {
    slug: 'church-of-our-lady-bruges-belgium',
    description: `<p>The <strong>Church of Our Lady</strong> (Onze-Lieve-Vrouwekerk) in Bruges houses the only Michelangelo sculpture to leave Italy during his lifetime: the <strong>Madonna of Bruges</strong>, a marble Virgin and Child carved around 1501-1504. It was purchased by Bruges merchants Jan and Alexander Mouscron and placed in the church in 1514.</p><p>The 122-meter brick tower, the tallest structure in the city, dates from the 13th century. The church also contains painted triptychs, elaborate tombs of Charles the Bold and Mary of Burgundy (15th century), and works by Pieter Pourbus. It's been a UNESCO World Heritage Site as part of the Historic Centre of Bruges since 2000.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-marseille-marseille-franc',
    description: `<p>The <strong>Musée des Beaux-Arts de Marseille</strong> was established in 1801 under the Chaptal Decree and occupies a wing of the Palais Longchamp, a monumental 19th-century building completed in 1869 to celebrate the arrival of canal water to Marseille.</p><p>The collection covers European painting and sculpture from the 16th through 19th centuries. Rubens, Jordaens, and the Provençal school of painting are well represented. Pierre Puget, Marseille's most famous <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> sculptor, has a dedicated gallery. The Palais Longchamp's cascading fountain and colonnade make the approach to the museum one of the most dramatic in France.</p>`,
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
