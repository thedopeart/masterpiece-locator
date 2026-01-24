const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const museums = [
  {
    slug: 'hermitage',
    data: {
      hoursOfOperation: {
        hours: {
          regular: {
            sunday: { open: "10:30", close: "18:00" },
            monday: { open: null, close: null, closed: true },
            tuesday: { open: "10:30", close: "18:00" },
            wednesday: { open: "10:30", close: "21:00" },
            thursday: { open: "10:30", close: "18:00" },
            friday: { open: "10:30", close: "21:00" },
            saturday: { open: "10:30", close: "18:00" }
          },
          exceptions: [
            { date: "2026-01-01", closed: true, reason: "New Year's Day" },
            { date: "2026-05-09", closed: true, reason: "Victory Day" }
          ],
          notes: "Last entry at 16:00. Extended hours until 9pm on Wednesday and Friday. Free admission on the third Thursday of every month.",
          lastUpdated: "2026-01-23"
        },
        admission: {
          adult: 800,
          senior: 800,
          student: 0,
          child: 0,
          childMaxAge: 18,
          currency: "RUB",
          notes: "Free for students, children under 18, and all visitors on third Thursday of each month. Russian/Belarusian citizens pay 400 RUB.",
          freeDay: "Third Thursday of month",
          memberFree: true
        },
        crowdData: {
          overall: "Very Popular",
          bestDays: ["tuesday", "thursday"],
          worstDays: ["saturday", "sunday"],
          bestTimes: ["10:30-12:00", "16:00-18:00"],
          worstTimes: ["12:00-15:00"],
          avgVisitDuration: "3-4 hours",
          recommendedDuration: "Half day minimum, full day to explore thoroughly"
        },
        tips: [
          "Book tickets online to avoid 2-hour queues at the entrance",
          "Enter within 30 minutes of your session start time",
          "Large bags and luggage are not allowed - use the cloakroom",
          "The museum is massive - pick a few collections to focus on",
          "Wednesday and Friday evenings are less crowded"
        ],
        tickets: {
          onlineUrl: "https://www.hermitagemuseum.org/wps/portal/hermitage/tickets",
          advanceRecommended: true,
          sameDayAvailable: true
        }
      },
      websiteUrl: "https://www.hermitagemuseum.org",
      faqs: [
        {
          question: "What are the Hermitage Museum hours?",
          answer: "The State Hermitage Museum is open <strong>Tuesday through Sunday from 10:30am to 6pm</strong>. Extended hours until <strong>9pm on Wednesday and Friday</strong>. The museum is <strong>closed every Monday</strong>, January 1, and May 9 (Victory Day). Last entry is at 4pm."
        },
        {
          question: "How much does the Hermitage Museum cost?",
          answer: "General admission is <strong>800 rubles</strong> (approximately $8-9 USD) for the main museum complex. Russian and Belarusian citizens pay 400 rubles. <strong>Free admission</strong> for students, children under 18, and all visitors on the third Thursday of every month."
        },
        {
          question: "What is the best time to visit the Hermitage?",
          answer: "The best times are <strong>Tuesday and Thursday mornings</strong> right at opening (10:30am), or during <strong>Wednesday and Friday evening hours</strong> when crowds thin significantly. Avoid weekends and the midday period (12pm-3pm) when tour groups fill the galleries."
        },
        {
          question: "How long should I spend at the Hermitage?",
          answer: "Plan for at least <strong>3-4 hours</strong> to see major highlights. The Hermitage is one of the world's largest museums with over 3 million items, so many visitors return multiple times. A full day allows thorough exploration of several departments."
        }
      ]
    }
  },
  {
    slug: 'museo-del-prado-madrid-spain',
    data: {
      hoursOfOperation: {
        hours: {
          regular: {
            sunday: { open: "10:00", close: "19:00" },
            monday: { open: "10:00", close: "20:00" },
            tuesday: { open: "10:00", close: "20:00" },
            wednesday: { open: "10:00", close: "20:00" },
            thursday: { open: "10:00", close: "20:00" },
            friday: { open: "10:00", close: "20:00" },
            saturday: { open: "10:00", close: "20:00" }
          },
          exceptions: [
            { date: "2026-01-01", closed: true, reason: "New Year's Day" },
            { date: "2026-01-06", earlyClose: "14:00", reason: "Epiphany" },
            { date: "2026-05-01", closed: true, reason: "Labour Day" },
            { date: "2026-12-24", earlyClose: "14:00", reason: "Christmas Eve" },
            { date: "2026-12-25", closed: true, reason: "Christmas Day" },
            { date: "2026-12-31", earlyClose: "14:00", reason: "New Year's Eve" }
          ],
          notes: "Last admission 30 minutes before closing. Galleries clear 10 minutes before close. Free admission Mon-Sat 6-8pm and Sun/holidays 5-7pm.",
          lastUpdated: "2026-01-23"
        },
        admission: {
          adult: 15,
          senior: 15,
          student: 15,
          child: 0,
          childMaxAge: 18,
          currency: "EUR",
          notes: "Free for under 18s and students 18-25. Free admission Mon-Sat 6-8pm and Sun/holidays 5-7pm. Paseo del Arte card (€32.80) includes Prado, Reina Sofía, and Thyssen.",
          freeDay: "Daily during last 2 hours",
          memberFree: true
        },
        crowdData: {
          overall: "Very Popular",
          bestDays: ["tuesday", "wednesday", "thursday"],
          worstDays: ["saturday", "sunday"],
          bestTimes: ["10:00-11:00", "17:00-18:00"],
          worstTimes: ["11:00-15:00"],
          avgVisitDuration: "2-3 hours",
          recommendedDuration: "3-4 hours for thorough visit"
        },
        tips: [
          "Book timed tickets online in advance - required for entry",
          "Free evening hours (last 2 hours) have long queues - no skip-the-line available",
          "Start with Velázquez's Las Meninas, the museum's most famous work",
          "The Paseo del Arte card covers Prado, Thyssen, and Reina Sofía",
          "Audio guide costs €5 extra and is highly recommended",
          "Nearest metro is Banco de España (Line 2), 10-minute walk"
        ],
        tickets: {
          onlineUrl: "https://www.museodelprado.es/en/visit/tickets",
          advanceRequired: true,
          sameDayAvailable: true
        }
      },
      websiteUrl: "https://www.museodelprado.es",
      ticketUrl: "https://www.museodelprado.es/en/visit/tickets",
      faqs: [
        {
          question: "What are the Prado Museum hours?",
          answer: "The Museo del Prado is open <strong>Monday through Saturday from 10am to 8pm</strong>, and <strong>Sundays and public holidays from 10am to 7pm</strong>. The museum is closed January 1, May 1, and December 25. Early closure at 2pm on January 6, December 24, and December 31."
        },
        {
          question: "How much do Prado tickets cost?",
          answer: "General admission is <strong>€15</strong>. Free for visitors under 18 and EU students 18-25. <strong>Free admission</strong> during the last two hours daily: Monday-Saturday 6-8pm, Sundays and holidays 5-7pm. Audio guides cost €5 extra."
        },
        {
          question: "What is the best time to visit the Prado?",
          answer: "The best times are <strong>weekday mornings right at opening (10am)</strong> or late afternoon before closing. Avoid <strong>Saturday and Sunday</strong> when crowds are heaviest. The 11am-3pm period is typically the busiest."
        },
        {
          question: "How long should I spend at the Prado?",
          answer: "Plan for <strong>2-3 hours</strong> to see highlights like <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez's</strong></a> Las Meninas, <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya's</strong></a> Black Paintings, and <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> Garden of Earthly Delights. Art enthusiasts should budget 3-4 hours."
        }
      ]
    }
  },
  {
    slug: 'art-institute-chicago',
    data: {
      hoursOfOperation: {
        hours: {
          regular: {
            sunday: { open: "11:00", close: "17:00" },
            monday: { open: "11:00", close: "17:00" },
            tuesday: { open: null, close: null, closed: true },
            wednesday: { open: "11:00", close: "17:00" },
            thursday: { open: "11:00", close: "20:00" },
            friday: { open: "11:00", close: "17:00" },
            saturday: { open: "11:00", close: "17:00" }
          },
          exceptions: [
            { date: "2026-01-01", closed: true, reason: "New Year's Day" },
            { date: "2026-11-26", closed: true, reason: "Thanksgiving" },
            { date: "2026-12-25", closed: true, reason: "Christmas Day" }
          ],
          notes: "Member-only viewing 10-11am daily. Extended hours until 8pm on Thursday. Closed Tuesdays. Free weekdays for Illinois residents Jan 5 - Feb 27.",
          lastUpdated: "2026-01-23"
        },
        admission: {
          adult: 35,
          senior: 29,
          seniorAge: 65,
          student: 29,
          child: 0,
          childMaxAge: 14,
          currency: "USD",
          notes: "Chicago teens under 18 free. Illinois residents free on weekdays in winter (Jan-Feb). LINK/WIC cardholders free. Bank of America cardholders free first weekend of month.",
          freeDay: "Free for Illinois residents Jan-Feb weekdays",
          memberFree: true
        },
        crowdData: {
          overall: "Popular",
          bestDays: ["monday", "wednesday", "friday"],
          worstDays: ["saturday", "sunday"],
          bestTimes: ["11:00-12:00", "15:00-17:00"],
          worstTimes: ["12:00-15:00"],
          avgVisitDuration: "2-3 hours",
          recommendedDuration: "3-4 hours for thorough visit"
        },
        tips: [
          "Members get exclusive access 10-11am daily",
          "Thursday evenings until 8pm are less crowded",
          "The Modern Wing has great natural light and Lake Michigan views",
          "Start with the Impressionist galleries - they get crowded later",
          "Free admission for Illinois residents on winter weekdays",
          "The museum restaurant Terzo Piano has excellent food and views"
        ],
        tickets: {
          onlineUrl: "https://sales.artic.edu/admissions",
          advanceRecommended: true,
          sameDayAvailable: true
        }
      },
      websiteUrl: "https://www.artic.edu",
      ticketUrl: "https://sales.artic.edu/admissions",
      faqs: [
        {
          question: "What are the Art Institute of Chicago hours?",
          answer: "The Art Institute is open <strong>11am to 5pm</strong> Sunday, Monday, Wednesday, Friday, and Saturday. <strong>Extended hours until 8pm on Thursday</strong>. The museum is <strong>closed every Tuesday</strong>, New Year's Day, Thanksgiving, and Christmas."
        },
        {
          question: "How much does the Art Institute of Chicago cost?",
          answer: "General admission is <strong>$35 for adults</strong>, $29 for seniors (65+) and students. <strong>Free for children under 14</strong> and Chicago teens under 18. Illinois residents get free admission on weekdays during January and February."
        },
        {
          question: "What is the best time to visit the Art Institute?",
          answer: "The best times are <strong>weekday mornings at opening (11am)</strong> or <strong>Thursday evenings</strong> when the museum stays open until 8pm with lighter crowds. Avoid Saturday and Sunday when the museum is busiest."
        },
        {
          question: "How long should I spend at the Art Institute of Chicago?",
          answer: "Plan for <strong>2-3 hours</strong> to see highlights including the famous <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat's</strong></a> A Sunday on La Grande Jatte, <a href=\"/apps/masterpieces/artist/grant-wood\"><strong>Grant Wood's</strong></a> American Gothic, and the renowned Impressionist collection. Art enthusiasts should budget 3-4 hours."
        }
      ]
    }
  },
  {
    slug: 'national-gallery-of-art',
    data: {
      hoursOfOperation: {
        hours: {
          regular: {
            sunday: { open: "10:00", close: "17:00" },
            monday: { open: "10:00", close: "17:00" },
            tuesday: { open: "10:00", close: "17:00" },
            wednesday: { open: "10:00", close: "17:00" },
            thursday: { open: "10:00", close: "17:00" },
            friday: { open: "10:00", close: "17:00" },
            saturday: { open: "10:00", close: "17:00" }
          },
          exceptions: [
            { date: "2026-01-01", closed: true, reason: "New Year's Day" },
            { date: "2026-12-25", closed: true, reason: "Christmas Day" }
          ],
          notes: "Open every day except December 25 and January 1. Free admission always. 7th Street entrance temporarily closed.",
          lastUpdated: "2026-01-23"
        },
        admission: {
          adult: 0,
          senior: 0,
          student: 0,
          child: 0,
          currency: "USD",
          notes: "Admission is always free for all visitors. No tickets required for general admission.",
          freeDay: "Always free",
          memberFree: true
        },
        crowdData: {
          overall: "Popular",
          bestDays: ["monday", "tuesday", "wednesday"],
          worstDays: ["saturday", "sunday"],
          bestTimes: ["10:00-11:00", "15:00-17:00"],
          worstTimes: ["11:00-14:00"],
          avgVisitDuration: "2-3 hours",
          recommendedDuration: "3 hours for one building, full day for both"
        },
        tips: [
          "Admission is always free - no tickets needed",
          "Two buildings: West Building (Old Masters) and East Building (Modern)",
          "Free checkrooms at each entrance",
          "Download the museum app for audio tours",
          "Closest Metro: Archives (Green/Yellow lines)",
          "The underground passage connects both buildings"
        ],
        tickets: {
          onlineUrl: "https://www.nga.gov/visit",
          advanceRequired: false,
          sameDayAvailable: true
        }
      },
      websiteUrl: "https://www.nga.gov",
      faqs: [
        {
          question: "What are the National Gallery of Art hours?",
          answer: "The National Gallery of Art is open <strong>10am to 5pm daily</strong>, every day of the year except December 25 and January 1. No tickets are required for general admission."
        },
        {
          question: "Is the National Gallery of Art free?",
          answer: "<strong>Yes, admission is always free</strong> for all visitors. The National Gallery of Art is one of America's great free museums, supported by federal funding and private donations. No tickets or reservations are required."
        },
        {
          question: "What is the best time to visit the National Gallery of Art?",
          answer: "The best times are <strong>weekday mornings at opening (10am)</strong> or late afternoon. <strong>Avoid weekends</strong> when crowds are heaviest, especially during special exhibitions. Monday through Wednesday are typically the quietest days."
        },
        {
          question: "How long should I spend at the National Gallery of Art?",
          answer: "Plan for <strong>2-3 hours</strong> per building. The West Building houses European Old Masters, while the East Building features modern and contemporary art. To see both buildings thoroughly, budget a full day with breaks."
        }
      ]
    }
  },
  {
    slug: 'rijksmuseum',
    data: {
      hoursOfOperation: {
        hours: {
          regular: {
            sunday: { open: "09:00", close: "17:00" },
            monday: { open: "09:00", close: "17:00" },
            tuesday: { open: "09:00", close: "17:00" },
            wednesday: { open: "09:00", close: "17:00" },
            thursday: { open: "09:00", close: "17:00" },
            friday: { open: "09:00", close: "17:00" },
            saturday: { open: "09:00", close: "17:00" }
          },
          exceptions: [
            { date: "2026-04-27", closed: true, reason: "King's Day" },
            { date: "2026-12-25", closed: true, reason: "Christmas Day" }
          ],
          notes: "Open daily 9am-5pm including most holidays. Ticket office closes at 4:30pm. Timed entry tickets required - book online only.",
          lastUpdated: "2026-01-23"
        },
        admission: {
          adult: 25,
          senior: 25,
          student: 12.50,
          child: 0,
          childMaxAge: 18,
          currency: "EUR",
          notes: "Free for visitors under 18. CJP/EYCA card holders pay €12.50. Tickets only available online - no on-site ticket sales. Timed entry required.",
          freeDay: null,
          memberFree: true
        },
        crowdData: {
          overall: "Very Popular",
          bestDays: ["monday", "tuesday", "wednesday"],
          worstDays: ["saturday", "sunday"],
          bestTimes: ["09:00-10:00", "15:00-17:00"],
          worstTimes: ["11:00-15:00"],
          avgVisitDuration: "2-3 hours",
          recommendedDuration: "3-4 hours for thorough visit"
        },
        tips: [
          "Tickets MUST be booked online - no on-site ticket sales",
          "Arrive right at 9am opening for fewer crowds at Night Watch",
          "The museum is busiest 11am-3pm - avoid this window",
          "Late afternoon after 3pm is also good for smaller crowds",
          "Download the Rijksmuseum app for free audio tours",
          "Cash not accepted - card or digital payment only"
        ],
        tickets: {
          onlineUrl: "https://www.rijksmuseum.nl/en/tickets",
          advanceRequired: true,
          sameDayAvailable: true
        }
      },
      websiteUrl: "https://www.rijksmuseum.nl",
      ticketUrl: "https://www.rijksmuseum.nl/en/tickets",
      faqs: [
        {
          question: "What are the Rijksmuseum hours?",
          answer: "The Rijksmuseum is open <strong>daily from 9am to 5pm</strong>, including most holidays. The museum is closed only on April 27 (King's Day) and December 25. Ticket office closes at 4:30pm."
        },
        {
          question: "How much do Rijksmuseum tickets cost?",
          answer: "Admission is <strong>€25 for adults</strong> and €12.50 for students (CJP/EYCA). <strong>Free for visitors under 18</strong>. Tickets must be purchased online in advance - there are no on-site ticket sales."
        },
        {
          question: "What is the best time to visit the Rijksmuseum?",
          answer: "The best time is <strong>right at 9am opening</strong> or <strong>after 3pm</strong>. The museum is busiest between 11am and 3pm. Avoid weekends when possible. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> Night Watch hall gets very crowded midday."
        },
        {
          question: "How long should I spend at the Rijksmuseum?",
          answer: "Plan for <strong>2-3 hours</strong> to see highlights including <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> Night Watch, <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> Milkmaid, and Dutch Golden Age masterpieces. Art enthusiasts should budget 3-4 hours."
        }
      ]
    }
  }
];

async function main() {
  console.log('Adding museum hours data - Batch 1 (5 museums)...\n');

  for (const museum of museums) {
    try {
      const updated = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          hoursOfOperation: museum.data.hoursOfOperation,
          faqs: museum.data.faqs,
          websiteUrl: museum.data.websiteUrl || undefined,
          ticketUrl: museum.data.ticketUrl || undefined,
          updatedAt: new Date()
        }
      });

      console.log(`✓ Updated: ${updated.name}`);
      console.log(`  - Hours: Added`);
      console.log(`  - FAQs: ${museum.data.faqs.length} questions`);
      console.log(`  - Tips: ${museum.data.hoursOfOperation.tips?.length || 0} tips`);
      console.log('');
    } catch (error) {
      console.error(`✗ Failed: ${museum.slug}`, error.message);
    }
  }

  console.log('Batch 1 complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
