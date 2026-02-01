const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'alte-nationalgalerie',
    address: 'Bodestraße 1-3, 10178 Berlin, Germany',
    latitude: 52.5209, longitude: 13.3987,
    websiteUrl: 'https://www.smb.museum/en/museums-institutions/alte-nationalgalerie/home/',
    ticketUrl: 'https://www.smb.museum/en/museums-institutions/alte-nationalgalerie/visit-plan/',
    ticketPriceRange: '€12 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'ateneum',
    address: 'Kaivokatu 2, 00100 Helsinki, Finland',
    latitude: 60.1707, longitude: 24.9441,
    websiteUrl: 'https://ateneum.fi/en/',
    ticketUrl: 'https://ateneum.fi/en/opening-hours-and-tickets/',
    ticketPriceRange: '€23 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '20:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'barbara-piaseckajohnson-collection-princeton-unive',
    address: 'Princeton University, Princeton, NJ 08544, USA',
    latitude: 40.3487, longitude: -74.6593,
    websiteUrl: 'https://artmuseum.princeton.edu/',
    ticketUrl: null,
    ticketPriceRange: 'Free (university collection)',
    hoursOfOperation: { hours: { notes: 'Collection housed at Princeton University Art Museum.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'basilica-della-santissima-annunziata-florence-ital',
    address: 'Piazza della Santissima Annunziata, 50121 Florence, Italy',
    latitude: 43.7771, longitude: 11.2604,
    websiteUrl: 'https://www.annunziata.xoom.it/',
    ticketUrl: null,
    ticketPriceRange: 'Free (active church)',
    hoursOfOperation: { hours: { regular: { monday: { open: '07:30', close: '12:30' }, tuesday: { open: '07:30', close: '12:30' }, wednesday: { open: '07:30', close: '12:30' }, thursday: { open: '07:30', close: '12:30' }, friday: { open: '07:30', close: '12:30' }, saturday: { open: '07:30', close: '12:30' }, sunday: { open: '07:30', close: '12:30' } }, notes: 'Also open 16:00-18:30 afternoons.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'basilica-of-st-domenico-bologna-italy',
    address: 'Piazza San Domenico 13, 40124 Bologna, Italy',
    latitude: 44.4908, longitude: 11.3428,
    websiteUrl: 'https://www.conventosandomenico.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free (active church)',
    hoursOfOperation: { hours: { regular: { monday: { open: '08:00', close: '12:00' }, tuesday: { open: '08:00', close: '12:00' }, wednesday: { open: '08:00', close: '12:00' }, thursday: { open: '08:00', close: '12:00' }, friday: { open: '08:00', close: '12:00' }, saturday: { open: '08:00', close: '12:00' }, sunday: { open: '08:00', close: '12:00' } }, notes: 'Also open 15:30-18:30 afternoons.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'bavarian-state-painting-collections-munich-germany',
    address: 'Barer Straße 27, 80333 Munich, Germany',
    latitude: 48.1482, longitude: 11.5700,
    websiteUrl: 'https://www.pinakothek.de/en/',
    ticketUrl: 'https://www.pinakothek.de/en/visit/tickets',
    ticketPriceRange: '€7-10 (under 18 free, Sun €1)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '21:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Alte Pinakothek hours. Other locations vary.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'belarusian-national-museum-of-fine-arts-minsk-bela',
    address: 'Lenina Street 20, 220030 Minsk, Belarus',
    latitude: 53.9006, longitude: 27.5590,
    websiteUrl: 'https://www.artmuseum.by/',
    ticketUrl: null,
    ticketPriceRange: 'BYN 10 (~€3)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '19:00' }, wednesday: { open: '11:00', close: '19:00' }, thursday: { open: '11:00', close: '19:00' }, friday: { open: '11:00', close: '19:00' }, saturday: { open: '11:00', close: '19:00' }, sunday: { open: '11:00', close: '19:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'bredius-museum-hague-netherlands',
    address: 'Lange Vijverberg 14, 2513 AC The Hague, Netherlands',
    latitude: 52.0810, longitude: 4.3128,
    websiteUrl: 'https://www.museumbredius.nl/',
    ticketUrl: null,
    ticketPriceRange: '€10',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '17:00' }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'ca39-rezzonico-museo-del-settecento-venice-italy',
    address: 'Dorsoduro 3136, 30123 Venice, Italy',
    latitude: 45.4335, longitude: 12.3267,
    websiteUrl: 'https://carezzonico.visitmuve.it/en/',
    ticketUrl: 'https://carezzonico.visitmuve.it/en/tickets/',
    ticketPriceRange: '€10 (under 6 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Apr-Oct: until 18:00', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'dumbarton-oaks-research-library-and-collection-was',
    address: '1703 32nd Street NW, Washington, DC 20007, USA',
    latitude: 38.9142, longitude: -77.0636,
    websiteUrl: 'https://www.doaks.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free museum (gardens $10)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:30', close: '17:30' }, wednesday: { open: '11:30', close: '17:30' }, thursday: { open: '11:30', close: '17:30' }, friday: { open: '11:30', close: '17:30' }, saturday: { open: '11:30', close: '17:30' }, sunday: { open: '11:30', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'eg-b252hrle-foundation-z252rich-switzerland',
    address: 'Zollikerstrasse 172, 8008 Zürich, Switzerland',
    latitude: 47.3527, longitude: 8.5574,
    websiteUrl: 'https://www.buehrle.ch/',
    ticketUrl: null,
    ticketPriceRange: 'Collection moved to Kunsthaus Zürich',
    hoursOfOperation: { hours: { notes: 'Collection permanently transferred to Kunsthaus Zürich in 2021.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'harris-museum-preston-uk',
    address: 'Market Square, Preston PR1 2PP, UK',
    latitude: 53.7632, longitude: -2.7031,
    websiteUrl: 'https://www.harrismuseum.org.uk/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '11:00', close: '16:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'historical-museum-of-crete-heraclion-greece',
    address: '27 Sofokli Venizelou, 712 02 Heraklion, Greece',
    latitude: 35.3426, longitude: 25.1327,
    websiteUrl: 'https://www.historical-museum.gr/',
    ticketUrl: null,
    ticketPriceRange: '€5 (under 12 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '09:00', close: '17:00' }, tuesday: { open: '09:00', close: '17:00' }, wednesday: { open: '09:00', close: '17:00' }, thursday: { open: '09:00', close: '17:00' }, friday: { open: '09:00', close: '17:00' }, saturday: { open: '09:00', close: '17:00' }, sunday: { closed: true } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'kupferstichkabinett-berlin-berlin-germany',
    address: 'Matthäikirchplatz, 10785 Berlin, Germany',
    latitude: 52.5084, longitude: 13.3664,
    websiteUrl: 'https://www.smb.museum/en/museums-institutions/kupferstichkabinett/',
    ticketUrl: null,
    ticketPriceRange: '€8 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'musee-royal-beaux-arts-antwerp',
    address: 'Leopold de Waelplaats 1, 2000 Antwerp, Belgium',
    latitude: 51.2101, longitude: 4.3937,
    websiteUrl: 'https://kmska.be/en',
    ticketUrl: 'https://tickets.kmska.be/en/tickets',
    ticketPriceRange: '€20 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '22:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'museum-of-russian-art-tereshchenko-museum-kyiv-ukr',
    address: 'Tereshchenkivska Street 9, 01004 Kyiv, Ukraine',
    latitude: 50.4416, longitude: 30.5074,
    websiteUrl: 'https://namu.kiev.ua/',
    ticketUrl: null,
    ticketPriceRange: 'UAH 80 (~€2)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Hours may be affected by the ongoing conflict.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-gallery-of-ancient-art-gnaa-rome-italy',
    address: 'Via delle Quattro Fontane 13, 00184 Rome, Italy',
    latitude: 41.9022, longitude: 12.4875,
    websiteUrl: 'https://www.barberinicorsini.org/en/',
    ticketUrl: 'https://www.barberinicorsini.org/en/tickets/',
    ticketPriceRange: '€15 (EU 18-25 €2, under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '19:00' }, wednesday: { open: '10:00', close: '19:00' }, thursday: { open: '10:00', close: '19:00' }, friday: { open: '10:00', close: '19:00' }, saturday: { open: '10:00', close: '19:00' }, sunday: { open: '10:00', close: '19:00' } }, notes: 'Same as Palazzo Barberini.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-museum-of-san-matteo-pisa-italy',
    address: 'Piazza San Matteo in Soarta, 56127 Pisa, Italy',
    latitude: 43.7173, longitude: 10.4046,
    websiteUrl: 'https://www.museosanmatteo.it/',
    ticketUrl: null,
    ticketPriceRange: '€5 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '08:30', close: '19:30' }, wednesday: { open: '08:30', close: '19:30' }, thursday: { open: '08:30', close: '19:30' }, friday: { open: '08:30', close: '19:30' }, saturday: { open: '08:30', close: '19:30' }, sunday: { open: '08:30', close: '13:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-museum-pozna-poland',
    address: 'Aleje Marcinkowskiego 9, 61-745 Poznań, Poland',
    latitude: 52.4082, longitude: 16.9195,
    websiteUrl: 'https://mnp.art.pl/en/',
    ticketUrl: null,
    ticketPriceRange: 'PLN 20 (~€5, Sat free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '16:00' }, wednesday: { open: '09:00', close: '16:00' }, thursday: { open: '09:00', close: '16:00' }, friday: { open: '09:00', close: '16:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'sammlung-karsch-berlin-germany',
    address: 'Berlin, Germany',
    latitude: 52.5200, longitude: 13.4050,
    websiteUrl: null,
    ticketUrl: null,
    ticketPriceRange: 'Private collection',
    hoursOfOperation: { hours: { notes: 'Private collection, not open to public.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'sheffield-galleries-and-museums-sheffield-uk',
    address: 'Millennium Gallery, Arundel Gate, Sheffield S1 2PP, UK',
    latitude: 53.3811, longitude: -1.4701,
    websiteUrl: 'https://www.museums-sheffield.org.uk/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '11:00', close: '16:00' } }, lastUpdated: '2026-02-01' } }
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
