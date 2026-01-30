const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Museum FAQs batch 5: remaining 2-artwork museums
const museumFaqs = {
  'reggio-calabria-museum': [
    { question: "What is the museum's most famous work?", answer: "The <strong>Riace Bronzes</strong>, two full-size Greek bronze warriors discovered in the sea off Calabria in 1972, are the museum's greatest treasures. They're among the <strong>finest surviving ancient Greek bronzes</strong>." },
    { question: "Where is the museum?", answer: "The <strong>Museo Nazionale della Magna Grecia</strong> is in Reggio Calabria, southern Italy. It documents the Greek colonies (Magna Graecia) that flourished in southern Italy from the 8th century BC." },
    { question: "What else does the collection hold?", answer: "Beyond the bronzes, the museum holds <strong>Greek pottery, terracottas, and jewelry</strong> from archaeological sites across Calabria. These objects illuminate daily life in the ancient Greek colonies." }
  ],
  'sorolla-museum': [
    { question: "What is the Sorolla Museum?", answer: "The <strong>Sorolla Museum</strong> in Madrid is the former home and studio of <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a>. The house preserves his personal collection, paintings, and the Andalusian-style gardens he designed." },
    { question: "What can visitors see?", answer: "The museum displays <strong>Sorolla's paintings, sketches, and personal objects</strong> in the rooms where he lived and worked. His luminous Mediterranean beach scenes and portraits fill the studio he built in 1911." },
    { question: "Where is the museum located?", answer: "The museum is at <strong>General Martínez Campos 37</strong> in Madrid's Chamberí district. The gardens Sorolla designed, inspired by the Alhambra, are as much a highlight as the paintings." }
  ],
  'musee-royal-beaux-arts-antwerp': [
    { question: "What is the Royal Museum of Fine Arts Antwerp?", answer: "The <strong>KMSKA</strong> (Royal Museum of Fine Arts Antwerp) holds Belgium's finest collection of Flemish art. It reopened in 2022 after 11 years of renovation with a striking new gallery design." },
    { question: "What are the highlights?", answer: "The museum holds masterworks by <strong>Rubens, Van Dyck, Jordaens, and Jan van Eyck</strong>. Its Flemish Primitives and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> galleries are among the finest in the world." },
    { question: "How long was the renovation?", answer: "The museum closed in <strong>2011</strong> for a renovation that took over a decade. The 2022 reopening revealed a modern interior within the original 1890 neoclassical building." }
  ],
  'national-museum-western-art-tokyo': [
    { question: "What is the National Museum of Western Art?", answer: "The <strong>National Museum of Western Art</strong> in Tokyo holds Japan's most comprehensive collection of Western art. The main building, designed by <strong>Le Corbusier</strong>, is a UNESCO World Heritage Site." },
    { question: "What is the collection based on?", answer: "The core collection came from <strong>Matsukata Kōjirō</strong>, a Japanese industrialist who amassed Impressionist paintings and Rodin sculptures in early 20th-century Paris. France returned the collection to Japan in 1959." },
    { question: "Where is it located?", answer: "The museum is in <strong>Ueno Park</strong>, Tokyo's cultural district. Le Corbusier's 1959 building, his only work in East Asia, stands alongside other major museums in the park." }
  ],
  'brancacci-chapel': [
    { question: "What is the Brancacci Chapel?", answer: "The <strong>Brancacci Chapel</strong> in Florence's Santa Maria del Carmine church contains frescoes by Masaccio and Masolino. Masaccio's contribution is considered a <strong>founding monument of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting</strong>." },
    { question: "What makes the frescoes important?", answer: "Masaccio's frescoes (c. 1425-27) introduced <strong>naturalistic perspective, light, and human emotion</strong> to painting. Artists from Michelangelo to Raphael studied these walls, making the chapel a school for generations." },
    { question: "Can visitors see the frescoes?", answer: "Yes, but visits are <strong>limited to 30 minutes</strong> in small groups to protect the frescoes. Advance booking is recommended. The chapel is in the Oltrarno district on the south bank of the Arno." }
  ],
  'musee-ostende': [
    { question: "What is Mu.ZEE?", answer: "<strong>Mu.ZEE</strong> is the modern art museum of Ostend, Belgium. It focuses on <strong>Belgian art from 1830 to the present</strong>, with a special emphasis on artists connected to the Belgian coast." },
    { question: "Which artists are featured?", answer: "The museum holds important works by <strong>James Ensor, Léon Spilliaert, and Constant Permeke</strong>. Ensor and Spilliaert both lived in Ostend, making the museum essential for understanding Belgian modernism." },
    { question: "Where is the museum?", answer: "Mu.ZEE is in a <strong>converted department store on Romestraat</strong> in Ostend. Its location in this seaside city connects it to the coastal light and atmosphere that inspired many of its collected artists." }
  ],
  'pinacoteca-tosio-martinengo-brescia-italy': [
    { question: "Where is the Pinacoteca Tosio Martinengo?", answer: "The <strong>Pinacoteca Tosio Martinengo</strong> is in Brescia, Lombardy, Italy. It occupies the Martinengo da Barco palace and holds the city's main collection of paintings from the 13th to 18th centuries." },
    { question: "What are the highlights?", answer: "The gallery holds works by <strong>Raphael, Lotto, Moretto, and Romanino</strong>. Its Brescian Renaissance paintings are the collection's greatest strength, showing a local school that rivaled Venice." },
    { question: "When did the collection form?", answer: "The museum merged two noble collections: <strong>Count Tosio's and Count Martinengo's</strong> bequests in the 19th century. It reopened in 2018 after a major renovation with modern exhibition design." }
  ],
  'capitoline-museums-rome-italy': [
    { question: "What are the Capitoline Museums?", answer: "The <strong>Capitoline Museums</strong> on Rome's Capitoline Hill are the world's oldest public museums, founded in <strong>1471</strong> when Pope Sixtus IV donated a group of bronze statues to the Roman people." },
    { question: "What masterworks do they hold?", answer: "Highlights include the <strong>Capitoline Wolf, the Dying Gaul, and Caravaggio's Fortune Teller</strong>. The museums' ancient sculptures and Renaissance paintings make them essential for understanding Roman art." },
    { question: "Who designed the piazza?", answer: "<strong>Michelangelo</strong> designed the Piazza del Campidoglio and the flanking palazzi that house the museums. His harmonious Renaissance square remains one of Rome's most celebrated urban spaces." }
  ],
  'museo-nacional-de-bellas-artes-mnba-buenos-aires-a': [
    { question: "Where is the MNBA?", answer: "The <strong>Museo Nacional de Bellas Artes</strong> is in Buenos Aires' Recoleta neighborhood, Argentina. It's the country's most important art museum, with <strong>over 12,000 works</strong> from antiquity to the present." },
    { question: "What are the highlights?", answer: "The museum holds works by <strong>El Greco, Goya, Rodin, Monet, and Degas</strong> alongside the finest collection of Argentine art anywhere. Its European holdings are the strongest in South America." },
    { question: "Is admission free?", answer: "Yes, <strong>admission is free</strong>. The museum occupies a converted 1870s pump house in Recoleta, one of Buenos Aires' most elegant neighborhoods." }
  ],
  'national-museum-of-serbia-belgrade-serbia': [
    { question: "Where is the National Museum of Serbia?", answer: "The <strong>National Museum of Serbia</strong> is on Republic Square in central Belgrade. Founded in 1844, it's the country's oldest and largest museum with over <strong>400,000 objects</strong>." },
    { question: "What does the collection include?", answer: "The museum holds <strong>Serbian medieval art, European paintings, and archaeological finds</strong>. Its collection of Byzantine and Serbian Orthodox icons is among the most important in the Balkans." },
    { question: "When did it reopen?", answer: "After a <strong>15-year closure for renovation</strong>, the museum reopened in 2018. The restored building and modernized galleries brought new attention to Serbia's rich cultural heritage." }
  ],
  'national-museum-of-san-matteo-pisa-italy': [
    { question: "Where is this museum?", answer: "The <strong>National Museum of San Matteo</strong> is in a former Benedictine convent on the banks of the Arno in Pisa, Italy. It holds the city's most important collection of medieval and <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> art." },
    { question: "What are the highlights?", answer: "The museum's strengths include <strong>Pisan Romanesque sculpture and early Italian paintings</strong>. Works by Masaccio, Gentile da Fabriano, and other 14th-15th century masters document Tuscany's artistic development." },
    { question: "What is the building's history?", answer: "The <strong>convent of San Matteo</strong> dates from the 11th century. It became a museum in 1949, providing an authentically medieval setting for its collection of Tuscan religious art." }
  ],
  'mus233e-des-beauxarts-de-bordeaux-bordeaux-france': [
    { question: "Where is the Musée des Beaux-Arts de Bordeaux?", answer: "The <strong>Musée des Beaux-Arts de Bordeaux</strong> is in two wings flanking the Jardin de la Mairie in central Bordeaux, France. Founded in 1801, it's one of France's oldest provincial art museums." },
    { question: "What does the collection include?", answer: "The museum holds <strong>European paintings from the 15th to 20th centuries</strong>, with strengths in Delacroix, Rubens, and Matisse. Its collection reflects Bordeaux's historical wealth as a major trading port." },
    { question: "What is the gallery's setting?", answer: "The museum occupies two <strong>neoclassical wings</strong> built in 1881 across a garden. The north wing holds older works, the south wing 19th and 20th-century art, creating a pleasant walk through art history." }
  ],
  'sheffield-galleries-and-museums-sheffield-uk': [
    { question: "What are Sheffield's Galleries and Museums?", answer: "<strong>Museums Sheffield</strong> manages three venues: the Millennium Gallery, Graves Gallery, and Weston Park Museum. Together they hold the city's fine art, decorative art, and social history collections." },
    { question: "What art highlights are held?", answer: "The Graves Gallery holds <strong>British and European art</strong> including works by Cézanne, Klee, and the Camden Town Group. Sheffield's collection of Ruskin-related material is also nationally significant." },
    { question: "What is the Millennium Gallery?", answer: "The <strong>Millennium Gallery</strong> (2001) combines metalwork and design collections celebrating Sheffield's <strong>steel and cutlery heritage</strong> with temporary art exhibitions in a modern city-center space." }
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
