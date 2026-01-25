const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 3: 20 museums needing FAQs (+ descriptions for Getty Center and British Library)

const museumData = [
  {
    slug: 'borghese-gallery-rome-italy',
    faqs: [
      {
        question: "What are the top paintings at the Borghese Gallery?",
        answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s <a href=\"/apps/masterpieces/art/lady-with-unicorn-raphael\"><strong>Lady with a Unicorn</strong></a> and <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>'s <a href=\"/apps/masterpieces/art/sacred-profane-love-titian\"><strong>Sacred and Profane Love</strong></a> lead the painting collection. Caravaggio's early works, including <a href=\"/apps/masterpieces/art/madonna-palafrenieri-caravaggio\"><strong>Madonna dei Palafrenieri</strong></a>, are also here."
      },
      {
        question: "Do I need reservations for the Borghese Gallery?",
        answer: "Yes, <strong>reservations are mandatory</strong>. Entry is limited to two-hour time slots, and tickets sell out weeks in advance. Book online early. <a href=\"/apps/masterpieces/art/pauline-bonaparte-venus-canova\"><strong>Canova's Pauline Bonaparte</strong></a> is in the first room you'll enter."
      },
      {
        question: "What sculptures should I see?",
        answer: "<strong>Bernini</strong> dominates the ground floor. Apollo and Daphne, David, and <a href=\"/apps/masterpieces/art/truth-unveiled-time-bernini\"><strong>Truth Unveiled by Time</strong></a> are all here. These marble sculptures look almost impossibly lifelike. The gallery is set inside the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Villa Borghese gardens."
      },
      {
        question: "What art movements does the Borghese cover?",
        answer: "Mostly <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s <a href=\"/apps/masterpieces/art/deposition-raphael-borghese\"><strong>Deposition</strong></a> is a High Renaissance highlight. Caravaggio's dramatic lighting defined the Baroque style, and you'll see several of his canvases upstairs."
      },
      {
        question: "How big is the Borghese Gallery?",
        answer: "It's surprisingly compact. Only <strong>20 rooms</strong> across two floors. Ground floor has sculpture, upper floor has paintings. You can see everything in your two-hour slot if you stay focused. <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>'s works hang in the upstairs pinacoteca."
      }
    ]
  },
  {
    slug: 'birmingham-museum-and-art-gallery-birmingham-uk',
    faqs: [
      {
        question: "What is Birmingham Museum best known for?",
        answer: "The <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> collection. It's the <strong>largest collection of Pre-Raphaelite art in the world</strong>. <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a>, <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>, and <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> are all represented with major works."
      },
      {
        question: "Is Birmingham Museum and Art Gallery free?",
        answer: "Yes, <strong>admission is free</strong>. It's in Chamberlain Square in Birmingham's city center. The <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> galleries are on the upper floors. Some temporary exhibitions may charge a small fee."
      },
      {
        question: "Which Pre-Raphaelite artists are featured?",
        answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a>, <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>John Everett Millais</strong></a>, and <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> have the strongest presence. Burne-Jones, who was born in Birmingham, is also well represented. The collection totals <strong>over 3,000 works</strong> from the movement."
      },
      {
        question: "What else is in the collection besides paintings?",
        answer: "The <strong>Staffordshire Hoard</strong> (Anglo-Saxon gold) is displayed here. There's also a natural history section, ancient Egyptian artifacts, and local history galleries. <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a>'s works sit alongside decorative arts from the same Victorian period."
      },
      {
        question: "Why does Birmingham have so much Pre-Raphaelite art?",
        answer: "Victorian Birmingham industrialists were early collectors of <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> painting. They bought directly from <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> and Burne-Jones. Burne-Jones grew up in the city, strengthening the local connection. The museum received many of these works as donations."
      }
    ]
  },
  {
    slug: 'alte-pinakothek',
    faqs: [
      {
        question: "What are the Alte Pinakothek's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a>'s Self-Portrait (1500) is the icon. <a href=\"/apps/masterpieces/artist/franz-marc\"><strong>Franz Marc</strong></a>'s <a href=\"/apps/masterpieces/art/tower-blue-horses\"><strong>Tower of Blue Horses</strong></a> is a key modern work. Rubens, <a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Memling</strong></a>, and <a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a> fill the Old Master galleries."
      },
      {
        question: "What art periods does the Alte Pinakothek cover?",
        answer: "European painting from the <strong>14th to 18th centuries</strong>. <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> (Dürer, Cranach, Altdorfer), Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> (Rubens fills an entire wing), and Italian Renaissance masters are the three pillars."
      },
      {
        question: "How large is the Rubens collection?",
        answer: "One of the <strong>biggest Rubens collections anywhere</strong>. Over 70 works, including large altarpieces and mythological scenes. He gets multiple rooms on the upper floor. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting doesn't get more dramatic than this."
      },
      {
        question: "Where is the Alte Pinakothek?",
        answer: "In Munich's <strong>Kunstareal</strong> (art district), alongside the Neue and Moderne Pinakothek. The building dates to 1836 and was one of the first purpose-built public galleries. <a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a>'s <a href=\"/apps/masterpieces/art/reclining-girl-boucher\"><strong>Reclining Girl</strong></a> hangs in the French galleries."
      },
      {
        question: "What German painters are featured?",
        answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> is the star, with his famous 1500 self-portrait. Cranach, Altdorfer, and Grünewald represent the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>. <a href=\"/apps/masterpieces/artist/franz-marc\"><strong>Franz Marc</strong></a>'s <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> works bridge into the modern era."
      }
    ]
  },
  {
    slug: 'british-library-london-uk',
    description: `<p>The <strong>British Library</strong> is the national library of the United Kingdom and one of the largest libraries in the world, holding over <strong>170 million items</strong>. Located on Euston Road in London (with a second site in Boston Spa, Yorkshire), it receives a copy of every publication produced in the UK and Ireland. The building opened in 1997 after decades of planning. Its red-brick exterior stands next to St Pancras station, and the interior centers on the King's Library Tower, a six-story glass cube holding George III's 65,000-volume collection.</p><p>The <strong>Sir John Ritblat Gallery</strong> displays the library's greatest treasures for free. These include two of the four surviving copies of <strong>Magna Carta</strong> (1215), the <strong>Lindisfarne Gospels</strong> (c. 700 AD), a Gutenberg Bible, original Beatles lyrics handwritten by John Lennon, and Leonardo da Vinci's notebook. The library also holds the <strong>Diamond Sutra</strong> (868 AD), the world's oldest dated printed book. Shakespeare's First Folio, Charlotte Bront\u00EB's handwritten manuscripts, and maps dating back centuries round out the collection. It isn't a traditional art museum, but few places put you this close to documents that shaped Western history.</p>`,
    faqs: [
      {
        question: "What are the British Library's most famous items?",
        answer: "Two copies of <strong>Magna Carta</strong> (1215), the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>-era Gutenberg Bible, and the Lindisfarne Gospels are the star exhibits. Leonardo da Vinci's notebook and Shakespeare's First Folio are also on permanent display in the Sir John Ritblat Gallery."
      },
      {
        question: "Is the British Library free to visit?",
        answer: "Yes. The <strong>permanent galleries are free</strong>, including the Sir John Ritblat Gallery with Magna Carta and other treasures. Anyone can visit the exhibition spaces without a library card. The building is on <strong>Euston Road</strong>, next to St Pancras and the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> nearby."
      },
      {
        question: "What's the difference between the British Library and the British Museum?",
        answer: "The British Library holds <strong>books, manuscripts, and printed works</strong>. The <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> holds antiquities, sculptures, and archaeological objects. They were once part of the same institution but split in 1973. The Library moved to its current Euston Road building in <strong>1997</strong>."
      },
      {
        question: "What manuscripts can I see?",
        answer: "The <strong>Lindisfarne Gospels</strong> (c. 700 AD) are a highlight of early medieval illumination. You'll also find handwritten lyrics by the Beatles, Charlotte Bront\u00EB's manuscripts, and the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Diamond Sutra</strong></a> (868 AD), the oldest dated printed book in existence."
      },
      {
        question: "How big is the British Library's collection?",
        answer: "Over <strong>170 million items</strong>, growing by about 3 million each year. It covers books, newspapers, maps, sound recordings, patents, and stamps. The reading rooms require a free library card. Physical items span centuries, from medieval <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>illuminated manuscripts</strong></a> to modern digital archives."
      }
    ]
  },
  {
    slug: 'palazzo-pitti',
    faqs: [
      {
        question: "What famous paintings are at Palazzo Pitti?",
        answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Madonna of the Chair is the best-known piece. <a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a>'s <a href=\"/apps/masterpieces/art/bronzino-portrait-of-guidubaldo-della-rovere\"><strong>Portrait of Guidubaldo della Rovere</strong></a> and works by <a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> fill the Palatine Gallery. Titian and Caravaggio are also represented."
      },
      {
        question: "How is the Palazzo Pitti organized?",
        answer: "Several museums under one roof. The <strong>Palatine Gallery</strong> has Old Master paintings. The Royal Apartments show how the Medici lived. The Modern Art Gallery, Costume Gallery, and Silver Museum cover different collections. <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting is concentrated in the Palatine."
      },
      {
        question: "What's the connection to the Boboli Gardens?",
        answer: "The <strong>Boboli Gardens</strong> extend behind the palace. They're one of the earliest formal Italian gardens (1550s) and included in the combined ticket. <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> sculptures dot the garden paths."
      },
      {
        question: "Which art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting dominate. <a href=\"/apps/masterpieces/artist/bronzino\"><strong>Bronzino</strong></a> represents the Mannerist style, while <a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Murillo</strong></a>'s religious paintings reflect Spanish Baroque influence. The Medici collected across all three periods."
      },
      {
        question: "Who lived in the Palazzo Pitti?",
        answer: "Originally built for banker Luca Pitti in the 1450s. The <strong>Medici family</strong> bought it in 1549 and made it Florence's main royal residence. Later it housed the House of Lorraine and briefly served as Italy's capital palace. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s paintings were part of the Medici acquisitions."
      }
    ]
  },
  {
    slug: 'getty-center',
    description: `<p>The <strong>Getty Center</strong> opened in 1997 on a hilltop in Los Angeles's Brentwood neighborhood. Designed by Richard Meier, the complex cost over $1 billion and took 14 years to build. Its white travertine buildings sit on 110 acres with views stretching from the Pacific Ocean to the San Gabriel Mountains. A free tram carries visitors up from the parking garage. The grounds include a <strong>central garden</strong> designed by Robert Irwin and outdoor sculpture terraces.</p><p>The collection spans European paintings, drawings, sculpture, and decorative arts from the Middle Ages through the early 20th century. <a href="/apps/masterpieces/artist/van-gogh"><strong>Van Gogh</strong></a>'s <a href="/apps/masterpieces/art/irises"><strong>Irises</strong></a> (1889) is the most recognized painting here. <a href="/apps/masterpieces/artist/masaccio"><strong>Masaccio</strong></a>'s <a href="/apps/masterpieces/art/masaccio-st-andrew"><strong>St. Andrew</strong></a> represents the early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, while <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> canvases by Monet, Renoir, and C\u00E9zanne fill the later galleries. The Getty's photography collection is also one of the world's strongest, with over 150,000 prints. Admission is always free, though parking requires a fee. It's one of the few major art museums in Los Angeles that doesn't charge entry.</p>`,
    faqs: [
      {
        question: "What are the Getty Center's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s <a href=\"/apps/masterpieces/art/irises\"><strong>Irises</strong></a> (1889) is the star piece. <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a>'s <a href=\"/apps/masterpieces/art/masaccio-st-andrew\"><strong>St. Andrew</strong></a> and <a href=\"/apps/masterpieces/artist/vittore-carpaccio\"><strong>Carpaccio</strong></a>'s <a href=\"/apps/masterpieces/art/vittore-carpaccio\"><strong>Hunting on the Lagoon</strong></a> are other highlights. Monet and Renoir round out the collection."
      },
      {
        question: "Is the Getty Center free?",
        answer: "Yes, <strong>admission is always free</strong>. Parking costs around $20 (or $15 after 3pm). A tram takes you from the garage to the hilltop campus. <a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s Irises hangs in the West Pavilion's <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries."
      },
      {
        question: "What art movements are represented?",
        answer: "Medieval through early modern, with strengths in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. The collection covers European art before 1900. For modern and contemporary, you'd visit the separate Getty Villa in Malibu (focused on <strong>ancient Greek and Roman art</strong>)."
      },
      {
        question: "What's the building like?",
        answer: "Richard Meier's <strong>modernist campus</strong> opened in 1997 and cost over $1 billion. White travertine and aluminum panels catch the Southern California light. The hilltop location offers views from the Pacific to the mountains. <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a>'s panel is in the North Pavilion."
      },
      {
        question: "What else is worth seeing besides the paintings?",
        answer: "The <strong>photography collection</strong> (over 150,000 prints) is world-class. Robert Irwin's Central Garden is a living sculpture that changes with the seasons. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> decorative arts rooms have period furniture and gilded paneling. Don't skip the outdoor sculpture terrace."
      }
    ]
  },
  {
    slug: 'budapest-museum-of-fine-arts-budapest-hungary',
    faqs: [
      {
        question: "What are the top paintings at Budapest's Museum of Fine Arts?",
        answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Portrait of Pietro Bembo and <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>'s portrait are <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> highlights. <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Delacroix</strong></a>'s Horse Frightened by a Storm represents the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> collection."
      },
      {
        question: "What art periods does the museum cover?",
        answer: "From <strong>ancient Egyptian art to the 19th century</strong>. Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting is a particular strength. The Spanish gallery (El Greco, Goya, Velázquez) is one of the best outside Spain. <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> French painting also has a strong showing."
      },
      {
        question: "Where is the Museum of Fine Arts in Budapest?",
        answer: "On <strong>Heroes' Square</strong> in the City Park, across from the Palace of Art. The neoclassical building opened in 1906. <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Delacroix</strong></a> and the French collection are on the upper floor. It's easy to reach by metro (line 1, the oldest on the continent)."
      },
      {
        question: "Is the museum free?",
        answer: "Not generally, but some <strong>temporary exhibitions offer free entry</strong>. Regular admission is around 3,800 HUF. The museum reopened in 2018 after a major renovation. <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>'s work is in the renovated Italian galleries on the first floor."
      },
      {
        question: "What makes the Spanish collection special?",
        answer: "The Esterházy family donated a strong group of <strong>Spanish Old Masters</strong> in the 19th century. El Greco, Zurbarán, Murillo, and Goya are all here. It rivals many Spanish museums outside Madrid. <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> works dominate these galleries."
      }
    ]
  },
  {
    slug: 'van-gogh-museum',
    faqs: [
      {
        question: "What are the most famous paintings at the Van Gogh Museum?",
        answer: "<a href=\"/apps/masterpieces/art/almond-blossoms\"><strong>Almond Blossoms</strong></a> (1890), <a href=\"/apps/masterpieces/art/bedroom-in-arles\"><strong>Bedroom in Arles</strong></a> (1888), and <a href=\"/apps/masterpieces/art/cafe-terrace-at-night\"><strong>Café Terrace at Night</strong></a> are crowd favorites. The <a href=\"/apps/masterpieces/art/self-portrait-with-grey-felt-hat\"><strong>Self-Portrait with Grey Felt Hat</strong></a> is one of his most recognized faces."
      },
      {
        question: "How many Van Gogh paintings does the museum have?",
        answer: "Over <strong>200 paintings</strong>, 500 drawings, and more than 700 letters. It's the world's largest <a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a> collection by far. <a href=\"/apps/masterpieces/art/wheatfield-with-crows\"><strong>Wheatfield with Crows</strong></a>, once thought to be his last painting, hangs in the permanent galleries."
      },
      {
        question: "Do I need to book tickets in advance?",
        answer: "Yes, <strong>timed-entry tickets are required</strong> and often sell out days ahead. Morning slots fill fastest. Book online. <a href=\"/apps/masterpieces/art/the-yellow-house\"><strong>The Yellow House</strong></a> and other Arles-period works are on the first floor, organized chronologically by <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>period</strong></a>."
      },
      {
        question: "What art movement is Van Gogh associated with?",
        answer: "<a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. <a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a> moved beyond Impressionist light studies toward bold color and expressive brushwork. The museum traces this evolution from his dark Dutch paintings to the vivid Arles and Saint-Rémy canvases."
      },
      {
        question: "Are other artists shown alongside Van Gogh?",
        answer: "Yes. The museum displays works by <strong>artists Van Gogh admired or influenced</strong>. Gauguin, Toulouse-Lautrec, and Bernard appear throughout. Japanese woodblock prints that inspired <a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s composition choices have their own display section."
      }
    ]
  },
  {
    slug: 'saint-louis-art-museum-st-louis-mo-us',
    faqs: [
      {
        question: "What famous artworks are at the Saint Louis Art Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a>'s peasant scenes and <a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a>'s idealized landscapes are highlights. <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a>'s <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> paintings and German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> works round out a surprisingly strong collection."
      },
      {
        question: "Is the Saint Louis Art Museum free?",
        answer: "Yes, <strong>always free</strong>. It's one of the few major American museums with no admission charge at any time. Located in Forest Park, the 1904 World's Fair site. <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a>'s still lifes are in the European galleries."
      },
      {
        question: "What art periods does the collection cover?",
        answer: "Ancient through contemporary, with strong <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and modern holdings. The Oceanic and pre-Columbian galleries are underrated. <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> and <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> works share space with Dutch and Flemish painting on the upper level."
      },
      {
        question: "What's the building like?",
        answer: "The <strong>Beaux-Arts building</strong> was originally the Fine Arts Palace for the 1904 World's Fair. A 2013 expansion by David Chipperfield added sleek modern galleries. It sits on Art Hill in Forest Park. <a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a>'s landscapes are in the Old Masters section."
      },
      {
        question: "What American art is in the collection?",
        answer: "Strong holdings of <strong>20th-century American painting</strong> and sculpture. The museum also has a notable photography collection and works by the Ashcan School. <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a>'s influence on American landscape painters makes those galleries a natural companion."
      }
    ]
  },
  {
    slug: 'brooklyn-museum',
    faqs: [
      {
        question: "What are the Brooklyn Museum's most famous artworks?",
        answer: "<a href=\"/apps/masterpieces/artist/william-blake\"><strong>William Blake</strong></a>'s <a href=\"/apps/masterpieces/art/great-red-dragon\"><strong>Great Red Dragon</strong></a> series is among the most recognizable works. Eastman Johnson's <a href=\"/apps/masterpieces/art/ride-for-liberty\"><strong>A Ride for Liberty</strong></a> is a powerful Civil War painting. <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> portraits anchor the European galleries."
      },
      {
        question: "What makes the Brooklyn Museum unique?",
        answer: "Its <strong>Egyptian collection</strong> is one of the best in the world, rivaling the Met's. The feminist art galleries and Judy Chicago's Dinner Party installation are groundbreaking. <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painting by <a href=\"/apps/masterpieces/artist/william-blake\"><strong>Blake</strong></a> and others fills the European wing."
      },
      {
        question: "Is the Brooklyn Museum free?",
        answer: "It operates on a <strong>suggested donation</strong> basis, so you can pay what you want. First Saturdays (monthly, 5-11pm) include free programming, live music, and film screenings. <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> and the Dutch paintings are on the fifth floor."
      },
      {
        question: "What art periods are covered?",
        answer: "Everything from ancient Egypt to contemporary installations. <a href=\"/apps/masterpieces/movement/american-realism\"><strong>American Realism</strong></a> is a particular strength. The American art galleries trace from colonial portraits through the Civil War era to <strong>20th-century modernism</strong>. The decorative arts period rooms are also worth visiting."
      },
      {
        question: "How large is the Brooklyn Museum?",
        answer: "About <strong>560,000 square feet</strong> with over 1.5 million objects. It's the second-largest museum in New York City (after the Met). Five floors of galleries. <a href=\"/apps/masterpieces/artist/william-blake\"><strong>Blake</strong></a>'s watercolors and prints are kept in climate-controlled cases due to their fragility."
      }
    ]
  },
  {
    slug: 'ashmolean-museum-oxford-uk',
    faqs: [
      {
        question: "What famous artworks are at the Ashmolean?",
        answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> and other <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> works are highlights. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s Venice views and <a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a>'s satirical paintings also stand out. The collection spans ancient civilizations to the 20th century."
      },
      {
        question: "When was the Ashmolean founded?",
        answer: "In <strong>1683</strong>, making it the world's first university museum. Elias Ashmole donated his collection of curiosities to Oxford. A 2009 renovation transformed the building. <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a> and the Victorian paintings are on the upper floors."
      },
      {
        question: "Is the Ashmolean Museum free?",
        answer: "Yes, <strong>admission is free</strong>. It's on Beaumont Street in central Oxford, a short walk from the colleges. Some special exhibitions charge. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> galleries with <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s cityscapes are among the most popular rooms."
      },
      {
        question: "What else is in the collection besides paintings?",
        answer: "Ancient Egyptian mummies, Anglo-Saxon treasures (the <strong>Alfred Jewel</strong> is here), Minoan pottery, and Chinese ceramics. <a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a>'s prints sit alongside Old Master drawings by Michelangelo and Raphael in the Western Art galleries."
      },
      {
        question: "What makes the Ashmolean special?",
        answer: "Age, breadth, and quality. It covers <strong>art and archaeology across all civilizations</strong> in one building. Few museums outside London rival its range. <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> painting and the ancient world galleries are the strongest sections."
      }
    ]
  },
  {
    slug: 'yale-centre-for-british-art-yale-university-new-ha',
    faqs: [
      {
        question: "What famous paintings are at the Yale Center for British Art?",
        answer: "<a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a>'s paintings, <a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a>'s famous Zebra portrait, and <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a>'s landscapes are standouts. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a>'s portraits and <a href=\"/apps/masterpieces/artist/william-blake\"><strong>Blake</strong></a>'s visionary prints fill the upper galleries."
      },
      {
        question: "Is the Yale Center free?",
        answer: "Yes, <strong>always free</strong>. It's on Chapel Street in New Haven, Connecticut. Louis Kahn designed the building (his last commission, completed after his death in 1977). <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscapes by <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> and Turner are on the fourth floor."
      },
      {
        question: "What makes this collection unique?",
        answer: "It's the <strong>largest collection of British art outside the UK</strong>. Paul Mellon donated over 2,000 paintings, prints, and drawings. The focus is exclusively British, from Elizabethan portraiture through <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> to the 20th century."
      },
      {
        question: "What art periods are represented?",
        answer: "Tudor portraiture, 18th-century conversation pieces, <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscapes, and sporting art. <a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a>'s animal paintings are especially strong. The collection tracks <strong>British visual culture from the 1500s to the present</strong>."
      },
      {
        question: "Who was Paul Mellon?",
        answer: "An American philanthropist and <strong>Yale alumnus</strong> who spent decades collecting British painting. He gave the collection and funded Louis Kahn's building. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a>'s society portraits were among his favorite acquisitions. The center opened in 1977."
      }
    ]
  },
  {
    slug: 'mus233e-fabre-montpellier-france',
    faqs: [
      {
        question: "What are the Musée Fabre's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a>'s studio scenes are the signature works. <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>'s self-portrait and his portrait of Baudelaire are key pieces. <a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Cabanel</strong></a>'s <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic</strong></a> paintings also feature prominently."
      },
      {
        question: "Why is the Bazille collection important?",
        answer: "<a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Frédéric Bazille</strong></a> was born in Montpellier and the museum holds his <strong>largest group of works</strong> anywhere. He painted alongside Monet and Renoir before dying in the Franco-Prussian War at age 28. His early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> canvases are here."
      },
      {
        question: "What art movements does the Musée Fabre cover?",
        answer: "Strong in 17th-century European painting, <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic art</strong></a>, and early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. <a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Cabanel</strong></a> was from the region, so the museum holds several of his large salon paintings. <strong>Pierre Soulages</strong>'s abstract works have their own dedicated wing."
      },
      {
        question: "Is the Musée Fabre free?",
        answer: "Not free, but admission is around <strong>€8</strong>. The first Sunday of each month is free. The museum is on the Esplanade Charles-de-Gaulle in central Montpellier. <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>'s Realist paintings are on the upper floor near the Bazille galleries."
      },
      {
        question: "What's the building's history?",
        answer: "Founded in <strong>1828</strong> by painter François-Xavier Fabre, who donated his art collection to Montpellier. The museum was renovated in 2007 and expanded significantly. <a href=\"/apps/masterpieces/artist/frederic-bazille\"><strong>Bazille</strong></a>'s works finally got proper display space in the renovation. It's now one of France's largest regional museums."
      }
    ]
  },
  {
    slug: 'wadsworth-atheneum',
    faqs: [
      {
        question: "What are the Wadsworth Atheneum's most famous works?",
        answer: "<a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a>'s <a href=\"/apps/masterpieces/art/saint-serapion\"><strong>Saint Serapion</strong></a> (1628) is the best-known painting. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a>'s Kaaterskill Falls and other <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> landscapes are also major draws."
      },
      {
        question: "When was the Wadsworth Atheneum founded?",
        answer: "In <strong>1842</strong>, making it the oldest public art museum in the United States. Daniel Wadsworth funded the original Gothic Revival building in Hartford, Connecticut. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> European paintings were among the earliest acquisitions."
      },
      {
        question: "What art periods does it cover?",
        answer: "Five thousand years of art. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> European painting, <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> landscapes, and Surrealism (the first American museum to show it) are the three pillars. <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a>'s white drapery in Saint Serapion is unforgettable."
      },
      {
        question: "Is the Wadsworth Atheneum free?",
        answer: "Free on <strong>certain Saturdays</strong> and for members. Regular admission is about $15. It's in downtown Hartford, housed across five connected buildings. <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a>'s American landscapes hang near the 19th-century galleries on the second floor."
      },
      {
        question: "What makes this museum historically significant?",
        answer: "Beyond being <strong>America's oldest public art museum</strong>, it hosted the first Surrealist exhibition in the US (1931). It also has a strong decorative arts collection and an early commitment to contemporary work. <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> painters are well represented in the American wing."
      }
    ]
  },
  {
    slug: 'national-gallery-oslo',
    faqs: [
      {
        question: "Where can I see The Scream?",
        answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a>'s <a href=\"/apps/masterpieces/art/the-scream\"><strong>The Scream</strong></a> (1893) is displayed at the National Museum in Oslo, which merged with the old National Gallery in 2022. It's the museum's most visited work and sits in a <strong>dedicated room</strong> on the upper level."
      },
      {
        question: "What other Munch paintings are here?",
        answer: "<a href=\"/apps/masterpieces/art/sick-child\"><strong>The Sick Child</strong></a> (1886) and <a href=\"/apps/masterpieces/art/edvard-munch-melancholy\"><strong>Melancholy</strong></a> are both here. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a> has a large presence across the collection. His <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> works from the 1890s are the core group."
      },
      {
        question: "What art movements are covered?",
        answer: "Norwegian painting from the <strong>Romantic era through Modernism</strong> is the backbone. <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> (led by Munch) and <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> are the strongest movements. International works by Matisse, Picasso, and the French Impressionists fill the European galleries."
      },
      {
        question: "Is the National Gallery free?",
        answer: "The new National Museum charges admission (around <strong>200 NOK</strong>), with free entry for children under 18. It's on the waterfront in the Aker Brygge area. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a>'s paintings are the main attraction, but the design and architecture collections are also worth your time."
      },
      {
        question: "What happened to the original National Gallery building?",
        answer: "The collection moved to the new <strong>National Museum</strong> building in 2022, which combined art, architecture, and design under one roof. It's now the largest art museum in the Nordic countries. <a href=\"/apps/masterpieces/art/the-scream\"><strong>The Scream</strong></a> made the move alongside thousands of other Norwegian and international works."
      }
    ]
  },
  {
    slug: 'nationalmuseum-stockholm-sweden',
    faqs: [
      {
        question: "What are the Nationalmuseum's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Anders Zorn</strong></a>'s <a href=\"/apps/masterpieces/art/midsummer-dance\"><strong>Midsummer Dance</strong></a> is one of Sweden's most loved paintings. <a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a>'s <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> works and Rembrandt's Conspiracy of Claudius Civilis are also highlights."
      },
      {
        question: "What Swedish artists are featured?",
        answer: "<a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Zorn</strong></a>, Carl Larsson, and Bruno Liljefors form the core of the <strong>Swedish national collection</strong>. Larsson's watercolors and Zorn's portraits are the most popular. <a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> and other Impressionists represent the international holdings."
      },
      {
        question: "Is the Nationalmuseum free?",
        answer: "The permanent collection has <strong>free admission</strong>. Special exhibitions may charge. The museum reopened in 2018 after a five-year renovation. <a href=\"/apps/masterpieces/artist/anders-zorn\"><strong>Zorn</strong></a>'s paintings are on the upper floor. It sits on the Blasieholmen peninsula in central Stockholm."
      },
      {
        question: "What art movements are represented?",
        answer: "Dutch Golden Age, <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> (strong <a href=\"/apps/masterpieces/artist/francois-boucher\"><strong>Boucher</strong></a> and Chardin holdings), and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Swedish painting from the 18th through early 20th centuries is the museum's <strong>unique contribution</strong>. The design and applied arts galleries cover furniture and textiles."
      },
      {
        question: "How large is the collection?",
        answer: "About <strong>700,000 objects</strong> spanning painting, sculpture, prints, drawings, and applied arts. The painting collection covers the 1500s through the early 1900s. <a href=\"/apps/masterpieces/artist/berthe-morisot\"><strong>Morisot</strong></a> and the French paintings share space with Nordic art in the renovated galleries."
      }
    ]
  },
  {
    slug: 'gem228ldegalerie-alte-meister-dresden-germany',
    faqs: [
      {
        question: "What is the Gemäldegalerie Alte Meister's most famous painting?",
        answer: "<a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s <a href=\"/apps/masterpieces/art/sistine-madonna\"><strong>Sistine Madonna</strong></a> (1512) is the undisputed star. The two cherubs at the bottom of that painting are among the <strong>most reproduced images in art history</strong>. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s Girl Reading a Letter is another highlight."
      },
      {
        question: "What art movements does the museum cover?",
        answer: "Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, Northern <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painting. <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a>'s <a href=\"/apps/masterpieces/art/jewish-cemetery\"><strong>Jewish Cemetery</strong></a> is a key Dutch landscape. Cranach, Holbein, and Dürer represent the German tradition."
      },
      {
        question: "Where is the Gemäldegalerie Alte Meister?",
        answer: "Inside the <strong>Zwinger Palace</strong> in central Dresden. The Semper Gallery wing houses the paintings. Augustus III of Saxony built the collection in the 18th century. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Sistine Madonna has its own room at the end of the Italian galleries."
      },
      {
        question: "How did the collection survive World War II?",
        answer: "The paintings were <strong>hidden in tunnels and mines</strong> before the 1945 bombing of Dresden. Soviet troops found them and took them to Moscow. They were returned to Dresden in 1955. <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a>'s somber landscapes survived the journey intact."
      },
      {
        question: "What makes the Vermeer here special?",
        answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s Girl Reading a Letter at an Open Window was recently restored, revealing a large <strong>Cupid painting on the wall</strong> that had been overpainted for centuries. This changed how scholars interpret the work. The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> galleries surround it."
      }
    ]
  },
  {
    slug: 'mus233e-national-gustave-moreau-paris-france',
    faqs: [
      {
        question: "What kind of museum is the Gustave Moreau Museum?",
        answer: "It's <a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a>'s actual <strong>home and studio</strong>, preserved as he left it. Three floors of paintings, watercolors, and drawings are displayed in the original spaces. It's one of the few artist studio museums in Paris."
      },
      {
        question: "What art movement is Gustave Moreau associated with?",
        answer: "<a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>. <a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau</strong></a> painted mythological and biblical scenes with <strong>jewel-like color and dense detail</strong>. He influenced the Surrealists and Fauvists. Matisse and Rouault were his students at the École des Beaux-Arts."
      },
      {
        question: "How many works are in the museum?",
        answer: "About <strong>850 paintings and 7,000 drawings</strong>. Moreau designed the upper floors specifically to display his work after his death. The grand staircase connecting the studios is a dramatic feature. <a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau</strong></a>'s <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> subjects include Salome, Orpheus, and Jupiter."
      },
      {
        question: "Where is the museum located?",
        answer: "At <strong>14 rue de la Rochefoucauld</strong> in the 9th arrondissement of Paris, near Pigalle. It's a quiet, overlooked spot compared to the Louvre or Orsay. <a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau</strong></a>'s private living quarters on the first floor still contain his furniture and personal belongings."
      },
      {
        question: "Is it worth visiting if I don't know Moreau's work?",
        answer: "Definitely. The building itself is a highlight. The <strong>two-story studio with spiral staircase</strong> is visually striking. <a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Moreau</strong></a>'s richly colored <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> canvases reward close looking even without background knowledge. Entry is around \u20AC7."
      }
    ]
  },
  {
    slug: 'pinacoteca-di-brera',
    faqs: [
      {
        question: "What are the most famous paintings at the Pinacoteca di Brera?",
        answer: "<a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Mantegna</strong></a>'s <a href=\"/apps/masterpieces/art/lamentation-of-christ-mantegna\"><strong>Lamentation of Christ</strong></a> is the defining work. The foreshortened body of Christ is one of the most studied compositions in art. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Marriage of the Virgin is equally important."
      },
      {
        question: "What art movements does the Brera represent?",
        answer: "Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting dominates. <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Giovanni Bellini</strong></a>'s Pietà and Venetian altarpieces fill several rooms. <strong>Lombard and Venetian schools</strong> are the two main threads, with Caravaggio and 17th-century Baroque completing the timeline."
      },
      {
        question: "Where is the Pinacoteca di Brera?",
        answer: "In Milan's <strong>Brera district</strong>, inside the Palazzo Brera (also home to the art academy and botanical garden). The building is a 17th-century Jesuit college. <a href=\"/apps/masterpieces/artist/andrea-mantegna\"><strong>Mantegna</strong></a>'s Lamentation hangs in Room VI. It's about a 15-minute walk from the Duomo."
      },
      {
        question: "How did the Brera collection form?",
        answer: "Napoleon assembled it. When he <strong>suppressed monasteries and churches</strong> across northern Italy, the confiscated altarpieces came here. That's why the collection is so rich in religious painting. <a href=\"/apps/masterpieces/artist/giovanni-bellini\"><strong>Bellini</strong></a>'s devotional works were among the earliest transfers."
      },
      {
        question: "Is the Pinacoteca free?",
        answer: "Free on the <strong>first Sunday of each month</strong>. Otherwise about \u20AC15. Thursday evenings offer extended hours. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Marriage of the Virgin is in Room XXIV. The <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> galleries are the museum's greatest strength."
      }
    ]
  },
  {
    slug: 'wallace-collection',
    faqs: [
      {
        question: "What are the Wallace Collection's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a>'s <a href=\"/apps/masterpieces/art/the-swing\"><strong>The Swing</strong></a> (1767) is the icon. <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a>'s <a href=\"/apps/masterpieces/art/the-laughing-cavalier\"><strong>The Laughing Cavalier</strong></a> (1624) is equally famous. Both are among the most reproduced paintings in European art."
      },
      {
        question: "Is the Wallace Collection free?",
        answer: "Yes, <strong>always free</strong>. It's in Hertford House on Manchester Square in central London. The mansion setting makes it feel like visiting a private home. <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a>'s <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> paintings hang in the Great Gallery upstairs."
      },
      {
        question: "What art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painting are the two pillars. Boucher, Watteau, and <a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> represent French elegance. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a> and <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Hals</strong></a> anchor the <strong>Dutch collection</strong>."
      },
      {
        question: "What else is in the collection besides paintings?",
        answer: "One of the <strong>finest arms and armor collections</strong> in Europe. Sèvres porcelain, French furniture, and Renaissance bronzes fill the ground floor rooms. <a href=\"/apps/masterpieces/artist/gabriel-metsu\"><strong>Metsu</strong></a>'s genre scenes share space with ornate clocks and gilded objects."
      },
      {
        question: "Who created the Wallace Collection?",
        answer: "The <strong>Marquesses of Hertford</strong> and Sir Richard Wallace assembled it over four generations. The 4th Marquess bought most of the French paintings in Paris. <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Hals</strong></a>'s <a href=\"/apps/masterpieces/art/the-laughing-cavalier\"><strong>Laughing Cavalier</strong></a> was a famous purchase. Lady Wallace bequeathed everything to the nation in 1897."
      }
    ]
  }
];

async function enrichMuseums() {
  console.log(`Enriching ${museumData.length} museums (lean batch 3)...\n`);
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
