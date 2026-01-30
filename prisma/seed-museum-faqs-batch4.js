const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Museum FAQs batch 4: more 2-artwork museums
const museumFaqs = {
  'quai-branly-museum': [
    { question: "What is the Musée du Quai Branly?", answer: "The <strong>Musée du Quai Branly</strong> in Paris showcases indigenous art from Africa, Asia, Oceania, and the Americas. Designed by Jean Nouvel, its striking building opened in 2006 near the Eiffel Tower." },
    { question: "How large is the collection?", answer: "The museum holds approximately <strong>300,000 objects</strong>, with about 3,500 on permanent display. Its collection spans thousands of years of non-Western artistic traditions from four continents." },
    { question: "What makes the architecture notable?", answer: "Jean Nouvel's design features a <strong>lush garden wall</strong> by Patrick Blanc covering the building's exterior. The raised galleries create a covered garden beneath, blending nature with architecture." }
  ],
  'barnes-foundation-philadelphia-pa-us': [
    { question: "Where is the Barnes Foundation?", answer: "The <strong>Barnes Foundation</strong> moved to a new building on the Benjamin Franklin Parkway in Philadelphia in 2012. Its collection is displayed in rooms arranged exactly as founder Albert Barnes specified." },
    { question: "What makes the Barnes collection special?", answer: "Albert Barnes assembled one of the world's greatest collections of <strong>French Impressionist and Post-Impressionist paintings</strong>. It holds 181 Renoirs, 69 Cézannes, 59 Matisses, and major Picassos." },
    { question: "Why is the hanging arrangement famous?", answer: "Barnes arranged artworks in <strong>\"ensembles\"</strong> mixing paintings, ironwork, and furniture by visual relationships rather than chronology. This unique display method is legally preserved as part of his trust." }
  ],
  'eg-b252hrle-foundation-z252rich-switzerland': [
    { question: "What is the Bührle Foundation?", answer: "The <strong>E.G. Bührle Foundation</strong> in Zürich held one of Switzerland's finest private art collections. Its <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and Post-Impressionist paintings are now displayed at the Kunsthaus Zürich." },
    { question: "What are the collection highlights?", answer: "The collection includes major works by <strong>Monet, Renoir, Cézanne, Van Gogh, and Manet</strong>. Bührle assembled the collection primarily between 1936 and 1956, focusing on French 19th-century painting." },
    { question: "Where are the paintings now?", answer: "In 2021, the collection moved to a new <strong>extension of the Kunsthaus Zürich</strong> designed by David Chipperfield. The transfer sparked debate about the collection's origins during World War II." }
  ],
  'bredius-museum-hague-netherlands': [
    { question: "What is the Bredius Museum?", answer: "The <strong>Bredius Museum</strong> in The Hague holds the personal collection of Abraham Bredius, a renowned art historian and <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> scholar. It occupies an 18th-century house on the Lange Vijverberg." },
    { question: "What does the collection include?", answer: "The museum displays <strong>Dutch Golden Age paintings</strong>, including works attributed to Rembrandt, Jan Steen, and other 17th-century masters. Bredius's eye for quality makes this a gem among small Dutch museums." },
    { question: "Who was Abraham Bredius?", answer: "<strong>Bredius</strong> (1855-1946) was a director of the Mauritshuis and the leading Rembrandt authority of his era. He's also remembered for authenticating the Han van Meegeren Vermeer forgeries." }
  ],
  'kunstmuseum-liechtenstein-vaduz-liechtenstein': [
    { question: "Where is the Kunstmuseum Liechtenstein?", answer: "The <strong>Kunstmuseum Liechtenstein</strong> is in Vaduz, the capital of the Principality of Liechtenstein. Its black basalt cube building (2000) contrasts dramatically with the Alpine landscape." },
    { question: "What does the collection focus on?", answer: "The museum specializes in <strong>modern and contemporary art</strong>, with strengths in Arte Povera, Minimalism, and post-war European art. It also displays works from the Princely Collections of Liechtenstein." },
    { question: "How large is the principality's art collection?", answer: "The <strong>Princely Collections</strong> span 500 years, including Old Masters by Rubens, Van Dyck, and Cranach. Rotating selections are shown alongside the museum's contemporary holdings." }
  ],
  'whitworth-art-gallery-university-of-manchester-man': [
    { question: "Where is the Whitworth?", answer: "The <strong>Whitworth</strong> is on Oxford Road in Manchester, England, part of the University of Manchester. A 2015 expansion by MUMA doubled its gallery space and opened the building into the surrounding park." },
    { question: "What is the collection known for?", answer: "The Whitworth holds one of the UK's finest collections of <strong>textiles and wallpapers</strong>, alongside British watercolors, prints, and modern art. Works by Turner, Constable, and contemporary artists feature prominently." },
    { question: "Is admission free?", answer: "Yes, <strong>admission is free</strong>. The Whitworth's award-winning gallery spaces combine historic and contemporary art with an emphasis on making connections between fine art and design." }
  ],
  'national-museum-pozna-poland': [
    { question: "Where is the National Museum in Poznań?", answer: "The <strong>National Museum in Poznań</strong> is in western Poland's cultural capital. Its main building on Marcinkowski Avenue houses collections spanning ancient art to the 20th century." },
    { question: "What are the collection highlights?", answer: "The museum is known for its <strong>collection of European paintings and Polish art</strong>. Highlights include medieval altarpieces, Dutch Golden Age works, and one of Poland's finest collections of modern painting." },
    { question: "What makes the gallery of medieval art notable?", answer: "The museum's <strong>Gallery of Medieval Art</strong> holds Gothic altarpieces and sculptures from Silesian and Greater Poland churches. These polychrome wooden carvings are among the best-preserved examples in Central Europe." }
  ],
  'olympia-archaeological-museum': [
    { question: "Where is the Archaeological Museum of Olympia?", answer: "The <strong>Archaeological Museum of Olympia</strong> is in Olympia, Greece, at the site of the ancient Olympic Games. It holds finds from the sanctuary of Zeus, one of antiquity's most sacred places." },
    { question: "What are the masterworks?", answer: "The museum's greatest treasures include the <strong>sculptures from the Temple of Zeus</strong>, the Hermes of Praxiteles, and the Nike of Paionios. These represent the finest surviving examples of Classical Greek sculpture." },
    { question: "What period does the collection cover?", answer: "Objects span from <strong>prehistoric times to the late Roman period</strong>, documenting the religious and athletic traditions of ancient Olympia across nearly two millennia." }
  ],
  'musee-d39art-moderne-de-troyes-troyes-france': [
    { question: "Where is this museum?", answer: "The <strong>Musée d'Art Moderne de Troyes</strong> is in the old episcopal palace of Troyes, in the Champagne region of France. The 16th-century building provides an elegant setting for modern art." },
    { question: "What is the collection based on?", answer: "The museum displays the <strong>Pierre and Denise Lévy donation</strong> of French art from 1850 to 1960. It includes works by Degas, Modigliani, Soutine, and an exceptional collection of André Derain paintings." },
    { question: "What movements are represented?", answer: "The collection covers <strong>Impressionism through the School of Paris</strong>, with particular depth in Fauvism and early 20th-century French painting. It's one of the finest modern art collections outside Paris." }
  ],
  'hecht-museum-university-of-haifa-haifa-israel': [
    { question: "Where is the Hecht Museum?", answer: "The <strong>Hecht Museum</strong> is on the campus of the University of Haifa in Israel. It combines art and archaeology in a collection that spans the ancient Mediterranean world to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>." },
    { question: "What are the highlights?", answer: "The museum holds <strong>Impressionist and Post-Impressionist paintings</strong> alongside Phoenician, Greek, and Roman antiquities. A 2,400-year-old shipwreck recovered off the Israeli coast is a major archaeological highlight." },
    { question: "Who founded the museum?", answer: "<strong>Dr. Reuben Hecht</strong>, a Haifa industrialist, donated his collections to the university. His dual passion for ancient archaeology and modern French painting created an unusually diverse museum." }
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
