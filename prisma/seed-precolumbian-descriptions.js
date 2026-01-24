const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Pre-Columbian Art Descriptions ===\n');

  const updates = [
    {
      slug: 'aztec-sun-stone',
      description: `<p>The <strong>Aztec Sun Stone</strong> (Piedra del Sol) is a massive basalt disk carved with the face of the sun god Tonatiuh at its center, surrounded by rings depicting the Aztec cosmos and calendar. Created around 1500 CE during the reign of Moctezuma II, the stone weighs approximately 24 tons and measures nearly 12 feet in diameter. Despite its popular name "Calendar Stone," the sculpture served as a ceremonial monument rather than a practical calendar.</p>
<p>The central face shows <strong>Tonatiuh's tongue</strong> as a sacrificial knife, demanding blood offerings to sustain the sun's daily journey. Surrounding rings depict the four previous world ages destroyed by jaguars, wind, fire, and flood, with the current fifth sun destined to end in earthquakes. Spanish conquistadors buried the stone after conquering Tenochtitlan; it was rediscovered in 1790 during plaza renovations in Mexico City.</p>
<p>The Sun Stone anchors the Mexica Hall at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>Museo Nacional de Antropología</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Aztec Sun Stone?",
          answer: "The stone is at the <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>Museo Nacional de Antropología</strong></a> in Mexico City. It's Mexico's most famous archaeological artifact."
        },
        {
          question: "How big is the Sun Stone?",
          answer: "The basalt disk measures <strong>358 cm (11.7 feet)</strong> in diameter and weighs about 24 tons. Moving and carving such a massive stone demonstrated Aztec engineering skill."
        },
        {
          question: "Is it really a calendar?",
          answer: "Not exactly. While it incorporates <strong>calendrical symbols</strong>, the stone served as a ceremonial monument. The name \"Calendar Stone\" is a popular misnomer."
        },
        {
          question: "What happened to it after the Spanish conquest?",
          answer: "Spanish authorities <strong>buried the stone</strong> to suppress indigenous religion. It was rediscovered in 1790 during construction work in Mexico City's main plaza."
        }
      ]
    },
    {
      slug: 'coatlicue-statue',
      description: `<p><strong>Coatlicue</strong> ("Serpent Skirt") depicts the Aztec earth goddess in a form designed to inspire terror and awe. The basalt sculpture shows a decapitated figure whose neck spurts two serpents forming a face, wearing a necklace of human hearts and hands with a skull pendant, and a skirt of writhing snakes. Created around 1500 CE, the 8.4-foot statue captures Aztec beliefs about the earth's dual nature as life-giver and destroyer.</p>
<p>According to myth, Coatlicue was <strong>mother of the gods</strong>, impregnated by a ball of feathers while sweeping a temple. Her existing children, seeing this as dishonor, tried to kill her, but the war god Huitzilopochtli emerged fully armed from her womb to defend her. The statue was buried after the Spanish conquest and discovered in 1790 near the Sun Stone, then reburied because its power disturbed viewers.</p>
<p>Coatlicue now stands at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>Museo Nacional de Antropología</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Coatlicue statue?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>Museo Nacional de Antropología</strong></a> in Mexico City, displayed near the Aztec Sun Stone."
        },
        {
          question: "Why does she have no head?",
          answer: "The statue shows Coatlicue <strong>decapitated</strong>, with two serpents sprouting from her neck to form a face. This references myths about her death and the birth of the war god."
        },
        {
          question: "How big is the Coatlicue?",
          answer: "The basalt statue stands <strong>257 cm (8.4 feet)</strong> tall. Its imposing scale enhanced its role in inspiring religious awe."
        },
        {
          question: "Why was it reburied after discovery?",
          answer: "Colonial authorities <strong>feared its power</strong> would inspire indigenous people. The statue was displayed briefly, then reburied because it disturbed both Spanish and native viewers."
        }
      ]
    },
    {
      slug: 'aztec-double-headed-serpent',
      description: `<p>The <strong>Aztec Double-Headed Serpent</strong> is a turquoise mosaic sculpture possibly worn as a chest ornament during religious ceremonies. Created around 1480 CE, the carved wooden form is covered with over 2,000 turquoise tesserae, with red shell forming the mouths and white shell the teeth. The serpent's two heads may represent the earth and underworld, or the duality fundamental to Aztec thought.</p>
<p>Some scholars believe this ornament belonged to <strong>Moctezuma II</strong> and was among gifts given to Hernán Cortés, though documentation is uncertain. The turquoise came from distant mines in present-day New Mexico, demonstrating the extent of Mesoamerican trade networks. The object may have been worn by priests impersonating Quetzalcoatl, the feathered serpent deity.</p>
<p>The serpent is now at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, one of the finest Aztec turquoise mosaics to survive.</p>`,
      faqs: [
        {
          question: "Where is the Double-Headed Serpent?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It's one of the finest surviving examples of Aztec turquoise mosaic work."
        },
        {
          question: "What was it used for?",
          answer: "It was likely worn as a <strong>chest ornament</strong> during religious ceremonies. Priests impersonating Quetzalcoatl may have worn it."
        },
        {
          question: "How big is it?",
          answer: "The serpent measures <strong>43 × 20 cm</strong> (17 × 8 inches). Despite its modest size, over 2,000 individual turquoise pieces cover its surface."
        },
        {
          question: "Where did the turquoise come from?",
          answer: "The turquoise came from mines in <strong>present-day New Mexico</strong>, over 1,500 miles away. This demonstrates the vast trade networks connecting Mesoamerican civilizations."
        }
      ]
    },
    {
      slug: 'aztec-xiuhtecuhtli-mask',
      description: `<p>This <strong>turquoise mosaic mask</strong> likely represents Xiuhtecuhtli, the Aztec god of fire and time. Created around 1500 CE, the cedar wood mask is covered with turquoise tesserae, with eyes made of mother-of-pearl and teeth of white conch shell. The serene expression and blue coloring associate it with fire's transformative power and the passage of time.</p>
<p>Aztec craftsmen created such masks for <strong>ritual use</strong>, either worn by priests impersonating deities or placed on sacred bundles representing the gods. The turquoise's blue-green color held deep symbolic meaning, associated with both sky and fire. This mask was likely among objects taken to Europe shortly after the Spanish conquest.</p>
<p>The mask is at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this mask?",
          answer: "The mask is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It's one of only about 25 Aztec turquoise mosaics known to survive."
        },
        {
          question: "Who is Xiuhtecuhtli?",
          answer: "<strong>Xiuhtecuhtli</strong> was the Aztec god of fire and time. He presided over the New Fire ceremony, held every 52 years to renew the cosmic cycle."
        },
        {
          question: "How big is the mask?",
          answer: "The mask measures <strong>16.8 × 15.2 cm</strong> (6.6 × 6 inches). Its small size suited placement on sacred bundles or wearing by priests."
        },
        {
          question: "What makes turquoise significant?",
          answer: "Turquoise's <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue-green color</strong></a> symbolized both fire and sky in Aztec thought. It was more valuable than gold to Mesoamerican peoples."
        }
      ]
    },
    {
      slug: 'olmec-colossal-head-1',
      description: `<p>This <strong>Olmec Colossal Head</strong> from San Lorenzo is one of 17 giant stone heads created by the Olmec civilization, the earliest major Mesoamerican culture. Carved around 1200 BCE from a single boulder of basalt, the 9.3-foot sculpture depicts a ruler wearing a helmet-like headdress. The realistic features, including fleshy lips and broad nose, may represent actual portraits of specific kings.</p>
<p>The Olmec quarried and transported these <strong>massive stones</strong> from mountains over 50 miles away, using only human labor without wheels or draft animals. The effort required suggests the heads held enormous religious or political significance. Some scholars believe the "helmets" represent protective headgear worn in the Mesoamerican ballgame, a ritual sport with cosmic significance.</p>
<p>This head is at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>Museo Nacional de Antropología</strong></a> in Mexico City.</p>`,
      faqs: [
        {
          question: "Where is this Olmec head?",
          answer: "This head is at the <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>Museo Nacional de Antropología</strong></a> in Mexico City. Other colossal heads remain at archaeological sites."
        },
        {
          question: "How big is the colossal head?",
          answer: "This head stands <strong>284 cm (9.3 feet)</strong> tall and weighs about 25 tons. The Olmec created 17 known colossal heads, ranging from 5 to 11 feet."
        },
        {
          question: "How old is Olmec civilization?",
          answer: "The Olmec flourished from approximately <strong>1500 to 400 BCE</strong>, making them the earliest major Mesoamerican civilization. They influenced all later cultures including the Maya and Aztec."
        },
        {
          question: "How were the stones transported?",
          answer: "The Olmec moved boulders weighing up to <strong>50 tons over 50 miles</strong> using only human labor. They had no wheels, draft animals, or metal tools."
        }
      ]
    },
    {
      slug: 'olmec-wrestler',
      description: `<p>The <strong>Olmec Wrestler</strong> (El Luchador) depicts a seated figure in a dynamic pose that suggests athletic competition, possibly the ritual ballgame. Created around 1200 BCE, the basalt sculpture demonstrates the Olmec's sophisticated understanding of human anatomy and their ability to capture natural movement. The figure's alert expression and tensed muscles suggest concentrated effort.</p>
<p>Unlike the rigidly frontal colossal heads, this figure shows the Olmec could sculpt <strong>three-dimensional forms</strong> meant to be viewed from multiple angles. The subject may be a ballplayer, a wrestler, or a captive; scholars debate the interpretation. The naturalistic style sets it apart from more stylized Olmec works.</p>
<p>The Wrestler is at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>Museo Nacional de Antropología</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Olmec Wrestler?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>Museo Nacional de Antropología</strong></a> in Mexico City, a highlight of the Olmec gallery."
        },
        {
          question: "What is the figure doing?",
          answer: "Scholars debate whether he's a <strong>wrestler, ballplayer, or captive</strong>. The tensed posture and alert expression suggest athletic competition or struggle."
        },
        {
          question: "How big is the Wrestler?",
          answer: "The basalt figure stands <strong>66 cm (26 in)</strong> tall. Unlike colossal heads, this intimate scale suits domestic display or small shrine placement."
        },
        {
          question: "What makes it unusual?",
          answer: "The <strong>naturalistic anatomy and three-dimensional pose</strong> differ from more stylized Olmec works. It demonstrates sophisticated artistic capabilities beyond the iconic colossal heads."
        }
      ]
    },
    {
      slug: 'olmec-jade-mask',
      description: `<p>This <strong>Olmec jade mask</strong> displays the serene, idealized features characteristic of Olmec jade working at its finest. Created around 900 BCE, the translucent green jadeite mask shows a human face with the slightly feline characteristics often seen in Olmec art. The heavy-lidded eyes and downturned mouth may represent a trance state or connection to supernatural powers.</p>
<p>Jade held supreme value for Mesoamerican peoples, surpassing gold in prestige. The Olmec obtained jadeite from distant sources in Guatemala and worked it using only stone tools, sand, and water. Such masks may have <strong>covered the faces</strong> of elite burials or been worn during ceremonies. The labor required to create them indicates high-status ownership.</p>
<p>This mask is at the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Olmec jade mask?",
          answer: "This mask is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. Fine Olmec jade works are rare in museum collections."
        },
        {
          question: "Why was jade so valuable?",
          answer: "Jade surpassed <strong>gold in prestige</strong> for Mesoamerican peoples. Its green color associated it with water, fertility, and life, while its hardness demonstrated the skill required to work it."
        },
        {
          question: "How was jade worked without metal tools?",
          answer: "Olmec craftsmen used <strong>stone, sand, and water</strong> to grind jade into shape. Creating a mask required months or years of patient labor."
        },
        {
          question: "What do the features represent?",
          answer: "The slightly <strong>feline features</strong> may reference jaguar spirits. The heavy-lidded eyes suggest trance states connecting rulers to supernatural powers."
        }
      ]
    },
    {
      slug: 'jade-mask-pakal',
      description: `<p>The <strong>jade mosaic mask of K'inich Janaab Pakal</strong> covered the face of Palenque's greatest king when he was buried in 683 CE. Over 200 pieces of jade were assembled to recreate Pakal's features, with shell and obsidian forming the lifelike eyes. The mask transformed the deceased king into the Maize God, ensuring his resurrection and eternal rule over his dynasty.</p>
<p>Mexican archaeologist Alberto Ruz Lhuillier discovered Pakal's tomb in 1952 after four years of excavating through a hidden stairway in the Temple of the Inscriptions. The <strong>sarcophagus lid</strong> shows Pakal descending into the underworld, about to rise again like corn from the earth. His tomb is the only known Maya pyramid built specifically as a royal burial.</p>
<p>The mask is a treasure of the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>Museo Nacional de Antropología</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Pakal's jade mask?",
          answer: "The mask is at the <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>Museo Nacional de Antropología</strong></a> in Mexico City. His tomb at Palenque can still be visited."
        },
        {
          question: "Who was Pakal?",
          answer: "<strong>K'inich Janaab Pakal</strong> ruled Palenque from 615 to 683 CE, one of the greatest Maya kings. He reigned for 68 years and commissioned major architectural works."
        },
        {
          question: "How big is the mask?",
          answer: "The mask measures <strong>24 × 21 cm</strong> (9.4 × 8.3 inches). Over 200 jade pieces were assembled to recreate the king's features."
        },
        {
          question: "What does the mask represent?",
          answer: "The jade transformed Pakal into the <strong>Maize God</strong>, ensuring his resurrection. Just as corn dies and is reborn, the king would rise again to benefit his people."
        }
      ]
    },
    {
      slug: 'yaxchilan-lintel-24',
      description: `<p><strong>Yaxchilán Lintel 24</strong> depicts a bloodletting ritual performed by Lady Xook and her husband Shield Jaguar II, ruler of the Maya city of Yaxchilán. Carved around 725 CE, the limestone relief shows Lady Xook pulling a thorn-studded rope through her tongue while her husband holds a flaming torch. The blood-soaked paper in the basket below would be burned to communicate with ancestor spirits.</p>
<p>Maya elites performed <strong>bloodletting rituals</strong> to access supernatural power and communicate with the dead. The pain and blood loss induced visions, depicted in related lintels showing a serpent emerging from the smoke. Lady Xook was Shield Jaguar's most powerful wife, and these lintels decorated her personal temple. The scene commemorates a ritual performed on the king's accession in 681 CE.</p>
<p>The lintel is at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Yaxchilán Lintel 24?",
          answer: "The lintel is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Other Yaxchilán lintels are in Mexico and Guatemala."
        },
        {
          question: "What is the woman doing?",
          answer: "Lady Xook <strong>pulls a thorn rope through her tongue</strong>, a bloodletting ritual that induced visions and allowed communication with ancestors."
        },
        {
          question: "Why was bloodletting important?",
          answer: "<strong>Royal blood</strong> was sacred to the Maya, carrying spiritual power that sustained the cosmos. Elite bloodletting maintained cosmic order and invoked ancestor spirits."
        },
        {
          question: "How big is the lintel?",
          answer: "The limestone relief measures <strong>109 × 78 cm</strong> (43 × 31 inches). It originally spanned a doorway in Lady Xook's temple at Yaxchilán."
        }
      ]
    },
    {
      slug: 'chac-mool-chichen-itza',
      description: `<p>The <strong>Chac Mool</strong> from Chichén Itzá depicts a reclining figure holding a bowl or plate on its stomach, believed to have received offerings, possibly including human hearts. Created around 1100 CE during the Terminal Classic period, these distinctive sculptures appear throughout Mesoamerica. The name "Chac Mool" was coined by 19th-century explorer Augustus Le Plongeon, though its original meaning remains unknown.</p>
<p>This Chac Mool sat at the entrance to the <strong>Temple of the Warriors</strong> at Chichén Itzá, guarding access to the inner sanctuary. The reclined position and turned head create an alert, watchful presence. Similar figures appear in Toltec and Aztec contexts, suggesting the form spread through cultural exchange or conquest.</p>
<p>This example is at the <a href="/apps/masterpieces/museum/museo-nacional-antropologia"><strong>Museo Nacional de Antropología</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Chac Mool?",
          answer: "This Chac Mool is at the <a href=\"/apps/masterpieces/museum/museo-nacional-antropologia\"><strong>Museo Nacional de Antropología</strong></a>. Others remain at Chichén Itzá and other sites."
        },
        {
          question: "What was the bowl for?",
          answer: "The bowl probably <strong>received offerings</strong>, possibly including human hearts during sacrificial rituals. Scholars debate the exact function."
        },
        {
          question: "How big is the Chac Mool?",
          answer: "This figure measures <strong>105 cm (41 in)</strong> long. Chac Mools range in size but typically depict a reclining life-size figure."
        },
        {
          question: "Why is it called Chac Mool?",
          answer: "Explorer Augustus Le Plongeon coined the name in the 1870s, claiming it meant <strong>\"jaguar's claw\"</strong> in Maya. The actual ancient name is unknown."
        }
      ]
    },
    {
      slug: 'moche-portrait-vessel',
      description: `<p><strong>Moche portrait vessels</strong> depict specific individuals with remarkable realism, making them unique in pre-Columbian art. Created around 400 CE in northern Peru, these ceramic vessels show faces with individual features, emotions, and even diseases. This example demonstrates the Moche artists' mastery of ceramic portraiture, capturing personality rather than idealized types.</p>
<p>Scholars have identified some individuals appearing in multiple vessels at different ages, suggesting these were true <strong>portraits of specific people</strong>. The vessels held liquids for ritual use, with the stirrup spout characteristic of Moche ceramics. The Moche civilization flourished from 100 to 700 CE, creating sophisticated art before being absorbed by later cultures.</p>
<p>Fine Moche portrait vessels are held at the <a href="/apps/masterpieces/museum/museo-larco"><strong>Museo Larco</strong></a> in Lima.</p>`,
      faqs: [
        {
          question: "Where can I see Moche portrait vessels?",
          answer: "The <a href=\"/apps/masterpieces/museum/museo-larco\"><strong>Museo Larco</strong></a> in Lima has the finest collection. Other examples exist in museums worldwide."
        },
        {
          question: "Are these actual portraits?",
          answer: "Yes. Scholars have identified <strong>specific individuals</strong> appearing in multiple vessels at different ages, proving these represent real people."
        },
        {
          question: "What were the vessels used for?",
          answer: "They held <strong>liquids for ritual purposes</strong>. The distinctive stirrup spout allowed controlled pouring during ceremonies."
        },
        {
          question: "How old are Moche portrait vessels?",
          answer: "Most date from <strong>100 to 700 CE</strong>. The Moche civilization predated the Inca by nearly a thousand years."
        }
      ]
    },
    {
      slug: 'lord-of-sipan-mask',
      description: `<p>The <strong>burial mask of the Lord of Sipán</strong> covered the face of a Moche warrior-priest interred around 300 CE in one of the richest tombs ever found in the Americas. The <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> and copper mask features shell eyes and a fanged mouth, transforming the deceased into a supernatural being. The lord was buried with extraordinary treasures including gold and silver ornaments, weapons, and sacrificed retainers.</p>
<p>Peruvian archaeologist Walter Alva discovered the intact tomb in 1987, just ahead of looters. The find revolutionized understanding of <strong>Moche civilization</strong>, revealing a complex society with powerful priest-kings. The lord's regalia matched figures shown in Moche art, proving that scenes once thought mythological depicted actual rituals.</p>
<p>The mask and tomb treasures are displayed at the Museo Tumbas Reales de Sipán in Lambayeque, Peru.</p>`,
      faqs: [
        {
          question: "Where is the Lord of Sipán mask?",
          answer: "The mask is at the <strong>Museo Tumbas Reales de Sipán</strong> in Lambayeque, Peru. The museum was built specifically to house treasures from this and related tombs."
        },
        {
          question: "How was the tomb discovered?",
          answer: "Archaeologist Walter Alva discovered it in <strong>1987</strong>, just ahead of looters who had already disturbed an adjacent tomb. The find was miraculously intact."
        },
        {
          question: "What made the discovery significant?",
          answer: "It proved that scenes in Moche art depicted <strong>actual rituals</strong>. The lord's regalia matched figures shown in ceramics and murals, connecting art to historical reality."
        },
        {
          question: "How old is the burial?",
          answer: "The Lord of Sipán was buried around <strong>300 CE</strong>, during the height of Moche civilization. He was approximately 40 years old at death."
        }
      ]
    },
    {
      slug: 'muisca-raft-eldorado',
      description: `<p>The <strong>Muisca Raft</strong> depicts the legendary El Dorado ceremony, where a new Muisca king covered himself in gold dust and floated on Lake Guatavita to make offerings to the gods. Created around 1200 CE from tumbaga (gold-copper alloy), the 7.7-inch sculpture shows the king surrounded by attendants on a raft, about to plunge gold objects into the sacred lake.</p>
<p>Spanish conquistadors heard tales of this <strong>golden king</strong> (El Dorado) and spent decades searching for his legendary city of gold. The ceremony actually commemorated the investiture of new rulers, who washed off the gold dust and cast precious objects into the lake. The Muisca Raft proves the legend had a basis in real ritual practice.</p>
<p>The raft is the most famous treasure of the <a href="/apps/masterpieces/museum/museo-del-oro"><strong>Museo del Oro</strong></a> in Bogotá.</p>`,
      faqs: [
        {
          question: "Where is the Muisca Raft?",
          answer: "The raft is at the <a href=\"/apps/masterpieces/museum/museo-del-oro\"><strong>Museo del Oro</strong></a> in Bogotá, Colombia. It's the museum's most famous and valuable artifact."
        },
        {
          question: "What is El Dorado?",
          answer: "<strong>El Dorado</strong> (the golden one) referred to the gold-covered king in Muisca investiture ceremonies. Spanish conquistadors transformed the legend into a mythical golden city."
        },
        {
          question: "How big is the raft?",
          answer: "The sculpture measures <strong>19.5 × 10.1 cm</strong> (7.7 × 4 inches). Despite its small size, it's invaluable for documenting a legendary ceremony."
        },
        {
          question: "Is it made of pure gold?",
          answer: "The raft is cast from <strong>tumbaga</strong>, a gold-copper alloy used throughout pre-Columbian Colombia. Surface treatment enriched the gold appearance."
        }
      ]
    },
    {
      slug: 'quimbaya-poporo',
      description: `<p>The <strong>Quimbaya Poporo</strong> is a gold container for lime powder used in coca leaf consumption, created by the Quimbaya people around 300 CE. The elegant form combines a spherical body with a long neck and delicate pin for extracting the lime. Poporos were prestige objects, and this example's refined design makes it an icon of pre-Columbian <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> work.</p>
<p>Coca leaves chewed with lime release stimulants that reduce hunger and fatigue. Throughout the Andes, coca was <strong>sacred and ceremonial</strong>, not recreational. The elaborate containers holding lime reflected the importance of coca rituals and the status of their owners. Quimbaya goldwork demonstrates exceptional technical mastery, including lost-wax casting and careful alloy control.</p>
<p>The poporo is at the <a href="/apps/masterpieces/museum/museo-del-oro"><strong>Museo del Oro</strong></a> in Bogotá.</p>`,
      faqs: [
        {
          question: "Where is the Quimbaya Poporo?",
          answer: "The poporo is at the <a href=\"/apps/masterpieces/museum/museo-del-oro\"><strong>Museo del Oro</strong></a> in Bogotá. It's one of the most famous objects in the collection."
        },
        {
          question: "What is a poporo for?",
          answer: "A poporo holds <strong>lime powder</strong> used with coca leaves. The pin dips into the lime, which is then mixed with chewed coca leaves in the mouth."
        },
        {
          question: "How big is the poporo?",
          answer: "The <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> container stands <strong>23.5 cm (9.3 in)</strong> tall. Its elegant proportions make it an icon of pre-Columbian metalwork."
        },
        {
          question: "Who were the Quimbaya?",
          answer: "The <strong>Quimbaya</strong> lived in Colombia's Cauca Valley around 300-1500 CE. They created some of the finest gold work in the ancient Americas."
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
