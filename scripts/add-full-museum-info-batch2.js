const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumData = [
  {
    slug: 'royal-collection-uk',
    name: 'Royal Collection Trust (Queen\'s Gallery)',
    websiteUrl: 'https://www.rct.uk/',
    ticketUrl: 'https://www.rct.uk/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:30' },
          tuesday: { open: '10:00', close: '17:30' },
          wednesday: { open: '10:00', close: '17:30' },
          thursday: { open: '10:00', close: '17:30' },
          friday: { open: '10:00', close: '17:30' },
          saturday: { open: '10:00', close: '17:30' },
          sunday: { open: '10:00', close: '17:30' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Queen\'s Gallery at Buckingham Palace shows rotating exhibitions from the Royal Collection. Last admission 4:15pm. Other venues (Windsor, Holyrood) have different hours.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18,
        senior: 16.50,
        seniorAge: 60,
        student: 16.50,
        child: 9,
        childMaxAge: 16,
        childMinAge: 5,
        infant: 0,
        infantMaxAge: 4,
        currency: 'GBP',
        notes: 'Queen\'s Gallery Buckingham Palace prices. Under 5 free. Combined tickets with State Rooms available (summer only). Royal Collection spans multiple locations.',
        freeDay: null,
        memberFree: true,
        comboTicket: 34,
        comboIncludes: 'Queen\'s Gallery + State Rooms (summer only)'
      },
      tickets: {
        onlineUrl: 'https://www.rct.uk/visit/the-queens-gallery-buckingham-palace',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '3 months',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1-2 weeks',
        notes: 'Timed tickets recommended. The Royal Collection is displayed across multiple venues: Buckingham Palace, Windsor Castle, Palace of Holyroodhouse.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-11:30', '15:00-17:00'],
        worstTimes: ['11:30-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Summer months are busiest (State Rooms also open). Changing of the Guard draws crowds to the area. Exhibitions rotate regularly.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours for Queen\'s Gallery; allow full day if combining with State Rooms'
      },
      amenities: {
        cafe: true,
        cafeName: 'Garden Café (seasonal)',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Royal Collection Shop',
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No visitor parking at Buckingham Palace',
        nearbyParking: 'Q-Park Westminster, NCP car parks',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: true,
        audioGuide: true,
        audioGuideLanguages: ['en', 'fr', 'de', 'es', 'it', 'ja', 'zh', 'ru'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'The Royal Collection is one of the world\'s greatest art collections, with over 1 million objects',
        'Queen\'s Gallery shows rotating exhibitions. Check what\'s currently on display.',
        'The collection includes works by Leonardo, Vermeer, Rembrandt, Canaletto, and Van Dyck',
        'Summer months offer combined tickets with Buckingham Palace State Rooms',
        'Windsor Castle displays different parts of the collection year-round',
        'Take Tube to Victoria, Green Park, or Hyde Park Corner',
        'Book online for guaranteed entry, especially in summer',
        'Members get unlimited free entry to all Royal Collection venues'
      ],
      mustSee: [
        { name: 'Rotating Exhibitions', note: 'Exhibitions change regularly, featuring different parts of the collection' },
        { name: 'Leonardo da Vinci Drawings', note: 'The Royal Collection holds the world\'s finest collection of Leonardo drawings' },
        { name: 'Works by Vermeer', note: 'Including The Music Lesson' },
        { name: 'Canaletto Venice Views', note: 'Extensive collection of Venetian scenes' }
      ]
    },
    faqs: [
      { question: 'What is the Royal Collection?', answer: 'One of the world\'s largest and most important art collections, held in trust by the King. Over 1 million objects including paintings by Leonardo, Vermeer, and Rembrandt, displayed across royal residences.' },
      { question: 'How much is the Queen\'s Gallery?', answer: '£18 for adults, £16.50 for seniors and students, £9 for children 5-16. Under 5 free. Combined tickets with State Rooms available in summer.' },
      { question: 'Where can I see the Royal Collection?', answer: 'The Queen\'s Gallery at Buckingham Palace shows rotating exhibitions. Parts of the collection are also displayed at Windsor Castle and the Palace of Holyroodhouse in Edinburgh.' },
      { question: 'What are the Queen\'s Gallery hours?', answer: 'Open daily 10am-5:30pm (last admission 4:15pm). Closed December 25-26. Summer hours may extend when State Rooms are open.' }
    ]
  },
  {
    slug: 'walters-art-museum-baltimore-md-us',
    name: 'Walters Art Museum',
    websiteUrl: 'https://thewalters.org/',
    ticketUrl: 'https://thewalters.org/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '21:00' },
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
        notes: 'Extended hours Thursday until 9pm. Admission is ALWAYS FREE. One of only a few world-class encyclopedic museums with free entry.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Admission is ALWAYS FREE. Special exhibitions also free. One of America\'s great free art museums.',
        freeDay: 'Every day',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://thewalters.org/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Simply walk in during open hours.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Thursday evenings until 9pm are peaceful. School field trips common on weekday mornings. Never feels crowded.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'The Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 8,
        parkingCurrency: 'USD',
        parkingNotes: 'Museum garage on Centre Street. Free on Sundays.',
        nearbyParking: 'Street parking, nearby garages',
        strollerRental: true,
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
        elevatorAccess: true,
        sensoryFriendlyHours: true
      },
      tips: [
        'Admission is ALWAYS FREE. One of America\'s great encyclopedic museums at no cost.',
        'Thursday evenings until 9pm are especially peaceful',
        'The medieval armor collection is exceptional',
        'World-class collection of illuminated manuscripts',
        'Egyptian mummies and ancient art rival major museums',
        'Located in Mount Vernon, Baltimore\'s cultural district',
        'Combine with nearby Baltimore Museum of Art (also free)',
        'Free parking on Sundays in the museum garage'
      ],
      mustSee: [
        { name: 'Fabergé Eggs', note: 'Collection of Imperial Russian eggs' },
        { name: 'Medieval Armor Collection', note: 'One of the finest in America' },
        { name: 'Illuminated Manuscripts', note: 'World-class medieval books' },
        { name: 'Egyptian Mummies', location: 'Ancient Art galleries' },
        { name: 'Hackerman House', note: 'Asian art in a historic mansion' }
      ]
    },
    faqs: [
      { question: 'Is the Walters Art Museum free?', answer: 'Yes, admission is always free, including all special exhibitions. It\'s one of only a few world-class encyclopedic museums in the U.S. with free entry.' },
      { question: 'What are the Walters Art Museum hours?', answer: 'Open Wednesday-Sunday 10am-5pm, with extended hours until 9pm on Thursdays. Closed Monday, Tuesday, and major holidays.' },
      { question: 'What art is at the Walters Art Museum?', answer: 'An encyclopedic collection spanning 5,500 years: Egyptian mummies, medieval armor, Fabergé eggs, illuminated manuscripts, Renaissance paintings, and Asian art.' },
      { question: 'Where is the Walters Art Museum?', answer: 'Located at 600 N. Charles Street in Baltimore\'s Mount Vernon cultural district, near the Washington Monument and Peabody Library.' }
    ]
  },
  {
    slug: 'vienna-museum-vienna-austria',
    name: 'Wien Museum',
    websiteUrl: 'https://www.wienmuseum.at/en',
    ticketUrl: 'https://www.wienmuseum.at/en/visit',
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
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', close: '14:00', reason: "New Year's Eve early close" }
        ],
        notes: 'Reopened 2023 after major renovation. Extended hours Thursday until 9pm. First Sunday of month free.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 9,
        seniorAge: 65,
        student: 9,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. First Sunday of month free for all. Vienna Pass accepted.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        viennaPassAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.wienmuseum.at/en/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at door. Online booking available for convenience.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Newly reopened museum (2023) with modern displays. First Sunday free days are busier.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Karlsplatz',
        restaurant: true,
        restaurantName: 'Museum Restaurant',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Karlsplatz',
        strollerRental: false,
        wheelchairRental: true,
        rooftop: true,
        rooftopNote: 'Rooftop terrace with Vienna views'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 19 always free. First Sunday of month free for all.',
        'Completely renovated and reopened in 2023 with stunning new displays',
        'Tells the story of Vienna from Roman times to today',
        'The Klimt collection includes the only surviving Beethoven portrait',
        'Thursday evenings until 9pm are less crowded',
        'Located on Karlsplatz, easy access via U-Bahn U1/U2/U4',
        'The rooftop terrace offers panoramic Vienna views',
        'Vienna Pass includes admission'
      ],
      mustSee: [
        { name: 'Klimt Collection', note: 'Early works and the only authentic Beethoven portrait' },
        { name: 'Schiele Works', artist: 'Egon Schiele' },
        { name: 'Ottoman Siege Exhibition', note: '1683 siege that shaped European history' },
        { name: 'Rooftop Terrace', note: 'Panoramic views of Vienna' }
      ]
    },
    faqs: [
      { question: 'Is the Wien Museum free?', answer: 'Free for under 19 and on the first Sunday of each month. Otherwise €12 for adults, €9 for students and seniors. Vienna Pass accepted.' },
      { question: 'What is at the Wien Museum?', answer: 'Vienna\'s city museum, reopened in 2023 after major renovation. Covers the city\'s history from Roman times through Habsburg glory to modern Vienna, with works by Klimt and Schiele.' },
      { question: 'What are the Wien Museum hours?', answer: 'Open Tuesday-Sunday 10am-6pm, with extended hours until 9pm on Thursdays. Closed Mondays.' },
      { question: 'Where is the Wien Museum?', answer: 'Located on Karlsplatz in central Vienna, next to the famous Karlskirche. Easy access via U-Bahn U1, U2, or U4 to Karlsplatz.' }
    ]
  },
  {
    slug: 'museo-correr-venice-italy',
    name: 'Museo Correr',
    websiteUrl: 'https://correr.visitmuve.it/en/home/',
    ticketUrl: 'https://www.visitmuve.it/en/tickets/',
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
        seasonal: {
          summer: {
            period: 'April 1 - October 31',
            hours: '10am-7pm'
          },
          winter: {
            period: 'November 1 - March 31',
            hours: '10am-5pm'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Located on St. Mark\'s Square. Ticket includes access to Doge\'s Palace. Extended summer hours.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 30,
        senior: 22,
        seniorAge: 65,
        student: 22,
        child: 0,
        childMaxAge: 5,
        youth: 22,
        youthAgeRange: '6-14',
        currency: 'EUR',
        notes: 'Combined ticket includes Museo Correr + Doge\'s Palace + Museo Archeologico + Biblioteca Marciana. Under 6 free. Venice Civic Museums Pass available.',
        freeDay: null,
        memberFree: true,
        comboTicket: 30,
        comboIncludes: 'Museo Correr, Doge\'s Palace, Museo Archeologico, Biblioteca Marciana'
      },
      tickets: {
        onlineUrl: 'https://www.visitmuve.it/en/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Buy combined ticket here to skip Doge\'s Palace queues. Enter Doge\'s Palace via Correr with much shorter wait.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['May', 'June', 'September', 'October'],
        seasonalNotes: 'Much quieter than Doge\'s Palace despite shared ticket. Carnival season (Feb) brings massive crowds to Piazza San Marco.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours; allow 4+ hours for all included museums'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffè Correr',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No cars in Venice',
        nearbyParking: 'Piazzale Roma parking garages (30 min walk or vaporetto)',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 5,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        notes: 'Historic building has some accessibility limitations'
      },
      tips: [
        'PRO TIP: Buy your combined ticket here, then enter Doge\'s Palace via the Correr connection to skip the massive queues',
        'The Correr tells the history of Venice and the Venetian Republic',
        'Includes the stunning Biblioteca Marciana with Veronese ceiling paintings',
        'Antonio Canova sculptures are a highlight',
        'Carpaccio\'s "Two Venetian Ladies" is often called the most Venetian painting ever made',
        'Located in the Procuratie Nuove on St. Mark\'s Square',
        'Less crowded than Doge\'s Palace but equally important',
        'Acqua alta (flooding) may affect ground floor access Nov-Feb'
      ],
      mustSee: [
        { name: 'Two Venetian Ladies', artist: 'Vittore Carpaccio', note: 'Icon of Venetian art' },
        { name: 'Pietà', artist: 'Antonello da Messina' },
        { name: 'Orpheus and Eurydice', artist: 'Antonio Canova' },
        { name: 'Biblioteca Marciana', note: 'Ceiling by Veronese, historic reading room' },
        { name: 'Piazza San Marco Views', note: 'From the museum windows' }
      ]
    },
    faqs: [
      { question: 'How much is the Museo Correr?', answer: '€30 for a combined ticket including Doge\'s Palace, Museo Archeologico, and Biblioteca Marciana. Under 6 free. Students and seniors €22.' },
      { question: 'What is the Museo Correr?', answer: 'Venice\'s civic museum on St. Mark\'s Square, housing Venetian art, history, and the former royal apartments. Includes works by Carpaccio, Bellini, and Canova sculptures.' },
      { question: 'Why should I visit the Museo Correr?', answer: 'Buy your ticket here and enter Doge\'s Palace through the connected passage, skipping the massive queues. The Correr itself is a hidden gem most tourists overlook.' },
      { question: 'What are the Museo Correr hours?', answer: 'Open daily 10am-7pm in summer (April-October) and 10am-5pm in winter (November-March). Closed January 1 and December 25.' }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-de-lyon-lyon-france',
    name: 'Musée des Beaux-Arts de Lyon',
    websiteUrl: 'https://www.mba-lyon.fr/en',
    ticketUrl: 'https://www.mba-lyon.fr/en/fiche/useful-information-for-your-visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:30', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-11-01', closed: true, reason: 'All Saints Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. Friday opens at 10:30am. One of France\'s finest museums outside Paris.',
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
        notes: 'Under 18 free. Lyon City Card included. Permanent collection free for Lyon residents. Housed in a former Benedictine abbey.',
        freeDay: null,
        memberFree: true,
        lyonCityCardIncluded: true
      },
      tickets: {
        onlineUrl: 'https://billetterie.mba-lyon.fr/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No reservations needed for permanent collection. Large exhibitions may recommend advance booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Festival of Lights (December) brings crowds to Lyon. Otherwise very manageable. The cloister garden is peaceful year-round.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café-Restaurant du Musée',
        restaurant: true,
        restaurantName: 'Restaurant des Beaux-Arts (in the cloister)',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Terreaux, Parking Opéra',
        strollerRental: false,
        wheelchairRental: true,
        garden: true,
        gardenNote: 'Beautiful cloister garden'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'de', 'es', 'it'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 18 always free',
        'One of France\'s most important museums outside Paris',
        'Housed in a stunning 17th-century Benedictine abbey',
        'The cloister garden is free to visit and perfect for a break',
        'Outstanding Egyptian antiquities collection',
        'Strong in French painting, especially Lyon school',
        'Lyon City Card includes admission and public transport',
        'Located on Place des Terreaux, Lyon\'s most beautiful square'
      ],
      mustSee: [
        { name: 'The Flower of Immortality', artist: 'Louis Janmot', note: 'Lyon school masterpiece' },
        { name: 'The Stoning of Saint Stephen', artist: 'Rembrandt' },
        { name: 'Egyptian Antiquities', note: 'Excellent collection' },
        { name: 'The Cloister Garden', note: 'Peaceful 17th-century courtyard' }
      ]
    },
    faqs: [
      { question: 'How much is the Musée des Beaux-Arts de Lyon?', answer: '€12 for adults, €10 for seniors and students. Under 18 free. Lyon City Card includes admission and public transport.' },
      { question: 'What is at the Musée des Beaux-Arts de Lyon?', answer: 'One of France\'s largest fine arts museums, housed in a 17th-century abbey. Collection spans ancient Egypt to contemporary art, with strengths in French painting.' },
      { question: 'What are the Lyon museum hours?', answer: 'Open Wednesday-Sunday 10am-6pm (Friday from 10:30am). Closed Monday and Tuesday.' },
      { question: 'Is the Musée des Beaux-Arts de Lyon worth visiting?', answer: 'Absolutely. It\'s considered France\'s second most important fine arts museum after the Louvre, housed in a beautiful former abbey with a peaceful cloister garden.' }
    ]
  },
  {
    slug: 'accademia-carrara-bergamo-italy',
    name: 'Accademia Carrara',
    websiteUrl: 'https://www.lacarrara.it/en/',
    ticketUrl: 'https://www.lacarrara.it/en/visit/tickets/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '19:00' },
          wednesday: { open: '10:00', close: '19:00' },
          thursday: { open: '10:00', close: '19:00' },
          friday: { open: '10:00', close: '19:00' },
          saturday: { open: '10:00', close: '19:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Last entry 1 hour before closing. Located in Bergamo Alta (upper town), reachable by funicular.',
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
        notes: 'Under 18 free. Combined ticket with GAMeC (contemporary art museum) €18. First Sunday of month free.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        comboTicket: 18,
        comboIncludes: 'Accademia Carrara + GAMeC'
      },
      tickets: {
        onlineUrl: 'https://www.lacarrara.it/en/visit/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at door. No reservations needed. This gem is rarely crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August'],
        seasonalNotes: 'Bergamo is a hidden gem. The museum rarely feels crowded. First Sunday free days are slightly busier.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffè della Carrara',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No parking in Bergamo Alta. Use lower town parking.',
        nearbyParking: 'Parking in Bergamo Bassa (lower town), then funicular',
        strollerRental: false,
        wheelchairRental: true,
        gardenTerrace: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de'],
        audioGuideCost: 5,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 18 free. First Sunday of month free for all.',
        'One of Italy\'s most important collections of Renaissance art',
        'Outstanding works by Mantegna, Bellini, Raphael, Botticelli',
        'Located in beautiful Bergamo Alta (upper town)',
        'Take the funicular from lower Bergamo for scenic approach',
        'Much less crowded than Milan or Venice museums',
        'Bergamo is 45 minutes from Milan by train',
        'Combine with exploring the stunning medieval upper town'
      ],
      mustSee: [
        { name: 'Portrait of Giuliano de\' Medici', artist: 'Sandro Botticelli' },
        { name: 'San Sebastiano', artist: 'Giovanni Bellini' },
        { name: 'Madonna and Child', artist: 'Andrea Mantegna' },
        { name: 'Portrait of a Young Boy', artist: 'Giovanni Battista Moroni', note: 'Moroni was from Bergamo' }
      ]
    },
    faqs: [
      { question: 'What is at the Accademia Carrara?', answer: 'One of Italy\'s most important Renaissance art collections, with masterpieces by Botticelli, Bellini, Raphael, and Mantegna. Founded in 1796 and recently renovated.' },
      { question: 'How much is the Accademia Carrara?', answer: '€12 for adults, free for under 18. First Sunday of each month is free. Combined ticket with GAMeC contemporary museum €18.' },
      { question: 'Where is the Accademia Carrara?', answer: 'Located in Bergamo Alta (upper town), reached by funicular from the lower city. Bergamo is 45 minutes by train from Milan.' },
      { question: 'Is the Accademia Carrara worth visiting?', answer: 'Absolutely. It rivals major museums for Renaissance masterpieces but is uncrowded. Combined with Bergamo\'s stunning medieval upper town, it\'s a perfect day trip from Milan.' }
    ]
  },
  {
    slug: 'basilica-of-san-francesco-arezzo-italy',
    name: 'Basilica of San Francesco (Piero della Francesca Frescoes)',
    websiteUrl: 'https://www.pierodellafrancesca-ticketoffice.it/',
    ticketUrl: 'https://www.pierodellafrancesca-ticketoffice.it/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '18:00' },
          tuesday: { open: '09:00', close: '18:00' },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '18:00' },
          saturday: { open: '09:00', close: '17:30' },
          sunday: { open: '13:00', close: '17:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Visits to frescoes are TIMED and LIMITED to 25 people for 30 minutes. RESERVATIONS REQUIRED. Sunday opens at 1pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 13,
        senior: 10,
        seniorAge: 65,
        student: 10,
        child: 6,
        childMaxAge: 17,
        childMinAge: 6,
        infant: 0,
        infantMaxAge: 5,
        currency: 'EUR',
        notes: 'Under 6 free. Price includes MANDATORY timed reservation to see the Piero della Francesca frescoes. Booking essential.',
        freeDay: null,
        memberFree: false
      },
      tickets: {
        onlineUrl: 'https://www.pierodellafrancesca-ticketoffice.it/',
        onlineRequired: true,
        walkUpAvailable: false,
        skipTheLine: true,
        advanceRequired: true,
        advanceRecommended: true,
        advanceWindow: '3 months',
        sameDayAvailable: false,
        peakSeasonAdvanceBooking: '2-4 weeks',
        notes: 'RESERVATIONS MANDATORY. Only 25 people allowed in the chapel for 30 minutes at a time. Book well in advance, especially in high season.'
      },
      crowdData: {
        overall: 'Controlled by timed entry',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-10:00', '16:00-17:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'May', 'September', 'October'],
        seasonalNotes: 'Timed entry means crowds are controlled. Art lovers worldwide pilgrimage here for Piero. Book early for spring and fall.',
        avgVisitDuration: '30 minutes (frescoes) + 30 minutes (basilica)',
        recommendedDuration: '1-1.5 hours total'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Small shop at ticket office',
        coatCheck: false,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'Parking outside historic center',
        nearbyParking: 'Parking Pietri or Baldaccio (short walk)',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false,
        notes: 'Church is accessible. The main chapel with frescoes has level access.'
      },
      tips: [
        'RESERVATIONS ARE MANDATORY. You cannot see the frescoes without booking in advance.',
        'Only 25 people allowed in the chapel for 30 minutes at a time',
        'These are among the most important Renaissance frescoes in existence',
        'The Legend of the True Cross cycle took Piero 15 years to complete',
        'Book 2-4 weeks ahead in spring/fall, earlier for Easter week',
        'Arezzo is 1 hour by train from Florence',
        'Combine with Piero\'s other work at the Civic Museum (his Magdalene fresco)',
        'The rest of the basilica is free to visit without reservation'
      ],
      mustSee: [
        { name: 'The Legend of the True Cross', artist: 'Piero della Francesca', note: 'Complete fresco cycle, 1452-1466' },
        { name: 'The Dream of Constantine', artist: 'Piero della Francesca', note: 'Revolutionary use of light' },
        { name: 'The Battle of Constantine', artist: 'Piero della Francesca' },
        { name: 'The Queen of Sheba', artist: 'Piero della Francesca' }
      ]
    },
    faqs: [
      { question: 'Do I need a reservation for Piero della Francesca frescoes?', answer: 'YES, reservations are mandatory. Only 25 people can view the frescoes for 30 minutes at a time. Book online well in advance, especially for spring and fall visits.' },
      { question: 'How much are the Piero della Francesca frescoes?', answer: '€13 for adults, €10 for seniors and students, €6 for children 6-17. Under 6 free. Price includes mandatory timed reservation.' },
      { question: 'What are the Piero della Francesca frescoes?', answer: 'The Legend of the True Cross, one of the greatest fresco cycles of the Renaissance, painted 1452-1466. Art historians consider it among the most important works in Western art.' },
      { question: 'Where is the Basilica of San Francesco Arezzo?', answer: 'In the center of Arezzo, Tuscany, about 1 hour by train from Florence. The frescoes are in the main chapel of this Gothic church.' }
    ]
  },
  {
    slug: 'mus233e-d39art-et-d39histoire-geneva-switzerland',
    name: 'Musée d\'Art et d\'Histoire Geneva',
    websiteUrl: 'https://www.mahmah.ch/en',
    ticketUrl: 'https://www.mahmah.ch/en/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '21:00' },
          friday: { open: '11:00', close: '18:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours Thursday until 9pm. Permanent collection is FREE. One of Switzerland\'s largest art museums.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'CHF',
        notes: 'Permanent collection is FREE. Special exhibitions typically CHF 10-15. One of the few major Swiss museums with free entry.',
        freeDay: 'Every day (permanent collection)',
        memberFree: true,
        specialExhibitionAdult: 15
      },
      tickets: {
        onlineUrl: 'https://www.mahmah.ch/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for permanent collection. Special exhibitions may require tickets.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Geneva is a convention city. Conference periods can bring more visitors. Otherwise consistently quiet.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café du MAH',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Plainpalais',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'de'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Permanent collection is FREE. A rarity in expensive Switzerland.',
        'Thursday evenings until 9pm are peaceful and perfect for after-work visits',
        'Switzerland\'s largest encyclopedic museum outside Zurich',
        'Konrad Witz\'s "Miraculous Draught of Fishes" shows the earliest realistic landscape in Western art',
        'Located near the Old Town and Bastions Park',
        'Excellent archaeological collection from ancient civilizations',
        'Combine with nearby Rath Museum for special exhibitions',
        'Swiss Museum Pass NOT required here since it\'s already free'
      ],
      mustSee: [
        { name: 'The Miraculous Draught of Fishes', artist: 'Konrad Witz', note: 'Earliest realistic landscape in Western art, 1444' },
        { name: 'Portrait of a Man', artist: 'Antonio Pisanello' },
        { name: 'Egyptian and Greco-Roman Antiquities', note: 'Extensive collection' },
        { name: 'Geneva History Galleries', note: 'Calvin and the Reformation' }
      ]
    },
    faqs: [
      { question: 'Is the Geneva art museum free?', answer: 'Yes, the permanent collection at Musée d\'Art et d\'Histoire is free. Special exhibitions typically cost CHF 10-15.' },
      { question: 'What is at the Musée d\'Art et d\'Histoire Geneva?', answer: 'Switzerland\'s largest encyclopedic museum with fine arts, archaeological collections, and applied arts. Highlights include Konrad Witz\'s famous landscape painting.' },
      { question: 'What are the Geneva museum hours?', answer: 'Open Tuesday-Sunday 11am-6pm, with extended hours until 9pm on Thursdays. Closed Mondays.' },
      { question: 'What is the best painting at the Geneva museum?', answer: 'Konrad Witz\'s "Miraculous Draught of Fishes" (1444) featuring the earliest accurate landscape in Western art, showing Lake Geneva with Mont Blanc in the background.' }
    ]
  },
  {
    slug: 'staatliche-kunsthalle-karlsruhe-karlsruhe-germany',
    name: 'Staatliche Kunsthalle Karlsruhe',
    websiteUrl: 'https://www.kunsthalle-karlsruhe.de/en/',
    ticketUrl: 'https://www.kunsthalle-karlsruhe.de/en/visit/',
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'One of Germany\'s oldest public art museums, founded 1846. Strong in German and French Old Masters.',
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
        notes: 'Under 18 free. Free on Fridays 2-6pm. One of Germany\'s most important regional galleries.',
        freeDay: null,
        freeHours: 'Friday 14:00-18:00',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.kunsthalle-karlsruhe.de/en/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No reservations needed. This excellent museum is uncrowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '14:00-16:00'],
        worstTimes: ['14:00-18:00 (Friday free hours)'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Friday afternoons are free and slightly busier. Otherwise one of Germany\'s great uncrowded museums.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Friedrichsplatz, city center garages',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 18 free. Friday afternoons (2-6pm) free for all.',
        'One of Germany\'s oldest and finest public art museums',
        'Outstanding collection of German painting from Cranach to current day',
        'Strong in French Impressionism and German Romanticism',
        'Grünewald\'s Crucifixion is a masterpiece of German Renaissance',
        'Karlsruhe is 1 hour south of Frankfurt by train',
        'The city was designed as a "fan city" radiating from the palace',
        'Combine with ZKM (Center for Art and Media) for a full art day'
      ],
      mustSee: [
        { name: 'Crucifixion', artist: 'Matthias Grünewald', note: 'German Renaissance masterpiece' },
        { name: 'Portrait of a Young Woman', artist: 'Lucas Cranach the Elder' },
        { name: 'The Large Bathers', artist: 'Paul Cézanne' },
        { name: 'Rest on the Flight into Egypt', artist: 'Hans Baldung Grien' }
      ]
    },
    faqs: [
      { question: 'How much is the Kunsthalle Karlsruhe?', answer: '€10 for adults. Under 18 free. Friday afternoons from 2-6pm are free for everyone.' },
      { question: 'What is at the Kunsthalle Karlsruhe?', answer: 'One of Germany\'s oldest and finest public art museums with exceptional German and French painting from medieval to modern, including Grünewald, Cranach, and Cézanne.' },
      { question: 'What are the Karlsruhe museum hours?', answer: 'Open Tuesday-Sunday 10am-6pm. Closed Mondays and some holidays. Friday afternoons (2-6pm) offer free admission.' },
      { question: 'Is the Kunsthalle Karlsruhe worth visiting?', answer: 'Yes, it\'s an underrated gem with museum-quality works rivaling much larger institutions. The Grünewald Crucifixion alone is worth the trip.' }
    ]
  },
  {
    slug: 'basilica-della-santissima-annunziata-florence-ital',
    name: 'Basilica della Santissima Annunziata',
    websiteUrl: 'https://www.annunziata.xoom.it/',
    ticketUrl: null,
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '07:30', close: '12:30' },
          tuesday: { open: '07:30', close: '12:30' },
          wednesday: { open: '07:30', close: '12:30' },
          thursday: { open: '07:30', close: '12:30' },
          friday: { open: '07:30', close: '12:30' },
          saturday: { open: '07:30', close: '12:30' },
          sunday: { open: '07:30', close: '12:30' }
        },
        afternoon: {
          monday: { open: '16:00', close: '18:30' },
          tuesday: { open: '16:00', close: '18:30' },
          wednesday: { open: '16:00', close: '18:30' },
          thursday: { open: '16:00', close: '18:30' },
          friday: { open: '16:00', close: '18:30' },
          saturday: { open: '16:00', close: '18:30' },
          sunday: { open: '16:00', close: '18:30' }
        },
        notes: 'Active church with morning and afternoon hours. Closed midday. The Chiostrino dei Voti contains important Andrea del Sarto frescoes.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'FREE. This is an active church. The Chiostrino dei Voti (cloister with frescoes) is free to visit during church hours.',
        freeDay: 'Every day',
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
        notes: 'No tickets needed. Free entry. Donations welcomed.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['07:30-10:00', '16:00-17:00'],
        worstTimes: ['10:00-12:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Most tourists miss this church. Even in summer, the frescoes are uncrowded. Sunday mornings have services.',
        avgVisitDuration: '30-45 minutes',
        recommendedDuration: '45 minutes to 1 hour'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: false,
        coatCheck: false,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'No parking. Florence historic center.',
        nearbyParking: 'Parking Sant\'Ambrogio, Parking Parterre'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: false,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: false,
        elevatorAccess: false,
        notes: 'Historic church with some accessibility limitations'
      },
      tips: [
        'FREE and overlooked by most tourists. A masterpiece hiding in plain sight.',
        'The Chiostrino dei Voti has major frescoes by Andrea del Sarto, Pontormo, and Rosso Fiorentino',
        'Andrea del Sarto\'s Birth of the Virgin is here',
        'Active church: dress appropriately (covered shoulders and knees)',
        'Closed midday. Plan for morning or late afternoon.',
        'Located on Piazza Santissima Annunziata, one of Florence\'s most beautiful squares',
        'The Ospedale degli Innocenti (by Brunelleschi) is on the same square',
        'Most people rush to the Uffizi, leaving this Renaissance treasure nearly empty'
      ],
      mustSee: [
        { name: 'Chiostrino dei Voti Frescoes', note: 'Complete fresco cycle by Mannerist masters' },
        { name: 'Birth of the Virgin', artist: 'Andrea del Sarto' },
        { name: 'Visitation', artist: 'Pontormo' },
        { name: 'Assumption of the Virgin', artist: 'Rosso Fiorentino' },
        { name: 'The Miraculous Annunciation', note: 'Venerated 14th-century fresco in the church' }
      ]
    },
    faqs: [
      { question: 'Is the Santissima Annunziata free?', answer: 'Yes, completely free. It\'s an active church. The Chiostrino dei Voti with Andrea del Sarto frescoes is accessible during church hours at no cost.' },
      { question: 'What art is at the Santissima Annunziata?', answer: 'The Chiostrino dei Voti contains major Mannerist frescoes by Andrea del Sarto, Pontormo, and Rosso Fiorentino. One of Florence\'s hidden art treasures.' },
      { question: 'What are the Santissima Annunziata hours?', answer: 'Open 7:30am-12:30pm and 4pm-6:30pm daily. Closed midday. Sunday mornings have services but you can still visit.' },
      { question: 'Is the Santissima Annunziata worth visiting?', answer: 'Absolutely. The Andrea del Sarto frescoes rival major museums, yet most tourists walk past. It\'s free, beautiful, and uncrowded.' }
    ]
  }
];

async function addMuseums() {
  console.log('Adding full museum information batch 2...\n');

  for (const museum of museumData) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          websiteUrl: museum.websiteUrl,
          ticketUrl: museum.ticketUrl,
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.name}`);
    } catch (error) {
      console.error(`✗ Error updating ${museum.slug}:`, error.message);
    }
  }

  console.log('\nBatch complete!');
}

addMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
