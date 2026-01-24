const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'russian-museum',
    name: 'State Russian Museum',
    websiteUrl: 'https://en.rusmuseum.ru/',
    ticketUrl: 'https://ticket.rusmuseum.ru/?lang=en',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '13:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" },
          { date: '2026-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Ticket office closes 30 minutes before the museum. Thursday has late hours from 1pm to 9pm.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 800,
        student: 400,
        child: 0,
        childMaxAge: 16,
        currency: 'RUB',
        notes: 'Price is for Mikhailovsky Palace and Benois Wing. All-inclusive tickets for additional buildings (Stroganov Palace, Marble Palace, Mikhailovsky Castle) cost 450-750 RUB.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'wednesday', 'friday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '16:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer months bring more tourists to St. Petersburg. Winter offers a quieter experience with fewer crowds.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours for main collection'
      },
      tips: [
        'Buy tickets online to skip the queue at the entrance',
        'Thursday evening (after 1pm) offers late hours until 9pm',
        'The museum spans multiple buildings across St. Petersburg',
        'Start with the Mikhailovsky Palace for the core collection',
        "Don't miss the Russian avant-garde collection including Malevich and Kandinsky"
      ],
      tickets: {
        onlineUrl: 'https://ticket.rusmuseum.ru/?lang=en',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the State Russian Museum hours?',
        answer: 'The museum is open <strong>Monday, Wednesday, Friday, Saturday, and Sunday from 10am to 6pm</strong>. Thursday has special late hours from <strong>1pm to 9pm</strong>. The museum is closed on Tuesdays. Ticket offices close 30 minutes before closing time.'
      },
      {
        question: 'How much does the State Russian Museum cost?',
        answer: 'Admission to the main building (Mikhailovsky Palace and Benois Wing) costs <strong>800 rubles for adults</strong> and <strong>400 rubles for students</strong>. Children under 16 enter free. All-inclusive tickets covering additional palace buildings range from 450-750 rubles.'
      },
      {
        question: 'What is the best time to visit the State Russian Museum?',
        answer: 'Visit on <strong>weekday mornings</strong> for the smallest crowds. Thursday evenings offer late hours until 9pm with fewer visitors. Avoid weekends and summer months when tourist traffic peaks in St. Petersburg.'
      },
      {
        question: 'How long should I spend at the State Russian Museum?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the main collection at the Mikhailovsky Palace. The museum holds over 400,000 works of Russian art from the 11th century to present, so art enthusiasts may want additional time.'
      }
    ]
  },
  {
    slug: 'cleveland-museum-of-art',
    name: 'Cleveland Museum of Art',
    websiteUrl: 'https://www.clevelandart.org/',
    ticketUrl: 'https://www.clevelandart.org/plan-your-visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', hours: { open: '10:00', close: '16:00' }, reason: 'Christmas Eve' },
          { date: '2026-12-31', hours: { open: '10:00', close: '16:00' }, reason: "New Year's Eve" }
        ],
        notes: 'Late nights on Wednesday and Friday until 9pm. Closed Mondays.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'General admission is always FREE. Some special exhibitions may have a separate charge.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '17:00-21:00'],
        worstTimes: ['13:00-16:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Weekday mornings and Wednesday/Friday evenings tend to be quieter. Weekend afternoons are busiest.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours for highlights'
      },
      tips: [
        'Admission is always free for the permanent collection',
        'Wednesday and Friday evenings stay open until 9pm',
        'The museum has its own parking garage accessible from Jeptha Drive',
        'Check for special exhibitions which may require tickets',
        'The collection spans 6,000 years with over 61,000 works'
      ],
      tickets: {
        onlineUrl: 'https://www.clevelandart.org/plan-your-visit',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Cleveland Museum of Art hours?',
        answer: 'The museum is open <strong>Tuesday, Thursday, Saturday, and Sunday from 10am to 5pm</strong>, and <strong>Wednesday and Friday from 10am to 9pm</strong>. The museum is closed on Mondays.'
      },
      {
        question: 'Is the Cleveland Museum of Art free?',
        answer: 'Yes, <strong>general admission is always free</strong>. This makes it one of the largest free art museums in the United States. Some special exhibitions may carry a separate ticket charge, available online or at the ticket center.'
      },
      {
        question: 'What is the best time to visit the Cleveland Museum of Art?',
        answer: '<strong>Weekday mornings</strong> right at opening offer the quietest experience. Wednesday and Friday evenings until 9pm are also excellent for avoiding crowds. Weekend afternoons tend to be the busiest times.'
      },
      {
        question: 'How long should I spend at the Cleveland Museum of Art?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the major highlights. The museum holds over 61,000 works spanning 6,000 years, so art enthusiasts could easily spend a full day exploring the extensive collection.'
      }
    ]
  },
  {
    slug: 'kunsthistorisches-museum',
    name: 'Kunsthistorisches Museum',
    websiteUrl: 'https://www.khm.at/en/',
    ticketUrl: 'https://shop.khm.at/en/tickets/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true, seasonalNote: 'Open daily June-August' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { period: 'June-August', notes: 'Open daily including Mondays 10am-6pm, Thursdays until 9pm' }
        ],
        notes: 'Open daily June through August. September through May closed on Mondays. Thursday late hours until 9pm year-round. Last admission 60 minutes before closing.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 21,
        senior: 18,
        seniorAge: 65,
        student: 18,
        studentMaxAge: 25,
        child: 0,
        childMaxAge: 19,
        currency: 'EUR',
        notes: 'Children and adolescents under 19 enter free. Reduced rates for students under 25 and seniors 65+.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '17:00-18:00'],
        worstTimes: ['11:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Summer and the Christmas season bring the most visitors. Weekday mornings near opening are optimal.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3 hours minimum'
      },
      tips: [
        'Buy tickets online to skip the queue',
        'Thursday evenings until 9pm are less crowded',
        'Children under 19 enter free',
        'The 7 Museums Annual Pass covers unlimited visits to 7 Vienna museums',
        'Allow at least 3 hours to explore the extensive collection'
      ],
      tickets: {
        onlineUrl: 'https://shop.khm.at/en/tickets/',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Kunsthistorisches Museum hours?',
        answer: 'From September to May, open <strong>Tuesday to Sunday 10am to 6pm</strong> (Thursdays until 9pm), closed Mondays. From <strong>June to August, open daily</strong> 10am to 6pm (Thursdays until 9pm). Last admission is 60 minutes before closing.'
      },
      {
        question: 'How much does the Kunsthistorisches Museum cost?',
        answer: 'Admission is <strong>€21 for adults</strong> and <strong>€18 for students under 25 and seniors 65+</strong>. Children and adolescents under 19 enter free. Tickets are valid indefinitely from purchase date.'
      },
      {
        question: 'What is the best time to visit the Kunsthistorisches Museum?',
        answer: '<strong>Weekday mornings</strong> close to opening offer the quietest experience. Thursday evenings until 9pm are excellent for avoiding crowds. Avoid weekends and summer months for a more peaceful visit.'
      },
      {
        question: 'How long should I spend at the Kunsthistorisches Museum?',
        answer: 'Plan for at least <strong>3 hours</strong> to see the major highlights. The museum houses over 4,000 paintings and 20,000 decorative objects, so thorough exploration requires a full day or multiple visits.'
      }
    ]
  },
  {
    slug: 'mfa-boston',
    name: 'Museum of Fine Arts, Boston',
    websiteUrl: 'https://www.mfa.org/',
    ticketUrl: 'https://www.mfa.org/tickets',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '22:00' },
          friday: { open: '10:00', close: '22:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-04-20', closed: true, reason: "Patriots' Day" },
          { date: '2026-07-04', closed: true, reason: "Fourth of July" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Late nights Thursday and Friday until 10pm. Closed Tuesdays. Last entry 30 minutes before closing.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 27,
        senior: 27,
        student: 27,
        child: 10,
        childMinAge: 7,
        childMaxAge: 17,
        childFreeMaxAge: 6,
        currency: 'USD',
        notes: 'Children 6 and under free. Pay-what-you-wish every third Thursday after 5pm ($5 minimum). Military and veterans plus up to 5 guests free with ID.',
        freeDay: 'Third Thursday after 5pm (pay-what-you-wish)',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['monday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '19:00-22:00'],
        worstTimes: ['12:00-16:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer and school holidays bring more visitors. Thursday and Friday evenings after 5pm are typically quieter.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours for highlights'
      },
      tips: [
        'Thursday and Friday evenings stay open until 10pm',
        'Every third Thursday after 5pm is pay-what-you-wish ($5 minimum)',
        'Military and veterans get free admission with ID (up to 5 guests)',
        'Bank of America cardholders get free admission first weekend of each month',
        'Book tickets in advance to guarantee entry'
      ],
      tickets: {
        onlineUrl: 'https://www.mfa.org/tickets',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Museum of Fine Arts Boston hours?',
        answer: 'The museum is open <strong>Monday, Wednesday, Saturday, and Sunday from 10am to 5pm</strong>, and <strong>Thursday and Friday from 10am to 10pm</strong>. The museum is closed on Tuesdays. Last entry is 30 minutes before closing.'
      },
      {
        question: 'How much does the Museum of Fine Arts Boston cost?',
        answer: 'Admission is <strong>$27 for adults</strong> and <strong>$10 for children ages 7-17</strong>. Children 6 and under enter free. Pay-what-you-wish admission is available every third Thursday after 5pm with a $5 minimum.'
      },
      {
        question: 'What is the best time to visit the MFA Boston?',
        answer: '<strong>Weekday mornings</strong> right at opening offer the quietest experience. Thursday and Friday evenings until 10pm are excellent for avoiding crowds since most visitors come during daytime hours.'
      },
      {
        question: 'How long should I spend at the Museum of Fine Arts Boston?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the major highlights. The MFA holds one of the most comprehensive art collections in the Americas, so serious art lovers may want additional time to explore.'
      }
    ]
  },
  {
    slug: 'tate-britain',
    name: 'Tate Britain',
    websiteUrl: 'https://www.tate.org.uk/visit/tate-britain',
    ticketUrl: 'https://shop.tate.org.uk/exhibitions/now-booking',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2027-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open daily 10am to 6pm. Closed December 24-26 and January 1.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent collection. Temporary exhibitions require separate tickets. Tate Collective members (ages 16-25) get £5 exhibition tickets.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Summer and Christmas periods are busiest. Weekday mornings offer the quietest visiting experience.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours for highlights'
      },
      tips: [
        'Free admission to the permanent collection',
        'No need to book ahead for the free galleries',
        'Book tickets in advance for temporary exhibitions',
        'Tate Collective (ages 16-25) offers £5 exhibition tickets',
        'Take the Tate Boat between Tate Britain and Tate Modern'
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
        question: 'What are the Tate Britain hours?',
        answer: 'Tate Britain is open <strong>daily from 10am to 6pm</strong>. The gallery is closed on December 24-26 and January 1. No booking is required for the free permanent collection galleries.'
      },
      {
        question: 'Is Tate Britain free?',
        answer: 'Yes, <strong>admission to Tate Britain is free</strong>. You can visit the permanent collection galleries without booking. Temporary exhibitions require separate tickets which vary in price.'
      },
      {
        question: 'What is the best time to visit Tate Britain?',
        answer: '<strong>Weekday mornings</strong> close to opening (10am) offer the quietest experience. Late afternoons between 4pm and 6pm are also good. Avoid weekends and summer months for smaller crowds.'
      },
      {
        question: 'How long should I spend at Tate Britain?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights of British art from 1500 to the present. The collection includes major works by Turner, Constable, and the Pre-Raphaelites, plus contemporary British artists.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 2...\n');

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

  console.log('\nBatch 2 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
