# Timeline / Era Explorer Implementation Plan

## Overview

Add era-based landing pages and an interactive timeline visualization to capture high-volume educational search queries like "Renaissance paintings" (18K/mo), "Impressionist art" (14K/mo), and "Baroque artists" (6.6K/mo).

---

## Current State

**What exists:**
- `Movement` model with `startYear`, `endYear`, `description`, `keyCharacteristics[]`
- `getEra()` function grouping movements into: Medieval, Renaissance, 17th-18th Century, 19th Century, 20th Century, Contemporary
- `/movements` page with era sidebar grouping
- `/movement/[slug]` detail pages

**What's missing:**
- Dedicated `/era/[slug]` landing pages (SEO goldmine)
- Interactive timeline visualization
- Era-to-movement-to-artist flow
- Schema markup for educational content

---

## Implementation Plan

### Phase 1: Era Landing Pages (Priority - SEO Value)

**New Routes:**
```
/era/[slug]              Era detail page (e.g., /era/renaissance)
/eras                    Era directory page (optional, low priority)
```

**Era Slugs:**
| Era | Slug | Years | Target Keywords |
|-----|------|-------|-----------------|
| Medieval | `medieval` | < 1400 | medieval art, gothic paintings |
| Renaissance | `renaissance` | 1400-1599 | Renaissance paintings, Renaissance artists |
| Baroque & Rococo | `baroque-rococo` | 1600-1799 | Baroque art, Baroque painters |
| Romanticism & Realism | `19th-century` | 1800-1899 | Romantic art, Realist paintings |
| Modern Art | `modern` | 1900-1969 | Modern art, Impressionist art, Expressionism |
| Contemporary | `contemporary` | 1970+ | Contemporary art, modern paintings |

**Files to Create:**

1. **`/src/app/era/[slug]/page.tsx`** - Era detail page
   ```
   - Hero section with era name, date range, brief description
   - Key characteristics list
   - Movements grid (cards with representative artworks)
   - Featured artists from this era
   - Featured artworks from this era
   - Timeline visualization (horizontal scrolling)
   - SEO: generateMetadata with era-specific titles/descriptions
   - Schema: CollectionPage or ItemList JSON-LD
   ```

2. **`/src/lib/eras.ts`** - Era data and utilities
   ```typescript
   export const ERAS = [
     {
       slug: 'medieval',
       name: 'Medieval Art',
       startYear: 500,
       endYear: 1399,
       description: 'Religious iconography, Gothic cathedrals, illuminated manuscripts...',
       keywords: ['medieval art', 'gothic paintings', 'illuminated manuscripts'],
       characteristics: ['Religious subjects', 'Gold backgrounds', 'Flat perspective', 'Symbolic imagery']
     },
     {
       slug: 'renaissance',
       name: 'Renaissance',
       startYear: 1400,
       endYear: 1599,
       description: 'The rebirth of classical ideals, linear perspective, humanism...',
       keywords: ['Renaissance paintings', 'Renaissance artists', 'Italian Renaissance'],
       characteristics: ['Linear perspective', 'Classical subjects', 'Naturalism', 'Chiaroscuro']
     },
     // ... etc
   ];

   export function getEraBySlug(slug: string): Era | undefined
   export function getEraForYear(year: number): Era
   export function getMovementsInEra(eraSlug: string, movements: Movement[]): Movement[]
   ```

3. **`/src/components/EraCard.tsx`** - Era card for listings
   ```
   - Era name, date range
   - 3-4 thumbnail images from movements
   - Movement count, artist count
   - Click to /era/[slug]
   ```

**Database Queries (no schema changes needed):**
```typescript
// Get all movements in an era
const movements = await prisma.movement.findMany({
  where: {
    startYear: { gte: era.startYear, lt: era.endYear }
  },
  include: {
    Artist: { take: 8, include: { Artwork: { take: 1 } } },
    _count: { select: { Artist: true } }
  },
  orderBy: { startYear: 'asc' }
});

// Get featured artworks from era
const artworks = await prisma.artwork.findMany({
  where: {
    year: { gte: era.startYear, lt: era.endYear },
    imageUrl: { not: null },
    searchVolumeTier: { lte: 2 }
  },
  include: { Artist: true, Museum: true },
  take: 12
});
```

---

### Phase 2: Timeline Visualization Component

**File: `/src/components/Timeline.tsx`**

**Features:**
- Horizontal scrolling timeline
- Era sections color-coded
- Movement markers positioned by startYear
- Hover to preview movement details
- Click to navigate to movement page
- Responsive: horizontal scroll on mobile, full view on desktop

**Props Interface:**
```typescript
interface TimelineProps {
  movements: {
    slug: string;
    name: string;
    startYear: number;
    endYear: number | null;
    artistCount: number;
  }[];
  highlightEra?: string; // Highlight current era on era pages
  showArtists?: boolean; // Show artist markers too
}
```

