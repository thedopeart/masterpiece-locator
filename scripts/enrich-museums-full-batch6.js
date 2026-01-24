const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Final batch - last 2 museums needing full enrichment
const enrichedMuseums = [
  {
    slug: 'galleria-doria-pamphilj',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { open: '09:00', close: '19:00' },
          tuesday: { open: '09:00', close: '19:00' },
          wednesday: { open: '09:00', close: '19:00' },
          thursday: { open: '09:00', close: '19:00' },
          friday: { open: '09:00', close: '19:00' },
          saturday: { open: '09:00', close: '19:00' },
          sunday: { open: '09:00', close: '19:00' }
        },
        lastAdmission: '18:00',
        exceptions: [
          { date: 'January 1', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'Easter Sunday', status: 'closed' }
        ]
      },
      admission: {
        adult: 14,
        reduced: 10,
        under18: 'free',
        audioGuideIncluded: true,
        note: 'Audio guide included in ticket price'
      },
      tickets: {
        onlineUrl: 'https://www.doriapamphilj.it/roma/en/tickets/',
        onlineAvailable: true,
        onlineRecommended: true,
        advanceRequired: false,
        walkUpAvailable: true,
        refundPolicy: 'Non-refundable'
      },
      crowdData: {
        overall: 'Light to Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Thursday'],
        worstDays: ['Saturday', 'Sunday'],
        bestTimes: ['Opening at 9am', 'After 4pm'],
        worstTimes: ['11am-2pm'],
        bestMonths: ['November', 'January', 'February'],
        worstMonths: ['April', 'May', 'October'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: false,
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        wifi: false,
        parking: false,
        nearbyParking: 'Limited street parking, paid garages nearby'
      },
      accessibility: {
        wheelchairAccessible: 'Partial',
        wheelchairNote: 'Ground floor accessible, upper floors limited',
        audioGuide: true,
        audioGuideLanguages: ['Italian', 'English', 'French', 'Spanish', 'German'],
        audioGuideIncluded: true
      },
      tips: [
        'Audio guide is included in admission and highly recommended for context on this private collection.',
        'The gallery is still owned by the Doria Pamphilj family, making it one of the last great Roman family collections.',
        'Look for Velázquez\'s portrait of Pope Innocent X, considered one of the greatest portraits ever painted.',
        'The private apartments offer a glimpse into aristocratic Roman life with original furnishings.',
        'Less crowded than major Rome museums. A hidden gem near Piazza Venezia.',
        'Allow extra time for the ornate gallery rooms themselves, covered floor to ceiling with paintings.'
      ],
      mustSee: [
        { name: 'Portrait of Pope Innocent X', artist: 'Diego Velázquez', location: 'Cabinet', note: 'Called "too true" by the pope himself, Francis Bacon\'s obsession' },
        { name: 'Rest on the Flight into Egypt', artist: 'Caravaggio', location: 'Gallery', note: 'Early Caravaggio, unusual tender subject' },
        { name: 'Penitent Magdalene', artist: 'Caravaggio', location: 'Gallery', note: 'Rare quiet moment in Caravaggio\'s work' },
        { name: 'Salome with the Head of John the Baptist', artist: 'Titian', location: 'Gallery', note: 'Late Titian masterwork' },
        { name: 'Double Portrait', artist: 'Raphael', location: 'Gallery', note: 'Portrait of Andrea Navagero and Agostino Beazzano' },
        { name: 'Gallery of Mirrors', artist: 'Architecture', location: 'Central gallery', note: 'Baroque gallery room covered with paintings salon-style' }
      ]
    },
    faqs: [
      {
        question: 'Is the audio guide at Galleria Doria Pamphilj worth it?',
        answer: 'The audio guide is included with admission and narrated by a family member, Prince Jonathan Doria Pamphilj. It provides personal anecdotes about the collection and family history that you won\'t find elsewhere.'
      },
      {
        question: 'How does Galleria Doria Pamphilj compare to other Rome museums?',
        answer: 'It offers a more intimate experience than the Vatican or Borghese. As a private palace still owned by the family, it feels less like a museum and more like visiting aristocratic relatives. Crowds are much lighter.'
      },
      {
        question: 'What is the best time to visit Galleria Doria Pamphilj?',
        answer: 'Weekday mornings right at opening (9am) or late afternoon after 4pm offer the quietest experience. It rarely gets crowded even on weekends, but early visits let you enjoy the galleries in relative solitude.'
      }
    ]
  },
  {
    slug: 'alte-nationalgalerie',
    hoursOfOperation: {
      hours: {
        regular: {
          monday: { closed: true },
          tuesday: { open: '10:00', close: '18:00' },
          wednesday: { open: '10:00', close: '18:00' },
          thursday: { open: '10:00', close: '20:00' },
          friday: { open: '10:00', close: '18:00' },
          saturday: { open: '10:00', close: '18:00' },
          sunday: { open: '10:00', close: '18:00' }
        },
        lastAdmission: '30 minutes before closing',
        exceptions: [
          { date: 'December 24', status: 'closed' },
          { date: 'December 25', status: 'closed' },
          { date: 'December 31', status: 'closes early' }
        ]
      },
      admission: {
        adult: 12,
        reduced: 6,
        under18: 'free',
        museumPass: {
          name: 'Museum Pass Berlin',
          price: 36,
          validity: '3 days',
          includes: '30+ museums'
        },
        museumIslandPass: {
          name: 'Museum Island Day Pass',
          price: 22,
          validity: '1 day',
          includes: 'All 5 Museum Island museums'
        },
        freeDay: 'First Sunday of month (limited availability)',
        note: 'Part of Berlin Museum Island UNESCO World Heritage Site'
      },
      tickets: {
        onlineUrl: 'https://www.smb.museum/en/tickets/',
        onlineRecommended: true,
        timeSlotRequired: true,
        advanceRecommended: true,
        advanceWindow: '14 days',
        walkUpAvailable: true,
        walkUpNote: 'Time slots may sell out on weekends',
        refundPolicy: 'Exchangeable for different time slot'
      },
      crowdData: {
        overall: 'Moderate',
        bestDays: ['Tuesday', 'Wednesday', 'Friday'],
        worstDays: ['Saturday', 'Sunday', 'Thursday evening'],
        bestTimes: ['Opening at 10am', 'Last 2 hours'],
        worstTimes: ['12pm-3pm weekends'],
        bestMonths: ['January', 'February', 'November'],
        worstMonths: ['July', 'August', 'December'],
        avgVisitDuration: '1.5-2 hours',
        recommendedDuration: '2 hours'
      },
      amenities: {
        cafe: true,
        cafeName: 'Café in Alte Nationalgalerie',
        restaurant: false,
        giftShop: true,
        coatCheck: true,
        wifi: true,
        parking: false,
        nearbyParking: 'Parking garages near Alexanderplatz'
      },
      accessibility: {
        wheelchairAccessible: true,
        elevator: true,
        wheelchairLoan: true,
        audioGuide: true,
        audioGuideLanguages: ['German', 'English', 'French', 'Italian', 'Spanish', 'Japanese'],
        tactileTours: true,
        signLanguageTours: 'Available on request'
      },
      tips: [
        'The Thursday late opening until 8pm offers a quieter experience after day-trippers leave.',
        'Consider the Museum Island pass if visiting multiple museums (Pergamon, Neues Museum, Bode, Altes Museum).',
        'The building itself is a neoclassical temple worth appreciating from the exterior.',
        'Book time slots online in advance, especially for weekend visits.',
        'Start on the top floor with the Impressionists and work your way down chronologically.',
        'The Caspar David Friedrich collection is Germany\'s most important, don\'t miss it.'
      ],
      mustSee: [
        { name: 'Monk by the Sea', artist: 'Caspar David Friedrich', location: 'Top floor', note: 'Revolutionary minimalist landscape, key Romantic work' },
        { name: 'The Abbey in the Oakwood', artist: 'Caspar David Friedrich', location: 'Top floor', note: 'Haunting Gothic ruin in winter' },
        { name: 'The Island of the Dead', artist: 'Arnold Böcklin', location: 'Second floor', note: 'Third version of five, most famous Symbolist painting' },
        { name: 'In the Conservatory', artist: 'Édouard Manet', location: 'Impressionist gallery', note: 'Key work showing Manet\'s modern approach' },
        { name: 'Garden of Saint-Paul Hospital', artist: 'Vincent van Gogh', location: 'Impressionist gallery', note: 'Painted during Saint-Rémy asylum stay' },
        { name: 'Summer Evening', artist: 'Peder Severin Krøyer', location: 'Second floor', note: 'Danish Skagen painter\'s masterwork' }
      ]
    },
    faqs: [
      {
        question: 'What is the difference between Alte Nationalgalerie and Gemäldegalerie in Berlin?',
        answer: 'Alte Nationalgalerie focuses on 19th-century art including German Romanticism, French Impressionism, and early modernism. Gemäldegalerie covers Old Masters from 13th-18th centuries. Both are essential for art lovers but serve different periods.'
      },
      {
        question: 'Is the Museum Island pass worth it?',
        answer: 'If you plan to visit 2 or more Museum Island museums, the day pass (€22) saves money over individual tickets. The Alte Nationalgalerie alone is €12. The Pergamon and Neues Museum are equally impressive.'
      },
      {
        question: 'Why is Caspar David Friedrich important?',
        answer: 'Friedrich pioneered German Romantic painting, using landscapes to explore spiritual and emotional states. His "Monk by the Sea" was revolutionary in its stark minimalism. The Alte Nationalgalerie has the world\'s most significant collection of his work.'
      }
    ]
  }
];

