const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 6 - 10 more notable museums
const museums = [
  {
    slug: 'isabella-stewart-gardner',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '21:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 20,
        senior: 18,
        student: 13,
        under17: 'free',
        namedIsabella: 'Free for anyone named Isabella',
        note: 'Timed entry required'
      },
      tickets: {
        onlineUrl: 'https://www.gardnermuseum.org/visit',
        onlineRequired: true,
        timedEntry: true,
        advanceRequired: true,
        advanceWindow: '30 days',
        refundPolicy: 'Refundable up to 24 hours before'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 11am', 'Thursday evening'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'May', 'October'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café G',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Museum Road Garage'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        audioGuideIncluded: true
      },
      tips: [
        'The collection stays exactly as Isabella arranged it. Empty frames mark the 1990 art theft, still unsolved.',
        'Thursday evenings until 9pm are less crowded and have a special atmosphere.',
        'The central courtyard garden changes seasonally. Spring nasturtiums are legendary.',
        'No photos allowed inside. Put your phone away and really look.',
        'Anyone named Isabella gets in free. Bring ID.',
        'Book tickets well in advance, especially weekends. Walk-ups rarely available.'
      ],
      mustSee: [
        { name: 'Empty frames (1990 theft)', artist: 'Vermeer, Rembrandt stolen', location: 'Dutch Room', note: '$500 million theft, largest unsolved art crime' },
        { name: 'El Jaleo', artist: 'John Singer Sargent', location: 'Spanish Cloister', note: 'Dramatic flamenco dancer, Sargent\'s breakthrough' },
        { name: 'Europa', artist: 'Titian', location: 'Titian Room', note: 'Considered Titian\'s greatest mythological work' },
        { name: 'Courtyard Garden', artist: 'Architecture/horticulture', location: 'Central atrium', note: 'Venetian palace courtyard, seasonal plantings' },
        { name: 'Portrait of Isabella Stewart Gardner', artist: 'John Singer Sargent', location: 'Gothic Room', note: 'The collector herself, daring low-cut gown' }
      ]
    },
    faqs: [
      {
        question: 'What was stolen from the Isabella Stewart Gardner Museum?',
        answer: 'In 1990, thieves stole 13 works including Vermeer\'s The Concert, three Rembrandts, and a Manet. The $500 million theft remains unsolved. Empty frames hang where the paintings were, per Isabella\'s will.'
      },
      {
        question: 'Why can\'t the Gardner Museum change anything?',
        answer: 'Isabella\'s will stipulated that nothing could be added, removed, or rearranged after her death, or the collection would be sold off. The museum preserves her exact vision, including empty frames from the theft.'
      },
      {
        question: 'Do people named Isabella really get in free?',
        answer: 'Yes. Anyone named Isabella (first or middle name) receives free admission. Bring ID to prove it. This tradition honors the museum\'s founder.'
      }
    ]
  },
  {
    slug: 'leopold-museum-vienna-austria',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: 'December 24', status: 'closes early' },
          { date: 'December 25', status: 'open' },
          { date: 'December 31', status: 'closes early' }
        ]
      },
      admission: {
        adult: 15,
        senior: 11,
        student: 11,
        under19: 'free',
        viennaPass: 'Included with Vienna Pass'
      },
      tickets: {
        onlineUrl: 'https://www.leopoldmuseum.org/en/tickets',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 4pm'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        avgVisitDuration: '2-2.5 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Leopold Café',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'MuseumsQuartier garage'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English']
      },
      tips: [
        'The world\'s largest Egon Schiele collection. If you love Schiele, this is essential.',
        'Located in the MuseumsQuartier complex. Combine with MUMOK or Kunsthalle.',
        'Closed Tuesdays, unlike most Vienna museums which close Mondays.',
        'Gustav Klimt works here complement the Belvedere\'s Klimt collection.',
        'The building itself is striking white limestone. Good views from upper floors.',
        'Free for under 19, making it ideal for families with teenagers.'
      ],
      mustSee: [
        { name: 'Death and the Maiden', artist: 'Egon Schiele', location: 'Schiele galleries', note: 'Schiele\'s haunting self-portrait with lover Wally' },
        { name: 'Self-Portrait with Physalis', artist: 'Egon Schiele', location: 'Schiele galleries', note: 'Iconic twisted self-portrait' },
        { name: 'Portrait of Wally', artist: 'Egon Schiele', location: 'Schiele galleries', note: 'Subject of Nazi-era provenance dispute' },
        { name: 'Death and Life', artist: 'Gustav Klimt', location: 'Klimt section', note: 'Major allegory, reworked after Klimt\'s death' },
        { name: 'Secessionist works', artist: 'Various', location: 'Throughout', note: 'Moser, Hoffmann, Vienna Workshops' }
      ]
    },
    faqs: [
      {
        question: 'Is the Leopold Museum better than the Belvedere for Klimt?',
        answer: 'The Belvedere has The Kiss and more Klimt. The Leopold has the world\'s best Schiele collection plus some Klimt. For Austrian Expressionism and Schiele specifically, the Leopold is unmatched.'
      },
      {
        question: 'What is the MuseumsQuartier in Vienna?',
        answer: 'A cultural complex in former imperial stables housing the Leopold Museum, MUMOK (modern art), Kunsthalle, and other venues. The courtyard is a popular gathering spot. Multiple museums can fill a full day.'
      },
      {
        question: 'Why is Egon Schiele important?',
        answer: 'Schiele was a radical Austrian Expressionist who died at 28 in 1918. His raw, sexually explicit, psychologically intense works influenced generations. The Leopold has over 40 paintings and 180 works on paper.'
      }
    ]
  },
  {
    slug: 'muse-marmottan-monet-paris',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        lastAdmission: '17:30 (20:30 Thursday)',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 14,
        reduced: 10,
        under7: 'free',
        note: 'Not included in Paris Museum Pass'
      },
      tickets: {
        onlineUrl: 'https://www.marmottan.fr/en/',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: true,
        advanceRecommended: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Thursday evening'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'June'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false,
        nearbyParking: 'Near Bois de Boulogne'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, basement Monet gallery has lift',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English']
      },
      tips: [
        'Impression, Sunrise is here. The painting that gave Impressionism its name.',
        'The basement gallery has over 100 Monet works, the world\'s largest collection.',
        'In the 16th arrondissement, away from central Paris. Metro La Muette.',
        'Thursday evenings until 9pm are quieter and atmospheric.',
        'Not covered by Paris Museum Pass. Buy tickets separately.',
        'The mansion setting is intimate compared to Orsay\'s grand halls.'
      ],
      mustSee: [
        { name: 'Impression, Sunrise', artist: 'Claude Monet', location: 'Main gallery', note: 'The painting that named Impressionism (1872)' },
        { name: 'Water Lilies (multiple)', artist: 'Claude Monet', location: 'Basement', note: 'Extensive Giverny-period works' },
        { name: 'Rouen Cathedral series', artist: 'Claude Monet', location: 'Basement', note: 'Studies of light on Gothic facade' },
        { name: 'Berthe Morisot collection', artist: 'Berthe Morisot', location: 'Upper floors', note: 'Major holdings of this Impressionist' },
        { name: 'Japanese Bridge', artist: 'Claude Monet', location: 'Basement', note: 'Late Giverny garden paintings' }
      ]
    },
    faqs: [
      {
        question: 'Which Paris museum has the best Monet collection?',
        answer: 'Musée Marmottan Monet has the world\'s largest Monet collection, including Impression, Sunrise. The Orangerie has the monumental Water Lilies. Orsay has major works across Impressionism. All three are essential for Monet fans.'
      },
      {
        question: 'Is Musée Marmottan Monet included in Paris Museum Pass?',
        answer: 'No, it\'s privately owned and not part of the Paris Museum Pass. You\'ll need to buy a separate ticket (€14 adult). Book online to avoid queues.'
      },
      {
        question: 'How do I get to Musée Marmottan Monet?',
        answer: 'Take Metro Line 9 to La Muette, then walk 5 minutes. It\'s in the upscale 16th arrondissement near the Bois de Boulogne park. Combine with a park stroll.'
      }
    ]
  },
  {
    slug: 'mus233e-picasso-paris-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:30', close: '18:00' },
          wednesday: { open: '10:30', close: '18:00' },
          thursday: { open: '10:30', close: '18:00' },
          friday: { open: '10:30', close: '21:00' },
          saturday: { open: '10:30', close: '18:00' },
          sunday: { open: '10:30', close: '18:00' }
        },
        lastAdmission: '17:15 (20:15 Friday)',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 14,
        under26EU: 'free',
        under18: 'free',
        freeDay: 'First Sunday of month',
        museumPass: 'Paris Museum Pass accepted'
      },
      tickets: {
        onlineUrl: 'https://www.museepicassoparis.fr/en',
        onlineRecommended: true,
        timedEntry: true,
        advanceRecommended: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday', 'First Sunday (free)'],
        bestTimes: ['Opening at 10:30am', 'Friday evening'],
        worstTimes: ['Weekend midday', 'Free Sundays'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-2.5 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English', 'Spanish', 'German', 'Italian']
      },
      tips: [
        'The collection comes from Picasso\'s personal holdings, works he never sold.',
        'Housed in the Hôtel Salé, a stunning 17th-century Marais mansion.',
        'Friday nights until 9pm offer extended hours with fewer crowds.',
        'The collection rotates. Not everything is always on display.',
        'Free for EU residents under 26. Bring ID.',
        'In the Marais district. Combine with a neighborhood walk.'
      ],
      mustSee: [
        { name: 'Self-Portrait (1901)', artist: 'Pablo Picasso', location: 'Blue Period gallery', note: 'Young Picasso in his Blue Period' },
        { name: 'The Crucifixion', artist: 'Pablo Picasso', location: 'Surrealist gallery', note: 'Violent 1930 work after Grünewald' },
        { name: 'Goat Skull and Bottle', artist: 'Pablo Picasso', location: 'Sculpture area', note: 'Assemblage sculpture' },
        { name: 'Picasso\'s personal collection', artist: 'Cézanne, Matisse, others', location: 'Throughout', note: 'Works Picasso collected himself' },
        { name: 'The Hôtel Salé building', artist: 'Architecture', location: 'Throughout', note: '17th-century mansion, beautiful staircase' }
      ]
    },
    faqs: [
      {
        question: 'Is Musée Picasso Paris worth it?',
        answer: 'Yes, especially for understanding Picasso\'s full career arc. The collection spans Blue Period to late works, plus his personal art collection and photographs. The Marais mansion setting is beautiful.'
      },
      {
        question: 'Which is better, Musée Picasso Paris or Barcelona?',
        answer: 'Paris has more works from all periods and Picasso\'s personal collection. Barcelona excels in early works and the Las Meninas series. Both are excellent and different enough to visit both.'
      },
      {
        question: 'Is Musée Picasso free for young people?',
        answer: 'Free for EU residents under 26 and everyone under 18. Non-EU visitors under 26 pay reduced admission. Bring ID to prove age and residency.'
      }
    ]
  },
  {
    slug: 'albertina-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: 'December 24', status: 'closes at 14:00' },
          { date: 'December 31', status: 'closes at 16:00' }
        ]
      },
      admission: {
        adult: 18.90,
        senior: 14.90,
        under19: 'free',
        viennaPass: 'Included with Vienna Pass'
      },
      tickets: {
        onlineUrl: 'https://www.albertina.at/en/tickets/',
        onlineAvailable: true,
        onlineRecommended: true,
        timedEntry: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Wednesday/Friday evening'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'DO & CO Albertina',
        restaurant: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English', 'Italian', 'French', 'Spanish', 'Russian', 'Japanese', 'Chinese']
      },
      tips: [
        'Dürer\'s Young Hare and Praying Hands are here. The world\'s greatest graphics collection.',
        'Wednesday and Friday nights until 9pm with lighter crowds.',
        'The Habsburg State Rooms are included. Don\'t skip them.',
        'Special exhibitions change frequently. Check what\'s on before visiting.',
        'Right behind the Opera House. Easy to combine with central Vienna sights.',
        'Free for under 19, making it excellent for families.'
      ],
      mustSee: [
        { name: 'Young Hare', artist: 'Albrecht Dürer', location: 'Dürer gallery', note: 'The famous 1502 watercolor, icon of Western art' },
        { name: 'Praying Hands', artist: 'Albrecht Dürer', location: 'Dürer gallery', note: 'Study drawing, widely reproduced' },
        { name: 'Habsburg State Rooms', artist: 'Architecture', location: 'Palace rooms', note: 'Lavish imperial apartments' },
        { name: 'Monet to Picasso collection', artist: 'Batliner Collection', location: 'Modern galleries', note: 'Impressionism through Abstract Expressionism' },
        { name: 'Graphics collection highlights', artist: 'Raphael, Michelangelo, Rembrandt', location: 'Rotating display', note: '1 million works, rotating exhibitions' }
      ]
    },
    faqs: [
      {
        question: 'What is the Albertina famous for?',
        answer: 'The world\'s largest and most important collection of graphic arts: over 1 million drawings, prints, and photographs. Dürer\'s Young Hare and Praying Hands are the stars. The Batliner Collection adds modern masterpieces.'
      },
      {
        question: 'Can you always see Dürer\'s Young Hare at the Albertina?',
        answer: 'The original is shown periodically due to light sensitivity. A high-quality reproduction is always on display. Check the website for current exhibitions featuring the original.'
      },
      {
        question: 'Albertina vs Kunsthistorisches Museum: which is better?',
        answer: 'Different focuses. Kunsthistorisches has Old Master paintings (Bruegel, Vermeer). Albertina specializes in drawings and prints plus modern art. Both are world-class and worth visiting.'
      }
    ]
  },
  {
    slug: 'victoria-and-albert-museum-vampa-london-uk',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:45' },
          tuesday: { open: '10:00', close: '17:45' },
          wednesday: { open: '10:00', close: '17:45' },
          thursday: { open: '10:00', close: '17:45' },
          friday: { open: '10:00', close: '22:00' },
          saturday: { open: '10:00', close: '17:45' },
          sunday: { open: '10:00', close: '17:45' }
        },
        lastAdmission: 'Galleries start closing at 17:30',
        exceptions: [
          { date: 'December 24-26', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        specialExhibitions: 'Ticketed separately, typically £15-25',
        donations: 'Suggested donation £5'
      },
      tickets: {
        onlineUrl: 'https://www.vam.ac.uk/visit',
        reservationRequired: false,
        specialExhibitionNote: 'Book online for paid exhibitions',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Heavy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday', 'Friday evening'],
        bestTimes: ['Opening at 10am', 'Weekday afternoons'],
        worstTimes: ['Weekend midday', 'Friday Late events'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August', 'December'],
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '3 hours minimum'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafes including Morris Room',
        restaurant: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        bslTours: 'Available'
      },
      tips: [
        'The world\'s largest decorative arts museum. You cannot see everything in one visit.',
        'Friday Lates (until 10pm) include DJs, talks, and bar. Popular and crowded.',
        'The British Galleries and Cast Courts are highlights. Start there.',
        'The medieval and Renaissance galleries rival any European museum.',
        'The cafe in the Morris, Gamble & Poynter Rooms is itself a Victorian masterpiece.',
        'Free admission makes multiple focused visits possible.'
      ],
      mustSee: [
        { name: 'Raphael Cartoons', artist: 'Raphael', location: 'Raphael Court', note: 'Full-scale tapestry designs for Sistine Chapel' },
        { name: 'Cast Courts', artist: 'Plaster casts', location: 'Galleries 46a-b', note: 'Trajan\'s Column, Michelangelo\'s David, all in one room' },
        { name: 'Tipu\'s Tiger', artist: 'Mysore craftsmen', location: 'South Asia gallery', note: 'Mechanical tiger mauling a British soldier' },
        { name: 'Great Bed of Ware', artist: 'Unknown', location: 'British Galleries', note: 'Famous Elizabethan bed, mentioned by Shakespeare' },
        { name: 'Fashion collection', artist: 'Various', location: 'Fashion gallery', note: 'Historical clothing from 1600s to present' }
      ]
    },
    faqs: [
      {
        question: 'Is the V&A Museum free?',
        answer: 'Yes, general admission is free. Special temporary exhibitions are ticketed (typically £15-25). The permanent collection alone could take multiple visits to explore properly.'
      },
      {
        question: 'What does V&A stand for?',
        answer: 'Victoria and Albert. Named after Queen Victoria and Prince Albert, who championed the museum\'s founding after the Great Exhibition of 1851. It opened in 1852.'
      },
      {
        question: 'How is the V&A different from the British Museum?',
        answer: 'The British Museum focuses on archaeology and world cultures. The V&A focuses on decorative arts, design, fashion, and craftsmanship. Both are free and world-class, but cover different ground.'
      }
    ]
  },
  {
    slug: 'toledo-museum-of-art-toledo-oh-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '16:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        note: 'Always free admission'
      },
      tickets: {
        onlineUrl: 'https://www.toledomuseum.org/visit',
        reservationRequired: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['All year relatively quiet'],
        worstMonths: ['Summer weekends'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingCost: 'Free'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English']
      },
      tips: [
        'Free admission and free parking. One of America\'s best free museums.',
        'The Glass Pavilion is a must-see for glass art and glassblowing demonstrations.',
        'Thursday and Friday evenings until 9pm, great for unhurried viewing.',
        'El Greco, Rubens, Rembrandt, Monet, van Gogh, Picasso all here.',
        'Founded by glass magnate Edward Drummond Libbey, hence the glass focus.',
        'Often called the best museum between New York and Chicago.'
      ],
      mustSee: [
        { name: 'Glass Pavilion', artist: 'SANAA architects', location: 'Separate building', note: 'World-class glass collection, live glassblowing' },
        { name: 'The Agony in the Garden', artist: 'El Greco', location: 'European galleries', note: 'Major El Greco work' },
        { name: 'Crowning with Thorns', artist: 'El Greco', location: 'European galleries', note: 'Powerful late El Greco' },
        { name: 'European Old Masters', artist: 'Rubens, Rembrandt, Holbein', location: 'European galleries', note: 'Surprisingly strong collection' },
        { name: 'Impressionist collection', artist: 'Monet, Renoir, Cézanne', location: 'Modern galleries', note: 'Quality rivals larger museums' }
      ]
    },
    faqs: [
      {
        question: 'Why is the Toledo Museum of Art free?',
        answer: 'Founder Edward Drummond Libbey, a glass industry magnate, endowed the museum to be free forever. His vision was art education for all. It remains one of America\'s finest free museums.'
      },
      {
        question: 'Is the Toledo Museum of Art worth a special trip?',
        answer: 'For art lovers, yes. The collection rivals major city museums, the Glass Pavilion is world-class, and it\'s always free. It\'s often overlooked because of Toledo\'s location, but that\'s a mistake.'
      },
      {
        question: 'What is the Glass Pavilion at Toledo Museum?',
        answer: 'A separate building by SANAA architects housing an extraordinary glass art collection and working glass studio with daily demonstrations. The transparent building itself is architecturally significant.'
      }
    ]
  },
  {
    slug: 'naples-archaeological-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:00', close: '19:30' },
          wednesday: { open: '09:00', close: '19:30' },
          thursday: { open: '09:00', close: '19:30' },
          friday: { open: '09:00', close: '19:30' },
          saturday: { open: '09:00', close: '19:30' },
          sunday: { open: '09:00', close: '19:30' }
        },
        lastAdmission: '19:00',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 22,
        reduced: 2,
        reducedNote: 'EU citizens 18-25',
        under18EU: 'free',
        freeDay: 'First Sunday of month'
      },
      tickets: {
        onlineUrl: 'https://mann-napoli.it/en/',
        onlineAvailable: true,
        onlineRecommended: true,
        timedEntry: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday', 'First Sunday (free)'],
        bestTimes: ['Opening at 9am', 'After 4pm'],
        worstTimes: ['Midday', 'Free Sundays'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'July', 'August'],
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Limited street parking'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Main floors accessible, some sections have stairs',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'German', 'Spanish']
      },
      tips: [
        'Visit BEFORE going to Pompeii. The best finds are here, not on-site.',
        'The Farnese Collection (sculptures) and Pompeii mosaics are highlights.',
        'The Secret Cabinet (erotic art) is no longer restricted but may still require asking.',
        'Allow 3+ hours minimum. The collection is enormous.',
        'Closed Mondays. Plan Pompeii trips accordingly.',
        'One of the world\'s great archaeological museums, don\'t skip it.'
      ],
      mustSee: [
        { name: 'Farnese Hercules', artist: 'Roman copy of Greek original', location: 'Farnese Collection', note: 'Colossal sculpture, symbol of the museum' },
        { name: 'Farnese Bull', artist: 'Roman', location: 'Farnese Collection', note: 'Largest ancient sculpture group to survive' },
        { name: 'Alexander Mosaic', artist: 'Pompeii workshop', location: 'Mosaic gallery', note: 'Alexander vs. Darius, from House of Faun' },
        { name: 'Secret Cabinet', artist: 'Various', location: 'Ground floor', note: 'Erotic art from Pompeii/Herculaneum' },
        { name: 'Pompeii frescoes', artist: 'Various', location: 'Throughout', note: 'Removed wall paintings preserving ancient life' }
      ]
    },
    faqs: [
      {
        question: 'Should I visit Naples Archaeological Museum before or after Pompeii?',
        answer: 'Before. The most important Pompeii artifacts (mosaics, frescoes, sculptures) were moved here for preservation. Seeing them first helps you understand what the empty spaces at Pompeii once contained.'
      },
      {
        question: 'What is the Secret Cabinet at Naples Archaeological Museum?',
        answer: 'A collection of erotic art from Pompeii and Herculaneum. Once restricted to men of "mature age and respected morals," it\'s now open to all visitors. The Romans had relaxed attitudes about sexuality.'
      },
      {
        question: 'How much time do I need at Naples Archaeological Museum?',
        answer: 'At least 3 hours, ideally 4. The Farnese sculptures, Pompeii mosaics, and Roman artifacts could each take an hour. It\'s one of the world\'s great museums, don\'t rush.'
      }
    ]
  },
  {
    slug: 'sforza-castle-milan-italy',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true, note: 'Castle grounds open daily' },
          tuesday: { open: '10:00', close: '17:30' },
          wednesday: { open: '10:00', close: '17:30' },
          thursday: { open: '10:00', close: '17:30' },
          friday: { open: '10:00', close: '17:30' },
          saturday: { open: '10:00', close: '17:30' },
          sunday: { open: '10:00', close: '17:30' }
        },
        lastAdmission: '17:00',
        castleGrounds: 'Free access daily 7am-7:30pm (summer until 9pm)',
        exceptions: [
          { date: 'January 1', status: 'museums closed' },
          { date: 'December 25', status: 'museums closed' }
        ]
      },
      admission: {
        adult: 10,
        reduced: 8,
        under18: 'free',
        freeDay: 'First and Third Tuesday after 2pm (except during exhibitions)',
        note: 'Covers all castle museums'
      },
      tickets: {
        onlineUrl: 'https://www.milanocastello.it/en',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: false
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Parking Foro Buonaparte'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, upper floors limited',
        elevator: 'Limited',
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English']
      },
      tips: [
        'Michelangelo\'s last sculpture, the Rondanini Pietà, is here. Don\'t miss it.',
        'Multiple museums inside: art, furniture, musical instruments, Egyptian artifacts.',
        'The castle grounds are free and pleasant for a stroll. Sempione Park is behind.',
        'Leonardo da Vinci designed the ceiling of the Sala delle Asse.',
        'Less crowded than most Milan attractions. A quieter alternative to the Duomo.',
        'The 15th-century fortress was built by the Sforza dukes of Milan.'
      ],
      mustSee: [
        { name: 'Rondanini Pietà', artist: 'Michelangelo', location: 'Pietà Rondanini Museum', note: 'Michelangelo\'s final work, unfinished at his death' },
        { name: 'Sala delle Asse', artist: 'Leonardo da Vinci', location: 'Castle interior', note: 'Ceiling decorated with intertwined tree branches' },
        { name: 'Trivulzio Tapestries', artist: 'Bramantino', location: 'Applied Arts Museum', note: 'Twelve months of the year' },
        { name: 'Egyptian collection', artist: 'Various', location: 'Egyptian Museum', note: 'Small but quality collection' },
        { name: 'Musical instruments', artist: 'Various', location: 'Musical Instruments Museum', note: 'Historical instruments including Stradivari' }
      ]
    },
    faqs: [
      {
        question: 'Is Michelangelo\'s Rondanini Pietà at Sforza Castle worth seeing?',
        answer: 'Yes. It\'s Michelangelo\'s last sculpture, unfinished when he died at 88. The raw, almost abstract form shows him still experimenting. It\'s haunting and completely different from his polished earlier work.'
      },
      {
        question: 'Is Sforza Castle free?',
        answer: 'The castle grounds are free and open daily. The museums inside cost €10 (covers all of them). Free entry on the first and third Tuesday of each month after 2pm.'
      },
      {
        question: 'How long to spend at Sforza Castle?',
        answer: 'About 2-3 hours for the museums, especially if you want to see the Michelangelo properly. Add another 30-60 minutes if you want to explore Sempione Park behind the castle.'
      }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-de-dijon-dijon-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '09:30', close: '18:00' },
          thursday: { open: '09:30', close: '18:00' },
          friday: { open: '09:30', close: '18:00' },
          saturday: { open: '09:30', close: '18:00' },
          sunday: { open: '09:30', close: '18:00' }
        },
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'November 1', status: 'closed' },
          { date: 'November 11', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        permanent: 'Free',
        specialExhibitions: 'Varies',
        note: 'Permanent collection always free'
      },
      tickets: {
        onlineUrl: 'https://beaux-arts.dijon.fr/',
        reservationRequired: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['All year quiet'],
        worstMonths: ['August (some closures)'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English']
      },
      tips: [
        'Housed in the former Palace of the Dukes of Burgundy. The building alone is worth the visit.',
        'Free permanent collection makes this an easy add to any Dijon trip.',
        'The tombs of the Dukes of Burgundy are spectacular late Gothic monuments.',
        'Strong on Flemish and Dutch art due to Burgundy\'s historical ties to the Netherlands.',
        'One of France\'s oldest and largest provincial museums.',
        'Combine with Dijon\'s mustard shops and medieval old town.'
      ],
      mustSee: [
        { name: 'Tombs of the Dukes of Burgundy', artist: 'Claus Sluter workshop', location: 'Salle des Gardes', note: 'Spectacular Gothic tomb monuments' },
        { name: 'Ducal Kitchens', artist: 'Architecture', location: 'Ground floor', note: 'Massive medieval kitchens with six fireplaces' },
        { name: 'Nativity', artist: 'Robert Campin (Master of Flémalle)', location: 'Early Netherlandish gallery', note: 'Major early Flemish painting' },
        { name: 'Swiss Guard', artist: 'Pompon', location: 'Sculpture galleries', note: 'Work by Dijon-born animal sculptor' },
        { name: 'Burgundian art collection', artist: 'Various', location: 'Throughout', note: 'Regional masterpieces from the ducal period' }
      ]
    },
    faqs: [
      {
        question: 'Is the Dijon Museum of Fine Arts free?',
        answer: 'Yes, the permanent collection is always free. Only special temporary exhibitions may charge admission. This makes it one of the best free museums in France outside Paris.'
      },
      {
        question: 'What were the Dukes of Burgundy?',
        answer: 'In the 14th-15th centuries, the Dukes of Burgundy ruled a wealthy territory rivaling France. They were major art patrons whose court attracted Flemish masters. Their tombs in the museum are masterpieces of Gothic sculpture.'
      },
      {
        question: 'Is Dijon worth visiting for art?',
        answer: 'Yes. The Fine Arts Museum is one of France\'s oldest and best provincial museums, housed in the Ducal Palace. Combined with the medieval old town and famous gastronomy, it makes a worthwhile day trip from Paris or Lyon.'
      }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full visitor info for 10 museums (batch 6)...\n');

  for (const museum of museums) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.name}`);
    } catch (error) {
      console.error(`✗ Failed: ${museum.slug} - ${error.message}`);
    }
  }

  const totalWithHours = await prisma.museum.count({
    where: {
      hoursOfOperation: { not: { equals: {} } }
    }
  });

  console.log(`\n✓ Total museums with visitor info: ${totalWithHours}`);

  await prisma.$disconnect();
}

addMuseumInfo().catch(console.error);
