const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'vatican-museums',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '18:00' },
          tuesday: { open: '09:00', close: '18:00' },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '22:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { closed: true }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-01-06', closed: true, reason: 'Epiphany' },
          { date: '2026-02-11', closed: true, reason: 'Anniversary of Lateran Treaty' },
          { date: '2026-03-19', closed: true, reason: "St. Joseph's Day" },
          { date: '2026-04-05', closed: true, reason: 'Easter Sunday' },
          { date: '2026-04-06', closed: true, reason: 'Easter Monday' },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-06-29', closed: true, reason: 'Saints Peter and Paul' },
          { date: '2026-08-15', closed: true, reason: 'Assumption' },
          { date: '2026-11-01', closed: true, reason: 'All Saints' },
          { date: '2026-12-08', closed: true, reason: 'Immaculate Conception' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'St. Stephen\'s Day' }
        ],
        notes: 'Last entry 2 hours before closing. Friday evening openings until 10pm (April-October). Closed Sundays except last Sunday of month (free, very crowded).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 32,
        senior: 32,
        student: 26,
        child: 0,
        childMaxAge: 5,
        youth: 26,
        youthAgeRange: '6-18',
        currency: 'EUR',
        notes: 'Online tickets €32-40 with timed entry. Students/under 26 with valid ID pay €26. Free last Sunday of month (9am-2pm, last entry 12:30pm, extremely crowded).',
        freeDay: 'Last Sunday of month',
        freeHours: '09:00-14:00',
        memberFree: true,
        guidedTourAdult: 50,
        earlyAccessTour: 60,
        audioGuideCost: 8
      },
      tickets: {
        onlineUrl: 'https://tickets.museivaticani.va/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '60 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '2-4 weeks',
        refundPolicy: 'Non-refundable, date change available up to 7 days before',
        bookingFee: 5,
        notes: 'Online booking STRONGLY recommended. Walk-up queues can exceed 3 hours in summer. Timed entry slots every 30 minutes.'
      },
      crowdData: {
        overall: 'Extremely Crowded',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Wednesday', 'Saturday'],
        bestTimes: ['09:00-10:00', '16:00-18:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['March', 'April', 'June', 'July', 'August'],
        seasonalNotes: 'Wednesday mornings crowded due to Papal Audiences. Holy Week and Easter extremely busy. Last Sunday of month (free) is shoulder-to-shoulder. Summer sees 25,000+ daily visitors.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4-5 hours minimum; allow full day for thorough visit'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffetteria Vaticana, multiple snack bars',
        restaurant: true,
        restaurantName: 'Vatican Museums Self-Service Restaurant',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No parking at Vatican Museums',
        nearbyParking: 'Limited street parking in surrounding Rome streets, Metro recommended',
        strollerRental: false,
        wheelchairRental: true,
        wheelchairReservation: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: true,
        wheelchairReservationAdvance: '48 hours',
        wheelchairEmail: 'accessibilita.musei@scv.va',
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es', 'pt', 'ru', 'ja', 'ko', 'zh'],
        audioGuideCost: 8,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibleRoute: 'Designated wheelchair route available through museums'
      },
      tips: [
        'Book online AT LEAST 2 weeks in advance during peak season (March-October)',
        'Enter at 9am sharp or after 4pm to avoid the worst crowds',
        'Wednesday mornings are extra busy due to Papal Audience crowds',
        'AVOID the last Sunday of the month (free day) unless you enjoy extreme crowds',
        'The Sistine Chapel is at the END of the route, pace yourself',
        'Dress code enforced: no bare shoulders or knees (bring a cover-up)',
        'Take Metro Line A to Ottaviano station (10-minute walk to entrance)',
        'Consider a guided early-morning tour for best Sistine Chapel experience',
        'Photography allowed everywhere except the Sistine Chapel (strictly enforced)'
      ],
      mustSee: [
        { name: 'Sistine Chapel Ceiling', artist: 'Michelangelo', location: 'Sistine Chapel', note: 'No photos allowed, arrive early for quiet viewing' },
        { name: 'The Last Judgment', artist: 'Michelangelo', location: 'Sistine Chapel altar wall' },
        { name: 'The School of Athens', artist: 'Raphael', location: 'Raphael Rooms (Stanza della Segnatura)' },
        { name: 'Laocoön and His Sons', artist: 'Ancient Greek', location: 'Museo Pio-Clementino' }
      ]
    }
  },
  {
    slug: 'borghese-gallery-rome-italy',
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
        notes: 'MANDATORY timed entry in 2-hour slots: 9am, 11am, 1pm, 3pm, 5pm. You MUST exit at the end of your slot. Last entry slot at 5pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 11,
        seniorAge: 65,
        student: 11,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Base price €15 + €2 booking fee online + €3 for special exhibitions. EU citizens 18-25 pay €4. EU citizens under 18 free. First Sunday of month €5.',
        freeDay: null,
        memberFree: true,
        bookingFee: 2,
        euYouth: 4,
        euYouthAgeRange: '18-25',
        firstSundayPrice: 5
      },
      tickets: {
        onlineUrl: 'https://www.galleriaborghese.beniculturali.it/',
        onlineRequired: true,
        walkUpAvailable: false,
        skipTheLine: true,
        advanceRequired: true,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: false,
        peakSeasonAdvanceBooking: '2-4 weeks',
        refundPolicy: 'Non-refundable',
        bookingFee: 2,
        notes: 'RESERVATION MANDATORY. Walk-ins NOT accepted. Book online or call +39 06 32810. Same-day tickets almost never available. Entry is strictly timed in 2-hour sessions.'
      },
      crowdData: {
        overall: 'Moderate (controlled by timed entry)',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00 slot', '17:00 slot'],
        worstTimes: ['11:00 slot', '13:00 slot'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['April', 'May', 'June', 'October'],
        seasonalNotes: 'Timed entry limits crowds to ~360 people per slot. Spring and fall art season very busy. Book as early as possible for weekend slots.',
        avgVisitDuration: '2 hours (enforced)',
        recommendedDuration: '2 hours (maximum allowed per visit)'
      },
      amenities: {
        cafe: true,
        cafeName: 'Caffetteria della Galleria Borghese',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        coatCheckRequired: true,
        lockers: true,
        lockersRequired: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No parking at museum. Villa Borghese park has limited paid parking.',
        nearbyParking: 'Villa Borghese underground garage, street parking in Parioli neighborhood',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: true,
        wheelchairReservationAdvance: '48 hours',
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 6,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'RESERVATIONS ARE MANDATORY. You cannot visit without a pre-booked timed ticket.',
        'Book as far in advance as possible, especially for weekends and the 9am/11am slots',
        'You have exactly 2 hours. Plan your route and prioritize what you want to see.',
        'All bags and large items must be checked. Bring only essentials.',
        'The museum is small but packed with masterpieces. 2 hours is actually sufficient.',
        'Walk through Villa Borghese gardens before or after your visit.',
        'Take Metro Line A to Spagna and walk 15 minutes through the gardens',
        'Call +39 06 32810 if online booking is sold out (sometimes phone reservations available)'
      ],
      mustSee: [
        { name: 'Apollo and Daphne', artist: 'Gian Lorenzo Bernini', location: 'Room III' },
        { name: 'David', artist: 'Gian Lorenzo Bernini', location: 'Room II' },
        { name: 'Pauline Bonaparte as Venus Victrix', artist: 'Antonio Canova', location: 'Room I' },
        { name: 'Sacred and Profane Love', artist: 'Titian', location: 'Room XX (upper floor)' }
      ]
    }
  },
  {
    slug: 'grand-egyptian-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '21:00' },
          tuesday: { open: '09:00', close: '21:00' },
          wednesday: { open: '09:00', close: '21:00' },
          thursday: { open: '09:00', close: '21:00' },
          friday: { open: '09:00', close: '21:00' },
          saturday: { open: '09:00', close: '21:00' },
          sunday: { open: '09:00', close: '21:00' }
        },
        exceptions: [],
        notes: 'Open daily including holidays. Last entry 2 hours before closing. Extended evening hours allow for sunset visits.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 1300,
        senior: 650,
        seniorAge: 60,
        student: 650,
        child: 650,
        childMaxAge: 17,
        childMinAge: 6,
        infant: 0,
        infantMaxAge: 5,
        currency: 'EGP',
        notes: 'EGP 1300 (~$26 USD) for foreigners. Egyptian nationals pay EGP 200. Students and children 6-17 pay half price. Tutankhamun galleries require separate ticket (EGP 800 extra).',
        tutankhamunExtra: 800,
        egyptianNationalPrice: 200,
        freeDay: null,
        memberFree: false
      },
      tickets: {
        onlineUrl: 'https://gem.gov.eg/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week',
        notes: 'Online booking recommended for Tutankhamun galleries. Multiple ticket tiers available. Walk-ups accepted but may face queues during peak hours.'
      },
      crowdData: {
        overall: 'Moderate to Crowded',
        bestDays: ['Sunday', 'Monday', 'Tuesday'],
        worstDays: ['Friday', 'Saturday'],
        bestTimes: ['09:00-11:00', '18:00-21:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['June', 'July', 'August'],
        worstMonths: ['November', 'December', 'January', 'February'],
        seasonalNotes: 'Winter (Nov-Feb) is peak tourism season in Egypt. Summer is extremely hot but less crowded. Evening visits offer cooler temperatures and pyramid views at sunset.',
        avgVisitDuration: '4-5 hours',
        recommendedDuration: '5-6 hours for comprehensive visit including Tutankhamun galleries'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafes and food courts',
        restaurant: true,
        restaurantName: 'GEM Restaurants',
        giftShop: true,
        giftShopName: 'GEM Gift Shop (largest museum shop in Egypt)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Large free parking lot',
        strollerRental: true,
        wheelchairRental: true,
        cinemaTheater: true,
        childrenMuseum: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['ar', 'en', 'fr', 'de', 'es', 'it', 'ja', 'zh'],
        audioGuideCost: 200,
        audioGuideCostCurrency: 'EGP',
        signLanguageTours: true,
        brailleGuides: true,
        serviceAnimals: true,
        accessibleParking: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Book the Tutankhamun galleries ticket separately for the full King Tut collection',
        'Evening visits (after 6pm) offer pyramid views at sunset from the museum terrace',
        'The museum is MASSIVE (over 480,000 sq meters). Wear comfortable shoes.',
        'Summer months are less crowded but extremely hot. Stay hydrated.',
        'The museum is near the Pyramids of Giza. Combine visits in one day.',
        'Photography is allowed in most areas (no flash). Some galleries restrict cameras.',
        'Download the GEM app for navigation and audio guides',
        'Take an Uber or taxi from Cairo. The museum is about 30 minutes from downtown.'
      ],
      mustSee: [
        { name: 'Tutankhamun Death Mask', note: 'Requires separate Tutankhamun gallery ticket' },
        { name: 'Grand Staircase with Ramesses II Statue', note: 'Spectacular entrance with colossal statue' },
        { name: "Tutankhamun's Golden Throne", note: 'In Tutankhamun galleries' },
        { name: 'Royal Mummies Hall', note: 'Ancient pharaohs including Ramesses II' }
      ]
    }
  },
  {
    slug: 'gallerie-dell-accademia-venice',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:15', close: '14:00' },
          tuesday: { open: '08:15', close: '19:15' },
          wednesday: { open: '08:15', close: '19:15' },
          thursday: { open: '08:15', close: '19:15' },
          friday: { open: '08:15', close: '19:15' },
          saturday: { open: '08:15', close: '19:15' },
          sunday: { open: '08:15', close: '19:15' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Shortened hours on Mondays (8:15am-2pm). Last entry 1 hour before closing. Ticket office closes 45 minutes before museum.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 15,
        senior: 15,
        student: 2,
        studentMaxAge: 25,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'EU citizens 18-25 pay €2. EU citizens under 18 free. First Sunday of month free for all. Combined ticket with Palazzo Grimani €17.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        euYouth: 2,
        euYouthAgeRange: '18-25',
        comboTicket: 17,
        comboIncludes: 'Gallerie dell\'Accademia + Palazzo Grimani'
      },
      tickets: {
        onlineUrl: 'https://www.gallerieaccademia.it/en/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        bookingFee: 1.50,
        refundPolicy: 'Non-refundable',
        notes: 'Online booking recommended during Venice Biennale and peak summer. Walk-ups possible but may queue, especially for Da Vinci\'s Vitruvian Man temporary displays.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['08:15-10:00', '17:00-19:00'],
        worstTimes: ['10:00-13:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['May', 'June', 'September', 'October'],
        seasonalNotes: 'Venice Biennale years (odd years) dramatically increase crowds. Carnival season (February) is extremely busy throughout Venice. Flooding (acqua alta) may affect access Nov-Jan.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Bookshop at entrance',
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No cars in Venice. Arrive by vaporetto or on foot.',
        nearbyParking: 'Piazzale Roma parking garages (20-minute walk)',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 6,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        notes: 'Historic building with some limitations. Call ahead for accessibility needs.'
      },
      tips: [
        'Monday hours are drastically shorter (closes at 2pm). Plan accordingly.',
        'Take Vaporetto Line 1 or 2 to Accademia stop, directly at museum entrance',
        'The museum is in a former convent and scuola, with intimate gallery spaces',
        'Da Vinci\'s Vitruvian Man is rarely displayed due to its fragility (check website)',
        'Venice Card provides skip-the-line entry and vaporetto transport',
        'Combine with nearby Peggy Guggenheim Collection (10-minute walk)',
        'First Sunday of month is free but crowded',
        'No cafe inside. Grab coffee at nearby Campo Santo Stefano before or after.'
      ],
      mustSee: [
        { name: 'Vitruvian Man', artist: 'Leonardo da Vinci', note: 'Rarely displayed, check schedule' },
        { name: 'The Tempest', artist: 'Giorgione', location: 'Room V' },
        { name: 'Feast in the House of Levi', artist: 'Paolo Veronese', location: 'Room X', note: 'Massive canvas, originally The Last Supper' },
        { name: 'Pietà', artist: 'Titian', location: 'Room XI', note: 'Titian\'s final painting' }
      ]
    }
  },
  {
    slug: 'frick-collection',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours on Fridays until 9pm. Pay-what-you-wish Fridays 4pm-9pm. Now at new Frick Madison building (reopened 2024).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 26,
        senior: 20,
        seniorAge: 65,
        student: 17,
        child: 0,
        childMaxAge: 9,
        currency: 'USD',
        notes: 'Children under 10 not admitted. Students and visitors 10-17 pay $17. Pay-what-you-wish every Friday 4pm-9pm.',
        freeDay: null,
        freeHours: 'Friday 4pm-9pm (pay-what-you-wish)',
        memberFree: true,
        payWhatYouWish: true,
        payWhatYouWishHours: 'Friday 16:00-21:00'
      },
      tickets: {
        onlineUrl: 'https://www.frick.org/visit/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week',
        notes: 'Timed-entry tickets recommended but walk-ups accepted if capacity allows. Pay-what-you-wish Fridays do not require advance booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['Friday', 'Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00'],
        worstTimes: ['14:00-16:00', '18:00-21:00 (Fridays)'],
        bestMonths: ['January', 'February', 'August'],
        worstMonths: ['December', 'March', 'April'],
        seasonalNotes: 'Holiday season very popular. Pay-what-you-wish Fridays draw crowds. Now at Frick Madison building (Breuer building), eventually returning to original mansion.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Frick Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'SpotHero nearby, street parking limited',
        strollerRental: false
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
        'Currently at Frick Madison (Breuer building) at 945 Madison Ave while main mansion is renovated',
        'Children under 10 are NOT admitted. Plan childcare accordingly.',
        'Pay-what-you-wish Friday evenings 4pm-9pm are the best budget option',
        'The collection is intimate and personal, like visiting a private mansion',
        'Take subway to 77th Street (6 train) or 72nd Street (Q train)',
        'Free audio guide included with admission',
        'The Frick is small. Combined it with the Met (15-minute walk) for a full museum day.',
        'Henry Clay Frick\'s original mansion will reopen eventually with expanded galleries'
      ],
      mustSee: [
        { name: 'Officer and Laughing Girl', artist: 'Johannes Vermeer', note: 'Three Vermeers total in collection' },
        { name: 'The Polish Rider', artist: 'Rembrandt' },
        { name: 'St. Francis in the Desert', artist: 'Giovanni Bellini' },
        { name: 'Comtesse d\'Haussonville', artist: 'Jean-Auguste-Dominique Ingres' }
      ]
    }
  },
  {
    slug: 'dulwich-picture-gallery',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Last entry 30 minutes before closing. Gardens open 8am-5pm (or dusk). Free entry to grounds.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 18,
        seniorAge: 60,
        student: 18,
        child: 0,
        childMaxAge: 17,
        currency: 'GBP',
        notes: 'Under 18 and accompanying adult free. National Art Pass holders free. Art Fund members free. Includes special exhibitions and grounds.',
        freeDay: null,
        memberFree: true,
        artFundFree: true,
        nationalArtPassFree: true,
        friendsProgram: true
      },
      tickets: {
        onlineUrl: 'https://www.dulwichpicturegallery.org.uk/visit/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at the door. Online booking available but not necessary. Major exhibitions may recommend advance booking.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August'],
        seasonalNotes: 'Consistently quiet, even on weekends. A peaceful alternative to central London galleries. Gardens are lovely in spring and summer.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours including gardens'
      },
      amenities: {
        cafe: true,
        cafeName: 'Gallery Café',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: false,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking on Gallery Road (limited spaces)',
        nearbyParking: 'Dulwich Village street parking',
        strollerRental: false,
        wheelchairRental: true,
        gardens: true
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
        accessibleParking: true,
        inductionLoop: true
      },
      tips: [
        'The world\'s first purpose-built public art gallery (opened 1817), designed by Sir John Soane',
        'Under 18s get in free WITH a free adult (1 adult per child)',
        'The intimate scale means you can see everything in 1-2 hours',
        'Beautiful gardens are free to visit even without gallery admission',
        'Take train to West Dulwich or North Dulwich from Victoria or London Bridge',
        'The Dulwich Festival in May features special gallery events',
        'Check for late-night events and talks throughout the year',
        'Combine with a walk through Dulwich Park nearby'
      ],
      mustSee: [
        { name: 'Girl at a Window', artist: 'Rembrandt' },
        { name: 'A Woman Bathing in a Stream', artist: 'Rembrandt' },
        { name: 'The Linley Sisters', artist: 'Thomas Gainsborough' },
        { name: 'Samson and Delilah', artist: 'Anthony van Dyck' }
      ]
    }
  },
  {
    slug: 'belvedere',
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
          { date: '2026-12-24', close: '16:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-31', close: '16:00', reason: "New Year's Eve early close" }
        ],
        notes: 'Upper Belvedere (main collection with The Kiss) open 9am-6pm, Fridays until 9pm. Lower Belvedere and Belvedere 21 have separate hours.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18.90,
        senior: 15.90,
        seniorAge: 65,
        student: 15.40,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Upper Belvedere €18.90. Combined ticket (Upper + Lower) €26. Under 19 free. Vienna Pass accepted.',
        freeDay: null,
        memberFree: true,
        comboTicket: 26,
        comboIncludes: 'Upper Belvedere + Lower Belvedere',
        viennaPassAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.belvedere.at/en/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '90 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '1 week',
        notes: 'Online tickets recommended for The Kiss. Time slots help manage crowds around Klimt galleries. Vienna Pass provides entry.'
      },
      crowdData: {
        overall: 'Moderate to Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-10:00', '17:00-18:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'The Kiss gallery is always crowded. Christmas market season (Dec) brings heavy tourism. Friday evenings are quieter for late viewing.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours for Upper Belvedere; add 1.5 hours for Lower'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Schlossgarten',
        restaurant: true,
        restaurantName: 'Stöckl im Park',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Garage Am Heumarkt, street parking limited',
        strollerRental: false,
        wheelchairRental: true,
        gardens: true,
        gardensNote: 'Baroque gardens free to visit'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'it', 'es', 'ru', 'zh', 'ja'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'The Kiss by Gustav Klimt is the star attraction. Visit at opening (9am) for the smallest crowds.',
        'Friday evenings until 9pm are less crowded than weekday midday.',
        'The baroque gardens between Upper and Lower Belvedere are free and stunning.',
        'Under 19 years old? Admission is FREE.',
        'Take tram D to Schloss Belvedere stop (Upper) or tram 71 to Unteres Belvedere (Lower)',
        'The Vienna Pass includes Belvedere and saves money if visiting multiple attractions',
        'Lower Belvedere hosts changing exhibitions and is less crowded than Upper',
        "Walk through the gardens from Lower to Upper Belvedere for the palace's iconic postcard view"
      ],
      mustSee: [
        { name: 'The Kiss', artist: 'Gustav Klimt', location: 'Klimt Collection, Upper Belvedere', note: 'The most famous painting in Vienna' },
        { name: 'Judith and the Head of Holofernes', artist: 'Gustav Klimt', location: 'Upper Belvedere' },
        { name: 'Napoleon at the Saint-Bernard Pass', artist: 'Jacques-Louis David', location: 'Upper Belvedere' },
        { name: 'Death and the Maiden', artist: 'Egon Schiele', location: 'Upper Belvedere' }
      ]
    }
  },
  {
    slug: 'los-angeles-county-museum-of-art-lacma-los-angeles',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '11:00', close: '18:00' },
          tuesday: { closed: true },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '20:00' },
          saturday: { open: '10:00', close: '19:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Tuesdays. Extended hours Friday until 8pm. Weekend hours 10am-7pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 28,
        senior: 23,
        seniorAge: 65,
        student: 23,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Under 18 always free. LA County residents free after 3pm weekdays. Free second Tuesday of each month (NextGen program).',
        freeDay: 'Second Tuesday of month (NextGen)',
        freeHours: 'Weekdays after 3pm (LA County residents)',
        memberFree: true,
        laCountyResidentDiscount: true
      },
      tickets: {
        onlineUrl: 'https://www.lacma.org/visit/admission',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets recommended for Urban Light photo opportunities at peak times. Special exhibitions may require separate timed tickets.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00'],
        worstTimes: ['16:00-sunset'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['June', 'July', 'August', 'December'],
        seasonalNotes: 'Urban Light installation draws huge crowds at sunset for photos. Summer tourism is heavy. Weekday afternoons are calm.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours plus time for Urban Light photos'
      },
      amenities: {
        cafe: true,
        cafeName: 'Ray\'s and Stark Bar',
        restaurant: true,
        restaurantName: 'Ray\'s at LACMA',
        giftShop: true,
        giftShopName: 'LACMA Store',
        coatCheck: false,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 20,
        parkingCurrency: 'USD',
        parkingNotes: 'Parking in Pritzker Garage on Sixth Street. $20 flat rate, $8 after 6pm.',
        nearbyParking: 'Street parking on side streets (metered)',
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
        elevatorAccess: true,
        sensoryFriendlyHours: true
      },
      tips: [
        'Urban Light (the streetlamp installation) is FREE to visit 24/7. Best photos at sunset.',
        'Under 18 always free. Bring ID for student/senior discounts.',
        'LA County residents get free admission after 3pm on weekdays. Bring proof of residence.',
        'The museum is undergoing major reconstruction. Check website for which buildings are open.',
        'Friday evening until 8pm is less crowded than weekends.',
        'Parking is $20 but drops to $8 after 6pm. Consider Uber/Lyft.',
        'LACMA is on the Miracle Mile, easy to combine with La Brea Tar Pits next door (free admission)',
        'The Levitated Mass boulder and Urban Light are must-see outdoor installations'
      ],
      mustSee: [
        { name: 'Urban Light', artist: 'Chris Burden', note: 'Outdoor installation, free 24/7, iconic LA photo spot' },
        { name: 'Levitated Mass', artist: 'Michael Heizer', note: 'Walk beneath a 340-ton boulder' },
        { name: 'Mulholland Drive', artist: 'David Hockney', note: 'Iconic LA landscape painting' }
      ]
    }
  },
  {
    slug: 'munch-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
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
          { date: '2026-12-31', close: '15:00', reason: "New Year's Eve early close" },
          { date: '2026-01-01', open: '12:00', reason: "New Year's Day late opening" }
        ],
        notes: 'Extended hours Thursday until 9pm. Located on the Oslo waterfront in the striking vertical tower building.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 180,
        senior: 160,
        seniorAge: 67,
        student: 110,
        child: 0,
        childMaxAge: 17,
        currency: 'NOK',
        notes: 'NOK 180 (~$17 USD). Under 18 free. Guided tours extra. Oslo Pass accepted.',
        freeDay: null,
        memberFree: true,
        osloPassAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.munchmuseet.no/en/buy-tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets recommended for guaranteed entry. The Scream gallery can have queues. Oslo Pass includes admission.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursdays)'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Summer cruise ship arrivals increase midday crowds. Thursday evenings are calm. The Scream gallery always draws crowds.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours to explore all 13 floors'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafes and bars',
        restaurant: true,
        restaurantName: 'Restaurant Kontrast (rooftop)',
        giftShop: true,
        giftShopName: 'MUNCH Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Bjørvika parking garages',
        strollerRental: true,
        wheelchairRental: true,
        rooftopBar: true,
        viewingDeck: true
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
        elevatorAccess: true,
        notes: 'New building (2021) fully accessible throughout all 13 floors'
      },
      tips: [
        'The museum houses the world\'s largest collection of Edvard Munch\'s work (28,000 pieces)',
        'The Scream rotates between versions. Check website to see which one is currently displayed.',
        'Thursday evenings until 9pm are quieter and offer sunset views from upper floors',
        'The rooftop bar and restaurant have spectacular Oslo fjord views',
        'Take the tram or bus to Bjørvika (Oslo Opera House area)',
        'The building\'s 13 floors are designed for gradual exploration from top to bottom',
        'Combined with the nearby Opera House for a full waterfront culture day',
        'The Oslo Pass includes Munch Museum and public transport'
      ],
      mustSee: [
        { name: 'The Scream', artist: 'Edvard Munch', note: 'Multiple versions rotate on display' },
        { name: 'Madonna', artist: 'Edvard Munch' },
        { name: 'The Sick Child', artist: 'Edvard Munch' },
        { name: 'Self-Portrait with Burning Cigarette', artist: 'Edvard Munch' }
      ]
    }
  },
  {
    slug: 'hamburger-kunsthalle',
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
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Extended hours Thursday until 9pm. Three connected buildings: Kunsthalle, Galerie der Gegenwart (contemporary), and Hubertus-Wald-Forum.',
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
        notes: 'Under 18 free. Thursdays after 5pm pay-what-you-wish (minimum €2). Hamburg Card provides discount.',
        freeDay: null,
        freeHours: 'Thursday 17:00-21:00 (pay-what-you-wish)',
        memberFree: true,
        payWhatYouWish: true,
        payWhatYouWishHours: 'Thursday 17:00-21:00',
        payWhatYouWishMinimum: 2
      },
      tickets: {
        onlineUrl: 'https://www.hamburger-kunsthalle.de/en/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at the door. Online booking available for convenience but not necessary.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursdays)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Generally uncrowded. Thursday evenings popular with locals for pay-what-you-wish entry.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours to see all three buildings'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Liebermann',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parkhaus Alstertor, street parking',
        strollerRental: false,
        wheelchairRental: true
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
        'Thursday evening (5pm-9pm) is pay-what-you-wish, starting at just €2',
        'The museum spans three connected buildings. Start with the main Kunsthalle.',
        'The Caspar David Friedrich collection is a highlight, including Wanderer Above the Sea of Fog',
        'Under 18 always free',
        'Located at Hamburg Hauptbahnhof, walking distance from the train station',
        'The Galerie der Gegenwart (contemporary wing) has excellent modern art',
        'Café Liebermann in the museum is a nice spot for coffee with art views',
        'The Hamburg Card provides discounted admission and public transport'
      ],
      mustSee: [
        { name: 'Wanderer Above the Sea of Fog', artist: 'Caspar David Friedrich', note: 'The iconic Romantic masterpiece' },
        { name: 'The Sea of Ice', artist: 'Caspar David Friedrich' },
        { name: 'Nana', artist: 'Édouard Manet' },
        { name: 'Morning', artist: 'Philipp Otto Runge' }
      ]
    }
  }
];

async function enrichMuseums() {
  console.log('Enriching paid museums with detailed ticket information...\n');

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
