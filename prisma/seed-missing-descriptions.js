const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const descriptions = {
  // ============ VAN GOGH ============
  'le-moulin-de-la-galette-van-gogh': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this view of the famous Montmartre windmill in 1886, shortly after arriving in Paris. The work captures <strong>Le Moulin de la Galette</strong>, a popular dance hall and café that attracted artists, writers, and working-class Parisians. Van Gogh's brushwork here shows the influence of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, which he encountered through his brother Theo's art dealing connections.</p>
<p>The painting depicts the windmill against an overcast Parisian sky, with figures walking along the dusty paths of Montmartre. This was one of several views Van Gogh made of the neighborhood's windmills, which were fast disappearing as the city expanded. The <strong>earthy palette</strong> of browns and grays reflects his Dutch training, though lighter touches hint at the vibrant colors he would soon embrace.</p>`,
    faqs: [
      { question: "Where can I see Le Moulin de la Galette by Van Gogh?", answer: "Several versions exist in different collections. Van Gogh painted <strong>multiple views</strong> of the Montmartre windmills during 1886. Check with the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam and other major collections for current locations." },
      { question: "What artistic movement influenced this painting?", answer: "Van Gogh painted this during his Paris period when he was heavily influenced by <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>. The looser brushwork and lighter palette show his move away from the darker Dutch style of his earlier work." },
      { question: "What is Le Moulin de la Galette?", answer: "It was a famous <strong>windmill turned dance hall</strong> in the Montmartre district of Paris. The venue attracted artists including Renoir, Toulouse-Lautrec, and Van Gogh, who all painted scenes there during the late 1800s." }
    ]
  },

  'self-portrait-1889': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> created this intense self-portrait in September 1889 at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence. He painted it shortly after recovering from a severe mental episode, and it shows the artist in his characteristic <strong>blue smock</strong> against swirling blue-green patterns. The painting now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>
<p>Van Gogh made over 30 self-portraits during his decade-long artistic career. This particular work is notable for its <strong>psychological intensity</strong>: the artist's gaze appears both vulnerable and determined. The swirling background reflects the turbulent mental state he experienced during his asylum stay, while the controlled rendering of his features shows remarkable technical discipline. The dominant <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue tones</strong></a> create a melancholic yet compelling atmosphere.</p>`,
    faqs: [
      { question: "Where can I see Van Gogh's Self-Portrait (1889)?", answer: "This painting is displayed at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, France. It's one of the museum's most recognized works in their <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> collection." },
      { question: "When did Van Gogh paint this self-portrait?", answer: "Van Gogh painted this in <strong>September 1889</strong> while staying at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, France. He had voluntarily admitted himself following his mental breakdown in Arles." },
      { question: "How many self-portraits did Van Gogh paint?", answer: "Van Gogh created over <strong>30 self-portraits</strong> between 1886 and 1889. He used himself as a subject partly out of necessity, as he couldn't afford to pay models regularly." }
    ]
  },

  'self-portrait-with-grey-felt-hat': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this self-portrait during the winter of 1887-1888 in Paris. The work shows the artist wearing a <strong>grey felt hat</strong>, his red beard neatly trimmed, against a background of energetic, radiating brushstrokes. The painting belongs to the <a href="/apps/masterpieces/museum/van-gogh-museum"><strong>Van Gogh Museum</strong></a> in Amsterdam.</p>
<p>This portrait demonstrates Van Gogh's absorption of <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> and Pointillist techniques he learned in Paris. The <strong>short, directional brushstrokes</strong> create movement across the entire canvas, with the background strokes seeming to emanate outward from the figure. The color palette combines complementary oranges and blues, showing Van Gogh's growing mastery of color theory.</p>`,
    faqs: [
      { question: "Where is Van Gogh's Self-Portrait with Grey Felt Hat?", answer: "This painting is part of the permanent collection at the <a href='/apps/masterpieces/museum/van-gogh-museum'><strong>Van Gogh Museum</strong></a> in Amsterdam, Netherlands. It's one of several self-portraits the museum holds." },
      { question: "What technique did Van Gogh use in this painting?", answer: "Van Gogh employed a <strong>Pointillist-influenced technique</strong> with short, directional brushstrokes. This style shows the influence of artists like Seurat and Signac, whom he met during his Paris period." },
      { question: "What colors dominate this self-portrait?", answer: "The painting features <strong>complementary oranges and blues</strong>, with the artist's reddish beard and hat contrasting against the cool blue-green background. This reflects Van Gogh's study of color theory." }
    ]
  },

  'sorrow': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> created this powerful drawing in April 1882 during his time in The Hague. The work depicts <strong>Sien Hoornik</strong>, a pregnant prostitute with whom Van Gogh lived and whom he hoped to rescue from her difficult circumstances. She sits hunched over, her face buried in her arms, embodying complete despair.</p>
<p>Van Gogh considered this one of his best figure drawings and made several versions. He inscribed one with a quote: "How can there be on earth a woman alone, abandoned?" The stark honesty of the image reflects Van Gogh's deep empathy for society's outcasts. Though he worked primarily in pencil and chalk for this piece, the <strong>emotional intensity</strong> prefigures the powerful expression of his later painted works.</p>`,
    faqs: [
      { question: "Who is depicted in Van Gogh's Sorrow?", answer: "The drawing shows <strong>Sien Hoornik</strong> (Clasina Maria Hoornik), a woman Van Gogh lived with in The Hague from 1882-1883. She was a seamstress and prostitute whom Van Gogh tried to help." },
      { question: "What medium did Van Gogh use for Sorrow?", answer: "Sorrow is a <strong>drawing in pencil and chalk</strong>, not a painting. Van Gogh made several versions, considering it among his finest figure studies from his early Dutch period." },
      { question: "When did Van Gogh create Sorrow?", answer: "Van Gogh created this drawing in <strong>April 1882</strong> while living in The Hague. It was during an early phase of his artistic career, before he moved to Paris and developed his colorful style." }
    ]
  },

  'the-church-at-auvers': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this striking view of the church at Auvers-sur-Oise in June 1890, just weeks before his death. The Gothic structure dominates the canvas, rendered with <strong>thick, swirling brushstrokes</strong> that give the building an almost living quality. The painting hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>
