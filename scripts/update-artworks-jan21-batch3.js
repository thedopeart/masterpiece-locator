const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'gustave-caillebotte-study-for-le-pont-de-l39europe',
    description: `<p><a href="/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this preparatory study around 1876 for his larger masterpiece depicting the Pont de l'Europe, an iron bridge spanning the railway tracks near Gare Saint-Lazare. The composition captures modern Paris during the Haussmann renovations, with <strong>geometric steel girders</strong> creating dramatic diagonal perspectives.</p>
<p>Caillebotte was fascinated by urban engineering and bourgeois street life. Unlike his <a href="/movement/impressionism"><strong>Impressionist</strong></a> colleagues who favored soft brushwork, he employed a sharper, more photographic approach. This study hangs at the <a href="/museum/petit-palais"><strong>Petit Palais</strong></a> in Paris, while the finished painting resides in Geneva.</p>`,
    faqs: [
      { question: "Where is this study displayed?", answer: `The painting hangs at the <a href="/museum/petit-palais"><strong>Petit Palais</strong></a> in Paris. The larger finished version of Le Pont de l'Europe is at the Musée d'art et d'histoire in Geneva.` },
      { question: "What does Le Pont de l'Europe depict?", answer: `The bridge spans the <strong>railway tracks near Gare Saint-Lazare</strong> in Paris. <a href="/artist/gustave-caillebotte"><strong>Caillebotte</strong></a> captured the modern iron architecture that symbolized industrial progress in 1870s Paris.` },
      { question: "What art movement was Caillebotte part of?", answer: `<a href="/artist/gustave-caillebotte"><strong>Caillebotte</strong></a> exhibited with the <a href="/movement/impressionism"><strong>Impressionists</strong></a>, though his crisp, photographic style set him apart. He also financially supported fellow artists like Monet and Renoir.` }
    ]
  },
  {
    slug: 'rembrandt-the-strolling-musicians',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> etched this intimate scene around 1635, depicting itinerant street musicians performing for a peasant family. An old man cranks a <strong>hurdy-gurdy</strong> while his younger companion plays bagpipes. A small child grins with delight, while a little dog huddles in fear at the unfamiliar sounds.</p>
<p>Early in his career, Rembrandt made numerous prints of beggars, vagabonds, and street performers, showing remarkable sympathy for society's margins. The etching measures just 14 x 12 cm but contains extraordinary detail. Impressions exist at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the Art Institute of Chicago, and the Cleveland Museum of Art.</p>`,
    faqs: [
      { question: "What instruments are depicted?", answer: `The older musician plays a <strong>hurdy-gurdy</strong>, a mechanical string instrument, while his companion plays bagpipes. Both instruments were associated with itinerant beggars and street performers in the 17th century.` },
      { question: "Where can I see this etching?", answer: `Multiple impressions exist in major museums including the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, the Art Institute of Chicago, and the Cleveland Museum of Art.` },
      { question: "When did Rembrandt create this?", answer: `<a href="/artist/rembrandt"><strong>Rembrandt</strong></a> etched this around 1635, during a period when he made many prints depicting <strong>beggars and street performers</strong> with notable sympathy and humanity.` }
    ]
  },
  {
    slug: 'gustave-courbet-la-bacchante',
    description: `<p><a href="/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this sensuous reclining nude between 1844 and 1847, early in his career. The subject is a <strong>Bacchante</strong>, a follower of Bacchus, the god of wine, depicted in languid repose amid a natural setting. Courbet's thick brushwork and rich color palette bring warmth to the flesh tones.</p>
<p>The painting sparked controversy when exhibited at the Salon, with critics divided between admiration and scandal. Courbet would become the leading figure of <a href="/movement/realism"><strong>Realism</strong></a>, rejecting idealized academic painting in favor of unvarnished truth. This early mythological subject hints at the boldness he would later bring to contemporary scenes.</p>`,
    faqs: [
      { question: "What is a Bacchante?", answer: `A Bacchante is a <strong>female follower of Bacchus</strong>, the Roman god of wine and revelry. These figures appear frequently in classical art, often depicted in states of ecstatic abandon or sensuous repose.` },
      { question: "What art movement is Courbet associated with?", answer: `<a href="/artist/gustave-courbet"><strong>Courbet</strong></a> became the leading figure of <a href="/movement/realism"><strong>Realism</strong></a>, though this early mythological work predates his most radical peasant and working-class subjects.` },
      { question: "Where is La Bacchante displayed?", answer: `The painting is currently held in a <strong>private collection</strong>. Courbet's major works are at the Musée d'Orsay and the Musée Courbet in Ornans.` }
    ]
  },
  {
    slug: 'juan-gris-the-watch-the-sherry-bottle',
    description: `<p><a href="/artist/juan-gris"><strong>Juan Gris</strong></a> painted this still life in 1912, during the height of <a href="/movement/cubism"><strong>Analytical Cubism</strong></a>. A watch and sherry bottle fragment into geometric planes, their forms simultaneously viewed from multiple angles. The muted <strong>browns, grays, and ochres</strong> typical of early Cubism unify the composition.</p>
<p>Gris arrived in Paris in 1906 and quickly joined Picasso and Braque in developing Cubist techniques. Unlike his colleagues' more intuitive approach, Gris brought mathematical precision to his work. This painting demonstrates his mastery of breaking down familiar objects into abstract yet recognizable forms.</p>`,
    faqs: [
      { question: "What style is this painting?", answer: `This is an <a href="/movement/cubism"><strong>Analytical Cubist</strong></a> work from 1912. <a href="/artist/juan-gris"><strong>Gris</strong></a> fragments objects into geometric planes while maintaining their recognizability through carefully controlled color and form.` },
      { question: "Who were the major Cubist painters?", answer: `<a href="/artist/juan-gris"><strong>Juan Gris</strong></a> worked alongside <strong>Pablo Picasso and Georges Braque</strong>, the founders of Cubism. Gris brought a more methodical, mathematical approach to the movement.` },
      { question: "Where is this painting?", answer: `The painting is in a <strong>private collection</strong>. Major works by Gris can be found at the Museo Reina Sofía in Madrid and the Centre Pompidou in Paris.` }
    ]
  },
  {
    slug: 'jules-bastien-lepage-hay-making',
    description: `<p><a href="/artist/jules-bastien-lepage"><strong>Jules Bastien-Lepage</strong></a> painted this monumental rural scene in 1877, depicting exhausted peasants during the hay harvest. A young woman sits in the foreground, her face <strong>haggard with weariness</strong>, staring vacantly ahead. Behind her, her companion lies flat on his back, completely spent.</p>
<p>Émile Zola called it "the masterpiece of <a href="/movement/realism"><strong>Naturalism</strong></a> in painting." The composition is daringly photographic: the high horizon lets hay fill most of the canvas while close framing brings viewers face-to-face with rural labor. The model was the artist's cousin. Now at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>`,
    faqs: [
      { question: "Where is Hay Making displayed?", answer: `The painting hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. It measures 180 x 195 cm, making it a monumental statement of French <a href="/movement/realism"><strong>Naturalism</strong></a>.` },
      { question: "What movement does this painting represent?", answer: `Émile Zola called it "the masterpiece of <a href="/movement/realism"><strong>Naturalism</strong></a>." <a href="/artist/jules-bastien-lepage"><strong>Bastien-Lepage</strong></a> depicted rural labor with unflinching realism rather than pastoral idealization.` },
      { question: "Who modeled for this painting?", answer: `The exhausted young woman was <a href="/artist/jules-bastien-lepage"><strong>Bastien-Lepage's</strong></a> cousin, <strong>Marie-Adéle Robert</strong>. She also appeared in his painting "Potato Gatherers."` }
    ]
  },
  {
    slug: 'gustave-moreau-saint-george-after-vittore-carpaccio',
    description: `<p><a href="/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> created this watercolor in 1858 while studying in Venice, copying Vittore Carpaccio's Renaissance masterpiece. The young painter was enchanted by Carpaccio's narrative cycles in the <strong>Scuola di San Giorgio degli Schiavoni</strong>, producing numerous copies to absorb the Italian master's techniques.</p>
<p>This study shows Moreau before he developed his distinctive <a href="/movement/symbolism"><strong>Symbolist</strong></a> style. He traveled Italy from 1857 to 1859, visiting Rome, Milan, Venice, and Naples. The copy now hangs at the <a href="/museum/musee-gustave-moreau"><strong>Musée Gustave Moreau</strong></a> in Paris, his former home and studio.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: `The watercolor hangs at the <a href="/museum/musee-gustave-moreau"><strong>Musée Gustave Moreau</strong></a> in Paris, the artist's former home and studio that preserves thousands of his works.` },
      { question: "Why did Moreau copy Carpaccio?", answer: `<a href="/artist/gustave-moreau"><strong>Moreau</strong></a> traveled to Italy (1857-1859) to complete his artistic training. He was captivated by <strong>Carpaccio's narrative paintings</strong> in Venice and made numerous copies.` },
      { question: "What movement is Moreau associated with?", answer: `Moreau later became a leading <a href="/movement/symbolism"><strong>Symbolist</strong></a> painter. This early copy predates his mature mystical style but shows his dedication to studying Renaissance masters.` }
    ]
  },
  {
    slug: 'kathe-kollwitz-outbreak',
    description: `<p><a href="/artist/kathe-kollwitz"><strong>Käthe Kollwitz</strong></a> created this powerful etching in 1903 as part of her Peasants' War series. The central figure, known as <strong>Black Anna</strong>, faces away from the viewer, arms raised, propelling a surge of rebels forward. Her body tilts with the force of revolutionary momentum.</p>
<p>The series depicts the German peasant uprising of 1522-25. Kollwitz chose to show the woman from behind, universalizing her as a symbol of righteous anger. This print won the Villa Romana Prize, funding a year's stay in Florence. It exemplifies <a href="/movement/expressionism"><strong>Expressionist</strong></a> printmaking at its most emotionally powerful.</p>`,
    faqs: [
      { question: "What does Outbreak depict?", answer: `The print shows <strong>"Black Anna"</strong> leading peasants into revolt during the German Peasants' War (1522-25). <a href="/artist/kathe-kollwitz"><strong>Kollwitz</strong></a> positioned her facing away, making her a universal symbol of uprising.` },
      { question: "What technique did Kollwitz use?", answer: `This is an <strong>etching with drypoint and aquatint</strong>, not a woodcut. <a href="/artist/kathe-kollwitz"><strong>Kollwitz</strong></a> created the entire Peasants' War series using various intaglio printmaking techniques.` },
      { question: "What recognition did this print receive?", answer: `"Outbreak" won the <strong>Villa Romana Prize</strong>, which provided <a href="/artist/kathe-kollwitz"><strong>Kollwitz</strong></a> a year's stay in Florence in 1907. It remains her most celebrated print.` }
    ]
  },
  {
    slug: 'thomas-cole-summer-twilight',
    description: `<p><a href="/artist/thomas-cole"><strong>Thomas Cole</strong></a>, founder of the <strong>Hudson River School</strong>, painted this luminous New England scene in 1834. A pastoral landscape glows with benign sunset light, homesteads nestled comfortably among mountains, water, and sky. An ax-hewn stump at lower left hints at the coming of European settlement.</p>
<p>Cole painted this alongside its companion, <em>Autumn Twilight</em>, while developing his monumental series <em>The Course of Empire</em>. Both smaller paintings preview that series' themes of civilization's rise and fall, placed in an American context. The painting belongs to the <a href="/museum/new-york-historical-society"><strong>New-York Historical Society</strong></a>.</p>`,
    faqs: [
      { question: "Where is Summer Twilight displayed?", answer: `The painting belongs to the <a href="/museum/new-york-historical-society"><strong>New-York Historical Society</strong></a>. Cole exhibited it alongside its companion <em>Autumn Twilight</em> at the National Academy of Design in 1834.` },
      { question: "What art movement did Cole found?", answer: `<a href="/artist/thomas-cole"><strong>Cole</strong></a> founded the <strong>Hudson River School</strong>, the first American art movement. These Romantic painters celebrated the American wilderness as a source of spiritual and national identity.` },
      { question: "What is the painting's symbolism?", answer: `An <strong>ax-hewn stump</strong> at lower left signals European settlement. Man and nature exist in harmony here, but Cole's larger <em>Course of Empire</em> series would explore civilization's eventual decline.` }
    ]
  },
  {
    slug: 'henri-toulouse-lautrec-tethered-horse',
    description: `<p><a href="/artist/henri-de-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> painted this early work around 1881, when he was just seventeen. A <strong>horse stands tethered</strong> in what appears to be a stable or rural setting, rendered with the loose brushwork that would characterize his mature style. The young artist had a lifelong passion for horses.</p>
<p>Before becoming famous for his Parisian nightlife scenes, Toulouse-Lautrec frequently painted equestrian subjects. His aristocratic family bred horses, and he learned to ride before childhood accidents stunted his legs. This early work shows <a href="/movement/impressionism"><strong>Impressionist</strong></a> influence before he developed his distinctive graphic style.</p>`,
    faqs: [
      { question: "When did Toulouse-Lautrec paint this?", answer: `<a href="/artist/henri-de-toulouse-lautrec"><strong>Toulouse-Lautrec</strong></a> painted this around 1881, when he was approximately seventeen. It represents his <strong>early period</strong> before he focused on Parisian entertainment venues.` },
      { question: "Why did Toulouse-Lautrec paint horses?", answer: `His aristocratic family bred horses, and he learned to ride before childhood accidents stunted his leg growth. <strong>Equestrian subjects</strong> remained important throughout his early career.` },
      { question: "Where is this painting?", answer: `The painting is in a <strong>private collection</strong>. Major works by <a href="/artist/henri-de-toulouse-lautrec"><strong>Toulouse-Lautrec</strong></a> are at the Musée Toulouse-Lautrec in Albi and the Musée d'Orsay in Paris.` }
    ]
  },
  {
    slug: 'konstantin-korovin-on-deck',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this marine scene in 1880, capturing life aboard a ship. Figures gather on deck as <strong>light plays across the wooden planks and rigging</strong>. The loose brushwork and attention to atmospheric effects reveal his emerging Impressionist sensibility.</p>
<p>Korovin became one of the leading figures of Russian Impressionism, known for his vibrant use of color and light. This early work dates from his student years at the Moscow School of Painting. He would later design sets for the Bolshoi Theatre and the Paris World's Fair.</p>`,
    faqs: [
      { question: "What style is Korovin associated with?", answer: `<a href="/artist/konstantin-korovin"><strong>Korovin</strong></a> was a leading figure of <strong>Russian Impressionism</strong>, known for his vibrant color and sensitivity to light. Some called him "the Russian Renoir."` },
      { question: "When was this painted?", answer: `Korovin painted "On Deck" in 1880, during his <strong>student years</strong> at the Moscow School of Painting. It shows his early interest in capturing light and atmosphere.` },
      { question: "What other work did Korovin do?", answer: `Besides easel painting, <a href="/artist/konstantin-korovin"><strong>Korovin</strong></a> became famous as a <strong>theatrical designer</strong> for the Bolshoi Theatre and created pavilions for the 1900 Paris World's Fair.` }
    ]
  },
  {
    slug: 'konstantin-korovin-on-the-road',
    description: `<p><a href="/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this atmospheric <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> showing travelers on a country road. His characteristic loose brushwork captures the <strong>fleeting effects of light</strong> on the Russian countryside, with figures rendered as impressions rather than detailed portraits.</p>
<p>Korovin traveled extensively through Russia, painting scenes of rural life and northern landscapes. His work bridged Russian Realism and French Impressionism, bringing Western techniques to traditional Russian subjects. He became influential as both a painter and a teacher at the Moscow School of Painting.</p>`,
    faqs: [
      { question: "What subjects did Korovin paint?", answer: `<a href="/artist/konstantin-korovin"><strong>Korovin</strong></a> painted Russian <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, northern scenes, Parisian streets, and theatrical designs. He traveled extensively, capturing diverse subjects with Impressionist techniques.` },
      { question: "What is Korovin's artistic style?", answer: `He bridged <strong>Russian Realism and French Impressionism</strong>, applying loose brushwork and vibrant color to traditional Russian subjects. Critics noted his exceptional sensitivity to light.` },
      { question: "Where can I see Korovin's work?", answer: `Major collections are at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow and the State Russian Museum in Saint Petersburg.` }
    ]
  },
  {
    slug: 'henri-fantin-latour-narcissus-and-tulips',
    description: `<p><a href="/artist/henri-fantin-latour"><strong>Henri Fantin-Latour</strong></a> painted this delicate still life in 1862, arranging <strong>white narcissus and red tulips</strong> in a simple pottery vase against a neutral background. His meticulous technique captures each petal's texture while soft lighting unifies the composition.</p>
<p>Though he befriended the future Impressionists, Fantin-Latour maintained a classical approach to <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flower painting</strong></a>. His still lifes sold particularly well in England, where Whistler promoted his work. He produced hundreds of floral compositions throughout his career, establishing himself as one of the finest flower painters of his era.</p>`,
    faqs: [
      { question: "What was Fantin-Latour known for?", answer: `<a href="/artist/henri-fantin-latour"><strong>Fantin-Latour</strong></a> was famous for his <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flower paintings</strong></a> and group portraits of Parisian artists. His still lifes sold especially well in England, where Whistler championed his work.` },
      { question: "Did Fantin-Latour paint like the Impressionists?", answer: `Though friends with Manet and Whistler, he maintained a <strong>classical, conservative style</strong>. His careful technique contrasts with the loose brushwork of his Impressionist contemporaries.` },
      { question: "When was this painted?", answer: `Fantin-Latour created this in <strong>1862</strong>, producing several other flower paintings and still lifes during the same year, including "Autumn Bouquet" and "Flowers, Camelias and Tulips."` }
    ]
  },
  {
    slug: 'hieronymus-bosch-the160temptation160of-eve160by-the160serpent',
    description: `<p><a href="/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> created this small study around 1485-1490, depicting the biblical moment when the serpent tempts Eve in the Garden of Eden. Two human figures stand near a tree where the <strong>serpent coils</strong>, offering forbidden fruit. The sketch exemplifies Bosch's fascination with sin and temptation.</p>
<p>This work belongs to Bosch's <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> period, though his fantastical imagery stands apart from his contemporaries. The drawing shows his meticulous attention to detail even in preparatory works. It now resides at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "Where is this work displayed?", answer: `The sketch is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York. It dates to around 1485-1490, from <a href="/artist/hieronymus-bosch"><strong>Bosch's</strong></a> mature period.` },
      { question: "What biblical scene does this depict?", answer: `The work shows <strong>Eve's temptation by the serpent</strong> in the Garden of Eden (Genesis 3). Bosch frequently explored themes of sin, temptation, and moral consequence throughout his career.` },
      { question: "What movement was Bosch part of?", answer: `<a href="/artist/hieronymus-bosch"><strong>Bosch</strong></a> worked during the <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>, though his fantastical, moralizing imagery has no direct parallel among his contemporaries.` }
    ]
  },
  {
    slug: 'leonardo-da-vinci-woman39s-head',
    description: `<p><a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> created this haunting study around 1508, known as "La Scapigliata" (The Lady of the Disheveled Hair). A young woman's face emerges from an unfinished background, her <strong>softly modeled features</strong> contrasting with wild, sketchy hair. The work blurs the line between drawing and painting.</p>
<p>Leonardo used earth pigments and white lead on a small wooden panel, creating a study that demonstrates his sfumato technique. The deliberate contrast between finished face and unfinished hair may have been intentional, showcasing his artistic process. The painting is now at the <a href="/museum/galleria-nazionale-di-parma"><strong>Galleria Nazionale di Parma</strong></a>.</p>`,
    faqs: [
      { question: "Where is La Scapigliata displayed?", answer: `The painting is at the <a href="/museum/galleria-nazionale-di-parma"><strong>Galleria Nazionale di Parma</strong></a> in Italy. It measures just 24.7 x 21 cm, making it one of <a href="/artist/leonardo-da-vinci"><strong>Leonardo's</strong></a> most intimate works.` },
      { question: "What does 'La Scapigliata' mean?", answer: `The Italian title means <strong>"The Lady of the Disheveled Hair"</strong> or "The Tousled One." It refers to the contrast between the finished face and the wild, sketchy rendering of her hair.` },
      { question: "Is this painting finished?", answer: `The work appears deliberately <strong>unfinished</strong>, with the face fully modeled but hair and background merely sketched. This may have been intentional, demonstrating <a href="/artist/leonardo-da-vinci"><strong>Leonardo's</strong></a> working process.` }
    ]
  },
  {
    slug: 'jacob-jordaens-the-daughters-of-cecrops-finding-the-child-erichth',
    description: `<p><a href="/artist/jacob-jordaens"><strong>Jacob Jordaens</strong></a> painted this mythological scene in 1640, depicting the daughters of the Athenian king Cecrops discovering the infant Erichthonius. According to Greek myth, Athena had hidden the <strong>half-serpent child</strong> in a basket with strict orders not to look inside. The sisters disobeyed and went mad at the sight.</p>
<p>Jordaens was a leading Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> painter who worked alongside Rubens. His robust figures and earthy palette distinguish his mythological subjects from Rubens' more elegant approach. The dramatic moment of forbidden discovery suited Baroque taste for theatrical narratives.</p>`,
    faqs: [
      { question: "What myth does this painting depict?", answer: `The daughters of King Cecrops discover <strong>the infant Erichthonius</strong>, hidden by Athena in a basket. When they disobeyed orders and opened it, the sight of the half-serpent child drove them mad.` },
      { question: "Who was Jacob Jordaens?", answer: `<a href="/artist/jacob-jordaens"><strong>Jordaens</strong></a> was a leading Flemish <a href="/movement/baroque"><strong>Baroque</strong></a> painter who worked alongside Rubens. His earthy, robust style distinguished him from his more elegant colleague.` },
      { question: "Did other artists paint this subject?", answer: `Yes, <strong>Peter Paul Rubens</strong> also painted this rarely depicted myth. Both Flemish masters were drawn to dramatic mythological narratives involving discovery and transgression.` }
    ]
  },
  {
    slug: 'lorenzo-lotto-st-dominic-polyptych',
    description: `<p><a href="/artist/lorenzo-lotto"><strong>Lorenzo Lotto</strong></a> painted this altarpiece around 1506-1508 for the Dominican church in Recanati. The central panel shows the <strong>Madonna enthroned</strong> receiving Saint Dominic, while flanking panels depict Saints Blaise, Bartholomew, Anthony Abbot, and Julian. Two small angels near Dominic appear startled by the saint's presence.</p>
<p>The polyptych format was old-fashioned by 1506, likely chosen by the Dominican friars. Lotto unified the separate panels through a continuous architectural setting with coffered vaults and Byzantine-style mosaics. The work remains at the <strong>Pinacoteca Comunale in Recanati</strong>, demonstrating <a href="/movement/renaissance"><strong>High Renaissance</strong></a> mastery of perspective.</p>`,
    faqs: [
      { question: "Where is the St. Dominic Polyptych?", answer: `The altarpiece remains at the <strong>Pinacoteca Comunale in Recanati</strong>, Italy, near where <a href="/artist/lorenzo-lotto"><strong>Lotto</strong></a> created it for the Dominican church around 1506-1508.` },
      { question: "What is a polyptych?", answer: `A <strong>polyptych</strong> is a multi-panel altarpiece. This format was considered old-fashioned by 1506, but <a href="/artist/lorenzo-lotto"><strong>Lotto</strong></a> unified the panels through continuous architecture and perspective.` },
      { question: "What movement is this associated with?", answer: `The painting exemplifies the <a href="/movement/renaissance"><strong>High Renaissance</strong></a> Venetian school. <a href="/artist/lorenzo-lotto"><strong>Lotto</strong></a> was influenced by Giovanni Bellini and shows mastery of geometric perspective.` }
    ]
  },
  {
    slug: 'lovis-corinth-in-the-slaughter-house',
    description: `<p><a href="/artist/lovis-corinth"><strong>Lovis Corinth</strong></a> painted this visceral scene in 1893, depicting workers in a <strong>slaughterhouse</strong> amid hanging carcasses. Raw flesh dominates the canvas with unflinching realism, the butchers going about their grim work with matter-of-fact efficiency. The painting confronts viewers with industrial death.</p>
<p>Corinth would later become a leading German <a href="/movement/expressionism"><strong>Expressionist</strong></a>, but this early work shows his grounding in naturalistic observation. The slaughterhouse became an enduring motif in modern art, from Corinth to Chaim Soutine. The painting hangs at the <a href="/museum/staatsgalerie-stuttgart"><strong>Staatsgalerie Stuttgart</strong></a>.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: `The painting hangs at the <a href="/museum/staatsgalerie-stuttgart"><strong>Staatsgalerie Stuttgart</strong></a> in Germany. It represents <a href="/artist/lovis-corinth"><strong>Corinth's</strong></a> early naturalistic phase before his turn toward Expressionism.` },
      { question: "What art movement was Corinth part of?", answer: `<a href="/artist/lovis-corinth"><strong>Corinth</strong></a> later became a leading German <a href="/movement/expressionism"><strong>Expressionist</strong></a>. This 1893 painting shows his earlier naturalistic style, influenced by French Realism.` },
      { question: "Why paint a slaughterhouse?", answer: `The <strong>slaughterhouse</strong> became an important subject in modern art, confronting viewers with industrial death and the body as meat. Later artists like Chaim Soutine would explore similar themes.` }
    ]
  },
  {
    slug: 'luca-signorelli-the-conversion-of-paul',
    description: `<p><a href="/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> painted this fresco between 1477 and 1482 for the Basilica della Santa Casa in Loreto. The scene captures the moment when <strong>Saul falls from his horse</strong>, struck blind by divine light on the road to Damascus. Surrounding figures react with amazement as the future apostle experiences his transformative vision.</p>
<p>Pope Sixtus IV commissioned the work. Signorelli used dramatic chiaroscuro to emphasize the supernatural event, with precisely drawn figures demonstrating his training under Piero della Francesca. The fresco measures 238 x 200 cm and remains in its original location in the <a href="/movement/renaissance"><strong>Renaissance</strong></a> shrine.</p>`,
    faqs: [
      { question: "Where is this fresco located?", answer: `The fresco remains at the <strong>Basilica della Santa Casa in Loreto</strong>, Italy, where <a href="/artist/luca-signorelli"><strong>Signorelli</strong></a> painted it between 1477-1482 under commission from Pope Sixtus IV.` },
      { question: "What biblical event is depicted?", answer: `The painting shows <strong>Saul's conversion on the road to Damascus</strong> (Acts 9). Struck blind by divine light, he fell from his horse and later became the apostle Paul.` },
      { question: "Who trained Luca Signorelli?", answer: `According to Vasari, <a href="/artist/luca-signorelli"><strong>Signorelli</strong></a> trained under <strong>Piero della Francesca</strong>, whose influence shows in the precise draftsmanship and geometric clarity of this <a href="/movement/renaissance"><strong>Renaissance</strong></a> fresco.` }
    ]
  },
  {
    slug: 'mary-cassatt-offering-the-panel-to-the-bullfighter',
    description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this Spanish scene during an extended stay in Seville in 1872-1873. A young woman offers a <strong>glass of water with honeycomb</strong> to a bullfighter in his glittering traje de luces (suit of lights). The intimate moment captures a flirtatious exchange in the shadows of the bullring.</p>
<p>Before becoming known for mother-and-child subjects, Cassatt painted genre scenes from her European travels. Her confident brushwork captures the textures of lace, embroidery, and sequins. The painting hangs at the <a href="/museum/clark-art-institute"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts.</p>`,
    faqs: [
      { question: "Where is this painting displayed?", answer: `The painting hangs at the <a href="/museum/clark-art-institute"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts. It represents <a href="/artist/mary-cassatt"><strong>Cassatt's</strong></a> early career before her Impressionist period.` },
      { question: "When did Cassatt paint this?", answer: `<a href="/artist/mary-cassatt"><strong>Cassatt</strong></a> painted this during an <strong>1872-1873 stay in Spain</strong>, before she moved to Paris and befriended Edgar Degas. She made several paintings of Spanish customs.` },
      { question: "What is the scene depicting?", answer: `A woman offers a <strong>bullfighter a refreshing drink</strong> of water with panal (honeycomb). The flirtatious exchange takes place in what appears to be an area behind the bullring.` }
    ]
  },
  {
    slug: 'masaccio-st-juvenal-triptych',
    description: `<p><a href="/artist/masaccio"><strong>Masaccio</strong></a> painted this triptych on April 23, 1422, when he was just twenty-one years old. The central panel shows the <strong>Madonna and Child enthroned</strong> with angels, while side panels depict Saints Blaise, Bartholomew, Anthony Abbot, and Julian. It is the first known painting to use geometric Renaissance perspective.</p>
<p>Lost for centuries in a small church near Florence, the triptych was rediscovered in 1961 and recognized as Masaccio's earliest work. The inscription at the bottom uses humanist letters rather than Gothic script, a first in European art. Now displayed at the <strong>Masaccio Museum in Reggello</strong>, near the church of San Giovenale where it was found.</p>`,
    faqs: [
      { question: "Why is this triptych historically important?", answer: `It is the <strong>earliest known painting using geometric Renaissance perspective</strong> and <a href="/artist/masaccio"><strong>Masaccio's</strong></a> first documented work. The humanist inscription is also a first in European art.` },
      { question: "When was this painting discovered?", answer: `The triptych was <strong>rediscovered in 1961</strong> by art historian Luciano Berti in the small church of San Giovenale near Florence. It had been there for centuries, unrecognized.` },
      { question: "Where can I see this painting?", answer: `The painting is at the <strong>Masaccio Museum in Reggello</strong>, near Cascia di Reggello, Italy. It was moved from the original church for conservation in 1988.` }
    ]
  }
];

async function main() {
  console.log('Updating 20 artworks (Jan 21 Batch 3)...\n');

  let updated = 0;
  for (const update of updates) {
    try {
      const artwork = await prisma.artwork.findUnique({ where: { slug: update.slug } });
      if (artwork) {
        await prisma.artwork.update({
          where: { slug: update.slug },
          data: {
            description: update.description,
            faqs: update.faqs,
            updatedAt: new Date()
          }
        });
        console.log(`✓ Updated: ${artwork.title}`);
        updated++;
      } else {
        console.log(`✗ Not found: ${update.slug}`);
      }
    } catch (error) {
      console.log(`✗ Error updating ${update.slug}: ${error.message}`);
    }
  }

  console.log(`\nUpdated ${updated}/20 artworks`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
