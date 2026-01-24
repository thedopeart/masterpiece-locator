const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museumsData = [
  {
    slug: 'wadsworth-atheneum',
    name: 'Wadsworth Atheneum',
    websiteUrl: 'https://www.thewadsworth.org/',
    ticketUrl: 'https://www.thewadsworth.org/visit/hours-admission/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: null, close: null, closed: true },
          wednesday: { open: null, close: null, closed: true },
          thursday: { open: '12:00', close: '17:00' },
          friday: { open: '12:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Open Thursday-Friday noon-5pm, Saturday-Sunday 10am-5pm. Pay-what-you-wish 4-5pm daily. Hartford residents always free.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 22,
        senior: 18,
        seniorAge: 62,
        student: 10,
        child: 0,
        childMaxAge: 12,
        currency: 'USD',
        notes: 'Hartford residents always free. Pay-what-you-wish 4-5pm daily. Second Saturdays free for families (noon-2pm). Youth 12 and under free. Military and families free.',
        freeDay: 'Hartford residents daily, pay-what-you-wish 4-5pm',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['thursday', 'friday'],
        worstDays: ['saturday'],
        bestTimes: ['12:00-14:00', '16:00-17:00'],
        worstTimes: ['14:00-16:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'A hidden gem that rarely gets crowded. Second Saturdays for families are busier.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Hartford residents always get free admission',
        'Pay-what-you-wish admission 4-5pm daily',
        'Second Saturdays free for families (noon-2pm arrival)',
        'Oldest public art museum in the US (founded 1842)',
        'Library ARTpass available at CT libraries for free admission'
      ],
      tickets: {
        onlineUrl: 'https://www.thewadsworth.org/visit/hours-admission/',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Wadsworth Atheneum hours?',
        answer: 'The museum is open <strong>Thursday and Friday noon-5pm</strong>, and <strong>Saturday and Sunday 10am-5pm</strong>. The museum is closed Monday through Wednesday.'
      },
      {
        question: 'How much does the Wadsworth Atheneum cost?',
        answer: 'Admission is <strong>$22 for adults</strong>, <strong>$18 for seniors 62+</strong>, and <strong>$10 for students</strong>. Youth 12 and under enter free. <strong>Hartford residents always free</strong>. Pay-what-you-wish 4-5pm daily.'
      },
      {
        question: 'What is the best time to visit the Wadsworth Atheneum?',
        answer: '<strong>Thursday or Friday afternoons</strong> are quietest. This hidden gem rarely gets crowded. The pay-what-you-wish hour (4-5pm) offers affordable access with minimal wait.'
      },
      {
        question: 'How long should I spend at the Wadsworth Atheneum?',
        answer: 'Plan for about <strong>2 hours</strong> to explore the collection. Founded in 1842, it\'s the oldest public art museum in the US, featuring Hudson River School landscapes, Baroque masterworks, and American decorative arts.'
      }
    ]
  },
  {
    slug: 'wallace-collection',
    name: 'Wallace Collection',
    websiteUrl: 'https://www.wallacecollection.org/',
    ticketUrl: 'https://www.wallacecollection.org/visit/',
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
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' }
        ],
        notes: 'Open daily 10am-5pm. Free admission including temporary exhibitions. No need to queue or book.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to all galleries including temporary exhibitions. No booking required.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Low to Moderate',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday'],
        bestTimes: ['10:00-11:00', '16:00-17:00'],
        worstTimes: ['12:00-15:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['july', 'august'],
        seasonalNotes: 'A peaceful alternative to busier London museums. Weekday mornings and late afternoons are quietest.',
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '1.5-2 hours'
      },
      tips: [
        'Free admission with no booking required',
        'Temporary exhibitions also free',
        'Beautiful historic townhouse setting',
        'Near Bond Street and Baker Street tube stations',
        'Excellent collection of French 18th-century art and armour'
      ],
      tickets: {
        onlineUrl: 'https://www.wallacecollection.org/visit/',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Wallace Collection hours?',
        answer: 'The museum is open <strong>daily from 10am to 5pm</strong>. It is closed on December 25 and 26.'
      },
      {
        question: 'Is the Wallace Collection free?',
        answer: 'Yes, <strong>admission is completely free</strong>, including temporary exhibitions. No booking or queuing required. Simply walk in during opening hours.'
      },
      {
        question: 'What is the best time to visit the Wallace Collection?',
        answer: '<strong>Weekday mornings</strong> (10-11am) and late afternoons (4-5pm) are quietest. This intimate museum in a historic townhouse is a peaceful alternative to busier London attractions.'
      },
      {
        question: 'How long should I spend at the Wallace Collection?',
        answer: 'Plan for <strong>1.5 to 2 hours</strong> to explore the collection. Highlights include Frans Hals\' <strong>Laughing Cavalier</strong>, world-class French 18th-century furniture, and an outstanding collection of arms and armour.'
      }
    ]
  },
  {
    slug: 'st-bavo-cathedral-ghent-belgium',
    name: 'St. Bavo Cathedral, Ghent',
    websiteUrl: 'https://www.sintbaafskathedraal.be/en/',
    ticketUrl: 'https://www.sintbaafskathedraal.be/en/buy-tickets/',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:30', close: '17:30', altarpieceClose: '17:00' },
          tuesday: { open: '08:30', close: '17:30', altarpieceClose: '17:00' },
          wednesday: { open: '08:30', close: '17:30', altarpieceClose: '17:00' },
          thursday: { open: '08:30', close: '17:30', altarpieceClose: '17:00' },
          friday: { open: '08:30', close: '17:30', altarpieceClose: '17:00' },
          saturday: { open: '08:30', close: '17:30', altarpieceClose: '17:00' },
          sunday: { open: '13:00', close: '17:30', altarpieceClose: '17:00' }
        },
        exceptions: [],
        notes: 'Cathedral open Mon-Sat 8:30am-5:30pm, Sun 1pm-5:30pm. Ghent Altarpiece viewing closes at 5pm. AR tour lasts 60 minutes, last entry 4pm.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 16,
        senior: 14,
        student: 14,
        child: 5,
        childMinAge: 6,
        childMaxAge: 17,
        currency: 'EUR',
        notes: 'Ticket includes Ghent Altarpiece (Mystic Lamb) with AR experience. Cathedral entry may be free but altarpiece requires ticket. CityCard Ghent gives €10 discount.',
        freeDay: null,
        memberFree: false
      },
      crowdData: {
        overall: 'Popular',
        bestDays: ['monday', 'tuesday', 'wednesday'],
        worstDays: ['saturday', 'sunday'],
        bestTimes: ['08:30-10:00', '15:00-17:00'],
        worstTimes: ['10:00-14:00'],
        bestMonths: ['january', 'february', 'november'],
        worstMonths: ['april', 'july', 'august'],
        seasonalNotes: 'The Ghent Altarpiece is extremely popular. Book tickets in advance, especially during peak season. Tickets can sell out.',
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      tips: [
        'Book tickets online in advance - they can sell out',
        'The AR experience tour lasts about 60 minutes',
        'CityCard Ghent gives €10 discount on tickets',
        'Sunday opens later at 1pm',
        'The Ghent Altarpiece is one of the most important artworks in the world'
      ],
      tickets: {
        onlineUrl: 'https://www.sintbaafskathedraal.be/en/buy-tickets/',
        advanceRequired: true,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the St. Bavo Cathedral hours?',
        answer: 'The cathedral is open <strong>Monday-Saturday 8:30am-5:30pm</strong> and <strong>Sunday 1pm-5:30pm</strong>. The Ghent Altarpiece viewing closes at 5pm. The AR tour takes about 60 minutes with last entry at 4pm.'
      },
      {
        question: 'How much does it cost to see the Ghent Altarpiece?',
        answer: 'Tickets are <strong>€16 for adults</strong>, <strong>€14 for seniors/students</strong>, and <strong>€5 for children 6-17</strong>. The ticket includes the Ghent Altarpiece viewing with an augmented reality experience. CityCard Ghent gives a €10 discount.'
      },
      {
        question: 'What is the best time to visit St. Bavo Cathedral?',
        answer: '<strong>Weekday mornings</strong> right at 8:30am opening are quietest. Book tickets in advance as they can sell out, especially during summer and holidays. The Ghent Altarpiece is extremely popular.'
      },
      {
        question: 'How long should I spend at St. Bavo Cathedral?',
        answer: 'Plan for about <strong>1.5 hours</strong> including the AR tour of the <strong>Ghent Altarpiece</strong> (Mystic Lamb). This 15th-century masterpiece by the Van Eyck brothers is one of the most influential paintings in Western art history.'
      }
    ]
  },
  {
    slug: 'fitzwilliam-museum-university-of-cambridge-cambrid',
    name: 'Fitzwilliam Museum',
    websiteUrl: 'https://fitzmuseum.cam.ac.uk/',
    ticketUrl: 'https://fitzmuseum.cam.ac.uk/plan-your-visit',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-12-24', closed: true, reason: 'Christmas Eve' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: 'Boxing Day' },
          { date: '2026-12-31', closed: true, reason: "New Year's Eve" },
          { date: '2027-01-01', closed: true, reason: "New Year's Day" }
        ],
        notes: 'Open Tue-Sat 10am-5pm, Sun 12pm-5pm. Last entry 4:40pm. Closed Mondays. Bank holidays 12pm-5pm. Free admission, no booking required.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'GBP',
        notes: 'Free admission to permanent collection. No booking required for general admission. Some special exhibitions may charge and require booking. Fitz List (18-25/students) offers free exhibition tickets.',
        freeDay: 'Every day',
        memberFree: true
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['tuesday', 'wednesday', 'thursday'],
        worstDays: ['saturday'],
        bestTimes: ['10:00-12:00', '15:00-17:00'],
        worstTimes: ['12:00-14:00'],
        bestMonths: ['january', 'february', 'march'],
        worstMonths: ['june', 'july', 'august'],
        seasonalNotes: 'Summer and Cambridge graduation season are busier. Pay-what-you-can exhibition tickets available last Sunday of each month.',
        avgVisitDuration: '2 hours',
        recommendedDuration: '2 hours'
      },
      tips: [
        'Free admission, no booking required',
        'Join the Fitz List (18-25/students) for free exhibition tickets',
        'Pay-what-you-can exhibition tickets last Sunday of month',
        'Sunday opens later at noon',
        'About 20 minutes walk from Cambridge station'
      ],
      tickets: {
        onlineUrl: 'https://fitzmuseum.cam.ac.uk/plan-your-visit',
        advanceRequired: false,
        advanceRecommended: false,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Fitzwilliam Museum hours?',
        answer: 'The museum is open <strong>Tuesday to Saturday 10am-5pm</strong> and <strong>Sunday 12pm-5pm</strong>. Last entry is at 4:40pm. The museum is closed on Mondays. Bank holidays: 12pm-5pm.'
      },
      {
        question: 'Is the Fitzwilliam Museum free?',
        answer: 'Yes, <strong>admission is free</strong> and no booking is required for the permanent collection. Some special exhibitions may have an entry fee. The Fitz List offers free exhibition tickets for ages 18-25 and students.'
      },
      {
        question: 'What is the best time to visit the Fitzwilliam Museum?',
        answer: '<strong>Weekday mornings</strong> are quietest. Avoid summer months and Cambridge graduation season when visitor numbers increase. Last Sunday of each month offers pay-what-you-can exhibition tickets.'
      },
      {
        question: 'How long should I spend at the Fitzwilliam Museum?',
        answer: 'Plan for about <strong>2 hours</strong> to explore the highlights. The museum houses an outstanding collection spanning antiquities to Impressionist paintings, including works by Titian, Rubens, Monet, and Renoir.'
      }
    ]
  },
  {
    slug: 'royal-museums-belgium',
    name: 'Royal Museums of Fine Arts of Belgium',
    websiteUrl: 'https://fine-arts-museum.be/en/',
    ticketUrl: 'https://fine-arts-museum.be/en/visit/planning-my-visit/admission-prices',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: null, close: null, closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '11:00', close: '18:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-11-01', closed: true, reason: 'All Saints Day' },
          { date: '2026-11-11', closed: true, reason: 'Armistice Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        notes: 'Tue-Fri 10am-5pm, Sat-Sun 11am-6pm. Closed Mondays. Free first Wednesday of month from 1pm. Thursday Nocturnes offer reduced admission.',
        lastUpdated: '2026-01-23'
      },
      admission: {
        adult: 15,
        senior: 15,
        student: 4,
        child: 0,
        childMaxAge: 18,
        currency: 'EUR',
        notes: 'Combined ticket for Old Masters + Magritte Museum €15. Single museum €10. Under 18 free. Brussels Card holders free to permanent collections. Free first Wednesday from 1pm.',
        freeDay: 'First Wednesday of month from 1pm',
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
        seasonalNotes: 'The Magritte Museum is the most popular section. First Wednesdays (free from 1pm) can be busier.',
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '3 hours for both museums'
      },
      tips: [
        'Free admission first Wednesday of month from 1pm',
        'Combined ticket covers Old Masters and Magritte Museum',
        'Under 18 always free',
        'Thursday Nocturnes offer reduced evening admission',
        'The Magritte Museum has the world\'s largest collection of his work'
      ],
      tickets: {
        onlineUrl: 'https://fine-arts-museum.be/en/visit/planning-my-visit/admission-prices',
        advanceRequired: false,
        advanceRecommended: true,
        sameDayAvailable: true
      }
    },
    faqs: [
      {
        question: 'What are the Royal Museums of Fine Arts of Belgium hours?',
        answer: 'The museums are open <strong>Tuesday to Friday 10am-5pm</strong> and <strong>Saturday-Sunday 11am-6pm</strong>. Closed Mondays and major holidays including January 1, May 1, and December 25.'
      },
      {
        question: 'How much do the Royal Museums of Fine Arts of Belgium cost?',
        answer: 'A combined ticket for Old Masters and Magritte Museum is <strong>€15</strong>. Single museum entry is €10. <strong>Under 18 free</strong>. <strong>Free admission first Wednesday of month from 1pm</strong>.'
      },
      {
        question: 'What is the best time to visit the Royal Museums of Fine Arts of Belgium?',
        answer: '<strong>Weekday mornings</strong> right at 10am are quietest. The Magritte Museum is the most popular section. First Wednesdays (free from 1pm) can be busier.'
      },
      {
        question: 'How long should I spend at the Royal Museums of Fine Arts of Belgium?',
        answer: 'Plan for <strong>3 hours</strong> to explore both the Old Masters Museum (featuring Bruegel and Rubens) and the <strong>Magritte Museum</strong>, which houses the world\'s largest collection of René Magritte\'s surrealist works.'
      }
    ]
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 8...\n');

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

  console.log('\nBatch 8 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
