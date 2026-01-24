const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Egyptian Sculpture Descriptions ===\n');

  const updates = [
    {
      slug: 'tutankhamun-golden-mask',
      description: `<p>The <strong>funerary mask of Tutankhamun</strong> is ancient Egypt's most famous artifact, created around 1323 BCE to cover the mummified face of the young pharaoh. Weighing 11 kilograms of solid <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a>, the mask features inlaid stripes of <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> lapis lazuli on the nemes headdress. The eyes are crafted from obsidian and quartz, giving the 19-year-old king an eternal gaze across millennia.</p>
<p>British archaeologist <strong>Howard Carter</strong> discovered the mask in 1925 when he opened the innermost coffin in Tutankhamun's tomb. The burial chamber had remained untouched for over 3,200 years. X-ray analysis revealed the mask was hammered from two separate sheets of gold, with the face sheet being thicker and of higher purity than the headdress. In 2015, the mask's <strong>braided beard</strong> was accidentally knocked off during cleaning and hastily reglued, requiring professional restoration.</p>
<p>The mask now resides at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a> near the Giza pyramids, where it anchors the complete Tutankhamun collection.</p>`,
      faqs: [
        {
          question: "Where can I see Tutankhamun's golden mask?",
          answer: "The mask is displayed at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo, Egypt. It moved there from the Egyptian Museum in Tahrir Square as part of the world's largest archaeological museum project."
        },
        {
          question: "How much gold is in Tutankhamun's mask?",
          answer: "The mask contains <strong>11 kilograms</strong> (24 pounds) of solid gold. The face portion uses higher-purity <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> than the headdress, suggesting different workshops may have crafted each section."
        },
        {
          question: "Why is the mask so famous?",
          answer: "It's the only <strong>intact pharaonic burial mask</strong> ever found. When Howard Carter discovered it in 1925, photographs circled the globe, making Tutankhamun's face the symbol of ancient Egypt's wealth and artistry."
        },
        {
          question: "How old is Tutankhamun's mask?",
          answer: "The mask dates to approximately <strong>1323 BCE</strong>, over 3,300 years old. Tutankhamun died at 19, and the mask preserves idealized features of the young king for eternity."
        }
      ]
    },
    {
      slug: 'statue-of-khafre',
      description: `<p>The <strong>diorite statue of Khafre</strong> depicts the Fourth Dynasty pharaoh seated on a lion throne, his hands resting on his knees in the classic pose of Egyptian royal power. Carved around 2500 BCE from extremely hard diorite gneiss, the sculpture stands 168 centimeters tall. Behind Khafre's head, a <strong>Horus falcon</strong> spreads its wings protectively, an unprecedented detail that links the living king directly to the sky god.</p>
<p>French archaeologist Auguste Mariette discovered the statue in 1860 in a pit at Khafre's valley temple in Giza. The sculpture had been deliberately buried, possibly to protect it from destruction. The <strong>polished stone</strong> surface still gleams after 4,500 years, demonstrating the technical mastery of Old Kingdom craftsmen working one of earth's hardest stones without metal tools.</p>
<p>Khafre built the second-largest Giza pyramid and likely commissioned the <strong>Great Sphinx</strong>. His statue now anchors the Egyptian collection at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Statue of Khafre displayed?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Giza, Egypt. It stood for decades in the Egyptian Museum before transferring to the new facility."
        },
        {
          question: "What stone is the Khafre statue made from?",
          answer: "The statue is carved from <strong>diorite gneiss</strong>, one of the hardest stones in ancient Egypt. Craftsmen shaped it using copper tools and abrasive sand, a process requiring extraordinary skill and patience."
        },
        {
          question: "What does the falcon behind Khafre represent?",
          answer: "The <strong>Horus falcon</strong> embracing the king's head shows divine protection. This identifies Khafre as the living embodiment of Horus, establishing a visual tradition that would last three millennia."
        },
        {
          question: "How big is the Statue of Khafre?",
          answer: "The seated figure measures <strong>168 cm (66 inches)</strong> tall. The near life-size scale and flawless proportions made it the finest royal sculpture of the Old Kingdom period."
        }
      ]
    },
    {
      slug: 'menkaure-and-his-queen',
      description: `<p>This <strong>double statue of Menkaure and Khamerernebty II</strong> shows the Fourth Dynasty pharaoh standing beside his queen, their bodies touching in a rare display of royal intimacy. Carved around 2490 BCE from graywacke (a dark metamorphic stone), the sculpture stands 142 centimeters tall. The queen's arm wraps around her husband's waist while her other hand rests on his arm, a pose suggesting genuine affection rather than mere protocol.</p>
<p>American archaeologist George Reisner excavated the statue in 1910 from Menkaure's valley temple at Giza. The sculpture remained unfinished: the king's body is fully polished while areas of the base still show chisel marks. Some scholars believe <strong>Menkaure died</strong> before completion, leaving his craftsmen to inter the work as-is. The queen's sheer dress, carved to reveal her body beneath, demonstrates sophisticated stone-working technique.</p>
<p>The statue now resides at the <strong>Museum of Fine Arts, Boston</strong>, one of the finest examples of Old Kingdom pair statuary outside Egypt.</p>`,
      faqs: [
        {
          question: "Where can I see Menkaure and His Queen?",
          answer: "The statue is displayed at the <strong>Museum of Fine Arts, Boston</strong>. It was excavated by the Harvard-Boston expedition in 1910 and has remained in Boston's collection since."
        },
        {
          question: "Why is the statue unfinished?",
          answer: "Scholars believe <strong>Menkaure died</strong> before craftsmen completed the work. The polished figure contrasts with rough chisel marks on the base, suggesting abrupt abandonment around 2490 BCE."
        },
        {
          question: "What does the pose show?",
          answer: "The queen's embrace suggests <strong>genuine marital affection</strong>, unusual in rigid Egyptian royal art. This intimate pose influenced couple statuary for centuries afterward."
        },
        {
          question: "How big is Menkaure and His Queen?",
          answer: "The graywacke sculpture stands <strong>142.2 cm (56 inches)</strong> tall. The dark stone and polished surfaces create a striking presence in the Boston museum's Egyptian galleries."
        }
      ]
    },
    {
      slug: 'colossal-ramesses-ii-gem',
      description: `<p>This <strong>red granite colossus of Ramesses II</strong> once stood at the entrance to the Temple of Ptah in Memphis, ancient Egypt's first capital. Carved around 1250 BCE during the New Kingdom, the statue rises 11 meters tall and weighs approximately 83 tons. Ramesses commissioned hundreds of colossal statues throughout his 66-year reign, but this example ranks among the finest for its preserved details and imposing scale.</p>
<p>The statue lay fallen for centuries before being excavated in 1820. It spent decades displayed outdoors in Cairo's Ramesses Square, where pollution began damaging the ancient stone. In 2006, engineers moved the colossus at night through Cairo's streets to protect it from vibrations and heat. The <strong>twelve-hour journey</strong> covered just 400 meters, requiring a specially built frame and hydraulic lifts.</p>
<p>Now standing in the atrium of the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, the statue welcomes visitors as it once greeted worshippers at Memphis over three millennia ago.</p>`,
      faqs: [
        {
          question: "Where is the Colossal Ramesses II statue?",
          answer: "The statue stands in the atrium of the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near the Giza pyramids. It moved from Ramesses Square in downtown Cairo to protect it from urban pollution."
        },
        {
          question: "How big is the Ramesses II colossus?",
          answer: "The <strong>red granite</strong> statue stands 11 meters (36 feet) tall and weighs about 83 tons. Moving it required a specially designed frame and a nighttime journey through Cairo's streets."
        },
        {
          question: "How old is the Colossal Ramesses II?",
          answer: "Craftsmen carved the statue around <strong>1250 BCE</strong> during Ramesses II's reign. The pharaoh ruled for 66 years and commissioned more colossal statues than any other Egyptian king."
        },
        {
          question: "Where did the statue originally stand?",
          answer: "The colossus originally stood at the <strong>Temple of Ptah in Memphis</strong>, Egypt's ancient capital. It marked the entrance to one of the country's most important religious sites."
        }
      ]
    },
    {
      slug: 'rosetta-stone',
      description: `<p>The <strong>Rosetta Stone</strong> is a granodiorite slab inscribed with a decree from 196 BCE praising Pharaoh Ptolemy V. What makes it invaluable isn't the content but the presentation: the same text appears in <strong>three scripts</strong> (hieroglyphic, Demotic, and ancient Greek). This trilingual key allowed scholars to finally decode hieroglyphics after centuries of failed attempts, unlocking ancient Egypt's written history.</p>
<p>French soldiers discovered the stone in 1799 while rebuilding Fort Julien near the town of Rashid (Rosetta) in the Nile Delta. After Napoleon's defeat, British forces claimed the stone under the 1801 Treaty of Alexandria. French scholar <strong>Jean-François Champollion</strong> cracked the hieroglyphic code in 1822 by comparing royal names in the Greek text with their hieroglyphic cartouches. His breakthrough revealed that hieroglyphs represented sounds, not just pictures.</p>
<p>The stone has been at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> since 1802, where it remains the most-visited object in the collection. Egypt has repeatedly requested its return.</p>`,
      faqs: [
        {
          question: "Where is the Rosetta Stone displayed?",
          answer: "The stone is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, where it has been since 1802. It's the museum's most popular artifact, drawing millions of visitors annually."
        },
        {
          question: "Why is the Rosetta Stone so important?",
          answer: "It provided the key to <strong>decoding hieroglyphics</strong>. The same text in three scripts allowed scholars to match known Greek words with mysterious Egyptian symbols, unlocking 3,000 years of history."
        },
        {
          question: "How big is the Rosetta Stone?",
          answer: "The granodiorite slab measures <strong>114 × 72 × 28 cm</strong> (45 × 28 × 11 inches). The original stele was likely taller before its top section broke off in antiquity."
        },
        {
          question: "Who deciphered the Rosetta Stone?",
          answer: "<strong>Jean-François Champollion</strong> cracked the code in 1822. The French scholar recognized that hieroglyphs represented sounds, not just ideas, revolutionizing our understanding of ancient Egypt."
        }
      ]
    },
    {
      slug: 'younger-memnon',
      description: `<p>This <strong>colossal bust of Ramesses II</strong> weighs over seven tons and stands 267 centimeters tall, depicting the pharaoh with the classic nemes headdress and serene expression of Egyptian royal portraiture. The granite sculpture originally formed the upper portion of a seated statue at the Ramesseum, Ramesses II's mortuary temple in Thebes. A hole drilled into the right shoulder shows where ancient workers attempted to break the statue apart for transport.</p>
<p>Italian adventurer Giovanni Battista Belzoni removed the bust in 1816, an engineering feat that inspired Percy Bysshe Shelley's famous poem "Ozymandias." Belzoni used levers, rollers, and hundreds of workers to drag the <strong>massive fragment</strong> to the Nile for shipment to England. The Greek name "Memnon" came from classical visitors who mistakenly associated Ramesses with the mythical Ethiopian king.</p>
<p>The bust has anchored the Egyptian galleries at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> since 1817, one of the first major Egyptian antiquities to reach Europe.</p>`,
      faqs: [
        {
          question: "Where can I see the Younger Memnon?",
          answer: "The bust is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It arrived in 1817 and inspired Shelley's poem \"Ozymandias\" about the fallen glory of ancient kings."
        },
        {
          question: "How heavy is the Younger Memnon bust?",
          answer: "The granite bust weighs <strong>7.25 tons</strong> (about 16,000 pounds). Moving it from Thebes to the Nile required Giovanni Belzoni to build special wooden sledges and hire hundreds of workers."
        },
        {
          question: "Why is it called the Younger Memnon?",
          answer: "Ancient Greek travelers mistakenly identified Ramesses II as <strong>Memnon</strong>, a mythical Ethiopian king from the Trojan War. The name stuck even after scholars identified the actual pharaoh."
        },
        {
          question: "What poem did this statue inspire?",
          answer: "Shelley's <strong>\"Ozymandias\"</strong> (1818) describes a shattered statue in the desert. The poem references Ramesses II's Greek name and meditates on how even mighty empires crumble to dust."
        }
      ]
    },
    {
      slug: 'amenhotep-iii-seated',
      description: `<p>This <strong>seated statue of Amenhotep III</strong> shows Egypt's "Sun King" in the traditional pose of royal authority, hands flat on his knees and eyes gazing eternally forward. Carved from polished black granite around 1350 BCE, the sculpture stands 250 centimeters tall. Amenhotep III ruled during Egypt's wealthiest period, and his sculptors developed a distinctive style: softened features, almond-shaped eyes, and an expression of serene confidence.</p>
<p>The statue likely came from Amenhotep's mortuary temple on the west bank of Thebes, the largest temple complex ever built in Egypt (now almost entirely destroyed). <strong>Two colossal seated statues</strong> from the same temple still stand at the site, known as the Colossi of Memnon. This smaller but finer example preserves details lost in the weather-beaten outdoor giants.</p>
<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired the statue in the 19th century, where it demonstrates the sophisticated portraiture of New Kingdom Egypt.</p>`,
      faqs: [
        {
          question: "Where is the Seated Amenhotep III?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It preserves fine details lost in the weathered Colossi of Memnon that still stand in Egypt."
        },
        {
          question: "How big is the Amenhotep III statue?",
          answer: "The <strong>black granite</strong> sculpture stands 250 cm (8.2 feet) tall. This museum-scale version shows the same artistic style as Amenhotep's massive outdoor colossi."
        },
        {
          question: "Who was Amenhotep III?",
          answer: "Amenhotep III ruled Egypt from 1386-1349 BCE during its <strong>wealthiest period</strong>. His 38-year reign saw unprecedented temple building, diplomatic success, and artistic innovation."
        },
        {
          question: "What style defines Amenhotep III's portraits?",
          answer: "His sculptors created a distinctive look: <strong>softened features</strong>, almond eyes, and serene expressions. This refined style influenced Egyptian art for generations, including his son Akhenaten's radical experiments."
        }
      ]
    },
    {
      slug: 'great-sphinx-of-tanis',
      description: `<p>The <strong>Great Sphinx of Tanis</strong> is the largest sphinx outside Egypt's Giza plateau, measuring nearly five meters long and carved from pink granite. Created around 2600 BCE during the Old Kingdom, the sculpture later received inscriptions from pharaohs Amenemhat II, Merneptah, and Shoshenq I, each claiming it as their own. This layering of royal names makes precise dating difficult but reveals how later kings reused ancient monuments.</p>
<p>Excavators discovered the sphinx at Tanis in the Nile Delta, once a major royal city. How it arrived there remains debated, as some scholars believe Ramesses II moved the sculpture from an earlier site. The <strong>pink granite</strong> and remarkable preservation distinguish this sphinx from weather-worn examples elsewhere. Traces of paint suggest the original surface was even more colorful.</p>
<p>Since 1826, the sphinx has reclined in the Egyptian galleries of the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>, one of the museum's most imposing ancient sculptures.</p>`,
      faqs: [
        {
          question: "Where is the Great Sphinx of Tanis?",
          answer: "The sphinx is displayed at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. It arrived in 1826 and remains one of the largest ancient Egyptian sculptures outside Egypt."
        },
        {
          question: "How big is the Sphinx of Tanis?",
          answer: "The sphinx measures <strong>183 × 480 cm</strong> (6 × 15.7 feet). Carved from pink granite, it's the largest sphinx in any museum collection worldwide."
        },
        {
          question: "How old is the Great Sphinx of Tanis?",
          answer: "The sculpture dates to approximately <strong>2600 BCE</strong>, making it about 4,600 years old. Later pharaohs added their names, complicating precise dating of the original carving."
        },
        {
          question: "Why does it have multiple pharaoh names?",
          answer: "Ancient kings commonly <strong>usurped earlier monuments</strong> by adding their own inscriptions. At least three pharaohs claimed this sphinx over 1,400 years, making it a layered historical document."
        }
      ]
    },
    {
      slug: 'seated-scribe',
      description: `<p>The <strong>Seated Scribe</strong> depicts a cross-legged official holding a papyrus scroll, his face alert and eyes startlingly lifelike. Created around 2450 BCE during the Fourth or Fifth Dynasty, the painted limestone figure stands 53 centimeters tall. The <strong>inlaid eyes</strong> use rock crystal set in copper-lined white magnesite, creating a gaze so realistic that early excavators reportedly jumped back in surprise when their torches illuminated the face.</p>
<p>Auguste Mariette discovered the statue at Saqqara in 1850, in a tomb whose owner's identity remains debated. Unlike idealized royal portraits, the scribe shows individualized features: a slightly paunchy stomach, alert posture, and concentrated expression. Literacy was rare and valuable in ancient Egypt, so scribes held privileged positions despite not being royalty.</p>
<p>The Seated Scribe is now among the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre's</strong></a> most beloved antiquities, its lifelike presence drawing visitors from across the Egyptian galleries.</p>`,
      faqs: [
        {
          question: "Where can I see the Seated Scribe?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. Discovered at Saqqara in 1850, it's one of the museum's most popular Egyptian artifacts."
        },
        {
          question: "What makes the eyes look so real?",
          answer: "The eyes use <strong>rock crystal</strong> set in copper-lined white magnesite. This technique creates lifelike reflections that have startled viewers for over 4,400 years."
        },
        {
          question: "How big is the Seated Scribe?",
          answer: "The painted limestone figure stands <strong>53.7 cm (21 inches)</strong> tall. The compact size and cross-legged pose make the sculpture feel approachable and human."
        },
        {
          question: "Who was the Seated Scribe?",
          answer: "His <strong>identity remains unknown</strong>. The tomb at Saqqara didn't clearly identify the subject, though his alert posture and tools mark him as a literate official of high status."
        }
      ]
    },
    {
      slug: 'statue-of-kaaper',
      description: `<p><strong>Kaaper</strong> (also called Sheikh el-Balad) is an ancient Egyptian official rendered in sycamore wood with extraordinary realism. Created around 2450 BCE, the 112-centimeter statue depicts a portly middle-aged man striding forward, his round face and double chin suggesting comfortable prosperity rather than athletic idealism. Workers who excavated the statue in the 1860s nicknamed it "<strong>Sheikh el-Balad</strong>" (village chief) because it resembled their own mayor.</p>
<p>The sculpture's wooden construction allowed details impossible in stone: the weight of the body shifts naturally, the arms (carved separately) swing free from the torso, and the now-missing staff would have completed the striding pose. Rock crystal and white-painted copper create startlingly lifelike <strong>inlaid eyes</strong>. Originally, the wood was covered with painted linen to hide joins and add color.</p>
<p>Kaaper now stands in the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, one of the finest wooden sculptures surviving from the ancient world.</p>`,
      faqs: [
        {
          question: "Where is the Statue of Kaaper displayed?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. It moved from the Egyptian Museum's collection of Old Kingdom masterpieces."
        },
        {
          question: "Why is it called Sheikh el-Balad?",
          answer: "Workers excavating in the 1860s thought the statue <strong>resembled their village mayor</strong>. The nickname stuck even after scholars identified the subject as the priest Kaaper."
        },
        {
          question: "What makes this statue unusual?",
          answer: "Its <strong>realistic portrayal</strong> breaks from Egyptian idealism. The round stomach, double chin, and middle-aged features show an actual person rather than a perfect type."
        },
        {
          question: "How big is the Kaaper statue?",
          answer: "The sycamore wood figure stands <strong>112 cm (44 inches)</strong> tall. Wooden construction allowed separately carved arms that give the figure more natural movement than stone statues."
        }
      ]
    },
    {
      slug: 'temple-of-dendur',
      description: `<p>The <strong>Temple of Dendur</strong> is a complete Roman-era Egyptian temple now housed inside the Metropolitan Museum of Art. Built around 15 BCE during Augustus's reign, the sandstone structure honored the goddess Isis and two deified brothers who drowned in the Nile. The temple originally stood in Nubia (southern Egypt) on the banks of the river that inspired its dedication.</p>
<p>When the Aswan High Dam threatened to flood ancient sites in the 1960s, Egypt offered several temples to countries that helped with the UNESCO rescue campaign. The United States received Dendur in 1965, and the Met spent a decade building the <strong>Sackler Wing</strong> specifically to house it. The climate-controlled gallery includes a reflecting pool evoking the Nile and a slanted glass wall admitting natural light.</p>
<p>The temple remains the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum's</strong></a> most dramatic ancient installation, allowing visitors to walk through a 2,000-year-old Egyptian sacred space.</p>`,
      faqs: [
        {
          question: "Where is the Temple of Dendur?",
          answer: "The temple is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. It was gifted by Egypt in 1965 and installed in a purpose-built wing in 1978."
        },
        {
          question: "How big is the Temple of Dendur?",
          answer: "The temple measures approximately <strong>25 × 8 meters</strong> (82 × 26 feet). The Sackler Wing housing it is one of the Met's largest gallery spaces."
        },
        {
          question: "Why was it moved to New York?",
          answer: "The <strong>Aswan High Dam</strong> would have flooded its original location. Egypt gifted it to the US for helping with UNESCO's Nubian rescue campaign that saved dozens of ancient sites."
        },
        {
          question: "Who built the Temple of Dendur?",
          answer: "Roman emperor <strong>Augustus</strong> ordered its construction around 15 BCE. Though Roman-sponsored, Egyptian priests designed and decorated it in traditional pharaonic style."
        }
      ]
    },
    {
      slug: 'sphinx-of-hatshepsut',
      description: `<p>This <strong>granite sphinx of Hatshepsut</strong> shows Egypt's most successful female pharaoh with a lion's body and the royal nemes headdress. Created around 1479 BCE, the sculpture originally guarded Hatshepsut's mortuary temple at Deir el-Bahri. The pharaoh wears the traditional false beard and masculine royal regalia despite being female, a political necessity to legitimize her unprecedented rule.</p>
<p>Hatshepsut's stepson <strong>Thutmose III</strong> attempted to erase her memory after her death, smashing many of her statues and chiseling her name from monuments. This sphinx survived in fragments until archaeologists pieced it together from excavated pieces. The reconstruction reveals the sophisticated portraiture of New Kingdom sculptors, who balanced idealized features with Hatshepsut's distinctive face.</p>
<p>The sphinx now rests in the Egyptian galleries of the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>, one of several Hatshepsut sculptures recovered from her temple.</p>`,
      faqs: [
        {
          question: "Where is the Sphinx of Hatshepsut?",
          answer: "The sphinx is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. It was reconstructed from fragments found at Hatshepsut's temple at Deir el-Bahri."
        },
        {
          question: "How big is the Sphinx of Hatshepsut?",
          answer: "The granite sculpture measures <strong>164 × 343 cm</strong> (5.4 × 11.3 feet). Its size indicates Hatshepsut's importance, as sphinxes this large were reserved for ruling pharaohs."
        },
        {
          question: "Why was the sphinx smashed?",
          answer: "Hatshepsut's stepson <strong>Thutmose III</strong> ordered her monuments destroyed after her death. Archaeologists spent years reassembling fragments to restore her erased legacy."
        },
        {
          question: "Who was Hatshepsut?",
          answer: "Hatshepsut ruled Egypt from 1479-1458 BCE, one of <strong>few female pharaohs</strong>. Her 21-year reign brought prosperity and ambitious building projects, including her famous terraced temple."
        }
      ]
    },
    {
      slug: 'seated-hatshepsut',
      description: `<p>This <strong>seated statue of Hatshepsut</strong> shows the female pharaoh enthroned in the traditional pose of kingship, hands on her knees and wearing the royal nemes headdress. Carved around 1479 BCE from indurated limestone with traces of original paint, the sculpture stands 195 centimeters tall. Despite being female, Hatshepsut adopted full pharaonic regalia including the false beard, asserting her right to rule as a king rather than a queen regent.</p>
<p>The statue came from Hatshepsut's mortuary temple at <strong>Deir el-Bahri</strong>, one of ancient Egypt's architectural masterpieces with its terraced colonnades cut into cliffs. Her nephew and successor Thutmose III later destroyed many of her images, but this example survived intact enough for reconstruction. The limestone allowed finer detail than granite, preserving Hatshepsut's serene expression.</p>
<p>The <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum</strong></a> displays this and several other Hatshepsut statues, the finest collection of her sculpture outside Egypt.</p>`,
      faqs: [
        {
          question: "Where is the Seated Hatshepsut?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. The Met holds the world's most important collection of Hatshepsut sculpture outside Egypt."
        },
        {
          question: "How big is the Seated Hatshepsut statue?",
          answer: "The limestone figure stands <strong>195 cm (77 inches)</strong> tall. Traces of original paint indicate the statue was once fully colored in the Egyptian tradition."
        },
        {
          question: "Why does Hatshepsut wear a false beard?",
          answer: "The beard was <strong>royal regalia</strong>, not a disguise. Hatshepsut adopted all pharaonic symbols to legitimize her rule, presenting herself as king rather than queen."
        },
        {
          question: "What temple did this statue come from?",
          answer: "It came from <strong>Deir el-Bahri</strong>, Hatshepsut's mortuary temple. The terraced structure built into Theban cliffs remains one of ancient Egypt's most innovative buildings."
        }
      ]
    },
    {
      slug: 'william-the-hippo',
      description: `<p><strong>William the Hippo</strong> is a small faience hippopotamus decorated with lotus plants and marsh birds, created around 1961 BCE during Egypt's Middle Kingdom. Standing just 11 centimeters tall, the bright <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> figurine was placed in a tomb to accompany the deceased into the afterlife. The lotus decoration represents the Nile marshes where hippos lived, symbolizing rebirth and regeneration.</p>
<p>Museum staff named the hippo "William" in the 1930s, and he became the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum's</strong></a> unofficial mascot. Three of William's legs were deliberately broken before burial, a common practice to prevent the dangerous animal from harming the tomb's occupant in the afterlife. <strong>Hippos killed more Egyptians</strong> than crocodiles, making these magical precautions necessary.</p>
<p>William's charm has made him one of the Met's most popular objects, reproduced endlessly in the gift shop while the original remains safely displayed in the Egyptian galleries.</p>`,
      faqs: [
        {
          question: "Where can I see William the Hippo?",
          answer: "William is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. He's been the museum's unofficial mascot since the 1930s and appears throughout their branding."
        },
        {
          question: "Why is William blue?",
          answer: "The <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue</strong></a> faience (glazed ceramic) represents Nile waters. The lotus flowers decorating his body symbolize rebirth, appropriate for a tomb offering meant to ensure resurrection."
        },
        {
          question: "Why are William's legs broken?",
          answer: "Egyptians deliberately broke tomb hippos' legs to <strong>prevent magical harm</strong>. Real hippos were dangerous, so crippling the figurine ensured it couldn't attack the deceased in the afterlife."
        },
        {
          question: "How old is William the Hippo?",
          answer: "William dates to approximately <strong>1961-1878 BCE</strong>, about 4,000 years old. Middle Kingdom Egyptians commonly placed animal figurines in tombs for magical protection and company."
        }
      ]
    },
    {
      slug: 'akhenaten-colossus',
      description: `<p>This <strong>colossal pillar statue of Akhenaten</strong> shows Egypt's "heretic pharaoh" in the radical artistic style he mandated during his reign. Standing four meters tall, the sandstone figure depicts Akhenaten with elongated face, drooping lips, swelling hips, and thin arms, a deliberate departure from traditional royal portraiture. Created around 1350 BCE, the statue originally stood at the Aten temple complex in Karnak.</p>
<p>Akhenaten abandoned Egypt's traditional gods to worship only <strong>Aten</strong>, the sun disk, essentially inventing monotheism. He moved the capital to a new city, changed his name, and ordered artists to depict him and his family in this strange new style. After his death, outraged priests demolished his temples, smashed his statues, and attempted to erase his name from history.</p>
<p>The colossus survived in fragments, now reassembled at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, where it demonstrates the most dramatic break in 3,000 years of Egyptian artistic tradition.</p>`,
      faqs: [
        {
          question: "Where is the Akhenaten Colossus?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. It was reconstructed from fragments smashed by priests who sought to erase Akhenaten's memory."
        },
        {
          question: "Why does Akhenaten look so strange?",
          answer: "Akhenaten mandated a <strong>new artistic style</strong> emphasizing elongated features and androgynous bodies. Whether this reflects his actual appearance or religious symbolism remains debated."
        },
        {
          question: "How big is the Akhenaten Colossus?",
          answer: "The sandstone statue stands <strong>4 meters (13 feet)</strong> tall. It originally formed one of many colossal pillars at Akhenaten's temple to the sun god Aten at Karnak."
        },
        {
          question: "Who was Akhenaten?",
          answer: "Akhenaten ruled Egypt 1353-1336 BCE and <strong>revolutionized religion</strong> by worshipping only the sun disk Aten. His son was the famous Tutankhamun, who restored traditional worship."
        }
      ]
    },
    {
      slug: 'rahotep-and-nofret',
      description: `<p>These <strong>painted limestone statues of Rahotep and Nofret</strong> rank among ancient Egypt's finest preserved sculptures, their original colors still vivid after 4,600 years. Created around 2600 BCE during the Fourth Dynasty, the seated pair depicts Prince Rahotep (a son of Pharaoh Sneferu) and his wife Nofret. Each figure sits in a separate chair, positioned to face eternity together in their tomb at Meidum.</p>
<p>Auguste Mariette's workers discovered the statues in 1871, reportedly fleeing in terror when their torches illuminated the <strong>lifelike painted eyes</strong>. The preservation is extraordinary: Rahotep's brown skin contrasts with Nofret's pale complexion (Egyptian convention for depicting gender), while her elaborate wig and broad collar show fashion of the early pyramid age. Traces of pigment reveal that the now-plain background was once decorated.</p>
<p>The pair now sits in the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, perhaps the most striking example of Old Kingdom painted sculpture.</p>`,
      faqs: [
        {
          question: "Where are Rahotep and Nofret displayed?",
          answer: "The statues are at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. Their extraordinary color preservation makes them highlights of the ancient Egyptian collection."
        },
        {
          question: "Why do they have different skin colors?",
          answer: "Egyptian artistic convention depicted <strong>men with darker skin</strong> and women with lighter complexions. This reflected ideas about gender roles, not actual appearance."
        },
        {
          question: "How big are the statues?",
          answer: "Each seated figure measures approximately <strong>121 cm (48 inches)</strong> tall. The near life-size scale and preserved paint make them startlingly realistic for 4,600-year-old sculptures."
        },
        {
          question: "Who were Rahotep and Nofret?",
          answer: "Rahotep was a <strong>prince and high priest</strong> during the Fourth Dynasty, son of Pharaoh Sneferu. Nofret was his wife, and both were buried at Meidum with these remarkable portraits."
        }
      ]
    },
    {
      slug: 'narmer-palette',
      description: `<p>The <strong>Narmer Palette</strong> is a 5,100-year-old ceremonial slab commemorating the unification of Upper and Lower Egypt under a single pharaoh. Carved from siltstone around 3100 BCE, the 64-centimeter palette shows King Narmer wearing both the White Crown of Upper Egypt and the Red Crown of Lower Egypt on opposite sides. This dual imagery documents the political union that created one of history's most enduring civilizations.</p>
<p>The palette's reliefs show Narmer smiting an enemy, inspecting decapitated bodies, and subduing mythological creatures. A circular depression on one side held <strong>cosmetic pigments</strong> for ritual use, though this elaborate example was clearly ceremonial rather than practical. The organized registers and proportional figures establish artistic conventions that would govern Egyptian art for three millennia.</p>
<p>Discovered at Hierakonpolis in 1898, the palette now resides at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, one of archaeology's most important documents of state formation.</p>`,
      faqs: [
        {
          question: "Where is the Narmer Palette?",
          answer: "The palette is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. It's one of the most important artifacts documenting ancient Egypt's origins."
        },
        {
          question: "What does the Narmer Palette show?",
          answer: "It depicts King Narmer <strong>unifying Egypt</strong> around 3100 BCE. He wears both the Upper and Lower Egyptian crowns, symbolizing his conquest that created a unified kingdom."
        },
        {
          question: "How big is the Narmer Palette?",
          answer: "The siltstone slab measures <strong>64 × 42 cm</strong> (25 × 17 inches). Its size and elaborate carving indicate it was a ceremonial object, not a practical cosmetic palette."
        },
        {
          question: "Why is the Narmer Palette important?",
          answer: "It documents <strong>Egypt's founding</strong> and establishes artistic conventions used for 3,000 years. The organized registers, proportional figures, and narrative scenes became the template for all later Egyptian art."
        }
      ]
    }
  ];

  let updated = 0;
  for (const item of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: item.slug },
        data: {
          description: item.description,
          faqs: item.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${item.slug}`);
      updated++;
    } catch (error) {
      console.log(`Error updating ${item.slug}: ${error.message}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}/${updates.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
