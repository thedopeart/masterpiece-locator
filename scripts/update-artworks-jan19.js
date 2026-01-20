const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  // === BATCH 1 ===
  {
    slug: 'anxiety-munch',
    description: `<p><a href="/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted Anxiety in 1894, a year after The Scream. The composition borrows heavily from that famous work. A crowd of pale, hollow-eyed figures walks toward the viewer along the same Oslo fjord, beneath the same swirling <a href="https://luxurywallart.com/collections/orange-art" target="_blank" rel="noopener"><strong>orange</strong></a> and purple sky. But here the horror is collective rather than individual.</p>
<p>The painting measures 94 by 73 centimeters and now hangs at the <a href="/museum/munch-museum"><strong>Munch Museum</strong></a> in Oslo. Munch added this work to his "Frieze of Life" series, a cycle exploring love, anxiety, and death. The title comes from the Norwegian word <strong>angst</strong>, a term that became central to existentialist philosophy. Two years later, Munch created woodcut and lithograph versions, printing them on colored paper to heighten their emotional impact.</p>
<p>The crowd's dark clothing and blank expressions reflect the artist's ongoing exploration of psychological themes drawn from personal trauma. His sister Sophie had died young, and Munch returned again and again to images of mortality and dread throughout his career.</p>`,
    faqs: [
      { question: "Where can I see Anxiety by Munch?", answer: "The painting hangs at the <a href=\"/museum/munch-museum\"><strong>Munch Museum</strong></a> in Oslo, Norway. It's displayed alongside other works from <a href=\"/artist/edvard-munch\"><strong>Munch's</strong></a> Frieze of Life series." },
      { question: "How is Anxiety related to The Scream?", answer: "Both paintings share the same Oslo fjord setting and <a href=\"https://luxurywallart.com/collections/orange-art\" target=\"_blank\" rel=\"noopener\"><strong>orange</strong></a> swirling sky. <a href=\"/artist/edvard-munch\"><strong>Munch</strong></a> painted Anxiety a year after The Scream, applying collective dread instead of individual anguish." },
      { question: "What size is Munch's Anxiety?", answer: "The painting measures 94 by 73 centimeters (about 37 by 29 inches). <a href=\"/artist/edvard-munch\"><strong>Munch</strong></a> also created print versions in woodcut and lithograph formats." },
      { question: "What movement does Anxiety belong to?", answer: "It's a key work of <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>, prioritizing emotional intensity over realistic depiction. The exaggerated colors and distorted figures are hallmarks of <a href=\"/artist/edvard-munch\"><strong>Munch's</strong></a> style." }
    ]
  },
  {
    slug: 'bathers-asnieres',
    description: `<p><a href="/artist/georges-seurat"><strong>Georges Seurat</strong></a> completed Bathers at Asni&egrave;res in 1884, his first major composition. The monumental canvas stretches two meters high by three meters wide, depicting young workers relaxing along the Seine at Asni&egrave;res, an industrial suburb northwest of Paris. Factory smokestacks rise in the background while the men cool off after their shifts.</p>
<p>Seurat was just 24 when he submitted this ambitious work to the Paris Salon. They rejected it. The snub led him to help found the Soci&eacute;t&eacute; des Artistes Ind&eacute;pendants, an organization that held exhibitions "without jury or prizes." The painting debuted at their inaugural show that same year. Critics remained puzzled, and recognition came only after Seurat's early death at 31.</p>
<p>Today the painting hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, where it's considered a highlight of the collection. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> water and golden light showcase Seurat's emerging interest in color theory, though he hadn't yet developed his signature pointillist technique. That would come with A Sunday Afternoon on the Island of La Grande Jatte.</p>`,
    faqs: [
      { question: "Where is Bathers at Asni&egrave;res displayed?", answer: "You'll find it at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. It's one of the museum's most celebrated <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> works." },
      { question: "How big is Bathers at Asni&egrave;res?", answer: "The canvas measures 201 by 300 centimeters (roughly 6.5 by 10 feet). <a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> painted it when he was only 24, making it an ambitious debut." },
      { question: "What style is Bathers at Asni&egrave;res?", answer: "It predates <a href=\"/artist/georges-seurat\"><strong>Seurat's</strong></a> pointillist period but shows his emerging color theory interests. The work bridges <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> and his later scientific approach to painting." },
      { question: "Why did the Salon reject Bathers at Asni&egrave;res?", answer: "The Paris Salon found the working-class subject matter and unconventional technique unsuitable. <a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> responded by helping found the Soci&eacute;t&eacute; des Artistes Ind&eacute;pendants." }
    ]
  },
  {
    slug: 'bathsheba-bath',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> painted Bathsheba at Her Bath in 1654, one of his most psychologically complex nudes. The scene comes from the Old Testament: King David spies Bathsheba bathing and summons her to his bed, setting off a chain of adultery and murder. But Rembrandt chose an unusual moment. Bathsheba holds David's letter, her expression troubled as she contemplates obeying a king or staying faithful to her soldier husband.</p>
<p>The model was likely Hendrickje Stoffels, Rembrandt's companion after his wife Saskia died. The same year this was painted, Hendrickje was called before the church council for "living in sin" with the artist. Their daughter Cornelia was born that year too. These real-life tensions may inform the painting's emotional weight.</p>
<p>X-rays reveal Rembrandt reworked the composition extensively. He originally painted Bathsheba looking sideways, perhaps watching David. In the final version her gaze drops, deepening her private anguish. The painting measures 142 by 142 centimeters and hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a>, where art historian Simon Schama called it "the first depiction of a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> thinking."</p>`,
    faqs: [
      { question: "Where is Bathsheba at Her Bath displayed?", answer: "The painting hangs in the Richelieu Wing of the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It entered the collection through the La Caze bequest in 1869." },
      { question: "Who was the model for Bathsheba?", answer: "Art historians believe Hendrickje Stoffels posed for <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a>. She was his companion and mother to his daughter Cornelia, born the same year the painting was completed." },
      { question: "What size is Bathsheba at Her Bath?", answer: "The canvas measures 142 by 142 centimeters (about 56 by 56 inches). X-rays show <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> reworked the composition multiple times before finishing." },
      { question: "What style is Bathsheba at Her Bath?", answer: "It's a masterwork of the Dutch <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period. <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> warm <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tones</strong></a> and psychological depth set it apart from typical biblical paintings of the era." }
    ]
  },
  {
    slug: 'bridge-water-lilies',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted Bridge over a Pond of Water Lilies in 1899 at his home in Giverny, France. Six years earlier he'd purchased a marshy plot across the railroad tracks from his house and transformed it into a water garden. The Japanese-style footbridge became one of his favorite subjects.</p>
<p>That summer Monet painted eighteen views of the bridge from a single vantage point. This vertical composition gives extra prominence to the <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>water lilies</strong></a> and their reflections. The pale turquoise bridge arcs across the upper third of the canvas, its shadows rendered in soft purple. Tall grasses and willows frame the edges.</p>
<p>The painting measures 92.7 by 73.7 centimeters and hangs at <a href="/museum/met"><strong>The Metropolitan Museum of Art</strong></a> in New York. It came to the Met through the H.O. Havemeyer Collection in 1929. Monet would return to his water garden obsessively for the rest of his life, eventually producing around 250 <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>water lily</strong></a> paintings.</p>`,
    faqs: [
      { question: "Where can I see Bridge over a Pond of Water Lilies?", answer: "The painting is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It's part of the H.O. Havemeyer Collection, bequeathed in 1929." },
      { question: "When did Monet paint his water lily bridge?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> completed this work in 1899. He painted 18 views of the <a href=\"https://luxurywallart.com/collections/green-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>green</strong></a> bridge that summer, all from the same spot in his Giverny garden." },
      { question: "What size is Bridge over a Pond of Water Lilies?", answer: "The canvas measures 92.7 by 73.7 centimeters (about 36 by 29 inches). Its vertical format emphasizes the pond and <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flowers</strong></a> rather than the bridge." },
      { question: "What movement does this painting belong to?", answer: "It's a prime example of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. <a href=\"/artist/claude-monet\"><strong>Monet's</strong></a> loose brushwork captures light and atmosphere rather than precise detail." }
    ]
  },
  {
    slug: 'dancers-blue',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> created Dancers in Blue around 1890 using pastel on paper. Four ballerinas cluster together, their <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>cobalt blue</strong></a> tutus forming a loose semicircle against a backdrop of browns and greens. They appear to be adjusting their costumes or catching their breath backstage.</p>
<p>By this period Degas was losing his eyesight, yet his work remained remarkably vital. The bold colors and confident strokes show an artist adapting his technique to his limitations. The painting measures approximately 75 by 73 centimeters and belongs to the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris.</p>
<p>Dance subjects consumed more than half of Degas's output. He observed rehearsals at the Paris Opera for years, sketching <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>dancers</strong></a> warming up, resting, and performing. Unlike the glamorous stage scenes audiences expected, he preferred showing the physical labor behind ballet. Aching muscles, exhaustion, waiting. This painting sits between those extremes, capturing a quiet moment of preparation.</p>`,
    faqs: [
      { question: "Where is Dancers in Blue displayed?", answer: "The pastel hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It's among the museum's most beloved <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> works." },
      { question: "What medium did Degas use for Dancers in Blue?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> worked in pastel on paper, a medium he favored increasingly as his eyesight declined. The <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue</strong></a> pigments remain vibrant today." },
      { question: "Why did Degas paint so many ballet scenes?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> had backstage access at the Paris Opera for years. Over half his work depicts dancers, though he focused on labor and fatigue rather than stage glamour." },
      { question: "What size is Dancers in Blue?", answer: "The pastel measures approximately 75 by 73 centimeters (about 30 by 29 inches). <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> created it around 1890 during his late career." }
    ]
  },
  {
    slug: 'death-and-life',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> worked on Death and Life from 1910 until 1916, reworking it several times despite winning a gold medal at the 1911 Rome exhibition. The composition divides into two halves. On the left, a skeletal figure wrapped in a cloak patterned with black crosses grips a club. On the right, a tangle of human bodies represents the full cycle of existence: babies, young lovers, mothers, elderly women, all intertwined.</p>
<p>Originally titled simply "Death," Klimt expanded the concept as he revised it. He repainted the <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> background with bluish-gray, added more female figures to the Life group, and gave Death direct eye contact with the living. At 180 by 200 centimeters, it's the second-largest surviving painting from his career.</p>
<p>Klimt described this as his most important figurative work. It hangs at the <a href="/museum/leopold-museum"><strong>Leopold Museum</strong></a> in Vienna, a fitting home given the city's role in his artistic development. The painting bridges his decorative <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>Golden Period</strong></a> with his later, more expressionistic style.</p>`,
    faqs: [
      { question: "Where is Death and Life displayed?", answer: "The painting hangs at the <a href=\"/museum/leopold-museum\"><strong>Leopold Museum</strong></a> in Vienna. It's one of <a href=\"/artist/gustav-klimt\"><strong>Klimt's</strong></a> largest surviving works." },
      { question: "How big is Klimt's Death and Life?", answer: "The canvas measures 180 by 200 centimeters (about 6 by 6.5 feet). It's the second-largest painting <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> ever made." },
      { question: "Why did Klimt keep reworking Death and Life?", answer: "Despite winning gold at Rome in 1911, <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> revised it until 1916. He repainted the <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> background gray and added figures." },
      { question: "What art movement does Death and Life represent?", answer: "It bridges <a href=\"/artist/gustav-klimt\"><strong>Klimt's</strong></a> decorative Golden Period with later <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>. The painting mixes ornamental patterns with raw emotional themes." }
    ]
  },
  {
    slug: 'grande-odalisque',
    description: `<p><a href="/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> completed Grande Odalisque in 1814 for Napoleon's sister, Queen Caroline of Naples. The painting shows a reclining nude seen from behind, her body impossibly elongated. Critics have counted anywhere from two to five extra vertebrae in her spine. Her left arm appears shorter than her right. None of this was accidental.</p>
<p>When exhibited at the 1819 Salon, viewers attacked the anatomical distortions. One critic complained the figure had "neither bones nor muscle, neither blood, nor life." Ingres had studied Mannerist painters like Parmigianino, whose Madonna with the Long Neck played similar tricks with proportion. He stretched the odalisque's torso deliberately, perhaps to distance her thoughts from her body, to emphasize the gulf between her inner life and her role as a harem concubine.</p>
<p>The painting measures 91 by 162 centimeters and entered the <a href="/museum/louvre"><strong>Louvre</strong></a> collection in 1899. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> and gold fabrics contrast with her pale flesh, creating a cool, detached sensuality that influenced later artists from Manet to Picasso.</p>`,
    faqs: [
      { question: "Where is Grande Odalisque displayed?", answer: "The painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It was purchased in 1899 and remains one of <a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres's</strong></a> most famous works." },
      { question: "Why does the woman have an elongated spine?", answer: "<a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> stretched her torso deliberately, inspired by Mannerist painters. Studies found she has five extra vertebrae, not the commonly cited three." },
      { question: "Who commissioned Grande Odalisque?", answer: "Napoleon's sister, Queen Caroline of Naples, ordered the painting in 1814. She never collected it due to political upheaval, and <a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> kept it for years." },
      { question: "What style is Grande Odalisque?", answer: "It's a <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> work with Romantic influences. <a href=\"/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> combined idealized forms with an exotic subject popular in early 19th-century France." }
    ]
  },
  {
    slug: 'hunters-in-the-snow',
    description: `<p><a href="/artist/pieter-bruegel-the-elder"><strong>Pieter Bruegel the Elder</strong></a> painted Hunters in the Snow in 1565, one of a series depicting the months or seasons. Three hunters trudge home through deep snow, their dogs exhausted, game scarce. A single fox dangles from one man's belt. Below them, villagers skate on frozen ponds while <a href="https://luxurywallart.com/collections/bird-art" target="_blank" rel="noopener"><strong>birds</strong></a> perch in bare branches.</p>
<p>The painting captures what historians call the "Little Ice Age," a period of harsh European winters. Bruegel set the scene in an imaginary alpine village, combining Flemish lowland details with mountainous terrain he'd observed traveling through the Alps. The result feels both specific and universal.</p>
<p>An Antwerp banker named Niclaes Jongelinck commissioned the series. In 1594, the city of Brussels gave this panel to Archduke Ernst as a diplomatic gift. It eventually reached the <a href="/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, where it hangs today. The oak panel measures 117 by 162 centimeters. Filmmaker Andrei Tarkovsky featured it prominently in Solaris and The Mirror, drawn to its melancholy beauty and sense of <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> as psychological space.</p>`,
    faqs: [
      { question: "Where can I see Hunters in the Snow?", answer: "The painting is at the <a href=\"/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. It arrived there through Habsburg collections." },
      { question: "What is Hunters in the Snow about?", answer: "<a href=\"/artist/pieter-bruegel-the-elder\"><strong>Bruegel</strong></a> depicted a winter scene during the Little Ice Age. Tired hunters return with meager prey while villagers skate on frozen <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>ponds</strong></a> below." },
      { question: "What size is Hunters in the Snow?", answer: "The oak panel measures 117 by 162 centimeters (about 46 by 64 inches). <a href=\"/artist/pieter-bruegel-the-elder\"><strong>Bruegel</strong></a> painted it as part of a months-of-the-year series." },
      { question: "What movement does Hunters in the Snow belong to?", answer: "It's a masterwork of the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>. <a href=\"/artist/pieter-bruegel-the-elder\"><strong>Bruegel's</strong></a> detailed observation of peasant life and landscape influenced generations of Flemish painters." }
    ]
  },
  {
    slug: 'irises',
    description: `<p><a href="/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted Irises in May 1889, within a week of checking himself into the Saint-Paul-de-Mausole asylum in Saint-R&eacute;my-de-Provence. He'd suffered a breakdown, cut off part of his ear, and decided he needed supervised care. The hospital gardens became his first subject.</p>
<p>The painting shows <a href="https://luxurywallart.com/collections/purple-paintings" target="_blank" rel="noopener"><strong>purple</strong></a> irises crowding the canvas, their sword-like leaves thrusting in all directions. One white iris stands apart from the mass. Van Gogh described the work as "a study" meant to calm his mind before tackling more ambitious compositions. He'd go on to paint The Starry Night that June.</p>
<p>Irises measures 74.3 by 94.3 centimeters. In 1987, Australian businessman Alan Bond bought it at Sotheby's for 53.9 million dollars, setting an auction record. The sale proved controversial when news broke that Sotheby's had loaned Bond half the purchase price. Bond later defaulted, and the painting was sold privately to the <a href="/museum/getty"><strong>J. Paul Getty Museum</strong></a> in Los Angeles, where it's been since 1990.</p>`,
    faqs: [
      { question: "Where is Van Gogh's Irises displayed?", answer: "The painting is at the <a href=\"/museum/getty\"><strong>J. Paul Getty Museum</strong></a> in Los Angeles. It arrived there in 1990 after a controversial auction sale." },
      { question: "When did Van Gogh paint Irises?", answer: "<a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> completed it in May 1889, his first week at the Saint-R&eacute;my asylum. He called it a study to calm his mind after his breakdown." },
      { question: "How much did Irises sell for at auction?", answer: "Alan Bond paid 53.9 million dollars in 1987, a record at the time. He later defaulted, and the <a href=\"/museum/getty\"><strong>Getty</strong></a> acquired it privately in 1990." },
      { question: "What art movement does Irises belong to?", answer: "It's a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> work showing Japanese print influence. <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh's</strong></a> bold outlines and <a href=\"https://luxurywallart.com/collections/purple-paintings\" target=\"_blank\" rel=\"noopener\"><strong>vivid colors</strong></a> reflect his studies of ukiyo-e woodblocks." }
    ]
  },

  // === BATCH 2 ===
  {
    slug: 'jane-avril',
    description: `<p><a href="/artist/henri-de-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> created several posters and paintings of Jane Avril, a star performer at the Moulin Rouge. The most famous poster dates to 1893 and shows her mid-dance, one leg kicked high, her thin frame accentuated by the swirling lines of her dress. At the bottom, a double bass player's instrument frames the composition.</p>
<p>Avril was different from other cancan dancers. Where her rival La Goulue performed with aggressive energy, Avril moved with a nervous, jerky grace that earned her the nickname "La M&eacute;linite" after a type of explosive. She and Lautrec became close friends, not just artist and subject. When Lautrec was committed to an asylum in 1899, Avril commissioned his final poster partly as an act of kindness.</p>
<p>The lithograph measures roughly 129 by 94 centimeters. Copies exist in museums worldwide, including <a href="/museum/met"><strong>The Metropolitan Museum of Art</strong></a> and the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. Lautrec used multiple lithographic stones, one for each color: black, <a href="https://luxurywallart.com/collections/orange-art" target="_blank" rel="noopener"><strong>orange</strong></a>, yellow, and green.</p>`,
    faqs: [
      { question: "Who was Jane Avril?", answer: "She was a cancan dancer at the Moulin Rouge who became <a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec's</strong></a> close friend and frequent subject. Her nervous, jerky style earned her the nickname \"La M&eacute;linite.\"" },
      { question: "Where can I see Jane Avril posters?", answer: "Copies exist at <a href=\"/museum/met\"><strong>The Met</strong></a>, the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>, and other major museums. The lithograph was printed in multiple editions." },
      { question: "What technique did Lautrec use?", answer: "<a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Lautrec</strong></a> used color lithography with separate stones for black, <a href=\"https://luxurywallart.com/collections/orange-art\" target=\"_blank\" rel=\"noopener\"><strong>orange</strong></a>, yellow, and green. The bold flat colors show Japanese print influence." },
      { question: "When did Lautrec create the Jane Avril poster?", answer: "The most famous version dates to 1893. <a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Lautrec</strong></a> created his last Jane Avril poster in 1899 while committed to an asylum." }
    ]
  },
  {
    slug: 'la-grenouillere-monet',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted La Grenouill&egrave;re in 1869 alongside his friend <a href="/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a>. Both artists set up easels at a popular bathing spot on the Seine near Bougival, just a train ride from Paris. Emperor Napoleon III and Empress Eug&eacute;nie had recently visited, giving the resort fashionable cachet.</p>
<p>The painting shows "Flowerpot Island," a small platform nicknamed "the Camembert," where bathers gathered between dips. Monet's rapid, broken brushstrokes capture sunlight dancing on <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>water</strong></a>, an effect impossible to achieve with traditional techniques. In a letter to Bazille, he called these works "bad sketches" of a dream he hoped to realize properly. Art historians now see them as pivotal steps toward <a href="/movement/impressionism"><strong>Impressionism</strong></a>.</p>
<p>The canvas measures 74.6 by 99.7 centimeters and belongs to <a href="/museum/met"><strong>The Metropolitan Museum of Art</strong></a> in New York. It came through the H.O. Havemeyer Collection in 1929. A related version hangs at the National Gallery in London.</p>`,
    faqs: [
      { question: "Where is Monet's La Grenouill&egrave;re?", answer: "The painting is at <a href=\"/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. A related version hangs at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
      { question: "What was La Grenouill&egrave;re?", answer: "It was a bathing resort on the Seine popular with Parisians. <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> and <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted there together in 1869." },
      { question: "Why is La Grenouill&egrave;re important to art history?", answer: "The rapid brushstrokes capturing light on <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>water</strong></a> helped launch <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> called these sketches, but they proved revolutionary." },
      { question: "What size is La Grenouill&egrave;re?", answer: "The canvas measures 74.6 by 99.7 centimeters (about 29 by 39 inches). <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> completed it in the summer of 1869." }
    ]
  },
  {
    slug: 'madonna-munch',
    description: `<p><a href="/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted Madonna between 1892 and 1895, creating at least five versions of the composition. A half-length <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> appears against a swirling dark background, her eyes closed, her expression somewhere between ecstasy and death. She's nude from the waist up, her arms raised behind her head.</p>
<p>Whether this represents the Virgin Mary remains debated. Munch used titles like "Loving Woman" interchangeably with "Madonna." The model was Dagny Juel-Przybyszewska, a friend whose beauty captivated the artist's circle. Munch saw the image as representing the cycle of generation and decay. Love and death intertwined.</p>
<p>The version at the <a href="/museum/munch-museum"><strong>Munch Museum</strong></a> in Oslo measures 91 by 70.5 centimeters. In August 2004, armed thieves stole it along with The Scream. Police recovered both paintings two years later, damaged but repairable. Munch also created lithograph prints with a border of wriggling sperm and a fetus in the corner, making the procreative symbolism explicit.</p>`,
    faqs: [
      { question: "Where can I see Munch's Madonna?", answer: "The main version is at the <a href=\"/museum/munch-museum\"><strong>Munch Museum</strong></a> in Oslo. Other versions exist at the National Gallery of Norway and Kunsthalle Hamburg." },
      { question: "Was Madonna stolen?", answer: "Yes, armed thieves took it and The Scream from the <a href=\"/museum/munch-museum\"><strong>Munch Museum</strong></a> in 2004. Police recovered both paintings in 2006, somewhat damaged." },
      { question: "What does Munch's Madonna represent?", answer: "<a href=\"/artist/edvard-munch\"><strong>Munch</strong></a> connected the image to love, death, and procreation. The lithograph version includes sperm and a fetus, making the themes explicit." },
      { question: "What style is Madonna?", answer: "It's an early <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> work. <a href=\"/artist/edvard-munch\"><strong>Munch's</strong></a> swirling lines and emotional intensity helped define the movement." }
    ]
  },
  {
    slug: 'moulin-rouge-la-goulue',
    description: `<p><a href="/artist/henri-de-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> designed Moulin Rouge: La Goulue in 1891, his first commissioned poster. The nightclub had opened two years earlier, and one of Lautrec's paintings already hung near its entrance. This six-foot-tall lithograph advertising the star dancers made him famous overnight when thousands of copies appeared across Paris.</p>
<p>La Goulue ("The Glutton") performs the cancan alongside her partner Valentin le D&eacute;soss&eacute; ("Boneless Valentin"), whose gangly silhouette dominates the foreground. The audience becomes a mass of <a href="https://luxurywallart.com/collections/black-wall-art" target="_blank" rel="noopener"><strong>black</strong></a> silhouettes, a technique borrowed from Japanese prints. La Goulue's white underskirts catch the light against the warm <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a> and orange tones of the background.</p>
<p>The poster measures approximately 191 by 117 centimeters. Because most copies were pasted as street advertising and destroyed, surviving examples are valuable. One sold at auction in 1999 for $241,500, reportedly a record for a vintage advertising poster. Copies are held at <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="/museum/met"><strong>The Met</strong></a>, and other major museums.</p>`,
    faqs: [
      { question: "Where can I see Moulin Rouge: La Goulue?", answer: "Copies exist at <a href=\"/museum/moma\"><strong>MoMA</strong></a>, <a href=\"/museum/met\"><strong>The Met</strong></a>, and other major museums. Most original prints were pasted as street ads and lost." },
      { question: "Who was La Goulue?", answer: "She was the star cancan dancer at the Moulin Rouge, nicknamed \"The Glutton.\" <a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Lautrec's</strong></a> 1891 poster made both of them famous." },
      { question: "What technique did Lautrec use?", answer: "<a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Lautrec</strong></a> used color lithography, printing thousands of copies. The <a href=\"https://luxurywallart.com/collections/black-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>black</strong></a> silhouettes show Japanese print influence." },
      { question: "How big is the Moulin Rouge poster?", answer: "The lithograph measures about 191 by 117 centimeters (roughly 6.5 by 4 feet). At that scale, <a href=\"/artist/henri-de-toulouse-lautrec\"><strong>Lautrec</strong></a> could command attention on Parisian streets." }
    ]
  },
  {
    slug: 'music-tuileries',
    description: `<p><a href="/artist/edouard-manet"><strong>&Eacute;douard Manet</strong></a> painted Music in the Tuileries in 1862, his first major picture of contemporary Parisian life. The scene shows a fashionable crowd gathered for an outdoor concert in the Tuileries gardens near the Louvre. No musicians are visible. The subject is the social spectacle itself: elegant <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> in crinolines, top-hatted men, children with hoops.</p>
<p>Manet included himself at the far left, partly cut off by the canvas edge. His brother Eug&egrave;ne wears white trousers in the foreground. Poet Charles Baudelaire stands against a tree. Composer Jacques Offenbach sits nearby. The painting doubles as a group portrait of the artist's social circle, anchored in a specific moment of Second Empire Paris.</p>
<p>When first exhibited in 1863, the thick brushstrokes and modern subject matter outraged viewers. Some threatened to destroy the canvas. Today it hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London, recognized as a landmark in the development of <a href="/movement/impressionism"><strong>Impressionism</strong></a>. The painting measures 76.2 by 118.1 centimeters.</p>`,
    faqs: [
      { question: "Where is Music in the Tuileries displayed?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. It came through the Hugh Lane Bequest and is shared with Dublin." },
      { question: "Who appears in Music in the Tuileries?", answer: "<a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> painted himself at the left edge, along with poet Baudelaire, composer Offenbach, and his brother Eug&egrave;ne among the crowd." },
      { question: "Why was Music in the Tuileries controversial?", answer: "The thick brushstrokes looked unfinished to 1860s audiences. Depicting fashionable <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>crowds</strong></a> as serious art subjects also broke convention." },
      { question: "What movement does this painting represent?", answer: "It's a precursor to <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. <a href=\"/artist/edouard-manet\"><strong>Manet's</strong></a> modern subjects and loose brushwork influenced Monet, Renoir, and others." }
    ]
  },
  {
    slug: 'portrait-dr-gachet',
    description: `<p><a href="/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted Portrait of Dr. Gachet in June 1890 at Auvers-sur-Oise, just six weeks before his death. Dr. Paul Gachet was the homeopathic physician and amateur artist who cared for Van Gogh after his release from the Saint-R&eacute;my asylum. The portrait shows him leaning on his hand, a sprig of foxglove on the table. Foxglove provides digitalis, used to treat heart conditions.</p>
<p>Van Gogh created two versions. The more famous first version sold at Christie's in May 1990 for $82.5 million, then the highest price ever paid for a painting. Japanese businessman Ryoei Saito won the three-minute bidding war. He once joked about having it burned with his body when he died, though the painting was privately sold before his 1996 death. Its current location remains unclear.</p>
<p>The painting measures 67 by 56 centimeters. Van Gogh wrote to his brother Theo that Gachet's expression captured "the heartbroken expression of our time." The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> coat against the swirling blue background creates a melancholy atmosphere that still resonates.</p>`,
    faqs: [
      { question: "Where is Portrait of Dr. Gachet now?", answer: "The first version's location is unknown. Ryoei Saito bought it in 1990, and it was privately sold after his death. The second version is at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a>." },
      { question: "How much did Portrait of Dr. Gachet sell for?", answer: "It sold for $82.5 million at Christie's in 1990, a record at the time. The sale took just three minutes. It remains <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh's</strong></a> auction record." },
      { question: "Who was Dr. Gachet?", answer: "He was a homeopathic doctor and amateur artist who treated <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> after the asylum. The painting was made six weeks before the artist's death." },
      { question: "What does the foxglove symbolize?", answer: "Foxglove provides digitalis, a heart medicine. <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> included it as an attribute of <a href=\"https://luxurywallart.com/collections/purple-paintings\" target=\"_blank\" rel=\"noopener\"><strong>Gachet's</strong></a> medical profession." }
    ]
  },
  {
    slug: 'starry-night-over-rhone',
    description: `<p><a href="/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted Starry Night Over the Rh&ocirc;ne in September 1888, a few months after arriving in Arles. His rented Yellow House stood just minutes from this spot on the riverbank. Gas lamps from the town reflect in long golden streaks on the <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> water while stars glitter overhead.</p>
<p>Van Gogh had been "constantly preoccupied with the representation of night effects" since reaching Arles. In letters he described a dream of painting the starry sky over a field of wheat. This painting was his first major attempt. A year later, confined to an asylum, he would paint the more turbulent Starry Night now at MoMA.</p>
<p>The Rh&ocirc;ne version feels calmer. Two figures stroll along the shore in the foreground, adding a human scale to the cosmic scene. The painting measures 73 by 92 centimeters and hangs at the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It was first exhibited at the 1889 Salon des Ind&eacute;pendants.</p>`,
    faqs: [
      { question: "Where is Starry Night Over the Rh&ocirc;ne displayed?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It entered French national collections through donation." },
      { question: "How is this different from The Starry Night?", answer: "This 1888 painting is calmer, with <a href=\"https://luxurywallart.com/collections/yellow-paintings\" target=\"_blank\" rel=\"noopener\"><strong>golden</strong></a> reflections on water. The more famous MoMA version came a year later, painted at the asylum, with swirling, turbulent forms." },
      { question: "What size is Starry Night Over the Rh&ocirc;ne?", answer: "The canvas measures 73 by 92 centimeters (about 29 by 36 inches). <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted it outdoors at night in September 1888." },
      { question: "What movement does this painting belong to?", answer: "It's a key work of <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh's</strong></a> expressive color and visible brushwork helped define the style." }
    ]
  },

  // === BATCH 3 ===
  {
    slug: 'adoration-magi-botticelli',
    description: `<p><a href="/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted The Adoration of the Magi around 1475-1476 for a funerary chapel at the Santa Maria Novella monastery in Florence. The patron, banker Gaspare di Zanobi del Lama, chose the subject partly because his name "Gaspare" matched one of the three Magi. More significantly, the painting serves as a who's who of the Medici family.</p>
<p>Cosimo de' Medici kneels before the Virgin as the eldest Magus. His sons Piero and Giovanni appear as the other two kings. Grandsons Lorenzo and Giuliano stand among the crowd. All the Medici portrayed were dead by 1476, transforming the painting into a memorial and political statement. Florence belonged to Lorenzo, and Botticelli made that clear.</p>
<p>A young man in a <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> cloak at the far right looks directly at the viewer. Scholars accept this as Botticelli's self-portrait. The tempera-on-panel painting measures 111 by 134 centimeters and hangs at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence. Botticelli painted at least seven versions of this subject throughout his career.</p>`,
    faqs: [
      { question: "Where is Botticelli's Adoration of the Magi?", answer: "The painting hangs at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence. It was originally made for a chapel at Santa Maria Novella." },
      { question: "Who are the figures in this painting?", answer: "<a href=\"/artist/sandro-botticelli\"><strong>Botticelli</strong></a> depicted the Medici family as the Magi and their entourage. Cosimo, Piero, Giovanni, Lorenzo, and Giuliano all appear, along with the artist himself." },
      { question: "Where is Botticelli's self-portrait?", answer: "<a href=\"/artist/sandro-botticelli\"><strong>Botticelli</strong></a> painted himself at the far right in a <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>golden</strong></a> cloak, looking directly at the viewer." },
      { question: "What movement does this painting belong to?", answer: "It's a masterwork of the Italian <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a>. <a href=\"/artist/sandro-botticelli\"><strong>Botticelli's</strong></a> frontal composition was innovative for the period." }
    ]
  },
  {
    slug: 'the-angelus',
    description: `<p><a href="/artist/jean-francois-millet"><strong>Jean-Fran&ccedil;ois Millet</strong></a> painted The Angelus between 1857 and 1859, depicting two peasants pausing in a potato field at sunset. The distant church bell has rung, calling them to prayer. They bow their heads over a basket of their harvest. Nothing more dramatic than a daily ritual of faith and labor.</p>
<p>The painting's simplicity proved enormously popular. After Millet's death, prices for his work skyrocketed. In 1889, the Louvre tried to buy The Angelus, sparking a wave of French patriotism when it risked leaving the country. A madman attacked and slashed it in 1932. Salvador Dal&iacute; became obsessed with the image, requesting that the Louvre X-ray the painting. They found a geometric shape at the couple's feet that Dal&iacute; interpreted as a child's coffin.</p>
<p>The canvas measures 55.5 by 66 centimeters, small for such an iconic work. It hangs at the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. Millet said the image came from childhood memories of his grandmother making him stop work when the church bell rang to pray for the dead.</p>`,
    faqs: [
      { question: "Where is The Angelus displayed?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It entered French collections through the Chauchard bequest." },
      { question: "What does The Angelus depict?", answer: "Two peasants pause in a <a href=\"https://luxurywallart.com/collections/country-farm-paintings\" target=\"_blank\" rel=\"noopener\"><strong>field</strong></a> at sunset when the church bell rings the Angelus prayer. <a href=\"/artist/jean-francois-millet\"><strong>Millet</strong></a> based it on his grandmother's habit." },
      { question: "Why was Dali obsessed with The Angelus?", answer: "<a href=\"/artist/salvador-dali\"><strong>Dal&iacute;</strong></a> believed the painting concealed a hidden coffin. X-rays revealed a geometric shape that he interpreted as a buried child." },
      { question: "What size is The Angelus?", answer: "The canvas measures 55.5 by 66 centimeters (about 22 by 26 inches). Despite its fame, it's a modestly sized work by <a href=\"/artist/jean-francois-millet\"><strong>Millet</strong></a>." }
    ]
  },
  {
    slug: 'the-balcony-manet',
    description: `<p><a href="/artist/edouard-manet"><strong>&Eacute;douard Manet</strong></a> painted The Balcony between 1868 and 1869, inspired by Goya's Majas on the Balcony. Four figures occupy a green-shuttered balcony, though their psychological disconnection makes the scene feel strange. Nobody looks at anyone else. The seated <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> in white is <a href="/artist/berthe-morisot"><strong>Berthe Morisot</strong></a>, making her first appearance in Manet's work.</p>
<p>Morisot would become one of the founding <a href="/movement/impressionism"><strong>Impressionists</strong></a> and eventually marry Manet's brother Eug&egrave;ne. In 1874, painter Jean Baptiste Antoine Guillemet stands at center. Violinist Fanny Claus appears at right. A fourth figure, possibly Manet's son L&eacute;on, lurks in the shadowed interior.</p>
<p>The painting measures 170 by 125 centimeters and hangs at the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It was exhibited at the 1869 Salon, kept by Manet until his death, then purchased by painter Gustave Caillebotte. Caillebotte's bequest brought it to national collections in 1894.</p>`,
    faqs: [
      { question: "Where is Manet's The Balcony displayed?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It entered the collection through the Caillebotte bequest." },
      { question: "Who is the woman in white?", answer: "That's <a href=\"/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a>, making her first appearance in <a href=\"/artist/edouard-manet\"><strong>Manet's</strong></a> work. She later became a leading <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> painter." },
      { question: "What inspired The Balcony?", answer: "<a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> drew on <a href=\"/artist/francisco-goya\"><strong>Goya's</strong></a> Majas on the Balcony. The <a href=\"https://luxurywallart.com/collections/green-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>green</strong></a> shutters and multiple figures echo that earlier Spanish work." },
      { question: "What size is The Balcony?", answer: "The canvas measures 170 by 125 centimeters (about 67 by 49 inches). <a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> exhibited it at the Paris Salon of 1869." }
    ]
  },
  {
    slug: 'basket-of-apples',
    description: `<p><a href="/artist/paul-cezanne"><strong>Paul C&eacute;zanne</strong></a> painted The Basket of Apples around 1893, one of his most deliberately disjointed compositions. The tablecloth bunches in sculptural folds. The basket tips forward at an impossible angle. The table's two sides don't align. The wine bottle leans. Nothing sits quite right, and that's the point.</p>
<p>C&eacute;zanne rejected the single-viewpoint perspective that had dominated Western painting for centuries. He painted objects from multiple angles simultaneously, showing what he saw as he moved around them. This approach would later inspire Picasso and Braque to develop Cubism. The "Father of Modern Art" nickname stems largely from works like this.</p>
<p>The painting measures about 65 by 80 centimeters and belongs to the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. It's one of C&eacute;zanne's rare signed works, part of an important 1895 exhibition organized by dealer Ambroise Vollard. The warm <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>earth tones</strong></a> and solid brushstrokes give the composition density that realistic still lifes lack.</p>`,
    faqs: [
      { question: "Where is The Basket of Apples displayed?", answer: "The painting is at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. It's part of the Helen Birch Bartlett Memorial Collection." },
      { question: "Why does the table look wrong?", answer: "<a href=\"/artist/paul-cezanne\"><strong>C&eacute;zanne</strong></a> painted from multiple viewpoints simultaneously, rejecting single-point perspective. The tilted table and misaligned objects are deliberate." },
      { question: "How did this painting influence modern art?", answer: "<a href=\"/artist/paul-cezanne\"><strong>C&eacute;zanne's</strong></a> multiple perspectives inspired Picasso and Braque to develop Cubism. This approach earned him the title \"Father of Modern Art.\"" },
      { question: "What movement does this belong to?", answer: "It's a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> work. <a href=\"/artist/paul-cezanne\"><strong>C&eacute;zanne's</strong></a> <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earthy palette</strong></a> and structured brushwork distinguished him from other painters of the period." }
    ]
  },
  {
    slug: 'bellelli-family',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> began The Bellelli Family around 1858 while visiting relatives in Florence and continued working on it for nearly a decade. At 200 by 253 centimeters, it would be the largest painting he ever made. The composition shows his aunt Laura, her husband Baron Gennaro Bellelli, and their two young daughters in their drawing room.</p>
<p>Laura wears <a href="https://luxurywallart.com/collections/black-wall-art" target="_blank" rel="noopener"><strong>black</strong></a> mourning for her recently deceased father, whose portrait hangs behind her. The family dynamics feel tense. Laura stands rigidly apart from her husband, who sits turned away in shadow. Their marriage was troubled. One daughter perches on a chair between them; the other stands close to her mother.</p>
<p>Degas kept the painting until 1913, showing it only once in 1867. Its unexpected appearance at auction after his death created a sensation, and the Mus&eacute;e du Luxembourg bought it immediately for 400,000 francs. Since 1986, it's hung at the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a> as a centerpiece of their 19th-century collection.</p>`,
    faqs: [
      { question: "Where is The Bellelli Family displayed?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It arrived there when the museum opened in 1986." },
      { question: "How big is The Bellelli Family?", answer: "The canvas measures 200 by 253 centimeters (about 79 by 100 inches). It's the largest painting <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> ever created." },
      { question: "Who are the people in the painting?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> painted his aunt Laura, uncle Baron Gennaro Bellelli, and their daughters Giulia and Giovanna. The family lived in Florence as political exiles." },
      { question: "Why was this painting hidden so long?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> kept it in his studio for decades, showing it only once. After his death in 1917, the painting's unexpected auction appearance caused a sensation." }
    ]
  },
  {
    slug: 'the-blue-boy',
    description: `<p><a href="/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted The Blue Boy around 1770, dressing his subject in 17th-century costume as a tribute to Anthony van Dyck. The identity of the sitter remains uncertain. For generations, scholars assumed it was Jonathan Buttall, a hardware merchant's son who owned the painting early on. Recent research suggests Gainsborough's nephew Gainsborough Dupont may have posed instead.</p>
<p>The painting established itself as one of the most famous English portraits. When the Duke of Westminster sold it to California railroad magnate Henry Huntington in 1921 for $728,000, Britain mourned. The National Gallery displayed it for a farewell viewing; 90,000 people came. Director Charles Holmes scrawled "Au Revoir, C.H." on the back of the canvas.</p>
<p>The oil-on-linen painting measures 179 by 125 centimeters and now hangs at <a href="/museum/huntington"><strong>The Huntington</strong></a> in San Marino, California, paired with Thomas Lawrence's Pinkie. X-rays reveal Gainsborough painted over an incomplete portrait of an older man, and a dog was edited out in favor of rocky ground.</p>`,
    faqs: [
      { question: "Where can I see The Blue Boy?", answer: "The painting hangs at <a href=\"/museum/huntington\"><strong>The Huntington</strong></a> in San Marino, California. It's displayed opposite Thomas Lawrence's Pinkie." },
      { question: "Who is the boy in the painting?", answer: "The identity is disputed. Early attribution went to Jonathan Buttall, but recent research suggests <a href=\"/artist/thomas-gainsborough\"><strong>Gainsborough's</strong></a> nephew may have posed." },
      { question: "Why did The Blue Boy leave England?", answer: "Henry Huntington bought it in 1921 for $728,000. Before shipping, 90,000 Britons viewed it at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in a farewell exhibition." },
      { question: "What's hidden under The Blue Boy?", answer: "X-rays show <a href=\"/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> painted over another portrait. He also removed a dog, replacing it with <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>rocks</strong></a>." }
    ]
  },
  {
    slug: 'the-circus-seurat',
    description: `<p><a href="/artist/georges-seurat"><strong>Georges Seurat</strong></a> began The Circus in 1890, his third major work exploring the theme. It shows a female rider balanced on horseback at the Circus Fernando (renamed Cirque M&eacute;drano after its famous clown). A ringmaster cracks his whip. Acrobats tumble in the background. The audience rises in tiered rows, their faces simplified into patterns of dots.</p>
<p>Seurat died of diphtheria in March 1891, just days after the Salon des Ind&eacute;pendants opened with this painting on display. He was 31. The work remained unfinished. You can still see the white ground and blue compositional grid showing through in places. At 185 by 152 centimeters, it's an ambitious final statement cut short.</p>
<p>The painting went to Paul Signac around 1900, then to American collector John Quinn, who donated it to the Louvre in 1927. It now hangs at the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a>. Seurat applied his Divisionist theories rigorously here, building forms from tiny dots of <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color</strong></a> that optically mix in the viewer's eye.</p>`,
    faqs: [
      { question: "Where is Seurat's The Circus displayed?", answer: "The painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It arrived through an American collector's donation to the Louvre in 1927." },
      { question: "Why is The Circus unfinished?", answer: "<a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> died of diphtheria in March 1891, days after exhibiting it. The white ground and blue grid remain visible where he hadn't completed painting." },
      { question: "What technique did Seurat use?", answer: "<a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> used Divisionism, building forms from tiny <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>color</strong></a> dots that mix optically. The painting demonstrates his scientific approach to color theory." },
      { question: "How big is The Circus?", answer: "The canvas measures 185 by 152 centimeters (about 73 by 60 inches). <a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> also painted the frame as part of the composition." }
    ]
  },

  // === BATCH 4 ===
  {
    slug: 'clothed-maja',
    description: `<p><a href="/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Clothed Maja between 1800 and 1807 as a companion to his earlier Nude Maja. The same <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> reclines on the same green velvet cushions, but now wears a white empire-waist gown, yellow jacket, and pink sash. Her direct gaze remains unchanged.</p>
<p>Prime Minister Manuel de Godoy owned both paintings. According to legend, he hung them so the clothed version could be raised by pulleys to reveal the nude beneath. When Napoleon's brother Joseph inventoried Godoy's collection in 1808, they were listed as "Naked Gypsy" and "Clothed Gypsy." The model's identity remains unknown, though speculation centers on the Duchess of Alba or Godoy's mistress Pepita Tud&oacute;.</p>
<p>The canvas measures 95 by 190 centimeters and hangs at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, displayed beside its nude twin. The Spanish Inquisition seized both paintings from 1814 to 1836 for indecency. Art historian Janis Tomlinson notes the clothed version is actually more "brazen," the figure pressing boldly against the frame.</p>`,
    faqs: [
      { question: "Where are the Majas displayed?", answer: "Both paintings hang together at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. They've been there since 1901, after decades of controversy." },
      { question: "Who is the woman in the Maja paintings?", answer: "Her identity is unknown. Rumors suggest the Duchess of Alba or Pepita Tud&oacute;, but <a href=\"/artist/francisco-goya\"><strong>Goya</strong></a> never confirmed either." },
      { question: "What happened with the Spanish Inquisition?", answer: "The Inquisition seized both paintings from 1814 to 1836 for indecency. <a href=\"/artist/francisco-goya\"><strong>Goya</strong></a> was summoned to explain why he created them." },
      { question: "Why did Goya paint two versions?", answer: "Prime Minister Godoy owned them. He allegedly hung them so the <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>clothed version</strong></a> could be raised to reveal the nude beneath." }
    ]
  },
  {
    slug: 'death-sardanapalus',
    description: `<p><a href="/artist/eugene-delacroix"><strong>Eug&egrave;ne Delacroix</strong></a> painted The Death of Sardanapalus in 1827, inspired by Lord Byron's 1821 play about the legendary Assyrian king. Facing military defeat and humiliation, Sardanapalus orders the destruction of everything he treasured: his horses, slaves, and concubines will burn with him on a vast funeral pyre. He reclines on a bed, watching the chaos.</p>
<p>The painting explodes with violence and <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> fabric. Bodies twist in agony. Servants slaughter horses. The composition tilts directly toward the viewer, breaking classical rules about ordered space. Critics at the 1827 Salon called it "the fanaticism of ugliness." Delacroix reveled in Byronic drama, and this is Romanticism at its most extreme.</p>
<p>The canvas is monumental: 392 by 496 centimeters, roughly 12 by 16 feet. It hangs at the <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris. Delacroix made a smaller replica in 1844, now at the Philadelphia Museum of Art. The original inspired a Berlioz cantata and an unfinished Liszt opera.</p>`,
    faqs: [
      { question: "Where is The Death of Sardanapalus?", answer: "The massive painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. A smaller replica is at the Philadelphia Museum of Art." },
      { question: "How big is The Death of Sardanapalus?", answer: "The canvas measures 392 by 496 centimeters (roughly 12 by 16 feet). It's one of the largest <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> paintings ever made." },
      { question: "What inspired this painting?", answer: "<a href=\"/artist/eugene-delacroix\"><strong>Delacroix</strong></a> drew on Lord Byron's 1821 play about the Assyrian king. The poet's dramatic intensity matched the painter's own sensibility." },
      { question: "Why was it controversial?", answer: "Critics at the 1827 Salon attacked its violence and chaos. The tilted composition and <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>red</strong></a>-drenched bodies broke classical rules entirely." }
    ]
  },
  {
    slug: 'the-descent-from-the-cross',
    description: `<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted The Descent from the Cross as a triptych altarpiece for the Cathedral of Our Lady in Antwerp between 1611 and 1614. The Guild of the Arquebusiers commissioned it, choosing the descent theme because their patron Saint Christopher was known for "bearing Christ." Rubens ran with this concept: all three panels show figures physically carrying or supporting Jesus.</p>
<p>The central panel shows Christ's limp body being lowered from the cross by eight figures. The white shroud creates a dramatic diagonal against the dark sky. Rubens painted flesh with extraordinary skill; you can almost feel the weight of the dead body. The side panels show the Visitation and the Presentation in the Temple.</p>
<p>The triptych measures 421 by 311 centimeters when closed, expanding to over 6 meters wide when open. It still hangs in its original location at <a href="/museum/cathedral-antwerp"><strong>Antwerp Cathedral</strong></a>. French forces stole it for the Louvre in 1794; the German army took it in 1914. Both times it was returned. The painting exemplifies <a href="/movement/baroque"><strong>Baroque</strong></a> drama, emotional intensity rendered with technical brilliance.</p>`,
    faqs: [
      { question: "Where is Rubens' Descent from the Cross?", answer: "The triptych remains in its original location at the <a href=\"/museum/cathedral-antwerp\"><strong>Cathedral of Our Lady</strong></a> in Antwerp, Belgium." },
      { question: "How big is the Descent from the Cross?", answer: "The central panel alone measures 421 by 311 centimeters. Open, the triptych spans over 6 meters wide. It's among <a href=\"/artist/peter-paul-rubens\"><strong>Rubens's</strong></a> largest works." },
      { question: "Has the painting been stolen?", answer: "Yes, twice. Napoleon's forces took it to the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in 1794, and Germany seized it in 1914. Both times it returned to Antwerp." },
      { question: "What movement does this represent?", answer: "It's a masterwork of the <a href=\"/movement/baroque\"><strong>Baroque</strong></a> period. <a href=\"/artist/peter-paul-rubens\"><strong>Rubens's</strong></a> dramatic lighting, dynamic poses, and emotional intensity define the style." }
    ]
  },
  {
    slug: 'the-hay-wain',
    description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> painted The Hay Wain in 1821, depicting a rural scene on the River Stour between Suffolk and Essex. Three horses pull a hay wagon (or "wain") through the shallow water. Willy Lott's Cottage stands on the left bank. Lott was a tenant farmer said to have never left his home for more than four days in his entire life. Constable's father owned the mill nearby.</p>
<p>Originally titled "Landscape: Noon," the painting failed to find a buyer at the Royal Academy that year. It did much better in France. At the 1824 Paris Salon, King Charles X awarded Constable a <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> medal, and the work inspired younger French painters including Delacroix. English recognition came later.</p>
<p>The canvas measures 130.2 by 185.4 centimeters and hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London. Henry Vaughan bequeathed it in 1886. A 2005 BBC poll ranked it the second most popular painting in British galleries, behind only Turner's Fighting Temeraire. The cottage in the painting still stands, barely changed from Constable's day.</p>`,
    faqs: [
      { question: "Where is The Hay Wain displayed?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. Henry Vaughan donated it in 1886." },
      { question: "What does The Hay Wain show?", answer: "A horse-drawn wagon crosses the River Stour near <a href=\"/artist/john-constable\"><strong>Constable's</strong></a> childhood home in Suffolk. Willy Lott's cottage appears at left; it still exists today." },
      { question: "Why is The Hay Wain famous?", answer: "It won a <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold</strong></a> medal at the 1824 Paris Salon and influenced French <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> painters. A 2005 poll ranked it Britain's second-favorite painting." },
      { question: "How big is The Hay Wain?", answer: "The canvas measures 130.2 by 185.4 centimeters (about 4 by 6 feet). <a href=\"/artist/john-constable\"><strong>Constable</strong></a> called his large <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> \"six-footers.\"" }
    ]
  },
  {
    slug: 'japanese-footbridge',
    description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted The Japanese Footbridge in 1899, one of twelve views he made that summer from the same vantage point in his Giverny garden. He had purchased the marshy land in 1893, diverted a stream, planted willows and <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>water lilies</strong></a>, and built the arching wooden bridge himself.</p>
<p>The painting captures soft morning light on the turquoise bridge, its reflection rippling in the pond below. Tall grasses and flowers line the banks. Monet's brushwork is loose but controlled, each stroke suggesting rather than defining. The vertical format, unusual in his water lily series, emphasizes depth over breadth.</p>
<p>The canvas measures 81.3 by 101.6 centimeters and hangs at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C. It came through a bequest from Victoria Nebeker Coberly in memory of her son. Monet would paint his water garden obsessively for the rest of his life, eventually producing around 250 related works, many much larger than this intimate early view.</p>`,
    faqs: [
      { question: "Where is The Japanese Footbridge?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C. It was a memorial gift from Victoria Nebeker Coberly." },
      { question: "When did Monet create his water garden?", answer: "<a href=\"/artist/claude-monet\"><strong>Monet</strong></a> bought the land in 1893 and built the bridge himself. He started painting it seriously in 1899, creating 12 views that summer." },
      { question: "What size is The Japanese Footbridge?", answer: "The canvas measures 81.3 by 101.6 centimeters (about 32 by 40 inches). It's one of the smaller works in <a href=\"/artist/claude-monet\"><strong>Monet's</strong></a> <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>water lily</strong></a> series." },
      { question: "What movement does this belong to?", answer: "It's a prime example of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. <a href=\"/artist/claude-monet\"><strong>Monet's</strong></a> loose brushwork captures light and atmosphere rather than precise detail." }
    ]
  },
  {
    slug: 'jewish-bride',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt</strong></a> painted The Jewish Bride around 1665-1669, though neither the title nor the subject is certain. A 19th-century collector decided it showed a Jewish father bestowing a necklace on his wedding-day daughter. Modern scholars prefer reading it as Isaac and Rebecca from the Old Testament, posing as siblings to escape danger but revealed as lovers by their tender embrace.</p>
<p>The painting's emotional power lies in a simple gesture. The man's hand rests gently on the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman's</strong></a> chest; her hand covers his. Rembrandt built up the <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> and red fabric with thick impasto, scratching into wet paint with his brush handle. The faces glow with soft light against a neutral background.</p>
<p>Vincent van Gogh wept before this painting. He wrote that he would give ten years of his life to sit in front of it for two weeks with only dry bread to eat. The canvas measures 121.5 by 166.5 centimeters and hangs at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, one of the museum's most cherished works.</p>`,
    faqs: [
      { question: "Where is The Jewish Bride displayed?", answer: "The painting hangs at the <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's considered one of the museum's greatest treasures." },
      { question: "Who are the figures in the painting?", answer: "The identity is uncertain. Scholars now prefer reading them as Isaac and Rebecca from the Bible, though <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> left no title." },
      { question: "Why did Van Gogh cry before this painting?", answer: "<a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> was moved by the tender intimacy and rich <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>golden</strong></a> colors. He said he'd give ten years of his life to study it for two weeks." },
      { question: "What technique did Rembrandt use?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> applied thick impasto and scratched into wet paint. The textured surface creates a tactile richness unique to his late <a href=\"/movement/baroque\"><strong>Baroque</strong></a> style." }
    ]
  },
  {
    slug: 'the-kiss-klimt',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted The Kiss between 1907 and 1908, at the height of his Golden Period. A couple embraces on a flower-covered cliff edge. The man bends to kiss the woman's cheek; her eyes close in rapture. Their bodies dissolve into a single shape wrapped in <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a> and geometric patterns.</p>
<p>The Austrian government bought the painting before Klimt finished it, paying 25,000 crowns, five times higher than any previous painting sold in Vienna. It was exhibited in 1908 at the Kunstschau, a building Klimt helped design, during celebrations for Emperor Franz Joseph's sixtieth anniversary. The work became an instant icon.</p>
<p>At 180 by 180 centimeters, the canvas is a perfect square, unusual for its era. It now hangs at the <a href="/museum/belvedere"><strong>Belvedere Museum</strong></a> in Vienna. Klimt combined oil paint with gold leaf, silver, and platinum, drawing on Byzantine mosaics he'd seen in Ravenna. His father and brother had been metalworkers, so gold carried personal meaning. This remains the most famous work of the Vienna Secession movement.</p>`,
    faqs: [
      { question: "Where is Klimt's The Kiss displayed?", answer: "The painting hangs at the <a href=\"/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna. It's been there since the Austrian government purchased it in 1908." },
      { question: "How big is The Kiss?", answer: "The canvas is a perfect 180 by 180 centimeters (about 6 by 6 feet). <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> used <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold leaf</strong></a>, silver, and platinum along with oil paint." },
      { question: "Why did Klimt use gold leaf?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Klimt's</strong></a> father and brother were metalworkers. He was also inspired by Byzantine mosaics in Ravenna that he visited in 1903." },
      { question: "How much did The Kiss sell for?", answer: "Austria paid 25,000 crowns (about $240,000 today) before <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> even finished it. That was five times the previous Vienna auction record." }
    ]
  },

  // === BATCH 5 ===
  {
    slug: 'the-lacemaker',
    description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted The Lacemaker around 1669-1670, his smallest and perhaps most concentrated work. A young woman bends over her bobbin lace pillow, utterly absorbed in the delicate work. Threads spill from a sewing cushion in the foreground, rendered with soft blur that suggests <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>red</strong></a> and white liquid.</p>
<p>The painting measures just 24.5 by 21 centimeters, barely larger than a paperback book. Vermeer probably used a camera obscura while composing it. The optical device would explain the blurred foreground and precisely focused subject, effects unusual for Dutch <a href="/movement/baroque"><strong>Baroque</strong></a> painting but familiar to anyone who has used a camera.</p>
<p>The canvas originally matched dimensions with A Young Woman Seated at the Virginals, suggesting Vermeer cut them from the same bolt. It entered the <a href="/museum/louvre"><strong>Louvre</strong></a> collection in 1870. Along with The Milkmaid and Girl with a Pearl Earring, it ranks among the artist's most recognized works. Dutch tradition associated needlework with domestic virtue, a theme reinforced by the small book beside her, likely a Bible or prayer book.</p>`,
    faqs: [
      { question: "Where is The Lacemaker displayed?", answer: "The painting hangs at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It's been in the collection since 1870." },
      { question: "How small is The Lacemaker?", answer: "The canvas measures just 24.5 by 21 centimeters (about 9.5 by 8 inches). It's the smallest of <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> paintings." },
      { question: "Did Vermeer use a camera obscura?", answer: "Likely yes. The blurred <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>foreground</strong></a> threads and precisely focused subject suggest optical device assistance, unusual for the <a href=\"/movement/baroque\"><strong>Baroque</strong></a> era." },
      { question: "What does the painting symbolize?", answer: "Needlework represented domestic virtue in Dutch tradition. The book beside the <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> reinforces this pious, industrious reading." }
    ]
  },
  {
    slug: 'the-last-supper',
    description: `<p><a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted The Last Supper between 1495 and 1498 on a wall of the refectory at Santa Maria delle Grazie in Milan. The mural depicts the moment after Jesus announces that one of his twelve apostles will betray him. Shock and disbelief ripple across the table in waves of gesture and expression.</p>
<p>Leonardo experimented with technique here, painting on dry plaster rather than wet fresco. This let him work slowly, revise, and achieve subtle light effects impossible with traditional methods. Unfortunately, the paint began flaking within his lifetime. By 1586, the work was described as "completely ruined." A doorway was cut through the bottom in 1652, destroying Jesus's feet.</p>
<p>The mural measures 460 by 880 centimeters, covering an entire wall. It survived Allied bombing in 1943 when sandbags protected it while the rest of the building collapsed. A twenty-year restoration completed in 1999 stabilized and cleaned the surface, though much original paint is gone forever. Visitors now see it in small, timed groups at <a href="/museum/santa-maria-delle-grazie"><strong>Santa Maria delle Grazie</strong></a>, a UNESCO World Heritage Site since 1980.</p>`,
    faqs: [
      { question: "Where is The Last Supper?", answer: "The mural covers a wall in the refectory of <a href=\"/museum/santa-maria-delle-grazie\"><strong>Santa Maria delle Grazie</strong></a> in Milan. It's part of a UNESCO World Heritage Site." },
      { question: "Why is The Last Supper so damaged?", answer: "<a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted on dry plaster instead of wet fresco, causing early deterioration. A doorway was cut through it in 1652, and it nearly fell to bombs in 1943." },
      { question: "How big is The Last Supper?", answer: "The mural measures 460 by 880 centimeters (about 15 by 29 feet). It's <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo's</strong></a> largest surviving work aside from decorative projects." },
      { question: "Can I visit The Last Supper?", answer: "Yes, but with strict limits. Visitors see it in small groups for 15 minutes at <a href=\"/museum/santa-maria-delle-grazie\"><strong>Santa Maria delle Grazie</strong></a>. Advance booking is essential." }
    ]
  },
  {
    slug: 'the-laughing-cavalier',
    description: `<p><a href="/artist/frans-hals"><strong>Frans Hals</strong></a> painted The Laughing Cavalier in 1624, though the man neither laughs nor is clearly a cavalier. The title was invented by Victorian audiences when the painting arrived in England. An inscription tells us the sitter was 26 years old; his identity remains unknown. Some suggest linen merchant Tieleman Roosterman, but nothing is confirmed.</p>
<p>The subject's upturned mustache and half-smile give an impression of amusement, amplified by his confident pose with hand on hip. His costume is remarkable: an elaborately embroidered doublet featuring symbols of love, fortune, and virtue. The <a href="https://luxurywallart.com/collections/black-wall-art" target="_blank" rel="noopener"><strong>black</strong></a> sash demonstrates Hals's legendary ability to paint with a limited palette. Van Gogh claimed Hals "must have had 27 blacks."</p>
<p>The canvas measures 83 by 67.3 centimeters and hangs at the <a href="/museum/wallace-collection"><strong>Wallace Collection</strong></a> in London. The 4th Marquess of Hertford bought it at auction in Paris in 1865 for 51,000 francs, eleven times what the previous owner paid. It's been one of Britain's most beloved portraits ever since.</p>`,
    faqs: [
      { question: "Where is The Laughing Cavalier?", answer: "The portrait hangs at the <a href=\"/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London. Admission is free, making it easy to visit this <a href=\"/movement/baroque\"><strong>Baroque</strong></a> masterwork." },
      { question: "Why is it called The Laughing Cavalier?", answer: "Victorian audiences invented the name when it arrived in England. The man doesn't actually laugh; his upturned mustache and half-smile suggest amusement." },
      { question: "Who is the man in the painting?", answer: "His identity is unknown. An inscription says he was 26 in 1624. <a href=\"/artist/frans-hals\"><strong>Hals</strong></a> may have known him, but no records survive." },
      { question: "What makes the costume special?", answer: "The embroidered doublet features symbols of love and virtue. The <a href=\"https://luxurywallart.com/collections/black-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>black</strong></a> sash shows <a href=\"/artist/frans-hals\"><strong>Hals's</strong></a> legendary skill with dark tones." }
    ]
  },
  {
    slug: 'luncheon-boating-party-renoir',
    description: `<p><a href="/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted Luncheon of the Boating Party in 1880-1881, depicting his friends gathered on the terrace of Maison Fournaise, a restaurant along the Seine at Chatou. At 51 by 68 inches, it's among the largest canvases he ever made. Sixteen months of work went into capturing this fleeting moment of summer leisure.</p>
<p>The woman holding the dog in the lower left is Aline Charigot, a seamstress who would become Renoir's wife. Painter Gustave Caillebotte sits backward in his chair wearing a boater's shirt. Art critic Charles Ephrussi wears a top hat in the background. Each figure was painted separately, some in Renoir's studio, yet the composition feels spontaneous.</p>
<p>Duncan Phillips pursued the painting for a decade before acquiring it in 1923 for $125,000, then a record for a Renoir. It now hangs at <a href="/museum/phillips-collection"><strong>The Phillips Collection</strong></a> in Washington, D.C. Renoir considered it his finest work, and many critics agree. The <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>vibrant colors</strong></a>, dappled light, and warmth of human connection make it a high point of <a href="/movement/impressionism"><strong>Impressionism</strong></a>.</p>`,
    faqs: [
      { question: "Where is Luncheon of the Boating Party?", answer: "The painting hangs at <a href=\"/museum/phillips-collection\"><strong>The Phillips Collection</strong></a> in Washington, D.C. Duncan Phillips spent a decade pursuing it before buying it in 1923." },
      { question: "Who are the people in this painting?", answer: "<a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir's</strong></a> future wife Aline holds the dog. Painter Caillebotte sits backward. Art critic Ephrussi wears a top hat. All were real friends." },
      { question: "How big is Luncheon of the Boating Party?", answer: "The canvas measures 130.2 by 175.6 centimeters (about 51 by 69 inches). <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> worked on it for 16 months." },
      { question: "How much did it sell for?", answer: "Duncan Phillips paid $125,000 in 1923, a record for a <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>. The previous record was $30,000." }
    ]
  },
  {
    slug: 'nude-maja',
    description: `<p><a href="/artist/francisco-goya"><strong>Francisco Goya</strong></a> painted The Nude Maja between 1797 and 1800, one of the earliest Western artworks to depict a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>nude woman</strong></a> looking directly at the viewer without mythological justification. She lies on green velvet cushions, completely unashamed. No Venus attributes, no classical excuse. Just a naked woman meeting your gaze.</p>
<p>Prime Minister Manuel de Godoy kept the painting in a private room reserved for nude works. When the Spanish Inquisition discovered it in 1808, they summoned Goya to explain himself. He escaped prosecution by citing Titian and Vel&aacute;zquez as precedents, but the paintings remained confiscated until 1836. They were hidden in a government basement, off-limits to the public.</p>
<p>The canvas measures 98 by 191 centimeters and now hangs at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid beside its clothed companion. The model's identity remains unknown. Her frank sensuality and the Inquisition scandal made this one of the most discussed paintings in art history.</p>`,
    faqs: [
      { question: "Where is The Nude Maja displayed?", answer: "The painting hangs at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid, displayed beside The Clothed Maja." },
      { question: "Why was The Nude Maja controversial?", answer: "It showed a real <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> nude without mythological cover. The Spanish Inquisition confiscated it and summoned <a href=\"/artist/francisco-goya\"><strong>Goya</strong></a> to explain." },
      { question: "Who is the woman in The Nude Maja?", answer: "Her identity is unknown. Speculation includes the Duchess of Alba and Pepita Tud&oacute;, but <a href=\"/artist/francisco-goya\"><strong>Goya</strong></a> never confirmed either." },
      { question: "How did Goya escape prosecution?", answer: "<a href=\"/artist/francisco-goya\"><strong>Goya</strong></a> cited <a href=\"/artist/titian\"><strong>Titian</strong></a> and <a href=\"/artist/diego-velazquez\"><strong>Vel&aacute;zquez</strong></a> as precedents. The Inquisition couldn't condemn him for following admired masters." }
    ]
  },
  {
    slug: 'the-raft-of-the-medusa',
    description: `<p><a href="/artist/theodore-gericault"><strong>Th&eacute;odore G&eacute;ricault</strong></a> painted The Raft of the Medusa in 1818-1819, depicting survivors of the French naval frigate M&eacute;duse, which ran aground off Mauritania in 1816. At least 150 people were set adrift on a makeshift raft. After 13 days of starvation, dehydration, and cannibalism, only 15 remained alive. The scandal was political: the incompetent captain had gotten his post through government connections.</p>
<p>G&eacute;ricault researched obsessively. He interviewed survivors, built a scale model of the raft, visited morgues to study flesh tones of the dying. The resulting canvas is enormous: 491 by 716 centimeters, over 16 feet wide. Bodies pile across the tilted raft. One man waves cloth at a distant ship on the horizon.</p>
<p>Critics at the 1819 Salon were divided. Some called it a "pile of corpses." Others recognized its power. G&eacute;ricault died in 1824 at age 32, and the <a href="/museum/louvre"><strong>Louvre</strong></a> purchased the painting from his heirs. It remains one of the most powerful images in <a href="/movement/romanticism"><strong>Romantic</strong></a> art, a painting that took a recent atrocity and gave it the scale of history.</p>`,
    faqs: [
      { question: "Where is The Raft of the Medusa?", answer: "The painting dominates a gallery at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris. It was purchased from <a href=\"/artist/theodore-gericault\"><strong>G&eacute;ricault's</strong></a> estate after his death in 1824." },
      { question: "How big is The Raft of the Medusa?", answer: "The canvas measures 491 by 716 centimeters (about 16 by 23 feet). <a href=\"/artist/theodore-gericault\"><strong>G&eacute;ricault</strong></a> painted it at near life-size." },
      { question: "What was the Medusa disaster?", answer: "The French frigate M&eacute;duse ran aground in 1816. At least 150 were set adrift on a raft; only 15 survived 13 days of starvation and cannibalism." },
      { question: "Why was this politically controversial?", answer: "The captain had gotten his post through government connections. <a href=\"/artist/theodore-gericault\"><strong>G&eacute;ricault's</strong></a> painting implicitly criticized the Bourbon Restoration regime." }
    ]
  },
  {
    slug: 'rokeby-venus',
    description: `<p><a href="/artist/diego-velazquez"><strong>Diego Vel&aacute;zquez</strong></a> painted The Rokeby Venus between 1647 and 1651, likely during his second Italian trip. Venus lies on gray silk sheets, her back to the viewer, gazing at her reflection in a mirror held by Cupid. It's the only surviving female nude by Vel&aacute;zquez. The Spanish Inquisition made such subjects rare, though collectors at court eagerly acquired foreign nudes.</p>
<p>The painting takes its name from Rokeby Park in Yorkshire, where it hung after reaching England in 1813. The National Gallery bought it in 1906 with public fundraising help. Eight years later, suffragette Mary Richardson attacked it with a meat cleaver, slashing seven gashes into the canvas. She was protesting the arrest of Emmeline Pankhurst. The painting was fully restored within weeks.</p>
<p>The canvas measures 122 by 177 centimeters and hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London. In 2023, climate activists struck again, this time smashing the protective glass. The surface sustained minimal damage. The painting's history of attacks underscores its status as a cultural flashpoint and symbol.</p>`,
    faqs: [
      { question: "Where is The Rokeby Venus?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. It's been there since 1906." },
      { question: "Why was it attacked by a suffragette?", answer: "Mary Richardson slashed it in 1914 to protest Emmeline Pankhurst's arrest. She wanted to destroy \"the most beautiful <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> in mythological history.\"" },
      { question: "Is this Vel&aacute;zquez's only nude?", answer: "It's the only surviving female nude by <a href=\"/artist/diego-velazquez\"><strong>Vel&aacute;zquez</strong></a>. The Spanish Inquisition made such paintings dangerous, though court collectors still sought them." },
      { question: "What movement does this represent?", answer: "It's a masterwork of the Spanish <a href=\"/movement/baroque\"><strong>Baroque</strong></a>. <a href=\"/artist/diego-velazquez\"><strong>Vel&aacute;zquez's</strong></a> soft modeling and silvery palette influenced painters for centuries." }
    ]
  },
  {
    slug: 'the-star-dancer',
    description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> created The Star (Dancer on Stage) around 1878 using pastel on paper. A lone ballerina takes center stage, spotlit from below, caught mid-pose on pointe. Stage flats and a shadowy male figure, likely a patron, loom in the wings. The composition is radically cropped, as if glimpsed from a box seat above.</p>
<p>Degas observed the Paris Opera obsessively, sketching dancers during rehearsals and performances. But he wasn't interested in glamour. He showed the strain behind ballet's illusion: aching muscles, waiting, fatigue. Here the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>ballerina</strong></a> shines for her moment, unaware of the dark figure watching from backstage. The contrast unsettles.</p>
<p>The pastel measures approximately 58 by 42 centimeters and belongs to the <a href="/museum/musee-dorsay"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. Degas modeled dancers in wax to study poses like this one, giving him permanent references to work from. Over half his output depicts dancers, making this subject synonymous with his name.</p>`,
    faqs: [
      { question: "Where is The Star (Dancer on Stage)?", answer: "The pastel hangs at the <a href=\"/museum/musee-dorsay\"><strong>Mus&eacute;e d'Orsay</strong></a> in Paris. It's among the museum's most popular <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> works." },
      { question: "What medium did Degas use?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> worked in pastel on paper. He favored this medium increasingly, finding it suited his interest in capturing <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>dancers</strong></a> in motion." },
      { question: "What is the dark figure in the wings?", answer: "Likely a wealthy patron or \"abonne.\" <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> often included these men lurking backstage, hinting at the power dynamics behind ballet." },
      { question: "When did Degas paint this?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> created it around 1878 during his most productive period of ballet subjects. He had backstage access at the Paris Opera." }
    ]
  },

  // === BATCH 6 ===
  {
    slug: 'surrender-breda',
    description: `<p><a href="/artist/diego-velazquez"><strong>Diego Vel&aacute;zquez</strong></a> painted The Surrender of Breda between 1634 and 1635, commemorating Spain's 1625 victory over Dutch forces at Breda. The painting shows General Ambrosio Spinola receiving the city's keys from Justinus van Nassau. Spinola places his hand on the defeated commander's shoulder, preventing him from kneeling. It's a gesture of respect unusual in victory paintings.</p>
<p>The composition is dominated by lances on the Spanish side, giving the work its popular name, Las Lanzas (The Lances). Critic Jos&eacute; Ortega y Gasset called them "the backbone of the entire picture." The Dutch side shows fewer weapons, mostly lowered. Smoke rises in the background from what remains of the siege.</p>
<p>The massive canvas measures 307 by 367 centimeters and hangs at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> in Madrid. Philip IV commissioned it for the Hall of Kingdoms at the Buen Retiro Palace, along with eleven other battle scenes designed to impress foreign ambassadors. Vel&aacute;zquez had traveled with Spinola to Italy in 1629, so he knew the general personally. Spinola died in 1630, making this also a posthumous portrait.</p>`,
    faqs: [
      { question: "Where is The Surrender of Breda?", answer: "The painting hangs at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. It was originally made for Philip IV's palace." },
      { question: "Why is it called Las Lanzas?", answer: "The vertical lances on the Spanish side dominate the composition. Critic Ortega y Gasset called them \"the backbone of the picture.\"" },
      { question: "How big is The Surrender of Breda?", answer: "The canvas measures 307 by 367 centimeters (about 10 by 12 feet). <a href=\"/artist/diego-velazquez\"><strong>Vel&aacute;zquez</strong></a> painted it among the largest of his works." },
      { question: "Why does the victor show respect to the defeated?", answer: "<a href=\"/artist/diego-velazquez\"><strong>Vel&aacute;zquez</strong></a> depicted Spinola's chivalry: preventing van Nassau from kneeling. Spain wanted to project fairness in victory for political purposes." }
    ]
  },
  {
    slug: 'tree-of-life-klimt',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created The Tree of Life between 1905 and 1911 as the central element of the Stoclet Frieze, a monumental mosaic commission for a Brussels mansion. The swirling tree spirals across the composition, its branches becoming elaborate volutes studded with symbolic motifs: eyes, triangles, <a href="https://luxurywallart.com/collections/bird-art" target="_blank" rel="noopener"><strong>birds</strong></a>, and flowers.</p>
<p>Belgian financier Adolphe Stoclet and his wife Suzanne hired architect Josef Hoffmann and the Wiener Werkst&auml;tte collective to design their new home. Klimt received the commission for the dining room frieze. His preparatory drawings, done at 1:1 scale, were executed as mosaics using enamel, mother-of-pearl, coral, and <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold leaf</strong></a>. Only the finest materials were acceptable.</p>
<p>The preparatory paintings measure 195 by 102 centimeters and are housed at <a href="/museum/mak-vienna"><strong>MAK Vienna</strong></a> (Museum of Applied Arts). The actual mosaic frieze remains in the Palais Stoclet, a UNESCO World Heritage Site since 2009 that's still privately owned and rarely accessible. This project represents Klimt's most ambitious decorative work, blending Art Nouveau, Byzantine, Egyptian, and Japanese influences.</p>`,
    faqs: [
      { question: "Where can I see The Tree of Life?", answer: "Klimt's preparatory paintings are at <a href=\"/museum/mak-vienna\"><strong>MAK Vienna</strong></a>. The actual mosaic is in the private Palais Stoclet in Brussels, a UNESCO site rarely open to visitors." },
      { question: "What materials did Klimt use?", answer: "The mosaic uses enamel, mother-of-pearl, coral, and <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>gold leaf</strong></a>. <a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> specified only the finest materials in his instructions." },
      { question: "How big is The Tree of Life?", answer: "The preparatory painting measures 195 by 102 centimeters (about 77 by 40 inches). The mosaic itself spans the full dining room wall of the Stoclet palace." },
      { question: "What style influences The Tree of Life?", answer: "<a href=\"/artist/gustav-klimt\"><strong>Klimt</strong></a> blended Art Nouveau with Byzantine, Egyptian, and Japanese elements. It's a key work of the Vienna Secession movement." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks with descriptions and FAQs...`);

  for (const update of updates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title}`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
