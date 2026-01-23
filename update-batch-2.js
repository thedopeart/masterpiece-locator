const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'george-caleb-bingham-john-quincy-adams',
    description: `<p><a href="/apps/masterpieces/artist/george-caleb-bingham"><strong>George Caleb Bingham</strong></a> painted this portrait of John Quincy Adams in 1850, based on sittings from 1844 when Adams was a member of Congress from Massachusetts. The former president, then in his late seventies, sat for the Missouri artist at Bingham's Pennsylvania Avenue studio in Washington D.C. Adams, who had posed for forty-five artists in his lifetime, doubted Bingham could produce "a strong likeness" and noted the experience in his diary.</p>
<p>Bingham ultimately created three <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of Adams. This version shows the sixth president with a direct, unadorned approach that critics have praised for its restraint. Holland Cotter of The New York Times called it one of the best presidential portraits, while Crispin Sartwell wrote that it "sets the chastened tone of the generation after the Founders" with its "beautifully flat and direct approach."</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/national-portrait-gallery-washington-dc-usa"><strong>National Portrait Gallery</strong></a> in Washington, D.C., displayed alongside a daguerreotype of Adams. Bingham was a prolific portraitist who produced as many as 500 portraits during his career, though he's now best known for his genre scenes of American frontier life.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait of John Quincy Adams?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-portrait-gallery-washington-dc-usa\"><strong>National Portrait Gallery</strong></a> in Washington, D.C. It's displayed in the \"America's Presidents\" exhibition alongside a daguerreotype of Adams."
      },
      {
        question: "When did Adams sit for this portrait?",
        answer: "Adams sat for <a href=\"/apps/masterpieces/artist/george-caleb-bingham\"><strong>Bingham</strong></a> in 1844 at the artist's Washington D.C. studio. The portrait was completed around 1850, two years after Adams died in 1848."
      },
      {
        question: "Who was George Caleb Bingham?",
        answer: "<a href=\"/apps/masterpieces/artist/george-caleb-bingham\"><strong>George Caleb Bingham</strong></a> (1811-1879) was an American artist known for both <strong>portraiture</strong> and frontier genre scenes. He painted as many as 500 portraits during his career."
      }
    ]
  },
  {
    slug: 'john-everett-millais-john-ruskin',
    description: `<p><a href="/apps/masterpieces/artist/john-everett-millais"><strong>John Everett Millais</strong></a> painted this portrait of the art critic John Ruskin during the summer of 1853 in Glenfinlas, Scotland. The painting shows Ruskin standing beside a cascading waterfall in the Trossachs, surrounded by rocks and Scottish flora that Millais rendered with characteristic <strong>Pre-Raphaelite precision</strong>. Every stone and plant is observed with almost scientific accuracy.</p>
