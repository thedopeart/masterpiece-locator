const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'gemeentemuseum-den-haag-hague-netherlands',
    name: 'Kunstmuseum Den Haag',
    websiteUrl: 'https://www.kunstmuseum.nl/en',
    ticketUrl: 'https://www.kunstmuseum.nl/en/visit/buy-tickets-0',
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
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2027-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open Tuesday to Sunday 10am-5pm. Closed Mondays. Timed-entry reservation required. Formerly known as Gemeentemuseum Den Haag.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 17.50,
        senior: 17.50,
        student: 17.50,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. Museum Card accepted. Timed-entry reservation required even with discount cards. Between The Hague city center and Scheveningen beach.',
        freeDay: null,
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
        seasonalNotes: 'Summer brings more tourists to The Hague. Weekday mornings are quietest.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Timed-entry reservation required for all visitors',
        'Under 18 enter free',
        'Home to the world\'s largest Mondrian collection',
        'Museum Card holders need to reserve a time slot online',
        'Located between city center and Scheveningen beach'
      ],
      tickets: {
        onlineUrl: 'https://www.kunstmuseum.nl/en/visit/buy-tickets-0',
        advanceRequired: true,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Kunstmuseum Den Haag hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 5pm</strong>. It is closed on Mondays, Christmas Day, and New Year\'s Day. Formerly known as Gemeentemuseum Den Haag.'
      },
      {
        question: 'How much does Kunstmuseum Den Haag cost?',
        answer: 'Admission is <strong>€17.50 for adults</strong>. <strong>Under 18 enter free</strong>. Museum Card is accepted. All visitors need a timed-entry reservation, even with discount cards.'
      },
      {
        question: 'What is the best time to visit Kunstmuseum Den Haag?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. Book your timed-entry slot in advance online. Summer months see more tourists visiting The Hague.'
      },
      {
        question: 'How long should I spend at Kunstmuseum Den Haag?',
        answer: 'Plan for about <strong>2 hours</strong> to explore the collection. The museum houses the <strong>world\'s largest Mondrian collection</strong>, plus works by Monet, Picasso, and Dutch Golden Age masters.'
      }
    ]
  },
  {
    slug: 'kroeller-mueller-museum',
    name: 'Kröller-Müller Museum',
    websiteUrl: 'https://krollermuller.nl/en/',
    ticketUrl: 'https://krollermuller.nl/en/opening-hours-and-prices',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true, summerNote: 'Open July 6 - Aug 24' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2027-01-01', closed: true, reason: "New Year's Day" },
          { period: 'July 6 - Aug 24', note: 'Open daily including Mondays' }
        ],
        notes: 'Open Tue-Sun 10am-5pm. Closed Mondays except summer (July 6 - Aug 24). Located inside De Hoge Veluwe National Park. Park entry ticket also required.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 23.15,
        senior: 23.15,
        student: 11.60,
        child: 0,
        childMaxAge: 6,
        currency: 'EUR',
        notes: 'Ticket includes museum only. Separate park entry required (€13.85 for car, €9.80 for parking at entrance with free white bicycle). Museum Card accepted for museum, park entry still required.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '14:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['september', 'october', 'march'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Summer brings more visitors to the national park. Museum recommends visiting after 2pm on weekdays. Some outdoor sculptures covered in winter.',
        avgVisitDuration: '3 hours',
        recommendedDuration: '3-4 hours including sculpture garden'
      },
      tips: [
        'Separate ticket needed for De Hoge Veluwe National Park',
        'Park entrance with free white bicycle is most affordable option',
        'Visit after 2pm on weekdays for fewer crowds',
        'Second largest Van Gogh collection in the world',
        'Famous sculpture garden - some works covered in winter',
        'Museum only accepts electronic payments'
      ],
      tickets: {
        onlineUrl: 'https://krollermuller.nl/en/opening-hours-and-prices',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Kröller-Müller Museum hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday from 10am to 5pm</strong>. Closed Mondays except during summer (July 6 - Aug 24). Located inside De Hoge Veluwe National Park.'
      },
      {
        question: 'How much does the Kröller-Müller Museum cost?',
        answer: 'Museum admission is <strong>€23.15 for adults</strong> and <strong>€11.60 for students</strong>. Under 6 free. <strong>Separate national park entry is required</strong> (€9.80 for parking at entrance with free white bicycle access).'
      },
      {
        question: 'What is the best time to visit the Kröller-Müller Museum?',
        answer: 'The museum recommends visiting <strong>after 2pm on weekdays</strong> for fewer crowds. Summer (July-August) is busiest. Note that some outdoor sculptures are covered during winter months.'
      },
      {
        question: 'How long should I spend at the Kröller-Müller Museum?',
        answer: 'Plan for <strong>3 to 4 hours</strong> to explore the museum and sculpture garden. The museum has the <strong>second largest Van Gogh collection in the world</strong>, plus major works by Picasso, Mondrian, and a renowned outdoor sculpture garden.'
      }
    ]
  },
  {
    slug: 'neue-pinakothek',
    name: 'Neue Pinakothek',
    websiteUrl: 'https://www.pinakothek.de/en/neue-pinakothek',
    ticketUrl: 'https://www.pinakothek.de/en/visit',
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
        notes: 'CURRENTLY CLOSED FOR RENOVATION. Reopening planned for 2029-2030. Key works from the collection are on display at the Alte Pinakothek (East Wing) and Sammlung Schack.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'EUR',
        notes: 'Museum is currently closed. Collection highlights can be seen at Alte Pinakothek (€9, €1 on Sundays) and Sammlung Schack.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Closed',
        bestDays: [],
        worstDays: [],
        bestTimes: [],
        worstTimes: [],
        bestMonths: [],
        worstMonths: [],
        seasonalNotes: 'Currently closed for renovation until 2029-2030.',
        avgVisitDuration: 'N/A',
        recommendedDuration: 'See collection at Alte Pinakothek instead'
      },
      tips: [
        'CLOSED FOR RENOVATION until 2029-2030',
        'Visit the Alte Pinakothek East Wing to see Neue Pinakothek masterworks',
        'Sammlung Schack also displays works from the collection',
        'About 90 masterpieces on display at Alte Pinakothek',
        'Includes works by Van Gogh, Manet, Monet, and Friedrich'
      ],
      tickets: {
        onlineUrl: 'https://www.pinakothek.de/en/visit',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: false
      }
    },
    faqs: [
      {
        question: 'Is the Neue Pinakothek open?',
        answer: '<strong>No, the Neue Pinakothek is currently closed for renovation</strong>. The museum closed in 2019 for major repairs including roof restoration and asbestos removal. Reopening is planned for 2029-2030.'
      },
      {
        question: 'Where can I see the Neue Pinakothek collection?',
        answer: 'About 90 masterpieces from the Neue Pinakothek are on display at the <strong>Alte Pinakothek (East Wing)</strong>. Additional works are shown at the <strong>Sammlung Schack</strong>. Both are part of Munich\'s Kunstareal museum district.'
      },
      {
        question: 'What was in the Neue Pinakothek collection?',
        answer: 'The Neue Pinakothek houses one of the world\'s finest collections of <strong>19th-century European art</strong>, including masterworks by Van Gogh, Monet, Manet, Caspar David Friedrich, and Klimt.'
      },
      {
        question: 'When will the Neue Pinakothek reopen?',
        answer: 'Reopening is currently planned for <strong>2029-2030</strong>. The €220 million renovation addresses structural issues including water damage, asbestos, and outdated climate control systems.'
      }
    ]
  },
  {
    slug: 'national-gallery-of-denmark-statens-museum-for-kun',
    name: 'National Gallery of Denmark (SMK)',
    websiteUrl: 'https://www.smk.dk/en/',
    ticketUrl: 'https://www.smk.dk/en/section/visit-smk/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" }
        ],
        notes: 'Open Tue-Sun 10am-6pm. Wednesday late hours until 8pm. Closed Mondays. Denmark\'s largest art museum.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 110,
        senior: 110,
        student: 85,
        studentMaxAge: 30,
        child: 0,
        childMaxAge: 18,
        currency: 'DKK',
        notes: 'Under 18 free. Under 30 pay reduced rate. 1 adult + 1 child ticket available for 90 DKK. Copenhagen Card includes admission.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'thursday', 'friday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-12:00', '17:00-18:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Summer brings more tourists to Copenhagen. Wednesday evenings until 8pm are excellent for a quieter visit.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Under 18 always free',
        'Wednesday late hours until 8pm',
        'Copenhagen Card includes admission',
        'Located near Nørreport station',
        'Features Danish Golden Age and international art'
      ],
      tickets: {
        onlineUrl: 'https://www.smk.dk/en/section/visit-smk/',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the SMK National Gallery of Denmark hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday 10am-6pm</strong>, with <strong>Wednesday late hours until 8pm</strong>. Closed Mondays. Denmark\'s largest art museum.'
      },
      {
        question: 'How much does the National Gallery of Denmark cost?',
        answer: 'Admission is <strong>110 DKK for adults</strong> (about €15) and <strong>85 DKK for under 30</strong>. <strong>Under 18 free</strong>. A family ticket (1 adult + 1 child) costs 90 DKK. Copenhagen Card includes admission.'
      },
      {
        question: 'What is the best time to visit SMK?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. <strong>Wednesday evenings until 8pm</strong> offer extended hours with fewer visitors. Summer months are busiest.'
      },
      {
        question: 'How long should I spend at the National Gallery of Denmark?',
        answer: 'Plan for about <strong>2 hours</strong> to see the highlights. The collection features Danish Golden Age painters, international masters including Rubens and Matisse, plus contemporary art and special exhibitions.'
      }
    ]
  },
  {
    slug: 'mauritshuis',
    name: 'Mauritshuis',
    websiteUrl: 'https://www.mauritshuis.nl/en/',
    ticketUrl: 'https://www.mauritshuis.nl/en/visit/tickets-mauritshuis',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '13:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Tue-Sun 10am-6pm, Monday 1pm-6pm. Home to Vermeer\'s Girl with a Pearl Earring. Timed-entry slots available online.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 19,
        senior: 19,
        student: 15.50,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Under 18 free. Museum Card accepted. Student discount with valid ID. Price includes all exhibitions. 10-minute walk from The Hague Central Station.',
        freeDay: null,
        memberFree: true
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['10:00-11:00', '15:00-18:00'],
        worstTimes: ['11:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'Girl with a Pearl Earring draws large crowds. Visit after 3pm for a quieter experience. Summer is busiest.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '1.5-2 hours'
      },
      tips: [
        'Home to Vermeer\'s Girl with a Pearl Earring',
        'Visit after 3pm to avoid crowds',
        'Under 18 always free',
        'Museum Card accepted',
        '10-minute walk from The Hague Central Station'
      ],
      tickets: {
        onlineUrl: 'https://www.mauritshuis.nl/en/visit/tickets-mauritshuis',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Mauritshuis hours?',
        answer: 'The museum is open <strong>Tuesday to Sunday 10am-6pm</strong> and <strong>Monday 1pm-6pm</strong>. Closed Christmas Day. Home to Vermeer\'s famous <strong>Girl with a Pearl Earring</strong>.'
      },
      {
        question: 'How much does the Mauritshuis cost?',
        answer: 'Admission is <strong>€19 for adults</strong> and <strong>€15.50 for students</strong>. <strong>Under 18 free</strong>. Museum Card is accepted. The ticket includes all exhibitions.'
      },
      {
        question: 'What is the best time to visit the Mauritshuis?',
        answer: '<strong>After 3pm</strong> offers the quietest visiting experience. Monday afternoons (opens 1pm) tend to be less crowded than weekends. Girl with a Pearl Earring is the star attraction and draws crowds.'
      },
      {
        question: 'How long should I spend at the Mauritshuis?',
        answer: 'Plan for <strong>1.5 to 2 hours</strong> to explore the collection. This intimate museum features Dutch Golden Age masterpieces including Vermeer\'s <strong>Girl with a Pearl Earring</strong>, Rembrandt\'s <strong>The Anatomy Lesson</strong>, and works by Frans Hals.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 9...\n');

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

  console.log('\nBatch 9 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
