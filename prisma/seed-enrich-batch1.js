const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichments = {
  'i-cant-go-on-ill-go-on-jaar': {
    description: `<p><a href="/apps/masterpieces/artist/alfredo-jaar"><strong>Alfredo Jaar</strong></a> created this neon text installation in 2016. The phrase comes from Samuel Beckett's 1953 novel <strong>The Unnamable</strong>, and it captures the paradox of enduring hardship while facing what feels impossible. The top section reads "I CAN'T GO ON." in red neon, taking up one-third of the space. Below it, "I'LL GO ON." glows white across the remaining two-thirds. That ratio is deliberate: determination outweighs despair.</p>

<p>Jaar was born in Santiago, Chile, in 1956 and has spent decades making art about humanitarian crises and global inequality. He moved to New York in 1982 and works across installation, photography, and film. This piece is on view at the <a href="/apps/masterpieces/museum/perez-art-museum-miami"><strong>Perez Art Museum Miami</strong></a>, where the Beckett quote functions as a quiet statement about resilience. Jaar has returned to this phrase across multiple works, making it a recurring motif in his practice.</p>`,
    faqs: [
      { question: 'Where does the title come from?', answer: 'The phrase is the final line of Samuel Beckett\'s 1953 novel <strong>The Unnamable</strong>, one of the most important works of 20th-century literature. Beckett wrote it as a meditation on human existence and endurance.' },
      { question: 'Why are the two phrases different colors?', answer: 'The red "I CAN\'T GO ON." represents despair and takes up only one-third of the space. The white "I\'LL GO ON." dominates the remaining two-thirds, visually reinforcing that determination outweighs defeat.' },
      { question: 'Who is Alfredo Jaar?', answer: 'Jaar is a Chilean-born, New York-based artist known for work about humanitarian crises and global inequality. His projects span installation, photography, and film, addressing topics from the Rwanda genocide to refugee displacement. He\'s been working since the 1980s.' },
      { question: 'Where can I see this work?', answer: 'It\'s on display at the <a href="/apps/masterpieces/museum/perez-art-museum-miami"><strong>Perez Art Museum Miami</strong></a> (PAMM) in Florida. The museum sits on Biscayne Bay and focuses on 20th and 21st-century art.' }
    ]
  },

  'echo-jaume-plensa': {
    description: `<p><a href="/apps/masterpieces/artist/jaume-plensa"><strong>Jaume Plensa</strong></a> created this 46-foot-tall sculpture in 2011. It depicts the head of a nine-year-old girl from his Barcelona neighborhood, rendered in resin and steel coated with white marble dust. Despite looking like marble, the coating keeps the piece light enough for outdoor installation. The closed eyes and serene expression give the massive head a meditative quality that shifts with the light and weather.</p>

<p>Plensa first installed "Echo" at Madison Square Park in New York, where it drew crowds during its temporary run. Collector Barney A. Ebsworth later donated it to the <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Seattle Art Museum</strong></a>, and it was unveiled at the Olympic Sculpture Park in June 2014. The title references the Greek nymph Echo, cursed by Hera to repeat only others' words. Plensa is also known for the Crown Fountain in Chicago's Millennium Park, featuring 50-foot glass towers with video portraits of Chicago residents.</p>`,
    faqs: [
      { question: 'Who was the model for Echo?', answer: 'The sculpture depicts a nine-year-old girl from Plensa\'s Barcelona neighborhood. He often uses children and young people as subjects for his monumental heads, finding their features convey a universal quality that transcends individual identity.' },
      { question: 'Is it made of marble?', answer: 'No. Despite its white marble appearance, "Echo" is made of fiberglass resin and steel coated in marble dust. This makes the 46-foot sculpture much lighter than solid marble while achieving the same visual effect.' },
      { question: 'What does the title mean?', answer: 'Echo references the Greek nymph punished by Hera for distracting her with conversation. Hera stripped Echo of speech, leaving her able only to repeat others\' last words. The silent, closed-eyed sculpture evokes that sense of listening without speaking.' },
      { question: 'How did it get to Seattle?', answer: 'Originally installed at Madison Square Park in New York in 2011, the sculpture was later given to the <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Seattle Art Museum</strong></a> by collector Barney A. Ebsworth. It was unveiled at the Olympic Sculpture Park on June 29, 2014.' }
    ]
  },

  'under-the-table-therrien': {
    description: `<p><a href="/apps/masterpieces/artist/robert-therrien"><strong>Robert Therrien</strong></a> built this oversized table and six chairs in 1994. Everything is scaled to exactly 3.6 times normal size, which puts the tabletop at roughly 10 feet high. Standing underneath it, you feel like a small child in an adult's dining room. The piece is made from wood, metal, and enamel, and it weighs enough that the floor had to be reinforced for installation.</p>

<p>Therrien (1947-2019) was a Los Angeles artist who spent decades making oversized versions of ordinary objects: stacked plates, folding chairs, pots and pans. "Under the Table" was the very first artwork installed at <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a> museum in LA, and alongside Yayoi Kusama's Infinity Mirror Room, it's the most popular work in the collection. Visitors walk between the chair legs and look up at magnified structural details normally hidden from view.</p>`,
    faqs: [
      { question: 'How big is it?', answer: 'The table stands about 10 feet high and is 20 feet long. Everything is scaled to exactly 3.6 times normal size, including the six matching chairs. The precision creates a convincing shift in perspective that makes adults feel child-sized.' },
      { question: 'Why make furniture so large?', answer: 'Therrien explored the viewer\'s relationship with scale throughout his career. The oversized furniture transports you back to childhood, when adult furniture felt impossibly big. Walking underneath, you experience that half-forgotten sensation of being small in a world built for someone larger.' },
      { question: 'Where can I see it?', answer: 'It\'s at <a href="/apps/masterpieces/museum/the-broad"><strong>The Broad</strong></a> in downtown Los Angeles. It was the first artwork installed in the museum and remains one of its two most visited pieces. Admission to The Broad\'s permanent collection is free.' },
      { question: 'Did Therrien make other oversized works?', answer: 'Yes. Over four decades, he created giant stacks of plates, enormous folding chairs, towering pots and pans, and other everyday objects at monumental scale. The approach was consistent: take something familiar, blow it up, and let the size shift change how you relate to it.' }
    ]
  },

  'gamma-calder': {
    description: `<p><a href="/apps/masterpieces/artist/alexander-calder"><strong>Alexander Calder</strong></a> made this hanging mobile in 1947 from sheet metal, wire, and paint. "Gamma" dates to what art historians call Calder's classical period, when his mobiles reached their most refined balance of form and movement. The shapes hang from delicate wire arms that shift with the slightest air current, creating constantly changing compositions. Marcel Duchamp coined the term "mobile" for these kinetic sculptures in 1931, while Jean Arp called Calder's stationary works "stabiles."</p>

<p>Calder (1898-1976) came from a family of sculptors but trained as a mechanical engineer at Stevens Institute of Technology before turning to art. That engineering background shows in how precisely his mobiles balance. During World War II, aluminum shortages pushed him toward carved wood, but after the war he returned to metal with renewed energy. "Gamma" is part of the Shirley Family Calder Collection at the <a href="/apps/masterpieces/museum/seattle-art-museum"><strong>Seattle Art Museum</strong></a>, one of the most important private Calder holdings in the country.</p>`,
    faqs: [
      { question: 'Who invented the mobile?', answer: 'Alexander Calder did, in 1931. Marcel Duchamp gave them the name "mobile," which means both "motion" and "motive" in French. Before Calder, no one had made sculpture that moved as its primary feature.' },
      { question: 'How does it move?', answer: 'It responds to natural air currents. Calder initially used small motors but abandoned them when he realized the pieces moved more gracefully on their own. The engineering precision of the wire armature means even a slight breeze creates slow, balanced rotations.' },
      { question: 'Why is it called Gamma?', answer: 'Calder often used abstract or scientific titles. Gamma is the third letter of the Greek alphabet and is used in physics and mathematics. Like many of his titles, it avoids narrative and lets the form speak for itself.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/seattle-art-museum"><strong>Seattle Art Museum</strong></a>, as part of the Shirley Family Calder Collection. It was first shown at the Buchholz Gallery in New York in December 1947.' }
    ]
  },

  'black-sun-noguchi': {
    description: `<p><a href="/apps/masterpieces/artist/isamu-noguchi"><strong>Isamu Noguchi</strong></a> carved this 9-foot-diameter ring from a single block of black Brazilian granite in 1969. The original stone weighed 30 tons. Eleven carvers in Japan worked on it for eight months, followed by four more months of polishing. The finished piece weighs 12 tons. Its circular opening frames views of downtown Seattle, Puget Sound, and the Olympic Mountains, turning the landscape into a composed image.</p>

<p>Noguchi (1904-1988) was born in Los Angeles to a Japanese poet and an American writer, and his work bridges Eastern and Western sculptural traditions. He apprenticed with Constantin Brancusi in Paris from 1927-29, learning direct stone carving and the idea that tool marks connect sculptor to material. "Black Sun" sits in Volunteer Park across from the <a href="/apps/masterpieces/museum/seattle-asian-art-museum"><strong>Seattle Asian Art Museum</strong></a>, where Noguchi specifically chose the site for its panoramic views. The sculpture draws on Japanese garden forms and the circular shapes he explored throughout his career.</p>`,
    faqs: [
      { question: 'How was it made?', answer: 'Eleven carvers in Japan worked for 8 months on a 30-ton block of black Brazilian granite, then spent 4 more months polishing. The finished sculpture weighs 12 tons and is 9 feet in diameter. Noguchi oversaw the process and chose the stone personally.' },
      { question: 'Why does it frame the skyline?', answer: 'Noguchi chose the Volunteer Park site specifically because the ring\'s opening would frame downtown Seattle, Puget Sound, and the Olympic Mountains. The sculpture turns the landscape into a composed image, functioning as both art object and viewing portal.' },
      { question: 'Who influenced Noguchi?', answer: 'He apprenticed with Constantin Brancusi in Paris from 1927-29, learning direct stone carving. Brancusi taught him to leave tool marks on sculpture as evidence of the maker\'s hand. Japanese garden traditions also shaped his approach to outdoor sculpture and landscape.' },
      { question: 'Where can I see it?', answer: 'In Volunteer Park in Seattle, directly across from the <a href="/apps/masterpieces/museum/seattle-asian-art-museum"><strong>Seattle Asian Art Museum</strong></a>. It was unveiled on September 12, 1969, and has been a Seattle landmark ever since.' }
    ]
  },

  'typewriter-eraser-scale-x': {
    description: `<p><a href="/apps/masterpieces/artist/claes-oldenburg"><strong>Claes Oldenburg</strong></a> and <strong>Coosje van Bruggen</strong> created this 19-foot stainless steel and fiberglass sculpture in 1999. It depicts a typewriter eraser: a circular rubber disk with stiff bristles that people once used to rub out typing mistakes before computers existed. The object was already obsolete when the artists made it, which was part of the point. Oldenburg remembered playing with these erasers in his father's office as a child, and the oversized recreation turns a forgotten tool into something monumental.</p>

<p>Oldenburg (1929-2022) and van Bruggen (1942-2009) were a husband-and-wife team who spent three decades making giant pop sculptures of everyday objects. They met when van Bruggen was a curator at the Stedelijk Museum in Amsterdam, married in 1977, and produced their first collaboration ("Flashlight") in 1981. This piece lives at the Olympic Sculpture Park in Seattle, part of the <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Seattle Art Museum</strong></a>'s outdoor collection. Other casts are installed at the National Gallery of Art Sculpture Garden in Washington, DC.</p>`,
    faqs: [
      { question: 'What is a typewriter eraser?', answer: 'A circular rubber disk with stiff bristles, first manufactured in the 1920s. Before computers and delete keys, people rubbed the eraser against paper to remove typing mistakes, then used the bristles to brush away debris. They disappeared as typewriters did.' },
      { question: 'Why memorialize something obsolete?', answer: 'Oldenburg believed obsolete objects carry nostalgia and cultural memory. He remembered playing with typewriter erasers in his father\'s office as a child. Making one 19 feet tall forces viewers to really look at an object most people have forgotten entirely.' },
      { question: 'How did Oldenburg and van Bruggen work together?', answer: 'Van Bruggen brought art historical knowledge from her curatorial career at the Stedelijk Museum. They married in 1977 and collaborated for over 30 years until her death in 2009. She called their works "Large-Scale Projects" and contributed conceptual and research elements.' },
      { question: 'Are there other versions?', answer: 'Yes. Multiple casts exist, including one at the National Gallery of Art Sculpture Garden in Washington, DC. The Olympic Sculpture Park version in Seattle is part of the <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Seattle Art Museum</strong></a>\'s outdoor collection.' }
    ]
  },

  'pair-of-masks': {
    description: `<p>This pair of wooden masks dates to around 1695, making them rare survivors from a period when very few African wood sculptures have endured. Wood deteriorates in tropical climates, and carbon-14 dating has confirmed only a handful of African wooden sculptures from before the 18th century. These masks retain traces of gesso, a white paint mixture applied to create a smooth base for further decoration or to achieve the white surface important in certain ceremonial contexts.</p>

<p>Masks played central roles across West and Central African cultures during this period. They appeared in court rituals, initiation ceremonies marking the transition from boyhood to adulthood, funerals, ancestor veneration, and masquerade performances that maintained social and spiritual order. The pairing of two masks suggests they may have been used together in a ceremony or represent complementary spiritual forces. They're now part of the collection at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why are these masks so rare?', answer: 'Wood is organic and deteriorates in tropical climates. Very few African wooden sculptures have survived from before the 1700s. Carbon-14 dating has confirmed only a handful of pieces from the 15th-17th centuries, making this pair from around 1695 genuinely scarce.' },
      { question: 'What is the gesso coating?', answer: 'Gesso is a white paint mixture traditionally made from chalk or gypsum with a binder. Applied to the wood surface, it created a smooth base for painting or achieved the white color important in certain ceremonial contexts.' },
      { question: 'What ceremonies used these masks?', answer: 'African masks from this era appeared in royal court rituals, initiation ceremonies for young men, funerals, ancestor worship, and masquerade performances. The specific ceremony for this pair isn\'t documented, but the pairing suggests they were used together.' },
      { question: 'Where can I see them?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois. The museum has one of the strongest African art collections in the United States.' }
    ]
  },

  'salt-cellar': {
    description: `<p>This ivory salt cellar dates to around 1625 and belongs to the Afro-Portuguese tradition, a fascinating chapter in art history where West African carvers created luxury objects for European buyers. Portuguese traders commissioned these pieces from guild carvers in the Kingdom of Benin (modern Nigeria), who adapted their court ivory techniques to European functional forms. Salt was expensive in Europe, and ornate salt cellars were status symbols at aristocratic dining tables.</p>

<p>Only six or seven master carvers in a hereditary, male-only guild produced these objects, with permission from the oba (king). Ivory, called "white gold," was prized for its smooth texture and ability to hold fine detail. These salt cellars represent the first documented African artworks made specifically for export. The piece is part of the collection at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, where it sits alongside other examples of cross-cultural exchange in the decorative arts.</p>`,
    faqs: [
      { question: 'Why did African artists make salt cellars for Europeans?', answer: 'Portuguese traders commissioned them starting in the 16th century. Salt was precious in Europe, and carved ivory salt cellars were luxury status symbols. The oba (king) of Benin permitted his guild carvers to fill these orders, creating a unique cross-cultural art trade.' },
      { question: 'How many carvers made these?', answer: 'Only six or seven men in a hereditary, male-only guild of ivory carvers. These artisans normally produced works exclusively for the royal court. The oba gave special permission for them to create salt cellars, spoons, and hunting horns for Portuguese visitors.' },
      { question: 'Why was ivory so valued?', answer: 'Ivory held fine detail, had a smooth luminous texture, and was extremely rare and expensive. Europeans called it "white gold." The material\'s prestige made it the perfect medium for objects given as courtship gifts or displayed at aristocratic tables.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois. It\'s part of the Mr. and Mrs. Martin A. Ryerson Collection.' }
    ]
  },

  'head-of-a-guardian-king': {
    description: `<p>This granite or limestone head dates to the Tang Dynasty (618-907 CE), when Buddhist art reached its peak in China. It depicts a Guardian King (Lokapala), one of the Four Heavenly Kings who protect the cardinal directions in Buddhist cosmology. These fierce warrior figures guarded temple entrances and tomb interiors, shielding sacred spaces and the deceased from evil spirits. The foreign facial features visible on many Tang guardian figures reflect the cosmopolitan nature of the dynasty, shaped by Silk Road trade with Central Asia, Persia, and beyond.</p>

<p>Tang Dynasty restrictions controlled how many objects could be placed in tombs based on social rank. A typical set included two guardian kings and two civil officials representing the four directions. This head was a gift from Robert Allerton and is now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. The expressive carving and dynamic features are hallmarks of Tang sculpture at its most confident.</p>`,
    faqs: [
      { question: 'What are the Four Guardian Kings?', answer: 'In Buddhist cosmology, the Four Guardian Kings (Lokapala) protect the four cardinal directions from Mount Sumeru. Each commands an army of supernatural beings and inspects human morality. They appear as fierce warriors with powerful bodies and intense expressions.' },
      { question: 'Why were guardian figures placed in tombs?', answer: 'Lokapalas protected the deceased in the afterlife from evil spirits. Tang Dynasty tombs typically contained a set of four figures: two guardian kings and two civil officials representing the cardinal directions and ensuring safe passage to the next life.' },
      { question: 'Why do Tang guardian figures have foreign features?', answer: 'The Tang Dynasty was one of the most cosmopolitan periods in Chinese history. Silk Road trade brought contact with Central Asian, Persian, and Western cultures, and sculptors incorporated these diverse features into guardian figures to emphasize their otherworldly power.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It was donated by Robert Allerton in 1921 and is part of the museum\'s Asian art collection.' }
    ]
  },

  'fragment-of-a-face': {
    description: `<p>This terracotta face fragment dates to the 14th or 15th century, a period when European sculptors rarely worked in fired clay. Terracotta sculpture was uncommon in the medieval West until the late 1300s, when advanced International Gothic workshops in Germany and Bohemia began experimenting with the medium. The International Gothic style favored elegant figures, flowing drapery, and refined naturalism, spreading across Europe through royal courts and aristocratic patronage.</p>

<p>This fragment likely came from a larger devotional sculpture of the Virgin Mary or a saint, originally displayed in a church or chapel. It may have been polychromed (painted in multiple colors) when complete. The Italian Renaissance later revived terracotta sculpture in the 15th century through artists like Luca della Robbia, who founded a family dynasty specializing in glazed and painted terracotta. The fragment is now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a reminder of how much medieval sculpture has been lost to time.</p>`,
    faqs: [
      { question: 'Why is medieval terracotta sculpture rare?', answer: 'European medieval artists preferred stone, wood, and precious metals for sculpture. Terracotta was uncommon until the late 14th century, when workshops in Germany and Bohemia started experimenting with it. Very few pieces survive, especially as fragments like this.' },
      { question: 'What was International Gothic?', answer: 'A sophisticated court style from the late 14th century characterized by elegant figures, flowing drapery, and refined naturalism. It spread across Europe through royal courts and aristocratic patronage, influencing painting, sculpture, and manuscript illumination.' },
      { question: 'What would this have been part of?', answer: 'Most likely a larger devotional figure of the Virgin Mary or a saint, displayed in a church or chapel. The original sculpture was probably painted in realistic colors (polychromy), a common practice for medieval religious sculptures.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It was a gift from Mr. and Mrs. Mark Phillips and measures about 4 inches tall.' }
    ]
  },

  'bodhisattva-in-thrice-bent-pose-tribhanga': {
    description: `<p>This gilt copper alloy figure from around 600 CE shows a bodhisattva in the <strong>tribhanga</strong> pose, meaning "three parts break." The body bends at the neck, waist, and knee, creating an elegant S-curve. In Buddhist art, this pose conveys grace and compassion, suggesting the bodhisattva's ease in the physical world while maintaining spiritual transcendence. A bodhisattva is an enlightened being who delays entering nirvana to help others achieve liberation from suffering.</p>

<p>The gilt surface gave the figure a golden radiance associated with spiritual enlightenment, while the copper alloy core allowed detailed casting using the lost-wax method. This was more practical and affordable than solid gold. Based on the date and materials, it was likely created in the Greater Kashmir region (possibly the Swat Valley in modern Pakistan) or in China during the Sui or early Tang dynasty, both major centers for Buddhist art. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is the tribhanga pose?', answer: 'Tribhanga means "three parts break." The body bends at neck, waist, and knee, creating an S-curve. It\'s one of the most graceful poses in Indian and Southeast Asian sculpture, conveying compassion and spiritual ease. The most famous ancient example is the Padmapani in Cave 1 at Ajanta (c. 478 CE).' },
      { question: 'What is a bodhisattva?', answer: 'An enlightened being who has earned nirvana but chooses to remain in the cycle of rebirth to help all sentient beings achieve liberation. Bodhisattvas embody compassion and are depicted with jewelry and crowns, unlike the simpler representations of the Buddha.' },
      { question: 'Why is it gilded?', answer: 'Gold represented spiritual enlightenment and the radiant nature of awakened beings. Gilding a copper alloy core was more practical than using solid gold while achieving the same luminous effect. The gold layer was applied through mercury gilding.' },
      { question: 'Where was it made?', answer: 'Likely in the Greater Kashmir region (possibly the Swat Valley in modern Pakistan) or in China during the Sui or early Tang dynasty. Both were major Buddhist art centers around 600 CE. The piece is now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.' }
    ]
  },

  'mirror-case-with-falconry-scene': {
    description: `<p>This carved ivory plaque from around 1325-1350 once protected a small hand mirror. Made in Paris by specialized craftsmen called <strong>pigniers</strong>, it depicts a falconry scene with a lady and gentleman hunting with birds of prey, accompanied by attendants. In medieval France, falconry served double duty: it was an aristocratic sport and a common metaphor for courtly love. The hunter pursuing prey mirrored the lover pursuing the beloved.</p>

<p>When paired with its matching half, a bayonet mount carved into the interior created a tight grip to protect the delicate mirror inside, which was made of silvered or mercury-lined glass. These luxury objects were marketed to the aristocracy and often given as courtship gifts or wedding presents. The ivory's smooth texture and ability to hold fine detail made it the ideal medium. This case is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, acquired through the Kate S. Buckingham Endowment.</p>`,
    faqs: [
      { question: 'What were pigniers?', answer: 'Specialized ivory carvers in medieval Paris who formed a recognized guild. They created luxury personal items including mirror cases, combs, and hair picks for aristocratic clients. The ivory\'s ability to hold fine detail made it ideal for these small, intricate objects.' },
      { question: 'Why a falconry scene?', answer: 'In medieval literature and art, falconry was a metaphor for courtly love. Just as the hunter pursues prey through a trained falcon, the courtly lover pursues the beloved through refined behavior. Mirror cases with romantic themes were popular courtship gifts.' },
      { question: 'How did these mirror cases work?', answer: 'Two carved ivory halves connected with a bayonet mount, a twisting mechanism that locked them together. Inside, a delicate silvered glass mirror was protected when closed. Think of it as a 14th-century compact.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It measures about 3.3 by 3.1 inches. Acquired through the Kate S. Buckingham Endowment in 1949.' }
    ]
  },

  'reliquary-casket-of-saints-adrian-and-natalia': {
    description: `<p>This silver and oak reliquary from around 1100-1200 CE was made in northern Spain to hold sacred relics of Saint Adrian. It's shaped like a miniature tomb with a tiled roof and Romanesque columns. Adrian was a Roman military officer in charge of persecuting Christians in the early 4th century. After watching the courage of those he was tormenting, he converted to Christianity, declared his faith, and was arrested and brutally martyred through dismemberment.</p>

<p>The story of his martyrdom is worked in <strong>repoussé</strong> (hammered from the reverse) on the four sides of the casket: his trial, his dismemberment, and the transport of his remains to a city near Constantinople by his devoted wife, Saint Natalia. The casket's miniature church architecture reflects the medieval belief that reliquaries should house sacred remains with architectural dignity. It's now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who was Saint Adrian?', answer: 'A Roman officer assigned to persecute Christians in the early 4th century. He was so moved by their courage that he converted and declared himself a Christian. He was arrested, dismembered, and his wife Natalia later transported his remains to safety near Constantinople.' },
      { question: 'What is repoussé?', answer: 'A metalworking technique where thin silver sheets are hammered from the reverse to create raised designs on the front. Specialized tools push the metal forward, creating three-dimensional narrative scenes. It\'s one of the oldest decorative metalwork methods.' },
      { question: 'Why is it shaped like a building?', answer: 'Medieval reliquaries were often designed as miniature churches or tombs to symbolize the sacred nature of their contents. This casket\'s tiled roof and Romanesque columns give it the dignity of a chapel, elevating the relics inside.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It measures about 6 by 10 inches and dates to the Romanesque period in northern Spain.' }
    ]
  },

  'cover-of-a-reliquary-container-with-the-virgin-and-child-on-the-crescent-moon': {
    description: `<p>This small mother-of-pearl disc from around 1480 once capped a reliquary container, a vessel for holding sacred relics. The luminous surface depicts the Virgin Mary and Christ Child standing on a crescent moon, an image drawn from Revelation 12:1: "a woman clothed with the sun, and the moon under her feet." This became a standard way to depict Mary as Queen of Heaven during the late medieval period.</p>

<p>Mother-of-pearl craftsmanship flourished in Bethlehem during the 15th century, when Franciscan friars introduced the skill to local Christian communities. Artisans cut the inner shells of molluscs into shapes, drew motifs on wood, carved outlines, and inlaid the shell pieces. The material's natural iridescence was thought to reflect divine light, making it ideal for religious objects. This cover is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why mother-of-pearl?', answer: 'The material\'s iridescent shimmer was believed to reflect divine light, making it especially appropriate for sacred objects. Its rarity and the skill required to work it added to the precious nature of reliquaries containing holy relics.' },
      { question: 'What does the crescent moon mean?', answer: 'It references Revelation 12:1, describing a woman "clothed with the sun, and the moon under her feet." This became the standard way to depict Mary as Queen of Heaven in late medieval art, emphasizing her role in the apocalyptic vision.' },
      { question: 'Where was it made?', answer: 'Likely in the Bethlehem or Jerusalem region. Franciscan friars established mother-of-pearl workshops there in the 15th century, training local Christian communities in the craft. The tradition continues in Bethlehem today.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s small: about 1.9 inches in diameter.' }
    ]
  },

  'transcendent-buddha-akshobhya': {
    description: `<p>This miniature gold and silver sculpture depicts Akshobhya, the "Unshakeable One," one of the five transcendent Buddhas in Mahayana Buddhism. Akshobhya embodies the transformation of anger into wisdom and is associated with mirror-like awareness that reflects reality without distortion. The combination of gold and silver signifies both spiritual enlightenment and purity, and the small size (about 2.75 inches tall) suggests it was made for personal devotion or a home altar.</p>

<p>The piece dates to the 9th or 10th century and comes from Central Java, Indonesia, during the rule of the Sailendra dynasty. This was the era when Borobudur, the world's largest Buddhist temple, was completed around 825 CE. Javanese workshops produced both monumental temple decorations and intimate devotional objects like this one, using the lost-wax casting method. The figure is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Akshobhya?', answer: 'One of the five transcendent Buddhas in Mahayana Buddhism, representing the eastern direction. His name means "Unshakeable." He embodies the transformation of anger into mirror-like wisdom that reflects reality without distortion.' },
      { question: 'Why gold and silver?', answer: 'Gold represented spiritual enlightenment and silver represented purity. Combined, they conveyed the sacred nature of a transcendent Buddha. The precious metals also demonstrated the patron\'s devotion and wealth.' },
      { question: 'What was happening in Java then?', answer: 'Central Java was in a Buddhist golden age under the Sailendra dynasty. This was when Borobudur (the world\'s largest Buddhist temple) was completed around 825 CE. Buddhist art, architecture, and scholarship flourished throughout the region.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a> in the Arts of Asia galleries. It stands about 2.75 inches tall.' }
    ]
  },

  'jaina-tirthankara-chandraprabha-standing-in-meditation-kayotsarga': {
    description: `<p>This 12th-century schist sculpture from Karnataka, South India, depicts Chandraprabha, the eighth of twenty-four Tirthankaras (spiritual teachers) in Jainism. His name means "moonlight," and he was named for his moon-white complexion. The figure stands in <strong>kayotsarga</strong>, a meditation pose that literally means "dismissing the body." Arms hang at the sides, and the posture demonstrates complete detachment from physical discomfort, a core Jain value.</p>

<p>At about 27 inches tall, this is a substantial piece of Jain devotional sculpture. The 12th century was a high point for Jain art in Karnataka, where artisans developed refined techniques for carving schist, a metamorphic stone favored for its workability and smooth finish. The slight swelling of the belly reflects pranic breath even in deep meditation, showing how closely Jain sculptors studied yogic practice. The figure was a gift of the Alsdorf Foundation and is now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is kayotsarga?', answer: 'A standing meditation posture meaning "dismissing the body." Arms hang at the sides with complete stillness. The pose demonstrates the tirthankara\'s mastery over physical discomfort and detachment from bodily needs, a central Jain spiritual practice.' },
      { question: 'Who is Chandraprabha?', answer: 'The eighth of twenty-four Tirthankaras in Jainism. His name means "moonlight," given for his moon-white complexion at birth. The crescent moon is his identifying symbol. Just as the moon illuminates darkness, his teachings illuminated the path to spiritual liberation.' },
      { question: 'What is a Tirthankara?', answer: 'Literally "ford-maker." An enlightened spiritual teacher in Jainism who has conquered the cycle of death and rebirth. The current cosmic age has twenty-four Tirthankaras, each of whom established communities and taught the path to liberation.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It stands about 27 inches tall and was a gift of the Alsdorf Foundation.' }
    ]
  },

  'statuette-of-a-male-figure': {
    description: `<p>This small bronze figure dates to around 500-400 BCE and comes from Umbria in central Italy. At just 2.75 inches tall, it served as a <strong>votive offering</strong> (ex voto) at a temple or sanctuary. Worshippers commissioned or purchased small bronze figures like this to give thanks for answered prayers, seek divine favor, or fulfill religious obligations. Thousands of these offerings accumulated at sacred sites over time.</p>

<p>Umbrian and Etruscan craftsmen cast these figures using the lost-wax method: a wax model was encased in clay, heated until the wax melted away, and then filled with molten bronze. After cooling, the clay was broken to reveal the bronze figure, which was refined by filing. The small size made bronze votives accessible to ordinary worshippers who couldn't afford monumental statues. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Dr. Theodore N. Zekman.</p>`,
    faqs: [
      { question: 'What was this used for?', answer: 'It was a votive offering (ex voto) dedicated at a temple or sanctuary. Worshippers gave these bronze figures to the gods as thanks for answered prayers, to seek divine favor, or to fulfill religious obligations. Thousands accumulated at sacred sites.' },
      { question: 'How was it made?', answer: 'Using the lost-wax method. A wax model was encased in clay, heated to melt the wax, and then filled with molten bronze. After cooling, the clay mold was broken away, and the figure was refined by filing. This technique allowed fine detail even at small scale.' },
      { question: 'Were these Etruscan?', answer: 'The statuette comes from Umbria in central Italy, a region influenced by both Etruscan and Greek artistic traditions. During the 5th century BCE, Etruscan workshops adopted Greek styles, and the boundaries between regional traditions were fluid.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s small: about 2.75 inches tall. A gift from Dr. Theodore N. Zekman.' }
    ]
  },

  'oval-cosmetic-box-lid-with-a-man-being-entertained-by-a-lyrist': {
    description: `<p>This carved gray schist lid dates to the 5th or 6th century CE and comes from the Gandhara region, which sat at the crossroads of the Silk Road in what's now Pakistan and northwest India. Gandharan art blended Greco-Roman, Persian, and Indian traditions in a way found nowhere else. The scene shows a man being entertained by a lyrist (lyre player), reflecting the leisure culture of the Gandharan elite.</p>

<p>These small stone containers were long called "cosmetic trays," but scholars now debate whether they actually held cosmetics. Most show no traces of pigment and little wear, suggesting a ritual or ceremonial function instead. The schist was abundant locally and held fine detail well. By the 5th-6th century, Gandharan art was in its late phase, still producing refined work but approaching decline after invasions by the Alchon Huns. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is Gandharan art?', answer: 'A unique fusion of Greco-Roman, Persian, and Indian traditions that developed in the ancient Gandhara region (modern Pakistan/Afghanistan) from the 1st-6th centuries CE. The region\'s Silk Road location created this distinctive multicultural style found nowhere else.' },
      { question: 'Was this actually for cosmetics?', answer: 'Probably not. Though long called "cosmetic trays," most examples show no traces of pigment and minimal wear. Scholars now think they likely served ritual or religious purposes rather than daily grooming, despite early interpretations based on ancient relief sculptures.' },
      { question: 'What does the entertainment scene mean?', answer: 'The lyrist scene reflects the sophisticated leisure culture of the Gandharan elite. Such scenes may show Dionysian influences from Greco-Roman culture or represent indigenous musical traditions, demonstrating the region\'s cultural fusion.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It measures about 4.5 by 3.5 inches and is carved from gray schist.' }
    ]
  },

  'walking-elephant-with-floral-caparison': {
    description: `<p>This ivory elephant from the 17th century comes from the Deccan region of India. It wears a <strong>caparison</strong>, the ornamental covering placed on elephants for ceremonial occasions, decorated with floral patterns that reflect Mughal-Persian aesthetic influences. The walking pose gives the small carving (about 4 by 5.5 inches) a sense of movement and life. Elephants held deep cultural significance in Indian courts as symbols of royal power, military strength, and divine authority.</p>

<p>Deccan artisans were renowned for ivory carving during the 16th-18th centuries. The Deccan sultanates competed with the Mughal court in cultural refinement while maintaining their own regional identity. This piece blends Persian design sensibilities with Indian sculptural traditions. It's now at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'What is a caparison?', answer: 'The decorative covering placed on elephants for ceremonies. It includes embroidered cloths, jeweled ornaments, bells, and metalwork that signified the animal\'s (and owner\'s) royal status. The floral patterns on this piece show Mughal-Persian influence.' },
      { question: 'Why were elephants so important in India?', answer: 'They symbolized royal power, military strength, and divine authority in both Hindu and Islamic traditions. Elephants were used in warfare, royal processions, and religious festivals. Owning them demonstrated a ruler\'s wealth and power.' },
      { question: 'What was the Deccan?', answer: 'The large plateau covering most of southern India. During the 17th century, it was home to several independent sultanates that blended Persian, Islamic, and Indian Hindu traditions, creating artistic styles that rivaled the Mughal court.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. A gift from Marilynn B. Alsdorf. About 4 by 5.5 inches.' }
    ]
  },

  'bodhisattva-manjushri': {
    description: `<p>This small bronze figure (about 3.5 inches) possibly depicts Manjushri, the Bodhisattva of Transcendental Wisdom in Mahayana Buddhism. The question mark in the title reflects scholarly uncertainty, since identifying specific bodhisattvas requires examining hand gestures (mudras), held attributes, and iconographic details that may be unclear or missing. Manjushri is typically depicted holding a flaming sword that cuts through ignorance and a book or lotus representing wisdom.</p>

<p>The piece dates to the 9th or 10th century and comes from Central Java, Indonesia, during the Sailendra dynasty. This was the period that produced Borobudur (completed c. 825 CE), the world's largest Buddhist temple, decorated with 2,672 relief panels and originally 504 Buddha statues. Javanese workshops cast both monumental temple decorations and intimate portable devotional objects like this one using the lost-wax method. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Manjushri?', answer: 'The Bodhisattva of Transcendental Wisdom in Mahayana Buddhism. He\'s typically shown holding a flaming sword (cutting through ignorance) and a book or lotus (representing wisdom). He\'s especially important in Tibetan and East Asian Buddhist traditions.' },
      { question: 'Why the question mark in the title?', answer: 'Identifying specific bodhisattvas requires examining hand gestures (mudras) and held attributes. When these details are unclear or missing, definitive identification becomes difficult. The question mark signals scholarly uncertainty about whether this figure is Manjushri or another bodhisattva.' },
      { question: 'What was Javanese Buddhist art like?', answer: 'Central Javanese workshops during the Sailendra period (c. 650-1025 CE) produced both massive temple decorations for sites like Borobudur and small portable images for private devotion. They used the lost-wax bronze casting method to create highly detailed religious sculptures.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s about 3.5 inches tall. A gift from Michael and Juliana Phillips.' }
    ]
  },

  'god-shiva-as-the-supreme-teacher-dakshinamurti': {
    description: `<p>This granite sculpture from 10th-century South India depicts Shiva as <strong>Dakshinamurti</strong>, the supreme teacher who transmits divine knowledge and spiritual wisdom. The name means "facing south," and images of this form traditionally occupied the south wall of Hindu temple shrines. The piece comes from Kodumbalur in Tamil Nadu, home to the Moovar Kovil (Three Temples) complex built in the 9th-10th century. At 53 inches tall, it's a major temple commission.</p>

<p>The Chola dynasty ruled much of South India from the 9th-13th centuries, producing one of the greatest periods of Tamil artistic achievement. Art historians consider the Kodumbalur sculptures important for understanding how Chola styles evolved before reaching their peak in later monumental temples. The refined ornamentation and balanced composition show the tradition in an early, experimental state. The sculpture was acquired through the Kate S. Buckingham Fund and is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does Dakshinamurti mean?', answer: '"Facing south." Shiva in this form is the supreme teacher of spiritual wisdom, arts, and yoga. Images of Dakshinamurti traditionally occupy the south wall of Hindu temple shrines, where Shiva silently transmits ultimate knowledge to sages seated at his feet.' },
      { question: 'What was the Chola period?', answer: 'The Chola dynasty ruled much of South India from the 9th-13th centuries. It produced one of the greatest periods of Tamil artistic achievement. Chola bronze and granite sculptures are considered masterpieces of Indian art, combining technical precision with spiritual expression.' },
      { question: 'Why is Kodumbalur significant?', answer: 'Its Moovar Kovil temple complex contains some of the finest early Chola sculptures. Art historians consider these 10th-century works crucial for understanding how Chola styles evolved before reaching full maturity in later monumental temples like Brihadisvara.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It stands 53 inches tall and was acquired through the Kate S. Buckingham Fund.' }
    ]
  },

  'god-vishnu': {
    description: `<p>This 9th-century bronze Vishnu stands about 7 inches tall and comes from Bangladesh or Eastern India, placing it within the Pala period (8th-12th centuries CE). Pala bronzes are among the most refined examples of South Asian metalwork, produced at major Buddhist and Hindu centers including the monasteries of Nalanda (near modern Patna) and Kurkihar (near Bodh Gaya). The alloy traditionally used eight metals (ashtadhatu), believed to have auspicious properties.</p>

<p>Vishnu is one of Hinduism's principal deities, known as the Preserver within the Hindu trinity alongside Brahma (Creator) and Shiva (Destroyer). During the Pala period, both Buddhism and Hinduism flourished in eastern India, with royal patrons supporting art for both religions. Small portable bronzes like this served as focal points for home shrines and private devotional practice, allowing daily puja (worship rituals) in domestic settings. The figure is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is a Pala bronze?', answer: 'Sculptures cast in bronze or brass during the Pala and Sena dynasties (8th-12th centuries) in eastern India and Bangladesh. They\'re prized for their refined craftsmanship and were major exports to Tibet, Southeast Asia, and beyond. Principal workshops operated at the monasteries of Nalanda and Kurkihar.' },
      { question: 'What is the eight-metal alloy?', answer: 'Called ashtadhatu, it combined gold, silver, copper, zinc, lead, tin, iron, and mercury. Hindu scriptural texts on sculpture-making specified this combination for its auspicious properties.' },
      { question: 'How was this used?', answer: 'As a focal point for a home shrine. The portable size allowed worshippers to maintain daily puja (worship rituals) in domestic settings. Wealthy merchants and monks also carried them during travels.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It stands about 7 inches tall. A gift from Mr. and Mrs. Mark Phillips.' }
    ]
  },

  'guardian-king-vaishravana-on-his-lion-mount': {
    description: `<p>This 17th-century terracotta sculpture from Nepal depicts Vaishravana, the Guardian King of the North and one of the Four Heavenly Kings in Buddhism. He serves a dual role: fierce protector deity and god of wealth. The figure sits atop a white snow lion with a green mane, which symbolizes subduing greed and obstacles. Vaishravana was especially popular among merchants, travelers, and anyone seeking protection from poverty or danger.</p>

<p>In traditional depictions, Vaishravana holds a banner of colored silks in one hand and a mongoose spitting jewels in the other, combining his protective and wealth-giving functions. The Himalayan terracotta tradition produced devotional sculptures for both monasteries and home shrines, with earthenware being more accessible than bronze or precious metal. This piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift of Marilyn Walter Grounds.</p>`,
    faqs: [
      { question: 'Who is Vaishravana?', answer: 'The Guardian King of the North, one of the Four Heavenly Kings protecting Buddhism. He serves as both fierce protector and god of wealth, making him popular among merchants, travelers, and anyone seeking protection from poverty or danger.' },
      { question: 'Why a lion mount?', answer: 'The white snow lion with a green mane symbolizes subduing greed and obstacles. In Buddhist iconography, the mount (vahana) a deity rides reveals important aspects of their character and function. The lion\'s roaring posture represents Vaishravana\'s authority over negative forces.' },
      { question: 'Why terracotta instead of bronze?', answer: 'Terracotta (fired earthenware) was more affordable than bronze or precious metals, making devotional sculptures accessible to a broader range of worshippers. It still allowed for detailed modeling and could be painted after firing.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. A gift of Marilyn Walter Grounds.' }
    ]
  },

  'pillow-with-boy-supporting-a-cloud-shaped-headdrest': {
    description: `<p>This ceramic pillow from the Jin Dynasty (1115-1234) shows a boy supporting a cloud-shaped headrest. It's an example of <strong>Cizhou ware</strong>, a type of sturdy earthenware produced at kilns throughout northern China from the late Tang through early Ming dynasties. Ceramic pillows first appeared during the Sui dynasty (581-618 CE) and remained popular for centuries. The cool surface of fired clay provided relief from summer heat in northern China's continental climate.</p>

<p>While initially assumed to be burial goods, scholars now believe ceramic pillows were used in daily life as well. The figural form, with a boy supporting the headrest, shows the creative freedom of Cizhou potters who went beyond simple geometric shapes. The green and yellow glazes come from copper and iron oxides applied over a white slip coating. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why sleep on ceramic?', answer: 'Ceramic pillows served as cooling aids during hot summer nights in northern China. The cool surface of fired clay provided relief from heat. They were used in daily life, not just as burial goods, as once believed.' },
      { question: 'What is Cizhou ware?', answer: 'A diverse range of Chinese ceramics produced from the late Tang through early Ming dynasties (9th-14th centuries) at kilns throughout northern China. Known for bold painted and carved decorations on a sturdy stoneware body, it was one of the most popular everyday ceramic traditions in China.' },
      { question: 'How were the colors made?', answer: 'The green glaze came from copper oxide and the yellow from iron oxide, both applied over a white slip coating on the earthenware body. The colors developed through chemical reactions during kiln firing at high temperatures.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a> in the Asian art galleries.' }
    ]
  },

  'plaque-with-local-deity-ghantakarna-and-spouse': {
    description: `<p>This small gilt bronze plaque from around 1600 comes from the Kathmandu Valley in Nepal. It depicts Ghantakarna ("Bell-Eared"), a folk deity who evolved into a companion of Kumara (the Hindu god of war). Ghantakarna sits on a peacock with his consort on his knee. He displays four arms holding peacock feathers, a rooster, a serpent, and a gesture of reassurance. The plaque was designed for placement in a miniature home shrine.</p>

<p>In Nepalese folk tradition, Ghantakarna protected cattle and warded off smallpox, a devastating pre-modern disease. That practical function explains his popularity in household shrines, where families sought divine protection for their livelihood and health. The gilt bronze technique, covering a bronze core with gold through mercury gilding, creates the lustrous surface appropriate for a divine image. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift of Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'Who is Ghantakarna?', answer: '"Bell-Eared," a Nepalese folk deity who became associated with Kumara, the god of war. He was worshipped for protecting cattle from disease and families from smallpox, making him important in everyday household religious practice in the Kathmandu Valley.' },
      { question: 'Why the peacock?', answer: 'The peacock connects Ghantakarna to Kumara (Karttikeya), the Hindu war god who rides a giant peacock. Peacocks symbolize beauty and the ability to consume poisonous snakes without harm, linking to the deity\'s protective function.' },
      { question: 'How is gilt bronze made?', answer: 'A bronze sculpture is cast using the lost-wax method, then coated with a gold-mercury amalgam and heated. The mercury evaporates, leaving a permanent gold layer bonded to the surface. The result is luminous and appropriate for depicting a deity.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s small: about 2.9 by 2.1 inches. A gift from Marilynn B. Alsdorf.' }
    ]
  }
};

async function main() {
  const slugs = Object.keys(enrichments);
  console.log(`Enriching ${slugs.length} sculptures...`);
  let updated = 0, notFound = 0, failed = 0;

  for (const slug of slugs) {
    const artwork = await prisma.artwork.findFirst({ where: { slug } });
    if (!artwork) {
      console.log(`NOT FOUND: ${slug}`);
      notFound++;
      continue;
    }

    try {
      const data = { updatedAt: new Date() };
      const e = enrichments[slug];
      if (e.description) data.description = e.description;
      if (e.faqs) data.faqs = e.faqs;

      await prisma.artwork.update({ where: { id: artwork.id }, data });
      updated++;
      if (updated % 5 === 0) console.log(`  Updated ${updated}...`);
    } catch (err) {
      console.error(`FAILED ${slug}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(err => { console.error(err); process.exit(1); });
