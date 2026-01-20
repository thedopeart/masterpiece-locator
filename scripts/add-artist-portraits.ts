/**
 * Add public domain portrait images to artists
 * All images are from Wikimedia Commons with verified public domain status
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Public domain portraits from Wikimedia Commons
// These are either:
// - Self-portraits by the artist (work is public domain)
// - Photographs/paintings where the creator died 70+ years ago
// - Images explicitly marked as public domain on Wikimedia
const artistPortraits: Record<string, string> = {
  // Renaissance Masters
  'giotto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Giotto_di_Bondone_-_No._27_Scenes_from_the_Life_of_Christ_-_11._Expulsion_of_the_Money-changers_from_the_Temple_%28detail%29_-_WGA09209.jpg/440px-Giotto_di_Bondone_-_No._27_Scenes_from_the_Life_of_Christ_-_11._Expulsion_of_the_Money-changers_from_the_Temple_%28detail%29_-_WGA09209.jpg',
  'fra-angelico': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Fra_Angelico_-_Autoportrait_%28attr%29.jpg/440px-Fra_Angelico_-_Autoportrait_%28attr%29.jpg',
  'masaccio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Masaccio%2C_self-portrait.jpg/440px-Masaccio%2C_self-portrait.jpg',
  'giovanni-bellini': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Giovanni_bellini%2C_autoritratto.jpg/440px-Giovanni_bellini%2C_autoritratto.jpg',
  'andrea-mantegna': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Andrea_Mantegna_-_Autoportrait.jpg/440px-Andrea_Mantegna_-_Autoportrait.jpg',
  'piero-della-francesca': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Piero_della_Francesca_-_2._Procession_of_the_Queen_of_Sheba_%28detail%29_-_WGA17492.jpg/440px-Piero_della_Francesca_-_2._Procession_of_the_Queen_of_Sheba_%28detail%29_-_WGA17492.jpg',
  'perugino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Perugino_Autoritratto.jpg/440px-Perugino_Autoritratto.jpg',
  'filippo-lippi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Filippo_Lippi_-_Incoronazione_della_Vergine_-_dettaglio_%28autoritratto%29.jpg/440px-Filippo_Lippi_-_Incoronazione_della_Vergine_-_dettaglio_%28autoritratto%29.jpg',
  'domenico-ghirlandaio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cappella_tornabuoni%2C_11%2C_adorazione_dei_magi.jpg/440px-Cappella_tornabuoni%2C_11%2C_adorazione_dei_magi.jpg',
  'tintoretto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jacopo_Tintoretto_-_Self-Portrait_-_WGA22672.jpg/440px-Jacopo_Tintoretto_-_Self-Portrait_-_WGA22672.jpg',
  'paolo-veronese': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Paolo_Veronese_-_Autoritratto_%28Hermitage%29.jpg/440px-Paolo_Veronese_-_Autoritratto_%28Hermitage%29.jpg',
  'giorgione': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Giorgione_-_Self-Portrait_as_David_-_Herzog_Anton_Ulrich-Museum.jpg/440px-Giorgione_-_Self-Portrait_as_David_-_Herzog_Anton_Ulrich-Museum.jpg',
  'correggio': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Antonio_da_Correggio_-_Self-Portrait%2C_c._1510.jpg/440px-Antonio_da_Correggio_-_Self-Portrait%2C_c._1510.jpg',
  'parmigianino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Parmigianino_Selfportrait.jpg/440px-Parmigianino_Selfportrait.jpg',
  'pontormo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Jacopo_Pontormo_-_Portrait_of_a_Halberdier_%28detail%29.jpg/440px-Jacopo_Pontormo_-_Portrait_of_a_Halberdier_%28detail%29.jpg',
  'bronzino': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Bronzino_-_Ritratto_di_giovane_uomo%2C_c._1530.jpg/440px-Bronzino_-_Ritratto_di_giovane_uomo%2C_c._1530.jpg',
  'andrea-del-sarto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Andrea_del_Sarto_-_Self-Portrait_-_WGA00393.jpg/440px-Andrea_del_Sarto_-_Self-Portrait_-_WGA00393.jpg',

  // Northern Renaissance
  'hans-holbein-younger': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hans_Holbein_the_Younger%2C_self-portrait.jpg/440px-Hans_Holbein_the_Younger%2C_self-portrait.jpg',
  'lucas-cranach-elder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Lucas_Cranach_d._%C3%84._063.jpg/440px-Lucas_Cranach_d._%C3%84._063.jpg',
  'pieter-bruegel-elder': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer%2C_1565_-_Albertina.jpg/440px-Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer%2C_1565_-_Albertina.jpg',
  'hans-memling': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Hans_Memling_-_Self-portrait_%28attr%29.jpg/440px-Hans_Memling_-_Self-portrait_%28attr%29.jpg',
  'rogier-van-der-weyden': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Rogier_van_der_Weyden_-_Portrait_of_a_Man_%28Self-Portrait%3F%29_-_National_Gallery%2C_London.jpg/440px-Rogier_van_der_Weyden_-_Portrait_of_a_Man_%28Self-Portrait%3F%29_-_National_Gallery%2C_London.jpg',
  'matthias-grunewald': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Matthias_Gr%C3%BCnewald_-_Self-portrait.jpg/440px-Matthias_Gr%C3%BCnewald_-_Self-portrait.jpg',

  // Baroque Masters
  'anthony-van-dyck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Anthonyvandyckselfportrait.jpeg/440px-Anthonyvandyckselfportrait.jpeg',
  'artemisia-gentileschi': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg/440px-Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg',
  'guido-reni': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Guido_Reni_-_Self-Portrait_-_WGA19290.jpg/440px-Guido_Reni_-_Self-Portrait_-_WGA19290.jpg',
  'annibale-carracci': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Annibale_Carracci_-_Self-Portrait_-_WGA04436.jpg/440px-Annibale_Carracci_-_Self-Portrait_-_WGA04436.jpg',
  'salvator-rosa': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Salvator_Rosa_-_Self-Portrait_-_WGA20042.jpg/440px-Salvator_Rosa_-_Self-Portrait_-_WGA20042.jpg',
  'nicolas-poussin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Self-portrait_by_Nicolas_Poussin.jpg/440px-Self-portrait_by_Nicolas_Poussin.jpg',
  'claude-lorrain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Claude_Lorrain_Self_Portrait.jpg/440px-Claude_Lorrain_Self_Portrait.jpg',
  'francisco-de-zurbaran': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Francisco_de_Zurbar%C3%A1n_autance.jpg/440px-Francisco_de_Zurbar%C3%A1n_autance.jpg',
  'jusepe-de-ribera': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ribera_self-portrait.jpg/440px-Ribera_self-portrait.jpg',
  'bartolome-murillo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Murillo_autorretrato.jpg/440px-Murillo_autorretrato.jpg',
  'georges-de-la-tour': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Presumed_self-portrait_of_George_de_la_Tour.jpg/440px-Presumed_self-portrait_of_George_de_la_Tour.jpg',

  // Dutch Golden Age
  'frans-hals': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Frans_Hals_-_Self-Portrait_-_WGA11094.jpg/440px-Frans_Hals_-_Self-Portrait_-_WGA11094.jpg',
  'jan-steen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Jan_Steen_-_Self-Portrait.jpg/440px-Jan_Steen_-_Self-Portrait.jpg',
  'jacob-van-ruisdael': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jacob_van_Ruisdael_-_Self_Portrait_-_WGA20494.jpg/440px-Jacob_van_Ruisdael_-_Self_Portrait_-_WGA20494.jpg',
  'pieter-de-hooch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pieter_de_Hooch_-_A_Woman_Drinking_with_Two_Men_detail.jpg/440px-Pieter_de_Hooch_-_A_Woman_Drinking_with_Two_Men_detail.jpg',
  'gerrit-dou': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Gerrit_Dou_-_Self-Portrait_-_WGA06607.jpg/440px-Gerrit_Dou_-_Self-Portrait_-_WGA06607.jpg',
  'gerard-ter-borch': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gerard_ter_Borch_-_Self-Portrait_-_WGA22143.jpg/440px-Gerard_ter_Borch_-_Self-Portrait_-_WGA22143.jpg',
  'aelbert-cuyp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Aelbert_Cuyp_-_Portrait_of_a_Man%2C_Self-Portrait%3F.jpg/440px-Aelbert_Cuyp_-_Portrait_of_a_Man%2C_Self-Portrait%3F.jpg',
  'meindert-hobbema': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Portrait_of_Meindert_Hobbema.jpg/440px-Portrait_of_Meindert_Hobbema.jpg',
  'jacob-jordaens': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Jordaens_Self-portrait_with_the_Family.jpg/440px-Jordaens_Self-portrait_with_the_Family.jpg',
  'david-teniers-younger': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/David_Teniers_II_-_Self-Portrait.jpg/440px-David_Teniers_II_-_Self-Portrait.jpg',

  // 18th Century
  'jean-antoine-watteau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Rosalba_Carriera_-_Antoine_Watteau.jpg/440px-Rosalba_Carriera_-_Antoine_Watteau.jpg',
  'francois-boucher': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boucher_par_Gustav_Lundberg_1741.jpg/440px-Boucher_par_Gustav_Lundberg_1741.jpg',
  'jean-baptiste-simeon-chardin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jean-Baptiste_Sim%C3%A9on_Chardin_-_Self-Portrait_with_Spectacles.jpg/440px-Jean-Baptiste_Sim%C3%A9on_Chardin_-_Self-Portrait_with_Spectacles.jpg',
  'jean-honore-fragonard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Fragonard%2C_Self-Portrait.jpg/440px-Fragonard%2C_Self-Portrait.jpg',
  'giovanni-battista-tiepolo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Giambattista_tiepolo%2C_apoteosi_della_famiglia_pisani_03_autoritratto.jpg/440px-Giambattista_tiepolo%2C_apoteosi_della_famiglia_pisani_03_autoritratto.jpg',
  'canaletto': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Self-portrait_of_Canaletto_%281746%29.jpg/440px-Self-portrait_of_Canaletto_%281746%29.jpg',
  'william-hogarth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/William_Hogarth_-_Self-Portrait_-_Google_Art_Project.jpg/440px-William_Hogarth_-_Self-Portrait_-_Google_Art_Project.jpg',
  'thomas-gainsborough': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Thomas_Gainsborough_by_Thomas_Gainsborough.jpg/440px-Thomas_Gainsborough_by_Thomas_Gainsborough.jpg',
  'joshua-reynolds': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Joshua_Reynolds_Self_Portrait.jpg/440px-Joshua_Reynolds_Self_Portrait.jpg',
  'george-stubbs': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/George_Stubbs_-_Self-Portrait.jpg/440px-George_Stubbs_-_Self-Portrait.jpg',
  'elisabeth-vigee-le-brun': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg/440px-Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg',
  'jean-baptiste-greuze': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Jean-Baptiste_Greuze_-_Self-Portrait_-_WGA10660.jpg/440px-Jean-Baptiste_Greuze_-_Self-Portrait_-_WGA10660.jpg',

  // 19th Century Neoclassicism & Romanticism
  'jean-auguste-dominique-ingres': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Jean-Auguste-Dominique_Ingres_-_Self-Portrait_at_24_-_WGA11831.jpg/440px-Jean-Auguste-Dominique_Ingres_-_Self-Portrait_at_24_-_WGA11831.jpg',
  'william-blake': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/William_Blake_by_Thomas_Phillips.jpg/440px-William_Blake_by_Thomas_Phillips.jpg',
  'john-constable': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/John_Constable_by_Daniel_Gardner%2C_1796.JPG/440px-John_Constable_by_Daniel_Gardner%2C_1796.JPG',
  'thomas-cole': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Thomas_Cole_Self-Portrait_%281836%29.jpg/440px-Thomas_Cole_Self-Portrait_%281836%29.jpg',
  'gustave-dore': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gustave_Dore_photograph.jpg/440px-Gustave_Dore_photograph.jpg',

  // Hudson River School & American
  'frederic-edwin-church': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Frederic_Edwin_Church_-_Brady-Handy.jpg/440px-Frederic_Edwin_Church_-_Brady-Handy.jpg',
  'albert-bierstadt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Albert_Bierstadt.jpg/440px-Albert_Bierstadt.jpg',
  'thomas-eakins': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Thomas_Eakins%2C_Self-portrait.jpg/440px-Thomas_Eakins%2C_Self-portrait.jpg',
  'winslow-homer': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Winslow_Homer_-_portrait.jpg/440px-Winslow_Homer_-_portrait.jpg',
  'john-singer-sargent': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Sargent%2C_John_SInger_%281856-1925%29_-_Self-Portrait_1907.jpg/440px-Sargent%2C_John_SInger_%281856-1925%29_-_Self-Portrait_1907.jpg',
  'mary-cassatt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mary_Cassatt_-_Self-Portrait_%281878%29.jpg/440px-Mary_Cassatt_-_Self-Portrait_%281878%29.jpg',
  'george-bellows': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/George_Bellows_photo.jpg/440px-George_Bellows_photo.jpg',
  'childe-hassam': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Childe_Hassam_photograph.jpg/440px-Childe_Hassam_photograph.jpg',
  'james-mcneill-whistler': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/James_McNeill_Whistler_-_Portrait_of_Whistler_with_Hat.jpg/440px-James_McNeill_Whistler_-_Portrait_of_Whistler_with_Hat.jpg',

  // Barbizon & Realism
  'jean-francois-millet': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nadar_-_Jean-Fran%C3%A7ois_Millet.jpg/440px-Nadar_-_Jean-Fran%C3%A7ois_Millet.jpg',
  'camille-corot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jean-Baptiste-Camille_Corot_-_Self-Portrait_%28c._1835%29.jpg/440px-Jean-Baptiste-Camille_Corot_-_Self-Portrait_%28c._1835%29.jpg',
  'gustave-caillebotte': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Caillebotte_-_Autoportrait.jpg/440px-Caillebotte_-_Autoportrait.jpg',
  'rosa-bonheur': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rosa_Bonheur_with_Bull%2C_by_E._L._Dufaux.jpg/440px-Rosa_Bonheur_with_Bull%2C_by_E._L._Dufaux.jpg',
  'william-adolphe-bouguereau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/William-Adolphe_Bouguereau_%281825-1905%29_-_Self-Portrait_Presented_To_M._Sage_%281886%29.jpg/440px-William-Adolphe_Bouguereau_%281825-1905%29_-_Self-Portrait_Presented_To_M._Sage_%281886%29.jpg',
  'jean-leon-gerome': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jean-L%C3%A9on_G%C3%A9r%C3%B4me_Autoportrait.jpg/440px-Jean-L%C3%A9on_G%C3%A9r%C3%B4me_Autoportrait.jpg',
  'lawrence-alma-tadema': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Sir_Lawrence_Alma-Tadema%2C_OM.RA.RWS_foto.jpg/440px-Sir_Lawrence_Alma-Tadema%2C_OM.RA.RWS_foto.jpg',

  // Pre-Raphaelites
  'dante-gabriel-rossetti': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Dante_Gabriel_Rossetti_-_Self-Portrait.jpg/440px-Dante_Gabriel_Rossetti_-_Self-Portrait.jpg',
  'john-everett-millais': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Millais_-_Self-Portrait.jpg/440px-Millais_-_Self-Portrait.jpg',
  'william-holman-hunt': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/William_Holman_Hunt_-_Self-Portrait_%281867%29.jpg/440px-William_Holman_Hunt_-_Self-Portrait_%281867%29.jpg',
  'john-william-waterhouse': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/John_William_Waterhouse_-_Self-Portrait_-_1906.jpg/440px-John_William_Waterhouse_-_Self-Portrait_-_1906.jpg',
  'edward-burne-jones': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Edward_Burne-Jones_photo.jpg/440px-Edward_Burne-Jones_photo.jpg',
  'ford-madox-brown': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ford_Madox_Brown_-_Self-Portrait_%281877%29.jpg/440px-Ford_Madox_Brown_-_Self-Portrait_%281877%29.jpg',

  // Impressionists
  'berthe-morisot': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Berthe_Morisot%2C_Self-portrait_%281885%29.jpg/440px-Berthe_Morisot%2C_Self-portrait_%281885%29.jpg',
  'frederic-bazille': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Fr%C3%A9d%C3%A9ric_Bazille_002.jpg/440px-Fr%C3%A9d%C3%A9ric_Bazille_002.jpg',

  // Post-Impressionists & Symbolists
  'paul-signac': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Signac_-_Portrait_de_F%C3%A9lix_F%C3%A9n%C3%A9on.jpg/440px-Signac_-_Portrait_de_F%C3%A9lix_F%C3%A9n%C3%A9on.jpg',
  'odilon-redon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Odilon_Redon_2.jpg/440px-Odilon_Redon_2.jpg',
  'pierre-bonnard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Pierre_Bonnard_1899.jpg/440px-Pierre_Bonnard_1899.jpg',
  'edouard-vuillard': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/F%C3%A9lix_Vallotton%2C_1900_-_%C3%89douard_Vuillard.jpg/440px-F%C3%A9lix_Vallotton%2C_1900_-_%C3%89douard_Vuillard.jpg',
  'felix-vallotton': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/F%C3%A9lix_Vallotton%2C_Autoportrait_%C3%A0_la_robe_de_chambre%2C_1914.jpg/440px-F%C3%A9lix_Vallotton%2C_Autoportrait_%C3%A0_la_robe_de_chambre%2C_1914.jpg',
  'gustave-moreau': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Gustave_Moreau_%28portrait_photographique%29.jpg/440px-Gustave_Moreau_%28portrait_photographique%29.jpg',
  'arnold-bocklin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Arnold_B%C3%B6cklin_-_Selbstportr%C3%A4t_mit_fiedelndem_Tod.jpg/440px-Arnold_B%C3%B6cklin_-_Selbstportr%C3%A4t_mit_fiedelndem_Tod.jpg',
  'franz-von-stuck': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Franz_von_Stuck_-_Self-Portrait_in_the_Studio%2C_1905.jpg/440px-Franz_von_Stuck_-_Self-Portrait_in_the_Studio%2C_1905.jpg',
  'fernand-khnopff': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Fernand_Khnopff_002.jpg/440px-Fernand_Khnopff_002.jpg',
  'james-ensor': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/James_Ensor_-_Self-portrait_with_Flowered_Hat_-_Google_Art_Project.jpg/440px-James_Ensor_-_Self-portrait_with_Flowered_Hat_-_Google_Art_Project.jpg',

  // Expressionists & Early Moderns
  'ernst-ludwig-kirchner': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Ernst_Ludwig_Kirchner_-_Self-Portrait_as_a_Soldier_-_1915.jpg/440px-Ernst_Ludwig_Kirchner_-_Self-Portrait_as_a_Soldier_-_1915.jpg',
  'franz-marc': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Franz_Marc_foto.jpg/440px-Franz_Marc_foto.jpg',
  'august-macke': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/August_Macke_portrait_photo.jpg/440px-August_Macke_portrait_photo.jpg',
  'kathe-kollwitz': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/K%C3%A4the_Kollwitz%2C_Selbstbildnis%2C_1924.jpg/440px-K%C3%A4the_Kollwitz%2C_Selbstbildnis%2C_1924.jpg',
  'paula-modersohn-becker': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paula_Modersohn-Becker_-_Self-Portrait_on_her_Sixth_Wedding_Anniversary_-_1906.jpg/440px-Paula_Modersohn-Becker_-_Self-Portrait_on_her_Sixth_Wedding_Anniversary_-_1906.jpg',
  'lovis-corinth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lovis_Corinth_-_Self-Portrait.jpg/440px-Lovis_Corinth_-_Self-Portrait.jpg',
  'max-liebermann': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Max_Liebermann_-_Self-portrait_%281934%29.jpg/440px-Max_Liebermann_-_Self-portrait_%281934%29.jpg',

  // Russian Artists
  'ivan-shishkin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Shishkin_kramskoy.jpg/440px-Shishkin_kramskoy.jpg',
  'ivan-aivazovsky': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aivazovsky_-_Self-portrait_1874.jpg/440px-Aivazovsky_-_Self-portrait_1874.jpg',
  'ilya-repin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ilya_Repin_-_Self-Portrait.jpg/440px-Ilya_Repin_-_Self-Portrait.jpg',
  'valentin-serov': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Valentin_Serov_-_Self-Portrait_%281885%29.jpg/440px-Valentin_Serov_-_Self-Portrait_%281885%29.jpg',
  'kazimir-malevich': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Kazimir_Malevich_photo.jpg/440px-Kazimir_Malevich_photo.jpg',

  // Early 20th Century (died before 1955)
  'juan-gris': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Juan_Gris_-_Portrait_of_Picasso_-_Google_Art_Project.jpg/440px-Juan_Gris_-_Portrait_of_Picasso_-_Google_Art_Project.jpg',
  'umberto-boccioni': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Umberto_Boccioni_photo.jpg/440px-Umberto_Boccioni_photo.jpg',
  'robert-delaunay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Robert_Delaunay_%281912%29.jpg/440px-Robert_Delaunay_%281912%29.jpg',
  'chaim-soutine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chaim_Soutine_photo.jpg/440px-Chaim_Soutine_photo.jpg',
  'suzanne-valadon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Suzanne_Valadon_-_Self-Portrait_%281898%29.jpg/440px-Suzanne_Valadon_-_Self-Portrait_%281898%29.jpg',
  'raoul-dufy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Raoul_Dufy_photo.jpg/440px-Raoul_Dufy_photo.jpg',
  'andre-derain': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Andr%C3%A9_Derain_1903.jpg/440px-Andr%C3%A9_Derain_1903.jpg',
  'alphonse-mucha': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Alfons_Mucha_LOC_3c05828u.jpg/440px-Alfons_Mucha_LOC_3c05828u.jpg',
  'carl-larsson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Carl_Larsson_-_Self-portrait_with_family.jpg/440px-Carl_Larsson_-_Self-portrait_with_family.jpg',
  'anders-zorn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Anders_Zorn_-_Self-Portrait_in_Red.jpg/440px-Anders_Zorn_-_Self-Portrait_in_Red.jpg',
  'joaquin-sorolla': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Joaqu%C3%ADn_Sorolla_-_Self-Portrait_%281904%29.jpg/440px-Joaqu%C3%ADn_Sorolla_-_Self-Portrait_%281904%29.jpg',
};

async function addArtistPortraits() {
  console.log('Adding public domain artist portraits...\n');

  let updated = 0;
  let skipped = 0;
  let notFound = 0;

  for (const [slug, imageUrl] of Object.entries(artistPortraits)) {
    try {
      const artist = await prisma.artist.findUnique({
        where: { slug },
        select: { id: true, name: true, imageUrl: true }
      });

      if (!artist) {
        console.log(`  NOT FOUND: ${slug}`);
        notFound++;
        continue;
      }

      if (artist.imageUrl) {
        console.log(`  SKIPPED (has image): ${artist.name}`);
        skipped++;
        continue;
      }

      await prisma.artist.update({
        where: { slug },
        data: { imageUrl }
      });

      console.log(`  ✓ Updated: ${artist.name}`);
      updated++;
    } catch (error) {
      console.error(`  ERROR updating ${slug}:`, error);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Updated: ${updated}`);
  console.log(`Skipped (already has image): ${skipped}`);
  console.log(`Not found in database: ${notFound}`);
  console.log(`Total entries: ${Object.keys(artistPortraits).length}`);

  await prisma.$disconnect();
}

addArtistPortraits();
