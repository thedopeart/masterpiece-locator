const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'nationalmuseum-stockholm-sweden',
    name: 'Nationalmuseum Stockholm',
    websiteUrl: 'https://www.nationalmuseum.se/en',
    ticketUrl: 'https://www.nationalmuseum.se/en/visit/admission-fees-and-tickets',
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
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tuesday to Sunday 10am-6pm. Thursday late hours until 8pm. Free admission Thursday 5-8pm. Under 20 always free.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 160,
        senior: 100,
        student: 100,
        child: 0,
        childMaxAge: 20,
        currency: 'SEK',
        notes: 'Under 20 always free. Free admission Thursday 5-8pm. Groups of 10+ pay 110 SEK per person.',
        freeDay: 'Thursday 5pm-8pm',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'friday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '17:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer brings more tourists to Stockholm. Thursday evenings during free hours can be busy.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Free admission Thursday 5-8pm',
        'Under 20 always enter free',
        'Thursday late hours until 8pm',
        'Sweden\'s national art and design museum',
        'Beautiful waterfront location on Blasieholmen'
      ],
      tickets: {
        onlineUrl: 'https://www.nationalmuseum.se/en/visit/admission-fees-and-tickets',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Nationalmuseum Stockholm hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 6pm</strong>, with <strong>Thursday late hours until 8pm</strong>. The museum is closed on Mondays.'
      },
      {
        question: 'How much does Nationalmuseum Stockholm cost?',
        answer: 'Admission is <strong>160 SEK for adults</strong> (about €14) and <strong>100 SEK for students/seniors</strong>. <strong>Under 20 always free</strong>. Free admission for everyone on Thursdays from 5-8pm.'
      },
      {
        question: 'What is the best time to visit Nationalmuseum Stockholm?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. Thursday evenings (5-8pm) offer free admission but can be busier. Summer months see more tourists.'
      },
      {
        question: 'How long should I spend at Nationalmuseum Stockholm?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. Sweden\'s national art and design museum houses works by Rembrandt, Rubens, and Swedish masters like Carl Larsson and Anders Zorn.'
      }
    ]
  },
  {
    slug: 'yale-centre-for-british-art-yale-university-new-ha',
    name: 'Yale Center for British Art',
    websiteUrl: 'https://britishart.yale.edu/',
    ticketUrl: 'https://britishart.yale.edu/hours-and-visitor-information',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '19:00', seasonalNote: 'Until 7pm Sept-June' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2027-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open Tuesday to Saturday 10am-5pm, Sunday 11am-5pm. Thursday late hours until 7pm (September-June only). Free admission.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'Free admission for all visitors. The largest collection of British art outside the UK.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'friday'],
        worstDays: ['saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'october'],
        seasonalNotes: 'Yale graduation (May) and reunion (October) weekends are busier. Generally a peaceful museum to visit.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '1.5-2 hours'
      },
      tips: [
        'Free admission for all visitors',
        'Largest collection of British art outside the UK',
        'Thursday late hours until 7pm (Sept-June)',
        'Designed by Louis Kahn, beautiful architecture',
        'Located on Chapel Street in downtown New Haven'
      ],
      tickets: {
        onlineUrl: 'https://britishart.yale.edu/hours-and-visitor-information',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Yale Center for British Art hours?',
        answer: 'The museum is open <strong>Tuesday to Saturday 10am-5pm</strong> and <strong>Sunday 11am-5pm</strong>. Thursday late hours until 7pm from September to June. Closed Mondays.'
      },
      {
        question: 'Is the Yale Center for British Art free?',
        answer: 'Yes, <strong>admission is completely free</strong> for all visitors. The museum houses the largest collection of British art outside the United Kingdom.'
      },
      {
        question: 'What is the best time to visit the Yale Center for British Art?',
        answer: '<strong>Weekday mornings</strong> are quietest. This is generally a peaceful museum with smaller crowds than major tourist destinations. Avoid Yale graduation and reunion weekends.'
      },
      {
        question: 'How long should I spend at the Yale Center for British Art?',
        answer: 'Plan for <strong>1.5 to 2 hours</strong> to explore the collection. The museum features paintings by Constable, Turner, and Gainsborough in a stunning Louis Kahn-designed building.'
      }
    ]
  },
  {
    slug: 'mus233e-fabre-montpellier-france',
    name: 'Musée Fabre',
    websiteUrl: 'https://www.museefabre.fr/',
    ticketUrl: 'https://www.museefabre.fr/informations-pratiques',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '18:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday to Sunday 11am-6pm. Closed Mondays. Free admission first Sunday of each month. Decorative arts section open weekends only 2-6pm.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 10,
        senior: 8,
        student: 8,
        child: 0,
        childMaxAge: 6,
        currency: 'EUR',
        notes: 'Under 6 free. Permanent collection ticket valid for 1 year with unlimited same-day visits. Free admission first Sunday of month.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['sunday'],
        bestTimes: ['11:00-13:00', '15:00-18:00'],
        worstTimes: ['14:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'First Sundays can be busier due to free admission. Summer brings tourists to southern France.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Free admission first Sunday of month',
        'Permanent collection ticket valid for one year',
        'Strong collection of Courbet and regional artists',
        'Near Corum tramway station',
        'The museum is cashless for large amounts'
      ],
      tickets: {
        onlineUrl: 'https://www.museefabre.fr/informations-pratiques',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Musée Fabre hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 11am to 6pm</strong>. It is closed on Mondays, New Year\'s Day, and Christmas Day.'
      },
      {
        question: 'How much does Musée Fabre cost?',
        answer: 'Admission is <strong>€10 for adults</strong> and <strong>€8 for students/seniors</strong>. Under 6 enter free. <strong>Free admission on the first Sunday of each month</strong>.'
      },
      {
        question: 'What is the best time to visit Musée Fabre?',
        answer: '<strong>Weekday mornings</strong> at 11am opening are quietest. Avoid the first Sunday of the month if you prefer smaller crowds. Summer brings more tourists to Montpellier.'
      },
      {
        question: 'How long should I spend at Musée Fabre?',
        answer: 'Plan for about <strong>2 hours</strong> to explore the collection. The museum is known for its outstanding collection of <strong>Courbet</strong> paintings and works by regional artists like Bazille and Cabanel.'
      }
    ]
  },
  {
    slug: 'pinacoteca-di-brera',
    name: 'Pinacoteca di Brera',
    websiteUrl: 'https://pinacotecabrera.org/en/',
    ticketUrl: 'https://pinacotecabrera.org/en/visit/entrances/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '08:30', close: '19:15' },
          wednesday: { open: '08:30', close: '19:15' },
          thursday: { open: '08:30', close: '19:15' },
          friday: { open: '08:30', close: '19:15' },
          saturday: { open: '08:30', close: '19:15' },
          sunday: { open: '08:30', close: '19:15' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tuesday to Sunday 8:30am-7:15pm. Last entrance 6pm. Free admission first Sunday of month (reservation required). Special evening openings available.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 15,
        senior: 10,
        student: 10,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. Milan residents free. Combined ticket with Palazzo Citterio €20. Free first Sunday of month (reservation required). Audioguide €5.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['08:30-10:00', '17:00-19:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['april', 'may', 'july', 'august'],
        seasonalNotes: 'Milan fashion weeks and summer bring more visitors. First Sundays are free but crowded.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Free first Sunday of month (reservation required)',
        'Under 18 and Milan residents enter free',
        'Arrive at 8:30am for the quietest experience',
        'Home to Raphael\'s Marriage of the Virgin',
        'Special evening openings until 11:15pm on select dates'
      ],
      tickets: {
        onlineUrl: 'https://pinacotecabrera.org/en/visit/entrances/',
        advanceRequired: true,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Pinacoteca di Brera hours?',
        answer: 'The gallery is open <strong>Tuesday to Sunday from 8:30am to 7:15pm</strong>. Last entrance is at 6pm. The museum is closed on Mondays, January 1, May 1, and December 25.'
      },
      {
        question: 'How much does the Pinacoteca di Brera cost?',
        answer: 'Admission is <strong>€15 for adults</strong> and <strong>€10 reduced</strong>. Under 18 and Milan residents enter free. <strong>Free admission first Sunday of month</strong> (reservation required).'
      },
      {
        question: 'What is the best time to visit the Pinacoteca di Brera?',
        answer: '<strong>Early morning at 8:30am</strong> when the gallery opens offers the quietest experience. Late afternoon (after 5pm) is also good. Avoid first Sundays when free admission draws crowds.'
      },
      {
        question: 'How long should I spend at the Pinacoteca di Brera?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. The collection includes Raphael\'s <strong>Marriage of the Virgin</strong>, Mantegna\'s <strong>Dead Christ</strong>, and masterworks by Caravaggio and Bellini.'
      }
    ]
  },
  {
    slug: 'mus233e-national-gustave-moreau-paris-france',
    name: 'Musée National Gustave Moreau',
    websiteUrl: 'https://musee-moreau.fr/en/',
    ticketUrl: 'https://musee-moreau.fr/en/buy-your-ticket',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
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
        notes: 'Open daily except Tuesday 10am-6pm (last admission 5:30pm). Free first Sunday of month. Ticket includes Musée Henner, valid 7 days.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 8,
        senior: 6,
        student: 6,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. EU under 26 free. Ticket includes Musée Jean-Jacques Henner, valid for 7 days. Free first Sunday of month.',
        freeDay: 'First Sunday of month',
        memberFree: true
      },
      crowdData: {
        overall: 'Low',
        bestDays: ['monday', 'wednesday', 'thursday'],
        worstDays: ['sunday'],
        bestTimes: ['10:00-12:00', '15:00-18:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'A hidden gem that rarely gets crowded. First Sundays may be slightly busier due to free admission.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1-1.5 hours'
      },
      tips: [
        'Hidden gem in the 9th arrondissement',
        'Free first Sunday of month',
        'Ticket includes Musée Henner nearby',
        'No elevator - three floors of stairs',
        'The artist\'s former home and studio'
      ],
      tickets: {
        onlineUrl: 'https://musee-moreau.fr/en/buy-your-ticket',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Musée Gustave Moreau hours?',
        answer: 'The museum is open <strong>daily except Tuesday from 10am to 6pm</strong> (last admission 5:30pm). It is closed on January 1, May 1, and December 25.'
      },
      {
        question: 'How much does the Musée Gustave Moreau cost?',
        answer: 'Admission is <strong>€8 for adults</strong> and <strong>€6 reduced</strong>. Under 18 and EU visitors under 26 enter free. <strong>Free first Sunday of month</strong>. Ticket includes Musée Henner.'
      },
      {
        question: 'What is the best time to visit the Musée Gustave Moreau?',
        answer: 'This museum rarely gets crowded, making it a peaceful visit any time. <strong>Weekday mornings</strong> are quietest. A true hidden gem in the 9th arrondissement.'
      },
      {
        question: 'How long should I spend at the Musée Gustave Moreau?',
        answer: 'Plan for <strong>1 to 1.5 hours</strong> to explore. The museum is the artist\'s former home and studio, displaying his fantastical <strong>Symbolist</strong> paintings including Jupiter and Semele and The Apparition.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 7...\n');

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

  console.log('\nBatch 7 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
