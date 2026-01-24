/**
 * Era definitions and utilities for the Timeline/Era Explorer feature
 * Eras group art movements by historical period for SEO and navigation
 */

export interface EraFAQ {
  question: string;
  answer: string;
}

export interface Era {
  slug: string;
  name: string;
  shortName: string;
  startYear: number;
  endYear: number;
  description: string; // Plain text for meta descriptions
  descriptionHtml: string; // Rich HTML with links and bold keywords
  keywords: string[];
  characteristics: string[];
  faqs: EraFAQ[];
  color: string; // Tailwind color for timeline visualization
  heroImage?: string;
}

export const ERAS: Era[] = [
  {
    slug: 'medieval',
    name: 'Medieval Art',
    shortName: 'Medieval',
    startYear: 500,
    endYear: 1399,
    description: 'Medieval art spans nearly a thousand years, from the fall of Rome to the dawn of the Renaissance. Religious devotion drove artistic production, with Byzantine mosaics, Romanesque sculptures, and Gothic cathedrals defining the era.',
    descriptionHtml: `<p><strong>Medieval art</strong> spans nearly a thousand years, from the fall of Rome around 500 CE to the dawn of the <a href="/era/renaissance"><strong>Renaissance</strong></a> in the 1400s. This was art in service of faith. The Catholic Church commissioned virtually everything: <strong>illuminated manuscripts</strong>, altarpieces, mosaics, and the soaring stained glass windows of Gothic cathedrals. Artists worked anonymously, their individual genius less important than glorifying God.</p>

<p>Three distinct styles emerged across the centuries. <strong>Byzantine art</strong> dominated the Eastern Roman Empire with its golden mosaics and stylized icons, flat figures gazing outward with enormous eyes. <a href="/movement/romanesque"><strong>Romanesque</strong></a> architecture brought heavy stone walls and rounded arches to Western Europe's monasteries. By the 12th century, <strong>Gothic art</strong> reached toward heaven with pointed arches, flying buttresses, and windows that transformed light into color.</p>

<p>The subjects rarely varied: Christ, the Virgin Mary, saints, and biblical narratives. But within these constraints, medieval artists developed sophisticated visual languages. <strong>Gold leaf backgrounds</strong> symbolized divine light. Size indicated importance, not perspective. Every color, gesture, and symbol carried theological meaning that contemporary viewers understood instinctively. This wasn't primitive art. It was art with different priorities than our own.</p>`,
    keywords: ['medieval art', 'gothic paintings', 'illuminated manuscripts', 'Byzantine art', 'religious art', 'medieval paintings'],
    characteristics: [
      'Religious and biblical subjects dominate',
      'Gold leaf backgrounds symbolizing divine light',
      'Flat, two-dimensional figures',
      'Hierarchical scaling (important figures larger)',
      'Symbolic imagery over naturalistic representation',
      'Anonymous artists working for the Church',
      'Illuminated manuscripts with intricate detail',
      'Gothic architecture and stained glass'
    ],
    faqs: [
      {
        question: "What defines Medieval art?",
        answer: "<strong>Medieval art</strong> prioritized religious devotion over naturalistic representation. Key features include <strong>gold leaf backgrounds</strong>, flat two-dimensional figures, hierarchical scaling where important figures appear larger, and symbolic imagery. Artists worked anonymously for the Church rather than seeking individual fame."
      },
      {
        question: "What are the main styles within Medieval art?",
        answer: "Three major styles define the Medieval period: <strong>Byzantine art</strong> (golden mosaics and stylized icons), <a href=\"/movement/romanesque\"><strong>Romanesque</strong></a> (heavy stone architecture with rounded arches), and <strong>Gothic art</strong> (pointed arches, flying buttresses, stained glass windows). Each style dominated different centuries and regions."
      },
      {
        question: "Why do Medieval paintings look flat?",
        answer: "Medieval artists deliberately avoided <strong>realistic perspective</strong> because their goal was spiritual, not physical accuracy. Flat figures with symbolic gestures communicated theological truths. Size indicated importance: Christ and the Virgin Mary appear larger than surrounding figures regardless of their position in space."
      },
      {
        question: "Where can I see Medieval art today?",
        answer: "Major collections exist at the <a href=\"/museum/metropolitan-museum\"><strong>Metropolitan Museum of Art</strong></a> (The Cloisters), the <a href=\"/museum/louvre\"><strong>Louvre</strong></a>, the <a href=\"/museum/british-museum\"><strong>British Museum</strong></a>, and the Vatican Museums. Gothic cathedrals like Notre-Dame and Chartres remain the best places to experience Medieval art in its original context."
      },
      {
        question: "What are illuminated manuscripts?",
        answer: "<strong>Illuminated manuscripts</strong> are hand-decorated books created by Medieval monks and scribes. The term comes from the <strong>gold and silver leaf</strong> that literally illuminates the pages. Famous examples include the Book of Kells and Les Très Riches Heures du Duc de Berry."
      }
    ],
    color: 'amber'
  },
  {
    slug: 'renaissance',
    name: 'Renaissance',
    shortName: 'Renaissance',
    startYear: 1400,
    endYear: 1599,
    description: 'The Renaissance marked a rebirth of classical Greek and Roman ideals, beginning in Florence and spreading across Europe. Artists like Leonardo da Vinci, Michelangelo, and Raphael pioneered linear perspective, anatomical accuracy, and naturalistic light.',
    descriptionHtml: `<p>The <strong>Renaissance</strong> means "rebirth," and that's exactly what happened in Florence around 1400. Artists rediscovered classical Greek and Roman ideals, studied ancient sculptures, and developed techniques that would define Western art for centuries. <a href="/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a>, <a href="/artist/michelangelo"><strong>Michelangelo</strong></a>, and <a href="/artist/raphael"><strong>Raphael</strong></a> didn't just paint. They investigated anatomy, mathematics, and engineering to understand how the world actually worked.</p>

<p><strong>Linear perspective</strong> was the revolutionary breakthrough. Filippo Brunelleschi demonstrated how parallel lines converge at a vanishing point, and suddenly painters could create convincing depth on flat surfaces. <a href="/artist/sandro-botticelli"><strong>Botticelli's</strong></a> graceful figures, <a href="/artist/titian"><strong>Titian's</strong></a> rich colors, and Leonardo's <strong>sfumato</strong> technique (soft, smoky transitions between tones) became defining characteristics. Oil painting, imported from Northern Europe, allowed for luminous glazes and subtle gradations impossible with tempera.</p>

<p>The Medici family in Florence bankrolled much of this explosion. Wealthy patrons competed for the best artists, and for the first time, individual genius mattered. Artists signed their work. They became celebrities. Humanism placed mankind at the center of inquiry, and <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> flourished alongside religious subjects. By the time the High Renaissance peaked around 1500, art had transformed from anonymous craft to celebrated profession.</p>`,
    keywords: ['Renaissance paintings', 'Renaissance artists', 'Italian Renaissance', 'Renaissance art', 'High Renaissance', 'Leonardo da Vinci', 'Michelangelo'],
    characteristics: [
      'Linear perspective creating realistic depth',
      'Anatomically accurate human figures',
      'Classical mythology alongside religious subjects',
      'Chiaroscuro (naturalistic light and shadow)',
      'Individual artistic genius celebrated',
      'Oil painting techniques from Northern Europe',
      'Sfumato (soft, smoky transitions)',
      'Humanism placing mankind at center'
    ],
    faqs: [
      {
        question: "What is the Renaissance period in art?",
        answer: "The <strong>Renaissance</strong> (1400-1599) was a cultural rebirth centered in Italy, where artists rediscovered classical Greek and Roman ideals. Masters like <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a> and <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> pioneered linear perspective, anatomical accuracy, and oil painting techniques that transformed Western art."
      },
      {
        question: "Who are the most famous Renaissance artists?",
        answer: "The \"Big Three\" of the High Renaissance are <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>, <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a>, and <a href=\"/artist/raphael\"><strong>Raphael</strong></a>. Other masters include <a href=\"/artist/sandro-botticelli\"><strong>Sandro Botticelli</strong></a>, <a href=\"/artist/titian\"><strong>Titian</strong></a>, and Jan van Eyck in Northern Europe."
      },
      {
        question: "What is linear perspective in Renaissance art?",
        answer: "<strong>Linear perspective</strong> is a mathematical system where parallel lines converge at a vanishing point on the horizon, creating realistic depth on flat surfaces. Filippo Brunelleschi demonstrated this technique around 1415, and it became fundamental to Renaissance painting."
      },
      {
        question: "Where can I see Renaissance masterpieces?",
        answer: "The <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence holds Botticelli's Birth of Venus and works by Leonardo. The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> displays the Mona Lisa. Michelangelo's Sistine Chapel ceiling remains in Vatican City. The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London has outstanding Northern Renaissance works."
      },
      {
        question: "What's the difference between Early and High Renaissance?",
        answer: "The <strong>Early Renaissance</strong> (1400-1490) developed foundational techniques like perspective and anatomical study. The <strong>High Renaissance</strong> (1490-1527) represents the peak, when Leonardo, Michelangelo, and Raphael synthesized these innovations into works of unprecedented mastery and harmony."
      }
    ],
    color: 'yellow'
  },
  {
    slug: 'baroque-rococo',
    name: 'Baroque & Rococo',
    shortName: 'Baroque',
    startYear: 1600,
    endYear: 1799,
    description: 'Baroque art exploded with drama, movement, and emotional intensity. Caravaggio\'s revolutionary chiaroscuro influenced a generation, while Rubens and Bernini created works of theatrical grandeur.',
    descriptionHtml: `<p>If Renaissance art sought harmony and balance, <strong>Baroque art</strong> wanted to overwhelm you. Beginning around 1600, artists like <a href="/artist/caravaggio"><strong>Caravaggio</strong></a> developed <strong>tenebrism</strong>, an extreme form of chiaroscuro where figures emerge from pitch darkness into dramatic spotlight. The Catholic Church, fighting the Protestant Reformation, deployed art as propaganda. Paintings had to move viewers emotionally, to make them feel the ecstasy of saints and the terror of martyrdom.</p>

<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> embodied Baroque grandeur with his monumental canvases of fleshy figures in swirling motion. <a href="/artist/rembrandt"><strong>Rembrandt</strong></a> turned inward, using light to explore human psychology. <a href="/artist/johannes-vermeer"><strong>Vermeer</strong></a> captured quiet domestic moments with almost supernatural luminosity. Meanwhile, in Spain, <a href="/artist/diego-velazquez"><strong>Velázquez</strong></a> painted the royal court with unflinching honesty. The Dutch Golden Age produced more paintings than any previous century, many depicting <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, still lifes, and everyday scenes.</p>

<p>By the 1700s, <strong>Rococo</strong> lightened the mood. Where Baroque served popes and monarchs, Rococo pleased aristocrats seeking pleasure and wit. Pastel colors replaced deep shadows. Playful cherubs and flirtatious lovers replaced tortured saints. <a href="/artist/jean-honore-fragonard"><strong>Fragonard's</strong></a> famous Swing captures the style perfectly: frivolous, decorative, deliberately superficial. The French Revolution would sweep it all away.</p>`,
    keywords: ['Baroque art', 'Baroque painters', 'Rococo art', 'Dutch Golden Age', 'Baroque period', 'Caravaggio', 'Rembrandt'],
    characteristics: [
      'Dramatic contrast of light and shadow (tenebrism)',
      'Dynamic compositions with diagonal movement',
      'Emotional intensity and theatrical gestures',
      'Rich colors and luxurious textures',
      'Grandeur serving Church and monarchy',
      'Dutch Golden Age genre scenes',
      'Rococo: lighter, pastel, aristocratic themes',
      'Illusionistic ceiling paintings'
    ],
    faqs: [
      {
        question: "What is Baroque art known for?",
        answer: "<strong>Baroque art</strong> (1600-1750) is known for dramatic lighting, emotional intensity, and theatrical compositions. <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> pioneered <strong>tenebrism</strong>, where figures emerge from deep shadows into spotlight, creating psychological tension that moved viewers emotionally."
      },
      {
        question: "What's the difference between Baroque and Rococo?",
        answer: "<strong>Baroque</strong> served churches and monarchs with dramatic, large-scale works emphasizing power and faith. <strong>Rococo</strong> (1720-1780) served aristocrats with lighter, decorative art featuring pastel colors, playful subjects, and ornate detail. Rococo was essentially Baroque's frivolous younger sibling."
      },
      {
        question: "Who were the major Baroque artists?",
        answer: "Key masters include <a href=\"/artist/caravaggio\"><strong>Caravaggio</strong></a> (dramatic lighting), <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> (psychological depth), <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> (luminous interiors), <a href=\"/artist/peter-paul-rubens\"><strong>Rubens</strong></a> (monumental grandeur), and <a href=\"/artist/diego-velazquez\"><strong>Velázquez</strong></a> (royal portraiture)."
      },
      {
        question: "What was the Dutch Golden Age?",
        answer: "The <strong>Dutch Golden Age</strong> (1588-1672) saw unprecedented artistic production in the Netherlands. Protestant merchants commissioned <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, still lifes, and genre scenes instead of religious art. <a href=\"/artist/rembrandt\"><strong>Rembrandt</strong></a> and <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> emerged from this golden period."
      },
      {
        question: "Where can I see Baroque masterpieces?",
        answer: "The <a href=\"/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> holds Rembrandt's Night Watch. The <a href=\"/museum/prado\"><strong>Prado</strong></a> has Velázquez's Las Meninas. Caravaggio's works are scattered across Rome's churches. The <a href=\"/museum/louvre\"><strong>Louvre</strong></a> and <a href=\"/museum/metropolitan-museum\"><strong>Met</strong></a> have extensive Baroque collections."
      }
    ],
    color: 'red'
  },
  {
    slug: '19th-century',
    name: '19th Century Art',
    shortName: '19th Century',
    startYear: 1800,
    endYear: 1899,
    description: 'The 19th century witnessed an explosion of artistic movements reacting against academic tradition. Romanticism celebrated emotion and nature. Realism depicted ordinary life without idealization. Impressionism captured fleeting light and modern life.',
    descriptionHtml: `<p>No century transformed art more radically than the 19th. It began with <strong>Neoclassicism</strong> and ended with artists dismantling everything that came before. <a href="/movement/romanticism"><strong>Romanticism</strong></a> arrived first, celebrating emotion, nature, and individual imagination over classical reason. <a href="/artist/eugene-delacroix"><strong>Delacroix's</strong></a> wild brushwork and <a href="/artist/caspar-david-friedrich"><strong>Friedrich's</strong></a> sublime <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> placed feeling above technique.</p>

<p>By mid-century, <a href="/movement/realism"><strong>Realism</strong></a> demanded truth. <a href="/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted peasants and laborers at monumental scale, insisting that art should depict contemporary life without idealization. Then came <a href="/movement/impressionism"><strong>Impressionism</strong></a>, the movement that scandalized Paris and changed everything. <a href="/artist/claude-monet"><strong>Monet</strong></a>, <a href="/artist/pierre-auguste-renoir"><strong>Renoir</strong></a>, and <a href="/artist/edgar-degas"><strong>Degas</strong></a> painted outdoors, capturing <strong>fleeting light</strong> with visible brushstrokes. Critics mocked them. Collectors eventually made them immortal.</p>

<p><a href="/movement/post-impressionism"><strong>Post-Impressionism</strong></a> pushed further. <a href="/artist/paul-cezanne"><strong>Cézanne</strong></a> flattened space and built forms from color. <a href="/artist/vincent-van-gogh"><strong>Van Gogh</strong></a> painted emotional intensity with swirling brushwork. <a href="/artist/paul-gauguin"><strong>Gauguin</strong></a> sought escape in Tahitian subjects. <a href="/artist/georges-seurat"><strong>Seurat</strong></a> reduced color to scientific dots. Together, they prepared the ground for <a href="/era/modern"><strong>Modern art's</strong></a> complete break with tradition.</p>`,
    keywords: ['Romantic art', 'Impressionist art', 'Realism paintings', 'Post-Impressionism', '19th century paintings', 'Monet', 'Van Gogh'],
    characteristics: [
      'Romanticism: emotion, nature, individualism',
      'Realism: everyday subjects, social commentary',
      'Impressionism: visible brushwork, capturing light',
      'Plein air (outdoor) painting',
      'Japanese art influence (Japonisme)',
      'Photography challenging painting',
      'Post-Impressionism: color and form experiments',
      'Art for art\'s sake emerging'
    ],
    faqs: [
      {
        question: "What are the major 19th century art movements?",
        answer: "The 19th century saw rapid succession of movements: <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a> (emotion and nature), <a href=\"/movement/realism\"><strong>Realism</strong></a> (everyday life), <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> (light and color), and <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> (experimental techniques). Each reacted against what came before."
      },
      {
        question: "What is Impressionism?",
        answer: "<strong>Impressionism</strong> emerged in 1870s Paris when artists like <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> and <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> rejected academic traditions. They painted outdoors (<strong>plein air</strong>), used visible brushstrokes, and captured fleeting effects of light rather than detailed finish."
      },
      {
        question: "Who are the most famous Impressionist artists?",
        answer: "The core Impressionists include <a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> (water lilies, haystacks), <a href=\"/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> (joyful scenes), <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> (ballet dancers), <a href=\"/artist/camille-pissarro\"><strong>Pissarro</strong></a>, and <a href=\"/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a>."
      },
      {
        question: "Where can I see Impressionist paintings?",
        answer: "The <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris has the world's best Impressionist collection. The <a href=\"/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a> holds famous Monets and Seurats. The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> London and <a href=\"/museum/metropolitan-museum\"><strong>Met</strong></a> New York also have major holdings."
      },
      {
        question: "What's the difference between Impressionism and Post-Impressionism?",
        answer: "<strong>Impressionists</strong> focused on capturing light and atmosphere with loose brushwork. <strong>Post-Impressionists</strong> like <a href=\"/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a>, <a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a>, and <a href=\"/artist/paul-gauguin\"><strong>Gauguin</strong></a> pushed further, using bold colors and distorted forms for emotional or structural effect."
      }
    ],
    color: 'green'
  },
  {
    slug: 'modern',
    name: 'Modern Art',
    shortName: 'Modern',
    startYear: 1900,
    endYear: 1969,
    description: 'Modern art shattered centuries of tradition in a few explosive decades. Cubism fragmented reality. Expressionism prioritized emotion over accuracy. Surrealism explored the unconscious mind. Abstract art abandoned representation entirely.',
    descriptionHtml: `<p><strong>Modern art</strong> didn't just evolve from what came before. It declared war on it. In 1907, <a href="/artist/pablo-picasso"><strong>Picasso's</strong></a> Les Demoiselles d'Avignon shattered conventional perspective, launching <a href="/movement/cubism"><strong>Cubism</strong></a>. Objects appeared from multiple angles simultaneously. Reality fragmented into geometric planes. Nothing in art would ever be the same.</p>

<p>Movements multiplied at dizzying speed. <a href="/movement/expressionism"><strong>Expressionism</strong></a> prioritized raw emotion over accurate representation, with <a href="/artist/edvard-munch"><strong>Edvard Munch's</strong></a> The Scream becoming its icon. <a href="/movement/surrealism"><strong>Surrealism</strong></a> explored dreams and the unconscious, as <a href="/artist/salvador-dali"><strong>Dalí's</strong></a> melting clocks and <a href="/artist/rene-magritte"><strong>Magritte's</strong></a> impossible images dissolved rational thought. <a href="/movement/abstract-expressionism"><strong>Abstract Expressionism</strong></a> abandoned representation entirely, with <a href="/artist/jackson-pollock"><strong>Pollock</strong></a> dripping paint and <a href="/artist/mark-rothko"><strong>Rothko</strong></a> creating color fields that seemed to vibrate.</p>

<p>Two world wars, Freudian psychology, and technological upheaval drove these experiments. If the camera could capture reality, why should painters? Modern artists asked what art could be and do when freed from representation. <a href="https://luxurywallart.com/collections/abstract-wall-art" target="_blank" rel="noopener"><strong>Abstract art</strong></a> proved that color, form, and gesture could move viewers without depicting anything recognizable. By 1969, these ideas had become the new establishment, ready for the next generation to rebel against.</p>`,
    keywords: ['Modern art', 'Cubism', 'Expressionism', 'Abstract art', 'Surrealism', 'modern paintings', 'Picasso', 'Abstract Expressionism'],
    characteristics: [
      'Rejection of academic tradition',
      'Abstraction and non-representational art',
      'Multiple perspectives (Cubism)',
      'Emotional expression over realism',
      'Exploration of the unconscious (Surrealism)',
      'New materials and techniques',
      'Manifestos and art movements',
      'Art as concept, not just object'
    ],
    faqs: [
      {
        question: "What is Modern art?",
        answer: "<strong>Modern art</strong> (roughly 1900-1970) rejected traditional techniques in favor of experimentation. Movements like <a href=\"/movement/cubism\"><strong>Cubism</strong></a>, <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>, <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a>, and <a href=\"/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a> questioned what art could be and do."
      },
      {
        question: "Who are the most important Modern artists?",
        answer: "Titans of Modern art include <a href=\"/artist/pablo-picasso\"><strong>Pablo Picasso</strong></a> (Cubism), <a href=\"/artist/henri-matisse\"><strong>Henri Matisse</strong></a> (Fauvism), <a href=\"/artist/salvador-dali\"><strong>Salvador Dalí</strong></a> (Surrealism), <a href=\"/artist/jackson-pollock\"><strong>Jackson Pollock</strong></a> (Abstract Expressionism), and <a href=\"/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a> (pure abstraction)."
      },
      {
        question: "What is Cubism?",
        answer: "<strong>Cubism</strong> was pioneered by <a href=\"/artist/pablo-picasso\"><strong>Picasso</strong></a> and Georges Braque around 1907. It shows objects from multiple viewpoints simultaneously, fragmenting reality into <strong>geometric planes</strong>. Cubism influenced virtually every subsequent Modern art movement."
      },
      {
        question: "What is Abstract Expressionism?",
        answer: "<strong>Abstract Expressionism</strong> emerged in New York after World War II. Artists like <a href=\"/artist/jackson-pollock\"><strong>Jackson Pollock</strong></a> (drip paintings) and <a href=\"/artist/mark-rothko\"><strong>Mark Rothko</strong></a> (color fields) created <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract art</strong></a> emphasizing gesture, emotion, and monumental scale."
      },
      {
        question: "Where can I see Modern art masterpieces?",
        answer: "The <a href=\"/museum/moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York has the world's premier collection. The <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> in Paris, <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> in London, and the Guggenheim museums hold major Modern art collections."
      }
    ],
    color: 'blue'
  },
  {
    slug: 'contemporary',
    name: 'Contemporary Art',
    shortName: 'Contemporary',
    startYear: 1970,
    endYear: 2030, // Future-proof
    description: 'Contemporary art defies easy definition, embracing everything from conceptual installations to digital media. Artists question the boundaries between art and life, high culture and popular culture, the gallery and the street.',
    descriptionHtml: `<p><strong>Contemporary art</strong> resists definition, and that's the point. Since around 1970, artists have questioned every assumption about what art is, where it belongs, and who gets to decide. <a href="/movement/pop-art"><strong>Pop Art</strong></a> had already blurred the line between high culture and commercial imagery. <a href="/movement/conceptual-art"><strong>Conceptual art</strong></a> declared that ideas matter more than objects. Performance art made the artist's body the medium. Installation art transformed entire spaces.</p>

<p>Today's art world is genuinely global for the first time. Artists from Lagos, São Paulo, and Beijing participate in the same conversations as those from New York and London. Digital technology enables new forms: video art, internet art, AI-generated images. Street artists like Banksy reach audiences that never visit museums. Meanwhile, auction records shatter as billionaires compete for works by <a href="/artist/jeff-koons"><strong>Jeff Koons</strong></a>, <a href="/artist/damien-hirst"><strong>Damien Hirst</strong></a>, and <a href="/artist/yayoi-kusama"><strong>Yayoi Kusama</strong></a>.</p>

<p>Is it art if you could have made it yourself? Contemporary artists often answer: that's not the right question. What matters is the concept, the context, the conversation the work provokes. A shark in formaldehyde, an unmade bed, a banana taped to a wall. These works succeed not despite controversy but because of it. <a href="https://luxurywallart.com/collections/pop-culture" target="_blank" rel="noopener"><strong>Pop culture</strong></a>, politics, identity, and technology all become raw material for artists who refuse to separate art from life.</p>`,
    keywords: ['Contemporary art', 'conceptual art', 'installation art', 'digital art', 'contemporary paintings', 'Pop Art', 'street art'],
    characteristics: [
      'Conceptual and idea-driven work',
      'Mixed media and installation',
      'Performance and time-based art',
      'Questioning institutional frameworks',
      'Global perspectives beyond the West',
      'Digital and new media art',
      'Blurring art and commerce',
      'Identity politics and social commentary'
    ],
    faqs: [
      {
        question: "What is Contemporary art?",
        answer: "<strong>Contemporary art</strong> refers to art made from roughly 1970 to the present. It embraces diverse media including installation, video, performance, and digital work. Unlike earlier movements, Contemporary art has no single dominant style, instead questioning what art can be."
      },
      {
        question: "How is Contemporary art different from Modern art?",
        answer: "<strong>Modern art</strong> (1900-1970) still focused on formal innovation, creating movements like Cubism and Abstract Expressionism. <strong>Contemporary art</strong> shifted focus to concepts, context, and questioning art institutions themselves. The object matters less than the idea."
      },
      {
        question: "Who are famous Contemporary artists?",
        answer: "Major Contemporary artists include <a href=\"/artist/jeff-koons\"><strong>Jeff Koons</strong></a> (pop sculptures), <a href=\"/artist/damien-hirst\"><strong>Damien Hirst</strong></a> (preserved animals), <a href=\"/artist/yayoi-kusama\"><strong>Yayoi Kusama</strong></a> (infinity rooms), Banksy (street art), and <a href=\"/artist/ai-weiwei\"><strong>Ai Weiwei</strong></a> (political installations)."
      },
      {
        question: "Where can I see Contemporary art?",
        answer: "The <a href=\"/museum/tate-modern\"><strong>Tate Modern</strong></a> London, <a href=\"/museum/moma\"><strong>MoMA</strong></a> New York, <a href=\"/museum/centre-pompidou\"><strong>Centre Pompidou</strong></a> Paris, and Guggenheim Bilbao showcase Contemporary art. Biennials in Venice, São Paulo, and Istanbul offer cutting-edge work from around the world."
      },
      {
        question: "Why is Contemporary art controversial?",
        answer: "Contemporary art often provokes by questioning what counts as art. Works like Duchamp's urinal, Hirst's shark, or a banana taped to a wall challenge viewers' expectations. The controversy itself becomes part of the artwork, forcing conversations about value, meaning, and who decides."
      }
    ],
    color: 'purple'
  }
];