<p>The church appears to twist against a <strong>deep cobalt sky</strong>, with two paths diverging in the foreground and a solitary figure walking away. Many art historians see symbolic meaning in this composition, perhaps reflecting Van Gogh's complicated relationship with religion and his sense of being at a crossroads. The vibrant <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> sky contrasts dramatically with the darker building, creating the unsettling atmosphere characteristic of his final works.</p>`,
    faqs: [
      { question: "Where is Van Gogh's Church at Auvers displayed?", answer: "The painting is displayed at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. It's one of the key works from Van Gogh's final, highly productive period at Auvers-sur-Oise." },
      { question: "When did Van Gogh paint The Church at Auvers?", answer: "Van Gogh painted this in <strong>June 1890</strong>, approximately six weeks before his death on July 29, 1890. He was living in Auvers-sur-Oise under the care of Dr. Paul Gachet." },
      { question: "What makes this painting significant?", answer: "It's a major work from Van Gogh's <strong>final creative period</strong> and shows his distinctive style at its most expressive. The distorted architecture and intense colors have made it one of his most recognizable images." }
    ]
  },

  'the-olive-trees': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this expressive landscape of olive trees in June 1889 while staying at the Saint-Rémy asylum. The gnarled trees writhe beneath a turbulent sky, their <strong>twisted forms</strong> echoing the artist's emotional state. This version belongs to the <a href="/apps/masterpieces/museum/moma"><strong>Museum of Modern Art (MoMA)</strong></a> in New York.</p>
<p>Van Gogh created at least 15 paintings of olive groves during his year in Saint-Rémy, finding spiritual meaning in these ancient trees. He wrote to his brother Theo that "the rustle of the olive grove has something very intimate, immensely old about it." The <strong>swirling brushwork</strong> and vivid contrasts between the silvery-green foliage and the dramatic sky demonstrate Van Gogh's mature <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> style.</p>`,
    faqs: [
      { question: "Where can I see Van Gogh's The Olive Trees?", answer: "This painting is in the collection of the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York City. Van Gogh made multiple olive tree paintings; others are in different museums." },
      { question: "Why did Van Gogh paint olive trees?", answer: "Van Gogh found <strong>spiritual significance</strong> in olive trees during his time in Provence. He painted at least 15 versions, viewing them as symbols of endurance and connecting them to biblical themes." },
      { question: "What style is The Olive Trees painted in?", answer: "The painting exemplifies Van Gogh's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> style with thick, rhythmic brushstrokes and expressive color. The swirling forms became a hallmark of his Saint-Rémy period." }
    ]
  },

  'wheat-field-with-cypresses': {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this iconic landscape in June 1889 during his stay at the Saint-Rémy asylum. A tall <strong>dark cypress</strong> rises like a flame against a turbulent sky filled with swirling clouds. The painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>
<p>Van Gogh was captivated by cypress trees, describing them as "beautiful as regards lines and proportions, like an Egyptian obelisk." He made several versions of this composition, considering it one of his best summer landscapes. The golden wheat field, the dark vertical cypress, and the <strong>dynamic sky</strong> create a powerful visual rhythm. The thick impasto and expressive brushwork demonstrate Van Gogh's ability to transform observed nature into emotional experience.</p>`,
    faqs: [
      { question: "Where is Wheat Field with Cypresses displayed?", answer: "This version is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. Van Gogh made three versions of this composition; others are at the Met in New York." },
      { question: "Why did Van Gogh paint cypress trees?", answer: "Van Gogh was fascinated by cypresses, comparing their shape to <strong>Egyptian obelisks</strong>. He found their dark, flame-like forms visually compelling and wanted to create cypress paintings like his sunflower series." },
      { question: "What colors dominate this painting?", answer: "The painting features a striking contrast between the <a href='https://luxurywallart.com/collections/gold-art' target='_blank' rel='noopener'><strong>golden yellow</strong></a> wheat field, the dark green cypress, and the <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> and white swirling sky." }
    ]
  },

  // ============ MONET ============
  'garden-at-sainte-adresse': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this vibrant garden scene in 1867 at his family's summer home on the Normandy coast. The composition shows <strong>two terraces</strong> overlooking the sea, with family members seated among colorful flower beds while ships pass on the horizon. The painting now belongs to the Metropolitan Museum of Art.</p>
