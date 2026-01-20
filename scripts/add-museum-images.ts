import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Museum image URLs from Wikimedia Commons (exterior/facade photos)
const museumImages: Record<string, string> = {
  // Major world museums
  "british-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/British_Museum_%28aerial%29.jpg/1280px-British_Museum_%28aerial%29.jpg",
  "brooklyn-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Brooklyn_Museum_-_Pair_of_Doors_%28Farafin%27ka%29%2C_Wood%2C_Painted_-_African_Art.jpg/800px-Brooklyn_Museum_-_Pair_of_Doors_%28Farafin%27ka%29%2C_Wood%2C_Painted_-_African_Art.jpg",
  "detroit-institute-of-arts": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Detroit_Institute_of_Arts.jpg/1280px-Detroit_Institute_of_Arts.jpg",
  "cleveland-museum-of-art": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Cleveland_Museum_of_Art_%2814103436632%29.jpg/1280px-Cleveland_Museum_of_Art_%2814103436632%29.jpg",
  "kunsthistorisches-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Kunsthistorisches_Museum_Wien_2010.jpg/1280px-Kunsthistorisches_Museum_Wien_2010.jpg",
  "tate-britain": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tate_Britain_%28front%29.jpg/1280px-Tate_Britain_%28front%29.jpg",
  "gemaldegalerie-berlin": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Berlin_Gem%C3%A4ldegalerie_BW_1.jpg/1280px-Berlin_Gem%C3%A4ldegalerie_BW_1.jpg",
  "alte-nationalgalerie": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Alte_Nationalgalerie_Berlin_09-2017.jpg/1280px-Alte_Nationalgalerie_Berlin_09-2017.jpg",
  "hamburger-kunsthalle": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Kunsthalle_Hamburg_2009.jpg/1280px-Kunsthalle_Hamburg_2009.jpg",
  "kunstmuseum-basel": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Kunstmuseum_Basel_-_2006.jpg/1280px-Kunstmuseum_Basel_-_2006.jpg",
  "isabella-stewart-gardner": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Isabella_Stewart_Gardner_Museum%2C_Boston.jpg/1280px-Isabella_Stewart_Gardner_Museum%2C_Boston.jpg",
  "clark-art-institute": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sterling_and_Francine_Clark_Art_Institute_03.jpg/1280px-Sterling_and_Francine_Clark_Art_Institute_03.jpg",
  "crystal-bridges": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Crystal_Bridges_Museum_of_American_Art_1.jpg/1280px-Crystal_Bridges_Museum_of_American_Art_1.jpg",
  "smithsonian-american-art": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Old_Patent_Office%2C_Washington%2C_D.C._LCCN2011634617.tif/lossy-page1-1280px-Old_Patent_Office%2C_Washington%2C_D.C._LCCN2011634617.tif.jpg",
  "dallas-museum-of-art": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Dallas_Museum_of_Art_02.jpg/1280px-Dallas_Museum_of_Art_02.jpg",
  "minneapolis-institute-of-art": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mia_2015.jpg/1280px-Mia_2015.jpg",
  "kimbell-art-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Kimbell_Art_Museum_Fort_Worth_galleries.jpg/1280px-Kimbell_Art_Museum_Fort_Worth_galleries.jpg",
  "phoenix-art-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Phoenix_Art_Museum.jpg/1280px-Phoenix_Art_Museum.jpg",
  "wadsworth-atheneum": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Wadsworth_Atheneum_Hartford_CT.JPG/1280px-Wadsworth_Atheneum_Hartford_CT.JPG",
  "yale-art-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Yale_University_Art_Gallery_entrance.jpg/800px-Yale_University_Art_Gallery_entrance.jpg",
  "corcoran-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Corcoran_Gallery_of_Art_-_Washington%2C_D.C..jpg/1280px-Corcoran_Gallery_of_Art_-_Washington%2C_D.C..jpg",
  "phillips-collection": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/PhillipsCollection.JPG/1280px-PhillipsCollection.JPG",
  "new-york-historical-society": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/New-York_Historical_Society_front.jpg/1280px-New-York_Historical_Society_front.jpg",
  "albright-knox": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Albright-Knox_Art_Gallery_-_IMG_3745.JPG/1280px-Albright-Knox_Art_Gallery_-_IMG_3745.JPG",

  // European museums
  "versailles": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chateau-de-versailles-cour.jpg/1280px-Chateau-de-versailles-cour.jpg",
  "royal-collection-uk": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Buckingham_Palace_from_gardens%2C_London%2C_UK_-_Diliff.jpg/1280px-Buckingham_Palace_from_gardens%2C_London%2C_UK_-_Diliff.jpg",
  "royal-museums-belgium": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Royal_Museums_of_Fine_Arts_of_Belgium_2.jpg/1280px-Royal_Museums_of_Fine_Arts_of_Belgium_2.jpg",
  "musee-royal-beaux-arts-antwerp": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Koninklijk_Museum_voor_Schone_Kunsten_Antwerpen_28-03-2010_18-01-48.jpg/1280px-Koninklijk_Museum_voor_Schone_Kunsten_Antwerpen_28-03-2010_18-01-48.jpg",
  "groeningemuseum": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Groeningemuseum_R01.jpg/1280px-Groeningemuseum_R01.jpg",
  "dulwich-picture-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dulwich_Picture_Gallery_-_geograph.org.uk_-_1507656.jpg/1280px-Dulwich_Picture_Gallery_-_geograph.org.uk_-_1507656.jpg",
  "walker-art-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Walker_Art_Gallery%2C_Liverpool.jpg/1280px-Walker_Art_Gallery%2C_Liverpool.jpg",
  "manchester-art-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Manchester_Art_Gallery.jpg/1280px-Manchester_Art_Gallery.jpg",
  "ferens-art-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ferens_Art_Gallery_-_panoramio.jpg/1280px-Ferens_Art_Gallery_-_panoramio.jpg",
  "national-galleries-scotland": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Scottish_National_Gallery.jpg/1280px-Scottish_National_Gallery.jpg",
  "national-gallery-ireland": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/National_Gallery_of_Ireland_2011.jpg/1280px-National_Gallery_of_Ireland_2011.jpg",
  "national-gallery-victoria": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/NGV_International_%282017%29.jpg/1280px-NGV_International_%282017%29.jpg",

  // Scandinavian
  "ateneum": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Ateneum_in_November_2012.jpg/1280px-Ateneum_in_November_2012.jpg",
  "national-museum-stockholm": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nationalmuseum%2C_Stoccolma.jpg/1280px-Nationalmuseum%2C_Stoccolma.jpg",
  "gothenburg-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/G%C3%B6teborgs_konstmuseum%2C_den_29_mars_2006%2C_bild_2.JPG/1280px-G%C3%B6teborgs_konstmuseum%2C_den_29_mars_2006%2C_bild_2.JPG",
  "skagens-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Skagen_Museum.jpg/1280px-Skagen_Museum.jpg",
  "ny-carlsberg-glyptotek": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ny_Carlsberg_Glyptotek_-_facade.jpg/1280px-Ny_Carlsberg_Glyptotek_-_facade.jpg",
  "munch-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Munchmuseet_Lambda_Sept_2021.jpg/1280px-Munchmuseet_Lambda_Sept_2021.jpg",

  // Russian
  "tretyakov-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/%D0%93%D0%A2%D0%93_%D0%9B%D0%B0%D0%B2%D1%80%D1%83%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA_06.jpg/1280px-%D0%93%D0%A2%D0%93_%D0%9B%D0%B0%D0%B2%D1%80%D1%83%D1%88%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B5%D1%80%D0%B5%D1%83%D0%BB%D0%BE%D0%BA_06.jpg",
  "russian-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Spb_06-2012_MichaelPalace.jpg/1280px-Spb_06-2012_MichaelPalace.jpg",

  // Dutch/German
  "kroeller-mueller-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Kr%C3%B6ller-M%C3%BCller_Museum%2C_Otterlo.jpg/1280px-Kr%C3%B6ller-M%C3%BCller_Museum%2C_Otterlo.jpg",
  "centraal-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Centraal_Museum_Utrecht_%286837254918%29.jpg/1280px-Centraal_Museum_Utrecht_%286837254918%29.jpg",
  "museum-boijmans": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Museum_Boijmans_Van_Beuningen_-_facade.jpg/1280px-Museum_Boijmans_Van_Beuningen_-_facade.jpg",
  "lenbachhaus": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/St%C3%A4dtische_Galerie_im_Lenbachhaus%2C_M%C3%BCnchen.jpg/1280px-St%C3%A4dtische_Galerie_im_Lenbachhaus%2C_M%C3%BCnchen.jpg",
  "neue-pinakothek": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Neue_Pinakothek_-_Eingangsbereich.jpg/1280px-Neue_Pinakothek_-_Eingangsbereich.jpg",
  "kunsthalle-bremen": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bremen_Kunsthalle.jpg/1280px-Bremen_Kunsthalle.jpg",
  "museum-georg-schafer": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Schweinfurt_Museum_Georg_Sch%C3%A4fer_2.jpg/1280px-Schweinfurt_Museum_Georg_Sch%C3%A4fer_2.jpg",

  // Spanish
  "thyssen-bornemisza-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Palacio_de_Villahermosa_%28Madrid%29_02.jpg/1280px-Palacio_de_Villahermosa_%28Madrid%29_02.jpg",
  "sorolla-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Museo_Sorolla_%28Madrid%29_06.jpg/1280px-Museo_Sorolla_%28Madrid%29_06.jpg",
  "hospital-caridad-seville": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Hospital_de_la_Caridad_%28Sevilla%29._Fachada.jpg/800px-Hospital_de_la_Caridad_%28Sevilla%29._Fachada.jpg",

  // Italian churches/palaces
  "basilica-dei-frari": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Santa_Maria_Gloriosa_dei_Frari_%28Venice%29_-_Fa%C3%A7ade.jpg/800px-Santa_Maria_Gloriosa_dei_Frari_%28Venice%29_-_Fa%C3%A7ade.jpg",
  "san-zaccaria": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Venezia_Chiesa_di_San_Zaccaria_Facciata.jpg/800px-Venezia_Chiesa_di_San_Zaccaria_Facciata.jpg",
  "scrovegni-chapel": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Padova_-_Cappella_degli_Scrovegni_%28Arena%29.jpg/1280px-Padova_-_Cappella_degli_Scrovegni_%28Arena%29.jpg",
  "brancacci-chapel": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Santa_Maria_del_Carmine_-_Firenze.jpg/800px-Santa_Maria_del_Carmine_-_Firenze.jpg",
  "palazzo-pitti": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Palazzo_Pitti_Gartenfassade_Florenz.jpg/1280px-Palazzo_Pitti_Gartenfassade_Florenz.jpg",
  "palazzo-medici-riccardi": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Palazzo_medici_riccardi_33.JPG/800px-Palazzo_medici_riccardi_33.JPG",
  "palazzo-farnese": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Palazzo_Farnese_Rome.jpg/1280px-Palazzo_Farnese_Rome.jpg",
  "galleria-colonna": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Galleria_Colonna_Rome.jpg/1280px-Galleria_Colonna_Rome.jpg",
  "galleria-doria-pamphilj": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Roma%2C_Palazzo_Doria-Pamphilj_-_Esterno.jpg/1280px-Roma%2C_Palazzo_Doria-Pamphilj_-_Esterno.jpg",
  "museo-di-san-marco": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/San_Marco%2C_Florence_-_Exterior.jpg/1280px-San_Marco%2C_Florence_-_Exterior.jpg",
  "santa-felicita": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Santa_Felicita_-_Firenze.JPG/800px-Santa_Felicita_-_Firenze.JPG",
  "museo-opera-duomo-siena": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Siena.Duomo01.jpg/1280px-Siena.Duomo01.jpg",
  "pinacoteca-siena": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Siena%2C_pinacoteca_nazionale%2C_esterno_02.jpg/800px-Siena%2C_pinacoteca_nazionale%2C_esterno_02.jpg",
  "san-domenico-siena": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/SanDomenicoSiena.JPG/1280px-SanDomenicoSiena.JPG",
  "orvieto-cathedral": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Orvieto_Duomo_z02.JPG/800px-Orvieto_Duomo_z02.JPG",
  "parma-cathedral": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Parma-duomo01.jpg/1280px-Parma-duomo01.jpg",
  "galleria-nazionale-marche": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Urbino-palazzo_ducale01.jpg/1280px-Urbino-palazzo_ducale01.jpg",
  "casino-rospigliosi": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Casino_dell%27Aurora_Pallavicini_-_facciata.jpg/800px-Casino_dell%27Aurora_Pallavicini_-_facciata.jpg",

  // French
  "musee-gustave-moreau": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mus%C3%A9e_national_Gustave-Moreau.jpg/800px-Mus%C3%A9e_national_Gustave-Moreau.jpg",
  "musee-toulouse-lautrec": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Palais_de_la_Berbie_%28Albi%2C_France%29.JPG/1280px-Palais_de_la_Berbie_%28Albi%2C_France%29.JPG",
  "musee-unterlinden": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Colmar_-_Mus%C3%A9e_Unterlinden.jpg/1280px-Colmar_-_Mus%C3%A9e_Unterlinden.jpg",
  "musee-bonnat": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bayonne_-_Mus%C3%A9e_Bonnat-Helleu_01.jpg/1280px-Bayonne_-_Mus%C3%A9e_Bonnat-Helleu_01.jpg",

  // Belgian
  "musee-felicien-rops": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mus%C3%A9e_F%C3%A9licien_Rops.jpg/800px-Mus%C3%A9e_F%C3%A9licien_Rops.jpg",
  "musee-ostende": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Mu.ZEE_Oostende.jpg/1280px-Mu.ZEE_Oostende.jpg",
  "saint-bavo-cathedral": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/GentSintBaafs.jpg/800px-GentSintBaafs.jpg",

  // Polish
  "national-museum-gdansk": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gda%C5%84sk_-_Muzeum_Narodowe_-_wej%C5%9Bcie_g%C5%82%C3%B3wne.jpg/1280px-Gda%C5%84sk_-_Muzeum_Narodowe_-_wej%C5%9Bcie_g%C5%82%C3%B3wne.jpg",

  // Japanese
  "national-museum-western-art-tokyo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/National_museum_of_western_art05s3200.jpg/1280px-National_museum_of_western_art05s3200.jpg",

  // Austrian
  "mak-vienna": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/MAK_Vienna_June_2006_013.jpg/1280px-MAK_Vienna_June_2006_013.jpg",

  // US special
  "cloisters": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/The_Cloisters_from_the_garden.jpg/1280px-The_Cloisters_from_the_garden.jpg",
  "white-house": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/White_House_north_and_south_sides.jpg/1280px-White_House_north_and_south_sides.jpg",
  "reynolda-house": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Reynolda_House.jpg/1280px-Reynolda_House.jpg",
  "whitney-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Whitney_Museum_of_American_Art_2015.jpg/1280px-Whitney_Museum_of_American_Art_2015.jpg",

  // UK
  "bristol-museum": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Bristol_Art_Gallery_and_Museum_-_geograph.org.uk_-_540936.jpg/1280px-Bristol_Art_Gallery_and_Museum_-_geograph.org.uk_-_540936.jpg",
  "keble-college": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Keble_College_Chapel_-_Oct_2006.jpg/800px-Keble_College_Chapel_-_Oct_2006.jpg",
  "southampton-city-art-gallery": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Southampton_Civic_Centre%2C_2008.jpg/1280px-Southampton_Civic_Centre%2C_2008.jpg",
  "de-morgan-collection": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_De_Morgan_Centre%2C_38_West_Hill%2C_Wandsworth_-_geograph.org.uk_-_1008800.jpg/800px-The_De_Morgan_Centre%2C_38_West_Hill%2C_Wandsworth_-_geograph.org.uk_-_1008800.jpg",
};

async function main() {
  console.log("Adding museum images...\n");

  let updated = 0;
  let notFound = 0;
  let alreadyHasImage = 0;

  for (const [slug, imageUrl] of Object.entries(museumImages)) {
    const museum = await prisma.museum.findUnique({ where: { slug } });

    if (!museum) {
      console.log(`Not found: ${slug}`);
      notFound++;
      continue;
    }

    if (museum.imageUrl) {
      alreadyHasImage++;
      continue;
    }

    await prisma.museum.update({
      where: { slug },
      data: { imageUrl },
    });
    console.log(`Updated: ${museum.name}`);
    updated++;
  }

  const totalMuseums = await prisma.museum.count();
  const withImage = await prisma.museum.count({ where: { imageUrl: { not: null } } });

  console.log("\n=== Results ===");
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Already had image: ${alreadyHasImage}`);
  console.log(`\nTotal museums: ${totalMuseums}`);
  console.log(`With images: ${withImage} (${Math.round(withImage/totalMuseums*100)}%)`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
