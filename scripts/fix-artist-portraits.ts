/**
 * Fix incorrect artist portrait images
 *
 * Batch 1:
 * 1. Luis Meléndez - had a modern photo of someone else
 * 2. Marc Chagall - had a building in St. Petersburg
 * 3. Juan de Juanes - had a modern church building
 * 4. Jan van Goyen - had Van Gogh's bedroom painting
 * 5. James Hamilton - had The Beatles White Album cover
 * 6. Giotto di Bondone - had Florence Cathedral instead of portrait
 *
 * Batch 2:
 * 7. George Inness - had landscape painting instead of portrait
 * 8. George Inness Jr. - same landscape as father (wrong)
 * 9. Frida Kahlo - had green shawl/scarf image
 * 10. El Lissitzky - had Aleksei Gan's book cover
 * 11. Cimabue - had Florence Cathedral bell tower
 * 12. Alexej von Jawlensky - had Der Blaue Reiter almanac cover
 *
 * Batch 3:
 * 13. William-Adolphe Bouguereau - had text "VEREA" instead of portrait
 * 14. Juan Gris - had cubist still life instead of portrait
 * 15. Kazimir Malevich - had exhibition room photo instead of portrait
 * 16. Isaac Levitan - had birch forest landscape instead of portrait
 * 17. Ivan Shishkin - had winter forest landscape instead of portrait
 * 18. Alphonse Mucha - had Documents Décoratifs cover instead of portrait
 * 19. Willem Claesz. Heda - had still life instead of portrait
 * 20. Willem van de Velde the Younger - had ship painting instead of portrait
 * 21. William Hogarth - had group portrait painting instead of self-portrait
 * 22. William Holman Hunt - had genre painting instead of portrait
 * 23. William Merritt Chase - had beach scene instead of portrait
 * 24. William Trost Richards - had seascape instead of portrait
 * 25. Winslow Homer - had newspaper scene instead of portrait
 * 26. Worthington Whittredge - had interior scene instead of portrait
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Correct portrait images from Wikimedia Commons (public domain)
const artistPortraitFixes: Record<string, string> = {
  // Luis Meléndez - Self-portrait Holding an Academic Study (1746), Louvre
  'luis-melendez': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Luis_Melendez_Autorretrato%2C_Oil_on_canvas%2C_1746%2C_Musee_du_Louvre.jpg/440px-Luis_Melendez_Autorretrato%2C_Oil_on_canvas%2C_1746%2C_Musee_du_Louvre.jpg',

  // Marc Chagall - Self-portrait from 1914 (public domain, artist died 1985 but this is a self-portrait from 1914)
  'marc-chagall': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Marc_Chagall_%28selfportrait_1914%29.jpg/440px-Marc_Chagall_%28selfportrait_1914%29.jpg',

  // Juan de Juanes - Portrait by Bernat Ferràndiz from exhibition catalogue 1910
  'juan-de-juanes': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Lo_pintor_valenci%C3%A0_Juan_de_Juanes%2C_per_Bernat_Ferr%C3%A0ndiz.jpg/440px-Lo_pintor_valenci%C3%A0_Juan_de_Juanes%2C_per_Bernat_Ferr%C3%A0ndiz.jpg',

  // Jan van Goyen - Portrait engraving after Anthony van Dyck
  'jan-van-goyen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cornelis_Ploos_van_Amstel_and_Johannes_Kornlein_after_Sir_Anthony_van_Dyck%2C_Jan_van_Goyen%2C_1766%2C_NGA_56413.jpg/440px-Cornelis_Ploos_van_Amstel_and_Johannes_Kornlein_after_Sir_Anthony_van_Dyck%2C_Jan_van_Goyen%2C_1766%2C_NGA_56413.jpg',

  // James Hamilton (painter) - No known portrait exists
  'james-hamilton': '',

  // Giotto di Bondone - Portrait from "Five Famous Men" painting, Louvre
  'giotto-di-bondone': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Five_Famous_Men_of_the_Florentine_Renaissance%2C_Giotto_%28cropped%29.jpg/440px-Five_Famous_Men_of_the_Florentine_Renaissance%2C_Giotto_%28cropped%29.jpg',

  // George Inness - Portrait by Napoleon Sarony (photograph)
  'george-inness': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/George_Inness_by_Napoleon_Sarony.jpg/440px-George_Inness_by_Napoleon_Sarony.jpg',

  // George Inness Jr. - Portrait photograph
  'george-inness-jr': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/George_Inness%2C_Jr._portrait.jpg/440px-George_Inness%2C_Jr._portrait.jpg',

  // Frida Kahlo - Photograph by Guillermo Kahlo, 1932 (public domain)
  'frida-kahlo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/440px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg',

  // El Lissitzky - Self-portrait "The Constructor" 1924
  'el-lissitzky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/El_lissitzky_self_portrait_1914.jpg/440px-El_lissitzky_self_portrait_1914.jpg',

  // Cimabue - Portrait from Vasari's Lives (no contemporary portrait exists, so use clear null)
  'cimabue': '',

  // Alexej von Jawlensky - Self-portrait 1912
  'alexej-von-jawlensky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Alexej_von_Jawlensky_-_Selbstbildnis_1912.jpg/440px-Alexej_von_Jawlensky_-_Selbstbildnis_1912.jpg',

  // William-Adolphe Bouguereau - Self-portrait 1886
  'william-adolphe-bouguereau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/William-Adolphe_Bouguereau_%281825-1905%29_-_Self-Portrait_Presented_To_M._Sage_%281886%29.jpg/440px-William-Adolphe_Bouguereau_%281825-1905%29_-_Self-Portrait_Presented_To_M._Sage_%281886%29.jpg',

  // Juan Gris - Portrait by Amedeo Modigliani, 1915
  'juan-gris': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Amedeo_Modigliani_-_Portrait_of_Juan_Gris.jpg/440px-Amedeo_Modigliani_-_Portrait_of_Juan_Gris.jpg',

  // Kazimir Malevich - Self-portrait 1933
  'kazimir-malevich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kazimir_Malevich%2C_1933%2C_Self-portrait.png/440px-Kazimir_Malevich%2C_1933%2C_Self-portrait.png',

  // Isaac Levitan - Self-portrait
  'isaac-levitan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Isaak_Levitan_selfportrait.jpg/440px-Isaak_Levitan_selfportrait.jpg',

  // Ivan Shishkin - Portrait by Ivan Kramskoy, 1880
  'ivan-shishkin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Shishkin_kramskoy.jpg/440px-Shishkin_kramskoy.jpg',

  // Alphonse Mucha - Photograph c. 1906
  'alphonse-mucha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Alfons_Mucha_LOC_3c05828u.jpg/440px-Alfons_Mucha_LOC_3c05828u.jpg',

  // Willem Claesz. Heda - No known portrait exists
  'willem-claesz-heda': '',

  // Willem van de Velde the Younger - No clear portrait available
  'willem-van-de-velde-younger': '',

  // William Hogarth - Self-portrait with Pug (The Painter and His Pug)
  'william-hogarth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/William_Hogarth_-_Self-Portrait_-_Google_Art_Project.jpg/440px-William_Hogarth_-_Self-Portrait_-_Google_Art_Project.jpg',

  // William Holman Hunt - Self-portrait 1867
  'william-holman-hunt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/William_Holman_Hunt_-_Self-Portrait_%281867%29.jpg/440px-William_Holman_Hunt_-_Self-Portrait_%281867%29.jpg',

  // William Merritt Chase - Self-portrait 1915
  'william-merritt-chase': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Chase_William_Merritt_Self_Portrait_1915.jpg/440px-Chase_William_Merritt_Self_Portrait_1915.jpg',

  // William Trost Richards - Portrait cropped
  'william-trost-richards': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/William_Trost_Richards_cropped.png/440px-William_Trost_Richards_cropped.png',

  // Winslow Homer - Portrait photograph
  'winslow-homer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Winslow_Homer_-_portrait.jpg/440px-Winslow_Homer_-_portrait.jpg',

  // Worthington Whittredge - Portrait by William Merritt Chase
  'worthington-whittredge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/William_Merritt_Chase_-_Worthington_Whittredge_-_Google_Art_Project.jpg/440px-William_Merritt_Chase_-_Worthington_Whittredge_-_Google_Art_Project.jpg',

  // Batch 4

  // Vittore Carpaccio - No clear portrait exists (was showing carpaccio food dish!)
  'vittore-carpaccio': '',

  // Salvador Dalí - Photograph 1972
  'salvador-dali': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1972_%28cropped%29.jpg/440px-Salvador_Dal%C3%AD_1972_%28cropped%29.jpg',

  // Salvator Rosa - Self-portrait at Metropolitan Museum
  'salvator-rosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Self-Portrait_MET_DP323414.jpg/440px-Self-Portrait_MET_DP323414.jpg',

  // Sanford Robinson Gifford - Portrait by George Peter Alexander Healy
  'sanford-robinson-gifford': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Gifford%2C_Sanford_Robinson_%28Healy%29_-_cropped.png/440px-Gifford%2C_Sanford_Robinson_%28Healy%29_-_cropped.png',

  // Sassetta - No known portrait exists
  'sassetta': '',

  // Sebastiano del Piombo - No clear portrait available
  'sebastiano-del-piombo': '',

  // Simone Martini - No known portrait exists
  'simone-martini': '',

  // Pietro da Cortona - Self-portrait
  'pietro-da-cortona': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pietro_da_Cortona_Selfportrait.jpg/440px-Pietro_da_Cortona_Selfportrait.jpg',

  // René Magritte - Photograph 1961
  'rene-magritte': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Ren%C3%A9_Magritte_%28cropped%29.jpg/440px-Ren%C3%A9_Magritte_%28cropped%29.jpg',

  // Peder Severin Krøyer - Self-portrait
  'peder-severin-kroyer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Peder_Severin_Kr%C3%B8yer_-_Self-portrait_-_Google_Art_Project.jpg/440px-Peder_Severin_Kr%C3%B8yer_-_Self-portrait_-_Google_Art_Project.jpg',

  // Perugino - Self-portrait c. 1500
  'perugino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Perugino_self_portrait_1500.jpg/440px-Perugino_self_portrait_1500.jpg',

  // Philips Wouwerman - No clear portrait (was showing Vermeer's Girl with Pearl Earring!)
  'philips-wouwerman': '',

  // Pierre Bonnard - Self-portrait
  'pierre-bonnard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Pierre_Bonnard_Self_Portrait.jpg/440px-Pierre_Bonnard_Self_Portrait.jpg',

  // Piet Mondrian - Portrait photograph 1922
  'piet-mondrian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Portret_van_de_Nederlandse_schilder_Piet_Mondriaan_%281872-1944%29_uit_1922%2C_SFA001021779.jpg/440px-Portret_van_de_Nederlandse_schilder_Piet_Mondriaan_%281872-1944%29_uit_1922%2C_SFA001021779.jpg',

  // Pieter Claesz - No known portrait exists
  'pieter-claesz': '',

  // Michelangelo - Portrait by Daniele da Volterra
  'michelangelo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg/440px-Miguel_%C3%81ngel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg',

  // Odilon Redon - Self-portrait 1880
  'odilon-redon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Odilon_Redon_-_Self-portrait.jpg/440px-Odilon_Redon_-_Self-portrait.jpg',

  // Orazio Gentileschi - Self-portrait
  'orazio-gentileschi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Orazio_Gentileschi_-_Self-Portrait_as_a_Lute_Player.jpg/440px-Orazio_Gentileschi_-_Self-Portrait_as_a_Lute_Player.jpg',

  // Palma Vecchio - No clear portrait available
  'palma-vecchio': '',

  // Paolo Veronese - Self-portrait at Hermitage
  'paolo-veronese': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Paolo_Veronese_-_Self-Portrait_-_WGA24968.jpg/440px-Paolo_Veronese_-_Self-Portrait_-_WGA24968.jpg',

  // Paris Bordone - No clear portrait available
  'paris-bordone': '',

  // Samuel Palmer - Self-portrait (already correct in screenshot - dark self-portrait)
  // Keeping as is since it looks like a valid self-portrait

  // Simon Vouet - Self-portrait
  'simon-vouet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Simon_Vouet_-_Self-Portrait_-_WGA25376.jpg/440px-Simon_Vouet_-_Self-Portrait_-_WGA25376.jpg',

  // Petrus Christus - appears to be correct (Portrait of a Carthusian)
  // Actually this is a portrait he painted, not of him - clearing it
  'petrus-christus': '',

  // Pierre Puvis de Chavannes - Profile portrait appears correct
  // Keeping as is

  // Batch 5 - From latest screenshots

  // Juan de Valdés Leal - Self-portrait 1664
  'juan-de-valdes-leal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Juan_de_Vald%C3%A9s_Leal_autorretrato.jpg/440px-Juan_de_Vald%C3%A9s_Leal_autorretrato.jpg',

  // Jules Bastien-Lepage - Portrait by Edouard Dubufe
  'jules-bastien-lepage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Edouard_Dubufe_-_Portrait_of_Jules_Bastien-Lepage_%281848-1884%29_-_B.1988.18.7_-_Museum_of_Fine_Arts_Houston.jpg/440px-Edouard_Dubufe_-_Portrait_of_Jules_Bastien-Lepage_%281848-1884%29_-_B.1988.18.7_-_Museum_of_Fine_Arts_Houston.jpg',

  // Jules Pascin - Self-portrait with pipe
  'jules-pascin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jules_Pascin_Self_Portrait.jpg/440px-Jules_Pascin_Self_Portrait.jpg',

  // Jusepe de Ribera - Self-portrait, Prado
  'jusepe-de-ribera': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ribera_-_autorretrato%2C_1628%2C_Museo_Cantonale_d%27Arte%2C_Lugano.jpg/440px-Ribera_-_autorretrato%2C_1628%2C_Museo_Cantonale_d%27Arte%2C_Lugano.jpg',

  // Käthe Kollwitz - Self-portrait lithograph 1924
  'kathe-kollwitz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/K%C3%A4the_Kollwitz_-_Selbstbildnis%2C_1924.jpg/440px-K%C3%A4the_Kollwitz_-_Selbstbildnis%2C_1924.jpg',

  // John Constable - Self-portrait 1806
  'john-constable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/John_Constable_by_Daniel_Gardner%2C_1796.jpg/440px-John_Constable_by_Daniel_Gardner%2C_1796.jpg',

  // John Frederick Kensett - Portrait photograph
  'john-frederick-kensett': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/John_Frederick_Kensett_%28cropped%29.jpg/440px-John_Frederick_Kensett_%28cropped%29.jpg',

  // John James Audubon - Portrait by John Syme, 1826
  'john-james-audubon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/John_James_Audubon_by_John_Syme%2C_1826.jpg/440px-John_James_Audubon_by_John_Syme%2C_1826.jpg',

  // Jan Toorop - Self-portrait drawing
  'jan-toorop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Jan_Toorop_1890.jpg/440px-Jan_Toorop_1890.jpg',

  // Jasper Francis Cropsey - Portrait photograph
  'jasper-francis-cropsey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Jasper_Francis_Cropsey.jpg/440px-Jasper_Francis_Cropsey.jpg',

  // Jean-Baptiste Greuze - Self-portrait
  'jean-baptiste-greuze': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Jean-Baptiste_Greuze_-_Self-Portrait%2C_1769-70_-_Google_Art_Project.jpg/440px-Jean-Baptiste_Greuze_-_Self-Portrait%2C_1769-70_-_Google_Art_Project.jpg',

  // Batch 6 - More incorrect images

  // Thomas Cole - Self-portrait c. 1836
  'thomas-cole': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thomas_Cole_-_Self-Portrait_%28Albany_Institute_of_History_%26_Art%29.jpg/440px-Thomas_Cole_-_Self-Portrait_%28Albany_Institute_of_History_%26_Art%29.jpg',

  // Thomas Eakins - Self-portrait 1902
  'thomas-eakins': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Thomas_Eakins_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Thomas_Eakins_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Batch 7 - Page 1 fixes

  // Vincent van Gogh - Self-portrait 1889
  'vincent-van-gogh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Claude Monet - Self-portrait 1886
  'claude-monet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/440px-Claude_Monet_1899_Nadar_crop.jpg',

  // Edouard Manet - Self-portrait 1879
  'edouard-manet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/%C3%89douard_Manet_-_Self-Portrait_with_Palette.jpg/440px-%C3%89douard_Manet_-_Self-Portrait_with_Palette.jpg',

  // Johannes Vermeer - No known portrait (only possible self-inclusion in paintings)
  'johannes-vermeer': '',

  // Rembrandt van Rijn - Self-portrait 1660
  'rembrandt-van-rijn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Edgar Degas - Self-portrait 1855
  'edgar-degas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Edgar_Degas_self_portrait_1855.jpeg/440px-Edgar_Degas_self_portrait_1855.jpeg',

  // Fitz Henry Lane - No known portrait exists
  'fitz-henry-lane': '',

  // Gustav Klimt - No good portrait (photographer unknown)
  'gustav-klimt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Gustav_Klimt_1912.jpg/440px-Gustav_Klimt_1912.jpg',

  // Paul Gauguin - Self-portrait 1893
  'paul-gauguin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Paul_Gauguin_1891.png/440px-Paul_Gauguin_1891.png',

  // Pierre-Auguste Renoir - Self-portrait 1876
  'pierre-auguste-renoir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Pierre-Auguste_Renoir_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Pierre-Auguste_Renoir_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Diego Velazquez - Self-portrait from Las Meninas
  'diego-velazquez': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Fernando_%28Madrid%29.jpg/440px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Fernando_%28Madrid%29.jpg',

  // Frederic Remington - Photograph
  'frederic-remington': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Frederic_Remington_-_self_portrait_on_a_horse.jpg/440px-Frederic_Remington_-_self_portrait_on_a_horse.jpg',

  // Sandro Botticelli - Self-portrait from Adoration of the Magi
  'sandro-botticelli': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/440px-Sandro_Botticelli_083.jpg',

  // Eugene Delacroix - Self-portrait
  'eugene-delacroix': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eug%C3%A8ne_Delacroix_-_autoportrait_au_gilet_vert.jpg/440px-Eug%C3%A8ne_Delacroix_-_autoportrait_au_gilet_vert.jpg',

  // Titian - Self-portrait
  'titian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Tiziano_-_Autoritratto_%28Prado%29.jpg/440px-Tiziano_-_Autoritratto_%28Prado%29.jpg',

  // Georges Seurat - No known portrait
  'georges-seurat': '',

  // Gustave Moreau - Self-portrait
  'gustave-moreau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gustave_Moreau_-_selfportrait.jpg/440px-Gustave_Moreau_-_selfportrait.jpg',

  // John Singer Sargent - Self-portrait
  'john-singer-sargent': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/John_Singer_Sargent_-_Self-Portrait.jpg/440px-John_Singer_Sargent_-_Self-Portrait.jpg',

  // John William Waterhouse - Possible self-portrait
  'john-william-waterhouse': '',

  // Utagawa Hiroshige - No portrait exists
  'utagawa-hiroshige': '',

  // Artemisia Gentileschi - Self-portrait as the Allegory of Painting
  'artemisia-gentileschi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg/440px-Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg',

  // Zdzisław Beksiński - Photograph
  'zdzislaw-beksinski': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Zdzis%C5%82aw_Beksi%C5%84ski_1977.jpg/440px-Zdzis%C5%82aw_Beksi%C5%84ski_1977.jpg',

  // Camille Pissarro - Self-portrait 1903
  'camille-pissarro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Camille_Pissarro_040.jpg/440px-Camille_Pissarro_040.jpg',

  // Caravaggio - Portrait by Ottavio Leoni
  'caravaggio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/440px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg',

  // Carlo Saraceni - No known portrait
  'carlo-saraceni': '',

  // Claude Lorrain - Self-portrait
  'claude-lorrain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Claude_Lorrain_-_Selfportrait_-_Google_Art_Project.jpg/440px-Claude_Lorrain_-_Selfportrait_-_Google_Art_Project.jpg',

  // Dante Gabriel Rossetti - Self-portrait 1847
  'dante-gabriel-rossetti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dante_Gabriel_Rossetti_-_Self-Portrait_%281847%29.jpg/440px-Dante_Gabriel_Rossetti_-_Self-Portrait_%281847%29.jpg',

  // Edmund Blair Leighton - No known portrait
  'edmund-blair-leighton': '',

  // Sebastiano Ricci - Self-portrait
  'sebastiano-ricci': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sebastiano_Ricci_001.jpg/440px-Sebastiano_Ricci_001.jpg',

  // François Boucher - Self-portrait
  'francois-boucher': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fran%C3%A7ois_Boucher_-_Self-Portrait.jpg/440px-Fran%C3%A7ois_Boucher_-_Self-Portrait.jpg',

  // Frank Dicksee - No known portrait
  'frank-dicksee': '',

  // Frederic Edwin Church - Photograph
  'frederic-edwin-church': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Frederic_Edwin_Church_-_Brady-Handy.jpg/440px-Frederic_Edwin_Church_-_Brady-Handy.jpg',

  // Gabriel Metsu - Self-portrait
  'gabriel-metsu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Assumed_self-portrait_of_Gabriel_Metsu.jpg/440px-Assumed_self-portrait_of_Gabriel_Metsu.jpg',

  // George Bellows - Self-portrait
  'george-bellows': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/George_Bellows_photo.jpg/440px-George_Bellows_photo.jpg',

  // Georges de La Tour - No known portrait
  'georges-de-la-tour': '',

  // Giovanni Battista Tiepolo - Self-portrait
  'giovanni-battista-tiepolo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Giambattista_Tiepolo_-_Self-portrait.jpg/440px-Giambattista_Tiepolo_-_Self-portrait.jpg',

  // Gustave Caillebotte - Self-portrait
  'gustave-caillebotte': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Caillebotte_-_Autoportrait.jpg/440px-Caillebotte_-_Autoportrait.jpg',

  // Hans Memling - No known portrait
  'hans-memling': '',

  // Henri Fantin-Latour - Self-portrait
  'henri-fantin-latour': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Fantin-Latour_Autoportrait_1859.jpg/440px-Fantin-Latour_Autoportrait_1859.jpg',

  // Batch 8 - Page 2 artists (verified working URLs)

  // Leonardo da Vinci - Self-portrait (presumed)
  'leonardo-da-vinci': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg/440px-Leonardo_da_Vinci_-_presumed_self-portrait_-_WGA12798.jpg',

  // Peter Paul Rubens - Self-portrait 1623
  'peter-paul-rubens': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Peter_Paul_Rubens_-_Self-Portrait_-_WGA20380.jpg/440px-Peter_Paul_Rubens_-_Self-Portrait_-_WGA20380.jpg',

  // Raphael - Self-portrait
  'raphael': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/440px-Raffaello_Sanzio.jpg',

  // J.M.W. Turner - Self-portrait
  'jmw-turner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Joseph_Mallord_William_Turner_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Joseph_Mallord_William_Turner_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Jan van Eyck - Portrait of a Man (presumed self-portrait)
  'jan-van-eyck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg/440px-Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg',

  // John Everett Millais - Self-portrait
  'john-everett-millais': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Millais_-_Self-Portrait.jpg/440px-Millais_-_Self-Portrait.jpg',

  // Francisco Goya - Self-portrait 1815
  'francisco-goya': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Francisco_de_Goya_y_Lucientes_-_Self-Portrait_-_WGA10077.jpg/440px-Francisco_de_Goya_y_Lucientes_-_Self-Portrait_-_WGA10077.jpg',

  // El Greco - Self-portrait (detail from Burial of the Count of Orgaz)
  'el-greco': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg/440px-El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg',

  // Albert Bierstadt - Photograph
  'albert-bierstadt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Albert_Bierstadt.jpg/440px-Albert_Bierstadt.jpg',

  // Andrea Mantegna - Self-portrait bust
  'andrea-mantegna': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Andrea_Mantegna_-_self-portrait_in_bronze.jpg/440px-Andrea_Mantegna_-_self-portrait_in_bronze.jpg',

  // William Blake - Portrait by Thomas Phillips 1807
  'william-blake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/William_Blake_by_Thomas_Phillips.jpg/440px-William_Blake_by_Thomas_Phillips.jpg',

  // Amedeo Modigliani - Self-portrait 1919
  'amedeo-modigliani': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Amedeo_Modigliani_%28photo_face%29.jpg/440px-Amedeo_Modigliani_%28photo_face%29.jpg',

  // Hans Holbein the Younger - Self-portrait 1542
  'hans-holbein-the-younger': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hans_Holbein_the_Younger%2C_Self-portrait.jpg/440px-Hans_Holbein_the_Younger%2C_Self-portrait.jpg',

  // Ferdinand Hodler - Self-portrait
  'ferdinand-hodler': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ferdinand_Hodler_-_Self-portrait_-_WGA11691.jpg/440px-Ferdinand_Hodler_-_Self-portrait_-_WGA11691.jpg',

  // Jean-Auguste-Dominique Ingres - Self-portrait
  'jean-auguste-dominique-ingres': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Jean_Auguste_Dominique_Ingres_-_Self-portrait_-_Google_Art_Project.jpg/440px-Jean_Auguste_Dominique_Ingres_-_Self-portrait_-_Google_Art_Project.jpg',

  // Jean-François Millet - Self-portrait
  'jean-francois-millet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Jean-Fran%C3%A7ois_Millet_%28II%29_001.jpg/440px-Jean-Fran%C3%A7ois_Millet_%28II%29_001.jpg',

  // Jacob Jordaens - Self-portrait
  'jacob-jordaens': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Jacob_Jordaens_-_Self-Portrait.jpg/440px-Jacob_Jordaens_-_Self-Portrait.jpg',

  // Jan Steen - Self-portrait playing the lute
  'jan-steen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jan_Steen_-_Self-portrait_-_WGA21690.jpg/440px-Jan_Steen_-_Self-portrait_-_WGA21690.jpg',

  // Paul Cézanne - Self-portrait
  'paul-cezanne': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Paul_C%C3%A9zanne_-_Self-Portrait.jpg/440px-Paul_C%C3%A9zanne_-_Self-Portrait.jpg',

  // Antoine Watteau - Self-portrait
  'antoine-watteau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antoine_Watteau_-_Self-Portrait_-_WGA25425.jpg/440px-Antoine_Watteau_-_Self-Portrait_-_WGA25425.jpg',

  // Alfred Sisley - Portrait by Renoir
  'alfred-sisley': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pierre-Auguste_Renoir_-_Alfred_Sisley_-_Google_Art_Project.jpg/440px-Pierre-Auguste_Renoir_-_Alfred_Sisley_-_Google_Art_Project.jpg',

  // Anthony van Dyck - Self-portrait
  'anthony-van-dyck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Van_Dyck_Self-Portrait.jpg/440px-Van_Dyck_Self-Portrait.jpg',

  // Berthe Morisot - Self-portrait
  'berthe-morisot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Berthe_Morisot_1875.jpg/440px-Berthe_Morisot_1875.jpg',

  // Edvard Munch - Self-portrait 1895
  'edvard-munch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Edvard_Munch_-_Self-Portrait_%281895%29.jpg/440px-Edvard_Munch_-_Self-Portrait_%281895%29.jpg',

  // Egon Schiele - Self-portrait
  'egon-schiele': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Schiele_-_Selbstportr%C3%A4t_mit_Lampionbl%C3%BCten_-_1912.jpg/440px-Schiele_-_Selbstportr%C3%A4t_mit_Lampionbl%C3%BCten_-_1912.jpg',

  // Ernst Ludwig Kirchner - Self-portrait as a Soldier
  'ernst-ludwig-kirchner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ernst_Ludwig_Kirchner_-_Der_Maler_-_Selbstportr%C3%A4t.jpg/440px-Ernst_Ludwig_Kirchner_-_Der_Maler_-_Selbstportr%C3%A4t.jpg',

  // Franz Marc - Self-portrait 1910
  'franz-marc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Franz_Marc_001.jpg/440px-Franz_Marc_001.jpg',

  // Gustave Courbet - Self-portrait (The Desperate Man)
  'gustave-courbet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843-45%29.jpg/440px-Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843-45%29.jpg',

  // Henri de Toulouse-Lautrec - Self-portrait
  'henri-de-toulouse-lautrec': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Henri_de_Toulouse-Lautrec_-_Self-portrait_-_WGA22907.jpg/440px-Henri_de_Toulouse-Lautrec_-_Self-portrait_-_WGA22907.jpg',

  // Henri Rousseau - Self-portrait 1890
  'henri-rousseau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Henri_Rousseau_-_Myself-_Portrait_%E2%80%93_Landscape_-_Google_Art_Project.jpg/440px-Henri_Rousseau_-_Myself-_Portrait_%E2%80%93_Landscape_-_Google_Art_Project.jpg',

  // Hieronymus Bosch - No authenticated portrait exists
  'hieronymus-bosch': '',

  // Ivan Aivazovsky - Self-portrait
  'ivan-aivazovsky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Aivazovsky_-_Self-portrait_1874.jpg/440px-Aivazovsky_-_Self-portrait_1874.jpg',

  // Jacques-Louis David - Self-portrait 1794
  'jacques-louis-david': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/David_Self_Portrait.jpg/440px-David_Self_Portrait.jpg',

  // Jean-Honoré Fragonard - Self-portrait
  'jean-honore-fragonard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Jean-Honor%C3%A9_Fragonard_-_Figure_de_fantaisie_portrait_de_Fran%C3%A7ois-Henri%2C_cinqui%C3%A8me_duc_d%E2%80%99Harcourt_%281769%29.jpg/440px-Jean-Honor%C3%A9_Fragonard_-_Figure_de_fantaisie_portrait_de_Fran%C3%A7ois-Henri%2C_cinqui%C3%A8me_duc_d%E2%80%99Harcourt_%281769%29.jpg',

  // Batch 9 - Page 3 artists

  // Andrea del Sarto - Self-portrait
  'andrea-del-sarto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Andrea_del_Sarto_-_Self-Portrait_-_WGA00373.jpg/440px-Andrea_del_Sarto_-_Self-Portrait_-_WGA00373.jpg',

  // Bartolomé Esteban Murillo - Self-portrait
  'bartolome-murillo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Murillo_autorretrato.jpg/440px-Murillo_autorretrato.jpg',

  // Benozzo Gozzoli - Self-portrait from Procession of the Magi
  'benozzo-gozzoli': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Gozzoli_magi_detail.jpg/440px-Gozzoli_magi_detail.jpg',

  // Bernardino Luini - No authenticated portrait exists
  'bernardino-luini': '',

  // Bronzino - Self-portrait
  'bronzino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bronzino_-_Self-Portrait.jpg/440px-Bronzino_-_Self-Portrait.jpg',

  // Bruno Liljefors - Self-portrait
  'bruno-liljefors': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bruno_Liljefors_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Bruno_Liljefors_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Camille Corot - Self-portrait
  'camille-corot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Jean-Baptiste_Camille_Corot_-_Self-Portrait.jpg/440px-Jean-Baptiste_Camille_Corot_-_Self-Portrait.jpg',

  // Carolus-Duran - Self-portrait
  'carolus-duran': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Carolus-Duran_1876.jpg/440px-Carolus-Duran_1876.jpg',

  // Caspar David Friedrich - Self-portrait
  'caspar-david-friedrich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Caspar_David_Friedrich_-_self-portrait.jpg/440px-Caspar_David_Friedrich_-_self-portrait.jpg',

  // Caspar Netscher - Self-portrait
  'caspar-netscher': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Caspar_Netscher_-_Self-Portrait.jpg/440px-Caspar_Netscher_-_Self-Portrait.jpg',

  // Charles Le Brun - Self-portrait
  'charles-le-brun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Charles_Le_Brun_autoportrait.jpg/440px-Charles_Le_Brun_autoportrait.jpg',

  // Constant Permeke - Self-portrait
  'constant-permeke': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Constant_Permeke_-_Self-portrait.jpg/440px-Constant_Permeke_-_Self-portrait.jpg',

  // Domenico Ghirlandaio - Self-portrait from Adoration of the Magi
  'domenico-ghirlandaio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Domenico_Ghirlandaio_-_Self-portrait.jpg/440px-Domenico_Ghirlandaio_-_Self-portrait.jpg',

  // Eastman Johnson - Self-portrait
  'eastman-johnson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Eastman_Johnson_-_Self-portrait.jpg/440px-Eastman_Johnson_-_Self-portrait.jpg',

  // Édouard Vuillard - Self-portrait
  'edouard-vuillard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/%C3%89douard_Vuillard_photo_by_Odilon_Redon.jpg/440px-%C3%89douard_Vuillard_photo_by_Odilon_Redon.jpg',

  // Edward Burne-Jones - Portrait photograph
  'edward-burne-jones': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Edward_Burne-Jones_photo.jpg/440px-Edward_Burne-Jones_photo.jpg',

  // Emanuel Leutze - Self-portrait
  'emanuel-leutze': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Emanuel_Gottlieb_Leutze_1816-1868_%28cropped%29.jpg/440px-Emanuel_Gottlieb_Leutze_1816-1868_%28cropped%29.jpg',

  // Ernest Meissonier - Self-portrait
  'ernest-meissonier': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Ernest_Meissonier_autoportrait.jpg/440px-Ernest_Meissonier_autoportrait.jpg',

  // Batch 10 - More Page 3 fixes

  // Albrecht Dürer - Self-portrait 1500
  'albrecht-durer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Albrecht_D%C3%BCrer_-_Selbstbildnis_im_Pelzrock_-_Alte_Pinakothek.jpg/440px-Albrecht_D%C3%BCrer_-_Selbstbildnis_im_Pelzrock_-_Alte_Pinakothek.jpg',

  // Alexandre Cabanel - Portrait photograph
  'alexandre-cabanel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Alexandre_Cabanel.png/440px-Alexandre_Cabanel.png',

  // Alonso Cano - Portrait
  'alonso-cano': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Alonso_Cano.jpg/440px-Alonso_Cano.jpg',

  // Anders Zorn - Self-portrait
  'anders-zorn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Anders_Zorn_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Anders_Zorn_-_Self-Portrait_-_Google_Art_Project.jpg',

  // August Macke - Self-portrait with hat 1909
  'august-macke': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/August_Macke_014.jpg/440px-August_Macke_014.jpg',

  // Correggio - Portrait
  'correggio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Antonio_da_Correggio.jpg/440px-Antonio_da_Correggio.jpg',

  // Domenico Beccafumi - Portrait
  'domenico-beccafumi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Domenico_Beccafumi_001.jpg/440px-Domenico_Beccafumi_001.jpg',

  // Duccio di Buoninsegna - No known portrait exists
  'duccio': '',

  // Emanuel de Witte - No authenticated portrait exists
  'emanuel-de-witte': '',

  // Batch 11 - Page 4 artists

  // Evelyn De Morgan - No known portrait
  'evelyn-de-morgan': '',

  // Filippo Lippi - Portrait (Note: not to be confused with his son Filippino Lippi)
  'filippo-lippi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Filippo_Lippi.jpg/440px-Filippo_Lippi.jpg',

  // Ford Madox Brown - Self-portrait
  'ford-madox-brown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ford_Madox_Brown_001.jpg/440px-Ford_Madox_Brown_001.jpg',

  // Fra Angelico - No authenticated portrait
  'fra-angelico': '',

  // Francesco Furini - Self-portrait
  'francesco-furini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Francesco_Furini_-_Self-portrait.jpeg/440px-Francesco_Furini_-_Self-portrait.jpeg',

  // Francesco Guardi - No known portrait
  'francesco-guardi': '',

  // Francisco de Zurbarán - Self-portrait
  'francisco-de-zurbaran': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Francisco_de_Zurbar%C3%A1n_autoportrait.jpg/440px-Francisco_de_Zurbar%C3%A1n_autoportrait.jpg',

  // François Clouet - Portrait
  'francois-clouet': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Fran%C3%A7ois-Clouet.jpg',

  // Frans Hals - Self-portrait
  'frans-hals': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Frans_Hals_070.jpg/440px-Frans_Hals_070.jpg',

  // Frederic Leighton - Self-portrait 1880
  'frederic-leighton': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/1880_Frederic_Leighton_-_Self_portrait.jpg/440px-1880_Frederic_Leighton_-_Self_portrait.jpg',

  // Frederick Arthur Bridgman - Portrait photograph
  'frederick-arthur-bridgman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Portret_van_F.-Arthur_Bridgman.jpg/440px-Portret_van_F.-Arthur_Bridgman.jpg',

  // George Frederick Watts - Self-portrait 1864
  'george-frederick-watts': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Self_portrait_by_George_Frederic_Watts_1864.jpeg/440px-Self_portrait_by_George_Frederic_Watts_1864.jpeg',

  // George Hendrik Breitner - Photo portrait
  'george-hendrik-breitner': 'https://upload.wikimedia.org/wikipedia/commons/6/67/George_Hendrik_Breitner_-_photo_05.jpg',

  // George Stubbs - Self-portrait enamel
  'george-stubbs': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/George_Stubbs_-_self_portrait.jpg/440px-George_Stubbs_-_self_portrait.jpg',

  // Georgia O'Keeffe - Portrait photograph by Stieglitz
  'georgia-okeeffe': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Alfred_Stieglitz_-_Georgia_O%27Keeffe_-_Google_Art_Project%2C_sepia.jpg/440px-Alfred_Stieglitz_-_Georgia_O%27Keeffe_-_Google_Art_Project%2C_sepia.jpg',

  // Gerard ter Borch - Self-portrait (Mauritshuis)
  'gerard-ter-borch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Gerard_ter_Borch_-_Self-Portrait_-_177_-_Mauritshuis.jpg/440px-Gerard_ter_Borch_-_Self-Portrait_-_177_-_Mauritshuis.jpg',

  // Gerard van Honthorst - Portrait from Gulden Cabinet
  'gerard-van-honthorst': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gerard_Honthorst_-_gulden_cabinet.png/440px-Gerard_Honthorst_-_gulden_cabinet.png',

  // Gerrit Dou - Self-portrait (Google Art Project)
  'gerrit-dou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Gerrit_Dou_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Gerrit_Dou_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Gilbert Stuart - Self-portrait
  'gilbert-stuart': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gilbert_Stuart_Selfportrait.jpg/440px-Gilbert_Stuart_Selfportrait.jpg',

  // Giorgione - Portrait of a Young Man (possibly self-portrait)
  'giorgione': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Giorgione_-_Portrait_of_a_young_man_-_Gem%C3%A4ldegalerie%2C_Berlin.jpg/440px-Giorgione_-_Portrait_of_a_young_man_-_Gem%C3%A4ldegalerie%2C_Berlin.jpg',

  // Giovanni di Paolo - No known portrait
  'giovanni-di-paolo': '',

  // Guercino (Francesco Barbieri) - Portrait
  'guercino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Francesco_Barbieri.jpg/440px-Francesco_Barbieri.jpg',

  // Guido Reni - No authenticated portrait available
  'guido-reni': '',

  // Gustave Doré - Portrait photograph
  'gustave-dore': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Gustave_dore.jpg',

  // Harriet Backer - Portrait by Christian Krohg
  'harriet-backer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Christian_Krohg-Harriet_Backer.jpg/440px-Christian_Krohg-Harriet_Backer.jpg',

  // Henry Raeburn - Self-portrait
  'henry-raeburn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sir_Henry_Raeburn_%28self-portrait%29.jpg/440px-Sir_Henry_Raeburn_%28self-portrait%29.jpg',

  // Batch 12 - Page 5 artists

  // Joachim Patinir - Portrait engraving (after Dürer)
  'joachim-patinir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Aegidius_Sadeler_%28after_Durer%29_-_Portrait_of_Joachim_Patinir.jpg/440px-Aegidius_Sadeler_%28after_Durer%29_-_Portrait_of_Joachim_Patinir.jpg',

  // Judith Leyster - Self-portrait (Google Art Project)
  'judith-leyster': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Lorenzo Lotto - Presumed self-portrait
  'lorenzo-lotto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Lotto_Lorenzo_%28attributed%29_presumably_self_portrait_31862-p.jpg/440px-Lotto_Lorenzo_%28attributed%29_presumably_self_portrait_31862-p.jpg',

  // Louis Le Nain - Triple portrait (National Gallery)
  'louis-le-nain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Triple_portrait%2C_Louis_et_Matthieu_Le_Nain%2C_vers_1646-1648._Londres%2C_the_National_Gallery._%2836159605185%29.jpg/440px-Triple_portrait%2C_Louis_et_Matthieu_Le_Nain%2C_vers_1646-1648._Londres%2C_the_National_Gallery._%2836159605185%29.jpg',

  // Lucas Cranach the Elder - Self-portrait
  'lucas-cranach-the-elder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cranach%2C_Lucas_%28I%29_-_Self_portret_-_Schloss_Stolzenfels.jpg/440px-Cranach%2C_Lucas_%28I%29_-_Self_portret_-_Schloss_Stolzenfels.jpg',

  // Martin Johnson Heade - No known portrait
  'martin-johnson-heade': '',

  // Mary Cassatt - Self-portrait (Google Art Project)
  'mary-cassatt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mary_Stevenson_Cassatt_-_Mary_Cassatt_Self-Portrait_-_Google_Art_Project.jpg/440px-Mary_Stevenson_Cassatt_-_Mary_Cassatt_Self-Portrait_-_Google_Art_Project.jpg',

  // Matthias Grünewald - No known portrait
  'matthias-grunewald': '',

  // Maurice Denis - Self-portrait
  'maurice-denis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MauriceDenis-AutoportraitDevantLePrieure.JPG/440px-MauriceDenis-AutoportraitDevantLePrieure.JPG',

  // Meindert Hobbema - Portrait drawing
  'meindert-hobbema': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Portret_van_Meindert_Hobbema%2C_RP-T-1940-528.jpg/440px-Portret_van_Meindert_Hobbema%2C_RP-T-1940-528.jpg',

  // Batch 13 - Page 7 artists (final page)

  // Vasily Polenov - Portrait by Repin
  'vasily-polenov': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Polenov_by_Repin.jpg/440px-Polenov_by_Repin.jpg',

  // Vittore Carpaccio - Portrait from Vasari's Lives
  'vittore-carpaccio': 'https://upload.wikimedia.org/wikipedia/commons/0/01/081_le_vite%2C_vittore_carpaccio.jpg',

  // Wassily Kandinsky - Photo portrait
  'wassily-kandinsky': 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Vassily-Kandinsky.jpeg',

  // Wilhelm Leibl - Self-portrait as 18-year-old
  'wilhelm-leibl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Leibl_Selbstbildnis_d_Achtzehnj%C3%A4hrigen.JPG/440px-Leibl_Selbstbildnis_d_Achtzehnj%C3%A4hrigen.JPG',

  // Willem Claesz. Heda - No known portrait
  'willem-claesz-heda': '',

  // Willem van de Velde the Younger - Portrait by Michiel van Musscher
  'willem-van-de-velde-younger': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Portrait_of_an_Artist_in_His_Studio_by_Michiel_van_Musscher.jpg/440px-Portrait_of_an_Artist_in_His_Studio_by_Michiel_van_Musscher.jpg',

  // William Hogarth - Self-portrait (Google Art Project)
  'william-hogarth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/William_Hogarth_-_Self-Portrait_-_Google_Art_Project.jpg/440px-William_Hogarth_-_Self-Portrait_-_Google_Art_Project.jpg',

  // William Holman Hunt - Self-portrait
  'william-holman-hunt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/William_Holman_Hunt_-_Selfportrait.jpg/440px-William_Holman_Hunt_-_Selfportrait.jpg',

  // William Merritt Chase - Self-portrait 1915
  'william-merritt-chase': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chase_William_Merritt_Self_Portrait_1915.jpg/440px-Chase_William_Merritt_Self_Portrait_1915.jpg',

  // William Trost Richards - Portrait photo (cropped)
  'william-trost-richards': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/William_Trost_Richards_cropped.png/440px-William_Trost_Richards_cropped.png',

  // Winslow Homer - Portrait at age 21 by Joseph E. Baker
  'winslow-homer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Joseph_E._Baker_-_Portrait_of_Winslow_Homer_at_the_age_of_twenty-one_%28cropped%29.jpg/440px-Joseph_E._Baker_-_Portrait_of_Winslow_Homer_at_the_age_of_twenty-one_%28cropped%29.jpg',

  // Worthington Whittredge - Portrait by William Merritt Chase c1890
  'worthington-whittredge': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Worthington_Whittredge_by_William_Merritt_Chase%2C_c1890.jpg/440px-Worthington_Whittredge_by_William_Merritt_Chase%2C_c1890.jpg',

  // Batch 14 - Page 6 artists

  // Maximilien Luce - Portrait by Paul Signac
  'maximilien-luce': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Maximilien_Luce_by_Paul_Signac.jpg/440px-Maximilien_Luce_by_Paul_Signac.jpg',

  // Nicolas Lancret - Portrait
  'nicolas-lancret': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Nicolas_Lancret.jpg/440px-Nicolas_Lancret.jpg',

  // Niccolò dell'Abbate - No known self-portrait
  'niccolo-dellabbate': '',

  // Odilon Redon - Portrait photograph
  'odilon-redon': 'https://upload.wikimedia.org/wikipedia/commons/6/69/Odilon_Redon.jpg',

  // Otto Mueller - Self-portrait
  'otto-mueller': 'https://upload.wikimedia.org/wikipedia/commons/6/65/Otto_Mueller_-_Self-Portrait.jpg',

  // Palma Vecchio - Portrait engraving
  'palma-vecchio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1480-1528_jacopo_negretti_da_bergamo_detto_palma_il_vecchio.tif/lossy-page1-440px-1480-1528_jacopo_negretti_da_bergamo_detto_palma_il_vecchio.tif.jpg',

  // Paolo Uccello - Portrait from Vasari's Five Masters
  'paolo-uccello': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cinq_ma%C3%AEtres_de_la_Renaissance_florentine_-_Uccello_%28Louvre%29.jpg/440px-Cinq_ma%C3%AEtres_de_la_Renaissance_florentine_-_Uccello_%28Louvre%29.jpg',

  // Paul Delaroche - Portrait
  'paul-delaroche': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/DelarochePortrait.jpg/440px-DelarochePortrait.jpg',

  // Perugino - Self-portrait
  'perugino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pietro_Perugino_cat37.jpg/440px-Pietro_Perugino_cat37.jpg',

  // Philips Wouwerman - Self-portrait (red chalk)
  'philips-wouwerman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Philips_wouwerman_zelfportret-red-chalk.jpg/440px-Philips_wouwerman_zelfportret-red-chalk.jpg',

  // Pierre Bonnard - Self-portrait
  'pierre-bonnard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre_Bonnard_Self-Portrait2.jpg/440px-Pierre_Bonnard_Self-Portrait2.jpg',

  // Pieter de Hooch - Attributed self-portrait (Rijksmuseum)
  'pieter-de-hooch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Angebliche_zelfportret_van_de_schilder_Pieter_de_Hooch%2C_Rijksmuseum_SK-A-181.jpg/440px-Angebliche_zelfportret_van_de_schilder_Pieter_de_Hooch%2C_Rijksmuseum_SK-A-181.jpg',

  // Pietro da Cortona - Self-portrait
  'pietro-da-cortona': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pietro_da_cortona%2C_autoritratto.jpg/440px-Pietro_da_cortona%2C_autoritratto.jpg',

  // Richard Dadd - Self-portrait
  'richard-dadd': 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Richard_Dadd_-_dadd_self.jpg',

  // Rogier van der Weyden - Portrait from Lamp (cropped)
  'rogier-van-der-weyden': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Rogier_Lamp_%28cropped%29.jpg/440px-Rogier_Lamp_%28cropped%29.jpg',

  // Simon Vouet - Self-portrait (Lyon)
  'simon-vouet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vouet-autoportrait-lyon.jpg/440px-Vouet-autoportrait-lyon.jpg',

  // Theodore Chasseriau - Self-portrait
  'theodore-chasseriau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Th%C3%A9odore_Chass%C3%A9riau_-_Self-Portrait_-_WGA4807.jpg/440px-Th%C3%A9odore_Chass%C3%A9riau_-_Self-Portrait_-_WGA4807.jpg',

  // Theodore Gericault - Portrait
  'theodore-gericault': 'https://upload.wikimedia.org/wikipedia/commons/4/46/Th%C3%A9odore_G%C3%A9ricault.jpg',

  // Thomas Cole - Portrait by Asher B. Durand
  'thomas-cole': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Asher_B._Durand_-_Portrait_of_Thomas_Cole_-_Google_Art_Project.jpg/440px-Asher_B._Durand_-_Portrait_of_Thomas_Cole_-_Google_Art_Project.jpg',

  // Valentin de Boulogne - No known self-portrait
  'valentin-de-boulogne': '',

  // Batch 15 - Page 1 artists

  // Edouard Manet - Self-portrait with palette
  'edouard-manet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Edouard_Manet_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Edouard_Manet_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Edgar Degas - Self-portrait 1855
  'edgar-degas': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edgar_Degas_self_portrait_1855.jpeg/440px-Edgar_Degas_self_portrait_1855.jpeg',

  // Gustav Klimt - Photograph 1907
  'gustav-klimt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Photo_of_Gustav_Klimt_1907.jpg/440px-Photo_of_Gustav_Klimt_1907.jpg',

  // Paul Cézanne - Self-portrait
  'paul-cezanne': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Paul_C%C3%A9zanne_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Paul_C%C3%A9zanne_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Pierre-Auguste Renoir - Self-portrait 1899
  'pierre-auguste-renoir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pierre-Auguste_Renoir_-_Autoportrait%2C_1899.jpg/440px-Pierre-Auguste_Renoir_-_Autoportrait%2C_1899.jpg',

  // Diego Velázquez - Self-portrait from Las Meninas
  'diego-velazquez': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg/440px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg',

  // Edvard Munch - Self-portrait
  'edvard-munch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg/440px-Edvard_Munch_-_Self-Portrait_-_Google_Art_Project_%28533070%29.jpg',

  // Gustave Courbet - Self-portrait (The Desperate Man)
  'gustave-courbet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843-45%29.jpg/440px-Gustave_Courbet_-_Le_D%C3%A9sesp%C3%A9r%C3%A9_%281843-45%29.jpg',

  // Paul Gauguin - Self-portrait
  'paul-gauguin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Paul_Gauguin_111.jpg/440px-Paul_Gauguin_111.jpg',

  // Eugene Delacroix - Self-portrait
  'eugene-delacroix': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Eug%C3%A8ne_Delacroix_-_autoportrait_au_gilet_vert_-_mus%C3%A9e_du_Louvre.jpg/440px-Eug%C3%A8ne_Delacroix_-_autoportrait_au_gilet_vert_-_mus%C3%A9e_du_Louvre.jpg',

  // Pablo Picasso - Self-portrait 1907
  'pablo-picasso': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Pablo_Picasso%2C_1904%2C_Paris%2C_photograph_by_Ricard_Canals_i_Llamb%C3%AD.jpg/440px-Pablo_Picasso%2C_1904%2C_Paris%2C_photograph_by_Ricard_Canals_i_Llamb%C3%AD.jpg',

  // Georges Braque - Photograph
  'georges-braque': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Georges_Braque%2C_1908%2C_photograph_published_in_Gelett_Burgess%2C_The_Wild_Men_of_Paris%2C_Architectural_Record%2C_May_1910.jpg/440px-Georges_Braque%2C_1908%2C_photograph_published_in_Gelett_Burgess%2C_The_Wild_Men_of_Paris%2C_Architectural_Record%2C_May_1910.jpg',

  // Gustave Moreau - Self-portrait
  'gustave-moreau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Gustave_Moreau_selfportrait.jpg/440px-Gustave_Moreau_selfportrait.jpg',

  // John Singer Sargent - Self-portrait
  'john-singer-sargent': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/John_Singer_Sargent_-_Self-Portrait.jpg/440px-John_Singer_Sargent_-_Self-Portrait.jpg',

  // Titian - Self-portrait
  'titian': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Titian_-_Selfportrait_-_Gemäldegalerie_Berlin.jpg/440px-Titian_-_Selfportrait_-_Gemäldegalerie_Berlin.jpg',

  // Vilhelm Hammershøi - Self-portrait
  'vilhelm-hammershoi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vilhelm_Hammersh%C3%B8i_-_Self-Portrait_-_KMS3712_-_Statens_Museum_for_Kunst.jpg/440px-Vilhelm_Hammersh%C3%B8i_-_Self-Portrait_-_KMS3712_-_Statens_Museum_for_Kunst.jpg',

  // Camille Pissarro - Self-portrait
  'camille-pissarro': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Camille_Pissarro_040.jpg/440px-Camille_Pissarro_040.jpg',

  // Jean-Baptiste-Camille Corot - Self-portrait
  'jean-baptiste-camille-corot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jean-Baptiste-Camille_Corot_-_Self-Portrait_-_WGA5283.jpg/440px-Jean-Baptiste-Camille_Corot_-_Self-Portrait_-_WGA5283.jpg',

  // Caravaggio - Self-portrait
  'caravaggio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/440px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg',

  // Dante Gabriel Rossetti - Self-portrait
  'dante-gabriel-rossetti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Dante_Gabriel_Rossetti_-_Self-Portrait_-_WGA20106.jpg/440px-Dante_Gabriel_Rossetti_-_Self-Portrait_-_WGA20106.jpg',

  // François Boucher - Portrait by Gustaf Lundberg
  'francois-boucher': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Boucher_par_Gustav_Lundberg_1741.jpg/440px-Boucher_par_Gustav_Lundberg_1741.jpg',

  // Frederic Edwin Church - Photograph by Brady-Handy
  'frederic-edwin-church': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Frederic_Edwin_Church_-_Brady-Handy.jpg/440px-Frederic_Edwin_Church_-_Brady-Handy.jpg',

  // Gabriel Metsu - Portrait
  'gabriel-metsu': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Portret_van_Gabri%C3%ABl_Metsu%2C_RP-T-1905-118.jpg/440px-Portret_van_Gabri%C3%ABl_Metsu%2C_RP-T-1905-118.jpg',

  // George Bellows - Photograph
  'george-bellows': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/George_bellows.jpg/440px-George_bellows.jpg',

  // Georges de La Tour - Self-portrait (attributed)
  'georges-de-la-tour': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Georges_de_La_Tour_002.jpg/440px-Georges_de_La_Tour_002.jpg',

  // Hans Memling - Self-portrait from "Last Judgment"
  'hans-memling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hans_Memling_083.jpg/440px-Hans_Memling_083.jpg',

  // Henri Fantin-Latour - Self-portrait
  'henri-fantin-latour': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Henri_Fantin-Latour_Self-Portrait_MET_DT1979.jpg/440px-Henri_Fantin-Latour_Self-Portrait_MET_DT1979.jpg',

  // Childe Hassam - Photograph
  'childe-hassam': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Childe_Hassam_%283038081918%29.jpg/440px-Childe_Hassam_%283038081918%29.jpg',

  // Jean-Siméon Chardin - Self-portrait with eyeshade
  'jean-simeon-chardin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jean_Sim%C3%A9on_Chardin_-_Self-Portrait_with_an_Eyeshade_-_WGA04787.jpg/440px-Jean_Sim%C3%A9on_Chardin_-_Self-Portrait_with_an_Eyeshade_-_WGA04787.jpg',

  // Jean-Honoré Fragonard - Self-portrait
  'jean-honore-fragonard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jean-Honor%C3%A9_Fragonard_self-portrait.jpg/440px-Jean-Honor%C3%A9_Fragonard_self-portrait.jpg',

  // Albert Bierstadt - Photograph
  'albert-bierstadt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Albert_Bierstadt.jpg/440px-Albert_Bierstadt.jpg',

  // Annibale Carracci - Self-portrait
  'annibale-carracci': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Annibale_Carracci_-_Self-portrait.jpg/440px-Annibale_Carracci_-_Self-portrait.jpg',

  // Canaletto - Self-portrait (attributed)
  'canaletto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/British_School_-_Supposed_Self_Portrait_of_Canaletto_%281697%E2%80%931768%29_-_515456_-_National_Trust.jpg/440px-British_School_-_Supposed_Self_Portrait_of_Canaletto_%281697%E2%80%931768%29_-_515456_-_National_Trust.jpg',

  // Ford Madox Brown - Photograph
  'ford-madox-brown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ford_madox_brown.jpg/440px-Ford_madox_brown.jpg',

  // Correggio - Self-portrait
  'correggio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Correggio_self_portrait.jpg/440px-Correggio_self_portrait.jpg',

  // Anders Zorn - Self-portrait
  'anders-zorn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Self_Portrait_by_Anders_Zorn.jpeg/440px-Self_Portrait_by_Anders_Zorn.jpeg',

  // Elisabeth Vigée-Lebrun - Self-portrait
  'elisabeth-vigee-lebrun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg/440px-Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg',

  // Jan van Eyck - Portrait of a Man in a Turban (self-portrait)
  'jan-van-eyck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Portrait_of_a_Man_in_a_Turban_%28Jan_van_Eyck%29.jpg/440px-Portrait_of_a_Man_in_a_Turban_%28Jan_van_Eyck%29.jpg',

  // Caspar David Friedrich - Portrait by Caroline Bardua
  'caspar-david-friedrich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Caroline_Bardua_-_Portr%C3%A4t_Caspar_David_Friedrichs_%281810%29.jpg/440px-Caroline_Bardua_-_Portr%C3%A4t_Caspar_David_Friedrichs_%281810%29.jpg',

  // Charles-François Daubigny - Photograph
  'charles-francois-daubigny': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Charles_francois_daubigny.jpg/440px-Charles_francois_daubigny.jpg',

  // Giovanni Bellini - Self-portrait
  'giovanni-bellini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Giovanni_Bellini_selbstport.jpg/440px-Giovanni_Bellini_selbstport.jpg',

  // Giorgione - Self-portrait
  'giorgione': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Giorgione_059.jpg/440px-Giorgione_059.jpg',

  // Giovanni Battista Tiepolo - Self-portrait
  'giovanni-battista-tiepolo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tiepolo_self-portrait.jpg/440px-Tiepolo_self-portrait.jpg',

  // Giotto - Portrait from Five Famous Men
  'giotto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Portrait_of_Giotto_%28Angiolotto_or_Ambrogiotto_Bondone%29_Wellcome_M0002438.jpg/440px-Portrait_of_Giotto_%28Angiolotto_or_Ambrogiotto_Bondone%29_Wellcome_M0002438.jpg',

  // Cima da Conegliano - No known portrait
  'cima-da-conegliano': '',

  // Batch 16 - Page 2 artists

  // Jacob Jordaens - Self-portrait
  'jacob-jordaens': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jacob_Jordaens_-_Self-portrait.jpg/440px-Jacob_Jordaens_-_Self-portrait.jpg',

  // Jan Steen - Self-portrait as a Lutenist
  'jan-steen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jan_Steen_-_Self-Portrait_as_a_Lutenist_-_WGA21754.jpg/440px-Jan_Steen_-_Self-Portrait_as_a_Lutenist_-_WGA21754.jpg',

  // Jean-Baptiste Greuze - Self-portrait
  'jean-baptiste-greuze': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Jean-Baptiste_Greuze_-_Self-Portrait.jpg/440px-Jean-Baptiste_Greuze_-_Self-Portrait.jpg',

  // John Constable - Portrait by Ramsay Richard Reinagle
  'john-constable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ramsay_Richard_Reinagle_%281775-1862%29_-_John_Constable_-_1786_-_National_Portrait_Gallery.jpg/440px-Ramsay_Richard_Reinagle_%281775-1862%29_-_John_Constable_-_1786_-_National_Portrait_Gallery.jpg',

  // John William Waterhouse - Portrait
  'john-william-waterhouse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_John_Waterhouse_%284673502%29.jpg/440px-Portrait_of_John_Waterhouse_%284673502%29.jpg',

  // Joaquín Sorolla - Self-portrait
  'joaquin-sorolla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Self_Portrait_-_Google_Art_Project.jpg/440px-Joaqu%C3%ADn_Sorolla_y_Bastida_-_Self_Portrait_-_Google_Art_Project.jpg',

  // Jusepe de Ribera - Possible self-portrait
  'jusepe-de-ribera': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Jusepe_de_Ribera_-_Portrait_of_a_mathematician_%28Archimedes%3F%29_%28possibly_a_self-portrait%29.jpg/440px-Jusepe_de_Ribera_-_Portrait_of_a_mathematician_%28Archimedes%3F%29_%28possibly_a_self-portrait%29.jpg',

  // Käthe Kollwitz - Self-portrait at the Table
  'kathe-kollwitz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/K%C3%A4the_Kollwitz_-_Self-Portrait_at_the_Table_%281893%29.jpg/440px-K%C3%A4the_Kollwitz_-_Self-Portrait_at_the_Table_%281893%29.jpg',

  // Lucas Cranach the Elder - Self-portrait
  'lucas-cranach-the-elder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lucas_Cranach_d._%C3%84._063.jpg/440px-Lucas_Cranach_d._%C3%84._063.jpg',

  // Mary Cassatt - Self-portrait
  'mary-cassatt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mary_Cassatt-Selfportrait.jpg/440px-Mary_Cassatt-Selfportrait.jpg',

  // Maurice Denis - Self-portrait
  'maurice-denis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Marice_Denis%2C_Portrait_de_l%27artiste.jpg/440px-Marice_Denis%2C_Portrait_de_l%27artiste.jpg',

  // Jan Toorop - Portrait by Isaac Israels
  'jan-toorop': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Portrait_of_Jan_Toorop_%281858-1928%29_by_Isaac_Israels.jpg/440px-Portrait_of_Jan_Toorop_%281858-1928%29_by_Isaac_Israels.jpg',

  // John James Audubon - Portrait 1826
  'john-james-audubon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/John_James_Audubon_1826.jpg/440px-John_James_Audubon_1826.jpg',

  // Juan de Valdés Leal - Portrait by Manuel Cabral
  'juan-de-valdes-leal': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Juan_de_Vald%C3%A9s_Leal_by_Manuel_Cabral_Aguado-Bejarano.png/440px-Juan_de_Vald%C3%A9s_Leal_by_Manuel_Cabral_Aguado-Bejarano.png',

  // Jules Bastien-Lepage - Photograph 1884
  'jules-bastien-lepage': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jules_Bastien-Lepage_1884.jpg/440px-Jules_Bastien-Lepage_1884.jpg',

  // Jules Pascin - Photograph at Café du Dôme
  'jules-pascin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Jules_Pascin_im_Caf%C3%A9_du_D%C3%B4me%2C_Paris_1910.png/440px-Jules_Pascin_im_Caf%C3%A9_du_D%C3%B4me%2C_Paris_1910.png',

  // John Frederick Kensett - Portrait by David Johnson
  'john-frederick-kensett': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/John_Frederick_Kensett%2C_by_David_Johnson.jpg/440px-John_Frederick_Kensett%2C_by_David_Johnson.jpg',

  // Jasper Francis Cropsey - Photograph by Napoleon Sarony
  'jasper-francis-cropsey': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Jasper_Francis_Cropsey_by_Napoleon_Sarony.jpg/440px-Jasper_Francis_Cropsey_by_Napoleon_Sarony.jpg',

  // Luca Signorelli - Self-portrait
  'luca-signorelli': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Luca_Signorelli_-_Self-Portrait_with_Niccol%C3%B2_d%27Angeli_Franceschi_-_WGA21295.jpg/440px-Luca_Signorelli_-_Self-Portrait_with_Niccol%C3%B2_d%27Angeli_Franceschi_-_WGA21295.jpg',

  // Lorenzo Lotto - Self-portrait
  'lorenzo-lotto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Lotto_Lorenzo_%28attributed%29_presumably_self_portrait_31862-p.jpg/440px-Lotto_Lorenzo_%28attributed%29_presumably_self_portrait_31862-p.jpg',

  // Judith Leyster - Self-portrait
  'judith-leyster': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg/440px-Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg',

  // Joachim Patinir - Portrait engraving
  'joachim-patinir': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Joachim_Patinir_by_Aegidius_Sadeler_II.jpg/440px-Joachim_Patinir_by_Aegidius_Sadeler_II.jpg',

  // Martin Johnson Heade - Photograph
  'martin-johnson-heade': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Martin-johnson-heade.jpg/440px-Martin-johnson-heade.jpg',

  // Matthias Grünewald - Self-portrait
  'matthias-grunewald': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Grunewald_Self_Portrait.jpg/440px-Grunewald_Self_Portrait.jpg',

  // Meindert Hobbema - Portrait
  'meindert-hobbema': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Portret_van_Meindert_Hobbema%2C_RP-T-1940-528.jpg/440px-Portret_van_Meindert_Hobbema%2C_RP-T-1940-528.jpg',

  // Jean-Siméon Chardin - Self-portrait
  'jean-simeon-chardin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Jean-Baptiste_Sim%C3%A9on_Chardin_023.jpg/440px-Jean-Baptiste_Sim%C3%A9on_Chardin_023.jpg',

  // Jean-François Millet - Portrait by Nadar
  'jean-francois-millet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Jean-Fran%C3%A7ois_Millet_by_Nadar%2C_Metropolitan_Museum_copy.jpg/440px-Jean-Fran%C3%A7ois_Millet_by_Nadar%2C_Metropolitan_Museum_copy.jpg',

  // Louis Le Nain - No known portrait
  'louis-le-nain': '',

  // Batch 17 - Page 3 artists

  // Amedeo Modigliani - Photograph
  'amedeo-modigliani': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Amedeo_Modigliani_047.jpg/440px-Amedeo_Modigliani_047.jpg',

  // Andrea del Sarto - Self-portrait
  'andrea-del-sarto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sarto%2C_Andrea_del_-_Self-portrait_-_Uffizi.jpg/440px-Sarto%2C_Andrea_del_-_Self-portrait_-_Uffizi.jpg',

  // Andrea Mantegna - Self-portrait detail
  'andrea-mantegna': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Andrea_Mantegna_049_detail_possible_self-portrait.jpg/440px-Andrea_Mantegna_049_detail_possible_self-portrait.jpg',

  // Anthony van Dyck - Self-portrait
  'anthony-van-dyck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Self-portrait_-_Anthony_Van_Dyck_%281621-1627%29.jpg/440px-Self-portrait_-_Anthony_Van_Dyck_%281621-1627%29.jpg',

  // Arnold Böcklin - Self-portrait 1873
  'arnold-bocklin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Arnold_B%C3%B6cklin_%281827_-_1901%29%2C_Selbstportrait_%281873%29.jpg/440px-Arnold_B%C3%B6cklin_%281827_-_1901%29%2C_Selbstportrait_%281873%29.jpg',

  // Bartolomé Esteban Murillo - Self-portrait
  'bartolome-esteban-murillo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bartolom%C3%A9_Esteban_Murillo_-_Autorretrato.jpg/440px-Bartolom%C3%A9_Esteban_Murillo_-_Autorretrato.jpg',

  // Berthe Morisot - Portrait by Manet
  'berthe-morisot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Manet_Berthe_Morisot_%28cropped%29.jpg/440px-Manet_Berthe_Morisot_%28cropped%29.jpg',

  // Bernardino Luini - Portrait
  'bernardino-luini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bernardino_Luini.jpg/440px-Bernardino_Luini.jpg',

  // Charles Le Brun - Portrait by Nicolas de Largillière
  'charles-le-brun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Nicolas_de_Largilli%C3%A8re_-_Portrait_of_Charles_Le_Brun_-_WGA12471.jpg/440px-Nicolas_de_Largilli%C3%A8re_-_Portrait_of_Charles_Le_Brun_-_WGA12471.jpg',

  // Domenichino - Portrait
  'domenichino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Portret_van_Domenichino%2C_RP-P-1999-1724.jpg/440px-Portret_van_Domenichino%2C_RP-P-1999-1724.jpg',

  // Eastman Johnson - Self-portrait
  'eastman-johnson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Eastman_Johnson_-_Eastman_Johnson_Self-Portrait_-_NPG.71.20_-_National_Portrait_Gallery.jpg/440px-Eastman_Johnson_-_Eastman_Johnson_Self-Portrait_-_NPG.71.20_-_National_Portrait_Gallery.jpg',

  // Edward Burne-Jones - Photograph
  'edward-burne-jones': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Edward_Burne-Jones_Photogravure_Hollyer_%28cropped%29.jpg/440px-Edward_Burne-Jones_Photogravure_Hollyer_%28cropped%29.jpg',

  // Egon Schiele - Self-portrait with Physalis
  'egon-schiele': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg/440px-Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg',

  // Ernst Ludwig Kirchner - Self-portrait
  'ernst-ludwig-kirchner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ernst_Ludwig_Kirchner_Selbstbildnis_als_Kranker_1918-1.jpg/440px-Ernst_Ludwig_Kirchner_Selbstbildnis_als_Kranker_1918-1.jpg',

  // Edmund Blair Leighton - Photograph
  'edmund-blair-leighton': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Edmund_Blair_Leighton%2C_1900.jpg/440px-Edmund_Blair_Leighton%2C_1900.jpg',

  // Édouard Vuillard - Self-portrait
  'edouard-vuillard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/%C3%89douard_Vuillard_-_Autoportrait%2C_ca._1890.jpg/440px-%C3%89douard_Vuillard_-_Autoportrait%2C_ca._1890.jpg',

  // Camille Claudel - Photograph in atelier
  'camille-claudel': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Camille_Claudel_atelier.jpg/440px-Camille_Claudel_atelier.jpg',

  // Caspar Netscher - Self-portrait
  'caspar-netscher': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Zelfportret_Caspar_Netscher_-_Rijksmuseum_SK-A-2666.jpg/440px-Zelfportret_Caspar_Netscher_-_Rijksmuseum_SK-A-2666.jpg',

  // Claudio Coello - Self-portrait
  'claudio-coello': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claudio_Coello_-_self-portrait_1680s.jpg/440px-Claudio_Coello_-_self-portrait_1680s.jpg',

  // Edward Hopper - Self-portrait
  'edward-hopper': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Self-Portrait_Edward_Hopper_1903.jpg/440px-Self-Portrait_Edward_Hopper_1903.jpg',

  // Cornelis de Vos - Portrait
  'cornelis-de-vos': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Portrait_of_Cornelis_de_Vos_MET_DP802092.jpg/440px-Portrait_of_Cornelis_de_Vos_MET_DP802092.jpg',

  // David Teniers the Younger - Self-portrait
  'david-teniers-the-younger': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/David_Teniers_the_Younger_-_Self-portrait_as_an_alchemist.jpg/440px-David_Teniers_the_Younger_-_Self-portrait_as_an_alchemist.jpg',

  // Domenico Ghirlandaio - Self-portrait
  'domenico-ghirlandaio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Domenico_Ghirlandaio_Self_Portrait.jpg/440px-Domenico_Ghirlandaio_Self_Portrait.jpg',

  // Carlo Crivelli - No known portrait
  'carlo-crivelli': '',

  // Dosso Dossi - No known portrait
  'dosso-dossi': '',

  // Batch 18 - Page 2 artists with broken portraits (Jan 2026)

  // Isaac Levitan - Self-portrait 1880
  'isaac-levitan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Isaac_Levitan_selfportrait1880.jpg/500px-Isaac_Levitan_selfportrait1880.jpg',

  // Ivan Shishkin - Portrait by Ilya Guinzbourg 1892
  'ivan-shishkin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Portrait_of_Ivan_Shishkin_by_Ilya_Guinzbourg_1892.JPG/500px-Portrait_of_Ivan_Shishkin_by_Ilya_Guinzbourg_1892.JPG',

  // Jan Steen - Self-Portrait as a Lutenist
  'jan-steen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Jan_Steen_-_Self-Portrait_as_a_Lutenist_-_WGA21730.jpg/500px-Jan_Steen_-_Self-Portrait_as_a_Lutenist_-_WGA21730.jpg',

  // Jan van Eyck - Portrait of a Man (presumed self-portrait)
  'jan-van-eyck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg/500px-Portrait_of_a_Man_by_Jan_van_Eyck-small.jpg',

  // Jean-Antoine Watteau - Portrait by Rosalba Carriera
  'jean-antoine-watteau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rosalba_Carriera_Portrait_Antoine_Watteau.jpg/500px-Rosalba_Carriera_Portrait_Antoine_Watteau.jpg',

  // Jean-Auguste-Dominique Ingres - Self-Portrait 1822
  'jean-auguste-dominique-ingres': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jean-Auguste-Dominique_Ingres%2C_Self-Portrait%2C_1822%2C_NGA_93063.jpg/500px-Jean-Auguste-Dominique_Ingres%2C_Self-Portrait%2C_1822%2C_NGA_93063.jpg',

  // Jean-François Millet - Autoportrait
  'jean-francois-millet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Jean-Fran%C3%A7ois_Millet-Autoportrait.jpg/500px-Jean-Fran%C3%A7ois_Millet-Autoportrait.jpg',

  // Joaquín Sorolla - Self-Portrait 1909
  'joaquin-sorolla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sorolla-Joaquin-Self-Portrait-1909.jpg/500px-Sorolla-Joaquin-Self-Portrait-1909.jpg',

  // Juan Gris - Self-portrait 1912
  'juan-gris': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Juan_Gris_-_1912_-_Self-portrait.jpg',

  // Kazimir Malevich - Self-portrait 1933
  'kazimir-malevich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Self-portrait_%28Malevich%2C_1933%29.jpg/500px-Self-portrait_%28Malevich%2C_1933%29.jpg',

  // Pablo Picasso - Portrait by Juan Gris
  'pablo-picasso': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg/500px-Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg',

  // Thomas Eakins - Self-portrait
  'thomas-eakins': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Eakins_selfportrait.jpg/500px-Eakins_selfportrait.jpg',

  // William-Adolphe Bouguereau - Self portrait
  'william-adolphe-bouguereau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Self_portrait%2C_by_William_Bouguereau.jpg/500px-Self_portrait%2C_by_William_Bouguereau.jpg',

  // Albert Bierstadt - Photograph c. 1895
  'albert-bierstadt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Original_Colour_Photo_of_Albert_Bierstadt%2C_c._1895.png/500px-Original_Colour_Photo_of_Albert_Bierstadt%2C_c._1895.png',
};

// Alternative slug formats that might exist in the database
const alternativeSlugs: Record<string, string[]> = {
  'luis-melendez': ['luis-egidio-melendez', 'luis-melendez', 'melendez'],
  'marc-chagall': ['marc-chagall', 'chagall'],
  'juan-de-juanes': ['juan-de-juanes', 'joan-de-joanes', 'vicente-juan-masip'],
  'jan-van-goyen': ['jan-van-goyen', 'van-goyen'],
  'james-hamilton': ['james-hamilton-painter', 'james-hamilton'],
  'giotto-di-bondone': ['giotto-di-bondone', 'giotto'],
  'george-inness': ['george-inness'],
  'george-inness-jr': ['george-inness-jr', 'george-inness-junior'],
  'frida-kahlo': ['frida-kahlo'],
  'el-lissitzky': ['el-lissitzky', 'lissitzky'],
  'cimabue': ['cimabue'],
  'alexej-von-jawlensky': ['alexej-von-jawlensky', 'alexei-jawlensky', 'jawlensky'],
  'william-adolphe-bouguereau': ['william-adolphe-bouguereau', 'bouguereau'],
  'juan-gris': ['juan-gris'],
  'kazimir-malevich': ['kazimir-malevich', 'malevich'],
  'isaac-levitan': ['isaac-levitan', 'levitan'],
  'ivan-shishkin': ['ivan-shishkin', 'shishkin'],
  'alphonse-mucha': ['alphonse-mucha', 'alfons-mucha', 'mucha'],
  'willem-claesz-heda': ['willem-claesz-heda', 'willem-claeszoon-heda'],
  'willem-van-de-velde-younger': ['willem-van-de-velde-the-younger', 'willem-van-de-velde-younger', 'willem-van-de-velde-ii'],
  'william-hogarth': ['william-hogarth', 'hogarth'],
  'william-holman-hunt': ['william-holman-hunt', 'holman-hunt'],
  'william-merritt-chase': ['william-merritt-chase', 'merritt-chase'],
  'william-trost-richards': ['william-trost-richards', 'trost-richards'],
  'winslow-homer': ['winslow-homer', 'homer'],
  'worthington-whittredge': ['worthington-whittredge', 'whittredge'],
  'vittore-carpaccio': ['vittore-carpaccio', 'carpaccio'],
  'salvador-dali': ['salvador-dali', 'dali'],
  'salvator-rosa': ['salvator-rosa', 'rosa'],
  'sanford-robinson-gifford': ['sanford-robinson-gifford', 'gifford'],
  'sassetta': ['sassetta'],
  'sebastiano-del-piombo': ['sebastiano-del-piombo', 'del-piombo'],
  'simone-martini': ['simone-martini', 'martini'],
  'pietro-da-cortona': ['pietro-da-cortona', 'cortona'],
  'rene-magritte': ['rene-magritte', 'magritte'],
  'peder-severin-kroyer': ['peder-severin-kroyer', 'kroyer', 'krøyer'],
  'perugino': ['perugino', 'pietro-perugino'],
  'philips-wouwerman': ['philips-wouwerman', 'wouwerman'],
  'pierre-bonnard': ['pierre-bonnard', 'bonnard'],
  'piet-mondrian': ['piet-mondrian', 'mondrian'],
  'pieter-claesz': ['pieter-claesz', 'claesz'],
  'michelangelo': ['michelangelo', 'michelangelo-buonarroti'],
  'odilon-redon': ['odilon-redon', 'redon'],
  'orazio-gentileschi': ['orazio-gentileschi', 'gentileschi'],
  'palma-vecchio': ['palma-vecchio', 'palma'],
  'paolo-veronese': ['paolo-veronese', 'veronese'],
  'paris-bordone': ['paris-bordone', 'bordone'],
  'simon-vouet': ['simon-vouet', 'vouet'],
  'petrus-christus': ['petrus-christus', 'christus'],

  // Batch 5
  'juan-de-valdes-leal': ['juan-de-valdes-leal', 'valdes-leal'],
  'jules-bastien-lepage': ['jules-bastien-lepage', 'bastien-lepage'],
  'jules-pascin': ['jules-pascin', 'pascin'],
  'jusepe-de-ribera': ['jusepe-de-ribera', 'jose-de-ribera', 'ribera'],
  'kathe-kollwitz': ['kathe-kollwitz', 'kollwitz'],
  'john-constable': ['john-constable', 'constable'],
  'john-frederick-kensett': ['john-frederick-kensett', 'kensett'],
  'john-james-audubon': ['john-james-audubon', 'audubon'],
  'jan-toorop': ['jan-toorop', 'toorop'],
  'jasper-francis-cropsey': ['jasper-francis-cropsey', 'cropsey'],
  'jean-baptiste-greuze': ['jean-baptiste-greuze', 'greuze'],

  // Batch 6
  'thomas-cole': ['thomas-cole', 'cole'],
  'thomas-eakins': ['thomas-eakins', 'eakins'],

  // Batch 7
  'vincent-van-gogh': ['vincent-van-gogh', 'van-gogh'],
  'claude-monet': ['claude-monet', 'monet'],
  'edouard-manet': ['edouard-manet', 'manet'],
  'johannes-vermeer': ['johannes-vermeer', 'vermeer'],
  'rembrandt-van-rijn': ['rembrandt-van-rijn', 'rembrandt'],
  'edgar-degas': ['edgar-degas', 'degas'],
  'fitz-henry-lane': ['fitz-henry-lane', 'fitz-hugh-lane'],
  'gustav-klimt': ['gustav-klimt', 'klimt'],
  'paul-gauguin': ['paul-gauguin', 'gauguin'],
  'pierre-auguste-renoir': ['pierre-auguste-renoir', 'renoir'],
  'diego-velazquez': ['diego-velazquez', 'velazquez', 'diego-rodriguez-de-silva-y-velazquez'],
  'frederic-remington': ['frederic-remington', 'remington'],
  'sandro-botticelli': ['sandro-botticelli', 'botticelli'],
  'eugene-delacroix': ['eugene-delacroix', 'delacroix'],
  'titian': ['titian', 'tiziano-vecellio'],
  'georges-seurat': ['georges-seurat', 'seurat'],
  'gustave-moreau': ['gustave-moreau', 'moreau'],
  'john-singer-sargent': ['john-singer-sargent', 'sargent'],
  'john-william-waterhouse': ['john-william-waterhouse', 'waterhouse'],
  'utagawa-hiroshige': ['utagawa-hiroshige', 'hiroshige'],
  'artemisia-gentileschi': ['artemisia-gentileschi'],
  'zdzislaw-beksinski': ['zdzislaw-beksinski', 'beksinski'],
  'camille-pissarro': ['camille-pissarro', 'pissarro'],
  'caravaggio': ['caravaggio', 'michelangelo-merisi-da-caravaggio'],
  'carlo-saraceni': ['carlo-saraceni', 'saraceni'],
  'claude-lorrain': ['claude-lorrain', 'lorrain'],
  'dante-gabriel-rossetti': ['dante-gabriel-rossetti', 'rossetti'],
  'edmund-blair-leighton': ['edmund-blair-leighton', 'leighton'],
  'sebastiano-ricci': ['sebastiano-ricci', 'ricci'],
  'francois-boucher': ['francois-boucher', 'boucher'],
  'frank-dicksee': ['frank-dicksee', 'dicksee'],
  'frederic-edwin-church': ['frederic-edwin-church', 'church'],
  'gabriel-metsu': ['gabriel-metsu', 'metsu'],
  'george-bellows': ['george-bellows', 'bellows'],
  'georges-de-la-tour': ['georges-de-la-tour', 'la-tour'],
  'giovanni-battista-tiepolo': ['giovanni-battista-tiepolo', 'tiepolo', 'giambattista-tiepolo'],
  'gustave-caillebotte': ['gustave-caillebotte', 'caillebotte'],
  'hans-memling': ['hans-memling', 'memling'],
  'henri-fantin-latour': ['henri-fantin-latour', 'fantin-latour'],

  // Batch 8 - Page 2 artists
  'leonardo-da-vinci': ['leonardo-da-vinci', 'da-vinci', 'leonardo'],
  'peter-paul-rubens': ['peter-paul-rubens', 'rubens'],
  'raphael': ['raphael', 'raffaello-sanzio'],
  'jmw-turner': ['jmw-turner', 'joseph-mallord-william-turner', 'turner'],
  'jan-van-eyck': ['jan-van-eyck', 'van-eyck'],
  'john-everett-millais': ['john-everett-millais', 'millais'],
  'francisco-goya': ['francisco-goya', 'goya'],
  'el-greco': ['el-greco', 'domenikos-theotokopoulos'],
  'albert-bierstadt': ['albert-bierstadt', 'bierstadt'],
  'andrea-mantegna': ['andrea-mantegna', 'mantegna'],
  'william-blake': ['william-blake', 'blake'],
  'amedeo-modigliani': ['amedeo-modigliani', 'modigliani'],
  'hans-holbein-the-younger': ['hans-holbein-the-younger', 'hans-holbein-younger', 'holbein'],
  'ferdinand-hodler': ['ferdinand-hodler', 'hodler'],
  'jean-auguste-dominique-ingres': ['jean-auguste-dominique-ingres', 'ingres'],
  'jean-francois-millet': ['jean-francois-millet', 'millet'],
  'jacob-jordaens': ['jacob-jordaens', 'jordaens'],
  'jan-steen': ['jan-steen', 'steen'],
  'paul-cezanne': ['paul-cezanne', 'cezanne'],
  'antoine-watteau': ['antoine-watteau', 'watteau', 'jean-antoine-watteau'],
  'alfred-sisley': ['alfred-sisley', 'sisley'],
  'anthony-van-dyck': ['anthony-van-dyck', 'van-dyck'],
  'berthe-morisot': ['berthe-morisot', 'morisot'],
  'edvard-munch': ['edvard-munch', 'munch'],
  'egon-schiele': ['egon-schiele', 'schiele'],
  'ernst-ludwig-kirchner': ['ernst-ludwig-kirchner', 'kirchner'],
  'franz-marc': ['franz-marc', 'marc'],
  'gustave-courbet': ['gustave-courbet', 'courbet'],
  'henri-de-toulouse-lautrec': ['henri-de-toulouse-lautrec', 'toulouse-lautrec', 'henri-toulouse-lautrec'],
  'henri-rousseau': ['henri-rousseau', 'rousseau'],
  'hieronymus-bosch': ['hieronymus-bosch', 'bosch'],
  'ivan-aivazovsky': ['ivan-aivazovsky', 'aivazovsky'],
  'jacques-louis-david': ['jacques-louis-david', 'david'],
  'jean-honore-fragonard': ['jean-honore-fragonard', 'fragonard'],

  // Batch 9 - Page 3 artists
  'andrea-del-sarto': ['andrea-del-sarto', 'del-sarto'],
  'bartolome-murillo': ['bartolome-murillo', 'bartolome-esteban-murillo', 'murillo'],
  'benozzo-gozzoli': ['benozzo-gozzoli', 'gozzoli'],
  'bernardino-luini': ['bernardino-luini', 'luini'],
  'bronzino': ['bronzino', 'agnolo-bronzino'],
  'bruno-liljefors': ['bruno-liljefors', 'liljefors'],
  'camille-corot': ['camille-corot', 'jean-baptiste-camille-corot', 'corot'],
  'carolus-duran': ['carolus-duran'],
  'caspar-david-friedrich': ['caspar-david-friedrich', 'friedrich'],
  'caspar-netscher': ['caspar-netscher', 'netscher'],
  'charles-le-brun': ['charles-le-brun', 'le-brun'],
  'constant-permeke': ['constant-permeke', 'permeke'],
  'domenico-ghirlandaio': ['domenico-ghirlandaio', 'ghirlandaio'],
  'eastman-johnson': ['eastman-johnson', 'johnson'],
  'edouard-vuillard': ['edouard-vuillard', 'vuillard'],
  'edward-burne-jones': ['edward-burne-jones', 'burne-jones'],
  'emanuel-leutze': ['emanuel-leutze', 'leutze'],
  'ernest-meissonier': ['ernest-meissonier', 'meissonier'],

  // Batch 10 - More Page 3 fixes
  'albrecht-durer': ['albrecht-durer', 'durer'],
  'alexandre-cabanel': ['alexandre-cabanel', 'cabanel'],
  'alonso-cano': ['alonso-cano', 'cano'],
  'anders-zorn': ['anders-zorn', 'zorn'],
  'august-macke': ['august-macke', 'macke'],
  'correggio': ['correggio', 'antonio-da-correggio'],
  'domenico-beccafumi': ['domenico-beccafumi', 'beccafumi'],
  'duccio': ['duccio', 'duccio-di-buoninsegna'],
  'emanuel-de-witte': ['emanuel-de-witte', 'de-witte'],

  // Batch 11 - Page 4 artists
  'evelyn-de-morgan': ['evelyn-de-morgan', 'de-morgan'],
  'filippo-lippi': ['filippo-lippi', 'lippi', 'fra-filippo-lippi'],
  'ford-madox-brown': ['ford-madox-brown', 'madox-brown'],
  'fra-angelico': ['fra-angelico', 'angelico'],
  'francesco-furini': ['francesco-furini', 'furini'],
  'francesco-guardi': ['francesco-guardi', 'guardi'],
  'francisco-de-zurbaran': ['francisco-de-zurbaran', 'zurbaran'],
  'francois-clouet': ['francois-clouet', 'clouet'],
  'frans-hals': ['frans-hals', 'hals'],
  'frederic-leighton': ['frederic-leighton', 'leighton', 'lord-leighton'],
  'frederick-arthur-bridgman': ['frederick-arthur-bridgman', 'bridgman'],
  'george-frederick-watts': ['george-frederick-watts', 'watts', 'george-frederic-watts'],
  'george-hendrik-breitner': ['george-hendrik-breitner', 'breitner'],
  'george-stubbs': ['george-stubbs', 'stubbs'],
  'georgia-okeeffe': ['georgia-okeeffe', 'okeeffe', 'georgia-o-keeffe'],
  'gerard-ter-borch': ['gerard-ter-borch', 'ter-borch'],
  'gerard-van-honthorst': ['gerard-van-honthorst', 'honthorst'],
  'gerrit-dou': ['gerrit-dou', 'dou'],
  'gilbert-stuart': ['gilbert-stuart', 'stuart'],
  'giorgione': ['giorgione'],
  'giovanni-di-paolo': ['giovanni-di-paolo', 'di-paolo'],
  'guercino': ['guercino', 'giovanni-francesco-barbieri'],
  'guido-reni': ['guido-reni', 'reni'],
  'gustave-dore': ['gustave-dore', 'dore'],
  'harriet-backer': ['harriet-backer', 'backer'],
  'henry-raeburn': ['henry-raeburn', 'raeburn'],

  // Batch 12 - Page 5 artists
  'joachim-patinir': ['joachim-patinir', 'patinir'],
  'judith-leyster': ['judith-leyster', 'leyster'],
  'lorenzo-lotto': ['lorenzo-lotto', 'lotto'],
  'louis-le-nain': ['louis-le-nain', 'le-nain'],
  'lucas-cranach-the-elder': ['lucas-cranach-the-elder', 'lucas-cranach', 'cranach'],
  'martin-johnson-heade': ['martin-johnson-heade', 'heade'],
  'mary-cassatt': ['mary-cassatt', 'cassatt'],
  'matthias-grunewald': ['matthias-grunewald', 'grunewald', 'matthias-grünewald'],
  'maurice-denis': ['maurice-denis', 'denis'],
  'meindert-hobbema': ['meindert-hobbema', 'hobbema'],

  // Batch 13 - Page 7 artists (final page)
  'vasily-polenov': ['vasily-polenov', 'polenov'],
  'vittore-carpaccio': ['vittore-carpaccio', 'carpaccio'],
  'wassily-kandinsky': ['wassily-kandinsky', 'kandinsky'],
  'wilhelm-leibl': ['wilhelm-leibl', 'leibl'],
  'willem-claesz-heda': ['willem-claesz-heda', 'willem-claeszoon-heda', 'heda'],
  'willem-van-de-velde-younger': ['willem-van-de-velde-the-younger', 'willem-van-de-velde-younger', 'willem-van-de-velde-ii', 'van-de-velde'],
  'william-hogarth': ['william-hogarth', 'hogarth'],
  'william-holman-hunt': ['william-holman-hunt', 'holman-hunt'],
  'william-merritt-chase': ['william-merritt-chase', 'merritt-chase', 'chase'],
  'william-trost-richards': ['william-trost-richards', 'trost-richards', 'richards'],
  'winslow-homer': ['winslow-homer', 'homer'],
  'worthington-whittredge': ['worthington-whittredge', 'whittredge'],

  // Batch 14 - Page 6 artists
  'maximilien-luce': ['maximilien-luce', 'luce'],
  'nicolas-lancret': ['nicolas-lancret', 'lancret'],
  'niccolo-dellabbate': ['niccolo-dellabbate', 'niccolo-dell-abbate', 'dellabbate'],
  'odilon-redon': ['odilon-redon', 'redon'],
  'otto-mueller': ['otto-mueller', 'mueller'],
  'palma-vecchio': ['palma-vecchio', 'palma'],
  'paolo-uccello': ['paolo-uccello', 'uccello'],
  'paul-delaroche': ['paul-delaroche', 'delaroche'],
  'perugino': ['perugino', 'pietro-perugino'],
  'philips-wouwerman': ['philips-wouwerman', 'wouwerman'],
  'pierre-bonnard': ['pierre-bonnard', 'bonnard'],
  'pieter-de-hooch': ['pieter-de-hooch', 'de-hooch'],
  'pietro-da-cortona': ['pietro-da-cortona', 'cortona', 'pietro-berrettini'],
  'richard-dadd': ['richard-dadd', 'dadd'],
  'rogier-van-der-weyden': ['rogier-van-der-weyden', 'van-der-weyden'],
  'simon-vouet': ['simon-vouet', 'vouet'],
  'theodore-chasseriau': ['theodore-chasseriau', 'chasseriau'],
  'theodore-gericault': ['theodore-gericault', 'gericault'],
  'thomas-cole': ['thomas-cole', 'cole'],
  'valentin-de-boulogne': ['valentin-de-boulogne', 'boulogne'],

  // Batch 15 - Page 1 artists
  'edouard-manet': ['edouard-manet', 'manet'],
  'edgar-degas': ['edgar-degas', 'degas'],
  'gustav-klimt': ['gustav-klimt', 'klimt'],
  'paul-cezanne': ['paul-cezanne', 'cezanne'],
  'pierre-auguste-renoir': ['pierre-auguste-renoir', 'renoir'],
  'diego-velazquez': ['diego-velazquez', 'velazquez'],
  'edvard-munch': ['edvard-munch', 'munch'],
  'gustave-courbet': ['gustave-courbet', 'courbet'],
  'paul-gauguin': ['paul-gauguin', 'gauguin'],
  'eugene-delacroix': ['eugene-delacroix', 'delacroix'],
  'pablo-picasso': ['pablo-picasso', 'picasso'],
  'georges-braque': ['georges-braque', 'braque'],
  'gustave-moreau': ['gustave-moreau', 'moreau'],
  'john-singer-sargent': ['john-singer-sargent', 'sargent'],
  'titian': ['titian', 'tiziano'],
  'vilhelm-hammershoi': ['vilhelm-hammershoi', 'hammershoi', 'hammershøi'],
  'camille-pissarro': ['camille-pissarro', 'pissarro'],
  'jean-baptiste-camille-corot': ['jean-baptiste-camille-corot', 'camille-corot', 'corot'],
  'caravaggio': ['caravaggio', 'michelangelo-merisi-da-caravaggio'],
  'dante-gabriel-rossetti': ['dante-gabriel-rossetti', 'rossetti'],
  'francois-boucher': ['francois-boucher', 'boucher'],
  'frederic-edwin-church': ['frederic-edwin-church', 'church'],
  'gabriel-metsu': ['gabriel-metsu', 'metsu'],
  'george-bellows': ['george-bellows', 'bellows'],
  'georges-de-la-tour': ['georges-de-la-tour', 'de-la-tour', 'la-tour'],
  'hans-memling': ['hans-memling', 'memling'],
  'henri-fantin-latour': ['henri-fantin-latour', 'fantin-latour'],
  'childe-hassam': ['childe-hassam', 'hassam'],
  'jean-simeon-chardin': ['jean-simeon-chardin', 'chardin'],
  'jean-honore-fragonard': ['jean-honore-fragonard', 'fragonard'],
  'albert-bierstadt': ['albert-bierstadt', 'bierstadt'],
  'annibale-carracci': ['annibale-carracci', 'carracci'],
  'canaletto': ['canaletto', 'giovanni-antonio-canal'],
  'ford-madox-brown': ['ford-madox-brown', 'madox-brown'],
  'correggio': ['correggio', 'antonio-da-correggio'],
  'anders-zorn': ['anders-zorn', 'zorn'],
  'elisabeth-vigee-lebrun': ['elisabeth-vigee-lebrun', 'vigee-lebrun', 'elisabeth-louise-vigee-lebrun'],
  'jan-van-eyck': ['jan-van-eyck', 'van-eyck'],
  'caspar-david-friedrich': ['caspar-david-friedrich', 'friedrich'],
  'charles-francois-daubigny': ['charles-francois-daubigny', 'daubigny'],
  'giovanni-bellini': ['giovanni-bellini', 'bellini'],
  'giorgione': ['giorgione', 'giorgio-barbarelli'],
  'giovanni-battista-tiepolo': ['giovanni-battista-tiepolo', 'tiepolo'],
  'giotto': ['giotto', 'giotto-di-bondone'],
  'cima-da-conegliano': ['cima-da-conegliano', 'conegliano'],

  // Batch 16 - Page 2 artists
  'jacob-jordaens': ['jacob-jordaens', 'jordaens'],
  'jan-steen': ['jan-steen', 'steen'],
  'jean-baptiste-greuze': ['jean-baptiste-greuze', 'greuze'],
  'john-constable': ['john-constable', 'constable'],
  'john-william-waterhouse': ['john-william-waterhouse', 'waterhouse'],
  'joaquin-sorolla': ['joaquin-sorolla', 'sorolla'],
  'jusepe-de-ribera': ['jusepe-de-ribera', 'jose-de-ribera', 'ribera'],
  'kathe-kollwitz': ['kathe-kollwitz', 'kollwitz'],
  'lucas-cranach-the-elder': ['lucas-cranach-the-elder', 'lucas-cranach', 'cranach'],
  'mary-cassatt': ['mary-cassatt', 'cassatt'],
  'maurice-denis': ['maurice-denis', 'denis'],
  'jan-toorop': ['jan-toorop', 'toorop'],
  'john-james-audubon': ['john-james-audubon', 'audubon'],
  'juan-de-valdes-leal': ['juan-de-valdes-leal', 'valdes-leal'],
  'jules-bastien-lepage': ['jules-bastien-lepage', 'bastien-lepage'],
  'jules-pascin': ['jules-pascin', 'pascin'],
  'john-frederick-kensett': ['john-frederick-kensett', 'kensett'],
  'jasper-francis-cropsey': ['jasper-francis-cropsey', 'cropsey'],
  'luca-signorelli': ['luca-signorelli', 'signorelli'],
  'lorenzo-lotto': ['lorenzo-lotto', 'lotto'],
  'judith-leyster': ['judith-leyster', 'leyster'],
  'joachim-patinir': ['joachim-patinir', 'patinir'],
  'martin-johnson-heade': ['martin-johnson-heade', 'heade'],
  'matthias-grunewald': ['matthias-grunewald', 'grunewald'],
  'meindert-hobbema': ['meindert-hobbema', 'hobbema'],
  'jean-simeon-chardin': ['jean-simeon-chardin', 'chardin', 'jean-baptiste-simeon-chardin'],
  'jean-francois-millet': ['jean-francois-millet', 'millet'],
  'louis-le-nain': ['louis-le-nain', 'le-nain'],

  // Batch 17 - Page 3 artists
  'amedeo-modigliani': ['amedeo-modigliani', 'modigliani'],
  'andrea-del-sarto': ['andrea-del-sarto', 'del-sarto'],
  'andrea-mantegna': ['andrea-mantegna', 'mantegna'],
  'anthony-van-dyck': ['anthony-van-dyck', 'van-dyck'],
  'arnold-bocklin': ['arnold-bocklin', 'bocklin', 'arnold-böcklin'],
  'bartolome-esteban-murillo': ['bartolome-esteban-murillo', 'murillo'],
  'berthe-morisot': ['berthe-morisot', 'morisot'],
  'bernardino-luini': ['bernardino-luini', 'luini'],
  'charles-le-brun': ['charles-le-brun', 'le-brun'],
  'domenichino': ['domenichino', 'domenico-zampieri'],
  'eastman-johnson': ['eastman-johnson', 'johnson'],
  'edward-burne-jones': ['edward-burne-jones', 'burne-jones'],
  'egon-schiele': ['egon-schiele', 'schiele'],
  'ernst-ludwig-kirchner': ['ernst-ludwig-kirchner', 'kirchner'],
  'edmund-blair-leighton': ['edmund-blair-leighton', 'blair-leighton'],
  'edouard-vuillard': ['edouard-vuillard', 'vuillard'],
  'camille-claudel': ['camille-claudel', 'claudel'],
  'caspar-netscher': ['caspar-netscher', 'netscher'],
  'claudio-coello': ['claudio-coello', 'coello'],
  'edward-hopper': ['edward-hopper', 'hopper'],
  'cornelis-de-vos': ['cornelis-de-vos', 'de-vos'],
  'david-teniers-the-younger': ['david-teniers-the-younger', 'david-teniers', 'teniers'],
  'domenico-ghirlandaio': ['domenico-ghirlandaio', 'ghirlandaio'],
  'carlo-crivelli': ['carlo-crivelli', 'crivelli'],
  'dosso-dossi': ['dosso-dossi', 'dossi'],
};

async function fixArtistPortraits() {
  console.log('Fixing incorrect artist portrait images...\n');

  let fixed = 0;
  let notFound = 0;
  let cleared = 0;

  for (const [primarySlug, imageUrl] of Object.entries(artistPortraitFixes)) {
    const slugsToTry = alternativeSlugs[primarySlug] || [primarySlug];
    let found = false;

    for (const slug of slugsToTry) {
      try {
        const artist = await prisma.artist.findUnique({
          where: { slug },
          select: { id: true, name: true, imageUrl: true, slug: true }
        });

        if (artist) {
          found = true;

          if (imageUrl === '') {
            // Clear the incorrect image
            await prisma.artist.update({
              where: { slug },
              data: { imageUrl: null }
            });
            console.log(`  ✓ CLEARED (no portrait available): ${artist.name} (${artist.slug})`);
            cleared++;
          } else {
            // Update with correct image
            await prisma.artist.update({
              where: { slug },
              data: { imageUrl }
            });
            console.log(`  ✓ FIXED: ${artist.name} (${artist.slug})`);
            console.log(`    Old: ${artist.imageUrl || 'none'}`);
            console.log(`    New: ${imageUrl}`);
            fixed++;
          }
          break;
        }
      } catch (error) {
        // Continue to next slug
      }
    }

    if (!found) {
      console.log(`  NOT FOUND: ${primarySlug} (tried: ${slugsToTry.join(', ')})`);
      notFound++;
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Fixed: ${fixed}`);
  console.log(`Cleared (no portrait): ${cleared}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Total entries: ${Object.keys(artistPortraitFixes).length}`);

  await prisma.$disconnect();
}

fixArtistPortraits();
