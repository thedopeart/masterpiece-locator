const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'gem228ldegalerie-berlin-germany',
    name: 'Gemäldegalerie, Berlin',
    websiteUrl: 'https://www.smb.museum/en/museums-institutions/gemaeldegalerie/',
    ticketUrl: 'https://www.smb.museum/en/museums-institutions/gemaeldegalerie/plan-your-visit/prices-tickets/',
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
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tuesday to Sunday 10am to 6pm. Closed Mondays. Closed December 24 and 31.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 14,
        senior: 7,
        student: 7,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Free for visitors under 18 and registered school classes. Museum Pass Berlin (€32) allows unlimited access to 30+ museums for 3 consecutive days.',
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
        seasonalNotes: 'Summer and Christmas periods bring more visitors. Weekday mornings are generally quietest.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Buy tickets online or get the Museum Pass Berlin for multiple museums',
        'Free admission for visitors under 18',
        'Located at the Kulturforum near Potsdamer Platz',
        'The collection spans European paintings from the 13th to 18th centuries',
        'Combine with a visit to the nearby Neue Nationalgalerie'
      ],
      tickets: {
        onlineUrl: 'https://www.smb.museum/en/museums-institutions/gemaeldegalerie/plan-your-visit/prices-tickets/',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Gemäldegalerie Berlin hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 6pm</strong>. It is closed on Mondays. The museum also closes on December 24 and December 31.'
      },
      {
        question: 'How much does the Gemäldegalerie Berlin cost?',
        answer: 'Admission is <strong>€14 for adults</strong> and <strong>€7 for students and seniors</strong>. Children and teens under 18 enter free. The Museum Pass Berlin (€32) covers 3 days of access to over 30 museums.'
      },
      {
        question: 'What is the best time to visit the Gemäldegalerie?',
        answer: '<strong>Weekday mornings</strong> right at opening (10am) offer the quietest experience. Tuesday through Thursday tend to be less crowded than weekends. Avoid summer months and the Christmas period for smaller crowds.'
      },
      {
        question: 'How long should I spend at the Gemäldegalerie?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the major highlights. The museum holds one of the world\'s finest collections of European paintings from the 13th to 18th centuries, including masterworks by Rembrandt, Vermeer, and Dürer.'
      }
    ]
  },
  {
    slug: 'thyssenbornemisza-museum-madrid-spain',
    name: 'Thyssen-Bornemisza Museum',
    websiteUrl: 'https://www.museothyssen.org/en',
    ticketUrl: 'https://www.museothyssen.org/en/visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '12:00', close: '16:00', note: 'Free admission' },
          tuesday: { open: '10:00', close: '18:30' },
          wednesday: { open: '10:00', close: '18:30' },
          thursday: { open: '10:00', close: '18:30' },
          friday: { open: '10:00', close: '18:30' },
          saturday: { open: '10:00', close: '20:30' },
          sunday: { open: '10:00', close: '18:30' }
        },
        exceptions: [],
        notes: 'Monday free admission from noon to 4pm. Saturday extended hours until 8:30pm during temporary exhibitions. Free admission also available Saturdays 9pm-11pm.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 14,
        senior: 10,
        seniorAge: 65,
        student: 10,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Audio guide costs €5 extra. Free for under 18, unemployed, disabled (33%+), and teachers with ITIC card.',
        freeDay: 'Mondays 12pm-4pm, Saturdays 9pm-11pm',
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['april', 'july', 'august'],
        seasonalNotes: 'Easter and summer months bring more visitors. Part of Madrid\'s Golden Triangle of Art with the Prado and Reina Sofía.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Visit on Monday from noon to 4pm for free admission',
        'Saturday evenings (9pm-11pm) also offer free entry',
        'Part of the Golden Triangle of Art with Prado and Reina Sofía',
        'The collection spans 800 years of European art',
        'Get the Paseo del Arte ticket for discounted entry to all three major museums'
      ],
      tickets: {
        onlineUrl: 'https://www.museothyssen.org/en/visit',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Thyssen-Bornemisza Museum hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 6:30pm</strong>, with extended hours on Saturday until 8:30pm. <strong>Monday hours are noon to 4pm with free admission</strong>.'
      },
      {
        question: 'How much does the Thyssen-Bornemisza Museum cost?',
        answer: 'General admission is <strong>€14 for adults</strong>, <strong>€10 for students and seniors 65+</strong>. Children under 18 enter free. Free admission is available Mondays from noon to 4pm and Saturdays from 9pm to 11pm.'
      },
      {
        question: 'What is the best time to visit the Thyssen-Bornemisza Museum?',
        answer: '<strong>Weekday mornings</strong> right at 10am opening offer the quietest experience. Monday afternoons can be busy due to free admission. Consider the Saturday late evening hours (9pm-11pm) for a free, crowd-free visit.'
      },
      {
        question: 'How long should I spend at the Thyssen-Bornemisza Museum?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. The collection spans 800 years of art history with nearly 1,000 works, from medieval paintings to 20th-century masterpieces by Picasso, Dalí, and Hopper.'
      }
    ]
  },
  {
    slug: 'moma',
    name: 'Museum of Modern Art (MoMA)',
    websiteUrl: 'https://www.moma.org/',
    ticketUrl: 'https://visit.moma.org/select',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:30', close: '17:30' },
          tuesday: { open: '10:30', close: '17:30' },
          wednesday: { open: '10:30', close: '17:30' },
          thursday: { open: '10:30', close: '17:30' },
          friday: { open: '10:30', close: '20:30' },
          saturday: { open: '10:30', close: '17:30' },
          sunday: { open: '10:30', close: '17:30' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open daily 10:30am to 5:30pm. Fridays open late until 8:30pm. Saturday and Sunday mornings (9:30-10:30am) reserved for members only.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 30,
        senior: 22,
        seniorAge: 65,
        student: 17,
        child: 0,
        childMaxAge: 16,
        currency: 'USD',
        notes: 'Free for children 16 and under (ticket required). Free for NY State residents every Friday 5:30-8:30pm. Visitors with disabilities pay $22. Museums for All (SNAP/WIC) provides free admission.',
        freeDay: 'Friday 5:30pm-8:30pm for NY State residents',
        memberFree: true
      },
      crowdData: {
        overall: 'Very Popular',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['11:30-12:30', '16:00-17:30'],
        worstTimes: ['10:30-11:30', '13:00-15:00'],
        bestMonths: ['january', 'february', 'september'],
        worstMonths: ['june', 'july', 'august', 'december'],
        seasonalNotes: 'Summer, holidays, and special exhibitions draw the largest crowds. Ticket lines are longest at opening, so arrive after 11:30am.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Arrive after 11:30am to avoid the opening rush',
        'Friday evenings (5:30-8:30pm) are free for NY State residents',
        'Admission includes same-day film and MoMA PS1 access within 14 days',
        'Book tickets online to skip the ticket line',
        'Use the 53rd Street entrance between Fifth and Sixth avenues'
      ],
      tickets: {
        onlineUrl: 'https://visit.moma.org/select',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the MoMA hours?',
        answer: 'MoMA is open <strong>daily from 10:30am to 5:30pm</strong>. On <strong>Fridays, the museum stays open until 8:30pm</strong>. Saturday and Sunday mornings (9:30-10:30am) are reserved for members only.'
      },
      {
        question: 'How much does MoMA cost?',
        answer: 'Admission is <strong>$30 for adults</strong>, <strong>$22 for seniors 65+</strong>, and <strong>$17 for students</strong>. Children 16 and under enter free (ticket required). New York State residents enjoy free admission Friday evenings from 5:30pm to 8:30pm.'
      },
      {
        question: 'What is the best time to visit MoMA?',
        answer: 'Arrive <strong>after 11:30am</strong> to avoid opening crowds, or visit on <strong>Friday evenings</strong> for a quieter experience. Weekdays are generally less crowded than weekends. Summer and holiday periods are the busiest times.'
      },
      {
        question: 'How long should I spend at MoMA?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum holds iconic works like Van Gogh\'s Starry Night, Picasso\'s Les Demoiselles d\'Avignon, and Warhol\'s Campbell\'s Soup Cans across six floors of galleries.'
      }
    ]
  },
  {
    slug: 'kunstmuseum-basel',
    name: 'Kunstmuseum Basel',
    websiteUrl: 'https://kunstmuseumbasel.ch/en/',
    ticketUrl: 'https://kunstmuseumbasel.ch/en/visit/plan-your-visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '09:00', close: '19:00' },
          wednesday: { open: '09:00', close: '21:00' },
          thursday: { open: '09:00', close: '19:00' },
          friday: { open: '09:00', close: '19:00' },
          saturday: { open: '09:00', close: '19:00' },
          sunday: { open: '09:00', close: '19:00' }
        },
        exceptions: [],
        notes: 'Open Tuesday to Sunday 9am-7pm, Wednesday until 9pm. Closed Mondays. Free admission to permanent collection: Tue, Thu, Fri 5-6pm, Wed 5-8pm, and first Sunday of each month.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 25,
        senior: 25,
        student: 12,
        studentMaxAge: 25,
        child: 0,
        childMinAge: 13,
        childMaxAge: 19,
        currency: 'CHF',
        notes: 'Special exhibitions may cost CHF 30. Children 12 and under free. Free permanent collection access: Tue/Thu/Fri 5-6pm, Wed 5-8pm, first Sunday of month.',
        freeDay: 'First Sunday of month (permanent collection)',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['09:00-11:00', '17:00-19:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Art Basel week in June is extremely busy. Weekday mornings and late afternoons are generally quietest.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2-3 hours'
      },
      tips: [
        'Free permanent collection access Tue-Fri 5-6pm and Wed until 8pm',
        'First Sunday of each month has free admission to the collection',
        'Wednesday evenings stay open until 9pm',
        'The museum spans three buildings: Hauptbau, Neubau, and Gegenwart',
        'Swiss Museum Pass and Swiss Travel Pass cover admission'
      ],
      tickets: {
        onlineUrl: 'https://kunstmuseumbasel.ch/en/visit/plan-your-visit',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Kunstmuseum Basel hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 9am to 7pm</strong>, with <strong>Wednesday late hours until 9pm</strong>. The museum is closed on Mondays.'
      },
      {
        question: 'How much does the Kunstmuseum Basel cost?',
        answer: 'Admission is <strong>CHF 25 for adults</strong> and <strong>CHF 12 for students up to 25 and ages 13-19</strong>. Children 12 and under enter free. Free collection access: Tue/Thu/Fri 5-6pm, Wed 5-8pm, and first Sunday of month.'
      },
      {
        question: 'What is the best time to visit Kunstmuseum Basel?',
        answer: '<strong>Weekday mornings</strong> at opening (9am) or late afternoons are quietest. The free hours (5pm onward) can be busier. Avoid Art Basel week in June when the city is extremely crowded with art visitors.'
      },
      {
        question: 'How long should I spend at Kunstmuseum Basel?',
        answer: 'Plan for <strong>2 to 3 hours</strong> to see the highlights. The museum houses one of the oldest public art collections in the world, with masterworks from Holbein, Cézanne, Picasso, and contemporary artists across three buildings.'
      }
    ]
  },
  {
    slug: 'courtauld-gallery-london',
    name: 'Courtauld Gallery',
    websiteUrl: 'https://courtauld.ac.uk/gallery/',
    ticketUrl: 'https://courtauld.ac.uk/gallery/plan-your-visit/',
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
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10am-6pm (last admission 5:15pm). Closed December 24-26. The gallery is cashless.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 12,
        senior: 12,
        student: 0,
        child: 0,
        childMaxAge: 18,
        currency: 'GBP',
        notes: 'Free for students with valid ID and under 18s. National Art Pass and London Pass holders enter free. Weekday pricing may be cheaper.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '16:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august', 'december'],
        seasonalNotes: 'Summer and Christmas periods are busiest. Weekday mornings are generally quietest.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '1.5-2 hours'
      },
      tips: [
        'Free for students with valid ID and under 18s',
        'The gallery is cashless - bring card or mobile payment',
        'Located in Somerset House, a beautiful historic building',
        'Home to world-famous Impressionist paintings',
        'Temple tube station is a 5-minute walk away'
      ],
      tickets: {
        onlineUrl: 'https://courtauld.ac.uk/gallery/plan-your-visit/',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Courtauld Gallery hours?',
        answer: 'The Courtauld Gallery is open <strong>daily from 10am to 6pm</strong> (last admission 5:15pm). The gallery is closed on December 24-26.'
      },
      {
        question: 'How much does the Courtauld Gallery cost?',
        answer: 'Admission is <strong>£12 for adults</strong>. <strong>Students with valid ID and visitors under 18 enter free</strong>. National Art Pass and London Pass holders also receive free entry. Weekday tickets may be cheaper.'
      },
      {
        question: 'What is the best time to visit the Courtauld Gallery?',
        answer: '<strong>Weekday mornings</strong> right at 10am opening offer the quietest experience. Late afternoons (after 4pm) are also good for avoiding crowds. Weekends are busiest.'
      },
      {
        question: 'How long should I spend at the Courtauld Gallery?',
        answer: 'Plan for <strong>1.5 to 2 hours</strong> to see the collection. Though compact, the gallery holds world-class Impressionist works including Manet\'s Bar at the Folies-Bergère, Van Gogh\'s Self-Portrait with Bandaged Ear, and Cézanne\'s Card Players.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 3...\n');

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

  console.log('\nBatch 3 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
