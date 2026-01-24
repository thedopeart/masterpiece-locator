const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Asian Art Descriptions ===\n');

  const updates = [
    {
      slug: 'great-wave-off-kanagawa',
      description: `<p><strong>The Great Wave off Kanagawa</strong> is Japan's most recognizable artwork, a woodblock print showing fishing boats threatened by a towering <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>wave</strong></a> with Mount Fuji visible in the distance. Created around 1831 by <a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a>, it was part of his series "Thirty-six Views of Mount Fuji." The print's dynamic composition influenced Western artists from Monet to Van Gogh.</p>
<p>Hokusai was over 70 when he created this image, having spent decades perfecting his craft. The <strong>crashing wave</strong> forms a perfect frame for tiny Fuji, inverting traditional Japanese art's emphasis on the sacred mountain. Western influence appears in the use of Prussian blue, a recently imported synthetic pigment. The print cost about as much as a bowl of noodles when first sold.</p>
<p>Multiple impressions exist in museums worldwide, each varying slightly due to the woodblock printing process and different stages of the edition.</p>`,
      faqs: [
        {
          question: "Where can I see The Great Wave?",
          answer: "Impressions exist in many museums including the <a href=\"/apps/masterpieces/museum/metropolitan-museum\"><strong>Metropolitan Museum</strong></a>, British Museum, and Tokyo National Museum. The woodblock created multiple prints, so no single \"original\" exists."
        },
        {
          question: "How big is The Great Wave?",
          answer: "Each print measures approximately <strong>25.7 × 37.9 cm</strong> (10.1 × 14.9 in). The modest size suited Japanese homes and made the prints affordable to common people."
        },
        {
          question: "What influenced Western art about this print?",
          answer: "The <strong>asymmetrical composition</strong> and flat color areas inspired Impressionists and Art Nouveau artists. Van Gogh collected Japanese prints and referenced this wave in letters."
        },
        {
          question: "Who created The Great Wave?",
          answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Katsushika Hokusai</strong></a> created it around 1831 when he was about 70 years old. He continued working until his death at 89, never satisfied with his skills."
        }
      ]
    },
    {
      slug: 'red-fuji-hokusai',
      description: `<p><strong>Red Fuji (Fine Wind, Clear Morning)</strong> shows Mount Fuji glowing red-brown in early morning light, its slopes catching the sun while the sky transitions from blue to white. Created around 1831 by <a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a>, this print rivals The Great Wave as the most celebrated image in the "Thirty-six Views of Mount Fuji" series.</p>
<p>The effect occurs briefly on certain autumn mornings when atmospheric conditions paint the mountain in unexpected colors. Hokusai stripped the composition to essentials: mountain, sky, and tiny trees at the base establishing scale. The <strong>simplicity is deceptive</strong>, requiring precise color gradation across the sky and careful registration of the blocks. Early impressions show deeper blue and richer red than later printings.</p>
<p>Impressions exist in museums worldwide, with quality varying based on when in the edition they were printed.</p>`,
      faqs: [
        {
          question: "Why is it called Red Fuji?",
          answer: "On certain autumn mornings, <strong>atmospheric conditions</strong> cause Mount Fuji to glow red-brown in early sunlight. Hokusai captured this brief, spectacular phenomenon."
        },
        {
          question: "How does it relate to The Great Wave?",
          answer: "Both are from <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai's</strong></a> \"Thirty-six Views of Mount Fuji\" series. They represent opposite approaches: the wave is dynamic and complex, Red Fuji is serene and minimal."
        },
        {
          question: "How big is Red Fuji?",
          answer: "The print measures approximately <strong>25.4 × 38.1 cm</strong> (10 × 15 in). This standard size (ōban) was the most common format for ukiyo-e landscape prints."
        },
        {
          question: "What makes early impressions valuable?",
          answer: "<strong>Early prints</strong> from the edition show deeper, more saturated colors before the woodblocks began wearing down. Later impressions appear lighter and less detailed."
        }
      ]
    },
    {
      slug: 'thunderstorm-beneath-summit-hokusai',
      description: `<p><strong>Thunderstorm Beneath the Summit</strong> shows Mount Fuji's dark peak rising above swirling storm clouds shot through with lightning. Created around 1831 by <a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a>, this dramatic print contrasts sharply with the serene Red Fuji from the same "Thirty-six Views" series. The mountain dominates from an impossible vantage point, as if the viewer floated in the turbulent sky.</p>
<p>Hokusai showed Fuji in every weather condition and from every angle, demonstrating the mountain's many moods. Here, <strong>zigzag lightning</strong> illuminates the storm while the summit remains calm above the chaos. The composition creates tension between the mountain's eternal stability and the violent weather below. Dark clouds rendered in gradated printing add depth to the threatening sky.</p>
<p>This dramatic image is rarer than Red Fuji or The Great Wave, making good impressions particularly prized.</p>`,
      faqs: [
        {
          question: "How does this relate to other Hokusai prints?",
          answer: "It's from the \"Thirty-six Views of Mount Fuji\" series by <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a>. While Red Fuji shows calm weather, this print captures Fuji's more dramatic, threatening moods."
        },
        {
          question: "Why is this print less famous?",
          answer: "The <strong>dark composition</strong> is harder to reproduce and fewer impressions survive in good condition. The Great Wave and Red Fuji were always more popular."
        },
        {
          question: "How big is the print?",
          answer: "It measures approximately <strong>25 × 37 cm</strong> (9.8 × 14.6 in), the standard ōban size Hokusai used throughout the Fuji series."
        },
        {
          question: "What technique creates the lightning effect?",
          answer: "The <strong>zigzag lightning</strong> was cut as negative space in the woodblock, allowing the white paper to show through the dark cloud areas."
        }
      ]
    },
    {
      slug: 'sudden-shower-shin-ohashi',
      description: `<p><strong>Sudden Shower over Shin-Ōhashi Bridge and Atake</strong> captures pedestrians caught in a downpour, their figures bent against driving rain as they hurry across a wooden bridge. Created in 1857 by <a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a>, this print from "One Hundred Famous Views of Edo" became one of the most influential Japanese images in Western art.</p>
<p>Van Gogh painted an oil copy of this print, fascinated by how diagonal rain lines and the <strong>flattened perspective</strong> created such immediate drama. Hiroshige achieved the rain effect by carving fine parallel lines into the block, printing them in gradated gray that darkens toward the top. The timber-laden rafts below the bridge add depth to the composition while figures on the bridge provide human scale.</p>
<p>The print demonstrates Hiroshige's ability to capture weather and atmosphere in ways Western artists found revolutionary.</p>`,
      faqs: [
        {
          question: "Why did Van Gogh copy this print?",
          answer: "Van Gogh was fascinated by <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige's</strong></a> ability to convey weather and mood through simple means. He painted an oil copy to study the techniques."
        },
        {
          question: "How was the rain effect created?",
          answer: "<strong>Fine parallel lines</strong> carved into the woodblock created the rain. Gradated printing made the rain darker at the top, suggesting storm clouds."
        },
        {
          question: "How big is the print?",
          answer: "The print measures <strong>34 × 22.5 cm</strong> (13.4 × 8.9 in). This vertical format suited the series' focus on specific Edo locations."
        },
        {
          question: "What is Shin-Ōhashi?",
          answer: "Shin-Ōhashi (\"New Great Bridge\") crossed the <strong>Sumida River</strong> in Edo (now Tokyo). Hiroshige depicted many of the city's famous bridges in this series."
        }
      ]
    },
    {
      slug: 'plum-park-kameido-hiroshige',
      description: `<p><strong>Plum Park in Kameido</strong> shows blossoming plum branches framing a distant view of visitors in a famous Edo garden. Created in 1857 by <a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a>, this print from "One Hundred Famous Views of Edo" exemplifies his innovative compositions that placed objects in the extreme foreground, a technique Western artists found revolutionary.</p>
<p>Van Gogh painted an oil copy of this print, captivated by the <strong>bold cropping</strong> of the plum branch and the red sky. The composition places viewers inside the scene rather than observing from a distance. Hiroshige's use of gradated color in the sky creates atmospheric depth, while the intricate branch patterns demonstrate technical virtuosity in woodblock carving.</p>
<p>The Kameido plum garden was a popular destination for Edo residents viewing spring blossoms, a tradition that continues in Tokyo today.</p>`,
      faqs: [
        {
          question: "Why is the composition unusual?",
          answer: "The <strong>extreme foreground cropping</strong> of the plum branch was revolutionary. Western artists typically placed main subjects in the middle distance, not cutting across the frame edge."
        },
        {
          question: "What influenced Van Gogh about this print?",
          answer: "Van Gogh copied this print in oil, fascinated by <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige's</strong></a> bold composition and use of flat color areas. The influence appears throughout his later work."
        },
        {
          question: "What is the red sky?",
          answer: "Hiroshige used <strong>gradated printing</strong> from red to yellow to suggest evening or early morning light. This atmospheric effect was one of his signatures."
        },
        {
          question: "How big is the print?",
          answer: "The print measures <strong>34 × 22.5 cm</strong> (13.4 × 8.9 in), the standard vertical format for the \"One Hundred Famous Views\" series."
        }
      ]
    },
    {
      slug: 'night-snow-kambara',
      description: `<p><strong>Night Snow at Kambara</strong> depicts travelers trudging through deep snow in a mountain village, the landscape hushed under a heavy winter blanket. Created around 1834 by <a href="/apps/masterpieces/artist/utagawa-hiroshige"><strong>Utagawa Hiroshige</strong></a>, this print from "The Fifty-three Stations of the Tōkaidō" captures the quiet beauty and hardship of traveling Japan's main highway.</p>
<p>Scholars note that Kambara rarely receives heavy snow in reality, suggesting Hiroshige imagined or embellished the scene for artistic effect. The <strong>gradated gray sky</strong> creates depth while tiny figures emphasize the landscape's vast silence. Snow falling against dark backgrounds required careful printing, with white paper left blank to represent snowflakes. The composition's stillness makes it one of the series' most beloved images.</p>
<p>Impressions vary in quality, with early printings showing crisper details and more nuanced gray tones.</p>`,
      faqs: [
        {
          question: "Did Hiroshige actually see this scene?",
          answer: "Probably not. <strong>Kambara rarely receives heavy snow</strong>. Hiroshige likely imagined or embellished the scene, prioritizing artistic effect over documentary accuracy."
        },
        {
          question: "What series is this from?",
          answer: "It's from \"The Fifty-three Stations of the Tōkaidō\" by <a href=\"/apps/masterpieces/artist/utagawa-hiroshige\"><strong>Hiroshige</strong></a>, depicting rest stops along the highway between Edo (Tokyo) and Kyoto."
        },
        {
          question: "How was the snow effect achieved?",
          answer: "<strong>Blank paper</strong> represents falling and fallen snow. The printer left areas unprinted while adding gradated gray for the sky."
        },
        {
          question: "How big is the print?",
          answer: "The print measures approximately <strong>22.8 × 35.4 cm</strong> (9 × 13.9 in). This horizontal format suited landscape compositions."
        }
      ]
    },
    {
      slug: 'three-beauties-utamaro',
      description: `<p><strong>Three Beauties of the Present Day</strong> depicts three famous beauties of 1790s Edo: Tomimoto Toyohina, Naniwaya Kita, and Takashima Hisa. Created around 1793 by <a href="/apps/masterpieces/artist/kitagawa-utamaro"><strong>Kitagawa Utamaro</strong></a>, this print exemplifies his mastery of bijin-ga (pictures of beautiful women), the genre for which he became internationally famous.</p>
<p>Utamaro revolutionized ukiyo-e portraiture by focusing on <strong>psychological expression</strong> rather than idealized types. Each woman has distinctive features and personality, recognizable to contemporary viewers who knew them from Edo's entertainment districts. The subtle differences in their expressions and the delicate rendering of hair and fabric demonstrate technical virtuosity. The composition places three faces against a plain background, eliminating distractions.</p>
<p>This print helped establish Utamaro as the master of feminine beauty in Japanese art.</p>`,
      faqs: [
        {
          question: "Who are the three women?",
          answer: "The print shows <strong>Tomimoto Toyohina, Naniwaya Kita, and Takashima Hisa</strong>, celebrities in 1790s Edo. Contemporary viewers would have recognized them instantly."
        },
        {
          question: "Who created this print?",
          answer: "<a href=\"/apps/masterpieces/artist/kitagawa-utamaro\"><strong>Kitagawa Utamaro</strong></a> created it around 1793. He was the undisputed master of bijin-ga, portraits of beautiful women."
        },
        {
          question: "What makes Utamaro's style distinctive?",
          answer: "Utamaro focused on <strong>individual personality</strong> rather than generic beauty types. Each face has distinctive features expressing different moods and characters."
        },
        {
          question: "How big is the print?",
          answer: "The print measures approximately <strong>38.5 × 25.5 cm</strong> (15.2 × 10 in). This larger format suited detailed portraiture."
        }
      ]
    },
    {
      slug: 'great-buddha-kamakura',
      description: `<p>The <strong>Great Buddha of Kamakura</strong> (Kamakura Daibutsu) is a monumental bronze statue of Amitabha Buddha, sitting in serene meditation since 1252. Standing 13.35 meters tall and weighing 121 tons, the statue originally sat inside a wooden temple hall that was destroyed by a tsunami in 1498. The Buddha has remained outdoors ever since, weathering elements that have given the bronze its distinctive green patina.</p>
<p>The statue was cast in sections and joined together, a technical achievement requiring enormous skill. <strong>Visitors can enter</strong> the hollow interior through a small door in the back, viewing the casting seams and iron framework that supports the massive head. The serene expression and proportions follow ideals established centuries earlier in continental Buddhist sculpture, adapted for Japanese aesthetics.</p>
<p>The Buddha sits at <a href="/apps/masterpieces/museum/kotoku-in-kamakura"><strong>Kōtoku-in Temple</strong></a>, one of Kamakura's most visited sites.</p>`,
      faqs: [
        {
          question: "Where is the Great Buddha of Kamakura?",
          answer: "The statue sits at <a href=\"/apps/masterpieces/museum/kotoku-in-kamakura\"><strong>Kōtoku-in Temple</strong></a> in Kamakura, about an hour from Tokyo. It has been outdoors since a tsunami destroyed its temple hall in 1498."
        },
        {
          question: "How big is the Kamakura Buddha?",
          answer: "The statue stands <strong>13.35 meters (43.8 feet)</strong> tall and weighs about 121 tons. It's Japan's second-largest bronze Buddha after the one at Nara."
        },
        {
          question: "Can you go inside the Buddha?",
          answer: "Yes. A small door in the back allows <strong>visitors to enter</strong> the hollow interior and view the casting technique and iron framework supporting the head."
        },
        {
          question: "Why is it outdoors?",
          answer: "A <strong>tsunami in 1498</strong> destroyed the temple hall. Rather than rebuild, the statue was left exposed to the elements, which gave it the distinctive green patina."
        }
      ]
    },
    {
      slug: 'great-buddha-nara',
      description: `<p>The <strong>Great Buddha of Nara</strong> (Nara Daibutsu) is the world's largest bronze Buddha, housed in one of the world's largest wooden buildings. Cast in 752 CE, the statue represents Vairocana Buddha, the cosmic Buddha embodying the universe itself. The figure sits nearly 15 meters tall, its construction requiring most of Japan's available bronze and nearly bankrupting the government.</p>
<p>The statue has survived earthquakes, fires, and civil wars that destroyed its hall multiple times. The current figure incorporates repairs from various eras, with <strong>only parts of the original</strong> (including lotus petals) surviving. The bronze required an estimated 8 million pounds of metal and nearly 500 pounds of gold for gilding. Emperor Shōmu dedicated the statue as a spiritual protection for Japan during a time of plague and disaster.</p>
<p>The Buddha sits in the Great Buddha Hall at <a href="/apps/masterpieces/museum/todai-ji-temple"><strong>Tōdai-ji Temple</strong></a>, a UNESCO World Heritage Site.</p>`,
      faqs: [
        {
          question: "Where is the Great Buddha of Nara?",
          answer: "The statue sits in the Great Buddha Hall at <a href=\"/apps/masterpieces/museum/todai-ji-temple\"><strong>Tōdai-ji Temple</strong></a> in Nara. The temple complex is a UNESCO World Heritage Site."
        },
        {
          question: "How big is the Nara Buddha?",
          answer: "The seated figure measures <strong>14.98 meters (49.1 feet)</strong> tall. It's the world's largest bronze Buddha, housed in one of the world's largest wooden buildings."
        },
        {
          question: "How old is the statue?",
          answer: "The original was cast in <strong>752 CE</strong>. Fires and earthquakes have required multiple repairs, so the current figure combines ancient and more recent parts."
        },
        {
          question: "Why was it built?",
          answer: "Emperor Shōmu commissioned it as <strong>spiritual protection for Japan</strong> during plague and disaster. The project nearly bankrupted the government."
        }
      ]
    },
    {
      slug: 'kongo-rikishi-unkei',
      description: `<p>The <strong>Kongō Rikishi</strong> (Nio guardian kings) at Tōdai-ji's Great South Gate are among Japan's most powerful sculptures. Created in 1203 by the master sculptor <a href="/apps/masterpieces/artist/unkei"><strong>Unkei</strong></a> and his workshop, these 8.4-meter wooden guardians protect the temple from evil spirits with fierce expressions and dynamic poses. One figure's mouth is open (pronouncing "ah"), the other closed ("un"), representing the beginning and end of all things.</p>
<p>Unkei led a team that completed both colossal figures in just 69 days, a remarkable achievement demonstrating the organized workshop system of Kamakura-period sculpture. The figures are constructed from <strong>joined wood blocks</strong>, a technique allowing sculptures far larger than any single tree trunk could provide. Their muscular bodies and expressive faces represent the peak of Japanese Buddhist sculpture.</p>
<p>The guardians flank the entrance to <a href="/apps/masterpieces/museum/todai-ji-temple"><strong>Tōdai-ji Temple</strong></a>, inspiring awe in visitors for over 800 years.</p>`,
      faqs: [
        {
          question: "Where are the Nio Guardians?",
          answer: "They stand at the Great South Gate of <a href=\"/apps/masterpieces/museum/todai-ji-temple\"><strong>Tōdai-ji Temple</strong></a> in Nara. The massive figures guard the entrance to the temple complex."
        },
        {
          question: "Who created them?",
          answer: "<a href=\"/apps/masterpieces/artist/unkei\"><strong>Unkei</strong></a> and his workshop created both figures in just 69 days in 1203. This speed demonstrates the organized methods of Kamakura-period workshops."
        },
        {
          question: "How big are the guardians?",
          answer: "Each figure stands <strong>8.4 meters (27.6 feet)</strong> tall. They are among the largest wooden sculptures in Japan."
        },
        {
          question: "What do their expressions mean?",
          answer: "One mouth is open (\"ah\"), one closed (\"un\"). These sounds represent the <strong>beginning and end of all things</strong> in Sanskrit, symbolizing the complete Buddhist cosmos."
        }
      ]
    },
    {
      slug: 'travelers-mountains-streams',
      description: `<p><strong>Travelers Among Mountains and Streams</strong> is one of the greatest achievements of Chinese landscape painting, depicting tiny travelers dwarfed by towering mountains that rise from mist. Painted around 1000 CE by <a href="/apps/masterpieces/artist/fan-kuan"><strong>Fan Kuan</strong></a>, the monumental silk scroll demonstrates the Northern Song dynasty's ideal of capturing nature's grandeur through careful observation and spiritual contemplation.</p>
<p>Fan Kuan spent years living in the mountains, believing that <strong>nature itself was the greatest teacher</strong>. The composition divides into three zones: a foreground with travelers and pack mules, a misty middle ground, and the massive central peak dominating the upper portion. A thin waterfall connects the zones, drawing the eye upward. The artist's signature, hidden among trees at the lower right, was only discovered in the 20th century.</p>
<p>The painting is a National Treasure of Taiwan, displayed at the <a href="/apps/masterpieces/museum/national-palace-museum"><strong>National Palace Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Travelers Among Mountains and Streams?",
          answer: "The painting is at the <a href=\"/apps/masterpieces/museum/national-palace-museum\"><strong>National Palace Museum</strong></a> in Taipei. It's considered one of Taiwan's greatest cultural treasures."
        },
        {
          question: "Who painted it?",
          answer: "<a href=\"/apps/masterpieces/artist/fan-kuan\"><strong>Fan Kuan</strong></a> painted it around 1000 CE. He lived as a recluse in the mountains, believing nature was the best teacher of painting."
        },
        {
          question: "How big is the painting?",
          answer: "The silk scroll measures <strong>206.3 × 103.3 cm</strong> (81.2 × 40.7 in). The large format enhances the mountains' overwhelming presence."
        },
        {
          question: "What makes this painting significant?",
          answer: "It represents the peak of <strong>Northern Song monumental landscape</strong> painting. The composition influenced Chinese landscape art for centuries."
        }
      ]
    },
    {
      slug: 'early-spring-guo-xi',
      description: `<p><strong>Early Spring</strong> depicts a mountain landscape awakening from winter, with bare trees beginning to bud and mist clearing to reveal rocky peaks. Painted in 1072 CE by <a href="/apps/masterpieces/artist/guo-xi"><strong>Guo Xi</strong></a>, this silk scroll represents the philosophical approach to landscape that defined Northern Song dynasty art. The composition creates a journey through the scene, from foreground temples to distant peaks.</p>
<p>Guo Xi served as court painter and wrote influential treatises on landscape painting. He believed painters should capture the <strong>spiritual essence of mountains</strong> rather than merely copying their appearance. The "dragon veins" of rock formations twist organically through the composition, creating visual pathways that guide the eye. Careful attention to seasonal indicators, like early spring foliage, demonstrates the philosophical belief that painting should reflect nature's cycles.</p>
<p>The scroll is a National Treasure at the <a href="/apps/masterpieces/museum/national-palace-museum"><strong>National Palace Museum</strong></a> in Taipei.</p>`,
      faqs: [
        {
          question: "Where is Early Spring?",
          answer: "The painting is at the <a href=\"/apps/masterpieces/museum/national-palace-museum\"><strong>National Palace Museum</strong></a> in Taipei. It's one of the most important surviving Northern Song landscapes."
        },
        {
          question: "Who painted Early Spring?",
          answer: "<a href=\"/apps/masterpieces/artist/guo-xi\"><strong>Guo Xi</strong></a> painted it in 1072 CE while serving as court painter. He also wrote influential treatises on landscape painting theory."
        },
        {
          question: "How big is the painting?",
          answer: "The silk scroll measures <strong>158.3 × 108.1 cm</strong> (62.3 × 42.6 in). The vertical format emphasizes the mountains' towering height."
        },
        {
          question: "What are 'dragon veins' in Chinese painting?",
          answer: "<strong>Dragon veins</strong> refer to the flowing, organic lines connecting elements in a landscape. They guide the viewer's eye through the composition, mimicking qi (energy) flow through nature."
        }
      ]
    },
    {
      slug: 'along-river-qingming-festival',
      description: `<p><strong>Along the River During the Qingming Festival</strong> is one of the most celebrated paintings in Chinese art, a 5.28-meter handscroll depicting life in the Northern Song capital of Kaifeng. Painted around 1120 CE by <a href="/apps/masterpieces/artist/zhang-zeduan"><strong>Zhang Zeduan</strong></a>, the scroll shows over 800 figures engaged in daily activities during the Qingming (Tomb-Sweeping) Festival, from farmers and merchants to scholars and entertainers.</p>
<p>The painting unfolds from rural countryside through busy suburbs to the bustling city center, a journey viewers experience by slowly scrolling through the scene. A <strong>crowded bridge</strong> over the Bian River forms the climactic center, with a boat nearly colliding with the structure. The detailed depictions of architecture, clothing, and commerce provide invaluable historical documentation of Song dynasty urban life.</p>
<p>The original is a treasure of the <a href="/apps/masterpieces/museum/palace-museum-beijing"><strong>Palace Museum</strong></a> in Beijing's Forbidden City.</p>`,
      faqs: [
        {
          question: "Where is this painting?",
          answer: "The original is at the <a href=\"/apps/masterpieces/museum/palace-museum-beijing\"><strong>Palace Museum</strong></a> (Forbidden City) in Beijing. Due to its fragility, it's rarely displayed publicly."
        },
        {
          question: "How long is the scroll?",
          answer: "The handscroll measures <strong>24.8 cm × 528.7 cm</strong> (9.8 inches × 17.3 feet). Viewers unroll it gradually, experiencing the scene as a journey."
        },
        {
          question: "How many figures are depicted?",
          answer: "The scroll contains <strong>over 800 human figures</strong> plus animals, boats, and buildings. Each figure has distinct clothing and activities appropriate to their social status."
        },
        {
          question: "Why is it historically valuable?",
          answer: "The painting provides <strong>detailed documentation</strong> of Song dynasty urban life, including architecture, commerce, entertainment, and fashion that would otherwise be unknown."
        }
      ]
    },
    {
      slug: 'jadeite-cabbage',
      description: `<p>The <strong>Jadeite Cabbage</strong> is a small sculpture carved from a single piece of half-white, half-green jadeite to resemble a head of bok choy with insects on its leaves. Created around 1900, the piece demonstrates how Chinese craftsmen exploited natural color variations in stones to create realistic effects. A locust and katydid perch on the leaves, symbols of fertility.</p>
<p>The cabbage was part of the trousseau of <strong>Consort Jin</strong>, a concubine of the Guangxu Emperor, possibly symbolizing her purity (white) and fertility (green). The sculptor worked with the stone's natural coloration, carving leafy portions from the green areas and the dense heart from the white. Every visitor to Taiwan's National Palace Museum seeks out this tiny treasure, making it one of Asia's most famous artworks despite its modest 18-centimeter size.</p>
<p>The cabbage is a star attraction at the <a href="/apps/masterpieces/museum/national-palace-museum"><strong>National Palace Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Jadeite Cabbage?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/national-palace-museum\"><strong>National Palace Museum</strong></a> in Taipei. It's one of the museum's most popular objects."
        },
        {
          question: "How big is the cabbage?",
          answer: "The sculpture measures only <strong>18.7 × 9.1 cm</strong> (7.4 × 3.6 in). Its small size makes the detailed carving even more impressive."
        },
        {
          question: "What do the insects represent?",
          answer: "The locust and katydid symbolize <strong>fertility and many offspring</strong>. The cabbage may have been a wedding gift expressing hopes for the owner's descendants."
        },
        {
          question: "How was the color effect achieved?",
          answer: "The sculptor used the stone's <strong>natural color variation</strong>. Rather than fighting the two-toned jadeite, the craftsman incorporated both colors into a realistic vegetable."
        }
      ]
    },
    {
      slug: 'meat-shaped-stone',
      description: `<p>The <strong>Meat-Shaped Stone</strong> is a small piece of banded jasper carved and stained to resemble a cube of braised pork belly (dongpo pork). Created during the Qing dynasty around 1700, the sculpture exploits the stone's natural layers to suggest meat, fat, and skin. The surface has been textured and dyed to mimic actual cooking, complete with apparent pores and a glossy "soy-sauce" glaze.</p>
<p>Chinese scholars traditionally appreciated stones for their <strong>natural resemblances</strong> to other objects, a practice called "found beauty." This piece takes the tradition further by enhancing natural features through carving and staining. Paired with the Jadeite Cabbage at the National Palace Museum, the two pieces represent "a complete meal" and are among the museum's most beloved objects.</p>
<p>The stone is displayed at the <a href="/apps/masterpieces/museum/national-palace-museum"><strong>National Palace Museum</strong></a> alongside other imperial treasures.</p>`,
      faqs: [
        {
          question: "Where is the Meat-Shaped Stone?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/national-palace-museum\"><strong>National Palace Museum</strong></a> in Taipei, often displayed near the Jadeite Cabbage."
        },
        {
          question: "Is it natural or carved?",
          answer: "The stone's layers are <strong>natural jasper</strong>, but the surface has been carved to add texture and dyed to enhance the meat-like appearance."
        },
        {
          question: "How big is it?",
          answer: "The stone measures only <strong>5.73 × 6.6 × 5.3 cm</strong> (about 2 inches). Its small size makes the realistic detail remarkable."
        },
        {
          question: "What food does it represent?",
          answer: "It resembles <strong>dongpo pork</strong>, a braised pork belly dish. The layers suggest meat, fat, and caramelized skin with soy sauce glaze."
        }
      ]
    },
    {
      slug: 'mao-gong-ding',
      description: `<p>The <strong>Mao Gong Ding</strong> is a bronze ritual vessel from the late Western Zhou dynasty (around 800 BCE), famous for bearing the longest bronze inscription known from ancient China. The 500-character inscription records a royal ceremony where the Duke of Mao received his charge to govern, documenting political and ceremonial practices from nearly 3,000 years ago.</p>
<p>The vessel's tripod form (ding) was used for cooking sacrificial offerings, with inscriptions recording dedications to ancestors. The <strong>Mao Gong Ding inscription</strong> survived because bronze vessels were buried with their owners for use in the afterlife. Modern scholars use such inscriptions as primary sources for understanding early Chinese history, as bamboo and silk documents from this period have not survived.</p>
<p>The vessel is a supreme treasure of the <a href="/apps/masterpieces/museum/national-palace-museum"><strong>National Palace Museum</strong></a> in Taipei.</p>`,
      faqs: [
        {
          question: "Where is the Mao Gong Ding?",
          answer: "The vessel is at the <a href=\"/apps/masterpieces/museum/national-palace-museum\"><strong>National Palace Museum</strong></a> in Taipei. It's one of the most important bronze artifacts in Chinese history."
        },
        {
          question: "Why is the inscription important?",
          answer: "The <strong>500-character inscription</strong> is the longest on any known Zhou bronze. It provides rare documentation of political ceremonies from nearly 3,000 years ago."
        },
        {
          question: "How old is the Mao Gong Ding?",
          answer: "The vessel dates to approximately <strong>800 BCE</strong>, late in the Western Zhou dynasty. It was made almost a century before Rome was founded."
        },
        {
          question: "How big is the vessel?",
          answer: "The bronze stands <strong>53.8 cm (21.2 inches)</strong> tall. The substantial size suited its ceremonial function for cooking sacrificial offerings."
        }
      ]
    },
    {
      slug: 'lewis-chessmen',
      description: `<p>The <strong>Lewis Chessmen</strong> are a hoard of 12th-century chess pieces carved from walrus ivory and whale tooth, discovered on the Isle of Lewis in Scotland's Outer Hebrides. The 93 surviving pieces include kings, queens, bishops, knights, and warriors, their expressive faces showing a range of emotions from royal dignity to battle-ready ferocity. Most scholars believe they were made in Norway, possibly Trondheim.</p>
<p>The pieces were likely buried for safekeeping by a merchant traveling the <strong>medieval trade routes</strong> between Scandinavia and Ireland. The hoard included pieces from at least four different chess sets, suggesting commercial rather than personal ownership. The warriors biting their shields represent berserkers, Norse fighters who worked themselves into battle frenzy. The queens rest their chins on their hands in poses of contemplation.</p>
<p>The collection is divided between the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> (82 pieces) and the National Museum of Scotland (11 pieces).</p>`,
      faqs: [
        {
          question: "Where are the Lewis Chessmen?",
          answer: "The collection is split between the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London (82 pieces) and the National Museum of Scotland in Edinburgh (11 pieces)."
        },
        {
          question: "Who made the Lewis Chessmen?",
          answer: "Most scholars believe they were carved in <strong>Norway</strong>, possibly Trondheim, in the 12th century. The style matches Scandinavian artistic traditions."
        },
        {
          question: "What are they made from?",
          answer: "Most pieces are carved from <strong>walrus ivory</strong>, with a few from whale tooth. These materials were valuable trade goods in medieval Scandinavia."
        },
        {
          question: "Why were they buried?",
          answer: "A merchant probably <strong>buried them for safekeeping</strong> while traveling trade routes and never returned. The pieces from multiple sets suggest commercial inventory."
        }
      ]
    },
    {
      slug: 'wind-thunder-god-screens',
      description: `<p>The <strong>Wind God and Thunder God Screens</strong> depict Raijin (thunder god) and Fūjin (wind god) against luminous gold leaf backgrounds. Painted around 1640 by Tawaraya Sōtatsu, founder of the Rinpa school, these folding screens transform Japanese nature spirits into dynamic artistic compositions. The gods' muscular green and white bodies contrast dramatically with the <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>brilliant gold</strong></a> ground.</p>
<p>Sōtatsu broke from Chinese-influenced painting traditions to create a distinctly Japanese decorative style. The <strong>bold silhouettes</strong> and flat color areas would influence Japanese design for centuries. Raijin beats his circle of drums to create thunder while Fūjin carries a bag of winds. Their placement at opposite ends of the paired screens creates dynamic tension across the composition.</p>
<p>The screens are a National Treasure of Japan, displayed at <a href="/apps/masterpieces/museum/kyoto-national-museum"><strong>Kyoto National Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where are the Wind and Thunder God Screens?",
          answer: "The screens are at <a href=\"/apps/masterpieces/museum/kyoto-national-museum\"><strong>Kyoto National Museum</strong></a>. They are designated a National Treasure of Japan."
        },
        {
          question: "Who painted them?",
          answer: "<strong>Tawaraya Sōtatsu</strong> painted them around 1640. He founded the Rinpa school, which emphasized bold decorative designs on gold backgrounds."
        },
        {
          question: "How big are the screens?",
          answer: "Each two-panel screen measures <strong>169.8 × 154.5 cm</strong>. The substantial size suited their function as decorative room dividers."
        },
        {
          question: "Who are Raijin and Fūjin?",
          answer: "<strong>Raijin</strong> (thunder god) beats drums to create storms, while <strong>Fūjin</strong> (wind god) carries a bag of winds. These Japanese nature spirits appear throughout Japanese art."
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
