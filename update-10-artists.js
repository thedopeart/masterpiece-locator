const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'john-james-audubon',
    bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> naturalist <strong>John James Audubon</strong> (1785-1851) created the most ambitious ornithological work ever produced, depicting North American birds at life-size in dramatic, lifelike poses. Born in Haiti as Jean-Jacques Rabin, the illegitimate son of a French merchant and slave trader, he was sent to France at age five and later to America at eighteen to avoid Napoleonic conscription.</p>

<p>At the family estate near Philadelphia, Audubon developed his passion for drawing birds. He conducted the first bird-banding experiment in North America, tying strings to Eastern Phoebes to track their return. His method was revolutionary: he killed birds with fine shot, then wired them into naturalistic poses rather than the stiff arrangements favored by other naturalists. Unable to find an American publisher for his ambitious project, he sailed to Britain in 1826. Edinburgh and London engravers produced <strong>The Birds of America</strong> between 1827 and 1838. Its 435 hand-colored plates, showing birds at actual size on "double elephant" paper, broke every convention of natural history illustration.</p>

<p>Only about 200 complete sets were printed. Of the 119 known to survive, one sold at auction for $9.6 million in 2018. The <a href="/museum/new-york-historical-society"><strong>New-York Historical Society</strong></a> holds 435 original watercolors. Prints are displayed at the <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington and the <a href="/museum/british-museum-london-uk"><strong>British Museum</strong></a>. The National Audubon Society, founded in 1905, honors his conservation legacy.</p>`,
    faqs: [
      { question: "What is The Birds of America?", answer: "<strong>The Birds of America</strong> (1827-1838) contains 435 hand-colored engravings of North American birds, all depicted at life-size. One complete set sold for $9.6 million, making it one of the most valuable books ever published." },
      { question: "Where can I see Audubon's original paintings?", answer: "The <a href=\"/museum/new-york-historical-society\"><strong>New-York Historical Society</strong></a> holds all 435 original watercolors. Prints appear at the <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> and natural history museums worldwide." },
      { question: "What was revolutionary about Audubon's bird illustrations?", answer: "Audubon depicted <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>birds</strong></a> in lifelike, active poses rather than stiff profiles. He wired freshly killed specimens into natural positions and showed them at actual size." },
      { question: "Where was Audubon born?", answer: "Audubon was born in Haiti (then Saint-Domingue) in 1785. He was the illegitimate son of a French merchant. At five, he was sent to France, then to America at eighteen." },
      { question: "What art movement is Audubon associated with?", answer: "Audubon is associated with <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>, blending scientific observation with dramatic artistic vision. His work influenced both <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>nature art</strong></a> and conservation movements." },
      { question: "What is the Audubon Society?", answer: "The <strong>National Audubon Society</strong>, founded in 1905, is named in his honor. It's America's oldest bird conservation organization, continuing his legacy of studying and protecting wild birds." }
    ]
  },
  {
    slug: 'gilbert-stuart',
    bioFull: `<p>American portrait painter <strong>Gilbert Stuart</strong> (1755-1828) created the definitive image of George Washington that has appeared on the one-dollar bill for over a century. Born in Rhode Island to a Scottish immigrant family, he showed early artistic talent and left for London in 1775 to escape the Revolutionary War, studying under Benjamin West.</p>

<p>Stuart spent eighteen years abroad, building a successful portrait practice in London and Dublin before returning to America in 1793 with a specific goal. "I expect to make a fortune by Washington alone," he wrote. He was right. Washington sat for Stuart three times, producing three distinct portrait types: the "Vaughan" portrait, the unfinished "Athenaeum" head (the dollar bill image), and the full-length "Lansdowne" portrait. Stuart made over 100 replicas of these images during his lifetime. When painting the <strong>Athenaeum portrait</strong>, Stuart noted Washington had just gotten new false teeth, which accounts for the constrained expression around the mouth.</p>

