const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumData = [
  {
    slug: 'british-library-london-uk',
    name: 'British Library',
    websiteUrl: 'https://www.bl.uk/',
    ticketUrl: 'https://www.bl.uk/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:30', close: '18:00' },
          tuesday: { open: '09:30', close: '20:00' },
          wednesday: { open: '09:30', close: '18:00' },
          thursday: { open: '09:30', close: '18:00' },
          friday: { open: '09:30', close: '18:00' },
          saturday: { open: '09:30', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Late opening Tuesday until 8pm. The Treasures Gallery (permanent exhibition) is always free. Reading rooms require a Reader Pass.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'GBP',
        notes: 'Treasures Gallery is FREE. Special exhibitions typically £16-18. Reading rooms require free Reader Pass (bring two forms of ID).',
        freeDay: 'Every day (Treasures Gallery)',
        memberFree: true,
        specialExhibitionAdult: 16
      },
      tickets: {
        onlineUrl: 'https://www.bl.uk/visit/exhibitions',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '3 months',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week',
        notes: 'Free entry to Treasures Gallery, no ticket needed. Paid exhibitions benefit from advance booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:30-11:00', '18:00-20:00 (Tuesday)'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'The Treasures Gallery is never as crowded as major museums. Tuesday late nights offer quiet viewing.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2-3 hours including exhibitions'
      },
      amenities: {
        cafe: true,
        cafeName: 'The Restaurant, Café, Espresso Bar',
        restaurant: true,
        restaurantName: 'The Restaurant at the British Library',
        giftShop: true,
        giftShopName: 'British Library Shop (excellent literary gifts)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No visitor parking',
        nearbyParking: 'NCP St Pancras, limited street parking',
        strollerRental: false,
        wheelchairRental: true,
        readingRooms: true,
        readingRoomsNote: 'Free Reader Pass required (two forms of ID needed)'
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
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        hearingLoop: true
      },
      tips: [
        'The Treasures Gallery is FREE and contains the Magna Carta, Gutenberg Bible, and original Beatles lyrics',
        'Tuesday late opening until 8pm offers peaceful viewing',
        'The building itself is architecturally stunning, designed by Colin St John Wilson',
        'Located next to St Pancras and King\'s Cross stations. Easy access from anywhere.',
        'The Reading Rooms are free to use but require a Reader Pass (bring ID and proof of address)',
        'The shop has unique literary gifts you won\'t find elsewhere',
        'Don\'t miss the Sir John Ritblat Gallery with rotating treasures',
        'Combine with a visit to the King\'s Cross area restaurants and the Coal Drops Yard'
      ],
      mustSee: [
        { name: 'Magna Carta (1215)', location: 'Treasures Gallery', note: 'One of four surviving copies' },
        { name: 'Gutenberg Bible', location: 'Treasures Gallery', note: 'First major book printed in Europe' },
        { name: 'Leonardo da Vinci Notebook', location: 'Treasures Gallery' },
        { name: 'Original Beatles Lyrics', location: 'Treasures Gallery', note: 'Handwritten by Lennon and McCartney' },
        { name: 'Lindisfarne Gospels', location: 'Treasures Gallery', note: 'Illuminated manuscript c. 700 AD' }
      ]
    },
    faqs: [
      { question: 'Is the British Library free?', answer: 'The Treasures Gallery with Magna Carta, Gutenberg Bible, and other masterpieces is always free. Special exhibitions typically cost £16-18. Reading rooms are free with a Reader Pass.' },
      { question: 'What are the British Library hours?', answer: 'The library is open Monday and Wednesday-Friday 9:30am-6pm, Tuesday until 8pm, Saturday 9:30am-5pm, and Sunday 11am-5pm. Closed major holidays.' },
      { question: 'What treasures are at the British Library?', answer: 'The Treasures Gallery displays the Magna Carta, Gutenberg Bible, Leonardo da Vinci notebooks, Shakespeare First Folio, original Beatles lyrics, and illuminated medieval manuscripts.' },
      { question: 'Do I need a ticket for the British Library?', answer: 'No ticket is needed for the free Treasures Gallery. Special exhibitions require advance booking. Reading rooms require a free Reader Pass with two forms of ID.' }
    ]
  },
  {
    slug: 'museum-of-fine-arts-of-seville-seville-spain',
    name: 'Museum of Fine Arts of Seville',
    websiteUrl: 'https://www.museosdeandalucia.es/web/museodebellasartesdesevilla',
    ticketUrl: 'https://www.museosdeandalucia.es/web/museodebellasartesdesevilla/informacion-de-visita',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:00', close: '21:00' },
          wednesday: { open: '09:00', close: '21:00' },
          thursday: { open: '09:00', close: '21:00' },
          friday: { open: '09:00', close: '21:00' },
          saturday: { open: '09:00', close: '21:00' },
          sunday: { open: '09:00', close: '15:00' }
        },
        seasonal: {
          summer: {
            period: 'June 16 - September 15',
            tuesday: { open: '09:00', close: '15:00' },
            notes: 'Reduced summer hours due to Seville heat'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-01-06', closed: true, reason: 'Epiphany' },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Summer hours (mid-June to mid-Sept) are reduced due to extreme heat. Sunday closes at 3pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 1.50,
        senior: 0,
        seniorAge: 65,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'EU citizens FREE. Non-EU adults €1.50. One of Spain\'s finest museums at an incredible price.',
        freeDay: 'Every day for EU citizens',
        memberFree: true,
        euCitizensFree: true
      },
      tickets: {
        onlineUrl: 'https://www.museosdeandalucia.es/web/museodebellasartesdesevilla',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No reservations needed. This hidden gem rarely has queues.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-11:00', '18:00-21:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['October', 'November', 'February', 'March'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Summer is brutally hot in Seville and hours are reduced. Spring and fall are ideal. Semana Santa (Easter week) brings crowds to the city.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No museum parking. Historic center location.',
        nearbyParking: 'Parking Plaza de Armas, street parking limited',
        strollerRental: false,
        wheelchairRental: true,
        courtyard: true,
        courtyardNote: 'Beautiful convent courtyard with fountain'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['es', 'en'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'EU citizens enter FREE. Non-EU visitors pay only €1.50. Incredible value.',
        'Spain\'s second most important fine arts museum after the Prado',
        'Housed in a beautiful 17th-century convent with stunning courtyards',
        'The Murillo collection is exceptional (he was from Seville)',
        'Avoid summer visits when Seville reaches 40°C+ and hours are reduced',
        'Evening visits (6-9pm) are cooler and quieter',
        'Located on Plaza del Museo, a lovely square for pre/post visit drinks',
        'Combine with nearby Alameda de Hércules neighborhood for tapas'
      ],
      mustSee: [
        { name: 'Immaculate Conception', artist: 'Bartolomé Esteban Murillo', note: 'Several versions, Murillo\'s specialty' },
        { name: 'Portrait of Don Cristóbal Suárez de Ribera', artist: 'Diego Velázquez' },
        { name: 'San Hugo en el Refectorio', artist: 'Francisco de Zurbarán' },
        { name: 'The Apotheosis of Saint Thomas Aquinas', artist: 'Francisco de Zurbarán' }
      ]
    },
    faqs: [
      { question: 'Is the Museum of Fine Arts of Seville free?', answer: 'Yes for EU citizens. Non-EU visitors pay just €1.50. It\'s one of Spain\'s finest museums at an incredible price.' },
      { question: 'What are the Museum of Fine Arts of Seville hours?', answer: 'Open Tuesday-Saturday 9am-9pm and Sunday 9am-3pm. Closed Mondays. Summer hours (mid-June to mid-Sept) are reduced to mornings only due to extreme heat.' },
      { question: 'What art is at the Museum of Fine Arts of Seville?', answer: 'Spain\'s second-finest collection after the Prado, especially strong in Spanish Baroque. Highlights include works by Murillo, Velázquez, Zurbarán, and El Greco.' },
      { question: 'What is the best time to visit the Museum of Fine Arts of Seville?', answer: 'Visit in spring or fall when weather is pleasant. Avoid summer when Seville is extremely hot. Evening hours (6-9pm) offer cooler temperatures and fewer visitors.' }
    ]
  },
  {
    slug: 'dolores-olmedo-collection-mexico-city-mexico',
    name: 'Museo Dolores Olmedo',
    websiteUrl: 'https://www.museodoloresolmedo.org.mx/',
    ticketUrl: 'https://www.museodoloresolmedo.org.mx/visita',
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
        notes: 'Located in Xochimilco, south of Mexico City center. The hacienda grounds are as beautiful as the art.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 120,
        senior: 60,
        seniorAge: 60,
        student: 60,
        child: 0,
        childMaxAge: 5,
        currency: 'MXN',
        notes: 'MXN 120 (~$7 USD). Reduced rate for students, seniors, teachers. Under 6 free. Tuesday free for Mexican nationals.',
        freeDay: 'Tuesday (Mexican nationals)',
        memberFree: true,
        mexicanNationalFreeDay: 'Tuesday'
      },
      tickets: {
        onlineUrl: 'https://www.museodoloresolmedo.org.mx/visita',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No advance booking needed. Rarely crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['November', 'December', 'February', 'March'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Day of the Dead (late Oct-early Nov) is magical here with special altars. Rainy season (June-Sept) can affect gardens.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours including gardens'
      },
      amenities: {
        cafe: true,
        cafeName: 'Restaurant del Museo',
        restaurant: true,
        restaurantName: 'Restaurant with traditional Mexican cuisine',
        giftShop: true,
        coatCheck: false,
        lockers: true,
        wifi: false,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking on site',
        strollerRental: false,
        wheelchairRental: true,
        gardens: true,
        gardensNote: 'Beautiful hacienda gardens with peacocks and Xoloitzcuintli dogs',
        peacocks: true,
        xoloitzcuintliDogs: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['es', 'en'],
        audioGuideCost: 50,
        audioGuideCostCurrency: 'MXN',
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false,
        notes: 'Historic hacienda has some accessibility limitations'
      },
      tips: [
        'The world\'s largest private collection of Frida Kahlo and Diego Rivera works',
        'Dolores Olmedo was Rivera\'s muse and patron who preserved this collection',
        'The hacienda grounds have free-roaming peacocks and Xoloitzcuintli (Mexican hairless dogs)',
        'Located in Xochimilco. Combine with a trajinera boat ride on the canals.',
        'The Day of the Dead celebrations here are spectacular (late October-early November)',
        'Take Uber or taxi from city center (45-60 minutes depending on traffic)',
        'The restaurant serves excellent traditional Mexican food',
        'Photography is allowed in galleries (no flash)'
      ],
      mustSee: [
        { name: 'The Broken Column', artist: 'Frida Kahlo', note: 'One of her most powerful self-portraits' },
        { name: 'Self-Portrait with Monkey', artist: 'Frida Kahlo' },
        { name: 'Sunset at Acapulco', artist: 'Diego Rivera' },
        { name: 'Portrait of Dolores Olmedo', artist: 'Diego Rivera' },
        { name: 'The Xoloitzcuintli Dogs', note: 'Living descendants of ancient Mexican dogs roam the grounds' }
      ]
    },
    faqs: [
      { question: 'What is at the Museo Dolores Olmedo?', answer: 'The world\'s largest private collection of Frida Kahlo (25 works) and Diego Rivera (140 works), housed in a beautiful 16th-century hacienda in Xochimilco with peacocks and Xoloitzcuintli dogs.' },
      { question: 'How much is the Museo Dolores Olmedo?', answer: 'Admission is MXN 120 (~$7 USD). Students and seniors pay MXN 60. Mexican nationals enter free on Tuesdays.' },
      { question: 'How do I get to the Museo Dolores Olmedo?', answer: 'Located in Xochimilco, south of Mexico City center. Take Uber or taxi (45-60 min from centro). Combine with a trajinera boat ride on the famous Xochimilco canals.' },
      { question: 'What is the best time to visit the Museo Dolores Olmedo?', answer: 'Weekday mornings are quietest. Day of the Dead (late Oct-early Nov) features special altars but more crowds. Avoid rainy season (June-Sept) to enjoy the gardens.' }
    ]
  },
  {
    slug: 'biblioteca-ambrosiana-milan-italy',
    name: 'Biblioteca Ambrosiana',
    websiteUrl: 'https://www.ambrosiana.it/en/',
    ticketUrl: 'https://www.ambrosiana.it/en/visit/',
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
          { date: '2026-01-06', closed: true, reason: 'Epiphany' },
          { date: '2026-04-05', closed: true, reason: 'Easter Sunday' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'St. Stephen\'s Day' }
        ],
        notes: 'Last entry 1 hour before closing. Home to Leonardo da Vinci\'s Codex Atlanticus.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 15,
        senior: 13,
        seniorAge: 65,
        student: 10,
        child: 0,
        childMaxAge: 13,
        youth: 10,
        youthAgeRange: '14-18',
        currency: 'EUR',
        notes: 'Under 14 free with adult. Combined ticket with special exhibitions available. Audio guide included.',
        freeDay: null,
        memberFree: true,
        audioGuideIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.ambrosiana.it/en/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online booking recommended to guarantee entry. Walk-ups usually accommodated but limited daily capacity.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'May', 'September'],
        seasonalNotes: 'Milan Fashion Weeks (Feb, Sept) bring tourism. The museum is never as crowded as major attractions. A peaceful alternative to the Duomo area crowds.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Bookshop with Leonardo reproductions',
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No museum parking. Central Milan location.',
        nearbyParking: 'Parking Duomo, Parking Via Gonzaga',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        notes: 'Historic building has some accessibility limitations'
      },
      tips: [
        'Home to Leonardo da Vinci\'s Codex Atlanticus, his largest collection of drawings and writings',
        'Only a few pages of the Codex are displayed at a time, rotated periodically',
        'Audio guide is included in admission and essential for understanding the collection',
        'The Pinacoteca (art gallery) includes works by Raphael, Caravaggio, and Botticelli',
        'Founded in 1609, one of the first public libraries in Europe',
        'Located steps from the Duomo but far less crowded',
        'Combine with Milan\'s Last Supper (book months ahead) for a Leonardo day',
        'The Federico Borromeo collection of drawings is exceptional'
      ],
      mustSee: [
        { name: 'Codex Atlanticus', artist: 'Leonardo da Vinci', note: '1,119 pages of drawings and writings, rotated periodically' },
        { name: 'Musician', artist: 'Leonardo da Vinci', note: 'One of Leonardo\'s rare completed paintings' },
        { name: 'Basket of Fruit', artist: 'Caravaggio' },
        { name: 'Cartoon for School of Athens', artist: 'Raphael', note: 'Preparatory drawing for Vatican fresco' }
      ]
    },
    faqs: [
      { question: 'What is at the Biblioteca Ambrosiana?', answer: 'Leonardo da Vinci\'s Codex Atlanticus (1,119 pages of drawings), the Pinacoteca with works by Caravaggio and Raphael, and one of Europe\'s oldest public libraries founded in 1609.' },
      { question: 'How much is the Biblioteca Ambrosiana?', answer: 'Adult admission is €15, including audio guide. Students and youth (14-18) pay €10. Under 14 free with an adult.' },
      { question: 'Can I see the Codex Atlanticus?', answer: 'Yes, but only a few pages are displayed at a time and rotated periodically. The Codex contains 1,119 pages of Leonardo\'s drawings and writings.' },
      { question: 'What are the Biblioteca Ambrosiana hours?', answer: 'Open Tuesday-Sunday 10am-6pm, last entry at 5pm. Closed Mondays and major holidays including Easter and Christmas.' }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-de-rouen-rouen-france',
    name: 'Musée des Beaux-Arts de Rouen',
    websiteUrl: 'https://mbarouen.fr/',
    ticketUrl: 'https://mbarouen.fr/fr/informations-pratiques',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-11-01', closed: true, reason: 'All Saints Day' },
          { date: '2026-11-11', closed: true, reason: 'Armistice Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. One of France\'s most important regional museums with exceptional Impressionist collection.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 11,
        senior: 8,
        seniorAge: 65,
        student: 8,
        child: 0,
        childMaxAge: 25,
        currency: 'EUR',
        notes: 'Under 26 FREE. First Sunday of month free for all. One of France\'s best museums outside Paris.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        under26Free: true
      },
      tickets: {
        onlineUrl: 'https://mbarouen.fr/fr/billetterie',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No reservations needed. This outstanding museum is rarely crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Impressionist Festival (usually spring) brings more visitors. Otherwise consistently quiet. Monet painted Rouen Cathedral series just blocks away.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café du Musée',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Cathédrale, Parking du Palais',
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
        'Under 26 FREE. First Sunday of month free for all.',
        'One of the most important French museums outside Paris',
        'Outstanding Impressionist collection, fitting for Monet\'s beloved city',
        'Monet painted his famous Rouen Cathedral series just blocks away',
        'The Caravaggio (Flagellation of Christ) is a highlight',
        'Train from Paris Saint-Lazare to Rouen (1.5 hours) makes an easy day trip',
        'Combine with Rouen Cathedral and the charming old town',
        'The museum building itself is a beautiful 19th-century structure'
      ],
      mustSee: [
        { name: 'The Flagellation of Christ', artist: 'Caravaggio' },
        { name: 'Rouen Cathedral Series', artist: 'Claude Monet', note: 'Multiple views of the cathedral Monet painted nearby' },
        { name: 'The Virgin Among the Virgins', artist: 'Gerard David' },
        { name: 'Democritus', artist: 'Diego Velázquez' }
      ]
    },
    faqs: [
      { question: 'Is the Musée des Beaux-Arts de Rouen free?', answer: 'Free for visitors under 26. First Sunday of each month is free for all. Otherwise €11 for adults, €8 for seniors and students.' },
      { question: 'What are the Musée des Beaux-Arts de Rouen hours?', answer: 'Open Wednesday-Sunday 10am-6pm. Closed Monday and Tuesday. Also closed major French holidays.' },
      { question: 'What art is at the Musée des Beaux-Arts de Rouen?', answer: 'One of France\'s finest regional museums with works from the Renaissance to modern era. Highlights include Caravaggio, Monet, Velázquez, and Rubens.' },
      { question: 'Is the Musée des Beaux-Arts de Rouen worth visiting?', answer: 'Absolutely. It\'s one of France\'s most important museums outside Paris, with exceptional Impressionist works. Monet painted his Rouen Cathedral series just blocks away.' }
    ]
  },
  {
    slug: 'oskar-reinhart-foundation-winterthur-switzerland',
    name: 'Museum Oskar Reinhart "Am Römerholz"',
    websiteUrl: 'https://www.roemerholz.ch/sor/en/home.html',
    ticketUrl: 'https://www.roemerholz.ch/sor/en/ihr-besuch/eintrittspreise.html',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Extended hours Wednesday until 8pm. Located in Reinhart\'s former villa with gardens.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18,
        senior: 14,
        seniorAge: 64,
        student: 14,
        child: 0,
        childMaxAge: 15,
        youth: 14,
        youthAgeRange: '16-25',
        currency: 'CHF',
        notes: 'CHF 18 (~$20 USD). Under 16 free. Swiss Museum Pass accepted. Wednesday evening free 5-8pm.',
        freeDay: null,
        freeHours: 'Wednesday 17:00-20:00',
        memberFree: true,
        swissMuseumPassAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.roemerholz.ch/sor/en/ihr-besuch/eintrittspreise.html',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No reservations needed. This jewel-box museum is rarely crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '17:00-20:00 (Wednesday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'One of Switzerland\'s best-kept secrets. Never crowded. Wednesday evenings are free and peaceful.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours including gardens'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking on site',
        gardens: true,
        gardensNote: 'Beautiful villa gardens overlooking the Alps'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Wednesday evenings 5-8pm are FREE',
        'Under 16 always free',
        'One of the finest private collections in Europe, rivaling major museums',
        'Oskar Reinhart bequeathed his villa and collection to the Swiss nation',
        'Strong in French Impressionism and German Romanticism',
        'The villa setting with gardens is as beautiful as the art',
        'Swiss Museum Pass provides free entry',
        '20 minutes by train from Zurich. Easy day trip.',
        'Winterthur has TWO Reinhart museums. This one (Am Römerholz) is the villa with the best collection.'
      ],
      mustSee: [
        { name: 'The Cradle', artist: 'Berthe Morisot' },
        { name: 'Portrait of a Young Girl', artist: 'Pierre-Auguste Renoir' },
        { name: 'The Cliffs at Étretat', artist: 'Claude Monet' },
        { name: 'The Chalk Cliffs on Rügen', artist: 'Caspar David Friedrich' },
        { name: 'Dr. Gachet', artist: 'Vincent van Gogh', note: 'Second version of the famous portrait' }
      ]
    },
    faqs: [
      { question: 'Is the Oskar Reinhart collection free?', answer: 'Wednesday evenings 5-8pm are free. Under 16 always free. Otherwise CHF 18 for adults. Swiss Museum Pass accepted.' },
      { question: 'What is at the Oskar Reinhart Museum?', answer: 'One of Europe\'s finest private collections with masterpieces by Monet, Renoir, Van Gogh, Cézanne, Manet, and Caspar David Friedrich, displayed in Reinhart\'s villa.' },
      { question: 'How do I get to the Oskar Reinhart Museum?', answer: 'Located in Winterthur, 20 minutes by train from Zurich. The villa is a short taxi or bus ride from Winterthur station.' },
      { question: 'What are the Oskar Reinhart Museum hours?', answer: 'Open Tuesday-Sunday 10am-5pm, with extended hours until 8pm on Wednesday. Closed Mondays and major holidays.' }
    ]
  },
  {
    slug: 'finnish-national-gallery-helsinki-finland',
    name: 'Ateneum Art Museum (Finnish National Gallery)',
    websiteUrl: 'https://ateneum.fi/en/',
    ticketUrl: 'https://ateneum.fi/en/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-06', closed: true, reason: 'Independence Day' },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours Wednesday until 8pm. Part of the Finnish National Gallery (also includes Kiasma and Sinebrychoff).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18,
        senior: 16,
        seniorAge: 65,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 and students FREE. Helsinki Card included. The Ateneum houses Finnish classics and European masters.',
        freeDay: null,
        memberFree: true,
        studentsAlwaysFree: true,
        helsinkiCardIncluded: true
      },
      tickets: {
        onlineUrl: 'https://kauppa.kansallisgalleria.fi/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended for special exhibitions. Walk-ups usually available.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Wednesday)'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['January', 'February', 'May', 'September'],
        worstMonths: ['July', 'December'],
        seasonalNotes: 'Summer brings cruise ship visitors. Independence Day (Dec 6) is closed. Wednesday evenings are calm.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Ateneum',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Ateneum Shop (Nordic design items)',
        coatCheck: true,
        coatCheckRequired: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Elielinaukio, street parking limited',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fi', 'sv', 'en'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 18 and students always FREE',
        'Finland\'s most visited art museum, showcasing Finnish Golden Age and Nordic art',
        'Akseli Gallen-Kallela\'s Kalevala works are highlights',
        'Wednesday evenings until 8pm are less crowded',
        'Located opposite Helsinki Central Station. Incredibly convenient.',
        'Helsinki Card includes admission and public transport',
        'Coat check is mandatory in winter. Budget extra time.',
        'Combine with Kiasma (contemporary) nearby for complete Finnish National Gallery experience'
      ],
      mustSee: [
        { name: 'The Aino Triptych', artist: 'Akseli Gallen-Kallela', note: 'Finnish national epic visualized' },
        { name: 'Wounded Angel', artist: 'Hugo Simberg', note: 'Finland\'s most beloved painting' },
        { name: 'Boy and Crow', artist: 'Akseli Gallen-Kallela' },
        { name: 'Lake Keitele', artist: 'Akseli Gallen-Kallela' }
      ]
    },
    faqs: [
      { question: 'Is the Ateneum free?', answer: 'Free for under 18 and all students with valid ID. Adults pay €18, seniors €16. Helsinki Card includes admission.' },
      { question: 'What is at the Ateneum?', answer: 'Finland\'s premier art museum with the largest collection of Finnish art, including works by Akseli Gallen-Kallela. Also European masters including Van Gogh, Cézanne, and Modigliani.' },
      { question: 'What are the Ateneum hours?', answer: 'Open Tuesday-Friday 10am-6pm (Wednesday until 8pm), Saturday-Sunday 10am-5pm. Closed Mondays and major Finnish holidays.' },
      { question: 'Where is the Ateneum located?', answer: 'Directly opposite Helsinki Central Railway Station in the city center. One of the most conveniently located major museums in Europe.' }
    ]
  },
  {
    slug: 'museo-nacional-antropologia',
    name: 'Museo Nacional de Antropología',
    websiteUrl: 'https://www.mna.inah.gob.mx/',
    ticketUrl: 'https://www.mna.inah.gob.mx/visita_museo.php',
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
        notes: 'One of the world\'s greatest archaeology museums. The Aztec Sun Stone is the crown jewel.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 95,
        senior: 0,
        seniorAge: 60,
        student: 0,
        child: 0,
        childMaxAge: 12,
        currency: 'MXN',
        notes: 'MXN 95 (~$5 USD). Mexican nationals free Sundays. Free for seniors over 60, teachers, students with valid ID. Under 13 free.',
        freeDay: 'Sunday (Mexican nationals)',
        memberFree: true,
        mexicanNationalFreeSunday: true
      },
      tickets: {
        onlineUrl: 'https://www.mna.inah.gob.mx/visita_museo.php',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. No advance booking needed. Can be crowded on Sundays (free for Mexicans).'
      },
      crowdData: {
        overall: 'Moderate to Crowded',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday'],
        bestTimes: ['09:00-11:00', '16:00-18:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Sundays are free for Mexicans and very crowded. School holidays increase visitor numbers. The Aztec room is always busy.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours minimum; allow full day'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafés',
        restaurant: true,
        restaurantName: 'Restaurant with Mexican cuisine',
        giftShop: true,
        giftShopName: 'Excellent reproductions of pre-Hispanic art',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 35,
        parkingCurrency: 'MXN',
        parkingNotes: 'Parking available in Chapultepec Park',
        strollerRental: true,
        wheelchairRental: true,
        gardens: true,
        gardensNote: 'Beautiful courtyard with umbrella fountain'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['es', 'en', 'fr'],
        audioGuideCost: 80,
        audioGuideCostCurrency: 'MXN',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '1 week',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of the world\'s greatest museums, covering Mesoamerican civilizations',
        'The Aztec Sun Stone (Stone of the Sun) is the star attraction',
        'Budget at least 4-5 hours. This is a massive museum.',
        'Avoid Sundays when it\'s free for Mexicans and extremely crowded',
        'The Mexica (Aztec) and Maya rooms are the highlights',
        'The building by Pedro Ramírez Vázquez is architecturally significant',
        'Located in Chapultepec Park. Combine with the castle.',
        'Take Metro to Auditorio or Chapultepec stations'
      ],
      mustSee: [
        { name: 'Aztec Sun Stone (Piedra del Sol)', location: 'Mexica Room', note: 'The museum\'s most famous object' },
        { name: 'Coatlicue', location: 'Mexica Room', note: 'Massive Aztec goddess statue' },
        { name: 'Jade Mask of Pakal', location: 'Maya Room', note: 'From the tomb at Palenque' },
        { name: 'Olmec Colossal Heads', location: 'Gulf Coast Room' },
        { name: 'Replica of Pakal\'s Tomb', location: 'Maya Room', note: 'Walk-through recreation' }
      ]
    },
    faqs: [
      { question: 'How much is the Museo Nacional de Antropología?', answer: 'MXN 95 (~$5 USD). Free for Mexican seniors, students, and teachers with ID. Free for all under 13. Free Sundays for Mexican nationals.' },
      { question: 'What is at the Museo Nacional de Antropología?', answer: 'The world\'s greatest collection of Mesoamerican archaeology, including the Aztec Sun Stone, Olmec colossal heads, and Maya jade treasures spanning 4,000 years.' },
      { question: 'How long do I need at the Museo Nacional de Antropología?', answer: 'At least 4-5 hours for the highlights. The museum is enormous with 23 exhibition halls. A full day allows for a more complete experience.' },
      { question: 'What is the best day to visit the Museo Nacional de Antropología?', answer: 'Tuesday through Friday mornings are least crowded. Avoid Sundays when admission is free for Mexicans and the museum is packed.' }
    ]
  },
  {
    slug: 'mus233e-thomashenry-cherbourg-france',
    name: 'Musée Thomas-Henry',
    websiteUrl: 'https://www.cherbourg.fr/musee-thomas-henry/',
    ticketUrl: 'https://www.cherbourg.fr/musee-thomas-henry/informations-pratiques/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '12:30' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '12:30' },
          friday: { open: '10:00', close: '12:30' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '14:00', close: '18:00' }
        },
        seasonal: {
          summer: {
            period: 'June 15 - September 15',
            notes: 'Extended hours in summer, open all day without lunch break'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Winter hours have midday closure on some days. Located in Cherbourg-en-Cotentin, Normandy.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 5,
        senior: 3,
        seniorAge: 65,
        student: 3,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Very affordable for such a quality collection. First Sunday of month free.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.cherbourg.fr/musee-thomas-henry/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door only. No advance booking. This gem is never crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['September', 'October', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'D-Day anniversary visitors (June) pass through Cherbourg. Otherwise very quiet. A true hidden gem.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Public parking in Cherbourg center',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: false,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Home to the largest collection of paintings by Jean-François Millet outside Paris',
        'Millet was born nearby in Gréville-Hague',
        'Only €5 for adults. Under 18 free. First Sunday free for all.',
        'Winter hours include midday closures. Check before visiting.',
        'A perfect stop when exploring D-Day beaches and Normandy',
        'The port town of Cherbourg has excellent seafood restaurants',
        'Named after Thomas Henry, who donated his collection in the 19th century',
        'Takes about 3.5 hours by train from Paris via Caen'
      ],
      mustSee: [
        { name: 'The Gleaners (study)', artist: 'Jean-François Millet', note: 'Study for the famous Orsay painting' },
        { name: 'The Church at Gréville', artist: 'Jean-François Millet' },
        { name: 'Conversion of Saint Augustine', artist: 'Fra Angelico' },
        { name: 'Portrait of Louis XVII as a Child', artist: 'Elisabeth Vigée Le Brun' }
      ]
    },
    faqs: [
      { question: 'What is special about the Musée Thomas-Henry?', answer: 'It holds the largest collection of Jean-François Millet paintings outside Paris. Millet was born nearby in Gréville-Hague, Normandy.' },
      { question: 'How much is the Musée Thomas-Henry?', answer: 'Just €5 for adults, €3 for students and seniors. Under 18 free. First Sunday of each month is free for all.' },
      { question: 'What are the Musée Thomas-Henry hours?', answer: 'Varies by season. Wednesday and Saturday 10am-6pm year-round. Other days may close for lunch. Closed Mondays.' },
      { question: 'Is the Musée Thomas-Henry worth visiting?', answer: 'Yes, especially for Millet fans. An excellent stop when touring Normandy and the D-Day beaches, with works by Fra Angelico, Poussin, and Chardin.' }
    ]
  },
  {
    slug: '201cole-nationale-sup233rieure-des-beauxarts-ensba',
    name: 'École des Beaux-Arts Paris',
    websiteUrl: 'https://www.beauxartsparis.fr/en',
    ticketUrl: 'https://www.beauxartsparis.fr/en/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '13:00', close: '19:00' },
          wednesday: { open: '13:00', close: '19:00' },
          thursday: { open: '13:00', close: '19:00' },
          friday: { open: '13:00', close: '19:00' },
          saturday: { open: '11:00', close: '19:00' },
          sunday: { open: '11:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Hours are for exhibitions. The historic courtyards and chapel can be visited during school hours (call ahead). France\'s most prestigious art school.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 8,
        senior: 5,
        seniorAge: 65,
        student: 5,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Prices are for temporary exhibitions. The courtyards and exterior can often be viewed for free during school hours.',
        freeDay: null,
        memberFree: true,
        courtyardsFree: true
      },
      tickets: {
        onlineUrl: 'https://www.beauxartsparis.fr/en/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets for exhibitions at door. Historic spaces may require calling ahead.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['13:00-15:00'],
        worstTimes: ['16:00-18:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Academic year (Sept-June) has more activity. Summer may have reduced access. Exhibitions change regularly.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours including courtyards'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Beaux-Arts bookshop',
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'No parking. Central Paris location.',
        nearbyParking: 'Parking Saint-Germain-des-Prés',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: false,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false,
        notes: 'Historic building has accessibility limitations. Call ahead.'
      },
      tips: [
        'France\'s most prestigious art school, training artists since 1648',
        'The historic courtyards are filled with architectural fragments and plaster casts',
        'Call ahead to arrange visits to the Chapelle des Petits-Augustins',
        'Exhibitions change regularly and are always cutting-edge contemporary art',
        'Located in Saint-Germain-des-Prés, steps from the Seine',
        'Alumni include Renoir, Monet, Degas, Seurat, and countless others',
        'The building itself is a treasure of French architectural history',
        'Combine with Musée d\'Orsay (10-minute walk) for an art-filled day'
      ],
      mustSee: [
        { name: 'Cour du Mûrier (Mulberry Court)', note: 'Renaissance architectural fragments' },
        { name: 'Chapelle des Petits-Augustins', note: 'Medieval chapel with tomb sculptures, call ahead' },
        { name: 'Plaster Cast Collection', note: 'Copies of classical masterpieces used for teaching' },
        { name: 'Current Exhibition', note: 'Always contemporary and avant-garde' }
      ]
    },
    faqs: [
      { question: 'Can I visit the École des Beaux-Arts Paris?', answer: 'Yes. Exhibitions are open Tuesday-Sunday. The historic courtyards can often be visited during school hours. Call ahead for the chapel and special spaces.' },
      { question: 'What is at the École des Beaux-Arts?', answer: 'France\'s most prestigious art school since 1648. The historic buildings contain architectural fragments, plaster casts, and contemporary exhibitions. Alumni include Renoir, Monet, and Degas.' },
      { question: 'How much is the École des Beaux-Arts?', answer: 'Exhibitions cost €8 for adults, €5 for students and seniors. Under 18 free. The courtyards can often be seen for free during school hours.' },
      { question: 'Where is the École des Beaux-Arts?', answer: 'Located at 14 rue Bonaparte in Saint-Germain-des-Prés, steps from the Seine. Metro: Saint-Germain-des-Prés (Line 4) or Rue du Bac (Line 12).' }
    ]
  }
];

async function addMuseums() {
  console.log('Adding full museum information...\n');

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
