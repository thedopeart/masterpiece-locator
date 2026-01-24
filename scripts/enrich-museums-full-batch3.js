const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'mus233e-national-gustave-moreau-paris-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:15' },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '17:15' },
          thursday: { open: '10:00', close: '17:15' },
          friday: { open: '10:00', close: '17:15' },
          saturday: { open: '10:00', close: '17:15' },
          sunday: { open: '10:00', close: '17:15' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Tuesdays. Small intimate museum in the artists former home and studio. Unique spiral staircase.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 8,
        senior: 6,
        seniorAge: 65,
        student: 6,
        child: 0,
        childMaxAge: 25,
        currency: 'EUR',
        notes: 'EU under 26 free. First Sunday of month free. Paris Museum Pass accepted.',
        freeDay: 'First Sunday of month',
        euUnder26Free: true,
        memberFree: true,
        parisMuseumPass: true
      },
      tickets: {
        onlineUrl: 'https://musee-moreau.fr/en',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Rarely crowded. Walk-up fine. Paris Museum Pass accepted.'
      },
      crowdData: {
        overall: 'Very Light',
        bestDays: ['Any open day'],
        worstDays: ['First Sunday (still quiet)'],
        bestTimes: ['10:00-17:00 (all hours quiet)'],
        worstTimes: ['None'],
        bestMonths: ['All months'],
        worstMonths: ['None'],
        seasonalNotes: 'One of Paris best-kept secrets. You may have the museum to yourself. Surrealists loved this place.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        nearbyRestaurants: 'Many in 9th arrondissement',
        giftShop: true,
        giftShopName: 'Small bookshop',
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'Central Paris',
        nearbyParking: 'Various',
        strollerRental: false,
        wheelchairRental: false,
        artistStudio: true,
        artistStudioNote: 'Original studio with spiral staircase preserved'
      },
      accessibility: {
        wheelchairAccessible: 'Limited',
        accessibilityNote: 'Historic house with stairs. Ground floor accessible only.',
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: false,
        elevatorAccess: false
      },
      tips: [
        'One of Paris best hidden gems. Almost no tourists.',
        'EU under 26 FREE. First Sunday free for all.',
        'The artists actual home and studio, preserved as he left it',
        'The famous spiral staircase inspired Surrealists',
        'Thousands of drawings and watercolors in drawers you can open',
        'Metro Line 12 to Trinité-dEstienne dOrves',
        'Near Sacré-Coeur (15-min walk uphill)',
        'Moreau taught Matisse and Rouault at the Beaux-Arts'
      ],
      mustSee: [
        { name: 'Jupiter and Semele', artist: 'Gustave Moreau', note: 'His masterpiece' },
        { name: 'The Apparition', artist: 'Gustave Moreau', note: 'Salome with John the Baptists head' },
        { name: 'The Unicorns', artist: 'Gustave Moreau' },
        { name: 'The Spiral Staircase', note: 'Architectural feature, beloved by Surrealists' }
      ]
    },
    faqs: [
      { question: 'What is the Gustave Moreau Museum?', answer: 'The Symbolist painters home and studio, preserved as he designed it. Thousands of works in an intimate setting.' },
      { question: 'Is Musée Gustave Moreau crowded?', answer: 'Almost never. One of Paris most peaceful museums. You may have galleries to yourself.' },
      { question: 'Why did Surrealists love this museum?', answer: 'André Bretons called it his favorite. The dreamlike paintings and mysterious spiral staircase inspired the Surrealist movement.' }
    ]
  },
  {
    slug: 'national-gallery-oslo',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '21:00' },
          wednesday: { open: '10:00', close: '18:00' },
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
        notes: 'Closed Mondays. Tuesday late opening until 9pm. Now located in the new National Museum building (opened 2022).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 200,
        senior: 100,
        seniorAge: 67,
        student: 100,
        child: 0,
        childMaxAge: 17,
        currency: 'NOK',
        notes: 'About €17 adult. Under 18 free. Students/seniors NOK 100. Oslo Pass holders free.',
        freeDay: null,
        memberFree: true,
        osloPass: true
      },
      tickets: {
        onlineUrl: 'https://www.nasjonalmuseet.no/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'New building (2022) draws crowds. Book ahead for weekends. Home of The Scream.'
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Tuesday)'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'New museum very popular. The Scream room always busy. Tuesday evenings quieter.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Nasjonalmuseet Café',
        restaurant: true,
        restaurantName: 'VAAGHALS Restaurant',
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Oslo harbor area',
        nearbyParking: 'Aker Brygge parking',
        strollerRental: false,
        wheelchairRental: true,
        rooftop: true,
        rooftopNote: 'Light Hall with panoramic Oslo views'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['no', 'en', 'de', 'fr', 'es'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Home of The Scream by Edvard Munch (the painted version)',
        'Brand new building opened 2022. Norways largest art museum.',
        'Under 18 free. Oslo Pass provides free entry.',
        'Tuesday evenings until 9pm are less crowded',
        'The Light Hall (rooftop) has panoramic Oslo views',
        'Outstanding Norwegian art from Munch, Sohlberg, Kittelsen',
        'Tram to Aker Brygge or walk from Central Station',
        'Combine with nearby Nobel Peace Center'
      ],
      mustSee: [
        { name: 'The Scream', artist: 'Edvard Munch', note: 'The 1893 tempera/pastel version' },
        { name: 'Winter Night in the Mountains', artist: 'Harald Sohlberg' },
        { name: 'Bridal Procession on the Hardangerfjord', artist: 'Adolph Tidemand & Hans Gude' },
        { name: 'Light Hall', note: 'Rooftop space with panoramic views' }
      ]
    },
    faqs: [
      { question: 'Is The Scream at the National Gallery Oslo?', answer: 'Yes, the 1893 tempera/pastel version is here. The Munch Museum has other versions.' },
      { question: 'How much is National Museum Oslo?', answer: 'NOK 200 (about €17) adults. Under 18 free. Students/seniors NOK 100. Oslo Pass holders free.' },
      { question: 'Is the Oslo National Museum new?', answer: 'Yes, the stunning new building opened in 2022, combining several former museums into Northern Europes largest art museum.' }
    ]
  },
  {
    slug: 'yale-centre-for-british-art-yale-university-new-ha',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Sunday opens noon. Thursday late opening until 8pm. ALWAYS FREE.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE. The largest collection of British art outside the UK.',
        freeDay: 'Every day',
        donationSuggested: false
      },
      tickets: {
        onlineUrl: 'https://britishart.yale.edu/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. Louis Kahn building is magnificent.'
      },
      crowdData: {
        overall: 'Very Light',
        bestDays: ['Any day'],
        worstDays: ['None'],
        bestTimes: ['All hours quiet'],
        worstTimes: ['None'],
        bestMonths: ['All months'],
        worstMonths: ['None'],
        seasonalNotes: 'Rarely crowded. A peaceful scholarly atmosphere. One of Americas finest museum buildings.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Reference Library Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Downtown New Haven',
        nearbyParking: 'Temple Street Garage, York Street lot',
        strollerRental: false,
        wheelchairRental: true,
        library: true,
        libraryNote: 'Reference library for British art research'
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
        'ALWAYS FREE. Largest British art collection outside UK.',
        'Louis Kahn building (his final work) is architectural masterpiece',
        'Natural light throughout. Visit on a sunny day.',
        'Outstanding Turner, Constable, and Gainsborough',
        'Thursday evenings until 8pm',
        'Train from NYC to New Haven (1.5 hours)',
        'Across from Yale Art Gallery (also free, also Kahn)',
        'Reference library available for research'
      ],
      mustSee: [
        { name: 'The Blue Boy study', artist: 'Thomas Gainsborough' },
        { name: 'Turner Paintings Collection', note: 'Outstanding seascapes' },
        { name: 'Constable Landscape Studies', note: 'Oil sketches' },
        { name: 'The Building', artist: 'Louis Kahn', note: 'His final masterpiece' }
      ]
    },
    faqs: [
      { question: 'Is Yale Center for British Art free?', answer: 'Yes, always free. No tickets required.' },
      { question: 'What makes the building special?', answer: 'Designed by Louis Kahn (his final building), its considered one of Americas greatest museum structures, with natural light throughout.' },
      { question: 'Is it worth visiting from NYC?', answer: 'Yes, 1.5 hours by train. Two world-class free museums (British Art and Yale Art Gallery), both in Louis Kahn buildings.' }
    ]
  },
  {
    slug: 'gem228ldegalerie-alte-meister-dresden-germany',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Located in the Zwinger Palace. Home of the Sistine Madonna.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 12,
        seniorAge: 65,
        student: 12,
        child: 0,
        childMaxAge: 16,
        currency: 'EUR',
        notes: 'Under 17 free. Combined ticket with Porcelain Collection. Dresden City Card holders discounted.',
        freeDay: null,
        memberFree: true,
        comboIncluded: 'Porcelain Collection'
      },
      tickets: {
        onlineUrl: 'https://www.skd.museum/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets skip queues. Ticket includes Porcelain Collection. Dresden City Card good value.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'The Sistine Madonna room is always busy. Weekday mornings best for contemplation.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café in the Zwinger',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Dresden at Zwinger Palace',
        nearbyParking: 'Semperoper parking, Altmarkt-Galerie',
        strollerRental: false,
        wheelchairRental: true,
        palace: true,
        palaceNote: 'Located in the magnificent Baroque Zwinger Palace'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'it', 'es', 'ru', 'ja', 'zh'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Home of Raphaels Sistine Madonna with the famous cherubs',
        'Under 17 free',
        'Ticket includes Porcelain Collection (same building)',
        'The Zwinger Palace itself is worth seeing (free to walk grounds)',
        'Outstanding Vermeer, Cranach, Dürer, Holbein',
        'Tram to Postplatz or Theaterplatz',
        'Combine with Semperoper and Residenzschloss nearby',
        'The Porcelain Collection has Meissen treasures'
      ],
      mustSee: [
        { name: 'Sistine Madonna', artist: 'Raphael', note: 'With the famous cherubs at bottom' },
        { name: 'Girl Reading a Letter', artist: 'Johannes Vermeer' },
        { name: 'Sleeping Venus', artist: 'Giorgione' },
        { name: 'Meissen Porcelain Collection', location: 'Same building' }
      ]
    },
    faqs: [
      { question: 'What is the Sistine Madonna?', answer: 'Raphaels masterpiece showing Mary and Christ Child with Saints Sixtus and Barbara. The two cherubs at the bottom are worlds most famous.' },
      { question: 'Is Dresden Old Masters Gallery worth visiting?', answer: 'Absolutely. One of Europes finest Old Masters collections with Raphael, Vermeer, Giorgione, and exceptional Northern Renaissance works.' },
      { question: 'What is the Zwinger?', answer: 'A magnificent Baroque palace complex housing the gallery. The courtyard and gardens are free to visit.' }
    ]
  },
  {
    slug: 'nationalmuseum-stockholm-sweden',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '19:00' },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '17:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', close: '15:00', reason: 'New Years Eve early close' }
        ],
        notes: 'Closed Mondays. Tuesday late opening until 7pm. Reopened 2018 after major renovation. FREE admission.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'SEK',
        notes: 'ALWAYS FREE permanent collection (since 2016). Special exhibitions may have a fee.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies'
      },
      tickets: {
        onlineUrl: 'https://www.nationalmuseum.se/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for permanent collection. Just walk in. Special exhibitions may require booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00', '17:00-19:00 (Tuesday)'],
        worstTimes: ['14:00-16:00 weekends'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Summer tourists increase crowds. The 2018 renovation created beautiful new galleries.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Nationalmuseum Restaurant',
        restaurant: true,
        restaurantName: 'Nationalmuseum Restaurant (waterfront views)',
        giftShop: true,
        giftShopName: 'Nationalmuseum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Stockholm waterfront',
        nearbyParking: 'Various in Norrmalm',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['sv', 'en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE permanent collection. Sweden made it free in 2016.',
        'Beautifully renovated and reopened in 2018',
        'Tuesday evenings until 7pm',
        'Outstanding Scandinavian art plus Old Masters',
        'Rembrandt, Rubens, and Renoir holdings are excellent',
        'Waterfront location with lovely views',
        'Walk from Gamla Stan (Old Town) or Kungsträdgården',
        'Restaurant has beautiful water views'
      ],
      mustSee: [
        { name: 'Midvinterblot', artist: 'Carl Larsson', note: 'Massive Viking-era painting' },
        { name: 'The Conspiracy of Claudius Civilis', artist: 'Rembrandt', note: 'Fragment of his largest painting' },
        { name: 'Swedish Design Collection', note: 'Furniture and decorative arts' },
        { name: 'Waterfront Views', note: 'Architecture and setting' }
      ]
    },
    faqs: [
      { question: 'Is Nationalmuseum Stockholm free?', answer: 'Yes, permanent collection always free since 2016. Special exhibitions may have a fee.' },
      { question: 'When was Nationalmuseum renovated?', answer: 'Closed 2013-2018 for major renovation. Reopened with beautiful new galleries and improved visitor experience.' },
      { question: 'What art is in Nationalmuseum Stockholm?', answer: 'Scandinavian art (Carl Larsson, Anders Zorn) plus Old Masters (Rembrandt, Rubens), decorative arts, and Swedish design.' }
    ]
  },
  {
    slug: 'pinacoteca-di-brera',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '08:30', close: '19:15' },
          wednesday: { open: '08:30', close: '19:15' },
          thursday: { open: '08:30', close: '22:15' },
          friday: { open: '08:30', close: '19:15' },
          saturday: { open: '08:30', close: '19:15' },
          sunday: { open: '08:30', close: '19:15' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Thursday late opening until 10:15pm. Last entry 45 minutes before closing.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 15,
        senior: 2,
        seniorAge: 65,
        student: 2,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'EU 18-25 €2. Under 18 free. First Sunday of month free. Third Thursday of month €2 (6pm-10pm).',
        freeDay: 'First Sunday of month',
        euYouth: 2,
        memberFree: true,
        thirdThursday: 2
      },
      tickets: {
        onlineUrl: 'https://pinacotecabrera.org/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        bookingFee: 2,
        notes: 'Online booking €2 fee but recommended. Third Thursday evening €2 is excellent value.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['First Sunday (free)', 'Saturday'],
        bestTimes: ['08:30-10:00', '20:00-22:00 (Thursday)'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'September'],
        seasonalNotes: 'Third Thursday evenings (€2) are popular but manageable. Milans most important art gallery.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffè Fernanda',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Bookshop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Milan, Brera district',
        nearbyParking: 'Parking Brera',
        strollerRental: false,
        wheelchairRental: true,
        courtyard: true,
        courtyardNote: 'Beautiful courtyard with Canova statue'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 5,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Third Thursday of month only €2 (6pm-10pm). Best deal in Milan.',
        'First Sunday free but crowded',
        'Under 18 always free',
        'The courtyard with Canova Napoleon statue is free to enter',
        'Outstanding Venetian Renaissance (Bellini, Mantegna, Veronese)',
        'Raphaels Marriage of the Virgin is the star',
        'Metro M2 to Lanza or M3 to Montenapoleone',
        'In the charming Brera neighborhood. Great for dinner after.'
      ],
      mustSee: [
        { name: 'Marriage of the Virgin', artist: 'Raphael' },
        { name: 'Dead Christ', artist: 'Andrea Mantegna', note: 'Dramatic foreshortening' },
        { name: 'The Kiss', artist: 'Francesco Hayez', note: 'Italian Romantic icon' },
        { name: 'Supper at Emmaus', artist: 'Caravaggio' }
      ]
    },
    faqs: [
      { question: 'When is Pinacoteca di Brera cheapest?', answer: 'Third Thursday of month 6pm-10pm is only €2. First Sunday free but crowded.' },
      { question: 'What is Brera famous for?', answer: 'Milans most important art gallery with masterpieces by Raphael, Mantegna, Caravaggio, and outstanding Venetian Renaissance paintings.' },
      { question: 'Is the Brera courtyard free?', answer: 'Yes, you can enter the courtyard with Canovas Napoleon statue without paying admission.' }
    ]
  },
  {
    slug: 'mus233e-fabre-montpellier-france',
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
        notes: 'Closed Mondays. One of Frances finest regional museums. Outstanding Soulages and Courbet collections.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 10,
        senior: 8,
        seniorAge: 65,
        student: 8,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. First Sunday of month free. Montpellier City Card accepted.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://museefabre.montpellier3m.fr/en',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Rarely crowded. Walk-up fine. One of Frances best regional museums.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Any open day'],
        worstDays: ['First Sunday (still manageable)'],
        bestTimes: ['10:00-18:00 (all hours quiet)'],
        worstTimes: ['None'],
        bestMonths: ['All months'],
        worstMonths: ['August'],
        seasonalNotes: 'Peaceful year-round. A treasure of French regional museums.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café du Musée',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Librairie-Boutique',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Montpellier',
        nearbyParking: 'Parking Comédie',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of Frances finest regional museums',
        'Under 18 free. First Sunday free for all.',
        'Outstanding Pierre Soulages collection (largest in the world)',
        'Exceptional Courbet paintings',
        'Delacroix, Zurbarán, and Houdon sculptures',
        'Near Place de la Comédie in central Montpellier',
        'TGV from Paris to Montpellier (3.5 hours)',
        'Combine with Montpelliers charming historic center'
      ],
      mustSee: [
        { name: 'Soulages Gallery', note: 'Worlds largest collection of Pierre Soulages works' },
        { name: 'Bonjour, Monsieur Courbet', artist: 'Gustave Courbet' },
        { name: 'The Bathing Women', artist: 'Frédéric Bazille' },
        { name: 'Angel of Death', artist: 'Horace Vernet' }
      ]
    },
    faqs: [
      { question: 'What is special about Musée Fabre?', answer: 'One of Frances finest regional museums with worlds largest Pierre Soulages collection and exceptional Courbet paintings.' },
      { question: 'Is Musée Fabre free?', answer: 'First Sunday free for all. Under 18 always free. Otherwise €10 adults.' },
      { question: 'Who was Pierre Soulages?', answer: 'French abstract painter (1919-2022) famous for his outrenoir (beyond black) works. Montpellier has the worlds largest collection.' }
    ]
  },
  {
    slug: 'royal-museums-belgium',
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
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-11-01', closed: true, reason: "All Saints Day" },
          { date: '2026-11-11', closed: true, reason: 'Armistice Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Multiple museums: Old Masters, Modern, Fin-de-Siècle, Magritte. Last entry 4pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 15,
        senior: 12,
        seniorAge: 65,
        student: 8,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Combined ticket covers all museums. First Wednesday of month 1pm-5pm free. Brussels Card accepted.',
        freeDay: 'First Wednesday 1pm-5pm',
        memberFree: true,
        brusselsCard: true
      },
      tickets: {
        onlineUrl: 'https://www.fine-arts-museum.be/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'One ticket covers all museums. Magritte Museum can be busy. Brussels Card includes entry.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['First Wednesday afternoon (free)', 'Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Magritte Museum most crowded. Old Masters section often peaceful.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4 hours for all museums'
      },
      amenities: {
        cafe: true,
        cafeName: 'Goupil le Fol café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Brussels near Mont des Arts',
        nearbyParking: 'Parking Albertine, Parking Grand Place',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'fr', 'en', 'de', 'es', 'it'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One ticket covers all museums: Old Masters, Modern, Fin-de-Siècle, Magritte',
        'Under 19 always free',
        'First Wednesday of month free 1pm-5pm',
        'Magritte Museum is most popular. Go early or late.',
        'Exceptional Flemish Primitives: Van Eyck, Memling, Van der Weyden',
        'Bruegel room has major works',
        'Metro to Gare Centrale or Parc',
        'Near Grand Place (10-min walk)'
      ],
      mustSee: [
        { name: 'The Empire of Light', artist: 'René Magritte', location: 'Magritte Museum' },
        { name: 'The Fall of Icarus', artist: 'Pieter Bruegel the Elder', location: 'Old Masters' },
        { name: 'Justice of Otho', artist: 'Dieric Bouts', location: 'Old Masters' },
        { name: 'The Death of Marat', artist: 'Jacques-Louis David', location: 'Old Masters' }
      ]
    },
    faqs: [
      { question: 'What museums are in Royal Museums of Fine Arts Belgium?', answer: 'Four museums: Old Masters (Flemish Primitives, Bruegel), Modern Art, Fin-de-Siècle (Art Nouveau era), and Magritte Museum.' },
      { question: 'When is Royal Museums Belgium free?', answer: 'First Wednesday of each month 1pm-5pm. Under 19 always free.' },
      { question: 'Is the Magritte Museum separate?', answer: 'Its in the same complex. One ticket covers all four museums.' }
    ]
  },
  {
    slug: 'wallace-collection',
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
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10am-5pm. FREE admission. One of worlds finest collections of French 18th-century art.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE. Donations welcome. In a beautiful historic townhouse.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.wallacecollection.org/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. One of Londons hidden gems.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['All months quiet'],
        worstMonths: ['None'],
        seasonalNotes: 'Never crowded. A peaceful refuge near Oxford Street chaos.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Wallace Restaurant (courtyard)',
        restaurant: true,
        restaurantName: 'Wallace Restaurant',
        giftShop: true,
        giftShopName: 'Wallace Collection Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central London near Marylebone',
        nearbyParking: 'NCP Cavendish Square',
        strollerRental: false,
        wheelchairRental: true,
        courtyard: true,
        courtyardNote: 'Beautiful covered courtyard for dining'
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
        'ALWAYS FREE. One of Londons best-kept secrets.',
        'The Laughing Cavalier by Hals is here (not really laughing)',
        'Worlds finest collection of French 18th-century art and furniture',
        'Outstanding armor collection',
        'The courtyard restaurant is lovely for lunch',
        'Near Oxford Street but worlds away in atmosphere',
        'Tube: Bond Street or Baker Street (10-min walk)',
        'Feels like visiting a private aristocratic home'
      ],
      mustSee: [
        { name: 'The Laughing Cavalier', artist: 'Frans Hals', note: 'Hes not actually laughing' },
        { name: 'The Swing', artist: 'Jean-Honoré Fragonard' },
        { name: 'Perseus and Andromeda', artist: 'Titian' },
        { name: 'Arms and Armour Collection', note: 'One of finest in world' }
      ]
    },
    faqs: [
      { question: 'Is the Wallace Collection free?', answer: 'Yes, always free. Donations welcome. One of Londons finest free museums.' },
      { question: 'What is the Wallace Collection famous for?', answer: 'French 18th-century paintings and decorative arts, Old Masters (Hals, Titian, Velázquez), and one of worlds finest armor collections.' },
      { question: 'Who was Wallace?', answer: 'Sir Richard Wallace, who inherited the collection and bequeathed it to Britain in 1897. It must stay together in the townhouse forever.' }
    ]
  },
  {
    slug: 'st-bavo-cathedral-ghent-belgium',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:30', close: '17:00' },
          tuesday: { open: '08:30', close: '17:00' },
          wednesday: { open: '08:30', close: '17:00' },
          thursday: { open: '08:30', close: '17:00' },
          friday: { open: '08:30', close: '17:00' },
          saturday: { open: '08:30', close: '17:00' },
          sunday: { open: '13:00', close: '17:00' }
        },
        seasonal: {
          summer: {
            period: 'April to October',
            daily: { open: '08:30', close: '18:00' }
          }
        },
        exceptions: [],
        notes: 'Cathedral free. Ghent Altarpiece viewing €16 with timed ticket. Sunday opens 1pm. Restricted access during services.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 14,
        seniorAge: 65,
        student: 14,
        child: 0,
        childMaxAge: 12,
        currency: 'EUR',
        notes: 'Cathedral FREE. €16 ticket for Ghent Altarpiece and visit experience. Under 13 free. Audio guide included.',
        freeDay: 'Cathedral free daily. Altarpiece requires ticket.',
        altarpieceTicket: 16,
        memberFree: false
      },
      tickets: {
        onlineUrl: 'https://www.sintbaafskathedraal.be/en/',
        onlineRequired: true,
        onlineRequiredNote: 'Timed tickets required for Ghent Altarpiece',
        walkUpAvailable: 'Limited',
        skipTheLine: true,
        advanceRequired: true,
        advanceRecommended: true,
        advanceWindow: '60 days',
        sameDayAvailable: 'Very limited',
        peakSeasonAdvanceBooking: '1-2 weeks',
        notes: 'ADVANCE BOOKING ESSENTIAL for Ghent Altarpiece. Book weeks ahead in summer. Cathedral itself free.'
      },
      crowdData: {
        overall: 'Heavy for Altarpiece',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['08:30-10:00', '16:00-17:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August', 'April (Easter)'],
        seasonalNotes: 'Ghent Altarpiece viewings sell out days/weeks ahead in summer. Book immediately when planning trip.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        nearbyRestaurants: 'Many in Ghent center',
        giftShop: true,
        giftShopName: 'Cathedral Shop',
        coatCheck: false,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'Central Ghent pedestrian area',
        nearbyParking: 'Sint-Michiels, Vrijdagmarkt parking',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Cathedral accessible. Some areas have steps.',
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'fr', 'de', 'es', 'it'],
        audioGuideCost: 0,
        audioGuideNote: 'Included with Altarpiece ticket',
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false
      },
      tips: [
        'BOOK ALTARPIECE TICKETS WEEKS IN ADVANCE. Sells out.',
        'Cathedral is free. Only Ghent Altarpiece viewing requires €16 ticket.',
        'The restoration allows seeing the Altarpiece better than ever',
        'Audio guide included with ticket. Excellent explanation.',
        'Morning or late afternoon best for smaller crowds',
        'The crypt has additional paintings and tombs',
        'Train from Brussels to Ghent (30 min) then walk',
        'Ghent is worth a full day. Dont just see the Altarpiece.'
      ],
      mustSee: [
        { name: 'Ghent Altarpiece (Adoration of the Mystic Lamb)', artist: 'Jan van Eyck', note: 'Worlds most stolen artwork, now brilliantly restored' },
        { name: 'The panels open and close', note: 'See both exterior and interior views' },
        { name: 'Cathedral Interior', note: 'Gothic architecture free to view' },
        { name: 'Rubens Saint Bavo Painting', note: 'In the cathedral' }
      ]
    },
    faqs: [
      { question: 'Do I need to book Ghent Altarpiece tickets in advance?', answer: 'Yes, essential. Timed tickets sell out days or weeks ahead, especially in summer. Book immediately when planning trip.' },
      { question: 'Is St. Bavos Cathedral free?', answer: 'Cathedral is free to enter. €16 timed ticket required to see the Ghent Altarpiece in its dedicated space.' },
      { question: 'What is the Ghent Altarpiece?', answer: 'The Adoration of the Mystic Lamb by Jan van Eyck (1432), one of the most important paintings in art history. Recently restored to spectacular condition.' }
    ]
  }
];

async function enrichMuseums() {
  console.log('Enriching museums with full details (batch 3)...\\n');

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

  console.log('\\nBatch 3 enrichment complete!');
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
