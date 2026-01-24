const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    id: 'portland-art-museum',
    slug: 'portland-art-museum',
    name: 'Portland Art Museum',
    city: 'Portland',
    country: 'United States',
    address: '1219 SW Park Ave, Portland, OR 97205',
    latitude: 45.5163,
    longitude: -122.6834,
    websiteUrl: 'https://portlandartmuseum.org',
    ticketUrl: 'https://portlandartmuseum.org/admission/',
    ticketPriceRange: '$22.50-$27.50',
    description: 'The oldest art museum in the Pacific Northwest, founded in 1892. The collection spans 42,000 objects from ancient times to today, with strengths in Native American art, Asian art, and Northwest regional art. The 2025 Rothko Pavilion expansion added 100,000 square feet of gallery space.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: '10:00 AM - 5:00 PM',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 7:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'Extended hours on First Thursday of each month (5-8 PM free)',
          'Closed Thanksgiving, Christmas, New Year\'s Day'
        ]
      },
      admission: {
        adult: 27.50,
        senior: 24.50,
        student: 22.50,
        child: 0,
        currency: 'USD',
        notes: 'Children 17 and under free'
      },
      tickets: {
        onlineUrl: 'https://portlandartmuseum.org/admission/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Available'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday'],
        worstDays: ['Saturday', 'First Thursday'],
        bestTimes: ['Morning opening', 'Weekday afternoons'],
        worstTimes: ['Weekend afternoons', 'First Thursday evenings'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'Nearby parking garages',
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
        'Visit on First Thursday for free evening admission from 5-8 PM',
        'The new Rothko Pavilion connects the two museum buildings',
        'Don\'t miss Monet\'s Waterlilies (1914), the museum\'s most popular painting',
        'Oregon Trail Card (EBT) holders get free admission for up to 4 guests',
        'The Native American art collection is one of the finest in the country',
        'Allow extra time for the 2025 expansion galleries'
      ],
      mustSee: [
        { name: 'Waterlilies', artist: 'Claude Monet', location: 'European galleries', note: 'Most famous painting in the collection, purchased 1959' },
        { name: 'The Ox-Cart', artist: 'Vincent van Gogh', location: 'European galleries', note: 'Early Van Gogh from 1884' },
        { name: 'Bodhisattva of Compassion', artist: 'Unknown', location: 'Asian Art galleries', note: '500-year-old Chinese wooden sculpture' },
        { name: 'Native American Art Collection', artist: 'Various', location: 'Native American galleries', note: 'Over 3,500 objects from 200 Indigenous groups' }
      ]
    },
    faqs: [
      {
        question: 'When is Portland Art Museum free?',
        answer: 'The Portland Art Museum offers free admission on the First Thursday of every month from 5-8 PM. Oregon Trail Card (EBT) holders receive free admission anytime for themselves and up to three guests. Children 17 and under are always free.'
      },
      {
        question: 'What is the most famous painting at Portland Art Museum?',
        answer: 'Claude Monet\'s Waterlilies (1914) is the most celebrated work in the collection. The museum also owns Van Gogh\'s The Ox-Cart and displays works by Portland native Mark Rothko through a long-term agreement extending to 2045.'
      },
      {
        question: 'What is the Rothko Pavilion?',
        answer: 'The Rothko Pavilion opened in 2025 as part of a major expansion, adding 100,000 square feet of gallery space. Named after abstract expressionist Mark Rothko who grew up in Portland, it connects the two museum buildings.'
      }
    ]
  },
  {
    id: 'seattle-art-museum',
    slug: 'seattle-art-museum',
    name: 'Seattle Art Museum',
    city: 'Seattle',
    country: 'United States',
    address: '1300 First Avenue, Seattle, WA 98101',
    latitude: 47.6075,
    longitude: -122.3382,
    websiteUrl: 'https://www.seattleartmuseum.org',
    ticketUrl: 'https://secure.seattleartmuseum.org/',
    ticketPriceRange: '$27-$30',
    description: 'The largest art museum in the Pacific Northwest with over 25,000 works spanning ancient to contemporary art. One block from Pike Place Market, the downtown location features global collections including renowned African art, the Shirley Family Calder Collection, and rotating exhibitions across three floors.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: 'Closed',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 8:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'First Thursday: 10 AM - 8 PM, FREE admission',
          'First Friday: $5 for seniors',
          'Closed Thanksgiving, Christmas'
        ]
      },
      admission: {
        adult: 30.00,
        senior: 27.00,
        student: 20.00,
        child: 0,
        currency: 'USD',
        notes: 'Children under 12 free. Save $3 buying online in advance.'
      },
      tickets: {
        onlineUrl: 'https://secure.seattleartmuseum.org/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Save $3 when purchased 1+ days in advance'
      },
      crowdData: {
        overall: 'Moderate to busy',
        bestDays: ['Wednesday', 'Thursday morning'],
        worstDays: ['Saturday', 'First Thursday'],
        bestTimes: ['Weekday mornings', 'Thursday after 5 PM'],
        worstTimes: ['Weekend afternoons', 'First Thursday all day'],
        avgVisitDuration: '2-3 hours'
      },
      amenities: {
        cafe: true,
        restaurant: true,
        parking: '1301 Garage (weekend $10 all day)',
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
        'First Thursday admission is completely free',
        'Buy tickets online at least one day ahead to save $3',
        'Look for the 48-foot Hammering Man sculpture outside the entrance',
        'The African art collection rivals major national museums',
        'Free guided tours run Saturday and Sunday at 11:30 AM',
        'Your ticket also covers special exhibitions'
      ],
      mustSee: [
        { name: 'Shirley Family Calder Collection', artist: 'Alexander Calder', location: 'Multiple floors', note: 'One of the finest Calder collections on the West Coast' },
        { name: 'African Art Collection', artist: 'Various', location: 'Dedicated galleries', note: 'Masks, figures, textiles from across the continent' },
        { name: 'Hammering Man', artist: 'Jonathan Borofsky', location: 'Exterior entrance', note: '48-foot kinetic sculpture, arm moves continuously' },
        { name: 'Chinese Paintings Collection', artist: 'Various', location: 'Asian galleries', note: '152 works with scholarly documentation' }
      ]
    },
    faqs: [
      {
        question: 'When is Seattle Art Museum free?',
        answer: 'SAM offers free admission on the First Thursday of every month. First Fridays offer $5 admission for seniors. EBT/SNAP cardholders receive reduced admission through the Museums for All program.'
      },
      {
        question: 'What are the three Seattle Art Museum locations?',
        answer: 'SAM operates three locations: the main downtown museum on First Avenue, the Seattle Asian Art Museum in Volunteer Park, and the free Olympic Sculpture Park on the waterfront. One membership covers all three.'
      },
      {
        question: 'What is the Hammering Man?',
        answer: 'The Hammering Man is a 48-foot tall kinetic sculpture by Jonathan Borofsky located at SAM\'s entrance. The motorized arm moves in a hammering motion continuously, representing the working people of the world.'
      }
    ]
  },
  {
    id: 'seattle-asian-art-museum',
    slug: 'seattle-asian-art-museum',
    name: 'Seattle Asian Art Museum',
    city: 'Seattle',
    country: 'United States',
    address: '1400 E Prospect St, Volunteer Park, Seattle, WA 98112',
    latitude: 47.6298,
    longitude: -122.3148,
    websiteUrl: 'https://www.seattleartmuseum.org/visit/seattle-asian-art-museum',
    ticketUrl: 'https://secure.seattleartmuseum.org/',
    ticketPriceRange: 'Suggested $17.99 (pay what you wish)',
    description: 'Housed in a 1933 Art Deco gem in Volunteer Park, this SAM location focuses exclusively on Asian art spanning centuries and cultures from China, Japan, Korea, India, Southeast Asia, the Himalayas, the Philippines, and Vietnam. The collection draws scholars from around the world.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: 'Closed',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 5:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'First Thursday: FREE admission',
          'Last Friday of each month: FREE admission',
          'Closed Thanksgiving, Christmas'
        ]
      },
      admission: {
        adult: 17.99,
        senior: 15.99,
        student: 12.99,
        child: 0,
        currency: 'USD',
        notes: 'Suggested donation - pay what you wish available onsite only'
      },
      tickets: {
        onlineUrl: 'https://secure.seattleartmuseum.org/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Available'
      },
      crowdData: {
        overall: 'Low to moderate',
        bestDays: ['Wednesday', 'Thursday', 'Friday'],
        worstDays: ['First Thursday', 'Last Friday'],
        bestTimes: ['Morning', 'Early afternoon'],
        worstTimes: ['Free admission days'],
        avgVisitDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        parking: 'Free parking in Volunteer Park',
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
        'Pay what you wish pricing is only available at the door, not online',
        'Two free admission days each month: First Thursday and last Friday',
        'The Art Deco building itself is worth the visit',
        'Free parking in Volunteer Park makes this an affordable outing',
        'Combine with a walk through Volunteer Park and the Conservatory',
        'Library museum passes provide free admission'
      ],
      mustSee: [
        { name: 'Japanese Art Collection', artist: 'Various', location: 'Japanese galleries', note: 'Screens, ceramics, Buddhist sculpture' },
        { name: 'Chinese Art Collection', artist: 'Various', location: 'Chinese galleries', note: 'Spanning thousands of years' },
        { name: 'Korean Art Collection', artist: 'Various', location: 'Korean galleries', note: 'Ceramics, paintings, Buddhist art' },
        { name: 'Art Deco Architecture', artist: 'Carl F. Gould', location: 'Building exterior/interior', note: '1933 building is a Seattle landmark' }
      ]
    },
    faqs: [
      {
        question: 'Is Seattle Asian Art Museum pay what you wish?',
        answer: 'Yes, admission is pay what you wish, but only for tickets purchased at the door. Online tickets are sold at the suggested price of $17.99 for adults. The museum also offers completely free admission on First Thursdays and the last Friday of each month.'
      },
      {
        question: 'Where is the Seattle Asian Art Museum located?',
        answer: 'The museum is located in Volunteer Park on Capitol Hill, housed in a beautiful 1933 Art Deco building. Free parking is available in the park. It\'s separate from the main Seattle Art Museum downtown.'
      },
      {
        question: 'Is parking free at the Seattle Asian Art Museum?',
        answer: 'Yes, parking is free in Volunteer Park. The park also features the Volunteer Park Conservatory and water tower observation deck, making it easy to combine multiple attractions in one visit.'
      }
    ]
  },
  {
    id: 'olympic-sculpture-park',
    slug: 'olympic-sculpture-park',
    name: 'Olympic Sculpture Park',
    city: 'Seattle',
    country: 'United States',
    address: '2901 Western Ave, Seattle, WA 98121',
    latitude: 47.6165,
    longitude: -122.3553,
    websiteUrl: 'https://www.seattleartmuseum.org/visit/olympic-sculpture-park',
    ticketUrl: null,
    ticketPriceRange: 'Free',
    description: 'A free, 9-acre outdoor sculpture museum operated by the Seattle Art Museum. Features monumental contemporary sculptures, a beach on Puget Sound, and views of the Olympic Mountains and Space Needle. Open 365 days a year from 30 minutes before sunrise to 30 minutes after sunset.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: '30 min before sunrise - 30 min after sunset',
          tuesday: '30 min before sunrise - 30 min after sunset',
          wednesday: '30 min before sunrise - 30 min after sunset',
          thursday: '30 min before sunrise - 30 min after sunset',
          friday: '30 min before sunrise - 30 min after sunset',
          saturday: '30 min before sunrise - 30 min after sunset',
          sunday: '30 min before sunrise - 30 min after sunset'
        },
        seasonal: {
          pavilion: 'PACCAR Pavilion open daily 9 AM - 4 PM'
        },
        exceptions: [
          'Open 365 days a year including holidays'
        ]
      },
      admission: {
        adult: 0,
        senior: 0,
        student: 0,
        child: 0,
        currency: 'USD',
        notes: 'Always free for everyone'
      },
      tickets: {
        onlineUrl: null,
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'No tickets needed'
      },
      crowdData: {
        overall: 'Low to moderate',
        bestDays: ['Weekdays'],
        worstDays: ['Sunday afternoons', 'Sunny summer weekends'],
        bestTimes: ['Early morning', 'Sunset'],
        worstTimes: ['Midday on sunny weekends'],
        avgVisitDuration: '1-1.5 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'Street parking and nearby lots',
        giftShop: true,
        wifi: false,
        beach: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: false,
        guidedTours: false,
        elevators: false,
        notes: 'Paved paths throughout, some steep grades'
      },
      tips: [
        'Visit at sunset for spectacular views of Puget Sound and the Olympics',
        'The park is free 365 days a year, no tickets needed',
        'Don\'t touch or climb on the sculptures',
        'Walk bikes, scooters, and skateboards through the park',
        'The beach area offers a unique waterfront experience',
        'Combine with a visit to Pike Place Market, just a short walk away'
      ],
      mustSee: [
        { name: 'Eagle', artist: 'Alexander Calder', location: 'Park grounds', note: 'Iconic red stabile sculpture' },
        { name: 'Wake', artist: 'Richard Serra', location: 'Central lawn', note: 'Massive weathered steel curves' },
        { name: 'Echo', artist: 'Jaume Plensa', location: 'Waterfront', note: 'White mesh head sculpture' },
        { name: 'Typewriter Eraser, Scale X', artist: 'Claes Oldenburg & Coosje van Bruggen', location: 'Park grounds', note: 'Pop art giant typewriter eraser' }
      ]
    },
    faqs: [
      {
        question: 'Is Olympic Sculpture Park free?',
        answer: 'Yes, Olympic Sculpture Park is completely free and open to everyone, 365 days a year. It operates from 30 minutes before sunrise to 30 minutes after sunset. No tickets or reservations are needed.'
      },
      {
        question: 'What can you see at Olympic Sculpture Park?',
        answer: 'The 9-acre park features large-scale contemporary sculptures by artists including Alexander Calder, Richard Serra, and Claes Oldenburg. You\'ll also find views of Puget Sound, the Olympic Mountains, and the Seattle skyline, plus a public beach.'
      },
      {
        question: 'Can you touch the sculptures at Olympic Sculpture Park?',
        answer: 'No, visitors should not touch or climb on the sculptures. Bicycles, scooters, and skateboards must be walked through the park. Pets are welcome but must be kept on a six-foot leash.'
      }
    ]
  },
  {
    id: 'tacoma-art-museum',
    slug: 'tacoma-art-museum',
    name: 'Tacoma Art Museum',
    city: 'Tacoma',
    country: 'United States',
    address: '1701 Pacific Ave, Tacoma, WA 98402',
    latitude: 47.2461,
    longitude: -122.4395,
    websiteUrl: 'https://www.tacomaartmuseum.org',
    ticketUrl: 'https://tacomaartmuseum.my.salesforce-sites.com/ticket/',
    ticketPriceRange: '$10-$18',
    description: 'Home to the largest museum collection of Dale Chihuly glass art in the world and one of the finest collections of western American art. The museum holds over 5,400 works with a strong focus on Northwest regional art, Japanese woodblock prints, and studio jewelry.',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: 'Closed',
          tuesday: 'Closed',
          wednesday: '10:00 AM - 5:00 PM',
          thursday: '10:00 AM - 8:00 PM',
          friday: '10:00 AM - 5:00 PM',
          saturday: '10:00 AM - 5:00 PM',
          sunday: '10:00 AM - 5:00 PM'
        },
        exceptions: [
          'Thursday 5-8 PM: FREE admission',
          'Closed major holidays'
        ]
      },
      admission: {
        adult: 18.00,
        senior: 15.00,
        military: 15.00,
        youth: 10.00,
        child: 0,
        currency: 'USD',
        notes: 'Youth ages 6-18. Children under 6 free. Thursday evenings 5-8 PM free.'
      },
      tickets: {
        onlineUrl: 'https://tacomaartmuseum.my.salesforce-sites.com/ticket/',
        onlineRequired: false,
        timedEntry: false,
        advanceWindow: 'Available'
      },
      crowdData: {
        overall: 'Low to moderate',
        bestDays: ['Wednesday', 'Friday'],
        worstDays: ['Thursday evening', 'Saturday'],
        bestTimes: ['Weekday mornings'],
        worstTimes: ['Thursday 5-8 PM (free admission)'],
        avgVisitDuration: '1.5-2 hours'
      },
      amenities: {
        cafe: true,
        restaurant: false,
        parking: 'Free parking garage',
        giftShop: true,
        wifi: true
      },
      accessibility: {
        wheelchair: true,
        audioGuide: false,
        guidedTours: true,
        elevators: true
      },
      tips: [
        'Thursday evenings 5-8 PM are completely free',
        'The Chihuly collection is the largest in any museum worldwide',
        'Free parking in the museum garage',
        'Combine with nearby Museum of Glass and Washington State History Museum',
        'The Haub Collection of western American art spans 200 years',
        'Named one of USA Today\'s Top 10 art museums in smaller cities'
      ],
      mustSee: [
        { name: 'Dale Chihuly Collection', artist: 'Dale Chihuly', location: 'Dedicated galleries', note: 'Largest museum collection of Chihuly glass in the world' },
        { name: 'Haub Family Collection', artist: 'Various', location: 'Western American galleries', note: '300 works of western American art spanning 200 years' },
        { name: 'Japanese Woodblock Prints', artist: 'Various', location: 'Print galleries', note: 'One of the finest collections on the West Coast' },
        { name: 'Studio Art Jewelry Collection', artist: 'Various', location: 'Decorative arts', note: 'Largest collection of Northwest studio jewelry' }
      ]
    },
    faqs: [
      {
        question: 'When is Tacoma Art Museum free?',
        answer: 'Tacoma Art Museum offers free admission every Thursday from 5-8 PM. EBT/SNAP cardholders also receive reduced admission through the Museums for All program. Disability caregivers always receive free admission.'
      },
      {
        question: 'What is Tacoma Art Museum known for?',
        answer: 'The museum is best known for having the world\'s largest museum collection of Dale Chihuly glass art. Chihuly is a Tacoma native. The museum also houses the Haub Family Collection, one of the premier western American art collections in the country.'
      },
      {
        question: 'Is there parking at Tacoma Art Museum?',
        answer: 'Yes, the museum offers free parking in its dedicated parking garage. The museum is also located near the Museum of Glass and Washington State History Museum, making it easy to visit multiple attractions.'
      }
    ]
  }
];

async function addMuseums() {
  console.log('Adding Pacific Northwest museums...\n');

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

  console.log(`\n✓ Total museums in database: ${totalMuseums}`);
  console.log(`✓ Museums with visitor info: ${totalWithHours}`);

  await prisma.$disconnect();
}

addMuseums().catch(console.error);
