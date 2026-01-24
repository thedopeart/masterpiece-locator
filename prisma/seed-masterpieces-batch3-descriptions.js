const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkDescriptions = [
  // === GAUGUIN ===
  {
    slug: 'spirit-of-dead-watching',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this provocative work during his first stay in Tahiti, drawing from Polynesian spiritual beliefs and his relationship with his young Tahitian companion Teha'amana. The scene shows a nude figure lying face-down on a bed while a ghostly presence watches from behind. Gauguin claimed inspiration came after returning home to find Teha'amana terrified in the dark, believing she had encountered a spirit of the dead.</p>
<p>The painting blends Western nude traditions with <strong>Polynesian mythology</strong>, featuring phosphorescent flowers and a hooded figure representing the tupapau, spirits the Tahitians believed watched over the dead. The <a href="https://luxurywallart.com/collections/purple-paintings" target="_blank" rel="noopener"><strong>deep purple</strong></a> and <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>yellow tones</strong></a> create an atmosphere of mystery and unease. Critics debated whether Gauguin exploited or honored Tahitian culture, a controversy that continues today.</p>
<p>The work now resides at the <a href="/apps/masterpieces/museum/albright-knox-art-gallery"><strong>Albright-Knox Art Gallery</strong></a> in Buffalo, New York.</p>`,
    faqs: [
      {
        question: "Where can I see Spirit of the Dead Watching?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/albright-knox-art-gallery\"><strong>Albright-Knox Art Gallery</strong></a> in Buffalo, New York. It's one of Gauguin's most significant Tahitian works in American collections."
      },
      {
        question: "What does Spirit of the Dead Watching depict?",
        answer: "The scene shows a young <strong>Tahitian woman</strong> lying on a bed while a dark, hooded spirit figure watches. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> drew from local beliefs about tupapau, spirits that guard the dead."
      },
      {
        question: "Why is this painting controversial?",
        answer: "Critics debate whether Gauguin romanticized or exploited <strong>Polynesian culture</strong>. His relationship with very young Tahitian women raises serious ethical questions that modern scholars continue examining."
      },
      {
        question: "How big is Spirit of the Dead Watching?",
        answer: "The painting measures 72.4 cm × 92.4 cm (28.5 × 36.4 inches). Gauguin painted it on <strong>burlap</strong> later mounted on canvas, giving it an unusual texture."
      }
    ]
  },
  {
    slug: 'vision-after-sermon',
    description: `<p><a href="/apps/masterpieces/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> created this groundbreaking work in Pont-Aven, Brittany, marking his decisive break from <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. The painting shows Breton women in traditional headdresses witnessing Jacob wrestling with an angel, the vision occurring after hearing a sermon on the biblical story. A diagonal tree branch dramatically separates the praying figures from the supernatural scene.</p>
<p>The bold <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> background was revolutionary, abandoning naturalistic color for emotional expression. Gauguin flattened perspective and outlined forms with dark lines, techniques borrowed from Japanese prints and medieval stained glass. This approach influenced the <strong>Symbolist movement</strong> and later expressionists who sought meaning beyond visual reality.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/national-galleries-of-scotland"><strong>National Galleries of Scotland</strong></a> in Edinburgh, where it arrived after Gauguin tried and failed to donate it to a local Breton church.</p>`,
    faqs: [
      {
        question: "Where is Vision After the Sermon displayed?",
        answer: "You can see this painting at the <a href=\"/apps/masterpieces/museum/national-galleries-of-scotland\"><strong>National Galleries of Scotland</strong></a> in Edinburgh. It's considered one of the most important works in their collection."
      },
      {
        question: "What biblical story does this painting show?",
        answer: "The work depicts <strong>Jacob wrestling with an angel</strong> from Genesis. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> shows Breton women experiencing a vision of this struggle after hearing it described in a sermon."
      },
      {
        question: "Why is Vision After the Sermon significant?",
        answer: "It marked <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin's</strong></a> break from realistic painting toward <strong>Symbolism</strong>. The flat, bright red background and bold outlines influenced generations of modern artists."
      },
      {
        question: "What style is Vision After the Sermon?",
        answer: "This painting exemplifies <strong>Synthetism</strong> and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>, using simplified forms, non-naturalistic color, and bold outlines inspired by Japanese prints."
      }
    ]
  },

  // === MAGRITTE ===
  {
    slug: 'treachery-of-images',
    description: `<p><a href="/apps/masterpieces/artist/rene-magritte"><strong>René Magritte</strong></a> painted this iconic work to challenge how we think about representation. Below a carefully rendered pipe appears the French text "Ceci n'est pas une pipe" (This is not a pipe). The statement seems absurd until you realize Magritte's point: it truly isn't a pipe, it's a painting of one. You cannot fill it with tobacco or smoke it.</p>
<p>This simple image became one of the most recognized works of <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealism</strong></a>, influencing philosophers, artists, and advertisers for decades. Michel Foucault wrote an entire book analyzing the painting's implications for language and meaning. The clean, almost commercial illustration style makes the conceptual puzzle more jarring.</p>
<p>The painting resides at the Los Angeles County Museum of Art (LACMA), though Magritte created several variations throughout his career.</p>`,
    faqs: [
      {
        question: "What does 'Ceci n'est pas une pipe' mean?",
        answer: "The French phrase translates to \"<strong>This is not a pipe</strong>.\" <a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> made a philosophical point: the image is a representation, not the actual object."
      },
      {
        question: "Where can I see The Treachery of Images?",
        answer: "The most famous version hangs at the <strong>Los Angeles County Museum of Art</strong> (LACMA). Magritte painted several variations exploring the same concept throughout his career."
      },
      {
        question: "Why did Magritte paint this?",
        answer: "Magritte wanted viewers to question the relationship between <strong>images and reality</strong>. The work challenges assumptions about representation that we rarely examine in <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> fashion."
      },
      {
        question: "How big is The Treachery of Images?",
        answer: "The painting measures 63.5 cm × 93.98 cm (25 × 37 inches). Its modest size suits the intimate, thought-provoking nature of <a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte's</strong></a> philosophical puzzle."
      }
    ]
  },
  {
    slug: 'empire-of-light',
    description: `<p><a href="/apps/masterpieces/artist/rene-magritte"><strong>René Magritte</strong></a> created multiple versions of this disorienting scene, which shows a <a href="https://luxurywallart.com/collections/night-art" target="_blank" rel="noopener"><strong>nighttime street</strong></a> beneath a bright daytime sky. The contradiction is subtle enough that viewers often need a moment to register what's wrong. Once noticed, the impossibility becomes deeply unsettling.</p>
<p>The image features a darkened house with glowing windows, silhouetted trees, and a lamppost against a <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue sky</strong></a> filled with fluffy white clouds. Magritte painted at least 27 versions of this concept between 1949 and 1964, each exploring the tension between <strong>day and night</strong> existing simultaneously. The juxtaposition feels dreamlike without depicting anything fantastic.</p>
<p>Various versions reside in museums worldwide, including the Peggy Guggenheim Collection in Venice and the Museum of Modern Art in New York.</p>`,
    faqs: [
      {
        question: "What makes The Empire of Light unusual?",
        answer: "The painting shows <strong>day and night simultaneously</strong>. The street below sits in darkness while the sky above displays bright afternoon clouds. <a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> called this \"a conjunction of familiar things in an unusual order.\""
      },
      {
        question: "How many versions of Empire of Light exist?",
        answer: "<a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> painted at least <strong>27 versions</strong> between 1949 and 1964. Each explores the same paradox with slight variations in composition and detail."
      },
      {
        question: "Where can I see The Empire of Light?",
        answer: "Different versions hang at the <strong>Peggy Guggenheim Collection</strong> in Venice, MoMA in New York, and the Royal Museums of Fine Arts of Belgium. Several remain in private collections."
      },
      {
        question: "What style is The Empire of Light?",
        answer: "The work belongs to <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a>, though Magritte disliked the term. He preferred \"<strong>magic realism</strong>,\" as his impossible scenes use realistic technique rather than abstract distortion."
      }
    ]
  },
  {
    slug: 'golconda-magritte',
    description: `<p><a href="/apps/masterpieces/artist/rene-magritte"><strong>René Magritte</strong></a> named this painting after an ancient Indian city legendary for its diamond mines and wealth. The scene shows dozens of identical men in bowler hats and dark overcoats floating (or falling, or rising) against a <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>pale blue sky</strong></a>, arranged in a regular grid before Belgian townhouses.</p>
<p>The men appear simultaneously like <strong>raindrops</strong> and levitating figures, their conformity both comical and unsettling. Magritte frequently used the bowler-hatted businessman as a symbol of <strong>bourgeois anonymity</strong>, the uniform that erases individuality. Whether the figures are ascending, descending, or suspended remains deliberately ambiguous.</p>
<p>The painting resides at The Menil Collection in Houston, Texas, one of the finest <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> collections in America.</p>`,
    faqs: [
      {
        question: "What does Golconda mean?",
        answer: "<strong>Golconda</strong> was an ancient Indian city famous for its diamond mines. <a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> may have used the name to suggest hidden treasures beneath ordinary appearances."
      },
      {
        question: "Where can I see Golconda?",
        answer: "The painting hangs at <strong>The Menil Collection</strong> in Houston, Texas. This museum holds one of the world's finest collections of <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> art."
      },
      {
        question: "What do the floating men represent?",
        answer: "The identical <strong>bowler-hatted men</strong> symbolize conformity and anonymity in modern society. <a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> used this figure repeatedly to comment on bourgeois identity."
      },
      {
        question: "Are the men falling or floating?",
        answer: "<a href=\"/apps/masterpieces/artist/rene-magritte\"><strong>Magritte</strong></a> left this deliberately <strong>ambiguous</strong>. They could be rising, falling, suspended, or raining down. The mystery is part of the Surrealist effect."
      }
    ]
  },

  // === HOPPER ===
  {
    slug: 'gas-hopper',
    description: `<p><a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a> captured American solitude in this painting of a lone gas station attendant at dusk. Three bright <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> pumps stand before a small station building, while dark woods press in from behind. The road stretches away into gathering darkness, emphasizing the isolation of this rural outpost.</p>
<p>Hopper transformed a mundane roadside stop into a meditation on <strong>American loneliness</strong>. The warm interior light contrasts with the encroaching darkness, a technique he used repeatedly to convey psychological tension. Every element, the empty road, the single figure, the vast sky, contributes to a profound sense of solitary existence on the American highway.</p>
<p>The painting hangs at the <a href="/apps/masterpieces/museum/museum-of-modern-art-moma"><strong>Museum of Modern Art</strong></a> in New York, where it remains one of Hopper's most beloved works.</p>`,
    faqs: [
      {
        question: "Where can I see Gas by Edward Hopper?",
        answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/museum-of-modern-art-moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York City. It's one of the museum's most popular American paintings."
      },
      {
        question: "What is the mood of Gas?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> created a feeling of <strong>isolation and quietude</strong>. The lone attendant, empty road, and encroaching darkness evoke the loneliness of rural America."
      },
      {
        question: "When did Hopper paint Gas?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> completed <strong>Gas in 1940</strong>. He based it on sketches made during driving trips through New England and New York state."
      },
      {
        question: "Why did Hopper paint gas stations?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> was fascinated by the <strong>American roadside</strong> and its symbols of modern transience. Gas stations represented both connection and isolation in mobile American life."
      }
    ]
  },
  {
    slug: 'automat-hopper',
    description: `<p><a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a> painted a young woman sitting alone in an all-night cafeteria, captured in a moment of private reflection. She wears a cloche hat and one glove, nursing a cup of coffee while the darkness outside reflects rows of ceiling lights into infinity. The automat's bright interior becomes a stage of urban loneliness.</p>
<p>Automats were coin-operated cafeterias popular in American cities, offering inexpensive food without human interaction. Hopper transformed this <strong>modern convenience</strong> into a symbol of urban alienation. The woman's downcast eyes and the empty seat across from her suggest solitude that's chosen or forced, we cannot tell.</p>
<p>The painting resides at the Des Moines Art Center in Iowa, a key work in understanding Hopper's exploration of <strong>American isolation</strong>.</p>`,
    faqs: [
      {
        question: "What is an automat?",
        answer: "An <strong>automat</strong> was a coin-operated cafeteria popular in early 20th century America. Customers got food from small glass compartments, requiring no interaction with staff."
      },
      {
        question: "Where can I see Automat?",
        answer: "The painting hangs at the <strong>Des Moines Art Center</strong> in Iowa. It's one of <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper's</strong></a> most reproduced images of urban solitude."
      },
      {
        question: "Who is the woman in Automat?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper's</strong></a> wife Jo modeled for most of his female figures. Her identity in the painting remains <strong>anonymous</strong>, adding to the sense of urban alienation."
      },
      {
        question: "What does Automat mean?",
        answer: "Beyond the literal setting, the painting explores <strong>loneliness in modern city life</strong>. <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> used the impersonal automat to comment on human disconnection."
      }
    ]
  },
  {
    slug: 'morning-sun-hopper',
    description: `<p><a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a> depicted a woman sitting on a bed, bathed in morning light streaming through a large window. She faces the sun with an unreadable expression, her body wrapped in a simple nightgown. The geometric composition emphasizes the contrast between warm <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>sunlight</strong></a> and cool shadow.</p>
<p>The scene captures a private moment of contemplation at day's beginning. Whether the woman feels hope, loneliness, or simple morning stillness remains ambiguous. Hopper's wife Jo, who modeled for the figure, recalled posing in their Washington Square studio. The artist was 70 when he painted this exploration of <strong>light and solitude</strong>.</p>
<p>The painting resides at the Columbus Museum of Art in Ohio, representing the late work of this American master.</p>`,
    faqs: [
      {
        question: "Where can I see Morning Sun?",
        answer: "The painting hangs at the <strong>Columbus Museum of Art</strong> in Ohio. It's one of <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper's</strong></a> most admired late works."
      },
      {
        question: "Who modeled for Morning Sun?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper's</strong></a> wife <strong>Jo</strong> posed for this painting, as she did for virtually all his female figures throughout their marriage."
      },
      {
        question: "What is the mood of Morning Sun?",
        answer: "The painting evokes <strong>quiet contemplation</strong>. The woman's expression and posture suggest introspection, though whether hopeful or melancholic remains open to interpretation."
      },
      {
        question: "When was Morning Sun painted?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> completed <strong>Morning Sun in 1952</strong>, when he was 70 years old. It shows his continued mastery of light and psychological tension."
      }
    ]
  },
  {
    slug: 'office-small-city-hopper',
    description: `<p><a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a> looked through an office window at a solitary man working at his desk, surrounded by the blank walls of neighboring buildings. The figure sits in shirt sleeves, absorbed in paperwork while sunlight floods the room through massive windows. Urban architecture frames him like a fish in an aquarium.</p>
<p>The painting captures <strong>white-collar isolation</strong> in mid-century America. Despite being surrounded by a bustling city (the buildings suggest lower Manhattan), the office worker exists in profound solitude. Hopper's geometric composition and stark lighting transform ordinary workplace architecture into a meditation on modern work life.</p>
<p>The painting hangs at The Metropolitan Museum of Art in New York, part of their significant Hopper holdings.</p>`,
    faqs: [
      {
        question: "Where can I see Office in a Small City?",
        answer: "The painting hangs at <strong>The Metropolitan Museum of Art</strong> in New York. It's part of their strong collection of <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> works."
      },
      {
        question: "What does Office in a Small City show?",
        answer: "A <strong>lone office worker</strong> sits at his desk surrounded by blank building walls. <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> captured the isolation of modern work despite being physically surrounded by a city."
      },
      {
        question: "Why is this painting significant?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> explored <strong>urban alienation</strong> through workplace settings. The geometric composition and stark light make the ordinary scene feel profound."
      },
      {
        question: "When did Hopper paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a> completed <strong>Office in a Small City in 1953</strong>. Like many of his works, it examines solitude within crowded urban environments."
      }
    ]
  },

  // === DALÍ ===
  {
    slug: 'swans-reflecting-elephants',
    description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Salvador Dalí</strong></a> created one of his most clever visual puzzles in this painting. White swans on a glassy lake are positioned so their reflections, combined with barren trees, form the shapes of <strong>elephants</strong>. The trick works equally well whether you focus on the surface or the reflection.</p>
<p>Dalí used his "paranoiac-critical method" to create these double images, training the eye to see multiple realities simultaneously. The desolate <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> features his signature melting, decayed forms alongside the optical illusion. The painting belongs to his most productive <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> period of the 1930s.</p>
<p>This work remains in a private collection, though it frequently appears in Dalí retrospectives worldwide.</p>`,
    faqs: [
      {
        question: "How does the swan-elephant illusion work?",
        answer: "The <strong>swans' reflections</strong> combine with reflected tree trunks to form elephant shapes. <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> carefully positioned elements so the illusion works from multiple viewpoints."
      },
      {
        question: "Where can I see Swans Reflecting Elephants?",
        answer: "The painting is in a <strong>private collection</strong>. It occasionally appears in <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> museum exhibitions and retrospectives."
      },
      {
        question: "What is Dalí's paranoiac-critical method?",
        answer: "<a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> developed this technique to create <strong>double images</strong>. He trained his mind to see multiple interpretations simultaneously, then painted both into single compositions."
      },
      {
        question: "When was Swans Reflecting Elephants painted?",
        answer: "<a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> created this work in <strong>1937</strong>, during his most innovative Surrealist period. It demonstrates his mastery of optical illusions."
      }
    ]
  },
  {
    slug: 'burning-giraffe',
    description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Salvador Dalí</strong></a> painted this disturbing vision of feminine figures with open drawer-like compartments in their bodies, set against a twilight sky where a <strong>giraffe burns</strong> in the distance. The women support themselves with crutch-like props, their forms simultaneously classical and grotesque.</p>
<p>Dalí described the <a href="https://luxurywallart.com/collections/orange-art" target="_blank" rel="noopener"><strong>burning giraffe</strong></a> as a "cosmic apocalyptic monster," painted shortly before World War II began. The drawer motif, influenced by Freud's theories, suggests the <strong>hidden compartments</strong> of the subconscious mind. The elongated figures reference classical sculpture while subverting it entirely.</p>
<p>The painting resides at Kunstmuseum Basel in Switzerland, part of their significant <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> holdings.</p>`,
    faqs: [
      {
        question: "What does the burning giraffe symbolize?",
        answer: "<a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> called it a \"<strong>cosmic apocalyptic monster</strong>.\" Painted in 1937, it's often interpreted as a premonition of the coming world war."
      },
      {
        question: "What do the drawers represent?",
        answer: "Influenced by <strong>Freud</strong>, Dalí used drawers to symbolize the hidden compartments of the <a href=\"/apps/masterpieces/movement/surrealism\"><strong>subconscious mind</strong></a>. Opening them reveals secrets buried within."
      },
      {
        question: "Where can I see The Burning Giraffe?",
        answer: "The painting hangs at <strong>Kunstmuseum Basel</strong> in Switzerland. It's one of <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí's</strong></a> most recognizable Surrealist images."
      },
      {
        question: "How big is The Burning Giraffe?",
        answer: "The painting is relatively small at 35 cm × 27 cm (14 × 11 inches). <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> painted it on panel, giving it a jewel-like intensity."
      }
    ]
  },
  {
    slug: 'soft-construction-boiled-beans',
    description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Salvador Dalí</strong></a> created this horrifying image six months before the Spanish Civil War began, later subtitling it "Premonition of Civil War." A grotesque figure tears itself apart against a turbulent sky, limbs contorted in impossible positions. Scattered <strong>boiled beans</strong> appear throughout the composition.</p>
<p>The self-destructing body represents Spain consuming itself in <strong>fratricidal conflict</strong>. Dalí's technical precision makes the impossible anatomy disturbingly believable. The beans add an absurdist element, though Dalí claimed they represented both peasant food and the irrationality of war. The work predates Picasso's more famous Guernica response to the same conflict.</p>
<p>The painting resides at the Philadelphia Museum of Art, a major work in their <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> collection.</p>`,
    faqs: [
      {
        question: "Why is it called Soft Construction with Boiled Beans?",
        answer: "<a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> scattered <strong>boiled beans</strong> throughout to represent peasant food and the absurdity of war. The \"soft construction\" refers to the distorted flesh of the figure."
      },
      {
        question: "Where can I see this painting?",
        answer: "The painting hangs at the <strong>Philadelphia Museum of Art</strong>. It's one of <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí's</strong></a> most politically charged works."
      },
      {
        question: "What does this painting depict?",
        answer: "A monstrous figure <strong>tears itself apart</strong>, symbolizing Spain's impending civil war. <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> painted it six months before the conflict began in 1936."
      },
      {
        question: "How does this compare to Guernica?",
        answer: "Both address the <strong>Spanish Civil War</strong>, but <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí's</strong></a> work came first. While Picasso responded to a specific event, Dalí claimed to have sensed the coming catastrophe."
      }
    ]
  },

  // === SEURAT ===
  {
    slug: 'circus-sideshow-seurat',
    description: `<p><a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a> applied his <strong>pointillist technique</strong> to a nighttime scene of a traveling circus parade. Musicians and performers stand on a raised platform before a crowd, their forms built entirely from tiny dots of pure color. Gas flames illuminate the scene, creating an eerie atmosphere of <a href="https://luxurywallart.com/collections/yellow-paintings" target="_blank" rel="noopener"><strong>artificial light</strong></a>.</p>
<p>This was Seurat's first nocturnal painting and his first to focus on popular entertainment. The rigid, almost frozen poses of the performers contrast with what should be a lively spectacle. The painting demonstrates how <strong>divisionist color theory</strong> could capture artificial lighting, with carefully calculated complementary colors creating optical vibrancy.</p>
<p>The painting hangs at The Metropolitan Museum of Art in New York, a key work in understanding Seurat's evolution.</p>`,
    faqs: [
      {
        question: "Where can I see Circus Sideshow?",
        answer: "The painting hangs at <strong>The Metropolitan Museum of Art</strong> in New York. It's one of <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat's</strong></a> most important late works."
      },
      {
        question: "What is a circus sideshow?",
        answer: "A <strong>sideshow</strong> was a parade of performers outside a circus tent to attract customers. <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a> depicted this free preview spectacle in his pointillist style."
      },
      {
        question: "What technique did Seurat use?",
        answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a> used <strong>pointillism</strong>, building the image from thousands of tiny color dots. This was his first nighttime scene using the technique."
      },
      {
        question: "When did Seurat paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a> completed <strong>Circus Sideshow in 1888</strong>. It marked his turn toward scenes of Parisian popular entertainment."
      }
    ]
  },
  {
    slug: 'the-models-seurat',
    description: `<p><a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a> painted three models (or perhaps one model in three poses) in various states of undress within his studio. In the background hangs his monumental "A Sunday Afternoon on La Grande Jatte," creating a painting-within-a-painting that contrasts the <strong>clothed leisure</strong> of the park with the studio's intimate nudity.</p>
<p>The work represents Seurat's response to critics who claimed his <strong>pointillist technique</strong> couldn't handle the subtleties of human flesh. The figures demonstrate remarkable tonal gradation achieved entirely through tiny dots of color. The classical poses reference academic tradition while the technique remained radically modern.</p>
<p>The painting resides at the Barnes Foundation in Philadelphia, alongside their extraordinary collection of <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> works.</p>`,
    faqs: [
      {
        question: "Where can I see The Models?",
        answer: "The large version hangs at the <strong>Barnes Foundation</strong> in Philadelphia. A smaller version exists at the Berggruen Museum in Berlin."
      },
      {
        question: "What painting appears in the background?",
        answer: "Seurat included his own <strong>A Sunday Afternoon on La Grande Jatte</strong> hanging on the studio wall. It creates a dialogue between the dressed park-goers and undressed models."
      },
      {
        question: "Why did Seurat paint nude models?",
        answer: "Critics claimed <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat's</strong></a> <strong>pointillist technique</strong> couldn't capture flesh tones. He painted The Models to prove his method worked for the human body."
      },
      {
        question: "How big is The Models?",
        answer: "The main version measures 200 cm × 250 cm (79 × 98 inches). It took <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a> nearly two years to complete using his painstaking dot technique."
      }
    ]
  },
];

async function main() {
  console.log('=== Updating Masterpieces Batch 3 with Descriptions ===\n');

  let updated = 0;
  let skipped = 0;

  for (const artwork of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: artwork.slug }
    });

    if (!existing) {
      console.log(`Skipped (not found): ${artwork.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${existing.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
