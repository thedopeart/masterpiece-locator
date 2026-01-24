const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 9 - 10 more museums with fully researched visitor info
const museums = [
  {
    slug: 'kenwood-house',
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
        lastAdmission: '16:30',
        groundsNote: 'Estate grounds open longer hours than house',
        exceptions: [
          { date: 'December 24-26', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        note: 'Free by law since 1929 (Iveagh Bequest Act)',
        englishHeritage: 'Not required for entry, but membership supports conservation',
        prebooking: 'Recommended but not required'
      },
      tickets: {
        onlineUrl: 'https://www.english-heritage.org.uk/visit/places/kenwood/',
        prebookingRecommended: true,
        walkUpAvailable: true,
        walkUpNote: 'Subject to availability'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['11am-2pm weekends'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August', 'Summer concerts season'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours (plus grounds)'
      },
      amenities: {
        cafe: true,
        cafeName: 'The Brew House Café',
        giftShop: true,
        coatCheck: false,
        wifi: false,
        parking: true,
        parkingNote: 'Limited parking on West Lodge car park'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, upper floors limited',
        wheelchairLoan: true,
        audioGuide: false
      },
      tips: [
        'Always free by law. Lord Iveagh\'s 1929 bequest stipulated no admission charge.',
        'The Vermeer (The Guitar Player) is one of only four Vermeers in UK public collections.',
        'On the edge of Hampstead Heath. Combine with a heath walk.',
        'Summer concerts on the lawn are a London tradition (separate tickets).',
        'Pre-booking recommended for guaranteed entry, especially weekends.',
        'The Rembrandt self-portrait and Gainsborough portraits are highlights.'
      ],
      mustSee: [
        { name: 'The Guitar Player', artist: 'Johannes Vermeer', location: 'Dining Room', note: 'One of only ~35 Vermeers worldwide' },
        { name: 'Self-Portrait with Two Circles', artist: 'Rembrandt', location: 'Dining Room', note: 'Late masterpiece, mysterious circles' },
        { name: 'Portrait of Dido Elizabeth Belle', artist: 'Attributed to David Martin', location: 'Main house', note: 'Subject of 2013 film "Belle"' },
        { name: 'Robert Adam interiors', artist: 'Architecture', location: 'Library', note: 'Neoclassical library ceiling' },
        { name: 'Hampstead Heath views', artist: 'Landscape', location: 'Grounds', note: 'London skyline panorama' }
      ]
    },
    faqs: [
      {
        question: 'Is Kenwood House really free?',
        answer: 'Yes, always. The 1929 Iveagh Bequest Act legally requires free public access. Lord Iveagh donated his art collection and the house to the nation on this condition.'
      },
      {
        question: 'Does Kenwood House have a Vermeer?',
        answer: 'Yes, The Guitar Player (c. 1672) is one of only four Vermeers in UK public collections. It\'s displayed in the Dining Room alongside Rembrandt and other Dutch masters.'
      },
      {
        question: 'How do I get to Kenwood House?',
        answer: 'Take the Northern Line to Archway or Golders Green, then bus 210 to the door. Or walk across Hampstead Heath from Hampstead tube station (about 20 minutes).'
      }
    ]
  },
  {
    slug: 'folkwang-museum-essen-germany',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: 'Carnival Monday', status: 'closed' },
          { date: 'December 24-25', status: 'closed' },
          { date: 'December 31', status: 'closed' }
        ]
      },
      admission: {
        collection: 'Free',
        specialExhibitions: 'Varies by exhibition',
        note: 'Permanent collection always free'
      },
      tickets: {
        onlineUrl: 'https://www.museum-folkwang.de/en/',
        reservationRequired: false,
        specialExhibitionNote: 'Book online for special exhibitions',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Thursday/Friday evening'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Vincent & Paul',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Underground parking available'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English']
      },
      tips: [
        'Permanent collection is always free. One of Germany\'s best deals.',
        'Stunning David Chipperfield extension (2010) with natural light galleries.',
        'Strong German Expressionism: Kirchner, Nolde, Marc, Macke.',
        'Thursday and Friday late opening until 8pm.',
        'Major photography collection, one of Germany\'s best.',
        'In the Ruhr industrial region, but world-class collection.'
      ],
      mustSee: [
        { name: 'Wanderer Above the Sea of Fog', artist: 'Caspar David Friedrich', location: 'Romantic gallery', note: 'German Romantic icon (on loan from Hamburg)' },
        { name: 'German Expressionist collection', artist: 'Kirchner, Nolde, Marc', location: 'Modern galleries', note: 'Die Brücke and Der Blaue Reiter' },
        { name: 'Van Gogh paintings', artist: 'Vincent van Gogh', location: 'Post-Impressionist gallery', note: 'Multiple works including Armand Roulin portrait' },
        { name: 'Photography collection', artist: 'Various', location: 'Photography galleries', note: 'One of Germany\'s most important' },
        { name: 'Chipperfield building', artist: 'David Chipperfield architects', location: 'Architecture', note: '2010 extension, light-filled galleries' }
      ]
    },
    faqs: [
      {
        question: 'Is Museum Folkwang free?',
        answer: 'The permanent collection is always free. Only special temporary exhibitions require tickets. You can see Van Gogh, Monet, and German Expressionists without paying.'
      },
      {
        question: 'Is Museum Folkwang worth visiting in Essen?',
        answer: 'Yes. It\'s one of Germany\'s most important art museums with an exceptional collection of 19th and 20th-century art. The David Chipperfield building is architecturally stunning. And the collection is free.'
      },
      {
        question: 'What is the Ruhr region known for?',
        answer: 'Former industrial heartland of Germany, now transformed with cultural institutions. Museum Folkwang, Zeche Zollverein (UNESCO site), and other museums make it a cultural destination.'
      }
    ]
  },
  {
    slug: 'museo-poldi-pezzoli-milan-italy',
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
        lastAdmission: '17:30',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'Easter', status: 'closed' },
          { date: 'April 25', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'August 15', status: 'closed' },
          { date: 'November 1', status: 'closed' },
          { date: 'December 8', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 14,
        reduced: 10,
        under10: 'free',
        caseMuseoCard: 'Available for 4 Milan house museums'
      },
      tickets: {
        onlineUrl: 'https://museopoldipezzoli.it/en/visit/info/',
        onlineRecommended: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'July'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Public garages nearby'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Historic building, some limitations',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'German', 'Spanish']
      },
      tips: [
        'One of Milan\'s best-kept secrets. A 19th-century collector\'s house museum.',
        'Botticelli\'s Portrait of a Lady (the "Poldi Pezzoli portrait") is a highlight.',
        'The Armory collection is exceptional, one of Europe\'s finest.',
        'Near La Scala and the Duomo. Easy to combine with central Milan.',
        'The Case Museo card covers four Milan house museums.',
        'Much less crowded than major Milan museums but equally important.'
      ],
      mustSee: [
        { name: 'Portrait of a Young Woman', artist: 'Piero del Pollaiuolo', location: 'Main gallery', note: 'The museum\'s iconic symbol' },
        { name: 'Pietà', artist: 'Giovanni Bellini', location: 'Main gallery', note: 'Exquisite Venetian devotional painting' },
        { name: 'Saint Nicholas of Tolentino', artist: 'Piero della Francesca', location: 'Main gallery', note: 'From the Augustinian Polyptych' },
        { name: 'Armory', artist: 'Various', location: 'Armory rooms', note: 'Exceptional collection of arms and armor' },
        { name: 'Decorative arts', artist: 'Various', location: 'Throughout', note: 'Clocks, textiles, jewelry, Murano glass' }
      ]
    },
    faqs: [
      {
        question: 'What is Museo Poldi Pezzoli?',
        answer: 'A house museum in Milan containing the collection of Gian Giacomo Poldi Pezzoli (1822-1879). He transformed his apartment into a showcase for Renaissance art, armor, and decorative arts.'
      },
      {
        question: 'Is Poldi Pezzoli worth visiting vs the Pinacoteca di Brera?',
        answer: 'Both are excellent but different. Brera is comprehensive and encyclopedic. Poldi Pezzoli is intimate and personal, showing one collector\'s taste. The armory alone is worth the visit.'
      },
      {
        question: 'What is the Case Museo card?',
        answer: 'A pass covering Milan\'s four house museums: Poldi Pezzoli, Bagatti Valsecchi, Casa Boschi di Stefano, and Villa Necchi Campiglio. Good value if you\'re interested in this museum type.'
      }
    ]
  },
  {
    slug: 'barber-institute-of-fine-arts-birmingham-uk',
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
        closureNote: 'Closed for refurbishment until late autumn 2025',
        exceptions: [
          { date: 'December 24-26', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        concerts: 'Ticketed separately',
        note: 'Always free admission to galleries'
      },
      tickets: {
        onlineUrl: 'https://barber.org.uk/',
        reservationRequired: false,
        concertBooking: 'Required for concerts',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Concert days'],
        bestMonths: ['All year quiet'],
        worstMonths: ['None'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Free weekends, paid weekdays'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: false
      },
      tips: [
        'CURRENTLY CLOSED for refurbishment until late autumn 2025.',
        'One of UK\'s finest small art museums, free admission.',
        'Grade I listed Art Deco building by Robert Atkinson (1939).',
        'On University of Birmingham campus. Train to University station.',
        'The concert hall hosts excellent classical music programs.',
        'Collection includes Bellini, Rubens, Monet, Magritte, Picasso.'
      ],
      mustSee: [
        { name: 'Saint Jerome in the Wilderness', artist: 'Giovanni Bellini', location: 'Gallery', note: 'Serene Venetian landscape' },
        { name: 'Boy Bitten by a Lizard', artist: 'Follower of Caravaggio', location: 'Gallery', note: 'Dramatic Baroque painting' },
        { name: 'Art Deco building', artist: 'Robert Atkinson', location: 'Architecture', note: 'Grade I listed 1939 building' },
        { name: 'Impressionist collection', artist: 'Monet, Degas, Renoir', location: 'Gallery', note: 'Quality French 19th century' },
        { name: 'Concert Hall', artist: 'Architecture', location: 'Within building', note: 'Intimate classical music venue' }
      ]
    },
    faqs: [
      {
        question: 'When does the Barber Institute reopen?',
        answer: 'Expected late autumn 2025. The museum closed January 2025 for refurbishment. Check the website for reopening updates. During closure, some works are on display at partner venues.'
      },
      {
        question: 'Is the Barber Institute free?',
        answer: 'Yes, general admission is always free. Concert tickets are sold separately. It\'s one of the UK\'s finest free art museums.'
      },
      {
        question: 'How do I get to the Barber Institute?',
        answer: 'Train to University station (cross-campus walk), or bus to Edgbaston. Free parking on weekends in campus car parks. Blue Badge holders can park free any day.'
      }
    ]
  },
  {
    slug: 'cincinnati-art-museum-cincinnati-oh-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '17:00' },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '20:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        memberEarlyAccess: 'Saturday-Sunday 10-11am',
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        specialExhibitions: 'Varies',
        parking: 'Free',
        note: 'Free since 1906 through the Mary Emery endowment'
      },
      tickets: {
        onlineUrl: 'https://www.cincinnatiartmuseum.org/visit/',
        reservationRequired: false,
        specialExhibitionNote: 'Tickets needed for special exhibitions',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 11am', 'Thursday evening'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Terrace Café',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingCost: 'Free'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English']
      },
      tips: [
        'Free since 1906. One of America\'s oldest and largest art museums.',
        'In Eden Park with beautiful views. Combine with a park visit.',
        'Thursday late opening until 8pm with Art After Dark events.',
        'Strong collection: ancient to contemporary, Asian to American.',
        'Free parking makes this an easy family visit.',
        'The Rookwood pottery collection honors Cincinnati\'s ceramic heritage.'
      ],
      mustSee: [
        { name: 'Under the Wave off Kanagawa', artist: 'Katsushika Hokusai', location: 'Asian galleries', note: 'The Great Wave woodblock print' },
        { name: 'Rookwood pottery', artist: 'Various', location: 'Decorative arts', note: 'Cincinnati\'s famous art pottery' },
        { name: 'European Old Masters', artist: 'Titian, Rubens, Hals', location: 'European galleries', note: 'Strong Renaissance and Baroque' },
        { name: 'Asian art collection', artist: 'Various', location: 'Asian galleries', note: 'Comprehensive Chinese, Japanese, Indian' },
        { name: 'American paintings', artist: 'Cassatt, Sargent, Homer', location: 'American galleries', note: 'Strong 19th century American' }
      ]
    },
    faqs: [
      {
        question: 'Is the Cincinnati Art Museum free?',
        answer: 'Yes, always free for permanent collection. Free since 1906 through Mary Emery\'s endowment. Special exhibitions may require tickets. Parking is also free.'
      },
      {
        question: 'How long to spend at the Cincinnati Art Museum?',
        answer: 'About 2-3 hours for a good overview. The collection spans 6,000 years with over 67,000 works. Thursday evenings are great for Art After Dark events.'
      },
      {
        question: 'What is Eden Park?',
        answer: 'A beautiful Cincinnati park where the museum is located. Great for combining art with nature. The park has gardens, walking paths, and city views.'
      }
    ]
  },
  {
    slug: 'auckland-art-gallery-auckland-new-zealand',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        fridayLate: 'Open until 9pm on Fridays',
        exceptions: [
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        nzResidents: 'Free',
        international: 'Free (charges suspended)',
        under12: 'free',
        specialExhibitions: 'May be ticketed',
        note: 'New ticketing from May 2025'
      },
      tickets: {
        onlineUrl: 'https://www.aucklandartgallery.com/',
        reservationRequired: false,
        walkUpAvailable: true,
        freeTours: 'Daily at 11:30am and 1:30pm'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Friday evening'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['May', 'June', 'September'],
        worstMonths: ['December', 'January (NZ summer)'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Victoria Street car parks'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Mandarin', 'Japanese']
      },
      tips: [
        'New Zealand\'s largest art museum. Free for all (international visitor charges currently suspended).',
        'Friday late opening until 9pm is less crowded.',
        'Strong Māori and Pacific art collection alongside European works.',
        'Free guided tours daily at 11:30am and 1:30pm.',
        'The SANAA-influenced extension (2011) is architecturally notable.',
        'Colin McCahon and other NZ artists are well represented.'
      ],
      mustSee: [
        { name: 'Māori and Pacific collection', artist: 'Various', location: 'Ground floor', note: 'Indigenous New Zealand art' },
        { name: 'Colin McCahon works', artist: 'Colin McCahon', location: 'NZ galleries', note: 'New Zealand\'s most significant artist' },
        { name: 'Gottfried Lindauer portraits', artist: 'Gottfried Lindauer', location: 'NZ galleries', note: 'Historic Māori portraits' },
        { name: 'European collection', artist: 'Various', location: 'Upper floors', note: 'From Renaissance to Impressionism' },
        { name: '2011 extension', artist: 'FJMT + Archimedia', location: 'Architecture', note: 'Award-winning contemporary design' }
      ]
    },
    faqs: [
      {
        question: 'Is Auckland Art Gallery free?',
        answer: 'Yes, currently free for everyone. International visitor charges have been suspended. NZ residents and children under 12 are always free. New ticketing structure from May 2025.'
      },
      {
        question: 'What makes Auckland Art Gallery special?',
        answer: 'It\'s New Zealand\'s largest and most comprehensive art museum, with strong Māori and Pacific art alongside international collections. The 2011 extension is architecturally significant.'
      },
      {
        question: 'Are there free tours at Auckland Art Gallery?',
        answer: 'Yes, free guided tours in English run daily at 11:30am and 1:30pm. No booking required, just meet at the information desk.'
      }
    ]
  },
  {
    slug: 'mus233e-de-grenoble-grenoble-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:30' },
          wednesday: { open: '10:00', close: '18:30' },
          thursday: { open: '10:00', close: '18:30' },
          friday: { open: '10:00', close: '18:30' },
          saturday: { open: '10:00', close: '18:30' },
          sunday: { open: '10:00', close: '18:30' }
        },
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        permanent: 'Free',
        temporaryExhibitions: '€14 full / €7 reduced',
        under26: 'free',
        freeDay: 'First Sunday of month',
        grenobleResident: 'Reduced rate with proof'
      },
      tickets: {
        onlineUrl: 'https://www.museedegrenoble.fr/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday', 'First Sunday (free)'],
        bestTimes: ['Opening at 10am', 'After 4pm'],
        worstTimes: ['Free first Sunday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-2.5 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Underground parking beneath museum'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English']
      },
      tips: [
        'Permanent collection is always free. One of France\'s major regional museums.',
        'Exceptional modern art: Matisse, Picasso, Warhol, Soulages.',
        'Underground parking directly beneath the museum.',
        'At the foot of the Alps. Combine with mountain excursions.',
        'Under 26 always free, first Sunday free for all.',
        'Strong 20th-century collection rivals many Paris museums.'
      ],
      mustSee: [
        { name: 'Intérieur aux Aubergines', artist: 'Henri Matisse', location: 'Modern galleries', note: 'Major Matisse interior' },
        { name: 'Femme lisant', artist: 'Pablo Picasso', location: 'Modern galleries', note: 'Cubist period work' },
        { name: 'Pierre Soulages collection', artist: 'Pierre Soulages', location: 'Contemporary galleries', note: 'Major outrenoir paintings' },
        { name: 'Rubens and Zurbarán', artist: 'Baroque masters', location: 'Old Masters galleries', note: 'Strong 17th-century holdings' },
        { name: 'Egyptian antiquities', artist: 'Ancient', location: 'Antiquities gallery', note: 'Including mummy cases' }
      ]
    },
    faqs: [
      {
        question: 'Is Musée de Grenoble free?',
        answer: 'The permanent collection is always free. Temporary exhibitions cost €14 (€7 reduced). Under 26 always free. First Sunday of each month is completely free.'
      },
      {
        question: 'Is Musée de Grenoble worth visiting?',
        answer: 'Yes. It\'s one of France\'s most important regional museums, with a modern art collection rivaling Paris museums. Matisse, Picasso, Soulages, and strong Old Masters. And the permanent collection is free.'
      },
      {
        question: 'What is Grenoble known for?',
        answer: 'A university city at the foot of the French Alps. Gateway to ski resorts, surrounded by mountains. The Musée de Grenoble is its cultural crown jewel.'
      }
    ]
  },
  {
    slug: 'germanisches-nationalmuseum-nuremberg-germany',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '20:30' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        wednesdayEvening: 'Free admission 5:30-8:30pm',
        exceptions: [
          { date: 'Carnival Monday', status: 'closed' },
          { date: 'December 24-25', status: 'closed' },
          { date: 'December 31', status: 'closed' }
        ]
      },
      admission: {
        adult: 10,
        reduced: 6,
        family: 14,
        familyNote: '2-6 people, max 2 adults',
        under18: 1,
        wednesdayEvening: 'Free 5:30-8:30pm',
        nurembergCard: 'Included'
      },
      tickets: {
        onlineUrl: 'https://www.gnm.de/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Wednesday evening (free)'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['December (Christmas market)', 'July'],
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '3 hours minimum'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café Arte',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Parking garages in old town'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English']
      },
      tips: [
        'Germany\'s largest cultural history museum. Plan at least 3 hours.',
        'Wednesday evening free admission (5:30-8:30pm) is excellent value.',
        'Dürer\'s works including self-portrait and paintings.',
        'The first pocket watch in history (Nuremberg Egg) is here.',
        'Oldest surviving globe (Erdapfel, 1492) predates Columbus\'s return.',
        'In Nuremberg old town. Combine with Kaiserburg castle.'
      ],
      mustSee: [
        { name: 'Albrecht Dürer works', artist: 'Albrecht Dürer', location: 'Renaissance galleries', note: 'Nuremberg\'s most famous son' },
        { name: 'Behaim Globe (Erdapfel)', artist: 'Martin Behaim', location: 'Scientific instruments', note: 'Oldest surviving globe (1492)' },
        { name: 'Nuremberg Egg (pocket watch)', artist: 'Peter Henlein', location: 'Scientific instruments', note: 'World\'s first pocket watch' },
        { name: 'Medieval collection', artist: 'Various', location: 'Medieval galleries', note: 'Exceptional medieval art and craft' },
        { name: 'Musical instruments', artist: 'Various', location: 'Music gallery', note: 'Europe\'s largest collection' }
      ]
    },
    faqs: [
      {
        question: 'What is the Germanisches Nationalmuseum?',
        answer: 'Germany\'s largest museum of cultural history, covering German-speaking peoples from prehistory to present. Art, crafts, scientific instruments, musical instruments, textiles, armor. Founded 1852.'
      },
      {
        question: 'Is the Germanisches Nationalmuseum free?',
        answer: 'Free on Wednesday evenings from 5:30-8:30pm. Otherwise €10 adult, €6 reduced. The Nürnberg Card includes admission plus transit.'
      },
      {
        question: 'How long to spend at the Germanisches Nationalmuseum?',
        answer: 'At least 3 hours, ideally 4. With 1.3 million objects and 25,000 on display, you can\'t see everything. Focus on highlights: Dürer, the globe, the pocket watch, musical instruments.'
      }
    ]
  },
  {
    slug: 'delphi-archaeological-museum',
    hoursOfOperation: {
      hours: {
        seasonal: {
          summer: {
            period: 'April 1 - October 31',
            daily: { open: '08:00', close: '20:00' },
            tuesdayException: { open: '10:00', close: '17:00' }
          },
          winter: {
            period: 'November 1 - March 31',
            daily: { open: '08:30', close: '15:30' }
          }
        },
        lastAdmission: '30 minutes before closing',
        timedEntry: 'Required from April 2024'
      },
      admission: {
        combined: 12,
        combinedNote: 'Museum + Archaeological site',
        reduced: 6,
        under25EU: 'free',
        freeDay: 'Various national holidays',
        currency: 'EUR'
      },
      tickets: {
        onlineUrl: 'https://hhticket.gr/',
        onlineRequired: true,
        timedEntry: true,
        advanceRecommended: true,
        advanceWindow: '1 hour before/after slot'
      },
      crowdData: {
        overall: 'Heavy (peak season)',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening (8am summer)', 'Last 2 hours'],
        worstTimes: ['10am-2pm', 'Tour group arrivals'],
        bestMonths: ['April', 'May', 'September', 'October'],
        worstMonths: ['June', 'July', 'August'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '4-5 hours (site + museum)'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: true,
        parkingNote: 'Parking at site entrance'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairNote: 'Museum fully accessible, site partially'
      },
      tips: [
        'Book timed-entry tickets online in advance. Required since April 2024.',
        'Combined ticket covers both museum and archaeological site.',
        'Visit early morning in summer to avoid heat and crowds.',
        'The Charioteer bronze is the museum\'s masterpiece.',
        'Allow 4-5 hours total for site and museum together.',
        'Spring (April-May) and fall (September-October) have best weather and fewer crowds.'
      ],
      mustSee: [
        { name: 'Charioteer of Delphi', artist: 'Ancient Greek', location: 'Main hall', note: 'One of finest ancient bronzes surviving' },
        { name: 'Sphinx of Naxos', artist: 'Ancient Greek', location: 'Archaic gallery', note: 'Stood atop tall column at sanctuary' },
        { name: 'Omphalos', artist: 'Ancient Greek', location: 'Main galleries', note: 'The "navel of the world"' },
        { name: 'Treasury of Siphnos frieze', artist: 'Ancient Greek', location: 'Archaic gallery', note: 'Exceptional Archaic relief sculpture' },
        { name: 'Kleobis and Biton', artist: 'Ancient Greek', location: 'Archaic gallery', note: 'Monumental Archaic kouroi' }
      ]
    },
    faqs: [
      {
        question: 'Do I need to book Delphi tickets in advance?',
        answer: 'Yes. Since April 2024, timed-entry tickets must be booked online through hhticket.gr. Your slot is valid 1 hour before to 1 hour after. Arrive 30 minutes early.'
      },
      {
        question: 'Should I visit Delphi museum or site first?',
        answer: 'Either works. Some prefer the site first to see the context, then the museum for the artifacts. Others do museum first to understand what they\'ll see. Combined ticket covers both.'
      },
      {
        question: 'How long to spend at Delphi?',
        answer: 'About 4-5 hours for both the archaeological site and museum. The site alone takes 2-3 hours (uphill walking), the museum 1.5-2 hours. Start early in summer to avoid heat.'
      }
    ]
  },
  {
    slug: 'dumbarton-oaks-research-library-and-collection-was',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:30', close: '17:30' },
          wednesday: { open: '11:30', close: '17:30' },
          thursday: { open: '11:30', close: '17:30' },
          friday: { open: '11:30', close: '17:30' },
          saturday: { open: '11:30', close: '17:30' },
          sunday: { open: '11:30', close: '17:30' }
        },
        museumShop: '13:00-17:00',
        exceptions: [
          { date: 'Federal holidays', status: 'check website' },
          { date: 'December 24-25', status: 'closed' }
        ]
      },
      admission: {
        museum: 'Free',
        gardens: 15,
        gardensNote: 'Seasonal admission, tickets online only',
        under2: 'free',
        note: 'Museum free, gardens ticketed'
      },
      tickets: {
        onlineUrl: 'https://www.doaks.org/visit',
        museumReservation: 'Not required',
        gardensNote: 'Online only via Eventbrite, no on-site sales',
        seasonPass: 110,
        seasonPassNote: 'Family pass, 2 adults + 3 children/students'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening', 'After 3pm'],
        worstTimes: ['Garden peak blooming weekends'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May (garden peak)'],
        avgVisitDuration: '1-2 hours (museum) / 1 hour (gardens)',
        recommendedDuration: '2 hours total'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        giftShopHours: '13:00-17:00',
        coatCheck: true,
        wifi: false,
        parking: false,
        nearbyParking: 'Street parking in Georgetown'
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairNote: 'Museum accessible, gardens partially',
        elevator: true,
        audioGuide: false
      },
      tips: [
        'Two distinct collections: Byzantine art and Pre-Columbian art. Both world-class.',
        'Museum is free. Gardens require advance online tickets ($15).',
        'In Georgetown. Combine with neighborhood exploring.',
        'The Music Room hosts concerts and lectures.',
        'Harvard-owned research institution, not just a museum.',
        'The gardens are spectacular in spring, but crowded.'
      ],
      mustSee: [
        { name: 'Byzantine collection', artist: 'Various', location: 'Byzantine galleries', note: 'One of world\'s finest outside Istanbul' },
        { name: 'Pre-Columbian collection', artist: 'Various', location: 'Pre-Columbian Pavilion', note: 'Philip Johnson-designed galleries' },
        { name: 'Music Room', artist: 'Architecture', location: 'Main house', note: 'Renaissance-style room with tapestries' },
        { name: 'Gardens', artist: 'Beatrix Farrand', location: 'Outdoors', note: 'Historic 10-acre gardens (ticketed)' },
        { name: 'Jade collection', artist: 'Pre-Columbian', location: 'Pre-Columbian Pavilion', note: 'Exceptional Olmec and Maya jade' }
      ]
    },
    faqs: [
      {
        question: 'Is Dumbarton Oaks free?',
        answer: 'The museum is free. The gardens cost $15 and require advance online tickets (no on-site sales). The gardens are one of America\'s great historic landscapes.'
      },
      {
        question: 'What is Dumbarton Oaks known for?',
        answer: 'World-class Byzantine and Pre-Columbian art collections, plus historic gardens designed by Beatrix Farrand. Also a Harvard research center for Byzantine, Pre-Columbian, and garden studies.'
      },
      {
        question: 'Is Dumbarton Oaks part of Georgetown University?',
        answer: 'No, it\'s owned by Harvard University. It\'s located in the Georgetown neighborhood of DC but is a Harvard research institution since 1940.'
      }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full visitor info for 10 museums (batch 9)...\n');

  for (const museum of museums) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.name}`);
    } catch (error) {
      console.error(`✗ Failed: ${museum.slug} - ${error.message}`);
    }
  }

  const totalWithHours = await prisma.museum.count({
    where: {
      hoursOfOperation: { not: { equals: {} } }
    }
  });

  console.log(`\n✓ Total museums with visitor info: ${totalWithHours}`);

  await prisma.$disconnect();
}

addMuseumInfo().catch(console.error);
