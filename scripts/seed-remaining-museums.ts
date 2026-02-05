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
  artistSlug: string | null;
  museumId: string;
  year: number | null;
  medium: string | null;
  dimensions?: string;
  description?: string;
  wikipediaUrl?: string;
  artworkType?: string;
}

const artworks: ArtworkSeed[] = [
  // ===== MUSEO NAZIONALE ROMANO (Rome) =====
  {
    title: "Boxer at Rest",
    artistSlug: null, // Unknown Hellenistic Greek sculptor
    museumId: "museo-nazionale-romano",
    year: -300, // c. 330-50 BCE
    medium: "Bronze with copper inlays",
    dimensions: "128 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Boxer_at_Rest",
  },
  {
    title: "Ludovisi Throne",
    artistSlug: null, // Unknown Greek sculptor
    museumId: "museo-nazionale-romano",
    year: -460, // c. 460 BCE
    medium: "White marble bas-relief",
    dimensions: "90 cm × 142 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ludovisi_Throne",
  },

  // ===== GALLERIA SPADA (Rome) =====
  {
    title: "Portrait of Cardinal Bernardino Spada",
    artistSlug: "guido-reni",
    museumId: "galleria-spada-rome",
    year: 1631,
    medium: "Oil on canvas",
    dimensions: "222 cm × 147 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Galleria_Spada",
  },
  {
    title: "The Death of Dido",
    artistSlug: "guercino",
    museumId: "galleria-spada-rome",
    year: 1631,
    medium: "Oil on canvas",
    dimensions: "237 cm × 335 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Death_of_Dido",
  },
  {
    title: "Saint Cecilia",
    artistSlug: "artemisia-gentileschi",
    museumId: "galleria-spada-rome",
    year: 1618,
    medium: "Oil on canvas",
    dimensions: "78.5 cm × 108 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Saint_Cecilia_(Artemisia_Gentileschi)",
  },

  // ===== MAXXI (Rome) =====
  {
    title: "Widow",
    artistSlug: "anish-kapoor",
    museumId: "maxxi-rome",
    year: 2004,
    medium: "PVC and steel",
    dimensions: "461 cm × 1463 cm × 461 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/MAXXI",
  },

  // ===== PERGAMON MUSEUM (Berlin) =====
  {
    title: "Ishtar Gate",
    artistSlug: null, // Ancient Babylonian
    museumId: "pergamon-museum-berlin",
    year: -575, // c. 575 BCE
    medium: "Glazed bricks with molded reliefs",
    dimensions: "14 m height × 30 m width",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ishtar_Gate",
  },
  {
    title: "Pergamon Altar",
    artistSlug: null, // Ancient Greek
    museumId: "pergamon-museum-berlin",
    year: -170, // c. 180-160 BCE
    medium: "Marble",
    dimensions: "35.74 m × 33.4 m",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Pergamon_Altar",
  },
  {
    title: "Market Gate of Miletus",
    artistSlug: null, // Ancient Roman
    museumId: "pergamon-museum-berlin",
    year: 120, // c. 120 CE
    medium: "Marble",
    dimensions: "16.73 m height × 28.92 m width",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Market_Gate_of_Miletus",
  },

  // ===== NEUES MUSEUM (Berlin) =====
  {
    title: "Bust of Nefertiti",
    artistSlug: null, // Thutmose - ancient Egyptian
    museumId: "neues-museum-berlin",
    year: -1345, // c. 1345 BCE
    medium: "Painted stucco-coated limestone",
    dimensions: "49 cm × 24.5 cm × 35 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Nefertiti_Bust",
  },
  {
    title: "Berlin Gold Hat",
    artistSlug: null, // Unknown Bronze Age craftsman
    museumId: "neues-museum-berlin",
    year: -900, // c. 1000-800 BCE
    medium: "Gold leaf",
    dimensions: "74.5 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Berlin_Gold_Hat",
  },

  // ===== BODE MUSEUM (Berlin) =====
  {
    title: "Pazzi Madonna",
    artistSlug: "donatello",
    museumId: "bode-museum-berlin",
    year: 1422,
    medium: "Marble relief",
    dimensions: "74.5 cm × 73 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Pazzi_Madonna",
  },
  {
    title: "The Four Evangelists",
    artistSlug: "tilman-riemenschneider",
    museumId: "bode-museum-berlin",
    year: 1491,
    medium: "Limewood",
    dimensions: "72.5-77.5 cm tall each",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Tilman_Riemenschneider",
  },

  // ===== MUSEO EGIZIO (Turin) =====
  {
    title: "Statue of Ramesses II",
    artistSlug: null, // Ancient Egyptian
    museumId: "museo-egizio-turin",
    year: -1250, // c. 1279-1213 BCE
    medium: "Granodiorite",
    dimensions: "196 cm × 70 cm × 105 cm",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Museo_Egizio",
  },
  {
    title: "Book of the Dead of Kha",
    artistSlug: null, // Ancient Egyptian
    museumId: "museo-egizio-turin",
    year: -1400, // c. 1425-1353 BCE
    medium: "Papyrus with hieroglyphs",
    dimensions: "14 m length",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Tomb_of_Kha_and_Merit",
  },

  // ===== PALAZZO MADAMA (Turin) =====
  {
    title: "Turin-Milan Hours",
    artistSlug: "jan-van-eyck", // Attributed to Hand G
    museumId: "palazzo-madama-turin",
    year: 1420,
    medium: "Illuminated manuscript on vellum",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Turin%E2%80%93Milan_Hours",
  },

  // ===== MUSEO ARCHEOLOGICO NAZIONALE (Naples) =====
  {
    title: "Alexander Mosaic",
    artistSlug: null, // Unknown Roman/Greek artist
    museumId: "museo-archeologico-nazionale-naples",
    year: -100, // c. 120-100 BCE
    medium: "Opus vermiculatum mosaic",
    dimensions: "583 cm × 325 cm",
    artworkType: "painting",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Alexander_Mosaic",
  },
  {
    title: "Farnese Hercules",
    artistSlug: null, // Glycon after Lysippos
    museumId: "museo-archeologico-nazionale-naples",
    year: 216, // Early 3rd century CE
    medium: "Marble",
    dimensions: "317 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Farnese_Hercules",
  },
  {
    title: "Farnese Bull",
    artistSlug: null, // Roman copy after Apollonius
    museumId: "museo-archeologico-nazionale-naples",
    year: 200, // 3rd century CE
    medium: "Marble",
    dimensions: "370 cm height",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Farnese_Bull",
  },

  // ===== MUSÉE DE L'ARMÉE (Paris) =====
  {
    title: "Tomb of Napoleon",
    artistSlug: null, // Louis Visconti architect
    museumId: "musee-armee-invalides-paris",
    year: 1861,
    medium: "Red quartzite sarcophagus, gilded bronze, marble",
    dimensions: "4 m length, 6 m deep crypt",
    artworkType: "sculpture",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Napoleon%27s_tomb",
  },
];

async function main() {
  console.log(`Seeding ${artworks.length} artworks for remaining museums...\n`);

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
