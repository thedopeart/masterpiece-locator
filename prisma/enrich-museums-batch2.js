const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'mus233e-des-beauxarts-de-nantes-nantes-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Nantes</strong> was founded in 1801 under Napoleon's Chaptal Decree and moved into its current building on Rue Georges-Clemenceau in 1900. A major expansion completed in 2017 added the Cube, a luminous white gallery block, doubling the exhibition space to 17,000 square meters.</p><p>The collection spans from the 13th century to the present, with strong holdings in Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, French 17th-century art, and <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. Works by <a href="/apps/masterpieces/artist/jean-baptiste-greuze"><strong>Jean-Baptiste Greuze</strong></a>, <a href="/apps/masterpieces/artist/jean-leon-gerome"><strong>Jean-Léon Gérôme</strong></a>, and <a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> feature among its holdings. The museum also preserves an important group of modern and contemporary pieces, including works by Kandinsky and Soulages.</p>`,
  },
  {
    slug: 'wallraf-richartz-museum-cologne-germany',
    description: `<p>The <strong>Wallraf-Richartz Museum</strong> in Cologne traces its origins to the 1824 bequest of Ferdinand Franz Wallraf, a canon who amassed paintings, prints, and antiquities throughout his life. Merchant Johann Heinrich Richartz funded the first purpose-built museum in 1861. After wartime destruction, the collection moved through temporary quarters before settling into its current building designed by Oswald Mathias Ungers in 2001.</p><p>Holdings cover European art from the medieval period through the early 20th century, with one of the finest collections of <strong>Cologne School painting</strong> anywhere. Stefan Lochner's Madonna of the Rose Bower is a crown jewel. Our collection includes works by <a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> and <a href="/apps/masterpieces/artist/david-teniers-the-younger"><strong>David Teniers the Younger</strong></a>.</p>`,
  },
  {
    slug: 'bavarian-state-painting-collections-munich-germany',
    description: `<p>The <strong>Bavarian State Painting Collections</strong> (Bayerische Staatsgemäldesammlungen) administer over 30,000 paintings across multiple museums in Bavaria, anchored by Munich's Alte Pinakothek (1836), Neue Pinakothek (1853), and Pinakothek der Moderne (2002). The collections originated with the Wittelsbach dynasty's art patronage dating to the early 16th century.</p><p>Duke Wilhelm IV commissioned large-scale history paintings in the 1520s, establishing one of Europe's earliest deliberate royal collections. Today the network spans 18 branches statewide. Strengths include Albrecht Dürer's Self-Portrait and works by <a href="/apps/masterpieces/artist/jean-baptiste-camille-corot"><strong>Jean-Baptiste-Camille Corot</strong></a>, <a href="/apps/masterpieces/artist/fernand-khnopff"><strong>Fernand Khnopff</strong></a>, and <a href="/apps/masterpieces/artist/robert-delaunay"><strong>Robert Delaunay</strong></a>.</p>`,
  },
  {
    slug: 'pinacoteca-vaticana-vatican-city',
    description: `<p>The <strong>Pinacoteca Vaticana</strong> was established by Pope Pius XI in 1932 in a purpose-built gallery designed by Luca Beltrami within Vatican City. The collection had a turbulent history: Napoleon seized many papal paintings under the 1797 Treaty of Tolentino, carrying them to Paris. Most were returned after his fall in 1815, thanks to Antonio Canova's diplomatic efforts.</p><p>Today the Pinacoteca holds roughly 460 paintings arranged chronologically across 18 rooms, covering Byzantine primitives through the 19th century. <a href="/apps/masterpieces/artist/raphael"><strong>Raphael's</strong></a> Transfiguration, his last painting, is the gallery's most celebrated work. Other highlights include pieces by Giotto, <a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a>, and Caravaggio.</p>`,
  },
  {
    slug: 'residenzgalerie-salzburg-austria',
    description: `<p>The <strong>Residenzgalerie</strong> occupies the third floor of the Salzburg Residenz, the former palace of the Prince-Archbishops. The gallery was established in 1923 using paintings from the Austrian state and private loans, though its core grew significantly in 1980 with the acquisition of the Czernin collection of Dutch and Flemish masters.</p><p>Holdings of around 200 paintings emphasize 16th- to 18th-century European art, with particular depth in Netherlandish genre painting and Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a>. Works by <a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a>, <a href="/apps/masterpieces/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a>, and <a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a> feature in the collection. Since 2014, the gallery has been part of the DomQuartier Salzburg museum complex.</p>`,
  },
  {
    slug: 'staatsgalerie-stuttgart-stuttgart-germany',
    description: `<p>The <strong>Staatsgalerie Stuttgart</strong> opened in 1843 in a neoclassical building by Gottlob Georg Barth, expanded dramatically in 1984 with James Stirling's postmodern Neue Staatsgalerie, one of the most influential museum buildings of the late 20th century. Stirling's colorful, fragmented design drew over a million visitors in its first year.</p><p>The collection spans 800 years of European art, from medieval altarpieces through contemporary installations. Particular strengths include <strong>Swabian Gothic painting</strong>, Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> works, and German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>. Our holdings feature works by <a href="/apps/masterpieces/artist/lovis-corinth"><strong>Lovis Corinth</strong></a>, <a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a>, and <a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a>.</p>`,
  },
  {
    slug: 'casa-buonarroti-florence-italy',
    description: `<p><strong>Casa Buonarroti</strong> in Florence was the family home of <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>, purchased by the artist in 1508. Though he never actually lived here (he spent most of his adult life in Rome), his grandnephew Michelangelo Buonarroti the Younger transformed the property into a memorial museum in the early 17th century.</p><p>The house-museum preserves two early marble reliefs carved by Michelangelo before age twenty: the <strong>Madonna of the Stairs</strong> and the <strong>Battle of the Centaurs</strong>. A gallery of painted ceilings commissioned by Buonarroti the Younger celebrates the family's legacy, with scenes by leading Florentine painters of the 1610s-1630s. The museum also holds drawings, models, and personal documents from the Buonarroti archive.</p>`,
  },
  {
    slug: 'mus233e-national-eug232ne-delacroix-paris-france',
    description: `<p>The <strong>Musée National Eugène Delacroix</strong> occupies the final apartment and studio of <a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a>, who moved to this quiet courtyard on the Place de Furstemberg in 1857 to be near the Church of Saint-Sulpice, where he was painting murals. He lived and worked here until his death in 1863.</p><p>The Société des Amis d'Eugène Delacroix, founded in 1929 (with members including Matisse, Signac, and Denis), fought to preserve the space. It became a national museum in 1971 and joined the Louvre in 2004. The intimate collection includes oil sketches, pastels, drawings, and personal objects that offer a glimpse into the <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> master's working life.</p>`,
  },
  {
    slug: 'br252cke-museum-berlin-germany',
    description: `<p>The <strong>Brücke Museum</strong> in Berlin opened in 1967 in a modernist pavilion designed by Werner Düttmann, nestled in the Grunewald forest. It was founded to house the collection donated by Karl Schmidt-Rottluff, the last surviving member of Die Brücke (The Bridge), the <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> group founded in Dresden in 1905.</p><p>The collection of roughly 400 paintings, thousands of drawings, and extensive prints documents the entire arc of the movement. <a href="/apps/masterpieces/artist/ernst-ludwig-kirchner"><strong>Ernst Ludwig Kirchner</strong></a>, Erich Heckel, Emil Nolde, and Max Pechstein are all represented in depth. It's the world's most comprehensive museum devoted to a single avant-garde group, preserving work that the Nazis condemned as "degenerate art" in 1937.</p>`,
  },
  {
    slug: 'leopold-museum-vienna-austria',
    description: `<p>The <strong>Leopold Museum</strong> opened in 2001 in Vienna's MuseumsQuartier, housing the collection assembled over five decades by ophthalmologist Rudolf Leopold and his wife Elisabeth. The Austrian government purchased the 5,266-work collection in 1994 for a fraction of its estimated value, creating one of the world's foremost collections of Austrian modern art.</p><p>The museum holds the <strong>largest collection of Egon Schiele paintings in the world</strong>, with over 40 oils and 180 works on paper. <a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt's</strong></a> Death and Life anchors the Vienna Secession holdings. Works by Kokoschka, Gerstl, and Kubin round out a survey of Austrian art from 1900 to 1945 that's difficult to match anywhere else.</p>`,
  },
  {
    slug: 'sforza-castle-milan-italy',
    description: `<p><strong>Sforza Castle</strong> (Castello Sforzesco) in Milan was built in the 15th century by Francesco Sforza, Duke of Milan, on the ruins of a 14th-century Visconti fortress. The castle now houses several municipal museums and art collections, making it one of Italy's largest civic museum complexes.</p><p>The Pinacoteca holds Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> paintings by <a href="/apps/masterpieces/artist/filippo-lippi"><strong>Filippo Lippi</strong></a>, <a href="/apps/masterpieces/artist/agnolo-bronzino"><strong>Agnolo Bronzino</strong></a>, and <a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a>, while the sculpture collection preserves <strong>Michelangelo's unfinished Rondanini Pietà</strong>, his last work. Other museums within the castle cover Egyptian artifacts, musical instruments, furniture, and decorative arts. Leonardo da Vinci painted the Sala delle Asse ceiling here in 1498.</p>`,
  },
  {
    slug: 'toledo-museum-of-art-toledo-oh-us',
    description: `<p>The <strong>Toledo Museum of Art</strong> was founded in 1901 by glass manufacturer Edward Drummond Libbey and his wife Florence. The museum's neoclassical building, completed in 1912, was followed by a stunning Glass Pavilion designed by SANAA in 2006, a building made almost entirely of curved glass walls.</p><p>The collection spans 6,000 years with over 30,000 objects, including one of the world's finest <strong>glass art collections</strong>, reflecting Toledo's history as a center of the glass industry. Paintings by <a href="/apps/masterpieces/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a>, <a href="/apps/masterpieces/artist/hendrick-avercamp"><strong>Hendrick Avercamp</strong></a>, and <a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> feature in the European galleries. Admission has been free since founding, per the Libbeys' wishes.</p>`,
  },
  {
    slug: 'york-art-gallery-york-england',
    description: `<p><strong>York Art Gallery</strong> opened in 1879 in an Italianate building on Exhibition Square, originally constructed for the 1879 Yorkshire Fine Art and Industrial Exhibition. The gallery was extensively refurbished in 2015, adding the Centre of Ceramic Art (CoCA), the largest permanent display of British studio ceramics in the world.</p><p>The painting collection of around 800 works covers 600 years of European art, with strength in Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> panels and British 20th-century painting. Works by <a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> and <a href="/apps/masterpieces/artist/henry-moore"><strong>Henry Moore</strong></a> feature in the collection. The ceramics holdings now include over 5,000 pieces spanning a millennium of clay-based art.</p>`,
  },
  {
    slug: 'real-academia-de-bellas-artes-de-san-fernando-madri',
    description: `<p>The <strong>Real Academia de Bellas Artes de San Fernando</strong> was founded in 1752 by Ferdinand VI and serves as Spain's premier fine arts academy, modeled on the French and Italian academies. Housed in the former Goyeneche Palace on Calle de Alcalá since 1773, it combines an active teaching institution with a public museum.</p><p>The collection holds over 1,400 paintings, 600 sculptures, and 15,000 drawings. <strong>Goya studied here as a young man</strong> and later served as director of painting; thirteen of his works hang in the galleries. Masterworks by <a href="/apps/masterpieces/artist/bartolome-esteban-murillo"><strong>Bartolomé Esteban Murillo</strong></a>, <a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Francisco de Zurbarán</strong></a>, and Velázquez round out one of Madrid's most overlooked museum collections.</p>`,
  },
  {
    slug: 'cantonal-museum-of-fine-arts-lausanne-switzerland',
    description: `<p>The <strong>Cantonal Museum of Fine Arts</strong> (Musée cantonal des Beaux-Arts) in Lausanne moved into a striking new building at the Plateforme 10 arts district in 2019, designed by the Spanish firm Barozzi Veiga. The museum traces its origins to 1841 when the Canton of Vaud established a public art collection.</p><p>Holdings of roughly 10,000 works emphasize Swiss art from the 18th century onward, with particular strength in <a href="/apps/masterpieces/artist/felix-vallotton"><strong>Félix Vallotton</strong></a>, who was born in Lausanne. The collection also includes works by <a href="/apps/masterpieces/artist/jean-baptiste-camille-corot"><strong>Corot</strong></a>, Degas, and Matisse alongside contemporary Swiss artists. Plateforme 10 unites the fine arts museum with the photography and design museums in a single cultural campus near the train station.</p>`,
  },
  {
    slug: 'basilica-di-san-marco-florence-italy',
    description: `<p>The <strong>Basilica di San Marco</strong> in Florence is a Dominican church and convent whose cells were famously frescoed by <a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> between 1438 and 1445, commissioned by Cosimo de' Medici. The convent became a museum in 1869, preserving one of the most important cycles of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> fresco painting in existence.</p><p>Fra Angelico painted <strong>over 40 individual frescoes</strong> across the dormitory cells and communal spaces, each designed for private devotion by the monks who lived there. The Annunciation at the top of the staircase is among the most reproduced images in art history. Girolamo Savonarola served as prior here in the 1490s before his dramatic downfall and execution.</p>`,
  },
  {
    slug: 'basilica-della-santa-casa-loreto-italy',
    description: `<p>The <strong>Basilica della Santa Casa</strong> in Loreto is one of Italy's most important pilgrimage sites, built to enshrine the Holy House (Santa Casa), which tradition holds was miraculously transported from Nazareth to Loreto in 1294. Construction of the basilica began in 1469 and continued for over a century.</p><p>The marble screen encasing the Holy House was designed by Bramante and decorated by Andrea Sansovino and other sculptors. <a href="/apps/masterpieces/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> painted frescoes in the Sacristy of St. John between 1477 and 1480, among his earliest major commissions. Melozzo da Forlì contributed <strong>vault frescoes</strong> in the Sacristy of St. Mark, and Lorenzo Lotto spent his final years decorating the basilica's treasury.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-d39orl233ans-orl233ans-france',
    description: `<p>The <strong>Musée des Beaux-Arts d'Orléans</strong> was established in 1797 during the Revolutionary era and has occupied its current location on Place Sainte-Croix, opposite the cathedral, since 1984. The collection of around 2,000 paintings and pastels makes it one of the richest French regional museums.</p><p>Strengths include 17th- and 18th-century French painting, with notable works by <a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a>, <a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a>, and <a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a>. A dedicated room houses pastels by Chardin, Perronneau, and Quentin de La Tour. The museum also preserves a significant collection of <a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> works, largely donated by collector Max Kaganovitch in 1973.</p>`,
  },
  {
    slug: 'sammlung-karsch-berlin-germany',
    description: `<p>The <strong>Sammlung Karsch</strong> (Karsch Collection) in Berlin preserves paintings, prints, and drawings by <a href="/apps/masterpieces/artist/otto-mueller"><strong>Otto Mueller</strong></a>, the German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> painter and Die Brücke member. The collection was assembled by Florian Karsch, a Berlin art dealer and scholar who became the leading authority on Mueller's work.</p><p>Karsch published the catalogue raisonné of Mueller's prints and spent decades tracking down works that had been dispersed, confiscated, or destroyed during the Nazi campaign against "degenerate art." The collection documents Mueller's characteristic subjects: <strong>bathers, Roma figures, and landscapes</strong> rendered in his distinctive matte, earth-toned palette using distemper paint on burlap.</p>`,
  },
  {
    slug: 'fernand-l233ger-museum-biot-france',
    description: `<p>The <strong>Musée National Fernand Léger</strong> in Biot opened in 1960, created by <a href="/apps/masterpieces/artist/fernand-leger"><strong>Fernand Léger's</strong></a> widow Nadia and his friend Georges Bauquier on land Léger had purchased shortly before his death in 1955. The building's facade features a massive ceramic mosaic that Léger designed for the Hanover stadium.</p><p>The collection holds nearly 400 works spanning Léger's entire career, from early <a href="/apps/masterpieces/movement/cubism"><strong>Cubist</strong></a> compositions through his late monumental paintings celebrating workers and leisure. His <strong>"tubism"</strong>, a mechanical, cylindrical take on Cubism, is well represented. Ceramics, tapestries, stained glass designs, and mosaics reveal how thoroughly Léger pursued the integration of art into everyday life.</p>`,
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
      console.log(`FAIL ${u.slug}: ${e.message}`);
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await p.$disconnect();
}

main();
