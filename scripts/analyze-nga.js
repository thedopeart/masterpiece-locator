const fs = require('fs');
const path = require('path');

// Read the objects file
const content = fs.readFileSync(path.join(__dirname, 'nga-data/objects.csv'), 'utf8');
const lines = content.split('\n');

// Famous artists to search for (Tier 1 and 2 potential)
const FAMOUS_ARTISTS = [
  'Rembrandt', 'Vermeer', 'Monet', 'Van Gogh', 'Renoir', 'Cézanne', 'Manet',
  'Degas', 'Titian', 'Caravaggio', 'Rubens', 'Velázquez', 'El Greco',
  'Botticelli', 'Fra Angelico', 'Giotto', 'Duccio', 'Jan van Eyck',
  'Rogier van der Weyden', 'Hans Holbein', 'Dürer', 'Goya', 'Turner',
  'Constable', 'Gainsborough', 'Reynolds', 'Whistler', 'Sargent',
  'Winslow Homer', 'Eakins', 'Cassatt', 'Hopper', 'Pollock', 'Rothko',
  'Picasso', 'Matisse', 'Kandinsky', 'Mondrian', 'Dalí', 'Poussin',
  'Claude Lorrain', 'Fragonard', 'Boucher', 'Watteau', 'David',
  'Ingres', 'Delacroix', 'Courbet', 'Corot', 'Millet', 'Sisley',
  'Pissarro', 'Caillebotte', 'Seurat', 'Signac', 'Gauguin',
  'Toulouse-Lautrec', 'Klimt', 'Schiele', 'Munch', 'Kirchner',
  'Beckmann', 'Klee', 'Miró', 'Ernst', 'Magritte', 'Bacon',
  'Freud', 'Hockney', 'Warhol', 'Lichtenstein', 'Johns',
  'Rauschenberg', 'de Kooning', 'Gorky', 'Still', 'Newman',
  'Frankenthaler', 'Louis', 'Noland', 'Stella', 'Diebenkorn'
];

// Search for lines containing these artists and "Painting" classification
const found = {};

for (const line of lines) {
  const lowerLine = line.toLowerCase();

  // Check if it's a painting
  if (!lowerLine.includes(',painting,')) continue;

  for (const artist of FAMOUS_ARTISTS) {
    if (lowerLine.includes(artist.toLowerCase())) {
      if (!found[artist]) found[artist] = [];

      // Extract title - field 5 in CSV (0-indexed: 4)
      // Handle quoted fields
      let inQuote = false;
      let fieldIndex = 0;
      let currentField = '';
      let title = '';

      for (let i = 0; i < line.length && fieldIndex <= 4; i++) {
        const char = line[i];
        if (char === '"') {
          inQuote = !inQuote;
        } else if (char === ',' && !inQuote) {
          if (fieldIndex === 4) {
            title = currentField;
            break;
          }
          fieldIndex++;
          currentField = '';
        } else {
          currentField += char;
        }
      }

      if (title && !found[artist].some(p => p.title === title)) {
        found[artist].push({ title: title.substring(0, 100), line: line.substring(0, 200) });
      }
    }
  }
}

console.log('=== FAMOUS ARTIST PAINTINGS IN NGA DATA ===\n');

const results = Object.entries(found)
  .filter(([_, paintings]) => paintings.length > 0)
  .sort((a, b) => b[1].length - a[1].length);

for (const [artist, paintings] of results) {
  console.log(`\n${artist} (${paintings.length} paintings):`);
  paintings.slice(0, 8).forEach(p => console.log(`  - ${p.title}`));
  if (paintings.length > 8) console.log(`  ... and ${paintings.length - 8} more`);
}

console.log('\n\n=== TOTAL ===');
console.log(`Artists with paintings: ${results.length}`);
console.log(`Total paintings found: ${results.reduce((sum, [_, p]) => sum + p.length, 0)}`);
