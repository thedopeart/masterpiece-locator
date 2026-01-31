const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'basilica-of-san-francesco-arezzo-italy',
    description: `<p>The <strong>Basilica of San Francesco</strong> in Arezzo is a 13th-century Franciscan church whose fame rests almost entirely on one thing: <a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca's</strong></a> fresco cycle <strong>The Legend of the True Cross</strong>, painted between 1452 and 1466 in the main chapel. The cycle traces the mythical history of the wood used for Christ's cross, from Adam's death through Emperor Heraclius's return of the relic to Jerusalem.</p><p>Piero took over the commission after the original painter, Bicci di Lorenzo, died in 1452. The frescoes are considered among the greatest achievements of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, combining geometric clarity with an almost dreamlike stillness. A careful restoration completed in 2000 revealed colors that had been hidden under centuries of grime. Visits to the chapel require timed reservations due to the fragility of the frescoes.</p>`,
  },
  {
    slug: 'scuola-grande-di-san-rocco-venice-italy',
    description: `<p>The <strong>Scuola Grande di San Rocco</strong> in Venice houses the most ambitious decorative cycle by <a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a>, who worked on it from 1564 to 1587. He won the commission through a famous gambit: while other artists submitted sketches, Tintoretto installed a finished painting on the ceiling, outmaneuvering his competitors.</p><p>Over 23 years, he filled the Sala dell'Albergo, the upper hall, and the ground floor with more than 60 canvases depicting Old and New Testament scenes. The confraternity building itself, completed in 1560, was dedicated to Saint Roch, patron saint of plague victims. Tintoretto's son Domenico assisted with the later works. The paintings remain in their original positions, making this one of the few places where a major <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> decorative program can be seen exactly as intended.</p>`,
  },
  {
    slug: 'galleria-dell39accademia-di-firenze-florence-italy',
    description: `<p>The <strong>Galleria dell'Accademia</strong> in Florence was founded in 1784 by Grand Duke Pietro Leopoldo to serve as a teaching collection for students at the adjacent Accademia di Belle Arti. Its defining moment came in 1873, when <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> David was moved here from the Piazza della Signoria to protect it from weathering. David now stands in a purpose-built tribune with a vaulted skylight.</p><p>Beyond David, the gallery holds Michelangelo's four unfinished <strong>Prisoners</strong> (added in 1909), whose figures seem to struggle out of the marble. The painting collection covers Florentine art from the 13th through 16th centuries, and a wing opened in 2001 displays Medici-owned musical instruments, including a Stradivarius and early pianos by Bartolomeo Cristofori, who invented the instrument in Florence around 1700.</p>`,
  },
  {
    slug: 'moderna-museet-stockholm-sweden',
    description: `<p>The <strong>Moderna Museet</strong> opened on May 9, 1958, on the island of Skeppsholmen in Stockholm, originally occupying a former navy drill hall. The current building, designed by Rafael Moneo, was completed in 1998. The collection includes over 130,000 works spanning the 20th and 21st centuries, making it one of Europe's leading modern art museums.</p><p>Strengths include Swedish and Nordic art alongside major international holdings. Picasso, Dalí, Duchamp, Matisse, and Rauschenberg all feature prominently. The museum also preserves a reconstruction of Vladimir Tatlin's famous Tower model. A satellite branch in Malmö opened in 2009, extending the museum's presence to southern Sweden.</p>`,
  },
  {
    slug: 'barnes-foundation-philadelphia-pa-us',
    description: `<p>The <strong>Barnes Foundation</strong> was established in 1922 by Albert C. Barnes, a chemist who made his fortune from the antiseptic Argyrol. Barnes assembled one of the world's finest collections of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painting: 181 Renoirs, 69 Cézannes, 59 Matisses, and 46 Picassos.</p><p>Originally housed in Merion, Pennsylvania, the collection moved to a new building on Philadelphia's Benjamin Franklin Parkway in 2012, a relocation that sparked years of legal and public debate. Barnes arranged his works in "ensembles," mixing paintings with ironwork, furniture, and African sculpture. Those arrangements are preserved exactly as he specified. The collection of roughly 4,000 objects is estimated at around $25 billion, and includes one of the earliest serious collections of <strong>African art</strong> in America.</p>`,
  },
  {
    slug: 'germanisches-nationalmuseum-nuremberg-germany',
    description: `<p>The <strong>Germanisches Nationalmuseum</strong> in Nuremberg was founded in 1852 by Hans Freiherr von und zu Aufseß and is Germany's largest museum of cultural history. The collection exceeds 1.3 million objects, with roughly 25,000 on display at any time, spanning from prehistoric artifacts through the present day.</p><p>The fine arts holdings include major works by <strong>Albrecht Dürer</strong>, Lucas Cranach, and other German <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> masters. Among the museum's most celebrated objects is Martin Behaim's 1492 <strong>Erdapfel</strong>, the oldest surviving terrestrial globe, made just before Columbus returned from his first voyage. Scientific instruments, armor, musical instruments, and textiles fill out a collection that aims to document the entire scope of Germanic cultural history.</p>`,
  },
  {
    slug: 'fine-arts-museums-of-san-francisco-san-francisco-c',
    description: `<p>The <strong>Fine Arts Museums of San Francisco</strong> comprise two institutions: the de Young Museum in Golden Gate Park and the Legion of Honor in Lincoln Park. The de Young originated at the 1894 California Midwinter International Exposition and was renamed in 1924 for newspaper publisher M.H. de Young. The Legion of Honor opened on Armistice Day 1924, funded by Alma Spreckels as a memorial to California's 3,600 World War I dead.</p><p>The two museums merged administratively in 1972. The de Young focuses on American art, textiles, and art from Africa, Oceania, and the Americas. The Legion of Honor emphasizes European painting, sculpture, and decorative arts from medieval times through the early 20th century. Combined, they form one of the largest public arts institutions in the western United States.</p>`,
  },
  {
    slug: 'indianapolis-museum-of-art-ima-indianapolis-in-us',
    description: `<p>The <strong>Indianapolis Museum of Art</strong> was founded in 1883 as the Art Association of Indianapolis and now operates under the campus name Newfields, adopted in 2017. The permanent collection holds over 54,000 works spanning African, American, Asian, and European art, set within a 152-acre campus that includes gardens, a nature preserve, and a historic estate.</p><p>Particular strengths include Neo-Impressionist paintings, Japanese Edo period screens, Chinese ceramics, and a significant group of J.M.W. Turner watercolors. The museum also holds works by Gauguin and the Pont-Aven School. The Virginia B. Fairbanks Art and Nature Park, 100 acres of outdoor installations, makes it one of the largest art-and-nature experiences in the country.</p>`,
  },
  {
    slug: 'columbus-museum-of-art-columbus-oh-us',
    description: `<p>The <strong>Columbus Museum of Art</strong> was founded in 1878 as the Columbus Gallery of Fine Arts, making it the first art museum in Ohio to receive a state charter. The collection has been shaped by several major donations: Ferdinand Howald's early modernist paintings, the Sirak collection of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> work, and the Photo League archive.</p><p>The museum holds the largest collection of works by Columbus-born painter <a href="/apps/masterpieces/artist/george-bellows"><strong>George Bellows</strong></a>, alongside pieces by Picasso, Cézanne, Monet, and Hopper. A 2015 expansion added a wing designed by DesignGroup, increasing gallery space by 50%. The Center for Creativity offers hands-on art-making for visitors of all ages.</p>`,
  },
  {
    slug: 'timken-museum-of-art-san-diego-ca-us',
    description: `<p>The <strong>Timken Museum of Art</strong> opened in 1965 in San Diego's Balboa Park, housing the Putnam Foundation's collection of European old masters, American painting, and Russian icons. The Putnam sisters, Anne and Amy, established the foundation in 1951 to preserve and display their family's art collection.</p><p>The intimate museum is the only institution in San Diego with a <strong>Rembrandt</strong> in its permanent collection. Other holdings include works by Veronese, Bruegel, Rubens, and Frans Hals. The American galleries feature paintings by Copley, Bierstadt, and Eastman Johnson. Admission has been free since the museum opened, a rare policy among museums of this caliber.</p>`,
  },
  {
    slug: 'mus233e-cognacqjay-paris-france',
    description: `<p>The <strong>Musée Cognacq-Jay</strong> in Paris preserves a collection of 18th-century European art assembled by Ernest Cognacq and his wife Marie-Louise Jay, founders of the La Samaritaine department store. They acquired some 1,200 objects between 1900 and 1927, focusing on the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> period.</p><p>The collection moved in 1990 to the Hôtel de Donon, a restored 16th-century mansion in the Marais district. Paintings by <a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Fragonard</strong></a>, <a href="/apps/masterpieces/artist/francois-boucher"><strong>Boucher</strong></a>, Chardin, and <a href="/apps/masterpieces/artist/canaletto"><strong>Canaletto</strong></a> share space with porcelain, snuffboxes, and period furniture. The museum was inaugurated on June 4, 1929, by French President Gaston Doumergue and offers an intimate window into aristocratic taste during the Age of Enlightenment.</p>`,
  },
  {
    slug: 'dumbarton-oaks-research-library-and-collection-was',
    description: `<p><strong>Dumbarton Oaks</strong> in Washington, D.C., began as the private estate of Robert and Mildred Barnes Bliss, who donated it to Harvard University in 1940. The Blisses started collecting Byzantine art in the early 1920s and acquired 153 objects between 1936 and 1940 alone, creating one of the world's premier collections of Byzantine material.</p><p>The Byzantine Gallery, constructed in 1939-1940, displays mosaics, textiles, jewelry, coins, and ivories from the late Roman through medieval periods. A Pre-Columbian collection, housed in a Philip Johnson-designed pavilion added in 1963, complements the Byzantine holdings. The estate's 10-acre formal garden, designed by Beatrix Farrand, is considered one of America's finest landscape designs.</p>`,
  },
  {
    slug: 'mus233e-de-grenoble-grenoble-france',
    description: `<p>The <strong>Musée de Grenoble</strong> was founded on February 16, 1798, by Louis-Joseph Jay, making it one of the earliest provincial art museums in France. The current building, a sleek modernist structure, opened in 1994 and houses over 900 works spanning antiquity to the present.</p><p>The museum holds France's fifth-largest collection of Egyptian antiquities and the finest group of <a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Zurbarán</strong></a> paintings in any French museum. Contemporary holdings are a particular strength, with works by Soulages, Warhol, and Boltanski. Grenoble was one of the first French museums to collect modern art seriously, acquiring a Matisse in 1923 and a Picasso by 1923.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-strasbourg-strasbourg-fra',
    description: `<p>The <strong>Musée des Beaux-Arts de Strasbourg</strong> was established on September 1, 1801, under Napoleon's Chaptal Decree, which distributed 800 artworks to 15 French cities. The museum occupies the first floor of the Palais Rohan, the former episcopal palace built between 1732 and 1742.</p><p>The collection of nearly 2,000 paintings covers European art from the 14th century to 1871, with strengths in Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a>, and Flemish masters. A 1931 reorganization transferred the medieval Upper Rhenish works to the Musée de l'Oeuvre Notre-Dame next door, letting each institution specialize. The Baroque palace setting adds period atmosphere to the galleries.</p>`,
  },
  {
    slug: 'kenwood-house',
    description: `<p><strong>Kenwood House</strong> in Hampstead, north London, preserves the Iveagh Bequest, a collection of Old Master and British paintings assembled by Edward Cecil Guinness, 1st Earl of Iveagh, the brewing magnate. He purchased Kenwood in 1925 and selected 63 of his finest pictures for the house, bequeathing everything to the nation upon his death in 1927.</p><p>The collection includes a late <strong>Rembrandt self-portrait</strong>, <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer's</strong></a> Guitar Player, and portraits by <a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Gainsborough</strong></a>, Reynolds, and Romney. The house itself was remodeled by Robert Adam in the 1760s and is considered one of his finest surviving interiors. It's the most important group of Old Master paintings given to Britain in the 20th century, and admission is free.</p>`,
  },
  {
    slug: 'hospital-de-la-caridad-seville-spain',
    description: `<p>The <strong>Hospital de la Caridad</strong> in Seville was founded in 1674 by Miguel de Mañara, a nobleman who devoted his fortune to caring for the city's abandoned sick and burying the dead. Mañara began construction in 1672 and personally devised the church's artistic program, hiring the finest painters in Seville.</p><p><a href="/apps/masterpieces/artist/bartolome-murillo"><strong>Bartolomé Esteban Murillo</strong></a> painted eight canvases for the church in 1668, illustrating acts of mercy. Valdés Leal contributed two unforgettable vanitas paintings: <strong>Finis Gloriae Mundi</strong> and <strong>In Ictu Oculi</strong>, among the most haunting images in Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> art. Pedro Roldán carved the main altarpiece. The hospital still operates today, caring for the elderly and infirm as Mañara intended.</p>`,
  },
  {
    slug: 'convent-of-san-paolo-parma-italy',
    description: `<p>The <strong>Convent of San Paolo</strong> in Parma is best known for the Camera di San Paolo, a private chamber frescoed by <a href="/apps/masterpieces/artist/correggio"><strong>Correggio</strong></a> in 1519 for Abbess Giovanna Piacenza. The room belonged to one of Parma's wealthiest Benedictine monasteries, and the abbess wanted a decoration worthy of her status.</p><p>Correggio transformed the vaulted ceiling into a leafy <strong>trompe-l'oeil arbor</strong>, with pink silk ribbons binding the rushes and oval openings revealing playful children holding hunting equipment. Ram heads and painted drapery decorate the lower zone. Scholars still debate the meaning of these pagan subjects in a convent setting. The commission launched Correggio's career as one of northern Italy's most celebrated painters, leading to his famous dome frescoes in Parma's cathedral.</p>`,
  },
  {
    slug: 'national-portrait-gallery-washington-dc-usa',
    description: `<p>The <strong>National Portrait Gallery</strong> in Washington, D.C., is part of the Smithsonian Institution and opened in 1968 in the historic Old Patent Office Building, which it shares with the Smithsonian American Art Museum. The collection of 23,000 items spans daguerreotypes, paintings, sculptures, and digital media.</p><p>The gallery holds the only complete collection of <strong>presidential portraits</strong> outside the White House, including Gilbert Stuart's famous "Lansdowne" portrait of George Washington. Beyond presidents, the collection documents Americans who have shaped the country's culture, science, and politics. The building itself, a Greek Revival landmark from the 1830s, served as a Civil War hospital where Walt Whitman tended wounded soldiers.</p>`,
  },
  {
    slug: 'auckland-art-gallery-auckland-new-zealand',
    description: `<p>The <strong>Auckland Art Gallery Toi o Tāmaki</strong> opened on February 17, 1888, making it the oldest purpose-built art gallery in New Zealand. Founded with collections donated by Governor Sir George Grey and businessman James Tannock Mackelvie, it initially shared its building with the Auckland public library.</p><p>The collection now holds over 15,000 works spanning the Middle Ages to the present, with strength in New Zealand and Pacific art alongside European painting. A major renovation completed in 2011, designed by Francis-Jones Morehen Thorp and Archimedia, expanded the gallery with a dramatic canopy of kauri wood forms. The Chartwell Trust has been a major contemporary art donor, shifting the gallery's emphasis from its original 19th-century European focus toward New Zealand and international modern art.</p>`,
  },
  {
    slug: 'kunstmuseum-bonn-bonn-germany',
    description: `<p>The <strong>Kunstmuseum Bonn</strong> was founded in 1947 and moved into its current building in 1992, a bold structure designed by Axel Schultes. The collection of around 9,000 works holds the <strong>world's largest collection of Rhenish <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a></strong>, with an extensive group of paintings by <a href="/apps/masterpieces/artist/august-macke"><strong>August Macke</strong></a>, who lived and worked in Bonn before his death in World War I.</p><p>Beyond Expressionism, the museum focuses on post-war German art from the 1960s through the early 1990s, with emphasis on painting, photography, and time-based media. An international collection of post-war prints rounds out the holdings. The museum sits on Bonn's Museumsmeile (Museum Mile), a cultural corridor that also includes the Bundeskunsthalle and the Haus der Geschichte.</p>`,
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
      console.log(`FAIL ${u.slug}: ${e.message.split('\n')[0]}`);
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await p.$disconnect();
}

main();
