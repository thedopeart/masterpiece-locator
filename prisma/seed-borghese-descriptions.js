const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Borghese Gallery Descriptions ===\n');

  const artworkDescriptions = [
    {
      slug: 'apollo-daphne-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> carved <strong>Apollo and Daphne</strong> between 1622 and 1625, when he was just in his mid-twenties. The sculpture captures the climactic moment from Ovid's Metamorphoses: Apollo, struck by Cupid's arrow of love, chases the nymph Daphne, who has been struck by an arrow of revulsion. As Apollo's hand touches her waist, she transforms into a laurel tree.</p><p>Bernini renders the transformation with virtuoso skill. Daphne's fingers sprout leaves. Bark climbs her legs. Her toes become roots. The sculpture seems to defy the properties of marble, giving stone the appearance of flesh, hair, and foliage. Walk around it to see how Bernini designed multiple viewpoints, each revealing new details of the drama. The work remains in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a> where Cardinal Scipione Borghese originally placed it.</p>`,
      faqs: [
        { question: "What is the story of Apollo and Daphne?", answer: "In Ovid's myth, <strong>Cupid shot Apollo with an arrow of love</strong> and Daphne with an arrow of repulsion. When Apollo caught her, Daphne prayed for escape. Her father, a river god, transformed her into a laurel tree." },
        { question: "How old was Bernini when he carved Apollo and Daphne?", answer: "Bernini was only <strong>23-25 years old</strong> when he created this masterpiece (1622-1625). His precocious talent amazed contemporaries and earned him papal patronage for the rest of his life." },
        { question: "Where can I see Apollo and Daphne?", answer: "The sculpture stands in the <a href=\"/apps/masterpieces/museum/borghese-gallery-rome\"><strong>Borghese Gallery</strong></a> in Rome. The museum requires timed reservations and limits visitor numbers to protect its artworks." }
      ]
    },
    {
      slug: 'rape-of-proserpina-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini</strong></a> completed <strong>The Rape of Proserpina</strong> in 1622, depicting Pluto abducting Proserpina to the underworld. The god's fingers press into her soft flesh with such realism that viewers often reach out instinctively. No photograph captures how Bernini made cold marble appear as yielding skin.</p><p>Proserpina struggles against her captor, tears streaming down her face. Cerberus, the three-headed dog of Hades, barks at her feet. Cardinal Scipione Borghese commissioned the work when Bernini was just 23. The sculpture demonstrates <strong>Baroque dynamism</strong>: bodies twist, emotions explode, and the stone seems to move. It remains in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>, one of the most visited sculptures in Rome.</p>`,
      faqs: [
        { question: "What does 'rape' mean in the title?", answer: "The word comes from Latin <strong>raptus</strong>, meaning 'seizure' or 'abduction.' The myth describes Pluto kidnapping Proserpina to be queen of the underworld, not sexual assault in the modern sense." },
        { question: "How does Bernini make marble look like flesh?", answer: "Bernini carved Pluto's fingers to <strong>indent Proserpina's thigh</strong>, creating an illusion of pressure. He polished some areas to a sheen and left others matte, mimicking different skin textures." },
        { question: "Who was Proserpina?", answer: "<strong>Proserpina</strong> (Greek: Persephone) was the goddess of spring. Her mother Ceres mourned her abduction, causing winter. Proserpina's annual return brings spring. The myth explains the seasons." }
      ]
    },
    {
      slug: 'david-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini's David</strong></a>, carved in 1623-1624, shows the biblical hero in action, twisting his body to release the sling that will kill Goliath. Unlike <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> contemplative David, Bernini captures the moment of violent action.</p><p>David's face scowls with concentration, his lips pressed tight, brow furrowed. Legend says the 25-year-old Bernini carved his own face into the features, using a mirror while Cardinal Maffeo Barberini held it for him. The sculpture requires viewers to imagine Goliath standing somewhere in the gallery, about to receive the fatal stone. This engagement with the viewer's space typifies <strong>Baroque sculpture</strong>. It remains in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "How is Bernini's David different from Michelangelo's?", answer: "Michelangelo shows David <strong>before the battle</strong>, calm and contemplative. Bernini captures David <strong>during the attack</strong>, body twisted, face grimacing with effort. One is Renaissance stillness; the other is Baroque action." },
        { question: "Is Bernini's face in the David sculpture?", answer: "According to tradition, <strong>Bernini used his own face</strong> as the model. Cardinal Maffeo Barberini (later Pope Urban VIII) allegedly held the mirror while Bernini carved his features into the stone." },
        { question: "How big is Bernini's David?", answer: "The statue stands <strong>170 cm (5.6 feet) tall</strong>, roughly life-size. It's significantly smaller than Michelangelo's 5-meter David in Florence." }
      ]
    },
    {
      slug: 'aeneas-anchises-bernini',
      description: `<p><strong>Aeneas, Anchises, and Ascanius</strong> was carved between 1618 and 1619, making it one of <a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini's</strong></a> earliest major works. The sculpture depicts the Trojan hero Aeneas fleeing burning Troy, carrying his elderly father Anchises on his shoulders while his son Ascanius walks beside them.</p><p>The three ages of man rise vertically: young Ascanius at the bottom, mature Aeneas in the middle, and aged Anchises at the top. Bernini was only 20 when he began this work, assisted by his father Pietro. Some scholars detect the elder Bernini's hand in the more conventional treatment of Aeneas's body. The sculpture shows the young artist learning to free figures from the block. It remains in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Who are the figures in this sculpture?", answer: "<strong>Aeneas</strong> carries his father Anchises, who holds household gods. Young Ascanius walks beside them carrying the eternal flame of Troy. They flee the burning city to eventually found Rome." },
        { question: "How old was Bernini when he carved this?", answer: "Bernini was <strong>20-21 years old</strong> when he created this sculpture (1618-1619). His father Pietro Bernini likely assisted, making this a collaboration between father and son." },
        { question: "Why is this story important to Rome?", answer: "Romans believed <strong>Aeneas founded their civilization</strong>. His descendants Romulus and Remus established the city. The Aeneid by Virgil tells this origin story, making Aeneas central to Roman identity." }
      ]
    },
    {
      slug: 'truth-unveiled-time-bernini',
      description: `<p><a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini</strong></a> began <strong>Truth Unveiled by Time</strong> around 1646-1652 during a difficult period in his career. The death of his patron Pope Urban VIII and criticism of his bell towers for St. Peter's (later demolished) damaged his reputation. The sculpture was his personal statement: time would eventually reveal the truth of his genius.</p><p>The nude female figure represents Truth, originally designed to be lifted by a figure of Time (never completed). She holds the sun, symbol of truth's illumination. Bernini kept this sculpture in his home, refusing to sell it despite offers. His will stipulated it should never leave his family. After passing through several hands, it reached the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Why did Bernini create Truth Unveiled by Time?", answer: "Bernini carved it during <strong>professional setbacks</strong> in the 1640s. His bell towers for St. Peter's were criticized and demolished. The sculpture expressed his belief that time would vindicate his reputation." },
        { question: "Where is the figure of Time?", answer: "Bernini <strong>never completed the Time figure</strong> that was meant to lift Truth. The sculpture remains unfinished according to the original concept, showing only Truth holding the sun." },
        { question: "Did Bernini sell Truth Unveiled by Time?", answer: "No. Bernini <strong>refused all offers</strong> and kept it in his home until death. His will stated it should remain in his family, though it eventually passed through various hands to the Borghese Gallery." }
      ]
    },
    {
      slug: 'pauline-bonaparte-venus-canova',
      description: `<p><a href="/apps/masterpieces/artist/antonio-canova"><strong>Antonio Canova</strong></a> sculpted <strong>Pauline Bonaparte as Venus Victrix</strong> between 1805 and 1808. Napoleon's sister reclines semi-nude on a couch, holding the golden apple Paris awarded Venus. The work caused scandal: a noblewoman displaying herself so provocatively was shocking even for the era.</p><p>When asked how she could pose nearly naked, Pauline reportedly replied, "There was a fire in the studio." The marble rests on a wooden base containing a mechanism that once rotated the sculpture for viewing. Canova's <strong>Neoclassical style</strong> idealized Pauline's features while retaining enough realism for recognition. Her husband Prince Camillo Borghese kept the sculpture hidden, rarely allowing viewings. It remains in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Who was Pauline Bonaparte?", answer: "<strong>Pauline Bonaparte</strong> was Napoleon's favorite sister. She married Prince Camillo Borghese in 1803, becoming mistress of the Borghese collection. She was known for her beauty and scandalous behavior." },
        { question: "Why did the sculpture cause scandal?", answer: "A noblewoman <strong>posing semi-nude as Venus</strong> shocked contemporaries. Her husband kept it hidden, rarely permitting viewings. Asked how she posed naked, Pauline allegedly said there was a fire in the studio." },
        { question: "What is Venus Victrix?", answer: "<strong>Venus Victrix</strong> means 'Victorious Venus.' She holds the golden apple Paris awarded her as the most beautiful goddess. The title emphasizes Pauline's own beauty and her triumph over rivals." }
      ]
    },
    {
      slug: 'boy-basket-fruit-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted <strong>Boy with a Basket of Fruit</strong> around 1593, shortly after arriving in Rome. A sensuous young man offers a basket of fruit painted with almost scientific precision. The peaches, grapes, and leaves show both ripeness and early decay, suggesting life's transience.</p><p>The model may be Mario Minniti, who appears in several early Caravaggio paintings and later became an artist himself. The dramatic lighting from the upper left, highlighting the youth's bare shoulder, hints at the <strong>tenebrism</strong> Caravaggio would develop later. Cardinal Francesco del Monte likely acquired the painting; it entered the Borghese collection in 1607. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Who is the model in Boy with a Basket of Fruit?", answer: "The model was likely <strong>Mario Minniti</strong>, Caravaggio's friend and companion who appears in several early works. Minniti later became a painter himself in Syracuse." },
        { question: "Why is the fruit so detailed?", answer: "Caravaggio painted fruit with <strong>botanical accuracy</strong>, showing both ripeness and decay. Art historians see this as memento mori symbolism, reminding viewers that beauty fades." },
        { question: "When did Caravaggio paint this?", answer: "The painting dates to <strong>around 1593</strong>, early in Caravaggio's Roman career. He was about 22 years old and still establishing his revolutionary style." }
      ]
    },
    {
      slug: 'sick-bacchus-caravaggio',
      description: `<p><strong>Sick Bacchus</strong> is one of <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio's</strong></a> earliest known works, painted around 1593. The god of wine appears jaundiced and unwell, lips tinged with gray. Caravaggio used himself as the model, supposedly painting his reflection during recovery from an illness or injury.</p><p>The painting's title comes from the sickly appearance. Bacchus holds grapes and wears a vine crown, but his complexion suggests disease rather than divine vitality. Some scholars read the painting as an ironic self-portrait: the young artist mocking his own excess or commenting on the dangers of his bohemian lifestyle. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Why does Bacchus look sick?", answer: "The greenish skin tone may reflect <strong>Caravaggio's actual illness</strong> when he painted it. He used a mirror to paint himself. Some scholars suggest it comments ironically on the god of wine looking hungover." },
        { question: "Is Sick Bacchus a self-portrait?", answer: "Yes, Caravaggio <strong>painted himself</strong> as Bacchus, using a mirror. The slightly off-kilter gaze typical of mirror self-portraits supports this attribution." },
        { question: "Why is Bacchus wearing grapes?", answer: "<strong>Bacchus</strong> (Greek: Dionysus) was the god of wine. Grapes and ivy are his traditional attributes. But here the divine figure looks all too human and unwell." }
      ]
    },
    {
      slug: 'saint-jerome-writing-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted <strong>Saint Jerome Writing</strong> around 1606 for Cardinal Scipione Borghese, one of several works he created for this powerful patron. The elderly saint sits at a rough table, dipping his pen to translate the Bible into Latin (the Vulgate). A skull rests beside him as reminder of mortality.</p><p>The composition's stark simplicity focuses attention on Jerome's face and hands. Light falls dramatically from the upper left, typical of Caravaggio's <strong>tenebrism</strong>. Jerome wears only a red cloak, his body emaciated by desert asceticism. Caravaggio painted this while fleeing Rome after killing a man in a brawl. The painting reached Cardinal Borghese nonetheless. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "What is Saint Jerome doing?", answer: "Jerome is <strong>translating the Bible into Latin</strong>, creating what became known as the Vulgate. His translation remained the Catholic Church's official Bible for over a thousand years." },
        { question: "Why is there a skull on the table?", answer: "The <strong>skull is a memento mori</strong>, reminding viewers of death's inevitability. Saints often meditated on skulls as spiritual practice. It also references Jerome's years as a desert hermit." },
        { question: "When did Caravaggio paint Saint Jerome Writing?", answer: "Caravaggio painted it <strong>around 1606</strong>, shortly after fleeing Rome for killing Ranuccio Tomassoni in a fight. He continued working despite being a fugitive." }
      ]
    },
    {
      slug: 'david-head-goliath-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted <strong>David with the Head of Goliath</strong> around 1610, one of his final works. David holds the severed head of the giant, but there's no triumph in his expression. Only melancholy and perhaps pity for the slain enemy.</p><p>Most strikingly, Goliath's face is Caravaggio's own. He painted himself as the defeated monster, perhaps reflecting on his life as a fugitive (he had killed a man in 1606 and spent his final years fleeing justice). Some scholars see this as a plea for mercy: by depicting himself as the slain enemy, Caravaggio may have hoped to appeal to Cardinal Scipione Borghese, who could have obtained his pardon. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Is Goliath's face Caravaggio's self-portrait?", answer: "Yes, Caravaggio <strong>painted himself as Goliath</strong>. The decapitated giant bears the artist's features. Some see this as a statement about his own violent life and impending death." },
        { question: "What does David's sword say?", answer: "The sword's blade shows the Latin abbreviation <strong>H-AS OS</strong>, meaning 'humility kills pride.' David's humility before God defeats Goliath's arrogant pride." },
        { question: "Why does David look sad?", answer: "Unlike triumphant Davids in earlier art, Caravaggio's hero shows <strong>melancholy or pity</strong>. The unusual emotion may reflect Caravaggio's own psychological state as a hunted fugitive." }
      ]
    },
    {
      slug: 'madonna-palafrenieri-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted <strong>Madonna of the Palafrenieri</strong> in 1606 for an altar in St. Peter's Basilica. The papal grooms (palafrenieri) commissioned it for their chapel, but the painting was removed within weeks. Its frank naturalism offended Vatican sensibilities.</p><p>The Virgin Mary and young Christ press their feet on a serpent (symbolizing sin or heresy), assisted by St. Anne. Mary's low neckline, Christ's nakedness, and Anne's elderly appearance disturbed viewers accustomed to idealized sacred figures. Cardinal Scipione Borghese quickly purchased the rejected altarpiece. Caravaggio painted real people: a Roman prostitute reportedly modeled for Mary. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Why was Madonna of the Palafrenieri removed from St. Peter's?", answer: "The painting's <strong>naturalism offended Church officials</strong>. Mary's low neckline, Christ's naked body, and the aged Saint Anne seemed inappropriate for a papal basilica." },
        { question: "Who were the palafrenieri?", answer: "The <strong>palafrenieri</strong> were papal grooms who cared for the pope's horses. They had a confraternity chapel in St. Peter's, for which they commissioned this altarpiece." },
        { question: "What is the serpent symbolizing?", answer: "The <strong>serpent represents sin or heresy</strong> being crushed underfoot. Mary and Christ trampling the snake illustrates the Virgin's role in salvation and Christ's victory over evil." }
      ]
    },
    {
      slug: 'saint-john-baptist-caravaggio-borghese',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted multiple versions of <strong>Saint John the Baptist</strong> throughout his career. This late version, from around 1610, shows the young prophet in the wilderness with his traditional attribute of a lamb. John's pose echoes the ignudi (nude figures) on Michelangelo's Sistine Chapel ceiling.</p><p>The red drapery provides the only color against John's flesh and the dark background. Caravaggio's late style shows looser brushwork than his earlier, tightly painted works. This painting may have been among those Caravaggio carried with him when he died in 1610, hoping to present them to Cardinal Borghese in exchange for a pardon. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Why did Caravaggio paint Saint John so many times?", answer: "Caravaggio created <strong>at least seven versions</strong> of John the Baptist. The subject suited his style: a nude figure in dramatic light, contemplating spiritual matters in wilderness isolation." },
        { question: "What does the lamb represent?", answer: "The <strong>lamb symbolizes Christ</strong>. John the Baptist said, 'Behold the Lamb of God.' The animal's presence identifies John and connects him to his role announcing the Messiah." },
        { question: "When was this version painted?", answer: "This John the Baptist dates to <strong>around 1610</strong>, Caravaggio's final year. The looser brushwork and muted colors characterize his late style, developed during years of exile." }
      ]
    },
    {
      slug: 'deposition-raphael-borghese',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted <strong>The Deposition</strong> (also called the Borghese Entombment) in 1507 for a church in Perugia. It depicts Christ's body being carried to the tomb, surrounded by mourning figures including the Virgin Mary, who swoons with grief.</p><p>Raphael based the composition on ancient Roman sarcophagi showing the death of Meleager. The muscular bearers strain under Christ's weight, creating a sense of physical effort unusual in religious painting. The patron, Atalanta Baglioni, commissioned the work in memory of her murdered son. She later tried to prevent Cardinal Scipione Borghese from removing it to Rome, but papal authority prevailed. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Why is this painting called The Deposition?", answer: "The <strong>Deposition</strong> refers to Christ's body being removed (deposited) from the cross. Raphael actually shows the next moment: carrying the body to the tomb (an Entombment)." },
        { question: "Who commissioned The Deposition?", answer: "<strong>Atalanta Baglioni</strong> commissioned it in memory of her son Grifonetto, murdered in a family feud in 1500. The theme of a mother mourning her son had personal meaning for her." },
        { question: "How did this painting reach the Borghese Gallery?", answer: "Cardinal Scipione Borghese <strong>used papal authority</strong> to remove it from Perugia in 1608. The original patron's family protested but couldn't resist the Pope's nephew." }
      ]
    },
    {
      slug: 'lady-with-unicorn-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted <strong>Lady with a Unicorn</strong> around 1506, showing a young woman holding a small unicorn. The composition echoes Leonardo's Mona Lisa: the subject sits before a landscape, hands folded, turning slightly toward the viewer.</p><p>X-rays revealed the painting was altered over time. The unicorn was originally a dog, then painted over with a wheel (attribute of Saint Catherine), before restoration revealed the unicorn. The mythical creature symbolizes chastity and purity, suggesting this may be a wedding portrait. The sitter's identity remains unknown. The painting hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Why is she holding a unicorn?", answer: "In medieval and Renaissance symbolism, <strong>unicorns represent chastity and purity</strong>. They could only be tamed by virgins. The creature suggests this may be a portrait celebrating a bride's virtue." },
        { question: "Was the unicorn always in the painting?", answer: "No. X-rays show the <strong>unicorn was originally a dog</strong>, then painted over as a wheel (Saint Catherine's attribute), before conservators revealed the unicorn." },
        { question: "Who is the woman in the portrait?", answer: "The <strong>sitter's identity is unknown</strong>. She may be a young noblewoman portrayed for her betrothal or marriage. Some scholars have proposed specific candidates, but none are confirmed." }
      ]
    },
    {
      slug: 'sacred-profane-love-titian',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted <strong>Sacred and Profane Love</strong> around 1514 for Niccolò Aurelio, whose coat of arms appears on the sarcophagus-fountain. Two women sit at opposite ends of a marble basin, one clothed and one nude. Despite centuries of interpretation, scholars still debate which represents sacred love and which profane.</p><p>The nude figure may represent divine love (truth needs no clothing) while the dressed woman represents earthly attachment. Or the opposite: nudity as sensuality, clothing as virtue. Cupid stirs the water between them, suggesting love's transformative power. The Venetian landscape glows with <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden light</strong></a>. It remains one of the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery's</strong></a> most celebrated paintings.</p>`,
      faqs: [
        { question: "Which figure is Sacred and which is Profane?", answer: "Scholars <strong>still debate</strong> this question. The nude may be sacred (heavenly truth) or profane (sensuality). The clothed figure may be virtuous (modesty) or worldly (vanity). Titian may have intended the ambiguity." },
        { question: "What is the meaning of Sacred and Profane Love?", answer: "The painting likely celebrates <strong>marriage and love's transformative power</strong>. It was commissioned for a wedding. The two figures may represent complementary aspects of love rather than opposition." },
        { question: "Who is the little figure in the middle?", answer: "<strong>Cupid</strong> stirs the water in the fountain-sarcophagus. His presence confirms the painting's subject is love. He mediates between the two women, suggesting they're connected rather than opposed." }
      ]
    },
    {
      slug: 'danae-correggio',
      description: `<p><a href="/apps/masterpieces/artist/correggio"><strong>Correggio</strong></a> painted <strong>Danaë</strong> around 1531 as part of a series depicting Jupiter's loves. The myth tells how Jupiter visited Danaë as a shower of gold when her father locked her away to prevent a prophecy that her son would kill him. She bore Perseus from this divine union.</p><p>Correggio shows Danaë reclining on luxurious fabrics as <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden coins</strong></a> stream onto her lap. Cupid assists, lifting her sheet. A small Eros tests an arrow nearby. The sensuous treatment and soft sfumato modeling made Correggio influential on later artists. The painting hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Who was Danaë?", answer: "<strong>Danaë</strong> was a Greek princess whose father locked her in a bronze chamber. Jupiter visited her as golden rain. Their son Perseus later killed Medusa and accidentally killed his grandfather, fulfilling the prophecy." },
        { question: "What is the shower of gold?", answer: "Jupiter transformed himself into <strong>a shower of gold</strong> to penetrate Danaë's prison. The gold represented divine power taking physical form. Correggio shows it as actual coins falling onto her lap." },
        { question: "Was this painting part of a series?", answer: "Yes, Correggio painted <strong>four mythological loves of Jupiter</strong> for Federico II Gonzaga. The series included Io, Leda, Ganymede, and Danaë, now scattered among different museums." }
      ]
    },
    {
      slug: 'hunt-of-diana-domenichino',
      description: `<p><a href="/apps/masterpieces/artist/domenichino"><strong>Domenichino</strong></a> painted <strong>The Hunt of Diana</strong> in 1617 for Cardinal Pietro Aldobrandini. The goddess Diana and her nymphs compete in target practice and swimming after a successful hunt. The luminous landscape and graceful figures exemplify Bolognese <a href="/apps/masterpieces/movement/classicism"><strong>classicism</strong></a>.</p><p>The painting shows Diana's companions in various states of undress, bathing and playing after the exertion of hunting. One nymph aims her bow at a distant target while others splash in a stream. The fresh colors and idealized bodies contrast with Caravaggio's dark naturalism, then dominant in Rome. Cardinal Scipione Borghese coveted the painting and acquired it for his collection. It hangs in the <a href="/apps/masterpieces/museum/borghese-gallery-rome"><strong>Borghese Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Who was Diana?", answer: "<strong>Diana</strong> (Greek: Artemis) was the virgin goddess of the hunt. She lived in forests with her nymphs, all sworn to chastity. Actaeon famously glimpsed her bathing and was transformed into a stag." },
        { question: "What are the nymphs doing?", answer: "After a successful hunt, Diana's companions <strong>compete in archery and swim</strong> in a stream. The scene shows female recreation and camaraderie in an Arcadian setting." },
        { question: "What style is The Hunt of Diana?", answer: "The painting exemplifies <strong>Bolognese classicism</strong>, which emphasized clear drawing, idealized figures, and harmonious composition. It contrasts with Caravaggio's dramatic naturalism." }
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
