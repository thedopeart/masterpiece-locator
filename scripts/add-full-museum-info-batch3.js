const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'alte-nationalgalerie-berlin-germany',
    name: 'Alte Nationalgalerie',
    websiteUrl: 'https://www.smb.museum/museen-einrichtungen/alte-nationalgalerie/home/',
    ticketUrl: 'https://www.smb.museum/tickets/',
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
        notes: 'Closed Mondays. Thursday extended hours until 8pm. Part of Museum Island UNESCO World Heritage Site.',
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
        notes: 'Under 18 free. Museum Pass Berlin (3-day) €34 covers all State Museums. Berlin WelcomeCard museum option available.',
        freeDay: null,
        memberFree: true,
        museumPassBerlin: 34,
        museumPassDays: 3
      },
      tickets: {
        onlineUrl: 'https://www.smb.museum/tickets/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '2-3 days',
        notes: 'Online tickets allow skip-the-line entry. Museum Pass Berlin highly recommended if visiting multiple museums.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        seasonalNotes: 'Museum Island attracts heavy tourism in summer. Thursday evenings offer extended hours with fewer visitors.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café at Alte Nationalgalerie',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museumshop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Central Berlin location on Museum Island.',
        nearbyParking: 'Parkhaus Am Dom, underground parking nearby',
        strollerRental: false,
        wheelchairRental: true
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['de', 'en', 'fr', 'es', 'it', 'ru', 'ja', 'zh'],
        audioGuideCost: 4,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Buy Museum Pass Berlin if visiting multiple museums (covers 30+ museums for 3 days)',
        'Thursday evenings until 8pm are less crowded and atmospheric',
        'The building itself is a masterpiece of 19th-century architecture',
        'Combine with other Museum Island museums: Pergamon, Bode, Neues Museum, Altes Museum',
        'Take S-Bahn to Hackescher Markt or U-Bahn to Friedrichstraße',
        'The colonnade and staircase are worth photographing',
        'Focus on German Romanticism (Caspar David Friedrich) and French Impressionists'
      ],
      mustSee: [
        { name: 'The Monk by the Sea', artist: 'Caspar David Friedrich', note: 'German Romantic masterpiece' },
        { name: 'The Island of the Dead', artist: 'Arnold Böcklin', note: 'One of five versions' },
        { name: 'In the Conservatory', artist: 'Édouard Manet' },
        { name: 'Princess of the Land of Porcelain', artist: 'James McNeill Whistler' }
      ]
    },
    faqs: [
      { question: 'What are the opening hours of Alte Nationalgalerie?', answer: 'Open Tuesday-Sunday 10am-6pm, with extended hours until 8pm on Thursdays. Closed Mondays.' },
      { question: 'How much does admission cost?', answer: 'Adults €12, reduced €6 for students and seniors. Under 18 free. Museum Pass Berlin (€34) covers all State Museums for 3 days.' },
      { question: 'What art is in the Alte Nationalgalerie?', answer: '19th-century paintings and sculptures, including German Romantic works by Caspar David Friedrich, French Impressionists, and major works by Manet, Monet, and Renoir.' }
    ]
  },
  {
    slug: 'royal-museum-of-fine-arts-antwerp-dutch-koninklijk',
    name: 'Royal Museum of Fine Arts Antwerp',
    websiteUrl: 'https://www.kmska.be/en',
    ticketUrl: 'https://www.kmska.be/en/visit/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Thursday late opening until 9pm. Reopened in 2022 after 11-year renovation.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 18,
        seniorAge: 65,
        student: 6,
        studentMaxAge: 25,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 19 free. Students (19-25) €6. Antwerp City Card holders free. Thursday evening €10 after 5pm.',
        freeDay: null,
        thursdayEvening: 10,
        memberFree: true,
        antwerpCityCard: true
      },
      tickets: {
        onlineUrl: 'https://www.kmska.be/en/visit/tickets',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '60 days',
        sameDayAvailable: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online tickets recommended, especially for weekends. Timed entry system in place. Thursday evenings popular and affordable.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'April (Easter)'],
        seasonalNotes: 'Very popular since 2022 reopening. Thursday evenings offer great value at €10 with wine bar atmosphere.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'KMSKA Café',
        restaurant: true,
        restaurantName: 'Brasserie Appelmans',
        giftShop: true,
        giftShopName: 'KMSKA Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Street parking in South Antwerp neighborhood.',
        nearbyParking: 'Parking Zuid, Parking Museum',
        strollerRental: true,
        wheelchairRental: true,
        rooftopTerrace: true,
        rooftopNote: 'New rooftop with city views added in 2022 renovation'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'fr', 'de'],
        audioGuideCost: 0,
        audioGuideNote: 'Free app-based audio guide',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        tactileTours: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Thursday evenings €10 admission with wine bar atmosphere (5pm-9pm)',
        'Under 19 always free. Great for families.',
        'Completely renovated 2011-2022. The building transformation is part of the experience.',
        'Worlds best collection of Flemish Primitives and Rubens',
        'Free audio guide via app. Download before your visit.',
        'The new rooftop terrace offers panoramic Antwerp views',
        'Take tram 4 or 8 to Museum stop. 15-minute walk from Central Station.',
        'Combine with nearby Museum aan de Stroom (MAS) for a museum day'
      ],
      mustSee: [
        { name: 'Madonna and Child', artist: 'Jean Fouquet', note: 'The Melun Diptych, one of museum highlights' },
        { name: 'Adoration of the Magi', artist: 'Peter Paul Rubens' },
        { name: 'Seven Sacraments Altarpiece', artist: 'Rogier van der Weyden' },
        { name: 'Portrait of a Man', artist: 'Jan van Eyck' }
      ]
    },
    faqs: [
      { question: 'When is KMSKA open?', answer: 'Tuesday-Sunday 10am-5pm, Thursday until 9pm. Closed Mondays. Thursday evening admission is reduced to €10 after 5pm.' },
      { question: 'How much is admission to KMSKA?', answer: 'Adults €20, students (19-25) €6. Under 19 always free. Thursday evenings €10 after 5pm. Antwerp City Card provides free entry.' },
      { question: 'What art does KMSKA have?', answer: 'Exceptional Flemish Primitives, the worlds best Rubens collection, Van Eyck, and Belgian modern masters like Ensor and Magritte.' }
    ]
  },
  {
    slug: 'minneapolis-institute-of-art',
    name: 'Minneapolis Institute of Art',
    websiteUrl: 'https://new.artsmia.org/',
    ticketUrl: 'https://new.artsmia.org/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Wednesday and Thursday open until 9pm. Sunday opens at 11am.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE. General admission is free for everyone. Special exhibitions may have a fee.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies',
        memberFree: true,
        memberBenefits: 'Free special exhibitions, discounts, preview events'
      },
      tickets: {
        onlineUrl: 'https://new.artsmia.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for general admission. Free. Special exhibitions may require timed tickets.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Wed/Thu)'],
        worstTimes: ['13:00-16:00 weekends'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['June', 'July', 'December'],
        seasonalNotes: 'Summer brings families and tourists. Wednesday and Thursday evenings are relaxed and uncrowded.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3-4 hours for full experience'
      },
      amenities: {
        cafe: true,
        cafeName: 'Agra Culture',
        restaurant: true,
        restaurantName: 'Mia Restaurant',
        giftShop: true,
        giftShopName: 'Mia Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 0,
        parkingNotes: 'Free parking in museum lot (2400 Third Avenue South)',
        strollerRental: true,
        wheelchairRental: true,
        immersiveRoom: true,
        immersiveNote: 'Immersive Van Gogh-style experiences in special exhibitions'
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
        verbalDescriptionTours: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE general admission. One of Americas best free museums.',
        'Over 90,000 works spanning 5,000 years. Encyclopedic collection.',
        'Wednesday and Thursday evenings until 9pm are quiet and atmospheric',
        'Free parking in museum lot. Easy drive from downtown Minneapolis.',
        'Outstanding Asian art collection, one of the best in the US',
        'Family programs every weekend. Very kid-friendly.',
        'The period rooms (historic interiors) are hidden gems',
        'Take Metro Transit bus 22 from downtown'
      ],
      mustSee: [
        { name: 'Lucretia', artist: 'Rembrandt van Rijn', note: 'One of few Rembrandts in the Midwest' },
        { name: 'Olive Trees', artist: 'Vincent van Gogh' },
        { name: 'Jade Mountain', note: 'Qing Dynasty masterpiece, one of finest Chinese jades in existence' },
        { name: 'Doryphoros', note: 'Roman copy of the Greek ideal of male beauty' }
      ]
    },
    faqs: [
      { question: 'Is the Minneapolis Institute of Art free?', answer: 'Yes, always free. General admission costs nothing. Special exhibitions may have a fee but permanent collection is always free.' },
      { question: 'What are Mia hours?', answer: 'Tuesday, Friday, Saturday 10am-5pm. Wednesday and Thursday 10am-9pm. Sunday 11am-5pm. Closed Mondays.' },
      { question: 'What kind of art is at Mia?', answer: 'Encyclopedic collection of 90,000+ works spanning 5,000 years, including exceptional Asian art, Rembrandt, Van Gogh, and period rooms.' }
    ]
  },
  {
    slug: 'fogg-museum-harvard-art-museums-cambridge-ma-us',
    name: 'Harvard Art Museums',
    websiteUrl: 'https://harvardartmuseums.org/',
    ticketUrl: 'https://harvardartmuseums.org/visit',
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
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Houses three museums: Fogg, Busch-Reisinger, and Arthur M. Sackler in one building.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 18,
        seniorAge: 65,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'Under 18 free. Harvard students, faculty, staff free. All students free on Saturdays (with ID). Massachusetts residents free Sundays 10am-12pm.',
        freeDay: 'Saturdays (students with ID), Sundays 10am-12pm (MA residents)',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://harvardartmuseums.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Timed tickets recommended. Harvard affiliates enter free with ID at any time.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['January', 'February', 'June'],
        worstMonths: ['September', 'October (Harvard move-in/parents weekend)'],
        seasonalNotes: 'Avoid Harvard move-in (late August) and parents weekends. Summer is quieter when students are away.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Courtyard Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'No museum parking. Limited street parking in Cambridge.',
        nearbyParking: 'Harvard Square parking garage, 52 Church Street garage',
        strollerRental: false,
        wheelchairRental: true,
        studyCenter: true,
        studyCenterNote: 'Art Study Center allows close examination of works by appointment'
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
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        touchTours: true,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Students free on Saturdays. Massachusetts residents free Sunday mornings.',
        'Three museums in one: Fogg (Western), Busch-Reisinger (German), Sackler (Asian)',
        'Renzo Piano designed the stunning 2014 renovation with glass roof',
        'The conservation labs on the top floor are visible and fascinating',
        'Take the Red Line to Harvard Square, 5-minute walk',
        'Art Study Center allows scholars to examine works up close (by appointment)',
        'Outstanding German Expressionist collection in Busch-Reisinger wing',
        'Combine with Harvard campus tour for a full day'
      ],
      mustSee: [
        { name: 'Self-Portrait Dedicated to Paul Gauguin', artist: 'Vincent van Gogh' },
        { name: 'Self-Portrait', artist: 'Mark Rothko', note: 'Rare early figurative work' },
        { name: 'Wrestlers', artist: 'Thomas Eakins' },
        { name: 'Conservation Labs', note: 'Visible restoration work on top floor' }
      ]
    },
    faqs: [
      { question: 'How much is Harvard Art Museums admission?', answer: 'Adults $20, seniors $18. Under 18 free. All students free Saturdays. Massachusetts residents free Sundays 10am-12pm.' },
      { question: 'What museums are in the Harvard Art Museums?', answer: 'Three museums in one building: Fogg Museum (Western art), Busch-Reisinger Museum (German art), and Arthur M. Sackler Museum (Asian art).' },
      { question: 'Is parking available at Harvard Art Museums?', answer: 'No museum parking. Take the Red Line T to Harvard Square (5-minute walk) or use nearby parking garages.' }
    ]
  },
  {
    slug: 'rasmus-meyer-collection-bergen-norway',
    name: 'KODE Art Museums (Rasmus Meyer Collection)',
    websiteUrl: 'https://www.kfroyalsociety.no/en',
    ticketUrl: 'https://www.kfroyalsociety.no/en/practical-info/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '16:00' },
          wednesday: { open: '10:00', close: '16:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '16:00' },
          saturday: { open: '10:00', close: '16:00' },
          sunday: { open: '10:00', close: '16:00' }
        },
        seasonal: {
          summer: {
            period: 'Mid-May to mid-September',
            monday: { open: '10:00', close: '17:00' },
            tuesday: { open: '10:00', close: '17:00' },
            wednesday: { open: '10:00', close: '17:00' },
            thursday: { open: '10:00', close: '17:00' },
            friday: { open: '10:00', close: '17:00' },
            saturday: { open: '10:00', close: '17:00' },
            sunday: { open: '10:00', close: '17:00' }
          }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'KODE consists of 4 buildings around Lille Lungegårdsvannet lake. Rasmus Meyer Collection is in KODE 3. Thursday late opening until 8pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 150,
        senior: 100,
        seniorAge: 67,
        student: 50,
        child: 0,
        childMaxAge: 18,
        currency: 'NOK',
        notes: 'Under 18 free. Ticket valid for all 4 KODE buildings. Bergen Card holders free. Approximately €13 adult.',
        freeDay: null,
        memberFree: true,
        bergenCard: true,
        allBuildingsIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.kfroyalsociety.no/en/practical-info/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Single ticket covers all 4 KODE buildings. No advance booking needed except for special exhibitions.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '18:00-20:00 (Thursday)'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['September', 'October', 'November'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Summer cruise ship passengers increase crowds. Bergen is rainiest city in Europe, so museums fill up on wet days.',
        avgVisitDuration: '2 hours per building',
        recommendedDuration: '2 hours for KODE 3 (Rasmus Meyer), full day for all 4 buildings'
      },
      amenities: {
        cafe: true,
        cafeName: 'KODE 1 Café Lysverket',
        restaurant: true,
        restaurantName: 'Lysverket (Michelin-starred, in KODE 1)',
        giftShop: true,
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Bergen location. Street parking limited.',
        nearbyParking: 'Bygarasjen, Klostergarasjen',
        strollerRental: false,
        wheelchairRental: true,
        composerHome: true,
        composerHomeNote: 'Edvard Grieg home Troldhaugen is separate KODE site outside city'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['no', 'en'],
        audioGuideCost: 0,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibilityNote: 'Historic buildings have varying accessibility. KODE 3 fully accessible.'
      },
      tips: [
        'One ticket covers all 4 KODE buildings. Plan a full day if seeing everything.',
        'KODE 3 (Rasmus Meyer) has the famous Munch collection including Melancholy',
        'KODE 1 contains Lysverket, a Michelin-starred restaurant',
        'Thursday evenings until 8pm are quiet and atmospheric',
        'Bergen Card (24/48/72hr) includes all KODE museums and public transport',
        'All buildings surround Lille Lungegårdsvannet lake. Beautiful walk between them.',
        'Bring umbrella. Bergen averages 240 rainy days per year.',
        'Troldhaugen (Edvard Griegs home) is a separate KODE site worth visiting'
      ],
      mustSee: [
        { name: 'Melancholy', artist: 'Edvard Munch', location: 'KODE 3', note: 'One of several versions' },
        { name: 'Jealousy', artist: 'Edvard Munch', location: 'KODE 3' },
        { name: 'Evening on Karl Johan', artist: 'Edvard Munch', location: 'KODE 3' },
        { name: 'Nikolai Astrup collection', note: 'Norwegian painter, KODE has worlds largest collection' }
      ]
    },
    faqs: [
      { question: 'What is the KODE museum?', answer: 'KODE is 4 art museums around a lake in Bergen, Norway. KODE 3 holds the Rasmus Meyer Collection with major Munch works and Norwegian art.' },
      { question: 'How much is KODE admission?', answer: '150 NOK (about €13) for adults. Under 18 free. One ticket covers all 4 buildings. Bergen Card provides free entry.' },
      { question: 'Does KODE have Edvard Munch paintings?', answer: 'Yes, KODE 3 has an excellent Munch collection including Melancholy, Jealousy, and Evening on Karl Johan.' }
    ]
  },
  {
    slug: 'basilica-di-san-marco-florence-italy',
    name: 'Museum of San Marco',
    websiteUrl: 'https://www.polomusealetoscana.beniculturali.it/musei/museo-di-san-marco/',
    ticketUrl: 'https://www.firenzemusei.it/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:15', close: '13:50' },
          tuesday: { open: '08:15', close: '18:50' },
          wednesday: { open: '08:15', close: '13:50' },
          thursday: { open: '08:15', close: '18:50' },
          friday: { open: '08:15', close: '13:50' },
          saturday: { open: '08:15', close: '18:50' },
          sunday: { closed: true }
        },
        closedDays: ['First, third, fifth Sunday of month', 'Second and fourth Monday of month'],
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Complex schedule: closed 1st, 3rd, 5th Sunday and 2nd, 4th Monday of each month. Half days (close 1:50pm) on Monday, Wednesday, Friday.',
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
        notes: 'EU citizens 18-25 reduced €2. Under 18 free. First Sunday of month free for all.',
        freeDay: 'First Sunday of month',
        memberFree: true,
        euYouth: 2
      },
      tickets: {
        onlineUrl: 'https://www.firenzemusei.it/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        bookingFee: 3,
        notes: 'Online booking €3 fee but avoids queues. Walk-up usually fine except first Sunday (free day).'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Wednesday', 'Friday'],
        worstDays: ['First Sunday (free day)'],
        bestTimes: ['08:15-10:00', '12:00-13:50'],
        worstTimes: ['10:00-12:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'June', 'September', 'October'],
        seasonalNotes: 'Often overlooked by tourists rushing to Uffizi. A peaceful alternative to crowded Florence museums.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        giftShopName: 'Bookshop',
        coatCheck: false,
        lockers: false,
        wifi: false,
        parking: false,
        parkingNotes: 'Central Florence. ZTL restricted traffic zone.',
        nearbyParking: 'Parking Parterre (Piazza della Libertà)',
        strollerRental: false,
        wheelchairRental: false,
        cloister: true,
        cloisterNote: 'Beautiful Renaissance cloister with herb garden'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Ground floor accessible. Upper floors (monks cells) have stairs only.',
        wheelchairsAvailable: false,
        audioGuide: true,
        audioGuideLanguages: ['it', 'en', 'fr', 'de', 'es'],
        audioGuideCost: 5,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false
      },
      tips: [
        'Hidden gem. Most tourists miss this while queueing at Uffizi.',
        'Fra Angelicos Annunciation at top of stairs is breathtaking',
        'Each monks cell has an original Fra Angelico fresco. Walk slowly.',
        'Savonarolas cells show where the fiery preacher lived and was arrested',
        'The cloister is one of the most peaceful spots in Florence',
        'Check the complex opening schedule before visiting (many closure days)',
        'First Sunday free but crowded. Other days are peaceful.',
        'Near Galleria dellAccademia (David). Combine visits.'
      ],
      mustSee: [
        { name: 'The Annunciation', artist: 'Fra Angelico', location: 'Top of stairs', note: 'The famous greeting scene' },
        { name: 'Crucifixion with Saints', artist: 'Fra Angelico', location: 'Chapter House' },
        { name: 'Monks Cell Frescoes', artist: 'Fra Angelico', note: '44 cells each with original fresco' },
        { name: 'Savonarolas Cells', note: 'Where the reformer preacher lived' }
      ]
    },
    faqs: [
      { question: 'What is the Museum of San Marco?', answer: 'A former Dominican convent in Florence with the worlds greatest collection of Fra Angelico frescoes, including his famous Annunciation.' },
      { question: 'When is San Marco Museum open?', answer: 'Complex schedule: 8:15am-1:50pm Mon/Wed/Fri, 8:15am-6:50pm Tue/Thu/Sat. Closed Sundays and some Mondays (check specific dates).' },
      { question: 'Who was Savonarola?', answer: 'Girolamo Savonarola was a Dominican friar who briefly ruled Florence in the 1490s. His cells in San Marco show where he lived before his execution.' }
    ]
  },
  {
    slug: 'basilica-della-santa-casa-loreto-italy',
    name: 'Basilica della Santa Casa',
    websiteUrl: 'https://www.santuarioloreto.va/',
    ticketUrl: null,
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '06:15', close: '19:30' },
          tuesday: { open: '06:15', close: '19:30' },
          wednesday: { open: '06:15', close: '19:30' },
          thursday: { open: '06:15', close: '19:30' },
          friday: { open: '06:15', close: '19:30' },
          saturday: { open: '06:15', close: '19:30' },
          sunday: { open: '06:15', close: '19:30' }
        },
        seasonal: {
          winter: {
            period: 'November to March',
            daily: { open: '06:15', close: '19:00' }
          }
        },
        notes: 'Basilica open daily for prayer and visits. Treasury Museum has separate hours.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'EUR',
        notes: 'Basilica is FREE. Treasury Museum (Museo-Antico Tesoro) has separate admission €5.',
        treasuryMuseum: 5,
        freeDay: 'Every day (basilica)',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: null,
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed for basilica. Treasury Museum tickets at entrance.'
      },
      crowdData: {
        overall: 'Moderate to Heavy (pilgrimage site)',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday', 'Saturday', 'December 10 (Feast of Our Lady of Loreto)'],
        bestTimes: ['Early morning (06:15-08:00)', '18:00-19:00'],
        worstTimes: ['10:00-16:00'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August', 'September', 'December'],
        seasonalNotes: 'Major pilgrimage site. December 10 feast day extremely crowded. Holy Year events draw large crowds.',
        avgVisitDuration: '1 hour',
        recommendedDuration: '1.5-2 hours including Treasury Museum'
      },
      amenities: {
        cafe: true,
        cafeName: 'Various in town square',
        restaurant: true,
        restaurantName: 'Multiple restaurants in Loreto town',
        giftShop: true,
        giftShopName: 'Religious articles shops throughout',
        coatCheck: false,
        lockers: false,
        wifi: false,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Large parking areas outside historic center',
        nearbyParking: 'Piazzale degli Aviatori, public lots'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
        audioGuide: false,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibilityNote: 'Basilica accessible. Holy House itself has limited access during busy times.'
      },
      tips: [
        'FREE entry to basilica. One of Italys most important pilgrimage sites.',
        'The Santa Casa (Holy House) is believed to be Marys house from Nazareth',
        'Loretos title Black Madonna refers to the statues darkened face',
        'December 10 feast day is extremely crowded but spiritually significant',
        'Early morning (6:15am) offers quiet prayer time before tour groups arrive',
        'The Treasury Museum has Lorenzo Lottos last paintings',
        'Loreto is patron of aviators. Note aviation imagery in the Piazza.',
        'Easy day trip from Ancona (25km) or accessible via A14 motorway'
      ],
      mustSee: [
        { name: 'Santa Casa', note: 'The Holy House itself, centerpiece of the basilica' },
        { name: 'Black Madonna of Loreto', note: 'Venerated statue above the altar' },
        { name: 'Frescoes by Melozzo da Forli', location: 'Sacristy of St. Mark' },
        { name: 'Lorenzo Lotto paintings', location: 'Treasury Museum', note: 'Artists final works' }
      ]
    },
    faqs: [
      { question: 'Is the Basilica della Santa Casa free?', answer: 'Yes, the basilica is free. The Treasury Museum (Museo-Antico Tesoro) has a separate €5 admission.' },
      { question: 'What is the Santa Casa?', answer: 'The Santa Casa (Holy House) is believed to be the house where Mary received the Annunciation, reportedly transported from Nazareth to Loreto in the 13th century.' },
      { question: 'When should I visit Loreto?', answer: 'Weekday mornings are quietest. Avoid December 10 (feast day) and August pilgrimage season unless you want the full pilgrimage experience.' }
    ]
  },
  {
    slug: 'mus233e-ingres-montauban-france',
    name: 'Musée Ingres Bourdelle',
    websiteUrl: 'https://www.museeingresbourdelle.com/',
    ticketUrl: 'https://www.museeingresbourdelle.com/infos-pratiques/',
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
        seasonal: {
          summer: {
            period: 'July-August',
            tuesday: { open: '10:00', close: '19:00' },
            wednesday: { open: '10:00', close: '19:00' },
            thursday: { open: '10:00', close: '19:00' },
            friday: { open: '10:00', close: '19:00' },
            saturday: { open: '10:00', close: '19:00' },
            sunday: { open: '10:00', close: '19:00' }
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Extended hours July-August until 7pm. Located in former bishops palace overlooking the Tarn river.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 10,
        senior: 5,
        seniorAge: 65,
        student: 5,
        child: 0,
        childMaxAge: 25,
        currency: 'EUR',
        notes: 'Under 26 free. First Sunday of month free for all. Combined ticket with Muséum available.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.museeingresbourdelle.com/infos-pratiques/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tickets at door. Rarely crowded, advance booking unnecessary.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['First Sunday (free day)'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['September', 'October', 'November'],
        worstMonths: ['August'],
        seasonalNotes: 'Rarely crowded. A hidden gem of French provincial museums dedicated to a major Neoclassical master.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        nearbyRestaurants: 'Many in Montauban old town',
        giftShop: true,
        giftShopName: 'Boutique du Musée',
        coatCheck: true,
        lockers: false,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Montauban location',
        nearbyParking: 'Parking Place Prax-Paris, Parking des Augustins',
        terrace: true,
        terraceNote: 'Terrace with views over the Tarn river'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: false,
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
        'Worlds largest collection of Jean-Auguste-Dominique Ingres works',
        'Under 26 free. Excellent for students.',
        'Also features sculptor Antoine Bourdelle (born in Montauban)',
        'The museum building is the former bishops palace with beautiful architecture',
        'Terrace offers stunning views over the Tarn River and Pont Vieux',
        'First Sunday free for everyone',
        'Montauban is 50 minutes north of Toulouse by train',
        'Combine with Toulouse museums for a regional art tour'
      ],
      mustSee: [
        { name: 'The Vow of Louis XIII', artist: 'Jean-Auguste-Dominique Ingres', note: 'Study for Montauban Cathedral altarpiece' },
        { name: 'Roger Freeing Angelica', artist: 'Jean-Auguste-Dominique Ingres' },
        { name: 'Jesus Among the Doctors', artist: 'Jean-Auguste-Dominique Ingres' },
        { name: 'Hercules the Archer', artist: 'Antoine Bourdelle', note: 'Monumental bronze' }
      ]
    },
    faqs: [
      { question: 'What is Musée Ingres Bourdelle?', answer: 'A museum in Montauban, France dedicated to painter Jean-Auguste-Dominique Ingres and sculptor Antoine Bourdelle, both born in this city.' },
      { question: 'How much is admission?', answer: '€10 adults. Under 26 free. First Sunday of month free for all. Rarely crowded.' },
      { question: 'Who was Ingres?', answer: 'Jean-Auguste-Dominique Ingres (1780-1867) was a French Neoclassical painter famous for portraits and historical paintings. He bequeathed his collection to his hometown.' }
    ]
  },
  {
    slug: 'manchester-art-gallery',
    name: 'Manchester Art Gallery',
    websiteUrl: 'https://manchesterartgallery.org/',
    ticketUrl: 'https://manchesterartgallery.org/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '15:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open daily. Thursday late opening until 9pm. Free admission.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE. Donations welcome. Special exhibitions may have a charge.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://manchesterartgallery.org/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. Special exhibitions may require booking.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00 weekends'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August', 'December'],
        seasonalNotes: 'School holidays bring families. Thursday evenings are relaxed. Very manageable year-round.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Gallery Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Gallery Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Manchester. No museum parking.',
        nearbyParking: 'NCP Piccadilly, NCP Arndale',
        strollerRental: false,
        wheelchairRental: true,
        familySpace: true,
        familySpaceNote: 'Clore Interactive Gallery for families'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en'],
        audioGuideCost: 0,
        audioGuideNote: 'Free app-based guide',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        dementiaTours: true,
        dementiaTourNote: 'House of Memories program for those with dementia',
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE. One of Britains best free regional galleries.',
        'Thursday evenings until 9pm are quiet and perfect for after-work visits',
        'Outstanding Pre-Raphaelite collection, including Work by Ford Madox Brown',
        'Clore Interactive Gallery is brilliant for kids',
        'The gallery sparked controversy in 2018 by temporarily removing Waterhouses Hylas and the Nymphs',
        '3-minute walk from Piccadilly Gardens and Metrolink stations',
        'Part of a cultural quarter with Central Library and Town Hall nearby',
        'Check for temporary exhibitions which may have charges'
      ],
      mustSee: [
        { name: 'Work', artist: 'Ford Madox Brown', note: 'Iconic painting of Victorian labor' },
        { name: 'Hylas and the Nymphs', artist: 'John William Waterhouse' },
        { name: 'Asleep Dreaming', artist: 'Dante Gabriel Rossetti' },
        { name: 'The Hireling Shepherd', artist: 'William Holman Hunt' }
      ]
    },
    faqs: [
      { question: 'Is Manchester Art Gallery free?', answer: 'Yes, always free. Donations welcome. Some special exhibitions may have a charge.' },
      { question: 'What are Manchester Art Gallery hours?', answer: 'Open daily 10am-5pm. Thursday until 9pm. Closed Christmas Day, Boxing Day, and New Years Day.' },
      { question: 'What art is in Manchester Art Gallery?', answer: 'Strong Pre-Raphaelite collection, British decorative arts, Dutch Golden Age paintings, and contemporary work. Known for Waterhouse and Ford Madox Brown.' }
    ]
  },
  {
    slug: 'frans-hals-museum-haarlem-netherlands',
    name: 'Frans Hals Museum',
    websiteUrl: 'https://www.franshalsmuseum.nl/en/',
    ticketUrl: 'https://www.franshalsmuseum.nl/en/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '17:00' },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '17:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-04-27', closed: true, reason: "King's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Closed Mondays. Two locations: HOF (historical building with Frans Hals) and HAL (modern art at Grote Markt).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 16,
        seniorAge: 65,
        student: 8,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. Museumkaart valid. Ticket covers both locations (HOF and HAL).',
        freeDay: null,
        memberFree: true,
        museumkaart: true,
        bothLocationsIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.franshalsmuseum.nl/en/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended for weekends. One ticket covers both museum locations.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00', '15:00-17:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'July', 'August'],
        seasonalNotes: 'Tulip season (April-May) brings day-trippers from Amsterdam. Summer can be busy. Much calmer than Amsterdam museums.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours for both locations'
      },
      amenities: {
        cafe: true,
        cafeName: 'Museum Café at HOF',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Haarlem. Use public parking.',
        nearbyParking: 'De Kamp parking garage, Stationsplein',
        strollerRental: false,
        wheelchairRental: true,
        historicBuilding: true,
        historicBuildingNote: 'HOF housed in 17th-century almshouse where Frans Hals lived his final years'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['nl', 'en', 'de', 'fr'],
        audioGuideCost: 0,
        audioGuideNote: 'Free app-based audio guide',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true,
        accessibilityNote: 'HOF historic building has lift access to all floors'
      },
      tips: [
        'One ticket covers both locations. HOF has Frans Hals, HAL has modern art.',
        'Under 18 free. Museumkaart accepted.',
        'HOF building is where Frans Hals spent his final years. Atmospheric historic setting.',
        'Haarlem is 15 minutes from Amsterdam by train. Great day trip.',
        'The group portraits (schutterstukken) are enormous and stunning',
        'Less crowded alternative to Rijksmuseum for Dutch Golden Age art',
        'Combine with Teylers Museum (oldest museum in Netherlands) nearby',
        'Walk from Central Station through old town (10 minutes)'
      ],
      mustSee: [
        { name: 'Regents of the Old Mens Almshouse', artist: 'Frans Hals', note: 'Painted when Hals was in his 80s' },
        { name: 'The Banquet of the Officers of the St George Militia', artist: 'Frans Hals' },
        { name: 'Regentesses of the Old Mens Almshouse', artist: 'Frans Hals' },
        { name: 'The Laughing Cavalier relative', note: 'While the famous one is in London, see similar Hals portraits here' }
      ]
    },
    faqs: [
      { question: 'Where is the Frans Hals Museum?', answer: 'Two locations in Haarlem: HOF (Groot Heiligland 62) with Frans Hals paintings in a historic almshouse, and HAL (Grote Markt 16) with modern art.' },
      { question: 'How much is Frans Hals Museum admission?', answer: '€16 adults, students €8. Under 18 free. One ticket covers both locations. Museumkaart accepted.' },
      { question: 'How do I get to Haarlem from Amsterdam?', answer: 'Direct trains every 10-15 minutes. Journey takes 15-20 minutes. The museum is a 10-minute walk from Haarlem Central Station.' }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full museum information for batch 3...\\n');

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

  console.log('\\nBatch 3 complete!');
}

addMuseumInfo()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
