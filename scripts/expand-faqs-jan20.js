const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'john-james-audubon',
    faqs: [
      {
        question: "What is John James Audubon famous for?",
        answer: "Audubon created <em>The Birds of America</em> (1827-1838), a monumental work containing 435 life-size prints of North American <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>birds</strong></a>. He painted each species from freshly killed specimens wired into lifelike poses, a technique he pioneered. The work documented several species now extinct, including the passenger pigeon and Carolina parakeet."
      },
      {
        question: "Where can I see Audubon's original paintings?",
        answer: "The <strong>New-York Historical Society</strong> holds all 435 original watercolors that Audubon painted for The Birds of America. The <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington and London's Natural History Museum also display his work. Complete printed sets appear in major institutions worldwide, though fewer than 120 survive intact."
      },
      {
        question: "How many copies of 'The Birds of America' exist?",
        answer: "Fewer than <strong>120 complete copies</strong> of the double-elephant folio edition survive today. The enormous size (over three feet tall) and lavish hand-coloring made production expensive. A complete set sold for <strong>$11.5 million at auction in 2010</strong>, and individual prints regularly fetch tens of thousands of dollars."
      },
      {
        question: "What scientific work did Audubon do?",
        answer: "He conducted the <strong>first known bird-banding experiment</strong> in North America around 1804, tying silver thread to Eastern Phoebes' legs to track migration. His meticulous field observations documented behavior, habitat, and diet for hundreds of species. The <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a> studies he produced remain scientifically valuable today."
      },
      {
        question: "What honors did Audubon receive?",
        answer: "The <strong>Royal Society of London</strong> elected him a Fellow in 1830, making him only the second American so honored after Benjamin Franklin. King George IV personally subscribed to support his publication. The National Audubon Society, founded in 1905, bears his name, though his legacy as a slaveholder has prompted recent reassessment."
      }
    ]
  },
  {
    slug: 'lovis-corinth',
    faqs: [
      {
        question: "What art movement was Lovis Corinth part of?",
        answer: "Corinth bridged German <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, evolving dramatically over his career. He joined the triumvirate of German Impressionism alongside Max Liebermann and Max Slevogt, and later served as president of the Berlin Secession from 1915 until his death. His late work embraced expressionistic intensity."
      },
      {
        question: "What are Corinth's most famous paintings?",
        answer: "His <strong>annual birthday self-portraits</strong> document his aging and artistic evolution with unflinching honesty. The <strong>Walchensee landscape series</strong>, painted at his Bavarian retreat from 1918 onward, shows his late expressionistic style at its most vibrant. His painting of himself as blinded Samson after his 1911 stroke is particularly powerful."
      },
      {
        question: "Where can I see Lovis Corinth's paintings?",
        answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, the <a href=\"/apps/masterpieces/museum/tate\"><strong>Tate</strong></a> in London, and the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington. German museums, particularly Munich's Neue Pinakothek, hold major collections of his portraits and landscapes."
      },
      {
        question: "How did Corinth's stroke affect his art?",
        answer: "A <strong>stroke in December 1911</strong> left him partially paralyzed with a permanent tremor in his right hand. Rather than diminishing his output, the years following were his most prolific: nearly 500 paintings, over 800 prints, and hundreds of drawings. The forced looseness gave his late work extraordinary emotional power."
      },
      {
        question: "Who was Charlotte Berend?",
        answer: "<strong>Charlotte Berend-Corinth</strong> was his first painting student who became his wife in 1903 when she was 23 and he was 44. She modeled frequently for his <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and nudes, and later became a successful painter in her own right, documenting their life together."
      }
    ]
  },
  {
    slug: 'martin-johnson-heade',
    faqs: [
      {
        question: "What art movement was Martin Johnson Heade part of?",
        answer: "Heade was a master of <a href=\"/apps/masterpieces/movement/luminism\"><strong>Luminism</strong></a>, an American approach emphasizing subtle atmospheric light and contemplative stillness. His friendships with <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> artists shaped his early career, but he developed a distinctly personal vision focusing on horizontal compositions with glowing, meditative skies."
      },
      {
        question: "What are Heade's most famous works?",
        answer: "His <strong>salt marsh landscapes</strong> of the New England coast, featuring haystacks under dramatic skies, are his signature works. <em>Thunderstorm on Narragansett Bay</em> (1868) captures an approaching storm with luminous intensity. His later <strong>hummingbird and orchid</strong> paintings, numbering over forty, combine tropical color with precise botanical detail."
      },
      {
        question: "Where can I see Heade's paintings?",
        answer: "The <a href=\"/apps/masterpieces/museum/museum-of-fine-arts-boston\"><strong>Museum of Fine Arts, Boston</strong></a> holds about 30 works, the largest collection anywhere. The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> and <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> also own major pieces. His <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> still lifes from Florida appear in collections nationwide."
      },
      {
        question: "Did Heade travel to paint hummingbirds?",
        answer: "Yes, he made <strong>three trips to Brazil</strong> between 1863 and 1870, captivated by tropical hummingbirds and orchids. Emperor Dom Pedro II was so impressed he made Heade a Knight of the Order of the Rose. Heade planned a book called <em>The Gems of Brazil</em> with chromolithograph illustrations, but it was never published due to financial difficulties."
      },
      {
        question: "Why was Heade forgotten?",
        answer: "Heade was <strong>nearly forgotten</strong> for the first half of the 20th century despite a successful career. His reputation revived dramatically during the 1940s when scholars rediscovered his luminous salt marshes. He's now considered among the most important American landscape painters of his generation, with works commanding high prices at auction."
      }
    ]
  },
  {
    slug: 'abraham-bloemaert',
    faqs: [
      {
        question: "What art movements was Abraham Bloemaert associated with?",
        answer: "Bloemaert worked in multiple styles across his six-decade career: early <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a> from his Paris training, then a classical phase, and finally <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> with Caravaggesque lighting in his later years. His adaptability kept him at the forefront of Dutch painting from the 1590s through the 1640s."
      },
      {
        question: "Where can I see Abraham Bloemaert's paintings?",
        answer: "His work is displayed at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The Centraal Museum in Utrecht, his home city, holds an important collection reflecting his dominance of local artistic life for over fifty years."
      },
      {
        question: "Who were Abraham Bloemaert's famous students?",
        answer: "He trained most of the <strong>Utrecht Caravaggisti</strong>, the Dutch followers of Caravaggio who spread dramatic lighting across Northern Europe. His students included Gerrit van Honthorst, Hendrick ter Brugghen, Jan van Bijlert, and Jan Both. His four sons, Hendrick, Frederick, Cornelis, and Adriaan, also became accomplished painters or engravers under his instruction."
      },
      {
        question: "How many works did Abraham Bloemaert create?",
        answer: "Bloemaert was extraordinarily prolific, creating approximately <strong>200 paintings, 1,700 drawings, and 600 prints</strong> over his career. His drawing manual became widely influential across Europe. Many paintings were commissioned by Utrecht's clandestine Catholic churches, as the city maintained a strong Catholic presence despite Protestant rule."
      },
      {
        question: "Why is Abraham Bloemaert important to Dutch art history?",
        answer: "He co-founded the <strong>Utrecht Guild of Saint Luke</strong> in 1611 alongside Joachim Wtewael and Paulus Moreelse, becoming its dean in 1618. His teaching workshop was among the most influential in the Netherlands, shaping generations of Dutch painters and spreading Italian influences throughout the region."
      }
    ]
  },
  {
    slug: 'asher-brown-durand',
    faqs: [
      {
        question: "What art movement was Asher Brown Durand part of?",
        answer: "Durand was a leading figure of the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, America's first major artistic movement celebrating the national landscape. After Thomas Cole's death in 1848, Durand became the acknowledged dean of American landscape painters, championing detailed naturalism and painting directly from nature outdoors."
      },
      {
        question: "Where can I see Asher Brown Durand's paintings?",
        answer: "His work is displayed at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, and the Smithsonian American Art Museum. <em>Kindred Spirits</em> now hangs at Crystal Bridges Museum of American Art in Arkansas after its 2005 sale."
      },
      {
        question: "What is Asher Brown Durand's most famous painting?",
        answer: "<em>Kindred Spirits</em> (1849) depicts fellow artist Thomas Cole and poet William Cullen Bryant standing together in the Catskill Mountains, painted as a memorial tribute after Cole's death. It <strong>sold for $35 million in 2005</strong>, a record for Hudson River School paintings, when the New York Public Library controversially sold it to Alice Walton."
      },
      {
        question: "What did Asher Brown Durand do before painting?",
        answer: "He was America's premier <strong>engraver</strong> before turning to painting in his forties. His 1823 engraving of the Declaration of Independence (after John Trumbull's painting) established his reputation as the finest engraver in the United States. His banknote designs even appeared on America's first postage stamps in 1847."
      },
      {
        question: "How long did Asher Brown Durand live?",
        answer: "Durand lived to be <strong>ninety years old</strong> (1796-1886), working actively until retirement in 1869. He served as president of the National Academy of Design for sixteen years, from 1845 to 1861. His essays in <em>The Crayon</em> magazine articulated the spiritual philosophy underlying Hudson River School <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>."
      }
    ]
  },
  {
    slug: 'carlos-schwabe',
    faqs: [
      {
        question: "What art movement was Carlos Schwabe part of?",
        answer: "Schwabe was a leading <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter and illustrator whose work bridged Symbolism and Art Nouveau. He was strongly influenced by the Pre-Raphaelites and Gustave Moreau. His 1892 poster for the first Salon de la Rose+Croix became an iconic image of the idealist art movement."
      },
      {
        question: "Where can I see Carlos Schwabe's paintings?",
        answer: "Major works are at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/van-gogh-museum\"><strong>Van Gogh Museum</strong></a> in Amsterdam, and the Musée d'Art et d'Histoire in Geneva. The Musées royaux des Beaux-Arts in Brussels and Museu Nacional de Belas Artes in Rio de Janeiro also hold significant works."
      },
      {
        question: "What books did Carlos Schwabe illustrate?",
        answer: "He illustrated Émile Zola's novel <em>Le rêve</em> (1892), Baudelaire's notorious poetry collection <strong><em>Les Fleurs du mal</em></strong> (1900), and Maeterlinck's <em>Pelléas et Mélisande</em>. Scholar Philippe Julian called his illustrations \"masterpieces of Art Nouveau,\" praising his border designs as superior to those of Alphonse Mucha."
      },
      {
        question: "What was Carlos Schwabe's nationality?",
        answer: "He was born in <strong>German Holstein</strong> in 1866 but grew up in Switzerland, gaining Swiss citizenship in 1888. He moved to Paris as a young man and spent most of his career in France, first working as a wallpaper designer before establishing himself in Symbolist circles. He died in Avon, France in 1926."
      },
      {
        question: "What subjects did Carlos Schwabe paint?",
        answer: "His paintings featured <strong>allegorical and mystical themes</strong>: ethereal <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a>, death imagery, angels, the Virgin Mary, and mythological scenes. His work from the 1890s is characterized by lush floral ornamentation rendered with detailed precision, combining idealist vision with social concern."
      }
    ]
  },
  {
    slug: 'herbert-james-draper',
    faqs: [
      {
        question: "What subjects did Herbert James Draper paint?",
        answer: "Draper specialized in <strong>classical mythology</strong>, particularly sensuous scenes from Greek legend. He painted sirens, sea nymphs, and figures like Icarus, Ulysses, and Clytie with technically polished execution. His marine mythological subjects, featuring luminous <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> settings, earned comparisons to Frederic Leighton's work."
      },
      {
        question: "Where can I see Herbert James Draper's paintings?",
        answer: "His masterpiece <em>The Lament for Icarus</em> is at <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Britain</strong></a> in London. Other works hang in galleries in Liverpool, Leeds, and Manchester. Drapers' Hall in London, the livery company headquarters, also displays his paintings. Bradford's Cartwright Hall holds <em>The Gates of Dawn</em>."
      },
      {
        question: "What art movement was Herbert James Draper part of?",
        answer: "Draper worked in the <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> tradition of the Victorian and Edwardian eras, characterized by classical subjects and technically refined execution. Though trained at the Royal Academy and Paris's Académie Julian, he incorporated subtle Impressionistic light effects without abandoning form."
      },
      {
        question: "What was Herbert James Draper's most acclaimed painting?",
        answer: "<em>The Lament for Icarus</em> (1898) shows the dead youth surrounded by mourning sea nymphs, his wings based on bird-of-paradise patterns. It won the <strong>gold medal at the 1900 Paris Exposition</strong> and was purchased through the Chantrey Bequest. The painting may tribute Leighton, who died in 1896, or mourn Draper's own father."
      },
      {
        question: "Was Herbert James Draper a Royal Academician?",
        answer: "No, despite being proposed <strong>four times</strong> (1898, 1903, 1905, 1920), Draper was never elected to full Royal Academy membership. He exhibited at the Academy annually from 1887 until his death in 1920. This rejection reflects changing tastes as modernism gained ground against Academic painting in early 20th-century Britain."
      }
    ]
  },
  {
    slug: 'jmw-turner',
    faqs: [
      {
        question: "Where can I see J.M.W. Turner's paintings?",
        answer: "Most of Turner's work is at <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Britain</strong></a> in London's Clore Gallery, a wing built specifically to house his bequest of over 300 oils and 19,000 works on paper. The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> holds key works including <em>The Fighting Temeraire</em>, voted Britain's greatest painting in a 2005 BBC poll."
      },
      {
        question: "What art movement was J.M.W. Turner part of?",
        answer: "Turner was the greatest British <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter, known as \"the painter of light\" for his revolutionary treatment of atmosphere and color. His late works, with their almost abstract luminosity, anticipated <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> by decades. Monet and Pissarro both studied his paintings during visits to London."
      },
      {
        question: "What is J.M.W. Turner's most famous painting?",
        answer: "<em>The Fighting Temeraire</em> (1839) was voted <strong>Britain's greatest painting</strong> in a 2005 BBC public poll. It shows the veteran warship that fought at Trafalgar being towed to be scrapped, a meditation on heroic passing. Turner called it his \"darling,\" and it appears on the current British £20 note alongside his self-portrait."
      },
      {
        question: "How many works did J.M.W. Turner create?",
        answer: "Turner left behind over <strong>550 oil paintings, 2,000 watercolors, and 30,000 works on paper</strong>. He bequeathed nearly everything to the British nation, though decades of legal battles delayed the transfer. His <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>seascapes</strong></a> and dramatic skies influenced generations of artists."
      },
      {
        question: "What is the Turner Prize?",
        answer: "The <strong>Turner Prize</strong> is Britain's most prestigious contemporary art award, created by Tate Britain in 1984 and named in Turner's honor. Worth £25,000, it has become one of Europe's most high-profile art awards. Winners have included Damien Hirst, Anish Kapoor, and Grayson Perry."
      }
    ]
  },
  {
    slug: 'james-whistler',
    faqs: [
      {
        question: "What is James Whistler's most famous painting?",
        answer: "<em>Arrangement in Grey and Black No. 1</em> (1871), universally known as <strong><em>Whistler's Mother</em></strong>, hangs at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The austere <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> of his mother Anna became an American cultural icon, though Whistler himself cared more about its formal qualities than its sentimental appeal."
      },
      {
        question: "Where can I see James Whistler's paintings?",
        answer: "Key works are at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris and <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Britain</strong></a> in London. The Freer Gallery of Art in Washington, D.C. holds the largest collection, including his famous Peacock Room, an entire decorated interior he designed for a London patron."
      },
      {
        question: "What art movement was James Whistler part of?",
        answer: "Whistler influenced <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and was central to the Aesthetic Movement, championing \"art for art's sake.\" He rejected narrative painting in favor of pure visual harmony, treating paint like music. His famous 1878 lawsuit against critic John Ruskin defended artistic freedom over moral purpose."
      },
      {
        question: "Why did Whistler use musical titles?",
        answer: "He gave paintings titles like \"Nocturne,\" \"Symphony,\" and \"Arrangement\" to emphasize <strong>visual harmony over narrative content</strong>, treating painting as a form of visual music. This radical approach, borrowed from his musician friends, helped establish the idea that art needed no justification beyond beauty itself."
      },
      {
        question: "What was Whistler's butterfly signature?",
        answer: "Whistler signed his works with a <strong>stylized butterfly with a stinging tail</strong>, combining artistic delicacy with his combative public personality. He was notorious for sharp wit and public feuds, publishing a book called <em>The Gentle Art of Making Enemies</em>. The butterfly evolved over his career, becoming increasingly abstract."
      }
    ]
  },
  {
    slug: 'orazio-gentileschi',
    faqs: [
      {
        question: "What art movement was Orazio Gentileschi part of?",
        answer: "Gentileschi was a leading <strong>Caravaggisti</strong>, among the earliest and most talented followers of Caravaggio who spread <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> dramatic lighting across Europe. Unlike Caravaggio's violent contrasts, Gentileschi developed a softer, more luminous interpretation of tenebrism that influenced painters from Rome to London."
      },
      {
        question: "Where can I see Orazio Gentileschi's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. His ceiling paintings for the Queen's House at Greenwich, created with his daughter Artemisia, were moved to Marlborough House in London."
      },
      {
        question: "Who was Orazio Gentileschi's famous daughter?",
        answer: "<strong>Artemisia Gentileschi</strong> (1593-1656), trained in his studio, became one of the greatest Baroque painters and achieved a European reputation rare for <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> of her time. Her powerful depictions of biblical heroines like Judith are now celebrated as proto-feminist art. She joined her father in England in 1638."
      },
      {
        question: "Did Orazio Gentileschi know Caravaggio personally?",
        answer: "Yes, they were <strong>friends in Rome</strong> during the early 1600s. In 1603, they were both sued for libel alongside two other artists by the rival painter Giovanni Baglione, with Orazio testifying that Caravaggio was \"the most outstanding painter in Rome.\" Their friendship influenced Orazio's shift toward dramatic lighting."
      },
      {
        question: "Where did Orazio Gentileschi work as court painter?",
        answer: "He became <strong>court painter to Charles I of England</strong> in 1626, invited by the art-loving monarch and his wife Henrietta Maria. He decorated the ceiling of the Queen's House at Greenwich, collaborating with Artemisia. He remained in England until his death in 1639, his style becoming more decorative for royal taste."
      }
    ]
  },
  {
    slug: 'pablo-picasso',
    faqs: [
      {
        question: "What art movements did Pablo Picasso help create?",
        answer: "Picasso co-founded <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> with Georges Braque around 1907, shattering traditional representation by showing objects from multiple viewpoints. He also worked in <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a> and <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, constantly reinventing his style. Their collaboration ended when Braque enlisted in World War I."
      },
      {
        question: "Where can I see Pablo Picasso's paintings?",
        answer: "Major collections are at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, the <strong>Musée Picasso</strong> in Paris, and the <a href=\"/apps/masterpieces/museum/reina-sofia\"><strong>Museo Reina Sofía</strong></a> in Madrid, which holds <em>Guernica</em>. Barcelona's Museu Picasso focuses on his early work. His ceramics are displayed at the Madoura pottery in Vallauris, France."
      },
      {
        question: "What is Pablo Picasso's most famous painting?",
        answer: "<em>Guernica</em> (1937) depicts the Nazi bombing of a Basque town during the Spanish Civil War through fragmented, anguished figures. It's considered the <strong>20th century's most powerful anti-war painting</strong>. Picasso refused to let it return to Spain until democracy was restored; it arrived at the Reina Sofía in 1992, years after Franco's death."
      },
      {
        question: "How many works did Pablo Picasso create?",
        answer: "Picasso produced over <strong>20,000 works</strong> across painting, sculpture, printmaking, ceramics, and theater design over his seven-decade career. His <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> output includes roughly 1,900 paintings, 1,200 sculptures, 2,800 ceramics, and 12,000 drawings, making him one of history's most prolific artists."
      },
      {
        question: "What were Picasso's artistic periods?",
        answer: "His major periods include the melancholic <strong>Blue Period</strong> (1901-04) following a friend's suicide, the warmer <strong>Rose Period</strong> (1904-06) inspired by circus performers, his revolutionary <strong>Cubist years</strong> (1907-14) with Braque, and later Surrealist, neoclassical, and expressionistic phases. Each reinvention shocked the art world."
      }
    ]
  },
  {
    slug: 'samuel-palmer',
    faqs: [
      {
        question: "What art movement was Samuel Palmer part of?",
        answer: "Palmer was a British <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painter whose visionary landscapes anticipated aspects of Symbolism. He belonged to \"the Ancients,\" a circle of young artists inspired by William Blake. His work combines intense spirituality with pastoral subjects, treating the English countryside as paradise glimpsed."
      },
      {
        question: "Where can I see Samuel Palmer's paintings?",
        answer: "Major collections are at <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Britain</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and the Ashmolean Museum in Oxford. The Fitzwilliam Museum in Cambridge and the Yale Center for British Art also hold significant works. His Shoreham period pieces are particularly sought after."
      },
      {
        question: "What was Samuel Palmer's 'Shoreham period'?",
        answer: "Between 1826 and 1835, Palmer lived in Shoreham, Kent, in a cottage he called \"Rat Abbey.\" There he produced his most <strong>intensely visionary landscapes</strong>: glowing harvest moons, pastoral scenes, and visions of rural paradise. These works, \"brilliant in hue\" and \"intimate in mood,\" are now considered his greatest achievements."
      },
      {
        question: "Who influenced Samuel Palmer's art?",
        answer: "<strong>William Blake</strong> was the defining influence. Palmer met him in 1824 through artist John Linnell, and Blake's mystical vision transformed Palmer's approach to <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> painting. Blake's emphasis on imagination over observation gave Palmer permission to paint paradise rather than mere scenery."
      },
      {
        question: "Why was Samuel Palmer called 'the English Van Gogh'?",
        answer: "Art historian Kenneth Clark gave him this title for his <strong>intense emotional vision</strong> of nature and his rediscovery by modern artists after decades of obscurity. Like Van Gogh, Palmer was barely recognized in his lifetime but later inspired generations, including Graham Sutherland, John and Paul Nash, and Eric Ravilious."
      }
    ]
  },
  {
    slug: 'thomas-lawrence',
    faqs: [
      {
        question: "What was Thomas Lawrence known for painting?",
        answer: "Lawrence was Britain's leading <strong><a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\">portrait</a> painter</strong> of the Regency era, renowned for capturing likenesses with a polished, flattering style that made subjects glow with vitality. He painted royalty, aristocrats, military heroes, and society beauties, embodying the romantic glamour of the period from 1790 to 1830."
      },
      {
        question: "Where can I see Thomas Lawrence's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a>, <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Britain</strong></a>, and the Royal Collection. The Waterloo Chamber at Windsor Castle holds his famous series of allied leaders who defeated Napoleon, commissioned by the Prince Regent. The National Portrait Gallery also owns significant works."
      },
      {
        question: "Was Thomas Lawrence a child prodigy?",
        answer: "Yes, he was <strong>drawing portrait likenesses at age six</strong> and entertaining guests at his father's coaching inn in Devizes. By ten he was supporting his family with pastel portraits of visitors. Actor David Garrick, a frequent guest, couldn't decide whether the boy's future lay in acting or drawing."
      },
      {
        question: "What honors did Thomas Lawrence receive?",
        answer: "He was <strong>knighted in 1815</strong> and became President of the Royal Academy in 1820, a position he held until death. At 25, he was the youngest person ever elected a Royal Academician. In 1792, he succeeded Joshua Reynolds as the King's official Painter-in-Ordinary, just three years after arriving in London."
      },
      {
        question: "Where is Thomas Lawrence buried?",
        answer: "He received a public funeral and was buried in <strong>St Paul's Cathedral</strong> in London in 1830, with Prime Minister Robert Peel among the pallbearers. Despite his success and royal patronage, Lawrence died deeply in debt due to his extravagant lifestyle and inability to manage money."
      }
    ]
  },
  {
    slug: 'wilhelm-leibl',
    faqs: [
      {
        question: "What art movement was Wilhelm Leibl associated with?",
        answer: "Leibl was Germany's leading <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> painter, inspired by Gustave Courbet's direct approach. He led the Leibl-Kreis (Leibl Circle), a group of German realists who rejected Academic idealization. His peasant subjects are painted with unflinching honesty, earning comparison to Hans Holbein's clarity."
      },
      {
        question: "Where can I see Wilhelm Leibl's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> and Neue Pinakothek in Munich. The <strong>Kunsthalle Hamburg</strong> holds his masterpiece <em>Three Women in Church</em>. Other German museums in Cologne, Frankfurt, and Berlin display his portraits and genre scenes."
      },
      {
        question: "What is Wilhelm Leibl's most famous painting?",
        answer: "<em>Three Women in Church</em> (1878-1882), which took <strong>nearly four years to complete</strong>, shows three generations of peasant women at prayer in Bavarian costume. Its precise realism recalls Holbein's clarity. The painting established Leibl as one of Germany's greatest Realist painters and remains his most celebrated work."
      },
      {
        question: "Who influenced Wilhelm Leibl's art?",
        answer: "<strong>Gustave Courbet</strong> was the defining influence. When Courbet visited Munich in 1869, he was so impressed by Leibl's portrait of Frau Gedon that he invited the young German to Paris. Leibl spent nine months there before the Franco-Prussian War forced his return. Courbet's alla prima technique transformed Leibl's approach."
      },
      {
        question: "What was Leibl's painting technique?",
        answer: "Leibl painted <strong>without preliminary drawing</strong>, working directly with color in the manner Courbet demonstrated. This approach paralleled aspects of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> despite his Realist subject matter. He worked slowly and meticulously, often spending years on single canvases to achieve his remarkably detailed surfaces."
      }
    ]
  },
  {
    slug: 'alfred-thompson-bricher',
    faqs: [
      {
        question: "What art movement was Alfred Thompson Bricher part of?",
        answer: "Bricher was associated with <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Luminism</strong></a>, an offshoot of the Hudson River School known for horizontal compositions, invisible brushwork, and serene atmospheres. His long formats with flat horizons and glowing light epitomize this contemplative American approach to <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> painting."
      },
      {
        question: "Where can I see Alfred Thompson Bricher's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the Smithsonian American Art Museum, and the Museum of Fine Arts, Boston. The Thyssen-Bornemisza Museum in Madrid and the National Gallery of Art in Washington also hold examples of his serene <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> scenes."
      },
      {
        question: "What subjects did Alfred Thompson Bricher paint?",
        answer: "Bricher specialized in <strong>coastal and maritime scenes</strong>: New England beaches, rocky shores, breaking waves, and the effects of light on water. He favored the coasts of Massachusetts, Rhode Island, and Maine, particularly Grand Manan Island. His later works focused almost exclusively on Atlantic seascapes."
      },
      {
        question: "Was Alfred Thompson Bricher self-taught?",
        answer: "Largely <strong>self-taught</strong>, he learned by studying Hudson River School painters and sketching at Mount Desert, Maine, where he met marine artists Charles Temple Dix and William Stanley Haseltine. He may have taken classes at Boston's Lowell Institute, and he studied briefly with Albert Bierstadt and William Morris Hunt."
      },
      {
        question: "Why is Bricher called 'the last Luminist'?",
        answer: "He continued painting in the Luminist style <strong>long after it fell from fashion</strong> around 1880. While other artists embraced Impressionism, Bricher maintained his commitment to precise detail and atmospheric stillness until his death in 1908. Art historical scholarship in the 1970s rehabilitated his reputation as a key American landscapist."
      }
    ]
  },
  {
    slug: 'andy-warhol',
    faqs: [
      {
        question: "What art movement did Andy Warhol lead?",
        answer: "Warhol was the leading figure of <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>, which drew subject matter from advertising, consumer products, and celebrity culture. He blurred boundaries between fine art and commercial illustration, transforming soup cans, Brillo boxes, and movie stars into high art through silkscreen repetition."
      },
      {
        question: "Where can I see Andy Warhol's paintings?",
        answer: "Major collections are at the <strong>Andy Warhol Museum</strong> in Pittsburgh (the largest museum devoted to a single artist), <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a>, and the <a href=\"/apps/masterpieces/museum/whitney\"><strong>Whitney Museum</strong></a>. His <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> silkscreens appear in museums worldwide."
      },
      {
        question: "What is Andy Warhol's most famous work?",
        answer: "His <em>Campbell's Soup Cans</em> (1962) and <em>Marilyn Diptych</em> (1962) are among the most <strong>recognized images of 20th-century art</strong>. The soup cans, comprising 32 canvases representing each variety, launched his fine art career. The Marilyn silkscreens, begun weeks after her death, explored celebrity and mortality."
      },
      {
        question: "What was Andy Warhol's Factory?",
        answer: "The Factory was Warhol's <strong>legendary New York studio</strong>, first at 231 East 47th Street, famous as a gathering place for artists, musicians, celebrities, socialites, and the avant-garde throughout the 1960s. The silver-foil-covered space became a cultural laboratory where Warhol produced art, films, and managed the Velvet Underground."
      },
      {
        question: "What record did Warhol's work set at auction?",
        answer: "<em>Shot Sage Blue Marilyn</em> sold for <strong>$195 million in May 2022</strong>, the highest price ever paid at auction for an American artwork and the second-highest for any artwork. The painting was one of five \"Shot Marilyns,\" named after a visitor fired a gun at them in Warhol's studio in 1964."
      }
    ]
  },
  {
    slug: 'christian-krohg',
    faqs: [
      {
        question: "What art movement was Christian Krohg associated with?",
        answer: "Krohg was Norway's leading <a href=\"/apps/masterpieces/movement/realism\"><strong>Naturalist/Realist</strong></a> painter, influenced by Émile Zola's literary naturalism and French social realism. He was also part of the Skagen Painters colony in Denmark, depicting fishermen and seaside life. His politically engaged art tackled social issues like prostitution."
      },
      {
        question: "Where can I see Christian Krohg's paintings?",
        answer: "His work is at the <strong>National Museum of Art</strong> in Oslo, which holds his major paintings including the controversial <em>Albertine</em> series. <strong>Skagens Museum</strong> in Denmark displays his works depicting the fishing community. The Gothenburg Museum of Art in Sweden also owns significant pieces."
      },
      {
        question: "What was Christian Krohg's most controversial work?",
        answer: "<em>Albertine at the Police Doctor's Waiting Room</em> depicts prostitutes awaiting mandatory medical inspection. His accompanying novel <em>Albertine</em> (1886) was <strong>banned for obscenity</strong> by Norwegian authorities. Krohg claimed the story was based on a true account from one of his models, and the scandal helped galvanize anti-prostitution reform."
      },
      {
        question: "Did Christian Krohg influence other artists?",
        answer: "Yes, he influenced <strong>Anna and Michael Ancher</strong> at Skagen and provided crucial early support to <strong>Edvard Munch</strong>, recognizing his talent before anyone else. As director of the Norwegian Academy of Arts from 1909 to 1925, he shaped the next generation of Scandinavian painters."
      },
      {
        question: "What honors did Christian Krohg receive?",
        answer: "He was made Knight of the <strong>French Legion of Honour</strong> in 1889, the Belgian Order of Leopold in 1894, and received Norway's Order of St. Olav in 1900. His social realist paintings depicting <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people</strong></a> from all walks of life earned him international recognition."
      }
    ]
  },
  {
    slug: 'emanuel-de-witte',
    faqs: [
      {
        question: "What was Emanuel de Witte known for painting?",
        answer: "De Witte specialized in <strong>Dutch church interiors</strong>, capturing Protestant churches' soaring spaces, ethereal light effects, and whitewashed architecture. Unlike Pieter Saenredam's precise architectural views, de Witte focused on atmosphere and spiritual mood, often combining elements from different buildings imaginatively."
      },
      {
        question: "Where can I see Emanuel de Witte's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>. The Mauritshuis in The Hague and the Thyssen-Bornemisza Museum in Madrid also hold fine examples of his church interiors."
      },
      {
        question: "What art movement was Emanuel de Witte part of?",
        answer: "De Witte was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painter, representing the final phase of architectural painting in the Netherlands. He began painting in Delft alongside Vermeer before moving to Amsterdam in 1652, where he spent the rest of his troubled career."
      },
      {
        question: "What was unique about De Witte's church paintings?",
        answer: "Houbraken wrote that <strong>\"no one was his equal\"</strong> in church interiors, praising his orderly architecture, innovative lighting, and well-formed figures. Unlike topographical artists, de Witte treated churches as spiritual spaces, using dramatic light contrasts to create contemplative atmospheres that emphasize the buildings' sacred function."
      },
      {
        question: "Did Emanuel de Witte paint other subjects?",
        answer: "Yes, besides churches, he painted <strong>fish markets and domestic scenes</strong>, including <em>The Fish Market</em> and interiors with <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> at virginals. He began as a painter of biblical and mythological subjects before specializing in architecture. His career ended tragically when he drowned in an Amsterdam canal in 1692."
      }
    ]
  },
  {
    slug: 'evelyn-de-morgan',
    faqs: [
      {
        question: "What art movement was Evelyn De Morgan associated with?",
        answer: "De Morgan was associated with the later <a href=\"/apps/masterpieces/movement/pre-raphaelitism\"><strong>Pre-Raphaelite</strong></a> movement, as well as Aestheticism and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>. She studied Italian Renaissance masters, particularly Botticelli, whose influence is visible in her flowing figures. She developed friendships with Dante Gabriel Rossetti and William Holman Hunt."
      },
      {
        question: "Where can I see Evelyn De Morgan's paintings?",
        answer: "The <strong>De Morgan Foundation</strong> holds 56 of her oil paintings, displayed at various exhibitions. Works occasionally appear at the <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate</strong></a> and in touring exhibitions. The Russell-Cotes Art Gallery in Bournemouth and the Birmingham Museum and Art Gallery also own significant pieces."
      },
      {
        question: "What subjects did Evelyn De Morgan paint?",
        answer: "She painted <strong>allegorical and mythological subjects</strong> featuring female figures, with themes of transformation, spiritualism, and feminist symbolism. Her <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> are powerful figures representing abstract concepts like Love, Life, and Death. Her later works addressed war from a pacifist perspective."
      },
      {
        question: "Was Evelyn De Morgan a suffragette?",
        answer: "Yes, she was <strong>active in the women's suffrage movement</strong>, signing the 1889 Declaration in Favor of Women's Suffrage alongside other prominent figures. Her paintings frequently addressed women's oppression through allegory. She also practiced spiritualism with her husband and championed pacifism during World War I."
      },
      {
        question: "Why did Evelyn De Morgan drop her first name?",
        answer: "She dropped \"Mary\" because it was clearly feminine. She wanted her work <strong>judged on merit, not gender</strong>, using the ambiguous \"Evelyn\" to avoid prejudice. She was among the first women to study at the Slade School of Art and consistently fought against gendered expectations throughout her career."
      }
    ]
  },
  {
    slug: 'george-hendrik-breitner',
    faqs: [
      {
        question: "What was George Hendrik Breitner known for painting?",
        answer: "Breitner was Amsterdam's painter, calling himself \"le peintre du peuple\" (the people's painter). He captured <strong>street life, harbors, construction sites, and working-class subjects</strong> in a realistic, atmospheric style. His rainy <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>urban scenes</strong></a> are so characteristic that Amsterdammers call gray, wet weather \"Breitnerweer\" (Breitner weather)."
      },
      {
        question: "Where can I see George Hendrik Breitner's paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, which holds 119 of his sketchbooks. The Amsterdam Museum has an important collection, and the Kröller-Müller Museum in Otterlo displays major works. His paintings document Amsterdam's transformation around 1900."
      },
      {
        question: "What art movement was George Hendrik Breitner part of?",
        answer: "Breitner was a leading <strong>Amsterdam Impressionist</strong>, painting en plein air with attention to atmospheric effects and urban life. His style combined French <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>'s loose brushwork with the social realism of Zola's naturalist novels, capturing the energy and grit of modern city life."
      },
      {
        question: "Did George Hendrik Breitner know Vincent van Gogh?",
        answer: "Yes, in 1882 they <strong>sketched together</strong> in The Hague's working-class districts, introduced by Vincent's brother Theo. Breitner likely introduced Van Gogh to Zola's novels and social realism. However, years later Breitner dismissed Van Gogh's paintings as \"art for Eskimos,\" preferring his own urban realism."
      },
      {
        question: "Did Breitner use photography?",
        answer: "Yes, from around 1890 he used <strong>photography extensively</strong> to document street life and atmospheric effects, producing approximately 2,500 photographs as painting references. A large collection of his prints and negatives was discovered in 1996, revealing his pioneering integration of photography into Impressionist painting practice."
      }
    ]
  },
  {
    slug: 'george-inness-jr',
    faqs: [
      {
        question: "What was George Inness Jr. known for painting?",
        answer: "Inness Jr. specialized in <strong>landscapes with animals</strong>, particularly cattle, horses, and oxen, in the manner of Barbizon animalier Constant Troyon. He deliberately chose animal subjects to distinguish himself from his famous father's mystical Tonalist <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. His later work focused on Florida scenes."
      },
      {
        question: "Where can I see George Inness Jr.'s paintings?",
        answer: "His work is at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the Museum of Fine Arts, Boston, and the Montclair Art Museum in New Jersey. The Unitarian Universalist Church in Tarpon Springs, Florida contains eleven of his works, including murals painted directly on sanctuary walls."
      },
      {
        question: "Was George Inness Jr. related to George Inness?",
        answer: "Yes, he was the <strong>son of the celebrated American Tonalist</strong> George Inness (1825-1894). They shared a studio in Montclair, New Jersey, and George Jr. later published his father's biography and compiled an edition of his letters, becoming a major source of information about the elder Inness."
      },
      {
        question: "Why did George Inness Jr. destroy 100 paintings?",
        answer: "After his father's death in 1894, he claimed to have had a vision prompting him to <strong>destroy works too similar to his father's style</strong>, asserting his artistic independence. This dramatic gesture reflected his lifelong struggle to establish his own identity separate from his celebrated father's shadow."
      },
      {
        question: "Where did George Inness Jr. paint in Florida?",
        answer: "He painted extensively in <strong>Tarpon Springs, Florida</strong>, where he established a 27-room house with a painting studio and artists' cottages. He hosted prominent artists including Charles Curran and Winfield Scott Clime. Florida inducted him into its Artists Hall of Fame for his depictions of the state's unspoiled <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature</strong></a>."
      }
    ]
  },
  {
    slug: 'jusepe-de-ribera',
    faqs: [
      {
        question: "What art movement was Jusepe de Ribera part of?",
        answer: "Ribera was a leading <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter and the most successful follower of Caravaggio, known for his dramatic use of <strong>tenebrism</strong>. He mastered violent contrasts of light and dark where figures emerge from deep shadow. Along with Velázquez, Zurbarán, and Murillo, he's considered a master of Spanish Baroque painting."
      },
      {
        question: "Where can I see Jusepe de Ribera's paintings?",
        answer: "The <a href=\"/apps/masterpieces/museum/museo-del-prado\"><strong>Prado</strong></a> in Madrid holds 56 paintings, the world's largest collection. Works also hang at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a>, and Naples Cathedral. The Museo di Capodimonte in Naples displays masterpieces from his decades in that city."
      },
      {
        question: "What subjects did Jusepe de Ribera paint?",
        answer: "Nearly half his work depicts <strong>saints, philosophers, and beggars</strong> with raw visual intensity. His models were ordinary people from Naples' streets: fishermen, dockworkers, and elderly figures with wrinkled skin. He's also known for graphically realistic martyrdom scenes and mythological subjects, often showing brutal violence with unsettling naturalism."
      },
      {
        question: "Why did Ribera move to Naples?",
        answer: "He left Rome in 1616, reportedly to escape creditors. Naples was <strong>Spanish territory</strong>, making it comfortable for a Spaniard abroad, and offered wealthy patrons including the Spanish viceroys. He stayed the rest of his life, becoming so identified with the city that Italians called him \"Lo Spagnoletto\" (the little Spaniard)."
      },
      {
        question: "What technique is Ribera known for?",
        answer: "Ribera mastered <strong>tenebrism</strong>, a dramatic style using violent contrasts of light and dark derived from Caravaggio. Figures emerge from nearly black backgrounds into sharp illumination. In the 1630s his style softened toward more diffused lighting, as seen in <em>The Clubfoot</em> (1642), showing <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people</strong></a> with humanity."
      },
      {
        question: "Was Jusepe de Ribera a printmaker?",
        answer: "Yes, his <strong>etchings rank among the finest of the Baroque era</strong>. He was one of few 17th-century Spanish artists to produce numerous drawings and prints, which spread his influence across Europe. His prints of martyrdoms and philosophers demonstrate the same dramatic lighting as his paintings."
      }
    ]
  },
  {
    slug: 'nikolai-ge',
    faqs: [
      {
        question: "What art movement was Nikolai Ge part of?",
        answer: "Ge was a founding figure of the <a href=\"/apps/masterpieces/movement/realism\"><strong>Peredvizhniki</strong></a> (Wanderers) movement, which rejected Academic rigidity in favor of socially engaged realist painting. He helped organize the Society of Travelling Art Exhibitions in 1870, bringing art to provincial Russian cities rather than keeping it in elite St. Petersburg institutions."
      },
      {
        question: "Where can I see Nikolai Ge's paintings?",
        answer: "His major works are at the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow, which received 116 works donated by his son after the artist's death. The <a href=\"/apps/masterpieces/museum/state-russian-museum\"><strong>State Russian Museum</strong></a> in Saint Petersburg also holds significant pieces from his career."
      },
      {
        question: "What is Nikolai Ge's most famous painting?",
        answer: "<em>The Last Supper</em> (1863) made him famous and earned him an Academy professorship. It shows <strong>Christ and Judas in psychological confrontation</strong> rather than traditional arrangement, using Herzen's photograph as a model for Christ. The painting's dramatic lighting and emotional intensity shocked contemporary viewers."
      },
      {
        question: "What was Nikolai Ge's connection to Leo Tolstoy?",
        answer: "They met in 1882 and became close friends. Ge <strong>adopted Tolstoy's Christian anarchist teachings</strong>, which influenced his late <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious</strong></a> paintings and caused conflict with his family. Tolstoy passionately defended Ge's controversial works and advocated for a museum devoted to his art."
      },
      {
        question: "Were Nikolai Ge's paintings censored?",
        answer: "Yes, his late religious works faced <strong>Imperial censorship</strong> for their unconventional depictions of Christ. <em>What is Truth?</em> was expelled from exhibition by the St. Petersburg governor, and <em>The Crucifixion</em> was personally banned by Tsar Alexander III. Tolstoy helped secure private purchases of the suppressed works."
      }
    ]
  },
  {
    slug: 'paolo-veronese',
    faqs: [
      {
        question: "What art movement was Paolo Veronese part of?",
        answer: "Veronese was a master of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Venetian Renaissance</strong></a>, known as one of the \"great trio\" with Titian and Tintoretto who dominated 16th-century Venice. He was celebrated as a supreme colorist and for his illusionistic decorations in both fresco and oil, creating vast narrative spectacles."
      },
      {
        question: "Where can I see Paolo Veronese's paintings?",
        answer: "<em>The Wedding at Cana</em> is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, facing the <em>Mona Lisa</em>. Venice's Gallerie dell'Accademia holds <em>Feast in the House of Levi</em>. Other works are at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London and the <a href=\"/apps/masterpieces/museum/met\"><strong>Met</strong></a> in New York."
      },
      {
        question: "What is Veronese's largest painting?",
        answer: "<em>The Wedding at Cana</em> (1562-63) covers nearly <strong>70 square meters</strong> (22 by 32 feet), making it the largest painting in the Louvre's collection. It depicts Christ's first miracle with over 130 figures at a <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colorful</strong></a> Venetian banquet. Veronese painted himself playing violoncello alongside Titian, Tintoretto, and Bassano."
      },
      {
        question: "Did Veronese have trouble with the Inquisition?",
        answer: "Yes, in 1573 the Venetian Inquisition questioned him about his <em>Last Supper</em>, objecting to \"buffoons, drunken Germans, dwarfs, and other absurdities.\" Veronese's solution: rather than repaint, he <strong>simply renamed it</strong> <em>Feast in the House of Levi</em>, changing its religious context to satisfy the tribunal."
      },
      {
        question: "What was Veronese's painting style?",
        answer: "He created <strong>enormous narrative paintings</strong> filled with rich color, magnificent architecture, and crowded pageantry. Biblical and mythological scenes became sumptuous Venetian banquets with contemporary costumes. He famously said \"we painters take the same liberties as poets and madmen\" when defending his artistic choices."
      }
    ]
  },
  {
    slug: 'umberto-boccioni',
    faqs: [
      {
        question: "What art movement was Umberto Boccioni part of?",
        answer: "Boccioni was the leading artist and chief theorist of <a href=\"/apps/masterpieces/movement/futurism\"><strong>Italian Futurism</strong></a>. He signed the Futurist Manifesto in 1910 and wrote the Technical Manifesto of Futurist Sculpture in 1912, shaping the movement's visual language of dynamism, speed, and modern energy that rejected Italy's classical past."
      },
      {
        question: "Where can I see Umberto Boccioni's sculptures?",
        answer: "<em>Unique Forms of Continuity in Space</em> has bronze casts at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Met</strong></a>, <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a>, and Milan's Museo del Novecento. The original plaster is at São Paulo's Museu de Arte Contemporânea. The sculpture appears on Italian 20-cent euro coins."
      },
      {
        question: "What is Boccioni's most famous sculpture?",
        answer: "<em>Unique Forms of Continuity in Space</em> (1913) shows a striding figure merging with the space around it, its form seemingly deformed by wind and speed. It appears on the <strong>Italian 20-cent euro coin</strong>. Though Boccioni dismissed traditional sculpture, the work echoes the ancient <em>Winged Victory of Samothrace</em>."
      },
      {
        question: "How did Umberto Boccioni die?",
        answer: "He was <strong>thrown from a horse</strong> during cavalry training near Verona in August 1916 and died the next day at age thirty-three. The Futurists had welcomed World War I, believing modern warfare would shatter Italy's obsession with the classical past. Boccioni's death effectively ended Futurism as a vital movement."
      },
      {
        question: "What subjects did Boccioni paint?",
        answer: "He painted <strong>modern urban life</strong>, capturing the dynamism, speed, and chaos of cities. <em>The City Rises</em> (1910) shows workers and horses in violent motion. His <em>States of Mind</em> triptych depicts train station farewells through <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract</strong></a> fragmentation, embodying Futurist ideas about modern experience."
      }
    ]
  }
];

async function main() {
  console.log(`Updating FAQs for ${updates.length} artists...\\n`);

  for (const update of updates) {
    try {
      const result = await prisma.artist.update({
        where: { slug: update.slug },
        data: {
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });

      // Count words in all FAQs
      const totalWords = update.faqs.reduce((sum, faq) => {
        const plainText = faq.answer.replace(/<[^>]*>/g, '');
        return sum + plainText.split(/\\s+/).length;
      }, 0);
      const avgWords = Math.round(totalWords / update.faqs.length);

      console.log(`✓ ${update.slug} - ${update.faqs.length} FAQs (avg ${avgWords} words/answer)`);
    } catch (error) {
      console.error(`✗ ${update.slug} - Error: ${error.message}`);
    }
  }

  console.log('\\nDone! Run "node get-artists.js" to update checklist.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
