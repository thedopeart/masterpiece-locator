const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Map JSON file slugs to database slugs
const slugMap = {
  'louvre': 'louvre-paris-france',
  'met': 'met',
  'national-gallery-london': 'national-gallery',
  'orsay': 'musee-dorsay',
  'uffizi': 'uffizi-gallery-florence-italy'
};

async function main() {
  const dataDir = path.join(__dirname, '../data/museums');
  const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));

  console.log('Syncing museum JSON files to database...\n');

  for (const file of jsonFiles) {
    const jsonSlug = file.replace('.json', '');
    const dbSlug = slugMap[jsonSlug];

    if (!dbSlug) {
      console.log(`⚠ No slug mapping for ${jsonSlug}, skipping`);
      continue;
    }

    const jsonPath = path.join(dataDir, file);
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

    try {
      // Build hoursOfOperation object
      const hoursOfOperation = {
        regular: data.hours?.regular || null,
        exceptions: data.hours?.exceptions || [],
        notes: data.hours?.notes || null,
        lastUpdated: data.hours?.lastUpdated || null
      };

      // Build admission data
      const admission = data.admission || null;

      // Build crowd data
      const crowdData = data.crowdData || null;

      // Build tips
      const tips = data.tips || [];

      // Build tickets info
      const tickets = data.tickets || null;

      // Combine into single JSON field for hoursOfOperation
      const fullHoursData = {
        hours: hoursOfOperation,
        admission: admission,
        crowdData: crowdData,
        tips: tips,
        tickets: tickets,
        accessibility: data.accessibility || null,
        amenities: data.amenities || null,
        mustSee: data.mustSee || []
      };

      await prisma.museum.update({
        where: { slug: dbSlug },
        data: {
          hoursOfOperation: fullHoursData,
          faqs: data.faqs || [],
          websiteUrl: data.contact?.website || undefined,
          ticketUrl: data.tickets?.onlineUrl || undefined,
          address: data.location?.address || undefined,
          latitude: data.location?.coordinates?.lat || undefined,
          longitude: data.location?.coordinates?.lng || undefined,
          updatedAt: new Date()
        }
      });

      console.log(`✓ Updated: ${data.name} (${dbSlug})`);
      console.log(`  - Hours: ${data.hours?.regular ? 'Yes' : 'No'}`);
      console.log(`  - FAQs: ${data.faqs?.length || 0} questions`);
      console.log(`  - Tips: ${data.tips?.length || 0} tips`);
      console.log('');
    } catch (error) {
      console.error(`✗ Failed: ${jsonSlug} -> ${dbSlug}`, error.message);
    }
  }

  console.log('Sync complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
