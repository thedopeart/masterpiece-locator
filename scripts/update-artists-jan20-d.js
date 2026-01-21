/**
 * Update Artists January 20, 2026 - Part 4 (artists 31-40)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 31. Fernand Léger
  {
    slug: 'fernand-leger',
    bioFull: `<p><a href="/movement/cubism"><strong>Cubist</strong></a> painter <strong>Fernand Léger</strong> (1881-1955) developed a distinctive style called "Tubism" for his emphasis on cylindrical forms and machine-age imagery. Born in Argentan, Normandy, to a cattle farmer, he trained as an architect before moving to Paris in 1900. After encountering Cézanne's retrospective in 1907, he gravitated toward Cubism, renting a studio at La Ruche ("The Beehive") artists' colony in Montparnasse where he joined the avant-garde circle.</p>

<p>Léger's personal form of Cubism reduced the human body to tubular, robot-like shapes expressing harmony between humans and machines. His painting Nudes in the Forest exemplifies this "Tubism" approach. Service in World War I, where he was gassed at Verdun, reinforced his interest in mechanical forms and working-class subjects. In 1924, he directed The Mechanical Ballet, a non-narrative film with photography by Man Ray. A committed socialist, he believed art should enrich everyone's lives, working on posters and murals as well as easel paintings. Major works hang at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, <a href="/museum/centre-pompidou"><strong>Centre Pompidou</strong></a>, and <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Fernand Léger part of?", answer: "Léger was a major <a href=\"/movement/cubism\"><strong>Cubist</strong></a> painter who developed 'Tubism,' emphasizing cylindrical forms and machine-age imagery." },
      { question: "Where can I see Léger's paintings?", answer: "Major works hang at the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> in Paris, and <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a>." },
      { question: "What is 'Tubism'?", answer: "Art critic Louis Vauxcelles coined <strong>'Tubism'</strong> for Léger's style of rendering human bodies and architecture as bulky tubes and cylinders." },
      { question: "What film did Léger create?", answer: "He directed <strong>The Mechanical Ballet</strong> (1924), a non-narrative experimental film with photography by Man Ray and music by George Antheil." },
      { question: "What were Léger's political beliefs?", answer: "A committed <strong>socialist</strong>, Léger believed art should enrich everyone's lives. He worked on accessible murals and posters alongside easel paintings." }
    ]
  },

  // 32. Franz von Stuck
  {
    slug: 'franz-von-stuck',
    bioFull: `<p>German <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Franz von Stuck</strong> (1863-1928) was a dominant figure of the Munich art scene and a pioneering teacher whose students included Kandinsky, Paul Klee, and Josef Albers. Born near Passau to a miller, he displayed an early affinity for drawing and relocated to Munich in 1878, attending the Munich Academy from 1881-1885. He co-founded the Munich Secession in 1892, predating the more famous Berlin and Vienna Secessions.</p>

<p>Stuck's work explored mythological and biblical themes with pronounced eroticism and anxiety. His painting <strong>The Sin</strong> (1893), depicting a woman entwined with a serpent, became the paradigmatic image of German Symbolism and the femme fatale. Like Arnold Böcklin, he chose subjects from Sisyphus to Salome. He designed his own residence, the Villa Stuck in Munich, creating everything from layout to furniture; this total work of art is now a museum. In 1906, he was awarded the Order of Merit of the Bavarian Crown and ennobled. His works hang at the <a href="/museum/neue-pinakothek"><strong>Neue Pinakothek</strong></a> in Munich, the <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Franz von Stuck part of?", answer: "Stuck was a leading German <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> and co-founder of the Munich Secession, exploring mythological themes with eroticism." },
      { question: "Where can I see Franz von Stuck's paintings?", answer: "Works hang at the <a href=\"/museum/neue-pinakothek\"><strong>Neue Pinakothek</strong></a> in Munich, the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>, and the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>." },
      { question: "What is Villa Stuck?", answer: "The <strong>Villa Stuck</strong> in Munich is Stuck's self-designed residence, now a museum showcasing his total work of art vision." },
      { question: "Who were Stuck's famous students?", answer: "His students at the Munich Academy included <strong>Wassily Kandinsky, Paul Klee,</strong> and Josef Albers, future pioneers of modern art." },
      { question: "What is Stuck's most famous painting?", answer: "<strong>The Sin</strong> (1893), depicting a woman with a serpent, became the paradigmatic image of German Symbolism and the femme fatale theme." }
    ]
  },

  // 33. Hugo van der Goes
  {
    slug: 'hugo-van-der-goes',
    bioFull: `<p>Flemish painter <strong>Hugo van der Goes</strong> (c. 1440-1482) was one of the most significant and original Early Netherlandish painters. Nothing is known of his life before 1467, when he became a master in the painters' guild of Ghent. He served as the guild's deacon from 1474 to 1476. When Joos van Wassenhove left Ghent for Italy in 1470, van der Goes became the leading painter in the city. Sometime after 1475, he entered a monastery near Brussels, continuing to paint while suffering from mental illness.</p>

<p>His masterpiece, the <strong>Portinari Altarpiece</strong> (c. 1475), is a large triptych depicting the Adoration of the Shepherds, commissioned by Tommaso Portinari, the Medici bank's representative in Bruges. The shepherds' faces show unprecedented psychological insight and emotional intensity. When the work arrived in Florence in 1483, Italian artists deeply admired and sought to emulate it; Domenico Ghirlandaio directly imitated it in his Sassetti Chapel Adoration. This triptych now hangs at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence. According to monastic records, van der Goes suffered from paranoia and suicidal thoughts, believing himself damned. He died in Ghent in 1482.</p>`,
    faqs: [
      { question: "What art movement was Hugo van der Goes part of?", answer: "Van der Goes was a leading painter of the <a href=\"/movement/northern-renaissance\"><strong>Early Netherlandish</strong></a> school, known for intense emotion and psychological depth." },
      { question: "Where can I see the Portinari Altarpiece?", answer: "The <strong>Portinari Altarpiece</strong> is at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, where it profoundly influenced Italian Renaissance painters." },
      { question: "Who commissioned the Portinari Altarpiece?", answer: "<strong>Tommaso Portinari</strong>, the Medici bank's representative in Bruges, commissioned it for the hospital of Santa Maria Nuova in Florence." },
      { question: "How did the Portinari Altarpiece influence Italian art?", answer: "Italian artists including <strong>Domenico Ghirlandaio</strong> directly imitated its realistic detail and emotional intensity in their own work." },
      { question: "What mental illness did van der Goes suffer?", answer: "Monastic records describe him suffering from <strong>paranoia and suicidal thoughts</strong>, believing himself damned. He continued painting despite his illness." }
    ]
  },

  // 34. Isaac Levitan
  {
    slug: 'isaac-levitan',
    bioFull: `<p>Russian painter <strong>Isaac Levitan</strong> (1860-1900) advanced the genre of the "mood landscape," capturing the emotional essence of Russian nature. Born to a poor Jewish family in Congress Poland (now Lithuania), he moved to Moscow in 1870 and entered the Moscow School of Painting at age thirteen. His mentor Alexei Savrasov, influenced by the Barbizon School, taught him to paint outdoors and bring emotion into his landscapes. Anti-Jewish laws briefly expelled him from the school in 1879.</p>

<p>Levitan's dream of visiting the Volga River was finally realized in 1887, beginning a "Volga period" lasting until 1890 that produced his greatest work. His painting <strong>The Quiet Haven</strong> ("Tikhaya Obitel"), painted in Plyos on the Volga, showed Russian nature as "something new yet very close and dear" to contemporaries. His vast, open spaces from the plains of Crimea to the Volga banks expressed a pantheistic faith in God-in-nature. Works like Above the Eternal Peace (1894) achieve sublime scale and beauty. In 1898, he became head of the Landscape Studio at his alma mater. He died at 39, having created over a thousand paintings. The <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> holds the finest collection of his work.</p>`,
    faqs: [
      { question: "What is Isaac Levitan known for?", answer: "Levitan advanced the <strong>'mood landscape'</strong> genre, capturing the emotional essence of Russian nature with poetic sensitivity." },
      { question: "Where can I see Levitan's paintings?", answer: "The <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow holds the finest collection of his work, including his major Volga landscapes." },
      { question: "What was Levitan's 'Volga period'?", answer: "From 1887-1890, Levitan painted on the <strong>Volga River</strong>, producing his greatest work including The Quiet Haven in the town of Plyos." },
      { question: "How many paintings did Levitan create?", answer: "Despite dying at 39, Levitan created over <strong>a thousand paintings</strong>, establishing himself as Russia's foremost landscape artist." },
      { question: "What challenges did Levitan face?", answer: "As a Jew, he faced <strong>anti-Semitic laws</strong> that briefly expelled him from art school in 1879 and restricted his residence in Moscow." }
    ]
  },

  // 35. Jean-Léon Gérôme
  {
    slug: 'jean-leon-gerome',
    bioFull: `<p><a href="/movement/academic-art"><strong>Academic</strong></a> and <a href="/movement/orientalism"><strong>Orientalist</strong></a> painter <strong>Jean-Léon Gérôme</strong> (1824-1904) was arguably the world's most famous living artist by 1880. Born in Vesoul to a goldsmith, he studied under Paul Delaroche in Paris and traveled to Italy before gaining fame with The Cock Fight (1846). This painting launched the Neo-Grec movement and his career. His range included historical paintings, Greek mythology, portraits, and especially Orientalist subjects inspired by his travels to the Middle East between 1854 and 1872.</p>

<p>Gérôme's Orientalist works are considered among the finest in the genre. His trips to Egypt and Constantinople inspired dramatic scenes of Eastern life, architecture, and customs. He taught at the École des Beaux-Arts from 1864 until his death, training influential artists including Thomas Eakins and Mary Cassatt. He was exceedingly hostile to Impressionism, urging the government to refuse a bequest of their works as late as 1893. In his final 25 years, he also produced significant sculpture, including a bronze gladiator shown at the 1878 Exposition. Works hang at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and <a href="/museum/louvre"><strong>Louvre</strong></a>.</p>`,
    faqs: [
      { question: "What art movements was Gérôme part of?", answer: "Gérôme was a leading figure of <a href=\"/movement/academic-art\"><strong>Academic Art</strong></a> and <a href=\"/movement/orientalism\"><strong>Orientalism</strong></a>, painting historical and Middle Eastern subjects." },
      { question: "Where can I see Gérôme's paintings?", answer: "Works hang at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris." },
      { question: "Who were Gérôme's famous students?", answer: "He taught influential artists including <strong>Thomas Eakins, Mary Cassatt,</strong> and Osman Hamdi Bey at the École des Beaux-Arts." },
      { question: "What was Gérôme's view of Impressionism?", answer: "He was <strong>exceedingly hostile</strong> to Impressionism, urging the French government to refuse a bequest of Impressionist works as late as 1893." },
      { question: "Did Gérôme create sculpture?", answer: "In his final 25 years, he produced significant <strong>sculpture</strong>, including a bronze gladiator shown at the 1878 Exposition Universelle." }
    ]
  },

  // 36. Léon Bonnat
  {
    slug: 'leon-bonnat',
    bioFull: `<p><a href="/movement/academic-art"><strong>Academic</strong></a> painter <strong>Léon Bonnat</strong> (1833-1922) was one of France's leading portrait painters and an influential teacher. Born in Bayonne, he lived in Madrid from 1846-1853, where his father owned a bookshop. While tending the shop, he copied engravings of Old Masters, developing his passion for Spanish realism. He studied under Federico Madrazo in Madrid and Léon Cogniet in Paris, spending three years in Rome on a scholarship from his native Bayonne.</p>

<p>Bonnat's many portraits show the influence of Velázquez, Ribera, and other Spanish masters whose works he studied at the Prado. Théophile Gautier hailed him as "the antithesis of Bouguereau" for his stark naturalism and lack of surface finish. His subjects included Victor Hugo, Louis Pasteur, and other prominent Europeans and Americans. A liberal teacher who stressed simplicity above academic finish, he trained Thomas Eakins, Gustave Caillebotte, and Henri de Toulouse-Lautrec. He became professor at the École des Beaux-Arts in 1882 and its director in 1905. In gratitude for early support, he built the Musée Bonnat in Bayonne, housing his exceptional collection of Old Master drawings from Leonardo and Michelangelo to Ingres. Works hang at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> and the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Léon Bonnat part of?", answer: "Bonnat was a French <a href=\"/movement/academic-art\"><strong>Academic</strong></a> painter known for realistic portraiture influenced by Spanish Baroque masters." },
      { question: "Where can I see Bonnat's paintings?", answer: "Works hang at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and the Musée Bonnat in Bayonne." },
      { question: "Who were Bonnat's famous students?", answer: "He trained <strong>Thomas Eakins, Gustave Caillebotte,</strong> and Henri de Toulouse-Lautrec, stressing simplicity over academic finish." },
      { question: "What is the Musée Bonnat?", answer: "Bonnat built a <strong>museum in Bayonne</strong> housing his exceptional collection of Old Master drawings from Leonardo and Michelangelo to Ingres." },
      { question: "What influenced Bonnat's portrait style?", answer: "He studied <strong>Velázquez and Ribera</strong> at the Prado, developing a stark naturalism that Gautier called 'the antithesis of Bouguereau.'" }
    ]
  },

  // 37. Lorenzo Lotto
  {
    slug: 'lorenzo-lotto',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Lorenzo Lotto</strong> (c. 1480-1556/57) was one of the most individualistic of the great Italian painters, known for psychological depth in portraits and bold use of color. Born in Venice, he was influenced by Giovanni Bellini and Giorgione but developed his own distinctive manner. His portraits reveal the thoughts and emotions of subjects with penetrating insight. Art historian Bernard Berenson rediscovered him at the end of the 19th century after centuries of relative obscurity.</p>

<p>Lotto traveled widely: Treviso (1503-1506), the Marches, Rome, and most productively Bergamo (1513-1525), where wealthy merchants and aristocrats gave him many commissions. His altarpieces in San Bernardino and Santo Spirito show inventiveness, competence in light and shade, and preference for opulent colors. Returning to Venice, he was overshadowed by Titian's dominance. His nervous, irritable temperament prevented lasting relationships, and he moved frequently. In old age, destitute and partially blind, he painted bed numbers at a hospital and entered the Santa Casa at Loreto as a lay brother in 1554. Works hang at the <a href="/museum/gallerie-dell-accademia-venice"><strong>Gallerie dell'Accademia</strong></a>, <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, and the <a href="/museum/prado"><strong>Museo del Prado</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Lorenzo Lotto part of?", answer: "Lotto was a <a href=\"/movement/renaissance\"><strong>Venetian Renaissance</strong></a> painter known for his individualistic style and psychological depth in portraiture." },
      { question: "Where can I see Lotto's paintings?", answer: "Works hang at the <a href=\"/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a>, the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and the <a href=\"/museum/prado\"><strong>Prado</strong></a>." },
      { question: "What was Lotto's most productive period?", answer: "His <strong>Bergamo period</strong> (1513-1525) was his most productive, with commissions from wealthy merchants and aristocrats." },
      { question: "Why was Lotto overshadowed in Venice?", answer: "<strong>Titian's dominance</strong> overshadowed him when he returned to Venice. He was later rediscovered by Bernard Berenson in the late 19th century." },
      { question: "What happened to Lotto in old age?", answer: "Destitute and partially blind, he painted <strong>bed numbers at a hospital</strong> before entering Loreto's Santa Casa as a lay brother in 1554." }
    ]
  },

  // 38. Perugino
  {
    slug: 'perugino',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Pietro Perugino</strong> (c. 1446-1523), born Pietro Vannucci in Città della Pieve, Umbria, developed qualities that found classic expression in the High Renaissance. Best known today as Raphael's teacher, he was considered "the best painter in Italy" by 1502. His work anticipated High Renaissance ideals in compositional clarity, sense of spaciousness, and economy of formal elements. Raphael's father, Giovanni Santi, called him "divine painter" in a poem.</p>

<p>Perugino trained in Florence, possibly under Piero della Francesca, and joined Andrea del Verrocchio's workshop around 1470 alongside Leonardo da Vinci, Ghirlandaio, and Botticelli. In 1480-1482, he led the wall decoration of the Sistine Chapel in Rome. His fresco <strong>Christ Giving the Keys to St. Peter</strong> demonstrates his mastery of perspective and spatial harmony. The Assumption of the Virgin he painted on the altar wall was later covered by Michelangelo's Last Judgment. After 1500, his art declined as he repeated earlier compositions. Raphael studied under him in Perugia from 1499-1503, absorbing his spatial sensibility before surpassing him. Works hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London and the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Perugino part of?", answer: "Perugino was a leading <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painter whose work anticipated High Renaissance ideals of clarity and spatial harmony." },
      { question: "Where can I see Perugino's paintings?", answer: "His Sistine Chapel frescoes remain in situ at the <a href=\"/museum/vatican-museums\"><strong>Vatican</strong></a>. Easel paintings are at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> and <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a>." },
      { question: "What is Perugino's most famous fresco?", answer: "<strong>Christ Giving the Keys to St. Peter</strong> in the Sistine Chapel demonstrates his mastery of perspective and spatial composition." },
      { question: "Who was Perugino's most famous student?", answer: "<strong>Raphael</strong> studied under Perugino in Perugia from 1499-1503, absorbing his spatial sensibility before surpassing his teacher." },
      { question: "What happened to Perugino's altar fresco?", answer: "His Assumption of the Virgin on the Sistine Chapel altar wall was <strong>covered by Michelangelo's Last Judgment</strong> between 1536-1541." }
    ]
  },

  // 39. Vittore Carpaccio
  {
    slug: 'vittore-carpaccio',
    bioFull: `<p><a href="/movement/renaissance"><strong>Venetian Renaissance</strong></a> painter <strong>Vittore Carpaccio</strong> (c. 1460-1525/26) was the greatest early narrative painter of his school. He studied under Gentile Bellini and was influenced by Antonello da Messina and Early Netherlandish painting. A master visual storyteller, he painted cycles of large canvases telling tales in episodes, almost like storyboards for a film. His detailed scenes capture 15th-century Venice with documentary precision.</p>

<p>His first major project, the nine-canvas <strong>Legend of Saint Ursula</strong> (1490-1500) for the Scuola di Santa Orsola, established his reputation. The Dream of St. Ursula is praised for its wealth of naturalistic detail, while the Departure of St. Ursula displays splendid architecture and teeming crowds. His cycle for the Scuola di San Giorgio degli Schiavoni (1502) depicting Saints George, Tryphon, and Jerome represents the climax of his art. John Ruskin celebrated his attention to detail in the 19th century. According to legend, Venetian chef Giuseppe Cipriani named the beef dish "carpaccio" after him because its vibrant reds recalled the painter's colors. His works remain at the <a href="/museum/gallerie-dell-accademia-venice"><strong>Gallerie dell'Accademia</strong></a> and the Scuola di San Giorgio degli Schiavoni in Venice.</p>`,
    faqs: [
      { question: "What art movement was Carpaccio part of?", answer: "Carpaccio was a leading painter of the <a href=\"/movement/renaissance\"><strong>Venetian Renaissance</strong></a>, known as the greatest early narrative painter of that school." },
      { question: "Where can I see Carpaccio's paintings?", answer: "His Saint Ursula cycle is at the <a href=\"/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a>. The San Giorgio degli Schiavoni cycle remains in its original location." },
      { question: "What is Carpaccio's most famous work?", answer: "The nine-canvas <strong>Legend of Saint Ursula</strong> (1490-1500) established his reputation for narrative painting with documentary detail." },
      { question: "Is the dish carpaccio named after the painter?", answer: "According to legend, Venetian chef <strong>Giuseppe Cipriani</strong> named it after the painter because its vibrant reds recalled Carpaccio's colors." },
      { question: "What is distinctive about Carpaccio's style?", answer: "He was a master <strong>visual storyteller</strong>, painting large cycles that tell tales in episodes with documentary precision of Venetian life." }
    ]
  },

  // 40. Alonso Cano
  {
    slug: 'alonso-cano',
    bioFull: `<p>Spanish <a href="/movement/baroque"><strong>Baroque</strong></a> artist <strong>Alonso Cano</strong> (1601-1667) was painter, sculptor, and architect, often called "the Spanish Michelangelo" for his diversity of talents. Born in Granada to an architect father, he learned painting from Francisco Pacheco in Seville alongside his fellow student and lifelong friend Velázquez. He also studied sculpture under Juan Martínez Montañés. His eventful personal life included imprisonment for debt (1636), wounding a colleague in a duel (1637), and being accused of murdering his wife (1644), though he was released after torture.</p>

<p>In 1638, Cano moved to Madrid as painter to the Count-Duke Olivares, later restoring pictures in Philip IV's royal collection. This acquainted him with 16th-century Venetian masters whose influence appears in his later paintings. From 1652, he worked mainly in Granada, where he designed the cathedral's west façade (1667), one of the boldest and most original works of Spanish Baroque architecture. He was ordained a priest in 1658 to further his cathedral career. His polychromed wood sculptures, including the Virgin of the Immaculate Conception (1655-56), exemplify Spanish religious sculpture. Despite his stormy temperament, his work tends toward serenity. Works hang at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> and Granada Cathedral.</p>`,
    faqs: [
      { question: "What art movement was Alonso Cano part of?", answer: "Cano was a leading figure of Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> art, working as painter, sculptor, and architect." },
      { question: "Where can I see Alonso Cano's work?", answer: "Paintings hang at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a>. His cathedral façade and sculptures are in <strong>Granada</strong>." },
      { question: "Why was Cano called 'the Spanish Michelangelo'?", answer: "Like Michelangelo, he excelled in <strong>painting, sculpture, and architecture</strong>, demonstrating remarkable versatility across artistic disciplines." },
      { question: "Who was Cano's fellow student?", answer: "<strong>Diego Velázquez</strong> was his fellow student under Francisco Pacheco in Seville, and they maintained a lifelong friendship." },
      { question: "What is Cano's architectural masterpiece?", answer: "The <strong>west façade of Granada Cathedral</strong> (1667), consisting of three huge arches without classical Orders, is his most original architectural work." }
    ]
  }
];

async function main() {
  console.log('Starting artist updates (part 4 of 4)...');

  for (const artist of artistUpdates) {
    try {
      await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          bioFull: artist.bioFull,
          faqs: artist.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.slug}`);
    } catch (error) {
      console.error(`✗ Failed to update ${artist.slug}:`, error.message);
    }
  }

  console.log('\nPart 4 complete (artists 31-40)!');
  console.log('All 40 artists have been updated!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
