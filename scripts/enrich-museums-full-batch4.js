const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'fitzwilliam-museum-university-of-cambridge-cambrid',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Closed Mondays. Sunday opens noon. FREE admission. Founded 1816, one of Britains oldest museums.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE. Donations welcome. Special exhibitions may have a charge.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.fitzmuseum.cam.ac.uk/visit-us',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. One of Britains finest university museums.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Cambridge tourists increase in summer but museum stays peaceful. A scholarly atmosphere throughout.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Fitzwilliam Museum Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Cambridge. Very limited parking.',
        nearbyParking: 'Grand Arcade, Park Street car parks',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE. One of Britains finest museums outside London.',
        'Founded 1816. Spectacular neoclassical building.',
        'Outstanding antiquities: Egyptian, Greek, Roman',
        'Excellent Old Masters and Impressionists',
        'Train from London Kings Cross to Cambridge (50 min)',
        'Combine with Cambridge colleges (Kings College Chapel nearby)',
        'The entrance hall staircase is magnificent',
        'Illuminated manuscripts collection is exceptional'
      ],
      mustSee: [
        { name: 'Titian Venus', artist: 'Titian (copy after)', note: 'One of several versions' },
        { name: 'The Incredulity of Saint Thomas', artist: 'Caravaggio (attributed)' },
        { name: 'Egyptian Coffins Collection', note: 'Outstanding painted mummy cases' },
        { name: 'Entrance Hall', note: 'Spectacular neoclassical architecture' }
      ]
    },
    faqs: [
      { question: 'Is the Fitzwilliam Museum free?', answer: 'Yes, always free. Donations welcome. One of Britains finest free museums.' },
      { question: 'How do I get to the Fitzwilliam Museum?', answer: 'Train from London Kings Cross to Cambridge (50 minutes). The museum is a 15-minute walk from the station through the city center.' },
      { question: 'What is the Fitzwilliam Museum known for?', answer: 'Exceptional antiquities (Egyptian, Greek, Roman), Old Masters, Impressionists, and illuminated manuscripts in a stunning neoclassical building.' }
    ]
  },
  {
    slug: 'national-gallery-of-denmark-statens-museum-for-kun',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', close: '15:00', reason: 'New Years Eve early close' }
        ],
        notes: 'Closed Mondays. Wednesday late opening until 8pm. Denmarks national art gallery.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 130,
        senior: 105,
        seniorAge: 65,
        student: 105,
        child: 0,
        childMaxAge: 17,
        currency: 'DKK',
        notes: 'About €17 adult. Under 18 free. Students DKK 105. Copenhagen Card holders free.',
        freeDay: null,
        memberFree: true,
        copenhagenCard: true
      },
      tickets: {
        onlineUrl: 'https://www.smk.dk/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Rarely crowded. Walk-up usually fine. Copenhagen Card excellent value if visiting multiple sites.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Wednesday)'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Never overwhelming. One of Scandinavias finest art museums.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'SMK Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'SMK Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Copenhagen near Østre Anlæg park',
        nearbyParking: 'Q-Park Østerport',
        strollerRental: false,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Outdoor sculpture garden'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['da', 'en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 18 always free. Families welcome.',
        'Wednesday evenings until 8pm',
        'Copenhagen Card covers this and many other attractions',
        'Outstanding Danish Golden Age paintings',
        'Strong Matisse holdings',
        'Located in beautiful Østre Anlæg park',
        'S-train to Østerport or Nørreport (10-min walk)',
        'The modern wing connects to historic building beautifully'
      ],
      mustSee: [
        { name: 'Portrait of Madame Matisse', artist: 'Henri Matisse' },
        { name: 'A Morning in the Rye Field', artist: 'P.S. Krøyer' },
        { name: 'Italian Girl', artist: 'Amedeo Modigliani' },
        { name: 'Danish Golden Age Collection', note: 'Eckersberg, Købke, Hammershøi' }
      ]
    },
    faqs: [
      { question: 'What is SMK?', answer: 'Statens Museum for Kunst (National Gallery of Denmark), Denmarks largest art museum with European art from 1300s to present plus outstanding Danish art.' },
      { question: 'How much is SMK admission?', answer: 'DKK 130 (about €17) adults. Under 18 free. Copenhagen Card provides free entry.' },
      { question: 'Is SMK worth visiting?', answer: 'Yes, especially for Danish Golden Age paintings, Matisse, and Hammershøis mysterious interiors. Beautiful building and garden.' }
    ]
  },
  {
    slug: 'kroeller-mueller-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Closed Mondays. Located in De Hoge Veluwe National Park. Park entrance fee separate. Sculpture garden closes 4:30pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 23.15,
        senior: 11.60,
        seniorAge: 65,
        student: 11.60,
        child: 0,
        childMaxAge: 5,
        youth: 11.60,
        youthAgeRange: '6-17',
        currency: 'EUR',
        notes: 'Museum + Park combined ticket €23.15 adult. Park entrance required (€12.65 adult, free with Museumkaart). Museumkaart covers museum only.',
        parkEntrance: 12.65,
        freeDay: null,
        memberFree: true,
        museumkaart: 'Museum only'
      },
      tickets: {
        onlineUrl: 'https://krollermuller.nl/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Book combined museum + park ticket online. Museumkaart holders still need park entrance ticket. Free white bikes in park!'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['September', 'October', 'November'],
        worstMonths: ['July', 'August', 'April'],
        seasonalNotes: 'Spring and summer busy in the park. Autumn is magical in the forest. The sculpture garden is spectacular year-round.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours including sculpture garden and park cycling'
      },
      amenities: {
        cafe: true,
        cafeName: 'Grand Café Restaurant',
        restaurant: true,
        restaurantName: 'Grand Café Restaurant (terrace)',
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Included in park entrance',
        parkingNotes: 'Large parking at museum. Multiple park entrances.',
        strollerRental: false,
        wheelchairRental: true,
        freeBikes: true,
        freeBikesNote: '1,800 free white bikes to explore the park',
        sculptureGarden: true,
        sculptureGardenNote: 'Europes largest sculpture garden (25 hectares)'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'de', 'fr'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibleGardenPaths: true
      },
      tips: [
        'Second largest Van Gogh collection after Van Gogh Museum Amsterdam',
        'Europes largest sculpture garden with 160 works',
        '1,800 FREE white bikes to explore the national park',
        'Allow a full day: museum, sculpture garden, cycling',
        'Museumkaart covers museum but you still need park ticket',
        'Train to Ede-Wageningen, then bus 108 to park entrance',
        'The park has deer, wild boar, and beautiful heathland',
        'Picnic allowed in the park (not museum). Bring lunch!'
      ],
      mustSee: [
        { name: 'Café Terrace at Night', artist: 'Vincent van Gogh' },
        { name: 'Self-Portrait', artist: 'Vincent van Gogh', note: 'One of his key self-portraits' },
        { name: 'Jardin dEmail', artist: 'Jean Dubuffet', location: 'Sculpture Garden' },
        { name: 'Needle Tower', artist: 'Kenneth Snelson', location: 'Sculpture Garden' }
      ]
    },
    faqs: [
      { question: 'Do I need a park ticket for Kröller-Müller?', answer: 'Yes, the museum is inside De Hoge Veluwe National Park. Combined ticket €23.15. Museumkaart covers museum but you still need park entry (€12.65).' },
      { question: 'How many Van Goghs are at Kröller-Müller?', answer: 'Nearly 90 paintings and over 180 drawings. Second largest Van Gogh collection in the world after the Van Gogh Museum.' },
      { question: 'What are the free white bikes?', answer: '1,800 free bikes throughout the park for visitors to use. Great way to explore the national park and reach the museum.' }
    ]
  },
  {
    slug: 'gemeentemuseum-den-haag-hague-netherlands',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Closed Mondays. Now called Kunstmuseum Den Haag. Worlds largest Mondrian collection.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 17.50,
        senior: 14,
        seniorAge: 65,
        student: 9,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Museumkaart accepted. Combined ticket with photography museum available.',
        freeDay: null,
        memberFree: true,
        museumkaart: true
      },
      tickets: {
        onlineUrl: 'https://www.kunstmuseum.nl/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended for Mondrian galleries which can be popular.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Mondrian galleries most popular. The building by Berlage is worth visiting for architecture alone.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Parking at museum',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Worlds largest Mondrian collection (300+ works)',
        'Under 19 free. Great for families.',
        'The building by H.P. Berlage (1935) is an Art Deco masterpiece',
        'Strong De Stijl collection beyond Mondrian',
        'Fashion and decorative arts galleries are excellent',
        'Tram 17 from The Hague Central Station',
        'Combine with nearby Mauritshuis (Vermeer, Rembrandt)',
        'Victory Boogie Woogie is Mondrians unfinished final work'
      ],
      mustSee: [
        { name: 'Victory Boogie Woogie', artist: 'Piet Mondrian', note: 'His unfinished final painting' },
        { name: 'Composition with Red, Blue, and Yellow', artist: 'Piet Mondrian' },
        { name: 'The Building', artist: 'H.P. Berlage', note: 'Art Deco architecture masterpiece' },
        { name: 'Fashion Collection', note: 'Extensive costume and fashion holdings' }
      ]
    },
    faqs: [
      { question: 'Is this the same as Kunstmuseum Den Haag?', answer: 'Yes, Gemeentemuseum Den Haag was renamed Kunstmuseum Den Haag. Same museum, same location, same collection.' },
      { question: 'How many Mondrians are there?', answer: 'Over 300 works by Piet Mondrian, the worlds largest collection including his final, unfinished Victory Boogie Woogie.' },
      { question: 'Is Kunstmuseum Den Haag worth visiting?', answer: 'Yes, essential for Mondrian and De Stijl fans. The Berlage building is an Art Deco gem. Under 19 free.' }
    ]
  },
  {
    slug: 'neue-pinakothek',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [],
        notes: 'CLOSED FOR RENOVATION until approximately 2029. Collection partially on view at Alte Pinakothek. Check website for updates.',
        closedForRenovation: true,
        renovationPeriod: '2019-2029',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'EUR',
        notes: 'CLOSED FOR RENOVATION. Highlights displayed at Alte Pinakothek (€1 Sunday, €9 regular).',
        freeDay: null
      },
      tickets: {
        onlineUrl: 'https://www.pinakothek.de/en',
        onlineRequired: false,
        walkUpAvailable: false,
        notes: 'CLOSED FOR RENOVATION until approximately 2029. Key works on view at Alte Pinakothek.'
      },
      crowdData: {
        overall: 'CLOSED FOR RENOVATION',
        seasonalNotes: 'Building closed since 2019 for major renovation. Reopening expected around 2029. Highlights temporarily at Alte Pinakothek.',
        avgVisitDuration: 'N/A',
        recommendedDuration: 'Visit Alte Pinakothek for highlights'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: false,
        notes: 'CLOSED FOR RENOVATION'
      },
      accessibility: {
        notes: 'CLOSED FOR RENOVATION'
      },
      tips: [
        'CLOSED FOR RENOVATION until approximately 2029',
        'Key 19th-century works on display at Alte Pinakothek',
        'Van Gogh Sunflowers currently at Alte Pinakothek',
        'Check website for reopening updates',
        'When open: outstanding Impressionists, German Romantics, and Art Nouveau',
        'The building itself (1981) is notable postmodern architecture'
      ],
      mustSee: [
        { name: 'Sunflowers', artist: 'Vincent van Gogh', note: 'Currently at Alte Pinakothek during renovation' },
        { name: 'Breakfast in the Studio', artist: 'Édouard Manet', note: 'Currently at Alte Pinakothek' },
        { name: 'Large Reclining Nude', artist: 'Amedeo Modigliani' },
        { name: 'The Poor Poet', artist: 'Carl Spitzweg' }
      ]
    },
    faqs: [
      { question: 'Is Neue Pinakothek open?', answer: 'No, closed for major renovation since 2019. Expected to reopen around 2029. Key works temporarily displayed at Alte Pinakothek.' },
      { question: 'Where can I see Neue Pinakothek art?', answer: 'Highlights including Van Goghs Sunflowers are on view at Alte Pinakothek during the renovation.' },
      { question: 'What is in Neue Pinakothek normally?', answer: '19th-century art: German Romantics, Impressionists (Monet, Manet, Van Gogh), and Art Nouveau. Will reopen around 2029.' }
    ]
  },
  {
    slug: 'mauritshuis',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '13:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Monday opens 1pm. Thursday late until 8pm. Home of Girl with a Pearl Earring.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 19,
        senior: 19,
        student: 19,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Museumkaart accepted. Combo tickets with other The Hague museums available.',
        freeDay: null,
        memberFree: true,
        museumkaart: true
      },
      tickets: {
        onlineUrl: 'https://www.mauritshuis.nl/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1-3 days',
        notes: 'Timed tickets recommended. Girl with a Pearl Earring gallery can be crowded. Thursday evenings quieter.'
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Monday afternoon', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-11:00', '17:00-18:00', '18:00-20:00 (Thursday)'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August', 'April'],
        seasonalNotes: 'Girl with a Pearl Earring room always busy. Thursday evenings and early mornings best for contemplation.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Brasserie Mauritshuis',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central The Hague near Binnenhof',
        nearbyParking: 'Parking Plein, Parking Malieveld',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'de', 'fr', 'es', 'it', 'zh', 'ja'],
        audioGuideCost: 0,
        audioGuideNote: 'Free Mauritshuis app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Home of Girl with a Pearl Earring. Expect crowds at that painting.',
        'Under 19 free. Excellent for families.',
        'Thursday evenings until 8pm are quieter',
        'Small but exceptional collection. Quality over quantity.',
        'The building is a 17th-century palace. Architecture is part of the experience.',
        'Tram from The Hague Central Station (5 min) or walk (15 min)',
        'Next to Binnenhof (Parliament). Combine visits.',
        'Rembrandts Anatomy Lesson of Dr. Nicolaes Tulp is here too'
      ],
      mustSee: [
        { name: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer' },
        { name: 'The Anatomy Lesson of Dr. Nicolaes Tulp', artist: 'Rembrandt' },
        { name: 'The Goldfinch', artist: 'Carel Fabritius' },
        { name: 'View of Delft', artist: 'Johannes Vermeer' }
      ]
    },
    faqs: [
      { question: 'Is Girl with a Pearl Earring at the Mauritshuis?', answer: 'Yes, its the museums most famous painting. Expect crowds around it. Thursday evenings and early mornings are quieter.' },
      { question: 'How long to visit Mauritshuis?', answer: '1.5-2 hours. Its a small museum but every painting is exceptional. Dont rush.' },
      { question: 'Is Mauritshuis worth visiting?', answer: 'Absolutely. Intimate royal palace with Vermeer, Rembrandt, and Dutch Golden Age masterpieces. Under 19 free.' }
    ]
  },
  {
    slug: 'scottish-national-gallery',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '19:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily. Thursday late until 7pm. FREE admission. Part of National Galleries of Scotland.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE. Donations welcome. Special exhibitions may have a charge.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.nationalgalleries.org/visit/scottish-national-gallery',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '17:00-19:00 (Thursday)'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['August (Edinburgh Festival)'],
        seasonalNotes: 'August Festival season brings tourists. Otherwise peaceful. Stunning Princes Street Gardens location.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Scottish Café & Restaurant',
        restaurant: true,
        restaurantName: 'Scottish Café & Restaurant',
        giftShop: true,
        giftShopName: 'Gallery Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Edinburgh',
        nearbyParking: 'Castle Terrace, St. James Quarter',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE. Scotlands national collection.',
        'Thursday evenings until 7pm',
        'Stunning location on The Mound overlooking Princes Street Gardens',
        'Outstanding Scottish art plus European Old Masters',
        'The Scottish Café has great views and food',
        'Connected underground to Royal Scottish Academy',
        'Walking distance from Edinburgh Castle and Royal Mile',
        'Titianas three great poesie paintings (Diana series) are highlights'
      ],
      mustSee: [
        { name: 'The Reverend Robert Walker Skating', artist: 'Henry Raeburn', note: 'Scotlands most beloved painting' },
        { name: 'Diana and Actaeon', artist: 'Titian' },
        { name: 'Diana and Callisto', artist: 'Titian' },
        { name: 'The Virgin Adoring the Sleeping Christ Child', artist: 'Sandro Botticelli' }
      ]
    },
    faqs: [
      { question: 'Is Scottish National Gallery free?', answer: 'Yes, always free. Donations welcome. Special exhibitions may have a charge.' },
      { question: 'What is the famous skating painting?', answer: 'The Reverend Robert Walker Skating on Duddingston Loch by Henry Raeburn. Scotlands most iconic painting.' },
      { question: 'Is it near Edinburgh Castle?', answer: 'Yes, on The Mound with views of Edinburgh Castle. Walking distance to Royal Mile, Old Town, and New Town.' }
    ]
  },
  {
    slug: 'kimbell-art-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '12:00', close: '20:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Friday late opening until 8pm (opens noon). Sunday opens noon. FREE permanent collection.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE permanent collection. Special exhibitions have admission fee (typically $18). Free parking.',
        freeDay: 'Every day',
        specialExhibitionFee: 18
      },
      tickets: {
        onlineUrl: 'https://kimbellart.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets for permanent collection. Special exhibitions may require timed tickets.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['All months quiet'],
        worstMonths: ['None'],
        seasonalNotes: 'Rarely crowded. The Louis Kahn building alone is worth the visit.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Buffet Restaurant',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking in museum lot',
        strollerRental: false,
        wheelchairRental: true,
        pianoBuilding: true,
        pianoBuildingNote: 'Renzo Piano Pavilion (2013) complements original Kahn building'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE permanent collection with free parking',
        'Louis Kahns masterpiece building (1972). Natural light is magical.',
        'Renzo Piano Pavilion (2013) added more gallery space',
        'Small but exceptional collection. Every work is museum-quality.',
        'Outstanding Caravaggios and Asian art',
        'Friday evenings until 8pm',
        'In Fort Worths Cultural District with Amon Carter and Modern Art Museum nearby',
        'The travertine and concrete interior is breathtaking'
      ],
      mustSee: [
        { name: 'The Cardsharps', artist: 'Caravaggio' },
        { name: 'Portrait of a Man', artist: 'Giovanni Bellini' },
        { name: 'The Building', artist: 'Louis Kahn', note: 'Considered his masterpiece' },
        { name: 'Asian Art Collection', note: 'Exceptional quality' }
      ]
    },
    faqs: [
      { question: 'Is Kimbell Art Museum free?', answer: 'Yes, permanent collection always free with free parking. Special exhibitions typically $18.' },
      { question: 'Why is the Kimbell building famous?', answer: 'Louis Kahns 1972 building is considered one of the greatest museum buildings ever designed. Natural light through cycloid vaults creates magical illumination.' },
      { question: 'What is in the Kimbell collection?', answer: 'Small but exceptional: Caravaggio, El Greco, Rembrandt, Cézanne, Monet, Picasso, and outstanding Asian art. Quality over quantity.' }
    ]
  },
  {
    slug: 'petit-palais-paris-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. FREE permanent collection. Built for 1900 World Fair. Beautiful garden café.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'EUR',
        notes: 'ALWAYS FREE permanent collection. Special exhibitions have fees. Paris finest free museum.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies'
      },
      tickets: {
        onlineUrl: 'https://www.petitpalais.paris.fr/en',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets for permanent collection. Just walk in. Special exhibitions may require booking.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Tourists often overlook this for paid museums. A peaceful refuge across from Grand Palais.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours including garden café'
      },
      amenities: {
        cafe: true,
        cafeName: 'Le Jardin du Petit Palais',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Librairie-Boutique',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Paris near Champs-Élysées',
        nearbyParking: 'Parking Champs-Élysées',
        strollerRental: false,
        wheelchairRental: true,
        garden: true,
        gardenNote: 'Beautiful interior garden with café'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE. Paris best free museum.',
        'The garden café is one of Paris most beautiful (and secret) spots',
        'Built for 1900 World Fair opposite Grand Palais',
        'Excellent Dutch paintings, Impressionists, and Art Nouveau',
        'The building interior (mosaics, painted ceilings) is stunning',
        'Metro: Champs-Élysées Clemenceau (lines 1 and 13)',
        'Steps from Champs-Élysées but tourists rarely come here',
        'Outstanding Courbet and Cézanne holdings'
      ],
      mustSee: [
        { name: 'Self-Portrait', artist: 'Gustave Courbet' },
        { name: 'Sunrise over the Sea', artist: 'Gustave Courbet' },
        { name: 'Garden Café', note: 'Hidden oasis in central Paris' },
        { name: 'The Building', note: '1900 World Fair architecture' }
      ]
    },
    faqs: [
      { question: 'Is Petit Palais free?', answer: 'Yes, permanent collection always free. One of Paris finest free museums, often overlooked.' },
      { question: 'What is the Petit Palais garden?', answer: 'A beautiful interior garden with café, hidden from the street. One of Paris best-kept secrets.' },
      { question: 'What art is in Petit Palais?', answer: 'Dutch Golden Age, French 19th century (Courbet, Delacroix), Impressionists, and Art Nouveau decorative arts.' }
    ]
  },
  {
    slug: 'museu-de-belles-arts-de-val232ncia-valencia-spain',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '20:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Open until 8pm daily. FREE admission. Spains second most important fine arts museum after the Prado.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'EUR',
        notes: 'ALWAYS FREE. One of Spains most important art museums. Donations welcome.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://museobellasartesvalencia.gva.es/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Any day'],
        worstDays: ['Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['All months quiet'],
        worstMonths: ['August'],
        seasonalNotes: 'Rarely crowded. Locals know it but tourists often miss this treasure.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Cafetería del Museo',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Tienda del Museo',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Near Jardines del Turia',
        nearbyParking: 'Parking Blanquerías',
        strollerRental: false,
        wheelchairRental: true,
        cloister: true,
        cloisterNote: 'Beautiful Renaissance cloister'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['es', 'en', 'ca'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE. Spains second most important art museum.',
        'Outstanding Valencian Gothic and Renaissance paintings',
        'Exceptional Velázquez self-portrait',
        'El Greco, Goya, and Sorolla well represented',
        'Beautiful Renaissance building with cloister',
        'Near Jardines del Turia park. Combine visits.',
        'Metro lines 3, 5, 7, 9 to Alameda',
        'Much less crowded than comparable museums in Madrid'
      ],
      mustSee: [
        { name: 'Self-Portrait', artist: 'Diego Velázquez', note: 'One of few surviving Velázquez self-portraits' },
        { name: 'St. John the Baptist', artist: 'El Greco' },
        { name: 'Valencian Primitives Collection', note: 'Gothic altarpieces' },
        { name: 'Joaquín Sorolla paintings', note: 'Valencia native son' }
      ]
    },
    faqs: [
      { question: 'Is Valencia Fine Arts Museum free?', answer: 'Yes, always free. One of Spains most important museums, often called the second Prado.' },
      { question: 'What is special about Valencia Fine Arts Museum?', answer: 'Outstanding Valencian Gothic art, Velázquez self-portrait, El Greco, Goya, and excellent Sorolla collection.' },
      { question: 'Is it worth visiting?', answer: 'Absolutely. World-class Spanish art in a beautiful building, completely free, and rarely crowded.' }
    ]
  }
];

async function enrichMuseums() {
  console.log('Enriching museums with full details (batch 4)...\\n');

  for (const museum of enrichedMuseums) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Enriched: ${result.name}`);
    } catch (error) {
      console.error(`✗ Error enriching ${museum.slug}:`, error.message);
    }
  }

  console.log('\\nBatch 4 enrichment complete!');
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