**Layout:**
```
|----Medieval----|------Renaissance------|----Baroque----|----19th C----|----Modern----|
    |Gothic|        |High Ren|  |Mannerism|   |Rococo|   |Impres|  |Expres|  |Abstract|
       ▲               ▲           ▲           ▲          ▲         ▲          ▲
    markers         markers     markers     markers    markers   markers    markers
```

**Styling:**
```css
/* Era color coding */
.era-medieval { background: #8B4513; }
.era-renaissance { background: #DAA520; }
.era-baroque { background: #800020; }
.era-19th-century { background: #2E8B57; }
.era-modern { background: #4169E1; }
.era-contemporary { background: #9932CC; }
```

---

### Phase 3: Enhanced Navigation & Cross-linking

**Updates to existing pages:**

1. **`/movements/page.tsx`** - Add era tabs/filter
   ```
   [All] [Medieval] [Renaissance] [Baroque] [19th Century] [Modern] [Contemporary]
   ```

2. **`/movement/[slug]/page.tsx`** - Add era breadcrumb and link
   ```
   Era: Renaissance (1400-1599) → Movement: High Renaissance
   ```

3. **`/artist/[slug]/page.tsx`** - Show era context
   ```
   Era: Baroque (worked primarily in the 17th century)
   ```

4. **Homepage** - Add "Explore by Era" section
   ```
   Six era cards in a grid, linking to /era/[slug]
   ```

5. **Navigation** - Add "Eras" link next to "Movements"

---

### Phase 4: SEO Optimization

**Meta titles (60 chars max):**
```
Renaissance Paintings: 50+ Masterpieces to See | Masterpiece Finder
Impressionist Art: Where to See Monet, Renoir & Degas
Baroque Artists: Caravaggio, Vermeer & 40+ Masters
```

**Meta descriptions (160 chars max):**
```
Discover Renaissance paintings from Leonardo, Michelangelo, and Raphael. See where to find these masterpieces in museums worldwide.
```

**Schema Markup:**
```typescript
// CollectionPage schema for era pages
const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Renaissance Art",
  "description": "...",
  "about": {
    "@type": "VisualArtwork",
    "artform": "Painting"
  },
  "hasPart": movements.map(m => ({
    "@type": "ItemList",
    "name": m.name,
    "itemListElement": m.artworks.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "VisualArtwork",
        "name": a.title
      }
    }))
  }))
};
```

**Internal Linking Strategy:**
```
Homepage → Era pages → Movement pages → Artist pages → Artwork pages
                ↓              ↓              ↓
           Artworks grid   Artists grid   Museum links
```

---

## File Structure

```
/src
  /app
    /era
      /[slug]
        page.tsx          # Era detail page
    /eras
      page.tsx            # Era directory (optional)
  /components
    Timeline.tsx          # Interactive timeline
    EraCard.tsx           # Era card component
    EraHero.tsx           # Era page hero section
    EraBreadcrumb.tsx     # Era context breadcrumb
  /lib
    eras.ts               # Era data, utilities
    seo.ts                # Add eraMetaTitle(), eraMetaDescription()
```

---

## Implementation Order

| Step | Task | Files | Est. Time |
|------|------|-------|-----------|
| 1 | Create `/src/lib/eras.ts` with era data | 1 file | 30 min |
| 2 | Create `/src/app/era/[slug]/page.tsx` | 1 file | 2 hours |
| 3 | Add SEO utilities for eras | Update seo.ts | 30 min |
| 4 | Create `EraCard.tsx` component | 1 file | 45 min |
| 5 | Create `Timeline.tsx` visualization | 1 file | 2 hours |
| 6 | Update homepage with era section | Update page.tsx | 45 min |
| 7 | Update navigation | Update Navigation.tsx | 15 min |
| 8 | Add era filter to movements page | Update movements page | 30 min |
| 9 | Add era context to movement pages | Update movement page | 30 min |
| 10 | Test and refine | All | 1 hour |

**Total estimated: 8-9 hours (1-2 days)**

---

## Success Metrics

1. **SEO:** Era pages ranking for target keywords within 30 days
2. **Engagement:** Average session duration increase on movement pages
3. **Navigation:** Click-through from era pages to movements/artworks
4. **Indexing:** All era pages indexed by Google within 14 days

---

## Future Enhancements (Post-Launch)

- Compare eras feature (side-by-side characteristics)
- Artist timeline within movement pages
- "What was happening" historical context
- Quiz: "Which era is this artwork from?"
- Print-friendly timeline for educators

---

## Dependencies

- No new npm packages required
- No database schema changes
- Relies on existing Movement, Artist, Artwork data
- Uses existing Tailwind styling patterns

---

## Ready to Implement

This plan requires no clarification. All data exists in the database. The implementation follows existing patterns in the codebase. Start with Step 1: Create `/src/lib/eras.ts`.
