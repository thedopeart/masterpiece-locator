const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Museum FAQs batch 3: more 2-artwork museums
const museumFaqs = {
  'museo-del-oro': [
    { question: "Where is the Museo del Oro?", answer: "The <strong>Museo del Oro</strong> (Gold Museum) is in central Bogotá, Colombia. It holds the world's largest collection of <strong>pre-Hispanic gold artifacts</strong>, with over 34,000 pieces." },
    { question: "What does the collection include?", answer: "The museum displays <strong>gold, ceramic, and stone objects</strong> from Colombia's indigenous cultures. Its centerpiece is the Muisca Raft, a golden model depicting the legendary El Dorado ceremony." },
    { question: "When was the museum founded?", answer: "The Banco de la República founded the museum in <strong>1939</strong> to preserve Colombia's pre-Columbian heritage. It's now one of the most visited museums in South America." }
  ],
  'indianapolis-museum-of-art-ima-indianapolis-in-us': [
    { question: "Where is the Indianapolis Museum of Art?", answer: "The <strong>Indianapolis Museum of Art</strong> (now Newfields) is set on a 152-acre campus in Indianapolis, Indiana. The estate includes the historic Lilly House, sculpture park, and botanical gardens." },
    { question: "What are the collection highlights?", answer: "The museum holds strong collections of <strong>Neo-Impressionist painting, Asian art, and contemporary design</strong>. Its J.M.W. Turner watercolors and African art galleries are particularly noted." },
    { question: "What is Newfields?", answer: "In 2017, the museum rebranded as <strong>Newfields</strong>, emphasizing its combined art, nature, and garden experience. The campus includes a beer garden, outdoor art installations, and seasonal light shows." }
  ],
  'museum-de-lakenhal-leiden-netherlands': [
    { question: "Where is Museum De Lakenhal?", answer: "<strong>Museum De Lakenhal</strong> is in Leiden, Netherlands, housed in a 17th-century cloth hall. It's the city museum of Leiden, birthplace of <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>." },
    { question: "What does the collection include?", answer: "The museum holds <strong>Leiden School paintings, decorative arts, and historical objects</strong>. Works by Rembrandt's teacher and early Leiden fijnschilders (fine painters) are highlights." },
    { question: "When was the building constructed?", answer: "The Lakenhal (Cloth Hall) was built in <strong>1640</strong> for Leiden's textile industry. It became a museum in 1874 and was renovated and expanded in 2019 with a modern addition." }
  ],
  'apsley-house-wellington-museum-london-uk': [
    { question: "What is Apsley House?", answer: "<strong>Apsley House</strong> at Hyde Park Corner was the London residence of the Duke of Wellington. Known as \"Number One, London,\" it now displays his <strong>art collection and military memorabilia</strong>." },
    { question: "What paintings does it hold?", answer: "The house contains <strong>Velázquez's The Waterseller of Seville</strong> and works by Rubens, Correggio, and Goya. Many paintings were captured from Joseph Bonaparte's baggage train after the Battle of Vitoria." },
    { question: "Can visitors see the interiors?", answer: "Yes, the ground floor galleries and the <strong>Waterloo Gallery</strong> are open to visitors. The grand dining room still hosts the annual Waterloo Banquet commemorating Wellington's 1815 victory." }
  ],
  'belarusian-national-museum-of-fine-arts-minsk-bela': [
    { question: "Where is this museum?", answer: "The <strong>Belarusian National Museum of Fine Arts</strong> is in Minsk, Belarus. It's the country's largest art museum, holding over <strong>30,000 works</strong> of Belarusian, Russian, and European art." },
    { question: "What are the collection strengths?", answer: "The museum holds <strong>Belarusian art from the 12th century to the present</strong>, including icons, folk art, and Soviet-era paintings. Its European section features works from the 16th to 20th centuries." },
    { question: "When was it established?", answer: "The museum was founded in <strong>1939</strong>. Much of its original collection was lost during World War II, and the current holdings were rebuilt through acquisitions and transfers from other Soviet museums." }
  ],
  'barbara-piaseckajohnson-collection-princeton-unive': [
    { question: "What is this collection?", answer: "The <strong>Barbara Piasecka-Johnson Collection</strong> was assembled by the Polish-American art collector and philanthropist. It included major <strong>Old Master paintings</strong> later partially donated to institutions." },
    { question: "What types of art did she collect?", answer: "Piasecka-Johnson focused on <strong>European paintings from the Renaissance through the 18th century</strong>. Her collection included works attributed to major Italian, Flemish, and Dutch masters." },
    { question: "Where are the works now?", answer: "After her death in 2013, parts of the collection were <strong>auctioned and dispersed</strong> to museums and private collectors. Some works were donated to Polish institutions in her native country." }
  ],
  'harris-museum-preston-uk': [
    { question: "Where is the Harris Museum?", answer: "The <strong>Harris Museum</strong> is in Preston, Lancashire, England. Its imposing Greek Revival building (1893) on the Market Square houses fine art, decorative art, and local history collections." },
    { question: "What does the collection include?", answer: "The museum holds <strong>19th-century British paintings, Pre-Raphaelite works, and contemporary art</strong>. Its decorative arts collection includes glass, ceramics, and textiles from Lancashire's industrial heritage." },
    { question: "Who was Edmund Harris?", answer: "<strong>Edmund Robert Harris</strong> was a Preston lawyer who left his fortune to found the museum and library. His bequest created one of the finest cultural institutions in northern England." }
  ],
  'ca39-rezzonico-museo-del-settecento-venice-italy': [
    { question: "What is Ca' Rezzonico?", answer: "<strong>Ca' Rezzonico</strong> is a grand palazzo on Venice's Grand Canal, now housing the Museum of 18th-Century Venice. The building itself is a masterwork of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> architecture by Longhena." },
    { question: "What does the museum display?", answer: "The museum recreates <strong>18th-century Venetian aristocratic life</strong> with period furniture, paintings by Tiepolo and Guardi, and frescoed ceilings. It's one of the best places to experience Venice's golden age." },
    { question: "Who lived in the palazzo?", answer: "The palazzo's most famous resident was <strong>Pope Clement XIII</strong> (Carlo Rezzonico). The poet Robert Browning died here in 1889. Venice purchased it in 1935 to create the museum." }
  ],
  'national-portrait-gallery-washington-dc-usa': [
    { question: "Where is the National Portrait Gallery?", answer: "The <strong>Smithsonian's National Portrait Gallery</strong> is in the Old Patent Office Building in Washington, DC. It shares the historic structure with the Smithsonian American Art Museum." },
    { question: "What is the collection focused on?", answer: "The gallery holds <strong>portraits of notable Americans</strong> who shaped the nation's history, culture, and science. Its collection includes paintings, photographs, sculptures, and digital media." },
    { question: "Is admission free?", answer: "Yes, like all <strong>Smithsonian museums, admission is free</strong>. The gallery's highlights include the Hall of Presidents and the famous \"Lansdowne\" portrait of George Washington by Gilbert Stuart." }
  ],
  'kunstmuseum-bonn-bonn-germany': [
    { question: "Where is Kunstmuseum Bonn?", answer: "The <strong>Kunstmuseum Bonn</strong> is on the Museum Mile (Museumsmeile) in Bonn, Germany. The minimalist building by Axel Schultes opened in 1992 with spacious galleries flooded with natural light." },
    { question: "What is the collection known for?", answer: "The museum holds one of the world's largest collections of <strong>August Macke's</strong> work, alongside German art from 1945 to the present. Its <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> holdings are particularly strong." },
    { question: "What German art movements are represented?", answer: "The collection spans <strong>Rhenish Expressionism to contemporary art</strong>, with works by Macke, Max Ernst, Joseph Beuys, Georg Baselitz, and Gerhard Richter." }
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
