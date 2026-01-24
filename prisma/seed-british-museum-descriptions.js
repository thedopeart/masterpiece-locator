const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding British Museum Descriptions ===\n');

  const artworkDescriptions = [
    {
      slug: 'lamassu-winged-bull-british-museum',
      description: `<p>These massive <strong>human-headed winged bulls</strong> once guarded the palace of the Assyrian king Sargon II at Khorsabad. Standing over 4 meters tall and weighing around 16 tons each, they were carved from single blocks of gypsum alabaster around 710 BCE. The Lamassu combines a <strong>human head</strong> (representing intelligence), <strong>bull's body</strong> (symbolizing strength), and <strong>eagle's wings</strong> (denoting swiftness).</p><p>These guardian spirits were designed to protect the king from evil forces. A clever optical illusion makes them appear stationary from the front with four legs visible, but walking from the side with five legs showing. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired these colossal sculptures from excavations at Nimrud and Khorsabad in the 1850s. They remain among the most impressive examples of <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>ancient Near Eastern art</strong></a> anywhere in the world.</p>`,
      faqs: [
        { question: "What is a Lamassu?", answer: "A Lamassu is an <strong>Assyrian protective deity</strong> combining a human head, bull or lion body, and eagle wings. These colossal stone figures guarded the entrances to Assyrian palaces and temples, believed to ward off evil spirits." },
        { question: "Why do Lamassu have five legs?", answer: "The <strong>five legs</strong> create an optical illusion. From the front, you see four legs standing still. From the side, you see four legs walking. This allowed the creature to appear both stationary and in motion depending on the viewer's angle." },
        { question: "Where can I see Lamassu sculptures?", answer: "Major examples are at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, the Louvre in Paris, and the Metropolitan Museum in New York. The British Museum has several from Nimrud and Khorsabad." }
      ]
    },
    {
      slug: 'lion-hunt-ashurbanipal',
      description: `<p>The <strong>Lion Hunt reliefs</strong> depict King Ashurbanipal hunting lions from his chariot around 645 BCE. These alabaster panels come from the North Palace at Nineveh and represent the pinnacle of <strong>Assyrian artistic achievement</strong>. The scenes show lions being released from cages for the hunt, the king drawing his bow, and mortally wounded animals in their death throes.</p><p>What makes these reliefs extraordinary is the emotional realism of the dying <a href="https://luxurywallart.com/collections/lion-wall-art" target="_blank" rel="noopener"><strong>lions</strong></a>. While human figures remain formal and stylized, the animals show genuine suffering and rage. One famous panel shows a wounded lioness dragging her paralyzed hindquarters. These hunts weren't sport. They demonstrated the king's role as protector of his people against chaos, symbolized by wild beasts. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> excavated these reliefs in the 1850s.</p>`,
      faqs: [
        { question: "Who was Ashurbanipal?", answer: "<strong>Ashurbanipal</strong> ruled the Assyrian Empire from 669-631 BCE, presiding over its greatest territorial extent. He was unusually literate for a king and created a vast library at Nineveh containing thousands of cuneiform tablets." },
        { question: "Were the lion hunts real?", answer: "Yes, though controlled. <strong>Lions were captured and released</strong> in enclosed arenas for the king to hunt. This ritual demonstrated royal power and the king's duty to protect civilization from wild forces of chaos." },
        { question: "Where are the Lion Hunt reliefs?", answer: "The reliefs are displayed at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, Room 10. They remain some of the most emotionally powerful ancient sculptures ever created." }
      ]
    },
    {
      slug: 'dying-lion-assyrian',
      description: `<p>Known as the <strong>Dying Lioness</strong> or Wounded Lion, this gypsum relief shows a mortally wounded lion dragging her paralyzed hindquarters, blood streaming from her wounds. Created around 645 BCE for the North Palace at Nineveh, it's considered one of the most emotionally powerful images from the ancient world.</p><p>The <strong>Assyrian sculptors</strong> depicted human figures in formal, idealized poses. But their portrayal of animals showed genuine observation and empathy. This lioness, struck by three arrows, still roars defiantly despite her fatal wounds. The contrast between her powerful forequarters and useless hind legs creates unbearable pathos. Art historians consider this relief among the <a href="https://luxurywallart.com/collections/lion-wall-art" target="_blank" rel="noopener"><strong>greatest depictions of animal suffering</strong></a> in all of art history. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays it as part of the larger Lion Hunt sequence.</p>`,
      faqs: [
        { question: "Why is the Dying Lioness so famous?", answer: "The relief shows <strong>unprecedented emotional depth</strong> for ancient art. While Assyrian sculptors portrayed humans formally, they depicted animals with genuine empathy. The lioness's suffering is rendered with heartbreaking realism." },
        { question: "When was the Dying Lioness carved?", answer: "The relief was carved around <strong>645 BCE</strong> for King Ashurbanipal's North Palace at Nineveh. It was excavated by British archaeologist Austen Henry Layard in the 1850s." }
      ]
    },
    {
      slug: 'black-obelisk-shalmaneser',
      description: `<p>The <strong>Black Obelisk</strong> stands nearly two meters tall and records the military campaigns of the Assyrian king Shalmaneser III (859-824 BCE). What makes this black limestone monument remarkable is its depiction of Jehu, King of Israel, bowing before Shalmaneser. This is the <strong>only known image of an Israelite king</strong> from antiquity.</p><p>Five registers of carved reliefs wrap around the obelisk, showing tribute bearers from conquered nations. The inscription records 31 military campaigns. Jehu appears in the second register, prostrating himself in submission. Discovered at Nimrud in 1846, the obelisk provided the first external confirmation of biblical figures. It now stands in the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, connecting ancient <strong>Assyrian history</strong> with the Hebrew scriptures.</p>`,
      faqs: [
        { question: "Who is depicted on the Black Obelisk?", answer: "The obelisk shows tribute bearers from five nations, including <strong>King Jehu of Israel</strong> bowing before Shalmaneser III. This is the only surviving ancient image of an Israelite king mentioned in the Bible." },
        { question: "When was the Black Obelisk made?", answer: "The obelisk was erected around <strong>825 BCE</strong> during the reign of Shalmaneser III. It commemorates 31 years of military campaigns and tribute from conquered peoples." },
        { question: "Where can I see the Black Obelisk?", answer: "The Black Obelisk is displayed at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It's one of the most important Neo-Assyrian artifacts for understanding biblical history." }
      ]
    },
    {
      slug: 'elgin-marbles-parthenon',
      description: `<p>The <strong>Parthenon Sculptures</strong>, often called the Elgin Marbles, include about half the surviving decoration from the Parthenon temple in Athens. Carved around 438 BCE under the direction of <strong>Phidias</strong>, they represent the high point of Classical Greek art. The collection includes metopes depicting battles, a frieze showing the Panathenaic procession, and pedimental sculptures of gods.</p><p>Lord Elgin removed these sculptures between 1801-1812 when Greece was under Ottoman rule. The British government purchased them in 1816. Greece has campaigned for their return since independence. The marbles remain among the most contested cultural objects in the world. They're displayed in a purpose-built gallery at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, where millions view them annually. The debate over repatriation continues to this day.</p>`,
      faqs: [
        { question: "What are the Elgin Marbles?", answer: "The <strong>Elgin Marbles</strong> are sculptures from the Parthenon temple in Athens, removed by Lord Elgin in the early 1800s. They include frieze sections, metopes, and pedimental figures carved around 438 BCE." },
        { question: "Why are the Elgin Marbles controversial?", answer: "Greece has <strong>requested their return</strong> since 1832, arguing they were improperly removed during Ottoman occupation. The British Museum maintains they were legally acquired and are better preserved in London." },
        { question: "Who carved the Parthenon Sculptures?", answer: "The sculptures were created under <strong>Phidias</strong>, the greatest sculptor of Classical Athens. Multiple skilled craftsmen worked under his direction to complete the temple's elaborate decoration." }
      ]
    },
    {
      slug: 'caryatid-erechtheion-british',
      description: `<p>This <strong>Caryatid</strong> is one of six maidens who served as architectural columns supporting the south porch of the Erechtheion temple on the Athenian Acropolis. Carved around 420 BCE, these figures represent the peak of Classical Greek sculpture. Each woman stands in a slightly different pose, her draped clothing creating vertical lines that echo the fluting of traditional columns.</p><p>Lord Elgin removed this single caryatid in 1801. The other five originals are now in the <strong>Acropolis Museum</strong> in Athens, with a replica in her place on the temple. Her sisters at the Acropolis Museum face an empty space where she should stand. The figure wears a peplos dress and carries a basket-shaped capital on her head. She resides at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, separated from her companions.</p>`,
      faqs: [
        { question: "What is a Caryatid?", answer: "A <strong>Caryatid</strong> is a sculpted female figure serving as an architectural support column. The name may derive from women of Karyai, a town in ancient Greece, or from the Greek word for walnut tree." },
        { question: "Where are the other Erechtheion Caryatids?", answer: "Five original caryatids are in the <strong>Acropolis Museum</strong> in Athens. One is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>. Replicas now stand on the temple's south porch." },
        { question: "When was the Erechtheion built?", answer: "The Erechtheion was built between <strong>421-406 BCE</strong> on the Athenian Acropolis. It housed sacred relics and was named after the legendary king Erechtheus." }
      ]
    },
    {
      slug: 'rosetta-stone',
      description: `<p>The <strong>Rosetta Stone</strong> unlocked the mystery of Egyptian hieroglyphics. This granodiorite slab, inscribed in 196 BCE, carries the same decree in three scripts: hieroglyphic, demotic, and ancient Greek. French soldiers discovered it in 1799 near the town of Rashid (Rosetta) while building fortifications. When Napoleon's forces surrendered Egypt, the stone passed to Britain.</p><p>Scholars Jean-François Champollion and Thomas Young raced to crack the code. Champollion succeeded in 1822, using the Greek text to decipher the hieroglyphics. His breakthrough opened ancient Egypt to the modern world. The decree itself is mundane. It records tax exemptions for priests under Ptolemy V. But the stone's role in decipherment makes it priceless. It's been at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> since 1802 and remains the most visited object in the collection.</p>`,
      faqs: [
        { question: "What does the Rosetta Stone say?", answer: "The stone records a <strong>decree from 196 BCE</strong> confirming the royal cult of Ptolemy V. The content is administrative, but having the same text in three scripts allowed scholars to decode hieroglyphics." },
        { question: "Who deciphered the Rosetta Stone?", answer: "<strong>Jean-François Champollion</strong> cracked the hieroglyphic code in 1822, building on work by Thomas Young. His discovery launched the field of Egyptology and opened thousands of years of history." },
        { question: "Why is the Rosetta Stone at the British Museum?", answer: "French forces discovered the stone but surrendered it to Britain after Napoleon's 1801 defeat in Egypt. It's been at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> since 1802, though Egypt has requested its return." }
      ]
    },
    {
      slug: 'bust-ramesses-ii-british',
      description: `<p>This colossal <strong>granite bust of Ramesses II</strong>, known as the "Younger Memnon," weighs over seven tons and stands 2.67 meters tall. It came from the pharaoh's mortuary temple, the Ramesseum, at Thebes. The bust dates to around 1250 BCE and shows Ramesses wearing the nemes headdress and a hole where a beard once attached.</p><p>The Italian adventurer Giovanni Belzoni transported the bust to England in 1818, an extraordinary feat given its size. The statue inspired Percy Bysshe Shelley's famous poem "Ozymandias" (the Greek name for Ramesses). Shelley imagined the ruins of a fallen empire, though he never saw the bust himself. <strong>Ramesses II</strong> ruled Egypt for 67 years. His monuments cover Egypt. This fragment now resides in the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, Egyptian sculpture gallery.</p>`,
      faqs: [
        { question: "Who was Ramesses II?", answer: "<strong>Ramesses II</strong> ruled Egypt for 67 years (1279-1213 BCE), the longest reign in Egyptian history. He built more monuments than any other pharaoh and fathered over 100 children." },
        { question: "What inspired the poem Ozymandias?", answer: "Shelley wrote <strong>\"Ozymandias\"</strong> in 1818 after hearing about this bust's arrival in England. Ozymandias was the Greek name for Ramesses II. The poem imagines a fallen empire, though the bust is well-preserved." },
        { question: "How was the bust transported?", answer: "<strong>Giovanni Belzoni</strong> moved the 7-ton bust using wooden rollers and levers in 1816. It took weeks to drag it to the Nile for shipping to England." }
      ]
    },
    {
      slug: 'gebelein-mummies',
      description: `<p>The <strong>Gebelein Mummies</strong> are among the oldest known human remains, naturally preserved in Egypt's desert sand around 3400 BCE. The most famous, nicknamed "Ginger" for his red hair, died over 5,000 years ago. These aren't wrapped mummies. Hot, dry sand desiccated the bodies before decomposition, preserving skin, hair, and internal organs.</p><p>These individuals lived before pharaohs, before pyramids, before hieroglyphics. They come from predynastic Egypt when the Nile valley was transitioning from hunting to farming. Modern CT scans revealed that Ginger was a young man who died from a stab wound to the back. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays these remains respectfully, offering a window into prehistoric Egypt and natural mummification processes.</p>`,
      faqs: [
        { question: "How old are the Gebelein Mummies?", answer: "The mummies date to around <strong>3400 BCE</strong>, making them over 5,000 years old. They predate the pharaohs and the practice of artificial mummification by centuries." },
        { question: "How were the Gebelein Mummies preserved?", answer: "<strong>Natural desiccation</strong> preserved these bodies. Hot, dry sand rapidly removed moisture before bacteria could cause decay, preserving skin, hair, and organs without any embalming." },
        { question: "What happened to 'Ginger'?", answer: "CT scans revealed the famous <strong>red-haired mummy</strong> was a young man who died violently. A wound in his back suggests he was stabbed from behind, making this one of history's oldest murder victims." }
      ]
    },
    {
      slug: 'book-of-dead-ani',
      description: `<p>The <strong>Book of the Dead of Ani</strong> is a 78-foot papyrus scroll containing spells to help the deceased navigate the afterlife. Created around 1250 BCE for a royal scribe named Ani, it's the most beautifully illustrated Egyptian funerary text that survives. The hieroglyphs are written in cursive script with vignettes painted in vivid colors.</p><p>The most famous scene shows Ani's <strong>heart being weighed</strong> against the feather of Ma'at (truth). If the heart was lighter, Ani would enter paradise. If heavier with sin, the demon Ammit would devour it. The jackal-headed god Anubis operates the scales while Thoth records the verdict. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired this masterpiece in 1888. Only portions are displayed due to the scroll's fragility.</p>`,
      faqs: [
        { question: "What is the Book of the Dead?", answer: "The <strong>Book of the Dead</strong> is a collection of Egyptian funerary spells meant to help the deceased navigate the underworld. Each was custom-made, with the owner's name inserted throughout." },
        { question: "Who was Ani?", answer: "<strong>Ani</strong> was a royal scribe who lived around 1250 BCE during the reign of Ramesses II. His position allowed him to commission an exceptionally fine Book of the Dead." },
        { question: "What is the weighing of the heart?", answer: "The <strong>weighing of the heart</strong> was the final judgment. The deceased's heart was weighed against Ma'at's feather. A light heart meant paradise; a heavy heart meant destruction by the demon Ammit." }
      ]
    },
    {
      slug: 'sutton-hoo-helmet',
      description: `<p>The <strong>Sutton Hoo helmet</strong> is an Anglo-Saxon masterpiece from around 625 CE, discovered in a buried ship at Sutton Hoo, Suffolk in 1939. Made of iron with copper alloy, silver, gold, and garnets, it protected the head of a warrior king. Bronze eyebrows, nose, and mustache form a face mask, while a dragon's head caps the nose guard.</p><p>This helmet almost certainly belonged to <strong>Raedwald, King of East Anglia</strong>, one of the most powerful rulers in early medieval England. The ship burial contained treasures from across Europe and the Byzantine world, rewriting our understanding of the "Dark Ages." The original was badly crushed and corroded. What visitors see at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> is a reconstruction based on painstaking analysis of over 500 fragments.</p>`,
      faqs: [
        { question: "Who owned the Sutton Hoo helmet?", answer: "The helmet almost certainly belonged to <strong>King Raedwald of East Anglia</strong>, who died around 625 CE. He was one of the most powerful English kings of his era and briefly overlord of all southern England." },
        { question: "What does the Sutton Hoo helmet look like?", answer: "The helmet features <strong>bronze eyebrows, nose, and mustache</strong> forming a face mask. A dragon runs along the crest, its head meeting another dragon's head at the nose. The effect is both protective and terrifying." },
        { question: "Is the displayed helmet original?", answer: "The helmet was <strong>badly crushed and corroded</strong> when found. The British Museum display is a reconstruction based on over 500 original fragments. The reconstruction took years of detective work." }
      ]
    },
    {
      slug: 'sutton-hoo-ship-burial',
      description: `<p>The <strong>Sutton Hoo ship burial</strong>, discovered in 1939, transformed our understanding of Anglo-Saxon England. A 27-meter ship was buried beneath a mound, filled with treasures for an unknown king's journey to the afterlife. The ship itself had rotted, leaving only rivets and a ghostly impression in the sand.</p><p>The treasures include gold shoulder clasps with intricate <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold and garnet cloisonné</strong></a>, a ceremonial whetstone scepter, Byzantine silverware, a lyre, and the famous helmet. No body was found, possibly dissolved by acidic soil. The burial dates to around 625 CE and likely honors <strong>King Raedwald</strong>. These objects, now at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, show early medieval England was no dark age but a sophisticated world connected to distant cultures.</p>`,
      faqs: [
        { question: "What was found at Sutton Hoo?", answer: "A <strong>ship burial containing gold, garnets, silver, and weapons</strong>. Highlights include a helmet, gold shoulder clasps, a scepter, Byzantine silver bowls, and a lyre. The ship was 27 meters long." },
        { question: "When was Sutton Hoo discovered?", answer: "The burial was excavated in <strong>1939</strong>, just before World War II. Landowner Edith Pretty donated all finds to the British Museum, one of the most significant gifts in the museum's history." },
        { question: "Was there a body at Sutton Hoo?", answer: "No body was found. Either the <strong>acidic soil dissolved the remains</strong>, or this was a cenotaph (memorial without a body). Most scholars believe a body was originally present but didn't survive." }
      ]
    },
    {
      slug: 'battersea-shield',
      description: `<p>The <strong>Battersea Shield</strong> is a bronze Celtic shield cover decorated with swirling La Tène patterns in red glass enamel. Despite its military appearance, this shield was never used in battle. The bronze is too thin to stop a weapon. It was likely made for display or as a ritual offering to the River Thames, where it was discovered in 1857.</p><p>Dating to around 350-50 BCE, the shield shows the sophisticated artistry of <strong>Iron Age Britain</strong>. Three circular bosses feature intricate <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red enamel</strong></a> inlays creating spirals and curves. The flowing designs are purely Celtic, with no Mediterranean influence. Why was such a treasure thrown into the Thames? The river may have been sacred, with offerings made at important moments. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays it as a masterwork of Celtic art.</p>`,
      faqs: [
        { question: "Was the Battersea Shield used in battle?", answer: "No. The <strong>bronze is too thin for combat</strong>. This was a ceremonial object, possibly made as a votive offering to be deposited in the River Thames as a gift to the gods." },
        { question: "What style is the Battersea Shield?", answer: "The shield displays <strong>La Tène style</strong>, the dominant artistic expression of Celtic culture. Flowing curves and spirals replace the geometric patterns of earlier periods." },
        { question: "When was the Battersea Shield made?", answer: "The shield dates to <strong>350-50 BCE</strong>, during the British Iron Age. It was found in the Thames near Battersea Bridge in 1857 during construction work." }
      ]
    },
    {
      slug: 'snettisham-great-torc',
      description: `<p>The <strong>Snettisham Great Torc</strong> is the finest example of Iron Age goldwork from Britain. Made around 75 BCE from gold mixed with silver (electrum), this neck ring weighs over a kilogram. Eight twisted gold rods, each made from eight wires, form the main body. Ornate terminals at each end feature complex relief decoration.</p><p>Discovered in Norfolk in 1950, this torc was part of a massive hoard containing over 175 torcs and other <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold objects</strong></a>. The Snettisham hoards remain Britain's largest Iron Age treasure. Why were they buried? Perhaps as offerings to gods, or to hide wealth during Roman invasion. Torcs were symbols of power and status in Celtic society. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays the Great Torc as evidence of sophisticated Celtic metalworking.</p>`,
      faqs: [
        { question: "What is a torc?", answer: "A <strong>torc</strong> (or torque) is a rigid neck ring worn by Celtic elites. Made from twisted metal, often gold, torcs symbolized power, wealth, and possibly divine protection." },
        { question: "How was the Snettisham Great Torc made?", answer: "The torc was made from <strong>64 gold wires twisted into 8 ropes</strong>, then twisted together. The hollow terminals were cast separately and attached. It required exceptional metallurgical skill." },
        { question: "Why were the Snettisham treasures buried?", answer: "The hoards may have been <strong>votive offerings to the gods</strong> or hidden from Roman invaders around 50 BCE. Over 175 torcs were found at this Norfolk site, Britain's largest Iron Age treasure." }
      ]
    },
    {
      slug: 'lewis-chessmen',
      description: `<p>The <strong>Lewis Chessmen</strong> are 93 gaming pieces carved from walrus ivory and whale tooth around 1150-1200 CE. Discovered in 1831 on the Isle of Lewis in Scotland's Outer Hebrides, they're the most famous medieval chess pieces in the world. The pieces include kings, queens, bishops, knights, warders (rooks), and pawns.</p><p>Each figure has distinct personality. Kings sit contemplatively. Queens rest their faces on their hands, looking worried. Warders bite their shields in berserker fury. The pieces were probably made in <strong>Trondheim, Norway</strong>, when the Hebrides belonged to the Norwegian crown. They may have been a merchant's stock, hidden or lost during travel. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> holds 82 pieces while the National Museum of Scotland has 11.</p>`,
      faqs: [
        { question: "Where were the Lewis Chessmen found?", answer: "The chessmen were discovered in <strong>1831 on the Isle of Lewis</strong> in Scotland's Outer Hebrides. Exactly where and how they were found remains disputed. They may have been buried in a sand dune." },
        { question: "Who made the Lewis Chessmen?", answer: "The pieces were likely carved in <strong>Trondheim, Norway</strong> around 1150-1200 CE. At that time, the Hebrides were part of the Kingdom of Norway, explaining why Norwegian-style pieces ended up in Scotland." },
        { question: "Why do the queens look worried?", answer: "The queens rest their cheeks on their hands, a <strong>medieval gesture of distress or contemplation</strong>. Some suggest they're concerned about the battle ahead. Others see it as simple aristocratic elegance." }
      ]
    },
    {
      slug: 'mold-gold-cape',
      description: `<p>The <strong>Mold Gold Cape</strong> is a solid gold garment from Bronze Age Britain, made around 1900-1600 BCE. Shaped to fit over shoulders and upper arms, it was beaten from a single gold ingot and decorated with rows of bosses and ribs resembling multiple strings of beads or amber.</p><p>The cape was discovered in 1833 at Mold in Wales, inside a burial mound. It was broken into fragments and distributed among finders. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> spent years reassembling over 300 pieces. The complete cape weighs 560 grams of pure <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a>. It would have severely restricted arm movement, suggesting ceremonial rather than practical use. The wearer was probably a religious or political leader of exceptional status.</p>`,
      faqs: [
        { question: "How was the Mold Gold Cape made?", answer: "The cape was beaten from a <strong>single ingot of gold</strong> using only Bronze Age tools. The complex raised decoration was created through careful hammering and repoussé work, demonstrating remarkable skill." },
        { question: "Who wore the Mold Gold Cape?", answer: "The cape restricted movement, so it was <strong>ceremonial rather than practical</strong>. The wearer was probably a religious leader or chief of exceptional importance in Bronze Age British society." },
        { question: "When was the Mold Gold Cape found?", answer: "The cape was discovered in <strong>1833</strong> at Bryn yr Ellyllon (Hill of the Fairies) in Mold, Wales. Workers found it broken inside a Bronze Age burial mound and initially divided the fragments among themselves." }
      ]
    },
    {
      slug: 'oxus-treasure',
      description: `<p>The <strong>Oxus Treasure</strong> contains around 180 surviving pieces of Achaemenid Persian gold and silver, dating from the 5th-4th centuries BCE. Named after the Oxus River (modern Amu Darya) in Central Asia where it was found, this is the most important collection of ancient Persian metalwork to survive.</p><p>Highlights include a <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold chariot model</strong></a> pulled by four horses, gold armlets with griffin terminals, and numerous votive plaques. The treasure was likely from a temple, accumulated over centuries as offerings. It was discovered in the 1870s and nearly lost when bandits attacked the merchants who bought it. A British officer intervened and the treasure eventually reached the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in 1897.</p>`,
      faqs: [
        { question: "What is in the Oxus Treasure?", answer: "The treasure includes <strong>gold and silver vessels, jewelry, coins, and figurines</strong>. Most famous is a gold model chariot with four horses and two figures. Many pieces show Persian royal and religious imagery." },
        { question: "Where did the Oxus Treasure come from?", answer: "The treasure was found near the <strong>Oxus River</strong> (Amu Darya) in what is now Tajikistan, near the border with Afghanistan. It likely came from a temple that collected offerings over centuries." },
        { question: "When was the Oxus Treasure found?", answer: "Locals found the treasure in <strong>1877</strong>. Merchants bought it but were attacked by bandits. British officer Captain F.C. Burton rescued both the merchants and the treasure, which eventually reached the British Museum." }
      ]
    },
    {
      slug: 'cyrus-cylinder',
      description: `<p>The <strong>Cyrus Cylinder</strong> is a clay document from 539 BCE recording the conquest of Babylon by Cyrus the Great of Persia. While the cylinder describes typical ancient propaganda, its account of allowing exiled peoples to return home has earned it fame as a proto-declaration of human rights.</p><p>Cyrus declares he restored temples and allowed deported gods and peoples to return to their homelands. This policy benefited the Jewish exiles, whose return is recorded in the Bible. The cylinder was discovered at Babylon in 1879. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired it and later Iran loaned it briefly for display in Tehran. The United Nations has a replica, and the cylinder appears on Iranian passports as a symbol of Persian tolerance.</p>`,
      faqs: [
        { question: "What does the Cyrus Cylinder say?", answer: "The cylinder records <strong>Cyrus's conquest of Babylon</strong> and his policy of religious tolerance. He claims to have restored temples and allowed exiled peoples to return home. This may have enabled the Jewish return from Babylonian exile." },
        { question: "Is the Cyrus Cylinder a human rights document?", answer: "Some call it the <strong>first declaration of human rights</strong>, but scholars debate this. The text follows conventions of ancient royal propaganda. However, its policy of religious tolerance was unusual for its time." },
        { question: "Where was the Cyrus Cylinder found?", answer: "The cylinder was <strong>discovered at Babylon in 1879</strong> during excavations by Hormuzd Rassam. It was buried in the foundations of a city wall, a common practice for dedicatory texts in ancient Mesopotamia." }
      ]
    },
    {
      slug: 'hoa-hakananaia-moai',
      description: `<p><strong>Hoa Hakananai'a</strong> (meaning "stolen friend") is a moai statue from Easter Island (Rapa Nui). Unlike the famous volcanic tuff moai that line the island's coast, this figure is carved from dense basalt. It stood inside a stone house at the ceremonial village of Orongo, associated with the birdman cult.</p><p>The statue's back bears intricate <strong>birdman carvings</strong> added after the original moai was made, showing how the island's religion evolved. Two birdmen flank a central design of dance paddles and vulva symbols. HMS Topaze removed the statue in 1868 and presented it to Queen Victoria, who gave it to the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>. Rapa Nui descendants have requested its return, calling the statue their lost friend.</p>`,
      faqs: [
        { question: "What does Hoa Hakananai'a mean?", answer: "The name translates as <strong>\"stolen friend\"</strong> or \"hidden friend\" in Rapa Nui. The islanders gave this name after the British removed the statue in 1868, expressing their sense of loss." },
        { question: "Why is this moai different?", answer: "This moai is carved from <strong>dark basalt rather than volcanic tuff</strong>. It also bears birdman carvings on its back, added later when Orongo became the center of the birdman cult worship." },
        { question: "What is the birdman cult?", answer: "The <strong>birdman cult</strong> emerged after the moai-building period. Chiefs competed annually to collect the first sooty tern egg from a nearby island. The winner's sponsor became the sacred birdman for that year." }
      ]
    },
    {
      slug: 'admonitions-scroll',
      description: `<p>The <strong>Admonitions Scroll</strong> is one of the oldest Chinese paintings to survive, traditionally attributed to Gu Kaizhi (344-406 CE). This silk handscroll illustrates a text advising court ladies on proper behavior. Nine scenes survive showing women at court with moralistic captions.</p><p>The scroll demonstrates early principles of <strong>Chinese figure painting</strong>: fine, flowing brushstrokes; delicate coloring; and psychological depth in faces and gestures. Whether this is Gu Kaizhi's original or an early Tang dynasty copy remains debated, but it's certainly over a thousand years old. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired it in 1903, though China has disputed the circumstances. Due to fragility, it's rarely displayed and kept in climate-controlled storage.</p>`,
      faqs: [
        { question: "What is the Admonitions Scroll about?", answer: "The scroll illustrates a <strong>3rd-century text advising court ladies</strong> on virtuous behavior. Nine surviving scenes show women in various situations with moralizing captions about proper conduct." },
        { question: "Who painted the Admonitions Scroll?", answer: "The scroll is attributed to <strong>Gu Kaizhi</strong> (344-406 CE), one of China's greatest early painters. However, some scholars believe this is a Tang dynasty copy of his original work." },
        { question: "Why is the Admonitions Scroll rarely displayed?", answer: "The 1,600-year-old silk is extremely <strong>fragile and light-sensitive</strong>. The British Museum keeps it in climate-controlled storage and displays it only occasionally under controlled conditions." }
      ]
    },
    {
      slug: 'david-vases',
      description: `<p>The <strong>David Vases</strong> are a pair of blue and white porcelain temple vases from Yuan dynasty China, dated precisely to 1351 CE. An inscription dedicates them to a Taoist temple and gives the exact date, making them the key reference point for dating all early blue and white Chinese ceramics.</p><p>Standing 63.5 cm tall, each vase features dragons, phoenixes, and floral scrolls in <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>cobalt blue</strong></a> under a clear glaze. Before Sir Percival David acquired these vases, scholars thought blue and white porcelain was a Ming dynasty innovation. The inscribed date proved the technique existed under Mongol rule. The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> now displays them as part of the Percival David Collection, the finest assembly of Chinese ceramics outside Asia.</p>`,
      faqs: [
        { question: "Why are the David Vases important?", answer: "The vases carry an <strong>inscription dating them to 1351 CE</strong>. This proved blue and white porcelain existed during the Yuan dynasty, earlier than scholars previously believed. They're the reference point for dating similar ceramics." },
        { question: "Who made the David Vases?", answer: "The vases were made at <strong>Jingdezhen</strong>, China's porcelain capital, for dedication to a Taoist temple. The patron's name and the exact date are inscribed on the necks." },
        { question: "What is the Percival David Collection?", answer: "Sir Percival David (1892-1964) assembled the <strong>finest collection of Chinese ceramics</strong> outside Asia. His 1,700 pieces, including the David Vases, are now displayed at the British Museum." }
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
