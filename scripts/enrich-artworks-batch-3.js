const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: 'frida-kahlo-portrait-of-alicia-galant',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait of her friend Alicia Galant in 1927, just three years after the devastating bus accident that would shape the rest of her life and art. The oil on canvas measures 107 by 93 centimeters and shows Kahlo's early interest in <strong>Italian Renaissance portraiture</strong>, particularly the work of Leonardo da Vinci, Titian, and Caravaggio.</p>

<p>At this point in her career, Kahlo was still developing the intensely personal style that would later make her famous. This portrait follows more traditional conventions than her later self-portraits, positioning Galant in a formal pose against a dark background. The influence of Old Masters is clear in the careful rendering of Alicia's face and the <strong>classical composition</strong>.</p>

<p>The painting belongs to the <a href="/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico"><strong>Dolores Olmedo Collection</strong></a> in Mexico City, which holds the largest collection of Kahlo's works in the world. Dolores Olmedo was a friend and patron of both Kahlo and Diego Rivera, and her museum preserves many pieces from their early careers alongside their mature works.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of Alicia Galant?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico\"><strong>Dolores Olmedo Collection</strong></a> in Mexico City. The museum holds the world's largest collection of <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo's</strong></a> works."
      },
      {
        question: "When did Frida Kahlo paint this portrait?",
        answer: "Kahlo created this portrait in <strong>1927</strong>, early in her artistic career. She was influenced by Italian Renaissance painters like Leonardo, Titian, and Caravaggio."
      },
      {
        question: "Who was Alicia Galant?",
        answer: "<strong>Alicia Galant</strong> was a friend of Frida Kahlo. This portrait represents Kahlo's early, more traditional approach to portraiture before developing her signature personal style."
      }
    ]
  },
  {
    slug: 'carl-larsson-portrait-of-alma',
    description: `<p><a href="/apps/masterpieces/artist/carl-larsson"><strong>Carl Larsson</strong></a> painted this portrait in 1887, capturing a subject who appears relaxed and contemplative. The Swedish painter was known for his warm depictions of domestic life, and his portraits reflect this same intimate approach. Rather than following rigid formal conventions, Larsson sought to reveal the <strong>humanity and personality</strong> of his subjects.</p>

<p>During the 1880s, portrait painting was undergoing a transformation across Europe. Artists moved away from stiff, formal representations toward more personal and emotionally resonant approaches. Larsson contributed to this shift by depicting his subjects in ways that felt natural rather than posed, capturing <strong>genuine moments</strong> rather than constructed scenes.</p>

<p>Larsson spent significant time in France before returning to Sweden, where he became famous for his watercolors depicting family life at his home in Sundborn. This portrait demonstrates his skill in capturing character through careful observation of expression and posture. The work is now in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "When was this portrait painted?",
        answer: "<a href=\"/apps/masterpieces/artist/carl-larsson\"><strong>Carl Larsson</strong></a> created this portrait in <strong>1887</strong>. It reflects his personal approach to portraiture, emphasizing character over formal conventions."
      },
      {
        question: "What was Carl Larsson known for?",
        answer: "Larsson became famous for warm <strong>watercolors of domestic life</strong> at his home in Sundborn, Sweden. His intimate style influenced Scandinavian art and interior design."
      },
      {
        question: "Where is this painting located?",
        answer: "Portrait of Alma is in a <strong>private collection</strong>. Larsson's works can be found in major Swedish museums including the Nationalmuseum in Stockholm."
      }
    ]
  },
  {
    slug: 'henri-fantin-latour-portrait-of-alphonse-legros',
    description: `<p><a href="/apps/masterpieces/artist/henri-fantin-latour"><strong>Henri Fantin-Latour</strong></a> painted this portrait of his fellow artist Alphonse Legros around 1858, during the early years of their friendship. Both painters were part of the circle of French Realists who gathered at cafés in Paris, sharing ideas and supporting each other's work. Fantin-Latour became known for his ability to capture the <strong>personalities of artists and intellectuals</strong> in his portraits.</p>

<p>Alphonse Legros (1837-1911) was a French-born painter, etcher, and sculptor who eventually settled in England, where he taught at the Slade School of Fine Art. The two artists met in Paris and maintained a lifelong friendship. This early portrait shows Legros as a young man, before his <strong>distinguished teaching career</strong> and his work developing etching techniques.</p>

<p>Fantin-Latour's Realist approach emphasizes honest observation over idealization. The painting is executed in oil on canvas and remains in a <strong>private collection</strong>. Fantin-Latour would later become famous for his group portraits of Impressionist and Symbolist artists, as well as his flower paintings.</p>`,
    faqs: [
      {
        question: "Who was Alphonse Legros?",
        answer: "<strong>Alphonse Legros</strong> (1837-1911) was a French painter, etcher, and sculptor. He later moved to England and taught at the <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>Slade School of Fine Art</strong></a>."
      },
      {
        question: "When was this portrait painted?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Fantin-Latour</strong></a> created this portrait around <strong>1858</strong>, early in both artists' careers when they were part of the Parisian Realist circle."
      },
      {
        question: "Where is this painting located?",
        answer: "The portrait is in a <strong>private collection</strong>. Fantin-Latour's portraits can be found in major museums including the Musée d'Orsay in Paris."
      }
    ]
  },
  {
    slug: 'jacques-louis-david-portrait-of-alphonse-leroy',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted this portrait of Doctor Alphonse Leroy in 1783, the same year it was exhibited at the Paris Salon. Leroy was a physician and man-midwife who had attended Madame David during the birth of her first child, giving the artist ample opportunity to study his subject. The painting shows Leroy leaning on a closed copy of Hippocrates' <strong>Morbi mulierum</strong>, a work on women's illnesses.</p>

<p>On the desk sits a "lampe à quinquet," an oil lamp that Leroy himself invented. Together with the medical text, this lamp references Cesare Ripa's Iconologia, which identifies lamps and books as attributes of scholarly study. The <strong>naturalistic attention to detail</strong> and bright tonality reveal David's debt to Flemish painters, whose work he studied during an 1781 visit to Flanders.</p>

<p>One of David's pupils, Jean-François Garneray, assisted with painting the hands and fabrics. The portrait measures 91 by 72 centimeters and hangs at the <a href="/apps/masterpieces/museum/mus233e-fabre-montpellier-france"><strong>Musée Fabre</strong></a> in Montpellier, which purchased it in 1829. It remains one of David's finest portrait works from before the French Revolution.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, France. The museum purchased it in 1829."
      },
      {
        question: "Who was Alphonse Leroy?",
        answer: "<strong>Alphonse Leroy</strong> was a French physician and man-midwife who invented the lampe à quinquet (oil lamp). He attended <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David's</strong></a> wife during childbirth."
      },
      {
        question: "What objects appear in the painting?",
        answer: "Leroy holds a copy of Hippocrates' <strong>medical text</strong> on women's illnesses. An oil lamp he invented sits on the desk, symbolizing scholarly study."
      },
      {
        question: "When was this portrait exhibited?",
        answer: "David first showed the painting at the <strong>Paris Salon of 1783</strong>. It demonstrates his skill in portraiture before he became famous for Neoclassical history paintings."
      }
    ]
  },
  {
    slug: 'edgar-degas-portrait-of-an-italian',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> created this charcoal portrait in 1856 during his formative travels in Italy. The young artist spent nearly three years studying the Old Masters in Rome, Florence, and Naples, filling sketchbooks with drawings of people he encountered. This portrait shows an unknown Italian man rendered with the careful observation that would characterize Degas's later work.</p>

<p>At twenty-two years old, Degas was still developing his technique and artistic identity. His Italian journey exposed him to Renaissance masters whose influence is visible in this <strong>detailed charcoal study</strong>. The focus on capturing individual character rather than idealized beauty points toward his future as a painter of modern Parisian life.</p>

<p>The drawing measures 38 by 26 centimeters and belongs to a <strong>private collection</strong>. Though Degas would become famous for his paintings of ballet dancers, horse races, and café scenes, his early portraits and figure studies laid the foundation for his mastery of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>human observation</strong></a>.</p>`,
    faqs: [
      {
        question: "When did Degas create this portrait?",
        answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> drew this portrait in <strong>1856</strong> while traveling in Italy. He spent nearly three years studying Old Masters in Rome, Florence, and Naples."
      },
      {
        question: "What medium did Degas use?",
        answer: "This is a <strong>charcoal drawing</strong> measuring 38 x 26 cm. Degas filled many sketchbooks with studies during his Italian travels."
      },
      {
        question: "Where is this drawing located?",
        answer: "Portrait of an Italian is in a <strong>private collection</strong>. Degas's drawings can be found in major museums worldwide."
      }
    ]
  },
  {
    slug: 'jusepe-de-ribera-portrait-of-an-old-man-with-an-onion',
    description: `<p><a href="/apps/masterpieces/artist/jusepe-de-ribera"><strong>Jusepe de Ribera</strong></a> painted this striking portrait around 1615, employing the tenebrism technique he learned from studying Caravaggio's work. The old man's weathered features emerge dramatically from the dark background, highlighted by a strong light source that emphasizes every wrinkle and expression line. In his hand, he holds an onion.</p>

<p>The onion carries symbolic weight. With its many layers, it can represent the <strong>complexity of human existence</strong> and the passage of time. This symbolism resonates with the old man's lined face, suggesting a life rich with experiences. Ribera frequently painted philosophers, saints, and ordinary people with this same unflinching realism.</p>

<p>Ribera was Spanish but spent most of his career in Naples, then under Spanish rule. His dramatic use of <strong>light and shadow</strong> influenced painters throughout Europe. This painting is now in a <strong>private collection</strong>, exemplifying Ribera's ability to transform humble subjects into powerful meditations on age and mortality.</p>`,
    faqs: [
      {
        question: "What technique did Ribera use?",
        answer: "<a href=\"/apps/masterpieces/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> employed <strong>tenebrism</strong>, using dramatic contrasts between light and dark. He learned this technique from studying Caravaggio's work."
      },
      {
        question: "What does the onion symbolize?",
        answer: "The <strong>onion's many layers</strong> can symbolize the complexity of life and the passage of time. It complements the old man's weathered expression, suggesting accumulated wisdom."
      },
      {
        question: "Where is this painting located?",
        answer: "The painting is in a <strong>private collection</strong>. Ribera's works can be found in major museums including the Prado in Madrid."
      }
    ]
  },
  {
    slug: 'hans-memling-portrait-of-an-old-woman',
    description: `<p><a href="/apps/masterpieces/artist/hans-memling"><strong>Hans Memling</strong></a> painted this sympathetic portrait around 1475-1480, capturing an elderly woman with careful attention to her aged features. The small oil-on-wood panel has been cut down from its original size, resulting in the tight framing visible today. Memling was the leading painter in Bruges during the last quarter of the 15th century.</p>

<p>This portrait originally formed a <strong>diptych</strong> with a companion painting of an old man, now at the Metropolitan Museum of Art. Unlike many portrait pairs of the period, these were not parts of a devotional composition. Instead, they were created to preserve the appearances of the sitters as they neared the ends of their lives, demonstrating portraiture's increasingly important <strong>commemorative function</strong>.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/museum-of-fine-arts-houston-mfah-houston-tx-us"><strong>Museum of Fine Arts, Houston</strong></a>, which acquired it in 1944. Memling's skill in rendering psychological depth through facial expression has been increasingly recognized by modern scholars, who appreciate his ability to convey <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>individual character</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The portrait is at the <a href=\"/apps/masterpieces/museum/museum-of-fine-arts-houston-mfah-houston-tx-us\"><strong>Museum of Fine Arts, Houston</strong></a>. The museum acquired it in 1944."
      },
      {
        question: "Was this painting part of a pair?",
        answer: "Yes. It originally formed a <strong>diptych</strong> with a portrait of an old man now at the Metropolitan Museum of Art. Both preserved the sitters' appearances near the end of their lives."
      },
      {
        question: "Who was Hans Memling?",
        answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> (c.1430-1494) was the leading painter in Bruges during the late 15th century. He was known for detailed <strong>Northern Renaissance portraits</strong>."
      }
    ]
  },
  {
    slug: 'gerrit-dou-portrait-of-an-old-woman-reading',
    description: `<p><a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> painted this study of an elderly woman reading around 1631-1632, when he was still a teenager and recently trained under Rembrandt. The painting was once attributed to Rembrandt himself and titled "Rembrandt's Mother," but in 1901 art historian Wilhelm Martin identified it as Dou's work based on his characteristic use of chiaroscuro and <strong>smooth surface structure</strong>.</p>

<p>The old woman reads the beginning of the 19th chapter of Luke's Gospel, which states that whoever wants to do good should give their possessions to the poor. This message contrasts with her <strong>expensive clothing</strong>, suggesting she still clings to worldly goods. Dou shows remarkable technical skill for his young age, rendering the Biblical text and accompanying print with extreme precision.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, which acquired it in 1912. The old woman depicted here appears in works by Dou, Rembrandt, and Jan Lievens, all of whom shared a studio in Leiden during this period. Dou became Rembrandt's first pupil in 1628 at just fourteen years old.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. The museum acquired it in 1912."
      },
      {
        question: "Was this painting attributed to Rembrandt?",
        answer: "Yes. Until 1901, it was called \"<strong>Rembrandt's Mother</strong>\" and attributed to Rembrandt. Art historian Wilhelm Martin identified it as <a href=\"/apps/masterpieces/artist/gerrit-dou\"><strong>Dou's</strong></a> work."
      },
      {
        question: "What is the woman reading?",
        answer: "She reads <strong>Luke chapter 19</strong>, about giving to the poor. Her expensive clothing contrasts with this message, suggesting she still values worldly possessions."
      },
      {
        question: "How old was Dou when he painted this?",
        answer: "Dou was around <strong>18 years old</strong>. He had trained under Rembrandt since age 14 and shared a studio with him and Jan Lievens in Leiden."
      }
    ]
  },
  {
    slug: 'frans-hals-portrait-of-an-unknown-man',
    description: `<p><a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> painted this portrait around 1660, late in his career when his technique had reached its most distinctive expression. Though the sitter's name has been lost, the painting conveys a vivid sense of individual character through bold, visible brushwork. The man's rakish hat angle, distinctive moustache, and unkempt hair suggest a <strong>confident personality</strong>.</p>

<p>Hals made no attempt to disguise that this image consists of paint on canvas. The treatment of the cuff is swift and almost rough, with thick brushstrokes in some areas and thin, quickly-applied paint with visible dribbles elsewhere. In one late portrait, Hals left a large drip uncorrected, as if he had "just walked away from the painting." This approach feels astonishingly <strong>modern</strong>.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden. While 18th-century critics like Joshua Reynolds complained about Hals's lack of "finish," the Impressionists later championed his work. Vincent van Gogh wrote admiringly of Hals two centuries after his death.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-alte-meister-dresden-germany\"><strong>Gemäldegalerie Alte Meister</strong></a> in Dresden, Germany."
      },
      {
        question: "What makes Frans Hals's technique distinctive?",
        answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Hals</strong></a> used <strong>visible, loose brushwork</strong> that feels modern. He didn't hide his brushstrokes or correct drips, letting the painting process show."
      },
      {
        question: "Who admired Hals's work?",
        answer: "The <strong>Impressionists</strong> championed his technique. Vincent van Gogh wrote admiringly of Hals, though earlier critics like Joshua Reynolds criticized his lack of finish."
      }
    ]
  },
  {
    slug: 'vittore-carpaccio-portrait-of-an-unknown-man-with-red-beret',
    description: `<p><a href="/apps/masterpieces/artist/vittore-carpaccio"><strong>Vittore Carpaccio</strong></a> painted this small portrait around 1490-1493, depicting an unknown Venetian nobleman against a landscape background. The man's bright red mantle and blue doublet over a white shirt mark him as a member of the upper class. His confident demeanor reinforces this impression of <strong>social standing</strong>.</p>

<p>The attribution to Carpaccio has been disputed, with some scholars proposing Bartolomeo Montagna or Lorenzo Lotto as alternatives. Others assign it to an unknown master from Ferrara or Bologna. The dating is less controversial, placing it in the early 1490s when Carpaccio was painting the <strong>Legend of Saint Ursula</strong> and personal portraits of noblemen were becoming common.</p>

<p>This period marked a shift in portraiture. Previously, upper-class subjects were portrayed primarily as representatives of rank and role. But around 1500, painters including Carpaccio began discovering their subjects' characters and <strong>individuality</strong>. The painting measures about 35 by 22 centimeters and hangs at the <a href="/apps/masterpieces/museum/museo-correr-venice-italy"><strong>Museo Correr</strong></a> in Venice.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "The portrait is at the <a href=\"/apps/masterpieces/museum/museo-correr-venice-italy\"><strong>Museo Correr</strong></a> in Venice, Italy. It measures approximately 35 x 22 cm."
      },
      {
        question: "Is the attribution to Carpaccio certain?",
        answer: "The attribution is <strong>disputed</strong>. Some scholars propose Bartolomeo Montagna or Lorenzo Lotto. Others suggest an unknown master from Ferrara or Bologna."
      },
      {
        question: "What does the man's clothing indicate?",
        answer: "His <strong>red mantle and blue doublet</strong> mark him as Venetian upper class. <a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a> painted during a period when portraits began emphasizing individual character."
      }
    ]
  },
  {
    slug: 'fernand-leger-portrait-of-andre-mare',
    description: `<p><a href="/apps/masterpieces/artist/fernand-leger"><strong>Fernand Léger</strong></a> created this portrait of André Mare in 1901, early in his artistic development before he became a leading figure in Cubism. The sketch and study measures 24 by 18 centimeters and shows Léger exploring portraiture in a style that would soon give way to his distinctive <strong>mechanical aesthetic</strong>.</p>

<p>André Mare (1885-1932) was a French artist and designer who would later collaborate with Louis Süe on furniture and interior design projects. The two artists knew each other from their early years, and this portrait captures Mare before his work in the <strong>Art Deco movement</strong> brought him recognition.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/musee-national-fernand-leger-biot-france"><strong>Musée National Fernand Léger</strong></a> in Biot, France. This museum, dedicated to Léger's work, provides context for understanding how his early portraits relate to his later abstract and figurative compositions featuring tubular, machine-like forms.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/musee-national-fernand-leger-biot-france\"><strong>Musée National Fernand Léger</strong></a> in Biot, France. The museum is dedicated to Léger's work."
      },
      {
        question: "Who was André Mare?",
        answer: "<strong>André Mare</strong> (1885-1932) was a French artist and designer. He later became known for Art Deco furniture and interior design with collaborator Louis Süe."
      },
      {
        question: "When did Léger paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Léger</strong></a> created this portrait in <strong>1901</strong>, before developing his Cubist style. It measures 24 x 18 cm."
      }
    ]
  },
  {
    slug: 'jean-francois-millet-portrait-of-armand-ono',
    description: `<p><a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Jean-François Millet</strong></a> is best known for his monumental paintings of peasant life, but he began his career as a portrait painter. When his family recognized his talent for drawing, they sent him to Cherbourg in 1833 to study portrait painting. After facing rejection at the Paris Salon, Millet returned to Cherbourg in 1841 and painted portraits <strong>for several years</strong>.</p>

<p>This portrait of Armand Ono reflects Millet's early training before he moved to Barbizon in 1849 and developed the style that would make him famous. His portraits from this period show competent technique and careful observation, though they lack the powerful connection to labor and landscape that defines his <strong>mature work</strong>.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, the city where Millet first studied art. Vincent van Gogh later copied more works by Millet than any other artist, demonstrating the lasting influence of his paintings of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>rural life</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france\"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, France, where <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a> first studied art."
      },
      {
        question: "Did Millet paint many portraits?",
        answer: "Yes. Millet began as a <strong>portrait painter</strong> in Cherbourg during the 1830s and 1840s before moving to Barbizon and focusing on peasant subjects."
      },
      {
        question: "What is Millet famous for?",
        answer: "Millet became famous for paintings of <strong>peasant farmers</strong> like The Gleaners and The Angelus. Van Gogh copied more of his works than any other artist."
      }
    ]
  },
  {
    slug: 'frederic-bazille-portrait-of-auguste-renoir',
    description: `<p><a href="/apps/masterpieces/artist/frederic-bazille"><strong>Frédéric Bazille</strong></a> painted this portrait of his close friend Pierre-Auguste Renoir in 1867, during a period when the two artists were sharing a studio with Claude Monet. At the time, none of them could afford professional models, so they frequently painted each other. Renoir produced a reciprocal portrait, "Frédéric Bazille at his Easel," in <strong>the same year</strong>.</p>

<p>The entire surface is animated by quick, lively brushwork, giving the composition a sense of sketchiness and informality. This <strong>spontaneous technique</strong>, combined with passages of pure, unblended color, represents a deliberate striving toward a modernist aesthetic. Bazille's medical training shows in the anatomical precision of the facial features.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. Though Bazille played an important role in early Impressionism, his death at age 28 during the Franco-Prussian War in 1870 cut short a promising career. He's less well known than his colleagues as a result.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. It was created in 1867 when Bazille shared a studio with Renoir and Monet."
      },
      {
        question: "Did Renoir paint Bazille in return?",
        answer: "Yes. Renoir painted \"<strong>Frédéric Bazille at his Easel</strong>\" the same year. The artists frequently painted each other because they couldn't afford models."
      },
      {
        question: "What happened to Frédéric Bazille?",
        answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Bazille</strong></a> died at <strong>age 28</strong> during the Franco-Prussian War in 1870. His early death explains why he's less famous than his Impressionist friends."
      }
    ]
  },
  {
    slug: 'albrecht-durer-portrait-of-barbara',
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted this portrait of his mother, Barbara Holper, in 1490 when she was around 39 years old. The oil-on-panel work originally formed a diptych with a companion portrait of Dürer's father, from which it was separated by at least 1628. Barbara's portrait was long considered lost until art historian Lotte Brand Philip reattributed it in 1977.</p>

<p>Barbara Holper was the daughter of Hieronymus Holper, under whom Dürer's father served his goldsmith apprenticeship. The two men became friends, and Holper gave his daughter in marriage when she was just 15 and Dürer senior was 40. Dürer's writings describe his parents' difficult lives and many setbacks. Only three of their <strong>18 children survived</strong> to adulthood.</p>

<p>The portrait hangs at the <a href="/apps/masterpieces/museum/germanisches-nationalmuseum-nuremberg-germany"><strong>Germanisches Nationalmuseum</strong></a> in Nuremberg, which reunited both parent portraits for a 2012 exhibition. Dürer's tight focus on his mother's face distinguishes him from contemporaries, showing skill that art historian Stephan Kemperdick called "beyond Wolgemut and his circle."</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of Barbara?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/germanisches-nationalmuseum-nuremberg-germany\"><strong>Germanisches Nationalmuseum</strong></a> in Nuremberg, Germany. It was reunited with the companion father portrait in 2012."
      },
      {
        question: "Was this portrait lost?",
        answer: "Yes. The painting was separated from its companion by 1628 and considered <strong>lost for centuries</strong>. Art historian Lotte Brand Philip reattributed it in 1977."
      },
      {
        question: "Who was Barbara Holper?",
        answer: "<strong>Barbara Holper</strong> (c.1451-1514) was <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer's</strong></a> mother. She married at 15 and had 18 children, only three of whom survived to adulthood."
      }
    ]
  },
  {
    slug: 'lucas-cranach-elder-portrait-of-barbara-duchess-of-saxony',
    description: `<p><a href="/apps/masterpieces/artist/lucas-cranach-elder"><strong>Lucas Cranach the Elder</strong></a> painted this portrait of Barbara, Duchess of Saxony, at some point during her marriage to George, Duke of Saxony. Barbara (1478-1534) was the daughter of Casimir IV, King of Poland, and Elisabeth of Austria. She married George in 1496 and <strong>both appeared</strong> as donors on panels from an altarpiece in the Thyssen-Bornemisza collection.</p>

<p>Cranach served as court painter to the Electors of Saxony for most of his career, producing portraits, altarpieces, and mythological scenes. His workshop was highly productive, and multiple versions of royal portraits often exist. This portrait of the Duchess likely served as the <strong>basis for later depictions</strong>, including some executed by the workshop after her death.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun"><strong>National Gallery of Denmark</strong></a> (Statens Museum for Kunst) in Copenhagen. Cranach's portraits of Saxon nobility document the appearance of rulers during the Reformation era, when religious and political upheaval transformed Germany.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-denmark-statens-museum-for-kun\"><strong>National Gallery of Denmark</strong></a> (Statens Museum for Kunst) in Copenhagen."
      },
      {
        question: "Who was Barbara, Duchess of Saxony?",
        answer: "<strong>Barbara</strong> (1478-1534) was the daughter of King Casimir IV of Poland. She married George, Duke of Saxony in 1496."
      },
      {
        question: "What role did Cranach have at the Saxon court?",
        answer: "<a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> served as <strong>court painter</strong> to the Electors of Saxony. His workshop produced portraits, altarpieces, and mythological scenes."
      }
    ]
  },
  {
    slug: 'lorenzo-lotto-portrait-of-bernardo-de39-rossi-bishop-of-trevino',
    description: `<p><a href="/apps/masterpieces/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a> painted this portrait in 1505 during his stay in Treviso, where Bernardo de' Rossi served as bishop from 1505 until 1510. The painting originally had a cover, now identified as the Allegory of Virtues and Vices at the National Gallery of Art in Washington. Lotto signed and dated the work on this protective cover.</p>

<p>The bishop is shown from three-quarters, his face looking directly at the viewer. Lotto portrays him with <strong>striking realism</strong>: reddish complexion, hollows under the eyes, expressive blue eyes, and light skin imperfections. This attention to detail was inspired by Antonello da Messina and possibly by Northern European artists like Albrecht Dürer.</p>

<p>The roll the bishop holds may allude to a sentence against conspirators who had attempted on de' Rossi's life two years earlier. When the bishop fled to Parma in 1524, he brought the portrait with him. It eventually joined the Farnese collection, which transferred to Naples in 1760. The painting is now at the <strong>National Museum of Capodimonte</strong> in Naples.</p>`,
    faqs: [
      {
        question: "Where is this portrait now?",
        answer: "The painting is at the <strong>National Museum of Capodimonte</strong> in Naples, Italy. It came to Naples with the Farnese collection in 1760."
      },
      {
        question: "Who was Bernardo de' Rossi?",
        answer: "<strong>Bernardo de' Rossi</strong> was Bishop of Treviso from 1505 to 1510. <a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lotto</strong></a> painted him during this time with remarkable realism."
      },
      {
        question: "Did this portrait have a cover?",
        answer: "Yes. The original cover, signed and dated by Lotto, is the <strong>Allegory of Virtues and Vices</strong> now at the National Gallery of Art in Washington."
      }
    ]
  },
  {
    slug: 'jan-van-eyck-portrait-of-cardinal-albergati',
    description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted this portrait of Cardinal Niccolò Albergati around 1431, working from a preparatory silverpoint drawing he made during a peace conference in Arras in 1435. On that drawing, now in Dresden, van Eyck noted specific color details to guide the finished painting. He changed several features from the sketch, adjusting the shoulders, nose, mouth, and especially the ear to strengthen the impression of <strong>authority and seniority</strong>.</p>

<p>The small panel measures only 27.5 by 34 centimeters, nearly the same size as the preparatory drawing. Van Eyck transferred his refined illumination technique to panel painting at larger scales, though this work demonstrates his mastery at <strong>intimate dimensions</strong>. Cardinal Albergati served as papal ambassador and negotiator during various European conflicts.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna. While van Eyck didn't invent oil painting as art-historical myth once claimed, he did perfect techniques that made Early Netherlandish painting influential throughout Europe.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. It measures 27.5 x 34 cm."
      },
      {
        question: "Does a preparatory drawing exist?",
        answer: "Yes. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> made a silverpoint drawing in <strong>Dresden</strong> with color notes. He adjusted several features when creating the final painting."
      },
      {
        question: "Who was Cardinal Albergati?",
        answer: "<strong>Cardinal Niccolò Albergati</strong> was a papal ambassador and peace negotiator. Van Eyck painted him during a conference in Arras in 1435."
      }
    ]
  },
  {
    slug: 'francois-boucher-portrait-of-carl-gustaf-tessin',
    description: `<p><a href="/apps/masterpieces/artist/francois-boucher"><strong>François Boucher</strong></a> painted this portrait of Carl Gustaf Tessin around 1740, depicting the Swedish diplomat and art collector in an elegant, relaxed pose. Tessin wears a sumptuous silk robe with lace and gold accents, his gentle wig curls reflecting period fashion. He holds what appears to be a sheet with illustrations, suggesting his engagement with <strong>intellectual or artistic pursuits</strong>.</p>

<p>Carl Gustaf Tessin (1695-1770) served as Swedish ambassador to France and was instrumental in bringing French Rococo taste to Sweden. He assembled an impressive art collection and maintained close relationships with leading French artists. This portrait reflects both his social status and his role as a <strong>cultural intermediary</strong> between France and Scandinavia.</p>

<p>Boucher's skill as a portraitist shows in the intricate rendering of textures, from the shimmering fabric to the delicate lace cuffs. The warm color palette and soft modeling of forms are characteristic of <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>Rococo style</strong></a>. The painting hangs at the <a href="/apps/masterpieces/museum/nationalmuseum-stockholm-sweden"><strong>Nationalmuseum</strong></a> in Stockholm.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, Sweden. Tessin's art collecting helped build Swedish museum collections."
      },
      {
        question: "Who was Carl Gustaf Tessin?",
        answer: "<strong>Carl Gustaf Tessin</strong> (1695-1770) was a Swedish diplomat and art collector. He served as ambassador to France and brought Rococo taste to Sweden."
      },
      {
        question: "What style is this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a> painted this in the <strong>Rococo style</strong> around 1740. The soft colors and intricate textures are characteristic of the period."
      }
    ]
  },
  {
    slug: 'gustave-courbet-portrait-of-charles-baudelaire',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this portrait of poet Charles Baudelaire in 1848 or early 1849, when the writer was still largely unknown and the two had recently established a friendship. Baudelaire was 26 years old, and Courbet depicts him as the "accursed poet," deep in thought and inspiration at a desk with pen and books.</p>

<p>The dark colors create an atmosphere of introspection, with light highlighting the setting rather than Baudelaire himself. This creates a parallel with the poet's later collection <strong>Spleen and the Ideal</strong>. Courbet and Baudelaire shared mutual respect: the poet often defended Courbet's Realist paintings against critics, and Courbet captured his friend's <strong>intellectual intensity</strong>.</p>

<p>The painting belonged to publisher Poulet-Malassis before collector Alfred Bruyas acquired it for 3,000 francs. Bruyas donated it to the <a href="/apps/masterpieces/museum/mus233e-fabre-montpellier-france"><strong>Musée Fabre</strong></a> in Montpellier in 1876, where it remains. The portrait exemplifies the close ties between literature and visual art during this era.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, France. Collector Alfred Bruyas donated it in 1876."
      },
      {
        question: "When did Courbet paint Baudelaire?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a> painted this in <strong>1848 or early 1849</strong>, when Baudelaire was 26 and still unknown. They had recently become friends."
      },
      {
        question: "What is the relationship between Courbet and Baudelaire?",
        answer: "They shared <strong>mutual respect</strong>. Baudelaire defended Courbet's Realist paintings against critics, and Courbet captured his friend's intellectual character."
      }
    ]
  },
  {
    slug: 'anthony-van-dyck-portrait-of-cornelis-van-der-geest',
    description: `<p><a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> painted this portrait around 1620, when he was just 21 years old and his subject, Cornelis van der Geest, was 65. Despite van Dyck's youth, the painting is considered a masterpiece and one of his earliest significant works. Van der Geest was a prosperous Antwerp spice merchant who used his wealth to support local artists and build one of the most <strong>prominent art collections</strong> of his day.</p>

<p>The small oil-on-wood panel measures 37.5 by 32.5 centimeters. X-rays reveal that the original panel was later expanded by other artists. The National Gallery is certain the head and collar are van Dyck's work but remains uncertain about who painted the <strong>surrounding additions</strong>.</p>

<p>The painting was purchased by the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London in 1824 as a work by Rubens. Only in 1864 did scholars determine the sitter was van der Geest and the artist was van Dyck. Willem van Haecht, whom van der Geest employed as collection curator, painted the collector's gallery several times.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It was purchased in 1824 as a Rubens before being reattributed to van Dyck."
      },
      {
        question: "Who was Cornelis van der Geest?",
        answer: "<strong>Cornelis van der Geest</strong> (1555-1638) was an Antwerp spice merchant and prominent art collector. He supported local artists including <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>van Dyck</strong></a>."
      },
      {
        question: "How old was van Dyck when he painted this?",
        answer: "Van Dyck was just <strong>21 years old</strong> around 1620 when he created this portrait. It's considered one of his earliest masterpieces."
      },
      {
        question: "Was the painting modified?",
        answer: "Yes. <strong>X-rays</strong> revealed the original panel was expanded. The National Gallery is certain van Dyck painted the head and collar but unsure about other areas."
      }
    ]
  }
];

async function updateArtworks() {
  console.log('Starting artwork enrichment (Batch 3 - Portraits)...\n');

  for (const artwork of artworksToUpdate) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`);
      console.error(`  Error: ${error.message}`);
    }
  }

  console.log('\nEnrichment complete!');
}

updateArtworks()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
