# Data Sources & APIs

## Museum APIs (Open Access)

### Metropolitan Museum of Art
- **API Docs:** https://metmuseum.github.io/
- **License:** CC0 (public domain dedication)
- **Coverage:** 470,000+ objects, ~400,000 images
- **Image Domain:** `images.metmuseum.org`
- **Best For:** American and European art, Egyptian antiquities

```javascript
// Example: Get object by ID
fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436535')
```

### Rijksmuseum (Amsterdam)
- **API Docs:** https://data.rijksmuseum.nl/object-metadata/api/
- **License:** CC0 for public domain works
- **Coverage:** 700,000+ objects
- **Image Domain:** `www.rijksmuseum.nl`
- **Best For:** Dutch Golden Age, Rembrandt, Vermeer

```javascript
// Requires API key (free registration)
fetch('https://www.rijksmuseum.nl/api/en/collection?key=YOUR_KEY&involvedMaker=Rembrandt')
```

### Art Institute of Chicago
- **API Docs:** https://api.artic.edu/docs/
- **License:** CC0 for public domain
- **Coverage:** 120,000+ artworks
- **Image Domain:** `api.artic.edu`
- **Best For:** Impressionism, American art

```javascript
// Example: Search artworks
fetch('https://api.artic.edu/api/v1/artworks/search?q=monet')
```

### Cleveland Museum of Art
- **API Docs:** https://openaccess-api.clevelandart.org/
- **License:** CC0 for public domain
- **Coverage:** 61,000+ works
- **Best For:** Asian art, Medieval art

### Harvard Art Museums
- **API Docs:** https://github.com/harvardartmuseums/api-docs
- **License:** Requires API key, educational use
- **Coverage:** 250,000+ objects

---

## Encyclopedic Sources

### Wikimedia Commons
- **URL Pattern:** `upload.wikimedia.org`
- **License:** Various (check each image)
- **Best For:** Supplementary images, artist portraits
- **API:** MediaWiki API

```javascript
// Search for images
const params = new URLSearchParams({
  action: 'query',
  format: 'json',
  list: 'search',
  srsearch: 'Van Gogh self-portrait',
});
fetch(`https://commons.wikimedia.org/w/api.php?${params}`)
```

### WikiArt
- **URL Pattern:** `uploads2.wikiart.org`
- **License:** Public domain artworks only (see STRATEGY.md)
- **Coverage:** 250,000+ artworks
- **Best For:** Filling gaps in catalog, especially less famous works
- **Limitation:** No official API, scraping required

**Important:** Only use WikiArt for works that are definitively public domain:
- Artist died before 1954 (70+ years rule)
- Published before 1928 (US rule)

---

## Wikipedia API (Artist Data)

Use for artist biographies, birth/death years, nationality.

```javascript
// Get artist summary
fetch('https://en.wikipedia.org/api/rest_v1/page/summary/Vincent_van_Gogh')
```

---

## Image Quality Hierarchy

When multiple sources available, prefer in this order:

1. **Museum's own API** (highest quality, best provenance)
2. **Wikimedia Commons** (well-documented, consistent)
3. **WikiArt** (public domain only, fills gaps)

---

## Adding New Image Domains

When adding a new image source, update `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    // Add new domain here
    { protocol: "https", hostname: "new-museum.org" },
  ],
},
```

Then restart the dev server for changes to take effect.

---

## Broken Image Handling

### Detection
Run `scripts/fix-all-broken-portraits.js` to find broken URLs.

### Resolution
1. Check if image moved (try variations)
2. Find replacement from museum API
3. Fall back to WikiArt (public domain only)
4. Set to null (shows artwork with "No Portrait Available" tag)

### Frontend Fallback Logic
```tsx
{artist.imageUrl ? (
  <Image src={artist.imageUrl} />
) : artist.artworks[0]?.imageUrl ? (
  <>
    <Image src={artist.artworks[0].imageUrl} />
    <Tag>No Portrait Available</Tag>
  </>
) : (
  <Placeholder>{artist.name.charAt(0)}</Placeholder>
)}
```

---

## Future Data Sources to Explore

- **Europeana** - European cultural heritage
- **Google Arts & Culture** - (limited API access)
- **National Gallery (UK)** - British art
- **Musée du Louvre** - (limited digital access)
- **Museo del Prado** - Spanish masters

---

## Rate Limiting Best Practices

Most museum APIs have rate limits. When bulk importing:

```javascript
const DELAY_MS = 300; // Between requests
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

for (const item of items) {
  await processItem(item);
  await sleep(DELAY_MS);
}
```

---

## WikiArt Import Workflow

Use these scripts to systematically expand your catalog from WikiArt.

### Step 1: Find Gaps

Run the gap finder to compare your catalog against WikiArt:

```bash
cd /Apps/Masterpiece\ Locator/masterpiece-locator

# Check all public domain artists (may take a while)
node scripts/find-wikiart-gaps.js

# Check specific artist
node scripts/find-wikiart-gaps.js --artist=vincent-van-gogh

# Limit to first 10 artists (for testing)
node scripts/find-wikiart-gaps.js --limit=10
```

Output goes to `data/wikiart-gaps/wikiart-gaps-YYYY-MM-DD.csv`

### Step 2: Auto-Enrich with Museum Locations

Run the enrichment script to automatically find museum locations:

```bash
node scripts/enrich-with-museums.js --file=data/wikiart-gaps/wikiart-gaps-2024-01-18.csv
```

This searches:
- Metropolitan Museum of Art API
- Art Institute of Chicago API
- Cleveland Museum of Art API
- WikiArt page metadata
- Wikipedia article references

Output: `wikiart-gaps-2024-01-18-enriched.csv` with museum locations pre-filled.

### Step 3: Review & Import

Review the enriched CSV, then import:

```bash
# Dry run first (no changes made)
node scripts/import-from-wikiart.js --file=data/wikiart-gaps/enriched.csv --dry-run

# Actually import
node scripts/import-from-wikiart.js --file=data/wikiart-gaps/enriched.csv
```

### What Gets Imported

- Only rows with museum locations are imported
- Artists must already exist in your database
- Duplicate artworks (by title or slug) are skipped
- New museums are created automatically if needed

### Script Reference

| Script | Purpose |
|--------|---------|
| `find-wikiart-gaps.js` | Compare your catalog vs WikiArt, output gaps CSV |
| `enrich-with-museums.js` | Auto-fill museum locations from APIs |
| `import-from-wikiart.js` | Import enriched artworks into database |

### Priority Strategy

When deciding what to import, prioritize:
1. **Famous works** - Artworks people actually search for
2. **Artists with thin coverage** - If you only have 2 paintings by Monet, add more
3. **Works with known museum locations** - Your differentiator
4. **Different movements/styles** - Variety in your catalog