<p>Stuart painted each of the first five U.S. presidents from life, along with most of their wives. His gift for capturing a likeness made him America's foremost portraitist. The <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> holds the Lansdowne portrait. The <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a> owns the Athenaeum portraits of both George and Martha Washington. Works also hang at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> and the <a href="/museum/white-house-washington-dc-us"><strong>White House</strong></a>.</p>`,
    faqs: [
      { question: "Why is Gilbert Stuart famous?", answer: "Stuart created the iconic image of <strong>George Washington</strong> that appears on the U.S. one-dollar bill. He painted each of the first five presidents from life and was America's leading <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> painter." },
      { question: "Where can I see Stuart's Washington portraits?", answer: "The <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a> owns the unfinished Athenaeum portraits. The <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> has the Lansdowne portrait." },
      { question: "What is the Athenaeum portrait?", answer: "The <strong>Athenaeum portrait</strong> (1796) is Stuart's unfinished painting of Washington. The image has appeared on American currency since 1869, making it one of the most reproduced faces in history." },
      { question: "How many Washington portraits did Stuart paint?", answer: "Stuart created three portrait types from life sittings, then made over 100 replicas during his career. He frankly admitted his goal was to profit from Washington's fame." },
      { question: "Where did Gilbert Stuart train?", answer: "Stuart studied under <strong>Benjamin West</strong> in London from 1775 to 1787. He spent eighteen years in Britain and Ireland before returning to America to paint Washington." },
      { question: "What presidents did Stuart paint?", answer: "Stuart painted all five early presidents from life: <strong>Washington, Adams, Jefferson, Madison, and Monroe</strong>. He also painted many of their wives, including Martha Washington." }
    ]
  },
  {
    slug: 'ivan-shishkin',
    bioFull: `<p><strong>Realist</strong> landscape painter <strong>Ivan Shishkin</strong> (1832-1898) earned the title "Tsar of the Forest" for his detailed, monumental depictions of Russian wilderness. Born in Yelabuga to a merchant family, he studied at the Moscow School of Painting before continuing at the Imperial Academy of Arts in St. Petersburg. A gold medal brought him a stipend to travel through Germany, studying particularly at the Düsseldorf school, which reinforced his exacting approach to nature.</p>

<p>Shishkin co-founded the Peredvizhniki (Wanderers) movement in 1870, joining artists who rejected the Academy's rigid approach and took exhibitions directly to the Russian people. His paintings present forests as symbols of Russian national identity, rendered with almost scientific precision yet imbued with epic grandeur. He preferred painting pine and oak forests in pristine condition during dry, sunny weather. Works like <strong>Rye</strong> (1878) and <strong>Morning in a Pine Forest</strong> (1889) became so popular they appeared on candy wrappers and textbooks.</p>

<p>Personal tragedy marked his middle years. His father, wife, student, and two sons all died within a short period in the 1870s. He remarried a student, Olga Lagoda, who also died young. Shishkin himself died at his easel in 1898, working on a new painting. The <a href="/museum/tretyakov-gallery-moscow-russia"><strong>Tretyakov Gallery</strong></a> in Moscow holds his most famous works. The <a href="/museum/russian-museum"><strong>Russian Museum</strong></a> in St. Petersburg preserves major paintings. A minor planet was named in his honor.</p>`,
    faqs: [
      { question: "What is Ivan Shishkin famous for?", answer: "Shishkin painted detailed, monumental <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>Russian forest landscapes</strong></a>. His contemporaries called him 'Tsar of the Forest' for his mastery of depicting pine and oak trees with near-scientific precision." },
      { question: "Where can I see Shishkin's paintings?", answer: "The <a href=\"/museum/tretyakov-gallery-moscow-russia\"><strong>Tretyakov Gallery</strong></a> in Moscow holds <strong>Morning in a Pine Forest</strong> and other major works. The <a href=\"/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg also has significant paintings." },
      { question: "What is Morning in a Pine Forest?", answer: "<strong>Morning in a Pine Forest</strong> (1889) shows bear cubs playing on a fallen tree. The bears were actually painted by Konstantin Savitsky, though Shishkin's name alone appears on the famous candy wrapper version." },
      { question: "What art movement was Shishkin part of?", answer: "Shishkin co-founded the <strong>Peredvizhniki</strong> (Wanderers) in 1870. This realist group rejected the Imperial Academy and took exhibitions directly to Russian people, believing art should serve society." },
      { question: "What subjects did Shishkin paint?", answer: "Shishkin specialized in <a href=\"https://luxurywallart.com/collections/paintings-of-trees\" target=\"_blank\" rel=\"noopener\"><strong>forest landscapes</strong></a>, particularly pine and oak trees. He painted them in pristine condition during sunny weather, creating images of untouched Russian wilderness." },
      { question: "How did Shishkin die?", answer: "Shishkin died of a heart attack on March 20, 1898, while sitting at his easel working on a new painting. He was 66 years old and still actively creating work." }
    ]
  },
  {
    slug: 'thomas-lawrence',
    bioFull: `<p><strong>Sir Thomas Lawrence</strong> (1769-1830) became the leading <a href="/movement/romanticism"><strong>Romantic</strong></a> portrait painter in Europe through his brilliant handling of paint and his ability to flatter sitters while capturing genuine character. A child prodigy, he was supporting his family with pastel portraits by age ten while working at his father's coaching inn in Bath. By eighteen, he had established himself in London; by twenty-two, George III appointed him "painter-in-ordinary to his majesty."</p>

<p>Sir Joshua Reynolds observed the young Lawrence and remarked, "This young man has begun at a point of excellence where I left off." Lawrence's fluid brushwork and rich color brought a new energy to British portraiture. His sitters appeared dramatic, almost theatrical, their textures of silk, velvet, and skin rendered with virtuoso skill. After John Hoppner's death in 1810, Lawrence had no rivals. The Prince Regent knighted him in 1815 and sent him across Europe to paint the leaders who defeated Napoleon. Those 24 full-length <strong>portraits</strong> of monarchs and military heroes now hang together in the <strong>Waterloo Chamber</strong> at Windsor Castle.</p>

<p>Despite his success, Lawrence spent most of his life in debt and never married. His complicated love affairs with the actress Sarah Siddons' daughters became the subject of several books. He collected Old Master drawings, particularly works by Michelangelo and Raphael, now treasures of the <a href="/museum/ashmolean-museum-oxford-uk"><strong>Ashmolean Museum</strong></a>. The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London and <a href="/museum/met"><strong>Metropolitan Museum</strong></a> hold major portraits. He was buried in St. Paul's Cathedral.</p>`,
    faqs: [
      { question: "What is Thomas Lawrence famous for?", answer: "Lawrence was Europe's most fashionable <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> painter during the Regency era. His dramatic style and virtuoso brushwork made him the successor to Reynolds and Gainsborough." },
      { question: "Where can I see Lawrence's paintings?", answer: "The <strong>Waterloo Chamber</strong> at Windsor Castle displays 24 portraits of Napoleon's conquerors. The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London and <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> hold other major works." },
      { question: "Was Thomas Lawrence a child prodigy?", answer: "Yes. Lawrence was supporting his family with pastel <strong>portraits</strong> by age ten, working at his father's inn in Bath. At eighteen he moved to London; by twenty-two he was the King's painter." },
      { question: "What art movement was Lawrence part of?", answer: "Lawrence is associated with <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>. His theatrical, emotionally charged portraits replaced the cooler elegance of 18th-century British painting." },
      { question: "What is the Waterloo Chamber?", answer: "The <strong>Waterloo Chamber</strong> at Windsor Castle displays Lawrence's 24 portraits of monarchs and generals who defeated Napoleon. The Prince Regent sent Lawrence across Europe to paint these leaders." },
      { question: "Did Lawrence collect art?", answer: "Lawrence assembled a legendary collection of <strong>Old Master drawings</strong>, especially Michelangelo and Raphael. These are now treasures of the <a href=\"/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford." }
    ]
  },
  {
    slug: 'bruno-liljefors',
    bioFull: `<p>Swedish wildlife painter <strong>Bruno Liljefors</strong> (1860-1939) revolutionized animal art by combining Impressionist techniques with precise naturalistic observation. Born in Uppsala, he was sickly as a child and spent years indoors, where a tutor introduced him to painting at age six. As he grew stronger through gymnastics and hunting, he never lost his passion for art. He studied at the Swedish Royal Academy of Fine Arts before traveling to Germany, Italy, and Paris between 1882 and 1883.</p>

<p>Liljefors's breakthrough was showing animals truly integrated with their environments rather than posed against neutral backgrounds. His depictions of <strong>predator and prey</strong>, particularly foxes hunting hares, sea eagles pursuing eiders, and goshawks striking black grouse, capture movement with dramatic energy. A lifelong hunter himself, he painted without sentimentality, neither exaggerating the predator's ferocity nor the prey's suffering. He kept collections of living animals as models and studied their behavior directly. The influence of <a href="/movement/impressionism"><strong>Impressionism</strong></a> shows in his attention to light and atmosphere, while Art Nouveau and Japanese art shaped his compositions.</p>

<p>Critics called him the "prince of animal artists." His paintings injected vital energy into Swedish National Romanticism during the 1890s. Works like <strong>Rävfamilj</strong> (Fox Family, 1886) and <strong>Havsörnar</strong> (Sea Eagles, 1897) defined the genre. The <a href="/museum/national-museum-stockholm"><strong>National Museum</strong></a> in Stockholm holds major works. Paintings also hang at the <strong>Thielska Gallery</strong> and <strong>Waldemarsudde</strong> in Stockholm. American wildlife artists cite him as a primary influence.</p>`,
    faqs: [
      { question: "What is Bruno Liljefors famous for?", answer: "Liljefors pioneered modern <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>wildlife painting</strong></a> by showing animals fully integrated with their environments. His predator-prey scenes combine Impressionist light effects with naturalistic precision." },
      { question: "Where can I see Liljefors's paintings?", answer: "The <a href=\"/museum/national-museum-stockholm\"><strong>National Museum</strong></a> in Stockholm holds major works. Paintings also hang at the <strong>Thielska Gallery</strong> and <strong>Waldemarsudde</strong>, both in Stockholm." },
      { question: "What subjects did Liljefors paint?", answer: "Liljefors specialized in <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\"><strong>birds</strong></a> and mammals in dramatic hunting scenes. Sea eagles, foxes, hares, and game birds appear frequently in his work." },
      { question: "What art movements influenced Liljefors?", answer: "Liljefors combined <a href=\"/movement/impressionism\"><strong>Impressionism's</strong></a> light effects with precise naturalism. Art Nouveau and Japanese art also shaped his compositions, particularly in works from the 1890s." },
      { question: "Was Liljefors a hunter?", answer: "Yes. Liljefors was a lifelong hunter who used his field experience to paint authentic predator-prey scenes. He kept living animals as models and observed wildlife behavior directly." },
      { question: "Why is Liljefors considered influential?", answer: "Liljefors elevated wildlife art from illustration to fine art. American painters like <strong>Michael Coleman</strong> acknowledge him as a major influence on modern wildlife painting." }
    ]
  },
  {
    slug: 'caspar-netscher',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Caspar Netscher</strong> (1639-1684) achieved renown for his refined genre scenes and fashionable portraits, becoming one of the most sought-after artists in The Hague. Born in Heidelberg during the Thirty Years' War, he fled with his mother through dangerous territory, eventually finding refuge in Arnhem where a physician adopted him.</p>

<p>Netscher trained under Gerard ter Borch in Deventer, becoming his most gifted pupil and sometimes modeling for the master's paintings. He developed exceptional skill in rendering textures, particularly the costly white satin fabrics that became his signature. Planning to travel to Rome, he stopped in Bordeaux, married the daughter of a fountain designer, and settled in The Hague by 1662. There he turned from genre paintings to portraits, finding wealthy clients among the city's patriciate, diplomats, and eventually royalty.</p>

<p>Works like <strong>The Lacemaker</strong> show his meticulous attention to surface textures and domestic intimacy, qualities he shared with Vermeer and Metsu. His portraits typically place sitters before sumptuous draperies with parklike landscape views. William III patronized him, leading to commissions from Charles II and other Dutch aristocracy. Netscher was gaining both fame and wealth when gout forced him to paint lying in bed. He died at forty-five, still working. His sons Theodoor and Constantijn continued his style. The <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a> in The Hague holds major works. Paintings also hang at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London, and <a href="/museum/louvre"><strong>Louvre</strong></a>.</p>`,
    faqs: [
      { question: "What is Caspar Netscher famous for?", answer: "Netscher excelled at refined genre scenes and fashionable <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>, especially his skill rendering costly fabrics like white satin. He became one of The Hague's most sought-after painters." },
      { question: "Where can I see Netscher's paintings?", answer: "The <a href=\"/museum/mauritshuis\"><strong>Mauritshuis</strong></a> in The Hague holds major works. Paintings also hang at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>, <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London, and <a href=\"/museum/louvre\"><strong>Louvre</strong></a>." },
      { question: "Who trained Caspar Netscher?", answer: "Netscher studied under <strong>Gerard ter Borch</strong> in Deventer, becoming his most talented pupil. He sometimes posed as a model for ter Borch's paintings." },
      { question: "What art movement was Netscher part of?", answer: "Netscher worked during the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. His refined technique and attention to textiles places him alongside Vermeer and Metsu in the Leiden Fine Painting tradition." },
      { question: "What is The Lacemaker by Netscher?", answer: "<strong>The Lacemaker</strong> demonstrates Netscher's gift for rendering textures and domestic intimacy. The subject shows a woman at delicate needlework, a popular theme among Dutch painters." },
      { question: "How did Netscher die?", answer: "Netscher developed gout and was forced to paint while lying in bed. He died at forty-five in 1684, still actively working despite his illness." }
    ]
  },
  {
    slug: 'christian-krohg',
    bioFull: `<p>Norwegian naturalist painter <strong>Christian Krohg</strong> (1852-1925) created politically charged images of workers, prostitutes, and fishermen that shaped Scandinavian realism. Born to a prominent family (his grandfather had been a government minister), he was expected to study law. After completing his degree, he finally pursued painting, studying in Karlsruhe under the Norwegian landscape master Hans Gude, then at the Berlin Royal Academy where realism took hold of his vision.</p>

<p>A year in Paris in 1881 brought encounters with Manet, Courbet, and the Impressionists, along with the social realism of Jules Bastien-Lepage. Krohg applied these influences to Norwegian subjects, painting fishing communities at Skagen and the urban poor in Kristiania (Oslo). His novel <strong>Albertine</strong>, telling of a seamstress turned prostitute, caused a scandal when published with related paintings. The work was banned for its sexual content, though it galvanized support for outlawing prostitution in Norway. Krohg was fined but achieved his goal of forcing public debate.</p>

<p>Krohg served as mentor to <strong>Edvard Munch</strong>, encouraging the younger artist's development. He founded the Bohemian journal <em>Impressionisten</em>, worked as a journalist for decades, and taught at the Académie Colarossi in Paris before directing Norway's Academy of Arts from 1909 until his death. France made him a Knight of the Legion of Honour in 1889. The <a href="/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo holds his most important works. The <a href="/museum/skagens-museum"><strong>Skagens Museum</strong></a> in Denmark preserves paintings from the artists' colony.</p>`,
    faqs: [
      { question: "What is Christian Krohg famous for?", answer: "Krohg painted politically charged images of workers, prostitutes, and fishermen. His novel <strong>Albertine</strong> was banned but helped change Norway's prostitution laws. He also mentored <strong>Edvard Munch</strong>." },
      { question: "Where can I see Krohg's paintings?", answer: "The <a href=\"/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo holds major works. The <a href=\"/museum/skagens-museum\"><strong>Skagens Museum</strong></a> in Denmark displays paintings from the artists' colony." },
      { question: "What art movement was Krohg part of?", answer: "Krohg was a leading <strong>Naturalist</strong> painter influenced by French realism. He helped transition Scandinavian art from Romanticism to socially engaged naturalism." },
      { question: "What was Albertine?", answer: "<strong>Albertine</strong> (1886) is Krohg's novel and painting series about a seamstress who becomes a prostitute. The work was banned but sparked public debate that helped change Norwegian law." },
      { question: "Did Krohg influence other artists?", answer: "Krohg mentored young <strong>Edvard Munch</strong> and taught at the Académie Colarossi in Paris. As director of Norway's Academy from 1909 to 1925, he shaped a generation of artists." },
      { question: "What subjects did Krohg paint?", answer: "Krohg painted <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>working-class subjects</strong></a>: Skagen fishermen, urban poor, seamstresses, and prostitutes. His social realism addressed conditions others avoided depicting." }
    ]
  },
  {
    slug: 'edward-hopper',
    bioFull: `<p><a href="/movement/american-realism"><strong>American Realist</strong></a> painter <strong>Edward Hopper</strong> (1882-1967) captured urban isolation and psychological tension through ordinary scenes that shock viewers into recognizing the strangeness of familiar places. Born in Nyack, New York to a middle-class family, he studied at the New York School of Art under William Merritt Chase and Robert Henri, who urged students to paint the everyday conditions of their own world.</p>

<p>Hopper worked as a commercial illustrator for years while developing his personal vision. Three trips to Paris between 1906 and 1910 introduced him to Impressionism, but he found his true subjects in American diners, gas stations, movie theaters, and empty offices. He married fellow artist Josephine Nivison in 1924; she became his only model for female figures and kept detailed records of his work.</p>

<p><strong>Nighthawks</strong> (1942), showing four people in a late-night diner viewed through its plate glass window, became one of the most recognized paintings in American art. Hopper said it was inspired by a Greenwich Village restaurant and admitted, "unconsciously, probably, I was painting the loneliness of a large city." He made 19 preparatory studies for the work. Hopper influenced Pop Art and New Realist painters of the 1960s and 70s. The <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> owns <strong>Nighthawks</strong>. The <a href="/museum/whitney-museum"><strong>Whitney Museum</strong></a> in New York holds the largest collection of his work. The <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> and <a href="/museum/met"><strong>Metropolitan Museum</strong></a> display major paintings.</p>`,
    faqs: [
      { question: "What is Edward Hopper famous for?", answer: "Hopper painted scenes of urban isolation and everyday American life. <strong>Nighthawks</strong> (1942), showing a late-night diner, is one of the most recognized paintings in American art." },
      { question: "Where can I see Nighthawks?", answer: "<strong>Nighthawks</strong> hangs at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>, one of the museum's most visited works. It was sold to the museum for $3,000 shortly after completion." },
      { question: "Where can I see Hopper's paintings?", answer: "The <a href=\"/museum/whitney-museum\"><strong>Whitney Museum</strong></a> holds the largest Hopper collection. The <a href=\"/museum/moma\"><strong>MoMA</strong></a> and <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> also display major works." },
      { question: "What art movement was Hopper part of?", answer: "Hopper is the defining figure of <a href=\"/movement/american-realism\"><strong>American Realism</strong></a>. His work influenced Pop Art and New Realist painters of the 1960s and 70s." },
      { question: "What subjects did Hopper paint?", answer: "Hopper painted diners, gas stations, movie theaters, hotel rooms, and empty offices. His scenes capture modern American life with psychological intensity and <a href=\"https://luxurywallart.com/collections/minimalist-art\" target=\"_blank\" rel=\"noopener\"><strong>stark simplicity</strong></a>." },
      { question: "Who was Josephine Nivison?", answer: "<strong>Josephine Nivison</strong> was Hopper's wife and fellow artist. She modeled for every female figure in his paintings, including the red-haired woman in <strong>Nighthawks</strong>." }
    ]
  },
  {
    slug: 'emanuel-de-witte',
    bioFull: `<p><a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter <strong>Emanuel de Witte</strong> (c. 1616-1692) became the foremost painter of church interiors in the Netherlands, bringing unprecedented drama to architectural subjects through his handling of light and shadow. Born in Alkmaar to a schoolteacher's family, he trained under the still-life painter Evert van Aelst in Delft.</p>

<p>De Witte moved between Rotterdam, Delft, and Amsterdam during his career. Until about 1650, when he was thirty-four, he painted primarily figure compositions. Then he turned to the subject that would define him: church interiors. Unlike contemporaries Gerard Houckgeest and Hendrick van Vliet, who focused on accurate architectural rendering, de Witte created <strong>imaginative compositions</strong> that prioritized atmosphere over topographical precision. He merged elements from different churches into fantasy spaces flooded with dramatic light.</p>

<p>Arnold Houbraken wrote that "in the painting of churches, no one was his equal with regard to orderly architecture, innovative use of light and well-formed figures." De Witte also painted market scenes, harbor views, and domestic interiors. His personal life was troubled by constant debt. Late in life, he moved in with painter Hendrick van Streeck in exchange for teaching him church interiors. According to Houbraken, after an argument about rent, de Witte hanged himself from a canal bridge in Amsterdam in 1692; the rope broke and he drowned. The <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> holds major works. Paintings also hang at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> London.</p>`,
    faqs: [
      { question: "What is Emanuel de Witte famous for?", answer: "De Witte was the leading Dutch painter of <strong>church interiors</strong>, known for dramatic light effects and imaginative compositions that merged elements from different buildings." },
      { question: "Where can I see de Witte's paintings?", answer: "The <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam holds major works. Paintings also hang at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a> and <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London." },
      { question: "What art movement was de Witte part of?", answer: "De Witte worked during the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. His atmospheric church interiors represent the final flowering of architectural painting in the Netherlands." },
      { question: "How was de Witte different from other church painters?", answer: "Unlike Houckgeest and Van Vliet, who painted <strong>accurate views</strong>, de Witte created fantasy interiors combining elements from different churches, prioritizing dramatic light over topographical precision." },
      { question: "What other subjects did de Witte paint?", answer: "Besides churches, de Witte painted <strong>market scenes</strong>, harbor views, and domestic interiors. His earlier career focused on figure compositions before he specialized in architecture." },
      { question: "How did de Witte die?", answer: "According to Arnold Houbraken, de Witte hanged himself from a canal bridge in Amsterdam after an argument about rent. The rope broke and he drowned. His body was found in the canal." }
    ]
  },
  {
    slug: 'francesco-furini',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> painter <strong>Francesco Furini</strong> (c. 1603-1646) created sensuous religious and mythological paintings that made him a leading figure in 17th-century Florence. Born into an artistic family (his father Filippo was a portrait painter, his sister Alessandra also painted, and another sister sang at the Medici court), he learned drawing basics at home before training with Matteo Rosselli.</p>

<p>Furini traveled to Rome in 1619, where he worked in the studio of Bartolomeo Manfredi, the leading follower of Caravaggio. There he befriended Giovanni da San Giovanni, collaborating on frescoes at the Palazzo Pallavicini-Rospigliosi. Returning to Florence, he developed a distinctive style marked by soft sfumato modeling and idealized <strong>female figures</strong>. His nudes in paintings like <strong>Hylas and the Nymphs</strong> (1630) demonstrate the importance he placed on drawing from life. Galileo Galilei and Guido Reni were among his admirers.</p>

<p>In 1633, Furini took an unexpected turn: he became a parish priest in Sant'Ansano in Mugello. Yet he continued painting. Grand Duke Ferdinando II de' Medici commissioned frescoes for the <a href="/museum/palazzo-pitti"><strong>Palazzo Pitti</strong></a>, which Furini completed between 1639 and 1642. The <strong>Platonic Academy of Careggi</strong> and <strong>Allegory of the Death of Lorenzo the Magnificent</strong> remain in the Silver Museum there. Furini died in Florence in 1646, just forty-three years old. The <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> holds paintings, including <strong>Hylas and the Nymphs</strong>. His pupils included Simone Pignoni. Furini was largely forgotten until scholars rediscovered him in the twentieth century.</p>`,
    faqs: [
      { question: "What is Francesco Furini famous for?", answer: "Furini painted sensuous <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female figures</strong></a> in religious and mythological scenes. His soft sfumato technique and idealized nudes made him a leading Baroque painter in Florence." },
      { question: "Where can I see Furini's paintings?", answer: "The <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> holds <strong>Hylas and the Nymphs</strong>. Frescoes remain at the <a href=\"/museum/palazzo-pitti\"><strong>Palazzo Pitti</strong></a>'s Silver Museum in Florence." },
      { question: "What art movement was Furini part of?", answer: "Furini was a <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter who bridged Florentine Mannerist traditions and the new Roman style. He studied with followers of Caravaggio in Rome." },
      { question: "Was Furini a priest?", answer: "Yes. In 1633, Furini became a parish priest in Sant'Ansano in Mugello. He continued painting religious and mythological subjects while serving the church until his death in 1646." },
      { question: "What is Hylas and the Nymphs?", answer: "<strong>Hylas and the Nymphs</strong> (1630) shows six female nudes surrounding the youth Hylas. The painting demonstrates Furini's skill at drawing from life and his characteristic soft modeling." },
      { question: "Who admired Furini's work?", answer: "<strong>Galileo Galilei</strong> and <strong>Guido Reni</strong> were among Furini's admirers in Florence. Grand Duke Ferdinando II de' Medici commissioned important frescoes from him." }
    ]
  }
];

async function main() {
  for (const update of updates) {
    try {
      await prisma.artist.update({
        where: { slug: update.slug },
        data: {
          bioFull: update.bioFull,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${update.slug}`);
    } catch (error) {
      console.error(`Failed to update ${update.slug}:`, error.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
