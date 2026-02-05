# National Gallery of Art (Washington DC) Expansion Plan

## Overview

The NGA has 130,000+ objects with 51,000+ CC0 images. We currently have 66 NGA artworks. This plan targets **40+ high-value paintings** to add.

## Priority Paintings to Add

### Tier 1 — Famous Masterpieces (High SEO Value)

| # | Painting | Artist | Status |
|---|----------|--------|--------|
| 1 | Number 1, 1950 (Lavender Mist) | Jackson Pollock | Missing |
| 2 | Self-Portrait (1659) | Rembrandt van Rijn | Missing |
| 3 | Venus with a Mirror | Titian | Missing |
| 4 | Family of Saltimbanques | Pablo Picasso | Missing |
| 5 | Improvisation 31 (Sea Battle) | Wassily Kandinsky | Missing |
| 6 | Cape Cod Evening | Edward Hopper | Missing |
| 7 | La Condition Humaine | René Magritte | Missing |
| 8 | Laocoön | El Greco | Missing |
| 9 | The Annunciation | Jan van Eyck | Missing |
| 10 | Girl with the Red Hat | Johannes Vermeer | Have (wrong museum) |
| 11 | Self-Portrait | Vincent van Gogh | Have (wrong museum) |
| 12 | Madonna and Child | Giotto | Missing (NGA version) |

### Tier 2 — Significant Works (Medium SEO Value)

| # | Painting | Artist | Status |
|---|----------|--------|--------|
| 13 | Mrs. Richard Brinsley Sheridan | Thomas Gainsborough | Missing |
| 14 | Saint John in the Desert | Domenico Veneziano | Missing |
| 15 | A Young Girl Reading | Jean-Honoré Fragonard | Missing |
| 16 | Napoleon in His Study | Jacques-Louis David | Missing |
| 17 | Organization | Arshile Gorky | Missing |
| 18 | Jack-in-the-Pulpit IV | Georgia O'Keeffe | Missing |
| 19 | Large Decoration with Masks | Henri Matisse | Missing |
| 20 | The Old Musician | Édouard Manet | Missing |
| 21 | The Railway | Édouard Manet | Missing |
| 22 | Giuliano de' Medici | Sandro Botticelli | Missing |
| 23 | Adoration of the Magi | Fra Angelico & Lippi | Missing |
| 24 | The Boating Party | Mary Cassatt | Have (Phillips Collection) |
| 25 | Rouen Cathedral series | Claude Monet | Have (no museum set) |
| 26 | Fatata te Miti | Paul Gauguin | Missing |
| 27 | The Harbor of La Rochelle | Jean-Baptiste-Camille Corot | Missing |
| 28 | Houses at Auvers | Vincent van Gogh | Missing |
| 29 | The White Girl | James McNeill Whistler | Missing |
| 30 | Kindred Spirits | Asher Brown Durand | Missing |

### Tier 3 — Supporting Works (Depth)

| # | Painting | Artist |
|---|----------|--------|
| 31 | The Feast of the Gods | Giovanni Bellini/Titian |
| 32 | Saint George and the Dragon | Raphael |
| 33 | The Small Cowper Madonna | Raphael |
| 34 | The Conversion of Saint Paul | Caravaggio |
| 35 | Daniel in the Lions' Den | Peter Paul Rubens |
| 36 | Symphony in White, No. 1 | James McNeill Whistler |
| 37 | Seascape at Saintes-Maries | Vincent van Gogh |
| 38 | Right and Left | Winslow Homer |
| 39 | Max Schmitt in a Single Scull | Thomas Eakins |
| 40 | The Sacrament of the Last Supper | Salvador Dalí |

## Data Sources

1. **Wikipedia** - Verified artwork info, dates, dimensions
2. **Wikimedia Commons** - CC0 images (NGA donated collection)
3. **NGA GitHub** - Object data in CSV format
4. **Wikidata** - Structured data with IDs for linking

## Implementation Approach

### Phase 1: Tier 1 Paintings (12 works)
Create seed script with full descriptions and 4-5 FAQs each.
- High-quality descriptions (200-350 words)
- FAQs with internal links to artists, movements, museums
- Proper image attribution

### Phase 2: Tier 2 Paintings (18 works)
Add remaining high-value works with descriptions and 3-4 FAQs.

### Phase 3: Tier 3 & Depth (10+ works)
Fill in supporting works for complete artist coverage.

## Artist Pages to Create/Update

New artists that may need creation:
- Arshile Gorky (if not exists)
- Joan Mitchell (if not exists)
- Domenico Veneziano (if not exists)

Artists to update with NGA works:
- Jackson Pollock
- Edward Hopper
- Georgia O'Keeffe
- Édouard Manet
- Jean-Honoré Fragonard

## Expected Outcome

| Metric | Before | After |
|--------|--------|-------|
| NGA artworks | 66 | 106+ |
| Tier 1 NGA | 5 | 17+ |
| Tier 2 NGA | 8 | 26+ |
| New SEO keywords | — | 100+ |

## Files Created

- `prisma/seed-nga-tier1.js` - Tier 1 paintings
- `prisma/seed-nga-tier2.js` - Tier 2 paintings
- `prisma/seed-nga-tier3.js` - Tier 3 paintings
- `scripts/fetch-nga.js` - NGA data fetcher (exists)
- `scripts/nga-data/` - Downloaded NGA CSV data (exists)

---

*Created: February 4, 2026*
