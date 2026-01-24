const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'guggenheim',
    name: 'Solomon R. Guggenheim Museum',
    websiteUrl: 'https://www.guggenheim.org/',
    ticketUrl: 'https://www.guggenheim.org/plan-your-visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '11:00', close: '18:00' },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '18:00' },
          saturday: { open: '11:00', close: '20:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open daily. Saturday extended hours until 8pm. The iconic Frank Lloyd Wright building is as much an attraction as the art.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 30,
        senior: 22,
        seniorAge: 65,
        student: 22,
        child: 0,
        childMaxAge: 11,
        currency: 'USD',
        notes: 'Under 12 free. Students and seniors $22. Members free. Pay What You Wish Saturdays 4pm-8pm.',
        freeDay: 'Saturday 4pm-8pm (Pay What You Wish)',
        freeHours: '16:00-20:00',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.guggenheim.org/plan-your-visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Timed tickets recommended. Online tickets allow faster entry. Pay What You Wish Saturdays can have long lines.'
      },
      crowdData: {
        overall: 'Heavy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-12:00', '17:00-18:00'],
        worstTimes: ['13:00-16:00', 'Saturday evenings (Pay What You Wish)'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['June', 'July', 'August', 'December'],
        seasonalNotes: 'Tourist heavy year-round. Saturday Pay What You Wish brings long lines. Weekday mornings are best.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café 3',
        restaurant: true,
        restaurantName: 'The Wright (fine dining)',
        giftShop: true,
        giftShopName: 'Guggenheim Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Upper East Side Manhattan. Street parking very limited.',
        nearbyParking: 'Icon Parking, various garages on 86th-89th Streets',
        strollerRental: false,
        wheelchairRental: true,
        architecturalTours: true,
        architecturalToursNote: 'Frank Lloyd Wright building tours available'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es', 'fr', 'de', 'it', 'pt', 'zh', 'ja', 'ko'],
        audioGuideCost: 0,
        audioGuideNote: 'Free with admission via Bloomberg Connects app',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        verbalDescriptionTours: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        rampAccess: true,
        rampNote: 'The spiral ramp IS the museum experience'
      },
      tips: [
        'The building is the masterpiece. Frank Lloyd Wright designed it as a continuous spiral.',
        'Walk UP the spiral (take elevator to top, walk down) or walk UP for the intended experience',
        'Pay What You Wish Saturday 4pm-8pm, but expect crowds',
        'Under 12 free. Good for families, though strollers can be tricky on the ramp.',
        'The Wright restaurant is upscale. Reservations recommended.',
        'Take the 4/5/6 train to 86th Street, walk west',
        'Photography allowed (no flash, no tripods)',
        'The rotunda shows temporary exhibitions. Permanent collection in tower galleries.'
      ],
      mustSee: [
        { name: 'The Building Itself', artist: 'Frank Lloyd Wright', note: 'UNESCO World Heritage Site (2019)' },
        { name: 'Paris Through the Window', artist: 'Marc Chagall' },
        { name: 'Yellow Cow', artist: 'Franz Marc' },
        { name: 'Before the Mirror', artist: 'Édouard Manet' }
      ]
    },
    faqs: [
      { question: 'How much is Guggenheim admission?', answer: 'Adults $30, seniors/students $22. Under 12 free. Pay What You Wish Saturdays 4pm-8pm.' },
      { question: 'Who designed the Guggenheim building?', answer: 'Frank Lloyd Wright designed the iconic spiral building, completed in 1959. The building became a UNESCO World Heritage Site in 2019.' },
      { question: 'Should I walk up or down the Guggenheim spiral?', answer: 'Either works. Many take the elevator up and walk down. Wright intended visitors to walk up the gentle ramp.' }
    ]
  },
  {
    slug: 'calouste-gulbenkian-museum-lisbon-portugal',
    name: 'Calouste Gulbenkian Museum',
    websiteUrl: 'https://gulbenkian.pt/museu/',
    ticketUrl: 'https://gulbenkian.pt/museu/visita/',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Two collections: Founder Collection (ancient to 20th century) and Modern Collection (Portuguese modern art).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 10,
        senior: 5,
        seniorAge: 65,
        student: 5,
        child: 0,
        childMaxAge: 12,
        currency: 'EUR',
        notes: 'Under 12 free. Students €5. Combined ticket (both collections) €12. Free Sundays after 2pm.',
        freeDay: 'Sunday after 2pm',
        freeHours: '14:00-18:00',
        memberFree: true,
        comboTicket: 12,
        comboIncludes: 'Founder Collection + Modern Collection'
      },
      tickets: {
        onlineUrl: 'https://gulbenkian.pt/museu/visita/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets skip the queue. Sunday afternoons (free) can be busy.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday afternoon (free entry)'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['14:00-16:00 Sunday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'One of Europes finest small museums. Never overwhelmingly crowded. The gardens are popular with locals.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours including both collections and gardens'
      },
      amenities: {
        cafe: true,
        cafeName: 'Cafetaria do Museu',
        restaurant: true,
        restaurantName: 'Restaurante do Museu',
        giftShop: true,
        giftShopName: 'Loja do Museu',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Underground parking available',
        strollerRental: false,
        wheelchairRental: true,
        gardens: true,
        gardensNote: 'Beautiful 7.5-hectare gardens free to enter, perfect for picnics',
        concertHall: true,
        concertHallNote: 'Regular classical music concerts'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['pt', 'en', 'fr', 'es'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Free Sunday afternoons after 2pm. Best deal in Lisbon.',
        'One man (Calouste Gulbenkian) assembled this entire collection. Astonishing breadth.',
        'The gardens are free and beautiful. Bring a picnic.',
        'Lalique jewelry collection is world-class and unique',
        'Egyptian, Islamic, Asian, European art all in one place',
        'Take Metro Blue Line to São Sebastião or Yellow to Praça de Espanha',
        'Concerts in the Gulbenkian concert hall are excellent and affordable',
        'Modern Collection in separate building has Portuguese contemporary art'
      ],
      mustSee: [
        { name: 'Boy Blowing Bubbles', artist: 'Édouard Manet' },
        { name: 'Portrait of Hélène Fourment', artist: 'Peter Paul Rubens' },
        { name: 'Lalique Jewelry Collection', note: 'Largest collection of René Lalique works' },
        { name: 'Diana Statue', artist: 'Jean-Antoine Houdon', note: 'From the Hermitage' }
      ]
    },
    faqs: [
      { question: 'Is Gulbenkian Museum free?', answer: 'Free Sundays after 2pm. Otherwise €10 adults, €5 students/seniors. Under 12 free. Combined ticket €12 for both collections.' },
      { question: 'Who was Calouste Gulbenkian?', answer: 'Armenian-British oil magnate (1869-1955) who amassed one of the worlds finest private art collections. He bequeathed it to Portugal along with his foundation.' },
      { question: 'How long to visit Gulbenkian?', answer: '2-3 hours for the main collection. Add 1 hour for Modern Collection and time for the beautiful gardens.' }
    ]
  },
  {
    slug: 'barberini',
    name: 'Galleria Nazionale d\'Arte Antica (Palazzo Barberini)',
    websiteUrl: 'https://www.barberinicorsini.org/',
    ticketUrl: 'https://www.barberinicorsini.org/visita/biglietti/',
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Last entry 1 hour before closing. Ticket includes Palazzo Corsini (second venue).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 2,
        seniorAge: 65,
        student: 2,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'EU citizens 18-25 reduced €2. Under 18 free. First Sunday of month free. Ticket valid for both Palazzo Barberini AND Palazzo Corsini.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        euYouth: 2,
        comboTicket: true,
        comboIncludes: 'Palazzo Barberini + Palazzo Corsini (valid 10 days)'
      },
      tickets: {
        onlineUrl: 'https://www.barberinicorsini.org/visita/biglietti/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        bookingFee: 2,
        notes: 'Online booking €2 fee but recommended for weekends. First Sunday (free day) gets crowded.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['First Sunday (free day)', 'Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'October'],
        seasonalNotes: 'Often overlooked for Vatican/Borghese. A peaceful alternative with world-class Baroque art.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffetteria Barberini',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Bookshop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Rome near Piazza Barberini',
        nearbyParking: 'Parking Via Veneto, Parking Ludovisi',
        strollerRental: false,
        wheelchairRental: true,
        palaceGardens: true,
        palaceGardensNote: 'Historic Barberini gardens'
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
        'Your ticket includes Palazzo Corsini (Trastevere). Use within 10 days.',
        'First Sunday free but crowded. Other days are peaceful.',
        'The building itself is a Baroque masterpiece by Bernini and Borromini',
        'Caravaggios Judith and Holofernes is here, not at the Vatican',
        'The ceiling fresco by Pietro da Cortona is jaw-dropping',
        'Much less crowded than Borghese. No reservation stress.',
        'Metro Line A to Barberini station (1 minute walk)',
        'Combine with Palazzo Corsini in Trastevere for full baroque experience'
      ],
      mustSee: [
        { name: 'Judith Beheading Holofernes', artist: 'Caravaggio' },
        { name: 'La Fornarina', artist: 'Raphael', note: 'Portrait of Raphaels lover' },
        { name: 'Triumph of Divine Providence', artist: 'Pietro da Cortona', location: 'Gran Salone ceiling' },
        { name: 'Beatrice Cenci', artist: 'attributed to Guido Reni' }
      ]
    },
    faqs: [
      { question: 'What is Palazzo Barberini?', answer: 'A Baroque palace housing Italys national collection of 13th-18th century paintings, including major works by Caravaggio, Raphael, and stunning ceiling frescoes.' },
      { question: 'Does the ticket include Palazzo Corsini?', answer: 'Yes, one ticket (€12) covers both Palazzo Barberini and Palazzo Corsini in Trastevere, valid for 10 days.' },
      { question: 'Is Palazzo Barberini worth visiting?', answer: 'Absolutely. World-class Baroque art (Caravaggio, Raphael) in a stunning palace, without the crowds of the Vatican or Borghese.' }
    ]
  },
  {
    slug: 'guimet-museum-paris-france',
    name: 'Musée National des Arts Asiatiques - Guimet',
    websiteUrl: 'https://www.guimet.fr/',
    ticketUrl: 'https://www.guimet.fr/preparer-votre-visite/',
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
        notes: 'Closed Mondays. One of the worlds great Asian art museums. Also includes nearby Panthéon Bouddhique annexe.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 13,
        senior: 10,
        seniorAge: 65,
        student: 10,
        child: 0,
        childMaxAge: 25,
        currency: 'EUR',
        notes: 'Under 26 (EU) free. First Sunday of month free. Paris Museum Pass accepted.',
        freeDay: 'First Sunday of month',
        euUnder26Free: true,
        memberFree: true,
        parisMuseumPass: true
      },
      tickets: {
        onlineUrl: 'https://www.guimet.fr/preparer-votre-visite/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Rarely crowded. Walk-up usually fine. Paris Museum Pass provides skip-the-line entry.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['First Sunday (free day)'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['All months relatively quiet'],
        worstMonths: ['August'],
        seasonalNotes: 'One of Paris best-kept secrets. Rarely crowded even in high season. A peaceful refuge.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Salon de Thé - Le Guimet',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Librairie-Boutique',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Paris near Place d\'Iéna',
        nearbyParking: 'Parking Kléber, Parking George V',
        strollerRental: false,
        wheelchairRental: true,
        library: true,
        libraryNote: 'Specialized Asian studies library'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'ja', 'zh', 'ko'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 26 (EU) free. Best deal for young visitors in Paris.',
        'One of the worlds finest Asian art collections outside Asia',
        'The Khmer sculpture gallery rivals anything outside Cambodia',
        'Tea salon serves excellent Asian teas in tranquil setting',
        'Metro Line 9 to Iéna or Line 6 to Boissière',
        'Walk to Eiffel Tower (15 minutes) or Palais de Tokyo (5 minutes)',
        'The Panthéon Bouddhique annexe (nearby) has Japanese garden',
        'Paris Museum Pass accepted and highly recommended'
      ],
      mustSee: [
        { name: 'Khmer Sculpture Gallery', note: 'Finest collection of Cambodian art outside Cambodia' },
        { name: 'Standing Buddha from Gandhara', note: 'Greco-Buddhist art from Pakistan/Afghanistan' },
        { name: 'Chinese Ceramics Collection', note: 'Spans 5,000 years' },
        { name: 'Japanese Buddhist Sculpture', location: 'Panthéon Bouddhique' }
      ]
    },
    faqs: [
      { question: 'What is the Guimet Museum?', answer: 'Frances national museum of Asian art, holding one of the worlds largest collections spanning India, Southeast Asia, China, Japan, Korea, and Central Asia.' },
      { question: 'Is Guimet Museum free?', answer: 'Free for EU residents under 26 and for everyone on the first Sunday of each month. Otherwise €13 adults. Paris Museum Pass accepted.' },
      { question: 'How crowded is Guimet?', answer: 'Rarely crowded. One of Paris best-kept secrets, offering peaceful contemplation of world-class Asian art.' }
    ]
  },
  {
    slug: 'museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil',
    name: 'Museu de Arte de São Paulo (MASP)',
    websiteUrl: 'https://masp.org.br/',
    ticketUrl: 'https://masp.org.br/ingressos',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Extended hours Tuesday, Thursday, Friday until 8pm. Free on Tuesdays.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 60,
        senior: 30,
        seniorAge: 60,
        student: 30,
        child: 0,
        childMaxAge: 10,
        currency: 'BRL',
        notes: 'Under 11 free. Students/seniors half price (R$30). FREE every Tuesday. Approximately $12 USD adult.',
        freeDay: 'Tuesday',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://masp.org.br/ingressos',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Free Tuesdays can have long queues. Online booking recommended. Timed entry.'
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Tuesday (free day)', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (late opening days)'],
        worstTimes: ['14:00-17:00', 'Tuesday all day'],
        bestMonths: ['March', 'April', 'November'],
        worstMonths: ['January', 'July (school holidays)'],
        seasonalNotes: 'Free Tuesdays bring crowds. The iconic building on Avenida Paulista is a landmark.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'MASP Café',
        restaurant: true,
        restaurantName: 'A Casa do Porco Bar (adjacent, reservations essential)',
        giftShop: true,
        giftShopName: 'MASP Loja',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Avenida Paulista location. No museum parking.',
        nearbyParking: 'Various paid parking on side streets',
        strollerRental: false,
        wheelchairRental: true,
        openPlaza: true,
        openPlazaNote: 'Iconic suspended building creates covered public plaza'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['pt', 'en', 'es'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'FREE every Tuesday. Best museum deal in São Paulo.',
        'The glass easel display system is revolutionary and beautiful',
        'Best European art collection in the Southern Hemisphere',
        'The building by Lina Bo Bardi is an architectural icon. Photograph the underside.',
        'Metro Green Line to Trianon-MASP station (direct access)',
        'Avenida Paulista closes to cars on Sundays. Great for walking.',
        'Late opening Tue/Thu/Fri until 8pm for after-work visits',
        'The open plaza hosts events and markets'
      ],
      mustSee: [
        { name: 'Portrait of Suzanne Bloch', artist: 'Pablo Picasso' },
        { name: 'Rosa e Azul (The Pink and Blue Girls)', artist: 'Pierre-Auguste Renoir' },
        { name: 'The Student', artist: 'Vincent van Gogh' },
        { name: 'The Building Itself', artist: 'Lina Bo Bardi', note: 'Brutalist icon suspended over a public plaza' }
      ]
    },
    faqs: [
      { question: 'Is MASP free?', answer: 'Free every Tuesday. Otherwise R$60 adults (about $12 USD), half price for students/seniors. Under 11 free.' },
      { question: 'What art does MASP have?', answer: 'The finest European art collection in Latin America, including Raphael, Rembrandt, Van Gogh, Renoir, Picasso, plus significant Brazilian art.' },
      { question: 'Who designed the MASP building?', answer: 'Italian-Brazilian architect Lina Bo Bardi designed the brutalist icon in 1968. The building appears to float on just two columns.' }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-de-nantes-nantes-france',
    name: 'Musée d\'Arts de Nantes',
    websiteUrl: 'https://museedartsdenantes.nantesmetropole.fr/',
    ticketUrl: 'https://museedartsdenantes.nantesmetropole.fr/home/infos-pratiques.html',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-11-01', closed: true, reason: "All Saints Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. Thursday late opening until 9pm. Reopened 2017 after major renovation with stunning modern extension.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 8,
        senior: 4,
        seniorAge: 65,
        student: 4,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Students and seniors €4. First Sunday of month free. Nantes Pass accepted.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        nantesPass: true
      },
      tickets: {
        onlineUrl: 'https://museedartsdenantes.nantesmetropole.fr/home/infos-pratiques.html',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Rarely crowded. Tickets at door. One of Frances best regional museums.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Friday', 'Saturday'],
        worstDays: ['First Sunday (free day)', 'Thursday evening'],
        bestTimes: ['10:00-12:00', '14:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['All year relatively quiet'],
        worstMonths: ['August'],
        seasonalNotes: 'One of Frances finest regional art museums. Rarely crowded. The 2017 renovation created beautiful new spaces.',
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
        parkingNotes: 'Central Nantes location',
        nearbyParking: 'Parking Graslin, Parking Commerce',
        strollerRental: false,
        wheelchairRental: true,
        patioCube: true,
        patioCubeNote: 'Stunning white cube patio connecting old and new buildings'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Reopened in 2017 after major renovation. Architecture alone worth the visit.',
        'First Sunday free. Very affordable any day (€8).',
        'Under 18 always free. Family-friendly.',
        'The white cube patio linking buildings is spectacular',
        'Strong collection from 13th century to contemporary',
        'Thursday evenings until 9pm for late visits',
        'Tram Line 1 to Médiathèque stop',
        'Combine with Château des Ducs de Bretagne nearby'
      ],
      mustSee: [
        { name: 'The Three Witches', artist: 'Johann Heinrich Füssli' },
        { name: 'Portrait of Madame de Senonnes', artist: 'Jean-Auguste-Dominique Ingres' },
        { name: 'The Snake Charmer', artist: 'Jean-Léon Gérôme' },
        { name: 'Contemporary Galleries', note: 'Strong 20th-21st century collection' }
      ]
    },
    faqs: [
      { question: 'How much is Musée d\'Arts de Nantes?', answer: '€8 adults, €4 students/seniors. Under 18 free. First Sunday of month free for all.' },
      { question: 'When was Nantes museum renovated?', answer: 'Reopened in 2017 after a major expansion that seamlessly connects the historic 19th-century building with stunning contemporary galleries.' },
      { question: 'What kind of art is in Nantes museum?', answer: 'European art from 13th century to today, including Ingres, Delacroix, Monet, Kandinsky, and strong contemporary holdings.' }
    ]
  },
  {
    slug: 'staatsgalerie-stuttgart-stuttgart-germany',
    name: 'Staatsgalerie Stuttgart',
    websiteUrl: 'https://www.staatsgalerie.de/',
    ticketUrl: 'https://www.staatsgalerie.de/besuch/tickets.html',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Closed Mondays. Thursday late opening until 8pm. Permanent collection FREE on Wednesdays.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 10,
        seniorAge: 65,
        student: 10,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Permanent collection FREE on Wednesdays. Special exhibitions extra.',
        freeDay: 'Wednesday (permanent collection)',
        memberFree: true,
        wednesdayFreeCollection: true
      },
      tickets: {
        onlineUrl: 'https://www.staatsgalerie.de/besuch/tickets.html',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Free Wednesday permanent collection is popular. Online booking recommended for special exhibitions.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Friday'],
        worstDays: ['Wednesday (free day)', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August', 'December'],
        seasonalNotes: 'Free Wednesdays attract locals. One of Germanys finest art museums.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café im Kunstmuseum',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museumsshop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Underground parking Kulturmeile',
        strollerRental: false,
        wheelchairRental: true,
        sculpture: true,
        sculptureNote: 'Outdoor sculpture court'
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
        'Permanent collection FREE on Wednesdays. Best museum deal in Stuttgart.',
        'Under 18 always free',
        'James Stirling building (1984) is a postmodern landmark',
        'Outstanding collection of German art, especially Expressionism',
        'Thursday evenings until 8pm for after-work visits',
        'S-Bahn to Stadtmitte or Staatsgalerie station',
        'The colorful handrails and neon pink/blue accents are iconic',
        'Strong Picasso collection and German Romantics'
      ],
      mustSee: [
        { name: 'The Absinthe Drinker', artist: 'Pablo Picasso' },
        { name: 'The Battle of Alexander at Issus', artist: 'Albrecht Altdorfer' },
        { name: 'Metropolis', artist: 'Otto Dix', note: 'Weimar-era masterpiece' },
        { name: 'The Building Itself', artist: 'James Stirling', note: 'Postmodern architecture icon' }
      ]
    },
    faqs: [
      { question: 'When is Staatsgalerie free?', answer: 'Permanent collection is FREE every Wednesday. Under 18 free any day. Special exhibitions always have a fee.' },
      { question: 'What art is at Staatsgalerie Stuttgart?', answer: 'Old Masters (Cranach, Holbein), German Romantics, major Impressionists, and one of Germanys best modern art collections with strong Expressionism.' },
      { question: 'Who designed the Staatsgalerie building?', answer: 'British architect James Stirling designed the famous postmodern addition (1984) with its curved walls, bright colors, and playful classical references.' }
    ]
  },
  {
    slug: 'national-archaeological-museum-athens',
    name: 'National Archaeological Museum of Athens',
    websiteUrl: 'https://www.namuseum.gr/',
    ticketUrl: 'https://www.namuseum.gr/en/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '13:00', close: '20:00' },
          tuesday: { open: '09:00', close: '16:00' },
          wednesday: { open: '09:00', close: '16:00' },
          thursday: { open: '09:00', close: '16:00' },
          friday: { open: '09:00', close: '16:00' },
          saturday: { open: '09:00', close: '16:00' },
          sunday: { open: '09:00', close: '16:00' }
        },
        seasonal: {
          summer: {
            period: 'April 1 - October 31',
            monday: { open: '13:00', close: '20:00' },
            tuesday: { open: '09:00', close: '20:00' },
            wednesday: { open: '09:00', close: '20:00' },
            thursday: { open: '09:00', close: '20:00' },
            friday: { open: '09:00', close: '20:00' },
            saturday: { open: '09:00', close: '20:00' },
            sunday: { open: '09:00', close: '20:00' }
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-03-25', closed: true, reason: 'Greek Independence Day' },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Monday opens at 1pm. Summer hours (April-October) until 8pm. Winter closes at 4pm. Worlds finest collection of Greek antiquities.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 6,
        seniorAge: 65,
        student: 6,
        child: 0,
        childMaxAge: 24,
        currency: 'EUR',
        notes: 'Under 25 (EU) free. Non-EU students €6. Free November 1 - March 31 on first Sunday. Combined ticket with Epigraphical Museum available.',
        freeDay: 'First Sunday (November-March)',
        euUnder25Free: true,
        memberFree: true,
        winterFreeSunday: true
      },
      tickets: {
        onlineUrl: 'https://www.namuseum.gr/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'E-tickets allow skip-the-line entry. Summer afternoons can be busy with tour groups.'
      },
      crowdData: {
        overall: 'Moderate to Heavy',
        bestDays: ['Monday (opens 1pm)', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-11:00', '16:00-20:00 (summer)'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['November', 'December', 'January', 'February'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Summer tour groups can crowd key galleries. Early morning or late afternoon best. Winter is peaceful.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours minimum'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop with excellent replicas',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Athens. Limited street parking.',
        nearbyParking: 'Parking Exarcheia',
        strollerRental: false,
        wheelchairRental: true,
        garden: true,
        gardenNote: 'Courtyard garden'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['el', 'en', 'fr', 'de', 'es', 'it', 'ru', 'zh', 'ja'],
        audioGuideCost: 5,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'The worlds richest collection of Greek antiquities. Plan ample time.',
        'EU citizens under 25 FREE. Bring ID.',
        'Mycenaean gold (Mask of Agamemnon) is on ground floor. See it first.',
        'Monday opens at 1pm. Other days 9am.',
        'Summer hours until 8pm. Late afternoons are cooler and calmer.',
        'Metro Green Line to Victoria or Omonia (10-minute walk)',
        'The Antikythera Mechanism (ancient computer) is here',
        'Gift shop has excellent museum-quality replicas'
      ],
      mustSee: [
        { name: 'Mask of Agamemnon', note: 'Mycenaean gold funeral mask, 16th century BC' },
        { name: 'Antikythera Youth', note: 'Bronze statue pulled from shipwreck, possibly Paris or Perseus' },
        { name: 'Antikythera Mechanism', note: 'Ancient Greek analog computer for astronomy' },
        { name: 'Poseidon of Artemision', note: 'Bronze god (Zeus or Poseidon) from the sea' }
      ]
    },
    faqs: [
      { question: 'What are Athens Archaeological Museum hours?', answer: 'Monday 1pm-8pm (summer) or 4pm (winter). Tuesday-Sunday 9am-8pm (summer) or 4pm (winter).' },
      { question: 'How much does Athens Archaeological Museum cost?', answer: '€12 adults. EU citizens under 25 free. Non-EU students €6. Free first Sunday November-March.' },
      { question: 'What is the Antikythera Mechanism?', answer: 'An ancient Greek analog computer from around 100 BC, used to predict astronomical positions and eclipses. One of historys most remarkable artifacts.' }
    ]
  },
  {
    slug: 'pinacoteca-nazionale-di-bologna-bologna-italy',
    name: 'Pinacoteca Nazionale di Bologna',
    websiteUrl: 'https://www.pinacotecabologna.beniculturali.it/',
    ticketUrl: 'https://www.pinacotecabologna.beniculturali.it/visita/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:00', close: '19:00' },
          wednesday: { open: '09:00', close: '19:00' },
          thursday: { open: '09:00', close: '19:00' },
          friday: { open: '09:00', close: '19:00' },
          saturday: { open: '09:00', close: '19:00' },
          sunday: { open: '09:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Last entry 30 minutes before closing. Houses the great Bolognese school of painting.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 6,
        senior: 2,
        seniorAge: 65,
        student: 2,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. EU 18-25 €2. First Sunday of month free. Extremely affordable for a major collection.',
        freeDay: 'First Sunday of month',
        euYouth: 2,
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.pinacotecabologna.beniculturali.it/visita/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Rarely crowded. Walk up anytime. One of Italys best value museums.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Any weekday'],
        worstDays: ['First Sunday (free day)'],
        bestTimes: ['09:00-12:00', '15:00-19:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['All year quiet'],
        worstMonths: ['None'],
        seasonalNotes: 'Hidden gem. Even in high season, youll often have galleries to yourself. The Bolognese school deserves more attention.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        nearbyRestaurants: 'University district has many options',
        giftShop: true,
        giftShopName: 'Bookshop',
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'Central Bologna. ZTL restricted zone.',
        nearbyParking: 'Parking Staveco, Parking Tanari',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        accessibilityNote: 'Elevator access to main floors',
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en'],
        audioGuideCost: 4,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Only €6 for one of Italys major collections. Incredible value.',
        'Under 18 free. First Sunday free for all.',
        'The Bolognese school (Carracci, Guido Reni, Guercino) rivals Florence',
        'Raphaels Ecstasy of St. Cecilia is the star attraction',
        'Rarely crowded. Youll often have masterpieces to yourself.',
        'In the university district. Great for lunch at student prices.',
        'Bus 20, 28, 36, 37 to Via Belle Arti',
        'Combine with the excellent portico walk around Bologna'
      ],
      mustSee: [
        { name: 'Ecstasy of St. Cecilia', artist: 'Raphael' },
        { name: 'Lamentation over the Dead Christ', artist: 'Guido Reni' },
        { name: 'Madonna of the Bargellini', artist: 'Ludovico Carracci' },
        { name: 'St. George and the Dragon', artist: 'Vitale da Bologna', note: 'Medieval Bolognese masterpiece' }
      ]
    },
    faqs: [
      { question: 'How much is Pinacoteca Nazionale Bologna?', answer: 'Just €6 adults. EU 18-25 €2. Under 18 free. First Sunday free for everyone. One of Italys best value major museums.' },
      { question: 'What art is in Pinacoteca Bologna?', answer: 'The great Bolognese school: Carracci family, Guido Reni, Guercino, plus Raphaels famous Ecstasy of St. Cecilia and works from 13th-18th centuries.' },
      { question: 'Is Pinacoteca Bologna crowded?', answer: 'Rarely crowded even in high season. A peaceful alternative to Florence museums with comparable masterpieces.' }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-d39orl233ans-orleans-france',
    name: 'Musée des Beaux-Arts d\'Orléans',
    websiteUrl: 'https://www.orleans-metropole.fr/culture/musees/musee-des-beaux-arts',
    ticketUrl: 'https://www.orleans-metropole.fr/culture/musees/musee-des-beaux-arts',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '13:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-05-08', closed: true, reason: 'Joan of Arc Festival' },
          { date: '2026-11-01', closed: true, reason: "All Saints Day" },
          { date: '2026-11-11', closed: true, reason: 'Armistice Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Sunday opens at 1pm. May 8 closed for Joan of Arc Festival (city-wide celebration).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 6,
        senior: 3,
        seniorAge: 65,
        student: 3,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Students €3. First Sunday of month free.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      tickets: {
        onlineUrl: null,
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door only. Never crowded.'
      },
      crowdData: {
        overall: 'Very Light',
        bestDays: ['Any day'],
        worstDays: ['First Sunday (still quiet)'],
        bestTimes: ['10:00-18:00 (all hours quiet)'],
        worstTimes: ['None'],
        bestMonths: ['All months'],
        worstMonths: ['May (Joan of Arc Festival closures)'],
        seasonalNotes: 'Overlooked gem one hour from Paris. You may have the galleries to yourself.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        nearbyRestaurants: 'Many in Place Sainte-Croix nearby',
        giftShop: true,
        giftShopName: 'Small bookshop',
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'Central Orléans',
        nearbyParking: 'Parking Cathédrale, Parking Châtelet',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Historic building has some accessibility limitations',
        wheelchairsAvailable: false,
        audioGuide: false,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false
      },
      tips: [
        'One hour from Paris by train. Perfect day trip.',
        'Just €6. First Sunday free.',
        'Under 18 free. Budget-friendly for families.',
        'Fine French and Italian paintings, plus pastels collection',
        'Visit during Joan of Arc Festival (early May) for city celebrations',
        'Orléans Cathedral is steps away',
        'Velázquez apostle portraits are highlights',
        'Train from Paris Austerlitz to Orléans (1 hour)'
      ],
      mustSee: [
        { name: 'Four Evangelists', artist: 'Jacob Jordaens' },
        { name: 'St. Thomas the Apostle', artist: 'Diego Velázquez' },
        { name: 'Self-Portrait', artist: 'Jean-Baptiste Chardin' },
        { name: 'Pastels Collection', note: '18th-century French pastels' }
      ]
    },
    faqs: [
      { question: 'How much is Orléans Museum of Fine Arts?', answer: 'Only €6 adults, €3 students. Under 18 free. First Sunday free. Very affordable.' },
      { question: 'How do I get to Orléans from Paris?', answer: 'Direct trains from Paris Austerlitz take about 1 hour. The museum is walking distance from the station.' },
      { question: 'What is the Joan of Arc Festival?', answer: 'Orléans celebrates its liberation by Joan of Arc each May (7-8th). The museum closes but the city festivities are worth seeing.' }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full museum information for batch 4...\\n');

  for (const museum of enrichedMuseums) {
    try {
      const updateData = {
        hoursOfOperation: museum.hoursOfOperation,
        updatedAt: new Date()
      };

      if (museum.websiteUrl) updateData.websiteUrl = museum.websiteUrl;
      if (museum.ticketUrl) updateData.ticketUrl = museum.ticketUrl;
      if (museum.faqs) updateData.faqs = museum.faqs;

      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: updateData
      });
      console.log(`✓ Updated: ${result.name}`);
    } catch (error) {
      console.error(`✗ Error updating ${museum.slug}:`, error.message);
    }
  }

  console.log('\\nBatch 4 complete!');
}

addMuseumInfo()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
