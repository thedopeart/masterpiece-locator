const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Museum FAQs batch 1: museums with 3 artworks + first group of 2-artwork museums
const museumFaqs = {
  'york-art-gallery-york-uk': [
    { question: "Where is York Art Gallery?", answer: "<strong>York Art Gallery</strong> is located on Exhibition Square in the historic city of York, England. The gallery houses a collection spanning <strong>600 years of Western art</strong>, from medieval panels to contemporary works." },
    { question: "What is the collection known for?", answer: "York Art Gallery is known for its <strong>British paintings and ceramics</strong>. The Centre of Ceramic Art (CoCA) holds one of the UK's largest pottery collections alongside Old Masters and 20th-century British art." },
    { question: "When was York Art Gallery founded?", answer: "The gallery opened in <strong>1879</strong> in a purpose-built Italianate building. It underwent a major renovation completed in 2015, adding new gallery spaces and the Centre of Ceramic Art." }
  ],
  'national-museum-lagos': [
    { question: "Where is the National Museum Lagos?", answer: "The <strong>National Museum Lagos</strong> is on Awolowo Road in Onikan, Lagos Island, Nigeria. It's the country's oldest museum, housing art and artifacts that trace Nigeria's rich cultural history." },
    { question: "What does the collection include?", answer: "The museum holds <strong>Benin Bronzes, Nok terracottas, and Ife sculptures</strong> among its most prized works. These objects represent some of the finest examples of pre-colonial African art." },
    { question: "When was the museum established?", answer: "The National Museum Lagos was founded in <strong>1957</strong>, just before Nigerian independence. It preserves artifacts spanning thousands of years of West African civilization." }
  ],
  'crystal-bridges': [
    { question: "Where is Crystal Bridges Museum?", answer: "<strong>Crystal Bridges Museum of American Art</strong> is in Bentonville, Arkansas. Designed by Moshe Safdie, the museum sits within 120 acres of Ozark forest with galleries built around two spring-fed ponds." },
    { question: "Who founded Crystal Bridges?", answer: "<strong>Alice Walton</strong>, daughter of Walmart founder Sam Walton, established Crystal Bridges in 2011. She assembled a world-class collection of <strong>American art from colonial times to the present</strong> in her home state." },
    { question: "Is admission free?", answer: "Yes, <strong>general admission is free</strong>. Crystal Bridges made this commitment from its opening to ensure art accessibility in a region previously underserved by major museums." }
  ],
  'whitney-museum': [
    { question: "Where is the Whitney Museum?", answer: "The <strong>Whitney Museum of American Art</strong> is in Manhattan's Meatpacking District, New York. Renzo Piano's 2015 building overlooks the Hudson River and the southern end of the High Line park." },
    { question: "What is the Whitney known for?", answer: "The Whitney focuses exclusively on <strong>20th and 21st-century American art</strong>. Its collection of over 26,000 works includes paintings, sculptures, prints, photographs, and film by more than 3,500 artists." },
    { question: "What is the Whitney Biennial?", answer: "The <strong>Whitney Biennial</strong>, held since 1932, is the longest-running survey of contemporary American art. It showcases emerging and established artists, often sparking debate about the direction of American art." }
  ],
  'galerie-neue-meister-dresden-germany': [
    { question: "Where is the Galerie Neue Meister?", answer: "The <strong>Galerie Neue Meister</strong> is in the Albertinum on the Brühl Terrace in Dresden, Germany. It holds <strong>19th and 20th-century paintings</strong> complementing Dresden's famous Old Masters collection." },
    { question: "What highlights does the collection hold?", answer: "The gallery's strengths include German <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> paintings by Caspar David Friedrich and works by French Impressionists. It also holds important <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> art." },
    { question: "How did the collection survive WWII?", answer: "Much of the collection was <strong>hidden in tunnels and mines</strong> during World War II. Soviet forces seized the paintings in 1945, returning them to Dresden in 1955 after restoration." }
  ],
  'hospital-de-la-caridad-seville-spain': [
    { question: "What is the Hospital de la Caridad?", answer: "The <strong>Hospital de la Caridad</strong> is a 17th-century charitable institution in Seville, Spain. It was founded by Miguel de Mañara and still functions as a home for the elderly and infirm." },
    { question: "What paintings does it hold?", answer: "The hospital church contains works by <strong>Murillo and Valdés Leal</strong>, commissioned to remind visitors of charity and mortality. Valdés Leal's vanitas paintings are among the most powerful in Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art." },
    { question: "Who was Miguel de Mañara?", answer: "<strong>Miguel de Mañara</strong> was a Seville nobleman who devoted his later life to charity. He commissioned the hospital's art program as a visual sermon on <strong>death, judgment, and the value of good works</strong>." }
  ],
  'columbus-museum-of-art-columbus-oh-us': [
    { question: "Where is the Columbus Museum of Art?", answer: "The <strong>Columbus Museum of Art</strong> is in downtown Columbus, Ohio. Founded in 1878, it's one of the oldest art museums in the American Midwest with a collection spanning European and American art." },
    { question: "What are the collection highlights?", answer: "The museum holds strong collections of <strong>American modernism and European art</strong>, including works by Impressionists and early 20th-century artists. Its Center for Creativity encourages hands-on visitor engagement." },
    { question: "Is admission free?", answer: "<strong>Sundays are free admission</strong> at the Columbus Museum of Art. The museum's welcoming approach includes interactive galleries designed to make art accessible to visitors of all ages." }
  ],
  'mus233e-des-beauxarts-de-rennes-rennes-france': [
    { question: "Where is this museum?", answer: "The <strong>Musée des Beaux-Arts de Rennes</strong> is in the center of Rennes, capital of Brittany, France. It occupies a 19th-century building on the Quai Émile Zola along the Vilaine River." },
    { question: "What does the collection include?", answer: "The museum holds an impressive range of <strong>European paintings from the 14th to 20th centuries</strong>. Its strengths include French, Italian, and Flemish works, with notable pieces by Rubens, Chardin, and Picasso." },
    { question: "How large is the collection?", answer: "The Rennes museum holds over <strong>5,000 paintings, drawings, and sculptures</strong>. It's considered one of the finest provincial museums in France, with particular depth in 17th-century French art." }
  ],
  'convent-of-san-paolo-parma-italy': [
    { question: "What is the Convent of San Paolo?", answer: "The <strong>Convent of San Paolo</strong> is a former Benedictine convent in Parma, Italy. Its main attraction is the Camera di San Paolo, a private chamber decorated with frescoes by <strong>Correggio</strong> around 1519." },
    { question: "What do the Correggio frescoes show?", answer: "Correggio painted the abbess's <strong>private dining room</strong> with mythological scenes including Diana the huntress. The frescoes combine classical subjects with playful putti in a stunning illusionistic ceiling." },
    { question: "Can visitors see the frescoes?", answer: "Yes, the <strong>Camera di San Paolo is open to visitors</strong>. The intimate room offers one of the best-preserved examples of Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> fresco decoration outside of Rome and Florence." }
  ],
  'mus233e-des-beauxarts-de-dole-dole-france': [
    { question: "Where is the Musée des Beaux-Arts de Dole?", answer: "The <strong>Musée des Beaux-Arts de Dole</strong> is in the Franche-Comté region of eastern France. It occupies the 18th-century Pavillon des Officiers in the town where Louis Pasteur was born." },
    { question: "What is the collection known for?", answer: "The museum holds <strong>French and regional art</strong> from the 16th century onward. Its collection includes archaeological artifacts and a notable selection of 19th-century paintings by local and national artists." },
    { question: "Is the museum connected to Pasteur?", answer: "While separate from the Pasteur birthplace museum, both are in <strong>Dole's historic center</strong>. The fine arts museum adds cultural depth to a town already famous for its scientific heritage." }
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
