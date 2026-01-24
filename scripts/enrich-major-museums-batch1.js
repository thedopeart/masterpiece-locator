const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'hermitage',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: '11:00', close: '20:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '20:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-09', closed: true, reason: 'Victory Day' }
        ],
        notes: 'Extended hours Wednesday and Friday until 8pm. One of the world\'s largest museums with 3 million+ objects.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 800,
        senior: 0,
        seniorAge: 60,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'RUB',
        notes: 'RUB 800 (~$8 USD). Russian citizens free on certain days. Under 18 and students always free. Free third Thursday of month.',
        freeDay: 'Third Thursday of month',
        memberFree: true,
        russianSeniorFree: true
      },
      tickets: {
        onlineUrl: 'https://www.hermitagemuseum.org/wps/portal/hermitage/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week',
        notes: 'Online tickets provide skip-the-line access. Walk-up queues can be very long in summer.'
      },
      crowdData: {
        overall: 'Very Crowded',
        bestDays: ['Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-12:00', '18:00-20:00 (Wed/Fri)'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'White Nights (May-July) bring heavy tourism. The museum is massive; crowds disperse. Allow multiple days for thorough visit.',
        avgVisitDuration: '4-6 hours',
        recommendedDuration: '2-3 days for comprehensive visit'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafes throughout the complex',
        restaurant: true,
        restaurantName: 'Hermitage Restaurant',
        giftShop: true,
        coatCheck: true,
        coatCheckRequired: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Central St. Petersburg location.',
        nearbyParking: 'Street parking very limited, Metro recommended',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: true,
        audioGuide: true,
        audioGuideLanguages: ['ru', 'en', 'de', 'fr', 'es', 'it', 'zh', 'ja', 'ko'],
        audioGuideCost: 500,
        audioGuideCostCurrency: 'RUB',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of the world\'s largest museums with 3 million+ objects. You cannot see everything in one day.',
        'Plan 2-3 visits or prioritize specific collections',
        'Wednesday and Friday evenings until 8pm are less crowded',
        'Under 18 and students always free. Third Thursday free for all.',
        'Coat check is mandatory. Budget extra time.',
        'Download the Hermitage app for navigation',
        'The Winter Palace interiors are as spectacular as the art',
        'Take Metro to Admiralteyskaya station'
      ],
      mustSee: [
        { name: 'The Return of the Prodigal Son', artist: 'Rembrandt', location: 'Room 254' },
        { name: 'Madonna Litta', artist: 'Leonardo da Vinci', location: 'Room 214' },
        { name: 'Judith', artist: 'Giorgione', location: 'Room 217' },
        { name: 'Peacock Clock', location: 'Pavilion Hall', note: 'Mechanical marvel from 1777' },
        { name: 'The Winter Palace Interiors', note: 'Jordan Staircase, St. George Hall' }
      ]
    }
  },
  {
    slug: 'museo-del-prado-madrid-spain',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '20:00' },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-01-06', open: '10:00', close: '14:00', reason: 'Epiphany reduced hours' },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open until 8pm Mon-Sat, 7pm Sundays. Free entry last 2 hours daily. Last entry 30 min before closing.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 15,
        senior: 7.50,
        seniorAge: 65,
        student: 7.50,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Free last 2 hours daily (Mon-Sat 6-8pm, Sun 5-7pm). Free Nov 19 (Museum Anniversary). Paseo del Arte card available.',
        freeDay: 'November 19 (Museum Anniversary)',
        freeHours: 'Last 2 hours daily',
        memberFree: true,
        paseoDelArteCard: 32,
        paseoDelArteIncludes: 'Prado + Reina Sofía + Thyssen-Bornemisza'
      },
      tickets: {
        onlineUrl: 'https://www.museodelprado.es/en/visit-the-museum/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets provide timed entry. Free hours queues can be very long.'
      },
      crowdData: {
        overall: 'Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['March', 'April', 'July', 'August'],
        seasonalNotes: 'Semana Santa (Easter week) is extremely crowded. Free evening hours draw crowds. Morning is best for Velázquez galleries.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours; multiple visits ideal'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Prado',
        restaurant: true,
        restaurantName: 'Restaurante Prado',
        giftShop: true,
        giftShopName: 'Tienda Prado (excellent art books)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Plaza de las Cortes',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['es', 'en', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'ko', 'zh'],
        audioGuideCost: 6,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Free entry last 2 hours daily. Arrive early in free period to maximize time.',
        'Under 18 always free',
        'The Paseo del Arte card (€32) covers Prado, Reina Sofía, and Thyssen-Bornemisza',
        'Velázquez rooms are busiest. Go first thing at opening.',
        'The Prado excels in Spanish, Italian, and Flemish masters',
        'Metro: Banco de España (Line 2) or Atocha (Line 1)',
        'Combine with Retiro Park nearby for a perfect Madrid day',
        'Las Meninas by Velázquez is the star attraction. Expect crowds around it.'
      ],
      mustSee: [
        { name: 'Las Meninas', artist: 'Diego Velázquez', location: 'Room 12', note: 'The museum\'s most famous painting' },
        { name: 'The Garden of Earthly Delights', artist: 'Hieronymus Bosch', location: 'Room 56A' },
        { name: 'The Third of May 1808', artist: 'Francisco Goya', location: 'Room 64' },
        { name: 'The Descent from the Cross', artist: 'Rogier van der Weyden', location: 'Room 58' },
        { name: 'The Three Graces', artist: 'Peter Paul Rubens', location: 'Room 29' }
      ]
    }
  },
  {
    slug: 'art-institute-chicago',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '11:00', close: '17:00' },
          tuesday: { open: '11:00', close: '17:00' },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '20:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours Thursday until 8pm. Illinois residents free Thursday evenings 5-8pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 35,
        senior: 28,
        seniorAge: 65,
        student: 28,
        child: 0,
        childMaxAge: 13,
        youth: 28,
        youthAgeRange: '14-17',
        currency: 'USD',
        notes: 'Under 14 always free. Illinois residents free Thursday 5-8pm. Chicago residents free select dates. City Pass accepted.',
        freeDay: null,
        freeHours: 'Thursday 17:00-20:00 (Illinois residents)',
        memberFree: true,
        chicagoResidentDiscount: true,
        cityPassAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.artic.edu/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Timed entry tickets recommended. Chicago CityPASS and Go Chicago Card accepted.'
      },
      crowdData: {
        overall: 'Moderate to Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Thursday', 'Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00'],
        worstTimes: ['14:00-17:00', '17:00-20:00 Thursday'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Thursday free evenings are very popular with locals. Summer tourism heavy. The Impressionist galleries are always busy.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours for main highlights'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffè Moderno, Museum Café',
        restaurant: true,
        restaurantName: 'Terzo Piano (Modern Wing, excellent)',
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 35,
        parkingCurrency: 'USD',
        parkingNotes: 'East Monroe Garage (discounted for museum visitors)',
        nearbyParking: 'Millennium Park Garage, Grant Park garages',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es', 'zh', 'fr', 'de', 'ja', 'ko'],
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
        'Illinois residents get FREE entry Thursday 5-8pm. Bring ID.',
        'Under 14 always free',
        'The Modern Wing connects to Millennium Park via the Nichols Bridgeway',
        'One of the world\'s finest Impressionist collections',
        'A Sunday on La Grande Jatte and American Gothic are star attractions',
        'Audio guide is FREE and excellent',
        'Take the L (Brown, Green, Orange, Pink, Purple lines) to Adams/Wabash',
        'Combine with Millennium Park and the Bean for a perfect Chicago day'
      ],
      mustSee: [
        { name: 'A Sunday on La Grande Jatte', artist: 'Georges Seurat', location: 'Gallery 240' },
        { name: 'American Gothic', artist: 'Grant Wood', location: 'Gallery 263' },
        { name: 'Nighthawks', artist: 'Edward Hopper', location: 'Gallery 262' },
        { name: 'The Bedroom', artist: 'Vincent van Gogh', location: 'Gallery 241' },
        { name: 'Paris Street; Rainy Day', artist: 'Gustave Caillebotte', location: 'Gallery 201' }
      ]
    }
  },
  {
    slug: 'national-gallery-of-art',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open daily. Two buildings: West Building (European masters) and East Building (modern/contemporary). Connected by underground walkway.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Admission is ALWAYS FREE. All exhibitions free. Part of the Smithsonian Institution area but independently funded.',
        freeDay: 'Every day',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.nga.gov/visit.html',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Simply walk in during open hours. Special exhibitions may recommend timed entry.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'September', 'October'],
        worstMonths: ['March', 'April', 'July'],
        seasonalNotes: 'Cherry blossom season (late March-April) brings heavy DC tourism. Less crowded than Air and Space Museum. The only da Vinci in the Americas draws steady crowds.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '4-5 hours for both buildings'
      },
      amenities: {
        cafe: true,
        cafeName: 'Garden Café, Cascade Café, Espresso Bar',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Gallery Shops (West and East buildings)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking on the Mall is very limited. Metro strongly recommended.',
        strollerRental: true,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Free outdoor sculpture garden with ice rink in winter'
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
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibleEntrance: '6th Street entrance (West) or 4th Street (East)'
      },
      tips: [
        'Admission is ALWAYS FREE. One of the world\'s greatest free museums.',
        'Two buildings: West (Old Masters through 19th c.) and East (modern/contemporary)',
        'The underground Concourse connects both buildings with a moving walkway',
        'Ginevra de\' Benci is the only Leonardo da Vinci painting in the Americas',
        'The Sculpture Garden has an ice rink in winter (fee)',
        'Take Metro to Archives-Navy Memorial-Penn Quarter (Yellow/Green) or Judiciary Square (Red)',
        'Audio guide is free. Download the NGA app.',
        'Free daily tours available. Check the information desk for times.'
      ],
      mustSee: [
        { name: 'Ginevra de\' Benci', artist: 'Leonardo da Vinci', location: 'West Building, Gallery 6', note: 'Only da Vinci in the Americas' },
        { name: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', location: 'West Building, Gallery 50C', note: 'When on loan from Mauritshuis' },
        { name: 'Watson and the Shark', artist: 'John Singleton Copley', location: 'West Building' },
        { name: 'The Alba Madonna', artist: 'Raphael', location: 'West Building, Gallery 20' },
        { name: 'Calder Mobile', artist: 'Alexander Calder', location: 'East Building atrium' }
      ]
    }
  },
  {
    slug: 'rijksmuseum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '17:00' },
          tuesday: { open: '09:00', close: '17:00' },
          wednesday: { open: '09:00', close: '17:00' },
          thursday: { open: '09:00', close: '17:00' },
          friday: { open: '09:00', close: '17:00' },
          saturday: { open: '09:00', close: '17:00' },
          sunday: { open: '09:00', close: '17:00' }
        },
        exceptions: [],
        notes: 'Open daily 9am-5pm, 365 days a year including Christmas and New Year\'s. Last entry 30 min before closing.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 22.50,
        senior: 22.50,
        student: 22.50,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Museumkaart accepted. I amsterdam City Card accepted. Online tickets include time slot.',
        freeDay: null,
        memberFree: true,
        museumkaartAccepted: true,
        iAmsterdamCardAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.rijksmuseum.nl/en/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '3 months',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1-2 weeks',
        notes: 'Online tickets strongly recommended. Walk-up queues can be 1-2 hours in peak season. Timed entry helps manage crowds.'
      },
      crowdData: {
        overall: 'Very Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-10:00', '15:00-17:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'May', 'July', 'August'],
        seasonalNotes: 'Tulip season (April-May) is extremely crowded. The Night Watch gallery is always busy. Arrive at 9am for the best experience.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours for comprehensive visit'
      },
      amenities: {
        cafe: true,
        cafeName: 'Rijks Café',
        restaurant: true,
        restaurantName: 'Rijks Restaurant (Michelin-starred)',
        giftShop: true,
        giftShopName: 'Rijksmuseum Shop (excellent design items)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Q-Park Museumplein (underground)',
        strollerRental: true,
        wheelchairRental: true,
        bicycleStorage: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Book online in advance. Walk-up queues can exceed 2 hours in summer.',
        'Under 19 always free',
        'Arrive at 9am opening for the Night Watch before tour groups arrive',
        'Museumkaart holders can skip ticket lines (membership card for Dutch museums)',
        'The building passage is open 24/7 for cycling through (free)',
        'Take tram 2 or 12 to Rijksmuseum stop',
        'Combine with nearby Van Gogh Museum (book both in advance)',
        'The Night Watch underwent major restoration (2019-2021) and has a new gallery'
      ],
      mustSee: [
        { name: 'The Night Watch', artist: 'Rembrandt van Rijn', location: 'Gallery of Honour', note: 'The museum\'s centerpiece' },
        { name: 'The Milkmaid', artist: 'Johannes Vermeer', location: 'Gallery 2.21' },
        { name: 'The Jewish Bride', artist: 'Rembrandt van Rijn', location: 'Gallery of Honour' },
        { name: 'Self-Portrait', artist: 'Vincent van Gogh', location: '1st floor' },
        { name: 'The Merry Drinker', artist: 'Frans Hals', location: 'Gallery 2.10' }
      ]
    }
  },
  {
    slug: 'russian-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '13:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [],
        notes: 'Closed Tuesdays. Thursday late opening at 1pm, open until 9pm. Main building is Mikhailovsky Palace.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 800,
        senior: 400,
        seniorAge: 60,
        student: 400,
        child: 0,
        childMaxAge: 15,
        currency: 'RUB',
        notes: 'RUB 800 (~$8 USD) for main building. Combined ticket for all branches available. Under 16 free. Russian seniors free.',
        freeDay: null,
        memberFree: true,
        russianSeniorFree: true
      },
      tickets: {
        onlineUrl: 'https://rusmuseum.ru/en/mikhailovsky-palace/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets provide faster entry. The museum is less crowded than the Hermitage.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['June', 'July'],
        seasonalNotes: 'Less crowded than the Hermitage. White Nights bring tourism. Thursday evenings offer extended hours.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours for Mikhailovsky Palace'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        coatCheckRequired: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Street parking limited, Metro recommended',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['ru', 'en'],
        audioGuideCost: 350,
        audioGuideCostCurrency: 'RUB',
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'The world\'s largest collection of Russian art, from icons to the avant-garde',
        'Less crowded than the Hermitage but equally important for Russian art',
        'Thursday opens late (1pm) but stays open until 9pm',
        'Under 16 always free',
        'The Mikhailovsky Palace is the main building. Other branches have different hours.',
        'Take Metro to Nevsky Prospekt or Gostiny Dvor',
        'Don\'t miss the Russian avant-garde collection (Malevich, Kandinsky)',
        'Coat check is mandatory. Budget extra time.'
      ],
      mustSee: [
        { name: 'The Last Day of Pompeii', artist: 'Karl Bryullov', note: 'Enormous historical canvas' },
        { name: 'The Ninth Wave', artist: 'Ivan Aivazovsky', note: 'Iconic Russian seascape' },
        { name: 'Black Square', artist: 'Kazimir Malevich', note: 'Revolutionary avant-garde work' },
        { name: 'Barge Haulers on the Volga', artist: 'Ilya Repin' },
        { name: 'Icon Collection', note: 'Medieval Russian icons' }
      ]
    }
  },
  {
    slug: 'moma',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:30', close: '17:30' },
          tuesday: { open: '10:30', close: '17:30' },
          wednesday: { open: '10:30', close: '17:30' },
          thursday: { open: '10:30', close: '17:30' },
          friday: { open: '10:30', close: '21:00' },
          saturday: { open: '10:30', close: '19:00' },
          sunday: { open: '10:30', close: '17:30' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours Friday until 9pm. Free Friday evenings 5:30-9pm (UNIQLO Free Friday Nights).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 30,
        senior: 22,
        seniorAge: 65,
        student: 17,
        child: 0,
        childMaxAge: 15,
        currency: 'USD',
        notes: 'Under 16 free. Free for all Friday 5:30-9pm (UNIQLO Free Friday Nights). New York residents with EBT/SNAP free.',
        freeDay: null,
        freeHours: 'Friday 17:30-21:00',
        memberFree: true,
        ebtSnapFree: true
      },
      tickets: {
        onlineUrl: 'https://www.moma.org/tickets/select',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week',
        notes: 'Timed-entry tickets recommended, especially weekends. Friday free nights do not require tickets but expect long queues.'
      },
      crowdData: {
        overall: 'Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Friday', 'Saturday', 'Sunday'],
        bestTimes: ['10:30-12:00'],
        worstTimes: ['14:00-17:00', '17:30-21:00 Friday'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['December', 'July', 'August'],
        seasonalNotes: 'Friday free nights are extremely crowded. Holiday season in NYC is very busy. Starry Night gallery always has crowds.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4 hours minimum'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café 2, Terrace Café',
        restaurant: true,
        restaurantName: 'The Modern (Danny Meyer, Michelin-starred)',
        giftShop: true,
        giftShopName: 'MoMA Design Store (iconic design items)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Midtown Manhattan location.',
        nearbyParking: 'Icon Parking nearby, extremely expensive',
        strollerRental: true,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Abby Aldrich Rockefeller Sculpture Garden'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'ko', 'zh'],
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
        'Free Friday evenings 5:30-9pm (UNIQLO Free Friday Nights), but expect crowds',
        'Under 16 always free',
        'The Starry Night is on floor 5. Go early to avoid crowds.',
        'The free audio guide is excellent. Download the MoMA app.',
        'The MoMA Design Store has items you won\'t find elsewhere',
        'Take subway to 53rd St (E/M) or 5th Ave-53rd St (E/M)',
        'The Sculpture Garden is a peaceful escape from galleries',
        'Your ticket is valid all day. Leave and return if needed.'
      ],
      mustSee: [
        { name: 'The Starry Night', artist: 'Vincent van Gogh', location: 'Floor 5', note: 'MoMA\'s most famous painting' },
        { name: 'Campbell\'s Soup Cans', artist: 'Andy Warhol', location: 'Floor 4' },
        { name: 'Les Demoiselles d\'Avignon', artist: 'Pablo Picasso', location: 'Floor 5' },
        { name: 'The Persistence of Memory', artist: 'Salvador Dalí', location: 'Floor 5' },
        { name: 'Christina\'s World', artist: 'Andrew Wyeth', location: 'Floor 5' }
      ]
    }
  },
  {
    slug: 'cleveland-museum-of-art',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '21:00' },
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
        notes: 'Extended hours Wednesday and Friday until 9pm. Admission is ALWAYS FREE.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Admission is ALWAYS FREE. Special exhibitions may have fees. One of the finest free art museums in America.',
        freeDay: 'Every day',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.clevelandart.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for general admission. Simply walk in. Special exhibitions may require timed tickets.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Wed/Fri)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'One of America\'s best museums that\'s never crowded. Wednesday and Friday evenings are especially peaceful.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Provenance, Café',
        restaurant: true,
        restaurantName: 'Provenance Restaurant',
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking in museum garage (entrance on East Blvd)',
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
        artlens: true,
        artlensNote: 'ARTLENS Gallery: interactive digital experience, free'
      },
      tips: [
        'Admission is ALWAYS FREE. One of America\'s finest museums at no cost.',
        'Free parking in the museum garage. A truly accessible museum.',
        'Wednesday and Friday evenings until 9pm',
        'The ARTLENS Gallery is an interactive digital experience (free)',
        'Strong in Asian art, medieval armor, and American paintings',
        'Located in Wade Park, beautiful for a stroll before/after',
        'The atrium with its glass ceiling is architecturally stunning',
        'Audio guide is free. Download the CMA app.'
      ],
      mustSee: [
        { name: 'The Thinker', artist: 'Auguste Rodin', location: 'South entrance' },
        { name: 'Twilight in the Wilderness', artist: 'Frederic Edwin Church' },
        { name: 'Blue and Green Music', artist: 'Georgia O\'Keeffe' },
        { name: 'Armor Court', note: 'Exceptional medieval armor collection' },
        { name: 'Asian Art Collection', note: 'One of the finest in America' }
      ]
    }
  },
  {
    slug: 'kunsthistorisches-museum',
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
        seasonal: {
          summer: {
            period: 'June-August',
            monday: { open: '10:00', close: '18:00' },
            notes: 'Open Mondays in summer'
          }
        },
        exceptions: [],
        notes: 'Extended hours Thursday until 9pm. Open Mondays June-August only. The building itself is a masterpiece.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 21,
        senior: 18,
        seniorAge: 65,
        student: 18,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Vienna Pass accepted. Combined ticket with Treasury available (€24).',
        freeDay: null,
        memberFree: true,
        viennaPassAccepted: true,
        comboTicket: 24,
        comboIncludes: 'KHM + Imperial Treasury'
      },
      tickets: {
        onlineUrl: 'https://www.khm.at/en/visit/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets recommended for Bruegel exhibition times. Vienna Pass includes entry.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'The Bruegel room is always popular. Christmas market season brings tourism. Thursday evenings are quieter.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4 hours; add 1-2 hours for Treasury'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café-Restaurant KHM (under the dome)',
        restaurant: true,
        restaurantName: 'Café-Restaurant KHM',
        giftShop: true,
        giftShopName: 'KHM Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Museumsquartier garage',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'it', 'es', 'ru', 'zh', 'ja'],
        audioGuideCost: 6,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 19 always free',
        'The building is as impressive as the art. Look up at the dome and staircase.',
        'World\'s largest Bruegel collection. Don\'t miss Tower of Babel and Hunters in the Snow.',
        'Thursday evenings until 9pm are less crowded',
        'Café under the cupola is a Vienna institution',
        'Take U-Bahn U2 to Museumsquartier or tram 1, 2, D to Burgring',
        'Vienna Pass includes entry and saves money for multiple attractions',
        'Combine with the Natural History Museum directly opposite (same building design)'
      ],
      mustSee: [
        { name: 'The Tower of Babel', artist: 'Pieter Bruegel the Elder', location: 'Room X' },
        { name: 'Hunters in the Snow', artist: 'Pieter Bruegel the Elder', location: 'Room X' },
        { name: 'The Art of Painting', artist: 'Johannes Vermeer', location: 'Room 24' },
        { name: 'Infanta Margarita Teresa in a Blue Dress', artist: 'Diego Velázquez' },
        { name: 'Cellini Salt Cellar', location: 'Kunstkammer', note: 'Most famous piece of goldsmith work' }
      ]
    }
  },
  {
    slug: 'british-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '20:30' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Extended hours Friday until 8:30pm. Selected galleries open late on Fridays.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'GBP',
        notes: 'Admission is ALWAYS FREE. Special exhibitions may have fees. Donations welcomed (suggested £5).',
        freeDay: 'Every day',
        memberFree: true,
        suggestedDonation: 5
      },
      tickets: {
        onlineUrl: 'https://www.britishmuseum.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true,
        notes: 'Free timed-entry tickets recommended to guarantee entry, especially on weekends. Book online in advance.'
      },
      crowdData: {
        overall: 'Very Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-11:00', '17:00-20:30 (Friday)'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'One of the world\'s most visited museums. Always crowded around Rosetta Stone. Friday late nights are calmer.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours minimum; multiple visits ideal'
      },
      amenities: {
        cafe: true,
        cafeName: 'Court Café, Gallery Café',
        restaurant: true,
        restaurantName: 'Great Court Restaurant',
        giftShop: true,
        giftShopName: 'British Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Central London location.',
        nearbyParking: 'NCP Bloomsbury Square, very limited street parking',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'fr', 'de', 'es', 'it', 'ja', 'ko', 'zh', 'ru', 'pt'],
        audioGuideCost: 7,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Admission is FREE but book free timed-entry tickets online to guarantee entry',
        'Friday evenings until 8:30pm are much less crowded',
        'The Rosetta Stone is always mobbed. Go first thing or during Friday late hours.',
        'The Great Court is the largest covered public square in Europe',
        'Focus on specific galleries rather than trying to see everything',
        'Take Tube to Tottenham Court Road (Central/Northern), Holborn (Central/Piccadilly), or Russell Square (Piccadilly)',
        'Download the British Museum audio guide app (free with rental of device)',
        'Free daily tours available. Check the information desk.'
      ],
      mustSee: [
        { name: 'Rosetta Stone', location: 'Room 4', note: 'Most visited object in the museum' },
        { name: 'Parthenon Sculptures (Elgin Marbles)', location: 'Room 18' },
        { name: 'Egyptian Mummies', location: 'Rooms 62-63' },
        { name: 'Lewis Chessmen', location: 'Room 40' },
        { name: 'Sutton Hoo Ship Burial', location: 'Room 41' }
      ]
    }
  }
];

async function enrichMuseums() {
  console.log('Enriching major museums with full detail...\n');

  for (const museum of enrichedMuseums) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Enriched: ${result.name}`);
    } catch (error) {
      console.error(`✗ Error enriching ${museum.slug}:`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
