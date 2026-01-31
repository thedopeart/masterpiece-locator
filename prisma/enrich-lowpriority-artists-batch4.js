const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'leone-leoni',
    bioFull: `<p><a href="/apps/masterpieces/artist/leone-leoni"><strong>Leone Leoni</strong></a> (c. 1509-1590) was an Italian <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> sculptor, goldsmith, and medalist who served as portraitist to Emperor Charles V and Philip II of Spain. Born in Arezzo, he trained as a goldsmith and gained fame for his portrait medals before receiving imperial patronage. He was also notorious for violent behavior, once being sentenced to the galleys for assaulting a papal jeweler.</p><p>Leoni's <strong>bronze portrait busts and full-length figures</strong> of the Habsburg rulers combine idealized armor with convincingly individual features. His masterwork, the <em>Charles V Restraining Fury</em> at the Prado, features removable armor that reveals a nude classical figure beneath. His son Pompeo Leoni continued the family's work for the Spanish crown.</p>`,
    faqs: [
      { question: "What is Leone Leoni known for?", answer: "Leoni created <strong>bronze portraits of Habsburg rulers</strong>, including the famous <em>Charles V Restraining Fury</em> at the Prado, which has removable armor revealing a nude classical figure. He was also a master medalist." },
      { question: "Where can I see Leoni's work?", answer: "The <strong>Prado Museum</strong> in Madrid holds his major bronzes. Portrait medals are at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna and the National Gallery of Art in Washington." },
    ],
  },
  {
    slug: 'pierino-da-vinci',
    bioFull: `<p><a href="/apps/masterpieces/artist/pierino-da-vinci"><strong>Pierino da Vinci</strong></a> (1529-1553) was a Florentine sculptor who showed extraordinary promise before dying at just 23. He was the nephew of <strong>Leonardo da Vinci</strong> (his father Bartolomeo was Leonardo's half-brother) and trained under Niccolò Tribolo and Baccio Bandinelli. Giorgio Vasari praised him highly in the <em>Lives of the Artists</em>.</p><p>Despite his short career, Pierino produced accomplished <strong>marble reliefs and small bronzes</strong> influenced by Michelangelo. His <em>River God</em> and reliefs of Cosimo de' Medici show a mature understanding of classical form that suggested he might have rivaled the great sculptors of his era had he lived. His works are rare and highly valued.</p>`,
    faqs: [
      { question: "Was Pierino da Vinci related to Leonardo?", answer: "Yes. Pierino was <strong>Leonardo da Vinci's nephew</strong>, the son of Leonardo's half-brother Bartolomeo. He inherited artistic talent but worked as a sculptor rather than a painter. He died at 23, cutting short a very promising career." },
      { question: "Where can I see his work?", answer: "Works are scarce due to his early death. The <strong>Vatican Museums</strong> and the Bargello in Florence hold pieces. His <em>River God</em> is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
    ],
  },
  {
    slug: 'antonin-merci',
    bioFull: `<p><a href="/apps/masterpieces/artist/antonin-merci"><strong>Antonin Mercié</strong></a> (1845-1916) was a French sculptor and painter who won the Prix de Rome at 23 and became one of the most celebrated academic sculptors of the Third Republic. Born in Toulouse, he studied under Alexandre Falguière and Jean-Paul Laurens at the École des Beaux-Arts in Paris.</p><p>His <strong><em>Gloria Victis</em></strong> (Glory to the Vanquished, 1874), showing a winged figure carrying a fallen soldier, became a powerful symbol of France's defeat in the Franco-Prussian War. The bronze was reproduced widely and cast for war memorials across France. Mercié also created the equestrian statue of Robert E. Lee in Richmond, Virginia (removed in 2021), and numerous portrait busts of prominent French figures.</p>`,
    faqs: [
      { question: "What is Mercié's most famous sculpture?", answer: "<strong><em>Gloria Victis</em></strong> (1874), showing a winged figure lifting a fallen soldier, became a symbol of French resilience after the Franco-Prussian War. Casts stand in several French cities and at the Musée d'Orsay in Paris." },
      { question: "Where can I see Mercié's work?", answer: "Bronze casts of <em>Gloria Victis</em> are at the <strong>Musée d'Orsay</strong> and the Musée des Augustins in Toulouse. His Robert E. Lee equestrian statue in Richmond was removed in 2021 after years of controversy." },
    ],
  },
  {
    slug: 'jean-baptiste-cl-singer',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-baptiste-cl-singer"><strong>Jean-Baptiste Clésinger</strong></a> (1814-1883) was a French sculptor who caused a sensation at the 1847 Paris Salon with his marble <strong><em>Woman Bitten by a Snake</em></strong>, a reclining nude of startling realism. Born in Besançon, son of a sculptor, he studied in Rome and Paris. The Salon piece (modeled from a body cast of his lover, Apollonie Sabatier) was praised for its lifelike flesh and condemned for bypassing genuine sculptural skill.</p><p>Clésinger married George Sand's daughter Solange, linking him to Parisian literary circles, though the marriage ended badly. He produced portrait busts, equestrian monuments, and Orientalist subjects throughout a prolific career, but never quite recaptured the scandal and celebrity of his debut.</p>`,
    faqs: [
      { question: "What is Clésinger's most famous work?", answer: "<strong><em>Woman Bitten by a Snake</em></strong> (1847) at the Musée d'Orsay caused a scandal at the Paris Salon. The writhing marble nude was cast directly from a living model, blurring the line between sculpture and life casting." },
      { question: "Where can I see Clésinger's work?", answer: "The <em>Woman Bitten by a Snake</em> is at the <strong>Musée d'Orsay</strong> in Paris. Other works are at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> and in various French provincial museums." },
    ],
  },
  {
    slug: 'jean-baptiste-cl-singer-called-auguste',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-baptiste-cl-singer"><strong>Jean Baptiste Clésinger, called Auguste</strong></a> (1814-1883) was a French sculptor whose career was defined by the scandalous success of his 1847 Salon debut, <em>Woman Bitten by a Snake</em>. The "Auguste" nickname distinguished him from his father, also a sculptor. Born in Besançon, he trained in his father's workshop and in Rome before making his mark in Paris.</p><p>Beyond the famous nude, Clésinger produced <strong>portrait busts, religious works, and equestrian subjects</strong> over a long career. His bust of George Sand, his former mother-in-law, is in the Musée Carnavalet. Though critics debated whether his realism was artistry or mere technical trickery, his best works demonstrate genuine skill in capturing the vitality of human form.</p>`,
    faqs: [
      { question: "Why was Clésinger called Auguste?", answer: "The name <strong>'Auguste' distinguished him from his father</strong>, the sculptor George-Philippe Clésinger. It was a working name rather than a formal middle name, common in French artistic families to avoid confusion between generations." },
      { question: "Where can I see his work?", answer: "Key works are at the <strong>Musée d'Orsay</strong> and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. His bust of George Sand is at the Musée Carnavalet, also in Paris." },
    ],
  },
  {
    slug: 'limbach-porcelain-factory',
    bioFull: `<p>The <strong>Limbach Porcelain Factory</strong> was founded in 1772 by Gotthelf Greiner in Limbach-Oberfrohna, Thuringia (present-day Germany). It was one of several small porcelain manufactories established in Thuringia during the late 18th century, taking advantage of local clay deposits and the region's tradition of fine craftsmanship.</p><p>Limbach produced <strong>tableware, decorative figures, and vases</strong> in a style influenced by Meissen but with its own rustic character. The factory's output included pastoral figures, allegorical groups, and floral-decorated tea services. Thuringian porcelain factories like Limbach offered more affordable alternatives to the grand court manufactories, making porcelain accessible to the middle class.</p>`,
    faqs: [
      { question: "What did Limbach produce?", answer: "Limbach produced <strong>porcelain tableware, decorative figures, and vases</strong> from 1772 onward. Their pastoral figurines and floral tea services offered an affordable alternative to grander manufactories like Meissen." },
      { question: "Where was the Limbach factory?", answer: "In <strong>Limbach-Oberfrohna, Thuringia</strong>, a region of central Germany with multiple porcelain factories. Thuringia's clay deposits and craft traditions supported a thriving porcelain industry in the late 18th and 19th centuries." },
    ],
  },
  {
    slug: 'claus-de-werve',
    bioFull: `<p><a href="/apps/masterpieces/artist/claus-de-werve"><strong>Claus de Werve</strong></a> (c. 1380-1439) was a Netherlandish sculptor who succeeded his uncle, <strong>Claus Sluter</strong>, as court sculptor to the Dukes of Burgundy. Born in Haarlem, he joined Sluter's workshop in Dijon and completed projects his uncle left unfinished, most notably the <strong>tomb of Philip the Bold</strong> at the Chartreuse de Champmol.</p><p>The tomb features a magnificent procession of 41 alabaster mourning figures (pleurants) surrounding the base, each individually characterized with different gestures and expressions of grief. De Werve carved most of these figures, which are now considered among the finest Gothic sculptures in existence. He also worked on the Well of Moses and other projects for the Burgundian court in Dijon.</p>`,
    faqs: [
      { question: "What is Claus de Werve known for?", answer: "De Werve is known for the <strong>mourning figures (pleurants) on the tomb of Philip the Bold</strong> in Dijon. These 41 individually carved alabaster mourners, draped in heavy robes, are masterpieces of Late Gothic sculpture." },
      { question: "Where can I see his work?", answer: "The tomb of Philip the Bold with its mourning figures is at the <strong>Musée des Beaux-Arts de Dijon</strong>. Some pleurants are at the <strong>Cleveland Museum of Art</strong> and the Metropolitan Museum of Art." },
    ],
  },
  {
    slug: 'francesco-bertos',
    bioFull: `<p><a href="/apps/masterpieces/artist/francesco-bertos"><strong>Francesco Bertos</strong></a> (c. 1678-1741) was an Italian sculptor who worked in Padua and Venice, known for his technically astonishing <strong>bronze sculptural groups</strong> featuring dozens of intertwined figures. Born in Rome, he moved to the Veneto and worked under the patronage of noble Venetian families.</p><p>Bertos' signature works are tall, spiraling compositions of mythological or allegorical figures piled atop one another in pyramidal arrangements. These tour-de-force bronzes, sometimes containing 20 or more figures, demonstrate extraordinary casting skill. They were popular as decorative pieces for aristocratic collections. His work bridges the late <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> and early Rococo periods in northern Italian sculpture.</p>`,
    faqs: [
      { question: "What is Francesco Bertos known for?", answer: "Bertos created <strong>tall bronze groups of intertwined mythological figures</strong>, sometimes 20+ figures spiraling upward in a single composition. These technically virtuosic pieces were prized by aristocratic collectors across northern Italy." },
      { question: "Where can I see Bertos' work?", answer: "Works are in the <strong>Ca' Rezzonico in Venice</strong> and major European decorative arts collections. The <strong>Getty Museum</strong> in Los Angeles and the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna also hold pieces." },
    ],
  },
  {
    slug: 'jan-jozeph-jaquet',
    bioFull: `<p><a href="/apps/masterpieces/artist/jan-jozeph-jaquet"><strong>Jan Jozeph Jaquet</strong></a> (1822-1898) was a Belgian sculptor who worked in the academic tradition, producing <strong>portrait busts, public monuments, and decorative architectural sculpture</strong>. Based in Brussels, he contributed to the sculptural decoration of several major Belgian buildings and public spaces during the height of 19th-century Belgian nation-building.</p><p>Jaquet's work reflects the solid craftsmanship and classical orientation of Belgian academic sculpture. He created figures for public buildings and contributed to the sculptural programs that adorned Brussels' expanding civic architecture during the reign of Leopold II.</p>`,
    faqs: [
      { question: "What did Jan Jozeph Jaquet create?", answer: "Jaquet produced <strong>academic portrait busts and public monuments</strong> in Brussels during the 19th century. His work contributed to the sculptural decoration of Belgian civic buildings during a period of national cultural development." },
      { question: "Where can I see Jaquet's work?", answer: "Works are in <strong>Brussels public spaces and Belgian museum collections</strong>. His architectural sculptures appear on civic buildings from the era of Leopold II's urban transformation of the capital." },
    ],
  },
  {
    slug: 'hermon-atkins-macneil',
    bioFull: `<p><a href="/apps/masterpieces/artist/hermon-atkins-macneil"><strong>Hermon Atkins MacNeil</strong></a> (1866-1947) was an American sculptor known for his portrayals of <strong>Native American subjects</strong> and public monuments. Born in Everett, Massachusetts, he studied at the Massachusetts Normal Art School and at the École des Beaux-Arts in Paris. He spent time among Native American communities in the Southwest, and these experiences shaped his most recognized works.</p><p>MacNeil designed the <strong>Standing Liberty quarter</strong> (1916-30), one of the most admired U.S. coin designs. His bronze <em>The Sun Vow</em> and other Native American subjects were exhibited at the 1893 World's Columbian Exposition and the 1901 Pan-American Exposition. He later created the pediment sculpture for the U.S. Supreme Court Building in Washington.</p>`,
    faqs: [
      { question: "What is MacNeil best known for?", answer: "MacNeil designed the <strong>Standing Liberty quarter</strong> (1916-30) and created bronze sculptures of Native American subjects. He also carved the pediment sculpture for the U.S. Supreme Court Building in Washington, D.C." },
      { question: "Where can I see MacNeil's work?", answer: "The <strong>U.S. Supreme Court Building</strong> in Washington features his pediment. Bronzes are at the <strong>Brookgreen Gardens</strong> in South Carolina, the Art Institute of Chicago, and the Metropolitan Museum." },
    ],
  },
  {
    slug: 'edward-kemeys',
    bioFull: `<p><a href="/apps/masterpieces/artist/edward-kemeys"><strong>Edward Kemeys</strong></a> (1843-1907) was an American sculptor who specialized in <strong>wild animal subjects</strong>, becoming one of the first American artists to focus exclusively on native American wildlife. Born in Savannah, Georgia, he served in the Civil War before taking up sculpture with no formal training, studying animals directly in Central Park and later in the wild.</p><p>Kemeys' most famous works are the <strong>two bronze lions flanking the entrance to the Art Institute of Chicago</strong>, installed in 1894. These dignified, powerful figures have become symbols of the museum and the city itself. He also created animal sculptures for the 1893 World's Columbian Exposition and for Fairmount Park in Philadelphia.</p>`,
    faqs: [
      { question: "What is Edward Kemeys known for?", answer: "Kemeys created the <strong>two bronze lions at the Art Institute of Chicago</strong> (1894), which have become iconic symbols of the museum and the city. He was one of America's first sculptors to specialize in native wildlife." },
      { question: "Where can I see Kemeys' animal sculptures?", answer: "The famous lions guard the entrance to the <strong>Art Institute of Chicago</strong>. Other works are at Fairmount Park in Philadelphia and the <a href=\"/apps/masterpieces/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington." },
    ],
  },
  {
    slug: 'ingeborg-plockross-iminger',
    bioFull: `<p><a href="/apps/masterpieces/artist/ingeborg-plockross-iminger"><strong>Ingeborg Plockross-Iminger</strong></a> (1872-1962) was a Danish sculptor who worked in the academic and naturalistic traditions. Based in Copenhagen, she created <strong>portrait busts, figure studies, and decorative works</strong> that reflected the refined craftsmanship of Scandinavian sculpture at the turn of the 20th century.</p><p>Plockross-Iminger exhibited at the Charlottenborg Exhibition and other Scandinavian venues. Her work shows the influence of the French academic tradition filtered through Danish sensibility, with careful attention to surface and a quiet, contemplative quality characteristic of Nordic art.</p>`,
    faqs: [
      { question: "What did Plockross-Iminger create?", answer: "She created <strong>portrait busts and figure studies</strong> in the naturalistic Danish tradition. Her work was shown at the Charlottenborg Exhibition in Copenhagen and reflects early 20th-century Scandinavian sculptural values." },
      { question: "Where can I see her work?", answer: "Works are in <strong>Danish museum collections</strong> and at the Ny Carlsberg Glyptotek in Copenhagen. Scandinavian art collections hold examples of her portrait busts and decorative pieces." },
    ],
  },
  {
    slug: 'emil-fuchs',
    bioFull: `<p><a href="/apps/masterpieces/artist/emil-fuchs"><strong>Emil Fuchs</strong></a> (1866-1929) was an Austrian-born sculptor, painter, and medalist who became a prominent society portraitist in both London and New York. Born in Vienna, he studied at the Vienna Academy and in Berlin and Rome. His skill as a medalist brought him to the attention of the British royal family: he created the <strong>first official portrait medal of Queen Victoria</strong> from life sittings in 1895.</p><p>Fuchs later sculpted portrait busts of King Edward VII and moved to New York in 1915, where he painted and sculpted portraits of American high society. He produced medallions, busts, and paintings with equal facility, working in a polished academic style that appealed to royal and aristocratic patrons on both sides of the Atlantic.</p>`,
    faqs: [
      { question: "What is Emil Fuchs known for?", answer: "Fuchs created the <strong>first official portrait medal of Queen Victoria from life</strong> (1895) and later sculpted busts of King Edward VII. He was a versatile artist working as sculptor, painter, and medalist for royalty and high society." },
      { question: "Where can I see Fuchs' work?", answer: "Portrait medals are in the <strong>Royal Collection</strong> and the British Museum. His paintings and sculptures appear in the <strong>Metropolitan Museum of Art</strong> and private collections in New York and London." },
    ],
  },
  {
    slug: 'anton-eberhardt',
    bioFull: `<p><a href="/apps/masterpieces/artist/anton-eberhardt"><strong>Anton Eberhardt</strong></a> was a German sculptor active in the 18th century, working in the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> and Rococo traditions of southern Germany. He produced <strong>religious figures, architectural sculpture, and decorative works</strong> for churches and noble patrons in the region.</p><p>Eberhardt's work reflects the exuberant sculptural tradition of southern German churches, where carved and polychromed wood figures, stucco angels, and altarpiece groups created immersive religious environments. His pieces demonstrate the skilled craftsmanship typical of workshop-trained sculptors in Bavaria and Swabia.</p>`,
    faqs: [
      { question: "What did Anton Eberhardt create?", answer: "Eberhardt created <strong>Baroque and Rococo religious sculptures</strong> for churches in southern Germany. His work includes carved wood figures and architectural decoration in the exuberant style of Bavarian church interiors." },
      { question: "What tradition did Eberhardt belong to?", answer: "He worked in the <strong>southern German Baroque tradition</strong> of church sculpture, where polychromed wood carvings, stucco, and gilded altarpiece figures created dramatically decorated religious spaces." },
    ],
  },
  {
    slug: 'buen-retiro-porcelain-factory',
    bioFull: `<p>The <strong>Buen Retiro Porcelain Factory</strong> operated in Madrid from 1760 to 1812, established by King Charles III of Spain when he transferred workers and materials from his Capodimonte factory in Naples upon becoming Spanish king. The factory occupied a building in the gardens of the Buen Retiro Palace.</p><p>Buen Retiro produced <strong>soft-paste porcelain figures, tableware, and architectural decorations</strong>, including the spectacular Porcelain Room at the Royal Palace of Aranjuez. The factory's output reflected Neapolitan and later French influences. It was destroyed during the Napoleonic Wars when French troops used the building as a fortification. Surviving pieces are rare and highly prized by collectors of European ceramics.</p>`,
    faqs: [
      { question: "What was the Buen Retiro factory?", answer: "A <strong>royal porcelain factory in Madrid (1760-1812)</strong> established by Charles III of Spain. It produced figures, tableware, and the famous Porcelain Room at the Royal Palace of Aranjuez." },
      { question: "Why are Buen Retiro pieces rare?", answer: "The factory was <strong>destroyed during the Napoleonic Wars</strong> in 1812 when French troops used the building as a fortification. Its 52-year production run was relatively short, making surviving pieces scarce and valuable." },
    ],
  },
  {
    slug: 'giovanni-battista-foggini',
    bioFull: `<p><a href="/apps/masterpieces/artist/giovanni-battista-foggini"><strong>Giovanni Battista Foggini</strong></a> (1652-1725) was the leading sculptor in Florence during the late <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> period, serving as court sculptor and architect to Grand Duke Cosimo III de' Medici. Born in Florence, he trained in Rome before returning to dominate Florentine sculpture for four decades.</p><p>Foggini created <strong>bronze reliefs, marble altars, and elaborate decorative schemes</strong> for Medici churches and palaces. His bronze reliefs for the Cappella Feroni in the Santissima Annunziata and his work in the Medici chapels at San Lorenzo demonstrate virtuoso casting and richly theatrical compositions. He also designed pietra dura (hardstone mosaic) furnishings for the Opificio delle Pietre Dure.</p>`,
    faqs: [
      { question: "What is Foggini known for?", answer: "Foggini was the <strong>leading Baroque sculptor in Florence</strong> for four decades, creating bronze reliefs, marble altars, and decorative programs for the Medici court. His work in the Santissima Annunziata and San Lorenzo churches are highlights." },
      { question: "Where can I see Foggini's work?", answer: "Major works are in <strong>Florentine churches</strong>, especially the Santissima Annunziata and San Lorenzo. Bronzes and decorative pieces are at the Palazzo Pitti, the Bargello, and the <strong>Metropolitan Museum of Art</strong>." },
    ],
  },
  {
    slug: 'joseph-anton-feuchtmayer',
    bioFull: `<p><a href="/apps/masterpieces/artist/joseph-anton-feuchtmayer"><strong>Joseph Anton Feuchtmayer</strong></a> (1696-1770) was a German Rococo sculptor and stuccoist who created some of the most exuberant church decorations in southern Germany. He came from a family of artists in Linz am Rhein and worked primarily around Lake Constance, where he decorated numerous churches and pilgrimage sites.</p><p>His masterwork is the <strong>sculptural decoration of the Pilgrimage Church of Birnau</strong> on Lake Constance, where lively stucco angels, putti, and ornamental figures animate the bright white and gold interior. The famous <em>Honey Thief</em> putto at Birnau, a chubby cherub stealing honey from a beehive, is one of the most beloved Rococo sculptures in Germany.</p>`,
    faqs: [
      { question: "What is Feuchtmayer's most famous work?", answer: "The <strong>sculptural decoration of the Pilgrimage Church of Birnau</strong> on Lake Constance, including the beloved <em>Honey Thief</em> putto. His exuberant stucco angels and ornament are among the finest examples of German Rococo." },
      { question: "Where can I see his work?", answer: "The <strong>Pilgrimage Church of Birnau</strong> on Lake Constance has his finest decorations. Other works are in churches around Lake Constance and in the Salem Monastery complex in Baden-Württemberg." },
    ],
  },
  {
    slug: 'jean-auguste-barre',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-auguste-barre"><strong>Jean-Auguste Barre</strong></a> (1811-1896) was a French sculptor and medalist who became one of the most prolific portrait sculptors of 19th-century France. Son of the engraver Jacques-Jean Barre, he studied under his father and at the École des Beaux-Arts. He created <strong>portrait busts, statuettes, and medallions</strong> of notable figures from politics, literature, and the arts.</p><p>Barre's skill at capturing likeness in small-scale formats made him popular with collectors and institutions alike. His portrait statuettes and busts of figures like Rachel, Queen Victoria, and Napoleon III demonstrate polished academic technique and sharp characterization.</p>`,
    faqs: [
      { question: "What is Jean-Auguste Barre known for?", answer: "Barre was a prolific <strong>portrait sculptor and medalist</strong> in 19th-century Paris. He created busts, statuettes, and medallions of prominent figures including Queen Victoria, Rachel, and Napoleon III." },
      { question: "Where can I see Barre's work?", answer: "Works are at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>, the Musée Carnavalet in Paris, and various French provincial museums. His portrait medals appear in numismatic collections internationally." },
    ],
  },
  {
    slug: 'matteo-de-pasti',
    bioFull: `<p><a href="/apps/masterpieces/artist/matteo-de-pasti"><strong>Matteo de' Pasti</strong></a> (c. 1420-c. 1468) was an Italian medalist, architect, and manuscript illuminator who worked primarily for Sigismondo Pandolfo Malatesta, the ruler of Rimini. He was one of the finest <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> medalists, creating profile portrait medals of his patron, the patron's mistress Isotta degli Atti, and other members of the Malatesta court.</p><p>De' Pasti also worked as an architect on the <strong>Tempio Malatestiano</strong> in Rimini, Leon Battista Alberti's pioneering Renaissance church, overseeing its construction. His medals combine sharply observed portraits on the obverse with allegorical and emblematic designs on the reverse, reflecting the humanist culture of Italian court life.</p>`,
    faqs: [
      { question: "What is Matteo de' Pasti known for?", answer: "De' Pasti was a master <strong>Renaissance medalist</strong> who created portrait medals for the Malatesta court in Rimini. He also worked on the construction of the Tempio Malatestiano, one of the earliest Renaissance churches." },
      { question: "Where can I see his medals?", answer: "Portrait medals are at the <strong>British Museum</strong>, the National Gallery of Art in Washington, and the Bargello in Florence. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> also holds examples." },
    ],
  },
  {
    slug: 'matthes-gebel',
    bioFull: `<p><a href="/apps/masterpieces/artist/matthes-gebel"><strong>Matthes Gebel</strong></a> (c. 1500-1574) was a German medalist and sculptor active in Nuremberg, considered one of the finest portrait medalists of the Northern <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. Little is known of his training, but he became Nuremberg's most prolific medal maker, creating around <strong>350 known portrait medals</strong> over a career spanning four decades.</p><p>Gebel's medals portray Nuremberg's patricians, merchants, scholars, and reformers with sharp, individualized detail. His style combines the precision of Germanic craftsmanship with Renaissance portrait ideals. Unlike Italian medalists who used casting, Gebel often struck his medals from dies, achieving finer detail at smaller scale.</p>`,
    faqs: [
      { question: "What is Matthes Gebel known for?", answer: "Gebel was <strong>Nuremberg's leading portrait medalist</strong>, producing around 350 medals of German patricians, scholars, and reformers. His struck (rather than cast) medals achieve remarkable sharpness and detail." },
      { question: "Where can I see Gebel's medals?", answer: "Major collections are at the <strong>Germanisches Nationalmuseum in Nuremberg</strong>, the British Museum, and the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
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
