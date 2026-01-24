const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumData = [
  {
    slug: 'national-gallery-of-canada',
    name: 'National Gallery of Canada',
    websiteUrl: 'https://www.gallery.ca/',
    ticketUrl: 'https://www.gallery.ca/visit/admission',
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Extended hours on Thursdays until 8pm. Free admission on Thursdays from 5pm to 8pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 18,
        student: 12,
        child: 0,
        childMaxAge: 11,
        currency: 'CAD',
        notes: 'Free admission for children 11 and under. Free Thursday evenings 5pm-8pm.',
        freeDay: 'Thursday evenings (5pm-8pm)',
        memberFree: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Weekday mornings or Thursday evenings',
        peakSeason: 'July-August (summer tourism)',
        notes: 'Thursday evenings can be busier due to free admission'
      },
      tips: [
        'Visit Thursday evenings for free admission from 5pm to 8pm',
        'Don\'t miss the iconic spider sculpture "Maman" by Louise Bourgeois outside',
        'The Canadian and Indigenous galleries offer unique works not found elsewhere',
        'The building itself, designed by Moshe Safdie, is architecturally significant'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: '1-2 days',
        notes: 'Tickets available at the door. Online booking available for convenience.'
      }
    },
    faqs: [
      {
        question: 'What are the National Gallery of Canada hours?',
        answer: 'The National Gallery of Canada is open Tuesday through Sunday from 10am to 5pm, with extended hours until 8pm on Thursdays. The museum is closed on Mondays.'
      },
      {
        question: 'How much are National Gallery of Canada tickets?',
        answer: 'Adult admission is $20 CAD, seniors pay $18, and students pay $12. Children 11 and under enter free. Thursday evenings from 5pm to 8pm offer free admission for everyone.'
      },
      {
        question: 'What is the best time to visit the National Gallery of Canada?',
        answer: 'Weekday mornings offer the quietest experience. Thursday evenings are popular due to free admission but provide a lively atmosphere. Avoid weekends during summer tourist season.'
      },
      {
        question: 'What art is at the National Gallery of Canada?',
        answer: 'The museum houses the most comprehensive collection of Canadian art, including Indigenous works, plus significant European and American pieces. Highlights include works by the Group of Seven and Emily Carr.'
      }
    ]
  },
  {
    slug: 'dallas-museum-of-art',
    name: 'Dallas Museum of Art',
    websiteUrl: 'https://dma.org/',
    ticketUrl: 'https://dma.org/visit',
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
        notes: 'General admission is always FREE. Special exhibitions may have separate fees.',
        freeDay: 'Every day (general admission)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Thursday', 'Saturday'],
        bestTime: 'Weekday mornings right at opening',
        peakSeason: 'Spring break and summer months',
        notes: 'Thursday Late Nights draw larger crowds due to special events'
      },
      tips: [
        'General admission is always free, making it accessible for multiple visits',
        'Thursday Late Nights until 9pm feature live music, tours, and special events',
        'The Arts of the Americas and Wendy and Emery Reves Collection are highlights',
        'The museum connects to the Dallas Arts District via sculpture garden'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: null,
        notes: 'No tickets needed for general admission. Special exhibitions may require timed tickets.'
      }
    },
    faqs: [
      {
        question: 'What are the Dallas Museum of Art hours?',
        answer: 'The DMA is open Tuesday through Sunday from 11am to 5pm, with extended hours until 9pm on Thursdays for Late Night programming. The museum is closed on Mondays.'
      },
      {
        question: 'Is the Dallas Museum of Art free?',
        answer: 'Yes, general admission to the Dallas Museum of Art is always free. Some special exhibitions may have separate admission fees, but the permanent collection is free to visit.'
      },
      {
        question: 'What is the best time to visit the Dallas Museum of Art?',
        answer: 'Weekday mornings, especially Tuesday through Wednesday, offer the quietest experience. Thursday Late Nights are popular for the social atmosphere but expect larger crowds.'
      },
      {
        question: 'What art is at the Dallas Museum of Art?',
        answer: 'The DMA spans 5,000 years of art history with over 24,000 works. Highlights include pre-Columbian and African art, Impressionist paintings, and contemporary works by Pollock and Rothko.'
      }
    ]
  },
  {
    slug: 'smithsonian-american-art-museum',
    name: 'Smithsonian American Art Museum',
    websiteUrl: 'https://americanart.si.edu/',
    ticketUrl: 'https://americanart.si.edu/visit',
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
        notes: 'Admission is always FREE. Part of the Smithsonian Institution.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Late afternoon on weekdays',
        peakSeason: 'Spring (cherry blossom season) and summer',
        notes: 'Less crowded than other Smithsonian museums on the National Mall'
      },
      tips: [
        'Admission is always free as part of the Smithsonian Institution',
        'The building houses both SAAM and the National Portrait Gallery, two museums in one visit',
        'The enclosed Kogod Courtyard is a stunning architectural feature with a glass canopy',
        'Don\'t miss the Luce Foundation Center, a visible storage facility with thousands of artworks'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: null,
        notes: 'No tickets or reservations needed. Just walk in during open hours.'
      }
    },
    faqs: [
      {
        question: 'What are the Smithsonian American Art Museum hours?',
        answer: 'The museum is open daily from 11:30am to 7pm, including most holidays. It is only closed on Christmas Day. The late opening time allows for afternoon and evening visits.'
      },
      {
        question: 'Is the Smithsonian American Art Museum free?',
        answer: 'Yes, admission is completely free. As part of the Smithsonian Institution, funded by the federal government, all visitors can enjoy the collection at no cost.'
      },
      {
        question: 'What is the best time to visit the Smithsonian American Art Museum?',
        answer: 'Late afternoon on weekdays offers the quietest experience. The museum is less crowded than Mall museums. Avoid spring weekends during cherry blossom season when DC is busiest.'
      },
      {
        question: 'What art is at the Smithsonian American Art Museum?',
        answer: 'SAAM holds the nation\'s largest collection of American art, spanning colonial times to today. Highlights include works by Winslow Homer, Georgia O\'Keeffe, Edward Hopper, and Nam June Paik\'s video art.'
      }
    ]
  },
  {
    slug: 'alte-nationalgalerie',
    name: 'Alte Nationalgalerie',
    websiteUrl: 'https://www.smb.museum/en/museums-institutions/alte-nationalgalerie/home/',
    ticketUrl: 'https://www.smb.museum/en/museums-institutions/alte-nationalgalerie/visit/',
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
        notes: 'Extended hours on Thursdays until 8pm. Part of Berlin\'s Museum Island UNESCO World Heritage Site.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 12,
        senior: 6,
        student: 6,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Museum Island day pass available for €22 (all five museums). Free for under 18.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Weekday mornings or Thursday evenings',
        peakSeason: 'Summer months and German school holidays',
        notes: 'Less crowded than Pergamon Museum on the same island'
      },
      tips: [
        'Consider the Museum Island day pass (€22) if visiting multiple museums',
        'Thursday evenings offer extended hours until 8pm',
        'The building itself is a 19th-century architectural masterpiece',
        'Start at the top floor and work down for chronological viewing'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: true,
        peakSeasonAdvanceBooking: '2-3 days',
        notes: 'Online booking recommended but walk-ups usually accommodated.'
      }
    },
    faqs: [
      {
        question: 'What are the Alte Nationalgalerie hours?',
        answer: 'The museum is open Tuesday through Sunday from 10am to 6pm, with extended hours until 8pm on Thursdays. It is closed on Mondays and some holidays including Christmas Eve and New Year\'s Eve.'
      },
      {
        question: 'How much are Alte Nationalgalerie tickets?',
        answer: 'Adult admission is €12, while students and seniors pay €6. Visitors under 18 enter free. The Museum Island day pass for €22 includes all five museums on the island.'
      },
      {
        question: 'What is the best time to visit the Alte Nationalgalerie?',
        answer: 'Weekday mornings offer the quietest experience. Thursday evenings provide extended hours with fewer crowds than weekends. It\'s less busy than neighboring Pergamon Museum.'
      },
      {
        question: 'What art is at the Alte Nationalgalerie?',
        answer: 'The museum showcases 19th-century art including German Romanticism, French Impressionism, and early Modernism. Highlights include Caspar David Friedrich\'s landscapes and works by Monet, Renoir, and Cézanne.'
      }
    ]
  },
  {
    slug: 'detroit-institute-of-arts',
    name: 'Detroit Institute of Arts',
    websiteUrl: 'https://dia.org/',
    ticketUrl: 'https://dia.org/visit',
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
        notes: 'Extended hours on Thursdays until 8pm. Free admission for residents of Wayne, Oakland, and Macomb counties.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 18,
        senior: 10,
        student: 8,
        child: 0,
        childMaxAge: 5,
        currency: 'USD',
        notes: 'Free for residents of Wayne, Oakland, and Macomb counties with valid ID. Children 5 and under always free.',
        freeDay: 'Every day for tri-county Michigan residents',
        memberFree: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Weekday mornings',
        peakSeason: 'Summer and school holidays',
        notes: 'Generally less crowded than coastal museums'
      },
      tips: [
        'Tri-county Michigan residents get free admission with valid ID',
        'Diego Rivera\'s Detroit Industry Murals in Rivera Court are a must-see',
        'The museum has an excellent collection of armor and African art',
        'Thursday evenings until 8pm offer a quieter alternative to weekends'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: null,
        notes: 'Tickets available at the door. No reservations needed.'
      }
    },
    faqs: [
      {
        question: 'What are the Detroit Institute of Arts hours?',
        answer: 'The DIA is open Tuesday through Friday from 9am to 4pm (until 8pm on Thursdays), and Saturday-Sunday from 10am to 5pm. The museum is closed on Mondays.'
      },
      {
        question: 'Is the Detroit Institute of Arts free?',
        answer: 'Admission is free for residents of Wayne, Oakland, and Macomb counties in Michigan with valid ID. Other visitors pay $18 for adults, $10 for seniors, and $8 for students.'
      },
      {
        question: 'What is the best time to visit the Detroit Institute of Arts?',
        answer: 'Weekday mornings offer the most peaceful experience. Thursday evenings provide extended hours with typically lighter crowds than weekends. The museum is generally less busy than major coastal institutions.'
      },
      {
        question: 'What art is at the Detroit Institute of Arts?',
        answer: 'The DIA houses over 65,000 works spanning ancient Egypt to contemporary art. The crown jewel is Diego Rivera\'s Detroit Industry Murals. The museum also excels in American, European, and African collections.'
      }
    ]
  },
  {
    slug: 'palace-of-versailles',
    name: 'Palace of Versailles',
    websiteUrl: 'https://www.chateauversailles.fr/en',
    ticketUrl: 'https://www.chateauversailles.fr/en/plan-your-visit/tickets-and-rates',
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
            tuesday: { open: '09:00', close: '18:30' },
            wednesday: { open: '09:00', close: '18:30' },
            thursday: { open: '09:00', close: '18:30' },
            friday: { open: '09:00', close: '18:30' },
            saturday: { open: '09:00', close: '18:30' },
            sunday: { open: '09:00', close: '18:30' }
          },
          winter: {
            period: 'November 1 - March 31',
            tuesday: { open: '09:00', close: '17:30' },
            wednesday: { open: '09:00', close: '17:30' },
            thursday: { open: '09:00', close: '17:30' },
            friday: { open: '09:00', close: '17:30' },
            saturday: { open: '09:00', close: '17:30' },
            sunday: { open: '09:00', close: '17:30' }
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Gardens and park open from 8am. Last admission 1 hour before closing. Closed Mondays except for gardens.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 21,
        senior: 21,
        student: 21,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Palace only €21, Passport (palace + gardens + exhibitions) €28.50 on fountain show days. EU residents under 26 free.',
        freeDay: 'First Sunday of each month (November-March)',
        memberFree: true
      },
      crowdData: {
        overall: 'Very Crowded',
        bestDays: ['Wednesday', 'Thursday'],
        worstDays: ['Tuesday', 'Saturday', 'Sunday'],
        bestTime: 'Arrive right at 9am opening or after 3pm',
        peakSeason: 'Summer (June-August) and French school holidays',
        notes: 'Tuesdays are extremely crowded as other Paris museums are closed. Expect long lines year-round.'
      },
      tips: [
        'Book timed-entry tickets online in advance, especially in summer',
        'Arrive early (9am) to beat the crowds at the Hall of Mirrors',
        'Avoid Tuesdays when Paris museum-goers flood Versailles',
        'Consider entering through the gardens and working backwards',
        'The Musical Fountains show (weekends, April-October) is worth the extra cost'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: true,
        peakSeasonAdvanceBooking: '1-2 weeks',
        notes: 'Online booking strongly recommended. Timed entry helps manage crowds. Queues can exceed 2 hours in peak season.'
      }
    },
    faqs: [
      {
        question: 'What are the Palace of Versailles hours?',
        answer: 'The Palace is open Tuesday through Sunday from 9am to 6:30pm (April-October) or 5:30pm (November-March). It is closed on Mondays. Gardens open at 8am and stay open later than the palace.'
      },
      {
        question: 'How much are Palace of Versailles tickets?',
        answer: 'Palace admission is €21, while the Passport ticket including gardens and exhibitions costs €28.50 on fountain show days. EU residents under 26 and all visitors under 18 enter free.'
      },
      {
        question: 'What is the best time to visit the Palace of Versailles?',
        answer: 'Arrive right at 9am opening or after 3pm to avoid the worst crowds. Visit Wednesday or Thursday if possible. Avoid Tuesdays when other Paris museums are closed, driving crowds to Versailles.'
      },
      {
        question: 'What art is at the Palace of Versailles?',
        answer: 'Versailles showcases French royal grandeur with the Hall of Mirrors, royal apartments decorated with paintings by Le Brun, and extensive formal gardens by Le Nôtre. The palace contains thousands of paintings and decorative arts.'
      }
    ]
  },
  {
    slug: 'musee-conde',
    name: 'Musée Condé',
    websiteUrl: 'https://www.domainedechantilly.com/en/',
    ticketUrl: 'https://www.domainedechantilly.com/en/practical-information/prices/',
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
            notes: 'Open daily except Tuesdays, 10am-6pm'
          },
          winter: {
            period: 'Early November - late March',
            notes: 'Reduced hours, check website. Park may have different hours.'
          }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Tuesdays. The Château and park have separate hours. Located in Chantilly, 25 minutes from Paris by train.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 20,
        senior: 20,
        student: 15,
        child: 10,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Full estate ticket includes château, museum, park, and stables. Children 7-17 pay reduced rate, under 7 free.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Monday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Weekday mornings',
        peakSeason: 'Summer and French school holidays',
        notes: 'Much less crowded than Versailles despite comparable art collection'
      },
      tips: [
        'The collection rivals the Louvre for Renaissance art but with far fewer crowds',
        'Take the train from Paris Gare du Nord to Chantilly-Gouvieux (25 minutes)',
        'Don\'t miss the Très Riches Heures du Duc de Berry manuscript (facsimile displayed)',
        'The estate includes beautiful gardens and the Great Stables equestrian museum'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: null,
        notes: 'Tickets available at the door. Online booking available for convenience.'
      }
    },
    faqs: [
      {
        question: 'What are the Musée Condé hours?',
        answer: 'The museum is open daily except Tuesdays from 10am to 6pm during high season (late March to early November). Winter hours are reduced. The park may have different hours from the château.'
      },
      {
        question: 'How much are Musée Condé tickets?',
        answer: 'Full estate admission is €20 for adults and €15 for students. Children 7-17 pay €10, and those under 7 enter free. The ticket includes the château, art museum, gardens, and stables.'
      },
      {
        question: 'What is the best time to visit the Musée Condé?',
        answer: 'Weekday mornings offer the most peaceful experience. The Musée Condé sees far fewer visitors than Versailles despite housing France\'s second most important art collection after the Louvre.'
      },
      {
        question: 'What art is at the Musée Condé?',
        answer: 'The museum holds France\'s second largest collection of Old Master paintings, including works by Raphael, Botticelli, and Poussin. The collection was assembled by the Duke of Aumale in the 19th century.'
      }
    ]
  },
  {
    slug: 'national-palace-museum',
    name: 'National Palace Museum',
    websiteUrl: 'https://www.npm.gov.tw/en/',
    ticketUrl: 'https://www.npm.gov.tw/en/Article.aspx?sNo=02007001',
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
        notes: 'Open daily year-round including holidays. Extended evening hours on Fridays and Saturdays until 9pm.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 350,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'TWD',
        notes: 'NT$350 for adults. Free for those under 18, over 65, and students with valid ID. Free for everyone after 5pm on Fridays and Saturdays.',
        freeDay: 'Friday and Saturday evenings (after 5pm)',
        memberFree: true
      },
      crowdData: {
        overall: 'Very Crowded',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Weekday mornings at opening or Friday/Saturday evenings',
        peakSeason: 'Chinese New Year, summer, and Taiwanese holidays',
        notes: 'Tour groups dominate midday hours. Evening visits much calmer.'
      },
      tips: [
        'Visit Friday or Saturday evening for free admission and smaller crowds',
        'The Jadeite Cabbage and Meat-shaped Stone are the most popular exhibits',
        'Audio guides available in multiple languages, highly recommended',
        'Book tickets online during Chinese New Year and major holidays'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: true,
        peakSeasonAdvanceBooking: '3-5 days',
        notes: 'Online booking recommended for major holidays. Timed entry during peak periods.'
      }
    },
    faqs: [
      {
        question: 'What are the National Palace Museum hours?',
        answer: 'The museum is open daily from 9am to 5pm, with extended hours until 9pm on Fridays and Saturdays. It remains open year-round including national holidays.'
      },
      {
        question: 'How much are National Palace Museum tickets?',
        answer: 'Adult admission is NT$350 (approximately $11 USD). Visitors under 18, over 65, and students with valid ID enter free. Friday and Saturday evenings after 5pm are free for everyone.'
      },
      {
        question: 'What is the best time to visit the National Palace Museum?',
        answer: 'Visit weekday mornings at opening or Friday/Saturday evenings for the smallest crowds and free evening admission. Avoid midday when tour groups fill the galleries.'
      },
      {
        question: 'What art is at the National Palace Museum?',
        answer: 'The museum houses one of the world\'s largest collections of Chinese art and artifacts, spanning 8,000 years. Famous pieces include the Jadeite Cabbage, Meat-shaped Stone, and imperial ceramics from multiple dynasties.'
      }
    ]
  },
  {
    slug: 'galleria-doria-pamphilj',
    name: 'Galleria Doria Pamphilj',
    websiteUrl: 'https://www.doriapamphilj.it/roma/en/',
    ticketUrl: 'https://www.doriapamphilj.it/roma/en/info/',
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Closed Wednesdays. Last admission 1 hour before closing. Still a private residence of the Doria Pamphilj family.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 16,
        senior: 12,
        student: 10,
        child: 0,
        childMaxAge: 6,
        currency: 'EUR',
        notes: 'Audio guide included in admission (highly recommended for context). Children 6 and under free.',
        freeDay: null,
        memberFree: false
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Any time on weekdays',
        peakSeason: 'Spring and fall tourism seasons',
        notes: 'One of Rome\'s hidden gems with consistently light crowds'
      },
      tips: [
        'Use the included audio guide narrated by family member Prince Jonathan Doria Pamphilj',
        'Velázquez\'s portrait of Pope Innocent X is considered one of the greatest portraits ever painted',
        'The gallery halls retain their original 18th-century arrangement',
        'Much quieter than Vatican Museums or Borghese Gallery'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: null,
        notes: 'No reservations needed. Simply arrive during opening hours.'
      }
    },
    faqs: [
      {
        question: 'What are the Galleria Doria Pamphilj hours?',
        answer: 'The gallery is open daily except Wednesdays from 9am to 7pm, with last admission at 6pm. It is closed on New Year\'s Day and Christmas. The palace remains a private family residence.'
      },
      {
        question: 'How much are Galleria Doria Pamphilj tickets?',
        answer: 'Adult admission is €16, seniors pay €12, and students €10. Children under 6 enter free. The ticket includes an excellent audio guide narrated by Prince Jonathan Doria Pamphilj.'
      },
      {
        question: 'What is the best time to visit the Galleria Doria Pamphilj?',
        answer: 'Any weekday offers a peaceful experience as this remains one of Rome\'s hidden gems. It never gets as crowded as major Roman museums, making it ideal for leisurely viewing.'
      },
      {
        question: 'What art is at the Galleria Doria Pamphilj?',
        answer: 'The collection includes masterpieces by Velázquez (his famous Pope Innocent X portrait), Caravaggio, Titian, Raphael, and Bernini. The palatial galleries display paintings as they were arranged in the 18th century.'
      }
    ]
  },
  {
    slug: 'walker-art-gallery',
    name: 'Walker Art Gallery',
    websiteUrl: 'https://www.liverpoolmuseums.org.uk/walker-art-gallery',
    ticketUrl: 'https://www.liverpoolmuseums.org.uk/walker-art-gallery/plan-your-visit',
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
        notes: 'Open daily including most holidays. Part of National Museums Liverpool.',
        lastUpdated: '2026-01-24'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 17,
        currency: 'GBP',
        notes: 'Admission is FREE. Special exhibitions may have separate charges. Donations welcome.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTime: 'Weekday mornings',
        peakSeason: 'Summer and school holidays',
        notes: 'Consistently quiet, one of the best art galleries to visit without crowds'
      },
      tips: [
        'Admission is completely free, making repeat visits easy',
        'The Pre-Raphaelite collection is one of the finest anywhere',
        'Don\'t miss works by Rembrandt, Rubens, and local favorite George Stubbs',
        'The building is a short walk from Liverpool Lime Street station'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        reservationRecommended: false,
        peakSeasonAdvanceBooking: null,
        notes: 'No tickets or reservations needed. Simply walk in during open hours.'
      }
    },
    faqs: [
      {
        question: 'What are the Walker Art Gallery hours?',
        answer: 'The gallery is open daily from 10am to 5pm throughout the year. It closes only for Christmas Eve, Christmas Day, Boxing Day, and New Year\'s Day.'
      },
      {
        question: 'Is the Walker Art Gallery free?',
        answer: 'Yes, admission to the Walker Art Gallery is completely free. As part of National Museums Liverpool, funded publicly, there is no charge to view the permanent collection. Special exhibitions may have fees.'
      },
      {
        question: 'What is the best time to visit the Walker Art Gallery?',
        answer: 'Any weekday offers a peaceful experience, as the gallery rarely gets crowded. Weekend mornings can be slightly busier but nothing compared to London museums.'
      },
      {
        question: 'What art is at the Walker Art Gallery?',
        answer: 'Known as the "National Gallery of the North," the Walker holds outstanding Pre-Raphaelite works, Old Masters including Rembrandt and Rubens, and British art from Tudor times to today. George Stubbs\' horse paintings are highlights.'
      }
    ]
  }
];

async function addMuseumHours() {
  console.log('Starting batch 13 museum hours update...\n');

  for (const museum of museumData) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          websiteUrl: museum.websiteUrl,
          ticketUrl: museum.ticketUrl,
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.name}`);
    } catch (error) {
      console.error(`✗ Error updating ${museum.name}:`, error.message);
    }
  }

  console.log('\nBatch 13 complete!');
}

addMuseumHours()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
