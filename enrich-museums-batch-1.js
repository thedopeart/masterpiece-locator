const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'cleveland-museum-of-art',
    address: '11150 East Boulevard, Cleveland, OH 44106, USA',
    latitude: 41.5089,
    longitude: -81.6116,
    websiteUrl: 'https://www.clevelandart.org',
    ticketUrl: 'https://www.clevelandart.org/visit',
    ticketPriceRange: 'Free (special exhibitions vary)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-07-04', closed: true, reason: 'Independence Day' },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 0, child: 0, currency: 'USD', notes: 'General admission is always free. Special exhibitions may have separate fees.' },
      tickets: { onlineUrl: 'https://www.clevelandart.org/visit', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Thursday'], bestTimes: ['Morning before noon'], worstDays: ['Saturday'], avgVisitDuration: '2-3 hours' },
      tips: [
        'The permanent collection is always free, no tickets needed.',
        'Wednesday and Friday evenings are great for a quieter visit.',
        'The museum cafe overlooks the outdoor sculpture garden.',
        'Free parking is available in the garage beneath the museum.'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'museo-del-prado',
    address: 'Calle de Ruiz de Alarcón, 23, 28014 Madrid, Spain',
    latitude: 40.4138,
    longitude: -3.6921,
    websiteUrl: 'https://www.museodelprado.es',
    ticketUrl: 'https://www.museodelprado.es/en/visit/tickets',
    ticketPriceRange: '€15 (free last 2 hours daily)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '20:00' },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '20:00' },
          saturday: { open: '10:00', close: '20:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 15, child: 0, currency: 'EUR', notes: 'Free for under 18. Free entry Mon-Sat 6-8pm, Sun 5-7pm.', freeDay: 'Daily (last 2 hours)' },
      tickets: { onlineUrl: 'https://www.museodelprado.es/en/visit/tickets', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Wednesday', 'Thursday'], bestTimes: ['Early morning at opening', 'Last 2 hours (free entry)'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '3-4 hours' },
      tips: [
        'Book online to skip the ticket line, especially on weekends.',
        'Free entry in the last 2 hours daily draws crowds, so arrive early in that window.',
        'Start with Velázquez and Goya rooms on the first floor.',
        'The Jerónimos building extension has great temporary exhibitions.',
        'Combine with Reina Sofía and Thyssen on the same day (Art Walk ticket available).'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'uffizi-gallery',
    address: 'Piazzale degli Uffizi, 6, 50122 Florence, Italy',
    latitude: 43.7668,
    longitude: 11.2552,
    websiteUrl: 'https://www.uffizi.it',
    ticketUrl: 'https://www.uffizi.it/en/tickets',
    ticketPriceRange: '€25 (€2 reduced)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
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
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 25, child: 0, currency: 'EUR', notes: 'Free for EU citizens under 18. Reduced €2 for EU citizens 18-25. Free first Sunday of each month.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://www.uffizi.it/en/tickets', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Extremely busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['First thing at 8:15am', 'After 4pm'], worstDays: ['Saturday', 'First Sunday (free day)'], avgVisitDuration: '3-4 hours' },
      tips: [
        'Pre-booking is practically required in peak season (March-October).',
        'Arrive at 8:15am sharp for the shortest lines.',
        'Botticelli rooms on the second floor get the most crowded, visit those first.',
        'The rooftop terrace cafe has a view of the Duomo.',
        'Combined ticket with Palazzo Pitti saves money if visiting both.'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'national-gallery-of-art',
    address: '6th and Constitution Avenue NW, Washington, DC 20565, USA',
    latitude: 38.8913,
    longitude: -77.0200,
    websiteUrl: 'https://www.nga.gov',
    ticketUrl: 'https://www.nga.gov/visit',
    ticketPriceRange: 'Free',
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
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 0, child: 0, currency: 'USD', notes: 'Always free. No tickets required.' },
      tickets: { onlineUrl: 'https://www.nga.gov/visit', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate to busy', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['Morning before noon'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: [
        'Two buildings connected by an underground walkway with a moving walkway.',
        'West Building has European paintings, East Building has modern and contemporary.',
        'The Sculpture Garden between the buildings is free and open year-round.',
        'Free guided tours depart from the rotunda several times daily.'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'rijksmuseum',
    address: 'Museumstraat 1, 1071 XX Amsterdam, Netherlands',
    latitude: 52.3600,
    longitude: 4.8853,
    websiteUrl: 'https://www.rijksmuseum.nl',
    ticketUrl: 'https://www.rijksmuseum.nl/en/tickets',
    ticketPriceRange: '€22.50 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '17:00' },
          tuesday: { open: '09:00', close: '17:00' },
          wednesday: { open: '09:00', close: '17:00' },
          thursday: { open: '09:00', close: '17:00' },
          friday: { open: '09:00', close: '17:00' },
          saturday: { open: '09:00', close: '17:00' },
          sunday: { open: '09:00', close: '17:00' }
        },
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 22.50, child: 0, currency: 'EUR', notes: 'Free for visitors under 18. Museumkaart accepted.' },
      tickets: { onlineUrl: 'https://www.rijksmuseum.nl/en/tickets', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['At opening (9am)', 'After 3pm'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: [
        'Online tickets are required; you cannot buy at the door.',
        'Head straight to the Gallery of Honour for The Night Watch and Vermeer.',
        'The museum library and garden are free to visit without a ticket.',
        'The Museumplein area has the Van Gogh Museum and Stedelijk nearby.'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'museum-of-modern-art',
    address: '11 West 53 Street, New York, NY 10019, USA',
    latitude: 40.7614,
    longitude: -73.9776,
    websiteUrl: 'https://www.moma.org',
    ticketUrl: 'https://www.moma.org/visit',
    ticketPriceRange: '$30 adults (under 16 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:30', close: '17:30' },
          tuesday: { open: '10:30', close: '17:30' },
          wednesday: { open: '10:30', close: '17:30' },
          thursday: { open: '10:30', close: '17:30' },
          friday: { open: '10:30', close: '20:00' },
          saturday: { open: '10:30', close: '17:30' },
          sunday: { open: '10:30', close: '17:30' }
        },
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 30, child: 0, currency: 'USD', notes: 'Free for children under 16. Free Friday evenings 5:30-8pm (UNIQLO Free Fridays).' , freeDay: 'Friday 5:30-8pm' },
      tickets: { onlineUrl: 'https://www.moma.org/visit', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['At opening', 'After 3pm on weekdays'], worstDays: ['Saturday', 'Sunday', 'Free Fridays'], avgVisitDuration: '2-3 hours' },
      tips: [
        'Start on the 5th floor (painting and sculpture) and work your way down.',
        'Free Friday evenings are popular, expect crowds.',
        'The sculpture garden is a peaceful spot for a break.',
        'MoMA PS1 in Queens is included with your ticket (within 14 days).'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'british-museum',
    address: 'Great Russell Street, London WC1B 3DG, United Kingdom',
    latitude: 51.5194,
    longitude: -0.1270,
    websiteUrl: 'https://www.britishmuseum.org',
    ticketUrl: 'https://www.britishmuseum.org/visit',
    ticketPriceRange: 'Free (special exhibitions £18-22)',
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
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Special exhibitions typically £18-22.' },
      tickets: { onlineUrl: 'https://www.britishmuseum.org/visit', skipTheLine: false, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['At opening (10am)', 'Friday evenings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-4 hours' },
      tips: [
        'Free timed entry tickets are recommended to guarantee entry.',
        'Friday evening openings until 8:30pm are much quieter.',
        'The Great Court restaurant on the upper level has good views.',
        'Focus on a few galleries per visit rather than trying to see everything.'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'kunsthistorisches-museum',
    address: 'Maria-Theresien-Platz, 1010 Vienna, Austria',
    latitude: 48.2038,
    longitude: 16.3618,
    websiteUrl: 'https://www.khm.at',
    ticketUrl: 'https://www.khm.at/en/visit/tickets/',
    ticketPriceRange: '€21 adults (under 19 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        notes: 'Open daily June-August (no Monday closure)',
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 21, child: 0, currency: 'EUR', notes: 'Free for visitors under 19. Annual pass €49 includes all KHM locations.' },
      tickets: { onlineUrl: 'https://www.khm.at/en/visit/tickets/', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Morning', 'Thursday evening'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: [
        'Thursday evening opening until 9pm is less crowded and atmospheric.',
        'The building itself is worth seeing, especially the main staircase with Klimt paintings.',
        'The Picture Gallery on the first floor houses the Bruegel collection, the largest in the world.',
        'Combined ticket with the Naturhistorisches Museum across the square is available.'
      ],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  }
];

async function run() {
  let updated = 0;
  for (const m of museums) {
    try {
      await prisma.museum.update({
        where: { slug: m.slug },
        data: {
          address: m.address,
          latitude: m.latitude,
          longitude: m.longitude,
          websiteUrl: m.websiteUrl,
          ticketUrl: m.ticketUrl,
          ticketPriceRange: m.ticketPriceRange,
          hoursOfOperation: m.hoursOfOperation,
          updatedAt: new Date()
        }
      });
      console.log(`✓ ${m.slug}`);
      updated++;
    } catch (e) {
      console.error(`✗ ${m.slug}: ${e.message}`);
    }
  }
  console.log(`\nDone: ${updated}/${museums.length} updated`);
  await prisma.$disconnect();
}

run();
