const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'dallas-museum-of-art',
    description: `<p>The <strong>Dallas Museum of Art</strong> was founded in 1903 as the Dallas Art Association and moved into its current Edward Larrabee Barnes-designed building in the Arts District in 1984. The collection holds more than 24,000 objects spanning from the third millennium BCE to the present, with particular strength in pre-Columbian, African, and contemporary American art.</p><p>Director Jerry Bywaters' mid-century acquisitions brought Impressionist and abstract works into the fold, while his connections to the influential Dallas Nine painters cemented a strong Texas art focus. The 370,000-square-foot facility anchors one of America's largest contiguous arts districts. Our collection includes works by <a href="/apps/masterpieces/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a>, <a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a>, and <a href="/apps/masterpieces/artist/canaletto"><strong>Canaletto</strong></a>.</p>`,
  },
  {
    slug: 'finnish-national-gallery-helsinki-finland',
    description: `<p>The <strong>Finnish National Gallery</strong> operates three museum units in Helsinki: the Ateneum Art Museum, the Museum of Contemporary Art Kiasma, and the Sinebrychoff Art Museum. The institution was formally established in 1990, though the Ateneum building opened in 1887 after the Finnish Art Society's founding in 1846.</p><p>The collection exceeds 43,000 works, emphasizing Finnish art from 18th-century rococo through 20th-century modernism. A notable distinction: when the Ateneum acquired a <strong>Vincent van Gogh painting</strong> in 1903, it became the first museum in the world to own one. Our collection includes works by <a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a>, Finland's most celebrated painter.</p>`,
  },
  {
    slug: 'national-gallery-of-canada-ottawa-canada',
    description: `<p>The <strong>National Gallery of Canada</strong> was established in 1880 under Governor General John Campbell and moved into its striking Moshe Safdie-designed glass and granite building on Sussex Drive in 1988. The permanent collection of 93,000 works emphasizes Canadian art, including major holdings by the Group of Seven landscape painters and Indigenous artists.</p><p>The gallery also maintains one of the world's most comprehensive photography collections. Its location offers panoramic views of Parliament Hill. Our collection features works by <a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a>, <a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a>, and <a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a>.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-rouen-rouen-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Rouen</strong> was created under Napoleon's Chaptal Decree of 1801 and occupies a building completed in 1888. Renovated by designer Andrée Putman in 1994, the museum houses one of France's most significant art collections outside Paris.</p><p>The 1909 donation by collector <strong>François Depeaux</strong> established Rouen as home to the country's largest <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> collection outside the capital. Works span from Renaissance masters like Gerard David and Veronese through Rubens, Ingres, and the Impressionists. Monet painted the nearby Rouen Cathedral facade over 30 times, and several of those studies have ended up here.</p>`,
  },
  {
    slug: 'alte-nationalgalerie-berlin-germany',
    description: `<p>The <strong>Alte Nationalgalerie</strong> opened in 1876 on Berlin's Museum Island, originating from banker Johann Heinrich Wilhelm Wagener's 1861 bequest of 262 works. Director Hugo von Tschudi made it the first museum in the world to purchase <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> art, acquiring Manet and Monet in 1896.</p><p>Today the museum preserves around 3,500 paintings and sculptures covering the entire 19th century, from classicism and <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a> to early modernism. Severely damaged during World War II, it underwent thorough renovation between 1998 and 2001, reuniting East and West collections for the first time since Berlin's division. Our collection includes works by <a href="/apps/masterpieces/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> and <a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a>.</p>`,
  },
  {
    slug: 'oskar-reinhart-foundation-winterthur-switzerland',
    description: `<p>The <strong>Oskar Reinhart Foundation</strong> in Winterthur houses the collection of Swiss industrialist and art patron Oskar Reinhart (1885-1965), who spent decades assembling European masterworks with a focus on French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. In 1940, he donated roughly 600 works by Austrian, German, and Swiss artists to the city of Winterthur.</p><p>His remaining collection of 200 old masters and 19th-century paintings, along with his villa Am Römerholz, was bequeathed to the Swiss government in 1958 and opened to the public in 1970. The holdings include masterworks by Grünewald, Cranach, Renoir, and Van Gogh, making it one of Switzerland's most significant private collections turned public.</p>`,
  },
  {
    slug: 'biblioteca-ambrosiana-milan-italy',
    description: `<p>The <strong>Biblioteca Ambrosiana</strong> was founded in 1609 by Cardinal Federico Borromeo and named after Milan's patron saint, Ambrose. It became one of Europe's first public libraries when it opened that same year. Borromeo's agents traveled across Europe, Greece, and Syria collecting manuscripts, eventually amassing roughly one million printed volumes and 40,000 manuscripts.</p><p>The Pinacoteca art gallery, added in 1618, displays paintings from Borromeo's personal donation. <strong>Leonardo da Vinci's Codex Atlanticus</strong>, the largest existing collection of Leonardo's drawings and writings (1,119 pages), remains among its most treasured holdings. The library also preserves manuscripts by Virgil annotated by Petrarch.</p>`,
  },
  {
    slug: 'museum-of-russian-art-tereshchenko-museum-kyiv-ukr',
    description: `<p>The <strong>Museum of Russian Art</strong> in Kyiv, also known as the Tereshchenko Museum, opened on November 12, 1922. It was founded on nationalized private collections, principally the holdings of the wealthy Tereshchenko family. With around 12,000 works, it holds the third-largest collection of Russian art after Moscow's Tretyakov Gallery and Saint Petersburg's Russian Museum.</p><p>The collection showcases masterworks by Shishkin, Repin, Kramskoy, and Vasnetsov, housed in an 1880 mansion designed by architects A. Gun and Vladimir Nikolaev. The museum was renamed the National Museum "Kyiv Art Gallery" in 2017, reflecting Ukraine's cultural independence.</p>`,
  },
  {
    slug: 'manchester-art-gallery',
    description: `<p><strong>Manchester Art Gallery</strong> was founded in 1882 when the Manchester Corporation acquired the Royal Manchester Institution's buildings and collections, originally established in 1823. The museum houses over 25,000 objects, with particular strength in Victorian art and the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite Brotherhood</strong></a>.</p><p>The fine art collection includes 2,000 oil paintings, 3,000 watercolors, 250 sculptures, and 1,000 prints. Our collection features works by <a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a>, <a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a>, and <a href="/apps/masterpieces/artist/edmund-blair-leighton"><strong>Edmund Blair Leighton</strong></a>. The gallery remains one of the best places in England to see 19th-century British painting and decorative arts.</p>`,
  },
  {
    slug: 'museo-correr-venice-italy',
    description: `<p>The <strong>Museo Correr</strong> was established through Teodoro Correr's 1830 bequest to the city of Venice, originally housed in Correr's palazzo at San Zan Degolà before relocating to Piazza San Marco in 1922. The museum documents Venetian art and history from the earliest painting through the 16th century.</p><p>The collection showcases <strong>Antonio Canova's Neoclassical sculptures</strong> and covers Venetian naval history, public institutions, and daily life in the Republic. A library founded alongside the museum in 1830 contains codices, manuscripts, and printed volumes enriched by generations of Venetian families. The Museo Correr forms the core of Venice's Civic Museums network.</p>`,
  },
  {
    slug: 'vienna-museum-vienna-austria',
    description: `<p>The <strong>Vienna Museum</strong> documents the history and culture of Austria's capital from Neolithic times to the present. Founded in 1933 by historian Hans Pemmer, it occupies a building on Karlsplatz and preserves paintings, photographs, maps, fashion, and everyday objects that chart Vienna's development as a cultural center.</p><p>The collection includes works that capture Vienna's artistic golden ages, from the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> period through the Secession and early 20th-century modernism. The museum shouldn't be confused with the Kunsthistorisches Museum, which houses the Habsburg imperial art collections in a separate building on the Ringstrasse.</p>`,
  },
  {
    slug: 'walters-art-museum-baltimore-md-us',
    description: `<p>The <strong>Walters Art Museum</strong> opened in 1934 after Henry Walters bequeathed his collection of 22,000 works to the city of Baltimore. Built on acquisitions by his father William Thompson Walters, the collection spans over 7,000 years across five historic buildings, from ancient Egyptian artifacts and Greek sculpture to <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> bronzes, Old Master paintings, and Art Deco jewelry.</p><p>Today the museum holds 36,000 objects representing a remarkably diverse range of cultures and periods. Admission is free, reflecting the founder's vision of public access. Our collection includes works by <a href="/apps/masterpieces/artist/paolo-veronese"><strong>Paolo Veronese</strong></a> and <a href="/apps/masterpieces/artist/hugo-van-der-goes"><strong>Hugo van der Goes</strong></a>.</p>`,
  },
  {
    slug: 'ch226teau-de-versailles-versailles-france',
    description: `<p>The <strong>Château de Versailles</strong> began as a hunting lodge built by Louis XIII in 1623 and was transformed into a palace of staggering scale under Louis XIV between 1661 and 1715. The Sun King moved the French court here in 1682, making Versailles the seat of political power until the Revolution in 1789.</p><p>In 1833, King Louis-Philippe converted the palace into a museum of French history. Today the collection encompasses 90,000 artworks documenting five centuries of French history through paintings, sculptures, and engravings. The Hall of Mirrors, the Grand Trianon, and the formal gardens by André Le Nôtre remain among the most visited sites in France. Our collection features works by <a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Élisabeth Vigée Le Brun</strong></a> and <a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a>.</p>`,
  },
  {
    slug: 'accademia-carrara-bergamo-italy',
    description: `<p>The <strong>Accademia Carrara</strong> in Bergamo was founded in 1796 by Count Giacomo Carrara to combine art education with a public gallery. What makes it unusual is that 98% of the collection has come from donors, with over 260 contributors since its founding.</p><p>The holdings include 1,793 paintings, 2,824 Old Master drawings, 7,500 prints, and collections of coins and medals. Masterworks span from Pisanello through Mantegna, Bellini, <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> giants like Raphael, and Titian. The Accademia stands as an example of sustained community patronage, combining its role as a teaching institution with one of northern Italy's finest painting collections.</p>`,
  },
  {
    slug: 'mus233e-d39art-et-d39histoire-geneva-switzerland',
    description: `<p>The <strong>Musée d'Art et d'Histoire</strong> in Geneva was formed in 1910 by merging the Musée des Beaux-Arts (founded 1826) with the Musée Académique (1818) and various weapons collections. The building was made possible by a generous bequest from Charles Galland.</p><p>Holdings exceed half a million objects, including medieval to 20th-century paintings, Byzantine art, <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> weapons, musical instruments, and textiles. Konrad Witz's 1444 St. Peter Altarpiece anchors the fine art collection, joined by works from Rembrandt, Cézanne, and Rodin. It's the largest encyclopedic museum in Switzerland.</p>`,
  },
  {
    slug: 'staatliche-kunsthalle-karlsruhe-karlsruhe-germany',
    description: `<p>The <strong>Staatliche Kunsthalle Karlsruhe</strong> opened in 1846 in a neoclassical building designed by Heinrich Hübsch, originally serving as the Grand Ducal Picture Gallery. The collection grew from Markgravine Karoline Luise's 18th-century acquisitions of 205 works, expanded through 19th-century donations and purchases.</p><p>Director Hans Thoma added important works including Matthias <strong>Grünewald's Tauberbischofsheim Altarpiece</strong>, one of the museum's most celebrated pieces. The Kupferstichkabinett contains over 90,000 prints. The collection spans eight centuries of German, French, Flemish, and Dutch masters, making it one of southwestern Germany's premier art museums.</p>`,
  },
  {
    slug: 'mus233e-ingres-montauban-france',
    description: `<p>The <strong>Musée Ingres</strong> in Montauban was created in 1820 with civic donations, but gained its defining character when painter <strong>Jean-Auguste-Dominique Ingres</strong> bequeathed his personal collection to his hometown in 1867: 4,500 drawings, 44 paintings, a violin, and personal documents.</p><p>Later donations by sculptor <a href="/apps/masterpieces/artist/emile-antoine-bourdelle"><strong>Antoine Bourdelle</strong></a>, another Montauban native, further enriched the holdings. The basement contains Gallo-Roman archaeological finds and local history artifacts. Housed in a former bishop's palace overlooking the Tarn River, the museum connects two of France's most significant artists to their shared birthplace.</p>`,
  },
  {
    slug: 'rasmus-meyer-collection-bergen-norway',
    description: `<p>The <strong>Rasmus Meyer Collection</strong> in Bergen preserves the art holdings of Norwegian industrialist Rasmus Meyer (1858-1916), who assembled over 800 works emphasizing Norwegian art from 1814 to 1914. After his death, Meyer's heirs donated the entire collection to Bergen, the most significant art donation in Norwegian history.</p><p>A neo-Baroque museum building opened in 1924 to house it. The collection contains the <strong>world's third-largest Edvard Munch collection</strong>, with over 100 works on paper and 50 paintings, alongside masterworks by J.C. Dahl, Christian Krogh, and Harriet Backer. Today the collection operates as part of KODE, Bergen's art museum complex.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-lyon-lyon-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Lyon</strong> was established by Napoleon's Chaptal Decree in 1801 and opened to the public in 1814. Housed in a former Benedictine abbey on the Place des Terreaux, it's one of France's largest and most important art museums outside Paris.</p><p>The holdings include 8,000 antiquities (with extensive Egyptian objects), 3,000 paintings, 15,000 works on paper, 1,000 sculptures, and 50,000 coins and medals. The antiquities collection began with 400 pieces transferred from the Louvre in 1895 and grew through archaeological discoveries. Collections span ancient Egypt through modern art, covering virtually every major European school.</p>`,
  },
  {
    slug: 'fogg-museum-harvard-art-museums-cambridge-ma-us',
    description: `<p>The <strong>Fogg Museum</strong>, founded in 1895, is the oldest component of the Harvard Art Museums. Originally designed for teaching and study rather than public display, it held classrooms, slide libraries, and 150,000 reference volumes alongside plaster casts and photographs.</p><p>Today the Harvard Art Museums (Fogg, Busch-Reisinger, and Arthur M. Sackler) comprise 250,000 objects spanning antiquity to the present from around the globe. The 1943 bequest of <strong>4,000 works from Grenville L. Winthrop</strong> remains one of the most significant single donations in American museum history. The museums reopened in 2014 in a Renzo Piano-renovated building that unified all three collections under one roof.</p>`,
  },
  {
    slug: 'albright-knox',
    description: `<p>The <strong>Albright-Knox Art Gallery</strong> in Buffalo, New York was founded in 1862 as the Buffalo Fine Arts Academy, making it one of America's six oldest public art institutions. Philanthropist John J. Albright funded the construction of a Greek Revival building that opened in 1905.</p><p>The museum is recognized for its comprehensive modern and contemporary collections. Holdings include works by <a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a>, Degas, Monet, Van Gogh, Picasso, and Mondrian, plus Abstract Expressionist works assembled through collectors Seymour H. Knox and director Gordon M. Smith. Today's 6,500+ works represent major movements from <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> through contemporary practice. The museum recently expanded and rebranded as the Buffalo AKG Art Museum.</p>`,
  },
  {
    slug: 'whitney-museum',
    description: `<p>The <strong>Whitney Museum of American Art</strong> was founded by sculptor and patron Gertrude Vanderbilt Whitney in 1930, after the Metropolitan Museum of Art declined her offer to donate over 500 American artworks. Working with director Juliana R. Force, Whitney assembled roughly 1,000 works that formed the founding collection.</p><p>Today the museum holds over 25,000 paintings, sculptures, drawings, prints, photographs, films, and new media works spanning the late 19th century to the present. The Whitney moved to its current Renzo Piano-designed building in the Meatpacking District in 2015. Its mission to champion living American artists, including those historically underrepresented, remains a defining commitment. Our collection includes works by <a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a> and <a href="/apps/masterpieces/artist/george-bellows"><strong>George Bellows</strong></a>.</p>`,
  },
  {
    slug: 'isabella-stewart-gardner',
    description: `<p>The <strong>Isabella Stewart Gardner Museum</strong> opened in 1903 in a custom-built 15th-century Venetian-style palazzo in Boston's Fenway neighborhood. Isabella Stewart Gardner (1840-1924) spent decades collecting over 7,500 objects: paintings, sculptures, furniture, textiles, rare books, and archival pieces from ancient Rome to 19th-century America.</p><p>Her will stipulated that the collection remain permanently displayed as she arranged it. Masterworks include Titian's <em>The Rape of Europa</em>, Sargent's <em>El Jaleo</em>, and works by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, <a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli</strong></a>, and <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer</strong></a>. The museum is also known for its <strong>1990 art heist</strong>, the largest property theft in history, in which 13 works worth an estimated $500 million were stolen and never recovered. A Renzo Piano wing opened in 2012.</p>`,
  },
  {
    slug: 'crystal-bridges',
    description: `<p><strong>Crystal Bridges Museum of American Art</strong> in Bentonville, Arkansas was founded by Alice Walton in 2005 and opened in 2011 in a Moshe Safdie-designed building set into the Ozark landscape. The museum offers free admission and spans five centuries of American art, from colonial-era portraits to contemporary installations.</p><p>Walton's personal collection forms the core of 3,500+ works. Highlights include Gilbert Stuart's <em>George Washington</em> and Georgia O'Keeffe's <em>Jimson Weed</em>. The museum has committed to acquiring works by historically underrepresented artists, including Kerry James Marshall, Maya Lin, and Amy Sherald. Our collection includes works by <a href="/apps/masterpieces/artist/asher-brown-durand"><strong>Asher Brown Durand</strong></a> of the <a href="/apps/masterpieces/movement/hudson-river-school"><strong>Hudson River School</strong></a>.</p>`,
  },
  {
    slug: 'pinacoteca-nazionale-di-bologna-bologna-italy',
    description: `<p>The <strong>Pinacoteca Nazionale di Bologna</strong> was born in 1808 as the gallery annex of the Academy of Fine Arts. The collection grew dramatically when roughly 1,000 paintings were acquired from dissolved convents, churches, and religious institutions during Napoleon's occupation of Italy between 1797 and 1810.</p><p>The holdings span the 14th through 20th centuries, with particular depth in <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, Mannerist, and <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> masters. Artists represented include Raphael, Perugino, Tintoretto, Titian, the Carracci family, Guercino, and Guido Reni. Major building expansions in 1914-1920 and the 1960s-70s gave the collection the space it deserved, cementing Bologna's Pinacoteca as one of Italy's premier art institutions.</p>`,
  },
];

(async () => {
  let ok = 0, fail = 0;
  for (const u of updates) {
    try {
      await p.museum.update({ where: { slug: u.slug }, data: { description: u.description } });
      ok++;
      console.log('OK ' + u.slug);
    } catch (e) {
      fail++;
      console.log('FAIL ' + u.slug + ': ' + e.message);
    }
  }
  console.log('\nDone: ' + ok + ' updated, ' + fail + ' failed');
  await p.$disconnect();
})();
