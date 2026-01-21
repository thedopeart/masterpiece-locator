import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Batch 4: Artists 31-40
const artistUpdates: Record<string, { bioFull: string; faqs: { question: string; answer: string }[] }> = {
  "constant-permeke": {
    bioFull: `<p><strong>Constant Permeke</strong> (1886–1952) was the leading figure of Flemish <a href="/movement/expressionism"><strong>Expressionism</strong></a>. Born in Antwerp to Henri Permeke, a landscape painter and museum curator, he grew up in Ostend from age six. He studied at the Bruges Academy (1903–1906) and the Ghent Academy (1906–1908), where he met Frits Van den Berghe and the De Smet brothers, lifelong artistic companions.</p>

<p>When World War I broke out, Permeke was wounded defending Antwerp. Evacuated to England, he convalesced in Folkestone and then moved to Devonshire, where the colorful English landscape brightened his palette. After the war, he returned to Ostend in 1919. The harsh reality of fishermen's lives turned his work somber again: monumental figures in browns and blacks, vigorously distorted forms capturing the brutal dignity of labor.</p>

<p>In 1929, Permeke moved to Jabbeke, building a home called "De Vier Winden" (The Four Winds), now a museum. He shifted from fishermen to farmers, painting peasant life with the same powerful intensity. During World War II, the German occupiers banned him from painting, classifying his art as "Entartete Kunst" (Degenerate Art). His son was arrested and sent to Germany as forced labor. After the war, Permeke briefly directed the Royal Academy in Antwerp but resigned after one year. He also took up sculpture, creating monumental figures like <em>De Zaaier</em> (The Sower). His wife's death in 1948 devastated him. He died in 1952 and was buried beside her. Belgium honored him by putting his portrait on the 1,000 franc note in 1997. His work is at the <strong>Permekemuseum</strong> in Jabbeke and the Royal Museums of Fine Arts in Brussels.</p>`,
    faqs: [
      { question: "What art movement was Constant Permeke part of?", answer: `Permeke was the leading figure of <strong>Flemish <a href="/movement/expressionism">Expressionism</a></strong>, known for monumental, distorted figures depicting fishermen and farmers.` },
      { question: "Where can I see Constant Permeke's art?", answer: `His work is at the <strong>Permekemuseum</strong> in Jabbeke (his former home) and the <strong>Royal Museums of Fine Arts of Belgium</strong> in Brussels.` },
      { question: "What happened to Permeke during World War II?", answer: `The German occupiers <strong>banned him from painting</strong>, classifying his work as "Degenerate Art." His son was arrested and sent to Germany as forced labor.` },
      { question: "What subjects did Constant Permeke paint?", answer: `He painted <strong>fishermen and farmers</strong> with monumental, heavily distorted forms that emphasized the brutal dignity of manual labor.` },
      { question: "How did Belgium honor Constant Permeke?", answer: `In 1997, Belgium put <strong>his portrait on the 1,000 franc banknote</strong>, recognizing him as one of the country's most important artists.` }
    ]
  },

  "edward-hopper": {
    bioFull: `<p><strong>Edward Hopper</strong> (1882–1967) made loneliness visible. Born in Nyack, New York, to a middle-class family that encouraged his talents, he studied at the New York School of Art under William Merritt Chase and Robert Henri. His classmates included George Bellows and Rockwell Kent. Three trips to Europe between 1906 and 1910 exposed him to Impressionism, but Paris fascinated him more for its architecture than its art movements.</p>

<p>Success came slowly. Hopper worked as a commercial illustrator into his forties while developing his painting. His subjects were American scenes: diners, gas stations, movie theaters, hotel rooms, office buildings at night. A 1933 retrospective at MoMA established his reputation. What made his work distinctive wasn't the subjects but the silence. People in his paintings rarely interact. They sit in pools of light, isolated even when together.</p>

<p><em>Nighthawks</em> (1942) captures this perfectly: four figures in a downtown diner seen through its large window, the brightly lit interior contrasting with dark empty streets. Hopper said it was inspired by a Greenwich Village restaurant and painted "the loneliness of a large city." He married artist Josephine Nivison in 1924; she modeled for many of his figures and managed his career. They lived modestly in New York and summered on Cape Cod. Hopper's cinematic compositions influenced filmmakers from Hitchcock onward. <em>House by the Railroad</em> inspired the Bates mansion in <em>Psycho</em>. He died in his Washington Square studio in 1967. The <a href="/museum/whitney"><strong>Whitney Museum</strong></a> holds 3,000 of his works; <em>Nighthawks</em> is at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Edward Hopper part of?", answer: `Hopper is classified as an <a href="/movement/realism"><strong>American Realist</strong></a>, though his treatment of light and isolation distinguishes him from other realists.` },
      { question: "Where can I see Edward Hopper's paintings?", answer: `The <a href="/museum/whitney"><strong>Whitney Museum</strong></a> holds 3,000 works. <em>Nighthawks</em> is at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. MoMA also has important pieces.` },
      { question: "What is Edward Hopper's most famous painting?", answer: `<em>Nighthawks</em> (1942), showing four people in a late-night diner. Hopper said it painted <strong>"the loneliness of a large city."</strong>` },
      { question: "What subjects did Edward Hopper paint?", answer: `Hopper painted <strong>American urban and rural scenes</strong>: diners, gas stations, movie theaters, hotel rooms, and empty streets, often emphasizing isolation and silence.` },
      { question: "How did Edward Hopper influence film?", answer: `His cinematic compositions influenced many filmmakers. Alfred Hitchcock based the <strong>Bates house in <em>Psycho</em></strong> on Hopper's <em>House by the Railroad</em>.` }
    ]
  },

  "emanuel-de-witte": {
    bioFull: `<p><strong>Emanuel de Witte</strong> (c. 1617–1692) painted the grandeur of Dutch church interiors like no other. Born in Alkmaar, the son of a schoolteacher, he trained with still-life painter Evert van Aelst in Delft. He joined the Alkmaar guild in 1636 but soon moved to Rotterdam, then Delft in 1641, where he encountered architectural painter Gerard Houckgeest. He settled in Amsterdam around 1651.</p>

<p>Though De Witte began with biblical and mythological scenes, after 1650 he devoted himself to church interiors. His paintings capture the soaring spaces of Dutch Protestant churches: whitewashed walls, towering columns, light streaming through tall windows. His palette tends toward whitish yellows in sunlit areas and deep blacks in shadow. Contemporary biographer Arnold Houbraken wrote that "in the painting of churches, no one was his equal with regard to orderly architecture, innovative use of light and well-formed figures."</p>

<p>His personal life was troubled. His first wife died young; his second was banished from Amsterdam for robbery, taking their daughter. He was forced to indenture himself to an art dealer, surrendering his work for room, board, and a small stipend. He shouted at clients and fought with other artists. Records mention gambling debts. He suffered severe depression. Around 1688, he moved in with Hendrick van Streeck in exchange for teaching him to paint church interiors. In the winter of 1691–92, after an argument about rent, De Witte hanged himself from a canal bridge in Amsterdam. The rope broke and he drowned. His work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What was Emanuel de Witte known for painting?", answer: `De Witte specialized in <strong>Dutch church interiors</strong>, capturing Protestant churches' soaring spaces, light effects, and whitewashed architecture.` },
      { question: "Where can I see Emanuel de Witte's paintings?", answer: `His work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.` },
      { question: "What art movement was Emanuel de Witte part of?", answer: `De Witte was a <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter, representing the final phase of architectural painting in the Netherlands.` },
      { question: "What was unique about De Witte's church paintings?", answer: `Houbraken wrote that <strong>"no one was his equal"</strong> in church interiors, praising his orderly architecture, innovative lighting, and well-formed figures.` },
      { question: "Did Emanuel de Witte paint other subjects?", answer: `Yes, besides churches, he painted <strong>fish markets and domestic scenes</strong>, including <em>The Fish Market</em> and interiors with women at virginals.` }
    ]
  },

  "evelyn-de-morgan": {
    bioFull: `<p><strong>Evelyn De Morgan</strong> (1855–1919) defied Victorian expectations to become one of the era's finest painters. Born Mary Evelyn Pickering into London's upper class, she dropped her first name because it could be read as feminine, wanting her work judged on merit alone. On her seventeenth birthday, she wrote in her diary: "Art is eternal, but life is short... I have not a moment to lose."</p>

<p>She studied at the Slade School of Fine Art, where she was among the first women admitted, winning multiple prizes and a scholarship. Her uncle, the painter John Roddam Spencer Stanhope, introduced her to the <a href="/movement/pre-raphaelitism"><strong>Pre-Raphaelite</strong></a> circle. Visits to Florence with him exposed her to Botticelli and Quattrocento masters, whose influence appears throughout her work.</p>

<p>De Morgan's paintings feature female figures in spiritual, mythological, and allegorical themes, using metaphors of light and darkness, transformation, and bondage. Scholars identify feminist and spiritualist content in her symbolic imagery. In 1877, she was one of only two women exhibiting at the Grosvenor Gallery's inaugural show. She was active in the suffragette movement, signing the 1889 Declaration in Favor of Women's Suffrage. In 1887, she married ceramicist William De Morgan; profits from her paintings financed his pottery business. Her later work addressed war from a pacifist perspective, responding to the Boer War and World War I. She completed around 100 oil paintings over her fifty-year career. The <strong>De Morgan Foundation</strong> preserves 56 of them, along with preparatory drawings. She died in 1919 and was buried in Brookwood Cemetery.</p>`,
    faqs: [
      { question: "What art movement was Evelyn De Morgan associated with?", answer: `De Morgan was associated with the later <a href="/movement/pre-raphaelitism"><strong>Pre-Raphaelite</strong></a> movement, as well as Aestheticism and Symbolism. She was influenced by Botticelli.` },
      { question: "Where can I see Evelyn De Morgan's paintings?", answer: `The <strong>De Morgan Foundation</strong> holds 56 of her oil paintings. Works also appear at the <a href="/museum/tate-modern"><strong>Tate</strong></a> and occasionally in touring exhibitions.` },
      { question: "What subjects did Evelyn De Morgan paint?", answer: `She painted <strong>allegorical and mythological subjects</strong> featuring female figures, with themes of transformation, spiritualism, and feminist symbolism.` },
      { question: "Was Evelyn De Morgan a suffragette?", answer: `Yes, she was <strong>active in the women's suffrage movement</strong>, signing the 1889 Declaration in Favor of Women's Suffrage.` },
      { question: "Why did Evelyn De Morgan drop her first name?", answer: `She dropped "Mary" because it was clearly feminine. She wanted her work <strong>judged on merit, not gender</strong>, using the gender-neutral "Evelyn."` }
    ]
  },

  "fitz-henry-lane": {
    bioFull: `<p><strong>Fitz Henry Lane</strong> (1804–1865) was a founding figure of American <a href="/movement/luminism"><strong>Luminism</strong></a>. Born Nathaniel Rogers Lane in Gloucester, Massachusetts, he changed his name in 1832 for unknown reasons. At age two, he contracted polio, which left his legs paralyzed for life. This disability didn't prevent him from becoming one of America's premier marine painters.</p>

<p>Lane trained as a lithographer with Boston's William S. Pendleton firm but took up oil painting around 1840. He studied the work of Robert Salmon, an English marine painter whose luminous, detailed seascapes greatly influenced him. In 1848, he first traveled to Maine with merchant Joseph Stevens, beginning a lifelong connection to its rocky coasts. That year he settled permanently in Gloucester, building a granite mansion overlooking the harbor where he could observe light on water from his studio.</p>

<p>His paintings capture the transitional hours of day: sunrise and sunset reflected on still harbors, ships silhouetted against glowing skies. He applied paint thinly, using glazes to create serene, almost mystical effects. Occasionally a solitary figure appears, reinforcing the sense of spiritual harmony with nature. Recent research has confirmed he was a transcendentalist and a spiritualist, as well as a temperance reformer. He died at home in 1865 and was buried in Oak Grove Cemetery. His work hangs at the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the Cape Ann Museum in Gloucester. In 2004, <em>Manchester Harbor</em> sold for $5.5 million.</p>`,
    faqs: [
      { question: "What art movement was Fitz Henry Lane part of?", answer: `Lane was a founding figure of <a href="/movement/luminism"><strong>Luminism</strong></a>, characterized by its emphasis on light, serene atmospheres, and smooth surfaces.` },
      { question: "Where can I see Fitz Henry Lane's paintings?", answer: `His work is at the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the <strong>Cape Ann Museum</strong> in Gloucester.` },
      { question: "What subjects did Fitz Henry Lane paint?", answer: `Lane specialized in <strong>harbor scenes and coastal views</strong>, particularly capturing transitional light at sunrise and sunset over calm waters.` },
      { question: "Did Fitz Henry Lane have a disability?", answer: `Yes, childhood polio <strong>paralyzed his legs</strong>, but he still became a leading marine painter, building a studio overlooking Gloucester harbor.` },
      { question: "Was Fitz Henry Lane a transcendentalist?", answer: `Recent research confirms he was a <strong>transcendentalist and spiritualist</strong>. His serene paintings suggest a spiritual harmony between man and nature.` }
    ]
  },

  "francesco-furini": {
    bioFull: `<p><strong>Francesco Furini</strong> (1603–1646) created some of Florence's most sensuous Baroque paintings, then became a priest. Born into a poor but artistic family, his father Filippo was a portrait painter, his sister Alessandra also painted, and another sister was a singer at the Medici court. He learned drawing from his father before training with Matteo Rosselli and being influenced by Domenico Passignano.</p>

<p>In 1619, Furini traveled to Rome to study classical figures and encountered the influence of Caravaggio and his followers. In 1623, he collaborated with Giovanni da San Giovanni on ceiling frescoes for Palazzo Bentivoglio. Back in Florence, he received commissions from prominent families including the Strozzi, Salviati, Riccardi, and the ruling Medici. Galileo Galilei and Guido Reni were among his admirers.</p>

<p>Furini became known for his sensuous female nudes, drawing subjects from classical mythology and the Old Testament. Unusually for the time, he made drawings from female as well as male life models. His technique featured strong use of sfumato, creating soft, atmospheric effects. In 1633, after harsh criticism of his nudes, he took holy orders and retreated to the rural church of Sant'Ansano in Mugello. But he continued painting, including nudes. Between 1639 and 1642, he painted two major frescoes for Ferdinand II de' Medici at the Pitti Palace. He visited Rome again just before his death in 1646. His pupils included Simone Pignoni. Modern scholarship has demonstrated he never abandoned sensual subjects as a priest. His work is at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, <a href="/museum/louvre"><strong>Louvre</strong></a>, and the Pitti Palace.</p>`,
    faqs: [
      { question: "What was Francesco Furini known for painting?", answer: `Furini was known for <strong>sensuous female nudes</strong> drawn from mythology and the Old Testament, painted with soft sfumato technique.` },
      { question: "Where can I see Francesco Furini's paintings?", answer: `His work is at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, and the Pitti Palace.` },
      { question: "What art movement was Francesco Furini part of?", answer: `Furini was a Florentine <a href="/movement/baroque"><strong>Baroque</strong></a> painter whose work bridges late Mannerism and the new Baroque style influenced by Caravaggio.` },
      { question: "Did Francesco Furini become a priest?", answer: `Yes, in 1633 he took holy orders after criticism of his nudes, but he <strong>continued painting sensual subjects</strong> even as a priest.` },
      { question: "Who admired Francesco Furini's work?", answer: `His admirers included <strong>Galileo Galilei</strong> and the painter <strong>Guido Reni</strong>. He received commissions from Florence's most powerful families.` }
    ]
  },

  "francois-clouet": {
    bioFull: `<p><strong>François Clouet</strong> (c. 1510–1572) was the most important French portraitist of the sixteenth century. Born in Tours to court painter Jean Clouet, he learned from his father and shared his byname "Janet," causing persistent confusion between their works. François worked alongside Jean possibly as early as 1536 and officially replaced him as court painter to Francis I in 1540.</p>

<p>He served four French kings: Francis I, Henry II, Francis II, and Charles IX. He directed a large workshop that included miniaturists, enamel designers, and decorators, executing his designs. Beyond portraits, he oversaw decorations for royal funerals and triumphal entries. He prepared Henry II's death-mask in 1559, just as he had taken a mask of Francis I in 1547 for the funeral effigy.</p>

<p>Clouet's portraits have characteristic French <a href="/movement/renaissance"><strong>Renaissance</strong></a> precision: dry accuracy, elegant stylization, and clear-cut plasticity. He captured fleeting expressions better than his father, though with less psychological depth. Poets of his day, including Pierre de Ronsard and Joachim du Bellay, praised his work. Only three signed paintings survive: portraits of Elizabeth of Austria, Pierre Quthe, and the sensational <em>Lady in Her Bath</em>, which sparked a rage for bath portraits. His drawings, particularly the portrait of Mary, Queen of Scots in the Bibliothèque Nationale, show exceptional skill. Clouet lived in Paris near the Hôtel de Guise and died shortly after the St. Bartholomew's Day Massacre in December 1572. His will mentions two illegitimate daughters. Paintings attributed to him are at the <a href="/museum/uffizi"><strong>Uffizi</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and Versailles.</p>`,
    faqs: [
      { question: "What was François Clouet known for painting?", answer: `Clouet was the leading French <strong>portrait painter</strong> of the 16th century, serving four kings and capturing the French court with precise, elegant style.` },
      { question: "Where can I see François Clouet's paintings?", answer: `His work is at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, the <a href="/museum/uffizi"><strong>Uffizi</strong></a> in Florence, and Versailles.` },
      { question: "What art movement was François Clouet part of?", answer: `Clouet was a French <a href="/movement/renaissance"><strong>Renaissance</strong></a> painter, bringing Italian influences to French court portraiture.` },
      { question: "Which French kings did François Clouet serve?", answer: `He served <strong>Francis I, Henry II, Francis II, and Charles IX</strong> as official court painter, directing a large workshop for nearly four decades.` },
      { question: "What painting started a trend for bath portraits?", answer: `<em>Lady in Her Bath</em>, one of only three signed Clouet paintings, sparked a <strong>fashion for bath portraits</strong> in the French court.` }
    ]
  },

  "frederick-arthur-bridgman": {
    bioFull: `<p><strong>Frederick Arthur Bridgman</strong> (1847–1928) earned the title "the American Gérôme" for his Orientalist paintings. Born in Tuskegee, Alabama, he moved to New York after his physician father's death. He worked as a draughtsman at the American Bank Note Company while studying at the Brooklyn Art Association and National Academy of Design. In 1866, a group of Brooklyn businessmen sponsored his move to France.</p>

<p>Bridgman studied under Jean-Léon Gérôme at the École des Beaux-Arts, absorbing his teacher's precise draftsmanship and Middle Eastern themes. Between 1872 and 1874, he traveled to Morocco, Tunisia, Algeria, and Egypt, producing approximately 300 sketches that fueled his career. His large canvas <em>Funeral of a Mummy on the Nile</em> (1877), exhibited at the Paris Salon, won him the Cross of the Legion of Honor in 1878.</p>

<p>Unlike Gérôme's archaeological precision, Bridgman developed a more naturalistic approach with bright colors and painterly brushwork. John Singer Sargent joked that his overstuffed studio, alongside the Eiffel Tower, was one of Paris's must-see attractions. In 1890, he exhibited over 400 pictures at New York's 5th Avenue galleries, making so many sales that only 300 traveled to Chicago's Art Institute. He was elected to the National Academy of Design in 1881 and received France's highest artistic honor, Officer of the Légion d'Honneur, in 1907. His first wife died of neurological illness in 1901; he remarried in 1904. After World War I, he retired to Normandy, dying in Rouen in 1928. His work is at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, the Corcoran Gallery, and Liverpool's Walker Art Gallery.</p>`,
    faqs: [
      { question: "What subjects did Frederick Arthur Bridgman paint?", answer: `Bridgman specialized in <a href="/movement/orientalism"><strong>Orientalist</strong></a> subjects: scenes of North Africa, Egypt, mosque interiors, and Middle Eastern daily life.` },
      { question: "Where can I see Frederick Arthur Bridgman's paintings?", answer: `His work is at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, the Corcoran Gallery in Washington, and Liverpool's Walker Art Gallery.` },
      { question: "Why was Bridgman called 'the American Gérôme'?", answer: `He studied under <strong>Jean-Léon Gérôme</strong> and specialized in similar Middle Eastern subjects, though with a more naturalistic, colorful style than his teacher.` },
      { question: "Did Frederick Arthur Bridgman travel to the Middle East?", answer: `Yes, between 1872–1874 he traveled to <strong>Morocco, Tunisia, Algeria, and Egypt</strong>, producing 300 sketches that fueled decades of paintings.` },
      { question: "What honors did Bridgman receive?", answer: `He received France's <strong>Legion of Honor</strong> in 1878 and was elevated to Officer in 1907. He was elected to the National Academy of Design in 1881.` }
    ]
  },

  "george-hendrik-breitner": {
    bioFull: `<p><strong>George Hendrik Breitner</strong> (1857–1923) captured Amsterdam like no other painter. Born in Rotterdam, he showed early drawing talent while working in his father's grain business. At seventeen, he enrolled at The Hague's Royal Academy of Art but was expelled in 1880 for destroying the regulations board. That same year, Willem Maris took him in, and he joined the artist society Pulchri Studio.</p>

<p>In early 1882, Breitner sketched alongside Vincent van Gogh in The Hague's working-class districts. He likely introduced Van Gogh to Émile Zola's novels and social realism. He moved to Amsterdam in 1886, where he spent the rest of his life recording the city in sketches, paintings, and photographs. Breitner saw himself as "le peintre du peuple," the people's painter, preferring working-class models: laborers, servant girls, people from poor neighborhoods.</p>

<p>He painted en plein air and became fascinated with photography as a tool for capturing street life and atmospheric effects, especially rainy weather. By 1890, he owned a camera and produced thousands of photographs, many serving as references for paintings. The Rijksmuseum holds 119 of his sketchbooks. He often collaborated with Isaac Israels; both are called Amsterdam Impressionists. In 1902, Breitner became the first contemporary artist given a retrospective at the artists' association Arti et Amicitiae. Despite success, financial troubles plagued him, leading friends to establish a support committee. He died of a heart attack in 1923 at sixty-five. His work fills the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> and the Amsterdam Museum.</p>`,
    faqs: [
      { question: "What was George Hendrik Breitner known for painting?", answer: `Breitner was Amsterdam's painter, capturing <strong>street life, harbors, and working-class subjects</strong> in a realistic, atmospheric style, often in rainy weather.` },
      { question: "Where can I see George Hendrik Breitner's paintings?", answer: `His work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, which holds 119 of his sketchbooks, and the Amsterdam Museum.` },
      { question: "What art movement was George Hendrik Breitner part of?", answer: `Breitner was a leading <strong>Amsterdam Impressionist</strong>, painting en plein air with attention to atmospheric effects and urban life.` },
      { question: "Did George Hendrik Breitner know Vincent van Gogh?", answer: `Yes, in 1882 they <strong>sketched together</strong> in The Hague's working-class districts. Breitner likely introduced Van Gogh to Zola's novels.` },
      { question: "Did Breitner use photography?", answer: `Yes, from 1890 he used <strong>photography extensively</strong> to document street life and atmospheric effects, producing thousands of photos as painting references.` }
    ]
  },

  "george-inness-jr": {
    bioFull: `<p><strong>George Inness Jr.</strong> (1854–1926) emerged from his famous father's shadow to become one of America's foremost figure and landscape painters. Born in Paris, the first of six children to celebrated American Tonalist George Inness and his wife Elizabeth, he grew up immersed in art. He studied with his father and with French academician Léon Bonnat, gaining exposure to the Barbizon School, particularly the animalier Constant Troyon.</p>

<p>In 1875, the family returned to America, settling eventually in Montclair, New Jersey, where father and son shared a studio. Determined to distinguish himself, the younger Inness incorporated cattle, horses, and oxen into his landscapes, a specialty that set him apart. He worked as a magazine illustrator and painter of hunting scenes, building his own reputation.</p>

<p>When his father died in 1894, Inness Jr. claimed to have experienced a vision of him, prompting him to destroy about a hundred canvases he felt too closely resembled his father's style. He returned to Paris to study further at the École des Beaux-Arts. Back in America by 1900, he split his time between Cragsmoor, New York, and Tarpon Springs, Florida, whose landscapes he painted extensively. He was elected to the National Academy of Design in 1899. His Cragsmoor estate, Chetolah, was listed on the National Register of Historic Places in 1980. He married the daughter of publisher Roswell Smith. Inness Jr. is recognized as a great Florida artist for his depictions of the state's unspoiled nature. His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the Museum of Fine Arts, Boston, and the Montclair Art Museum.</p>`,
    faqs: [
      { question: "What was George Inness Jr. known for painting?", answer: `Inness Jr. specialized in <strong>landscapes with animals</strong>, particularly cattle, horses, and oxen. He also painted Florida landscapes and hunting scenes.` },
      { question: "Where can I see George Inness Jr.'s paintings?", answer: `His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the Museum of Fine Arts, Boston, and the Montclair Art Museum in New Jersey.` },
      { question: "Was George Inness Jr. related to George Inness?", answer: `Yes, he was the <strong>son of the celebrated American Tonalist</strong> George Inness. They shared a studio in Montclair, New Jersey.` },
      { question: "Why did George Inness Jr. destroy 100 paintings?", answer: `After his father's death in 1894, he claimed to have had a vision prompting him to <strong>destroy works too similar to his father's style</strong>, asserting his independence.` },
      { question: "Where did George Inness Jr. paint in Florida?", answer: `He painted extensively in <strong>Tarpon Springs, Florida</strong>, becoming recognized as an important Florida artist for his depictions of the state's landscapes.` }
    ]
  }
};

async function main() {
  console.log("Updating artists batch 4 (10 artists)...\n");

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

  console.log(`\nUpdated ${updated} artists in batch 4`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
