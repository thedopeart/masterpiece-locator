const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'russian-museum',
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
    slug: 'basilica-of-saint-francis-of-assisi-assisi-italy',
    hoursOfOperation: {
      hours: { notes: 'Easter-November: 6:30-18:50 (Sun until 19:15). November-Easter: 6:30-18:00.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'EUR', notes: 'Free entry. Audio guide 8 EUR.' },
      crowdData: { overall: 'Busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Early morning before 9am'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1-1.5 hours' },
      tips: ['Strict dress code: shoulders and knees must be covered.', 'Photography is not permitted inside.', 'Silence expected; active place of worship.', 'Visit Lower Basilica, Upper Basilica, and Crypt separately.'],
      amenities: { cafe: false, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'courtauld-gallery-london',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Last entry 17:15.', lastUpdated: '2026-02-01' },
      admission: { adult: 9, child: 0, currency: 'GBP', notes: 'Weekdays 9 GBP, weekends 11 GBP. Free for under 18 and students.' },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1-2 hours' },
      tips: ['Entirely cashless.', 'Visit weekdays for cheaper admission.', 'Temple tube station is closest.', 'Small lockers only, no suitcases.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'borghese-gallery-rome-italy',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '19:00' }, wednesday: { open: '09:00', close: '19:00' }, thursday: { open: '09:00', close: '19:00' }, friday: { open: '09:00', close: '19:00' }, saturday: { open: '09:00', close: '19:00' }, sunday: { open: '09:00', close: '19:00' } }, notes: 'Timed slots: 9-11, 11-13, 13-15, 15-17, 17-19. 180 visitors per slot.', exceptions: [{ date: '2026-01-01', closed: true, reason: "New Year's Day" }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }], lastUpdated: '2026-02-01' },
      admission: { adult: 22, child: 0, currency: 'EUR', notes: 'Includes 2 EUR reservation. Reduced 11 EUR for EU 18-25.', freeDay: 'First Sunday of every month' },
      tickets: { onlineUrl: 'https://galleriaborghese.beniculturali.it/en/visita/info-biglietti/', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy (limited entry)', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['First slot 9am', 'Winter months'], worstDays: ['Saturday', 'Sunday', 'Summer'], avgVisitDuration: '2 hours (enforced)' },
      tips: ['Advance booking mandatory. Book up to 90 days ahead.', 'Arrive 30 min before slot.', 'Bags larger than 21x15cm go in cloakroom.', 'Metro: Flaminio or Barberini, then 15-20 min walk.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'st228del-frankfurt-am-main-germany',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '21:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Under 18 free. Tuesday 3-6pm just 9 EUR.', freeDay: 'Last Saturday of each month' },
      tickets: { onlineUrl: 'https://www.staedelmuseum.de/en/tickets', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Tuesday afternoon', 'Thu/Fri evenings'], worstDays: ['Last Saturday (free)', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Tuesday 3-6pm just 9 EUR.', 'Thu/Fri open until 9pm.', 'Audio guide via Stadel app.'],
      amenities: { cafe: false, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'birmingham-museum-and-art-gallery-birmingham-uk',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Open daily during Birmingham school holidays.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Exhibitions 8-15 GBP.' },
      crowdData: { overall: 'Moderate', bestDays: ['Wednesday', 'Thursday'], bestTimes: ['Mornings'], worstDays: ['Saturday', 'School holidays'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Staffordshire Hoard display is free.', 'Photography allowed without flash.', 'Open 7 days during school holidays.', 'Near New Street and Snow Hill stations.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
    }
  }
];

async function run() {
  let ok = 0;
  for (const m of museums) {
    try {
      await prisma.museum.update({ where: { slug: m.slug }, data: { hoursOfOperation: m.hoursOfOperation, updatedAt: new Date() } });
      console.log('✓ ' + m.slug);
      ok++;
    } catch (e) { console.error('✗ ' + m.slug + ': ' + e.message.slice(0, 80)); }
  }
  console.log('\nDone: ' + ok + '/' + museums.length);
  await prisma.$disconnect();
}
run();
