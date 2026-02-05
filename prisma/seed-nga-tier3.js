/**
 * Seed NGA Tier 3 Paintings
 * American masters, Impressionists, and other key works
 */

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const NGA_MUSEUM_ID = "cmkjdx4px00095nnrfyajckdx";

const TIER3_PAINTINGS = [
  // === DALI & SURREALISM ===
  {
    slug: "sacrament-of-the-last-supper-dali",
    title: "The Sacrament of the Last Supper",
    artistSlug: "salvador-dali",
    year: 1955,
    medium: "Oil on canvas",
    dimensions: "166.7 × 267 cm (65.6 × 105.1 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Dali_-_The_Sacrament_of_the_Last_Supper_-_lowres.jpg",
    wikidataId: "Q2295313",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Sacrament_of_the_Last_Supper",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/salvador-dali"><strong>Salvador Dalí</strong></a> spent nine months creating this monumental Last Supper, completed in 1955. Christ sits at the center of a table set within a transparent dodecahedron, the twelve-sided form Plato associated with the universe. The disciples bow their heads, faceless and universal.</p>
<p>Dalí merged Catholic mysticism with his study of mathematics and nuclear physics. The arms of a colossal, half-visible Christ figure spread above the scene, blessing from another dimension. Behind everything, the bay of Port Lligat where Dalí lived glows in dawn light.</p>
<p>The painting is among the most popular at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, drawing visitors who might not otherwise seek out <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> art. Dalí called it "arithmetic and philosophical cosmogony based on the paranoiac sublimity of the number twelve."</p>`,
    faqs: [
      { question: "Where is Dalí's Last Supper displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, where it's one of the most-viewed works. <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> completed it in 1955." },
      { question: "What is the geometric shape in the painting?", answer: "The transparent structure is a dodecahedron, a twelve-sided form. <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> chose it because Plato associated it with the universe, and it has twelve faces for twelve apostles." },
      { question: "Why does the Christ figure have no face?", answer: "The disciples are faceless to represent universal humanity. <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a> wanted viewers to see themselves at the table, not specific historical individuals." }
    ]
  },

  // === WHISTLER ===
  {
    slug: "symphony-in-white-no-1-whistler",
    title: "Symphony in White, No. 1: The White Girl",
    artistSlug: "james-mcneill-whistler",
    year: 1862,
    medium: "Oil on canvas",
    dimensions: "213 × 107.9 cm (83.9 × 42.5 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Whistler_James_Symphony_in_White_no_1_%28The_White_Girl%29_1862.jpg",
    wikidataId: "Q3503287",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Symphony_in_White,_No._1:_The_White_Girl",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/james-mcneill-whistler"><strong>James McNeill Whistler</strong></a> painted his mistress Joanna Hiffernan standing on a bearskin rug in 1862. She wears white against a white curtain, holding a white lily. The near-monochrome palette was revolutionary.</p>
<p>The painting was rejected by the Royal Academy and the Paris Salon, but it became a sensation at the 1863 Salon des Refusés, where it hung near Manet's Olympia. Critics called it "The White Girl" and debated whether it represented innocence or fallen virtue.</p>
<p>Whistler later retitled it Symphony in White to emphasize that subject matter was secondary to tonal harmony. The painting is now at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is Symphony in White, No. 1?", answer: "This pioneering painting by <a href=\"/apps/masterpieces/artist/james-mcneill-whistler\"><strong>Whistler</strong></a> is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Who was the model for The White Girl?", answer: "Joanna Hiffernan was <a href=\"/apps/masterpieces/artist/james-mcneill-whistler\"><strong>Whistler's</strong></a> Irish mistress and frequent model. She posed for many of his most important early works." },
      { question: "Why did Whistler use musical titles?", answer: "<a href=\"/apps/masterpieces/artist/james-mcneill-whistler\"><strong>Whistler</strong></a> believed painting should be like music, valued for its formal qualities rather than storytelling. His 'Symphonies,' 'Nocturnes,' and 'Arrangements' emphasized color and tone over narrative." }
    ]
  },

  // === WINSLOW HOMER ===
  {
    slug: "breezing-up-homer",
    title: "Breezing Up (A Fair Wind)",
    artistSlug: "winslow-homer",
    year: 1876,
    medium: "Oil on canvas",
    dimensions: "61.5 × 97 cm (24.2 × 38.2 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg",
    wikidataId: "Q3747372",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Breezing_Up_(A_Fair_Wind)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> painted this scene of a catboat sailing into Gloucester harbor around 1873-1876. A man and three boys ride the tilting deck, their catch visible in the boat. The title captures both the fresh breeze filling the sail and the optimistic spirit of young America.</p>
<p>Homer worked on the painting for three years, refining the composition through watercolors and sketches. The diagonal of the sail, the spray of the waves, and the leaning figures create dynamic tension balanced by the calm horizon.</p>
<p>This is one of Homer's most beloved paintings and a centerpiece of American art at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where can I see Breezing Up?", answer: "This beloved <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a> painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "What is the boat in Breezing Up?", answer: "It's a catboat, a type of sailboat popular in New England. <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> named it the 'Gloucester' after the Massachusetts fishing port where he painted." },
      { question: "How long did Homer work on this painting?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> spent about three years developing this composition through watercolors and oil sketches before completing the final canvas around 1876." }
    ]
  },
  {
    slug: "right-and-left-homer",
    title: "Right and Left",
    artistSlug: "winslow-homer",
    year: 1909,
    medium: "Oil on canvas",
    dimensions: "71.8 × 122.9 cm (28.3 × 48.4 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/Winslow_Homer_-_Right_and_Left.jpg",
    wikidataId: "Q7333092",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Right_and_Left_(painting)",
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> completed this dramatic painting in 1909, just a year before his death. Two golden-eye ducks have been shot and are frozen in the moment of death, wings spread against a turbulent sea. A hunter's gun barrel is barely visible at the edge.</p>
<p>The title refers to a shooting term for firing both barrels in quick succession. Homer places viewers at sea level, almost in the path of the shot, creating an unsettling intimacy with death. It was his last major oil painting.</p>
<p>This late masterpiece shows Homer at his most powerful, combining his love of nature with an unflinching view of its violence. It hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is Right and Left displayed?", answer: "This late <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> masterpiece is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "What does 'Right and Left' mean?", answer: "It's a hunting term for firing both barrels of a shotgun in quick succession, hitting two birds. <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> shows the moment both ducks are struck." },
      { question: "Was this Homer's last painting?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> completed this in 1909, and it was his last major oil painting. He died in 1910 at his studio in Prouts Neck, Maine." }
    ]
  },

  // === THOMAS EAKINS ===
  {
    slug: "biglin-brothers-racing-eakins",
    title: "The Biglin Brothers Racing",
    artistSlug: "thomas-eakins",
    year: 1872,
    medium: "Oil on canvas",
    dimensions: "61.2 × 91.6 cm (24.1 × 36.1 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Thomas_Eakins%2C_The_Biglin_Brothers_Racing%2C_1872%2C_NGA_50385.jpg",
    wikidataId: "Q20169912",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Biglin_Brothers_Racing",
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/thomas-eakins"><strong>Thomas Eakins</strong></a> was fascinated by rowing and created over a dozen paintings of scullers on Philadelphia's Schuylkill River. This 1872 canvas shows professional oarsmen John and Barney Biglin in a pair-oared shell, their strokes perfectly synchronized.</p>
<p>Eakins combined direct observation with meticulous perspective drawings, calculating reflections and angles with scientific precision. The result is both photographic in its accuracy and poetic in its stillness.</p>
<p>The painting exemplifies Eakins's belief that American artists should paint American life. Rowing was the premier spectator sport of the era, and the Biglin brothers were celebrities. The work is at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is The Biglin Brothers Racing?", answer: "This <a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Eakins</strong></a> rowing scene is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
      { question: "Who were the Biglin Brothers?", answer: "John and Barney Biglin were professional rowers and celebrities in 1870s America. <a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Eakins</strong></a> painted them several times as champions of the popular sport." },
      { question: "Why did Eakins paint so many rowing scenes?", answer: "<a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Eakins</strong></a> was an avid rower himself and fascinated by the mechanics of the sport. He used perspective drawings and mathematics to capture boats and water with scientific accuracy." }
    ]
  },

  // === BIERSTADT ===
  {
    slug: "among-sierra-nevada-bierstadt",
    title: "Among the Sierra Nevada, California",
    artistSlug: "albert-bierstadt",
    year: 1868,
    medium: "Oil on canvas",
    dimensions: "183 × 305 cm (72 × 120 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Bierstadt_-_Among_the_Sierra_Nevada_Mountains_-_1868.jpg",
    wikidataId: "Q4746778",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Among_the_Sierra_Nevada,_California",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/albert-bierstadt"><strong>Albert Bierstadt</strong></a> painted this monumental view of the Sierra Nevada in 1868, working from sketches made during his Western expeditions. At 6 by 10 feet, it overwhelms viewers with the grandeur of the American wilderness.</p>
<p>Bierstadt composed an idealized landscape: mountains rise into luminous mist, a waterfall tumbles into a crystalline lake, and deer graze in Edenic peace. He exhibited the painting throughout Europe, promoting emigration to America.</p>
<p>The painting now hangs at the Smithsonian American Art Museum in Washington, DC, though visitors often associate Bierstadt with the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>'s American collection.</p>`,
    faqs: [
      { question: "Where is Among the Sierra Nevada?", answer: "This <a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Bierstadt</strong></a> masterpiece is at the Smithsonian American Art Museum in Washington, DC—not the National Gallery, though both have important American landscape collections." },
      { question: "Did Bierstadt paint this from life?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Bierstadt</strong></a> created this in his Rome studio from field sketches. He idealized the landscape, combining features that don't exist together in nature." },
      { question: "How big is Among the Sierra Nevada?", answer: "The painting measures 6 by 10 feet (183 × 305 cm). <a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Bierstadt</strong></a> created these massive canvases to immerse viewers in the Western wilderness." }
    ]
  },

  // === FREDERIC CHURCH ===
  {
    slug: "niagara-church",
    title: "Niagara",
    artistSlug: "frederic-edwin-church",
    year: 1857,
    medium: "Oil on canvas",
    dimensions: "101.6 × 229.9 cm (40 × 90.5 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Frederic_Edwin_Church_-_Niagara_Falls_-_WGA04867.jpg",
    wikidataId: "Q5503451",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Niagara_(Frederic_Edwin_Church)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/frederic-edwin-church"><strong>Frederic Edwin Church</strong></a> spent two years perfecting this view of Niagara Falls, completed in 1857. He placed viewers at the edge of the precipice, looking across the Horseshoe Falls with no foreground to provide safe distance. Water rushes toward us and drops into the void.</p>
<p>The painting caused a sensation. Viewers lined up to see it in New York, London, and across America. Church's technique—building up thin glazes to capture the translucent green of the water—was seen as miraculous.</p>
<p>This is arguably the most famous American landscape painting of the 19th century. It hangs at the Corcoran Gallery (now part of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>).</p>`,
    faqs: [
      { question: "Where is Church's Niagara?", answer: "This iconic painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC, as part of the former Corcoran Collection." },
      { question: "Why was Niagara so famous?", answer: "<a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Church's</strong></a> radical viewpoint placed viewers at the edge of the falls with no foreground. Combined with his virtuoso technique, it created an immersive experience unlike any previous landscape." },
      { question: "How did Church capture the water?", answer: "<a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Church</strong></a> used thin oil glazes built up in layers to capture the translucent green of falling water. The technique took him two years to perfect." }
    ]
  },

  // === MORE IMPRESSIONISTS ===
  {
    slug: "luncheon-boating-party-renoir",
    title: "Luncheon of the Boating Party",
    artistSlug: "pierre-auguste-renoir",
    year: 1881,
    medium: "Oil on canvas",
    dimensions: "130.2 × 175.6 cm (51.3 × 69.1 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    wikidataId: "Q1781768",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Luncheon_of_the_Boating_Party",
    searchVolumeTier: 1,
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted this joyous scene at the Maison Fournaise restaurant on the Seine in 1881. Fourteen figures—artists, actresses, a seamstress, and bourgeois gentlemen—linger over the remains of lunch on a sun-dappled terrace.</p>
<p>Renoir included many friends: the woman with the dog is Aline Charigot, his future wife. The man in the straw hat leaning over her is Gustave Caillebotte. The scene captures the leisure culture that <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> celebrated.</p>
<p>The painting is at The Phillips Collection in Washington, DC—not the National Gallery, but often visited on the same trip.</p>`,
    faqs: [
      { question: "Where is Luncheon of the Boating Party?", answer: "This <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> masterpiece is at The Phillips Collection in Washington, DC, not the National Gallery. It's the Phillips Collection's most famous work." },
      { question: "Who are the people in the painting?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> included friends and models: Aline Charigot (his future wife) holds the dog; painter Gustave Caillebotte wears a straw hat; actress Ellen Andrée appears in the group." },
      { question: "Where was this scene painted?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted at the Maison Fournaise, a restaurant on an island in the Seine at Chatou. The building still exists and houses a small museum." }
    ]
  },
  {
    slug: "ballet-rehearsal-degas",
    title: "The Ballet Rehearsal",
    artistSlug: "edgar-degas",
    year: 1873,
    medium: "Oil on canvas",
    dimensions: "65.2 × 81.3 cm (25.7 × 32 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Edgar_Germain_Hilaire_Degas_012.jpg",
    wikidataId: "Q20167476",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Dance_Class_(Degas)",
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> gained special access to the Paris Opera, allowing him to observe ballet rehearsals from backstage. This painting shows dancers practicing under the watchful eye of ballet master Jules Perrot, who leans on his stick in the center.</p>
<p>Degas's viewpoint is unconventional: dancers are cropped by the frame, the floor dominates the composition, and the light is the flat illumination of a rehearsal room, not stage drama. This casualness was revolutionary.</p>
<p>Degas created dozens of ballet scenes over his career. This version is at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
    faqs: [
      { question: "Where is Degas's Ballet Rehearsal?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> painted many ballet scenes. The NGA has several. Check the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> website for current displays." },
      { question: "Why did Degas paint so many ballet scenes?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> had special access to the Paris Opera. He was fascinated by movement, artificial light, and the contrast between the glamour of performance and the hard work of rehearsal." },
      { question: "Who is the man with the stick?", answer: "Jules Perrot was a famous ballet master at the Paris Opera. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> included him in several paintings, always with his distinctive walking stick." }
    ]
  },
  {
    slug: "the-boating-party-cassatt",
    title: "The Boating Party",
    artistSlug: "mary-cassatt",
    year: 1893,
    medium: "Oil on canvas",
    dimensions: "90.2 × 117.5 cm (35.5 × 46.3 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Cassatt_Mary_The_Boating_Party_1893-94.jpg",
    wikidataId: "Q4943284",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Boating_Party",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this bold composition during a summer at Antibes on the French Riviera in 1893. A man rows a boat while a woman holds a child in the stern. The simplified forms and strong colors show the influence of Japanese prints.</p>
<p>Cassatt was the only American to exhibit with the French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a>. Here she pushes beyond Impressionism toward a more modern flatness. The oarsman's dark silhouette creates a powerful diagonal against the Mediterranean blue.</p>
<p>The painting is a highlight of the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> and one of Cassatt's most ambitious works.</p>`,
    faqs: [
      { question: "Where is Mary Cassatt's Boating Party?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, DC. It's one of <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt's</strong></a> most famous works." },
      { question: "Was Mary Cassatt an Impressionist?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> was the only American to exhibit with the French <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>. Degas invited her to join the group in 1877." },
      { question: "Where was The Boating Party painted?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> painted this during a summer stay at Antibes on the French Riviera in 1893. The deep blue Mediterranean is the setting." }
    ]
  },
  {
    slug: "banks-of-the-oise-pissarro",
    title: "The Banks of the Oise at Pontoise",
    artistSlug: "camille-pissarro",
    year: 1873,
    medium: "Oil on canvas",
    dimensions: "38.1 × 55.3 cm (15 × 21.8 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Camille_Pissarro_-_The_Banks_of_the_Oise%2C_near_Pontoise_-_1955.7.1_-_Yale_University_Art_Gallery.jpg",
    wikidataId: "Q20201124",
    searchVolumeTier: 3,
    description: `<p><a href="/apps/masterpieces/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> lived in Pontoise from 1866 to 1883, making the town and its surroundings his primary subject. This view of the Oise River shows his mature <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> style: broken brushwork, natural light, and an everyday scene elevated to art.</p>
<p>Pissarro was the oldest of the Impressionists and the only one to show at all eight of their exhibitions. He mentored younger artists including Cézanne and Gauguin, who came to paint with him at Pontoise.</p>
<p>The <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> holds several Pissarro landscapes from his productive Pontoise period.</p>`,
    faqs: [
      { question: "Where can I see Pissarro's Pontoise paintings?", answer: "The <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> has several <a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> works from his Pontoise years." },
      { question: "Why did Pissarro paint at Pontoise?", answer: "<a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> lived there for nearly 20 years. The rural town north of Paris offered landscapes, river views, and village scenes—the everyday subjects <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> celebrated." },
      { question: "Who studied with Pissarro at Pontoise?", answer: "Both <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> and <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> came to paint with <a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a> at Pontoise, learning his Impressionist techniques." }
    ]
  },

  // === HUDSON RIVER SCHOOL ===
  {
    slug: "kindred-spirits-durand",
    title: "Kindred Spirits",
    artistSlug: "asher-brown-durand",
    year: 1849,
    medium: "Oil on canvas",
    dimensions: "111.8 × 91.4 cm (44 × 36 in)",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Asher_Durand_Kindred_Spirits.jpg",
    wikidataId: "Q2744154",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Kindred_Spirits_(painting)",
    searchVolumeTier: 2,
    description: `<p><a href="/apps/masterpieces/artist/asher-brown-durand"><strong>Asher Brown Durand</strong></a> painted this tribute to his friend <a href="/apps/masterpieces/artist/thomas-cole"><strong>Thomas Cole</strong></a> after Cole's death in 1848. It shows Cole and poet William Cullen Bryant standing on a rocky ledge in the Catskill Mountains, communing with nature.</p>
<p>The painting embodies the philosophy of the Hudson River School: the American wilderness as a spiritual sanctuary, and artists as priests who interpret its meaning. The title comes from a Keats sonnet about the meeting of sympathetic souls.</p>
<p>Long owned by the New York Public Library, the painting was controversially sold in 2005. It now hangs at Crystal Bridges Museum in Arkansas.</p>`,
    faqs: [
      { question: "Where is Kindred Spirits?", answer: "This iconic painting is at Crystal Bridges Museum of American Art in Bentonville, Arkansas. It was sold by the New York Public Library in 2005 for $35 million." },
      { question: "Who are the two figures in Kindred Spirits?", answer: "<a href=\"/apps/masterpieces/artist/asher-brown-durand\"><strong>Durand</strong></a> painted his friend <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a> (left) and poet William Cullen Bryant contemplating nature in the Catskills." },
      { question: "What is the Hudson River School?", answer: "America's first major art movement, celebrating the wilderness as spiritual sanctuary. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Cole</strong></a> founded it; <a href=\"/apps/masterpieces/artist/asher-brown-durand\"><strong>Durand</strong></a> continued his vision." }
    ]
  }
];

