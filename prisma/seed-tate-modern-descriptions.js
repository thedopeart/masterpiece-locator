const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Tate Modern Descriptions ===\n');

  const artworkDescriptions = [
    {
      slug: 'seagram-murals-rothko',
      description: `<p><a href="/apps/masterpieces/artist/mark-rothko"><strong>Mark Rothko</strong></a> created the <strong>Seagram Murals</strong> between 1958 and 1959 for the Four Seasons restaurant in New York's Seagram Building. He intended the dark <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red and maroon</strong></a> paintings to create an oppressive atmosphere, making wealthy diners uncomfortable. He later withdrew from the commission.</p><p>Rothko donated nine murals to the <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate</strong></a> in 1969, where they hang in a dedicated room. The paintings arrived the day Rothko was found dead by suicide. The somber installation honors his wish for a contemplative chapel-like space. These late works mark a shift from his earlier vibrant colors to brooding darkness.</p>`,
      faqs: [
        { question: "Why did Rothko withdraw from the Seagram commission?", answer: "Rothko realized his <strong>dark, oppressive paintings</strong> didn't belong in a fancy restaurant. He wanted to create discomfort for rich diners, but ultimately found the setting wrong for his art." },
        { question: "How many Seagram Murals exist?", answer: "Rothko painted about <strong>30 canvases</strong> for the project. Nine went to Tate, others to the National Gallery of Art in Washington and the Kawamura Memorial Museum in Japan." },
        { question: "Why is the Rothko Room so dark?", answer: "The <strong>low lighting</strong> follows Rothko's wishes. He wanted viewers to feel enveloped by the paintings in a meditative, chapel-like atmosphere rather than a bright gallery." }
      ]
    },
    {
      slug: 'red-on-maroon-rothko-tate',
      description: `<p><strong>Red on Maroon</strong> is one of <a href="/apps/masterpieces/artist/mark-rothko"><strong>Mark Rothko's</strong></a> Seagram Murals, painted in 1959. Two soft-edged <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red rectangles</strong></a> float against a deep maroon background. The colors seem to pulse and breathe, creating an immersive emotional experience.</p><p>Rothko called his paintings "dramas" and wanted viewers to feel transported. The dark palette of these late works replaces his earlier bright yellows and oranges with somber tones suggesting mortality. In 2012, a vandal defaced this painting with black ink. Conservators spent 18 months restoring it. It hangs in the Rothko Room at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Was Red on Maroon vandalized?", answer: "Yes, in 2012 a man wrote on the painting with black marker. <strong>Conservation took 18 months</strong>. The work returned to display in 2014 fully restored." },
        { question: "What do Rothko's colors mean?", answer: "Rothko denied specific meanings but said he expressed <strong>basic human emotions: tragedy, ecstasy, doom</strong>. The dark reds and maroons suggest mortality and contemplation." }
      ]
    },
    {
      slug: 'three-dancers-picasso',
      description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Picasso</strong></a> painted <strong>The Three Dancers</strong> in 1925, marking a violent break from his classical period. Three distorted figures dance frantically before a balcony. Their angular bodies and grimacing faces express psychological torment rather than graceful movement.</p><p>Picasso painted it during marital crisis with his first wife Olga. He later revealed the painting memorialized his friend Ramon Pichot, who died during its creation, and Pichot's wife Germaine, who had driven another friend to suicide. The painting anticipates <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealism</strong></a> and connects to Guernica's anguished figures. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "What is happening in The Three Dancers?", answer: "Three figures dance before a balcony in <strong>frenzied, contorted poses</strong>. The central figure raises her arms; the others flank her in angular distortion. The mood is violent rather than joyful." },
        { question: "Why is The Three Dancers important?", answer: "The painting marks <strong>Picasso's turn toward Surrealism</strong> and away from Neoclassicism. Its violent distortion anticipates Guernica and influenced generations of expressionist painters." }
      ]
    },
    {
      slug: 'weeping-woman-picasso',
      description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Picasso's</strong></a> <strong>Weeping Woman</strong> from 1937 shows a woman's face fractured by grief, tears streaming down angular planes of <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow, green, and blue</strong></a>. She bites a handkerchief, her features dislocated by anguish.</p><p>The subject was Dora Maar, Picasso's lover and a photographer who documented the creation of Guernica. She became the face of suffering in his anti-war imagery. This painting extends themes from Guernica, focusing entirely on maternal grief. The sharp angles and acid colors express pain more powerfully than realistic representation could. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Who is the Weeping Woman?", answer: "The model was <strong>Dora Maar</strong>, Picasso's lover and artistic collaborator. She photographed his work on Guernica. He painted her weeping face obsessively during this period." },
        { question: "How does Weeping Woman relate to Guernica?", answer: "Both works respond to the <strong>Spanish Civil War's bombing of Guernica</strong>. The Weeping Woman extends Guernica's mourning mother figure into an independent study of grief." }
      ]
    },
    {
      slug: 'metamorphosis-narcissus-dali',
      description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Salvador Dalí</strong></a> painted <strong>Metamorphosis of Narcissus</strong> in 1937, showing the Greek youth transforming into a flower. On the left, Narcissus gazes at his reflection. On the right, a stone hand holds an egg from which a narcissus blooms. The two images mirror each other in a hallucinatory double vision.</p><p>Dalí developed his "paranoiac-critical method" to access irrational imagery while awake. He showed this painting to Sigmund Freud, who reportedly said it changed his skepticism about <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealism</strong></a>. Dalí wrote a poem to accompany the work. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "What is the myth of Narcissus?", answer: "<strong>Narcissus</strong> fell in love with his own reflection and wasted away staring at it. The gods transformed him into the flower that bears his name. Dalí shows this metamorphosis doubled." },
        { question: "Did Dalí meet Freud?", answer: "Yes, in 1938 Dalí <strong>visited Freud in London</strong> and showed him this painting. Freud reportedly said it changed his view of Surrealism, seeing artistic rather than merely symptomatic value." }
      ]
    },
    {
      slug: 'lobster-telephone-dali',
      description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Dalí's</strong></a> <strong>Lobster Telephone</strong> from 1936 places a plaster lobster where a telephone receiver should go. The juxtaposition creates <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> disorientation: the domestic object becomes uncanny, the familiar made strange.</p><p>Dalí saw erotic connections between lobsters and telephones, though he never fully explained the association. British collector Edward James commissioned several versions for his home. The object embodies Surrealism's interest in disrupting everyday reality. It's officially titled "Aphrodisiac Telephone." Several versions exist; <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate</strong></a> owns one.</p>`,
      faqs: [
        { question: "Is the Lobster Telephone a functional phone?", answer: "Yes, it's a <strong>working telephone</strong> with a plaster lobster replacing the handset. Edward James actually used his versions in his home." },
        { question: "Why a lobster?", answer: "Dalí associated <strong>lobsters with eroticism</strong>. He also noted that telephones and lobsters share an incomprehensible quality. The pairing creates Surrealist irrationality." }
      ]
    },
    {
      slug: 'snail-matisse',
      description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> created <strong>The Snail</strong> in 1953, near the end of his life. Unable to paint due to illness, he directed assistants to cut shapes from paper he had painted with gouache. The resulting collage spirals outward in blocks of brilliant <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>orange, blue, green, and violet</strong></a>.</p><p>Matisse called this technique "painting with scissors." The Snail abstracts the mollusk's spiral shell into pure color relationships. At nearly 3 meters square, it's monumental despite its simple materials. The work influenced generations of abstract painters and demonstrates how limitation can spark innovation. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Why did Matisse use cut paper?", answer: "After surgery in 1941, Matisse was often <strong>confined to bed or wheelchair</strong>. He couldn't stand to paint. Cutting painted paper allowed him to continue making large-scale works." },
        { question: "Is The Snail actually of a snail?", answer: "The spiral arrangement <strong>abstracts a snail's shell</strong> into pure color blocks. You can sense the spiraling movement without any literal representation of the creature." },
        { question: "How big is The Snail?", answer: "The work measures <strong>286 × 287 cm (about 9 × 9 feet)</strong>. Its monumental scale belies the humble materials of painted paper and paste." }
      ]
    },
    {
      slug: 'water-lilies-tate-monet',
      description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this <strong>Water-Lilies</strong> around 1916 at his garden in Giverny. The nearly square canvas shows his lily pond without horizon or sky, immersing viewers in reflections of water, clouds, and floating blossoms.</p><p>Monet spent his final decades obsessively painting this single subject. Each canvas captures different light and weather conditions. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blues and greens</strong></a> dissolve into near-abstraction. These late works influenced Abstract Expressionists like Jackson Pollock and Mark Rothko, who saw Monet as a predecessor. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "How many Water-Lilies paintings exist?", answer: "Monet created approximately <strong>250 oil paintings</strong> of his water lily pond between 1895 and 1926. They hang in museums worldwide." },
        { question: "Why did Monet paint Water-Lilies so obsessively?", answer: "Monet sought to capture <strong>changing light and atmosphere</strong> through repetition. The pond became a laboratory for studying color, reflection, and the boundary between representation and abstraction." }
      ]
    },
    {
      slug: 'composition-yellow-blue-red-mondrian',
      description: `<p><a href="/apps/masterpieces/artist/piet-mondrian"><strong>Piet Mondrian's</strong></a> <strong>Composition with Yellow, Blue and Red</strong> from 1937 exemplifies his mature <a href="/apps/masterpieces/movement/de-stijl"><strong>De Stijl</strong></a> style. Black lines create an asymmetrical grid filled with primary colors and white. The composition achieves dynamic balance without symmetry.</p><p>Mondrian believed art should express universal harmony through reduction to essentials: horizontal and vertical lines, primary colors, and non-colors (black, white, gray). These paintings influenced architecture, design, and fashion. The apparent simplicity masks careful calibration of each element. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Why only primary colors?", answer: "Mondrian believed <strong>red, yellow, and blue</strong> were fundamental. Combined with black, white, and gray, they expressed universal harmony without the distraction of mixed or secondary colors." },
        { question: "What is De Stijl?", answer: "<strong>De Stijl</strong> (Dutch for 'The Style') was a movement founded in 1917. It advocated pure abstraction through geometric forms, primary colors, and asymmetrical balance. Mondrian was its leading painter." }
      ]
    },
    {
      slug: 'maman-bourgeois',
      description: `<p><a href="/apps/masterpieces/artist/louise-bourgeois"><strong>Louise Bourgeois</strong></a> created <strong>Maman</strong> in 1999, a colossal bronze spider over 9 meters tall. The word means "mother" in French. Bourgeois associated spiders with her mother, a weaver who repaired tapestries. The threatening appearance belies the protective nature Bourgeois saw in the creature.</p><p>The spider's body contains a sac of marble eggs. Steel legs straddle viewers, simultaneously intimidating and sheltering. Bourgeois said: "The Spider is an ode to my mother. She was my best friend." Multiple casts exist worldwide, including outside the <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a> Turbine Hall.</p>`,
      faqs: [
        { question: "Why did Bourgeois make giant spiders?", answer: "Spiders represented her <strong>mother, who was a weaver</strong>. Bourgeois saw spiders as protective, patient, and nurturing. The threatening appearance contrasts with this maternal meaning." },
        { question: "How big is Maman?", answer: "Maman stands <strong>over 9 meters (30 feet) tall</strong>. The bronze spider weighs several tons. Its scale transforms the typically small creature into an architectural presence." },
        { question: "Where can I see Maman?", answer: "Multiple bronze casts exist. Locations include <strong>Tate Modern, Guggenheim Bilbao, National Gallery of Canada</strong>, and other museums. Each installation creates different spatial experiences." }
      ]
    },
    {
      slug: 'shark-formaldehyde-hirst',
      description: `<p><a href="/apps/masterpieces/artist/damien-hirst"><strong>Damien Hirst's</strong></a> <strong>The Physical Impossibility of Death in the Mind of Someone Living</strong> (1991) suspends a 14-foot tiger shark in formaldehyde. The work confronts viewers with death while questioning whether preserved flesh constitutes life or death.</p><p>Collector Charles Saatchi commissioned the work for £50,000. The original shark deteriorated and was replaced in 2006. Critics debated whether a replaced shark was the same artwork. Hedge fund manager Steven Cohen purchased it for reportedly $8 million. It exemplifies the <strong>Young British Artists</strong> movement's provocative approach. While often associated with Tate, the original is in private collection.</p>`,
      faqs: [
        { question: "Is the shark real?", answer: "Yes, it's a <strong>real tiger shark</strong> preserved in formaldehyde. The original caught in Australia deteriorated and was replaced with a new shark in 2006." },
        { question: "Why is the title so long?", answer: "The title describes the <strong>cognitive impossibility of truly comprehending death</strong>. Looking at the preserved shark, we cannot imagine our own death even while confronting mortality." },
        { question: "How much did the shark sell for?", answer: "Steven Cohen reportedly paid <strong>$8-12 million</strong> in 2004. The exact price was never confirmed. It was among the highest prices for a contemporary artwork at the time." }
      ]
    },
    {
      slug: 'summertime-9a-pollock',
      description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> created <strong>Summertime: Number 9A</strong> in 1948, one of his first monumental drip paintings. The elongated canvas (over 5.5 meters wide) unfurls like a frieze. Black and tan skeins of paint dance across the creamy <a href="https://luxurywallart.com/collections/beige" target="_blank" rel="noopener"><strong>beige background</strong></a>.</p><p>The title suggests seasonal exuberance and rhythm. Pollock worked on the floor, moving around the canvas, dripping and flinging paint from sticks and hardened brushes. He called this "action painting." The continuous horizontal format anticipates later "all-over" compositions. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "How did Pollock create Summertime?", answer: "Pollock laid the unstretched canvas on the floor and <strong>dripped, flung, and poured paint</strong> from above. He moved around the canvas, creating an all-over rhythm without compositional focus." },
        { question: "Why is the canvas so wide?", answer: "The <strong>5.5-meter width</strong> creates a frieze-like experience. Viewers can't take it in at once. They must scan across, experiencing the painting as temporal sequence like music." }
      ]
    },
    {
      slug: 'cage-paintings-richter',
      description: `<p><a href="/apps/masterpieces/artist/gerhard-richter"><strong>Gerhard Richter</strong></a> created <strong>Cage (1-6)</strong> in 2006, six large canvases named after composer John Cage. Layers of paint are applied and scraped away with a squeegee, creating complex surfaces where colors appear and disappear beneath veils of <a href="https://luxurywallart.com/collections/grey-art" target="_blank" rel="noopener"><strong>gray</strong></a>.</p><p>Richter's "abstract paintings" emerge from a controlled process that produces unpredictable results. Each scraping reveals or conceals what lies beneath. The title honors Cage's use of chance operations in music. The six paintings sold at auction in 2020 for $30 million combined. They hang together at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Who was John Cage?", answer: "<strong>John Cage</strong> (1912-1992) was an avant-garde composer who used chance operations and silence. His most famous work, 4'33\", consists entirely of silence. Richter admired his acceptance of accident." },
        { question: "How does Richter make these paintings?", answer: "Richter applies layers of paint and <strong>drags a large squeegee</strong> across the surface. This removes and redistributes paint, creating effects the artist controls only partially." }
      ]
    },
    {
      slug: 'lightning-stag-beuys',
      description: `<p><a href="/apps/masterpieces/artist/joseph-beuys"><strong>Joseph Beuys</strong></a> created <strong>Lightning with Stag in its Glare</strong> between 1958 and 1985, combining sculptures made over nearly three decades. A suspended bronze triangular form (lightning) illuminates primordial creatures below: a stag, goat, and boar made from found materials.</p><p>Beuys used unconventional materials (felt, fat, bronze) charged with personal mythology. He claimed to have survived a plane crash in World War II saved by Tatars who wrapped him in felt. The installation evokes primeval nature struck by creative energy. It fills a room at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "What is the lightning bolt?", answer: "The <strong>bronze triangular form</strong> suspended from the ceiling represents lightning, a symbol of sudden illumination and creative force striking the primitive creatures below." },
        { question: "Why did Beuys use unconventional materials?", answer: "Beuys loaded materials like <strong>felt, fat, and copper</strong> with personal meaning. Felt and fat referenced his (possibly mythological) rescue by Tatars who wrapped him in these materials after a crash." }
      ]
    },
    {
      slug: 'quattro-stagioni-twombly',
      description: `<p><a href="/apps/masterpieces/artist/cy-twombly"><strong>Cy Twombly's</strong></a> <strong>Quattro Stagioni</strong> (Four Seasons) from 1993-1995 responds to the cycle of seasons through four large canvases. Scrawled words, drips, and explosive marks evoke spring's awakening, summer's abundance, autumn's decline, and winter's dormancy.</p><p>Twombly lived in Italy for decades, absorbing Mediterranean culture. His work combines classical references with gestural abstraction. The Four Seasons paintings use <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color</strong></a> and energy to suggest temporal cycles. Each canvas responds to a specific season's mood. They hang together at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "What do the Four Seasons paintings show?", answer: "Each painting evokes a <strong>season through color and gesture</strong>. Spring bursts with green, summer with yellow, autumn with orange and brown, winter with white and gray." },
        { question: "Why did Twombly use writing in his paintings?", answer: "Twombly incorporated <strong>scrawled words and phrases</strong> as visual elements. They reference poetry, mythology, and personal notation without demanding literal reading." }
      ]
    },
    {
      slug: 'untitled-bacchus-twombly',
      description: `<p><a href="/apps/masterpieces/artist/cy-twombly"><strong>Cy Twombly's</strong></a> <strong>Untitled (Bacchus)</strong> from 2005 shows <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red loops</strong></a> cascading down a white canvas like wine or blood. The painting references Bacchus (Dionysus), god of wine, ecstasy, and creative frenzy.</p><p>Twombly was nearly 80 when he painted this series, but the energy suggests explosive vitality. The looping marks were made by swinging his arm from the shoulder, almost dancing. The result captures Dionysian abandon through pure gesture. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Who was Bacchus?", answer: "<strong>Bacchus</strong> (Greek: Dionysus) was the god of wine, fertility, and ritual madness. His worship involved ecstatic dancing and intoxication. Twombly evokes this frenzy through gesture." },
        { question: "How did Twombly make the loops?", answer: "The 80-year-old Twombly <strong>swung his arm from the shoulder</strong>, creating each loop with his whole body. The physical movement becomes visible in the painted marks." }
      ]
    },
    {
      slug: 'marilyn-diptych-warhol',
      description: `<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> created the <strong>Marilyn Diptych</strong> in 1962, shortly after Monroe's death. Fifty images of Marilyn (based on a publicity still) repeat across two canvases. The left panel glows with <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>vivid color</strong></a>; the right fades into ghostly <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>black and white</strong></a>.</p><p>The format echoes religious altarpieces. Color represents life and celebrity; monochrome suggests death and fading memory. The silkscreen process produces variations in each image, with some nearly disappearing. It's one of the defining works of <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a>. It hangs at <a href="/apps/masterpieces/museum/tate-modern-london"><strong>Tate Modern</strong></a>.</p>`,
      faqs: [
        { question: "Why did Warhol make a diptych?", answer: "The <strong>two-panel format references religious altarpieces</strong>. Warhol presents Marilyn as a modern saint. The color/monochrome contrast suggests life fading into death." },
        { question: "Why does the right panel fade?", answer: "The silkscreen process naturally <strong>degraded</strong> with repeated use. Warhol exploited this, letting Marilyn's image fade and disappear, evoking her death and the mortality of celebrity." },
        { question: "What photo did Warhol use?", answer: "Warhol used a <strong>publicity still from Niagara (1953)</strong>. He cropped and repeated this single image throughout his Marilyn series, making it iconic through repetition." }
      ]
    },
  ];

  let updated = 0;
  for (const art of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: art.slug }
    });

    if (!existing) {
      console.log(`Not found: ${art.slug}`);
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: art.description,
        faqs: art.faqs,
        updatedAt: new Date(),
      }
    });

    console.log(`Updated: ${art.slug}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}/${artworkDescriptions.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
