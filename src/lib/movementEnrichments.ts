/**
 * Movement enrichments with rich HTML descriptions and FAQs
 * Provides enhanced content for major art movements for SEO
 */

export interface MovementFAQ {
  question: string;
  answer: string;
}

export interface MovementEnrichment {
  slug: string;
  descriptionHtml: string;
  whatToLookFor: string[];
  faqs: MovementFAQ[];
}

export const MOVEMENT_ENRICHMENTS: Record<string, MovementEnrichment> = {
  'impressionism': {
    slug: 'impressionism',
    descriptionHtml: `<p><strong>Impressionism</strong> emerged in 1860s Paris when a group of artists rejected the rigid rules of the French Academy. Instead of working in studios, they painted outdoors (<strong>plein air</strong>), capturing how light fell on haystacks, water lilies, and Parisian boulevards at specific moments. <a href="/artist/claude-monet"><strong>Claude Monet</strong></a>, <a href="/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a>, and <a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> became the movement's leading figures.</p>

<p>The name "Impressionism" was coined as an insult. When <a href="/artist/claude-monet"><strong>Monet</strong></a> exhibited <em>Impression, Sunrise</em> in 1874, critics mocked the loose brushwork and unfinished appearance. But what critics dismissed as sloppiness was actually revolutionary technique: visible brushstrokes, pure colors placed side by side, and shadows rendered in <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue and purple</strong></a> rather than brown or black.</p>

<p>The Impressionists painted modern life: cafes, railway stations, ballet dancers, boating parties. They captured movement and atmosphere rather than static poses. <a href="/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> and <a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> brought domestic scenes and women's perspectives to the movement. Today, Impressionist paintings rank among the world's most beloved and valuable artworks, displayed in major museums from the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> to the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    whatToLookFor: [
      'Visible, distinct brushstrokes you can see from close up',
      'Outdoor scenes with dappled sunlight filtering through trees',
      'Shadows painted in blues and purples, never brown or black',
      'Everyday subjects: cafes, boating parties, ballet rehearsals, train stations',
      'Soft, blurred edges rather than sharp outlines',
      'Colors placed side by side rather than blended on the palette',
      'Sense of a specific moment in time, a fleeting light condition',
      'Modern Parisian life: boulevards, gardens, leisure activities'
    ],
    faqs: [
      {
        question: "What is Impressionism?",
        answer: "<strong>Impressionism</strong> is a 19th-century art movement that originated in Paris. Artists like <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> and <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> rejected academic traditions, painting outdoors to capture fleeting effects of light with visible brushstrokes and pure, unmixed colors."
      },
      {
        question: "Who were the main Impressionist artists?",
        answer: "The core Impressionists include <a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a>, <a href=\"/artist/pierre-auguste-renoir\"><strong>Pierre-Auguste Renoir</strong></a>, <a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a>, <a href=\"/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a>, <a href=\"/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a>, and <a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a>. Alfred Sisley and Gustave Caillebotte were also key members."
      },
      {
        question: "Why is it called Impressionism?",
        answer: "The name came from <a href=\"/artist/claude-monet\"><strong>Monet's</strong></a> 1872 painting <em>Impression, Sunrise</em>. Critic Louis Leroy used \"Impressionism\" mockingly to describe the loose, sketch-like style. The artists embraced the term, and it became one of art history's most famous movement names."
      },
      {
        question: "Where can I see Impressionist paintings?",
        answer: "The <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris has the world's largest Impressionist collection. The <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> holds famous Monets and Renoirs. The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London and <a href=\"/museum/metropolitan-museum\"><strong>Metropolitan Museum</strong></a> New York also have major holdings."
      },
      {
        question: "What techniques define Impressionist painting?",
        answer: "<strong>Impressionist techniques</strong> include visible brushstrokes, pure colors applied side by side (optical mixing), <strong>plein air</strong> (outdoor) painting, and capturing specific light conditions. Artists avoided black, using blues and purples for shadows instead."
      }
    ]
  },

  'renaissance': {
    slug: 'renaissance',
    descriptionHtml: `<p>The <strong>Renaissance</strong> transformed European art from roughly 1400 to 1600, centered first in Florence and later spreading to Rome, Venice, and beyond. Artists rediscovered classical Greek and Roman principles, developing revolutionary techniques like <strong>linear perspective</strong> and anatomical accuracy. <a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a>, <a href="/artist/michelangelo"><strong>Michelangelo</strong></a>, and <a href="/artist/raphael"><strong>Raphael</strong></a> became the movement's towering figures.</p>

<p>Florence's Medici family bankrolled much of this explosion. Wealthy patrons competed for the best artists, who became celebrities for the first time in Western history. <a href="/artist/sandro-botticelli"><strong>Botticelli's</strong></a> graceful mythological scenes, <a href="/artist/titian"><strong>Titian's</strong></a> rich Venetian colors, and <a href="/artist/leonardo-da-vinci"><strong>Leonardo's</strong></a> <strong>sfumato</strong> technique (soft, smoky transitions between tones) defined the era. Oil painting, imported from Northern Europe, allowed for luminous glazes impossible with tempera.</p>

<p>The Renaissance wasn't just about technique. <strong>Humanism</strong> placed mankind at the center of inquiry, and <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> flourished alongside religious subjects. Artists investigated anatomy by dissecting corpses, studied mathematics for perspective, and viewed painting as an intellectual pursuit rather than mere craft. Works from this period hang in the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, the <a href="/museum/louvre"><strong>Louvre</strong></a>, and the Vatican Museums.</p>`,
    whatToLookFor: [
      'Converging lines in floors, ceilings, and architecture (linear perspective)',
      'Realistic human anatomy with defined muscles and natural poses',
      'Soft, hazy edges between light and shadow (sfumato)',
      'Classical architecture: columns, arches, Roman-style buildings',
      'Figures with real weight standing firmly on the ground',
      'Triangular compositions creating balance and stability',
      'Rich, glowing colors from layered oil glazes',
      'Both religious subjects and classical mythology side by side'
    ],
    faqs: [
      {
        question: "What was the Renaissance?",
        answer: "The <strong>Renaissance</strong> (1400-1600) was a cultural rebirth centered in Italy where artists rediscovered classical ideals. Masters like <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a> and <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> pioneered linear perspective, anatomical accuracy, and oil painting techniques that defined Western art."
      },
      {
        question: "Who are the greatest Renaissance artists?",
        answer: "The \"Big Three\" are <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>, <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a>, and <a href=\"/artist/raphael\"><strong>Raphael</strong></a>. Other masters include <a href=\"/artist/sandro-botticelli\"><strong>Sandro Botticelli</strong></a>, <a href=\"/artist/titian\"><strong>Titian</strong></a>, Piero della Francesca, and <a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> in Northern Europe."
      },
      {
        question: "What is linear perspective?",
        answer: "<strong>Linear perspective</strong> is a mathematical system where parallel lines converge at a vanishing point, creating realistic depth on flat surfaces. Filippo Brunelleschi demonstrated this around 1415, and it became fundamental to all Renaissance painting and architecture."
      },
      {
        question: "Where can I see Renaissance art?",
        answer: "The <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence holds Botticelli's <em>Birth of Venus</em> and works by Leonardo. The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> displays the <em>Mona Lisa</em>. Michelangelo's Sistine Chapel ceiling remains in Vatican City. The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> has outstanding Northern Renaissance works."
      },
      {
        question: "What made the Renaissance different from Medieval art?",
        answer: "<strong>Medieval art</strong> emphasized religious symbolism and flat, stylized figures. The <strong>Renaissance</strong> introduced naturalistic anatomy, realistic space through perspective, and individual artistic genius. Artists signed their work and became celebrated intellectuals, not anonymous craftsmen."
      }
    ]
  },

  'baroque': {
    slug: 'baroque',
    descriptionHtml: `<p>If <a href="/era/renaissance"><strong>Renaissance</strong></a> art sought harmony and balance, <strong>Baroque art</strong> aimed to overwhelm you. Emerging around 1600, the Baroque style deployed dramatic lighting, dynamic compositions, and emotional intensity to move viewers. <a href="/artist/caravaggio"><strong>Caravaggio</strong></a> pioneered <strong>tenebrism</strong>, an extreme chiaroscuro where figures emerge from pitch darkness into theatrical spotlight.</p>

<p>The Catholic Church embraced Baroque as counter-Reformation propaganda. Paintings needed to make viewers <em>feel</em> the ecstasy of saints and terror of martyrdom. <a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> embodied this grandeur with monumental canvases of fleshy figures in swirling motion. Meanwhile, Protestant Holland developed its own Baroque: <a href="/artist/rembrandt"><strong>Rembrandt</strong></a> explored human psychology through light, while <a href="/artist/johannes-vermeer"><strong>Vermeer</strong></a> captured quiet domestic moments with supernatural luminosity.</p>

<p>Spain produced <a href="/artist/diego-velazquez"><strong>Diego Velázquez</strong></a>, court painter to Philip IV, whose <em>Las Meninas</em> remains one of art history's most analyzed paintings. The <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> generated more paintings than any previous era, including <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, still lifes, and genre scenes for merchant-class homes. Today, Baroque masterpieces fill the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, <a href="/museum/prado"><strong>Prado</strong></a>, and Rome's churches.</p>`,
    whatToLookFor: [
      'Extreme contrast: bright figures emerging from pitch-black backgrounds',
      'Diagonal compositions creating dynamic movement and tension',
      'Theatrical gestures and intense emotional expressions',
      'Rich reds, golds, and deep velvet shadows',
      'Figures that seem to push out of the picture toward you',
      'Swirling drapery and dynamic, twisting poses',
      'Religious ecstasy or martyrdom depicted with visceral intensity',
      'Dutch works: soft window light, quiet domestic interiors, still lifes'
    ],
    faqs: [
      {
        question: "What defines Baroque art?",
        answer: "<strong>Baroque art</strong> (1600-1750) features dramatic lighting, emotional intensity, and theatrical compositions. <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> pioneered <strong>tenebrism</strong>, where figures emerge from deep shadows. The style served Catholic counter-Reformation goals: making viewers <em>feel</em> religious narratives viscerally."
      },
      {
        question: "Who are the major Baroque artists?",
        answer: "Key masters include <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> (dramatic lighting), <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> (psychological depth), <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> (luminous interiors), <a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> (monumental grandeur), and <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> (royal portraiture)."
      },
      {
        question: "What is tenebrism?",
        answer: "<strong>Tenebrism</strong> is an extreme form of chiaroscuro where most of the canvas remains in deep shadow while the main subject is illuminated by a single light source. <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> developed this technique, which spread throughout Europe via his followers, the \"Caravaggisti.\""
      },
      {
        question: "Where can I see Baroque paintings?",
        answer: "The <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> holds Rembrandt's <em>Night Watch</em>. The <a href=\"/museum/prado\"><strong>Prado</strong></a> displays Velázquez's <em>Las Meninas</em>. Caravaggio's works are scattered across Rome's churches. The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> and <a href=\"/museum/metropolitan-museum\"><strong>Metropolitan Museum</strong></a> have extensive collections."
      },
      {
        question: "How is Baroque different from Renaissance art?",
        answer: "<strong>Renaissance</strong> art emphasized balance, harmony, and idealized beauty. <strong>Baroque</strong> art prioritized drama, emotion, and movement. Renaissance compositions are calm and centered; Baroque compositions use diagonals, deep shadows, and theatrical gestures to create psychological tension."
      }
    ]
  },

  'surrealism': {
    slug: 'surrealism',
    descriptionHtml: `<p><strong>Surrealism</strong> emerged in 1920s Paris as artists explored the unconscious mind, dreams, and irrational thought. Founded by André Breton, the movement drew heavily from Sigmund Freud's psychoanalytic theories. <a href="/artist/salvador-dali"><strong>Salvador Dalí's</strong></a> melting clocks, <a href="/artist/rene-magritte"><strong>René Magritte's</strong></a> impossible images, and <a href="/artist/max-ernst"><strong>Max Ernst's</strong></a> strange landscapes became icons of the style.</p>

<p>Surrealists used techniques designed to bypass rational thought: automatic drawing, dream journals, and the "exquisite corpse" game where artists collaborated without seeing each other's work. <a href="/artist/salvador-dali"><strong>Dalí</strong></a> called his approach the "paranoiac-critical method," deliberately inducing hallucinatory states. <a href="/artist/joan-miro"><strong>Joan Miró</strong></a> developed biomorphic forms that seemed to float between abstraction and representation.</p>

<p>The movement attracted writers, filmmakers, and photographers alongside painters. <a href="/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> incorporated surrealist elements into deeply personal self-portraits. <a href="https://luxurywallart.com/collections/surrealism-art" target="_blank" rel="noopener"><strong>Surrealist art</strong></a> continues to influence advertising, film, and contemporary art. Major collections exist at the <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and the Dalí Theatre-Museum in Figueres, Spain.</p>`,
    whatToLookFor: [
      'Dreamlike or nightmarish imagery that defies logic',
      'Impossible combinations: melting clocks, floating objects, hybrid creatures',
      'Realistic painting technique depicting unreal subjects',
      'Vast, empty landscapes with strange objects or figures',
      'Hidden faces or double images within the composition',
      'Everyday objects in bizarre contexts (Magritte\'s bowler hats, pipes)',
      'Biomorphic shapes that suggest living organisms',
      'Symbolic imagery from dreams, Freudian psychology, or the unconscious'
    ],
    faqs: [
      {
        question: "What is Surrealism?",
        answer: "<strong>Surrealism</strong> (1920-1960) was a movement exploring dreams, the unconscious, and irrational thought. Artists like <a href=\"/artist/salvador-dali\"><strong>Salvador Dalí</strong></a> and <a href=\"/artist/rene-magritte\"><strong>René Magritte</strong></a> created dreamlike imagery influenced by Freudian psychoanalysis, disrupting logic to access deeper truths."
      },
      {
        question: "Who are famous Surrealist artists?",
        answer: "Major Surrealists include <a href=\"/artist/salvador-dali\"><strong>Salvador Dalí</strong></a> (melting clocks), <a href=\"/artist/rene-magritte\"><strong>René Magritte</strong></a> (impossible scenes), <a href=\"/artist/max-ernst\"><strong>Max Ernst</strong></a> (collage techniques), <a href=\"/artist/joan-miro\"><strong>Joan Miró</strong></a> (biomorphic abstraction), and <a href=\"/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a> (symbolic self-portraits)."
      },
      {
        question: "What techniques did Surrealists use?",
        answer: "Surrealists employed <strong>automatism</strong> (creating without conscious control), dream journaling, the \"exquisite corpse\" collaborative game, and induced hallucinatory states. <a href=\"/artist/salvador-dali\"><strong>Dalí's</strong></a> \"paranoiac-critical method\" deliberately blurred reality and imagination."
      },
      {
        question: "Where can I see Surrealist art?",
        answer: "The <a href=\"/museum/moma\"><strong>MoMA</strong></a> New York has Dalí's <em>Persistence of Memory</em>. The <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> holds major Magritte works. The Dalí Theatre-Museum in Figueres, Spain, contains the artist's largest collection. The <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> Paris has extensive Surrealist holdings."
      },
      {
        question: "What inspired Surrealism?",
        answer: "<strong>Surrealism</strong> drew from <strong>Sigmund Freud's</strong> theories about dreams and the unconscious mind. The horrors of World War I also pushed artists to reject rational thought. The earlier <a href=\"/movement/expressionism\"><strong>Dada</strong></a> movement's anti-art stance directly influenced Surrealist rebellion against convention."
      }
    ]
  },

  'cubism': {
    slug: 'cubism',
    descriptionHtml: `<p><strong>Cubism</strong> shattered centuries of Western pictorial tradition. In 1907, <a href="/artist/pablo-picasso"><strong>Pablo Picasso's</strong></a> <em>Les Demoiselles d'Avignon</em> fragmented the human figure into angular planes, influenced by African masks and Iberian sculpture. Working alongside <a href="/artist/georges-braque"><strong>Georges Braque</strong></a>, Picasso developed a visual language that showed objects from multiple viewpoints simultaneously.</p>

<p><strong>Analytical Cubism</strong> (1909-1912) broke subjects into geometric facets, nearly dissolving recognizable imagery into abstract grids of <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown</strong></a> and gray. <strong>Synthetic Cubism</strong> (1912-1914) reversed course, building images from flat shapes and incorporating collage elements like newspaper and wallpaper. <a href="/artist/juan-gris"><strong>Juan Gris</strong></a> and Fernand Léger extended the style with brighter colors and distinct personal approaches.</p>

<p>Cubism's influence extended far beyond painting. It transformed sculpture, architecture, and graphic design. The movement demonstrated that art didn't need to mimic how things look, opening the door to <a href="/era/modern"><strong>Modern art's</strong></a> endless experimentation. Today, Cubist masterpieces anchor collections at the <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="/museum/centre-pompidou"><strong>Centre Pompidou</strong></a>, and the <a href="/museum/reina-sofia"><strong>Reina Sofía</strong></a>.</p>`,
    whatToLookFor: [
      'Fragmented forms broken into geometric facets and planes',
      'Objects shown from multiple viewpoints simultaneously',
      'Muted palette of browns, grays, and ochres (Analytical Cubism)',
      'Flattened space with no traditional perspective',
      'Recognizable objects (guitars, bottles, faces) reduced to shapes',
      'Collage elements: newspaper clippings, wallpaper, sheet music',
      'Bold outlines defining overlapping planes',
      'Brighter colors and clearer forms (Synthetic Cubism)'
    ],
    faqs: [
      {
        question: "What is Cubism?",
        answer: "<strong>Cubism</strong> (1907-1920) fragmented objects into geometric planes, showing multiple viewpoints simultaneously. <a href=\"/artist/pablo-picasso\"><strong>Pablo Picasso</strong></a> and <a href=\"/artist/georges-braque\"><strong>Georges Braque</strong></a> pioneered this revolutionary approach, which abandoned traditional perspective and transformed 20th-century art."
      },
      {
        question: "Who invented Cubism?",
        answer: "<a href=\"/artist/pablo-picasso\"><strong>Pablo Picasso</strong></a> and <a href=\"/artist/georges-braque\"><strong>Georges Braque</strong></a> developed Cubism together between 1907-1914. Picasso's <em>Les Demoiselles d'Avignon</em> (1907) is considered the first Cubist painting. <a href=\"/artist/juan-gris\"><strong>Juan Gris</strong></a> and Fernand Léger became major practitioners."
      },
      {
        question: "What's the difference between Analytical and Synthetic Cubism?",
        answer: "<strong>Analytical Cubism</strong> (1909-1912) broke subjects into small geometric facets, using muted browns and grays. <strong>Synthetic Cubism</strong> (1912+) reversed this, building images from larger flat shapes, adding brighter colors, and incorporating collage elements like newspaper clippings."
      },
      {
        question: "Where can I see Cubist paintings?",
        answer: "The <a href=\"/museum/moma\"><strong>MoMA</strong></a> New York has Picasso's <em>Demoiselles d'Avignon</em>. The <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> Paris holds extensive Cubist works. Picasso's <em>Guernica</em> is at the <a href=\"/museum/reina-sofia\"><strong>Reina Sofía</strong></a> in Madrid."
      },
      {
        question: "Why was Cubism important?",
        answer: "<strong>Cubism</strong> proved that art doesn't need to mimic visual reality. By showing objects from multiple angles simultaneously, Picasso and Braque freed artists to experiment with form, opening the door to <a href=\"/movement/abstract-expressionism\"><strong>abstraction</strong></a> and virtually every Modern art movement that followed."
      }
    ]
  },

  'abstract-expressionism': {
    slug: 'abstract-expressionism',
    descriptionHtml: `<p><strong>Abstract Expressionism</strong> was the first American art movement to achieve international dominance. Emerging in New York after World War II, artists like <a href="/artist/jackson-pollock"><strong>Jackson Pollock</strong></a>, <a href="/artist/mark-rothko"><strong>Mark Rothko</strong></a>, and <a href="/artist/willem-de-kooning"><strong>Willem de Kooning</strong></a> created monumental canvases that emphasized gesture, emotion, and the act of painting itself.</p>

<p>Two main approaches defined the movement. <strong>Action painters</strong> like <a href="/artist/jackson-pollock"><strong>Pollock</strong></a> and <a href="/artist/franz-kline"><strong>Franz Kline</strong></a> used energetic, physical gestures, dripping and splashing paint. <strong>Color Field painters</strong> like <a href="/artist/mark-rothko"><strong>Rothko</strong></a> and Barnett Newman created vast expanses of luminous <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>color</strong></a> designed to envelop viewers in contemplative experience. Both rejected European tradition for something raw and American.</p>

<p>The movement flourished in a specific milieu: the Cedar Tavern bar, the Club for artists' discussions, and galleries on Manhattan's 10th Street. Pollock's drip paintings and Rothko's hovering rectangles became icons of postwar American culture. Major collections exist at the <a href="/museum/moma"><strong>MoMA</strong></a>, the <a href="/museum/whitney-museum"><strong>Whitney</strong></a>, and the National Gallery of Art in Washington.</p>`,
    whatToLookFor: [
      'Very large canvases meant to engulf and overwhelm the viewer',
      'No recognizable subject matter, pure abstraction',
      'Drips, splatters, and poured paint (Pollock)',
      'Bold, sweeping brushstrokes showing physical gesture',
      'Hovering rectangles of luminous color (Rothko)',
      'Black and white compositions with aggressive marks (Kline)',
      'Raw, unfinished edges and exposed canvas',
      'Sense of spontaneous, emotional intensity in the paint application'
    ],
    faqs: [
      {
        question: "What is Abstract Expressionism?",
        answer: "<strong>Abstract Expressionism</strong> (1940s-1960s) was the first major American art movement. Artists like <a href=\"/artist/jackson-pollock\"><strong>Jackson Pollock</strong></a> and <a href=\"/artist/mark-rothko\"><strong>Mark Rothko</strong></a> created large-scale abstract works emphasizing gesture, emotion, and the physical act of painting."
      },
      {
        question: "Who were the main Abstract Expressionists?",
        answer: "Key figures include <a href=\"/artist/jackson-pollock\"><strong>Jackson Pollock</strong></a> (drip paintings), <a href=\"/artist/mark-rothko\"><strong>Mark Rothko</strong></a> (color fields), <a href=\"/artist/willem-de-kooning\"><strong>Willem de Kooning</strong></a>, <a href=\"/artist/franz-kline\"><strong>Franz Kline</strong></a> (bold black gestures), Barnett Newman, and <a href=\"/artist/clyfford-still\"><strong>Clyfford Still</strong></a>."
      },
      {
        question: "What's the difference between Action Painting and Color Field?",
        answer: "<strong>Action Painting</strong> emphasizes energetic gestures, with <a href=\"/artist/jackson-pollock\"><strong>Pollock</strong></a> dripping paint and <a href=\"/artist/franz-kline\"><strong>Kline</strong></a> using bold brushstrokes. <strong>Color Field painting</strong> features large areas of flat color designed for contemplation, as in <a href=\"/artist/mark-rothko\"><strong>Rothko's</strong></a> hovering rectangles."
      },
      {
        question: "Where can I see Abstract Expressionist art?",
        answer: "The <a href=\"/museum/moma\"><strong>MoMA</strong></a> New York has major Pollock and Rothko works. The <a href=\"/museum/whitney-museum\"><strong>Whitney Museum</strong></a> focuses on American art including Abstract Expressionism. The National Gallery of Art in Washington and <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> London also have important collections."
      },
      {
        question: "Why was Abstract Expressionism significant?",
        answer: "<strong>Abstract Expressionism</strong> shifted the art world's center from Paris to New York. It proved American art could lead internationally and opened doors for <a href=\"/movement/pop-art\"><strong>Pop Art</strong></a>, Minimalism, and Conceptual art. The movement established the heroic, large-scale abstract canvas as a serious art form."
      }
    ]
  },

  'pop-art': {
    slug: 'pop-art',
    descriptionHtml: `<p><strong>Pop Art</strong> exploded in the late 1950s as artists embraced the commercial imagery that Abstract Expressionists had rejected. In Britain, Richard Hamilton and Eduardo Paolozzi incorporated advertisements and magazine clippings. In New York, <a href="/artist/andy-warhol"><strong>Andy Warhol</strong></a>, <a href="/artist/roy-lichtenstein"><strong>Roy Lichtenstein</strong></a>, and <a href="/artist/jasper-johns"><strong>Jasper Johns</strong></a> transformed soup cans, comic strips, and flags into fine art.</p>

<p><a href="/artist/andy-warhol"><strong>Warhol's</strong></a> silkscreen prints of Campbell's soup and Marilyn Monroe blurred the line between art and advertising. His Factory studio became a hub for celebrities, musicians, and countercultural figures. <a href="/artist/roy-lichtenstein"><strong>Lichtenstein</strong></a> enlarged comic-book panels to monumental scale, complete with Ben-Day dots. Claes Oldenburg created oversized sculptures of everyday objects, from hamburgers to clothespins.</p>

<p>Pop Art questioned what could be art and who got to decide. Was a Brillo box art if Warhol made it? The movement's ironic embrace of <a href="https://luxurywallart.com/collections/pop-culture" target="_blank" rel="noopener"><strong>pop culture</strong></a> and consumerism anticipated our image-saturated digital age. Major collections exist at the <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and the Andy Warhol Museum in Pittsburgh.</p>`,
    whatToLookFor: [
      'Commercial imagery: soup cans, celebrities, brand logos, advertisements',
      'Ben-Day dots mimicking cheap comic-book printing (Lichtenstein)',
      'Repeated images in grid patterns (Warhol\'s Marilyn, Elvis)',
      'Bold, flat colors from commercial printing processes',
      'Everyday objects elevated to fine art: flags, targets, Brillo boxes',
      'Silkscreen printing rather than traditional painting',
      'Ironic or deadpan presentation of consumer culture',
      'Comic-book speech bubbles and bold outlines'
    ],
    faqs: [
      {
        question: "What is Pop Art?",
        answer: "<strong>Pop Art</strong> (1955-1970) embraced commercial and popular culture imagery as fine art. Artists like <a href=\"/artist/andy-warhol\"><strong>Andy Warhol</strong></a> and <a href=\"/artist/roy-lichtenstein\"><strong>Roy Lichtenstein</strong></a> elevated soup cans, celebrities, and comic strips to museum walls, challenging distinctions between high and low culture."
      },
      {
        question: "Who are the most famous Pop artists?",
        answer: "Leading Pop artists include <a href=\"/artist/andy-warhol\"><strong>Andy Warhol</strong></a> (Campbell's soup, Marilyn), <a href=\"/artist/roy-lichtenstein\"><strong>Roy Lichtenstein</strong></a> (comic-book paintings), <a href=\"/artist/jasper-johns\"><strong>Jasper Johns</strong></a> (flags, targets), Claes Oldenburg (oversized objects), and James Rosenquist (billboard imagery)."
      },
      {
        question: "What was Warhol's Factory?",
        answer: "<a href=\"/artist/andy-warhol\"><strong>Andy Warhol's</strong></a> <strong>Factory</strong> was his Manhattan studio (1962-1984) where he produced art, films, and music. Covered in silver foil and filled with assistants and celebrities, it became a legendary gathering place for artists, musicians, and countercultural figures."
      },
      {
        question: "Where can I see Pop Art?",
        answer: "The <a href=\"/museum/moma\"><strong>MoMA</strong></a> New York has major Warhol and Lichtenstein works. The <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> London holds important British Pop Art. The Andy Warhol Museum in Pittsburgh is devoted to his work. The <a href=\"/museum/whitney-museum\"><strong>Whitney</strong></a> has strong American Pop Art holdings."
      },
      {
        question: "How did Pop Art influence culture?",
        answer: "<strong>Pop Art</strong> broke down barriers between fine art and commercial culture. Its influence extends to advertising, fashion, music, and contemporary art. <a href=\"/artist/andy-warhol\"><strong>Warhol's</strong></a> celebrity portraits and <a href=\"https://luxurywallart.com/collections/pop-culture\" target=\"_blank\" rel=\"noopener\"><strong>pop culture</strong></a> imagery anticipated today's image-saturated, celebrity-obsessed world."
      }
    ]
  },

  'post-impressionism': {
    slug: 'post-impressionism',
    descriptionHtml: `<p><strong>Post-Impressionism</strong> wasn't a unified movement but a generation of artists who pushed beyond <a href="/movement/impressionism"><strong>Impressionism's</strong></a> emphasis on light and color. From roughly 1886 to 1910, painters like <a href="/artist/paul-cezanne"><strong>Paul Cézanne</strong></a>, <a href="/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a>, <a href="/artist/paul-gauguin"><strong>Paul Gauguin</strong></a>, and <a href="/artist/georges-seurat"><strong>Georges Seurat</strong></a> each developed distinct personal styles that would shape <a href="/era/modern"><strong>Modern art</strong></a>.</p>

<p><a href="/artist/paul-cezanne"><strong>Cézanne</strong></a> flattened space and built forms from geometric color patches, becoming the "father of modern art." <a href="/artist/vincent-van-gogh"><strong>Van Gogh</strong></a> painted emotional intensity with swirling brushwork and <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>bold colors</strong></a>. <a href="/artist/paul-gauguin"><strong>Gauguin</strong></a> sought escape in Tahiti, using flat colors and symbolic imagery. <a href="/artist/georges-seurat"><strong>Seurat</strong></a> developed <strong>Pointillism</strong>, applying tiny dots of pure color in scientific precision.</p>

<p>These artists worked largely in isolation, often misunderstood in their lifetimes. Van Gogh sold almost nothing before his death at 37. Today, their works command the highest auction prices in art history. Major collections exist at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, the <a href="/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam, and the <a href="/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    whatToLookFor: [
      'Swirling, expressive brushstrokes visible from across the room (Van Gogh)',
      'Forms built from geometric color patches (Cézanne)',
      'Tiny dots of pure color placed side by side (Pointillism/Seurat)',
      'Flat areas of bold, non-naturalistic color (Gauguin)',
      'Bold dark outlines around forms',
      'Emotional intensity expressed through color choices',
      'Simplified, almost primitive-looking figures (Gauguin)',
      'Distorted perspective flattening three-dimensional space'
    ],
    faqs: [
      {
        question: "What is Post-Impressionism?",
        answer: "<strong>Post-Impressionism</strong> (1886-1910) describes artists who moved beyond <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. <a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a>, <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a>, <a href=\"/artist/paul-gauguin\"><strong>Gauguin</strong></a>, and <a href=\"/artist/georges-seurat\"><strong>Seurat</strong></a> each developed unique styles emphasizing structure, emotion, symbolism, or scientific color theory."
      },
      {
        question: "Who were the Post-Impressionist artists?",
        answer: "The main Post-Impressionists are <a href=\"/artist/paul-cezanne\"><strong>Paul Cézanne</strong></a> (geometric forms), <a href=\"/artist/vincent-van-gogh\"><strong>Vincent van Gogh</strong></a> (emotional brushwork), <a href=\"/artist/paul-gauguin\"><strong>Paul Gauguin</strong></a> (symbolic color), <a href=\"/artist/georges-seurat\"><strong>Georges Seurat</strong></a> (Pointillism), and Henri de Toulouse-Lautrec (Parisian nightlife)."
      },
      {
        question: "How is Post-Impressionism different from Impressionism?",
        answer: "<a href=\"/movement/impressionism\"><strong>Impressionists</strong></a> focused on capturing fleeting light and atmosphere. <strong>Post-Impressionists</strong> pushed further: <a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a> emphasized underlying structure, <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> expressed emotion through color and brushwork, and <a href=\"/artist/paul-gauguin\"><strong>Gauguin</strong></a> used flat, symbolic color."
      },
      {
        question: "Where can I see Post-Impressionist paintings?",
        answer: "The <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> Paris has major Cézanne and Van Gogh works. The <a href=\"/museum/van-gogh-museum\"><strong>Van Gogh Museum</strong></a> Amsterdam holds the world's largest Van Gogh collection. The <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> has famous Seurat paintings including <em>A Sunday on La Grande Jatte</em>."
      },
      {
        question: "Why is Post-Impressionism important?",
        answer: "<strong>Post-Impressionism</strong> laid groundwork for <a href=\"/era/modern\"><strong>Modern art</strong></a>. Cézanne influenced <a href=\"/movement/cubism\"><strong>Cubism</strong></a>, Van Gogh inspired <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>, and Gauguin's symbolic color influenced <a href=\"/movement/fauvism\"><strong>Fauvism</strong></a>. These artists proved painting could express more than visual reality."
      }
    ]
  },

  'expressionism': {
    slug: 'expressionism',
    descriptionHtml: `<p><strong>Expressionism</strong> prioritized raw emotion over accurate representation. Emerging in Germany around 1905, artists distorted form and used intense, non-naturalistic colors to express inner psychological states. <a href="/artist/edvard-munch"><strong>Edvard Munch's</strong></a> <em>The Scream</em> (1893) anticipated the movement, its anguished figure becoming an icon of modern anxiety.</p>

<p>Two German groups defined the movement. <strong>Die Brücke</strong> (The Bridge), founded in Dresden, included Ernst Ludwig Kirchner and Emil Nolde, who used jagged forms and clashing colors. <strong>Der Blaue Reiter</strong> (The Blue Rider) in Munich included <a href="/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a>, <a href="/artist/franz-marc"><strong>Franz Marc</strong></a>, and <a href="/artist/paul-klee"><strong>Paul Klee</strong></a>, moving toward abstraction while maintaining emotional intensity.</p>

<p>After World War I, <strong>New Objectivity</strong> artists like Otto Dix and George Grosz turned Expressionist distortion toward social criticism, depicting the horrors of war and Weimar decadence. The Nazis condemned Expressionism as "degenerate art," confiscating thousands of works. Today, major collections exist at the <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>German museums</strong></a>, and the <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>.</p>`,
    whatToLookFor: [
      'Distorted, elongated, or exaggerated human figures',
      'Intense, non-naturalistic colors (green faces, orange skies)',
      'Jagged, angular lines creating psychological tension',
      'Visible, aggressive brushwork conveying emotion',
      'Subjects expressing anxiety, alienation, or inner turmoil',
      'Urban scenes depicting modern life\'s chaos and isolation',
      'Simplified, almost woodcut-like forms (Die Brücke)',
      'Animals and nature rendered with spiritual intensity (Der Blaue Reiter)'
    ],
    faqs: [
      {
        question: "What is Expressionism?",
        answer: "<strong>Expressionism</strong> (1905-1930) prioritized emotional truth over visual accuracy. German artists used distorted forms and intense colors to express psychological states. <a href=\"/artist/edvard-munch\"><strong>Edvard Munch's</strong></a> <em>The Scream</em> exemplifies this approach to conveying inner anguish through visual distortion."
      },
      {
        question: "Who were the main Expressionist artists?",
        answer: "Key Expressionists include <a href=\"/artist/edvard-munch\"><strong>Edvard Munch</strong></a> (Norwegian precursor), Ernst Ludwig Kirchner and Emil Nolde (Die Brücke), and <a href=\"/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a>, <a href=\"/artist/franz-marc\"><strong>Franz Marc</strong></a>, and <a href=\"/artist/paul-klee\"><strong>Paul Klee</strong></a> (Der Blaue Reiter)."
      },
      {
        question: "What's the difference between Die Brücke and Der Blaue Reiter?",
        answer: "<strong>Die Brücke</strong> (Dresden, 1905) used jagged forms and harsh colors for emotional impact. <strong>Der Blaue Reiter</strong> (Munich, 1911) was more spiritual and abstract, with <a href=\"/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> exploring color's emotional properties and moving toward non-representational art."
      },
      {
        question: "Where can I see Expressionist art?",
        answer: "The <a href=\"/museum/moma\"><strong>MoMA</strong></a> New York and <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> London have major Expressionist collections. German museums, especially in Berlin and Munich, hold important works. <a href=\"/artist/edvard-munch\"><strong>Munch's</strong></a> <em>The Scream</em> is at the National Gallery of Norway in Oslo."
      },
      {
        question: "How did World War I affect Expressionism?",
        answer: "The war's horrors intensified Expressionist anguish. Many artists served and some died. Afterward, <strong>New Objectivity</strong> artists like Otto Dix used Expressionist distortion to depict war's trauma and Weimar society's decay. The Nazis later banned Expressionism as \"degenerate art.\""
      }
    ]
  },

  'romanticism': {
    slug: 'romanticism',
    descriptionHtml: `<p><strong>Romanticism</strong> swept through European art from roughly 1780 to 1850, celebrating emotion, imagination, and the sublime power of nature over Enlightenment rationalism. Artists depicted stormy <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, medieval ruins, and exotic subjects that evoked awe and terror. <a href="/artist/caspar-david-friedrich"><strong>Caspar David Friedrich's</strong></a> solitary figures gazing at infinite vistas became icons of the movement.</p>

<p>In France, <a href="/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> brought Romantic passion to history painting, with swirling compositions and vibrant color. <em>Liberty Leading the People</em> merged political revolution with artistic rebellion. In Britain, <a href="/artist/j-m-w-turner"><strong>J.M.W. Turner</strong></a> dissolved landscapes into light and atmosphere, anticipating <a href="/movement/impressionism"><strong>Impressionism</strong></a>. John Constable painted the English countryside with unprecedented naturalism.</p>

<p>Romanticism was as much about attitude as style: valuing the individual, the emotional, and the mysterious over classical order. <a href="/artist/francisco-goya"><strong>Goya's</strong></a> dark later works explored nightmare visions. The movement influenced literature, music, and philosophy as deeply as visual art. Major collections exist at the <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>, and German museums.</p>`,
    whatToLookFor: [
      'Dramatic skies with turbulent clouds, storms, or fiery sunsets',
      'Tiny human figures dwarfed by vast, overwhelming nature',
      'Medieval ruins, Gothic architecture, mysterious settings',
      'Solitary figures viewed from behind, gazing at infinite vistas',
      'Wild, untamed landscapes: mountains, seas, forests, waterfalls',
      'Exotic subjects from the Orient, North Africa, or distant lands',
      'Dramatic lighting and rich, saturated colors',
      'Scenes evoking strong emotions: terror, awe, melancholy, passion'
    ],
    faqs: [
      {
        question: "What is Romanticism in art?",
        answer: "<strong>Romanticism</strong> (1780-1850) prioritized emotion, imagination, and nature's sublime power over Enlightenment rationalism. Artists like <a href=\"/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a> and <a href=\"/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> emphasized individual feeling, dramatic landscapes, and subjects evoking awe or terror."
      },
      {
        question: "Who were the major Romantic artists?",
        answer: "Key Romantics include <a href=\"/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a> (German landscapes), <a href=\"/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a> (French history painting), <a href=\"/artist/j-m-w-turner\"><strong>J.M.W. Turner</strong></a> (British seascapes), John Constable (English countryside), and <a href=\"/artist/francisco-goya\"><strong>Francisco Goya</strong></a> (Spanish dark visions)."
      },
      {
        question: "What is the sublime in Romantic art?",
        answer: "The <strong>sublime</strong> describes awe-inspiring experiences that overwhelm human comprehension, like violent storms, vast mountains, or infinite space. Romantic artists sought to evoke this feeling through dramatic <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and powerful natural forces."
      },
      {
        question: "Where can I see Romantic paintings?",
        answer: "The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> holds Delacroix's <em>Liberty Leading the People</em>. <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> has the world's largest Turner collection. German Romantic works are in Berlin's Alte Nationalgalerie. The <a href=\"/museum/prado\"><strong>Prado</strong></a> holds Goya's dark paintings."
      },
      {
        question: "How is Romanticism different from Neoclassicism?",
        answer: "<a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a> valued reason, order, and classical restraint. <strong>Romanticism</strong> rebelled against this, embracing emotion, individualism, and wild nature. Neoclassical artists depicted calm, idealized figures; Romantics preferred dramatic movement and psychological intensity."
      }
    ]
  },

  'dutch-golden-age': {
    slug: 'dutch-golden-age',
    descriptionHtml: `<p>The <strong>Dutch Golden Age</strong> (1588-1672) saw unprecedented artistic output as the newly independent Netherlands became Europe's wealthiest trading nation. Unlike Catholic countries where churches commissioned religious art, Protestant Dutch merchants bought paintings for their homes: <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, portraits, still lifes, and scenes of everyday life.</p>

<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> dominated the era with his penetrating portraits and innovative use of light. His <em>Night Watch</em> revolutionized the group portrait. <a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted quiet domestic interiors with almost supernatural luminosity. Frans Hals captured personalities with loose, energetic brushwork. Landscape specialists like Jacob van Ruisdael and Meindert Hobbema recorded the flat Dutch countryside under dramatic skies.</p>

<p>Genre painters like Jan Steen depicted boisterous tavern scenes, while Willem Claesz Heda and Pieter Claesz created sophisticated still lifes. The period produced more paintings than any previous era, establishing art collecting as a middle-class activity. Today, the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam holds the world's greatest collection of Dutch Golden Age paintings, with major works also at The Hague's Mauritshuis.</p>`,
    whatToLookFor: [
      'Soft, diffused light streaming through windows (Vermeer)',
      'Dark backgrounds with dramatically lit faces (Rembrandt)',
      'Everyday subjects: domestic interiors, tavern scenes, markets',
      'Flat Dutch landscapes with big skies and distant horizons',
      'Still lifes with flowers, food, silverware, and vanitas symbols',
      'Middle-class subjects in contemporary 17th-century clothing',
      'Psychological depth in portraits, not just likenesses',
      'Small-scale paintings designed for private homes, not churches'
    ],
    faqs: [
      {
        question: "What was the Dutch Golden Age?",
        answer: "The <strong>Dutch Golden Age</strong> (1588-1672) was a period of unprecedented wealth and artistic production in the Netherlands. Protestant merchants commissioned paintings for their homes, including landscapes, portraits, still lifes, and genre scenes, rather than the religious art common elsewhere."
      },
      {
        question: "Who were the greatest Dutch Golden Age artists?",
        answer: "The era's masters include <a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> (portraits, biblical scenes), <a href=\"/artist/johannes-vermeer\"><strong>Johannes Vermeer</strong></a> (luminous interiors), Frans Hals (vivid portraits), Jacob van Ruisdael (dramatic landscapes), and Jan Steen (comic genre scenes)."
      },
      {
        question: "What types of paintings were popular in Dutch Golden Age?",
        answer: "Dutch buyers favored <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, portraits, still lifes (especially with flowers, food, and vanitas symbols), and <strong>genre scenes</strong> depicting everyday life. Religious subjects were less common than in Catholic countries due to Protestant beliefs."
      },
      {
        question: "Where can I see Dutch Golden Age paintings?",
        answer: "The <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> Amsterdam has the world's finest collection, including <a href=\"/artist/rembrandt\"><strong>Rembrandt's</strong></a> <em>Night Watch</em>. The Mauritshuis in The Hague holds <a href=\"/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> <em>Girl with a Pearl Earring</em>. The <a href=\"/museum/metropolitan-museum\"><strong>Met</strong></a> and <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> also have major holdings."
      },
      {
        question: "Why was the Dutch Golden Age significant?",
        answer: "The <strong>Dutch Golden Age</strong> created the first art market for middle-class collectors. It established landscape, still life, and genre painting as respected subjects. The period's output influenced painting for centuries and democratized art ownership beyond Church and aristocracy."
      }
    ]
  },

  'rococo': {
    slug: 'rococo',
    descriptionHtml: `<p><strong>Rococo</strong> emerged in early 18th-century France as a lighter, more playful reaction to <a href="/movement/baroque"><strong>Baroque</strong></a> grandeur. Where Baroque served popes and monarchs with dramatic intensity, Rococo pleased aristocrats seeking pleasure and wit. Pastel colors replaced deep shadows. Cherubs and flirtatious lovers replaced tortured saints. Ornament became an end in itself.</p>

<p>Antoine Watteau pioneered the <em>fête galante</em>, depicting elegant figures in parkland settings. <a href="/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard's</strong></a> famous <em>The Swing</em> captures the style perfectly: a young woman kicks off her slipper while a hidden lover watches from the bushes. François Boucher painted mythological scenes with rosy flesh and <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink</strong></a> clouds. In Venice, Tiepolo created dazzling ceiling frescoes.</p>

<p>Rococo extended beyond painting to architecture, furniture, and decorative arts, characterized by asymmetrical curves, shell motifs, and gold leaf. Critics dismissed it as frivolous, and the French Revolution swept it away along with the aristocracy that patronized it. Today, Rococo paintings hang in the <a href="/museum/louvre"><strong>Louvre</strong></a>, the Wallace Collection in London, and the Frick Collection in New York.</p>`,
    whatToLookFor: [
      'Pastel colors: soft pinks, powder blues, creamy whites',
      'Playful, flirtatious subjects: swings, love letters, garden parties',
      'Cherubs and cupids in abundance',
      'Asymmetrical, curving compositions',
      'Elegant aristocrats in silk and satin in parkland settings',
      'Shell and scroll motifs (rocaille)',
      'Rosy, porcelain-like flesh tones',
      'Frivolous mythological subjects: Venus, nymphs, shepherdesses'
    ],
    faqs: [
      {
        question: "What is Rococo art?",
        answer: "<strong>Rococo</strong> (1720-1780) was a decorative, playful style favored by French aristocracy. Characterized by pastel colors, asymmetrical curves, and themes of love and pleasure, it contrasted with <a href=\"/movement/baroque\"><strong>Baroque</strong></a> drama. <a href=\"/artist/jean-honore-fragonard\"><strong>Fragonard's</strong></a> <em>The Swing</em> exemplifies its flirtatious elegance."
      },
      {
        question: "Who were the major Rococo artists?",
        answer: "Key Rococo painters include Antoine Watteau (<em>fête galante</em> scenes), <a href=\"/artist/jean-honore-fragonard\"><strong>Jean-Honoré Fragonard</strong></a> (amorous subjects), François Boucher (mythological scenes with rosy flesh), and Giovanni Battista Tiepolo (Venetian ceiling frescoes)."
      },
      {
        question: "How is Rococo different from Baroque?",
        answer: "<a href=\"/movement/baroque\"><strong>Baroque</strong></a> served Church and monarchy with dramatic intensity and religious subjects. <strong>Rococo</strong> served aristocrats with lighter themes, pastel colors, and decorative ornament. Baroque is grand and serious; Rococo is intimate and playful."
      },
      {
        question: "Where can I see Rococo art?",
        answer: "The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> Paris holds major French Rococo works. The Wallace Collection in London has exceptional paintings and decorative arts. The Frick Collection New York includes Fragonard's <em>Progress of Love</em> series. Munich's Residenz showcases Rococo architecture and interiors."
      },
      {
        question: "Why did Rococo decline?",
        answer: "<strong>Rococo</strong> was associated with aristocratic excess as the French Revolution approached. <a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a> emerged as a moral correction, emphasizing virtue and civic duty over frivolity. Revolutionary politics ended the aristocratic patronage that sustained Rococo."
      }
    ]
  }
};

/**
 * Get enriched content for a movement by slug
 * Returns undefined if no enrichment exists
 */
export function getMovementEnrichment(slug: string): MovementEnrichment | undefined {
  return MOVEMENT_ENRICHMENTS[slug];
}

/**
 * Check if a movement has enriched content
 */
export function hasMovementEnrichment(slug: string): boolean {
  return slug in MOVEMENT_ENRICHMENTS;
}
