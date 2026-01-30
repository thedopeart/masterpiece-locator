const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Museum FAQs batch 2: museums with 2 artworks (continued)
const museumFaqs = {
  'turku-art-museum-turku-finland': [
    { question: "Where is Turku Art Museum?", answer: "The <strong>Turku Art Museum</strong> is in a granite castle-like building on Puolalanmäki hill in Turku, Finland. Built in 1904, it holds the oldest public art collection in Finland." },
    { question: "What does the collection include?", answer: "The museum focuses on <strong>Finnish and Nordic art</strong> from the 19th century to the present. Its collection includes works by the country's most celebrated painters alongside Scandinavian and international art." },
    { question: "Why is Turku significant for Finnish art?", answer: "Turku was <strong>Finland's former capital</strong> and cultural center. The city's art museum preserves the national artistic heritage with a collection that traces Finland's artistic development from Romanticism to modernism." }
  ],
  'leighton-house-museum-london-uk': [
    { question: "What is Leighton House Museum?", answer: "<strong>Leighton House</strong> was the home and studio of Victorian painter Frederic Leighton in Holland Park, London. Its Arab Hall, decorated with <strong>Islamic tiles and a golden dome</strong>, is one of London's most extraordinary interiors." },
    { question: "Can you visit the studio?", answer: "Yes, Leighton's <strong>grand painting studio</strong> with its north-facing window is preserved as he used it. The house-museum showcases his collection of paintings, sculpture, and decorative arts from the Aesthetic Movement." },
    { question: "When was the house built?", answer: "Leighton commissioned the house in <strong>1866</strong> and expanded it over 30 years. After his death in 1896, it became one of Britain's first house-museums, opening to the public in 1900." }
  ],
  'galleria-dell39accademia-di-firenze-florence-italy': [
    { question: "What is the Galleria dell'Accademia famous for?", answer: "The <strong>Galleria dell'Accademia</strong> in Florence is best known for housing <strong>Michelangelo's David</strong>, one of the most recognized sculptures in the world. It moved here from the Piazza della Signoria in 1873." },
    { question: "What else does the museum hold?", answer: "Beyond David, the gallery holds <strong>Michelangelo's unfinished Prisoners</strong> and important Florentine paintings from the 13th to 16th centuries. It also contains a collection of musical instruments." },
    { question: "Where is the gallery located?", answer: "The Galleria dell'Accademia is on <strong>Via Ricasoli in central Florence</strong>, Italy. It's one of Italy's most visited museums, drawing visitors primarily to see Michelangelo's marble masterworks." }
  ],
  'todai-ji-temple': [
    { question: "What is Tōdai-ji Temple?", answer: "<strong>Tōdai-ji</strong> is a Buddhist temple in Nara, Japan, founded in 752 AD. Its Great Buddha Hall (Daibutsuden) is one of the <strong>world's largest wooden structures</strong>, housing a massive bronze Buddha." },
    { question: "What art does the temple hold?", answer: "Tōdai-ji contains <strong>ancient Buddhist sculptures, paintings, and decorative arts</strong> spanning over 1,200 years. The Shōsōin storehouse preserves 9,000 treasures from the 8th-century Silk Road trade." },
    { question: "Is Tōdai-ji a UNESCO World Heritage Site?", answer: "Yes, Tōdai-ji is part of the <strong>Historic Monuments of Ancient Nara</strong> UNESCO World Heritage Site, designated in 1998. It remains an active place of worship and one of Japan's most important cultural landmarks." }
  ],
  'sabauda-gallery-turin-italy': [
    { question: "Where is the Sabauda Gallery?", answer: "The <strong>Galleria Sabauda</strong> is in the Manica Nuova wing of Turin's Royal Palace, Italy. It holds the former art collection of the <strong>House of Savoy</strong>, Italy's former royal family." },
    { question: "What are the collection highlights?", answer: "The gallery holds important works by <strong>Van Eyck, Memling, Mantegna, and Veronese</strong>. Its strengths in Flemish and Italian Renaissance painting reflect the Savoy dynasty's centuries of collecting across Europe." },
    { question: "When did the collection become public?", answer: "The Savoy collection became public in <strong>1832</strong> when King Charles Albert opened it to visitors. It moved to its current Royal Palace location in 2014 after extensive renovations." }
  ],
  'kupferstichkabinett-berlin-berlin-germany': [
    { question: "What is the Kupferstichkabinett?", answer: "The <strong>Kupferstichkabinett</strong> (Museum of Prints and Drawings) in Berlin holds one of the world's four largest collections of <strong>graphic art</strong>, with over 500,000 prints and 110,000 drawings." },
    { question: "What masterworks does it hold?", answer: "The collection includes drawings by <strong>Dürer, Rembrandt, Botticelli, and Picasso</strong>. Highlights include Botticelli's Dante illustrations and one of the finest groups of Dürer prints in existence." },
    { question: "Where is it located?", answer: "The Kupferstichkabinett is at the <strong>Kulturforum near Potsdamer Platz</strong> in Berlin. Due to the fragility of works on paper, only selections are displayed in rotating exhibitions." }
  ],
  'mus233e-des-beauxarts-de-strasbourg-strasbourg-fra': [
    { question: "Where is this museum?", answer: "The <strong>Musée des Beaux-Arts de Strasbourg</strong> occupies the first floor of the Rohan Palace in Strasbourg, France. This 18th-century palace was the residence of the prince-bishops of Strasbourg." },
    { question: "What does the collection include?", answer: "The museum holds <strong>European paintings from the 14th to 19th centuries</strong>, including works by Giotto, Memling, El Greco, Rubens, and Delacroix. The collection reflects Strasbourg's position between French and German culture." },
    { question: "How old is the collection?", answer: "The collection dates to <strong>1801</strong> when artworks confiscated during the French Revolution were assembled. A 1947 fire destroyed some works, but the collection remains one of France's finest provincial holdings." }
  ],
  'moderna-museet-stockholm-sweden': [
    { question: "Where is Moderna Museet?", answer: "<strong>Moderna Museet</strong> is on the island of Skeppsholmen in central Stockholm, Sweden. The museum building, designed by Rafael Moneo, opened in 1998 with views across the harbor." },
    { question: "What is the collection known for?", answer: "Moderna Museet holds one of Europe's finest collections of <strong>modern and contemporary art</strong>, including works by Picasso, Dalí, Matisse, and Rauschenberg. Its photography collection is also world-class." },
    { question: "Is admission free?", answer: "<strong>The permanent collection is free</strong> to visit. Moderna Museet also hosts major temporary exhibitions and has a branch in Malmö, southern Sweden." }
  ],
  'mus233e-des-augustins-toulouse-france': [
    { question: "Where is the Musée des Augustins?", answer: "The <strong>Musée des Augustins</strong> occupies a former Augustinian monastery in Toulouse, France. The Gothic cloister and church create one of the most atmospheric museum settings in the country." },
    { question: "What does the collection hold?", answer: "The museum holds <strong>Romanesque and Gothic sculpture</strong> alongside European paintings. Its medieval stone carvings from Toulouse's churches are considered among the finest in southern France." },
    { question: "When was it founded?", answer: "The museum opened in <strong>1795</strong>, making it one of France's oldest. The Augustinian monastery buildings, dating from the 14th century, provide a fitting home for the region's artistic heritage." }
  ],
  'historical-museum-of-crete-heraclion-greece': [
    { question: "Where is this museum?", answer: "The <strong>Historical Museum of Crete</strong> is in Heraklion, the capital of Crete, Greece. It covers the island's history from early Christian times to the modern era." },
    { question: "What art does the museum hold?", answer: "The museum's most famous artwork is <strong>El Greco's View of Mount Sinai</strong>, one of only two paintings by the Cretan-born master remaining on the island. It also holds Byzantine icons and Venetian-era art." },
    { question: "What period does the museum cover?", answer: "The museum covers Crete's history from the <strong>4th century AD to World War II</strong>, complementing the nearby Archaeological Museum's focus on Minoan civilization. Together they tell Crete's complete story." }
  ],
};

async function seed() {
  for (const [slug, faqs] of Object.entries(museumFaqs)) {
    try {
      await prisma.museum.update({
        where: { slug },
        data: { faqs: faqs, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}: ${faqs.length} FAQs`);
    } catch (err) { console.error(`✗ Failed: ${slug} - ${err.message}`); }
  }
  await prisma.$disconnect();
}
seed();
