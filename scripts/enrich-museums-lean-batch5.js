const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 5: 20 museums - 12 FAQs only, 8 need descriptions + FAQs

const museumData = [
  // 1. Petit Palais, Paris (FAQs ONLY)
  {
    slug: 'petit-palais-paris-france',
    faqs: [
      {
        question: "What famous artworks are in the Petit Palais?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Paul Cezanne</strong></a>'s Four Seasons series and <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a>'s Self-Portrait with a Black Dog are highlights. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>Jacques-Louis David</strong></a>'s paintings fill the <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> rooms."
      },
      {
        question: "Is the Petit Palais free to enter?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Only temporary exhibitions charge admission. It's one of the best free museums in Paris. You'll find <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a>'s <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> works without spending a euro."
      },
      {
        question: "Where is the Petit Palais located?",
        answer: "On <strong>Avenue Winston Churchill</strong>, right across from the Grand Palais near the Champs-Elysees. The Champs-Elysees Clemenceau metro stop is closest. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a>'s The Grief of Andromache hangs in the main galleries."
      },
      {
        question: "What's the building like?",
        answer: "Built for the <strong>1900 World's Fair</strong>, the Petit Palais is a Beaux-Arts gem with a semicircular courtyard garden. The mosaic floors and painted ceilings rival the art itself. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cezanne</strong></a>'s works sit in bright, airy rooms."
      },
      {
        question: "What art periods does the Petit Palais cover?",
        answer: "It spans from <strong>ancient Greek pottery to early 20th-century painting</strong>. <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, and Dutch Golden Age works are all well represented. The French painting collection is particularly strong."
      }
    ]
  },

  // 2. Clark Art Institute (FAQs ONLY)
  {
    slug: 'clark-art-institute',
    faqs: [
      {
        question: "What's the most famous painting at the Clark Art Institute?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Jean-Leon Gerome</strong></a>'s The Slave Market (1866) draws the most attention. <a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a>'s Nymphs and Satyr (1873) is another crowd favorite. Both are <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic</strong></a> paintings at their finest."
      },
      {
        question: "Where exactly is the Clark Art Institute?",
        answer: "In <strong>Williamstown, Massachusetts</strong>, tucked into the Berkshire Hills in the state's northwest corner. It's about a three-hour drive from Boston. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>'s Self Portrait in a Soft Hat is on the second floor."
      },
      {
        question: "Who are the featured artists at the Clark?",
        answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Pierre Bonnard</strong></a>, <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a>, and <a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a> are heavily represented. The <strong>Impressionist collection</strong> alone is worth the trip. Renoir has an entire room."
      },
      {
        question: "Is the Clark Art Institute worth visiting?",
        answer: "Absolutely. The <strong>140-acre campus</strong> designed by Tadao Ando is as impressive as the art. Trails wind through meadows between gallery buildings. <a href=\"/apps/masterpieces/artist/jean-leon-gerome\"><strong>Gerome</strong></a>'s <a href=\"/apps/masterpieces/movement/orientalism\"><strong>Orientalist</strong></a> works alone justify the visit."
      },
      {
        question: "What art movements are represented at the Clark?",
        answer: "Strong holdings in <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a>, and <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>. The <strong>French painting galleries</strong> are the core strength. <a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a>'s intimate domestic scenes round out the modern end."
      }
    ]
  },

  // 3. Belvedere Museum (FAQs ONLY)
  {
    slug: 'belvedere',
    faqs: [
      {
        question: "What is the Belvedere Museum's most famous painting?",
        answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a>'s The Kiss (1908) is the star of the collection. It's Austria's most recognized artwork and the centerpiece of the museum's <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> and Art Nouveau galleries."
      },
      {
        question: "What other Klimt works does the Belvedere have?",
        answer: "Death and Life (1915) is another major <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a> painting on display. The museum holds the <strong>world's largest Klimt collection</strong>, including Judith and several landscape paintings. They're all in the Upper Belvedere."
      },
      {
        question: "What's the building itself like?",
        answer: "The Upper Belvedere is a <strong>Baroque palace</strong> built in the early 1700s for Prince Eugene of Savoy. Formal gardens connect it to the Lower Belvedere. <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>'s Fog hangs in the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> galleries."
      },
      {
        question: "Where is the Belvedere in Vienna?",
        answer: "In the <strong>third district</strong>, south of the city center. The Hauptbahnhof train station is a short walk away. <a href=\"/apps/masterpieces/artist/ferdinand-georg-waldmuller\"><strong>Ferdinand Georg Waldmuller</strong></a>'s Children at a Window (1853) hangs in the Biedermeier rooms upstairs."
      },
      {
        question: "How does the Belvedere compare to other Vienna museums?",
        answer: "The <a href=\"/apps/masterpieces/museum/albertina-vienna-austria\"><strong>Albertina</strong></a> focuses on works on paper, while the Belvedere leans heavily into <strong>Austrian painting</strong> from Baroque through Art Nouveau. <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a>'s collection here is unmatched anywhere."
      }
    ]
  },

  // 4. Scottish National Gallery (FAQs ONLY)
  {
    slug: 'scottish-national-gallery',
    faqs: [
      {
        question: "What are the top paintings at the Scottish National Gallery?",
        answer: "<a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Henry Raeburn</strong></a>'s The Skating Minister is the gallery's icon. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s Christ in the House of Martha and Mary (1655) is the only Vermeer in Scotland."
      },
      {
        question: "Is the Scottish National Gallery free?",
        answer: "Yes, <strong>entry to the permanent collection is free</strong>. Some temporary exhibitions charge a fee. <a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a>'s The Marne at Chennevieres and other <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> paintings are in the upper galleries."
      },
      {
        question: "Where is the Scottish National Gallery located?",
        answer: "On <strong>The Mound</strong> in central Edinburgh, between the Old and New Towns. It's walkable from Waverley Station in about five minutes. <a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a>'s work sits in the Italian rooms downstairs."
      },
      {
        question: "Which artists are featured at the Scottish National Gallery?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a>, <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>, <a href=\"/apps/masterpieces/artist/camille-pissarro\"><strong>Pissarro</strong></a>, and Scottish painters like <a href=\"/apps/masterpieces/artist/henry-raeburn\"><strong>Raeburn</strong></a>. The <strong>Scottish collection</strong> is naturally the deepest, but European Old Masters are well covered too."
      },
      {
        question: "What art movements does the gallery cover?",
        answer: "From <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> altarpieces through <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. The <strong>Dutch and Flemish rooms</strong> are strong, and the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> section includes <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a>'s The Bird Nester."
      }
    ]
  },

  // 5. Hamburger Kunsthalle (FAQs ONLY)
  {
    slug: 'hamburger-kunsthalle',
    faqs: [
      {
        question: "What is the Hamburger Kunsthalle's most famous painting?",
        answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a>'s Wanderer above the Sea of Fog (1818) is Germany's most iconic <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painting. It's the single most visited work in the museum."
      },
      {
        question: "What other artworks are at the Hamburger Kunsthalle?",
        answer: "<a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Robert Delaunay</strong></a>'s Simultaneous Windows (1912) and <a href=\"/apps/masterpieces/artist/wilhelm-leibl\"><strong>Wilhelm Leibl</strong></a>'s Three Women in Church (1882) are key pieces. <a href=\"/apps/masterpieces/artist/albert-marquet\"><strong>Albert Marquet</strong></a>'s The Port of Hamburg (1909) captures the city itself."
      },
      {
        question: "How is the Hamburger Kunsthalle organized?",
        answer: "Three connected buildings house the collection. The <strong>oldest wing</strong> covers Old Masters through <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>. A 19th-century gallery handles Realism and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. The Galerie der Gegenwart shows contemporary art."
      },
      {
        question: "Where is the Hamburger Kunsthalle?",
        answer: "Right by <strong>Hamburg Hauptbahnhof</strong>, the city's main train station. You can walk there in two minutes from the platforms. <a href=\"/apps/masterpieces/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a>'s detailed historical paintings are in the 19th-century wing."
      },
      {
        question: "Who founded the Hamburger Kunsthalle?",
        answer: "Hamburg's <strong>civic art association</strong> established the museum in 1850, making it one of Germany's oldest public galleries. <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a>'s Ship in the Arctic Ocean and other <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> works were early acquisitions."
      }
    ]
  },

  // 6. National Portrait Gallery, London (FAQs ONLY)
  {
    slug: 'national-portrait-gallery-london-uk',
    faqs: [
      {
        question: "What kind of art does the National Portrait Gallery show?",
        answer: "Portraits of <strong>notable British figures</strong> from the Tudor era to today. <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a>'s portraits and <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Joshua Reynolds</strong></a>'s Self-portrait shading the Eyes are among the painted highlights."
      },
      {
        question: "Is the National Portrait Gallery free?",
        answer: "Yes, <strong>admission is free</strong>. The gallery reopened in 2023 after a major renovation. <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Thomas Gainsborough</strong></a>'s Portrait of Sarah Kirby hangs alongside other Georgian-era works on the upper floor."
      },
      {
        question: "Where is the National Portrait Gallery in London?",
        answer: "On <strong>St Martin's Place</strong>, right behind the National Gallery at Trafalgar Square. Charing Cross and Leicester Square tube stations are both close. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>'s Portrait of Wilkie Collins is in the Victorian galleries."
      },
      {
        question: "Which artists have works in the National Portrait Gallery?",
        answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a>, <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a>, <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds</strong></a>, and <a href=\"/apps/masterpieces/artist/thomas-gainsborough\"><strong>Gainsborough</strong></a> all have multiple works here. The <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> section is particularly strong."
      },
      {
        question: "How does it compare to the National Gallery next door?",
        answer: "The National Gallery focuses on <strong>art across all subjects</strong>, while the Portrait Gallery is strictly about people. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> and <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> appear in both, but the portrait context here adds biographical depth."
      }
    ]
  },

  // 7. Museum of Fine Arts of Seville (FAQs ONLY)
  {
    slug: 'museum-of-fine-arts-of-seville-seville-spain',
    faqs: [
      {
        question: "What are the top paintings at the Museum of Fine Arts of Seville?",
        answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velazquez</strong></a>'s Don Cristobal Suarez de Ribera and <a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Murillo</strong></a>'s The Immaculate Conception are highlights. <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbaran</strong></a>'s St. Pierre Pascal and <a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdes Leal</strong></a>'s works round out the collection."
      },
      {
        question: "What's the history of this museum?",
        answer: "It's housed in a <strong>former convent</strong>, the Convento de la Merced, dating to the 17th century. The building became a museum in the 1830s. <a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Murillo</strong></a> was born in Seville, so the city kept many of his <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> canvases."
      },
      {
        question: "What art style dominates the Seville museum?",
        answer: "Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting dominates. Seville was Spain's richest city in the 1600s, and its churches commissioned heavily. <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbaran</strong></a>'s <strong>austere religious paintings</strong> and Murillo's softer devotional works show two sides of that era."
      },
      {
        question: "Where is the Museum of Fine Arts in Seville?",
        answer: "On <strong>Plaza del Museo</strong> in central Seville, north of the Guadalquivir river. It's a fifteen-minute walk from the cathedral. <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velazquez</strong></a>'s early Sevillian works are on the ground floor."
      },
      {
        question: "Is the Seville museum free for EU citizens?",
        answer: "Yes, <strong>EU citizens get free entry</strong>. Non-EU visitors pay a small fee (around 1.50 euros). <a href=\"/apps/masterpieces/artist/juan-de-valdes-leal\"><strong>Valdes Leal</strong></a>'s dramatic canvases and <a href=\"/apps/masterpieces/artist/bartolome-murillo\"><strong>Murillo</strong></a>'s religious scenes make it a bargain either way."
      }
    ]
  },

  // 8. ENSBA Paris (FAQs ONLY)
  {
    slug: '201cole-nationale-sup233rieure-des-beauxarts-ensba',
    faqs: [
      {
        question: "What can I see at ENSBA Paris?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>'s Ambassadors (a Prix de Rome winner) and <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Paul Delaroche</strong></a>'s famous Hemicycle mural. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>Jacques-Louis David</strong></a>'s works are in the <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> section."
      },
      {
        question: "What is ENSBA exactly?",
        answer: "The <strong>Ecole nationale superieure des Beaux-Arts</strong>, France's most prestigious fine arts school. It's been training artists since 1648. <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> studied and later taught there, following the <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic</strong></a> tradition."
      },
      {
        question: "Can the public visit ENSBA?",
        answer: "Yes, but <strong>access is limited</strong> to temporary exhibitions and certain public events. The permanent collection isn't always on view. <a href=\"/apps/masterpieces/artist/paul-delaroche\"><strong>Delaroche</strong></a>'s Hemicycle in the main amphitheater is the highlight when accessible."
      },
      {
        question: "Where is ENSBA located in Paris?",
        answer: "On <strong>Rue Bonaparte</strong> in the 6th arrondissement, steps from the Seine on the Left Bank. The Saint-Germain-des-Pres metro is closest. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a>'s <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> works influenced generations of students here."
      },
      {
        question: "What art movements shaped ENSBA?",
        answer: "<a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> and <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> were the school's backbone for centuries. <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> and <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> both championed the classical tradition. The Prix de Rome sent top students to Italy."
      }
    ]
  },

  // 9. LACMA (NEEDS DESC)
  {
    slug: 'lacma',
    description: `<p>The <strong>Los Angeles County Museum of Art</strong> (LACMA) is the largest art museum in the western United States, holding over 150,000 objects spanning 6,000 years of history. Located on Wilshire Boulevard along Museum Row, its collection ranges from ancient Egyptian and Asian art to contemporary installations. European painting highlights include <a href="/apps/masterpieces/artist/salvator-rosa"><strong>Salvator Rosa</strong></a>'s landscapes, <a href="/apps/masterpieces/artist/gerard-van-honthorst"><strong>Gerard van Honthorst</strong></a>'s The Mocking of Christ (1640), and works by <a href="/apps/masterpieces/artist/simon-vouet"><strong>Simon Vouet</strong></a>.</p><p>The museum's <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> galleries feature <a href="/apps/masterpieces/artist/alonso-cano"><strong>Alonso Cano</strong></a>'s Descent into Limbo alongside Spanish and Italian canvases. Modern holdings include <a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a>'s White House on a Hill and American works by <a href="/apps/masterpieces/artist/emanuel-leutze"><strong>Emanuel Leutze</strong></a>. LACMA is also known for Chris Burden's Urban Light installation, the 202 restored street lamps that have become an LA landmark. General admission is free for residents of Los Angeles County.</p>`,
    faqs: [
      {
        question: "What European paintings does LACMA have?",
        answer: "<a href=\"/apps/masterpieces/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a>'s Landscape with Armed Men and <a href=\"/apps/masterpieces/artist/gerard-van-honthorst\"><strong>Gerard van Honthorst</strong></a>'s The Mocking of Christ (1640) are standouts. <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> and Spanish Golden Age painting are well represented."
      },
      {
        question: "Where is LACMA located?",
        answer: "On <strong>Wilshire Boulevard</strong> in the Miracle Mile district of Los Angeles. It's near the La Brea Tar Pits. <a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a>'s <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> landscapes are in the modern European galleries."
      },
      {
        question: "Is LACMA free to visit?",
        answer: "LA County residents get <strong>free general admission</strong>. Others pay around $25. Children 17 and under are always free. <a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a>'s Descent into Limbo is in the Spanish painting galleries."
      },
      {
        question: "What makes LACMA unique among US museums?",
        answer: "It's the <strong>largest art museum on the West Coast</strong> with 150,000+ objects. The collection covers everything from ancient Korea to contemporary LA. <a href=\"/apps/masterpieces/artist/emanuel-leutze\"><strong>Emanuel Leutze</strong></a>'s American history paintings sit beside European Old Masters."
      },
      {
        question: "What art movements are at LACMA?",
        answer: "<a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> all have dedicated galleries. <a href=\"/apps/masterpieces/artist/simon-vouet\"><strong>Simon Vouet</strong></a>'s French <strong>Baroque canvases</strong> and Asian art collections are particular strengths."
      }
    ]
  },

  // 10. Museu de Belles Arts de Valencia (NEEDS DESC)
  {
    slug: 'museu-de-belles-arts-de-val232ncia-valencia-spain',
    description: `<p>The <strong>Museu de Belles Arts de Valencia</strong> is one of Spain's most important fine arts museums, housed in a former seminary near the Turia Gardens. Its collection spans from the 14th century through the modern period, with a deep focus on Valencian painters. <a href="/apps/masterpieces/artist/joaquin-sorolla"><strong>Joaquin Sorolla</strong></a>, Valencia's most celebrated artist, dominates the later galleries with luminous coastal scenes and portraits painted in his signature <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> style.</p><p>Sorolla's holdings here include The Port of Valencia, Resting Bacchante, and a series of <strong>family portraits</strong> and still lifes that reveal his range beyond the beach paintings he's best known for. The museum also holds Gothic altarpieces, early Valencian panel paintings, and a small collection of works by Velazquez and El Greco. Admission is free, making it one of the best value stops in the city.</p>`,
    faqs: [
      {
        question: "Who is the featured artist at this museum?",
        answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Joaquin Sorolla</strong></a> dominates the collection. His Port of Valencia, Resting Bacchante, and family portraits are all here. Sorolla was Valencia's greatest <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painter."
      },
      {
        question: "What can I see at the Museu de Belles Arts de Valencia?",
        answer: "Mostly Valencian art from the <strong>Gothic period through the 20th century</strong>. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a>'s sun-drenched paintings, medieval altarpieces, and a few works by Velazquez. It's strong on local artistic heritage."
      },
      {
        question: "Is the Valencia fine arts museum free?",
        answer: "Yes, <strong>admission is completely free</strong>. It's in a former seminary building near the Turia Gardens. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a>'s Carnations and other still lifes show a quieter side of his <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work."
      },
      {
        question: "Where is the museum in Valencia?",
        answer: "On <strong>Calle San Pio V</strong>, right next to the Turia Gardens and near the Serranos Towers. It's walkable from the old town in about ten minutes. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a>'s light-filled canvases match the city's Mediterranean sun."
      },
      {
        question: "What style of art is Sorolla known for?",
        answer: "Sorolla painted in a <strong>luminous, light-driven style</strong> close to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. His brushwork captures Mediterranean sunlight on skin, water, and fabric. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a>'s The Blessing of Isaac shows his approach to indoor scenes."
      }
    ]
  },

  // 11. Musee Toulouse-Lautrec (FAQs ONLY)
  {
    slug: 'musee-toulouse-lautrec',
    faqs: [
      {
        question: "What's the history of the Musee Toulouse-Lautrec?",
        answer: "The museum opened in 1922 in the <strong>Palais de la Berbie</strong>, a 13th-century bishop's palace in Albi. <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>'s family donated his work to his hometown. It holds the world's largest collection of his art."
      },
      {
        question: "What are the key artworks at the Toulouse-Lautrec Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>'s Moulin Rouge: La Goulue (1891) and Jane Avril (1893) are the stars. The <strong>poster collection</strong> is world-class. His Artilleryman Saddling His Horse shows his early realistic style."
      },
      {
        question: "What art movement was Toulouse-Lautrec part of?",
        answer: "He bridged <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> and early modern poster design. His flat colors and bold outlines influenced Art Nouveau. <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>'s <strong>Montmartre nightlife scenes</strong> captured a world no one else painted."
      },
      {
        question: "Where is Albi, and is the museum worth the trip?",
        answer: "Albi is a <strong>UNESCO World Heritage city</strong> in southern France, about 80 km northeast of Toulouse. The brick cathedral and medieval streets make the trip worthwhile even beyond <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>'s collection."
      },
      {
        question: "Does the museum show Toulouse-Lautrec's early work?",
        answer: "Yes, <strong>childhood drawings and family portraits</strong> fill the early rooms. You can trace his development from academic studies to the bold Parisian posters. <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>'s <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> style emerged gradually."
      }
    ]
  },

  // 12. Munch Museum (FAQs ONLY)
  {
    slug: 'munch-museum',
    faqs: [
      {
        question: "Where is the Munch Museum in Oslo?",
        answer: "In the <strong>Bjarvika waterfront district</strong>, inside a striking 13-story tower that opened in 2021. It overlooks the Oslo Fjord. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a>'s Madonna (1894) is displayed in the upper galleries with fjord views."
      },
      {
        question: "What famous paintings does the Munch Museum have?",
        answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a>'s Madonna (1894) and Anxiety (1894) are key <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> works. Landscape paintings like <strong>Maridalen by Oslo</strong> and Old Aker Church show his quieter side."
      },
      {
        question: "What art movement is Munch associated with?",
        answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch</strong></a> is considered a father of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. His raw emotional intensity and distorted forms influenced German Expressionists. He also drew on <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> themes throughout his career."
      },
      {
        question: "How big is the Munch Museum's collection?",
        answer: "Over <strong>26,000 works</strong>, the largest collection by a single artist anywhere. Munch left everything to the city of Oslo when he died in 1944. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a>'s prints, drawings, and paintings rotate through the galleries."
      },
      {
        question: "Is the Munch Museum worth visiting?",
        answer: "Definitely. The <strong>new building alone</strong> is worth seeing, and the collection goes far beyond The Scream. <a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Munch</strong></a>'s landscapes and portraits reveal an artist most people don't know from <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> reproductions."
      }
    ]
  },

  // 13. Royal Collection (NEEDS DESC)
  {
    slug: 'royal-collection-uk',
    description: `<p>The <strong>Royal Collection</strong> is one of the largest and most important art collections in the world, held in trust by the British monarch. Spread across royal residences including Buckingham Palace, Windsor Castle, and the Queen's Gallery, it contains over one million objects. Paintings by <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a>, <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, and <a href="/apps/masterpieces/artist/canaletto"><strong>Canaletto</strong></a> are among the European highlights.</p><p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a>'s Self-Portrait as the Allegory of Painting (1639) is one of the collection's most celebrated works. Vermeer's The Music Lesson (1675) rarely leaves the palace walls. <a href="/apps/masterpieces/artist/aelbert-cuyp"><strong>Aelbert Cuyp</strong></a>'s golden landscapes, <a href="/apps/masterpieces/artist/william-hogarth"><strong>William Hogarth</strong></a>'s satirical scenes, and a strong group of <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> paintings make this a collection that rivals any national gallery. Public access is through the Queen's Gallery exhibitions and seasonal palace openings.</p>`,
    faqs: [
      {
        question: "What are the top paintings in the Royal Collection?",
        answer: "<a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Artemisia Gentileschi</strong></a>'s Self-Portrait as the Allegory of Painting (1639) and <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s The Music Lesson (1675) are the biggest draws. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> and <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a> are also well represented."
      },
      {
        question: "Can the public visit the Royal Collection?",
        answer: "Yes, but <strong>access is limited</strong>. The Queen's Gallery at Buckingham Palace hosts rotating exhibitions year-round. Windsor Castle's State Apartments display paintings too. <a href=\"/apps/masterpieces/artist/william-hogarth\"><strong>Hogarth</strong></a>'s works appear in periodic shows."
      },
      {
        question: "What makes the Royal Collection unique?",
        answer: "It's a <strong>private collection held in public trust</strong>, not a traditional museum. Artworks hang in working royal residences. <a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a>'s <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> landscapes share walls with state portraits and furniture."
      },
      {
        question: "Which art movements are represented?",
        answer: "<a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, and <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> paintings form the core. British portraiture spans centuries. <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a>'s self-portrait is a highlight of the <strong>Italian Baroque</strong> holdings."
      },
      {
        question: "How big is the Royal Collection?",
        answer: "Over <strong>one million objects</strong>, including 7,000 paintings, 30,000 watercolors, and 500,000 prints. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s Venice views and <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>'s portraits are just a fraction of what's held across royal residences."
      }
    ]
  },

  // 14. Basilica della Santissima Annunziata, Florence (NEEDS DESC)
  {
    slug: 'basilica-della-santissima-annunziata-florence-ital',
    description: `<p>The <strong>Basilica della Santissima Annunziata</strong> is a working church in Florence's Piazza della Santissima Annunziata, known for its fresco cycle by <a href="/apps/masterpieces/artist/andrea-del-sarto"><strong>Andrea del Sarto</strong></a>. Built in 1250 and expanded during the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, the entrance cloister (Chiostro dei Voti) contains del Sarto's San Filippo Benizzi series, a group of frescoes depicting the life of the Servite order's founder.</p><p>The frescoes include <strong>The Punishment of the Sinners</strong>, The Miracle of the Relics, The Investiture of the Leper, and The Journey of the Magi. Del Sarto painted them between 1509 and 1514, working alongside Pontormo and Rosso Fiorentino. The basilica itself is richly decorated with Baroque additions over its <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> bones. Entry is free, though visitors should dress modestly as it remains an active place of worship. Shoulders and knees should be covered.</p>`,
    faqs: [
      {
        question: "What art can I see at the Basilica della Santissima Annunziata?",
        answer: "<a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a>'s <strong>San Filippo Benizzi fresco cycle</strong> fills the entrance cloister. The Punishment of the Sinners and The Journey of the Magi are the most admired scenes from this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> series."
      },
      {
        question: "Is there an entry fee for the basilica?",
        answer: "<strong>Entry is free</strong>. It's an active church, not a ticketed museum. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Andrea del Sarto</strong></a>'s frescoes in the Chiostro dei Voti are visible right as you walk into the entrance cloister."
      },
      {
        question: "Is there a dress code?",
        answer: "Yes. As an <strong>active place of worship</strong>, shoulders and knees must be covered. Quiet behavior is expected during services. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Del Sarto</strong></a>'s <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> frescoes are in the cloister, so you'll pass through the sacred space."
      },
      {
        question: "Where is this church in Florence?",
        answer: "On <strong>Piazza della Santissima Annunziata</strong>, one of Florence's most elegant squares. It's a short walk from the Accademia Gallery and San Marco. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Del Sarto</strong></a> painted alongside Pontormo and Rosso Fiorentino in this very cloister."
      },
      {
        question: "What makes Andrea del Sarto's frescoes special?",
        answer: "Del Sarto's <strong>naturalistic figures and soft color palette</strong> bridged High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>. <a href=\"/apps/masterpieces/artist/andrea-del-sarto\"><strong>Del Sarto</strong></a> was called \"the faultless painter\" by Giorgio Vasari. The Benizzi cycle was painted between 1509 and 1514."
      }
    ]
  },

  // 15. Dolores Olmedo Collection (NEEDS DESC)
  {
    slug: 'dolores-olmedo-collection-mexico-city-mexico',
    description: `<p>The <strong>Dolores Olmedo Museum</strong> sits in a 17th-century hacienda in Xochimilco, on the southern edge of Mexico City. It holds the largest private collection of works by <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a>, assembled by her close friend and patron Dolores Olmedo Patino. The museum opened in 1994 and also houses a major Diego Rivera collection alongside pre-Hispanic art and folk objects.</p><p>Kahlo's paintings here include deeply personal works: <strong>Frida and the Miscarriage</strong>, The Bus, and Henry Ford Hospital (The Flying Bed). Her portraits of Virginia and Alicia Galant show a quieter, more composed side. Portrait of Luther Burbank blends <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> imagery with botanical themes. The hacienda's gardens are home to peacocks and Xoloitzcuintli dogs, the hairless breed Kahlo herself kept. Access requires a trip to Xochimilco, but the setting feels worlds away from central Mexico City.</p>`,
    faqs: [
      {
        question: "What Frida Kahlo paintings are at the Dolores Olmedo?",
        answer: "<a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a>'s Frida and the Miscarriage, The Bus, and Henry Ford Hospital are here. Her <strong>Portrait of Luther Burbank</strong> blends <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> and botanical imagery. It's the largest private Kahlo collection."
      },
      {
        question: "Who was Dolores Olmedo?",
        answer: "<strong>Dolores Olmedo Patino</strong> was a Mexican businesswoman and art collector. She was a lifelong friend and patron of both <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a> and Diego Rivera. She opened her hacienda as a museum in 1994."
      },
      {
        question: "Where is the Dolores Olmedo Museum?",
        answer: "In <strong>Xochimilco</strong>, on Mexico City's southern edge. It's inside a 17th-century hacienda with gardens, peacocks, and Xoloitzcuintli dogs. <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Kahlo</strong></a>'s paintings hang in the hacienda's main galleries."
      },
      {
        question: "Is the Dolores Olmedo Museum hard to reach?",
        answer: "It's a <strong>45-minute trip from central Mexico City</strong> by metro and light rail. The Xochimilco setting feels rural compared to the city center. <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Kahlo</strong></a>'s most personal <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> works make the journey worthwhile."
      },
      {
        question: "What else is in the collection besides Kahlo?",
        answer: "A large <strong>Diego Rivera collection</strong>, pre-Hispanic ceramics, and Mexican folk art fill the other rooms. <a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Kahlo</strong></a>'s portraits sit alongside Rivera's landscapes. The hacienda's architecture is worth seeing on its own."
      }
    ]
  },

  // 16. Norton Simon Museum (NEEDS DESC)
  {
    slug: 'norton-simon-museum-pasadena-ca-us',
    description: `<p>The <strong>Norton Simon Museum</strong> in Pasadena, California, houses one of the finest private art collections in the United States. Built by industrialist Norton Simon over three decades, the museum holds European paintings from the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> through the 20th century, plus a strong Southeast Asian sculpture collection. <a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honore Fragonard</strong></a>'s The Happy Lovers and <a href="/apps/masterpieces/artist/francisco-de-zurbaran"><strong>Francisco de Zurbaran</strong></a>'s still lifes are among the Old Master highlights.</p><p><a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a>'s Angelica at the Rock and <a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>Bouguereau</strong></a>'s <a href="/apps/masterpieces/movement/academic-art"><strong>Academic</strong></a> paintings draw visitors to the 19th-century galleries. <a href="/apps/masterpieces/artist/jean-baptiste-simeon-chardin"><strong>Jean-Baptiste-Simeon Chardin</strong></a>'s Game Still Life with Hunting Dog and <a href="/apps/masterpieces/artist/guido-reni"><strong>Guido Reni</strong></a>'s St Cecilia represent earlier centuries. The museum sits on Colorado Boulevard, walkable from Old Town Pasadena. Its <strong>sculpture garden</strong>, designed by Nancy Goslee Power, wraps around a central pond inspired by Monet's Giverny.</p>`,
    faqs: [
      {
        question: "What are the top paintings at the Norton Simon Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a>'s The Happy Lovers and <a href=\"/apps/masterpieces/artist/guido-reni\"><strong>Guido Reni</strong></a>'s St Cecilia are highlights. <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a>'s Angelica at the Rock and <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbaran</strong></a>'s still lifes round out a <strong>strong European collection</strong>."
      },
      {
        question: "Where is the Norton Simon Museum?",
        answer: "On <strong>Colorado Boulevard in Pasadena</strong>, California. It's walkable from Old Town Pasadena and close to the Rose Bowl. <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a>'s Game Still Life with Hunting Dog is in the ground-floor galleries."
      },
      {
        question: "What art movements are featured?",
        answer: "<a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>, and <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> are all represented. <a href=\"/apps/masterpieces/artist/william-adolphe-bouguereau\"><strong>Bouguereau</strong></a>'s <strong>Academic paintings</strong> and Impressionist works anchor the 19th-century rooms."
      },
      {
        question: "What's the sculpture garden like?",
        answer: "Designed around a <strong>central pond inspired by Monet's Giverny</strong>. Bronze sculptures line the walkways. <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a>'s <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> works inside pair well with the garden's Impressionist spirit."
      },
      {
        question: "Who founded the Norton Simon Museum?",
        answer: "<strong>Norton Simon</strong>, an American industrialist, spent over 30 years building the collection. He focused on quality over quantity. <a href=\"/apps/masterpieces/artist/guido-reni\"><strong>Guido Reni</strong></a>'s and <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbaran</strong></a>'s <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> works were among his earliest European acquisitions."
      }
    ]
  },

  // 17. Albertina, Vienna (FAQs ONLY)
  {
    slug: 'albertina-vienna-austria',
    faqs: [
      {
        question: "What famous artworks does the Albertina have?",
        answer: "Multiple <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Durer</strong></a> works, including his self-portrait at age 13 and Two Squirrels. <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a>'s Portrait of Emilie Floge is a <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> highlight."
      },
      {
        question: "What makes the Albertina different from the Belvedere?",
        answer: "The Albertina specializes in <strong>works on paper</strong>: drawings, prints, and watercolors. The <a href=\"/apps/masterpieces/museum/belvedere\"><strong>Belvedere</strong></a> focuses on paintings. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Durer</strong></a>'s graphic works here are among the world's finest <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> drawings."
      },
      {
        question: "Where is the Albertina in Vienna?",
        answer: "At the <strong>southern tip of the Hofburg Palace</strong>, right behind the Vienna State Opera. Karlsplatz U-Bahn is a five-minute walk. <a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Pieter Bruegel the Elder</strong></a>'s Big Fishes Eat Small Fishes is in the print collection."
      },
      {
        question: "What art periods does the Albertina cover?",
        answer: "From <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> drawings to <strong>modern and contemporary art</strong>. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Durer</strong></a>'s studies sit alongside Schiele, Monet, and Picasso. The Batliner Collection added major Impressionist and modern works."
      },
      {
        question: "How big is the Albertina's collection?",
        answer: "Over <strong>one million prints and 65,000 drawings</strong>. Only a fraction is on view at any time. <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Klimt</strong></a>'s drawings and <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Durer</strong></a>'s watercolors rotate through the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> galleries regularly."
      }
    ]
  },

  // 18. National Gallery of Victoria (FAQs ONLY)
  {
    slug: 'national-gallery-victoria',
    faqs: [
      {
        question: "What are the top paintings at the National Gallery of Victoria?",
        answer: "<a href=\"/apps/masterpieces/artist/giovanni-battista-tiepolo\"><strong>Tiepolo</strong></a>'s The Banquet of Cleopatra (1744) is the centerpiece. <a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>George Stubbs</strong></a>'s Lion Attacking a Horse and <a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Gustave Dore</strong></a>'s Little Red Riding Hood are popular favorites."
      },
      {
        question: "Where is the National Gallery of Victoria?",
        answer: "On <strong>St Kilda Road in Melbourne</strong>, a short walk south from Flinders Street Station. The main building is called NGV International. <a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a>'s works are in the European collection upstairs."
      },
      {
        question: "What art movements are at the NGV?",
        answer: "<a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a>, and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> are well covered. <a href=\"/apps/masterpieces/artist/paul-signac\"><strong>Paul Signac</strong></a>'s <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> works and <a href=\"/apps/masterpieces/artist/jules-bastien-lepage\"><strong>Bastien-Lepage</strong></a>'s naturalism show the <strong>19th-century range</strong>."
      },
      {
        question: "Is the NGV free?",
        answer: "Yes, <strong>the permanent collection is free</strong>. Special exhibitions charge a fee. <a href=\"/apps/masterpieces/artist/giovanni-battista-tiepolo\"><strong>Tiepolo</strong></a>'s massive Banquet of Cleopatra hangs in the Italian galleries. It's one of the Southern Hemisphere's finest art museums."
      },
      {
        question: "What makes the NGV unique in Australia?",
        answer: "It's <strong>Australia's oldest and largest public gallery</strong>, founded in 1861. The water wall entrance is iconic. <a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a>'s dramatic animal paintings and <a href=\"/apps/masterpieces/artist/gustave-dore\"><strong>Dore</strong></a>'s illustrations aren't found in other Australian collections."
      }
    ]
  },

  // 19. Musee Thomas-Henry, Cherbourg (NEEDS DESC)
  {
    slug: 'mus233e-thomashenry-cherbourg-france',
    description: `<p>The <strong>Musee Thomas-Henry</strong> in Cherbourg is one of Normandy's finest art museums, named after the local art collector who donated its founding works in the 1830s. The collection centers on French painting from the 17th through 19th centuries, with a special emphasis on <a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Jean-Francois Millet</strong></a>, who was born nearby in Gruchy. His portraits, self-portrait, and landscapes of the Norman coast fill an entire section.</p><p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a>'s Patroclus, a powerful <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> study of the fallen Greek hero, is the museum's most famous single work. <a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a>'s Pieta adds a <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> counterpoint. The museum reopened in 2016 after renovations and sits in the <strong>city center</strong>, a short walk from the harbor. For a small regional museum, the quality of the paintings here is surprisingly high.</p>`,
    faqs: [
      {
        question: "What are the key paintings at the Musee Thomas-Henry?",
        answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>Jacques-Louis David</strong></a>'s Patroclus is the star piece, a powerful <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> nude. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Nicolas Poussin</strong></a>'s Pieta and <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a>'s self-portrait are also highlights."
      },
      {
        question: "Why does this museum have so many Millet works?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Jean-Francois Millet</strong></a> was <strong>born near Cherbourg</strong> in the village of Gruchy. The museum collected his work from early on. His Norman coastal landscapes and portraits fill a dedicated gallery."
      },
      {
        question: "Where is the Musee Thomas-Henry?",
        answer: "In <strong>central Cherbourg</strong>, Normandy, a short walk from the harbor and ferry terminal. It's easy to reach if you're traveling between France and England. <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a>'s Patroclus is on the ground floor."
      },
      {
        question: "What art periods does the museum cover?",
        answer: "Mostly <strong>17th through 19th-century French painting</strong>. <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> are the core strengths. <a href=\"/apps/masterpieces/artist/jean-francois-millet\"><strong>Millet</strong></a>'s later works show early Realist tendencies as well."
      },
      {
        question: "Is the Musee Thomas-Henry worth a stop?",
        answer: "Yes. For a <strong>regional museum</strong>, the painting quality is surprisingly strong. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a>'s Pieta and <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a>'s Patroclus alone justify a visit if you're passing through Normandy."
      }
    ]
  },

  // 20. Musee Conde, Chantilly (NEEDS DESC)
  {
    slug: 'mus233e-cond233-chantilly-france',
    description: `<p>The <strong>Musee Conde</strong> at the Chateau de Chantilly holds France's second-largest collection of Old Master paintings after the Louvre. The Duke of Aumale assembled the collection in the 19th century and bequeathed it to the Institut de France with one condition: the hang could never be changed. Paintings by <a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a>, <a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a>, and <a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> line the grand galleries.</p><p>Watteau's Cupid Disarmed is a highlight of the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> holdings. <a href="/apps/masterpieces/artist/theodore-gericault"><strong>Theodore Gericault</strong></a>'s Horse Leaving a Stable and <a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a>'s portrait of Louis XV represent French <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> and <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting. Ingres' Self-Portrait at the Age of 24 shows the young <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassicist</strong></a> at the start of his career. The chateau sits in a <strong>formal park</strong> about 40 minutes north of Paris by train, making it a popular day trip from the capital.</p>`,
    faqs: [
      {
        question: "What famous paintings are at the Musee Conde?",
        answer: "<a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a>'s Cupid Disarmed, <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a>'s St. Matthew, and <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>' Self-Portrait at the Age of 24. It holds <strong>France's second-largest Old Master collection</strong> after the Louvre."
      },
      {
        question: "What makes the Musee Conde unique?",
        answer: "The Duke of Aumale's will forbids <strong>changing the picture hang</strong>. Paintings remain exactly as he arranged them. <a href=\"/apps/masterpieces/artist/hyacinthe-rigaud\"><strong>Hyacinthe Rigaud</strong></a>'s portrait of Louis XV and <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> works keep their 19th-century salon-style display."
      },
      {
        question: "How do I get to Chantilly from Paris?",
        answer: "About <strong>40 minutes by train</strong> from Gare du Nord. The chateau is a short walk from the station. <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Gericault</strong></a>'s Horse Leaving a Stable and <a href=\"/apps/masterpieces/artist/jean-antoine-watteau\"><strong>Watteau</strong></a>'s paintings are in the main gallery."
      },
      {
        question: "What art movements are represented at Chantilly?",
        answer: "<a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a>, and <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> are all strong. <a href=\"/apps/masterpieces/artist/fra-angelico\"><strong>Fra Angelico</strong></a>'s early <strong>Renaissance panels</strong> contrast with Ingres' crisp Neoclassical style."
      },
      {
        question: "What's the building itself like?",
        answer: "The <strong>Chateau de Chantilly</strong> is surrounded by formal French gardens and a moat. The Great Stables nearby house a horse museum. <a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a>' and <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Gericault</strong></a>'s paintings hang in richly decorated rooms."
      }
    ]
  }
];

async function enrichMuseums() {
  console.log(`Enriching ${museumData.length} museums (lean batch 5)...\n`);
  let updated = 0;
  let errors = 0;

  for (const museum of museumData) {
    try {
      const updateData = { faqs: museum.faqs, updatedAt: new Date() };
      if (museum.description) {
        updateData.description = museum.description;
      }
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: updateData
      });
      console.log(`Updated: ${result.name} (${museum.faqs.length} FAQs${museum.description ? ' + desc' : ''})`);
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
