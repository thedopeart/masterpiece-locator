const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Vatican Museums Descriptions ===\n');

  const artworkDescriptions = [
    {
      slug: 'sistine-chapel-ceiling',
      description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> painted the Sistine Chapel ceiling between 1508 and 1512, working largely alone on scaffolding 20 meters above the floor. Pope Julius II commissioned the work, originally planning a design of twelve apostles. Michelangelo convinced him to allow something far more ambitious: over 300 figures depicting the biblical story from Creation to Noah.</p><p>The ceiling covers roughly 500 square meters. Nine central panels show Genesis scenes, surrounded by prophets, sibyls, and the ancestors of Christ. The most famous panel, <a href="/apps/masterpieces/artwork/creation-of-adam"><strong>The Creation of Adam</strong></a>, shows God giving life to the first man. Michelangelo painted in fresco, applying pigment to wet plaster. He had to work quickly before the plaster dried. The physical toll was severe: years of painting overhead left him with permanent neck and back damage. The ceiling remains at the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "How long did it take Michelangelo to paint the Sistine Chapel ceiling?", answer: "<strong>Four years</strong>, from 1508 to 1512. Michelangelo worked largely alone, dismissing his assistants early in the project. He painted standing on scaffolding, not lying down as commonly believed." },
        { question: "How many figures are on the Sistine Chapel ceiling?", answer: "Over <strong>300 figures</strong> populate the ceiling, including nine scenes from Genesis, twelve prophets and sibyls, and the ancestors of Christ in the lunettes." },
        { question: "Can you visit the Sistine Chapel?", answer: "Yes, the Sistine Chapel is part of the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> tour. Photography is prohibited inside the chapel. Millions visit annually to see Michelangelo's masterpiece." }
      ]
    },
    {
      slug: 'last-judgment-michelangelo',
      description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> returned to the Sistine Chapel 25 years after finishing the ceiling to paint <strong>The Last Judgment</strong> on the altar wall. Completed in 1541, this massive fresco depicts Christ's second coming and the final judgment of humanity. Over 300 figures swirl in a cosmic drama of salvation and damnation.</p><p>Christ stands at center, his arm raised in judgment. The saved rise on the left while the damned fall to hell on the right. Michelangelo included his own face on the flayed skin held by Saint Bartholomew, suggesting his personal torment. The nudity of the figures caused immediate controversy. Later popes hired artists to add drapery to the most exposed areas. These additions, called "breeches," remain on some figures today. The work hangs behind the altar at the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "When did Michelangelo paint The Last Judgment?", answer: "Michelangelo painted <strong>The Last Judgment between 1536 and 1541</strong>, twenty-five years after completing the ceiling. He was 61 years old when he finished this massive work." },
        { question: "Why is Michelangelo's face in The Last Judgment?", answer: "Michelangelo included his own face on the <strong>flayed skin held by Saint Bartholomew</strong>. Scholars interpret this as a statement about artistic suffering or the artist's anxiety about his own salvation." },
        { question: "Why were clothes added to The Last Judgment?", answer: "The nudity scandalized many viewers. Pope Paul IV hired Daniele da Volterra to <strong>add drapery</strong> to the most exposed figures in 1565. This earned Volterra the nickname 'the breeches maker.'" }
      ]
    },
    {
      slug: 'deluge-sistine-michelangelo',
      description: `<p><strong>The Deluge</strong> was actually the first narrative scene <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> painted on the Sistine Chapel ceiling, begun in 1508. It depicts the biblical flood that destroyed humanity, with Noah's ark floating in the background as desperate people struggle to survive the rising waters.</p><p>The composition shows terrified figures climbing rocks and clinging to a makeshift raft. A father carries his dead son's body. The ark appears tiny in the distance, emphasizing humanity's doom. Technical problems plagued this early panel. Mold appeared in the plaster, forcing Michelangelo to repaint sections. He also painted too many small figures, making them hard to see from the chapel floor. He learned from these mistakes, making subsequent figures larger and compositions simpler. The scene remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Sistine Chapel.</p>`,
      faqs: [
        { question: "Why is The Deluge significant?", answer: "The Deluge was the <strong>first narrative scene</strong> Michelangelo painted on the ceiling. The technical problems he encountered here taught him to paint larger, simpler compositions for the remaining panels." },
        { question: "What does The Deluge show?", answer: "The fresco depicts <strong>Noah's flood</strong> from Genesis. Desperate people try to escape rising waters while Noah's ark floats safely in the distance. The scene emphasizes humanity's destruction and divine judgment." }
      ]
    },
    {
      slug: 'prophet-isaiah-sistine',
      description: `<p><strong>The Prophet Isaiah</strong> sits as one of seven male prophets painted around the Sistine Chapel ceiling's perimeter. <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> depicted Isaiah turning suddenly, as if interrupted while reading his scroll. A young attendant points to something off-canvas, capturing a moment of divine revelation.</p><p>Isaiah wears robes of <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue and gold</strong></a>, and his powerful physique demonstrates Michelangelo's anatomical mastery. The prophet's face shows deep contemplation, appropriate for the author of messianic prophecies about Christ's coming. Each prophet and sibyl on the ceiling is flanked by attendants (putti or genii) who add compositional balance. Isaiah remains one of the most psychologically intense figures in the Sistine Chapel at the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "Who is the Prophet Isaiah?", answer: "<strong>Isaiah</strong> was a Hebrew prophet whose book contains prophecies Christians interpreted as foretelling Christ. Michelangelo placed him prominently on the ceiling's east side." },
        { question: "Why did Michelangelo include prophets on the Sistine ceiling?", answer: "The <strong>seven prophets and five sibyls</strong> represent figures who foretold Christ's coming. The prophets come from Hebrew scripture; the sibyls were pagan seers believed to have received divine knowledge." }
      ]
    },
    {
      slug: 'libyan-sibyl-sistine',
      description: `<p><strong>The Libyan Sibyl</strong> is one of five sibyls (ancient prophetesses) painted around the Sistine Chapel ceiling. <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> shows her in a dramatic twisting pose, turning to place a large book behind her. Her muscular back and arms reveal extensive anatomical study.</p><p>The sibyl wears robes of <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink and green</strong></a>, her auburn hair elaborately braided. Preparatory drawings survive showing Michelangelo studied male models for her powerful physique. The twisting pose, called <strong>figura serpentinata</strong>, became a hallmark of Mannerist art. Among all the ceiling figures, the Libyan Sibyl is often considered the most technically accomplished. She sits in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Sistine Chapel.</p>`,
      faqs: [
        { question: "Who was the Libyan Sibyl?", answer: "The <strong>Libyan Sibyl</strong> was a legendary prophetess from ancient Libya. Christians believed she foretold Christ's coming, justifying her presence on the chapel ceiling alongside Hebrew prophets." },
        { question: "Why does the Libyan Sibyl look masculine?", answer: "Michelangelo used <strong>male models</strong> for his female figures, as women rarely posed nude. Preparatory drawings show he studied a young man's back for her famous twisted pose." }
      ]
    },
    {
      slug: 'school-of-athens',
      description: `<p><strong>The School of Athens</strong> depicts the great philosophers of ancient Greece gathered in an idealized classical building. <a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this fresco between 1509 and 1511 for Pope Julius II's private library (Stanza della Segnatura). It represents philosophy, one of four branches of knowledge depicted in the room.</p><p>At center, Plato points upward (toward the realm of forms) while Aristotle gestures horizontally (toward the physical world). Around them gather Socrates, Pythagoras, Euclid, and dozens more. Raphael included portraits of contemporaries: <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo</strong></a> appears as Plato, <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> as Heraclitus. The architectural setting draws viewers' eyes to the central figures through masterful <strong>linear perspective</strong>. The painting remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "Who are the figures in The School of Athens?", answer: "The fresco shows ancient philosophers including <strong>Plato, Aristotle, Socrates, Pythagoras, Euclid, and Diogenes</strong>. Raphael used contemporary artists as models: Leonardo appears as Plato, Michelangelo as Heraclitus." },
        { question: "Where is The School of Athens?", answer: "The fresco is in the <strong>Stanza della Segnatura</strong> at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>. It was Pope Julius II's private library, now part of the Raphael Rooms tour." },
        { question: "What does The School of Athens represent?", answer: "The painting represents <strong>philosophy</strong>, one of four branches of knowledge. The room also contains frescoes representing theology, poetry, and law." }
      ]
    },
    {
      slug: 'disputation-holy-sacrament',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted <strong>The Disputation of the Holy Sacrament</strong> as the first fresco in the Stanza della Segnatura, completed around 1510. It represents theology, facing The School of Athens (philosophy) across the room. The composition shows heaven and earth united around the Eucharist.</p><p>The upper half shows the Holy Trinity surrounded by saints and Old Testament figures on <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden clouds</strong></a>. Below, Church fathers and theologians debate around an altar bearing the communion host. The semicircular composition draws all eyes to the Eucharist at center. Portraits include Dante in the earthly crowd and Fra Angelico among the heavenly blessed. The fresco remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "What does The Disputation show?", answer: "The fresco shows the <strong>triumph of Christian theology</strong>. Heaven and earth gather around the Eucharist, demonstrating the Church's teaching that Christ is truly present in communion." },
        { question: "Who appears in The Disputation?", answer: "The earthly section includes <strong>Church fathers, popes, and Dante</strong>. The heavenly section shows Christ, Mary, John the Baptist, apostles, and Old Testament figures." }
      ]
    },
    {
      slug: 'parnassus-raphael',
      description: `<p><strong>The Parnassus</strong> represents poetry in <a href="/apps/masterpieces/artist/raphael"><strong>Raphael's</strong></a> Stanza della Segnatura, completed around 1511. Apollo plays a lira da braccio (not a classical lyre) surrounded by the nine Muses on Mount Parnassus. Ancient and modern poets gather on both sides.</p><p>Homer appears blind, dictating verses. Dante, Virgil, and other poets from antiquity through Raphael's own time populate the slopes. The composition adapts to an awkward wall space around a window, using the architectural feature as the mountain's base. Raphael includes <a href="/apps/masterpieces/artist/sappho"><strong>Sappho</strong></a>, the ancient Greek poetess, holding a scroll with her name. The fresco remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "What is Mount Parnassus?", answer: "<strong>Mount Parnassus</strong> in Greece was sacred to Apollo and the Muses. Ancient Greeks believed it was the home of poetry. Raphael's fresco shows this mythological gathering of poets through the ages." },
        { question: "Which poets appear in The Parnassus?", answer: "The fresco includes <strong>Homer, Virgil, Dante, Petrarch, Sappho, and Boccaccio</strong> among others. Raphael mixed ancient Greeks, Romans, and contemporary Italian poets." }
      ]
    },
    {
      slug: 'fire-in-borgo-raphael',
      description: `<p><strong>The Fire in the Borgo</strong> depicts a miraculous event from 847 CE when Pope Leo IV extinguished a fire in Rome's Borgo district by making the sign of the cross. <a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> designed this fresco around 1514 for the Stanza dell'Incendio, though assistants executed much of the painting.</p><p>The composition shows dramatic figures fleeing flames in the foreground while the Pope calmly blesses from the Vatican loggia in the background. A young man carries his elderly father on his back, echoing Aeneas and Anchises from Virgil's Aeneid. The muscular figures reflect <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> influence on Raphael's later style. The fresco remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "What event does The Fire in the Borgo depict?", answer: "The fresco shows <strong>Pope Leo IV miraculously stopping a fire</strong> in Rome's Borgo neighborhood in 847 CE. He allegedly extinguished the flames by making the sign of the cross." },
        { question: "Did Raphael paint The Fire in the Borgo himself?", answer: "Raphael <strong>designed the composition</strong> but his workshop assistants executed much of the actual painting. By 1514, Raphael ran a large studio and supervised rather than painted many commissions." }
      ]
    },
    {
      slug: 'liberation-saint-peter-raphael',
      description: `<p><strong>The Liberation of Saint Peter</strong> shows the apostle's miraculous escape from prison, guided by an angel. <a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this fresco around 1514 in the Stanza di Eliodoro. The composition is remarkable for its sophisticated treatment of three different light sources.</p><p>Moonlight illuminates the scene on the left. The angel's <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>divine radiance</strong></a> glows in the center. Torchlight flickers on the right where guards awaken. Raphael painted this night scene to demonstrate his mastery of <strong>chiaroscuro</strong>, the dramatic contrast of light and dark. The subject complemented papal politics: Pope Julius II, who commissioned the room, was the successor of Saint Peter. The fresco remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "What story does The Liberation of Saint Peter show?", answer: "The fresco depicts <strong>Acts 12:1-11</strong>, where an angel frees Peter from prison in Jerusalem. The guards sleep while divine light fills Peter's cell." },
        { question: "Why is The Liberation of Saint Peter famous?", answer: "Raphael's treatment of <strong>three light sources</strong> (moonlight, divine radiance, torchlight) was revolutionary. The nocturnal scene demonstrated unprecedented mastery of lighting effects in fresco painting." }
      ]
    },
    {
      slug: 'transfiguration-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael's</strong></a> last painting, <strong>The Transfiguration</strong>, remained unfinished at his death in 1520. It was displayed at his funeral and stood at his head as he lay in state. The painting combines two biblical episodes: Christ's transfiguration on Mount Tabor above, and the apostles' failure to heal a possessed boy below.</p><p>Christ floats in <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>brilliant light</strong></a> between Moses and Elijah, witnessed by three apostles. Below, the remaining apostles struggle helplessly with a demon-possessed boy. The contrast between divine glory above and human impotence below creates powerful theological commentary. The lower section shows dramatic <strong>Mannerist</strong> figures that influenced a generation of painters. The painting is displayed in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pinacoteca.</p>`,
      faqs: [
        { question: "Was The Transfiguration Raphael's last painting?", answer: "Yes, Raphael <strong>died in 1520</strong> with this painting unfinished. It was completed by his assistant Giulio Romano and displayed at Raphael's funeral in the Vatican." },
        { question: "What does The Transfiguration show?", answer: "The painting combines <strong>two Gospel episodes</strong>: Christ's transfiguration on Mount Tabor and the apostles' failure to cure a possessed boy. The contrast emphasizes divine power versus human limitation." },
        { question: "Where can I see The Transfiguration?", answer: "The painting hangs in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>' Pinacoteca (picture gallery), separate from the Raphael Rooms frescoes." }
      ]
    },
    {
      slug: 'st-jerome-wilderness-leonardo-vatican',
      description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> left <strong>St. Jerome in the Wilderness</strong> unfinished around 1482. The painting shows the elderly saint kneeling in a rocky landscape, beating his chest with a stone in penance. A lion, Jerome's traditional attribute, lies at his feet.</p><p>The painting's incomplete state reveals Leonardo's working methods. An amber underpainting shows through where color was never applied. Jerome's anatomy demonstrates Leonardo's detailed study of human musculature, particularly visible in the saint's emaciated body. The painting had a strange history: it was cut into pieces, with the head used as a table top and the body as a cabinet panel. Cardinal Joseph Fesch reassembled the fragments in the 19th century. It now resides in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        { question: "Why is St. Jerome unfinished?", answer: "Leonardo <strong>abandoned many works</strong>, moving between projects. He likely left this painting when he departed Milan around 1482. His perfectionism and diverse interests meant many paintings remained incomplete." },
        { question: "Why was St. Jerome cut into pieces?", answer: "The painting's early history is unclear, but by the 1800s it had been <strong>cut apart</strong>. Jerome's head served as a table top in a Roman shop. Cardinal Fesch found and reunited the fragments." },
        { question: "What does the painting show?", answer: "St. Jerome kneels in penance, <strong>beating his chest with a stone</strong>. He lived as a hermit in the Syrian desert. His lion companion recalls a legend that he removed a thorn from the beast's paw." }
      ]
    },
    {
      slug: 'entombment-christ-caravaggio-vatican',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted <strong>The Entombment of Christ</strong> between 1603 and 1604 for the Chiesa Nuova in Rome. Christ's body is lowered onto a burial slab, supported by Nicodemus (whose face may be Michelangelo's) and John the Evangelist. Mary, Mary Magdalene, and Mary of Clopas grieve behind them.</p><p>The composition descends diagonally from the raised arms of the grieving women to Christ's hanging arm below. A stark stone slab juts toward viewers, as if the body might slide into our space. <strong>Dramatic chiaroscuro</strong> illuminates the scene against total darkness. The painting profoundly influenced Baroque art, with Rubens and others creating versions. It moved to the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pinacoteca during Napoleon's Italian campaign.</p>`,
      faqs: [
        { question: "Where was The Entombment originally displayed?", answer: "Caravaggio painted it for the <strong>Chiesa Nuova</strong> (Santa Maria in Vallicella) in Rome. It was moved to the Vatican during the Napoleonic era and never returned to the church." },
        { question: "Who is the figure carrying Christ?", answer: "Tradition identifies him as <strong>Nicodemus</strong>, whose face may be modeled on Michelangelo. Some scholars see this as Caravaggio's tribute to the great Renaissance master." },
        { question: "Why is The Entombment important?", answer: "The painting's <strong>dramatic composition and lighting</strong> influenced generations of Baroque artists. Rubens, Rembrandt, and Géricault all created works responding to Caravaggio's powerful design." }
      ]
    },
    {
      slug: 'stefaneschi-triptych-giotto',
      description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto</strong></a> and his workshop created the <strong>Stefaneschi Triptych</strong> around 1320 for Cardinal Giacomo Gaetani Stefaneschi. The altarpiece was painted on both sides to be visible from the front and back of Saint Peter's high altar. It's one of the few surviving panel paintings securely attributed to Giotto.</p><p>The front shows Christ enthroned surrounded by angels, with Peter's martyrdom on the left wing and Paul's beheading on the right. The back shows Peter enthroned as first pope, flanked by apostles. Cardinal Stefaneschi himself kneels offering the triptych to Peter. The <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold backgrounds</strong></a> and formal compositions follow Byzantine tradition, but Giotto's figures show naturalistic weight and emotion. It resides in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pinacoteca.</p>`,
      faqs: [
        { question: "Why is the Stefaneschi Triptych painted on both sides?", answer: "The altarpiece sat on the <strong>high altar of Old St. Peter's</strong>, visible from both sides. Worshippers behind the altar saw one set of scenes; those in front saw another." },
        { question: "Who commissioned the Stefaneschi Triptych?", answer: "<strong>Cardinal Giacomo Stefaneschi</strong> commissioned the work around 1320. He appears in the painting, kneeling to present the triptych to Saint Peter." },
        { question: "Is the triptych entirely by Giotto?", answer: "Giotto <strong>designed the work and painted key sections</strong>, but his workshop assistants executed much of the detail. This was standard practice for large commissions in medieval workshops." }
      ]
    },
    {
      slug: 'laocoon-sons-vatican',
      description: `<p><strong>Laocoön and His Sons</strong> depicts the Trojan priest and his children being strangled by sea serpents. This marble sculpture group, likely from the 1st century BCE, was rediscovered in Rome in 1506. Pope Julius II immediately acquired it, and Michelangelo was present at the excavation.</p><p>According to myth, Laocoön warned the Trojans against the wooden horse. The gods sent serpents to silence him. The sculpture shows three figures in agonized struggle, muscles straining against the coils. Pliny the Elder called it "superior to any painting and any bronze." The discovery electrified Renaissance artists and influenced Michelangelo's own work. The sculpture remains in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pio-Clementino Museum.</p>`,
      faqs: [
        { question: "Who was Laocoön?", answer: "<strong>Laocoön</strong> was a Trojan priest who warned against bringing the Greek wooden horse into Troy. The gods sent serpents to kill him and his sons, silencing his prophecy." },
        { question: "When was the Laocoön discovered?", answer: "The sculpture was <strong>unearthed in Rome in 1506</strong>. Pope Julius II bought it immediately. Michelangelo was among the artists who witnessed the excavation." },
        { question: "Is the Laocoön Greek or Roman?", answer: "Scholars debate whether it's a <strong>Greek original or a Roman copy</strong>. Pliny attributed it to three sculptors from Rhodes. Current thinking suggests a 1st-century BCE creation, possibly copying a lost Greek bronze." }
      ]
    },
    {
      slug: 'apollo-belvedere-vatican',
      description: `<p>The <strong>Apollo Belvedere</strong> shows the god Apollo having just released an arrow, likely at the serpent Python. This marble sculpture, a Roman copy of a Greek bronze from around 350-325 BCE, epitomized classical beauty for centuries. Its discovery in the late 15th century influenced Renaissance ideals of the male form.</p><p>Apollo strides forward, his cloak draped over his outstretched left arm. His idealized features and perfect proportions made the statue a benchmark for artistic beauty. Winckelmann called it "the highest ideal of art among all the works of antiquity." Later critics found it too smooth and polished. The sculpture stands in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Belvedere Courtyard, which takes its name from this famous work.</p>`,
      faqs: [
        { question: "What is Apollo doing in the statue?", answer: "Apollo has just <strong>shot an arrow</strong>, likely at the serpent Python. His bow (now missing) would have been in his left hand. The pose captures the moment after release." },
        { question: "Why was the Apollo Belvedere so influential?", answer: "For centuries it was considered the <strong>supreme achievement of classical sculpture</strong>. Artists from Michelangelo to Canova studied it. The statue defined Western ideals of male beauty." },
        { question: "Is the Apollo Belvedere Greek or Roman?", answer: "The Vatican statue is a <strong>Roman marble copy</strong> from the 2nd century CE. The original was a Greek bronze, likely by Leochares, from around 350-325 BCE." }
      ]
    },
    {
      slug: 'sleeping-ariadne-vatican',
      description: `<p><strong>Sleeping Ariadne</strong> shows the mythological princess asleep on the island of Naxos, where Theseus abandoned her after she helped him escape the Minotaur's labyrinth. This Roman marble, dated to the 2nd century CE, was long misidentified as Cleopatra dying from an asp bite.</p><p>Ariadne reclines on rocks, her arm curved over her head in a pose suggesting deep sleep. Her drapery clings to her body, revealing the form beneath. A snake bracelet on her arm led to the Cleopatra misidentification. The figure's sensuality and the virtuoso carving of translucent fabric made it highly influential. It stands in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pio-Clementino Museum.</p>`,
      faqs: [
        { question: "Who is Ariadne?", answer: "In Greek mythology, <strong>Ariadne</strong> was a Cretan princess who helped Theseus kill the Minotaur. He promised to marry her but abandoned her on Naxos. The god Dionysus found and married her." },
        { question: "Why was the statue called Cleopatra?", answer: "A <strong>snake bracelet</strong> on her arm led viewers to assume she was dying from an asp bite. Modern scholars recognized the sleeping pose and iconography as Ariadne on Naxos." },
        { question: "When was Sleeping Ariadne made?", answer: "The statue is a <strong>2nd-century CE Roman marble</strong>, likely copying a Greek original from the Hellenistic period. It entered the Vatican collection in the early 16th century." }
      ]
    },
    {
      slug: 'apoxyomenos-vatican',
      description: `<p>The <strong>Apoxyomenos</strong> ("The Scraper") shows an athlete scraping oil and dirt from his body with a curved tool called a strigil. This Roman marble copies a famous Greek bronze by Lysippos from around 330 BCE. The relaxed pose and slender proportions revolutionized Greek sculpture.</p><p>Unlike earlier athletic statues with frontal poses, the Apoxyomenos extends his arms into the viewer's space. The figure appears to move in three dimensions. Lysippos created a new canon of human proportions: smaller head, longer limbs, more naturalistic stance. Pliny wrote that Lysippos "made the heads smaller and the bodies more slender." The sculpture stands in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pio-Clementino Museum.</p>`,
      faqs: [
        { question: "What is an apoxyomenos?", answer: "The Greek word means <strong>'one who scrapes himself.'</strong> Athletes covered their bodies in olive oil before exercise. Afterward, they used a curved bronze tool (strigil) to scrape off oil, sweat, and dirt." },
        { question: "Who was Lysippos?", answer: "<strong>Lysippos</strong> was Alexander the Great's court sculptor. He created over 1,500 bronze works, none of which survive. We know his style only through Roman marble copies like this one." },
        { question: "Why is the Apoxyomenos important?", answer: "Lysippos introduced <strong>new proportions</strong> for the human figure: smaller head, longer limbs, three-dimensional poses. His innovations influenced all later classical sculpture." }
      ]
    },
  ];

  let updated = 0;
  for (const art of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: art.slug }
    });

    if (!existing) {
      console.log(`Not found: ${art.slug}`);
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: art.description,
        faqs: art.faqs,
        updatedAt: new Date(),
      }
    });

    console.log(`Updated: ${art.slug}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}/${artworkDescriptions.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
