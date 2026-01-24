const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 7 - 10 more museums with researched visitor info
const museums = [
  {
    slug: 'national-galleries-scotland',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '19:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        locations: {
          scottishNationalGallery: 'The Mound, Edinburgh EH2 2EL',
          modernOne: '73 Belford Road, Edinburgh EH4 3DR',
          modernTwo: '75 Belford Road, Edinburgh EH4 3DR'
        },
        exceptions: [
          { date: 'December 25-26', status: 'closed' },
          { date: 'January 1', status: 'opens at noon' }
        ]
      },
      admission: {
        permanent: 'Free',
        specialExhibitions: 'Ticketed, typically £14-19',
        note: 'Free admission to permanent collection at all three venues'
      },
      tickets: {
        onlineUrl: 'https://www.nationalgalleries.org/visit',
        reservationRequired: false,
        specialExhibitionNote: 'Book online for ticketed exhibitions',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Thursday evening'],
        worstTimes: ['Weekend midday', 'Festival season (August)'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['August (Edinburgh Festival)', 'December'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2 hours per venue'
      },
      amenities: {
        cafe: true,
        cafeName: 'Scottish Cafe & Restaurant (National)',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Castle Terrace car park'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        bslTours: 'Available on request'
      },
      tips: [
        'Three venues: the National on The Mound for Old Masters, Modern One and Two in Stockbridge for modern art.',
        'Thursday late opening until 7pm at the National is less crowded.',
        'The National has Scotland\'s finest collection: Raeburn, Ramsay, Velázquez, Titian, Vermeer.',
        'Free shuttle bus connects the National to Modern galleries.',
        'Modern One has Paolozzi sculptures and the Surrealist collection. Modern Two has Dada.',
        'August is Edinburgh Festival month. Expect much larger crowds.'
      ],
      mustSee: [
        { name: 'The Reverend Robert Walker Skating', artist: 'Henry Raeburn', location: 'Scottish National Gallery', note: 'The "Skating Minister," Scottish icon' },
        { name: 'Three Tahitians', artist: 'Paul Gauguin', location: 'Scottish National Gallery', note: 'Major Gauguin Post-Impressionist work' },
        { name: 'Christ in the House of Martha and Mary', artist: 'Johannes Vermeer', location: 'Scottish National Gallery', note: 'Only Vermeer in Scotland' },
        { name: 'Vulcan\'s Forge', artist: 'Eduardo Paolozzi', location: 'Modern One', note: 'Scottish pop art pioneer' },
        { name: 'Scottish art collection', artist: 'Various', location: 'Throughout', note: 'Ramsay, Wilkie, Peploe, Cadell' }
      ]
    },
    faqs: [
      {
        question: 'Are the National Galleries of Scotland free?',
        answer: 'Yes, permanent collections at all three venues (National, Modern One, Modern Two) are free. Only special ticketed exhibitions require payment, typically £14-19.'
      },
      {
        question: 'What is the difference between the National Gallery and Modern galleries in Edinburgh?',
        answer: 'The Scottish National Gallery on The Mound has Old Masters and Scottish art through the 19th century. Modern One and Two (on Belford Road) focus on modern and contemporary art. A free shuttle connects them.'
      },
      {
        question: 'Should I visit Edinburgh galleries during the Festival?',
        answer: 'The August Edinburgh Festival brings enormous crowds and higher accommodation prices. For a quieter museum experience, visit in spring or autumn. Winter is also quiet with dramatic Scottish light.'
      }
    ]
  },
  {
    slug: 'capitoline-museums',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:30', close: '19:30' },
          tuesday: { open: '09:30', close: '19:30' },
          wednesday: { open: '09:30', close: '19:30' },
          thursday: { open: '09:30', close: '19:30' },
          friday: { open: '09:30', close: '19:30' },
          saturday: { open: '09:30', close: '19:30' },
          sunday: { open: '09:30', close: '19:30' }
        },
        lastAdmission: '18:30',
        exceptions: [
          { date: 'December 24 & 31', status: '09:30-14:00' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 15,
        reduced: 9.50,
        romeResident: 10.50,
        under18: 'free',
        freeDay: 'First Sunday of month',
        wednesdayDiscount: '50% off last 2 hours on Wednesdays',
        romaPass: 'Included with Roma Pass'
      },
      tickets: {
        onlineUrl: 'https://www.museicapitolini.org/en/biglietti-e-prenotazioni',
        onlineRecommended: true,
        onlineFee: '€1 booking fee',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['First Sunday (free)', 'Saturday'],
        bestTimes: ['Opening', 'After 3pm when light is beautiful'],
        worstTimes: ['Free Sunday', 'Midday'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'October'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Terrazza Caffarelli (rooftop with view)',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'German', 'Spanish']
      },
      tips: [
        'The world\'s oldest public museum, founded 1471. On Michelangelo\'s designed Piazza del Campidoglio.',
        'The rooftop Terrazza Caffarelli has stunning views over Rome. Worth a coffee break.',
        'Underground tunnel connects the two palaces. Don\'t miss it.',
        'Wednesday afternoon 50% discount in final 2 hours is excellent value.',
        'The Marcus Aurelius statue in the courtyard is a copy. The original is inside.',
        'Less crowded than Vatican or Borghese but equally important for ancient Roman art.'
      ],
      mustSee: [
        { name: 'Capitoline Wolf', artist: 'Etruscan/Medieval', location: 'Palazzo dei Conservatori', note: 'Symbol of Rome, nursing Romulus and Remus' },
        { name: 'Marcus Aurelius (original)', artist: 'Roman', location: 'Palazzo dei Conservatori', note: 'Colossal gilded bronze equestrian statue' },
        { name: 'Dying Gaul', artist: 'Roman copy of Greek original', location: 'Palazzo Nuovo', note: 'Hellenistic masterpiece of pathos' },
        { name: 'Capitoline Venus', artist: 'Roman', location: 'Palazzo Nuovo', note: 'Modest Venus, one of antiquity\'s most famous statues' },
        { name: 'Pinacoteca Capitolina', artist: 'Caravaggio, Titian, Rubens', location: 'Palazzo dei Conservatori', note: 'Underrated painting gallery' }
      ]
    },
    faqs: [
      {
        question: 'Are the Capitoline Museums worth visiting?',
        answer: 'Yes. They\'re the world\'s oldest public museum (1471) and house Rome\'s finest ancient sculpture collection. The Dying Gaul, Capitoline Wolf, and Marcus Aurelius statue are unmissable. Less crowded than the Vatican.'
      },
      {
        question: 'How do the Capitoline Museums compare to the Vatican Museums?',
        answer: 'Different focus. The Capitoline specializes in ancient Roman sculpture and history. The Vatican has ancient art but also Renaissance frescoes (Sistine Chapel) and the Pinacoteca. Both are essential for Rome visitors.'
      },
      {
        question: 'Is there free admission at the Capitoline Museums?',
        answer: 'Yes, the first Sunday of each month is free for everyone. Wednesdays offer 50% off admission in the last two hours. Under 18 and disabled visitors with one companion always enter free.'
      }
    ]
  },
  {
    slug: 'ateneum',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        lastAdmission: '30 minutes before closing',
        exceptions: [
          { date: 'Midsummer Eve', status: 'closed' },
          { date: 'Christmas Eve', status: 'closed' },
          { date: 'Christmas Day', status: 'closed' }
        ]
      },
      admission: {
        adult: 21,
        adultAtDoor: 23,
        reduced: 13,
        under18: 'free',
        finnishMuseumCard: 'Included (€86/year)',
        currency: 'EUR',
        note: 'Online tickets €2 cheaper than door'
      },
      tickets: {
        onlineUrl: 'https://ateneum.fi/en/opening-hours-and-tickets/',
        onlineRecommended: true,
        onlineDiscount: '€2 cheaper online',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'Evening hours'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July (summer tourists)', 'December'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Ateneum Bistro',
        giftShop: true,
        coatCheck: true,
        coatCheckNote: 'Required for bags larger than A4',
        wifi: true,
        parking: false,
        nearbyParking: 'P-Eliel garage at Central Station'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['Finnish', 'Swedish', 'English']
      },
      tips: [
        'Finland\'s most important art museum, part of the Finnish National Gallery.',
        'Right next to Helsinki Central Station. Could not be more convenient.',
        'Late hours Tuesday-Friday until 8pm let you visit after other attractions.',
        'The Golden Age of Finnish art (Gallen-Kallela, Edelfelt) is the highlight.',
        'Good collection of international art too: Van Gogh, Cézanne, Modigliani.',
        'The Finnish Museum Card (€86/year) covers 350+ museums if you\'re staying longer.'
      ],
      mustSee: [
        { name: 'The Wounded Angel', artist: 'Hugo Simberg', location: 'Finnish galleries', note: 'Finland\'s most beloved painting, voted national favorite' },
        { name: 'Aino Myth Triptych', artist: 'Akseli Gallen-Kallela', location: 'Finnish galleries', note: 'Based on the Kalevala, Finnish national epic' },
        { name: 'Boy and Crow', artist: 'Akseli Gallen-Kallela', location: 'Finnish galleries', note: 'Striking Finnish Romanticism' },
        { name: 'Street in Auvers-sur-Oise', artist: 'Vincent van Gogh', location: 'International galleries', note: 'From Van Gogh\'s final months' },
        { name: 'Finnish Golden Age', artist: 'Edelfelt, Järnefelt, Schjerfbeck', location: 'Throughout', note: 'Late 19th-century Finnish masters' }
      ]
    },
    faqs: [
      {
        question: 'What is the Ateneum famous for?',
        answer: 'Finland\'s largest art collection, especially the Finnish Golden Age painters (1880s-1910s) who defined Finnish national identity. Hugo Simberg\'s The Wounded Angel is Finland\'s most beloved painting.'
      },
      {
        question: 'Is the Ateneum part of the Helsinki Card?',
        answer: 'Yes, the Helsinki Card includes Ateneum admission. The Finnish Museum Card (€86/year) also covers it plus 350 other museums nationwide if you\'re visiting Finland extensively.'
      },
      {
        question: 'How long to spend at the Ateneum?',
        answer: 'About 2-3 hours to see the highlights comfortably. The Finnish Golden Age galleries deserve the most time. International collection is smaller but quality.'
      }
    ]
  },
  {
    slug: 'cooper-hewitt-smithsonian-design-museum-new-york-c',
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
        garden: { open: '10:00', close: '16:30' },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        note: 'Pay what you wish daily 5-6pm',
        adult: 'Check website for current prices',
        under18: 'free',
        smithsonianNote: 'Unlike other Smithsonian museums, Cooper Hewitt charges admission'
      },
      tickets: {
        onlineUrl: 'https://www.cooperhewitt.org/visit/plan-your-visit/',
        onlineRecommended: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', '5-6pm (pay what you wish)'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['July', 'August', 'December'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        garden: true,
        gardenNote: 'Beautiful Carnegie mansion garden',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: false,
        interactivePen: 'Interactive pen explores the collection'
      },
      tips: [
        'The only US museum dedicated to historical and contemporary design.',
        'Housed in Andrew Carnegie\'s mansion. The building is as interesting as the collection.',
        'Pay what you wish admission 5-6pm daily makes it budget-friendly.',
        'The interactive pen lets you save designs and create your own. Very engaging.',
        'The garden is a peaceful Upper East Side oasis. Don\'t skip it.',
        'Near the Guggenheim and Met on Museum Mile. Easy to combine.'
      ],
      mustSee: [
        { name: 'Carnegie Mansion', artist: 'Babb, Cook & Willard architects', location: 'Throughout', note: 'Andrew Carnegie\'s 64-room home, now the museum' },
        { name: 'Wallcoverings collection', artist: 'Various', location: 'Rotating display', note: 'One of the world\'s largest, spanning 400 years' },
        { name: 'Interactive Immersion Room', artist: 'N/A', location: 'Second floor', note: 'Project wallpapers onto walls with the Pen' },
        { name: 'Product design collection', artist: 'Various', location: 'Throughout', note: 'From 18th-century silverware to Apple products' },
        { name: 'Arthur Ross Terrace and Garden', artist: 'Landscape', location: 'Outdoor', note: 'Rare green space in Manhattan' }
      ]
    },
    faqs: [
      {
        question: 'Is Cooper Hewitt free like other Smithsonian museums?',
        answer: 'No, unlike most Smithsonian museums, Cooper Hewitt charges admission. However, they offer pay-what-you-wish admission every day from 5-6pm.'
      },
      {
        question: 'What is the interactive pen at Cooper Hewitt?',
        answer: 'A digital stylus that lets you collect designs from the galleries, explore the database, and project wallpapers in the Immersion Room. It\'s included with admission and makes the visit more engaging.'
      },
      {
        question: 'Is Cooper Hewitt on Museum Mile?',
        answer: 'Yes, it\'s at 91st Street and Fifth Avenue, on NYC\'s Museum Mile near the Guggenheim (88th) and Metropolitan Museum (82nd). You can walk between all three.'
      }
    ]
  },
  {
    slug: 'princeton-university-art-museum-puam-princeton-nj-',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' },
          { date: 'July 4', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        note: 'Always free admission'
      },
      tickets: {
        onlineUrl: 'https://artmuseum.princeton.edu/visit',
        reservationRequired: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Reunions weekend (late May)', 'Commencement'],
        bestMonths: ['Summer when students away', 'Winter break'],
        worstMonths: ['October (fall campus visits)', 'May-June'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Mosaic Restaurant (in museum)',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Free campus parking (register online)',
        artBainbridge: 'Additional gallery at 158 Nassau Street (Fri-Sun)'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideNote: 'Free app'
      },
      tips: [
        'New David Adjaye-designed building opened October 2025. One of the most exciting new museum buildings.',
        'Free admission and free parking. A genuinely free cultural experience.',
        'Collection spans 117,000 works from antiquity to contemporary.',
        'Thursday evenings until 9pm offer extended hours.',
        'Walk the beautiful Princeton campus while you\'re here.',
        'The new building is designed as a "town square" with transparent galleries.'
      ],
      mustSee: [
        { name: 'New Adjaye building', artist: 'David Adjaye architect', location: 'Throughout', note: 'Opened 2025, stunning contemporary architecture' },
        { name: 'Ancient Mediterranean art', artist: 'Various', location: 'Ground floor', note: 'Greek, Roman, Egyptian collections' },
        { name: 'Pre-Columbian art', artist: 'Various', location: 'Americas galleries', note: 'Strong Mesoamerican collection' },
        { name: 'Asian art', artist: 'Various', location: 'Asian galleries', note: 'Chinese, Japanese, South Asian works' },
        { name: 'Photography collection', artist: 'Various', location: 'Rotating', note: '27,000+ photographs' }
      ]
    },
    faqs: [
      {
        question: 'Is Princeton Art Museum free?',
        answer: 'Yes, always free admission. Free parking is also available in campus garages (register your vehicle online). It\'s one of the best free museums in the Northeast.'
      },
      {
        question: 'Can anyone visit Princeton University Art Museum?',
        answer: 'Yes, it\'s open to the public, not just Princeton affiliates. The new 2025 building was designed specifically to welcome the broader community.'
      },
      {
        question: 'Is the new Princeton Art Museum building worth visiting?',
        answer: 'Yes. The David Adjaye-designed building opened October 2025 and is architecturally significant. The transparent design connects galleries to campus, and triple the previous display space allows more of the 117,000-work collection to be shown.'
      }
    ]
  },
  {
    slug: 'real-academia-de-bellas-artes-de-san-fernando-madr',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '15:00' },
          wednesday: { open: '10:00', close: '15:00' },
          thursday: { open: '10:00', close: '15:00' },
          friday: { open: '10:00', close: '15:00' },
          saturday: { open: '10:00', close: '15:00' },
          sunday: { open: '10:00', close: '15:00' }
        },
        lastAdmission: '14:30',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'January 6', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 24-25', status: 'closed' },
          { date: 'December 31', status: 'closed' }
        ]
      },
      admission: {
        adult: 8,
        reduced: 4,
        under18: 'free',
        freeDay: 'Wednesdays all day',
        note: 'Includes Goya\'s Gabinete at Calcografía Nacional'
      },
      tickets: {
        onlineUrl: 'https://www.realacademiabellasartessanfernando.com/',
        onlineAvailable: true,
        walkUpAvailable: true,
        refundable: 'Cancellation up to 24 hours before'
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Wednesday (free)', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 1pm'],
        worstTimes: ['Free Wednesday midday'],
        bestMonths: ['All year relatively quiet'],
        worstMonths: ['August (limited hours possible)'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['Spanish', 'English']
      },
      tips: [
        'Madrid\'s hidden gem. Steps from Puerta del Sol but most tourists miss it.',
        'Goya studied and taught here. Major collection of his works including self-portraits.',
        'The new Goya rooms (opened 2024) display the Disasters of War prints with original plates.',
        'Free on Wednesdays. Best value in Madrid.',
        'Founded 1752, trained Picasso, Dalí, and most great Spanish artists.',
        'Arcimboldo\'s Spring is here, along with Zurbarán, Rubens, and Bellini.'
      ],
      mustSee: [
        { name: 'Self-Portrait', artist: 'Francisco Goya', location: 'Goya galleries', note: 'Haunting late self-portrait' },
        { name: 'The Burial of the Sardine', artist: 'Francisco Goya', location: 'Goya galleries', note: 'Wild carnival scene' },
        { name: 'Spring', artist: 'Giuseppe Arcimboldo', location: 'Italian galleries', note: 'Famous composite portrait of flowers' },
        { name: 'Disasters of War prints', artist: 'Francisco Goya', location: 'Gabinete de Goya', note: 'Complete series with original copper plates' },
        { name: 'Susanna and the Elders', artist: 'Peter Paul Rubens', location: 'Flemish galleries', note: 'Major Rubens mythological work' }
      ]
    },
    faqs: [
      {
        question: 'Is the Real Academia de Bellas Artes worth visiting in Madrid?',
        answer: 'Yes, especially for Goya fans. It\'s Madrid\'s overlooked treasure, steps from Puerta del Sol. The Goya collection rivals the Prado, the building is beautiful, and it\'s free on Wednesdays.'
      },
      {
        question: 'What is the connection between Goya and the Real Academia?',
        answer: 'Goya studied at the academy, later became its director, and donated many works. The collection includes self-portraits, drawings, and the complete Disasters of War prints with the original copper plates.'
      },
      {
        question: 'Is the Real Academia de Bellas Artes free?',
        answer: 'Free every Wednesday. Other days €8 (reduced €4). Under 18 always free. Given the quality of the collection, it\'s a bargain even at full price.'
      }
    ]
  },
  {
    slug: 'casa-buonarroti-florence-italy',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '16:30' },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '16:30' },
          thursday: { open: '10:00', close: '16:30' },
          friday: { open: '10:00', close: '16:30' },
          saturday: { open: '10:00', close: '16:30' },
          sunday: { open: '10:00', close: '16:30' }
        },
        lastAdmission: '16:00',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'Easter Sunday', status: 'closed' },
          { date: 'August 15', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 9,
        reduced: 6.50,
        under6: 'free',
        santaCroceDiscount: 'Reduced admission with Santa Croce ticket (within 3 days)',
        firenzeCard: 'Included with Firenze Card'
      },
      tickets: {
        onlineUrl: 'https://www.casabuonarroti.it/en/visiting/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Occasionally busy when tour groups arrive'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['June', 'July', 'August'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1 hour'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        coatCheck: false,
        wifi: false,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, upper floors limited',
        elevator: false,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English']
      },
      tips: [
        'Two early Michelangelo marble reliefs here: Madonna of the Stairs and Battle of the Centaurs.',
        'Not Michelangelo\'s actual residence. Bought by his nephew, turned into a memorial.',
        'Combine with Santa Croce (Michelangelo\'s tomb) nearby for a Michelangelo-focused day.',
        'The drawing collection (200+ Michelangelo drawings) is spectacular but shown in rotation.',
        'Much quieter than the Accademia or Uffizi. You can actually contemplate the art.',
        'The Baroque decoration celebrates the Buonarroti family as much as Michelangelo.'
      ],
      mustSee: [
        { name: 'Madonna of the Stairs', artist: 'Michelangelo', location: 'Ground floor', note: 'Created age 15-16, shows Donatello influence' },
        { name: 'Battle of the Centaurs', artist: 'Michelangelo', location: 'Ground floor', note: 'Early masterpiece showing classical influence' },
        { name: 'Michelangelo drawings', artist: 'Michelangelo', location: 'Second floor (rotating)', note: '200+ drawings, architectural and figural studies' },
        { name: 'Gallery ceiling', artist: 'Various', location: 'Piano nobile', note: 'Baroque frescoes celebrating Michelangelo\'s life' },
        { name: 'Wooden model for San Lorenzo facade', artist: 'Michelangelo', location: 'Museum', note: 'Never built church facade design' }
      ]
    },
    faqs: [
      {
        question: 'Did Michelangelo live at Casa Buonarroti?',
        answer: 'Not this building specifically. Michelangelo bought several properties here but mainly lived in Rome. His nephew converted the house into a memorial museum in the 1600s.'
      },
      {
        question: 'Is Casa Buonarroti worth visiting?',
        answer: 'Yes, if you love Michelangelo. The two early marble reliefs (Madonna of the Stairs, Battle of the Centaurs) show his genius at 15-16. The drawing collection is exceptional. It\'s also blissfully uncrowded.'
      },
      {
        question: 'Should I visit Casa Buonarroti or the Accademia for Michelangelo?',
        answer: 'Both, but they\'re different. The Accademia has the David and unfinished Slaves. Casa Buonarroti has early reliefs and drawings in an intimate setting. For a full Michelangelo experience, do both plus Santa Croce (his tomb).'
      }
    ]
  },
  {
    slug: 'kunsthalle-bremen',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: 'December 24', status: 'closed' },
          { date: 'December 31', status: '10:00-15:00' },
          { date: 'January 1', status: '12:00-18:00' }
        ]
      },
      admission: {
        adult: 12,
        reduced: 6,
        under19: 'free',
        specialExhibitions: 'May be higher during special exhibitions',
        note: 'Free audio guide via smartphone app'
      },
      tickets: {
        onlineUrl: 'https://www.kunsthalle-bremen.de/en/plan-your-visit/',
        onlineAvailable: true,
        onlineNote: 'No booking fee',
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded', 'Wednesday evening'],
        worstTimes: ['Weekend afternoon'],
        bestMonths: ['All year relatively quiet'],
        worstMonths: ['Christmas market season (December)'],
        avgVisitDuration: '2-2.5 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Parkhaus Mitte nearby'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: true,
        audioGuideNote: 'Free via artsurfer.de app',
        audioGuideLanguages: ['German', 'English']
      },
      tips: [
        'One of Germany\'s major art museums, often overlooked for Berlin and Munich.',
        'Wednesday late opening until 9pm is less crowded and atmospheric.',
        'Strong collection spanning 600 years: Dürer, Monet, Beckmann, Paula Modersohn-Becker.',
        'Free audio guide via smartphone (bring headphones).',
        'Located on Bremen\'s Culture Mile near the old town and Schnoor quarter.',
        'The Worpswede artists colony collection (Modersohn-Becker, Vogeler) is particularly strong.'
      ],
      mustSee: [
        { name: 'Paula Modersohn-Becker collection', artist: 'Paula Modersohn-Becker', location: 'Modern galleries', note: 'Major collection of this Expressionist pioneer' },
        { name: 'Max Beckmann works', artist: 'Max Beckmann', location: 'Modern galleries', note: 'Strong German Expressionist holdings' },
        { name: 'Monet landscapes', artist: 'Claude Monet', location: 'Impressionist gallery', note: 'Quality French Impressionism' },
        { name: 'Old Masters', artist: 'Dürer, Cranach, Rubens', location: 'Historic galleries', note: 'German and Flemish Renaissance' },
        { name: 'Worpswede artists', artist: 'Various', location: 'Regional galleries', note: 'Works from the nearby artist colony' }
      ]
    },
    faqs: [
      {
        question: 'Is Kunsthalle Bremen worth a special trip?',
        answer: 'If you\'re interested in German Expressionism and the Worpswede artists colony, yes. Paula Modersohn-Becker and Max Beckmann collections are exceptional. Bremen itself is a charming city often skipped by tourists.'
      },
      {
        question: 'What is Worpswede?',
        answer: 'An artists\' colony 20km from Bremen founded in the 1880s. Paula Modersohn-Becker, Heinrich Vogeler, and others worked there. Kunsthalle Bremen has major holdings from this movement.'
      },
      {
        question: 'Is there free admission at Kunsthalle Bremen?',
        answer: 'Free for under 19. No free days for adults, but €12 is reasonable. Wednesday evening late opening until 9pm offers more relaxed viewing.'
      }
    ]
  },
  {
    slug: 'fine-arts-museums-of-san-francisco-san-francisco-c',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:30', close: '17:15' },
          wednesday: { open: '09:30', close: '17:15' },
          thursday: { open: '09:30', close: '17:15' },
          friday: { open: '09:30', close: '17:15' },
          saturday: { open: '09:30', close: '17:15' },
          sunday: { open: '09:30', close: '17:15' }
        },
        locations: {
          deYoung: '50 Hagiwara Tea Garden Dr, Golden Gate Park',
          legionOfHonor: '100 34th Avenue, Lincoln Park'
        },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        note: 'Check website for current prices',
        under17: 'free',
        freeDay: 'First Tuesday of month',
        freeSaturday: 'Free Saturdays for Bay Area residents (9 counties)',
        combinedTicket: 'Same-day ticket valid at both museums'
      },
      tickets: {
        onlineUrl: 'https://www.famsf.org/visit',
        onlineRecommended: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday (free)', 'Sunday'],
        bestTimes: ['Opening at 9:30am', 'After 3pm'],
        worstTimes: ['Free Saturdays', 'First Tuesday'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['June', 'July', 'August'],
        avgVisitDuration: '2-3 hours per museum',
        recommendedDuration: '2.5 hours each'
      },
      amenities: {
        cafe: true,
        cafeName: 'de Young Café, Legion of Honor Café',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Underground garage at de Young'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English']
      },
      tips: [
        'Two museums in one organization. Your ticket includes same-day entry to both.',
        'De Young is in Golden Gate Park (American art, textiles, Oceanic). Legion of Honor is in Lincoln Park (European Old Masters).',
        'Free Saturdays for Bay Area residents is excellent but crowded. Go early.',
        'De Young\'s Hamon Tower observation deck is free and doesn\'t require museum entry.',
        'Legion of Honor building replicates the Palais de la Légion d\'Honneur in Paris.',
        'First Tuesday free for everyone, but expect crowds.'
      ],
      mustSee: [
        { name: 'Hamon Tower', artist: 'Herzog & de Meuron architects', location: 'de Young', note: 'Free 360° views of San Francisco' },
        { name: 'American art collection', artist: 'Various', location: 'de Young', note: 'Colonial to contemporary American painting' },
        { name: 'The Thinker', artist: 'Auguste Rodin', location: 'Legion of Honor', note: 'Bronze cast in the Court of Honor' },
        { name: 'European paintings', artist: 'Rembrandt, Monet, El Greco', location: 'Legion of Honor', note: 'Old Masters and Impressionists' },
        { name: 'Oceanic and African art', artist: 'Various', location: 'de Young', note: 'Strong non-Western collections' }
      ]
    },
    faqs: [
      {
        question: 'What is the difference between de Young and Legion of Honor?',
        answer: 'De Young focuses on American art, textiles, and Oceanic/African collections (in Golden Gate Park). Legion of Honor specializes in European Old Masters (in Lincoln Park). One ticket covers both same-day.'
      },
      {
        question: 'Is the Fine Arts Museums of San Francisco free?',
        answer: 'Free on first Tuesdays for everyone. Free every Saturday for Bay Area residents (9 counties). Under 17 always free. Otherwise, ticketed admission applies.'
      },
      {
        question: 'Which San Francisco art museum should I visit?',
        answer: 'For European art: Legion of Honor. For American and world cultures: de Young. The de Young\'s observation tower is free and offers the best city views. SFMOMA downtown is best for modern art.'
      }
    ]
  },
  {
    slug: 'musee-national-fernand-leger-biot-france',
    hoursOfOperation: {
      hours: {
        seasonal: {
          winter: {
            period: 'November 1 - April 30',
            tuesday: { open: '10:00', close: '12:00', reopens: '13:30', closes: '17:00' },
            wednesday: { open: '10:00', close: '12:00', reopens: '13:30', closes: '17:00' },
            thursday: { open: '10:00', close: '12:00', reopens: '13:30', closes: '17:00' },
            friday: { open: '10:00', close: '12:00', reopens: '13:30', closes: '17:00' },
            saturday: { open: '10:00', close: '12:00', reopens: '13:30', closes: '17:00' },
            sunday: { open: '10:00', close: '12:00', reopens: '13:30', closes: '17:00' },
            monday: { closed: true },
            note: 'Closed for lunch 12pm-1:30pm'
          },
          summer: {
            period: 'May 2 - October 31',
            tuesday: { open: '10:00', close: '18:00' },
            wednesday: { open: '10:00', close: '18:00' },
            thursday: { open: '10:00', close: '18:00' },
            friday: { open: '10:00', close: '18:00' },
            saturday: { open: '10:00', close: '18:00' },
            sunday: { open: '10:00', close: '18:00' },
            monday: { closed: true }
          }
        },
        lastAdmission: '30 minutes before closing',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 8,
        reduced: 6,
        under26EU: 'free',
        under18: 'free',
        freeDay: 'First Sunday of month'
      },
      tickets: {
        onlineUrl: 'https://musees-nationaux-alpesmaritimes.fr/fleger/en/',
        onlineAvailable: true,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Sunday', 'First Sunday (free)'],
        bestTimes: ['Opening', 'After lunch reopen in winter'],
        worstTimes: ['Midday in winter (closed for lunch)'],
        bestMonths: ['May', 'June', 'September'],
        worstMonths: ['August (Riviera peak)', 'Winter (limited hours)'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        garden: true,
        gardenNote: 'Sculpture garden with monumental mosaics',
        parking: true,
        parkingCost: 'Free'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English']
      },
      tips: [
        'Purpose-built museum for Léger\'s work, designed by his wife and collaborator Nadia Léger.',
        'The exterior mosaics are spectacular. Don\'t miss the sculpture garden.',
        'Winter hours include a lunch closure (12-1:30pm). Plan around it.',
        'Easy day trip from Nice or Antibes. Biot itself is a charming glass-blowing village.',
        'One of three national Riviera museums (with Chagall in Nice and Picasso in Vallauris).',
        'Free for under 26 (EU) and first Sunday of month.'
      ],
      mustSee: [
        { name: 'Exterior mosaics', artist: 'Fernand Léger', location: 'Building facade', note: 'Monumental ceramic mosaics, museum landmark' },
        { name: 'The Builders', artist: 'Fernand Léger', location: 'Main galleries', note: 'Major late series celebrating workers' },
        { name: 'The Great Parade', artist: 'Fernand Léger', location: 'Main galleries', note: 'Circus theme, bold colors' },
        { name: 'Sculpture garden', artist: 'Various', location: 'Outdoors', note: 'Ceramics and mosaics in Mediterranean garden' },
        { name: 'Early Cubist works', artist: 'Fernand Léger', location: 'Chronological galleries', note: 'Shows evolution from Cubism to Tubism' }
      ]
    },
    faqs: [
      {
        question: 'What is Tubism?',
        answer: 'Léger\'s personal variant of Cubism using cylindrical, tubular forms rather than the angular planes of Picasso and Braque. You can see this evolution clearly in the museum\'s chronological display.'
      },
      {
        question: 'Is the Léger Museum worth visiting on the French Riviera?',
        answer: 'Yes, for modern art fans. The building itself is a work of art with stunning exterior mosaics. Combined with the Chagall Museum in Nice and Picasso in Vallauris, you have a great Riviera art circuit.'
      },
      {
        question: 'How do I get to the Léger Museum in Biot?',
        answer: 'By car: A8 motorway, exit Villeneuve-Loubet. By train: Biot station. By bus: Envibus lines 10 and 21 stop at the museum. Nice airport is 15km away.'
      }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full visitor info for 10 museums (batch 7)...\n');

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
