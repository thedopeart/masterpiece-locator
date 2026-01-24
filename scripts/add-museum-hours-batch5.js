const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'budapest-museum-of-fine-arts-budapest-hungary',
    name: 'Budapest Museum of Fine Arts',
    websiteUrl: 'https://www.mfab.hu/',
    ticketUrl: 'https://www.mfab.hu/tickets/',
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
          { date: '2026-03-15', free: true, reason: 'Hungarian National Day' },
          { date: '2026-08-20', free: true, reason: 'St. Stephen\'s Day' },
          { date: '2026-10-23', free: true, reason: 'Hungarian National Day' }
        ],
        notes: 'Open Tuesday to Sunday 10am-6pm. Ticket office closes at 5pm. Second Friday of each month: extended hours 12pm-8pm. Free admission on March 15, August 20, and October 23.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 4200,
        senior: 2100,
        seniorAge: 70,
        student: 2100,
        child: 0,
        childMaxAge: 6,
        currency: 'HUF',
        notes: 'Children under 6 free. Budapest Card holders enter free. EU citizens over 70 free. Second Saturday of month: under 26 and families free.',
        freeDay: 'March 15, August 20, October 23',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Summer brings more tourists to Budapest. Free admission days (national holidays) are very crowded.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Buy tickets online to avoid queues',
        'Second Friday of month has late hours until 8pm',
        'Budapest Card includes free admission',
        'Located at Heroes\' Square in City Park',
        'Under 26 and families free on second Saturday of month'
      ],
      tickets: {
        onlineUrl: 'https://www.mfab.hu/tickets/',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Budapest Museum of Fine Arts hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 6pm</strong>. The ticket office closes at 5pm. On the second Friday of each month, hours are extended from 12pm to 8pm. Closed Mondays.'
      },
      {
        question: 'How much does the Budapest Museum of Fine Arts cost?',
        answer: 'Admission is <strong>4,200 HUF for adults</strong> (about €10) and <strong>2,100 HUF for students and seniors</strong>. Children under 6 and EU citizens over 70 enter free. Budapest Card holders also get free entry.'
      },
      {
        question: 'What is the best time to visit the Budapest Museum of Fine Arts?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. Early afternoon (around 3pm) is also good. Avoid national holidays (March 15, August 20, October 23) when free admission draws large crowds.'
      },
      {
        question: 'How long should I spend at the Budapest Museum of Fine Arts?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. The museum houses an impressive collection of European Old Masters including works by Raphael, El Greco, and Goya, plus Egyptian and Greek antiquities.'
      }
    ]
  },
  {
    slug: 'british-museum',
    name: 'British Museum',
    websiteUrl: 'https://www.britishmuseum.org/',
    ticketUrl: 'https://www.britishmuseum.org/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '20:30' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-04-03', note: 'No late opening (Good Friday)' }
        ],
        notes: 'Open daily 10am-5pm. Friday late opening until 8:30pm (except Good Friday). Great Court open until 5:30pm (8:30pm Fridays). Galleries begin clearing 10 minutes before closing.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent galleries. Special exhibitions require paid tickets (around £18). Book free timed entry online to guarantee access.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Very Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-17:00', '18:00-20:30'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'One of the world\'s most visited museums. Friday evenings are significantly quieter than daytime.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours minimum'
      },
      tips: [
        'Free admission but book timed entry online',
        'Friday late opening until 8:30pm is quietest',
        'Arrive right at 10am to beat crowds at the Rosetta Stone',
        'Pick up a free gallery map at the entrance',
        'The Reading Room in the Great Court is worth seeing'
      ],
      tickets: {
        onlineUrl: 'https://www.britishmuseum.org/visit',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the British Museum hours?',
        answer: 'The museum is open <strong>daily from 10am to 5pm</strong>, with <strong>Friday late opening until 8:30pm</strong>. The Great Court stays open until 5:30pm (8:30pm on Fridays). Closed December 24-26.'
      },
      {
        question: 'Is the British Museum free?',
        answer: 'Yes, <strong>admission to the British Museum is free</strong>. However, booking a free timed entry ticket online is recommended to guarantee access. Special exhibitions require paid tickets (around £18).'
      },
      {
        question: 'What is the best time to visit the British Museum?',
        answer: 'Arrive <strong>right at 10am opening</strong> to see popular galleries like the Rosetta Stone before crowds build. <strong>Friday evenings</strong> until 8:30pm offer the most relaxed visiting experience.'
      },
      {
        question: 'How long should I spend at the British Museum?',
        answer: 'Plan for at least <strong>3 hours</strong> to see the highlights. The museum holds over 8 million objects including the Rosetta Stone, Elgin Marbles, and Egyptian mummies. A full exploration could take days.'
      }
    ]
  },
  {
    slug: 'j-paul-getty-museum-los-angeles-ca-us',
    name: 'J. Paul Getty Museum',
    websiteUrl: 'https://www.getty.edu/',
    ticketUrl: 'https://www.getty.edu/visit/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:30' },
          wednesday: { open: '10:00', close: '17:30' },
          thursday: { open: '10:00', close: '17:30' },
          friday: { open: '10:00', close: '17:30' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '17:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday to Sunday. Saturday late hours until 8pm. Timed-entry reservation required (free). Getty Villa also available in Pacific Palisades (closed Tuesdays).',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'Free admission. Timed-entry reservation required. Parking $25 ($15 after 3pm, $10 after 6pm, free Saturdays after 6pm).',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-17:30'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer and holidays are busiest. The gardens and architecture are as popular as the art collection.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours including gardens'
      },
      tips: [
        'Free admission but timed-entry reservation required',
        'Saturday evenings until 8pm with free parking after 6pm',
        'Arrive early for easier parking and fewer crowds',
        'Take the tram up to the hilltop campus',
        'The gardens and architecture are must-sees'
      ],
      tickets: {
        onlineUrl: 'https://www.getty.edu/visit/',
        advanceRequired: true,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Getty Museum hours?',
        answer: 'The Getty Center is open <strong>Tuesday to Sunday from 10am to 5:30pm</strong>, with <strong>Saturday extended hours until 8pm</strong>. The museum is closed on Mondays.'
      },
      {
        question: 'Is the Getty Museum free?',
        answer: 'Yes, <strong>admission to the Getty is free</strong>. However, a timed-entry reservation is required and must be booked online. Parking costs $25 ($15 after 3pm, free on Saturdays after 6pm).'
      },
      {
        question: 'What is the best time to visit the Getty Museum?',
        answer: '<strong>Weekday mornings</strong> right at 10am offer the smallest crowds. <strong>Saturday evenings</strong> until 8pm are excellent with free parking after 6pm. Avoid summer weekends.'
      },
      {
        question: 'How long should I spend at the Getty Museum?',
        answer: 'Plan for at least <strong>3 hours</strong> to see both the art collection and the stunning gardens. The hilltop campus designed by Richard Meier features European paintings, sculptures, and decorative arts from medieval to modern times.'
      }
    ]
  },
  {
    slug: 'birmingham-museum-and-art-gallery-birmingham-uk',
    name: 'Birmingham Museum and Art Gallery',
    websiteUrl: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery',
    ticketUrl: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery/visit',
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
        notes: 'Open daily 10am-5pm. Last admission 4:45pm. Some galleries remain closed during ongoing renovations.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent collection. Some special exhibitions in Gas Hall may have an entry fee. Donations welcome.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'School holidays and weekends are busier. The Pre-Raphaelite gallery is the main draw.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Free admission to permanent collection',
        'Home to the world\'s largest Pre-Raphaelite collection',
        'Some galleries closed during ongoing renovations',
        'Located in Chamberlain Square in the city center',
        'Check current opening status before visiting'
      ],
      tickets: {
        onlineUrl: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery/visit',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Birmingham Museum and Art Gallery hours?',
        answer: 'The museum is open <strong>daily from 10am to 5pm</strong>. Last admission is at 4:45pm. The museum is closed on December 24-26. Some galleries may be closed during ongoing renovations.'
      },
      {
        question: 'Is Birmingham Museum and Art Gallery free?',
        answer: 'Yes, <strong>admission is free</strong> to the permanent collection. Some major exhibitions in the Gas Hall may have a separate entry fee. Donations are welcome.'
      },
      {
        question: 'What is the best time to visit Birmingham Museum and Art Gallery?',
        answer: '<strong>Weekday mornings</strong> are quietest. Monday through Wednesday tend to have fewer visitors than weekends. The Pre-Raphaelite gallery is the most popular section.'
      },
      {
        question: 'How long should I spend at Birmingham Museum and Art Gallery?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. The museum is famous for its <strong>Pre-Raphaelite collection</strong>, the largest in the world, including works by Rossetti, Burne-Jones, and Millais.'
      }
    ]
  },
  {
    slug: 'van-gogh-museum',
    name: 'Van Gogh Museum',
    websiteUrl: 'https://www.vangoghmuseum.nl/en',
    ticketUrl: 'https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '17:00' },
          tuesday: { open: '09:00', close: '17:00' },
          wednesday: { open: '09:00', close: '17:00' },
          thursday: { open: '09:00', close: '17:00' },
          friday: { open: '09:00', close: '21:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { open: '09:00', close: '18:00' }
        },
        exceptions: [],
        notes: 'Open daily 9am-5pm (Mon-Thu), 9am-9pm (Fri), 9am-6pm (Sat-Sun). Hours may vary during holidays and school vacations. Tickets only available online.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 25,
        senior: 25,
        student: 12.50,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free (ticket still required). Students receive 50% discount. Tickets only sold online at vangoghmuseum.nl or official resellers. Not included in I amsterdam City Card.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Very Popular',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['09:00-10:00', '16:00-17:00', '19:00-21:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['april', 'july', 'august'],
        seasonalNotes: 'One of the most popular museums in the Netherlands. Book tickets weeks in advance during peak season. Friday evenings until 9pm tend to be quieter.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Book tickets weeks in advance, especially in peak season',
        'Friday evenings until 9pm are less crowded',
        'Tickets only available online, not at the door',
        'Under 18 enter free but still need a ticket',
        'The museum is cashless'
      ],
      tickets: {
        onlineUrl: 'https://www.vangoghmuseum.nl/en/visit/tickets-and-ticket-prices',
        advanceRequired: true,
        advanceRecommended: true,
        sameDayAvailable: false
      }
    },
    faqs: [
      {
        question: 'What are the Van Gogh Museum hours?',
        answer: 'The museum is open <strong>Monday to Thursday 9am-5pm</strong>, <strong>Friday 9am-9pm</strong>, and <strong>Saturday-Sunday 9am-6pm</strong>. Hours may vary during holidays and school vacations.'
      },
      {
        question: 'How much does the Van Gogh Museum cost?',
        answer: 'Admission is <strong>€25 for adults</strong> and <strong>€12.50 for students</strong>. Visitors under 18 enter free but still require a ticket. All tickets must be purchased online in advance.'
      },
      {
        question: 'What is the best time to visit the Van Gogh Museum?',
        answer: '<strong>Arrive at 9am opening</strong> for the smallest crowds, or visit on <strong>Friday evenings</strong> until 9pm. Book tickets weeks in advance during summer and holidays. The period from 11am-1pm is busiest.'
      },
      {
        question: 'How long should I spend at the Van Gogh Museum?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to explore the collection. The museum houses over 200 Van Gogh paintings including <strong>Sunflowers</strong>, <strong>The Bedroom</strong>, and <strong>Almond Blossom</strong>, plus hundreds of drawings and letters.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 5...\n');

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

  console.log('\nBatch 5 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
