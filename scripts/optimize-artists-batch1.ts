import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Batch 1: Artists 1-10
const artistUpdates: Record<string, { bioFull: string; faqs: { question: string; answer: string }[] }> = {
  "suzanne-valadon": {
    bioFull: `<p><strong>Suzanne Valadon</strong> (1865–1938) broke every rule that 19th-century Paris had for women. Born to an unmarried laundress, she worked as a circus acrobat until a fall ended that career at sixteen. She then became an artists' model in Montmartre, posing for <a href="/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a>, <a href="/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a>, and Edgar Degas. Toulouse-Lautrec nicknamed her "Suzanne" after the biblical story, noting her preference for older artists.</p>

<p>While modeling, Valadon taught herself to draw by watching the painters work. Degas became her mentor, buying her drawings and teaching her soft-ground etching. In 1894, she became the first woman admitted to the Société Nationale des Beaux-Arts. Her subjects were direct and unsparing: robust female nudes painted without the coy poses men typically demanded, honest portraits, and bold still lifes. She worked in the <a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> style with vivid colors and strong outlines.</p>

<p>Her personal life was as unconventional as her art. At eighteen she gave birth to Maurice Utrillo, who became a famous painter himself. She married a banker, divorced him, then scandalized society by marrying her son's twenty-three-year-old friend. Picasso, Derain, and Braque attended her funeral in 1938. She left behind 500 paintings and 300 works on paper, though art history long overlooked her in favor of the men she modeled for. Today her work hangs in the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Suzanne Valadon part of?", answer: `Valadon worked in the <a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> style, using bold colors and strong black outlines. She was associated with the Montmartre avant-garde scene alongside Toulouse-Lautrec and Degas.` },
      { question: "Where can I see Suzanne Valadon's paintings?", answer: `Major collections of her work are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, and the Centre Pompidou.` },
      { question: "Who was Suzanne Valadon's famous son?", answer: `Her son <strong>Maurice Utrillo</strong> (1883–1955) became one of France's most celebrated painters, known for his Montmartre street scenes. Valadon taught him to paint as therapy for his alcoholism.` },
      { question: "Why is Suzanne Valadon historically significant?", answer: `She was the <strong>first woman admitted</strong> to the Société Nationale des Beaux-Arts in 1894. She also pioneered honest depictions of the female nude from a woman's perspective, without idealization.` },
      { question: "Which famous artists did Suzanne Valadon model for?", answer: `Valadon posed for <a href="/artist/pierre-auguste-renoir"><strong>Renoir</strong></a>, <a href="/artist/henri-toulouse-lautrec"><strong>Toulouse-Lautrec</strong></a>, and Puvis de Chavannes. Edgar Degas became her mentor after seeing her drawings.` }
    ]
  },

  "abraham-bloemaert": {
    bioFull: `<p><strong>Abraham Bloemaert</strong> (1566–1651) shaped Dutch painting for nearly a century. Born in Gorinchem, he trained in Utrecht and Paris before returning to establish one of the most influential workshops in the Netherlands. He co-founded the Utrecht Guild of Saint Luke in 1611 and trained most of the Utrecht Caravaggisti, including Gerrit van Honthorst and Hendrick ter Brugghen.</p>

<p>Bloemaert's style evolved dramatically over his long career. He began as a leading Dutch <a href="/movement/mannerism"><strong>Mannerist</strong></a>, creating elongated figures and complex compositions. Around 1610, he shifted toward classicism. In the 1620s, he absorbed influences from Caravaggio's dramatic lighting, which his students had brought back from Rome. His subjects ranged from religious scenes to pastoral landscapes with ruined cottages.</p>

<p>He was remarkably prolific, producing roughly 200 paintings, 1,700 drawings, and 600 prints. Peter Paul Rubens visited his studio, as did Elizabeth Stuart, the Winter Queen. Many commissions came from Utrecht's clandestine Catholic churches during the Protestant era. He married twice and fathered fourteen children with his second wife. Four of his sons became respected painters or engravers themselves. Bloemaert died in Utrecht at eighty-four, having worked continuously for over six decades. His paintings can be found at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movements was Abraham Bloemaert associated with?", answer: `Bloemaert worked in multiple styles: early <a href="/movement/mannerism"><strong>Mannerism</strong></a>, then classicism, and finally <a href="/movement/baroque"><strong>Baroque</strong></a> with Caravaggesque lighting influences in his later years.` },
      { question: "Where can I see Abraham Bloemaert's paintings?", answer: `His work is displayed at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.` },
      { question: "Who were Abraham Bloemaert's famous students?", answer: `He trained most of the <strong>Utrecht Caravaggisti</strong>, including Gerrit van Honthorst, Hendrick ter Brugghen, and Jan Both. His four sons also became painters under his instruction.` },
      { question: "How many works did Abraham Bloemaert create?", answer: `Bloemaert was extremely prolific, creating approximately <strong>200 paintings, 1,700 drawings, and 600 prints</strong> over his six-decade career.` },
      { question: "Why is Abraham Bloemaert important to Dutch art history?", answer: `He co-founded the <strong>Utrecht Guild of Saint Luke</strong> in 1611 and ran one of the most influential teaching workshops in the Netherlands, shaping generations of Dutch painters.` }
    ]
  },

  "asher-brown-durand": {
    bioFull: `<p><strong>Asher Brown Durand</strong> (1796–1886) began as America's finest engraver and became the dean of American landscape painting. Born in New Jersey to a watchmaker, he apprenticed with engraver Peter Maverick and gained national fame in 1823 for his engraving of John Trumbull's <em>Declaration of Independence</em>. His banknote engravings were used for America's first postage stamps in 1847.</p>

<p>Around 1830, patron Luman Reed encouraged Durand to switch from engraving to oil painting. In 1837, he sketched with Thomas Cole in the Adirondacks and soon devoted himself entirely to landscapes. He became a central figure in the <a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a>, painting the Catskills, Adirondacks, and White Mountains with careful attention to trees, rocks, and foliage. He was among the earliest Americans to paint directly from nature outdoors.</p>

<p>His most famous work, <em>Kindred Spirits</em> (1849), shows Cole and poet William Cullen Bryant in a Catskills gorge. Painted as a memorial after Cole's death, it sold for $35 million in 2005. Durand helped organize the National Academy of Design in 1825 and served as its president from 1845 to 1861. He formally retired in 1869 and died in his hometown at ninety. His work hangs in the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, and the Smithsonian.</p>`,
    faqs: [
      { question: "What art movement was Asher Brown Durand part of?", answer: `Durand was a leading figure of the <a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a>, America's first major artistic movement, which celebrated the American landscape with detailed naturalism.` },
      { question: "Where can I see Asher Brown Durand's paintings?", answer: `His work is displayed at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York, the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, and the Smithsonian American Art Museum.` },
      { question: "What is Asher Brown Durand's most famous painting?", answer: `<em>Kindred Spirits</em> (1849), depicting Thomas Cole and William Cullen Bryant in the Catskills. It <strong>sold for $35 million in 2005</strong>, a record for Hudson River School paintings.` },
      { question: "What did Asher Brown Durand do before painting?", answer: `He was America's premier <strong>engraver</strong>, famous for his 1823 engraving of the Declaration of Independence. His banknote designs appeared on America's first postage stamps.` },
      { question: "How long did Asher Brown Durand live?", answer: `Durand lived to be <strong>ninety years old</strong> (1796–1886), working actively until his retirement in 1869. He served as president of the National Academy of Design for sixteen years.` }
    ]
  },

  "atkinson-grimshaw": {
    bioFull: `<p><strong>John Atkinson Grimshaw</strong> (1836–1893) became Victorian England's poet of moonlight. Born in Leeds to strict Baptist parents who considered painting foolish, he worked as a railway clerk until age twenty-four. In 1861, he quit to become a painter, teaching himself by studying Pre-Raphaelite techniques and using photographs and camera obscura to achieve his distinctive precision.</p>

<p>His breakthrough came with <em>Whitby Harbour by Moonlight</em> (1867), establishing his signature style: nocturnal urban scenes with wet cobblestones reflecting gaslight, bare trees silhouetted against twilight skies, and figures with umbrellas moving through atmospheric streets. He painted the docks of London, Liverpool, Glasgow, and Hull, capturing industrial England with unexpected poetry. His <a href="/movement/romanticism"><strong>Romantic</strong></a> sensibility transformed ordinary streets into places of mystery.</p>

<p>Success came in the 1870s. He bought Knostrop Old Hall and rented a second home in Scarborough. In the 1880s, he maintained a London studio near James McNeill Whistler, who remarked: "I considered myself the inventor of Nocturnes until I saw Grimmy's moonlit pictures." Four of his children became painters. Grimshaw died at fifty-seven and was largely forgotten until a 20th-century revival. His work now appears at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a> and the Leeds Art Gallery, and his moonlit scenes remain among the most beloved images of Victorian Britain.</p>`,
    faqs: [
      { question: "What was Atkinson Grimshaw known for painting?", answer: `Grimshaw specialized in <strong>nocturnal urban scenes</strong>: moonlit streets with wet cobblestones, gaslight reflections, and atmospheric effects. He painted the docks of London, Liverpool, and Leeds.` },
      { question: "Where can I see Atkinson Grimshaw's paintings?", answer: `His work is displayed at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a> in London, Leeds Art Gallery, and the Guildhall Art Gallery. Private collections hold many of his moonlight scenes.` },
      { question: "What art movement was Atkinson Grimshaw part of?", answer: `Grimshaw worked in a <a href="/movement/romanticism"><strong>Romantic</strong></a> style influenced by the Pre-Raphaelites. His atmospheric nocturnes anticipated aspects of Impressionism.` },
      { question: "What did James Whistler say about Atkinson Grimshaw?", answer: `After visiting Grimshaw's studio, Whistler said: <strong>"I considered myself the inventor of Nocturnes until I saw Grimmy's moonlit pictures."</strong>` },
      { question: "Was Atkinson Grimshaw self-taught?", answer: `Yes, Grimshaw was <strong>entirely self-taught</strong>. He used photographs and camera obscura to achieve precise perspectives, compensating for his lack of formal training.` }
    ]
  },

  "benozzo-gozzoli": {
    bioFull: `<p><strong>Benozzo Gozzoli</strong> (c. 1421–1497) created some of the most joyful frescoes of the Italian <a href="/movement/renaissance"><strong>Renaissance</strong></a>. Born Benozzo di Lese in Florence, the son of a tailor, he trained as both a goldsmith and painter. He assisted Lorenzo Ghiberti on the famous Gates of Paradise for the Florence Baptistery between 1444 and 1447, learning precision and narrative skill.</p>

<p>He then worked with Fra Angelico, helping decorate the cells of San Marco convent and accompanying him to Rome and Orvieto. From these masters, Gozzoli absorbed bright colors and the art of telling stories through images. His breakthrough came between 1459 and 1461 when Piero de' Medici commissioned the frescoes for the Magi Chapel in Palazzo Medici-Riccardi. The <em>Journey of the Magi</em> transformed a small chapel into a glittering procession, incorporating portraits of Medici family members, their allies, and Florentine notables. Gozzoli painted himself into the crowd, identifiable by his red hat inscribed "Opus Benotii."</p>

<p>He later created an enormous fresco cycle of Old Testament scenes in the Campo Santo at Pisa, covering over 10,000 square feet. Sadly, much of this was destroyed in World War II. Gozzoli died in Pistoia in 1497, possibly of plague. The Pisans had already honored him with a tomb in the Campo Santo. Today, his Magi Chapel frescoes remain a highlight of any visit to Florence, preserved in the <strong>Palazzo Medici Riccardi</strong>.</p>`,
    faqs: [
      { question: "What is Benozzo Gozzoli's most famous work?", answer: `The <em>Journey of the Magi</em> frescoes (1459–1461) in the <strong>Magi Chapel of Palazzo Medici-Riccardi</strong> in Florence. The glittering procession includes portraits of the Medici family and Florentine nobility.` },
      { question: "Where can I see Benozzo Gozzoli's art?", answer: `His masterpiece is in the <strong>Magi Chapel at Palazzo Medici Riccardi</strong> in Florence. Additional works are in the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> and San Gimignano's Collegiate Church.` },
      { question: "What art movement was Benozzo Gozzoli part of?", answer: `Gozzoli was an Early <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter from Florence. He combined the bright colors of Fra Angelico with detailed narrative scenes.` },
      { question: "Who did Benozzo Gozzoli train with?", answer: `He assisted <strong>Lorenzo Ghiberti</strong> on the Gates of Paradise and worked with <strong>Fra Angelico</strong> on fresco projects in Florence, Rome, and Orvieto.` },
      { question: "Did Benozzo Gozzoli include himself in his paintings?", answer: `Yes, Gozzoli painted his <strong>self-portrait</strong> into the Magi Chapel frescoes. He's recognizable by his red hat inscribed "Opus Benotii" (Work of Benozzo).` }
    ]
  },

  "carlos-schwabe": {
    bioFull: `<p><strong>Carlos Schwabe</strong> (1866–1926) brought dreamlike visions to the <a href="/movement/symbolism"><strong>Symbolist</strong></a> movement. Born Émile Martin Charles Schwabe in German Holstein, his family moved to Switzerland when he was four. He studied at Geneva's École des Arts Industriels before settling in Paris, where he worked initially as a wallpaper designer while joining the city's circle of Symbolist artists and writers.</p>

<p>In 1892, Schwabe designed the iconic poster for the first Salon de la Rose + Croix, organized by the eccentric Joséphin Péladan. This launched his career as one of the most important Symbolist book illustrators. He created images for Émile Zola's <em>Le rêve</em>, Baudelaire's <em>Les Fleurs du mal</em>, and Maeterlinck's <em>Pelléas et Mélisande</em>. His paintings explored allegorical and mystical themes, often featuring ethereal women, death imagery, and religious subjects rendered with Pre-Raphaelite precision.</p>

<p>Schwabe exhibited at the Salon d'Automne and won the Gold Medal at the 1900 Exposition Universelle. His distinctive style bridged Symbolism and Art Nouveau. After 1908, his output diminished. He retired to Avon in the Fontainebleau Forest, producing academic portraits and landscapes until his death in 1926. Today, his most important works belong to the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, the Musée d'Art et d'Histoire in Geneva, and the <a href="/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      { question: "What art movement was Carlos Schwabe part of?", answer: `Schwabe was a leading <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter and illustrator. His work bridged Symbolism and Art Nouveau, influenced by the Pre-Raphaelites and Gustave Moreau.` },
      { question: "Where can I see Carlos Schwabe's paintings?", answer: `Major works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, the <a href="/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam, and the Musée d'Art et d'Histoire in Geneva.` },
      { question: "What books did Carlos Schwabe illustrate?", answer: `He illustrated Zola's <em>Le rêve</em> (1892), Baudelaire's <strong><em>Les Fleurs du mal</em></strong> (1900), and Maeterlinck's <em>Pelléas et Mélisande</em> among other Symbolist texts.` },
      { question: "What was Carlos Schwabe's nationality?", answer: `He was born in German Holstein but grew up in <strong>Switzerland</strong>, gaining Swiss citizenship in 1888. He spent most of his career in France.` },
      { question: "What subjects did Carlos Schwabe paint?", answer: `His paintings featured <strong>allegorical and mystical themes</strong>: ethereal women, death imagery, religious subjects, and mythological scenes, all rendered with detailed precision.` }
    ]
  },

  "domenico-ghirlandaio": {
    bioFull: `<p><strong>Domenico Ghirlandaio</strong> (1449–1494) was the finest fresco painter in late 15th-century Florence. Born Domenico di Tommaso Bigordi, he got his nickname from his father, who created the metallic garland-like headdresses fashionable among Florentine women. He trained under Alesso Baldovinetti and ran a large workshop with his brothers Davide and Benedetto.</p>

<p>Ghirlandaio excelled at weaving contemporary portraits into religious narratives. His early commission for the Chapel of Santa Fina in San Gimignano (1477–78) established his reputation. In 1481, Pope Sixtus IV summoned him to Rome to paint the <em>Calling of the Apostles</em> in the Sistine Chapel. His greatest work came between 1485 and 1490: the frescoes in Santa Maria Novella depicting scenes from the lives of the Virgin and John the Baptist, commissioned by banker Giovanni Tornabuoni.</p>

<p>These frescoes are essentially portraits of <a href="/movement/renaissance"><strong>Renaissance</strong></a> Florence disguised as sacred history, filled with recognizable faces in contemporary dress. Among his workshop assistants was a thirteen-year-old Michelangelo, whose contract from 1487 still survives. Ghirlandaio died of "pestilential fever" in January 1494, just forty-four years old, and was buried in Santa Maria Novella. His frescoes remain there today, alongside major works in the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What was Domenico Ghirlandaio best known for?", answer: `Ghirlandaio was renowned for his <strong>detailed narrative frescoes</strong> that incorporated portraits of contemporary Florentines in biblical scenes. His Santa Maria Novella cycle is a portrait gallery of Renaissance Florence.` },
      { question: "Where can I see Domenico Ghirlandaio's frescoes?", answer: `His greatest frescoes are in <strong>Santa Maria Novella</strong> in Florence. He also painted in the Sistine Chapel at the Vatican, and panels are in the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>.` },
      { question: "Was Michelangelo a student of Ghirlandaio?", answer: `Yes, <strong>Michelangelo</strong> apprenticed in Ghirlandaio's workshop at age thirteen in 1487. The original contract documenting his employment still survives.` },
      { question: "What art movement was Domenico Ghirlandaio part of?", answer: `Ghirlandaio was an Early <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter of the Florentine school, working just before the High Renaissance masters.` },
      { question: "Why was he called Ghirlandaio?", answer: `The nickname means <strong>"garland-maker"</strong> and came from his father, who was famous for creating the metallic garland headdresses worn by Florentine women.` }
    ]
  },

  "gilbert-stuart": {
    bioFull: `<p><strong>Gilbert Stuart</strong> (1755–1828) painted the face of America's founding. Born in Rhode Island, the son of a Scottish snuff-mill operator, he showed talent early and studied under Scottish painter Cosmo Alexander. In 1775, he sailed to London and spent six years in Benjamin West's studio before opening his own practice. Despite success painting English aristocrats, debt forced him to flee to Dublin in 1787.</p>

<p>Stuart returned to America in 1793 with one goal: to paint George Washington. He expected to make a fortune on images of the hero. He succeeded beyond imagination. His 1796 "Athenaeum" portrait, showing the left side of Washington's face, became the definitive image of the first president. Stuart deliberately left it unfinished so he could keep making copies. He produced over one hundred versions for eager American and European patrons.</p>

<p>That image now appears on the one-dollar bill and has for over a century. Stuart painted the first six presidents, plus Kings George III and George IV of England and Louis XVI of France. His technique was distinctive: no preliminary drawing, painting directly with color, achieving remarkable lifelike presence. He produced portraits of about 1,000 people. A stroke in 1824 partially paralyzed him, but he continued working until his death in Boston in 1828. Deeply in debt, he was buried in an unmarked grave. His work hangs in the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What is Gilbert Stuart's most famous painting?", answer: `The <strong>"Athenaeum" portrait of George Washington</strong> (1796), which appears on the U.S. one-dollar bill. Stuart made over 100 copies of this unfinished work.` },
      { question: "Where can I see Gilbert Stuart's paintings?", answer: `Major collections are at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the Museum of Fine Arts, Boston.` },
      { question: "How many presidents did Gilbert Stuart paint?", answer: `Stuart painted the <strong>first six U.S. presidents</strong>: Washington, Adams, Jefferson, Madison, Monroe, and John Quincy Adams. He also painted European royalty.` },
      { question: "Why did Gilbert Stuart leave his Washington portrait unfinished?", answer: `Stuart <strong>deliberately left the Athenaeum portrait unfinished</strong> so he could keep making paid copies. He eventually produced over 100 versions for eager patrons.` },
      { question: "What was unique about Gilbert Stuart's painting technique?", answer: `Stuart painted <strong>without preliminary drawing</strong>, working directly with color from the start. This gave his portraits remarkable lifelike presence and freshness.` }
    ]
  },

  "herbert-james-draper": {
    bioFull: `<p><strong>Herbert James Draper</strong> (1863–1920) brought classical mythology to vivid life in late Victorian England. Born in London, the son of a fruit merchant, he studied at St John's Wood Art School and the Royal Academy Schools. In 1889, he won the Royal Academy Gold Medal and Travelling Studentship, which took him to Rome and the Académie Julian in Paris, where he absorbed European academic traditions and classical antiquity.</p>

<p>Draper specialized in mythological subjects featuring sensuous figures from Greek legend. His most productive period began in 1894 when he focused on themes like Ulysses and the Sirens, Icarus, and various sea nymphs. <em>The Lament for Icarus</em> (1898) won gold at the 1900 Paris Exposition and was purchased for <a href="/museum/tate-modern"><strong>Tate Gallery</strong></a>. He also decorated the ceiling of Drapers' Hall in the City of London.</p>

<p>Working in the <a href="/movement/academic-art"><strong>Academic Art</strong></a> tradition, Draper exhibited regularly at the Royal Academy from 1887 until his death. Yet he was repeatedly passed over for full membership, proposed in 1898, 1903, 1905, and 1920 without success. As public taste shifted away from mythological scenes, he turned increasingly to portraits. He died of arteriosclerosis at fifty-six in his Abbey Road home. By then his work had fallen from favor, and <em>The Times</em> didn't even publish an obituary. Interest revived in the late 20th century.</p>`,
    faqs: [
      { question: "What subjects did Herbert James Draper paint?", answer: `Draper specialized in <strong>classical mythology</strong>, particularly sensuous scenes from Greek legend featuring sirens, nymphs, and figures like Icarus and Ulysses.` },
      { question: "Where can I see Herbert James Draper's paintings?", answer: `His masterpiece <em>The Lament for Icarus</em> is at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>. Other works are in galleries in Liverpool and Manchester, and at Drapers' Hall in London.` },
      { question: "What art movement was Herbert James Draper part of?", answer: `Draper worked in the <a href="/movement/academic-art"><strong>Academic Art</strong></a> tradition of the Victorian and Edwardian eras, characterized by classical subjects and technically polished execution.` },
      { question: "What was Herbert James Draper's most acclaimed painting?", answer: `<em>The Lament for Icarus</em> (1898) won the <strong>gold medal at the 1900 Paris Exposition</strong> and was purchased by the Tate Gallery.` },
      { question: "Was Herbert James Draper a Royal Academician?", answer: `No, despite being proposed <strong>four times</strong> (1898, 1903, 1905, 1920), Draper was never elected to full membership. He exhibited at the Academy from 1887 until his death.` }
    ]
  },

  "ivan-shishkin": {
    bioFull: `<p><strong>Ivan Shishkin</strong> (1832–1898) was Russia's "tsar of the forest." Born in Yelabuga to a grain merchant family, he left gymnasium early and spent four years drawing before entering the Moscow School of Painting in 1852. He continued at the Imperial Academy in St. Petersburg, graduating with highest honors and a gold medal that funded European study in Munich and Zurich.</p>

<p>Shishkin became the founding member of the Peredvizhniki, the group of Russian realists who rejected the Imperial Academy's rigid approach and brought art to the people through traveling exhibitions. He was appointed professor at the Academy in 1873 and later directed its landscape painting workshop. His paintings capture Russian forests with almost scientific precision. Contemporaries joked his work could serve as botanical studies.</p>

<p>His most famous painting, <em>Morning in a Pine Forest</em> (1889), made him a household name, though friend Konstantin Savitsky actually painted the four bears. Personal tragedy marked his life: his father, first wife, two sons, and brother-in-law (also a landscape painter) all died within a few years. He remarried a student, who died after childbirth. Shishkin continued working until his death, collapsing at his easel on March 20, 1898. His 140+ major paintings hang in the <a href="/museum/hermitage"><strong>State Tretyakov Gallery</strong></a> and the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a>. A minor planet bears his name.</p>`,
    faqs: [
      { question: "What was Ivan Shishkin known for painting?", answer: `Shishkin was famous for his <strong>detailed forest landscapes</strong>. His paintings of Russian wilderness were so precise that contemporaries said they could serve as botanical studies.` },
      { question: "Where can I see Ivan Shishkin's paintings?", answer: `Major collections are in the <strong>State Tretyakov Gallery</strong> and the <a href="/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Russia. His work appears throughout Russian art museums.` },
      { question: "What is Ivan Shishkin's most famous painting?", answer: `<em>Morning in a Pine Forest</em> (1889) featuring four bear cubs. Though iconic, <strong>Konstantin Savitsky actually painted the bears</strong> while Shishkin did the forest.` },
      { question: "What art movement was Ivan Shishkin part of?", answer: `He was a founding member of the <strong>Peredvizhniki</strong> (Wanderers), Russian realist artists who rejected academic rigidity and organized traveling exhibitions to bring art to ordinary people.` },
      { question: "Why was Ivan Shishkin called the 'tsar of the forest'?", answer: `His contemporaries gave him this title because of his <strong>unmatched mastery in depicting Russian forests</strong>, capturing the grandeur of trees, foliage, and the play of light with remarkable detail.` }
    ]
  }
};

async function main() {
  console.log("Updating artists batch 1 (10 artists)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artistUpdates)) {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    if (artist) {
      await prisma.artist.update({
        where: { slug },
        data: {
          bioFull: data.bioFull,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.name}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artists in batch 1`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
