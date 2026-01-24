const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// ==================== MONET FAQs ====================
const monetFaqs = {
  // === ROUEN CATHEDRAL SERIES (19 paintings) ===
  'claude-monet-rouen-cathedral-01': [
    { question: "What is the Rouen Cathedral series?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted over <strong>30 views</strong> of the cathedral façade between 1892-1894, capturing how light transforms stone throughout the day." },
    { question: "Where can I see Rouen Cathedral paintings?", answer: "This work is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. Other versions are at the Met, National Gallery of Art, and museums worldwide." },
    { question: "Why did Monet paint the same subject repeatedly?", answer: "Monet wanted to show how <strong>light and atmosphere</strong> change a subject's appearance. This approach defined <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> and influenced modern art." }
  ],
  'claude-monet-rouen-cathedral-02': [
    { question: "What is the Rouen Cathedral series?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted over <strong>30 views</strong> of Rouen Cathedral from 1892-1894, each showing different light conditions on the Gothic façade." },
    { question: "Where is this painting displayed?", answer: "You can see this at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, which holds several paintings from this landmark <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> series." },
    { question: "What colors dominate this series?", answer: "Monet used <strong>blue, gold, and rose</strong> tones to capture shifting light. His palette ranged from cool morning grays to warm sunset oranges." }
  ],
  'claude-monet-rouen-cathedral-at-noon': [
    { question: "Why paint the cathedral at noon?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured <strong>harsh midday light</strong> flattening the stone details. Noon presented unique challenges compared to his morning or sunset views." },
    { question: "Where is this painting now?", answer: "This noon study hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris alongside other Rouen Cathedral paintings from <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism's</strong></a> peak." },
    { question: "How long did Monet work on this series?", answer: "Monet spent <strong>two winters</strong> (1892-93, 1893-94) painting from rented rooms across from the cathedral, then refined them in his Giverny studio." }
  ],
  'claude-monet-rouen-cathedral-fa231ade-and-tour-d39albane-mornin': [
    { question: "What makes the morning effect special?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured <strong>soft morning light</strong> washing across the Gothic stonework, with cool blues and grays dominating before the sun warmed the façade." },
    { question: "Where can I see this painting?", answer: "This morning study is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, home to the world's finest <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "What is the Tour d'Albane?", answer: "The <strong>Tour d'Albane</strong> is the northern tower of Rouen Cathedral. Monet included it in several paintings to show the full Gothic architecture." }
  ],
  'claude-monet-rouen-cathedral-clear-day': [
    { question: "How does clear weather affect the painting?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>direct sunlight</strong> creates sharp shadows and reveals carved stone details that fog or overcast skies would soften." },
    { question: "Where is this version displayed?", answer: "This painting is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. Compare it with Monet's foggy and sunset versions nearby." },
    { question: "Why is the Rouen series important?", answer: "This series proved that <strong>the subject matters less than light itself</strong>. It became a manifesto for <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> principles." }
  ],
  'claude-monet-rouen-cathedral-evening-harmony-in-brown': [
    { question: "What creates the brown harmony?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured <strong>warm evening light</strong> bathing the Gothic stone in golden-brown tones, transforming cold limestone into something almost glowing." },
    { question: "Where is this painting?", answer: "You'll find this at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, displayed with other cathedral studies showing different times of day." },
    { question: "Did Monet use musical terms intentionally?", answer: "Yes. Monet titled several works as <strong>\"harmonies\" or \"symphonies\"</strong> to emphasize color relationships, treating paint like musical notes." }
  ],
  'claude-monet-rouen-cathedral-grey-weather': [
    { question: "How does grey weather change the scene?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>overcast skies</strong> flatten the cathedral's carved details and shift colors toward cool blues and silvers." },
    { question: "Where can I view this painting?", answer: "This grey weather study hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, part of their world-renowned <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> holdings." },
    { question: "Why paint on grey days?", answer: "Grey weather revealed <strong>subtle color variations</strong> invisible in bright sun. Monet found these conditions challenging but rewarding." }
  ],
  'claude-monet-rouen-cathedral-magic-in-blue': [
    { question: "What creates the blue effect?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> likely captured early morning or <strong>late afternoon shadows</strong> when cool blue light dominated before warming sunset tones appeared." },
    { question: "Where is this painting displayed?", answer: "This blue-toned study is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, home to key works of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>." },
    { question: "How many cathedral paintings exist?", answer: "Monet created <strong>over 30 paintings</strong> of Rouen Cathedral, making it one of art history's most ambitious serial studies." }
  ],
  'claude-monet-rouen-cathedral-portal-in-the-sun': [
    { question: "What does sunlight reveal?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>direct sunlight</strong> creates deep shadows in the Gothic portal's carved recesses while flooding flat surfaces with warm gold." },
    { question: "Where is this painting now?", answer: "This sun-drenched view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris alongside other cathedral studies." },
    { question: "Why focus on the portal?", answer: "The cathedral's main portal offered <strong>rich carved detail</strong> that transformed dramatically as light angles changed throughout the day." }
  ],
  'claude-monet-rouen-cathedral-red-sunlight': [
    { question: "What creates the red effect?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured <strong>sunset light</strong> warming the stone to deep oranges and reds, showing the cathedral's most dramatic transformation." },
    { question: "Where can I see this painting?", answer: "This sunset view is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, which holds the largest <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "How did sunsets affect Monet's palette?", answer: "Evening light pushed Monet to use <strong>bold warm colors</strong> rarely seen in his earlier work, expanding his chromatic range." }
  ],
  'claude-monet-rouen-cathedral-study-of-the-portal': [
    { question: "What makes this a study?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> created both finished paintings and <strong>smaller studies</strong> to explore light effects before completing larger canvases in his studio." },
    { question: "Where is this study displayed?", answer: "This study hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris with the finished cathedral series." },
    { question: "Did Monet paint on location?", answer: "Monet worked from <strong>rented rooms</strong> across from the cathedral, returning to Giverny to refine and complete the paintings from memory." }
  ],
  'claude-monet-rouen-cathedral-symphony-in-grey-and-rose': [
    { question: "What is a symphony in painting?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> used musical titles to describe <strong>harmonious color relationships</strong>. Here grey and rose work together like instruments in an orchestra." },
    { question: "Where is this painting?", answer: "This grey and rose version hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, a cornerstone of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> art." },
    { question: "What time of day shows grey and rose?", answer: "This combination suggests <strong>early morning or misty conditions</strong> when cool greys mix with the first warm light touching the stone." }
  ],
  'claude-monet-rouen-cathedral-the-gate-and-the-tower': [
    { question: "What elements are featured?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> composed this view to show both the <strong>main portal and tower</strong>, capturing more of the Gothic façade's architectural grandeur." },
    { question: "Where can I view this painting?", answer: "You'll find this at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, displayed with Monet's other cathedral paintings." },
    { question: "Why vary the compositions?", answer: "Different viewpoints let Monet explore how <strong>light struck various surfaces</strong> at different angles, enriching the series." }
  ],
  'claude-monet-rouen-cathedral-the-portal-and-the-tour-d39albene-': [
    { question: "What makes grey weather compositions distinct?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> found <strong>overcast conditions</strong> revealed subtle color variations invisible in bright sunlight, offering a different kind of visual truth." },
    { question: "Where is this painting displayed?", answer: "This grey weather view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris alongside brighter versions for comparison." },
    { question: "What is the Tour d'Albene?", answer: "The <strong>Tour d'Albane</strong> (sometimes spelled d'Albene) is the northern tower of Rouen Cathedral, a recurring element in Monet's series." }
  ],
  'claude-monet-rouen-cathedral-the-portal-and-the-tower-dallban-o': [
    { question: "How does sunlight transform the portal?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed <strong>sunlight creating strong shadows</strong> in the carved portal while illuminating the tower with warm gold tones." },
    { question: "Where can I see this painting?", answer: "This sunny view is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, part of their major <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "Why is Rouen Cathedral significant?", answer: "Rouen Cathedral is a <strong>Gothic masterpiece</strong> dating from the 12th century. Monet chose it for its complex carved surfaces that transformed with light." }
  ],
  'claude-monet-rouen-cathedral-the-portal-at-midday': [
    { question: "What does midday light reveal?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured <strong>harsh overhead light</strong> that flattens forms and creates short, deep shadows in the portal's carved details." },
    { question: "Where is this painting?", answer: "This midday study hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris with other cathedral paintings showing different hours." },
    { question: "How did time of day affect Monet's choices?", answer: "Each hour presented <strong>unique challenges</strong>. Midday light was difficult, prompting Monet to work quickly before conditions shifted." }
  ],
  'claude-monet-rouen-cathedral-the-portal-in-the-sun': [
    { question: "What effect does sun have on the portal?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed <strong>direct sunlight</strong> transforming cold stone into warm gold while casting deep shadows that reveal carved depth." },
    { question: "Where is this painting displayed?", answer: "You can view this at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, home to essential <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> works." },
    { question: "Did critics appreciate the series?", answer: "The 1895 exhibition was a <strong>critical and commercial success</strong>. Collectors bought paintings immediately, validating Monet's experimental approach." }
  ],
  'claude-monet-rouen-cathedral-west-facade-noon': [
    { question: "Why focus on the west façade?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted from rooms facing the <strong>west façade</strong>, which received direct afternoon light and displayed the richest carved decoration." },
    { question: "Where can I see this painting?", answer: "This noon view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, part of their major <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> holdings." },
    { question: "What makes noon challenging to paint?", answer: "Midday sun creates <strong>minimal shadow contrast</strong> and rapidly changing conditions. Monet had to work fast before the light shifted." }
  ],
  'claude-monet-rouen-cathedral-west-facade-sunlight': [
    { question: "What does sunlight reveal on the façade?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>raking sunlight</strong> picks out every carved saint and ornament while casting the recesses into warm shadow." },
    { question: "Where is this painting now?", answer: "This sunlit façade hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, completing their Rouen Cathedral collection." },
    { question: "How did this series influence art?", answer: "The Rouen series proved <strong>light itself could be the subject</strong>, paving the way for abstraction and modernist approaches to perception." }
  ],

  // === SAINT-LAZARE STATION SERIES (6 paintings) ===
  'claude-monet-saintlazare-station': [
    { question: "Why did Monet paint a train station?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> saw <strong>modern industry as worthy subject matter</strong>. Steam, iron, and glass represented the new Paris as much as gardens or rivers." },
    { question: "Where is this painting displayed?", answer: "This view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, a former railway station housing <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> masterpieces." },
    { question: "How many station paintings did Monet create?", answer: "Monet painted <strong>12 views</strong> of Saint-Lazare in 1877, exploring steam, light filtering through glass, and the bustle of modern travel." }
  ],
  'claude-monet-saintlazare-station-arrival-of-a-train': [
    { question: "What makes this scene modern?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured a <strong>train arriving</strong> amid billowing steam, celebrating rather than criticizing industrial progress." },
    { question: "Where can I see this painting?", answer: "This arrival scene is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, itself converted from a railway terminus." },
    { question: "How did Monet gain access?", answer: "Monet reportedly <strong>dressed as a gentleman</strong> and convinced station officials he was painting an official commission, gaining full access to platforms." }
  ],
  'claude-monet-saintlazare-station-exterior': [
    { question: "Why paint the exterior?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>steam escaping the station</strong> transformed the surrounding streets, blurring buildings and filling the urban air." },
    { question: "Where is this painting?", answer: "This exterior view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris with other works from the railway series." },
    { question: "What did critics think?", answer: "Critics praised the series for capturing <strong>modern Parisian life</strong>. The industrial subject matched <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism's</strong></a> goal of painting contemporary reality." }
  ],
  'claude-monet-saintlazare-station-exterior-view': [
    { question: "What does this exterior view show?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> depicted <strong>steam mingling with city air</strong> outside the station, where industrial and urban atmospheres merge." },
    { question: "Where can I view this painting?", answer: "You'll find this at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, among their comprehensive <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "Did the series sell well?", answer: "Monet exhibited several Saint-Lazare paintings in 1877 and <strong>sold them successfully</strong>, helping establish his reputation and income." }
  ],
  'claude-monet-saintlazare-station-track-coming-out': [
    { question: "What perspective does this show?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> positioned himself <strong>looking down the tracks</strong> as trains emerged from the covered shed into daylight." },
    { question: "Where is this painting displayed?", answer: "This track view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, a fitting home given the building's railway history." },
    { question: "Why were trains important to Impressionists?", answer: "Trains represented <strong>speed, modernity, and fleeting moments</strong>, perfect subjects for artists obsessed with capturing transient effects of light and atmosphere." }
  ],
  'claude-monet-the-pont-de-l39europe-gare-saintlazare': [
    { question: "What is the Pont de l'Europe?", answer: "The <strong>Pont de l'Europe</strong> is an iron bridge spanning the Saint-Lazare rail yards. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> included it to show modern engineering alongside locomotives." },
    { question: "Where can I see this painting?", answer: "This bridge view is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, complementing their Saint-Lazare Station paintings." },
    { question: "How did Monet treat industrial subjects?", answer: "Monet approached industry with the <strong>same wonder as nature</strong>, finding beauty in steam, iron, and glass that others considered ugly." }
  ],

  // === JAPANESE BRIDGE SERIES (9 paintings) ===
  'claude-monet-the-japanese-bridge-the-bridge-in-monet39s-garden': [
    { question: "Where was Monet's Japanese bridge?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> built the bridge over his <strong>water lily pond at Giverny</strong>, France. He spent 43 years creating and painting this famous garden." },
    { question: "Where can I see this painting?", answer: "This version is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, which holds several Giverny paintings." },
    { question: "Why a Japanese-style bridge?", answer: "Monet admired <strong>Japanese woodblock prints</strong> and designed his garden with Asian influences. The arched bridge became his most recognizable motif." }
  ],
  'claude-monet-the-japanese-bridge-the-bridge-over-the-waterlily-': [
    { question: "What makes this version unique?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted the bridge dozens of times, each showing <strong>different light, seasons, and color harmonies</strong> across 30 years." },
    { question: "Where is this painting?", answer: "You can view this at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, among their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> masterpieces." },
    { question: "Could visitors see Monet's garden?", answer: "Today <strong>Giverny welcomes visitors</strong> to see the restored water garden, Japanese bridge, and flower gardens Monet designed and painted." }
  ],
  'claude-monet-the-japanese-bridge-the-waterlily-pond-and-path-by': [
    { question: "What does this composition show?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> included the <strong>garden path alongside the pond</strong>, showing how the Japanese bridge connects to the wider landscape he created." },
    { question: "Where is this painting displayed?", answer: "This Giverny scene hangs at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York." },
    { question: "When did Monet paint his garden?", answer: "Monet began painting his Giverny garden in the <strong>1890s</strong> and continued until near his death in 1926, creating hundreds of works." }
  ],
  'claude-monet-the-japanese-bridge-the-waterlily-pond-symphony-in': [
    { question: "What is a symphony in rose?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> used musical titles for paintings dominated by <strong>harmonious color relationships</strong>. Here rose-pink tones unify the water and foliage." },
    { question: "Where can I view this painting?", answer: "This rose-toned version is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, a key <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> work." },
    { question: "Why use musical terms for paintings?", answer: "Monet believed <strong>colors could harmonize like musical notes</strong>. His titles emphasized sensory experience over literal subject matter." }
  ],
  'claude-monet-the-japanese-bridge-the-waterlily-pond-water-irise': [
    { question: "What are water irises?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> planted <strong>iris flowers</strong> around his pond at Giverny. Their purple blooms add color contrast to the green water lilies and bridge." },
    { question: "Where is this painting?", answer: "This version with irises hangs at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York." },
    { question: "How did Monet design his garden?", answer: "Monet hired gardeners and <strong>carefully planned plant colors and bloom times</strong> to create living compositions he could paint year-round." }
  ],
  'claude-monet-the-japanese-bridge-7': [
    { question: "How many bridge paintings exist?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted <strong>over 250 works</strong> featuring his water garden, with the Japanese bridge appearing in dozens spanning 1899-1926." },
    { question: "Where can I see this version?", answer: "This painting is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, known for its strong <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "Did the bridge paintings change over time?", answer: "Yes. Early versions show <strong>clear forms</strong>, while later paintings grow increasingly abstract as Monet's eyesight failed and style evolved." }
  ],
  'claude-monet-the-japanese-bridge-at-giverny': [
    { question: "Where is Giverny?", answer: "<strong>Giverny</strong> is a village in Normandy, France where <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> lived from 1883 until his death in 1926, creating his famous gardens." },
    { question: "Where is this painting displayed?", answer: "This Giverny scene hangs at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York." },
    { question: "Can I visit Monet's garden today?", answer: "Yes. <strong>Monet's house and gardens at Giverny</strong> are open to visitors from spring through autumn. The Japanese bridge and water lily pond survive." }
  ],
  'claude-monet-the-japanis-bridge-footbridge-over-the-waterlily-p': [
    { question: "What makes this a footbridge?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet's</strong></a> Japanese bridge was a <strong>small pedestrian crossing</strong> over his water lily pond, designed for visual beauty rather than practical transit." },
    { question: "Where can I see this painting?", answer: "This version is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London, a gem of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "Why paint the same bridge repeatedly?", answer: "Like his cathedral series, Monet explored how <strong>changing light and seasons</strong> transformed a single subject into infinite variations." }
  ],

  // === WATERLOO BRIDGE SERIES (7 paintings) ===
  'claude-monet-waterloo-bridge-fog': [
    { question: "Why did Monet paint London bridges?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> visited London three times (1899-1901) to paint the <strong>Thames fog</strong>, finding its atmospheric effects unmatched anywhere in Europe." },
    { question: "Where is this painting?", answer: "This foggy view hangs at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia, which holds several London paintings." },
    { question: "What made London fog special?", answer: "London's <strong>coal smoke mixed with river mist</strong> created unique atmospheric effects that softened forms and transformed colors in ways Monet loved." }
  ],
  'claude-monet-waterloo-bridge-grey-weather': [
    { question: "What does grey weather reveal?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> found <strong>overcast conditions</strong> showed the bridge as a ghostly form emerging from silvery Thames mist." },
    { question: "Where can I view this painting?", answer: "This grey weather version is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "How many Waterloo Bridge paintings exist?", answer: "Monet painted <strong>over 40 views</strong> of Waterloo Bridge during his London visits, exploring every weather condition and time of day." }
  ],
  'claude-monet-waterloo-bridge-london': [
    { question: "What is Waterloo Bridge?", answer: "<strong>Waterloo Bridge</strong> crosses the Thames in central London. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted it from his room at the Savoy Hotel." },
    { question: "Where is this painting displayed?", answer: "You can see this at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, part of their major <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "Why paint from a hotel?", answer: "Monet worked from <strong>the same Savoy Hotel room</strong> on each visit, ensuring consistent viewpoints across different weather conditions and years." }
  ],
  'claude-monet-waterloo-bridge-misty-morning': [
    { question: "What makes misty mornings paintable?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> valued how <strong>morning mist softened forms</strong> and created veils of color between viewer and subject." },
    { question: "Where can I see this painting?", answer: "This misty morning scene hangs at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "Did Monet finish paintings in London?", answer: "Monet started canvases in London but <strong>finished most in his Giverny studio</strong>, working from memory and small sketches." }
  ],
  'claude-monet-waterloo-bridge-overcast-weather': [
    { question: "How does overcast differ from fog?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> distinguished <strong>high cloud cover from low fog</strong>. Overcast skies provide even light, while fog obscures forms more dramatically." },
    { question: "Where is this painting?", answer: "This overcast view is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, alongside other Waterloo Bridge paintings." },
    { question: "Why did Russia acquire so many Monets?", answer: "Russian collectors <strong>Shchukin and Morozov</strong> bought major <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> works before the Revolution. Their collections now form the Hermitage holdings." }
  ],
  'claude-monet-waterloo-bridge-sunlight-effect': [
    { question: "What does sunlight reveal in London?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>rare sunlight transformed the Thames</strong>, burning through fog to create warm golden tones on the bridge and water." },
    { question: "Where can I view this painting?", answer: "This sunlight effect version hangs at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "Were sunny days rare in London?", answer: "Yes. Monet sometimes <strong>waited weeks</strong> for specific lighting conditions, working on multiple canvases simultaneously as weather changed." }
  ],
  'claude-monet-waterloo-bridge-sunlight-in-the-fog': [
    { question: "What happens when sun meets fog?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured the magical moment when <strong>sunlight penetrates fog</strong>, creating luminous golden veils around the bridge silhouette." },
    { question: "Where is this painting displayed?", answer: "You'll find this at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, a highlight of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "How did fog affect Monet's technique?", answer: "Fog required <strong>subtle tonal gradations</strong> and soft edges. Monet applied paint in thin veils to suggest atmosphere enveloping solid forms." }
  ],

  // === ANTIBES SERIES (8 paintings) ===
  'claude-monet-the-alps-seen-from-cap-d39antibes': [
    { question: "What does this view show?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured the <strong>snow-capped Alps visible across the Mediterranean</strong> from the French Riviera, contrasting warm coast with distant mountains." },
    { question: "Where is this painting?", answer: "This Alpine view hangs at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, part of their important <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "When did Monet visit Antibes?", answer: "Monet spent <strong>early 1888</strong> in Antibes, captivated by the brilliant Mediterranean light after years painting northern France." }
  ],
  'claude-monet-the-bay-of-antibes': [
    { question: "What attracted Monet to Antibes?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> found the <strong>Mediterranean light intensely bright</strong> compared to Normandy. The blue sea and sky challenged his palette and technique." },
    { question: "Where can I see this painting?", answer: "This bay view is at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, UK." },
    { question: "How did southern light affect Monet's work?", answer: "The <strong>intense blue and pink tones</strong> of the Riviera pushed Monet toward brighter colors than his typical northern palette." }
  ],
  'claude-monet-the-big-blue-mediterranean-at-antibes': [
    { question: "What makes Mediterranean blue different?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> noted the <strong>sea appeared far bluer</strong> than northern waters. He struggled to capture this intensity with his existing pigments." },
    { question: "Where is this painting displayed?", answer: "You can view this at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, among their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> works." },
    { question: "Did Monet enjoy painting in the south?", answer: "Monet found the <strong>southern light both exciting and frustrating</strong>. He wrote that the colors seemed impossible to render accurately on canvas." }
  ],
  'claude-monet-the-big-blue-sea-in-antibes': [
    { question: "How did Monet capture such blue?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> used <strong>cobalt and ultramarine blues</strong> more intensely than usual, sometimes adding contrasting pink and orange to heighten the effect." },
    { question: "Where can I see this painting?", answer: "This Mediterranean blue view hangs at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London." },
    { question: "How many Antibes paintings did Monet create?", answer: "Monet produced <strong>about 40 paintings</strong> during his 1888 Antibes visit, exploring the coast, sea, and Alpine backdrop." }
  ],
  'claude-monet-the-castle-in-antibes': [
    { question: "What castle is depicted?", answer: "Monet painted the <strong>Château Grimaldi</strong>, a medieval fortress overlooking Antibes harbor. It now houses the Picasso Museum." },
    { question: "Where is this painting?", answer: "This castle view is at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, UK." },
    { question: "What attracted Monet to the castle?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> appreciated how the <strong>stone walls caught Mediterranean light</strong> differently than the sea and sky around them." }
  ],
  'claude-monet-the-old-fort-at-antibes': [
    { question: "What fort is shown?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted the <strong>old fortifications of Antibes</strong>, where ancient stone walls meet brilliant blue sea under the Riviera sun." },
    { question: "Where can I view this painting?", answer: "This fort scene hangs at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, part of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "What makes Antibes scenes distinctive?", answer: "The <strong>contrast between warm stone and cool sea</strong> under intense southern light creates a color harmony unlike Monet's northern works." }
  ],
  'claude-monet-view-of-antibes-from-the-plateau-notredame': [
    { question: "Where is this viewpoint?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted from the <strong>Plateau Notre-Dame</strong>, a hill offering panoramic views of Antibes, the sea, and distant Alps." },
    { question: "Where is this painting displayed?", answer: "This elevated view is at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, UK." },
    { question: "How did Monet travel to the south?", answer: "Monet took the <strong>train from Paris</strong> to the Riviera in January 1888, seeking new subjects and warmer winter weather." }
  ],
  'claude-monet-view-of-cap-d39antibes': [
    { question: "What is Cap d'Antibes?", answer: "<strong>Cap d'Antibes</strong> is a peninsula jutting into the Mediterranean, known for its rocky coastline and pine trees that <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted repeatedly." },
    { question: "Where can I see this painting?", answer: "This cap view hangs at the <a href='/apps/masterpieces/museum/courtauld-gallery-london'><strong>Courtauld Gallery</strong></a> in London, among their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> works." },
    { question: "Did the Antibes series sell well?", answer: "The Antibes paintings were <strong>commercially successful</strong>. Their bright colors and Mediterranean subjects appealed to collectors." }
  ],

  // === WATER LILY POND (5 paintings) ===
  'claude-monet-the-water-lily-pond-and-bridge': [
    { question: "What makes water lilies special?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> created <strong>over 250 water lily paintings</strong> across 30 years, making them his most famous and extensive subject." },
    { question: "Where is this painting?", answer: "You can view this at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, a major <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "Why did Monet focus on his garden?", answer: "As Monet aged, his <strong>Giverny garden became his world</strong>. The water lily pond offered infinite variations of light, reflection, and color." }
  ],
  'claude-monet-the-water-lily-pond-x': [
    { question: "Why are there so many water lily paintings?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> spent <strong>his final 30 years</strong> exploring this single subject, each canvas revealing new aspects of light on water." },
    { question: "Where can I see this version?", answer: "This painting hangs at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York." },
    { question: "How did water lilies influence modern art?", answer: "Monet's late water lilies, with their <strong>dissolving forms and immersive scale</strong>, anticipated Abstract Expressionism decades later." }
  ],
  'claude-monet-water-lily-pond': [
    { question: "What is Monet's water lily pond?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> created a <strong>water garden at Giverny</strong> in the 1890s, diverting a stream to make the pond he would paint obsessively." },
    { question: "Where is this painting displayed?", answer: "This pond view is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, among their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> treasures." },
    { question: "Did Monet's eyesight affect these paintings?", answer: "Monet developed <strong>cataracts</strong> that shifted his color perception. Late water lilies feature warmer, more saturated tones than earlier work." }
  ],
  'claude-monet-water-lily-pond-at-giverny': [
    { question: "What plants grew in Monet's pond?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> planted <strong>water lilies, irises, willows, and bamboo</strong> around his pond, carefully designing the garden as a living artwork." },
    { question: "Where can I view this painting?", answer: "This Giverny scene hangs at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York." },
    { question: "Can I visit the water lily pond today?", answer: "Yes. <strong>Monet's gardens at Giverny</strong> have been restored and are open to visitors from spring through autumn." }
  ],
  'claude-monet-water-lily-pond-evening-right-panel': [
    { question: "What are Monet's large decorations?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> created <strong>massive curved panels</strong> of water lilies intended to surround viewers. The famous Orangerie murals are the culmination." },
    { question: "Where is this panel?", answer: "This evening panel is at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York, part of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> holdings." },
    { question: "Why paint at evening?", answer: "Evening light created <strong>deep blues and purples</strong> on the water's surface, offering different color harmonies than morning or noon." }
  ],

  // === BORDIGHERA SERIES (4 paintings) ===
  'claude-monet-strada-romada-in-bordighera': [
    { question: "Where is Bordighera?", answer: "<strong>Bordighera</strong> is an Italian Riviera town near the French border. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted there in 1884, captivated by Mediterranean vegetation." },
    { question: "Where can I see this painting?", answer: "This street scene hangs at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, known for their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "What makes Bordighera different from Antibes?", answer: "Bordighera offered <strong>exotic palm trees and gardens</strong> that fascinated Monet, while Antibes emphasized sea and mountain views." }
  ],
  'claude-monet-the-valley-of-sasso-bordighera': [
    { question: "What is the Sasso valley?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted the <strong>Sasso valley</strong> near Bordighera, where lush vegetation fills the ravine below the town." },
    { question: "Where is this painting displayed?", answer: "This valley view is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, among their major <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> works." },
    { question: "When did Monet visit Bordighera?", answer: "Monet spent <strong>early 1884</strong> in Bordighera, initially visiting with Renoir before returning alone to paint extensively." }
  ],
  'claude-monet-valley-bouna-near-bordighera': [
    { question: "What attracted Monet to Italian valleys?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> found the <strong>exotic vegetation</strong> of Italian valleys unlike anything in France. Palms, olives, and citrus trees offered new painting challenges." },
    { question: "Where can I see this painting?", answer: "This valley scene is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, part of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> holdings." },
    { question: "How many Bordighera paintings did Monet create?", answer: "Monet produced <strong>about 50 paintings</strong> during his 1884 Italian visit, exploring gardens, valleys, and coastal views." }
  ],
  'claude-monet-view-of-bordighera': [
    { question: "What does this view show?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> captured <strong>Bordighera's hillside town</strong> amid palm trees and Mediterranean vegetation, with sea visible in the distance." },
    { question: "Where is this painting?", answer: "This town view hangs at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, alongside other <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> masterpieces." },
    { question: "Did Monet enjoy painting in Italy?", answer: "Monet found Italy <strong>both exciting and difficult</strong>. The intense light and unfamiliar vegetation challenged his established techniques." }
  ],

  // === STACKS OF WHEAT/HAYSTACKS (2 paintings) ===
  'claude-monet-stacks-of-wheat-end-of-summer': [
    { question: "What is the Haystacks series?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted <strong>25 views of grain stacks</strong> near Giverny in 1890-91, exploring how light transforms a simple subject across seasons." },
    { question: "Where can I see this painting?", answer: "This summer haystack hangs at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, which holds several from this famous series." },
    { question: "Why were haystacks important?", answer: "This series proved <strong>any subject could sustain artistic investigation</strong>. The haystacks' commercial success established Monet financially." }
  ],
  'claude-monet-stacks-of-wheat-sunset-snow-effect': [
    { question: "What makes the snow effect special?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> showed how <strong>sunset light colors snow</strong> pink and purple while the wheat stacks glow warm orange against the cold landscape." },
    { question: "Where is this painting displayed?", answer: "This sunset snow scene is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, a highlight of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "How did the series influence Kandinsky?", answer: "Kandinsky saw a Haystack painting and realized <strong>color alone could carry meaning</strong>, inspiring his journey toward abstract art." }
  ],

  // === ARGENTEUIL BOATS (2 paintings) ===
  'claude-monet-regatta-at-argenteuil': [
    { question: "What is Argenteuil?", answer: "<strong>Argenteuil</strong> is a Seine-side town where <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> lived from 1871-1878, producing many of his finest <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> paintings." },
    { question: "Where can I see this painting?", answer: "This regatta scene hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, showcasing Monet's Argenteuil period." },
    { question: "Why did Monet paint boats?", answer: "Boats and water offered <strong>constantly changing reflections</strong>, perfect for Monet's interest in capturing transient light effects." }
  ],
  'claude-monet-the-boats-regatta-at-argenteuil': [
    { question: "What makes Argenteuil regattas paintable?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> loved how <strong>sailboats created colorful reflections</strong> that broke apart on rippling water, perfect for his broken brushwork." },
    { question: "Where is this painting?", answer: "This regatta view is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, among their core <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> works." },
    { question: "Was Argenteuil a popular painting site?", answer: "Yes. <strong>Renoir, Manet, and Sisley</strong> all painted at Argenteuil alongside Monet, making it an Impressionist landmark." }
  ],

  // === WOMAN WITH PARASOL SERIES (3 paintings) ===
  'claude-monet-the-promenade-woman-with-a-parasol': [
    { question: "Who is the woman?", answer: "The figure is <strong>Camille, Monet's first wife</strong>, with their son Jean. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted this spontaneous scene in 1875 at Argenteuil." },
    { question: "Where can I see this painting?", answer: "This famous promenade hangs at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "Why is this painting so famous?", answer: "The <strong>sense of movement and fresh air</strong> captures a fleeting moment perfectly. It's one of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism's</strong></a> most beloved images." }
  ],
  'claude-monet-woman-with-a-parasol-also-known-as-study-of-a-figu': [
    { question: "Who modeled for this version?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted <strong>Suzanne Hoschedé</strong>, his stepdaughter, in 1886, eleven years after painting Camille with a parasol." },
    { question: "Where is this painting displayed?", answer: "This study hangs at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C., near the earlier parasol painting." },
    { question: "Why paint the subject from behind?", answer: "Monet focused on <strong>light, color, and movement</strong> rather than facial identity. The anonymous figure becomes universal." }
  ],
  'claude-monet-woman-with-a-parasol-facing-right-also-known-as-st': [
    { question: "What makes this version different?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted this as a <strong>pendant to the facing-left version</strong>, creating a pair showing the same scene from opposite angles." },
    { question: "Where can I see this painting?", answer: "This facing-right study hangs at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "Did Monet return to this subject after Camille's death?", answer: "Monet painted these studies <strong>seven years after Camille died</strong>, perhaps revisiting a subject associated with happier times." }
  ],
  'claude-monet-woman-with-a-parasol-in-the-garden-in-argenteuil': [
    { question: "What setting is this?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted his garden at Argenteuil, showing a <strong>woman amid flowers and sunlight</strong> dappling through leaves." },
    { question: "Where is this painting?", answer: "This garden scene is at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "Why did Monet paint gardens?", answer: "Gardens offered <strong>controlled natural settings</strong> where Monet could study light on flowers, figures, and foliage without traveling far." }
  ],

  // === MISCELLANEOUS MONET ===
  'claude-monet-seagulls-over-the-houses-of-parliament': [
    { question: "What is depicted?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted the <strong>Houses of Parliament</strong> shrouded in Thames fog, with seagulls adding life to the atmospheric scene." },
    { question: "Where is this painting?", answer: "This London view hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, part of their <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> collection." },
    { question: "How many Parliament paintings did Monet create?", answer: "Monet painted <strong>19 views of Parliament</strong> during his London visits, all showing the Gothic structure veiled in fog." }
  ],
  'claude-monet-the-thames-below-westminster': [
    { question: "When did Monet paint the Thames?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted this <strong>in 1871</strong> during his first London visit, fleeing the Franco-Prussian War." },
    { question: "Where is this painting?", answer: "This early Thames view hangs at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London, UK." },
    { question: "What makes this view significant?", answer: "This was <strong>Monet's first London painting</strong>, beginning his fascination with Thames fog that he would explore more fully 30 years later." }
  ],
  'claude-monet-view-at-rouelles-le-havre': [
    { question: "Where is Rouelles?", answer: "<strong>Rouelles</strong> is near Le Havre where <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> grew up. This early landscape shows his hometown region before he moved to Paris." },
    { question: "Where is this painting now?", answer: "This early work is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "When did Monet paint this?", answer: "This dates from <strong>Monet's youth</strong> in the late 1850s, before he developed his mature <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> style." }
  ],
  'claude-monet-women-in-the-garden': [
    { question: "Who are the women?", answer: "<a href='/apps/masterpieces/artist/claude-monet'><strong>Monet's</strong></a> future wife <strong>Camille modeled</strong> for all four figures, changing dresses between poses in this ambitious garden scene." },
    { question: "Where can I see this painting?", answer: "This major work hangs at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris, a masterpiece of early <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a>." },
    { question: "Why is this painting important?", answer: "Painted entirely outdoors in <strong>1866</strong>, this large canvas (over 8 feet tall) proved Monet's commitment to painting directly from nature." }
  ]
};

// ==================== REMBRANDT FAQs ====================
const rembrandtFaqs = {
  // === SELF-PORTRAITS (14 paintings) ===
  'rembrandt-selfportrait-as-a-young-man': [
    { question: "Why did Rembrandt paint so many self-portraits?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created <strong>over 80 self-portraits</strong> throughout his life, using himself as a free model to study expression, aging, and costume." },
    { question: "Where can I see this painting?", answer: "This youthful self-portrait is at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam, home to the largest Rembrandt collection." },
    { question: "What makes Rembrandt's self-portraits unique?", answer: "Unlike flattering portraits, Rembrandt showed <strong>honest aging and emotion</strong>, creating an unprecedented visual autobiography." }
  ],
  'rembrandt-selfportrait-in-a-cap-and-scarf-with-the-face-dark': [
    { question: "What is this self-portrait style?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> experimented with <strong>dramatic shadows</strong> on his own face, using himself to master chiaroscuro lighting techniques." },
    { question: "Where is this print?", answer: "This etching is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, known for their Dutch Golden Age prints." },
    { question: "Was Rembrandt a master printmaker?", answer: "Yes. Rembrandt revolutionized <strong>etching techniques</strong>, creating prints as prized as his paintings." }
  ],
  'rembrandt-selfportrait-in-a-soft-hat-and-embroidered-cloak': [
    { question: "Why wear costumes in self-portraits?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> often dressed in <strong>exotic costumes and rich fabrics</strong> to practice painting textures and establish his artistic identity." },
    { question: "Where is this work?", answer: "This self-portrait is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "What period does this represent?", answer: "The embroidered cloak suggests Rembrandt's <strong>prosperous Amsterdam years</strong> before financial difficulties later in life." }
  ],
  'rembrandt-selfportrait-leaning-forward-bust': [
    { question: "What expression is shown?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> captured himself <strong>leaning forward intently</strong>, suggesting concentration or curiosity in this intimate bust-length image." },
    { question: "Where can I see this?", answer: "This self-portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "How did Rembrandt use mirrors?", answer: "Rembrandt painted himself <strong>looking into a mirror</strong>, which explains why many self-portraits appear to gaze directly at viewers." }
  ],
  'rembrandt-selfportrait-open-mouthed': [
    { question: "Why paint himself open-mouthed?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> used dramatic expressions to study how <strong>emotions transform the face</strong>, creating studies he could reference for history paintings." },
    { question: "Where is this etching?", answer: "This expressive print is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Are expression studies common in art?", answer: "Yes. Artists created <strong>\"tronies\" (character heads)</strong> to practice emotions. Rembrandt excelled at capturing fleeting expressions." }
  ],
  'rembrandt-selfportrait-wearing-a-soft-cap-full-face-head-onl': [
    { question: "What is this type of portrait?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created this <strong>head-only study</strong> focusing entirely on facial features and the soft cap's texture." },
    { question: "Where can I see this etching?", answer: "This print is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>, which holds important Rembrandt prints." },
    { question: "Why were Rembrandt's prints valuable?", answer: "Rembrandt's etchings were <strong>collected during his lifetime</strong>, with collectors seeking different states (versions) of each plate." }
  ],
  'rembrandt-selfportrait-with-beret-and-gold-chain': [
    { question: "What does the gold chain signify?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> wore a <strong>gold chain symbolizing artistic prestige</strong>, a convention showing painters as elevated beyond mere craftsmen." },
    { question: "Where is this self-portrait?", answer: "This elegant image is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "What is a beret in Dutch painting?", answer: "The soft <strong>beret was associated with artists</strong> and intellectuals, appearing frequently in Dutch Golden Age portraits." }
  ],
  'rembrandt-selfportrait-with-gorget-and-beret': [
    { question: "What is a gorget?", answer: "A <strong>gorget</strong> is metal armor protecting the throat. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> often wore military props to add drama to portraits." },
    { question: "Where can I view this?", answer: "This military-styled self-portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Why dress in armor?", answer: "Rembrandt collected <strong>costumes, armor, and weapons</strong> as studio props, using them to transform ordinary sitters into heroic figures." }
  ],
  'rembrandt-selfportrait-with-hat': [
    { question: "What age was Rembrandt here?", answer: "Painted in <strong>1652</strong>, <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> was 46, showing the mature artist before his financial troubles peaked." },
    { question: "Where is this self-portrait?", answer: "This hat portrait hangs at the <a href='/apps/masterpieces/museum/kunsthistorisches-museum'><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria." },
    { question: "How did Rembrandt's style change with age?", answer: "His brushwork grew <strong>looser and more expressive</strong> while his psychological depth intensified in later self-portraits." }
  ],
  'rembrandt-selfportrait-with-helmet': [
    { question: "Why a helmet?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> transformed himself into a <strong>soldier or warrior</strong> using props from his collection, adding drama and historical resonance." },
    { question: "Where is this work?", answer: "This helmeted self-portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "Did Rembrandt collect armor?", answer: "Yes. Rembrandt maintained a <strong>large studio collection</strong> of costumes, weapons, and exotic objects for use in his paintings." }
  ],
  'rembrandt-selfportrait-with-plumed-cap-and-lowered-sabre': [
    { question: "What does the sabre represent?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> used the <strong>lowered sabre</strong> to create a theatrical, almost swaggering portrait suggesting military confidence." },
    { question: "Where is this etching?", answer: "This dramatic print is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, among their Rembrandt etchings." },
    { question: "What is a plumed cap?", answer: "A <strong>feathered beret</strong> was fashionable dress that also carried artistic associations, appearing in many Dutch portraits." }
  ],
  'rembrandt-selfportrait-with-raised-sabre': [
    { question: "Why raise the sabre?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created a <strong>more aggressive pose</strong> than the lowered-sabre version, studying how gesture affects mood." },
    { question: "Where is this work?", answer: "This raised-sabre portrait is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "Did Rembrandt paint pendant pairs?", answer: "Sometimes Rembrandt created <strong>variant compositions</strong> exploring the same subject differently, though not always as formal pairs." }
  ],

  // === SASKIA PORTRAITS (3 paintings) ===
  'rembrandt-rembrandts-wife-with-pearls-in-her-hair': [
    { question: "Who was Rembrandt's wife?", answer: "<strong>Saskia van Uylenburgh</strong> married <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> in 1634. She came from a wealthy family and appears in many of his paintings." },
    { question: "Where is this portrait?", answer: "This pearl-adorned portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia." },
    { question: "What do pearls signify?", answer: "Pearls symbolized <strong>purity and wealth</strong> in Dutch Golden Age art, appropriate for a wealthy bride." }
  ],
  'rembrandt-saskia-with-a-red-flower': [
    { question: "What flower does Saskia hold?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted his wife holding a <strong>red flower</strong>, possibly a carnation symbolizing love and betrothal." },
    { question: "Where can I see this painting?", answer: "This tender portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "How long were they married?", answer: "Saskia and Rembrandt were married <strong>eight years</strong> before her death in 1642 at age 29, leaving Rembrandt devastated." }
  ],
  'rembrandt-sick-woman-with-a-large-white-headdress-saskia': [
    { question: "Is this Saskia ill?", answer: "This drawing likely shows <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> wife <strong>during her final illness</strong>. She died in 1642, probably from tuberculosis." },
    { question: "Where is this drawing?", answer: "This poignant image is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>, among their Rembrandt drawings." },
    { question: "Did Rembrandt draw from life?", answer: "Yes. Many of Rembrandt's most moving works are <strong>intimate sketches</strong> of family members in everyday moments." }
  ],

  // === ST. JEROME SERIES (4 paintings) ===
  'rembrandt-st-jerome-beside-a-pollard-willow': [
    { question: "Who was St. Jerome?", answer: "<strong>Saint Jerome</strong> translated the Bible into Latin. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> often showed him as a hermit meditating in nature." },
    { question: "Where is this etching?", answer: "This landscape with Jerome is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "What is a pollard willow?", answer: "A <strong>pollard willow</strong> is a tree trimmed regularly for branches. Rembrandt included these distinctly Dutch trees in many landscapes." }
  ],
  'rembrandt-st-jerome-kneeling': [
    { question: "Why is Jerome kneeling?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted Jerome in <strong>prayer or penitence</strong>, showing the saint's devoted spiritual life." },
    { question: "Where can I see this?", answer: "This kneeling Jerome is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Was Jerome a popular subject?", answer: "Yes. Jerome's <strong>scholarly and ascetic life</strong> appealed to Protestant and Catholic patrons alike during the Dutch Golden Age." }
  ],
  'rembrandt-st-jerome-praying': [
    { question: "What distinguishes this Jerome?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> focused on <strong>Jerome's spiritual intensity</strong> rather than his scholarly attributes like books or lion." },
    { question: "Where is this etching?", answer: "This praying Jerome is at the <a href='/apps/masterpieces/museum/philadelphia-museum-of-art'><strong>Philadelphia Museum of Art</strong></a>." },
    { question: "Did Rembrandt create many religious prints?", answer: "Yes. Rembrandt produced <strong>over 300 etchings</strong>, many depicting biblical scenes that sold well to collectors." }
  ],
  'rembrandt-st-francis-beneath-a-tree-praying': [
    { question: "Who was St. Francis?", answer: "<strong>Saint Francis of Assisi</strong> founded the Franciscan order. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> showed him in contemplative prayer beneath a tree." },
    { question: "Where is this etching?", answer: "This Francis print is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "Why depict Catholic saints in Protestant Holland?", answer: "Religious subjects <strong>sold well throughout Europe</strong>. Rembrandt's prints reached Catholic collectors abroad." }
  ],

  // === BIBLICAL SCENES ===
  'rembrandt-jacob-with-laban': [
    { question: "What Bible story is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted <strong>Jacob negotiating with his father-in-law Laban</strong> from Genesis, a story of cunning and family conflict." },
    { question: "Where can I see this?", answer: "This biblical scene is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Why paint Old Testament scenes?", answer: "Old Testament stories provided <strong>dramatic narratives</strong> acceptable to Protestant patrons who avoided Catholic saint imagery." }
  ],
  'rembrandt-the-angel-appearing-to-the-shepherds': [
    { question: "What moment is depicted?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> captured the <strong>angel announcing Christ's birth</strong> to terrified shepherds, a dramatic nocturnal scene from Luke's Gospel." },
    { question: "Where is this etching?", answer: "This dramatic print is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "How did Rembrandt show divine light?", answer: "Rembrandt used <strong>brilliant white bursting from darkness</strong> to represent heavenly radiance, a technique he mastered in prints and paintings." }
  ],
  'rembrandt-the-baptism-of-the-eunuch': [
    { question: "What story is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> illustrated <strong>Philip baptizing an Ethiopian official</strong> from Acts, an early Christian conversion story." },
    { question: "Where is this work?", answer: "This baptism scene is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "Why include exotic figures?", answer: "The Ethiopian eunuch let Rembrandt explore <strong>exotic costume and setting</strong>, interests reflected throughout his work." }
  ],
  'rembrandt-the-beheading-of-john-the-baptist': [
    { question: "What scene is shown?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted the <strong>execution of John the Baptist</strong>, ordered by Herod at Salome's request." },
    { question: "Where is this etching?", answer: "This dramatic print is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "How did Rembrandt handle violence?", answer: "Rembrandt often showed <strong>the moment before or psychological aftermath</strong> rather than explicit violence, heightening emotional impact." }
  ],
  'rembrandt-the-blindness-of-tobit': [
    { question: "Who was Tobit?", answer: "<strong>Tobit</strong> is a figure from the Apocrypha who was blinded but later healed. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted his story multiple times." },
    { question: "Where can I see this?", answer: "This Tobit etching is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "Why did Rembrandt favor Tobit's story?", answer: "Tobit's tale of <strong>blindness, faith, and healing</strong> offered rich dramatic possibilities that Rembrandt explored repeatedly." }
  ],
  'rembrandt-the-circumcision': [
    { question: "What ritual is depicted?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> showed <strong>Jesus's circumcision</strong>, a biblical event marking his entrance into the Jewish covenant." },
    { question: "Where is this etching?", answer: "This religious print is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "Did Rembrandt paint many infancy scenes?", answer: "Yes. Rembrandt depicted <strong>Christ's early life</strong> multiple times, including circumcision, presentation, and flight to Egypt." }
  ],
  'rembrandt-the-circumcision-in-the-stable': [
    { question: "Why set this in a stable?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> placed the circumcision in <strong>humble surroundings</strong> emphasizing Christ's birth among the poor." },
    { question: "Where can I see this?", answer: "This stable version is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "How did Rembrandt vary repeated subjects?", answer: "Rembrandt explored <strong>different settings, lighting, and compositions</strong> for the same biblical events across multiple works." }
  ],
  'rembrandt-the-circumcision-small-plate': [
    { question: "What is a small plate etching?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created etchings in various sizes. <strong>Small plates</strong> offered intimate, detailed scenes for close viewing." },
    { question: "Where is this print?", answer: "This small circumcision is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "Were small prints less valued?", answer: "No. Small prints were often <strong>highly prized</strong> for their delicacy and collected alongside larger works." }
  ],
  'rembrandt-the-crucifixion-a-square-small-plate': [
    { question: "Why a square format?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> experimented with <strong>unusual formats</strong> that concentrated attention on Christ's suffering at the cross." },
    { question: "Where is this etching?", answer: "This crucifixion is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "How did Rembrandt depict crucifixion?", answer: "Rembrandt emphasized <strong>human suffering and darkness</strong> rather than triumphant imagery, reflecting Protestant theology." }
  ],
  'rembrandt-the-descent-from-the-cross-by-torchlight': [
    { question: "What moment is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> showed <strong>Christ's body being lowered from the cross</strong> at night, lit dramatically by torches." },
    { question: "Where is this print?", answer: "This torchlit descent is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "Why use torchlight?", answer: "Torchlight let Rembrandt create <strong>extreme contrast</strong> between deep shadow and bright illumination, heightening emotion." }
  ],
  'rembrandt-the-three-crosses': [
    { question: "What is The Three Crosses?", answer: "This is one of <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> <strong>most ambitious etchings</strong>, showing the crucifixion with dramatic divine light and dense crowds." },
    { question: "Where can I see this?", answer: "Impressions exist in many museums; this one is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "What are states in printmaking?", answer: "Rembrandt <strong>reworked his plates</strong> between printings. Collectors prize different states showing his evolving vision." }
  ],
  'rembrandt-the-tribute-money': [
    { question: "What parable is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> illustrated Jesus being asked about <strong>paying taxes to Caesar</strong>, a test of his loyalty." },
    { question: "Where is this etching?", answer: "This tribute scene is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "How did Rembrandt depict Christ?", answer: "Rembrandt showed Jesus as <strong>gentle and human</strong> rather than idealized, reflecting his empathetic approach to sacred figures." }
  ],
  'rembrandt-the-triumph-of-mordechai': [
    { question: "Who was Mordechai?", answer: "<strong>Mordechai</strong> is a hero from the Book of Esther who saved the Jewish people. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> showed his triumphant procession." },
    { question: "Where is this work?", answer: "This Mordechai triumph is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "Why depict Esther stories?", answer: "The Esther narrative offered <strong>exotic court settings</strong> and dramatic reversals that appealed to Rembrandt and his patrons." }
  ],
  'rembrandt-presentation-in-the-temple': [
    { question: "What is the Presentation?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted <strong>Mary and Joseph presenting infant Jesus</strong> at the Temple, where Simeon recognized the Messiah." },
    { question: "Where is this work?", answer: "This presentation scene is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "Why focus on this moment?", answer: "The scene let Rembrandt show <strong>aged Simeon's profound emotion</strong> upon holding the child he'd waited his whole life to see." }
  ],
  'rembrandt-madonna-and-child-in-the-clouds': [
    { question: "Did Rembrandt paint Catholic subjects?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted <strong>Madonna scenes</strong> that sold to Catholic collectors, though Protestant patrons rarely commissioned them." },
    { question: "Where is this work?", answer: "This Madonna is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "How did Rembrandt treat the Virgin Mary?", answer: "Rembrandt showed Mary as a <strong>real mother</strong> rather than an idealized queen, emphasizing tender human connection." }
  ],
  'rembrandt-the-virgin-and-the-child-with-the-cat-and-snake': [
    { question: "Why include a cat and snake?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> added animals that symbolize <strong>everyday life and spiritual danger</strong>, grounding the holy scene in reality." },
    { question: "Where is this etching?", answer: "This unusual Madonna is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "Is the snake symbolic?", answer: "Yes. The snake traditionally represents <strong>Satan</strong>, whom Christ was born to defeat, adding theological meaning." }
  ],
  'rembrandt-the-virgin-with-the-instruments-of-the-passion': [
    { question: "What are instruments of the Passion?", answer: "The <strong>instruments of the Passion</strong> are objects from Christ's crucifixion: nails, crown of thorns, and cross shown with <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> Virgin Mary." },
    { question: "Where is this etching?", answer: "This symbolic Virgin is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Why combine Mary with crucifixion symbols?", answer: "The combination emphasizes Mary's <strong>foreknowledge of her son's suffering</strong>, a common devotional theme." }
  ],

  // === LANDSCAPES ===
  'rembrandt-landscape-with-a-canal-and-large-boat': [
    { question: "Did Rembrandt paint landscapes?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created <strong>relatively few pure landscapes</strong>, but his etchings and drawings show deep appreciation for Dutch scenery." },
    { question: "Where is this etching?", answer: "This canal scene is at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam." },
    { question: "What makes Dutch landscapes distinctive?", answer: "Dutch landscapes emphasize <strong>flat horizons, big skies, and water</strong>, reflecting the actual terrain of the Netherlands." }
  ],
  'rembrandt-landscape-with-a-man-sketching-a-scene': [
    { question: "Who is the figure sketching?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> included an <strong>artist at work</strong> in the landscape, perhaps representing himself or commenting on artistic practice." },
    { question: "Where is this work?", answer: "This landscape with artist is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Did Rembrandt sketch outdoors?", answer: "Yes. Rembrandt made <strong>many landscape drawings</strong> directly from nature around Amsterdam, capturing everyday Dutch scenes." }
  ],
  'rembrandt-landscape-with-a-shepherd-and-a-dog': [
    { question: "What type of landscape is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created a <strong>pastoral scene</strong> with shepherd and dog, evoking rural peace outside Amsterdam's bustling city." },
    { question: "Where can I see this?", answer: "This pastoral landscape is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Were pastoral themes popular?", answer: "Yes. <strong>Pastoral imagery</strong> represented idealized rural life appealing to Dutch urban collectors." }
  ],
  'rembrandt-view-of-diemen': [
    { question: "Where is Diemen?", answer: "<strong>Diemen</strong> is a village near Amsterdam where <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> sketched the flat Dutch landscape with characteristic windmills." },
    { question: "Where is this etching?", answer: "This Diemen view is at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam." },
    { question: "How did Rembrandt capture Dutch light?", answer: "Rembrandt mastered showing <strong>cloud shadows moving across flat land</strong>, creating atmospheric depth in minimal terrain." }
  ],
  'rembrandt-winter-landscape': [
    { question: "What makes this a winter scene?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> captured the <strong>cold Dutch winter</strong> with frozen canals and bare trees under grey skies." },
    { question: "Where is this painting?", answer: "This winter landscape is at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "Were winter scenes a Dutch specialty?", answer: "Yes. Dutch artists excelled at <strong>winter landscapes</strong> showing skating, frozen rivers, and snow-covered villages." }
  ],

  // === PORTRAITS AND STUDIES ===
  'rembrandt-jacob-haring-portrait-the-old-haring-': [
    { question: "Who was Jacob Haring?", answer: "<strong>Jacob Haring</strong> was likely a merchant or professional whose <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> portrait captures with characteristic psychological depth." },
    { question: "Where is this portrait?", answer: "This Haring portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "What makes Rembrandt's portraits special?", answer: "Rembrandt captured <strong>inner life and character</strong> beyond mere likeness, making sitters seem to think and feel." }
  ],
  'rembrandt-jan-cornelis-sylvius': [
    { question: "Who was Jan Sylvius?", answer: "<strong>Jan Cornelis Sylvius</strong> was a Calvinist preacher and <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> cousin by marriage, depicted preaching with theatrical gesture." },
    { question: "Where is this etching?", answer: "This preacher portrait is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "How did Rembrandt portray preachers?", answer: "Rembrandt showed preachers with <strong>passionate energy</strong>, hands gesturing as if mid-sermon, capturing Protestant oratory." }
  ],
  'rembrandt-seated-old-man': [
    { question: "Who is this old man?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> often painted <strong>anonymous elderly figures</strong>, finding character and dignity in weathered faces." },
    { question: "Where is this painting?", answer: "This seated figure is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Why paint anonymous subjects?", answer: "Old men served as <strong>models for biblical patriarchs</strong> and allowed Rembrandt to study age without commission constraints." }
  ],
  'rembrandt-the-schoolmaster': [
    { question: "What is depicted?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> showed a <strong>schoolmaster teaching</strong>, a common Dutch genre subject celebrating education and literacy." },
    { question: "Where is this etching?", answer: "This educational scene is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Was education valued in Holland?", answer: "Yes. The Dutch Republic had <strong>high literacy rates</strong>, and schoolroom scenes celebrated this national achievement." }
  ],
  'rembrandt-seated-naked-woman-woman-bathing-her-feet-at-a-bro': [
    { question: "What type of study is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created <strong>intimate nude studies</strong> showing women in private moments, radically different from idealized classical nudes." },
    { question: "Where is this etching?", answer: "This bathing woman is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "How did Rembrandt's nudes differ?", answer: "Rembrandt showed <strong>real bodies</strong> with imperfections, prioritizing humanity over classical ideals." }
  ],
  'rembrandt-standing-beggar-turned-to-the-right': [
    { question: "Why depict beggars?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created many <strong>beggar studies</strong>, finding dignity and character in Amsterdam's poor often overlooked by others." },
    { question: "Where is this etching?", answer: "This beggar study is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Were beggar prints popular?", answer: "Yes. Rembrandt's beggar etchings were <strong>collected as character studies</strong> showing his range beyond wealthy portrait subjects." }
  ],
  'rembrandt-two-studies-of-the-head-of-an-old-man': [
    { question: "Why make multiple studies?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> drew the <strong>same model from different angles</strong> to understand form and expression more completely." },
    { question: "Where is this drawing?", answer: "These head studies are at the <a href='/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us'><strong>J. Paul Getty Museum</strong></a> in Los Angeles." },
    { question: "How did Rembrandt use study drawings?", answer: "Studies served as <strong>reference for larger paintings</strong>, helping Rembrandt perfect poses and expressions." }
  ],
  'rembrandt-three-female-heads-with-one-sleeping': [
    { question: "What is shown?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> captured <strong>three women's heads</strong> in different states, including one peacefully sleeping, perhaps Saskia." },
    { question: "Where is this etching?", answer: "This intimate study is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Did Rembrandt draw sleeping figures?", answer: "Yes. Rembrandt made many <strong>studies of sleeping people</strong>, capturing relaxed, unguarded expressions rarely seen in formal art." }
  ],
  'rembrandt-three-oriental-figures-jacob-and-laban': [
    { question: "Why oriental costumes?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> dressed biblical figures in <strong>exotic Eastern costumes</strong> to evoke the ancient Near Eastern setting." },
    { question: "Where is this etching?", answer: "This oriental scene is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "Where did Rembrandt find costumes?", answer: "Rembrandt collected <strong>exotic textiles and props</strong> in Amsterdam, a major trading center with goods from Asia and beyond." }
  ],

  // === MISCELLANEOUS ===
  'rembrandt-the-hog': [
    { question: "Why paint a slaughtered pig?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted a <strong>butchered hog</strong> hanging for curing, a subject showing his interest in honest, unglamorous reality." },
    { question: "Where is this etching?", answer: "This pig study is at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam." },
    { question: "Was butchery a proper art subject?", answer: "Such scenes were rare but showed Rembrandt's <strong>democratic approach</strong> to subject matter, finding beauty in everyday Dutch life." }
  ],
  'rembrandt-the-hundred-guilder-print': [
    { question: "Why called the Hundred Guilder Print?", answer: "Legend says this etching once sold for <strong>100 guilders</strong>, an enormous sum proving <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> prints rivaled paintings in value." },
    { question: "Where can I see this?", answer: "Impressions exist in many museums; this one is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "What scene is depicted?", answer: "The print shows <strong>Christ healing the sick</strong>, combining multiple Gospel episodes into one panoramic composition." }
  ],
  'rembrandt-the-large-lion-hunt': [
    { question: "What inspired this scene?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> created this <strong>dramatic lion hunt</strong> inspired by Rubens and earlier artists who depicted such exotic violence." },
    { question: "Where is this etching?", answer: "This lion hunt is at the <a href='/apps/masterpieces/museum/cleveland-museum-of-art'><strong>Cleveland Museum of Art</strong></a>." },
    { question: "Did Rembrandt see lions?", answer: "Rembrandt likely saw <strong>lions in menageries</strong> and studied prints by other artists to create convincing animal forms." }
  ],
  'rembrandt-the-monk-in-the-cornfield': [
    { question: "What is this scene?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted a <strong>monk in a wheat field</strong>, a mysterious subject combining religious and pastoral elements." },
    { question: "Where is this etching?", answer: "This monk scene is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "Were monks common in Dutch art?", answer: "Monks were rare in Protestant Dutch art, making this <strong>unusual subject</strong> perhaps aimed at Catholic collectors abroad." }
  ],
  'rembrandt-the-phoenix-or-the-statue-overthrown': [
    { question: "What does this allegory mean?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> <strong>phoenix rising from flames</strong> may represent renewal, possibly commemorating Dutch independence or artistic rebirth." },
    { question: "Where is this etching?", answer: "This allegorical print is at the <a href='/apps/masterpieces/museum/art-institute-chicago'><strong>Art Institute of Chicago</strong></a>." },
    { question: "Did Rembrandt create allegories?", answer: "Yes, though less often than biblical scenes. <strong>Allegorical works</strong> allowed commentary on current events through symbolic imagery." }
  ],
  'rembrandt-the-skater': [
    { question: "What winter activity is shown?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> captured a <strong>skater on frozen Dutch canals</strong>, a beloved winter pastime in the Netherlands." },
    { question: "Where is this etching?", answer: "This skating scene is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Why was skating important in Dutch art?", answer: "Skating scenes celebrated <strong>Dutch winter traditions</strong> and the country's unique relationship with water and ice." }
  ],
  'rembrandt-the-ship-of-fortune': [
    { question: "What allegory is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted a <strong>ship representing fortune</strong>, a common allegory about life's unpredictable voyage." },
    { question: "Where is this etching?", answer: "This allegorical ship is at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London." },
    { question: "Why use maritime imagery?", answer: "Ships were central to <strong>Dutch wealth and identity</strong>, making maritime allegories resonate with local audiences." }
  ],
  'rembrandt-the-spanish-gypsy': [
    { question: "Who is the Spanish Gypsy?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt's</strong></a> title suggests an <strong>exotic figure</strong>, though the model was likely a local woman dressed in theatrical costume." },
    { question: "Where is this work?", answer: "This exotic portrait is at the <a href='/apps/masterpieces/museum/hermitage'><strong>State Hermitage Museum</strong></a> in St. Petersburg." },
    { question: "Why exotic subjects?", answer: "Rembrandt's Amsterdam was a <strong>cosmopolitan trading center</strong> where exotic peoples and goods inspired artistic imagination." }
  ],
  'rembrandt-the-shepards-in-the-woods': [
    { question: "What pastoral scene is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted <strong>shepherds resting in woodland</strong>, a peaceful scene evoking Arcadian poetry and painting traditions." },
    { question: "Where is this work?", answer: "This pastoral scene is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "What is Arcadian imagery?", answer: "<strong>Arcadia</strong> was an ancient Greek region symbolizing idealized pastoral life, a theme Dutch artists adopted from Italian predecessors." }
  ],
  'rembrandt-woman-suckling-a-child': [
    { question: "What intimate scene is this?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted <strong>a mother nursing her infant</strong>, a tender domestic scene unusual for its time's directness." },
    { question: "Where is this etching?", answer: "This nursing scene is at the <a href='/apps/masterpieces/museum/frick-collection'><strong>Frick Collection</strong></a> in New York." },
    { question: "Did Rembrandt show domestic life?", answer: "Yes. Rembrandt's <strong>intimate family scenes</strong> showed ordinary Dutch life with unprecedented warmth and honesty." }
  ],
  'rembrandt-the-woman-with-the-arrow': [
    { question: "Who is this woman?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> depicted a <strong>nude woman with an arrow</strong>, possibly representing Venus wounded by Cupid's dart." },
    { question: "Where is this work?", answer: "This nude study is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "How did Rembrandt treat mythological subjects?", answer: "Rembrandt gave mythological figures <strong>human bodies rather than ideal forms</strong>, making goddesses seem like real women." }
  ],
  'rembrandt-st-paul-in-meditation': [
    { question: "Who was St. Paul?", answer: "<strong>Saint Paul</strong> was the apostle who spread Christianity through his letters and travels. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> showed him in thoughtful contemplation." },
    { question: "Where is this work?", answer: "This meditative Paul is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "Why show Paul meditating?", answer: "Rembrandt emphasized Paul's <strong>intellectual and spiritual depth</strong> rather than his dramatic conversion or missionary travels." }
  ],
  'rembrandt-st-paul-in-prison': [
    { question: "Why was Paul imprisoned?", answer: "<strong>Saint Paul</strong> was imprisoned multiple times for preaching Christianity. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> captured him reflecting in confinement." },
    { question: "Where is this work?", answer: "This prison scene is in a <a href='/apps/masterpieces/museum/private-collection'><strong>private collection</strong></a>." },
    { question: "How did Rembrandt depict imprisonment?", answer: "Rembrandt used <strong>darkness and solitude</strong> to show the isolation of prison while emphasizing Paul's unbroken spirit." }
  ]
};

async function main() {
  console.log('=== Adding Monet and Rembrandt FAQs ===\n');

  let monetUpdated = 0;
  let rembrandtUpdated = 0;

  // Update Monet FAQs
  console.log('--- Updating Monet FAQs ---');
  for (const [slug, faqArray] of Object.entries(monetFaqs)) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: {
        faqs: faqArray,
        updatedAt: new Date()
      }
    });

    if (result.count > 0) {
      console.log('Updated:', slug);
      monetUpdated++;
    } else {
      console.log('Not found:', slug);
    }
  }

  // Update Rembrandt FAQs
  console.log('\n--- Updating Rembrandt FAQs ---');
  for (const [slug, faqArray] of Object.entries(rembrandtFaqs)) {
    const result = await prisma.artwork.updateMany({
      where: { slug },
      data: {
        faqs: faqArray,
        updatedAt: new Date()
      }
    });

    if (result.count > 0) {
      console.log('Updated:', slug);
      rembrandtUpdated++;
    } else {
      console.log('Not found:', slug);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Monet: ${monetUpdated} artworks updated`);
  console.log(`Rembrandt: ${rembrandtUpdated} artworks updated`);
  console.log(`Total: ${monetUpdated + rembrandtUpdated} artworks with new FAQs`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
