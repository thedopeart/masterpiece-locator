const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'gilbert-stuart',
    bioFull: `<p><a href="/movement/neoclassicism"><strong>Neoclassical</strong></a> portrait painter <strong>Gilbert Stuart</strong> (1755-1828) created the definitive image of George Washington that has appeared on the one-dollar bill for over a century. Born in Rhode Island to a Scottish immigrant family, he showed early artistic talent and left for London in 1775 to escape the Revolutionary War, studying under Benjamin West.</p>

<p>Stuart spent eighteen years abroad, building a successful portrait practice in London and Dublin before returning to America in 1793 with a specific goal. "I expect to make a fortune by Washington alone," he wrote. He was right. Washington sat for Stuart three times, producing three distinct portrait types: the "Vaughan" portrait, the unfinished "Athenaeum" head (the dollar bill image), and the full-length "Lansdowne" portrait. Stuart made over 100 replicas of these images during his lifetime. When painting the <strong>Athenaeum portrait</strong>, Stuart noted Washington had just gotten new false teeth, which accounts for the constrained expression around the mouth.</p>

<p>Stuart painted each of the first five U.S. presidents from life, along with most of their wives. His gift for capturing a likeness made him America's foremost portraitist. The <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> holds the Lansdowne portrait. The <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a> owns the Athenaeum portraits of both George and Martha Washington. Works also hang at the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> and the <a href="/museum/white-house-washington-dc-us"><strong>White House</strong></a>.</p>`,
    faqs: [
      { question: "Why is Gilbert Stuart famous?", answer: "Stuart created the iconic image of <strong>George Washington</strong> that appears on the U.S. one-dollar bill. He painted each of the first five presidents from life and was America's leading <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> painter." },
      { question: "Where can I see Stuart's Washington portraits?", answer: "The <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a> owns the unfinished Athenaeum portraits. The <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> has the Lansdowne portrait." },
      { question: "What is the Athenaeum portrait?", answer: "The <strong>Athenaeum portrait</strong> (1796) is Stuart's unfinished painting of Washington. The image has appeared on American currency since 1869, making it one of the most reproduced faces in history." },
      { question: "How many Washington portraits did Stuart paint?", answer: "Stuart created three portrait types from life sittings, then made over 100 replicas during his career. He frankly admitted his goal was to profit from Washington's fame." },
      { question: "Where did Gilbert Stuart train?", answer: "Stuart studied under <strong>Benjamin West</strong> in London from 1775 to 1787. He spent eighteen years in Britain and Ireland before returning to America to paint Washington." },
      { question: "What art movement was Stuart part of?", answer: "Stuart worked in the <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> tradition that dominated late 18th-century portraiture. His polished technique and dignified compositions reflect the era's classical ideals." }
    ]
  },
  {
    slug: 'ivan-shishkin',
    bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> realist landscape painter <strong>Ivan Shishkin</strong> (1832-1898) earned the title "Tsar of the Forest" for his detailed, monumental depictions of Russian wilderness. Born in Yelabuga to a merchant family, he studied at the Moscow School of Painting before continuing at the Imperial Academy of Arts in St. Petersburg. A gold medal brought him a stipend to travel through Germany, studying particularly at the Düsseldorf school, which reinforced his exacting approach to nature.</p>

<p>Shishkin co-founded the Peredvizhniki (Wanderers) movement in 1870, joining artists who rejected the Academy's rigid approach and took exhibitions directly to the Russian people. His paintings present forests as symbols of Russian national identity, rendered with almost scientific precision yet imbued with epic grandeur. He preferred painting pine and oak forests in pristine condition during dry, sunny weather. Works like <strong>Rye</strong> (1878) and <strong>Morning in a Pine Forest</strong> (1889) became so popular they appeared on candy wrappers and textbooks.</p>

<p>Personal tragedy marked his middle years. His father, wife, student, and two sons all died within a short period in the 1870s. He remarried a student, Olga Lagoda, who also died young. Shishkin himself died at his easel in 1898, working on a new painting. The <a href="/museum/tretyakov-gallery-moscow-russia"><strong>Tretyakov Gallery</strong></a> in Moscow holds his most famous works. The <a href="/museum/russian-museum"><strong>Russian Museum</strong></a> in St. Petersburg preserves major paintings. A minor planet was named in his honor.</p>`,
    faqs: [
      { question: "What is Ivan Shishkin famous for?", answer: "Shishkin painted detailed, monumental <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>Russian forest landscapes</strong></a>. His contemporaries called him 'Tsar of the Forest' for his mastery of depicting pine and oak trees with near-scientific precision." },
      { question: "Where can I see Shishkin's paintings?", answer: "The <a href=\"/museum/tretyakov-gallery-moscow-russia\"><strong>Tretyakov Gallery</strong></a> in Moscow holds <strong>Morning in a Pine Forest</strong> and other major works. The <a href=\"/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg also has significant paintings." },
      { question: "What is Morning in a Pine Forest?", answer: "<strong>Morning in a Pine Forest</strong> (1889) shows bear cubs playing on a fallen tree. The bears were actually painted by Konstantin Savitsky, though Shishkin's name alone appears on the famous candy wrapper version." },
      { question: "What art movement was Shishkin part of?", answer: "Shishkin's epic landscapes connect to <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>'s nationalist vision. He also co-founded the Peredvizhniki (Wanderers), realist artists who rejected the Academy and took art directly to the people." },
      { question: "What subjects did Shishkin paint?", answer: "Shishkin specialized in <a href=\"https://luxurywallart.com/collections/paintings-of-trees\" target=\"_blank\" rel=\"noopener\"><strong>forest landscapes</strong></a>, particularly pine and oak trees. He painted them in pristine condition during sunny weather, creating images of untouched Russian wilderness." },
      { question: "How did Shishkin die?", answer: "Shishkin died of a heart attack on March 20, 1898, while sitting at his easel working on a new painting. He was 66 years old and still actively creating work." }
    ]
  },
  {
    slug: 'christian-krohg',
    bioFull: `<p><a href="/movement/impressionism"><strong>Naturalist</strong></a> painter <strong>Christian Krohg</strong> (1852-1925) created politically charged images of workers, prostitutes, and fishermen that shaped Scandinavian realism. Born to a prominent family (his grandfather had been a government minister), he was expected to study law. After completing his degree, he finally pursued painting, studying in Karlsruhe under the Norwegian landscape master Hans Gude, then at the Berlin Royal Academy where realism took hold of his vision.</p>

<p>A year in Paris in 1881 brought encounters with Manet, Courbet, and the Impressionists, along with the social realism of Jules Bastien-Lepage. Krohg applied these influences to Norwegian subjects, painting fishing communities at Skagen and the urban poor in Kristiania (Oslo). His novel <strong>Albertine</strong>, telling of a seamstress turned prostitute, caused a scandal when published with related paintings. The work was banned for its sexual content, though it galvanized support for outlawing prostitution in Norway. Krohg was fined but achieved his goal of forcing public debate.</p>

<p>Krohg served as mentor to <strong>Edvard Munch</strong>, encouraging the younger artist's development. He founded the Bohemian journal <em>Impressionisten</em>, worked as a journalist for decades, and taught at the Académie Colarossi in Paris before directing Norway's Academy of Arts from 1909 until his death. France made him a Knight of the Legion of Honour in 1889. The <a href="/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo holds his most important works. The <a href="/museum/skagens-museum"><strong>Skagens Museum</strong></a> in Denmark preserves paintings from the artists' colony.</p>`,
    faqs: [
      { question: "What is Christian Krohg famous for?", answer: "Krohg painted politically charged images of workers, prostitutes, and fishermen. His novel <strong>Albertine</strong> was banned but helped change Norway's prostitution laws. He also mentored <strong>Edvard Munch</strong>." },
      { question: "Where can I see Krohg's paintings?", answer: "The <a href=\"/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo holds major works. The <a href=\"/museum/skagens-museum\"><strong>Skagens Museum</strong></a> in Denmark displays paintings from the artists' colony." },
      { question: "What art movement was Krohg part of?", answer: "Krohg was influenced by <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> during his Paris years. He combined French techniques with Scandinavian naturalism to create socially engaged realist paintings." },
      { question: "What was Albertine?", answer: "<strong>Albertine</strong> (1886) is Krohg's novel and painting series about a seamstress who becomes a prostitute. The work was banned but sparked public debate that helped change Norwegian law." },
      { question: "Did Krohg influence other artists?", answer: "Krohg mentored young <strong>Edvard Munch</strong> and taught at the Académie Colarossi in Paris. As director of Norway's Academy from 1909 to 1925, he shaped a generation of artists." },
      { question: "What subjects did Krohg paint?", answer: "Krohg painted <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>working-class subjects</strong></a>: Skagen fishermen, urban poor, seamstresses, and prostitutes. His social realism addressed conditions others avoided depicting." }
    ]
  }
];

async function main() {
  for (const update of updates) {
    try {
      await prisma.artist.update({
        where: { slug: update.slug },
        data: {
          bioFull: update.bioFull,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${update.slug}`);
    } catch (error) {
      console.error(`Failed to update ${update.slug}:`, error.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
