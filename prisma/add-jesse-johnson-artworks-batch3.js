const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING JESSE JOHNSON ARTWORKS (BATCH 3) ===\n');

  // Update artist bio to reference "digital gallery"
  console.log('Updating artist profile to reference digital gallery...\n');

  await prisma.artist.update({
    where: { slug: 'jesse-johnson' },
    data: {
      bioFull: `<p><a href="https://thedopeart.com" target="_blank" rel="noopener"><strong>Jesse Johnson</strong></a> is a contemporary American digital artist whose work sits at the intersection of <strong>Pop Surrealism</strong>, street art, and financial iconography. Working entirely in digital mediums, he transforms Wall Street symbols, currency, and luxury motifs into vibrant, larger-than-life compositions.</p>

<p>Johnson's digital paintings pulse with energy, featuring bold colors, dynamic compositions, and a rebellious attitude toward traditional fine art conventions. His work often incorporates recognizable symbols of wealth and success, from bulls and bears to stacks of cash, reimagined through a surrealist lens that questions and celebrates consumer culture simultaneously.</p>

<p>The artist's flashy aesthetic draws from diverse influences including <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a>, graffiti culture, and the high-octane world of finance. Each piece balances technical skill with raw creative energy, making his work particularly appealing to collectors who appreciate art that makes a statement.</p>

<p>As the first living artist and first digital artist featured on Masterpiece Locator, Johnson represents a new chapter in our mission to showcase meaningful art across all eras and mediums. His full collection is available at his <a href="https://thedopeart.com" target="_blank" rel="noopener"><strong>digital gallery</strong></a>, where his bold vision translates into premium canvas prints for modern interiors.</p>`,
      faqs: [
        {
          question: "Where can I buy Jesse Johnson's art?",
          answer: "Jesse Johnson's artwork is available through his <a href='https://thedopeart.com' target='_blank' rel='noopener'><strong>digital gallery at thedopeart.com</strong></a> as premium canvas prints. The collection features his signature Wall Street and Pop Surrealist pieces in various sizes."
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
          answer: "Yes, Jesse Johnson is a contemporary American digital artist actively creating new work. He's the first living artist featured on Masterpiece Locator. His latest pieces can be found at his <a href='https://thedopeart.com' target='_blank' rel='noopener'><strong>digital gallery</strong></a>."
        },
        {
          question: "Can other living artists be featured on Masterpiece Locator?",
          answer: "Yes. Jesse Johnson is the first living artist on the platform, but other artists can apply for inclusion. If you're an artist interested in having your work featured, <a href='https://thedopeart.com/pages/contact' target='_blank' rel='noopener'><strong>submit an application</strong></a> for consideration."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Artist profile updated!\n');

  // Get the artist
  const artist = await prisma.artist.findUnique({
    where: { slug: 'jesse-johnson' }
  });

  if (!artist) {
    console.log('ERROR: Artist not found');
    return;
  }

  console.log('Artist: ' + artist.name + ' (ID: ' + artist.id + ')\n');

  const artworks = [
    {
      id: 'artwork_jj_wall_street_riches',
      slug: 'wall-street-riches',
      title: 'Wall Street Riches',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "Wall Street Riches" distills ambition into a single powerful image. A faceless figure in a sharp suit stands between success and loss, rendered in shimmering <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold tones</strong></a> that pulse with material desire.</p>

<p>The piece reduces Wall Street to a bold, recognizable symbol. Johnson's suited protagonist has no identity beyond wealth itself, a commentary on how the pursuit of riches can hollow out individuality. Yet there's no judgment here. The work celebrates and critiques simultaneously, letting viewers find their own meaning.</p>

<p>This is <strong>Pop Surrealism</strong> applied to financial culture, transforming the American dream into something you can hang on your wall. A statement piece for anyone drawn to <a href="https://luxurywallart.com/collections/wall-street-art" target="_blank" rel="noopener"><strong>Wall Street art</strong></a> and the aesthetic of ambition.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/files/wall-street-riches-507478_grande.jpg?v=1745239610',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'street-art', 'contemporary'],
      moodTags: ['ambitious', 'bold', 'provocative'],
      primaryColors: ['gold', 'black', 'green'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Wall Street Riches?",
          answer: "Available at <a href='https://thedopeart.com/products/wall-street-riches' target='_blank' rel='noopener'><strong>Jesse Johnson's digital gallery</strong></a> starting at $89, with sizes up to 40x60 inches."
        },
        {
          question: "What does Wall Street Riches represent?",
          answer: "The faceless suited figure represents ambition stripped to its essence. <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson</strong></a> explores how the pursuit of wealth can define and simultaneously erase identity."
        }
      ]
    }
  ];

  let created = 0;
  let updated = 0;
  let errors = 0;

  for (const artwork of artworks) {
    try {
      const existing = await prisma.artwork.findUnique({
        where: { slug: artwork.slug }
      });

      if (existing) {
        await prisma.artwork.update({
          where: { slug: artwork.slug },
          data: {
            ...artwork,
            artistId: artist.id,
            updatedAt: new Date()
          }
        });
        console.log('UPDATED: ' + artwork.title);
        updated++;
      } else {
        await prisma.artwork.create({
          data: {
            ...artwork,
            artistId: artist.id,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        console.log('CREATED: ' + artwork.title);
        created++;
      }
    } catch (err) {
      console.log('ERROR (' + artwork.slug + '): ' + err.message);
      errors++;
    }
  }

  console.log('\n=== COMPLETE ===');
  console.log('Created: ' + created);
  console.log('Updated: ' + updated);
  console.log('Errors: ' + errors);

  // Verify
  const count = await prisma.artwork.count({ where: { artistId: artist.id } });
  console.log('\nTotal artworks for Jesse Johnson: ' + count);
}

main().catch(console.error).finally(() => prisma.$disconnect());
