const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'desiderio-da-settignano',
    bioFull: `<p><a href="/apps/masterpieces/artist/desiderio-da-settignano"><strong>Desiderio da Settignano</strong></a> (c. 1430-1464) was a Florentine sculptor of the Early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> who died young but left behind some of the most delicate marble carving of his era. Born in Settignano, a village of stonecutters outside Florence, he trained in the circle of Donatello and Bernardo Rossellino.</p><p>Desiderio's specialty was <strong>rilievo schiacciato</strong> (flattened relief), a technique of carving extremely shallow reliefs that create painterly atmospheric effects in stone. His marble busts of women and children are prized for their gentle expressions and soft, almost translucent surfaces. The <strong>tomb of Carlo Marsuppini</strong> in Santa Croce, Florence, is considered his greatest monumental work.</p>`,
    faqs: [
      { question: "What is Desiderio da Settignano known for?", answer: "Desiderio excelled at <strong>rilievo schiacciato (flattened relief)</strong> and delicate portrait busts. His marble carvings of women and children have an almost translucent softness that few <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> sculptors could match." },
      { question: "Where can I see his work?", answer: "Key works are in <strong>Florence</strong>: the Marsuppini tomb in Santa Croce and busts at the Bargello. The <strong>National Gallery of Art</strong> in Washington and the Louvre also hold important pieces." },
    ],
  },
  {
    slug: 'francesco-mochi',
    bioFull: `<p><a href="/apps/masterpieces/artist/francesco-mochi"><strong>Francesco Mochi</strong></a> (1580-1654) was an Italian sculptor who anticipated the dynamism of the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> before Bernini arrived on the scene. Born in Montevarchi, Tuscany, he trained in Florence and Rome before receiving the commission that made his name: two monumental equestrian bronzes for the Piazza dei Cavalli in Piacenza.</p><p>His <strong>equestrian statues of Ranuccio and Alessandro Farnese</strong> (1612-29) introduced a new level of movement and energy to the equestrian genre. The rearing horse of Alessandro Farnese was one of the first in sculpture to be shown in motion. Mochi also created the striking <em>St. Veronica</em> in St. Peter's Basilica, a figure caught mid-stride with drapery billowing dramatically.</p>`,
    faqs: [
      { question: "What is Mochi's most famous work?", answer: "His <strong>equestrian statues in Piacenza</strong> (1612-29) and the <em>St. Veronica</em> in St. Peter's Basilica, Rome. The Piacenza horses introduced unprecedented movement to equestrian sculpture, anticipating the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." },
      { question: "How did Mochi influence Baroque sculpture?", answer: "Mochi's dynamic poses and swirling drapery <strong>anticipated Bernini's theatrical approach</strong> by years. His St. Veronica, rushing forward with her veil, remains one of the most dramatically kinetic figures in St. Peter's Basilica." },
    ],
  },
  {
    slug: 'veit-stoss',
    bioFull: `<p><a href="/apps/masterpieces/artist/veit-stoss"><strong>Veit Stoss</strong></a> (c. 1447-1533) was a German sculptor and woodcarver whose monumental altarpieces rank among the greatest achievements of Late Gothic art. Born in Horb am Neckar, he spent two decades in Kraków, Poland, where he carved the enormous <strong>altarpiece of St. Mary's Basilica</strong> (1477-89), one of the largest Gothic altarpieces in Europe.</p><p>The Kraków altarpiece stands over 42 feet tall, with figures carved from linden wood at near-life size. Stoss returned to Nuremberg in 1496 but ran into legal trouble for forging a document, which resulted in branding on both cheeks. Despite the scandal, he continued producing powerful religious carvings, including the <strong>Angelic Salutation</strong> suspended from the vault of Nuremberg's St. Lorenz Church.</p>`,
    faqs: [
      { question: "What is Veit Stoss's most famous work?", answer: "The <strong>altarpiece of St. Mary's Basilica in Kraków</strong> (1477-89), one of the largest Gothic altarpieces in Europe. It stands over 42 feet tall with life-sized figures carved from linden wood depicting the life of the Virgin Mary." },
      { question: "Where can I see Stoss's carvings?", answer: "The Kraków altarpiece is in <strong>St. Mary's Basilica, Kraków, Poland</strong>. In Nuremberg, the Angelic Salutation hangs in St. Lorenz Church. The <strong>Germanisches Nationalmuseum</strong> in Nuremberg holds smaller works." },
    ],
  },
  {
    slug: 'tullio-lombardo',
    bioFull: `<p><a href="/apps/masterpieces/artist/tullio-lombardo"><strong>Tullio Lombardo</strong></a> (c. 1455-1532) was a Venetian sculptor who produced some of the most classically refined marble work of the Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. Son of the architect-sculptor Pietro Lombardo, he worked primarily in Venice and the Veneto, contributing to major church and palace projects throughout the region.</p><p>His <strong>double portrait relief of a couple</strong> at the Ca' d'Oro, sometimes called <em>Bacchus and Ariadne</em>, demonstrates an almost archaeological devotion to classical Roman sculpture. His <em>Adam</em> (c. 1490-95) at the Metropolitan Museum of Art, originally from the Vendramin tomb in Venice, was the first life-sized nude marble figure since antiquity. It shattered in 2002 when its pedestal collapsed, then was painstakingly restored over a decade.</p>`,
    faqs: [
      { question: "What is Tullio Lombardo known for?", answer: "Lombardo's <strong><em>Adam</em></strong> (c. 1490-95) at the Met is considered the first life-sized classical nude marble since antiquity. His work reflects a deep study of ancient Roman sculpture filtered through Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> sensibility." },
      { question: "What happened to Lombardo's Adam sculpture?", answer: "In October 2002, the marble <strong><em>Adam</em> shattered into 28 pieces</strong> when its display pedestal collapsed at the Metropolitan Museum. A 12-year conservation project restored it, and it went back on view in 2014." },
    ],
  },
  {
    slug: 'lysippos',
    bioFull: `<p><a href="/apps/masterpieces/artist/lysippos"><strong>Lysippos</strong></a> was an ancient Greek sculptor active in the 4th century BCE, regarded as one of the greatest bronze workers of antiquity. He was the <strong>personal sculptor of Alexander the Great</strong>, who reportedly decreed that only Lysippos could make his portrait. Ancient sources claim he produced around 1,500 bronze statues, though none survive in their original form.</p><p>Lysippos introduced a new canon of proportions: slenderer figures with smaller heads relative to the body, creating a more elegant and naturalistic look than his predecessor <a href="/apps/masterpieces/artist/polykleitos"><strong>Polykleitos</strong></a>. His <em>Apoxyomenos</em> (Athlete Scraping Himself) is known through a Roman marble copy in the Vatican Museums. He influenced sculptors well into the Hellenistic period.</p>`,
    faqs: [
      { question: "Why was Lysippos famous in antiquity?", answer: "Lysippos was <strong>Alexander the Great's official portraitist</strong> and revolutionized sculptural proportions. He reportedly produced 1,500 bronzes, though none of the originals survive. His slender figures replaced the stockier canon of Polykleitos." },
      { question: "What is the Apoxyomenos?", answer: "The <strong><em>Apoxyomenos</em></strong> (Athlete Scraping Himself) is Lysippos' most famous composition, showing a young athlete cleaning oil from his arm with a curved tool. The Roman marble copy at the <strong>Vatican Museums</strong> preserves the original's elegant proportions." },
    ],
  },
  {
    slug: 'phidias',
    bioFull: `<p><a href="/apps/masterpieces/artist/phidias"><strong>Phidias</strong></a> (c. 480-430 BCE) was the most celebrated sculptor of <a href="/apps/masterpieces/movement/ancient-greek-art"><strong>ancient Greece</strong></a> and the artistic director of Athens' Golden Age building program under Pericles. He oversaw the sculptural decoration of the Parthenon and created two of the ancient world's most famous works: the colossal <strong>chryselephantine (gold and ivory) statue of Athena Parthenos</strong> inside the Parthenon and the seated <strong>Zeus at Olympia</strong>, one of the Seven Wonders of the Ancient World.</p><p>Neither statue survives. The Zeus was reportedly so awe-inspiring that the Roman general Aemilius Paullus said seeing it was like being in the presence of the god himself. Phidias was eventually charged with embezzling gold meant for the Athena statue. The Parthenon marbles (Elgin Marbles) in London are attributed to his workshop.</p>`,
    faqs: [
      { question: "What did Phidias create?", answer: "Phidias created the <strong>statue of Zeus at Olympia</strong> (one of the Seven Wonders) and the <strong>Athena Parthenos</strong> inside the Parthenon. Both were colossal gold-and-ivory statues, now lost. He also directed the Parthenon's sculptural program." },
      { question: "Do any of Phidias' works survive?", answer: "No original works by Phidias survive. The <strong>Parthenon sculptures</strong> (Elgin Marbles) at the British Museum were carved under his supervision. Roman copies and ancient descriptions give us an idea of his lost chryselephantine statues." },
    ],
  },
  {
    slug: 'mino-da-fiesole',
    bioFull: `<p><a href="/apps/masterpieces/artist/mino-da-fiesole"><strong>Mino da Fiesole</strong></a> (1429-1484) was a Florentine sculptor of the Early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> known for his portrait busts and church furnishings. Born in Poppi, Tuscany, he trained in Florence (possibly under Desiderio da Settignano) and spent time working in Rome, where he carved tombs and altars for several churches.</p><p>Mino's <strong>marble portrait busts</strong> are among the earliest Renaissance examples of the form, depicting Florentine citizens with crisp detail and dignified composure. He carved a notable bust of Piero de' Medici and several other members of Florence's ruling families. His funerary monuments in the Badia Fiorentina and Santa Maria Maggiore in Rome show a refined but slightly formulaic classical style.</p>`,
    faqs: [
      { question: "What is Mino da Fiesole known for?", answer: "Mino is known for <strong>early Renaissance portrait busts</strong> and funerary monuments. His bust of Piero de' Medici is one of the finest 15th-century portrait sculptures, and his church furnishings appear throughout Florence and Rome." },
      { question: "Where can I see Mino's sculptures?", answer: "Works are in <strong>Florence's Bargello and Badia Fiorentina</strong>, and in several Roman churches. The <a href=\"/apps/masterpieces/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington and the Louvre also hold pieces." },
    ],
  },
  {
    slug: 'ernst-barlach',
    bioFull: `<p><a href="/apps/masterpieces/artist/ernst-barlach"><strong>Ernst Barlach</strong></a> (1870-1938) was a German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> sculptor, printmaker, and playwright. Born in Wedel, Holstein, he studied in Hamburg, Dresden, and Paris. A 1906 trip to Russia proved transformative: the peasant figures he encountered shaped his mature style of blocky, powerfully simplified human forms carved in wood or cast in bronze.</p><p>Barlach created several major <strong>war memorials</strong>, including the floating angel in Güstrow Cathedral and a mother with dead son at Magdeburg Cathedral. The Nazis classified his work as "degenerate art" in 1937, removing over 400 of his pieces from public collections. He died the following year. Three Barlach museums now preserve his legacy in Güstrow, Ratzeburg, and Hamburg.</p>`,
    faqs: [
      { question: "What is Ernst Barlach known for?", answer: "Barlach is known for <strong>powerful Expressionist wood and bronze sculptures</strong> of simplified human figures, often conveying suffering, grief, or spiritual yearning. His war memorials are among the most moving anti-war statements in 20th-century sculpture." },
      { question: "Where can I see Barlach's work?", answer: "Three museums are dedicated to his work: the <strong>Ernst Barlach Stiftung</strong> in Güstrow, the Barlach Museum in Ratzeburg, and the Ernst Barlach Haus in Hamburg. His floating angel hangs in <strong>Güstrow Cathedral</strong>." },
    ],
  },
  {
    slug: 'edmonia-lewis',
    bioFull: `<p><a href="/apps/masterpieces/artist/edmonia-lewis"><strong>Edmonia Lewis</strong></a> (c. 1844-1907) was the first professional African American and Native American sculptor, producing neoclassical marble works that addressed race, freedom, and identity in the Civil War era. Born Mary Edmonia Lewis in upstate New York to a Chippewa mother and African American father, she attended Oberlin College before moving to Boston and then to Rome in 1866.</p><p>In Rome, Lewis carved <strong><em>The Death of Cleopatra</em></strong> (1876), a startlingly realistic marble exhibited at the Philadelphia Centennial Exposition. Her <em>Forever Free</em> (1867) depicts two formerly enslaved people at the moment of emancipation. Lewis carved her own marble, unusual at a time when most sculptors hired Italian craftsmen. The Smithsonian American Art Museum holds several of her key works.</p>`,
    faqs: [
      { question: "Why is Edmonia Lewis historically significant?", answer: "Lewis was the <strong>first professional African American and Native American sculptor</strong>. Working in Rome during the 1860s-80s, she carved neoclassical marbles addressing slavery, emancipation, and Indigenous identity at a time when few women of color had access to the art world." },
      { question: "Where can I see Lewis's sculptures?", answer: "The <strong>Smithsonian American Art Museum</strong> in Washington, D.C. holds <em>The Death of Cleopatra</em> and other key works. <em>Forever Free</em> is at the Howard University Gallery of Art." },
    ],
  },
  {
    slug: 'raymond-duchamp-villon',
    bioFull: `<p><a href="/apps/masterpieces/artist/raymond-duchamp-villon"><strong>Raymond Duchamp-Villon</strong></a> (1876-1918) was a French sculptor who brought <a href="/apps/masterpieces/movement/cubism"><strong>Cubist</strong></a> principles into three dimensions. Born Pierre-Maurice-Raymond Duchamp in Damville, Normandy, he was the brother of Marcel Duchamp and Jacques Villon. He began as a medical student before turning to sculpture around 1898, working through an Impressionist and then Art Nouveau phase before embracing Cubism around 1912.</p><p>His most important work, <strong><em>The Large Horse</em></strong> (1914), translates a rearing horse into interlocking mechanical forms that merge animal energy with machine-age power. He was mobilized during World War I, contracted typhoid fever, and died at 42. Despite a short career, his fusion of organic and geometric form influenced sculptors for decades.</p>`,
    faqs: [
      { question: "What is Duchamp-Villon's most famous work?", answer: "<strong><em>The Large Horse</em></strong> (1914) is his masterwork, translating a rearing horse into interlocking geometric and mechanical forms. Casts are at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the Centre Pompidou, and other major museums." },
      { question: "Was Duchamp-Villon related to Marcel Duchamp?", answer: "Yes. He was <strong>Marcel Duchamp's older brother</strong>. Their brother Jacques Villon was also an artist. All three exhibited at the 1913 Armory Show in New York, and the family produced one of modern art's most creative dynasties." },
    ],
  },
  {
    slug: 'medardo-rosso',
    bioFull: `<p><a href="/apps/masterpieces/artist/medardo-rosso"><strong>Medardo Rosso</strong></a> (1858-1928) was an Italian sculptor who pushed bronze and wax toward an Impressionist dissolution of form that was radical for his time. Born in Turin and raised in Milan, he studied briefly at the Brera Academy before being expelled. He moved to Paris in 1889, where he exhibited alongside <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a> and influenced <a href="/apps/masterpieces/artist/auguste-rodin"><strong>Rodin</strong></a>.</p><p>Rosso's sculptures blur the boundary between figure and atmosphere. Heads emerge from rough, unfinished surfaces as if materializing from fog. His wax-over-plaster works like <strong><em>Ecce Puer</em></strong> and <em>Bookmaker</em> capture fleeting impressions rather than solid forms. He was largely forgotten after his death but is now recognized as a precursor to modernist and conceptual sculpture.</p>`,
    faqs: [
      { question: "What is Medardo Rosso known for?", answer: "Rosso is known for <strong>Impressionist sculpture</strong> that dissolves solid form into light and atmosphere. His wax and bronze figures blur at the edges, capturing momentary impressions rather than fixed, detailed likenesses." },
      { question: "Where can I see Rosso's work?", answer: "The <strong>Museo Medardo Rosso</strong> in Barzio, Italy holds a major collection. Works also appear at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the Musée d'Orsay, and the Galleria Nazionale d'Arte Moderna in Rome." },
    ],
  },
  {
    slug: 'andrea-pisano',
    bioFull: `<p><a href="/apps/masterpieces/artist/andrea-pisano"><strong>Andrea Pisano</strong></a> (c. 1290-1348) was an Italian sculptor and architect who created the first set of bronze doors for the Florence Baptistery. Born Andrea da Pontedera (not actually from Pisa), he emerged as a leading sculptor in Trecento Florence. His 28-panel bronze doors (1330-36) depict the life of John the Baptist with elegant, contained compositions influenced by <strong>Giotto's</strong> painting style.</p><p>Andrea also served as head architect of Florence Cathedral after Giotto's death and later directed the building of Orvieto Cathedral. His relief panels for Giotto's campanile in Florence illustrate the arts, sciences, and labors of mankind. These works bridged the gap between Gothic sculpture and the coming <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>.</p>`,
    faqs: [
      { question: "What did Andrea Pisano create?", answer: "Andrea created the <strong>first bronze doors of the Florence Baptistery</strong> (1330-36), with 28 panels depicting the life of John the Baptist. He also carved relief panels for Giotto's campanile showing human arts and sciences." },
      { question: "How do Andrea's doors compare to Ghiberti's?", answer: "Andrea's doors came first (1330s) and use a <strong>Gothic quatrefoil frame</strong> for each scene. <a href=\"/apps/masterpieces/artist/lorenzo-ghiberti\"><strong>Ghiberti's</strong></a> later doors (1401-52) moved toward Renaissance naturalism and perspective, with the second set famously called the Gates of Paradise." },
    ],
  },
  {
    slug: 'giovanni-pisano',
    bioFull: `<p><a href="/apps/masterpieces/artist/giovanni-pisano"><strong>Giovanni Pisano</strong></a> (c. 1250-c. 1315) was an Italian sculptor and architect who brought emotional intensity and dramatic movement to Gothic sculpture in Italy. Son of the great sculptor <strong>Nicola Pisano</strong>, Giovanni trained in his father's workshop and collaborated on the pulpit of Siena Cathedral before striking out on his own.</p><p>Giovanni's <strong>pulpits at Pistoia</strong> (1297-1301) and <strong>Pisa Cathedral</strong> (1302-10) feature deeply undercut reliefs with turbulent crowds and expressive figures that go well beyond his father's more classical restraint. He also carved the facade figures of Siena Cathedral and a celebrated ivory <em>Madonna and Child</em>. His emotional, almost proto-Renaissance style influenced Tuscan sculpture for generations.</p>`,
    faqs: [
      { question: "What is Giovanni Pisano known for?", answer: "Giovanni is known for <strong>dramatically expressive Gothic pulpits</strong> in Pistoia and Pisa Cathedral. His deeply carved, emotional reliefs pushed Italian sculpture toward the narrative power that would blossom in the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." },
      { question: "How did Giovanni differ from his father Nicola?", answer: "Nicola Pisano drew heavily on <strong>classical Roman sculpture</strong> for calm, dignified figures. Giovanni pushed toward greater emotion, movement, and Gothic expressiveness. His crowded, turbulent reliefs convey dramatic storytelling where Nicola's are more restrained." },
    ],
  },
  {
    slug: 'franz-xaver-messerschmidt',
    bioFull: `<p><a href="/apps/masterpieces/artist/franz-xaver-messerschmidt"><strong>Franz Xaver Messerschmidt</strong></a> (1736-1783) was a German-Austrian sculptor famous for a series of bizarre <strong>character heads</strong> depicting extreme facial expressions. Born in Wiesensteig, Bavaria, he trained in Vienna and worked as a court sculptor before his career was disrupted by what contemporaries described as mental illness. He was denied a professorship at the Vienna Academy and withdrew to Pressburg (modern Bratislava).</p><p>There he produced roughly <strong>69 busts</strong> showing contorted, grimacing, laughing, and screaming faces, sometimes called the first systematic exploration of human expression in sculpture. No one fully agrees on their meaning: they've been interpreted as studies of character, exorcism rituals, or symptoms of paranoia. They remain startling and oddly modern.</p>`,
    faqs: [
      { question: "What are Messerschmidt's character heads?", answer: "They're a series of approximately <strong>69 busts with extreme facial expressions</strong>: grimaces, screams, pouts, and contortions. Created in the 1770s-80s, they defy easy interpretation and remain some of the most unusual sculptures in Western art." },
      { question: "Where can I see Messerschmidt's heads?", answer: "The largest collection is at the <strong>Belvedere Museum in Vienna</strong>. Others are at the Louvre, the Getty Museum, and the Bratislava City Gallery (Messerschmidt spent his final years in what is now Bratislava, Slovakia)." },
    ],
  },
  {
    slug: 'johann-gottfried-schadow',
    bioFull: `<p><a href="/apps/masterpieces/artist/johann-gottfried-schadow"><strong>Johann Gottfried Schadow</strong></a> (1764-1850) was a German sculptor who became the leading Neoclassical artist in Prussia and director of the Prussian Academy of Arts. Born in Berlin, he trained in Rome and returned to become court sculptor to Frederick William II. His work balanced idealized classical form with a distinctly naturalistic Prussian sensibility.</p><p>Schadow's most famous work is the <strong>Quadriga atop the Brandenburg Gate</strong> (1793), the chariot and four horses driven by the goddess of Victory that has become Berlin's most iconic symbol. Napoleon seized it in 1806 and took it to Paris; it was returned after his defeat. Schadow also created the charming <em>Princesses</em> group portrait (1795-97) of Crown Princess Luise and her sister.</p>`,
    faqs: [
      { question: "What is Schadow's most famous work?", answer: "The <strong>Quadriga atop the Brandenburg Gate</strong> (1793) in Berlin: a copper chariot driven by Victoria, the goddess of Victory. Napoleon famously took it to Paris in 1806; it was returned to Berlin after his defeat in 1814." },
      { question: "Where can I see Schadow's sculptures?", answer: "The Quadriga crowns the <strong>Brandenburg Gate in Berlin</strong>. His <em>Princesses</em> group is at the Alte Nationalgalerie. The <a href=\"/apps/masterpieces/museum/alte-nationalgalerie-berlin-germany\"><strong>Alte Nationalgalerie</strong></a> and Friedrichswerdersche Kirche hold other key works." },
    ],
  },
  {
    slug: 'balthasar-permoser',
    bioFull: `<p><a href="/apps/masterpieces/artist/balthasar-permoser"><strong>Balthasar Permoser</strong></a> (1651-1732) was a German <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> sculptor who spent 14 years studying in Italy before becoming court sculptor in Dresden under Augustus the Strong. Born in Kammer, Bavaria, he absorbed the dramatic intensity of Bernini and the virtuoso carving of Florentine workshops.</p><p>In Dresden, Permoser created his masterwork: the <strong>sculptural decoration of the Zwinger</strong>, Augustus the Strong's grand palace complex. His caryatids, satyrs, and putti animate the architecture with exuberant energy. He also carved the striking ivory <em>Apotheosis of Prince Eugene</em>, a tour de force of small-scale Baroque carving now in the Grünes Gewölbe (Green Vault) in Dresden.</p>`,
    faqs: [
      { question: "What is Permoser's most famous work?", answer: "The <strong>sculptural program of the Zwinger palace</strong> in Dresden, with its caryatids, herms, and mythological figures. He also carved an ivory <em>Apotheosis of Prince Eugene</em> in the Grünes Gewölbe, one of the finest Baroque ivories." },
      { question: "Where can I see Permoser's work?", answer: "The <strong>Zwinger palace in Dresden</strong> displays his monumental figures. Smaller works are at the Grünes Gewölbe and the Skulpturensammlung in Dresden's Albertinum." },
    ],
  },
  {
    slug: 'leochares',
    bioFull: `<p><a href="/apps/masterpieces/artist/leochares"><strong>Leochares</strong></a> was an ancient Greek sculptor active in the 4th century BCE, known primarily as the likely creator of the <strong>Apollo Belvedere</strong>, one of the most celebrated statues in the history of Western art. He worked in Athens and was commissioned alongside Scopas to decorate the Mausoleum at Halicarnassus, one of the Seven Wonders of the Ancient World.</p><p>The Apollo Belvedere, a Roman marble copy in the Vatican Museums, was long considered the highest ideal of male beauty and heavily influenced <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> and Neoclassical artists. Leochares also created chryselephantine (gold and ivory) portraits of the Macedonian royal family for the Philippeion at Olympia, commissioned by Philip II and Alexander the Great.</p>`,
    faqs: [
      { question: "What is Leochares known for?", answer: "Leochares is credited with the original bronze behind the <strong>Apollo Belvedere</strong>, one of the most copied and admired statues in Western art. The Roman marble copy is a star of the Vatican Museums." },
      { question: "What was the Mausoleum at Halicarnassus?", answer: "One of the <strong>Seven Wonders of the Ancient World</strong>, it was a massive tomb for King Mausolus in modern-day Turkey. Leochares was one of four sculptors who decorated it with friezes and freestanding figures." },
    ],
  },
  {
    slug: 'diego-rivera',
    bioFull: `<p><a href="/apps/masterpieces/artist/diego-rivera"><strong>Diego Rivera</strong></a> (1886-1957) was a Mexican painter and muralist who became one of the most influential artists in the Americas. Born in Guanajuato, he studied in Mexico City and Europe before returning home in the early 1920s to join the government-sponsored mural movement. His large-scale <strong>public frescoes</strong> in Mexico City, Detroit, and San Francisco depict Mexican history, indigenous culture, workers, and revolutionary ideals.</p><p>Rivera's murals at the National Palace in Mexico City and the Detroit Institute of Arts are considered masterworks of 20th-century public art. His personal life was famously turbulent: he married <strong>Frida Kahlo</strong> twice and was expelled from the Communist Party. A Rockefeller Center mural commission was destroyed in 1934 because it included a portrait of Lenin.</p>`,
    faqs: [
      { question: "What is Diego Rivera best known for?", answer: "Rivera is best known for <strong>monumental public murals</strong> depicting Mexican history, indigenous culture, and workers' struggles. His frescoes at Mexico City's National Palace and the Detroit Institute of Arts are among the most important murals of the 20th century." },
      { question: "Where can I see Rivera's murals?", answer: "Major murals are at the <strong>National Palace in Mexico City</strong>, the Detroit Institute of Arts, and the San Francisco Art Institute. The Museo Mural Diego Rivera in Mexico City holds his famous <em>Dream of a Sunday Afternoon</em>." },
      { question: "Was Rivera married to Frida Kahlo?", answer: "Yes. Rivera and <strong>Frida Kahlo married in 1929</strong>, divorced in 1939, and remarried in 1940. Their volatile relationship, complicated by mutual infidelities, has become one of art history's most famous love stories." },
    ],
  },
  {
    slug: 'christo-and-jeanne-claude',
    bioFull: `<p><a href="/apps/masterpieces/artist/christo-and-jeanne-claude"><strong>Christo and Jeanne-Claude</strong></a> were a married artistic duo known for monumental temporary environmental works. Christo Vladimirov Javacheff (1935-2020, born in Bulgaria) and Jeanne-Claude Denat de Guillebon (1935-2009, born in Morocco on the same day) met in Paris in 1958 and began collaborating on large-scale projects that wrapped, surrounded, or transformed landscapes and buildings.</p><p>Their most famous works include <strong>wrapping the Reichstag</strong> in Berlin (1995), surrounding islands in Miami's Biscayne Bay with pink fabric (1983), and installing 7,503 saffron-colored fabric gates in Central Park (2005). Every project was self-financed through sales of preparatory drawings and models. Christo's final project, <em>L'Arc de Triomphe, Wrapped</em>, was realized posthumously in 2021.</p>`,
    faqs: [
      { question: "What are Christo and Jeanne-Claude known for?", answer: "They're known for <strong>wrapping buildings and landscapes in fabric</strong> at monumental scale. Their temporary environmental artworks transformed the Reichstag, Central Park, islands in Miami, and the Arc de Triomphe." },
      { question: "How did they fund their projects?", answer: "Christo and Jeanne-Claude <strong>self-financed every project</strong> by selling Christo's preparatory drawings, collages, and scale models. They never accepted sponsorships or public funding, maintaining complete creative independence." },
    ],
  },
  {
    slug: 'jaume-plensa',
    bioFull: `<p><a href="/apps/masterpieces/artist/jaume-plensa"><strong>Jaume Plensa</strong></a> (born 1955) is a Spanish sculptor based in Barcelona known for large-scale public works that explore the human form, language, and light. His <strong>Crown Fountain</strong> (2004) in Chicago's Millennium Park features two 50-foot glass-block towers projecting video portraits of Chicago residents onto LED screens, with water cascading down the faces.</p><p>Plensa's translucent mesh heads and seated figures, made from white resin, stainless steel, or cast iron letters, appear in public spaces from Tokyo to Montreal. His work balances monumental scale with an ethereal lightness, often incorporating poetry, music, and multiple languages into the sculptural form.</p>`,
    faqs: [
      { question: "What is Jaume Plensa's most famous work?", answer: "The <strong>Crown Fountain</strong> (2004) in Chicago's Millennium Park, featuring two 50-foot towers projecting faces of Chicago residents with water flowing down. It sits in the same park as <a href=\"/apps/masterpieces/artist/anish-kapoor\"><strong>Anish Kapoor's</strong></a> Cloud Gate." },
      { question: "Where can I see Plensa's public sculptures?", answer: "Major works stand in <strong>Chicago, Barcelona, Tokyo, Montreal, and Yorkshire</strong>. His <em>Dream</em> sculpture, a 66-foot girl's head with closed eyes, stands in St. Helens, England." },
    ],
  },
  {
    slug: 'rembrandt-bugatti',
    bioFull: `<p><a href="/apps/masterpieces/artist/rembrandt-bugatti"><strong>Rembrandt Bugatti</strong></a> (1884-1916) was an Italian sculptor who specialized in <strong>animal bronzes</strong> of extraordinary sensitivity. Born in Milan, he was the younger brother of automobile designer Ettore Bugatti and the son of furniture designer Carlo Bugatti. Named after Rembrandt van Rijn, he showed precocious talent and was sculpting professionally by his teens.</p><p>Bugatti spent hours at the Antwerp Zoo, modeling animals from life with a fluid, impressionistic touch that captured movement and personality. His panthers, elephants, and big cats are among the most sought-after animal bronzes of the early 20th century. Depressed by the suffering of zoo animals during World War I (many were euthanized due to food shortages), he took his own life at 31.</p>`,
    faqs: [
      { question: "What is Rembrandt Bugatti known for?", answer: "Bugatti is known for <strong>Impressionistic animal bronze sculptures</strong>, especially big cats, elephants, and panthers. His fluid modeling captured the character and movement of animals he observed at the Antwerp Zoo." },
      { question: "Was Rembrandt Bugatti related to the car maker?", answer: "Yes. He was the <strong>younger brother of Ettore Bugatti</strong>, founder of the Bugatti automobile company. Their father Carlo Bugatti was a prominent Art Nouveau furniture designer. Art and design ran deep in the family." },
    ],
  },
  {
    slug: 'vincenzo-gemito',
    bioFull: `<p><a href="/apps/masterpieces/artist/vincenzo-gemito"><strong>Vincenzo Gemito</strong></a> (1852-1929) was a Neapolitan sculptor known for brilliantly naturalistic bronzes of street children, fishermen, and classical subjects. Abandoned as an infant at a Naples foundling hospital, he was raised by foster parents and showed extraordinary talent from childhood. He studied briefly at the Naples Academy but was largely self-taught.</p><p>Gemito's <strong>bronze busts and small figures</strong> capture the gritty vitality of Neapolitan street life with a realism that impressed even academic critics. His <em>Fisherman</em> and <em>Water Carrier</em> are among the most admired Italian bronzes of the late 19th century. He suffered a severe mental breakdown in 1887 and lived in seclusion for nearly 20 years before resuming work in the early 1900s.</p>`,
    faqs: [
      { question: "What is Vincenzo Gemito known for?", answer: "Gemito is known for <strong>vividly naturalistic bronze figures</strong> of Neapolitan street life: fishermen, urchins, and water carriers. His work captures the energy and character of Naples with a raw directness unusual for 19th-century sculpture." },
      { question: "Where can I see Gemito's work?", answer: "The largest collection is at the <strong>Museo e Certosa di San Martino</strong> in Naples. Works also appear at the Galleria Nazionale d'Arte Moderna in Rome and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    ],
  },
  {
    slug: 'lorado-taft',
    bioFull: `<p><a href="/apps/masterpieces/artist/lorado-taft"><strong>Lorado Taft</strong></a> (1860-1936) was an American sculptor, writer, and teacher who played a central role in developing public sculpture in the Midwest. Born in Elmwood, Illinois, he studied at the École des Beaux-Arts in Paris and taught at the Art Institute of Chicago for nearly 40 years. His influential book <em>The History of American Sculpture</em> (1903) was the first comprehensive survey of the subject.</p><p>Taft's most ambitious work is the <strong><em>Fountain of Time</em></strong> (1922) in Chicago's Washington Park, a 126-foot concrete sculpture depicting 100 figures processing past a hooded figure of Time. His <em>Eternal Silence</em> (the Graves statue) at Graceland Cemetery is one of Chicago's most haunting monuments.</p>`,
    faqs: [
      { question: "What is Lorado Taft's most famous work?", answer: "The <strong><em>Fountain of Time</em></strong> (1922) in Chicago's Washington Park: a 126-foot sculpture showing 100 human figures passing before a cloaked figure of Time. It was inspired by a line from Austin Dobson's poem." },
      { question: "Where can I see Taft's sculptures?", answer: "Major works are in <strong>Chicago</strong>: the Fountain of Time in Washington Park and <em>Eternal Silence</em> at Graceland Cemetery. His studio, now the Lorado Taft Midway Studios, is a National Historic Landmark on the University of Chicago campus." },
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
