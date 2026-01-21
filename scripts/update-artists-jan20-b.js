/**
 * Update Artists January 20, 2026 - Part 2 (artists 11-20)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 11. Eustache Le Sueur
  {
    slug: 'eustache-le-sueur',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> painter <strong>Eustache Le Sueur</strong> (1616-1655) was one of the founders of the French Academy of Painting and a leading exponent of Parisian Atticism. Born in Paris to a wood turner and sculptor, he never left the city in his 38 years. He trained under Simon Vouet, absorbing his teacher's decorative style before developing a more restrained, classical manner influenced by Raphael and Poussin. Critics called him "the French Raphael" for his graceful compositions and harmonious color.</p>

<p>Le Sueur's reputation was established by his series of 22 paintings on the life of Saint Bruno (1645-1648) for the Paris Carthusians, now at the <a href="/museum/louvre"><strong>Louvre</strong></a>. He was chosen to decorate the Hôtel Lambert on the Île Saint-Louis, one of the most prestigious commissions in Paris. In 1648, he became a founding member and first professor of the Royal Academy of Painting and Sculpture. Contemporary accounts describe him as disliking "immoral excesses" and loving "order, simplicity and seclusion." He died at just 37, supposedly from a broken heart after his wife's death. His works influenced French academic painting for generations, and his Saint Bruno cycle remains a masterpiece of 17th-century French art.</p>`,
    faqs: [
      { question: "What art movement was Eustache Le Sueur part of?", answer: "Le Sueur was a leading figure of French <a href=\"/movement/baroque\"><strong>Baroque</strong></a> classicism, known as Parisian Atticism for its restrained, elegant style." },
      { question: "Where can I see Le Sueur's paintings?", answer: "His Saint Bruno cycle and other major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. Additional works are at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "What is Le Sueur's most famous work?", answer: "His <strong>22-painting cycle on the life of Saint Bruno</strong> (1645-1648), now at the Louvre, established his reputation as 'the French Raphael.'" },
      { question: "Why was Le Sueur called 'the French Raphael'?", answer: "His <strong>graceful compositions</strong> and harmonious color echoed Raphael's classical ideals, earning him this nickname from admirers." },
      { question: "What role did Le Sueur play in French art institutions?", answer: "He was a <strong>founding member</strong> and first professor of the Royal Academy of Painting and Sculpture, established in 1648." }
    ]
  },

  // 12. Frederic Leighton
  {
    slug: 'frederic-leighton',
    bioFull: `<p>Victorian painter and sculptor <strong>Frederic Leighton</strong> (1830-1896) was the only British artist ever elevated to the peerage, becoming Baron Leighton of Stretton in the year of his death. Born in Scarborough, he trained in Berlin, Florence, Frankfurt, and Paris, developing a thoroughly European artistic education. He became president of the Royal Academy in 1878, a position he held until his death. Contemporaries nicknamed him "Jupiter Olympus" for his towering status in the art world and passion for Greek and Roman antiquity.</p>

<p>Leighton's masterpiece <strong>Flaming June</strong> (1895), depicting a sleeping woman in flowing orange drapery, was painted in his final year. After falling out of favor when Victorian art became unfashionable, it was rediscovered in a Battersea home in the early 1960s, boxed over a chimney. Andrew Lloyd Webber spotted it in a King's Road shop but his grandmother refused to lend him the £50 asking price. Puerto Rican art collector Luis Ferré bought it for £2,000; it now hangs at the <a href="/museum/museo-de-arte-de-ponce"><strong>Museo de Arte de Ponce</strong></a>. His London home, Leighton House, is now a museum showcasing his eclectic artistic vision and famous Arab Hall with Damascus tiles.</p>`,
    faqs: [
      { question: "What honors did Frederic Leighton receive?", answer: "Leighton was the only British artist ever <strong>elevated to the peerage</strong>, becoming Baron Leighton of Stretton. He was also president of the Royal Academy from 1878." },
      { question: "Where can I see Flaming June?", answer: "<strong>Flaming June</strong> hangs at the <a href=\"/museum/museo-de-arte-de-ponce\"><strong>Museo de Arte de Ponce</strong></a> in Puerto Rico, which acquired it for £2,000 in 1963." },
      { question: "What happened to Flaming June after Leighton's death?", answer: "The painting was forgotten for decades, rediscovered <strong>boxed over a chimney</strong> in a Battersea home in the 1960s, and nearly bought by Andrew Lloyd Webber for £50." },
      { question: "What can I see at Leighton House in London?", answer: "<a href=\"/museum/leighton-house\"><strong>Leighton House</strong></a> museum displays his studio, collections, and the famous Arab Hall featuring Damascus tiles and a fountain." },
      { question: "What subjects did Leighton paint?", answer: "Leighton painted <strong>classical and mythological</strong> subjects with idealized figures, reflecting his passion for Greek and Roman antiquity." }
    ]
  },

  // 13. Gentile da Fabriano
  {
    slug: 'gentile-da-fabriano',
    bioFull: `<p><strong>Gentile da Fabriano</strong> (c. 1370-1427) was the foremost painter of central Italy in the early 15th century and among the finest examples of the <strong>International Gothic</strong> style. Born Gentile di Niccolò di Giovanni di Massio in Fabriano in the Marches, his early training shows stylistic affinities with Lombard painting. He worked in Venice (1408-1414), where he painted now-lost frescoes in the Doge's Palace, and in Brescia at the service of Pandolfo III Malatesta before arriving in Florence in 1420.</p>

<p>His masterpiece, the <strong>Adoration of the Magi</strong> (1423) at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, exemplifies International Gothic at its most refined. Graceful figures wear velvets and rich brocades; the Magi are attended by Oriental retainers with exotic animals including lions and camels. Its delicate linearity and vibrant colors influenced Florentine artists throughout the century. He also produced the Quaratesi Polyptych (1425) and worked for Pope Martin V in Rome. His final frescoes in Rome's Church of St. John Lateran were completed by Pisanello after his death and later destroyed. Gentile probably taught Jacopo Bellini in Florence, linking International Gothic to the Venetian Renaissance.</p>`,
    faqs: [
      { question: "What art movement was Gentile da Fabriano part of?", answer: "Gentile was the leading master of the <strong>International Gothic</strong> style in Italy, known for elegant, decorative painting with rich detail and vibrant colors." },
      { question: "Where can I see Gentile da Fabriano's masterpiece?", answer: "His <strong>Adoration of the Magi</strong> (1423) is at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, considered one of the finest International Gothic paintings." },
      { question: "What makes the Adoration of the Magi special?", answer: "The painting features <strong>graceful figures in rich brocades</strong>, exotic animals, delicate linearity, and vibrant colors that influenced Florentine artists for decades." },
      { question: "Who did Gentile da Fabriano influence?", answer: "He influenced Florentine painting throughout the 15th century and probably taught <strong>Jacopo Bellini</strong>, father of the Venetian Renaissance masters." },
      { question: "What happened to Gentile's Roman frescoes?", answer: "His frescoes in <strong>St. John Lateran</strong> were completed by Pisanello after Gentile's death in 1427, then destroyed when Borromini reconstructed the interior in 1647." }
    ]
  },

  // 14. Jacob Jordaens
  {
    slug: 'jacob-jordaens',
    bioFull: `<p>Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> painter <strong>Jacob Jordaens</strong> (1593-1678) was one of three artists, alongside Rubens and Van Dyck, who brought prestige to the Antwerp school. Born the first of eleven children to a wealthy linen merchant, he studied under Adam van Noort and married his master's daughter in 1616. Unlike his contemporaries, he never traveled to Italy, remaining in Antwerp his entire life except for brief trips within the Low Countries.</p>

<p>Jordaens is best known for large-scale genre scenes such as <strong>The King Drinks</strong> (Feast of the Bean King) and <strong>As the Old Sing, So Pipe the Young</strong>, depicting boisterous Flemish celebrations with earthy humor. He also painted mythological, allegorical, and biblical scenes. After Rubens's death in 1640, he was considered Antwerp's greatest painter, receiving commissions from King Charles I of England, Queen Christina of Sweden, and the Dutch stadtholder. He converted to Calvinism in 1648 but continued accepting Catholic church commissions. In 1652, he decorated the Huis ten Bosch near The Hague. His works hang at the <a href="/museum/royal-museums-belgium"><strong>Royal Museums of Fine Arts of Belgium</strong></a>, <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and <a href="/museum/prado"><strong>Museo del Prado</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Jacob Jordaens part of?", answer: "Jordaens was a leading Flemish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter, alongside Rubens and Van Dyck, known for vigorous compositions and earthy humor." },
      { question: "Where can I see Jordaens's paintings?", answer: "Major works are at the <a href=\"/museum/royal-museums-belgium\"><strong>Royal Museums of Belgium</strong></a>, the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>, and the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a>." },
      { question: "What are Jordaens's most famous paintings?", answer: "<strong>The King Drinks</strong> and <strong>As the Old Sing, So Pipe the Young</strong> are his best-known works, depicting boisterous Flemish celebrations." },
      { question: "How does Jordaens compare to Rubens?", answer: "After Rubens's death in 1640, Jordaens was considered <strong>Antwerp's greatest painter</strong>. He never traveled to Italy, unlike Rubens." },
      { question: "Did Jordaens ever leave Antwerp?", answer: "Unlike other major painters of his era, Jordaens <strong>never traveled to Italy</strong>, remaining in Antwerp his entire life except for brief trips in the Low Countries." }
    ]
  },

  // 15. Jean-Honoré Fragonard
  {
    slug: 'jean-honore-fragonard',
    bioFull: `<p><a href="/movement/rococo"><strong>Rococo</strong></a> painter <strong>Jean-Honoré Fragonard</strong> (1732-1806) created some of the most exuberant and sensual works of 18th-century French art. Born in Grasse to a glove merchant, he trained briefly under Chardin before entering François Boucher's studio. A precocious talent, he won the Prix de Rome at just twenty. His painting Coresus Sacrificing Himself to Save Callirhoe (1765) secured his admission to the Academy, but he largely abandoned history painting for the lighter subjects that suited his temperament.</p>

<p>His masterpiece <strong>The Swing</strong> (1767) at the <a href="/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London epitomizes Rococo playfulness. A young woman swings high as her shoe flies toward a man hidden in the bushes below, while an older man pushes from behind. The Baron de Saint-Julien commissioned the painting to show himself with his mistress. Fragonard produced over 550 paintings, executing them with remarkable speed. During the Revolution, his friend Jacques-Louis David helped him become a museum curator, but the Neoclassical aesthetic had displaced his lighter style by then. He died nearly forgotten in 1806. Major works hang at the <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Fragonard part of?", answer: "Fragonard was a leading master of the <a href=\"/movement/rococo\"><strong>Rococo</strong></a> style, known for exuberant, sensual paintings with remarkable facility and hedonism." },
      { question: "Where can I see The Swing?", answer: "Fragonard's masterpiece <strong>The Swing</strong> (1767) hangs at the <a href=\"/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London." },
      { question: "What is the story behind The Swing?", answer: "The Baron de Saint-Julien commissioned it to show <strong>himself with his mistress</strong>. He originally wanted a bishop pushing the swing, but Fragonard painted a layman." },
      { question: "How many paintings did Fragonard create?", answer: "Fragonard produced over <strong>550 paintings</strong>, not counting drawings and etchings, executing them with remarkable speed and facility." },
      { question: "What happened to Fragonard during the French Revolution?", answer: "His friend <strong>Jacques-Louis David</strong> appointed him a museum curator, though Neoclassical taste had displaced his Rococo style by then." }
    ]
  },

  // 16. Masaccio
  {
    slug: 'masaccio',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Masaccio</strong> (1401-1428) revolutionized art in just six years of activity, establishing the foundations of Western painting. Born Tommaso di Ser Giovanni di Simone in Castel San Giovanni near Florence, his nickname means "clumsy Tom" or "messy Tom," perhaps distinguishing him from collaborator Masolino ("little Tom"). He entered the Florentine painters' guild in 1422. In this short career, Masaccio radically transformed Florentine painting with his realistic figures, convincing three-dimensional space, and rational use of perspective.</p>

<p>His masterwork, the <strong>Brancacci Chapel</strong> frescoes in Santa Maria del Carmine, Florence (begun 1424), depicts scenes from the life of Saint Peter with unprecedented naturalism. His Expulsion from the Garden of Eden shows Adam and Eve with raw emotional intensity. The Tribute Money demonstrates sophisticated use of perspective and atmospheric effects. Masaccio's weighty, dignified treatment of the human figure renewed Giotto's idiom while utilizing contemporary advances in anatomy and perspective. He died mysteriously in Rome at just 26 or 27, possibly poisoned. Filippo Lippi, Fra Angelico, Andrea del Castagno, and Piero della Francesca all studied his innovations at the <a href="/museum/brancacci-chapel"><strong>Brancacci Chapel</strong></a>.</p>`,
    faqs: [
      { question: "Why is Masaccio important in art history?", answer: "Masaccio revolutionized <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painting by introducing realistic figures, convincing 3D space, and rational perspective in just six years of work." },
      { question: "Where can I see Masaccio's masterwork?", answer: "The <a href=\"/museum/brancacci-chapel\"><strong>Brancacci Chapel</strong></a> in Santa Maria del Carmine, Florence, contains his revolutionary frescoes on the life of Saint Peter." },
      { question: "What are Masaccio's most famous frescoes?", answer: "<strong>The Tribute Money</strong> and <strong>Expulsion from the Garden of Eden</strong> at the Brancacci Chapel demonstrate his mastery of naturalism and emotion." },
      { question: "Who did Masaccio influence?", answer: "Major artists including <strong>Filippo Lippi, Fra Angelico</strong>, Andrea del Castagno, and Piero della Francesca all studied his Brancacci Chapel frescoes." },
      { question: "How old was Masaccio when he died?", answer: "Masaccio died mysteriously in Rome at just <strong>26 or 27 years old</strong>, possibly poisoned, having worked as an artist for only about six years." }
    ]
  },

  // 17. Odilon Redon
  {
    slug: 'odilon-redon',
    bioFull: `<p><a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Odilon Redon</strong> (1840-1916) explored the world of dreams, fantasy, and imagination with works that foreshadowed Surrealism. Born in Bordeaux to a prosperous family, he studied architecture before turning to art. His master Rodolphe Bresdin exerted an important early influence. For the first half of his career, Redon worked almost exclusively in black and white, creating haunting charcoal drawings and lithographs he called "noirs." These featured floating eyeballs, spiders, and fantastic creatures drawn from his subconscious.</p>

<p>During the 1890s, Redon transitioned dramatically to color, working in pastel and oil with luminous intensity. Flowers became a recurring subject, particularly after 1900. His eye balloon floating above the world became a personal metaphor for the questing soul. Redon's visionary work influenced both Symbolist writers like Huysmans and later Surrealists including Marcel Duchamp. He was associated with the Nabis and exhibited with the Impressionists. His works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, and <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which holds the largest collection of his pastels outside France.</p>`,
    faqs: [
      { question: "What art movement was Odilon Redon part of?", answer: "Redon was a major <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> artist whose dreamlike imagery anticipated <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a> and Dada in the 20th century." },
      { question: "Where can I see Redon's paintings?", answer: "Major collections are at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/moma\"><strong>MoMA</strong></a>, and the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>." },
      { question: "What are Redon's 'noirs'?", answer: "Redon's <strong>noirs</strong> are haunting black-and-white charcoal drawings and lithographs featuring floating eyeballs, spiders, and fantastic creatures." },
      { question: "How did Redon's style change over time?", answer: "After working in <strong>black and white</strong> for decades, Redon transitioned to vibrant color pastels and oils in the 1890s, often painting luminous flowers." },
      { question: "Who did Odilon Redon influence?", answer: "Redon influenced <a href=\"/movement/surrealism\"><strong>Surrealists</strong></a> like Marcel Duchamp, as well as Paul Gauguin and the Nabis with his exploration of dreams and fantasy." }
    ]
  },

  // 18. Pierre Puvis de Chavannes
  {
    slug: 'pierre-puvis-de-chavannes',
    bioFull: `<p><a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Pierre Puvis de Chavannes</strong> (1824-1898) was the leading French muralist of the later 19th century. Born to a mining engineer from an old noble family of Burgundy, he intended to follow his father's profession until illness led him to Italy, where he discovered his calling. He studied briefly under Delacroix and later Thomas Couture, though he preferred working alone. His distinctive style featured simplified forms, rhythmic line, and pale, flat coloring reminiscent of frescoes.</p>

<p>Puvis decorated major public buildings across France, including the Panthéon, Sorbonne, and Hôtel de Ville in Paris, plus the Boston Public Library in America. His works invoke a timeless, pre-industrial past with classically-inspired allegorical themes. Though largely independent of major artistic currents, he was admired by a remarkably diverse group: Seurat, Gauguin, Toulouse-Lautrec, Van Gogh, Matisse, and Picasso all recognized him as a visionary. He co-founded and became president of the Société Nationale des Beaux-Arts. His works hang at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement was Puvis de Chavannes part of?", answer: "Puvis was associated with <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>, though his unique style influenced Post-Impressionists and early modern artists alike." },
      { question: "Where can I see Puvis de Chavannes's murals?", answer: "His murals decorate the <strong>Panthéon, Sorbonne,</strong> and Hôtel de Ville in Paris, plus the Boston Public Library in America." },
      { question: "Who admired Puvis de Chavannes?", answer: "A remarkably diverse group: <strong>Seurat, Gauguin, Van Gogh, Matisse,</strong> and Picasso all recognized him as a visionary influence." },
      { question: "What is distinctive about Puvis's style?", answer: "His style featured <strong>simplified forms, rhythmic line,</strong> and pale flat coloring reminiscent of ancient frescoes, evoking a timeless past." },
      { question: "Where can I see his easel paintings?", answer: "Works hang at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>, <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." }
    ]
  },

  // 19. Rogier van der Weyden
  {
    slug: 'rogier-van-der-weyden',
    bioFull: `<p><a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> painter <strong>Rogier van der Weyden</strong> (c. 1400-1464) was, with Jan van Eyck, the most influential northern European artist of his time. Born Rogier de le Pasture in Tournai (now Belgium), he apprenticed under Robert Campin beginning in 1427 and became a master in 1432. Moving to Brussels in 1435, he adopted the Flemish version of his name and became official painter to the city. He was celebrated for the naturalism of his detail and his expressive pathos.</p>

<p>His masterpiece <strong>The Descent from the Cross</strong> (c. 1435) at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> was commissioned by the Crossbowmen's Guild of Leuven. The painting achieves emotional intensity unprecedented in Flemish art, with figures arranged like polychromed sculptures against a gold background. It was copied more than any other Flemish painting of its era. Rogier's ability to represent intense emotions became his signature contribution to European art. Every major Flemish painter of the next generation depended on his formulations: Petrus Christus, Dieric Bouts, Hugo van der Goes, and Hans Memling. His works also hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London and the <a href="/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      { question: "What art movement was Rogier van der Weyden part of?", answer: "Rogier was a master of the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, one of the most influential painters alongside Jan van Eyck." },
      { question: "Where can I see The Descent from the Cross?", answer: "Rogier's masterpiece hangs at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. It was the most copied Flemish painting of its era." },
      { question: "Who did Rogier van der Weyden train?", answer: "Every major Flemish painter of the next generation depended on his work: <strong>Petrus Christus, Dieric Bouts, Hugo van der Goes,</strong> and Hans Memling." },
      { question: "What was distinctive about Rogier's art?", answer: "His ability to represent <strong>intense emotions</strong> was his signature contribution, achieving expressive pathos unprecedented in Flemish painting." },
      { question: "Where else can I see Rogier's paintings?", answer: "Works hang at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, <a href=\"/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, and other major museums." }
    ]
  },

  // 20. Valentin Serov
  {
    slug: 'valentin-serov',
    bioFull: `<p>Russian painter <strong>Valentin Serov</strong> (1865-1911) was the premiere portrait artist of his era, known for psychological insight and technical brilliance. The son of composer Alexander Serov, he grew up in an artistic milieu and studied under Ilya Repin in Paris and Pavel Chistyakov at the St. Petersburg Academy. His friendships with Mikhail Vrubel and Konstantin Korovin, plus the creative atmosphere of the Abramtsevo Colony, shaped his development.</p>

<p>His breakthrough painting <strong>Girl with Peaches</strong> (1887) at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> is considered the masterpiece of Russian painting. Created at Abramtsevo when Serov was just 22, it depicts twelve-year-old Vera Mamontova with a freshness that inaugurated Russian Impressionism. Yet Serov developed this <a href="/movement/impressionism"><strong>Impressionist</strong></a> style independently, not encountering French Impressionism until after painting it. He later painted Russian royalty, aristocrats, and artists including the Grand Duke Pavel Alexandrovich. In 1905, Serov witnessed Bloody Sunday from his Academy studio and refused to paint imperial family members afterward. A 2016 exhibition at the Tretyakov drew record crowds who queued for hours in freezing temperatures, even breaking down a door.</p>`,
    faqs: [
      { question: "What is Valentin Serov's most famous painting?", answer: "<strong>Girl with Peaches</strong> (1887) at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> is considered the masterpiece of Russian painting, painted when Serov was just 22." },
      { question: "Where can I see Serov's paintings?", answer: "The <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg hold major collections." },
      { question: "What art movement was Serov associated with?", answer: "Girl with Peaches inaugurated Russian <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, though Serov developed this style independently before seeing French Impressionist work." },
      { question: "Who did Serov paint portraits of?", answer: "Serov painted Russian <strong>royalty, aristocrats, and artists</strong>, including Grand Duke Pavel Alexandrovich, though he refused imperial commissions after Bloody Sunday." },
      { question: "How popular is Serov in Russia today?", answer: "A 2016 Tretyakov exhibition drew <strong>record crowds</strong> who queued for hours in freezing temperatures, even breaking down a museum door." }
    ]
  }
];

async function main() {
  console.log('Starting artist updates (part 2 of 4)...');

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

  console.log('\nPart 2 complete (artists 11-20)!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
