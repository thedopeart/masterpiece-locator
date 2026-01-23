const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: 'jan-steen-meal',
    description: `<p><a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> was one of the Dutch Golden Age's most prolific painters of domestic scenes, and this work shows his characteristic interest in mealtime subjects. Steen created numerous paintings depicting families gathered around tables, from humble peasant dinners to prayers before eating. His genre scenes often carried moral undertones about <strong>temperance and domestic virtue</strong>.</p>

<p>Steen lived most of his life in Leiden and Haarlem, supplementing his income as a painter by running taverns. This background gave him firsthand knowledge of the social dynamics he depicted. His household scenes became so famous for their chaotic energy that the Dutch phrase "a Jan Steen household" still describes a messy home.</p>

<p>This painting hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence. While the Uffizi is best known for Italian Renaissance works, it holds a small but notable collection of <strong>Dutch and Flemish paintings</strong> acquired by the Medici family over centuries of collecting.</p>`,
    faqs: [
      {
        question: "Where can I see this Jan Steen painting?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum's Dutch collection includes works acquired by the Medici grand dukes."
      },
      {
        question: "What subjects did Jan Steen typically paint?",
        answer: "<a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a> specialized in genre scenes showing Dutch domestic life, including meals, taverns, and family gatherings. His works often contained <strong>moral lessons</strong> about behavior."
      },
      {
        question: "What does 'a Jan Steen household' mean?",
        answer: "The Dutch phrase describes a <strong>messy or chaotic home</strong>. Steen's paintings often showed lively, disordered households, making his name synonymous with domestic chaos in the Netherlands."
      }
    ]
  },
  {
    slug: 'francisco-de-zurbaran-meditation-of-st-francis',
    description: `<p><a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Francisco de Zurbarán</strong></a> painted this meditation scene around 1632, depicting Saint Francis of Assisi in deep contemplation. The saint sits on a simple wooden bench against a dark background, his face and rough Franciscan habit illuminated by a single light source. Zurbarán's realistic style captures every wrinkle of fabric and the <strong>serene expression</strong> of spiritual absorption.</p>

<p>Zurbarán became known as "the painter of monks" for his many depictions of religious figures in contemplation. This work was likely part of a series commissioned by the Convent of San Francisco in Seville, intended to inspire <strong>Franciscan spirituality</strong> through art. The restrained composition focuses entirely on the saint's inner life rather than dramatic action.</p>

<p>The painting now hangs at the <a href="/apps/masterpieces/museum/museo-nacional-de-bellas-artes-mnba-buenos-aires-a"><strong>Museo Nacional de Bellas Artes</strong></a> in Buenos Aires, Argentina. It measures 114 by 78 centimeters and exemplifies the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual intensity</strong></a> that made Zurbarán's religious works popular across the Spanish Empire.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/museo-nacional-de-bellas-artes-mnba-buenos-aires-a\"><strong>Museo Nacional de Bellas Artes</strong></a> in Buenos Aires, Argentina. It measures 114 x 78 cm."
      },
      {
        question: "Why was Zurbarán called 'the painter of monks'?",
        answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a> earned this title for his many depictions of religious figures in <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> contemplation. He worked extensively for Spanish monasteries and convents."
      },
      {
        question: "When was this painting created?",
        answer: "Zurbarán painted this work around <strong>1632</strong>. It was likely part of a series for the Convent of San Francisco in Seville, Spain."
      }
    ]
  },
  {
    slug: 'caravaggio-medusa',
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this image of the severed head of Medusa on a ceremonial shield around 1597. The work was commissioned by Cardinal Francesco Maria del Monte, who gave it to Grand Duke Ferdinand I de' Medici as a gift symbolizing the duke's courage in defeating his enemies. The canvas is mounted on a convex wooden surface, creating the illusion that the head protrudes toward the viewer.</p>

<p>According to Greek myth, Medusa was a woman cursed by Athena to have snakes for hair and a gaze that turned men to stone. Caravaggio replaced Medusa's face with his own, positioning himself as immune to her fatal power. The painting captures the monster's final moment of consciousness: <strong>eyes widened</strong>, mouth agape, blood streaming from the severed neck. This choice of the death moment rather than Medusa alive was unusual for the time.</p>

<p>Caravaggio painted two versions. The first, smaller one (signed "Michel A F") remained in his studio until his death and is now privately owned. This second, larger version at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> measures 60 by 55 centimeters. The work draws comparison to a lost shield painting by Leonardo da Vinci, which Caravaggio almost certainly intended.</p>`,
    faqs: [
      {
        question: "Where can I see Caravaggio's Medusa?",
        answer: "The famous version is displayed at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It's shown in a special case in Room 90, dedicated to Caravaggio's works."
      },
      {
        question: "Why is the painting on a shield?",
        answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> painted on a convex shield to reference a lost work by <strong>Leonardo da Vinci</strong>. It was a ceremonial gift symbolizing the Grand Duke's power over enemies."
      },
      {
        question: "Who commissioned this painting?",
        answer: "Cardinal <strong>Francesco Maria del Monte</strong> commissioned the work around 1597. He gave it to Grand Duke Ferdinand I de' Medici as a diplomatic gift representing courage and victory."
      },
      {
        question: "Did Caravaggio use himself as the model?",
        answer: "Yes. <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> replaced Medusa's face with his own, positioning himself as immune to her <strong>deadly gaze</strong>. This self-portrait adds psychological intensity to the work."
      }
    ]
  },
  {
    slug: 'edvard-munch-melancholy',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this brooding shoreline scene in 1892, depicting a man with his head resting in his hand at the edge of a beach. The figure's melancholic pose was inspired by the unhappy romantic affair of Munch's friend, the journalist Jappe Nilssen. Nilssen was involved with Oda Krohg, wife of the painter Christian Krohg, and his <strong>jealousy became the emotional core</strong> of this composition.</p>

<p>The landscape represents Åsgårdstrand's beach, where Munch spent his summers from 1889. He painted multiple versions of this scene under various titles including "Jealousy," "Evening," and "Jappe on the Beach." When exhibited in 1891 at the Autumn Exhibition in Oslo, the artist Christian Krohg credited it as the first <strong>Symbolist painting</strong> by a Norwegian artist.</p>

<p>This version hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery</strong></a> in Oslo. The painting became part of Munch's "Frieze of Life" series, which explored themes of <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>love, anxiety, and death</strong></a>. The simplified forms and moody color palette would influence Expressionism throughout the 20th century.</p>`,
    faqs: [
      {
        question: "Where can I see Munch's Melancholy?",
        answer: "This version is at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery</strong></a> in Oslo, Norway. Munch painted several versions of this composition between 1891 and 1893."
      },
      {
        question: "Who inspired this painting?",
        answer: "Munch's friend <strong>Jappe Nilssen</strong>, a journalist, inspired the composition. Nilssen's jealous love affair with Oda Krohg provided the emotional subject for the brooding figure."
      },
      {
        question: "What is the Frieze of Life?",
        answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch's</strong></a> \"Frieze of Life\" is a series exploring <strong>love, anxiety, and death</strong>. Melancholy belongs to this group alongside works like The Scream and Madonna."
      },
      {
        question: "Where is the beach in this painting?",
        answer: "The landscape shows <strong>Åsgårdstrand</strong>, a coastal town south of Oslo. Munch spent summers there from 1889 and featured its beach in many paintings."
      }
    ]
  },
  {
    slug: 'odilon-redon-melancholy',
    description: `<p><a href="/apps/masterpieces/artist/odilon-redon"><strong>Odilon Redon</strong></a> created this charcoal drawing in 1876 as part of his "noirs" series, works that exploited the expressive powers of black. A woman leans forward with downcast eyes, set against a mountainous landscape that evokes the Pyrénées near Redon's childhood home. Small fantastical details emerge from the shadows: a faint creature above the woman and a profile hidden in the darkness beside her.</p>

<p>Redon described his childhood as solitary, spent "watching the clouds pass, following with infinite pleasure the magical brightness of their fleeting variations." But he also characterized himself as a "sad and weak child" who "sought out the shadows." This personal note of <strong>melancholy and pessimism</strong> found expression in his mature art, particularly in his mysterious Symbolist works.</p>

<p>The artist wanted to "place the visible at the service of the invisible," representing the ghosts of his own mind rather than visual reality. Redon suffered from periodic depression, and works like this one explore his <strong>internal feelings</strong> and psychological states. The drawing is now in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What medium did Redon use for this work?",
        answer: "Redon created this drawing in <strong>charcoal on paper</strong>. It belongs to his \"noirs\" series, monochromatic works that explored the expressive potential of black."
      },
      {
        question: "What art movement is Odilon Redon associated with?",
        answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Odilon Redon</strong></a> was a leading <strong>Symbolist</strong> artist. His visionary works concern dreams, fantasy, and the imagination rather than visual perception."
      },
      {
        question: "What inspired Redon's melancholic themes?",
        answer: "Redon described a <strong>solitary childhood</strong> and being a \"sad and weak child\" who sought shadows. He suffered from periodic depression, which found expression in his mysterious artworks."
      }
    ]
  },
  {
    slug: 'dosso-dossi-melissa-circe',
    description: `<p><a href="/apps/masterpieces/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> painted this commanding image of a sorceress around 1518 for the Este court in Ferrara. A turbaned woman in sumptuous clothing sits within a circle marked with cabalistic symbols, holding a torch in one hand and a geometric tablet in the other. Trees and a dog with strangely human eyes surround her in the forest setting.</p>

<p>The identity of this figure has shifted over time. First called a generic sorceress, then identified as Homer's Circe, art historian Julius von Schlosser recognized her in 1900 as <strong>Melissa from Ludovico Ariosto's Orlando Furioso</strong>. Melissa was the benevolent protector of the Este dynasty who freed knights transformed into animals and trees by the witch Alcina. Restoration revealed Dossi's original composition included an armored male figure, likely the paladin Astolfo, later replaced by the <strong>human-eyed mastiff</strong>.</p>

<p>The painting entered the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> collection through Cardinal Enzo Bentivoglio, who sent it from Ferrara to Scipione Borghese. First documented in the collection in 1650, the oil-on-canvas work measures 172 by 153 centimeters and remains one of Dossi's most celebrated paintings.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "Melissa (Circe) hangs at the <a href=\"/apps/masterpieces/museum/borghese-gallery-rome-italy\"><strong>Borghese Gallery</strong></a> in Rome. It measures 172 x 153 cm and has been in the collection since at least 1650."
      },
      {
        question: "Who is the woman in the painting?",
        answer: "She's identified as <strong>Melissa</strong> from Ariosto's epic poem Orlando Furioso. Melissa was the benevolent protector of the Este dynasty who freed knights from enchantment."
      },
      {
        question: "What was changed in the painting?",
        answer: "Restoration revealed <a href=\"/apps/masterpieces/artist/dosso-dossi\"><strong>Dossi</strong></a> originally included an <strong>armored male figure</strong>, likely Astolfo. He later replaced this with the dog and trees visible today."
      },
      {
        question: "Who was Dosso Dossi?",
        answer: "<a href=\"/apps/masterpieces/artist/dosso-dossi\"><strong>Dosso Dossi</strong></a> (c.1479-1542) was an Italian Renaissance painter who worked at the Este court in Ferrara. He was influenced by Giorgione and Raphael."
      }
    ]
  },
  {
    slug: 'juan-de-juanes-melquisedec-rey-de-salem',
    description: `<p><a href="/apps/masterpieces/artist/juan-de-juanes"><strong>Juan de Juanes</strong></a> painted this image of the Old Testament priest-king Melchizedek between 1545 and 1550. The figure bears bread and wine, prefiguring the Christian Eucharist. Gold leaf covers the background, and the back of the panel features polychrome decoration using the sgraffito technique, indicating this was part of an elaborate <strong>church tabernacle</strong>.</p>

<p>This panel formed part of the high altarpiece for the Church of the Nativity of the Virgin in Fuente la Higuera, Valencia. It originally flanked a central image of Christ holding the chalice and Host, with the High Priest Aaron on the opposite side holding incense. Together, the three panels conveyed the <strong>Eucharistic meaning</strong> connecting Old Testament sacrifice to the Christian sacrament.</p>

<p>The painting came to the Royal Collection at Aranjuez Palace in 1801 and is now at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid. At 80 by 35 centimeters, the narrow vertical format suited its original position in the tabernacle structure. Juan de Juanes was the leading Valencian painter of his generation, known for refined religious compositions influenced by Raphael.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid with inventory number P00853. It measures 80 x 35 cm."
      },
      {
        question: "Who was Melchizedek?",
        answer: "<strong>Melchizedek</strong> was a priest-king of Salem mentioned in Genesis. He offered bread and wine to Abraham, making him a symbol of the Eucharist in Christian tradition."
      },
      {
        question: "What was the original purpose of this painting?",
        answer: "It was part of the <strong>tabernacle</strong> for the high altar at the Church of the Nativity of the Virgin in Fuente la Higuera, Valencia, flanking a central Eucharistic image."
      }
    ]
  },
  {
    slug: 'annibale-carracci-mercury-protecting-ulysses-from-the-charms-of-circ',
    description: `<p><a href="/apps/masterpieces/artist/annibale-carracci"><strong>Annibale Carracci</strong></a> painted this mythological scene around 1590, depicting an episode from Homer's Odyssey. Ulysses stands at center receiving a bowl from the enchantress Circe, who reclines to the left. Behind Ulysses, the god Mercury adds protective herbs to the potion, saving the hero from the same fate that befell his companions: transformation into <strong>swine and other animals</strong>.</p>

<p>The subject appears multiple times in Carracci's work. A study version exists at the Musée des Beaux-Arts d'Orléans, while the most famous treatment appears in the ceiling frescoes of the Camerino Farnese in Rome. Cardinal Odoardo Farnese commissioned Carracci to decorate his private study between 1595 and 1597, just before the artist began the grander <strong>Farnese Gallery</strong> ceiling.</p>

<p>Carracci was among the most gifted artists of late 16th-century Bologna. His work merged classicism with naturalism, rejecting what he saw as the sterility of Mannerism. This study for the mythological scene hangs at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-d39orl233ans-orleans-france"><strong>Musée des Beaux-Arts d'Orléans</strong></a> in France.</p>`,
    faqs: [
      {
        question: "What myth does this painting depict?",
        answer: "It shows a scene from <strong>Homer's Odyssey</strong>. Mercury gives Ulysses protective herbs to resist Circe's potion, which turned his companions into animals."
      },
      {
        question: "Where can I see this painting?",
        answer: "This study version is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-d39orl233ans-orleans-france\"><strong>Musée des Beaux-Arts d'Orléans</strong></a> in France. A larger version appears in the Camerino Farnese ceiling in Rome."
      },
      {
        question: "Who was Annibale Carracci?",
        answer: "<a href=\"/apps/masterpieces/artist/annibale-carracci\"><strong>Annibale Carracci</strong></a> (1560-1609) was a Bolognese Baroque painter. He merged classicism with naturalism, influencing generations of later artists."
      }
    ]
  },
  {
    slug: 'edward-burne-jones-merlin-and-nimue',
    description: `<p><a href="/apps/masterpieces/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> created this watercolor and gouache painting in 1861, depicting a scene from Arthurian legend. The enchantress Nimue incants from a magic book as a gravestone-like form rises from the earth, drawing the wizard Merlin inexorably toward the <strong>gaping tomb</strong> that awaits him. According to the legend from Malory's Morte d'Arthur, Nimue trapped Merlin forever using his own spells.</p>

<p>Burne-Jones had explored this subject earlier in 1857-58 for a mural at the Oxford Union Library. His fascination with Arthurian themes continued throughout his career, culminating in "The Beguiling of Merlin" (1872-1877) now at the Lady Lever Art Gallery. These works reflect the <strong>Pre-Raphaelite interest</strong> in medieval romance and the femme fatale figure.</p>

<p>This watercolor measures 64 by 51 centimeters and hangs at the <a href="/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk"><strong>Victoria and Albert Museum</strong></a> in London. Burne-Jones was a central figure in the second generation of Pre-Raphaelites, known for dreamlike imagery drawn from mythology and <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>medieval literature</strong></a>.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "The watercolor is at the <a href=\"/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk\"><strong>Victoria and Albert Museum</strong></a> in London. It measures 64 x 51 cm and uses watercolor and gouache."
      },
      {
        question: "What legend does this painting depict?",
        answer: "It shows a scene from <strong>Malory's Morte d'Arthur</strong>. The enchantress Nimue traps the wizard Merlin forever using spells she learned from him."
      },
      {
        question: "What art movement was Burne-Jones part of?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> was a central figure in the second generation of <strong>Pre-Raphaelites</strong>. He favored dreamlike imagery from mythology and medieval romance."
      }
    ]
  },
  {
    slug: 'adriaen-van-ostade-merrymakers-in-an-inn',
    description: `<p><a href="/apps/masterpieces/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this tavern scene in 1674, depicting peasants of multiple generations celebrating in a spacious interior. Despite the varied poses and disordered space, the artist carefully arranged all elements to focus attention on the <strong>dancing couple</strong> at the center. While many figures are absorbed in their drinks, everyone seems to acknowledge the dancers.</p>

<p>In 17th-century Dutch society, the inn served as a humble center for peasant revelry. Van Ostade took special interest in these colorful human activities, creating good-natured depictions of village life where figures remain lively in expression and action. The scenes typically carried <strong>moral undertones</strong> about overindulgence, as anything in excess was viewed as morally dangerous.</p>

<p>Van Ostade lived his entire life in Haarlem and trained under Frans Hals alongside his brother. He created over 800 paintings and was also a renowned printmaker, second only to Rembrandt. This oil-on-panel work measuring 46.7 by 41 centimeters hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Merrymakers in an Inn?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. It's an oil on panel measuring 46.7 x 41 cm, created in 1674."
      },
      {
        question: "What was the moral message of Dutch tavern scenes?",
        answer: "These scenes typically warned against <strong>overindulgence</strong>. In 17th-century Dutch society, anything in excess was considered morally dangerous, even among peasants."
      },
      {
        question: "Who trained Adriaen van Ostade?",
        answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> trained under <strong>Frans Hals</strong> in Haarlem alongside his brother. He became one of the most prolific Dutch Golden Age painters."
      }
    ]
  },
  {
    slug: 'paul-gauguin-mette-asleep-on-a-sofa',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this intimate scene in 1875, showing a woman reclining on a sofa in a Parisian interior. The sleeping figure is traditionally identified as Gauguin's wife, Mette Sophie Gad, a Danish woman he had married in November 1873. Some scholars suggest the model might actually be their mutual friend Marie Heegaard, though the title has persisted.</p>

<p>This small oil on canvas (24.5 by 32.5 cm) represents Gauguin's <strong>earliest period as a painter</strong>. In the mid-1870s, he was still working as a stockbroker, painting only in his spare time. He wouldn't commit to art full-time until the Paris stock market collapsed in 1882. This may be the first figural composition Gauguin created and his only surviving work of this kind from the mid-1870s.</p>

<p>The painting anticipates his later artistic interest in domestic subjects, particularly family members who would increasingly inspire him to paint, draw, and sculpt after 1880. Gauguin and Mette eventually had five children before separating, though they maintained <strong>intermittent correspondence</strong> for years. The work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "Who is the woman in this painting?",
        answer: "The sleeping figure is traditionally identified as <strong>Mette Sophie Gad</strong>, Gauguin's Danish wife whom he married in 1873. Some scholars suggest it might be their friend Marie Heegaard."
      },
      {
        question: "When did Gauguin paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> created this work in <strong>1875</strong> while still working as a stockbroker. It's among his earliest paintings, before he committed to art full-time."
      },
      {
        question: "Where is this painting located?",
        answer: "The painting is in a <strong>private collection</strong>. It measures 24.5 x 32.5 cm and represents Gauguin's early Impressionist-influenced period in Paris."
      }
    ]
  },
  {
    slug: 'nicolas-poussin-midas-washing-at-the-source-of-the-river-pactolus',
    description: `<p><a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> painted this mythological scene around 1627, shortly after arriving in Rome. The subject comes from Ovid's Metamorphoses: King Midas, who had unwisely wished that everything he touched turn to gold, washes in the River Pactolus to reverse what had become a deadly curse. The god Bacchus had originally granted the wish in gratitude for Midas protecting his foster-son Silenus.</p>

<p>Poussin shows Midas as the smaller, humbled figure behind a classical <strong>reclining river god</strong> who personifies the Pactolus. Two putti with jugs point to the river's source and to Bacchus as the god of wine. The composition treats the story as an allegory of vanity, showing the consequences of desiring wealth above all else.</p>

<p>This was among the first works Poussin completed in Rome and among the first paintings acquired by The Metropolitan Museum of Art in 1871. The painting may be one originally owned by Cardinal Camillo Massimi, a close friend and patron of Poussin interested in <strong>Stoic philosophy</strong>. A version also exists at the <a href="/apps/masterpieces/museum/musee-fesch-ajaccio-france"><strong>Musée Fesch</strong></a> in Ajaccio, Corsica.</p>`,
    faqs: [
      {
        question: "What myth does this painting depict?",
        answer: "It shows King <strong>Midas</strong> washing away his \"golden touch\" curse in the River Pactolus. The story comes from Ovid's Metamorphoses and illustrates the vanity of desiring wealth."
      },
      {
        question: "Who is the large figure in the foreground?",
        answer: "The reclining figure is a <strong>river god</strong> personifying the Pactolus River. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> uses classical symbolism with the god and two putti holding water jugs."
      },
      {
        question: "When did Poussin paint this?",
        answer: "Poussin created this work around <strong>1627</strong>, shortly after arriving in Rome. It was among his first paintings completed in the city."
      }
    ]
  },
  {
    slug: 'chaim-soutine-midday-landscape',
    description: `<p><a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> developed his distinctive landscape style during stays in southern France between 1919 and 1925. Moving first to Céret in the Pyrenees and then to Cagnes-sur-Mer on the Riviera, he produced landscapes marked by thick impasto, agitated brushwork, and <strong>convulsive compositional rhythms</strong>. Under the pressure of internal forces, his forms spring forth twisting, masses rising as if caught in a maelstrom.</p>

<p>Soutine was born in Belarus and arrived in Paris in 1913, becoming part of the School of Paris alongside Modigliani and Chagall. His highly individual style, concerned more with shape, color, and texture than representation, served as a bridge between traditional approaches and <strong>Abstract Expressionism</strong>. Artists like Willem de Kooning and Jackson Pollock would later look to his work for inspiration.</p>

<p>Despite the seeming abstraction and distortions in works like this one, Soutine painted from specific locations that can often still be identified. This landscape is now in a <strong>private collection</strong>. Soutine's landscapes from the 1920s have become among his most celebrated works, prefiguring developments in American art decades later.</p>`,
    faqs: [
      {
        question: "What art movement is Chaim Soutine associated with?",
        answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Soutine</strong></a> was part of the <strong>School of Paris</strong> and contributed to Expressionism. His work influenced later Abstract Expressionists like de Kooning and Pollock."
      },
      {
        question: "What characterized Soutine's landscape style?",
        answer: "His landscapes feature <strong>thick impasto</strong>, agitated brushwork, and forms that twist and rise as if caught in a maelstrom. Colors and textures dominate over realistic representation."
      },
      {
        question: "Where is this painting located?",
        answer: "Midday Landscape is in a <strong>private collection</strong>. Soutine's landscapes from the 1920s are among his most celebrated and sought-after works."
      }
    ]
  },
  {
    slug: 'vasily-surikov-minusinsk-steppe',
    description: `<p><a href="/apps/masterpieces/artist/vasily-surikov"><strong>Vasily Surikov</strong></a> painted this Siberian landscape capturing the vast steppe near Minusinsk, a town in southern Siberia along the Yenisei River. Surikov was born in Krasnoyarsk, deep in Siberia, and maintained a connection to his homeland throughout his career despite eventually settling in Moscow and St. Petersburg.</p>

<p>The painter grew up in poverty after his father died of tuberculosis. His art teacher recognized his talent and encouraged him to pursue drawing. In 1868, Surikov set off for St. Petersburg on horseback to study at the Imperial Academy of Arts, where he graduated in 1875. He became associated with the <strong>Peredvizhniki</strong> (The Wanderers), a group of Russian realist artists who rejected academic restrictions.</p>

<p>While Surikov is best known for monumental history paintings, his landscapes capture the <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>Russian landscape</strong></a> with the same realist approach. This painting hangs at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in St. Petersburg, which holds the most comprehensive collection of Russian art in the world.</p>`,
    faqs: [
      {
        question: "Where is Minusinsk Steppe displayed?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg, Russia. The museum holds the world's largest collection of Russian art."
      },
      {
        question: "Where is Minusinsk?",
        answer: "<strong>Minusinsk</strong> is a town in southern Siberia along the Yenisei River. <a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Surikov</strong></a> was born in Siberia and maintained connections to his homeland."
      },
      {
        question: "What was the Peredvizhniki movement?",
        answer: "The <strong>Peredvizhniki</strong> (Wanderers) were Russian realist artists who rejected academic restrictions. Surikov exhibited with them starting in 1881."
      }
    ]
  },
  {
    slug: 'vasily-surikov-minusinsk-on-the-way',
    description: `<p><a href="/apps/masterpieces/artist/vasily-surikov"><strong>Vasily Surikov</strong></a> created this watercolor in 1873, depicting a scene along the road near Minusinsk in Siberia. The work shows horses and a traveler on the steppe, capturing the <strong>vast emptiness</strong> of the Siberian landscape. At 23 by 32.6 centimeters, the intimate scale suits the delicate watercolor medium.</p>

<p>Surikov painted this work while still a student at the Imperial Academy of Arts in St. Petersburg, where he studied from 1869 to 1875. Though he would become famous for large-scale history paintings depicting dramatic moments in Russian history, his early works often returned to <strong>Siberian subjects</strong> from his childhood.</p>

<p>Born in Krasnoyarsk in 1848, Surikov grew up surrounded by descendants of the Cossacks who had conquered Siberia centuries earlier. These roots would later inform his historical paintings exploring Russian identity and suffering. This watercolor landscape is now in a <strong>private collection</strong>, representing the artist's early engagement with the land that shaped him.</p>`,
    faqs: [
      {
        question: "What medium did Surikov use for this work?",
        answer: "<a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Surikov</strong></a> created this piece in <strong>watercolor on paper</strong> in 1873. It measures 23 x 32.6 cm, smaller than his later monumental history paintings."
      },
      {
        question: "Where is this painting located?",
        answer: "Minusinsk. On the way. is in a <strong>private collection</strong>. Surikov painted it while still a student at the Imperial Academy of Arts."
      },
      {
        question: "What subjects was Surikov known for?",
        answer: "While famous for <strong>history paintings</strong> depicting dramatic Russian events, Surikov also painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> of his native Siberia throughout his career."
      }
    ]
  },
  {
    slug: 'juan-de-valdes-leal-miracle-of-st-ildefonsus',
    description: `<p><a href="/apps/masterpieces/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> depicted the miracle associated with Saint Ildefonsus, the seventh-century Archbishop of Toledo. According to legend, the Virgin Mary appeared to Ildefonsus and presented him with a chasuble as reward for his defense of her perpetual virginity. This subject was popular in Spanish Baroque art, especially in <strong>Toledo and Seville</strong>.</p>

<p>Valdés Leal was born in Seville in 1622 and became one of the leading painters of the Spanish Baroque alongside his friend Bartolomé Esteban Murillo. Together they founded the Seville Academy in 1660. While Murillo favored soft, idealized religious imagery, Valdés Leal developed a more <strong>dramatic and visceral style</strong>, particularly in his famous vanitas paintings at the Hospital de la Caridad.</p>

<p>His wife Isabella Carasquilla was also a painter, and their children continued the family's artistic tradition. Valdés Leal worked as painter, sculptor, and architect throughout Seville, creating works for numerous churches and religious institutions. This painting is now in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What miracle does this painting depict?",
        answer: "It shows the <strong>Virgin Mary</strong> presenting a chasuble (liturgical vestment) to Saint Ildefonsus, Archbishop of Toledo, as reward for defending her perpetual virginity."
      },
      {
        question: "Who was Juan de Valdés Leal?",
        answer: "<a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> (1622-1690) was a Spanish Baroque painter from Seville. He co-founded the Seville Academy with Murillo in 1660."
      },
      {
        question: "Where is this painting located?",
        answer: "The painting is in a <strong>private collection</strong>. Valdés Leal created numerous religious works for churches throughout Seville and southern Spain."
      }
    ]
  },
  {
    slug: 'giotto-miracle-of-the-crucifix',
    description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> painted this fresco between 1297 and 1299 as part of the Legend of Saint Francis cycle in the Upper Church of the Basilica of Saint Francis in Assisi. The scene depicts a pivotal moment in Francis's life: while praying alone before a crucifix in the ruined chapel of San Damiano, he heard a voice saying, "Francis, go and repair my church, which as you see is <strong>falling into ruins</strong>."</p>

<p>Taking the command literally at first, Francis devoted himself to rebuilding the physical chapel. Only later did he understand the call meant restoring the entire Church. The crucifix before which he prayed, now known as the <strong>San Damiano Cross</strong>, was painted by an unknown artist in the 12th century and still survives in Assisi.</p>

<p>The fresco measures 270 by 230 centimeters and is the fourth in the cycle of 28 scenes depicting Francis's life. Giotto's revolutionary approach to space and human emotion in these frescoes marked a turning point from Byzantine conventions toward the naturalism that would flourish in the Renaissance. The cycle remains at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      {
        question: "Where can I see this fresco?",
        answer: "It's in the Upper Church of the <a href=\"/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy\"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy. The fresco cycle covers the walls of the nave."
      },
      {
        question: "What story does this scene depict?",
        answer: "It shows <strong>Saint Francis</strong> hearing God's voice from a crucifix, telling him to \"repair my church.\" Francis first rebuilt the chapel, then later the entire Church spiritually."
      },
      {
        question: "What is the San Damiano Cross?",
        answer: "The <strong>San Damiano Cross</strong> is the 12th-century crucifix before which Francis prayed. It still survives in Assisi and remains an important Franciscan symbol."
      },
      {
        question: "Why is Giotto's work significant?",
        answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto's</strong></a> Assisi frescoes marked a <strong>turning point</strong> from Byzantine conventions toward naturalism. His approach to space and emotion influenced all later Renaissance art."
      }
    ]
  },
  {
    slug: 'sassetta-miracle-of-the-eucharist',
    description: `<p><a href="/apps/masterpieces/artist/sassetta"><strong>Sassetta</strong></a> painted this small panel in 1423 for the Eucharist chapel in Siena Cathedral as part of a propaganda campaign promoting devotion to the sacrament. The scene depicts a miraculous occurrence: when offered to a sinful young Carmelite friar, the communion Host transformed into a <strong>bleeding wafer</strong>, and a devil snatched the monk's soul from his mouth as he collapsed dead.</p>

<p>The congregation watches in horror from the left as the drama unfolds on the right. The young friar's cloak has turned black, marking his sinfulness. The carefully staged composition commemorates the Miracle of Bolsena (1263), when a doubting priest saw the Host bleed during Mass. The painting conveys the "consequences of sinfulness, the perils of feigning faith, and the <strong>power of God</strong>."</p>

<p>Sassetta (Stefano di Giovanni, c.1392-1450) was among the most important representatives of Sienese Renaissance painting. His altarpiece of the Eucharist was later divided between multiple collections. This panel, measuring 24 by 38 centimeters, is now at the <a href="/apps/masterpieces/museum/bowes-museum-barnard-castle-uk"><strong>Bowes Museum</strong></a> in Barnard Castle, England.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The panel is at the <a href=\"/apps/masterpieces/museum/bowes-museum-barnard-castle-uk\"><strong>Bowes Museum</strong></a> in Barnard Castle, England. It measures 24 x 38 cm."
      },
      {
        question: "What miracle does this painting depict?",
        answer: "It shows a <strong>bleeding Host</strong> killing a sinful monk who received Communion unworthily. A devil snatches his soul while the congregation watches in horror."
      },
      {
        question: "Why was this painting created?",
        answer: "<a href=\"/apps/masterpieces/artist/sassetta\"><strong>Sassetta</strong></a> created it for <strong>Siena Cathedral</strong> in 1423 as part of a campaign promoting Eucharistic devotion after the Miracle of Bolsena."
      }
    ]
  },
  {
    slug: 'johannes-vermeer-mistress-and-maid',
    description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this scene around 1667, depicting an elegant woman and her maid examining a letter just received. The mistress wears a yellow fur-lined jacket, one of Vermeer's favorite garments that appears in several paintings. Light from the left illuminates her face as she lifts her fingertips to her chin in a <strong>questioning gesture</strong>, lips slightly parted.</p>

<p>Technical examination in 2017 revealed that Vermeer originally included a detailed pictorial element in the background with at least four figures, likely a large tapestry or painting. He later decided a darker, plainer background would better focus attention on the <strong>women's interaction</strong> and added the curtain visible today.</p>

<p>The painting traveled over 8,300 miles and passed through at least fifteen owners before reaching New York. Henry Clay Frick acquired it in 1919, requiring a special license from the War Trade Board due to post-WWI restrictions on dealing with German collections. It was the last painting Frick purchased before his death and now hangs at the <a href="/apps/masterpieces/museum/frick-collection"><strong>Frick Collection</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Mistress and Maid?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/frick-collection\"><strong>Frick Collection</strong></a> in New York City. It was the last artwork Henry Clay Frick acquired before his death in 1919."
      },
      {
        question: "What did Vermeer originally include in the background?",
        answer: "Technical scans revealed <strong>four figures</strong> in the background, likely a tapestry or painting. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> later painted over them to focus on the women's interaction."
      },
      {
        question: "What is the woman's gesture?",
        answer: "The mistress lifts her <strong>fingertips to her chin</strong> in a questioning pose while reading the letter. Her parted lips suggest surprise or concern at its contents."
      },
      {
        question: "What are Vermeer's signature elements in this work?",
        answer: "The painting shows Vermeer's characteristic <strong>yellow and blue</strong> color scheme, domestic setting, and masterful treatment of light falling from the left."
      }
    ]
  },
  {
    slug: 'camille-corot-mont-soracte',
    description: `<p><a href="/apps/masterpieces/artist/camille-corot"><strong>Camille Corot</strong></a> painted this Italian landscape during his first stay in Italy between 1826 and 1827. He visited Civita Castellana, north of Rome, several times during this period, painting Mont Soracte from different viewpoints and under various weather conditions. The isolated limestone mountain rises dramatically from the Italian plain, its distinctive profile visible for miles.</p>

<p>This small oil study on paper captures the mountain in the distance beyond a forest and fortress. Corot positioned himself on a rocky elevation to take in the sweeping view. During 1826-27, he painted hundreds of drawings and oil studies throughout the <strong>Roman countryside</strong>, developing the plein-air technique that would influence later Impressionists.</p>

<p>Corot completed the landscape outdoors, working directly from nature rather than composing in a studio. His first Salon entry, "The Bridge at Narni," from this same Italian trip showcased his <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>open-air method</strong></a>. This study remains in a <strong>private collection</strong>. A related version is held by the Musée d'art et d'histoire in Geneva.</p>`,
    faqs: [
      {
        question: "Where is Mont Soracte?",
        answer: "<strong>Mont Soracte</strong> is an isolated limestone mountain north of Rome, Italy. Its distinctive profile is visible from the surrounding plain and attracted <a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Corot</strong></a> during his Italian travels."
      },
      {
        question: "When did Corot paint this?",
        answer: "Corot created this work during his <strong>first Italian stay</strong> between 1826 and 1827. He painted Mont Soracte from multiple viewpoints during this period."
      },
      {
        question: "What technique did Corot use?",
        answer: "Corot painted this <strong>oil study on paper</strong> outdoors, working directly from nature. This plein-air approach influenced later Impressionist painters."
      },
      {
        question: "Where is this painting located?",
        answer: "This version is in a <strong>private collection</strong>. Related studies of Mont Soracte by Corot are held in museums including Geneva's Musée d'art et d'histoire."
      }
    ]
  }
];

async function updateArtworks() {
  console.log('Starting artwork enrichment (Batch 2)...\n');

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
