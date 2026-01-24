const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding African Art Descriptions ===\n');

  const updates = [
    {
      slug: 'benin-bronze-queen-mother',
      description: `<p>This <strong>Benin Bronze head of a Queen Mother</strong> represents the Iyoba (Queen Mother), one of the most powerful figures in the Benin Kingdom. Cast around 1500 CE, the brass sculpture shows the distinctive high collar and peaked headdress that identified the Iyoba's rank. These commemorative heads were placed on altars in the royal palace, honoring deceased Queen Mothers who wielded significant political and spiritual authority.</p>
<p>Benin artists developed <strong>lost-wax casting</strong> to extraordinary sophistication, creating works that astonished Europeans when they first encountered them. The Portuguese began trading with Benin in the 15th century, providing the brass that made these sculptures possible. The British looted thousands of bronzes during the 1897 punitive expedition, dispersing them to museums worldwide.</p>
<p>This head is now at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, though Nigeria has requested repatriation of Benin bronzes from Western collections.</p>`,
      faqs: [
        {
          question: "Where is this Benin Bronze?",
          answer: "This head is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Nigeria has requested return of Benin bronzes, and some institutions have begun repatriation."
        },
        {
          question: "Who was the Iyoba (Queen Mother)?",
          answer: "The <strong>Iyoba</strong> was the mother of the reigning Oba (king), holding significant political power. She maintained her own palace, army, and court, participating in state affairs."
        },
        {
          question: "How were Benin bronzes made?",
          answer: "Artists used <strong>lost-wax casting</strong>, creating wax models covered in clay, then melting the wax and pouring in molten brass. The technique allowed extraordinary detail."
        },
        {
          question: "How did the British acquire these bronzes?",
          answer: "British forces <strong>looted the Benin royal palace</strong> during the 1897 punitive expedition. Thousands of bronzes were taken and sold to museums and collectors worldwide."
        }
      ]
    },
    {
      slug: 'benin-bronze-plaque-warriors',
      description: `<p>This <strong>Benin Bronze plaque</strong> depicts warriors in full regalia, part of a series that originally decorated the wooden pillars of the Oba's palace. Created around 1550 CE, these brass relief plaques documented court ceremonies, military achievements, and historical events. The figures wear elaborate coral bead regalia, carry weapons, and display the hierarchical composition typical of Benin court art.</p>
<p>Hundreds of plaques lined the palace columns, creating a <strong>visual chronicle</strong> of Benin history that impressed European visitors. Portuguese traders appear in some plaques, documenting the kingdom's international connections. The high-relief casting technique required exceptional skill, with figures emerging dramatically from flat backgrounds.</p>
<p>British soldiers removed the plaques during the 1897 expedition, selling them to fund the military operation. This example is now at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "What did the plaques originally decorate?",
          answer: "The plaques covered <strong>wooden pillars in the Oba's palace</strong>. Together they formed a visual history of the Benin Kingdom, documenting ceremonies, battles, and important events."
        },
        {
          question: "How big is this plaque?",
          answer: "This plaque measures approximately <strong>44 × 38 cm</strong> (17 × 15 in). The substantial size allowed detailed depictions of multiple figures."
        },
        {
          question: "What are the figures wearing?",
          answer: "The warriors wear <strong>coral bead regalia</strong> indicating high rank. Coral beads were royal prerogatives in Benin, controlled by the Oba and distributed to show favor."
        },
        {
          question: "Where is this plaque now?",
          answer: "This plaque is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>. Discussions about repatriating Benin bronzes to Nigeria continue."
        }
      ]
    },
    {
      slug: 'benin-bronze-leopard',
      description: `<p>This <strong>Benin Bronze leopard</strong> represents the royal animal of the Benin Kingdom, where only the Oba could own or display leopard imagery. Cast around 1600 CE from brass with copper spots, the life-size figure demonstrates Benin artists' ability to render animal subjects with naturalistic detail. Leopards flanked the Oba's throne, symbolizing his power over life and death.</p>
<p>The <strong>spots are inlaid copper</strong>, a technically demanding addition requiring separate casting and careful fitting. Aquamanile (water vessels) in leopard form were used in court rituals, pouring water over the Oba's hands. The kingdom maintained royal leopard houses, keeping live animals as symbols of sovereignty.</p>
<p>British forces took this leopard during the 1897 expedition. It now sits at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Why was the leopard important in Benin?",
          answer: "The leopard was the <strong>Oba's royal animal</strong>, symbolizing his power over life and death. Only the king could own or display leopard imagery."
        },
        {
          question: "How big is this leopard?",
          answer: "The sculpture measures <strong>65 cm (26 in)</strong> long. The near life-size scale made it suitable for flanking the royal throne."
        },
        {
          question: "How were the spots made?",
          answer: "The spots are <strong>inlaid copper</strong>, cast separately and fitted into the brass body. This technically demanding process shows Benin artists' advanced metalworking skills."
        },
        {
          question: "Where is the Benin leopard now?",
          answer: "This leopard is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>. Like other Benin bronzes, it was taken during the 1897 British expedition."
        }
      ]
    },
    {
      slug: 'benin-bronze-oba-head',
      description: `<p>This <strong>Benin Bronze head of an Oba</strong> (king) represents one of the hereditary rulers of the Benin Kingdom. Cast around 1550 CE, the brass sculpture shows the distinctive coral bead crown and high collar that identified Benin royalty. Such commemorative heads were placed on ancestral altars, where the current Oba could communicate with his predecessors and seek their guidance.</p>
<p>The idealized features follow conventions rather than portraying specific individuals, though headdress styles can sometimes indicate particular reigns. <strong>Elephant tusks</strong> were often inserted into the tops of these heads, carved with historical scenes and standing upright on the altar. The combination of bronze heads and ivory tusks created impressive displays honoring royal ancestors.</p>
<p>This head is now at the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
      faqs: [
        {
          question: "Where is this Oba head?",
          answer: "This head is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. Museums worldwide hold Benin bronzes acquired after the 1897 British expedition."
        },
        {
          question: "What was the head used for?",
          answer: "The head sat on an <strong>ancestral altar</strong> where the current Oba communicated with his predecessors. Carved ivory tusks often stood in holes atop the heads."
        },
        {
          question: "Does the head show a specific king?",
          answer: "Probably not. Benin heads show <strong>idealized features</strong> following artistic conventions rather than individual portraits. Headdress styles may indicate different periods."
        },
        {
          question: "How big is the head?",
          answer: "The head measures approximately <strong>35 cm (14 in)</strong> tall. This substantial size suited placement on royal altars."
        }
      ]
    },
    {
      slug: 'ife-bronze-head',
      description: `<p>This <strong>Ife Bronze head</strong> demonstrates the extraordinary naturalism achieved by artists of the ancient Yoruba city-state of Ife around 1300 CE. The serene facial features, with their classical proportions and calm expression, challenged Western assumptions about African art when first discovered. The vertical striations on the face may represent scarification or veils worn during ceremonies.</p>
<p>Ife artists developed <strong>sophisticated casting techniques</strong> that predated contact with Europeans, disproving theories that African metalworking derived from outside influence. These heads likely represented Oonis (kings) or other important figures, used in funerary or commemorative contexts. The naturalistic style differs markedly from the more stylized Benin bronzes that followed.</p>
<p>This head is at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, though many important Ife pieces remain at Nigeria's National Museum.</p>`,
      faqs: [
        {
          question: "Where is this Ife head?",
          answer: "This head is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>. Other important Ife bronzes remain at the <a href=\"/apps/masterpieces/museum/national-museum-lagos\"><strong>National Museum Lagos</strong></a>."
        },
        {
          question: "Why was Ife art revolutionary?",
          answer: "The <strong>naturalistic style</strong> challenged Western assumptions that African art was always abstract or \"primitive.\" The classical proportions rivaled ancient Greek sculpture."
        },
        {
          question: "What do the facial lines represent?",
          answer: "The vertical striations may show <strong>scarification patterns</strong> indicating identity or status, or may represent veils worn during royal ceremonies."
        },
        {
          question: "How old is this head?",
          answer: "The head dates to approximately <strong>1300 CE</strong>, during Ife's classical period. This predates European contact by about 200 years."
        }
      ]
    },
    {
      slug: 'ori-olokun-ife',
      description: `<p>The <strong>Ori Olokun</strong> ("Head of Olokun") is perhaps the most famous Ife bronze, discovered in 1910 near the shrine of the sea god Olokun. The brass head, created around 1300 CE, shows idealized human features with the serene expression characteristic of classical Ife art. The five-lobed crown and facial striations indicate royal or divine status.</p>
<p>German archaeologist Leo Frobenius controversially claimed the head proved Ife was founded by Atlanteans, unable to believe Africans created such sophisticated art. Nigerian scholars rejected this racist interpretation, demonstrating that <strong>Ife developed independently</strong> as a major artistic center. The Ori Olokun remains Nigeria's most celebrated artifact.</p>
<p>The head is a treasure of the <a href="/apps/masterpieces/museum/national-museum-lagos"><strong>National Museum Lagos</strong></a>, one of the few major Ife bronzes remaining in Nigeria.</p>`,
      faqs: [
        {
          question: "Where is the Ori Olokun?",
          answer: "The head is at the <a href=\"/apps/masterpieces/museum/national-museum-lagos\"><strong>National Museum Lagos</strong></a>. It's one of Nigeria's most important cultural treasures."
        },
        {
          question: "Who is Olokun?",
          answer: "<strong>Olokun</strong> is the Yoruba god of the sea and wealth. The head was discovered near his shrine, though it may represent a human ruler rather than the deity."
        },
        {
          question: "What controversy surrounded its discovery?",
          answer: "German archaeologist Leo Frobenius claimed it proved African art came from <strong>Atlantis</strong>, unable to accept African artistic achievement. Nigerian scholars thoroughly refuted this racist theory."
        },
        {
          question: "How big is the Ori Olokun?",
          answer: "The head measures approximately <strong>31 cm (12 in)</strong> tall. Despite its modest size, its artistic quality makes it Nigeria's most famous artwork."
        }
      ]
    },
    {
      slug: 'ife-terracotta-head',
      description: `<p>This <strong>Ife terracotta head</strong> demonstrates that the naturalistic Ife style extended beyond bronze to clay sculpture. Created around 1200 CE, the head shows the same serene features and careful proportions as the bronzes, with facial striations indicating scarification or ceremonial marking. Terracotta allowed artists to work more freely than bronze casting, capturing subtle expressions.</p>
<p>Ife terracottas were likely used in <strong>funeral rituals</strong>, placed in shrines or buried with the deceased. The clay medium was more accessible than bronze, suggesting these sculptures may have commemorated a broader range of individuals. The fired clay has survived centuries in Nigeria's challenging tropical climate.</p>
<p>Important Ife terracottas remain at the <a href="/apps/masterpieces/museum/national-museum-lagos"><strong>National Museum Lagos</strong></a>, preserving Nigeria's artistic heritage.</p>`,
      faqs: [
        {
          question: "Where is this Ife terracotta?",
          answer: "This head is at the <a href=\"/apps/masterpieces/museum/national-museum-lagos\"><strong>National Museum Lagos</strong></a>. Nigeria has retained many Ife terracottas while bronzes were dispersed."
        },
        {
          question: "How does it differ from Ife bronzes?",
          answer: "Terracotta was more <strong>accessible than bronze</strong>, allowing a wider range of commemorated individuals. The clay medium also permitted more spontaneous modeling."
        },
        {
          question: "What were terracottas used for?",
          answer: "They likely served in <strong>funeral rituals</strong>, placed in shrines or buried with the deceased. The heads may represent ancestors or important figures."
        },
        {
          question: "How old is this head?",
          answer: "The head dates to approximately <strong>1200 CE</strong>, slightly earlier than most Ife bronzes. Terracotta production may have preceded bronze casting at Ife."
        }
      ]
    },
    {
      slug: 'nok-terracotta-head',
      description: `<p>This <strong>Nok terracotta head</strong> represents Africa's oldest known sculptural tradition, created around 500 BCE in what is now central Nigeria. The distinctive features include triangular eyes, elaborate hairstyles, and elongated proportions that would influence West African art for millennia. Nok figures range from a few centimeters to life-size, all sharing a recognizable style.</p>
<p>The Nok culture flourished from approximately 1500 BCE to 500 CE, leaving behind thousands of terracotta fragments but no written records. Archaeologists discovered the first pieces in <strong>tin mining operations</strong> in 1928, giving the culture its modern name from the village of Nok. The sculptures' purposes remain debated, possibly serving religious or commemorative functions.</p>
<p>This head is at the <a href="/apps/masterpieces/museum/national-museum-lagos"><strong>National Museum Lagos</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Nok head?",
          answer: "This head is at the <a href=\"/apps/masterpieces/museum/national-museum-lagos\"><strong>National Museum Lagos</strong></a>. Nigeria preserves many Nok terracottas as national treasures."
        },
        {
          question: "How old is Nok art?",
          answer: "Nok culture flourished from approximately <strong>1500 BCE to 500 CE</strong>. This makes it sub-Saharan Africa's oldest known sculptural tradition."
        },
        {
          question: "What are the distinctive Nok features?",
          answer: "Nok sculptures show <strong>triangular eyes</strong>, elaborate hairstyles, and elongated proportions. These features influenced West African art for thousands of years."
        },
        {
          question: "How was Nok culture discovered?",
          answer: "Tin miners accidentally unearthed the first sculptures in <strong>1928</strong> near the village of Nok. The culture was named after this discovery site."
        }
      ]
    },
    {
      slug: 'nok-terracotta-figure',
      description: `<p>This <strong>Nok terracotta figure</strong> shows a seated or kneeling human form with the characteristic triangular eyes and elaborate hairstyle of Nok art. Created around 300 BCE, the figure demonstrates the technical sophistication of Nok potters, who built large hollow forms that could survive firing and burial. The posture and adornments may indicate social status or ritual significance.</p>
<p>Nok figures often show elaborate <strong>jewelry and hairstyles</strong>, suggesting a complex society with developed aesthetics. The hollow construction prevented cracking during firing, a technical challenge for large terracotta sculptures. Looting of Nok sites has destroyed archaeological context for many pieces, making it difficult to understand their original purposes.</p>
<p>This figure is at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        {
          question: "Where is this Nok figure?",
          answer: "This figure is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. Many Nok pieces left Nigeria before export restrictions were established."
        },
        {
          question: "How big is the figure?",
          answer: "The figure measures <strong>48 cm (19 in)</strong> tall. Nok sculptures range from small heads to near life-size figures."
        },
        {
          question: "What does the hairstyle indicate?",
          answer: "Elaborate hairstyles may indicate <strong>social status or identity</strong>. Nok sculptors devoted careful attention to hair and adornment details."
        },
        {
          question: "Why is looting a problem for Nok sites?",
          answer: "<strong>Illegal excavation</strong> destroys archaeological context, preventing scholars from understanding how the sculptures were used and what they meant to Nok people."
        }
      ]
    },
    {
      slug: 'kongo-nkisi-figure',
      description: `<p>This <strong>Kongo power figure (nkisi nkondi)</strong> bristles with iron nails and blades driven into its wooden body, each marking an oath, agreement, or appeal to spiritual forces. Created around 1880 in the Kongo Kingdom (modern Democratic Republic of Congo and Angola), the figure housed powerful spiritual substances in its abdominal cavity, activated by a ritual specialist called a nganga.</p>
<p>Nails were driven in to <strong>awaken the spirit</strong> and bind agreements, with each blade recording a specific transaction. The accumulation of metal created an increasingly powerful object over time. European missionaries and colonial administrators collected (and sometimes destroyed) these figures, viewing them as threatening "fetishes" rather than complex spiritual technologies.</p>
<p>This imposing figure is at the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Nkisi figure?",
          answer: "This figure is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. Major Kongo power figures are held in museums worldwide."
        },
        {
          question: "Why is it covered in nails?",
          answer: "Each nail marks an <strong>oath, agreement, or appeal</strong> to the spiritual forces housed within. Driving the nail \"woke up\" the spirit to enforce the commitment."
        },
        {
          question: "What is inside the figure?",
          answer: "A cavity (usually in the abdomen) contained <strong>powerful spiritual substances</strong> assembled by a ritual specialist. These materials gave the figure its power."
        },
        {
          question: "How big is this nkisi?",
          answer: "This figure stands <strong>117 cm (46 in)</strong> tall, unusually large for nkisi figures. Its size indicates it served an important community function."
        }
      ]
    },
    {
      slug: 'kongo-crucifix',
      description: `<p>This <strong>Kongo crucifix</strong> demonstrates how African artists transformed Christian imagery after Portuguese missionaries arrived in the late 15th century. Cast in brass around 1600, the crucified figure shows African features and proportions, adapting the European symbol to Kongo aesthetics. The Kongo Kingdom was among the first African states to adopt Christianity, with kings embracing the faith while maintaining traditional practices.</p>
<p>Kongo artists reinterpreted the crucifix through their own artistic traditions, creating a <strong>distinctive hybrid form</strong>. The figure's features, posture, and ornamentation differ from European models while remaining recognizably Christian. These crosses served both as devotional objects and as symbols of royal power, since the Kongo kings promoted Christianity.</p>
<p>This crucifix is at the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Kongo crucifix?",
          answer: "This crucifix is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. Similar crucifixes exist in collections worldwide."
        },
        {
          question: "How did Christianity reach the Kongo?",
          answer: "<strong>Portuguese missionaries</strong> arrived in the late 15th century. Kongo kings embraced Christianity, seeing it as a source of spiritual and political power."
        },
        {
          question: "What makes this crucifix distinctive?",
          answer: "Kongo artists gave the figure <strong>African features and proportions</strong>, creating a hybrid form that merged Christian imagery with local aesthetic traditions."
        },
        {
          question: "How old is this crucifix?",
          answer: "The crucifix dates to approximately <strong>1600 CE</strong>, about a century after Portuguese contact began the transformation of Kongo religious art."
        }
      ]
    },
    {
      slug: 'seated-figure-djenne',
      description: `<p>This <strong>seated terracotta figure from Djenné</strong> (in modern Mali) represents the sophisticated artistic traditions of the medieval Niger River valley. Created around 1300 CE, the figure shows the distinctive posture and surface treatment of Djenné sculpture, with arms wrapped around raised knees and a textured surface suggesting scarification or disease.</p>
<p>Djenné was a major trading city where <strong>Saharan and sub-Saharan cultures met</strong>, facilitating exchange of gold, salt, and ideas. The terracotta figures were buried in mounds for unknown purposes, possibly commemorating ancestors or important individuals. Extensive looting has removed most figures from their archaeological contexts, limiting scholarly understanding.</p>
<p>This figure is at the <a href="/apps/masterpieces/museum/metropolitan-museum"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Djenné figure?",
          answer: "This figure is at the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> in New York. Many Djenné terracottas have been looted and sold internationally."
        },
        {
          question: "Where is Djenné?",
          answer: "<strong>Djenné</strong> is in modern Mali, along the Niger River. It was a major medieval trading city connecting Saharan and sub-Saharan Africa."
        },
        {
          question: "What does the surface texture represent?",
          answer: "The bumpy texture may represent <strong>scarification or disease</strong>. Some scholars suggest the figures commemorate people who died of specific illnesses."
        },
        {
          question: "Why is looting a problem for Djenné art?",
          answer: "<strong>Illegal excavation</strong> removes figures from burial contexts, destroying information about their original purposes and meaning."
        }
      ]
    },
    {
      slug: 'fang-reliquary-guardian',
      description: `<p>This <strong>Fang reliquary guardian (byeri)</strong> protected ancestral relics kept in bark containers by the Fang people of Gabon and neighboring countries. Created around 1850, the wooden figure sat atop a box containing skulls and bones of important ancestors. The calm, meditative expression and balanced proportions exemplify Fang aesthetic ideals that later influenced European modernist artists.</p>
<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Picasso</strong></a> and other early 20th-century artists collected Fang figures, finding in them formal solutions to problems they were exploring. The <strong>geometric simplification</strong> of human features and the emphasis on essential forms resonated with Cubist and Expressionist goals. This artistic influence, however, often occurred without understanding or acknowledgment of African cultural contexts.</p>
<p>This guardian is at the <a href="/apps/masterpieces/museum/quai-branly-museum"><strong>Musée du Quai Branly</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is this Fang guardian?",
          answer: "This figure is at the <a href=\"/apps/masterpieces/museum/quai-branly-museum\"><strong>Musée du Quai Branly</strong></a> in Paris. Many Fang figures entered European collections in the colonial period."
        },
        {
          question: "What was the guardian protecting?",
          answer: "The figure sat atop a bark container holding <strong>ancestral skulls and bones</strong>. The guardian's presence protected and honored these important relics."
        },
        {
          question: "How did Fang art influence European artists?",
          answer: "<a href=\"/apps/masterpieces/artist/pablo-picasso\"><strong>Picasso</strong></a> and other modernists collected Fang figures, finding their <strong>geometric simplification</strong> inspirational. This influence shaped Cubism and Expressionism."
        },
        {
          question: "How big is this guardian?",
          answer: "The figure stands <strong>64 cm (25 in)</strong> tall. Fang guardians range from small to near life-size depending on the importance of the relics they protected."
        }
      ]
    },
    {
      slug: 'dan-mask-ivory-coast',
      description: `<p>This <strong>Dan mask</strong> from Ivory Coast/Liberia exemplifies the refined naturalism prized in Dan masking traditions. Created around 1900, the wooden mask shows the smooth, idealized features associated with female beauty in Dan culture. Such masks appeared in performances that educated, entertained, and maintained social order in Dan communities.</p>
<p>Dan masks represent a <strong>spectrum of characters</strong> from fierce warriors to gentle feminine spirits. This serene type, called deangle, embodied ideals of feminine beauty and performed educational and peacekeeping roles. The masks were not merely objects but served as vessels for spiritual beings who manifested during performances.</p>
<p>This mask is at the <a href="/apps/masterpieces/museum/quai-branly-museum"><strong>Musée du Quai Branly</strong></a> in Paris.</p>`,
      faqs: [
        {
          question: "Where is this Dan mask?",
          answer: "This mask is at the <a href=\"/apps/masterpieces/museum/quai-branly-museum\"><strong>Musée du Quai Branly</strong></a> in Paris. Dan masks entered European collections throughout the colonial period."
        },
        {
          question: "What type of mask is this?",
          answer: "This appears to be a <strong>deangle mask</strong>, representing idealized feminine beauty. Such masks performed educational and peacekeeping roles in Dan society."
        },
        {
          question: "How were Dan masks used?",
          answer: "Masks appeared in <strong>performances</strong> where they became vessels for spiritual beings. They educated communities, settled disputes, and maintained social order."
        },
        {
          question: "How big is this mask?",
          answer: "The mask measures approximately <strong>24 cm (9.5 in)</strong> tall. Dan masks are designed to be worn with elaborate costume and headdress additions."
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
