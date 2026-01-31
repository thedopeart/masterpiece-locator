const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// B2 Step 3: Enrich notable Met sculptures with researched descriptions + FAQs

const enrichments = {
  // ============ THE LITTLE FOURTEEN-YEAR-OLD DANCER ============
  'the-little-fourteen-year-old-dancer': {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> modeled this two-thirds life-size figure around 1880. The original was sculpted in wax, dressed in a real fabric bodice, tulle skirt, stockings, ballet shoes, and a horsehair wig tied with a satin ribbon. When he exhibited it at the 1881 Impressionist show in Paris, critics were genuinely shocked. Real clothing on a sculpture broke every accepted rule.</p>

<p>The model was <strong>Marie van Goethem</strong>, a young Belgian dance student at the Paris Opera school. She came from a poor family, and her story became a symbol of the hardships young dancers faced in 19th-century Paris. Degas created roughly 150 sculptures during his lifetime but exhibited only this one. The rest were found in his studio after his death.</p>

<p>The Met's version is a <strong>posthumous bronze cast from 1922</strong>, still dressed in a real cotton taffeta skirt. It stands in Gallery 815 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>. The mixed-media approach that scandalized 1881 audiences now reads as one of the most forward-thinking moves in 19th-century sculpture.</p>`,
    faqs: [
      { question: "Where can I see The Little Fourteen-Year-Old Dancer?", answer: "The Met's bronze cast is in <strong>Gallery 815</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. Other casts exist at the National Gallery of Art in Washington, the Tate in London, and the Musée d'Orsay in Paris. About 29 bronze casts were made after Degas's death." },
      { question: "Why was this sculpture controversial?", answer: "Degas dressed the wax original in <strong>real clothing and a horsehair wig</strong>, which broke every convention of fine art sculpture in 1881. Critics compared it to an anatomical specimen. The mix of materials (wax, fabric, hair) blurred the line between sculpture, mannequin, and doll." },
      { question: "Who was the model?", answer: "<strong>Marie van Goethem</strong>, a Belgian girl studying at the Paris Opera ballet school. She was about 14 when Degas began modeling her. Her family was poor, and she eventually left the ballet. Her story became symbolic of the difficult lives of young dancers in 19th-century Paris." },
      { question: "How big is it?", answer: "The figure stands <strong>97.8 cm (38.5 inches)</strong> tall on its wooden base. That's roughly two-thirds life size. The bronze version weighs significantly more than the original wax, but it preserves the real fabric skirt and satin hair ribbon that made the piece so unusual." }
    ]
  },

  // ============ UGOLINO AND HIS SONS ============
  'ugolino-and-his-sons': {
    description: `<p><a href="/apps/masterpieces/artist/jean-baptiste-carpeaux"><strong>Jean-Baptiste Carpeaux</strong></a> carved this marble group between 1865 and 1867. It depicts a scene from Canto XXXIII of Dante's <em>Inferno</em>: Count Ugolino della Gherardesca, a 13th-century Pisan nobleman, imprisoned with his sons and grandsons in a tower and left to starve. Carpeaux captures the moment Ugolino contemplates cannibalism.</p>

<p>The composition draws directly from Michelangelo's figures in the <em>Last Judgment</em> and from the ancient <strong>Laocoön group</strong> in the Vatican. Carpeaux won the Prix de Rome in 1854 and began the Ugolino subject while studying at the French Academy in Rome. This marble version was carved for the owner of the Saint-Béat quarry, specifically for display at the <strong>1867 International Exposition in Paris</strong>.</p>

<p>The total weight exceeds 4,955 pounds. It's one of the largest single sculptures at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, where it dominates the European Sculpture Court.</p>`,
    faqs: [
      { question: "Where can I see Ugolino and His Sons?", answer: "It's in the <strong>European Sculpture Court</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The marble group weighs nearly 5,000 pounds and is one of the largest sculptures in the Met's collection." },
      { question: "What story does it depict?", answer: "A scene from <strong>Dante's Inferno</strong> (Canto XXXIII). Count Ugolino was locked in a tower with his sons and grandsons by the Archbishop of Pisa and left to starve. The sculpture shows the moment he considers eating his own children. Dante placed Ugolino in the lowest circle of Hell." },
      { question: "How big is it?", answer: "The marble group stands <strong>197.5 cm (about 6 feet 6 inches)</strong> tall and weighs 4,955 pounds. The pedestal alone weighs 3,759 pounds. Carpeaux carved it from Saint-Béat marble between 1865 and 1867 for the 1867 Paris International Exposition." }
    ]
  },

  // ============ TEMPLE OF DENDUR ============
  'temple-of-dendur': {
    description: `<p>The Roman emperor Augustus built this <strong>sandstone temple</strong> around 15 BCE on the west bank of the Nile in Nubia, about 80 kilometers south of Aswan. It was dedicated to the Egyptian goddess Isis and to two deified sons of a local Nubian chieftain, Pedesi and Pihor. The reliefs show Augustus in pharaonic dress, making offerings to Egyptian gods.</p>

<p>Egypt gifted the temple to the United States in 1965 as thanks for American help saving Nubian monuments threatened by the Aswan High Dam. Without the rescue effort, the rising waters of Lake Nasser would have swallowed it. President Lyndon B. Johnson formally awarded it to the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1967.</p>

<p>Reconstruction began in 1975, and the gallery opened on September 27, 1978. The installation includes a <strong>reflecting pool</strong> meant to evoke the Nile. It's the only complete Egyptian temple in the Western Hemisphere and the venue for the annual Met Gala, making it one of the most photographed museum spaces on Earth.</p>`,
    faqs: [
      { question: "How old is the Temple of Dendur?", answer: "It was built around <strong>15 BCE</strong> during the reign of the Roman emperor Augustus. That makes it roughly 2,040 years old. Despite being Roman-era, it follows traditional Egyptian temple architecture and is decorated with hieroglyphic reliefs showing Augustus dressed as a pharaoh." },
      { question: "Why is an Egyptian temple in New York?", answer: "Egypt <strong>gifted it to the United States in 1965</strong> as thanks for American help saving Nubian monuments from the rising waters of the Aswan High Dam. The Met won the temple over other institutions. Reconstruction at the museum took three years." },
      { question: "How big is the temple?", answer: "The temple proper is about <strong>6.4 meters (21 feet) tall and 12.5 meters (41 feet) long</strong>. The freestanding gateway is 8 meters (26.5 feet) tall. The gallery housing it includes a reflecting pool and a massive glass wall facing Central Park." },
      { question: "Can I visit the Temple of Dendur?", answer: "Yes. It's in <strong>Gallery 131</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Met Fifth Avenue</strong></a>. Admission is pay-what-you-wish for New York residents. The gallery is also the venue for the annual Met Gala, one of the most high-profile fashion events in the world." }
    ]
  },

  // ============ WILLIAM THE HIPPO ============
  'william-the-hippo': {
    description: `<p>This small <strong>faience hippopotamus</strong> is the unofficial mascot of the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>. It was made during Egypt's Middle Kingdom, Dynasty 12, around 1961-1878 BCE. The blue-green glaze comes from copper, silica, and calcium. Lotus flowers and marsh plants painted on his body in black manganese pigment represent the Nile habitat where hippos lived.</p>

<p>Three of his four legs were <strong>deliberately broken off</strong> in antiquity. Ancient Egyptians believed that representations of living creatures could magically come alive in the afterlife. A hippo was one of the most dangerous animals in Egypt, so breaking the legs neutralized the threat while keeping the figure's symbolic power of fertility and rebirth.</p>

<p>He got the name "William" in 1931 from a caption in the British humor magazine <em>Punch</em>. He's been at the Met for over 100 years, acquired in 1917 from the tomb of Senbi at Meir, and remains one of the museum's most popular and most reproduced objects.</p>`,
    faqs: [
      { question: "Where can I see William the Hippo?", answer: "He's in <strong>Gallery 111</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, in the Egyptian Art wing. He's small (about 20 cm / 8 inches long) so look carefully. The Met gift shop sells replicas and merchandise featuring his likeness." },
      { question: "Why are his legs broken?", answer: "Three legs were <strong>deliberately broken in antiquity</strong>. Ancient Egyptians believed tomb figurines could come alive in the afterlife. Hippos were among the most dangerous animals in Egypt, so breaking the legs prevented this one from harming the tomb occupant while preserving its power as a fertility symbol." },
      { question: "How old is William?", answer: "About <strong>4,000 years old</strong>. He dates to Egypt's Middle Kingdom, Dynasty 12, roughly 1961-1878 BCE. He was found in the tomb of an official named Senbi at Meir and came to the Met in 1917 as a gift from Edward S. Harkness." },
      { question: "Why is he blue?", answer: "The <strong>blue-green faience glaze</strong> is made from copper, silica, and calcium. The color represents the Nile waters where hippos lived. The lotus and marsh plants painted on his body symbolize rebirth and regeneration, core themes in Egyptian burial practices." }
    ]
  },

  // ============ SPHINX OF HATSHEPSUT ============
  'sphinx-of-hatshepsut': {
    description: `<p>This colossal <strong>red granite sphinx</strong> portrays the female pharaoh Hatshepsut with the body of a lion and a human head wearing the nemes headcloth and false beard. It was one of at least six granite sphinxes that originally lined the processional avenue at Hatshepsut's mortuary temple at Deir el-Bahri, on the west bank of the Nile at Thebes.</p>

<p>After Hatshepsut's death, her nephew and successor <strong>Thutmose III ordered her monuments destroyed</strong>. This sphinx was deliberately smashed into fragments and dumped in a quarry near the temple. The Met's Egyptian Expedition recovered the pieces and painstakingly reassembled them. Traces of original blue and yellow paint survive on the surface, showing it was once brightly colored.</p>

<p>At nearly <strong>7.5 tonnes</strong>, it's one of the largest Egyptian objects at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, displayed in Gallery 131 alongside the Temple of Dendur.</p>`,
    faqs: [
      { question: "How big is the Sphinx of Hatshepsut?", answer: "It's <strong>164 cm (5 feet 5 inches) tall and 343 cm (11 feet 3 inches) long</strong>, weighing about 6,758 kg (14,900 pounds). It's carved from a single block of red granite and is one of the largest Egyptian objects at the <a href='/apps/masterpieces/museum/met'><strong>Met</strong></a>." },
      { question: "Who was Hatshepsut?", answer: "One of the very few women to rule Egypt as <strong>pharaoh</strong>. She reigned for about 20 years during Dynasty 18 (ca. 1473-1458 BCE) and was one of the most successful rulers of the New Kingdom. She adopted full male pharaonic regalia, including the false beard, in her official portraits." },
      { question: "Why was it smashed?", answer: "Hatshepsut's nephew and successor <strong>Thutmose III</strong> ordered her monuments destroyed after her death, apparently to erase her from history. This sphinx was smashed and dumped in a quarry near her temple at Deir el-Bahri. The Met's excavation team recovered and reassembled the fragments." }
    ]
  },

  // ============ HEAD OF TUTANKHAMUN ============
  'head-of-tutankhamun': {
    description: `<p>This <strong>indurated limestone</strong> fragment once belonged to a larger statue group showing the young pharaoh standing before a god. All that remains of the deity is a right hand touching the back of Tutankhamun's crown, a gesture signifying divine investiture of kingship. The king wears the <em>khepresh</em>, commonly called the "blue crown," likely a leather helmet with metal disks sewn onto it.</p>

<p>The sculpture dates to <strong>ca. 1336-1327 BCE</strong>, during Dynasty 18's post-Amarna period. It blends the naturalism of Akhenaten's artistic revolution with more traditional Egyptian conventions. Tutankhamun's figure was considerably smaller than the god's, following the standard Egyptian practice of hierarchical scaling.</p>

<p>It's on view in Gallery 121 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, acquired through the Rogers Fund in 1950.</p>`,
    faqs: [
      { question: "How big is the Head of Tutankhamun?", answer: "The surviving fragment is <strong>17.2 cm (6.75 inches) tall</strong>. The original complete statue group would have been much larger, showing Tutankhamun standing before a god. The king's smaller scale indicated his subordinate relationship to the deity." },
      { question: "What is Tutankhamun wearing?", answer: "The <strong><em>khepresh</em></strong>, commonly called the 'blue crown.' Despite its popular nickname ('war crown'), it was worn in many contexts. It was probably a leather helmet with metal disks sewn on, painted blue. This sculpture shows fine detail in the crown's surface pattern." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 121</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, in the Egyptian Art wing. The Met acquired it through the Rogers Fund in 1950." }
    ]
  },

  // ============ MARBLE SEATED HARP PLAYER ============
  'marble-seated-harp-player': {
    description: `<p>This <strong>Cycladic marble figure</strong> dates to roughly 2800-2700 BCE, making it nearly 5,000 years old. It depicts a man seated in a high-backed chair, playing a large frame harp. The face is almost featureless: just a nose, brow ridge, large hollow ears, and slightly parted lips that suggest singing. It's one of the <strong>earliest known depictions of a musician</strong> in the history of art.</p>

<p>Thought to come from the Greek island of Naxos, it stands just 29.2 cm (11.5 inches) tall. Pigment analysis has revealed traces of paint on the back of the head, confirming that Cycladic sculptures (often assumed to be pure white) were originally colored. The simplified, almost abstract forms of Cycladic art strongly influenced 20th-century modernists like Brancusi, Modigliani, and Henry Moore.</p>

<p>It's on view in Gallery 151 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, in the Robert and Renée Belfer Court for Early Greek Art.</p>`,
    faqs: [
      { question: "How old is the Seated Harp Player?", answer: "About <strong>4,800 years old</strong>, dating to 2800-2700 BCE. It comes from the Cycladic civilization of the Aegean islands, predating Classical Greece by over 2,000 years. It's one of the earliest known depictions of a musician anywhere in the world." },
      { question: "Where can I see the Seated Harp Player?", answer: "It's in <strong>Gallery 151</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, in the Robert and Renée Belfer Court for Early Greek Art. It was acquired in 1947 and is thought to come from the island of Naxos." },
      { question: "Was it originally white?", answer: "No. <strong>Pigment analysis found traces of paint</strong> on the back of the head. Like most ancient marble sculptures, it was originally colored. The clean white appearance is the result of thousands of years of wear, not the artist's intention." }
    ]
  },

  // ============ BRONZE HORSE ============
  'bronze-horse': {
    description: `<p>When the Met acquired this <strong>Greek bronze horse</strong> in 1923, scholars identified it as a 5th-century BCE Early Classical masterpiece. For decades, it was considered the single most important object in the museum's entire Classical collection. Then, in the late 1960s, its authenticity was questioned on technical grounds.</p>

<p>Extensive scientific testing followed, including thermoluminescence dating of the clay core. The analysis confirmed the horse was genuinely ancient but <strong>re-dated it to the Late Hellenistic period</strong> (late 2nd-1st century BCE), several centuries younger than originally believed. The controversy didn't diminish its quality. The naturalistic proportions and calm stance represent a high point of Hellenistic bronze-working.</p>

<p>The horse stands 40.2 cm (15.8 inches) tall and was cast using the direct lost-wax method. It's said to come from the sea near Mahdia, Tunisia, possibly cargo from an ancient shipwreck. You can see it in Gallery 164 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "How old is the Met's Bronze Horse?", answer: "It dates to the <strong>late 2nd-1st century BCE</strong> (Late Hellenistic period). It was originally thought to be a 5th-century BCE masterpiece, but scientific testing in the 1960s and 70s re-dated it. The controversy actually made it more famous." },
      { question: "Where was it found?", answer: "It's said to come from <strong>the sea near Mahdia, Tunisia</strong>, suggesting it was cargo on an ancient shipwreck. The Mahdia wreck, discovered in 1907, yielded many Greek artworks being transported to Rome. The horse was acquired by the Met in 1923." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 164</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. Standing 40.2 cm (about 16 inches) tall, it was cast using the direct lost-wax method and is one of the finest surviving ancient bronze animal sculptures." }
    ]
  },

  // ============ SENWOSRET III AS A SPHINX ============
  'senwosret-iii-as-a-sphinx': {
    description: `<p>This sphinx portrays <strong>Pharaoh Senwosret III</strong> of Dynasty 12, carved from a single block of anorthosite gneiss quarried in Nubia. It dates to roughly 1878-1840 BCE. The stone's distinctive dark grain sets it apart from the more common limestone and granite Egyptian sculptures.</p>

<p>Unlike Old Kingdom sphinxes with serene, idealized faces, this one shows individualized, almost <strong>careworn features</strong>: heavy-lidded eyes and a downturned mouth. Senwosret III was one of the greatest pharaohs of the Middle Kingdom, and his portraits mark a shift toward realism in royal sculpture. The sphinx combines his face with the body of a lion, a pairing that symbolized the king's power merged with leonine strength.</p>

<p>It weighs 114 kg (252 pounds) and may have originally stood at Karnak in Upper Egypt. It's on view in Gallery 111 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "How old is this sphinx?", answer: "About <strong>3,900 years old</strong>, dating to ca. 1878-1840 BCE during Egypt's Middle Kingdom, Dynasty 12. It was a gift of Edward S. Harkness to the Met in 1917 and possibly came from Karnak in Upper Egypt." },
      { question: "What stone is it carved from?", answer: "<strong>Anorthosite gneiss</strong>, a hard, beautifully grained stone quarried in Nubia. It's darker and more distinctive than the typical limestone or granite used for most Egyptian sculpture. The entire sphinx was carved from a single block." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 111</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, in the Egyptian Art wing. It weighs 114 kg (252 pounds) and measures 73 cm (29 inches) long." }
    ]
  },

  // ============ HAREMHAB AS A SCRIBE ============
  'haremhab-as-a-scribe-of-the-king': {
    description: `<p>This <strong>granodiorite statue</strong> shows Haremhab seated cross-legged with a papyrus scroll on his lap, the classic scribe pose. The text on the scroll is a hymn to the god Thoth, patron of writing. When this was made, Haremhab served as royal scribe and general of the army under Tutankhamun. He hadn't yet become pharaoh himself.</p>

<p>By depicting himself as a scribe, Haremhab placed himself among the educated elite, following a tradition over <strong>1,000 years old</strong> by his time. Literacy was rare in ancient Egypt and carried enormous prestige. Haremhab later became the last pharaoh of the 18th Dynasty, rising from military general to ruler.</p>

<p>The statue dates to roughly 1336-1323 BCE and was found at the Ptah Temple in Memphis. It stands 113 cm (44.5 inches) tall and is on view in Gallery 121 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "Who was Haremhab?", answer: "A <strong>military general who became pharaoh</strong>. He served under Tutankhamun as royal scribe and commander of the army before ascending to the throne as the last ruler of the 18th Dynasty. This statue was made before he became pharaoh." },
      { question: "What is he holding?", answer: "A <strong>papyrus scroll</strong> on his lap, inscribed with a hymn to the god Thoth, patron of writing. The cross-legged scribe pose was one of the most prestigious poses in Egyptian art, signifying literacy and education." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 121</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The granodiorite statue stands 113 cm (44.5 inches) tall. It was found at the Ptah Temple in Memphis and came to the Met in 1923." }
    ]
  },

  // ============ ADAM (TULLIO LOMBARDO) ============
  'adam': {
    description: `<p><strong>Tullio Lombardo</strong> carved this life-sized nude around 1490-1495 in Venice. It's the <strong>first freestanding nude marble sculpture created since antiquity</strong>, making it one of the most significant <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> sculptures in existence. Adam's pose draws from ancient Roman figures of Antinous and Bacchus, reinterpreted with what scholars describe as "almost Attic simplicity."</p>

<p>It originally stood in a niche on the monumental tomb of Doge Andrea Vendramin in the church of Santi Giovanni e Paolo in Venice. On October 6, 2002, its pedestal collapsed at the Met. <strong>The statue shattered into 28 large pieces and hundreds of smaller fragments.</strong> It took 12 years of conservation before the restored Adam went back on display in 2014.</p>

<p>Now the focal point of Gallery 504 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, it stands 191.8 cm (75.5 inches) tall and is widely considered the most important Italian Renaissance sculpture in North America.</p>`,
    faqs: [
      { question: "Why is this sculpture historically important?", answer: "It's the <strong>first life-sized freestanding nude marble sculpture since antiquity</strong>. Tullio Lombardo created it around 1490-1495, reviving a tradition that had been dormant for over a thousand years. It's considered the most important Italian <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> sculpture in North America." },
      { question: "Did the statue really shatter?", answer: "Yes. On <strong>October 6, 2002</strong>, the pedestal supporting it collapsed at the Met. Adam broke into 28 large pieces and hundreds of fragments. It took the museum's conservation team <strong>12 years</strong> to reassemble and restore it. The restored sculpture went back on view in 2014." },
      { question: "Where can I see it?", answer: "It's the focal point of <strong>Gallery 504</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The Venetian Sculpture Gallery positions Adam in a niche inspired by its original setting on the Vendramin tomb in Venice." }
    ]
  },

  // ============ BRONZE STATUE OF TREBONIANUS GALLUS ============
  'bronze-statue-of-the-emperor-trebonianus-gallus': {
    description: `<p>This <strong>nearly complete monumental Roman bronze</strong> stands 241 cm (almost 8 feet) tall and is one of the very few large-scale bronze statues from the 3rd century CE to survive. Most ancient bronzes were melted down for reuse, making this an extraordinarily rare survival. It shows the figure in heroic nudity, a convention borrowed from Classical Greek art.</p>

<p>There's a deliberate contrast between the <strong>idealized muscular body and the brutish, realistic portrait head</strong>. This tension between ideal and real is characteristic of 3rd-century Roman art. The identification as Emperor Trebonianus Gallus (who ruled from 251-253 CE) is based on coin portraits, though some scholars have debated the attribution.</p>

<p>The statue was reportedly found near the church of San Giovanni in Laterano in Rome. It's on view in Gallery 169 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, acquired through the Rogers Fund in 1905.</p>`,
    faqs: [
      { question: "Why is this statue so rare?", answer: "It's one of <strong>very few nearly complete monumental Roman bronzes</strong> from the 3rd century to survive. Ancient bronzes were routinely melted down for reuse, especially during times of economic stress. At 241 cm (nearly 8 feet) tall, surviving at this scale is extremely unusual." },
      { question: "Who is depicted?", answer: "Probably <strong>Emperor Trebonianus Gallus</strong> (ruled 251-253 CE), identified by comparison with his coin portraits. He's shown in 'heroic nudity,' a Greek convention adopted by Roman emperors. He was murdered by his own troops after just two years on the throne." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 169</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. The Met acquired it in 1905 through the Rogers Fund. It was reportedly found near San Giovanni in Laterano in Rome." }
    ]
  },

  // ============ MASTABA TOMB OF PERNEB ============
  'mastaba-tomb-of-perneb': {
    description: `<p>This is an <strong>actual ancient Egyptian tomb</strong>, not a replica. The limestone mastaba facade and decorated offering chapel were purchased from the Egyptian government in 1913, dismantled, shipped to New York, and reconstructed at the entrance to the Met's Egyptian galleries. Visitors can walk inside.</p>

<p>Perneb was a palace administrator during late Dynasty 5, around 2381-2323 BCE. His tomb includes a decorated offering chapel, a secondary offering chamber, and a <strong>serdab</strong> (sealed statue chamber). The serdab has a slot through which incense and chanting could reach the statue inside, believed to house Perneb's spirit.</p>

<p>The mastaba (Arabic for "bench") is a flat-roofed, rectangular structure with sloping sides, the standard tomb type for elite Egyptians before pyramids became exclusive to royalty. It's one of the first things visitors encounter in the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>'s Egyptian wing.</p>`,
    faqs: [
      { question: "Is this a real tomb?", answer: "Yes. It's an <strong>actual 4,400-year-old Egyptian tomb</strong>, dismantled at Saqqara in 1913, shipped to New York, and reconstructed at the Met. Visitors can walk inside the offering chapel and see the original carved reliefs on the walls." },
      { question: "Who was Perneb?", answer: "A <strong>palace administrator</strong> during Dynasty 5, around 2381-2323 BCE. His tomb at Saqqara was a mastaba, the standard elite tomb type. It includes a serdab (sealed chamber) with a slot for incense to reach a statue believed to house his spirit." },
      { question: "Where is it at the Met?", answer: "It's at the <strong>entrance to the Egyptian Art wing</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>. It was a gift from Edward S. Harkness in 1913 and is one of the first things visitors see when entering the Egyptian galleries." }
    ]
  },

  // ============ MARBLE STATUE OF A WOUNDED AMAZON ============
  'marble-statue-of-a-wounded-amazon': {
    description: `<p>This Roman marble copy, also called the <strong>Lansdowne Amazon</strong>, reproduces a Greek bronze original from around 450-425 BCE. The ancient writer Pliny described a famous competition among five sculptors (including Phidias, Polykleitos, and Kresilas) to create Amazon statues for the Temple of Artemis at Ephesus. This type is attributed to either Polykleitos or Kresilas.</p>

<p>The figure is a wounded warrior who has lost her weapons. She bleeds from a wound under her right breast, but her face shows no sign of pain, reflecting the Greek ideal of <strong>dignified composure in suffering</strong>. Her chiton is unfastened at one shoulder, belted at the waist with a makeshift piece of horse bridle. She rests her right arm on her head in a gesture associated with sleep or death.</p>

<p>The statue stands over 2 meters tall. John D. Rockefeller Jr. donated it to the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1932. It passed through the Borghese Collection and Lansdowne House before reaching New York.</p>`,
    faqs: [
      { question: "Who made the original?", answer: "The Greek bronze original (ca. 450-425 BCE) is attributed to either <strong>Polykleitos or Kresilas</strong>, both participants in a famous competition to create Amazon statues for the Temple of Artemis at Ephesus. This Roman marble copy dates to the 1st-2nd century CE." },
      { question: "Why is she called the Lansdowne Amazon?", answer: "The statue was in <strong>Lansdowne House</strong> in London from the 1770s until 1930. Before that, it was in the Borghese Collection in Rome. The name stuck even after John D. Rockefeller Jr. donated it to the Met in 1932." },
      { question: "How big is it?", answer: "It stands <strong>203.8 cm (about 6 feet 8 inches)</strong> tall. The lower legs, feet, and parts of the right arm are 18th-century restorations. The original wound visible under the right breast was part of the Greek design, showing the Amazon's composure despite her injury." }
    ]
  },

  // ============ KNEELING HATSHEPSUT ============
  'kneeling-hatshepsut': {
    description: `<p>This large <strong>granite statue</strong> shows the female pharaoh Hatshepsut kneeling and offering two round vessels to the god Amun. The inscription indicates she presents <em>Maat</em> (truth, order, justice). She wears the full male pharaonic regalia: the nemes headcloth, shendyt kilt, and false beard. Despite the masculine dress, her features retain a subtly feminine quality.</p>

<p>It originally stood along the processional avenue on the middle terrace of her <strong>mortuary temple at Deir el-Bahri</strong>, Thebes. Like all of Hatshepsut's monuments there, it was deliberately smashed by her nephew Thutmose III after her death. The Met's Egyptian Expedition recovered the fragments in the 1920s-1930s and reconstructed them with metal armatures and plaster fills.</p>

<p>The statue stands nearly 3 meters (about 10 feet) tall and is on view in Gallery 115 at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, in a gallery devoted entirely to Hatshepsut's statuary.</p>`,
    faqs: [
      { question: "How big is the Kneeling Hatshepsut?", answer: "About <strong>295.9 cm (nearly 10 feet) tall</strong> and weighing roughly 3,175 kg (7,000 pounds). It's carved from granite and is one of several monumental Hatshepsut statues recovered from her mortuary temple at Deir el-Bahri by the Met's expedition team." },
      { question: "Why was it destroyed?", answer: "Hatshepsut's nephew <strong>Thutmose III</strong> ordered all her monuments at Deir el-Bahri smashed after her death, apparently to erase her legacy. The Met reconstructed this statue from recovered fragments using metal armatures and plaster to fill gaps." },
      { question: "Where can I see it?", answer: "It's in <strong>Gallery 115</strong> at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a>, in a room dedicated to Hatshepsut's statuary. Multiple reconstructed statues from her temple are displayed together." }
    ]
  },

  // ============ BRONZE VEILED DANCER ============
  'bronze-statuette-of-a-veiled-and-masked-dancer': {
    description: `<p>This small Hellenistic bronze captures a dancer mid-spin, her entire body wrapped in thin fabric that clings to her form. The drapery swirls around her in an effect known as "wet drapery," making the <strong>bronze look like transparent cloth</strong>. Her face is covered by a veil and mask, adding mystery to the figure. She dates to the 3rd-2nd century BCE.</p>

<p>The technical skill required to cast fabric this thin in bronze is extraordinary. The artist achieved something almost paradoxical: hard metal that looks soft and weightless. The dancer is likely performing in a theatrical context. Greek and Hellenistic art pushed the depiction of fabric in motion to extreme levels, and this piece is among the finest surviving examples.</p>

<p>She stands about 20 cm (8 inches) tall and is on view at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "What makes this bronze special?", answer: "The <strong>drapery looks like real fabric</strong> despite being cast bronze. The 'wet drapery' technique makes the thin veil cling to the dancer's body while swirling outward from her spin. Casting bronze to look this delicate required extraordinary skill." },
      { question: "Who is the dancer?", answer: "She's likely a <strong>theatrical performer</strong>, not a specific individual. Her face is covered by both a veil and mask, which was common in Greek theatrical performances. The piece dates to the 3rd-2nd century BCE, during the Hellenistic period." },
      { question: "Where can I see it?", answer: "It's at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, in the Greek and Roman Art galleries. Standing about 20 cm (8 inches) tall, it's small but considered one of the finest Hellenistic bronzes in the collection." }
    ]
  },
};

async function seed() {
  let updated = 0;
  let failed = 0;

  for (const [slug, data] of Object.entries(enrichments)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date(),
        }
      });
      console.log(`✓ Enriched: ${slug} (${data.faqs.length} FAQs)`);
      updated++;
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone: ${updated} enriched, ${failed} failed`);
  await prisma.$disconnect();
}

seed();
