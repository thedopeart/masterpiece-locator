const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Batch 5: 10 Artists to optimize
const artistUpdates = {
  "jules-bastien-lepage": {
    bioFull: `<p><strong>Jules Bastien-Lepage</strong> (1848–1884) bridged the gap between Realism and <a href="/movement/impressionism"><strong>Impressionism</strong></a>, creating what critics called "impressionism corrected." Born in Damvillers, France, the son of a vineyard worker, he showed talent early. His father, himself an amateur artist, gave him his first lessons before sending him to Verdun for formal training.</p>

<p>In 1867, Bastien-Lepage arrived in Paris and entered the École des Beaux-Arts, studying under Alexandre Cabanel. The Franco-Prussian War interrupted his studies. He fought, was wounded, and returned home to recover. Back in his village, he began painting the peasants he'd grown up with. His 1874 <em>Portrait of my Grandfather</em> earned him a third-class medal at the Salon and his first real recognition.</p>

<p>Émile Zola had mixed feelings about the work, describing it as "impressionism sweetened and adapted to the taste of the crowd." But the crowds loved it. <em>Haymaking</em> (1877), now at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, established him as the leader of French Naturalism. He worked en plein air, capturing peasants in their actual environments with an attention to detail that felt almost photographic. His most ambitious painting, <em>Joan of Arc</em> (1879), broke with academic tradition by depicting France's national hero as an ordinary peasant girl in a garden. It hangs today at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>. That same year, his portrait of Sarah Bernhardt earned him the Legion of Honor. He was thirty-one. Five years later, at thirty-six, he was dead from testicular cancer. His influence spread through the Glasgow Boys in Scotland and Tom Roberts in Australia. He was, as one contemporary noted, "comparable to Manet" in his impact on a generation of painters.</p>`,
    faqs: [
      { question: "What art movement was Jules Bastien-Lepage part of?", answer: `Bastien-Lepage led the French <strong>Naturalist movement</strong>, bridging <a href="/movement/impressionism"><strong>Impressionism</strong></a> and Realism. Zola called his work "impressionism corrected, sweetened and adapted to the taste of the crowd."` },
      { question: "Where can I see Jules Bastien-Lepage's paintings?", answer: `His work is at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> (<em>Haymaking</em>), the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> (<em>Joan of Arc</em>), and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.` },
      { question: "What subjects did Jules Bastien-Lepage paint?", answer: `He specialized in <strong>peasant scenes</strong> painted en plein air, showing rural workers in their actual environments. He also painted portraits, including a famous one of actress Sarah Bernhardt.` },
      { question: "Why is Jules Bastien-Lepage's Joan of Arc famous?", answer: `He depicted France's hero as an <strong>ordinary peasant girl in a garden</strong>, breaking with academic tradition. The painting was controversial with critics but hugely popular with the public.` },
      { question: "Who did Jules Bastien-Lepage influence?", answer: `He influenced the <strong>Glasgow Boys</strong> in Scotland and <strong>Tom Roberts</strong> in Australia. His plein-air approach to rural subjects shaped an entire generation of naturalist painters.` },
      { question: "How did Jules Bastien-Lepage die?", answer: `He died of <strong>testicular cancer at age 36</strong> in 1884. Despite his short career, he earned the Legion of Honor at 31 and achieved fame comparable to Manet.` }
    ]
  },

  "kathe-kollwitz": {
    bioFull: `<p><strong>Käthe Kollwitz</strong> (1867–1945) turned grief into art. Born Käthe Schmidt in Königsberg, Prussia, she grew up in a liberal middle-class family. Her father was a Social Democrat stonemason; her grandfather, a Lutheran pastor who'd been expelled from the church for his radical views. She showed talent early. At seventeen, she enrolled at the Berlin School of Art for Women, then studied further in Munich.</p>

<p>In 1891, she married Dr. Karl Kollwitz, who opened a clinic in a working-class district of Berlin. Living among the poor changed her art. She saw suffering firsthand: hunger, illness, desperation. Her first major work, the print cycle <em>A Weavers' Revolt</em> (1893–97), depicted an 1844 uprising of starving textile workers. The German Emperor refused to award it a gold medal, saying it showed "art of the gutter."</p>

<p>Then came 1914. Her younger son Peter enlisted and was killed in Flanders within two months. Kollwitz spent the next eighteen years creating his memorial. <em>The Grieving Parents</em>, two kneeling granite figures, was finally installed in the Belgian cemetery where Peter lay in 1932. Her sculpture <em>Mother with her Dead Son</em> now stands at the center of the Neue Wache in Berlin, Germany's official memorial to victims of war and tyranny. She became the first woman elected to the Prussian Academy of Arts and the first to receive honorary professor status. The Nazis forced her resignation in 1933, called her work degenerate, and banned public exhibitions of it. She kept working. In 1940, her husband died. In 1942, her grandson Peter was killed in Russia. She died in April 1945, two weeks before the war ended. Four <a href="/museum/moma"><strong>MoMA</strong></a> and the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> hold major collections. The Käthe Kollwitz Museum in Berlin is devoted entirely to her work.</p>`,
    faqs: [
      { question: "What art movement was Käthe Kollwitz part of?", answer: `Kollwitz is associated with German <a href="/movement/expressionism"><strong>Expressionism</strong></a>, though her early work was more realistic. She's considered the <strong>foremost artist of social protest</strong> in the 20th century.` },
      { question: "Where can I see Käthe Kollwitz's art?", answer: `Major collections are at <a href="/museum/moma"><strong>MoMA</strong></a> in New York and the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. The <strong>Käthe Kollwitz Museum</strong> in Berlin and Cologne are dedicated to her work.` },
      { question: "What subjects did Käthe Kollwitz portray?", answer: `She depicted <strong>poverty, war, and motherhood</strong>. Her most powerful works show working-class struggle, grieving mothers, and the devastation of war.` },
      { question: "What happened to Käthe Kollwitz's son Peter?", answer: `Peter was <strong>killed in Flanders in October 1914</strong>, two months after enlisting. She spent 18 years creating his memorial, <em>The Grieving Parents</em>, completed in 1932.` },
      { question: "Was Käthe Kollwitz persecuted by the Nazis?", answer: `Yes. The Nazis <strong>forced her resignation</strong> from the Academy, called her work degenerate, and banned her from exhibiting. She continued working in private until her death.` },
      { question: "What honors did Käthe Kollwitz receive?", answer: `She was the <strong>first woman elected to the Prussian Academy of Arts</strong> and first to receive honorary professor status. Over 40 German schools are named after her.` }
    ]
  },

  "katsushika-hokusai": {
    bioFull: `<p><strong>Katsushika Hokusai</strong> (1760–1849) changed his name at least thirty times. He changed addresses ninety-three times. What he never changed was his obsession with drawing. Born in Edo (now Tokyo), the son of a mirror-maker to the shogun, he was apprenticed to a block-cutter at fourteen and entered the studio of <a href="/movement/ukiyo-e"><strong>ukiyo-e</strong></a> master Katsukawa Shunshō at nineteen.</p>

<p>For the next seven decades, he never stopped working. By his own estimate, he produced over 30,000 paintings, sketches, woodblock prints, and illustrated books. His drawing manuals, the fifteen-volume <em>Hokusai Manga</em> (1814–78), became a sensation, influencing artists from Manet to Van Gogh. He drew everything: ghosts, bridges, waterfalls, wrestlers, courtesans, mountains. Especially mountains.</p>

<p><em>The Great Wave off Kanagawa</em> (c. 1831), from his series <em>Thirty-six Views of Mount Fuji</em>, is possibly the most reproduced image in art history. Three fishing boats struggle against a towering wave while Fuji sits calmly in the distance. Hokusai was around seventy when he made it. He'd borrowed a new pigment from Europe: Prussian blue. The combination of Japanese composition and Western materials created something unprecedented. In his seventies, he wrote: "From the age of six, I had a mania for drawing... When I am eighty I shall have made still more progress. At ninety I shall penetrate the mystery of things. At a hundred I shall have reached a marvelous stage." He died at eighty-nine, reportedly saying, "If heaven would give me just ten more years... I could become a real painter." His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the British Museum, and the Sumida Hokusai Museum in Tokyo.</p>`,
    faqs: [
      { question: "What art movement was Katsushika Hokusai part of?", answer: `Hokusai was a master of <a href="/movement/ukiyo-e"><strong>ukiyo-e</strong></a>, the Japanese "pictures of the floating world." He expanded the genre beyond portraits to include <strong>landscapes, nature, and everyday scenes</strong>.` },
      { question: "Where can I see Hokusai's The Great Wave?", answer: `Multiple prints exist at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <strong>British Museum</strong>, and the <strong>Sumida Hokusai Museum</strong> in Tokyo. About 8,000 impressions were made from the original block.` },
      { question: "How many artworks did Hokusai create?", answer: `By his own estimate, he produced <strong>over 30,000 works</strong> across a 70-year career: paintings, sketches, woodblock prints, and illustrated books including the famous <em>Hokusai Manga</em>.` },
      { question: "Why did Hokusai change his name so often?", answer: `He used <strong>at least 30 different names</strong> during his lifetime. Name changes often marked shifts in his artistic style or the start of a new creative period.` },
      { question: "How did Hokusai influence Western art?", answer: `His prints sparked <strong>"Japonisme"</strong> in Europe, influencing Impressionists like Monet and Post-Impressionists like Van Gogh. Debussy's <em>La Mer</em> was inspired by <em>The Great Wave</em>.` },
      { question: "What were Hokusai's last words?", answer: `At 89, he reportedly said: <strong>"If heaven would give me just ten more years... I could become a real painter."</strong> He died still believing he hadn't reached his full potential.` }
    ]
  },

  "pieter-claesz": {
    bioFull: `<p><strong>Pieter Claesz</strong> (c. 1597–1660) made ordinary objects look profound. Born in Berchem near Antwerp, he moved to Haarlem around 1620 and stayed for the rest of his life. There he and Willem Claeszoon Heda developed what became known as the "ontbijtje," or breakfast piece: paintings of half-eaten meals, overturned goblets, and scattered bread arranged with deliberate carelessness.</p>

<p>Claesz worked in the monochrome style typical of <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> still life: subtle gradations of brown, gray, and olive, with occasional glints of silver or gold catching the light. His palette was restrained, but his technique was anything but simple. He captured the dull gleam of pewter, the transparency of glass, the rough texture of bread crusts. Contemporary poet Samuel Ampzing praised both Claesz and Heda in his 1628 <em>Description and Praise of the City of Haarlem</em>.</p>

<p>His vanitas paintings went further. A skull, a snuffed candle, an overturned glass: these weren't just objects but meditations on mortality. In <em>Vanitas with Violin and Glass Ball</em> (1625), the reflection in the glass ball shows the artist at work, a reminder that even the painter is subject to time. His son, Nicolaes Berchem, became a celebrated landscape painter in his own right. Claesz was buried in Haarlem on January 1, 1661. His paintings hang at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the Frans Hals Museum in Haarlem, and the National Gallery of Art in Washington.</p>`,
    faqs: [
      { question: "What was Pieter Claesz known for painting?", answer: `Claesz specialized in <strong>"ontbijtjes" (breakfast pieces)</strong> and vanitas still lifes. He depicted humble meals and symbolic objects with remarkable attention to light and texture.` },
      { question: "Where can I see Pieter Claesz's paintings?", answer: `His work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <strong>Frans Hals Museum</strong> in Haarlem, and the <strong>National Gallery of Art</strong> in Washington.` },
      { question: "What art movement was Pieter Claesz part of?", answer: `Claesz was a leading <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter. He and Willem Heda founded the Haarlem school of still life painting.` },
      { question: "What is a vanitas painting?", answer: `Vanitas paintings include <strong>symbols of mortality</strong>: skulls, snuffed candles, overturned glasses. They remind viewers that earthly pleasures and life itself are temporary.` },
      { question: "What technique did Pieter Claesz use?", answer: `He worked in a <strong>monochrome palette</strong> of browns, grays, and olives, with subtle gradations of tone. His skill at rendering different textures: glass, pewter, bread, was widely admired.` },
      { question: "Was Pieter Claesz related to other artists?", answer: `Yes, his son <strong>Nicolaes Berchem</strong> became a celebrated landscape painter. The family name "Berchem" came from their hometown near Antwerp.` }
    ]
  },

  "pontormo": {
    bioFull: `<p><strong>Jacopo da Pontormo</strong> (1494–1557) painted figures that seem to float in colored dreams. Born Jacopo Carucci in Pontormo near Empoli, he was orphaned young and passed through the workshops of Leonardo da Vinci, Piero di Cosimo, and Andrea del Sarto before emerging as Florence's most original painter.</p>

<p>His work marks the break from High Renaissance harmony into <a href="/movement/mannerism"><strong>Mannerism</strong></a>. Elongated bodies, ambiguous space, haunted faces, colors that seem to glow from within. His <em>Deposition</em> (1525–28) in the Capponi Chapel shows figures arranged in a spiral, their pale pink and blue robes impossibly bright, their grief somehow both theatrical and genuine. There's no cross, no ground, no clear source of light. Just bodies suspended in grief.</p>

<p>The Medici kept him busy. He painted frescoes at their villa at Poggio a Caiano, decorated their chapel at San Lorenzo, worked on their tombs. He was popular with the powerful. But according to biographer Giorgio Vasari, he was also deeply eccentric: reclusive, anxious, prone to obsessions. A diary survives from his last years (1554–57), recording his meals, his bowel movements, his moods. He spent the final decade of his life on the San Lorenzo frescoes, work known today only from drawings. The frescoes themselves were destroyed. His pupil was Agnolo Bronzino, who became the leading painter of late Florentine Mannerism. Pontormo's paintings are at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Pontormo part of?", answer: `Pontormo was a founder of <a href="/movement/mannerism"><strong>Mannerism</strong></a>, the style that followed the High Renaissance. His work features <strong>elongated figures, unusual colors, and ambiguous space</strong>.` },
      { question: "Where can I see Pontormo's paintings?", answer: `His work is at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>. The <em>Deposition</em> remains in the Capponi Chapel in Florence.` },
      { question: "Who were Pontormo's teachers?", answer: `He studied with <strong>Leonardo da Vinci, Piero di Cosimo, and Andrea del Sarto</strong>. The influence of del Sarto is most visible in his early work.` },
      { question: "What was Pontormo's personality like?", answer: `Giorgio Vasari described him as <strong>eccentric and reclusive</strong>. A surviving diary reveals his obsessive tracking of meals, health, and moods during his final years.` },
      { question: "Who did Pontormo teach?", answer: `His most famous student was <strong>Agnolo Bronzino</strong>, who became the leading painter of late Florentine Mannerism. Together they're considered central to the movement.` },
      { question: "What is Pontormo's most famous painting?", answer: `The <em>Deposition</em> (1525–28) in the Capponi Chapel, Florence, is his masterwork. It shows <strong>grief-stricken figures floating in an impossible, luminous space</strong>.` }
    ]
  },

  "sassetta": {
    bioFull: `<p><strong>Sassetta</strong> (c. 1392–1450), born Stefano di Giovanni, was the leading painter of fifteenth-century Siena. His origins are uncertain. Some records suggest Siena; others point to Cortona, since his father Giovanni is called "da Cortona." What's clear is that by the 1420s, he was the most sought-after artist in the city.</p>

<p>Siena was conservative. While Florence embraced the new <a href="/movement/renaissance"><strong>Renaissance</strong></a> style, Sienese patrons preferred the older Gothic tradition. Sassetta found a middle path. He kept the gold backgrounds, the elegant line, the spiritual intensity of his predecessors, but added a new naturalism: real light falling on real landscapes, figures with weight and volume. The result was something original.</p>

<p>His first documented work, an altarpiece for the Wool Guild in 1423, established his reputation. The Madonna of the Snow altarpiece for Siena Cathedral followed. But his greatest achievement was the double-sided San Francesco altarpiece for Borgo San Sepolcro (1437–44), nearly six yards tall with a gilded frame. Art historian Bernard Berenson called it "the Rolls Royce of early Renaissance painting." Today its panels are scattered across twelve museums in Europe and America. Sassetta was a landscape painter too, unusual for his time, and recent scholarship has explored his contribution to that genre. He died in 1450 from pneumonia caught while painting a fresco on the Porta Romana gate. His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the National Gallery in London, the National Gallery of Art in Washington, and the Pinacoteca Nazionale in Siena.</p>`,
    faqs: [
      { question: "What art movement was Sassetta part of?", answer: `Sassetta bridged the <strong>Gothic and <a href="/movement/renaissance">Renaissance</a></strong> traditions. While Florence embraced new styles, he blended Sienese spirituality with emerging Renaissance naturalism.` },
      { question: "Where can I see Sassetta's paintings?", answer: `His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> (<em>Journey of the Magi</em>), the <strong>National Gallery</strong> in London, and the <strong>Pinacoteca Nazionale</strong> in Siena. Panels from his major altarpiece are in twelve museums.` },
      { question: "What was Sassetta's most important work?", answer: `The <strong>San Francesco altarpiece</strong> (1437–44) for Borgo San Sepolcro. Nearly six yards tall, it was called "the Rolls Royce of early Renaissance painting." Its panels are now scattered worldwide.` },
      { question: "Why is Sassetta's altarpiece in multiple museums?", answer: `The San Francesco altarpiece was <strong>disassembled after the church's dissolution</strong>. Its panels were sold and are now in collections from New York to Moscow.` },
      { question: "How did Sassetta die?", answer: `He died in 1450 from <strong>pneumonia caught while painting a fresco</strong> on Siena's Porta Romana gate. He was about 58 years old.` },
      { question: "What made Sassetta's style distinctive?", answer: `He combined <strong>Sienese Gothic elegance</strong>: gold backgrounds, refined line, with Renaissance naturalism: real light, volumetric figures, believable landscapes.` }
    ]
  },

  "aelbert-cuyp": {
    bioFull: `<p><strong>Aelbert Cuyp</strong> (1620–1691) painted the Dutch countryside bathed in Italian light. Born in Dordrecht to portrait painter Jacob Gerritsz Cuyp, he learned from his father and spent his entire life in his hometown at the junction of several major rivers. The water, the light, the animals grazing on the banks: these became his subjects.</p>

<p>Early in his career, Cuyp worked in the gray-green tones typical of Dutch landscape painting. Then something changed. Around 1640, Utrecht painter Jan Both returned from Italy with paintings full of golden Mediterranean light. Cuyp saw them and transformed his palette. He began painting Dutch scenes, cows and rivers and sailing boats, as if they were lit by the warm glow of a Roman sunset.</p>

<p>His animals are magnificent. Cows especially. They stand in pools of amber light, dignified and monumental, as if posing for portraits. His finest works show river scenes at dawn or dusk, when the light is warmest. He was a <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter working in what scholars call the "Italianate manner," though he never visited Italy himself. In 1658, he married a wealthy widow and seems to have painted little afterward. He held civic positions and likely had no financial need to work. After his death, he was forgotten for generations before British collectors rediscovered him in the late eighteenth century. The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London has eleven of his paintings. Others are at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> and the Dordrechts Museum in his hometown.</p>`,
    faqs: [
      { question: "What was Aelbert Cuyp known for painting?", answer: `Cuyp specialized in <strong>landscapes with animals</strong>, particularly cows, bathed in warm, golden light. His river scenes and pastoral subjects captured the Dutch countryside with an Italian glow.` },
      { question: "Where can I see Aelbert Cuyp's paintings?", answer: `The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London has eleven of his paintings. Others are at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam and the <strong>Dordrechts Museum</strong> in his hometown.` },
      { question: "What art movement was Aelbert Cuyp part of?", answer: `Cuyp was a <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter who worked in the "Italianate manner," using warm golden light inspired by Italian landscapes, though he never visited Italy.` },
      { question: "Why did Aelbert Cuyp stop painting?", answer: `After marrying a wealthy widow in 1658, he <strong>largely stopped painting</strong>. He held civic positions in Dordrecht and likely had no financial need to continue working.` },
      { question: "Who influenced Aelbert Cuyp's style?", answer: `<strong>Jan Both</strong>, who returned from Italy around 1640 with paintings full of Mediterranean golden light, transformed Cuyp's palette from gray-green tones to warm amber.` },
      { question: "Why is Aelbert Cuyp popular in Britain?", answer: `British collectors <strong>rediscovered him in the late 18th century</strong> after he'd been largely forgotten. His pastoral scenes appealed to English taste, and he's better represented in British collections than Dutch ones.` }
    ]
  },

  "august-macke": {
    bioFull: `<p><strong>August Macke</strong> (1887–1914) made color sing. Born in Meschede, Germany, he grew up in Cologne and Bonn, where he befriended Elisabeth Gerhardt, whom he later married. At seventeen, he enrolled at the Düsseldorf Academy. By nineteen, he was in Paris, discovering Impressionism. By twenty-two, he'd absorbed Matisse and the Fauves. By twenty-four, he was a founding member of Der Blaue Reiter.</p>

<p><a href="/movement/expressionism"><strong>Der Blaue Reiter</strong></a> (The Blue Rider), founded in Munich by Wassily Kandinsky and Franz Marc, became one of the most influential groups in modern art. Macke joined in 1911, bringing his own approach. While Marc painted mystical animals and Kandinsky moved toward abstraction, Macke painted people: women in hat shops, couples strolling through parks, children at play. His colors were bright, his subjects cheerful, his touch lighter than his colleagues'.</p>

<p>In 1912, he met Robert Delaunay in Paris. Delaunay's Orphism, with its prismatic colors and fractured light, pushed Macke further. Then came Tunisia. In April 1914, Macke traveled there with Paul Klee and Louis Moilliet. The North African light transformed his work. He produced some forty watercolors in two weeks, luminous images that rank among his finest. Five months later, he was dead. Killed in September 1914 at Perthes-lès-Hurlus in Champagne, France, in the second month of World War I. He was twenty-seven. His last painting, <em>Farewell</em>, shows dark figures at a train station. His work is at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, the Lenbachhaus in Munich, and the August-Macke-Haus in Bonn, his former home.</p>`,
    faqs: [
      { question: "What art movement was August Macke part of?", answer: `Macke was a founding member of <a href="/movement/expressionism"><strong>Der Blaue Reiter</strong></a> (The Blue Rider), alongside Kandinsky and Franz Marc. He's considered a German Expressionist, though his work was more cheerful than most.` },
      { question: "Where can I see August Macke's paintings?", answer: `His work is at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> in New York, the <strong>Lenbachhaus</strong> in Munich, and the <strong>August-Macke-Haus</strong> in Bonn, his former home turned museum.` },
      { question: "What subjects did August Macke paint?", answer: `Unlike other Expressionists who painted animals or abstractions, Macke painted <strong>everyday scenes</strong>: people strolling in parks, women shopping, children playing. His subjects were cheerful and colorful.` },
      { question: "How did August Macke die?", answer: `He was <strong>killed in September 1914</strong> at Perthes-lès-Hurlus, France, in the second month of World War I. He was only twenty-seven years old.` },
      { question: "What was August Macke's Tunisia trip?", answer: `In April 1914, he traveled to Tunisia with <strong>Paul Klee and Louis Moilliet</strong>. The North African light inspired about 40 watercolors in two weeks, some of his finest work.` },
      { question: "Who influenced August Macke's style?", answer: `He was influenced by <strong>Impressionism, Matisse, the Fauves, and especially Robert Delaunay's Orphism</strong>. Each encounter pushed his color work further.` }
    ]
  },

  "carl-spitzweg": {
    bioFull: `<p><strong>Carl Spitzweg</strong> (1808–1885) painted eccentrics with affection. Born in Munich, the second of three sons in a wealthy merchant family, he trained as a pharmacist at his father's insistence. An illness during his studies gave him time to draw. When an inheritance made him financially independent in 1833, he abandoned pharmacy for painting. He never looked back.</p>

<p>Spitzweg was self-taught. He copied Flemish masters and traveled to see collections in Prague, Venice, Paris, and London. What emerged was a gentle style of genre painting that captured the quirks of German middle-class life. His subjects were bookworms, hermits, amateur scientists, and struggling poets: solitary figures absorbed in their own small worlds. The Biedermeier period (roughly 1815–48) valued domestic contentment and private pleasures over political engagement. Spitzweg's paintings embodied this sensibility.</p>

<p>His most famous work, <em>The Poor Poet</em> (1839), shows a shabby writer in a garret, huddled under an umbrella against a leaking roof, burning manuscripts for warmth. It's both sympathetic and gently mocking. The <a href="/movement/romanticism"><strong>Romantic</strong></a> ideal of the starving artist, made real and a little ridiculous. Spitzweg never married. He lived quietly in Munich, traveled frequently, and produced over 1,500 paintings and drawings. His work sold well during his lifetime, though critics sometimes dismissed it as sentimental. Today he's recognized as one of the most important German painters of the nineteenth century. <em>The Poor Poet</em> hangs at the Neue Pinakothek in Munich. Other works are at the <a href="/museum/louvre"><strong>Louvre</strong></a> and collections throughout Germany.</p>`,
    faqs: [
      { question: "What art movement was Carl Spitzweg part of?", answer: `Spitzweg is associated with the <strong>Biedermeier period</strong> and German <a href="/movement/romanticism"><strong>Romanticism</strong></a>. He painted gentle, humorous scenes of middle-class life rather than grand historical subjects.` },
      { question: "Where can I see Carl Spitzweg's paintings?", answer: `<em>The Poor Poet</em> is at the <strong>Neue Pinakothek</strong> in Munich. Other works are at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris and museums throughout Germany.` },
      { question: "What subjects did Carl Spitzweg paint?", answer: `He painted <strong>eccentrics and solitary figures</strong>: bookworms, hermits, amateur scientists, struggling poets. His characters are absorbed in their own quirky worlds.` },
      { question: "What is The Poor Poet about?", answer: `<em>The Poor Poet</em> (1839) shows a <strong>writer in a garret</strong>, huddled under an umbrella, burning manuscripts for warmth. It's Spitzweg's most famous painting, both sympathetic and gently ironic.` },
      { question: "Was Carl Spitzweg formally trained?", answer: `No. He trained as a <strong>pharmacist</strong> but was self-taught as a painter. He learned by copying Flemish masters and visiting major European collections.` },
      { question: "How many works did Carl Spitzweg create?", answer: `He produced <strong>over 1,500 paintings and drawings</strong> during his lifetime, selling around 400 of them. He was financially independent and never needed to work for money.` }
    ]
  },

  "emanuel-leutze": {
    bioFull: `<p><strong>Emanuel Leutze</strong> (1816–1868) painted American history for European inspiration. Born in Schwäbisch Gmünd, Germany, he came to America with his family in 1825, settling in Philadelphia. His father died when he was fifteen, and the young Leutze supported his mother and sister by selling portraits. His talent caught the attention of wealthy patrons who sent him back to Europe to study.</p>

<p>In 1841, Leutze enrolled at the Düsseldorf Academy, then Europe's preeminent art school. He stayed for nearly two decades, becoming a leading figure of the Düsseldorf School. But his heart was in America. When the Revolutions of 1848 swept across Europe, Leutze decided to paint something that would encourage the reformers: an image of successful revolution.</p>

<p><em>Washington Crossing the Delaware</em> (1851) shows the moment before the surprise attack on Trenton, December 25, 1776. It's historically inaccurate: the flag wasn't designed yet, the boat is too small, Washington wouldn't have stood that way. None of that mattered. The painting became an icon. The first version was damaged by fire and later destroyed in a World War II bombing raid on Bremen. The second version, purchased for the then-staggering sum of $10,000, hangs at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>. In 1860, Congress commissioned Leutze to paint a mural in the Capitol: <em>Westward the Course of Empire Takes Its Way</em>. He was working on <em>The Emancipation of the Slaves</em> when he died of heatstroke in Washington, D.C., in 1868, at age 52. His work is also at the Smithsonian American Art Museum and the Brooklyn Museum.</p>`,
    faqs: [
      { question: "What is Emanuel Leutze most famous for?", answer: `<em>Washington Crossing the Delaware</em> (1851), depicting the <strong>surprise attack on Trenton</strong> in 1776. It's one of the most iconic images in American history, despite historical inaccuracies.` },
      { question: "Where can I see Emanuel Leutze's paintings?", answer: `<em>Washington Crossing the Delaware</em> is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>. His Capitol mural is in Washington, D.C. Other works are at the <strong>Smithsonian American Art Museum</strong> and <strong>Brooklyn Museum</strong>.` },
      { question: "Why did Leutze paint Washington Crossing the Delaware?", answer: `Living in Europe during the <strong>1848 Revolutions</strong>, he wanted to inspire liberal reformers with an image of successful revolution. He used American tourists as models.` },
      { question: "What happened to the first version of the painting?", answer: `The first version was <strong>damaged by fire</strong> in Leutze's studio, restored, and sent to Bremen. It was <strong>destroyed in a 1942 Allied bombing raid</strong> during World War II.` },
      { question: "What art movement was Emanuel Leutze part of?", answer: `Leutze was associated with the <strong>Düsseldorf School</strong> of history painting. He studied and taught at the Düsseldorf Academy for nearly two decades.` },
      { question: "How did Emanuel Leutze die?", answer: `He died of <strong>heatstroke in Washington, D.C., in 1868</strong>, at age 52. He was working on a painting about the emancipation of slaves at the time of his death.` }
    ]
  }
};

async function main() {
  console.log("Updating 10 artists (batch 5)...\n");

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

  console.log(`\nUpdated ${updated} artists in batch 5`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
