const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'ancient-nok',
    bioFull: `<p>The <strong>Nok culture</strong> flourished in what is now central Nigeria from roughly 1500 BCE to 500 CE, producing some of the oldest known figurative sculptures in sub-Saharan Africa. Nok terracotta figures were first discovered in 1928 near the village of Nok in present-day Kaduna State during tin mining operations.</p><p><strong>Nok terracottas</strong> are characterized by elongated proportions, elaborate hairstyles, pierced eyes and nostrils, and expressive faces. They range from a few inches to near life-size and depict both human figures and animals. The culture also produced early evidence of iron smelting in West Africa. Many Nok pieces have been looted from archaeological sites, and Nigeria has worked to repatriate works from international collections.</p>`,
    faqs: [
      { question: "What is Nok sculpture?", answer: "<strong>Nok terracottas</strong> are among the oldest figurative sculptures in sub-Saharan Africa, dating from roughly 1500 BCE to 500 CE. Found in central Nigeria, they feature distinctive elongated forms, elaborate hairstyles, and pierced triangular eyes." },
      { question: "Where can I see Nok sculptures?", answer: "The <strong>National Museum in Jos, Nigeria</strong> holds a major collection. Works also appear at the <strong>Louvre</strong>, the Minneapolis Institute of Art, and the <strong>Metropolitan Museum of Art</strong> in New York." },
    ],
  },
  {
    slug: 'edo',
    bioFull: `<p><strong>Edo</strong> refers to the artistic tradition of the Kingdom of Benin (in present-day southern Nigeria), which produced some of the most technically accomplished bronze and brass sculptures in African art history. The Benin Kingdom flourished from the 13th century onward, and its court artists cast elaborate <strong>bronze plaques, heads, and figures</strong> using the lost-wax technique.</p><p>The <strong>Benin Bronzes</strong>, looted by British forces during the 1897 punitive expedition, are among the most debated objects in museum collections worldwide. Thousands of pieces were dispersed to museums in London, Berlin, New York, and elsewhere. Nigeria has been actively seeking their return, and several institutions have begun repatriating works. The plaques originally decorated the pillars of the Oba's palace in Benin City.</p>`,
    faqs: [
      { question: "What are the Benin Bronzes?", answer: "The <strong>Benin Bronzes</strong> are thousands of brass and bronze sculptures from the Kingdom of Benin (present-day Nigeria). They include portrait heads of kings (Obas), commemorative plaques, and ceremonial objects, most looted by British troops in 1897." },
      { question: "Where are Benin Bronzes displayed?", answer: "Major collections are at the <strong>British Museum</strong> in London and the Ethnological Museum in Berlin. Several museums have begun repatriating works to Nigeria's planned Edo Museum of West African Art in Benin City." },
    ],
  },
  {
    slug: 'ancient-mesopotamian',
    bioFull: `<p><strong>Ancient Mesopotamian</strong> sculpture spans roughly 5,000 years of artistic production from the civilizations between the Tigris and Euphrates rivers (modern Iraq, Syria, and Turkey). From the Sumerians through the Akkadians, Babylonians, and Assyrians, Mesopotamian artists created works ranging from tiny cylinder seals to colossal stone guardian figures.</p><p><strong>Assyrian palace reliefs</strong>, carved in gypsum alabaster and originally painted, depicted royal hunts, battles, and religious ceremonies with remarkable narrative detail. Sumerian votive figures with wide staring eyes and clasped hands represent some of the earliest known devotional sculptures. The winged <strong>lamassu</strong> (human-headed bulls) that guarded Assyrian palace gates are among the most imposing ancient sculptures to survive.</p>`,
    faqs: [
      { question: "What is Mesopotamian sculpture?", answer: "<strong>Mesopotamian sculpture</strong> includes works from Sumer, Akkad, Babylon, and Assyria spanning 5,000 years. Key forms include votive figures, cylinder seals, Assyrian palace reliefs, and the colossal winged lamassu guardian figures." },
      { question: "Where can I see Mesopotamian art?", answer: "The <strong>British Museum</strong> in London and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris hold the largest collections. The <strong>Metropolitan Museum of Art</strong> and the Iraq Museum in Baghdad also have major holdings." },
    ],
  },
  {
    slug: 'ancient-muisca',
    bioFull: `<p>The <strong>Muisca</strong> were a pre-Columbian civilization in the highlands of central Colombia, active from roughly 600 CE to the Spanish conquest in the 1530s. They're best known for their extraordinary <strong>gold and tumbaga (gold-copper alloy) work</strong>, which fueled the European legend of El Dorado.</p><p>Muisca goldsmiths created votive figures called <strong>tunjos</strong>: flat, stylized human forms made by lost-wax casting, often deposited as offerings in sacred lakes and caves. The most famous Muisca object is the <em>Muisca Raft</em> (c. 600-1600 CE) in Bogotá's Museo del Oro, depicting a chieftain on a raft surrounded by attendants, likely representing the El Dorado ceremony. Muisca metalwork is prized for its spiritual symbolism rather than decorative display.</p>`,
    faqs: [
      { question: "What is Muisca art?", answer: "Muisca art centers on <strong>gold and tumbaga votive figures (tunjos)</strong> created as offerings to gods. These flat, stylized figures were deposited in sacred lakes and caves in the Colombian highlands, fueling the legend of El Dorado." },
      { question: "Where can I see Muisca gold work?", answer: "The <strong>Museo del Oro (Gold Museum) in Bogotá, Colombia</strong> has the world's largest collection, including the famous Muisca Raft. The <strong>Metropolitan Museum of Art</strong> and the British Museum also hold pieces." },
    ],
  },
  {
    slug: 'ancient-moche',
    bioFull: `<p>The <strong>Moche</strong> civilization flourished on the northern coast of Peru from roughly 100 to 700 CE, producing some of the most expressive and technically accomplished ceramics in the ancient Americas. Their <strong>portrait vessels</strong>, realistic ceramic heads depicting specific individuals, are unique in pre-Columbian art for their attention to individual features and emotional expression.</p><p>Moche artists also produced elaborate <strong>stirrup-spout vessels</strong> depicting animals, mythological scenes, warfare, and erotic subjects. Their metalwork in gold, silver, and copper was equally sophisticated. The 1987 discovery of the <strong>Lord of Sipán</strong> tomb, with its spectacular gold funerary objects, revealed the wealth and power of Moche rulers.</p>`,
    faqs: [
      { question: "What is Moche art known for?", answer: "<strong>Moche portrait vessels</strong> are among the most realistic ceramic sculptures in the ancient Americas. These individual portrait heads, along with narrative stirrup-spout vessels, demonstrate extraordinary artistic skill from coastal Peru (100-700 CE)." },
      { question: "Where can I see Moche art?", answer: "The <strong>Museo Larco in Lima, Peru</strong> has an outstanding collection. The <strong>Metropolitan Museum of Art</strong> in New York and the <strong>Museum of the Royal Tombs of Sipán</strong> in Lambayeque, Peru also hold major works." },
    ],
  },
  {
    slug: 'ancient-persian',
    bioFull: `<p><strong>Ancient Persian</strong> sculpture encompasses artistic production from the Achaemenid Empire (c. 550-330 BCE) through the Sassanid period (224-651 CE), centered in modern-day Iran. The Achaemenid kings at Persepolis and Susa created monumental stone reliefs depicting processions of subject peoples bearing tribute, royal audiences, and mythological creatures.</p><p>The <strong>Persepolis reliefs</strong>, carved on staircase walls and palace facades, show a distinctive style: figures in profile with careful attention to costume details from dozens of different cultures. Persian sculptors also produced elegant metalwork, including gold rhytons (drinking vessels) shaped as animals. Sassanid rock reliefs at Naqsh-e Rostam and Taq-e Bostan continued the tradition of monumental royal imagery for centuries.</p>`,
    faqs: [
      { question: "What is ancient Persian sculpture?", answer: "<strong>Ancient Persian sculpture</strong> includes the monumental stone reliefs at Persepolis, gold metalwork, and Sassanid rock carvings. The Persepolis staircase reliefs, showing tribute-bearers from across the empire, are the most famous examples." },
      { question: "Where can I see Persian art?", answer: "The <strong>National Museum of Iran</strong> in Tehran holds the finest collection. Major works are also at the <strong>British Museum</strong>, the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>, and the <strong>Metropolitan Museum of Art</strong>." },
    ],
  },
  {
    slug: 'ancient-polynesian',
    bioFull: `<p><strong>Ancient Polynesian</strong> sculpture encompasses the carved figures, architectural elements, and ritual objects produced across the vast Pacific island region from roughly 1000 CE onward. Polynesian artists worked primarily in wood, stone, and bone, creating works that served religious, genealogical, and ceremonial functions.</p><p>The <strong>Moai of Easter Island</strong> (Rapa Nui), nearly 1,000 monolithic stone figures carved between the 13th and 16th centuries, are the most famous Polynesian sculptures. Hawaiian temple figures (akua ki'i), Maori carved meeting houses with their spiraling patterns, and Marquesan tikis each reflect distinct island traditions. Polynesian carving tends toward bold, simplified forms with strong geometric stylization.</p>`,
    faqs: [
      { question: "What is Polynesian sculpture?", answer: "<strong>Polynesian sculpture</strong> includes carved wood and stone figures from across the Pacific islands. The most famous are the <strong>Moai of Easter Island</strong>, but traditions span Hawaii, New Zealand (Maori carving), the Marquesas, and Tonga." },
      { question: "Where can I see Polynesian art?", answer: "The <strong>Bishop Museum</strong> in Honolulu, <strong>Te Papa Tongarewa</strong> in Wellington, and the Musée du Quai Branly in Paris hold major collections. The <strong>Metropolitan Museum of Art</strong> and British Museum also display Polynesian works." },
    ],
  },
  {
    slug: 'yoruba',
    bioFull: `<p><strong>Yoruba</strong> artistic tradition, centered in southwestern Nigeria and Benin, is one of the most prolific and diverse in Africa. Yoruba sculptors have produced carved wood figures, bronze heads, beaded crowns, and ritual objects for centuries, serving the religion, governance, and social life of Yoruba-speaking peoples.</p><p>The ancient city of <strong>Ife</strong> (12th-15th century) produced naturalistic bronze and terracotta portrait heads of astonishing refinement, challenging European assumptions about African art when they were first exhibited in the early 20th century. Yoruba carving traditions continue today, with <strong>ere ibeji</strong> (twin figures), veranda posts, Epa masks, and Gelede headdresses remaining vital art forms. Yoruba aesthetic principles emphasize clarity, balance, and the concept of <em>iwa</em> (character).</p>`,
    faqs: [
      { question: "What is Yoruba art known for?", answer: "Yoruba art is known for <strong>naturalistic Ife bronze heads, carved twin figures (ere ibeji), and elaborate masks</strong>. The Ife bronzes, dating from the 12th-15th centuries, are among the most refined portrait sculptures produced anywhere in the medieval world." },
      { question: "Where can I see Yoruba art?", answer: "The <strong>National Museum in Lagos</strong> and the Ife Museum in Nigeria hold key works. Major collections are also at the <strong>British Museum</strong>, the Musée du Quai Branly in Paris, and the <strong>Metropolitan Museum of Art</strong>." },
    ],
  },
  {
    slug: 'northern-italian',
    bioFull: `<p><strong>Northern Italian</strong> sculpture encompasses works produced in the workshops and courts of Milan, Venice, Padua, Ferrara, Mantua, and other cities of the Po Valley and Veneto regions. These areas developed sculptural traditions distinct from Florence and Rome, often emphasizing decorative richness, emotional expressiveness, and skilled metalwork.</p><p>Milanese sculptors excelled in <strong>armor decoration and metalwork</strong>, while Venetian workshops produced elaborate bronze statuettes and church furnishings. Paduan sculptors like Donatello (during his Padua years) and Andrea Riccio created some of the finest Renaissance bronzes. Northern Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> sculpture often shows the influence of both Florentine innovation and Northern European Gothic traditions.</p>`,
    faqs: [
      { question: "What defines Northern Italian sculpture?", answer: "Northern Italian sculpture is characterized by <strong>decorative richness, fine metalwork, and emotional expression</strong>. Cities like Milan, Venice, and Padua developed distinct traditions from Florence, blending <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> classicism with Gothic decorative sensibility." },
      { question: "Where can I see Northern Italian sculpture?", answer: "Key collections are at the <strong>Victoria and Albert Museum</strong> in London, the Bargello in Florence, and the <strong>Metropolitan Museum of Art</strong>. In Italy, the Ca' d'Oro in Venice and Sforza Castle in Milan hold important pieces." },
    ],
  },
  {
    slug: 'jean-baptiste-lemoyne-ii',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-baptiste-lemoyne-ii"><strong>Jean-Baptiste Lemoyne II</strong></a> (1704-1778) was a French sculptor who became the leading portrait artist of the reign of Louis XV. Son and student of the sculptor Jean-Louis Lemoyne, he won the Prix de Rome but never actually traveled to Italy. Instead, he built his career in Paris, becoming <em>sculpteur du roi</em> (sculptor to the king) in 1744.</p><p>Lemoyne created numerous <strong>portrait busts of Louis XV</strong> and members of the French court, along with mythological figures and public monuments. His terracotta sketches are particularly admired for their lively, spontaneous modeling. He also trained several important pupils, including Jean-Antoine Houdon, Étienne-Maurice Falconet, and Augustin Pajou, making his workshop one of the most influential in 18th-century France.</p>`,
    faqs: [
      { question: "What is Jean-Baptiste Lemoyne II known for?", answer: "Lemoyne was the <strong>leading portrait sculptor of Louis XV's reign</strong>. His marble and terracotta busts of the king, courtiers, and intellectuals are prized for their lively, naturalistic characterization." },
      { question: "Who were Lemoyne's famous students?", answer: "Lemoyne trained <strong>Jean-Antoine Houdon, Falconet, and Augustin Pajou</strong>, three of the most important French sculptors of the late 18th century. His workshop was arguably the most influential sculptural training ground of its era." },
    ],
  },
  {
    slug: 'jean-louis-lemoyne',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-louis-lemoyne"><strong>Jean-Louis Lemoyne</strong></a> (1665-1755) was a French sculptor who worked in the late <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> and early Rococo periods. He studied under Antoine Coysevox at the French Academy and won the Prix de Rome in 1688, spending several years in Italy studying classical sculpture. Back in Paris, he received commissions from the crown and private collectors.</p><p>Lemoyne created portrait busts, garden sculptures, and mythological figures for Versailles and other royal residences. His style bridges the <strong>grandeur of Louis XIV's Baroque</strong> and the lighter, more intimate Rococo that followed. He was the father of Jean-Baptiste Lemoyne II, who became an even more prominent sculptor in the next generation.</p>`,
    faqs: [
      { question: "What is Jean-Louis Lemoyne known for?", answer: "Lemoyne created <strong>Baroque and early Rococo sculptures</strong> for French royal residences including Versailles. His portrait busts and mythological figures bridge the grand manner of Louis XIV's era and the lighter Rococo style." },
      { question: "Where can I see his work?", answer: "Works are at the <strong>Louvre</strong> in Paris, the gardens of <strong>Versailles</strong>, and various French museums. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> holds several of his portrait busts and allegorical figures." },
    ],
  },
  {
    slug: 'emmanuel-fremiet',
    bioFull: `<p><a href="/apps/masterpieces/artist/emmanuel-fremiet"><strong>Emmanuel Frémiet</strong></a> (1824-1910) was a French sculptor who specialized in <strong>equestrian monuments and animal subjects</strong>. Nephew and student of the great animal sculptor François Rude, Frémiet became professor of animal drawing at the Jardin des Plantes in Paris. His gilded equestrian <strong>Joan of Arc</strong> in the Place des Pyramides, Paris, is one of the city's most recognizable monuments.</p><p>Frémiet combined scientific accuracy with dramatic storytelling. His bronze gorilla groups, particularly <em>Gorilla Carrying Off a Woman</em> (1887), stirred controversy and fascination at the Paris Salon. He also created the Saint Michael for the spire of Mont Saint-Michel. His animal bronzes at the Musée d'Orsay demonstrate a level of anatomical precision that reflects his years of studying specimens at the natural history museum.</p>`,
    faqs: [
      { question: "What is Frémiet best known for?", answer: "The gilded <strong>equestrian Joan of Arc</strong> (1874) in Paris's Place des Pyramides is his most famous work. He also created dramatic animal bronzes, including the controversial <em>Gorilla Carrying Off a Woman</em>, and the Saint Michael atop Mont Saint-Michel." },
      { question: "Where can I see Frémiet's work?", answer: "His Joan of Arc stands in the <strong>Place des Pyramides, Paris</strong>. Animal bronzes are at the Musée d'Orsay and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>. His Saint Michael crowns the spire of Mont Saint-Michel in Normandy." },
    ],
  },
  {
    slug: 'randolph-rogers',
    bioFull: `<p><a href="/apps/masterpieces/artist/randolph-rogers"><strong>Randolph Rogers</strong></a> (1825-1892) was an American Neoclassical sculptor who spent most of his career in Rome. Born in Waterloo, New York, he worked as a clerk in Ann Arbor, Michigan before supporters funded his art studies in Florence and Rome. He settled permanently in Rome's expatriate artist colony and maintained a large studio producing marble and bronze works.</p><p>Rogers' best-known work is the <strong>bronze doors of the U.S. Capitol Rotunda</strong> (1858-61), depicting scenes from the life of Columbus. His <em>Nydia, the Blind Girl of Pompeii</em> (1856) was one of the most popular American sculptures of the 19th century, with over 100 marble copies produced. He also created Civil War monuments for several American cities.</p>`,
    faqs: [
      { question: "What is Randolph Rogers known for?", answer: "Rogers created the <strong>bronze Columbus doors of the U.S. Capitol Rotunda</strong> and the enormously popular <em>Nydia, the Blind Girl of Pompeii</em>, of which over 100 marble copies were made." },
      { question: "Where can I see Rogers' work?", answer: "The Capitol doors are in <strong>Washington, D.C.</strong> Versions of <em>Nydia</em> appear at the <strong>Metropolitan Museum of Art</strong>, the Smithsonian American Art Museum, and other collections." },
    ],
  },
  {
    slug: 'david-roentgen',
    bioFull: `<p><a href="/apps/masterpieces/artist/david-roentgen"><strong>David Roentgen</strong></a> (1743-1807) was a German cabinetmaker whose furniture, featuring complex <strong>mechanical devices and marquetry panels</strong>, was prized by the courts of Europe. Born in Herrnhaag to a Moravian family, he took over his father Abraham's workshop in Neuwied and expanded it into the most commercially successful furniture enterprise of the 18th century.</p><p>Roentgen's pieces are famous for their <strong>hidden mechanisms</strong>: secret drawers that spring open, writing surfaces that rise at the turn of a key, and automated musical devices. His pictorial marquetry panels rival paintings in their detail. Marie Antoinette, Catherine the Great, and Frederick William II of Prussia were all clients. The Metropolitan Museum of Art holds several of his most impressive pieces.</p>`,
    faqs: [
      { question: "What makes Roentgen furniture special?", answer: "Roentgen furniture features <strong>ingenious hidden mechanisms and pictorial marquetry</strong>. Secret compartments, spring-loaded drawers, and mechanical writing surfaces made his pieces marvels of engineering as much as art." },
      { question: "Where can I see Roentgen's furniture?", answer: "The <strong>Metropolitan Museum of Art</strong> in New York holds major pieces. Important works are also at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>, the Hermitage in St. Petersburg, and Schloss Köpenick in Berlin." },
    ],
  },
  {
    slug: 'augusta-savage',
    bioFull: `<p><a href="/apps/masterpieces/artist/augusta-savage"><strong>Augusta Savage</strong></a> (1892-1962) was an African American sculptor and arts educator who became a central figure of the Harlem Renaissance. Born Augusta Christine Fells in Green Cove Springs, Florida, she moved to New York in 1921 and studied at Cooper Union. Racial discrimination initially blocked her from a Paris scholarship, but the resulting publicity made her a cause célèbre.</p><p>Savage eventually studied in Paris (1929-31) and returned to open the <strong>Savage Studio of Arts and Crafts</strong> in Harlem, teaching a generation of Black artists including Jacob Lawrence and Norman Lewis. Her most famous work, <strong><em>The Harp</em></strong> (also called <em>Lift Every Voice and Sing</em>), was a 16-foot plaster sculpture for the 1939 World's Fair. It was destroyed after the fair because Savage couldn't afford to have it cast in bronze.</p>`,
    faqs: [
      { question: "What is Augusta Savage known for?", answer: "Savage was a key <strong>Harlem Renaissance sculptor and arts educator</strong>. Her 16-foot <em>The Harp</em> for the 1939 World's Fair was her most ambitious work. She also mentored a generation of Black artists including Jacob Lawrence." },
      { question: "Why did most of Savage's work not survive?", answer: "Savage worked primarily in <strong>plaster and clay because she couldn't afford bronze casting</strong>. Many works, including the 16-foot <em>The Harp</em>, were destroyed because she lacked funds to preserve them. Only a handful of bronzes and photographs remain." },
    ],
  },
  {
    slug: 'elie-nadelman',
    bioFull: `<p><a href="/apps/masterpieces/artist/elie-nadelman"><strong>Elie Nadelman</strong></a> (1882-1946) was a Polish-American sculptor whose smooth, simplified figures bridged European modernism and American folk art. Born in Warsaw, he studied in Kraków and Munich before moving to Paris, where his drawings of abstract curving forms anticipated Cubism. He immigrated to New York in 1914 and became a favorite of high society.</p><p>Nadelman's <strong>elegant, gently humorous figures</strong> of circus performers, society ladies, and dancers combine classical poise with Art Deco stylization. His <em>Man in the Open Air</em> and <em>Woman at the Piano</em> are icons of early 20th-century American sculpture. He and his wife amassed a major folk art collection, much of which was donated to the New-York Historical Society.</p>`,
    faqs: [
      { question: "What is Elie Nadelman known for?", answer: "Nadelman is known for <strong>sleek, simplified figures</strong> that blend classical elegance with folk art charm. His polished bronze and marble sculptures of performers and society figures have a gentle wit and Art Deco refinement." },
      { question: "Where can I see Nadelman's work?", answer: "Major works are at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> and the <strong>Metropolitan Museum of Art</strong> in New York. The New-York Historical Society holds both sculptures and folk art from his personal collection." },
    ],
  },
  {
    slug: 'horatio-greenough',
    bioFull: `<p><a href="/apps/masterpieces/artist/horatio-greenough"><strong>Horatio Greenough</strong></a> (1805-1852) was the first American to pursue sculpture as a full-time profession and a pioneer of functionalist design theory. Born in Boston and educated at Harvard, he moved to Florence in 1825 and spent most of his career there. He received the first major sculpture commission from the U.S. government: a colossal seated <strong>George Washington</strong> (1832-40) modeled on the ancient Zeus at Olympia.</p><p>The Washington statue, depicting the first president bare-chested in a classical toga, proved too controversial for the Capitol Rotunda and was eventually moved outside, then to the Smithsonian. Despite the public reaction, Greenough's writings on art and architecture, advocating that <strong>form should follow function</strong>, influenced later thinkers from Louis Sullivan to the Bauhaus movement.</p>`,
    faqs: [
      { question: "What is Greenough's most famous work?", answer: "His colossal <strong>seated George Washington</strong> (1840), modeled on the ancient Zeus, caused controversy because it depicted Washington half-naked in classical robes. It's now at the Smithsonian National Museum of American History." },
      { question: "Why is Greenough historically important?", answer: "Greenough was the <strong>first professional American sculptor</strong> and an early advocate of functionalist design. His idea that form should follow function, articulated decades before Louis Sullivan, influenced modern architecture and design theory." },
    ],
  },
  {
    slug: 'harriet-hosmer',
    bioFull: `<p><a href="/apps/masterpieces/artist/harriet-hosmer"><strong>Harriet Hosmer</strong></a> (1830-1908) was an American Neoclassical sculptor who became the most successful female sculptor of the 19th century. Born in Watertown, Massachusetts, she studied anatomy at the Missouri Medical College (one of the few institutions that admitted women) before moving to Rome in 1852 to study under the British sculptor John Gibson.</p><p>In Rome, Hosmer ran a studio employing Italian carvers and produced ambitious marble works including <strong><em>Zenobia in Chains</em></strong> (1859), depicting the captured Syrian queen with regal dignity. She earned significant income, traveled independently, and lived openly with women. Critics sometimes accused her of having her Italian assistants do the actual carving, but she fiercely defended her working methods, which were standard practice for sculptors of the time.</p>`,
    faqs: [
      { question: "What is Harriet Hosmer known for?", answer: "Hosmer was the <strong>most commercially successful female sculptor of the 19th century</strong>. Her marble <em>Zenobia in Chains</em> toured American cities to great acclaim, and she ran a thriving studio in Rome for decades." },
      { question: "Where can I see Hosmer's work?", answer: "Works are at the <strong>Smithsonian American Art Museum</strong> and the Wadsworth Atheneum in Hartford. Her <em>Beatrice Cenci</em> is at the St. Louis Mercantile Library." },
    ],
  },
  {
    slug: 'harriet-goodhue-hosmer',
    bioFull: `<p><a href="/apps/masterpieces/artist/harriet-hosmer"><strong>Harriet Goodhue Hosmer</strong></a> (1830-1908) was an American Neoclassical sculptor, one of the most prominent women artists of the 19th century. Born in Watertown, Massachusetts, she trained in Rome under John Gibson and established a successful studio there. Her full name distinguishes her in historical records, though she's commonly known simply as Harriet Hosmer.</p><p>Hosmer created <strong>idealized marble figures</strong> drawn from mythology, literature, and history. Her <em>Puck</em> (1856), a playful seated sprite, was her most commercially popular work, with over 30 copies sold. She was part of a community of expatriate women artists in Rome that included <a href="/apps/masterpieces/artist/emma-stebbins"><strong>Emma Stebbins</strong></a> and Edmonia Lewis.</p>`,
    faqs: [
      { question: "What was Hosmer's most popular sculpture?", answer: "<strong><em>Puck</em></strong> (1856), a marble figure of Shakespeare's mischievous sprite seated on a toadstool, was her bestseller. Over 30 marble copies were sold to collectors, including the Prince of Wales." },
      { question: "Where did Hosmer work?", answer: "Hosmer spent most of her career in <strong>Rome, Italy</strong>, where she trained under John Gibson and ran her own studio. She was part of a circle of expatriate women sculptors including <a href=\"/apps/masterpieces/artist/emma-stebbins\"><strong>Emma Stebbins</strong></a> and Edmonia Lewis." },
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
