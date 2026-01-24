const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 5 - 10 notable museums without visitor info
const museums = [
  {
    slug: 'phillips-collection',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '12:00', close: '17:00' }
        },
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'January 1', status: 'closed' },
          { date: 'July 4', status: 'closed' }
        ]
      },
      admission: {
        adult: 16,
        senior: 12,
        student: 12,
        under18: 'free',
        weekdayDiscount: 'Weekdays $12',
        freeDay: 'First Thursday of month 5-8pm',
        note: 'Timed entry recommended on weekends'
      },
      tickets: {
        onlineUrl: 'https://www.phillipscollection.org/visit',
        onlineRecommended: true,
        timedEntry: true,
        advanceRecommended: true,
        walkUpAvailable: true,
        refundPolicy: 'Refundable up to 24 hours before'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['11am-2pm weekends'],
        bestMonths: ['January', 'February', 'September'],
        worstMonths: ['April (cherry blossoms)', 'July', 'August'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Tryst Coffee House',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Street parking, nearby garages on Q Street'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        audioGuideIncluded: true
      },
      tips: [
        'The first modern art museum in America, founded in 1921. The intimate setting feels like visiting a collector\'s home.',
        'Thursday evenings until 8pm offer a quieter experience with a more local crowd.',
        'The Rothko Room is a meditative space with four large Rothko paintings. Sit and absorb.',
        'Renoir\'s Luncheon of the Boating Party is the star. Find it in the main house.',
        'The museum spans two buildings connected by an underground passage.',
        'Free first Thursday evenings often include live music and a cash bar.'
      ],
      mustSee: [
        { name: 'Luncheon of the Boating Party', artist: 'Pierre-Auguste Renoir', location: 'Main house', note: 'Iconic Impressionist work, centerpiece of collection' },
        { name: 'Rothko Room', artist: 'Mark Rothko', location: 'Main house', note: 'Four paintings in dedicated contemplative space' },
        { name: 'The Repentant St. Peter', artist: 'El Greco', location: 'Main house', note: 'Intense Counter-Reformation masterpiece' },
        { name: 'Entrance to the Public Gardens in Arles', artist: 'Vincent van Gogh', location: 'Main house', note: 'Vibrant late Van Gogh' },
        { name: 'The Migration Series', artist: 'Jacob Lawrence', location: 'Varies', note: 'Phillips owns odd-numbered panels (even at MoMA)' }
      ]
    },
    faqs: [
      {
        question: 'Is The Phillips Collection worth visiting in Washington DC?',
        answer: 'Yes. It\'s America\'s first modern art museum, housed in a beautiful historic mansion. The intimate scale and world-class collection (including Renoir\'s Luncheon of the Boating Party) make it a refreshing alternative to the massive Smithsonian museums.'
      },
      {
        question: 'How long should I spend at The Phillips Collection?',
        answer: 'Plan for 1.5 to 2 hours. The collection is compact enough to see thoroughly without museum fatigue. Linger in the Rothko Room and take time with Renoir\'s masterpiece.'
      },
      {
        question: 'Is The Phillips Collection free?',
        answer: 'No, general admission is $16 ($12 weekdays). However, the museum offers free admission on the first Thursday evening of each month from 5-8pm, often with live music.'
      }
    ]
  },
  {
    slug: 'albright-knox',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        note: 'Now known as Buffalo AKG Art Museum after 2023 expansion',
        exceptions: [
          { date: 'Thanksgiving', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 20,
        senior: 15,
        student: 10,
        under6: 'free',
        thursdayEvening: 'Pay what you wish after 5pm',
        note: 'Prices as of 2023 expansion'
      },
      tickets: {
        onlineUrl: 'https://buffaloakg.org/visit',
        onlineRecommended: true,
        timedEntry: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday afternoon'],
        bestTimes: ['Opening', 'Thursday evening'],
        worstTimes: ['Weekend midday'],
        bestMonths: ['January', 'February', 'March'],
        worstMonths: ['July', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingCost: 'Free'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English']
      },
      tips: [
        'The 2023 expansion tripled gallery space. Allow more time than you might expect.',
        'Thursday evenings are pay-what-you-wish and less crowded than weekends.',
        'The collection spans 4,000 years but excels in modern and contemporary art.',
        'Free parking in the museum lot makes this an easy visit.',
        'The new building connects to Delaware Park. Walk the grounds after your visit.',
        'One of the first American museums to collect Picasso, Matisse, and the Abstract Expressionists.'
      ],
      mustSee: [
        { name: 'Number 1, 1952', artist: 'Jackson Pollock', location: 'Modern galleries', note: 'Major drip painting' },
        { name: 'La Joie de Vivre', artist: 'Henri Matisse', location: 'Modern galleries', note: 'Large-scale Matisse masterwork' },
        { name: 'Old King', artist: 'Georges Rouault', location: 'Modern galleries', note: 'Expressionist icon' },
        { name: 'Arshile Gorky works', artist: 'Arshile Gorky', location: 'Modern galleries', note: 'Strong collection of this Abstract Expressionist pioneer' },
        { name: 'Clyfford Still paintings', artist: 'Clyfford Still', location: 'Modern galleries', note: 'Important Color Field works' }
      ]
    },
    faqs: [
      {
        question: 'What happened to the Albright-Knox Art Gallery?',
        answer: 'The museum reopened in 2023 as the Buffalo AKG Art Museum after a major expansion that tripled gallery space. The historic 1905 building was preserved and connected to dramatic new architecture.'
      },
      {
        question: 'Is the Buffalo AKG Art Museum worth the trip from NYC?',
        answer: 'For modern art enthusiasts, yes. The collection rivals major NYC museums for Abstract Expressionism and post-war art, with significantly fewer crowds. It\'s about a 6-7 hour drive or short flight.'
      },
      {
        question: 'When is free admission at Buffalo AKG?',
        answer: 'Thursday evenings after 5pm are pay-what-you-wish. The museum stays open until 9pm on Thursdays, giving you four hours at whatever price you choose.'
      }
    ]
  },
  {
    slug: 'ny-carlsberg-glyptotek',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        exceptions: [
          { date: 'December 24', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'December 31', status: 'closes early at 15:00' }
        ]
      },
      admission: {
        adult: 125,
        currency: 'DKK',
        under27: 'free',
        under18: 'free',
        freeDay: 'Free admission Tuesdays',
        note: 'About €17 / $18 USD'
      },
      tickets: {
        onlineUrl: 'https://www.glyptoteket.com/visit/',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: false
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Tuesday (free)', 'Sunday'],
        bestTimes: ['Opening at 10am', 'After 3pm'],
        worstTimes: ['Tuesday midday', 'Weekend lunch hours'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['June', 'July', 'August'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Glyptoteket Café',
        cafeNote: 'In the stunning Winter Garden with palm trees',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Main floors accessible, some historic areas limited',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Danish', 'English', 'German']
      },
      tips: [
        'Free admission for everyone under 27, making this perfect for young travelers.',
        'The Winter Garden conservatory is stunning. Have coffee surrounded by palm trees and sculpture.',
        'Tuesday is free for all, but also the busiest day. Visit other days if possible.',
        'The ancient collection (Egyptian, Greek, Roman, Etruscan) rivals major world museums.',
        'French Impressionist wing includes Gauguin\'s Tahitian works and excellent Degas bronzes.',
        'Named "Glyptotek" (sculpture gallery) by founder Carl Jacobsen of Carlsberg beer fame.'
      ],
      mustSee: [
        { name: 'Egyptian Mummy Portraits', artist: 'Various', location: 'Egyptian galleries', note: 'Haunting Fayum portraits from Roman Egypt' },
        { name: 'Etruscan Collection', artist: 'Various', location: 'Ancient galleries', note: 'One of the finest outside Italy' },
        { name: 'Little Dancer Aged Fourteen', artist: 'Edgar Degas', location: 'French wing', note: 'Bronze cast of famous wax sculpture' },
        { name: 'Tahitian Women', artist: 'Paul Gauguin', location: 'French wing', note: 'Major Gauguin from his South Seas period' },
        { name: 'Winter Garden', artist: 'Architecture', location: 'Central atrium', note: 'Glass-roofed palm garden with sculptures' }
      ]
    },
    faqs: [
      {
        question: 'What does Glyptotek mean?',
        answer: 'Glyptotek means "sculpture gallery" in Greek. The museum was founded by Carl Jacobsen, heir to the Carlsberg brewery fortune, primarily to house his collection of ancient and modern sculpture.'
      },
      {
        question: 'Is the Ny Carlsberg Glyptotek free?',
        answer: 'It\'s free for everyone under 27, and free for all visitors on Tuesdays. Otherwise, adult admission is 125 DKK (about $18). The Winter Garden alone is worth the price.'
      },
      {
        question: 'How does the Glyptotek compare to the National Gallery of Denmark?',
        answer: 'The Glyptotek focuses on ancient art and French 19th-century works (Impressionists, Gauguin). The National Gallery (SMK) has broader European and Danish collections. Both are excellent and different enough to visit both.'
      }
    ]
  },
  {
    slug: 'yale-art-gallery',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '13:00', close: '17:00' }
        },
        exceptions: [
          { date: 'Major holidays', status: 'closed' },
          { date: 'Yale commencement week', status: 'limited hours' }
        ]
      },
      admission: {
        adult: 'Free',
        note: 'Always free admission'
      },
      tickets: {
        onlineUrl: 'https://artgallery.yale.edu/visit',
        reservationRequired: false,
        walkUpAvailable: true
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Weekend afternoons during school year'],
        bestMonths: ['Summer', 'Winter break'],
        worstMonths: ['October (fall foliage visitors)', 'May (graduation)'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'YUAG Café',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Street parking, Chapel-York Garage'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        audioGuideNote: 'Free app-based guide'
      },
      tips: [
        'The oldest university art museum in America (founded 1832) and always free.',
        'Van Gogh\'s The Night Café is here, not to be confused with Café Terrace at Night.',
        'The Louis Kahn building (1953) is an architectural landmark. Notice the concrete ceiling.',
        'Collection spans ancient to contemporary across three connected buildings.',
        'Thursday evenings until 8pm are quieter and good for avoiding student crowds.',
        'Walk to the Yale Center for British Art across the street (also free, also Louis Kahn).'
      ],
      mustSee: [
        { name: 'The Night Café', artist: 'Vincent van Gogh', location: 'European art', note: 'Van Gogh called it "one of the ugliest pictures I have done"' },
        { name: 'Hive', artist: 'AI Weiwei', location: 'Atrium', note: 'Site-specific installation of ancient Chinese stools' },
        { name: 'Louis Kahn Building', artist: 'Architecture', location: 'Throughout', note: 'Pioneering concrete and glass museum design' },
        { name: 'American decorative arts', artist: 'Various', location: 'American wing', note: 'Furniture, silver from colonial era' },
        { name: 'Ancient sculptures', artist: 'Various', location: 'Ancient Mediterranean galleries', note: 'Greek, Roman, Near Eastern works' }
      ]
    },
    faqs: [
      {
        question: 'Is the Yale Art Gallery free?',
        answer: 'Yes, always free. No tickets or reservations required. Just walk in during open hours. This makes it one of the best free art museums in the United States.'
      },
      {
        question: 'Does Yale Art Gallery have Van Gogh\'s Starry Night?',
        answer: 'No, that\'s at MoMA in New York. Yale has Van Gogh\'s The Night Café, which shows the interior of the same café Van Gogh frequented in Arles. It\'s a major work with its own fame.'
      },
      {
        question: 'Can anyone visit Yale Art Gallery or just students?',
        answer: 'Anyone can visit. It\'s a public museum open to all, not restricted to Yale affiliates. The collection rivals major city museums and benefits from being in a beautiful Louis Kahn building.'
      }
    ]
  },
  {
    slug: 'musee-de-lorangerie',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '09:00', close: '18:00' },
          wednesday: { open: '09:00', close: '18:00' },
          thursday: { open: '09:00', close: '18:00' },
          friday: { open: '09:00', close: '18:00' },
          saturday: { open: '09:00', close: '18:00' },
          sunday: { open: '09:00', close: '18:00' }
        },
        lastAdmission: '17:15',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 12.50,
        reduced: 10,
        under26EU: 'free',
        under18: 'free',
        freeDay: 'First Sunday of month',
        museumPass: 'Paris Museum Pass accepted'
      },
      tickets: {
        onlineUrl: 'https://www.musee-orangerie.fr/en/visit',
        onlineRequired: false,
        onlineRecommended: true,
        advanceRecommended: true,
        advanceNote: 'Book ahead for Water Lilies rooms',
        timedEntry: true,
        refundPolicy: 'Exchangeable for different date'
      },
      crowdData: {
        overall: 'Heavy',
        bestDays: ['Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday', 'First Sunday (free)'],
        bestTimes: ['Opening at 9am', 'Last hour before closing'],
        worstTimes: ['11am-3pm', 'Free Sundays'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'June', 'July'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['French', 'English', 'Spanish', 'German', 'Italian', 'Japanese', 'Chinese']
      },
      tips: [
        'The oval Water Lilies rooms were designed by Monet himself. Natural light changes the experience throughout the day.',
        'Arrive right at 9am opening to have the Water Lilies rooms nearly to yourself.',
        'The lower level has excellent Impressionist and Post-Impressionist works (Renoir, Cézanne, Picasso).',
        'Small museum. Can be combined with nearby Jeu de Paume or a Tuileries walk.',
        'Paris Museum Pass grants skip-the-line access. Worth it if visiting multiple museums.',
        'Free first Sundays are extremely crowded. Avoid unless budget is the priority.'
      ],
      mustSee: [
        { name: 'Water Lilies (Nymphéas)', artist: 'Claude Monet', location: 'Oval rooms (upper level)', note: 'Eight monumental panels in two purpose-built rooms' },
        { name: 'Les Baigneuses', artist: 'Pierre-Auguste Renoir', location: 'Lower level', note: 'Late Renoir bathers' },
        { name: 'Jeunes Filles au Piano', artist: 'Pierre-Auguste Renoir', location: 'Lower level', note: 'One of his most beloved images' },
        { name: 'Pommes et Biscuits', artist: 'Paul Cézanne', location: 'Lower level', note: 'Classic Cézanne still life' },
        { name: 'Walter-Guillaume Collection', artist: 'Various', location: 'Lower level', note: 'Derain, Modigliani, Soutine, Picasso' }
      ]
    },
    faqs: [
      {
        question: 'Is the Musée de l\'Orangerie just the Water Lilies?',
        answer: 'The Water Lilies are the main attraction, but the lower level houses the excellent Walter-Guillaume collection with works by Renoir, Cézanne, Picasso, Modigliani, and others. Allow time for both floors.'
      },
      {
        question: 'Should I book tickets in advance for the Orangerie?',
        answer: 'Yes, especially in peak season (spring through fall). The museum is small and popular. Booking a 9am time slot helps you experience the Water Lilies rooms without crowds.'
      },
      {
        question: 'Which is better, Musée d\'Orsay or Musée de l\'Orangerie?',
        answer: 'They\'re complementary. Orsay is the comprehensive Impressionist museum (half day). Orangerie is a focused experience centered on Monet\'s Water Lilies (1-2 hours). Do both if time allows.'
      }
    ]
  },
  {
    slug: 'wallrafrichartz-museum-cologne-germany',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '21:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        lastAdmission: '30 minutes before closing',
        exceptions: [
          { date: 'December 24', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'December 31', status: 'closed' },
          { date: 'January 1', status: 'closed' },
          { date: 'Carnival Thursday', status: 'closed' },
          { date: 'Rose Monday', status: 'closed' }
        ]
      },
      admission: {
        adult: 13,
        reduced: 8,
        under18: 'free',
        freeDay: 'First Thursday of month',
        note: 'Special exhibitions may cost extra'
      },
      tickets: {
        onlineUrl: 'https://www.wallraf.museum/en/visit/',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: false
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Thursday evening', 'Sunday'],
        bestTimes: ['Opening', 'After 3pm'],
        worstTimes: ['Free Thursday evenings'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['Carnival period (Feb/Mar)', 'December'],
        avgVisitDuration: '2-2.5 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Parkhaus am Dom nearby'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English']
      },
      tips: [
        'The medieval Cologne School paintings are world-class. Look for Stefan Lochner\'s Madonna of the Rose Bower.',
        'One of Germany\'s oldest museums (founded 1824) with excellent Old Masters.',
        'Thursday evenings open late until 9pm, good for after-work visits.',
        'Closed during Carnival (Karneval), the huge February celebration in Cologne.',
        'Located near Cologne Cathedral. Combine with a cathedral visit.',
        'The Rubens and Rembrandt rooms are highlights of the Baroque collection.'
      ],
      mustSee: [
        { name: 'Madonna of the Rose Bower', artist: 'Stefan Lochner', location: 'Medieval gallery', note: 'Icon of the Cologne School, delicate Gothic style' },
        { name: 'Self-Portrait', artist: 'Rembrandt', location: 'Baroque galleries', note: 'Powerful late self-portrait' },
        { name: 'Juno and Argus', artist: 'Peter Paul Rubens', location: 'Baroque galleries', note: 'Dynamic Rubens mythology' },
        { name: 'Boy with Straw Hat', artist: 'Pierre-Auguste Renoir', location: 'Impressionist room', note: 'Fresh Impressionist portrait' },
        { name: 'Cologne School Altarpieces', artist: 'Various', location: 'Medieval gallery', note: 'Finest collection of Cologne Gothic painting' }
      ]
    },
    faqs: [
      {
        question: 'What is the Cologne School of painting?',
        answer: 'A medieval painting tradition from Cologne known for delicate, jewel-like religious works. Stefan Lochner is the most famous artist. The Wallraf-Richartz has the world\'s best collection of these works.'
      },
      {
        question: 'Is the Wallraf-Richartz Museum better than Museum Ludwig?',
        answer: 'They cover different eras. Wallraf-Richartz has medieval to 19th-century art (Old Masters). Museum Ludwig focuses on modern and contemporary art (Pop Art, German Expressionism). Both are excellent.'
      },
      {
        question: 'When is the Wallraf-Richartz Museum free?',
        answer: 'First Thursday of each month. The museum is also open late until 9pm every Thursday, making it convenient for evening visits even when not free.'
      }
    ]
  },
  {
    slug: 'pinacoteca-vaticana-vatican',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '08:00', close: '19:00' },
          tuesday: { open: '08:00', close: '19:00' },
          wednesday: { open: '08:00', close: '19:00' },
          thursday: { open: '08:00', close: '19:00' },
          friday: { open: '08:00', close: '22:00', note: 'Extended Friday (May-Oct)' },
          saturday: { open: '08:00', close: '19:00' },
          sunday: { closed: true, note: 'Except last Sunday of month' }
        },
        lastAdmission: '2 hours before closing',
        specialNote: 'Last Sunday of month: free 9am-2pm (very crowded)',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'January 6', status: 'closed' },
          { date: 'February 11', status: 'closed' },
          { date: 'Easter Sunday/Monday', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'June 29', status: 'closed' },
          { date: 'August 14-15', status: 'closed' },
          { date: 'November 1', status: 'closed' },
          { date: 'December 8', status: 'closed' },
          { date: 'December 25-26', status: 'closed' }
        ]
      },
      admission: {
        adult: 17,
        reduced: 8,
        under6: 'free',
        note: 'Part of Vatican Museums ticket',
        fullExperienceNote: 'Vatican Museums + Sistine Chapel included'
      },
      tickets: {
        onlineUrl: 'https://www.museivaticani.va/content/museivaticani/en/visita-i-musei.html',
        onlineRequired: true,
        onlineNote: 'Strongly recommended, walk-up lines can be 3+ hours',
        timedEntry: true,
        advanceRequired: true,
        advanceWindow: '60 days',
        refundPolicy: 'Exchangeable, not refundable'
      },
      crowdData: {
        overall: 'Very Heavy',
        bestDays: ['Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Last Sunday (free)', 'Monday (Borghese closed)'],
        bestTimes: ['Opening at 8am', 'Friday evening (May-Oct)'],
        worstTimes: ['10am-3pm always packed'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April (Easter)', 'July', 'August', 'October'],
        avgVisitDuration: '3-4 hours',
        recommendedDuration: '4 hours minimum'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false
      },
      accessibility: {
        wheelchairAccessible: true,
        wheelchairNote: 'Request wheelchair at entrance',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'Spanish', 'German', 'Japanese', 'Chinese', 'Russian']
      },
      tips: [
        'The Pinacoteca is a separate building from the main Vatican Museums route. Many visitors miss it.',
        'Visit the Pinacoteca first thing, before heading to Sistine Chapel. It\'s quieter in the morning.',
        'Raphael\'s Transfiguration is here, not in the Raphael Rooms. His last painting.',
        'Book tickets months ahead for peak season. Same-day tickets are nearly impossible April-October.',
        'Friday evening openings (May-Oct) are magical with fewer crowds.',
        'The free last Sunday is chaos. Only do it if budget is critical.'
      ],
      mustSee: [
        { name: 'Transfiguration', artist: 'Raphael', location: 'Room VIII', note: 'Raphael\'s final masterpiece, unfinished at his death' },
        { name: 'St. Jerome in the Wilderness', artist: 'Leonardo da Vinci', location: 'Room IX', note: 'Unfinished Leonardo, shows his underdrawing' },
        { name: 'Deposition', artist: 'Caravaggio', location: 'Room XII', note: 'Powerful Counter-Reformation altarpiece' },
        { name: 'Pietà', artist: 'Giovanni Bellini', location: 'Room II', note: 'Exquisite Venetian devotional painting' },
        { name: 'Stefaneschi Triptych', artist: 'Giotto', location: 'Room II', note: 'Major work by Giotto for Old St. Peter\'s' }
      ]
    },
    faqs: [
      {
        question: 'Is the Pinacoteca Vaticana the same as the Vatican Museums?',
        answer: 'It\'s part of the Vatican Museums complex but in a separate building. Your Vatican ticket includes the Pinacoteca, Sistine Chapel, Raphael Rooms, and other sections. Don\'t skip the Pinacoteca.'
      },
      {
        question: 'Do I need separate tickets for the Pinacoteca Vaticana?',
        answer: 'No, it\'s included in the Vatican Museums ticket (€17). However, you must book timed entry online in advance. Walk-up lines can exceed 3 hours in peak season.'
      },
      {
        question: 'How long to spend in the Pinacoteca Vaticana specifically?',
        answer: 'About 45 minutes to 1 hour for the Pinacoteca alone. But budget 4+ hours for the entire Vatican Museums experience including Sistine Chapel and Raphael Rooms.'
      }
    ]
  },
  {
    slug: 'art-gallery-of-new-south-wales-agnsw-sydney-austra',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '10:00', close: '17:00' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '22:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        note: 'Wednesday late night until 10pm',
        exceptions: [
          { date: 'Christmas Day', status: 'closed' },
          { date: 'Good Friday', status: 'closed' }
        ]
      },
      admission: {
        general: 'Free',
        specialExhibitions: 'Ticketed separately',
        note: 'Permanent collection always free'
      },
      tickets: {
        onlineUrl: 'https://www.artgallery.nsw.gov.au/visit/',
        reservationRequired: false,
        walkUpAvailable: true,
        specialExhibitionNote: 'Book online for paid exhibitions'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday', 'Wednesday evening'],
        bestTimes: ['Opening at 10am', 'Weekday afternoons'],
        worstTimes: ['Weekend midday', 'School holidays'],
        bestMonths: ['February', 'March', 'May'],
        worstMonths: ['December', 'January (Australian summer)'],
        avgVisitDuration: '2-3 hours',
        recommendedDuration: '2.5 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        restaurantName: 'Art Gallery Restaurant',
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: true,
        parkingNote: 'Nearby Domain Car Park'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Mandarin', 'Japanese'],
        auslanTours: 'Available on request'
      },
      tips: [
        'The 2022 expansion (Sydney Modern Project) added dramatic new galleries. Allow extra time.',
        'Wednesday nights until 10pm include live music and bar service.',
        'The Yiribana Gallery showcases Aboriginal and Torres Strait Islander art, a highlight.',
        'Located in The Domain parkland near the Royal Botanic Garden. Combine visits.',
        'The new underground Tank galleries are converted WWII oil tanks, architecturally striking.',
        'Strong collection of Australian art from colonial to contemporary periods.'
      ],
      mustSee: [
        { name: 'Yiribana Gallery', artist: 'Various', location: 'Lower level', note: 'Indigenous Australian art, one of the finest collections' },
        { name: 'The Golden Fleece', artist: 'Tom Roberts', location: 'Australian galleries', note: 'Iconic Australian Impressionist work' },
        { name: 'Sydney Modern building', artist: 'SANAA architects', location: 'North building', note: '2022 expansion, stunning contemporary architecture' },
        { name: 'Tank galleries', artist: 'Architecture', location: 'Underground', note: 'WWII oil tanks converted to galleries' },
        { name: 'European collection', artist: 'Various', location: 'South building', note: 'Bronzino, Rubens, Canaletto, Impressionists' }
      ]
    },
    faqs: [
      {
        question: 'Is the Art Gallery of NSW free?',
        answer: 'Yes, the permanent collection is always free. Only special temporary exhibitions require tickets. This makes it one of the best free attractions in Sydney.'
      },
      {
        question: 'What is Sydney Modern?',
        answer: 'Sydney Modern is the 2022 expansion designed by SANAA architects. It nearly doubled the gallery space and includes the converted WWII oil Tanks for large installations. The architecture alone is worth visiting.'
      },
      {
        question: 'Does the Art Gallery of NSW have Aboriginal art?',
        answer: 'Yes, the Yiribana Gallery is dedicated to Aboriginal and Torres Strait Islander art and is considered one of the finest collections anywhere. It\'s a highlight of any visit.'
      }
    ]
  },
  {
    slug: 'residenzgalerie-salzburg-austria',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true, note: 'Except July-August' },
          tuesday: { open: '10:00', close: '17:00' },
          wednesday: { open: '10:00', close: '17:00' },
          thursday: { open: '10:00', close: '17:00' },
          friday: { open: '10:00', close: '17:00' },
          saturday: { open: '10:00', close: '17:00' },
          sunday: { open: '10:00', close: '17:00' }
        },
        seasonal: {
          summer: {
            period: 'July-August',
            note: 'Open daily including Mondays'
          }
        },
        exceptions: [
          { date: 'November 1', status: 'closed' },
          { date: 'December 24', status: 'closed' }
        ]
      },
      admission: {
        adult: 10,
        reduced: 8,
        under19: 'free',
        combinationTicket: {
          name: 'Salzburg Residenz Combo',
          price: 14,
          includes: 'Residenzgalerie + State Rooms'
        },
        salzburgCard: 'Included with Salzburg Card'
      },
      tickets: {
        onlineUrl: 'https://www.domquartier.at/en/',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: false
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday during Festival'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Salzburg Festival period (July-August)'],
        bestMonths: ['April', 'May', 'September', 'October'],
        worstMonths: ['July', 'August (Festival season)'],
        avgVisitDuration: '1-1.5 hours',
        recommendedDuration: '1.5 hours'
      },
      amenities: {
        cafe: true,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false,
        nearbyParking: 'Altstadtgarage nearby'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        elevator: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English', 'Italian', 'French']
      },
      tips: [
        'Part of the DomQuartier museum complex. The combination ticket includes State Rooms and is good value.',
        'Dutch and Flemish paintings are the strength. Look for Rembrandt and Rubens.',
        'The building itself (the Residenz) was the Archbishop\'s palace. State Rooms are spectacular.',
        'One of the quieter museums in Salzburg, often overlooked for Mozart attractions.',
        'Summer visits coincide with Salzburg Festival, meaning more crowds but also more cultural events.',
        'Free entry for those under 19, making it family-friendly.'
      ],
      mustSee: [
        { name: 'Old Woman Praying', artist: 'Rembrandt', location: 'Dutch gallery', note: 'Intimate late Rembrandt' },
        { name: 'Rubens paintings', artist: 'Peter Paul Rubens', location: 'Flemish gallery', note: 'Several works including allegories' },
        { name: 'State Rooms', artist: 'Architecture', location: 'Connected via combo ticket', note: 'Baroque princely apartments' },
        { name: 'Dutch Golden Age collection', artist: 'Various', location: 'Main galleries', note: 'Strong collection of 17th-century Dutch painting' },
        { name: 'View from upper floors', artist: 'N/A', location: 'Upper galleries', note: 'Overlooks Residenzplatz and Cathedral' }
      ]
    },
    faqs: [
      {
        question: 'Is the Residenzgalerie worth visiting in Salzburg?',
        answer: 'Yes, especially if you appreciate Dutch and Flemish Old Masters. It\'s often overlooked for Mozart-related sites, making it pleasantly uncrowded. The Baroque palace setting adds to the experience.'
      },
      {
        question: 'What is the DomQuartier?',
        answer: 'The DomQuartier combines the Residenzgalerie, Residenz State Rooms, Cathedral galleries, and St. Peter\'s Abbey into one ticketed complex. A combination ticket lets you walk through connected spaces.'
      },
      {
        question: 'Is the Residenzgalerie included in the Salzburg Card?',
        answer: 'Yes, the Salzburg Card includes free entry to the Residenzgalerie and most Salzburg museums. If you\'re visiting multiple attractions, the card offers good value.'
      }
    ]
  },
  {
    slug: 'mus233e-national-eug232ne-delacroix-paris-france',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { closed: true },
          wednesday: { open: '09:30', close: '17:30' },
          thursday: { open: '09:30', close: '17:30' },
          friday: { open: '09:30', close: '17:30' },
          saturday: { open: '09:30', close: '17:30' },
          sunday: { open: '09:30', close: '17:30' }
        },
        lastAdmission: '17:00',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'May 1', status: 'closed' },
          { date: 'December 25', status: 'closed' }
        ]
      },
      admission: {
        adult: 7,
        under26EU: 'free',
        under18: 'free',
        freeDay: 'First Sunday of month',
        combinedTicket: {
          name: 'Louvre + Delacroix',
          note: 'Same-day Louvre ticket grants free Delacroix entry'
        }
      },
      tickets: {
        onlineUrl: 'https://www.musee-delacroix.fr/en',
        onlineAvailable: true,
        walkUpAvailable: true,
        onlineRecommended: false
      },
      crowdData: {
        overall: 'Light',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['Sunday'],
        bestTimes: ['Any time, rarely crowded'],
        worstTimes: ['Free first Sunday'],
        bestMonths: ['All year relatively quiet'],
        worstMonths: ['August (many Paris museums less staffed)'],
        avgVisitDuration: '30-45 minutes',
        recommendedDuration: '45 minutes'
      },
      amenities: {
        cafe: false,
        giftShop: true,
        giftShopNote: 'Small but good selection of Delacroix books/prints',
        coatCheck: false,
        wifi: false,
        parking: false,
        garden: true,
        gardenNote: 'Charming private garden, part of the visit'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor and garden accessible, studio has stairs',
        audioGuide: false,
        app: 'Free museum app available'
      },
      tips: [
        'A hidden gem in Saint-Germain-des-Prés. Delacroix\'s last apartment and studio.',
        'Your Louvre ticket (same day) gets you in free. Visit after the Louvre.',
        'The private garden is a peaceful retreat from the busy neighborhood.',
        'Small collection, but includes sketches and studies for his major works.',
        'The studio where he painted murals for Saint-Sulpice church nearby.',
        'Combine with a visit to Saint-Sulpice to see his chapel murals.'
      ],
      mustSee: [
        { name: 'The Artist\'s Studio', artist: 'Historic space', location: 'Upper floor', note: 'Where Delacroix worked on his late masterpieces' },
        { name: 'Garden', artist: 'Historic space', location: 'Ground level', note: 'Delacroix\'s private garden, quiet oasis' },
        { name: 'Studies for Saint-Sulpice', artist: 'Eugène Delacroix', location: 'Throughout', note: 'Preparatory works for his chapel murals' },
        { name: 'Self-portraits and personal items', artist: 'Eugène Delacroix', location: 'Apartment rooms', note: 'Intimate look at the artist\'s life' },
        { name: 'Magdalene in the Wilderness', artist: 'Eugène Delacroix', location: 'Gallery', note: 'Moving late religious work' }
      ]
    },
    faqs: [
      {
        question: 'Is the Delacroix Museum free with a Louvre ticket?',
        answer: 'Yes, your same-day Louvre ticket grants free entry to the Delacroix Museum. It\'s a short walk from the Louvre and makes a perfect quiet counterpoint to the crowds.'
      },
      {
        question: 'How long should I spend at the Delacroix Museum?',
        answer: 'About 30-45 minutes. It\'s a small museum (his apartment and studio) but charming. The garden alone is worth the visit for a peaceful moment in busy Paris.'
      },
      {
        question: 'Why is Delacroix important?',
        answer: 'Eugène Delacroix was the leader of French Romanticism, known for dramatic color and movement. Liberty Leading the People is his most famous work (at the Louvre). This museum shows his more intimate side.'
      }
    ]
  }
];

async function addMuseumInfo() {
  console.log('Adding full visitor info for 10 museums...\n');

  for (const museum of museums) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.name}`);
    } catch (error) {
      console.error(`✗ Failed: ${museum.slug} - ${error.message}`);
    }
  }

  // Count total with hours
  const totalWithHours = await prisma.museum.count({
    where: {
      hoursOfOperation: { not: { equals: {} } }
    }
  });

  console.log(`\n✓ Total museums with visitor info: ${totalWithHours}`);

  await prisma.$disconnect();
}

addMuseumInfo().catch(console.error);
