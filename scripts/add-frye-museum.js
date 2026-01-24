const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const fryeMuseum = {
  id: 'frye-art-museum',
  slug: 'frye-art-museum',
  name: 'Frye Art Museum',
  city: 'Seattle',
  country: 'United States',
  address: '704 Terry Ave, Seattle, WA 98104',
  latitude: 47.6096,
  longitude: -122.3246,
  websiteUrl: 'https://fryemuseum.org',
  ticketUrl: null,
  ticketPriceRange: 'Free',
  description: 'Seattle\'s original free art museum, founded in 1952 to house the collection of Charles and Emma Frye. The founding collection of 232 oil paintings focuses on late 19th and early 20th century European and American art, with nearly half featuring German artists from the Munich school. Per Charles Frye\'s will, admission has always been free.',
  hoursOfOperation: {
    hours: {
      regular: {
        monday: 'Closed',
        tuesday: 'Closed',
        wednesday: '11:00 AM - 5:00 PM',
        thursday: '11:00 AM - 8:00 PM',
        friday: '11:00 AM - 5:00 PM',
        saturday: '11:00 AM - 5:00 PM',
        sunday: '11:00 AM - 5:00 PM'
      },
      exceptions: [
        'Christmas Eve & New Year\'s Eve: 11 AM - 3 PM',
        'Closed Christmas Day, New Year\'s Day, Independence Day, Thanksgiving'
      ]
    },
    admission: {
      adult: 0,
      senior: 0,
      student: 0,
      child: 0,
      currency: 'USD',
      notes: 'Always free. Charles Frye\'s will mandated free admission in perpetuity.'
    },
    tickets: {
      onlineUrl: null,
      onlineRequired: false,
      timedEntry: false,
      advanceWindow: 'No tickets needed'
    },
    crowdData: {
      overall: 'Low',
      bestDays: ['Wednesday', 'Friday'],
      worstDays: ['Saturday'],
      bestTimes: ['Morning', 'Early afternoon'],
      worstTimes: ['Weekend afternoons'],
      avgVisitDuration: '1-1.5 hours'
    },
    amenities: {
      cafe: true,
      restaurant: false,
      parking: 'Street parking and nearby lots',
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
      'Admission is always free, no tickets needed',
      'The building was redesigned by Olson Kundig Architects',
      'Thursday hours extend to 8 PM for after-work visits',
      'The founding collection focuses on German and Munich School paintings',
      'Located in the First Hill neighborhood, walkable from downtown',
      'The Fryes discovered their love of art at the 1893 Chicago World\'s Fair'
    ],
    mustSee: [
      { name: 'Founding Collection', artist: 'Various German and European artists', location: 'Main galleries', note: '232 paintings collected by Charles and Emma Frye' },
      { name: 'Munich School Works', artist: 'Munich Artists Association', location: 'European galleries', note: 'Nearly half the collection features German artists' },
      { name: 'Rotating Contemporary Exhibitions', artist: 'Various', location: 'Exhibition galleries', note: 'Regular exhibitions by contemporary artists' }
    ]
  },
  faqs: [
    {
      question: 'Why is the Frye Art Museum always free?',
      answer: 'Charles Frye specified in his 1940 will that the museum bearing his and his wife Emma\'s name must always offer free admission. The Fryes, who made their fortune in Seattle\'s meat-packing industry, had no children and left their estate to create a free public art museum.'
    },
    {
      question: 'What kind of art does the Frye Art Museum have?',
      answer: 'The founding collection of 232 paintings focuses on late 19th and early 20th century European and American art. Nearly half features German artists, particularly from the Munich school. The museum also presents rotating contemporary exhibitions.'
    },
    {
      question: 'When did the Frye Art Museum open?',
      answer: 'The Frye Art Museum opened on February 8, 1952, twelve years after Charles Frye\'s death. It was Seattle\'s first free art museum. The collection survived a dramatic 1943 fire at a meat plant where it was stored after a B-29 bomber crashed nearby.'
    }
  ]
};

async function addFrye() {
  console.log('Adding Frye Art Museum...\n');

  const result = await prisma.museum.upsert({
    where: { slug: fryeMuseum.slug },
    update: {
      name: fryeMuseum.name,
      city: fryeMuseum.city,
      country: fryeMuseum.country,
      address: fryeMuseum.address,
      latitude: fryeMuseum.latitude,
      longitude: fryeMuseum.longitude,
      websiteUrl: fryeMuseum.websiteUrl,
      ticketUrl: fryeMuseum.ticketUrl,
      ticketPriceRange: fryeMuseum.ticketPriceRange,
      description: fryeMuseum.description,
      hoursOfOperation: fryeMuseum.hoursOfOperation,
      faqs: fryeMuseum.faqs,
      updatedAt: new Date()
    },
    create: {
      id: fryeMuseum.id,
      slug: fryeMuseum.slug,
      name: fryeMuseum.name,
      city: fryeMuseum.city,
      country: fryeMuseum.country,
      address: fryeMuseum.address,
      latitude: fryeMuseum.latitude,
      longitude: fryeMuseum.longitude,
      websiteUrl: fryeMuseum.websiteUrl,
      ticketUrl: fryeMuseum.ticketUrl,
      ticketPriceRange: fryeMuseum.ticketPriceRange,
      description: fryeMuseum.description,
      hoursOfOperation: fryeMuseum.hoursOfOperation,
      faqs: fryeMuseum.faqs,
      updatedAt: new Date()
    }
  });

  console.log(`✓ Added: ${result.name}`);

  const seattleCount = await prisma.museum.count({
    where: { city: 'Seattle', country: 'United States' }
  });
  console.log(`\n✓ Seattle now has ${seattleCount} museums`);

  await prisma.$disconnect();
}

addFrye().catch(console.error);
