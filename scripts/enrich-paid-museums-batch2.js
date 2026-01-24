const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'groeningemuseum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:30', close: '17:00' },
          wednesday: { open: '09:30', close: '17:00' },
          thursday: { open: '09:30', close: '17:00' },
          friday: { open: '09:30', close: '17:00' },
          saturday: { open: '09:30', close: '17:00' },
          sunday: { open: '09:30', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-21', closed: true, reason: 'Ascension Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Last entry 30 minutes before closing. Closed Mondays. Part of Bruges Museum Pass circuit.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 14,
        senior: 12,
        seniorAge: 65,
        student: 12,
        child: 0,
        childMaxAge: 17,
        youth: 12,
        youthAgeRange: '18-25',
        currency: 'EUR',
        notes: 'Under 18 free. Bruges Museum Pass (€30) covers 6 museums including Groeningemuseum. Combined ticket with other Bruges museums available.',
        freeDay: null,
        memberFree: true,
        brugesMuseumPass: 30,
        brugesMuseumPassIncludes: 'Groeningemuseum, Gruuthusemuseum, Arentshuis, St. John\'s Hospital, Belfry, City Hall'
      },
      tickets: {
        onlineUrl: 'https://www.museabrugge.be/en/visit-buy/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Tickets available at door. Online booking available. The Bruges Museum Pass is excellent value if visiting multiple museums.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:30-11:00', '15:00-17:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Bruges is a popular day-trip destination. Summer and Christmas market season bring more tourists. The museum remains relatively quiet compared to the crowded streets.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: false,
        parking: false,
        parkingNotes: 'No museum parking. Bruges old town is largely pedestrian.',
        nearbyParking: 'Parking Centrum-Station (underground), Parking \'t Zand',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'fr', 'de'],
        audioGuideCost: 3,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'The Bruges Museum Pass (€30) is excellent value if visiting 3+ museums',
        'Home to Flemish Primitives masterpieces including works by Jan van Eyck',
        'Small but world-class collection. 1.5 hours is plenty.',
        'The Arentshuis next door (included in combo tickets) has nice canal views',
        'No cafe inside. Grab Belgian waffles or coffee in the nearby Dijver area.',
        'Visit early morning to have Van Eyck\'s works to yourself',
        'Combine with St. John\'s Hospital (Memling Museum) nearby for more Flemish masters'
      ],
      mustSee: [
        { name: 'Madonna with Canon Joris van der Paele', artist: 'Jan van Eyck', note: 'Stunning detail, Van Eyck\'s masterpiece in the collection' },
        { name: 'The Judgment of Cambyses', artist: 'Gerard David', note: 'Graphic but historically important diptych' },
        { name: 'Death of the Virgin', artist: 'Hugo van der Goes' },
        { name: 'Portrait of Margareta van Eyck', artist: 'Jan van Eyck' }
      ]
    }
  },
  {
    slug: 'musee-bonnat',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '18:30' },
          thursday: { open: '10:00', close: '18:30' },
          friday: { open: '10:00', close: '18:30' },
          saturday: { open: '10:00', close: '18:30' },
          sunday: { open: '10:00', close: '18:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays and Tuesdays. Located in Bayonne, French Basque Country. Named after painter Léon Bonnat.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 8,
        senior: 5,
        seniorAge: 65,
        student: 5,
        child: 0,
        childMaxAge: 25,
        currency: 'EUR',
        notes: 'Under 26 free. First Sunday of each month free for all. Very affordable for the quality of collection.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.musee-bonnat-helleu.bayonne.fr/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at the door only. No online booking necessary for this smaller museum.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'March', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Bayonne is less touristy than nearby Biarritz. Summer brings more visitors but the museum remains quiet. A hidden gem.',
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
        nearbyParking: 'Public parking in Bayonne old town',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'es'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Under 26 years old? Admission is FREE.',
        'First Sunday of each month is free for everyone',
        'The collection includes works by Rubens, El Greco, Goya, Ingres, and Degas',
        'Léon Bonnat was a successful portrait painter who donated his collection to Bayonne',
        'Combine with a visit to Bayonne\'s old town and cathedral',
        'The French Basque Country is known for gastronomy. Enjoy pintxos nearby.',
        'Less crowded alternative to major French museums with surprisingly strong Old Masters'
      ],
      mustSee: [
        { name: 'The Duke of Richmond', artist: 'Anthony van Dyck' },
        { name: 'Apollo and Marsyas', artist: 'José de Ribera' },
        { name: 'Portrait of Don Francisco de Pizarro', artist: 'Francisco Goya' },
        { name: 'Self-Portrait', artist: 'Léon Bonnat', note: 'The museum\'s founder' }
      ]
    }
  },
  {
    slug: 'palais-des-beauxarts-de-lille-lille-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '14:00', close: '18:00' },
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
          { date: '2026-07-14', closed: true, reason: 'Bastille Day' },
          { date: '2026-11-01', closed: true, reason: 'All Saints Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Monday afternoons only (2pm-6pm). Closed Tuesdays. France\'s second largest fine arts museum after the Louvre.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 7,
        senior: 4,
        seniorAge: 65,
        student: 4,
        child: 0,
        childMaxAge: 11,
        youth: 4,
        youthAgeRange: '12-25',
        currency: 'EUR',
        notes: 'Under 12 free. Reduced rate for 12-25, students, seniors. Free first Sunday of month. Remarkably affordable for such a major collection.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        lilleMetropolisPass: true
      },
      tickets: {
        onlineUrl: 'https://pba.lille.fr/Informations-pratiques/Billetterie',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at the door. No advance booking needed. Very affordable museum.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '14:00-16:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Lille is a university city with steady local attendance. The museum rarely feels crowded even on weekends. First Sunday free days are busier.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours for comprehensive visit'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café du Palais',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Place de la République, street parking',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'nl', 'de'],
        audioGuideCost: 3,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'France\'s second largest fine arts museum after the Louvre, with only €7 admission',
        'Monday is open but only in the afternoon (2pm-6pm)',
        'First Sunday of the month is free for everyone',
        'Strong Flemish collection due to Lille\'s proximity to Belgium',
        'The Relief Plans room has detailed 3D models of fortified cities',
        'Easily reached by Eurostar from London (1.5 hours) or TGV from Paris (1 hour)',
        'Combine with Lille\'s excellent restaurants and Vieux Lille neighborhood',
        'Under 12 free, 12-25 reduced rate. Very family-friendly pricing.'
      ],
      mustSee: [
        { name: 'Medea', artist: 'Eugène Delacroix' },
        { name: 'The Young Martyr', artist: 'Paul Delaroche' },
        { name: 'The Descent from the Cross', artist: 'Peter Paul Rubens' },
        { name: 'Belshazzar\'s Feast', artist: 'Dirck Hals' }
      ]
    }
  },
  {
    slug: 'lenbachhaus',
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
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Home to the world\'s largest collection of Blue Rider (Der Blaue Reiter) art. The villa itself is a historic landmark.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 10,
        senior: 5,
        seniorAge: 65,
        student: 5,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Reduced rate €5 for students and seniors. Special exhibitions may cost extra.',
        freeDay: null,
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.lenbachhaus.de/en/visit/tickets-hours',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Tickets available at door. Online booking available for convenience. Rarely crowded.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '16:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['September', 'October'],
        seasonalNotes: 'Oktoberfest season (late Sept-early Oct) brings tourism to Munich but the museum stays manageable. A calm alternative to busy beer halls.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Ella',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parkhaus Königsplatz, street parking',
        strollerRental: false,
        wheelchairRental: true,
        garden: true
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
        'World\'s largest collection of Blue Rider (Der Blaue Reiter) art: Kandinsky, Marc, Münter, Klee',
        'The building is a beautiful Italianate villa with a modern extension',
        'Under 18 always free',
        'Take U-Bahn to Königsplatz station (U2 line)',
        'Café Ella has a lovely garden terrace in summer',
        'Combine with nearby Alte Pinakothek and Neue Pinakothek for a full art day',
        'Gabriele Münter donated her collection here, preserving Blue Rider works hidden during WWII',
        'The Joseph Beuys installation "Show Your Wound" is in the basement'
      ],
      mustSee: [
        { name: 'Composition IV', artist: 'Wassily Kandinsky' },
        { name: 'Blue Horse I', artist: 'Franz Marc' },
        { name: 'Tiger', artist: 'Franz Marc' },
        { name: 'Breakfast of the Birds', artist: 'Gabriele Münter' }
      ]
    }
  },
  {
    slug: 'kunsthaus-zurich',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours Wednesday and Thursday until 8pm. New David Chipperfield extension opened 2021, doubling museum size.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 23,
        senior: 18,
        seniorAge: 65,
        student: 18,
        child: 0,
        childMaxAge: 16,
        youth: 18,
        youthAgeRange: '17-25',
        currency: 'CHF',
        notes: 'CHF 23 (~$26 USD). Under 16 free. Reduced CHF 18 for students, seniors, 17-25. Wednesday free admission 5pm-8pm.',
        freeDay: null,
        freeHours: 'Wednesday 17:00-20:00',
        memberFree: true,
        zurichCardIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.kunsthaus.ch/en/visit/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets recommended for special exhibitions. Zurich Card includes admission and public transport.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Friday'],
        worstDays: ['Wednesday', 'Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Wed/Thu)'],
        worstTimes: ['14:00-16:00', '17:00-20:00 (Wed free hours)'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Wednesday free evenings are popular with locals. New extension has increased capacity. Summer tourism is significant in Zurich.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours for both buildings'
      },
      amenities: {
        cafe: true,
        cafeName: 'Kunsthaus Café',
        restaurant: true,
        restaurantName: 'Restaurant Kunsthaus',
        giftShop: true,
        giftShopName: 'Kunsthaus Shop (excellent art books)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parkhaus Hohe Promenade, Parkhaus Opéra',
        strollerRental: true,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'it'],
        audioGuideCost: 5,
        audioGuideCostCurrency: 'CHF',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Wednesday evening (5pm-8pm) is FREE admission',
        'The new Chipperfield extension (2021) houses the Bührle Collection including major Impressionists',
        'Under 16 always free',
        'The Zurich Card includes Kunsthaus admission plus public transport',
        'Take tram 3, 5, 8, or 9 to Kunsthaus stop',
        'The sculpture garden connects the original building to the extension',
        'One of Europe\'s most important art museums outside major capitals',
        'Strong Giacometti collection (Alberto Giacometti was Swiss)'
      ],
      mustSee: [
        { name: 'Water Lilies', artist: 'Claude Monet', location: 'Bührle Collection' },
        { name: 'The Boy in the Red Vest', artist: 'Paul Cézanne', location: 'Bührle Collection' },
        { name: 'Walking Man I', artist: 'Alberto Giacometti' },
        { name: 'The Gate of Hell', artist: 'Auguste Rodin', location: 'Sculpture garden' }
      ]
    }
  },
  {
    slug: 'national-gallery-of-umbria-palazzo-dei-priori-peru',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '08:30', close: '19:30' },
          wednesday: { open: '08:30', close: '19:30' },
          thursday: { open: '08:30', close: '19:30' },
          friday: { open: '08:30', close: '19:30' },
          saturday: { open: '08:30', close: '19:30' },
          sunday: { open: '08:30', close: '19:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Located in the Palazzo dei Priori on Perugia\'s main square. Last entry 1 hour before closing.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 8,
        senior: 2,
        seniorAge: 65,
        student: 2,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. EU citizens 18-25 and over 65 pay only €2. First Sunday of month free. Excellent value for world-class Umbrian art.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        euYouth: 2,
        euYouthAgeRange: '18-25',
        euSenior: 2
      },
      tickets: {
        onlineUrl: 'https://www.gallerianazionaledellumbria.it/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets available at the door. No advance booking needed. This hidden gem rarely has queues.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['08:30-11:00', '15:00-17:00'],
        worstTimes: ['11:00-13:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Perugia is less touristy than Florence or Rome. The museum rarely feels crowded. Umbria Jazz Festival (July) brings more visitors to the city.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'Perugia\'s historic center is pedestrian. Park outside walls.',
        nearbyParking: 'Parcheggio Parterre, Parcheggio della Rocca, MiniMetro from parking',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en'],
        audioGuideCost: 5,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        notes: 'Historic building has some limitations. Elevator available.'
      },
      tips: [
        'EU citizens 18-25 and over 65 pay only €2. Incredible value.',
        'First Sunday of the month is free for everyone',
        'Best collection of Umbrian Renaissance art anywhere, including Perugino and Pinturicchio',
        'The palazzo itself is a medieval marvel on Perugia\'s main piazza',
        'Take the MiniMetro from parking areas to the historic center',
        'Combine with Perugia\'s other highlights: Fontana Maggiore, Rocca Paolina',
        'Perugia is famous for chocolate. Visit a Perugina shop nearby.',
        'Perugino was Raphael\'s teacher. See where Raphael learned his craft.'
      ],
      mustSee: [
        { name: 'Polyptych of Perugia', artist: 'Piero della Francesca' },
        { name: 'Dead Christ with Mourners', artist: 'Perugino' },
        { name: 'Adoration of the Magi', artist: 'Perugino' },
        { name: 'Madonna della Consolazione', artist: 'Pinturicchio' }
      ]
    }
  },
  {
    slug: 'museum-boijmans-van-beuningen-rotterdam-netherland',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '17:00' },
          wednesday: { open: '11:00', close: '21:00' },
          thursday: { open: '11:00', close: '17:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-04-27', closed: true, reason: "King's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'MAIN BUILDING CLOSED FOR RENOVATION UNTIL 2028. Visit the Depot instead (open daily). The Depot is the world\'s first publicly accessible art storage facility.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 22.50,
        senior: 20,
        seniorAge: 65,
        student: 17.50,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Depot admission €22.50. Under 18 free. Museumkaart accepted. Main museum closed until 2028, but Depot offers unique experience.',
        freeDay: null,
        memberFree: true,
        museumkaartAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.boijmans.nl/en/depot/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Timed tickets recommended for Depot rooftop access. The mirrored bowl-shaped building is an architectural landmark.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Wednesday', 'Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'The Depot is a major architectural attraction drawing visitors beyond art lovers. Wednesday extended hours are popular. Rooftop restaurant is a destination.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours including rooftop'
      },
      amenities: {
        cafe: true,
        cafeName: 'Depot Café',
        restaurant: true,
        restaurantName: 'Restaurant Renilde (rooftop, stunning views)',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking',
        nearbyParking: 'Parking Museumpark',
        strollerRental: false,
        wheelchairRental: true,
        rooftopGarden: true,
        rooftopRestaurant: true
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
        elevatorAccess: true,
        notes: 'New building (2021) fully accessible'
      },
      tips: [
        'The main museum is CLOSED until 2028 for renovation. Visit the Depot instead.',
        'The Depot is the world\'s first publicly accessible art storage facility',
        'The mirrored bowl building by MVRDV is an architectural icon. Bring your camera.',
        'Rooftop restaurant and garden offer panoramic Rotterdam views',
        'See 151,000 objects in climate-controlled storage racks',
        'Museumkaart holders get free entry',
        'Take tram or metro to Eendrachtsplein or Museumpark stop',
        'Combine with nearby Kunsthal and Netherlands Architecture Institute'
      ],
      mustSee: [
        { name: 'The Tower of Babel', artist: 'Pieter Bruegel the Elder', note: 'Visible in Depot storage' },
        { name: 'Titus at His Desk', artist: 'Rembrandt', note: 'In Depot collection' },
        { name: 'The Depot Building Itself', artist: 'MVRDV Architects', note: 'The mirrored bowl is art' },
        { name: 'Rooftop Forest Garden', note: 'Living installation with Rotterdam skyline views' }
      ]
    }
  },
  {
    slug: 'clark-art-institute',
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
            period: 'July-August',
            notes: 'Open daily 10am-5pm including Mondays'
          },
          winter: {
            period: 'September-June',
            tuesday: { closed: true },
            notes: 'Closed Tuesdays September-June'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Tuesdays September-June. Open daily July-August. Free admission November-May.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 20,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Students and under 18 always free. FREE for all November-May. $20 June-October only. One of America\'s best free museum deals.',
        freeDay: 'November through May (entire season)',
        freeMonths: ['November', 'December', 'January', 'February', 'March', 'April', 'May'],
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.clarkart.edu/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at the door. No reservations needed. The Clark is never crowded.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'March', 'November'],
        worstMonths: ['July', 'August', 'October'],
        seasonalNotes: 'Berkshires summer and fall foliage seasons bring visitors, but the Clark never feels crowded. Winter months are serene and FREE.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours including trails'
      },
      amenities: {
        cafe: true,
        cafeName: 'Clark Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Clark Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking on site',
        strollerRental: false,
        wheelchairRental: true,
        hikingTrails: true,
        hikingTrailsNote: '140 acres of walking trails through meadows and forests'
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
        'FREE admission November through May. Yes, completely free.',
        'Students and under 18 are always free, even June-October',
        'The 140-acre campus has beautiful walking trails through meadows',
        'One of the finest collections of French Impressionism in America',
        'The Tadao Ando-designed Clark Center (2014) is architecturally stunning',
        'Located in the Berkshires, combine with Mass MoCA (30 min) or Tanglewood',
        'Renoir collection rivals major European museums',
        'Free parking always. A truly accessible museum experience.'
      ],
      mustSee: [
        { name: 'Sleeping Girl', artist: 'Pierre-Auguste Renoir', note: 'One of many superb Renoirs' },
        { name: 'Self-Portrait', artist: 'Rembrandt' },
        { name: 'Nymphs and Satyr', artist: 'William-Adolphe Bouguereau' },
        { name: 'Rouen Cathedral, the Façade at Sunset', artist: 'Claude Monet' }
      ]
    }
  },
  {
    slug: 'pushkin-museum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '20:00' },
          wednesday: { open: '11:00', close: '20:00' },
          thursday: { open: '11:00', close: '21:00' },
          friday: { open: '11:00', close: '21:00' },
          saturday: { open: '11:00', close: '20:00' },
          sunday: { open: '11:00', close: '20:00' }
        },
        exceptions: [],
        notes: 'Extended hours Thursday and Friday until 9pm. Three buildings: Main Building, Gallery of European and American Art (Impressionists), and Private Collections.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 600,
        senior: 300,
        seniorAge: 60,
        student: 300,
        child: 0,
        childMaxAge: 15,
        currency: 'RUB',
        notes: 'RUB 600 (~$6 USD) for main building. Combined ticket for all buildings available. Under 16 free. Russian citizens over 60 free.',
        freeDay: null,
        memberFree: true,
        russianSeniorFree: true,
        comboTicket: 1000,
        comboIncludes: 'Main Building + Gallery of European and American Art + Private Collections'
      },
      tickets: {
        onlineUrl: 'https://pushkinmuseum.art/visitors/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets available. The Impressionist gallery (separate building across the street) is often the highlight.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00', '19:00-21:00 (Thu/Fri)'],
        worstTimes: ['14:00-17:00'],
        bestMonths: ['January', 'February', 'March'],
        worstMonths: ['May', 'June', 'July'],
        seasonalNotes: 'Moscow White Nights (May-June) bring tourism. Winter is cold but museums are cozy and less crowded.',
        avgVisitDuration: '2-3 hours per building',
        recommendedDuration: '4-5 hours for main building and Impressionist gallery'
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
        parkingNotes: 'No museum parking. Central Moscow location.',
        nearbyParking: 'Street parking limited, Metro recommended',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['ru', 'en', 'de', 'fr', 'it', 'es', 'zh', 'ja', 'ko'],
        audioGuideCost: 350,
        audioGuideCostCurrency: 'RUB',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'The Impressionist collection is in the Gallery of European and American Art, ACROSS THE STREET from main building',
        'Under 16 always free',
        'Thursday and Friday evenings until 9pm are less crowded',
        'Coat check is mandatory in winter. Budget extra time.',
        'Take Metro to Kropotkinskaya station (red line)',
        'The collection includes works seized from private collectors after 1917',
        'Combine with nearby Cathedral of Christ the Saviour',
        'Very affordable by Western standards. Excellent value.'
      ],
      mustSee: [
        { name: 'Blue Dancers', artist: 'Edgar Degas', location: 'Gallery of European and American Art' },
        { name: 'Boulevard Montmartre', artist: 'Camille Pissarro', location: 'Gallery of European and American Art' },
        { name: 'Priam Pleading with Achilles', artist: 'Alexander Ivanov', location: 'Main Building' },
        { name: 'Egyptian Collection', location: 'Main Building', note: 'One of the best outside Egypt/London/Berlin' }
      ]
    }
  },
  {
    slug: 'musee-toulouse-lautrec',
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
        seasonal: {
          summer: {
            period: 'June-September',
            hours: '9am-6pm',
            notes: 'Open daily including lunch'
          },
          winter: {
            period: 'October-May',
            hours: '10am-12pm, 2pm-6pm',
            notes: 'Closed for lunch 12pm-2pm'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-11-01', closed: true, reason: 'All Saints Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Located in Albi, France, Toulouse-Lautrec\'s birthplace. Winter hours include a lunch closure. World\'s largest collection of his work.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 10,
        senior: 8,
        seniorAge: 65,
        student: 5,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 18 free. Student rate €5. Reduced rate for over 65. First Sunday of month free October-June.',
        freeDay: 'First Sunday of month (October-June)',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.musee-toulouse-lautrec.com/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at the door. No reservations needed. This is a destination museum worth the trip to Albi.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '14:00-16:00'],
        worstTimes: ['12:00-14:00 (closed in winter)'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Summer brings tourists to this UNESCO World Heritage city. The museum is manageable year-round. A pilgrimage for Toulouse-Lautrec fans.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Excellent poster reproductions',
        coatCheck: true,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'No museum parking. Albi old town is pedestrian.',
        nearbyParking: 'Parking Bondidou, Parking de la Cathédrale',
        strollerRental: false,
        wheelchairRental: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'es', 'de', 'it'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        notes: 'Historic Palais de la Berbie has some accessibility limitations'
      },
      tips: [
        'World\'s largest collection of Toulouse-Lautrec works, donated by his family',
        'Located in the stunning medieval Palais de la Berbie overlooking the Tarn River',
        'Under 18 always free',
        'First Sunday of the month free (October through June)',
        'Albi is a UNESCO World Heritage Site. Explore the cathedral and old town.',
        'Winter hours include a lunch closure (12pm-2pm). Plan accordingly.',
        'Take the train from Toulouse (1 hour) for a day trip',
        'The gardens of the Palais de la Berbie have beautiful views (free to visit)'
      ],
      mustSee: [
        { name: 'At the Moulin Rouge', artist: 'Henri de Toulouse-Lautrec' },
        { name: 'The Bed', artist: 'Henri de Toulouse-Lautrec' },
        { name: 'Moulin Rouge: La Goulue', artist: 'Henri de Toulouse-Lautrec', note: 'Famous poster' },
        { name: 'Ambassadeurs: Aristide Bruant', artist: 'Henri de Toulouse-Lautrec', note: 'Iconic poster' }
      ]
    }
  }
];

async function enrichMuseums() {
  console.log('Enriching paid museums batch 2 with detailed ticket information...\n');

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
