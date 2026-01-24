const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'albertina-vienna-austria',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '14:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-31', close: '14:00', reason: "New Year's Eve early close" }
        ],
        notes: 'Extended hours Wednesday and Friday until 9pm. Two locations: Albertina (main) and Albertina Modern (contemporary).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18.90,
        senior: 14.90,
        seniorAge: 65,
        student: 14.90,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Combined ticket Albertina + Albertina Modern €24.90. Vienna Pass accepted.',
        freeDay: null,
        memberFree: true,
        comboTicket: 24.90,
        comboIncludes: 'Albertina + Albertina Modern',
        viennaPassAccepted: true
      },
      tickets: {
        onlineUrl: 'https://www.albertina.at/en/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets recommended for special exhibitions. Vienna Pass provides entry to both locations.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Wed/Fri)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Christmas market season (Dec) brings tourism. Wednesday and Friday evenings offer extended hours with smaller crowds.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours; add 1.5 hours for Albertina Modern'
      },
      amenities: {
        cafe: true,
        cafeName: 'DO & CO Albertina',
        restaurant: true,
        restaurantName: 'DO & CO Restaurant (terrace with Staatsoper views)',
        giftShop: true,
        giftShopName: 'Albertina Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Central Vienna location.',
        nearbyParking: 'Parking Albertinaplatz, Kärntner Ring garage',
        strollerRental: false,
        wheelchairRental: true,
        terrace: true,
        terraceNote: 'Stunning views over Burggarten and Vienna State Opera'
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
        'Under 19 always free. One of Vienna\'s best deals for young visitors.',
        'Wednesday and Friday evenings until 9pm are less crowded',
        'The Albertina holds one of the world\'s greatest print collections (Dürer\'s Hare, etc.)',
        'Prints are shown in rotation due to light sensitivity. Check what\'s currently displayed.',
        'The terrace restaurant has spectacular views of the State Opera',
        'Vienna Pass includes Albertina and saves money if visiting multiple attractions',
        'Take U-Bahn U1/U2/U4 to Karlsplatz or tram to Oper',
        'Combine with nearby State Opera tours and Burggarten'
      ],
      mustSee: [
        { name: 'Young Hare', artist: 'Albrecht Dürer', note: 'Shown periodically due to light sensitivity' },
        { name: 'Praying Hands', artist: 'Albrecht Dürer', note: 'Shown periodically' },
        { name: 'The Bathers', artist: 'Paul Cézanne', location: 'Batliner Collection' },
        { name: 'Water Lilies', artist: 'Claude Monet', location: 'Batliner Collection' }
      ]
    }
  },
  {
    slug: 'norton-simon-museum-pasadena-ca-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '12:00', close: '17:00' },
          tuesday: { closed: true },
          wednesday: { closed: true },
          thursday: { open: '12:00', close: '17:00' },
          friday: { open: '12:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Tuesday and Wednesday. Monday, Thursday, Friday open noon-5pm. Weekend hours 11am-5pm. Free first Friday of month 5pm-8pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 15,
        seniorAge: 62,
        student: 10,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Under 18 always free. Students with ID $10. Free for all first Friday 5pm-8pm (extended hours).',
        freeDay: 'First Friday of month (5pm-8pm)',
        freeHours: '17:00-20:00',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.nortonsimon.org/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at the door. No reservations needed. First Friday evenings can be busy but manageable.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['12:00-14:00'],
        worstTimes: ['15:00-17:00'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['December', 'January 1 (Rose Parade week)'],
        seasonalNotes: 'Rose Parade week (late Dec-early Jan) brings tourists to Pasadena. Otherwise consistently quiet. A true hidden gem.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours including sculpture garden'
      },
      amenities: {
        cafe: true,
        cafeName: 'The Garden Restaurant',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: false,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking in museum lot',
        strollerRental: false,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Stunning garden with Rodin, Moore, and Maillol sculptures'
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
        accessibleGardenPaths: true
      },
      tips: [
        'One of the finest private art collections in America, rivaling the Getty',
        'Free first Friday of each month from 5pm-8pm',
        'Under 18 always free. Free parking always.',
        'The sculpture garden is exceptional, featuring Rodin bronzes',
        'Outstanding Southeast Asian collection, rare in American museums',
        'Near the Huntington Library (15 min) for a full Pasadena art day',
        'Take Gold Line Metro to Memorial Park station (15-min walk)',
        'Norton Simon amassed this collection through business success (Hunt Foods, Canada Dry)'
      ],
      mustSee: [
        { name: 'Woman with a Book', artist: 'Pablo Picasso' },
        { name: 'The Thinker', artist: 'Auguste Rodin', location: 'Sculpture Garden' },
        { name: 'Madonna and Child with Book', artist: 'Raphael' },
        { name: 'Mulholland Drive: The Road to the Studio', artist: 'David Hockney' }
      ]
    }
  },
  {
    slug: 'georges-pompidou-center-paris-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '11:00', close: '21:00' },
          thursday: { open: '11:00', close: '21:00' },
          friday: { open: '11:00', close: '21:00' },
          saturday: { open: '11:00', close: '21:00' },
          sunday: { open: '11:00', close: '21:00' }
        },
        exceptions: [
          { date: '2026-05-01', closed: true, reason: 'Labour Day' }
        ],
        notes: 'IMPORTANT: Centre Pompidou is CLOSED FOR RENOVATION from autumn 2025 until 2030. Check reopening status before visiting.',
        lastUpdated: '2026-01-24',
        closedForRenovation: true,
        renovationPeriod: '2025-2030',
        renovationNote: 'Major renovation project. Some works may be on loan to other museums.'
      },
      admission: {
        adult: 15,
        senior: 12,
        seniorAge: 65,
        student: 12,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'CLOSED FOR RENOVATION until 2030. Prices shown are pre-closure rates. Under 18 free. EU under 26 free. Free first Sunday of month.',
        freeDay: 'First Sunday of month (when open)',
        memberFree: true,
        euUnder26Free: true
      },
      tickets: {
        onlineUrl: 'https://www.centrepompidou.fr/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'CLOSED FOR RENOVATION 2025-2030. Check website for reopening updates and any satellite exhibitions.'
      },
      crowdData: {
        overall: 'CLOSED FOR RENOVATION',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00', '19:00-21:00'],
        worstTimes: ['14:00-17:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Museum is closed for major renovation 2025-2030. Some works may tour other venues.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours including rooftop'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Le Georges (rooftop)',
        restaurant: true,
        restaurantName: 'Restaurant Georges (panoramic Paris views)',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Central Paris location.',
        nearbyParking: 'Parking Centre Pompidou (underground)',
        strollerRental: false,
        wheelchairRental: true,
        rooftop: true,
        rooftopNote: 'Panoramic views of Paris from 6th floor',
        publicLibrary: true,
        publicLibraryNote: 'BPI (Bibliothèque Publique d\'Information) is free and separate from museum'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'es', 'de', 'it', 'pt', 'zh', 'ja', 'ko'],
        audioGuideCost: 5,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'IMPORTANT: Centre Pompidou is CLOSED FOR RENOVATION from 2025 until 2030',
        'Check website for any satellite exhibitions or touring shows during closure',
        'The building itself (by Piano and Rogers, 1977) is an architectural icon',
        'When open: the rooftop offers some of the best Paris views',
        'The BPI public library in the building is free and separate from the museum',
        'The piazza outside often has street performers and is lively',
        'Metro: Rambuteau (line 11) or Châtelet-Les Halles (RER)',
        'When it reopens, it will house one of Europe\'s largest modern art collections'
      ],
      mustSee: [
        { name: 'Fountain', artist: 'Marcel Duchamp', note: 'The original readymade urinal' },
        { name: 'Nude Descending a Staircase', artist: 'Marcel Duchamp' },
        { name: 'The Snail', artist: 'Henri Matisse', note: 'When collection returns from renovation' },
        { name: 'The Building Itself', artist: 'Piano and Rogers', note: 'Iconic inside-out architecture' }
      ]
    }
  }
];

async function enrichMuseums() {
  console.log('Enriching final paid museums with detailed ticket information...\n');

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