<p>This early work already shows Monet's gift for capturing light and atmosphere. The <strong>bold horizontal bands</strong> of sky, sea, garden, and foreground create a structured composition unusual for the artist. The brilliant red and yellow flowers, the French flags snapping in the breeze, and the sparkling water demonstrate his emerging <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> approach to color and light.</p>`,
    faqs: [
      { question: "Where can I see Monet's Garden at Sainte-Adresse?", answer: "This painting is in the collection of the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York City, where it's displayed in the European Paintings galleries." },
      { question: "Who are the people in the painting?", answer: "The figures include Monet's <strong>father and aunt</strong> seated in the foreground, and his cousin Jeanne-Marguerite Lecadre standing by the fence. It's essentially a family portrait in a garden setting." },
      { question: "What art movement does this painting represent?", answer: "While painted before <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> was officially named, it shows Monet's developing interest in light effects and outdoor scenes that would define the movement." }
    ]
  },

  'gare-saint-lazare': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this dramatic view of the Gare Saint-Lazare train station in 1877. <strong>Steam and smoke</strong> fill the glass-roofed station, partially obscuring the locomotives and creating an atmospheric veil of blues and grays. The painting is part of a series Monet made of this modern Parisian landmark.</p>
<p>Monet received special permission to set up his easel inside the station, and reportedly asked the stationmaster to delay trains so he could capture specific steam effects. This embrace of <strong>modern industrial subjects</strong> was typical of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painters who sought to depict contemporary life. The way light filters through steam demonstrates Monet's lifelong fascination with atmospheric effects.</p>`,
    faqs: [
      { question: "How many paintings did Monet make of Gare Saint-Lazare?", answer: "Monet painted <strong>twelve canvases</strong> of the Gare Saint-Lazare in 1877. The series explored different lighting conditions and viewpoints within the station." },
      { question: "Why did Monet paint train stations?", answer: "Monet and the <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionists</strong></a> were interested in depicting <strong>modern life</strong>. The train station represented technological progress and offered fascinating effects of steam, light, and iron architecture." },
      { question: "What technique did Monet use?", answer: "Monet used rapid, <strong>broken brushstrokes</strong> to capture the fleeting effects of steam and light. The loose handling creates the impression of atmosphere in motion." }
    ]
  },

  'haystacks-at-sunset': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of haystacks in the frosty fields near Giverny during the winter of 1890-1891. The <strong>setting sun</strong> bathes the haystacks in warm orange and pink light, contrasting with the cool blue shadows on the snow. This is one of approximately 25 paintings in Monet's celebrated Haystacks series.</p>
<p>Monet worked on multiple canvases simultaneously, switching between them as the light changed throughout the day. He became obsessed with capturing how the same subject could look completely different under varying <strong>atmospheric conditions</strong>. The series was a critical and commercial success, helping establish Monet's reputation as the leader of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>`,
    faqs: [
      { question: "How many haystack paintings did Monet create?", answer: "Monet painted approximately <strong>25 haystack canvases</strong> between 1890 and 1891. The series explored how light and weather transformed the same subject throughout seasons and times of day." },
      { question: "Why did Monet paint haystacks repeatedly?", answer: "Monet wanted to capture how <strong>light and atmosphere</strong> transform ordinary subjects. The haystacks near his Giverny home provided a constant form that let him focus purely on changing conditions." },
      { question: "What art movement do the Haystacks represent?", answer: "The Haystacks series is a landmark of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>, demonstrating the movement's interest in light, color, and perception over traditional subject matter." }
    ]
  },

  'houses-of-parliament-london': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this atmospheric view of the Houses of Parliament from across the Thames during his London visits between 1899 and 1904. The Gothic architecture dissolves into <strong>mist and fog</strong>, with the setting sun casting purple and orange reflections across the water. Monet made over 100 paintings of London during these trips.</p>
<p>Working from the balcony of St. Thomas's Hospital, Monet captured the famous <strong>London fog</strong>, which he found endlessly fascinating. He later finished many of these canvases in his Giverny studio, working from memory and his own color notations. The series demonstrates his mature <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> technique at its most atmospheric.</p>`,
    faqs: [
      { question: "How many London paintings did Monet create?", answer: "Monet created over <strong>100 paintings</strong> of London during his visits between 1899 and 1904, including views of the Houses of Parliament, Charing Cross Bridge, and Waterloo Bridge." },
      { question: "Where did Monet paint from in London?", answer: "Monet painted views of Parliament from <strong>St. Thomas's Hospital</strong> across the Thames. He also worked from the Savoy Hotel for his bridge paintings." },
      { question: "Why was Monet fascinated by London fog?", answer: "Monet found the <strong>London fog</strong> created extraordinary color effects as it filtered sunlight. He wrote that without the fog, London wouldn't be beautiful, praising how it gave the city its magnificent atmosphere." }
    ]
  },

  'la-grenouillere': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this lively scene at La Grenouillère in 1869. The popular bathing spot on the Seine attracted Parisians seeking leisure on summer weekends. Monet and Renoir painted side by side here, and art historians consider these works among the <strong>first true Impressionist paintings</strong>.</p>
<p>The scene captures bathers, rowboats, and the floating café known as the "camembert" for its round shape. Monet's <strong>rapid brushwork</strong> breaks the water's surface into patches of reflected color, a revolutionary technique at the time. The dappled light filtering through trees and dancing on water demonstrates the artist's emerging interest in capturing fleeting visual impressions that would define <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>`,
    faqs: [
      { question: "What was La Grenouillère?", answer: "La Grenouillère was a popular <strong>bathing and boating spot</strong> on the Seine river near Paris. The name means 'The Frog Pond,' referring to the women who frequented it, called 'grenouilles' (frogs) in slang." },
      { question: "Who else painted La Grenouillère?", answer: "<a href='/apps/masterpieces/artist/pierre-auguste-renoir'><strong>Pierre-Auguste Renoir</strong></a> painted alongside Monet at La Grenouillère in 1869. Their similar compositions from this day are considered foundational works of Impressionism." },
      { question: "Why is this painting historically important?", answer: "Art historians consider La Grenouillère paintings among the <strong>first true Impressionist works</strong>. The broken brushwork depicting light on water became a defining technique of the movement." }
    ]
  },

  'poppies-at-argenteuil': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this beloved landscape in 1873 near his home in Argenteuil. A woman and child, likely his wife Camille and son Jean, walk through a field dotted with <strong>brilliant red poppies</strong>. A second pair of figures appears on the hilltop, creating a gentle sense of movement through the scene. The painting belongs to the Musée d'Orsay.</p>
