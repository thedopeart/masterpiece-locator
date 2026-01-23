const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updates = [
    // 1. Lenbachhaus
    {
      slug: 'lenbachhaus',
      description: `<p>The <strong>Lenbachhaus</strong> opened in 1929 in the former villa of painter Franz von Lenbach, a lavish Italianate residence built in the 1880s. The museum gained international significance when <a href="/apps/masterpieces/artist/gabriele-munter"><strong>Gabriele Münter</strong></a> donated over 1,000 works in 1957, including paintings by her partner <a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> and fellow members of the <strong>Blue Rider</strong> movement. This gift transformed the Lenbachhaus into the world's foremost collection of German Expressionism.</p>

<p>The collection traces the development of <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a> through works by <a href="/apps/masterpieces/artist/franz-marc"><strong>Franz Marc</strong></a>, <a href="/apps/masterpieces/artist/august-macke"><strong>August Macke</strong></a>, and <a href="/apps/masterpieces/artist/alexej-von-jawlensky"><strong>Alexej von Jawlensky</strong></a>. Kandinsky's progression toward abstraction unfolds across multiple galleries, from early figurative landscapes to his breakthrough non-representational paintings. A striking extension by Foster + Partners opened in 2013, nearly tripling exhibition space while preserving the historic villa at its core. The subterranean galleries house contemporary installations, and visitors can see Joseph Beuys' environmental artwork <strong>Show Your Wound</strong>.</p>`,
      faqs: [
        {
          question: "What is the Lenbachhaus known for?",
          answer: "The Lenbachhaus holds the world's largest collection of <strong>Blue Rider</strong> art, featuring works by <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a>, <a href=\"/apps/masterpieces/artist/franz-marc\"><strong>Franz Marc</strong></a>, and <a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke</strong></a>. This came from Gabriele Münter's 1957 donation."
        },
        {
          question: "When was the Lenbachhaus founded?",
          answer: "The museum opened in <strong>1929</strong> in the former villa of portrait painter Franz von Lenbach. The Italianate residence was built in the 1880s and became a municipal art gallery after his death."
        },
        {
          question: "What can I see at the Lenbachhaus?",
          answer: "Visitors can explore <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> masterpieces including Kandinsky's progression toward abstraction, works by Münter and Marc, plus contemporary art and Joseph Beuys installations."
        },
        {
          question: "Where is the Lenbachhaus located?",
          answer: "The museum sits in Munich's <strong>Königsplatz</strong> district, surrounded by neoclassical buildings. The 2013 Foster + Partners extension added modern galleries while preserving the historic villa."
        },
        {
          question: "How much does the Lenbachhaus cost?",
          answer: "General admission costs around <strong>€10</strong>. Children under 18 enter free. The museum offers combination tickets with other Munich galleries and reduced rates on certain days."
        }
      ]
    },

    // 2. Museum Boijmans Van Beuningen
    {
      slug: 'museum-boijmans-van-beuningen-rotterdam-netherland',
      description: `<p><strong>Museum Boijmans Van Beuningen</strong> traces its origins to 1849, when lawyer Frans Jacob Otto Boijmans bequeathed his art collection to Rotterdam. The bequest included Old Master paintings, prints, and decorative arts that formed the nucleus of the civic museum. A second major gift came from shipping magnate Daniel George van Beuningen in 1958, adding significant <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> works.</p>

<p>The collection spans medieval manuscripts to contemporary installations, with particular strength in Dutch and Flemish painting. <a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> is well represented, and the museum holds important works by <a href="/apps/masterpieces/artist/pieter-bruegel-the-elder"><strong>Pieter Bruegel the Elder</strong></a>, <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, and the Delft masters. The main building closed in 2019 for major renovation, but artworks remain visible at the <strong>Depot Boijmans Van Beuningen</strong>, a mirrored storage facility opened in 2021 that lets visitors see 151,000 objects normally kept in reserve.</p>`,
      faqs: [
        {
          question: "When was Museum Boijmans Van Beuningen founded?",
          answer: "The museum began in <strong>1849</strong> with a bequest from lawyer Frans Jacob Otto Boijmans. Shipping magnate Daniel George van Beuningen donated his collection in 1958, giving the museum its current name."
        },
        {
          question: "What artists are featured at Boijmans?",
          answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a>, <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>, <a href=\"/apps/masterpieces/artist/pieter-bruegel-the-elder\"><strong>Bruegel</strong></a>, Van Eyck, and Dalí. Dutch and Flemish Old Masters form the core holdings."
        },
        {
          question: "Is the Boijmans museum open?",
          answer: "The main building closed in <strong>2019</strong> for renovation. However, the <strong>Depot Boijmans Van Beuningen</strong> opened in 2021, offering access to 151,000 artworks in a groundbreaking publicly accessible storage facility."
        },
        {
          question: "What is the Depot Boijmans?",
          answer: "Opened in 2021, this mirrored, bowl-shaped building is the world's first publicly accessible art depot. Visitors can see the museum's full collection in climate-controlled storage, including works not normally displayed."
        },
        {
          question: "Where is Museum Boijmans Van Beuningen?",
          answer: "The museum is located in Rotterdam's <strong>Museumpark</strong>, alongside other cultural institutions. The depot sits nearby with a rooftop garden offering city views."
        }
      ]
    },

    // 3. Gallerie dell'Accademia Venice
    {
      slug: 'gallerie-dell-accademia-venice',
      description: `<p>The <strong>Gallerie dell'Accademia</strong> opened in 1817 to house the teaching collection of Venice's art academy, though its holdings grew dramatically from suppressed churches and monasteries during the Napoleonic period. The museum occupies three connected buildings: the former church and convent of Santa Maria della Carità, the Scuola Grande, and the Palladian-designed convent. Together they provide a chronological journey through five centuries of <strong>Venetian painting</strong> from Byzantine origins to the 18th century.</p>

<p>The collection charts the evolution of the Venetian school through works by <a href="/apps/masterpieces/artist/giovanni-bellini"><strong>Giovanni Bellini</strong></a>, <a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a>, <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a>, and <a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a>. Highlights include Giorgione's mysterious <a href="/apps/masterpieces/art/the-tempest"><strong>The Tempest</strong></a>, Veronese's monumental <strong>Feast in the House of Levi</strong>, and <a href="/apps/masterpieces/artist/vittore-carpaccio"><strong>Vittore Carpaccio's</strong></a> narrative cycle depicting the Legend of St. Ursula. Leonardo da Vinci's <strong>Vitruvian Man</strong> belongs to the collection but rarely goes on display due to its fragility.</p>`,
      faqs: [
        {
          question: "What famous paintings are at the Accademia Venice?",
          answer: "The museum holds <a href=\"/apps/masterpieces/art/the-tempest\"><strong>The Tempest</strong></a> by <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>, Veronese's <strong>Feast in the House of Levi</strong>, and Leonardo's <strong>Vitruvian Man</strong> (rarely displayed). Venetian masters dominate the collection."
        },
        {
          question: "When was the Accademia Gallery founded?",
          answer: "The gallery opened in <strong>1817</strong> in buildings formerly occupied by a church, convent, and scuola grande. Napoleon's suppression of monasteries provided many of the initial artworks."
        },
        {
          question: "Which artists are represented at the Accademia?",
          answer: "The collection features <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>, <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, <a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a>, Veronese, and <a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a>. It traces Venetian painting from Byzantine origins to the 18th century."
        },
        {
          question: "Where is the Gallerie dell'Accademia located?",
          answer: "The museum sits at the southern end of the <strong>Accademia Bridge</strong> in the Dorsoduro district. The wooden bridge itself offers iconic views of the Grand Canal."
        },
        {
          question: "How long does it take to visit the Accademia?",
          answer: "Plan <strong>2-3 hours</strong> to see the main galleries. The collection spans 24 rooms arranged chronologically, with the Carpaccio cycle and Veronese hall requiring extra time."
        }
      ]
    },

    // 4. Groeningemuseum
    {
      slug: 'groeningemuseum',
      description: `<p>The <strong>Groeningemuseum</strong> houses Bruges' municipal art collection, which began forming in the late 18th century from works rescued from dissolved monasteries and guildhalls. The current building opened in 1930 on the site of a medieval Cistercian abbey, though the collection moved several times before settling here. The museum provides the most comprehensive survey of <strong>Flemish Primitive</strong> painting anywhere, covering the 15th-century masters who transformed European art.</p>

<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck's</strong></a> <strong>Madonna of Canon van der Paele</strong> anchors the collection with its revolutionary oil technique and microscopic detail. Works by <a href="/apps/masterpieces/artist/hans-memling"><strong>Hans Memling</strong></a>, <a href="/apps/masterpieces/artist/gerard-david"><strong>Gerard David</strong></a>, and <a href="/apps/masterpieces/artist/hugo-van-der-goes"><strong>Hugo van der Goes</strong></a> demonstrate how Bruges became the artistic capital of Northern Europe. David's disturbing <a href="/apps/masterpieces/art/judgment-cambyses"><strong>Judgment of Cambyses</strong></a> served as a civic warning about corruption, originally hung in the town hall. The museum also holds works by <a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> and later Belgian artists including James Ensor and René Magritte.</p>`,
      faqs: [
        {
          question: "What is the Groeningemuseum famous for?",
          answer: "The museum has the world's finest collection of <strong>Flemish Primitive</strong> paintings, including works by <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a>, <a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a>, and <a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a>."
        },
        {
          question: "What famous paintings are at the Groeningemuseum?",
          answer: "Highlights include Jan van Eyck's <strong>Madonna of Canon van der Paele</strong> and <a href=\"/apps/masterpieces/art/judgment-cambyses\"><strong>Judgment of Cambyses</strong></a> by Gerard David. The museum also holds works by <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> and Magritte."
        },
        {
          question: "When was the Groeningemuseum established?",
          answer: "The collection began forming in the late <strong>18th century</strong> from suppressed monasteries. The current purpose-built museum opened in <strong>1930</strong> on the grounds of a former Cistercian abbey."
        },
        {
          question: "Where is the Groeningemuseum located?",
          answer: "The museum sits in central <strong>Bruges</strong>, Belgium, near the Church of Our Lady. The compact building borders a quiet park behind the Arentshuis museum."
        },
        {
          question: "How long does the Groeningemuseum take to visit?",
          answer: "The focused collection requires about <strong>1-2 hours</strong>. The museum is small but dense with masterpieces, and the Flemish Primitive galleries deserve careful attention."
        }
      ]
    },

    // 5. National Gallery of Umbria
    {
      slug: 'national-gallery-of-umbria-palazzo-dei-priori-peru',
      description: `<p>The <strong>National Gallery of Umbria</strong> occupies the upper floors of the <strong>Palazzo dei Priori</strong>, a Gothic fortress-palace that has dominated Perugia's main square since the 13th century. The gallery opened in 1863, assembling works from suppressed convents and churches across the region. Its holdings trace Umbrian painting from medieval panel paintings through the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, documenting a regional school that produced some of Italy's most influential artists.</p>

<p><a href="/apps/masterpieces/artist/perugino"><strong>Perugino</strong></a>, who trained Raphael, dominates the collection with altarpieces showing his characteristic soft landscapes and serene figures. <a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca's</strong></a> <strong>Polyptych of Sant'Antonio</strong> displays his geometric precision and luminous color. The gallery also holds significant works by <a href="/apps/masterpieces/artist/benozzo-gozzoli"><strong>Benozzo Gozzoli</strong></a>, Gentile da Fabriano, and Fra Angelico. A 2022 renovation reorganized the displays and improved lighting throughout the medieval and Renaissance galleries, making the collection more accessible than ever.</p>`,
      faqs: [
        {
          question: "What artists are featured at the National Gallery of Umbria?",
          answer: "The collection centers on <a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a>, Raphael's teacher, alongside <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>, Fra Angelico, and <a href=\"/apps/masterpieces/artist/benozzo-gozzoli\"><strong>Benozzo Gozzoli</strong></a>. Umbrian masters dominate the holdings."
        },
        {
          question: "When was the National Gallery of Umbria founded?",
          answer: "The gallery opened in <strong>1863</strong> in the Palazzo dei Priori, gathering works from suppressed religious institutions across Umbria. The Gothic palace dates from the 13th century."
        },
        {
          question: "What style of art does the gallery specialize in?",
          answer: "The museum focuses on <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and medieval Umbrian painting, showing how regional masters developed distinctive approaches to religious subjects, landscapes, and human figures."
        },
        {
          question: "Where is the National Gallery of Umbria located?",
          answer: "The gallery occupies the Palazzo dei Priori on <strong>Piazza IV Novembre</strong> in Perugia, the main square. The medieval palace also houses civic offices and the Sala dei Notari."
        },
        {
          question: "How much does admission cost?",
          answer: "Entry costs around <strong>€8</strong> for adults. EU citizens under 18 enter free. The ticket also covers the Cappella dei Priori with its 15th-century frescoes."
        }
      ]
    },

    // 6. Scottish National Gallery
    {
      slug: 'scottish-national-gallery',
      description: `<p>The <strong>Scottish National Gallery</strong> opened in 1859 in a neoclassical temple designed by William Henry Playfair, positioned dramatically on Edinburgh's Mound between the Old and New Towns. The building's Ionic columns and symmetrical facade established it as a monument to civic culture in Scotland's capital. The collection began with Old Masters from aristocratic loans and grew through strategic purchases that emphasized both international masterpieces and Scottish artistic heritage.</p>

<p>European painting spans from the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> to <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionism</strong></a>, with works by <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a>, <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, and <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Vermeer</strong></a>. Vermeer's <a href="/apps/masterpieces/art/johannes-vermeer-christ-in-the-house-of-martha-and-mary"><strong>Christ in the House of Martha and Mary</strong></a> represents his only painting with a religious subject. Scottish highlights include <a href="/apps/masterpieces/artist/henry-raeburn"><strong>Henry Raeburn's</strong></a> iconic <a href="/apps/masterpieces/art/henry-raeburn-the-skating-minister"><strong>The Skating Minister</strong></a>, depicting a clergyman gliding across Duddingston Loch. The gallery links underground to the Royal Scottish Academy and admission remains free.</p>`,
      faqs: [
        {
          question: "What famous paintings are at the Scottish National Gallery?",
          answer: "Highlights include <a href=\"/apps/masterpieces/art/johannes-vermeer-christ-in-the-house-of-martha-and-mary\"><strong>Christ in the House of Martha and Mary</strong></a> by <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> and <a href=\"/apps/masterpieces/art/henry-raeburn-the-skating-minister\"><strong>The Skating Minister</strong></a> by <a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Raeburn</strong></a>."
        },
        {
          question: "When did the Scottish National Gallery open?",
          answer: "The gallery opened in <strong>1859</strong> in a neoclassical building designed by William Henry Playfair. It sits on the Mound, connecting Edinburgh's Old and New Towns."
        },
        {
          question: "Which artists are represented at the gallery?",
          answer: "The collection includes <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>, Velázquez, Monet, and Van Gogh alongside Scottish masters like Raeburn and Allan Ramsay."
        },
        {
          question: "Is the Scottish National Gallery free?",
          answer: "Yes, admission is <strong>free</strong> to the permanent collection. Special exhibitions may charge separately. The gallery links underground to the Royal Scottish Academy."
        },
        {
          question: "Where is the Scottish National Gallery?",
          answer: "The museum sits on <strong>the Mound</strong> in central Edinburgh, between Princes Street Gardens and the Royal Mile. The neoclassical building offers views toward Edinburgh Castle."
        }
      ]
    },

    // 7. Petit Palais
    {
      slug: 'petit-palais-paris-france',
      description: `<p>The <strong>Petit Palais</strong> was built for the 1900 Paris World's Fair as a showcase of French design excellence. Architect Charles Girault created a Beaux-Arts jewel with a grand colonnaded entrance, mosaic floors, and a semicircular garden courtyard. After the fair ended, the building became the <strong>Musée des Beaux-Arts de la Ville de Paris</strong>, housing the city's fine art collection. The eclectic holdings range from Greek vases to <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> paintings.</p>

<p>The collection includes significant works by <a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a>, <a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a>, and <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a>, alongside Dutch Golden Age paintings and medieval enamels. <a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David's</strong></a> preparatory studies and works by Delacroix represent French academic tradition. The museum also displays decorative arts including Art Nouveau furniture and Lalique glass. Admission to the permanent collection is free, and the garden cafe offers a peaceful retreat from the Champs-Élysées crowds just steps away.</p>`,
      faqs: [
        {
          question: "What can I see at the Petit Palais?",
          answer: "The museum displays works by <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>, <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a>, <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, and Delacroix. The collection spans ancient art to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, with decorative arts and medieval objects."
        },
        {
          question: "When was the Petit Palais built?",
          answer: "The building was constructed for the <strong>1900 Paris World's Fair</strong>. Architect Charles Girault designed it as a showcase of French Beaux-Arts style, with mosaics and a garden courtyard."
        },
        {
          question: "Is the Petit Palais free?",
          answer: "Yes, the permanent collection has <strong>free admission</strong>. Only temporary exhibitions charge entry fees. This makes it one of Paris's best free museums."
        },
        {
          question: "Where is the Petit Palais located?",
          answer: "The museum sits on <strong>Avenue Winston Churchill</strong>, between the Champs-Élysées and the Seine. It faces the Grand Palais across a landscaped esplanade."
        },
        {
          question: "What is the building like?",
          answer: "The Beaux-Arts palace features grand colonnades, gilded ironwork, mosaic floors, and a tranquil semicircular garden. The architecture alone rewards a visit."
        }
      ]
    },

    // 8. Dulwich Picture Gallery
    {
      slug: 'dulwich-picture-gallery',
      description: `<p><strong>Dulwich Picture Gallery</strong> opened in 1817 as England's first purpose-built public art gallery, predating the National Gallery by seven years. Architect Sir John Soane designed the building with overhead lanterns that flood galleries with natural light, establishing a model copied by museums worldwide. The collection originated from paintings assembled for the King of Poland, but political upheaval left them stranded in London. Art dealers Francis Bourgeois and Noel Desenfans bequeathed the works to Dulwich College.</p>

<p>The intimate galleries house Old Masters with particular strength in <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, <a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Van Dyck</strong></a>, <a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Poussin</strong></a>, and <a href="/apps/masterpieces/artist/peter-paul-rubens"><strong>Rubens</strong></a> are well represented, alongside <a href="/apps/masterpieces/artist/canaletto"><strong>Canaletto's</strong></a> Venetian views and <a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Gainsborough's</strong></a> portraits. <a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Watteau's</strong></a> <strong>Les Plaisirs du Bal</strong> captures the Rococo spirit. The mausoleum housing the founders' remains sits integrated into the gallery itself, and the surrounding gardens provide a calm setting in suburban South London.</p>`,
      faqs: [
        {
          question: "What makes Dulwich Picture Gallery historically important?",
          answer: "Opened in <strong>1817</strong>, it was England's first purpose-built public art gallery. Sir John Soane designed the building with innovative overhead lighting that influenced museums globally."
        },
        {
          question: "What artists are featured at Dulwich?",
          answer: "The collection includes <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>, <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>, <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a>, <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a>, and <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a>. Baroque masters dominate the holdings."
        },
        {
          question: "How did the Dulwich collection form?",
          answer: "The paintings were originally assembled for the <strong>King of Poland</strong>, but revolutions stranded them in London. Dealers Francis Bourgeois and Noel Desenfans donated them to Dulwich College."
        },
        {
          question: "Where is Dulwich Picture Gallery?",
          answer: "The gallery is in <strong>Dulwich Village</strong>, South London, about 20 minutes by train from central London. The suburban setting includes gardens and a cafe."
        },
        {
          question: "Is Dulwich Picture Gallery free?",
          answer: "No, admission costs around <strong>£18</strong> for adults. Under 18s enter free, and the gallery offers free Friday late openings periodically."
        }
      ]
    },

    // 9. Kimbell Art Museum
    {
      slug: 'kimbell-art-museum',
      description: `<p>The <strong>Kimbell Art Museum</strong> opened in 1972 in a building widely considered architect Louis Kahn's masterpiece. The cycloid vaults with their silvery natural light create an atmosphere of quiet contemplation rare among American museums. Industrialist Kay Kimbell and his wife Velma bequeathed their fortune to establish a museum for Fort Worth, and the foundation pursued quality over quantity, assembling a small but exceptional collection of paintings and sculptures.</p>

<p>European Old Masters form the core, including <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio's</strong></a> <a href="/apps/masterpieces/art/caravaggio-cardsharps"><strong>The Cardsharps</strong></a>, one of his earliest genre scenes depicting a young man cheated at cards. Works by <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>, <a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a>, and <a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Vigée Le Brun</strong></a> demonstrate the range of holdings. The museum added a Renzo Piano pavilion in 2013 for special exhibitions while preserving Kahn's serene original building. Asian antiquities and Pre-Columbian art extend the collection beyond Europe, and admission to the permanent galleries remains free.</p>`,
      faqs: [
        {
          question: "What famous paintings are at the Kimbell?",
          answer: "<a href=\"/apps/masterpieces/art/caravaggio-cardsharps\"><strong>The Cardsharps</strong></a> by <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> is a highlight, alongside works by <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>, Velázquez, and Matisse. The small collection emphasizes masterpieces."
        },
        {
          question: "Who designed the Kimbell Art Museum?",
          answer: "<strong>Louis Kahn</strong> designed the 1972 building, considered his masterpiece. The cycloid vaults with natural light create a meditative atmosphere that has influenced museum architecture globally."
        },
        {
          question: "Is the Kimbell Art Museum free?",
          answer: "Yes, the permanent collection has <strong>free admission</strong>. Special exhibitions in the Renzo Piano Pavilion may charge separately."
        },
        {
          question: "Where is the Kimbell Art Museum?",
          answer: "The museum is in <strong>Fort Worth, Texas</strong>, in the Cultural District alongside the Modern Art Museum and the Amon Carter Museum. It's about 30 miles west of Dallas."
        },
        {
          question: "When was the Kimbell founded?",
          answer: "The museum opened in <strong>1972</strong> following a bequest from industrialist Kay Kimbell. His foundation spent decades assembling the collection before the building was completed."
        }
      ]
    },

    // 10. Pushkin Museum
    {
      slug: 'pushkin-museum',
      description: `<p>The <strong>Pushkin State Museum of Fine Arts</strong> opened in 1912 as a teaching museum for Moscow University, housed in a neoclassical building designed by Roman Klein. The original collection consisted mainly of plaster casts of ancient sculptures, but nationalization after 1917 transformed it into one of Russia's premier art museums. Works from aristocratic estates and the Hermitage flowed into the collection, along with the legendary holdings of merchants Sergei Shchukin and Ivan Morozov.</p>

<p>The Shchukin and Morozov donations give the Pushkin exceptional strength in <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painting. Works by <a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a>, <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a>, <a href="/apps/masterpieces/artist/paul-cezanne"><strong>Cézanne</strong></a>, and <a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Van Gogh</strong></a> fill the galleries, alongside Picasso and Matisse. The European Old Masters collection includes paintings by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, <a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Poussin</strong></a>, and <a href="/apps/masterpieces/artist/francois-boucher"><strong>Boucher</strong></a>. Egyptian antiquities and Greek gold complete the encyclopedic scope.</p>`,
      faqs: [
        {
          question: "What is the Pushkin Museum known for?",
          answer: "The museum has one of the world's finest collections of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> art, built from the Shchukin and Morozov collections nationalized after 1917."
        },
        {
          question: "Which artists are featured at the Pushkin?",
          answer: "Highlights include works by <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>, <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a>, Van Gogh, Picasso, and Matisse. Rembrandt and other Old Masters are also well represented."
        },
        {
          question: "When was the Pushkin Museum founded?",
          answer: "The museum opened in <strong>1912</strong> as a teaching collection for Moscow University. Nationalization after the 1917 Revolution expanded holdings with works from private collections."
        },
        {
          question: "Where is the Pushkin Museum located?",
          answer: "The museum sits on <strong>Volkhonka Street</strong> in central Moscow, near the Cathedral of Christ the Saviour. The neoclassical building was designed by Roman Klein."
        },
        {
          question: "What else can I see at the Pushkin?",
          answer: "Beyond European painting, the museum holds Egyptian mummies, Greek gold jewelry, Byzantine icons, and the original plaster cast collection that formed its nucleus."
        }
      ]
    },

    // 11. Belvedere
    {
      slug: 'belvedere',
      description: `<p>The <strong>Belvedere</strong> comprises two Baroque palaces built between 1714 and 1723 for Prince Eugene of Savoy, Austria's greatest military commander. Architect Johann Lukas von Hildebrandt created the Upper Belvedere as a ceremonial reception hall, connected by formal gardens to the Lower Belvedere which served as the prince's summer residence. Empress Maria Theresa acquired the complex in 1752 and opened portions to the public in 1781, making it one of the world's first public museums.</p>

<p>The Upper Belvedere now houses <strong>Austrian art from the Middle Ages to the present</strong>, with the world's largest collection of <a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> paintings. His <a href="/apps/masterpieces/art/the-kiss-klimt"><strong>The Kiss</strong></a> draws enormous crowds, its gold-leaf surface shimmering in the gallery light. <a href="/apps/masterpieces/art/death-and-life"><strong>Death and Life</strong></a> shows a darker side of Klimt's vision. Works by <a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> and Oskar Kokoschka represent Austrian Expressionism, while <a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> anchors the Romantic holdings. The Austrian State Treaty ending Allied occupation was signed in the Marble Hall in 1955.</p>`,
      faqs: [
        {
          question: "What famous paintings are at the Belvedere?",
          answer: "<a href=\"/apps/masterpieces/art/the-kiss-klimt\"><strong>The Kiss</strong></a> by <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> is the signature work. The museum also holds <a href=\"/apps/masterpieces/art/death-and-life\"><strong>Death and Life</strong></a> and 22 other Klimt paintings."
        },
        {
          question: "When was the Belvedere built?",
          answer: "Prince Eugene of Savoy built the palaces between <strong>1714 and 1723</strong>. The Upper Belvedere served as a ceremonial space while the Lower Belvedere was his summer residence."
        },
        {
          question: "Which artists are featured at the Belvedere?",
          answer: "Beyond Klimt, the collection includes <a href=\"/apps/masterpieces/artist/egon-schiele\"><strong>Egon Schiele</strong></a>, <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>, Kokoschka, and Monet. The museum spans medieval to modern Austrian art."
        },
        {
          question: "Where is the Belvedere located?",
          answer: "The museum sits in Vienna's <strong>third district</strong>, with gardens stretching between the two palaces. The grounds offer views toward the city center and St. Stephen's Cathedral."
        },
        {
          question: "How much does the Belvedere cost?",
          answer: "Upper Belvedere admission costs around <strong>€18</strong>. Combined tickets covering both palaces are available. Under 19s enter free."
        }
      ]
    },

    // 12. Clark Art Institute
    {
      slug: 'clark-art-institute',
      description: `<p>The <strong>Clark Art Institute</strong> opened in 1955 in rural Williamstown, Massachusetts, far from the East Coast museums where collectors Sterling and Francine Clark originally expected their collection to reside. Cold War fears of nuclear attack on New York prompted their search for a safer location. The resulting museum combines an intimate gallery experience with serious art historical scholarship through its research library and graduate program affiliated with Williams College.</p>

<p>French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> defines the collection, with over 30 paintings by <a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> forming one of the finest holdings anywhere. Works by <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a>, <a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a>, and <a href="/apps/masterpieces/artist/claude-monet"><strong>Monet</strong></a> fill adjacent galleries. <a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>Bouguereau's</strong></a> <a href="/apps/masterpieces/art/nymphs-satyr"><strong>Nymphs and Satyr</strong></a> represents the academic tradition the Impressionists rejected. American painters including Winslow Homer and John Singer Sargent provide counterpoint. Tadao Ando's 2014 visitor center added concrete and reflecting pools to the wooded campus.</p>`,
      faqs: [
        {
          question: "What is the Clark Art Institute known for?",
          answer: "The Clark has one of the world's finest collections of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painting, especially <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>. Over 30 Renoir paintings make this a destination for lovers of French art."
        },
        {
          question: "Which artists are featured at the Clark?",
          answer: "Beyond Renoir, the collection includes <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>, <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, <a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a>, and <a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a>. American painters like Homer and Sargent are also represented."
        },
        {
          question: "Why is the Clark in Williamstown?",
          answer: "Collectors Sterling and Francine Clark chose this rural Massachusetts location during the <strong>Cold War</strong>, fearing nuclear attacks on New York. The museum opened in 1955."
        },
        {
          question: "Where is the Clark Art Institute?",
          answer: "The museum is in <strong>Williamstown, Massachusetts</strong>, in the Berkshire Hills near the Vermont border. It's about 3 hours from Boston or New York by car."
        },
        {
          question: "Is the Clark Art Institute free?",
          answer: "Admission varies by season. It's <strong>free from November through May</strong> and charges around $20 in summer and fall. The grounds and trails are always free."
        }
      ]
    },

    // 13. Borghese Gallery
    {
      slug: 'borghese-gallery-rome-italy',
      description: `<p>The <strong>Galleria Borghese</strong> occupies a 17th-century villa built for Cardinal Scipione Borghese, nephew of Pope Paul V. The cardinal assembled one of Rome's greatest art collections through patronage, purchase, and outright confiscation from other collectors. He recognized <a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini's</strong></a> genius early and commissioned sculptural groups that remain in the villa, while seizing works by <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> from the studio of Cavalier d'Arpino.</p>

<p>Bernini's sculptures anchor the ground floor: <strong>Apollo and Daphne</strong> captures the moment of transformation in marble, while <strong>David</strong> shows the young hero mid-throw. Upstairs, Caravaggio's paintings include <a href="/apps/masterpieces/art/caravaggio-young-sick-bacchus"><strong>Young Sick Bacchus</strong></a> and <a href="/apps/masterpieces/art/caravaggio-boy-with-a-basket-of-fruit"><strong>Boy with a Basket of Fruit</strong></a>. <a href="/apps/masterpieces/artist/raphael"><strong>Raphael's</strong></a> <strong>Deposition</strong> and works by <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> fill the picture galleries. Reservations are required for timed entry, limiting crowds in the intimate villa rooms.</p>`,
      faqs: [
        {
          question: "What famous artworks are at the Borghese Gallery?",
          answer: "Bernini's <strong>Apollo and Daphne</strong> and <strong>David</strong> highlight the sculptures. <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio's</strong></a> <a href=\"/apps/masterpieces/art/caravaggio-boy-with-a-basket-of-fruit\"><strong>Boy with a Basket of Fruit</strong></a> and works by <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> lead the paintings."
        },
        {
          question: "Who collected the Borghese artworks?",
          answer: "Cardinal <strong>Scipione Borghese</strong> assembled the collection in the early 17th century. He patronized Bernini and seized Caravaggio paintings from other collectors."
        },
        {
          question: "Do I need reservations for the Borghese Gallery?",
          answer: "Yes, <strong>reservations are required</strong>. Timed entry limits visitors to two-hour slots, preserving the intimate experience. Book weeks ahead, especially in peak season."
        },
        {
          question: "Where is the Borghese Gallery?",
          answer: "The villa sits in <strong>Villa Borghese gardens</strong>, Rome's large central park. Enter from Piazzale del Museo Borghese, reachable by Metro or bus."
        },
        {
          question: "When did the Borghese Gallery open to the public?",
          answer: "The Italian government acquired the villa and collection in <strong>1902</strong>, opening it as a public museum in 1903. The collection had remained largely intact since the 17th century."
        }
      ]
    },

    // 14. Munch Museum
    {
      slug: 'munch-museum',
      description: `<p>The <strong>MUNCH museum</strong> opened in October 2021 in a striking 13-story tower that leans toward the Oslo Fjord. Spanish architect Juan Herreros designed the building, which provides 26,313 square meters of exhibition space dedicated primarily to <a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a>. The artist bequeathed his entire estate to the city of Oslo upon his death in 1944, creating one of the world's largest single-artist collections with nearly 27,000 works including paintings, prints, drawings, and photographs.</p>

<p>Multiple versions of <strong>The Scream</strong> anchor the collection, though the famous 1893 tempera painting rotates display to protect its fragile cardboard support. Munch's other iconic images appear throughout: <a href="/apps/masterpieces/art/madonna-munch"><strong>Madonna</strong></a>, <a href="/apps/masterpieces/art/anxiety-munch"><strong>Anxiety</strong></a>, and <a href="/apps/masterpieces/art/edvard-munch-despair"><strong>Despair</strong></a> trace his exploration of existential themes. The building houses 11 galleries showing different aspects of Munch's work alongside temporary exhibitions of contemporary art. A rooftop bar offers panoramic views over the city and fjord.</p>`,
      faqs: [
        {
          question: "Can I see The Scream at the Munch Museum?",
          answer: "Yes, the museum holds three versions of <strong>The Scream</strong>: a painting, a drawing, and prints. One version is always on display, rotated to protect the fragile works on cardboard."
        },
        {
          question: "What other Munch paintings are at the museum?",
          answer: "Beyond The Scream, see <a href=\"/apps/masterpieces/art/madonna-munch\"><strong>Madonna</strong></a>, <a href=\"/apps/masterpieces/art/anxiety-munch\"><strong>Anxiety</strong></a>, <a href=\"/apps/masterpieces/art/edvard-munch-despair\"><strong>Despair</strong></a>, and The Sick Child. Nearly 27,000 <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> works fill 11 galleries."
        },
        {
          question: "When did the new Munch Museum open?",
          answer: "The current building opened in <strong>October 2021</strong>, replacing the old museum at Tøyen. The 13-story tower was designed by Spanish architect Juan Herreros."
        },
        {
          question: "Where is the Munch Museum located?",
          answer: "The museum sits in <strong>Bjørvika</strong>, Oslo's waterfront district, near the Opera House. The leaning tower faces the Oslo Fjord."
        },
        {
          question: "How much does the Munch Museum cost?",
          answer: "Adult admission costs around <strong>160 NOK</strong> (approximately €14). Under 18s enter free. The rooftop bar and restaurant don't require museum tickets."
        }
      ]
    },

    // 15. National Portrait Gallery London
    {
      slug: 'national-portrait-gallery-london-uk',
      description: `<p>The <strong>National Portrait Gallery</strong> opened in 1856 as the world's first gallery dedicated to portraits of notable people rather than artworks by notable artists. The founding principle held that historical significance mattered more than artistic merit, though the collection now includes masterpieces by <a href="/apps/masterpieces/artist/joshua-reynolds"><strong>Joshua Reynolds</strong></a>, <a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a>, and <a href="/apps/masterpieces/artist/john-everett-millais"><strong>John Everett Millais</strong></a>. The gallery moved to its current St Martin's Place location in 1896, just off Trafalgar Square.</p>

<p>A three-year renovation completed in 2023 transformed the galleries, increasing displayed portraits by a third to over 1,100 works. The collection spans from Tudor monarchs through Victorian scientists to contemporary celebrities, telling British history through faces. Reynolds' <strong>Portrait of Omai</strong>, depicting the first Polynesian to visit Britain, was saved for the nation in 2023 after a major fundraising campaign. The gallery hosts the annual <strong>BP Portrait Award</strong> showcasing contemporary portraiture, and admission to the permanent collection remains free.</p>`,
      faqs: [
        {
          question: "What makes the National Portrait Gallery unique?",
          answer: "Founded in <strong>1856</strong>, it was the world's first gallery focused on portraits of notable figures rather than artworks by notable artists. Historical importance originally mattered more than artistic merit."
        },
        {
          question: "Which artists are featured at the gallery?",
          answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Joshua Reynolds</strong></a>, <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a>, <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>, and Holbein, alongside photographs and contemporary works."
        },
        {
          question: "Is the National Portrait Gallery free?",
          answer: "Yes, the permanent collection has <strong>free admission</strong>. Special exhibitions may charge. The gallery reopened in June 2023 after a major renovation."
        },
        {
          question: "Where is the National Portrait Gallery?",
          answer: "The gallery is at <strong>St Martin's Place</strong>, immediately behind the National Gallery and off Trafalgar Square. The nearest Tube stations are Leicester Square and Charing Cross."
        },
        {
          question: "What can I see at the gallery?",
          answer: "Over 1,100 portraits span from Tudor kings to contemporary figures. Highlights include Reynolds' <strong>Portrait of Omai</strong> and the annual BP Portrait Award exhibition of new works."
        }
      ]
    },

    // 16. Museum of Fine Arts of Seville
    {
      slug: 'museum-of-fine-arts-of-seville-seville-spain',
      description: `<p>The <strong>Museo de Bellas Artes de Sevilla</strong> ranks as Spain's second most important art museum after the Prado. Established in 1835 following the dissolution of monasteries, it occupies the former Convent of La Merced Calzada, a 17th-century building with three patios decorated with Andalusian tiles. The collection draws heavily from suppressed religious institutions, giving it exceptional depth in <strong>Sevillian Baroque painting</strong> from the city's 17th-century golden age.</p>

<p><a href="/apps/masterpieces/artist/bartolome-esteban-murillo"><strong>Murillo</strong></a> dominates Room 5, the former convent church, with altarpieces including his famous <strong>Inmaculada Colosal</strong>. <a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Zurbarán's</strong></a> austere monastic scenes occupy Room 10, while <a href="/apps/masterpieces/artist/juan-de-valdes-leal"><strong>Valdés Leal's</strong></a> dramatic compositions fill adjacent galleries. Works by <a href="/apps/masterpieces/artist/diego-velazquez"><strong>Velázquez</strong></a> teacher Francisco Pacheco and sculptor Juan Martínez Montañés document the artistic community that made Seville a center of Spanish art. A bronze statue of Murillo stands in the plaza outside.</p>`,
      faqs: [
        {
          question: "What artists are featured at the Seville Fine Arts Museum?",
          answer: "<a href=\"/apps/masterpieces/artist/bartolome-esteban-murillo\"><strong>Murillo</strong></a> and <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a> dominate, with works by <a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdés Leal</strong></a> and Velázquez's teacher Pacheco. Sevillian Baroque masters fill the galleries."
        },
        {
          question: "When was the Seville museum founded?",
          answer: "The museum was established in <strong>1835</strong> after monastery dissolutions, opening to the public in 1841. It occupies a former convent built in the early 17th century."
        },
        {
          question: "Why is this museum important?",
          answer: "It ranks as <strong>Spain's second most important</strong> art museum after the Prado, with the finest collection of Sevillian golden age painting anywhere."
        },
        {
          question: "Where is the Seville Fine Arts Museum?",
          answer: "The museum sits on <strong>Plaza del Museo</strong> in central Seville, near the Macarena neighborhood. A statue of Murillo marks the entrance."
        },
        {
          question: "What is the building like?",
          answer: "The former Convent of La Merced features three patios with <strong>Andalusian tiles</strong>, a Baroque church converted to galleries, and 17th-century architecture throughout."
        }
      ]
    },

    // 17. Musée Toulouse-Lautrec
    {
      slug: 'musee-toulouse-lautrec',
      description: `<p>The <strong>Musée Toulouse-Lautrec</strong> occupies the <strong>Palais de la Berbie</strong>, a 13th-century bishop's fortress that dominates the skyline of <a href="/apps/masterpieces/artist/henri-de-toulouse-lautrec"><strong>Toulouse-Lautrec's</strong></a> birthplace, Albi. The imposing brick structure, now part of a UNESCO World Heritage Site, was converted to house the artist's work after his family donated over 1,000 pieces following his death in 1901. This constitutes the world's largest public collection devoted to the painter who documented Montmartre nightlife.</p>

<p>The collection traces Toulouse-Lautrec's development from early portraits of family and friends through his famous Parisian subjects. All <strong>31 lithographic posters</strong> appear here, including <a href="/apps/masterpieces/art/moulin-rouge-la-goulue"><strong>Moulin Rouge: La Goulue</strong></a> and <a href="/apps/masterpieces/art/jane-avril"><strong>Jane Avril</strong></a>, the images that revolutionized advertising design. Paintings of dancers, prostitutes, and cabaret performers reveal his empathetic eye for marginalized figures. A top floor shows works by contemporaries including Bonnard, Vuillard, and Matisse. French gardens designed by André Le Nôtre offer river views.</p>`,
      faqs: [
        {
          question: "What can I see at the Toulouse-Lautrec Museum?",
          answer: "The museum holds over 1,000 works by <a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>, including all <strong>31 lithographic posters</strong> like <a href=\"/apps/masterpieces/art/moulin-rouge-la-goulue\"><strong>Moulin Rouge: La Goulue</strong></a>."
        },
        {
          question: "Why is this museum in Albi?",
          answer: "Toulouse-Lautrec was <strong>born in Albi</strong> in 1864. His family donated the collection to his hometown after his death in 1901, making it the world's largest public collection of his work."
        },
        {
          question: "What is the Palais de la Berbie?",
          answer: "This <strong>13th-century bishop's fortress</strong> houses the museum. The imposing brick structure is part of the UNESCO-listed Episcopal City of Albi alongside the cathedral."
        },
        {
          question: "Where is the Toulouse-Lautrec Museum?",
          answer: "The museum is in <strong>Albi</strong>, southern France, about 80 kilometers northeast of Toulouse. The building overlooks the Tarn River."
        },
        {
          question: "How much does admission cost?",
          answer: "Entry costs around <strong>€10</strong> for adults. Combined tickets with the Sainte-Cécile Cathedral are available. The French gardens are free to visit."
        }
      ]
    },

    // 18. Hamburger Kunsthalle
    {
      slug: 'hamburger-kunsthalle',
      description: `<p>The <strong>Hamburger Kunsthalle</strong> opened in 1869 and grew into one of Germany's most important art museums under director Alfred Lichtwark, who from 1886 systematically built the collection of German <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> painting. He rediscovered <a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> and <strong>Philipp Otto Runge</strong> decades before they gained wider recognition, securing key works that now form the core of the 19th-century galleries.</p>

<p>Friedrich's iconic <strong>Wanderer above the Sea of Fog</strong> arrived in 1970 and has become shorthand for Romantic art worldwide. <strong>The Sea of Ice</strong>, acquired in 1905, depicts a shipwreck crushed by Arctic ice. Beyond Romanticism, the collection spans medieval altarpieces to contemporary installations across three connected buildings. Works by <a href="/apps/masterpieces/artist/max-liebermann"><strong>Max Liebermann</strong></a>, Edvard Munch, and the <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionists</strong></a> trace German art into the 20th century. A 2024 anniversary exhibition celebrated Friedrich's 250th birthday with 160 works.</p>`,
      faqs: [
        {
          question: "What is the Hamburger Kunsthalle famous for?",
          answer: "The museum has one of the world's finest collections of German <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painting, especially <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>. His <strong>Wanderer above the Sea of Fog</strong> is the signature work."
        },
        {
          question: "Which artists are represented?",
          answer: "Beyond Friedrich, find works by Philipp Otto Runge, <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Max Liebermann</strong></a>, Edvard Munch, and the German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionists</strong></a>. Medieval to contemporary art spans three buildings."
        },
        {
          question: "When was the Hamburger Kunsthalle founded?",
          answer: "The museum opened in <strong>1869</strong>. Director Alfred Lichtwark transformed it from 1886, building exceptional holdings of German Romantic and 19th-century art."
        },
        {
          question: "Where is the Hamburger Kunsthalle?",
          answer: "The museum complex sits near <strong>Hamburg's main train station</strong>, between the Alster lakes and the city center. Three buildings house different periods of art."
        },
        {
          question: "How much does admission cost?",
          answer: "Entry costs around <strong>€16</strong> for adults. Under 18s enter free. The museum offers reduced rates on certain days and combined tickets with other Hamburg museums."
        }
      ]
    },

    // 19. École nationale supérieure des Beaux-Arts
    {
      slug: '201cole-nationale-sup233rieure-des-beauxarts-ensba',
      description: `<p>The <strong>École nationale supérieure des Beaux-Arts</strong> traces its origins to 1648, when Cardinal Mazarin founded the Académie Royale de Peinture et de Sculpture. After the Revolution abolished royal academies, the institution reformed as the École des Beaux-Arts in 1819. Since 1816, it has occupied the former Convent of the Petits-Augustins on Paris's Left Bank, a site that had sheltered medieval and Renaissance monuments rescued from revolutionary destruction.</p>

<p>While primarily a teaching institution, the École conserves approximately <strong>450,000 works of art</strong> assembled over centuries to train students. The collection includes paintings by <a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Ingres</strong></a>, <a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a>, and <a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a>, whose massive hemicycle mural adorns the main amphitheater. Prints and drawings from the 16th through 18th centuries provided students with models of composition. The Palais des Études courtyard displays architectural fragments, and temporary exhibitions occasionally open to the public.</p>`,
      faqs: [
        {
          question: "What is the École des Beaux-Arts?",
          answer: "Founded in <strong>1648</strong> as the Royal Academy, this is France's premier fine arts school. It trains students in painting, sculpture, and digital media while conserving 450,000 artworks."
        },
        {
          question: "Can the public visit the École des Beaux-Arts?",
          answer: "The school opens for <strong>temporary exhibitions</strong> and occasional open days. The courtyard with architectural fragments is sometimes accessible. Check their schedule for current openings."
        },
        {
          question: "What artworks are at the École?",
          answer: "The teaching collection includes works by <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>, <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a>, and <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a>, plus 450,000 prints, drawings, and architectural fragments."
        },
        {
          question: "Where is the École des Beaux-Arts?",
          answer: "The school occupies the former Petits-Augustins convent at <strong>14 rue Bonaparte</strong> in Paris's 6th arrondissement, across the Seine from the Louvre."
        },
        {
          question: "What famous artists studied here?",
          answer: "Alumni include Degas, Monet, Renoir, Matisse, and countless others who shaped French art. Louis XIV selected graduates to decorate Versailles."
        }
      ]
    },

    // 20. LACMA
    {
      slug: 'los-angeles-county-museum-of-art-lacma-los-angeles',
      description: `<p>The <strong>Los Angeles County Museum of Art</strong> opened in 1965 as the largest new art museum the United States had seen in a quarter century. The original William Pereira buildings rose on Wilshire Boulevard on land the Hancock family donated, overlooking the La Brea Tar Pits. The collection separated from the former Museum of History, Science, and Art in 1961 to focus exclusively on fine arts, and has grown to over <strong>150,000 objects</strong> spanning 6,000 years.</p>

<p>Strengths include Latin American art, Asian collections across multiple pavilions, and Islamic art rarely matched outside the Middle East. European paintings by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, <a href="/apps/masterpieces/artist/claude-lorrain"><strong>Claude Lorrain</strong></a>, and later <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a> fill the traditional galleries. Chris Burden's <strong>Urban Light</strong> installation of 202 vintage streetlamps has become an LA landmark. A massive Peter Zumthor-designed building is scheduled to open in 2026, spanning Wilshire Boulevard on seismic isolators to house the permanent collection.</p>`,
      faqs: [
        {
          question: "What can I see at LACMA?",
          answer: "The collection spans 6,000 years with strengths in Asian, Latin American, and Islamic art. European holdings include <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> works. Don't miss <strong>Urban Light</strong>."
        },
        {
          question: "When was LACMA founded?",
          answer: "LACMA opened in <strong>1965</strong> after separating from the Museum of History, Science, and Art. It became the largest new American art museum in 25 years."
        },
        {
          question: "What is happening with LACMA's building?",
          answer: "A new building designed by <strong>Peter Zumthor</strong> will open in 2026, spanning Wilshire Boulevard. The original 1965 buildings were demolished to make way for it."
        },
        {
          question: "Where is LACMA located?",
          answer: "The museum sits on <strong>Wilshire Boulevard</strong> in the Miracle Mile district, next to the La Brea Tar Pits. It's about 10 miles west of downtown Los Angeles."
        },
        {
          question: "How much does LACMA cost?",
          answer: "General admission costs around <strong>$20</strong> for adults. LA County residents get free admission on weekdays. Under 17s always enter free."
        }
      ]
    }
  ];

  console.log('Starting museum updates...\n');

  for (const museum of updates) {
    try {
      await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          description: museum.description,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${museum.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${museum.slug}`, error.message);
    }
  }

  console.log('\nAll museum updates completed!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
