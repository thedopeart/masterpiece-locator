const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  // Get all museums with artwork counts
  const museums = await prisma.museum.findMany({
    include: {
      _count: {
        select: { Artwork: true }
      }
    },
    orderBy: {
      Artwork: {
        _count: 'desc'
      }
    }
  });

  // Check which museums have JSON data files
  const dataDir = path.join(__dirname, '../data/museums');
  const existingFiles = fs.existsSync(dataDir)
    ? fs.readdirSync(dataDir).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''))
    : [];

  console.log('='.repeat(80));
  console.log('MUSEUM ANALYSIS - Sorted by Collection Size');
  console.log('='.repeat(80));
  console.log('');

  console.log('Museums with JSON data files:', existingFiles.join(', '));
  console.log('');

  console.log('Top 50 Museums by Artwork Count:');
  console.log('-'.repeat(80));
  console.log('| # | Artworks | Has Hours | Has FAQs | Has JSON | Museum Name');
  console.log('-'.repeat(80));

  const top50 = museums.slice(0, 50);

  for (let i = 0; i < top50.length; i++) {
    const m = top50[i];
    const hasHours = m.hoursOfOperation !== null;
    const hasFaqs = m.faqs !== null && (Array.isArray(m.faqs) ? m.faqs.length > 0 : Object.keys(m.faqs).length > 0);
    const hasJson = existingFiles.includes(m.slug);

    console.log(
      `| ${String(i + 1).padStart(2)} | ${String(m._count.Artwork).padStart(8)} | ${hasHours ? '✓' : '✗'.padStart(9)} | ${hasFaqs ? '✓' : '✗'.padStart(8)} | ${hasJson ? '✓' : '✗'.padStart(8)} | ${m.name}`
    );
  }

  console.log('-'.repeat(80));
  console.log('');

  // Museums needing hours data (top 30 by collection size without hours)
  const needingHours = museums
    .filter(m => !m.hoursOfOperation)
    .slice(0, 30);

  console.log('');
  console.log('='.repeat(80));
  console.log('PRIORITY LIST: Museums Needing Hours Data (by collection size)');
  console.log('='.repeat(80));
  console.log('');

  for (let i = 0; i < needingHours.length; i++) {
    const m = needingHours[i];
    console.log(`${i + 1}. ${m.name} (${m.city}, ${m.country}) - ${m._count.Artwork} artworks`);
    console.log(`   Slug: ${m.slug}`);
    console.log(`   Website: ${m.websiteUrl || 'N/A'}`);
    console.log('');
  }

  // Summary stats
  const withHours = museums.filter(m => m.hoursOfOperation).length;
  const withFaqs = museums.filter(m => m.faqs).length;

  console.log('='.repeat(80));
  console.log('SUMMARY');
  console.log('='.repeat(80));
  console.log(`Total museums: ${museums.length}`);
  console.log(`With hours data: ${withHours}`);
  console.log(`With FAQs: ${withFaqs}`);
  console.log(`With JSON files: ${existingFiles.length}`);
  console.log(`Needing hours data: ${museums.length - withHours}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
