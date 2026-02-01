const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const museums = [
  // Batch 5 (25)
  { slug: "museo-civico-giovanni-fattori-livorno-italy", address: "Via San Jacopo in Acquaviva 65, 57127 Livorno, Italy", latitude: 43.5354, longitude: 10.3059, websiteUrl: "https://www.museofattori.livorno.it/" },
  { slug: "museo-arte-moderno", address: "Paseo de la Reforma y Gandhi s/n, Chapultepec, Mexico City, Mexico", latitude: 19.4267, longitude: -99.1810, websiteUrl: "https://mam.inba.gob.mx/" },
  { slug: "museo-opera-duomo-siena", address: "Piazza Duomo 8, 53100 Siena, Italy", latitude: 43.3177, longitude: 11.3289, websiteUrl: "https://operaduomo.siena.it/en/" },
  { slug: "museo-horne-florence-italy", address: "Via dei Benci 6, 50122 Florence, Italy", latitude: 43.7675, longitude: 11.2595, websiteUrl: "https://www.museohorne.it/en/" },
  { slug: "reina-sofia", address: "Calle Santa Isabel 52, 28012 Madrid, Spain", latitude: 40.4079, longitude: -3.6946, websiteUrl: "https://www.museoreinasofia.es/" },
  { slug: "museu-de-arte-assis-chateaubriand-mac-campina-gran", address: "Avenida Floriano Peixoto 718, Centro, Campina Grande, Paraíba, Brazil", latitude: -7.2273, longitude: -35.8818, websiteUrl: "https://museumaccg.org.br/" },
  { slug: "museu-nacional-de-belas-artes-rio-de-janeiro-brazi", address: "Avenida Rio Branco 199, Centro, Rio de Janeiro, RJ 20040-008, Brazil", latitude: -22.9053, longitude: -43.1721, websiteUrl: "https://www.mnba.gov.br/" },
  { slug: "museum-boijmans", address: "Museumpark 18-20, 3015 CX Rotterdam, Netherlands", latitude: 51.9117, longitude: 4.4722, websiteUrl: "https://www.boijmans.nl/en" },
  { slug: "museum-georg-schafer", address: "Brückenstraße 20, 97421 Schweinfurt, Germany", latitude: 50.0439, longitude: 10.2361, websiteUrl: "https://www.museumgeorgschaefer.de/" },
  { slug: "museum-kunstpalast-d252sseldorf-germany", address: "Ehrenhof 4-5, 40479 Düsseldorf, Germany", latitude: 51.2340, longitude: 6.7731, websiteUrl: "https://www.kunstpalast.de/en/" },
  { slug: "museum-ludwig-cologne-germany", address: "Bischofsgartenstraße 1, 50667 Cologne, Germany", latitude: 50.9408, longitude: 6.9600, websiteUrl: "https://www.museum-ludwig.de/en/home" },
  { slug: "museum-mayer-van-den-bergh-antwerp-belgium", address: "Lange Gasthuisstraat 19, 2000 Antwerpen, Belgium", latitude: 51.2154, longitude: 4.4054, websiteUrl: "https://museummayervandenbergh.be/en" },
  { slug: "museum-of-applied-arts-vienna-austria", address: "Stubenring 5, 1010 Vienna, Austria", latitude: 48.2074, longitude: 16.3818, websiteUrl: "https://www.mak.at/en" },
  { slug: "museum-of-fine-arts-houston-mfah-houston-tx-us", address: "1001 Bissonnet, Houston, TX 77005, USA", latitude: 29.7221, longitude: -95.3876, websiteUrl: "https://www.mfah.org/" },
  { slug: "museum-of-fine-arts-ghent-belgium", address: "Hofbouwlaan 28, 9000 Ghent, Belgium", latitude: 51.0380, longitude: 3.7242, websiteUrl: "https://www.mskgent.be/en" },
  { slug: "museum-ostwall-mo-dortmund-germany", address: "Leonie-Reygers-Terrace 2, 44137 Dortmund, Germany", latitude: 51.5078, longitude: 7.4700, websiteUrl: "https://www.dortmund.de" },
  { slug: "museumslandschaft-hessen-kassel-kassel-germany", address: "Schloss Wilhelmshöhe, Bad Wilhelmshöhe, 34131 Kassel, Germany", latitude: 51.3090, longitude: 9.4097, websiteUrl: "https://www.heritage-kassel.de/en" },
  { slug: "national-art-gallery-alexandros-soutzos-museum-ath", address: "50 Vasileos Konstantinou Street, 116 34 Athens, Greece", latitude: 37.9762, longitude: 23.7363, websiteUrl: "https://www.nationalgallery.gr/en/" },
  { slug: "national-gallery-for-foreign-art-sofia-bulgaria", address: "1 19th February Street, Alexander Nevsky Square, Sofia, Bulgaria", latitude: 42.6962, longitude: 23.3341, websiteUrl: "https://nationalgallery.bg/" },
  { slug: "national-gallery-in-prague-prague-czech-republic", address: "Staroměstské nám. 12, 110 15 Prague 1, Czech Republic", latitude: 50.1011, longitude: 14.4325, websiteUrl: "https://www.ngprague.cz/en" },
  { slug: "national-gallery-prague", address: "Staroměstské nám. 12, 110 15 Prague 1, Czech Republic", latitude: 50.1011, longitude: 14.4325, websiteUrl: "https://www.ngprague.cz/en" },
  { slug: "national-museum-cardiff-cardiff-uk", address: "Cathays Park, Cardiff CF10 3NP, Wales, UK", latitude: 51.4857, longitude: -3.1768, websiteUrl: "https://museum.wales/cardiff/" },
  { slug: "national-museum-krakow", address: "Al. 3 Maja 1, 30-062 Kraków, Poland", latitude: 50.0560, longitude: 19.9210, websiteUrl: "https://mnk.pl/en/" },
  { slug: "national-museum-of-ancient-art-mnaa-lisbon-portuga", address: "Rua das Janelas Verdes, 1249-017 Lisbon, Portugal", latitude: 38.7048, longitude: -9.1615, websiteUrl: "https://www.museudearteantiga.pt/" },
  { slug: "national-museum-of-art-of-romania-bucharest-romani", address: "Calea Victoriei 49-53, 010063 Bucharest, Romania", latitude: 44.4401, longitude: 26.0958, websiteUrl: "https://mnar.ro/en/" },

  // Batch 6 (25)
  { slug: "national-museum-of-fine-arts-of-algiers-algiers-al", address: "Rue Du Dr Laveran, Algiers, Algeria", latitude: 36.7461, longitude: 3.0723, websiteUrl: "https://en.wikipedia.org/wiki/National_Museum_of_Fine_Arts_of_Algiers" },
  { slug: "national-museum-of-western-art-tokyo-japan", address: "7-7 Ueno-koen, Taito-ku, Tokyo 110-0007, Japan", latitude: 35.7166, longitude: 139.7709, websiteUrl: "https://www.nmwa.go.jp/en/" },
  { slug: "national-museum-of-women-in-the-arts-nmwa-washingt", address: "1250 New York Avenue NW, Washington, DC 20005, USA", latitude: 38.9001, longitude: -77.0291, websiteUrl: "https://nmwa.org/" },
  { slug: "neue-galerie", address: "1048 Fifth Avenue, New York, NY 10028, USA", latitude: 40.7812, longitude: -73.9602, websiteUrl: "https://www.neuegalerie.org/" },
  { slug: "new-britain-museum-of-american-art-new-britain-ct-", address: "56 Lexington Street, New Britain, CT 06052, USA", latitude: 41.6614, longitude: -72.7776, websiteUrl: "https://www.nbmaa.org/" },
  { slug: "new-york-historical-society", address: "170 Central Park W, New York, NY 10024, USA", latitude: 40.7793, longitude: -73.9741, websiteUrl: "https://www.nyhistory.org/" },
  { slug: "newark-museum-newark-nj-us", address: "49 Washington Street, Newark, NJ 07102, USA", latitude: 40.7356, longitude: -74.1701, websiteUrl: "https://newarkmuseumart.org/" },
  { slug: "noordbrabants-museum-39shertogenbosch-netherlands", address: "Verwersstraat 41, 5211 HT 's-Hertogenbosch, Netherlands", latitude: 51.5035, longitude: 5.2907, websiteUrl: "https://www.hetnoordbrabantsmuseum.nl/" },
  { slug: "orvieto-cathedral", address: "Piazza del Duomo 26, 05018 Orvieto, Italy", latitude: 42.7182, longitude: 12.1112, websiteUrl: "https://www.duomodiorvieto.it/en/" },
  { slug: "palazzo-bianco-genoa-italy", address: "Via Garibaldi 11, 16124 Genoa, Italy", latitude: 44.4142, longitude: 8.9309, websiteUrl: "https://www.museidigenova.it/en/palazzo-bianco-0" },
  { slug: "palazzo-chiericati-vicenza-italy", address: "Piazza Matteotti 11, 36100 Vicenza, Italy", latitude: 45.5509, longitude: 11.5399, websiteUrl: "https://www.museicivicivicenza.it/it/mcp/" },
  { slug: "palazzo-d39accursio-palazzo-comunale-bologna-italy", address: "Piazza Maggiore 6, 40121 Bologna, Italy", latitude: 44.4937, longitude: 11.3413, websiteUrl: "https://www.bolognawelcome.com/en/places/towers-historic-buildings/daccursio-or-municipal-palace" },
  { slug: "palazzo-farnese", address: "Piazza Farnese 1, 01032 Caprarola, Italy", latitude: 42.3287, longitude: 12.2369, websiteUrl: "https://visite-palazzofarnese.it/?lang=en" },
  { slug: "palazzo-rosso-genoa-italy", address: "Via Garibaldi 18, 16124 Genoa, Italy", latitude: 44.4141, longitude: 8.9309, websiteUrl: "https://www.museidigenova.it/en/palazzo-rosso-0" },
  { slug: "palazzo-venezia-rome-italy", address: "Via del Plebiscito 118, 00186 Rome, Italy", latitude: 41.8910, longitude: 12.4757, websiteUrl: "https://vive.cultura.gov.it/en/palazzo-venezia" },
  { slug: "parma-cathedral", address: "Piazza Duomo, 43121 Parma, Italy", latitude: 44.8033, longitude: 10.3311, websiteUrl: "https://www.piazzaduomoparma.com/en/" },
  { slug: "parma-national-gallery-parma-italy", address: "Piazza della Pilotta 5, 43100 Parma, Italy", latitude: 44.8087, longitude: 10.3284, websiteUrl: "https://complessopilotta.it/en/national-gallery/" },
  { slug: "phoenix-art-museum", address: "1625 N Central Avenue, Phoenix, AZ 85004, USA", latitude: 33.4671, longitude: -112.0728, websiteUrl: "https://phxart.org/" },
  { slug: "pinacoteca-giovanni-e-marella-agnelli-turin-italy", address: "Via Nizza 230, 10126 Turin, Italy", latitude: 45.2297, longitude: 7.6478, websiteUrl: "https://www.pinacoteca-agnelli.it/en/" },
  { slug: "pinacoteca-siena", address: "Via di San Pietro 29, 53100 Siena, Italy", latitude: 43.3160, longitude: 11.3309, websiteUrl: "https://www.pinacotecanazionalesiena.it/en/" },
  { slug: "polenovo-polenov-museum-polenovo-russia", address: "301011 Tula region, Zaoksky district, p/o Strahovo, Russia", latitude: 54.5856, longitude: 38.8325, websiteUrl: "https://polenovo.ru/en/" },
  { slug: "querini-stampalia-foundation-venice-italy", address: "Santa Maria Formosa Castello 5252, 30122 Venice, Italy", latitude: 45.4366, longitude: 12.3414, websiteUrl: "https://www.querinistampalia.org/en/" },
  { slug: "reformed-church-collection-budapest-hungary", address: "Abonyi utca 21, 1146 Budapest, Hungary", latitude: 47.5074, longitude: 19.0758, websiteUrl: "https://reformatus.hu/english/" },
  { slug: "reynolda-house", address: "2250 Reynolda Road, Winston-Salem, NC 27106, USA", latitude: 36.1007, longitude: -80.2668, websiteUrl: "https://reynolda.org/" },
  { slug: "reynolda-house-museum-of-american-art-winstonsalem", address: "2250 Reynolda Road, Winston-Salem, NC 27106, USA", latitude: 36.1007, longitude: -80.2668, websiteUrl: "https://reynolda.org/" },

  // Batch 7 (25)
  { slug: "rijksmuseum-amsterdam-collection-since-1960", address: "Museumstraat 1, 1071 XX Amsterdam, Netherlands", latitude: 52.3600, longitude: 4.8853, websiteUrl: "https://www.rijksmuseum.nl" },
  { slug: "rochdale-art-gallery-rochdale-uk", address: "The Esplanade, Rochdale, Greater Manchester OL16 1AQ, UK", latitude: 53.4987, longitude: -2.1570, websiteUrl: "https://www.yourtrustrochdale.co.uk/venues/touchstones-rochdale" },
  { slug: "rockox-house-antwerp-belgium", address: "Keizerstraat 10-12, 2000 Antwerp, Belgium", latitude: 51.2218, longitude: 4.4025, websiteUrl: "https://www.snijdersrockoxhuis.be" },
  { slug: "royal-academy-of-arts-ra-london-uk", address: "Burlington House, Piccadilly, London W1J 0BD, UK", latitude: 51.5093, longitude: -0.1399, websiteUrl: "https://www.royalacademy.org.uk" },
  { slug: "rudolph-staechelin-family-foundation-basel-switzer", address: "Basel, Switzerland", latitude: 47.5596, longitude: 7.5886, websiteUrl: "https://en.wikipedia.org/wiki/Staechelin_collection" },
  { slug: "saint-bavo-cathedral", address: "Sint-Baafsplein 1A, Ghent, Belgium", latitude: 51.0530, longitude: 3.7271, websiteUrl: "https://www.sintbaafskathedraal.be" },
  { slug: "san-giorogio-alla-costa-florence-italy", address: "Via Costa San Giorgio, Florence, Italy", latitude: 43.7653, longitude: 11.2549, websiteUrl: "https://en.wikipedia.org/wiki/San_Giorgio_alla_Costa" },
  { slug: "san-stae-venice-italy", address: "Santa Croce, Venice, Italy", latitude: 45.4413, longitude: 12.3306, websiteUrl: "https://en.wikipedia.org/wiki/San_Stae" },
  { slug: "sanssouci-potsdam-germany", address: "Maulbeerallee 1, 14469 Potsdam, Germany", latitude: 52.4042, longitude: 13.0384, websiteUrl: "https://www.spsg.de" },
  { slug: "santa-barbara-museum-of-art-sbma-santa-barbara-ca-", address: "1130 State Street, Santa Barbara, CA 93101, USA", latitude: 34.4202, longitude: -119.6982, websiteUrl: "https://www.sbma.net" },
  { slug: "santa-felicita", address: "Piazza Santa Felicita, Florence, Italy", latitude: 43.7668, longitude: 11.2526, websiteUrl: "https://en.wikipedia.org/wiki/Santa_Felicita,_Florence" },
  { slug: "santa-maria-del-carmine-florence-italy", address: "Piazza del Carmine 14, 50124 Florence, Italy", latitude: 43.7639, longitude: 11.2447, websiteUrl: "https://www.museicivicifiorentini.comune.fi.it/brancacci" },
  { slug: "santa-maria-della-salute-venice-italy", address: "Dorsoduro 1, 30123 Venice, Italy", latitude: 45.4306, longitude: 12.3347, websiteUrl: "https://en.wikipedia.org/wiki/Santa_Maria_della_Salute" },
  { slug: "santa-maria-delle-grazie", address: "Piazza Santa Maria delle Grazie 2, 20123 Milan, Italy", latitude: 45.4659, longitude: 9.1712, websiteUrl: "https://legraziemilano.it" },
  { slug: "santa-maria-sopra-minerva-rome-italy", address: "Piazza della Minerva, Rome, Italy", latitude: 41.8922, longitude: 12.4737, websiteUrl: "https://www.santamariasopraminerva.it" },
  { slug: "schleissheim-palace-oberschleissheim-germany", address: "Max-Emanuel-Platz 1, 85764 Oberschleißheim, Germany", latitude: 48.2425, longitude: 11.5677, websiteUrl: "https://www.schloesser-schleissheim.de" },
  { slug: "schlesisches-museum-zu-g246rlitz-g246rlitz-germany", address: "Brüderstraße 8, Untermarkt 4, 02826 Görlitz, Germany", latitude: 51.1510, longitude: 15.0139, websiteUrl: "https://www.schlesisches-museum.de" },
  { slug: "schloss-weissenstein-pommersfelden-germany", address: "Schloß 1, 96178 Pommersfelden, Germany", latitude: 49.7627, longitude: 10.8205, websiteUrl: "https://www.schoenborn.de/schloss-weissenstein" },
  { slug: "school-of-medicine-san-francisco-university-of-cal", address: "513 Parnassus Avenue, San Francisco, CA 94143, USA", latitude: 37.7616, longitude: -122.4580, websiteUrl: "https://medschool.ucsf.edu" },
  { slug: "scrovegni-chapel", address: "Piazza Eremitani, Padua, Italy", latitude: 45.4119, longitude: 11.8795, websiteUrl: "https://www.cappelladegliscrovegni.it" },
  { slug: "skagens-museum", address: "Brøndumsvej 4, 9990 Skagen, Denmark", latitude: 57.7291, longitude: 10.5840, websiteUrl: "https://www.skagenskunstmuseer.dk" },
  { slug: "skokloster-castle-h229bo-municipality-sweden", address: "Skoklostvagen 98-100, 746 96 Skokloster, Sweden", latitude: 59.7063, longitude: 17.6224, websiteUrl: "https://skoklostersslott.se" },
  { slug: "smith-college-museum-of-art-scma-northampton-ma-us", address: "20 Elm Street, Northampton, MA 01063, USA", latitude: 42.3161, longitude: -72.6387, websiteUrl: "https://scma.smith.edu" },
  { slug: "smithsonians-national-portrait-gallery", address: "8th Street and F Street NW, Washington, DC 20001, USA", latitude: 38.8978, longitude: -77.0231, websiteUrl: "https://npg.si.edu" },
  { slug: "southampton-city-art-gallery", address: "Commercial Road, Southampton SO14 7LP, UK", latitude: 50.9052, longitude: -1.3984, websiteUrl: "https://southamptoncityartgallery.com" },

  // Batch 8 (26)
  { slug: "southampton-city-art-gallery-southampton-uk", address: "Commercial Road, Southampton SO14 7LP, UK", latitude: 50.9091, longitude: -1.4047, websiteUrl: "https://www.southamptoncityartgallery.com/" },
  { slug: "sprengel-museum-hanover-germany", address: "Kurt-Schwitters-Platz 1, 30169 Hannover, Germany", latitude: 52.3631, longitude: 9.7401, websiteUrl: "https://www.sprengel-museum.de/en" },
  { slug: "st-cyril39s-monastery-kyiv-ukraine", address: "Frunze Street 103, Kyiv 04080, Ukraine", latitude: 50.4830, longitude: 30.4721, websiteUrl: "https://en.wikipedia.org/wiki/St._Cyril's_Monastery,_Kyiv" },
  { slug: "st-peter39s-basilica-vatican", address: "Piazza San Pietro, 00120 Città del Vaticano, Vatican City", latitude: 41.9022, longitude: 12.4539, websiteUrl: "https://www.basilicasanpietro.va/en" },
  { slug: "staatliche-kunstsammlungen-dresden-dresden-germany", address: "Residenzschloss, Taschenberg 2, 01067 Dresden, Germany", latitude: 51.0539, longitude: 13.7380, websiteUrl: "https://www.skd.museum/en/" },
  { slug: "stedelijk-museum-amsterdam-netherlands", address: "Museumplein 10, 1071 DJ Amsterdam, Netherlands", latitude: 52.3580, longitude: 4.8797, websiteUrl: "https://www.stedelijk.nl/en" },
  { slug: "sudley-art-gallery-liverpool-uk", address: "Mossley Hill Road, Liverpool L18 8BX, UK", latitude: 53.3736, longitude: -2.9215, websiteUrl: "https://www.liverpoolmuseums.org.uk/sudley-house" },
  { slug: "taganrog-museum-of-fine-arts-taganrog-russia", address: "Aleksandrovskaya Street 56, Taganrog 347900, Russia", latitude: 47.2101, longitude: 38.9200, websiteUrl: "https://en.wikipedia.org/wiki/Taganrog_Museum_of_Art" },
  { slug: "tempio-malatestiano-rimini-italy", address: "Via IV Novembre 35, 47921 Rimini, Italy", latitude: 44.0596, longitude: 12.5703, websiteUrl: "https://en.wikipedia.org/wiki/Tempio_Malatestiano" },
  { slug: "cloisters", address: "99 Margaret Corbin Drive, New York, NY 10040, USA", latitude: 40.8641, longitude: -73.9328, websiteUrl: "https://www.metmuseum.org/plan-your-visit/met-cloisters" },
  { slug: "huntington-library", address: "1151 Oxford Road, San Marino, CA 91108, USA", latitude: 34.1290, longitude: -118.1145, websiteUrl: "https://www.huntington.org/" },
  { slug: "the-wilson-cheltenham-art-gallery-and-museum-chelt", address: "51 Clarence Street, Cheltenham GL50 3JT, UK", latitude: 51.8970, longitude: -1.9411, websiteUrl: "https://www.cheltenhammuseum.org.uk/" },
  { slug: "tokyo-fuji-art-museum-tokyo-japan", address: "492-1 Yano-machi, Hachioji, Tokyo, Japan", latitude: 35.6558, longitude: 139.3239, websiteUrl: "https://www.fujibi.or.jp/en/" },
  { slug: "toledo-cathedral-toledo-spain", address: "Calle Cardenal Cisneros 1, Toledo, Spain", latitude: 39.8571, longitude: -4.0244, websiteUrl: "https://en.wikipedia.org/wiki/Toledo_Cathedral" },
  { slug: "towneley-hall-art-gallery-and-museum-burnley-uk", address: "Towneley Park, Burnley BB11 3RQ, UK", latitude: 53.7740, longitude: -2.2224, websiteUrl: "https://towneley.org.uk/" },
  { slug: "tula-regional-museum-of-fine-arts-tula-russia", address: "Ulitsa Fridrikha Engel'sa 64, Tula 300012, Russia", latitude: 54.1961, longitude: 37.6182, websiteUrl: "https://en.wikipedia.org/wiki/Tula_Museum_of_Fine_Arts" },
  { slug: "turin-city-museum-of-ancient-art-turin-italy", address: "Piazza Castello, Turin, Italy", latitude: 45.0711, longitude: 7.6855, websiteUrl: "https://www.palazzomadamatorino.it/en/" },
  { slug: "tyrolean-state-museum-innsbruck-austria", address: "Museumstraße 15, 6020 Innsbruck, Austria", latitude: 47.2673, longitude: 11.3977, websiteUrl: "https://www.tiroler-landesmuseen.at/en" },
  { slug: "university-of-pennsylvania-upenn-philadelphia-pa-u", address: "3260 South Street, Philadelphia, PA 19104, USA", latitude: 39.9493, longitude: -75.1915, websiteUrl: "https://www.penn.museum/" },
  { slug: "villa-colloredo-mels-museum-recanati-italy", address: "Via Gregorio XII, Recanati 62019, Italy", latitude: 43.2190, longitude: 13.5087, websiteUrl: "https://en.wikipedia.org/wiki/Villa_Colloredo_Mels" },
  { slug: "vittorio-cini-collection-venice-italy", address: "Isola di San Giorgio Maggiore, 30133 Venezia, Italy", latitude: 45.4290, longitude: 12.3450, websiteUrl: "https://www.cini.it/en/" },
  { slug: "von-der-heydt-museum-wuppertal-germany", address: "Turmhof 8, 42103 Wuppertal, Germany", latitude: 51.2645, longitude: 7.1583, websiteUrl: "https://von-der-heydt-museum.de/" },
  { slug: "white-house", address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA", latitude: 38.8980, longitude: -77.0366, websiteUrl: "https://www.whitehouse.gov/" },
  { slug: "white-house-washington-dc-us", address: "1600 Pennsylvania Avenue NW, Washington, DC 20500, USA", latitude: 38.8980, longitude: -77.0366, websiteUrl: "https://www.whitehouse.gov/" },
  { slug: "worcester-art-museum-wam-worcester-ma-uk", address: "55 Salisbury Street, Worcester, MA 01609, USA", latitude: 42.2731, longitude: -71.8041, websiteUrl: "https://www.worcesterart.org/" },
  { slug: "yoshii-gallery-tokyo-japan", address: "1-3-2-6F Kiyosumi, Koto-ku, Tokyo 106-0032, Japan", latitude: 35.6729, longitude: 139.8174, websiteUrl: "https://yoshiigallery.com/" },
];

async function run() {
  let updated = 0;
  for (const m of museums) {
    try {
      await prisma.museum.update({
        where: { slug: m.slug },
        data: {
          address: m.address,
          latitude: m.latitude,
          longitude: m.longitude,
          websiteUrl: m.websiteUrl,
          updatedAt: new Date()
        }
      });
      console.log('✓ ' + m.slug);
      updated++;
    } catch (e) {
      console.error('✗ ' + m.slug + ': ' + e.message.slice(0, 100));
    }
  }
  console.log('\nDone: ' + updated + '/' + museums.length);
  await prisma.$disconnect();
}
run();
