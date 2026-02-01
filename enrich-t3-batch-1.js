const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const museums = [
  // Batch 1 (25)
  { slug: "abeggstiftung-bern-switzerland", address: "Werner Abeggstrasse 67, 3132 Riggisberg, Switzerland", latitude: 46.8157, longitude: 7.4945, websiteUrl: "https://abegg-stiftung.ch/en/" },
  { slug: "aivazovsky-national-art-gallery-feodosiya-ukraine", address: "Feodosiya, Crimea, Ukraine", latitude: 45.0342, longitude: 35.3930, websiteUrl: "https://en.wikipedia.org/wiki/Aivazovsky_National_Art_Gallery" },
  { slug: "albany-institute-of-history-and-art-albany-ny-us", address: "125 Washington Avenue, Albany, NY 12210, USA", latitude: 42.6557, longitude: -73.7602, websiteUrl: "https://www.albanyinstitute.org/" },
  { slug: "allen-memorial-art-museum-amam-oberlin-oh-us", address: "87 North Main Street, Oberlin, OH 44074, USA", latitude: 41.2887, longitude: -82.2635, websiteUrl: "https://amam.oberlin.edu/" },
  { slug: "american-museum-of-western-art-anschutz-collection", address: "1727 Tremont Place, Denver, CO 80202, USA", latitude: 39.7427, longitude: -104.9859, websiteUrl: "https://anschutzcollection.org/" },
  { slug: "amsterdams-historisch-museum-amsterdam-netherlands", address: "Kalverstraat 92, 1012 PH Amsterdam, Netherlands", latitude: 52.3657, longitude: 4.9027, websiteUrl: "https://www.amsterdammuseum.nl/en" },
  { slug: "arnot-art-museum-elmira-ny-us", address: "235 Lake Street, Elmira, NY 14901, USA", latitude: 42.0908, longitude: -76.8025, websiteUrl: "https://www.arnotartmuseum.org/" },
  { slug: "arp-museum-bahnhof-rolandseck-remagen-germany", address: "Hans-Arp-Allee 1, 53424 Remagen, Germany", latitude: 50.6316, longitude: 7.2068, websiteUrl: "https://www.arpmuseum.org/" },
  { slug: "art-gallery-of-ontario-ago-toronto-canada", address: "317 Dundas Street West, Toronto, ON M5T 1G4, Canada", latitude: 43.6536, longitude: -79.3925, websiteUrl: "https://ago.ca/" },
  { slug: "art-gallery-of-south-australia-agsa-adelaide-austr", address: "490 North Terrace, Adelaide, SA 5000, Australia", latitude: -34.9228, longitude: 138.6019, websiteUrl: "https://www.agsa.sa.gov.au/" },
  { slug: "bargello-palazzo-del-popolo-florence-italy", address: "Via del Proconsolo 4, 50122 Florence, Italy", latitude: 43.7714, longitude: 11.2587, websiteUrl: "https://bargellomusei.it/" },
  { slug: "basilica-dei-santi-giovanni-e-paolo-san-zanipolo-v", address: "Campo S.S. Giovanni e Paolo 6363, 30122 Venice, Italy", latitude: 45.4392, longitude: 12.3421, websiteUrl: "https://en.wikipedia.org/wiki/Santi_Giovanni_e_Paolo,_Venice" },
  { slug: "basilica-dei-frari", address: "Campo dei Frari, San Polo 3072, 30125 Venice, Italy", latitude: 45.4376, longitude: 12.3370, websiteUrl: "https://en.wikipedia.org/wiki/Santa_Maria_Gloriosa_dei_Frari" },
  { slug: "san-domenico-siena", address: "Piazza San Domenico 1, 53100 Siena, Italy", latitude: 43.3185, longitude: 11.3228, websiteUrl: "https://en.wikipedia.org/wiki/Basilica_of_San_Domenico,_Siena" },
  { slug: "basilica-of-san-domenico-arezzo-italy", address: "Piazza S. Domenico 6, 52100 Arezzo, Italy", latitude: 43.4691, longitude: 11.8820, websiteUrl: "https://en.wikipedia.org/wiki/San_Domenico,_Arezzo" },
  { slug: "beauxarts-museum-of-mons", address: "Rue Neuve 8, 7000 Mons, Belgium", latitude: 50.4558, longitude: 3.9526, websiteUrl: "https://www.bam.mons.be/" },
  { slug: "bergen-billedgalleri-bergen-norway", address: "Rasmus Meyers allé 9, 5015 Bergen, Norway", latitude: 60.3930, longitude: 5.3242, websiteUrl: "https://www.kodebergen.no/en/" },
  { slug: "biblioteca-museu-v237ctor-balaguer-vilanova-i-la-g", address: "Av. de Víctor Balaguer s/n, 08800 Vilanova i la Geltrú, Barcelona, Spain", latitude: 41.2214, longitude: 1.7296, websiteUrl: "https://victorbalaguer.cat/" },
  { slug: "biblioth232que-nationale-de-france-bnf-paris-franc", address: "Quai François Mauriac, 75013 Paris, France", latitude: 48.8338, longitude: 2.3765, websiteUrl: "https://www.bnf.fr/en/" },
  { slug: "bilbao-fine-arts-museum-bilbao-spain", address: "Museo Plaza 2, 48009 Bilbao, Spain", latitude: 43.2658, longitude: -2.9381, websiteUrl: "https://bilbaomuseoa.eus/" },
  { slug: "birmingham-museum-of-art-birmingham-al-us", address: "2000 Reverend Abraham Woods Jr Boulevard, Birmingham, AL 35203, USA", latitude: 33.5222, longitude: -86.8100, websiteUrl: "https://www.artsbma.org/" },
  { slug: "bowes-museum-barnard-castle-uk", address: "Newgate, Barnard Castle, County Durham DL12 8NP, England", latitude: 54.5419, longitude: -1.9155, websiteUrl: "https://thebowesmuseum.org.uk/" },
  { slug: "bradford-museums-and-galleries-bradford-uk", address: "Lister Park, Manningham, Bradford, West Yorkshire BD9 4NS, England", latitude: 53.8122, longitude: -1.7716, websiteUrl: "https://bradfordmuseums.org/" },
  { slug: "bristol-city-museum-and-art-gallery-bristol-uk", address: "Queen's Road, Bristol, BS8 1RL, England", latitude: 51.4565, longitude: -2.6051, websiteUrl: "https://www.bristolmuseums.org.uk/bristol-museum-and-art-gallery/" },
  { slug: "bristol-museum", address: "Queen's Road, Bristol, BS8 1RL, England", latitude: 51.4565, longitude: -2.6051, websiteUrl: "https://www.bristolmuseums.org.uk/bristol-museum-and-art-gallery/" },

  // Batch 2 (25)
  { slug: "bury-art-museum-bury-uk", address: "Moss Street, Bury BL9 0DR, UK", latitude: 53.5933, longitude: -2.2966, websiteUrl: "https://buryartmuseum.co.uk/" },
  { slug: "butler-institute-of-american-art-youngstown-oh-us", address: "524 Wick Ave, Youngstown, OH 44502, USA", latitude: 41.0978, longitude: -80.6485, websiteUrl: "https://butlerart.com/" },
  { slug: "ca39-pesaro-international-gallery-of-modern-art-ve", address: "Santa Croce 2076, 30135 Venice, Italy", latitude: 45.4404, longitude: 12.3311, websiteUrl: "https://capesaro.visitmuve.it/en/home/" },
  { slug: "casino-rospigliosi", address: "Via 24 Maggio 43, 00184 Rome, Italy", latitude: 41.9076, longitude: 12.4956, websiteUrl: "https://en.wikipedia.org/wiki/Palazzo_Pallavicini-Rospigliosi" },
  { slug: "casino-di-villa-boncompagni-ludovisi-rome-italy", address: "Via Lombardia 46, 00187 Rome, Italy", latitude: 41.9073, longitude: 12.4872, websiteUrl: "https://www.casino-di-villa-boncompagni-ludovisi.com/" },
  { slug: "castelvecchio-museum-verona-italy", address: "Corso Castelvecchio 2, 37121 Verona, Italy", latitude: 45.4397, longitude: 10.9878, websiteUrl: "https://museodicastelvecchio.comune.verona.it/" },
  { slug: "antwerp-cathedral", address: "Handschoenmarkt 1, 2000 Antwerp, Belgium", latitude: 51.2196, longitude: 4.4001, websiteUrl: "https://www.dekathedraal.be/en" },
  { slug: "cathedral-of-our-lady-antwerp-belgium", address: "Handschoenmarkt 1, 2000 Antwerp, Belgium", latitude: 51.2196, longitude: 4.4001, websiteUrl: "https://www.dekathedraal.be/en" },
  { slug: "centraal-museum", address: "Agnietenstraat 1, 3512 XA Utrecht, Netherlands", latitude: 52.0840, longitude: 5.1260, websiteUrl: "https://www.centraalmuseum.nl/en" },
  { slug: "ch226teau-de-compi232gne-compi232gne-france", address: "Place du Général de Gaulle, 60200 Compiègne, France", latitude: 49.4182, longitude: 2.8253, websiteUrl: "https://chateaudecompiegne.fr/en" },
  { slug: "chatsworth-house-derbyshire-uk", address: "Chatsworth, Bakewell, Derbyshire DE45 1PP, UK", latitude: 53.2233, longitude: -1.6060, websiteUrl: "https://www.chatsworth.org/" },
  { slug: "san-zaccaria", address: "Campo San Zaccaria 4693, 30122 Venice, Italy", latitude: 45.4343, longitude: 12.3430, websiteUrl: "https://en.wikipedia.org/wiki/San_Zaccaria,_Venice" },
  { slug: "christ-church-oxford-uk", address: "St Aldates, Oxford OX1 1DP, UK", latitude: 51.7500, longitude: -1.2546, websiteUrl: "https://www.chch.ox.ac.uk/" },
  { slug: "church-of-our-lady-bruges-belgium", address: "Mariastraat, 8000 Bruges, Belgium", latitude: 51.2046, longitude: 3.2241, websiteUrl: "https://en.wikipedia.org/wiki/Church_of_Our_Lady,_Bruges" },
  { slug: "convent-of-san-domenico-fiesole-italy", address: "Piazza S. Domenico 4, 50014 Fiesole FI, Italy", latitude: 43.8053, longitude: 11.3033, websiteUrl: "https://en.wikipedia.org/wiki/Convent_of_San_Domenico,_Fiesole" },
  { slug: "corcoran-gallery", address: "500 17th St NW, Washington, DC 20006, USA", latitude: 38.8927, longitude: -77.0383, websiteUrl: "https://www.nga.gov/corcoran.html" },
  { slug: "cranachh246fe-wittenberg-germany", address: "Markt 4, 06886 Lutherstadt Wittenberg, Germany", latitude: 51.8626, longitude: 12.6481, websiteUrl: "https://www.cranach-stiftung.de/en" },
  { slug: "dayton-art-institute-dai-dayton-oh-us", address: "456 Belmonte Park N, Dayton, OH 45405, USA", latitude: 39.7663, longitude: -84.2019, websiteUrl: "https://www.daytonartinstitute.org/" },
  { slug: "de-morgan-collection", address: "Leighton House Museum, Holland Park Road, London W14 8LZ, UK", latitude: 51.5034, longitude: -0.2065, websiteUrl: "https://www.demorgan.org.uk/" },
  { slug: "delaware-art-museum-wilmington-de-us", address: "2301 Kentmere Parkway, Wilmington, DE 19806, USA", latitude: 39.7650, longitude: -75.5642, websiteUrl: "https://delart.org/" },
  { slug: "dordrechts-museum-dordrecht-netherlands", address: "Museumstraat 40, 3311 XP Dordrecht, Netherlands", latitude: 51.8145, longitude: 4.6717, websiteUrl: "https://www.dordrechtsmuseum.nl/english/" },
  { slug: "duomo-di-castelfranco-veneto-castelfranco-veneto-i", address: "Vicolo del Cristo 14, 31033 Castelfranco Veneto TV, Italy", latitude: 45.6709, longitude: 11.9268, websiteUrl: "https://en.wikipedia.org/wiki/Castelfranco_Veneto" },
  { slug: "ferens-art-gallery", address: "Queen Victoria Square, Carr Lane, Hull HU1 3RA, UK", latitude: 53.7417, longitude: -0.3337, websiteUrl: "https://www.hullmuseums.co.uk/ferens-art-gallery" },
  { slug: "galleria-colonna", address: "Via della Pilotta 17, 00187 Rome, Italy", latitude: 41.8978, longitude: 12.4849, websiteUrl: "https://www.galleriacolonna.it/en/" },
  { slug: "galleria-nazionale-marche", address: "Piazza Rinascimento 13, 61029 Urbino (PU), Italy", latitude: 43.7233, longitude: 12.6378, websiteUrl: "https://gndm.it/en/" },

  // Batch 3 (25)
  { slug: "g246sta-serlachius-fine-arts-foundation-m228ntt228", address: "R. Erik Serlachiuksen katu 2, 35800 Mänttä, Finland", latitude: 62.1153, longitude: 24.4503, websiteUrl: "https://serlachius.fi" },
  { slug: "gothenburg-museum", address: "Götaplatsen 6, 412 56 Gothenburg, Sweden", latitude: 57.6915, longitude: 11.9747, websiteUrl: "https://goteborgskonstmuseum.se" },
  { slug: "guildhall-art-gallery-london-uk", address: "Guildhall Yard, London EC2V 5AE, United Kingdom", latitude: 51.5153, longitude: -0.0925, websiteUrl: "https://www.cityoflondon.gov.uk/things-to-do/attractions-museums-entertainment/guildhall-art-gallery" },
  { slug: "hampton-court-palace-london-uk", address: "East Molesey, Surrey, KT8 9AU, United Kingdom", latitude: 51.4020, longitude: -0.3358, websiteUrl: "https://www.hrp.org.uk/hampton-court-palace" },
  { slug: "harvard-art-museums-cambridge-ma-us", address: "32 Quincy Street, Cambridge, MA 02138, United States", latitude: 42.3741, longitude: -71.1143, websiteUrl: "https://harvardartmuseums.org" },
  { slug: "helsinki-city-museum-helsinki-finland", address: "Aleksanterinkatu 16-18, 00170 Helsinki, Finland", latitude: 60.1699, longitude: 24.9384, websiteUrl: "https://www.helsinginkaupunginmuseo.fi" },
  { slug: "herzog-anton-ulrich-museum", address: "Museumstr. 1, 38100 Braunschweig, Germany", latitude: 52.2580, longitude: 10.5265, websiteUrl: "https://3landesmuseen-braunschweig.de" },
  { slug: "hessisches-landesmuseum-darmstadt-darmstadt-german", address: "Friedensplatz 1, 64283 Darmstadt, Germany", latitude: 49.8719, longitude: 8.6506, websiteUrl: "https://www.hlmd.de" },
  { slug: "holy-cathedral-of-the-dormition-of-the-virgin-ermo", address: "Ermoupoli, 841 00 Syros, Greece", latitude: 37.4635, longitude: 24.9161, websiteUrl: "https://en.wikipedia.org/wiki/Church_of_the_Dormition_of_the_Virgin,_Ermoupolis" },
  { slug: "hospital-caridad-seville", address: "Calle Temprado, 3, 41001 Seville, Spain", latitude: 37.3839, longitude: -5.9956, websiteUrl: "https://www.santa-caridad.es" },
  { slug: "israel-museum-jerusalem-israel", address: "11 Derech Ruppin, Jerusalem 9171002, Israel", latitude: 31.7762, longitude: 35.2032, websiteUrl: "https://www.imj.org.il" },
  { slug: "joslyn-art-museumomaha-ne-us", address: "2200 Dodge Street, Omaha, NE 68102, United States", latitude: 41.2580, longitude: -95.9308, websiteUrl: "https://joslyn.org" },
  { slug: "keble-college", address: "Parks Road, Oxford OX1 3PG, United Kingdom", latitude: 51.7588, longitude: -1.2580, websiteUrl: "https://www.keble.ox.ac.uk" },
  { slug: "kelvingrove-art-gallery-and-museum-glasgow-uk", address: "Argyle Street, Glasgow G3 8AG, United Kingdom", latitude: 55.8686, longitude: -4.2910, websiteUrl: "https://www.glasgowlife.org.uk/museums" },
  { slug: "kemper-art-museum", address: "1 Brookings Drive, St. Louis, MO 63130, United States", latitude: 38.6490, longitude: -90.3126, websiteUrl: "https://www.kemperartmuseum.wustl.edu" },
  { slug: "kharbinetapabor-collection-paris-france", address: "4 rue Bochart de Saron, 75009 Paris, France", latitude: 48.8756, longitude: 2.3426, websiteUrl: "https://www.lacollection.eu" },
  { slug: "kingston-lacy-wimborne-minster-uk", address: "Wimborne Minster, Dorset BH21 4EA, United Kingdom", latitude: 50.8066, longitude: -2.0260, websiteUrl: "https://www.nationaltrust.org.uk/kingston-lacy" },
  { slug: "kirkcaldy-galleries-kirkcaldy-uk", address: "War Memorial Gardens, Kirkcaldy, KY1 1YG, United Kingdom", latitude: 56.1121, longitude: -3.1658, websiteUrl: "https://www.onfife.com/venues/kirkcaldy-galleries" },
  { slug: "kunsthalle-mannheim-mannheim-germany", address: "Friedrichsplatz 4, 68165 Mannheim, Germany", latitude: 49.4826, longitude: 8.4752, websiteUrl: "https://www.kuma.art" },
  { slug: "kunstmuseum-bern-bern-switzerland", address: "Hodlerstrasse 8-12, 3011 Bern, Switzerland", latitude: 46.9511, longitude: 7.4434, websiteUrl: "https://www.kunstmuseumbern.ch" },
  { slug: "kunstmuseum-gelsenkirchen-gelsenkirchenbuer-german", address: "Horster Straße 5-7, 45897 Gelsenkirchen, Germany", latitude: 51.4599, longitude: 7.0893, websiteUrl: "https://www.kunstmuseum-gelsenkirchen.de" },
  { slug: "lady-lever-art-gallery-port-sunlight-uk", address: "Lower Road, Port Sunlight, Bebington, Wirral CH62 5EQ, United Kingdom", latitude: 53.3715, longitude: -3.0378, websiteUrl: "https://www.liverpoolmuseums.org.uk/lady-lever-art-gallery" },
  { slug: "laing-art-gallery-newcastle-upon-tyne-uk", address: "New Bridge Street, Newcastle upon Tyne NE1 8AG, United Kingdom", latitude: 54.9750, longitude: -1.6094, websiteUrl: "https://laingartgallery.org.uk" },
  { slug: "lehmbruck-museum-duisburg-germany", address: "Friedrich-Wilhelm-Straße 40, 47051 Duisburg, Germany", latitude: 51.4248, longitude: 6.7597, websiteUrl: "https://lehmbruckmuseum.de" },
  { slug: "leiden-collection", address: "700 Madison Avenue, 5th Floor, New York, NY 10065, United States", latitude: 40.7721, longitude: -73.9867, websiteUrl: "https://www.theleidencollection.com" },

  // Batch 4 (25)
  { slug: "lviv-national-art-gallery-lviv-ukraine", address: "3 Stefanyka Street, 79005 Lviv, Ukraine", latitude: 49.8372, longitude: 24.0255, websiteUrl: "http://lvivgallery.org.ua/" },
  { slug: "mak-vienna", address: "Stubenring 5, 1010 Vienna, Austria", latitude: 48.2074, longitude: 16.3818, websiteUrl: "https://www.mak.at/en" },
  { slug: "maria-rodriquez-de-reyero-collection-new-york-city", address: "New York City, New York, USA", latitude: 40.7128, longitude: -74.0060, websiteUrl: "https://en.wikipedia.org/wiki/New_York_City" },
  { slug: "masaccio-museum-cascia-di-reggello-reggello-italy", address: "Via Casaromolo 2/a, 50066 Reggello, Florence, Italy", latitude: 43.7544, longitude: 11.6186, websiteUrl: "https://www.museomasaccio.it/en/" },
  { slug: "mcnay-art-museum-san-antonio-tx-us", address: "6000 North New Braunfels Avenue, San Antonio, TX 78209, USA", latitude: 29.4856, longitude: -98.4570, websiteUrl: "https://www.mcnayart.org/" },
  { slug: "mead-art-museum-amherst-ma-us", address: "41 Quadrangle Drive, Amherst, MA 01002, USA", latitude: 42.3709, longitude: -72.5155, websiteUrl: "https://www.amherst.edu/museums/mead" },
  { slug: "morgan-library-and-museum-pierpont-morgan-library-", address: "225 Madison Avenue, New York, NY 10016, USA", latitude: 40.7492, longitude: -73.9814, websiteUrl: "https://www.themorgan.org/" },
  { slug: "mucha-museum-prague-czech-republic", address: "Panská 7, 110 00 Prague 1, Czech Republic", latitude: 50.0842, longitude: 14.4277, websiteUrl: "https://www.mucha.cz/en" },
  { slug: "musee-camille-pissarro-paris-france", address: "17 rue du Château, 95300 Pontoise, France", latitude: 49.0482, longitude: 2.0999, websiteUrl: "https://ville-pontoise.fr/le-musee-dart-et-dhistoire-pissarro-pontoise-mahpp" },
  { slug: "mus233e-d39art-moderne-de-c233ret-ceret-france", address: "8 Bd Maréchal Joffre, 66400 Céret, France", latitude: 42.4859, longitude: 2.7485, websiteUrl: "https://www.musee-ceret.com/" },
  { slug: "mus233e-d39art-moderne-de-la-ville-de-paris-paris-", address: "11 Avenue du Président Wilson, 75116 Paris, France", latitude: 48.8645, longitude: 2.2977, websiteUrl: "https://www.mam.paris.fr/" },
  { slug: "mus233e-des-beauxarts-d39angers-angers-france", address: "14 Rue du Musée, 49100 Angers, France", latitude: 47.4685, longitude: -0.5552, websiteUrl: "https://musees.angers.fr/" },
  { slug: "musee-des-beauxarts-de-caen-caen-france", address: "Le Château, 14000 Caen, France", latitude: 49.1859, longitude: -0.3591, websiteUrl: "https://mba.caen.fr/" },
  { slug: "mus233e-des-beauxarts-de-li232ge-bal-li232ge-belgi", address: "En Féronstrée/Ilot Saint-Georges 86, 4000 Liège, Belgium", latitude: 50.5976, longitude: 5.5039, websiteUrl: "https://en.laboverie.com/" },
  { slug: "mus233e-des-beauxarts-de-marseille-marseille-franc", address: "Palais Longchamp Aile gauche, 13004 Marseille, France", latitude: 43.3045, longitude: 5.3940, websiteUrl: "https://musees.marseille.fr/musee-des-beaux-arts-mba" },
  { slug: "mus233e-des-beauxarts-de-reims-reims-france", address: "8 Rue Chanzy, 51100 Reims, France", latitude: 49.2531, longitude: 4.0308, websiteUrl: "https://musees-reims.fr/" },
  { slug: "musee-des-beauxarts-de-tours-tours-france", address: "18 Place François-Sicard, 37000 Tours, France", latitude: 47.3917, longitude: 0.6867, websiteUrl: "https://www.musees.tours.fr/" },
  { slug: "mus233e-des-beauxarts-et-d39arch233ologie-de-besan", address: "1 Place de la Révolution, 25000 Besançon, France", latitude: 47.2400, longitude: 6.0200, websiteUrl: "https://www.mbaa.besancon.fr/" },
  { slug: "musee-felicien-rops", address: "Rue Fumal 12, 5000 Namur, Belgium", latitude: 50.4716, longitude: 4.8662, websiteUrl: "https://www.museerops.be/" },
  { slug: "musee-fesch-ajaccio-france", address: "50-52 Rue Cardinal Fesch, 20000 Ajaccio, Corsica, France", latitude: 41.9219, longitude: 8.7388, websiteUrl: "https://www.musee-fesch.com/" },
  { slug: "mus233e-granet-aixenprovence-france", address: "Place Saint-Jean de Malte, 13100 Aix-en-Provence, France", latitude: 43.5255, longitude: 5.4526, websiteUrl: "https://www.museegranet-aixenprovence.fr/" },
  { slug: "mus233e-grobetlabadi233-marseille-france", address: "140 Boulevard Longchamp, 13001 Marseille, France", latitude: 43.3034, longitude: 5.3928, websiteUrl: "https://musees.marseille.fr/musee-grobet-labadie-mgl-0" },
  { slug: "mus233e-magnin-dijon-france", address: "4 Rue des Bons Enfants, 21000 Dijon, France", latitude: 47.3210, longitude: 5.0422, websiteUrl: "https://musee-magnin.fr/" },
  { slug: "mus233e-national-d39art-moderne-paris-france", address: "Place Georges-Pompidou, 75004 Paris, France", latitude: 48.8607, longitude: 2.3524, websiteUrl: "https://www.centrepompidou.fr/" },
  { slug: "musee-unterlinden", address: "Place Unterlinden, 68000 Colmar, France", latitude: 48.0802, longitude: 7.3560, websiteUrl: "https://www.musee-unterlinden.com/" },
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
