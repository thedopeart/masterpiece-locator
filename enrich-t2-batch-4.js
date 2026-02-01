const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  // === Agent G: Batch G museums ===
  {
    slug: 'hospital-de-la-caridad-seville-spain',
    address: 'Calle Temprado 3, 41001 Seville, Spain',
    latitude: 37.3838, longitude: -5.9972,
    websiteUrl: 'https://www.santa-caridad.es/',
    ticketUrl: 'https://shop.articketing.com/monuments/hospital-de-la-santa-caridad/tickets',
    ticketPriceRange: '€8 (under 7 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:30', close: '19:00' }, tuesday: { open: '10:30', close: '19:00' }, wednesday: { open: '10:30', close: '19:00' }, thursday: { open: '10:30', close: '19:00' }, friday: { open: '10:30', close: '19:00' }, saturday: { open: '14:00', close: '19:00' }, sunday: { open: '14:00', close: '19:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'convent-of-san-paolo-parma-italy',
    address: 'Via Macedonio Melloni, 43121 Parma, Italy',
    latitude: 44.8040, longitude: 10.3298,
    websiteUrl: 'https://www.complessodellapilotta.it/',
    ticketUrl: null,
    ticketPriceRange: '€5-7 (1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '08:30', close: '13:45' }, wednesday: { open: '08:30', close: '13:45' }, thursday: { open: '08:30', close: '13:45' }, friday: { open: '08:30', close: '13:45' }, saturday: { open: '08:30', close: '13:45' }, sunday: { open: '08:30', close: '13:45' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'museo-poldi-pezzoli-milan-italy',
    address: 'Via Alessandro Manzoni 12, 20121 Milan, Italy',
    latitude: 45.4701, longitude: 9.1924,
    websiteUrl: 'https://museopoldipezzoli.it/en/',
    ticketUrl: 'https://museopoldipezzoli.it/en/visit/',
    ticketPriceRange: '€12 (under 11 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'pinacoteca-tosio-martinengo-brescia-italy',
    address: 'Piazza Moretto 4, 25121 Brescia, Italy',
    latitude: 45.5362, longitude: 10.2195,
    websiteUrl: 'https://www.bresciamusei.com/en/museums-and-venues/pinacoteca-tosio-martinengo/',
    ticketUrl: 'https://www.bresciamusei.com/',
    ticketPriceRange: '€10-13',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Jun-Sep: until 19:00', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'capitoline-museums-rome-italy',
    address: 'Piazza del Campidoglio 1, 00186 Rome, Italy',
    latitude: 41.8933, longitude: 12.4828,
    websiteUrl: 'https://www.museicapitolini.org/en/',
    ticketUrl: 'https://www.museicapitolini.org/en/biglietti-e-prenotazioni/tickets-and-videoguides',
    ticketPriceRange: '€15 (1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '09:30', close: '19:30' }, tuesday: { open: '09:30', close: '19:30' }, wednesday: { open: '09:30', close: '19:30' }, thursday: { open: '09:30', close: '19:30' }, friday: { open: '09:30', close: '19:30' }, saturday: { open: '09:30', close: '19:30' }, sunday: { open: '09:30', close: '19:30' } }, notes: 'Last entry 18:30', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'museo-nacional-de-bellas-artes-mnba-buenos-aires-a',
    address: 'Avenida del Libertador 1473, Buenos Aires, Argentina',
    latitude: -34.5836, longitude: -58.3934,
    websiteUrl: 'https://www.bellasartes.gob.ar/en/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '20:00' }, wednesday: { open: '11:00', close: '20:00' }, thursday: { open: '11:00', close: '20:00' }, friday: { open: '11:00', close: '20:00' }, saturday: { open: '10:00', close: '20:00' }, sunday: { open: '10:00', close: '20:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-museum-of-serbia-belgrade-serbia',
    address: 'Trg Republike 1a, 11000 Belgrade, Serbia',
    latitude: 44.8152, longitude: 20.4572,
    websiteUrl: 'https://www.narodnimuzej.rs/en/',
    ticketUrl: 'https://www.narodnimuzej.rs/visit-us/?lang=en',
    ticketPriceRange: '600 RSD (~€5, free Sundays)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-bordeaux-bordeaux-france',
    address: "20 Cours d'Albret, 33000 Bordeaux, France",
    latitude: 44.8370, longitude: -0.5806,
    websiteUrl: 'https://www.musba-bordeaux.fr/en/',
    ticketUrl: null,
    ticketPriceRange: '€4 (1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '18:00' }, thursday: { open: '11:00', close: '18:00' }, friday: { open: '11:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'academy-of-fine-arts-vienna-vienna-austria',
    address: 'Schillerplatz 3, 1010 Vienna, Austria',
    latitude: 48.2002, longitude: 16.3679,
    websiteUrl: 'https://www.akbild.ac.at/en/',
    ticketUrl: null,
    ticketPriceRange: '€12 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'cincinnati-art-museum-cincinnati-oh-us',
    address: '953 Eden Park Drive, Cincinnati, OH 45202, USA',
    latitude: 39.1173, longitude: -84.4967,
    websiteUrl: 'https://www.cincinnatiartmuseum.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '17:00' }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '20:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'brancacci-chapel',
    address: 'Piazza del Carmine 14, 50124 Florence, Italy',
    latitude: 43.7683, longitude: 11.2437,
    websiteUrl: 'https://ticketsmuseums.comune.fi.it/4_cappella-brancacci/',
    ticketUrl: 'https://ticketsmuseums.comune.fi.it/4_cappella-brancacci/',
    ticketPriceRange: '€6 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '13:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'sorolla-museum',
    address: 'Paseo del General Martínez Campos 37, 28010 Madrid, Spain',
    latitude: 40.4353, longitude: -3.6923,
    websiteUrl: 'https://www.cultura.gob.es/msorolla/en/',
    ticketUrl: null,
    ticketPriceRange: '€3 (CLOSED for renovation, reopening early 2026)',
    hoursOfOperation: { hours: { notes: 'Temporarily closed for renovation. Expected reopening early 2026.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'musee-ostende',
    address: 'Romestraat 11, 8400 Ostend, Belgium',
    latitude: 51.2244, longitude: 2.9082,
    websiteUrl: 'https://www.muzee.be/en',
    ticketUrl: 'https://www.muzee.be/en',
    ticketPriceRange: '€15 (ages 13-25 €3)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:30' }, wednesday: { open: '10:00', close: '17:30' }, thursday: { open: '10:00', close: '17:30' }, friday: { open: '10:00', close: '17:30' }, saturday: { open: '10:00', close: '17:30' }, sunday: { open: '10:00', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-museum-gdansk',
    address: 'Toruńska 1, 80-822 Gdańsk, Poland',
    latitude: 54.3488, longitude: 18.6570,
    websiteUrl: 'https://mng.gda.pl/en/',
    ticketUrl: null,
    ticketPriceRange: 'PLN 20 (~€5, Fri free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'cooper-hewitt-smithsonian-design-museum-new-york-c',
    address: '2 East 91st Street, New York, NY 10128, USA',
    latitude: 40.7853, longitude: -73.9577,
    websiteUrl: 'https://www.cooperhewitt.org/',
    ticketUrl: 'https://www.cooperhewitt.org/visit/plan-your-visit/',
    ticketPriceRange: '$15 (under 18 free, Sat 18-21 PWYW)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '21:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'art-gallery-of-new-south-wales-agnsw-sydney-austra',
    address: 'Art Gallery Road, The Domain, Sydney, NSW 2000, Australia',
    latitude: -33.8688, longitude: 151.2173,
    websiteUrl: 'https://www.artgallery.nsw.gov.au/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '22:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'schloss-charlottenburg-berlin-germany',
    address: 'Spandauer Damm 10-22, 14059 Berlin, Germany',
    latitude: 52.5197, longitude: 13.2956,
    websiteUrl: 'https://www.spsg.de/en/palaces-gardens/object/charlottenburg-palace-old-palace/',
    ticketUrl: 'https://www.spsg.de/en/',
    ticketPriceRange: '€12 (reduced €8)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:30' }, wednesday: { open: '10:00', close: '17:30' }, thursday: { open: '10:00', close: '17:30' }, friday: { open: '10:00', close: '17:30' }, saturday: { open: '10:00', close: '17:30' }, sunday: { open: '10:00', close: '17:30' } }, notes: 'Nov-Mar: 10-16:30', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'virginia-museum-of-fine-arts-richmond-va-us',
    address: '200 N Arthur Ashe Boulevard, Richmond, VA 23220, USA',
    latitude: 37.5407, longitude: -77.4737,
    websiteUrl: 'https://www.vmfa.museum/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '21:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '21:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Open 365 days/year', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'folkwang-museum-essen-germany',
    address: 'Museumsplatz 1, 45128 Essen, Germany',
    latitude: 51.4509, longitude: 7.0144,
    websiteUrl: 'https://www.museum-folkwang.de/en',
    ticketUrl: 'https://www.museum-folkwang.de/en',
    ticketPriceRange: 'Free permanent (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '20:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'whitworth-art-gallery-university-of-manchester-man',
    address: 'Oxford Road, Manchester M15 6ER, UK',
    latitude: 53.4597, longitude: -2.2287,
    websiteUrl: 'https://www.whitworth.manchester.ac.uk/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'auckland-art-gallery-auckland-new-zealand',
    address: 'Corner Kitchener & Wellesley Streets, Auckland 1010, New Zealand',
    latitude: -36.8525, longitude: 174.7631,
    websiteUrl: 'https://www.aucklandartgallery.com/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'kunstmuseum-bonn-bonn-germany',
    address: 'Friedrich-Ebert-Allee 2, 53113 Bonn, Germany',
    latitude: 50.7167, longitude: 7.1217,
    websiteUrl: 'https://www.kunstmuseum-bonn.de/en/',
    ticketUrl: null,
    ticketPriceRange: '€7 (under 18 free, 1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '18:00' }, wednesday: { open: '11:00', close: '21:00' }, thursday: { open: '11:00', close: '18:00' }, friday: { open: '11:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'kunstmuseum-liechtenstein-vaduz-liechtenstein',
    address: 'Städtle 32, 9490 Vaduz, Liechtenstein',
    latitude: 47.1411, longitude: 9.5215,
    websiteUrl: 'https://kunstmuseum.li/',
    ticketUrl: null,
    ticketPriceRange: 'CHF 12 (under 5 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'hecht-museum-university-of-haifa-haifa-israel',
    address: '199 Aba-Hushi Avenue, University of Haifa, Haifa, Israel',
    latitude: 32.7639, longitude: 35.0194,
    websiteUrl: 'https://mushecht.haifa.ac.il/?lang=en',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '16:00' }, tuesday: { open: '10:00', close: '19:00' }, wednesday: { open: '10:00', close: '16:00' }, thursday: { open: '10:00', close: '16:00' }, friday: { open: '10:00', close: '13:00' }, saturday: { open: '10:00', close: '14:00' }, sunday: { open: '10:00', close: '16:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'musee-d39art-moderne-de-troyes-troyes-france',
    address: '14 Place Saint-Pierre, 10000 Troyes, France',
    latitude: 48.2965, longitude: 4.0762,
    websiteUrl: 'https://musees-troyes.com/musees/musee-dart-moderne/',
    ticketUrl: null,
    ticketPriceRange: '€12 (combined ticket)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '13:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Tue: 10-13 & 14-18', lastUpdated: '2026-02-01' } }
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
