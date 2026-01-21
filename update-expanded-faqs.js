const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const expandedFaqs = {
  'perugino': [
    {
      question: "What art movement was Perugino part of?",
      answer: "Perugino was a leading <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter of the Umbrian school whose graceful figures and harmonious compositions anticipated High Renaissance ideals. At the height of his career around 1502, he was called 'the best painter in Italy,' though his fame would later be overshadowed by his students."
    },
    {
      question: "Where can I see Perugino's paintings?",
      answer: "His Sistine Chapel frescoes remain in situ at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>. The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London and the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi</strong></a> in Florence hold major panel paintings. His hometown of Perugia also preserves significant works in its Galleria Nazionale dell'Umbria."
    },
    {
      question: "What is Perugino's most famous fresco?",
      answer: "<strong>Christ Giving the Keys to St. Peter</strong> in the Sistine Chapel, completed between 1481 and 1482, stands as his masterwork. The fresco's lucid spatial arrangement and carefully organized figures demonstrate his mastery of perspective. Raphael would later use this composition as direct inspiration for his own Marriage of the Virgin."
    },
    {
      question: "Who was Perugino's most famous student?",
      answer: "<strong>Raphael</strong> worked in Perugino's studio from around 1500, absorbing his teacher's graceful figuration and handling of deep, open <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. Art historians note that probably no other pupil of genius ever absorbed so much of his master's teaching. Raphael took Perugino's style forward while surpassing it."
    },
    {
      question: "What happened to Perugino's altar fresco?",
      answer: "His Assumption of the Virgin on the Sistine Chapel's altar wall was completely <strong>destroyed by Michelangelo's Last Judgment</strong> between 1536 and 1541. Pope Clement VII ordered Michelangelo to cover the earlier frescoes, erasing Perugino's work along with paintings by other artists who had decorated that wall."
    }
  ],

  'giotto': [
    {
      question: "Why is Giotto important in art history?",
      answer: "Giotto broke decisively from <strong>Byzantine flatness</strong> toward naturalistic representation, initiating the path to the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. He introduced realistic facial expressions, three-dimensional space, and authentic human emotion into painting. Art historian Cecilia Martini calls the Scrovegni Chapel 'a pillar, the beginning of the Renaissance.' He's rightly considered the father of Western painting."
    },
    {
      question: "Where can I see Giotto's frescoes?",
      answer: "Giotto's masterwork covers the walls of the <a href=\"/apps/masterpieces/museum/scrovegni-chapel\"><strong>Scrovegni Chapel</strong></a> in Padua, now a UNESCO World Heritage Site since 2021. The Basilica of Saint Francis in Assisi contains his Life of St. Francis cycle, and Santa Croce in Florence holds several important frescoes, though some are damaged."
    },
    {
      question: "What are Giotto's most famous works?",
      answer: "The <strong>Scrovegni Chapel frescoes</strong> (c.1303-1305) depicting the lives of Christ and the Virgin represent his greatest achievement. Working with 40 assistants, Giotto covered 700 square meters with over thirty scenes. He famously painted Halley's Comet, which appeared in 1301, as the Star of Bethlehem in his Adoration of the Magi."
    },
    {
      question: "Who discovered Giotto?",
      answer: "According to legend, the established painter <strong>Cimabue</strong> discovered young Giotto drawing sheep on a rock so realistically that he immediately took him as an apprentice in Florence. Whether true or not, the story reflects Giotto's reputation for unprecedented naturalism. By his thirties, he was already famous across Italy."
    },
    {
      question: "Who did Giotto influence?",
      answer: "Giotto influenced <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a>, whose Brancacci Chapel frescoes were later studied by <strong>Michelangelo</strong>. During his early artistic training, Michelangelo copied Giotto's work in Florence. Leonardo, Raphael, and every major <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>Renaissance portrait</strong></a> painter built on his innovations in depicting human emotion and form."
    }
  ],

  'maurice-quentin-de-la-tour': [
    {
      question: "What art movement was Maurice Quentin de La Tour part of?",
      answer: "La Tour was the supreme master of <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> portraiture, elevating pastel from a medium for preparatory sketches to finished works that rivaled oil painting in prestige. Working exclusively in pastel, he captured the French Enlightenment's intellectual elite with psychological insight and technical brilliance unmatched in 18th-century France."
    },
    {
      question: "Where can I see La Tour's pastels?",
      answer: "Major works hang at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, including his celebrated self-portraits. His hometown Musée Antoine Lécuyer in Saint-Quentin holds the world's largest collection, with over 80 pastels that La Tour himself bequeathed to the city before his death in 1788."
    },
    {
      question: "Who did La Tour paint?",
      answer: "He portrayed Enlightenment luminaries including <strong>Voltaire, Jean-Jacques Rousseau, and Madame de Pompadour</strong>, as well as King Louis XV and his queen Marie Leczinska. His subjects encompassed the intellectual and aristocratic circles of 18th-century Paris. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> preserve an intimate record of the era's leading figures."
    },
    {
      question: "What medium did La Tour specialize in?",
      answer: "He worked exclusively in <strong>pastel</strong>, grinding his own pigments and developing techniques that achieved unprecedented luminosity and subtlety. His ability to capture fleeting expressions and fabric textures elevated the medium from preparatory sketches to major finished works worthy of royal collections and salon exhibitions."
    },
    {
      question: "What was La Tour's personality like?",
      answer: "Contemporaries described him as <strong>lively and generous</strong> but increasingly eccentric in later years. He founded a free drawing school in Saint-Quentin and donated money to support struggling artists and provide dowries for poor women. Mental illness clouded his final decade, and he died in 1788."
    }
  ],

  'gustave-caillebotte': [
    {
      question: "What art movement was Caillebotte part of?",
      answer: "Caillebotte exhibited with the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> from 1876, helping organize and finance their exhibitions. His precise drawing style was more academic than Monet or Renoir, combining Impressionist light effects with bold perspective and sharp architectural detail that distinguished his depictions of modern Paris."
    },
    {
      question: "Where can I see Caillebotte's paintings?",
      answer: "<strong>Paris Street; Rainy Day</strong> (1877) dominates a gallery at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. <strong>The Floor Scrapers</strong> (1875) hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The Musée d'Orsay also holds several of his other major works depicting Parisian life and <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>."
    },
    {
      question: "Why was Caillebotte important to Impressionism?",
      answer: "Caillebotte used his <strong>family wealth</strong> to buy paintings from struggling Impressionists during their most difficult years, financially sustaining Monet, Renoir, Degas, Pissarro, and others when their work barely sold. He also paid rent for exhibition spaces and purchased supplies. Without his support, the movement might not have survived."
    },
    {
      question: "What did Caillebotte bequeath to France?",
      answer: "Caillebotte left <strong>68 Impressionist paintings</strong> to the French state, including works by Monet, Renoir, Degas, Pissarro, Sisley, Cézanne, and Manet. After years of controversy, 38 paintings were accepted. This collection now forms the core of the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay's</strong></a> Impressionist holdings."
    },
    {
      question: "What are Caillebotte's most famous paintings?",
      answer: "<strong>Paris Street; Rainy Day</strong> (1877) and <strong>The Floor Scrapers</strong> (1875) represent his finest achievements. Both feature bold perspective and unflinching depictions of modern Parisian life. The Floor Scrapers was rejected by the official Salon for showing manual laborers, which critics deemed an inappropriate subject for such monumental treatment."
    }
  ],

  'gerard-ter-borch': [
    {
      question: "What art movement was Gerard ter Borch part of?",
      answer: "Ter Borch was a leading painter of the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, creating refined genre scenes of upper-class domestic life. His intimate interiors and psychological subtlety directly influenced <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> and <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>, who adopted his compositions featuring well-dressed figures in quiet, ambiguous moments."
    },
    {
      question: "Where can I see ter Borch's paintings?",
      answer: "Works hang at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage</strong></a> in St. Petersburg, and the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum</strong></a> in New York. The Berlin Gemäldegalerie and London's National Gallery also hold significant examples of his work."
    },
    {
      question: "What was ter Borch famous for painting?",
      answer: "Ter Borch was legendary for rendering <strong>silk and satin</strong> fabrics with unmatched realism. His depictions of shimmering dresses caught light in ways that astonished contemporaries. He also excelled at painting elegant <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> in domestic settings, capturing subtle gestures and ambiguous social situations that invite interpretation."
    },
    {
      question: "What subjects did ter Borch paint?",
      answer: "Ter Borch painted genre scenes showing <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>elegant figures</strong></a> in refined domestic interiors, as well as sensitive <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>. His most unusual work is The Swearing of the Oath of Ratification of the Treaty of Münster (1648), documenting the Peace of Westphalia that ended the Eighty Years' War."
    },
    {
      question: "Who did ter Borch influence?",
      answer: "Ter Borch's domestic scenes directly influenced <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>, whose Woman Reading a Letter borrows his format. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> adopted his compositional strategies and fabric techniques. Dutch painters of intimate interiors throughout the later 17th century built on the visual language he established."
    }
  ],

  'john-singer-sargent': [
    {
      question: "What is John Singer Sargent best known for?",
      answer: "Sargent was the leading <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait painter</strong></a> of the Gilded Age, celebrated for his virtuoso brushwork and uncanny ability to capture personality, social status, and psychological depth. American and British aristocrats, industrialists, and artists all sought his services. He produced roughly 900 oil paintings during his prolific career."
    },
    {
      question: "Where can I see Sargent's paintings?",
      answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>, and <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The Met holds his iconic Madame X, while Boston displays his monumental murals and many watercolors."
    },
    {
      question: "What was the Madame X scandal?",
      answer: "His 1884 portrait of <strong>Virginie Gautreau</strong> caused outrage at the Paris Salon. Critics attacked its perceived eroticism, particularly a shoulder strap that originally hung suggestively off her arm. Gautreau's mother demanded Sargent withdraw it. The scandal forced him to relocate to London, though the painting is now considered his masterpiece."
    },
    {
      question: "Who influenced John Singer Sargent?",
      answer: "He studied <strong>Velázquez</strong> intensively at the Prado in Madrid and Frans Hals in Holland, adopting their fluid brushwork and ability to capture character in swift, confident strokes. His teacher Carolus-Duran also emphasized direct painting from the model rather than from drawings, shaping Sargent's immediate, spontaneous technique."
    },
    {
      question: "How many works did Sargent create?",
      answer: "He produced roughly <strong>900 oil paintings</strong> and over 2,000 watercolors during his career spanning five decades. After 1907, he largely abandoned formal <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraiture</strong></a>, declaring himself 'sick of painting pots,' and focused on <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, travel scenes, and public murals."
    }
  ],

  'masaccio': [
    {
      question: "Why is Masaccio important in art history?",
      answer: "Masaccio revolutionized <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting by introducing realistic human anatomy, convincing three-dimensional space, and rational linear perspective. Working for just six years before his death at 26 or 27, he transformed how artists understood light, shadow, and the human figure. His innovations became the foundation for all subsequent Western painting."
    },
    {
      question: "Where can I see Masaccio's masterwork?",
      answer: "The <a href=\"/apps/masterpieces/museum/brancacci-chapel\"><strong>Brancacci Chapel</strong></a> in Santa Maria del Carmine, Florence, contains his revolutionary frescoes on the life of Saint Peter. This small chapel became an essential study destination for Renaissance artists. His Trinity fresco, demonstrating perfect one-point perspective, remains in Santa Maria Novella, Florence."
    },
    {
      question: "What are Masaccio's most famous frescoes?",
      answer: "<strong>The Tribute Money</strong> and the <strong>Expulsion from the Garden of Eden</strong> at the Brancacci Chapel demonstrate his mastery of naturalism and raw human emotion. The Expulsion shows Adam and Eve's anguish with unprecedented psychological intensity. These <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious scenes</strong></a> broke completely with medieval artistic conventions."
    },
    {
      question: "Who did Masaccio influence?",
      answer: "Major artists including <strong>Filippo Lippi, Fra Angelico</strong>, Andrea del Castagno, and Piero della Francesca all studied his Brancacci Chapel frescoes. Michelangelo famously copied Masaccio's figures as a young man. <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> and Raphael also learned from his revolutionary approach to form and space."
    },
    {
      question: "How old was Masaccio when he died?",
      answer: "Masaccio died mysteriously in Rome at just <strong>26 or 27 years old</strong> in 1428, possibly poisoned according to some accounts. He had worked as a professional artist for only about six years, yet transformed painting forever. Vasari wrote that 'all the most celebrated sculptors and painters since Masaccio's day have become excellent by studying in this chapel.'"
    }
  ],

  'edouard-vuillard': [
    {
      question: "What art movement was Édouard Vuillard part of?",
      answer: "Vuillard was a founding member of the <strong>Nabis</strong> group and a leading <strong>Intimist</strong> painter. Influenced by <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> flat color areas and Japanese prints, the Nabis rejected Impressionist naturalism. Vuillard applied these <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> ideas to domestic interiors where figures merge with decorative patterns."
    },
    {
      question: "Where can I see Vuillard's paintings?",
      answer: "The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris holds major works. Paintings also hang at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington and <a href=\"/apps/masterpieces/museum/museum-of-modern-art\"><strong>MoMA</strong></a> in New York. His decorative panels for private homes remain in various collections throughout Europe and America."
    },
    {
      question: "What subjects did Vuillard paint?",
      answer: "Vuillard painted domestic interiors, often featuring his mother's dressmaking workroom where figures blend into densely patterned wallpaper, textiles, and <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> arrangements. His characteristic <strong>Intimist</strong> style created visual puzzles where human forms dissolve into their surroundings, challenging viewers to separate figure from decoration."
    },
    {
      question: "What were the Nabis?",
      answer: "The <strong>Nabis</strong> (Hebrew for 'prophets') were a group of <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> painters active in the 1890s, influenced by <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> and Japanese woodblock prints. Members including Bonnard and Denis advocated symbolic, decorative color and flat picture planes. They exhibited together from 1891 to 1899."
    },
    {
      question: "Did Vuillard create decorative works?",
      answer: "Yes, Vuillard painted large decorative panels for private homes and public buildings throughout his career. His theater designs included work for the Théâtre de l'Oeuvre, where he created programs and stage sets, and later the Théâtre des Champs-Élysées. These commissions sustained him financially for decades."
    }
  ],

  'kazimir-malevich': [
    {
      question: "What art movement did Kazimir Malevich found?",
      answer: "Malevich founded <a href=\"/apps/masterpieces/movement/suprematism\"><strong>Suprematism</strong></a> in 1915, a form of geometric <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract art</strong></a> seeking 'the supremacy of pure feeling' through basic shapes freed from representation. The name comes from 'supremus,' meaning superior or perfected. He wanted to liberate painting entirely from depicting objects in the visible world."
    },
    {
      question: "Where can I see Kazimir Malevich's paintings?",
      answer: "Major works are at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, and <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a> in London. The Stedelijk Museum in Amsterdam holds an important collection. Many works remained hidden in Russia until the 1980s due to Soviet censorship."
    },
    {
      question: "What is Kazimir Malevich's most famous painting?",
      answer: "<em>Black Square</em> (1915) shows a black square on a white ground. At its debut, Malevich <strong>hung it in the icon corner</strong> where Russian Orthodox families traditionally placed sacred images, declaring a new kind of spiritual art. He called it 'the zero point of painting' and the beginning of a new artistic era."
    },
    {
      question: "What happened to Malevich under Stalin?",
      answer: "Stalin's regime <strong>banned his art as 'degenerate'</strong> and 'bourgeois,' confiscated his works and manuscripts, and stripped him of his teaching position at the Leningrad Academy. He was arrested and interrogated in 1930. Fellow artists burned his papers to protect him. He was forbidden to make abstract art."
    },
    {
      question: "How was Malevich's funeral unique?",
      answer: "When he died in 1935, mourners carried <strong>flags with black squares</strong>, and a black square was painted on his coffin lid. A black square originally marked his grave near Nemchinovka. The funeral became a final statement of Suprematist principles, though Soviet authorities later removed the marker and built over the site."
    }
  ],

  'john-william-waterhouse': [
    {
      question: "What art movement was Waterhouse part of?",
      answer: "Waterhouse worked in the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> tradition, combining their literary subjects with a looser, more Impressionistic brushwork. Though the Brotherhood had disbanded before his career began, he inherited their love of myth, legend, and medieval romance. He's sometimes called the last Pre-Raphaelite, working in their spirit until his death in 1917."
    },
    {
      question: "Where can I see The Lady of Shalott?",
      answer: "The famous 1888 version of <strong>The Lady of Shalott</strong> hangs at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London, donated by Sir Henry Tate in 1894. Waterhouse painted three versions of this Tennyson subject: 1888, 1894, and 1915. His wife Esther likely modeled for the first version's doomed heroine."
    },
    {
      question: "What subjects did Waterhouse paint?",
      answer: "Waterhouse painted <strong>mythological and literary subjects</strong>, particularly <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> from Greek mythology, Arthurian legend, Tennyson's poetry, and Shakespeare. Ophelia, Circe, Penelope, and Cleopatra all appear in his work. He was drawn to moments of feminine agency, danger, and longing in ancient stories."
    },
    {
      question: "Where is Hylas and the Nymphs?",
      answer: "<strong>Hylas and the Nymphs</strong> (1896) hangs at <a href=\"/apps/masterpieces/museum/manchester-art-gallery\"><strong>Manchester Art Gallery</strong></a> in England, which acquired it directly from the artist. In 2018, the gallery briefly removed it as part of a curatorial project on female representation, sparking international controversy before returning it after public outcry."
    },
    {
      question: "What is Waterhouse's most famous painting?",
      answer: "<strong>The Lady of Shalott</strong> (1888) and <strong>Hylas and the Nymphs</strong> (1896) remain his most celebrated works. Both feature beautiful <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> in mythological settings with water as a central element. The dangerous beauty of his nymphs and doomed heroines continues to captivate audiences today."
    }
  ],

  'valentin-serov': [
    {
      question: "What is Valentin Serov's most famous painting?",
      answer: "<strong>Girl with Peaches</strong> (1887) at the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> is considered a masterpiece of Russian painting. Serov painted it when he was just 22, capturing his friend's daughter Vera Mamontova in spontaneous sunlight. The work inaugurated Russian <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and remains one of the most beloved paintings in Russia."
    },
    {
      question: "Where can I see Serov's paintings?",
      answer: "The <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg hold major collections. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of Russian aristocrats and artists can also be found in private collections and regional Russian museums from his native land."
    },
    {
      question: "What art movement was Serov associated with?",
      answer: "Girl with Peaches inaugurated Russian <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, though Serov developed this fresh, light-filled style independently before seeing French Impressionist work. He later evolved toward bolder simplification influenced by Art Nouveau. His style ranged from luminous early paintings to stark later portraits that border on modernism."
    },
    {
      question: "Who did Serov paint portraits of?",
      answer: "Serov painted Russian <strong>royalty, aristocrats, and cultural figures</strong>, including Grand Duke Pavel Alexandrovich, Tsar Nicholas II, and writers Maxim Gorky and Anton Chekhov. After the Bloody Sunday massacre of 1905, he resigned from the Academy and refused all imperial commissions in protest against the government's violence."
    },
    {
      question: "How popular is Serov in Russia today?",
      answer: "A 2016 Tretyakov exhibition drew <strong>record crowds</strong> who queued for hours in freezing winter temperatures. Visitors reportedly broke down a museum door in their eagerness to enter. The show demonstrated that Serov remains one of Russia's most beloved artists, with Girl with Peaches achieving near-icon status."
    }
  ],

  'chaim-soutine': [
    {
      question: "What art movement was Soutine part of?",
      answer: "Soutine belonged to the <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> School of Paris, a loose community of émigré artists including Modigliani and Chagall. His visceral, turbulent style later influenced <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionists</strong></a> like Willem de Kooning and Jackson Pollock. Francis Bacon also cited Soutine's raw intensity as a major influence."
    },
    {
      question: "What subjects did Soutine paint?",
      answer: "Soutine painted <strong>turbulent <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\">landscapes</a></strong>, anguished portraits of servants and workers, and gruesome studies of animal carcasses inspired by Rembrandt's Flayed Ox. His images of hanging beef, poultry, and fish convey the color and texture of flesh with disturbing visceral power."
    },
    {
      question: "Who discovered Chaim Soutine?",
      answer: "American collector <strong>Albert C. Barnes</strong> purchased 60 Soutine paintings at once in 1923, instantly transforming the impoverished artist into a successful figure. Legend says Soutine immediately hailed a taxi and ordered the driver to take him to Nice, over 400 miles away, to celebrate his sudden fortune."
    },
    {
      question: "Where can I see Soutine's paintings?",
      answer: "Major collections are at the <strong>Barnes Foundation</strong> in Philadelphia, the <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a> in London, and the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The Barnes holds the largest concentration of his work, reflecting Albert Barnes's early enthusiasm for the artist."
    },
    {
      question: "How did Soutine die?",
      answer: "Soutine died in 1943 from a <strong>perforated ulcer</strong> while hiding from the Nazis as a Jew. He had been moving between safe houses in the French countryside, sometimes sleeping outdoors in forests. He left hiding for emergency surgery in Paris, but the operation came too late to save him."
    }
  ],

  'george-frederick-watts': [
    {
      question: "What art movement was George Frederic Watts part of?",
      answer: "Watts was a Victorian <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter who declared 'I paint ideas, not things.' He created allegorical works on universal themes like love, death, hope, and human destiny. His brooding, philosophical paintings set him apart from narrative Victorian artists, anticipating 20th-century symbolic and <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract approaches</strong></a>."
    },
    {
      question: "Where can I see Watts's painting Hope?",
      answer: "Versions of <strong>Hope</strong> (1886) are at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London and the Watts Gallery in Surrey. Watts painted multiple versions of his most popular works to meet demand. The Watts Gallery, located in his former home at Compton, displays the largest collection of his paintings and sculptures."
    },
    {
      question: "How did Hope influence Barack Obama?",
      answer: "Reverend Jeremiah Wright preached on Watts's painting to a congregation that included young Barack Obama in Chicago. Obama later took <strong>'The Audacity of Hope'</strong> as the title for his 2006 book and keynote speech, directly inspired by Wright's sermon interpreting the blindfolded figure clinging to her broken lyre."
    },
    {
      question: "What is the Watts Gallery?",
      answer: "The <strong>Watts Gallery</strong> in Compton, Surrey, preserves the artist's home and studio where he worked from 1891 until his death in 1904. It displays a major collection of his paintings, sculptures, and personal effects. His wife Mary Watts designed the adjacent Watts Mortuary Chapel with elaborate <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual symbolism</strong></a>."
    },
    {
      question: "Who did Watts influence?",
      answer: "His Symbolist approach influenced <strong>Pablo Picasso's Blue Period</strong>, particularly visible in The Old Guitarist (1903-04), which echoes Watts's melancholic tone and muted palette. Watts's idea of painting universal themes rather than specific narratives also anticipated modernist abstraction and the symbolic expressionism of later artists."
    }
  ],

  'gerrit-dou': [
    {
      question: "What art movement was Gerrit Dou part of?",
      answer: "Dou founded the <strong>Leiden fijnschilder</strong> ('fine painter') tradition within the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. This style featured small, highly polished paintings with obsessive detail, often depicting candlelit scenes, scholars, and domestic interiors. Dou's meticulous technique became the basis for an entire school of Dutch painting."
    },
    {
      question: "Where can I see Gerrit Dou's paintings?",
      answer: "Major works are at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> (The Dropsical Woman), the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, and the Leiden Collection. The Louvre's Dropsical Woman is considered his masterpiece, showing his extraordinary ability to render candlelight, textures, and reflections with microscopic precision."
    },
    {
      question: "Who trained Gerrit Dou?",
      answer: "Dou studied under <strong>Rembrandt</strong> from 1628 to 1631, becoming his first student at age fourteen in Leiden. He learned chiaroscuro and the handling of light from Rembrandt, but developed his own detailed, polished style that moved away from his teacher's looser brushwork toward extreme refinement."
    },
    {
      question: "How detailed was Dou's painting technique?",
      answer: "Dou reportedly spent <strong>five days painting a single hand</strong> and manufactured his own brushes for the extremely fine work. He waited for dust to settle before opening his paint box and sat motionless until the air cleared. His obsessive technique produced surfaces so smooth that brushstrokes are virtually invisible."
    },
    {
      question: "How famous was Dou in his lifetime?",
      answer: "He was the <strong>most acclaimed Dutch painter</strong> of his era, even more celebrated and expensive than his teacher Rembrandt. Queen Christina of Sweden owned eleven of his paintings. King Charles II of England also collected his work. His reputation only declined in the 19th century as looser styles came into fashion."
    }
  ],

  'richard-bergh': [
    {
      question: "What art movement was Richard Bergh part of?",
      answer: "Bergh was associated with Swedish <strong>National Romanticism</strong> and the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Opponent movement</strong></a> that rebelled against the Royal Academy's conservative teaching methods in the 1880s. This group of young Swedish artists demanded the right to paint outdoors and study in Paris, transforming Scandinavian art through their reforms."
    },
    {
      question: "What is stämningsmåleri?",
      answer: "Bergh coined this Swedish term meaning '<strong>mood painting</strong>' in an influential 1896 essay, describing the subjective, atmospheric approach that characterized Nordic art of the 1890s. Rather than precise documentation, stämningsmåleri emphasized emotional resonance, twilight ambiguity, and the mysterious qualities of Scandinavian <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and light."
    },
    {
      question: "Where can I see Richard Bergh paintings?",
      answer: "Works hang at the <a href=\"/apps/masterpieces/museum/national-museum-stockholm\"><strong>Nationalmuseum</strong></a> in Stockholm, the Gothenburg Museum of Art, the Malmö Art Museum, and the Thiel Gallery. Nordic Summer Evening, his most famous painting, is at the Gothenburg Museum. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> are also well represented in Swedish collections."
    },
    {
      question: "What is Richard Bergh's most famous painting?",
      answer: "<strong>Nordic Summer Evening</strong> (1899-1900) exemplifies his twilight mood paintings, depicting two contemplative figures on a veranda under the lingering light of a Scandinavian summer night. The painting captures the meditative stillness and emotional ambiguity that defined the National Romantic movement's interpretation of Nordic identity."
    },
    {
      question: "Did Richard Bergh hold museum positions?",
      answer: "Yes, in 1915 Bergh became curator and director of the <a href=\"/apps/masterpieces/museum/national-museum-stockholm\"><strong>Nationalmuseum</strong></a> in Stockholm, spending his final years modernizing its acquisitions policies and exhibition strategies. He championed contemporary Scandinavian art and expanded the museum's collection of French Impressionism before his death in 1919."
    }
  ],

  'robert-campin': [
    {
      question: "What art movement was Robert Campin part of?",
      answer: "Campin was a founder of <a href=\"/apps/masterpieces/movement/early-netherlandish\"><strong>Early Netherlandish</strong></a> painting alongside <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a>, revolutionizing Northern European art through realistic detail, oil painting techniques, and innovative use of light. Working in Tournai around 1420-1440, he pioneered the domestic settings and symbolic objects that would define Flemish painting."
    },
    {
      question: "Where can I see the Mérode Altarpiece?",
      answer: "The <strong>Mérode Altarpiece</strong> (c. 1427-32) is displayed at <a href=\"/apps/masterpieces/museum/the-cloisters\"><strong>The Cloisters</strong></a>, the Metropolitan Museum's medieval branch in Fort Tryon Park, New York. This triptych Annunciation scene places the Virgin Mary in a contemporary Flemish home filled with symbolic household objects."
    },
    {
      question: "Who was the Master of Flémalle?",
      answer: "The <strong>Master of Flémalle</strong> is an anonymous painter now generally identified as Robert Campin, based on stylistic analysis connecting documented works from Campin's Tournai workshop to paintings attributed to this unknown master. The identification, though debated, is accepted by most scholars studying Early Netherlandish art."
    },
    {
      question: "Who did Robert Campin train?",
      answer: "Campin trained <a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a> and Jacques Daret in his Tournai workshop, passing his innovative techniques to the next generation. Rogier would become the most influential Netherlandish painter of the mid-15th century, spreading Campin's realism throughout Europe."
    },
    {
      question: "What made Campin's paintings innovative?",
      answer: "Campin placed <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious scenes</strong></a> in contemporary Flemish interiors with unprecedented realistic detail, using oil techniques for luminous effects impossible in tempera. Every household object carries symbolic meaning. A mousetrap represents Christ catching the devil; lilies symbolize Mary's purity."
    }
  ],

  'frank-dicksee': [
    {
      question: "What art style was Frank Dicksee known for?",
      answer: "Dicksee worked in <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> with strong <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> influences, creating dramatic scenes of medieval romance, literary subjects, and classical <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female</strong></a> beauty. His rich colors, theatrical compositions, and idealized figures made him one of the most popular painters in late Victorian and Edwardian England."
    },
    {
      question: "What are Dicksee's most famous paintings?",
      answer: "'<strong>Romeo and Juliet</strong>' (1884) captures the balcony scene with luminous moonlight. '<strong>The Funeral of a Viking</strong>' (1893) shows a blazing ship burial. '<strong>La Belle Dame Sans Merci</strong>' illustrates Keats's poem about a knight bewitched by a fairy. All demonstrate his gift for romantic drama and historical atmosphere."
    },
    {
      question: "Where can I see Frank Dicksee's paintings?",
      answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/tate\"><strong>Tate</strong></a> in London, Manchester Art Gallery, and various British regional museums. The Funeral of a Viking is at Manchester. As a prominent Royal Academy artist, his paintings appeared regularly at their summer exhibitions and entered many public collections."
    },
    {
      question: "What positions did Dicksee hold?",
      answer: "He served as <strong>President of the Royal Academy</strong> from 1924 until his death in 1928, the highest honor in British art establishment. He was knighted in 1925 and made Knight Commander of the Royal Victorian Order by King George V. His election recognized decades of popular success."
    },
    {
      question: "Did Dicksee come from an artistic family?",
      answer: "Yes, his father <strong>Thomas Dicksee</strong> was a painter who trained him from childhood, along with his brother Herbert and sister Margaret, who both became professional artists. The Dicksees represented a noted artistic dynasty in Victorian England, with three generations working as painters and illustrators."
    }
  ],

  'vittore-carpaccio': [
    {
      question: "What art movement was Carpaccio part of?",
      answer: "Carpaccio was a leading painter of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Venetian Renaissance</strong></a>, known as the greatest early narrative painter of that school. Working in Venice from the 1480s until his death around 1525, he specialized in large-scale cycles that told stories in multiple episodes with documentary precision."
    },
    {
      question: "Where can I see Carpaccio's paintings?",
      answer: "His Saint Ursula cycle is at the <a href=\"/apps/masterpieces/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> in Venice. The San Giorgio degli Schiavoni cycle, depicting Saints George, Jerome, and Tryphon, remains in its original location in that small Venetian confraternity building, preserving the intended experience of his narrative <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious art</strong></a>."
    },
    {
      question: "What is Carpaccio's most famous work?",
      answer: "The nine-canvas <strong>Legend of Saint Ursula</strong> (1490-1500) at the Accademia established his reputation for narrative painting with documentary detail. The cycle shows the princess's pilgrimage and martyrdom against backgrounds depicting contemporary Venetian architecture, ships, and costumes, creating a visual chronicle of Renaissance Venice."
    },
    {
      question: "Is the dish carpaccio named after the painter?",
      answer: "According to legend, Venetian chef <strong>Giuseppe Cipriani</strong> of Harry's Bar invented the dish in 1950 and named it after the painter because its vibrant reds of raw beef recalled Carpaccio's characteristic warm palette. A Carpaccio exhibition was running in Venice at the time."
    },
    {
      question: "What is distinctive about Carpaccio's style?",
      answer: "He was a master <strong>visual storyteller</strong>, painting large cycles that tell tales in episodes with documentary precision of Venetian life. His canvases record 15th-century architecture, ships, <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>costumes</strong></a>, and customs with such accuracy that historians use them as primary sources for understanding Renaissance Venice."
    }
  ],

  'emanuel-leutze': [
    {
      question: "What is Emanuel Leutze most famous for?",
      answer: "<em>Washington Crossing the Delaware</em> (1851) depicts the <strong>surprise attack on Trenton</strong> on December 26, 1776. It's one of the most iconic images in American history, though Leutze based the river on the Rhine and painted it in Düsseldorf using American tourists as models. Historical accuracy mattered less than emotional impact."
    },
    {
      question: "Where can I see Emanuel Leutze's paintings?",
      answer: "<em>Washington Crossing the Delaware</em> dominates a gallery at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. His monumental <em>Westward the Course of Empire Takes Its Way</em> mural fills a stairwell in the U.S. Capitol. Other works are at the <strong>Smithsonian American Art Museum</strong> and <strong>Brooklyn Museum</strong>."
    },
    {
      question: "Why did Leutze paint Washington Crossing the Delaware?",
      answer: "Living in Europe during the <strong>1848 Revolutions</strong>, Leutze wanted to inspire liberal reformers with an image of successful revolution against tyranny. He supported German democrats fighting for constitutional government. The painting was allegorical rather than historical, using America's founding as a symbol of freedom for Europeans still struggling for liberty."
    },
    {
      question: "What happened to the first version of the painting?",
      answer: "The first version was <strong>damaged by fire</strong> in Leutze's Düsseldorf studio in 1850, then restored and sent to Bremen's Kunsthalle. It was <strong>destroyed in a 1942 Allied bombing raid</strong> during World War II. The surviving version at the Met is the second, completed in 1851."
    },
    {
      question: "What art movement was Emanuel Leutze part of?",
      answer: "Leutze was associated with the <strong>Düsseldorf School</strong> of history painting, known for dramatic compositions, careful detail, and theatrical lighting. He studied and taught at the Düsseldorf Academy for nearly two decades, becoming a central figure in this influential German-American artistic exchange during the mid-19th century."
    },
    {
      question: "How did Emanuel Leutze die?",
      answer: "He died of <strong>heatstroke in Washington, D.C., in 1868</strong>, at age 52 while working on a painting about the emancipation of slaves. He had returned to America permanently in 1859 and received the Capitol mural commission during the Civil War. His death cut short what might have been further monumental <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>historical paintings</strong></a>."
    }
  ],

  'hugo-van-der-goes': [
    {
      question: "What art movement was Hugo van der Goes part of?",
      answer: "Van der Goes was a leading painter of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Early Netherlandish</strong></a> school, known for intense emotion and unprecedented psychological depth. Working in Ghent and later at a monastery near Brussels, he pushed Flemish painting toward raw expressiveness that contemporaries found disturbing and later generations found prophetic."
    },
    {
      question: "Where can I see the Portinari Altarpiece?",
      answer: "The <strong>Portinari Altarpiece</strong> (c. 1475) is at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, where it profoundly influenced Italian Renaissance painters when it arrived around 1483. At three meters wide, it's one of the largest 15th-century <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious paintings</strong></a> to survive intact."
    },
    {
      question: "Who commissioned the Portinari Altarpiece?",
      answer: "<strong>Tommaso Portinari</strong>, the Medici bank's representative in Bruges, commissioned it for the hospital of Santa Maria Nuova in Florence, founded by his ancestor. The triptych shows the Nativity with the donor's family kneeling in prayer. Portinari and his wife appear larger than their children, following convention."
    },
    {
      question: "How did the Portinari Altarpiece influence Italian art?",
      answer: "Italian artists including <strong>Domenico Ghirlandaio</strong> directly imitated its realistic shepherds, floral still life, and emotional intensity in their own work. The altarpiece demonstrated what northern oil technique could achieve. Ghirlandaio's Sassetti Chapel frescoes show clear borrowings from Van der Goes's composition and figure types."
    },
    {
      question: "What mental illness did van der Goes suffer?",
      answer: "Monastic records describe him suffering from <strong>severe depression with paranoia and suicidal thoughts</strong>, believing himself eternally damned. Around 1481 he suffered a major breakdown during which he tried to kill himself and had to be physically restrained. He continued painting despite his illness but died within the year."
    }
  ],

  'paris-bordone': [
    {
      question: "What art movement was Paris Bordone part of?",
      answer: "Bordone belonged to the <a href=\"/apps/masterpieces/movement/venetian-school\"><strong>Venetian School</strong></a> during the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, combining Titianesque color with <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> elements absorbed during his time at the French court. He studied briefly with Titian but developed an independent style featuring elaborate architectural settings and rich, warm coloring."
    },
    {
      question: "What is Paris Bordone's most famous painting?",
      answer: "<strong>Fisherman Consigning a Ring to the Doge</strong> (1534-35) at the Accademia in Venice won him public recognition for its brilliant color and complex architectural setting. The painting depicts a miracle legend with Venice's distinctive buildings as backdrop, demonstrating his skill at combining figures with elaborate <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>cityscapes</strong></a>."
    },
    {
      question: "Where can I see Paris Bordone paintings?",
      answer: "Works hang at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage</strong></a> in St. Petersburg, and the Gallerie dell'Accademia in Venice. His paintings of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>beautiful women</strong></a> and mythological scenes are scattered across European collections."
    },
    {
      question: "Did Paris Bordone work with Titian?",
      answer: "Bordone apprenticed briefly with <strong>Titian</strong> but the relationship soured. According to Vasari, when Bordone won an altarpiece commission for San Niccolò dei Frari in 1523, Titian used his influence to take the work for himself. Bordone left the workshop and developed an independent career."
    },
    {
      question: "Did Paris Bordone work outside Venice?",
      answer: "Yes, in 1538 he worked at Francis I's court at <strong>Fontainebleau</strong> in France, where he encountered Italian Mannerist painters decorating the royal château. Their influence appeared in his later work's elongated figures and complex compositions. He also worked for the Fugger banking family in Germany."
    }
  ],

  'eustache-le-sueur': [
    {
      question: "What art movement was Eustache Le Sueur part of?",
      answer: "Le Sueur was a leading figure of French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> classicism, known as 'Parisian Atticism' for its restrained, elegant style. Unlike the dramatic intensity of Italian Baroque, this French approach emphasized harmony, clarity, and grace. Le Sueur never traveled to Italy but absorbed its lessons through prints and other artists' works."
    },
    {
      question: "Where can I see Le Sueur's paintings?",
      answer: "His Saint Bruno cycle and other major works are at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, which holds the largest collection of his paintings. Additional works are at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a> in New York. His decorative panels for the Hôtel Lambert remain partly in situ."
    },
    {
      question: "What is Le Sueur's most famous work?",
      answer: "His <strong>22-painting cycle on the life of Saint Bruno</strong> (1645-1648), founder of the Carthusian order, established his reputation as 'the French Raphael.' Painted for the Charterhouse of Paris, these <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>devotional scenes</strong></a> combine narrative clarity with contemplative atmosphere. They now hang at the Louvre."
    },
    {
      question: "Why was Le Sueur called 'the French Raphael'?",
      answer: "His <strong>graceful compositions</strong>, harmonious color, and balanced figures echoed Raphael's classical ideals, earning him this nickname from admirers. Though he never visited Rome, Le Sueur studied Raphael's work through prints and tapestry cartoons. He died at 38, leaving admirers to wonder what further heights he might have reached."
    },
    {
      question: "What role did Le Sueur play in French art institutions?",
      answer: "He was a <strong>founding member</strong> and first professor of painting at the Royal Academy of Painting and Sculpture, established in 1648 under royal patronage. This institution formalized French artistic training and exhibition practices. Le Sueur helped establish the academic principles that would shape French art for two centuries."
    }
  ],

  'adriaen-van-ostade': [
    {
      question: "What did Adriaen van Ostade paint?",
      answer: "Van Ostade specialized in <strong>genre scenes of Dutch peasant life</strong>: tavern interiors with drinking, smoking, card playing, and music making in the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> tradition. His subjects were common folk rather than the wealthy, capturing rural entertainment and domestic labor with affectionate humor rather than moral judgment."
    },
    {
      question: "Where can I see van Ostade's paintings?",
      answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage Museum</strong></a> in St. Petersburg. The Royal Collection in Britain and numerous European and American museums also hold his <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>lively peasant scenes</strong></a>."
    },
    {
      question: "Who trained Adriaen van Ostade?",
      answer: "Van Ostade trained under the portrait master <strong>Frans Hals</strong> in Haarlem, alongside fellow student <strong>Adriaen Brouwer</strong>, who became his most significant influence. Brouwer's rough tavern scenes directly inspired Van Ostade's subject matter, though Van Ostade's style was generally softer and more warmly humorous."
    },
    {
      question: "How many works did van Ostade create?",
      answer: "Over <strong>800 works</strong> survive: paintings, watercolors, drawings, and approximately 50 etchings. His detailed watercolors from 1672-1684, produced in his final years, are especially prized by collectors for their refinement. He remained productive throughout a long career spanning five decades in Haarlem."
    },
    {
      question: "Who were van Ostade's students?",
      answer: "Van Ostade taught his younger brother <strong>Isaack van Ostade</strong>, who specialized in winter scenes and died young, plus important artists <strong>Jan Steen</strong>, Cornelis Bega, and Cornelis Dusart. Through these pupils, his approach to genre painting spread throughout Holland and influenced generations of artists."
    }
  ],

  'constant-permeke': [
    {
      question: "What art movement was Constant Permeke part of?",
      answer: "Permeke was the leading figure of <strong>Flemish <a href=\"/apps/masterpieces/movement/expressionism\">Expressionism</a></strong>, known for monumental, heavily distorted figures depicting fishermen, farmers, and their families. His earthy palette and rough surfaces conveyed the brutal dignity of manual labor. He became Belgium's most important 20th-century painter, representing a distinctly northern form of Expressionism."
    },
    {
      question: "Where can I see Constant Permeke's art?",
      answer: "His work is at the <strong>Permekemuseum</strong> in Jabbeke, Belgium, converted from his former home and studio where he worked from 1929 until his death. The <strong>Royal Museums of Fine Arts of Belgium</strong> in Brussels also holds major works, along with museums in Antwerp, Ghent, and Ostend."
    },
    {
      question: "What happened to Permeke during World War II?",
      answer: "The German occupiers <strong>banned him from painting</strong>, classifying his work as 'Degenerate Art' alongside other Expressionists. His son was arrested and sent to Germany as forced labor. Permeke turned to sculpture during the ban, producing powerful bronze and terracotta figures that continued his themes of rural <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>working people</strong></a>."
    },
    {
      question: "What subjects did Constant Permeke paint?",
      answer: "He painted <strong>fishermen and farmers</strong> from the Belgian coast and countryside with monumental, heavily distorted forms that emphasized the physical weight of hard labor. His palette favored dark <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a>, and his massive figures seem carved from the land itself."
    },
    {
      question: "How did Belgium honor Constant Permeke?",
      answer: "In 1997, Belgium put <strong>his portrait on the 1,000 franc banknote</strong>, recognizing him as one of the country's most important artists. The Permekemuseum in Jabbeke preserves his home and studio as a monument. His influence on Belgian art remains profound, shaping how the country sees its rural heritage."
    }
  ],

  'aelbert-cuyp': [
    {
      question: "What was Aelbert Cuyp known for painting?",
      answer: "Cuyp specialized in <strong><a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\">landscapes</a> with animals</strong>, particularly cows bathed in warm, golden light. His river scenes and pastoral subjects captured the Dutch countryside with an Italian glow, though he never visited Italy. He perfected the luminous amber atmosphere that makes his paintings immediately recognizable."
    },
    {
      question: "Where can I see Aelbert Cuyp's paintings?",
      answer: "The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London has eleven of his paintings, more than any other museum. Others are at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam and the <strong>Dordrechts Museum</strong> in his hometown. British aristocrats collected him enthusiastically from the 1750s onward."
    },
    {
      question: "What art movement was Aelbert Cuyp part of?",
      answer: "Cuyp was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painter who worked in the 'Italianate manner,' using warm <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>golden</strong></a> light inspired by Italian landscapes. This atmospheric quality came not from travel but from studying paintings by Jan Both and other Dutch artists who had worked in Rome."
    },
    {
      question: "Why did Aelbert Cuyp stop painting?",
      answer: "After marrying a wealthy widow from a prominent family in 1658, he <strong>largely stopped painting</strong>. He held civic positions in Dordrecht including elder of the Reformed Church and member of the high court. With no financial need to continue working, he apparently retired from professional art."
    },
    {
      question: "Who influenced Aelbert Cuyp's style?",
      answer: "<strong>Jan Both</strong>, who returned from Italy around 1640 with paintings full of Mediterranean golden light, transformed Cuyp's palette from cool gray-green tones to warm amber. Cuyp adopted Both's luminous atmosphere while applying it to his native Dutch subjects of cows, horses, and river landscapes."
    },
    {
      question: "Why is Aelbert Cuyp popular in Britain?",
      answer: "British collectors <strong>rediscovered him in the late 18th century</strong> after he'd been largely forgotten in Holland. His pastoral scenes appealed strongly to English aristocratic taste for idealized <a href=\"https://luxurywallart.com/collections/country-farm-paintings\" target=\"_blank\" rel=\"noopener\"><strong>country landscapes</strong></a>. He's better represented in British collections than Dutch ones, a legacy of Georgian-era collecting."
    }
  ]
};

async function main() {
  console.log('Starting FAQ expansion updates for 25 artists...\n');

  let updated = 0;
  let failed = 0;

  for (const [slug, faqs] of Object.entries(expandedFaqs)) {
    try {
      // Count words in each FAQ for verification
      const faqStats = faqs.map((faq, i) => {
        const wordCount = faq.answer.replace(/<[^>]*>/g, '').split(/\s+/).length;
        return `FAQ ${i+1}: ${wordCount} words`;
      });

      await prisma.artist.update({
        where: { slug },
        data: {
          faqs: faqs,
          updatedAt: new Date()
        }
      });

      console.log(`✓ Updated ${slug}`);
      faqStats.forEach(stat => console.log(`  ${stat}`));
      updated++;
    } catch (error) {
      console.log(`✗ Failed ${slug}: ${error.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Failed: ${failed}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
