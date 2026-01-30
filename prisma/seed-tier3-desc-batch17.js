const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'edgar-degas-study-for-the-self-portrait': [
    { question: "Where is this drawing displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/rhode-island-school-of-design-museum-risd-museum-p\"><strong>RISD Museum</strong></a> in Providence, Rhode Island. The museum holds a strong collection of works on paper." },
    { question: "Who created this self-portrait study?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this drawing. His early self-portraits show the influence of <strong>Italian Renaissance masters</strong> he studied during his years in Rome." },
    { question: "What style is this work?", answer: "It reflects Degas's academic training before he joined the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> circle. His <strong>draftsmanship</strong> remained central to his art throughout his career, setting him apart from other Impressionists." }
  ],
  'edgar-degas-the-milliner': [
    { question: "Where is The Milliner displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>, which holds one of the world's finest Degas collections." },
    { question: "What does The Milliner depict?", answer: "The scene shows a <strong>woman working in a hat shop</strong>. Degas painted milliners repeatedly in the 1880s, fascinated by their gestures and the colorful shapes of the hats." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> scene. He preferred painting <strong>working women</strong> over the leisure subjects favored by Monet and Renoir." }
  ],
  'edgar-degas-the-bath-woman-from-behind': [
    { question: "Where is this pastel displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, housed within the museum's extensive Degas holdings." },
    { question: "What does this work depict?", answer: "It shows a <strong>woman bathing, seen from behind</strong>. Degas's late bather series captures private moments with bold pastel strokes, as if the viewer is looking through a keyhole." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this pastel. His <strong>bather compositions</strong> broke with tradition by showing women in natural, unglamorous poses rather than idealized nudes." }
  ],
  'edgar-degas-rest-on-the-bed': [
    { question: "What does this work depict?", answer: "The scene shows a <strong>woman resting on a bed</strong>, rendered with Degas's characteristic interest in <strong>unguarded, private moments</strong>. The composition feels candid, almost voyeuristic." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this piece. He explored intimate domestic scenes throughout the 1880s, pushing <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> toward more personal subject matter." },
    { question: "What medium did Degas prefer?", answer: "Degas increasingly favored <strong>pastel over oil paint</strong> in his later career. Pastels let him blend drawing and color in a single medium, building rich surfaces through layered strokes." }
  ],
  'edgar-degas-woman-combing-her-hair': [
    { question: "What does this painting depict?", answer: "The scene shows a <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> <strong>combing her hair</strong>. Degas painted women at their toilette dozens of times, studying the body's natural movements during routine grooming." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this piece. His focus on <strong>women's daily rituals</strong> gave his late work an intimacy that set him apart from other <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>." },
    { question: "What technique did Degas use?", answer: "Degas built form through <strong>overlapping pastel strokes</strong>, creating rich textures. His deteriorating eyesight pushed him toward bolder, more expressive mark-making in his later years." }
  ],
  'edgar-degas-woman-on-a-terrace-young-woman-and-ibis': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The Met holds over 100 works by Degas." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young woman on a terrace with an ibis</strong>. Painted around 1867, it reflects Degas's early interest in <strong>unusual compositions</strong> and exotic subjects." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this early work. Before focusing on dancers and bathers, he experimented with <strong>history painting and genre scenes</strong> influenced by his Italian studies." }
  ],
  'edgar-degas-three-jockeys': [
    { question: "Where is Three Jockeys displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>. The museum's Degas collection spans his full career." },
    { question: "What does this work depict?", answer: "The scene shows <strong>three jockeys on horseback</strong>. Degas was obsessed with <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horse</strong></a> racing, attending the Longchamp racecourse regularly and painting hundreds of equestrian subjects." },
    { question: "Who created Three Jockeys?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this pastel. Along with ballet, <strong>horse racing</strong> was his signature subject, letting him study bodies in motion from unusual angles." }
  ],
  'edgar-degas-self-portrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The Orsay holds the world's largest collection of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> art." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> painted this around 1855, when he was about 21. His <strong>early self-portraits</strong> show the careful technique he learned studying Old Masters in Italy." },
    { question: "What style is this painting?", answer: "This early work is <strong>academic realism</strong>, before Degas developed his mature style. The somber palette and careful modeling reflect his admiration for <strong>Ingres and Renaissance portraiture</strong>." }
  ],
  'edgar-degas-three-dancers-in-pink': [
    { question: "Where is Three Dancers in Pink?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> in Ohio." },
    { question: "What does this work depict?", answer: "The scene shows <strong>three ballet dancers in <a href=\"https://luxurywallart.com/collections/pink-wall-art\" target=\"_blank\" rel=\"noopener\">pink</a> tutus</strong>. Degas painted dancers over 1,500 times, exploring movement, light on fabric, and the physical reality behind the stage glamour." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this pastel. He had <strong>backstage access at the Paris Opéra</strong>, letting him observe dancers practicing, stretching, and resting between performances." }
  ],
  'edgar-degas-study-of-gentile-bellini': [
    { question: "Where is this drawing?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
    { question: "What does this work depict?", answer: "It's a <strong>study after Gentile Bellini</strong>, the 15th-century Venetian painter. Degas copied Old Masters extensively during his years in Italy, building the draftsmanship that anchored his later work." },
    { question: "Who made this study?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> drew this during his Italian studies in the late 1850s. He spent three years copying <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> works in Rome, Florence, and Naples." }
  ],
  'edgar-degas-the-dance-lesson': [
    { question: "Where is The Dance Lesson?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>ballet class in session</strong>. Degas captured dancers adjusting their shoes, stretching, and waiting, not just performing. He was drawn to the <strong>labor behind the art</strong>." },
    { question: "Who painted The Dance Lesson?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work. His dance paintings made up roughly <strong>half his total output</strong>, making ballet synonymous with his name." }
  ],
  'edgar-degas-woman-at-her-toilette': [
    { question: "Where is this work displayed?", answer: "This pastel is at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>, which holds many of Degas's finest pastels." },
    { question: "What does this work depict?", answer: "It shows a <strong>woman at her toilette</strong>, brushing or drying herself. Degas exhibited a group of these nudes in 1886, shocking critics with their <strong>frank, unidealized approach</strong> to the female body." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this pastel. He described his bathers as women seen <strong>\"through a keyhole\"</strong>, observed without posing or performing for the viewer." }
  ],
  'edgar-degas-sitting-woman-drying-herself': [
    { question: "What does this work depict?", answer: "The scene shows a <strong>seated woman drying herself after bathing</strong>. Degas's late bathers use bold pastel strokes that dissolve the figure's edges into <strong>pure color and light</strong>." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this pastel. His late work pushed <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> toward abstraction, with forms built from increasingly <strong>loose, expressive marks</strong>." },
    { question: "What medium is this?", answer: "Degas worked in <strong>pastel on paper</strong>. He developed unique techniques like steaming pastels and layering fixative between coats, creating surfaces with unusual <strong>depth and luminosity</strong>." }
  ],
  'edgar-degas-the-child-in-blue': [
    { question: "What does this painting depict?", answer: "The portrait shows a <strong>child dressed in <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\">blue</a></strong>. Degas painted children rarely, making this an uncommon subject in his body of work." },
    { question: "Who painted The Child in Blue?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this portrait. Though best known for dancers and bathers, he painted <strong>portraits throughout his career</strong>, often of family and friends." },
    { question: "What style is this painting?", answer: "It reflects Degas's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> approach to portraiture: <strong>informal poses, natural light, and loose brushwork</strong> that captures personality over precise likeness." }
  ],
  'edgar-degas-the-toilette': [
    { question: "Where is The Toilette displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, part of its extensive collection of French Impressionist works on paper." },
    { question: "What does this work depict?", answer: "It shows a <strong>woman at her toilette</strong>, one of Degas's most repeated subjects. His bathers bend, stretch, and twist in poses that feel <strong>completely natural and unposed</strong>." },
    { question: "Who created The Toilette?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> made this work. He showed these nudes at the final <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> exhibition in 1886, where critics called them both <strong>daring and cruel</strong>." }
  ],
  'edouard-vuillard-the-green-interior-or-figure-in-front-of-a-window-': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>figure standing before a window with drawn curtains</strong> in a <a href=\"https://luxurywallart.com/collections/green-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>green</strong></a> interior. Vuillard dissolved figures into their domestic surroundings, making rooms feel alive." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this painting. A founding member of the <strong>Nabis group</strong>, he turned ordinary rooms into flattened, decorative compositions influenced by Japanese prints." }
  ],
  'edouard-vuillard-madame-vuillard-at-table': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>Vuillard's mother seated at a table</strong>. She was his most frequent subject, appearing in hundreds of paintings throughout his career." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this intimate scene. He lived with his mother until her death in 1928, painting her <strong>daily routines</strong> with quiet devotion." },
    { question: "What style is this painting?", answer: "It's a <strong>Nabis-influenced interior</strong>. Vuillard's domestic scenes flatten space and blend figures into patterned wallpaper and textiles, creating surfaces that feel more like <strong>tapestry than perspective</strong>." }
  ],
  'edouard-vuillard-young-woman-in-bed': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>young woman lying in bed</strong>. Vuillard's intimate interiors capture quiet, private moments with a flattened style that merges figure and fabric into a single decorative surface." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this piece. He was part of the <strong>Nabis</strong>, a Post-Impressionist group that embraced flat color and decorative pattern over naturalistic depth." }
  ],
  'edouard-vuillard-selfportrait': [
    { question: "What does this self-portrait show?", answer: "Vuillard depicts himself with the same <strong>muted tones and flattened forms</strong> he applied to his domestic interiors. His self-portraits are rare compared to his many paintings of family and friends." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> (1868-1940) created this work. He was a quiet, private artist who lived with his mother and rarely sought the spotlight." },
    { question: "What movement did Vuillard belong to?", answer: "He co-founded the <strong>Nabis</strong>, alongside Bonnard and Denis. The name means \"prophets\" in Hebrew. They championed <strong>flat color, decorative pattern</strong>, and the idea that a painting is first a surface covered with colors." }
  ],
  'edouard-vuillard-seated-woman-dressed-in-black': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman seated in a dark dress</strong>. Vuillard's figures often merge with their surroundings, the <a href=\"https://luxurywallart.com/collections/black-and-white-artwork\" target=\"_blank\" rel=\"noopener\"><strong>black</strong></a> clothing blending into shadows and furniture." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this intimate portrait. His approach to figure painting dissolves the boundary between <strong>person and interior space</strong>." },
    { question: "What style is this painting?", answer: "It reflects the <strong>Nabis aesthetic</strong>: flattened forms, muted colors, and decorative patterning. Vuillard turned everyday domestic life into something resembling a <strong>quiet visual poem</strong>." }
  ],
  'edouard-vuillard-the-little-restaurant': [
    { question: "Where is The Little Restaurant?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/dallas-museum-of-art\"><strong>Dallas Museum of Art</strong></a> in Texas." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>small restaurant interior</strong>. Vuillard occasionally painted public spaces with the same intimate attention he gave domestic rooms, capturing atmosphere through <strong>pattern and muted color</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this scene. His Nabis training taught him to see every surface as <strong>decoration</strong>, turning a restaurant into a composition of overlapping textures." }
  ],
  'edouard-vuillard-woman-brushing-a-garment': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman brushing a garment</strong>. Vuillard's mother was a seamstress, and fabric, textiles, and the work of dressmaking appear throughout his paintings." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this domestic scene. Growing up in his mother's <strong>dressmaking workshop</strong> shaped his lifelong fascination with patterns, fabrics, and interior spaces." },
    { question: "What style is this painting?", answer: "It's a <strong>Nabis interior</strong>. Vuillard's flattened compositions treat the human figure and surrounding textiles as equally important elements in a <strong>unified decorative surface</strong>." }
  ],
  'edouard-vuillard-madame-vuillard-seated': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>Vuillard's mother seated</strong>, her figure merging into the patterned room around her. She modeled for him hundreds of times over four decades." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> painted his mother repeatedly. Their <strong>close domestic life</strong> became the core subject of his art, giving his work an unusual emotional warmth." },
    { question: "What movement did Vuillard belong to?", answer: "He was a key member of the <strong>Nabis</strong>, a Post-Impressionist group active in the 1890s. Their influence on <strong>decorative arts, theater design, and interior painting</strong> extended well beyond easel painting." }
  ],
  'edouard-vuillard-the-flowered-dress': [
    { question: "Where is The Flowered Dress?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil\"><strong>MASP</strong></a> in São Paulo, Brazil. MASP holds one of the strongest European art collections in Latin America." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman wearing a flowered dress</strong>. Vuillard loved painting <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> patterns on fabric, wallpaper, and upholstery, weaving them into unified decorative surfaces." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a> created this piece. His Nabis-period paintings transform <strong>pattern and texture</strong> into the true subject, with figures serving as anchors within richly decorated spaces." }
  ],
  'edvard-munch-view-over-the-rover-at-stcloud': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/munch-museum\"><strong>Munch Museum</strong></a> in Oslo, Norway, which holds the largest collection of Munch's work." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>view over the river at Saint-Cloud</strong>, near Paris. Munch painted this during his time in France around 1890, shortly after <strong>his father's death</strong>, which deeply affected him." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a> created this early landscape. His Paris period exposed him to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, both of which shaped his mature <strong>Expressionist</strong> style." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
