const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // === ALLEGORY ARTWORKS ===
  {
    slug: 'juan-de-valdes-leal-allegory-of-death-in-ictu-oculi',
    description: `<p><a href="/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted this large vanitas work between 1670 and 1672 for the Hospital de la Caridad in Seville. The title, meaning "in the blink of an eye," comes from the Latin translation of Corinthians 15:52. A skeletal figure of Death extinguishes a candle with one hand while holding a coffin under his arm, trampling a celestial sphere underfoot.</p>
<p>The painting forms a pair with Finis Gloriae Mundi, which depicts rotting corpses of a bishop and knight in a crypt. Together they served as powerful <a href="https://luxurywallart.com/collections/macabre-art" target="_blank" rel="noopener"><strong>memento mori</strong></a> for the Brotherhood of Charity who ran the hospital. Valdés Leal called these works "hieroglyphs of our afterlife." Scattered around Death are symbols of earthly vanity: a papal tiara, royal robes, jewels, books, and weapons.</p>
<p>The canvas measures 216 by 220 centimeters. Valdés Leal's style favors feverish energy and dramatic lighting over the serene approach of his friend and colleague Murillo. Both artists founded Seville's Academy of Art in 1656. The painting remains in its original location at the <strong>Hospital de la Caridad</strong> in Seville.</p>`,
    faqs: [
      { question: "Where can I see In Ictu Oculi?", answer: "The painting remains at its original location in the <strong>Hospital de la Caridad</strong> in Seville, Spain. It hangs alongside its companion piece, Finis Gloriae Mundi." },
      { question: "What does In Ictu Oculi mean?", answer: "The Latin phrase means \"in the blink of an eye,\" referring to how quickly death can arrive. It comes from Corinthians 15:52 and emphasizes life's brevity." },
      { question: "How big is this painting?", answer: "The canvas measures 216 by 220 centimeters (about 85 by 87 inches). <a href=\"/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> completed it between 1670 and 1672." },
      { question: "What style is this painting?", answer: "It's a Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a> vanitas work with dramatic lighting and <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre</strong></a> subject matter typical of Counter-Reformation art." }
    ]
  },
  {
    slug: 'pietro-da-cortona-allegory-of-divine-providence-and-barberini-power',
    description: `<p><a href="/artist/pietro-da-cortona"><strong>Pietro da Cortona</strong></a> created this massive ceiling fresco in the grand salon of Palazzo Barberini between 1633 and 1639. The work measures approximately 20 by 14 meters, making it one of the largest ceiling paintings of the <a href="/movement/baroque"><strong>Baroque</strong></a> era. Pope Urban VIII, born Maffeo Barberini, commissioned it to glorify his family and pontificate.</p>
<p>At the center sits Divine Providence surrounded by allegorical figures representing virtues of good governance: Justice, Mercy, Wisdom, and Power. The composition teems with <strong>golden bees</strong>, the Barberini family emblem symbolizing industry and immortality. Putti carry papal keys and tiara while giant bees swarm through a painted sky. The ceiling appears to dissolve into open heavens through masterful use of quadratura, the technique of forced perspective.</p>
<p>When unveiled, Pope Urban compared it to Raphael's Vatican Stanzas. The <a href="/museum/palazzo-barberini"><strong>Palazzo Barberini</strong></a>, now part of Italy's Galleria Nazionale d'Arte Antica, houses the fresco in its original location. Cortona's revolutionary approach influenced ceiling painting across Europe for generations.</p>`,
    faqs: [
      { question: "Where can I see this ceiling fresco?", answer: "The fresco fills the grand salon ceiling at <a href=\"/museum/palazzo-barberini\"><strong>Palazzo Barberini</strong></a> in Rome, now part of the Galleria Nazionale d'Arte Antica." },
      { question: "How large is Pietro da Cortona's ceiling?", answer: "The fresco measures approximately 20 by 14 meters (66 by 46 feet). <a href=\"/artist/pietro-da-cortona\"><strong>Cortona</strong></a> worked on it from 1633 to 1639." },
      { question: "What do the bees symbolize?", answer: "The <strong>golden bees</strong> are the Barberini family emblem. In classical symbology, bees represent industry, harmony, and immortality." },
      { question: "What is quadratura?", answer: "Quadratura is a painting technique that simulates architecture and creates illusions of depth. <a href=\"/artist/pietro-da-cortona\"><strong>Cortona</strong></a> used it to make the ceiling appear to open into infinite sky." }
    ]
  },
  {
    slug: 'dosso-dossi-allegory-of-music',
    description: `<p><a href="/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> painted this allegorical work in the 1530s for the court of Alfonso I d'Este in Ferrara. The complex composition shows a male figure representing Tubalcain, the biblical inventor of metalworking who forged musical notes by striking an anvil. Two women beside him personify <strong>Sacred and Profane Music</strong>.</p>
<p>The visible musical scores appear to reference compositions by the Flemish composer Adrien Willaert, who worked at the Este court around 1515. The painting's iconography has puzzled scholars for decades, with various interpretations proposed for the symbolic arrangement. Oil on canvas, the work measures 196 by 187 centimeters.</p>
<p>The painting passed through the Borghese family, who listed it as a Giorgione in their 1693 inventory. Architect and art historian Herbert Horne purchased it in Florence in 1912 for 2000 lira. It now hangs at the <a href="/museum/museo-horne"><strong>Museo Horne</strong></a> in Florence, restored in 1993. Roberto Longhi correctly reattributed it to Dosso's mature phase.</p>`,
    faqs: [
      { question: "Where is the Allegory of Music displayed?", answer: "The painting hangs at the <a href=\"/museum/museo-horne\"><strong>Museo Horne</strong></a> in Florence, Italy. Herbert Horne acquired it in 1912." },
      { question: "Who commissioned this painting?", answer: "It was painted for the court of Alfonso I d'Este in Ferrara. <a href=\"/artist/dosso-dossi\"><strong>Dosso Dossi</strong></a> created it in the 1530s." },
      { question: "What does the painting depict?", answer: "The male figure represents <strong>Tubalcain</strong>, the biblical inventor of metalworking. The two women personify Sacred and Profane Music." },
      { question: "How large is this painting?", answer: "The canvas measures 196 by 187 centimeters (about 77 by 74 inches). It was restored in 1993." }
    ]
  },
  {
    slug: 'gustav-klimt-allegory-of-sculpture',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this watercolor drawing in 1889 for the "Allegories and Emblems" portfolio published by Martin Gerlach. The work shows a nude female figure personifying sculpture, adorned with Hellenistic hair ornaments, a snake bracelet, earrings, and a delicate <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> necklace.</p>
<p>Klimt was just 27 when he made this drawing, still working with his brother Ernst and friend Franz Matsch as the "Company of Artists." They had received commissions for interior murals in large public buildings on Vienna's Ringstraße. This allegorical work belongs to his early academic period, before the decorative <a href="/movement/art-nouveau"><strong>Art Nouveau</strong></a> style that would make him famous.</p>
<p>The drawing measures 43.5 by 30 centimeters in pencil and watercolor on cardboard. It's housed at the <a href="/museum/museum-of-applied-arts-vienna"><strong>Museum of Applied Arts (MAK)</strong></a> in Vienna. A preliminary drawing for this work is held at the Albertina Museum, donated by the art trade in gratitude for the museum's scholarly assistance on Klimt research.</p>`,
    faqs: [
      { question: "Where is Klimt's Allegory of Sculpture?", answer: "The watercolor is at the <a href=\"/museum/museum-of-applied-arts-vienna\"><strong>Museum of Applied Arts (MAK)</strong></a> in Vienna. A preparatory drawing is at the Albertina." },
      { question: "When did Klimt create this work?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> made it in 1889 at age 27, as part of the \"Allegories and Emblems\" portfolio by Martin Gerlach." },
      { question: "What size is this drawing?", answer: "The work measures 43.5 by 30 centimeters (about 17 by 12 inches) in pencil and watercolor on cardboard." },
      { question: "What style is this early Klimt work?", answer: "It's from his early academic period, showing <a href=\"/movement/art-nouveau\"><strong>Art Nouveau</strong></a> tendencies before his more famous decorative style developed." }
    ]
  },
  {
    slug: 'jusepe-de-ribera-allegory-of-taste',
    description: `<p><a href="/artist/jusepe-de-ribera"><strong>Jusepe de Ribera</strong></a> painted this around 1615 in Rome as part of his Five Senses series. A figure examines or tastes something, rendered with the dramatic chiaroscuro that earned Ribera the nickname "Lo Spagnoletto" (the Little Spaniard). The painting measures 113.5 by 87.5 centimeters in oil on canvas.</p>
<p>Ribera's contemporary Giulio Mancini praised the series for its "esquisitissima bellezza" (most exquisite beauty). The Five Senses represents some of Ribera's earliest surviving work, documenting his stylistic evolution from Roman <a href="/movement/baroque"><strong>tenebrism</strong></a> to the intensified psychological depth of his later Neapolitan phase. His approach combined live models, dramatic lighting, and theatrical gestures.</p>
<p>The series is now scattered across museums and private collections. Allegory of Taste resides at the <a href="/museum/wadsworth-atheneum"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, one of America's oldest public art museums. Ribera, along with Velázquez, Zurbarán, and Murillo, ranks among the major artists of Spain's Golden Age.</p>`,
    faqs: [
      { question: "Where is Ribera's Allegory of Taste?", answer: "The painting hangs at the <a href=\"/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut, one of America's oldest public art museums." },
      { question: "What series does this painting belong to?", answer: "It's part of <a href=\"/artist/jusepe-de-ribera\"><strong>Ribera's</strong></a> Five Senses series from around 1615. The surviving works are now in different collections worldwide." },
      { question: "What style is this painting?", answer: "It's painted in the <a href=\"/movement/baroque\"><strong>Tenebrism</strong></a> style with dramatic chiaroscuro lighting. <a href=\"/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> developed his approach while working in Rome." },
      { question: "How big is this painting?", answer: "The canvas measures 113.5 by 87.5 centimeters (about 45 by 34 inches). <a href=\"/artist/jusepe-de-ribera\"><strong>Ribera</strong></a> created it around 1615." }
    ]
  },
  {
    slug: 'johannes-vermeer-allegory-of-the-catholic-faith',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this allegory around 1670-1672, drawing on Cesare Ripa's emblem book Iconologia for its complex symbolism. A woman representing the Catholic Church places one foot on a globe while a cornerstone crushes a serpent of evil. A chalice, missal, and crucifix on the table reference the celebration of Mass.</p>
<p>The painting held personal significance for Vermeer. He converted to Catholicism before marrying Catharina Bolenes, daughter of a prominent Catholic family connected to a "hidden church" in Delft. Public celebration of Mass was forbidden in the Dutch Republic, though the Dutch were more tolerant than some Protestant countries. The Crucifixion scene in the background copies a painting by Jacob Jordaens that Vermeer owned.</p>
<p>Art historian Bredius dismissed the work in 1907 as "a large but unpleasant Vermeer." It sold through various hands before Michael Friedsam bequeathed it to the <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in 1931. This and Art of Painting are Vermeer's only works that qualify as history paintings.</p>`,
    faqs: [
      { question: "Where is Vermeer's Allegory of Faith?", answer: "The painting hangs at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York, bequeathed by Michael Friedsam in 1931." },
      { question: "Why did Vermeer paint this subject?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> converted to Catholicism to marry his wife. The painting may reference \"hidden churches\" where Catholics worshipped during the Dutch Republic's ban on Mass." },
      { question: "What book inspired this painting?", answer: "Vermeer drew heavily from Cesare Ripa's <strong>Iconologia</strong>, an emblem book translated into Dutch in 1644, for the painting's symbolism." },
      { question: "How does this compare to other Vermeers?", answer: "This and Art of Painting are <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> only history paintings. Most of his work depicts domestic interiors without allegorical content." }
    ]
  },
  {
    slug: 'peter-paul-rubens-allegory-on-emperor-charles-as-ruler-of-vast-realm',
    description: `<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted this allegorical portrait around 1604, depicting Emperor Charles V as ruler of vast territories. Charles sits upon his throne in ornate armor and a luxurious <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> robe, holding a scepter in his right hand. His left hand rests upon a globe presented by a young nude figure, likely Cupid, symbolizing his worldwide dominion.</p>
<p>The composition uses dramatic chiaroscuro to illuminate Charles while shrouding the background in cloudy darkness. Allegorical figures representing different territories of his empire surround him. The imperial crown, sword, and cross emphasize his power and authority. This <a href="/movement/baroque"><strong>Flemish Baroque</strong></a> work showcases Rubens' ability to combine portraiture with political allegory.</p>
<p>The canvas measures 167 by 141 centimeters and hangs at the <a href="/museum/residenzgalerie"><strong>Residenzgalerie</strong></a> in Salzburg, Austria. Rubens painted it early in his career, around the time he was working in Italy absorbing influences from Caravaggio and Venetian masters.</p>`,
    faqs: [
      { question: "Where is this Rubens painting displayed?", answer: "The painting hangs at the <a href=\"/museum/residenzgalerie\"><strong>Residenzgalerie</strong></a> in Salzburg, Austria." },
      { question: "When did Rubens paint this?", answer: "<a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> created this work around 1604, early in his career while absorbing Italian influences." },
      { question: "What does the globe symbolize?", answer: "The globe represents Charles V's worldwide dominion. <a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> shows Cupid presenting it to emphasize the emperor's vast territorial power." },
      { question: "How big is this painting?", answer: "The canvas measures 167 by 141 centimeters (about 66 by 56 inches). It's a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> allegorical portrait." }
    ]
  },
  {
    slug: 'johannes-vermeer-allegory-on-faith',
    description: `<p>This is an alternate title for <a href="/artist/johannes-vermeer"><strong>Vermeer's</strong></a> Allegory of the Catholic Faith, painted around 1670-1672. The work depicts a woman personifying Faith with her foot on a terrestrial globe, surrounded by Catholic liturgical objects. A cornerstone crushes a serpent in the foreground, symbolizing the Church's triumph over evil.</p>
<p>Vermeer based his iconography largely on Cesare Ripa's Iconologia, using symbols Ripa described for allegorical figures of Faith. The woman's clothing colors, hand gesture, and the presence of the crushed snake all derive from this emblem book. The work stands apart from Vermeer's typical domestic scenes.</p>
<p>The painting measures 114.3 by 88.9 centimeters in oil on canvas. It's displayed at the <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York, where it arrived as part of the Friedsam Collection in 1931. Some critics consider it overly programmatic compared to Vermeer's more subtle interior scenes.</p>`,
    faqs: [
      { question: "Is this the same as Allegory of the Catholic Faith?", answer: "Yes, Allegory on Faith is an alternate title for the same painting. Both refer to <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> work at the Metropolitan Museum." },
      { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York City, part of the Friedsam Collection since 1931." },
      { question: "What size is the painting?", answer: "The canvas measures 114.3 by 88.9 centimeters (about 45 by 35 inches). <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> painted it around 1670-1672." },
      { question: "What makes this Vermeer unusual?", answer: "It's one of only two history paintings by <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a>. Most of his work depicts intimate domestic scenes without explicit allegory." }
    ]
  },

  // === ALLIANCE TO AMOR ===
  {
    slug: 'albrecht-durer-alliance-coat-of-arms',
    description: `<p><a href="/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted this alliance coat of arms in 1490, creating the reverse side of his first portrait of his father. The work combines the family emblems of the Dürer and Holper families in a "speaking" coat of arms design. An open door on the left panel references the family name: "Dürer" derives from "Türer" (doormaker), a German translation of "Ajtó" (door) from the family's Hungarian origins near Gyula.</p>
<p>The oil on panel measures 47 by 39 centimeters. Unlike Dürer's religious works or portraits, this heraldic painting showcases his meticulous attention to fine decorative details. The <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> artist would later become famous for his engravings and paintings, but this early work demonstrates his versatility.</p>
<p>The painting now hangs at the <a href="/museum/uffizi-gallery"><strong>Uffizi Gallery</strong></a> in Florence, Italy. A later woodcut version from 1523 depicts the same heraldic design. This remains one of Dürer's most atypical works, a timeless symbol of family lineage rather than a narrative or devotional image.</p>`,
    faqs: [
      { question: "Where is Dürer's Alliance Coat of Arms?", answer: "The painting hangs at the <a href=\"/museum/uffizi-gallery\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It dates from 1490." },
      { question: "What does the open door symbolize?", answer: "The door represents the Dürer family name. \"Dürer\" comes from \"Türer\" (doormaker), derived from the Hungarian word for door, reflecting their origins near Gyula." },
      { question: "What is this painting's original context?", answer: "It forms the reverse of <a href=\"/artist/albrecht-durer\"><strong>Dürer's</strong></a> first portrait of his father, combining the Dürer and Holper family coats of arms." },
      { question: "How big is this painting?", answer: "The oil on panel measures 47 by 39 centimeters (about 18.5 by 15 inches). <a href=\"/artist/albrecht-durer\"><strong>Dürer</strong></a> also made a woodcut version in 1523." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-alpine-landscape',
    description: `<p>This <strong>Alpine Landscape</strong> drawing was long attributed to <a href="/artist/pieter-bruegel-the-elder"><strong>Pieter Bruegel the Elder</strong></a>, though its authorship remains debated. The work depicts dramatic mountain scenery in brown ink over black chalk on cream laid paper. Scholars have variously attributed it to Bruegel, Roelant Savery, Jacob Savery, or an unidentified "Master of the Mountain Landscapes."</p>
<p>In 1986, scholar Mielke exposed several similar drawings as later works, not Bruegel originals. A 2001 Metropolitan Museum exhibition showed related drawings under the anonymous master designation. No scholarly consensus has emerged. The Harvard Art Museums now attribute their version to Roelant Savery.</p>
<p>The drawing was exhibited at "A Thousand Years of Landscape East and West" at the <a href="/museum/museum-of-fine-arts-boston"><strong>Museum of Fine Arts, Boston</strong></a> in 1945, then listed as Bruegel. Related mountain landscape drawings exist at Bowdoin College, the Morgan Library, and other collections. The attribution controversy reflects ongoing challenges in authenticating <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> drawings.</p>`,
    faqs: [
      { question: "Who actually painted this Alpine Landscape?", answer: "The attribution remains disputed. Scholars have proposed <a href=\"/artist/pieter-bruegel-the-elder\"><strong>Bruegel</strong></a>, Roelant Savery, Jacob Savery, or an anonymous \"Master of the Mountain Landscapes.\"" },
      { question: "Where can I see this drawing?", answer: "Various Alpine Landscape drawings are at the <a href=\"/museum/museum-of-fine-arts-boston\"><strong>Museum of Fine Arts, Boston</strong></a>, Harvard Art Museums, Bowdoin College, and the Morgan Library." },
      { question: "What medium is this work?", answer: "It's executed in brown ink over black chalk on cream antique laid paper. Some versions have later additions of wash." },
      { question: "When was this created?", answer: "If by <a href=\"/artist/pieter-bruegel-the-elder\"><strong>Bruegel</strong></a>, around 1555-1556. If by later artists, possibly 1580-1630. The dating depends on attribution." }
    ]
  },
  {
    slug: 'edgar-degas-amateur-jockey',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted The Racecourse, Amateur Jockeys around 1880, one of many works exploring his fascination with <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse racing</strong></a>. The oil on canvas measures 66 by 81 centimeters and depicts jockeys near a carriage at a French racecourse. The French title is "Le Champ de courses. Jockeys amateurs près d'une voiture."</p>
<p>Degas attended races at Longchamp and other Parisian tracks throughout the 1860s and 1870s, filling sketchbooks with studies of horses and riders. His racing paintings capture moments before or after races rather than the competition itself, focusing on preparation, tension, and the aristocratic social scene. The cropped compositions and unusual angles reflect his interest in photography and Japanese prints.</p>
<p>This particular version is typically associated with the Musée d'Orsay in Paris. Degas created numerous horse racing works throughout his career, including "At the Races," "Before the Race," and "The Jockey." His <a href="/movement/impressionism"><strong>Impressionist</strong></a> approach to capturing movement influenced how artists depicted sports and leisure.</p>`,
    faqs: [
      { question: "Where is Degas' Amateur Jockeys painting?", answer: "The version known as \"The Racecourse, Amateur Jockeys\" is typically at the Musée d'Orsay in Paris. <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> painted multiple horse racing scenes." },
      { question: "What size is this painting?", answer: "The canvas measures 66 by 81 centimeters (about 26 by 32 inches). <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> completed it around 1880." },
      { question: "Why did Degas paint horse racing?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> frequented Parisian racetracks throughout the 1860s-70s. He was drawn to the movement, light, and aristocratic social scene of <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horse racing</strong></a>." },
      { question: "What style is this painting?", answer: "It's an <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> work with cropped compositions and unusual angles influenced by photography and Japanese prints." }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-ambassadors-sent-by-agamemnon-to-urge-achilles-to-',
    description: `<p><a href="/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted this Prix de Rome winning work in 1801, depicting a scene from Homer's Iliad. Achilles refuses to listen to envoys sent by Agamemnon, who are trying to convince him back into the Trojan War. The topic assigned for that year's competition was warriors processing toward battle, but Ingres characteristically chose a moment of psychological drama over physical action.</p>
<p>The muscular envoys on the right follow the style taught by Jacques-Louis David, Ingres' teacher. But Achilles and Patroclus on the left appear more graceful, like figures from a delicate bas-relief. The work measures 155 by 110 centimeters in oil on canvas. Odysseus is shown in a <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> cloak derived from classical sculpture.</p>
<p>Winning the Prix de Rome entitled Ingres to four years at the French Academy in Rome, though shortage of state funds delayed his residence until 1806. The painting now hangs at the <a href="/museum/ecole-des-beaux-arts"><strong>École nationale supérieure des Beaux-Arts</strong></a> in Paris. A preparatory sketch exists at the Nationalmuseum of Sweden.</p>`,
    faqs: [
      { question: "Where is this Ingres painting displayed?", answer: "It hangs at the <a href=\"/museum/ecole-des-beaux-arts\"><strong>École nationale supérieure des Beaux-Arts</strong></a> in Paris, where it has remained since <a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> won the Prix de Rome in 1801." },
      { question: "What is the Prix de Rome?", answer: "It was the highest prize of the French Academy, entitling winners to four years at the French Academy in Rome. <a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> won in 1801 but didn't travel until 1806 due to funding shortages." },
      { question: "What scene does this painting show?", answer: "It depicts ambassadors from Agamemnon trying to convince Achilles to rejoin the Trojan War. The scene comes from Homer's Iliad." },
      { question: "What size is this painting?", answer: "The canvas measures 155 by 110 centimeters (about 61 by 43 inches). It's painted in the <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> style of David's school." }
    ]
  },
  {
    slug: 'parmigianino-amor-carving-his-bow',
    description: `<p><a href="/artist/parmigianino"><strong>Parmigianino</strong></a> painted this elegant Cupid between 1533 and 1535 for his friend and patron Francesco Baiardo in Parma. The work shows a nude Cupid carving his bow, a subject drawn from classical literature. Giorgio Vasari recorded the commission as "Cupido che fabbrica di sua mano un arco." The oil on panel measures 135.5 by 65 centimeters.</p>
<p>The painting's provenance reads like a spy novel. After Baiardo's death, it passed to Marcantonio Cavalca, then to Antonio Pérez, secretary of state to Philip II of Spain. When Pérez fell from royal favor in 1579, he tried selling to Emperor Rudolf II's envoy. The Spanish crown blocked the sale until 1603, when it finally reached Prague along with two Correggio paintings.</p>
<p>The work transferred to Vienna's Schatzkammer in 1631 and now hangs at the <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a>. Artists frequently copied it, including Joseph Heintz the Elder and Rubens, whose versions are at Munich's Alte Pinakothek. A preparatory drawing for Cupid's head is in the Louvre.</p>`,
    faqs: [
      { question: "Where is Parmigianino's Cupid Making His Bow?", answer: "The painting hangs at the <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. It arrived via Prague after a complex provenance." },
      { question: "Who commissioned this painting?", answer: "Francesco Baiardo, a friend and patron of <a href=\"/artist/parmigianino\"><strong>Parmigianino</strong></a>, commissioned it in Parma between 1533 and 1535." },
      { question: "What size is this painting?", answer: "The oil on panel measures 135.5 by 65 centimeters (about 53 by 26 inches). It depicts Cupid carving his bow." },
      { question: "Were there copies made?", answer: "Yes, Joseph Heintz the Elder and Rubens both made copies, now at Munich's Alte Pinakothek. A preparatory drawing is in the Louvre." }
    ]
  },

  // === AMSTERDAM TO AN ARAB ===
  {
    slug: 'max-liebermann-amsterdam-orphanage',
    description: `<p><a href="/artist/max-liebermann"><strong>Max Liebermann</strong></a> first encountered the Amsterdam Orphanage on the Kalverstraat in 1876 during a trip from Haarlem. The sunlit courtyard filled with girls in their distinctive red-and-black uniforms captivated him. With help from his friend the etcher William Unger, he secured permission to paint there, an unusual arrangement that surprised fellow artists unaccustomed to plein air work in such settings.</p>
<p>This early work from 1876 belongs to Liebermann's realist period, before his shift toward <a href="/movement/impressionism"><strong>Impressionism</strong></a>. Conservative critics taunted him as the "apostle of ugliness" for his unidealized depictions of working people. The painting now resides at the <a href="/museum/staatliche-museen-zu-berlin"><strong>Staatliche Museen zu Berlin</strong></a>.</p>
<p>Liebermann returned to the orphanage subject multiple times, creating his most celebrated version, "Recreation Time in the Amsterdam Orphanage," in 1881-82. That larger work marked a turning point toward brighter Impressionist colors and is now at the Städel Museum in Frankfurt.</p>`,
    faqs: [
      { question: "Where is Liebermann's Amsterdam Orphanage painting?", answer: "The 1876 version is at the <a href=\"/museum/staatliche-museen-zu-berlin\"><strong>Staatliche Museen zu Berlin</strong></a>. Later versions are at the Städel and other museums." },
      { question: "What drew Liebermann to this subject?", answer: "The sunlit courtyard and girls in distinctive uniforms fascinated <a href=\"/artist/max-liebermann\"><strong>Liebermann</strong></a> during an 1876 trip. He secured rare permission to paint there." },
      { question: "How many orphanage paintings did Liebermann make?", answer: "<a href=\"/artist/max-liebermann\"><strong>Liebermann</strong></a> painted the subject several times from 1876 to the 1890s. The largest versions are at the Städel, Kunsthalle Hamburg, and Strasbourg museum." },
      { question: "What style are these paintings?", answer: "The early works are Realist; later versions show his transition to <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> with brighter colors and attention to light effects." }
    ]
  },
  {
    slug: 'max-liebermann-amsterdam-orphans-in-the-garden',
    description: `<p><a href="/artist/max-liebermann"><strong>Max Liebermann</strong></a> painted this garden scene at the Amsterdam Orphanage around 1885, part of his extended engagement with this subject. The work shows orphan girls in the courtyard garden, wearing their characteristic red-and-black uniforms. It hangs at the <a href="/museum/kunsthalle-hamburg"><strong>Kunsthalle Hamburg</strong></a>.</p>
<p>This version demonstrates Liebermann's evolution toward <a href="/movement/impressionism"><strong>Impressionism</strong></a>. Compare it to his 1876 painting at the same location: the later work shows brighter colors, looser brushwork, and greater attention to how light filters through foliage. The complementary palette of spring <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> trees and <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> uniforms creates visual harmony.</p>
<p>Liebermann's orphanage paintings earned critical success across Europe. "Recreation Time in the Amsterdam Orphanage" won praise at the 1882 Paris Salon and established his reputation. He became a leading figure of German Impressionism and later served as president of the Berlin Secession.</p>`,
    faqs: [
      { question: "Where is this orphanage painting?", answer: "This version hangs at the <a href=\"/museum/kunsthalle-hamburg\"><strong>Kunsthalle Hamburg</strong></a> in Germany." },
      { question: "How does this differ from earlier versions?", answer: "The later work shows <a href=\"/artist/max-liebermann\"><strong>Liebermann's</strong></a> shift toward <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> with brighter colors, looser brushwork, and greater attention to light." },
      { question: "What colors dominate the painting?", answer: "The complementary palette features spring <a href=\"https://luxurywallart.com/collections/green-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>green</strong></a> foliage against the orphans' <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>red-and-black</strong></a> uniforms." },
      { question: "When was this painted?", answer: "<a href=\"/artist/max-liebermann\"><strong>Liebermann</strong></a> created this version around 1885, nearly a decade after his first orphanage paintings." }
    ]
  },
  {
    slug: 'matthias-grunewald-an-apostle-from-the-transfiguration',
    description: `<p><a href="/artist/matthias-grunewald"><strong>Matthias Grünewald</strong></a> painted this figure as part of a larger Transfiguration composition, likely an altarpiece wing. The work shows an apostle in dramatic pose, characteristic of Grünewald's intensely expressive style. He was a contemporary of Dürer but pursued a very different artistic vision, favoring emotional intensity over technical precision.</p>
<p>Grünewald remains one of the most distinctive voices of the German <a href="/movement/northern-renaissance"><strong>Renaissance</strong></a>. His masterpiece, the Isenheim Altarpiece, displays the same fervent spirituality seen in this fragment. Very few of his works survive, making each piece significant for understanding his achievement.</p>
<p>The painting now resides at the <a href="/museum/staatliche-kunsthalle-karlsruhe"><strong>Staatliche Kunsthalle Karlsruhe</strong></a> in Germany. Grünewald's reputation declined after his death and wasn't revived until the early 20th century, when Expressionist artists recognized him as a kindred spirit.</p>`,
    faqs: [
      { question: "Where is this Grünewald painting?", answer: "The fragment hangs at the <a href=\"/museum/staatliche-kunsthalle-karlsruhe\"><strong>Staatliche Kunsthalle Karlsruhe</strong></a> in Germany." },
      { question: "What larger work was this part of?", answer: "It was likely part of a Transfiguration altarpiece. <a href=\"/artist/matthias-grunewald\"><strong>Grünewald's</strong></a> works are rare, and many exist only as fragments." },
      { question: "How does Grünewald compare to Dürer?", answer: "Both were German <a href=\"/movement/northern-renaissance\"><strong>Renaissance</strong></a> masters, but <a href=\"/artist/matthias-grunewald\"><strong>Grünewald</strong></a> favored emotional intensity while Dürer emphasized technical precision." },
      { question: "When was Grünewald rediscovered?", answer: "His reputation revived in the early 20th century when Expressionist artists recognized him as a predecessor. His Isenheim Altarpiece particularly influenced modern art." }
    ]
  },
  {
    slug: 'joaquin-sorolla-an-arab-examining-a-pistol',
    description: `<p><a href="/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this Orientalist scene showing an Arab figure carefully examining a pistol. The Spanish artist was known primarily for luminous beach scenes, but like many European painters of his era, he also explored exotic subjects inspired by North African culture and the Romantic fascination with the East.</p>
<p>The painting demonstrates Sorolla's mastery of light and his ability to capture fabric textures and reflective surfaces. His brushwork conveys both the sheen of metal and the richness of textiles. The work belongs to the Orientalist tradition that flourished in 19th-century European art.</p>
<p>This painting is held in a <strong>Private Collection</strong>. Sorolla's fame rests mainly on his sun-drenched Mediterranean scenes, but his Orientalist works reveal his versatility and command of diverse subject matter. He studied the Old Masters and absorbed influences from <a href="/movement/impressionism"><strong>Impressionism</strong></a> during his European travels.</p>`,
    faqs: [
      { question: "Where is this Sorolla painting?", answer: "The painting is in a <strong>Private Collection</strong> and not publicly displayed." },
      { question: "What is Orientalism in art?", answer: "Orientalism was a 19th-century European art movement depicting Middle Eastern and North African subjects. <a href=\"/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> occasionally worked in this style." },
      { question: "What is Sorolla best known for?", answer: "<a href=\"/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> is famous for luminous Mediterranean beach scenes. This Orientalist work shows his range beyond his signature subjects." },
      { question: "What style influenced Sorolla?", answer: "He absorbed <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> during European travels while maintaining Spanish traditions. His handling of light was particularly admired." }
    ]
  },

  // === AN ARCHED TO AN OLD WOMAN (8 pieces) ===
  {
    slug: 'rembrandt-an-arched-landscape-with-a-flock-of-sheep',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> rarely painted pure landscapes, making this work particularly noteworthy. The composition shows a pastoral scene with sheep grazing beneath an arched formation, possibly a bridge or natural rock structure. Atmospheric effects and rich tonal variations demonstrate his mastery of light even in landscape subjects.</p>
<p>The painting belongs to the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London. Rembrandt created relatively few landscapes during his career, preferring portraits, biblical scenes, and self-portraits. When he did tackle <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, he brought the same psychological depth and atmospheric sensitivity found in his other work.</p>
<p>Dutch Golden Age painters often specialized in specific genres, but Rembrandt's genius crossed categories. His landscape etchings are celebrated, and this painted example shows his ability to infuse even rural scenes with drama and mood.</p>`,
    faqs: [
      { question: "Where is this Rembrandt landscape?", answer: "The painting is at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
      { question: "Did Rembrandt paint many landscapes?", answer: "No, <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> rarely painted pure <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. He preferred portraits and biblical subjects, making this work relatively unusual." },
      { question: "What makes this landscape distinctive?", answer: "It shows <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> atmospheric mastery and tonal richness applied to a pastoral subject. The arched formation creates compositional drama." },
      { question: "What period is this from?", answer: "It's from the <a href=\"/movement/baroque\"><strong>Dutch Golden Age</strong></a>, when landscape painting flourished as a specialty genre among Dutch artists." }
    ]
  },
  {
    slug: 'leon-bonnat-an-egyptian-peasant-woman-and-her-child',
    description: `<p><a href="/artist/leon-bonnat"><strong>Léon Bonnat</strong></a> painted this tender subject showing an Egyptian mother with her child, part of his interest in Orientalist themes. Bonnat was primarily a portrait painter who became one of the most sought-after artists in late 19th-century France, painting presidents, aristocrats, and cultural figures. His academic style combined careful draftsmanship with warm flesh tones.</p>
<p>The painting demonstrates Bonnat's ability to bring dignity to humble subjects while maintaining the academic polish expected of Salon painting. <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Women</strong></a> and children from exotic locales were popular subjects in 19th-century French art.</p>
<p>The work is now at the <a href="/museum/metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> in New York. Bonnat's influence extended through his teaching; his studio trained many prominent artists including Toulouse-Lautrec, Braque, and Dufy.</p>`,
    faqs: [
      { question: "Where is this Bonnat painting?", answer: "The painting hangs at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York." },
      { question: "What was Bonnat best known for?", answer: "<a href=\"/artist/leon-bonnat\"><strong>Bonnat</strong></a> was primarily a portrait painter of the French elite. His Orientalist works represent a smaller part of his output." },
      { question: "What style is this painting?", answer: "It's academic <a href=\"/movement/realism\"><strong>Realism</strong></a> with Orientalist subject matter, typical of French Salon painting in the late 19th century." },
      { question: "Who did Bonnat teach?", answer: "<a href=\"/artist/leon-bonnat\"><strong>Bonnat</strong></a> was an influential teacher whose students included Toulouse-Lautrec, Braque, and Dufy." }
    ]
  },
  {
    slug: 'john-william-godward-an-idle-hour',
    description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> painted this languid classical scene showing a woman reclining in an ancient Roman setting. Marble benches, terracotta pots, and Mediterranean light create an atmosphere of timeless leisure. Godward specialized in such subjects, becoming the last significant painter in the Greco-Roman tradition that flourished in late Victorian Britain.</p>
<p>The <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman's</strong></a> draped costume and the architectural details reflect Godward's meticulous research into classical antiquity. His technique for rendering marble and fabric was particularly admired. Unlike the <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelites</strong></a>, who infused their classical subjects with emotional intensity, Godward favored serene beauty.</p>
<p>The painting is in a <strong>Private Collection</strong>. Godward's career suffered as modernism rose; he reportedly said "the world is not big enough for myself and a Picasso." He died in 1922, having outlived the taste for his particular vision of antiquity.</p>`,
    faqs: [
      { question: "Where is An Idle Hour displayed?", answer: "The painting is in a <strong>Private Collection</strong> and not publicly exhibited." },
      { question: "What subjects did Godward paint?", answer: "<a href=\"/artist/john-william-godward\"><strong>Godward</strong></a> specialized in classical scenes of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> in ancient Roman settings. He was the last major painter in this Victorian tradition." },
      { question: "How does Godward relate to the Pre-Raphaelites?", answer: "Unlike the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> who brought emotional intensity to classical subjects, <a href=\"/artist/john-william-godward\"><strong>Godward</strong></a> preferred serene, decorative beauty." },
      { question: "Why did Godward's career decline?", answer: "The rise of modernism made his classical style unfashionable. He reportedly felt there was no room for him in a world that valued Picasso." }
    ]
  },
  {
    slug: 'rembrandt-an-old-man-with-a-beard',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> painted this character study of an elderly bearded man, one of many such works he created throughout his career. The artist frequently used local Amsterdam residents, often from the Jewish community, as models for these deeply human portraits. The painting demonstrates his ability to convey age, wisdom, and inner life through subtle gradations of light and shadow.</p>
<p>This work is held at the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. Rembrandt's "tronies" (character heads) weren't commissioned portraits but independent studies exploring physiognomy and expression. They served as both artistic exercises and saleable items in his studio practice.</p>
<p>The rich impasto and warm browns characteristic of Rembrandt's mature style are evident here. His ability to suggest the texture of aged skin and the play of light on a weathered face influenced portrait painting for centuries.</p>`,
    faqs: [
      { question: "Where is this Rembrandt painting?", answer: "The painting is at the <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>." },
      { question: "Who were Rembrandt's models for these studies?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> often used Amsterdam residents, including members of the local Jewish community, as models for his character studies." },
      { question: "What is a tronie?", answer: "A tronie is a character head study, not a formal portrait. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> created many as artistic exercises and for sale." },
      { question: "What style is this painting?", answer: "It's <a href=\"/movement/baroque\"><strong>Dutch Baroque</strong></a>, showing Rembrandt's mastery of chiaroscuro and ability to convey psychological depth." }
    ]
  },
  {
    slug: 'rembrandt-an-old-man-with-a-large-beard',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> created this portrait of a bearded elder, now at the <a href="/museum/hermitage-museum"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. The dramatic lighting illuminates the man's face against a dark background, a technique Rembrandt perfected over decades of practice. The substantial beard receives careful attention, its individual hairs suggested through fluid brushwork.</p>
<p>Such elderly male figures appear throughout Rembrandt's work, often serving as models for biblical patriarchs or philosophers. Whether this was a study from life or an imagined type, it demonstrates his profound interest in the signs of age and experience written on the human face.</p>
<p>The Hermitage holds one of the world's finest collections of <a href="/movement/baroque"><strong>Dutch Golden Age</strong></a> paintings. Catherine the Great acquired many works, including important Rembrandts, for the imperial collection.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: "The work hangs at the <a href=\"/museum/hermitage-museum\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
      { question: "Why did Rembrandt paint so many elderly men?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> used such figures for biblical and philosophical subjects. He was drawn to the signs of age and wisdom visible in elderly faces." },
      { question: "How did this painting reach Russia?", answer: "Catherine the Great assembled a major collection of <a href=\"/movement/baroque\"><strong>Dutch Golden Age</strong></a> paintings for the Hermitage, including several Rembrandts." },
      { question: "What technique defines this painting?", answer: "The dramatic chiaroscuro lighting and fluid brushwork in the beard are characteristic of <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> mature style." }
    ]
  },
  {
    slug: 'quentin-matsys-an-old-woman-the-ugly-duchess',
    description: `<p><a href="/artist/quentin-matsys"><strong>Quinten Matsys</strong></a> painted this satirical portrait around 1513, creating one of the most memorable faces in Northern Renaissance art. An elderly woman with exaggerated features wears the aristocratic horned headdress of an earlier era, now decades out of fashion. She holds a red flower, a symbol of romantic engagement, suggesting she's trying to attract a suitor despite her advanced age.</p>
<p>The painting captures the emergence of the <a href="https://luxurywallart.com/collections/macabre-art" target="_blank" rel="noopener"><strong>grotesque</strong></a> as an independent subject for painting. Matsys shared his interest in unusual physiognomy with Leonardo da Vinci, and scholars believe the artists may have exchanged drawings. Infrared analysis suggests Matsys based his composition on an early sketch, possibly shared with Leonardo.</p>
<p>The sitter gained her "Ugly Duchess" nickname in the 17th century through mistaken identification with Margaret Maultasch, Duchess of Carinthia. Two centuries later, John Tenniel used the image as inspiration for his Duchess in Alice's Adventures in Wonderland. The painting hangs at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, bequeathed in 1947.</p>`,
    faqs: [
      { question: "Where is The Ugly Duchess displayed?", answer: "The painting hangs at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London since 1947." },
      { question: "What inspired this painting?", answer: "<a href=\"/artist/quentin-matsys\"><strong>Matsys</strong></a> pioneered satirical, grotesque portraiture. He may have exchanged drawings with Leonardo da Vinci, who shared his interest in unusual faces." },
      { question: "Who is the woman in the painting?", answer: "She's anonymous. The \"Ugly Duchess\" nickname came from a 17th-century misidentification with Margaret Maultasch. John Tenniel used her for Alice in Wonderland's Duchess." },
      { question: "What size is this painting?", answer: "The oak panel measures 62.4 by 45.5 centimeters (about 24.5 by 18 inches). <a href=\"/artist/quentin-matsys\"><strong>Matsys</strong></a> painted it around 1513." }
    ]
  },
  {
    slug: 'adriaen-van-ostade-an-old-woman-by-window',
    description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this intimate scene of an elderly woman near a window, characteristic of his focus on Dutch peasant life. A student of Frans Hals, Van Ostade specialized in tavern scenes, village festivities, and domestic interiors featuring common people. His work provides a window into 17th-century Dutch daily existence.</p>
<p>The painting hangs at the <a href="/museum/hermitage-museum"><strong>Hermitage Museum</strong></a> in Saint Petersburg. Van Ostade's genre scenes differ from the more refined domestic interiors of Vermeer or de Hooch; his subjects are earthier, often shown in simple surroundings with worn furniture and humble possessions.</p>
<p>Dutch <a href="/movement/baroque"><strong>Golden Age</strong></a> collectors valued such scenes for their humor and humanity. Van Ostade produced hundreds of paintings, drawings, and etchings depicting peasant life, influencing later genre painters including his brother Isaac.</p>`,
    faqs: [
      { question: "Where is this Van Ostade painting?", answer: "The work hangs at the <a href=\"/museum/hermitage-museum\"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
      { question: "What subjects did Van Ostade paint?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> specialized in Dutch peasant life: tavern scenes, village festivities, and humble domestic interiors." },
      { question: "Who taught Van Ostade?", answer: "He studied with Frans Hals in Haarlem. <a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade</strong></a> then developed his own specialty in peasant genre scenes." },
      { question: "How does this differ from Vermeer's interiors?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Van Ostade's</strong></a> subjects are earthier than Vermeer's. He showed common people in simple settings rather than refined middle-class homes." }
    ]
  },

  // === OLD WOMAN COOKING TO ANDROMEDA ===
  {
    slug: 'diego-velazquez-an-old-woman-cooking-eggs',
    description: `<p><a href="/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this bodegón (kitchen scene) around 1618, when he was just eighteen or nineteen years old and still living in Seville. An old woman sits holding a spoon over eggs frying in a terracotta pot while a young boy watches, holding a flask of wine and a melon. Their actions are frozen; they don't interact or meet each other's gaze.</p>
<p>The realism Velázquez achieved here was unprecedented in Spanish painting. Critics dismissed still-life paintings as the lowest genre, but Velázquez reportedly said, "I would rather be the first painter of common things than second in higher art." The <strong>tour de force</strong> is the eggs congealing in oil, alongside gleaming brass, glazed earthenware, and the wooden table's grain.</p>
<p>The painting measures about 100 by 120 centimeters. After passing through British collectors in the 19th century, the <a href="/museum/scottish-national-gallery"><strong>Scottish National Gallery</strong></a> acquired it in 1955 with help from the Art Fund. It's now recognized as one of the finest examples of Spanish bodegón painting.</p>`,
    faqs: [
      { question: "Where is Old Woman Cooking Eggs?", answer: "The painting hangs at the <a href=\"/museum/scottish-national-gallery\"><strong>Scottish National Gallery</strong></a> in Edinburgh, acquired in 1955." },
      { question: "How old was Velázquez when he painted this?", answer: "<a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> was only 18 or 19, still living in his native Seville before moving to Madrid." },
      { question: "What is a bodegón?", answer: "A bodegón is a Spanish kitchen or tavern scene featuring prominent still-life elements. <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> pioneered this genre with unprecedented realism." },
      { question: "What makes this painting technically remarkable?", answer: "The differentiation of textures is extraordinary: eggs congealing in oil, gleaming brass, glazed pottery, wood grain. <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> was already a master at 18." }
    ]
  },
  {
    slug: 'rembrandt-an-old-woman-sleeping',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> captured this intimate moment of an elderly woman dozing, possibly a servant or housekeeper. The domestic subject shows his interest in unguarded moments of ordinary life. Warm light falls across her face and hands while the rest dissolves into shadow, creating a tender atmosphere.</p>
<p>The painting belongs to the <a href="/museum/hermitage-museum"><strong>State Hermitage Museum</strong></a> in Saint Petersburg. Rembrandt painted several similar subjects of sleeping or contemplative figures, finding poetry in mundane moments. Such works weren't commissioned portraits but independent studies exploring human vulnerability.</p>
<p>The Dutch Golden Age valued genre scenes showing daily life, though Rembrandt elevated such subjects with his characteristic psychological depth. His ability to suggest inner life even in a sleeping figure distinguishes him from contemporaries who emphasized anecdote or humor.</p>`,
    faqs: [
      { question: "Where is this Rembrandt painting?", answer: "The work hangs at the <a href=\"/museum/hermitage-museum\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
      { question: "Who is the sleeping woman?", answer: "She's likely a servant or housekeeper, not a commissioned portrait subject. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> often painted domestic figures in unguarded moments." },
      { question: "What makes this painting distinctive?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> brings psychological depth to an ordinary moment. The warm light and shadow create tenderness unusual in genre painting." },
      { question: "What period is this from?", answer: "It's a <a href=\"/movement/baroque\"><strong>Dutch Golden Age</strong></a> work, when genre scenes of daily life were highly valued by collectors." }
    ]
  },
  {
    slug: 'leon-bonnat-an-oriental-barbershop',
    description: `<p><a href="/artist/leon-bonnat"><strong>Léon Bonnat</strong></a> painted this Orientalist scene depicting a barbershop in the Middle East, part of the 19th-century European fascination with exotic subjects. Bonnat was primarily known as France's leading portrait painter, capturing presidents and cultural figures with academic precision. His Orientalist works demonstrate the range of subjects that attracted even established academic painters.</p>
<p>The painting now resides at the <a href="/museum/pushkin-museum"><strong>Pushkin Museum</strong></a> in Moscow. Bonnat traveled to the East and painted directly from observation, bringing more authenticity than artists who relied solely on studio props and imagination.</p>
<p>Orientalism in art reflected European colonial interests and romantic projections onto Middle Eastern cultures. Modern scholars approach such works critically, recognizing both their artistic achievement and their problematic context within imperial attitudes.</p>`,
    faqs: [
      { question: "Where is An Oriental Barbershop?", answer: "The painting hangs at the <a href=\"/museum/pushkin-museum\"><strong>Pushkin Museum</strong></a> in Moscow, Russia." },
      { question: "What is Bonnat better known for?", answer: "<a href=\"/artist/leon-bonnat\"><strong>Bonnat</strong></a> was primarily France's leading portrait painter, depicting presidents and cultural figures. His Orientalist works are a smaller part of his output." },
      { question: "Did Bonnat travel to the Orient?", answer: "Yes, <a href=\"/artist/leon-bonnat\"><strong>Bonnat</strong></a> traveled and painted from observation, giving his Orientalist works more authenticity than purely studio-based compositions." },
      { question: "How is Orientalism viewed today?", answer: "Modern scholars approach Orientalist art critically, recognizing both artistic achievement and problematic colonial attitudes it often reflects." }
    ]
  },
  {
    slug: 'thomas-gainsborough-an-unknown-couple-in-a-landscape',
    description: `<p><a href="/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this double portrait around the middle of the 18th century, combining his two great loves: portraiture and <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a>. An elegantly dressed couple poses before a rural English setting with trees and open sky. The sitters' identities have been lost to history, hence the painting's title.</p>
<p>Gainsborough often complained that portrait commissions kept him from his preferred subject of landscape painting. In works like this, he merged both interests, placing his fashionable clients in idealized pastoral settings that evoked the English countryside.</p>
<p>The painting hangs at the <a href="/museum/dulwich-picture-gallery"><strong>Dulwich Picture Gallery</strong></a> in London. Gainsborough, along with Reynolds, dominated British portraiture in the Georgian era. His fluid brushwork and atmospheric sensitivity influenced generations of English painters.</p>`,
    faqs: [
      { question: "Where is this Gainsborough painting?", answer: "The work hangs at the <a href=\"/museum/dulwich-picture-gallery\"><strong>Dulwich Picture Gallery</strong></a> in London." },
      { question: "Who are the sitters?", answer: "Their identities are unknown, hence the title \"An Unknown Couple.\" <a href=\"/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> painted many such fashionable portraits." },
      { question: "What did Gainsborough prefer painting?", answer: "<a href=\"/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> loved <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> but relied on portrait commissions for income. He often merged both interests in his work." },
      { question: "What style is this painting?", answer: "It's British Georgian portraiture with <a href=\"/movement/rococo\"><strong>Rococo</strong></a> influences, showing Gainsborough's fluid brushwork and atmospheric sensitivity." }
    ]
  },
  {
    slug: 'nicolas-poussin-andrians-or-the-great-bacchanal-with-woman-playing',
    description: `<p><a href="/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> painted this Bacchanalia between 1628 and 1630, inspired by Titian's famous Bacchanal paintings that Poussin studied in Rome. The scene depicts followers of Bacchus in festive revelry, with a woman playing a lute at the center. The composition draws from Philostratus's Imagines, an ancient text describing paintings that also inspired Titian.</p>
<p>Poussin was captivated by Titian's golden light, intense color, and active brushwork. During the late 1620s and 1630s, he experimented with these Venetian influences while developing his own <a href="/movement/baroque"><strong>classical</strong></a> style. The work represents a pivotal moment in his artistic evolution.</p>
<p>The painting measures 121 by 175 centimeters and hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris. While Titian's original Bacchanal of the Andrians is at the Prado, Poussin's version demonstrates how the French master absorbed and transformed his Italian predecessors' achievements.</p>`,
    faqs: [
      { question: "Where is Poussin's Andrians painting?", answer: "The work hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It measures 121 by 175 centimeters." },
      { question: "What inspired this painting?", answer: "<a href=\"/artist/nicolas-poussin\"><strong>Poussin</strong></a> was inspired by Titian's Bacchanal paintings, which he studied in Rome. Both artists drew from Philostratus's ancient descriptions of paintings." },
      { question: "When did Poussin paint this?", answer: "He created it between 1628 and 1630, during a period when he was absorbing Venetian influences and developing his classical style." },
      { question: "How does this relate to Titian's version?", answer: "Titian's Bacchanal of the Andrians (1523-1526) at the Prado directly inspired <a href=\"/artist/nicolas-poussin\"><strong>Poussin</strong></a>, who saw it in Rome and created his own interpretation." }
    ]
  },
  {
    slug: 'theodore-chasseriau-andromeda-chained-to-the-rock-by-the-nereids',
    description: `<p><a href="/artist/theodore-chasseriau"><strong>Théodore Chassériau</strong></a> painted this mythological scene in 1840 at age 21, showing Andromeda being chained to a rock by sea nymphs. The Ethiopian princess was sacrificed to appease a sea monster devastating her father's kingdom; Perseus would later rescue her. Chassériau captures the moment before rescue, with Andromeda's terrified face contrasting with the Nereids' haste to secure her.</p>
<p>Chassériau studied under <a href="/artist/jean-auguste-dominique-ingres"><strong>Ingres</strong></a> but was increasingly drawn to Delacroix's <a href="/movement/romanticism"><strong>Romantic</strong></a> approach. This painting shows both influences: the careful drawing of Ingres combined with dramatic emotion and rich color. The female nude demonstrates Chassériau's very personal ideal of depicting <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a>.</p>
<p>The oil on canvas measures 92 by 74 centimeters and hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, where a room is dedicated to Chassériau. He died at 37 but influenced Puvis de Chavannes and Gustave Moreau, through whom his impact reached Gauguin and Matisse.</p>`,
    faqs: [
      { question: "Where is this Chassériau painting?", answer: "The work hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. A room there is dedicated to <a href=\"/artist/theodore-chasseriau\"><strong>Chassériau's</strong></a> work." },
      { question: "What myth does this depict?", answer: "Andromeda, an Ethiopian princess, is being sacrificed to a sea monster. The Nereids (sea nymphs) chain her before Perseus arrives to rescue her." },
      { question: "Who were Chassériau's influences?", answer: "He studied under <a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> but was drawn to Delacroix's <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>. This work shows both influences." },
      { question: "What size is this painting?", answer: "The canvas measures 92 by 74 centimeters (about 36 by 29 inches). <a href=\"/artist/theodore-chasseriau\"><strong>Chassériau</strong></a> painted it in 1840 at age 21." }
    ]
  },

  // === ANGEL ARTWORKS (9 pieces) ===
  {
    slug: 'piero-della-francesca-angel',
    description: `<p><a href="/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> created this angel as part of his Legend of the True Cross fresco cycle in the Basilica of San Francesco in Arezzo. Painted between 1452 and 1464, the cycle ranks among the greatest achievements of the Italian <a href="/movement/early-renaissance"><strong>Early Renaissance</strong></a>. The angel figure demonstrates Piero's distinctive combination of geometric precision and luminous, pale color.</p>
<p>The frescoes illustrate the legend of how the wood of Christ's cross traveled through history, from the Tree of Knowledge to Helena's discovery in Jerusalem. Piero's figures appear almost frozen in perfect stillness, their simplified forms creating a meditative atmosphere quite different from the drama of other Renaissance painters.</p>
<p>The cycle was commissioned by the Bacci family and remained in the <a href="/museum/basilica-of-san-francesco-arezzo"><strong>Basilica of San Francesco</strong></a> where Piero painted it. An exhaustive restoration from 1991 to 2000 revealed the original brilliance of his colors. Some scholars now question whether all parts were executed by Piero himself or by workshop assistants.</p>`,
    faqs: [
      { question: "Where is this Piero della Francesca angel?", answer: "It's part of the Legend of the True Cross cycle in the <a href=\"/museum/basilica-of-san-francesco-arezzo\"><strong>Basilica of San Francesco</strong></a> in Arezzo, Italy." },
      { question: "When was this fresco painted?", answer: "<a href=\"/artist/piero-della-francesca\"><strong>Piero</strong></a> worked on the entire cycle between 1452 and 1464. It's his largest surviving work." },
      { question: "What is distinctive about Piero's style?", answer: "<a href=\"/artist/piero-della-francesca\"><strong>Piero</strong></a> combined geometric precision with luminous color. His figures appear still and meditative, quite different from dramatic Renaissance painting." },
      { question: "Has the fresco been restored?", answer: "Yes, an exhaustive restoration from 1991 to 2000 revealed the original brilliance of <a href=\"/artist/piero-della-francesca\"><strong>Piero's</strong></a> colors." }
    ]
  },
  {
    slug: 'raphael-angel-fragment-of-the-baronci-altarpiece',
    description: `<p><a href="/artist/raphael"><strong>Raphael</strong></a> painted this angel fragment around 1500-1501 as part of the Baronci Altarpiece, his first independent commission. The original altarpiece depicted the Coronation of St. Nicholas of Tolentino and was made for the Church of Sant'Agostino in Città di Castello. An earthquake in 1789 severely damaged the work, and it was cut into fragments that dispersed to various collections.</p>
<p>This angel head shows Raphael's early style, still influenced by his teacher Perugino but already displaying the grace that would distinguish his mature work. The young artist was only seventeen or eighteen when he received this commission, remarkable for someone just beginning his career.</p>
<p>The fragment now resides at the <a href="/museum/pinacoteca-tosio-martinengo"><strong>Pinacoteca Tosio Martinengo</strong></a> in Brescia, Italy. Other surviving fragments are at the Louvre and Naples. Despite its fragmentary state, this piece provides crucial evidence of Raphael's earliest independent achievements.</p>`,
    faqs: [
      { question: "Where is this Raphael angel fragment?", answer: "The fragment is at the <a href=\"/museum/pinacoteca-tosio-martinengo\"><strong>Pinacoteca Tosio Martinengo</strong></a> in Brescia, Italy. Other fragments are at the Louvre and Naples." },
      { question: "What happened to the original altarpiece?", answer: "An 1789 earthquake damaged the Baronci Altarpiece. It was cut into fragments that were sold separately and dispersed to various collections." },
      { question: "How old was Raphael when he painted this?", answer: "<a href=\"/artist/raphael\"><strong>Raphael</strong></a> was only 17 or 18 years old. This was his first independent commission, completed around 1500-1501." },
      { question: "What style is this early Raphael?", answer: "It shows influence from his teacher Perugino while already displaying <a href=\"/artist/raphael\"><strong>Raphael's</strong></a> characteristic grace. It's an <a href=\"/movement/high-renaissance\"><strong>Early Renaissance</strong></a> work." }
    ]
  },
  {
    slug: 'jan-van-eyck-angel-annunciate-from-exterior-of-left-panel-of-th',
    description: `<p><a href="/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted this Angel of the Annunciation in 1432 as part of the exterior panels of the Ghent Altarpiece. When the polyptych is closed, viewers see an Annunciation scene across the upper register, with this angel on the left panel and the Virgin Mary on the right. The figures are painted in grisaille technique, simulating stone sculpture.</p>
<p>The Ghent Altarpiece (Adoration of the Mystic Lamb) is considered the first major oil painting and a masterpiece of the <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>. Jan and his brother Hubert created it for the Vijd Chapel in Saint Bavo's Cathedral. The exterior panels' "living grisaille" brings sculptural presence to the Annunciation figures.</p>
<p>The altarpiece has been stolen seven times, more than any other artwork. Nazis hid it in an Austrian salt mine during WWII. After restoration completed in 2020, it's now displayed in a climate-controlled, bulletproof case at <a href="/museum/saint-bavos-cathedral"><strong>Saint Bavo's Cathedral</strong></a> in Ghent.</p>`,
    faqs: [
      { question: "Where is this Van Eyck angel panel?", answer: "It's part of the Ghent Altarpiece at <a href=\"/museum/saint-bavos-cathedral\"><strong>Saint Bavo's Cathedral</strong></a> in Ghent, Belgium." },
      { question: "What is grisaille?", answer: "Grisaille is a painting technique using shades of gray to simulate stone sculpture. <a href=\"/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> used it for the closed exterior panels." },
      { question: "Why is the Ghent Altarpiece famous?", answer: "It's considered the first major oil painting and a <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> masterpiece. It has also been stolen seven times." },
      { question: "When was this painted?", answer: "<a href=\"/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> completed the altarpiece in 1432. The exterior Annunciation panels are seen when the work is closed." }
    ]
  },
  {
    slug: 'rembrandt-angel-departing-from-the-family-of-tobias',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> painted this dramatic scene in 1637, depicting the moment when the archangel Raphael reveals his identity to Tobit's family and ascends to heaven. The story comes from the apocryphal Book of Tobit: after restoring blind Tobit's sight and guiding his son Tobias on a journey, the angel announces "I am Raphael, one of the seven holy angels."</p>
<p>The angel bursts upward through a break in dark clouds, bathed in heavenly light, while the family below reacts with awe and prostration. An open chest at the bottom right shows Tobit's offer of treasure to his benefactor, which the angel naturally refused. Rembrandt's mastery of light and dramatic composition makes this one of his finest <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious</strong></a> works.</p>
<p>The oil on panel measures 52 by 66 centimeters and hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris. Rembrandt also created an etching of this subject. The Book of Tobit, though not part of the Protestant canon, attracted many Dutch <a href="/movement/baroque"><strong>Baroque</strong></a> artists with its dramatic potential.</p>`,
    faqs: [
      { question: "Where is this Rembrandt painting?", answer: "The painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It measures 52 by 66 centimeters." },
      { question: "What story does this depict?", answer: "It shows the archangel Raphael departing from Tobit's family after restoring Tobit's sight. The scene comes from the Book of Tobit in the Apocrypha." },
      { question: "When did Rembrandt paint this?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> completed this oil on panel in 1637. He also made an etching of the same subject." },
      { question: "What makes this painting remarkable?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> mastery of light creates the dramatic contrast between the ascending <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angel</strong></a> and the awestruck family below." }
    ]
  },
  {
    slug: 'odilon-redon-angel-in-chains',
    description: `<p><a href="/artist/odilon-redon"><strong>Odilon Redon</strong></a> created this haunting image around 1875, depicting an <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angel</strong></a> bound in chains against a deep red background. The figure is androgynous, contemplative, and defeated, one hand resting on its head in a gesture of despair. The wings, though present, meld into shadows, suggesting confinement rather than freedom.</p>
<p>Redon pioneered the <a href="/movement/symbolism"><strong>Symbolist</strong></a> movement in art, using images from dreams and imagination rather than observed reality. The chained angel symbolizes the restrictions placed on free-thinking individuals by rigid social conventions of late 19th-century France. It represents the human struggle between desires for ascension and the realities of oppression.</p>
<p>The oil on canvas is in a <strong>Private Collection</strong> and not publicly displayed. Redon's work bridges the visible and invisible worlds, inviting meditation on suffering and liberation. His influence extended to the Nabis and later to the Surrealists.</p>`,
    faqs: [
      { question: "Where is Angel in Chains?", answer: "The painting is in a <strong>Private Collection</strong> and not publicly displayed." },
      { question: "What does the chained angel symbolize?", answer: "The bound <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angel</strong></a> represents restrictions on free thought and the struggle between spiritual aspiration and earthly oppression." },
      { question: "What movement does this represent?", answer: "It's a <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> work. <a href=\"/artist/odilon-redon\"><strong>Redon</strong></a> pioneered this movement, using dream imagery rather than observed reality." },
      { question: "When was this painted?", answer: "<a href=\"/artist/odilon-redon\"><strong>Redon</strong></a> created this around 1875, early in his career when he was developing his distinctive Symbolist vision." }
    ]
  },
  {
    slug: 'michelangelo-angel-with-candlestick',
    description: `<p><a href="/artist/michelangelo"><strong>Michelangelo</strong></a> carved this marble angel around 1494-1495 at age 20, one of his earliest works. The kneeling figure holds a large candlestick, serving as part of the elaborate tomb of Saint Dominic in the Basilica of San Domenico in Bologna. Michelangelo was commissioned to complete the shrine after sculptor Niccolò dell'Arca died, leaving the project unfinished.</p>
<p>The <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angel</strong></a> demonstrates Michelangelo's already remarkable understanding of anatomy and his ability to infuse marble with life. The figure's youthful face, curly hair, and confident posture show classical Renaissance ideals. Large wings hang from the back with detailed feathering. The sculpture stands 51.5 centimeters high including the base.</p>
<p>Records show Michelangelo received twelve ducats for the angel and eighteen for his accompanying St. Petronius figure. He studied sculptures by Jacopo della Quercia on the Basilica of San Petronio nearby. The angel remains at the <a href="/museum/basilica-of-san-domenico"><strong>Basilica of San Domenico</strong></a> in Bologna, paired with dell'Arca's earlier angel.</p>`,
    faqs: [
      { question: "Where is Michelangelo's Angel with Candlestick?", answer: "The sculpture is at the <a href=\"/museum/basilica-of-san-domenico\"><strong>Basilica of San Domenico</strong></a> in Bologna, Italy, as part of Saint Dominic's tomb." },
      { question: "How old was Michelangelo when he made this?", answer: "<a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> was only about 20 years old when he carved this angel around 1494-1495." },
      { question: "Why did Michelangelo receive this commission?", answer: "Sculptor Niccolò dell'Arca died leaving Saint Dominic's tomb unfinished. <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> was commissioned to complete it." },
      { question: "How much was Michelangelo paid?", answer: "Records show he received twelve ducats for the <a href=\"https://luxurywallart.com/collections/angel-art\" target=\"_blank\" rel=\"noopener\"><strong>angel</strong></a> and eighteen for his St. Petronius figure." }
    ]
  },
  {
    slug: 'mikhail-vrubel-angel-with-labara',
    description: `<p><a href="/artist/mikhail-vrubel"><strong>Mikhail Vrubel</strong></a> created this religious painting as part of his restoration work at St. Cyril's Monastery in Kyiv during the 1880s. The work depicts an <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angel</strong></a> holding a labarum, the military standard that bore Christian symbols after Constantine's conversion. Vrubel's interpretation brings intense spirituality to the Byzantine-influenced composition.</p>
<p>Vrubel is celebrated as one of Russia's most distinctive artists, known for his haunting Demon series and decorative works. His style combined Russian Orthodox tradition with Western influences and personal vision. Mental illness cut his career short, but his influence on Russian art was profound.</p>
<p>The painting remains at <strong>St. Cyril's Monastery</strong> in Kyiv, Ukraine. Vrubel worked there as a young artist, and this early religious work shows the spiritual intensity that would characterize his later, more famous paintings. His approach to light and form was innovative for Russian religious art.</p>`,
    faqs: [
      { question: "Where is this Vrubel painting?", answer: "The work is at <strong>St. Cyril's Monastery</strong> in Kyiv, Ukraine, where <a href=\"/artist/mikhail-vrubel\"><strong>Vrubel</strong></a> worked on restorations in the 1880s." },
      { question: "What is a labarum?", answer: "A labarum is the military standard that bore Christian symbols after Emperor Constantine's conversion. It became a symbol of Christian triumph." },
      { question: "What is Vrubel best known for?", answer: "<a href=\"/artist/mikhail-vrubel\"><strong>Vrubel</strong></a> is celebrated for his Demon series and decorative works. Mental illness cut his brilliant career short." },
      { question: "What style is this painting?", answer: "It combines Russian Orthodox tradition with Western influences and <a href=\"/artist/mikhail-vrubel\"><strong>Vrubel's</strong></a> personal vision, innovative for Russian religious art." }
    ]
  },
  {
    slug: 'raphael-angel-from-the-polyptych-of-st-nicolas-of-tolentin',
    description: `<p><a href="/artist/raphael"><strong>Raphael</strong></a> painted this angel as part of his first documented commission, the Polyptych of St. Nicholas of Tolentino, created around 1500-1501. The altarpiece was made for the Church of Sant'Agostino in Città di Castello. It depicted the Coronation of St. Nicholas with various saints and angels in the surrounding panels.</p>
<p>This fragment shows Raphael's youthful style, still influenced by his teacher Perugino but already displaying remarkable grace and refinement. The <a href="https://luxurywallart.com/collections/angel-art" target="_blank" rel="noopener"><strong>angel's</strong></a> gentle expression and carefully modeled features demonstrate why Raphael received such an important commission at only seventeen or eighteen years old.</p>
<p>An earthquake in 1789 damaged the altarpiece, which was subsequently cut into fragments. This angel fragment is now at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris. Other pieces survive in Naples and Brescia. Despite the work's fragmentary state, these remnants provide crucial evidence of Raphael's earliest achievements.</p>`,
    faqs: [
      { question: "Where is this Raphael angel fragment?", answer: "This fragment is at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. Other pieces from the same altarpiece are in Naples and Brescia." },
      { question: "What happened to the original altarpiece?", answer: "An 1789 earthquake damaged the Polyptych of St. Nicholas of Tolentino. It was cut apart and the fragments sold separately." },
      { question: "How old was Raphael when he painted this?", answer: "<a href=\"/artist/raphael\"><strong>Raphael</strong></a> was about 17-18 years old. This was his first documented commission, completed around 1500-1501." },
      { question: "What style does this show?", answer: "It shows <a href=\"/artist/raphael\"><strong>Raphael's</strong></a> early <a href=\"/movement/high-renaissance\"><strong>Renaissance</strong></a> style, influenced by Perugino but already displaying his characteristic grace." }
    ]
  },
  {
    slug: 'georges-seurat-angelica-at-the-rock-after-ingres',
    description: `<p><a href="/artist/georges-seurat"><strong>Georges Seurat</strong></a> painted this study after Ingres in 1878 while a student at the École des Beaux-Arts. The work is a selective reduction of Ingres' "Roger Freeing Angelica," focusing only on the chained princess and omitting the heroic knight and sea monster. It's one of thirteen copies Seurat made after works by the French master draftsman.</p>
<p>Ingres' original depicted a scene from Ariosto's Orlando Furioso where Roger rescues Angelica from a sea monster. By isolating Angelica, Seurat created a different emotional tone, emphasizing her vulnerability rather than her rescue. The oil on canvas measures 83 by 66.3 centimeters.</p>
<p>The painting is at the <a href="/museum/norton-simon-museum"><strong>Norton Simon Museum</strong></a> in Pasadena, California. Norton Simon acquired it in 1982 from the collection that descended through the artist's family. This early <a href="/movement/neoclassicism"><strong>Neoclassical</strong></a> work predates the Pointillist technique that would make Seurat famous.</p>`,
    faqs: [
      { question: "Where is Seurat's Angelica at the Rock?", answer: "The painting is at the <a href=\"/museum/norton-simon-museum\"><strong>Norton Simon Museum</strong></a> in Pasadena, California, acquired in 1982." },
      { question: "What painting did Seurat copy?", answer: "<a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> copied part of Ingres' \"Roger Freeing Angelica,\" focusing only on Angelica and omitting the knight and monster." },
      { question: "When was this painted?", answer: "Seurat made it in 1878 while a student at the École des Beaux-Arts, before developing his famous Pointillist technique." },
      { question: "What size is this painting?", answer: "The oil on canvas measures 83 by 66.3 centimeters (about 33 by 26 inches)." }
    ]
  },
  {
    slug: 'august-macke-anglers160on-the-rhine',
    description: `<p><a href="/artist/august-macke"><strong>August Macke</strong></a> painted this scene of anglers by the Rhine River in 1907, an early work created before he became a leading figure of German <a href="/movement/expressionism"><strong>Expressionism</strong></a>. The painting shows figures fishing along the riverbank in a composition that already hints at his interest in color and light.</p>
<p>Macke would become a key member of Der Blaue Reiter (The Blue Rider) group alongside Kandinsky and Franz Marc. Unlike Kandinsky's move toward abstraction, Macke stayed grounded in recognizable subjects bathed in vibrant <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color</strong></a>. He was particularly drawn to scenes of modern leisure.</p>
<p>The canvas measures 40.3 by 44.5 centimeters and hangs at the <a href="/museum/lenbachhaus"><strong>Lenbachhaus</strong></a> in Munich, which holds a major collection of Blue Rider works. Macke died in World War I at age 27, cutting short one of the most promising careers in modern German art.</p>`,
    faqs: [
      { question: "Where is Anglers on the Rhine?", answer: "The painting is at the <a href=\"/museum/lenbachhaus\"><strong>Lenbachhaus</strong></a> in Munich, Germany, which specializes in Blue Rider art." },
      { question: "When did Macke paint this?", answer: "<a href=\"/artist/august-macke\"><strong>Macke</strong></a> created this work in 1907, early in his career before joining Der Blaue Reiter." },
      { question: "What group did Macke belong to?", answer: "He was a leading member of Der Blaue Reiter (<a href=\"/movement/expressionism\"><strong>The Blue Rider</strong></a>) alongside Kandinsky and Franz Marc." },
      { question: "What size is this painting?", answer: "The canvas measures 40.3 by 44.5 centimeters (about 16 by 17.5 inches). <a href=\"/artist/august-macke\"><strong>Macke</strong></a> died in WWI at just 27." }
    ]
  }
];

async function main() {
  console.log('Starting artwork updates...');

  for (const artwork of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('Done!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
