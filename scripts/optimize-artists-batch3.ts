import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Batch 3: Artists 21-30
const artistUpdates: Record<string, { bioFull: string; faqs: { question: string; answer: string }[] }> = {
  "samuel-palmer": {
    bioFull: `<p><strong>Samuel Palmer</strong> (1805–1881) created some of the most intensely visionary landscapes in British art. Born in London to a bookseller, he was a delicate child who began exhibiting at the Royal Academy at fourteen. In 1824, John Linnell introduced him to William Blake, an encounter that transformed his art.</p>

<p>Blake's influence ignited Palmer's "Shoreham period" (1826–1835), when he lived in a run-down cottage nicknamed "Rat Abbey" in the Kent village. There he painted the surrounding countryside as a demi-paradise: harvest moons rising over ripe corn, shepherds watching flocks beneath ancient trees, churches nestled in valleys. These small paintings glow with religious intensity, often rendered in rich sepias and golds. He associated with the "Ancients," a group of Blake-influenced artists including George Richmond and Edward Calvert.</p>

<p>Palmer left Shoreham in 1834, married John Linnell's daughter in 1837, and spent two years honeymooning in Italy. The visionary intensity gradually faded from his work. He became a full member of the Water Colour Society in 1854 and took up etching in 1850, becoming one of Britain's most innovative printmakers. His late watercolors illustrating Milton show renewed power. The death of his elder son in 1861 devastated him. Palmer himself was virtually forgotten until the 1920s, when his Shoreham paintings influenced modern <a href="/movement/romanticism"><strong>Romantic</strong></a> artists like Paul Nash and Graham Sutherland. Kenneth Clark called him "the English Van Gogh." His work is held at the <a href="/museum/tate-modern"><strong>Tate</strong></a> and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Samuel Palmer part of?", answer: `Palmer was a British <a href="/movement/romanticism"><strong>Romantic</strong></a> painter, strongly influenced by William Blake. His visionary landscapes anticipated aspects of Symbolism.` },
      { question: "Where can I see Samuel Palmer's paintings?", answer: `Major collections are at <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the Ashmolean Museum in Oxford.` },
      { question: "What was Samuel Palmer's 'Shoreham period'?", answer: `Between 1826 and 1835, Palmer lived in Shoreham, Kent, producing his most <strong>intensely visionary landscapes</strong>: harvest moons, pastoral scenes, and glowing visions of rural paradise.` },
      { question: "Who influenced Samuel Palmer's art?", answer: `<strong>William Blake</strong> was the defining influence. Palmer met Blake in 1824, and Blake's mystical vision transformed Palmer's approach to landscape painting.` },
      { question: "Why was Samuel Palmer called 'the English Van Gogh'?", answer: `Art historian Kenneth Clark gave him this title for his <strong>intense emotional vision</strong> of nature and his rediscovery by modern artists after decades of obscurity.` }
    ]
  },

  "thomas-lawrence": {
    bioFull: `<p><strong>Sir Thomas Lawrence</strong> (1769–1830) was the most brilliant British portraitist of the Regency era. A child prodigy born in Bristol to an innkeeper, he was showing off his talents to guests at age six. By ten, living in Bath, he was supporting his family with pastel portraits. He moved to London at eighteen, was admitted to the Royal Academy, and never looked back.</p>

<p>At twenty, Lawrence received his first royal commission to paint Queen Charlotte and Princess Amelia. At twenty-five, he became the youngest person ever elected a Royal Academician (among non-founding members). He was knighted in 1815 and became President of the Academy in 1820. His portraits of allied leaders for the Waterloo Chamber at Windsor Castle remain among the finest group of state portraits ever painted.</p>

<p>Self-taught, Lawrence had a gift for capturing likenesses and a virtuoso handling of paint. His subjects seem to glow with life and personality. He painted most important figures of his day in a polished, flattering style. Yet despite constant commissions, his finances were perpetually disastrous. He narrowly avoided bankruptcy, was bailed out by wealthy friends, and died insolvent. Lawrence was also a distinguished collector whose drawings collection was one of the finest ever assembled. He helped secure the Elgin Marbles for Britain and influenced the founding of the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>. He died suddenly in 1830 and was buried in St Paul's Cathedral. His portraits hang at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> and <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>.</p>`,
    faqs: [
      { question: "What was Thomas Lawrence known for painting?", answer: `Lawrence was Britain's leading <strong>portrait painter</strong> of the Regency era, renowned for capturing likenesses with a polished, flattering style that made subjects glow with life.` },
      { question: "Where can I see Thomas Lawrence's paintings?", answer: `His work is at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>, <a href="/museum/tate-modern"><strong>Tate Britain</strong></a>, and the Royal Collection. The Waterloo Chamber at Windsor holds his famous allied leaders series.` },
      { question: "Was Thomas Lawrence a child prodigy?", answer: `Yes, he was <strong>showing off portrait skills to guests at age six</strong> and supporting his family with pastel portraits by age ten.` },
      { question: "What honors did Thomas Lawrence receive?", answer: `He was <strong>knighted in 1815</strong> and became President of the Royal Academy in 1820. At 25, he was the youngest person ever elected a Royal Academician.` },
      { question: "Where is Thomas Lawrence buried?", answer: `He received a public funeral and was buried in <strong>St Paul's Cathedral</strong> in London in 1830, with Sir Robert Peel among the pallbearers.` }
    ]
  },

  "vasily-polenov": {
    bioFull: `<p><strong>Vasily Polenov</strong> (1844–1927) brought light and air to Russian landscape painting. Born in St. Petersburg to a cultured, aristocratic family, his father was an archaeologist, his mother a painter and portraitist. This intellectual background shaped his refined sensibility. He studied with Pavel Chistyakov and later taught at the Moscow School of Painting, where his students included Isaac Levitan and Konstantin Korovin.</p>

<p>Polenov was among the first Russian artists to achieve plein air freshness while maintaining finished compositions. In 1874, he and Ilya Repin traveled to Normandy following advice from painter Alexei Bogolyubov, working outdoors in the manner of the Barbizon School. His paintings from the late 1870s, including <em>Moscow Courtyard</em> (1878), <em>Grandmother's Garden</em> (1878), and <em>Overgrown Pond</em> (1879), capture Russian landscapes with unprecedented luminosity.</p>

<p>His contemporaries called him "the Knight of Beauty" for embodying both European and Russian traditions. Working in the <a href="/movement/realism"><strong>Realist</strong></a> tradition of Aleksey Savrasov, Polenov conveyed the quiet poetry of Russian nature with sensitivity and delicacy. He was elected to the St. Petersburg Academy of Arts in 1893 and named People's Artist of the USSR in 1926. After the Revolution, his estate became the first national museum. Polenov died in 1927, and the <strong>Polenovo Museum</strong> preserves his legacy today. His work also appears in the State Tretyakov Gallery.</p>`,
    faqs: [
      { question: "What was Vasily Polenov known for painting?", answer: `Polenov was celebrated for <strong>luminous Russian landscapes</strong> that combined plein air freshness with compositional refinement. <em>Moscow Courtyard</em> (1878) exemplifies his style.` },
      { question: "Where can I see Vasily Polenov's paintings?", answer: `His work is at the <strong>State Tretyakov Gallery</strong> in Moscow and the <strong>Polenovo Museum</strong>, his former estate that became Russia's first national museum.` },
      { question: "What art movement was Vasily Polenov part of?", answer: `Polenov worked in the <a href="/movement/realism"><strong>Realist</strong></a> tradition, following Aleksey Savrasov and Fyodor Vasilyev. He was among the first Russians to paint in a plein air manner.` },
      { question: "Who were Vasily Polenov's famous students?", answer: `He taught at the Moscow School of Painting, where his students included <strong>Isaac Levitan and Konstantin Korovin</strong>, who became major Russian painters.` },
      { question: "Why was Polenov called 'the Knight of Beauty'?", answer: `His contemporaries gave him this title because he <strong>embodied both European refinement and Russian artistic traditions</strong>, combining technical skill with poetic sensitivity.` }
    ]
  },

  "wilhelm-leibl": {
    bioFull: `<p><strong>Wilhelm Leibl</strong> (1844–1900) was Germany's greatest Realist painter. Born in Cologne, the son of the Cathedral choir director, he initially trained as a locksmith before his drawing talent was recognized. He entered the Munich Academy in 1864, studying with Carl Theodor von Piloty and establishing a group studio with fellow young painters.</p>

<p>In 1869, Gustave Courbet came to Munich to exhibit his work, making a powerful impact on Leibl and his circle. After studying Courbet's method, Leibl's paintings became looser, their subjects depicted with thick impasto against dark backgrounds. At Courbet's suggestion, Leibl went to Paris, where he met Édouard Manet. The Franco-Prussian War forced his return in 1870.</p>

<p>In 1873, Leibl left Munich for the isolated Bavarian countryside, where he spent the rest of his life painting peasants without sentimentality or anecdote. His masterpiece, <em>Three Women in Church</em> (1878–1882), took four years to complete and recalls the clarity of Holbein. This period is known as his "Holbein period" for its disciplined precision. He led a group called the <a href="/movement/realism"><strong>Leibl-Kreis</strong></a> (Leibl Circle), including Carl Schuch and Wilhelm Trübner. Unlike Impressionists, Leibl painted without preliminary drawing, working directly with color. He visited the Netherlands in 1898 and exhibited at the Berlin Secession in 1899. He died in Würzburg in 1900. His work is held at the <a href="/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich and the Kunsthalle Hamburg.</p>`,
    faqs: [
      { question: "What art movement was Wilhelm Leibl associated with?", answer: `Leibl was Germany's leading <a href="/movement/realism"><strong>Realist</strong></a> painter. He led the Leibl-Kreis (Leibl Circle), a group of German realists influenced by Courbet.` },
      { question: "Where can I see Wilhelm Leibl's paintings?", answer: `His work is at the <a href="/museum/alte-pinakothek"><strong>Alte Pinakothek</strong></a> in Munich, the <strong>Kunsthalle Hamburg</strong> (which holds <em>Three Women in Church</em>), and other German museums.` },
      { question: "What is Wilhelm Leibl's most famous painting?", answer: `<em>Three Women in Church</em> (1878–1882), which took <strong>four years to complete</strong>. Its precise realism recalls Hans Holbein's clarity.` },
      { question: "Who influenced Wilhelm Leibl's art?", answer: `<strong>Gustave Courbet</strong> was the defining influence. Courbet visited Munich in 1869, and Leibl later traveled to Paris at Courbet's suggestion.` },
      { question: "What was Leibl's painting technique?", answer: `Leibl painted <strong>without preliminary drawing</strong>, working directly with color. This approach paralleled aspects of Impressionism despite his realist subject matter.` }
    ]
  },

  "albert-marquet": {
    bioFull: `<p><strong>Albert Marquet</strong> (1875–1947) was the quiet master among the Fauves. Born in Bordeaux, he moved to Paris as a teenager to attend the École des Arts Décoratifs, where he met Henri Matisse. The two became lifelong friends. He studied under Gustave Moreau at the École des Beaux-Arts alongside Georges Rouault, absorbing the symbolist master's color sense.</p>

<p>Marquet and Matisse were painting in pure colors as early as 1898, before <a href="/movement/fauvism"><strong>Fauvism</strong></a> had a name. At the infamous 1905 Salon d'Automne, his work hung alongside Matisse, Derain, and Vlaminck, earning them all the label "Fauves" (wild beasts). Yet Marquet always differed from his friends. While they used violent, intense colors, he preferred grayed yellows, grayed violets, and subtle blues. Black served as a sharp contrast to light rather than being banished from the palette.</p>

<p>After 1907, Marquet alternated between his Paris studio and travels to European coasts and North Africa. Venice and Naples particularly impressed him, with their play of light over water. He painted harbors, rivers, and coastal scenes with a serene naturalism quite different from Fauve intensity. Fleeing the German invasion in 1939, he took refuge in Algeria until war's end. He died suddenly in 1947 from a gall bladder attack and undiagnosed cancer. His work is held at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/hermitage"><strong>Hermitage</strong></a>, and the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Albert Marquet part of?", answer: `Marquet was one of the original <a href="/movement/fauvism"><strong>Fauves</strong></a>, exhibiting at the 1905 Salon d'Automne. However, his palette was more subdued than his fellow Fauves.` },
      { question: "Where can I see Albert Marquet's paintings?", answer: `His work is at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, the <a href="/museum/hermitage"><strong>Hermitage</strong></a> in St. Petersburg, and the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> in New York.` },
      { question: "What subjects did Albert Marquet paint?", answer: `Marquet specialized in <strong>harbors, rivers, and coastal scenes</strong>, particularly views of Venice, Naples, and the Seine in Paris.` },
      { question: "How did Marquet differ from other Fauves?", answer: `Unlike Matisse and Derain's violent colors, Marquet used <strong>grayed tones and subtle harmonies</strong>. He used black as a strong contrast rather than avoiding it.` },
      { question: "Was Albert Marquet friends with Henri Matisse?", answer: `Yes, they were <strong>lifelong friends</strong>, meeting as students at the École des Arts Décoratifs. They painted together in pure colors as early as 1898.` }
    ]
  },

  "alfred-thompson-bricher": {
    bioFull: `<p><strong>Alfred Thompson Bricher</strong> (1837–1908) was the last important painter of American Luminism. Born in Portsmouth, New Hampshire, he grew up in Newburyport, Massachusetts, and worked as a clerk in a Boston dry-goods store while teaching himself to paint. In 1858, meeting marine artists Charles Temple Dix and William Stanley Haseltine at Mount Desert, Maine, convinced him to become a professional painter.</p>

<p>Largely self-taught, Bricher established studios in Newburyport and Boston by 1859, focusing on New England landscapes. He was influenced by <a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a> artists like Frederic Church and Asher Durand, earning a reputation for autumnal scenes. In 1864, he began working with Louis Prang & Company, the Boston firm that invented chromolithography, offering prints through their catalog.</p>

<p>After moving to New York in 1868, Bricher increasingly focused on maritime subjects. He spent summers at Grand Manan and other coastal locations, producing watercolors and oils of beaches, waves, and rocky shores. A Luminist, he explored how light reflected, refracted, and absorbed across landscapes and seascapes, seeking both visual accuracy and spiritual luminosity. He was elected Associate of the National Academy of Design in 1879. In the 1890s, he purchased a home on Staten Island with views of the Atlantic and Raritan Bay. By his death in 1908, the Hudson River School had fallen from fashion. His reputation revived in the 1980s, and he's now credited as one of the nineteenth century's greatest maritime painters. His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> and the Smithsonian.</p>`,
    faqs: [
      { question: "What art movement was Alfred Thompson Bricher part of?", answer: `Bricher was associated with <a href="/movement/hudson-river-school"><strong>Luminism</strong></a>, an offshoot of the Hudson River School known for its emphasis on light effects and serene atmospheres.` },
      { question: "Where can I see Alfred Thompson Bricher's paintings?", answer: `His work is at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the Smithsonian American Art Museum, and the Museum of Fine Arts, Boston.` },
      { question: "What subjects did Alfred Thompson Bricher paint?", answer: `Bricher specialized in <strong>coastal and maritime scenes</strong>: New England beaches, rocky shores, waves, and the effects of light on water.` },
      { question: "Was Alfred Thompson Bricher self-taught?", answer: `Largely <strong>self-taught</strong>, he learned by studying Hudson River School painters and sketching at Mount Desert, Maine, where he met other marine artists.` },
      { question: "Why is Bricher called 'the last Luminist'?", answer: `He continued painting in the Luminist style <strong>long after it fell from fashion</strong> around 1900. He's considered the last significant artist of this American movement.` }
    ]
  },

  "andy-warhol": {
    bioFull: `<p><strong>Andy Warhol</strong> (1928–1987) turned mass culture into high art. Born Andrew Warhola in Pittsburgh to Slovak immigrant parents, he suffered a childhood nervous disorder that kept him homebound for months. His mother supplied art materials and movie magazines that would shape his sensibility. He graduated from Carnegie Tech in 1949 and moved to New York, becoming one of the most successful commercial illustrators of the 1950s.</p>

<p>In 1962, Warhol exhibited his <em>Campbell's Soup Cans</em>, thirty-two canvases of identical soup cans, launching <a href="/movement/pop-art"><strong>Pop Art</strong></a> into the mainstream. His silkscreen portraits of celebrities, including the iconic <em>Marilyn Diptych</em> (1962), blurred the line between art and advertising. His studio, The Factory, became a gathering place for intellectuals, drag queens, musicians, and celebrities. He produced films, managed the Velvet Underground, founded Interview magazine, and cultivated a carefully constructed public persona.</p>

<p>In 1968, Valerie Solanas shot and nearly killed him. He survived but never fully recovered physically. His later work included commissioned portraits and collaborations with younger artists like Jean-Michel Basquiat. He died unexpectedly in 1987 following gallbladder surgery. The Andy Warhol Museum in Pittsburgh, the largest U.S. museum dedicated to a single artist, preserves over 500 works. His art fills the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and the <a href="/museum/whitney"><strong>Whitney Museum</strong></a>. In 2022, <em>Shot Sage Blue Marilyn</em> sold for $195 million, the highest price for an American artwork at auction.</p>`,
    faqs: [
      { question: "What art movement did Andy Warhol lead?", answer: `Warhol was the leading figure of <a href="/movement/pop-art"><strong>Pop Art</strong></a>, which drew subject matter from advertising, consumer products, and celebrity culture.` },
      { question: "Where can I see Andy Warhol's paintings?", answer: `Major collections are at the <strong>Andy Warhol Museum</strong> in Pittsburgh, <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and the <a href="/museum/whitney"><strong>Whitney Museum</strong></a>.` },
      { question: "What is Andy Warhol's most famous work?", answer: `His <em>Campbell's Soup Cans</em> (1962) and <em>Marilyn Diptych</em> (1962) are among the most <strong>recognized images of 20th-century art</strong>.` },
      { question: "What was Andy Warhol's Factory?", answer: `The Factory was Warhol's <strong>New York studio</strong>, famous as a gathering place for artists, musicians, celebrities, and the avant-garde throughout the 1960s.` },
      { question: "What record did Warhol's work set at auction?", answer: `<em>Shot Sage Blue Marilyn</em> sold for <strong>$195 million in 2022</strong>, the highest price ever paid at auction for an American artwork.` }
    ]
  },

  "bruno-liljefors": {
    bioFull: `<p><strong>Bruno Liljefors</strong> (1860–1939) revolutionized wildlife painting. Born in Uppsala, Sweden, to parents who worried about his frail health, he spent childhood indoors drawing. Prescribed fresh air and walks, he grew into an athletic young man who even performed as an acrobat with his brothers. He studied at the Royal Academy of Fine Arts in Stockholm, where he befriended Anders Zorn, and traveled through Germany and Italy in the early 1880s.</p>

<p>Liljefors broke from the tradition of formal, static wildlife depictions. He painted animals as they truly appeared in nature: hunting, fleeing, interacting with their environments. A lifelong hunter himself, he understood predator-prey dynamics intimately. His scenes of foxes chasing hares, sea eagles diving for eiders, and goshawks attacking grouse capture violence without melodrama. He kept a collection of live animals as models and was influenced by Japanese art's treatment of nature.</p>

<p>His technique combined Impressionistic brushwork with observed realism. Birds blend into marshes, foxes emerge from snow, animals exist within their environments rather than posed against backdrops. Despite personal troubles, including two divorces (one to sisters) and financial difficulties, he worked prolifically until facial neuralgia impaired him in 1925. He died in Stockholm in 1939. The <a href="/museum/national-museum-stockholm"><strong>National Museum</strong></a> in Stockholm holds a significant collection, and the National Museum of Wildlife Art in Wyoming has one of the largest collections outside Sweden. American wildlife artist Robert Bateman cites him as a primary influence.</p>`,
    faqs: [
      { question: "What was Bruno Liljefors known for painting?", answer: `Liljefors specialized in <strong>wildlife art</strong>, particularly dramatic predator-prey scenes. He revolutionized the genre by painting animals naturally within their environments.` },
      { question: "Where can I see Bruno Liljefors's paintings?", answer: `Major collections are at the <a href="/museum/national-museum-stockholm"><strong>National Museum</strong></a> in Stockholm, the Thiel Gallery, and the <strong>National Museum of Wildlife Art</strong> in Wyoming.` },
      { question: "What made Bruno Liljefors's wildlife paintings different?", answer: `He <strong>painted animals in motion within their natural habitats</strong>, unlike formal Victorian wildlife art. His technique blended Impressionism with careful observation.` },
      { question: "Was Bruno Liljefors influenced by Japanese art?", answer: `Yes, <strong>Japanese art</strong> influenced his treatment of nature, visible in works like <em>Goldfinches</em> where birds integrate naturally with their backgrounds.` },
      { question: "Did Bruno Liljefors hunt?", answer: `Yes, he was a <strong>lifelong hunter</strong>, which gave him intimate knowledge of predator-prey dynamics. He also kept live animals as models for his paintings.` }
    ]
  },

  "caspar-netscher": {
    bioFull: `<p><strong>Caspar Netscher</strong> (1639–1684) brought elegance to Dutch portraiture. Born in Heidelberg to a sculptor who died before his birth, his mother fled the Thirty Years' War with her children, and only Caspar survived the journey to the Netherlands. He trained with Hendrick Coster in Arnhem and then spent four years as a gifted pupil of Gerard ter Borch in Deventer, learning the master's technique for rendering costly fabrics.</p>

<p>Planning to travel to Rome, Netscher got only as far as Bordeaux, where he fell in love with Margaretha Godyn and married her in 1659. The family returned to the Netherlands in 1662, driven by increasing hostility toward Protestants in France. Netscher settled in The Hague, joining the painters' confraternity Pictura the same year.</p>

<p>His early work included genre scenes and history paintings, but from about 1670 he devoted himself almost exclusively to portraits, often for The Hague's court circles. He found a generous patron in William III of Orange, and Charles II reportedly invited him to England. His portraits are elegant, small in scale, and exquisitely finished, with an international Frenchified style that influenced Dutch portraiture into the 18th century. He was renowned for depicting silk, brocade, and particularly white satin, learned from ter Borch. Suffering from gout, he painted lying in bed toward the end. He died prematurely in 1684 at forty-five, leaving twelve children, two of whom became painters. His work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What was Caspar Netscher known for painting?", answer: `Netscher specialized in <strong>elegant small-scale portraits</strong> for court circles, renowned for his exquisite rendering of fabrics like silk and white satin.` },
      { question: "Where can I see Caspar Netscher's paintings?", answer: `His work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.` },
      { question: "What art movement was Caspar Netscher part of?", answer: `Netscher was a <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter, working in The Hague during the 17th century. His style had French influences unusual for Dutch painters.` },
      { question: "Who taught Caspar Netscher to paint?", answer: `He studied for four years with <strong>Gerard ter Borch</strong>, learning the master's famous technique for rendering expensive fabrics, especially white satin.` },
      { question: "Did Caspar Netscher have royal patrons?", answer: `Yes, <strong>William III of Orange</strong> was a generous patron. Charles II of England reportedly invited him to work at the English court.` }
    ]
  },

  "christian-krohg": {
    bioFull: `<p><strong>Christian Krohg</strong> (1852–1925) brought unflinching social realism to Norwegian art. Born in Oslo to a journalist father, he studied law at university before abandoning it for painting in 1873. He trained at the Baden School of Art in Karlsruhe and the Royal Academy in Berlin, absorbing the influence of French thinkers like Émile Zola and the Naturalist movement.</p>

<p>At the Danish coastal town of Skagen, Krohg joined the famous Skagen Painters colony, where artists gathered to capture the region's unique light. His paintings of fishermen and working people, like <em>The Net Mender</em>, show his skill at depicting labor with dignity. He influenced Anna and Michael Ancher and provided early support to Edvard Munch.</p>

<p>In 1886, Krohg published <em>Albertine</em>, a realist novel about a poor woman driven into prostitution by an abusive system. It was immediately banned for offending public decency. He then painted <em>Albertine at the Police Doctor's Waiting Room</em>, his most important work, using actual prostitutes as models. Few Norwegian artworks have sparked such fierce debate. Krohg founded and edited the Kristiania Bohemian journal <em>Impressionisten</em> (1886–1890), taught at the Académie Colarossi in Paris (1902–1909), and directed the Norwegian Academy of Arts from 1909 until his death. He was decorated with the French Legion of Honour (1889), the Belgian Order of Leopold (1894), and Norway's Order of St. Olav (1900). His work fills the National Museum in Oslo and Skagens Museum in Denmark.</p>`,
    faqs: [
      { question: "What art movement was Christian Krohg associated with?", answer: `Krohg was Norway's leading <a href="/movement/realism"><strong>Naturalist/Realist</strong></a> painter, influenced by Émile Zola and French social realism. He was also part of the Skagen Painters colony.` },
      { question: "Where can I see Christian Krohg's paintings?", answer: `His work is at the <strong>National Museum of Art</strong> in Oslo and <strong>Skagens Museum</strong> in Denmark.` },
      { question: "What was Christian Krohg's most controversial work?", answer: `<em>Albertine at the Police Doctor's Waiting Room</em>, depicting prostitutes, caused scandal. His novel <em>Albertine</em> (1886) was <strong>banned for obscenity</strong>.` },
      { question: "Did Christian Krohg influence other artists?", answer: `Yes, he influenced <strong>Anna and Michael Ancher</strong> at Skagen and provided early support to <strong>Edvard Munch</strong>.` },
      { question: "What honors did Christian Krohg receive?", answer: `He was made Knight of the <strong>French Legion of Honour</strong> (1889), the Belgian Order of Leopold (1894), and received Norway's Order of St. Olav (1900).` }
    ]
  }
};

async function main() {
  console.log("Updating artists batch 3 (10 artists)...\n");

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

  console.log(`\nUpdated ${updated} artists in batch 3`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
