import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Museum enrichment data gathered from research
const museumEnrichments = [
  // Rome museums
  {
    slug: "museo-nazionale-romano",
    address: "Largo di Villa Peretti, 1, 00185 Roma, Italy",
    websiteUrl: "https://museonazionaleromano.beniculturali.it/en/",
    ticketPriceRange: "€8-16",
    latitude: 41.9013,
    longitude: 12.4983,
    description:
      "Rome's largest archaeological museum complex spans four locations including Palazzo Massimo and the Baths of Diocletian. The collection holds over 300,000 pieces of ancient Roman art, including the world's best preserved Roman frescoes from the Villa of Livia, classical sculptures like the Lancellotti Discobulus, and exceptional mosaics from the Republican to Imperial eras.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:30-19:45",
      wednesday: "10:30-19:45",
      thursday: "10:30-19:45",
      friday: "10:30-19:45",
      saturday: "10:30-19:45",
      sunday: "10:30-19:45",
    },
  },
  {
    slug: "galleria-spada-rome",
    address: "Piazza Capo di Ferro, 13, 00186 Roma, Italy",
    websiteUrl: "https://galleriaspada.cultura.gov.it/en/",
    ticketPriceRange: "€2-6",
    latitude: 41.8938,
    longitude: 12.4716,
    description:
      "This intimate 17th-century gallery houses Cardinal Bernardino Spada's personal collection of Baroque masterpieces by Caravaggio, Guercino, Titian, Rubens, and Artemisia Gentileschi. The palazzo is also famous for Borromini's forced perspective gallery, an optical illusion that makes an 8-meter corridor appear 37 meters long.",
    hoursOfOperation: {
      monday: "8:30-19:30",
      tuesday: "closed",
      wednesday: "8:30-19:30",
      thursday: "8:30-19:30",
      friday: "8:30-19:30",
      saturday: "8:30-19:30",
      sunday: "8:30-19:30",
    },
  },
  {
    slug: "villa-farnesina-rome",
    address: "Via della Lungara, 230, 00165 Roma, Italy",
    websiteUrl: "https://www.villafarnesina.it/en/",
    ticketPriceRange: "€9-12",
    latitude: 41.8936,
    longitude: 12.4673,
    description:
      "This Renaissance villa built for banker Agostino Chigi between 1506 and 1510 contains some of Raphael's finest frescoes, including The Triumph of Galatea and the Loggia of Cupid and Psyche. Other High Renaissance masters such as Peruzzi, Sebastiano del Piombo, and Il Sodoma contributed works throughout the villa.",
    hoursOfOperation: {
      monday: "9:00-14:00",
      tuesday: "9:00-14:00",
      wednesday: "9:00-14:00",
      thursday: "9:00-14:00",
      friday: "9:00-14:00",
      saturday: "9:00-17:00",
      sunday: "closed",
    },
  },
  {
    slug: "maxxi-rome",
    address: "Via Guido Reni, 4a, 00196 Roma, Italy",
    websiteUrl: "https://www.maxxi.art/en/",
    ticketPriceRange: "Free-€12",
    latitude: 41.9282,
    longitude: 12.4669,
    description:
      "Italy's first national museum dedicated to contemporary creativity, housed in Zaha Hadid's Stirling Prize-winning building. MAXXI contains two museums covering art and architecture, with works by Warhol, Kapoor, and Richter, plus architectural archives from Carlo Scarpa and Aldo Rossi.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "11:00-19:00",
      wednesday: "11:00-19:00",
      thursday: "11:00-19:00",
      friday: "11:00-19:00",
      saturday: "11:00-19:00",
      sunday: "11:00-19:00",
    },
  },
  {
    slug: "galleria-nazionale-arte-moderna-rome",
    address: "Viale delle Belle Arti, 131, 00197 Roma, Italy",
    websiteUrl: "https://gnamc.cultura.gov.it/en/",
    ticketPriceRange: "€2-10",
    latitude: 41.9168,
    longitude: 12.4758,
    description:
      "Founded in 1883, this is Italy's most important collection of 19th through 21st century art, with over 20,000 works. The collection spans Neoclassicism to Arte Povera, featuring Italian masters like Balla, Boccioni, and De Chirico alongside international artists including Van Gogh, Monet, and Pollock.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "8:30-19:30",
      wednesday: "8:30-19:30",
      thursday: "8:30-19:30",
      friday: "8:30-19:30",
      saturday: "8:30-19:30",
      sunday: "8:30-19:30",
    },
  },

  // Milan museums
  {
    slug: "museo-del-novecento-milan",
    address: "Piazza del Duomo, 8, 20123 Milano MI, Italy",
    websiteUrl: "https://www.museonovecento.it/en/",
    ticketPriceRange: "€8-10",
    latitude: 45.46339,
    longitude: 9.19023,
    description:
      "Housed in the Palazzo dell'Arengario overlooking Piazza Duomo, this museum contains one of Italy's most important collections of 20th-century art with over 4,000 works. The collection spans Futurism to Arte Povera, featuring Italian masters like Lucio Fontana, Giorgio de Chirico, and Morandi, along with international artists including Picasso, Kandinsky, and Mondrian.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "9:30-19:30",
      wednesday: "9:30-19:30",
      thursday: "9:30-22:30",
      friday: "9:30-19:30",
      saturday: "9:30-22:30",
      sunday: "9:30-19:30",
    },
  },
  {
    slug: "triennale-milano",
    address: "Viale Emilio Alemagna, 6, 20121 Milano MI, Italy",
    websiteUrl: "https://triennale.org/en",
    ticketPriceRange: "€12-18",
    latitude: 45.4722367,
    longitude: 9.173607,
    description:
      "An international cultural institution housed in the Palazzo dell'Arte within Sempione Park, dedicated to design, architecture, visual arts, and performing arts. The permanent Italian Design Museum features over 1,600 design objects from 1927 to present, making it one of Europe's largest design museums.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:30-20:00",
      wednesday: "10:30-20:00",
      thursday: "10:30-20:00",
      friday: "10:30-20:00",
      saturday: "10:30-20:00",
      sunday: "10:30-20:00",
    },
  },
  {
    slug: "palazzo-reale-milan",
    address: "Piazza del Duomo, 12, 20122 Milano MI, Italy",
    websiteUrl: "https://www.palazzorealemilano.it/en/homepage",
    ticketPriceRange: "€6-15",
    latitude: 45.4632,
    longitude: 9.1911,
    description:
      "Once the seat of Milanese government for centuries, this historic palace now serves as one of Milan's premier exhibition spaces spanning 7,000 square meters. It hosts major international art exhibitions featuring works by masters from the Renaissance to contemporary artists, with over 1,500 masterpieces displayed annually across rotating shows.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:00-19:30",
      wednesday: "10:00-19:30",
      thursday: "10:00-22:30",
      friday: "10:00-19:30",
      saturday: "10:00-19:30",
      sunday: "10:00-19:30",
    },
  },

  // Turin museums
  {
    slug: "museo-egizio-turin",
    address: "Via Accademia delle Scienze 6, 10123 Torino, Italy",
    websiteUrl: "https://www.museoegizio.it/en/",
    ticketPriceRange: "€18-25",
    latitude: 45.0677,
    longitude: 7.684,
    description:
      "The oldest Egyptian museum in the world, founded in 1824, housing the second-largest collection of ancient Egyptian artifacts outside of Cairo. The collection includes over 30,000 items, featuring the intact Tomb of Kha and Merit, the Turin King Papyrus, monumental statuary, and an exceptional collection of papyri.",
    hoursOfOperation: {
      monday: "9:00-14:00",
      tuesday: "9:00-18:30",
      wednesday: "9:00-18:30",
      thursday: "9:00-18:30",
      friday: "9:00-18:30",
      saturday: "9:00-18:30",
      sunday: "9:00-18:30",
    },
  },
  {
    slug: "palazzo-madama-turin",
    address: "Piazza Castello, 10122 Torino, Italy",
    websiteUrl: "https://www.palazzomadamatorino.it/en/",
    ticketPriceRange: "€8-10",
    latitude: 45.0692,
    longitude: 7.6848,
    description:
      "A civic museum of ancient art housed in a UNESCO World Heritage palace combining Roman foundations, medieval castle, and Baroque facade. The collection spans over 70,000 works from the Byzantine period to the 19th century, including paintings by Antonello da Messina, the Turin-Milan Hours manuscript, and one of Italy's finest ceramics collections.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:00-18:00",
      wednesday: "10:00-18:00",
      thursday: "10:00-18:00",
      friday: "10:00-18:00",
      saturday: "10:00-18:00",
      sunday: "10:00-18:00",
    },
  },
  {
    slug: "royal-museums-turin",
    address: "Piazzetta Reale 1, 10124 Torino, Italy",
    websiteUrl: "https://museireali.beniculturali.it/en/",
    ticketPriceRange: "€2-15",
    latitude: 45.0729,
    longitude: 7.6862,
    description:
      "A vast museum complex comprising the Royal Palace, Royal Armoury, Galleria Sabauda, Royal Library, and Museum of Antiquities. The collections include over 700 paintings from Italian and European masters, one of Europe's richest arms collections, and Leonardo da Vinci autographs in the Royal Library.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "9:00-19:00",
      wednesday: "9:00-19:00",
      thursday: "9:00-19:00",
      friday: "9:00-19:00",
      saturday: "9:00-19:00",
      sunday: "9:00-19:00",
    },
  },

  // Naples museums
  {
    slug: "museo-capodimonte-naples",
    address: "Via Miano 2, 80131 Napoli, Italy",
    websiteUrl: "https://capodimonte.cultura.gov.it/?lang=en",
    ticketPriceRange: "€15",
    latitude: 40.867,
    longitude: 14.2505,
    description:
      "One of Italy's largest art museums housed in a grand Bourbon palace, featuring 47,000 works across 160 rooms. The collection includes masterpieces by Caravaggio, Raphael, Titian, and Masaccio, along with the magnificent Farnese collection and the finest holdings of Neapolitan School paintings.",
    hoursOfOperation: {
      monday: "8:30-19:30",
      tuesday: "8:30-19:30",
      wednesday: "closed",
      thursday: "8:30-19:30",
      friday: "8:30-22:30",
      saturday: "8:30-19:30",
      sunday: "8:30-19:30",
    },
  },
  {
    slug: "museo-archeologico-nazionale-naples",
    address: "Piazza Museo 19, 80135 Napoli, Italy",
    websiteUrl: "https://www.museoarcheologiconapoli.it/en/",
    ticketPriceRange: "€2-20",
    latitude: 40.852,
    longitude: 14.2503,
    description:
      "One of the world's most important archaeological museums, housing the most extensive collection of artifacts from Pompeii and Herculaneum. The museum features the Farnese Collection with monumental Roman sculptures including the Farnese Hercules, the famous Alexander Mosaic, and the third most important Egyptian collection in the world.",
    hoursOfOperation: {
      monday: "9:00-19:00",
      tuesday: "closed",
      wednesday: "9:00-19:00",
      thursday: "9:00-19:00",
      friday: "9:00-19:00",
      saturday: "9:00-19:00",
      sunday: "9:00-19:00",
    },
  },

  // Venice museums
  {
    slug: "peggy-guggenheim-collection-venice",
    address: "Palazzo Venier dei Leoni, Dorsoduro 701, 30123 Venice, Italy",
    websiteUrl: "https://www.guggenheim-venice.it/en/",
    ticketPriceRange: "€17.50-19",
    latitude: 45.4308,
    longitude: 12.3317,
    description:
      "One of Italy's most important museums for European and American art of the first half of the 20th century. Housed in the 18th-century Palazzo Venier dei Leoni on the Grand Canal, the collection features works by Picasso, Pollock, Dalí, and other masters of Cubism, Surrealism, and Abstract Expressionism. The museum includes a sculpture garden and the Schulhof Collection gallery.",
    hoursOfOperation: {
      monday: "10:00-18:00",
      tuesday: "closed",
      wednesday: "10:00-18:00",
      thursday: "10:00-18:00",
      friday: "10:00-18:00",
      saturday: "10:00-18:00",
      sunday: "10:00-18:00",
    },
  },
  {
    slug: "palazzo-ducale-venice",
    address: "Piazza San Marco 1, 30124 Venice, Italy",
    websiteUrl: "https://palazzoducale.visitmuve.it/en/",
    ticketPriceRange: "€30-35",
    latitude: 45.4339,
    longitude: 12.34,
    description:
      "A masterpiece of Venetian Gothic architecture and one of Venice's main landmarks. The palace served as the residence of the Doge and the seat of Venetian government for centuries. It houses Tintoretto's massive Paradise painting, works by Titian and Veronese, the Giant's Staircase, and the famous Bridge of Sighs connecting to the historic prison.",
    hoursOfOperation: {
      monday: "9:00-18:00",
      tuesday: "9:00-18:00",
      wednesday: "9:00-18:00",
      thursday: "9:00-18:00",
      friday: "9:00-18:00",
      saturday: "9:00-18:00",
      sunday: "9:00-18:00",
    },
  },

  // Florence museums
  {
    slug: "palazzo-vecchio-florence",
    address: "Piazza della Signoria, 50122 Florence, Italy",
    websiteUrl: "https://musefirenze.it/en/museum/museo-di-palazzo-vecchio/",
    ticketPriceRange: "€8-12",
    latitude: 43.7693,
    longitude: 11.2562,
    description:
      "Florence's iconic medieval fortress-palace with its 94-meter tower, serving as the city hall since the 14th century. The museum features the massive Salone dei Cinquecento where Leonardo and Michelangelo once worked, Michelangelo's Genius of Victory sculpture, Renaissance apartments, and the Hall of Maps with its rotating globe.",
    hoursOfOperation: {
      monday: "9:00-19:00",
      tuesday: "9:00-19:00",
      wednesday: "9:00-19:00",
      thursday: "9:00-14:00",
      friday: "9:00-19:00",
      saturday: "9:00-19:00",
      sunday: "9:00-19:00",
    },
  },

  // Berlin museums
  {
    slug: "pergamon-museum-berlin",
    address: "Bodestrasse 1-3, 10178 Berlin, Germany",
    websiteUrl: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/",
    ticketPriceRange: "€14-16",
    latitude: 52.521187,
    longitude: 13.39676,
    description:
      "The Pergamon Museum houses three world-class collections: the Collection of Classical Antiquities, the Museum of the Ancient Near East, and the Museum of Islamic Art. Its most famous exhibits include the reconstructed Ishtar Gate of Babylon and the Pergamon Altar. Note: The main building is closed for renovation until at least 2027.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:00-18:00",
      wednesday: "10:00-18:00",
      thursday: "10:00-18:00",
      friday: "10:00-18:00",
      saturday: "10:00-18:00",
      sunday: "10:00-18:00",
    },
  },
  {
    slug: "neues-museum-berlin",
    address: "Bodestrasse 1-3, 10178 Berlin, Germany",
    websiteUrl: "https://www.smb.museum/en/museums-institutions/neues-museum/",
    ticketPriceRange: "€14-20",
    latitude: 52.520111,
    longitude: 13.397499,
    description:
      "The Neues Museum houses the Egyptian Museum and Papyrus Collection, featuring the world-famous bust of Queen Nefertiti created around 1340 BC. The collection includes well-preserved mummies, sarcophagi, hieroglyphs, and artifacts from ancient Egypt, along with prehistoric and early history exhibitions.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:00-18:00",
      wednesday: "10:00-18:00",
      thursday: "10:00-20:00",
      friday: "10:00-18:00",
      saturday: "10:00-18:00",
      sunday: "10:00-18:00",
    },
  },
  {
    slug: "bode-museum-berlin",
    address: "Am Kupfergraben, 10117 Berlin, Germany",
    websiteUrl: "https://www.smb.museum/en/museums-institutions/bode-museum/",
    ticketPriceRange: "€14",
    latitude: 52.5198,
    longitude: 13.3902,
    description:
      "The Bode Museum contains the Sculpture Collection featuring European sculpture from the early Middle Ages to the 18th century, including works by Donatello and Canova. It also houses one of the world's most important numismatic collections with over 500,000 coins and medals, plus an outstanding collection of Byzantine art spanning the 3rd to 15th centuries.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "closed",
      wednesday: "10:00-17:00",
      thursday: "10:00-17:00",
      friday: "10:00-17:00",
      saturday: "10:00-18:00",
      sunday: "10:00-18:00",
    },
  },

  // Paris museums
  {
    slug: "musee-rodin-paris",
    address: "77 Rue de Varenne, 75007 Paris, France",
    websiteUrl: "https://www.musee-rodin.fr/en",
    ticketPriceRange: "€13-15",
    latitude: 48.855133,
    longitude: 2.315818,
    description:
      "The Rodin Museum is housed in the Hôtel Biron, an 18th-century mansion where Auguste Rodin lived and worked. The collection includes over 6,000 sculptures, including iconic works like The Thinker and The Kiss, displayed in elegant indoor galleries and a 3-hectare sculpture garden.",
    hoursOfOperation: {
      monday: "closed",
      tuesday: "10:00-18:30",
      wednesday: "10:00-18:30",
      thursday: "10:00-18:30",
      friday: "10:00-18:30",
      saturday: "10:00-18:30",
      sunday: "10:00-18:30",
    },
  },
  {
    slug: "musee-armee-invalides-paris",
    address: "129 Rue de Grenelle, 75007 Paris, France",
    websiteUrl: "https://www.musee-armee.fr/en/home.html",
    ticketPriceRange: "€10-17",
    latitude: 48.853,
    longitude: 2.3075,
    description:
      "The Army Museum at Les Invalides is one of the world's largest military history museums, spanning from antiquity to the present day. The complex includes Napoleon's tomb in the Dome Church, the Museum of the Order of the Liberation, and an impressive collection of arms, armor, and military artifacts.",
    hoursOfOperation: {
      monday: "10:00-18:00",
      tuesday: "10:00-18:00",
      wednesday: "10:00-18:00",
      thursday: "10:00-18:00",
      friday: "10:00-18:00",
      saturday: "10:00-18:00",
      sunday: "10:00-18:00",
    },
  },
  {
    slug: "musee-jacquemart-andre-paris",
    address: "158 Boulevard Haussmann, 75008 Paris, France",
    websiteUrl: "https://www.musee-jacquemart-andre.com/en",
    ticketPriceRange: "€10-17",
    latitude: 48.8754,
    longitude: 2.3105,
    description:
      "The Jacquemart-André Museum occupies a lavish 19th-century mansion that once belonged to art collectors Édouard André and Nélie Jacquemart. The collection features Italian Renaissance masterpieces, 18th-century French art, and Dutch Golden Age paintings, all displayed in opulent period rooms.",
    hoursOfOperation: {
      monday: "10:00-18:00",
      tuesday: "10:00-18:00",
      wednesday: "10:00-18:00",
      thursday: "10:00-18:00",
      friday: "10:00-22:00",
      saturday: "10:00-19:00",
      sunday: "10:00-19:00",
    },
  },
];

async function main() {
  console.log(`Enriching ${museumEnrichments.length} museums with visitor information...\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const museum of museumEnrichments) {
    try {
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: {
          address: museum.address,
          websiteUrl: museum.websiteUrl,
          ticketPriceRange: museum.ticketPriceRange,
          latitude: museum.latitude,
          longitude: museum.longitude,
          description: museum.description,
          hoursOfOperation: museum.hoursOfOperation,
          updatedAt: new Date(),
        },
      });
      console.log(`✓ Enriched: ${result.name}`);
      successCount++;
    } catch (error: any) {
      if (error.code === "P2025") {
        console.log(`✗ Not found: ${museum.slug}`);
      } else {
        console.error(`✗ Error updating ${museum.slug}:`, error.message);
      }
      errorCount++;
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Successfully enriched: ${successCount}`);
  console.log(`Errors/not found: ${errorCount}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
