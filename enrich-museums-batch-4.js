const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'british-library-london-uk',
    address: '96 Euston Road, London NW1 2DB, United Kingdom',
    latitude: 51.5299,
    longitude: -0.1272,
    websiteUrl: 'https://www.bl.uk',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '09:30', close: '20:00' }, tuesday: { open: '09:30', close: '20:00' }, wednesday: { open: '09:30', close: '20:00' }, thursday: { open: '09:30', close: '20:00' }, friday: { open: '09:30', close: '18:00' }, saturday: { open: '09:30', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free general admission. Ticketed temporary exhibitions vary.' },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings', 'Late afternoons'], worstDays: ['Saturday'], avgVisitDuration: '1-2 hours' },
      tips: ['Treasures Gallery houses Magna Carta, Beatles lyrics, and da Vinci notebooks, all free.', 'Luggage over 56x45x25cm not permitted. Use King\'s Cross station lockers.', 'Free Wi-Fi, no password needed.', 'Adjacent to King\'s Cross and St Pancras stations.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'budapest-museum-of-fine-arts-budapest-hungary',
    address: 'Dózsa György út 41, 1146 Budapest, Hungary',
    latitude: 47.5152,
    longitude: 19.0766,
    websiteUrl: 'https://www.mfab.hu',
    ticketUrl: 'https://www.mfab.hu/tickets/',
    ticketPriceRange: '5,200-6,800 HUF (~€13-17, under 6 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Ticket office closes at 17:00. Monthly "Museum and Slow" Fridays: 12:00-20:00.', lastUpdated: '2026-02-01' },
      admission: { adult: 6800, child: 0, currency: 'HUF', notes: 'Permanent exhibitions 5,200 HUF. Temporary 6,800 HUF. Under 6 free. Over 70 (EEA) free.' },
      tickets: { onlineUrl: 'https://www.mfab.hu/tickets/', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Early afternoon on weekdays'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Buy tickets online; on-site and online quotas are separate.', 'Temporary exhibition ticket includes permanent exhibitions same day.', 'At Heroes\' Square, combine with City Park or Széchenyi Baths.', 'Audio guide available in 7 languages for 1,200 HUF.'],
      amenities: { cafe: true, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'van-gogh-museum',
    address: 'Museumplein 6, 1071 DJ Amsterdam, Netherlands',
    latitude: 52.3584,
    longitude: 4.8811,
    websiteUrl: 'https://www.vangoghmuseum.nl',
    ticketUrl: 'https://tickets.vangoghmuseum.com',
    ticketPriceRange: '€25 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '09:00', close: '17:00' }, tuesday: { open: '09:00', close: '17:00' }, wednesday: { open: '09:00', close: '17:00' }, thursday: { open: '09:00', close: '17:00' }, friday: { open: '09:00', close: '21:00' }, saturday: { open: '09:00', close: '18:00' }, sunday: { open: '09:00', close: '18:00' } }, notes: 'Hours vary during holidays and school vacations.', lastUpdated: '2026-02-01' },
      admission: { adult: 25, child: 0, currency: 'EUR', notes: 'Under 18 free. Tickets ONLY available online, not at the door.' },
      tickets: { onlineUrl: 'https://tickets.vangoghmuseum.com', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['9:00 AM slot', 'Friday evenings'], worstDays: ['Saturday', 'Sunday', 'School holidays'], avgVisitDuration: '2-3 hours' },
      tips: ['Tickets sell out days in advance, especially in summer. Book early.', 'Museum is cashless only. Bring card or mobile payment.', 'Large bags over 45x25x25cm not permitted and cannot be stored.', 'Friday evening is quietest with fewer crowds.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'ashmolean-museum-oxford-uk',
    address: 'Beaumont Street, Oxford OX1 2PH, United Kingdom',
    latitude: 51.7555,
    longitude: -1.2604,
    websiteUrl: 'https://www.ashmolean.org',
    ticketUrl: 'https://www.ashmolean.org/tickets/',
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Last entry 16:45. Open daily.', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free general admission. Temporary exhibitions ticketed.' },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Tuesday', 'Wednesday'], bestTimes: ['10:00-11:00 AM', '4:00-5:00 PM'], worstDays: ['Saturday'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['World\'s first university museum, founded 1683.', 'Pre-book a free timed ticket to guarantee entry.', 'Nine Blue Badge parking spaces on Beaumont Street.', 'Collections range from Egyptian mummies to Pre-Raphaelite paintings.'],
      amenities: { cafe: true, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
    }
  },
  {
    slug: 'brooklyn-museum',
    address: '200 Eastern Parkway, Brooklyn, NY 11238, United States',
    latitude: 40.6712,
    longitude: -73.9636,
    websiteUrl: 'https://www.brooklynmuseum.org',
    ticketUrl: 'https://www.brooklynmuseum.org/visit/tickets',
    ticketPriceRange: '$16 suggested (under 19 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '18:00' }, thursday: { open: '11:00', close: '18:00' }, friday: { open: '11:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 16, child: 0, currency: 'USD', notes: 'Pay-what-you-wish (suggested $16). Under 19 free. Special exhibitions fixed price.' },
      tickets: { onlineUrl: 'https://www.brooklynmuseum.org/visit/tickets', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Wednesday', 'Thursday'], bestTimes: ['First hour after 11 AM opening', 'Late afternoons'], worstDays: ['First Saturday (free but crowded)', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Admission is pay-what-you-wish, including $0.', 'First Saturdays: free admission 5-11 PM with events.', '2/3 subway to Eastern Parkway-Brooklyn Museum station.', 'Free with EBT/SNAP card (up to 4 people).'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'saint-louis-art-museum-st-louis-mo-us',
    address: '1 Fine Arts Drive, Forest Park, St. Louis, MO 63110, United States',
    latitude: 38.6393,
    longitude: -90.2943,
    websiteUrl: 'https://www.slam.org',
    ticketUrl: null,
    ticketPriceRange: 'Free (special exhibitions vary)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '21:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'USD', notes: 'Always free. Special exhibitions ticketed but free on Fridays.' },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings', 'Friday evenings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Funded by local cultural tax district, always free.', 'Friday: free special exhibitions + extended hours until 9 PM.', 'Free parking in lots north of Fine Arts Drive. Underground garage $15.', 'In Forest Park near the free Zoo and Science Center.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'gem228ldegalerie-alte-meister-dresden-germany',
    address: 'Theaterplatz 1, 01067 Dresden, Germany',
    latitude: 51.0533,
    longitude: 13.7345,
    websiteUrl: 'https://gemaeldegalerie.skd.museum/en/',
    ticketUrl: 'https://www.skd.museum/en/visit/',
    ticketPriceRange: '€14-16 (under 17 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Closed March 9-20, 2026 for maintenance.', lastUpdated: '2026-02-01' },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Combined ticket covers 4 Zwinger collections. Under 17 free.' },
      tickets: { onlineUrl: 'https://www.skd.museum/en/visit/', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday', 'Summer cruise ship days'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Online shop currently unavailable due to cyberattack. Cash only at ticket office.', 'Combined ticket covers Old Masters, Sculpture, Instruments, and Porcelain collections.', 'Raphael\'s Sistine Madonna is the star attraction.', 'Photography without flash permitted in permanent exhibitions.'],
      amenities: { cafe: true, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
    }
  },
  {
    slug: 'mus233e-fabre-montpellier-france',
    address: '39 Boulevard Bonne Nouvelle, 34000 Montpellier, France',
    latitude: 43.6114,
    longitude: 3.8810,
    websiteUrl: 'https://www.museefabre.fr',
    ticketUrl: 'https://www.museefabre.fr/informations-pratiques',
    ticketPriceRange: '€7-10 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '18:00' }, wednesday: { open: '11:00', close: '18:00' }, thursday: { open: '11:00', close: '18:00' }, friday: { open: '11:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, notes: 'Ticket office closes at 17:30. Galleries clear at 17:45.', lastUpdated: '2026-02-01' },
      admission: { adult: 8, child: 0, currency: 'EUR', notes: 'Under 18 free. Family pass €14.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://www.museefabre.fr/informations-pratiques', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Around 11 AM opening'], worstDays: ['First Sunday (free day)', 'Saturday'], avgVisitDuration: '1.5-2 hours' },
      tips: ['Tickets valid for one year with unlimited access on day of use.', 'Montpellier City Card (from €22) includes free museum access.', 'Tramway lines 1, 2, 4 to "Corum" stop, 350m walk.', 'Decorative arts wing (Hôtel de Cabrières) open Wed, Sat, Sun only.'],
      amenities: { cafe: true, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
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
