const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Tier 1 Sculpture Descriptions ===\n');

  const updates = [
    {
      slug: 'apollo-and-daphne-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> carved this breathtaking marble sculpture between 1622 and 1625, capturing the exact moment the nymph Daphne transforms into a laurel tree to escape the god Apollo. The work stands as one of the <strong>Baroque period's</strong> greatest achievements in stone.</p>

<p>Bernini was only 24 when he completed this piece for Cardinal Scipione Borghese. The technical mastery is staggering. Daphne's fingers sprout delicate leaves, her toes become roots, and bark creeps up her leg, all carved from a single block of Carrara marble. The figures seem frozen mid-motion, Apollo's hand pressing into what was flesh just moments before.</p>

<p>The sculpture resides in the <a href="/apps/masterpieces/museum/galleria-borghese"><strong>Galleria Borghese</strong></a> in Rome, displayed in the same room where Borghese originally placed it. Visitors can walk around the full 360 degrees, revealing new details from every angle. A moral inscription on the base warns that pursuing fleeting pleasures leaves you grasping at leaves and bitter fruit.</p>`,
      faqs: [
        {
          question: "Where can I see Apollo and Daphne?",
          answer: "The sculpture is displayed at the <a href=\"/apps/masterpieces/museum/galleria-borghese\"><strong>Galleria Borghese</strong></a> in Rome, Italy. Advance reservations are required as the museum limits visitor numbers. The work occupies Room III on the ground floor."
        },
        {
          question: "What story does Apollo and Daphne depict?",
          answer: "The sculpture shows the climax of a myth from <strong>Ovid's Metamorphoses</strong>. Apollo, struck by Cupid's golden arrow, pursues the nymph Daphne. She prays to her father, the river god, who transforms her into a laurel tree to save her from Apollo."
        },
        {
          question: "How big is Apollo and Daphne?",
          answer: "The sculpture stands <strong>243 centimeters tall</strong> (about 8 feet). Bernini carved both figures and the tree transformation from a single block of Carrara marble, a technical feat that still astonishes sculptors today."
        },
        {
          question: "How old was Bernini when he made this?",
          answer: "<a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini</strong></a> began the work at age 23 and completed it at 24. Cardinal Scipione Borghese commissioned it as a companion to The Rape of Proserpina. The young sculptor was already considered a prodigy in Rome."
        }
      ]
    },
    {
      slug: 'rape-of-proserpina-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> sculpted this violent masterpiece between 1621 and 1622, depicting Pluto abducting Proserpina to the underworld. The <strong>Baroque sculpture</strong> demonstrates an almost impossible softness in stone, with Pluto's fingers pressing visibly into the goddess's thigh.</p>

<p>Cardinal Scipione Borghese commissioned the 23-year-old Bernini to create this work. The sculpture captures pure terror and brute force. Proserpina twists away from her captor, tears streaming down her face, while Pluto's three-headed dog Cerberus howls at the base. The marble seems to defy physics, appearing as flesh and fabric rather than stone.</p>

<p>The work sits in the <a href="/apps/masterpieces/museum/galleria-borghese"><strong>Galleria Borghese</strong></a> in Rome, where it has remained since its creation. Walking around the piece reveals different emotional moments. From behind, you see Pluto's triumphant stride. From the front, Proserpina's desperate struggle dominates. Bernini designed the sculpture to be viewed from multiple angles, each telling a different part of the story.</p>`,
      faqs: [
        {
          question: "Where is The Rape of Proserpina located?",
          answer: "The sculpture is housed at the <a href=\"/apps/masterpieces/museum/galleria-borghese\"><strong>Galleria Borghese</strong></a> in Rome. It occupies Room IV on the ground floor. The museum requires advance timed reservations for entry."
        },
        {
          question: "What is the myth behind this sculpture?",
          answer: "The work depicts <strong>Pluto abducting Proserpina</strong> (Persephone in Greek) to become queen of the underworld. Her mother Ceres searches for her, causing winter. When Proserpina returns each spring, the earth blooms again."
        },
        {
          question: "Why do Pluto's fingers sink into her flesh?",
          answer: "Bernini carved the marble to create the illusion of <strong>soft flesh yielding under pressure</strong>. This detail, showing Pluto's fingers dimpling Proserpina's thigh, demonstrates his revolutionary technique and remains one of art history's most celebrated effects."
        },
        {
          question: "How tall is The Rape of Proserpina?",
          answer: "The sculpture stands <strong>255 centimeters tall</strong> (about 8.4 feet) including its base. <a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini</strong></a> was just 23 years old when he completed this technically demanding work."
        }
      ]
    },
    {
      slug: 'ecstasy-of-saint-teresa',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> created this theatrical masterpiece between 1647 and 1652 for the Cornaro Chapel in Rome. The sculpture depicts <strong>Saint Teresa of Ávila</strong> in a moment of divine rapture, an angel preparing to pierce her heart with a golden arrow of God's love.</p>

<p>Bernini designed the entire chapel as a stage set. Bronze rays descend from a hidden window, bathing the white marble figures in golden light. Teresa's robes cascade in agitated folds, her head thrown back, mouth open, eyes half-closed. The angel smiles gently, holding his arrow like a lover about to strike. On the side walls, marble members of the Cornaro family watch from theater boxes.</p>

<p>The sculpture resides in the <strong>Santa Maria della Vittoria church</strong> in Rome, near Termini station. Teresa wrote that this vision left her "utterly consumed by the great love of God," and Bernini translated her words into stone with startling literalness. The work sparked controversy even in his time for its sensual intensity, but it remains the ultimate expression of <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> religious art.</p>`,
      faqs: [
        {
          question: "Where can I see the Ecstasy of Saint Teresa?",
          answer: "The sculpture is located in the <strong>Cornaro Chapel</strong> of Santa Maria della Vittoria church in Rome, near Termini station. Unlike many museums, the church is free to enter, though donations are appreciated."
        },
        {
          question: "What moment does the sculpture capture?",
          answer: "It depicts a vision described by <strong>Saint Teresa of Ávila</strong> in her autobiography. An angel repeatedly pierced her heart with a golden spear, causing both pain and overwhelming spiritual joy. Teresa described being \"utterly consumed\" by divine love."
        },
        {
          question: "Why is this sculpture controversial?",
          answer: "The intensity of Teresa's expression has been read as <strong>erotic rather than purely spiritual</strong>. Her parted lips, closed eyes, and limp body suggest physical ecstasy. Bernini deliberately blurred the line between sacred rapture and sensual experience."
        },
        {
          question: "How did Bernini light the sculpture?",
          answer: "<a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini</strong></a> designed a hidden window above the sculpture. Natural light streams through yellow glass, illuminating gilded bronze rays that descend toward Teresa. The effect transforms stone into a vision of divine intervention."
        }
      ]
    },
    {
      slug: 'david-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> sculpted this dynamic marble David in 1623-1624, showing the biblical hero at the moment of action, his body twisted as he prepares to release his sling. Unlike earlier Renaissance versions, this David is caught mid-motion, muscles tensed, face grimacing with concentration.</p>

<p>Bernini was 25 years old when he carved this piece for Cardinal Scipione Borghese. According to legend, he studied his own reflection while making faces to capture David's fierce expression. The spiral composition forces viewers to move around the sculpture, following the implied trajectory of the stone toward an invisible Goliath.</p>

<p>The work stands in the <a href="/apps/masterpieces/museum/galleria-borghese"><strong>Galleria Borghese</strong></a> in Rome, part of a collection that includes several Bernini masterpieces. While <a href="/apps/masterpieces/artwork/david-michelangelo"><strong>Michelangelo's David</strong></a> shows calm contemplation before battle, Bernini's version captures violent action, embodying the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> preference for drama and movement.</p>`,
      faqs: [
        {
          question: "Where is Bernini's David located?",
          answer: "The sculpture is displayed at the <a href=\"/apps/masterpieces/museum/galleria-borghese\"><strong>Galleria Borghese</strong></a> in Rome, Italy. It shares space with Bernini's other major works including Apollo and Daphne and The Rape of Proserpina."
        },
        {
          question: "How is Bernini's David different from Michelangelo's?",
          answer: "<a href=\"/apps/masterpieces/artwork/david-michelangelo\"><strong>Michelangelo's David</strong></a> shows calm contemplation before battle. <strong>Bernini's version</strong> captures the violent moment of action, body twisted, face grimacing. The Baroque sculpture demands viewers imagine the battle in progress."
        },
        {
          question: "How tall is Bernini's David?",
          answer: "The sculpture stands <strong>170 centimeters tall</strong> (about 5.6 feet), significantly smaller than Michelangelo's 17-foot version. Bernini carved it from marble when he was just 25 years old."
        },
        {
          question: "Did Bernini use himself as a model?",
          answer: "According to tradition, <a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini</strong></a> studied his own face in a mirror while grimacing to capture David's fierce expression. Cardinal Maffeo Barberini, the future Pope Urban VIII, reportedly held the mirror for him."
        }
      ]
    },
    {
      slug: 'perseus-with-head-of-medusa',
      description: `<p><a href="/apps/masterpieces/artist/benvenuto-cellini"><strong>Benvenuto Cellini</strong></a> cast this monumental bronze between 1545 and 1554 for Duke Cosimo I de' Medici. The sculpture shows Perseus standing triumphant over Medusa's headless body, holding her severed head aloft as blood cascades down. It took nearly a decade to complete and nearly killed Cellini in the casting.</p>

<p>The bronze stands in the <strong>Loggia dei Lanzi</strong>, an open-air gallery in Florence's Piazza della Signoria. Cellini documented the dramatic casting in his autobiography, describing how he fell ill with fever and nearly lost the sculpture when the furnace failed. He threw his household pewter into the molten bronze to save the pour. The result justified every sacrifice.</p>

<p>Perseus wears winged sandals and cap from Hermes, symbols of his divine assistance. The pedestal features exquisite bronze reliefs and four smaller figures in niches. Cellini positioned the work to be seen against the sky, Perseus's upraised arm silhouetted dramatically. It remains Florence's most accomplished Mannerist bronze, rivaling even <a href="/apps/masterpieces/artwork/david-michelangelo"><strong>Michelangelo's David</strong></a> nearby.</p>`,
      faqs: [
        {
          question: "Where can I see Perseus with the Head of Medusa?",
          answer: "The bronze stands in the <strong>Loggia dei Lanzi</strong>, an open-air sculpture gallery in Florence's Piazza della Signoria. Entry is free. The sculpture has occupied this spot since its unveiling in 1554."
        },
        {
          question: "How big is Cellini's Perseus?",
          answer: "The bronze stands <strong>320 centimeters tall</strong> (about 10.5 feet) including its elaborate pedestal. <a href=\"/apps/masterpieces/artist/benvenuto-cellini\"><strong>Cellini</strong></a> spent nearly a decade creating the work, from design through the challenging casting process."
        },
        {
          question: "What myth does Perseus depict?",
          answer: "The sculpture shows the hero <strong>Perseus after slaying Medusa</strong>, one of the three Gorgon sisters whose gaze turned men to stone. He used a mirrored shield to avoid her eyes, then decapitated her with a divine sword."
        },
        {
          question: "How did Cellini cast this bronze?",
          answer: "Cellini documented the dramatic casting in his autobiography. The furnace failed mid-pour, and he threw his <strong>household pewter</strong> into the molten metal to save it. He was so ill with fever that servants carried him back to bed before the bronze cooled."
        }
      ]
    },
    {
      slug: 'david-donatello',
      description: `<p><a href="/apps/masterpieces/artist/donatello"><strong>Donatello</strong></a> created this bronze David around 1440, producing the first freestanding nude male sculpture since antiquity. The youthful figure stands in a relaxed contrapposto pose, one foot resting on Goliath's severed head, his expression calm and almost dreamy despite the violence at his feet.</p>

<p>The sculpture's nudity was revolutionary for its time. David wears only boots and a shepherd's hat crowned with laurel, his adolescent body rendered with naturalistic detail. Art historians debate whether the work depicts David after his victory or the shepherd boy <strong>Mercury</strong>. The ambiguity was likely intentional, appealing to both religious and classical tastes.</p>

<p>The bronze resides in the <strong>Museo Nazionale del Bargello</strong> in Florence, where it has become one of the museum's most treasured works. <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Florence adopted David as a civic symbol, and this sculpture helped establish that tradition. Unlike the heroic versions by <a href="/apps/masterpieces/artwork/david-michelangelo"><strong>Michelangelo</strong></a> and <a href="/apps/masterpieces/artwork/david-bernini"><strong>Bernini</strong></a> that followed, Donatello's David seems vulnerable, his triumph more mysterious than martial.</p>`,
      faqs: [
        {
          question: "Where is Donatello's David displayed?",
          answer: "The bronze is housed at the <a href=\"/apps/masterpieces/museum/bargello\"><strong>Museo Nazionale del Bargello</strong></a> in Florence, Italy. It shares the museum with other important Renaissance sculptures including works by Michelangelo and Verrocchio."
        },
        {
          question: "Why is Donatello's David historically significant?",
          answer: "It was the <strong>first freestanding nude male sculpture</strong> created in Western art since Roman times. <a href=\"/apps/masterpieces/artist/donatello\"><strong>Donatello's</strong></a> bold return to classical nudity influenced Renaissance art and helped revive ancient sculptural traditions."
        },
        {
          question: "How tall is Donatello's David?",
          answer: "The bronze stands <strong>158 centimeters tall</strong> (about 5.2 feet), smaller than both Michelangelo's marble version and Bernini's later work. The intimate scale emphasizes David's youth and vulnerability."
        },
        {
          question: "When was Donatello's David made?",
          answer: "<a href=\"/apps/masterpieces/artist/donatello\"><strong>Donatello</strong></a> created the bronze around <strong>1440</strong>, though exact dates remain uncertain. The Medici family likely commissioned it for their palace courtyard in Florence."
        }
      ]
    },
    {
      slug: 'gates-of-paradise',
      description: `<p><a href="/apps/masterpieces/artist/lorenzo-ghiberti"><strong>Lorenzo Ghiberti</strong></a> spent 27 years creating these gilded bronze doors for the Florence Baptistery, completing them in 1452. <a href="/apps/masterpieces/artwork/david-michelangelo"><strong>Michelangelo</strong></a> reportedly called them worthy to be the "Gates of Paradise," and the name stuck. The doors contain ten panels depicting scenes from the Old Testament in revolutionary perspective.</p>

<p>Ghiberti won the original commission in a famous 1401 competition that also included Brunelleschi. After finishing the North doors, he was immediately hired for the East doors, these masterpieces. Each panel creates a sculptural world with multiple scenes receding into convincing depth. Figures emerge in high relief at the front while buildings and landscapes flatten toward the horizon.</p>

<p>The original doors now reside in the <strong>Museo dell'Opera del Duomo</strong> in Florence, protected from weather and pollution. Gilded replicas stand on the Baptistery itself. The panels trace biblical history from Adam and Eve through Solomon, with Ghiberti including his own portrait among the prophets framing the scenes.</p>`,
      faqs: [
        {
          question: "Where can I see the original Gates of Paradise?",
          answer: "The original doors are displayed in the <strong>Museo dell'Opera del Duomo</strong> in Florence, protected in a climate-controlled environment. Gilded replicas stand on the Florence Baptistery, where the originals hung for over 500 years."
        },
        {
          question: "Why are they called the Gates of Paradise?",
          answer: "<a href=\"/apps/masterpieces/artwork/david-michelangelo\"><strong>Michelangelo</strong></a> allegedly said the doors were beautiful enough to serve as the <strong>Gates of Paradise</strong>. The nickname has been used ever since. Ghiberti himself simply called them the East doors of the Baptistery."
        },
        {
          question: "How long did the Gates of Paradise take to make?",
          answer: "<a href=\"/apps/masterpieces/artist/lorenzo-ghiberti\"><strong>Ghiberti</strong></a> worked on the doors for <strong>27 years</strong>, from 1425 to 1452. He employed a large workshop including his sons and the young Donatello. The ten relief panels depict Old Testament scenes."
        },
        {
          question: "How big are the Gates of Paradise?",
          answer: "The doors stand <strong>506 centimeters tall by 287 centimeters wide</strong> (about 16.6 by 9.4 feet). Each of the ten main panels measures roughly 79 by 79 centimeters, surrounded by a frame containing portraits of prophets and sibyls."
        }
      ]
    },
    {
      slug: 'psyche-revived-cupids-kiss',
      description: `<p><a href="/apps/masterpieces/artist/antonio-canova"><strong>Antonio Canova</strong></a> carved this marble masterpiece between 1787 and 1793, depicting the moment Cupid revives his beloved Psyche with a kiss. The <strong>Neoclassical sculpture</strong> captures a suspended instant, Cupid's wings spread wide as he lifts Psyche's limp form, their lips about to meet.</p>

<p>The myth tells of Psyche's punishment by Venus for her beauty. After trials and tribulations, including opening a forbidden box that cast her into deathlike sleep, Cupid defies his mother to save her. Canova freezes the story at its most tender moment, before the kiss, when rescue is certain but not yet complete.</p>

<p>The sculpture resides in the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, one of Canova's most celebrated works outside Italy. A second version, begun later, stands in the <strong>Hermitage Museum</strong>. The work exemplifies Canova's ability to make marble appear soft as flesh, the figures' skin seeming to yield under imagined touch. From any angle, the composition forms an elegant X, drawing the eye to that central almost-kiss.</p>`,
      faqs: [
        {
          question: "Where is Psyche Revived by Cupid's Kiss displayed?",
          answer: "The most famous version is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. A second version, begun in 1796, resides in the Hermitage Museum in St. Petersburg. Both were carved by <a href=\"/apps/masterpieces/artist/antonio-canova\"><strong>Canova</strong></a> himself."
        },
        {
          question: "What myth does the sculpture depict?",
          answer: "The sculpture shows <strong>Cupid awakening Psyche</strong> from a deathlike sleep. Venus had punished Psyche with impossible tasks. When she opened a forbidden box and collapsed, Cupid flew to her rescue, defying his mother to revive his mortal beloved."
        },
        {
          question: "How large is Canova's Psyche sculpture?",
          answer: "The sculpture measures <strong>155 by 168 centimeters</strong> (about 61 by 66 inches). Unlike many of Canova's works depicting single figures, this composition shows two intertwined bodies in a dynamic diagonal arrangement."
        },
        {
          question: "What style is Psyche Revived by Cupid's Kiss?",
          answer: "The work is a prime example of <strong>Neoclassicism</strong>, the artistic movement that looked back to ancient Greek and Roman ideals. <a href=\"/apps/masterpieces/artist/antonio-canova\"><strong>Canova</strong></a> was the movement's greatest sculptor, celebrated throughout Europe for his graceful marble figures."
        }
      ]
    },
    {
      slug: 'moses-michelangelo',
      description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> carved this imposing marble Moses between 1513 and 1515 for the tomb of Pope Julius II. The biblical prophet sits in judgment, two horns sprouting from his head, the tablets of the Law tucked under one powerful arm. His gaze burns with what art historian Vasari called "terribilità," a divine fury that makes viewers tremble.</p>

<p>The horns result from a mistranslation of Hebrew scripture. Where the Bible describes Moses's face as "radiant" or "shining" after speaking with God, the Latin Vulgate used "horned." Michelangelo followed this tradition, but his horns suggest power rather than demonic influence. Moses seems about to rise in anger, veins bulging in his arms, beard flowing like a force of nature.</p>

<p>The sculpture resides in <strong>San Pietro in Vincoli</strong> in Rome, a church near the Colosseum best known for housing the chains (vincoli) that bound Saint Peter. Julius II's tomb proved a 40-year frustration for Michelangelo, who called it "the tragedy of the tomb." His original design included over 40 figures. Political shifts and funding problems reduced it to this masterwork and a handful of attendant sculptures.</p>`,
      faqs: [
        {
          question: "Where can I see Michelangelo's Moses?",
          answer: "The sculpture is located in <strong>San Pietro in Vincoli</strong>, a church in Rome near the Colosseum. Entry is free. The work serves as the centerpiece of Pope Julius II's much-reduced tomb."
        },
        {
          question: "Why does Moses have horns?",
          answer: "The horns come from a <strong>Latin mistranslation</strong> of Hebrew scripture. Where the Bible describes Moses's face as \"radiant\" after speaking with God, the Latin Vulgate translated this as \"horned.\" <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> followed medieval artistic tradition."
        },
        {
          question: "How big is Michelangelo's Moses?",
          answer: "The seated figure stands <strong>235 centimeters tall</strong> (about 7.7 feet). The sculpture was designed as part of a massive tomb project that Michelangelo worked on sporadically for over 40 years, never completing his original vision."
        },
        {
          question: "When did Michelangelo carve Moses?",
          answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> carved the Moses between <strong>1513 and 1515</strong>, though he returned to modify the work later. It was part of Pope Julius II's tomb commission, which Michelangelo called \"the tragedy of the tomb\" due to decades of delays."
        }
      ]
    },
    {
      slug: 'bust-of-nefertiti',
      description: `<p><a href="/apps/masterpieces/artist/thutmose"><strong>Thutmose</strong></a>, court sculptor to Pharaoh Akhenaten, created this limestone and stucco bust around 1345 BCE. It depicts <strong>Queen Nefertiti</strong>, wife of Akhenaten, with her distinctive tall blue crown and elegant swan neck. The work remains one of the most recognized images from ancient Egypt.</p>

<p>German archaeologists discovered the bust in 1912 at Thutmose's abandoned workshop in Amarna. The find sparked immediate controversy. Egypt has repeatedly requested its return, claiming the excavation permit was misleading about the discovery. Germany maintains the bust was legally exported. The dispute continues today.</p>

<p>The bust resides in the <strong>Neues Museum</strong> in Berlin, displayed in a dedicated room with dramatic lighting. Photography was banned until 2019 to protect the painted surface. One eye socket remains empty, leading to speculation that Nefertiti lost an eye to illness. Most scholars believe the missing inlay was never installed because the bust was a workshop model, never intended for display.</p>`,
      faqs: [
        {
          question: "Where is the Bust of Nefertiti displayed?",
          answer: "The bust is housed in the <strong>Neues Museum</strong> in Berlin, Germany. It occupies a dedicated room in the Egyptian collection, displayed behind glass with carefully controlled lighting to preserve the ancient pigments."
        },
        {
          question: "Why is one eye missing from the bust?",
          answer: "The empty eye socket never contained an inlay. Scholars believe <a href=\"/apps/masterpieces/artist/thutmose\"><strong>Thutmose</strong></a> used the bust as a <strong>workshop model</strong> for training apprentices, so the missing eye was intentional. The finished inlay in the other eye shows what the complete version would have looked like."
        },
        {
          question: "How old is the Bust of Nefertiti?",
          answer: "The bust dates to approximately <strong>1345 BCE</strong>, over 3,300 years old. It was created during the reign of Pharaoh Akhenaten, who revolutionized Egyptian religion and art before his reforms were reversed after his death."
        },
        {
          question: "Why does Egypt want the bust returned?",
          answer: "Egypt claims the 1912 excavation permit was <strong>misleading about the discovery's significance</strong>. German officials maintain the export was legal under agreements with the Egyptian Antiquities Service. The diplomatic dispute has continued for over a century."
        }
      ]
    },
    {
      slug: 'little-mermaid-copenhagen',
      description: `<p><a href="/apps/masterpieces/artist/edvard-eriksen"><strong>Edvard Eriksen</strong></a> sculpted this bronze figure in 1913, inspired by Hans Christian Andersen's fairy tale. The <strong>Little Mermaid</strong> sits on a rock at Copenhagen's Langelinie pier, gazing wistfully at the harbor. She has become Denmark's most recognized symbol and one of the world's most visited sculptures.</p>

<p>Brewer Carl Jacobsen commissioned the work after seeing a ballet adaptation of Andersen's story. Eriksen used his wife Ellen as the model for the mermaid's body, though the face was modeled by ballerina Ellen Price, who had impressed Jacobsen in the title role. The sculpture depicts the moment the mermaid has traded her tail for human legs.</p>

<p>The bronze has survived remarkable abuse. Vandals have decapitated her twice, sawed off her arm, covered her in paint, and even blown her off her rock with explosives. Each time she has been repaired or recast from the original mold, which the Eriksen family still guards. Despite her small size, under five feet tall, she draws over a million visitors annually to her waterfront perch.</p>`,
      faqs: [
        {
          question: "Where can I see The Little Mermaid?",
          answer: "The sculpture sits on a rock at <strong>Langelinie pier</strong> in Copenhagen harbor, Denmark. She is freely visible to the public 24 hours a day. The site is about a 20-minute walk from central Copenhagen."
        },
        {
          question: "How big is The Little Mermaid statue?",
          answer: "The bronze stands <strong>125 centimeters tall</strong> (about 4 feet), smaller than most visitors expect. <a href=\"/apps/masterpieces/artist/edvard-eriksen\"><strong>Edvard Eriksen</strong></a> designed her to appear natural sitting on her boulder, which adds to her height."
        },
        {
          question: "Has The Little Mermaid been vandalized?",
          answer: "Yes, repeatedly. She has been <strong>decapitated twice</strong>, had her arm sawed off, been covered in paint, dressed in a burqa, and blown off her rock with explosives. Each time she has been restored using the original mold the Eriksen family still owns."
        },
        {
          question: "What fairy tale is The Little Mermaid based on?",
          answer: "The sculpture illustrates <strong>Hans Christian Andersen's</strong> 1837 fairy tale. Unlike the Disney version, Andersen's mermaid doesn't get the prince. She turns to sea foam at dawn, though later versions added a more hopeful spiritual ending."
        }
      ]
    },
    {
      slug: 'manneken-pis',
      description: `<p><a href="/apps/masterpieces/artist/jerome-duquesnoy-elder"><strong>Jérôme Duquesnoy the Elder</strong></a> cast this small bronze fountain in 1619, depicting a naked boy urinating into the basin below. <strong>Manneken Pis</strong> has become Brussels's most famous landmark, a symbol of the city's irreverent humor and independence. The tiny statue draws millions of visitors yearly.</p>

<p>Legends about the statue's origin abound. One claims a boy urinated on a burning fuse to save the city from explosion. Another involves a lost duke's son found relieving himself. The truth is simpler: Duquesnoy replaced an earlier stone figure that had served as a fountain since at least the 15th century. Public fountains featuring urinating figures were common in European cities.</p>

<p>The statue stands at the corner of Rue de l'Étuve and Rue du Chêne in central Brussels. It measures only 61 centimeters (two feet) tall, often surprising first-time visitors. The original is now in the <strong>Brussels City Museum</strong>; the street fountain is a replica. Manneken Pis owns over 1,000 costumes, donated by visiting dignitaries and organizations, and is regularly dressed for special occasions.</p>`,
      faqs: [
        {
          question: "Where is Manneken Pis located?",
          answer: "The famous fountain stands at the corner of <strong>Rue de l'Étuve and Rue du Chêne</strong> in central Brussels, Belgium. The original statue is now in the Brussels City Museum; the outdoor version is a replica installed to prevent theft."
        },
        {
          question: "How big is Manneken Pis?",
          answer: "The bronze stands only <strong>61 centimeters tall</strong> (about 2 feet), much smaller than most visitors expect. <a href=\"/apps/masterpieces/artist/jerome-duquesnoy-elder\"><strong>Jérôme Duquesnoy the Elder</strong></a> cast the current version in 1619, though similar fountains existed earlier."
        },
        {
          question: "Why does Manneken Pis have so many costumes?",
          answer: "The statue owns <strong>over 1,000 costumes</strong>, displayed in the Brussels City Museum. Dignitaries and organizations donate outfits, and the city dresses him for holidays and special events. He has worn everything from Elvis jumpsuits to Dracula capes."
        },
        {
          question: "What does Manneken Pis mean?",
          answer: "The name means <strong>\"Little Man Pee\"</strong> in Brussels dialect (a mix of Dutch and French). The statue symbolizes Brussels's irreverent spirit and has spawned female and dog versions nearby: Jeanneke Pis and Zinneke Pis."
        }
      ]
    },
    {
      slug: 'statue-of-liberty',
      description: `<p><a href="/apps/masterpieces/artist/frederic-auguste-bartholdi"><strong>Frédéric Auguste Bartholdi</strong></a> designed this colossal copper statue as a gift from France to the United States, dedicated in 1886. <strong>Lady Liberty</strong> stands on Liberty Island in New York Harbor, her torch raised high, a broken chain at her feet. She has welcomed millions of immigrants and become one of the world's most recognized monuments.</p>

<p>The statue's construction required international collaboration. Bartholdi designed the exterior, engineer Gustave Eiffel created the iron framework, and copper sheets were hammered to shape in Paris before being shipped across the Atlantic. Americans struggled to fund the pedestal until Joseph Pulitzer's newspaper campaign shamed the wealthy and collected small donations from ordinary citizens.</p>

<p>The statue stands 93 meters tall (305 feet) from ground to torch tip, including the pedestal. Visitors can climb to the crown for harbor views, though reservations fill months in advance. The copper surface has oxidized to its distinctive <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green patina</strong></a> over the decades. Lady Liberty was designated a UNESCO World Heritage Site in 1984, recognized as a universal symbol of freedom.</p>`,
      faqs: [
        {
          question: "Where is the Statue of Liberty located?",
          answer: "The statue stands on <strong>Liberty Island</strong> in New York Harbor. Ferries depart from Battery Park in Manhattan and Liberty State Park in New Jersey. Reservations are required for crown access and recommended for the pedestal."
        },
        {
          question: "How tall is the Statue of Liberty?",
          answer: "The statue measures <strong>93 meters (305 feet)</strong> from ground to torch tip, including the pedestal. The copper figure alone stands 46 meters (151 feet). She was the tallest structure in New York when dedicated in 1886."
        },
        {
          question: "Who designed the Statue of Liberty?",
          answer: "<a href=\"/apps/masterpieces/artist/frederic-auguste-bartholdi\"><strong>Frédéric Auguste Bartholdi</strong></a> designed the statue's exterior, while <strong>Gustave Eiffel</strong> (of Eiffel Tower fame) engineered the internal iron framework. France gifted the statue to the United States in 1886."
        },
        {
          question: "Why is the Statue of Liberty green?",
          answer: "The copper surface has developed a <strong>green patina</strong> through natural oxidation over more than a century. The statue was originally copper-colored when dedicated. The patina actually protects the metal from further corrosion."
        }
      ]
    },
    {
      slug: 'lincoln-memorial-statue',
      description: `<p><a href="/apps/masterpieces/artist/daniel-chester-french"><strong>Daniel Chester French</strong></a> sculpted this monumental marble Abraham Lincoln between 1914 and 1920, seated in contemplation within Henry Bacon's Greek temple on the National Mall. The <strong>Lincoln Memorial</strong> has become one of America's most sacred civic spaces, site of Martin Luther King Jr.'s "I Have a Dream" speech and countless protests and commemorations.</p>

<p>French spent six years perfecting the 19-foot seated figure, carved from 28 blocks of white Georgia marble. Lincoln's hands rest on fasces, Roman symbols of authority, one clenched in determination, one open in reconciliation. Urban legend claims French encoded sign language into the hands spelling "A" and "L," but the sculptor never confirmed this.</p>

<p>The memorial sits at the western end of the National Mall in <strong>Washington, D.C.</strong>, facing the Washington Monument and Capitol. It is free to visit and open 24 hours. The inscription above Lincoln reads: "In this temple, as in the hearts of the people for whom he saved the Union, the memory of Abraham Lincoln is enshrined forever." Over seven million people visit annually.</p>`,
      faqs: [
        {
          question: "Where is the Lincoln Memorial?",
          answer: "The memorial stands at the western end of the <strong>National Mall</strong> in Washington, D.C. It faces the Reflecting Pool, Washington Monument, and Capitol. Entry is free and the site remains open 24 hours daily."
        },
        {
          question: "How big is the Lincoln statue?",
          answer: "The seated figure stands <strong>5.8 meters tall</strong> (19 feet). <a href=\"/apps/masterpieces/artist/daniel-chester-french\"><strong>Daniel Chester French</strong></a> carved it from 28 blocks of white Georgia marble. If Lincoln were standing, he would measure about 28 feet tall."
        },
        {
          question: "Are Lincoln's hands forming sign language?",
          answer: "Urban legend claims the hands spell <strong>\"A\" and \"L\"</strong> in American Sign Language. French never confirmed this interpretation. The poses represent determination (clenched fist) and reconciliation (open hand), reflecting Lincoln's wartime leadership and postwar vision."
        },
        {
          question: "When was the Lincoln Memorial built?",
          answer: "Construction began in 1914 and the memorial was dedicated in <strong>1922</strong>. <a href=\"/apps/masterpieces/artist/daniel-chester-french\"><strong>Daniel Chester French</strong></a> worked on the statue from 1914 to 1920. Henry Bacon designed the surrounding Greek temple structure."
        }
      ]
    },
    {
      slug: 'mount-rushmore',
      description: `<p><a href="/apps/masterpieces/artist/gutzon-borglum"><strong>Gutzon Borglum</strong></a> carved these four presidential faces into the granite of South Dakota's Black Hills between 1927 and 1941. <strong>Mount Rushmore</strong> depicts George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln, each face measuring 60 feet from chin to crown. It remains America's largest sculpture.</p>

<p>Borglum chose presidents who represented the nation's birth (Washington), growth (Jefferson), development (Roosevelt), and preservation (Lincoln). Workers used dynamite to remove 450,000 tons of rock, then refined the features with jackhammers and hand tools. 400 workers participated over 14 years; remarkably, no one died during construction.</p>

<p>The memorial stands in the <strong>Black Hills of South Dakota</strong>, drawing about three million visitors annually. The site is sacred to the Lakota Sioux, who were promised the land in an 1868 treaty later broken. Nearby, an even larger monument to Lakota leader Crazy Horse has been under construction since 1948. Mount Rushmore's granite erodes only one inch every 10,000 years, meaning the faces should remain recognizable for hundreds of millennia.</p>`,
      faqs: [
        {
          question: "Where is Mount Rushmore?",
          answer: "The sculpture is carved into the <strong>Black Hills of South Dakota</strong>, near the town of Keystone. The memorial includes a visitor center, museum, and viewing terrace. Entry is free, though parking costs $10."
        },
        {
          question: "How big are the Mount Rushmore faces?",
          answer: "Each presidential face measures <strong>18 meters tall</strong> (60 feet) from chin to crown. <a href=\"/apps/masterpieces/artist/gutzon-borglum\"><strong>Gutzon Borglum</strong></a> selected the scale so the faces would be visible from miles away. The noses alone are 6 meters (20 feet) long."
        },
        {
          question: "Which presidents are on Mount Rushmore?",
          answer: "From left to right: <strong>George Washington, Thomas Jefferson, Theodore Roosevelt, and Abraham Lincoln</strong>. Borglum chose them to represent the nation's birth, expansion, development, and preservation."
        },
        {
          question: "How long did Mount Rushmore take to carve?",
          answer: "Construction lasted <strong>14 years</strong>, from 1927 to 1941. <a href=\"/apps/masterpieces/artist/gutzon-borglum\"><strong>Borglum</strong></a> died in March 1941, and his son Lincoln finished the project that October. Workers removed 450,000 tons of granite using dynamite and hand tools."
        }
      ]
    },
    {
      slug: 'christ-the-redeemer',
      description: `<p><a href="/apps/masterpieces/artist/paul-landowski"><strong>Paul Landowski</strong></a>, a French sculptor, designed the figure of <strong>Christ the Redeemer</strong> that towers over Rio de Janeiro from the summit of Corcovado mountain. Brazilian engineer Heitor da Silva Costa conceived the monument and oversaw its construction between 1922 and 1931. The statue has become Brazil's most iconic image.</p>

<p>Christ stands with arms outstretched, embracing the city below, his robes flowing in stylized Art Deco folds. The figure is constructed of reinforced concrete clad in soapstone tiles, chosen for their durability and light color that contrasts with the dark granite peak. The statue faces east, greeting the sunrise over Guanabara Bay and the Atlantic beyond.</p>

<p>The monument rises 30 meters tall (98 feet), excluding its 8-meter pedestal, making Christ's total height 38 meters above the mountaintop. Arms span 28 meters (92 feet). Visitors reach the summit via cog railway or road, then climb steps or take elevators and escalators to the base. The statue was named one of the <strong>New Seven Wonders of the World</strong> in 2007, joining the Colosseum and Taj Mahal among modern pilgrimage sites.</p>`,
      faqs: [
        {
          question: "Where is Christ the Redeemer located?",
          answer: "The statue stands atop <strong>Corcovado mountain</strong> in Rio de Janeiro, Brazil, overlooking the city from 700 meters (2,300 feet) elevation. Visitors reach the summit via cog railway from Cosme Velho station or by road through Tijuca National Park."
        },
        {
          question: "How tall is Christ the Redeemer?",
          answer: "The figure stands <strong>30 meters tall</strong> (98 feet), with an additional 8-meter pedestal containing a chapel. The arm span measures 28 meters (92 feet). It is the largest Art Deco sculpture in the world."
        },
        {
          question: "Who designed Christ the Redeemer?",
          answer: "<a href=\"/apps/masterpieces/artist/paul-landowski\"><strong>Paul Landowski</strong></a>, a French sculptor, designed the figure. Brazilian engineer <strong>Heitor da Silva Costa</strong> conceived the monument and managed construction. Romanian sculptor Gheorghe Leonida created the face."
        },
        {
          question: "What is Christ the Redeemer made of?",
          answer: "The statue is constructed of <strong>reinforced concrete</strong> clad in approximately 6 million soapstone tiles. Soapstone was chosen for its weather resistance and ability to reflect light. Lightning strikes frequently hit the statue, requiring regular maintenance."
        }
      ]
    }
  ];

  let updated = 0;

  for (const artwork of updates) {
    const result = await prisma.artwork.updateMany({
      where: { slug: artwork.slug },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date(),
      }
    });

    if (result.count > 0) {
      console.log(`Updated: ${artwork.slug}`);
      updated++;
    } else {
      console.log(`Not found: ${artwork.slug}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated} sculptures with descriptions and FAQs`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
