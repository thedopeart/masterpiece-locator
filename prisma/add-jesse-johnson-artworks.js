const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ADDING JESSE JOHNSON ARTWORKS ===\n');

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
      id: 'artwork_jj_eternal_royalty',
      slug: 'eternal-royalty-king-queen-set',
      title: 'Eternal Royalty King and Queen Set',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "Eternal Royalty" presents a striking meditation on love and mortality. This two-piece collection pairs a skeletal queen holding a crimson rose with her king counterpart, their golden bones gleaming against rich, dark backgrounds.</p>

<p>The work explores life's fleeting nature while celebrating enduring connection. Johnson's signature style shines through: bold contrasts, luxurious gold accents, and that unmistakable <strong>Pop Surrealist</strong> edge that makes his work instantly recognizable.</p>

<p>These pieces work as a pair or standalone statements. The macabre royalty theme resonates with collectors drawn to <a href="https://luxurywallart.com/collections/skeleton-skull-art" target="_blank" rel="noopener"><strong>skull art</strong></a> and gothic luxury aesthetics.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/Eternal_Royalty_King_and_Queen_Canvas_Cover_Art_grande.jpg?v=1626196773',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'gothic', 'contemporary'],
      moodTags: ['romantic', 'dark', 'luxurious'],
      primaryColors: ['gold', 'black', 'red'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Eternal Royalty?",
          answer: "This piece is available exclusively at <a href='https://thedopeart.com/products/eternal-royalty' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> in multiple sizes and framing options, starting at $129."
        },
        {
          question: "What does Eternal Royalty symbolize?",
          answer: "The skeletal king and queen represent eternal love transcending mortality. The golden bones and royal imagery suggest that true connection outlasts physical existence, a recurring theme in <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> work."
        }
      ]
    },
    {
      id: 'artwork_jj_never_stop_hustling',
      slug: 'never-stop-hustling',
      title: 'Never Stop Hustling',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "Never Stop Hustling" captures the relentless drive of entrepreneurial ambition. A golden skull in business attire dominates the composition, its cranium revealing layers of freshly minted hundred dollar bills beneath the surface.</p>

<p>The teal background provides striking contrast against the gold and green money tones. This piece embodies Johnson's <strong>Wall Street aesthetic</strong>: wealth imagery reimagined through a surrealist lens.</p>

<p>Perfect for the office or workspace, this artwork speaks to those who see success as a mindset. The suited skull represents the entrepreneur molded by ambition, a visual anthem for <a href="https://luxurywallart.com/collections/wall-street-art" target="_blank" rel="noopener"><strong>hustle culture</strong></a>.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/never-stop-hustling-484844_5000x.jpg?v=1626098534',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'street-art', 'contemporary'],
      moodTags: ['motivational', 'bold', 'ambitious'],
      primaryColors: ['gold', 'teal', 'green'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Never Stop Hustling?",
          answer: "Available at <a href='https://thedopeart.com/products/never-stop-hustling' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $79, with sizes up to 40x60 inches."
        },
        {
          question: "What style is Never Stop Hustling?",
          answer: "This piece exemplifies <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> signature blend of <strong>Pop Surrealism</strong> and Wall Street imagery, combining skull motifs with money and business themes."
        }
      ]
    },
    {
      id: 'artwork_jj_all_seeing_king',
      slug: 'all-seeing-king-playing-card',
      title: 'All Seeing King',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "All Seeing King" merges playing card iconography with his signature money aesthetic. A powerful black king dominates the composition, set against a background filled with currency.</p>

<p>The piece draws on the rich visual tradition of card art while injecting Johnson's bold, contemporary energy. The king's commanding presence speaks to power and strategy, themes that resonate with poker enthusiasts and collectors who appreciate symbolic imagery.</p>

<p>This work sits comfortably alongside Johnson's broader exploration of wealth symbols, perfect for those drawn to <a href="https://luxurywallart.com/collections/poker-art" target="_blank" rel="noopener"><strong>poker and gaming art</strong></a>.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/all-seeing-king-315642_grande.jpg?v=1627007827',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'contemporary', 'graphic'],
      moodTags: ['powerful', 'strategic', 'bold'],
      primaryColors: ['black', 'gold', 'green'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy All Seeing King?",
          answer: "This piece is available at <a href='https://thedopeart.com/products/all-seeing-king-playing-card-art' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $79."
        },
        {
          question: "What inspired All Seeing King?",
          answer: "The piece combines classic playing card design with <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> Wall Street aesthetic, creating a work that appeals to poker enthusiasts and collectors of bold contemporary art."
        }
      ]
    },
    {
      id: 'artwork_jj_money_on_my_mind',
      slug: 'money-on-my-mind',
      title: 'Money on My Mind',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p>"Money on My Mind" by <a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson</strong></a> delivers exactly what the title promises. A sharply dressed figure stands composed while dollar bills explode from their head in a dramatic cascade.</p>

<p>The piece literalizes the obsession with financial success, transforming an abstract concept into visceral imagery. Johnson's dapper subject maintains cool composure even as wealth physically consumes their thoughts.</p>

<p>This is <strong>Pop Surrealism</strong> at its most direct: bold, unapologetic, and impossible to ignore. A statement piece for anyone who embraces the <a href="https://luxurywallart.com/collections/money-art" target="_blank" rel="noopener"><strong>money art</strong></a> aesthetic.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/files/money-on-my-mind-260481_grande.jpg?v=1721747961',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'street-art', 'contemporary'],
      moodTags: ['bold', 'ambitious', 'provocative'],
      primaryColors: ['green', 'black', 'white'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Money on My Mind?",
          answer: "Available at <a href='https://thedopeart.com/products/money-on-my-mind' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $79, with multiple size and framing options."
        },
        {
          question: "What does Money on My Mind represent?",
          answer: "The piece visualizes the intense focus on wealth and success, a literal interpretation of having <strong>money on the mind</strong>. It's a signature work in <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> Wall Street collection."
        }
      ]
    },
    {
      id: 'artwork_jj_money_skulls_set',
      slug: 'money-skulls-3-piece-set',
      title: 'Money $kulls 3 Piece Set',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "Money $kulls" collection brings together three distinct takes on his signature skull-meets-wealth aesthetic. Pink, teal, and bitcoin-themed skulls anchor each canvas, unified by intricate gold accents and that unmistakable entrepreneurial energy.</p>

<p>The triptych format allows for flexible display: hung together for maximum impact or separated across a space. Each skull carries its own personality while contributing to a cohesive statement about ambition and aspiration.</p>

<p>Johnson designed this set as a daily reminder of goals and drive. Perfect for offices, workspaces, or anywhere that benefits from <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>bold, colorful art</strong></a> with meaning.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/money-kulls-3-piece-set-253476_grande.jpg?v=1626141731',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'street-art', 'contemporary'],
      moodTags: ['vibrant', 'ambitious', 'modern'],
      primaryColors: ['pink', 'teal', 'gold'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Money $kulls 3 Piece Set?",
          answer: "This collection is available at <a href='https://thedopeart.com/products/money-skulls-3-piece-set' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $199 for the set."
        },
        {
          question: "Can the Money $kulls pieces be displayed separately?",
          answer: "Yes. While designed as a triptych, each piece in <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> Money $kulls collection works as a standalone artwork."
        }
      ]
    },
    {
      id: 'artwork_jj_money_skull_100',
      slug: 'money-skull-100-dollar-bill',
      title: 'Money Skull - 100 Dollar Bill',
      year: 2021,
      medium: 'Digital art on premium canvas',
      description: `<p><a href="/apps/masterpieces/artist/jesse-johnson"><strong>Jesse Johnson's</strong></a> "Money Skull" fuses two of his most powerful motifs: the skull and the hundred dollar bill. The elongated panoramic format emphasizes the merging of mortality and wealth into a single striking image.</p>

<p>This piece works as motivational art with teeth. The suited skull represents determination, hard work, and financial ambition, a visual mantra for those chasing success. Johnson's execution balances grit with polish, street energy with fine art sensibility.</p>

<p>The wide format makes this ideal for spaces that need a horizontal statement piece. A favorite among collectors of <a href="https://luxurywallart.com/collections/skeleton-skull-art" target="_blank" rel="noopener"><strong>skull art</strong></a> and <a href="https://luxurywallart.com/collections/money-art" target="_blank" rel="noopener"><strong>money-themed works</strong></a>.</p>`,
      imageUrl: 'https://thedopeart.com/cdn/shop/products/money-skull-hundred-dollar-bill-266223_grande.jpg?v=1626071069',
      imageAttribution: 'Jesse Johnson / thedopeart.com',
      styleTags: ['pop-surrealism', 'street-art', 'contemporary'],
      moodTags: ['motivational', 'bold', 'ambitious'],
      primaryColors: ['green', 'gold', 'black'],
      artworkType: 'painting',
      faqs: [
        {
          question: "Where can I buy Money Skull - 100 Dollar Bill?",
          answer: "Available at <a href='https://thedopeart.com/products/money-skull-100-dollar-bill' target='_blank' rel='noopener'><strong>thedopeart.com</strong></a> starting at $104, with sizes up to 60x25 inches."
        },
        {
          question: "What makes Money Skull unique?",
          answer: "The panoramic format sets this apart from <a href='/apps/masterpieces/artist/jesse-johnson'><strong>Jesse Johnson's</strong></a> other skull works. The wide aspect ratio creates a cinematic feel, perfect for horizontal wall spaces."
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
