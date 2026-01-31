const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'leighton-house-museum-london-uk',
    description: `<p><strong>Leighton House Museum</strong> in Holland Park, London, was the home and studio of painter <a href="/apps/masterpieces/artist/frederic-leighton"><strong>Frederic Leighton</strong></a>, built between 1865 and 1895. The house itself is the main attraction: Leighton designed it as a total work of art, adding rooms and decorative elements over three decades.</p><p>The centerpiece is the <strong>Arab Hall</strong>, inspired by Leighton's travels in the Middle East, lined with 16th- and 17th-century Islamic tiles, a gilded dome, and a marble fountain. The collection includes 81 oil paintings by Leighton and roughly 700 of his drawings, alongside works by fellow Victorian painters Millais, Burne-Jones, and Watts. It opened as a museum in 1900, shortly after Leighton's death.</p>`,
  },
  {
    slug: 'sabauda-gallery-turin-italy',
    description: `<p>The <strong>Sabauda Gallery</strong> (Galleria Sabauda) in Turin was established in 1832 by King Charles Albert of Sardinia, drawing on the Savoy royal family's collections dating back to the 16th century. The gallery relocated several times before settling into its current home in the Manica Nuova wing of the Royal Palace in 2014.</p><p>Over 8,000 works trace European painting from the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> through the 18th century, with strengths in Piedmontese, Flemish, and Dutch art. Rogier van der Weyden, Mantegna, Veronese, and Van Dyck are represented. The Savoy rulers' taste for Northern European painting gives the gallery an unusually strong Flemish collection for an Italian museum.</p>`,
  },
  {
    slug: 'hirschsprung-collection-copenhagen-denmark',
    description: `<p>The <strong>Hirschsprung Collection</strong> in Copenhagen preserves the personal art holdings of tobacco manufacturer Heinrich Hirschsprung (1836-1908), who began buying Danish art in 1865 and donated his collection to the Danish state in 1902. The museum opened in 1911 in a purpose-built gallery near Østerport.</p><p>The 700-work collection spans Danish painting from the <strong>Golden Age</strong> through the Skagen painters and early modernism. Eckersberg, Købke, Hammershøi, and P.S. Krøyer feature prominently. Hirschsprung often bought directly from artists he knew personally, giving the collection an intimacy that larger museums can't match.</p>`,
  },
  {
    slug: 'apsley-house-wellington-museum-london-uk',
    description: `<p><strong>Apsley House</strong>, known as "Number One, London" for its position at Hyde Park Corner, was built between 1771 and 1778 by Robert Adam for Baron Apsley. The Duke of Wellington purchased it in 1817 and filled it with art seized from Joseph Bonaparte's baggage train after the Battle of Vitoria in 1813.</p><p>The 7th Duke donated the house to the nation in 1947, and it opened as a museum in 1952. The collection includes a colossal nude statue of Napoleon by Canova (a gift from King George IV), Velázquez's <strong>Waterseller of Seville</strong>, and Dutch masters. English Heritage has managed the property since 2004, though the current Duke still maintains private apartments upstairs.</p>`,
  },
  {
    slug: 'ca39-rezzonico-museo-del-settecento-venice-italy',
    description: `<p><strong>Ca' Rezzonico</strong> is an 18th-century palazzo on Venice's Grand Canal that opened as the Museum of 18th-Century Venice in 1936, a year after the city purchased the building. The palace was designed by Baldassare Longhena in 1649, though construction dragged on for decades and was finally completed by Giorgio Massari in 1756.</p><p>The interior recreates aristocratic Venetian life through period furniture, frescoes, and paintings. <a href="/apps/masterpieces/artist/giovanni-battista-tiepolo"><strong>Giovanni Battista Tiepolo</strong></a>, <a href="/apps/masterpieces/artist/francesco-guardi"><strong>Francesco Guardi</strong></a>, and Canaletto are well represented. The Martini and Mestrovich donations added over 300 works. Robert Browning died here in 1889, when the palazzo was privately owned.</p>`,
  },
  {
    slug: 'eg-b252hrle-foundation-z252rich-switzerland',
    description: `<p>The <strong>E.G. Bührle Foundation</strong> in Zürich was established in 1960 to display the art collection of Emil Georg Bührle (1890-1956), a German-born industrialist who made his fortune in arms manufacturing. Between 1936 and 1959, Bührle assembled 203 paintings with a focus on French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionism</strong></a>.</p><p>The collection includes works by Cézanne, Monet, Van Gogh, Renoir, and Degas. In 2008, four paintings (including a Monet and a Cézanne) were stolen in one of Switzerland's largest art heists; all were eventually recovered. In 2021, most of the collection moved to the Kunsthaus Zürich's new extension. The provenance of several works, acquired during World War II, has been the subject of ongoing scrutiny.</p>`,
  },
  {
    slug: 'whitworth-art-gallery-university-of-manchester-man',
    description: `<p>The <strong>Whitworth</strong> was founded in 1889 as the Whitworth Institute and Park, named after Sir Joseph Whitworth, the Victorian engineer and philanthropist. Now part of the University of Manchester, the gallery holds over 60,000 items, with particular strength in watercolors, prints, textiles, and wallpaper.</p><p>A £15 million redevelopment by MUMA Architects transformed the building in 2015, opening the rear galleries directly into Whitworth Park. Turner, Blake, and Dürer feature among the historic prints, while the textile collection covers everything from ancient Egyptian cloth to contemporary fiber art. The gallery drew 440,000 visitors in its first year after reopening.</p>`,
  },
  {
    slug: 'virginia-museum-of-fine-arts-richmond-va-us',
    description: `<p>The <strong>Virginia Museum of Fine Arts</strong> in Richmond opened in 1936 as one of the first state-supported art museums in the United States. A founding gift of 37 Rembrandt etchings set the tone for a collection that now exceeds 50,000 works spanning almost every major world culture.</p><p>The museum houses the <strong>largest public collection of Fabergé eggs</strong> outside Russia, including five Imperial Easter eggs. The Art Nouveau holdings are considered the finest outside Paris. A $150 million expansion designed by Rick Mather Architects opened in 2010. Admission to the permanent collection is free, a rarity among museums of this scope.</p>`,
  },
  {
    slug: 'folkwang-museum-essen-germany',
    description: `<p>The <strong>Museum Folkwang</strong> in Essen was formed in 1922 by merging the Essener Kunstmuseum (founded 1906) with Karl Ernst Osthaus's Folkwang Museum from Hagen. Osthaus named it after Folkvangar, the Norse goddess Freyja's meadow hall, reflecting his belief that art belongs in everyday life.</p><p>The collection holds 900 paintings, 320 sculptures, 12,000 drawings, and 60,000 photographs. The Nazis confiscated over 1,400 works as "degenerate art" in 1937, devastating the holdings. Post-war rebuilding has restored the museum's standing. A new building by David Chipperfield opened in 2010. The German Poster Museum within Folkwang holds 350,000 posters, the largest collection in Europe.</p>`,
  },
  {
    slug: 'brancacci-chapel',
    description: `<p>The <strong>Brancacci Chapel</strong> in Florence's Church of Santa Maria del Carmine contains frescoes that changed the course of Western art. <a href="/apps/masterpieces/artist/masaccio"><strong>Masaccio</strong></a> and Masolino began painting the Life of Saint Peter cycle in 1424, commissioned by silk merchant Felice Brancacci.</p><p>Masaccio's contribution, completed before his death at 26 in 1428, introduced a naturalism that broke decisively with Gothic painting. <strong>The Tribute Money</strong> and <strong>The Expulsion from the Garden of Eden</strong> became touchstones for generations of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> artists, from Botticelli to Michelangelo. The cycle was left unfinished until Filippino Lippi completed the remaining scenes around 1481-1485, over fifty years after Masaccio's panels.</p>`,
  },
  {
    slug: 'cincinnati-art-museum-cincinnati-oh-us',
    description: `<p>The <strong>Cincinnati Art Museum</strong> was founded in 1881 and opened to the public on May 17, 1886, making it one of the oldest art museums in the United States. The collection of 73,000 works spans 6,000 years, with strengths in European painting, ancient Near Eastern art, and American art.</p><p>The museum sits in Eden Park, overlooking the Ohio River valley. Cincinnati's history as a 19th-century cultural center helped attract early donations of European old masters and Asian art. Admission is free. The building has expanded multiple times since 1886, most recently with a 2003 addition by Gluckman Mayner Architects.</p>`,
  },
  {
    slug: 'museo-poldi-pezzoli-milan-italy',
    description: `<p>The <strong>Museo Poldi Pezzoli</strong> in Milan opened on April 26, 1881, in the home of collector Gian Giacomo Poldi Pezzoli, who bequeathed his house and 5,000 objects to the public. The collection emphasizes <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, arms and armor, textiles, clocks, and jewelry.</p><p><a href="/apps/masterpieces/artist/andrea-mantegna"><strong>Mantegna</strong></a>, <a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli</strong></a>, and Piero della Francesca are among the painters represented. The <strong>Portrait of a Young Woman</strong> by Antonio del Pollaiuolo, used as the museum's symbol, is one of the finest profile portraits of the Italian Renaissance. Poldi Pezzoli assembled his collection room by room, each in a different historical style, and that eclectic arrangement survives today.</p>`,
  },
  {
    slug: 'mus233e-des-beauxarts-de-rennes-rennes-france',
    description: `<p>The <strong>Musée des Beaux-Arts de Rennes</strong> was established in 1794 during the French Revolution, built largely on the confiscated cabinet of curiosities belonging to Christophe-Paul de Robien, president of the Brittany Parliament. The collection grew through Revolutionary-era seizures from churches and emigrant aristocrats.</p><p>Today the museum holds a varied collection spanning Egyptian antiquities through modern art, with particular depth in 17th-century Flemish and Dutch painting. The Robien collection contributed not only paintings but minerals, fossils, and ethnographic objects. Over 3,700 non-European objects include a notable group of Japanese prints.</p>`,
  },
  {
    slug: 'mus233e-des-augustins-toulouse-france',
    description: `<p>The <strong>Musée des Augustins</strong> in Toulouse opened on August 27, 1795, in a former Augustinian convent secularized during the Revolution. It's one of France's oldest museums, officially established under the Chaptal Decree of 1801. The Gothic cloister, with its double arcade of carved capitals, is worth visiting on its own.</p><p>The collection of 4,000 works spans the Middle Ages to the early 20th century, with one of France's richest collections of <strong>Romanesque sculpture</strong>. Paintings by Delacroix, Courbet, Manet, and Toulouse-Lautrec hang in the upper galleries. The convent church serves as the main sculpture hall, displaying medieval capitals and stone carvings at close range.</p>`,
  },
  {
    slug: 'museum-de-lakenhal-leiden-netherlands',
    description: `<p><strong>Museum De Lakenhal</strong> in Leiden opened on May 1, 1874, in a 17th-century cloth hall (lakenhal) that once regulated the city's textile trade. The building itself is a civic landmark dating to 1640, and a 2019 renovation by Julian Harrap Architects added modern gallery space while preserving the historic core.</p><p>The 23,000-object collection emphasizes Leiden's remarkable artistic heritage. Early works by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, who was born in Leiden, and Lucas van Leyden's Last Judgment triptych are highlights. Pre-Reformation altarpieces, De Stijl works by Theo van Doesburg, and contemporary art fill out a collection rooted in one of the Dutch Republic's most intellectually vibrant cities.</p>`,
  },
  {
    slug: 'kupferstichkabinett-berlin-berlin-germany',
    description: `<p>The <strong>Kupferstichkabinett</strong> (Museum of Prints and Drawings) in Berlin was founded in 1831 and is Germany's largest collection of graphic art. Holdings include roughly 500,000 prints and 110,000 drawings, watercolors, and oil sketches, spanning from the medieval period to the present.</p><p>The core collection traces to 1652 acquisitions by Frederick William I, expanded massively in 1835 with a purchase of 50,000 pieces. <a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli's</strong></a> illustrations for Dante's Divine Comedy and an extensive group of <strong>Dürer prints</strong> are among the most celebrated holdings. The museum is part of the Kulturforum complex near Potsdamer Platz.</p>`,
  },
  {
    slug: 'schloss-charlottenburg-berlin-germany',
    description: `<p><strong>Schloss Charlottenburg</strong> was built between 1695 and 1699 as a summer retreat for Sophie Charlotte, wife of the future King Frederick I of Prussia. Originally called Lietzenburg, it was renamed after her death in 1705. Subsequent Prussian rulers expanded it into Berlin's largest surviving palace.</p><p>The Porcelain Cabinet holds thousands of Chinese and Japanese pieces amassed by Frederick I. Paintings by <a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Antoine Watteau</strong></a>, including works from his final years, hang in the Rococo apartments furnished during the 1740s-1760s. The palace gardens, a mix of French formal and English landscape styles, extend to the banks of the Spree River.</p>`,
  },
  {
    slug: 'national-museum-gdansk',
    description: `<p>The <strong>National Museum in Gdańsk</strong> occupies a late-Gothic Franciscan monastery and traces its roots to 1872. The core of the collection is the Jacob Kabrun bequest: prints and drawings by European masters spanning the 15th through 19th centuries.</p><p>The museum's most prized possession is <a href="/apps/masterpieces/artist/hans-memling"><strong>Hans Memling's</strong></a> <strong>Last Judgment</strong> triptych (1467-1471), considered the finest single painting in Poland. The work was originally commissioned for Florence but was seized by pirates en route and ended up in Gdańsk's Church of the Virgin Mary. Six departments cover painting, sculpture, photography, folk art, and ethnography.</p>`,
  },
  {
    slug: 'bredius-museum-hague-netherlands',
    description: `<p>The <strong>Bredius Museum</strong> in The Hague preserves the personal collection of Abraham Bredius (1855-1946), one of the most important art historians and connoisseurs of Dutch Golden Age painting. Bredius served as director of the Mauritshuis and published catalogues raisonnés of Rembrandt and other Dutch masters.</p><p>The collection of around 200 paintings, drawings, and etchings by 150 artists focuses on <strong>17th-century Dutch art</strong>. Bredius lived in the canal-side house at Lange Vijverberg from 1895 to 1922 and bequeathed his holdings to the city. A collection of 70 Amsterdam silver pieces and Chinese and Delftware porcelain adds to the intimate, domestic atmosphere.</p>`,
  },
  {
    slug: 'kunstmuseum-liechtenstein-vaduz-liechtenstein',
    description: `<p>The <strong>Kunstmuseum Liechtenstein</strong> in Vaduz opened on November 12, 2000, in a striking black basalt cube designed by Morger, Degelo, and Kerez. The building was a millennium gift and replaced a temporary gallery that had operated since 1968.</p><p>The collection focuses on international modern and contemporary art from the 19th century onward, with a particular emphasis on <strong>three-dimensional work</strong>: sculptures, installations, and Arte Povera. The museum shouldn't be confused with the Princely Collections of Liechtenstein (housed in Vienna), which hold the ruling family's old masters. Temporary exhibitions rotate frequently alongside the permanent holdings.</p>`,
  },
  {
    slug: 'national-museum-pozna-poland',
    description: `<p>The <strong>National Museum in Poznań</strong> was established in 1857 when the Society of Friends of Sciences founded a Museum of Polish and Slavic Antiquities. The collection has grown to over 300,000 objects across seven thematic galleries covering art from antiquity through contemporary work.</p><p>Strengths include Polish painting from the 16th century onward and a notable gallery of European old masters spanning Italian, Spanish, Dutch, and German schools. The numismatic collection and applied arts holdings add breadth. The museum is one of Poland's most important regional institutions, operating from a main building constructed in the 1960s.</p>`,
  },
  {
    slug: 'hecht-museum-university-of-haifa-haifa-israel',
    description: `<p>The <strong>Hecht Museum</strong> on the University of Haifa campus was founded in 1984 by Reuben Hecht, an industrialist and collector of antiquities. The museum divides into two wings: archaeology and art, each reflecting a different passion of its founder.</p><p>The archaeological collection documents life in the Land of Israel from the Chalcolithic period through the Byzantine era. Its most spectacular artifact is the <strong>hull of a 2,400-year-old merchant ship</strong> discovered at Ma'agan Mikhael, displayed with its original anchor and cargo. The art wing, opened in 1989, emphasizes <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> and the Jewish School of Paris, with paintings by Van Gogh, Manet, Monet, Pissarro, and Modigliani.</p>`,
  },
  {
    slug: 'musee-d39art-moderne-de-troyes-troyes-france',
    description: `<p>The <strong>Musée d'Art Moderne de Troyes</strong> was inaugurated in 1982 by French President François Mitterrand, housing the collection donated by Pierre and Denise Lévy, prominent Troyes textile industrialists. Their 1976 gift of roughly 3,000 works by over 200 artists formed the museum's foundation.</p><p>The collection emphasizes <strong>Fauvism</strong> and <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>, with paintings by Matisse, Vlaminck, Derain, and Modigliani. Maurice Marinot, a Troyes-born glass artist who transitioned from painting to glasswork, is particularly well represented. Sculptures, tapestries, ceramics, and African art round out a diverse collection housed in the 16th-century Hôtel de Vauluisant.</p>`,
  },
  {
    slug: 'musee-ostende',
    description: `<p><strong>Mu.ZEE</strong> in Ostend, Belgium, was formed in 2008 by merging the Provincial Museum of Modern Art with the Museum of Fine Arts Ostend. The museum's roots go back to 1885, when a private collector's gift initiated Ostend's civic art collection, and a dedicated museum opened in 1897.</p><p>The holdings of around 8,000 works survey Belgian visual art from 1860 to the present. Three Ostend-born artists anchor the collection: <a href="/apps/masterpieces/artist/james-ensor"><strong>James Ensor</strong></a>, Constant Permeke, and <a href="/apps/masterpieces/artist/leon-spilliaert"><strong>Léon Spilliaert</strong></a> (180 works). The museum preserves 350 works by Paul Joostens and a substantial Ensor collection, making it a key destination for anyone interested in Belgian modernism.</p>`,
  },
  {
    slug: 'harris-museum-preston-uk',
    description: `<p>The <strong>Harris Museum</strong> in Preston opened in 1893, funded by a £300,000 bequest from local lawyer Edmund Robert Harris. His vision was a free public library, museum, and art gallery, and construction began during the 1882 Preston Guild celebration. The Grade I listed building dominates the city center.</p><p>The fine art collection holds over 800 oil paintings, including works by <a href="/apps/masterpieces/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a>, George Frederick Watts, Stanley Spencer, and Lucian Freud. Decorative arts, costume, textiles, and local history collections fill out the broader holdings. The Shepherd Collection of rare books, donated in 1761, predates the museum itself by over a century.</p>`,
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
