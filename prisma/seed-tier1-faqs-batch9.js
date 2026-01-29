const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ THE SON OF MAN ============
  'the-son-of-man': [
    { question: "Where can I see The Son of Man?", answer: "It's in a <strong>private collection</strong> and not regularly on public display. <a href='/apps/masterpieces/artist/rene-magritte'><strong>René Magritte</strong></a> painted it in 1964 as a self-portrait. Despite being privately held, it's one of the most recognized paintings of the 20th century." },
    { question: "Why is the face hidden by an apple?", answer: "Magritte said: 'Everything we see hides another thing. We always want to see what is hidden by what we see.' The <strong>green apple</strong> floats in front of the man's face, partially obscuring it. The visible left eye peeks over the apple's edge, creating tension between concealment and revelation." },
    { question: "What style is The Son of Man?", answer: "It's <a href='/apps/masterpieces/movement/surrealism'><strong>Surrealist</strong></a>. Magritte's brand of Surrealism differed from Dalí's dreamscapes. Magritte painted ordinary objects (a man in a bowler hat, an apple, a stone wall) in unexpected combinations. The result is uncanny rather than fantastical: normal things made strange." },
    { question: "What does the title mean?", answer: "The title '<strong>Son of Man</strong>' references both a biblical term for Christ and humanity in general. Magritte's bowler-hatted businessman represents the <strong>ordinary modern man</strong> whose inner life remains hidden behind a public facade. The painting questions what identity really means." },
    { question: "How big is the painting?", answer: "It measures <strong>116 cm × 89 cm</strong> (45.7 × 35 inches). The man stands before a low wall with the sea and cloudy sky behind him. Magritte's smooth, almost photographic painting style makes the impossible scene feel disturbingly plausible." }
  ],

  // ============ THE STAR (DANCER ON STAGE) ============
  'the-star-dancer': [
    { question: "Where can I see The Star?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/edgar-degas'><strong>Edgar Degas</strong></a> created it around 1878. It's one of his most beloved ballet compositions and a defining image of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>." },
    { question: "What medium is this work?", answer: "It's <strong>pastel over monotype</strong>. Degas first printed a monotype (a one-off print from an inked plate) and then worked over it with pastel. This layered technique gave him rich, textured surfaces. The dark monotype base creates depth beneath the luminous pastel highlights on the dancer's costume." },
    { question: "What is the scene?", answer: "A <strong>prima ballerina takes her bow</strong> on stage under bright footlights. Other dancers wait in the wings behind her. A dark male figure (possibly a patron or 'abonné') lurks in the backstage shadows. Degas showed both the glamour of performance and the less romantic reality behind the curtain." },
    { question: "How big is The Star?", answer: "It measures <strong>60 cm × 44 cm</strong> (23.6 × 17.3 inches). The overhead viewpoint (as if seen from a theater box) and the cropped composition were influenced by Japanese prints and photography. Degas cut off figures at the edges, giving the scene a spontaneous, captured-in-motion quality." },
    { question: "What does the backstage figure suggest?", answer: "The dark male figure represents the <strong>'abonnés'</strong>, wealthy subscribers who had backstage access at the Paris Opera. They often pursued relationships with dancers, many of whom came from poor families. Degas subtly included this social reality in many ballet paintings, adding complexity beneath the beauty." }
  ],

  // ============ THE SWING ============
  'the-swing': [
    { question: "Where can I see The Swing?", answer: "It's at the <a href='/apps/masterpieces/museum/wallace-collection'><strong>Wallace Collection</strong></a> in London. <a href='/apps/masterpieces/artist/jean-honore-fragonard'><strong>Jean-Honoré Fragonard</strong></a> painted it around 1767. It's the most famous <a href='/apps/masterpieces/movement/rococo'><strong>Rococo</strong></a> painting and the Wallace Collection's star attraction." },
    { question: "What is actually happening in the painting?", answer: "A young woman on a swing is pushed by an <strong>older man (possibly a bishop)</strong> hidden in shadows. Her young lover hides in the bushes below, looking up her skirt as she kicks off her shoe. A cupid statue holds a finger to his lips, urging secrecy. It's an elaborate scene of aristocratic seduction and deception." },
    { question: "Why is The Swing important?", answer: "It perfectly captures the <a href='/apps/masterpieces/movement/rococo'><strong>Rococo</strong></a> spirit: playful, sensual, and decorative. The painting was commissioned by a French nobleman who specified the composition, including the lover's viewpoint. Within 20 years, the French Revolution would sweep away the aristocratic world this painting celebrates." },
    { question: "How big is the painting?", answer: "It measures <strong>81 cm × 64.2 cm</strong> (31.9 × 25.3 inches). The lush garden setting bursts with <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> foliage and <a href='https://luxurywallart.com/collections/pink-wall-art' target='_blank' rel='noopener'><strong>pink</strong></a> light. Fragonard's loose, feathery brushwork creates an atmosphere of dreamy softness that perfectly suits the erotic subject." },
    { question: "Who commissioned the painting?", answer: "Traditionally attributed to the <strong>Baron de Saint-Julien</strong>, who asked for a painting of his mistress on a swing with a bishop pushing her. The original commission went to another artist who refused. Fragonard accepted and turned the risqué request into the defining masterpiece of French Rococo art." }
  ],

  // ============ THE THIRD OF MAY 1808 ============
  'the-third-of-may-1808': [
    { question: "Where can I see The Third of May 1808?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid. <a href='/apps/masterpieces/artist/francisco-goya'><strong>Goya</strong></a> painted it in 1814, six years after the events it depicts. He proposed the painting to the Spanish government as a memorial." },
    { question: "What event does this depict?", answer: "The <strong>execution of Spanish civilians</strong> by Napoleon's soldiers on May 3, 1808, in Madrid. The day before, Madrileños had risen against the French occupation. The reprisals were brutal: hundreds were shot at various locations. Goya shows the moment of execution on Príncipe Pío hill." },
    { question: "Why is the man in white so powerful?", answer: "The central figure throws his arms wide in a <strong>Christ-like gesture</strong>, facing the firing squad with defiance and terror. His white shirt creates the painting's brightest focal point against the dark sky. A lantern illuminates the victims but leaves the soldiers' faces hidden in shadow, making them anonymous instruments of violence." },
    { question: "How big is the painting?", answer: "It measures <strong>268 cm × 347 cm</strong> (8 feet 10 inches × 11 feet 5 inches). The large scale puts the viewer at the level of the victims. Goya's loose, almost violent brushwork conveys chaos and urgency. Blood pools on the ground. Bodies lie crumpled. Another group of prisoners approaches from behind." },
    { question: "What makes this painting revolutionary?", answer: "It's considered the <strong>first modern war painting</strong>. Before Goya, battle paintings glorified victory. This one shows war's brutality from the victims' perspective. No heroism, no glory: just terror and death. Manet's Execution of Maximilian, Picasso's Guernica, and countless war photographs owe a debt to this <a href='/apps/masterpieces/movement/romanticism'><strong>Romantic</strong></a> masterwork." }
  ],

  // ============ THE YELLOW HOUSE ============
  'the-yellow-house': [
    { question: "Where can I see The Yellow House?", answer: "It's at the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam. <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted it in September 1888. It depicts the right wing of 2, Place Lamartine in Arles, where he rented rooms." },
    { question: "Why was the Yellow House important to Van Gogh?", answer: "He envisioned it as a <strong>'Studio of the South'</strong> where artists would live and work together. He decorated it with paintings (including his Sunflowers series) specifically to welcome <strong>Paul Gauguin</strong>, who arrived in October 1888. The dream collapsed after their famous confrontation in December." },
    { question: "What happened to the actual building?", answer: "The <strong>Yellow House was destroyed</strong> by Allied bombing on June 25, 1944, during World War II. The site is now a different building. Van Gogh's painting is the primary record of how the house looked. The <a href='https://luxurywallart.com/collections/yellow-paintings' target='_blank' rel='noopener'><strong>yellow</strong></a> facade was distinctive against the blue sky." },
    { question: "How big is the painting?", answer: "It measures <strong>72 cm × 91.5 cm</strong> (28.3 × 36 inches). Van Gogh used bold, saturated yellows and blues in complementary contrast. He wrote to Theo about the house glowing in the Provençal sunshine. The painting captures his optimism before things fell apart." },
    { question: "What style is this?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. The simplified forms, bold outlines, and intense color are characteristic of Van Gogh's Arles period, his most productive phase. The flat, poster-like quality shows the continued influence of Japanese prints on his work." }
  ],

  // ============ THE TREE OF LIFE (KLIMT) ============
  'tree-of-life-klimt': [
    { question: "Where can I see the Tree of Life?", answer: "The original design is part of a mosaic frieze at the <strong>Palais Stoclet</strong> in Brussels, a private residence not open to the public. Studies and cartoons are at the <strong>MAK (Museum of Applied Arts)</strong> in Vienna. <a href='/apps/masterpieces/artist/gustav-klimt'><strong>Klimt</strong></a> designed it between 1905 and 1911." },
    { question: "What does the Tree of Life depict?", answer: "A <strong>spiraling tree with golden branches</strong> fills a decorative panel. On one side, a standing woman (sometimes identified as Expectation) faces the tree. On the other, a couple embraces (Fulfillment). The tree connects all figures in a continuous decorative flow. The spiraling branches symbolize eternal growth and connection." },
    { question: "What was the Stoclet Frieze?", answer: "Belgian industrialist Adolphe Stoclet commissioned Klimt to create a <strong>mosaic dining room decoration</strong> for his Brussels mansion, designed by architect Josef Hoffmann. The frieze uses marble, gold, silver, coral, and enamel. It's one of the most ambitious decorative art projects of the early 20th century." },
    { question: "How big is the full frieze?", answer: "The complete frieze spans the walls of the Stoclet dining room, approximately <strong>2 meters tall and 8 meters long</strong> across multiple panels. The Tree of Life occupies the longest wall. Klimt's working drawings at the MAK museum measure about 197 cm × 102 cm each." },
    { question: "What art movement does this represent?", answer: "It bridges <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolism</strong></a> and the Vienna Secession's decorative ideals. The Tree of Life motif draws on Egyptian, Byzantine, and Japanese influences. Klimt saw no boundary between fine art and <a href='https://luxurywallart.com/collections/gold-art' target='_blank' rel='noopener'><strong>gold</strong></a> decorative craft, a philosophy central to the Secession movement." }
  ],

  // ============ TWO SISTERS (ON THE TERRACE) ============
  'two-sisters-terrace': [
    { question: "Where can I see Two Sisters?", answer: "It's at the <a href='/apps/masterpieces/museum/art-institute-of-chicago'><strong>Art Institute of Chicago</strong></a>. <a href='/apps/masterpieces/artist/pierre-auguste-renoir'><strong>Pierre-Auguste Renoir</strong></a> painted it in 1881 at the Maison Fournaise restaurant in Chatou, the same location as his Luncheon of the Boating Party." },
    { question: "Are the women actually sisters?", answer: "Probably not. The title was added later and isn't Renoir's. The models were likely <strong>Jeanne Darlot</strong>, an actress, and a child whose identity isn't confirmed. Renoir originally called it simply 'On the Terrace.' The relationship between the figures is warm but may be fictional." },
    { question: "What style is this?", answer: "It's one of the finest examples of mature <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>. Renoir's soft brushwork, warm flesh tones, and dappled light create an atmosphere of casual beauty. The lush garden and river backdrop dissolve into luminous color. The women's hats and the basket of yarn add pops of <a href='https://luxurywallart.com/collections/red-wall-art' target='_blank' rel='noopener'><strong>red</strong></a>." },
    { question: "How big is the painting?", answer: "It measures <strong>100.5 cm × 81 cm</strong> (39.6 × 31.9 inches). Renoir painted it outdoors in natural light. The terrace overlooks the Seine. The young woman's direct gaze and gentle expression give the portrait an intimacy that drew Chicago collector Annie Swan Coburn to purchase it in 1925." },
    { question: "Why did Renoir paint at this location?", answer: "The <strong>Maison Fournaise</strong> was a popular gathering spot for the <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> circle. Renoir painted several major works on its terrace in 1880-81, including this painting and Luncheon of the Boating Party. The restaurant's riverside setting provided ideal subjects: light, water, and well-dressed Parisians at leisure." }
  ],

  // ============ VENUS OF URBINO ============
  'venus-of-urbino': [
    { question: "Where can I see Venus of Urbino?", answer: "It's at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence, Italy. <a href='/apps/masterpieces/artist/titian'><strong>Titian</strong></a> painted it in 1538 for Guidobaldo II della Rovere, Duke of Urbino." },
    { question: "Is this actually Venus?", answer: "Probably not. The duke referred to her simply as 'the nude woman.' There are <strong>no mythological attributes</strong>: no cupids, no seashell, no divine setting. She lies in a contemporary bedroom with servants in the background. Mark Twain called it 'the foulest, the vilest, the obscenest picture the world possesses,' objecting to its frank sensuality." },
    { question: "What later paintings did this influence?", answer: "It directly inspired <strong>Goya's Nude Maja</strong> (c. 1800) and <strong>Manet's Olympia</strong> (1863). All three show a reclining nude looking directly at the viewer. Each was controversial in its time. The lineage shows how artists reinvented the same pose across centuries, each adding contemporary provocation." },
    { question: "How big is the painting?", answer: "It measures <strong>119.2 cm × 165.5 cm</strong> (46.9 × 65.2 inches). The warm, golden flesh tones are characteristic of Titian's <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> palette. The small dog sleeping at her feet symbolizes fidelity (or domesticity), and servants arrange clothing in a cassone (wedding chest) in the background." },
    { question: "What did Manet borrow from this painting?", answer: "Nearly everything: the <strong>reclining pose, the direct gaze, the hand placement, the small animal</strong> (Manet swapped the dog for a black cat). But where Titian idealized, <a href='/apps/masterpieces/artist/edouard-manet'><strong>Manet</strong></a> confronted. His Olympia stares at the viewer as a contemporary woman, not a timeless goddess." }
  ],

  // ============ WATER LILIES (1906) ============
  'water-lilies-1906': [
    { question: "Where can I see this Water Lilies?", answer: "This version is at the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted it in 1906, during a productive period when he focused almost exclusively on his water garden at Giverny." },
    { question: "How many Water Lilies paintings did Monet make?", answer: "Approximately <strong>250 oil paintings</strong> over the last 30 years of his life. The series ranges from small studies to enormous murals. Monet painted the same pond in different seasons, weather, and light conditions, treating the water garden as an infinite, ever-changing subject." },
    { question: "What makes the Water Lilies revolutionary?", answer: "Monet eliminated the horizon line, filling the canvas with <strong>only water and reflections</strong>. There's no sky, no shore, no traditional spatial reference. This radical flattening of pictorial space anticipated abstract painting. The Abstract Expressionists, especially <strong>Jackson Pollock</strong> and Mark Rothko, acknowledged Monet's influence." },
    { question: "How big is this version?", answer: "The MoMA version measures approximately <strong>89.9 cm × 94.1 cm</strong> (35.4 × 37 inches). It's modest compared to the massive panels at the <a href='/apps/masterpieces/museum/musee-de-lorangerie'><strong>Musée de l'Orangerie</strong></a>, where eight murals wrap around two oval rooms. Those panels are up to 2 meters tall and 17 meters long." },
    { question: "What style is this?", answer: "Late <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> verging on abstraction. Monet's cataracts increasingly affected his color perception (he saw more reds and yellows), but he continued painting. The Water Lilies blur the line between representation and pure color, making them a bridge between 19th-century painting and modern art." }
  ],

  // ============ WATER LILIES (ORANGERIE) ============
  'water-lilies-orangerie': [
    { question: "Where can I see these Water Lilies?", answer: "They're at the <a href='/apps/masterpieces/museum/musee-de-lorangerie'><strong>Musée de l'Orangerie</strong></a> in the Tuileries Gardens, Paris. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> donated eight monumental panels to France in 1922, with the condition that they be displayed in a purpose-built space." },
    { question: "How big are the Orangerie panels?", answer: "The eight panels span approximately <strong>100 linear meters</strong> (328 feet) of canvas across two oval rooms. Each panel is about 2 meters (6.5 feet) tall. The largest individual canvas stretches over 17 meters. Monet worked on them for years in a specially built studio at Giverny." },
    { question: "Why are the rooms oval?", answer: "Monet specified the oval shape to create an <strong>immersive, continuous experience</strong>, surrounding viewers with water, light, and reflections. He called it his 'decorative whole.' The curved walls eliminate corners, making the paintings flow seamlessly. The effect is meditative, almost like being inside the water garden itself." },
    { question: "When were they completed?", answer: "Monet worked on them from about <strong>1914 until his death in 1926</strong>. The panels were installed at the Orangerie in 1927, the year after he died. He repainted sections obsessively, sometimes destroying months of work. His cataracts affected his color perception, but he continued painting with fierce determination." },
    { question: "What style are the Orangerie Water Lilies?", answer: "They're late <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> at its most ambitious. The sheer scale and immersive quality anticipate Color Field painting and installation art by decades. Clement Greenberg and other critics later cited these panels as a direct precursor to <strong>Abstract Expressionism</strong>." }
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
