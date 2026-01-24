const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'philadelphia-museum-of-art',
    name: 'Philadelphia Museum of Art',
    websiteUrl: 'https://philamuseum.org/',
    ticketUrl: 'https://philamuseum.org/visit/admission',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: null, close: null, closed: true },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '20:45' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Thursday to Monday, 10am-5pm. Friday late hours until 8:45pm. Closed Tuesday and Wednesday.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 30,
        senior: 30,
        student: 14,
        child: 0,
        childMaxAge: 18,
        currency: 'USD',
        notes: 'Children 18 and under free. Tickets valid for 2 consecutive days including Rodin Museum. Pay-what-you-wish on first Sunday of month and Fridays 5-8:45pm.',
        freeDay: 'First Sunday of month, Fridays 5pm-8:45pm (pay-what-you-wish)',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['thursday', 'monday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '17:00-20:00'],
        worstTimes: ['12:00-16:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer and holiday periods are busiest. Friday evenings are excellent for a quieter visit.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Tickets are valid for 2 consecutive days including the Rodin Museum',
        'Pay-what-you-wish on Fridays 5-8:45pm and first Sunday of month',
        'PA ACCESS & EBT cardholders receive free admission',
        'Run the famous Rocky Steps outside the main entrance',
        'Advance reservations strongly recommended'
      ],
      tickets: {
        onlineUrl: 'https://philamuseum.org/visit/admission',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Philadelphia Museum of Art hours?',
        answer: 'The museum is open <strong>Thursday to Monday from 10am to 5pm</strong>, with <strong>Friday late hours until 8:45pm</strong>. The museum is closed on Tuesdays and Wednesdays.'
      },
      {
        question: 'How much does the Philadelphia Museum of Art cost?',
        answer: 'Admission is <strong>$30 for adults</strong> and <strong>$14 for students with ID</strong>. Children 18 and under enter free. Pay-what-you-wish admission is available on the first Sunday of each month and Friday evenings from 5pm to 8:45pm.'
      },
      {
        question: 'What is the best time to visit the Philadelphia Museum of Art?',
        answer: '<strong>Weekday mornings</strong> right at 10am opening are quietest. <strong>Friday evenings</strong> after 5pm offer pay-what-you-wish admission and smaller crowds than daytime hours.'
      },
      {
        question: 'How long should I spend at the Philadelphia Museum of Art?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum houses over 240,000 works spanning 2,000 years. Your ticket includes same-day or next-day admission to the Rodin Museum.'
      }
    ]
  },
  {
    slug: 'tate-modern-london-uk',
    name: 'Tate Modern',
    websiteUrl: 'https://www.tate.org.uk/visit/tate-modern',
    ticketUrl: 'https://shop.tate.org.uk/exhibitions/now-booking',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '21:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10am-6pm. Friday and Saturday late nights until 9pm. Closed December 24-26.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent collection and many exhibitions. Temporary exhibitions may require separate tickets. Tate Collective (16-25) offers £5 exhibition tickets.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Very Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '19:00-21:00'],
        worstTimes: ['12:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'One of London\'s most visited museums. Friday and Saturday evenings are excellent for avoiding daytime crowds.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Admission is free to the permanent collection',
        'Friday and Saturday evenings stay open until 9pm',
        'Visit the viewing level for free panoramic views of London',
        'Take the Tate Boat between Tate Modern and Tate Britain',
        'Book ahead for temporary exhibitions'
      ],
      tickets: {
        onlineUrl: 'https://shop.tate.org.uk/exhibitions/now-booking',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Tate Modern hours?',
        answer: 'Tate Modern is open <strong>daily from 10am to 6pm</strong>, with <strong>Friday and Saturday late nights until 9pm</strong>. The gallery is closed on December 24-26.'
      },
      {
        question: 'Is Tate Modern free?',
        answer: 'Yes, <strong>admission to Tate Modern is free</strong>. The permanent collection galleries spanning seven floors are always free to enter. Some temporary exhibitions require separate paid tickets.'
      },
      {
        question: 'What is the best time to visit Tate Modern?',
        answer: '<strong>Weekday mornings</strong> right at 10am opening are quietest. <strong>Friday and Saturday evenings</strong> (until 9pm) offer a more relaxed experience with fewer visitors than daytime hours.'
      },
      {
        question: 'How long should I spend at Tate Modern?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to explore the highlights. The museum houses major works by Picasso, Dalí, Warhol, and Rothko across seven floors in the converted Bankside Power Station.'
      }
    ]
  },
  {
    slug: 'st228del-frankfurt-am-main-germany',
    name: 'Städel Museum',
    websiteUrl: 'https://www.staedelmuseum.de/en/',
    ticketUrl: 'https://www.staedelmuseum.de/en/tickets',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tuesday to Sunday 10am-6pm. Thursday late hours until 9pm. Tuesday Special: €9 admission from 3-6pm.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 16,
        senior: 16,
        student: 14,
        child: 0,
        childMaxAge: 12,
        currency: 'EUR',
        notes: 'Children under 12 free. Under 18 free when accompanied by adult. Tuesday Special: €9 from 3-6pm. Frankfurt-Pass holders pay €1.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '17:00-18:00'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Special exhibitions can draw larger crowds. The Tuesday Special discount makes Tuesday afternoons busier.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Tuesday Special offers €9 admission from 3-6pm',
        'Thursday late hours until 9pm',
        'Children and teens under 18 enter free with an adult',
        'The underground Garden Halls house modern and contemporary art',
        'Located on the Museumsufer (Museum Embankment) along the Main river'
      ],
      tickets: {
        onlineUrl: 'https://www.staedelmuseum.de/en/tickets',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Städel Museum hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 6pm</strong>, with <strong>Thursday late hours until 9pm</strong>. The museum is closed on Mondays.'
      },
      {
        question: 'How much does the Städel Museum cost?',
        answer: 'Admission is <strong>€16 for adults</strong>. Children under 12 enter free, and visitors under 18 are free when accompanied by an adult. The <strong>Tuesday Special offers €9 admission from 3-6pm</strong>.'
      },
      {
        question: 'What is the best time to visit the Städel Museum?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. Thursday evenings until 9pm offer extended hours with smaller crowds. Tuesday afternoons can be busier due to the discounted admission.'
      },
      {
        question: 'How long should I spend at the Städel Museum?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum spans 700 years of European art from Dürer and Vermeer to Monet and Picasso, including underground galleries for contemporary works.'
      }
    ]
  },
  {
    slug: 'palazzo-pitti',
    name: 'Palazzo Pitti',
    websiteUrl: 'https://www.uffizi.it/en/pitti-palace',
    ticketUrl: 'https://www.uffizi.it/en/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '08:15', close: '18:30' },
          wednesday: { open: '08:15', close: '18:30' },
          thursday: { open: '08:15', close: '18:30' },
          friday: { open: '08:15', close: '18:30' },
          saturday: { open: '08:15', close: '18:30' },
          sunday: { open: '08:15', close: '18:30' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday to Sunday 8:15am-6:30pm. Last admission one hour before closing. Closed Mondays, January 1, and December 25.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 16,
        senior: 16,
        student: 2,
        studentNote: 'EU students 18-25',
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. EU students 18-25 pay €2. Combined ticket with Uffizi and Boboli Gardens available. Free first Sunday of month (expect crowds).',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['08:15-10:00', '16:00-18:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['april', 'may', 'june', 'july', 'august'],
        seasonalNotes: 'Very busy during peak tourist season (April-September). First Sunday free admission days are extremely crowded.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Arrive early at 8:15am to beat the crowds',
        'Combined ticket with Uffizi valid for 5 consecutive days',
        'Under 18 and EU students 18-25 get free or reduced admission',
        'First Sunday of month is free but extremely crowded',
        'Cross the Ponte Vecchio from central Florence to reach the palace'
      ],
      tickets: {
        onlineUrl: 'https://www.uffizi.it/en/tickets',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Palazzo Pitti hours?',
        answer: 'Palazzo Pitti is open <strong>Tuesday to Sunday from 8:15am to 6:30pm</strong>. Last admission is one hour before closing. The palace is closed on Mondays, January 1, and December 25.'
      },
      {
        question: 'How much does Palazzo Pitti cost?',
        answer: 'Admission is <strong>€16 for adults</strong>. Visitors under 18 enter free, and EU students 18-25 pay just €2. A combined ticket with the Uffizi and Boboli Gardens is available for 5 consecutive days.'
      },
      {
        question: 'What is the best time to visit Palazzo Pitti?',
        answer: '<strong>Early morning at 8:15am opening</strong> offers the quietest experience. Late afternoon (after 4pm) also sees fewer visitors. Avoid the first Sunday of the month when free admission draws large crowds.'
      },
      {
        question: 'How long should I spend at Palazzo Pitti?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to explore the Palatine Gallery, Gallery of Modern Art, and other collections. Add extra time if visiting the adjacent Boboli Gardens.'
      }
    ]
  },
  {
    slug: 'alte-pinakothek',
    name: 'Alte Pinakothek',
    websiteUrl: 'https://www.pinakothek.de/en/alte-pinakothek',
    ticketUrl: 'https://www.pinakothek.de/en/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-05-01', closed: true, reason: 'May Day' },
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tuesday to Sunday 10am-6pm. Tuesday and Wednesday late hours until 8pm. Sunday admission only €1.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 9,
        senior: 6,
        student: 6,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. Sunday admission only €1 for everyone. Combined day ticket €12 covers Alte Pinakothek, Pinakothek der Moderne, Museum Brandhorst, and Sammlung Schack.',
        freeDay: null,
        sundaySpecial: '€1 admission on Sundays',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['sunday'],
        bestTimes: ['10:00-12:00', '17:00-18:00'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Sundays can be busy due to €1 admission. Weekday mornings are generally quietest.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Sunday admission is only €1',
        'Tuesday and Wednesday offer late hours until 8pm',
        'Combined day ticket (€12) covers 4 Munich museums',
        'Under 18 always free',
        'Currently also displays works from the closed Neue Pinakothek'
      ],
      tickets: {
        onlineUrl: 'https://www.pinakothek.de/en/visit',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Alte Pinakothek hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 6pm</strong>, with <strong>Tuesday and Wednesday late hours until 8pm</strong>. The museum is closed on Mondays.'
      },
      {
        question: 'How much does the Alte Pinakothek cost?',
        answer: 'Admission is <strong>€9 for adults</strong> and <strong>€6 for students and seniors</strong>. Children under 18 enter free. <strong>Sunday admission is only €1</strong> for everyone.'
      },
      {
        question: 'What is the best time to visit the Alte Pinakothek?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. Tuesday and Wednesday evenings until 8pm also offer a relaxed experience. Sundays can be crowded due to the €1 admission special.'
      },
      {
        question: 'How long should I spend at the Alte Pinakothek?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum houses one of the world\'s finest collections of Old Master paintings, including works by Dürer, Rubens, Rembrandt, and Raphael.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 4...\n');

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

  console.log('\nBatch 4 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
