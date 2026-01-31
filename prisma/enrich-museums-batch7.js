const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'galleria-colonna',
    description: `<p>The <strong>Galleria Colonna</strong> in Rome is a private palace gallery that has been in the Colonna family since the 14th century. The Great Hall, a lavishly frescoed <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> space completed in the late 17th century, celebrates the family's military victories, particularly the Battle of Lepanto in 1571.</p><p>The picture gallery contains works by Bronzino, Tintoretto, Veronese, and Annibale Carracci. A cannonball from the 1849 siege of Rome remains embedded in one of the staircase steps. The palace is open to the public only on Saturday mornings, preserving the feeling of a private aristocratic collection rather than a public museum.</p>`,
  },
  {
    slug: 'pinacoteca-siena',
    description: `<p>The <strong>Pinacoteca Nazionale di Siena</strong> holds one of Italy's most comprehensive collections of <strong>Sienese painting</strong> from the 12th through 17th centuries. Housed in the 14th-century Palazzo Buonsignori and the adjacent Palazzo Brigidi, the museum was established in 1932.</p><p>Duccio, Simone Martini, and the Lorenzetti brothers anchor the medieval holdings, which document Siena's golden age as a rival to Florence. The collection traces the Sienese school's distinctive elegance and rich color through five centuries. Sano di Pietro, Sassetta, and Matteo di Giovanni represent the 15th century, when Sienese painters continued to develop their own tradition apart from Florentine <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> naturalism.</p>`,
  },
  {
    slug: 'chatsworth-house-derbyshire-uk',
    description: `<p><strong>Chatsworth House</strong> in Derbyshire has been the seat of the Cavendish family, Dukes of Devonshire, since the 1550s. The current house was largely rebuilt between 1687 and 1707 by the 1st Duke, with a 19th-century north wing added by the 6th Duke and architect Jeffrey Wyatville.</p><p>The art collection, assembled over five centuries, includes works by Rembrandt, Veronese, Van Dyck, and Lucian Freud. The sculpture gallery holds Neoclassical works and a notable group of old master drawings (including Raphael). The gardens, designed by Capability Brown and later Joseph Paxton, include the Emperor Fountain, which can reach 90 meters. The house receives over 600,000 visitors annually.</p>`,
  },
  {
    slug: 'palazzo-farnese',
    description: `<p><strong>Palazzo Farnese</strong> in Rome, now the French Embassy, was built for Cardinal Alessandro Farnese (later Pope Paul III) beginning in 1517. Michelangelo contributed the dramatic cornice and third-floor design. The most celebrated feature is the <strong>Galleria Farnese</strong>, a ceiling frescoed by <a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> between 1597 and 1600.</p><p>Carracci's cycle depicting the loves of the gods became one of the most influential decorative paintings in <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> art, studied by generations of painters from Rubens to Reynolds. The palazzo is open to visitors only through guided tours arranged via the French Embassy, making it one of Rome's most exclusive cultural experiences.</p>`,
  },
  {
    slug: 'musee-unterlinden',
    description: `<p>The <strong>Musée Unterlinden</strong> in Colmar, Alsace, occupies a 13th-century Dominican convent expanded in 2015 by architects Herzog and de Meuron. The museum's fame rests on a single work: Matthias <strong>Grünewald's Isenheim Altarpiece</strong> (c. 1512-1516), one of the most powerful paintings of the Northern <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>.</p><p>The altarpiece's Crucifixion panel, with its agonized Christ figure, was created for a hospital chapel treating ergotism patients and was meant to offer spiritual comfort through shared suffering. The museum also holds Upper Rhenish medieval art, Martin Schongauer paintings, and a contemporary art wing in the former municipal baths connected by an underground gallery.</p>`,
  },
  {
    slug: 'musee-des-beauxarts-de-caen-caen-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Caen</strong> is housed within the walls of William the Conqueror's 11th-century castle. The museum building itself is modern, completed in 1971 and designed to sit within the ancient ramparts without competing with them.</p><p>The collection surveys European painting from the 15th through 20th centuries, with strengths in Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> and French 17th-century art. Perugino's Marriage of the Virgin, Veronese, and a strong group of French paintings from Poussin through the Impressionists fill the galleries. The museum was rebuilt after World War II bombing devastated the original Caen collection; subsequent acquisitions have restored its status as one of Normandy's most important art museums.</p>`,
  },
  {
    slug: 'musee-des-beauxarts-de-tours-tours-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Tours</strong> occupies the former Archbishop's Palace next to Tours Cathedral, a building with elements dating from the 4th through 18th centuries. The museum was established under the Chaptal Decree of 1801, with initial works transferred from the Louvre.</p><p>The collection covers European painting from the 14th through 20th centuries, with strengths in Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting and 18th-century French art. Mantegna's Agony in the Garden and Resurrection of Christ are prized holdings. Rembrandt, Rubens, and Degas also feature. A magnificent cedar of Lebanon in the garden, planted in 1804, is itself a classified monument.</p>`,
  },
  {
    slug: 'new-york-historical-society',
    description: `<p>The <strong>New-York Historical Society</strong>, founded in 1804, is New York City's oldest museum and one of America's oldest cultural institutions. The collection of 1.6 million objects documents four centuries of American history, art, and culture from its building on Central Park West.</p><p>The art collection includes all 435 watercolors from John James Audubon's <strong>Birds of America</strong>, the largest collection of American landscape paintings from the Hudson River School, and an extensive collection of Tiffany lamps and stained glass. Historical artifacts span from colonial silverware to Civil War materials to 9/11 objects.</p>`,
  },
  {
    slug: 'ca39-pesaro-international-gallery-of-modern-art-ve',
    description: `<p><strong>Ca' Pesaro</strong> on Venice's Grand Canal houses the International Gallery of Modern Art, established in 1902 to display works purchased at the Venice Biennale. The palazzo itself, designed by Baldassare Longhena in 1659, is one of the finest <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> palaces in Venice.</p><p>The collection spans late 19th- and 20th-century art, with works by <a href="/apps/masterpieces/artist/gustav-klimt"><strong>Klimt</strong></a>, Kandinsky, Chagall, Klee, and <a href="/apps/masterpieces/artist/ernst-ludwig-kirchner"><strong>Kirchner</strong></a>. Klimt's Judith II (Salome) is a highlight. The upper floors house the Museum of Oriental Art, with a collection of Japanese Edo-period arms, lacquerware, and screens assembled by Prince Henry of Bourbon-Parma during an 1887-1889 journey through Asia.</p>`,
  },
  {
    slug: 'sanssouci-potsdam-germany',
    description: `<p><strong>Sanssouci</strong> ("without worry") in Potsdam was Frederick the Great's summer palace, built between 1745 and 1747 atop terraced vineyards. The intimate <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> palace was designed by Georg Wenzeslaus von Knobelsdorff to Frederick's personal specifications as a retreat from court formality.</p><p>The Picture Gallery, completed in 1764, was one of the first purpose-built museum structures in Germany. Frederick filled it with works by Caravaggio, Rubens, and Van Dyck. The surrounding park includes the much larger Neues Palais (1763-1769), built to demonstrate Prussian power after the Seven Years' War. The entire ensemble became a UNESCO World Heritage Site in 1990.</p>`,
  },
  {
    slug: 'mus233e-d39art-moderne-de-la-ville-de-paris-paris-',
    description: `<p>The <strong>Musée d'Art Moderne de la Ville de Paris</strong> occupies the east wing of the Palais de Tokyo, built for the 1937 International Exposition. The museum's collection of over 15,000 works focuses on 20th- and 21st-century art, complementing the national collection at the Centre Pompidou.</p><p>Raoul Dufy's monumental mural <strong>La Fée Électricité</strong> (1937), one of the largest paintings in the world at 600 square meters, fills an entire curved room. Matisse's unfinished first version of <strong>The Dance</strong> and works by Delaunay, Modigliani, and the School of Paris feature alongside contemporary installations. Admission to the permanent collection is free.</p>`,
  },
  {
    slug: 'museum-of-fine-arts-ghent-belgium',
    description: `<p>The <strong>Museum of Fine Arts</strong> (Museum voor Schone Kunsten) in Ghent opened in 1904 in a purpose-built neoclassical structure designed by Charles van Rysselberghe. The museum was created to house Ghent's growing civic art collection, which had outgrown its previous quarters.</p><p>The collection spans from medieval Flemish primitives through modern Belgian art. Hieronymus Bosch's <strong>Bearing of the Cross</strong>, Rubens, and the Flemish masters share space with <a href="/apps/masterpieces/artist/james-ensor"><strong>James Ensor</strong></a> and Belgian <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> works. The museum sits across from the contemporary art museum S.M.A.K., creating a dialogue between historic and modern art.</p>`,
  },
  {
    slug: 'castelvecchio-museum-verona-italy',
    description: `<p>The <strong>Castelvecchio Museum</strong> in Verona occupies a 14th-century fortress built by Cangrande II della Scala. Carlo Scarpa's 1957-1974 renovation of the castle into a museum is itself considered a masterwork of modern architecture, seamlessly weaving new concrete and steel interventions through the medieval fabric.</p><p>The collection covers Veronese art from the 12th through 18th centuries, including paintings by Mantegna, Bellini, Pisanello, and Veronese. The equestrian statue of <strong>Cangrande I</strong>, displayed on an outdoor platform, is one of the finest pieces of medieval Italian sculpture. Scarpa's installation design, with its floating platforms and carefully considered sight lines, has influenced museum architecture worldwide.</p>`,
  },
  {
    slug: 'national-museum-of-art-of-romania-bucharest-romani',
    description: `<p>The <strong>National Museum of Art of Romania</strong> in Bucharest occupies the former Royal Palace on Revolution Square. The museum was established in 1950, incorporating the royal art collections, the Pinacoteca of the Romanian Academy, and other nationalized holdings.</p><p>The European Gallery includes works by Rembrandt, Rubens, El Greco, and Monet. The Romanian Gallery traces the country's art from medieval icon painting through 19th-century landscape and 20th-century avant-garde. The palace itself, damaged during the 1989 revolution that overthrew Ceaușescu, was restored in the 2000s. The museum holds roughly 70,000 works across its two main galleries.</p>`,
  },
  {
    slug: 'lady-lever-art-gallery-port-sunlight-uk',
    description: `<p>The <strong>Lady Lever Art Gallery</strong> in Port Sunlight, Merseyside, was built by soap manufacturer William Hesketh Lever (1st Viscount Leverhulme) and opened in 1922 as a memorial to his wife Elizabeth. Port Sunlight itself is a model village Lever built for his factory workers.</p><p>The collection reflects Lever's personal taste for <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> painting, 18th-century portraiture, and Wedgwood pottery (Lever held the largest private Wedgwood collection in the world). Works by Rossetti, Burne-Jones, Lord Leighton, and Millais fill the galleries. The Chinese ceramics, English furniture, and ancient sculpture collections add variety to what is essentially one man's refined eye preserved in a purpose-built setting.</p>`,
  },
  {
    slug: 'palazzo-bianco-genoa-italy',
    description: `<p><strong>Palazzo Bianco</strong> (White Palace) in Genoa is one of the Rolli Palaces lining the Strada Nuova, collectively a UNESCO World Heritage Site since 2006. The Duchess of Galliera donated the palazzo and her art collection to the city in 1889, establishing Genoa's most important civic painting gallery.</p><p>The collection covers Genoese, Italian, Flemish, Dutch, and Spanish painting from the 13th through 18th centuries. Caravaggio, Van Dyck (who spent six years in Genoa), Rubens, and Hans Memling feature prominently. The gallery is visited together with Palazzo Rosso across the street and Palazzo Doria-Tursi, forming the Musei di Strada Nuova complex.</p>`,
  },
  {
    slug: 'palazzo-rosso-genoa-italy',
    description: `<p><strong>Palazzo Rosso</strong> (Red Palace) in Genoa was built by the Brignole-Sale family in the 1670s and donated to the city by Maria Brignole-Sale, Duchess of Galliera, in 1874. The restored frescoed interiors provide an authentic setting for the art collection.</p><p>Paintings by Van Dyck, Dürer, Veronese, and Guercino hang in rooms decorated by leading Genoese <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painters. The palace's rooftop terrace offers panoramic views of the city's historic center and port. Together with Palazzo Bianco and Palazzo Doria-Tursi, it forms part of the Musei di Strada Nuova, Genoa's principal museum complex on the UNESCO-listed Strada Nuova.</p>`,
  },
  {
    slug: 'national-gallery-for-foreign-art-sofia-bulgaria',
    description: `<p>The <strong>National Gallery for Foreign Art</strong> in Sofia occupies the former Royal Palace, sharing the building with the National Ethnographic Museum. Founded in 1985, it houses Bulgaria's most important collection of non-Bulgarian art.</p><p>The holdings include European, Asian, and African art spanning several centuries. A significant group of Indian miniatures, Japanese prints, and African sculpture provides breadth rarely found in Eastern European museums. European paintings cover the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> through the 19th century. The building's grand Neo-Baroque interiors, originally designed for the Bulgarian monarchy, add a formal backdrop to the diverse collection.</p>`,
  },
  {
    slug: 'national-museum-cardiff-cardiff-uk',
    description: `<p><strong>National Museum Cardiff</strong> (Amgueddfa Cymru) opened in 1927 in a Portland stone building in Cathays Park. The museum combines natural history, geology, and archaeology with one of Europe's finest free-admission art galleries.</p><p>The art collection's crown jewel is the <strong>Davies Sisters collection</strong>: Gwendoline and Margaret Davies bequeathed over 260 works in the 1950s and 1960s, including major <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> paintings by Monet, Renoir, Cézanne, and Van Gogh. Welsh art from the 18th century onward is well represented. The evolution of Wales gallery uses geological specimens to trace 4.6 billion years of natural history.</p>`,
  },
  {
    slug: 'bilbao-fine-arts-museum-bilbao-spain',
    description: `<p>The <strong>Bilbao Fine Arts Museum</strong> (Museo de Bellas Artes de Bilbao), often overshadowed by the nearby Guggenheim, is one of northern Spain's most important art museums. Founded in 1908, the collection of over 10,000 works spans from the 12th century to the present.</p><p>Strengths include Spanish old masters (El Greco, Zurbarán, Goya, Ribera), Basque art, and a strong modern collection. The museum merged with a Museum of Modern Art in 1970, adding works by Gauguin, Francis Bacon, and Eduardo Chillida. A 2001 renovation by Luis María Uriarte modernized the galleries. Admission is free, and the museum sits in the Doña Casilda Park alongside the river.</p>`,
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
