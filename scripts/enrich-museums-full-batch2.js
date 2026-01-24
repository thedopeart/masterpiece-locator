const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'palazzo-pitti',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '08:15', close: '18:50' },
          wednesday: { open: '08:15', close: '18:50' },
          thursday: { open: '08:15', close: '18:50' },
          friday: { open: '08:15', close: '18:50' },
          saturday: { open: '08:15', close: '18:50' },
          sunday: { open: '08:15', close: '18:50' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Last entry 1 hour before closing. Multiple museums inside: Palatine Gallery, Modern Art Gallery, Treasury, Costume Gallery.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 2,
        seniorAge: 65,
        student: 2,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'EU citizens 18-25 €2. Under 18 free. First Sunday of month free. Boboli Gardens separate ticket or combo available.',
        freeDay: 'First Sunday of month',
        euYouth: 2,
        memberFree: true,
        boboliCombo: 22
      },
      tickets: {
        onlineUrl: 'https://www.uffizi.it/palazzo-pitti',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        bookingFee: 4,
        notes: 'Same ticketing system as Uffizi. Combined ticket with Boboli Gardens recommended. Online booking €4 fee.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['First Sunday (free)', 'Saturday'],
        bestTimes: ['08:15-10:00', '16:00-18:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'June', 'July'],
        seasonalNotes: 'Less crowded than Uffizi. The Palatine Gallery offers intimate Raphael experience without Uffizi crowds.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours including Boboli Gardens'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffè Pitti',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Bookshop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Oltrarno district. ZTL restricted zone.',
        nearbyParking: 'Parking Oltrarno',
        strollerRental: false,
        wheelchairRental: true,
        boboliGardens: true,
        boboliGardensNote: 'Historic Renaissance gardens (separate or combo ticket)'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Main galleries accessible. Some historic rooms have steps.',
        wheelchairsAvailable: true,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es', 'ru', 'ja', 'zh'],
        audioGuideCost: 6,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Less crowded than Uffizi with equally important Raphaels and Titians',
        'First Sunday free but crowded. Other days peaceful.',
        'Multiple museums inside: Palatine Gallery is the must-see for Old Masters',
        'Combined ticket with Boboli Gardens is excellent value',
        'The Medici lived here. Royal apartments show how they lived.',
        'Walk across Ponte Vecchio from the Uffizi',
        'The Treasury (Museo degli Argenti) has amazing Medici jewels',
        'Allow time for Boboli Gardens, especially in good weather'
      ],
      mustSee: [
        { name: 'Madonna of the Chair', artist: 'Raphael', location: 'Palatine Gallery' },
        { name: 'La Velata', artist: 'Raphael', location: 'Palatine Gallery' },
        { name: 'The Concert', artist: 'Titian', location: 'Palatine Gallery' },
        { name: 'Boboli Gardens', note: 'Renaissance gardens with grottos and fountains' }
      ]
    },
    faqs: [
      { question: 'What is inside Palazzo Pitti?', answer: 'Multiple museums: Palatine Gallery (Old Masters), Modern Art Gallery, Treasury (Medici silver/jewels), Costume Gallery, plus Royal Apartments.' },
      { question: 'Is Palazzo Pitti better than Uffizi?', answer: 'Different strengths. Pitti has major Raphaels in intimate setting with fewer crowds. Uffizi has broader collection. Many visitors do both.' },
      { question: 'Should I get Boboli Gardens ticket?', answer: 'Yes, combo ticket recommended. The Renaissance gardens are beautiful and connect to other Medici sites.' }
    ]
  },
  {
    slug: 'alte-pinakothek',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Closed Mondays. Wednesday late opening until 9pm. Sundays reduced to €1. Part of Kunstareal museum district.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 9,
        senior: 7,
        seniorAge: 65,
        student: 7,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Sundays only €1 for everyone! Combined day pass for all Pinakotheken available.',
        freeDay: null,
        sundayPrice: 1,
        memberFree: true,
        comboPass: true
      },
      tickets: {
        onlineUrl: 'https://www.pinakothek.de/en/visit/alte-pinakothek',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Sunday €1 admission is incredible value. Combined day pass covers all three Pinakotheken.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Sunday (€1 day)', 'Wednesday evening'],
        bestTimes: ['10:00-12:00', '16:00-18:00'],
        worstTimes: ['14:00-16:00 Sunday'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August', 'October (Oktoberfest)'],
        seasonalNotes: 'Sundays at €1 draw crowds but still manageable. One of Europes great Old Masters collections.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Klenze',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museumsladen',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Kunstareal district',
        nearbyParking: 'Parkhaus Türkenstraße',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en'],
        audioGuideCost: 4.5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Sundays only €1. Best museum deal in Munich.',
        'Under 18 always free',
        'Wednesday evenings until 9pm',
        'Outstanding Dürer collection (including Self-Portrait)',
        'Exceptional Rubens gallery',
        'Part of Kunstareal with Neue Pinakothek and Pinakothek der Moderne nearby',
        'U-Bahn U2 to Königsplatz or Tram 27 to Pinakotheken',
        'Combined day pass good value if visiting multiple Pinakotheken'
      ],
      mustSee: [
        { name: 'Self-Portrait in Fur Coat', artist: 'Albrecht Dürer', note: 'Iconic Christ-like self-portrait' },
        { name: 'The Great Last Judgement', artist: 'Peter Paul Rubens' },
        { name: 'Land of Cockaigne', artist: 'Pieter Bruegel the Elder' },
        { name: 'Four Apostles', artist: 'Albrecht Dürer' }
      ]
    },
    faqs: [
      { question: 'How much is Alte Pinakothek on Sunday?', answer: 'Only €1 for everyone on Sundays. Regular price €9. Best museum deal in Munich.' },
      { question: 'What is the Kunstareal?', answer: 'Munichs museum district with 18 museums including all three Pinakotheken, Egyptian Museum, Glyptothek, and Lenbachhaus.' },
      { question: 'What is Alte Pinakothek famous for?', answer: 'One of Europes finest Old Masters collections: exceptional Dürer, Rubens, Bruegel, and Bavarian royal art acquisitions.' }
    ]
  },
  {
    slug: 'birmingham-museum-and-art-gallery-birmingham-uk',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '15:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open daily 10am-5pm. FREE admission. Worlds largest Pre-Raphaelite collection.',
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
        onlineUrl: 'https://www.birminghammuseums.org.uk/bmag',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. Special exhibitions may require booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August'],
        seasonalNotes: 'School holidays bring families. Generally quiet. The Pre-Raphaelite galleries are never crowded.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Edwardian Tea Room',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Birmingham',
        nearbyParking: 'Town Hall car park, various NCP',
        strollerRental: false,
        wheelchairRental: true,
        teaRoom: true,
        teaRoomNote: 'Beautiful Edwardian Tea Room worth visiting'
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
        'ALWAYS FREE. Worlds largest Pre-Raphaelite collection.',
        'The Edwardian Tea Room is beautiful. Have tea there.',
        'Staffordshire Hoard (Anglo-Saxon gold) is here',
        'Less than 90 minutes from London by train',
        'The Round Room with its decorative ceiling is stunning',
        'Near Victoria Square and Birmingham Library',
        'Train to Birmingham New Street, 5-minute walk',
        'Combine with nearby Ikon Gallery (contemporary art, also free)'
      ],
      mustSee: [
        { name: 'The Last of England', artist: 'Ford Madox Brown' },
        { name: 'Proserpine', artist: 'Dante Gabriel Rossetti' },
        { name: 'The Blind Girl', artist: 'John Everett Millais' },
        { name: 'Staffordshire Hoard', note: 'Largest Anglo-Saxon gold hoard ever found' }
      ]
    },
    faqs: [
      { question: 'Is Birmingham Museum and Art Gallery free?', answer: 'Yes, always free. Donations welcome. Some special exhibitions may have a charge.' },
      { question: 'What is the Staffordshire Hoard?', answer: 'The largest hoard of Anglo-Saxon gold ever found, discovered in 2009. Over 4,000 pieces dating to 7th-8th century.' },
      { question: 'Why does Birmingham have Pre-Raphaelites?', answer: 'Victorian Birmingham industrialists collected Pre-Raphaelite art. The museum now has the worlds largest collection.' }
    ]
  },
  {
    slug: 'j-paul-getty-museum-los-angeles-ca-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:30' },
          wednesday: { open: '10:00', close: '17:30' },
          thursday: { open: '10:00', close: '17:30' },
          friday: { open: '10:00', close: '17:30' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '17:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Saturday extended hours until 8pm. Two locations: Getty Center (Brentwood) and Getty Villa (Malibu).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE. Parking $20 (Getty Center) or $20 (Getty Villa). Parking free after 3pm.',
        freeDay: 'Every day',
        parkingCost: 20,
        parkingFreeAfter: '15:00'
      },
      tickets: {
        onlineUrl: 'https://www.getty.edu/visit/',
        onlineRequired: true,
        onlineRequiredNote: 'Free timed entry required',
        walkUpAvailable: false,
        skipTheLine: true,
        advanceRequired: true,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        sameDayNote: 'Same-day tickets often available but not guaranteed',
        notes: 'FREE but timed entry reservation required. Book online in advance, especially weekends.'
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '17:00-20:00 (Saturday)'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['January', 'February', 'September', 'October'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Extremely popular. Advance reservations essential, especially weekends. Saturday evenings magical with sunset views.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4 hours including gardens'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café at the Getty Center',
        restaurant: true,
        restaurantName: 'The Restaurant (fine dining with views)',
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 20,
        parkingNotes: '$20 until 3pm, free after 3pm. Arrive via 405 freeway.',
        strollerRental: true,
        wheelchairRental: true,
        gardens: true,
        gardensNote: 'Central Garden by Robert Irwin is a living artwork',
        tram: true,
        tramNote: 'Free tram ride up the hill from parking'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es'],
        audioGuideCost: 0,
        audioGuideNote: 'Free GettyGuide app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE but reservations required. Book early, especially weekends.',
        'Parking $20 but FREE after 3pm. Great for sunset visits.',
        'The architecture (Richard Meier) and gardens are as spectacular as the art',
        'Central Garden by Robert Irwin is must-see living artwork',
        'Saturday until 8pm. Sunset over LA is magical.',
        'Two locations: Center (European art) and Villa (antiquities). Book separately.',
        'Free tram ride from parking to museum. Views are stunning.',
        'Van Gogh Irises is the star but entire collection is world-class'
      ],
      mustSee: [
        { name: 'Irises', artist: 'Vincent van Gogh' },
        { name: 'Wheatstacks, Snow Effect, Morning', artist: 'Claude Monet' },
        { name: 'Central Garden', artist: 'Robert Irwin', note: 'Living artwork' },
        { name: 'View from West Pavilion', note: 'Panoramic LA views to the ocean' }
      ]
    },
    faqs: [
      { question: 'Is the Getty Museum free?', answer: 'Yes, always free. Parking is $20 (free after 3pm). Advance timed-entry reservation required.' },
      { question: 'Do I need reservations for the Getty?', answer: 'Yes, free timed-entry reservations required. Book at getty.edu, especially for weekends.' },
      { question: 'What is the difference between Getty Center and Getty Villa?', answer: 'Getty Center (Brentwood) has European paintings and modern architecture. Getty Villa (Malibu) has Greek/Roman antiquities in a Roman villa setting.' }
    ]
  },
  {
    slug: 'budapest-museum-of-fine-arts-budapest-hungary',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Last entry 30 minutes before closing. Located in Heroes Square.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 4200,
        senior: 2100,
        seniorAge: 62,
        student: 2100,
        child: 0,
        childMaxAge: 6,
        currency: 'HUF',
        notes: 'About €10 adult. EU students free with ID. Budapest Card provides free entry.',
        freeDay: null,
        euStudentFree: true,
        memberFree: true,
        budapestCard: true
      },
      tickets: {
        onlineUrl: 'https://www.szepmuveszeti.hu/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets skip queues. Budapest Card excellent value if visiting multiple sites.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['November', 'January', 'February', 'March'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Never overwhelming. One of Central Europes finest collections, often overlooked by tourists.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
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
        parking: false,
        parkingNotes: 'Heroes Square area. Street parking available.',
        nearbyParking: 'City Park parking',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['hu', 'en', 'de', 'fr', 'it', 'es', 'ru'],
        audioGuideCost: 1500,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of Central Europes finest Old Masters collections',
        'EU students FREE with ID',
        'Budapest Card covers this and many other attractions',
        'Exceptional Spanish paintings (El Greco, Goya, Velázquez)',
        'Heroes Square outside is iconic for photos',
        'Metro M1 (yellow line) to Hősök tere',
        'Combine with nearby Vajdahunyad Castle and City Park',
        'The Egyptian collection is surprisingly good'
      ],
      mustSee: [
        { name: 'The Penitent Magdalene', artist: 'El Greco' },
        { name: 'The Water Seller of Seville', artist: 'Diego Velázquez' },
        { name: 'Portrait of a Young Man', artist: 'Raphael' },
        { name: 'Egyptian Collection', note: 'Significant holdings from ancient Egypt' }
      ]
    },
    faqs: [
      { question: 'How much is Budapest Museum of Fine Arts?', answer: '4200 HUF (about €10). EU students free with ID. Budapest Card provides free entry.' },
      { question: 'What is special about Budapest Museum of Fine Arts?', answer: 'One of Central Europes finest Old Masters collections with exceptional Spanish paintings (El Greco, Goya, Velázquez) rarely matched outside Spain.' },
      { question: 'Where is Budapest Museum of Fine Arts?', answer: 'Heroes Square (Hősök tere) at the end of Andrássy Avenue. Metro M1 to Hősök tere stop.' }
    ]
  },
  {
    slug: 'van-gogh-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '18:00' },
          tuesday: { open: '09:00', close: '18:00' },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '21:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { open: '09:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-25', close: '17:00', reason: 'Christmas Day early close' },
          { date: '2026-01-01', open: '11:00', reason: "New Year's Day late opening" }
        ],
        notes: 'Open daily. Friday late opening until 9pm. Worlds largest Van Gogh collection. Advance booking essential.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 25,
        senior: 25,
        student: 25,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free but still need ticket. Museumkaart holders free. One of Amsterdams most expensive museums.',
        freeDay: null,
        memberFree: true,
        museumkaart: true
      },
      tickets: {
        onlineUrl: 'https://www.vangoghmuseum.nl/en/visit/tickets',
        onlineRequired: true,
        walkUpAvailable: false,
        skipTheLine: true,
        advanceRequired: true,
        advanceRecommended: true,
        advanceWindow: '28 days',
        sameDayAvailable: 'Limited',
        peakSeasonAdvanceBooking: '2-4 weeks',
        notes: 'ADVANCE BOOKING ESSENTIAL. Sells out days/weeks ahead, especially weekends. Book immediately when planning trip.'
      },
      crowdData: {
        overall: 'Very Heavy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday', 'Friday evening'],
        bestTimes: ['09:00 (first entry)', '17:00-18:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April (tulip season)', 'July', 'August'],
        seasonalNotes: 'One of worlds most visited museums. Always busy. First entry slot (9am) is quietest.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Le Tambourin & Museum Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Van Gogh Museum Shop (extensive)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Museum Quarter. No museum parking.',
        nearbyParking: 'Q-Park Museumplein (underground)',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'fr', 'de', 'es', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'],
        audioGuideCost: 0,
        audioGuideNote: 'Free multimedia guide included',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'BOOK WEEKS IN ADVANCE. Sells out constantly.',
        'First entry slot (9am) is least crowded',
        'Friday evenings until 9pm are atmospheric but busy',
        'Under 18 free but still need to book ticket',
        'Audio guide is excellent and included free',
        'The museum tells Van Goghs life story chronologically',
        'Tram 2, 5, or 12 to Van Baerlestraat',
        'Combine with Rijksmuseum and Stedelijk (all on Museumplein)'
      ],
      mustSee: [
        { name: 'Sunflowers', artist: 'Vincent van Gogh' },
        { name: 'The Bedroom', artist: 'Vincent van Gogh' },
        { name: 'Almond Blossom', artist: 'Vincent van Gogh' },
        { name: 'Wheatfield with Crows', artist: 'Vincent van Gogh' }
      ]
    },
    faqs: [
      { question: 'Do I need to book Van Gogh Museum in advance?', answer: 'Yes, essential. Sells out days or weeks ahead, especially weekends and peak season. Book immediately when planning your trip.' },
      { question: 'How much is Van Gogh Museum?', answer: '€25 adults. Under 18 free but still need ticket. Museumkaart holders free.' },
      { question: 'What is the best time to visit Van Gogh Museum?', answer: 'First entry slot (9am) weekdays is quietest. Friday evenings until 9pm are atmospheric. Winter months less crowded than spring/summer.' }
    ]
  },
  {
    slug: 'ashmolean-museum-oxford-uk',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '14:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open daily 10am-5pm. FREE admission. Worlds first university museum (founded 1683).',
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
        onlineUrl: 'https://www.ashmolean.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for permanent collection. Special exhibitions may require booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Oxford term times bring students but museum remains manageable. Summer tourists increase crowds.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Ashmolean Café',
        restaurant: true,
        restaurantName: 'Ashmolean Rooftop Restaurant',
        giftShop: true,
        giftShopName: 'Ashmolean Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Oxford. Limited parking.',
        nearbyParking: 'Gloucester Green car park, Park & Ride recommended',
        strollerRental: false,
        wheelchairRental: true,
        rooftopDining: true,
        rooftopDiningNote: 'Rooftop restaurant with Oxford views'
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
        'ALWAYS FREE. Worlds first university museum (1683).',
        'Rooftop restaurant has lovely Oxford views',
        'The Alfred Jewel is the famous treasure',
        'Strong Egyptian and antiquities collections',
        'Excellent Pre-Raphaelite drawings',
        'Train from London Paddington to Oxford (1 hour)',
        'Combine with Bodleian Library and Oxford colleges',
        'The building was beautifully renovated in 2009'
      ],
      mustSee: [
        { name: 'The Alfred Jewel', note: '9th-century Anglo-Saxon treasure' },
        { name: 'Messiah Stradivarius', note: 'One of finest surviving Stradivari violins' },
        { name: 'The Hunt in the Forest', artist: 'Paolo Uccello' },
        { name: 'Egyptian Mummies Collection', note: 'Extensive holdings' }
      ]
    },
    faqs: [
      { question: 'Is the Ashmolean Museum free?', answer: 'Yes, always free. Donations welcome. Special exhibitions may have a charge.' },
      { question: 'What is the Alfred Jewel?', answer: 'A 9th-century Anglo-Saxon gold and enamel ornament, possibly made for King Alfred the Great. The museums most famous treasure.' },
      { question: 'Is the Ashmolean worth visiting from London?', answer: 'Yes, one hour by train from Paddington. Combine with Oxford University, Bodleian Library, and colleges for a full day.' }
    ]
  },
  {
    slug: 'brooklyn-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '22:00' },
          friday: { open: '11:00', close: '22:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. Thursday and Friday extended hours until 10pm. Suggested admission (pay what you wish).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'PAY WHAT YOU WISH (suggested $16). Under 19 always free. First Saturday of month FREE with special programming 5pm-11pm.',
        suggestedDonation: 16,
        freeDay: 'First Saturday 5pm-11pm',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.brooklynmuseum.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Pay what you wish. First Saturday events are free and popular (arrive early).'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Wednesday', 'Sunday'],
        worstDays: ['First Saturday (free event)', 'Saturday'],
        bestTimes: ['11:00-14:00', '20:00-22:00 (Thu/Fri)'],
        worstTimes: ['14:00-17:00 weekends'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'First Saturday events draw thousands. Thursday and Friday evenings until 10pm are relaxed.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Norm\'s Cafe',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Prospect Heights, Brooklyn',
        nearbyParking: 'Street parking, nearby lots',
        strollerRental: false,
        wheelchairRental: true,
        sculpture: true,
        sculptureNote: 'Outdoor sculptures and Prospect Park adjacent'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Pay what you wish. Suggested $16 but any amount accepted.',
        'Under 19 always free',
        'First Saturday 5pm-11pm is free with live music, performances',
        'Outstanding Egyptian collection, one of best outside Egypt',
        'Feminist Art Wing is pioneering',
        'Thursday and Friday until 10pm for evening visits',
        'Subway 2/3 to Eastern Parkway-Brooklyn Museum',
        'Adjacent to Prospect Park and Brooklyn Botanic Garden'
      ],
      mustSee: [
        { name: 'Egyptian Galleries', note: 'One of finest collections outside Egypt' },
        { name: 'The Dinner Party', artist: 'Judy Chicago', location: 'Elizabeth A. Sackler Center' },
        { name: 'Period Rooms', note: 'Historic American interiors' },
        { name: 'Kehinde Wiley and contemporary holdings', note: 'Strong contemporary collection' }
      ]
    },
    faqs: [
      { question: 'How much is Brooklyn Museum?', answer: 'Pay what you wish. Suggested $16 but pay what you can. Under 19 always free.' },
      { question: 'What is First Saturday at Brooklyn Museum?', answer: 'Free entry first Saturday of each month 5pm-11pm with live music, dancing, performances, and extended hours.' },
      { question: 'Is Brooklyn Museum worth visiting?', answer: 'Yes, encyclopedic collection rivaling major museums. Outstanding Egyptian art, American period rooms, feminist art, and contemporary works.' }
    ]
  },
  {
    slug: 'saint-louis-art-museum-st-louis-mo-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Friday extended hours until 9pm. ALWAYS FREE (one of few major US museums still free).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE. One of Americas finest free art museums. Special exhibitions may have a fee.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.slam.org/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. Special exhibitions may require timed tickets.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Friday)'],
        worstTimes: ['13:00-15:00 weekends'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['June', 'July'],
        seasonalNotes: 'Never overwhelming. One of Americas great free museums in beautiful Forest Park.',
        avgVisitDuration: '2 hours',
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
        parkingCost: 0,
        parkingNotes: 'Free parking in museum lots and Forest Park',
        strollerRental: true,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Outdoor Sculpture Garden and Forest Park'
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
        'ALWAYS FREE. One of Americas best free art museums.',
        'Free parking too. Truly no cost to visit.',
        'Friday evenings until 9pm',
        'Beautiful 1904 Worlds Fair building',
        'Outstanding German Expressionist collection',
        'Located in Forest Park. Combine with Zoo (also free).',
        'MetroLink to Forest Park station, then free shuttle',
        'Max Beckmann holdings are exceptional'
      ],
      mustSee: [
        { name: 'Bathers with a Turtle', artist: 'Henri Matisse' },
        { name: 'Portrait of the Artist', artist: 'Max Beckmann' },
        { name: 'The Night', artist: 'Max Beckmann' },
        { name: 'Monet Gallery', note: 'Strong Impressionist collection' }
      ]
    },
    faqs: [
      { question: 'Is Saint Louis Art Museum free?', answer: 'Yes, always free with free parking. One of Americas finest free art museums.' },
      { question: 'Where is Saint Louis Art Museum?', answer: 'In Forest Park (site of 1904 Worlds Fair). The park also has a free zoo, science center, and history museum.' },
      { question: 'What is Saint Louis Art Museum known for?', answer: 'Exceptional German Expressionism (Max Beckmann), strong Impressionists, and being completely free since 1907.' }
    ]
  },
  {
    slug: 'wadsworth-atheneum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. Americas oldest public art museum (founded 1842).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 22,
        senior: 18,
        seniorAge: 62,
        student: 18,
        child: 0,
        childMaxAge: 4,
        youth: 8,
        youthAgeRange: '5-17',
        currency: 'USD',
        notes: 'Under 5 free. Youth (5-17) $8. Free for Hartford residents Saturdays (with ID).',
        freeDay: 'Saturday (Hartford residents with ID)',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.thewadsworth.org/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Advance tickets available but walk-up usually fine. Hartford residents free Saturdays.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['All months relatively quiet'],
        worstMonths: ['None'],
        seasonalNotes: 'Rarely crowded. A hidden gem. Americas oldest public art museum deserves more visitors.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Street parking and nearby garages in downtown Hartford',
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
        'Americas oldest public art museum (1842). Historic significance.',
        'Hartford residents free on Saturdays',
        'Exceptional Hudson River School paintings',
        'Caravaggios Ecstasy of St. Francis is a highlight',
        'First museum to acquire Picasso, Dalí, Balthus, others',
        'Train from NYC to Hartford (2.5 hours) or drive',
        'Downtown Hartford location, walkable from train station',
        'The Nutcracker ballet tradition started here'
      ],
      mustSee: [
        { name: 'The Ecstasy of St. Francis', artist: 'Caravaggio' },
        { name: 'View of Monte Cavo', artist: 'Thomas Cole', note: 'Hudson River School' },
        { name: 'The Nightmare', artist: 'Johann Heinrich Füssli' },
        { name: 'Surrealism Collection', note: 'Pioneering collection, first to buy Dalí' }
      ]
    },
    faqs: [
      { question: 'What is special about Wadsworth Atheneum?', answer: 'Americas oldest public art museum (1842). Pioneered collecting modern art: first to acquire Picasso, Dalí, Balthus, Mondrian, Calder, Ernst.' },
      { question: 'When is Wadsworth Atheneum free?', answer: 'Free Saturdays for Hartford residents with ID.' },
      { question: 'Is Wadsworth Atheneum worth visiting from NYC?', answer: 'Yes, 2.5 hours by train. Americas oldest public museum with Caravaggio, Hudson River School, and pioneering surrealism collection.' }
    ]
  }
];

async function enrichMuseums() {
  console.log('Enriching museums with full details (batch 2)...\\n');

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

  console.log('\\nBatch 2 enrichment complete!');
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
