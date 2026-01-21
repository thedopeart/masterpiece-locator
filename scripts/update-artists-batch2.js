/**
 * Update Artists Batch 2 (artists 21-40)
 * Adds bioFull and FAQs following OPTIMIZE-ARTISTS.md guidelines
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 21. Jacob van Ruisdael
  {
    slug: 'jacob-van-ruisdael',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Jacob van Ruisdael</strong> (c.1629-1682) is considered the pre-eminent landscape painter of his era. His poetic, sometimes brooding scenes transformed landscape painting from mere topography into vehicles for emotional expression. Dramatic skies often occupy two-thirds of his canvases, while twisted oaks, watermills, and ruins create melancholic atmospheres. Unlike earlier Dutch landscapists who treated trees as decorative elements, Ruisdael made them central subjects worthy of intense study.</p>

<p>Ruisdael trained with his uncle Salomon van Ruysdael in Haarlem, joining the painters' guild in 1648. A trip to Germany in 1650 gave his landscapes a more heroic character, inspiring over 150 paintings of Scandinavian-style waterfalls. He produced approximately 700 paintings, 100 drawings, and several etchings. His only registered pupil was Meindert Hobbema. Ruisdael may have practiced medicine in Amsterdam alongside painting. His influence extended to English Romantics, the French Barbizon school, and American Hudson River School painters. Masterworks hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Ruisdael part of?", answer: "Ruisdael was the leading landscape painter of the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. His emotional, atmospheric scenes influenced Romanticism and later landscape traditions." },
      { question: "Where can I see Ruisdael's paintings?", answer: "Major collections are at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>, and the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
      { question: "How many paintings did Ruisdael create?", answer: "Ruisdael produced approximately <strong>700 paintings</strong>, 100 drawings, and several etchings during his career, an impressive output for a landscape specialist." },
      { question: "What subjects did Ruisdael paint?", answer: "Ruisdael painted <strong>dramatic landscapes</strong> featuring stormy skies, twisted oaks, watermills, ruins, and over 150 Scandinavian-style waterfall scenes." },
      { question: "Who did Ruisdael influence?", answer: "Ruisdael influenced English <a href=\"/movement/romanticism\"><strong>Romantics</strong></a>, the French Barbizon school, and American <a href=\"/movement/hudson-river-school\"><strong>Hudson River School</strong></a> painters including Thomas Cole." }
    ]
  },

  // 22. Jan Steen
  {
    slug: 'jan-steen',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Jan Steen</strong> (c.1626-1679) created lively genre scenes with humor and psychological insight unmatched by his contemporaries. His rowdy households, boisterous taverns, and chaotic family gatherings are so characteristic that "a Jan Steen household" became a Dutch proverb for messy scenes. Unlike moralistic genre painters, Steen approached his subjects with comic warmth, often comparing him to playwright Moliere. He frequently included himself and family members in his paintings.</p>

<p>Steen trained under Nicolaus Knupfer, Adriaen van Ostade, and Jan van Goyen, whose daughter he married. He co-founded the Leiden painters' Guild of Saint Luke in 1648 with Gabriel Metsu. Between paintings, Steen ran a brewery called "The Snake" in Delft without much success and later opened a tavern when the art market collapsed in 1672. He produced about 800 paintings, 350 surviving, including 70 history paintings. His technical skill rivaled the Leiden "fine painters" in rendering textures. Works hang at the <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a>, the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "What did Jan Steen paint?", answer: "Steen painted <strong>lively genre scenes</strong> of rowdy households, taverns, and family gatherings with psychological insight and humor during the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>." },
      { question: "What does 'a Jan Steen household' mean?", answer: "\"A Jan Steen household\" is a <strong>Dutch proverb</strong> meaning a chaotic, messy scene, referring to the boisterous domestic scenes in his paintings." },
      { question: "Where can I see Jan Steen's paintings?", answer: "Major collections are at the <a href=\"/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague, the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>, and the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>." },
      { question: "How many paintings did Steen create?", answer: "Steen produced about <strong>800 paintings</strong>, of which roughly 350 survive, including 70 history paintings alongside his famous genre scenes." },
      { question: "Was Jan Steen only a painter?", answer: "Steen also ran a <strong>brewery</strong> called \"The Snake\" in Delft and later opened a tavern when the art market collapsed in 1672's \"Year of Disaster.\"" }
    ]
  },

  // 23. John William Godward
  {
    slug: 'john-william-godward',
    bioFull: `<p>Victorian Neo-Classicist <strong>John William Godward</strong> (1861-1922) was one of the foremost painters of the "Marble School," depicting beautiful women in Classical dress against marble architectural settings. His paintings evoke ancient Rome and Greece with meticulous attention to historical detail. Women in flowing Greco-Roman gowns posed against Mediterranean backdrops, marble terraces, and tiger-skin rugs became his trademark subjects. Godward represented the end of a 500-year tradition of Classical subject painting in Western art.</p>

<p>Godward was a protege of Sir Lawrence Alma-Tadema, following his mentor's technique and subject matter. His family disapproved of his art career, preferring he work in insurance. When he moved to Italy with a model in 1912, his family cut all contact and removed his image from family photographs. He exhibited at the Royal Academy from 1887 and gained membership in the Royal Society of British Artists in 1889. Godward's suicide note reportedly stated: "The world is not big enough for myself and a Picasso." His works hang at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <strong>British Museum</strong>, and in the collection of Andrew Lloyd Webber, who purchased Dolce far Niente for his collection.</p>`,
    faqs: [
      { question: "What art movement was Godward part of?", answer: "Godward belonged to the <strong>Victorian Neo-Classicist</strong> or \"Marble School,\" following his mentor <strong>Sir Lawrence Alma-Tadema</strong> in depicting Classical antiquity." },
      { question: "What subjects did Godward paint?", answer: "Godward specialized in <strong>beautiful women in Classical dress</strong> against marble terraces, Mediterranean landscapes, and ancient Roman architectural settings." },
      { question: "Where can I see Godward's paintings?", answer: "Works are at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <strong>British Museum</strong>, and in Andrew Lloyd Webber's collection." },
      { question: "What happened to Godward's reputation?", answer: "Godward's Classical style fell out of favor with <strong>modernism's rise</strong>. His suicide note reportedly said \"The world is not big enough for myself and a Picasso.\"" },
      { question: "Why did Godward's family reject him?", answer: "His family disapproved of his art career, preferring insurance work. When he moved to Italy with a model in 1912, they <strong>cut all contact</strong> and removed his photos from family albums." }
    ]
  },

  // 24. Michelangelo
  {
    slug: 'michelangelo',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> master <strong>Michelangelo</strong> (1475-1564) was a sculptor, painter, architect, and poet whose influence on Western art remains unmatched. Called "Il Divino" (the divine one) in his lifetime, he created works of terribilita, awe-inspiring power. Though he considered himself primarily a sculptor, his Sistine Chapel ceiling (1508-1512) and Last Judgment (1541) rank among painting's greatest achievements. His 17-foot David embodies the Renaissance ideal of perfect humanity.</p>

<p>Michelangelo apprenticed to Ghirlandaio at 13 before joining Lorenzo de' Medici's household, studying sculpture in his garden. The Pieta (1499), completed at 24, established his fame. Pope Julius II commissioned the Sistine ceiling; Michelangelo fired all assistants and painted the 65-foot ceiling alone over four years, creating over 300 figures including the iconic Creation of Adam. He designed St. Peter's Basilica dome in his final decades. Three biographies were published during his lifetime, unprecedented for an artist. His works remain in situ at the <a href="/museum/vatican-museums"><strong>Vatican Museums</strong></a>, while the David stands at Florence's <strong>Galleria dell'Accademia</strong>. He died at 88, outliving all other Renaissance masters.</p>`,
    faqs: [
      { question: "What art movement was Michelangelo part of?", answer: "Michelangelo was a giant of the High <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>, one of three masters alongside Leonardo da Vinci and Raphael who defined the era." },
      { question: "Where can I see the Sistine Chapel ceiling?", answer: "The Sistine Chapel ceiling and Last Judgment are at the <a href=\"/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in Vatican City. The chapel draws millions of visitors annually." },
      { question: "Where is Michelangelo's David?", answer: "The original 17-foot <strong>David</strong> stands at Florence's <strong>Galleria dell'Accademia</strong>. A replica stands in its original location at Piazza della Signoria." },
      { question: "How long did the Sistine Chapel take?", answer: "Michelangelo painted the Sistine ceiling over <strong>four years</strong> (1508-1512), firing all assistants and working alone on over 300 figures covering 500 square meters." },
      { question: "What was Michelangelo's primary art form?", answer: "Michelangelo considered himself primarily a <strong>sculptor</strong>. His Pieta and David demonstrate his belief that sculpture was the supreme art form, freeing figures from stone." },
      { question: "How old was Michelangelo when he died?", answer: "Michelangelo died at <strong>88 years old</strong> in 1564, outliving all other Renaissance masters. He remained active until the end, designing St. Peter's dome." }
    ]
  },

  // 25. Paul Gauguin
  {
    slug: 'paul-gauguin',
    bioFull: `<p><a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter <strong>Paul Gauguin</strong> (1848-1903) abandoned civilization for the South Pacific, seeking what he called "primitive" purity and spiritual intensity. His striking images of Polynesian women, painted in bold flat colors with symbolic meaning, influenced everything from Fauvism to Abstract Expressionism. Gauguin pioneered Synthetism, using areas of pure color for expressive purposes rather than naturalistic representation. His masterpiece Where Do We Come From? What Are We? Where Are We Going? encapsulates his philosophical and artistic vision.</p>

<p>Gauguin worked as a Parisian stockbroker before abandoning his family to pursue art. He studied under Pissarro and exhibited with the Impressionists, but broke from them in Brittany where he developed his distinctive style. His nine-week stay with Van Gogh in Arles (1888) ended dramatically. Gauguin first traveled to Tahiti in 1891, disappointed to find French colonialism had transformed his imagined paradise. He returned in 1895, remaining in the Pacific until his death. His work was unappreciated until after death; dealer Ambroise Vollard promoted him posthumously. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a>, <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, and <a href="/museum/hermitage"><strong>Hermitage</strong></a> hold major collections.</p>`,
    faqs: [
      { question: "What art movement was Gauguin part of?", answer: "Gauguin was a key figure in <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> and pioneer of <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>. He influenced Fauvism, Expressionism, and modern art broadly." },
      { question: "Where did Gauguin live and paint?", answer: "Gauguin painted in Brittany, then moved to <strong>Tahiti</strong> in 1891 and the <strong>Marquesas Islands</strong>, where he spent his final years and died in 1903." },
      { question: "What happened between Gauguin and Van Gogh?", answer: "Gauguin stayed with Van Gogh in <strong>Arles for nine weeks</strong> in 1888. Their volatile relationship ended after Van Gogh's mental breakdown and ear incident." },
      { question: "Where can I see Gauguin's paintings?", answer: "Major collections are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris, the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a>, and the <a href=\"/museum/hermitage\"><strong>Hermitage</strong></a>." },
      { question: "What was Gauguin's most famous painting?", answer: "<strong>Where Do We Come From? What Are We? Where Are We Going?</strong> (1897-98), a monumental work painted in Tahiti, is considered his philosophical and artistic masterpiece." },
      { question: "What career did Gauguin have before painting?", answer: "Gauguin worked as a successful <strong>Parisian stockbroker</strong> before abandoning his family and career to pursue art full-time in his mid-thirties." }
    ]
  },

  // 26. Piero della Francesca
  {
    slug: 'piero-della-francesca',
    bioFull: `<p>Early <a href="/movement/renaissance"><strong>Renaissance</strong></a> master <strong>Piero della Francesca</strong> (c.1415-1492) created paintings of serene humanism and geometric precision that influenced artists for centuries. Working in Tuscany and Umbria, he pioneered mathematical approaches to perspective and composition. His figures possess a monumental stillness and dignity, inhabiting carefully constructed pictorial spaces. Piero was equally renowned among contemporaries as a mathematician, writing treatises on perspective and geometry.</p>

<p>Named after his mother (his father died before his birth), Piero trained in Florence, absorbing lessons from Masaccio and Brunelleschi. His masterwork, The Legend of the True Cross fresco cycle (1452-1466) at Arezzo's Basilica of San Francesco, demonstrates his mature style. Federico da Montefeltro, Duke of Urbino, became his most important patron, commissioning the famous diptych portraits and the Brera Madonna. Piero lost his sight toward life's end and faded into obscurity until 20th-century rediscovery. His influence extends to Seurat, de Chirico, and Balthus. Works hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, the <a href="/museum/uffizi"><strong>Uffizi</strong></a>, and the <a href="/museum/pinacoteca-di-brera"><strong>Pinacoteca di Brera</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Piero della Francesca part of?", answer: "Piero was a key figure in the Early <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>, pioneering mathematical perspective and geometric composition in painting." },
      { question: "Where can I see Piero's Legend of the True Cross?", answer: "The fresco cycle is at the <strong>Basilica of San Francesco</strong> in Arezzo, Italy. It remains one of the greatest <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> fresco cycles." },
      { question: "Who was Piero's most important patron?", answer: "<strong>Federico da Montefeltro</strong>, Duke of Urbino, commissioned major works including the famous diptych portraits and the Brera Madonna altarpiece." },
      { question: "Where can I see Piero's paintings?", answer: "Works are at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/museum/uffizi\"><strong>Uffizi</strong></a>, and the <a href=\"/museum/pinacoteca-di-brera\"><strong>Pinacoteca di Brera</strong></a> in Milan." },
      { question: "Was Piero della Francesca a mathematician?", answer: "Piero was equally known as a <strong>mathematician</strong>, writing treatises on perspective and geometry. His mathematical approach shaped his precisely constructed paintings." }
    ]
  },

  // 27. Pierre Bonnard
  {
    slug: 'pierre-bonnard',
    bioFull: `<p><a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter <strong>Pierre Bonnard</strong> (1867-1947) was one of the greatest colorists in modern art. A founding member of Les Nabis, he created intimate domestic scenes bathed in warm, vibrant light. His paintings of interiors, gardens, and his wife Marthe in the bathtub capture everyday life with shimmering color harmonies. Japanese prints influenced his early work's flat areas and decorative compositions, earning him the nickname "the very Japanese Nabi."</p>

<p>Bonnard studied law briefly before training at the Ecole des Beaux-Arts and Academie Julian, where he met future Nabis members. His first commercial success came with a France-Champagne poster. He lived with Marthe for 32 years before marrying her in 1925; she appears in hundreds of his paintings. Visits to southern France from 1909 intensified his palette ("this colour that drives one wild"). Matisse defended him against critics: "Bonnard is a great artist for our time and, naturally, for posterity." His final painting, The Almond Tree in Blossom, was finished a week before his death. Major works hang at the <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a>, the <a href="/museum/tate-modern"><strong>Tate</strong></a>, and the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Bonnard part of?", answer: "Bonnard co-founded <strong>Les Nabis</strong> and is considered a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a>. His intimate domestic scenes place him among Intimism's greatest practitioners." },
      { question: "What subjects did Bonnard paint?", answer: "Bonnard painted <strong>domestic interiors</strong>, gardens, and numerous images of his wife Marthe bathing. His shimmering colors capture everyday life's warmth and intimacy." },
      { question: "Where can I see Bonnard's paintings?", answer: "Major collections are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris, the <a href=\"/museum/tate-modern\"><strong>Tate</strong></a>, and the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a>." },
      { question: "Who was Marthe in Bonnard's paintings?", answer: "<strong>Marthe</strong> (Maria Boursin) was Bonnard's companion and later wife. She appears in hundreds of paintings, often in the bathtub, throughout their 50-year relationship." },
      { question: "What influenced Bonnard's style?", answer: "<strong>Japanese prints</strong> heavily influenced Bonnard's flat areas of color and decorative compositions. His nickname was \"the very Japanese Nabi.\"" }
    ]
  },

  // 28. Caravaggio
  {
    slug: 'caravaggio',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> revolutionary <strong>Caravaggio</strong> (1571-1610) transformed painting with his dramatic tenebrism, using extreme contrasts of light and shadow to create theatrical, emotionally charged images. He depicted religious subjects with unprecedented realism, using common people as models rather than idealized figures. His influence spread across Europe through followers called "Caravaggisti." Art historian Andre Berne-Joffroy stated: "What begins in the work of Caravaggio is, quite simply, modern painting."</p>

<p>Caravaggio trained in Milan before arriving in Rome in his early twenties. Cardinal Francesco Maria del Monte became his crucial patron, housing him at Palazzo Madama (1597-1601). His Contarelli Chapel paintings established his reputation. Violent and temperamental, Caravaggio killed Ranuccio Tomassoni in 1606, fleeing to Naples, Malta, and Sicily as an outlaw with a price on his head. In Malta, he became a Knight of St. John before being expelled. He died mysteriously at 38 under uncertain circumstances. His masterpieces remain in situ at Roman churches including San Luigi dei Francesi, while the <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and St. John's Co-Cathedral in Malta hold major works.</p>`,
    faqs: [
      { question: "What art movement did Caravaggio pioneer?", answer: "Caravaggio was a revolutionary <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter who invented tenebrism, using dramatic light-dark contrasts that influenced European painting for decades." },
      { question: "Where can I see Caravaggio's paintings in Rome?", answer: "Major works are at <strong>San Luigi dei Francesi</strong> (The Calling of Saint Matthew) and <strong>Santa Maria del Popolo</strong>. The <strong>Galleria Borghese</strong> holds six paintings." },
      { question: "Why did Caravaggio flee Rome?", answer: "Caravaggio <strong>killed Ranuccio Tomassoni</strong> in a brawl in 1606. Pope Paul V declared him an outlaw, meaning anyone could kill him for a reward." },
      { question: "What happened to Caravaggio in Malta?", answer: "Caravaggio became a <strong>Knight of St. John</strong> in Malta despite being a murderer. He painted his masterpiece The Beheading of Saint John the Baptist there before being expelled." },
      { question: "Who were the Caravaggisti?", answer: "<strong>Caravaggisti</strong> were followers who adopted Caravaggio's dramatic lighting. They included artists like Ribera, Artemisia Gentileschi, and influenced Rubens, Velazquez, and Rembrandt." },
      { question: "How did Caravaggio die?", answer: "Caravaggio died mysteriously at <strong>38</strong> in 1610. Theories include murder, fever, lead poisoning, or the effects of a violent attack in Naples." }
    ]
  },

  // 29. Edouard Manet
  {
    slug: 'edouard-manet',
    bioFull: `<p>French painter <strong>Edouard Manet</strong> (1832-1883) bridged Realism and <a href="/movement/impressionism"><strong>Impressionism</strong></a>, becoming what many consider the father of modernism. His bold, flat areas of color and contemporary subjects shocked the Paris art establishment. Olympia and Le Dejeuner sur l'herbe caused scandals at the Salon for their unflinching modernity, depicting real women rather than mythological figures. Manet transformed Velazquez's Spanish traditions into something radically new.</p>

<p>Born to an affluent family (his mother was goddaughter of the Swedish Crown Prince), Manet trained under Thomas Couture while studying Old Masters at the Louvre, particularly Velazquez, whom he called "the painter of painters." The Salon rejected Le Dejeuner in 1863; it appeared at the Salon des Refuses instead. Novelist Emile Zola championed his work. Though the spiritual father of Impressionism, Manet refused to exhibit with them, seeking traditional Salon honors. He befriended Monet, Degas, and Renoir through Berthe Morisot. He died at 51 from complications of syphilis. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> holds Olympia and Le Dejeuner; the <a href="/museum/courtauld-gallery-london"><strong>Courtauld Gallery</strong></a> owns A Bar at the Folies-Bergere.</p>`,
    faqs: [
      { question: "What art movement was Manet part of?", answer: "Manet bridged Realism and <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, considered the father of modernism. He never exhibited with the Impressionists despite being their spiritual leader." },
      { question: "Why was Olympia scandalous?", answer: "<strong>Olympia</strong> depicted a real <strong>Parisian prostitute</strong> rather than a mythological Venus, staring directly at viewers. Critics attacked its modernity and unflinching honesty." },
      { question: "Where can I see Manet's paintings?", answer: "Major works are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris. The <a href=\"/museum/courtauld-gallery-london\"><strong>Courtauld Gallery</strong></a> in London holds A Bar at the Folies-Bergere." },
      { question: "Who championed Manet's work?", answer: "Novelist <strong>Emile Zola</strong> defended Manet in print, predicting his works would hang in the Louvre. It took 70 years, but Zola proved correct." },
      { question: "What influenced Manet's style?", answer: "Manet worshipped <strong>Velazquez</strong>, calling him \"the painter of painters.\" Spanish masters and Old Masters at the Louvre shaped his bold, direct approach." },
      { question: "What are Manet's most famous paintings?", answer: "<strong>Olympia</strong>, <strong>Le Dejeuner sur l'herbe</strong>, and <strong>A Bar at the Folies-Bergere</strong> are his masterpieces, each revolutionary in depicting modern Parisian life." }
    ]
  },

  // 30. Gustave Moreau
  {
    slug: 'gustave-moreau',
    bioFull: `<p>French <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Gustave Moreau</strong> (1826-1898) created erotic, mystical paintings of mythological and biblical subjects that defined the movement. His images of Salome, Oedipus, and other figures combine exotic eroticism with violence, rendering women from ancient texts as archetypal "symbolist women." Rich, jewel-like colors and intricate detail characterize his visionary works. Andre Breton, founder of Surrealism, haunted his museum and called him a precursor of Surrealism.</p>

<p>Moreau trained academically at the Ecole des Beaux-Arts, but his mentor Theodore Chasseriau's early death in 1856 deeply affected him. A trip to Italy (1857-1859) produced hundreds of Old Master studies. His breakthrough came with Oedipus and the Sphinx at the 1864 Salon. Despite producing nearly 1,200 paintings and 10,000 drawings, Moreau showed rarely. From 1891-1898, he taught at the Ecole des Beaux-Arts, mentoring future masters including Matisse and Georges Rouault without imposing his style. He converted his townhouse into a museum before death, bequeathing it to France. The <a href="/museum/musee-gustave-moreau"><strong>Musee Gustave Moreau</strong></a> in Paris holds nearly his complete works. Other paintings hang at the <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> and major museums worldwide.</p>`,
    faqs: [
      { question: "What art movement was Moreau part of?", answer: "Moreau was a major figure in French <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>, creating mystical, erotic paintings of mythological subjects. He also influenced <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a>." },
      { question: "Where can I see Moreau's paintings?", answer: "The <a href=\"/museum/musee-gustave-moreau\"><strong>Musee Gustave Moreau</strong></a> in Paris holds nearly 1,200 paintings and 10,000 drawings in his former home, bequeathed to France." },
      { question: "What subjects did Moreau paint?", answer: "Moreau painted <strong>mythological and biblical subjects</strong> including Salome, Oedipus, and other figures combining exotic eroticism with violence in richly detailed imagery." },
      { question: "Who were Moreau's famous students?", answer: "As a teacher, Moreau mentored <strong>Henri Matisse</strong> and <strong>Georges Rouault</strong> at the Ecole des Beaux-Arts without imposing his style on them." },
      { question: "What is Moreau's most famous painting?", answer: "<strong>Oedipus and the Sphinx</strong> (1864) and multiple versions of <strong>Salome</strong> and <strong>The Apparition</strong> are his most celebrated works." }
    ]
  },

  // 31. John William Waterhouse
  {
    slug: 'john-william-waterhouse',
    bioFull: `<p>English painter <strong>John William Waterhouse</strong> (1849-1917) created romantic depictions of women from Greek mythology and Arthurian legend in the <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> tradition. His large-scale paintings featuring the Lady of Shalott, Ophelia, and classical nymphs combine Pre-Raphaelite literary interest with Impressionist brushwork. Beautiful young women in historical costumes against landscape or architectural settings became his signature, continuing the Victorian classical tradition into the early 20th century.</p>

<p>Born in Rome to English artist parents, Waterhouse grew up sketching at the British Museum and National Gallery. He entered the Royal Academy school in 1871, initially studying sculpture before turning to painting. Early work showed influence from Alma-Tadema and Leighton. He became an Associate of the Royal Academy in 1885 and full Academician in 1895. Waterhouse painted three versions of both The Lady of Shalott and Ophelia. His Hylas and the Nymphs (1896), recently controversial when briefly removed from display, is considered his masterpiece. Works hang at <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, the <a href="/museum/manchester-art-gallery"><strong>Manchester Art Gallery</strong></a>, and the Lady Lever Art Gallery. He continued painting despite illness until his death from cancer.</p>`,
    faqs: [
      { question: "What art movement was Waterhouse part of?", answer: "Waterhouse worked in the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> tradition, combining their literary subjects with a more Impressionistic brushwork." },
      { question: "Where can I see The Lady of Shalott?", answer: "The famous 1888 version of <strong>The Lady of Shalott</strong> hangs at <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. Waterhouse painted three versions of this subject." },
      { question: "What subjects did Waterhouse paint?", answer: "Waterhouse painted <strong>mythological and literary subjects</strong>, particularly women from Greek mythology, Arthurian legend, and Shakespeare like Ophelia." },
      { question: "Where is Hylas and the Nymphs?", answer: "<strong>Hylas and the Nymphs</strong> (1896), considered his masterpiece, hangs at the <a href=\"/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a> in England." },
      { question: "What is Waterhouse's most famous painting?", answer: "<strong>The Lady of Shalott</strong> (1888) and <strong>Hylas and the Nymphs</strong> (1896) are his most celebrated works, both featuring beautiful women in mythological settings." }
    ]
  },

  // 32. Lawrence Alma-Tadema
  {
    slug: 'lawrence-alma-tadema',
    bioFull: `<p>Dutch-British painter <strong>Sir Lawrence Alma-Tadema</strong> (1836-1912) created lavish depictions of life in ancient Rome and Greece that earned him the nickname "the marbellous artist" from Punch magazine. His languorous figures in fabulous marbled interiors against Mediterranean backdrops with dazzling blue sea and sky became Victorian favorites. Meticulous archaeological accuracy distinguished his work; he researched every detail of Roman domestic life. His paintings influenced Hollywood's vision of antiquity.</p>

<p>Alma-Tadema studied at the Royal Academy of Antwerp before assisting painter Henri Leys with frescoes. Originally focused on Merovingian and Egyptian subjects, a honeymoon trip to Pompeii in 1864 transformed his art toward Roman subjects. Moving to London in 1870, he became a British citizen in 1873. Sir John Aird commissioned The Roses of Heliogabalus for 4,000 pounds; Alma-Tadema had fresh rose petals shipped weekly from the Riviera for months while painting. He was knighted in 1899. His reputation collapsed after death until 1960s revival. The <a href="/museum/met"><strong>Metropolitan Museum</strong></a> holds Spring, while The Roses of Heliogabalus belongs to collector Juan Antonio Perez Simon.</p>`,
    faqs: [
      { question: "What art movement was Alma-Tadema part of?", answer: "Alma-Tadema belonged to <strong>Victorian classicism</strong> and <a href=\"/movement/academic-art\"><strong>Academic art</strong></a>, creating archaeologically accurate scenes of ancient Rome and Greece." },
      { question: "What did Alma-Tadema paint?", answer: "Alma-Tadema painted <strong>life in ancient Rome</strong>: marble interiors, Mediterranean settings, and languorous figures, earning him the nickname \"the marbellous artist.\"" },
      { question: "Where is The Roses of Heliogabalus?", answer: "<strong>The Roses of Heliogabalus</strong> belongs to Spanish-Mexican collector Juan Antonio Perez Simon's private collection. It occasionally appears in exhibitions." },
      { question: "Did Alma-Tadema influence Hollywood?", answer: "Alma-Tadema's Roman scenes influenced Hollywood's vision of antiquity. Films like <strong>Gladiator</strong> and Cecil B. DeMille's Cleopatra drew design inspiration from his paintings." },
      { question: "How accurate were Alma-Tadema's paintings?", answer: "Alma-Tadema was <strong>meticulously accurate</strong>, researching every archaeological detail. He had fresh rose petals shipped from the Riviera for months while painting The Roses of Heliogabalus." }
    ]
  },

  // 33. Pierre-Auguste Renoir
  {
    slug: 'pierre-auguste-renoir',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> master <strong>Pierre-Auguste Renoir</strong> (1841-1919) celebrated life's pleasures with vibrant light, saturated color, and joyful scenes of Parisian leisure. His intimate compositions focus on people, particularly the female nude, which remained his primary subject throughout his career. Broken brushstrokes and bold combinations of complementary colors capture light, movement, and sensuous beauty. Dance at Le Moulin de la Galette and Luncheon of the Boating Party rank among Impressionism's greatest achievements.</p>

<p>Renoir began as a porcelain painter at 13 before studying under Charles Gleyre, where he met Monet, Bazille, and Sisley. He participated in the first Impressionist exhibition in 1874. His portrait of Madame Charpentier brought fashionable success in 1878. A trip to Italy in 1881 prompted a more classical, linear style. Despite crippling arthritis that forced him to paint with brushes tied to his wrists, Renoir continued working until his death. His wife Aline Charigot appears in many paintings, including Luncheon of the Boating Party. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> holds major works, while Luncheon hangs at the <a href="/museum/phillips-collection"><strong>Phillips Collection</strong></a> in Washington.</p>`,
    faqs: [
      { question: "What art movement was Renoir part of?", answer: "Renoir was a leading <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a>, participating in their first 1874 exhibition alongside Monet, Degas, and other founding members." },
      { question: "Where is Luncheon of the Boating Party?", answer: "<strong>Luncheon of the Boating Party</strong> (1880-81) hangs at the <a href=\"/museum/phillips-collection\"><strong>Phillips Collection</strong></a> in Washington, D.C., the museum's most famous work." },
      { question: "What subjects did Renoir paint?", answer: "Renoir celebrated <strong>Parisian leisure</strong>: dance halls, cafes, bathers, and the female nude. His sensuous treatment of light and color defined Impressionist joie de vivre." },
      { question: "Did Renoir suffer from arthritis?", answer: "Severe <strong>rheumatoid arthritis</strong> crippled Renoir's hands in later life. He continued painting with brushes tied to his wrists until his death at 78." },
      { question: "Where can I see Renoir's paintings?", answer: "Major works are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris. The <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> and <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> hold important collections." },
      { question: "What are Renoir's most famous paintings?", answer: "<strong>Dance at Le Moulin de la Galette</strong> (1876) and <strong>Luncheon of the Boating Party</strong> (1880-81) are his masterpieces, both depicting joyful Parisian social scenes." }
    ]
  },

  // 34. Berthe Morisot
  {
    slug: 'berthe-morisot',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> painter <strong>Berthe Morisot</strong> (1841-1895) was the first woman to join the movement and exhibited in all but one of their eight exhibitions. Her luminous, elegant paintings capture women and children in domestic settings, on terraces, and in gardens. Flickering brushstrokes, light palettes, and a focus on private life distinguish her intimate scenes. She approached subjects inaccessible to her male colleagues, offering unique perspectives on 19th-century bourgeois femininity.</p>

<p>Born to an affluent family (her great-great-uncle was the Rococo painter Fragonard), Morisot received private art lessons and studied under Barbizon master Camille Corot. She met Edouard Manet in 1868, becoming his model and marrying his brother Eugene in 1874. Her masterpiece The Cradle (1872) depicts her sister Edma with infant daughter Blanche. Summer's Day captures women boating in the Bois de Boulogne. She died of pneumonia at 54 while nursing her sick daughter Julie. After her death, Renoir, Monet, and Degas organized a memorial exhibition of 400 works. The <a href="/museum/musee-dorsay"><strong>Musee d'Orsay</strong></a> holds The Cradle, while Summer's Day hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement was Morisot part of?", answer: "Morisot was a founding member of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, the first woman to join the group. She exhibited in seven of eight Impressionist exhibitions." },
      { question: "What subjects did Morisot paint?", answer: "Morisot painted <strong>domestic scenes</strong>: women and children in interiors, gardens, and on terraces. Her intimate subjects offered perspectives her male colleagues couldn't access." },
      { question: "Where can I see The Cradle?", answer: "Morisot's masterpiece <strong>The Cradle</strong> (1872) hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> in Paris, depicting her sister Edma with her infant daughter." },
      { question: "What was Morisot's connection to Manet?", answer: "Morisot met <strong>Edouard Manet</strong> in 1868, becoming his model. She married his brother Eugene in 1874 and remained close to the Impressionist circle." },
      { question: "Where can I see Morisot's paintings?", answer: "Major works are at the <a href=\"/museum/musee-dorsay\"><strong>Musee d'Orsay</strong></a> and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, which holds Summer's Day." }
    ]
  },

  // 35. Camille Corot
  {
    slug: 'camille-corot',
    bioFull: `<p>French painter <strong>Jean-Baptiste-Camille Corot</strong> (1796-1875) was a pivotal figure bridging Neo-Classicism and <a href="/movement/impressionism"><strong>Impressionism</strong></a>. His plein air innovations and mastery of tonal relationships influenced generations of landscape painters. Claude Monet declared in 1897: "There is only one master here - Corot. We are nothing compared to him." His "Souvenirs," imagined landscapes composed of standardized motifs, became his later signature. He produced over 3,000 works in his lifetime.</p>

<p>Son of successful Parisian shopkeepers, Corot worked as a draper until age 26 when his father allowed him to pursue art with a yearly allowance. He studied under Neoclassical landscape painters Achille-Etna Michallon and Jean-Victor Bertin. Three trips to Italy proved foundational, with his Italian sketches influencing his entire career. He became a leading figure of the Barbizon School, befriending Rousseau, Millet, and Daubigny. Corot taught Berthe Morisot and mentored Pissarro. Degas preferred his figures to his landscapes. The <a href="/museum/louvre"><strong>Louvre</strong></a> holds major works including Souvenir de Mortefontaine, while paintings appear in the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> and <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Corot part of?", answer: "Corot led the <strong>Barbizon School</strong> and bridged Neo-Classicism to <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. Monet called him \"the only master.\"" },
      { question: "Who did Corot teach?", answer: "Corot taught <strong>Berthe Morisot</strong> and mentored <strong>Camille Pissarro</strong>. His plein air techniques influenced all the Impressionists." },
      { question: "Where can I see Corot's paintings?", answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>, and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
      { question: "How many paintings did Corot create?", answer: "Corot produced over <strong>3,000 paintings</strong> during his career, from Italian sketches to his famous silver-toned \"Souvenirs\" landscapes." },
      { question: "What are Corot's Souvenirs?", answer: "Corot's <strong>Souvenirs</strong> were imagined landscapes composed of standardized motifs, creating dreamlike, silver-toned scenes from memory rather than direct observation." }
    ]
  },

  // 36. Fra Angelico
  {
    slug: 'fra-angelico',
    bioFull: `<p>Early <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Fra Angelico</strong> (c.1395-1455) created some of the most serene and spiritually moving religious works in Western art. A Dominican friar who painted only sacred subjects, he combined medieval devotion with Renaissance innovations in perspective and spatial depth. His luminous colors and gentle figures convey profound faith. Giorgio Vasari praised him, noting that one could not paint such works without being a saint.</p>

<p>Born Guido di Pietro, he became a Dominican friar between 1420-1422, taking the name Fra Giovanni da Fiesole at San Domenico in Fiesole. With patron Cosimo de' Medici's support, he created over 50 works for the convent of San Marco in Florence, including the famous Annunciation fresco. His frescoes for Pope Nicholas V at the Vatican followed. Angelico pioneered techniques that paralleled Masaccio's achievements. He was buried in Rome's Santa Maria sopra Minerva in a marble tomb near the altar, rare honor for an artist. Pope John Paul II beatified him in 1982 and declared him patron of Catholic artists in 1984. His works remain at the <a href="/museum/museo-di-san-marco"><strong>Museo di San Marco</strong></a> in Florence and the <a href="/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Fra Angelico part of?", answer: "Fra Angelico was an Early <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> painter, pioneering perspective techniques while maintaining the spiritual devotion of medieval art." },
      { question: "Where can I see Fra Angelico's frescoes?", answer: "His masterworks are at the <a href=\"/museum/museo-di-san-marco\"><strong>Museo di San Marco</strong></a> in Florence, the former convent where he painted over 50 frescoes." },
      { question: "Was Fra Angelico a monk?", answer: "Fra Angelico was a <strong>Dominican friar</strong> who painted only religious subjects. He took his vows between 1420-1422 at San Domenico in Fiesole." },
      { question: "Is Fra Angelico a saint?", answer: "Pope John Paul II <strong>beatified</strong> Fra Angelico in 1982 and declared him patron saint of Catholic artists in 1984." },
      { question: "What are Fra Angelico's most famous works?", answer: "The <strong>Annunciation</strong> fresco at San Marco and the <strong>Coronation of the Virgin</strong> are his most celebrated works, demonstrating his serene, luminous style." }
    ]
  },

  // 37. Francis Picabia
  {
    slug: 'francis-picabia',
    bioFull: `<p>French avant-garde artist <strong>Francis Picabia</strong> (1879-1953) was one of the principal figures of <a href="/movement/cubism"><strong>Cubism</strong></a>, Dada, and <a href="/movement/surrealism"><strong>Surrealism</strong></a>, known as "Papa Dada" for his founding role in the movement. His inventiveness, absurdist humor, and constant stylistic changes made him impossible to categorize. From Orphic Cubism to "mechanomorphic" drawings satirizing human relationships through machine imagery, Picabia constantly reinvented himself, eventually abandoning the art establishment entirely.</p>

<p>Born to a French mother and Cuban-Spanish father, Picabia grew up wealthy and studied at the Ecole des Arts Decoratifs alongside Marie Laurencin and Georges Braque. Guillaume Apollinaire included him in The Cubist Painters (1913) as representing "Orphism." He traveled to New York in 1915, developing American Dada with Duchamp and Man Ray. From 1917-1924, he edited the journal 391, publishing Dadaist work. In 1921, he renounced Dada, claiming it had "lost its capacity to shock." His Transparency paintings layered disparate imagery. The <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, <a href="/museum/guggenheim"><strong>Guggenheim</strong></a>, and <a href="/museum/tate-modern"><strong>Tate</strong></a> hold major collections.</p>`,
    faqs: [
      { question: "What art movements was Picabia part of?", answer: "Picabia moved through <a href=\"/movement/cubism\"><strong>Cubism</strong></a>, <strong>Dada</strong>, and <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a>, constantly changing styles and eventually abandoning the art establishment." },
      { question: "Why was Picabia called Papa Dada?", answer: "Picabia was a <strong>founding figure of Dada</strong> in both Paris and New York, earning him the nickname \"Papa Dada\" for his central role in the movement." },
      { question: "Where can I see Picabia's paintings?", answer: "Major works are at the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a>, the <a href=\"/museum/guggenheim\"><strong>Guggenheim</strong></a> in New York, and the <a href=\"/museum/tate-modern\"><strong>Tate</strong></a> in London." },
      { question: "What was Picabia's journal 391?", answer: "Picabia edited <strong>391</strong> from 1917-1924, publishing Dadaist work by Tzara, Duchamp, and Breton. The name parodied Stieglitz's gallery 291." },
      { question: "What are mechanomorphic drawings?", answer: "Picabia's <strong>mechanomorphic</strong> drawings depicted humans as machine parts, satirizing relationships and emotion through industrial imagery." }
    ]
  },

  // 38. Georges Seurat
  {
    slug: 'georges-seurat',
    bioFull: `<p><a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> pioneer <strong>Georges Seurat</strong> (1859-1891) invented Pointillism, a revolutionary technique applying tiny dots of pure color that blend optically when viewed from a distance. His monumental Sunday Afternoon on the Island of La Grande Jatte (1884-1886) took nearly two years to complete and altered the course of modern art. Seurat combined scientific color theory with classical composition, creating structured alternatives to Impressionism's spontaneity.</p>

<p>Seurat studied at the Ecole des Beaux-Arts under Henri Lehmann before leaving due to frustration with academic methods. He spent a year on military service at Brest, then returned to Paris to develop his theories. His first major work, Bathers at Asnieres (1883-84), established his approach. When La Grande Jatte appeared at the 1886 Impressionist exhibition, critic Felix Feneon coined the term "Neo-Impressionism." Seurat died mysteriously at just 31, possibly of meningitis, leaving The Circus unfinished. La Grande Jatte hangs at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, while Bathers is at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement did Seurat pioneer?", answer: "Seurat pioneered <strong>Neo-Impressionism</strong> and invented <strong>Pointillism</strong>, a technique of applying tiny dots of pure color that blend optically." },
      { question: "Where is A Sunday on La Grande Jatte?", answer: "<strong>A Sunday Afternoon on the Island of La Grande Jatte</strong> hangs at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>, the museum's most famous painting." },
      { question: "How long did La Grande Jatte take to paint?", answer: "Seurat spent nearly <strong>two years</strong> (1884-1886) completing La Grande Jatte, his masterpiece that revolutionized painting technique." },
      { question: "How old was Seurat when he died?", answer: "Seurat died at just <strong>31 years old</strong> in 1891, possibly of meningitis. His brief career of barely a decade nonetheless transformed modern art." },
      { question: "Where can I see Seurat's paintings?", answer: "Major works are at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> and the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, which holds Bathers at Asnieres." }
    ]
  },

  // 39. Jacques-Louis David
  {
    slug: 'jacques-louis-david',
    bioFull: `<p><a href="/movement/neoclassicism"><strong>Neoclassical</strong></a> master <strong>Jacques-Louis David</strong> (1748-1825) dominated French painting for decades, shifting art from Rococo frivolity toward classical austerity. His history paintings intended as moral exemplars: The Oath of the Horatii (1784) and Death of Socrates (1787) embody civic virtue and sacrifice. As painter during the French Revolution and Napoleon's reign, David created iconic images of both the Terror and Empire, including The Death of Marat and The Coronation of Napoleon.</p>

<p>David initially studied under Francois Boucher before winning the Prix de Rome in 1774. Years in Italy studying antiquity transformed his style. Returning to Paris, he became a member of the Academy in 1783. During the Revolution, David was a friend of Robespierre and effectively "dictator of the arts." Napoleon appointed him "First Painter to the Emperor" in 1804. After Waterloo, David exiled himself to Brussels, remaining there until death. He trained hundreds of young painters, including Ingres and Gros. The <a href="/museum/louvre"><strong>Louvre</strong></a> holds The Oath of the Horatii and The Coronation of Napoleon; The Death of Marat is at the <strong>Royal Museums of Fine Arts of Belgium</strong>.</p>`,
    faqs: [
      { question: "What art movement was David part of?", answer: "David was the leading painter of <a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a>, shifting French art from Rococo toward classical austerity and moral seriousness." },
      { question: "What role did David play in the French Revolution?", answer: "David was a <strong>Revolutionary leader</strong>, friend of Robespierre, and effectively \"dictator of the arts.\" He painted The Death of Marat and organized Revolutionary festivals." },
      { question: "Where can I see David's paintings?", answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, including The Oath of the Horatii and The Coronation of Napoleon." },
      { question: "Who were David's famous students?", answer: "David trained hundreds of painters, including <strong>Jean-Auguste-Dominique Ingres</strong>, Antoine-Jean Gros, and Francois Gerard, shaping French painting for generations." },
      { question: "What are David's most famous paintings?", answer: "<strong>The Oath of the Horatii</strong> (1784), <strong>The Death of Marat</strong> (1793), and <strong>The Coronation of Napoleon</strong> (1807) are his masterpieces." },
      { question: "What happened to David after Napoleon?", answer: "After Napoleon's defeat at Waterloo, David <strong>exiled himself to Brussels</strong>, remaining there until his death in 1825 rather than live under the restored monarchy." }
    ]
  },

  // 40. Jan van Eyck
  {
    slug: 'jan-van-eyck',
    bioFull: `<p>Flemish painter <strong>Jan van Eyck</strong> (c.1390-1441) perfected oil painting techniques that brought unprecedented realism to Early <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> art. His minutely detailed depictions of surface effects, natural light, and material textures had never been achieved before. Van Eyck's ability to manipulate translucent oil glazes created luminous effects that revolutionized painting. The Ghent Altarpiece and Arnolfini Portrait demonstrate his supreme mastery.</p>

<p>Already a master with workshop assistants by 1422, van Eyck served as court painter to John III the Pitiless before joining Philip the Good, Duke of Burgundy, in 1425. He was exceptionally well paid; his salary doubled twice in his first years and was often supplemented by bonuses. Van Eyck was the only 15th-century Netherlandish painter to sign his panels, often with his motto "ALS ICH KAN" (As I Can), a pun on his name. The Arnolfini Portrait's convex mirror reflects two figures entering the room, possibly including van Eyck himself, with his prominent signature reading "Jan van Eyck was here." The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London holds the Arnolfini Portrait, while the Ghent Altarpiece remains at <a href="/museum/saint-bavo-cathedral"><strong>Saint Bavo's Cathedral</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was van Eyck part of?", answer: "Van Eyck was a supreme figure of the Early <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, revolutionizing oil painting techniques in Flanders." },
      { question: "Did van Eyck invent oil painting?", answer: "Van Eyck didn't invent oil painting but <strong>perfected the technique</strong>, using translucent glazes to achieve unprecedented luminosity and realistic detail." },
      { question: "Where is the Arnolfini Portrait?", answer: "The <strong>Arnolfini Portrait</strong> (1434) hangs at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London, famous for its mirror showing figures entering the room." },
      { question: "Where is the Ghent Altarpiece?", answer: "The <strong>Ghent Altarpiece</strong> remains at <a href=\"/museum/saint-bavo-cathedral\"><strong>Saint Bavo's Cathedral</strong></a> in Ghent, Belgium, where it has been since 1432." },
      { question: "What was van Eyck's motto?", answer: "Van Eyck signed works with the motto <strong>\"ALS ICH KAN\"</strong> (As I Can), a pun on his name. He was the only 15th-century Netherlandish painter to sign his panels." },
      { question: "Who was van Eyck's patron?", answer: "<strong>Philip the Good, Duke of Burgundy</strong>, employed van Eyck as court painter from 1425. Van Eyck was exceptionally well paid, with his salary doubled twice." }
    ]
  }
];

async function main() {
  console.log('Starting artist updates batch 2 (artists 21-40)...');

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

  console.log('\nBatch 2 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