// Artists to create if they don't exist
const ARTISTS_TO_CREATE = {
  "salvador-dali": {
    id: "salvador-dali",
    slug: "salvador-dali",
    name: "Salvador Dalí",
    birthYear: 1904,
    deathYear: 1989,
    nationality: "Spanish",
    bioShort: "Leading Surrealist painter known for dreamlike imagery and technical virtuosity.",
    wikidataId: "Q5577",
    faqs: []
  },
  "james-mcneill-whistler": {
    id: "james-mcneill-whistler",
    slug: "james-mcneill-whistler",
    name: "James McNeill Whistler",
    birthYear: 1834,
    deathYear: 1903,
    nationality: "American",
    bioShort: "American-born artist who pioneered tonal painting and art for art's sake.",
    wikidataId: "Q203643",
    faqs: []
  },
  "winslow-homer": {
    id: "winslow-homer",
    slug: "winslow-homer",
    name: "Winslow Homer",
    birthYear: 1836,
    deathYear: 1910,
    nationality: "American",
    bioShort: "Major American artist known for marine subjects and scenes of American life.",
    wikidataId: "Q344838",
    faqs: []
  },
  "albert-bierstadt": {
    id: "albert-bierstadt",
    slug: "albert-bierstadt",
    name: "Albert Bierstadt",
    birthYear: 1830,
    deathYear: 1902,
    nationality: "German-American",
    bioShort: "Painter of dramatic Western American landscapes in the Hudson River School tradition.",
    wikidataId: "Q77192",
    faqs: []
  },
  "frederic-edwin-church": {
    id: "frederic-edwin-church",
    slug: "frederic-edwin-church",
    name: "Frederic Edwin Church",
    birthYear: 1826,
    deathYear: 1900,
    nationality: "American",
    bioShort: "Hudson River School painter known for grand landscapes of the Americas.",
    wikidataId: "Q366212",
    faqs: []
  },
  "pierre-auguste-renoir": {
    id: "pierre-auguste-renoir",
    slug: "pierre-auguste-renoir",
    name: "Pierre-Auguste Renoir",
    birthYear: 1841,
    deathYear: 1919,
    nationality: "French",
    bioShort: "Leading Impressionist painter celebrated for joyous scenes of Parisian life.",
    wikidataId: "Q39931",
    faqs: []
  },
  "mary-cassatt": {
    id: "mary-cassatt",
    slug: "mary-cassatt",
    name: "Mary Cassatt",
    birthYear: 1844,
    deathYear: 1926,
    nationality: "American",
    bioShort: "The only American to exhibit with the French Impressionists, known for mother-child themes.",
    wikidataId: "Q173223",
    faqs: []
  },
  "camille-pissarro": {
    id: "camille-pissarro",
    slug: "camille-pissarro",
    name: "Camille Pissarro",
    birthYear: 1830,
    deathYear: 1903,
    nationality: "French",
    bioShort: "The 'father of Impressionism' who exhibited in all eight Impressionist shows.",
    wikidataId: "Q134741",
    faqs: []
  },
  "asher-brown-durand": {
    id: "asher-brown-durand",
    slug: "asher-brown-durand",
    name: "Asher Brown Durand",
    birthYear: 1796,
    deathYear: 1886,
    nationality: "American",
    bioShort: "Hudson River School painter who succeeded Thomas Cole as the movement's leader.",
    wikidataId: "Q391608",
    faqs: []
  }
};

