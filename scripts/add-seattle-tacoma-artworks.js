const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// New artists
const newArtists = [
  {
    id: 'artist-dale-chihuly',
    slug: 'dale-chihuly',
    name: 'Dale Chihuly',
    birthYear: 1941,
    deathYear: null,
    nationality: 'American',
    bioShort: 'American glass sculptor from Tacoma, Washington. Pioneered the Studio Glass movement and is known for colorful, organic forms that push the boundaries of glass as an artistic medium.'
  },
  {
    id: 'artist-jaume-plensa',
    slug: 'jaume-plensa',
    name: 'Jaume Plensa',
    birthYear: 1955,
    deathYear: null,
    nationality: 'Spanish',
    bioShort: 'Spanish sculptor known for monumental public artworks, often depicting human heads and figures made from letters, mesh, or translucent materials.'
  },
  {
    id: 'artist-mark-di-suvero',
    slug: 'mark-di-suvero',
    name: 'Mark di Suvero',
    birthYear: 1933,
    deathYear: null,
    nationality: 'American',
    bioShort: 'American sculptor known for large-scale abstract sculptures made from steel I-beams, often painted in bright colors and featuring dynamic, balanced forms.'
  }
];

// Artworks
const artworks = [
  // Olympic Sculpture Park
  {
    id: 'artwork-calder-eagle-seattle',
    slug: 'eagle-calder-seattle',
    title: 'Eagle',
    year: 1971,
    medium: 'Painted steel',
    dimensions: '11.9 × 10.4 × 5.5 m (39 × 34 × 18 ft)',
    artistId: 'e2a65dcb-3dbe-47d7-93de-a759b1db1a2c', // Calder
    museumId: 'olympic-sculpture-park',
    searchVolumeTier: 2,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/alexander-calder"><strong>Alexander Calder</strong></a>\'s bold <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> Eagle has become the visual icon of <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Olympic Sculpture Park</strong></a>. Perched over Elliott Avenue, the abstract stabile rises against the Seattle skyline and Puget Sound.</p><p>The monumental sculpture was gifted by Jon and Mary Shirley in honor of the Seattle Art Museum\'s 75th anniversary. It stands as a bold counterpoint to the natural beauty of the Olympic Mountains visible across the water.</p><p>Maintaining such a large outdoor steel work is challenging. The museum uses boom lifts for conservation, and groundskeepers must clip grass near the base with scissors rather than mowers to avoid damaging the paint. Eagle underwent a full restoration in 2020.</p>'
  },
  {
    id: 'artwork-serra-wake-seattle',
    slug: 'wake-richard-serra',
    title: 'Wake',
    year: 2004,
    medium: 'Weathering steel (five parts)',
    dimensions: '4.3 × 37.5 × 14 m (14 × 123 × 46 ft)',
    artistId: '9f4a0336-1f97-4264-b63f-d03ad87a0f74', // Serra
    museumId: 'olympic-sculpture-park',
    searchVolumeTier: 2,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/richard-serra"><strong>Richard Serra</strong></a>\'s massive Wake creates an immersive spatial experience at <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Olympic Sculpture Park</strong></a>. Five curved weathering steel plates rise from the ground, their rusty orange surfaces developing a rich patina over time.</p><p>Walking through and around the sculpture, visitors experience shifting perspectives as the towering walls seem to lean and curve. The work exemplifies Serra\'s career-long exploration of how sculpture can transform space and the viewer\'s movement through it.</p><p>The museum asks visitors not to touch Wake. The delicate patina of rust on the surface contributes to its vivid coloration, and oils from human contact could damage it over time.</p>'
  },
  {
    id: 'artwork-plensa-echo-seattle',
    slug: 'echo-jaume-plensa',
    title: 'Echo',
    year: 2011,
    medium: 'Painted steel, stainless steel mesh',
    dimensions: '14 m (46 ft) tall',
    artistId: 'artist-jaume-plensa',
    museumId: 'olympic-sculpture-park',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/jaume-plensa"><strong>Jaume Plensa</strong></a>\'s Echo depicts a serene female head in white steel mesh, gazing out over Puget Sound from <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Olympic Sculpture Park</strong></a>.</p><p>The translucent mesh allows sky and water to show through the figure, blurring the boundary between sculpture and environment. At 46 feet tall, the contemplative face has become one of Seattle\'s most recognizable public artworks.</p><p>Plensa is known for monumental heads installed in cities around the world. Echo joins his other works in creating quiet, meditative presences in urban spaces.</p>'
  },
  {
    id: 'artwork-oldenburg-typewriter-seattle',
    slug: 'typewriter-eraser-scale-x',
    title: 'Typewriter Eraser, Scale X',
    year: 1999,
    medium: 'Stainless steel, fiberglass, cement',
    dimensions: '5.8 × 5.8 × 4.6 m (19 × 19 × 15 ft)',
    artistId: 'artist-coosje-van-bruggen', // Oldenburg & van Bruggen
    museumId: 'olympic-sculpture-park',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/claes-oldenburg-coosje-van-bruggen"><strong>Claes Oldenburg and Coosje van Bruggen</strong></a> transformed a now-obsolete office tool into monumental Pop art. The giant typewriter eraser, with its circular rubber wheel and splayed brush bristles, commemorates an object that was once ubiquitous but has vanished from modern life.</p><p>Like the artists\' famous Shuttlecocks in Kansas City, this work plays with scale to make the familiar strange. Young visitors may not even recognize what the object represents.</p><p>The sculpture is part of <a href="/apps/masterpieces/museum/olympic-sculpture-park"><strong>Olympic Sculpture Park</strong></a>\'s collection of major contemporary works overlooking Puget Sound.</p>'
  },

  // Seattle Art Museum - Calder
  {
    id: 'artwork-calder-gamma',
    slug: 'gamma-calder',
    title: 'Gamma',
    year: 1947,
    medium: 'Painted steel, wire',
    dimensions: '137.2 × 129.5 × 82.6 cm (54 × 51 × 32 1/2 in)',
    artistId: 'e2a65dcb-3dbe-47d7-93de-a759b1db1a2c', // Calder
    museumId: 'seattle-art-museum',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/alexander-calder"><strong>Alexander Calder</strong></a>\'s Gamma is a standing mobile from 1947, part of the remarkable Shirley Family Calder Collection at the <a href="/apps/masterpieces/museum/seattle-art-museum"><strong>Seattle Art Museum</strong></a>.</p><p>The collection, estimated at $200 million, includes 48 works spanning every decade of Calder\'s career. Jon and Kim Shirley\'s transformative gift has made SAM one of the most important repositories of Calder\'s work on the West Coast.</p><p>Gamma exemplifies Calder\'s mastery of balance and movement. The painted steel elements hang in perfect equilibrium, responding to the slightest air current with gentle, unpredictable motion.</p>'
  },

  // Tacoma Art Museum - Chihuly
  {
    id: 'artwork-chihuly-seaform-pavilion',
    slug: 'seaform-pavilion-chihuly',
    title: 'Seaform Pavilion',
    year: 1998,
    medium: 'Blown glass',
    dimensions: 'Installation, multiple elements',
    artistId: 'artist-dale-chihuly',
    museumId: 'tacoma-art-museum',
    searchVolumeTier: 2,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/dale-chihuly"><strong>Dale Chihuly</strong></a> created this stunning glass installation for his hometown museum in Tacoma, Washington. The Seaform series draws inspiration from the shells, sea life, and waters of Puget Sound that surrounded Chihuly growing up.</p><p>The <a href="/apps/masterpieces/museum/tacoma-art-museum"><strong>Tacoma Art Museum</strong></a> holds the largest retrospective collection of Chihuly\'s work in any museum. Most pieces were donated by the artist in honor of his parents, Viola and George, and his brother George W. Chihuly.</p><p>The organic, flowing forms push the boundaries of what\'s possible in blown glass, with colors ranging from translucent ambers to deep oceanic <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blues</strong></a>.</p>'
  },
  {
    id: 'artwork-chihuly-floats',
    slug: 'ma-chihulys-floats',
    title: "Ma Chihuly's Floats",
    year: 2006,
    medium: 'Blown glass',
    dimensions: '39 Niijima Floats installation',
    artistId: 'artist-dale-chihuly',
    museumId: 'tacoma-art-museum',
    searchVolumeTier: 3,
    artworkType: 'sculpture',
    description: '<p><a href="/apps/masterpieces/artist/dale-chihuly"><strong>Dale Chihuly</strong></a> dedicated this installation of 39 Niijima Floats to his mother, Viola, following her passing in 2006. The spherical glass forms fill the inner courtyard of the <a href="/apps/masterpieces/museum/tacoma-art-museum"><strong>Tacoma Art Museum</strong></a>.</p><p>The Niijima Float series was inspired by Japanese glass fishing floats Chihuly discovered on the beaches of the Pacific Northwest as a child. He scaled them up to monumental proportions, creating orbs that seem to glow with inner light.</p><p>This gift joined Chihuly\'s earlier donations honoring his father and brother, making TAM\'s collection a deeply personal family tribute as well as a retrospective of his groundbreaking career in studio glass.</p>'
  }
];

