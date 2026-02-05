import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Helper to create URL-friendly slugs
function createSlug(title: string, artistSlug?: string): string {
  const base = `${title}${artistSlug ? `-${artistSlug}` : ""}`
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return base;
}

interface ArtworkSeed {
  title: string;
  artistSlug: string | null; // Use slug to look up artist
  museumId: string;
  year: number | null;
  medium: string | null;
  dimensions?: string;
  description?: string;
  wikipediaUrl?: string;
  artworkType?: string;
}

const artworks: ArtworkSeed[] = [
  // ===== MUSEO DI CAPODIMONTE (Naples) =====
  {
    title: "Flagellation of Christ",
    artistSlug: "caravaggio",
    museumId: "museo-capodimonte-naples",
    year: 1607,
    medium: "Oil on canvas",
    dimensions: "286 cm × 213 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Flagellation_of_Christ_(Caravaggio)",
  },
  {
    title: "Danaë",
    artistSlug: "titian",
    museumId: "museo-capodimonte-naples",
    year: 1544,
    medium: "Oil on canvas",
    dimensions: "120 cm × 172 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Dana%C3%AB_(Titian_series)",
  },
  {
    title: "Pope Paul III and His Grandsons",
    artistSlug: "titian",
    museumId: "museo-capodimonte-naples",
    year: 1546,
    medium: "Oil on canvas",
    dimensions: "210 cm × 176 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Portrait_of_Pope_Paul_III_and_His_Grandsons",
  },
  {
    title: "Transfiguration",
    artistSlug: "giovanni-bellini",
    museumId: "museo-capodimonte-naples",
    year: 1480,
    medium: "Oil on panel",
    dimensions: "115 cm × 154 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Transfiguration_(Bellini,_Naples)",
  },
  {
    title: "Crucifixion",
    artistSlug: "masaccio",
    museumId: "museo-capodimonte-naples",
    year: 1426,
    medium: "Tempera on panel",
    dimensions: "83 cm × 63 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Pisa_Altarpiece",
  },
  {
    title: "Antea",
    artistSlug: "parmigianino",
    museumId: "museo-capodimonte-naples",
    year: 1535,
    medium: "Oil on canvas",
    dimensions: "136 cm × 86 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Antea_(Parmigianino)",
  },

  // ===== MUSÉE RODIN (Paris) =====
  {
    title: "The Thinker",
    artistSlug: "auguste-rodin",
    museumId: "musee-rodin-paris",
    year: 1904,
    medium: "Bronze",
    dimensions: "189 cm × 98 cm × 140 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Thinker",
  },
  {
    title: "The Kiss",
    artistSlug: "auguste-rodin",
    museumId: "musee-rodin-paris",
    year: 1882,
    medium: "Marble",
    dimensions: "181.5 cm × 112.5 cm × 117 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Kiss_(Rodin_sculpture)",
  },
  {
    title: "The Gates of Hell",
    artistSlug: "auguste-rodin",
    museumId: "musee-rodin-paris",
    year: 1917,
    medium: "Bronze",
    dimensions: "635 cm × 400 cm × 85 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Gates_of_Hell",
  },
  {
    title: "The Burghers of Calais",
    artistSlug: "auguste-rodin",
    museumId: "musee-rodin-paris",
    year: 1889,
    medium: "Bronze",
    dimensions: "201 cm × 205 cm × 196 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Burghers_of_Calais",
  },
  {
    title: "Monument to Balzac",
    artistSlug: "auguste-rodin",
    museumId: "musee-rodin-paris",
    year: 1898,
    medium: "Bronze",
    dimensions: "270 cm × 120 cm × 128 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Monument_to_Balzac",
  },
  {
    title: "The Walking Man",
    artistSlug: "auguste-rodin",
    museumId: "musee-rodin-paris",
    year: 1907,
    medium: "Bronze",
    dimensions: "213.5 cm × 71.7 cm × 156.5 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Walking_Man",
  },

  // ===== PEGGY GUGGENHEIM COLLECTION (Venice) =====
  {
    title: "Empire of Light",
    artistSlug: "rene-magritte",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1953,
    medium: "Oil on canvas",
    dimensions: "195.4 cm × 131.2 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Empire_of_Light",
  },
  {
    title: "On the Beach",
    artistSlug: "pablo-picasso",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1937,
    medium: "Oil, conté crayon and chalk on canvas",
    dimensions: "129.1 cm × 194 cm",
    artworkType: "painting",
  },
  {
    title: "Alchemy",
    artistSlug: "jackson-pollock",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1947,
    medium: "Oil, aluminum, alkyd enamel paint with sand, pebbles, fibers on canvas",
    dimensions: "114.6 cm × 221.3 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Alchemy_(Pollock)",
  },
  {
    title: "Bird in Space",
    artistSlug: "constantin-brancusi",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1932,
    medium: "Polished bronze",
    dimensions: "153 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Bird_in_Space",
  },
  {
    title: "The Poet",
    artistSlug: "pablo-picasso",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1911,
    medium: "Oil on canvas",
    dimensions: "131.2 cm × 89.5 cm",
    artworkType: "painting",
  },
  {
    title: "Birth of Liquid Desires",
    artistSlug: "salvador-dali",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1932,
    medium: "Oil and collage on canvas",
    dimensions: "96.1 cm × 112.3 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Birth_of_Liquid_Desires",
  },
  {
    title: "The Moon Woman",
    artistSlug: "jackson-pollock",
    museumId: "peggy-guggenheim-collection-venice",
    year: 1942,
    medium: "Oil on canvas",
    dimensions: "175.2 cm × 109.3 cm",
    artworkType: "painting",
  },

  // ===== PALAZZO DUCALE / DOGE'S PALACE (Venice) =====
  {
    title: "Paradise",
    artistSlug: "tintoretto",
    museumId: "palazzo-ducale-venice",
    year: 1592,
    medium: "Oil on canvas",
    dimensions: "2200 cm × 900 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Il_Paradiso_(Tintoretto)",
  },
  {
    title: "The Apotheosis of Venice",
    artistSlug: "paolo-veronese",
    museumId: "palazzo-ducale-venice",
    year: 1585,
    medium: "Oil on canvas",
    artworkType: "painting",
  },
  {
    title: "The Rape of Europa",
    artistSlug: "paolo-veronese",
    museumId: "palazzo-ducale-venice",
    year: 1580,
    medium: "Oil on canvas",
    dimensions: "240 cm × 303 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Rape_of_Europa_(Veronese)",
  },

  // ===== PALAZZO VECCHIO (Florence) =====
  {
    title: "Genius of Victory",
    artistSlug: "michelangelo",
    museumId: "palazzo-vecchio-florence",
    year: 1534,
    medium: "Marble",
    dimensions: "261 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Genius_of_Victory",
  },
  {
    title: "Judith and Holofernes",
    artistSlug: "donatello",
    museumId: "palazzo-vecchio-florence",
    year: 1460,
    medium: "Bronze",
    dimensions: "236 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Judith_and_Holofernes_(Donatello)",
  },

  // ===== GALLERIA NAZIONALE D'ARTE MODERNA (Rome) =====
  {
    title: "The Three Ages of Woman",
    artistSlug: "gustav-klimt",
    museumId: "galleria-nazionale-arte-moderna-rome",
    year: 1905,
    medium: "Oil on canvas",
    dimensions: "180 cm × 180 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Three_Ages_of_Woman_(Klimt)",
  },
  {
    title: "L'Arlésienne",
    artistSlug: "van-gogh",
    museumId: "galleria-nazionale-arte-moderna-rome",
    year: 1890,
    medium: "Oil on canvas",
    dimensions: "65 cm × 54 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/L%27Arl%C3%A9sienne_(painting)",
  },
  {
    title: "Unique Forms of Continuity in Space",
    artistSlug: "umberto-boccioni",
    museumId: "galleria-nazionale-arte-moderna-rome",
    year: 1913,
    medium: "Bronze",
    dimensions: "121.3 cm × 88.9 cm × 40 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Unique_Forms_of_Continuity_in_Space",
  },

  // ===== MUSEO DEL NOVECENTO (Milan) =====
  {
    title: "The Fourth Estate",
    artistSlug: null, // Giuseppe Pellizza da Volpedo - not in DB
    museumId: "museo-del-novecento-milan",
    year: 1901,
    medium: "Oil on canvas",
    dimensions: "293 cm × 545 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Fourth_Estate_(painting)",
  },

  // ===== MUSÉE JACQUEMART-ANDRÉ (Paris) =====
  {
    title: "Saint George and the Dragon",
    artistSlug: null, // Paolo Uccello - not in DB
    museumId: "musee-jacquemart-andre-paris",
    year: 1470,
    medium: "Oil on canvas",
    dimensions: "52 cm × 90 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Saint_George_and_the_Dragon_(Uccello)",
  },
  {
    title: "Ecce Homo",
    artistSlug: "andrea-mantegna",
    museumId: "musee-jacquemart-andre-paris",
    year: 1500,
    medium: "Tempera on canvas",
    dimensions: "54 cm × 42 cm",
    artworkType: "painting",
  },

  // ===== GALLERIA SABAUDA / ROYAL MUSEUMS OF TURIN =====
  {
    title: "Saint Francis Receiving the Stigmata",
    artistSlug: "jan-van-eyck",
    museumId: "royal-museums-turin",
    year: 1432,
    medium: "Oil on panel",
    dimensions: "29.3 cm × 33.4 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Saint_Francis_of_Assisi_Receiving_the_Stigmata_(van_Eyck)",
  },

  // ===== VILLA FARNESINA (Rome) =====
  {
    title: "The Triumph of Galatea",
    artistSlug: "raphael",
    museumId: "villa-farnesina-rome",
    year: 1512,
    medium: "Fresco",
    dimensions: "295 cm × 225 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Triumph_of_Galatea",
  },
];