async function enrichMuseums() {
  console.log('Enriching final 2 museums with full Louvre-style data...\n');

  for (const museum of enrichedMuseums) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.hoursOfOperation,
          faqs: museum.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Enriched: ${result.name}`);
    } catch (error) {
      console.error(`✗ Failed to enrich ${museum.slug}:`, error.message);
    }
  }

  // Verify completion
  const museumsWithHours = await prisma.museum.count({
    where: {
      hoursOfOperation: { not: null }
    }
  });

  console.log(`\n✓ Total museums with hours data: ${museumsWithHours}`);

  // Check if any still need enrichment
  const allWithHours = await prisma.museum.findMany({
    where: { hoursOfOperation: { not: null } },
    select: { slug: true, name: true, hoursOfOperation: true }
  });

  const stillNeeding = allWithHours.filter(m => {
    const h = m.hoursOfOperation;
    return !h?.mustSee || h.mustSee.length === 0;
  });

  if (stillNeeding.length === 0) {
    console.log('✓ All museums with hours data are now fully enriched!');
  } else {
    console.log(`\nStill needing enrichment: ${stillNeeding.length}`);
    stillNeeding.forEach(m => console.log(`  - ${m.name} (${m.slug})`));
  }

  await prisma.$disconnect();
}

enrichMuseums().catch(console.error);
