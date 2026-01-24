const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING JESSE JOHNSON ===\n');

  const artistId = 'artist_jesse_johnson';

  // Check if already exists
  const existing = await prisma.artist.findUnique({
    where: { slug: 'jesse-johnson' }
  });

  if (existing) {
    console.log('Artist already exists, updating...');
    const updated = await prisma.artist.update({
      where: { slug: 'jesse-johnson' },
      data: {
        name: 'Jesse Johnson',
        nationality: 'American',
        bioShort: 'Contemporary American artist known for bold Pop Surrealist works that blend Wall Street imagery with street art aesthetics. Creates flashy, high-energy paintings exploring themes of wealth, ambition, and modern culture.',
        bioFull: `<p><a href="https://thedopeart.com" target="_blank" rel="noopener"><strong>Jesse Johnson</strong></a> is a contemporary American artist whose work sits at the intersection of <strong>Pop Surrealism</strong>, street art, and financial iconography. His distinctive style transforms Wall Street symbols, currency, and luxury motifs into vibrant, larger-than-life compositions.</p>

<p>Johnson's paintings pulse with energy, featuring bold colors, dynamic compositions, and a rebellious attitude toward traditional fine art conventions. His work often incorporates recognizable symbols of wealth and success, from bulls and bears to stacks of cash, reimagined through a surrealist lens that questions and celebrates consumer culture simultaneously.</p>

<p>The artist's flashy aesthetic draws from diverse influences including <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a>, graffiti culture, and the high-octane world of finance. Each piece balances technical skill with raw creative energy, making his work particularly appealing to collectors who appreciate art that makes a statement.</p>

<p>Johnson's pieces are available exclusively through <a href="https://luxurywallart.com" target="_blank" rel="noopener"><strong>LuxuryWallArt.com</strong></a>, where his bold vision translates perfectly into premium canvas prints for modern interiors.</p>`,
        imageUrl: null, // Can be updated with a profile image later
        faqs: [
          {
            question: "Where can I buy Jesse Johnson's art?",
            answer: "Jesse Johnson's artwork is available exclusively through <a href='https://luxurywallart.com' target='_blank' rel='noopener'><strong>LuxuryWallArt.com</strong></a> as premium canvas prints. The collection features his signature Wall Street and Pop Surrealist pieces in various sizes."
          },
          {
            question: "What style is Jesse Johnson known for?",
            answer: "Johnson works in a distinctive blend of <a href='/apps/masterpieces/movement/pop-art'><strong>Pop Surrealism</strong></a> and street art, characterized by bold colors, financial imagery, and high-energy compositions that explore themes of wealth, ambition, and modern culture."
          },
          {
            question: "What subjects does Jesse Johnson paint?",
            answer: "Johnson's work frequently features Wall Street iconography including bulls, bears, money imagery, and luxury symbols. His pieces transform these financial motifs into surreal, eye-catching artworks that blend <a href='https://luxurywallart.com/collections/wall-street-art' target='_blank' rel='noopener'><strong>Wall Street themes</strong></a> with contemporary street art energy."
          },
          {
            question: "Is Jesse Johnson a living artist?",
            answer: "Yes, Jesse Johnson is a contemporary American artist actively creating new work. His latest pieces can be found at <a href='https://thedopeart.com' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a>."
          }
        ],
        updatedAt: new Date()
      }
    });
    console.log('Updated: ' + updated.name);
  } else {
    console.log('Creating new artist...');
    const created = await prisma.artist.create({
      data: {
        id: artistId,
        slug: 'jesse-johnson',
        name: 'Jesse Johnson',
        birthYear: null, // Can be added later
        deathYear: null, // Living artist
        nationality: 'American',
        bioShort: 'Contemporary American artist known for bold Pop Surrealist works that blend Wall Street imagery with street art aesthetics. Creates flashy, high-energy paintings exploring themes of wealth, ambition, and modern culture.',
        bioFull: `<p><a href="https://thedopeart.com" target="_blank" rel="noopener"><strong>Jesse Johnson</strong></a> is a contemporary American artist whose work sits at the intersection of <strong>Pop Surrealism</strong>, street art, and financial iconography. His distinctive style transforms Wall Street symbols, currency, and luxury motifs into vibrant, larger-than-life compositions.</p>

<p>Johnson's paintings pulse with energy, featuring bold colors, dynamic compositions, and a rebellious attitude toward traditional fine art conventions. His work often incorporates recognizable symbols of wealth and success, from bulls and bears to stacks of cash, reimagined through a surrealist lens that questions and celebrates consumer culture simultaneously.</p>

<p>The artist's flashy aesthetic draws from diverse influences including <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a>, graffiti culture, and the high-octane world of finance. Each piece balances technical skill with raw creative energy, making his work particularly appealing to collectors who appreciate art that makes a statement.</p>

<p>Johnson's pieces are available exclusively through <a href="https://luxurywallart.com" target="_blank" rel="noopener"><strong>LuxuryWallArt.com</strong></a>, where his bold vision translates perfectly into premium canvas prints for modern interiors.</p>`,
        imageUrl: null,
        wikidataId: null,
        wikipediaUrl: null,
        faqs: [
          {
            question: "Where can I buy Jesse Johnson's art?",
            answer: "Jesse Johnson's artwork is available exclusively through <a href='https://luxurywallart.com' target='_blank' rel='noopener'><strong>LuxuryWallArt.com</strong></a> as premium canvas prints. The collection features his signature Wall Street and Pop Surrealist pieces in various sizes."
          },
          {
            question: "What style is Jesse Johnson known for?",
            answer: "Johnson works in a distinctive blend of <a href='/apps/masterpieces/movement/pop-art'><strong>Pop Surrealism</strong></a> and street art, characterized by bold colors, financial imagery, and high-energy compositions that explore themes of wealth, ambition, and modern culture."
          },
          {
            question: "What subjects does Jesse Johnson paint?",
            answer: "Johnson's work frequently features Wall Street iconography including bulls, bears, money imagery, and luxury symbols. His pieces transform these financial motifs into surreal, eye-catching artworks that blend <a href='https://luxurywallart.com/collections/wall-street-art' target='_blank' rel='noopener'><strong>Wall Street themes</strong></a> with contemporary street art energy."
          },
          {
            question: "Is Jesse Johnson a living artist?",
            answer: "Yes, Jesse Johnson is a contemporary American artist actively creating new work. His latest pieces can be found at <a href='https://thedopeart.com' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a>."
          }
        ],
        updatedAt: new Date()
      }
    });
    console.log('Created: ' + created.name);
  }

  // Verify
  const artist = await prisma.artist.findUnique({
    where: { slug: 'jesse-johnson' },
    include: { _count: { select: { Artwork: true } } }
  });

  console.log('\n=== ARTIST PROFILE ===');
  console.log('Name: ' + artist.name);
  console.log('Slug: ' + artist.slug);
  console.log('Nationality: ' + artist.nationality);
  console.log('Bio (short): ' + artist.bioShort.substring(0, 100) + '...');
  console.log('FAQs: ' + (artist.faqs ? artist.faqs.length : 0));
  console.log('Artworks: ' + artist._count.Artwork);
  console.log('\nView at: /apps/masterpieces/artist/jesse-johnson');
}

main().catch(console.error).finally(() => prisma.$disconnect());
