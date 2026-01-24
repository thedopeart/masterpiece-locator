const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Egyptian Artifact Descriptions ===\n');

  const updates = [
    {
      slug: 'golden-throne-tutankhamun',
      description: `<p>The <strong>Golden Throne of Tutankhamun</strong> is one of ancient Egypt's most intimate royal portraits, showing the young pharaoh with his wife Ankhesenamun in a tender domestic scene. Created around 1323 BCE, the wooden throne is covered in <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> and silver sheet, inlaid with glass, faience, and semiprecious stones. The backrest panel depicts Ankhesenamun anointing her husband with perfumed oil under the rays of the Aten sun disk.</p>
<p>Howard Carter described finding the throne as one of the tomb's most moving moments. The image reveals <strong>Amarna-period style</strong> with its elongated figures and naturalistic poses, suggesting the throne was made early in Tutankhamun's reign before he restored traditional religion. The queen's name originally read "Ankhesenaten" but was later altered. Lion heads protect the armrests, and the legs end in feline paws.</p>
<p>The throne now dazzles visitors at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, centerpiece of the complete Tutankhamun collection.</p>`,
      faqs: [
        {
          question: "Where is Tutankhamun's Golden Throne?",
          answer: "The throne is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. It's displayed alongside thousands of other objects from Tutankhamun's tomb."
        },
        {
          question: "What does the throne show?",
          answer: "The backrest depicts <strong>Tutankhamun and his wife</strong> Ankhesenamun in an intimate scene. She anoints him with perfume while rays from the sun disk Aten bless them both."
        },
        {
          question: "What is the throne made of?",
          answer: "The wooden throne is covered with <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold and silver sheet</strong></a>, inlaid with colored glass, faience, calcite, and carnelian. The craftsmanship represents the peak of New Kingdom luxury."
        },
        {
          question: "How big is the Golden Throne?",
          answer: "The throne measures <strong>102 × 54 cm</strong> (40 × 21 inches). Despite its grandeur, it's surprisingly intimate in scale, sized for a young pharaoh who died at 19."
        }
      ]
    },
    {
      slug: 'innermost-coffin-tutankhamun',
      description: `<p>The <strong>Innermost Coffin of Tutankhamun</strong> is a solid <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> sarcophagus weighing 110.4 kilograms, crafted to cradle the pharaoh's mummy for eternity. Created around 1323 BCE, this coffin lay inside two larger gilded wooden coffins, Russian-doll style. The figure wears the nemes headdress and false beard, clutching the crook and flail of kingship, with protective goddesses Isis and Nephthys spreading their wings across the body.</p>
<p>Howard Carter needed three years to reach this innermost coffin, carefully documenting and removing each layer. When he lifted the lid, he found the famous <strong>golden mask</strong> covering the mummy's face. The coffin's gold is nearly pure, requiring enormous quantities of the precious metal from Egypt's Nubian mines. The engraved feather pattern covering the body represents Rishi (divine plumage) decoration.</p>
<p>This coffin remains one of the largest gold objects ever created in the ancient world, now displayed at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Tutankhamun's Innermost Coffin?",
          answer: "The coffin is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. It held Tutankhamun's mummy, which remains in the Valley of the Kings tomb."
        },
        {
          question: "How much gold is in the coffin?",
          answer: "The coffin weighs <strong>110.4 kg (243 lbs)</strong> of nearly solid gold. This single object represents more gold than most ancient civilizations accumulated in centuries."
        },
        {
          question: "Why are there goddesses on the coffin?",
          answer: "<strong>Isis and Nephthys</strong> spread protective wings across the body. In Egyptian belief, these goddesses guarded the dead and helped ensure successful resurrection in the afterlife."
        },
        {
          question: "How big is the Innermost Coffin?",
          answer: "The coffin measures <strong>187 cm (74 inches)</strong> long. It nested inside two larger gilded wooden coffins, each progressively more ornate toward the precious center."
        }
      ]
    },
    {
      slug: 'anubis-shrine-tutankhamun',
      description: `<p>The <strong>Anubis Shrine</strong> from Tutankhamun's tomb features a life-size jackal god crouching alertly atop a gilded chest. Created around 1323 BCE, the wooden figure is coated with black resin to represent Anubis's role as lord of embalming, while gilded details pick out ears, collar, and claws. Howard Carter found the shrine in the tomb's Treasury, facing the burial chamber as if guarding the pharaoh's viscera.</p>
<p>The jackal's ears prick forward attentively, and his tail curls over the shrine's side with remarkable naturalism. <strong>Ancient Egyptians believed</strong> that jackals prowling cemeteries protected the dead, leading them to deify these animals as Anubis. The chest beneath the figure contained ritual objects wrapped in linen. A linen shawl dated to year seven of Akhenaten's reign draped over the figure when discovered.</p>
<p>The shrine now greets visitors at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, one of the tomb's most evocative guardian figures.</p>`,
      faqs: [
        {
          question: "Where is the Anubis Shrine displayed?",
          answer: "The shrine is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a> near Cairo. It stood guard in the tomb's Treasury for over 3,200 years before excavation."
        },
        {
          question: "Who is Anubis?",
          answer: "<strong>Anubis</strong> is the jackal-headed god of mummification and the afterlife. Egyptians observed jackals near cemeteries and believed they protected the dead from harm."
        },
        {
          question: "How big is the Anubis Shrine?",
          answer: "The shrine measures <strong>118 × 270 cm</strong> (46 × 106 inches). The jackal figure itself is nearly life-size, creating a powerful guardian presence."
        },
        {
          question: "Why is Anubis black?",
          answer: "The black resin coating represents <strong>fertile Nile soil</strong> and regeneration, not death. In Egyptian symbolism, black signified rebirth, making Anubis a positive funerary figure."
        }
      ]
    },
    {
      slug: 'canopic-shrine-tutankhamun',
      description: `<p>The <strong>Canopic Shrine of Tutankhamun</strong> protected the pharaoh's preserved organs in one of ancient Egypt's most elaborate funerary ensembles. The gilded wooden shrine stands nearly two meters tall, with four goddesses (Isis, Nephthys, Neith, and Serket) extending their arms protectively around the corners. Inside nested a calcite chest containing four miniature <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> coffins holding Tutankhamun's liver, lungs, stomach, and intestines.</p>
<p>Egyptian embalmers removed organs during mummification because they decayed quickly. Each organ was protected by a specific goddess and a son of Horus. The <strong>four goddesses</strong> face outward with graceful, elongated figures typical of late Amarna-period art. Their transparent linen dresses are carved with extraordinary delicacy into the gilded wood.</p>
<p>Howard Carter called this shrine "the most beautiful monument" in the tomb. It now anchors the Treasury gallery at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Tutankhamun's Canopic Shrine?",
          answer: "The shrine is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. Howard Carter considered it the tomb's most beautiful single object."
        },
        {
          question: "What was inside the Canopic Shrine?",
          answer: "Inside nested a calcite chest with <strong>four miniature gold coffins</strong> containing Tutankhamun's preserved liver, lungs, stomach, and intestines, each protected by a goddess."
        },
        {
          question: "Who are the four goddesses?",
          answer: "<strong>Isis, Nephthys, Neith, and Serket</strong> stand at the corners. Each goddess protected one organ and worked with a son of Horus to ensure the pharaoh's complete resurrection."
        },
        {
          question: "How big is the Canopic Shrine?",
          answer: "The gilded wooden shrine measures <strong>198 × 122 cm</strong> (78 × 48 inches). The entire ensemble with nested boxes inside was one of the tomb's tallest artifacts."
        }
      ]
    },
    {
      slug: 'tutankhamun-chariot',
      description: `<p>Howard Carter found <strong>six chariots</strong> in Tutankhamun's tomb, dismantled to fit through the narrow entrance. This ceremonial example features a gilded wooden body decorated with elaborate scenes of the pharaoh hunting and defeating enemies. Created around 1323 BCE, the lightweight vehicle demonstrates how Egyptian engineers achieved speed through elegant design rather than brute force.</p>
<p>The chariot's wheels have only four spokes (later designs used six or eight), and the <strong>leather-wrapped axle</strong> could flex over rough terrain. Scenes embossed into the gold show Tutankhamun as a lion-slaying warrior, though the young pharaoh's physical disabilities (revealed by CT scans) likely prevented him from actually fighting. The chariot may have been purely ceremonial, used in religious processions.</p>
<p>After painstaking restoration, the chariot is displayed at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a> alongside the other surviving examples from the tomb.</p>`,
      faqs: [
        {
          question: "Where is Tutankhamun's Chariot?",
          answer: "Several chariots from the tomb are at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. They were found dismantled and required extensive restoration."
        },
        {
          question: "Did Tutankhamun actually use the chariot?",
          answer: "Probably not. CT scans revealed <strong>physical disabilities</strong> including a clubfoot. The chariot was likely ceremonial, used for processions rather than warfare or hunting."
        },
        {
          question: "How big is the chariot?",
          answer: "The chariot measures approximately <strong>100 × 240 cm</strong> (39 × 94 inches). Its lightweight construction allowed horses to pull it at speed over desert terrain."
        },
        {
          question: "What scenes decorate the chariot?",
          answer: "Gold embossed panels show <strong>Tutankhamun hunting lions</strong> and defeating enemies. These idealized scenes presented the pharaoh as a powerful warrior regardless of reality."
        }
      ]
    },
    {
      slug: 'tutankhamun-crook-flail',
      description: `<p>The <strong>Crook and Flail of Tutankhamun</strong> are the quintessential symbols of Egyptian kingship, found crossed over the pharaoh's mummified chest. The crook (heka) resembles a shepherd's staff, while the flail (nekhakha) features three strands of beads. Created around 1323 BCE, both are crafted from gold, bronze, and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> glass, with alternating bands of dark and light creating a striking pattern.</p>
<p>These objects symbolized the pharaoh's dual role as <strong>shepherd of his people</strong> (the crook) and provider of grain (the flail, possibly representing a threshing tool). Every pharaoh held these implements in official portraits, and mummies were buried with them for use in the afterlife. Tutankhamun's examples preserve their original binding and materials remarkably well.</p>
<p>The crook and flail are displayed at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a> near the mummy's other funerary objects.</p>`,
      faqs: [
        {
          question: "Where are the Crook and Flail displayed?",
          answer: "Tutankhamun's crook and flail are at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. They were found crossed over his chest inside the innermost coffin."
        },
        {
          question: "What do the Crook and Flail mean?",
          answer: "The crook represents the pharaoh as <strong>shepherd of his people</strong>. The flail may symbolize grain threshing, making the king both protector and provider of Egypt."
        },
        {
          question: "How big are they?",
          answer: "The crook measures <strong>33.5 cm</strong> and the flail <strong>34 cm</strong>. Their compact size made them practical for crossing over a mummy's chest in burial position."
        },
        {
          question: "What are they made of?",
          answer: "Both feature <strong>gold, bronze, and blue glass</strong> in alternating bands. The materials and craftsmanship represent the finest New Kingdom metalwork."
        }
      ]
    },
    {
      slug: 'golden-shrine-goddesses-tutankhamun',
      description: `<p>This small <strong>gilded shrine with goddesses</strong> contained jewelry and precious objects in Tutankhamun's tomb. The wooden shrine is covered in <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> leaf and features four protective goddesses on each corner, their wings wrapping around the sides. Created around 1323 BCE, the shrine demonstrates how even secondary storage containers received lavish decoration in royal tombs.</p>
<p>The <strong>four goddesses</strong> shown are Isis, Nephthys, Neith, and Serket, the same quartet protecting the canopic shrine. Their inclusion on this smaller piece emphasizes how comprehensively the Egyptians surrounded their kings with divine protection. The shrine's contents included amulets, figurines, and ritual objects needed for the afterlife journey.</p>
<p>The shrine is now displayed at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a> among the many gilded treasures from the tomb.</p>`,
      faqs: [
        {
          question: "Where is this Golden Shrine?",
          answer: "The shrine is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. It's one of several gilded shrines from Tutankhamun's tomb, each serving different ritual purposes."
        },
        {
          question: "What was stored in the shrine?",
          answer: "The shrine contained <strong>jewelry, amulets, and ritual objects</strong> Tutankhamun would need in the afterlife. Even secondary containers received extraordinary artistic attention."
        },
        {
          question: "How big is the shrine?",
          answer: "The shrine measures approximately <strong>50 × 50 × 59 cm</strong> (20 × 20 × 23 inches). Its compact size made it portable for processions and practical for tomb storage."
        },
        {
          question: "Who are the four goddesses?",
          answer: "<strong>Isis, Nephthys, Neith, and Serket</strong> protect the shrine's corners. These goddesses appear repeatedly throughout Tutankhamun's burial equipment as guardians."
        }
      ]
    },
    {
      slug: 'papyrus-of-ani',
      description: `<p>The <strong>Papyrus of Ani</strong> is the finest surviving copy of the Egyptian Book of the Dead, an illustrated guide to the afterlife created around 1250 BCE. Unrolled, the scroll stretches 78 feet (24 meters), making it one of the longest papyri ever discovered. The scribe Ani was a royal treasurer who commissioned this elaborate version to ensure his safe passage through the underworld's many trials.</p>
<p>The papyrus contains <strong>nearly 200 spells</strong> with vivid illustrations showing Ani facing the gods, his heart being weighed against the feather of truth, and his ultimate acceptance into paradise. The famous "Weighing of the Heart" scene shows Anubis operating the scales while Thoth records the verdict. If the heart balanced with truth, the deceased lived forever; if not, the monster Ammit devoured them.</p>
<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired the papyrus in 1888 and displays it in sections to protect the fragile pigments.</p>`,
      faqs: [
        {
          question: "Where is the Papyrus of Ani?",
          answer: "The papyrus is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Its length requires displaying it in sections, rotating which parts are shown."
        },
        {
          question: "What is the Book of the Dead?",
          answer: "The Book of the Dead is a <strong>collection of spells</strong> helping the deceased navigate the afterlife. It was customized for each owner and included in tombs for 1,500 years."
        },
        {
          question: "How long is the Papyrus of Ani?",
          answer: "Unrolled, it stretches <strong>78 feet (24 meters)</strong>, one of the longest Egyptian papyri ever found. The text and illustrations were painted by master scribes."
        },
        {
          question: "Who was Ani?",
          answer: "Ani was a <strong>royal treasurer</strong> during the New Kingdom. His high status allowed him to commission this elaborate version with more spells and finer illustrations than typical copies."
        }
      ]
    },
    {
      slug: 'statue-senusret-iii',
      description: `<p>This <strong>granite statue of Senusret III</strong> shows Egypt's most powerful Middle Kingdom pharaoh with an unprecedented degree of realism. Unlike idealized Old Kingdom portraits, Senusret's sculptures depict him with heavy-lidded eyes, deep furrows beside his nose, and a downturned mouth suggesting age and care. Created around 1850 BCE, this psychological portraiture was revolutionary for its time.</p>
<p>Senusret III expanded Egypt's borders into Nubia, reformed provincial administration, and built extensively throughout the country. His <strong>careworn expression</strong> may reflect genuine royal burdens or may have been a deliberate artistic choice to show the king as a thoughtful guardian. The style influenced Egyptian art for centuries, making Senusret's portraits instantly recognizable.</p>
<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays this and other Senusret III statues in its Egyptian galleries, demonstrating the range of royal portraiture.</p>`,
      faqs: [
        {
          question: "Where is the Senusret III statue?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Multiple Senusret III portraits exist, each showing similar careworn features."
        },
        {
          question: "Why does Senusret look so realistic?",
          answer: "Middle Kingdom artists developed <strong>psychological portraiture</strong> showing age and worry. Whether reflecting his actual appearance or symbolizing royal burdens remains debated."
        },
        {
          question: "How big is the statue?",
          answer: "This example measures <strong>122 cm (48 inches)</strong> tall. Senusret commissioned many statues in various sizes, from intimate to colossal."
        },
        {
          question: "Who was Senusret III?",
          answer: "Senusret III ruled Egypt 1878-1839 BCE during the <strong>Middle Kingdom</strong>. He expanded into Nubia, reformed government, and was later worshipped as a god in that region."
        }
      ]
    },
    {
      slug: 'golden-flies-ahhotep',
      description: `<p>The <strong>Golden Flies of Queen Ahhotep</strong> are a military decoration honoring the warrior queen who helped liberate Egypt from foreign Hyksos rulers around 1530 BCE. The three <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> flies, each about 9 centimeters long, hang from a gold chain as a necklace. Flies were awarded to soldiers who showed persistence and bravery in battle, qualities the insects demonstrated by returning repeatedly despite being swatted away.</p>
<p>Ahhotep was the mother of Ahmose I, who finally expelled the Hyksos and founded the New Kingdom. An inscription credits the queen with <strong>rallying troops</strong> and suppressing rebellion during the wars of liberation. Her tomb contained weapons and military honors alongside traditional female jewelry, confirming her martial role.</p>
<p>The Golden Flies are displayed at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a> with other treasures from Ahhotep's burial.</p>`,
      faqs: [
        {
          question: "Where are the Golden Flies displayed?",
          answer: "The flies are at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. They were found in Queen Ahhotep's tomb at Dra' Abu el-Naga in 1859."
        },
        {
          question: "Why flies as military honors?",
          answer: "Flies represented <strong>persistence in battle</strong>, returning repeatedly despite being swatted. Ancient soldiers who showed similar determination received golden fly decorations."
        },
        {
          question: "Who was Queen Ahhotep?",
          answer: "Ahhotep helped <strong>liberate Egypt from the Hyksos</strong> around 1550 BCE. She rallied troops and suppressed rebellion, earning military honors alongside her son Ahmose I."
        },
        {
          question: "How big are the Golden Flies?",
          answer: "Each fly measures approximately <strong>9 cm (3.5 inches)</strong>. Strung on a gold chain, they formed a substantial necklace worn as a badge of honor."
        }
      ]
    },
    {
      slug: 'mummy-mask-psusennes',
      description: `<p>The <strong>Gold Mask of Psusennes I</strong> rivals Tutankhamun's famous mask in craftsmanship, though far fewer visitors know it. Created around 1000 BCE during the Third Intermediate Period, the mask covered the mummified face of a pharaoh who ruled from Tanis in the Nile Delta. The <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> sheet is inlaid with lapis lazuli and glass, depicting the king with the traditional nemes headdress and divine beard.</p>
<p>Pierre Montet discovered Psusennes's intact tomb at Tanis in 1940, during World War II. The <strong>timing prevented</strong> the spectacular finds from receiving the attention given to Tutankhamun. Yet the burial equipment rivals the famous boy-king's treasures, with silver coffins and gold jewelry demonstrating that later pharaohs commanded equal wealth and artistic skill.</p>
<p>The mask is displayed at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, finally receiving recognition alongside Egypt's most famous funerary art.</p>`,
      faqs: [
        {
          question: "Where is Psusennes I's mask?",
          answer: "The mask is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. It rivals Tutankhamun's mask in quality but remains far less famous due to its wartime discovery."
        },
        {
          question: "How does it compare to Tutankhamun's mask?",
          answer: "Both are solid <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> with similar craftsmanship. Psusennes's mask is slightly smaller but demonstrates equal artistic achievement from a later period."
        },
        {
          question: "Why isn't it more famous?",
          answer: "Pierre Montet found the tomb in <strong>1940 during WWII</strong>. The discovery couldn't capture public attention like Tutankhamun's 1920s excavation during peacetime."
        },
        {
          question: "How old is the mask?",
          answer: "The mask dates to approximately <strong>1000 BCE</strong>, about 300 years after Tutankhamun. It proves Egyptian royal burial traditions continued with undiminished splendor."
        }
      ]
    },
    {
      slug: 'coffin-henutmehyt',
      description: `<p>The <strong>Coffin of Henutmehyt</strong> exemplifies the elaborate burial equipment created for high-status women during Egypt's New Kingdom. Made around 1250 BCE, the gilded wooden coffin features the deceased with a elaborate wig, broad collar, and serene expression. Every surface is covered with protective deities, hieroglyphic spells, and scenes ensuring Henutmehyt's successful afterlife journey.</p>
<p>Henutmehyt served as a <strong>chantress of Amun</strong>, a prestigious religious position at the great Karnak temple. Her title indicates elite status, and her burial equipment confirms it. The coffin's yellow background represents gold and immortality, while the figures of Isis and Nephthys spread protective wings across the body.</p>
<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> acquired the coffin in 1835, and it remains one of the finest examples of Ramesside-period funerary art outside Egypt.</p>`,
      faqs: [
        {
          question: "Where is Henutmehyt's coffin?",
          answer: "The coffin is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It's one of the finest gilded coffins from the New Kingdom in any museum."
        },
        {
          question: "Who was Henutmehyt?",
          answer: "Henutmehyt was a <strong>chantress of Amun</strong>, a religious singer at Karnak temple. This elite position allowed her to afford elaborate burial equipment typically reserved for royalty."
        },
        {
          question: "How big is the coffin?",
          answer: "The coffin measures <strong>190 cm (75 inches)</strong> long. It formed the outer layer of a nested set typical of high-status New Kingdom burials."
        },
        {
          question: "What decorations cover the coffin?",
          answer: "The gilded surface shows <strong>protective deities and spells</strong>. Isis and Nephthys spread wings across the body, while hieroglyphs ensure safe passage through the underworld."
        }
      ]
    },
    {
      slug: 'colossal-head-amenhotep-iii',
      description: `<p>This <strong>colossal red granite head of Amenhotep III</strong> once belonged to a standing statue over eight meters tall. Carved around 1350 BCE, the fragment weighs several tons and preserves the king's serene expression, almond-shaped eyes, and subtle smile. Amenhotep III ruled during Egypt's wealthiest period and commissioned more statues of himself than any previous pharaoh.</p>
<p>The head likely came from the king's mortuary temple on Thebes' west bank, the <strong>largest temple complex</strong> ever built in Egypt (now almost entirely destroyed except for the Colossi of Memnon). Giovanni Belzoni, the same excavator who removed the Younger Memnon bust, brought this head to Britain in 1817. The sophisticated carving demonstrates the artistic heights achieved during Amenhotep's reign.</p>
<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays this head in its Egyptian sculpture gallery, demonstrating the scale of New Kingdom royal monuments.</p>`,
      faqs: [
        {
          question: "Where is this Amenhotep III head?",
          answer: "The colossal head is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Belzoni transported it from Thebes in 1817 alongside the Younger Memnon bust."
        },
        {
          question: "How big was the original statue?",
          answer: "The head alone measures <strong>290 cm (9.5 feet)</strong> tall. The complete standing statue would have exceeded 8 meters, towering over worshippers at the temple."
        },
        {
          question: "Who was Amenhotep III?",
          answer: "Amenhotep III ruled Egypt 1386-1349 BCE during its <strong>wealthiest period</strong>. He built extensively and commissioned more statues of himself than any previous pharaoh."
        },
        {
          question: "Where did the statue originally stand?",
          answer: "The head came from Amenhotep's <strong>mortuary temple at Thebes</strong>. Once Egypt's largest temple complex, almost nothing remains today except the famous Colossi of Memnon."
        }
      ]
    },
    {
      slug: 'zodiac-of-dendera',
      description: `<p>The <strong>Zodiac of Dendera</strong> is a sandstone ceiling depicting the night sky as ancient Egyptians understood it around 50 BCE. The circular relief shows constellations including recognizable zodiac signs (Aries, Taurus, Leo, Scorpio) alongside traditional Egyptian sky figures. Carved during the Greek-influenced Ptolemaic period, it represents a unique fusion of Mesopotamian, Greek, and Egyptian astronomical traditions.</p>
<p>French engineers removed the zodiac from the Temple of Hathor at Dendera in 1821, sawing it from the ceiling with gunpowder-assisted cuts. The <strong>controversial extraction</strong> sparked early debates about cultural property that continue today. Modern scholars use the zodiac to study ancient astronomical knowledge, though attempts to date the temple from star positions have proven unreliable.</p>
<p>The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> displays the zodiac in its Egyptian galleries, one of the most significant astronomical artifacts from the ancient world.</p>`,
      faqs: [
        {
          question: "Where is the Zodiac of Dendera?",
          answer: "The zodiac is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. French engineers removed it from Dendera temple in 1821 in a controversial extraction."
        },
        {
          question: "What does the zodiac show?",
          answer: "The relief depicts <strong>constellations and zodiac signs</strong> as understood around 50 BCE. It combines Egyptian, Greek, and Mesopotamian astronomical traditions."
        },
        {
          question: "How big is the Zodiac of Dendera?",
          answer: "The sandstone ceiling section measures <strong>253 cm (100 inches)</strong> in diameter. Its size and weight required significant engineering to remove and transport to France."
        },
        {
          question: "How old is the Zodiac of Dendera?",
          answer: "The zodiac dates to approximately <strong>50 BCE</strong>, late in the Ptolemaic period. It's one of the latest major temple carvings from ancient Egypt before Roman rule."
        }
      ]
    },
    {
      slug: 'ka-statue-of-hor',
      description: `<p>The <strong>Ka Statue of King Hor</strong> is a remarkably preserved wooden figure with rock crystal eyes that seem to follow viewers across the room. Created around 1700 BCE, the nearly life-size statue represents the pharaoh's Ka (life force or spirit double) with its characteristic upraised arms forming the hieroglyph for "Ka" atop the head. The wooden body was once covered with painted stucco, now mostly lost.</p>
<p>Jacques de Morgan discovered the statue in 1894 at Dahshur, near the pyramid complexes. The <strong>rock crystal and quartz eyes</strong> set in copper sockets create an uncannily lifelike gaze, similar to the Seated Scribe but on a much larger scale. King Hor ruled briefly during the chaotic Second Intermediate Period, yet his burial equipment rivals earlier royal standards.</p>
<p>The statue now stands at the <a href="/apps/masterpieces/museum/grand-egyptian-museum"><strong>Grand Egyptian Museum</strong></a>, its penetrating gaze drawing visitors across the gallery.</p>`,
      faqs: [
        {
          question: "Where is the Ka Statue of Hor?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/grand-egyptian-museum\"><strong>Grand Egyptian Museum</strong></a>. Its lifelike eyes make it one of the most striking sculptures in the Egyptian collection."
        },
        {
          question: "What is a Ka statue?",
          answer: "A Ka statue housed the deceased's <strong>life force or spirit</strong>. The upraised arms atop the head form the hieroglyph \"Ka,\" indicating this figure's spiritual function."
        },
        {
          question: "Why do the eyes look so real?",
          answer: "<strong>Rock crystal and quartz</strong> set in copper sockets create the lifelike effect. This ancient technique produces eyes that seem to follow viewers around the room."
        },
        {
          question: "How big is the Ka Statue?",
          answer: "The wooden figure stands <strong>170 cm (67 inches)</strong> tall, nearly life-size. Its scale and preservation make it one of the finest royal Ka statues surviving from ancient Egypt."
        }
      ]
    },
    {
      slug: 'kneeling-hatshepsut',
      description: `<p>This <strong>large kneeling statue of Hatshepsut</strong> shows Egypt's female pharaoh offering two wine jars to the god Amun. Carved from granite around 1479 BCE, the 261-centimeter figure depicts Hatshepsut wearing the male pharaonic regalia she adopted to legitimize her rule. Her kneeling pose demonstrates submission to the gods while her royal insignia asserts divine kingship.</p>
<p>The statue came from Hatshepsut's mortuary temple at <strong>Deir el-Bahri</strong>, where it stood in the upper terrace's colonnade. Her nephew Thutmose III later smashed many of her images, but excavators recovered enough fragments to reconstruct this and other statues. The smooth granite preserves subtle facial features despite the damage.</p>
<p>The <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum</strong></a> displays this statue alongside other reconstructed Hatshepsut sculptures, the world's finest collection of her portraits outside Egypt.</p>`,
      faqs: [
        {
          question: "Where is the Kneeling Hatshepsut?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. The Met holds the world's most important collection of Hatshepsut sculpture."
        },
        {
          question: "What is Hatshepsut holding?",
          answer: "She offers <strong>two wine jars</strong> to the god Amun. This pose shows the pharaoh fulfilling ritual duties despite her unconventional gender for the role."
        },
        {
          question: "How big is the statue?",
          answer: "The granite figure measures <strong>261.5 cm (103 inches)</strong> tall. Even kneeling, this colossal scale demonstrated Hatshepsut's royal authority."
        },
        {
          question: "Why was it smashed?",
          answer: "Hatshepsut's nephew <strong>Thutmose III</strong> ordered her monuments destroyed after her death. Archaeologists spent decades reassembling fragments into complete statues."
        }
      ]
    },
    {
      slug: 'coffin-henettawy',
      description: `<p>The <strong>Coffin Set of Henettawy</strong> comprises nested coffins and a mummy board from the Third Intermediate Period, around 1000 BCE. The elaborately painted surfaces show the deceased surrounded by protective deities, with a large scarab beetle representing rebirth spreading its wings across the chest. Henettawy was a chantress of Amun-Ra at Karnak temple, a prestigious religious position.</p>
<p>The coffins feature the <strong>yellow background</strong> traditional of this period, representing gold and solar symbolism. Hieroglyphic inscriptions name the many gods protecting Henettawy's journey through the underworld. The face is gilded, indicating her high status, while the body is covered with detailed divine imagery.</p>
<p>The <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum</strong></a> displays the complete set, demonstrating how elite Egyptians were buried during the time of divided kingdoms.</p>`,
      faqs: [
        {
          question: "Where is Henettawy's coffin set?",
          answer: "The coffin set is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. It includes outer and inner coffins plus a mummy board."
        },
        {
          question: "Who was Henettawy?",
          answer: "Henettawy was a <strong>chantress of Amun-Ra</strong> at Karnak temple around 1000 BCE. This religious position allowed elite women to afford elaborate burial equipment."
        },
        {
          question: "How big is the coffin set?",
          answer: "The outer coffin measures <strong>203 cm (80 inches)</strong> long. The nested set protected the mummy in progressively more intimate layers."
        },
        {
          question: "What do the decorations mean?",
          answer: "The <strong>yellow background</strong> represents gold and solar rebirth. Deities and spells cover every surface, magically protecting Henettawy through the underworld journey."
        }
      ]
    },
    {
      slug: 'taharqa-sphinx',
      description: `<p>The <strong>Taharqa Sphinx</strong> depicts a Nubian pharaoh with distinctly African features, representing Egypt under Kushite (modern Sudanese) rule. Carved from granite around 680 BCE, the sphinx shows Taharqa wearing the traditional nemes headdress with a double uraeus (cobra), symbolizing his rule over both Egypt and Nubia. The features are more naturalistic than earlier Egyptian sphinxes.</p>
<p>Taharqa ruled as part of Egypt's <strong>25th Dynasty</strong>, when Nubian kings conquered and unified the divided land. He built extensively, including additions to Karnak temple, before Assyrian invasions forced him to retreat southward. His sphinxes at temples throughout Egypt and Nubia demonstrated his pharaonic authority.</p>
<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> displays this sphinx in its Sudan and Egypt gallery, highlighting the cultural connections between these ancient civilizations.</p>`,
      faqs: [
        {
          question: "Where is the Taharqa Sphinx?",
          answer: "The sphinx is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. It demonstrates the artistic styles of Egypt's Nubian 25th Dynasty."
        },
        {
          question: "Who was Taharqa?",
          answer: "Taharqa was a <strong>Nubian pharaoh</strong> who ruled Egypt 690-664 BCE. His Kushite dynasty briefly reunified Egypt before Assyrian invasions ended their control."
        },
        {
          question: "What makes this sphinx distinctive?",
          answer: "The sphinx shows <strong>African features</strong> reflecting Taharqa's Nubian heritage. The double uraeus cobras symbolize his rule over both Egypt and Nubia."
        },
        {
          question: "How big is the sphinx?",
          answer: "The granite sculpture measures <strong>73 × 163 cm</strong> (29 × 64 inches). Its smaller scale made it suitable for temple placement rather than monumental outdoor display."
        }
      ]
    },
    {
      slug: 'cleopatra-vii-statue',
      description: `<p>This <strong>basalt statue of Cleopatra VII</strong> is one of very few confirmed portraits of history's most famous Egyptian queen. Carved around 50 BCE, the figure shows Cleopatra in traditional pharaonic style with the triple uraeus crown, though the facial features suggest Hellenistic influence. Unlike the glamorous Hollywood image, ancient portraits show a woman of intelligence and authority rather than conventional beauty.</p>
<p>Cleopatra ruled Egypt as the last active pharaoh of the Ptolemaic dynasty, famously allying with Julius Caesar and Mark Antony before her kingdom fell to Rome. Her <strong>actual appearance</strong> remains debated, but coins and statues suggest a prominent nose and strong features. This statue represents her in the Egyptian royal tradition she claimed as heir to the pharaohs.</p>
<p>Several museums hold potential Cleopatra portraits, with identifications often debated. Ancient sources emphasized her charm and intelligence over physical beauty.</p>`,
      faqs: [
        {
          question: "Is this really Cleopatra?",
          answer: "The identification is <strong>probable but debated</strong>. Few confirmed Cleopatra portraits survive, and scholars argue over which statues actually depict her."
        },
        {
          question: "What did Cleopatra actually look like?",
          answer: "Coins and statues show <strong>strong features and a prominent nose</strong>. Ancient writers praised her charm and intellect rather than conventional beauty."
        },
        {
          question: "How old is this statue?",
          answer: "The statue dates to approximately <strong>50 BCE</strong>, during Cleopatra's reign. She ruled Egypt from 51-30 BCE as the last active pharaoh."
        },
        {
          question: "Why is she shown in Egyptian style?",
          answer: "Though of Greek Macedonian descent, Cleopatra adopted <strong>Egyptian traditions</strong> to legitimize her rule. She was the only Ptolemaic ruler who learned the Egyptian language."
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
