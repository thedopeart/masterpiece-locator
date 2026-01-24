const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING JESSE JOHNSON ARTWORKS (BATCH 2) ===\n');

  // First, update the artist bio to emphasize digital art
  console.log('Updating artist profile to emphasize digital art...\n');

  await prisma.artist.update({
    where: { slug: 'jesse-johnson' },
    data: {
      bioShort: 'The first living artist and first digital artist featured on Masterpiece Locator. Contemporary American creator known for bold Pop Surrealist works that blend Wall Street imagery with street art aesthetics.',
      bioFull: `<p><a href="https://thedopeart.com" target="_blank" rel="noopener"><strong>Jesse Johnson</strong></a> is a contemporary American digital artist whose work sits at the intersection of <strong>Pop Surrealism</strong>, street art, and financial iconography. Working entirely in digital mediums, he transforms Wall Street symbols, currency, and luxury motifs into vibrant, larger-than-life compositions.</p>

<p>Johnson's digital paintings pulse with energy, featuring bold colors, dynamic compositions, and a rebellious attitude toward traditional fine art conventions. His work often incorporates recognizable symbols of wealth and success, from bulls and bears to stacks of cash, reimagined through a surrealist lens that questions and celebrates consumer culture simultaneously.</p>

<p>The artist's flashy aesthetic draws from diverse influences including <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a>, graffiti culture, and the high-octane world of finance. Each piece balances technical skill with raw creative energy, making his work particularly appealing to collectors who appreciate art that makes a statement.</p>

<p>As the first living artist and first digital artist featured on Masterpiece Locator, Johnson represents a new chapter in our mission to showcase meaningful art across all eras and mediums. His pieces are available through <a href="https://thedopeart.com" target="_blank" rel="noopener"><strong>thedopeart.com</strong></a>, where his bold vision translates into premium canvas prints for modern interiors.</p>`,
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
      id: 'artwork_jj_gold_king_queen_hearts',
      slug: 'gold-king-and-queen-of-hearts',
      title: 'Gold King and Queen of Hearts',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "Gold King and Queen of Hearts" reimagines classic playing card imagery through a lens of luxury and romance. The royal pair emerge in striking <a href="https://luxurywallart.com/collections/black-and-gold" target="_blank" rel="noopener"><strong>black and gold</strong></a>, their regal presence elevated by intricate details and a rich color palette.</p>

<p>This two-piece set speaks to love and partnership while channeling the strategic elegance of card games. Johnson's design transforms the familiar hearts suit royalty into something more opulent, blending <strong>Pop Surrealist</strong> sensibility with the timeless appeal of playing card art.</p>

<p>The pieces work beautifully as a pair or can stand alone. Perfect for poker rooms, lounges, or anywhere that appreciates the intersection of <a href="https://luxurywallart.com/collections/poker-art" target="_blank" rel="noopener"><strong>gaming culture</strong></a> and fine art.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/gold-king-and-queen-set-691473_grande.jpg?v=1626141634',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'contemporary', 'graphic'],
      moodTags: ['romantic', 'luxurious', 'bold'],
      primaryColors: ['gold', 'black', 'red'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Gold King and Queen of Hearts?",
          answer: "This set is available at <a href='https://thedopeart.com/products/gold-king-and-queen-of-hearts' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $129, with sizes up to 40x60 inches per piece."
        },
        {
          question: "What does Gold King and Queen of Hearts symbolize?",
          answer: "The piece represents love and partnership through playing card iconography. <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson</strong></a> uses the classic hearts suit royalty to explore themes of connection and luxury."
        }
      ]
    },
    {
      id: 'artwork_jj_lost_in_clouds',
      slug: 'lost-in-the-clouds-canvas-wall-art',
      title: 'Lost in the Clouds',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p>"Lost in the Clouds" by <a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson</strong></a> drifts into dreamlike territory, a departure from his typical Wall Street themes. A golden moon illuminates a ghostly ship floating through cotton candy clouds, the scene suspended somewhere between dream and memory.</p>

<p>This nautical fantasy showcases Johnson's range beyond financial imagery. The piece carries a cosmic, <a href="https://luxurywallart.com/collections/surrealism-art" target="_blank" rel="noopener"><strong>surrealist</strong></a> quality, with soft pastels replacing his usual bold contrasts. The sailboat drifts through impossibly pink skies, untethered from reality.</p>

<p>Available as both a canvas print and as a 1/1 animated NFT, this work bridges traditional and digital art collecting. A contemplative piece for those drawn to <a href="https://luxurywallart.com/collections/boat-art" target="_blank" rel="noopener"><strong>nautical themes</strong></a> with a fantastical twist.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/lost-in-the-clouds-656542_grande.jpg?v=1671178764',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['surrealism', 'fantasy', 'contemporary'],
      moodTags: ['dreamy', 'serene', 'ethereal'],
      primaryColors: ['pink', 'gold', 'purple'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Lost in the Clouds?",
          answer: "Available at <a href='https://thedopeart.com/products/lost-in-the-clouds-canvas-wall-art' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $79. Also available as a 1/1 animated NFT for collectors interested in digital ownership."
        },
        {
          question: "What style is Lost in the Clouds?",
          answer: "This piece shows <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> range beyond Wall Street themes. It's a <a href='https://luxurywallart.com/collections/surrealism-art' target='_blank' rel='noopener'><strong>surrealist</strong></a> nautical fantasy with dreamy, ethereal qualities."
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
