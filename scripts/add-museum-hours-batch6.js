const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'saint-louis-art-museum-st-louis-mo-us',
    name: 'Saint Louis Art Museum',
    websiteUrl: 'https://www.slam.org/',
    ticketUrl: 'https://www.slam.org/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday to Sunday 10am-5pm. Friday late hours until 9pm. General admission always free. Special exhibitions free on Fridays.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'General admission always free. Special exhibitions may charge $12-20, but are free on Fridays. Located in Forest Park.',
        freeDay: 'Every day (special exhibitions free on Fridays)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer and weekends are busier. Friday evenings are excellent for a quieter visit.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'General admission is always free',
        'Special exhibitions are free on Fridays',
        'Friday late hours until 9pm',
        'Located in beautiful Forest Park',
        'Parking nearby is $15 or free street parking available'
      ],
      tickets: {
        onlineUrl: 'https://www.slam.org/visit/',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Saint Louis Art Museum hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 5pm</strong>, with <strong>Friday late hours until 9pm</strong>. The museum is closed on Mondays, Thanksgiving, and Christmas Day.'
      },
      {
        question: 'Is the Saint Louis Art Museum free?',
        answer: 'Yes, <strong>general admission is always free</strong>. The museum is "Dedicated to Art and Free to All." Special exhibitions may charge $12-20, but are <strong>free on Fridays</strong>.'
      },
      {
        question: 'What is the best time to visit the Saint Louis Art Museum?',
        answer: '<strong>Weekday mornings</strong> are quietest. <strong>Friday evenings</strong> until 9pm offer extended hours with free special exhibition access and fewer crowds than daytime.'
      },
      {
        question: 'How long should I spend at the Saint Louis Art Museum?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. The collection spans five millennia and six continents, housed in a beautiful Beaux-Arts building in Forest Park.'
      }
    ]
  },
  {
    slug: 'ashmolean-museum-oxford-uk',
    name: 'Ashmolean Museum',
    websiteUrl: 'https://www.ashmolean.org/',
    ticketUrl: 'https://www.ashmolean.org/tickets',
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
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10am-5pm (last entry 4:45pm). Free admission to permanent collection. Special exhibitions may require timed tickets.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent collection. No booking required for general admission. Special exhibitions may have separate fees and timed entry.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Summer and Oxford term-time weekends are busiest. Weekday mornings offer the quietest experience.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Free admission, no booking required',
        'Founded in 1683, the world\'s first public museum',
        'Book ahead for special exhibitions during busy periods',
        'Located on Beaumont Street in central Oxford',
        'Excellent collection spanning Egyptian mummies to contemporary art'
      ],
      tickets: {
        onlineUrl: 'https://www.ashmolean.org/tickets',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Ashmolean Museum hours?',
        answer: 'The Ashmolean is open <strong>daily from 10am to 5pm</strong> (last entry 4:45pm). The museum is closed on December 24-26.'
      },
      {
        question: 'Is the Ashmolean Museum free?',
        answer: 'Yes, <strong>admission to the Ashmolean is free</strong> and no booking is required for the permanent collection. Special exhibitions may have separate entry fees and timed tickets.'
      },
      {
        question: 'What is the best time to visit the Ashmolean Museum?',
        answer: '<strong>Weekday mornings</strong> right at 10am opening are quietest. Late afternoons (after 3pm) also tend to have fewer visitors. Avoid weekends during Oxford term time.'
      },
      {
        question: 'How long should I spend at the Ashmolean Museum?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to explore the highlights. Founded in 1683, it\'s the world\'s first public museum, with collections spanning Egyptian antiquities to Pre-Raphaelite paintings.'
      }
    ]
  },
  {
    slug: 'brooklyn-museum',
    name: 'Brooklyn Museum',
    websiteUrl: 'https://www.brooklynmuseum.org/',
    ticketUrl: 'https://www.brooklynmuseum.org/visit/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '18:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2027-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open Wednesday to Sunday 11am-6pm. Closed Monday and Tuesday. First Saturdays feature special evening events on select months.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        childMaxAge: 19,
        currency: 'USD',
        notes: 'Suggested contribution (pay what you can). Under 19 always free. Special exhibitions require separate timed tickets at set prices.',
        freeDay: 'Every day (suggested contribution)',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['11:00-13:00', '16:00-18:00'],
        worstTimes: ['13:00-15:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'First Saturdays can be very crowded. Weekdays are generally quieter than weekends.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'General admission is pay-what-you-wish',
        'Under 19 always free',
        'First Saturdays feature special evening programming',
        'Combine with a visit to the Brooklyn Botanic Garden next door',
        'Special exhibitions have timed entry tickets'
      ],
      tickets: {
        onlineUrl: 'https://www.brooklynmuseum.org/visit/tickets',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Brooklyn Museum hours?',
        answer: 'The museum is open <strong>Wednesday to Sunday from 11am to 6pm</strong>. It is closed on Monday and Tuesday. Exit galleries 15 minutes before closing.'
      },
      {
        question: 'How much does the Brooklyn Museum cost?',
        answer: 'General admission is <strong>pay-what-you-wish</strong> (suggested contribution). <strong>Visitors under 19 always enter free</strong>. Special exhibitions require separate timed tickets at set prices.'
      },
      {
        question: 'What is the best time to visit the Brooklyn Museum?',
        answer: '<strong>Wednesday and Thursday</strong> tend to be quietest. Arrive at 11am opening or after 4pm for fewer crowds. Avoid First Saturdays if you prefer a calmer visit.'
      },
      {
        question: 'How long should I spend at the Brooklyn Museum?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum houses over 1.5 million works, including renowned Egyptian and American art collections, across five floors.'
      }
    ]
  },
  {
    slug: 'gem228ldegalerie-alte-meister-dresden-germany',
    name: 'Gemäldegalerie Alte Meister',
    websiteUrl: 'https://gemaeldegalerie.skd.museum/en/',
    ticketUrl: 'https://gemaeldegalerie.skd.museum/en/visit/',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" },
          { period: '2026-03-09 to 2026-03-20', closed: true, reason: 'Annual closure' }
        ],
        notes: 'Open Tuesday to Sunday 10am-6pm. Closed Mondays. Annual closure March 9-20, 2026. Ticket includes Porcelain Collection and Mathematisch-Physikalischer Salon.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 16,
        senior: 12,
        student: 12,
        child: 0,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Under 17 free. Ticket includes Porcelain Collection and Mathematisch-Physikalischer Salon. Groups of 10+ pay €12.50 per person.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '16:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Summer and Christmas markets season bring more tourists to Dresden. Weekday mornings are quietest.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Ticket includes three museums in one',
        'Under 17 enter free',
        'Located in the Zwinger Palace complex',
        'Home to Raphael\'s Sistine Madonna',
        'Closed annually in March for maintenance'
      ],
      tickets: {
        onlineUrl: 'https://gemaeldegalerie.skd.museum/en/visit/',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Gemäldegalerie Alte Meister Dresden hours?',
        answer: 'The gallery is open <strong>Tuesday to Sunday from 10am to 6pm</strong>. It is closed on Mondays. Note: the museum has an annual closure from March 9-20, 2026.'
      },
      {
        question: 'How much does the Gemäldegalerie Alte Meister cost?',
        answer: 'Admission is <strong>€16 for adults</strong> and <strong>€12 for students and seniors</strong>. Visitors under 17 enter free. The ticket includes access to the Porcelain Collection and Mathematisch-Physikalischer Salon.'
      },
      {
        question: 'What is the best time to visit the Gemäldegalerie Alte Meister?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. Avoid weekends and the Christmas market season (December) when Dresden is crowded with tourists.'
      },
      {
        question: 'How long should I spend at the Gemäldegalerie Alte Meister?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The collection includes Raphael\'s famous <strong>Sistine Madonna</strong>, Vermeer\'s Girl Reading a Letter, and masterworks by Cranach and Holbein.'
      }
    ]
  },
  {
    slug: 'national-gallery-oslo',
    name: 'National Gallery of Norway',
    websiteUrl: 'https://www.nasjonalmuseet.no/en/',
    ticketUrl: 'https://www.nasjonalmuseet.no/en/tickets/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Now part of the new National Museum at Vestbanen (opened 2022). Tuesday and Wednesday late hours until 8pm. Free admission on Sundays.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 200,
        senior: 120,
        student: 120,
        child: 0,
        childMaxAge: 18,
        currency: 'NOK',
        notes: 'Under 18 free. Free admission every Sunday. Ticket covers all museum buildings in Oslo.',
        freeDay: 'Every Sunday',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['sunday'],
        bestTimes: ['10:00-12:00', '17:00-20:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Sundays can be crowded due to free admission. Summer brings more tourists. Tuesday/Wednesday evenings are excellent.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Free admission every Sunday',
        'Home to Munch\'s The Scream',
        'Tuesday and Wednesday open until 8pm',
        'Located in the new National Museum at Vestbanen (opened 2022)',
        'Under 18 always free'
      ],
      tickets: {
        onlineUrl: 'https://www.nasjonalmuseet.no/en/tickets/',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the National Gallery of Norway hours?',
        answer: 'The museum is open <strong>Tuesday and Wednesday 10am-8pm</strong>, and <strong>Thursday to Sunday 10am-5pm</strong>. It is closed on Mondays. Now housed in the new National Museum at Vestbanen.'
      },
      {
        question: 'How much does the National Gallery of Norway cost?',
        answer: 'Admission is <strong>200 NOK for adults</strong> (about €17) and <strong>120 NOK for students/seniors</strong>. Under 18 enter free. <strong>Admission is free every Sunday</strong>.'
      },
      {
        question: 'What is the best time to visit the National Gallery of Norway?',
        answer: '<strong>Tuesday or Wednesday evenings</strong> until 8pm offer extended hours with smaller crowds. Avoid Sundays when free admission draws larger crowds. Weekday mornings are also good.'
      },
      {
        question: 'How long should I spend at the National Gallery of Norway?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum is home to Edvard Munch\'s iconic <strong>The Scream</strong> and <strong>Madonna</strong>, plus works by Cézanne and Manet.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 6...\n');

  for (const museum of museumsData) {
    try {
      await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          websiteUrl: museum.websiteUrl,
          ticketUrl: museum.ticketUrl,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${museum.name}`);
    } catch (error) {
      console.error(`✗ Failed: ${museum.name}`, error.message);
    }
  }

  console.log('\nBatch 6 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
