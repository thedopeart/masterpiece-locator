import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Batch 7: 10 artists
const artistUpdates: Record<string, { bioFull: string; faqs: { question: string; answer: string }[] }> = {
  "juan-de-valdes-leal": {
    bioFull: `<p><strong>Juan de Valdés Leal</strong> (1622–1690) painted death with an intensity no Spanish artist matched. Born in Seville to a Portuguese father, he trained in Córdoba under Antonio del Castillo before returning to his birthplace in 1656. Four years later, he helped Bartolomé Esteban Murillo found the Seville Academy and later served as its president from 1663 to 1666. The two painters couldn't have been more different: where Murillo offered tenderness and serenity, Valdés Leal delivered drama, violence, and morbid spectacle.</p>

<p>His style belonged to the Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> at its most theatrical. Early paintings like <em>Saint Andrew</em> (1645) already showed his preference for exotic colors, dramatic lighting, and vigorous brushstrokes. But Valdés Leal found his true subject in vanitas, the meditation on death and the futility of earthly glory. His masterpieces came from the Hospital de la Caridad in Seville, commissioned by the brotherhood leader Miguel de Mañara. <em>In Ictu Oculi</em> ("In the Blink of an Eye") shows a skeleton stamping out a candle while trampling symbols of power and knowledge. <em>Finis Gloriae Mundi</em> depicts decomposing corpses of a bishop and knight, their <a href="https://luxurywallart.com/collections/skeleton-skull-art" target="_blank" rel="noopener"><strong>rotting flesh</strong></a> rendered in unflinching detail. Murillo reportedly said that "one had to hold one's nose" while viewing them.</p>

<p>Valdés Leal married Isabella Carasquilla in 1647, herself a painter. Several of their children became artists: his daughters specialized in portrait miniatures. Ill health plagued his final years. He died in Seville in 1690. The Hospital de la Caridad still displays his vanitas paintings. Other works hang at the <a href="/museum/prado"><strong>Museo del Prado</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, and the National Gallery of Art in Washington.</p>`,
    faqs: [
      { question: "What art movement was Juan de Valdés Leal part of?", answer: `Valdés Leal was a Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> painter known for dramatic, violent religious scenes. His theatrical style contrasted sharply with his contemporary Murillo's gentle approach.` },
      { question: "Where can I see Juan de Valdés Leal's paintings?", answer: `His famous vanitas paintings remain at the <strong>Hospital de la Caridad</strong> in Seville. Other works are at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.` },
      { question: "What are Valdés Leal's most famous paintings?", answer: `<em>In Ictu Oculi</em> and <em>Finis Gloriae Mundi</em> (both 1672), created for the Hospital de la Caridad, are his most celebrated works. They depict <strong>death and decay</strong> with shocking realism.` },
      { question: "What is a vanitas painting?", answer: `Vanitas paintings meditate on <strong>death and the emptiness of earthly achievements</strong>. Valdés Leal mastered this genre with images of skeletons, rotting corpses, and symbols of extinguished power.` },
      { question: "What was Valdés Leal's connection to Murillo?", answer: `They co-founded the <strong>Seville Academy</strong> in 1660 despite their opposing styles. Murillo reportedly had to "hold his nose" when viewing Valdés Leal's gruesome vanitas paintings.` },
      { question: "Was painting a family tradition for Valdés Leal?", answer: `Yes, his wife <strong>Isabella Carasquilla</strong> was a painter, and several children became artists. His daughters specialized in portrait miniatures.` }
    ]
  },

  "luca-signorelli": {
    bioFull: `<p><strong>Luca Signorelli</strong> (c. 1450–1523) painted the human body with a power that directly inspired Michelangelo. Born Luca d'Egidio di Ventura in Cortona, Tuscany, he trained under Piero della Francesca and absorbed that master's geometric clarity. But Signorelli rejected Piero's calm, still figures. He wanted bodies in violent motion, muscles straining, limbs twisting. Some historians believe he studied under Antonio Pollaiuolo, whose obsession with anatomy showed in every sinew and tendon.</p>

<p>Signorelli worked across central Italy: Loreto, Perugia, Urbino, Rome. Around 1483 he painted the <em>Testament of Moses</em> fresco in the Sistine Chapel, joining other masters decorating the walls that Michelangelo would later crown. But his masterpiece came at Orvieto Cathedral. Between 1499 and 1503, he covered the Cappella di San Brizio with frescoes of the Last Judgment, the <strong>Apocalypse, and the Resurrection of the Flesh</strong>. The contract, still preserved, promised him 600 ducats plus lodging, wine, and corn. Theological advisors guided his iconography, the first documented instance of such collaboration. His demons torture the damned with horrifying creativity. His nude figures, male and female, display anatomy studied from dissected corpses.</p>

<p>Tragedy struck during the Orvieto commission: Signorelli's son Antonio died of plague. According to Vasari, he painted the dead Christ using his son's body as the model. Signorelli remained active in Cortona politics, serving on the town council, until his death in 1523 at nearly eighty. <a href="/movement/renaissance"><strong>Renaissance</strong></a> painters studied his Orvieto frescoes for generations. Works survive at the <a href="/museum/uffizi"><strong>Uffizi</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>, and the <a href="/museum/louvre"><strong>Louvre</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Luca Signorelli part of?", answer: `Signorelli was an Italian <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter, trained by Piero della Francesca. His muscular, dynamic figures influenced Michelangelo's later Sistine Chapel ceiling.` },
      { question: "Where can I see Luca Signorelli's paintings?", answer: `His masterpiece, the Last Judgment frescoes, fills the Cappella di San Brizio at <strong>Orvieto Cathedral</strong>. Panel paintings are at the <a href="/museum/uffizi"><strong>Uffizi</strong></a> and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.` },
      { question: "What is Signorelli's most famous work?", answer: `The <strong>Last Judgment frescoes</strong> (1499–1503) at Orvieto Cathedral are his masterpiece. They show the Apocalypse, Resurrection, and damnation with unprecedented anatomical detail.` },
      { question: "How did Signorelli influence Michelangelo?", answer: `Michelangelo studied Signorelli's <strong>Orvieto frescoes</strong> and borrowed several figures for his own Sistine Chapel ceiling. Both artists shared an obsession with the nude body in motion.` },
      { question: "Did Signorelli work in the Sistine Chapel?", answer: `Yes, around 1483 he painted the <strong><em>Testament of Moses</em></strong> fresco on the Sistine Chapel walls, joining other Renaissance masters before Michelangelo's famous ceiling.` },
      { question: "What tragedy occurred during Signorelli's career?", answer: `His son <strong>Antonio died of plague</strong> while Signorelli worked at Orvieto. According to Vasari, the artist used his dead son as the model for the dead Christ.` }
    ]
  },

  "maurice-denis": {
    bioFull: `<p><strong>Maurice Denis</strong> (1870–1943) wrote the manifesto that helped launch modern art. Born in Granville, Normandy, to a railroad worker's family, he grew up in Saint-Germain-en-Laye outside Paris. By thirteen, he was sketching Old Masters at the Louvre. In 1888, at the Académie Julian, a fellow student named Paul Sérusier returned from Brittany with a small landscape painted under Gauguin's guidance. Denis and his friends were so amazed by this "Talisman" that they formed a group: <a href="/movement/les-nabis"><strong>Les Nabis</strong></a>, Hebrew for "prophets."</p>

<p>The group included Pierre Bonnard and Édouard Vuillard, but Denis became their theorist. In 1890, still only twenty, he wrote the definition that artists would quote for a century: "Remember that a picture, before being a war horse, a nude woman, or some anecdote, is essentially a flat surface covered with colors in a certain order." This insistence on the picture plane's flatness became a foundation for Cubism, Fauvism, and <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>abstract art</strong></a>. Denis himself never went abstract. His style drew on Gauguin's bold shapes, Japanese flatness, and medieval stained glass, creating decorative works with <a href="/movement/symbolism"><strong>Symbolist</strong></a> and religious themes.</p>

<p>He traveled to Italy in 1895 and fell under the spell of Fra Angelico and early Renaissance fresco painters. His later career turned increasingly to sacred art. After World War I, he founded the Ateliers d'Art Sacré (Workshops of Sacred Art) and decorated numerous churches. He was a founder of the Salon d'Automne. Denis died in Paris in 1943, struck by a truck. His former home in Saint-Germain-en-Laye is now a museum dedicated to the Nabis. Major works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Maurice Denis part of?", answer: `Denis was a founder and chief theorist of <a href="/movement/les-nabis"><strong>Les Nabis</strong></a>, a group of Post-Impressionists influenced by Gauguin. He also worked in <a href="/movement/symbolism"><strong>Symbolist</strong></a> and religious styles.` },
      { question: "Where can I see Maurice Denis' paintings?", answer: `The <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> holds major works. His former home in Saint-Germain-en-Laye is now the <strong>Musée Maurice Denis</strong>, dedicated to the Nabis.` },
      { question: "What was Maurice Denis' famous art theory?", answer: `In 1890, he wrote: "A picture is essentially a <strong>flat surface covered with colors in a certain order</strong>." This emphasis on flatness influenced Cubism, Fauvism, and abstract art.` },
      { question: "What inspired Maurice Denis' art?", answer: `Gauguin's bold forms, <strong>Japanese prints</strong>, medieval stained glass, and early Italian fresco painters like Fra Angelico all shaped his decorative, spiritual style.` },
      { question: "What religious art did Maurice Denis create?", answer: `After World War I, he founded the <strong>Ateliers d'Art Sacré</strong> and decorated many churches, becoming a leading figure in the revival of Catholic sacred art.` },
      { question: "Who were the other Nabis painters?", answer: `The group included <strong>Pierre Bonnard, Édouard Vuillard</strong>, Paul Sérusier, and others. They shared a commitment to decorative, spiritually charged painting.` }
    ]
  },

  "max-liebermann": {
    bioFull: `<p><strong>Max Liebermann</strong> (1847–1935) brought French <a href="/movement/impressionism"><strong>Impressionism</strong></a> to Germany and became its leading proponent. Born in Berlin to a wealthy Jewish textile manufacturer, he disappointed his family by choosing art over business. He studied at the Weimar Art School before settling in Paris in 1873, where he discovered the Barbizon painters and the radical new Impressionists. The works of Manet and Degas captivated him. He adopted their loose brushwork, bright palettes, and interest in capturing modern life.</p>

<p>Liebermann returned to Berlin in 1884 and never left again. His early subjects were workers and peasants, painted with thick impasto and earthy tones. Over time, his palette lightened and his technique loosened. In 1898, he founded the <strong>Berlin Secession</strong>, a collective of sixty-five artists who backed modern styles like Impressionism and Art Nouveau against the conservative Academy. He served as president for thirteen years, recruiting painters like Lovis Corinth and Max Slevogt. The Secession's annual exhibitions introduced German audiences to French modernism. By 1920, Liebermann had risen to president of the Prussian Academy of Arts itself, becoming the artistic establishment he once challenged.</p>

<p>His late works often depicted his <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>garden</strong></a> at Wannsee, outside Berlin. He completed over two hundred commissioned portraits, including likenesses of Albert Einstein and Paul von Hindenburg. Then the Nazis came. In 1933, Liebermann resigned from the Academy. The Gestapo removed his paintings from museums. He withdrew from public life but continued painting until his death in 1935. The Academy refused to honor him. Almost no one attended his funeral. His work now hangs at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, and <a href="/museum/hermitage"><strong>Hermitage</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Max Liebermann part of?", answer: `Liebermann was the leading German <a href="/movement/impressionism"><strong>Impressionist</strong></a>, bringing French techniques to Berlin. He was deeply influenced by Manet and Degas during his Paris years.` },
      { question: "Where can I see Max Liebermann's paintings?", answer: `Works hang at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and the Liebermann Villa in Berlin-Wannsee.` },
      { question: "What was the Berlin Secession?", answer: `Liebermann founded this group of <strong>sixty-five progressive artists</strong> in 1898 to promote Impressionism and modern art against the conservative German Academy.` },
      { question: "What happened to Liebermann under the Nazis?", answer: `After 1933, the Gestapo <strong>removed his paintings from museums</strong>. Liebermann resigned from the Academy and withdrew from public life. His funeral was nearly unattended.` },
      { question: "What subjects did Max Liebermann paint?", answer: `Early works showed <strong>workers and peasants</strong>. Later paintings depicted bourgeois leisure scenes, portraits, and his beloved garden at Wannsee.` },
      { question: "What positions did Liebermann hold?", answer: `He served as <strong>president of the Berlin Secession</strong> (1898–1911) and later president of the Prussian Academy of Arts (1920–1932), the highest honor in German art.` }
    ]
  },

  "john-singer-sargent": {
    bioFull: `<p><strong>John Singer Sargent</strong> (1856–1925) was the leading portrait painter of his era, and possibly the greatest ever trained in France. Born in Florence to American expatriates, he grew up across Europe, speaking French, Italian, and German before English felt natural. At eighteen, he entered the Paris studio of Carolus-Duran, who taught him to paint directly without preliminary drawing, laying color onto canvas in bold, immediate strokes. Sargent absorbed everything, traveled to Spain to study Velázquez, and emerged with a technique of astonishing fluency.</p>

<p>Then came the scandal. At the 1884 Paris Salon, his <em>Portrait of Madame X</em> showed the American socialite Virginie Gautreau in a provocative black gown, one shoulder strap famously slipping down her arm. Critics savaged it. Gautreau's reputation suffered. Sargent repainted the strap and fled to London, where he rebuilt his career from scratch. Within years, he was the most sought-after <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait painter</strong></a> in the English-speaking world. Auguste Rodin called him "the Van Dyck of our times." His subjects included presidents, millionaires, aristocrats, and celebrated beauties, all rendered with a bravura brushwork that made silk gleam and satin shimmer.</p>

<p>He eventually grew to hate portrait work, calling it "a pimp's profession." In 1907, he declared he would paint "no more mugs." His later years focused on watercolors and mural commissions for the Boston Public Library and Harvard. He produced roughly 900 oil paintings and over 2,000 watercolors. Sargent never married and kept his private life private. He died in London in 1925. <em>Madame X</em>, which he considered "the best thing I have done," hangs at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>. Other masterpieces are at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a> and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "What was John Singer Sargent known for?", answer: `Sargent was considered the <strong>greatest portrait painter of his era</strong>. His brilliant technique captured the glamour of Edwardian high society with dazzling brushwork.` },
      { question: "Where can I see John Singer Sargent's paintings?", answer: `<em>Madame X</em> is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>. Major works are at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, and the Museum of Fine Arts, Boston.` },
      { question: "What was the Madame X scandal?", answer: `His 1884 portrait showed Virginie Gautreau with a <strong>slipping shoulder strap</strong>. Paris critics attacked it, ruining Gautreau's reputation and forcing Sargent to flee to London.` },
      { question: "Who did John Singer Sargent paint?", answer: `He painted <strong>presidents, millionaires, aristocrats</strong>, and celebrated beauties. Rodin called him "the Van Dyck of our times" for his elegant society portraits.` },
      { question: "Why did Sargent stop painting portraits?", answer: `He grew to hate the work, calling it <strong>"a pimp's profession."</strong> In 1907, he declared he would paint "no more mugs" and focused on watercolors and murals.` },
      { question: "Where did John Singer Sargent train?", answer: `He studied in Paris under <strong>Carolus-Duran</strong>, who taught him to paint directly without preliminary drawing. He also traveled to Spain to study Velázquez.` }
    ]
  },

  "cimabue": {
    bioFull: `<p><strong>Cimabue</strong> (c. 1240–1302) was the painter who, in Dante's words, "thought to hold the field" in Italian art before Giotto eclipsed him. Born Cenni di Pepo in Florence, he is remembered by his nickname, meaning "bullhead," which captured his stubborn, demanding temperament. An anonymous commentator on Dante noted that Cimabue was so proud that if anyone found fault with his work, he would destroy it entirely. According to Vasari, when Greek artists arrived in Florence to decorate Santa Maria Novella, the young Cimabue abandoned his studies to watch them work.</p>

<p>Cimabue's innovation was breaking from the stiff, stylized Byzantine manner that dominated Italian painting. His figures have more natural proportions, more emotional expression, and a new sense of volume created through subtle shading. The <em>Maestà of Santa Trinita</em> (c. 1290–1300), now at the <a href="/museum/uffizi"><strong>Uffizi</strong></a>, shows the Virgin and Child enthroned among <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angels</strong></a>, their faces warmer and more human than any Byzantine prototype. Another <em>Maestà</em>, painted for San Francesco at Pisa around 1280, is now at the <a href="/museum/louvre"><strong>Louvre</strong></a>.</p>

<p>Vasari placed Cimabue's biography at the very beginning of his <em>Lives of the Artists</em>, calling him the one who "gave the first light to the art of painting." The most famous legend claims that Cimabue discovered the young Giotto drawing sheep on a rock and took him as a pupil. Many scholars now doubt this story, but it captures an essential truth: Cimabue represented the end of medieval art, Giotto the beginning of the <a href="/movement/renaissance"><strong>Renaissance</strong></a>. Cimabue's last documented work, a mosaic of <em>Saint John</em> in Pisa Cathedral, was completed just before his death in 1302.</p>`,
    faqs: [
      { question: "What art movement was Cimabue part of?", answer: `Cimabue belonged to the <strong>Proto-Renaissance</strong>, the transitional period between Byzantine medieval art and the <a href="/movement/renaissance"><strong>Renaissance</strong></a>. He helped free Italian painting from stiff Byzantine stylization.` },
      { question: "Where can I see Cimabue's paintings?", answer: `The <em>Maestà of Santa Trinita</em> is at the <a href="/museum/uffizi"><strong>Uffizi</strong></a> in Florence. Another <em>Maestà</em> is at the <a href="/museum/louvre"><strong>Louvre</strong></a>. Frescoes survive at the Basilica of San Francesco in Assisi.` },
      { question: "Did Cimabue teach Giotto?", answer: `According to Vasari, Cimabue discovered the young Giotto <strong>drawing sheep on a rock</strong> and took him as a pupil. Many scholars now doubt this legend.` },
      { question: "Why is Cimabue historically important?", answer: `Vasari placed him first in his <em>Lives of the Artists</em>, calling him the one who <strong>"gave the first light to the art of painting"</strong> by breaking from Byzantine formulas.` },
      { question: "What does Cimabue's name mean?", answer: `His nickname means <strong>"bullhead"</strong> in Italian, describing his stubborn, demanding character. His real name was Cenni di Pepo.` },
      { question: "What was Cimabue's painting style?", answer: `He gave figures more <strong>natural proportions and emotional expression</strong> than Byzantine art allowed, using subtle shading to suggest volume and depth.` }
    ]
  },

  "frederic-leighton": {
    bioFull: `<p><strong>Frederic Leighton</strong> (1830–1896) became the most honored British artist of the Victorian age, and he earned it. Born in Scarborough to a prosperous physician, he spent his youth traveling Europe with his cultured family. He trained in Frankfurt, Florence, and Paris, where he met Ingres and Corot. This cosmopolitan education set him apart from most British painters. His 1855 painting <em>Cimabue's Celebrated Madonna</em> so impressed Queen Victoria that she purchased it directly from the Royal Academy exhibition. Leighton was twenty-four.</p>

<p>He settled in London in 1860 and quickly rose through the Academy's ranks. His paintings depicted classical mythology, biblical subjects, and literary scenes in a grand, Academic style that combined High <a href="/movement/renaissance"><strong>Renaissance</strong></a> formality with Victorian sensibility. He embraced Aestheticism, the avant-garde movement emphasizing beauty over content. His Holland Park studio-house, now the <strong>Leighton House Museum</strong>, features an Arab Hall covered with historic Islamic tiles, reflecting his fascination with the Middle East. He also became a pioneering sculptor late in career.</p>

<p>His masterpiece, <em>Flaming June</em> (1895), depicts a sleeping <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> in flowing orange drapery, her pose borrowed from Michelangelo's <em>Night</em>. The painting fell into obscurity after his death, was rediscovered in a Battersea house in the 1960s boxed over a chimney, and sold for just £50. Today it's one of the most reproduced Victorian images. Leighton was knighted in 1878 and created a baronet in 1886. In January 1896, he became the first painter ever raised to the peerage. He died the following day, making his the shortest-lived peerage in British history. Works are at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a> and the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Frederic Leighton part of?", answer: `Leighton worked in the <strong>Victorian Academic</strong> tradition while embracing Aestheticism. He combined High <a href="/movement/renaissance"><strong>Renaissance</strong></a> grandeur with Victorian sensibilities.` },
      { question: "Where can I see Frederic Leighton's paintings?", answer: `<a href="/museum/tate-modern"><strong>Tate Britain</strong></a> holds major works. The <strong>Leighton House Museum</strong> in London preserves his home and many paintings. The <a href="/museum/met"><strong>Metropolitan Museum</strong></a> also has examples.` },
      { question: "What is Flaming June?", answer: `Leighton's 1895 masterpiece shows a <strong>sleeping woman in flowing orange drapery</strong>. Lost for decades, it was found boxed over a chimney and sold for £50 in the 1960s.` },
      { question: "What honors did Frederic Leighton receive?", answer: `He became president of the Royal Academy, was knighted and made a baronet, and in 1896 became the <strong>first painter given a peerage</strong>. He died the next day.` },
      { question: "What subjects did Leighton paint?", answer: `Classical mythology, biblical scenes, and <strong>literary subjects</strong> rendered in a grand, formal style. He often depicted beautiful women in flowing classical drapery.` },
      { question: "What is special about Leighton House?", answer: `His Holland Park home features an <strong>Arab Hall</strong> covered with historic Islamic tiles, reflecting his fascination with Middle Eastern art and design.` }
    ]
  },

  "gentile-da-fabriano": {
    bioFull: `<p><strong>Gentile da Fabriano</strong> (c. 1370–1427) created the most opulent painting of the early Italian Renaissance. Born in Fabriano in the Marche region, he emerged from obscurity to become the foremost painter in central Italy. His early career took him to Venice, where he painted a now-lost fresco in the Doge's Palace depicting a naval battle. There he likely trained Jacopo Bellini, father of the famous Bellini brothers. By 1414, he was working for Pandolfo III Malatesta in Brescia, painting another lost chapel that contemporaries considered a marvel.</p>

<p>Then came Florence. In 1420, the wealthy banker Palla Strozzi commissioned an altarpiece for his family chapel in Santa Trinita. The result, completed in 1423, was the <em>Adoration of the Magi</em>, now the masterpiece of <a href="/movement/international-gothic"><strong>International Gothic</strong></a> painting in Italy. The panel glitters with <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold leaf</strong></a>, depicting the Three Kings in lavish brocades attended by exotic retainers, horses, monkeys, leopards, and camels. Strozzi spent a fortune: the gold alone cost more than most complete altarpieces. Gentile's delicate line, vibrant colors, and love of decorative detail influenced Florentine painters for the rest of the century, including Fra Angelico and Benozzo Gozzoli.</p>

<p>Gentile moved to Rome in 1427 at Pope Martin V's invitation to decorate the Basilica of St. John Lateran. He died that same year, before finishing the commission. Pisanello completed the work. Despite losing most of his frescoes to time, Gentile's influence lived on through his students and the painters who studied the <em>Adoration</em>. The painting has hung at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> since 1919.</p>`,
    faqs: [
      { question: "What art movement was Gentile da Fabriano part of?", answer: `Gentile was the leading Italian painter of the <a href="/movement/international-gothic"><strong>International Gothic</strong></a> style, known for decorative elegance, rich color, and lavish use of gold leaf.` },
      { question: "Where can I see Gentile da Fabriano's work?", answer: `The <em>Adoration of the Magi</em> is at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence. This is his only surviving major work; most frescoes have been lost.` },
      { question: "What is the Adoration of the Magi?", answer: `Gentile's 1423 masterpiece shows the <strong>Three Kings in lavish brocades</strong> with exotic animals and attendants. It's considered the finest International Gothic painting in Italy.` },
      { question: "Who commissioned Gentile's most famous painting?", answer: `<strong>Palla Strozzi</strong>, a wealthy Florentine banker, commissioned the <em>Adoration</em> for his family chapel. The gold leaf alone cost more than most complete altarpieces.` },
      { question: "Which artists did Gentile da Fabriano influence?", answer: `He likely trained <strong>Jacopo Bellini</strong> in Venice and influenced Fra Angelico, Benozzo Gozzoli, and other Florentine painters through the 15th century.` },
      { question: "How did Gentile da Fabriano die?", answer: `He died in <strong>Rome in 1427</strong>, shortly after arriving to paint frescoes for Pope Martin V. Pisanello completed the unfinished commission.` }
    ]
  },

  "hugo-van-der-goes": {
    bioFull: `<p><strong>Hugo van der Goes</strong> (c. 1440–1482) painted with an emotional intensity that set him apart from every other Early Netherlandish master, and the intensity eventually broke him. Nothing certain is known about his life before 1467, when he joined the painters' guild in Ghent. He rose quickly, becoming dean of the guild and receiving important commissions, including decorations for the marriage of Charles the Bold in Bruges. Then, at the height of his success in 1475, he entered the Red Cloister monastery near Brussels as a lay brother.</p>

<p>His masterpiece, the <em>Portinari Altarpiece</em> (c. 1474–76), was commissioned by Tommaso Portinari, the Medici bank's agent in Bruges. The enormous triptych shows the Adoration of the Shepherds with unprecedented psychological realism. The shepherds' faces display raw wonder and awe; the <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>still life of flowers</strong></a> in the foreground carries complex symbolism. When the altarpiece arrived in Florence in 1483, Italian painters were stunned. Its realism and emotional power influenced the development of Florentine <a href="/movement/renaissance"><strong>Renaissance</strong></a> painting for decades.</p>

<p>Van der Goes continued painting in the monastery, but his mental state deteriorated. In 1481, returning from a trip to Cologne, he suffered a severe breakdown. A fellow monk, Gaspar Ofhuys, recorded that Hugo believed himself damned and tried to kill himself. The monks played music to calm him. He recovered enough to paint but died shortly after in 1482, leaving several works unfinished. His paintings hang at the <a href="/museum/uffizi"><strong>Uffizi</strong></a>, which holds the Portinari Altarpiece, and at the Gemäldegalerie in Berlin. Vincent van Gogh later identified with Hugo's troubled genius.</p>`,
    faqs: [
      { question: "What art movement was Hugo van der Goes part of?", answer: `Van der Goes was an <a href="/movement/northern-renaissance"><strong>Early Netherlandish</strong></a> painter, part of the Northern Renaissance tradition established by Jan van Eyck and Rogier van der Weyden.` },
      { question: "Where can I see Hugo van der Goes' paintings?", answer: `The <em>Portinari Altarpiece</em> is at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence. Other works are at the Gemäldegalerie in Berlin and the Royal Museums in Brussels.` },
      { question: "What is the Portinari Altarpiece?", answer: `Hugo's masterpiece (c. 1474–76) shows the <strong>Adoration of the Shepherds</strong> with unprecedented emotional realism. Tommaso Portinari, a Medici banker, commissioned it for Florence.` },
      { question: "Did Hugo van der Goes have mental illness?", answer: `Yes, in 1481 he suffered a <strong>severe breakdown</strong>, believing himself damned. He tried to kill himself. Monks played music to calm him. He died shortly after in 1482.` },
      { question: "Why did Hugo van der Goes enter a monastery?", answer: `In 1475, at the peak of his career, he entered the <strong>Red Cloister</strong> near Brussels as a lay brother. The reasons remain unclear, though mental strain likely played a role.` },
      { question: "How did Hugo van der Goes influence Italian art?", answer: `When the <em>Portinari Altarpiece</em> arrived in Florence in 1483, its <strong>realism stunned Italian painters</strong> and influenced the development of Renaissance painting.` }
    ]
  },

  "isaac-levitan": {
    bioFull: `<p><strong>Isaac Levitan</strong> (1860–1900) created the "mood landscape," paintings of the Russian countryside so emotionally charged that viewers wept before them. Born in Lithuania to a poor Jewish railway worker, he moved to Moscow as a child. Both parents died before he turned seventeen, leaving him nearly destitute. He entered the Moscow School of Painting, Sculpture and Architecture at thirteen, studying under the landscape master Alexei Savrasov and then Vasily Polenov. His classmate Nikolai Chekhov became a close friend; Nikolai's brother Anton would become even closer.</p>

<p>Anton Chekhov and Levitan shared an artistic kinship. Both captured Russian melancholy through understatement and suggestion. Chekhov termed his friend's new style "levitanisty," recognizing something unprecedented: <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> that functioned as psychological portraits. <em>Vladimirka Road</em> (1892) shows the road along which prisoners walked to Siberian exile, empty but haunted. <em>Above Eternal Peace</em> (1894) depicts a vast sky over a church and cemetery, the human presence dwarfed by nature's indifferent grandeur. Pavel Tretyakov, the great collector, bought Levitan's first major work and continued acquiring throughout his career.</p>

<p>Levitan never married, though his romantic entanglements were complicated and sometimes scandalous. His Jewish identity caused persistent difficulties: in 1892, authorities expelled him from Moscow during an anti-Jewish campaign, though friends secured his return. In 1898, already suffering heart disease, he was appointed head of the landscape studio at his old school. He spent his final year at Chekhov's home in Crimea. He died in 1900, age thirty-nine. His work, over a thousand paintings, fills the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> and <a href="/museum/state-russian-museum"><strong>State Russian Museum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Isaac Levitan part of?", answer: `Levitan worked in the Russian <a href="/movement/realism"><strong>Realist</strong></a> tradition, though he transcended it. His "mood landscapes" expressed emotion through nature in ways his contemporaries called "levitanisty."` },
      { question: "Where can I see Isaac Levitan's paintings?", answer: `The <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow holds the largest collection. The <a href="/museum/state-russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg also has major works.` },
      { question: "What was Levitan's connection to Chekhov?", answer: `<strong>Anton Chekhov</strong> was his closest friend. Both captured Russian melancholy through suggestion. Levitan spent his final year at Chekhov's Crimean home.` },
      { question: "What is a mood landscape?", answer: `Levitan pioneered this genre: <strong>landscapes that express emotional states</strong> rather than simply depicting scenery. His paintings function almost as psychological portraits.` },
      { question: "What are Levitan's most famous paintings?", answer: `<em>Vladimirka Road</em> (1892), <em>Above Eternal Peace</em> (1894), and <em>Golden Autumn</em> (1895) are considered masterpieces of <strong>emotional landscape painting</strong>.` },
      { question: "Did Levitan face discrimination?", answer: `Yes, his <strong>Jewish identity</strong> caused persistent difficulties. In 1892, authorities expelled him from Moscow during an anti-Jewish campaign, though friends secured his return.` }
    ]
  }
};

async function main() {
  console.log("Updating artists batch 7 (10 artists)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artistUpdates)) {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    if (artist) {
      await prisma.artist.update({
        where: { slug },
        data: {
          bioFull: data.bioFull,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.name}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artists in batch 7`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
