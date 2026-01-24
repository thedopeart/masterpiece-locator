const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    id: 'art-institute-of-chicago',
    slug: 'art-institute-of-chicago',
    name: 'Art Institute of Chicago',
    city: 'Chicago',
    country: 'United States',
    address: '111 S Michigan Ave, Chicago, IL 60603',
    latitude: 41.8796,
    longitude: -87.6237,
    websiteUrl: 'https://www.artic.edu',
    ticketUrl: 'https://sales.artic.edu/Admissions',
    ticketPriceRange: '$25-$35',
    description: 'One of the oldest and largest art museums in the United States, housing nearly 300,000 works spanning 5,000 years. Home to iconic works including A Sunday on La Grande Jatte, American Gothic, and Nighthawks. The 2009 Modern Wing designed by Renzo Piano added significant contemporary gallery space.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '10:30 AM - 5:00 PM',
          tuesday: '10:30 AM - 5:00 PM',
          wednesday: '10:30 AM - 5:00 PM',
          thursday: '10:30 AM - 8:00 PM',
          friday: '10:30 AM - 5:00 PM',
          saturday: '10:30 AM - 5:00 PM',
          sunday: '10:30 AM - 5:00 PM'
        },
        exceptions: [
          'Member-only hours 10-11 AM daily',
          'Last admission 30 minutes before closing',
          'Closed New Year\'s Day, Thanksgiving, Christmas'
        ]
      },
      admission: {
        adult: 32.00,
        senior: 26.00,
        student: 26.00,
        child: 0,
        currency: 'USD',
        notes: 'Children under 14 free. Chicago teens under 18 free. Fast Pass $35 for skip-the-line.'
      },
      tickets: {
        onlineUrl: 'https://sales.artic.edu/Admissions',
        onlineRequired: false,
        timedEntry: true,
        advanceWindow: 'Recommended'
      },
      crowdData: {
        overall: 'Very busy',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday', 'Free days'],
        bestTimes: ['Early morning at opening', 'Thursday evenings'],
        worstTimes: ['Weekend afternoons', 'Holidays'],
        avgVisitDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'Nearby garages, no museum parking',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Spanish', 'Mandarin', 'French', 'German', 'Japanese', 'Korean'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Illinois residents get free admission on select winter weekdays (January-February)',
        'The museum is huge - prioritize what you want to see',
        'The Modern Wing has great views of Millennium Park',
        'LINK/WIC cardholders get free admission including special exhibitions',
        'Thursday evenings until 8 PM are less crowded',
        'Download the free app for self-guided tours'
      ],
      mustSee: [
        { name: 'A Sunday on La Grande Jatte', artist: 'Georges Seurat', location: 'Gallery 240', note: 'Iconic pointillist masterpiece' },
        { name: 'American Gothic', artist: 'Grant Wood', location: 'Gallery 263', note: 'Most recognizable American painting' },
        { name: 'Nighthawks', artist: 'Edward Hopper', location: 'Gallery 262', note: 'Quintessential American scene' },
        { name: 'The Old Guitarist', artist: 'Pablo Picasso', location: 'Gallery 391', note: 'Blue Period masterwork' },
        { name: 'A Quiet Cove by the Sea', artist: 'Claude Monet', location: 'Impressionist galleries', note: 'Part of world-class Impressionist collection' }
      ]
    },
    faqs: [
      {
        question: 'When is the Art Institute of Chicago free?',
        answer: 'Illinois residents get free admission on weekdays from January through late February. Children under 14 and Chicago teens under 18 are always free. LINK/WIC cardholders receive free admission year-round. Bank of America cardholders get free admission the first weekend of each month.'
      },
      {
        question: 'What are the most famous paintings at the Art Institute of Chicago?',
        answer: 'The most iconic works include Seurat\'s A Sunday on La Grande Jatte, Grant Wood\'s American Gothic, Hopper\'s Nighthawks, and an outstanding Impressionist collection featuring Monet, Renoir, and Cézanne. The museum holds nearly 300,000 artworks.'
      },
      {
        question: 'How long do you need at the Art Institute of Chicago?',
        answer: 'Plan for 3-4 hours to see the highlights, though art enthusiasts could spend an entire day. The museum spans 400,000 square feet. Prioritize the Impressionist galleries, American art, and Modern Wing if time is limited.'
      }
    ]
  },
  {
    id: 'lacma',
    slug: 'lacma',
    name: 'Los Angeles County Museum of Art',
    city: 'Los Angeles',
    country: 'United States',
    address: '5905 Wilshire Blvd, Los Angeles, CA 90036',
    latitude: 34.0639,
    longitude: -118.3592,
    websiteUrl: 'https://www.lacma.org',
    ticketUrl: 'https://www.lacma.org/tickets',
    ticketPriceRange: '$20-$25',
    description: 'The largest art museum in the western United States, with a collection of over 147,000 objects spanning 6,000 years. Located on Museum Row along Wilshire Boulevard. The iconic Urban Light installation by Chris Burden greets visitors at the entrance. The new David Geffen Galleries are expected to open in 2026.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '11:00 AM - 6:00 PM',
          tuesday: '11:00 AM - 6:00 PM',
          wednesday: 'Closed',
          thursday: '11:00 AM - 6:00 PM',
          friday: '11:00 AM - 8:00 PM',
          saturday: '10:00 AM - 7:00 PM',
          sunday: '10:00 AM - 7:00 PM'
        },
        exceptions: [
          'Closed Thanksgiving and Christmas',
          'New David Geffen Galleries opening 2026'
        ]
      },
      admission: {
        adult: 25.00,
        senior: 21.00,
        student: 21.00,
        child: 0,
        currency: 'USD',
        notes: 'LA County residents free after 3 PM weekdays. Children 17 and under free with NexGen program.'
      },
      tickets: {
        onlineUrl: 'https://www.lacma.org/tickets',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended for weekends'
      },
      crowdData: {
        overall: 'Moderate to busy',
        bestDays: ['Monday', 'Tuesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Morning opening', 'Weekday evenings'],
        worstTimes: ['Weekend afternoons'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'On-site parking $18-$22',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Spanish'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'LA County residents get free admission after 3 PM on weekdays',
        'Urban Light is best photographed at dusk when the lamps are lit',
        'The east campus is under construction until 2026',
        'Combine with a visit to the La Brea Tar Pits next door',
        'Friday evenings offer extended hours until 8 PM',
        'The NexGen program gives free admission to kids 17 and under plus one adult'
      ],
      mustSee: [
        { name: 'Urban Light', artist: 'Chris Burden', location: 'Wilshire entrance', note: '202 vintage street lamps, iconic LA landmark' },
        { name: 'Levitated Mass', artist: 'Michael Heizer', location: 'Outdoor sculpture', note: '340-ton boulder suspended over a walkway' },
        { name: 'Korean Art Collection', artist: 'Various', location: 'Korean galleries', note: 'Largest Korean art collection outside Asia' },
        { name: 'Latin American Art', artist: 'Various', location: 'BCAM building', note: 'Outstanding pre-Columbian and modern works' }
      ]
    },
    faqs: [
      {
        question: 'When is LACMA free?',
        answer: 'Los Angeles County residents receive free general admission after 3 PM on weekdays (Monday, Tuesday, Thursday, Friday). Just show valid ID with LA County address. Children 17 and under are always free through the NexGen program, plus one accompanying adult.'
      },
      {
        question: 'What is Urban Light at LACMA?',
        answer: 'Urban Light is an outdoor sculpture by Chris Burden consisting of 202 restored vintage street lamps from the 1920s and 1930s. Located at the Wilshire Boulevard entrance, it has become one of the most photographed landmarks in Los Angeles, especially beautiful at night.'
      },
      {
        question: 'Is LACMA under construction?',
        answer: 'Yes, the east campus is being rebuilt as the David Geffen Galleries, designed by Peter Zumthor. The new building is expected to open in April 2026. The west campus galleries remain open during construction.'
      }
    ]
  },
  {
    id: 'getty-center',
    slug: 'getty-center',
    name: 'Getty Center',
    city: 'Los Angeles',
    country: 'United States',
    address: '1200 Getty Center Drive, Los Angeles, CA 90049',
    latitude: 34.0780,
    longitude: -118.4741,
    websiteUrl: 'https://www.getty.edu/visit/center/',
    ticketUrl: 'https://www.getty.edu/visit/center/',
    ticketPriceRange: 'Free (parking $25)',
    description: 'A stunning hilltop museum campus designed by Richard Meier, housing European paintings, drawings, sculpture, and decorative arts from the Middle Ages to the present. The travertine-clad buildings offer panoramic views of Los Angeles. The Central Garden by Robert Irwin is an ever-changing work of art.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: '10:00 AM - 5:30 PM',
          wednesday: '10:00 AM - 5:30 PM',
          thursday: '10:00 AM - 5:30 PM',
          friday: '10:00 AM - 5:30 PM',
          saturday: '10:00 AM - 8:00 PM',
          sunday: '10:00 AM - 5:30 PM'
        },
        exceptions: [
          'Closed New Year\'s Day, Independence Day, Thanksgiving, Christmas',
          'Early close Christmas Eve and New Year\'s Eve'
        ]
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'Always free. Timed-entry reservation required. Parking $25 ($15 after 3 PM, free Saturday after 6 PM).'
      },
      tickets: {
        onlineUrl: 'https://www.getty.edu/visit/center/',
        onlineRequired: true,
        timedEntry: true,
        advanceWindow: 'Required, releases monthly'
      },
      crowdData: {
        overall: 'Busy',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Morning opening', 'Late afternoon'],
        worstTimes: ['Midday weekends'],
        avgVisitDuration: '3-4 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'Garage $25 ($15 after 3 PM)',
        giftShop: true,
        wifi: true,
        tram: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Spanish'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Admission is free but timed reservations are required',
        'Parking is free on Saturdays after 6 PM',
        'Take the free tram from the parking garage up to the museum',
        'The Central Garden changes with the seasons',
        'Stay for sunset and panoramic city views',
        'Same-day parking works for both Getty Center and Getty Villa'
      ],
      mustSee: [
        { name: 'Irises', artist: 'Vincent van Gogh', location: 'West Pavilion', note: 'Painted at asylum in Saint-Rémy' },
        { name: 'Venus and Adonis', artist: 'Titian', location: 'West Pavilion', note: 'Mythological masterpiece' },
        { name: 'Central Garden', artist: 'Robert Irwin', location: 'Outdoor', note: 'Living sculpture garden' },
        { name: 'European Decorative Arts', artist: 'Various', location: 'Decorative Arts galleries', note: 'Exceptional French furniture' }
      ]
    },
    faqs: [
      {
        question: 'Is the Getty Center free?',
        answer: 'Yes, admission to the Getty Center is always free. However, you must make a timed-entry reservation online in advance. Parking costs $25 per car ($15 after 3 PM, free on Saturday evenings after 6 PM).'
      },
      {
        question: 'Do I need a reservation for the Getty Center?',
        answer: 'Yes, timed-entry reservations are required even though admission is free. Reservations are released monthly and popular times book quickly. You can also call (310) 440-7300 to reserve.'
      },
      {
        question: 'How do you get to the Getty Center?',
        answer: 'Drive to 1200 Getty Center Drive off the 405 Freeway. Park in the garage ($25, less after 3 PM) and take the free tram to the hilltop campus. You can also take public transit or rideshare to avoid parking fees.'
      }
    ]
  },
  {
    id: 'the-broad',
    slug: 'the-broad',
    name: 'The Broad',
    city: 'Los Angeles',
    country: 'United States',
    address: '221 S Grand Ave, Los Angeles, CA 90012',
    latitude: 34.0544,
    longitude: -118.2505,
    websiteUrl: 'https://www.thebroad.org',
    ticketUrl: 'https://ticketing.thebroad.org/',
    ticketPriceRange: 'Free',
    description: 'A contemporary art museum housing the 2,000-work Broad collection, one of the most prominent holdings of postwar and contemporary art worldwide. The distinctive honeycomb building by Diller Scofidio + Renfro opened in 2015. Features works by Koons, Warhol, Basquiat, Kiefer, and Kusama.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: '11:00 AM - 5:00 PM',
          wednesday: '11:00 AM - 5:00 PM',
          thursday: '11:00 AM - 8:00 PM',
          friday: '11:00 AM - 5:00 PM',
          saturday: '10:00 AM - 6:00 PM',
          sunday: '10:00 AM - 6:00 PM'
        },
        exceptions: [
          'Closed major holidays'
        ]
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'Always free. Advance timed tickets recommended. Some special exhibitions may have fees.'
      },
      tickets: {
        onlineUrl: 'https://ticketing.thebroad.org/',
        onlineRequired: false,
        timedEntry: true,
        advanceWindow: 'Released monthly on last Wednesday at 10 AM'
      },
      crowdData: {
        overall: 'Very busy',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening time', 'Thursday evening'],
        worstTimes: ['Weekend afternoons'],
        avgVisitDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        parking: 'Garage below museum $19 for 3 hours with validation',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Tickets are free but book out quickly - reserve the last Wednesday of the month at 10 AM',
        'The Infinity Mirrored Room requires a separate free reservation',
        'Walk-up tickets available but expect wait times',
        'The architecture itself is worth seeing - "the veil and the vault"',
        'Parking under the museum is convenient but not free',
        'Thursday evenings are less crowded'
      ],
      mustSee: [
        { name: 'Infinity Mirrored Room', artist: 'Yayoi Kusama', location: 'Third floor', note: 'Free but separate reservation needed' },
        { name: 'Balloon Dog', artist: 'Jeff Koons', location: 'Third floor', note: 'One of five colored versions' },
        { name: 'Untitled', artist: 'Jean-Michel Basquiat', location: 'Third floor', note: 'Multiple major Basquiat works' },
        { name: 'Under the Table', artist: 'Robert Therrien', location: 'Third floor', note: 'Walk-through oversized furniture' }
      ]
    },
    faqs: [
      {
        question: 'Is The Broad free?',
        answer: 'Yes, general admission to The Broad is always free. However, advance timed tickets are highly recommended as the museum is very popular. Tickets are released monthly on the last Wednesday at 10 AM. Walk-up admission is available but may involve wait times.'
      },
      {
        question: 'How do I get tickets for the Infinity Mirrored Room?',
        answer: 'The Infinity Mirrored Room by Yayoi Kusama requires a separate free reservation in addition to general admission. These tickets are released nightly for the following day. Each visitor gets about 45 seconds inside the installation.'
      },
      {
        question: 'Who founded The Broad museum?',
        answer: 'The Broad was founded by philanthropists Eli and Edythe Broad, who built one of the most important contemporary art collections in the world. The museum opened in 2015 in a building designed by Diller Scofidio + Renfro.'
      }
    ]
  },
  {
    id: 'sfmoma',
    slug: 'sfmoma',
    name: 'San Francisco Museum of Modern Art',
    city: 'San Francisco',
    country: 'United States',
    address: '151 Third St, San Francisco, CA 94103',
    latitude: 37.7857,
    longitude: -122.4011,
    websiteUrl: 'https://www.sfmoma.org',
    ticketUrl: 'https://www.sfmoma.org/visit/',
    ticketPriceRange: '$26-$30',
    description: 'One of the largest museums of modern and contemporary art in the United States. The 2016 expansion by Snøhetta tripled gallery space. Houses significant works by Matisse, Klee, Rivera, and an unparalleled collection of photography. The living wall on the exterior features 19,000 plants.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '10:00 AM - 5:00 PM',
          tuesday: '10:00 AM - 5:00 PM',
          wednesday: 'Closed',
          thursday: '12:00 PM - 8:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'Last admission 30 minutes before closing',
          'Closed Wednesdays, Thanksgiving, Christmas'
        ]
      },
      admission: {
        adult: 30.00,
        senior: 27.00,
        student: 22.00,
        child: 0,
        currency: 'USD',
        notes: 'Ages 18 and under free. Bay Area residents free on First Thursday 4-8 PM.'
      },
      tickets: {
        onlineUrl: 'https://www.sfmoma.org/visit/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Friday'],
        worstDays: ['Saturday', 'First Thursday'],
        bestTimes: ['Morning opening', 'Thursday evening'],
        worstTimes: ['Weekend afternoons'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'Nearby garages, no museum parking',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Bay Area residents get free admission on First Thursday evenings 4-8 PM',
        'The first two floors have free art-filled spaces without a ticket',
        '45,000 square feet of public space is free to explore',
        'Convention attendees get $4 off with Moscone Center badge',
        'Ages 18 and under are always free',
        'The living wall outside features 19,000 plants native to California'
      ],
      mustSee: [
        { name: 'Femme au chapeau', artist: 'Henri Matisse', location: 'Upper galleries', note: 'Pioneering Fauvist portrait' },
        { name: 'The Flower Carrier', artist: 'Diego Rivera', location: 'Americas galleries', note: 'Iconic Mexican modernism' },
        { name: 'Photography Collection', artist: 'Various', location: 'Photography galleries', note: 'One of the finest in the world' },
        { name: 'Living Wall', artist: 'Various', location: 'Exterior', note: '19,000 native California plants' }
      ]
    },
    faqs: [
      {
        question: 'When is SFMOMA free?',
        answer: 'SFMOMA offers free admission to Bay Area residents (nine counties) on the First Thursday of each month from 4-8 PM. Visitors 18 and under are always free. The first two floors have 45,000 square feet of free public space including artwork.'
      },
      {
        question: 'What is SFMOMA known for?',
        answer: 'SFMOMA houses one of the largest modern and contemporary art collections in the US, with particular strengths in photography, painting, and media arts. The 2016 expansion tripled gallery space. Notable works include paintings by Matisse, Klee, and Diego Rivera.'
      },
      {
        question: 'Is SFMOMA near Union Square?',
        answer: 'Yes, SFMOMA is located at 151 Third Street, just a few blocks from Union Square and the Montgomery Street BART station. It is also close to Yerba Buena Gardens and Moscone Center.'
      }
    ]
  },
  {
    id: 'de-young-museum',
    slug: 'de-young-museum',
    name: 'de Young Museum',
    city: 'San Francisco',
    country: 'United States',
    address: '50 Hagiwara Tea Garden Drive, Golden Gate Park, San Francisco, CA 94118',
    latitude: 37.7714,
    longitude: -122.4686,
    websiteUrl: 'https://www.famsf.org/visit/de-young',
    ticketUrl: 'https://www.famsf.org/visit/de-young-tickets-hours',
    ticketPriceRange: 'Free for Bay Area (others $15-$25)',
    description: 'Located in Golden Gate Park, the de Young showcases American art from the 17th century to the present, international contemporary art, textiles, and art from Africa, Oceania, and the Americas. The copper-clad building by Herzog & de Meuron features a twisting observation tower with 360-degree city views.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: '9:30 AM - 5:15 PM',
          wednesday: '9:30 AM - 5:15 PM',
          thursday: '9:30 AM - 5:15 PM',
          friday: '9:30 AM - 5:15 PM',
          saturday: '9:30 AM - 5:15 PM',
          sunday: '9:30 AM - 5:15 PM'
        },
        exceptions: [
          'Hamon Tower: 9:30 AM - 4:30 PM',
          'Closed Presidents\' Day, Indigenous Peoples\' Day, Thanksgiving, Christmas'
        ]
      },
      admission: {
        adult: 15.00,
        senior: 12.00,
        student: 12.00,
        child: 0,
        currency: 'USD',
        notes: 'Bay Area residents free to permanent collection. Free every Saturday for Bay Area. Free First Tuesday for everyone. Kids 17 and under always free.'
      },
      tickets: {
        onlineUrl: 'https://www.famsf.org/visit/de-young-tickets-hours',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'First Tuesday'],
        bestTimes: ['Morning opening'],
        worstTimes: ['Free admission days'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'Underground garage and Golden Gate Park lots',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Bay Area residents get free admission every Saturday',
        'First Tuesday of the month is free for everyone',
        'The Hamon Tower observation deck is free even without museum admission',
        'Your ticket includes same-day entry to the Legion of Honor',
        'Walk through Golden Gate Park and visit the Japanese Tea Garden nearby',
        'Kids 17 and under are always free'
      ],
      mustSee: [
        { name: 'Hamon Observation Tower', artist: 'Herzog & de Meuron', location: 'Tower', note: '360-degree views, free to visit' },
        { name: 'American Art Collection', artist: 'Various', location: 'American galleries', note: '17th century to present' },
        { name: 'Textile Collection', artist: 'Various', location: 'Textile galleries', note: 'One of the finest in the US' },
        { name: 'Art of Africa and Oceania', artist: 'Various', location: 'Dedicated galleries', note: 'Exceptional non-Western art' }
      ]
    },
    faqs: [
      {
        question: 'Is the de Young Museum free?',
        answer: 'Residents of the nine Bay Area counties receive free admission to the permanent collection galleries. Free Saturdays offer free general admission to all Bay Area residents. The First Tuesday of each month is free for everyone. Kids 17 and under are always free.'
      },
      {
        question: 'Is the de Young Museum tower free?',
        answer: 'Yes, the Hamon Observation Tower is free to visit even without museum admission. The tower offers 360-degree panoramic views of San Francisco, Golden Gate Park, and the Pacific Ocean.'
      },
      {
        question: 'Can I visit both the de Young and Legion of Honor?',
        answer: 'Yes, your de Young ticket includes same-day admission to the Legion of Honor museum in Lincoln Park at no extra cost. The two museums are operated by the Fine Arts Museums of San Francisco.'
      }
    ]
  },
  {
    id: 'museum-of-fine-arts-houston',
    slug: 'museum-of-fine-arts-houston',
    name: 'Museum of Fine Arts, Houston',
    city: 'Houston',
    country: 'United States',
    address: '1001 Bissonnet St, Houston, TX 77005',
    latitude: 29.7259,
    longitude: -95.3907,
    websiteUrl: 'https://www.mfah.org',
    ticketUrl: 'https://www.mfah.org/tickets',
    ticketPriceRange: 'Free-$24',
    description: 'One of the largest art museums in the United States with nearly 80,000 works spanning 5,000 years. The 14-acre campus includes the Beck, Kinder, and Law buildings, plus the Cullen Sculpture Garden. By gallery space, it is the second-largest art museum in the Americas.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '11:00 AM - 6:00 PM',
          tuesday: '11:00 AM - 6:00 PM',
          wednesday: '11:00 AM - 6:00 PM',
          thursday: '11:00 AM - 9:00 PM',
          friday: '11:00 AM - 6:00 PM',
          saturday: '11:00 AM - 6:00 PM',
          sunday: '11:00 AM - 6:00 PM'
        },
        exceptions: [
          'Free Thursdays courtesy of Shell USA',
          'Closed Thanksgiving, Christmas'
        ]
      },
      admission: {
        adult: 24.00,
        senior: 20.00,
        youth: 20.00,
        child: 0,
        currency: 'USD',
        notes: 'Children 12 and under free. Permanent collection free every Thursday.'
      },
      tickets: {
        onlineUrl: 'https://www.mfah.org/tickets',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Tuesday', 'Wednesday'],
        worstDays: ['Thursday', 'Saturday'],
        bestTimes: ['Morning', 'Late afternoon'],
        worstTimes: ['Thursday evenings (free day)'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'On-site parking available',
        giftShop: true,
        wifi: true,
        sculptureGarden: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Spanish'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Permanent collection is free every Thursday (sponsored by Shell)',
        'The Cullen Sculpture Garden is free to visit',
        'Texas Lone Star Card holders receive free admission',
        'The Kinder Building opened in 2020 with modern and contemporary art',
        'Bank of America cardholders get free weekend admission monthly',
        'Second-largest art museum in the Americas by gallery space'
      ],
      mustSee: [
        { name: 'Cullen Sculpture Garden', artist: 'Various', location: 'Outdoor garden', note: 'Designed by Isamu Noguchi, free to visit' },
        { name: 'Latin American Art Collection', artist: 'Various', location: 'Kinder Building', note: 'Outstanding holdings' },
        { name: 'European Old Masters', artist: 'Various', location: 'Beck Building', note: 'Renaissance through 19th century' },
        { name: 'Asian Art Collection', artist: 'Various', location: 'Law Building', note: 'Spanning 5,000 years' }
      ]
    },
    faqs: [
      {
        question: 'When is the Museum of Fine Arts Houston free?',
        answer: 'The permanent collection is free every Thursday from 11 AM to 9 PM, courtesy of Shell USA. Special exhibitions require a discounted $10 ticket on Thursdays. Texas Lone Star Card holders receive free admission anytime. Bank of America cardholders get free admission the first weekend of each month.'
      },
      {
        question: 'How big is the Museum of Fine Arts Houston?',
        answer: 'MFAH is one of the largest art museums in the US with nearly 80,000 works spanning 5,000 years. The 14-acre campus includes over 300,000 square feet of exhibition space across three buildings, making it the second-largest art museum in the Americas by gallery space.'
      },
      {
        question: 'Is the sculpture garden at MFAH free?',
        answer: 'Yes, the Lillie and Hugh Roy Cullen Sculpture Garden is free and open to the public. Designed by Isamu Noguchi, the garden features masterworks of 20th and 21st century sculpture in a serene outdoor setting.'
      }
    ]
  },
  {
    id: 'high-museum-of-art',
    slug: 'high-museum-of-art',
    name: 'High Museum of Art',
    city: 'Atlanta',
    country: 'United States',
    address: '1280 Peachtree St NE, Atlanta, GA 30309',
    latitude: 33.7901,
    longitude: -84.3855,
    websiteUrl: 'https://high.org',
    ticketUrl: 'https://high.org/tickets/',
    ticketPriceRange: '$14.50-$18',
    description: 'The leading art museum in the Southeast with over 18,000 works including significant holdings of American, European, and African art, photography, folk art, and modern and contemporary art. The white porcelain-clad building by Richard Meier and later expansion by Renzo Piano anchor the Woodruff Arts Center.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: '10:00 AM - 5:00 PM',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 5:00 PM',
          friday: '10:00 AM - 9:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '12:00 PM - 5:00 PM'
        },
        exceptions: [
          'Last ticket issued 1 hour before closing',
          'Closed major holidays'
        ]
      },
      admission: {
        adult: 18.00,
        senior: 15.00,
        student: 15.00,
        child: 14.50,
        currency: 'USD',
        notes: 'Children 5 and under free. Free Second Sundays and Third Wednesdays.'
      },
      tickets: {
        onlineUrl: 'https://high.org/tickets/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended for special exhibitions'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Second Sunday', 'Saturday'],
        bestTimes: ['Morning opening'],
        worstTimes: ['Free admission days'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'Woodruff Arts Center garage',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Second Sunday of each month offers free admission noon-5 PM',
        'Third Wednesday is now a free admission day',
        'Friday evenings extend until 9 PM',
        'Military personnel and one guest get free admission',
        'Part of the Woodruff Arts Center campus with symphony and theater',
        'Parking is $18 weekdays, $25 weekend flat rate'
      ],
      mustSee: [
        { name: 'American Art Collection', artist: 'Various', location: 'American galleries', note: 'Strong in Southern and self-taught art' },
        { name: 'Photography Collection', artist: 'Various', location: 'Photography galleries', note: 'Civil Rights era and beyond' },
        { name: 'African Art Collection', artist: 'Various', location: 'African galleries', note: 'One of the finest in the South' },
        { name: 'Folk Art Collection', artist: 'Various', location: 'Folk art galleries', note: 'Important self-taught artists' }
      ]
    },
    faqs: [
      {
        question: 'When is the High Museum free?',
        answer: 'The High Museum offers free admission on the Second Sunday of each month from noon to 5 PM, featuring family programming and art activities. Third Wednesdays are also free. Military personnel (active and veteran) plus one guest receive free admission anytime.'
      },
      {
        question: 'What is the High Museum known for?',
        answer: 'The High is the leading art museum in the Southeast with over 18,000 works. It is particularly strong in American art, Southern and self-taught artists, photography (including Civil Rights era images), and African art. The Richard Meier building is an architectural landmark.'
      },
      {
        question: 'Where do I park at the High Museum?',
        answer: 'Parking is available in the Woodruff Arts Center garage. Weekday rates are $18 for 1-5 hours. Weekend flat rate is $25. The museum is located in Midtown Atlanta at 1280 Peachtree Street.'
      }
    ]
  },
  {
    id: 'nelson-atkins-museum',
    slug: 'nelson-atkins-museum',
    name: 'Nelson-Atkins Museum of Art',
    city: 'Kansas City',
    country: 'United States',
    address: '4525 Oak St, Kansas City, MO 64111',
    latitude: 39.0451,
    longitude: -94.5809,
    websiteUrl: 'https://nelson-atkins.org',
    ticketUrl: 'https://nelson-atkins.org/visit/',
    ticketPriceRange: 'Free',
    description: 'Home to 40,000 works of art spanning 5,000 years, with renowned collections of Asian art, Impressionist and Post-Impressionist paintings, American art, and photography. The 2007 Bloch Building addition by Steven Holl features translucent "lenses" that glow at night. The sculpture park includes giant shuttlecocks by Claes Oldenburg.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '10:00 AM - 5:00 PM',
          tuesday: 'Closed',
          wednesday: 'Closed',
          thursday: '10:00 AM - 9:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'Closed Tuesdays and Wednesdays',
          'Closed New Year\'s Day, July 4th, Thanksgiving, Christmas Eve, Christmas'
        ]
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'General admission always free. Some special exhibitions may have a charge.'
      },
      tickets: {
        onlineUrl: 'https://nelson-atkins.org/visit/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Not required'
      },
      crowdData: {
        overall: 'Low to moderate',
        bestDays: ['Monday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Morning', 'Thursday evening'],
        worstTimes: ['Weekend afternoons'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'Garage $14, members free',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Admission is always free',
        'The Bloch Building glows beautifully at night',
        'Don\'t miss the giant shuttlecock sculptures on the lawn',
        'Thursday evenings until 9 PM are great for avoiding crowds',
        'The KC Streetcar has a stop near the museum',
        'The Asian art collection is world-renowned'
      ],
      mustSee: [
        { name: 'Bloch Galleries', artist: 'Various', location: 'Bloch Building', note: 'Outstanding Impressionist and Post-Impressionist works' },
        { name: 'Shuttlecocks', artist: 'Claes Oldenburg & Coosje van Bruggen', location: 'Lawn', note: 'Giant pop art badminton shuttlecocks' },
        { name: 'Asian Art Collection', artist: 'Various', location: 'Asian galleries', note: 'One of the finest in the US' },
        { name: 'Chinese Temple Room', artist: 'Various', location: 'Asian galleries', note: 'Reconstructed historic temple' }
      ]
    },
    faqs: [
      {
        question: 'Is the Nelson-Atkins Museum free?',
        answer: 'Yes, general admission to the Nelson-Atkins Museum of Art is always free. Some special exhibitions may have an additional charge. Parking in the garage costs $14, but members park free.'
      },
      {
        question: 'What are the shuttlecocks at the Nelson-Atkins?',
        answer: 'The four giant Shuttlecocks are pop art sculptures by Claes Oldenburg and Coosje van Bruggen installed on the museum lawn in 1994. Each stands over 18 feet tall and weighs 5,500 pounds. They have become iconic Kansas City landmarks.'
      },
      {
        question: 'What is the Nelson-Atkins Museum known for?',
        answer: 'The museum is renowned for its Asian art collection (one of the best in the US), Impressionist and Post-Impressionist paintings in the Bloch Galleries, American art, and photography. The 40,000-work collection spans 5,000 years of art history.'
      }
    ]
  },
  {
    id: 'carnegie-museum-of-art',
    slug: 'carnegie-museum-of-art',
    name: 'Carnegie Museum of Art',
    city: 'Pittsburgh',
    country: 'United States',
    address: '4400 Forbes Ave, Pittsburgh, PA 15213',
    latitude: 40.4434,
    longitude: -79.9489,
    websiteUrl: 'https://carnegieart.org',
    ticketUrl: 'https://carnegiemuseums.org/our-museums/plan-a-visit/',
    ticketPriceRange: '$12-$25',
    description: 'Founded by Andrew Carnegie in 1895, one of the largest art museums in the United States with particular strengths in Impressionist, Post-Impressionist, and American art. Home to the Carnegie International, one of the oldest and most prestigious exhibitions of contemporary art in North America. Shares a building with the Carnegie Museum of Natural History.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '10:00 AM - 5:00 PM',
          tuesday: 'Closed',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 8:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        seasonal: {
          summer: 'Open daily Memorial Day through Labor Day'
        },
        exceptions: [
          'Closed Tuesdays (except summer)',
          'Closed Easter, Thanksgiving, Christmas, New Year\'s Day'
        ]
      },
      admission: {
        adult: 25.00,
        senior: 20.00,
        student: 15.00,
        child: 15.00,
        currency: 'USD',
        notes: 'Children 2 and under free. Teens 13-18 free with membership. After 3 PM weekdays $12.'
      },
      tickets: {
        onlineUrl: 'https://carnegiemuseums.org/our-museums/plan-a-visit/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended'
      },
      crowdData: {
        overall: 'Low to moderate',
        bestDays: ['Monday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Weekday afternoons after 3 PM'],
        worstTimes: ['Weekend midday'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'On-site garage',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'After 3 PM weekday admission is only $12',
        'Your ticket includes the Carnegie Museum of Natural History',
        'Pittsburgh university students with ID get free admission',
        'Bank of America cardholders get free admission first weekend monthly',
        'The Carnegie International runs every few years - check if current',
        'Free teen membership available for ages 13-18'
      ],
      mustSee: [
        { name: 'Hall of Architecture', artist: 'Various', location: 'Architecture gallery', note: 'Plaster casts of architectural masterpieces' },
        { name: 'Impressionist Collection', artist: 'Various', location: 'European galleries', note: 'Monet, Renoir, Degas' },
        { name: 'Carnegie International Works', artist: 'Various', location: 'Contemporary galleries', note: 'From the prestigious biennial/triennial' },
        { name: 'Japanese Art Collection', artist: 'Various', location: 'Asian galleries', note: 'Ukiyo-e prints and screens' }
      ]
    },
    faqs: [
      {
        question: 'Is the Carnegie Museum of Art connected to the Natural History Museum?',
        answer: 'Yes, the Carnegie Museum of Art and Carnegie Museum of Natural History share the same historic building at 4400 Forbes Avenue in Oakland. Your admission ticket includes access to both museums, so you can explore art and dinosaurs in one visit.'
      },
      {
        question: 'When is the Carnegie Museum of Art cheapest to visit?',
        answer: 'Admission drops to $12 for everyone after 3 PM on weekdays (use promo code AFTER3). Pittsburgh university students get free admission with valid ID. Bank of America cardholders receive free admission the first weekend of each month.'
      },
      {
        question: 'What is the Carnegie International?',
        answer: 'The Carnegie International is one of the oldest and most prestigious exhibitions of contemporary art in North America, founded in 1896 by Andrew Carnegie. It showcases international contemporary artists and has been held roughly every few years since its founding.'
      }
    ]
  },
  {
    id: 'baltimore-museum-of-art',
    slug: 'baltimore-museum-of-art',
    name: 'Baltimore Museum of Art',
    city: 'Baltimore',
    country: 'United States',
    address: '10 Art Museum Drive, Baltimore, MD 21218',
    latitude: 39.3261,
    longitude: -76.6196,
    websiteUrl: 'https://artbma.org',
    ticketUrl: 'https://artbma.org/visit/hours-information',
    ticketPriceRange: 'Free',
    description: 'Maryland\'s largest art museum with over 95,000 objects including the world\'s largest public collection of works by Henri Matisse. Founded in 1914, the museum is particularly strong in 19th-century, modern, and contemporary art. The Cone Collection of Matisse and Picasso works is a cornerstone of the museum.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: 'Closed',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 9:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'Closed Mondays and Tuesdays',
          'Extended Thursday hours until 9 PM'
        ]
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'General admission always free. Some special exhibitions may have a charge.'
      },
      tickets: {
        onlineUrl: 'https://artbma.org/visit/hours-information',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Free ticket reservation recommended'
      },
      crowdData: {
        overall: 'Low to moderate',
        bestDays: ['Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Thursday evening'],
        bestTimes: ['Morning', 'Early afternoon'],
        worstTimes: ['Weekend afternoons'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'Free parking lot',
        giftShop: true,
        wifi: true,
        sculptureGarden: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'General admission is always free',
        'Reserve a free ticket online before visiting',
        'The Cone Collection of Matisse works is world-renowned',
        'Thursday evenings extend until 9 PM',
        'Free parking available on-site',
        'The sculpture gardens are free to visit'
      ],
      mustSee: [
        { name: 'Cone Collection', artist: 'Henri Matisse, Pablo Picasso', location: 'Cone Wing', note: 'World\'s largest public Matisse collection' },
        { name: 'Blue Nude', artist: 'Henri Matisse', location: 'Cone Wing', note: 'Iconic paper cutout' },
        { name: 'Contemporary Art Collection', artist: 'Various', location: 'Contemporary galleries', note: 'Strong in recent acquisitions' },
        { name: 'Sculpture Gardens', artist: 'Various', location: 'Outdoor gardens', note: 'Free to visit anytime' }
      ]
    },
    faqs: [
      {
        question: 'Is the Baltimore Museum of Art free?',
        answer: 'Yes, general admission to the Baltimore Museum of Art is always free. Some special exhibitions may require a separate ticket with a fee. It is recommended to reserve a free general admission ticket online before your visit.'
      },
      {
        question: 'What is the Cone Collection?',
        answer: 'The Cone Collection comprises over 3,000 works assembled by Baltimore sisters Dr. Claribel Cone and Miss Etta Cone, including the world\'s largest public collection of Henri Matisse works. The collection also includes important pieces by Picasso, Cézanne, and other modern masters.'
      },
      {
        question: 'Is there free parking at the Baltimore Museum of Art?',
        answer: 'Yes, the museum offers free parking in its lot at 10 Art Museum Drive. The museum is located near Johns Hopkins University in north Baltimore.'
      }
    ]
  },
  {
    id: 'perez-art-museum-miami',
    slug: 'perez-art-museum-miami',
    name: 'Pérez Art Museum Miami',
    city: 'Miami',
    country: 'United States',
    address: '1103 Biscayne Blvd, Miami, FL 33132',
    latitude: 25.7858,
    longitude: -80.1863,
    websiteUrl: 'https://www.pamm.org',
    ticketUrl: 'https://www.pamm.org/en/visit/',
    ticketPriceRange: '$16-$18',
    description: 'Miami\'s flagship art museum focusing on 20th and 21st century international art, with a special emphasis on art from the Americas. The stunning waterfront building by Herzog & de Meuron opened in 2013 with hanging gardens and views of Biscayne Bay. Known for work reflecting Miami\'s diverse population.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '11:00 AM - 6:00 PM',
          tuesday: 'Closed',
          wednesday: 'Closed',
          thursday: '11:00 AM - 9:00 PM',
          friday: '11:00 AM - 6:00 PM',
          saturday: '11:00 AM - 6:00 PM',
          sunday: '11:00 AM - 6:00 PM'
        },
        exceptions: [
          'Closed Tuesdays and Wednesdays',
          'Last tickets sold 30 minutes before closing'
        ]
      },
      admission: {
        adult: 18.00,
        senior: 14.00,
        student: 14.00,
        child: 0,
        currency: 'USD',
        notes: 'Children 6 and under free. Second Saturday free. Thursday 5-10 PM free cultural events.'
      },
      tickets: {
        onlineUrl: 'https://www.pamm.org/en/visit/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Recommended, can sell out'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Monday', 'Friday'],
        worstDays: ['Second Saturday', 'Thursday evening'],
        bestTimes: ['Morning', 'Late afternoon'],
        worstTimes: ['Free admission times'],
        avgVisitDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: 'Museum Park Garage',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: true,
        audioGuideLanguages: ['English', 'Spanish'],
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Second Saturday of each month is free with art-making activities',
        'Thursday evenings 5-10 PM feature free cultural events',
        'The waterfront terrace has great views of Biscayne Bay',
        'Visit during Art Basel Miami Beach week for special programming',
        'Bank of America cardholders get free admission first weekend monthly',
        'Health care workers and first responders receive free admission'
      ],
      mustSee: [
        { name: 'Hanging Gardens', artist: 'Patrick Blanc', location: 'Exterior columns', note: 'Vertical garden installation' },
        { name: 'For Those In Peril on the Sea', artist: 'Hew Locke', location: 'Varies', note: 'Miami\'s maritime history' },
        { name: 'Latin American Art', artist: 'Various', location: 'Throughout', note: 'Strong Caribbean and Latin American focus' },
        { name: 'Architecture', artist: 'Herzog & de Meuron', location: 'Building', note: 'Award-winning waterfront design' }
      ]
    },
    faqs: [
      {
        question: 'When is PAMM free?',
        answer: 'PAMM offers free admission on the second Saturday of every month from 11 AM to 6 PM, including art-making activities. Thursday evenings from 5-10 PM feature free cultural programming. Healthcare workers, first responders, and military with ID receive free admission anytime.'
      },
      {
        question: 'Where is PAMM located?',
        answer: 'PAMM is located at 1103 Biscayne Boulevard in Museum Park, on the waterfront between the Arsht Center and Kaseya Center. The building offers stunning views of Biscayne Bay and the Miami skyline.'
      },
      {
        question: 'What kind of art does PAMM have?',
        answer: 'PAMM focuses on 20th and 21st century international art with particular strengths in work from the Caribbean, Latin America, and the Americas. The collection reflects Miami\'s diverse population and position as a cultural gateway.'
      }
    ]
  }
];

