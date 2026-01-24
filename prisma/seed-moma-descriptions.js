const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding MoMA Descriptions ===\n');

  const artworkDescriptions = [
    {
      slug: 'demoiselles-avignon-picasso',
      description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted <strong>Les Demoiselles d'Avignon</strong> in 1907, shattering centuries of artistic convention. Five nude women stare confrontationally at the viewer. Their bodies are fractured into angular planes. Two figures on the right wear mask-like faces inspired by African sculpture.</p><p>The painting shocked even Picasso's closest friends. Matisse thought it was a hoax. Braque said it made him feel like he'd been drinking gasoline. Picasso kept it rolled up in his studio for years. It wasn't publicly exhibited until 1916. Today it's considered the <strong>proto-Cubist</strong> masterpiece that launched modern art. The title refers to a brothel on Carrer d'Avinyó in Barcelona. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Why is Les Demoiselles d'Avignon important?", answer: "The painting <strong>broke with Renaissance perspective and idealized beauty</strong>. Its angular forms and African-influenced masks launched Cubism and changed the course of modern art forever." },
        { question: "What does 'Les Demoiselles d'Avignon' mean?", answer: "The French title means <strong>'The Young Women of Avignon'</strong>. It refers to Carrer d'Avinyó, a street in Barcelona known for prostitution. The figures are sex workers in a brothel." },
        { question: "Why do some figures have mask-like faces?", answer: "Picasso saw <strong>African and Iberian masks</strong> at the Trocadéro museum in Paris. Their stylized, geometric forms influenced the two right-hand figures, connecting modern art to 'primitive' sources." }
      ]
    },
    {
      slug: 'persistence-of-memory-dali',
      description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Salvador Dalí</strong></a> painted <strong>The Persistence of Memory</strong> in 1931. Three soft, melting watches drape across a surreal landscape, while a fourth hangs from a dead tree. A fleshy creature sleeps in the center, representing a distorted self-portrait.</p><p>Dalí claimed the idea came from melting Camembert cheese. The painting explores the irrelevance of time in the unconscious mind, a key <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> concept. The hard rocks in the background depict Port Lligat in Catalonia, where Dalí lived. Despite its small size (only 24 × 33 cm), it's become one of the most recognizable images in art history. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "What do the melting clocks mean?", answer: "The melting watches suggest <strong>the fluidity of time</strong> in dreams and the unconscious. Dalí used the 'paranoiac-critical method' to access irrational imagery. Time becomes meaningless in the dream state." },
        { question: "What is the fleshy creature in the center?", answer: "The <strong>distorted fleshy form</strong> is a self-portrait of Dalí, sleeping and dreaming. Similar creatures appear in other Dalí works. The ants on the orange watch symbolize decay." },
        { question: "How big is The Persistence of Memory?", answer: "The painting is surprisingly small: only <strong>24 × 33 cm (9.5 × 13 inches)</strong>. Many visitors are shocked by its size, expecting something larger given its fame." }
      ]
    },
    {
      slug: 'water-lilies-moma-monet',
      description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted approximately 250 oil paintings of his water lily pond at Giverny. The <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a> triptych, completed around 1914-1926, immerses viewers in a panoramic vision of water, reflections, and floating blossoms.</p><p>No horizon line anchors the composition. Viewers float on the surface of the pond, surrounded by <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blues, greens, and purples</strong></a>. Monet's failing eyesight in his final years gave these late works an almost abstract quality. The paintings bridge <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> and <a href="/apps/masterpieces/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a>. Their influence on later artists like Jackson Pollock and Mark Rothko cannot be overstated.</p>`,
      faqs: [
        { question: "How many Water Lilies paintings did Monet make?", answer: "Monet created approximately <strong>250 Water Lilies paintings</strong> between 1895 and his death in 1926. The series occupied his final three decades. Museums worldwide hold various panels." },
        { question: "Why are the Water Lilies so large?", answer: "Monet wanted viewers to feel <strong>immersed in the pond</strong>. Large scale eliminates distance between viewer and subject. The paintings at MoMA and the Orangerie in Paris create this enveloping effect." },
        { question: "Was Monet going blind?", answer: "Monet had <strong>cataracts</strong> that progressively affected his vision. He resisted surgery for years. The condition may explain the increasingly abstract quality of his late Water Lilies." }
      ]
    },
    {
      slug: 'broadway-boogie-woogie-mondrian',
      description: `<p><a href="/apps/masterpieces/artist/piet-mondrian"><strong>Piet Mondrian</strong></a> painted <strong>Broadway Boogie Woogie</strong> in 1943, shortly after fleeing wartime Europe for New York. The painting vibrates with the energy of Manhattan's grid and the syncopated rhythms of boogie-woogie jazz. Small colored blocks pulse along yellow lines like traffic signals or musical beats.</p><p>Mondrian abandoned his earlier black lines for <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow</strong></a>, <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a>, and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a>. The strict geometry of <a href="/apps/masterpieces/movement/de-stijl"><strong>De Stijl</strong></a> meets American dynamism. It was his last completed painting before his death in 1944. The work hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "What is boogie-woogie?", answer: "<strong>Boogie-woogie</strong> is a form of jazz piano with a driving, syncopated bass line. Mondrian loved the music and frequented New York jazz clubs. The painting's rhythm echoes boogie-woogie's pulsing beat." },
        { question: "Why is Broadway Boogie Woogie important?", answer: "The painting shows <strong>Mondrian's late evolution</strong>. He replaced black lines with colored segments, creating unprecedented energy. It bridges European geometric abstraction and American Abstract Expressionism." },
        { question: "Did Mondrian finish this painting?", answer: "Yes, <strong>Broadway Boogie Woogie is complete</strong>. Mondrian was working on Victory Boogie Woogie when he died in 1944. That painting remains unfinished in The Hague." }
      ]
    },
    {
      slug: 'bather-cezanne-moma',
      description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted <strong>The Bather</strong> around 1885, showing a single male figure standing in a landscape. The muscular youth faces forward, hands at his sides, in a pose echoing classical sculpture. But Cézanne's distinctive brushwork fragments the figure into geometric planes.</p><p>Cézanne painted numerous bathers throughout his career, both male and female. This monumental single figure influenced Picasso's Demoiselles d'Avignon and countless later artists. The flattened space and simplified forms point toward <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a>. Cézanne's instruction to "treat nature by the cylinder, the sphere, the cone" finds expression here. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Why did Cézanne paint so many bathers?", answer: "Bathers allowed Cézanne to explore <strong>the human figure in landscape</strong> without the complexity of commissioned portraits. The subject let him focus on formal problems of color, form, and space." },
        { question: "What influence did this painting have?", answer: "Cézanne's bathers directly influenced <strong>Picasso's Demoiselles d'Avignon</strong> and early Cubism. Matisse and other modernists studied his treatment of the figure in space." }
      ]
    },
    {
      slug: 'dance-matisse-moma',
      description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> painted <strong>Dance (I)</strong> in 1909 as a study for a larger commissioned work. Five nude figures join hands and dance in a circle against bands of <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> sky and <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> earth. The red-orange bodies create a primal rhythm of color and movement.</p><p>Matisse simplified the composition to its essence: bodies, space, movement. The <strong>Fauvist</strong> colors are deliberately unrealistic, evoking pure emotion rather than describing nature. Russian collector Sergei Shchukin commissioned the final version, which hangs in the Hermitage. This preliminary version, equally powerful, belongs to <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "What is the difference between Dance (I) and Dance (II)?", answer: "<strong>Dance (I)</strong> at MoMA is a study with softer pink tones. <strong>Dance (II)</strong> at the Hermitage is the final version with intense vermillion figures. Both show the same composition." },
        { question: "Who commissioned Dance?", answer: "<strong>Sergei Shchukin</strong>, a Russian textile merchant, commissioned Dance and Music for his Moscow mansion. After the Revolution, his collection became state property, now at the Hermitage." },
        { question: "What movement is Dance associated with?", answer: "Dance exemplifies <strong>Fauvism</strong>, with its bold, non-naturalistic colors. The movement's name means 'wild beasts.' Matisse was its leading figure alongside André Derain." }
      ]
    },
    {
      slug: 'one-number-31-pollock',
      description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock</strong></a> created <strong>One: Number 31, 1950</strong> using his revolutionary drip technique. The massive canvas (nearly 9 by 18 feet) lay on the floor while Pollock moved around it, dripping, pouring, and flicking enamel paint from sticks and hardened brushes.</p><p>The result is a dense web of <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>black, white, and tan</strong></a> lines with no focal point or composition in the traditional sense. Pollock called it "energy and motion made visible." The painting marked the peak of <a href="/apps/masterpieces/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> and established New York as the new center of the art world. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "How did Pollock create drip paintings?", answer: "Pollock laid unstretched canvas on the floor and <strong>moved around it, dripping paint</strong> from sticks, brushes, and cans. He called this 'action painting.' The physical process became part of the artwork." },
        { question: "Why is One: Number 31 important?", answer: "The painting represents the <strong>peak of Pollock's drip period</strong> (1947-1950). Its scale and energy helped establish Abstract Expressionism as the dominant art movement of the postwar era." },
        { question: "Why did Pollock use numbers for titles?", answer: "Pollock numbered works to <strong>avoid suggesting subject matter</strong>. He wanted viewers to experience the paintings purely, without narrative associations. 'One' was added later for a retrospective." }
      ]
    },
    {
      slug: 'full-fathom-five-pollock',
      description: `<p><a href="/apps/masterpieces/artist/jackson-pollock"><strong>Jackson Pollock's</strong></a> <strong>Full Fathom Five</strong> from 1947 marks the emergence of his drip technique. The title comes from Shakespeare's Tempest: "Full fathom five thy father lies." Beneath the swirling surface lies buried detritus: nails, tacks, buttons, coins, cigarettes, even a key.</p><p>The dark <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green and black</strong></a> surface suggests oceanic depths. Pollock poured, dripped, and flung paint, then embedded objects before the surface dried. It's one of his first fully realized "all-over" compositions, where no part of the canvas takes precedence over another. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "What objects are embedded in Full Fathom Five?", answer: "The painting contains <strong>nails, tacks, buttons, coins, cigarettes, a key</strong>, and other items. Pollock pressed them into wet paint. They're now invisible beneath the surface but were revealed by X-rays." },
        { question: "What does the title Full Fathom Five mean?", answer: "The title comes from <strong>Ariel's song in The Tempest</strong>: 'Full fathom five thy father lies.' It describes a drowned sailor transformed into something rich and strange, fitting the painting's oceanic depths." }
      ]
    },
    {
      slug: 'woman-i-de-kooning',
      description: `<p><a href="/apps/masterpieces/artist/willem-de-kooning"><strong>Willem de Kooning</strong></a> worked on <strong>Woman I</strong> from 1950 to 1952, scraping and repainting obsessively. The figure emerges from violent brushwork: huge eyes, bared teeth, enormous breasts. She's both ancient fertility goddess and modern pin-up, terrifying and magnetic.</p><p>The painting outraged those who felt <a href="/apps/masterpieces/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> had moved beyond representation. De Kooning insisted the figure kept asserting itself. The Woman series consumed him for years. This first painting established the theme: <strong>female power</strong> that is seductive, monstrous, and indestructible. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Why was Woman I controversial?", answer: "Many felt de Kooning had <strong>betrayed abstraction</strong> by returning to figurative painting. Others found the image of women disturbing or misogynistic. De Kooning continued the Woman series regardless." },
        { question: "How long did de Kooning work on Woman I?", answer: "De Kooning worked on Woman I for <strong>nearly two years</strong> (1950-1952), constantly scraping off and repainting. The process of revision became central to his method." },
        { question: "What influenced de Kooning's Woman figures?", answer: "De Kooning cited <strong>Mesopotamian fertility goddesses, Marilyn Monroe, and billboard ads</strong> as influences. The Woman figures combine ancient power with modern commercial sexuality." }
      ]
    },
    {
      slug: 'gold-marilyn-warhol',
      description: `<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> created <strong>Gold Marilyn Monroe</strong> in 1962, shortly after the actress's death. Her face floats against a vast field of <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold</strong></a>, like a Byzantine icon. The silkscreen image, based on a publicity photo, appears both sacred and empty.</p><p>Warhol commented on celebrity worship, mass media, and the commodification of beauty. Marilyn becomes a modern religious figure, her image endlessly reproducible yet strangely distant. The gold background evokes Orthodox icons and Hollywood glamour simultaneously. <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a> collapsed distinctions between high art and popular culture. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Why did Warhol use gold for Marilyn?", answer: "The <strong>gold evokes Byzantine religious icons</strong>, suggesting Marilyn as a modern saint. It also references Hollywood's golden age. Warhol blurred sacred and secular imagery." },
        { question: "What photo did Warhol use?", answer: "Warhol based the image on a <strong>publicity still from Niagara (1953)</strong>. He used the same cropped photo repeatedly, making it as recognizable as a religious icon through repetition." },
        { question: "When did Warhol make Gold Marilyn?", answer: "Warhol created it in <strong>1962, shortly after Monroe's death</strong> in August that year. Her sudden death made the theme of celebrity mortality particularly poignant." }
      ]
    },
    {
      slug: 'campbells-soup-cans-warhol',
      description: `<p><a href="/apps/masterpieces/artist/andy-warhol"><strong>Andy Warhol</strong></a> exhibited <strong>Campbell's Soup Cans</strong> in 1962, displaying 32 canvases (one for each flavor) on shelves like supermarket products. The works launched <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a> into public consciousness and transformed how we think about art and commerce.</p><p>Warhol chose the subject because he ate Campbell's soup for lunch every day for twenty years. The paintings question the distinction between art and advertisement, original and reproduction. Each canvas appears mechanically produced but was actually hand-painted. Warhol later used silkscreens for a more industrial effect. The complete set hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Why did Warhol paint soup cans?", answer: "Warhol claimed he <strong>ate Campbell's soup for lunch every day for twenty years</strong>. But he also saw the cans as perfect American imagery: commercial, repeatable, and universally recognized." },
        { question: "How many Campbell's Soup Cans are there?", answer: "The complete series contains <strong>32 canvases</strong>, one for each variety Campbell's offered in 1962. MoMA owns the complete set and displays them together." },
        { question: "Were the Campbell's Soup Cans hand-painted?", answer: "Yes, the 1962 series was <strong>hand-painted</strong>. Warhol only began using silkscreens later that year. The subtle variations between canvases reveal their handmade origins." }
      ]
    },
    {
      slug: 'girl-with-ball-lichtenstein',
      description: `<p><a href="/apps/masterpieces/artist/roy-lichtenstein"><strong>Roy Lichtenstein</strong></a> painted <strong>Girl with Ball</strong> in 1961, based on a hotel advertisement in the New York Times. A young woman in a bathing suit holds a beach ball above her head, rendered in the Ben-Day dots of commercial printing.</p><p>Lichtenstein enlarged and stylized the throwaway image, transforming commercial art into fine art. The thick black outlines and limited <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>color palette</strong></a> mimic cheap printing processes. This early work established his signature style before he moved to comic book sources. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "What is Girl with Ball based on?", answer: "Lichtenstein based it on a <strong>newspaper advertisement for Mount Airy Lodge</strong> resort in the Poconos. He found the image in the New York Times and enlarged it into a painting." },
        { question: "What are Ben-Day dots?", answer: "<strong>Ben-Day dots</strong> are a printing technique using small colored dots to create tones. Comics and cheap printing used them. Lichtenstein painted them by hand, mimicking mechanical reproduction." }
      ]
    },
    {
      slug: 'three-flags-johns',
      description: `<p><a href="/apps/masterpieces/artist/jasper-johns"><strong>Jasper Johns</strong></a> painted <strong>Three Flags</strong> in 1958, stacking three American flags in decreasing size. The smallest sits in front, creating a relief-like projection from the wall. It's both a painting of flags and an object made of flags, confusing categories of representation and reality.</p><p>Johns used <strong>encaustic</strong> (pigmented wax), building up textured surfaces that catch light. The flag was "something the mind already knows," freeing Johns to explore formal problems without inventing imagery. Three Flags sold at auction in 1980 for $1 million, then a record for a living artist. It hangs in the <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful gallery</strong></a> at MoMA.</p>`,
      faqs: [
        { question: "Why did Jasper Johns paint flags?", answer: "Johns said he dreamed of painting a large American flag. The familiar image freed him to <strong>focus on paint itself</strong> rather than inventing subjects. 'Things the mind already knows' became his approach." },
        { question: "What is encaustic?", answer: "<strong>Encaustic</strong> is pigment mixed with hot beeswax. It dries quickly, preserving brushstrokes and creating rich textures. Johns used it extensively in his early flag and target paintings." },
        { question: "How does Three Flags differ from Flag?", answer: "Three Flags <strong>projects into space</strong> rather than lying flat. Three canvases of decreasing size create a sculptural presence. It questions whether it's a painting or an object." }
      ]
    },
    {
      slug: 'self-portrait-cropped-hair-kahlo',
      description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted <strong>Self-Portrait with Cropped Hair</strong> in 1940, shortly after divorcing Diego Rivera. She sits wearing a man's suit, her long black hair cut short and scattered around her. Musical notation and lyrics float above: "Look, if I loved you it was for your hair. Now that you're bald, I don't love you anymore."</p><p>The painting rejects feminine beauty standards associated with Rivera's desires. Kahlo declared her independence by destroying what he had loved about her. The oversized suit swallows her small frame. Yet her gaze remains direct and unflinching. They remarried later that year. It hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Why did Kahlo cut her hair?", answer: "Kahlo cut her hair after <strong>divorcing Diego Rivera</strong> in 1939. The painting shows her rejecting the feminine beauty he loved. The song lyrics mock this dependence on her hair." },
        { question: "What do the song lyrics mean?", answer: "The Mexican folk song says <strong>'if I loved you it was for your hair, now that you're bald, I don't love you anymore.'</strong> Kahlo uses it ironically, asserting her value beyond physical beauty." },
        { question: "Did Kahlo and Rivera stay divorced?", answer: "No, they <strong>remarried in December 1940</strong>, the same year she painted this. Their relationship remained turbulent until Kahlo's death in 1954." }
      ]
    },
    {
      slug: 'fulang-chang-kahlo',
      description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted <strong>Fulang-Chang and I</strong> in 1937, showing herself with her pet spider monkey against a <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green jungle background</strong></a>. A pink ribbon connects them, suggesting an intimate bond. The monkey was a companion during her many months of convalescence.</p><p>Kahlo kept many exotic pets at Casa Azul, including monkeys, parrots, and hairless dogs. In Mexican folklore, monkeys symbolize lust, but Kahlo transforms Fulang-Chang into a nurturing companion. The painting was originally paired with a mirror frame containing a smaller portrait. They were later separated. This panel hangs in <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>MoMA</strong></a>.</p>`,
      faqs: [
        { question: "Who was Fulang-Chang?", answer: "<strong>Fulang-Chang</strong> was Kahlo's pet spider monkey. He appears in several paintings as a companion and symbol of tenderness. Kahlo kept many exotic animals at her home Casa Azul." },
        { question: "What does the monkey symbolize?", answer: "In Mexican tradition, <strong>monkeys represent lust</strong>. But Kahlo shows Fulang-Chang as a gentle companion. The pink ribbon suggests affection and connection during her periods of isolation." },
        { question: "Was this painting always a single panel?", answer: "Originally Kahlo <strong>created a mirrored frame</strong> with a smaller self-portrait to hang beside this painting. They were separated and sold individually. MoMA owns just this panel." }
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
