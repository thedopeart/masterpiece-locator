const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 4: 20 museums needing FAQs only (all have existing HTML descriptions)

const museumData = [
  {
    slug: 'royal-museums-belgium',
    faqs: [
      {
        question: "What are the key paintings at the Royal Museums of Fine Arts of Belgium?",
        answer: "<a href=\"/apps/masterpieces/artist/james-ensor\"><strong>James Ensor</strong></a>'s <a href=\"/apps/masterpieces/art/christs-entry-into-brussels-in-1889\"><strong>Christ's Entry into Brussels</strong></a> is the showpiece. <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>'s Drunken Silenus and works by <a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a> fill the Old Masters wing."
      },
      {
        question: "How is the museum organized?",
        answer: "It's actually <strong>several museums under one roof</strong>. The Old Masters section covers the 15th through 18th centuries. A separate Fin-de-Siècle wing handles modern art. <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting dominates the oldest galleries."
      },
      {
        question: "Which art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, and <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> are all well covered. Flemish primitives through Belgian Surrealism. <a href=\"/apps/masterpieces/artist/constant-permeke\"><strong>Constant Permeke</strong></a>'s raw Expressionist canvases are on the modern floor."
      },
      {
        question: "Where exactly is the museum in Brussels?",
        answer: "On the <strong>Place Royale</strong> (Koningsplein) in the Mont des Arts area. It's walkable from Grand Place in about ten minutes. <a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Hugo van der Goes</strong></a>'s Virgin and Child hangs in the early Netherlandish rooms upstairs."
      },
      {
        question: "Is the Royal Museums of Fine Arts free?",
        answer: "Not free, but admission is around <strong>\u20AC15</strong> for the combined museums. First Wednesday afternoon of each month is free. <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>'s lively tavern scenes are in the Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> galleries."
      }
    ]
  },
  {
    slug: 'fitzwilliam-museum-university-of-cambridge-cambrid',
    faqs: [
      {
        question: "What famous paintings does the Fitzwilliam Museum have?",
        answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>John Everett Millais</strong></a>'s Bridesmaid and <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Delacroix</strong></a>'s Odalisque are highlights. <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a>'s portrait of Elizabeth Siddal is a key <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> drawing."
      },
      {
        question: "Is the Fitzwilliam Museum free to visit?",
        answer: "Yes, <strong>admission is always free</strong>. It's on Trumpington Street in central Cambridge, a short walk from King's College. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a>'s portraits are in the upper galleries alongside other British paintings."
      },
      {
        question: "What art movements does the Fitzwilliam cover?",
        answer: "Strong in <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> and <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painting. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> galleries include Spanish and Italian works. Antiquities, illuminated manuscripts, and armor round out the collection."
      },
      {
        question: "Who founded the Fitzwilliam?",
        answer: "Viscount <strong>Fitzwilliam of Merrion</strong> left his art collection and library to Cambridge University in 1816. The neoclassical building opened in 1848. <a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Murillo</strong></a>'s religious paintings were among the early European acquisitions."
      },
      {
        question: "What else is worth seeing besides the paintings?",
        answer: "The <strong>antiquities galleries</strong> are first-rate, covering Egyptian, Greek, and Roman objects. The coin collection is one of Britain's finest. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>'s works sit near a strong group of English watercolors and prints."
      }
    ]
  },
  {
    slug: 'st-bavo-cathedral-ghent-belgium',
    faqs: [
      {
        question: "Why is St Bavo's Cathedral famous for art?",
        answer: "It holds <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a>'s <strong>Ghent Altarpiece</strong>, one of the most important paintings in Western art. Completed in 1432, this polyptych spans twelve panels. It's a cornerstone of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>."
      },
      {
        question: "Can I see the Ghent Altarpiece up close?",
        answer: "Yes, but you'll need a <strong>timed ticket</strong> (around \u20AC16) for the dedicated viewing room. The altarpiece was recently restored, revealing vivid original colors. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a>'s oil technique was revolutionary for its time."
      },
      {
        question: "Is there a dress code for St Bavo's Cathedral?",
        answer: "It's an <strong>active place of worship</strong>, so dress respectfully. Shoulders and knees should be covered. Quiet behavior is expected during services. The <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> panels are in a climate-controlled side chapel."
      },
      {
        question: "What panels make up the Ghent Altarpiece?",
        answer: "Twelve panels when fully opened, including the <strong>Adoration of the Mystic Lamb</strong> at center. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a>'s Adam and Eve panels flank the upper register. Angels, saints, and judges fill the remaining sections."
      },
      {
        question: "Has the Ghent Altarpiece ever been stolen?",
        answer: "Multiple times. It's the <strong>most stolen artwork in history</strong>. Napoleon seized it. The Nazis hid it in an Austrian salt mine during WWII. One panel, the Just Judges, was stolen in 1934 and never recovered. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a>'s work has survived it all."
      }
    ]
  },
  {
    slug: 'national-gallery-of-denmark-statens-museum-for-kun',
    faqs: [
      {
        question: "What are the top artworks at the National Gallery of Denmark?",
        answer: "<a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a>'s Portrait of Palladio and <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Lucas Cranach the Elder</strong></a>'s Barbara of Saxony are highlights. <a href=\"/apps/masterpieces/artist/vilhelm-hammershoi\"><strong>Hammersh\u00F8i</strong></a>'s quiet interiors define the Danish collection."
      },
      {
        question: "What makes Hammersh\u00F8i's paintings special here?",
        answer: "The museum holds a significant group of <a href=\"/apps/masterpieces/artist/vilhelm-hammershoi\"><strong>Vilhelm Hammersh\u00F8i</strong></a>'s muted <strong>interior scenes</strong>. His Strandgade apartment paintings show empty rooms filled with soft gray light. They're unlike anything else in Danish art."
      },
      {
        question: "Is admission free at SMK?",
        answer: "The <strong>permanent collection is free</strong>. Special exhibitions charge separately. The museum sits in \u00D8stre Anl\u00E6g park in central Copenhagen. <a href=\"/apps/masterpieces/artist/jacob-jordaens\"><strong>Jacob Jordaens</strong></a>'s <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> canvases are in the European Old Masters galleries."
      },
      {
        question: "Which art periods does the collection cover?",
        answer: "From <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> to contemporary. The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> holdings are strong. Danish Golden Age painting (1800s) is the museum's unique strength."
      },
      {
        question: "How large is the SMK collection?",
        answer: "Around <strong>260,000 works</strong> spanning seven centuries of European and Danish art. <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Hyacinthe Rigaud</strong></a>'s formal portraits and Matisse's cut-outs represent opposite ends of the collection's range."
      }
    ]
  },
  {
    slug: 'mauritshuis',
    faqs: [
      {
        question: "Where can I see Girl with a Pearl Earring?",
        answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s <a href=\"/apps/masterpieces/art/girl-with-a-pearl-earring\"><strong>Girl with a Pearl Earring</strong></a> hangs at the Mauritshuis in The Hague. It has its own room on the <strong>second floor</strong>. Expect crowds around this one."
      },
      {
        question: "What other masterworks are at the Mauritshuis?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>'s <a href=\"/apps/masterpieces/art/anatomy-lesson-of-dr-nicolaes-tulp\"><strong>Anatomy Lesson of Dr. Tulp</strong></a> is a major draw. <a href=\"/apps/masterpieces/artist/pieter-claesz\"><strong>Pieter Claesz</strong></a>'s vanitas still lifes and <a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Ter Borch</strong></a>'s intimate scenes are also here."
      },
      {
        question: "How big is the Mauritshuis?",
        answer: "Quite small. Only about <strong>16 rooms</strong> across two floors in a 17th-century townhouse. You don't need more than two hours. Every room is packed with <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> quality."
      },
      {
        question: "Do I need advance tickets?",
        answer: "<strong>Timed tickets are recommended</strong>, especially on weekends and holidays. You can book online. The museum is steps from the Binnenhof in central The Hague. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s Diana and Her Companions hangs on the first floor."
      },
      {
        question: "What art movement defines the Mauritshuis?",
        answer: "The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> is the core focus. Portraits, landscapes, still lifes, and genre scenes from the 1600s fill nearly every wall. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Flemish painting also appears, though the Dutch works dominate."
      }
    ]
  },
  {
    slug: 'neue-pinakothek',
    faqs: [
      {
        question: "What famous paintings are at the Neue Pinakothek?",
        answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Franz von Stuck</strong></a>'s The Sin is one of the most recognized works. <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>'s landscapes and <a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>B\u00F6cklin</strong></a>'s moody Villa by the Sea are also highlights."
      },
      {
        question: "What time period does the Neue Pinakothek cover?",
        answer: "Art from the <strong>late 18th century through early 20th century</strong>. It picks up where the Alte Pinakothek leaves off. <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, Impressionism, and Art Nouveau fill the galleries."
      },
      {
        question: "Is the Neue Pinakothek currently open?",
        answer: "Check before visiting. The building <strong>closed for renovation</strong> and some works display at the Alte Pinakothek or other Kunstareal venues. <a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Kirchner</strong></a>'s <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> portraits may be in temporary spaces."
      },
      {
        question: "Which German artists are featured?",
        answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a>, <a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Von Stuck</strong></a>, and <a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Carl Spitzweg</strong></a> represent different threads of German art. Spitzweg's Poor Poet is a beloved <strong>Biedermeier classic</strong>. Kirchner and Macke push into the modern era."
      },
      {
        question: "What's the connection to the Alte Pinakothek?",
        answer: "They're neighbors in Munich's <strong>Kunstareal</strong> (art district). The Alte covers Old Masters (pre-1800), the Neue handles 19th-century art. A third museum, the Pinakothek der Moderne, takes over from there. <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> bridges the Alte and Neue collections."
      }
    ]
  },
  {
    slug: 'gemeentemuseum-den-haag-hague-netherlands',
    faqs: [
      {
        question: "Why is this museum important for Mondrian?",
        answer: "It holds the <strong>world's largest collection</strong> of <a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Piet Mondrian</strong></a>'s work. Over 300 pieces trace his evolution from early landscapes to pure <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a> abstraction. His final unfinished painting, Victory Boogie Woogie, is here."
      },
      {
        question: "Has the museum changed its name?",
        answer: "Yes. It's now called <strong>Kunstmuseum Den Haag</strong>. The old name Gemeentemuseum appears in many guides still. <a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a>'s early figurative works, like Girl Writing, show a very different side of his art."
      },
      {
        question: "What else is in the collection besides Mondrian?",
        answer: "<strong>Fashion, decorative arts, and modern photography</strong> share the building. The museum also has strong holdings in Dutch <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a> and contemporary installations. The fashion gallery rotates regularly."
      },
      {
        question: "What's special about the building itself?",
        answer: "H.P. Berlage designed it in 1935. It's a <strong>landmark of Dutch modernist architecture</strong>, with clean brick lines and horizontal windows. The building fits perfectly with <a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a>'s geometric <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a> paintings inside."
      },
      {
        question: "Is admission free?",
        answer: "Not free. Tickets cost around <strong>\u20AC16</strong>. The museum is in The Hague's Museumsquarter, near the beach at Scheveningen. <a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a>'s earliest landscape studies hang alongside his famous grid compositions."
      }
    ]
  },
  {
    slug: 'kroeller-mueller-museum',
    faqs: [
      {
        question: "Where is the Kr\u00F6ller-M\u00FCller Museum?",
        answer: "Inside <strong>Hoge Veluwe National Park</strong> in Otterlo, Netherlands. You'll need a park entry ticket plus museum admission. Free white bicycles are available to ride through the park. <a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Odilon Redon</strong></a>'s Symbolist paintings hang in the upper galleries."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>, and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> are the main threads. Van Gogh's collection here is the second largest in the world. <a href=\"/apps/masterpieces/artist/juan-gris\"><strong>Juan Gris</strong></a>'s still lifes represent the Cubist holdings."
      },
      {
        question: "What about the sculpture garden?",
        answer: "It's one of <strong>Europe's largest sculpture gardens</strong>, with over 160 works spread across 25 hectares. Pieces by Rodin, Henry Moore, and Dubuffet sit among trees and meadows. <a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand L\u00E9ger</strong></a>'s bold modern forms appear in both the garden and indoor galleries."
      },
      {
        question: "Who founded the Kr\u00F6ller-M\u00FCller?",
        answer: "<strong>Helene Kr\u00F6ller-M\u00FCller</strong> amassed the collection in the early 1900s. She bought nearly 90 Van Gogh paintings and over 180 of his drawings. <a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a>'s dreamlike <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> works were another focus of her collecting."
      },
      {
        question: "Can I visit both the park and museum in one day?",
        answer: "Easily. Most visitors spend <strong>2-3 hours in the museum</strong> and the rest exploring the park. Cycling between the entrance and museum takes about 15 minutes. <a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a>'s Portrait of a Man is a standout among the older works."
      }
    ]
  },
  {
    slug: 'gallerie-dell-accademia-venice',
    faqs: [
      {
        question: "What is the Gallerie dell'Accademia's most famous painting?",
        answer: "<a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>'s <a href=\"/apps/masterpieces/art/the-tempest-giorgione\"><strong>The Tempest</strong></a> is the signature work. Nobody has fully explained what the painting depicts. That mystery has kept scholars busy for over <strong>five centuries</strong>."
      },
      {
        question: "Can I see Leonardo's Vitruvian Man?",
        answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>'s Vitruvian Man belongs to this museum, but it's <strong>rarely on public display</strong>. The drawing is too fragile for permanent exhibition. It appears only in occasional special shows."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> Venetian painting is the heart of the collection. <a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a>'s narrative cycles and Bellini's altarpieces fill multiple rooms. Titian, Tintoretto, and Veronese complete the Venetian lineup."
      },
      {
        question: "How large is the collection?",
        answer: "Around <strong>24 rooms</strong> tracing Venetian painting from the 14th to 18th century. <a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a>'s Dream of St Ursula cycle takes up an entire gallery. It's manageable in about two hours."
      },
      {
        question: "Where is the Gallerie dell'Accademia located?",
        answer: "On the <strong>south bank of the Grand Canal</strong>, at the foot of the Accademia Bridge. The building was originally a church and monastery. <a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a>'s portraits hang near <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> altarpieces in the side galleries."
      }
    ]
  },
  {
    slug: 'lenbachhaus',
    faqs: [
      {
        question: "What makes the Lenbachhaus collection special?",
        answer: "It holds the <strong>world's largest collection of Blue Rider art</strong>. <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a>'s early abstract paintings, including The Singer, are central to the museum. Gabriele M\u00FCnter donated hundreds of works in 1957."
      },
      {
        question: "Which Expressionist artists are featured?",
        answer: "<a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a>, <a href=\"/apps/masterpieces/artist/august-macke\"><strong>August Macke</strong></a>, Franz Marc, and Gabriele M\u00FCnter lead the <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> holdings. Macke's Lady in a Green Jacket and Anglers on the Rhine are two of the most colorful pieces."
      },
      {
        question: "What is the Blue Rider group?",
        answer: "A Munich-based <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> circle founded by <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a> and Franz Marc in 1911. They pushed painting toward <strong>pure abstraction</strong> and emotional color. The Lenbachhaus traces this shift room by room."
      },
      {
        question: "Is the Lenbachhaus free?",
        answer: "Not free. Admission is around <strong>\u20AC10</strong>. The museum is in a restored 19th-century villa near K\u00F6nigsplatz. <a href=\"/apps/masterpieces/artist/lovis-corinth\"><strong>Lovis Corinth</strong></a>'s portraits, including his unflinching Self-Portrait with Skeleton, add depth to the German collection."
      },
      {
        question: "What else is in the collection?",
        answer: "19th-century Munich painting and contemporary art installations. <a href=\"/apps/masterpieces/artist/lovis-corinth\"><strong>Corinth</strong></a>'s Innocentia contrasts with the <strong>bolder Expressionist canvases</strong> nearby. Joseph Beuys and Olafur Eliasson have major site-specific works in the newer wing."
      }
    ]
  },
  {
    slug: 'musee-bonnat',
    faqs: [
      {
        question: "What kind of art does the Mus\u00E9e Bonnat-Helleu hold?",
        answer: "Mostly <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic art</strong></a> and Old Master drawings. <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>L\u00E9on Bonnat</strong></a> was a portrait painter who collected voraciously. His personal works and his acquisitions form the <strong>core collection</strong>."
      },
      {
        question: "Who was L\u00E9on Bonnat?",
        answer: "A <strong>leading French Academic painter</strong> and teacher in 19th-century Paris. He was born in Bayonne and donated his collection to the city. <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a>'s portraits of his family, including his little sister, are personal highlights."
      },
      {
        question: "Are there any famous non-Bonnat works?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Gustave Dor\u00E9</strong></a>'s dramatic Dante and Virgil in the Ninth Circle is a standout. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht D\u00FCrer</strong></a>'s nude study is among the <strong>finest Old Master drawings</strong> in the collection."
      },
      {
        question: "Where is the Mus\u00E9e Bonnat-Helleu?",
        answer: "In <strong>Bayonne</strong>, in France's Basque Country near the Spanish border. It's about 30 minutes from Biarritz. <a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Maurice Denis</strong></a>'s <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> paintings round out the post-Impressionist holdings."
      },
      {
        question: "What art movements are covered?",
        answer: "Primarily <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic art</strong></a> and <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, with some <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> works. The drawing cabinet includes sheets by Michelangelo and Raphael. It's a <strong>small but rich museum</strong> that most tourists overlook."
      }
    ]
  },
  {
    slug: 'kunsthaus-zurich',
    faqs: [
      {
        question: "What major paintings are at the Kunsthaus Z\u00FCrich?",
        answer: "<a href=\"/apps/masterpieces/artist/piet-mondrian\"><strong>Mondrian</strong></a>'s Composition with Red, Blue, and Yellow is an icon of <a href=\"/apps/masterpieces/movement/de-stijl\"><strong>De Stijl</strong></a>. <a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>B\u00F6cklin</strong></a>'s Idyll and <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a>'s Gardener are also featured."
      },
      {
        question: "How large is the collection?",
        answer: "One of Switzerland's <strong>biggest art museums</strong>, with over 4,000 paintings and 100,000 prints. A 2021 David Chipperfield extension doubled the gallery space. <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a>'s Dutch landscapes hang in the Old Masters wing."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> through to contemporary art. The Giacometti holdings are among the strongest anywhere. Swiss art from Fuseli to Hodler has its own dedicated galleries."
      },
      {
        question: "Is the Kunsthaus free?",
        answer: "The permanent collection is <strong>free on Wednesdays</strong>. Otherwise, admission runs about CHF 23. The museum sits on Heimplatz in central Z\u00FCrich. <a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a>'s genre paintings are in the Dutch rooms."
      },
      {
        question: "What makes the new extension worth visiting?",
        answer: "Chipperfield's 2021 building houses the <strong>Bührle Collection</strong>, including Monets, Renoirs, and C\u00E9zannes. The modern galleries added significant depth. <a href=\"/apps/masterpieces/artist/francesco-guardi\"><strong>Francesco Guardi</strong></a>'s Venetian views are in the older building across the square."
      }
    ]
  },
  {
    slug: 'groeningemuseum',
    faqs: [
      {
        question: "What are the Groeningemuseum's most important paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/gerard-david\"><strong>Gerard David</strong></a>'s Judgment of Cambyses panels are the signature works. They depict a corrupt judge being flayed alive. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a>'s Last Judgement triptych is another major piece."
      },
      {
        question: "What makes this museum special for early Flemish art?",
        answer: "Bruges was the <strong>center of Flemish painting</strong> in the 15th century, and this museum reflects that. <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> primitives by Van Eyck, Memling, and <a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a> are all here."
      },
      {
        question: "How big is the Groeningemuseum?",
        answer: "It's a <strong>compact museum</strong> with about 15 rooms. You can see everything in 90 minutes. <a href=\"/apps/masterpieces/artist/hugo-van-der-goes\"><strong>Hugo van der Goes</strong></a>'s Death of the Virgin and other <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> altarpieces fill the early rooms."
      },
      {
        question: "Are Gerard David's Judgment panels graphic?",
        answer: "Yes. The flaying scene is <strong>vividly painted</strong> and not for the squeamish. <a href=\"/apps/masterpieces/artist/gerard-david\"><strong>David</strong></a> rendered it with clinical detail to warn against judicial corruption. The panels date to 1498 and hung in Bruges' town hall."
      },
      {
        question: "Where is the Groeningemuseum?",
        answer: "On Dijver street in <strong>central Bruges</strong>, along the canal near the Church of Our Lady. A combined ticket covers several Bruges museums. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a>'s hellscape imagery contrasts sharply with the refined Flemish portraits nearby."
      }
    ]
  },
  {
    slug: 'frick-collection',
    faqs: [
      {
        question: "What are the Frick Collection's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s Mistress and Maid and <a href=\"/apps/masterpieces/artist/el-greco\"><strong>El Greco</strong></a>'s portrait of Vincenzo Anastagi are highlights. <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>'s Crucifixion is a rare and early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> gem."
      },
      {
        question: "What's the building like?",
        answer: "A <strong>Gilded Age mansion</strong> on the Upper East Side of Manhattan. Henry Clay Frick built it in 1914. The art hangs in domestic-scale rooms with period furniture, not white-walled galleries. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>'s paintings share wall space with Frick's original furnishings."
      },
      {
        question: "How many Vermeers does the Frick have?",
        answer: "Three. That's a significant number, since only <strong>34-36 Vermeer paintings</strong> survive worldwide. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s Mistress and Maid is the most dramatic of the three. The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> rooms are among the richest in New York."
      },
      {
        question: "Is the Frick Collection free?",
        answer: "No, but admission is <strong>pay-what-you-wish on certain days</strong>. Regular tickets are about $22. Children under 10 aren't admitted. <a href=\"/apps/masterpieces/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a>'s Madonna is in the early Italian room near the entrance."
      },
      {
        question: "What art movements are covered?",
        answer: "<a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painting. The collection is small but every piece is first-rate. <a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a>'s Flagellation of Christ is one of the <strong>oldest Italian panels</strong> in New York."
      }
    ]
  },
  {
    slug: 'palais-des-beauxarts-de-lille-lille-france',
    faqs: [
      {
        question: "What are the standout paintings at the Palais des Beaux-Arts de Lille?",
        answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>'s After Dinner at Ornans is a landmark of French Realism. <a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Jules Bastien-Lepage</strong></a>'s Priam at Achilles' Feet and <a href=\"/apps/masterpieces/artist/carolus-duran\"><strong>Carolus-Duran</strong></a>'s portraits are also featured."
      },
      {
        question: "How large is this museum?",
        answer: "It's the <strong>second-largest fine arts museum in France</strong> after the Louvre. Over 60,000 works span painting, sculpture, ceramics, and numismatics. <a href=\"/apps/masterpieces/artist/jules-breton\"><strong>Jules Breton</strong></a>'s rural scenes hang in the 19th-century French galleries."
      },
      {
        question: "Which art movements are strongest?",
        answer: "<a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic art</strong></a> are well represented. Flemish and Dutch Old Masters fill the ground floor. <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>'s Realist canvases bridged the gap between Academic tradition and modern painting."
      },
      {
        question: "Is the Palais des Beaux-Arts free?",
        answer: "Free on the <strong>first Sunday of each month</strong>. Otherwise, about \u20AC7. The building is a grand 19th-century palace in central Lille. <a href=\"/apps/masterpieces/artist/carolus-duran\"><strong>Carolus-Duran</strong></a>'s elegant society portraits reflect the city's prosperous past."
      },
      {
        question: "What relief plans can I see here?",
        answer: "The basement holds <strong>15 scale models of fortified towns</strong>, built for Louis XIV's military planning. They're some of the finest surviving relief plans in France. Upstairs, <a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a>'s <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic</strong></a> paintings offer a different kind of precision."
      }
    ]
  },
  {
    slug: 'museum-boijmans-van-beuningen-rotterdam-netherland',
    faqs: [
      {
        question: "What are the highlights at Museum Boijmans Van Beuningen?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a>'s Port de Javel and <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a>'s Two Male Heads are signature works. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a>'s Village Wedding captures the rowdy spirit of <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre painting."
      },
      {
        question: "Is the museum currently open?",
        answer: "The main building <strong>closed for renovation</strong> in 2019. Works are displayed at Depot Boijmans Van Beuningen, the world's first publicly accessible art storage facility. <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a>'s tavern scenes can be viewed in the Depot's visible storage."
      },
      {
        question: "What is the Depot Boijmans?",
        answer: "A <strong>mirrored, bowl-shaped building</strong> opened in 2021 where all 151,000 objects are accessible. You walk through climate-controlled storage rooms. <a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a>'s domestic interiors sit alongside works you'd normally never see in storage."
      },
      {
        question: "What art movements are strongest?",
        answer: "<a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> are the two main pillars. Surrealism is also well represented, including works by Dal\u00ED and Magritte. <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a>'s peasant scenes show Flemish influence within the Dutch collection."
      },
      {
        question: "Where is the museum in Rotterdam?",
        answer: "In the <strong>Museumpark</strong> district, surrounded by other cultural institutions. The Depot is nearby and open year-round. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a>'s chaotic domestic scenes are favorites among visitors to the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> galleries."
      }
    ]
  },
  {
    slug: 'national-gallery-of-umbria-palazzo-dei-priori-peru',
    faqs: [
      {
        question: "What is the National Gallery of Umbria known for?",
        answer: "The finest collection of <strong>Umbrian Renaissance painting</strong> anywhere. <a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a>'s Adoration of the Magi and <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>'s polyptych are the crown pieces of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> galleries."
      },
      {
        question: "Who was Perugino?",
        answer: "<a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a> was Raphael's teacher and one of the <strong>leading painters</strong> of the early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. He was born near Perugia, so this museum is the best place to see his work in context."
      },
      {
        question: "Where exactly is the gallery?",
        answer: "Inside the <strong>Palazzo dei Priori</strong>, Perugia's medieval town hall on Corso Vannucci. The building dates to the 13th century. <a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>'s miracle panels hang in the early rooms on the upper floor."
      },
      {
        question: "How many works are in the collection?",
        answer: "Around <strong>3,000 works</strong> spanning the 13th through 19th centuries. Umbrian painting is the focus, but Sienese and Florentine pieces appear too. <a href=\"/apps/masterpieces/artist/perugino\"><strong>Perugino</strong></a>'s Miracles of San Bernardino panels tell a complete narrative cycle."
      },
      {
        question: "Is Piero della Francesca well represented?",
        answer: "<a href=\"/apps/masterpieces/artist/piero-della-francesca\"><strong>Piero della Francesca</strong></a>'s polyptych with miracle scenes is a <strong>key early work</strong>. The panels show his mastery of geometry and light. His <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> clarity influenced painters across central Italy for generations."
      }
    ]
  },
  {
    slug: 'kimbell-art-museum',
    faqs: [
      {
        question: "What famous artworks are at the Kimbell Art Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>'s The Cardsharps is a major draw. <a href=\"/apps/masterpieces/artist/georges-de-la-tour\"><strong>Georges de La Tour</strong></a>'s Cheat with the Ace of Clubs and <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>'s earliest known painting, The Torment of Saint Anthony, are also here."
      },
      {
        question: "What's special about the building?",
        answer: "Louis Kahn's 1972 design is considered one of the <strong>finest museum buildings ever made</strong>. Barrel-vaulted concrete ceilings channel natural light onto the art. Renzo Piano added a second building in 2013. <a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a>'s landscapes glow under that light."
      },
      {
        question: "Is the Kimbell free?",
        answer: "The permanent collection is <strong>always free</strong>. Special exhibitions charge. It's in Fort Worth's Cultural District, near the Modern Art Museum. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> paintings by <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> and La Tour benefit from Kahn's natural lighting."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> are all covered. The collection is small but carefully chosen. <a href=\"/apps/masterpieces/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a>'s Portrait of May Sartoris represents Victorian-era British painting."
      },
      {
        question: "Is the Michelangelo painting here authentic?",
        answer: "Yes. <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>'s Torment of Saint Anthony was painted around 1487, when he was only <strong>12 or 13 years old</strong>. It's his earliest surviving work on panel. The Kimbell acquired it in 2009 after extensive authentication."
      }
    ]
  },
  {
    slug: 'pushkin-museum',
    faqs: [
      {
        question: "What are the Pushkin Museum's most important paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>'s Dancers Backstage and <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>C\u00E9zanne</strong></a>'s interior scenes are <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> highlights. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a>'s Victory of Joshua represents the strong Old Masters collection."
      },
      {
        question: "How did the Pushkin get its Impressionist collection?",
        answer: "Two Moscow collectors, Shchukin and Morozov, bought directly from Parisian galleries before the Revolution. The Soviet government <strong>nationalized their collections</strong>. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>C\u00E9zanne</strong></a>, Matisse, and Picasso came through these seizures."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>, <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> are all strong. <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a>'s satirical paintings anchor the French 18th-century galleries."
      },
      {
        question: "Where is the Pushkin Museum?",
        answer: "On <strong>Volkhonka Street</strong> in central Moscow, near the Kremlin and Christ the Savior Cathedral. The neoclassical building opened in 1912. <a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>'s genre scenes are in the Dutch galleries on the first floor."
      },
      {
        question: "What's the museum's full name?",
        answer: "The <strong>Pushkin State Museum of Fine Arts</strong>. It's named after the poet, not because he's connected to visual art. The collection covers ancient Egyptian casts through modern European painting. <a href=\"/apps/masterpieces/artist/pieter-de-hooch\"><strong>De Hooch</strong></a>'s domestic interiors are among the quieter Dutch highlights."
      }
    ]
  },
  {
    slug: 'dulwich-picture-gallery',
    faqs: [
      {
        question: "Why is the Dulwich Picture Gallery historically significant?",
        answer: "It was <strong>England's first purpose-built public art gallery</strong>, designed by Sir John Soane and opened in 1817. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a>'s Rinaldo and Armida and <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a>'s Samson and Delilah are standout works."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, and <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> painting. The collection focuses on <strong>European Old Masters</strong> from the 1600s and 1700s. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s Venetian views are among the most popular pieces."
      },
      {
        question: "How did the collection come together?",
        answer: "Originally assembled for the <strong>King of Poland</strong>, who died before taking delivery. Dealers Noel Desenfans and Francis Bourgeois inherited the paintings. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a>'s portrait work and <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a>'s tavern scenes were among the acquisitions."
      },
      {
        question: "Is the Dulwich Picture Gallery free?",
        answer: "Not free, but admission is around <strong>\u00A312</strong>. Under-18s enter free. It's in Dulwich Village, south London, a quiet residential area. <a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>'s peasant scenes hang in the intimate <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch</strong></a> rooms."
      },
      {
        question: "How big is the gallery?",
        answer: "Very small. Just <strong>five interconnected rooms</strong> plus a mausoleum for the founders. You can see everything in under an hour. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s Bucintoro at the Molo shines in the main hall. Quality over quantity here."
      }
    ]
  }
];

async function enrichMuseums() {
  console.log(`Enriching ${museumData.length} museums (lean batch 4)...\n`);
  let updated = 0;
  let errors = 0;
  for (const museum of museumData) {
    try {
      const updateData = {
        faqs: museum.faqs,
        updatedAt: new Date()
      };
      if (museum.description) {
        updateData.description = museum.description;
      }
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: updateData
      });
      console.log(`Updated: ${result.name} (${museum.faqs.length} FAQs${museum.description ? ', new desc' : ''})`);
      updated++;
    } catch (error) {
      console.error(`Error: ${museum.slug}:`, error.message);
      errors++;
    }
  }
  console.log(`\nBatch complete! ${updated} updated, ${errors} errors.`);
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
