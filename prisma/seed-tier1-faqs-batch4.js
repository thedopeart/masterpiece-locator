const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ BATHSHEBA AT HER BATH ============
  'bathsheba-bath': [
    { question: "Where can I see Bathsheba at Her Bath?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted it in 1654, during a period of personal and financial difficulty. It's considered one of his most psychologically profound works." },
    { question: "What is the painting's subject?", answer: "The Old Testament story of <strong>Bathsheba</strong>, who is bathing when King David sees her from his palace roof and summons her. Rembrandt shows Bathsheba holding David's letter, her expression troubled. She seems aware of what's coming: adultery, pregnancy, and the murder of her husband Uriah." },
    { question: "Who modeled for Bathsheba?", answer: "Most scholars believe the model was <strong>Hendrickje Stoffels</strong>, Rembrandt's common-law partner. She lived with him from the late 1640s until her death in 1663. The intimacy and tenderness of the painting supports this identification. She was also condemned by the Dutch Reformed Church for living in sin with Rembrandt." },
    { question: "How big is this painting?", answer: "It measures <strong>142 cm × 142 cm</strong> (55.9 × 55.9 inches), a perfect square. The warm, golden light on Bathsheba's skin against the dark background is a hallmark of Rembrandt's mature <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> style. The brushwork is looser and more expressive than his earlier, more polished technique." },
    { question: "Why is this painting considered important?", answer: "Rembrandt avoided the voyeuristic approach other artists took with this subject. Bathsheba isn't posed seductively. She's <strong>lost in thought</strong>, aware of the moral weight of the moment. That psychological depth, conveying an inner life through a single figure, was unusual for 17th-century <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> painting." }
  ],

  // ============ THE BELLELLI FAMILY ============
  'bellelli-family': [
    { question: "Where can I see The Bellelli Family?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/edgar-degas'><strong>Edgar Degas</strong></a> began the painting around 1858 during a stay with his aunt's family in Florence and finished it in Paris around 1867." },
    { question: "Who are the Bellellis?", answer: "Degas's aunt <strong>Laura Bellelli</strong> (née De Gas) stands on the left with her two daughters, Giovanna and Giulia. Her husband, <strong>Baron Gennaro Bellelli</strong>, sits turned away at his desk. The couple's unhappy marriage is visible in the composition: Laura and the girls form a tight group, while Gennaro is isolated." },
    { question: "What makes this painting significant?", answer: "Degas was only about 24 when he started it, and it's remarkably ambitious: a <strong>large-scale group portrait</strong> that reads like a psychological novel. The spatial arrangement reveals family tensions without any obvious drama. It anticipated Degas's lifelong interest in capturing unguarded human moments." },
    { question: "How big is The Bellelli Family?", answer: "It's large: <strong>200 cm × 250 cm</strong> (78.7 × 98.4 inches). Degas made dozens of preparatory drawings during his Italian visit. The painting blends the formality of traditional <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> portraiture with a candid, snapshot-like quality that feels modern." },
    { question: "What art movement is this?", answer: "It predates <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>, which Degas would later help define. The painting is more traditionally composed than his later work but already shows his interest in <strong>asymmetrical arrangements</strong>, cropped figures, and psychological observation. It bridges academic painting and the modern approach Degas would pioneer." }
  ],

  // ============ BRIDGE OVER A POND OF WATER LILIES ============
  'bridge-water-lilies': [
    { question: "Where can I see this painting?", answer: "It's at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. <a href='/apps/masterpieces/artist/claude-monet'><strong>Claude Monet</strong></a> painted it in 1899. It's one of about 18 versions of the Japanese bridge he painted over several years." },
    { question: "Where is the bridge?", answer: "In Monet's own garden at <strong>Giverny</strong>, about 75 kilometers northwest of Paris. He bought the property in 1890 and spent years designing the water garden, diverting a stream to create the lily pond and having the arched Japanese-style bridge built. The garden still exists and is open to visitors." },
    { question: "Why did Monet paint water lilies so often?", answer: "The water garden became his primary subject for the last <strong>30 years of his life</strong>. He was fascinated by light, reflection, and atmosphere on the water's surface. The lily pond gave him an endlessly changing subject: different seasons, times of day, and weather conditions transformed the same scene completely." },
    { question: "What style is this painting?", answer: "It's <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a>, focused on capturing a specific moment of light and color. The <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> arched bridge, willow reflections, and floating lily pads dissolve into dappled brushstrokes. Monet built the image through layers of color rather than drawing outlines." },
    { question: "How big is this painting?", answer: "It measures <strong>92.7 cm × 73.7 cm</strong> (36.5 × 29 inches). This is from the earlier, more structured series of bridge paintings. Monet's later water lily canvases became increasingly abstract and much larger, eventually filling entire museum rooms." }
  ],

  // ============ CAMPBELL'S SOUP CANS ============
  'campbells-soup-cans': [
    { question: "Where can I see Campbell's Soup Cans?", answer: "The complete set is at the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York. <a href='/apps/masterpieces/artist/andy-warhol'><strong>Andy Warhol</strong></a> created all 32 canvases in 1962. They were first exhibited at the Ferus Gallery in Los Angeles, displayed on shelves like grocery store products." },
    { question: "Why did Warhol paint soup cans?", answer: "He reportedly chose the subject because he <strong>ate Campbell's soup for lunch every day</strong> for twenty years. But the deeper point was about mass production and consumer culture: art could depict everyday commercial products just as legitimately as landscapes or portraits. He wanted to remove the artist's emotional touch." },
    { question: "How many paintings are in the series?", answer: "There are <strong>32 canvases</strong>, one for each variety Campbell's offered at the time. Each canvas measures 50.8 × 40.6 cm (20 × 16 inches). Warhol used a semi-mechanical process: he projected images and traced them, then hand-painted each can with slight variations." },
    { question: "What art movement is this?", answer: "It's one of the founding works of <a href='/apps/masterpieces/movement/pop-art'><strong>Pop Art</strong></a>. Warhol, along with Roy Lichtenstein and others, challenged the boundaries between 'high art' and <strong>commercial culture</strong>. The soup cans blurred the line between an art object and an advertisement." },
    { question: "Were the paintings controversial?", answer: "Very much so. When first shown in 1962, many art world figures questioned whether they were art at all. The nearby gallery displaying abstract paintings ran an ad mocking them: 'Don't miss the <strong>real thing</strong>.' Within a few years, Pop Art had become one of the most influential movements of the 20th century." }
  ],

  // ============ THE CLOTHED MAJA ============
  'clothed-maja': [
    { question: "Where can I see The Clothed Maja?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid, displayed alongside its companion piece, The Nude Maja. <a href='/apps/masterpieces/artist/francisco-goya'><strong>Goya</strong></a> painted both versions between approximately 1800 and 1807." },
    { question: "Why are there two versions?", answer: "The original theory was that <strong>The Clothed Maja was hung over The Nude Maja</strong> to conceal it from unwanted viewers, with a mechanism to switch between them. Both paintings share the same pose, size, and setting. The clothed version may have been commissioned to provide a 'decent' alternative for mixed company." },
    { question: "Who was the model?", answer: "Her identity is debated. Popular tradition names the <strong>Duchess of Alba</strong>, but there's no proof. Others suggest <strong>Pepita Tudó</strong>, mistress of the prime minister Manuel Godoy, who owned both paintings. Goya never identified her. Whoever she was, her direct, confident gaze was unusual for the era." },
    { question: "How big is the painting?", answer: "It measures <strong>95 cm × 190 cm</strong> (37.4 × 74.8 inches), identical to The Nude Maja. Both are oil on canvas. The tight white outfit actually emphasizes the figure's form almost as much as the nude version does, which was likely intentional on Goya's part." },
    { question: "What style is this?", answer: "It's late 18th-century Spanish painting with <a href='/apps/masterpieces/movement/romanticism'><strong>Romantic</strong></a> tendencies. Goya's naturalistic approach and the model's direct gaze broke from the idealized Classical nude tradition. The Spanish Inquisition later investigated The Nude Maja for obscenity, but nothing came of it." }
  ],

  // ============ DANCERS IN BLUE ============
  'dancers-blue': [
    { question: "Where can I see Dancers in Blue?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/edgar-degas'><strong>Edgar Degas</strong></a> created it around 1890, during the later period of his career when his eyesight was deteriorating. It's one of his most reproduced ballet paintings." },
    { question: "Why did Degas paint so many dancers?", answer: "He was fascinated by <strong>movement, light, and the body in motion</strong>. The Paris Opera gave him backstage access, and he spent years observing rehearsals and performances. About half of Degas's total output relates to dance. He was interested in the physical effort behind the graceful performance." },
    { question: "What medium is Dancers in Blue?", answer: "It's <strong>pastel on paper</strong>. Degas increasingly turned to pastels as his eyesight worsened because the medium allowed him to work with bold color and loose strokes. The <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> tutus glow with layered pastel textures that oil paint couldn't easily achieve." },
    { question: "What style is this?", answer: "It's <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a>, though Degas preferred to call himself a Realist. The cropped composition (dancers cut off at the edge) and the unusual overhead viewpoint give it a <strong>snapshot quality</strong>. Degas was influenced by photography and Japanese prints, both of which used unexpected framing." },
    { question: "How big is Dancers in Blue?", answer: "It measures approximately <strong>85 cm × 75.6 cm</strong> (33.5 × 29.8 inches). Four dancers adjust their costumes backstage, bending and stretching in a casual, unposed moment. Degas often showed dancers in these private, unglamorous moments rather than on stage performing." }
  ],

  // ============ DEATH AND LIFE ============
  'death-and-life': [
    { question: "Where can I see Death and Life?", answer: "It's at the <a href='/apps/masterpieces/museum/belvedere'><strong>Belvedere Museum</strong></a> in Vienna, Austria. <a href='/apps/masterpieces/artist/gustav-klimt'><strong>Gustav Klimt</strong></a> began it around 1908 and reworked it significantly in 1915. It won first prize at the International Art Exhibition in Rome in 1911." },
    { question: "What does the painting depict?", answer: "On the left, a <strong>grinning skeleton draped in a patterned cloth</strong> represents Death. On the right, a cluster of human figures of all ages (a baby, lovers, an old woman, a young mother) are entwined in sleep or embrace, representing Life. The two sides face each other across a dark void." },
    { question: "How does this differ from Klimt's gold paintings?", answer: "Klimt made this after his <strong>Golden Phase</strong> ended. The palette is darker and more somber. Death's robe uses <a href='https://luxurywallart.com/collections/colorful-artwork' target='_blank' rel='noopener'><strong>colorful</strong></a> crosses and geometric patterns instead of gold leaf. The human figures are wrapped in floral fabrics. The style is more expressionistic than decorative." },
    { question: "How big is Death and Life?", answer: "It measures <strong>178 cm × 198 cm</strong> (70.1 × 78 inches). Klimt originally painted the background gold, then repainted it a dark blue-gray in 1915. X-ray analysis shows the original gold underneath. The change gave the painting a more serious, wartime mood." },
    { question: "What art movement is this?", answer: "It belongs to <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolism</strong></a> and the Vienna Secession movement. The allegorical subject (Death facing Life) is a classic Symbolist theme. Klimt's decorative treatment of the figures' clothing connects it to Art Nouveau, while the emotional intensity points toward Expressionism." }
  ],

  // ============ THE DEATH OF SARDANAPALUS ============
  'death-sardanapalus': [
    { question: "Where can I see The Death of Sardanapalus?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/eugene-delacroix'><strong>Eugène Delacroix</strong></a> painted it in 1827. The painting was controversial at its Salon debut and contributed to heated debates about Romantic art in France." },
    { question: "What is the subject?", answer: "The Assyrian king <strong>Sardanapalus</strong> reclines on a massive bed watching his servants destroy his possessions (including concubines, horses, and treasures) before enemies breach his palace. Based loosely on a Lord Byron play, the scene depicts the king's command that everything he owns be destroyed rather than captured." },
    { question: "Why was this painting controversial?", answer: "Critics condemned its <strong>chaotic composition, graphic violence, and sensuality</strong>. Academic painters expected orderly arrangements and moral subjects. This painting offered neither. The swirling mass of bodies, jewels, and destruction overwhelmed viewers. Even Delacroix's supporters struggled to defend it publicly." },
    { question: "How big is The Death of Sardanapalus?", answer: "It's enormous: <strong>392 cm × 496 cm</strong> (12 feet 10 inches × 16 feet 3 inches). The massive scale amplifies the chaos. The <a href='https://luxurywallart.com/collections/red-wall-art' target='_blank' rel='noopener'><strong>red</strong></a> bed dominates the composition, with Sardanapalus surveying the destruction with eerie calm." },
    { question: "What art movement does this represent?", answer: "It's a landmark of <a href='/apps/masterpieces/movement/romanticism'><strong>Romanticism</strong></a>. Delacroix favored emotion, movement, and dramatic color over the restraint of <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassicism</strong></a>. The painting's wild energy and exotic subject matter embody everything the Romantic movement stood for: passion over reason." }
  ],

  // ============ GRANDE ODALISQUE ============
  'grande-odalisque': [
    { question: "Where can I see the Grande Odalisque?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/jean-auguste-dominique-ingres'><strong>Jean-Auguste-Dominique Ingres</strong></a> painted it in 1814 for Caroline Murat, Queen of Naples and sister of Napoleon." },
    { question: "Why does her body look distorted?", answer: "Critics immediately noticed that the odalisque has <strong>extra vertebrae</strong>. Her back is impossibly elongated, estimated at two or three vertebrae too many. Ingres deliberately sacrificed anatomical accuracy for a more elegant, flowing line. He prioritized visual grace over realism, a choice that outraged academic critics." },
    { question: "What is an odalisque?", answer: "An <strong>odalisque</strong> was a female attendant in an Ottoman harem. The subject was popular in 19th-century French art as an excuse to paint idealized <a href='https://luxurywallart.com/collections/women-art' target='_blank' rel='noopener'><strong>female</strong></a> nudes in exotic settings. Ingres's version, with its peacock fan, turban, and hookah, reflects European fantasies about the Orient." },
    { question: "How big is the painting?", answer: "It measures <strong>91 cm × 162 cm</strong> (35.8 × 63.8 inches). Ingres painted the flesh with an almost porcelain smoothness, concealing his brushstrokes entirely. This technique contrasted sharply with Delacroix's visible, energetic brushwork and fueled the rivalry between Classical and Romantic camps." },
    { question: "What art movement is this?", answer: "Ingres was the champion of <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassicism</strong></a>, which valued drawing, clarity, and idealized form. But the Grande Odalisque's distortions and exotic subject actually share more with <a href='/apps/masterpieces/movement/romanticism'><strong>Romanticism</strong></a>. The painting sits uncomfortably between both movements, which is part of what makes it interesting." }
  ],

  // ============ HUNTERS IN THE SNOW ============
  'hunters-in-the-snow': [
    { question: "Where can I see Hunters in the Snow?", answer: "It's at the <a href='/apps/masterpieces/museum/kunsthistorisches-museum'><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. <a href='/apps/masterpieces/artist/pieter-bruegel-elder'><strong>Pieter Bruegel the Elder</strong></a> painted it in 1565 as part of a series depicting the months of the year." },
    { question: "What month does this represent?", answer: "It represents <strong>December-January</strong> (deep winter). Bruegel painted a series of six panels for the Antwerp merchant Niclaes Jongelinck, each showing a time of year. Three hunters and their dogs trudge homeward through snow toward a Flemish village. The frozen ponds below are alive with ice skaters." },
    { question: "What's the view in the painting?", answer: "Bruegel created a sweeping <strong>panoramic landscape</strong> seen from a high vantage point. Bare trees frame the foreground, snow-covered rooftops dot the middle ground, and jagged Alpine peaks rise in the background. The bird's-eye perspective was innovative: it makes the viewer feel suspended above the landscape." },
    { question: "How big is the painting?", answer: "It measures <strong>117 cm × 162 cm</strong> (46.1 × 63.8 inches). The painting is oil on wood panel. Bruegel packed in extraordinary detail: you can count individual skaters, spot a bird trap, and see smoke rising from chimneys. Despite the cold subject, the scene radiates a sense of <strong>communal life</strong>." },
    { question: "What art movement is this?", answer: "It belongs to the <a href='/apps/masterpieces/movement/northern-renaissance'><strong>Northern Renaissance</strong></a>. Bruegel was the greatest Flemish painter of the 16th century. His landscapes elevated the genre from background decoration to a primary subject. The film director Andrei Tarkovsky featured this painting prominently in his 1972 film Solaris." }
  ],
};

async function seed() {
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${slug} (${faqData.length} FAQs)`);
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
    }
  }
  await prisma.$disconnect();
}

seed();
