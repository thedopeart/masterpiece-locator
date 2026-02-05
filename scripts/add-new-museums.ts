import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newMuseums = [
  // Italy - Rome
  {
    id: "museo-nazionale-romano",
    slug: "museo-nazionale-romano",
    name: "Museo Nazionale Romano",
    city: "Rome",
    country: "Italy",
  },
  {
    id: "galleria-spada-rome",
    slug: "galleria-spada-rome",
    name: "Galleria Spada",
    city: "Rome",
    country: "Italy",
  },
  {
    id: "villa-farnesina-rome",
    slug: "villa-farnesina-rome",
    name: "Villa Farnesina",
    city: "Rome",
    country: "Italy",
  },
  {
    id: "maxxi-rome",
    slug: "maxxi-rome",
    name: "MAXXI - National Museum of 21st Century Arts",
    city: "Rome",
    country: "Italy",
  },
  {
    id: "galleria-nazionale-arte-moderna-rome",
    slug: "galleria-nazionale-arte-moderna-rome",
    name: "Galleria Nazionale d'Arte Moderna e Contemporanea",
    city: "Rome",
    country: "Italy",
  },

  // Italy - Milan
  {
    id: "museo-del-novecento-milan",
    slug: "museo-del-novecento-milan",
    name: "Museo del Novecento",
    city: "Milan",
    country: "Italy",
  },
  {
    id: "triennale-milano",
    slug: "triennale-milano",
    name: "Triennale Milano",
    city: "Milan",
    country: "Italy",
  },
  {
    id: "palazzo-reale-milan",
    slug: "palazzo-reale-milan",
    name: "Palazzo Reale",
    city: "Milan",
    country: "Italy",
  },

  // Italy - Turin
  {
    id: "museo-egizio-turin",
    slug: "museo-egizio-turin",
    name: "Museo Egizio",
    city: "Turin",
    country: "Italy",
  },
  {
    id: "palazzo-madama-turin",
    slug: "palazzo-madama-turin",
    name: "Palazzo Madama - Museo Civico d'Arte Antica",
    city: "Turin",
    country: "Italy",
  },
  {
    id: "royal-museums-turin",
    slug: "royal-museums-turin",
    name: "Royal Museums of Turin",
    city: "Turin",
    country: "Italy",
  },

  // Italy - Naples
  {
    id: "museo-capodimonte-naples",
    slug: "museo-capodimonte-naples",
    name: "Museo e Real Bosco di Capodimonte",
    city: "Naples",
    country: "Italy",
  },
  {
    id: "museo-archeologico-nazionale-naples",
    slug: "museo-archeologico-nazionale-naples",
    name: "Museo Archeologico Nazionale di Napoli",
    city: "Naples",
    country: "Italy",
  },

  // Italy - Venice
  {
    id: "peggy-guggenheim-collection-venice",
    slug: "peggy-guggenheim-collection-venice",
    name: "Peggy Guggenheim Collection",
    city: "Venice",
    country: "Italy",
  },
  {
    id: "palazzo-ducale-venice",
    slug: "palazzo-ducale-venice",
    name: "Palazzo Ducale (Doge's Palace)",
    city: "Venice",
    country: "Italy",
  },

  // Italy - Florence
  {
    id: "palazzo-vecchio-florence",
    slug: "palazzo-vecchio-florence",
    name: "Palazzo Vecchio",
    city: "Florence",
    country: "Italy",
  },

  // Germany - Berlin
  {
    id: "pergamon-museum-berlin",
    slug: "pergamon-museum-berlin",
    name: "Pergamon Museum",
    city: "Berlin",
    country: "Germany",
  },
  {
    id: "neues-museum-berlin",
    slug: "neues-museum-berlin",
    name: "Neues Museum",
    city: "Berlin",
    country: "Germany",
  },
  {
    id: "bode-museum-berlin",
    slug: "bode-museum-berlin",
    name: "Bode Museum",
    city: "Berlin",
    country: "Germany",
  },

  // France - Paris
  {
    id: "musee-rodin-paris",
    slug: "musee-rodin-paris",
    name: "Musée Rodin",
    city: "Paris",
    country: "France",
  },
  {
    id: "musee-armee-invalides-paris",
    slug: "musee-armee-invalides-paris",
    name: "Musée de l'Armée - Les Invalides",
    city: "Paris",
    country: "France",
  },
  {
    id: "musee-jacquemart-andre-paris",
    slug: "musee-jacquemart-andre-paris",
    name: "Musée Jacquemart-André",
    city: "Paris",
    country: "France",
  },
];

async function main() {
  console.log(`Adding ${newMuseums.length} new museums...`);

  for (const museum of newMuseums) {
    try {
      await prisma.museum.create({
        data: {
          ...museum,
          updatedAt: new Date(),
        },
      });
      console.log(`✓ Added: ${museum.name}`);
    } catch (error: any) {
      if (error.code === "P2002") {
        console.log(`- Skipped (exists): ${museum.name}`);
      } else {
        console.error(`✗ Error adding ${museum.name}:`, error.message);
      }
    }
  }

  console.log("\nDone!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
