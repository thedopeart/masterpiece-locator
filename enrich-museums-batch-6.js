const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'gemeentemuseum-den-haag-hague-netherlands',
    address: 'Stadhouderslaan 41, 2517 HV Den Haag, Netherlands',
    latitude: 52.0899,
    longitude: 4.2807,
    websiteUrl: 'https://www.kunstmuseum.nl/en',
    ticketUrl: 'https://www.kunstmuseum.nl/en/visit',
    ticketPriceRange: '€16 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Under 18 free. Museumkaart accepted.' },
      tickets: { onlineUrl: 'https://www.kunstmuseum.nl/en/visit', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1.5-2 hours' },
      tips: ['World\'s largest Mondrian collection.', 'Reserve timed entry in advance, even with Museumkaart.', 'Tram 17 from Den Haag Centraal to museum stop.', 'Shop accessible without museum ticket.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'kroeller-mueller-museum',
    address: 'Houtkampweg 6, 6731 AW Otterlo, Netherlands',
    latitude: 52.0908,
    longitude: 5.8168,
    websiteUrl: 'https://krollermuller.nl/en',
    ticketUrl: 'https://krollermuller.nl/en/opening-hours-and-prices',
    ticketPriceRange: '€13.85 + park entry (under 6 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Open daily in summer (Jul-Aug). Sculpture garden open until 19:00 weekdays in summer.', lastUpdated: '2026-02-01' },
      admission: { adult: 13.85, child: 0, currency: 'EUR', notes: 'Combined museum + park day ticket. Car/motorcycle park entry €9.80 extra. Under 6 free.' },
      tickets: { onlineUrl: 'https://krollermuller.nl/en/opening-hours-and-prices', skipTheLine: false, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday afternoons after 14:00'], worstDays: ['Saturday', 'Sunday', 'Summer weekends'], avgVisitDuration: '2-3 hours' },
      tips: ['Must also pay park entrance. Free white bicycles at park entrance.', 'Museum is cashless. Card or app payments only.', 'Sculpture garden is one of Europe\'s largest. Wear comfortable shoes.', 'Dubuffet Jardin d\'émail only open Apr-Nov in dry conditions.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'national-gallery-of-denmark-statens-museum-for-kun',
    address: 'Sølvgade 48-50, 1307 Copenhagen K, Denmark',
    latitude: 55.6888,
    longitude: 12.5779,
    websiteUrl: 'https://www.smk.dk/en/',
    ticketUrl: 'https://www.smk.dk/en/section/visit-smk/',
    ticketPriceRange: '140 DKK (~€19, under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '20:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Open some holiday Mondays. SMK Fridays (last Friday/month) with extended hours.', lastUpdated: '2026-02-01' },
      admission: { adult: 140, child: 0, currency: 'DKK', notes: 'Under 18 free. Young adults (18-27) 95 DKK. Copenhagen Card accepted.' },
      tickets: { onlineUrl: 'https://www.smk.dk/en/section/visit-smk/', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Thursday'], bestTimes: ['Weekday mornings', 'Wednesday evenings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Wednesday late opening until 20:00 is great for avoiding crowds.', 'Under 18 free, very family-friendly with stroller parking and nursing rooms.', 'Danish Golden Age and Matisse collections are highlights.', 'Magnolia café overlooks Østre Anlæg park.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'neue-pinakothek',
    address: 'Barer Straße 29, 80799 Munich, Germany',
    latitude: 48.1497,
    longitude: 11.5700,
    websiteUrl: 'https://www.pinakothek.de/en/neue-pinakothek',
    ticketUrl: null,
    ticketPriceRange: 'CLOSED (reopening ~2029-2030)',
    hoursOfOperation: {
      hours: { notes: 'CLOSED FOR RENOVATION since January 2019. Expected reopening 2029-2030. Key works displayed at Alte Pinakothek (Barer Straße 27): Tue 10-20, Wed-Sun 10-18, €7 (Sunday €1).', lastUpdated: '2026-02-01' },
      admission: { adult: 0, child: 0, currency: 'EUR', notes: 'Building closed. See collection at Alte Pinakothek (€7, Sunday €1) and Sammlung Schack.' },
      crowdData: { overall: 'N/A (closed)', bestDays: [], bestTimes: [], worstDays: [], avgVisitDuration: 'N/A' },
      tips: ['Do NOT visit the Neue Pinakothek building. It is a construction site.', 'Key works by Caspar David Friedrich and Impressionists at Alte Pinakothek ground floor.', 'Sunday is €1 day across all Pinakotheken museums.', 'Renovation costs €220 million due to roof, asbestos, and climate system issues.'],
      amenities: { cafe: false, wifi: false, lockers: false, giftShop: false },
      accessibility: { wheelchairAccessible: false, audioGuide: false }
    }
  },
  {
    slug: 'frick-collection',
    address: '1 East 70th Street, New York, NY 10021, United States',
    latitude: 40.7710,
    longitude: -73.9673,
    websiteUrl: 'https://www.frick.org',
    ticketUrl: 'https://www.frick.org/tickets',
    ticketPriceRange: '$30 (ages 10-17 free, under 10 not admitted)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:30', close: '17:30' }, tuesday: { closed: true }, wednesday: { open: '10:30', close: '17:30' }, thursday: { closed: true }, friday: { open: '10:30', close: '20:30' }, saturday: { open: '10:30', close: '17:30' }, sunday: { open: '10:30', close: '17:30' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 30, child: 0, currency: 'USD', notes: 'Senior $22. Student $17. Ages 10-17 free. Under 10 not admitted. SNAP/EBT free.' },
      tickets: { onlineUrl: 'https://www.frick.org/tickets', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Wednesday'], bestTimes: ['Monday morning', 'Friday evening'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1.5-2 hours' },
      tips: ['Children under 10 not permitted.', 'Newly renovated building reopened spring 2025 ($220M renovation).', 'Wednesday pay-what-you-wish 1:30-5:30 PM (advance reservation required).', 'Friday evenings until 8:30 PM are quieter. No luggage accepted.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'groeningemuseum',
    address: 'Dijver 12, 8000 Brugge, Belgium',
    latitude: 51.2047,
    longitude: 3.2267,
    websiteUrl: 'https://www.museabrugge.be/en/visit/locations/groeningemuseum',
    ticketUrl: 'https://www.museabrugge.be',
    ticketPriceRange: '€15 (under 16 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '09:30', close: '17:00' }, wednesday: { open: '09:30', close: '17:00' }, thursday: { open: '09:30', close: '17:00' }, friday: { open: '09:30', close: '17:00' }, saturday: { open: '09:30', close: '17:00' }, sunday: { open: '09:30', close: '17:00' } }, notes: 'Last entry 16:30.', lastUpdated: '2026-02-01' },
      admission: { adult: 15, child: 0, currency: 'EUR', notes: 'Under 26: ~€10. Under 16 free. Musea Brugge Card covers entry.' },
      tickets: { onlineUrl: 'https://www.museabrugge.be', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Right at 9:30 opening', 'Late afternoon'], worstDays: ['Saturday', 'Sunday', 'Summer'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Free digital audio guide (MB Explorer) via QR codes. Bring headphones.', 'Van Eyck\'s Madonna with Canon van der Paele is the highlight.', 'Musea Brugge Card covers multiple museums over 72 hours.', 'Peaceful museum garden for resting between galleries.'],
      amenities: { cafe: false, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'lenbachhaus',
    address: 'Luisenstraße 33, 80333 Munich, Germany',
    latitude: 48.1415,
    longitude: 11.5582,
    websiteUrl: 'https://www.lenbachhaus.de/en/',
    ticketUrl: 'https://www.lenbachhaus.de/en/visit/plan-your-visit',
    ticketPriceRange: '€10 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '20:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Open on public holidays (Tue-Sun schedule). Closed holiday Mondays.', lastUpdated: '2026-02-01' },
      admission: { adult: 10, child: 0, currency: 'EUR', notes: 'Under 18 free. Audio guide included. Reduced €8 Jan 26-Mar 8, 2026 (Blue Rider renovation).', freeDay: 'First Thursday of each month 18:00-22:00' },
      tickets: { onlineUrl: 'https://www.lenbachhaus.de/en/visit/plan-your-visit', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Tuesday evenings', 'Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1.5-2 hours' },
      tips: ['World\'s largest Kandinsky collection (Blue Rider/Der Blaue Reiter).', 'Audio guide included with admission.', 'First Thursday evening (18:00-22:00) is free.', '5-minute walk from Munich Hauptbahnhof. U2/U8 to Königsplatz.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'musee-bonnat',
    address: '5 Rue Jacques Laffitte, 64100 Bayonne, France',
    latitude: 43.4921,
    longitude: -1.4722,
    websiteUrl: 'https://mbh.bayonne.fr/en/',
    ticketUrl: 'https://billetterie-mbh.bayonne.fr/',
    ticketPriceRange: '€9-11 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '12:00', close: '20:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Reopened November 2025 after 14 years of renovation.', lastUpdated: '2026-02-01' },
      admission: { adult: 11, child: 0, currency: 'EUR', notes: 'Low season (Nov-Apr) €9. High season (May-Oct) €11. Under 18 free. Disabled + companion free.' },
      crowdData: { overall: 'Low', bestDays: ['Monday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1-2 hours' },
      tips: ['Just reopened November 2025 after 14 years of renovation.', 'Friday late opening 12:00-20:00 for quieter evening visits.', 'Collection features Rubens, El Greco, Goya, Ingres, Degas.', 'Walkable from train station. Parking at Allées Boufflers.'],
      amenities: { cafe: false, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: false, audioGuide: false }
    }
  },
  {
    slug: 'museum-boijmans-van-beuningen-rotterdam-netherland',
    address: 'Museumpark 18-20, 3015 CX Rotterdam, Netherlands',
    latitude: 51.9141,
    longitude: 4.4726,
    websiteUrl: 'https://www.boijmans.nl/en',
    ticketUrl: 'https://www.boijmans.nl/en/tickets',
    ticketPriceRange: 'Main CLOSED. Depot: €20 (under 18 free)',
    hoursOfOperation: {
      hours: { notes: 'MAIN BUILDING CLOSED FOR RENOVATION (reopening ~2030). Visit Depot Boijmans Van Beuningen (Museumpark 24): Tue-Sun 11:00-17:00. Rooftop extended Thu-Sat evenings.', lastUpdated: '2026-02-01' },
      admission: { adult: 20, child: 0, currency: 'EUR', notes: 'Depot admission. Main building closed until ~2030. Museumkaart accepted. Cashless only.' },
      crowdData: { overall: 'Moderate (Depot)', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '1.5-2 hours' },
      tips: ['Do NOT go to main museum building. Visit the Depot instead.', 'Depot is cashless. Bring card or payment app.', 'Book timed tickets online, especially for weekends.', 'Rooftop terrace with mirrored bowl is a highlight. Restaurant Renilde for dinner Thu-Sat.'],
      amenities: { cafe: true, wifi: false, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: false }
    }
  },
  {
    slug: 'palais-des-beauxarts-de-lille-lille-france',
    address: 'Place de la République, 59000 Lille, France',
    latitude: 50.6249,
    longitude: 3.0577,
    websiteUrl: 'https://pba.lille.fr/en/',
    ticketUrl: 'https://pba.lille.fr/en/Information',
    ticketPriceRange: '€7 (under 12 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { open: '14:00', close: '18:00' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' },
      admission: { adult: 7, child: 0, currency: 'EUR', notes: 'Reduced €4 after 16:30 weekdays. Under 12 free. Lille residents free on Sundays.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://pba.lille.fr/en/Information', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings', 'Monday afternoon'], worstDays: ['First free Sunday', 'Saturday'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['At €7, one of Europe\'s best-value major art museums. €4 after 16:30 weekdays.', 'Basement relief maps of fortified cities are easy to miss but worth seeing.', 'Metro Republique-Beaux-Arts (Line 1) is steps away.', 'France\'s second-largest fine arts museum after the Louvre.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'national-gallery-of-umbria-palazzo-dei-priori-peru',
    address: 'Corso Vannucci 19, 06123 Perugia, Italy',
    latitude: 43.1116,
    longitude: 12.3886,
    websiteUrl: 'https://gallerianazionaledellumbria.it',
    ticketUrl: 'https://gallerianazionaledellumbria.it/visita/',
    ticketPriceRange: '€10-12 (under 18 free)',
    hoursOfOperation: {
      hours: { regular: { monday: { closed: true }, tuesday: { open: '08:30', close: '19:30' }, wednesday: { open: '08:30', close: '19:30' }, thursday: { open: '08:30', close: '19:30' }, friday: { open: '08:30', close: '19:30' }, saturday: { open: '08:30', close: '19:30' }, sunday: { open: '08:30', close: '19:30' } }, notes: 'Closed Mondays Nov-Jun. Jul-Oct: Mon 12:00-19:30, Tue-Sun 8:30-19:30. Ticket office closes 18:30.', lastUpdated: '2026-02-01' },
      admission: { adult: 10, child: 0, currency: 'EUR', notes: '€12 during special exhibitions. Under 18 free. EU 18-25 €2. €2 reservation fee on free days.', freeDay: 'First Sunday of every month' },
      tickets: { onlineUrl: 'https://gallerianazionaledellumbria.it/visita/', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Morning 8:30-10:30'], worstDays: ['Saturday', 'First Sunday', 'Summer'], avgVisitDuration: '2-3 hours' },
      tips: ['40 exhibition rooms with 500+ works spanning 13th-19th centuries.', 'Must leave backpacks and large bags in free cloakroom.', 'Audio guide €5, recommended for Umbrian religious art context.', 'Key works by Perugino, Pinturicchio, and Fra Angelico.'],
      amenities: { cafe: false, wifi: false, lockers: true, giftShop: true },
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