async function addArtworks() {
  console.log('Adding new artists...\n');

  for (const artist of newArtists) {
    try {
      await prisma.artist.upsert({
        where: { slug: artist.slug },
        update: {
          name: artist.name,
          birthYear: artist.birthYear,
          deathYear: artist.deathYear,
          nationality: artist.nationality,
          bioShort: artist.bioShort,
          updatedAt: new Date()
        },
        create: {
          id: artist.id,
          slug: artist.slug,
          name: artist.name,
          birthYear: artist.birthYear,
          deathYear: artist.deathYear,
          nationality: artist.nationality,
          bioShort: artist.bioShort,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Added artist: ${artist.name}`);
    } catch (error) {
      console.error(`✗ Failed artist: ${artist.name} - ${error.message}`);
    }
  }

  console.log('\nAdding artworks...\n');

  for (const artwork of artworks) {
    try {
      await prisma.artwork.upsert({
        where: { slug: artwork.slug },
        update: {
          title: artwork.title,
          year: artwork.year,
          medium: artwork.medium,
          dimensions: artwork.dimensions,
          artistId: artwork.artistId,
          museumId: artwork.museumId,
          description: artwork.description,
          searchVolumeTier: artwork.searchVolumeTier,
          artworkType: artwork.artworkType,
          updatedAt: new Date()
        },
        create: {
          id: artwork.id,
          slug: artwork.slug,
          title: artwork.title,
          year: artwork.year,
          medium: artwork.medium,
          dimensions: artwork.dimensions,
          artistId: artwork.artistId,
          museumId: artwork.museumId,
          description: artwork.description,
          searchVolumeTier: artwork.searchVolumeTier,
          artworkType: artwork.artworkType,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Added artwork: ${artwork.title}`);
    } catch (error) {
      console.error(`✗ Failed artwork: ${artwork.title} - ${error.message}`);
    }
  }

  // Count results
  console.log('\nArtwork counts:');
  const museums = ['olympic-sculpture-park', 'seattle-art-museum', 'tacoma-art-museum'];
  for (const slug of museums) {
    const count = await prisma.artwork.count({ where: { museumId: slug } });
    const museum = await prisma.museum.findUnique({ where: { slug }, select: { name: true } });
    console.log(`  ${museum?.name}: ${count} artworks`);
  }

  await prisma.$disconnect();
}

addArtworks().catch(console.error);
