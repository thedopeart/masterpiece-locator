const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Enrich notable Met sculptures batch 2: Greek/Roman portraits, Egyptian highlights

const enrichments = {
  // ============ CALIGULA BUST ============
  'marble-portrait-bust-of-the-emperor-gaius-known-as-caligula': {
    description: `<p>This marble bust portrays <strong>Gaius Caesar Augustus Germanicus</strong>, better known as Caligula, who ruled Rome from 37 to 41 CE. The sculptor conveyed something of Caligula's vanity and cruelty in the proud turn of the head and thin, pursed lips. It's a surprisingly frank piece of imperial propaganda.</p>

<p>Conservation imaging revealed traces of <strong>Egyptian blue pigment</strong> on the bust's lower reverse, proving it was originally painted. We see white marble now, but Romans would have seen flesh tones, colored eyes, and painted hair. This discovery is part of a broader reassessment of ancient polychromy led by researchers Vinzenz and Ulrike Koch Brinkmann over four decades.</p>

<p>Caligula reigned only four years before his assassination, making surviving portraits relatively rare. This one entered the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1914 through the Rogers Fund. It stands in Gallery 162.</p>`,
    faqs: [
      { question: "Was this bust originally painted?", answer: "Yes. Imaging revealed traces of <strong>Egyptian blue pigment</strong> on the marble surface. Roman portrait busts were originally painted with flesh tones, colored eyes, and hair. The bare white marble we see today is the result of centuries of paint loss." },
      { question: "Where can I see this bust?", answer: "It's in <strong>Gallery 162</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The Met acquired it in 1914 through the Rogers Fund." },
      { question: "Why are Caligula portraits rare?", answer: "Caligula ruled for only <strong>four years (37-41 CE)</strong> before being assassinated. After his death, many of his portraits were destroyed or recarved into images of later emperors, a practice called <strong>damnatio memoriae</strong>." }
    ]
  },

  // ============ AUGUSTUS PORTRAIT ============
  'marble-portrait-of-the-emperor-augustus': {
    description: `<p>This over-life-size marble head represents <strong>Augustus</strong> (63 BCE to 14 CE), Rome's first emperor. It was likely part of a seated statue created during the reign of his successor Tiberius. The calm, idealized features show Augustus as eternally young, despite the fact that he died at 77.</p>

<p>Over 250 portraits of Augustus survive today, yet none show him in old age. This was deliberate. His portrait style combined individualized features with <strong>Classical Greek idealism</strong>, presenting him as dignified rather than divine. It was a calculated political image, distributed across the empire as propaganda.</p>

<p>This fragment is in Gallery 166 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>. It stands 12 inches (30.5 cm) tall and dates to around 14-37 CE.</p>`,
    faqs: [
      { question: "Why does Augustus look so young?", answer: "No portraits of Augustus in old age exist, even though he died at <strong>77</strong>. His image was intentionally idealized to convey timeless authority. The style drew from Classical Greek sculpture, presenting the emperor as calm and ageless rather than realistic." },
      { question: "How many Augustus portraits survive?", answer: "Over <strong>250 portraits</strong> of Augustus are known today. They were mass-produced and distributed across the Roman Empire as political messaging tools. This one at the <a href='/apps/masterpieces/museum/met'><strong>Met</strong></a> likely came from a larger seated statue." },
      { question: "Where can I see this sculpture?", answer: "It's in <strong>Gallery 166</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The marble head is 12 inches (30.5 cm) tall." }
    ]
  },

  // ============ CARACALLA PORTRAIT ============
  'marble-portrait-of-the-emperor-caracalla': {
    description: `<p>This marble head shows <strong>Emperor Caracalla</strong> (ruled 198-217 CE) with his distinctive military-style close-cropped curls and stubble beard. It's a deliberate break from the luxuriant hair and full beards of his predecessors. The curls are achieved through a technique called <strong>negative carving</strong>, where the sculptor stippled the surface rather than sculpting individual locks.</p>

<p>Caracalla's father Septimius Severus reportedly told him on his deathbed to "enrich the soldiers and despise everyone else." That aggressive character comes through in the portrait. He took the name M. Aurelius Antoninus Pius to claim legitimacy from earlier dynasties, yet his portrait style deliberately rejected theirs.</p>

<p>The head was produced at an imperial workshop in Rome. Surviving leg fragments from the full statue are displayed separately on the Met's Mezzanine Floor. It stands in Gallery 169 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Why does Caracalla look so aggressive?", answer: "The <strong>close-cropped military haircut and stubble beard</strong> were deliberate artistic choices. Caracalla wanted to project military toughness, breaking from the refined beards and curls of earlier emperors. His father's deathbed advice was to 'enrich the soldiers and despise everyone else.'" },
      { question: "Where can I see this portrait?", answer: "It's in <strong>Gallery 169</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The surviving leg fragments from the original full statue are displayed separately on the Mezzanine Floor." },
      { question: "How big is it?", answer: "The head stands <strong>14 1/4 inches (36.2 cm)</strong> tall. It dates to 212-217 CE and was likely produced at an imperial workshop in Rome during Caracalla's reign." }
    ]
  },

  // ============ CONSTANTINE HEAD ============
  'marble-portrait-head-of-the-emperor-constantine-i': {
    description: `<p>This colossal marble head represents <strong>Constantine the Great</strong> (ca. 272-337 CE), the first Christian emperor of Rome. It weighs <strong>1,100 pounds</strong> and likely belonged to an over-life-sized statue, not just a bust. At nearly 3 feet tall, it's one of the most physically imposing portraits in the Met's collection.</p>

<p>Constantine's long face, neat hairstyle, and clean-shaven look deliberately evoked Emperor Trajan, who later Romans considered the ideal ruler. This was a strategic choice. It set him apart from the Tetrarchs, his immediate predecessors, and signaled a return to classical imperial values while he was simultaneously transforming the empire's religious identity.</p>

<p>The head came from the Giustiniani Collection in Rome, documented there since before 1631. It entered the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> through the 1923 bequest of Mary Clark Thompson. It's in Gallery 169.</p>`,
    faqs: [
      { question: "How much does this sculpture weigh?", answer: "The head alone weighs <strong>1,100 pounds (499 kg)</strong>. It stands 37 1/2 inches (95.3 cm) tall, 23 inches wide, and 26 1/2 inches deep. It likely belonged to an over-life-sized statue, not just a bust." },
      { question: "Why does Constantine look like earlier emperors?", answer: "His portrait deliberately evokes <strong>Emperor Trajan</strong>, considered the ideal ruler by later Romans. The long face, neat hair, and clean-shaven look were a strategic rejection of his immediate predecessors, the Tetrarchs, while signaling classical Roman authority." },
      { question: "Where can I see this head?", answer: "It's in <strong>Gallery 169</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It came from the Giustiniani Collection in Rome and entered the Met in 1923." }
    ]
  },

  // ============ DIADOUMENOS ============
  'fragments-of-a-marble-statue-of-the-diadoumenos-youth-tying-a-fill': {
    description: `<p>This marble figure shows a young athlete tying a <strong>victory fillet</strong> (ribbon) around his head. It's a Roman copy of a lost Greek bronze by <a href="/apps/masterpieces/artist/polykleitos"><strong>Polykleitos</strong></a> of Sikyon, one of the most celebrated sculptors of antiquity. "Diadoumenos" means "the man who is tying or binding."</p>

<p>Over <strong>40 ancient copies</strong> of this composition survive, all replicating the lost original from around 430 BCE. Polykleitos authored the <em>Kanon</em>, the most famous ancient treatise on ideal human proportions. Roman workshops used plaster molds taken from Greek originals to produce copies that could be shipped anywhere in the empire.</p>

<p>This version stands 73 inches (185.4 cm) tall in Gallery 162 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>. Missing sections were supplemented with casts from a marble copy found on the island of Delos, now in the National Museum in Athens.</p>`,
    faqs: [
      { question: "What is a diadoumenos?", answer: "The word means '<strong>the man who is tying or binding</strong>.' The figure is wrapping a victory fillet (ribbon) around his head, a sign of winning an athletic competition in ancient Greece. The original bronze by Polykleitos dates to about 430 BCE." },
      { question: "How many copies exist?", answer: "Over <strong>40 ancient copies</strong> survive, all based on the lost bronze original by Polykleitos. Roman workshops made plaster molds from Greek originals and shipped them across the empire for reproduction." },
      { question: "Where can I see this sculpture?", answer: "It's in <strong>Gallery 162</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It stands 73 inches (185.4 cm) tall. Missing sections were filled using casts from a version found on Delos." }
    ]
  },

  // ============ THREE GRACES ============
  'marble-statue-group-of-the-three-graces': {
    description: `<p>Three nude female figures stand together: <strong>Aglaia</strong> (Beauty), <strong>Euphrosyne</strong> (Mirth), and <strong>Thalia</strong> (Abundance). They served as handmaidens to Aphrodite and represented the cycle of giving, accepting, and returning favors. The Roman philosopher Seneca called this cycle "the chief bond of human society."</p>

<p>This 2nd-century CE Roman group copies a Greek original from the 2nd century BCE. It was discovered in Rome in 1892 near the ancient Forum of Nerva and Vespasian's Temple of Peace. The composition became the <strong>canonical formula</strong> for depicting the Graces and was reproduced on everything from mirrors to sarcophagi for centuries.</p>

<p>It sits in Gallery 162 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, where it has been displayed since 1992 (first on loan, formally acquired in 2010).</p>`,
    faqs: [
      { question: "Who are the Three Graces?", answer: "<strong>Aglaia</strong> (Beauty), <strong>Euphrosyne</strong> (Mirth), and <strong>Thalia</strong> (Abundance). In Greek mythology, they were handmaidens to Aphrodite. Together they symbolized the cycle of generosity: giving, accepting, and returning favors." },
      { question: "Where was this found?", answer: "Discovered in <strong>Rome in 1892</strong> near the ancient Forum of Nerva and the Temple of Peace. This 2nd-century CE Roman group copies a Greek original from the 2nd century BCE." },
      { question: "Where can I see it?", answer: "<strong>Gallery 162</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It has been on display since 1992, initially on loan, and was formally acquired by the museum in 2010." }
    ]
  },

  // ============ DIONYSOS SARCOPHAGUS ============
  'marble-sarcophagus-with-the-triumph-of-dionysos-and-the-seasons': {
    description: `<p>This monumental marble sarcophagus shows the god <strong>Dionysos seated on a panther</strong>, flanked by four large standing figures representing the Seasons: Winter, Spring, Summer, and Fall. A bearded river-god reclines at one end, accompanied by two winged youths. The carving is deeply cut and virtuosic.</p>

<p>Only a very wealthy person could have commissioned this. The marble came from an <strong>eastern Mediterranean quarry</strong> and was shipped to Rome for carving, revealing the empire's vast luxury trade networks. Dionysiac scenes on sarcophagi evoked celebration and offered hope for a pleasurable afterlife. The design came from a sculptor's pattern book rather than reflecting any personal significance for the deceased.</p>

<p>It dates to around 260-270 CE and measures 34 x 85 x 36 inches. It's in Gallery 162 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was buried in this sarcophagus?", answer: "The owner is unknown, but only <strong>a very wealthy and powerful person</strong> could have afforded it. The marble was quarried in the eastern Mediterranean and shipped to Rome. The design came from a pattern book, meaning it wasn't custom-made for the individual." },
      { question: "What does the scene depict?", answer: "<strong>Dionysos seated on a panther</strong>, flanked by four figures representing the Seasons. Dionysiac imagery on sarcophagi expressed hope for a joyful afterlife. The cult of Dionysos offered believers the promise of celebration beyond death." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 162</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It measures 34 x 85 x 36 inches and dates to around 260-270 CE." }
    ]
  },

  // ============ HOPE DIONYSOS ============
  'statue-of-dionysos-leaning-on-a-female-figure-hope-dionysos': {
    description: `<p>This over-life-size marble statue shows <strong>Dionysos</strong>, god of wine, wearing a panther skin over a short chiton and high sandals with animal heads on the skin flaps. He leans on an archaistic female figure whose pose and dress deliberately imitate Greek statues from two centuries earlier, a practice called archaism.</p>

<p>The statue is named after <strong>Thomas Hope</strong>, the prominent English collector who acquired it in 1796. The Italian sculptor Vincenzo Pacetti restored it in the 18th century. It adapts a Greek original from the 4th century BCE and dates to the Augustan or Julio-Claudian period (27 BCE to 68 CE).</p>

<p>Standing 82 3/4 inches (210.2 cm) tall, it serves as the centerpiece of the Met's Roman sculpture court. It's in Gallery 162 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Why is it called the 'Hope' Dionysos?", answer: "Named after <strong>Thomas Hope</strong>, a wealthy English collector who purchased it in 1796. The 'Hope' designation has followed the statue ever since. Pacetti, a well-known 18th-century restorer, worked on it before Hope acquired it." },
      { question: "How tall is it?", answer: "It stands <strong>82 3/4 inches (210.2 cm)</strong> tall. It's the centerpiece of the Met's Roman sculpture court in Gallery 162 at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>." },
      { question: "What is the smaller figure?", answer: "An <strong>archaistic female figure</strong> whose pose and dress deliberately imitate 6th-century BCE Greek statues, even though this sculpture was made centuries later. This intentional reference to older artistic styles is called archaism." }
    ]
  },

  // ============ BRONZE CHARIOT ============
  'bronze-chariot-inlaid-with-ivory': {
    description: `<p>Known as the <strong>Monteleone Chariot</strong>, this is the best-preserved Etruscan chariot from ancient Italy before the Roman period. Three bronze relief panels depict scenes from the life of Achilles: the center shows him receiving armor from his mother Thetis, the left shows him fighting Memnon, king of the Ethiopians, and the right shows him ascending on a chariot drawn by winged horses.</p>

<p>It was discovered accidentally in 1902 when a landowner in <strong>Monteleone di Spoleto</strong> was working his property and uncovered a subterranean tomb covered by a mound. The chariot held two people and was drawn by two horses roughly the size of modern ponies. Ivory inlays made it unusually luxurious, likely built for an important figure from southern Etruria.</p>

<p>The Met purchased it in 1903 through General Luigi Palma di Cesnola, the museum's first director. It's in Gallery 170 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>. Total height is 51 9/16 inches with a pole length of 82 1/4 inches.</p>`,
    faqs: [
      { question: "How was this chariot found?", answer: "Discovered <strong>accidentally in 1902</strong> when a landowner in Monteleone di Spoleto, Italy, was working his property and uncovered a subterranean tomb covered by a mound. The Met purchased it the following year." },
      { question: "What scenes are depicted?", answer: "Three panels from the <strong>life of Achilles</strong>: receiving armor from his mother Thetis (center), fighting Memnon, king of the Ethiopians (left), and ascending on a chariot drawn by winged horses (right)." },
      { question: "Was it used in battle?", answer: "No. This was a <strong>ceremonial parade vehicle</strong>, not a war chariot. It held two people (driver and passenger) and was drawn by two horses roughly the size of modern ponies. The ivory inlays confirm it was built for display, not combat." }
    ]
  },

  // ============ BRONZE MAN AND CENTAUR ============
  'bronze-man-and-centaur': {
    description: `<p>One of the oldest known Greek bronze figural groups, dating to roughly <strong>750 BCE</strong>. A man is locked in combat with a centaur, probably Herakles fighting Nessos after the centaur attacked Herakles' wife Dejanira. A weapon-head projects from the centaur's left side.</p>

<p>The eyes tell the story of ancient metalwork at its finest. The man's eyes were inlaid with <strong>silver</strong>, while the centaur's used <strong>reddish iron</strong>, creating a deliberate contrast between hero and beast. It stands just 4.4 inches (11.1 cm) tall, yet every detail is precise. Made using the lost-wax casting process, it comes from a Laconian Geometric workshop, possibly from Olympia.</p>

<p>J. Pierpont Morgan gifted it posthumously to the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1917. It's in the Greek and Roman Art galleries.</p>`,
    faqs: [
      { question: "How old is this sculpture?", answer: "It dates to roughly <strong>750 BCE</strong>, making it about 2,775 years old. It's one of the earliest known Greek bronze figural groups, from the Late Geometric period." },
      { question: "What do the different eye materials mean?", answer: "The man's eyes were inlaid with <strong>silver</strong>, while the centaur's used <strong>reddish iron</strong>. This deliberate contrast distinguished the hero from the beast, showing ancient artists used material choices to tell the story." },
      { question: "How small is it?", answer: "Just <strong>4.4 inches (11.1 cm)</strong> tall. Despite its tiny size, the detail is precise. It was made using the lost-wax casting method and likely came from a workshop in Laconia or Olympia." }
    ]
  },

  // ============ OLD MARKET WOMAN ============
  'marble-statue-of-an-old-market-woman': {
    description: `<p>An elderly woman carries a basket of fruit and two chickens, wearing an ivy wreath linked to the god Dionysos. She's likely a devotee heading to or from a <strong>Dionysiac festival</strong>. This Roman copy dates to the 1st century CE, but the original was a Greek work from the late 2nd century BCE.</p>

<p>It's a landmark of <strong>Hellenistic realism</strong>. Classical Greek sculpture idealized youth and beauty. Hellenistic artists broke from that tradition, depicting ordinary people in all stages of life. This stooped, aged figure captures that shift with unflinching naturalism. No attempt to flatter, no idealization.</p>

<p>Found in 1907 beneath a demolished building in Rome, it now stands in the Greek and Roman galleries at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>. It's about 50 inches (127 cm) tall.</p>`,
    faqs: [
      { question: "Why is she wearing an ivy wreath?", answer: "The ivy wreath connects her to <strong>Dionysos</strong>, god of wine. She's likely a devotee carrying offerings (fruit and chickens) to or from a Dionysiac festival. The original Greek version may have been dedicated in a sanctuary of Dionysos." },
      { question: "Why is this sculpture important?", answer: "It's a defining example of <strong>Hellenistic realism</strong>. Earlier Greek sculpture idealized youth and beauty. This unflinching depiction of old age marks a major shift in art history: artists began showing real people as they actually looked." },
      { question: "Where was it found?", answer: "Discovered in <strong>1907 beneath a demolished building in Rome</strong>. It's a Roman copy of a Greek original from the late 2nd century BCE, now at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>." }
    ]
  },

  // ============ SAINT JOHN THE BAPTIST (MONTANES) ============
  'saint-john-the-baptist': {
    description: `<p><a href="/apps/masterpieces/artist/juan-martinez-montanes"><strong>Juan Martínez Montañés</strong></a> carved this polychromed wood figure around 1620-1630. It was called "the most beautiful figure of Saint John the Baptist ever made" by Montañés in an 1844 account. He was arguably Spain's greatest sculptor of the first half of the 17th century.</p>

<p>In the Spanish tradition, the sculptor and painter were <strong>different specialists</strong>. Montañés carved the figure from wood, and a separate artist applied the polychrome decoration (paint and gilding). A small hole in the base suggests a missing attribute, likely a banner or the Lamb of God. The figure originally came from the <strong>Sevillian Convent of Nuestra Señora de la Concepción</strong>, suppressed in 1837.</p>

<p>It stands 60 5/8 x 29 5/8 x 27 5/8 inches and was acquired by the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1963.</p>`,
    faqs: [
      { question: "Why is a wooden sculpture painted?", answer: "In 17th-century Spain, <strong>polychromed wood sculpture</strong> was the dominant form. The carver and painter were separate specialists. Montañés carved the figure, then a trained painter applied flesh tones, gilding, and decorative patterns to bring it to life." },
      { question: "Where did this originally come from?", answer: "The <strong>Sevillian Convent of Nuestra Señora de la Concepción</strong> in Spain, which was suppressed in 1837. The <a href='/apps/masterpieces/museum/met'><strong>Met</strong></a> acquired it in 1963." },
      { question: "Who was Montañés?", answer: "Spain's greatest sculptor of the early 17th century. He worked in <strong>Seville</strong> and specialized in polychromed wood religious figures. His works were so lifelike that contemporaries said they appeared to breathe." }
    ]
  },

  // ============ MARSYAS (PERMOSER) ============
  'marsyas': {
    description: `<p><a href="/apps/masterpieces/artist/balthasar-permoser"><strong>Balthasar Permoser</strong></a> carved this marble around 1680-1685, early in his career while working in Italy. It depicts the satyr <strong>Marsyas screaming in agony</strong> as he is flayed alive for losing a musical contest to the god Apollo. Every detail conveys torment: squinting eyes, torn tongue, and flame-like hair standing on end.</p>

<p>Permoser was deeply influenced by Bernini, particularly his 1619 sculpture "Damned Soul." The deliberately rough, flame-like hair contrasts sharply with the precise anatomical carving of the face and body. The unfinished back and a bracket emplacement suggest it was designed for a <strong>wall niche</strong>, probably in a palace courtyard.</p>

<p>Made of marble with a black marble socle, it measures 27 x 17 3/8 x 11 1/8 inches. It's in the Carroll and Milton Petrie European Sculpture Court at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, acquired in 2002.</p>`,
    faqs: [
      { question: "What is the myth of Marsyas?", answer: "The satyr <strong>Marsyas challenged Apollo to a music contest</strong> and lost. As punishment, Apollo had him flayed alive. This sculpture captures the moment of agony. The myth served as a warning against hubris: challenging a god meant destruction." },
      { question: "Who influenced this sculpture?", answer: "Permoser was strongly influenced by <strong>Bernini</strong>, especially his 1619 sculpture 'Damned Soul.' Both works capture extreme facial agony, but Permoser adds contrasting textures: rough, flame-like hair against precisely carved anatomy." },
      { question: "Where can I see this?", answer: "The <strong>Petrie European Sculpture Court</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The Met acquired it in 2002. It measures 27 x 17 3/8 x 11 1/8 inches." }
    ]
  },

  // ============ EIRENE (PEACE) ============
  'marble-statue-of-eirene-the-personification-of-peace': {
    description: `<p><strong>Eirene</strong> (Peace) holds the child <strong>Ploutos</strong> (Wealth) on her left arm, along with a cornucopia and scepter. The pairing expressed a powerful Greek idea: prosperity depends on peace. This Roman copy dates to the 1st century CE, but the lost Greek bronze original by the sculptor <strong>Kephisodotos</strong> was made around 370 BCE.</p>

<p>The Greek traveler Pausanias saw the original bronze in the Athenian Agora in the 2nd century CE. He recorded that Kephisodotos was likely the father or uncle of <strong>Praxiteles</strong>, one of the most famous sculptors of antiquity. The figure's appearance deliberately evokes Demeter, goddess of agricultural plenty and the mythological mother of Ploutos.</p>

<p>Athens commissioned the original during a period of recovery from decades of war. It stands 69 3/4 inches (177.2 cm) tall at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What does this statue represent?", answer: "<strong>Eirene</strong> (Peace) holding the child <strong>Ploutos</strong> (Wealth). The message was political: Athens commissioned this after decades of war, arguing that prosperity could only come through peace. The original stood in the Athenian Agora." },
      { question: "Who made the original?", answer: "<strong>Kephisodotos</strong>, a Greek sculptor active around 370 BCE, likely the father or uncle of the famous Praxiteles. This marble at the Met is a Roman copy. The lost Greek bronze original stood in the Athenian Agora." },
      { question: "How big is it?", answer: "The statue stands <strong>69 3/4 inches (177.2 cm)</strong> tall without its plinth. It's a Roman copy from the 1st century CE at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>." }
    ]
  },

  // ============ PATIO FROM VELEZ BLANCO ============
  'patio-from-the-castle-of-velez-blanco': {
    description: `<p>A complete <strong>Renaissance courtyard patio</strong> measuring 33 feet high, 44 feet wide, and 63 feet long. Don Pedro Fajardo, first Marqués of Vélez, commissioned it between 1506 and 1515 for his castle in Andalusia, Spain. The marble comes from <strong>Macael in the Sierra de Filabres</strong>. Carved motifs include classical masks, sphinxes, dragons, vases, and birds eating berries.</p>

<p>George Blumenthal, president of the Met, bought the patio in 1913 and installed it as the centerpiece of his Park Avenue mansion. After his death in 1941, it was donated to the museum. The blocks sat in storage until curator <strong>Olga Raggio</strong> spent five years researching and reconstructing it, finally installing it in 1964.</p>

<p>It blends Spanish Gothic structure (asymmetrical layout, gargoyles, segmental arches) with Italian Renaissance decorative carving. A Flemish tapestry, <em>The Triumph of Fame</em>, hangs on its east wall. It's at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "How big is this patio?", answer: "<strong>33 feet high, 44 feet wide, and 63 feet long</strong>. It's made from Macael marble from the Sierra de Filabres in Spain. The carved motifs include masks, sphinxes, dragons, and birds eating berries." },
      { question: "How did a Spanish castle end up in New York?", answer: "Met president <strong>George Blumenthal</strong> bought it in 1913 and installed it in his Park Avenue mansion. He donated it to the museum upon his death in 1941. It took curator Olga Raggio five years to research and reconstruct it, opening in 1964." },
      { question: "When was it built?", answer: "Between <strong>1506 and 1515</strong> for Don Pedro Fajardo, first Marqués of Vélez, at his castle in Andalusia. It blends Spanish Gothic architecture with Italian Renaissance decorative carving." }
    ]
  },

  // ============ STELA OF MENTUWOSER ============
  'stela-of-the-steward-mentuwoser': {
    description: `<p>This painted limestone stela honors <strong>Mentuwoser</strong>, an official who served as steward, granary official, and overseer of domestic animals (including pigs) during Egypt's Middle Kingdom. King Senwosret I personally presented it in year 17 of his reign, around <strong>1944 BCE</strong>.</p>

<p>The inscription addresses three audiences: scribes who could read it, people who would hear it read aloud, and general visitors. Mentuwoser is praised as someone who "looked after the poor and buried the dead," revealing the moral values Egyptian officials wanted recorded for eternity. It's one of the few stelae datable to an exact regnal year.</p>

<p>It measures 103 x 50.5 cm and stands in Gallery 110 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was Mentuwoser?", answer: "An Egyptian official who served as <strong>steward, granary official, and overseer of domestic animals</strong>. King Senwosret I personally awarded him this stela around 1944 BCE. He's praised for 'looking after the poor and burying the dead.'" },
      { question: "Why is this stela important?", answer: "It's one of the few Egyptian stelae datable to an <strong>exact regnal year</strong> (year 17 of Senwosret I), making it valuable for Egyptian chronology. The inscription also reveals moral values: caring for the poor and burying the dead were key virtues." },
      { question: "Where can I see it?", answer: "<strong>Gallery 110</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's painted limestone, measuring 103 x 50.5 cm, dating to around 1944 BCE." }
    ]
  },

  // ============ MEMI AND SABU ============
  'the-king-s-acquaintances-memi-and-sabu': {
    description: `<p>A painted limestone pair statue of <strong>Memi</strong> and his wife <strong>Sabu</strong>, standing side by side in a mutual embrace. Their title "King's Acquaintances" means they had access to the royal court during Egypt's <strong>Old Kingdom, Dynasty 4</strong> (ca. 2575-2465 BCE).</p>

<p>The pose is unusual because Memi returns Sabu's embrace by draping his arm around her shoulders, showing a rare level of mutual affection in Old Kingdom sculpture. Most pair statues of this era show the woman touching the man but not the reverse. Scholars recently redated this piece from Dynasty 5-6 to Dynasty 4 based on Sabu's hairstyle and the reciprocated embrace.</p>

<p>It was placed in a <strong>serdab</strong> (hidden statue chamber) inside their tomb chapel, serving as a spiritual anchor for the deceased. It weighs 28.8 kg and stands in Gallery 103 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Why is this statue special?", answer: "Memi <strong>returns his wife's embrace</strong>, draping his arm around her shoulders. Most Old Kingdom pair statues show only the woman touching the man. This mutual affection is rare and was one reason scholars recently redated the statue to Dynasty 4." },
      { question: "What is a serdab?", answer: "A <strong>hidden statue chamber</strong> inside an Egyptian tomb chapel. The pair statue was placed there as a spiritual anchor, giving the deceased's soul a physical form to inhabit. A small slit in the wall allowed offerings to reach the statue." },
      { question: "Where can I see it?", answer: "<strong>Gallery 103</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's painted limestone from Dynasty 4 (ca. 2575-2465 BCE), weighing 28.8 kg." }
    ]
  },

  // ============ KING SAHURE ============
  'king-sahure-and-a-nome-god': {
    description: `<p>King <strong>Sahure</strong>, the second ruler of Dynasty 5, sits on a throne accompanied by a smaller male figure representing the local god of the Coptite nome (fifth province of Upper Egypt). This is the <strong>only known three-dimensional representation</strong> of this pharaoh. No other surviving sculpture has been identified as Sahure.</p>

<p>Though only half life-size, the statue weighs <strong>280 pounds (127 kg)</strong> due to the density of gneiss, an extremely hard stone. The king wears the nemes headcloth, ceremonial false beard, and protective uraeus cobra on his brow. The smaller divine figure beside him illustrates nome personification, where Egyptian provinces were depicted as deities accompanying the pharaoh.</p>

<p>It dates to around 2458-2446 BCE and stands in Gallery 103 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Why is this sculpture unique?", answer: "It's the <strong>only known three-dimensional representation</strong> of King Sahure, the second ruler of Egypt's Dynasty 5 (ca. 2458-2446 BCE). No other surviving sculpture has been identified as this pharaoh." },
      { question: "How heavy is it?", answer: "Despite being only half life-size, it weighs <strong>280 pounds (127 kg)</strong> because it's carved from gneiss, an extremely dense and hard stone. Carving gneiss required enormous patience and skill." },
      { question: "Who is the smaller figure?", answer: "A personification of the <strong>Coptite nome</strong> (fifth province of Upper Egypt). Egyptian provinces were represented as divine figures accompanying the pharaoh, a convention called nome personification." }
    ]
  },

  // ============ CAT STATUETTE ============
  'cat-statuette-intended-to-contain-a-mummified-cat': {
    description: `<p>This sleek <strong>leaded bronze cat</strong> sits upright with controlled power in its muscles and long legs. It was designed as a hollow container for a mummified cat offered at a temple of the goddess <strong>Bastet</strong>. The pierced right ear once held a gold ring (now lost), and a wedjat-eye pendant hangs from its incised necklace.</p>

<p>Cats were first domesticated by Egyptians during the Middle Kingdom for catching mice. They later became household companions and sacred to Bastet. Mummified cats in bronze or wooden containers were donated at her temples, especially at <strong>Bubastis and Saqqara</strong>, then buried in vast underground catacombs.</p>

<p>It dates to the Ptolemaic Period (332-30 BCE), stands 27.4 cm (10.8 inches) tall, and is one of the finest examples of Late Period animal bronzework. It's in Gallery 134 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What was inside this statue?", answer: "A <strong>mummified cat</strong>. Bronze cat containers like this were offered at temples of the goddess Bastet, then buried in underground catacombs. Major sites for cat mummy burials include Bubastis and Saqqara." },
      { question: "Why were cats sacred in Egypt?", answer: "Cats were sacred to <strong>Bastet</strong>, a major Egyptian goddess. First domesticated for catching mice during the Middle Kingdom, cats became household companions and eventually objects of religious devotion." },
      { question: "Where can I see it?", answer: "<strong>Gallery 134</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's leaded bronze from the Ptolemaic Period, standing 27.4 cm tall. The right ear originally held a gold ring, now lost." }
    ]
  },

  // ============ GOLD STATUETTE OF AMUN ============
  'statuette-of-amun': {
    description: `<p>Cast in <strong>solid gold</strong>, this standing figure of the god Amun is an extremely rare surviving example of the precious-metal statuary that ancient descriptions say filled temple sanctuaries. Most were melted down centuries ago. It weighs 0.9 kg (2 pounds) and stands 17.5 cm (6.9 inches) tall.</p>

<p>Amun wears his characteristic flat-topped crown (originally with two tall gold feathers, now missing), holds an ankh in his left hand, and carries a scimitar across his chest. Traces of a loop on the crown suggest it could be <strong>suspended and worn by a temple celebrant</strong> or mounted atop a ceremonial standard.</p>

<p>For Egyptians, gold's color and sheen were associated with the sun, and the skin of gods was believed to be made of gold. This statuette literally embodies that belief. It's from Dynasty 22 (ca. 945-712 BCE), probably from Karnak, and is in Gallery 125 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Is this really solid gold?", answer: "Yes. It's cast in <strong>solid gold</strong>, weighing 0.9 kg (2 pounds). Ancient Egyptians believed the skin of gods was made of gold, so this statuette literally embodied that theology. It's one of the rarest types of surviving Egyptian art." },
      { question: "Why are gold statues so rare?", answer: "Nearly all ancient gold statuary was <strong>melted down</strong> over the centuries for its material value. Temple sanctuaries were described as full of gold figures, but almost none survived. This piece is an extraordinary exception." },
      { question: "Where can I see it?", answer: "<strong>Gallery 125</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's from Dynasty 22 (ca. 945-712 BCE), probably from Karnak in Thebes. It stands 17.5 cm tall." }
    ]
  },

  // ============ AKHENATEN SACRIFICING A DUCK ============
  'akhenaten-sacrificing-a-duck': {
    description: `<p>This limestone relief shows Pharaoh <strong>Akhenaten</strong> wringing a duck's neck before offering it to the Aten, the solar disk. The scene captures a single moment of action that the Met notes "would never have been attempted in an earlier period." It's a defining example of <strong>Amarna-period naturalism</strong>.</p>

<p>The artist used <strong>sunk relief</strong>, cutting outlines into the stone surface so shadows emphasize sunlight. This block originally joined with a piece now in Copenhagen, revealing that both Akhenaten and his wife Kiya performed the ritual together under the Aten's rays. The duck sacrifice was part of Akhenaten's revolutionary religious reforms, which focused worship on a single solar deity.</p>

<p>It measures 25 x 55 cm and dates to ca. 1353-1336 BCE. It's in Gallery 121 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Why is this relief important?", answer: "It captures a <strong>single moment of action</strong> (wringing a bird's neck) that would never have been attempted in earlier Egyptian art. The Amarna period introduced naturalism and movement to a tradition that had been static for centuries." },
      { question: "What is sunk relief?", answer: "A technique where <strong>outlines are cut into the stone surface</strong> rather than raised above it. Shadows from direct sunlight emphasize the image. It was the dominant method for Egyptian temple exteriors during the Amarna period." },
      { question: "Where is the other half?", answer: "A joining block is in <strong>Copenhagen</strong>. Together they show Akhenaten and his wife Kiya performing the ritual under the Aten's rays. This piece is in Gallery 121 at the <a href='/apps/masterpieces/museum/met'><strong>Met</strong></a>." }
    ]
  },

  // ============ FUNERARY FIGURE OF AKHENATEN ============
  'funerary-figure-of-akhenaten': {
    description: `<p>The <strong>only known complete funerary figure</strong> (shabti) of the pharaoh Akhenaten. He wears a royal beard and khat headdress with a protective cobra (uraeus) at the brow. Made from granite, it stands just 10 5/8 inches tall and dates to around 1353-1336 BCE.</p>

<p>Over 200 shabti fragments inscribed for Akhenaten are known, but this is the only one that survived intact. There's a paradox here: shabtis were connected to <strong>Osiris worship</strong>, which Akhenaten banned when he imposed monotheistic worship of the Aten. Yet over 200 fragments exist. The king's shabtis carry only his names and titles, lacking the standard Book of the Dead spell (Chapter 6) that compelled the figure to work in the afterlife.</p>

<p>It's in Gallery 121 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Why is this shabti unique?", answer: "It's the <strong>only known complete funerary figure</strong> of Akhenaten. Over 200 fragments exist, but no other survived intact. It's made from granite and stands just 10 5/8 inches tall." },
      { question: "What is a shabti?", answer: "A <strong>funerary servant figure</strong> buried with the dead, meant to perform labor in the afterlife. Most shabtis carry a spell from the Book of the Dead compelling them to work. Akhenaten's shabtis lack this spell, carrying only his names and titles." },
      { question: "Why is it paradoxical?", answer: "Shabtis were linked to <strong>Osiris worship</strong>, which Akhenaten banned when he imposed worship of the Aten. Yet over 200 shabti fragments for Akhenaten exist, showing traditional afterlife beliefs persisted even during his religious revolution." }
    ]
  },

  // ============ SEATED IMHOTEP ============
  'statue-of-seated-imhotep': {
    description: `<p>A small seated figure of <strong>Imhotep</strong> holding an open papyrus scroll, made from cupreous metal with precious metal inlay. Imhotep oversaw construction of Egypt's first monumental stone pyramid (the Step Pyramid at Saqqara) around 2650 BCE, over two thousand years before this statue was made.</p>

<p>By the Ptolemaic Period (332-30 BCE), Imhotep had been <strong>deified</strong>. He was invoked as patron of writing and wisdom, and people sought his help with sickness and infertility. The Greeks later equated him with their god of medicine, <strong>Asklepios</strong>. He's almost always depicted in this same pose: seated, holding a scroll.</p>

<p>It stands just 14 cm (5.5 inches) tall. Formerly part of the Carnarvon Collection, it's in Gallery 134 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was Imhotep?", answer: "The architect who oversaw construction of Egypt's <strong>first monumental stone pyramid</strong> (the Step Pyramid at Saqqara) around 2650 BCE. He was deified centuries later and became patron of writing, wisdom, and healing. The Greeks equated him with Asklepios." },
      { question: "Why was he worshipped?", answer: "Imhotep was invoked for help with <strong>sickness and infertility</strong>, and revered as patron of writing and wisdom. His deification is rare: very few non-royal Egyptians achieved divine status." },
      { question: "Where can I see this?", answer: "<strong>Gallery 134</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's from the Ptolemaic Period (332-30 BCE), just 14 cm tall, made from metal with precious metal inlay." }
    ]
  },

  // ============ STRIDING THOTH ============
  'striding-figure-of-thoth': {
    description: `<p>The ibis-headed god <strong>Thoth</strong> strides forward in shining blue faience, perfectly preserved after over two thousand years. Thoth was the god of wisdom, creator of languages, scribe of the gods, and recordkeeper of the underworld. He was associated with two animals: the ibis and the baboon.</p>

<p>This figurine dates to the <strong>Ptolemaic Period</strong> (332-30 BCE) and stands 14.1 cm (5.6 inches) tall. It was formerly part of the <strong>Carnarvon Collection</strong>, the same Lord Carnarvon who funded Howard Carter's discovery of Tutankhamun's tomb.</p>

<p>It's in Gallery 134 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, acquired in 1926.</p>`,
    faqs: [
      { question: "Who is Thoth?", answer: "The Egyptian <strong>god of wisdom, writing, and the moon</strong>. He was the scribe of the gods and recordkeeper of the underworld. He's shown with a human body and ibis head, though he was also associated with baboons." },
      { question: "What is faience?", answer: "A <strong>glazed ceramic made from crushed quartz</strong>. Its bright blue-green color symbolized rebirth and the waters of the Nile. Egyptian faience is not the same as European tin-glazed pottery that shares the name." },
      { question: "Where can I see this?", answer: "<strong>Gallery 134</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's from the Ptolemaic Period and formerly part of the Carnarvon Collection." }
    ]
  },

  // ============ AMENHOTEP III ============
  'standing-figure-of-amenhotep-iii': {
    description: `<p>A small standing figure of <strong>Amenhotep III</strong> carved from chlorite schist. The portly profile identifies this as a work from late in his reign, around 1390-1352 BCE. A djed-pillar (symbol of stability) forms the back pillar, and inscriptions link the king with the Theban god Amun-Re.</p>

<p>Scholars suggest this was dedicated during Amenhotep's <strong>third Heb-Sed</strong> (royal rejuvenation ceremony) in year 37 of his reign. Only a handful of pharaohs celebrated three such festivals. The pleated sleeve detail on the right arm is an innovation that became universal during his son <strong>Akhenaten's</strong> reign and continued long afterward.</p>

<p>It stands 22.2 cm tall and is in Gallery 119 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, from the Theodore M. Davis Collection.</p>`,
    faqs: [
      { question: "What is a Heb-Sed festival?", answer: "A <strong>royal rejuvenation ceremony</strong> meant to renew the pharaoh's strength and right to rule. This statue may have been dedicated during Amenhotep III's third Heb-Sed in year 37 of his reign. Very few pharaohs ruled long enough to celebrate three." },
      { question: "Why does he look heavy?", answer: "The <strong>portly body</strong> is a deliberate artistic choice from late in his reign. Later portraits of Amenhotep III show a heavier figure, possibly reflecting his actual aging or a new artistic convention for depicting mature authority." },
      { question: "Where can I see this?", answer: "<strong>Gallery 119</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It's from the Theodore M. Davis Collection, 22.2 cm tall, carved from chlorite schist." }
    ]
  },
};

async function main() {
  const slugs = Object.keys(enrichments);
  console.log(`Enriching ${slugs.length} sculptures...`);

  let updated = 0;
  let notFound = 0;
  let failed = 0;

  for (const slug of slugs) {
    const data = enrichments[slug];
    try {
      const existing = await prisma.artwork.findFirst({
        where: { slug },
        select: { id: true, title: true }
      });

      if (!existing) {
        // Try partial match
        const partial = await prisma.artwork.findFirst({
          where: { slug: { startsWith: slug.slice(0, 30) }, artworkType: 'sculpture' },
          select: { id: true, title: true, slug: true }
        });
        if (partial) {
          await prisma.artwork.update({
            where: { id: partial.id },
            data: {
              description: data.description,
              faqs: data.faqs,
              updatedAt: new Date(),
            }
          });
          updated++;
          console.log(`✓ ${partial.title} (matched via partial: ${partial.slug})`);
          continue;
        }
        console.log(`✗ Not found: ${slug}`);
        notFound++;
        continue;
      }

      await prisma.artwork.update({
        where: { id: existing.id },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date(),
        }
      });
      updated++;
      console.log(`✓ ${existing.title}`);
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