async function main() {
  console.log(`Seeding ${artworks.length} artworks...\n`);

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const artwork of artworks) {
    const slug = createSlug(artwork.title, artwork.artistSlug || undefined);

    try {
      // Check if artwork already exists
      const existing = await prisma.artwork.findUnique({ where: { slug } });
      if (existing) {
        console.log(`- Skipped (exists): ${artwork.title}`);
        skipped++;
        continue;
      }

      // Verify museum exists
      const museum = await prisma.museum.findUnique({
        where: { id: artwork.museumId },
      });
      if (!museum) {
        console.log(`✗ Museum not found: ${artwork.museumId} for ${artwork.title}`);
        errors++;
        continue;
      }

      // Look up artist by slug (if specified)
      let artistId: string | null = null;
      if (artwork.artistSlug) {
        const artist = await prisma.artist.findUnique({
          where: { slug: artwork.artistSlug },
        });
        if (!artist) {
          console.log(`✗ Artist not found: ${artwork.artistSlug} for ${artwork.title}`);
          errors++;
          continue;
        }
        artistId = artist.id;
      }

      await prisma.artwork.create({
        data: {
          id: slug,
          slug,
          title: artwork.title,
          artistId,
          museumId: artwork.museumId,
          year: artwork.year,
          medium: artwork.medium,
          dimensions: artwork.dimensions,
          description: artwork.description,
          wikipediaUrl: artwork.wikipediaUrl,
          artworkType: artwork.artworkType || "painting",
          isPermanent: true,
          searchVolumeTier: 2,
          updatedAt: new Date(),
        },
      });

      console.log(`✓ Created: ${artwork.title} (${slug})`);
      created++;
    } catch (error: any) {
      console.error(`✗ Error creating ${artwork.title}:`, error.message);
      errors++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Created: ${created}`);
  console.log(`Skipped (already exist): ${skipped}`);
  console.log(`Errors: ${errors}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
