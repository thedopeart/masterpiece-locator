const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'national-gallery-of-canada-ottawa-canada',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Extended hours on Thursdays until 8pm. Free admission Thursday evenings 5pm-8pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 18,
        seniorAge: 65,
        student: 12,
        child: 0,
        childMaxAge: 11,
        youth: 12,
        youthAgeRange: '12-19',
        currency: 'CAD',
        notes: 'Free for children 11 and under. Free Thursday evenings 5pm-8pm for all. Indigenous peoples always free.',
        freeDay: 'Thursday evenings (5pm-8pm)',
        freeHours: '17:00-20:00',
        memberFree: true,
        groupRate: 16,
        groupMinSize: 10
      },
      tickets: {
        onlineUrl: 'https://www.gallery.ca/visit/admission',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        advanceWindow: '1 month',
        sameDayAvailable: true,
        refundPolicy: 'Refundable up to 24 hours before visit',
        notes: 'Online tickets available but not required. Walk-ups always accommodated.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '17:00-20:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Summer months see increased tourism. Thursday evenings busier due to free admission but still manageable.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours for main highlights'
      },
      amenities: {
        cafe: true,
        cafeName: 'Cafeteria',
        restaurant: true,
        restaurantName: 'NGC Bistro',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingNotes: 'Paid parking available on site and nearby',
        nearbyParking: 'Sussex Drive lots and street parking',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'fr'],
        audioGuideCost: 0,
        signLanguageTours: true,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleParking: true,
        accessibleRestrooms: true
      },
      tips: [
        'Visit Thursday evenings for free admission from 5pm to 8pm',
        "Don't miss the iconic spider sculpture 'Maman' by Louise Bourgeois outside",
        'The Canadian and Indigenous galleries offer unique works not found elsewhere',
        'The building itself, designed by Moshe Safdie, is architecturally significant',
        'Audio guide is free and available in English and French',
        'Indigenous peoples receive free admission at all times with ID'
      ]
    }
  },
  {
    slug: 'dallas-museum-of-art',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '17:00' },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '21:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Late Night Thursdays until 9pm with special programming. General admission is always free.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'General admission is ALWAYS FREE. Special exhibitions typically $10-16. DMA Friends members get free special exhibition access.',
        freeDay: 'Every day (general admission)',
        memberFree: true,
        specialExhibitionAdult: 16,
        specialExhibitionChild: 10
      },
      tickets: {
        onlineUrl: 'https://dma.org/visit/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for general admission. Special exhibitions may require timed tickets purchased online.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Thursday', 'Saturday'],
        bestTimes: ['11:00-13:00'],
        worstTimes: ['14:00-16:00', '18:00-21:00'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['March', 'June', 'July'],
        seasonalNotes: 'Thursday Late Nights draw larger crowds due to special events. Spring break and summer see increased family visits.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours for comprehensive visit'
      },
      amenities: {
        cafe: true,
        cafeName: 'DMA Cafe',
        restaurant: false,
        giftShop: true,
        giftShopName: 'DMA Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 10,
        parkingCurrency: 'USD',
        parkingNotes: 'Parking garage on site. Free after 5pm.',
        nearbyParking: 'Dallas Arts District garages',
        strollerRental: true,
        wheelchairRental: true
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
        accessibleParking: true,
        accessibleRestrooms: true,
        sensoryFriendlyHours: true,
        sensoryNotes: 'Sensory-friendly programs available for visitors with autism'
      },
      tips: [
        'General admission is always free, making it perfect for multiple visits',
        'Thursday Late Nights until 9pm feature live music, tours, and special events',
        'The Arts of the Americas and Wendy and Emery Reves Collection are highlights',
        'The museum connects to the Dallas Arts District via sculpture garden',
        'Parking is free after 5pm in the museum garage',
        'Join DMA Friends (free) for discounts on special exhibitions and events'
      ]
    }
  },
  {
    slug: 'smithsonian-american-art',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '11:30', close: '19:00' },
          tuesday: { open: '11:30', close: '19:00' },
          wednesday: { open: '11:30', close: '19:00' },
          thursday: { open: '11:30', close: '19:00' },
          friday: { open: '11:30', close: '19:00' },
          saturday: { open: '11:30', close: '19:00' },
          sunday: { open: '11:30', close: '19:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open daily including most federal holidays. Located in the historic Patent Office Building, shared with the National Portrait Gallery.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Admission is ALWAYS FREE. Part of the Smithsonian Institution, federally funded.',
        freeDay: 'Every day',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://americanart.si.edu/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets or reservations needed. Just walk in during open hours.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:30-13:00', '17:00-19:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'September', 'October'],
        worstMonths: ['March', 'April', 'July'],
        seasonalNotes: 'Less crowded than Mall museums. Cherry blossom season (late March-April) brings heavy DC tourism.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours to see both SAAM and National Portrait Gallery'
      },
      amenities: {
        cafe: true,
        cafeName: 'Courtyard Cafe',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No on-site parking',
        nearbyParking: 'Gallery Place-Chinatown garage, street meters',
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
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleParking: false,
        accessibleRestrooms: true,
        accessibleEntrance: 'F Street entrance'
      },
      tips: [
        'Admission is always free as part of the Smithsonian Institution',
        'The building houses both SAAM and the National Portrait Gallery, two museums in one visit',
        'The enclosed Kogod Courtyard is a stunning architectural feature with a glass canopy roof',
        "Don't miss the Luce Foundation Center, a visible storage facility with thousands of artworks on display",
        'Take Metro to Gallery Place-Chinatown (Red, Yellow, Green lines)',
        'The late 11:30am opening allows for morning visits to Mall museums first'
      ]
    }
  },
  {
    slug: 'alte-nationalgalerie',
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
        notes: "Extended hours on Thursdays until 8pm. Part of Berlin's Museum Island UNESCO World Heritage Site.",
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 6,
        seniorAge: 65,
        student: 6,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Museum Island day pass €22 (all five museums). Free for under 18. Berlin WelcomeCard holders get 25% discount.',
        freeDay: null,
        memberFree: true,
        comboTicket: 22,
        comboTicketIncludes: 'All five Museum Island museums (Alte Nationalgalerie, Pergamon, Neues, Altes, Bode)'
      },
      tickets: {
        onlineUrl: 'https://shop.smb.museum/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '4 weeks',
        sameDayAvailable: true,
        refundPolicy: 'Refundable up to 24 hours before',
        notes: 'Online booking recommended but walk-ups usually accommodated. Time slots help manage crowds.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Less crowded than Pergamon Museum. German school holidays increase visitor numbers. Thursday evenings are quieter.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours; allow full day for all Museum Island museums'
      },
      amenities: {
        cafe: true,
        cafeName: 'Cafe in the Colonnade Courtyard (shared)',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No on-site parking on Museum Island',
        nearbyParking: 'Parkhaus Alexanderplatz, street parking limited',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: true,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'es', 'it', 'ru'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleParking: false,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Consider the Museum Island day pass (€22) if visiting multiple museums',
        'Thursday evenings offer extended hours until 8pm with smaller crowds',
        'The building itself is a 19th-century architectural masterpiece',
        'Start at the top floor and work down for chronological viewing',
        "Caspar David Friedrich's landscapes are the star attraction",
        'Combine with James-Simon-Galerie for a new architectural experience'
      ]
    }
  },
  {
    slug: 'detroit-institute-of-arts',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:00', close: '16:00' },
          wednesday: { open: '09:00', close: '16:00' },
          thursday: { open: '09:00', close: '20:00' },
          friday: { open: '09:00', close: '16:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours on Thursdays until 8pm. Free admission for tri-county Michigan residents.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18,
        senior: 10,
        seniorAge: 62,
        student: 8,
        child: 0,
        childMaxAge: 5,
        youth: 8,
        youthAgeRange: '6-17',
        currency: 'USD',
        notes: 'FREE for Wayne, Oakland, and Macomb county residents with valid Michigan ID. Tri-county millage supports the museum.',
        freeDay: 'Every day for tri-county Michigan residents',
        memberFree: true,
        residencyFree: true,
        residencyRegions: ['Wayne County', 'Oakland County', 'Macomb County']
      },
      tickets: {
        onlineUrl: 'https://dia.org/visit/plan-your-visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at the door. No reservations needed. Bring Michigan ID for free resident admission.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-11:00', '18:00-20:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Generally less crowded than coastal museums. School field trips common on weekday mornings. Thursday evenings are relaxed.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours minimum; Rivera Court alone deserves 30 minutes'
      },
      amenities: {
        cafe: true,
        cafeName: 'Kresge Court Cafe',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 7,
        parkingCurrency: 'USD',
        parkingNotes: 'On-site parking garage. Free for members.',
        nearbyParking: 'Street parking on Woodward Avenue',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleParking: true,
        accessibleRestrooms: true,
        sensoryFriendlyHours: true,
        sensoryNotes: 'Sensory-friendly mornings available monthly'
      },
      tips: [
        'Tri-county Michigan residents get free admission with valid ID',
        "Diego Rivera's Detroit Industry Murals in Rivera Court are a must-see",
        'The museum has an excellent collection of armor and African art',
        'Thursday evenings until 8pm offer a quieter alternative to weekends',
        'The Kresge Court cafe is set in a beautiful Italian Renaissance-style courtyard',
        'Download the DIA Second Fridays app for evening events with music'
      ]
    }
  },
  {
    slug: 'ch226teau-de-versailles-versailles-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:00', close: '18:30' },
          wednesday: { open: '09:00', close: '18:30' },
          thursday: { open: '09:00', close: '18:30' },
          friday: { open: '09:00', close: '18:30' },
          saturday: { open: '09:00', close: '18:30' },
          sunday: { open: '09:00', close: '18:30' }
        },
        seasonal: {
          summer: {
            period: 'April 1 - October 31',
            palace: '9am-6:30pm',
            gardens: '8am-8:30pm',
            trianon: '12pm-6:30pm'
          },
          winter: {
            period: 'November 1 - March 31',
            palace: '9am-5:30pm',
            gardens: '8am-6pm',
            trianon: '12pm-5:30pm'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Gardens open from 8am. Last admission 1 hour before closing. Palace closed Mondays; gardens open daily.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 21,
        senior: 21,
        student: 21,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Palace only €21. Passport (palace + gardens + exhibitions) €28.50 on Musical Fountains/Gardens days. EU residents under 26 free.',
        freeDay: 'First Sunday of each month (November-March only)',
        freeHours: null,
        memberFree: true,
        euUnder26Free: true,
        passportTicket: 28.50,
        passportIncludes: 'Palace, gardens, Trianon estate, temporary exhibitions, Musical Fountains or Gardens'
      },
      tickets: {
        onlineUrl: 'https://billetterie.chateauversailles.fr/en',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '3 months',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1-2 weeks',
        refundPolicy: 'Non-refundable but date changeable up to 48 hours before',
        notes: 'Online booking strongly recommended. Timed entry helps manage crowds. Peak season queues can exceed 2 hours without online tickets.'
      },
      crowdData: {
        overall: 'Extremely Crowded',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['Tuesday', 'Saturday', 'Sunday'],
        bestTimes: ['09:00-10:00', '16:00-18:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['January', 'February', 'November', 'December'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Tuesdays are EXTREMELY crowded as most Paris museums close. Summer sees 30,000+ daily visitors. Arrive at 9am sharp or after 4pm.',
        avgVisitDuration: '4-6 hours',
        recommendedDuration: 'Full day to see Palace, gardens, and Trianon'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafes throughout grounds',
        restaurant: true,
        restaurantName: 'Ore by Alain Ducasse, La Petite Venise',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: true,
        parkingCost: 13,
        parkingCurrency: 'EUR',
        parkingNotes: 'Large parking lots at Place d\'Armes. Arrive early in summer.',
        nearbyParking: 'Versailles town center parking',
        strollerRental: false,
        wheelchairRental: true,
        golfCartTours: true,
        bikesForRent: true,
        boatRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: true,
        wheelchairReservationAdvance: '48 hours',
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'es', 'de', 'it', 'pt', 'zh', 'ja', 'ko', 'ru'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleParking: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibleRoute: 'Dedicated accessible circuit through palace'
      },
      tips: [
        'Book timed-entry tickets online in advance, especially in summer',
        'Arrive at exactly 9am to enter the Hall of Mirrors before tour groups',
        'AVOID TUESDAYS when other Paris museums are closed and crowds flock here',
        'Consider entering through the gardens and working backwards to the Palace',
        'The Musical Fountains show (weekends, April-October) is worth the extra cost',
        'Take RER C train from Paris to Versailles Château Rive Gauche (40 minutes)',
        'Rent bikes or a golf cart to explore the vast gardens and Trianon estate',
        'Bring a picnic for the gardens to save money on expensive on-site dining'
      ]
    }
  },
  {
    slug: 'mus233e-cond233-chantilly-france',
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
        seasonal: {
          summer: {
            period: 'Late March - early November',
            hours: '10am-6pm',
            notes: 'Open daily except Tuesdays'
          },
          winter: {
            period: 'Early November - late March',
            hours: '10:30am-5pm',
            notes: 'Reduced hours. Some areas may be closed. Check website.'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Tuesdays year-round. Winter hours are shorter. Located 25 minutes from Paris by train.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 17,
        seniorAge: 60,
        student: 15,
        child: 10,
        childMaxAge: 17,
        childMinAge: 7,
        infant: 0,
        infantMaxAge: 6,
        currency: 'EUR',
        notes: 'Full estate ticket includes château, museum, park, and stables. Under 7 free. Separate tickets available for park only (€10).',
        memberFree: true,
        parkOnlyTicket: 10,
        comboTicket: 20,
        comboTicketIncludes: 'Château, Musée Condé, French garden, English garden, Great Stables'
      },
      tickets: {
        onlineUrl: 'https://billetterie.domainedechantilly.com/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at the door. Online booking available for convenience but rarely necessary.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Much less crowded than Versailles despite comparable art collection. Peak times during equestrian shows at the Great Stables.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours for château, museum, gardens, and stables'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café des Jardins',
        restaurant: true,
        restaurantName: 'La Capitainerie',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking on site',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'es', 'de'],
        audioGuideCost: 3,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleParking: true,
        accessibleRestrooms: true,
        notes: 'Historic building has some accessibility limitations; call ahead for specific needs'
      },
      tips: [
        "The art collection rivals the Louvre for Renaissance masterpieces but with far fewer crowds",
        'Take the train from Paris Gare du Nord to Chantilly-Gouvieux (25 minutes)',
        "Don't miss the Très Riches Heures du Duc de Berry manuscript (facsimile displayed)",
        'The estate includes beautiful French and English gardens and the Great Stables equestrian museum',
        "Watch an equestrian show at the Great Stables, built to house 240 horses and 500 hounds",
        "Try the famous Chantilly cream (crème chantilly) at the café, invented here"
      ]
    }
  },
  {
    slug: 'national-palace-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '17:00' },
          tuesday: { open: '09:00', close: '17:00' },
          wednesday: { open: '09:00', close: '17:00' },
          thursday: { open: '09:00', close: '17:00' },
          friday: { open: '09:00', close: '21:00' },
          saturday: { open: '09:00', close: '21:00' },
          sunday: { open: '09:00', close: '17:00' }
        },
        exceptions: [],
        notes: 'Open daily year-round including all holidays. Extended evening hours on Fridays and Saturdays until 9pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 350,
        senior: 0,
        seniorAge: 65,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'TWD',
        notes: 'NT$350 (~$11 USD) for adults. Free for under 18, over 65, and students with valid ID. Free for all after 5pm on Fridays and Saturdays.',
        freeDay: 'Friday and Saturday evenings (after 5pm)',
        freeHours: '17:00-21:00',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://tickets.npm.gov.tw/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online booking recommended for Chinese New Year and major holidays. Timed entry during peak periods.'
      },
      crowdData: {
        overall: 'Very Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-10:00', '17:00-21:00'],
        worstTimes: ['10:00-15:00'],
        bestMonths: ['March', 'April', 'September'],
        worstMonths: ['January', 'February', 'July', 'August'],
        seasonalNotes: 'Tour groups dominate midday hours. Chinese New Year (late Jan-Feb) is extremely crowded. Friday/Saturday evenings are calm and free.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours for thorough viewing'
      },
      amenities: {
        cafe: true,
        cafeName: 'San Xi Tang',
        restaurant: true,
        restaurantName: 'Silks Palace',
        giftShop: true,
        giftShopName: 'NPM Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 40,
        parkingCurrency: 'TWD',
        parkingNotes: 'Underground parking available',
        nearbyParking: 'Street parking limited',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['zh', 'en', 'ja', 'ko', 'fr', 'de', 'es'],
        audioGuideCost: 150,
        audioGuideCostCurrency: 'TWD',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleParking: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Visit Friday or Saturday evening for free admission after 5pm with smaller crowds',
        'The Jadeite Cabbage and Meat-shaped Stone are the most popular exhibits, expect queues',
        'Audio guides in 7 languages are highly recommended for context',
        'Book tickets online during Chinese New Year (late January-February)',
        'Take a bus from Taipei Main Station or Shilin MRT station',
        'The Southern Branch in Chiayi has a separate collection and is less crowded'
      ]
    }
  },
  {
    slug: 'galleria-doria-pamphilj',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '19:00' },
          tuesday: { open: '09:00', close: '19:00' },
          wednesday: { closed: true },
          thursday: { open: '09:00', close: '19:00' },
          friday: { open: '09:00', close: '19:00' },
          saturday: { open: '09:00', close: '19:00' },
          sunday: { open: '09:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-08-15', closed: true, reason: 'Ferragosto' }
        ],
        notes: 'Closed Wednesdays. Last admission 1 hour before closing. Still a private residence of the Doria Pamphilj family.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 12,
        seniorAge: 65,
        student: 10,
        child: 0,
        childMaxAge: 6,
        youth: 10,
        youthAgeRange: '7-17',
        currency: 'EUR',
        notes: 'Audio guide INCLUDED in admission price. Children 6 and under free. Roma Pass accepted.',
        memberFree: false,
        audioGuideIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.doriapamphilj.it/roma/en/info/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No reservations needed. Simply arrive during opening hours. Never crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'May', 'October'],
        seasonalNotes: 'One of Rome\'s best-kept secrets. Consistently light crowds year-round, even during peak tourist season.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours with audio guide'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'No parking. Central Rome location.',
        nearbyParking: 'Villa Borghese garage, street parking very limited',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 0,
        audioGuideNotes: 'Narrated by Prince Jonathan Doria Pamphilj himself',
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        notes: 'Historic palace has some accessibility limitations. Call ahead for specific needs.'
      },
      tips: [
        "Use the included audio guide narrated by family member Prince Jonathan Doria Pamphilj, it's personal and charming",
        "Velázquez's portrait of Pope Innocent X is considered one of the greatest portraits ever painted",
        'The gallery halls retain their original 18th-century salon arrangement, paintings stacked floor to ceiling',
        'Much quieter than Vatican Museums or Borghese Gallery, no reservations needed',
        "Located on Via del Corso, easy to combine with Pantheon and Piazza Navona visits",
        'The palace is still a private residence, with the family occupying part of the building'
      ]
    }
  },
  {
    slug: 'walker-art-gallery',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open daily 10am-5pm. Part of National Museums Liverpool, all free admission.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'GBP',
        notes: 'Admission is ALWAYS FREE. Special exhibitions occasionally have charges. Donations welcome (suggested £5).',
        freeDay: 'Every day',
        memberFree: true,
        suggestedDonation: 5
      },
      tickets: {
        onlineUrl: 'https://www.liverpoolmuseums.org.uk/walker-art-gallery',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets or reservations needed. Simply walk in during open hours.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Consistently quiet. One of the best major art galleries to visit without crowds. School holidays see more families.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours for main collection'
      },
      amenities: {
        cafe: true,
        cafeName: 'Walker Art Gallery Cafe',
        restaurant: false,
        giftShop: true,
        coatCheck: false,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No on-site parking',
        nearbyParking: 'Q-Park Liverpool ONE, St Johns Shopping Centre car park',
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
        brailleGuides: true,
        serviceAnimals: true,
        accessibleParking: false,
        accessibleRestrooms: true,
        elevatorAccess: true,
        hearingLoop: true
      },
      tips: [
        'Admission is completely free, making repeat visits easy',
        'The Pre-Raphaelite collection is one of the finest in the world',
        "Don't miss works by Rembrandt, Rubens, and local favorite George Stubbs",
        'The building is a 5-minute walk from Liverpool Lime Street station',
        'Combine with World Museum next door (also free)',
        'The John Moores Painting Prize exhibition is held here biennially'
      ]
    }
  }
];

async function enrichMuseums() {
  console.log('Enriching batch 13 museums with detailed ticket information...\n');

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
