const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'mus233e-national-gustave-moreau-paris-france',
    address: '14, rue de La Rochefoucauld, 75009 Paris, France',
    latitude: 48.8780,
    longitude: 2.3344,
    websiteUrl: 'https://musee-moreau.fr/en',
    ticketUrl: 'https://musee-moreau.fr/en/opening-hours-and-prices',
    ticketPriceRange: '€8 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Last admission 17:30.', lastUpdated: '2026-02-01' },
      admission: { adult: 8, child: 0, currency: 'EUR', notes: 'Under 18 free. EU under 26 free. Reduced €6.', freeDay: 'First Sunday of every month' },
      crowdData: { overall: 'Low', bestDays: ['Wednesday', 'Thursday'], bestTimes: ['Weekday mornings'], worstDays: ['First Sunday (free)'], avgVisitDuration: '1-1.5 hours' },
      tips: ['Three floors connected by famous spiral staircase. No elevator.', 'Ticket also covers Musée Jean-Jacques Henner, valid 7 days.', 'Non-flash photography permitted throughout.', 'Paris Museum Pass covers admission. No luggage storage.'],
      amenities: { cafe: false, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: false, audioGuide: true }
    }
  },
  {
    slug: 'nationalmuseum-stockholm-sweden',
    address: 'Södra Blasieholmshamnen 2, 111 48 Stockholm, Sweden',
    latitude: 59.3288,
    longitude: 18.0711,
    websiteUrl: 'https://www.nationalmuseum.se/en',
    ticketUrl: 'https://www.nationalmuseum.se/en/visit/admission-fees-and-tickets',
    ticketPriceRange: '160 SEK (~€15, under 20 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 160, child: 0, currency: 'SEK', notes: 'Under 20 free. Students/seniors 100 SEK.', freeDay: 'Thursday 17:00-20:00' },
      tickets: { onlineUrl: 'https://www.nationalmuseum.se/en/visit/admission-fees-and-tickets', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings', 'Thursday evenings'], worstDays: ['Saturday'], avgVisitDuration: '2-3 hours' },
      tips: ['Ground floor (restaurant, shop, sculpture courtyard) is free.', 'Must store backpacks in free lockers before entering.', 'Portable stools available at staircase tops for galleries.', 'Picnic room available on lower ground floor.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'wadsworth-atheneum',
    address: '600 Main Street, Hartford, CT 06103, United States',
    latitude: 41.7644,
    longitude: -72.6734,
    websiteUrl: 'https://www.thewadsworth.org',
    ticketUrl: 'https://www.thewadsworth.org/visit/hours-admission/',
    ticketPriceRange: '$22 (under 12 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { closed: true }, thursday: { open: '12:00', close: '17:00' }, friday: { open: '12:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 22, child: 0, currency: 'USD', notes: 'Senior $18. Youth/student $10. Under 12 free. Hartford residents free.' },
      tickets: { onlineUrl: 'https://www.thewadsworth.org/visit/hours-admission/', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Low', bestDays: ['Thursday', 'Friday'], bestTimes: ['At noon opening'], worstDays: ['Saturday', 'Second Saturday'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Oldest continuously operating public art museum in the US (1842).', 'Pay-what-you-wish during last hour every open day.', 'Validate parking at museum for $3 rate at Front Street South Garage.', 'Accessible entrance at 29 Atheneum Square North.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'yale-centre-for-british-art-yale-university-new-ha',
    address: '1080 Chapel Street, New Haven, CT 06510, United States',
    latitude: 41.3083,
    longitude: -72.9304,
    websiteUrl: 'https://britishart.yale.edu',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, notes: 'Thursday extended to 19:00 Sep-Jun.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'USD', notes: 'Always free.' },
      crowdData: { overall: 'Low', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday'], avgVisitDuration: '1-2 hours' },
      tips: ['Largest collection of British art outside the UK.', 'Building designed by Louis Kahn is an architectural landmark.', 'Free sign language interpretation for tours (2 weeks notice).', 'Lockers in basement. Park at LAZ lot (161 York Street).'],
      amenities: { cafe: false, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'fitzwilliam-museum-university-of-cambridge-cambrid',
    address: 'Trumpington Street, Cambridge CB2 1RB, United Kingdom',
    latitude: 52.2006,
    longitude: 0.1196,
    websiteUrl: 'https://fitzmuseum.cam.ac.uk',
    ticketUrl: 'https://fitzmuseum.cam.ac.uk/plan-your-visit',
    ticketPriceRange: 'Free (exhibitions may charge)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '12:00', close: '17:00' } }, notes: 'Last entry 16:40. Bank holidays: 12:00-17:00.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Special exhibitions may charge.' },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Bank holidays'], avgVisitDuration: '1.5-2 hours' },
      tips: ['Courtyard entrance for step-free access, right at Citi bus stop.', 'No visitor parking. Nearest: Grand Arcade or Queen Anne car parks.', 'Portable stools available at entrances for gallery use.', 'Friends members get 10% off cafe and shop.'],
      amenities: { cafe: true, wifi: true, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
    }
  },
  {
    slug: 'royal-museums-belgium',
    address: 'Rue du Musée 9, 1000 Brussels, Belgium',
    latitude: 50.8424,
    longitude: 4.3579,
    websiteUrl: 'https://fine-arts-museum.be/en',
    ticketUrl: 'https://fine-arts-museum.be/en/visit/planning-my-visit/buy-a-ticket',
    ticketPriceRange: '€10-15 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, notes: 'Last admission 30 min before closing.', lastUpdated: '2026-02-01' },
      admission: { adult: 15, child: 0, currency: 'EUR', notes: 'Combo (Oldmasters + Magritte) €15. Single museum €10. Under 18 free.', freeDay: 'First Wednesday of every month after 13:00' },
      tickets: { onlineUrl: 'https://fine-arts-museum.be/en/visit/planning-my-visit/buy-a-ticket', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings'], worstDays: ['First free Wednesday afternoon', 'Weekends'], avgVisitDuration: '2-3 hours (both museums)' },
      tips: ['Complex contains Oldmasters, Modern, Fin-de-Siècle, and Magritte museums.', 'On-site cafe currently closed. Eat before/after.', 'Audio guide recommended as gallery signage is limited.', 'Wheelchair entrance at 1 Place Royale (Magritte entrance).'],
      amenities: { cafe: false, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'st-bavo-cathedral-ghent-belgium',
    address: 'Sint-Baafsplein, 9000 Ghent, Belgium',
    latitude: 51.0533,
    longitude: 3.7275,
    websiteUrl: 'https://www.sintbaafskathedraal.be/en',
    ticketUrl: 'https://www.sintbaafskathedraal.be/en',
    ticketPriceRange: 'Free (Ghent Altarpiece ~€12.50)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '08:30', close: '17:30' }, tuesday: { open: '08:30', close: '17:30' }, wednesday: { open: '08:30', close: '17:30' }, thursday: { open: '08:30', close: '17:30' }, friday: { open: '08:30', close: '17:30' }, saturday: { open: '08:30', close: '17:30' }, sunday: { open: '13:00', close: '17:30' } }, notes: 'Visitor Centre: Mon-Sat 10:00-17:00, Sun 13:00-17:00. Altarpiece last entry 17:00.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'EUR', notes: 'Cathedral and crypt free. Ghent Altarpiece visitor experience ~€12.50.' },
      crowdData: { overall: 'Busy', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['Right at opening'], worstDays: ['Saturday', 'Sunday', 'Summer'], avgVisitDuration: '1-1.5 hours' },
      tips: ['Ghent Altarpiece undergoing final restoration (completion spring 2027). Some panels replaced by reproductions.', 'Pre-book altarpiece time slot online during peak season.', 'AR tour included with altarpiece ticket, 8 languages.', 'Sunday opens afternoon only (from 13:00).'],
      amenities: { cafe: false, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'wallace-collection',
    address: 'Hertford House, Manchester Square, London W1U 3BN, United Kingdom',
    latitude: 51.5171,
    longitude: -0.1527,
    websiteUrl: 'https://www.wallacecollection.org',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Temporary exhibitions ticketed.' },
      crowdData: { overall: 'Low', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['10:00-11:00 AM', '4:00-5:00 PM'], worstDays: ['Saturday'], avgVisitDuration: '1-2 hours' },
      tips: ['Download Bloomberg Connects app for painting-by-painting commentary.', 'Pick up free printed guide with floor plans from reception.', 'Courtyard restaurant popular for afternoon tea, book ahead.', 'BSL tours and multi-sensory events offered regularly.'],
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
          address: m.address, latitude: m.latitude, longitude: m.longitude,
          websiteUrl: m.websiteUrl, ticketUrl: m.ticketUrl,
          ticketPriceRange: m.ticketPriceRange, hoursOfOperation: m.hoursOfOperation,
          updatedAt: new Date()
        }
      });
      console.log('✓ ' + m.slug);
      updated++;
    } catch (e) {
      console.error('✗ ' + m.slug + ': ' + e.message.slice(0, 100));
    }
  }
  console.log('\nDone: ' + updated + '/' + museums.length);
  await prisma.$disconnect();
}
run();
