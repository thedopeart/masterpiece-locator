const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  // === BATCH FROM AGENT 1 ===
  {
    slug: 'hermitage',
    address: 'Palace Square 2, Sankt-Peterburg, Russia, 190000',
    latitude: 59.9408,
    longitude: 30.3128,
    websiteUrl: 'https://www.hermitagemuseum.org',
    ticketUrl: 'https://www.hermitagemuseum.org/visitus/information_page?lng=en',
    ticketPriceRange: '800 RUB (free third Thursday monthly)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '11:00', close: '18:00' },
          wednesday: { open: '11:00', close: '18:00' },
          thursday: { open: '11:00', close: '18:00' },
          friday: { open: '11:00', close: '18:00' },
          saturday: { open: '11:00', close: '19:00' },
          sunday: { open: '11:00', close: '18:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-05-09', closed: true, reason: 'Victory Day' }
        ],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 800, child: 0, currency: 'RUB', notes: 'Free for under 18 and students. 400 RUB for Russian/Belarusian citizens.', freeDay: 'Third Thursday of every month' },
      tickets: { onlineUrl: 'https://www.hermitagemuseum.org/visitus/information_page?lng=en', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Wednesday', 'Friday'], bestTimes: ['Afternoons after 15:00'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '3-5 hours' },
      tips: ['Buy tickets online to avoid long queues.', 'No re-entry after leaving, plan accordingly.', 'Wear comfortable shoes. The museum covers 233,345 square meters.', 'Eat before entering; in-museum food options are limited.', 'Flash photography is not permitted.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'tate-modern-london-uk',
    address: 'Bankside, London SE1 9TG, United Kingdom',
    latitude: 51.5076,
    longitude: -0.0995,
    websiteUrl: 'https://www.tate.org.uk/visit/tate-modern',
    ticketUrl: 'https://shop.tate.org.uk/exhibitions/now-booking',
    ticketPriceRange: 'Free (exhibitions £16-22)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '21:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [{ date: '2026-12-24', closed: true, reason: 'Christmas Eve' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }, { date: '2026-12-26', closed: true, reason: 'Boxing Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Temporary exhibitions typically £16-22.' },
      tickets: { onlineUrl: 'https://shop.tate.org.uk/exhibitions/now-booking', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Very busy', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['The 10th-floor viewing platform in the Blavatnik Building has free panoramic city views.', 'Free volunteer-led gallery tours run regularly.', 'Friday and Saturday evenings open until 9pm.', 'Take the Tate Boat to Tate Britain from Bankside Pier.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'tate-britain',
    address: 'Millbank, London SW1P 4RG, United Kingdom',
    latitude: 51.4911,
    longitude: -0.1281,
    websiteUrl: 'https://www.tate.org.uk/visit/tate-britain',
    ticketUrl: 'https://shop.tate.org.uk/exhibitions/now-booking',
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [{ date: '2026-12-24', closed: true, reason: 'Christmas Eve' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }, { date: '2026-12-26', closed: true, reason: 'Boxing Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Temporary exhibitions vary.' },
      tickets: { onlineUrl: 'https://shop.tate.org.uk/exhibitions/now-booking', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Take the Tate Boat (RB2) from Millbank Pier to Tate Modern.', 'The step-free Manton Entrance on Atterbury Street has shorter queues.', 'A Quiet Room is available near the Duveens Gallery.', 'Photography is permitted for personal use, no flash or selfie sticks.'],
      amenities: { cafe: true, wifi: true, lockers: false, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'gem228ldegalerie-berlin-germany',
    address: 'Matthäikirchplatz, 10785 Berlin, Germany',
    latitude: 52.5086,
    longitude: 13.3648,
    websiteUrl: 'https://www.smb.museum/en/museums-institutions/gemaeldegalerie/',
    ticketUrl: 'https://www.smb.museum/en/museums-institutions/gemaeldegalerie/plan-your-visit/prices-tickets/',
    ticketPriceRange: '€14 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [{ date: '2026-12-24', closed: true, reason: 'Christmas Eve' }, { date: '2026-12-31', closed: true, reason: "New Year's Eve" }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 14, child: 0, currency: 'EUR', notes: 'Free for under 18. €22 for all Kulturforum exhibitions.', freeDay: 'First Sunday of every month' },
      tickets: { onlineUrl: 'https://www.smb.museum/en/museums-institutions/gemaeldegalerie/plan-your-visit/prices-tickets/', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Mornings', 'Late afternoons'], worstDays: ['First free Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Free audio guide is included with admission.', 'Italian art goes left at entrance, German/Flemish goes right.', 'Photography is generally permitted.', 'Combined ticket available for nearby Kulturforum venues.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'thyssenbornemisza-museum-madrid-spain',
    address: 'Paseo del Prado 8, 28014 Madrid, Spain',
    latitude: 40.4160,
    longitude: -3.6949,
    websiteUrl: 'https://www.museothyssen.org/en',
    ticketUrl: 'https://www.museothyssen.org/en/visit',
    ticketPriceRange: '€14 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '12:00', close: '16:00' },
          tuesday: { open: '10:00', close: '19:00' },
          wednesday: { open: '10:00', close: '19:00' },
          thursday: { open: '10:00', close: '19:00' },
          friday: { open: '10:00', close: '19:00' },
          saturday: { open: '10:00', close: '19:00' },
          sunday: { open: '10:00', close: '19:00' }
        },
        exceptions: [{ date: '2026-01-01', closed: true, reason: "New Year's Day" }, { date: '2026-05-01', closed: true, reason: 'Labour Day' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 14, child: 0, currency: 'EUR', notes: 'Free for under 18. Free Monday 12-4pm (permanent collection). Paseo del Arte pass €32.', freeDay: 'Monday 12:00-16:00' },
      tickets: { onlineUrl: 'https://www.museothyssen.org/en/visit', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate to busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Weekday mornings', 'Late afternoon'], worstDays: ['Free Mondays', 'Weekends Apr-Oct'], avgVisitDuration: '2-3 hours' },
      tips: ['Start on the second floor and work down for chronological order.', 'Paseo del Arte pass (€32) covers Prado, Thyssen, and Reina Sofia.', 'No re-entry once you exit.', 'Photography without flash is permitted in the permanent collection.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'vatican-museums',
    address: 'Viale Vaticano, 00120 Vatican City',
    latitude: 41.9065,
    longitude: 12.4536,
    websiteUrl: 'https://www.museivaticani.va',
    ticketUrl: 'https://tickets.museivaticani.va',
    ticketPriceRange: '€20 + €5 booking fee (under 6 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '18:00' },
          tuesday: { open: '09:00', close: '18:00' },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '18:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { closed: true }
        },
        notes: 'Last entry at 16:00. Select Fridays open until 22:00. Last Sunday of month open 9:00-14:00 (free, last entry 12:30).',
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-02-11', closed: true, reason: 'Lateran Treaty Anniversary' },
          { date: '2026-05-01', closed: true, reason: 'Labour Day' },
          { date: '2026-06-29', closed: true, reason: 'Sts. Peter & Paul' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' },
          { date: '2026-12-26', closed: true, reason: "St. Stephen's Day" }
        ],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 20, child: 0, currency: 'EUR', notes: 'Online booking adds €5 fee. Reduced €8 for ages 6-18 and students. Free last Sunday of month.', freeDay: 'Last Sunday of each month (9:00-14:00)' },
      tickets: { onlineUrl: 'https://tickets.museivaticani.va', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Extremely busy', bestDays: ['Monday', 'Tuesday', 'Thursday'], bestTimes: ['Early morning', 'Mid-afternoon'], worstDays: ['Wednesday mornings', 'Free last Sundays'], avgVisitDuration: '3-4 hours' },
      tips: ['Only buy tickets from the official site to avoid scam resellers.', 'Dress code enforced: shoulders and knees must be covered.', 'Photography is prohibited inside the Sistine Chapel.', 'The route is semi one-way, plan your must-sees before entering.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'musee-dorsay',
    address: "1 Rue de la Légion d'Honneur, 75007 Paris, France",
    latitude: 48.8600,
    longitude: 2.3266,
    websiteUrl: 'https://www.musee-orsay.fr/en',
    ticketUrl: 'https://billetterie.musee-orsay.fr',
    ticketPriceRange: '€16 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:30', close: '18:00' },
          wednesday: { open: '09:30', close: '18:00' },
          thursday: { open: '09:30', close: '21:45' },
          friday: { open: '09:30', close: '18:00' },
          saturday: { open: '09:30', close: '18:00' },
          sunday: { open: '09:30', close: '18:00' }
        },
        notes: 'Major renovation ("Orsay Grand Ouvert") March 2026 through summer 2028. Museum remains OPEN throughout.',
        exceptions: [{ date: '2026-05-01', closed: true, reason: 'Labour Day' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Free for under 18, EU residents under 26. Thursday evening €12. Free first Sunday of month.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://billetterie.musee-orsay.fr', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Wednesday', 'Friday'], bestTimes: ['Early morning', 'Thursday evenings'], worstDays: ['Tuesday (Louvre closed)', 'Sunday'], avgVisitDuration: '2-3 hours' },
      tips: ['Book tickets online to avoid 50-minute queues.', 'Thursday evenings are the best value (€12) and least crowded.', 'Avoid Tuesdays; the Louvre is closed so crowds overflow here.', 'RER C Musée d\'Orsay station is right at the entrance.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'art-institute-of-chicago',
    address: '111 South Michigan Avenue, Chicago, IL 60603, USA',
    latitude: 41.8795,
    longitude: -87.6239,
    websiteUrl: 'https://www.artic.edu',
    ticketUrl: 'https://sales.artic.edu/Admissions',
    ticketPriceRange: '$25 adults (under 14 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '11:00', close: '17:00' },
          tuesday: { closed: true },
          wednesday: { open: '11:00', close: '17:00' },
          thursday: { open: '11:00', close: '20:00' },
          friday: { open: '11:00', close: '17:00' },
          saturday: { open: '11:00', close: '17:00' },
          sunday: { open: '11:00', close: '17:00' }
        },
        exceptions: [
          { date: '2026-01-01', closed: true, reason: "New Year's Day" },
          { date: '2026-11-26', closed: true, reason: 'Thanksgiving' },
          { date: '2026-12-25', closed: true, reason: 'Christmas Day' }
        ],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 25, child: 0, currency: 'USD', notes: 'Free under 14. Illinois residents free on weekdays. Chicago teens free daily.', freeDay: 'Weekdays for Illinois residents' },
      tickets: { onlineUrl: 'https://sales.artic.edu/Admissions', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Busy', bestDays: ['Monday', 'Wednesday'], bestTimes: ['At opening', 'Thursday evenings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '3-5 hours' },
      tips: ['Free mobile app serves as audio guide. Download before arrival.', 'Same-day re-entry allowed, so you can take breaks.', 'Illinois residents get free weekday admission with ID.', 'Free guided Gallery Tours daily at 1pm and 3pm.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  // === BATCH FROM AGENT 2 ===
  {
    slug: 'national-gallery',
    address: 'Trafalgar Square, London WC2N 5DN, United Kingdom',
    latitude: 51.5090,
    longitude: -0.1283,
    websiteUrl: 'https://www.nationalgallery.org.uk',
    ticketUrl: 'https://www.nationalgallery.org.uk/visiting/plan-your-visit',
    ticketPriceRange: 'Free (exhibitions vary)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '18:00' },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '21:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '21:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [{ date: '2026-01-01', closed: true, reason: "New Year's Day" }, { date: '2026-12-24', closed: true, reason: 'Christmas Eve' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }, { date: '2026-12-26', closed: true, reason: 'Boxing Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 0, child: 0, currency: 'GBP', notes: 'Free permanent collection. Special exhibitions ticketed.' },
      tickets: { onlineUrl: 'https://www.nationalgallery.org.uk/visiting/plan-your-visit', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Very busy', bestDays: ['Monday', 'Tuesday'], bestTimes: ['Weekday mornings', 'Wednesday/Friday evenings'], worstDays: ['Saturday', 'Sunday'], avgVisitDuration: '2-4 hours' },
      tips: ['Enter via the Sainsbury Wing (main entrance).', 'Book a free timed ticket online to skip queues.', 'Cloakroom costs £3 per item; no wheeled luggage allowed.', 'Free guided tours at 11:30am and 2:30pm daily.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'alte-pinakothek',
    address: 'Barer Straße 27, 80333 Munich, Germany',
    latitude: 48.1483,
    longitude: 11.5700,
    websiteUrl: 'https://www.pinakothek.de/en/alte-pinakothek',
    ticketUrl: 'https://www.pinakothek.de/en/visit',
    ticketPriceRange: '€9 (€1 on Sundays)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '20:00' },
          wednesday: { open: '10:00', close: '20:00' },
          thursday: { open: '10:00', close: '18:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        exceptions: [{ date: '2026-05-01', closed: true, reason: 'Labour Day' }, { date: '2026-12-24', closed: true, reason: 'Christmas Eve' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }, { date: '2026-12-31', closed: true, reason: "New Year's Eve" }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 9, child: 0, currency: 'EUR', notes: 'Free for under 18. €1 on Sundays. Combined day ticket €12 for multiple Pinakotheken.' },
      tickets: { onlineUrl: 'https://www.pinakothek.de/en/visit', skipTheLine: false, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Mornings'], worstDays: ['Sunday (€1 day)'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Visit on Sunday for just €1 admission.', 'Bring a €2 coin for the lockers.', 'Tuesday and Wednesday offer extended hours until 8pm.', 'Photography is allowed throughout.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'pinacoteca-di-brera',
    address: 'Via Brera 28, 20121 Milan, Italy',
    latitude: 45.4720,
    longitude: 9.1878,
    websiteUrl: 'https://pinacotecabrera.org/en',
    ticketUrl: 'https://brerabooking.org',
    ticketPriceRange: '€15 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '08:30', close: '19:15' },
          wednesday: { open: '08:30', close: '19:15' },
          thursday: { open: '08:30', close: '19:15' },
          friday: { open: '08:30', close: '19:15' },
          saturday: { open: '08:30', close: '19:15' },
          sunday: { open: '08:30', close: '19:15' }
        },
        notes: 'Last entrance at 18:00.',
        exceptions: [{ date: '2026-01-01', closed: true, reason: "New Year's Day" }, { date: '2026-05-01', closed: true, reason: 'Labour Day' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 15, child: 0, currency: 'EUR', notes: 'Free for under 18. Reduced €10. Free first Sunday of month.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://brerabooking.org', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Right at opening'], worstDays: ['First free Sunday', 'Weekend afternoons'], avgVisitDuration: '1.5-3 hours' },
      tips: ['Book online to avoid 30-minute queues.', 'Bring a €1 coin for the lockers.', 'No re-entry once you exit.', 'The adjacent Brera Botanical Garden is free.'],
      amenities: { cafe: true, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'philadelphia-museum-of-art',
    address: '2600 Benjamin Franklin Parkway, Philadelphia, PA 19130, USA',
    latitude: 39.9656,
    longitude: -75.1810,
    websiteUrl: 'https://philamuseum.org',
    ticketUrl: 'https://philamuseum.org/visit/admission',
    ticketPriceRange: '$25 adults (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { closed: true },
          wednesday: { closed: true },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '20:45' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [{ date: '2026-07-04', closed: true, reason: 'Independence Day' }, { date: '2026-11-26', closed: true, reason: 'Thanksgiving' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 25, child: 0, currency: 'USD', notes: 'Free under 18. Friday evening $15. Ticket valid 2 days, includes Rodin Museum.', freeDay: 'First Sunday (Pay What You Wish)' },
      tickets: { onlineUrl: 'https://philamuseum.org/visit/admission', skipTheLine: true, advanceRecommended: false },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Thursday'], bestTimes: ['Mornings', 'Friday evenings after 5pm'], worstDays: ['First free Sunday', 'Saturday'], avgVisitDuration: '2-3 hours' },
      tips: ['Ticket is valid for two consecutive days and includes the Rodin Museum.', 'Friday evenings offer extended hours until 8:45pm at $15.', 'Use the free Smartify app for audio tour; bring headphones.', 'EBT/PA Access Card holders get free admission for up to 4 adults.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'musee-de-lorangerie',
    address: "Jardin des Tuileries, Place de la Concorde, 75001 Paris, France",
    latitude: 48.8606,
    longitude: 1.3261,
    websiteUrl: 'https://www.musee-orangerie.fr/en',
    ticketUrl: 'https://www.musee-orangerie.fr/en/node/197817',
    ticketPriceRange: '€12.50 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '18:00' },
          tuesday: { closed: true },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '18:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { open: '09:00', close: '18:00' }
        },
        exceptions: [{ date: '2026-05-01', closed: true, reason: 'Labour Day' }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 12.50, child: 0, currency: 'EUR', notes: 'Free for under 18, EU residents under 26. Thursday evening €12 during exhibition periods.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://www.musee-orangerie.fr/en/node/197817', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Monday', 'Wednesday'], bestTimes: ['Right at 9am opening', 'Late afternoon'], worstDays: ['First free Sunday', 'Weekend midday'], avgVisitDuration: '1-1.5 hours' },
      tips: ['Book a timed ticket online; 30-minute entry window after your time slot.', 'Small enough to visit in about an hour, pair with a Tuileries Garden walk.', 'Free for EU residents under 26 with ID.', 'Friday late openings until 9pm during exhibitions.'],
      amenities: { cafe: true, wifi: true, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'gallerie-dell-accademia-venice',
    address: 'Campo della Carità, Dorsoduro 1050, 30123 Venice, Italy',
    latitude: 45.4313,
    longitude: 12.3282,
    websiteUrl: 'https://www.gallerieaccademia.it/en',
    ticketUrl: 'https://www.gallerieaccademia.it/en/tickets',
    ticketPriceRange: '€16 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:15', close: '14:00' },
          tuesday: { open: '08:15', close: '19:15' },
          wednesday: { open: '08:15', close: '19:15' },
          thursday: { open: '08:15', close: '19:15' },
          friday: { open: '08:15', close: '19:15' },
          saturday: { open: '08:15', close: '19:15' },
          sunday: { open: '08:15', close: '19:15' }
        },
        exceptions: [{ date: '2026-01-01', closed: true, reason: "New Year's Day" }, { date: '2026-12-25', closed: true, reason: 'Christmas Day' }],
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 16, child: 0, currency: 'EUR', notes: 'Free for EU citizens under 18. Reduced €2 for EU 18-25. Free first Sunday of month.', freeDay: 'First Sunday of each month' },
      tickets: { onlineUrl: 'https://www.gallerieaccademia.it/en/tickets', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Busy', bestDays: ['Tuesday', 'Wednesday'], bestTimes: ['Early morning at 8:15', 'After 4pm'], worstDays: ['Saturday', 'First Sunday'], avgVisitDuration: '1.5-2.5 hours' },
      tips: ['Book tickets online in advance, especially in peak season.', 'Monday has shorter hours (closes at 2pm).', 'Home to masterpieces of Venetian painting from Bellini to Tintoretto.', 'Photography without flash is allowed.'],
      amenities: { cafe: false, wifi: false, lockers: true, giftShop: true },
      accessibility: { wheelchairAccessible: true, audioGuide: true }
    }
  },
  {
    slug: 'national-museum-western-art-tokyo',
    address: '7-7 Uenokoen, Taito-ku, Tokyo 110-0007, Japan',
    latitude: 35.7155,
    longitude: 139.7759,
    websiteUrl: 'https://www.nmwa.go.jp/en/',
    ticketUrl: 'https://www.e-tix.jp/nmwa/en/',
    ticketPriceRange: '¥500 (under 18 free)',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:30', close: '17:30' },
          wednesday: { open: '09:30', close: '17:30' },
          thursday: { open: '09:30', close: '17:30' },
          friday: { open: '09:30', close: '20:00' },
          saturday: { open: '09:30', close: '20:00' },
          sunday: { open: '09:30', close: '17:30' }
        },
        notes: 'Admission ends 30 min before closing. Closed Mondays except when a national holiday falls on Monday (then closed following Tuesday).',
        lastUpdated: '2026-02-01'
      },
      admission: { adult: 500, child: 0, currency: 'JPY', notes: 'Free for under 18 and seniors 65+. Disabled visitors + companion free. Special exhibitions ¥1,000-2,000.', freeDay: '2nd Sunday of month, May 18, November 3' },
      tickets: { onlineUrl: 'https://www.e-tix.jp/nmwa/en/', skipTheLine: true, advanceRecommended: true },
      crowdData: { overall: 'Moderate', bestDays: ['Tuesday', 'Wednesday', 'Thursday'], bestTimes: ['Right at opening'], worstDays: ['Free Sundays', 'Weekends during special exhibitions'], avgVisitDuration: '1-1.5 hours' },
      tips: ['The building is a UNESCO World Heritage Site (Le Corbusier); appreciate the architecture.', 'Photography of permanent collection allowed, no flash or tripods.', 'Weekend/holiday visits may require timed-entry tickets booked online.', 'Combine with other Ueno Park museums within walking distance.'],
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
      console.error(`✗ ${m.slug}: ${e.message.slice(0, 100)}`);
    }
  }
  console.log(`\nDone: ${updated}/${museums.length} updated`);
  await prisma.$disconnect();
}

run();