<p>The <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>vivid red</strong></a> poppies scattered across the green meadow create a vibrant color contrast that captures the essence of a summer day. Monet's loose brushwork suggests the flowers swaying in the breeze rather than defining them precisely. This accessible, joyful image has become one of the most recognized works of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Monet's Poppies at Argenteuil?", answer: "This painting is displayed at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, where it's one of the museum's most popular Impressionist works." },
      { question: "Who are the figures in the painting?", answer: "The woman and child are believed to be Monet's <strong>wife Camille and son Jean</strong>. Monet often included his family in his landscape paintings during the Argenteuil years." },
      { question: "What makes this painting significant?", answer: "Poppies at Argenteuil captures the essence of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>: a fleeting moment of beauty, painted outdoors with visible brushstrokes and vibrant color." }
    ]
  },

  'rouen-cathedral': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of Rouen Cathedral's west façade in 1894. The ancient Gothic stonework appears to dissolve in <strong>golden afternoon light</strong>, its architectural details suggested rather than defined. This is one of over 30 paintings Monet made of the cathedral between 1892 and 1894.</p>
<p>Working from a rented room across the square, Monet painted the same view repeatedly under different lighting conditions. The series demonstrates his conviction that color and light, not permanent form, constitute our visual experience. The <strong>thick impasto</strong> surface mimics the textured stone while capturing the shimmering effects of sunlight. The Rouen Cathedral series represents a peak of Monet's <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> exploration.</p>`,
    faqs: [
      { question: "How many Rouen Cathedral paintings did Monet create?", answer: "Monet painted over <strong>30 views</strong> of Rouen Cathedral's west façade between 1892 and 1894, showing it at different times of day and in various weather conditions." },
      { question: "Why did Monet paint the same building repeatedly?", answer: "Monet wanted to show that our perception of objects depends on <strong>light and atmosphere</strong>, not the objects themselves. The cathedral's unchanging form let him isolate these effects of light and color." },
      { question: "Where are the Rouen Cathedral paintings displayed?", answer: "The series is dispersed across many museums worldwide, including the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a>, the Met, and others. No single museum holds the complete set." }
    ]
  },

  'san-giorgio-maggiore-at-dusk': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this atmospheric view of Venice in 1908 during his only visit to the city. The church of <strong>San Giorgio Maggiore</strong> rises as a silhouette against a sky blazing with sunset colors, its reflection shimmering in the lagoon waters. Monet was 68 years old but produced some of his most vibrant work during this trip.</p>
<p>Monet painted approximately 37 canvases during his three months in Venice, working from his hotel and from a gondola. The <a href="https://luxurywallart.com/collections/purple-paintings" target="_blank" rel="noopener"><strong>purple</strong></a>, pink, and <a href="https://luxurywallart.com/collections/orange-art" target="_blank" rel="noopener"><strong>orange</strong></a> sky demonstrates his mature mastery of color. He later refined these paintings in his Giverny studio, though he considered Venice views among his most difficult subjects.</p>`,
    faqs: [
      { question: "When did Monet visit Venice?", answer: "Monet visited Venice <strong>only once</strong>, in autumn 1908, at age 68. He spent three months painting and produced approximately 37 canvases during his stay." },
      { question: "What is San Giorgio Maggiore?", answer: "San Giorgio Maggiore is a <strong>16th-century church</strong> on an island of the same name in the Venetian lagoon. Its distinctive silhouette has been painted by many artists." },
      { question: "What style characterizes Monet's Venice paintings?", answer: "Monet's Venice works show his late <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> style at its most atmospheric, with forms dissolving into light and color reflected in the lagoon waters." }
    ]
  },

  'japanese-bridge': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of the Japanese bridge in his Giverny garden in 1899. The arched wooden bridge spans his <strong>water lily pond</strong>, reflected in the still water below. Weeping willows and water plants frame the composition in soft greens and blues. This is one of numerous versions Monet painted of this beloved subject.</p>
<p>Monet designed the water garden himself, diverting a stream to create the pond and importing Japanese aquatic plants. The footbridge was painted green in the Japanese style. He would paint this scene repeatedly over the next two decades, watching his garden mature and exploring how light transformed it at different times and seasons. These garden paintings became central to his <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> legacy.</p>`,
    faqs: [
      { question: "Where was Monet's Japanese bridge?", answer: "The bridge was part of Monet's <strong>water garden at Giverny</strong>, which he designed and cultivated from 1893 until his death in 1926. The garden is now a museum and can be visited." },
      { question: "How many Japanese bridge paintings did Monet create?", answer: "Monet painted the bridge <strong>multiple times</strong> between 1899 and the 1920s. The earlier versions are more detailed; later ones become increasingly abstract as his eyesight declined." },
      { question: "Why did Monet paint his garden?", answer: "Monet said, 'My garden is my most beautiful masterpiece.' He created it specifically to paint, designing views and planting with an artist's eye for color and composition." }
    ]
  },

  'woman-with-a-parasol': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this dynamic figure study in 1875, capturing his wife Camille and their seven-year-old son Jean on a windy summer day. Camille stands atop a grassy hill, her <strong>white dress billowing</strong> in the breeze, holding a green parasol. The painting conveys a sense of movement and spontaneity that defines <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>