/**
 * Get an era by its slug
 */
export function getEraBySlug(slug: string): Era | undefined {
  return ERAS.find(era => era.slug === slug);
}

/**
 * Get the era for a given year
 */
export function getEraForYear(year: number): Era | undefined {
  return ERAS.find(era => year >= era.startYear && year <= era.endYear);
}

/**
 * Get the era slug for a given year (for linking)
 */
export function getEraSlugForYear(year: number): string | undefined {
  const era = getEraForYear(year);
  return era?.slug;
}

/**
 * Format era date range for display
 */
export function formatEraDateRange(era: Era): string {
  if (era.slug === 'medieval') {
    return 'Before 1400';
  }
  if (era.slug === 'contemporary') {
    return '1970 - Present';
  }
  return `${era.startYear} - ${era.endYear}`;
}

/**
 * Get Tailwind background color class for era
 */
export function getEraColorClass(era: Era, variant: 'bg' | 'text' | 'border' = 'bg'): string {
  const colorMap: Record<string, Record<string, string>> = {
    amber: { bg: 'bg-amber-100', text: 'text-amber-800', border: 'border-amber-300' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
    red: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
    green: { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-300' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' }
  };
  return colorMap[era.color]?.[variant] || 'bg-neutral-100';
}

/**
 * Get solid Tailwind background color for timeline bars
 */
export function getEraSolidColorClass(era: Era): string {
  const colorMap: Record<string, string> = {
    amber: 'bg-amber-600',
    yellow: 'bg-yellow-500',
    red: 'bg-red-700',
    green: 'bg-emerald-600',
    blue: 'bg-blue-600',
    purple: 'bg-purple-600'
  };
  return colorMap[era.color] || 'bg-neutral-600';
}

/**
 * Get all era slugs (for static generation)
 */
export function getAllEraSlugs(): string[] {
  return ERAS.map(era => era.slug);
}
