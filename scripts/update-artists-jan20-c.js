/**
 * Update Artists January 20, 2026 - Part 3 (artists 21-30)
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 21. Alexandre Cabanel
  {
    slug: 'alexandre-cabanel',
    bioFull: `<p><a href="/movement/academic-art"><strong>Academic</strong></a> painter <strong>Alexandre Cabanel</strong> (1823-1889) was a dominant figure in French painting during the Second Empire. Born in Montpellier, he entered the École des Beaux-Arts at seventeen and won the Prix de Rome at 22. His style embodied academic ideals: mythological subjects, graceful modeling, silky brushwork, and perfected form. A true believer in State-run academies, he became professor at the École des Beaux-Arts in 1863 and served on the Salon jury for decades.</p>

<p>His masterpiece <strong>The Birth of Venus</strong> (1863) at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> created a sensation at the "Salon of the Venuses." Napoleon III immediately purchased it for his personal collection. The painting shows Venus reclining on ocean waves, attended by cupids. Émile Zola criticized its eroticism disguised as mythology, calling the goddess "a delicious courtesan." Cabanel won the Grande Médaille d'Honneur at the Salons of 1865, 1867, and 1878, becoming one of "the three most successful artists of the Second Empire" alongside Meissonier and Gérôme. Multiple versions of his Venus exist; one is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "What art movement was Alexandre Cabanel part of?", answer: "Cabanel was a leading figure of <a href=\"/movement/academic-art\"><strong>Academic Art</strong></a>, embodying the ideals of the French Academy with mythological subjects and polished technique." },
      { question: "Where can I see The Birth of Venus?", answer: "The original version (1863) is at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. Another version is at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "Who bought Cabanel's Birth of Venus?", answer: "<strong>Napoleon III</strong> immediately purchased the painting from the 1863 Salon for his personal collection, cementing Cabanel's reputation." },
      { question: "What was Cabanel's role in French art institutions?", answer: "He was <strong>professor at the École des Beaux-Arts</strong> from 1863 and served on the Salon jury for decades, shaping official French taste." },
      { question: "How was Cabanel's Venus received by critics?", answer: "Émile Zola criticized it for disguising eroticism as mythology, calling Venus <strong>'a delicious courtesan'</strong> rather than a goddess." }
    ]
  },

  // 22. Dosso Dossi
  {
    slug: 'dosso-dossi',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Dosso Dossi</strong> (c. 1489-1542), born Giovanni di Niccolò de Luteri, was the leading painter of the School of Ferrara in the 16th century. His father was a bursar for the Este Dukes, and from 1514 until his death, Dossi served as court artist to Dukes Alfonso I and Ercole II d'Este. His patron had also employed Giovanni Bellini and Titian, whose Venetian influence shaped Dossi's rich colorito and sensual modeling of forms.</p>

<p>Dossi created mythological scenes set in lush, idealized landscapes with dream-like atmospheres and striking color disharmonies. Art historian Sydney Freedberg sees his unusual proportions as expressions of Renaissance "sprezzatura" (studied carelessness). His friend, the great poet Ludovico Ariosto, celebrated him in Orlando Furioso as one of nine great living painters. His most famous work, <strong>The Sorceress Circe</strong> (c. 1530), seems almost an illustration to Ariosto's verse. A portrait at the National Gallery of Victoria was recently identified as <strong>Lucrezia Borgia</strong>. Dossi often collaborated with his younger brother Battista, who had worked under Raphael. Works hang at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, <a href="/museum/galleria-borghese"><strong>Galleria Borghese</strong></a>, and <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Dosso Dossi part of?", answer: "Dossi was the leading painter of the <a href=\"/movement/renaissance\"><strong>Ferrarese Renaissance</strong></a>, influenced by Venetian colorists like Titian and Giorgione." },
      { question: "Where can I see Dosso Dossi's paintings?", answer: "Works hang at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a>, <a href=\"/museum/galleria-borghese\"><strong>Galleria Borghese</strong></a> in Rome, and the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>." },
      { question: "Who was Dosso Dossi's patron?", answer: "He served as court artist to the <strong>Este Dukes of Ferrara</strong> from 1514 until his death, creating mythological and allegorical works." },
      { question: "What is distinctive about Dossi's style?", answer: "His paintings feature <strong>dream-like atmospheres</strong>, lush landscapes, and striking color disharmonies with eccentric proportions." },
      { question: "Which poet praised Dosso Dossi?", answer: "His friend <strong>Ludovico Ariosto</strong> celebrated him in Orlando Furioso as one of nine great living painters." }
    ]
  },

  // 23. George Frederic Watts
  {
    slug: 'george-frederick-watts',
    bioFull: `<p>Victorian <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>George Frederic Watts</strong> (1817-1904) aimed to restore allegorical painting to British art, declaring "I paint ideas, not things." Born in London to a poor piano-maker, he was apprenticed as a sculptor at ten and admitted to Royal Academy schools at eighteen. His mother's death when he was nine and brothers' deaths in 1823 gave him a lifelong obsession with mortality that permeates his allegorical works.</p>

<p>His painting <strong>Hope</strong> (1886) shows a blindfolded woman on a globe, playing a lyre with only one string remaining. Mark Bills of the Watts Gallery called it "the most famous and influential" of all his paintings and "a jewel of late 19th-century Symbolism." Martin Luther King Jr. based a sermon on it in 1959; Jeremiah Wright preached on it in 1990 to a congregation that included young Barack Obama, who took "The Audacity of Hope" as his book title. Watts also painted notable portraits for his "House of Fame" project. His works influenced Picasso's Blue Period, particularly The Old Guitarist. The <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> and Watts Gallery in Surrey hold major collections.</p>`,
    faqs: [
      { question: "What art movement was George Frederic Watts part of?", answer: "Watts was a Victorian <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> painter who declared 'I paint ideas, not things,' creating allegorical works on universal themes." },
      { question: "Where can I see Watts's painting Hope?", answer: "Versions of <strong>Hope</strong> are at the <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London and the Watts Gallery in Surrey." },
      { question: "How did Hope influence Barack Obama?", answer: "Jeremiah Wright preached on the painting to a congregation including young Obama, who took <strong>'The Audacity of Hope'</strong> as his book title." },
      { question: "What is the Watts Gallery?", answer: "The <strong>Watts Gallery</strong> in Surrey preserves the artist's home and studio, displaying a major collection of his paintings and sculptures." },
      { question: "Who did Watts influence?", answer: "His Symbolist approach influenced <strong>Pablo Picasso's Blue Period</strong>, particularly visible in The Old Guitarist (1903-04)." }
    ]
  },

  // 24. Gerrit Dou
  {
    slug: 'gerrit-dou',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Gerrit Dou</strong> (1613-1675) founded the Leiden fijnschilder tradition of small, meticulously polished paintings. Born in Leiden to a stained-glass manufacturer, he trained in his father's workshop before studying under Rembrandt from 1628 to 1631, when he was just fourteen. From Rembrandt he learned chiaroscuro and dramatic light effects, though he soon developed his own minute, elaborate style that diverged from his master's broader manner.</p>

<p>Dou was said to spend five days painting a single hand, manufacturing his own brushes for the fine work. He specialized in candlelit night scenes, genre subjects, and his signature "niche paintings" using trompe-l'oeil effects. For a time, he was the most highly acclaimed Dutch painter, even more celebrated than Rembrandt. Pieter Spiering, the Swedish ambassador, paid him 500 guilders annually just for the right of first refusal on his latest works. Queen Christina of Sweden owned eleven of his paintings; Cosimo III de' Medici visited his studio. His masterpieces include The Dropsical Woman (1663) at the <a href="/museum/louvre"><strong>Louvre</strong></a> and The Evening School at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Gerrit Dou part of?", answer: "Dou founded the <strong>Leiden fijnschilder</strong> tradition within the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, known for small, highly polished paintings with meticulous detail." },
      { question: "Where can I see Gerrit Dou's paintings?", answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> (The Dropsical Woman), the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>, and the Leiden Collection." },
      { question: "Who trained Gerrit Dou?", answer: "Dou studied under <strong>Rembrandt</strong> from 1628 to 1631, becoming his first student at age fourteen. He learned chiaroscuro but developed his own detailed style." },
      { question: "How detailed was Dou's painting technique?", answer: "Dou reportedly spent <strong>five days painting a single hand</strong> and manufactured his own brushes for the extremely fine work." },
      { question: "How famous was Dou in his lifetime?", answer: "He was the <strong>most acclaimed Dutch painter</strong> of his era, even more celebrated than Rembrandt. Queen Christina of Sweden owned eleven of his paintings." }
    ]
  },

  // 25. John Martin
  {
    slug: 'john-martin',
    bioFull: `<p>English <a href="/movement/romanticism"><strong>Romantic</strong></a> painter <strong>John Martin</strong> (1789-1854) created apocalyptic landscapes of overwhelming scale and drama. Born in a one-room cottage in Northumberland, he was apprenticed to a coachbuilder in Newcastle before moving to London. His landscapes show the ruggedness of Northumberland crags, while his apocalyptic canvases reflect familiarity with the forges and ironworks of the Tyne Valley. Thomas Lawrence called him "the most popular painter of his day."</p>

<p>His triumph <strong>Belshazzar's Feast</strong> (1820) caused a sensation; five thousand people paid to see it. The painting's influence spread widely: a print hung in the Brontë parsonage in Haworth. D.W. Griffith's Intolerance (1916) and Cecil B. DeMille's biblical epics owe a debt to Martin's grand-scale destruction scenes. His final trilogy, <strong>The Last Judgement</strong> paintings (completed 1853), ranks among his greatest works. John Ruskin criticized his dramatic style, and his reputation declined after death until 20th-century revival. The <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> holds his Last Judgement series, while Paradise Lost illustrations appear in collections worldwide.</p>`,
    faqs: [
      { question: "What art movement was John Martin part of?", answer: "Martin was an English <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> painter known for vast apocalyptic landscapes depicting biblical destruction on overwhelming scale." },
      { question: "Where can I see John Martin's paintings?", answer: "His Last Judgement trilogy is at the <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. Other works are at the Yale Center for British Art." },
      { question: "What is Martin's most famous painting?", answer: "<strong>Belshazzar's Feast</strong> (1820) caused a sensation; five thousand people paid to see it. A print hung in the Brontë parsonage." },
      { question: "Who did John Martin influence?", answer: "His visual language shaped <strong>illustrated Bibles, apocalyptic literature,</strong> and early cinema including D.W. Griffith's Intolerance and Cecil B. DeMille's epics." },
      { question: "What subjects did Martin paint?", answer: "Martin specialized in <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>apocalyptic biblical scenes</strong></a> with tiny figures dwarfed by vast, dramatic landscapes." }
    ]
  },

  // 26. Palma Vecchio
  {
    slug: 'palma-vecchio',
    bioFull: `<p><a href="/movement/venetian-school"><strong>Venetian Renaissance</strong></a> painter <strong>Palma Vecchio</strong> (c. 1480-1528), born Jacopo Palma near Bergamo, became a leading painter in Venice after the deaths of Bellini and Giorgione. His nickname "Vecchio" (the Elder) distinguishes him from his great-nephew Palma il Giovane, also a painter. He arrived in Venice by 1510 and was influenced by Giovanni Bellini, Giorgione, and especially Titian, whose dominance in Venetian colorito shaped his rich palette and sensual modeling of forms.</p>

<p>Palma painted pastoral mythologies, half-length portraits, and idealized beauties often suspected of being Venice's famous courtesans. He developed the sacra conversazione in a distinctive horizontal format with landscape backgrounds. His so-called daughter Violante modeled for many paintings and was reportedly beloved by Titian. Recently, scholars realized Titian completed a sacra conversazione that Palma left unfinished at death, overpainting figures and modifying the background; it now hangs at the <a href="/museum/gallerie-dell-accademia-venice"><strong>Gallerie dell'Accademia</strong></a>. His famous Three Sisters is at the Dresden Gallery, and his Saint Barbara altarpiece cycle remains in Venice's Santa Maria Formosa church. Works also hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement was Palma Vecchio part of?", answer: "Palma was a leading painter of the <a href=\"/movement/venetian-school\"><strong>Venetian Renaissance</strong></a>, influenced by Bellini, Giorgione, and especially Titian." },
      { question: "Where can I see Palma Vecchio's paintings?", answer: "Works hang at the <a href=\"/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice, Dresden Gallery, and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
      { question: "What connection did Palma have to Titian?", answer: "<strong>Titian</strong> completed one of Palma's unfinished paintings after his death. Palma's model Violante was reportedly Titian's beloved." },
      { question: "Why is he called 'Palma Vecchio'?", answer: "His nickname <strong>'Vecchio' (the Elder)</strong> distinguishes him from his great-nephew Palma il Giovane, also a successful Venetian painter." },
      { question: "What subjects did Palma Vecchio paint?", answer: "He painted pastoral mythologies, <strong>idealized female beauties</strong>, and religious scenes including the sacra conversazione in horizontal landscape formats." }
    ]
  },

  // 27. Wassily Kandinsky
  {
    slug: 'wassily-kandinsky',
    bioFull: `<p>Russian-born artist <strong>Wassily Kandinsky</strong> (1866-1944) was one of the first creators of pure abstraction in modern painting. Born in Moscow to a tea merchant's family, he studied law before moving to Munich at age 30 to pursue art. After encountering Monet's Haystacks at an 1896 Moscow exhibition, he realized color and form alone could carry emotional meaning. In 1911, he co-founded Der Blaue Reiter ("The Blue Rider") with Franz Marc, a pioneering <a href="/movement/expressionism"><strong>Expressionist</strong></a> movement emphasizing spiritual content and the symbolic associations of color.</p>

<p>Kandinsky believed in the spiritual power of art and the analogy between visual art and music. He called his spontaneous paintings "improvisations" and more elaborate works "compositions." His 1912 book Concerning the Spiritual in Art theorized his approach. From 1922 to 1933, he taught at the Bauhaus in Weimar and Dessau, where geometric abstraction dominated his style. When the Nazis closed the Bauhaus, he immigrated to Paris and became a French citizen. His influence on <a href="/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> was profound, directly inspiring Jackson Pollock, Mark Rothko, and others. Major works hang at the <a href="/museum/guggenheim"><strong>Guggenheim</strong></a>, <a href="/museum/moma"><strong>MoMA</strong></a>, and <a href="/museum/centre-pompidou"><strong>Centre Pompidou</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Kandinsky part of?", answer: "Kandinsky co-founded <strong>Der Blaue Reiter</strong>, a pioneering <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> movement, and became one of the first creators of pure abstract art." },
      { question: "Where can I see Kandinsky's paintings?", answer: "Major collections are at the <a href=\"/museum/guggenheim\"><strong>Solomon R. Guggenheim Museum</strong></a> in New York, <a href=\"/museum/moma\"><strong>MoMA</strong></a>, and the <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> in Paris." },
      { question: "What inspired Kandinsky to create abstract art?", answer: "Seeing <strong>Monet's Haystacks</strong> in 1896 convinced him that color and form alone could carry emotional meaning without representing objects." },
      { question: "Where did Kandinsky teach?", answer: "He taught at the <strong>Bauhaus</strong> in Weimar and Dessau from 1922-1933, where geometric abstraction dominated his work." },
      { question: "Who did Kandinsky influence?", answer: "He profoundly influenced <a href=\"/movement/abstract-expressionism\"><strong>Abstract Expressionists</strong></a> including <strong>Jackson Pollock, Mark Rothko,</strong> and Arshile Gorky." }
    ]
  },

  // 28. William Blake
  {
    slug: 'william-blake',
    bioFull: `<p>English poet, painter, and printmaker <strong>William Blake</strong> (1757-1827) was a visionary artist who claimed to receive divine inspiration from "Messengers from Heaven Daily & Nightly." Largely unrecognized in his lifetime, he's now considered a seminal figure of the <a href="/movement/romanticism"><strong>Romantic Age</strong></a>. Born in London to a hosier, he experienced visions from childhood, reportedly seeing angels in a tree at age four. He trained as an engraver and developed a unique technique of "illuminated printing" combining text and image.</p>

<p>Blake's Songs of Innocence and of Experience (1794) remains his most celebrated work, exploring "the two contrary states of the human soul" through poems like "The Lamb" and "The Tyger." He etched, printed, and hand-colored each copy with his wife Catherine. His prophetic books, including Milton and Jerusalem, created a personal mythology exploring spirituality and social critique. The "Jerusalem" lyric became a kind of second national anthem in Britain. Though dismissed as mad by contemporaries, he profoundly influenced the Beat poets, Allen Ginsberg, Bob Dylan, and Jim Morrison. His works hang at the <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, which holds the world's largest Blake collection.</p>`,
    faqs: [
      { question: "What art movement was William Blake part of?", answer: "Blake was a pioneering figure of the <a href=\"/movement/romanticism\"><strong>Romantic Age</strong></a>, combining poetry and visual art in visionary works exploring spirituality and imagination." },
      { question: "Where can I see William Blake's art?", answer: "The <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London holds the world's largest Blake collection, including paintings, prints, and illuminated books." },
      { question: "What is Blake's most famous literary work?", answer: "<strong>Songs of Innocence and of Experience</strong> (1794), including 'The Lamb' and 'The Tyger,' explores the 'two contrary states of the human soul.'" },
      { question: "What technique did Blake develop?", answer: "Blake invented <strong>'illuminated printing,'</strong> etching text and images together, then hand-coloring each copy with his wife Catherine." },
      { question: "Who did William Blake influence?", answer: "He influenced <strong>Beat poets, Allen Ginsberg, Bob Dylan,</strong> Jim Morrison, and counterculture figures who admired his visionary intensity." }
    ]
  },

  // 29. William-Adolphe Bouguereau
  {
    slug: 'william-adolphe-bouguereau',
    bioFull: `<p><a href="/movement/academic-art"><strong>Academic</strong></a> painter <strong>William-Adolphe Bouguereau</strong> (1825-1905) was considered one of the greatest painters in the world during his lifetime, commanding high prices across Europe and America. Born in La Rochelle to a wine and olive oil merchant family, he won the Prix de Rome in 1850 and spent three years at the Villa Medici studying Renaissance masters firsthand. His realistic paintings made modern interpretations of classical and mythological subjects, with emphasis on the idealized female form.</p>

<p>Bouguereau was extraordinarily prolific, producing at least 822 known paintings while rising at dawn to work six days weekly until nightfall. He became a Life Member of the Academy in 1876, received the Grand Medal of Honor in 1885, and was made Grand Officier of the Legion of Honour in 1905. From 1872, he taught at the prestigious Académie Julian, becoming known for advocating female artist training. His students included Henri Matisse, who later rebelled against his style. Bouguereau fell from favor as tastes shifted toward modernism, but a revival began in the 1980s. Works hang at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Bouguereau part of?", answer: "Bouguereau was a dominant figure of French <a href=\"/movement/academic-art\"><strong>Academic Art</strong></a>, known for polished technique and idealized mythological subjects." },
      { question: "Where can I see Bouguereau's paintings?", answer: "Works hang at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and museums worldwide." },
      { question: "How many paintings did Bouguereau create?", answer: "Bouguereau produced at least <strong>822 known paintings</strong>, working from dawn to nightfall six days weekly throughout his career." },
      { question: "Who did Bouguereau teach?", answer: "At the Académie Julian, he trained future artists including <strong>Henri Matisse</strong>, who later rebelled against Academic painting." },
      { question: "Why did Bouguereau's reputation decline?", answer: "His Academic style fell from favor as <strong>modernism</strong> rose. The avant-garde dismissed his polished technique, though a revival began in the 1980s." }
    ]
  },

  // 30. Edwin Landseer
  {
    slug: 'edwin-landseer',
    bioFull: `<p>English <a href="/movement/romanticism"><strong>Romantic</strong></a> painter <strong>Sir Edwin Landseer</strong> (1802-1873) was the most celebrated animal painter of the Victorian era. A child prodigy, he exhibited at the Royal Academy at thirteen and was elected to full membership at 29. His father, an engraver, sent young Edwin to sketch animals in fields at age five or six, believing formal education harmful to artists. He studied under Benjamin Robert Haydon, who encouraged anatomical dissection to understand animal musculature.</p>

<p>Landseer's paintings of horses, dogs, and stags became extraordinarily popular through prints engraved by his brother Thomas. He painted Queen Victoria's pets repeatedly, gave her and Prince Albert etching lessons, and was knighted in 1850. His masterpiece <strong>The Monarch of the Glen</strong> (1851), depicting a twelve-point red deer stag in Highland mist, became an icon of Scottish Romanticism. Originally commissioned for the Palace of Westminster but rejected due to cost controversies, it sold privately and passed through various collectors before the <a href="/museum/national-gallery-scotland"><strong>National Galleries of Scotland</strong></a> acquired it for £4 million in 2017. Landseer also designed the four bronze lions at the base of Nelson's Column in Trafalgar Square.</p>`,
    faqs: [
      { question: "What is Edwin Landseer best known for?", answer: "Landseer was the most celebrated Victorian <a href=\"https://luxurywallart.com/collections/dog-paintings\" target=\"_blank\" rel=\"noopener\"><strong>animal painter</strong></a>, particularly famous for his depictions of horses, dogs, and stags." },
      { question: "Where can I see The Monarch of the Glen?", answer: "<strong>The Monarch of the Glen</strong> is at the <a href=\"/museum/national-gallery-scotland\"><strong>National Galleries of Scotland</strong></a> in Edinburgh, acquired for £4 million in 2017." },
      { question: "What did Landseer create besides paintings?", answer: "Landseer designed the <strong>four bronze lions</strong> at the base of Nelson's Column in Trafalgar Square, London." },
      { question: "How young was Landseer when he first exhibited?", answer: "A child prodigy, Landseer <strong>exhibited at the Royal Academy at age 13</strong> and was elected to full membership at 29." },
      { question: "What was Landseer's connection to Queen Victoria?", answer: "He painted <strong>Queen Victoria's pets</strong> repeatedly and gave her and Prince Albert etching lessons. She knighted him in 1850." }
    ]
  }
];

async function main() {
  console.log('Starting artist updates (part 3 of 4)...');

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

  console.log('\nPart 3 complete (artists 21-30)!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
