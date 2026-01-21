const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artists = [
  {
    slug: 'anders-zorn',
    bioFull: `<p><strong>Anders Zorn</strong> (1860-1920) grew up in rural Sweden, born in a cowshed to an unwed mother he rarely saw. Despite humble beginnings, his talent got him into the Royal Swedish Academy at just fifteen. By twenty-seven, he'd switched from watercolors to oils and developed the vigorous brushwork that made him famous. His subjects ranged from Swedish peasant girls bathing to three American presidents: Grover Cleveland, William Taft, and Theodore Roosevelt. Zorn worked with a surprisingly limited palette of just four colors: lead white, yellow ochre, vermilion, and ivory black.</p>

<p>Living in London and Paris during the 1880s and 1890s brought him into contact with James McNeill Whistler, John Singer Sargent, and the French <a href="/movement/impressionism"><strong>Impressionists</strong></a>. His career took off after the 1889 Paris World's Fair, where he earned a first-class medal and the French Legion of Honor. Zorn made seven trips to America between 1893 and 1911, painting portraits of wealthy collectors and prominent figures. He's remembered for capturing light on water and skin with loose, confident strokes that feel both spontaneous and precise. When he died in 1920, he left his estate to the Swedish state. Today his work hangs in the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Anders Zorn associated with?", answer: "Zorn worked in an <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> style, using broken color and loose brushstrokes to capture light effects. His approach blended impressionistic energy with precise tonal control." },
      { question: "Where can I see Anders Zorn's paintings?", answer: "Major collections include the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, and the Zorn Museum in Mora, Sweden." },
      { question: "What subjects did Anders Zorn paint?", answer: "Zorn painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of wealthy patrons and presidents, plus nude studies of Swedish peasant women bathing in lakes and streams." },
      { question: "What colors did Anders Zorn use?", answer: "Zorn famously worked with just four colors: lead white, <a href=\"https://luxurywallart.com/collections/yellow-paintings\" target=\"_blank\" rel=\"noopener\"><strong>yellow</strong></a> ochre, vermilion, and ivory black. This limited palette shows remarkable range." },
      { question: "Which American presidents did Zorn paint?", answer: "Zorn painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of three U.S. presidents: Grover Cleveland, William Howard Taft, and Theodore Roosevelt." }
    ]
  },
  {
    slug: 'elisabeth-vigee-le-brun',
    bioFull: `<p><strong>Élisabeth Vigée Le Brun</strong> (1755-1842) became one of the most successful women painters in history, despite being barred from formal art training. Her father, a pastel artist, encouraged her talent before dying when she was twelve. By fifteen, she had a modest portrait clientele. In 1778, she was summoned to paint Marie Antoinette, and the two became friends. Over the next six years, Vigée Le Brun produced around thirty <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of the young queen. Thanks largely to royal influence, she gained admission to the French Royal Academy of Painting in 1783.</p>

<p>Her style blended <a href="/movement/rococo"><strong>Rococo</strong></a> subject matter and color with emerging <a href="/movement/neoclassicism"><strong>Neoclassical</strong></a> elements. When revolution erupted in 1789, Vigée Le Brun fled France disguised in tattered clothes, her young daughter in tow. She spent twelve years abroad, painting aristocrats and royalty in Rome, Naples, Vienna, Berlin, and St. Petersburg. Her reputation preceded her everywhere. She finally returned to France in 1802. By her own count, she painted around 900 pictures during her career, including 600 portraits. Today her work hangs in the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the Palace of Versailles.</p>`,
    faqs: [
      { question: "What style did Élisabeth Vigée Le Brun paint in?", answer: "Her work combined <a href=\"/movement/rococo\"><strong>Rococo</strong></a> color and subjects with <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> refinement. She's known for fresh, charming portraits that flattered without losing likeness." },
      { question: "Where can I see Vigée Le Brun's paintings?", answer: "Her portraits hang in the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, and throughout the Palace of Versailles." },
      { question: "How many portraits of Marie Antoinette did she paint?", answer: "Vigée Le Brun painted about thirty <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of Marie Antoinette over six years. The two women became close friends." },
      { question: "Why did Vigée Le Brun flee France?", answer: "As Marie Antoinette's portraitist and friend, she faced danger during the French Revolution. She escaped in 1789 and painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> across Europe for twelve years." },
      { question: "How many paintings did Vigée Le Brun create?", answer: "By her own count, she painted around 900 works, including about 600 <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and 200 landscapes." }
    ]
  },
  {
    slug: 'ernst-ludwig-kirchner',
    bioFull: `<p><a href="/movement/expressionism"><strong>Expressionist</strong></a> painter <strong>Ernst Ludwig Kirchner</strong> (1880-1938) trained as an architect but found his calling in art. In 1905, he co-founded Die Brücke (The Bridge) in Dresden with fellow architecture students, launching German Expressionism. The group rejected academic painting and drew inspiration from Albrecht Dürer, African art, and Edvard Munch. Kirchner wrote their manifesto, carved on wood, declaring their generation's desire for freedom. His mature style crackles with psychological tension and eroticism, rendered in jarring colors and angular forms.</p>

<p>Moving to Berlin in 1911 proved pivotal. There he painted his most significant works, including street scenes capturing the city's nervous energy. Success brought selection for the 1913 Armory Show in New York. But military service in World War I shattered him. After just months, he suffered a breakdown and was discharged, eventually settling in Davos, Switzerland. His later work grew calmer, depicting Alpine <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> and peasant life. The Nazis branded his art "degenerate" in 1933 and removed over 600 works from German museums in 1937. Devastated by these attacks and Hitler's annexation of Austria, Kirchner took his own life in 1938.</p>`,
    faqs: [
      { question: "What art movement did Ernst Ludwig Kirchner help found?", answer: "Kirchner co-founded Die Brücke in 1905, a key group in German <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>. They rejected academic traditions and pioneered bold colors and emotional intensity." },
      { question: "Where can I see Kirchner's paintings?", answer: "The Brücke Museum in Berlin holds a major collection. Works also appear at the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a> and Museo Thyssen-Bornemisza." },
      { question: "What subjects did Kirchner paint?", answer: "Kirchner painted Berlin street scenes, <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>, nudes, and later Alpine <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>." },
      { question: "Why was Kirchner's art called degenerate?", answer: "The Nazis condemned <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> art as morally corrupt. They removed over 600 Kirchner works from German museums in 1937." },
      { question: "What happened to Kirchner during World War I?", answer: "Kirchner volunteered but quickly suffered a severe breakdown. He spent years recovering in Switzerland, where his style evolved toward calmer <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>." }
    ]
  },
  {
    slug: 'filippo-lippi',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Filippo Lippi</strong> (c. 1406-1469) lived a life as colorful as his frescoes. Orphaned at two, he was placed in a Carmelite convent at eight because his aunt couldn't afford to raise him. He became a monk but showed more interest in painting than prayer. Studying Masaccio's revolutionary frescoes in the Brancacci Chapel shaped his early style. In 1432, he quit the monastery without being released from his vows. The powerful Medici family became his protectors after he returned to Florence in 1437.</p>

<p>Cosimo de' Medici once had to lock him in a room to make him finish a commission, but Lippi escaped using bedsheets. His most scandalous act came in 1458 when, while painting at a convent in Prato, he fell for a young nun named Lucrezia Buti. He convinced her to model for the Madonna, then abducted her. Their son Filippino became a famous painter himself, taught by Sandro Botticelli, who had been Lippi's own student. Lippi's finest surviving work is his fresco cycle in Prato Cathedral. He died in 1469 while working at Spoleto Cathedral. The <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> hold major works.</p>`,
    faqs: [
      { question: "What art period did Filippo Lippi belong to?", answer: "Lippi was an early <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> master active in 15th-century Florence. He bridged medieval traditions and emerging naturalism." },
      { question: "Where can I see Filippo Lippi's paintings?", answer: "The <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London hold major works. His finest frescoes remain in Prato Cathedral." },
      { question: "Who were Filippo Lippi's famous students?", answer: "Sandro Botticelli studied under Lippi and absorbed his graceful, lyrical approach. Lippi's son Filippino also became a renowned <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painter." },
      { question: "What is the story of Lippi and Lucrezia Buti?", answer: "While painting at a convent in 1458, Lippi fell for the nun Lucrezia Buti. He had her model as the Madonna, then abducted her. Their son became a famous painter." },
      { question: "Who patronized Filippo Lippi?", answer: "The Medici family protected and commissioned Lippi throughout his career. Cosimo de' Medici even intervened to release him from prison after charges of fraud." }
    ]
  },
  {
    slug: 'francisco-goya',
    bioFull: `<p><strong>Francisco Goya</strong> (1746-1828) is often called the last of the Old Masters and the first of the moderns. Born in rural Aragon to a middle-class family, he studied painting from age fourteen and eventually moved to Madrid. In 1786 he became a court painter to the Spanish Crown, producing <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of aristocrats and designing tapestry cartoons for the royal palace. A severe illness in 1793 left him deaf and transformed his outlook. His work grew darker, more pessimistic, and psychologically intense.</p>

<p>By 1799, Goya held the highest rank available to a Spanish court painter. He acknowledged only three masters: Velázquez, Rembrandt, and nature. His <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> reveal character rather than flattery. The Napoleonic invasion of Spain inspired his powerful paintings The Second of May 1808 and The Third of May 1808. In his final years, Goya painted the famous Black Paintings directly onto his home's walls, never intending them for public display. These haunting works anticipated <a href="/movement/expressionism"><strong>Expressionism</strong></a> by nearly a century. The <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid now houses the world's largest collection of his work.</p>`,
    faqs: [
      { question: "What art movement was Francisco Goya part of?", answer: "Goya is considered a precursor to <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a> and modern art. His dark later works anticipated <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a> by nearly a century." },
      { question: "Where can I see Goya's paintings?", answer: "The <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid holds the world's largest Goya collection, including the Black Paintings transferred to canvas." },
      { question: "What are Goya's Black Paintings?", answer: "The Black Paintings are fourteen haunting works Goya painted on his home's walls between 1819-1823. They now hang at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a>." },
      { question: "Why did Goya's style change?", answer: "A severe illness in 1793 left Goya completely deaf and transformed his art. His work became darker, more psychologically intense, and critical of society." },
      { question: "What subjects did Goya paint?", answer: "Goya painted royal <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>, war scenes, and disturbing visions of human nature. His range spans elegant aristocrats to nightmarish creatures." }
    ]
  },
  {
    slug: 'frederic-edwin-church',
    bioFull: `<p><strong>Frederic Edwin Church</strong> (1826-1900) was a central figure in the <a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a> of American landscape painters. Born into a wealthy Connecticut family, he studied under Thomas Cole, founder of the movement, in the Catskill Mountains from 1844 to 1846. Church became the youngest artist elected to the National Academy of Design at just twenty-three. Inspired by Alexander von Humboldt's scientific travelogues, he made his first trip to South America in 1853, producing sketches that would fuel major paintings for years.</p>

<p>His enormous canvases emphasized realistic detail, dramatic light, and panoramic views. The Heart of the Andes (1859), measuring ten feet wide, drew 12,000 viewers in its first three weeks in New York. Among his other masterworks are Niagara (1857) and Cotopaxi (1862). Church married Isabel Carnes in 1860 and began building Olana, his Persian-inspired home overlooking the Hudson River. He helped found the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> and campaigned to create a public park at Niagara Falls. Rheumatism in his hands forced him to stop painting after 1877. His fame faded by his death in 1900, but interest revived in the late 20th century. Olana remains a New York State historic site.</p>`,
    faqs: [
      { question: "What art movement was Frederic Edwin Church part of?", answer: "Church was a leading figure in the <a href=\"/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, the first major American art movement. He studied directly under founder Thomas Cole." },
      { question: "Where can I see Church's paintings?", answer: "The <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York holds major works. His home Olana, now a state historic site, displays paintings and personal effects." },
      { question: "What subjects did Church paint?", answer: "Church painted dramatic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, especially South American volcanoes, Niagara Falls, and Arctic icebergs. His work emphasizes light and natural grandeur." },
      { question: "What is Church's most famous painting?", answer: "The Heart of the Andes (1859) drew 12,000 viewers in three weeks. Other masterworks include Niagara and Cotopaxi, featuring dramatic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>." },
      { question: "What is Olana?", answer: "Olana is Church's Persian-inspired home overlooking the Hudson River. He designed it after travels to the Middle East. It's now a New York State historic site with original artworks." }
    ]
  },
  {
    slug: 'george-bellows',
    bioFull: `<p><strong>George Bellows</strong> (1882-1925) became the most acclaimed American artist of his generation, known for bold depictions of urban life in New York City. Born in Columbus, Ohio, he played baseball and basketball at Ohio State before leaving just before graduation to pursue painting. In New York, he studied under Robert Henri, leader of the Ashcan School, a group that advocated painting contemporary American life in all its forms, including its unsavory aspects.</p>

<p>Bellows was the boldest among them in his choice of subjects. His series portraying amateur boxing matches became his signature contribution to art history. Works like Stag at Sharkey's (1909) and Both Members of This Club (1909) capture raw male aggression in slashing brushwork. These illegal fights were held at private clubs that sold memberships to evade a 1900 ordinance against public prizefighting. Beyond boxing, Bellows painted over 250 sea scenes and helped organize the landmark 1913 Armory Show. In 1916, he installed a lithography press in his studio, expanding that medium's use as fine art in America. He died of peritonitis from a ruptured appendix at just forty-two. The <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> and Whitney Museum hold major collections.</p>`,
    faqs: [
      { question: "What art movement was George Bellows associated with?", answer: "Bellows was associated with the Ashcan School, known for dark-toned depictions of city life. He studied under Robert Henri and painted contemporary <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people</strong></a> and scenes." },
      { question: "Where can I see Bellows' paintings?", answer: "The <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> and Whitney Museum hold major collections. His work also appears at the National Gallery and Art Institute of Chicago." },
      { question: "What subjects did Bellows paint?", answer: "Bellows painted boxing matches, urban street scenes, <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> scenes, and portraits. He produced over 250 paintings of the sea during his career." },
      { question: "What are Bellows' most famous paintings?", answer: "His boxing paintings Stag at Sharkey's (1909) and Dempsey and Firpo (1924) are among his most celebrated. They capture <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>athletic</strong></a> violence with visceral energy." },
      { question: "How did Bellows die?", answer: "Bellows died in January 1925 from peritonitis triggered by a ruptured appendix. He was only forty-two but considered one of America's most popular painters." }
    ]
  },
  {
    slug: 'guercino',
    bioFull: `<p><strong>Guercino</strong> (1591-1666), born Giovanni Francesco Barbieri, was an Italian <a href="/movement/baroque"><strong>Baroque</strong></a> painter and draftsman from Cento in the Emilia region. His nickname means "squint-eyed," referring to an eye condition. Largely self-taught, he absorbed influences from the Carracci family's bold figure painting and Caravaggio's dramatic chiaroscuro. A trip to Venice in 1618 introduced him to Venetian painting's velvety, glowing colors.</p>

<p>Pope Gregory XV invited Guercino to Rome in 1621, where he stayed nearly three years and played a key role in developing Roman High Baroque art. His masterpiece from this period is The Burial of Saint Petronilla for the Vatican. He also painted the Aurora fresco at the Villa Ludovisi. Clients included Cosimo II of Tuscany, the Gonzaga dukes of Mantua, and Marie de' Medici. He turned down offers to be court artist in both London and Paris. After Pope Gregory's death, Guercino returned home and opened a bustling studio. When rival Guido Reni died in 1642, Guercino moved his workshop to Bologna and took over as the city's leading religious painter. His prolific drawings, usually in ink or red chalk, are prized for their fluent style. Works hang in the <a href="/museum/louvre"><strong>Louvre</strong></a> and <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Guercino part of?", answer: "Guercino was a major Italian <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter. He played an important role in developing Roman High Baroque art during his time in the papal city." },
      { question: "Where can I see Guercino's paintings?", answer: "Major works hang at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and the Vatican Museums. His Aurora fresco is at Villa Ludovisi in Rome." },
      { question: "What does the name Guercino mean?", answer: "Guercino means \"squint-eyed\" in Italian, referring to an eye condition. His real name was Giovanni Francesco Barbieri, born in Cento, Italy." },
      { question: "What subjects did Guercino paint?", answer: "Guercino painted <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious</strong></a> subjects, mythological scenes, and portraits. His work features dramatic lighting and rich, glowing colors from Venetian influence." },
      { question: "Who were Guercino's major patrons?", answer: "Pope Gregory XV, Cosimo II of Tuscany, and the Gonzaga dukes of Mantua commissioned works. He also received offers from England and France he declined." }
    ]
  },
  {
    slug: 'guido-reni',
    bioFull: `<p><strong>Guido Reni</strong> (1575-1642) was an Italian <a href="/movement/baroque"><strong>Baroque</strong></a> painter who became the dominant figure in the Bolognese School. Born in Bologna to a family of musicians, he was apprenticed at age nine to the studio of Denis Calvaert. By his early twenties, he joined the Carracci Academy, learning the drawing skills that would define his career. He moved to Rome around 1601 to work under Annibale Carracci on the Farnese Palace decorations.</p>

<p>Reni's masterpiece is the Aurora ceiling fresco at the Casino dell'Aurora, commissioned by Cardinal Scipione Borghese. It shows Apollo's chariot preceded by Dawn bringing light to the world. Between 1607 and 1614, he became one of the painters most favored by the Borghese family during Pope Paul V's papacy. After returning to Bologna in 1614, his workshop produced paintings for international patrons. His graceful, classical style and gentle emotion earned him the title "The Divine Guido" after his death. A compulsive gambler, Reni was often in financial trouble despite steady demand for his work. His influence spread to Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> artists like Jusepe de Ribera and Murillo. The <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/prado"><strong>Prado</strong></a>, and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> hold major works.</p>`,
    faqs: [
      { question: "What art movement was Guido Reni part of?", answer: "Reni was a leading Italian <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter, though his classical manner also showed Renaissance influence. He dominated the Bolognese School of painting." },
      { question: "Where can I see Guido Reni's paintings?", answer: "Major collections include the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a>, and <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a>. His Aurora fresco remains at Casino dell'Aurora in Rome." },
      { question: "What is Guido Reni's most famous work?", answer: "His Aurora ceiling fresco at Casino dell'Aurora in Rome is considered his masterpiece. It depicts Apollo's chariot preceded by Dawn, demonstrating his graceful classical style." },
      { question: "What subjects did Guido Reni paint?", answer: "Reni painted primarily <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious</strong></a> works and mythological subjects. He was known for gentle emotion and graceful, idealized figures." },
      { question: "Who influenced Guido Reni?", answer: "Reni trained at the Carracci Academy and worked under Annibale Carracci in Rome. He developed a classical style that later influenced Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painters." }
    ]
  },
  {
    slug: 'jules-breton',
    bioFull: `<p><strong>Jules Breton</strong> (1827-1906) was a 19th-century French naturalist painter known as "the painter of peasants." Born in Courrières, a rural village in Pas-de-Calais, he grew up surrounded by farmland and working people. His father supervised vineyards for a wealthy landowner. When his mother died at four, he was raised by his father. This intimate relationship with the land shaped his tender portrayals of rural customs throughout his career.</p>

<p>Breton studied in Ghent and Antwerp before moving to Paris in 1847, where he trained at the École des Beaux-Arts. His 1853 painting Return of the Reapers marked his turn toward peasant imagery, influenced by Swiss painter Louis Léopold Robert. His style sits between the idealized academicism of Bouguereau and the social realism of Daumier. His 1889 painting Joan of Arc, showing France's war heroine as a contemporary peasant girl, proved hugely popular and remains his best-known work. He was elected to the prestigious Académie des Beaux-Arts in 1886. His work sold well in France, England, and America during his lifetime. Haymaking (Les Foins, 1878), now at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, secured his position in the Naturalist school. His influence reached painters from Glasgow to Australia.</p>`,
    faqs: [
      { question: "What art movement was Jules Breton part of?", answer: "Breton was a leading French Naturalist painter, also associated with <a href=\"/movement/academic-art\"><strong>Academic Art</strong></a>. His style balanced idealized beauty with authentic rural subjects." },
      { question: "Where can I see Jules Breton's paintings?", answer: "Major works hang at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, and American museums." },
      { question: "What subjects did Jules Breton paint?", answer: "Breton painted peasant life, harvest scenes, and rural festivals. His <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figures</strong></a> showed dignity and grace in everyday labor." },
      { question: "What is Breton's most famous painting?", answer: "His 1889 Joan of Arc, depicting the heroine as a peasant girl in a naturalistic setting, is his most recognized work. It combines historical subject with his rural expertise." },
      { question: "Who did Jules Breton influence?", answer: "Breton influenced international artists including The Glasgow Boys in Scotland and plein air painters in Australia. His naturalistic approach spread widely through exhibitions." }
    ]
  }
];

async function main() {
  for (const artist of artists) {
    try {
      console.log(`Updating ${artist.slug}...`);
      await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          bioFull: artist.bioFull,
          faqs: artist.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`  ✓ ${artist.slug} updated`);
    } catch (err) {
      console.log(`  ✗ ${artist.slug} failed: ${err.message}`);
    }
  }
  console.log('\\nBatch complete');
}

main().catch(console.error).finally(() => prisma.$disconnect());
