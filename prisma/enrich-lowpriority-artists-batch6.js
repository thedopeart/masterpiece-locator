const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'antonio-del-pollaiuolo',
    bioFull: `<p><a href="/apps/masterpieces/artist/antonio-del-pollaiuolo"><strong>Antonio del Pollaiuolo</strong></a> (c. 1431-1498) was a Florentine goldsmith, painter, sculptor, and engraver who excelled in depicting the <strong>human body in motion</strong>. His interest in anatomy and muscular tension made him a pioneer of dynamic figure composition in <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Florence.</p><p>Pollaiuolo's <em>Battle of the Nudes</em> engraving (c. 1470) is one of the most important prints of the 15th century. His bronze <strong>tomb of Pope Sixtus IV</strong> in St. Peter's Basilica and the tomb of Innocent VIII are among the finest Renaissance papal monuments. He trained as a goldsmith under his father, and this metalworking background informed his sculptural precision.</p>`,
    faqs: [
      { question: "What is Pollaiuolo known for?", answer: "Pollaiuolo pioneered <strong>dynamic depictions of the human body in motion</strong>. His bronze papal tombs in St. Peter's, the <em>Battle of the Nudes</em> engraving, and his anatomical studies influenced <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art significantly." },
      { question: "Where can I see his work?", answer: "The papal tombs are in <strong>St. Peter's Basilica, Rome</strong>. Paintings are at the Uffizi and the National Gallery in London. The <strong>Metropolitan Museum of Art</strong> holds bronzes." },
    ],
  },
  {
    slug: 'fran-ois-rude',
    bioFull: `<p><a href="/apps/masterpieces/artist/fran-ois-rude"><strong>François Rude</strong></a> (1784-1855) was a French sculptor best known for the dramatic relief <strong><em>La Marseillaise</em></strong> (The Departure of the Volunteers, 1833-36) on the Arc de Triomphe in Paris. Born in Dijon, he won the Prix de Rome in 1812 and spent years in exile in Brussels after supporting Napoleon.</p><p>The Arc de Triomphe relief, showing the goddess of Liberty leading a charge of warriors, is one of the most powerful <strong>Romantic sculptures</strong> ever created. Its dramatic energy and patriotic fervor contrast sharply with the Neoclassical restraint that dominated French sculpture at the time. Rude also created a bronze <em>Napoleon Awakening to Immortality</em> near Dijon.</p>`,
    faqs: [
      { question: "What is François Rude's most famous work?", answer: "<strong><em>La Marseillaise</em></strong> (1833-36) on the Arc de Triomphe in Paris, showing the goddess of Liberty leading volunteers into battle. It's one of the most dynamic and emotionally charged Romantic sculptures ever carved." },
      { question: "Where can I see Rude's work?", answer: "La Marseillaise is on the <strong>Arc de Triomphe, Paris</strong>. The Musée Rude in Dijon holds a collection of his works. Other pieces are at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
    ],
  },
  {
    slug: 'aim-jules-dalou',
    bioFull: `<p><a href="/apps/masterpieces/artist/aim-jules-dalou"><strong>Aimé-Jules Dalou</strong></a> (1838-1902) was a French sculptor who combined <strong>Baroque dynamism with social realist subjects</strong>. Born into a working-class Parisian family, he studied under Carpeaux and Duret. He participated in the Paris Commune (1871) and fled to London, where he taught at the Royal College of Art for eight years.</p><p>Dalou's masterwork is the <strong><em>Triumph of the Republic</em></strong> (1889-99) in the Place de la Nation, Paris, one of the most ambitious monuments of the Third Republic. His terracotta sketches and small bronzes of working women, peasants, and laborers are admired for their vital, unsentimental realism.</p>`,
    faqs: [
      { question: "What is Dalou known for?", answer: "Dalou created the <strong><em>Triumph of the Republic</em></strong> monument in Paris and was a pioneer of social realist sculpture. His terracotta studies of laborers and working women combine Baroque energy with genuine sympathy for ordinary people." },
      { question: "Where can I see Dalou's work?", answer: "The <em>Triumph of the Republic</em> stands in <strong>Place de la Nation, Paris</strong>. Works are at the Musée du Petit Palais and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>. His London years left works at the V&A." },
    ],
  },
  {
    slug: 'jules-dalou',
    bioFull: `<p><a href="/apps/masterpieces/artist/jules-dalou"><strong>Jules Dalou</strong></a> (1838-1902), fully Aimé-Jules Dalou, was a leading French sculptor of the late 19th century who brought <strong>social realist themes</strong> into monumental sculpture. After fleeing Paris following the Commune, he spent eight productive years in London before returning to France.</p><p>His <strong>terracotta figure studies</strong> of workers, bakers, and peasant women are among the most admired small-scale sculptures of the period, praised for their directness and humanity. His public monuments in Paris and his influence on younger sculptors helped shape French sculpture's turn toward modern subjects.</p>`,
    faqs: [
      { question: "What subjects did Dalou sculpt?", answer: "Dalou specialized in <strong>working-class subjects</strong>: laborers, peasant women, bakers, and laundresses. His terracotta studies capture ordinary people with a warmth and dignity unusual in academic sculpture of the era." },
      { question: "Where can I see his work?", answer: "Works are at the <strong>Musée du Petit Palais</strong> in Paris, the V&A in London, and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>. His public monuments stand in several Paris squares." },
    ],
  },
  {
    slug: 'antoine-augustin-pr-ault',
    bioFull: `<p><a href="/apps/masterpieces/artist/antoine-augustin-pr-ault"><strong>Antoine Augustin Préault</strong></a> (1809-1879) was a French Romantic sculptor known for his intensely emotional, often violent works that challenged the calm idealism of Neoclassical sculpture. Born in Paris, he studied under David d'Angers but developed a far more turbulent, expressive style.</p><p>His relief <strong><em>Slaughter</em></strong> (<em>Tuerie</em>, 1834), a writhing mass of tortured figures, was rejected from the Salon for its disturbing intensity. Préault was effectively banned from exhibiting for over a decade. His later works include the medallion of <em>Silence</em> at Père Lachaise cemetery, a haunting profile of a hooded figure that has become one of the cemetery's most photographed sculptures.</p>`,
    faqs: [
      { question: "What is Préault known for?", answer: "Préault created intensely <strong>emotional Romantic sculptures</strong> that challenged academic conventions. His relief <em>Slaughter</em> (1834) was too disturbing for the Salon, and his <em>Silence</em> medallion at Père Lachaise is one of Paris's most haunting sculptures." },
      { question: "Where can I see his work?", answer: "The <em>Silence</em> medallion is at <strong>Père Lachaise cemetery</strong> in Paris. Works including <em>Slaughter</em> are at the Musée d'Orsay. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> also holds pieces." },
    ],
  },
  {
    slug: 'antoine-etex',
    bioFull: `<p><a href="/apps/masterpieces/artist/antoine-etex"><strong>Antoine Etex</strong></a> (1808-1888) was a French sculptor, painter, and architect who contributed two of the four relief panels on the <strong>Arc de Triomphe</strong> in Paris: <em>The Resistance of 1814</em> and <em>The Peace of 1815</em>. Born in Paris, he studied under Pradier, Ingres, and Dupaty.</p><p>Etex was one of the most ambitious French sculptors of the Romantic period, though he's often overshadowed by his Arc de Triomphe neighbor François Rude. His style balances Romantic expressiveness with Neoclassical restraint. He also produced portrait busts, funerary monuments, and architectural designs throughout a long, prolific career.</p>`,
    faqs: [
      { question: "What is Antoine Etex known for?", answer: "Etex carved <strong>two relief panels on the Arc de Triomphe</strong> in Paris: <em>The Resistance</em> and <em>The Peace</em>. These stand alongside François Rude's famous <em>La Marseillaise</em> on the monument." },
      { question: "Where can I see Etex's work?", answer: "His reliefs are on the <strong>Arc de Triomphe, Paris</strong>. Other works are at the Musée d'Orsay and the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>. Funerary monuments appear in Père Lachaise and Montmartre cemeteries." },
    ],
  },
  {
    slug: 'baron-fran-ois-joseph-bosio',
    bioFull: `<p><a href="/apps/masterpieces/artist/baron-fran-ois-joseph-bosio"><strong>Baron François-Joseph Bosio</strong></a> (1768-1845) was a Monegasque-French sculptor who became the official sculptor of the Restoration monarchy. Born in Monaco, he studied in Paris and Rome before becoming one of the most favored sculptors under Napoleon, Louis XVIII, and Charles X. He was elevated to the rank of baron.</p><p>Bosio created the <strong>quadriga atop the Arc de Triomphe du Carrousel</strong> near the Louvre and the equestrian statue of Louis XIV on the Place des Victoires. His elegant Neoclassical style, with its smooth surfaces and graceful proportions, suited the taste of Restoration-era France perfectly.</p>`,
    faqs: [
      { question: "What is Bosio known for?", answer: "Bosio created the <strong>quadriga atop the Arc de Triomphe du Carrousel</strong> near the Louvre and the equestrian Louis XIV on the Place des Victoires. He was the leading sculptor of France's Restoration period." },
      { question: "Where can I see his work?", answer: "The quadriga crowns the <strong>Arc de Triomphe du Carrousel</strong> near the Louvre. The equestrian Louis XIV stands in the Place des Victoires. Works are also at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
    ],
  },
  {
    slug: 'hamo-thornycroft',
    bioFull: `<p><a href="/apps/masterpieces/artist/hamo-thornycroft"><strong>Hamo Thornycroft</strong></a> (1850-1925) was a British sculptor who became a leading figure in the New Sculpture movement, which brought naturalism, energy, and social subjects into Victorian sculpture. Born into a family of sculptors (both parents were artists), he studied at the Royal Academy and quickly gained recognition.</p><p>His bronze <strong><em>The Mower</em></strong> (1884) is considered a landmark of Victorian sculpture for depicting a working man with the dignity usually reserved for classical heroes. He also created the statue of Oliver Cromwell outside Parliament and the monument to General Gordon in Trafalgar Square.</p>`,
    faqs: [
      { question: "What is Hamo Thornycroft known for?", answer: "Thornycroft's <strong><em>The Mower</em></strong> (1884) pioneered realistic depictions of working people in British sculpture. He also created the Oliver Cromwell statue outside Parliament and the General Gordon monument." },
      { question: "Where can I see his work?", answer: "The Cromwell statue stands outside the <strong>Houses of Parliament, London</strong>. <em>The Mower</em> is at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Britain</strong></a>. Other works are in London's public squares." },
    ],
  },
  {
    slug: 'fran-ois-duquesnoy',
    bioFull: `<p><a href="/apps/masterpieces/artist/fran-ois-duquesnoy"><strong>François Duquesnoy</strong></a> (1597-1643) was a Flemish sculptor who worked in Rome and became, alongside <a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini</strong></a> and <a href="/apps/masterpieces/artist/alessandro-algardi"><strong>Algardi</strong></a>, one of the three leading sculptors of the Roman <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a>. Born in Brussels, he moved to Rome in 1618 and earned the nickname "il Fiammingo" (the Fleming).</p><p>Duquesnoy's style is more restrained and classical than Bernini's, closer to Algardi's approach. His <strong>marble <em>St. Susanna</em></strong> (1629-33) in Santa Maria di Loreto is considered his masterpiece, praised for its quiet dignity. He was also beloved for his small <strong>ivory and bronze putti</strong> (cherubs), which collectors across Europe eagerly acquired.</p>`,
    faqs: [
      { question: "What is Duquesnoy known for?", answer: "Duquesnoy's marble <strong><em>St. Susanna</em></strong> in Rome is his masterpiece. He was also famous for his small ivory and bronze putti (cherubs), which were collected across Europe and widely imitated." },
      { question: "How did Duquesnoy compare to Bernini?", answer: "Duquesnoy favored a <strong>more classically restrained approach</strong> than <a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini's</strong></a> dramatic theatricality. His figures are calmer and more idealized, earning him admirers who preferred classical beauty over Baroque emotion." },
    ],
  },
  {
    slug: 'antonio-abondio',
    bioFull: `<p><a href="/apps/masterpieces/artist/antonio-abondio"><strong>Antonio Abondio</strong></a> (1538-1591) was an Italian medalist and wax modeler who served as <strong>court medalist to the Habsburg emperors</strong> Maximilian II and Rudolf II in Vienna and Prague. Born in Riva del Garda, he trained in Milan and became one of the finest portrait medalists of the late <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>.</p><p>Abondio's <strong>wax portrait reliefs</strong> are exceptionally rare and prized for their delicate detail. His medals of Habsburg rulers and court figures combine Italian refinement with the precision demanded by Northern European patrons. He spent his most productive years at the court of Rudolf II in Prague, one of Europe's great centers of art patronage.</p>`,
    faqs: [
      { question: "What is Antonio Abondio known for?", answer: "Abondio was the <strong>Habsburg court medalist</strong> who created portrait medals and rare wax reliefs for emperors Maximilian II and Rudolf II. His work combines Italian Renaissance elegance with Northern European precision." },
      { question: "Where can I see his medals?", answer: "Medals are at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, the British Museum, and the National Gallery of Art in Washington." },
    ],
  },
  {
    slug: 'antonio-susini',
    bioFull: `<p><a href="/apps/masterpieces/artist/antonio-susini"><strong>Antonio Susini</strong></a> (active c. 1580-1624) was a Florentine bronze caster and sculptor who produced the finest casts after models by <a href="/apps/masterpieces/artist/giovanni-da-bologna"><strong>Giambologna</strong></a>. He worked in Giambologna's workshop and was considered the master's most skilled bronze technician, creating reproductions of Giambologna's small bronzes with extraordinary surface finish.</p><p>After Giambologna's death in 1608, Susini continued producing bronzes from the master's models for collectors across Europe. His casts are prized for their <strong>superb chasing and patination</strong>, sometimes surpassing even Giambologna's own workshop pieces in surface quality. His nephew Giovanni Francesco Susini continued the family tradition.</p>`,
    faqs: [
      { question: "What is Antonio Susini known for?", answer: "Susini produced the <strong>finest bronze casts after Giambologna's models</strong>. His exceptional chasing and patination made his bronzes the most sought-after versions of Giambologna compositions in Europe." },
      { question: "Where can I see Susini bronzes?", answer: "Works are at the <strong>Bargello in Florence</strong>, the Louvre, and the Liechtenstein Collection. His bronzes appear in major decorative arts collections and are highly valued at auction." },
    ],
  },
  {
    slug: 'jean-baptiste-lemoyne',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-baptiste-lemoyne"><strong>Jean-Baptiste Lemoyne</strong></a> refers to the elder member of a distinguished French sculptural dynasty. The Lemoyne family produced several important sculptors across the 17th and 18th centuries, contributing portrait busts, mythological figures, and public monuments for the French court and Parisian institutions.</p><p>The family's work spans the transition from <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> grandeur to Rococo elegance in French sculpture. Their portrait busts and garden sculptures for royal residences helped define the visual character of ancien régime France.</p>`,
    faqs: [
      { question: "Who were the Lemoyne sculptors?", answer: "The Lemoyne family included <strong>Jean-Louis Lemoyne (1665-1755) and his son Jean-Baptiste II (1704-1778)</strong>. Both served as court sculptors creating portrait busts and mythological works for the French crown." },
      { question: "Where can I see Lemoyne sculptures?", answer: "Works are at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, the gardens of <strong>Versailles</strong>, and in various French museums and public collections." },
    ],
  },
  {
    slug: 'robert-therrien',
    bioFull: `<p><a href="/apps/masterpieces/artist/robert-therrien"><strong>Robert Therrien</strong></a> (1947-2019) was an American sculptor known for <strong>oversized replicas of everyday objects</strong>: tables and chairs scaled up to make adults feel child-sized, massive stacked plates, and towering Dutch doors. Born in Chicago and based in Los Angeles, he studied at the Brooks Institute and USC.</p><p>Therrien's work shares DNA with Pop Art's interest in the ordinary but takes a more surreal, psychological approach. Standing beneath his 10-foot-tall table and chairs creates a disorienting bodily experience rather than a visual joke. His work appeared in the Whitney Biennial and at major international exhibitions throughout his career.</p>`,
    faqs: [
      { question: "What is Robert Therrien known for?", answer: "Therrien created <strong>monumental replicas of everyday objects</strong>, especially his towering table and chairs that make adults feel child-sized. His work transforms the familiar into the disorienting through radical changes in scale." },
      { question: "Where can I see Therrien's work?", answer: "Works are at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, <strong>LACMA</strong> in Los Angeles, and the Broad. His oversized table and chairs installation has been shown at multiple international venues." },
    ],
  },
  {
    slug: 'andrew-wyeth',
    bioFull: `<p><a href="/apps/masterpieces/artist/andrew-wyeth"><strong>Andrew Wyeth</strong></a> (1917-2009) was an American painter whose realistic depictions of rural Pennsylvania and Maine made him one of the most popular (and debated) American artists of the 20th century. Son of illustrator N.C. Wyeth, he was trained entirely by his father and never attended art school.</p><p>Wyeth's <strong><em>Christina's World</em></strong> (1948), showing a woman crawling through a field toward a farmhouse, is one of the most recognized American paintings. He worked primarily in <strong>egg tempera and watercolor</strong>, achieving extraordinary precision and atmospheric subtlety. Critics debated whether his work was illustration or fine art, but the public embraced him. His secret "Helga" paintings, 247 works of a neighbor, were revealed in 1986.</p>`,
    faqs: [
      { question: "What is Andrew Wyeth's most famous painting?", answer: "<strong><em>Christina's World</em></strong> (1948) at MoMA, showing a disabled woman crawling through a Maine field, is his most iconic image. It's one of the most recognized American paintings of the 20th century." },
      { question: "Where can I see Wyeth's work?", answer: "<em>Christina's World</em> is at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York. The <strong>Brandywine River Museum</strong> in Chadds Ford, Pennsylvania holds the largest collection. The Farnsworth Art Museum in Rockland, Maine also has major holdings." },
    ],
  },
  {
    slug: 'judy-chicago',
    bioFull: `<p><a href="/apps/masterpieces/artist/judy-chicago"><strong>Judy Chicago</strong></a> (born 1939) is an American feminist artist, author, and educator whose work addresses <strong>women's roles in history and culture</strong>. Born Judith Sylvia Cohen in Chicago, she studied at UCLA and became a pioneering figure in the feminist art movement of the 1970s.</p><p>Her most famous work, <strong><em>The Dinner Party</em></strong> (1974-79), is a monumental installation featuring a triangular table set with 39 elaborately crafted place settings honoring women throughout history, from ancient goddesses to Georgia O'Keeffe. The piece, which involved over 400 collaborators, is permanently installed at the Brooklyn Museum. Chicago also established the first feminist art education program at Fresno State College.</p>`,
    faqs: [
      { question: "What is The Dinner Party?", answer: "<strong><em>The Dinner Party</em></strong> (1974-79) is a triangular banquet table with 39 ceramic place settings honoring women throughout history. It involved 400+ collaborators and is permanently installed at the <strong>Brooklyn Museum</strong> in New York." },
      { question: "Where can I see Judy Chicago's work?", answer: "<em>The Dinner Party</em> is at the <strong>Brooklyn Museum</strong>. Other works appear at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, LACMA, and the National Museum of Women in the Arts in Washington, D.C." },
    ],
  },
  {
    slug: 'pedro-de-mena',
    bioFull: `<p><a href="/apps/masterpieces/artist/pedro-de-mena"><strong>Pedro de Mena</strong></a> (1628-1688) was a Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> sculptor from Granada who became one of the greatest practitioners of polychrome wood sculpture in Spain. He trained under his father, Alonso de Mena, and later worked closely with Alonso Cano. His carved and painted wooden figures of saints achieve a <strong>startling emotional and physical realism</strong>.</p><p>Mena's <em>Magdalene</em> in the Museo Nacional de Escultura in Valladolid, depicting a gaunt, grief-stricken penitent in a rough hair shirt, is one of the most powerful devotional images in Spanish art. His <em>Ecce Homo</em> busts and figures of St. Francis demonstrate the intense spiritual naturalism that defined the Spanish Baroque tradition.</p>`,
    faqs: [
      { question: "What is Pedro de Mena known for?", answer: "Mena is known for <strong>intensely realistic polychrome wood sculptures</strong> of saints and religious figures. His <em>Penitent Magdalene</em> in Valladolid is one of the most emotionally powerful devotional sculptures in Spanish art." },
      { question: "Where can I see Mena's work?", answer: "Major works are at the <strong>Museo Nacional de Escultura in Valladolid</strong>, Granada Cathedral, and Malaga Cathedral. The <strong>Metropolitan Museum of Art</strong> and the Hispanic Society also hold pieces." },
    ],
  },
  {
    slug: 'edvard-eriksen',
    bioFull: `<p><a href="/apps/masterpieces/artist/edvard-eriksen"><strong>Edvard Eriksen</strong></a> (1876-1959) was a Danish sculptor who created Copenhagen's most famous landmark: <strong>The Little Mermaid</strong> (1913). Born on the island of Bornholm, he studied at the Royal Danish Academy of Fine Arts in Copenhagen and worked primarily as a portrait sculptor and decorator.</p><p>The Little Mermaid bronze, commissioned by Carl Jacobsen (of the Carlsberg brewing family) after being moved by a Royal Theatre ballet adaptation of Hans Christian Andersen's fairy tale, sits on a rock at Langelinie harbor. It's been vandalized numerous times (beheaded twice, arm sawed off, painted) but remains one of the world's most visited statues, drawing over a million visitors annually.</p>`,
    faqs: [
      { question: "Who created The Little Mermaid statue?", answer: "<strong>Edvard Eriksen</strong> sculpted the bronze Little Mermaid (1913) in Copenhagen. It was commissioned by brewer Carl Jacobsen and modeled partly after ballerina Ellen Price, who performed the role at Copenhagen's Royal Theatre." },
      { question: "Where is The Little Mermaid?", answer: "The statue sits on a rock at <strong>Langelinie harbor in Copenhagen</strong>, Denmark. Despite being only about 4 feet tall, it draws over a million visitors annually and has become Denmark's most recognized symbol." },
    ],
  },
  {
    slug: 'paul-landowski',
    bioFull: `<p><a href="/apps/masterpieces/artist/paul-landowski"><strong>Paul Landowski</strong></a> (1875-1961) was a French sculptor who created one of the world's most famous monuments: <strong>Christ the Redeemer</strong> (1922-31) in Rio de Janeiro. Born in Paris, he won the Prix de Rome in 1900 and became one of France's most prominent monumental sculptors, eventually directing the French Academy in Rome.</p><p>The 98-foot-tall Christ the Redeemer, perched atop Mount Corcovado, was engineered by Heitor da Silva Costa and built from reinforced concrete and soapstone. Landowski designed the head and hands. The statue was named one of the New Seven Wonders of the World in 2007. He also created the Reformation Wall in Geneva and numerous war memorials across France.</p>`,
    faqs: [
      { question: "What did Paul Landowski create?", answer: "Landowski designed the <strong>head and hands of Christ the Redeemer</strong> (1931) in Rio de Janeiro, one of the New Seven Wonders of the World. He also sculpted the Reformation Wall in Geneva and numerous French war memorials." },
      { question: "How was Christ the Redeemer built?", answer: "The 98-foot statue was <strong>engineered by Heitor da Silva Costa</strong> from reinforced concrete and soapstone tiles. Landowski sculpted the head and hands in Paris, which were shipped to Brazil and assembled atop Mount Corcovado." },
    ],
  },
  {
    slug: 'jonathan-borofsky',
    bioFull: `<p><a href="/apps/masterpieces/artist/jonathan-borofsky"><strong>Jonathan Borofsky</strong></a> (born 1942) is an American sculptor and installation artist known for his large-scale public works, especially the <strong><em>Hammering Man</em></strong> series: motorized black steel silhouettes of a worker swinging a hammer, installed in cities from Seattle to Frankfurt to Seoul.</p><p>Born in Boston and educated at Carnegie Mellon and Yale, Borofsky emerged in the late 1970s with immersive gallery installations combining painted figures, sound, and projected imagery. His public sculptures typically feature simplified human silhouettes at monumental scale, addressing themes of labor, community, and human aspiration. The 48-foot Hammering Man in Seattle has become a city landmark.</p>`,
    faqs: [
      { question: "What is Jonathan Borofsky known for?", answer: "Borofsky is best known for the <strong><em>Hammering Man</em></strong> series: giant motorized black steel silhouettes of a laborer swinging a hammer. Versions stand in Seattle, Frankfurt, Seoul, Basel, and other cities." },
      { question: "Where can I see Borofsky's work?", answer: "The <strong>48-foot Hammering Man</strong> stands outside the Seattle Art Museum. Other versions are in Frankfurt, Seoul, and Basel. Gallery works appear at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> and major contemporary art museums." },
    ],
  },
  {
    slug: 'arturo-di-modica',
    bioFull: `<p><a href="/apps/masterpieces/artist/arturo-di-modica"><strong>Arturo Di Modica</strong></a> (1941-2021) was a Sicilian-American sculptor who created the <strong>Charging Bull</strong> (1989), the bronze sculpture that has become the unofficial symbol of Wall Street and American financial ambition. Born in Vittoria, Sicily, he moved to New York in 1973.</p><p>Di Modica spent two years and $350,000 of his own money casting the 7,100-pound bull, then installed it guerrilla-style outside the New York Stock Exchange one December night in 1989 as a gift to New Yorkers. Police towed it away, but public outcry forced the city to reinstall it nearby on Broadway. It's now one of the most photographed sculptures in New York.</p>`,
    faqs: [
      { question: "Who created the Wall Street Charging Bull?", answer: "<strong>Arturo Di Modica</strong> cast the 7,100-pound bronze bull at his own expense ($350,000) and installed it guerrilla-style outside the NYSE in December 1989. It was meant as a symbol of American resilience after the 1987 stock market crash." },
      { question: "Where is the Charging Bull?", answer: "The Charging Bull stands at <strong>Bowling Green Park</strong> near Wall Street in Lower Manhattan. It attracts thousands of visitors daily who rub its horns and nose for good luck." },
    ],
  },
  {
    slug: 'kristen-visbal',
    bioFull: `<p><a href="/apps/masterpieces/artist/kristen-visbal"><strong>Kristen Visbal</strong></a> (born 1962) is an American sculptor who created the <strong>Fearless Girl</strong> (2017), a bronze statue of a defiant young girl originally placed facing the Charging Bull on Wall Street. Born in Uruguay and raised in the U.S., she studied at the University of Delaware and the Lyme Academy College of Fine Arts.</p><p>Fearless Girl was commissioned by State Street Global Advisors to promote gender diversity on corporate boards. The statue was moved to its permanent location facing the New York Stock Exchange in 2018. It became a viral symbol of female empowerment and one of New York's most photographed public artworks.</p>`,
    faqs: [
      { question: "What is Fearless Girl?", answer: "<strong>Fearless Girl</strong> (2017) is a bronze statue of a young girl standing with hands on hips. Originally facing the Charging Bull on Wall Street, it was moved to face the <strong>New York Stock Exchange</strong> and became a symbol of female empowerment." },
      { question: "Who commissioned Fearless Girl?", answer: "<strong>State Street Global Advisors</strong> commissioned the sculpture for International Women's Day 2017 to promote gender diversity on corporate boards. It was designed by <strong>Kristen Visbal</strong> and quickly became a viral sensation." },
    ],
  },
  {
    slug: 'lee-lawrie',
    bioFull: `<p><a href="/apps/masterpieces/artist/lee-lawrie"><strong>Lee Lawrie</strong></a> (1877-1963) was a German-born American sculptor who became the most prolific architectural sculptor in the United States. He trained under Augustus Saint-Gaudens and created over 300 sculptural programs for buildings across America. His work defines the look of American Art Deco public architecture.</p><p>Lawrie's most famous work is the bronze <strong><em>Atlas</em></strong> (1937) at Rockefeller Center in New York, a 45-foot figure holding the celestial sphere on his shoulders. He also created the <em>Wisdom</em> relief above the main entrance of 30 Rock and sculptural programs for the U.S. Capitol, the National Academy of Sciences, and the Los Angeles Public Library.</p>`,
    faqs: [
      { question: "What is Lee Lawrie known for?", answer: "Lawrie created the <strong><em>Atlas</em> bronze at Rockefeller Center</strong> (1937) and over 300 architectural sculptural programs across America. He was the most prolific architectural sculptor in U.S. history." },
      { question: "Where can I see Lawrie's work?", answer: "Atlas and the <em>Wisdom</em> relief are at <strong>Rockefeller Center, New York</strong>. His work also adorns the Nebraska State Capitol, the National Academy of Sciences, and the Los Angeles Central Library." },
    ],
  },
  {
    slug: 'john-quincy-adams-ward',
    bioFull: `<p><a href="/apps/masterpieces/artist/john-quincy-adams-ward"><strong>John Quincy Adams Ward</strong></a> (1830-1910) was considered the dean of American sculpture during the Gilded Age. Born in Urbana, Ohio, he trained under Henry Kirke Brown and became the most prominent American sculptor to work entirely in the United States, never studying in Europe.</p><p>Ward's bronze <strong><em>George Washington</em></strong> (1883) on the steps of Federal Hall in lower Manhattan, standing on the spot where Washington took the oath of office, is one of the most recognizable statues in New York. He also created the <em>Indian Hunter</em> in Central Park, the <em>Pilgrim</em> statue, and numerous portrait statues across American cities.</p>`,
    faqs: [
      { question: "What is J.Q.A. Ward known for?", answer: "Ward's <strong><em>George Washington</em> at Federal Hall</strong> in New York and the <em>Indian Hunter</em> in Central Park are his most famous works. He was the leading American sculptor of the Gilded Age." },
      { question: "Where can I see Ward's sculptures?", answer: "The Washington statue stands at <strong>Federal Hall, Wall Street</strong>. The <em>Indian Hunter</em> is in Central Park. Works also appear in Boston, Hartford, and at the <strong>Metropolitan Museum of Art</strong>." },
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
