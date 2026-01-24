const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'belvedere',
    name: 'Belvedere Museum',
    websiteUrl: 'https://www.belvedere.at/en/',
    ticketUrl: 'https://www.belvedere.at/en/tickets',
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
        exceptions: [
          { date: '2026-12-24', hours: { open: '10:00', close: '16:00' }, reason: 'Christmas Eve - reduced hours' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', hours: { open: '10:00', close: '16:00' }, reason: "New Year's Eve - reduced hours" }
        ],
        notes: 'Upper Belvedere open daily 10am-6pm (9am-7pm during peak periods: Dec 20-Jan 6, Mar 30-Apr 12, Jul 15-Aug 31). Lower Belvedere hours may vary. Timed-entry tickets required. Home to Klimt\'s The Kiss. Belvedere 21 open until 9pm Thursdays.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 18.90,
        senior: 15.90,
        student: 15.90,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Upper Belvedere €18.90, reduced €15.90. Combined Upper + Lower ticket €29.90. Audio guide €5. Free for under 19. Reduced admission €3 for visitors with disabilities and escorts. Vienna Pass and Bundesmuseen Card accepted. Book online for up to 15% discount.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'High',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Klimt\'s The Kiss draws constant crowds. Book timed tickets in advance, especially for morning slots. Extended hours during peak season offer evening visits with fewer visitors.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2.5 hours'
      },
      tips: [
        'Book timed-entry tickets online in advance; morning slots sell out quickly',
        'Klimt\'s The Kiss is the star attraction; arrive early or late to avoid crowds around it',
        'The palace gardens are free to explore and offer beautiful views of Vienna',
        'Consider the combined ticket if you want to see both Upper and Lower Belvedere',
        'Extended hours (9am-7pm) during peak periods offer more flexibility'
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
        question: 'What are the Belvedere Museum Vienna hours?',
        answer: 'The Upper Belvedere is open daily 10am-6pm, with extended hours (9am-7pm) during peak periods including Christmas holidays, Easter, and summer. The Belvedere 21 stays open until 9pm on Thursdays.'
      },
      {
        question: 'How much are Belvedere Museum tickets?',
        answer: 'Upper Belvedere admission is €18.90 for adults, €15.90 reduced. The combined Upper and Lower Belvedere ticket costs €29.90. Free for visitors under 19. Book online for discounts up to 15%.'
      },
      {
        question: 'What is the best time to visit the Belvedere?',
        answer: 'Visit at opening time (10am or 9am during extended hours) on Tuesday through Thursday for the quietest experience. Late afternoon from 4-6pm is also less crowded around Klimt\'s The Kiss.'
      },
      {
        question: 'Where can I see Klimt\'s The Kiss?',
        answer: 'Gustav Klimt\'s The Kiss is displayed at the Upper Belvedere in Vienna. The iconic gold-leaf painting is the museum\'s most famous work. Timed-entry tickets are required, and booking in advance is essential.'
      }
    ]
  },
  {
    slug: 'dulwich-picture-gallery',
    name: 'Dulwich Picture Gallery',
    websiteUrl: 'https://www.dulwichpicturegallery.org.uk/',
    ticketUrl: 'https://www.dulwichpicturegallery.org.uk/planning-your-visit/tickets/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
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
        notes: 'Open Tuesday-Sunday 10am-5pm (last entry 4:30pm). Closed Mondays except Bank Holiday Mondays. The world\'s first purpose-built public art gallery, designed by Sir John Soane in 1817. Sculpture Garden and grounds free to explore.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 20,
        senior: 10,
        student: 10,
        child: 0,
        childMaxAge: 18,
        currency: 'GBP',
        notes: 'Exhibition ticket (includes collection) £20 adult, £10 students/under 30s/disabled. Collection only £10 adult, £5 students/under 30s. Free for under 18. Universal Credit/Pension Credit £1 (exhibitions) or free (collection). Art Fund members free to collection.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['august', 'december'],
        seasonalNotes: 'Less crowded than central London museums. The intimate galleries never feel overwhelming. Summer weekends bring families to the gardens. A peaceful alternative to the National Gallery.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Just 15 minutes by train from Victoria or London Bridge to West Dulwich or North Dulwich',
        'The Sculpture Garden is free to explore even without museum admission',
        'Don\'t miss Rembrandt, Poussin, and Van Dyck in the intimate Soane-designed galleries',
        'The café offers a pleasant spot for lunch in the garden setting',
        'Under 30s get significant discounts; bring valid ID'
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
        question: 'What are the Dulwich Picture Gallery hours?',
        answer: 'Dulwich Picture Gallery is open Tuesday-Sunday 10am-5pm, with last entry at 4:30pm. The gallery is closed on Mondays except Bank Holiday Mondays. It closes for Christmas Eve through Boxing Day and New Year\'s Day.'
      },
      {
        question: 'How much are Dulwich Picture Gallery tickets?',
        answer: 'Exhibition tickets (including collection) cost £20 for adults, £10 for students and under 30s. Collection-only tickets are £10 adult, £5 reduced. Free for under 18 and Universal Credit holders for collection access.'
      },
      {
        question: 'What is the best time to visit Dulwich Picture Gallery?',
        answer: 'Visit Tuesday through Thursday morning between 10-11am for the quietest experience. The intimate galleries are never overcrowded, but weekday mornings offer the most peaceful viewing conditions.'
      },
      {
        question: 'How do I get to Dulwich Picture Gallery?',
        answer: 'Take a train from London Victoria or London Bridge to West Dulwich or North Dulwich station (15 minutes). The gallery is a short walk from either station. It\'s located in Dulwich Village between Brixton and Peckham.'
      }
    ]
  },
  {
    slug: 'clark-art-institute',
    name: 'Clark Art Institute',
    websiteUrl: 'https://www.clarkart.edu/',
    ticketUrl: 'https://www.clarkart.edu/visit/hours-and-admission',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday-Sunday 10am-5pm September-June. Open DAILY in July and August. Free admission January-March. First Sundays free October-May. 140-acre campus with hiking trails open at all times.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 20,
        senior: 20,
        student: 0,
        child: 0,
        childMaxAge: 21,
        currency: 'USD',
        notes: 'Free January-March. $20 March-December. Free year-round for members, students with ID, and ages 21 and under. First Sundays free October-May. Library pass program offers free admission. EBT cardholders free (up to 4 people). Massachusetts teachers free with ID.',
        freeDay: 'First Sunday October-May; all days January-March',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'march', 'september'],
        worstMonths: ['july', 'august', 'october'],
        seasonalNotes: 'The Berkshires draw summer and fall foliage visitors. Winter offers free admission and peaceful galleries. The campus trails are beautiful year-round.',
        avgVisitDuration: '2.5 hours',
        recommendedDuration: '3 hours'
      },
      tips: [
        'Visit January-March for completely free admission',
        'The 140-acre campus has beautiful hiking trails; bring comfortable shoes',
        'The Renoir collection is one of the finest outside France',
        'Free Saturday tours at 11:15am September-June (first-come, first-served)',
        'Students with valid ID always enter free regardless of age'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Clark Art Institute hours?',
        answer: 'The Clark is open Tuesday-Sunday 10am-5pm from September through June. In July and August, the museum opens daily including Mondays. The 140-acre campus with walking trails is open at all times.'
      },
      {
        question: 'How much is Clark Art Institute admission?',
        answer: 'Admission is $20 from March through December and completely free January through March. Free year-round for students with valid ID, visitors 21 and under, and members. First Sundays are free from October to May.'
      },
      {
        question: 'What is the best time to visit the Clark?',
        answer: 'Visit January through March for free admission and peaceful galleries. Otherwise, Tuesday through Thursday mornings offer the quietest experience. Fall foliage season brings crowds to the Berkshires.'
      },
      {
        question: 'What art is at the Clark Art Institute?',
        answer: 'The Clark houses exceptional French Impressionist paintings including one of the finest Renoir collections outside France. Works by Monet, Degas, and Homer are displayed alongside Old Masters and American art in galleries designed by Tadao Ando.'
      }
    ]
  },
  {
    slug: 'pushkin-museum',
    name: 'Pushkin Museum',
    websiteUrl: 'https://pushkinmuseum.art/?lang=en',
    ticketUrl: 'https://pushkinmuseum.art/tickets/index.php?lang=en',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '11:00', close: '21:00' },
          saturday: { open: '10:00', close: '21:00' },
          sunday: { open: '10:00', close: '20:00' }
        },
        exceptions: [],
        notes: 'Main Building: Tue-Wed/Sun 10am-8pm (last entry 7pm), Thu-Sat 10am-9pm (last entry 8pm), Fri opens 11am. Closed Mondays. Timed-entry e-tickets required; book for specific 30-minute entry window. Moscow\'s largest European art museum.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 600,
        senior: 400,
        student: 400,
        child: 0,
        childMaxAge: 6,
        currency: 'RUB',
        notes: 'Main Building: weekdays 600₽ (400₽ reduced), weekends/holidays 700₽ (500₽ reduced). Combined ticket 950₽ weekdays only. Free for under 6. Free Wednesdays for children 7-17 and Russian students. E-tickets required for timed entry.',
        freeDay: 'Wednesday for children 7-17 and Russian students',
        memberFree: true
      },
      crowdData: {
        overall: 'High',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '18:00-20:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['may', 'june', 'july'],
        seasonalNotes: 'One of Russia\'s most visited museums. The Impressionist collection in the Gallery building draws large crowds. Late evening visits on Thu-Sat offer extended hours with fewer visitors.',
        avgVisitDuration: '2.5 hours',
        recommendedDuration: '3 hours'
      },
      tips: [
        'Book timed-entry e-tickets online; walk-up tickets are limited',
        'The Gallery of 19th-20th Century European and American Art has the Impressionists',
        'Thursday-Saturday evening hours until 9pm are less crowded',
        'Buy tickets only from the official website; third-party tickets may be invalid',
        'Metro stations Kropotkinskaya or Borovitskaya are closest'
      ],
      tickets: {
        onlineRequired: true,
        timedEntry: true,
        walkUpAvailable: true,
        peakSeasonSurcharge: true
      }
    },
    faqs: [
      {
        question: 'What are the Pushkin Museum Moscow hours?',
        answer: 'The Pushkin Museum is open Tuesday-Sunday with varying hours: Tue-Wed and Sun 10am-8pm, Thu-Sat 10am-9pm (Friday opens at 11am). Closed Mondays. Ticket office closes one hour before museum closing.'
      },
      {
        question: 'How much are Pushkin Museum tickets?',
        answer: 'Main Building tickets cost 600 rubles on weekdays (400₽ reduced) and 700 rubles on weekends (500₽ reduced). Free for children under 6. Timed-entry e-tickets are required and should be purchased online.'
      },
      {
        question: 'What is the best time to visit the Pushkin Museum?',
        answer: 'Visit Tuesday or Wednesday at opening time (10am) for the quietest experience. Thursday through Saturday evenings from 6-9pm are also less crowded. Avoid weekend midday hours when tour groups gather.'
      },
      {
        question: 'What art is at the Pushkin Museum?',
        answer: 'Moscow\'s largest European art museum features works spanning ancient civilizations to 20th-century art. The separate Gallery building houses exceptional Impressionist and Post-Impressionist paintings including works by Monet, Renoir, Cézanne, Van Gogh, and Picasso.'
      }
    ]
  },
  {
    slug: 'kimbell-art-museum',
    name: 'Kimbell Art Museum',
    websiteUrl: 'https://kimbellart.org/',
    ticketUrl: 'https://kimbellart.org/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '12:00', close: '20:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tue-Thu/Sat 10am-5pm, Fri 12pm-8pm, Sun 12pm-5pm. Closed Mondays. Permanent collection always FREE. Louis Kahn-designed building is an architectural masterpiece. Free parking in underground garage.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'USD',
        notes: 'Permanent collection always FREE. Special exhibitions require tickets. Half-price exhibition admission Tuesdays 10am-5pm and Fridays 5-8pm ($8 instead of $16). K-12 teachers $16 with valid school ID. Members free with priority access. Children under 6 free to exhibitions.',
        freeDay: 'Permanent collection always free',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'september'],
        worstMonths: ['june', 'july', 'december'],
        seasonalNotes: 'Fort Worth\'s Cultural District draws steady visitors. The intimate collection never feels crowded. Friday evenings offer half-price exhibitions and a special atmosphere.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'The permanent collection is ALWAYS free; special exhibitions charge separately',
        'Louis Kahn\'s building is considered one of the finest museum designs in America',
        'Half-price exhibitions on Tuesdays and Friday evenings 5-8pm',
        'Free parking in the underground garage and surrounding lots',
        'Walk to the Modern Art Museum and Amon Carter Museum in the Cultural District'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Kimbell Art Museum hours?',
        answer: 'The Kimbell is open Tuesday-Thursday and Saturday 10am-5pm, Friday 12pm-8pm, and Sunday 12pm-5pm. Closed Mondays and major holidays. The Friday evening hours offer half-price exhibitions.'
      },
      {
        question: 'Is the Kimbell Art Museum free?',
        answer: 'Yes, the permanent collection is always free. Special exhibitions require tickets, typically $16, with half-price admission on Tuesdays and Friday evenings 5-8pm. Children under 6 are free to all exhibitions.'
      },
      {
        question: 'What is the best time to visit the Kimbell?',
        answer: 'Visit Tuesday through Thursday morning between 10-11am for the quietest experience. Friday evenings 5-8pm offer half-price exhibitions and a relaxed atmosphere in the beautiful Louis Kahn building.'
      },
      {
        question: 'What art is at the Kimbell Art Museum?',
        answer: 'Despite its small size, the Kimbell holds exceptional Old Master paintings including works by Caravaggio, Velázquez, Rembrandt, and El Greco. Asian, African, and Pre-Columbian art round out the world-class collection housed in Louis Kahn\'s celebrated building.'
      }
    ]
  },
  {
    slug: 'scottish-national-gallery',
    name: 'Scottish National Gallery',
    websiteUrl: 'https://www.nationalgalleries.org/',
    ticketUrl: 'https://www.nationalgalleries.org/visit',
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
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2027-01-01', hours: { open: '12:00', close: '17:00' }, reason: "New Year's Day - opens at noon" }
        ],
        notes: 'Open daily 10am-5pm. Free admission to permanent collection. Located just off Princes Street in Edinburgh city centre. The Scottish Café & Restaurant open 10am-5pm (last orders 4pm).',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent collection. Special exhibitions may charge. School and community groups of 10+ can book free self-led or guided visits. Community and access groups receive free entry to all ticketed exhibitions.',
        freeDay: 'Always free',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['august', 'december'],
        seasonalNotes: 'August Edinburgh Festival brings heavy tourist traffic. The central Princes Street location means steady visitors year-round. Morning visits offer the most peaceful viewing.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'The gallery is FREE; just walk in off Princes Street',
        'Access via the main entrance on East Princes Street Gardens (also the accessible entrance)',
        'Don\'t miss Scottish masterpieces alongside European Old Masters',
        'Avoid August when the Edinburgh Festival fills the city with tourists',
        'The Scottish Café offers good lunch options with garden views'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Scottish National Gallery hours?',
        answer: 'The Scottish National Gallery is open daily 10am-5pm. It closes on Christmas Day and Boxing Day. On New Year\'s Day, the gallery opens at noon. The café is open 10am-5pm with last orders at 4pm.'
      },
      {
        question: 'Is the Scottish National Gallery free?',
        answer: 'Yes, admission to the permanent collection is completely free. Special exhibitions may have a charge, but community and access groups receive free entry to all ticketed exhibitions as well.'
      },
      {
        question: 'What is the best time to visit the Scottish National Gallery?',
        answer: 'Visit Monday through Wednesday morning between 10-11am for the quietest experience. Avoid August when the Edinburgh Festival brings large crowds to the city centre.'
      },
      {
        question: 'What art is at the Scottish National Gallery?',
        answer: 'The collection features Scottish masterpieces alongside European Old Masters including works by Titian, Vermeer, Rembrandt, and Velázquez. Scottish highlights include paintings by Raeburn, Ramsay, and the Scottish Colourists.'
      }
    ]
  },
  {
    slug: 'petit-palais-paris-france',
    name: 'Petit Palais',
    websiteUrl: 'https://www.petitpalais.paris.fr/en',
    ticketUrl: 'https://www.petitpalais.paris.fr/en/plan-your-visit/admission-charges',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-07-14', closed: true, reason: 'Bastille Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tue-Sun 10am-6pm. Late opening until 8pm Fri-Sat for temporary exhibitions only. Closed Mondays. FREE admission to permanent collections. Beautiful Beaux-Arts building with inner garden café. Last entry 5:15pm.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'EUR',
        notes: 'Permanent collections FREE for everyone, no ticket needed. Temporary exhibitions €11-15 adult, €9 under 26/seniors, free under 7. Carte Paris Musées (€40 individual, €20 under 26) gives unlimited access to all Paris municipal museum exhibitions.',
        freeDay: 'Permanent collection always free',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Less crowded than nearby Grand Palais and Champs-Élysées museums. The inner garden is a peaceful oasis. Often overlooked by tourists focused on the Louvre.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'The permanent collection is FREE; just walk in without a ticket',
        'The beautiful inner garden café is a hidden gem on the Champs-Élysées',
        'Friday and Saturday evenings until 8pm for temporary exhibitions only',
        'Metro Champs-Élysées - Clemenceau (Lines 1 & 13) is steps away',
        'Don\'t miss the Dutuit collection of antiquities and the Impressionist paintings'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Petit Palais Paris hours?',
        answer: 'The Petit Palais is open Tuesday-Sunday 10am-6pm, with extended hours until 8pm on Fridays and Saturdays for temporary exhibitions. Closed Mondays and major French holidays. Last entry at 5:15pm.'
      },
      {
        question: 'Is the Petit Palais free?',
        answer: 'Yes, the permanent collections are completely free with no ticket required. Temporary exhibitions charge €11-15 for adults, €9 for under 26 and seniors, and free for children under 7.'
      },
      {
        question: 'What is the best time to visit the Petit Palais?',
        answer: 'Visit Tuesday through Thursday morning between 10-11am for the quietest experience. The museum is less crowded than the nearby Louvre and offers a peaceful alternative on the Champs-Élysées.'
      },
      {
        question: 'What art is at the Petit Palais Paris?',
        answer: 'The Petit Palais houses the City of Paris fine arts collection spanning antiquity to 1900. Highlights include French Impressionist paintings, the Dutuit collection of Greek and Roman antiquities, and decorative arts displayed in a stunning Beaux-Arts building.'
      }
    ]
  },
  {
    slug: 'museu-de-belles-arts-de-val232ncia-valencia-spain',
    name: 'Museu de Belles Arts de València',
    websiteUrl: 'https://museobellasartesvalencia.gva.es/',
    ticketUrl: 'https://museobellasartesvalencia.gva.es/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '20:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-04-10', closed: true, reason: 'Good Friday' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday-Sunday 10am-8pm. Closed Mondays. FREE admission. Spain\'s second largest art gallery, housed in the 17th-century St. Pius V Palace. Outstanding collection of Valencian Gothic and Renaissance art.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'EUR',
        notes: 'Admission is FREE. Founded in 1913, the museum holds approximately 2,000 works spanning the 14th to 17th centuries. Located next to the Jardines del Real (Royal Gardens).',
        freeDay: 'Always free',
        memberFree: true
      },
      crowdData: {
        overall: 'Low',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '17:00-20:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Often overlooked by tourists focused on the City of Arts and Sciences. The museum rarely feels crowded. Late afternoon visits offer cool respite during hot Valencia summers.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Admission is completely FREE; one of Spain\'s best free museums',
        'Don\'t miss the Valencian Gothic altarpieces and works by Ribera and Sorolla',
        'The Royal Gardens (Jardines del Real) adjacent are perfect for a post-visit stroll',
        'Less crowded than Barcelona and Madrid museums despite being Spain\'s second largest',
        'Bus lines 1, 6, 11, 16, 26, 28, 29, 36, 79, 95 or Metro Alameda/Pont de Fusta'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Museu de Belles Arts de València hours?',
        answer: 'The museum is open Tuesday-Sunday 10am-8pm. It is closed on Mondays, New Year\'s Day, Good Friday, and Christmas Day. The extended evening hours make it perfect for visits during hot Valencia afternoons.'
      },
      {
        question: 'Is the Valencia Fine Arts Museum free?',
        answer: 'Yes, admission to the Museu de Belles Arts de València is completely free. It\'s one of Spain\'s most important free cultural attractions and the country\'s second largest art gallery after the Prado.'
      },
      {
        question: 'What is the best time to visit the Valencia Fine Arts Museum?',
        answer: 'Visit Tuesday through Thursday morning between 10am-12pm for the quietest experience. Late afternoon from 5-8pm is also peaceful and offers a cool retreat during summer. The museum is rarely crowded.'
      },
      {
        question: 'What art is at the Museu de Belles Arts de València?',
        answer: 'The collection features exceptional Valencian Gothic and Renaissance paintings, including works by Ribera, Velázquez, and El Greco. Joaquín Sorolla\'s luminous paintings are a highlight. The museum spans the 14th to early 20th centuries.'
      }
    ]
  },
  {
    slug: 'los-angeles-county-museum-of-art-lacma-los-angeles',
    name: 'Los Angeles County Museum of Art (LACMA)',
    websiteUrl: 'https://www.lacma.org/',
    ticketUrl: 'https://www.lacma.org/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '11:00', close: '18:00' },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: null, close: null, closed: true },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '20:00' },
          saturday: { open: '10:00', close: '19:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Mon-Tue/Thu 11am-6pm, Fri 11am-8pm, Sat-Sun 10am-7pm. Closed Wednesdays. Timed-entry tickets required. David Geffen Galleries opening anticipated April 2026. LA County residents free after 3pm weekdays.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 28,
        senior: 28,
        student: 28,
        child: 0,
        childMaxAge: 17,
        currency: 'USD',
        notes: 'General admission $28 (special exhibitions may cost extra). Free for LA County residents weekdays after 3pm with valid ID. Free second Tuesday of each month. NexGenLA free membership for LA County children 17 and under (+1 guest). Active military free Memorial Day-Labor Day.',
        freeDay: 'Second Tuesday of month; LA County residents free after 3pm weekdays',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate to High',
        bestDays: ['monday', 'tuesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['11:00-12:00', '16:00-18:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['january', 'february', 'september'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Urban Light sculpture draws crowds at sunset for photos. The new David Geffen Galleries will significantly expand display space when opening in April 2026. Currently showing collection in BCAM and Resnick Pavilion.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours'
      },
      tips: [
        'LA County residents get free admission after 3pm on weekdays; bring valid ID',
        'Urban Light sculpture is best photographed at sunset or after dark',
        'The free second Tuesday draws crowds; arrive early',
        'Book timed-entry tickets online to guarantee admission',
        'The David Geffen Galleries open April 2026 with expanded collection display'
      ],
      tickets: {
        onlineRequired: true,
        timedEntry: true,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the LACMA hours?',
        answer: 'LACMA is open Monday-Tuesday and Thursday 11am-6pm, Friday 11am-8pm, and Saturday-Sunday 10am-7pm. The museum is closed every Wednesday, Thanksgiving Day, and Christmas Day.'
      },
      {
        question: 'How much is LACMA admission?',
        answer: 'General admission is $28 for adults. Free for LA County residents weekdays after 3pm with valid ID. Free for all visitors on the second Tuesday of each month. Children 17 and under from LA County can get free NexGenLA membership.'
      },
      {
        question: 'What is the best time to visit LACMA?',
        answer: 'Visit Monday, Tuesday, or Thursday at opening (11am) for quieter galleries. LA County residents should visit after 3pm on weekdays for free admission. Urban Light sculpture is best at sunset.'
      },
      {
        question: 'What art is at LACMA?',
        answer: 'LACMA is the largest art museum in the western United States, with over 147,000 works spanning 6,000 years. The collection includes ancient art, European paintings, Latin American art, contemporary works, and the famous Urban Light installation by Chris Burden.'
      }
    ]
  },
  {
    slug: 'musee-toulouse-lautrec',
    name: 'Musée Toulouse-Lautrec',
    websiteUrl: 'https://www.musee-toulouse-lautrec.com/',
    ticketUrl: 'https://www.musee-toulouse-lautrec.com/preparer-sa-visite/tarifs/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-11-01', closed: true, reason: "All Saints' Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Winter (Oct-May): Tue-Sun 10am-12:30pm and 2pm-6pm with midday closure. Summer (Jun-Sep): Mon-Sun 10am-6pm daily without closure. Housed in the Palais de la Berbie, a UNESCO World Heritage Site. Gardens free year-round.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 10,
        senior: 10,
        student: 8,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Adult €10, reduced €8. Free for under 17 with liO train ticket (valid 1 month). Free for disabled visitors\' companions and ICOM card holders. Discount with liO train ticket (€8 adult). Average visit 2 hours.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '14:00-16:00'],
        worstTimes: ['11:00-12:00'],
        bestMonths: ['january', 'february', 'march', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Albi is a charming small town; even peak season is manageable. The museum holds the world\'s largest Toulouse-Lautrec collection. Summer offers continuous hours without midday closure.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Visit during summer (Jun-Sep) to avoid the midday closure',
        'The museum holds the world\'s largest public Toulouse-Lautrec collection',
        'The Palais de la Berbie gardens offer spectacular views over the Tarn River',
        'Combine with a visit to Albi Cathedral next door (also UNESCO World Heritage)',
        'Take the liO train for discounted museum admission'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Musée Toulouse-Lautrec hours?',
        answer: 'Winter hours (Oct-May): Tuesday-Sunday 10am-12:30pm and 2pm-6pm with a midday closure. Summer hours (Jun-Sep): daily 10am-6pm including Mondays without closure. Closed November 1st and December 25th.'
      },
      {
        question: 'How much is Musée Toulouse-Lautrec admission?',
        answer: 'Adult admission is €10, reduced €8 for students and with liO train ticket. Free for children under 17 when arriving by liO train. Free for ICOM card holders and companions of disabled visitors.'
      },
      {
        question: 'What is the best time to visit Musée Toulouse-Lautrec?',
        answer: 'Visit Tuesday through Thursday at opening (10am) for the quietest experience. In winter, plan around the midday closure. Summer visits offer continuous hours. The museum is rarely crowded.'
      },
      {
        question: 'What art is at the Musée Toulouse-Lautrec?',
        answer: 'The museum houses the world\'s largest public collection devoted to Henri de Toulouse-Lautrec, including his famous Moulin Rouge posters, paintings, and personal effects. It\'s located in the medieval Palais de la Berbie, a UNESCO World Heritage Site.'
      }
    ]
  }
];

async function addMuseumHours() {
  console.log('Adding museum hours data - Batch 11...');

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

  console.log('Batch 11 complete!');
  await prisma.$disconnect();
}

addMuseumHours();
