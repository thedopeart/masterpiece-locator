const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumData = [
  {
    slug: 'museo-civico-di-sansepolcro-sansepolcro-italy',
    description: `<p>The Museo Civico di Sansepolcro sits in the heart of this small Tuscan hill town, housed in the 14th-century <strong>Palazzo dei Conservatori</strong>. The museum exists because of one artist: <a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a>, born here around 1415. His <strong>Resurrection</strong>, painted on the wall of the former town hall, is the main draw. Aldous Huxley called it "the greatest painting in the world," and during World War II, a British officer reportedly ordered a ceasefire on the town to protect it.</p><p>Beyond the Resurrection, the collection includes Piero's <a href="/apps/masterpieces/art/piero-della-francesca-the-madonna-of-mercy"><strong>Madonna of Mercy</strong></a> polyptych, an early commission that took him over 15 years to finish. The museum also holds works by other Tuscan painters and local archaeological finds. Sansepolcro itself is worth the detour: a quiet town in the upper Tiber valley with medieval streets and very few tourists compared to Florence or Siena.</p>`,
    faqs: [
      {
        question: "What famous artworks are in the Museo Civico di Sansepolcro?",
        answer: "The museum's centerpiece is Piero della Francesca's <strong>Resurrection</strong> fresco. It also holds his <a href=\"/apps/masterpieces/art/piero-della-francesca-the-madonna-of-mercy\"><strong>Madonna of Mercy</strong></a> polyptych, <a href=\"/apps/masterpieces/art/piero-della-francesca-st-julian\"><strong>St. Julian</strong></a>, and several other works by local Tuscan artists."
      },
      {
        question: "When was this museum founded?",
        answer: "The collection goes back to the 16th century, though the museum in its current form opened in the <strong>Palazzo dei Conservatori</strong> during the 19th century. <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>'s frescoes have been on this site since the 1460s."
      },
      {
        question: "Who is the main artist featured here?",
        answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a> dominates the collection. He was born in Sansepolcro and created his most important works for this town, including the Resurrection and the <strong>Madonna of Mercy</strong> polyptych."
      },
      {
        question: "Where is Sansepolcro?",
        answer: "It's a small town in eastern Tuscany, near the border with Umbria. About 115 km southeast of Florence. The museum is on <strong>Via Niccolò Aggiunti</strong> in the historic center. Most visitors combine it with trips to Arezzo or the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> trail."
      },
      {
        question: "Is the museum worth a special trip?",
        answer: "If you care about <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting, yes. Piero della Francesca's <strong>Resurrection</strong> is one of the great frescoes of the 15th century. The town itself is quiet and authentic, with none of the crowds you'll find at major Tuscan cities."
      }
    ]
  },
  {
    slug: 'muse-marmottan-monet-paris',
    description: `<p>The Musée Marmottan Monet holds the <strong>world's largest collection of Claude Monet paintings</strong>, over 100 works donated by his son Michel in 1966. The museum started as a private mansion belonging to art collector Paul Marmottan, who left his home and Napoleonic-era collection to the Académie des Beaux-Arts in 1932. Monet's donation transformed the museum into a pilgrimage site for <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> lovers.</p><p>The star piece is <strong>Impression, Sunrise</strong> (1872), the painting that gave the Impressionist movement its name. Thieves stole it in 1985, but it was recovered five years later. The lower-level gallery displays late Water Lilies canvases, painted at Giverny when Monet's eyesight was failing. The museum also owns works by Berthe Morisot, <a href="/apps/masterpieces/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a>, and other Impressionists. Located in the quiet 16th arrondissement near the Bois de Boulogne, it's one of Paris's less crowded art museums.</p>`,
    faqs: [
      {
        question: "What's special about the Musée Marmottan Monet?",
        answer: "It holds the <strong>world's largest Monet collection</strong>, including Impression, Sunrise, the painting that named the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> movement. Over 100 Monet works are here, donated by the artist's son."
      },
      {
        question: "What other artists are represented?",
        answer: "Beyond Monet, the collection includes works by <a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Jules Bastien-Lepage</strong></a>, Berthe Morisot (the largest collection of her work anywhere), Renoir, Sisley, and <strong>Napoleonic-era</strong> decorative arts from Paul Marmottan's original collection."
      },
      {
        question: "What Impressionist paintings can I see here?",
        answer: "The highlight is Monet's <strong>Impression, Sunrise</strong> (1872). You'll also find his late <strong>Water Lilies</strong> series, Rouen Cathedral studies, and <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s personal collection of paintings by his friends and contemporaries."
      },
      {
        question: "Where is the Musée Marmottan located?",
        answer: "It's at <strong>2 Rue Louis Boilly</strong> in Paris's 16th arrondissement, near the Bois de Boulogne. The closest metro is La Muette (Line 9). It's quieter than the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries at the Musée d'Orsay."
      },
      {
        question: "Was a painting really stolen from this museum?",
        answer: "Yes. In 1985, armed thieves took <strong>Impression, Sunrise</strong> and eight other paintings. Police recovered them five years later in Corsica. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s most famous work is now back on display with tighter security."
      }
    ]
  },
  {
    slug: 'art-gallery-of-new-south-wales-agnsw-sydney-austra',
    description: `<p>The Art Gallery of New South Wales opened in 1871, making it one of <strong>Australia's oldest public galleries</strong>. It sits in The Domain parkland overlooking Sydney Harbour, a short walk from the Royal Botanic Garden. The collection spans Australian, European, and Asian art from antiquity to the present, with particularly strong holdings in <strong>19th-century British and Australian painting</strong>.</p><p>The gallery's European collection includes <a href="/apps/masterpieces/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a>'s striking <a href="/apps/masterpieces/art/john-william-waterhouse-diogenes"><strong>Diogenes</strong></a> and works by <a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a>. A major expansion called Sydney Modern opened in 2022, nearly doubling exhibition space with a striking concrete-and-glass building designed by SANAA architects. Entry to the permanent collection is free.</p>`,
    faqs: [
      {
        question: "What European paintings does AGNSW have?",
        answer: "The gallery holds <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>John William Waterhouse</strong></a>'s <a href=\"/apps/masterpieces/art/john-william-waterhouse-diogenes\"><strong>Diogenes</strong></a> and <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a>'s <strong>Chaucer at the Court of Edward III</strong>. The European wing also includes Impressionist and modern works."
      },
      {
        question: "Where is the Art Gallery of New South Wales?",
        answer: "It's in <strong>The Domain</strong>, a parkland in central Sydney near the harbour. The address is Art Gallery Road, Sydney NSW 2000. Walking distance from St James or Martin Place stations. The <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> works are in the European galleries on the upper level."
      },
      {
        question: "When was AGNSW founded?",
        answer: "The gallery opened in <strong>1871</strong> as one of Australia's first public art museums. The current neoclassical building dates from 1897. A major expansion, <strong>Sydney Modern</strong>, opened in 2022 with galleries by Japanese architects SANAA."
      },
      {
        question: "Is the gallery free to visit?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Special exhibitions have separate admission charges. The gallery is open seven days a week. It's one of the best free cultural attractions in Sydney alongside the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and modern collections."
      },
      {
        question: "What makes AGNSW different from other Australian galleries?",
        answer: "Its location overlooking <strong>Sydney Harbour</strong> is hard to beat. The 2022 Sydney Modern expansion gives it one of the largest exhibition spaces in the Southern Hemisphere. Strong Aboriginal and Torres Strait Islander art holdings set it apart from European-focused <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> collections."
      }
    ]
  },
  {
    slug: 'rhode-island-school-of-design-museum-risd-museum-p',
    description: `<p>The RISD Museum belongs to the <strong>Rhode Island School of Design</strong>, one of America's top art and design schools. Founded in 1877, the museum holds roughly 100,000 objects spanning 5,000 years, from ancient Egyptian artifacts to contemporary installations. It's considered one of the finest <strong>university art museums</strong> in the country, punching well above its size.</p><p>The painting collection includes works by <a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a>, <a href="/apps/masterpieces/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a>, Manet, and Cézanne. The museum is also strong in decorative arts, textiles, and Asian art. Located on Benefit Street in Providence's historic East Side, it's free for Rhode Island residents and RISD students. The building connects several renovated historic structures, giving the galleries an intimate feel that larger museums lack.</p>`,
    faqs: [
      {
        question: "What makes the RISD Museum unique?",
        answer: "It's one of America's best <strong>university art museums</strong>, connected to the Rhode Island School of Design. The collection of 100,000 objects rivals much larger institutions. Works by <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> and <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> anchor the European painting galleries."
      },
      {
        question: "What paintings can I see at the RISD Museum?",
        answer: "European highlights include <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a>'s <a href=\"/apps/masterpieces/art/edgar-degas-study-for-the-self-portrait\"><strong>Study for the Self Portrait</strong></a> and <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>John Singer Sargent</strong></a>'s portraits. The American and <strong>Impressionist</strong> collections are also strong."
      },
      {
        question: "Which artists are well represented?",
        answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> and <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> feature prominently. The museum also holds Cézanne, Manet, and significant American painters. The decorative arts and <strong>textile collection</strong> rival the European painting holdings in importance."
      },
      {
        question: "What style of art does the museum focus on?",
        answer: "The collection spans all periods and media, from ancient to contemporary. European galleries cover <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and <strong>19th-century portraiture</strong> particularly well. The design school connection means decorative arts, furniture, and textiles get equal billing."
      },
      {
        question: "Where is the RISD Museum?",
        answer: "It's at <strong>20 North Main Street</strong> in Providence, Rhode Island, on the historic East Side near Brown University. Free for RI residents. The museum occupies several connected buildings along <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>neoclassical</strong></a> Benefit Street, one of the most architecturally preserved streets in America."
      }
    ]
  },
  {
    slug: 'fries-museum-leeuwarden-netherlands',
    description: `<p>The Fries Museum in Leeuwarden tells the story of <strong>Friesland</strong>, the Dutch province with its own language and distinct identity. Founded in 1881, the museum moved to a striking modern building on Wilhelminaplein in 2013. The collection covers Frisian history, archaeology, and art, but it has a special claim to fame: Leeuwarden is the birthplace of <a href="/apps/masterpieces/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a>, the Victorian painter known for lavish depictions of ancient Rome and Greece.</p><p>The museum's Alma-Tadema holdings include his <a href="/apps/masterpieces/art/lawrence-alma-tadema-selfportrait"><strong>Self-Portrait</strong></a>, <a href="/apps/masterpieces/art/lawrence-alma-tadema-entrance-to-a-roman-theatre"><strong>Entrance to a Roman Theatre</strong></a>, and early Italian studies. Born here in 1836, Alma-Tadema left for London and became one of the highest-paid painters of the <a href="/apps/masterpieces/movement/academic-art"><strong>Academic Art</strong></a> period. The museum also covers the <strong>Mata Hari</strong> story (she was also from Leeuwarden) and rotating exhibitions of contemporary Frisian art.</p>`,
    faqs: [
      {
        question: "Which artists are at the Fries Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a> is the star. Born in Leeuwarden in 1836, his paintings of ancient Rome made him famous across Europe. The museum holds his <a href=\"/apps/masterpieces/art/lawrence-alma-tadema-selfportrait\"><strong>Self-Portrait</strong></a> and several other works."
      },
      {
        question: "What is the Fries Museum about?",
        answer: "It covers <strong>Frisian history and culture</strong>, from archaeological finds to modern art. The province of Friesland has its own language and traditions. The art collection centers on <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> and other artists connected to the region."
      },
      {
        question: "Where exactly is the Fries Museum?",
        answer: "It's on <strong>Wilhelminaplein</strong> in central Leeuwarden, the capital of Friesland in the northern Netherlands. The modern building opened in 2013. Leeuwarden is about two hours by train from Amsterdam, or reachable through the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> route via Haarlem."
      },
      {
        question: "What Alma-Tadema paintings can I see?",
        answer: "The museum displays <a href=\"/apps/masterpieces/art/lawrence-alma-tadema-entrance-to-a-roman-theatre\"><strong>Entrance to a Roman Theatre</strong></a>, his <a href=\"/apps/masterpieces/art/lawrence-alma-tadema-selfportrait\"><strong>Self-Portrait</strong></a>, and <a href=\"/apps/masterpieces/art/lawrence-alma-tadema-chiesa-san-clemente\"><strong>Chiesa San Clemente</strong></a>, plus early sketches from his student years."
      },
      {
        question: "What else is worth seeing at the Fries Museum?",
        answer: "The <strong>Mata Hari</strong> exhibition is popular. She was born in Leeuwarden as Margaretha Zelle before becoming a famous dancer and convicted spy. The museum also has strong <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> and contemporary Frisian photography collections."
      }
    ]
  },
  {
    slug: 'mus233e-calvet-avignon-france',
    description: `<p>The Musée Calvet occupies an elegant <strong>18th-century mansion</strong> on rue Joseph Vernet in Avignon. Named after Esprit Calvet, a physician who donated his art and natural history collection to the city in 1810, the museum has grown into one of southern France's better regional galleries. The collection spans paintings, sculpture, and decorative arts from the 15th to 20th centuries.</p><p>Highlights include works by <a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> and <a href="/apps/masterpieces/artist/raoul-dufy"><strong>Raoul Dufy</strong></a>, whose bright harbor scenes and church paintings capture the light of southern France. The museum's <strong>French painting collection</strong> covers <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> through early modernism. Avignon itself draws visitors for the Palais des Papes, but the Calvet is a quieter stop with real depth in its galleries.</p>`,
    faqs: [
      {
        question: "What paintings are in the Musée Calvet?",
        answer: "The collection includes <a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a>'s <a href=\"/apps/masterpieces/art/raoul-dufy-pier-of-le-havre-in-the-evening\"><strong>Pier of Le Havre in the Evening</strong></a> and <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a>'s <a href=\"/apps/masterpieces/art/edouard-manet-guitar-and-hat\"><strong>Guitar and Hat</strong></a>. French painting from the 15th to 20th century is the strength."
      },
      {
        question: "When was the Musée Calvet founded?",
        answer: "Esprit Calvet, a local physician, donated his collection to Avignon in <strong>1810</strong>. The museum opened in the Hôtel de Villeneuve-Martignan, a fine 18th-century townhouse. It's been expanding its <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and modern holdings ever since."
      },
      {
        question: "Where is this museum located?",
        answer: "At <strong>65 rue Joseph Vernet</strong> in Avignon, inside the old city walls. It's a 10-minute walk from the Palais des Papes. <a href=\"/apps/masterpieces/artist/raoul-dufy\"><strong>Dufy</strong></a>'s colorful paintings of French ports fit well with the Provençal atmosphere outside."
      },
      {
        question: "What art style does the Musée Calvet focus on?",
        answer: "French painting is the core, from <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> religious works through <strong>Impressionism</strong> and early modern art. The Dufy and Manet holdings give the collection a real lift. There's also a solid group of regional Provençal painters."
      },
      {
        question: "Is the Musée Calvet worth visiting?",
        answer: "If you're already in Avignon for the Palais des Papes, it's a worthwhile stop. Smaller crowds than Paris museums, and the <strong>18th-century mansion</strong> setting is beautiful. <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> and Dufy works alone justify the visit for art fans."
      }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-de-dijon-dijon-france',
    description: `<p>The Musée des Beaux-Arts de Dijon is housed in the <strong>Palace of the Dukes of Burgundy</strong>, one of France's grandest civic buildings. The museum opened in 1787, making it one of the oldest in France. The Dukes' tombs and their carved mourner figures are the signature attraction, but the painting collection covers six centuries of European art, from medieval Burgundian panels to 19th-century French works.</p><p>The collection includes <a href="/apps/masterpieces/artist/robert-campin"><strong>Robert Campin</strong></a>'s <a href="/apps/masterpieces/art/robert-campin-adoration-of-shepherds"><strong>Adoration of Shepherds</strong></a>, <a href="/apps/masterpieces/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a>'s delicate portraiture, and a <a href="/apps/masterpieces/artist/pontormo"><strong>Pontormo</strong></a> <strong>St. Sebastian</strong>. The <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> and Flemish holdings are particularly strong, reflecting Burgundy's historic ties to the Low Countries. Entry is free. After a decade-long renovation completed in 2019, the galleries are beautifully restored.</p>`,
    faqs: [
      {
        question: "What famous artworks does the Dijon museum have?",
        answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a>'s <a href=\"/apps/masterpieces/art/robert-campin-adoration-of-shepherds\"><strong>Adoration of Shepherds</strong></a> is a highlight, along with <a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a>'s <strong>Portrait of a Woman</strong> and <a href=\"/apps/masterpieces/artist/pontormo\"><strong>Pontormo</strong></a>'s St. Sebastian. The Ducal tombs are the museum's signature pieces."
      },
      {
        question: "What is the Palace of the Dukes of Burgundy?",
        answer: "The Dukes of Burgundy ruled one of medieval Europe's wealthiest states. Their palace in Dijon became the museum in <strong>1787</strong>. The <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> art reflects Burgundy's political connections to Flanders and the Low Countries."
      },
      {
        question: "Is the Dijon art museum free?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Only temporary exhibitions require tickets. After a full renovation completed in 2019, the palace galleries are in excellent condition. Works by <a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> and other Flemish masters look especially good in the restored rooms."
      },
      {
        question: "What art style does the museum specialize in?",
        answer: "<a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> and Flemish painting is the strength, reflecting Burgundy's historic ties to the Low Countries. The collection also covers Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and French 19th-century art. Medieval sculpture is another highlight."
      },
      {
        question: "Where is the museum in Dijon?",
        answer: "Right on the <strong>Place de la Libération</strong> in Dijon's historic center. The palace dominates the old town. Dijon is about 1.5 hours from Paris by TGV, and the museum pairs well with a visit to the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> churches nearby and the famous Burgundy vineyards."
      }
    ]
  },
  {
    slug: 'victoria-and-albert-museum-vampa-london-uk',
    description: `<p>The Victoria and Albert Museum is the <strong>world's largest museum of decorative arts and design</strong>, holding over 2.3 million objects across 145 galleries. Founded in 1852 after the Great Exhibition, it was renamed for Queen Victoria and Prince Albert in 1899. The collection covers 5,000 years of creativity: furniture, textiles, ceramics, fashion, photography, sculpture, and painting from every continent.</p><p>The painting holdings include <a href="/apps/masterpieces/artist/john-constable"><strong>John Constable</strong></a>'s <a href="/apps/masterpieces/art/john-constable-the-vale-of-dedham"><strong>The Vale of Dedham</strong></a>, <a href="/apps/masterpieces/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a>'s <a href="/apps/masterpieces/art/edward-burne-jones-merlin-and-nimue"><strong>Merlin and Nimue</strong></a>, and <a href="/apps/masterpieces/artist/william-blake"><strong>William Blake</strong></a>'s visionary works. The V&A also has the world's largest collection of <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> drawings and the Raphael Cartoons (on loan from the Royal Collection). Entry is free. The building itself, on Cromwell Road in South Kensington, is worth seeing for its tiled courtyards and ornate Victorian architecture.</p>`,
    faqs: [
      {
        question: "What paintings can I see at the V&A?",
        answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>John Constable</strong></a>'s <a href=\"/apps/masterpieces/art/john-constable-the-vale-of-dedham\"><strong>The Vale of Dedham</strong></a> and <a href=\"/apps/masterpieces/artist/william-blake\"><strong>William Blake</strong></a>'s visionary works are here. The museum also holds <strong>Raphael Cartoons</strong> and the world's largest <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> drawing collection."
      },
      {
        question: "When was the V&A founded?",
        answer: "It opened in <strong>1852</strong> after the Great Exhibition of 1851, originally called the Museum of Manufactures. Queen Victoria laid the foundation stone for the current building in 1899. <a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Edward Burne-Jones</strong></a> and other Victorian artists were early contributors."
      },
      {
        question: "What's the V&A best known for?",
        answer: "It's the <strong>world's largest decorative arts museum</strong>. Fashion, furniture, ceramics, and textiles draw the biggest crowds. But the fine art holdings are strong too, including <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscapes and an extensive photography collection."
      },
      {
        question: "Is the V&A free?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Some temporary exhibitions charge admission. Open daily, it's on Cromwell Road in South Kensington, next to the Natural History Museum. <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a>'s paintings are in the British galleries on the upper floors."
      },
      {
        question: "What's the building like?",
        answer: "The <strong>Victorian architecture</strong> is part of the experience. Ornate tiled courtyards, the grand Cast Courts with full-size plaster copies of famous sculptures, and the refreshment rooms designed by William Morris. The <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> influence is visible in the building's own decoration."
      }
    ]
  },
  {
    slug: 'vatican-museums',
    description: `<p>The Vatican Museums rank among the <strong>world's greatest art collections</strong>, assembled by popes over more than five centuries. Founded by Pope Julius II in 1506, the museums now span 54 galleries covering 7 kilometers of corridors. The collection includes ancient Roman sculpture, <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, Egyptian antiquities, and modern religious art. Over six million visitors walk through each year, most heading straight for the Sistine Chapel.</p><p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>'s <a href="/apps/masterpieces/art/sistine-chapel-ceiling"><strong>Sistine Chapel Ceiling</strong></a> (1508-1512) and <a href="/apps/masterpieces/art/last-judgment-michelangelo"><strong>The Last Judgment</strong></a> (1536-1541) are the undisputed highlights. The Raphael Rooms contain <a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a>'s <a href="/apps/masterpieces/art/the-school-of-athens"><strong>The School of Athens</strong></a>, widely considered the perfect <strong>Renaissance composition</strong>. Ancient sculpture fills the Pio-Clementino wing, including the <a href="/apps/masterpieces/art/laocoon-and-his-sons"><strong>Laocoön and His Sons</strong></a>, <a href="/apps/masterpieces/art/apollo-belvedere"><strong>Apollo Belvedere</strong></a>, and the <a href="/apps/masterpieces/art/belvedere-torso"><strong>Belvedere Torso</strong></a> that Michelangelo studied obsessively. <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a>'s <a href="/apps/masterpieces/art/entombment-christ-caravaggio-vatican"><strong>Entombment of Christ</strong></a> hangs in the Pinacoteca, alongside Raphael's <a href="/apps/masterpieces/art/transfiguration-raphael"><strong>Transfiguration</strong></a>, his final masterwork.</p>`,
    faqs: [
      {
        question: "What are the most famous artworks in the Vatican Museums?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>'s <a href=\"/apps/masterpieces/art/sistine-chapel-ceiling\"><strong>Sistine Chapel Ceiling</strong></a> and <a href=\"/apps/masterpieces/art/the-school-of-athens\"><strong>The School of Athens</strong></a> by <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> top the list. Ancient sculptures like the <strong>Laocoön</strong> and <strong>Apollo Belvedere</strong> are also essential."
      },
      {
        question: "When were the Vatican Museums founded?",
        answer: "Pope <strong>Julius II</strong> founded the museums in 1506, starting with the Laocoön group discovered that year in a Roman vineyard. Successive popes expanded the collection over five centuries. <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> painted the Sistine Ceiling just two years later."
      },
      {
        question: "Who are the main artists in the Vatican collection?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> and <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> dominate, but the Pinacoteca also holds <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>'s <a href=\"/apps/masterpieces/art/entombment-christ-caravaggio-vatican\"><strong>Entombment of Christ</strong></a> and <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>'s unfinished <strong>St. Jerome</strong>."
      },
      {
        question: "How big are the Vatican Museums?",
        answer: "The museums span <strong>54 galleries</strong> across 7 kilometers of corridors. Budget at least 3-4 hours. Over 6 million people visit annually. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> galleries alone could fill an entire day if you're not rushing."
      },
      {
        question: "What should I know before visiting?",
        answer: "Book tickets online to skip the long entrance queue. The <strong>Sistine Chapel</strong> requires modest dress (covered shoulders and knees). Photography without flash is allowed everywhere except the Chapel. Visit early morning or late afternoon to avoid the worst crowds. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Rooms are right before the Chapel."
      }
    ]
  },
  {
    slug: 'ateneum',
    description: `<p>The Ateneum Art Museum holds the <strong>largest collection of classical art in Finland</strong>, with over 20,000 works from the 18th century to the 1960s. It opened in 1887 in a neo-Renaissance building on Rautatientori square, directly opposite Helsinki's central railway station. The building was designed by Theodor Höijer and decorated with busts of <a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a>, Phidias, and Bramante on its facade.</p><p>Finnish art dominates the collection. <a href="/apps/masterpieces/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a>'s <a href="/apps/masterpieces/art/aino-triptych"><strong>Aino Triptych</strong></a> (1891) is the museum's most recognized painting, depicting scenes from Finland's national epic, the Kalevala. Gallen-Kallela pioneered a distinctly Finnish style blending <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolism</strong></a> with <strong>National Romantic</strong> themes. The museum also covers Finnish golden age painters like Albert Edelfelt and Helene Schjerfbeck, whose stark self-portraits are among the most powerful in Nordic art.</p>`,
    faqs: [
      {
        question: "What is the Ateneum's most famous painting?",
        answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a>'s <a href=\"/apps/masterpieces/art/aino-triptych\"><strong>Aino Triptych</strong></a> (1891) is the star. It depicts a scene from the <strong>Kalevala</strong>, Finland's national epic, in a dramatic three-panel format that became an icon of Finnish culture."
      },
      {
        question: "What kind of art does the Ateneum show?",
        answer: "Mostly <strong>Finnish and Nordic art</strong> from the 1700s to 1960s. The collection covers Finnish Golden Age painters, <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, and early modernism. There's also a smaller European collection with works by Van Gogh, Cézanne, and Gauguin."
      },
      {
        question: "Where is the Ateneum located?",
        answer: "Right on <strong>Rautatientori square</strong>, directly across from Helsinki's central railway station. You can't miss it. The neo-Renaissance building from 1887 has sculptor busts of <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> and other masters on its facade."
      },
      {
        question: "Who was Akseli Gallen-Kallela?",
        answer: "Finland's most important painter. <a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela</strong></a> blended <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> techniques with Finnish mythology, creating a <strong>National Romantic</strong> style that influenced Finnish identity. Several of his major works, including the Aino Triptych, live at the Ateneum."
      },
      {
        question: "What's the difference between the Ateneum and other Helsinki museums?",
        answer: "The Ateneum covers <strong>classical Finnish art</strong> (pre-1960s). The nearby Kiasma museum handles contemporary art, and the HAM gallery shows Helsinki's own collection. All three belong to the Finnish National Gallery. <a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Gallen-Kallela</strong></a> also has a dedicated studio museum in Espoo."
      }
    ]
  },
  {
    slug: 'national-gallery-of-ancient-art-gnaa-rome-italy',
    description: `<p>The Galleria Nazionale d'Arte Antica is split across two Roman palaces: <strong>Palazzo Barberini</strong> and <strong>Palazzo Corsini</strong>. Together they form Italy's national collection of paintings from the 13th to 18th centuries. Palazzo Barberini, a <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> masterpiece designed by Bernini and Borromini, houses the larger portion. The ceiling fresco by Pietro da Cortona in the main hall is itself a reason to visit.</p><p>The painting collection includes <a href="/apps/masterpieces/artist/quentin-matsys"><strong>Quentin Matsys</strong></a>'s <a href="/apps/masterpieces/art/quentin-matsys-portrait-of-erasmus-of-rotterdam"><strong>Portrait of Erasmus of Rotterdam</strong></a>, <a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a>'s refined <a href="/apps/masterpieces/art/bronzino-portrait-of-a-lady-with-a-puppy"><strong>Portrait of a Lady with a Puppy</strong></a>, and Caravaggio's Judith Beheading Holofernes. <a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> and other French painters who worked in Rome are also well represented. Raphael's La Fornarina, a portrait of his lover, is one of the gallery's most popular works.</p>`,
    faqs: [
      {
        question: "What paintings are in the National Gallery of Ancient Art?",
        answer: "<a href=\"/apps/masterpieces/artist/quentin-matsys\"><strong>Quentin Matsys</strong></a>'s <a href=\"/apps/masterpieces/art/quentin-matsys-portrait-of-erasmus-of-rotterdam\"><strong>Portrait of Erasmus</strong></a> and <a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a>'s <a href=\"/apps/masterpieces/art/bronzino-portrait-of-a-lady-with-a-puppy\"><strong>Portrait of a Lady with a Puppy</strong></a> are here. Caravaggio's <strong>Judith Beheading Holofernes</strong> and Raphael's La Fornarina are also highlights."
      },
      {
        question: "Where is this gallery located?",
        answer: "It's split between two buildings. <strong>Palazzo Barberini</strong> (Via delle Quattro Fontane) has the main collection. Palazzo Corsini (Trastevere) holds the rest. Both are in central Rome. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> architecture of Palazzo Barberini alone justifies the visit."
      },
      {
        question: "What style of art does the gallery cover?",
        answer: "Italian painting from the 13th to 18th centuries, heavy on <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> and <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> works. Caravaggio, Raphael, and Filippo Lippi are well represented. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> and other French painters who lived in Rome also feature."
      },
      {
        question: "What's special about Palazzo Barberini?",
        answer: "The building itself is a <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> landmark, designed by <strong>Bernini and Borromini</strong>. Pietro da Cortona's ceiling fresco in the main hall is one of the great illusionistic paintings of the 17th century. The staircase by Borromini is an architectural icon."
      },
      {
        question: "Is it the same as the Palazzo Barberini museum?",
        answer: "Yes, <strong>Palazzo Barberini</strong> is one of the two sites of the Galleria Nazionale d'Arte Antica. A single ticket covers both palaces. <a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a>'s portraits and the Caravaggio works are at Barberini, while Corsini holds 17th-18th century collections."
      }
    ]
  },
  {
    slug: 'national-gallery-ireland',
    description: `<p>The National Gallery of Ireland opened in <strong>1864</strong> on Merrion Square in Dublin, founded with a strong collection of Old Master paintings. The gallery holds over 16,000 works, with particular strength in <strong>Irish art</strong>, Italian Baroque, and Dutch Golden Age painting. Jack B. Yeats (brother of the poet W.B. Yeats) dominates the Irish collection, and Caravaggio's <em>The Taking of Christ</em>, rediscovered in a Dublin Jesuit house in 1990, is the gallery's biggest draw.</p><p>The collection includes a fine pair of companion paintings by <a href="/apps/masterpieces/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a>: <a href="/apps/masterpieces/art/man-writing-letter"><strong>Man Writing a Letter</strong></a> and <a href="/apps/masterpieces/art/woman-reading-letter-metsu"><strong>Woman Reading a Letter</strong></a> (both 1665). Vermeer, Rembrandt, and Velázquez are also represented. Entry is free. The gallery sits between Merrion Square and Clare Street, a short walk from <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dublin's Georgian quarter</strong></a>.</p>`,
    faqs: [
      {
        question: "What are the highlights of the National Gallery of Ireland?",
        answer: "Caravaggio's <strong>The Taking of Christ</strong>, rediscovered in 1990, is the star piece. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>'s companion paintings, <a href=\"/apps/masterpieces/art/man-writing-letter\"><strong>Man Writing a Letter</strong></a> and <a href=\"/apps/masterpieces/art/woman-reading-letter-metsu\"><strong>Woman Reading a Letter</strong></a>, are also key works."
      },
      {
        question: "Is the National Gallery of Ireland free?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Some special exhibitions charge admission. Open six days a week (closed Monday mornings). The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> galleries on the upper floor are often quieter than the ground floor."
      },
      {
        question: "Which Dutch artists are at the gallery?",
        answer: "<a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>'s letter paintings are standouts. The collection also includes works by Rembrandt, Vermeer, and other <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> masters. The <strong>Beit Collection</strong> donation in the 1980s significantly strengthened the Old Master holdings."
      },
      {
        question: "Where is the gallery located in Dublin?",
        answer: "On <strong>Merrion Square West</strong> in Dublin's Georgian quarter, near the Dáil (Irish parliament) and Trinity College. Multiple entrances face Merrion Square and Clare Street. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Metsu</strong></a>'s letter paintings are in the Dutch galleries on the first floor."
      },
      {
        question: "What Irish art can I see?",
        answer: "<strong>Jack B. Yeats</strong> (brother of poet W.B. Yeats) dominates the Irish wing with bold, colorful scenes of Irish life. The gallery also covers Irish art from the 17th century onwards. <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> Irish landscape painting is a particular strength."
      }
    ]
  },
  {
    slug: 'princeton-university-art-museum-puam-princeton-nj-',
    description: `<p>Princeton University Art Museum holds over 112,000 works spanning global art history, from ancient Chinese bronzes to contemporary photography. Founded in <strong>1882</strong>, it ranks among the top university art museums in America alongside Yale and Harvard. A major new building designed by Sir David Adjaye is set to dramatically expand gallery space, replacing the older facility on the main campus.</p><p>The European painting collection includes <a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a>'s <a href="/apps/masterpieces/art/edouard-manet-gypsy-with-a-cigarette"><strong>Gypsy with a Cigarette</strong></a>, a <a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> panel, and works by <a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a>. The museum is strong in <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and early modern painting. Free admission and its campus setting make it one of the most accessible art collections on the East Coast.</p>`,
    faqs: [
      {
        question: "What European paintings does Princeton's museum have?",
        answer: "<a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a>'s <a href=\"/apps/masterpieces/art/edouard-manet-gypsy-with-a-cigarette\"><strong>Gypsy with a Cigarette</strong></a>, <a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a>'s <strong>Self Portrait</strong>, and a <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> panel are among the highlights. The collection also holds Impressionist and post-Impressionist works."
      },
      {
        question: "Is the Princeton art museum free?",
        answer: "Yes, <strong>admission is free</strong>. The museum is on Princeton University's main campus, open to the public year-round. A major new building designed by <strong>David Adjaye</strong> will expand gallery space. <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and modern European paintings are among the draws."
      },
      {
        question: "How does it compare to other university museums?",
        answer: "Princeton, Yale, and Harvard have America's three best university art collections. Princeton's <strong>112,000 objects</strong> cover a wide range, from <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> to modern photography. The new Adjaye building will put it on par with mid-sized city museums."
      },
      {
        question: "What art periods does the collection cover?",
        answer: "Everything from ancient to contemporary. European strengths include <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> panels, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painting, and early modern works. The Asian, Pre-Columbian, and African collections are also noteworthy."
      },
      {
        question: "Where is the museum located?",
        answer: "On <strong>Princeton University's main campus</strong> in Princeton, New Jersey, about an hour from New York City by train. The current entrance is on Nassau Street. <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> and the European paintings are in the galleries closest to the main entrance."
      }
    ]
  },
  {
    slug: 'kunsthalle-bremen',
    description: `<p>The Kunsthalle Bremen is one of Germany's oldest civic art museums, founded by <strong>private citizens in 1823</strong>. Unlike state-run museums, it's still operated by the Kunstverein (art association), making it one of the few major German galleries funded primarily by membership and donations. The collection covers European painting and sculpture from the 14th century to the present, with special depth in <strong>German art</strong>.</p><p>Highlights include <a href="/apps/masterpieces/artist/max-liebermann"><strong>Max Liebermann</strong></a>'s <a href="/apps/masterpieces/art/parrot-walk"><strong>The Parrot Walk</strong></a> and works by <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a>. The print and drawing cabinet holds over 220,000 works on paper, one of Germany's largest such collections. The <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> holdings are strong, with works by Paula Modersohn-Becker, who worked nearby in the artists' colony of Worpswede. A 2011 renovation added modern gallery wings to the original neo-Renaissance building.</p>`,
    faqs: [
      {
        question: "What art can I see at the Kunsthalle Bremen?",
        answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Max Liebermann</strong></a>'s <a href=\"/apps/masterpieces/art/parrot-walk\"><strong>The Parrot Walk</strong></a> is a highlight, along with <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a>'s drawings and German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> works. Paula Modersohn-Becker's paintings are another draw."
      },
      {
        question: "What makes the Kunsthalle Bremen unusual?",
        answer: "It's been run by a <strong>private art association</strong> (Kunstverein) since 1823, not the state. Members fund acquisitions directly. That's rare for a museum of this quality. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a> drawings and a print cabinet of 220,000 works on paper reflect that collector tradition."
      },
      {
        question: "What art style does the museum specialize in?",
        answer: "German art is the backbone, from medieval to modern. <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> is particularly strong, reflecting Bremen's proximity to the Worpswede artists' colony. <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a>'s <strong>Impressionist-influenced</strong> canvases bridge the 19th and 20th centuries."
      },
      {
        question: "Where is the Kunsthalle Bremen?",
        answer: "On <strong>Am Wall</strong> in Bremen's city center, facing the old moat park. The building combines a neo-Renaissance original with modern additions from 2011. Bremen is in northern Germany, reachable from Hamburg in about an hour. <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> galleries are on the upper floors."
      },
      {
        question: "When was the Kunsthalle Bremen founded?",
        answer: "The Kunstverein was established in <strong>1823</strong> by Bremen citizens who wanted a public art collection. The current building went up in 1849 and has been expanded several times. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a>'s works were among the earliest acquisitions that built the collection's reputation."
      }
    ]
  },
  {
    slug: 'duomo-di-siena-siena-italy',
    description: `<p>The Duomo di Siena (Cathedral of Santa Maria Assunta) is one of Italy's most ornate medieval cathedrals, built between the <strong>12th and 14th centuries</strong>. The exterior alternates bands of dark green and white marble in the distinctive Sienese style. Inside, the <strong>marble floor</strong> is the cathedral's greatest treasure: 56 panels of biblical and allegorical scenes by various artists, worked on from the 1370s to the 1540s. It's one of the most elaborate cathedral floors ever created.</p><p>The cathedral holds sculptures by <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>, including early works made for the Piccolomini Altar when he was in his twenties. Nicola Pisano's carved marble pulpit (1268) is a masterwork of medieval sculpture. The Piccolomini Library, off the left aisle, contains Pinturicchio's vivid frescoes of Pope Pius II's life. The nearby Museo dell'Opera del Duomo holds Duccio's <strong>Maestà</strong>, Siena's most important painting.</p>`,
    faqs: [
      {
        question: "What Michelangelo works are in Siena's Duomo?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> carved four figures for the <strong>Piccolomini Altar</strong> in the early 1500s, including St. Paul and St. Peter. These are early works, made before he started the Sistine Chapel ceiling in Rome."
      },
      {
        question: "What's special about the cathedral floor?",
        answer: "The <strong>marble floor</strong> has 56 narrative panels depicting biblical and mythological scenes, created over nearly two centuries. Portions are covered for protection and only revealed during special periods, usually <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> festival seasons in late summer."
      },
      {
        question: "When was the Siena Duomo built?",
        answer: "Construction started in the <strong>12th century</strong> and continued through the 14th. Siena originally planned to build an even larger cathedral, but the Black Plague of 1348 halted those plans. <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>'s sculptures were added around 1501-1504."
      },
      {
        question: "Is there a dress code?",
        answer: "Yes. Like most Italian churches, the Duomo requires <strong>covered shoulders and knees</strong>. No sleeveless tops or shorts. Photography is allowed inside but without flash. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> frescoes in the Piccolomini Library are worth the ticket."
      },
      {
        question: "What else should I see nearby?",
        answer: "The <strong>Museo dell'Opera del Duomo</strong> next door holds Duccio's Maestà and offers panoramic views from the unfinished nave wall. The Baptistery below the cathedral has a font with bronze panels by Donatello and <a href=\"/apps/masterpieces/artist/lorenzo-ghiberti\"><strong>Ghiberti</strong></a>. A combined ticket covers all sites."
      }
    ]
  },
  {
    slug: 'cooper-hewitt-smithsonian-design-museum-new-york-c',
    description: `<p>The Cooper Hewitt is the <strong>Smithsonian's design museum</strong>, the only museum in the United States devoted exclusively to historical and contemporary design. Founded in 1897 by the Hewitt sisters (granddaughters of industrialist Peter Cooper), it moved to Andrew Carnegie's former mansion on Fifth Avenue in 1976. The collection holds over 210,000 objects spanning <strong>30 centuries of design</strong>, from textiles and wallpapers to digital interaction.</p><p>The museum's drawing collection includes landscape studies by <a href="/apps/masterpieces/artist/frederic-edwin-church"><strong>Frederic Edwin Church</strong></a>, the <a href="/apps/masterpieces/movement/hudson-river-school"><strong>Hudson River School</strong></a> painter known for dramatic South American and North American landscapes. Church's <a href="/apps/masterpieces/art/frederic-edwin-church-cotopaxi-seen-from-ambato-ecuador"><strong>Cotopaxi seen from Ambato</strong></a> and his Maine studies demonstrate the <strong>detailed field sketching</strong> that made his finished paintings so geologically accurate. The Carnegie Mansion itself is a landmark worth visiting, with its original wood paneling and garden.</p>`,
    faqs: [
      {
        question: "What kind of museum is the Cooper Hewitt?",
        answer: "It's the <strong>Smithsonian's design museum</strong>, the only US museum dedicated entirely to design. The collection covers textiles, furniture, graphics, and decorative arts. <a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a>'s landscape drawings are among its fine art holdings."
      },
      {
        question: "What paintings and drawings are here?",
        answer: "<a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a>'s <a href=\"/apps/masterpieces/art/frederic-edwin-church-cotopaxi-seen-from-ambato-ecuador\"><strong>Cotopaxi seen from Ambato</strong></a> and other <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> sketches are highlights. The drawing collection includes over 13,000 works on paper from various periods."
      },
      {
        question: "Where is the Cooper Hewitt located?",
        answer: "At <strong>2 East 91st Street</strong> on Manhattan's Upper East Side, in Andrew Carnegie's former mansion. It's on Museum Mile, near the Guggenheim and the Met. <a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Church</strong></a>'s landscape studies are usually displayed in the drawing galleries upstairs."
      },
      {
        question: "What's the building like?",
        answer: "The <strong>Carnegie Mansion</strong> (1903) was the first private home in New York with a structural steel frame and an Otis elevator. The garden is open seasonally. It's a Georgian Revival building that became a National Historic Landmark. <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> works suit the gilded-age setting."
      },
      {
        question: "Is the Cooper Hewitt free?",
        answer: "No, unlike most Smithsonian museums, it charges <strong>admission</strong> (currently around $18 for adults). It's part of the Smithsonian system but located in New York rather than Washington. <a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Church</strong></a>'s landscape drawings rotate on display due to light sensitivity."
      }
    ]
  },
  {
    slug: 'mus233e-de-picardie-amiens-france',
    description: `<p>The Musée de Picardie in Amiens is one of the first purpose-built provincial museums in France, constructed between <strong>1855 and 1867</strong> in the style of a Parisian palace. Napoleon III supported its creation, and the building itself was designed to rival the Louvre's galleries. The collection spans archaeology, medieval sculpture, and painting from the 16th century to the modern era.</p><p>The painting galleries feature <a href="/apps/masterpieces/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a>, who created large decorative murals for the museum's staircase. His <a href="/apps/masterpieces/art/pierre-puvis-de-chavannes-work"><strong>Work</strong></a> is among the monumental canvases here. The collection also includes <a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a>'s charming <a href="/apps/masterpieces/art/jean-honore-fragonard-the160cradle"><strong>The Cradle</strong></a> and pastels by <a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a>. After a major renovation, the museum reopened in 2019 with improved galleries and a contemporary art wing.</p>`,
    faqs: [
      {
        question: "What paintings are in the Musée de Picardie?",
        answer: "<a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a>'s monumental <a href=\"/apps/masterpieces/art/pierre-puvis-de-chavannes-work\"><strong>Work</strong></a>, <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a>'s <a href=\"/apps/masterpieces/art/jean-honore-fragonard-the160cradle\"><strong>The Cradle</strong></a>, and pastels by <a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> are among the highlights. French painting from the 16th to 19th centuries dominates."
      },
      {
        question: "When was the Musée de Picardie built?",
        answer: "Built between <strong>1855 and 1867</strong> under Napoleon III, it was one of France's first purpose-built provincial museums. The palace-style architecture was meant to rival Paris. <a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> painted murals directly on the staircase walls."
      },
      {
        question: "Where is Amiens?",
        answer: "Amiens is in <strong>northern France</strong>, about 120 km north of Paris (roughly one hour by train). The museum is in the city center, near the famous Amiens Cathedral, the largest Gothic cathedral in France. <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> and French classical paintings suit the setting."
      },
      {
        question: "What art style does the museum focus on?",
        answer: "French painting is the core, with strength in <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> and <strong>19th-century decorative painting</strong>. <a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a>'s murals represent the grand tradition of French public art. Medieval sculpture and archaeology round out the collection."
      },
      {
        question: "Has the museum been renovated?",
        answer: "Yes, a major renovation completed in <strong>2019</strong> upgraded the galleries and added a contemporary art wing. The restored staircase murals by <a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> look better than they have in decades. The archaeological galleries were also expanded."
      }
    ]
  },
  {
    slug: 'mus233e-picasso-paris-france',
    description: `<p>The Musée Picasso Paris occupies the <strong>Hôtel Salé</strong>, a 17th-century mansion in the Marais district. It opened in 1985, built around the enormous collection of works that Picasso's heirs donated to the French state in lieu of inheritance tax. The museum holds over <strong>5,000 works by Picasso</strong> (paintings, sculptures, drawings, ceramics) plus his personal art collection, which included pieces by Cézanne, Matisse, and Renoir.</p><p>The collection traces Picasso's full career, from early Blue and Rose period paintings through <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a>, <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealism</strong></a>, and his late monumental works. The museum also holds drawings and studies by artists Picasso admired, including <a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a>'s figure studies. After a five-year renovation (2009-2014), the mansion's <strong>grand staircase and period interiors</strong> provide an elegant backdrop for one of the world's most important single-artist collections.</p>`,
    faqs: [
      {
        question: "What can I see at the Musée Picasso?",
        answer: "Over <strong>5,000 works by Picasso</strong> spanning his entire career: paintings, sculpture, ceramics, and drawings. His personal collection of works by Cézanne, Matisse, and <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a> is also displayed. It's one of the world's largest Picasso collections."
      },
      {
        question: "How did the museum get its collection?",
        answer: "After Picasso died in 1973, his heirs donated thousands of works to France to settle <strong>inheritance tax</strong>. A second donation came after his wife Jacqueline's death. This \"dation\" system created one of the most important single-artist museums. <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> works are well represented."
      },
      {
        question: "What periods of Picasso's work are covered?",
        answer: "All of them: <strong>Blue Period</strong>, Rose Period, <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>, neoclassical, <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> experiments, and late works. The chronological display through the Hôtel Salé makes it easy to follow his artistic evolution over seven decades."
      },
      {
        question: "Where is the Musée Picasso located?",
        answer: "In the <strong>Hôtel Salé</strong>, a 17th-century mansion at 5 Rue de Thorigny in the Marais (3rd arrondissement). Metro: Saint-Paul or Chemin Vert. <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a>'s drawings from Picasso's personal collection are usually displayed on the upper floors."
      },
      {
        question: "What's the building like?",
        answer: "The Hôtel Salé dates from <strong>1659</strong> and was built for a salt tax collector (hence the name). The grand staircase and ornate period rooms were restored during a five-year renovation. <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> paintings hung in Baroque interiors create a striking contrast."
      }
    ]
  },
  {
    slug: 'barber-institute-of-fine-arts-birmingham-uk',
    description: `<p>The Barber Institute of Fine Arts is a <strong>university gallery</strong> at the University of Birmingham, founded in 1932 by Lady Barber with a specific mandate: only acquire works of "outstanding quality." That selectiveness produced a small but remarkable collection. The Art Deco building, designed by Robert Atkinson, opened in 1939 and sits on the university's Edgbaston campus.</p><p>The collection spans Old Masters to the early 20th century. <a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a>'s <a href="/apps/masterpieces/art/giovanni-bellini-st-jerome-in-the-wilderness"><strong>St. Jerome in the Wilderness</strong></a> (1496) and works by <a href="/apps/masterpieces/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a> represent the range. Monet, Degas, Magritte, and Rossetti are also here. For a gallery of this size, the quality per square foot is hard to beat in Britain. Entry is free, and the campus setting keeps it blissfully uncrowded.</p>`,
    faqs: [
      {
        question: "What famous paintings are at the Barber Institute?",
        answer: "<a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>'s <a href=\"/apps/masterpieces/art/giovanni-bellini-st-jerome-in-the-wilderness\"><strong>St. Jerome in the Wilderness</strong></a> (1496) is a standout. Works by Monet, Degas, Rossetti, and <a href=\"/apps/masterpieces/artist/pierre-puvis-de-chavannes\"><strong>Puvis de Chavannes</strong></a> fill the galleries. Quality is consistently high."
      },
      {
        question: "What makes the Barber Institute unique?",
        answer: "Lady Barber's founding mandate required that only works of <strong>\"outstanding quality\"</strong> be acquired. That selectiveness created a small but concentrated collection. A <a href=\"/apps/masterpieces/movement/venetian-school\"><strong>Venetian</strong></a> Bellini hangs near a Magritte and a Monet. Few galleries pack this much range into so few rooms."
      },
      {
        question: "Is the Barber Institute free?",
        answer: "Yes, <strong>admission is free</strong>. It's on the University of Birmingham campus in Edgbaston, about 3 miles south of the city center. Open Monday through Saturday. <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a>'s St. Jerome and the Impressionist works are in the main ground floor gallery."
      },
      {
        question: "Where exactly is it?",
        answer: "On the <strong>University of Birmingham campus</strong> in Edgbaston. The nearest station is University (Cross-City Line). The Art Deco building from 1939 also hosts concerts in its gallery. <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> paintings are displayed alongside the building's original period furnishings."
      },
      {
        question: "What art periods does the collection cover?",
        answer: "From 13th-century Italian panels to early 20th-century modern works. <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, and <strong>Pre-Raphaelite</strong> paintings are particularly strong. The coin collection, with over 16,000 pieces, is also nationally significant."
      }
    ]
  },
  {
    slug: 'basilica-of-st-domenico-bologna-italy',
    description: `<p>The Basilica of San Domenico in Bologna has been a Dominican church since <strong>1251</strong> and holds the marble tomb of <strong>St. Dominic</strong>, founder of the Dominican Order. The tomb, known as the Arca di San Domenico, was started by Nicola Pisano and his workshop in the 1260s. Over two centuries later, a young <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> was called in to carve additional figures for the monument.</p><p>Michelangelo created three marble sculptures for the Arca around 1494-1495, when he was just 19 years old: <a href="/apps/masterpieces/art/michelangelo-angel-with-candlestick"><strong>Angel with Candlestick</strong></a>, <a href="/apps/masterpieces/art/michelangelo-st-proculus"><strong>St. Proculus</strong></a>, and <a href="/apps/masterpieces/art/michelangelo-st-petronius"><strong>St. Petronius</strong></a>. The Angel is often compared to its counterpart by Nicola dell'Arca, and the difference shows Michelangelo's <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> naturalism breaking from the older Gothic style. The church is free to enter and sits on Piazza San Domenico, a quiet square in Bologna's university quarter.</p>`,
    faqs: [
      {
        question: "What Michelangelo works are in San Domenico?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> carved three marble figures around 1494: <a href=\"/apps/masterpieces/art/michelangelo-angel-with-candlestick\"><strong>Angel with Candlestick</strong></a>, <a href=\"/apps/masterpieces/art/michelangelo-st-proculus\"><strong>St. Proculus</strong></a>, and <a href=\"/apps/masterpieces/art/michelangelo-st-petronius\"><strong>St. Petronius</strong></a>. He was only 19 when he made them."
      },
      {
        question: "What is the Arca di San Domenico?",
        answer: "It's the <strong>marble tomb of St. Dominic</strong>, founder of the Dominican Order. Nicola Pisano started it in the 1260s. <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> added figures over 200 years later. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and Gothic carvings sit side by side."
      },
      {
        question: "Is the basilica free to visit?",
        answer: "Yes, <strong>entry is free</strong>. It's an active church, so dress modestly (covered shoulders and knees). <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>'s sculptures are in the chapel on the right side of the nave. The church is open daily with typical Italian church hours."
      },
      {
        question: "Where is the Basilica of San Domenico?",
        answer: "On <strong>Piazza San Domenico</strong> in Bologna's old city, south of Piazza Maggiore. It's a quiet square in the university quarter. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> sculptures are a short walk from Bologna's famous leaning towers and covered porticoes."
      },
      {
        question: "Why did Michelangelo work in Bologna?",
        answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> fled Florence in <strong>1494</strong> after the Medici were expelled. He stayed in Bologna about a year, where a local patron arranged the San Domenico commission. The <strong>Angel with Candlestick</strong> already shows his skill at bringing marble to life."
      }
    ]
  }
];

async function enrichMuseums() {
  console.log(`Enriching ${museumData.length} museums (lean batch 1)...\n`);
  let updated = 0;
  let errors = 0;
  for (const museum of museumData) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          description: museum.description,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${result.name} (${museum.faqs.length} FAQs)`);
      updated++;
    } catch (error) {
      console.error(`Error: ${museum.slug}:`, error.message);
      errors++;
    }
  }
  console.log(`\nBatch complete! ${updated} updated, ${errors} errors.`);
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
