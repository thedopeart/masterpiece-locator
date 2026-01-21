const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 1: First 13 artists with expanded FAQs (35-60 words, 3-4 links spread across FAQs)
const artistUpdates = {
  "vasily-surikov": {
    faqs: [
      { question: "What art movement was Vasily Surikov part of?", answer: `Surikov was a leading figure in Russian <a href="/apps/masterpieces/movement/realism"><strong>Realism</strong></a> and a prominent member of the Peredvizhniki (Wanderers), the artists' collective that brought exhibitions to provincial Russia. Unlike his contemporaries who focused on peasant life, Surikov painted monumental historical canvases depicting pivotal moments of Russian national tragedy and transformation.` },
      { question: "Where can I see Vasily Surikov's paintings?", answer: `The <a href="/apps/masterpieces/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow holds his major historical paintings, including The Morning of the Streltsy Execution and Boyarynya Morozova. The <a href="/apps/masterpieces/museum/state-russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg displays Suvorov Crossing the Alps. Smaller works appear in regional Russian museums.` },
      { question: "What is Surikov's most famous painting?", answer: `The Morning of the Streltsy Execution (1881) depicts Peter the Great's brutal suppression of the streltsy rebellion in 1698. When unveiled at the ninth Peredvizhniki exhibition, it caused a sensation. Surikov spent three years on this massive 2.18 by 3.79 meter canvas, meticulously researching 17th-century costumes and architecture to capture the psychological tension between the condemned rebels and the young tsar.` },
      { question: "Why was Surikov called 'The Composer'?", answer: `Fellow artists dubbed him "The Composer" for his extraordinary ability to orchestrate dozens of individual figures into unified dramatic compositions. Like a musical conductor, he balanced gestures, expressions, and spatial relationships across canvases sometimes exceeding five meters wide, creating harmonious visual narratives from complex crowd scenes.` },
      { question: "What was Surikov's approach to historical accuracy?", answer: `Surikov prioritized emotional truth over documentary precision, believing that powerful art required creative license. He knew the streltsy weren't actually executed in Red Square, but painted them there because the Kremlin backdrop amplified the dramatic tension. He said an artist must feel history rather than merely illustrate it.` }
    ]
  },

  "andrea-mantegna": {
    faqs: [
      { question: "What art movement was Andrea Mantegna part of?", answer: `Mantegna was the first fully <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> artist of northern Italy, bridging the early experiments of Padua with the mature developments in Florence and Rome. His archaeological precision, mastery of linear perspective, and sculptural clarity influenced generations of artists from Giovanni Bellini to Albrecht Dürer.` },
      { question: "Where can I see Andrea Mantegna's paintings?", answer: `His revolutionary Lamentation over the Dead Christ hangs at the <a href="/apps/masterpieces/museum/brera"><strong>Pinacoteca di Brera</strong></a> in Milan. The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> holds his Saint Sebastian and Crucifixion panels from the San Zeno Altarpiece. London's National Gallery owns The Agony in the Garden and Triumphs of Caesar studies.` },
      { question: "What is the Camera degli Sposi?", answer: `The Camera degli Sposi (Bridal Chamber) in Mantua's Palazzo Ducale is Mantegna's masterpiece of illusionistic fresco painting, completed between 1465 and 1474. The ceiling features a revolutionary painted oculus showing figures peering down through a circular opening, creating the illusion that the room extends into the sky above.` },
      { question: "What technique is Mantegna famous for?", answer: `Mantegna pioneered extreme foreshortening, demonstrated most dramatically in his Lamentation over the Dead Christ, which shows Christ's body receding from the viewer's feet with unprecedented realism. This daring perspective would influence artists for centuries, including the Baroque master Caravaggio.` },
      { question: "Who employed Andrea Mantegna?", answer: `The Gonzaga family of Mantua employed Mantegna as court painter for an remarkable forty-six years, from 1460 until his death. This was one of the longest patronage relationships in <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> art history. He also worked for Pope Innocent VIII, decorating a chapel in the Vatican that was later destroyed.` }
    ]
  },

  "felix-vallotton": {
    faqs: [
      { question: "What art movement was Félix Vallotton part of?", answer: `Vallotton joined <a href="/apps/masterpieces/movement/symbolism"><strong>Les Nabis</strong></a> in 1892, the Parisian group that included Bonnard, Vuillard, and Denis. Yet he never quite embraced their mystical tendencies, earning the nickname "le Nabi étranger" (the foreign Nabi). His cool, detached observation set him apart from his more spiritual colleagues.` },
      { question: "Where can I see Félix Vallotton's work?", answer: `The <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris displays major paintings including The Ball and Bathing on a Summer Evening. The Félix Vallotton Foundation in Lausanne holds the largest collection. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum</strong></a> owns important works including his woodcuts.` },
      { question: "What was Félix Vallotton's contribution to printmaking?", answer: `Art historians credit Vallotton with reviving the woodcut as a serious modern art form after centuries of being considered merely illustrative. His bold black-and-white prints, with their stark contrasts and simplified forms, directly influenced Edvard Munch, Aubrey Beardsley, and the German Expressionists who followed.` },
      { question: "What are Vallotton's Intimités prints?", answer: `The Intimités (1897-1898) comprise ten woodcuts depicting charged domestic encounters between men and women. Through stark contrasts of <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>black and white</strong></a>, Vallotton captured psychological tension, jealousy, and power dynamics in bourgeois interiors, revealing uncomfortable truths beneath respectable surfaces.` },
      { question: "Was Félix Vallotton French or Swiss?", answer: `Born in Lausanne, Switzerland in 1865, Vallotton moved to Paris at seventeen to study at the Académie Julian. He was naturalized as a French citizen in 1900 after marrying Gabrielle Rodrigues-Henriques, daughter of the wealthy art dealer Alexandre Bernheim. He always retained his Swiss identity and reserve.` }
    ]
  },

  "ernst-ludwig-kirchner": {
    faqs: [
      { question: "What art movement was Ernst Ludwig Kirchner part of?", answer: `Kirchner was a founding member of <a href="/apps/masterpieces/movement/expressionism"><strong>German Expressionism</strong></a> and co-founded Die Brücke (The Bridge) in Dresden in June 1905 with fellow architecture students Fritz Bleyl, Erich Heckel, and Karl Schmidt-Rottluff. This revolutionary group launched one of the most influential art movements of the 20th century.` },
      { question: "Where can I see Kirchner's paintings?", answer: `The <a href="/apps/masterpieces/museum/brucke-museum"><strong>Brücke-Museum</strong></a> in Berlin, founded in 1967, holds the world's largest collection of Die Brücke art. The Kirchner Museum Davos in Switzerland preserves works from his Alpine period. Major paintings also hang at <a href="/apps/masterpieces/museum/moma"><strong>MoMA</strong></a> in New York.` },
      { question: "What was Die Brücke?", answer: `Die Brücke (The Bridge) was founded in Dresden on June 7, 1905, aiming to create a bridge between classical art and the radical avant-garde. The group's manifesto, carved by Kirchner into a woodblock, called for artistic freedom and the unification of life and art. They dissolved in 1913 after moving to Berlin.` },
      { question: "What subjects did Kirchner paint?", answer: `Kirchner's subjects evolved dramatically. His Berlin street scenes (1913-1915) captured the nervous energy of modern urban life, depicting prostitutes, fashionable crowds, and jagged architecture. After a nervous breakdown during World War I, he moved to Davos, Switzerland, where he painted serene Alpine <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> until his death.` },
      { question: "Why was Kirchner's art condemned by the Nazis?", answer: `The Nazi regime labeled Kirchner's work "degenerate art" in 1933 because of its psychological intensity, distorted figures, and modern style that contradicted their idealized Germanic aesthetics. By 1937, they had confiscated over 600 of his works from German museums. Devastated by this persecution, Kirchner committed suicide in 1938.` },
      { question: "What influences shaped Kirchner's style?", answer: `German late Gothic masters like Albrecht Dürer and Lucas Cranach provided formal inspiration, while Edvard Munch's emotional intensity shaped his approach to color and line. African and Oceanian art, which he studied at Dresden's ethnographic museum, led him to simplify forms and flatten perspective.` }
    ]
  },

  "filippo-lippi": {
    faqs: [
      { question: "What art movement was Filippo Lippi part of?", answer: `Lippi was a leading painter of the Early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> in Florence, part of the artistic flowering known as the Quattrocento. His luminous Madonna paintings and expressive religious narratives profoundly influenced his student Sandro Botticelli, who carried Lippi's graceful linearity into the next generation.` },
      { question: "Where can I see Filippo Lippi's paintings?", answer: `The <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence holds his celebrated Madonna and Child with Two Angels. The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> displays several panels, while his greatest fresco cycles remain in Prato Cathedral and Spoleto Cathedral, where he worked until his death.` },
      { question: "Was Filippo Lippi really a friar?", answer: `Yes, Lippi took Carmelite vows as an orphaned teenager at the convent of Santa Maria del Carmine in Florence around 1421. Known as "Fra Filippo," he proved a reluctant monk whose artistic genius and scandalous personal life made him one of the most colorful figures of the Renaissance.` },
      { question: "What was the scandal in Filippo Lippi's life?", answer: `Despite his religious vows, Lippi abducted and seduced Lucrezia Buti, a young nun from the convent of Santa Margherita in Prato, while painting there in 1456. She bore him two children, including the future painter Filippino Lippi. Pope Pius II eventually released them both from their vows.` },
      { question: "Who were Filippo Lippi's famous students?", answer: `Sandro Botticelli was his most celebrated pupil, entering Lippi's workshop around 1464. The influence is unmistakable in Botticelli's graceful Madonnas and flowing draperies. Lippi's own son Filippino Lippi became an important painter who completed several of Botticelli's unfinished commissions.` },
      { question: "Who were Filippo Lippi's patrons?", answer: `The <strong>Medici family</strong> became his primary patrons by the 1430s. Cosimo de' Medici supported him throughout his career, once even rescuing him from imprisonment for fraud. This powerful backing allowed Lippi to develop his art despite personal scandals that would have ruined a less well-connected painter.` }
    ]
  },

  "francisco-goya": {
    faqs: [
      { question: "What art movement was Francisco Goya part of?", answer: `Goya defies easy categorization, bridging <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>, late Baroque, and proto-modern art across his remarkable seven-decade career. His embrace of subjectivity, imagination, and raw emotional truth aligned with Romantic ideals, while his unflinching depictions of violence and irrationality anticipated Expressionism and Surrealism by over a century.` },
      { question: "Where can I see Goya's paintings?", answer: `The <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid holds the world's supreme collection, including The Third of May 1808, the complete Black Paintings series, and his royal family portraits. The museum owns over 140 Goya paintings and most of his print series, making it essential for understanding his genius.` },
      { question: "What are Goya's Black Paintings?", answer: `The Black Paintings are fourteen murals Goya painted directly onto the walls of his farmhouse, the Quinta del Sordo, between 1819 and 1823. Created in complete isolation when he was deaf, ill, and disillusioned, these <a href="https://luxurywallart.com/collections/macabre-art" target="_blank" rel="noopener"><strong>haunting works</strong></a> include Saturn Devouring His Son and Witches' Sabbath, expressing his darkest visions of humanity.` },
      { question: "Was Francisco Goya deaf?", answer: `A severe illness in late 1792, possibly lead poisoning from his paints, left Goya permanently deaf at age forty-six. This isolation profoundly transformed his art, driving him inward toward increasingly dark, personal, and visionary imagery. He communicated through writing for the remaining thirty-six years of his life.` },
      { question: "What are Goya's most famous paintings?", answer: `The Third of May 1808, depicting French soldiers executing Spanish civilians, is considered the first great modern history painting. The Black Paintings, Los Caprichos etchings, and his devastating Disasters of War series are equally celebrated. His portrait of the Spanish royal family subtly reveals their vanity and mediocrity.` },
      { question: "Who did Goya influence?", answer: `Goya's influence spans movements: Delacroix and the <a href="/apps/masterpieces/movement/romanticism"><strong>Romantics</strong></a> admired his passion, Manet studied his technique, the <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionists</strong></a> embraced his psychological intensity, and Picasso's Guernica directly echoes The Third of May 1808. He is often called the last Old Master and first modern artist.` }
    ]
  },

  "kathe-kollwitz": {
    faqs: [
      { question: "What art movement was Käthe Kollwitz part of?", answer: `Kollwitz is associated with German <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>, though her work evolved from naturalism through a distinctive, powerful style all her own. She is widely regarded as the foremost artist of social protest in the twentieth century, using her art to advocate for workers, mothers, and victims of war and poverty.` },
      { question: "Where can I see Käthe Kollwitz's art?", answer: `Major collections of her prints and sculptures are at <a href="/apps/masterpieces/museum/moma"><strong>MoMA</strong></a> in New York and the Art Institute of Chicago. The Käthe Kollwitz Museum in Cologne and the Käthe-Kollwitz-Museum Berlin are dedicated entirely to her work, displaying over 200 prints, drawings, and sculptures each.` },
      { question: "What subjects did Käthe Kollwitz portray?", answer: `Kollwitz devoted her art to depicting poverty, war, and the suffering of mothers. Living in a working-class Berlin neighborhood where her husband practiced medicine, she witnessed daily struggles that became her lifelong subjects. Her most powerful cycles, A Weavers' Rebellion and Peasants' War, champion the oppressed against injustice.` },
      { question: "What happened to Käthe Kollwitz's son Peter?", answer: `Peter Kollwitz, her younger son, was killed at Diksmuide in Flanders on October 22, 1914, just two months after volunteering. He was eighteen years old. Kollwitz spent the next eighteen years creating a memorial, The Grieving Parents, finally installed at the German war cemetery in Vladslo, Belgium in 1932.` },
      { question: "Was Käthe Kollwitz persecuted by the Nazis?", answer: `The Nazis forced her resignation from the Prussian Academy of Arts in 1933, where she had become the first woman member in 1919. They labeled her work degenerate, banned her from exhibiting, and removed her sculptures from public display. She continued working privately until her death in April 1945.` },
      { question: "What honors did Käthe Kollwitz receive?", answer: `Kollwitz was the first woman elected to the Prussian Academy of Arts (1919) and first to receive the honorary title of professor. Today, over forty German schools bear her name. Her sculpture Pietà sits in Berlin's Neue Wache memorial, and her <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>powerful images</strong></a> appear on German postage stamps.` }
    ]
  },

  "george-bellows": {
    faqs: [
      { question: "What art movement was George Bellows part of?", answer: `Bellows was the leading figure of the second generation Ashcan School, the American artists who painted contemporary urban life with unflinching realism. Though never an official member of "The Eight" who launched the movement in 1908, his powerful depictions of tenements, boxing matches, and street life embodied their democratic vision more vividly than any contemporary.` },
      { question: "Where can I see George Bellows's paintings?", answer: `The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> holds major works including Dempsey and Firpo. The Cleveland Museum of Art owns the famous Stag at Sharkey's, while the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington displays Pennsylvania Station Excavation.` },
      { question: "What is George Bellows most famous for?", answer: `His boxing paintings remain his most celebrated achievement, capturing the raw brutality and primal energy of early twentieth-century prizefighting. Stag at Sharkey's (1909) and Dempsey and Firpo (1924) depict fighters as modern gladiators, their straining muscles illuminated against the darkness of illegal athletic clubs.` },
      { question: "What was Stag at Sharkey's about?", answer: `The painting shows an illegal boxing bout at Tom Sharkey's Athletic Club near Bellows's New York studio. After public prizefighting was banned in 1900, these private clubs sold memberships so patrons could legally bet on matches. "Stag" referred to the all-male audience crowding around the ring in their evening clothes.` },
      { question: "Who taught George Bellows?", answer: `Robert Henri, one of America's most influential art teachers, shaped Bellows's artistic vision after they met in New York in 1904. Henri's philosophy of painting American life honestly and his emphasis on capturing the vitality of the everyday world became the foundation of Bellows's mature style.` },
      { question: "Did George Bellows play professional sports?", answer: `Bellows nearly became a professional baseball player while at Ohio State University, where his athletic talents attracted scouts. He chose art instead, moving to New York in 1904, but his love of physical competition infused his work with kinetic energy. His <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>dynamic figures</strong></a> reveal an athlete's eye for human movement.` }
    ]
  },

  "guercino": {
    faqs: [
      { question: "What art movement was Guercino part of?", answer: `Guercino was a major figure of Italian <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting, sometimes credited as the first artist to paint in a fully developed Baroque style. His dramatic chiaroscuro, rich colors, and emotional intensity helped define the visual language of seventeenth-century religious art throughout Catholic Europe.` },
      { question: "Where can I see Guercino's paintings?", answer: `His masterpiece Aurora fresco remains in Rome's Casino Ludovisi (viewable by appointment). The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> holds several major canvases, while the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum</strong></a>, National Gallery London, and Prado display important works from his prolific career.` },
      { question: "What does Guercino's name mean?", answer: `"Guercino" means "The Squinting One" in Italian, a nickname derived from a childhood eye condition that left him cross-eyed. Born Giovanni Francesco Barbieri in the small town of Cento near Ferrara, he was largely self-taught, developing his distinctive style through studying prints and paintings rather than formal academy training.` },
      { question: "What is Guercino's most famous fresco?", answer: `His Aurora fresco (1621-1623) on the ceiling of the Casino Ludovisi in Rome depicts the goddess Dawn racing across the sky in her chariot. The revolutionary illusionistic composition makes the ceiling appear to open directly onto the heavens, with figures seeming to hover overhead. It influenced ceiling painters for generations.` },
      { question: "Who influenced Guercino's style?", answer: `Ludovico Carracci's dramatic compositions shaped his early development in Bologna. A pivotal 1618 trip to Venice introduced him to Titian's and Veronese's velvety color harmonies, which softened his palette. After 1642, he adopted a lighter, more classical manner following Guido Reni's influence in Bologna.` },
      { question: "How prolific was Guercino?", answer: `Extraordinarily prolific throughout his career, Guercino completed 106 large altarpieces and approximately 144 other paintings for churches, palaces, and private collectors. He was equally accomplished as a draftsman, producing thousands of drawings that document his creative process. His <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>vibrant works</strong></a> filled collections across Europe.` }
    ]
  },

  "jules-breton": {
    faqs: [
      { question: "What art movement was Jules Breton part of?", answer: `Breton worked within the <a href="/apps/masterpieces/movement/academic-art"><strong>Academic Art</strong></a> tradition, but revolutionized it by treating peasant subjects with the dignity and nobility traditionally reserved for classical heroes. His technically masterful paintings bridged Realism's social subjects with Academic polish, making rural life acceptable to bourgeois collectors.` },
      { question: "Where can I see Jules Breton's paintings?", answer: `His beloved Song of the Lark hangs at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, where it has been among the most popular paintings since its 1894 acquisition. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> and major French provincial museums also hold significant works.` },
      { question: "What is Jules Breton's most famous painting?", answer: `Song of the Lark (1884) shows a peasant girl pausing at dawn, her face illuminated by early light as a lark sings overhead. Eleanor Roosevelt named it her favorite painting when it was voted "America's most beloved work of art" at the 1934 Chicago World's Fair, cementing its iconic status.` },
      { question: "What subjects did Jules Breton paint?", answer: `Breton devoted his career to depicting <a href="https://luxurywallart.com/collections/country-farm-paintings" target="_blank" rel="noopener"><strong>rural peasant life</strong></a> in France's Artois region, where he was born. His subjects divide into four categories: field labor during harvests, moments of rest, secular rural festivals like village dances, and religious processions and ceremonies.` },
      { question: "How did Breton differ from Jean-François Millet?", answer: `While both painted peasant life, their approaches diverged sharply. Millet depicted rural hardship with unflinching grittiness, showing bent backs and exhausted bodies. Breton idealized his subjects with graceful poses and golden light, presenting peasants as noble figures worthy of classical treatment, which made his work more commercially successful.` },
      { question: "Was Jules Breton successful during his lifetime?", answer: `Breton achieved remarkable fame in France, England, and the United States during his lifetime. He was elected to the Académie des Beaux-Arts in 1886, received the Legion of Honor's Grand Cross, and commanded prices that rivaled the Impressionists. Vincent van Gogh walked from Paris to Courrières hoping to meet him.` }
    ]
  },

  "jules-bastien-lepage": {
    faqs: [
      { question: "What art movement was Jules Bastien-Lepage part of?", answer: `Bastien-Lepage led the French Naturalist movement, creating a crucial bridge between <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>'s luminous outdoor painting and Realism's social consciousness. Émile Zola famously called his approach "impressionism corrected, sweetened and adapted to the taste of the crowd," capturing both its popular appeal and artistic compromise.` },
      { question: "Where can I see Jules Bastien-Lepage's paintings?", answer: `His masterwork Haymaking (Les Foins) hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> displays his famous Joan of Arc, while the National Gallery in London holds significant examples of his naturalist portraits and rural scenes.` },
      { question: "What subjects did Jules Bastien-Lepage paint?", answer: `He specialized in peasant scenes painted en plein air, showing rural workers in their actual environments with unprecedented immediacy. His famous Potato Gatherers and Haymaking depict the exhaustion of agricultural labor. He also painted society <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a>, including a celebrated likeness of actress Sarah Bernhardt.` },
      { question: "Why is Jules Bastien-Lepage's Joan of Arc famous?", answer: `Rather than depicting Joan in armor or at her trial, Bastien-Lepage shows her as a barefoot peasant girl in her parents' garden, gazing at a vision of Saints Michael, Margaret, and Catherine. This radical humanization broke with centuries of heroic convention, proving controversial with critics but hugely popular with the public.` },
      { question: "Who did Jules Bastien-Lepage influence?", answer: `His plein-air naturalism shaped an entire international generation. The Glasgow Boys, including James Guthrie and John Lavery, made pilgrimages to study with him. Australian painter Tom Roberts brought his methods to Melbourne, while American artists like Theodore Robinson absorbed his approach to rural subjects.` },
      { question: "How did Jules Bastien-Lepage die?", answer: `He died of testicular cancer on December 10, 1884, just thirty-six years old. Despite his tragically brief career of barely a decade, he had already earned the Legion of Honor at age thirty-one and achieved fame comparable to Manet. His funeral drew enormous crowds of mourning artists and admirers.` }
    ]
  },

  "pieter-claesz": {
    faqs: [
      { question: "What was Pieter Claesz known for painting?", answer: `Claesz specialized in two types of still life: "ontbijtjes" (breakfast pieces) showing simple meals of bread, cheese, and herring; and vanitas paintings featuring skulls, snuffed candles, and overturned glasses symbolizing mortality. His ability to capture light on different surfaces, from pewter to glass to linen, was unsurpassed among his contemporaries.` },
      { question: "Where can I see Pieter Claesz's paintings?", answer: `The <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam holds several fine examples of his work. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, Frans Hals Museum in Haarlem, and National Gallery of Art in Washington also display his meticulously observed breakfast and vanitas paintings.` },
      { question: "What art movement was Pieter Claesz part of?", answer: `Claesz was a leading painter of the <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, specifically the Haarlem school of monochrome still life painting. Together with Willem Claesz Heda, he developed the distinctive Dutch "banketje" (banquet piece) tradition that influenced generations of still life painters across Europe.` },
      { question: "What is a vanitas painting?", answer: `Vanitas paintings incorporate symbols of mortality and life's transience: skulls, extinguished candles, wilting flowers, overturned glasses, and decaying fruit. Derived from Ecclesiastes' "vanity of vanities," these works remind viewers that earthly pleasures, wealth, and beauty are temporary. Claesz's vanitas works achieve this message with austere elegance.` },
      { question: "What technique did Pieter Claesz use?", answer: `Claesz worked in a restrained monochrome palette of browns, grays, and olive tones, known as "monochrome banketje" style. His genius lay in subtle tonal gradations that distinguished different textures: the dull gleam of pewter, the transparency of glass, the soft folds of linen, all rendered with delicate precision.` },
      { question: "Was Pieter Claesz related to other artists?", answer: `His son Nicolaes Berchem (1620-1683) became one of the most celebrated <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape painters</strong></a> of the Dutch Golden Age, known for Italianate pastoral scenes. The family name "Berchem" derived from their ancestral hometown near Antwerp, which Nicolaes adopted to distinguish himself.` }
    ]
  },

  "august-macke": {
    faqs: [
      { question: "What art movement was August Macke part of?", answer: `Macke was a founding member of <a href="/apps/masterpieces/movement/expressionism"><strong>Der Blaue Reiter</strong></a> (The Blue Rider) in Munich in 1911, alongside Wassily Kandinsky and Franz Marc. Though classified as an Expressionist, his work was distinctly more joyful and colorful than the psychological intensity typical of German Expressionism.` },
      { question: "Where can I see August Macke's paintings?", answer: `The Lenbachhaus in Munich holds major Blue Rider works, while the August-Macke-Haus in Bonn, his former residence, is now a museum dedicated to his life and art. The <a href="/apps/masterpieces/museum/moma"><strong>Museum of Modern Art</strong></a> in New York and other international collections display his vibrant canvases.` },
      { question: "What subjects did August Macke paint?", answer: `Unlike fellow Expressionists who favored psychological or spiritual subjects, Macke painted cheerful scenes of everyday bourgeois life: <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>people</strong></a> strolling in parks, women window-shopping, children playing, and couples in gardens. His optimistic vision of modern life radiates joy and harmony.` },
      { question: "How did August Macke die?", answer: `Macke was killed in action at Perthes-lès-Hurlus in the Champagne region of France on September 26, 1914, just seven weeks after World War I began. He was twenty-seven years old. His death, alongside Franz Marc's two years later, devastated the Blue Rider circle.` },
      { question: "What was August Macke's Tunisia trip?", answer: `In April 1914, Macke traveled to Tunisia with Paul Klee and Louis Moilliet for two transformative weeks. The brilliant North African light inspired approximately forty watercolors of Tunisian architecture, markets, and gardens. Klee later called it the trip where "color possessed me." These radiant works rank among Macke's finest.` },
      { question: "Who influenced August Macke's style?", answer: `Impressionism introduced him to painting light, while Matisse and the Fauves liberated his use of <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>bold color</strong></a>. Robert Delaunay's Orphism, with its prismatic light fragmentation, proved the decisive influence, inspiring his characteristic rainbow-hued compositions of figures in sunlit settings.` }
    ]
  }
};

async function main() {
  console.log("Expanding FAQs for batch 1 (13 artists)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artistUpdates)) {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    if (artist) {
      await prisma.artist.update({
        where: { slug },
        data: {
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Expanded FAQs: ${artist.name}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nExpanded FAQs for ${updated} artists in batch 1`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