<p>Monet painted this quickly, likely in a single outdoor session, using rapid brushstrokes to capture the fleeting moment. The low viewpoint, looking up at the figures against a cloudy sky, creates a monumental feeling despite the intimate subject. The painting is now at the National Gallery of Art in Washington, where it remains one of the most beloved <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> portraits.</p>`,
    faqs: [
      { question: "Who is the woman in this painting?", answer: "The woman is <strong>Camille Doncieux</strong>, Monet's first wife. The child is their son Jean, who was seven years old at the time. Camille died just four years later in 1879." },
      { question: "Where can I see this painting?", answer: "The painting is at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C. It's one of the museum's most popular Impressionist works." },
      { question: "What makes this painting distinctive?", answer: "The low viewpoint, the sense of <strong>movement in the wind</strong>, and the quick, spontaneous brushwork make this one of Monet's most dynamic figure paintings and a quintessential Impressionist image." }
    ]
  },

  // ============ PICASSO ============
  'blue-nude': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> created this melancholic figure study in 1902 during his Blue Period. A nude woman sits hunched forward, her <strong>angular body</strong> rendered in cool blue tones against a stark background. The painting reflects the sadness and poverty Picasso witnessed among the marginalized people of Barcelona and Paris.</p>
<p>The Blue Period (1901-1904) began after Picasso's close friend Carlos Casagemas committed suicide. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>pervading blue palette</strong></a> expresses themes of poverty, isolation, and despair. The elongated, almost skeletal figure in Blue Nude shows influences of El Greco's mannerist style, which Picasso had studied during his formative years in Spain.</p>`,
    faqs: [
      { question: "What was Picasso's Blue Period?", answer: "The Blue Period (1901-1904) was an early phase when Picasso painted primarily in <strong>shades of blue and blue-green</strong>. The somber palette reflected themes of poverty, melancholy, and human suffering." },
      { question: "Why did Picasso paint in blue?", answer: "The Blue Period began after the <strong>suicide of his friend</strong> Carlos Casagemas in 1901. The blue palette expressed Picasso's grief and his empathy for society's outcasts and impoverished people." },
      { question: "What style influenced Blue Nude?", answer: "The elongated figure shows influence of <strong>El Greco's mannerist style</strong>, which Picasso encountered in Spain. The angular, expressive distortion would later evolve into Cubism." }
    ]
  },

  'girl-before-a-mirror': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this striking image in 1932, depicting his young mistress Marie-Thérèse Walter gazing into a mirror. The composition shows her face in <strong>profile and frontal view simultaneously</strong>, a signature Cubist technique, while her reflection reveals a darker, more mysterious version of herself. The painting belongs to MoMA in New York.</p>
<p>The work explores themes of identity, vanity, and the hidden self. Marie-Thérèse appears in bright colors on the left, while her mirror image takes on <strong>darker, more shadowy tones</strong>. The bold patterns, strong outlines, and brilliant colors reflect Picasso's engagement with Surrealism during this period. Many scholars see the painting as a meditation on the difference between how we see ourselves and how we truly are.</p>`,
    faqs: [
      { question: "Who is depicted in Girl Before a Mirror?", answer: "The subject is <strong>Marie-Thérèse Walter</strong>, Picasso's young mistress and muse during the early 1930s. She was 22 when this painting was created; Picasso was 50." },
      { question: "Where can I see this painting?", answer: "Girl Before a Mirror is in the collection of the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York City, where it's considered one of their masterpieces." },
      { question: "What style is Girl Before a Mirror?", answer: "The painting combines <a href='/apps/masterpieces/movement/cubism'><strong>Cubist</strong></a> techniques like multiple viewpoints with <a href='/apps/masterpieces/movement/surrealism'><strong>Surrealist</strong></a> symbolism and bold, decorative patterns." }
    ]
  },

  'la-vie': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this large, enigmatic canvas in 1903 during his Blue Period. The composition shows a <strong>nude couple</strong> on the left facing a mother and child on the right, with two additional paintings visible in the background. The work is considered one of the masterpieces of Picasso's early career and hangs at the Cleveland Museum of Art.</p>
<p>X-ray analysis reveals that Picasso originally painted his friend Casagemas (who committed suicide) as the male figure, later changing it to a self-portrait. The painting's title, meaning "Life," suggests an allegory about <strong>love, death, and creativity</strong>. The pervading <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue tones</strong></a> create a somber atmosphere appropriate to these weighty themes.</p>`,
    faqs: [
      { question: "Where can I see La Vie?", answer: "La Vie is displayed at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a> in Ohio, where it's one of the museum's most important paintings." },
      { question: "What does La Vie mean?", answer: "La Vie means '<strong>Life</strong>' in French. The painting is interpreted as an allegory exploring themes of love, creativity, mortality, and the stages of human existence." },
      { question: "Why is this painting significant?", answer: "La Vie is considered the <strong>masterpiece of Picasso's Blue Period</strong>. X-rays revealed he originally painted his deceased friend Casagemas, adding psychological depth to the work." }
    ]
  },

  'portrait-of-dora-maar': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this striking portrait in 1937, depicting the photographer Dora Maar who was his companion and muse at the time. Her face is shown from <strong>multiple angles simultaneously</strong>, a hallmark of Cubism, with sharp, angular features and bold colors. The painting captures both her beauty and her intense, intellectual personality.</p>