<p>The circumstances of this portrait became one of Victorian art's most dramatic stories. Millais had traveled to Scotland with Ruskin and his wife Effie, who had posed for his painting "The Order of Release" the previous year. During the trip, Millais and Effie fell in love. She would leave Ruskin, have their marriage annulled on grounds of non-consummation, and marry Millais in 1855. Finishing the portrait became difficult for Millais, who called it "the most hateful task I have ever had to perform."</p>
<p>The painting was valued at £7 million in 2012-13 and is now at the <a href="/apps/masterpieces/museum/ashmolean-museum-oxford-uk"><strong>Ashmolean Museum</strong></a> in Oxford, accepted by the British Government in lieu of inheritance tax in 2013. Ruskin himself gave it to his friend Henry Wentworth Acland in 1871.</p>`,
    faqs: [
      {
        question: "Where is this Millais portrait of Ruskin?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford. It was accepted by the British Government in lieu of inheritance tax in 2013 and valued at £7 million."
      },
      {
        question: "Why is this portrait famous?",
        answer: "Beyond its <strong>Pre-Raphaelite</strong> quality, the painting is famous for its backstory. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> fell in love with Ruskin's wife Effie during the sittings in Scotland. She later left Ruskin and married Millais."
      },
      {
        question: "Where was this painted?",
        answer: "Millais painted this at <strong>Glenfinlas</strong> in the Trossachs, Scotland during summer 1853. The waterfall and rocks are rendered with painstaking Pre-Raphaelite attention to natural detail."
      },
      {
        question: "How big is this painting?",
        answer: "The portrait measures approximately 78.7 x 68 cm (31 x 27 inches). <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> worked on it at the site in Scotland and later completed it in London."
      }
    ]
  },
  {
    slug: 'caravaggio-john-the-baptist',
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> returned to the subject of John the Baptist more than any other, creating at least eight versions between 1598 and 1610. His decision to depict the saint as a youth was unusual for the period. Traditionally, artists showed John either as an infant with the Christ child or as an adult baptizing Jesus. Caravaggio instead portrayed a solitary boy in the wilderness, based on the Gospel of Luke's statement that "the child was in the deserts until the day of his manifestation to Israel."</p>
<p>The various versions share common elements: the young saint is typically shown half-reclining, accompanied by a ram, with little to identify him beyond a scrap of camel skin and sometimes a cross. The sensuous treatment of the figure and enigmatic expressions suggest personal meaning for the artist. Leonardo and Andrea del Sarto had painted similar youthful Baptists, and Caravaggio turned this into something like a personal icon through his many variations.</p>
<p>This version resides at <a href="/apps/masterpieces/museum/toledo-cathedral-toledo-spain"><strong>Toledo Cathedral</strong></a> in Spain. For those interested in <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual art</strong></a>, Caravaggio's Baptist paintings offer a distinctively personal interpretation of a traditional subject.</p>`,
    faqs: [
      {
        question: "How many John the Baptist paintings did Caravaggio make?",
        answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted at least eight versions of John the Baptist between 1598 and 1610. He returned to this subject more than any other throughout his career."
      },
      {
        question: "Why did Caravaggio paint John as a youth?",
        answer: "This was unusual for the period. <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> based it on Luke's Gospel stating the child \"was in the deserts\" until revealing himself. The <strong>solitary youth</strong> became almost a personal icon for him."
      },
      {
        question: "Where is this version displayed?",
        answer: "This painting is at <a href=\"/apps/masterpieces/museum/toledo-cathedral-toledo-spain\"><strong>Toledo Cathedral</strong></a> in Spain. Other versions are in Rome, Naples, Kansas City, and Munich collections."
      }
    ]
  },
  {
    slug: 'ford-madox-brown-john-wycliffe-reading-his-translation-of-the-bible',
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> began this ambitious history painting in 1847 and worked on it intermittently until 1861. The scene depicts John Wycliffe, the first scholar to translate the Bible into Middle English, reading from his translation to John of Gaunt, Duke of Lancaster. Wycliffe completed his translation by the time of his death in 1384, and Gaunt, a son of King Edward III, was a powerful statesman who provided protection for Wycliffe's controversial work.</p>
<p>The painting shows Wycliffe standing with intense expression, engaged in passionate oration, while Gaunt listens thoughtfully with his hand on his chin. Brown probably modeled the figure of Gaunt from a portrait painted by Edward Hoby around 1593, two centuries after the Duke's death. The large canvas measures 153 by 119.5 centimeters and reflects Brown's interest in <strong>historical and moral subjects</strong>.</p>
<p>Though closely associated with the <strong>Pre-Raphaelite Brotherhood</strong>, Brown was never formally a member. He served as teacher and mentor to Dante Gabriel Rossetti and pursued his own independent style. The painting is held at <a href="/apps/masterpieces/museum/bradford-museums-and-galleries-bradford-uk"><strong>Bradford Museums and Galleries</strong></a> in England.</p>`,
    faqs: [
      {
        question: "Where is this Ford Madox Brown painting?",
        answer: "This work is at <a href=\"/apps/masterpieces/museum/bradford-museums-and-galleries-bradford-uk\"><strong>Bradford Museums and Galleries</strong></a> in England. It measures 153 x 119.5 cm and depicts Wycliffe reading his Bible translation to John of Gaunt."
      },
      {
        question: "Who was John Wycliffe?",
        answer: "<strong>John Wycliffe</strong> (c.1320s-1384) was the first scholar to translate the Bible into Middle English. His work was controversial, and John of Gaunt provided him protection from church authorities."
      },
      {
        question: "Was Ford Madox Brown a Pre-Raphaelite?",
        answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> was closely linked to the <strong>Pre-Raphaelite Brotherhood</strong> but never formally joined. He was Dante Gabriel Rossetti's teacher and pursued an independent style."
      },
      {
        question: "When was this painted?",
        answer: "Brown worked on this painting from 1847-48 and again from 1859-61. The long production time was typical for his <strong>ambitious historical compositions</strong>."
      }
    ]
  },
  {
    slug: 'pontormo-joseph-in-egypt',
    description: `<p><a href="/apps/masterpieces/artist/pontormo"><strong>Pontormo</strong></a> painted this remarkable work around 1518 as part of a decorative cycle for a Florentine bridal chamber. Salvi Borgherini commissioned multiple artists to depict scenes from the life of Joseph for his son Pierfrancesco's marriage to Margherita Acciaiuoli in 1515. Giorgio Vasari considered this panel Pontormo's masterpiece, and it demonstrates the artist's developing <strong>Mannerist style</strong>.</p>
<p>The painting tells Joseph's story like a sequence in a film. The figure of Joseph appears four times, always recognizable by his ochre tunic, purple cape, and red hat. Pontormo places primary colors strategically around the composition to guide your eye to the central scene. According to Vasari, the boy seated on a step is the artist's young apprentice, Bronzino, who would become a celebrated painter in his own right. The background landscape derives from a 1510 print by Lucas van Leyden.</p>
<p>The work breaks many rules of High Renaissance equilibrium with its crowded composition and artificial spatial relationships. Today it hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, which purchased it in 1882.</p>`,
    faqs: [
      {
        question: "Where can I see Pontormo's Joseph in Egypt?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The museum purchased it in 1882, and it's considered a key example of early <strong>Mannerism</strong>."
      },
      {
        question: "Why does Joseph appear multiple times?",
        answer: "<a href=\"/apps/masterpieces/artist/pontormo\"><strong>Pontormo</strong></a> shows Joseph <strong>four times</strong> in one scene to depict different moments in his story. He's recognizable by his ochre tunic, purple cape, and red hat throughout."
      },
      {
        question: "Who is the boy seated on the step?",
        answer: "According to Vasari, the seated boy is <strong>Bronzino</strong>, Pontormo's young apprentice. Bronzino later became a celebrated Mannerist painter himself, known for elegant court portraits."
      },
      {
        question: "What was this painting made for?",
        answer: "It was part of a <strong>bridal chamber</strong> decoration commissioned by Salvi Borgherini for his son's wedding in 1515. Several artists contributed panels depicting the life of Joseph."
      }
    ]
  },
  {
    slug: 'rembrandt-joseph-recounting-his-dreams',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created this drawing around 1638, depicting the biblical scene where young Joseph tells his family about his prophetic dreams. In the Book of Genesis, Joseph's dreams foretold that his brothers and parents would one day bow before him, a prediction that enraged his siblings and led them to sell him into slavery in Egypt.</p>
<p>The work demonstrates Rembrandt's extraordinary skill as a draftsman. His quick, confident pen strokes capture the family dynamics with remarkable economy. Joseph's father Jacob listens attentively while the brothers show various reactions to this presumptuous announcement. Rembrandt repeatedly returned to <strong>Old Testament subjects</strong>, finding in them opportunities for psychological drama and intimate family scenes.</p>
<p>The drawing is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. Some scholars have debated the attribution, with Martin Royalton-Kisch's revision of the Benesch catalogue suggesting possible involvement by Ferdinand Bol, one of Rembrandt's most talented students.</p>`,
    faqs: [
      {
        question: "Where is this Rembrandt drawing?",
        answer: "Joseph Recounting His Dreams is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. The Rijksprentenkabinet in Amsterdam also holds related works."
      },
      {
        question: "What biblical story does this depict?",
        answer: "It shows <strong>Joseph telling his prophetic dreams</strong> to his family from Genesis. His dreams predicted his brothers would bow to him, which angered them and led to his sale into slavery."
      },
      {
        question: "When did Rembrandt create this?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> made this drawing around 1638. He frequently returned to <strong>Old Testament</strong> subjects throughout his career, drawn to their psychological drama."
      }
    ]
  },
  {
    slug: 'pontormo-joseph-revealing-himself-to-his-brothers',
    description: `<p><a href="/apps/masterpieces/artist/pontormo"><strong>Pontormo</strong></a> painted this panel around 1516 as part of the celebrated Borgherini cycle depicting scenes from the life of Joseph. The painting shows the dramatic moment when Joseph, now a powerful Egyptian official, reveals his true identity to the brothers who had sold him into slavery years before. Their father Jacob believed Joseph dead, and this reunion would ultimately bring the entire family to Egypt.</p>
<p>The work belongs to a unique decorative ensemble commissioned by Salvi Borgherini for his son Pierfrancesco's bridal chamber in Florence. Several painters contributed to the cycle, including Andrea del Sarto, Granacci, and Bacchiacca, but Pontormo's panels are considered the most innovative. The crowded composition, artificial colors, and elongated figures mark the <strong>transition from High Renaissance to Mannerism</strong>.</p>
<p>The painting is now at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, along with Pontormo's other Joseph panels. The Borgherini paintings were originally installed as decorative panels in wooden furniture, making their preservation as individual works remarkable.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "This Pontormo panel is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It's displayed alongside the artist's other panels from the Borgherini commission."
      },
      {
        question: "What scene does this show?",
        answer: "It depicts the moment <strong>Joseph reveals his identity</strong> to the brothers who sold him into slavery. Now a powerful Egyptian official, Joseph forgives them and arranges for his family to join him."
      },
      {
        question: "What style is this painting?",
        answer: "This is an early example of <strong>Mannerism</strong>, showing the transition from High Renaissance balance. <a href=\"/apps/masterpieces/artist/pontormo\"><strong>Pontormo's</strong></a> elongated figures and artificial colors break classical rules."
      }
    ]
  },
  {
    slug: 'giorgione-judith',
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted this work around 1504, creating one of the most lyrical interpretations of the biblical heroine. The painting shows Judith with her foot resting on the severed head of Holofernes, the Assyrian general whose army she saved her city from by seducing and then beheading him. Yet the mood is contemplative rather than violent. The cool morning landscape and Judith's serene posture transform a grisly subject into what Giorgione called a "poesie," a poetical work.</p>
<p>Giorgione was a founder of the <strong>Venetian school</strong> who largely determined the development of 16th-century Venetian painting. Very few works are definitively attributed to him, making this Judith especially valuable. Her pose derives from a Phidias statue of Aphrodite Urania, while the atmospheric sfumato shading shows the influence of Leonardo da Vinci. The tall, narrow format measures 144 by 66 cm.</p>
<p>Originally attributed to Raphael, the painting came to the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in 1772, purchased for Catherine II of Russia at a Paris auction. A major restoration in 1967-71 removed centuries of darkened varnish, revealing the original bright colors and a landscape in the background.</p>`,
    faqs: [
      {
        question: "Where is Giorgione's Judith?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. It was purchased for Catherine II of Russia in 1772 and is one of few authenticated <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> works."
      },
      {
        question: "How big is this painting?",
        answer: "Judith measures 144 x 66 cm (about 57 x 26 inches). The tall, narrow format is unusual and gives the figure an elegant verticality typical of <strong>Venetian Renaissance</strong> portraiture."
      },
      {
        question: "What is a poesie?",
        answer: "A <strong>poesie</strong> is a type of lyrical, poetic painting <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a> invented that became popular in Venice. The mood and atmosphere matter more than narrative drama."
      },
      {
        question: "What restoration was done?",
        answer: "A major restoration from 1967-71 removed dark varnish that had obscured the painting. Restorer A.M. Malova revealed the original <strong>bright colors</strong> and a background landscape that had been hidden."
      }
    ]
  },
  {
    slug: 'correggio-judith',
    description: `<p><a href="/apps/masterpieces/artist/correggio"><strong>Correggio</strong></a> painted this intimate scene around 1510-1514, showing Judith and her maidservant with the head of Holofernes. The small panel measures just 30 by 22 cm, yet it represents an important early work by the master of the Parma school. It may have been commissioned by Isabella d'Este, the celebrated Renaissance patron and collector.</p>
<p>The painting reveals the profound influence of Andrea Mantegna, from whom Correggio borrowed the tight mid-body framing. Two Judith paintings by Mantegna in Dublin and Montreal served as compositional models. This was also Correggio's first <strong>night scene</strong>, anticipating the dramatic chiaroscuro lighting that would later define his ceiling paintings. His use of dynamic composition and illusionistic effects prefigured both Baroque and Rococo art.</p>
<p>The work is held at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-strasbourg-strasbourg-fra"><strong>Musée des Beaux-Arts de Strasbourg</strong></a> in France. It was later part of the Gonzaga collection in Mantua before being acquired from the Fairfax Murray collection in London in 1892.</p>`,
    faqs: [
      {
        question: "Where can I see Correggio's Judith?",
        answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-strasbourg-strasbourg-fra\"><strong>Musée des Beaux-Arts de Strasbourg</strong></a> in France. It was acquired from the Fairfax Murray collection in 1892."
      },
      {
        question: "How big is this painting?",
        answer: "The panel measures just 30 x 22 cm (about 12 x 9 inches). Despite its small size, it's an important early work showing <a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio's</strong></a> developing mastery of <strong>chiaroscuro</strong>."
      },
      {
        question: "Who influenced this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> was strongly influenced by <strong>Andrea Mantegna</strong>. He borrowed the tight mid-body framing from Mantegna's Judith paintings in Dublin and Montreal."
      }
    ]
  },
  {
    slug: 'artemisia-gentileschi-judith-and-her-maidservant',
    description: `<p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> painted this tense scene around 1615, showing Judith and her maidservant Abra in the moments after assassinating the general Holofernes. The two women stand alert in the darkness of his tent, seemingly startled by a sound. Judith's hand rests protectively on Abra's shoulder, emphasizing their partnership and shared purpose. The severed head is visible in the basket Abra carries.</p>
<p>The dark setting is illuminated by rich <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> and <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> tones in the fabrics, colors Gentileschi used frequently during her time in Florence. The screaming head on the sword's pommel, possibly Medusa, reminds viewers of the violence just committed. Unlike most artists who depicted Abra as elderly, Gentileschi shows her as young, closer to Judith's age, emphasizing <strong>female solidarity</strong>.</p>
<p>This painting hangs at <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence and was first documented in the collection of Grand Duchess Maria Maddalena of Austria in 1638. Gentileschi returned to Judith's story in eight surviving works, making it her most frequent subject.</p>`,
    faqs: [
      {
        question: "Where is this Gentileschi painting?",
        answer: "Judith and her Maidservant is at <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence. It was documented in Grand Duchess Maria Maddalena's collection by 1638."
      },
      {
        question: "What moment does this show?",
        answer: "It depicts <strong>the escape after the killing</strong>. Judith and Abra have just beheaded Holofernes and are leaving his tent, startled by a sound. The severed head is in the basket."
      },
      {
        question: "How big is the painting?",
        answer: "The canvas measures 114 x 93.5 cm (about 45 x 37 inches). <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a> used <strong>Tenebrism</strong> to create dramatic contrast between light and dark."
      },
      {
        question: "Why is Abra shown young?",
        answer: "Most artists depicted Abra as elderly, but <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a> shows her near Judith's age. This emphasizes the <strong>partnership between the women</strong> and their shared purpose."
      }
    ]
  },
  {
    slug: 'artemisia-gentileschi-judith-beheading-holofernes',
    description: `<p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> created this visceral masterpiece around 1620 for Grand Duke Cosimo II de' Medici. The painting shows Judith and her maidservant Abra in the act of beheading Holofernes, working together with sleeves rolled up and grips firm. An arc of blood spatters from the general's neck as Judith presses down his head with one hand and pulls the sword through with the other.</p>
<p>The work surpasses Caravaggio's version in its unflinching realism. While Caravaggio paired a delicate Judith with a haggard attendant who merely watches, Gentileschi depicts two strong young <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> working in unison. The creases at Judith's wrists show the physical strength required. The painting was so violent that it was denied prominent display and later moved to an isolated part of the gallery when a Grand Duchess objected to it.</p>
<p>Today it hangs in the Caravaggio and Artemisia halls at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence. Gentileschi was the first woman to enter the Academy of Art and Design in Florence, and this painting has become a touchstone of <strong>feminist art history</strong>.</p>`,
    faqs: [
      {
        question: "Where is Judith Beheading Holofernes?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It's displayed in the Caravaggio and <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Artemisia</strong></a> halls on the first floor."
      },
      {
        question: "How does this compare to Caravaggio's version?",
        answer: "<a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi's</strong></a> is more visceral and physical. Her Judith doesn't recoil but braces herself, and both women work together. <strong>Caravaggio's</strong> Judith is more delicate."
      },
      {
        question: "Why was this painting hidden?",
        answer: "Its violence was controversial. A Grand Duchess had it moved to an isolated part of the gallery in the 1700s. It was also damaged in the 1993 bombing and later restored to prominence."
      },
      {
        question: "Did Gentileschi paint other versions?",
        answer: "Yes, <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a> painted two versions of this scene a decade apart. An earlier version from 1612-13 is at the <strong>Museo Capodimonte</strong> in Naples."
      }
    ]
  },
  {
    slug: 'simon-vouet-judith-with-the-head-of-holophernes',
    description: `<p><a href="/apps/masterpieces/artist/simon-vouet"><strong>Simon Vouet</strong></a> painted this powerful depiction of Judith around 1625, during his extended stay in Italy. The painting shows the Jewish heroine holding the severed head of the Assyrian general Holofernes, whom she had seduced and beheaded to save her people. Judith became a popular subject for Baroque artists, symbolizing female heroism and divine intervention.</p>
<p>Vouet spent over a decade in Italy, mostly in Rome, where he absorbed the innovations of Caravaggio along with influences from Veronese, Carracci, and Guercino. His Judith demonstrates the dramatic lighting and emotional intensity of the <strong>Italian Baroque</strong>. The painting measures 97 by 73.5 cm and is executed in oil on canvas with characteristic rich colors and confident brushwork.</p>
<p>In 1627, King Louis XIII called Vouet back to Paris to be his court painter. He became instrumental in introducing the Italian Baroque style to France, refining Caravaggio's innovations into what would become the French school of painting. This Judith is held at the <a href="/apps/masterpieces/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      {
        question: "Where can I see this Simon Vouet painting?",
        answer: "This version of Judith is at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich. Another version from around 1620-22 is at the Kunsthistorisches Museum in Vienna."
      },
      {
        question: "Who was Simon Vouet?",
        answer: "<a href=\"/apps/masterpieces/artist/simon-vouet\"><strong>Simon Vouet</strong></a> (1590-1649) was a French painter who introduced <strong>Italian Baroque</strong> style to France. He was court painter to Louis XIII and influenced French art for over a century."
      },
      {
        question: "What influences shaped this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/simon-vouet\"><strong>Vouet</strong></a> absorbed influences from <strong>Caravaggio</strong>, Veronese, Carracci, and Guercino during his years in Italy. The dramatic lighting shows Caravaggio's impact."
      }
    ]
  },
  {
    slug: 'gustave-courbet-juliette-courbet',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this portrait of his youngest sister Juliette in 1844, when she was thirteen years old. The painting shows an adolescent girl with an intense yet elusive gaze that creates an unsettled atmosphere. Courbet gave unusual attention to the interior setting, including a mirror that shows no reflection, a rare feature in his work since he generally preferred neutral backgrounds.</p>
<p>The light, soft tones and careful depiction of fabric suggest the influence of Ingres, who dominated French <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraiture</strong></a> at the time. Courbet submitted this painting to the 1845 Salon jury "for a laugh" under the false title "The Baroness of M." The jury rejected it. Twelve years younger than Gustave, Juliette would remain close to her brother throughout his life and become his sole heir.</p>
<p>After Courbet's death, Juliette devoted herself to preserving his legacy, donating major works to French museums. In 1909, the <a href="/apps/masterpieces/museum/petit-palais-paris-france"><strong>Petit Palais</strong></a> in Paris received six paintings including this portrait, where it remains today. The canvas measures 77.5 by 62 cm.</p>`,
    faqs: [
      {
        question: "Where is this Courbet portrait?",
        answer: "The portrait is at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris. It was part of a 1909 donation that included six paintings by <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>."
      },
      {
        question: "Who was Juliette Courbet?",
        answer: "<strong>Juliette Courbet</strong> (1831-1915) was the artist's youngest sister and sole heir. She never married and devoted her later life to preserving Courbet's legacy and donating works to museums."
      },
      {
        question: "When was this painted?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a> painted this in 1844 when Juliette was thirteen. He submitted it to the 1845 Salon under a fake title but the jury rejected it."
      },
      {
        question: "How big is this painting?",
        answer: "The portrait measures 77.5 x 62 cm (about 30.5 x 24.4 inches). It's an oil on canvas showing the <strong>Realist</strong> attention to detail Courbet would become famous for."
      }
    ]
  },
  {
    slug: 'dosso-dossi-jupiter-mercury-and-virtue',
    description: `<p><a href="/apps/masterpieces/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> painted this allegorical scene around 1520, combining classical mythology with moral symbolism. The painting depicts Jupiter, king of the gods, alongside Mercury, the messenger god, and a personification of Virtue. According to the story, the goddesses Virtue and Fortune had quarreled, and distressed Virtue sought Jupiter's aid to resolve the dispute.</p>
<p>Dosso Dossi was an Italian Renaissance painter associated with both Ferrara and Venice, known for his distinctive approach to mythological subjects. His work bridges the Venetian tradition of rich color and atmosphere with the courtly sophistication of the Ferrarese school. The painting demonstrates the <strong>Renaissance fascination with classical allegory</strong> and the use of mythological figures to convey moral lessons.</p>
<p>The work is held at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna. For those interested in <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful artwork</strong></a> with rich narrative content, Dosso Dossi's mythological paintings offer a distinctive Renaissance vision.</p>`,
    faqs: [
      {
        question: "Where is this Dosso Dossi painting?",
        answer: "Jupiter, Mercury and Virtue is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. The museum has an important collection of <strong>Renaissance</strong> mythological paintings."
      },
      {
        question: "What is the story shown?",
        answer: "The painting depicts an allegory where <strong>Virtue and Fortune</strong> have quarreled. Virtue appeals to Jupiter, king of the gods, for help. Mercury appears as the divine messenger."
      },
      {
        question: "Who was Dosso Dossi?",
        answer: "<a href=\"/apps/masterpieces/artist/dosso-dossi\"><strong>Dosso Dossi</strong></a> (c.1490-1542) was an Italian painter from Ferrara known for mythological subjects. He combined Venetian color with the courtly style of the Ferrarese school."
      }
    ]
  },
  {
    slug: 'caravaggio-jupiter-neptune-and-pluto',
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this remarkable ceiling around 1597 for his patron Cardinal Francesco Maria del Monte. It is Caravaggio's only mural and his only ceiling painting, executed in oils on plaster rather than traditional fresco technique. The small room measures just 2.75 meters wide, making the dramatic foreshortening even more impressive when viewed from below.</p>
<p>The three gods are identified by their attributes: Jupiter by the eagle, Neptune by the hippocamp (sea-horse), and Pluto by Cerberus, the three-headed dog of the underworld. Jupiter reaches out to move a celestial sphere showing the Sun revolving around Earth. The painting functioned as an <strong>alchemical allegory</strong> for Del Monte's laboratory: Jupiter represents sulphur and air, Neptune represents mercury and water, and Pluto represents salt and earth.</p>
<p>Early biographers suggest Caravaggio created this work to disprove critics who claimed he couldn't handle perspective. All three gods apparently use Caravaggio's own face. The painting was covered over at some point, possibly because Pluto is shown completely nude, and wasn't rediscovered until 1968. It remains in place at the <a href="/apps/masterpieces/museum/casino-di-villa-boncompagni-ludovisi-rome-italy"><strong>Casino dell'Aurora</strong></a> in Rome, part of the former Villa Ludovisi estate.</p>`,
    faqs: [
      {
        question: "Where is Caravaggio's ceiling painting?",
        answer: "It's at the <a href=\"/apps/masterpieces/museum/casino-di-villa-boncompagni-ludovisi-rome-italy\"><strong>Casino dell'Aurora</strong></a> (Villa Ludovisi) in Rome. This is <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> only ceiling painting and only mural, painted for Cardinal del Monte."
      },
      {
        question: "Why was this painting covered?",
        answer: "Pluto is depicted completely nude. The painting was covered over and wasn't <strong>rediscovered until 1968</strong>. The villa recently made headlines as it may become a museum."
      },
      {
        question: "What is the alchemical meaning?",
        answer: "Cardinal del Monte was interested in <strong>alchemy</strong>. Jupiter represents sulphur and air, Neptune represents mercury and water, and Pluto represents salt and earth, the Paracelsian triad."
      },
      {
        question: "Did Caravaggio use his own face?",
        answer: "Apparently all three gods share <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> own face. The extreme foreshortening was also meant to disprove critics who said he couldn't handle <strong>perspective</strong>."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment batch 2...\n');

  for (const artwork of artworks) {
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
      console.error(`✗ Failed: ${artwork.slug} - ${error.message}`);
    }
  }

  console.log('\nArtwork enrichment batch 2 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
