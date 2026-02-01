const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'state-russian-museum',
    address: 'Inzhenernaya Street 4, Saint Petersburg, 191186, Russia',
    latitude: 59.9386,
    longitude: 30.3322,
    websiteUrl: 'https://en.rusmuseum.ru/',
    ticketUrl: 'https://ticket.rusmuseum.ru/?lang=en',
    ticketPriceRange: '500 RUB (under 16 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '13:00', close: '21:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 500, child: 0, currency: 'RUB', notes: 'Students 250 RUB. Free for under 16.' },
      tickets: { onlineUrl: 'https://ticket.rusmuseum.ru/?lang=en', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Wednesday'], bestTimes: ['Weekday mornings', 'Thursday evening'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Large bags must be checked at the cloakroom.', 'Photography allowed without flash or tripods.', 'The museum spans multiple buildings; plan which to visit.', 'Thursday late opening (1-9pm) avoids tour groups.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'basilica-of-saint-francis-of-assisi-assisi',
    address: 'Piazza San Francesco 2, 06081 Assisi (PG), Italy',
    latitude: 43.0715,
    longitude: 12.6033,
    websiteUrl: 'https://www.sanfrancescoassisi.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free (audio guide €8)',
    hoursOfOperation: {
      hours: { notes: 'Easter-November: 6:30-18:50 (Sun until 19:15). November-Easter: 6:30-18:00. Upper Basilica opens ~2hrs after Lower.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'EUR', notes: 'Free entry. Audio guide €8.' },
      tickets: { onlineUrl: null, skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Early morning before 9am', 'Late afternoon'], worstDays: ['Saturday', 'Sunday', 'Religious holidays'], avgVisitDuration: '1-1.5 hours' },
      tips: ['Strict dress code: shoulders and knees must be covered.', 'Photography is not permitted inside.', 'Silence is expected; active place of worship.', 'Visit Lower Basilica, Upper Basilica, and Crypt as three experiences.'],
      amenities: { cafe: false, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'courtauld-gallery',
    address: 'Somerset House, Strand, London WC2R 0RN, United Kingdom',
    latitude: 51.5115,
    longitude: -0.1174,
    websiteUrl: 'https://courtauld.ac.uk/gallery/',
    ticketUrl: 'https://courtauld.ac.uk/gallery/plan-your-visit/',
    ticketPriceRange: '£9-11 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Last entry 17:15.', lastUpdated: '2026-02-01' },
      admission: { adult: 9, child: 0, currency: 'GBP', notes: '£9 weekdays, £11 weekends. Free for under 18 and students.' },
      tickets: { onlineUrl: 'https://courtauld.ac.uk/gallery/plan-your-visit/', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1-2 hours' },
      tips: ['Entirely cashless; bring card or mobile payment.', 'Visit on a weekday to pay £9 instead of £11.', 'Lockers are small (48x36x35cm), no suitcases.', 'Temple tube station is the closest (5 min walk).'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'kunstmuseum-basel',
    address: 'St. Alban-Graben 16, 4051 Basel, Switzerland',
    latitude: 47.5546,
    longitude: 7.5945,
    websiteUrl: 'https://kunstmuseumbasel.ch/en',
    ticketUrl: 'https://kunstmuseumbasel.ch/en/visit/plan-your-visit',
    ticketPriceRange: 'CHF 25 (under 13 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '19:00' }, wednesday: { open: '09:00', close: '21:00' }, thursday: { open: '09:00', close: '19:00' }, friday: { open: '09:00', close: '19:00' }, saturday: { open: '09:00', close: '19:00' }, sunday: { open: '09:00', close: '19:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 25, child: 0, currency: 'CHF', notes: 'Students 12 CHF. Free Tue/Thu/Fri 17-18:00, Wed 17-20:00.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://kunstmuseumbasel.ch/en/visit/plan-your-visit', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Mornings', 'Wednesday evenings'], worstDays: ['First free Sunday', 'Weekend afternoons'], avgVisitDuration: '2-3 hours' },
      tips: ['Wednesday 5-8pm offers free permanent collection and reduced exhibitions.', 'Museum spans three buildings; Gegenwart currently closed.', 'Swiss Museum Pass grants free entry.', 'Take Tram 1 or 2 to Kunstmuseum stop.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'borghese-gallery-rome',
    address: 'Piazzale Scipione Borghese 5, 00197 Rome, Italy',
    latitude: 41.9142,
    longitude: 12.4922,
    websiteUrl: 'https://galleriaborghese.beniculturali.it/en/',
    ticketUrl: 'https://galleriaborghese.beniculturali.it/en/visita/info-biglietti/',
    ticketPriceRange: '€22 (under 18 free, reservation required)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '19:00' }, wednesday: { open: '09:00', close: '19:00' }, thursday: { open: '09:00', close: '19:00' }, friday: { open: '09:00', close: '19:00' }, saturday: { open: '09:00', close: '19:00' }, sunday: { open: '09:00', close: '19:00' } }, notes: 'Timed entry slots: 9-11, 11-13, 13-15, 15-17, 17-19. Only 180 visitors per slot.', lastUpdated: '2026-02-01' },
      admission: { adult: 22, child: 0, currency: 'EUR', notes: 'Includes €2 reservation fee. Reduced €11 for EU 18-25.', freeDay: 'First Sunday of every month' },
      tickets: { onlineUrl: 'https://galleriaborghese.beniculturali.it/en/visita/info-biglietti/', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy (but limited entry)', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['First slot at 9am', 'Winter months'], worstDays: ['Saturday', 'Sunday', 'Summer'], avgVisitDuration: '2 hours (enforced by timed slots)' },
      tips: ['Advance booking is mandatory. Book up to 90 days ahead.', 'Arrive 30 minutes before your slot. Late arrival does not extend exit time.', 'Bags larger than 21x15cm must go in the cloakroom.', 'Roma Pass covers entry. Metro: Flaminio or Barberini, then 15-20 min walk.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'stadel-frankfurt-am-main',
    address: 'Schaumainkai 63, 60596 Frankfurt am Main, Germany',
    latitude: 50.0987,
    longitude: 8.6724,
    websiteUrl: 'https://www.staedelmuseum.de/en/',
    ticketUrl: 'https://www.staedelmuseum.de/en/tickets',
    ticketPriceRange: '€16-18 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '21:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Under 18 free. Tuesday 3-6pm just €9.', freeDay: 'Last Saturday of each month' },
      tickets: { onlineUrl: 'https://www.staedelmuseum.de/en/tickets', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Tuesday afternoon (discounted)', 'Thursday/Friday evenings'], worstDays: ['Last Saturday (free day)', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Tuesday 3-6pm is best deal at just €9.', 'Thursday and Friday open until 9pm.', 'Digital audio guide available via Stádel app.', 'Flex Tickets for special exhibitions don\'t require a time slot.'],
      amenities: { cafe: false, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'birmingham-museum-and-art-gallery-birmingham',
    address: 'Chamberlain Square, Birmingham B3 3DH, United Kingdom',
    latitude: 52.4800,
    longitude: -1.9038,
    websiteUrl: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery',
    ticketUrl: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery/visit',
    ticketPriceRange: 'Free (exhibitions £8-15)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Open daily during Birmingham school holidays.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Special exhibitions £8-15.' },
      tickets: { onlineUrl: 'https://www.birminghammuseums.org.uk/birmingham-museum-and-art-gallery/visit', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Wednesday', 'Thursday'], bestTimes: ['Mornings'], worstDays: ['Saturday', 'School holidays'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['The Staffordshire Hoard display is a highlight and free.', 'Photography allowed without flash or tripods.', 'Open 7 days during school holidays.', 'Near New Street and Snow Hill rail stations.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
    }
  },
  {
    slug: 'palazzo-pitti',
    address: "Piazza de' Pitti 1, 50125 Florence, Italy",
    latitude: 43.7651,
    longitude: 11.2501,
    websiteUrl: 'https://www.uffizi.it/en/pitti-palace',
    ticketUrl: 'https://www.uffizi.it/en/tickets',
    ticketPriceRange: '€16 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '08:15', close: '18:30' }, wednesday: { open: '08:15', close: '18:30' }, thursday: { open: '08:15', close: '18:30' }, friday: { open: '08:15', close: '18:30' }, saturday: { open: '08:15', close: '18:30' }, sunday: { open: '08:15', close: '18:30' } }, notes: 'Last entry 17:30.', lastUpdated: '2026-02-01' },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Reduced €2 for EU 18-25. Combined Uffizi+Pitti+Boboli 5-day pass €40.', freeDay: 'First Sunday Oct-Mar' },
      tickets: { onlineUrl: 'https://www.uffizi.it/en/tickets', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Early morning at 8:15', 'Nov-Feb low season'], worstDays: ['Saturday', 'Summer weekends'], avgVisitDuration: '2-4 hours' },
      tips: ['Ticket covers five museums inside the palace.', 'Boboli Gardens require a separate ticket. Consider the combined pass.', 'Arrive 10-15 minutes before your slot.', 'Bus lines 11, 36, C3, C4 stop nearby.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
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
