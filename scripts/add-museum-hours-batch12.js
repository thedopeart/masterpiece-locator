const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'vatican-museums',
    name: 'Vatican Museums',
    websiteUrl: 'https://www.museivaticani.va/',
    ticketUrl: 'https://www.museivaticani.va/content/museivaticani/en/visita-i-musei/biglietti.html',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:00', close: '20:00' },
          tuesday: { open: '08:00', close: '20:00' },
          wednesday: { open: '08:00', close: '20:00' },
          thursday: { open: '08:00', close: '20:00' },
          friday: { open: '08:00', close: '20:00' },
          saturday: { open: '08:00', close: '20:00' },
          sunday: { open: null, close: null, closed: true }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-01-06', closed: true, reason: 'Epiphany' },
          { date: '2026-02-11', closed: true, reason: 'Lateran Treaty Anniversary' },
          { date: '2026-03-19', closed: true, reason: "St. Joseph's Day" },
          { date: '2026-04-06', closed: true, reason: 'Easter Monday' },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-06-29', closed: true, reason: 'Saints Peter and Paul' },
          { date: '2026-08-14', closed: true, reason: 'Vigil of Assumption' },
          { date: '2026-08-15', closed: true, reason: 'Assumption Day' },
          { date: '2026-12-08', closed: true, reason: 'Immaculate Conception' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: "St. Stephen's Day" }
        ],
        notes: 'Open Mon-Sat 8am-8pm (last entry 6pm). Closed Sundays except last Sunday of month: 9am-2pm (last entry 12:30pm) with FREE admission. The Sistine Chapel is included in Vatican Museums admission. Book tickets well in advance. Allow 4+ hours for a full visit.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 32,
        senior: 32,
        student: 24,
        child: 0,
        childMaxAge: 5,
        currency: 'EUR',
        notes: 'Full €32, with audio guide €39. Reduced €24 for ages 6-18, students with ID. Free for under 6. FREE last Sunday of month 9am-2pm (extremely crowded). Book online to avoid 2-3 hour queues. Friday evening openings available seasonally.',
        freeDay: 'Last Sunday of month',
        memberFree: false
      },
      crowdData: {
        overall: 'Extremely High',
        bestDays: ['monday', 'tuesday', 'thursday'],
        worstDays: ['saturday', 'wednesday'],
        bestTimes: ['08:00-09:00', '16:00-18:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['november', 'january', 'february'],
        worstMonths: ['april', 'july', 'august', 'october'],
        seasonalNotes: 'One of the world\'s most visited museums. The free last Sunday is extremely crowded. Easter period and summer are peak season. Early morning or late afternoon visits recommended. Sistine Chapel gets very congested midday.',
        avgVisitDuration: '4 hours',
        recommendedDuration: '4-5 hours'
      },
      tips: [
        'Book tickets online well in advance; queues can exceed 3 hours without them',
        'Arrive at 8am opening or after 3pm to avoid peak crowds in the Sistine Chapel',
        'The free last Sunday is packed; it\'s worth paying on a quieter day',
        'Dress code enforced: no shorts above knees, no bare shoulders',
        'The Sistine Chapel is at the END of the route; pace yourself through the galleries'
      ],
      tickets: {
        onlineRequired: false,
        onlineRecommended: true,
        walkUpAvailable: true,
        timedEntry: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Vatican Museums hours?',
        answer: 'The Vatican Museums are open Monday-Saturday 8am-8pm (last entry 6pm). Closed Sundays except the last Sunday of each month when admission is free from 9am-2pm (last entry 12:30pm).'
      },
      {
        question: 'How much are Vatican Museums tickets?',
        answer: 'Full admission is €32, or €39 with audio guide. Reduced rate €24 for ages 6-18 and students. Free for children under 6. The last Sunday of each month offers free admission but expect extreme crowds.'
      },
      {
        question: 'What is the best time to visit the Vatican Museums?',
        answer: 'Arrive at 8am opening or after 3pm on Monday, Tuesday, or Thursday. Avoid the free last Sunday unless you enjoy massive crowds. November through February offers the shortest queues.'
      },
      {
        question: 'Is the Sistine Chapel included in Vatican Museums admission?',
        answer: 'Yes, the Sistine Chapel is part of the Vatican Museums. It\'s located at the end of the museum route, so you\'ll walk through many galleries before reaching Michelangelo\'s famous ceiling. Photography is not permitted inside the chapel.'
      }
    ]
  },
  {
    slug: 'borghese-gallery-rome-italy',
    name: 'Borghese Gallery',
    websiteUrl: 'https://galleriaborghese.beniculturali.it/en/',
    ticketUrl: 'https://www.tosc.it/en/artist/galleria-borghese/galleria-borghese-2253937/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
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
        notes: 'Open Tuesday-Sunday 9am-7pm. STRICT 2-hour timed entry slots: 9-11am, 11am-1pm, 1-3pm, 3-5pm, 5-7pm. Maximum 360 visitors per slot. RESERVATION MANDATORY; no walk-up tickets available. Book up to 90 days in advance. Home to Bernini sculptures and Caravaggio paintings.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 20,
        senior: 20,
        student: 9,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Full €16 + €4 mandatory reservation fee = €20 total. Reduced €9 for EU citizens 18-25. Free for under 18 and over 65 (reservation fee still applies). First Sunday of month free (except reservation fee). Book via phone +39 06 32810 or online. Tickets sell out weeks ahead in high season.',
        freeDay: 'First Sunday of month (reservation fee still applies)',
        memberFree: true
      },
      crowdData: {
        overall: 'Controlled (by reservation)',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['09:00-11:00', '17:00-19:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['november', 'january', 'february'],
        worstMonths: ['april', 'may', 'june', 'october'],
        seasonalNotes: 'The reservation system controls crowding, but high season slots sell out weeks ahead. Book as early as possible. The intimate villa setting provides a special experience regardless of the time slot.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours (enforced limit)'
      },
      tips: [
        'RESERVATION IS MANDATORY; no tickets sold at the door',
        'Book up to 90 days in advance; summer slots sell out quickly',
        'Arrive 30-45 minutes before your slot for security check-in',
        'Bernini\'s Apollo and Daphne and Caravaggio paintings are must-sees',
        'The first or last time slot of the day tends to be slightly less crowded'
      ],
      tickets: {
        onlineRequired: true,
        timedEntry: true,
        walkUpAvailable: false,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Borghese Gallery hours?',
        answer: 'The Borghese Gallery is open Tuesday-Sunday 9am-7pm with strict 2-hour entry slots. Visits are limited to 360 people per slot. Closed Mondays, New Year\'s Day, and Christmas Day.'
      },
      {
        question: 'Do I need a reservation for the Borghese Gallery?',
        answer: 'Yes, reservation is MANDATORY. No tickets are sold at the door. Book online or by phone up to 90 days in advance. High season slots sell out weeks ahead, so plan early.'
      },
      {
        question: 'How much are Borghese Gallery tickets?',
        answer: 'Full price is €16 plus €4 mandatory reservation fee (€20 total). Reduced €9 for EU citizens 18-25. Free for under 18 and over 65, but the reservation fee still applies to everyone.'
      },
      {
        question: 'What art is at the Borghese Gallery?',
        answer: 'The gallery houses Bernini\'s greatest sculptures including Apollo and Daphne and David, plus six Caravaggio masterpieces including Boy with a Basket of Fruit. Works by Raphael, Titian, and Canova complete the collection in this stunning 17th-century villa.'
      }
    ]
  },
  {
    slug: 'munch-museum',
    name: 'Munch Museum',
    websiteUrl: 'https://www.munch.no/en/',
    ticketUrl: 'https://www.munch.no/en/buy-tickets/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '21:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', hours: { open: '10:00', close: '16:00' }, reason: "New Year's Eve - early close" }
        ],
        notes: 'Open daily 10am-6pm (Sun-Tue) and 10am-9pm (Wed-Sat). Free admission Wed 6-9pm except Jul-Aug. Home to The Scream. The museum has 3 versions of The Scream displayed in rotation. 10-minute walk from Oslo Central Station.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 180,
        senior: 140,
        student: 140,
        child: 0,
        childMaxAge: 17,
        currency: 'NOK',
        notes: '180 NOK (~$18 USD) adult, 140 NOK reduced. Free for under 18. FREE Wednesdays 6-9pm (except July-August); tickets distributed from 5:30pm. Oslo Pass holders get reserved slots. Book online in high season as time slots sell out.',
        freeDay: 'Wednesday 6-9pm (except Jul-Aug)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate to High',
        bestDays: ['monday', 'tuesday', 'sunday'],
        worstDays: ['saturday', 'wednesday evening'],
        bestTimes: ['10:00-11:00', '17:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['november', 'january', 'february', 'march'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'The room displaying The Scream is always busiest. Free Wednesday evenings are popular; arrive by 5:30pm for ticket distribution. Summer months are peak tourist season in Oslo.',
        avgVisitDuration: '2.5 hours',
        recommendedDuration: '3 hours'
      },
      tips: [
        'The museum has 3 versions of The Scream; they rotate display every 30 minutes',
        'Free Wednesday evenings (except summer); arrive by 5:30pm for tickets',
        'Book online in advance during summer; time slots sell out',
        'Allow 2-3 hours to explore beyond just The Scream',
        'Audioguides available in multiple languages including sign language'
      ],
      tickets: {
        onlineRequired: false,
        onlineRecommended: true,
        walkUpAvailable: true,
        timedEntry: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Munch Museum Oslo hours?',
        answer: 'The Munch Museum is open daily: Sunday-Tuesday 10am-6pm, Wednesday-Saturday 10am-9pm. Free admission on Wednesday evenings from 6-9pm (except July-August).'
      },
      {
        question: 'How much are Munch Museum tickets?',
        answer: 'Adult admission is 180 NOK (approximately $18 USD), reduced 140 NOK for seniors and students. Free for under 18. Free Wednesday evenings 6-9pm (except summer); limited tickets distributed from 5:30pm.'
      },
      {
        question: 'Can I see The Scream at the Munch Museum?',
        answer: 'Yes, the Munch Museum displays The Scream. The museum owns three versions of this iconic painting by Edvard Munch, which are rotated on display. Expect crowds around The Scream room throughout the day.'
      },
      {
        question: 'What is the best time to visit the Munch Museum?',
        answer: 'Visit Monday, Tuesday, or Sunday morning between 10-11am for the quietest experience. Free Wednesday evenings are popular but crowded. Book online in advance during the July-August peak season.'
      }
    ]
  },
  {
    slug: 'national-portrait-gallery-london-uk',
    name: 'National Portrait Gallery',
    websiteUrl: 'https://www.npg.org.uk/',
    ticketUrl: 'https://www.npg.org.uk/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:30', close: '18:00' },
          tuesday: { open: '10:30', close: '18:00' },
          wednesday: { open: '10:30', close: '18:00' },
          thursday: { open: '10:30', close: '18:00' },
          friday: { open: '10:30', close: '21:00' },
          saturday: { open: '10:30', close: '21:00' },
          sunday: { open: '10:30', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10:30am-6pm, Friday and Saturday until 9pm. FREE admission to permanent collection. Special exhibitions require paid tickets. Located on St Martin\'s Place, just off Trafalgar Square. Reopened in 2023 after major renovation.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'GBP',
        notes: 'Permanent collection FREE. Special exhibitions £9.50-25 adult; free for Members and under 12. Students and disabled visitors 10% off. Universal Credit recipients 50% off. No booking fee online, phone, or in person.',
        freeDay: 'Permanent collection always free',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:30-12:00', '17:00-18:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'The central Trafalgar Square location brings steady visitors. Friday and Saturday late openings until 9pm are less crowded. Major exhibitions draw larger crowds.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'The permanent collection is FREE; just walk in',
        'Friday and Saturday evening openings until 9pm are quieter',
        'Don\'t miss Tudor portraits and the contemporary floor',
        'Book exhibition tickets online to guarantee entry',
        'Located steps from Trafalgar Square and the National Gallery'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the National Portrait Gallery hours?',
        answer: 'The National Portrait Gallery is open daily 10:30am-6pm, with extended hours until 9pm on Fridays and Saturdays. Closed December 24-26.'
      },
      {
        question: 'Is the National Portrait Gallery free?',
        answer: 'Yes, admission to the permanent collection is completely free. Special exhibitions require paid tickets ranging from £9.50-25 for adults. Members and children under 12 enter exhibitions free.'
      },
      {
        question: 'What is the best time to visit the National Portrait Gallery?',
        answer: 'Visit Monday through Wednesday morning between 10:30am-12pm for the quietest experience. Friday and Saturday evenings until 9pm are also less crowded than daytime hours.'
      },
      {
        question: 'What can I see at the National Portrait Gallery?',
        answer: 'The collection spans 500 years of British history through portraits of monarchs, scientists, artists, and cultural figures. Highlights include Tudor portraits, the Chandos portrait of Shakespeare, and contemporary works. Located just off Trafalgar Square.'
      }
    ]
  },
  {
    slug: 'georges-pompidou-center-paris-france',
    name: 'Centre Pompidou',
    websiteUrl: 'https://www.centrepompidou.fr/en/',
    ticketUrl: 'https://www.centrepompidou.fr/en/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: null, close: null, closed: true },
          thursday: { open: null, close: null, closed: true },
          friday: { open: null, close: null, closed: true },
          saturday: { open: null, close: null, closed: true },
          sunday: { open: null, close: null, closed: true }
        },
        exceptions: [],
        notes: 'CLOSED FOR MAJOR RENOVATION from late 2025 until 2030. The building is undergoing a 5-year restoration. During closure, exhibitions continue at Centre Pompidou-Metz, Centre Pompidou Málaga, and West Bund Museum Shanghai. When open, normal hours were 11am-9pm (Thu until 11pm), closed Tuesdays.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 15,
        senior: 12,
        student: 12,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'MUSEUM CLOSED 2025-2030 for renovation. When open: €15 adult, €12 ages 18-25. Free for under 18 and EU under 26. First Sunday of month free (museum only). Timed-entry tickets required. Paris Museum Pass accepted.',
        freeDay: 'First Sunday (when open)',
        memberFree: true
      },
      crowdData: {
        overall: 'N/A - Closed',
        bestDays: [],
        worstDays: [],
        bestTimes: [],
        worstTimes: [],
        bestMonths: [],
        worstMonths: [],
        seasonalNotes: 'The Centre Pompidou Paris location is closed for renovation until 2030. Visit Centre Pompidou-Metz or check the website for traveling exhibitions during the closure period.',
        avgVisitDuration: 'N/A',
        recommendedDuration: 'N/A'
      },
      tips: [
        'CLOSED FOR RENOVATION until 2030',
        'Visit Centre Pompidou-Metz for modern art during the Paris closure',
        'The renovation will restore the iconic Renzo Piano and Richard Rogers building',
        'Check centrepompidou.fr for exhibitions at partner venues',
        'The building\'s distinctive inside-out architecture will be fully restored'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: false,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'Is Centre Pompidou Paris open?',
        answer: 'No, Centre Pompidou Paris is closed for major renovation from late 2025 until 2030. The iconic building is undergoing a complete restoration. Exhibitions continue at Centre Pompidou-Metz and partner venues.'
      },
      {
        question: 'When will Centre Pompidou reopen?',
        answer: 'Centre Pompidou Paris is scheduled to reopen in 2030 after a 5-year renovation project. The restoration will address the building\'s infrastructure and restore the Renzo Piano and Richard Rogers design.'
      },
      {
        question: 'Where can I see Centre Pompidou art during the closure?',
        answer: 'During the Paris closure, visit Centre Pompidou-Metz in northeastern France, Centre Pompidou Málaga in Spain, or the West Bund Museum in Shanghai. Check the official website for traveling exhibitions.'
      },
      {
        question: 'What art is in the Centre Pompidou collection?',
        answer: 'Centre Pompidou houses Europe\'s largest collection of modern and contemporary art, including masterpieces by Picasso, Kandinsky, Matisse, Duchamp, and Warhol. The collection spans from 1905 to present day.'
      }
    ]
  },
  {
    slug: 'hamburger-kunsthalle',
    name: 'Hamburger Kunsthalle',
    websiteUrl: 'https://www.hamburger-kunsthalle.de/en',
    ticketUrl: 'https://www.hamburger-kunsthalle.de/en/prices-tickets-vouchers',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-04-06', closed: true, reason: 'Easter Monday' },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tue-Sun 10am-6pm, Thursday until 9pm. Closed Mondays. FREE first Thursday of each month 6-9pm. Three connected buildings housing art from medieval to contemporary. Major German Romantic and 19th-century collection.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 14,
        senior: 14,
        student: 8,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: '€14 adult, €8 reduced for students, apprentices, unemployed. Free for under 18. FREE first Thursday of month 6-9pm for all. Flex Ticket valid for 1 year. Group rates for 8+. Multi-museum ticket available for 6 Hamburg museums.',
        freeDay: 'First Thursday 6-9pm',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'friday'],
        worstDays: ['saturday', 'sunday', 'first thursday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Free first Thursdays draw larger crowds. The three connected buildings require time to explore fully. One of Germany\'s most important art museums.',
        avgVisitDuration: '2.5 hours',
        recommendedDuration: '3 hours'
      },
      tips: [
        'FREE admission first Thursday of each month from 6-9pm',
        'Don\'t miss Caspar David Friedrich\'s Wanderer above the Sea of Fog',
        'Three connected buildings span medieval to contemporary art',
        'Thursday evenings until 9pm offer extended viewing',
        'The Galerie der Gegenwart (Contemporary Gallery) opened in 1997'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Hamburger Kunsthalle hours?',
        answer: 'The Hamburger Kunsthalle is open Tuesday-Sunday 10am-6pm, with extended hours until 9pm on Thursdays. Closed Mondays. Free admission on the first Thursday of each month from 6-9pm.'
      },
      {
        question: 'How much is Hamburger Kunsthalle admission?',
        answer: 'Adult admission is €14, reduced €8 for students and unemployed. Free for visitors under 18. Free for everyone on the first Thursday of each month from 6-9pm.'
      },
      {
        question: 'What is the best time to visit Hamburger Kunsthalle?',
        answer: 'Visit Tuesday, Wednesday, or Friday morning between 10-11am for the quietest experience. Thursday evenings until 9pm are relaxed. Avoid the free first Thursday evenings if you prefer fewer visitors.'
      },
      {
        question: 'What art is at the Hamburger Kunsthalle?',
        answer: 'One of Germany\'s most important art museums, the Kunsthalle features Caspar David Friedrich\'s iconic Wanderer above the Sea of Fog, major Old Masters, German Romantic paintings, and contemporary art across three connected buildings.'
      }
    ]
  },
  {
    slug: 'albertina-vienna-austria',
    name: 'Albertina',
    websiteUrl: 'https://www.albertina.at/en/',
    ticketUrl: 'https://shop.albertina.at/en/tickets/admission/',
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
          { date: '2026-12-24', hours: { open: '10:00', close: '14:00' }, reason: 'Christmas Eve - early close' },
          { date: '2026-12-31', hours: { open: '10:00', close: '16:00' }, reason: "New Year's Eve - early close" }
        ],
        notes: 'Open daily 10am-6pm, Wednesday and Friday until 9pm. World\'s largest and most important collection of graphic art. Located next to the Vienna State Opera. Three locations: main Albertina, Albertina Modern, and Albertina Klosterneuburg (open Mar-Nov).',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 19,
        senior: 15,
        student: 15,
        child: 0,
        childMaxAge: 19,
        currency: 'EUR',
        notes: '€19 adult, €15 reduced for ages 19-26. Free for under 19. Combined ticket for all 3 Albertina locations valid 1 year. Free audioguide for children, €5 adults. Vienna City Card and Vienna Pass accepted for discounts.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'tuesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '17:00-18:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'The Batliner Collection of Impressionist and Modern art draws steady visitors. Wednesday and Friday evenings until 9pm are quieter. Special exhibitions can increase crowds.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2.5 hours'
      },
      tips: [
        'Wednesday and Friday late openings until 9pm are less crowded',
        'Don\'t miss Dürer\'s Hare and Monet to Picasso in the Batliner Collection',
        'Combined ticket covers main Albertina, Albertina Modern, and Klosterneuburg',
        'Free for visitors under 19; bring ID',
        'Located at the end of the Hofburg Palace, steps from the Opera House'
      ],
      tickets: {
        onlineRequired: false,
        onlineRecommended: true,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Albertina Vienna hours?',
        answer: 'The Albertina is open daily 10am-6pm, with extended hours until 9pm on Wednesdays and Fridays. Reduced hours on Christmas Eve and New Year\'s Eve.'
      },
      {
        question: 'How much is Albertina admission?',
        answer: 'Adult admission is €19, reduced €15 for ages 19-26. Free for visitors under 19. Combined tickets for all three Albertina locations are valid for one year.'
      },
      {
        question: 'What is the best time to visit the Albertina?',
        answer: 'Visit Monday, Tuesday, or Thursday morning between 10-11am for the quietest experience. Wednesday and Friday evenings until 9pm offer extended viewing with fewer crowds.'
      },
      {
        question: 'What art is at the Albertina Vienna?',
        answer: 'The Albertina houses the world\'s largest collection of graphic art including Dürer\'s famous Hare. The Batliner Collection features Monet to Picasso. The museum also shows major temporary exhibitions in the historic Habsburg state rooms.'
      }
    ]
  },
  {
    slug: 'national-gallery-victoria',
    name: 'National Gallery of Victoria',
    websiteUrl: 'https://www.ngv.vic.gov.au/',
    ticketUrl: 'https://connect.ngv.vic.gov.au/',
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
          { date: '2026-04-25', hours: { open: '13:00', close: '17:00' }, reason: 'ANZAC Day - opens 1pm' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open daily 10am-5pm at both locations. Two venues: NGV International (St Kilda Road) for world art, NGV Australia (Federation Square) for Australian art. FREE general admission to both. Major exhibitions require tickets.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'AUD',
        notes: 'General admission FREE at both NGV International and NGV Australia. Special exhibitions require paid tickets (prices vary). Advance booking essential for major exhibitions. Free daily guided tours available.',
        freeDay: 'Always free (general admission)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['february', 'march', 'november'],
        worstMonths: ['january', 'july'],
        seasonalNotes: 'Australia\'s oldest and most visited art museum. School holidays (especially January, July) bring families. Major exhibitions like the NGV Triennial draw large crowds. Book blockbuster shows well ahead.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '3 hours (for both venues)'
      },
      tips: [
        'General admission is FREE at both venues; only special exhibitions charge',
        'NGV International has world art; NGV Australia at Fed Square focuses on Australian art',
        'Book blockbuster exhibitions in advance; they often sell out',
        'Free daily tours available; check the website for times',
        'Use public transport; parking near both venues is limited and expensive'
      ],
      tickets: {
        onlineRequired: false,
        onlineRecommended: true,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the National Gallery of Victoria hours?',
        answer: 'Both NGV International and NGV Australia are open daily 10am-5pm. Opens at 1pm on ANZAC Day (April 25). Closed Christmas Day.'
      },
      {
        question: 'Is the National Gallery of Victoria free?',
        answer: 'Yes, general admission to both NGV venues is free. Special exhibitions require paid tickets with prices varying by show. Advance booking is recommended for major exhibitions.'
      },
      {
        question: 'What is the difference between NGV International and NGV Australia?',
        answer: 'NGV International on St Kilda Road houses global art from ancient to contemporary. NGV Australia at Federation Square is dedicated entirely to Australian art, including Indigenous, colonial, and modern works.'
      },
      {
        question: 'What art is at the NGV?',
        answer: 'Australia\'s oldest art museum features European Old Masters, Asian art, contemporary works, and the world\'s finest collection of Australian art including Indigenous works. Highlights include Tiepolo\'s Banquet of Cleopatra and major Australian paintings.'
      }
    ]
  },
  {
    slug: 'norton-simon-museum-pasadena-ca-us',
    name: 'Norton Simon Museum',
    websiteUrl: 'https://www.nortonsimon.org/',
    ticketUrl: 'https://www.nortonsimon.org/visit/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '12:00', close: '17:00' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: null, close: null, closed: true },
          thursday: { open: '12:00', close: '17:00' },
          friday: { open: '12:00', close: '19:00' },
          saturday: { open: '12:00', close: '19:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Mon/Thu/Sun 12pm-5pm, Fri/Sat 12pm-7pm. Closed Tuesday and Wednesday. FREE first Friday of month 4-7pm. Free parking. One of the finest small art museums in America with exceptional Old Masters and Impressionists.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 20,
        senior: 15,
        student: 0,
        child: 0,
        childMaxAge: 18,
        currency: 'USD',
        notes: '$20 adult, $15 seniors 62+. FREE for students with ID and under 18. FREE first Friday of month 4-7pm. Free for active military, AAM/ICOM members. Advance tickets recommended but not required. Free parking on site.',
        freeDay: 'First Friday 4-7pm',
        memberFree: true
      },
      crowdData: {
        overall: 'Low',
        bestDays: ['monday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['12:00-14:00', '16:00-17:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['january', 'february', 'september'],
        worstMonths: ['december'],
        seasonalNotes: 'One of the quietest major museums in Southern California. Free first Fridays draw more visitors. The beautiful sculpture garden is especially pleasant in spring and fall.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'FREE for students with ID and visitors under 18',
        'Free first Friday of each month from 4-7pm',
        'Don\'t miss the Degas bronze collection and South Asian sculpture',
        'Free parking in the museum lot',
        'The sculpture garden is a hidden gem; save time to explore it'
      ],
      tickets: {
        onlineRequired: false,
        onlineRecommended: true,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Norton Simon Museum hours?',
        answer: 'The Norton Simon Museum is open Monday, Thursday, and Sunday 12pm-5pm, and Friday-Saturday 12pm-7pm. Closed Tuesday and Wednesday. Free admission first Friday of each month 4-7pm.'
      },
      {
        question: 'How much is Norton Simon Museum admission?',
        answer: 'Adult admission is $20, seniors 62+ pay $15. Free for students with ID and visitors under 18. Free for everyone on the first Friday of each month from 4-7pm. Free parking available.'
      },
      {
        question: 'What is the best time to visit the Norton Simon Museum?',
        answer: 'Visit Monday or Thursday at opening (12pm) for the quietest experience. This intimate museum is rarely crowded, making it one of the most pleasant viewing experiences in Southern California.'
      },
      {
        question: 'What art is at the Norton Simon Museum?',
        answer: 'The museum features an exceptional collection of Old Masters (Rembrandt, Raphael, Rubens), French Impressionists (Monet, Renoir, Degas), and the finest collection of South Asian sculpture in the western United States, all in an intimate setting.'
      }
    ]
  },
  {
    slug: 'grand-egyptian-museum',
    name: 'Grand Egyptian Museum',
    websiteUrl: 'https://gem.eg/',
    ticketUrl: 'https://visit-gem.com/en',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:30', close: '19:00' },
          tuesday: { open: '08:30', close: '19:00' },
          wednesday: { open: '08:30', close: '21:00' },
          thursday: { open: '08:30', close: '19:00' },
          friday: { open: '08:30', close: '19:00' },
          saturday: { open: '08:30', close: '21:00' },
          sunday: { open: '08:30', close: '19:00' }
        },
        exceptions: [],
        notes: 'Complex opens 8:30am, galleries 9am. Standard close 7pm (galleries 6pm). Extended hours Wed/Sat until 9pm. Ramadan hours: 9am-4pm. Last ticket purchase 5pm (standard days). Home to 100,000+ artifacts and complete Tutankhamun collection. 2km from Giza Pyramids.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 1300,
        senior: 1300,
        student: 650,
        child: 0,
        childMaxAge: 4,
        currency: 'EGP',
        notes: '1,300 EGP (~$25 USD) adult. Student discounts available with valid ID. Free for children 0-4. All tickets must be purchased online at visit-gem.com; onsite sales suspended. Guided tours available $35-150. Photography allowed except in Tutankhamun Galleries (mobile only).',
        freeDay: null,
        memberFree: false
      },
      crowdData: {
        overall: 'High',
        bestDays: ['monday', 'tuesday', 'thursday'],
        worstDays: ['friday', 'saturday'],
        bestTimes: ['09:00-10:00', '16:00-18:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['november', 'january', 'february'],
        worstMonths: ['december', 'march', 'april'],
        seasonalNotes: 'The world\'s largest archaeological museum opened fully in November 2025. The Tutankhamun galleries are always crowded. Extended Wed/Sat evening hours offer better viewing. Avoid Egyptian holidays and high tourist season.',
        avgVisitDuration: '4 hours',
        recommendedDuration: '4-5 hours'
      },
      tips: [
        'Book tickets online at visit-gem.com; no onsite ticket sales',
        'Visit Tutankhamun galleries first thing at 9am before crowds build',
        'Extended hours on Wednesday and Saturday until 9pm',
        'Allow 4+ hours to see the complete collection of 5,398 Tutankhamun artifacts',
        'Photography allowed except Tutankhamun Galleries (mobile phones only there)'
      ],
      tickets: {
        onlineRequired: true,
        walkUpAvailable: false,
        timedEntry: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Grand Egyptian Museum hours?',
        answer: 'The Grand Egyptian Museum complex opens at 8:30am with galleries opening at 9am. Standard closing is 7pm (galleries 6pm). Extended hours until 9pm on Wednesdays and Saturdays. Ramadan hours are 9am-4pm.'
      },
      {
        question: 'How much are Grand Egyptian Museum tickets?',
        answer: 'Admission is 1,300 Egyptian pounds (approximately $25 USD) for adults. Student discounts available. Free for children under 4. All tickets must be purchased online at visit-gem.com; no onsite sales.'
      },
      {
        question: 'Where is the Tutankhamun collection?',
        answer: 'The complete King Tutankhamun collection of 5,398 artifacts is displayed at the Grand Egyptian Museum in dedicated galleries. This is the first time the entire collection has been shown in one place. The golden mask, throne, and coffins are highlights.'
      },
      {
        question: 'How long do you need at the Grand Egyptian Museum?',
        answer: 'Plan for 4-5 hours to properly explore the museum, which houses over 100,000 artifacts. The Tutankhamun galleries alone deserve 1-2 hours. Arrive early at 9am to see the most popular areas before crowds build.'
      }
    ]
  }
];

async function addMuseumHours() {
  console.log('Adding museum hours data - Batch 12...');

  for (const museum of museumsData) {
    try {
      await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          websiteUrl: museum.websiteUrl,
          ticketUrl: museum.ticketUrl,
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${museum.name}`);
    } catch (error) {
      console.error(`✗ Error updating ${museum.name}:`, error.message);
    }
  }

  console.log('Batch 12 complete!');
  await prisma.$disconnect();
}

addMuseumHours();
