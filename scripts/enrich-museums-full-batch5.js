const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichedMuseums = [
  {
    slug: 'national-portrait-gallery-london-uk',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:30', close: '18:00' },
          tuesday: { open: '10:30', close: '18:00' },
          wednesday: { open: '10:30', close: '18:00' },
          thursday: { open: '10:30', close: '21:00' },
          friday: { open: '10:30', close: '21:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', close: '17:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Reopened 2023 after major renovation. Thursday and Friday late until 9pm. FREE admission.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE. Donations welcome. Special exhibitions may have a charge.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.npg.org.uk/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets for permanent collection. Special exhibitions may require timed tickets.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:30-12:00', '18:00-21:00 (Thu/Fri)'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Reopened 2023 to great acclaim. Thursday and Friday evenings are sophisticated and quiet.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Portrait Café',
        restaurant: true,
        restaurantName: 'Portrait Restaurant (rooftop with views)',
        giftShop: true,
        giftShopName: 'NPG Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central London near Trafalgar Square',
        nearbyParking: 'NCP Trafalgar',
        strollerRental: false,
        wheelchairRental: true,
        rooftop: true,
        rooftopNote: 'Rooftop restaurant with views towards Big Ben'
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
        'ALWAYS FREE. Reopened 2023 after stunning renovation.',
        'Thursday and Friday evenings until 9pm',
        'The rooftop restaurant has views toward Big Ben',
        'Walk through British history via portraits',
        'Tudor galleries (Henry VIII, Elizabeth I) are highlights',
        'Right behind National Gallery on Trafalgar Square',
        'Tube: Leicester Square or Charing Cross',
        'New entrance and circulation make visiting much easier'
      ],
      mustSee: [
        { name: 'The Chandos Portrait', note: 'Possibly Shakespeare, the only likely portrait from life' },
        { name: 'The Ditchley Portrait of Elizabeth I', artist: 'Marcus Gheeraerts' },
        { name: 'Self-Portrait', artist: 'Sir Joshua Reynolds' },
        { name: 'Rooftop Views', note: 'Restaurant terrace overlooks Westminster' }
      ]
    },
    faqs: [
      { question: 'Is National Portrait Gallery free?', answer: 'Yes, always free. Reopened in 2023 after major renovation. Donations welcome.' },
      { question: 'When did National Portrait Gallery reopen?', answer: 'June 2023 after a three-year renovation that transformed the building and created a new entrance.' },
      { question: 'Whats the difference from National Gallery?', answer: 'National Portrait Gallery focuses on portraits of notable British people. National Gallery has European paintings by subject. Theyre next to each other.' }
    ]
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
          { date: '2026-12-24', close: '15:00', reason: 'Christmas Eve early close' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open daily 10am-5pm. FREE admission. One of Englands finest art galleries outside London.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'GBP',
        notes: 'ALWAYS FREE. Donations welcome.',
        freeDay: 'Every day',
        donationSuggested: true
      },
      tickets: {
        onlineUrl: 'https://www.liverpoolmuseums.org.uk/walker-art-gallery',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in.'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Any weekday'],
        worstDays: ['Saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['All months quiet'],
        worstMonths: ['August'],
        seasonalNotes: 'Rarely crowded. A treasure of British regional museums.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Gallery Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Central Liverpool near Lime Street Station',
        nearbyParking: 'Q-Park Liverpool ONE',
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
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE. Outstanding Pre-Raphaelite collection.',
        'Train from London Euston to Liverpool Lime Street (2.5 hours)',
        '2-minute walk from Lime Street Station',
        'Excellent Renaissance and Baroque paintings',
        'Strong Rubens holdings',
        'Part of National Museums Liverpool group',
        'Combine with nearby World Museum (also free)',
        'Home to John Moores Painting Prize, Britains most prestigious'
      ],
      mustSee: [
        { name: 'Isabella', artist: 'John Everett Millais', note: 'Pre-Raphaelite masterpiece' },
        { name: 'And When Did You Last See Your Father?', artist: 'William Frederick Yeames' },
        { name: 'Christ Discovered in the Temple', artist: 'Simone Martini' },
        { name: 'Rubens Collection', note: 'Several major works' }
      ]
    },
    faqs: [
      { question: 'Is Walker Art Gallery free?', answer: 'Yes, always free. One of Englands finest regional galleries.' },
      { question: 'Where is Walker Art Gallery?', answer: 'Central Liverpool, 2-minute walk from Lime Street Station. Part of the citys Cultural Quarter.' },
      { question: 'What is the Walker known for?', answer: 'Outstanding Pre-Raphaelites, Italian Renaissance, and home to the prestigious John Moores Contemporary Painting Prize.' }
    ]
  },
  {
    slug: 'mus233e-cond233-chantilly-france',
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
        seasonal: {
          winter: {
            period: 'November to March',
            daily: { open: '10:30', close: '17:00' }
          }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Closed Monday and Tuesday. Château and park entry separate from museum. Home of Très Riches Heures du Duc de Berry.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 15,
        seniorAge: 60,
        student: 10,
        child: 0,
        childMaxAge: 6,
        youth: 10,
        youthAgeRange: '7-17',
        currency: 'EUR',
        notes: 'Estate ticket €20 (château, museum, park, stables). Park only €10. Under 7 free.',
        freeDay: null,
        memberFree: true,
        parkOnly: 10
      },
      tickets: {
        onlineUrl: 'https://www.domainedechantilly.com/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Estate ticket covers everything. Book ahead for summer weekends.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['September', 'October', 'November'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Summer weekends busy with day-trippers from Paris. The park and stables draw families.',
        avgVisitDuration: '4-5 hours',
        recommendedDuration: 'Full day (château, museum, park, stables)'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café at Hameau',
        restaurant: true,
        restaurantName: 'La Capitainerie (in the château)',
        giftShop: true,
        giftShopName: 'Boutique du Château',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 8,
        parkingNotes: '€8 parking. Large lot.',
        strollerRental: false,
        wheelchairRental: true,
        stables: true,
        stablesNote: 'Great Stables with horse museum and shows',
        gardens: true,
        gardensNote: 'Stunning Le Nôtre gardens'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Ground floor accessible. Upper floors have stairs in historic château.',
        wheelchairsAvailable: true,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'de', 'es', 'it', 'nl', 'ja', 'zh'],
        audioGuideCost: 3,
        signLanguageTours: false,
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: false
      },
      tips: [
        'Second largest collection of Old Masters in France after the Louvre',
        'The Très Riches Heures is displayed (facsimile; original in vault)',
        'Allow a full day: château, museum, gardens, stables',
        'Train from Paris Gare du Nord to Chantilly (25 min)',
        'Free shuttle or 20-min walk from station',
        'The stables are extraordinary (horse shows some days)',
        'Gardens by Le Nôtre rival Versailles',
        'Restaurant La Capitainerie is in the château itself'
      ],
      mustSee: [
        { name: 'Très Riches Heures du Duc de Berry', note: 'Most famous medieval manuscript (facsimile displayed)' },
        { name: 'Three Graces', artist: 'Raphael' },
        { name: 'The Great Stables', note: 'Horse museum and equestrian shows' },
        { name: 'Le Nôtre Gardens', note: 'French formal gardens' }
      ]
    },
    faqs: [
      { question: 'How do I get to Chantilly from Paris?', answer: 'Train from Gare du Nord takes 25 minutes. Free shuttle or 20-minute walk from Chantilly-Gouvieux station.' },
      { question: 'What is the Très Riches Heures?', answer: 'The most famous medieval illuminated manuscript, made for the Duke of Berry around 1415. A facsimile is displayed; the original is protected in a vault.' },
      { question: 'How long to visit Chantilly?', answer: 'A full day for château, museum, gardens, and stables. Half day possible if you skip the stables or gardens.' }
    ]
  },
  {
    slug: 'national-gallery-victoria',
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-04-25', open: '13:00', reason: 'ANZAC Day afternoon opening' }
        ],
        notes: 'Open daily 10am-5pm. FREE general admission. NGV International (St Kilda Road) and NGV Australia (Federation Square).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'AUD',
        notes: 'ALWAYS FREE general admission. Major exhibitions have fees. Two venues: NGV International and NGV Australia.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies'
      },
      tickets: {
        onlineUrl: 'https://www.ngv.vic.gov.au/visit/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '60 days',
        sameDayAvailable: true,
        notes: 'Free entry, no tickets needed. Blockbuster exhibitions require timed tickets (book ahead).'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['February', 'March', 'May'],
        worstMonths: ['July (school holidays)', 'December'],
        seasonalNotes: 'Blockbuster exhibitions draw crowds. The permanent collection galleries are always peaceful.',
        avgVisitDuration: '2-3 hours per venue',
        recommendedDuration: '3 hours (NGV International) or 2 hours (NGV Australia)'
      },
      amenities: {
        cafe: true,
        cafeName: 'NGV Café',
        restaurant: true,
        restaurantName: 'NGV Garden Restaurant',
        giftShop: true,
        giftShopName: 'NGV Design Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Arts Centre Melbourne car park nearby',
        strollerRental: true,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Sculpture garden at NGV International'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'zh', 'ja'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE general admission. Australias oldest and largest art museum.',
        'Two venues: NGV International (European, Asian) and NGV Australia (Australian art)',
        'NGV International is on St Kilda Road. NGV Australia at Federation Square.',
        'Blockbuster exhibitions sell out fast. Book ahead.',
        'The water wall at NGV International is iconic',
        'Strong Asian art collection',
        'Tram routes 1, 3, 5, 6, 16, 64, 67, 72 stop nearby',
        'NGV Friday Nights have extended hours and events (check schedule)'
      ],
      mustSee: [
        { name: 'The Banquet of Cleopatra', artist: 'Giambattista Tiepolo' },
        { name: 'Weeping Woman', artist: 'Pablo Picasso', note: 'Major Picasso holding' },
        { name: 'Water Wall', note: 'Iconic architectural feature at entrance' },
        { name: 'Australian Art at NGV Australia', note: 'Federation Square venue' }
      ]
    },
    faqs: [
      { question: 'Is NGV free?', answer: 'Yes, general admission always free. Major temporary exhibitions have fees (typically $25-35 AUD).' },
      { question: 'What is the difference between the two NGV venues?', answer: 'NGV International (St Kilda Road) has European, Asian, and international art. NGV Australia (Federation Square) has Australian art.' },
      { question: 'What is the NGV water wall?', answer: 'The iconic glass water wall at NGV International entrance, designed by Roy Grounds. A Melbourne landmark since 1968.' }
    ]
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
        notes: 'Open daily 11:30am-7pm. FREE admission. Shares building with National Portrait Gallery (Smithsonian).',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE. All Smithsonian museums are free.',
        freeDay: 'Every day'
      },
      tickets: {
        onlineUrl: 'https://americanart.si.edu/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets needed. Just walk in. Part of the Smithsonian family.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:30-13:00', '17:00-19:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August', 'April (Cherry Blossoms)'],
        seasonalNotes: 'Less crowded than Mall museums. A peaceful alternative with exceptional American art.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours (including Portrait Gallery)'
      },
      amenities: {
        cafe: true,
        cafeName: 'Courtyard Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Museum Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: false,
        parkingNotes: 'Downtown DC near Chinatown',
        nearbyParking: 'Gallery Place parking garage',
        strollerRental: false,
        wheelchairRental: true,
        courtyard: true,
        courtyardNote: 'Beautiful Kogod Courtyard with glass canopy by Foster + Partners'
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
        'ALWAYS FREE. Part of the Smithsonian.',
        'Shares the beautiful Patent Office Building with Portrait Gallery',
        'The Kogod Courtyard is stunning (glass canopy by Foster + Partners)',
        'Outstanding folk art and contemporary American art',
        'Less crowded than National Mall museums',
        'Metro: Gallery Place-Chinatown (Red, Yellow, Green lines)',
        'Near Chinatown for dining options',
        'The Luce Foundation Center shows thousands of works in open storage'
      ],
      mustSee: [
        { name: 'Electronic Superhighway', artist: 'Nam June Paik', note: 'Massive video installation' },
        { name: 'Among the Sierra Nevada', artist: 'Albert Bierstadt' },
        { name: 'Kogod Courtyard', artist: 'Foster + Partners', note: 'Glass-canopied atrium' },
        { name: 'Luce Foundation Center', note: 'Visible storage of 3,500+ works' }
      ]
    },
    faqs: [
      { question: 'Is Smithsonian American Art Museum free?', answer: 'Yes, always free. All Smithsonian museums are free.' },
      { question: 'Is it the same as National Portrait Gallery?', answer: 'They share the same building (Old Patent Office) but are separate museums. One ticket-free admission covers both.' },
      { question: 'What is the Kogod Courtyard?', answer: 'A stunning glass-canopied courtyard by Foster + Partners connecting the two museums. Free to visit with café.' }
    ]
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
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Thursday late until 9pm. FREE general admission.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        child: 0,
        currency: 'USD',
        notes: 'ALWAYS FREE general admission. Special exhibitions may have fees. Free parking after 5pm.',
        freeDay: 'Every day',
        specialExhibitionFee: 'Varies'
      },
      tickets: {
        onlineUrl: 'https://dma.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: false,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'No tickets for permanent collection. Special exhibitions may require timed entry.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['11:00-13:00', '19:00-21:00 (Thursday)'],
        worstTimes: ['14:00-16:00 weekends'],
        bestMonths: ['September', 'October', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Late Nights Thursday until 9pm. The museum is part of the Dallas Arts District.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'DMA Café',
        restaurant: false,
        giftShop: true,
        giftShopName: 'DMA Store',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 10,
        parkingNotes: '$10 until 5pm. Free after 5pm and on Late Nights.',
        strollerRental: true,
        wheelchairRental: true,
        sculptureGarden: true,
        sculptureGardenNote: 'Sculpture garden'
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
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'ALWAYS FREE general admission. Major US museum.',
        'Thursday Late Nights until 9pm with free parking after 5pm',
        'Outstanding Asian and Pre-Columbian art',
        'Strong European and American paintings',
        'Part of Dallas Arts District. Walk to Nasher Sculpture Center.',
        'DART Rail to Pearl/Arts District station',
        'The Wendy and Emery Reves Collection has French Impressionists',
        'Edward Hoppers Lighthouse Hill is a highlight'
      ],
      mustSee: [
        { name: 'Lighthouse Hill', artist: 'Edward Hopper' },
        { name: 'The Icebergs', artist: 'Frederic Edwin Church' },
        { name: 'Wendy and Emery Reves Collection', note: 'Impressionist works in period room setting' },
        { name: 'Asian Art Galleries', note: 'Exceptional collection' }
      ]
    },
    faqs: [
      { question: 'Is Dallas Museum of Art free?', answer: 'Yes, general admission always free. Special exhibitions may have fees. Parking free after 5pm.' },
      { question: 'What is Late Nights at DMA?', answer: 'Thursday evenings until 9pm with programs, performances, and free parking after 5pm.' },
      { question: 'What is the Dallas Arts District?', answer: 'Largest urban arts district in the US. DMA, Nasher Sculpture Center, Crow Museum, AT&T Performing Arts Center all within walking distance.' }
    ]
  },
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Closed Mondays. Thursday late until 8pm. Stunning Moshe Safdie building.',
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
        notes: 'Under 12 free. Youth (12-19) and students $12. Free Thursday 5pm-8pm. Free permanent collection on Canada Day (July 1).',
        freeDay: 'Thursday 5pm-8pm',
        freeHours: '17:00-20:00',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.gallery.ca/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended for special exhibitions. Thursday evenings 5-8pm free.'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday', 'Thursday evening (free)'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00', '17:00-20:00 Thursday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July (Canada Day week)', 'August'],
        seasonalNotes: 'Thursday free evenings are popular. Summer brings tourists to Ottawa. Winter is peaceful.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Cafeteria',
        restaurant: false,
        giftShop: true,
        giftShopName: 'Boutique',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Underground parking available',
        strollerRental: true,
        wheelchairRental: true,
        architecture: true,
        architectureNote: 'Moshe Safdie building with views of Parliament Hill'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['en', 'fr'],
        audioGuideCost: 0,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'Free Thursday evenings 5pm-8pm',
        'Under 12 always free',
        'Outstanding Canadian art (Group of Seven, Indigenous)',
        'Strong European collection including Bernini marble',
        'Moshe Safdie building has views of Parliament Hill',
        'Walk from ByWard Market (15 min) or Parliament',
        'The reconstructed Rideau Street Convent chapel is inside',
        'Giant Maman spider sculpture outside is by Louise Bourgeois'
      ],
      mustSee: [
        { name: 'Maman', artist: 'Louise Bourgeois', note: 'Giant spider sculpture outside' },
        { name: 'The Jack Pine', artist: 'Tom Thomson', note: 'Canadian icon' },
        { name: 'Death of General Wolfe', artist: 'Benjamin West' },
        { name: 'Rideau Street Convent Chapel', note: 'Reconstructed Neo-Gothic interior' }
      ]
    },
    faqs: [
      { question: 'When is National Gallery of Canada free?', answer: 'Thursday evenings 5pm-8pm. Under 12 always free. Free on Canada Day (July 1) for permanent collection.' },
      { question: 'What is the giant spider?', answer: 'Maman by Louise Bourgeois, a 30-foot bronze spider sculpture outside the entrance. One of several casts worldwide.' },
      { question: 'Who designed the National Gallery building?', answer: 'Moshe Safdie designed the glass and granite building, opened 1988. The Great Hall has views of Parliament Hill.' }
    ]
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
        exceptions: [
          { date: '2026-02-10', hours: 'Varies', reason: 'Lunar New Year holiday hours' }
        ],
        notes: 'Friday and Saturday late opening until 9pm. Home to Chinese imperial collection. Two venues: Taipei main and Southern Branch.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 350,
        senior: 0,
        seniorAge: 65,
        student: 150,
        child: 0,
        childMaxAge: 17,
        currency: 'TWD',
        notes: 'About $11 USD. Seniors 65+ free with ID. Under 18 free. Students TWD 150. Saturday after 5pm free.',
        freeDay: 'Saturday 5pm-9pm',
        freeHours: '17:00-21:00',
        memberFree: true
      },
      tickets: {
        onlineUrl: 'https://www.npm.gov.tw/en/',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '30 days',
        sameDayAvailable: true,
        notes: 'Online tickets recommended, especially for Jadeite Cabbage and Meat-Shaped Stone (can have long lines).'
      },
      crowdData: {
        overall: 'Heavy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday', 'Chinese holidays'],
        bestTimes: ['09:00-11:00', '19:00-21:00 (Fri/Sat)'],
        worstTimes: ['11:00-16:00'],
        bestMonths: ['November', 'March', 'April'],
        worstMonths: ['February (Lunar New Year)', 'July', 'August'],
        seasonalNotes: 'Tour groups can crowd the famous treasures. Friday and Saturday evenings much quieter. Avoid Lunar New Year week.',
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'San Xi Tang (tea house)',
        restaurant: true,
        restaurantName: 'Silks Palace (Cantonese)',
        giftShop: true,
        giftShopName: 'Museum Shop (multiple)',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Parking available at museum',
        strollerRental: true,
        wheelchairRental: true,
        gardens: true,
        gardensNote: 'Zhishan Garden (classical Chinese garden)'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairsAvailable: true,
        wheelchairReservation: false,
        audioGuide: true,
        audioGuideLanguages: ['zh', 'en', 'ja', 'ko', 'fr', 'de', 'es'],
        audioGuideCost: 150,
        signLanguageTours: true,
        signLanguageAdvanceNotice: '2 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'One of the worlds greatest collections of Chinese art',
        'Saturday 5pm-9pm FREE. Best time to visit.',
        'The Jadeite Cabbage and Meat-Shaped Stone are star attractions',
        'Collection rotates. Not everything displayed at once.',
        '700,000+ objects from Chinese imperial collection',
        'Bus 304 or 815 from Taipei Main Station, or taxi',
        'Silks Palace restaurant is excellent (book ahead)',
        'Southern Branch in Chiayi County has Asian art focus'
      ],
      mustSee: [
        { name: 'Jadeite Cabbage', note: 'Most famous object. Qing dynasty jade' },
        { name: 'Meat-Shaped Stone', note: 'Jasper carved to look like pork belly' },
        { name: 'Mao Gong Ding', note: 'Bronze vessel with longest known inscription' },
        { name: 'Calligraphy and Painting Galleries', note: 'Rotating masterpieces' }
      ]
    },
    faqs: [
      { question: 'When is National Palace Museum free?', answer: 'Saturday 5pm-9pm. Seniors 65+ always free. Under 18 free.' },
      { question: 'What is the Jadeite Cabbage?', answer: 'A Qing dynasty jade carving of a cabbage with hidden grasshoppers. The museums most famous object, symbolizing purity and fertility.' },
      { question: 'Why is the collection in Taiwan?', answer: 'The collection was moved from Beijing to Taiwan in 1948-49 during the Chinese Civil War to protect it. It represents Chinese imperial treasures from multiple dynasties.' }
    ]
  },
  {
    slug: 'detroit-institute-of-arts',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '09:00', close: '16:00' },
          thursday: { open: '09:00', close: '16:00' },
          friday: { open: '09:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Monday and Tuesday. Friday extended until 9pm. Free for residents of Wayne, Oakland, and Macomb counties.',
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
        notes: 'FREE for residents of Wayne, Oakland, and Macomb counties (with ID). Otherwise $18 adult. Under 6 free.',
        freeDay: 'Every day for tri-county residents',
        memberFree: true,
        triCountyFree: true
      },
      tickets: {
        onlineUrl: 'https://dia.org/visit',
        onlineRequired: false,
        walkUpAvailable: true,
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true,
        notes: 'Tri-county residents free with ID. No reservation needed.'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['09:00-11:00', '19:00-21:00 (Friday)'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        seasonalNotes: 'Friday evenings until 9pm are lively with events. The Diego Rivera Court is always a destination.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Cafe DIA',
        restaurant: true,
        restaurantName: 'Kresge Court',
        giftShop: true,
        giftShopName: 'Museum Shop',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 9,
        parkingNotes: '$9 museum parking. Street parking also available.',
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
        elevatorAccess: true
      },
      tips: [
        'FREE for Wayne, Oakland, and Macomb county residents (most metro Detroit)',
        'Diego Rivera murals (Detroit Industry) are extraordinary',
        'Friday nights until 9pm with live music and events',
        'One of Americas top encyclopedic art museums',
        'Van Goghs Self-Portrait is a highlight',
        'Directly on Woodward Avenue. Easy QLINE streetcar access.',
        'The Beaux-Arts building is magnificent',
        'Strong African American art collection'
      ],
      mustSee: [
        { name: 'Detroit Industry Murals', artist: 'Diego Rivera', note: '27 panels celebrating Detroit workers' },
        { name: 'Self-Portrait', artist: 'Vincent van Gogh' },
        { name: 'Watson and the Shark', artist: 'John Singleton Copley' },
        { name: 'Armor Court', note: 'Exceptional medieval collection' }
      ]
    },
    faqs: [
      { question: 'Is DIA free?', answer: 'Free for residents of Wayne, Oakland, and Macomb counties with ID. Most metro Detroit residents qualify. Others pay $18.' },
      { question: 'What are the Diego Rivera murals?', answer: 'Detroit Industry Murals: 27 fresco panels celebrating Detroit auto workers, painted 1932-33. Considered Riveras finest work in the US.' },
      { question: 'Why is DIA free for locals?', answer: 'A 2012 voter referendum approved a millage (property tax) in three counties to fund free admission and operations.' }
    ]
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
          winter: {
            period: 'November to March',
            daily: { open: '09:00', close: '17:30' }
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Mondays. Last entry 1 hour before closing. Multiple tickets: Palace, Gardens, Trianon, etc.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 21,
        senior: 21,
        student: 21,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Palace ticket €21. Passport (everything) €28.50. Under 18 free. EU under 26 free. Gardens free except fountain show days (€10).',
        freeDay: null,
        euUnder26Free: true,
        passport: 28.50,
        gardensOnly: 0,
        gardensFountainShow: 10
      },
      tickets: {
        onlineUrl: 'https://www.chateauversailles.fr/en/plan-your-visit',
        onlineRequired: true,
        onlineRequiredNote: 'Timed entry strongly recommended',
        walkUpAvailable: 'Limited',
        skipTheLine: true,
        advanceRequired: false,
        advanceRecommended: true,
        advanceWindow: '60 days',
        sameDayAvailable: 'Limited',
        peakSeasonAdvanceBooking: '1-2 weeks',
        notes: 'ADVANCE BOOKING HIGHLY RECOMMENDED. Summer queues can exceed 2 hours without timed ticket.'
      },
      crowdData: {
        overall: 'Very Heavy',
        bestDays: ['Tuesday', 'Wednesday (fountain shows make weekends worse)'],
        worstDays: ['Saturday', 'Sunday', 'Fountain show days'],
        bestTimes: ['09:00 (first entry)', '16:00-18:30'],
        worstTimes: ['10:00-15:00'],
        bestMonths: ['November', 'January', 'February', 'March'],
        worstMonths: ['June', 'July', 'August'],
        seasonalNotes: 'Extremely crowded May-September. Book timed entry weeks ahead. Arrive at 9am opening.',
        avgVisitDuration: '4-5 hours',
        recommendedDuration: 'Full day (Palace, Gardens, Trianon)'
      },
      amenities: {
        cafe: true,
        cafeName: 'Multiple cafés throughout grounds',
        restaurant: true,
        restaurantName: 'Ore (Ducasse restaurant in Palace), La Flottille (by Grand Canal)',
        giftShop: true,
        giftShopName: 'Multiple boutiques',
        coatCheck: true,
        lockers: true,
        wifi: true,
        parking: true,
        parkingCost: 'Varies',
        parkingNotes: 'Large parking lots. Arrive early in summer.',
        strollerRental: true,
        wheelchairRental: true,
        gardens: true,
        gardensNote: '800 hectares of gardens, fountains, Grand Canal',
        rentals: true,
        rentalsNote: 'Rent boats, bikes, golf carts to explore grounds'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        accessibilityNote: 'Palace main floor accessible. Upper floors and some gardens challenging.',
        wheelchairsAvailable: true,
        audioGuide: true,
        audioGuideLanguages: ['fr', 'en', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'],
        audioGuideCost: 0,
        audioGuideNote: 'Included with ticket',
        signLanguageTours: true,
        signLanguageAdvanceNotice: '3 weeks',
        brailleGuides: false,
        serviceAnimals: true,
        accessibleRestrooms: true,
        elevatorAccess: true
      },
      tips: [
        'BOOK TIMED ENTRY IN ADVANCE. Essential for summer.',
        'EU under 26 FREE (bring ID). Under 18 free.',
        'Arrive at 9am opening or after 4pm',
        'The Passport ticket includes everything (best value for full day)',
        'Gardens free except fountain show days (€10)',
        'Musical Fountains (weekends spring-fall) are spectacular',
        'RER C from Paris to Versailles-Château-Rive Gauche (40 min)',
        'Dont skip Grand Trianon and Marie-Antoinettes Estate'
      ],
      mustSee: [
        { name: 'Hall of Mirrors', note: '357 mirrors, 73 meters long' },
        { name: 'Kings Grand Apartments', note: 'State rooms' },
        { name: 'Gardens and Fountains', note: 'Musical fountain shows spring-fall weekends' },
        { name: 'Grand Trianon & Petit Trianon', note: 'Quieter royal retreats' }
      ]
    },
    faqs: [
      { question: 'Do I need advance tickets for Versailles?', answer: 'Strongly recommended. Summer waits without timed tickets can exceed 2 hours. Book 1-2 weeks ahead in peak season.' },
      { question: 'Is Versailles free for under 26?', answer: 'EU residents under 26 free with ID. Under 18 free regardless of nationality.' },
      { question: 'How long to visit Versailles?', answer: 'Full day for Palace, Gardens, Trianons. Half day possible for Palace and Gardens only. Dont underestimate the size.' }
    ]
  }
];

async function enrichMuseums() {
  console.log('Enriching museums with full details (batch 5)...\\n');

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

  console.log('\\nBatch 5 enrichment complete!');
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