<p>Dora Maar (born Theodora Markovitch) was a successful Surrealist photographer when she met Picasso. Their relationship coincided with his work on Guernica, which she documented. Picasso painted Dora many times, often depicting her as a <strong>"weeping woman"</strong> during their turbulent years together. This portrait shows her seated, perhaps in a café, with characteristic red fingernails and dark hair.</p>`,
    faqs: [
      { question: "Who was Dora Maar?", answer: "<strong>Dora Maar</strong> (1907-1997) was a French photographer, painter, and poet who was Picasso's companion from 1936 to 1943. She documented the creation of Guernica and was a successful artist in her own right." },
      { question: "What style is this portrait?", answer: "The portrait uses <a href='/apps/masterpieces/movement/cubism'><strong>Cubist</strong></a> techniques, showing Dora's face from multiple viewpoints simultaneously while maintaining her recognizable features." },
      { question: "Why did Picasso paint Dora Maar often?", answer: "Dora was Picasso's primary muse during the late 1930s and early 1940s. He painted her in <strong>many emotional states</strong>, from serene portraits to the famous 'weeping woman' images." }
    ]
  },

  'science-and-charity': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this large academic work in 1897 when he was just 15 years old. The composition shows a <strong>sick woman in bed</strong>, attended by a doctor taking her pulse and a nun holding a child and offering a drink. The painting won honorable mention at the National Fine Arts Exhibition in Madrid.</p>
<p>Picasso's father, an art teacher, posed as the doctor in this painting, and the artist hired models for the other figures. The subject of illness and death reflects the loss of Picasso's younger sister Conchita to diphtheria three years earlier. While stylistically conventional, the work demonstrates the <strong>remarkable technical skill</strong> Picasso possessed even as a teenager. The painting belongs to the Museu Picasso in Barcelona.</p>`,
    faqs: [
      { question: "How old was Picasso when he painted this?", answer: "Picasso was only <strong>15 years old</strong> when he completed Science and Charity in 1897. It demonstrates his extraordinary technical ability at a young age." },
      { question: "Where can I see Science and Charity?", answer: "The painting is displayed at the <strong>Museu Picasso</strong> in Barcelona, Spain, which holds the most complete collection of Picasso's early work." },
      { question: "Who posed as the doctor?", answer: "Picasso's <strong>father, José Ruiz Blasco</strong>, posed as the doctor. His father was an art teacher who encouraged and trained the young Picasso." }
    ]
  },

  'self-portrait-1901-picasso': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this intense self-portrait in 1901, at the beginning of his Blue Period. At just 20 years old, he depicts himself as gaunt and hollow-cheeked, wearing a <strong>dark coat</strong> against a blue background. The somber palette and psychological intensity mark a dramatic shift from his earlier, more colorful work.</p>