async function main() {
  console.log("=== Seeding NGA Tier 3 Paintings ===\n");

  const nga = await prisma.museum.findUnique({ where: { id: NGA_MUSEUM_ID } });
  if (!nga) {
    console.error("NGA museum not found!");
    return;
  }
  console.log("Museum:", nga.name, "\n");

  // Create missing artists
  for (const [slug, data] of Object.entries(ARTISTS_TO_CREATE)) {
    const existing = await prisma.artist.findUnique({ where: { slug } });
    if (!existing) {
      await prisma.artist.create({ data: { ...data, updatedAt: new Date() } });
      console.log("✅ Created artist:", data.name);
    }
  }

  let added = 0, skipped = 0;

  for (const painting of TIER3_PAINTINGS) {
    const existing = await prisma.artwork.findUnique({ where: { slug: painting.slug } });
    if (existing) {
      console.log("⏭️  Skip:", painting.title);
      skipped++;
      continue;
    }

    const artist = await prisma.artist.findUnique({ where: { slug: painting.artistSlug } });

    await prisma.artwork.create({
      data: {
        id: `nga-${painting.slug}`,
        slug: painting.slug,
        title: painting.title,
        year: painting.year,
        medium: painting.medium,
        dimensions: painting.dimensions,
        imageUrl: painting.imageUrl,
        wikidataId: painting.wikidataId,
        wikipediaUrl: painting.wikipediaUrl,
        searchVolumeTier: painting.searchVolumeTier,
        description: painting.description,
        faqs: painting.faqs,
        artistId: artist?.id || null,
        museumId: NGA_MUSEUM_ID,
        artworkType: "painting",
        updatedAt: new Date()
      }
    });

    console.log("✅ Added:", painting.title);
    added++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Added: ${added}, Skipped: ${skipped}`);

  await prisma.$disconnect();
}

main().catch(console.error);
