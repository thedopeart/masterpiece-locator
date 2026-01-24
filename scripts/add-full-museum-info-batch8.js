const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 8 - 10 more museums with fully researched visitor info
const museums = [
  {
    slug: 'mus233e-cantonal-des-beauxarts-lausanne-switzerlan',
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
        lastAdmission: '30 minutes before closing',
        exceptions: [
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' },
          { date: 'December 24 & 31', status: '10:00-17:00' }
        ]
      },
      admission: {
        permanent: 'Free',
        temporaryExhibitions: 'Varies by exhibition',
        under16: 'free',
        freeDay: 'First Saturday of month',
        note: 'Part of Plateforme 10 arts district'
      },
      tickets: {
        onlineUrl: 'https://www.mcba.ch/en/ticketing/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Thursday evening'],
        worstTimes: ['First Saturday (free)', 'Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Montbenon parking 300m, discount with ticket'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English', 'German']
      },
      tips: [
        'New building opened 2019 as part of Plateforme 10, right next to Lausanne train station.',
        'Permanent collection is free. Only temporary exhibitions require tickets.',
        'Thursday late opening until 8pm is less crowded.',
        'Plateforme 10 also includes Photo Elysée and mudac design museum. Combined visits possible.',
        'Strong Swiss art collection: Vallotton, Hodler, Steinlen.',
        'First Saturday of month is free for all, including temporary exhibitions.'
      ],
      mustSee: [
        { name: 'Félix Vallotton collection', artist: 'Félix Vallotton', location: 'Swiss galleries', note: 'Major holdings of this Lausanne-born Nabi painter' },
        { name: 'Ferdinand Hodler works', artist: 'Ferdinand Hodler', location: 'Swiss galleries', note: 'Swiss Symbolist, monumental landscapes' },
        { name: 'Plateforme 10 building', artist: 'Barozzi Veiga architects', location: 'Architecture', note: 'Award-winning contemporary building' },
        { name: 'Swiss Romantic landscapes', artist: 'Various', location: 'Historic galleries', note: 'Calame, Diday, Swiss Alps tradition' },
        { name: 'Contemporary Swiss art', artist: 'Various', location: 'Modern galleries', note: 'Rotating contemporary exhibitions' }
      ]
    },
    faqs: [
      {
        question: 'Is the MCBA Lausanne free?',
        answer: 'The permanent collection is always free. Temporary exhibitions require tickets. First Saturday of the month is completely free for everything, including special exhibitions.'
      },
      {
        question: 'What is Plateforme 10?',
        answer: 'A new arts district next to Lausanne train station opened in 2019. It houses three museums: MCBA (fine arts), Photo Elysée (photography), and mudac (design). One location, three museums.'
      },
      {
        question: 'Is MCBA worth visiting in Lausanne?',
        answer: 'Yes, especially for Swiss art. Vallotton and Hodler are highlights. The building itself is architecturally striking. Combined with Photo Elysée and mudac, you could spend a half day here.'
      }
    ]
  },
  {
    slug: 'br252cke-museum-berlin-germany',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '17:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: 'December 24', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'December 31', status: 'closed' }
        ]
      },
      admission: {
        adult: 6,
        reduced: 4,
        under18: 'free',
        lastHourDiscount: '50% off in final hour',
        freeDay: 'One Sunday per month',
        berlinWelcomeCard: '25% discount',
        museumPass: 'Berlin Museum Pass accepted'
      },
      tickets: {
        onlineUrl: 'https://www.bruecke-museum.de/en/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Free Sunday'],
        bestMonths: ['All year relatively quiet'],
        worstMonths: ['None'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        garden: true,
        gardenNote: 'Located in Grunewald forest'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: false,
        guidedTours: 'Free Sunday tours at 11:30am'
      },
      tips: [
        'World\'s largest collection of Die Brücke Expressionist art.',
        'Located in a modernist bungalow in the Grunewald forest. Very peaceful setting.',
        'Free guided tour every Sunday at 11:30am (no registration needed).',
        '50% discount in the last hour before closing.',
        'Combine with nearby Kunsthaus Dahlem for a full day of Berlin art.',
        'Far from central Berlin but worth the trip for Expressionism fans.'
      ],
      mustSee: [
        { name: 'Ernst Ludwig Kirchner paintings', artist: 'Ernst Ludwig Kirchner', location: 'Main galleries', note: 'Street scenes, portraits, landscapes' },
        { name: 'Erich Heckel works', artist: 'Erich Heckel', location: 'Main galleries', note: 'Woodcuts and paintings' },
        { name: 'Karl Schmidt-Rottluff', artist: 'Karl Schmidt-Rottluff', location: 'Main galleries', note: 'Bold colors, angular forms' },
        { name: 'Max Pechstein', artist: 'Max Pechstein', location: 'Main galleries', note: 'South Seas influenced works' },
        { name: 'Original Brücke woodcuts', artist: 'Various', location: 'Graphics cabinet', note: 'Prints that defined the movement' }
      ]
    },
    faqs: [
      {
        question: 'What was Die Brücke?',
        answer: 'A German Expressionist artists group founded in Dresden in 1905. Members included Kirchner, Heckel, Schmidt-Rottluff, and Pechstein. They sought to bridge (Brücke) from academic art to a new, expressive style.'
      },
      {
        question: 'Is the Brücke Museum worth the trip from central Berlin?',
        answer: 'For Expressionism fans, yes. It\'s the world\'s most comprehensive collection of Die Brücke art. The forest setting adds to the experience. Take Bus 115 or X10 to the door.'
      },
      {
        question: 'When is free admission at the Brücke Museum?',
        answer: 'One Sunday per month (check website for dates). The last hour every day is 50% off. Under 18 always free. The €6 full price is already very reasonable.'
      }
    ]
  },
  {
    slug: 'scuola-grande-di-san-rocco-venice-italy',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:30', close: '17:30' },
          tuesday: { open: '09:30', close: '17:30' },
          wednesday: { open: '09:30', close: '17:30' },
          thursday: { open: '09:30', close: '17:30' },
          friday: { open: '09:30', close: '17:30' },
          saturday: { open: '09:30', close: '17:30' },
          sunday: { open: '13:30', close: '17:30' }
        },
        lastAdmission: '17:00',
        sundayNote: 'Opens at 1:30pm on Sundays',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'Easter Sunday', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 12,
        over70: 10,
        under18: 3,
        under8: 'free',
        family: 26,
        familyNote: '2 adults + children under 18',
        disabled: 'Free with one companion'
      },
      tickets: {
        onlineUrl: 'https://www.scuolagrandesanrocco.org/home-en/information/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 9:30am', 'After 3pm'],
        worstTimes: ['Midday tour group arrivals'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['May', 'June', 'July', 'August'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, upper floors via stairs',
        elevator: false,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'German', 'Spanish']
      },
      tips: [
        'Contains over 60 Tintoretto paintings. He spent 24 years decorating this building.',
        'Bring binoculars or use mirrors provided to see ceiling details.',
        'Sunday opening is 1:30pm, not morning. Plan accordingly.',
        'The Crucifixion in the Sala dell\'Albergo is considered Tintoretto\'s masterpiece.',
        'Less crowded than the Accademia or Doge\'s Palace but equally important.',
        'The adjacent Church of San Rocco (currently closed for restoration) has more Tintorettos.'
      ],
      mustSee: [
        { name: 'The Crucifixion', artist: 'Tintoretto', location: 'Sala dell\'Albergo', note: 'Massive canvas, considered his greatest work' },
        { name: 'The Last Supper', artist: 'Tintoretto', location: 'Ground floor', note: 'Dynamic diagonal composition' },
        { name: 'Ceiling paintings', artist: 'Tintoretto', location: 'Upper Hall', note: 'Old Testament scenes, bring binoculars' },
        { name: 'Flight into Egypt', artist: 'Tintoretto', location: 'Ground floor', note: 'Unusual landscape setting' },
        { name: 'Sala dell\'Albergo', artist: 'Tintoretto', location: 'Upper floor', note: 'Entire room decorated by Tintoretto' }
      ]
    },
    faqs: [
      {
        question: 'Is the Scuola Grande di San Rocco worth visiting?',
        answer: 'Absolutely, for anyone interested in Renaissance art. It contains Tintoretto\'s greatest work, a cycle of over 60 paintings created over 24 years. Henry James called it "one of the tiniest things on earth."'
      },
      {
        question: 'What is a Scuola Grande in Venice?',
        answer: 'Confraternities (religious/charitable brotherhoods) that commissioned major art. San Rocco (patron saint of plague victims) was one of the wealthiest. The building itself is as impressive as the paintings.'
      },
      {
        question: 'How long to spend at Scuola Grande di San Rocco?',
        answer: 'At least 1-1.5 hours to properly see the three floors of Tintoretto paintings. The audio guide helps explain the complex biblical narratives. Bring binoculars for ceiling details.'
      }
    ]
  },
  {
    slug: 'hirschsprung-collection-copenhagen-denmark',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '20:00', note: 'Last Thursday until 8pm' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        lateOpening: 'Last Thursday of month until 8pm',
        exceptions: [
          { date: 'December 23-26', status: 'closed' },
          { date: 'December 31', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        adult: 110,
        currency: 'DKK',
        under18: 'free',
        copenhagenCard: 'Included',
        parkmuseerne: 'Combo ticket with 5 other museums',
        note: 'About €15 / $16 USD'
      },
      tickets: {
        onlineUrl: 'https://www.hirschsprung.dk/en/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Late Thursday evening'],
        bestMonths: ['All year quiet'],
        worstMonths: ['None'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        cafeNote: '10% discount at nearby restaurants with ticket',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Danish', 'English']
      },
      tips: [
        'Specializes in Danish Golden Age painting (1800-1850). Eckersberg, Købke, Hammershøi.',
        'Small, intimate museum. Perfect counterpoint to the larger SMK nearby.',
        'Located in King\'s Garden (Rosenborg Castle gardens). Combine with a park stroll.',
        'The Parkmuseerne pass covers six museums in the area if you\'re doing a museum day.',
        'Last Thursday of month until 8pm offers a quieter evening visit.',
        'No cafe, but ticket gives discounts at nearby restaurants.'
      ],
      mustSee: [
        { name: 'P.S. Krøyer paintings', artist: 'Peder Severin Krøyer', location: 'Main galleries', note: 'Skagen beach scenes, luminous summer light' },
        { name: 'Vilhelm Hammershøi interiors', artist: 'Vilhelm Hammershøi', location: 'Main galleries', note: 'Haunting quiet domestic scenes' },
        { name: 'C.W. Eckersberg', artist: 'Christoffer Wilhelm Eckersberg', location: 'Golden Age gallery', note: 'Father of Danish painting' },
        { name: 'Christen Købke', artist: 'Christen Købke', location: 'Golden Age gallery', note: 'Intimate portraits and landscapes' },
        { name: 'Danish Golden Age collection', artist: 'Various', location: 'Throughout', note: 'Best single collection of this period' }
      ]
    },
    faqs: [
      {
        question: 'What is the Danish Golden Age?',
        answer: 'A flourishing of Danish art from roughly 1800-1850. Artists like Eckersberg, Købke, and later Krøyer developed a distinctly Danish style emphasizing light, intimate scenes, and national identity.'
      },
      {
        question: 'Hirschsprung vs SMK: which is better?',
        answer: 'Different focuses. SMK (National Gallery) is comprehensive European art. Hirschsprung specializes in Danish Golden Age. For Danish art specifically, Hirschsprung is more focused and intimate. Do both if time allows.'
      },
      {
        question: 'Is the Hirschsprung Collection free?',
        answer: 'Not free (110 DKK / ~€15), but included in Copenhagen Card. Under 18 free. The Parkmuseerne pass covers it plus five other nearby museums if you\'re doing multiple.'
      }
    ]
  },
  {
    slug: 'timken-museum-of-art-san-diego-ca-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '16:30' }
        },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        note: 'Always free admission, donations welcome'
      },
      tickets: {
        onlineUrl: 'https://www.timkenmuseum.org/',
        reservationRequired: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['All year quiet'],
        worstMonths: ['Summer weekends'],
        avgVisitDuration: '45 minutes - 1 hour',
        recommendedDuration: '1 hour'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: false,
        wifi: true,
        parking: true,
        parkingNote: 'Balboa Park parking nearby'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: false,
        docentTours: 'Free tours in 8 languages'
      },
      tips: [
        'Always free. One of San Diego\'s best-kept secrets.',
        'Small but exceptional collection: Rembrandt, Rubens, Frans Hals, Boucher.',
        'The only Rembrandt on public display in Southern California is here.',
        'In Balboa Park, next to the San Diego Museum of Art. Easy to combine.',
        'Free docent tours available in 8 languages.',
        'Russian icons collection is surprisingly strong.'
      ],
      mustSee: [
        { name: 'Saint Bartholomew', artist: 'Rembrandt', location: 'Dutch gallery', note: 'Only Rembrandt in Southern California on public view' },
        { name: 'Portrait of a Young Man', artist: 'Frans Hals', location: 'Dutch gallery', note: 'Lively Dutch Golden Age portrait' },
        { name: 'Mrs. James Cruikshank', artist: 'Thomas Lawrence', location: 'British gallery', note: 'Elegant Regency portrait' },
        { name: 'Russian icons', artist: 'Various', location: 'Icons gallery', note: 'Fine collection spanning centuries' },
        { name: 'Parable of the Sower', artist: 'Pieter Bruegel the Elder', location: 'Flemish gallery', note: 'Rare Bruegel in the US' }
      ]
    },
    faqs: [
      {
        question: 'Is the Timken Museum really free?',
        answer: 'Yes, always free. Founded with an endowment specifically to ensure free admission forever. Donations are welcome but never required.'
      },
      {
        question: 'How does the Timken compare to the San Diego Museum of Art?',
        answer: 'SDMA is larger and more comprehensive. The Timken is smaller but focused on European Old Masters and is free. They\'re next to each other in Balboa Park, so visit both.'
      },
      {
        question: 'How long to spend at the Timken Museum?',
        answer: 'About 45 minutes to an hour. It\'s a focused collection in a small space. Perfect for those who want quality over quantity without museum fatigue.'
      }
    ]
  },
  {
    slug: 'virginia-museum-of-fine-arts-richmond-va-us',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        note: 'Open 365 days a year',
        lateNights: 'Wednesday-Friday until 9pm',
        exceptions: [
          { date: 'Thanksgiving', status: '10am-5pm' },
          { date: 'Christmas Eve', status: '10am-5pm' }
        ]
      },
      admission: {
        general: 'Free',
        specialExhibitions: 'Varies',
        parking: 'Free for members, paid for others',
        note: 'Permanent collection always free'
      },
      tickets: {
        onlineUrl: 'https://vmfa.museum/visit/',
        reservationRequired: false,
        specialExhibitionNote: 'Tickets needed for special exhibitions',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday evening'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Evening hours Wed-Fri'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        restaurantName: 'Amuse Restaurant',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Members free, others paid'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English']
      },
      tips: [
        'One of America\'s largest comprehensive art museums, and permanent collection is free.',
        'Open 365 days a year, including holidays.',
        'Wednesday-Friday late nights until 9pm are less crowded and atmospheric.',
        'The Fabergé collection is one of the largest outside Russia.',
        'Major expansion underway (largest in museum history). Some galleries may be closed.',
        'Strong Art Nouveau and Art Deco collections.'
      ],
      mustSee: [
        { name: 'Fabergé eggs collection', artist: 'House of Fabergé', location: 'Decorative arts', note: 'Five Imperial eggs, largest collection outside Russia' },
        { name: 'Art Nouveau collection', artist: 'Various', location: 'Decorative arts', note: 'Furniture, glass, jewelry' },
        { name: 'South Asian galleries', artist: 'Various', location: 'Asian wing', note: 'Strong Indian and Himalayan collection' },
        { name: 'Impressionist collection', artist: 'Monet, Degas, Renoir', location: 'European galleries', note: 'Quality French 19th-century holdings' },
        { name: 'American art', artist: 'Various', location: 'American wing', note: 'Colonial to contemporary' }
      ]
    },
    faqs: [
      {
        question: 'Is VMFA really free?',
        answer: 'Yes, the permanent collection is always free. Only special ticketed exhibitions require payment. With 50,000+ works, you can see world-class art without spending a dime.'
      },
      {
        question: 'What is VMFA known for?',
        answer: 'The Fabergé collection (5 Imperial eggs), Art Nouveau/Deco decorative arts, South Asian art, and comprehensive global collections. It\'s one of America\'s largest and most encyclopedic museums.'
      },
      {
        question: 'Is VMFA open every day?',
        answer: 'Yes, 365 days a year, including holidays. Evening hours Wednesday-Friday until 9pm make after-work visits possible. It\'s unusually accessible for a major museum.'
      }
    ]
  },
  {
    slug: 'mus233e-cognacqjay-paris-france',
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
        lastAdmission: '17:15',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'December 24 & 31', status: 'closes at 17:00' }
        ]
      },
      admission: {
        permanent: 'Free',
        temporaryExhibitions: '€8 full / €6 reduced',
        under18: 'free',
        note: 'City of Paris museum, permanent collection free'
      },
      tickets: {
        onlineUrl: 'https://www.museecognacqjay.paris.fr/en/',
        onlineRecommended: true,
        onlineNote: 'Advance booking recommended for exhibitions',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1 hour'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: false,
        wheelchairNote: 'Historic building not accessible',
        audioGuide: true,
        audioGuideLanguages: ['French', 'English']
      },
      tips: [
        'Specializes in 18th-century French art. Watteau, Boucher, Fragonard, Chardin.',
        'Founded by the Samaritaine department store owners. Their personal collection.',
        'Permanent collection is free. Only temporary exhibitions require tickets.',
        'In the Marais district. Combine with Carnavalet and Picasso museums.',
        'Small and intimate. A refreshing change from major Paris museums.',
        'Not wheelchair accessible due to historic building constraints.'
      ],
      mustSee: [
        { name: 'Breakfast', artist: 'François Boucher', location: 'Main galleries', note: 'Intimate Rococo scene' },
        { name: 'Pélerinage à l\'île de Cythère', artist: 'Jean-Antoine Watteau', location: 'Main galleries', note: 'Study for his famous fête galante' },
        { name: 'Still lifes', artist: 'Jean-Baptiste-Siméon Chardin', location: 'Main galleries', note: 'Quiet domestic scenes' },
        { name: 'Portraits', artist: 'Jean-Honoré Fragonard', location: 'Main galleries', note: 'Rococo portraiture' },
        { name: 'Decorative arts', artist: 'Various', location: 'Throughout', note: 'Furniture, porcelain, objets d\'art' }
      ]
    },
    faqs: [
      {
        question: 'Is Musée Cognacq-Jay free?',
        answer: 'The permanent collection is always free (it\'s a City of Paris museum). Only temporary exhibitions require tickets (€8). You can see Watteau, Boucher, and Fragonard without paying.'
      },
      {
        question: 'What is Musée Cognacq-Jay about?',
        answer: 'It specializes in 18th-century French art: Rococo paintings, furniture, porcelain, and decorative arts. The collection was assembled by the founders of the Samaritaine department store.'
      },
      {
        question: 'Is Cognacq-Jay worth visiting with limited time in Paris?',
        answer: 'If you love 18th-century French art, yes. It\'s small, free, uncrowded, and in the lovely Marais. Combined with the nearby Carnavalet (also free), you get a charming alternative to the major museums.'
      }
    ]
  },
  {
    slug: 'palazzo-massimo',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '18:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        seasonal: {
          summer: { period: 'June-August', close: '20:00' }
        },
        lastAdmission: '1 hour before closing',
        exceptions: [
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' }
        ]
      },
      admission: {
        combined: 12,
        combinedNote: 'Valid 1 week for Palazzo Massimo, Baths of Diocletian, Palazzo Altemps',
        reduced: 2,
        reducedNote: 'EU citizens 18-25',
        under18EU: 'free',
        romaPass: 'Included with Roma Pass'
      },
      tickets: {
        onlineUrl: 'https://museonazionaleromano.beniculturali.it/en/',
        onlineRecommended: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 11am', 'After 4pm'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'July'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Main floors accessible',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'German', 'Spanish']
      },
      tips: [
        'Part of the National Roman Museum system. The €12 ticket covers 3 sites for a week.',
        'The frescoes from the Villa of Livia (wife of Augustus) are stunning.',
        'Right next to Termini train station. Easy arrival/departure visit.',
        'Often overlooked for the Vatican, but essential for Roman art enthusiasts.',
        'The coin collection (basement) is one of the world\'s best.',
        'Palazzo Altemps (ancient sculpture) is also excellent with same ticket.'
      ],
      mustSee: [
        { name: 'Villa of Livia frescoes', artist: 'Roman', location: 'Second floor', note: 'Complete garden room, illusionistic painting' },
        { name: 'Boxer at Rest', artist: 'Greek', location: 'Ground floor', note: 'Hellenistic bronze masterpiece' },
        { name: 'Discus Thrower (Discobolus)', artist: 'Roman copy', location: 'Ground floor', note: 'Copy of Myron\'s famous athlete' },
        { name: 'Sleeping Hermaphroditus', artist: 'Roman', location: 'Ground floor', note: 'Provocative Hellenistic sculpture' },
        { name: 'Portrait collection', artist: 'Roman', location: 'First floor', note: 'Republican and Imperial portraits' }
      ]
    },
    faqs: [
      {
        question: 'What is Palazzo Massimo?',
        answer: 'Part of the National Roman Museum, specializing in ancient Roman art: sculpture, mosaics, frescoes, and coins. The frescoes from the Villa of Livia alone are worth the visit.'
      },
      {
        question: 'Is Palazzo Massimo worth visiting vs the Vatican?',
        answer: 'Yes, especially for Roman antiquities. The Vatican has ancient art but also Renaissance works. Palazzo Massimo focuses purely on Roman art with far fewer crowds. Do both if possible.'
      },
      {
        question: 'How does the National Roman Museum combined ticket work?',
        answer: 'The €12 ticket is valid for one week and covers Palazzo Massimo, Palazzo Altemps, and Baths of Diocletian. You can visit each site once within the week. Excellent value.'
      }
    ]
  },
  {
    slug: 'schloss-charlottenburg-berlin-germany',
    hoursOfOperation: {
      hours: {
        seasonal: {
          winter: {
            period: 'November - March',
            tuesday: { open: '10:00', close: '16:30' },
            wednesday: { open: '10:00', close: '16:30' },
            thursday: { open: '10:00', close: '16:30' },
            friday: { open: '10:00', close: '16:30' },
            saturday: { open: '10:00', close: '16:30' },
            sunday: { open: '10:00', close: '16:30' },
            monday: { closed: true }
          },
          summer: {
            period: 'April - October',
            tuesday: { open: '10:00', close: '17:30' },
            wednesday: { open: '10:00', close: '17:30' },
            thursday: { open: '10:00', close: '17:30' },
            friday: { open: '10:00', close: '17:30' },
            saturday: { open: '10:00', close: '17:30' },
            sunday: { open: '10:00', close: '17:30' },
            monday: { closed: true }
          }
        },
        lastAdmission: '30 minutes before closing'
      },
      admission: {
        oldPalace: 12,
        charlottenburgPlus: 19,
        charlottenburgPlusNote: 'Old Palace + New Wing + New Pavilion + Mausoleum',
        family: 45,
        familyNote: '2 adults + up to 4 children under 18',
        under7: 'free',
        reduced: 14,
        audioGuideIncluded: true
      },
      tickets: {
        onlineUrl: 'https://www.spsg.de/en/palaces-and-gardens/',
        onlineRecommended: true,
        onlineNote: 'Book time slot to avoid waiting',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['Weekend midday', 'Summer weekends'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours (with gardens)'
      },
      amenities: {
        cafe: true,
        cafeName: 'Kleine Orangerie (seasonal)',
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: true,
        parkingCost: 'Paid parking in Spandauer Damm lot',
        gardens: true,
        gardensNote: 'Free access to palace gardens'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, upper floors limited',
        elevator: 'Limited',
        audioGuide: true,
        audioGuideLanguages: ['German', 'English', 'French', 'Italian', 'Spanish', 'Russian', 'Polish'],
        audioGuideIncluded: true
      },
      tips: [
        'Berlin\'s largest and most important palace. Prussia\'s answer to Versailles.',
        'Book online for timed entry to avoid queues, especially weekends.',
        'The gardens are free. Worth a stroll even if you don\'t enter the palace.',
        'The charlottenburg+ ticket covers everything. Good value for thorough visitors.',
        'Watteau\'s Embarkation for Cythera is in the palace collection.',
        'Audio guide included in admission. Available in many languages.'
      ],
      mustSee: [
        { name: 'Golden Gallery', artist: 'Architecture', location: 'New Wing', note: 'Rococo ballroom, dazzling gilt stucco' },
        { name: 'Embarkation for Cythera', artist: 'Jean-Antoine Watteau', location: 'Old Palace', note: 'Major Rococo masterpiece' },
        { name: 'Porcelain Cabinet', artist: 'Decorative arts', location: 'Old Palace', note: 'Room covered in Chinese and Japanese porcelain' },
        { name: 'Palace Gardens', artist: 'Landscape', location: 'Outdoors', note: 'Baroque and English gardens, free access' },
        { name: 'Royal apartments', artist: 'Interior design', location: 'Throughout', note: 'Furnished Prussian royal chambers' }
      ]
    },
    faqs: [
      {
        question: 'Is Schloss Charlottenburg worth visiting?',
        answer: 'Yes, especially for those interested in Prussian history and Baroque/Rococo art. It\'s Berlin\'s largest palace with stunning interiors. The gardens alone are worth the trip.'
      },
      {
        question: 'How long to spend at Charlottenburg Palace?',
        answer: 'About 2 hours for the Old Palace, add another hour for the New Wing, plus time for gardens. With the full charlottenburg+ ticket and gardens, budget 3-4 hours.'
      },
      {
        question: 'Are the Charlottenburg Palace gardens free?',
        answer: 'Yes, the extensive Baroque and English gardens are free and open to the public. You can enjoy them without buying palace admission.'
      }
    ]
  },
  {
    slug: 'national-museum-gdansk',
    hoursOfOperation: {
      hours: {
        seasonal: {
          summer: {
            period: 'May 1 - September 30',
            tuesday: { open: '10:00', close: '17:00' },
            wednesday: { open: '10:00', close: '17:00' },
            thursday: { open: '10:00', close: '17:00' },
            friday: { open: '10:00', close: '17:00' },
            saturday: { open: '10:00', close: '17:00' },
            sunday: { open: '10:00', close: '17:00' },
            monday: { closed: true }
          },
          winter: {
            period: 'October 1 - April 30',
            tuesday: { open: '09:00', close: '16:00' },
            wednesday: { open: '09:00', close: '16:00' },
            thursday: { open: '09:00', close: '16:00' },
            friday: { open: '09:00', close: '16:00' },
            saturday: { open: '09:00', close: '16:00' },
            sunday: { open: '09:00', close: '16:00' },
            monday: { closed: true }
          }
        },
        exceptions: [
          { date: 'Christmas Eve', status: 'closed' },
          { date: 'Christmas Day', status: 'closed' },
          { date: 'New Year\'s Eve', status: 'closed' }
        ]
      },
      admission: {
        note: 'Check website for current prices',
        freeDay: 'Friday',
        freeDayNote: 'Expect queues on free Fridays'
      },
      tickets: {
        onlineUrl: 'https://www.mng.gda.pl/',
        onlineAvailable: true,
        walkUpAvailable: true,
        freeFridayNote: 'Tickets for free Fridays only available at museum'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Friday (free)', 'Sunday'],
        bestTimes: ['Opening', 'After 2pm'],
        worstTimes: ['Free Friday mornings'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Polish', 'English', 'German']
      },
      tips: [
        'Hans Memling\'s Last Judgment triptych is the star. Worth the visit alone.',
        'Housed in a former Gothic Franciscan monastery. Beautiful setting.',
        'Free admission every Friday, but expect queues.',
        'Seven branches around Gdańsk, but the main building has the Memling.',
        'Combines well with Gdańsk old town sightseeing.',
        'Winter hours are earlier (9am-4pm) than summer (10am-5pm).'
      ],
      mustSee: [
        { name: 'The Last Judgment', artist: 'Hans Memling', location: 'Main hall', note: 'Monumental triptych, captured by pirates en route to Florence' },
        { name: 'Gothic monastery building', artist: 'Architecture', location: 'Throughout', note: 'Late medieval Franciscan architecture' },
        { name: 'Dutch Golden Age paintings', artist: 'Various', location: 'European galleries', note: 'Connections to Gdańsk\'s trading past' },
        { name: 'Polish art', artist: 'Various', location: 'Polish galleries', note: 'From medieval to 20th century' },
        { name: 'Gdańsk furniture', artist: 'Various', location: 'Decorative arts', note: 'Historic Gdańsk craftsmanship' }
      ]
    },
    faqs: [
      {
        question: 'What is special about the Memling Last Judgment in Gdańsk?',
        answer: 'Hans Memling painted it in Bruges for Florence, but pirates captured the ship in 1473 and brought it to Gdańsk. It\'s been there ever since, one of Northern Renaissance painting\'s greatest works.'
      },
      {
        question: 'Is the National Museum in Gdańsk worth visiting?',
        answer: 'Yes, especially for the Memling triptych. The Gothic monastery setting is atmospheric, and it combines well with exploring Gdańsk\'s beautifully rebuilt old town.'
      },
      {
        question: 'When is free admission at the National Museum Gdańsk?',
        answer: 'Every Friday. Free Friday tickets must be obtained at the museum (not online), so expect queues. Other days require paid admission.'
      }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full visitor info for 10 museums (batch 8)...\n');

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