<p>This self-portrait was created shortly after the suicide of Picasso's close friend Carlos Casagemas, an event that deeply affected him and initiated the Blue Period. The young artist appears older than his years, with a <strong>haunted expression</strong> that reflects both personal grief and his identification with society's outcasts. The painting demonstrates how early Picasso developed his ability to convey emotional depth.</p>`,
    faqs: [
      { question: "How old was Picasso in this self-portrait?", answer: "Picasso was <strong>20 years old</strong> when he painted this self-portrait in 1901. Despite his youth, he depicts himself as prematurely aged and world-weary." },
      { question: "What period does this belong to?", answer: "This is an early work of Picasso's <strong>Blue Period</strong> (1901-1904), characterized by somber blue tones and melancholic subjects influenced by his friend's suicide." },
      { question: "What is significant about this self-portrait?", answer: "It shows Picasso's early mastery of <strong>psychological portraiture</strong> and marks his transition from a talented young artist to one capable of profound emotional expression." }
    ]
  },

  'the-old-guitarist': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this haunting image in late 1903-1904, near the end of his Blue Period. An <strong>emaciated, blind man</strong> hunches over his guitar, his elongated body curved around the instrument in an almost protective embrace. The painting hangs at the Art Institute of Chicago, where it's one of their most treasured works.</p>
<p>The figure's distorted proportions echo the style of El Greco, whose work Picasso admired. The <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>monochromatic blue palette</strong></a> emphasizes the guitarist's poverty and isolation. X-ray analysis has revealed that Picasso painted over an earlier composition, a common practice during his financially difficult early years. The painting has become an iconic image of artistic struggle and human resilience.</p>`,
    faqs: [
      { question: "Where can I see The Old Guitarist?", answer: "The painting is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, where it's one of the most popular works in their collection." },
      { question: "What period is The Old Guitarist from?", answer: "It's a late work of Picasso's <strong>Blue Period</strong> (1901-1904), painted in 1903-1904. The blue palette and theme of poverty and suffering are characteristic of this phase." },
      { question: "What's hidden beneath this painting?", answer: "X-rays reveal <strong>earlier compositions underneath</strong>, including a seated woman. Picasso often reused canvases during his poor early years in Paris." }
    ]
  },

  'three-musicians': {
    description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted this monumental work in 1921 at Fontainebleau. Three figures, possibly representing Harlequin, Pierrot, and a monk, play their instruments in a shallow, stage-like space. The <strong>flat, interlocking shapes</strong> create a complex visual puzzle characteristic of Synthetic Cubism. Two versions exist; this one is at MoMA in New York.</p>
<p>The commedia dell'arte characters had appeared in Picasso's work since his Rose Period. Here they're transformed into bold, geometric forms in <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>rich browns</strong></a>, blacks, and accents of blue and white. Despite the abstract treatment, the composition suggests a mysterious, theatrical atmosphere. Many scholars see the work as a culmination of Picasso's <a href="/apps/masterpieces/movement/cubism"><strong>Cubist</strong></a> experiments.</p>`,
    faqs: [
      { question: "Where can I see Three Musicians?", answer: "Picasso made two versions. One is at the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York; the other is at the Philadelphia Museum of Art." },
      { question: "What style is Three Musicians?", answer: "The painting is a masterpiece of <strong>Synthetic Cubism</strong>, characterized by flat, overlapping shapes and collage-like compositions, rather than the fragmented forms of earlier Analytic Cubism." },
      { question: "Who are the three musicians?", answer: "The figures represent <strong>commedia dell'arte characters</strong>: Harlequin (with a diamond pattern), Pierrot (in white), and possibly a Franciscan monk. These theatrical characters appeared throughout Picasso's career." }
    ]
  },

  // ============ OTHER ARTISTS ============
  'self-portrait-28-durer': {
    description: `<p><a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> painted this remarkable self-portrait in 1500, depicting himself at age 28 in a strikingly <strong>Christ-like pose</strong>. He faces the viewer directly, his right hand raised near his chest, with long curling hair framing his solemn face. The painting hangs at the Alte Pinakothek in Munich.</p>
<p>This frontal composition was extremely unusual for portraiture of the time and was typically reserved for images of Christ. Dürer's choice suggests not blasphemy but rather the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> belief that artistic creativity reflected divine creativity. The meticulous rendering of his fur collar and each strand of hair demonstrates the technical mastery that made Dürer the most famous artist of the <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Dürer's Self-Portrait at 28?", answer: "The painting is displayed at the <a href='/apps/masterpieces/museum/alte-pinakothek'><strong>Alte Pinakothek</strong></a> in Munich, Germany, where it's one of the museum's most famous works." },
      { question: "Why is this self-portrait controversial?", answer: "Dürer depicted himself in a <strong>Christ-like frontal pose</strong> typically reserved for religious images. This bold choice reflected Renaissance ideas about the divine nature of artistic creativity." },
      { question: "What technique did Dürer use?", answer: "Dürer used <strong>oil on linden panel</strong> with extremely fine brushwork. The detailed rendering of his fur collar and hair demonstrates his unparalleled technical skill." }
    ]
  },

  'disputation-st-catherine-pinturicchio': {
    description: `<p><a href="/apps/masterpieces/artist/pinturicchio"><strong>Pinturicchio</strong></a> painted this grand fresco in 1494 within the Borgia Apartments of the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>. The scene depicts Saint Catherine of Alexandria debating with pagan philosophers before the Roman Emperor Maxentius. The composition features <strong>richly dressed figures</strong> against an elaborate architectural backdrop.</p>
<p>The fresco is notable for including a portrait of Lucrezia Borgia as Saint Catherine, commissioned by her father Pope Alexander VI. The elaborate costumes, detailed architecture, and gold leaf embellishments demonstrate the lavish decorative style favored by the Borgia court. Pinturicchio's work exemplifies the <strong>decorative brilliance</strong> of the early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> in Rome.</p>`,
    faqs: [
      { question: "Where can I see this fresco?", answer: "The fresco is in the <strong>Borgia Apartments</strong> within the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a>. These rooms were decorated for Pope Alexander VI Borgia." },
      { question: "Who is depicted as Saint Catherine?", answer: "<strong>Lucrezia Borgia</strong>, daughter of Pope Alexander VI, is believed to have posed as Saint Catherine. This was common practice in Renaissance art patronage." },
      { question: "What is the Disputation of Saint Catherine about?", answer: "The scene shows the <strong>legendary debate</strong> where Saint Catherine converted 50 pagan philosophers to Christianity. They were subsequently martyred by Emperor Maxentius." }
    ]
  },

  // Ancient works - brief descriptions
  'balawat-gates': {
    description: `<p>The <strong>Balawat Gates</strong> are massive bronze bands that once decorated the wooden gates of the palace of the Assyrian king Shalmaneser III (858-824 BCE). Now displayed at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, these remarkable reliefs depict military campaigns, sieges, and tribute processions in extraordinary detail.</p>
<p>Discovered in 1878 at ancient Imgur-Enlil (modern Balawat, Iraq), the bands preserve vivid scenes of <strong>Assyrian warfare</strong> and diplomacy. Soldiers march in formation, siege engines attack cities, and conquered peoples present tribute to the king. These images provide invaluable documentation of ancient Near Eastern military technology, costume, and architecture.</p>`,
    faqs: [
      { question: "Where can I see the Balawat Gates?", answer: "The main set of gates is displayed at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London. Additional fragments are held by other museums." },
      { question: "What do the Balawat Gates depict?", answer: "The bronze bands show <strong>Assyrian military campaigns</strong>, including battles, sieges, and tribute processions, providing detailed documentation of ancient warfare." },
      { question: "How old are the Balawat Gates?", answer: "They date to the reign of King <strong>Shalmaneser III</strong>, approximately 858-824 BCE, making them nearly 3,000 years old." }
    ]
  },

  'horse-selene-parthenon': {
    description: `<p>This powerful sculpture of a horse's head originally adorned the east pediment of the <strong>Parthenon</strong> in Athens, created around 438 BCE. It belonged to the chariot of Selene, goddess of the moon, depicted descending below the horizon as dawn broke. The sculpture is now among the Parthenon Marbles at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>
<p>Despite significant weathering, the <strong>exhausted animal's expression</strong> remains extraordinarily powerful. The horse's bulging eyes, flared nostrils, and open mouth convey the strain of having pulled the moon goddess's chariot across the night sky. This naturalistic rendering of animal emotion demonstrates the remarkable achievement of Classical Greek sculptors.</p>`,
    faqs: [
      { question: "Where can I see the Horse of Selene?", answer: "The sculpture is displayed at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London as part of the Parthenon Marbles (Elgin Marbles) collection." },
      { question: "What does this sculpture represent?", answer: "The horse belonged to the <strong>chariot of Selene</strong>, the moon goddess, shown descending at dawn on the Parthenon's east pediment. It complemented the rising horses of Helios (sun god) on the opposite corner." },
      { question: "Why is this sculpture significant?", answer: "The expressive rendering of the <strong>exhausted horse</strong> demonstrates the naturalistic achievement of Classical Greek sculpture and the artistic ambition of the Parthenon's decorative program." }
    ]
  },

  'mausoleum-halicarnassus-sculptures': {
    description: `<p>These sculptures are fragments from the <strong>Mausoleum at Halicarnassus</strong>, one of the Seven Wonders of the Ancient World. Built around 350 BCE for Mausolus, ruler of Caria, the massive tomb gave us the word "mausoleum." The surviving sculptures are displayed at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>
<p>The collection includes portions of the <strong>Amazonomachy frieze</strong> (battle between Greeks and Amazons), colossal statues thought to represent Mausolus and his wife Artemisia, and architectural fragments. Four famous Greek sculptors, including Scopas and Leochares, worked on the monument. These works represent some of the finest surviving examples of <strong>4th-century BCE Greek sculpture</strong>.</p>`,
    faqs: [
      { question: "Where can I see sculptures from the Mausoleum?", answer: "Major fragments are displayed at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London. They were excavated in the 19th century from the site in modern-day Turkey." },
      { question: "What was the Mausoleum at Halicarnassus?", answer: "It was a monumental tomb for <strong>Mausolus</strong>, a ruler of Caria (in modern Turkey), built around 350 BCE. It was considered one of the Seven Wonders of the Ancient World." },
      { question: "Who created these sculptures?", answer: "Four famous Greek sculptors worked on the Mausoleum: <strong>Scopas, Leochares, Bryaxis, and Timotheus</strong>, each responsible for one side of the monument." }
    ]
  },

  'seated-buddha-gandhara': {
    description: `<p>This <strong>seated Buddha</strong> from the Gandhara region (modern Pakistan/Afghanistan) dates to approximately 200 CE. The figure displays the characteristic blend of Greco-Roman and Indian artistic traditions that defined Gandharan Buddhist art. It is displayed at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>
<p>The Buddha sits in meditation with a serene expression, his robes carved with naturalistic folds influenced by Hellenistic sculpture. Gandhara was a crossroads of cultures following Alexander the Great's conquests, and this <strong>fusion style</strong> profoundly influenced how the Buddha would be depicted across Asia. The wavy hair, noble features, and heavy draped robes show clear Classical influence.</p>`,
    faqs: [
      { question: "Where can I see this Buddha sculpture?", answer: "This Gandharan Buddha is displayed at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London in their Asian galleries." },
      { question: "What makes Gandharan art distinctive?", answer: "Gandharan art blends <strong>Greco-Roman and Indian</strong> traditions. The realistic drapery and Classical features reflect Hellenistic influence following Alexander's conquests in the region." },
      { question: "When was this Buddha created?", answer: "This sculpture dates to approximately <strong>200 CE</strong>, during the Kushan period when the Gandhara region was a major center of Buddhist art and culture." }
    ]
  },

  'statue-amenhotep-iii-british': {
    description: `<p>This granite statue depicts <strong>Amenhotep III</strong>, one of ancient Egypt's most powerful pharaohs who ruled during the 18th Dynasty (c. 1390-1352 BCE). The king is shown seated in the traditional pose of Egyptian royalty, wearing the nemes headdress and false beard. The statue is displayed at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>
<p>Amenhotep III's reign marked the height of Egyptian prosperity and artistic achievement. He commissioned more statues of himself than any other pharaoh, and this work demonstrates the refined sculptural style of his era. The <strong>idealized features</strong> and serene expression follow conventions established over millennia of Egyptian royal portraiture.</p>`,
    faqs: [
      { question: "Where can I see this statue?", answer: "The statue of Amenhotep III is displayed at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London in the Egyptian sculpture galleries." },
      { question: "Who was Amenhotep III?", answer: "<strong>Amenhotep III</strong> ruled Egypt from approximately 1390-1352 BCE during the 18th Dynasty. His reign represented the peak of Egyptian power and artistic achievement." },
      { question: "What is the statue made of?", answer: "The statue is carved from <strong>granite</strong>, one of the hardest stones used by Egyptian sculptors. Working this material required exceptional skill and patience." }
    ]
  },
};

async function main() {
  console.log('=== Adding Missing Descriptions ===\n');

  let updated = 0;
  for (const [slug, data] of Object.entries(descriptions)) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: {
        description: data.description,
        faqs: data.faqs,
        updatedAt: new Date()
      }
    });

    if (result.count > 0) {
      console.log(`Updated: ${slug}`);
      updated++;
    } else {
      console.log(`Not found: ${slug}`);
    }
  }

  console.log(`\n=== Complete: ${updated} artworks updated ===`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
