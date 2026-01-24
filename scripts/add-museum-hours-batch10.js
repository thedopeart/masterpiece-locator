const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'basilica-of-saint-francis-of-assisi-assisi-italy',
    name: 'Basilica of Saint Francis of Assisi',
    websiteUrl: 'https://www.sanfrancescoassisi.org/',
    ticketUrl: null,
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '06:00', close: '19:00' },
          tuesday: { open: '06:00', close: '19:00' },
          wednesday: { open: '06:00', close: '19:00' },
          thursday: { open: '06:00', close: '19:00' },
          friday: { open: '06:00', close: '19:00' },
          saturday: { open: '06:00', close: '19:00' },
          sunday: { open: '06:30', close: '19:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: false, reason: 'Christmas Day - special Mass schedule' }
        ],
        notes: 'Hours vary by section. Lower Church: Mon-Sat 6am-6:30pm, Sun 10:30am-4:30pm. Upper Church: Mon-Sat 8:30am-6:45pm, Sun 1pm-6:45pm. Crypt with St. Francis tomb: 6am-6:30pm daily. Sunday hours allow for Mass services. Dress code enforced (covered shoulders and knees).',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 0,
        currency: 'EUR',
        notes: 'Free admission. Audio guide available for €8 at Information Office in lower square. Guided tours available through official guides. UNESCO World Heritage Site containing frescoes by Giotto and Cimabue.',
        freeDay: null,
        memberFree: false
      },
      crowdData: {
        overall: 'High',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['06:00-08:00', '17:00-19:00'],
        worstTimes: ['10:00-13:00', '14:00-16:00'],
        bestMonths: ['november', 'january', 'february'],
        worstMonths: ['april', 'may', 'october'],
        seasonalNotes: 'Very crowded during Easter week and October 4th (Feast of St. Francis). Pilgrimage groups arrive throughout the day. Early morning offers the most peaceful experience for viewing the frescoes.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Arrive before 8:30am to see Giotto\'s frescoes in the Upper Church without crowds',
        'Dress appropriately with covered shoulders and knees; wraps available at entrance',
        'Visit the crypt first thing in the morning when it\'s quietest',
        'The Lower Church frescoes by Lorenzetti and Martini are often overlooked but equally impressive',
        'Photography without flash is permitted; no tripods allowed'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Basilica of Saint Francis of Assisi hours?',
        answer: 'The Basilica is open daily from approximately 6am to 7pm, with sections having different hours. The Lower Church opens at 6am (10:30am Sundays), Upper Church at 8:30am (1pm Sundays). Hours may vary for religious services and holidays.'
      },
      {
        question: 'How much do Basilica of Saint Francis tickets cost?',
        answer: 'Admission to the Basilica of Saint Francis is completely free. Audio guides cost €8 and are available at the Information Office in the lower square in multiple languages including English, Italian, French, and German.'
      },
      {
        question: 'What is the best time to visit the Basilica of Saint Francis?',
        answer: 'Visit early morning between 6-8am for a peaceful experience. Weekdays, especially Tuesday through Thursday, are less crowded. Avoid Easter week and October 4th (Feast of St. Francis) when the basilica is extremely busy with pilgrims.'
      },
      {
        question: 'Is photography allowed in the Basilica of Saint Francis?',
        answer: 'Photography without flash is permitted throughout the basilica, including the famous Giotto frescoes in the Upper Church. Tripods and selfie sticks are not allowed. Maintain silence and respect the sacred nature of the space.'
      }
    ]
  },
  {
    slug: 'lenbachhaus',
    name: 'Lenbachhaus',
    websiteUrl: 'https://www.lenbachhaus.de/en/',
    ticketUrl: 'https://lenbachhaus.muenchenticket.net/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-02-17', closed: true, reason: 'Shrove Tuesday' },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tuesday-Sunday 10am-6pm, Thursday until 8pm. Closed Mondays and Shrove Tuesday. Free admission first Thursday of each month 6-10pm. The Blue Rider gallery under renovation Jan 26-Mar 8, 2026 with reduced admission during this period.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 10,
        senior: 10,
        student: 5,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Regular €10, reduced €5. During Blue Rider renovation (Jan 26-Mar 8, 2026): €8/€5. Free for under 18. Free first Thursday 6-10pm. Annual pass €20/€10. "Legi evening" Thursdays 6-8pm: students and teachers €10. Munich City Pass includes entry; Munich Card gives 20% discount.',
        freeDay: 'First Thursday 6-10pm',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Home to the world\'s largest collection of Blue Rider art. The free Thursday evenings draw crowds. Weekday mornings are quietest for viewing Kandinsky, Marc, and Münter works.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2.5 hours'
      },
      tips: [
        'Book online tickets in advance for weekends to avoid waiting',
        'Don\'t miss the Kunstbau underground gallery space with rotating exhibitions',
        'The Blue Rider collection is the museum\'s crown jewel with works by Kandinsky and Franz Marc',
        'Thursday evening is free from 6-10pm on the first Thursday of each month',
        'Easy 10-minute walk from Munich Central Station; U2/U8 to Königsplatz'
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
        question: 'What are the Lenbachhaus Munich hours?',
        answer: 'Lenbachhaus is open Tuesday-Sunday 10am-6pm, with extended hours until 8pm on Thursdays. The museum is closed on Mondays and Shrove Tuesday. All German public holidays are open except Shrove Tuesday.'
      },
      {
        question: 'How much does Lenbachhaus admission cost?',
        answer: 'Regular admission is €10, reduced price €5. Free admission for visitors under 18 and on the first Thursday of each month from 6-10pm. During the Blue Rider renovation (Jan 26-Mar 8, 2026), admission is reduced to €8/€5.'
      },
      {
        question: 'What is the best time to visit Lenbachhaus?',
        answer: 'Visit on Tuesday or Wednesday mornings between 10-11am for the quietest experience. Avoid weekends and the free Thursday evenings when crowds gather. The Blue Rider collection draws the most visitors throughout the day.'
      },
      {
        question: 'What art is at Lenbachhaus Munich?',
        answer: 'Lenbachhaus houses the world\'s largest collection of Blue Rider (Der Blaue Reiter) art, including major works by Wassily Kandinsky, Franz Marc, Gabriele Münter, and August Macke. The collection also features contemporary art and works by Munich artists.'
      }
    ]
  },
  {
    slug: 'national-gallery-of-umbria-palazzo-dei-priori-peru',
    name: 'National Gallery of Umbria',
    websiteUrl: 'https://gallerianazionaledellumbria.it/en/',
    ticketUrl: 'https://gallerianazionaledellumbria.it/en/visit-the-galleria-nazionale-dellumbria/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
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
        notes: 'Open Tuesday-Sunday 8:30am-7:30pm (last entry 6:30pm). Closed Mondays November-June; open daily including Mondays July-October. Free admission first Sunday of each month. Housed in the medieval Palazzo dei Priori in Perugia\'s historic center.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 8,
        senior: 8,
        student: 2,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Full price €8, reduced €2 for EU citizens 18-25. Free for under 18, disabled visitors and companions, ICOM members, EU school groups with teachers. First Sunday of month free (€2 reservation fee). Annual pass €25.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['08:30-10:00', '16:00-19:00'],
        worstTimes: ['11:00-13:00'],
        bestMonths: ['november', 'february', 'march'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Less crowded than Florence or Rome museums. Summer brings Italian tourists. The Umbria Jazz festival in July fills Perugia with visitors. Contains masterpieces by Perugino, Pinturicchio, and Piero della Francesca.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Visit early morning to have the Perugino and Pinturicchio works largely to yourself',
        'The Palazzo dei Priori building itself is a medieval masterpiece worth admiring',
        'Combine with a walk through Perugia\'s historic center and the Fontana Maggiore',
        'The collection spans five centuries of Umbrian art with over 500 works on display',
        'Audio guide recommended to understand the religious iconography'
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
        question: 'What are the National Gallery of Umbria hours?',
        answer: 'The gallery is open Tuesday-Sunday 8:30am-7:30pm, with last entry at 6:30pm. It\'s closed Mondays from November through June. From July to October, the museum opens daily including Mondays.'
      },
      {
        question: 'How much do National Gallery of Umbria tickets cost?',
        answer: 'Full admission is €8. EU citizens aged 18-25 pay reduced admission of €2. Entry is free for visitors under 18 and on the first Sunday of each month (reservation fee €2 applies).'
      },
      {
        question: 'What is the best time to visit the National Gallery of Umbria?',
        answer: 'Visit Tuesday through Thursday morning between 8:30-10am for the quietest experience. The gallery is never as crowded as Florence museums. Late afternoon from 4-7pm is also peaceful for viewing the collection.'
      },
      {
        question: 'What art is in the National Gallery of Umbria?',
        answer: 'The collection features Umbrian masterpieces spanning five centuries, including works by Perugino (Raphael\'s teacher), Pinturicchio, Piero della Francesca, and Beato Angelico. Over 500 paintings, sculptures, and decorative arts are displayed in 40 rooms.'
      }
    ]
  },
  {
    slug: 'frick-collection',
    name: 'The Frick Collection',
    websiteUrl: 'https://www.frick.org/',
    ticketUrl: 'https://www.frick.org/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:30', close: '17:30' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: '10:30', close: '17:30' },
          thursday: { open: null, close: null, closed: true },
          friday: { open: '10:30', close: '20:30' },
          saturday: { open: '10:30', close: '17:30' },
          sunday: { open: '10:30', close: '17:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Mon, Wed, Fri-Sun 10:30am-5:30pm, Friday until 8:30pm. Closed Tuesdays and Thursdays. Doors close 30 minutes before closing; last tickets sold 1 hour before. Returned to original building at 1 East 70th Street after major renovation in 2025.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 26,
        senior: 20,
        student: 17,
        child: 0,
        childMaxAge: 9,
        currency: 'USD',
        notes: 'Advance timed tickets required except for members. Free for ages 10-18 (under 10 not admitted). Pay-what-you-wish Wednesdays 1:30-5:30pm. Free for SNAP/EBT cardholders with photo ID (up to 3 guests). Free for active US military with valid ID. Museums for All participant.',
        freeDay: 'Wednesday 1:30-5:30pm (pay-what-you-wish)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:30-12:00', '16:00-17:30'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['january', 'february', 'september'],
        worstMonths: ['december', 'july', 'august'],
        seasonalNotes: 'The intimate mansion setting limits capacity. Friday evenings until 8:30pm offer a special atmosphere. The newly renovated building opened in 2025 with enhanced visitor experience.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Book timed tickets in advance online; walk-up availability is limited',
        'Children under 10 are not admitted; ages 10-18 enter free',
        'The mansion\'s intimate rooms feel like visiting a private home collection',
        'Don\'t miss Vermeer, Rembrandt, and Bellini masterpieces in the renovated galleries',
        'Friday evening visits offer extended hours until 8:30pm with quieter crowds'
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
        question: 'What are the Frick Collection hours?',
        answer: 'The Frick Collection is open Monday, Wednesday, Friday-Sunday 10:30am-5:30pm, with extended hours on Fridays until 8:30pm. The museum is closed on Tuesdays and Thursdays. Doors close 30 minutes before closing time.'
      },
      {
        question: 'How much are Frick Collection tickets?',
        answer: 'Adult admission is $26, seniors $20, students $17. Ages 10-18 are free (children under 10 not admitted). Pay-what-you-wish admission is available Wednesdays from 1:30-5:30pm. Advance timed tickets are required.'
      },
      {
        question: 'What is the best time to visit the Frick Collection?',
        answer: 'Visit Monday or Wednesday morning between 10:30am-12pm for the quietest experience. Friday evenings are special with extended hours until 8:30pm. Avoid weekend afternoons when the intimate mansion galleries are busiest.'
      },
      {
        question: 'What art is at the Frick Collection?',
        answer: 'The Frick houses Old Master paintings including works by Vermeer, Rembrandt, Bellini, Holbein, and Goya. The collection also features European sculpture, decorative arts, and furniture displayed in the original Gilded Age mansion setting at 1 East 70th Street.'
      }
    ]
  },
  {
    slug: 'palais-des-beauxarts-de-lille-lille-france',
    name: 'Palais des Beaux-Arts de Lille',
    websiteUrl: 'https://pba.lille.fr/en/',
    ticketUrl: 'https://pba.lille.fr/en/Information',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '14:00', close: '18:00' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Wednesday-Sunday 10am-6pm, Monday 2pm-6pm. Closed Tuesdays. Reduced admission from 4:30pm Monday-Friday. France\'s second largest fine arts collection after the Louvre, housed in a magnificent 19th-century building at Place de la République.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 7,
        senior: 4,
        student: 4,
        child: 0,
        childMaxAge: 12,
        currency: 'EUR',
        notes: 'Full price €7, reduced €4. Free for under 12, Friends of Lille Museums, jobseekers, RSA recipients, disabled visitors and guides. Reduced admission from 4:30pm on weekdays. Lille City Pass includes free entry. Special Monday afternoon programs €8/€4.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['monday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '16:00-18:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['december'],
        seasonalNotes: 'Often overlooked by tourists focused on Paris. The relief plans of fortified towns in the basement are unique in France. Weekday visits offer the intimate experience this grand collection deserves.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2.5 hours'
      },
      tips: [
        'Don\'t miss the unique Vauban relief plans of fortified towns in the basement',
        'The collection of 40 Raphael drawings is one of Europe\'s finest',
        'Monday afternoon is the only weekday with afternoon-only hours (2-6pm)',
        'The Beau Café inside offers good coffee and light refreshments',
        'Allow 2-3 hours to appreciate France\'s second richest collection after the Louvre'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Palais des Beaux-Arts de Lille hours?',
        answer: 'The museum is open Wednesday-Sunday 10am-6pm, and Monday 2pm-6pm. It is closed on Tuesdays and major French holidays. Reduced admission is available from 4:30pm on weekdays.'
      },
      {
        question: 'How much are Palais des Beaux-Arts Lille tickets?',
        answer: 'Full admission is €7, reduced price €4 for students and seniors. Free for children under 12, Friends of the museum, jobseekers, and disabled visitors. Reduced rates apply from 4:30pm Monday-Friday.'
      },
      {
        question: 'What is the best time to visit Palais des Beaux-Arts?',
        answer: 'Visit weekday mornings between 10am-12pm for the quietest experience. Monday afternoons after 2pm and late afternoons from 4-6pm on any weekday are also peaceful times to explore France\'s second largest fine arts collection.'
      },
      {
        question: 'What art is at Palais des Beaux-Arts Lille?',
        answer: 'The collection includes masterpieces by Rubens, Van Dyck, Goya, Delacroix, and Rodin. Unique features include 40 Raphael drawings and the Vauban relief plans showing 17th-century fortified towns. Ceramics, sculptures, and a strong French painting collection round out the holdings.'
      }
    ]
  },
  {
    slug: 'kunsthaus-zurich',
    name: 'Kunsthaus Zürich',
    websiteUrl: 'https://www.kunsthaus.ch/en/',
    ticketUrl: 'https://tickets.kunsthaus.ch/en/home',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: false, reason: "New Year's Day - open" },
          { date: '2026-01-02', closed: false, reason: 'Open' },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tuesday-Sunday 10am-6pm, Thursday until 8pm. Closed Mondays. Free collection admission every Wednesday. Cash payments accepted again from January 2026. Chipperfield building extension opened 2021 with expanded gallery space.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 15,
        senior: 10,
        student: 10,
        child: 0,
        childMaxAge: 13,
        currency: 'CHF',
        notes: 'CHF 15 regular, CHF 10 reduced. Free for under 13 and members. Collection free every Wednesday; exhibitions +CHF 7 on free days. "Legi evening" Thursdays 6-8pm: students/teachers CHF 10. Audio guide included in admission price.',
        freeDay: 'Wednesday (collection only)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '17:00-18:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Switzerland\'s most important art museum. Free Wednesdays draw larger crowds. Thursday evenings until 8pm offer quieter viewing. The new Chipperfield extension houses major modern works.',
        avgVisitDuration: '2.5 hours',
        recommendedDuration: '3 hours'
      },
      tips: [
        'Free collection admission every Wednesday; arrive early as it draws crowds',
        'The Chipperfield extension (2021) houses the Bührle Collection and modern masterpieces',
        'Don\'t miss the largest Munch collection outside Norway and important Giacometti works',
        'Thursday evenings until 8pm offer a relaxed atmosphere with fewer visitors',
        'Audio guide in German, English, French, and Italian included in ticket price'
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
        question: 'What are the Kunsthaus Zürich hours?',
        answer: 'Kunsthaus Zürich is open Tuesday-Sunday 10am-6pm, with extended hours until 8pm on Thursdays. The museum is closed Mondays. All buildings including the new Chipperfield extension follow the same hours.'
      },
      {
        question: 'How much is Kunsthaus Zürich admission?',
        answer: 'Regular admission is CHF 15, reduced CHF 10 for students and seniors. Free for children under 13. Collection admission is free every Wednesday, though temporary exhibitions cost an additional CHF 7.'
      },
      {
        question: 'What is the best time to visit Kunsthaus Zürich?',
        answer: 'Visit Tuesday or Thursday morning between 10-11am for the quietest experience. Free Wednesdays draw larger crowds. Thursday evenings from 6-8pm offer a more relaxed atmosphere with fewer visitors.'
      },
      {
        question: 'What art is at Kunsthaus Zürich?',
        answer: 'Switzerland\'s largest art museum features the world\'s most important Munch collection outside Norway, major Giacometti sculptures, and works by Monet, Picasso, and Chagall. The new Chipperfield extension houses the Bührle Collection of Impressionist masterpieces.'
      }
    ]
  },
  {
    slug: 'groeningemuseum',
    name: 'Groeningemuseum',
    websiteUrl: 'https://www.museabrugge.be/en/visit/locations/groeningemuseum',
    ticketUrl: 'https://www.museabrugge.be/en/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '09:30', close: '17:00' },
          wednesday: { open: '09:30', close: '17:00' },
          thursday: { open: '09:30', close: '17:00' },
          friday: { open: '09:30', close: '17:00' },
          saturday: { open: '09:30', close: '17:00' },
          sunday: { open: '09:30', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-04-06', closed: false, reason: 'Easter Monday - open' },
          { date: '2026-05-25', closed: false, reason: 'Whit Monday - open' }
        ],
        notes: 'Open Tuesday-Sunday 9:30am-5pm, last entry 4:30pm. Closed Mondays. Exceptionally open Easter Monday and Whit Monday. Home to the finest collection of Flemish Primitive paintings including Jan van Eyck\'s Madonna with Canon van der Paele.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 14,
        senior: 12,
        student: 12,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Adults €14, reduced €12. Free for under 18. Musea Brugge Card (72-hour pass) includes all Bruges municipal museums. Museum Card and OKV Card accepted. Advance online booking recommended during peak season.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate to High',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['09:30-10:30', '15:30-17:00'],
        worstTimes: ['10:30-13:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'april'],
        seasonalNotes: 'Bruges is a major tourist destination. Summer and spring holidays bring heavy crowds. The intimate galleries housing Flemish Primitives can feel cramped on busy days. Early morning or late afternoon visits recommended.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Book online in advance during summer and holiday periods',
        'Arrive at 9:30am opening for the best viewing of Jan van Eyck masterpieces',
        'The Musea Brugge Card covers multiple museums if visiting for several days',
        'Don\'t miss Hans Memling and Hugo van der Goes works alongside the van Eycks',
        'Late afternoon from 3:30pm onward is quieter as tour groups leave'
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
        question: 'What are the Groeningemuseum Bruges hours?',
        answer: 'The Groeningemuseum is open Tuesday-Sunday 9:30am-5pm, with last entry at 4:30pm. The museum is closed on Mondays, New Year\'s Day, and Christmas Day. It remains open on Easter Monday and Whit Monday.'
      },
      {
        question: 'How much are Groeningemuseum tickets?',
        answer: 'Adult admission is €14, reduced €12 for seniors and students. Free for visitors under 18. The Musea Brugge Card (72-hour pass) includes the Groeningemuseum and all other municipal museums in Bruges.'
      },
      {
        question: 'What is the best time to visit Groeningemuseum?',
        answer: 'Visit at opening time (9:30am) on Tuesday or Wednesday for the quietest experience. Late afternoon from 3:30-5pm is also peaceful as tour groups depart. Avoid summer weekends and Belgian school holidays.'
      },
      {
        question: 'What art is at the Groeningemuseum?',
        answer: 'The museum houses the world\'s finest collection of Flemish Primitive paintings, including Jan van Eyck\'s Madonna with Canon van der Paele. Works by Hans Memling, Hugo van der Goes, and Hieronymus Bosch are also displayed alongside later Flemish and Belgian art.'
      }
    ]
  },
  {
    slug: 'gallerie-dell-accademia-venice',
    name: 'Gallerie dell\'Accademia',
    websiteUrl: 'https://www.gallerieaccademia.it/en/',
    ticketUrl: 'https://www.gallerieaccademia.it/en/admission-information',
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
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday-Sunday 9am-7pm, ticket office closes 6pm. Closed Mondays. Free admission first Sunday of each month (no reservation needed, first-come first-served). Note: Room II closed January 19-February 18, 2026 for works. Houses five centuries of Venetian painting.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 15,
        senior: 15,
        student: 2,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Full price €15 (includes any temporary exhibitions). EU citizens 18-25: €2. Free for under 18. Online booking fee €1.50. "Arteritivo" Fridays 5:15-7pm: €10 for ages 26-35. "Together" group rate (10-25 people): €12. Free first Sunday of each month. Dorsoduro Museum Mile combined ticket: €12.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      crowdData: {
        overall: 'High',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['09:00-10:00', '17:00-19:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['november', 'january', 'february'],
        worstMonths: ['july', 'august', 'april', 'may'],
        seasonalNotes: 'Venice\'s most important painting collection draws constant crowds. Free first Sundays are extremely busy. Carnevale and Biennale periods add significant visitor numbers. Late afternoon visits recommended for quieter viewing.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2.5 hours'
      },
      tips: [
        'Book timed tickets online to skip the queue; €1.50 booking fee is worth it',
        'Visit late afternoon (5-7pm) when tour groups have left',
        'Don\'t miss Giorgione\'s The Tempest and Veronese\'s massive Feast in the House of Levi',
        'Take vaporetto Line 1 or 2 to Accademia stop for direct access',
        'The Dorsoduro Museum Mile ticket combines Accademia with Palazzo Grassi and Punta della Dogana'
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
        question: 'What are the Gallerie dell\'Accademia Venice hours?',
        answer: 'The Gallerie dell\'Accademia is open Tuesday-Sunday 9am-7pm, with the ticket office closing at 6pm. The museum is closed on Mondays, New Year\'s Day, May 1st, and Christmas Day.'
      },
      {
        question: 'How much are Gallerie dell\'Accademia tickets?',
        answer: 'Full admission is €15 including temporary exhibitions. EU citizens aged 18-25 pay just €2. Free for under 18. Online booking costs an additional €1.50 but is recommended to skip queues. Free first Sunday of each month.'
      },
      {
        question: 'What is the best time to visit Gallerie dell\'Accademia?',
        answer: 'Visit Tuesday or Wednesday at 9am opening or late afternoon from 5-7pm for the quietest experience. Avoid the free first Sundays which are extremely crowded. Winter months (November-February) offer the most peaceful visits.'
      },
      {
        question: 'What art is at Gallerie dell\'Accademia Venice?',
        answer: 'The museum houses the world\'s greatest collection of Venetian painting from the 14th-18th centuries, including masterpieces by Giorgione, Titian, Tintoretto, and Veronese. Highlights include Giorgione\'s The Tempest and Veronese\'s monumental Feast in the House of Levi.'
      }
    ]
  },
  {
    slug: 'musee-bonnat',
    name: 'Musée Bonnat-Helleu',
    websiteUrl: 'https://mbh.bayonne.fr/en/',
    ticketUrl: 'https://billetterie-mbh.bayonne.fr/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '12:00', close: '20:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open daily except Tuesdays 10am-6pm. Fridays 12pm-8pm. Closed Tuesdays. Seasonal hours: Nov 1-Apr 30 and May 1-Oct 31 have different admission rates. Fully reopened November 2025 after major renovation since 2011. Accessible to visitors with reduced mobility.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 8,
        senior: 6,
        student: 6,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Seasonal pricing varies (Nov-Apr and May-Oct periods). Reduced rates available. Free for under 18. Museum holds exceptional collection of Old Master drawings assembled by painter Léon Bonnat. Check website for current exhibition pricing.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Low',
        bestDays: ['monday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['14:00-15:00'],
        bestMonths: ['november', 'january', 'february', 'march'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Hidden gem in Basque Country rarely crowded. Summer brings tourists to Bayonne and Biarritz. Friday evening hours until 8pm offer quiet viewing. Recently reopened after 14-year renovation with modernized galleries.',
        avgVisitDuration: '1.5 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Friday evening hours (12pm-8pm) are ideal for avoiding any crowds',
        'The exceptional drawing collection rivals major European museums',
        'Combine with a walk through Bayonne\'s charming old town and the cathedral',
        'Recently renovated galleries (reopened November 2025) provide excellent viewing conditions',
        'Less crowded alternative to the Basque coast during summer months'
      ],
      tickets: {
        onlineRequired: false,
        walkUpAvailable: true,
        peakSeasonSurcharge: false
      }
    },
    faqs: [
      {
        question: 'What are the Musée Bonnat-Helleu hours?',
        answer: 'The Musée Bonnat-Helleu is open daily except Tuesdays from 10am-6pm. Fridays have special hours from 12pm-8pm. The museum is closed on major French holidays and underwent a major renovation, reopening in November 2025.'
      },
      {
        question: 'How much are Musée Bonnat-Helleu tickets?',
        answer: 'Adult admission is approximately €8, with reduced rates around €6 for seniors and students. Free for under 18. The museum has seasonal pricing with different rates for winter (Nov-Apr) and summer (May-Oct) periods.'
      },
      {
        question: 'What is the best time to visit Musée Bonnat-Helleu?',
        answer: 'Visit Monday, Wednesday, or Thursday morning for the quietest experience. Friday evening from 6-8pm is also peaceful. The museum is rarely crowded, making it a hidden gem in the Basque Country.'
      },
      {
        question: 'What art is at Musée Bonnat-Helleu?',
        answer: 'The museum houses an exceptional collection of Old Master drawings and paintings assembled by Bayonne-born painter Léon Bonnat. Works by Rubens, Rembrandt, Ingres, and El Greco are displayed in recently renovated galleries reopened after a 14-year restoration.'
      }
    ]
  },
  {
    slug: 'museum-boijmans-van-beuningen-rotterdam-netherland',
    name: 'Museum Boijmans Van Beuningen',
    websiteUrl: 'https://www.boijmans.nl/en/',
    ticketUrl: 'https://www.boijmans.nl/en/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '11:00', close: '17:00' },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '17:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-04-27', closed: false, reason: "King's Day - check hours" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'IMPORTANT: Main museum building closed for renovation until approximately 2028-2029. The Depot Boijmans Van Beuningen is open Tuesday-Sunday 11am-5pm and offers public access to 151,000 artworks in storage. Rooftop accessible during hours with admission ticket. Rooftop-only access Thursday-Saturday 5:15pm onwards.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 22.50,
        senior: 22.50,
        student: 22.50,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Depot admission €22.50. Museumpark Ticket €27.50 covers all Museumpark museums. Free for under 18, ICOM members, Museum Card holders. Rotterdam Welcome Card gives 25% discount. Restaurant Renilde open for lunch Tue-Sun; dinner Thu-Sat 6-11pm.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['11:00-12:00', '15:00-17:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'The Depot\'s unique open-storage concept attracts architecture and design enthusiasts. Rooftop offers 360-degree Rotterdam skyline views. Main museum renovation expected to complete 2028-2029 with construction starting late 2026.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2.5 hours'
      },
      tips: [
        'The main museum is closed; visit the Depot for open-storage access to 151,000 artworks',
        'Book rooftop-only evening access (Thu-Sat from 5:15pm) for stunning Rotterdam views',
        'The mirrored building designed by MVRDV is an architectural attraction itself',
        'Restaurant Renilde offers fine dining with views; dinner reservations recommended',
        'Museumpark Ticket gives access to five Rotterdam museums at a combined rate'
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
        question: 'Is Museum Boijmans Van Beuningen open?',
        answer: 'The main museum building is closed for major renovation until approximately 2028-2029. However, the Depot Boijmans Van Beuningen is open Tuesday-Sunday 11am-5pm, offering unique open-storage access to 151,000 artworks and a panoramic rooftop.'
      },
      {
        question: 'How much is Depot Boijmans admission?',
        answer: 'Depot admission is €22.50 for adults. Free for under 18 and Museum Card holders. The Museumpark Ticket (€27.50) includes the Depot plus four other Rotterdam museums. Rotterdam Welcome Card gives 25% discount.'
      },
      {
        question: 'What is the best time to visit Depot Boijmans?',
        answer: 'Visit Tuesday or Wednesday from 11am-12pm for the quietest experience. Thursday through Saturday evenings offer rooftop-only access from 5:15pm with spectacular Rotterdam skyline views at sunset.'
      },
      {
        question: 'What can you see at Depot Boijmans?',
        answer: 'The Depot is the world\'s first publicly accessible art storage facility, displaying 151,000 works across six floors. The mirrored MVRDV-designed building includes visible restoration studios, a rooftop forest garden, and Restaurant Renilde. Selected works rotate regularly.'
      }
    ]
  }
];

async function addMuseumHours() {
  console.log('Adding museum hours data - Batch 10...');

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

  console.log('Batch 10 complete!');
  await prisma.$disconnect();
}

addMuseumHours();
