const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: 'gerard-ter-borch-helena-van-der-schalcke-as-a-child',
    description: `<p><a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this small portrait around 1648 when his subject, Helena van der Schalcke, was only two years old. The oil-on-panel work shows the child standing alone in what appears to be an entirely empty interior. No furniture, no decorative objects. Just Helena in her fine dress with a minimal separation between floor and wall.</p>

<p>Ter Borch often employed this <strong>neutral background</strong> approach in his portraits, stripping away context to focus entirely on his subjects. It's a technique that gives his work a timeless quality, unmarked by the fashions of any particular Dutch home. Helena would live only until 1671, dying at twenty-five, which adds an unavoidable poignancy to this early image of her.</p>

<p>The painting now hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, where it remains one of the most recognized examples of <strong>Dutch Golden Age</strong> child portraiture. Ter Borch's skill in rendering fabrics and capturing quiet dignity, even in someone so young, is on full display here.</p>`,
    faqs: [
      {
        question: "Where can I see Helena van der Schalcke as a Child?",
        answer: "This portrait is displayed at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, Netherlands. The museum holds an extensive collection of Dutch Golden Age paintings."
      },
      {
        question: "When was this portrait painted?",
        answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> created this portrait around 1648 when Helena was approximately two years old. The oil-on-panel work captures her in a stark, empty interior."
      },
      {
        question: "Who was Helena van der Schalcke?",
        answer: "Helena van der Schalcke (1646-1671) was the young daughter of a Dutch family. She died at just twenty-five years old, making this early <strong>childhood portrait</strong> a rare record of her short life."
      }
    ]
  },
  {
    slug: 'ford-madox-brown-henry-fawcett-dame-millicent-garrett-fawcett',
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted this double portrait in 1872, capturing two of Victorian England's most influential liberal thinkers. Henry Fawcett sits in an armchair while his wife Millicent perches on its arm, leaning in toward him with her arm around his shoulder. The intimacy is striking for formal portraiture of the era.</p>

<p>Henry had been blinded in a shooting accident in 1858 but refused to let it derail his ambitions. He became the first <strong>blind Member of Parliament</strong> and served as Professor of Political Economy at Cambridge. Millicent acted as his guide and secretary, often taking notes for him in the House of Commons. She would go on to lead the <strong>women's suffrage movement</strong>, becoming president of the National Union of Women's Suffrage Societies in 1897.</p>

<p>The painting was commissioned by Sir Charles Dilke, a friend and political ally of the Fawcetts. It now belongs to the <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London, where it serves as a rare example of disability represented in Victorian portraiture.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: "The painting is held at the <a href=\"/apps/masterpieces/museum/national-portrait-gallery-london-uk\"><strong>National Portrait Gallery</strong></a> in London. It was bequeathed by Sir Charles Wentworth Dilke in 1911."
      },
      {
        question: "Who were Henry and Millicent Fawcett?",
        answer: "Henry Fawcett was a blind MP and Cambridge professor. <strong>Millicent Garrett Fawcett</strong> became a leader of the British women's suffrage movement, fighting for <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women's</strong></a> right to vote."
      },
      {
        question: "What style did Ford Madox Brown use?",
        answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> was associated with the Pre-Raphaelite movement. This 1872 portrait shows his characteristic attention to detail and emotional depth in portraiture."
      },
      {
        question: "What makes this portrait historically significant?",
        answer: "It's a rare Victorian portrait depicting <strong>disability openly</strong>. Henry Fawcett was blind, and the composition shows his wife Millicent supporting him, reflecting their real-life partnership."
      }
    ]
  },
  {
    slug: 'salvator-rosa-heraklit-und-demokrit',
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this tondo (circular painting) around 1645-1649 in Florence for his friend Francesco Cordini, a publisher and art dealer. The work depicts two ancient Greek philosophers who came to represent opposite responses to human existence: Heraclitus, the weeping philosopher, and Democritus, the laughing one.</p>

<p>The contrast between these two thinkers had fascinated artists since late antiquity. Heraclitus wept at the folly and suffering of humanity while Democritus found it all absurdly funny. Rosa captures both men <strong>absorbed in reflection</strong>, their expressions conveying centuries of philosophical debate about whether life deserves tears or laughter.</p>

<p>The painting eventually passed to Archduke Ferdinand Karl of Tyrol and was moved from Innsbruck to <strong>Ambras Castle</strong> in 1663. Today it hangs in the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, measuring 104 centimeters in diameter. Rosa's dramatic handling of light and shadow gives the philosophers a theatrical presence fitting their eternal debate.</p>`,
    faqs: [
      {
        question: "Where can I see Heraclitus and Democritus?",
        answer: "This tondo hangs in the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. It measures 104 cm in diameter and is displayed in the Gemäldegalerie."
      },
      {
        question: "Who were Heraclitus and Democritus?",
        answer: "They were ancient Greek philosophers representing opposite worldviews. <strong>Heraclitus</strong> wept at human folly while <strong>Democritus</strong> laughed at life's absurdity. Their contrast became a popular artistic theme."
      },
      {
        question: "Who painted this work?",
        answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a> created this painting around 1645-1649 in Florence. He was known for dramatic landscapes and philosophical subjects in Baroque style."
      }
    ]
  },
  {
    slug: 'gerrit-dou-heraklith',
    description: `<p><a href="/apps/masterpieces/artist/gerrit-dou"><strong>Gerrit Dou</strong></a> was Rembrandt's first student and became famous for his own meticulous technique and small-scale works. This painting of Heraclitus, the ancient Greek philosopher known as "the weeping philosopher," demonstrates Dou's characteristic precision and attention to detail that made him one of the most sought-after painters in the Dutch Golden Age.</p>

<p>Heraclitus earned his nickname because he allegedly wept at human folly, viewing the world with a melancholic pessimism. Artists throughout the Baroque period found this subject appealing, often pairing Heraclitus with <strong>Democritus</strong>, the laughing philosopher who found humanity's struggles amusing rather than tragic.</p>

<p>The painting now resides at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. Dou's treatment of the philosopher shows his mastery of capturing <strong>texture and emotion</strong> in intimate compositions, a skill he developed during his years studying under Rembrandt in Leiden.</p>`,
    faqs: [
      {
        question: "Where is Gerrit Dou's Heraclitus displayed?",
        answer: "The painting is part of the collection at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia, one of the world's largest art museums."
      },
      {
        question: "Who was Gerrit Dou?",
        answer: "<a href=\"/apps/masterpieces/artist/gerrit-dou\"><strong>Gerrit Dou</strong></a> (1613-1675) was a Dutch Golden Age painter and Rembrandt's first student. He became famous for extremely detailed small-scale paintings."
      },
      {
        question: "Why was Heraclitus called the weeping philosopher?",
        answer: "Ancient sources describe <strong>Heraclitus</strong> as melancholic and pessimistic about humanity. He supposedly wept at human folly, contrasting with Democritus who laughed at it."
      }
    ]
  },
  {
    slug: 'francois-boucher-hercules-and-omfala',
    description: `<p><a href="/apps/masterpieces/artist/francois-boucher"><strong>François Boucher</strong></a> completed this sensual mythological scene between 1731 and 1734, shortly after studying under François Lemoyne. The painting depicts the Greek hero Hercules in a passionate embrace with Omphale, the queen of Lydia to whom he was enslaved as punishment for murder.</p>

<p>Boucher subverts the traditional depiction of Hercules as a muscular, dominant figure. Here, the hero appears youthful with barely any beard, caught in an <strong>uninhibited kiss</strong> with Omphale while cupids flutter around them. The distaff and spindle, which Hercules was forced to work during his servitude, are placed in a cupid's hands rather than his own. This leaves the hero free to express his desire without symbols of his humiliation.</p>

<p>The work passed through several notable French collections before entering the Yusupov family collection in St. Petersburg. After the Russian Revolution, it was transferred to the <a href="/apps/masterpieces/museum/pushkin-museum"><strong>Pushkin Museum</strong></a> in Moscow, where it remains today. The painting reflects <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>Rococo sensibilities</strong></a> with its soft colors, playful eroticism, and debt to Rubens' full-blooded style.</p>`,
    faqs: [
      {
        question: "Where can I see Hercules and Omphale?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/pushkin-museum\"><strong>Pushkin Museum</strong></a> in Moscow, Russia. It measures 90 x 74 cm and was acquired from the Yusupov family collection after 1917."
      },
      {
        question: "What myth does this painting depict?",
        answer: "It shows <strong>Hercules enslaved to Queen Omphale</strong> of Lydia as punishment for murder. During his servitude, he was forced to do women's work while Omphale wore his lion skin."
      },
      {
        question: "Who was François Boucher?",
        answer: "<a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>François Boucher</strong></a> (1703-1770) was a leading French Rococo painter known for mythological scenes, pastoral subjects, and decorative works for the French court."
      },
      {
        question: "What style is this painting?",
        answer: "The work exemplifies the <strong>Rococo style</strong> with its soft colors, sensual subject matter, and playful atmosphere. Boucher was influenced by Rubens' more dramatic approach."
      }
    ]
  },
  {
    slug: 'hieronymus-bosch-here-is-a-man-ecce-homo',
    description: `<p><a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted this Ecce Homo scene between 1475 and 1485, depicting the moment Pontius Pilate presents the scourged Christ to the hostile crowd. The oil-on-oak panel measures 71.4 by 61 centimeters and contains Gothic inscriptions functioning like speech balloons in a comic strip. Pilate's cry of "Ecce Homo" (Behold the Man) is answered by the mob's demand: "Crucifige Eum" (Crucify Him).</p>

<p>Typical of Bosch, the scene is filled with <strong>symbolic imagery</strong>. An owl perches above Pilate, and a giant toad rests on a soldier's shield. Both animals were considered emblems of evil in Christian iconography. The upper right shows a <strong>Gothic cityscape</strong> representing Jerusalem, rendered in the style of a Late Gothic Netherlandish town.</p>

<p>The painting underwent significant conservation work. Christ had been painted over with a floor-length garment, and X-ray examination in 1983 revealed a donor family once occupied the foreground before being covered up. The <a href="/apps/masterpieces/museum/st228del-frankfurt-am-main-germany"><strong>Städel Museum</strong></a> in Frankfurt purchased the work at a 1917 auction and restored it to reveal Bosch's original vision, including Christ's simple loincloth.</p>`,
    faqs: [
      {
        question: "Where is Bosch's Ecce Homo displayed?",
        answer: "The painting is housed at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. It was purchased at the 1917 auction of the Richard von Kaufmann collection."
      },
      {
        question: "What does Ecce Homo mean?",
        answer: "\"Ecce Homo\" is Latin for \"Behold the Man.\" <strong>Pontius Pilate</strong> spoke these words when presenting the scourged Jesus to the crowd before his crucifixion."
      },
      {
        question: "What symbols appear in this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> included an owl and a giant toad, both considered <strong>symbols of evil</strong> in Christian art. Gothic inscriptions function like speech balloons showing the dialogue."
      },
      {
        question: "Was the painting altered over time?",
        answer: "Yes. Christ was covered with a long garment, and a <strong>donor family</strong> was painted over entirely. Conservation work and X-ray examination in 1983 revealed the original composition."
      }
    ]
  },
  {
    slug: 'gustave-moreau-hesiod-and-the-muse',
    description: `<p><a href="/apps/masterpieces/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> created this drawing in 1857 while in Rome, depicting the ancient Greek poet Hesiod receiving inspiration from a Muse. The work in chalk, pen, and ink shows Moreau's early fascination with classical subjects that would define his career as a leading <strong>Symbolist artist</strong>.</p>

<p>At Hesiod's feet rest a lyre and laurel branch, traditional symbols of poetic art and honor. According to ancient accounts, Hesiod was a shepherd tending his flocks on Mount Helicon when the Muses appeared and taught him to sing. His subsequent poems, including <strong>Theogony</strong> and Works and Days, became foundational texts of Greek literature.</p>

<p>Moreau would return to this subject multiple times throughout his life, creating versions in 1870 and 1891 that now hang in the Musée National Gustave Moreau and Musée d'Orsay. This 1857 drawing belongs to the <a href="/apps/masterpieces/museum/fogg-museum-harvard-art-museums-cambridge-ma-us"><strong>Fogg Museum</strong></a> at Harvard Art Museums in Cambridge, Massachusetts, having been bequeathed to the collection in 2011.</p>`,
    faqs: [
      {
        question: "Where can I see Hesiod and the Muse?",
        answer: "This 1857 version is at the <a href=\"/apps/masterpieces/museum/fogg-museum-harvard-art-museums-cambridge-ma-us\"><strong>Fogg Museum</strong></a> (Harvard Art Museums) in Cambridge, Massachusetts. Moreau painted other versions now in Paris museums."
      },
      {
        question: "Who was Hesiod?",
        answer: "<strong>Hesiod</strong> was an ancient Greek poet active around 700 BCE. He wrote Theogony and Works and Days, foundational texts explaining Greek mythology and rural life."
      },
      {
        question: "What art movement is Gustave Moreau associated with?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> was a leading French Symbolist painter. His work influenced younger artists including Henri Matisse, who studied in his studio."
      }
    ]
  },
  {
    slug: 'edwin-landseer-high-life',
    description: `<p><a href="/apps/masterpieces/artist/edwin-landseer"><strong>Edwin Landseer</strong></a> painted High Life in 1829 as one half of a deliberately contrasting pair. Its companion, Low Life, depicts a scrappy terrier on the doorstep of a butcher's shop. Here, a Scottish deerhound represents the aristocratic world of <strong>chivalry and refinement</strong>, sitting vigilantly beside his master's armchair.</p>

<p>The room furnishings tell the story of the absent owner: a large armchair, heavy curtains, a substantial table. Everything suggests wealth and status. The deerhound guards this property with quiet dignity, embodying the qualities Victorians associated with the <a href="https://luxurywallart.com/collections/dog-paintings" target="_blank" rel="noopener"><strong>noble classes</strong></a> and their faithful companions.</p>

<p>The pair was first exhibited in 1831 and acquired by Robert Vernon, who donated them to the nation in 1847. Both paintings now hang at <a href="/apps/masterpieces/museum/tate-modern-london-uk"><strong>Tate Britain</strong></a> in London. Landseer's ability to capture <strong>canine character</strong> while commenting on human society made him one of the most popular artists of the Victorian era.</p>`,
    faqs: [
      {
        question: "Where can I see High Life?",
        answer: "The painting is displayed at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Britain</strong></a> in London alongside its companion piece, Low Life. Both were donated to the nation in 1847."
      },
      {
        question: "What is the companion painting to High Life?",
        answer: "<strong>Low Life</strong> shows a scruffy terrier outside a butcher's shop. Together, the pair contrasts aristocratic and working-class dogs as representations of their absent owners."
      },
      {
        question: "What type of dog is shown in High Life?",
        answer: "A <strong>Scottish deerhound</strong> represents aristocratic society. <a href=\"/apps/masterpieces/artist/edwin-landseer\"><strong>Landseer</strong></a> chose this breed for its associations with nobility and the hunting traditions of the upper classes."
      },
      {
        question: "When was this painting created?",
        answer: "Landseer painted High Life in 1829. The pair was first exhibited at the British Institution in 1831 and became popular examples of his talent for <a href=\"https://luxurywallart.com/collections/dog-paintings\" target=\"_blank\" rel=\"noopener\"><strong>animal portraiture</strong></a>."
      }
    ]
  },
  {
    slug: 'arnold-bocklin-high-mountains-with-chamoises',
    description: `<p><a href="/apps/masterpieces/artist/arnold-bocklin"><strong>Arnold Böcklin</strong></a> painted this alpine landscape in 1849, early in his career before he became famous for mythological and symbolic works like The Isle of the Dead. The small oil painting measures just 33 by 41 centimeters and captures chamois, the sure-footed goat-antelopes native to European mountains, in their <strong>rocky habitat</strong>.</p>

<p>Böcklin was Swiss-born and spent significant time in the Alps, so mountain subjects came naturally to him. This work shows the influence of <strong>Romantic landscape</strong> painting with its emphasis on wild nature and dramatic terrain. The chamois appear almost incidental to the sweeping mountain scenery, tiny creatures dwarfed by geological forces.</p>

<p>The painting hangs at the <a href="/apps/masterpieces/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a> in Switzerland. While Böcklin would later turn to more fantastical subjects featuring mythical creatures and death imagery, this early <a href="https://luxurywallart.com/collections/mountain-art" target="_blank" rel="noopener"><strong>mountain landscape</strong></a> demonstrates his solid technical foundation and connection to his homeland.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: "High Mountains with Chamois hangs at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Basel, Switzerland. The museum has a significant collection of Böcklin's work."
      },
      {
        question: "What are chamois?",
        answer: "<strong>Chamois</strong> are goat-antelopes native to European mountains, known for their agility on steep terrain. They appear in this <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>alpine landscape</strong></a> as small figures amid rocky peaks."
      },
      {
        question: "What style is this painting?",
        answer: "The work reflects <strong>Romantic landscape</strong> traditions with its emphasis on wild, dramatic nature. <a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Böcklin</strong></a> later became known for symbolic and mythological subjects."
      }
    ]
  },
  {
    slug: 'john-william-godward-his-birthday-gift',
    description: `<p><a href="/apps/masterpieces/artist/john-william-godward"><strong>John William Godward</strong></a> painted this scene in 1889, depicting a dark-haired Greek maiden in a green tunic examining a new bracelet. The title suggests this jewelry is a birthday gift from a lover, and the woman's expression hints at <strong>mixed emotions</strong> about both the gift and the giver.</p>

<p>The composition includes more objects than typical for Godward's work of this period: an ornamental bronze table holding ointment jars, an animal fur on a tessellated floor, and various classical objects. This attention to <strong>archaeological detail</strong> shows Godward's concern for creating authentic ancient interiors, a characteristic he shared with his mentor Sir Lawrence Alma-Tadema.</p>

<p>Godward was part of the Neoclassicist movement that looked back to ancient Greece and Rome for subjects and settings. His career flourished during the late Victorian era but fell out of fashion with the rise of modernism. He reportedly left a suicide note in 1922 stating the world wasn't big enough for both him and Picasso. This painting, measuring about 50 by 25 centimeters, remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "Where is His Birthday Gift displayed?",
        answer: "The painting is in a <strong>private collection</strong>. It was sold at Christie's auction on October 29, 2020. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward's</strong></a> works regularly appear at major auction houses."
      },
      {
        question: "What style is this painting?",
        answer: "The work is <strong>Neoclassicist</strong>, depicting an idealized ancient Greek scene. Godward was influenced by Sir Lawrence Alma-Tadema and focused on classical subjects with archaeological accuracy."
      },
      {
        question: "What is shown in the painting?",
        answer: "A Greek <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> in green examines a bracelet, a birthday gift from her lover. Her expression suggests complicated feelings about the present or the relationship."
      },
      {
        question: "Who was John William Godward?",
        answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>John William Godward</strong></a> (1861-1922) was an English Neoclassicist painter. His career declined with modernism's rise, and he died by suicide at age 61."
      }
    ]
  },
  {
    slug: 'salvator-rosa-hl-wilhelm-von-maleval-als-b252223er',
    description: `<p><a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this penitent saint scene around the mid-1640s, depicting William of Maleval in the forested valley near Siena where he lived as a hermit. The medieval saint appears bound to a tree below a crucifix, wearing a suit of armor as he does penance for his past life as a soldier.</p>

<p>William of Maleval died in 1157 and became the founder of the Williamites, a monastic order. According to hagiography, he spent years in extreme <strong>ascetic practices</strong> in the wilderness before his death. Rosa captures this intensity, showing the saint in a tense, uncomfortable pose while quietly contemplating the cross above him.</p>

<p>Rosa produced several versions and prints of this subject, which proved popular enough that reproductions were being made well into the 18th century. This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, demonstrating Rosa's ability to combine <strong>dramatic landscapes</strong> with religious subjects in the Baroque tradition.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. Rosa created several versions of this religious subject during his career."
      },
      {
        question: "Who was Saint William of Maleval?",
        answer: "<strong>William of Maleval</strong> (died 1157) was a medieval hermit saint who founded the Williamite monastic order. He practiced extreme asceticism in a forested valley near Siena, Italy."
      },
      {
        question: "Why is the saint wearing armor?",
        answer: "William was a soldier before becoming a <strong>hermit</strong>. <a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Rosa</strong></a> shows him doing penance in his armor, symbolizing his past life and the spiritual battle of his conversion."
      }
    ]
  },
  {
    slug: 'otto-mueller-hockende-m228dchen',
    description: `<p><a href="/apps/masterpieces/artist/otto-mueller"><strong>Otto Mueller</strong></a> created this painting of crouching girls as part of his lifelong exploration of the female nude in natural settings. Mueller was a member of Die Brücke, the Dresden-based group of Expressionist artists that included Ernst Ludwig Kirchner and Erich Heckel. His style emphasized <strong>harmonious simplification</strong> of form, color, and contour.</p>

<p>Mueller preferred working in distemper on coarse canvas, which gave his paintings a distinctive matte surface. He greatly admired Egyptian art and sought to achieve similar clean, simple lines in his own work. His nickname "Gypsy Mueller" came from his frequent depictions of <strong>Romani women</strong> and possibly from his own heritage, as his mother may have been Romani.</p>

<p>The painting is now in a <strong>private collection</strong>. In 1937, the Nazis seized 357 of Mueller's works from German museums, declaring them "degenerate art." His focus on the unity between humans and nature, often expressed through <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>figures in landscapes</strong></a>, made his work particularly targeted by the regime's cultural policies.</p>`,
    faqs: [
      {
        question: "What art movement was Otto Mueller part of?",
        answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Otto Mueller</strong></a> joined Die Brücke in 1910, a German <strong>Expressionist</strong> group based in Dresden. He remained close with fellow members after the group dissolved in 1913."
      },
      {
        question: "Where is this painting located?",
        answer: "Hockende Mädchen is currently in a <strong>private collection</strong>. Many of Mueller's works were seized by the Nazis in 1937 as part of their campaign against modern art."
      },
      {
        question: "What subjects did Otto Mueller typically paint?",
        answer: "Mueller focused on <strong>female nudes</strong> and Romani women, earning him the nickname \"Gypsy Mueller.\" His work emphasized the harmony between humans and <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a>."
      }
    ]
  },
  {
    slug: 'andrea-del-sarto-holy-family',
    description: `<p><a href="/apps/masterpieces/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a> painted this Holy Family around 1529 for Ottaviano de' Medici, a central figure in Florentine political and cultural life. The commission came during the siege of Florence, and according to Vasari, del Sarto refused all other offers while Ottaviano was imprisoned, waiting faithfully until he could deliver the work to his original patron. Ottaviano responded by paying <strong>double the agreed price</strong>.</p>

<p>The composition forms a rough pyramid that tilts toward the left, with Saint John the Baptist cut off at the waist. Del Sarto's later style favors dull, calibrated colors: <strong>red, ash blue, burnt brown, and violet</strong>. Light enters from the left, enhancing the carefully draped clothing that demonstrates his mastery of drawing.</p>

<p>The painting first appeared in the Tribuna display in 1589 and moved to the <a href="/apps/masterpieces/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a> in Florence in 1635, where it remains today. Del Sarto died of plague in 1530 at just forty-four, making this one of his final works. He was known during his lifetime as the painter "without errors."</p>`,
    faqs: [
      {
        question: "Where can I see Andrea del Sarto's Holy Family?",
        answer: "The Medici Holy Family is displayed at the <a href=\"/apps/masterpieces/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a> in Florence, Italy, in the Galleria Palatina. It has been there since 1635."
      },
      {
        question: "Who commissioned this painting?",
        answer: "<strong>Ottaviano de' Medici</strong> commissioned the work around 1529. He paid double the agreed price after <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>del Sarto</strong></a> loyally waited to deliver it during the siege of Florence."
      },
      {
        question: "What colors dominate this painting?",
        answer: "Del Sarto used <strong>dull, calibrated tones</strong>: red, ash blue, burnt brown, and violet. This restrained palette was characteristic of his later work."
      },
      {
        question: "Why was Andrea del Sarto called 'the painter without errors'?",
        answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a> was known as \"senza errori\" for his technical perfection. He was considered one of the finest <strong>High Renaissance</strong> painters in Florence."
      }
    ]
  },
  {
    slug: 'pontormo-holy-family',
    description: `<p><a href="/apps/masterpieces/artist/pontormo"><strong>Pontormo</strong></a> painted this Holy Family around 1522-1525, departing significantly from traditional depictions of the subject. Instead of showing Mary holding the infant Jesus, Pontormo places the child in Joseph's hands, emphasizing his role as an <strong>adoptive paternal figure</strong>. This choice reflected a growing interest in Joseph's place within the Holy Family during the sixteenth century.</p>

<p>The composition removes the figures from any recognizable setting, placing them instead in a psychological void that would become characteristic of <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerism</strong></a>. The mysterious smiles of the figures show Leonardo da Vinci's influence, as does the use of chiaroscuro and sfumato. Yet the overall rhythm breaks from the harmony favored by Pontormo's earlier masters, inspired partly by <strong>Dürer's woodcuts</strong>.</p>

<p>Pontormo, along with Rosso Fiorentino and his student Bronzino, helped initiate the Mannerist movement in Florence. A preparatory drawing for this painting survives in the Uffizi's collection. The painting itself is currently in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What makes this Holy Family unusual?",
        answer: "Unlike traditional depictions, <a href=\"/apps/masterpieces/artist/pontormo\"><strong>Pontormo</strong></a> places baby Jesus in <strong>Joseph's arms</strong> rather than Mary's. This emphasized Joseph's role as adoptive father, reflecting 16th-century religious interests."
      },
      {
        question: "What art movement is Pontormo associated with?",
        answer: "Pontormo was one of the founders of <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, a style that departed from High Renaissance harmony. He worked alongside Rosso Fiorentino and trained the artist Bronzino."
      },
      {
        question: "Where is this painting located?",
        answer: "This Holy Family is in a <strong>private collection</strong>. Pontormo created several versions of the subject; another is at the Hermitage Museum in St. Petersburg."
      },
      {
        question: "What influences appear in this painting?",
        answer: "The work shows <strong>Leonardo da Vinci's</strong> influence in its sfumato and mysterious smiles. Pontormo was also inspired by Dürer's woodcuts in developing his novel compositional rhythm."
      }
    ]
  },
  {
    slug: 'bronzino-holy-family',
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> painted this Holy Family between 1527 and 1528, creating a tightly composed scene of two women, a man, and two children against a dark brown background. The figures all have pale skin with rosy cheeks, and each wears a delicate gold ring as a halo. Jesus sits on a stone at the center while the <strong>infant Saint John the Baptist</strong> looks directly at the viewer, pointing upward toward Christ.</p>

<p>The oil-on-panel work measures about 101 by 79 centimeters. Bronzino trained under Pontormo and absorbed his master's Mannerist style, though his own work tends toward cooler precision. The painting's attribution history reflects this connection: it was listed as a Pontormo in gallery catalogues as late as 1985 before being <strong>firmly attributed to Bronzino</strong>.</p>

<p>Bronzino would later become the official court painter to Cosimo I de' Medici, Grand Duke of Tuscany. This early work belongs to the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., as part of the Samuel H. Kress Collection acquired in 1939.</p>`,
    faqs: [
      {
        question: "Where can I see Bronzino's Holy Family?",
        answer: "The painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It's part of the Samuel H. Kress Collection, acquired in 1939."
      },
      {
        question: "Was this painting ever attributed to another artist?",
        answer: "Yes. It was listed as a <strong>Pontormo</strong> in catalogues until 1985. The confusion arose because <a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> trained under Pontormo and absorbed his Mannerist style."
      },
      {
        question: "What art movement does this represent?",
        answer: "The work is <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> (Late Renaissance). Bronzino developed his style under Pontormo before becoming court painter to Cosimo I de' Medici."
      },
      {
        question: "Who is the child pointing at the viewer?",
        answer: "The <strong>infant Saint John the Baptist</strong> looks at the viewer while pointing toward Jesus. This gesture directs attention to Christ's significance as Savior."
      }
    ]
  }
];

async function updateArtworks() {
  console.log('Starting artwork enrichment...\n');

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
