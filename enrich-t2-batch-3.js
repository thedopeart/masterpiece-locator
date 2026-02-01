const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  // === Agent E: Batch E museums ===
  {
    slug: 'sforza-castle-milan-italy',
    address: 'Piazza Castello, 20121 Milan, Italy',
    latitude: 45.4699, longitude: 9.1800,
    websiteUrl: 'https://www.milanocastello.it/',
    ticketUrl: 'https://www.milanocastello.it/en/content/hours-and-admission',
    ticketPriceRange: '€5 (under 18 free, 1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:30' }, wednesday: { open: '10:00', close: '17:30' }, thursday: { open: '10:00', close: '17:30' }, friday: { open: '10:00', close: '17:30' }, saturday: { open: '10:00', close: '17:30' }, sunday: { open: '10:00', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-dijon-dijon-france',
    address: '1 Rue Rameau, 21000 Dijon, France',
    latitude: 47.3216, longitude: 5.0389,
    websiteUrl: 'https://beaux-arts.dijon.fr/',
    ticketUrl: null,
    ticketPriceRange: 'Free permanent (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '09:30', close: '18:00' }, thursday: { open: '09:30', close: '18:00' }, friday: { open: '09:30', close: '18:00' }, saturday: { open: '09:30', close: '18:00' }, sunday: { open: '09:30', close: '18:00' } }, notes: 'Jun-Sep: 10:00-18:30', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'kunsthalle-bremen',
    address: 'Am Wall 207, 28195 Bremen, Germany',
    latitude: 53.0703, longitude: 8.8082,
    websiteUrl: 'https://www.kunsthalle-bremen.de/en/',
    ticketUrl: 'https://www.kunsthalle-bremen.de/en/plan-your-visit/your-visit',
    ticketPriceRange: '€18 (reduced €7)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '21:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-picasso-paris-france',
    address: '5 Rue de Thorigny, 75003 Paris, France',
    latitude: 48.8597, longitude: 2.3625,
    websiteUrl: 'https://www.museepicassoparis.fr/en/',
    ticketUrl: 'https://www.museepicassoparis.fr/en/tickets',
    ticketPriceRange: '€16 (under 18 free, 1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:30', close: '18:00' }, wednesday: { open: '09:30', close: '18:00' }, thursday: { open: '09:30', close: '18:00' }, friday: { open: '09:30', close: '18:00' }, saturday: { open: '09:30', close: '18:00' }, sunday: { open: '09:30', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'york-art-gallery-york-uk',
    address: 'Exhibition Square, York YO1 7EW, United Kingdom',
    latitude: 53.9623, longitude: -1.0858,
    websiteUrl: 'https://www.yorkartgallery.org.uk/',
    ticketUrl: 'https://www.yorkartgallery.org.uk/tickets/',
    ticketPriceRange: '£7.50 (under 16 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'whitney-museum',
    address: '99 Gansevoort Street, New York, NY 10014, USA',
    latitude: 40.7396, longitude: -74.0089,
    websiteUrl: 'https://whitney.org/',
    ticketUrl: 'https://whitney.org/visit',
    ticketPriceRange: '$25 (under 18 free, Fri 7-10pm free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:30', close: '18:00' }, tuesday: { closed: true }, wednesday: { open: '10:30', close: '18:00' }, thursday: { open: '10:30', close: '18:00' }, friday: { open: '10:30', close: '22:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-cantonal-des-beauxarts-lausanne-switzerlan',
    address: 'Place de la Gare 16, 1003 Lausanne, Switzerland',
    latitude: 46.5183, longitude: 6.6299,
    websiteUrl: 'https://www.mcba.ch/en/',
    ticketUrl: 'https://www.mcba.ch/en/ticketing/',
    ticketPriceRange: 'CHF 15 (under 16 free, 1st Sat free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'isabella-stewart-gardner',
    address: '25 Evans Way, Boston, MA 02115, USA',
    latitude: 42.3381, longitude: -71.0992,
    websiteUrl: 'https://www.gardnermuseum.org/',
    ticketUrl: 'https://www.gardnermuseum.org/visit/admissions',
    ticketPriceRange: '$20 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '11:00', close: '17:00' }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '21:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'crystal-bridges',
    address: '600 Museum Way, Bentonville, AR 72712, USA',
    latitude: 36.3791, longitude: -94.2028,
    websiteUrl: 'https://crystalbridges.org/',
    ticketUrl: 'https://crystalbridges.org/plan-a-visit/',
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '21:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '21:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'museo-civico-di-sansepolcro-sansepolcro-italy',
    address: 'Via Niccolò Aggiunti 65, 52037 Sansepolcro, Italy',
    latitude: 43.5712, longitude: 12.1413,
    websiteUrl: 'https://www.museocivicosansepolcro.it/',
    ticketUrl: 'https://www.museocivicosansepolcro.it/en/informations/opening-hours-and-tickets',
    ticketPriceRange: '€5 (under 10 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '13:00' }, tuesday: { open: '10:00', close: '13:00' }, wednesday: { open: '10:00', close: '13:00' }, thursday: { open: '10:00', close: '13:00' }, friday: { open: '10:00', close: '13:00' }, saturday: { open: '10:00', close: '13:00' }, sunday: { open: '10:00', close: '13:00' } }, notes: 'Also open 14:30-18:00. Summer: until 19:00.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-national-eug232ne-delacroix-paris-france',
    address: '6 Rue de Furstemberg, 75006 Paris, France',
    latitude: 48.8541, longitude: 2.3347,
    websiteUrl: 'https://www.musee-delacroix.fr/en/',
    ticketUrl: 'https://www.musee-delacroix.fr/en/visit/',
    ticketPriceRange: '€9 (under 18 free, 1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '12:00', close: '17:30' }, tuesday: { closed: true }, wednesday: { open: '12:00', close: '17:30' }, thursday: { open: '12:00', close: '17:30' }, friday: { open: '12:00', close: '17:30' }, saturday: { open: '10:00', close: '17:30' }, sunday: { open: '10:00', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'galerie-neue-meister-dresden-germany',
    address: 'Albertinum, Tzschirnerplatz 2, 01067 Dresden, Germany',
    latitude: 51.0519, longitude: 13.7445,
    websiteUrl: 'https://albertinum.skd.museum/en/',
    ticketUrl: 'https://www.skd.museum/en/visit/',
    ticketPriceRange: '€5 (free Mon from 15:00)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Was closed for refurbishment, check website for current status.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'timken-museum-of-art-san-diego-ca-us',
    address: '1500 El Prado, San Diego, CA 92101, USA',
    latitude: 32.7319, longitude: -117.1496,
    websiteUrl: 'https://www.timkenmuseum.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-cognacqjay-paris-france',
    address: '8 Rue Elzévir, 75003 Paris, France',
    latitude: 48.8582, longitude: 2.3615,
    websiteUrl: 'https://www.museecognacqjay.paris.fr/en',
    ticketUrl: null,
    ticketPriceRange: 'Free permanent',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'columbus-museum-of-art-columbus-oh-us',
    address: '480 East Broad Street, Columbus, OH 43215, USA',
    latitude: 39.9609, longitude: -82.9856,
    websiteUrl: 'https://www.columbusmuseum.org/',
    ticketUrl: 'https://www.columbusmuseum.org/admission-tickets-to-cma',
    ticketPriceRange: '$14 (Sun free, Thu eve pay-what-you-wish)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'barber-institute-of-fine-arts-birmingham-uk',
    address: 'University of Birmingham, Edgbaston, Birmingham B15 2TS, UK',
    latitude: 52.4504, longitude: -1.9303,
    websiteUrl: 'https://barber.org.uk/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-rennes-rennes-france',
    address: '20 Quai Emile Zola, 35000 Rennes, France',
    latitude: 48.1115, longitude: -1.6794,
    websiteUrl: 'https://mba.rennes.fr/',
    ticketUrl: null,
    ticketPriceRange: '€3 (under 26 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'scuola-grande-di-san-rocco-venice-italy',
    address: 'Campo San Rocco 3052, 30125 Venice, Italy',
    latitude: 45.4366, longitude: 12.3250,
    websiteUrl: 'https://www.scuolagrandesanrocco.org/home-en/',
    ticketUrl: 'https://www.scuolagrandesanrocco.org/home-en/information/',
    ticketPriceRange: '€12 (under 8 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '09:30', close: '17:30' }, tuesday: { open: '09:30', close: '17:30' }, wednesday: { open: '09:30', close: '17:30' }, thursday: { open: '09:30', close: '17:30' }, friday: { open: '09:30', close: '17:30' }, saturday: { open: '09:30', close: '17:30' }, sunday: { open: '09:30', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-dole-dole-france',
    address: '85 Rue des Arènes, 39100 Dole, France',
    latitude: 47.0933, longitude: 5.4936,
    websiteUrl: 'https://www.doledujura.fr/musee-des-beaux-arts',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '12:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '14:00', close: '18:00' } }, notes: 'Tue: 10-12 & 14-18', lastUpdated: '2026-02-01' } }
  },

  // === Agent F: Batch F museums ===
  {
    slug: 'turku-art-museum-turku-finland',
    address: 'Aurakatu 26, 20100 Turku, Finland',
    latitude: 60.4507, longitude: 22.2680,
    websiteUrl: 'https://turuntaidemuseo.fi/en/',
    ticketUrl: 'https://turuntaidemuseo.fi/en/opening-hours-and-tickets/',
    ticketPriceRange: '€13 (1st Fri 16-19 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '19:00' }, wednesday: { open: '11:00', close: '19:00' }, thursday: { open: '11:00', close: '19:00' }, friday: { open: '11:00', close: '19:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'leighton-house-museum-london-uk',
    address: '12 Holland Park Road, London W14 8LZ, UK',
    latitude: 51.4986, longitude: -0.2031,
    websiteUrl: 'https://www.rbkc.gov.uk/museums/leighton-house',
    ticketUrl: 'https://www.rbkc.gov.uk/museums/leighton-house',
    ticketPriceRange: '£14 (under 5 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:30' }, thursday: { open: '10:00', close: '17:30' }, friday: { open: '10:00', close: '17:30' }, saturday: { open: '10:00', close: '17:30' }, sunday: { open: '10:00', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'galleria-dell39accademia-di-firenze-florence-italy',
    address: 'Via Ricasoli 58/60, 50122 Florence, Italy',
    latitude: 43.7768, longitude: 11.2585,
    websiteUrl: 'https://www.galleriaaccademiafirenze.it/en/',
    ticketUrl: 'https://www.galleriaaccademiafirenze.it/en/tickets/',
    ticketPriceRange: '€16 (1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '08:15', close: '18:50' }, wednesday: { open: '08:15', close: '18:50' }, thursday: { open: '08:15', close: '18:50' }, friday: { open: '08:15', close: '18:50' }, saturday: { open: '08:15', close: '18:50' }, sunday: { open: '08:15', close: '18:50' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'sabauda-gallery-turin-italy',
    address: 'Piazzetta Reale 1, 10122 Turin, Italy',
    latitude: 45.0742, longitude: 7.6860,
    websiteUrl: 'https://museireali.beniculturali.it/',
    ticketUrl: 'https://museireali.beniculturali.it/',
    ticketPriceRange: '€12',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '18:30' }, wednesday: { open: '09:00', close: '18:30' }, thursday: { open: '09:00', close: '18:30' }, friday: { open: '09:00', close: '18:30' }, saturday: { open: '09:00', close: '18:30' }, sunday: { open: '09:00', close: '18:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-de-grenoble-grenoble-france',
    address: '5 Place de Lavalette, 38000 Grenoble, France',
    latitude: 45.1942, longitude: 5.7322,
    websiteUrl: 'https://www.museedegrenoble.fr/',
    ticketUrl: null,
    ticketPriceRange: 'Free permanent (exhibitions €14)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '18:30' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:30' }, thursday: { open: '10:00', close: '18:30' }, friday: { open: '10:00', close: '18:30' }, saturday: { open: '10:00', close: '18:30' }, sunday: { open: '10:00', close: '18:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-strasbourg-strasbourg-fra',
    address: '2 Place du Château, 67000 Strasbourg, France',
    latitude: 48.5809, longitude: 7.7525,
    websiteUrl: 'https://www.musees.strasbourg.eu/musee-des-beaux-arts',
    ticketUrl: null,
    ticketPriceRange: '€7.50 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '12:00', close: '18:00' }, thursday: { open: '12:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'rhode-island-school-of-design-museum-risd-museum-p',
    address: '20 N Main Street, Providence, RI 02903, USA',
    latitude: 41.8260, longitude: -71.4107,
    websiteUrl: 'https://risdmuseum.org/',
    ticketUrl: 'https://risdmuseum.org/hours-admission',
    ticketPriceRange: '$12 (Sun free, Thu 17-20 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '12:00', close: '20:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'hirschsprung-collection-copenhagen-denmark',
    address: 'Stockholmsgade 20, 2100 Copenhagen, Denmark',
    latitude: 55.6880, longitude: 12.5805,
    websiteUrl: 'https://www.hirschsprung.dk/',
    ticketUrl: 'https://www.hirschsprung.dk/en/plan-your-visit/opening-hours-and-admission',
    ticketPriceRange: 'DKK 110 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'moderna-museet-stockholm-sweden',
    address: 'Exercisplan 4, 111 49 Stockholm, Sweden',
    latitude: 59.3258, longitude: 18.0842,
    websiteUrl: 'https://www.modernamuseet.se/en/',
    ticketUrl: 'https://www.modernamuseet.se/stockholm/en/visit-the-museum/',
    ticketPriceRange: '170 SEK (under 18 free, Fri 18-20 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '20:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '20:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-augustins-toulouse-france',
    address: '21 Rue de Metz, 31000 Toulouse, France',
    latitude: 43.6010, longitude: 1.4466,
    websiteUrl: 'https://www.augustins.org/',
    ticketUrl: null,
    ticketPriceRange: '€6 (under 18 free, 1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '12:00', close: '18:00' }, tuesday: { closed: true }, wednesday: { closed: true }, thursday: { open: '12:00', close: '18:00' }, friday: { open: '12:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Reopened Dec 2025 after 6-year renovation.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'kenwood-house',
    address: 'Hampstead Lane, London NW3 7JR, UK',
    latitude: 51.5714, longitude: -0.1675,
    websiteUrl: 'https://www.english-heritage.org.uk/visit/places/kenwood/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'Nov-Mar: 10-16', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'duomo-di-siena-siena-italy',
    address: 'Piazza del Duomo 8, 53100 Siena, Italy',
    latitude: 43.3177, longitude: 11.3289,
    websiteUrl: 'https://operaduomo.siena.it/',
    ticketUrl: 'https://operaduomo.siena.it/',
    ticketPriceRange: '€8 (children free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:30', close: '18:00' }, tuesday: { open: '10:30', close: '18:00' }, wednesday: { open: '10:30', close: '18:00' }, thursday: { open: '10:30', close: '18:00' }, friday: { open: '10:30', close: '18:00' }, saturday: { open: '10:30', close: '18:00' }, sunday: { open: '13:30', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'germanisches-nationalmuseum-nuremberg-germany',
    address: 'Kartäusergasse 1, 90402 Nuremberg, Germany',
    latitude: 49.4480, longitude: 11.0756,
    websiteUrl: 'https://www.gnm.de/',
    ticketUrl: 'https://www.gnm.de/',
    ticketPriceRange: '€10 (free Wed after 17:30)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '20:30' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'indianapolis-museum-of-art-ima-indianapolis-in-us',
    address: '4000 N Michigan Road, Indianapolis, IN 46208, USA',
    latitude: 39.8260, longitude: -86.1857,
    websiteUrl: 'https://discovernewfields.org/',
    ticketUrl: 'https://discovernewfields.org/',
    ticketPriceRange: '$20 (under 6 free, 1st Thu free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '16:00' }, wednesday: { open: '11:00', close: '16:00' }, thursday: { open: '11:00', close: '16:00' }, friday: { open: '11:00', close: '16:00' }, saturday: { open: '11:00', close: '16:00' }, sunday: { open: '11:00', close: '16:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'museum-de-lakenhal-leiden-netherlands',
    address: 'Oude Singel 32, 2312 RA Leiden, Netherlands',
    latitude: 52.1570, longitude: 4.4929,
    websiteUrl: 'https://www.lakenhal.nl/en/',
    ticketUrl: null,
    ticketPriceRange: '€16 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'apsley-house-wellington-museum-london-uk',
    address: '149 Piccadilly, London W1J 7NT, UK',
    latitude: 51.5035, longitude: -0.1539,
    websiteUrl: 'https://www.english-heritage.org.uk/visit/places/apsley-house/',
    ticketUrl: 'https://www.english-heritage.org.uk/visit/places/apsley-house/',
    ticketPriceRange: '£11.80-13.80 (under 5 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, notes: 'Nov-Mar: 11-16', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'fine-arts-museums-of-san-francisco-san-francisco-c',
    address: '50 Hagiwara Tea Garden Drive, San Francisco, CA 94118, USA',
    latitude: 37.7715, longitude: -122.4688,
    websiteUrl: 'https://www.famsf.org/',
    ticketUrl: 'https://www.famsf.org/',
    ticketPriceRange: '$20 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:30', close: '17:15' }, wednesday: { open: '09:30', close: '17:15' }, thursday: { open: '09:30', close: '17:15' }, friday: { open: '09:30', close: '17:15' }, saturday: { open: '09:30', close: '17:15' }, sunday: { open: '09:30', close: '17:15' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-portrait-gallery-washington-dc-usa',
    address: '8th & G Streets NW, Washington, DC 20001, USA',
    latitude: 38.8978, longitude: -77.0230,
    websiteUrl: 'https://npg.si.edu/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { open: '11:30', close: '19:00' }, tuesday: { open: '11:30', close: '19:00' }, wednesday: { open: '11:30', close: '19:00' }, thursday: { open: '11:30', close: '19:00' }, friday: { open: '11:30', close: '19:00' }, saturday: { open: '11:30', close: '19:00' }, sunday: { open: '11:30', close: '19:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'barnes-foundation-philadelphia-pa-us',
    address: '2025 Benjamin Franklin Parkway, Philadelphia, PA 19130, USA',
    latitude: 39.9606, longitude: -75.1728,
    websiteUrl: 'https://www.barnesfoundation.org/',
    ticketUrl: 'https://www.barnesfoundation.org/plan-your-visit',
    ticketPriceRange: '$12 (1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '11:00', close: '17:00' }, tuesday: { closed: true }, wednesday: { closed: true }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-gallery-ireland',
    address: 'Merrion Square West, Dublin 2, Ireland',
    latitude: 53.3409, longitude: -6.2523,
    websiteUrl: 'https://www.nationalgallery.ie/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { open: '11:00', close: '17:30' }, tuesday: { open: '09:15', close: '17:30' }, wednesday: { open: '09:15', close: '17:30' }, thursday: { open: '09:15', close: '20:30' }, friday: { open: '09:15', close: '17:30' }, saturday: { open: '09:15', close: '17:30' }, sunday: { open: '11:00', close: '17:30' } }, lastUpdated: '2026-02-01' } }
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
