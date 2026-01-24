const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'tate-modern-london-uk',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '22:00' },
          saturday: { open: '10:00', close: '22:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '17:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Friday and Saturday late opening until 10pm. Last entry 45 minutes before closing. Free permanent collection.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE permanent collection. Special exhibitions charged separately (typically £18-22). Members get free exhibition entry.',
        freeDay: 'Every day',
        specialExhibitionFee: '18-22',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.tate.org.uk/visit/tate-modern',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week for exhibitions',
        notes: 'Free timed tickets for popular exhibitions sell out. Book ahead for special shows.'
      },
      crowdData: {
        overall: 'Heavy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-11:00', '20:00-22:00 (Fri/Sat)'],
        worstTimes: ['12:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'One of London most visited attractions. Friday and Saturday evenings are magical with fewer crowds. School holidays very busy.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Tate Modern Kitchen & Bar (Level 1)',
        restaurant: true,
        restaurantName: 'Tate Modern Restaurant (Level 6 with views)',
        giftShop: true,
        giftShopName: 'Tate Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central London. No museum parking.',
        nearbyParking: 'Bankside area car parks',
        strollerRental: false,
        wheelchairRental: true,
        viewingPlatform: true,
        viewingPlatformNote: 'Level 10 viewing platform with panoramic London views'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 0,
        audioGuideNote: 'Free Bloomberg Connects app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE permanent collection. One of the worlds best modern art museums.',
        'Friday and Saturday until 10pm. Evening visits are atmospheric and less crowded.',
        'Level 10 viewing platform offers stunning free views of London',
        'Walk across Millennium Bridge from St Pauls for the iconic approach',
        'The building itself (former Bankside Power Station) is spectacular',
        'Turbine Hall installations are always free and often extraordinary',
        'Combine with Tate Britain via the Tate Boat (river service)',
        'Tube: Southwark (Jubilee) or Blackfriars (Circle/District), or walk from London Bridge'
      ],
      mustSee: [
        { name: 'Turbine Hall Installation', note: 'Changes annually. Always free and spectacular.' },
        { name: 'Rothko Room', location: 'Level 3', note: 'Seagram Murals in dedicated contemplative space' },
        { name: 'The Snail', artist: 'Henri Matisse', note: 'Iconic paper cut-out' },
        { name: 'Weeping Woman', artist: 'Pablo Picasso' }
      ]
    },
    faqs: [
      { question: 'Is Tate Modern free?', answer: 'Yes, permanent collection always free. Special exhibitions typically £18-22. Tate Members get free exhibition entry.' },
      { question: 'What are Tate Modern late hours?', answer: 'Friday and Saturday open until 10pm. Great for evening visits with fewer crowds and atmospheric lighting.' },
      { question: 'How do I get to Tate Modern?', answer: 'Tube to Southwark or Blackfriars, or walk across Millennium Bridge from St Pauls. The Tate Boat connects to Tate Britain.' }
    ]
  },
  {
    slug: 'mfa-boston',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '22:00' },
          thursday: { open: '10:00', close: '22:00' },
          friday: { open: '10:00', close: '22:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open late Wed-Fri until 10pm. Free Wednesday evenings after 4pm (excluding special exhibitions).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 27,
        senior: 25,
        seniorAge: 65,
        student: 25,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Under 18 free on weekdays, weekends $10 (youth 7-17). Free Wednesday after 4pm. MFA members free.',
        freeDay: 'Wednesday 4pm-10pm (excluding special exhibitions)',
        freeHours: '16:00-22:00',
        memberFree: true,
        youthWeekend: 10
      },
      tickets: {
        onlineUrl: 'https://www.mfa.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Timed tickets recommended for special exhibitions. Wednesday evenings popular due to free admission.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Wednesday evening (free)', 'Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '20:00-22:00 (Wed-Fri)'],
        worstTimes: ['16:00-18:00 Wednesday', '13:00-16:00 weekends'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August', 'April (school holidays)'],
        seasonalNotes: 'Free Wednesday evenings are popular. Late evening visits Wed-Fri offer quiet galleries.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Garden Cafeteria, New American Café',
        restaurant: true,
        restaurantName: 'Bravo (fine dining)',
        giftShop: true,
        giftShopName: 'MFA Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 28,
        parkingNotes: 'Museum garage $28/day. Reduced rates after 3pm and on weekends.',
        strollerRental: true,
        wheelchairRental: true,
        garden: true,
        gardenNote: 'Tenshin-en Japanese garden'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es', 'fr', 'de', 'ja', 'zh', 'ko'],
        audioGuideCost: 0,
        audioGuideNote: 'Free MFA Mobile app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        touchGallery: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Free Wednesday evenings after 4pm. Best deal in Boston.',
        'Under 18 free on weekdays. Families should visit Mon-Fri.',
        'Late hours Wed-Fri until 10pm. Evening visits are peaceful.',
        'Outstanding Asian art collection, one of the best outside Asia',
        'The Art of the Americas Wing is spectacular',
        'Japanese garden (Tenshin-en) is a hidden gem',
        'Take Green Line E to Museum of Fine Arts stop (direct)',
        'Americas best collection of Monets outside Paris'
      ],
      mustSee: [
        { name: 'La Japonaise', artist: 'Claude Monet', note: 'Monets wife in a kimono' },
        { name: 'Where Do We Come From?', artist: 'Paul Gauguin', note: 'His largest and most important work' },
        { name: 'Paul Revere Portrait', artist: 'John Singleton Copley' },
        { name: 'Japanese Art Collection', note: 'One of finest outside Japan' }
      ]
    },
    faqs: [
      { question: 'When is MFA Boston free?', answer: 'Wednesday evenings after 4pm are free (excluding special exhibitions). Under 18 free on weekdays.' },
      { question: 'How much is MFA Boston parking?', answer: '$28/day in museum garage. Reduced rates after 3pm and weekends. Green Line E train stops directly at museum.' },
      { question: 'What is the best art at MFA Boston?', answer: 'Outstanding Impressionists (best Monets in Americas), exceptional Asian art collection, American art including Copley and Sargent.' }
    ]
  },
  {
    slug: 'tate-britain',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '16:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10am-6pm. Late Tate events (special evening openings) occur periodically. Free permanent collection.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE permanent collection. Special exhibitions charged separately (typically £18-22). Tate Members free for all exhibitions.',
        freeDay: 'Every day',
        specialExhibitionFee: '18-22',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.tate.org.uk/visit/tate-britain',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Book ahead for popular exhibitions. Free galleries require no ticket.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '16:00-18:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Less crowded than Tate Modern. Turner galleries especially peaceful in mornings.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Tate Britain Café',
        restaurant: true,
        restaurantName: 'Rex Whistler Restaurant (historic murals)',
        giftShop: true,
        giftShopName: 'Tate Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central London. No museum parking.',
        strollerRental: false,
        wheelchairRental: true,
        historicRestaurant: true,
        historicRestaurantNote: 'Rex Whistler murals in the restaurant are worth seeing'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 0,
        audioGuideNote: 'Free Bloomberg Connects app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE permanent collection. The definitive home of British art.',
        'The Clore Gallery houses the worlds largest Turner collection',
        'Less crowded than Tate Modern. More contemplative atmosphere.',
        'Rex Whistler Restaurant has beautiful murals. Worth seeing even if not dining.',
        'Tate Boat connects to Tate Modern via the Thames (great river views)',
        'Pre-Raphaelites gallery is outstanding (Millais, Rossetti, Hunt)',
        'Tube: Pimlico (Victoria Line) 5-minute walk',
        'The chronological walk through British art is excellent education'
      ],
      mustSee: [
        { name: 'The Lady of Shalott', artist: 'John William Waterhouse' },
        { name: 'Ophelia', artist: 'John Everett Millais' },
        { name: 'The Fighting Temeraire', artist: 'J.M.W. Turner' },
        { name: 'Clore Gallery', note: 'Entire wing dedicated to Turner' }
      ]
    },
    faqs: [
      { question: 'Is Tate Britain free?', answer: 'Yes, permanent collection always free. Special exhibitions typically £18-22. Tate Members get free exhibition entry.' },
      { question: 'What is the difference between Tate Britain and Tate Modern?', answer: 'Tate Britain has British art from 1500 to present. Tate Modern has international modern and contemporary art. Connected by Tate Boat.' },
      { question: 'Does Tate Britain have Turner paintings?', answer: 'Yes, the Clore Gallery houses the worlds largest collection of J.M.W. Turner works, bequeathed by the artist himself.' }
    ]
  },
  {
    slug: 'gem228ldegalerie-berlin-germany',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Closed Mondays. Thursday late opening until 8pm. One of the worlds finest Old Masters collections.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 14,
        senior: 7,
        seniorAge: 65,
        student: 7,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Museum Pass Berlin (3-day, €34) covers this and all State Museums. Thursdays 4pm-8pm reduced to €7.',
        freeDay: null,
        thursdayEvening: 7,
        memberFree: true,
        museumPassBerlin: 34
      },
      tickets: {
        onlineUrl: 'https://www.smb.museum/en/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended. Museum Pass Berlin excellent value if visiting multiple museums.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Often overlooked for Museum Island. One of the worlds great picture galleries with manageable crowds.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café im Kulturforum',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museumshop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Kulturforum parking available',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'es', 'it', 'ru'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of the worlds great Old Masters collections. Rivals the Louvre and Prado.',
        'Thursday evenings until 8pm at reduced price (€7)',
        'Under 18 always free',
        'Museum Pass Berlin covers this plus 30+ other museums for 3 days',
        'Outstanding Dutch and Flemish paintings (Rembrandt, Vermeer)',
        'Located at Kulturforum, separate from Museum Island',
        'Bus M29 to Potsdamer Brücke or U-Bahn to Potsdamer Platz',
        'Combine with adjacent Neue Nationalgalerie and Philharmonie'
      ],
      mustSee: [
        { name: 'The Man with the Golden Helmet', artist: 'Rembrandt circle', note: 'Famous attribution debate' },
        { name: 'The Glass of Wine', artist: 'Johannes Vermeer' },
        { name: 'Portrait of a Young Lady', artist: 'Petrus Christus' },
        { name: 'Adoration of the Shepherds', artist: 'Hugo van der Goes' }
      ]
    },
    faqs: [
      { question: 'What is the Gemäldegalerie Berlin?', answer: 'One of the worlds greatest Old Masters galleries with exceptional European paintings from 13th-18th centuries, especially Dutch, Flemish, and Italian.' },
      { question: 'Is Gemäldegalerie on Museum Island?', answer: 'No, its at the Kulturforum near Potsdamer Platz. Museum Island is separate (Pergamon, Neues Museum, etc.).' },
      { question: 'When is Gemäldegalerie cheapest?', answer: 'Thursday evenings 4pm-8pm are reduced to €7. Under 18 always free. Museum Pass Berlin (€34) covers 3 days unlimited.' }
    ]
  },
  {
    slug: 'thyssenbornemisza-museum-madrid-spain',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '12:00', close: '16:00' },
          tuesday: { open: '10:00', close: '19:00' },
          wednesday: { open: '10:00', close: '19:00' },
          thursday: { open: '10:00', close: '19:00' },
          friday: { open: '10:00', close: '19:00' },
          saturday: { open: '10:00', close: '19:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Monday reduced hours 12pm-4pm and FREE. Part of Madrids Golden Triangle with Prado and Reina Sofía.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 14,
        senior: 10,
        seniorAge: 65,
        student: 10,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Students €10. FREE Mondays 12pm-4pm. Combined Paseo del Arte ticket with Prado and Reina Sofía available.',
        freeDay: 'Monday 12pm-4pm',
        freeHours: '12:00-16:00',
        memberFree: true,
        paseoDelArte: true
      },
      tickets: {
        onlineUrl: 'https://www.museothyssen.org/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets skip queues. Free Mondays can be busy. Paseo del Arte combined ticket good value.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Monday (free)', 'Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '17:00-19:00'],
        worstTimes: ['12:00-14:00 Monday'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'July', 'August'],
        seasonalNotes: 'Free Mondays draw crowds. Less overwhelming than the Prado. Part of the Golden Triangle museum walk.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café del Museo',
        restaurant: true,
        restaurantName: 'Restaurante del Museo (garden terrace)',
        giftShop: true,
        giftShopName: 'Tienda del Museo',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Madrid',
        nearbyParking: 'Parking Plaza de las Cortes',
        strollerRental: false,
        wheelchairRental: true,
        garden: true,
        gardenNote: 'Pleasant terrace garden for breaks'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['es', 'en', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'FREE every Monday 12pm-4pm. Best free museum deal in Madrid.',
        'The collection spans 700 years chronologically. Walk from top floor down.',
        'Fills gaps the Prado doesnt cover: German Expressionism, American art, Impressionists',
        'Part of Golden Triangle with Prado and Reina Sofía (walking distance)',
        'Paseo del Arte combined ticket saves money if visiting all three',
        'Metro: Banco de España (Line 2)',
        'The terrace restaurant is lovely for lunch between museums',
        'Carmen Thyssen Collection (next door) has more Impressionists'
      ],
      mustSee: [
        { name: 'Portrait of Giovanna Tornabuoni', artist: 'Domenico Ghirlandaio' },
        { name: 'Dream Caused by the Flight of a Bee', artist: 'Salvador Dalí' },
        { name: 'Hotel Room', artist: 'Edward Hopper' },
        { name: 'Swaying Dancer', artist: 'Edgar Degas' }
      ]
    },
    faqs: [
      { question: 'When is Thyssen Museum free?', answer: 'Every Monday 12pm-4pm. Under 18 free any day.' },
      { question: 'What is the Golden Triangle in Madrid?', answer: 'The Prado, Thyssen-Bornemisza, and Reina Sofía museums form Madrids Golden Triangle of Art, all within walking distance on Paseo del Arte.' },
      { question: 'What makes Thyssen different from the Prado?', answer: 'Thyssen fills gaps: German/Flemish Primitives, Impressionists, German Expressionism, and American art that the Prado lacks.' }
    ]
  },
  {
    slug: 'courtauld-gallery-london',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '14:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily. Friday late opening until 9pm. Located in Somerset House with its beautiful courtyard.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 10,
        seniorAge: 65,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'GBP',
        notes: 'Under 18 free. Full-time students FREE (with ID). Monday 10am-2pm FREE for all. Art Fund and National Art Pass accepted.',
        freeDay: 'Monday 10am-2pm',
        freeHours: '10:00-14:00',
        studentFree: true,
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://courtauld.ac.uk/gallery/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Timed tickets recommended. Free Monday mornings can be busy. Students always free.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Monday morning (free)', 'Saturday'],
        bestTimes: ['14:00-18:00', '18:00-21:00 (Friday)'],
        worstTimes: ['10:00-12:00 Monday'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Intimate museum. Never overwhelming. Friday evenings are sophisticated and quiet.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Courtauld Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Courtauld Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central London',
        nearbyParking: 'NCP Drury Lane',
        strollerRental: false,
        wheelchairRental: true,
        somersetHouse: true,
        somersetHouseNote: 'Set in beautiful Somerset House with courtyard fountain'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 0,
        audioGuideNote: 'Free Bloomberg Connects app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Monday mornings 10am-2pm FREE for everyone',
        'Full-time students FREE all the time with ID',
        'Intimate collection. Quality over quantity.',
        'A Bar at the Folies-Bergère (Manet) is the star. Dont miss it.',
        'Friday evenings until 9pm are sophisticated and quiet',
        'Somerset House courtyard is beautiful (ice rink in winter)',
        'Tube: Temple (Circle/District) or Covent Garden (Piccadilly)',
        'One of the finest Impressionist collections in Britain'
      ],
      mustSee: [
        { name: 'A Bar at the Folies-Bergère', artist: 'Édouard Manet', note: 'His final major work' },
        { name: 'Self-Portrait with Bandaged Ear', artist: 'Vincent van Gogh' },
        { name: 'Card Players', artist: 'Paul Cézanne' },
        { name: 'Nevermore', artist: 'Paul Gauguin' }
      ]
    },
    faqs: [
      { question: 'When is Courtauld Gallery free?', answer: 'Monday 10am-2pm free for all. Full-time students always free with ID. Under 18 always free.' },
      { question: 'What is the Courtauld Gallery famous for?', answer: 'Outstanding Impressionist and Post-Impressionist collection including Manets Bar at the Folies-Bergère and Van Goghs Self-Portrait with Bandaged Ear.' },
      { question: 'Where is the Courtauld Gallery?', answer: 'In Somerset House on the Strand, near Covent Garden. The building and courtyard are attractions themselves.' }
    ]
  },
  {
    slug: 'basilica-of-saint-francis-of-assisi-assisi-italy',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '06:00', close: '18:45' },
          tuesday: { open: '06:00', close: '18:45' },
          wednesday: { open: '06:00', close: '18:45' },
          thursday: { open: '06:00', close: '18:45' },
          friday: { open: '06:00', close: '18:45' },
          saturday: { open: '06:00', close: '18:45' },
          sunday: { open: '06:00', close: '18:45' }
        },
        seasonal: {
          summer: {
            period: 'Late March to Late October',
            daily: { open: '06:00', close: '18:45' }
          },
          winter: {
            period: 'Late October to Late March',
            daily: { open: '06:00', close: '17:45' }
          }
        },
        exceptions: [],
        notes: 'Lower Basilica opens at 6am, Upper Basilica opens at 8:30am. Dress code enforced (covered shoulders and knees).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'EUR',
        notes: 'FREE admission. UNESCO World Heritage Site. Donations appreciated. Guided tours available for a fee.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.sanfrancescoassisi.org/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        guidedTourCost: 'Varies',
        notes: 'No tickets needed. Guided tours can be booked in advance. Photography NOT allowed inside.'
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday', 'October 4 (Feast of St. Francis)'],
        bestTimes: ['06:00-08:30', '17:00-18:45'],
        worstTimes: ['10:00-16:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'August', 'October'],
        seasonalNotes: 'Major pilgrimage site. October 4 (Feast of St. Francis) extremely crowded. Early morning visits are peaceful and spiritual.',
        avgVisitDuration: '1-2 hours',
        recommendedDuration: '2 hours for both Upper and Lower Basilica'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        nearbyRestaurants: 'Many in Assisi town',
        giftShop: true,
        giftShopName: 'Religious articles shop',
        coatCheck: false,
        lockers: false,
        wifi: false,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Parking lots outside Assisi walls. Shuttle or walk to basilica.',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Lower Basilica accessible. Upper Basilica has stairs.',
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es', 'pt', 'pl'],
        audioGuideCost: 'Varies',
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false
      },
      tips: [
        'FREE entry. One of Italys most important pilgrimage sites.',
        'NO PHOTOGRAPHY inside. Rules strictly enforced.',
        'Dress code: covered shoulders and knees required',
        'Early morning (6-8:30am) is most peaceful and spiritual',
        'Two levels: Lower Basilica (Giottos frescoes) and Upper Basilica (Life of St. Francis)',
        'October 4 is Feast of St. Francis. Beautiful but extremely crowded.',
        'The Giotto frescoes are among the most important in Western art',
        'Allow time to walk through beautiful Assisi town'
      ],
      mustSee: [
        { name: 'Life of St. Francis Fresco Cycle', artist: 'Giotto', location: 'Upper Basilica' },
        { name: 'Tomb of St. Francis', location: 'Crypt' },
        { name: 'Frescoes by Cimabue', location: 'Transept' },
        { name: 'Frescoes by Simone Martini', location: 'Chapel of St. Martin' }
      ]
    },
    faqs: [
      { question: 'Is the Basilica of St. Francis free?', answer: 'Yes, always free. Its a church and pilgrimage site. Donations appreciated but not required.' },
      { question: 'Can I take photos in the Basilica of Assisi?', answer: 'No, photography is strictly prohibited inside both the Upper and Lower Basilica to protect the frescoes and maintain reverence.' },
      { question: 'What should I wear to visit Assisi Basilica?', answer: 'Dress code enforced: covered shoulders and knees. No shorts, tank tops, or revealing clothing.' }
    ]
  },
  {
    slug: 'kunstmuseum-basel',
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
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Closed Mondays. Wednesday late opening until 8pm. Three venues: Hauptbau (main), Neubau (new), and Gegenwart (contemporary).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 25,
        senior: 20,
        seniorAge: 65,
        student: 20,
        child: 0,
        childMaxAge: 18,
        currency: 'CHF',
        notes: 'Under 19 free. One ticket covers all three buildings. First Sunday of month free for Swiss residents. Basel Card holders discounted.',
        freeDay: 'First Sunday (Swiss residents)',
        memberFree: true,
        allBuildingsIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.kunstmuseumbasel.ch/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Single ticket covers all three buildings. During Art Basel week (June), advance booking essential.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Sunday', 'Art Basel week (June)'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Wednesday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['June (Art Basel)', 'August'],
        seasonalNotes: 'Art Basel week in June brings international crowds. Otherwise manageable. One of oldest public art collections in the world.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '4 hours for all three buildings'
      },
      amenities: {
        cafe: true,
        cafeName: 'Kunstmuseum Bistro',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Basel',
        nearbyParking: 'Parking Steinen, Parking Storchen',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of the oldest public art collections in the world (founded 1661)',
        'Under 19 always free. Excellent for families.',
        'One ticket covers three buildings (Hauptbau, Neubau, Gegenwart)',
        'Wednesday evenings until 8pm',
        'Exceptional Holbein collection (he lived in Basel)',
        'Strong Picasso holdings from Basel citizens purchase in 1967',
        'Avoid Art Basel fair week (June) unless thats your purpose',
        'Tram 2 to Kunstmuseum stop'
      ],
      mustSee: [
        { name: 'The Dead Christ in the Tomb', artist: 'Hans Holbein the Younger', note: 'Disturbed Dostoyevsky' },
        { name: 'Three Dancers', artist: 'Pablo Picasso' },
        { name: 'Les Deux Frères', artist: 'Pablo Picasso' },
        { name: 'Burning Giraffe', artist: 'Salvador Dalí' }
      ]
    },
    faqs: [
      { question: 'How much is Kunstmuseum Basel?', answer: 'CHF 25 adults. Under 19 free. One ticket covers all three museum buildings. Basel Card provides discount.' },
      { question: 'What is special about Kunstmuseum Basel?', answer: 'One of the worlds oldest public art collections (1661). Exceptional Holbein collection and major Picasso holdings from a famous 1967 public vote.' },
      { question: 'How many buildings does Kunstmuseum Basel have?', answer: 'Three: Hauptbau (main building, Old Masters to 1950s), Neubau (new building, modern), and Gegenwart (contemporary). One ticket covers all.' }
    ]
  },
  {
    slug: 'philadelphia-museum-of-art',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '20:45' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. Friday late opening until 8:45pm. The Rocky Steps are always accessible.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 30,
        senior: 28,
        seniorAge: 65,
        student: 28,
        child: 0,
        childMaxAge: 18,
        currency: 'USD',
        notes: 'Under 19 free. Students $28. Pay What You Wish on first Sunday and every Friday evening after 5pm.',
        freeDay: 'First Sunday of month; Friday 5pm-8:45pm (Pay What You Wish)',
        memberFree: true,
        payWhatYouWish: true
      },
      tickets: {
        onlineUrl: 'https://www.philamuseum.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Ticket valid for 2 consecutive days and includes Rodin Museum. Pay What You Wish times popular.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['First Sunday (Pay What You Wish)', 'Saturday'],
        bestTimes: ['10:00-12:00', '17:00-20:45 (Friday)'],
        worstTimes: ['12:00-16:00 weekends'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Rocky Steps outside always busy. Inside galleries manageable. Friday evenings are sophisticated.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: true,
        restaurantName: 'Stir (upscale)',
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 20,
        parkingNotes: 'Parking garage behind museum $20/day',
        strollerRental: true,
        wheelchairRental: true,
        rockySteps: true,
        rockyStepsNote: 'Famous steps and statue outside always free'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es', 'fr', 'de', 'it', 'zh', 'ja', 'ko'],
        audioGuideCost: 0,
        audioGuideNote: 'Free app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 19 always free. Families should prioritize this museum.',
        'Pay What You Wish: First Sunday and Friday evenings after 5pm',
        'Your ticket is valid for 2 consecutive days and includes Rodin Museum',
        'Yes, run up the Rocky Steps. The statue is to the right at the bottom.',
        'Outstanding collection of medieval armor',
        'Reconstructed architectural spaces (temple, cloister, etc.) are remarkable',
        'The Van Gogh Sunflowers here is exceptional',
        'Take SEPTA bus 38 or drive and park in museum garage'
      ],
      mustSee: [
        { name: 'Sunflowers', artist: 'Vincent van Gogh' },
        { name: 'The Large Bathers', artist: 'Paul Cézanne', note: 'His culminating work' },
        { name: 'Nude Descending a Staircase', artist: 'Marcel Duchamp' },
        { name: 'Arms and Armor Collection', note: 'One of Americas finest' }
      ]
    },
    faqs: [
      { question: 'When is Philadelphia Museum of Art free?', answer: 'Pay What You Wish on first Sunday of month and every Friday after 5pm. Under 19 always free.' },
      { question: 'Are the Rocky Steps at the Philadelphia Museum of Art?', answer: 'Yes, the famous steps from the Rocky movies are the main entrance. The Rocky statue is at the base, to the right.' },
      { question: 'Does the ticket include the Rodin Museum?', answer: 'Yes, your ticket covers both the main museum and the Rodin Museum (nearby on Benjamin Franklin Parkway) for 2 consecutive days.' }
    ]
  },
  {
    slug: 'st228del-frankfurt-am-main-germany',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Closed Mondays. Wednesday and Thursday late opening until 9pm. One of Germanys most important art museums.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 14,
        seniorAge: 65,
        student: 14,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Students €14. Free for children under 12 to special exhibitions too. Frankfurt Card holders discounted.',
        freeDay: null,
        memberFree: true,
        frankfurtCard: true
      },
      tickets: {
        onlineUrl: 'https://www.staedelmuseum.de/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended for special exhibitions. The digital collection online is also exceptional.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['10:00-12:00', '18:00-21:00 (Wed/Thu)'],
        worstTimes: ['14:00-16:00 Sunday'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Wednesday and Thursday evenings until 9pm are peaceful. One of Germanys most visited art museums.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Holbeins',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Städel Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Museumsufer area',
        nearbyParking: 'Parkhaus Am Theater, various in Sachsenhausen',
        strollerRental: false,
        wheelchairRental: true,
        gardenCourts: true,
        gardenCourtsNote: 'Underground extension has sky-lit garden courts'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 18 always free. Great for families.',
        'Wednesday and Thursday evenings until 9pm',
        'The underground Garden Halls extension is architecturally stunning',
        'Exceptional digital collection available free online',
        'Outstanding German art from Cranach to Richter',
        'Part of Frankfurts Museumsufer (museum riverbank) with 15+ museums',
        'U-Bahn U1/U2/U3 to Schweizer Platz, then walk',
        'Combine with other Museumsufer museums for a full day'
      ],
      mustSee: [
        { name: "Goethe in the Roman Campagna", artist: 'Johann Heinrich Wilhelm Tischbein' },
        { name: 'The Geographer', artist: 'Johannes Vermeer' },
        { name: 'Portrait of a Lady', artist: 'Rogier van der Weyden' },
        { name: 'Garden Halls', note: 'Underground extension with contemporary art' }
      ]
    },
    faqs: [
      { question: 'What is the Städel Museum?', answer: 'One of Germanys oldest and most important art museums, with 700 years of European art from medieval to contemporary in one of the finest collections.' },
      { question: 'When is Städel Museum open late?', answer: 'Wednesday and Thursday until 9pm. Great for evening visits after work.' },
      { question: 'What is Frankfurts Museumsufer?', answer: 'Museum Embankment: 15+ museums along the Main River including Städel, making Frankfurt one of Germanys top museum cities.' }
    ]
  }
];

async function enrichMuseums() {
  console.log('Enriching museums with full details (batch 1 of museums needing enrichment)...\\n');

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

  console.log('\\nBatch 1 enrichment complete!');
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