async function addMuseums() {
  console.log('Adding major US museums from missing cities...\n');

  for (const museum of museums) {
    try {
      const result = await prisma.museum.upsert({
        where: { slug: museum.slug },
        update: {
          name: museum.name,
          city: museum.city,
          country: museum.country,
          address: museum.address,
          latitude: museum.latitude,
          longitude: museum.longitude,
          websiteUrl: museum.websiteUrl,
          ticketUrl: museum.ticketUrl,
          ticketPriceRange: museum.ticketPriceRange,
          description: museum.description,
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        },
        create: {
          id: museum.id,
          slug: museum.slug,
          name: museum.name,
          city: museum.city,
          country: museum.country,
          address: museum.address,
          latitude: museum.latitude,
          longitude: museum.longitude,
          websiteUrl: museum.websiteUrl,
          ticketUrl: museum.ticketUrl,
          ticketPriceRange: museum.ticketPriceRange,
          description: museum.description,
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Added: ${result.name} (${result.city})`);
    } catch (error) {
      console.error(`✗ Failed: ${museum.name} - ${error.message}`);
    }
  }

  // Count totals
  const totalMuseums = await prisma.museum.count();
  const totalWithHours = await prisma.museum.count({
    where: { hoursOfOperation: { not: { equals: {} } } }
  });
  const usMuseums = await prisma.museum.count({
    where: { country: 'United States' }
  });

  console.log(`\n✓ Total museums in database: ${totalMuseums}`);
  console.log(`✓ US museums: ${usMuseums}`);
  console.log(`✓ Museums with visitor info: ${totalWithHours}`);

  await prisma.$disconnect();
}

addMuseums().catch(console.error);
