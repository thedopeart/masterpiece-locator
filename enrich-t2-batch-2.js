const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  // === Agent C: Batch C museums ===
  {
    slug: 'basilica-of-san-francesco-arezzo-italy',
    address: 'Piazza San Francesco 1, 52100 Arezzo, Italy',
    latitude: 43.4645, longitude: 11.8809,
    websiteUrl: 'http://polomusealetoscana.beniculturali.it',
    ticketUrl: null,
    ticketPriceRange: '€8 (1st Sun free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '09:00', close: '19:00' }, tuesday: { closed: true }, wednesday: { open: '09:00', close: '19:00' }, thursday: { open: '09:00', close: '19:00' }, friday: { open: '09:00', close: '19:00' }, saturday: { open: '09:00', close: '19:00' }, sunday: { open: '13:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-lyon-lyon-france',
    address: '20 Place des Terreaux, 69001 Lyon, France',
    latitude: 45.7672, longitude: 4.8336,
    websiteUrl: 'https://www.mba-lyon.fr/en',
    ticketUrl: 'https://www.mba-lyon.fr/en/article/ticketing-admission',
    ticketPriceRange: '€8 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:30', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'ch226teau-de-versailles-versailles-france',
    address: "Place d'Armes, 78000 Versailles, France",
    latitude: 48.8047, longitude: 2.1207,
    websiteUrl: 'https://en.chateauversailles.fr/',
    ticketUrl: 'https://en.chateauversailles.fr/plan-your-visit/tickets-and-prices',
    ticketPriceRange: '€28.50 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '17:30' }, wednesday: { open: '09:00', close: '17:30' }, thursday: { open: '09:00', close: '17:30' }, friday: { open: '09:00', close: '17:30' }, saturday: { open: '09:00', close: '17:30' }, sunday: { open: '09:00', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'vienna-museum-vienna-austria',
    address: 'Karlsplatz 8, 1040 Vienna, Austria',
    latitude: 48.1960, longitude: 16.3686,
    websiteUrl: 'https://www.wienmuseum.at/en',
    ticketUrl: 'https://www.wienmuseum.at/en',
    ticketPriceRange: 'Free permanent (exhibitions €12)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'fogg-museum-harvard-art-museums-cambridge-ma-us',
    address: '32 Quincy Street, Cambridge, MA 02138, USA',
    latitude: 42.3766, longitude: -71.1147,
    websiteUrl: 'https://harvardartmuseums.org/',
    ticketUrl: 'https://harvardartmuseums.org/visit',
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-d39art-et-d39histoire-geneva-switzerland',
    address: 'Rue Charles-Galland 2, 1206 Geneva, Switzerland',
    latitude: 46.1972, longitude: 6.1532,
    websiteUrl: 'https://www.mahmah.ch/en',
    ticketUrl: null,
    ticketPriceRange: 'Free permanent (exhibitions CHF 5)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '18:00' }, wednesday: { open: '11:00', close: '18:00' }, thursday: { open: '11:00', close: '18:00' }, friday: { open: '11:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'accademia-carrara-bergamo-italy',
    address: 'Piazza Giacomo Carrara 82, 24121 Bergamo, Italy',
    latitude: 45.7038, longitude: 9.6758,
    websiteUrl: 'https://www.lacarrara.it/en/',
    ticketUrl: 'https://www.lacarrara.it/en/visit/tickets-opening-hours/',
    ticketPriceRange: '€10 (under 5 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '09:00', close: '17:30' }, tuesday: { closed: true }, wednesday: { open: '09:00', close: '17:30' }, thursday: { open: '09:00', close: '17:30' }, friday: { open: '09:00', close: '17:30' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'detroit-institute-of-arts',
    address: '5200 Woodward Avenue, Detroit, MI 48202, USA',
    latitude: 42.3594, longitude: -83.0645,
    websiteUrl: 'https://dia.org/',
    ticketUrl: 'https://dia.org/tickets',
    ticketPriceRange: 'Free for county residents',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:00', close: '16:00' }, wednesday: { open: '09:00', close: '16:00' }, thursday: { open: '09:00', close: '16:00' }, friday: { open: '09:00', close: '21:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'royal-museum-of-fine-arts-antwerp-dutch-koninklijk',
    address: 'Leopold de Waelplaats 1, 2000 Antwerp, Belgium',
    latitude: 51.2101, longitude: 4.3937,
    websiteUrl: 'https://kmska.be/en',
    ticketUrl: 'https://tickets.kmska.be/en/tickets',
    ticketPriceRange: '€20 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '22:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'minneapolis-institute-of-art',
    address: '2400 Third Avenue South, Minneapolis, MN 55404, USA',
    latitude: 44.9584, longitude: -93.2733,
    websiteUrl: 'https://new.artsmia.org/',
    ticketUrl: 'https://tickets.artsmia.org/',
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'phillips-collection',
    address: '1600 21st Street NW, Washington, DC 20009, USA',
    latitude: 38.9115, longitude: -77.0469,
    websiteUrl: 'https://www.phillipscollection.org/',
    ticketUrl: 'https://www.phillipscollection.org/visit',
    ticketPriceRange: '$10 (Tue-Fri by donation)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'wallrafrichartz-museum-cologne-germany',
    address: 'Obenmarspforten 40, 50667 Cologne, Germany',
    latitude: 50.9373, longitude: 6.9584,
    websiteUrl: 'https://www.wallraf.museum/en/',
    ticketUrl: 'https://www.wallraf.museum/en/the-museum/visitors-information/admission/',
    ticketPriceRange: '€12 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '22:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'guggenheim',
    address: '1071 Fifth Avenue, New York, NY 10128, USA',
    latitude: 40.7830, longitude: -73.9590,
    websiteUrl: 'https://www.guggenheim.org/',
    ticketUrl: 'https://www.guggenheim.org/buy-tickets',
    ticketPriceRange: '$22 (under 12 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:30', close: '17:30' }, tuesday: { open: '10:30', close: '17:30' }, wednesday: { open: '10:30', close: '17:30' }, thursday: { open: '10:30', close: '17:30' }, friday: { open: '10:30', close: '17:30' }, saturday: { open: '10:30', close: '17:30' }, sunday: { open: '10:30', close: '17:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'guimet-museum-paris-france',
    address: "6 Place d'Iéna, 75116 Paris, France",
    latitude: 48.8639, longitude: 2.2876,
    websiteUrl: 'https://www.guimet.fr/en',
    ticketUrl: 'https://billetterie.guimet.fr',
    ticketPriceRange: '€11.50 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil',
    address: 'Avenida Paulista 1578, São Paulo, SP 01310-200, Brazil',
    latitude: -23.5567, longitude: -46.6535,
    websiteUrl: 'https://masp.org.br/en',
    ticketUrl: 'https://masp.org.br/en',
    ticketPriceRange: 'R$35 (free Tue-Wed)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '20:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'musee-national-fernand-leger-biot-france',
    address: '255 Chemin du Val de Pôme, 06410 Biot, France',
    latitude: 43.6322, longitude: 7.0978,
    websiteUrl: 'https://musees-nationaux-alpesmaritimes.fr/fleger/en',
    ticketUrl: null,
    ticketPriceRange: '€6.50 (EU under 26 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, notes: 'May-Oct: 10:00-18:00', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-de-nantes-nantes-france',
    address: '10 Rue Georges Clemenceau, 44000 Nantes, France',
    latitude: 47.2173, longitude: -1.5497,
    websiteUrl: 'https://museedartsdenantes.nantesmetropole.fr/en/',
    ticketUrl: 'https://museedartsdenantes.nantesmetropole.fr/en/visiter/',
    ticketPriceRange: '€9 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '19:00' }, thursday: { open: '11:00', close: '21:00' }, friday: { open: '11:00', close: '19:00' }, saturday: { open: '11:00', close: '19:00' }, sunday: { open: '11:00', close: '19:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'ny-carlsberg-glyptotek',
    address: 'Dantes Plads 7, 1556 Copenhagen, Denmark',
    latitude: 55.6732, longitude: 12.5727,
    websiteUrl: 'https://glyptoteket.com/',
    ticketUrl: 'https://glyptoteket.com/visit/tickets',
    ticketPriceRange: 'DKK 115 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '18:00' }, wednesday: { open: '11:00', close: '18:00' }, thursday: { open: '11:00', close: '22:00' }, friday: { open: '11:00', close: '18:00' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'albright-knox',
    address: '1285 Elmwood Avenue, Buffalo, NY 14222, USA',
    latitude: 42.9324, longitude: -78.8786,
    websiteUrl: 'https://buffaloakg.org/',
    ticketUrl: 'https://buffaloakg.org/hours-admission',
    ticketPriceRange: '$22 (under 4 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { closed: true }, wednesday: { closed: true }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '20:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-des-beauxarts-d39orl233ans-orleans-france',
    address: '1 Rue Fernand Rabier, 45000 Orléans, France',
    latitude: 47.9021, longitude: 1.9082,
    websiteUrl: 'https://museesorleans.fr/',
    ticketUrl: null,
    ticketPriceRange: '€9 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '13:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },

  // === Agent D: Batch D museums ===
  {
    slug: 'pinacoteca-vaticana-vatican',
    address: 'Viale Vaticano, 00165 Vatican City',
    latitude: 41.9065, longitude: 12.4536,
    websiteUrl: 'https://www.museivaticani.va/',
    ticketUrl: 'https://www.museivaticani.va/content/museivaticani/en/visita-i-musei/biglietti.html',
    ticketPriceRange: '€17 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '09:00', close: '18:00' }, tuesday: { open: '09:00', close: '18:00' }, wednesday: { open: '09:00', close: '18:00' }, thursday: { open: '09:00', close: '18:00' }, friday: { open: '09:00', close: '18:00' }, saturday: { open: '09:00', close: '18:00' }, sunday: { closed: true } }, notes: 'Last entry 16:00', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'residenzgalerie-salzburg-austria',
    address: 'Residenzplatz 1, 5020 Salzburg, Austria',
    latitude: 47.7984, longitude: 13.0451,
    websiteUrl: 'https://www.domquartier.at/en/residenzgalerie/',
    ticketUrl: 'https://www.domquartier.at/en/visit/',
    ticketPriceRange: '€12 (under 16 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'pinacoteca-nazionale-di-bologna-bologna-italy',
    address: 'Via delle Belle Arti 56, 40126 Bologna, Italy',
    latitude: 44.4984, longitude: 11.3527,
    websiteUrl: 'https://www.pinacotecabologna.beniculturali.it/en/',
    ticketUrl: 'https://portale.museiitaliani.it',
    ticketPriceRange: '€6 (EU under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '08:30', close: '19:30' }, wednesday: { open: '08:30', close: '19:30' }, thursday: { open: '08:30', close: '19:30' }, friday: { open: '08:30', close: '19:30' }, saturday: { open: '08:30', close: '19:30' }, sunday: { open: '08:30', close: '19:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'frans-hals-museum-haarlem-netherlands',
    address: 'Groot Heiligland 62, 2011 ES Haarlem, Netherlands',
    latitude: 52.3766, longitude: 4.6337,
    websiteUrl: 'https://franshalsmuseum.nl/en/',
    ticketUrl: 'https://franshalsmuseum.nl/en/tickets-and-opening-hours/',
    ticketPriceRange: '€17.50 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '17:00' }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'staatsgalerie-stuttgart-stuttgart-germany',
    address: 'Konrad-Adenauer-Str. 30-32, 70173 Stuttgart, Germany',
    latitude: 48.7639, longitude: 9.1855,
    websiteUrl: 'https://www.staatsgalerie.de/en/',
    ticketUrl: 'https://www.staatsgalerie.de/en/visit.html',
    ticketPriceRange: '€10 (under 20 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'yale-art-gallery',
    address: '1111 Chapel Street, New Haven, CT 06510, USA',
    latitude: 41.3084, longitude: -72.9310,
    websiteUrl: 'https://artgallery.yale.edu/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '20:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'calouste-gulbenkian-museum-lisbon-portugal',
    address: 'Av. de Berna 45A, 1067-001 Lisbon, Portugal',
    latitude: 38.7378, longitude: -9.1535,
    websiteUrl: 'https://gulbenkian.pt/museu/en/',
    ticketUrl: null,
    ticketPriceRange: '€10 (CLOSED until Jul 2026)',
    hoursOfOperation: { hours: { notes: 'CLOSED for renovation until July 2026.', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'barberini',
    address: 'Via delle Quattro Fontane 13, 00184 Rome, Italy',
    latitude: 41.9022, longitude: 12.4875,
    websiteUrl: 'https://www.barberinicorsini.org/en/',
    ticketUrl: 'https://www.barberinicorsini.org/en/tickets/',
    ticketPriceRange: '€15 (EU 18-25 €2, under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '19:00' }, wednesday: { open: '10:00', close: '19:00' }, thursday: { open: '10:00', close: '19:00' }, friday: { open: '10:00', close: '19:00' }, saturday: { open: '10:00', close: '19:00' }, sunday: { open: '10:00', close: '19:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'fries-museum-leeuwarden-netherlands',
    address: 'Wilhelminaplein 92, 8911 BS Leeuwarden, Netherlands',
    latitude: 53.2012, longitude: 5.8002,
    websiteUrl: 'https://www.friesmuseum.nl/en/',
    ticketUrl: 'https://www.friesmuseum.nl/en/visit/opening-hours-and-entrance-fees/',
    ticketPriceRange: '€15 (Museumkaart valid)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '11:00', close: '17:00' }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'br252cke-museum-berlin-germany',
    address: 'Bussardsteig 9, 14195 Berlin, Germany',
    latitude: 52.4531, longitude: 13.2623,
    websiteUrl: 'https://www.bruecke-museum.de/en/',
    ticketUrl: 'https://www.bruecke-museum.de/en/besuch/21/admission',
    ticketPriceRange: '€6 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '17:00' }, saturday: { open: '11:00', close: '17:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'princeton-university-art-museum-puam-princeton-nj-',
    address: 'Princeton University, Princeton, NJ 08544, USA',
    latitude: 40.3481, longitude: -74.6554,
    websiteUrl: 'https://artmuseum.princeton.edu/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '17:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'muse-marmottan-monet-paris',
    address: '2 Rue Louis-Boilly, 75016 Paris, France',
    latitude: 48.8593, longitude: 2.2674,
    websiteUrl: 'https://www.marmottan.fr/en/',
    ticketUrl: 'https://www.marmottan.fr/en/',
    ticketPriceRange: '€12 (under 7 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '18:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '21:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'casa-buonarroti-florence-italy',
    address: 'Via Ghibellina 70, 50122 Florence, Italy',
    latitude: 43.7704, longitude: 11.2627,
    websiteUrl: 'https://www.casabuonarroti.it/en/',
    ticketUrl: 'https://www.casabuonarroti.it/en/',
    ticketPriceRange: '€8',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '16:30' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '16:30' }, thursday: { open: '10:00', close: '16:30' }, friday: { open: '10:00', close: '16:30' }, saturday: { open: '10:00', close: '16:30' }, sunday: { open: '10:00', close: '16:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'national-galleries-scotland',
    address: 'The Mound, Edinburgh EH2 2EL, Scotland',
    latitude: 55.9508, longitude: -3.1952,
    websiteUrl: 'https://www.nationalgalleries.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:00' }, tuesday: { open: '10:00', close: '17:00' }, wednesday: { open: '10:00', close: '17:00' }, thursday: { open: '10:00', close: '19:00' }, friday: { open: '10:00', close: '17:00' }, saturday: { open: '10:00', close: '17:00' }, sunday: { open: '10:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-calvet-avignon-france',
    address: '65 Rue Joseph Vernet, 84000 Avignon, France',
    latitude: 43.9461, longitude: 4.8065,
    websiteUrl: 'https://www.musee-calvet.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '13:00' }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, notes: 'Tue: 10-13 & 14-18', lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'toledo-museum-of-art-toledo-oh-us',
    address: '2445 Monroe Street, Toledo, OH 43620, USA',
    latitude: 41.6596, longitude: -83.5603,
    websiteUrl: 'https://www.toledomuseum.org/',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { closed: true }, wednesday: { open: '11:00', close: '17:00' }, thursday: { open: '11:00', close: '17:00' }, friday: { open: '11:00', close: '20:00' }, saturday: { open: '11:00', close: '20:00' }, sunday: { open: '11:00', close: '17:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'real-academia-de-bellas-artes-de-san-fernando-madr',
    address: 'Calle de Alcalá 13, 28014 Madrid, Spain',
    latitude: 40.4178, longitude: -3.7007,
    websiteUrl: 'https://www.realacademiabellasartessanfernando.com/',
    ticketUrl: null,
    ticketPriceRange: '€8 (under 18 free)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '10:00', close: '15:00' }, wednesday: { open: '10:00', close: '15:00' }, thursday: { open: '10:00', close: '15:00' }, friday: { open: '10:00', close: '15:00' }, saturday: { open: '10:00', close: '14:30' }, sunday: { open: '10:00', close: '14:30' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'mus233e-de-picardie-amiens-france',
    address: '48 Rue de la République, 80000 Amiens, France',
    latitude: 49.8905, longitude: 2.2953,
    websiteUrl: 'https://www.amiens.fr/Vivre-a-Amiens/Culture-Patrimoine/Les-musees/Musee-de-Picardie',
    ticketUrl: null,
    ticketPriceRange: '€7 (1st Sun free for families)',
    hoursOfOperation: { hours: { regular: { monday: { closed: true }, tuesday: { open: '09:30', close: '17:30' }, wednesday: { open: '09:30', close: '17:30' }, thursday: { open: '09:30', close: '17:30' }, friday: { open: '09:30', close: '17:30' }, saturday: { open: '11:00', close: '18:00' }, sunday: { open: '11:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'leopold-museum-vienna-austria',
    address: 'Museumsplatz 1, 1070 Vienna, Austria',
    latitude: 48.2026, longitude: 16.3591,
    websiteUrl: 'https://www.leopoldmuseum.org/en/',
    ticketUrl: 'https://www.leopoldmuseum.org/en/visit/tickets',
    ticketPriceRange: '€14 (under 19 free)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '18:00' }, tuesday: { closed: true }, wednesday: { open: '10:00', close: '18:00' }, thursday: { open: '10:00', close: '18:00' }, friday: { open: '10:00', close: '18:00' }, saturday: { open: '10:00', close: '18:00' }, sunday: { open: '10:00', close: '18:00' } }, lastUpdated: '2026-02-01' } }
  },
  {
    slug: 'victoria-and-albert-museum-vampa-london-uk',
    address: 'Cromwell Road, London SW7 2RL, United Kingdom',
    latitude: 51.4967, longitude: -0.1719,
    websiteUrl: 'https://www.vam.ac.uk/',
    ticketUrl: null,
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: { hours: { regular: { monday: { open: '10:00', close: '17:45' }, tuesday: { open: '10:00', close: '17:45' }, wednesday: { open: '10:00', close: '17:45' }, thursday: { open: '10:00', close: '17:45' }, friday: { open: '10:00', close: '22:00' }, saturday: { open: '10:00', close: '17:45' }, sunday: { open: '10:00', close: '17:45' } }, lastUpdated: '2026-02-01' } }
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
