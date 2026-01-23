const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'royal-collection-uk',
    faqs: [
      { question: "What is the Royal Collection?", answer: "The Royal Collection contains over <strong>1 million objects</strong> accumulated by British monarchs over 500 years. It remains the property of the reigning monarch and includes paintings, drawings, furniture, and decorative arts displayed across royal residences." },
      { question: "Where can I see the Royal Collection?", answer: "Works from the collection are displayed at <strong>Buckingham Palace</strong>, Windsor Castle, the Palace of Holyroodhouse in Edinburgh, and the Queen's Galleries in London and Edinburgh. Different works rotate between locations throughout the year." },
      { question: "What famous artworks are in the Royal Collection?", answer: "The collection includes over 500 paintings by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>'s anatomical drawings, and major works by <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>, <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a>, and Canaletto." },
      { question: "Can the public visit the Royal Collection?", answer: "Yes, the Queen's Gallery in London and Edinburgh display rotating selections year-round. <strong>Buckingham Palace State Rooms</strong> open each summer for 10 weeks, and Windsor Castle is open most of the year except when the monarch is in residence." },
      { question: "Who manages the Royal Collection?", answer: "The <strong>Royal Collection Trust</strong>, a charity established in 1993, manages the collection and its public display. Admission fees fund conservation and maintenance, as the collection receives no government funding." },
      { question: "How old is the Royal Collection?", answer: "The collection began in the <strong>16th century</strong> under Henry VIII and expanded dramatically under Charles I, who was an avid collector. After the English Civil War, many works were sold but later reacquired." }
    ]
  },
  {
    slug: 'national-gallery-victoria',
    description: `<p>The National Gallery of Victoria stands as Australia's oldest and most visited art museum, founded in 1861 just a decade after the colony of Victoria was established. <strong>Gold rush wealth</strong> funded the gallery's creation, as the government set aside money from mining revenues to create cultural institutions. The original building opened on Swanston Street in 1861, but the collection split in 1968 between the NGV International (opened 1968) on St Kilda Road and the Ian Potter Centre (opened 2002) at Federation Square, which focuses on Australian art.</p>

<p>The NGV International building, designed by Roy Grounds, became Melbourne's architectural landmark with its distinctive <strong>water wall entrance</strong> and Leonard French's massive stained-glass ceiling. The collection spans European, Asian, and international art from antiquity to today. Works by <a href="/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, <a href="/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, and <a href="/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> represent Old Masters and <a href="/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> holdings. Entry to the permanent collection is free, making this one of the most accessible major museums in the Southern Hemisphere.</p>`,
    faqs: [
      { question: "When was the National Gallery of Victoria founded?", answer: "The NGV opened in <strong>1861</strong>, making it Australia's oldest public art museum. Gold rush revenues funded its creation, just 10 years after Victoria became a separate colony from New South Wales." },
      { question: "Where is the National Gallery of Victoria located?", answer: "NGV International is on <strong>St Kilda Road</strong> in Melbourne, displaying international art. The Ian Potter Centre at Federation Square houses Australian art. Both locations are easily reached by tram from central Melbourne." },
      { question: "What famous artworks are at the NGV?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, and Picasso. The NGV also holds the largest collection of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> works in Australia." },
      { question: "Is the National Gallery of Victoria free?", answer: "Yes, entry to the permanent collection is <strong>free</strong> at both NGV International and the Ian Potter Centre. Special exhibitions may require paid tickets." },
      { question: "What is the water wall at the NGV?", answer: "The <strong>water wall entrance</strong> designed by architect Roy Grounds in 1968 features a continuous curtain of water falling across the front facade. It became one of Melbourne's most photographed architectural features." },
      { question: "How big is the NGV collection?", answer: "The collection contains over <strong>76,000 works</strong> spanning ancient Egyptian artifacts to contemporary art. It's the most comprehensive art collection in Australia, with particularly strong Asian and European holdings." }
    ]
  },
  {
    slug: 'museu-de-belles-arts-de-val232ncia-valencia-spain',
    faqs: [
      { question: "Where is the Museu de Belles Arts de València located?", answer: "The museum occupies a former <strong>seminary building</strong> at the edge of the Turia Gardens in Valencia, Spain. It's near the historic old town and easily accessible by metro to Alameda station." },
      { question: "What artworks are in the Valencia Fine Arts Museum?", answer: "The museum holds major works by <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a>, <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a>, and El Greco. It has the second-largest collection of Spanish <strong>Gothic altarpieces</strong> in Spain, showcasing Valencia's medieval artistic heritage." },
      { question: "When was the museum founded?", answer: "The museum was founded in <strong>1839</strong> following the confiscation of church property. It moved to its current baroque seminary building, constructed between 1683 and 1744, which provides appropriate grandeur for the collection." },
      { question: "Is the Museu de Belles Arts free to visit?", answer: "Yes, entry is <strong>permanently free</strong> for all visitors. The museum receives regional government funding and aims to make Valencian cultural heritage accessible to everyone." },
      { question: "What makes the Valencia museum important?", answer: "The museum holds the most comprehensive collection of <strong>Valencian Gothic and Renaissance art</strong>, documenting the region's artistic production when Valencia was a major Mediterranean power and artistic center." },
      { question: "What is the architecture of the museum building?", answer: "The museum occupies a <strong>baroque seminary</strong> built between 1683-1744. The building features a central courtyard, ornate facades, and spacious galleries that suit the display of large altarpieces and paintings." }
    ]
  },
  {
    slug: 'norton-simon-museum-pasadena-ca-us',
    faqs: [
      { question: "Who was Norton Simon?", answer: "<strong>Norton Simon</strong> (1907-1993) was an industrialist and art collector who assembled one of the world's finest private collections. He acquired the Pasadena Art Museum in 1974 and transformed it with his holdings." },
      { question: "Where is the Norton Simon Museum located?", answer: "The museum is at <strong>411 West Colorado Boulevard</strong> in Pasadena, California, about 10 miles northeast of downtown Los Angeles. The building sits along the route of the annual Rose Parade." },
      { question: "What famous artworks are at Norton Simon?", answer: "The collection includes <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>'s portraits, <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>'s bronze dancers, and major works by <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a>, Picasso, and Raphael. The <strong>Asian art collection</strong> includes important Indian and Southeast Asian sculptures." },
      { question: "When is the Norton Simon Museum open?", answer: "The museum is open <strong>Wednesday through Monday</strong>, closed Tuesdays. Hours are 12:00-5:00 PM most days, with extended hours until 8:00 PM on Fridays. Closed on major holidays." },
      { question: "How much are tickets to the Norton Simon?", answer: "Adult admission is <strong>$15</strong>, with discounts for seniors ($12) and students ($9). Children under 18 enter free. First Friday of each month offers free admission from 5:00-8:00 PM." },
      { question: "What makes Norton Simon's collection unique?", answer: "The collection spans 2,000 years from ancient <strong>Indian sculpture</strong> to modern European art, reflecting Simon's eclectic taste. The <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> holdings rank among America's finest." }
    ]
  },
  {
    slug: 'mus233e-cond233-chantilly-france',
    faqs: [
      { question: "What is the Musée Condé?", answer: "The Musée Condé houses the art collection of <strong>Henri d'Orléans, Duke of Aumale</strong> (1822-1897) in the Château de Chantilly. He bequeathed the château and collection to the Institut de France with the condition that nothing could be moved or loaned." },
      { question: "Where is the Musée Condé located?", answer: "The museum is in the <strong>Château de Chantilly</strong>, about 30 miles north of Paris. Regular trains from Gare du Nord take 25 minutes to Chantilly-Gouvieux station, then a short bus or walk to the château." },
      { question: "What famous artworks are at the Musée Condé?", answer: "The collection includes <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Three Graces, <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>'s portraits, and works by Botticelli and <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>. The <strong>manuscript collection</strong> is exceptional, including the famous medieval Très Riches Heures." },
      { question: "When was the Musée Condé created?", answer: "The Duke of Aumale bequeathed the château and collection to France in <strong>1886</strong>, with the condition that the arrangement remain unchanged. The museum opened to the public following his death in 1897." },
      { question: "Can visitors see the Château de Chantilly?", answer: "Yes, visitors can tour the <strong>château apartments</strong>, the museum galleries, the extensive grounds, and the Great Stables. The estate includes French formal gardens designed by André Le Nôtre." },
      { question: "How much are tickets to the Musée Condé?", answer: "Combined tickets for the château, museum, and park cost around <strong>€17 for adults</strong>. Discounts available for students and seniors. The park alone can be visited for a reduced fee." }
    ]
  },
  {
    slug: 'georges-pompidou-center-paris-france',
    description: `<p>The Centre Pompidou revolutionized museum architecture when it opened in 1977, turning the building inside out by placing mechanical systems on the exterior. President <strong>Georges Pompidou</strong> initiated the project in 1969, envisioning a major cultural center in the Beaubourg district. Architects Renzo Piano and Richard Rogers won the competition with a radical design featuring color-coded external tubes: blue for air, green for water, yellow for electrical, and red for circulation. The controversial building faced fierce opposition but became one of Paris's most visited attractions.</p>

<p>The Musée National d'Art Moderne inside holds Europe's largest collection of modern and contemporary art, with over 120,000 works. <a href="/apps/masterpieces/artist/henri-matisse\"><strong>Henri Matisse</strong></a>, Picasso, <a href="/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a>, and Duchamp are comprehensively represented. The collection spans every major <strong>20th-century movement</strong> from <a href="/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a> through contemporary installation art. The <strong>public library</strong> on the second floor is free to enter and draws as many visitors as the museum itself.</p>`,
    faqs: [
      { question: "When did the Centre Pompidou open?", answer: "President Valéry Giscard d'Estaing inaugurated the Centre Pompidou on <strong>January 31, 1977</strong>. Named for President Georges Pompidou who initiated the project, it drew controversy initially but became immensely popular." },
      { question: "Where is the Centre Pompidou located?", answer: "The Centre Pompidou is in the <strong>4th arrondissement</strong> of Paris, between the Marais and Les Halles neighborhoods. The closest metro stations are Rambuteau, Hôtel de Ville, and Châtelet." },
      { question: "What famous artworks are at the Centre Pompidou?", answer: "The collection includes major works by <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a>, Picasso, <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a>, and Duchamp. It holds the largest collection of <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvist</strong></a> and <strong>Cubist</strong> works in Europe." },
      { question: "Why is the Centre Pompidou's architecture famous?", answer: "Architects Renzo Piano and Richard Rogers designed the building with all <strong>mechanical systems on the exterior</strong>, freeing interior space for galleries. The color-coded tubes and industrial aesthetic shocked Parisians but influenced museum design worldwide." },
      { question: "How much are tickets to the Centre Pompidou?", answer: "Museum tickets cost <strong>€14-15 for adults</strong>, free for visitors under 18. The first Sunday of each month offers free admission. The public library and plaza are always free to access." },
      { question: "Is the Centre Pompidou just an art museum?", answer: "No, the center includes a <strong>museum, public library, cinema, performance spaces</strong>, and a music research institute. The plaza hosts street performers and the rooftop offers panoramic Paris views." }
    ]
  },
  {
    slug: 'dolores-olmedo-collection-mexico-city-mexico',
    faqs: [
      { question: "Who was Dolores Olmedo?", answer: "<strong>Dolores Olmedo Patiño</strong> (1908-2002) was a businesswoman, philanthropist, and patron of Diego Rivera. She assembled the world's largest private collection of Rivera's work and opened her estate as a museum in 1994." },
      { question: "Where is the Dolores Olmedo Museum located?", answer: "The museum occupies Olmedo's former estate in <strong>Xochimilco</strong>, southern Mexico City. The 16th-century hacienda sits amid gardens with peacocks and Xoloitzcuintli (Mexican hairless dogs) roaming the grounds." },
      { question: "What artworks are in the collection?", answer: "The museum holds <strong>137 works by Diego Rivera</strong> and 25 by <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a>, including her famous Self-Portrait with Velvet Dress. It's the largest collection of both artists anywhere." },
      { question: "When is the Dolores Olmedo Museum open?", answer: "The museum is open <strong>Tuesday through Sunday</strong>, 10:00 AM to 6:00 PM, closed Mondays. The estate includes the house museum, gardens, and a café serving traditional Mexican food." },
      { question: "How much are tickets to the museum?", answer: "Admission costs around <strong>80 Mexican pesos</strong> (about $4-5 USD) for adults, with discounts for students, teachers, and seniors. Children under 6 enter free." },
      { question: "What makes this museum unique?", answer: "Beyond the Rivera and Kahlo collections, the estate maintains <strong>pre-Hispanic traditions</strong> by keeping Xoloitzcuintli dogs, an ancient Mexican breed. The hacienda setting provides context for Mexican art and culture." }
    ]
  },
  {
    slug: 'mus233e-thomashenry-cherbourg-france',
    faqs: [
      { question: "What is the Musée Thomas-Henry?", answer: "The Musée Thomas-Henry is Cherbourg's fine arts museum, named for <strong>Thomas Henry</strong> (1766-1836), a local art collector who bequeathed his collection to the city. It holds one of France's important regional collections." },
      { question: "Where is the museum located?", answer: "The museum is in <strong>Cherbourg-en-Cotentin</strong> in Normandy, northern France. It's in the city center near the harbor, easily reached from the train station that connects to Paris." },
      { question: "What artworks are in the Musée Thomas-Henry?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Jean-François Millet</strong></a>, who was born nearby, plus paintings by Fra Angelico, <a href=\"/apps/masterpieces/artist/camille-corot\"><strong>Camille Corot</strong></a>, and Philippe de Champaigne. The <strong>Millet holdings</strong> are exceptional." },
      { question: "When was the museum founded?", answer: "Thomas Henry bequeathed his collection to Cherbourg in <strong>1835</strong>. The museum opened in 1835 and moved to its current purpose-built facility in the 19th century, with major renovations completed in 2016." },
      { question: "Is the Musée Thomas-Henry free?", answer: "The museum offers <strong>free admission</strong> to its permanent collection. Special exhibitions may require tickets. It's open Wednesday through Monday, closed Tuesdays." },
      { question: "Why is Millet important to this museum?", answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Jean-François Millet</strong></a> was born in Gréville-Hague near Cherbourg in 1814. The museum holds his early works and studies, providing insight into the development of the famous <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> painter." }
    ]
  },
  {
    slug: 'basilica-della-santissima-annunziata-florence-ital',
    faqs: [
      { question: "What is the Basilica della Santissima Annunziata?", answer: "The Basilica della Santissima Annunziata is a <strong>Renaissance church</strong> in Florence, founded in 1250. It houses important frescoes and a miraculous image of the Annunciation that draws pilgrims." },
      { question: "Where is the Basilica located in Florence?", answer: "The church stands on <strong>Piazza della Santissima Annunziata</strong> in central Florence, one of the city's most beautiful Renaissance squares. It's a short walk from the Duomo and Galleria dell'Accademia." },
      { question: "What artworks are in the Basilica?", answer: "The Chiostro dei Voti (Cloister of the Vows) contains important frescoes by <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a>, Pontormo, and Rosso Fiorentino. The church interior features <strong>baroque decoration</strong> and Giambologna's tomb." },
      { question: "What is the miraculous image?", answer: "Legend says a 14th-century painter left an Annunciation unfinished, and an <strong>angel completed the Virgin's face</strong> overnight. This image became one of Florence's most venerated icons, housed in a marble shrine." },
      { question: "Can visitors enter the Basilica?", answer: "Yes, the church is open daily and entry is <strong>free</strong>. The Chiostro dei Voti can be viewed from the entrance portico. Respectful dress is required as this is an active place of worship." },
      { question: "What architectural style is the church?", answer: "The church combines <strong>Renaissance and Baroque</strong> elements. Michelozzo designed the portico and cloister in the 15th century, while the interior was lavishly redecorated in the 17th century with gilding and frescoes." }
    ]
  },
  {
    slug: 'albertina-vienna-austria',
    description: `<p>The Albertina houses one of the world's greatest print and drawing collections, founded by <strong>Duke Albert of Saxe-Teschen</strong> in the 18th century. Albert married Maria Christina, daughter of Empress Maria Theresa, and the couple assembled over 14,000 drawings and 200,000 prints before Albert's death in 1822. The collection originally focused on architectural drawings but expanded to include works by every major European artist. The Albertina occupies part of the Hofburg palace complex, with the duke's apartments restored to their original splendor.</p>

<p>The collection contains 145 drawings by <a href="/apps/masterpieces/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a>, including his famous <strong>Young Hare</strong> and Praying Hands, the largest Dürer holding anywhere. Works by <a href="/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>, <a href="/apps/masterpieces/artist/michelangelo-buonarroti\"><strong>Michelangelo</strong></a>, and <a href="/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> document five centuries of draftsmanship. The Batliner Collection, added in 2007, brought major <a href="/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and modern paintings including works by Monet, Picasso, and Klimt.</p>`,
    faqs: [
      { question: "Who founded the Albertina?", answer: "<strong>Duke Albert of Saxe-Teschen</strong> founded the collection in the 1770s. He married Maria Christina, daughter of Empress Maria Theresa, and they assembled the core collection of old master prints and drawings." },
      { question: "Where is the Albertina located?", answer: "The Albertina occupies the southern tip of Vienna's <strong>Hofburg palace complex</strong>, near the State Opera House. The distinctive modernist canopy marks the entrance on Albertinaplatz." },
      { question: "What famous artworks are at the Albertina?", answer: "The collection includes <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a>'s Young Hare and Praying Hands, plus drawings by <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a>, <a href=\"/apps/masterpieces/artist/michelangelo-buonarroti\"><strong>Michelangelo</strong></a>, and <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>. It holds 145 Dürer works, the world's largest collection." },
      { question: "How much are tickets to the Albertina?", answer: "Admission costs around <strong>€16.90 for adults</strong>, with reduced rates for students and seniors. Combination tickets covering multiple exhibitions offer better value. Open daily except major holidays." },
      { question: "Why is the Albertina collection important?", answer: "The Albertina holds over <strong>1 million prints</strong> and 65,000 drawings, making it one of the three largest graphic collections worldwide alongside the British Museum and Louvre. Every major European artist is represented." },
      { question: "Can visitors see the ducal apartments?", answer: "Yes, the <strong>State Rooms</strong> where Duke Albert and Maria Christina lived have been restored to their 18th-century appearance. These neoclassical apartments show how the Austrian aristocracy lived." }
    ]
  },
  {
    slug: 'walker-art-gallery',
    description: `<p>The Walker Art Gallery holds the national collection of fine art for northern England, founded by <strong>Andrew Barclay Walker</strong>, a Liverpool brewer who donated the building to the city in 1877. Liverpool's merchant wealth had created strong civic institutions, and the gallery opened as part of the city's cultural ambitions during its peak as a global port. The neoclassical building on William Brown Street stands among a cluster of museums and libraries built with Victorian civic pride.</p>

<p>The collection surveys European art from the 13th century to today, with particular strengths in <a href="/apps/masterpieces/movement/pre-raphaelite-brotherhood"><strong>Pre-Raphaelite</strong></a> painting and Victorian narrative art. Works by <a href="/apps/masterpieces/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a>, <a href="/apps/masterpieces/artist/john-everett-millais"><strong>Millais</strong></a>, and <a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> document the movement's development. The gallery also holds important works by <a href="/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, Rubens, and Poussin. Entry is free, continuing Liverpool's tradition of accessible culture.</p>`,
    faqs: [
      { question: "Who founded the Walker Art Gallery?", answer: "<strong>Andrew Barclay Walker</strong>, a wealthy Liverpool brewer and mayor, funded the building's construction. The gallery opened in 1877 as part of Liverpool's flourishing Victorian cultural institutions." },
      { question: "Where is the Walker Art Gallery located?", answer: "The gallery stands on <strong>William Brown Street</strong> in central Liverpool, part of a cluster of neoclassical cultural buildings. It's near Lime Street railway station, a short walk from the city center." },
      { question: "What famous artworks are at the Walker?", answer: "The collection includes <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite</strong></a> masterpieces by <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> and <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>, plus works by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, Rubens, and Poussin. Victorian narrative painting is exceptionally well represented." },
      { question: "Is the Walker Art Gallery free?", answer: "Yes, entry to the permanent collection is <strong>free</strong>. Special exhibitions may require tickets. The gallery is open daily except Mondays, making it one of Liverpool's most accessible cultural institutions." },
      { question: "What makes the Walker collection important?", answer: "The Walker holds the <strong>national collection</strong> for northern England, with one of Britain's finest Pre-Raphaelite holdings and comprehensive Victorian art. It provides a counterweight to London's dominance of national collections." },
      { question: "What is the John Moores Painting Prize?", answer: "The <strong>biennial John Moores Painting Prize</strong>, established in 1957, is the UK's most prestigious painting competition. Exhibitions at the Walker launch many artists' careers and reflect contemporary British painting trends." }
    ]
  },
  {
    slug: 'finnish-national-gallery-helsinki-finland',
    faqs: [
      { question: "What is the Finnish National Gallery?", answer: "The Finnish National Gallery oversees three museums: the <strong>Ateneum Art Museum</strong> (Finnish art), Kiasma (contemporary art), and Sinebrychoff Art Museum (Old Masters). Together they form Finland's largest art institution." },
      { question: "Where is the Finnish National Gallery located?", answer: "The main building, Ateneum, faces <strong>Railway Square</strong> in central Helsinki, opposite the central station. The neoclassical building opened in 1887 and houses the national collection of Finnish art." },
      { question: "What famous Finnish artists are represented?", answer: "The collection includes major works by <strong>Akseli Gallen-Kallela</strong>, Albert Edelfelt, and Helene Schjerfbeck. These artists defined Finnish national identity through art during the 19th and early 20th centuries." },
      { question: "Does the gallery have international art?", answer: "Yes, the collection includes works by <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a>, Cézanne, and other European masters. The Sinebrychoff Museum specifically focuses on Old Master paintings and decorative arts." },
      { question: "How much are tickets to the Finnish National Gallery?", answer: "Ateneum admission costs around <strong>€17 for adults</strong>, with combination tickets available for multiple museums. Visitors under 18 enter free. Open Tuesday through Sunday." },
      { question: "What is the Kalevala connection?", answer: "Many Finnish artists illustrated scenes from the <strong>Kalevala</strong>, Finland's national epic poem. Gallen-Kallela's monumental Kalevala paintings are highlights, showing mythological heroes and landscapes that defined Finnish cultural identity." }
    ]
  },
  {
    slug: 'biblioteca-ambrosiana-milan-italy',
    faqs: [
      { question: "What is the Biblioteca Ambrosiana?", answer: "The Biblioteca Ambrosiana is a historic <strong>library and art gallery</strong> in Milan, founded by Cardinal Federico Borromeo in 1609. It was one of Europe's first public libraries and remains an active research institution." },
      { question: "Where is the Biblioteca Ambrosiana located?", answer: "The Ambrosiana is on <strong>Piazza Pio XI</strong> in central Milan, near the Duomo. The 17th-century building houses both the historic library and the Pinacoteca Ambrosiana art gallery." },
      { question: "What famous artworks are in the Ambrosiana?", answer: "The collection includes <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>'s Codex Atlanticus, <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>'s Basket of Fruit, and works by <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>, Botticelli, and Titian." },
      { question: "What is the Codex Atlanticus?", answer: "The <strong>Codex Atlanticus</strong> is the largest collection of Leonardo da Vinci's drawings and writings, containing 1,119 pages of his notes on art, science, and engineering. It's one of the Ambrosiana's greatest treasures." },
      { question: "When is the Ambrosiana open to visitors?", answer: "The Pinacoteca is open <strong>Tuesday through Sunday</strong>, 10:00 AM to 6:00 PM, closed Mondays. The library's reading rooms are accessible to scholars with proper credentials." },
      { question: "How much are tickets to the Ambrosiana?", answer: "Admission to the Pinacoteca costs around <strong>€15 for adults</strong>, with discounts for students and seniors. This includes access to the art gallery and selected manuscript displays." }
    ]
  },
  {
    slug: 'detroit-institute-of-arts',
    description: `<p>The Detroit Institute of Arts ranks among America's most significant art museums, founded in 1885 when Detroit's industrial wealth funded cultural ambitions. The current Beaux-Arts building on Woodward Avenue opened in 1927, funded by newspaper magnates and automotive titans. <strong>Edsel Ford</strong> personally commissioned Diego Rivera's monumental Detroit Industry murals in 1932-33, celebrating the city's manufacturing power. These frescoes, covering the museum's central court, remain among America's greatest public artworks.</p>

<p>The collection spans cultures and centuries, from ancient Egyptian artifacts to contemporary installations. The <strong>European galleries</strong> include works by <a href="/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a>, <a href="/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a>, and Rembrandt. The African and Indigenous American collections reflect Detroit's diverse population and long commitment to inclusive collecting. During the city's 2013 bankruptcy, officials proposed selling artworks to pay creditors, but public outcry and a coalition saved the collection. Entry to the permanent galleries is free for residents of three Michigan counties.</p>`,
    faqs: [
      { question: "When was the Detroit Institute of Arts founded?", answer: "The DIA was founded in <strong>1885</strong> by Detroit's civic leaders. The current Beaux-Arts building on Woodward Avenue opened in 1927, funded by industrial wealth during Detroit's peak prosperity." },
      { question: "Where is the Detroit Institute of Arts located?", answer: "The museum is at <strong>5200 Woodward Avenue</strong> in Detroit's Cultural Center Historic District, about 2 miles north of downtown. Free parking is available, and the QLine streetcar stops nearby." },
      { question: "What are the Diego Rivera murals?", answer: "Diego Rivera's <strong>Detroit Industry murals</strong> (1932-33) cover four walls of the museum's central court, depicting automotive workers and industrial processes. Edsel Ford commissioned them, and they remain controversial and celebrated." },
      { question: "What famous artworks are at the DIA?", answer: "Beyond Rivera's murals, the collection includes <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a>'s Self-Portrait, <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a>'s The Window, and major works by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, Bruegel, and Caravaggio." },
      { question: "Is the Detroit Institute of Arts free?", answer: "Residents of Wayne, Oakland, and Macomb counties enter <strong>free</strong> thanks to a regional millage approved by voters. Non-residents pay around $14 for adults. Children 17 and under always enter free." },
      { question: "What happened during Detroit's bankruptcy?", answer: "In 2013, officials considered <strong>selling DIA artworks</strong> to pay creditors. Foundations, the state, and public pressure created a $816 million fund to protect the collection, ensuring it remains in public trust forever." }
    ]
  },
  {
    slug: 'museo-correr-venice-italy',
    faqs: [
      { question: "What is the Museo Correr?", answer: "The Museo Correr is Venice's <strong>civic museum</strong>, housing art, historical artifacts, and objects documenting Venetian civilization. It occupies the Procuratie Nuove on St. Mark's Square." },
      { question: "Where is the Museo Correr located?", answer: "The museum occupies the western side of <strong>Piazza San Marco</strong>, Venice's main square. The entrance is through the Napoleonic Wing, opposite St. Mark's Basilica." },
      { question: "Who was Teodoro Correr?", answer: "<strong>Teodoro Correr</strong> (1750-1830) was a Venetian nobleman who collected art, coins, and objects related to Venice's history. He bequeathed his collection to the city, forming the museum's core." },
      { question: "What artworks are in the Museo Correr?", answer: "The collection includes Venetian paintings by Bellini, <a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a>, and other masters. The <strong>Quadreria</strong> displays religious and historical paintings documenting Venice's artistic traditions." },
      { question: "What historical objects are displayed?", answer: "The museum shows <strong>Venetian maps, coins, armor, globes</strong>, and objects related to the Doge and Republic. The historical rooms recreate aspects of Venetian government and daily life." },
      { question: "How much are tickets to the Museo Correr?", answer: "Admission is around <strong>€25</strong>, which includes entry to the Doge's Palace, Museo Correr, and two other civic museums. Combination tickets offer the best value for exploring Venice's museums." }
    ]
  },
  {
    slug: 'basilica-di-san-marco-florence-italy',
    faqs: [
      { question: "What is the Basilica di San Marco in Florence?", answer: "The Basilica di San Marco is a <strong>Dominican church and convent</strong> in Florence, founded in the 13th century and rebuilt in the 15th. It's most famous for Fra Angelico's frescoes decorating the convent cells." },
      { question: "Where is San Marco located in Florence?", answer: "The basilica stands on <strong>Piazza San Marco</strong> in central Florence, near the Galleria dell'Accademia. It's a short walk from the Duomo in the historic center." },
      { question: "What artworks are at San Marco?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> painted frescoes in the monastery between 1438-1450, including the famous Annunciation at the top of the dormitory stairs. Each monk's cell contains a devotional fresco by Fra Angelico or assistants." },
      { question: "Who was Fra Angelico?", answer: "<a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a> (c. 1395-1455) was a Dominican friar and painter who combined <a href=\"/apps/masterpieces/movement/early-renaissance\"><strong>Early Renaissance</strong></a> techniques with spiritual devotion. He lived and worked at San Marco for much of his career." },
      { question: "Can visitors tour the convent cells?", answer: "Yes, the <strong>Museo di San Marco</strong> allows visitors to tour the dormitory and see Fra Angelico's cell frescoes. The church itself is free to enter as an active place of worship." },
      { question: "How much are tickets to the Museo di San Marco?", answer: "Admission to the convent museum costs around <strong>€8 for adults</strong>, with EU student and senior discounts available. Advance booking is recommended during peak tourist seasons." }
    ]
  },
  {
    slug: 'oskar-reinhart-foundation-winterthur-switzerland',
    faqs: [
      { question: "Who was Oskar Reinhart?", answer: "<strong>Oskar Reinhart</strong> (1885-1965) was a Swiss businessman and art collector who assembled one of Europe's finest private collections of 19th-century French and Swiss art. He donated his collection to Switzerland." },
      { question: "Where is the Oskar Reinhart Foundation located?", answer: "The collection is divided between two locations in <strong>Winterthur</strong>, Switzerland (near Zurich). The main collection occupies Reinhart's former villa at Haldenstrasse, while additional works are at Museum Oskar Reinhart am Stadtgarten." },
      { question: "What famous artworks are in the collection?", answer: "The collection includes major works by <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>, <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a>, <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>, and Cézanne. It has exceptional holdings of 19th-century <strong>French landscape painting</strong> and Swiss art." },
      { question: "When did the collection become public?", answer: "Reinhart bequeathed his collection to Switzerland in <strong>1951</strong> (during his lifetime), with the stipulation it remain in Winterthur. The foundation opened to the public after his death in 1965." },
      { question: "How much are tickets to see the collection?", answer: "Admission to the villa collection (Am Römerholz) costs around <strong>CHF 12 for adults</strong>. The Stadtgarten location has separate admission. Both are closed Mondays." },
      { question: "What makes this collection special?", answer: "The collection reflects one man's refined taste, displayed in his former home rather than a purpose-built museum. The <strong>intimate setting</strong> and cohesive vision make it one of Switzerland's art treasures." }
    ]
  },
  {
    slug: 'mus233e-ingres-montauban-france',
    faqs: [
      { question: "What is the Musée Ingres?", answer: "The Musée Ingres is the fine arts museum in Montauban, France, dedicated to <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Jean-Auguste-Dominique Ingres</strong></a>, who was born in the city in 1780. It holds the largest collection of his works and drawings." },
      { question: "Where is the Musée Ingres located?", answer: "The museum occupies the <strong>former Bishop's Palace</strong> in Montauban, about 30 miles north of Toulouse in southern France. The 17th-century building overlooks the Tarn River." },
      { question: "What Ingres artworks are in the museum?", answer: "The collection includes over <strong>4,000 Ingres drawings</strong> and several paintings, donated by the artist himself. It provides the most comprehensive view of <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>'s working process anywhere." },
      { question: "What other artists are represented?", answer: "Beyond Ingres, the museum holds works by <a href=\"/apps/masterpieces/artist/antoine-bourdelle\"><strong>Antoine Bourdelle</strong></a> (also from Montauban), plus paintings by Delacroix, Courbet, and other 19th-century French artists." },
      { question: "When is the Musée Ingres open?", answer: "The museum recently underwent major renovation and reopened in <strong>2019</strong>. It's open Tuesday through Sunday, closed Mondays. Hours vary seasonally." },
      { question: "How much are tickets to the Musée Ingres?", answer: "Admission costs around <strong>€8 for adults</strong>, with reduced rates for students and groups. The first Sunday of each month often offers free entry." }
    ]
  },
  {
    slug: 'smithsonian-american-art',
    description: `<p>The Smithsonian American Art Museum holds the nation's most comprehensive collection of American art, spanning colonial portraiture to contemporary installations. The collection began in 1829 when British scientist John Vance bequeathed his art to the United States, making this the country's <strong>first federal art collection</strong>. The museum occupies the historic Patent Office Building, which once housed Abraham Lincoln's inaugural ball and served as a Civil War hospital where Walt Whitman nursed wounded soldiers.</p>

<p>The collection includes works by <a href="/apps/masterpieces/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a>, <a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a>, and <a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a>, documenting American artistic achievement across three centuries. The <strong>Luce Foundation Center</strong> displays 3,300 additional artworks in visible storage with explanatory labels. Works by self-taught artists like James Hampton's The Throne of the Third Heaven provide counterpoints to academic traditions. The Renwick Gallery, the museum's branch for contemporary craft, occupies a separate building near the White House. Entry is free.</p>`,
    faqs: [
      { question: "Where is the Smithsonian American Art Museum located?", answer: "The museum occupies the historic <strong>Patent Office Building</strong> at 8th and F Streets NW in Washington, D.C., between the National Portrait Gallery and Chinatown. The closest Metro station is Gallery Place-Chinatown." },
      { question: "Is the Smithsonian American Art Museum free?", answer: "Yes, entry is <strong>free</strong>, like all Smithsonian museums. The museum is open daily 11:30 AM to 7:00 PM, closed Christmas Day. No tickets or advance reservations required for general admission." },
      { question: "What famous American artworks are here?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a>, <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a>, <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a>, Georgia O'Keeffe, and Edward Hopper. It holds over 7,000 artists' works spanning 300 years." },
      { question: "What is the Luce Foundation Center?", answer: "The <strong>Luce Foundation Center</strong> displays 3,300 artworks in visible storage across three floors, allowing visitors to see works not currently in main galleries. Computer stations provide information about each piece." },
      { question: "What building houses the museum?", answer: "The <strong>Greek Revival Patent Office Building</strong> (1836-1868) is one of Washington's oldest public buildings. It served as a hospital during the Civil War and Lincoln held his second inaugural ball here." },
      { question: "What is the Renwick Gallery?", answer: "The <strong>Renwick Gallery</strong>, located near the White House, is the Smithsonian American Art Museum's branch for contemporary craft and decorative arts. It occupies a Second Empire-style building from 1859." }
    ]
  },
  {
    slug: 'royal-museum-of-fine-arts-antwerp-dutch-koninklijk',
    description: `<p>The Royal Museum of Fine Arts Antwerp holds one of Belgium's finest collections, particularly strong in Flemish and Dutch painting. The museum traces its roots to 1810 when Napoleon ordered collections from disbanded monasteries gathered into a public museum. The current building on Leopold de Waelplaats, designed by Frans Van Dijk and Jacob Winders, opened in 1890. <strong>Antwerp's position</strong> as a major artistic center from the 15th through 17th centuries means the museum displays works by artists who lived and worked in the city.</p>

<p>The collection's greatest strength lies in works by <a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a>, who maintained his studio in Antwerp and created altarpieces for local churches. The museum holds the world's largest Rubens collection, with masterpieces spanning his entire career. Works by <a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Van Dyck</strong></a>, <a href="/apps/masterpieces/artist/jacob-jordaens"><strong>Jacob Jordaens</strong></a>, and earlier Flemish masters like Jan van Eyck and Hans Memling document the region's artistic dominance. After major renovation, the museum reopened in 2022.</p>`,
    faqs: [
      { question: "When was the Royal Museum of Fine Arts Antwerp founded?", answer: "Napoleon ordered the museum's creation in <strong>1810</strong>, consolidating artworks from disbanded monasteries. The current building opened in 1890, designed to showcase Antwerp's artistic heritage." },
      { question: "Where is the museum located in Antwerp?", answer: "The museum is on <strong>Leopold de Waelplaats</strong> in Antwerp's Zuid (South) district. It's a short walk from Central Station and surrounded by galleries and restaurants in one of the city's cultural neighborhoods." },
      { question: "What famous artworks are in the collection?", answer: "The museum holds the world's largest collection of <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> paintings, plus major works by <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>, <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jordaens</strong></a>, and Flemish Primitives like Jan van Eyck." },
      { question: "Why does Antwerp have so many Rubens paintings?", answer: "<a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> lived and worked in Antwerp from 1608 until his death in 1640. His house and studio were here, and he created altarpieces for local churches, many of which entered the museum collection." },
      { question: "When did the museum reopen after renovation?", answer: "The museum completed a <strong>major 11-year renovation</strong> and reopened in September 2022. The project restored the historic building and added modern exhibition spaces underground." },
      { question: "How much are tickets to the museum?", answer: "Adult admission costs around <strong>€12-15</strong>, with discounts for students, seniors, and youth. First Wednesday of each month offers reduced rates. The museum is closed Mondays." }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 20 museums with FAQs...');

  for (const update of updates) {
    try {
      const updateData = {
        faqs: update.faqs,
        updatedAt: new Date()
      };

      // Add description only if it exists in the update
      if (update.description) {
        updateData.description = update.description;
      }

      await prisma.museum.update({
        where: { slug: update.slug },
        data: updateData
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${update.slug}`, error.message);
    }
  }

  console.log('Batch update complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
