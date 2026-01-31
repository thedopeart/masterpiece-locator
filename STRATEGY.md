# Masterpiece Locator - Strategy & Data Sourcing Guide

## Competitive Positioning

### Our Unique Value vs WikiArt

WikiArt.org is the largest visual art encyclopedia with 250,000+ artworks. However, they lack one critical feature:

| Feature | WikiArt | Masterpiece Locator |
|---------|---------|---------------------|
| Artwork catalog | 250,000+ | Growing |
| Artist bios | Yes | Yes |
| Museum locations | **No** | **Yes** |
| Trip planning | No | Planned |
| "See nearby" feature | No | Planned |
| High-res images | Mixed | Curated |

**Our differentiator: We tell you WHERE to see the art in person.**

WikiArt answers "What did Van Gogh paint?"
We answer "Where can I see Starry Night TODAY?"

---

## Image Sourcing Strategy

### 1. Public Domain Artworks (Pre-1928 or Artist Died 70+ Years Ago)

These are freely usable with no restrictions.

**Best Sources (in order of preference):**

1. **Museum APIs (Highest Quality)**
   - Metropolitan Museum of Art: https://metmuseum.github.io/
   - Rijksmuseum: https://data.rijksmuseum.nl/
   - Art Institute of Chicago: https://api.artic.edu/docs/
   - Cleveland Museum of Art: https://openaccess-api.clevelandart.org/

2. **Wikimedia Commons**
   - URL pattern: `upload.wikimedia.org`
   - High quality, well-documented provenance
   - Already configured in next.config.ts

3. **WikiArt (Public Domain Only)**
   - URL pattern: `uploads2.wikiart.org`
   - Per their ToS: "WikiArt.org allows unlimited copying, distributing and displaying of images of public domain artworks"
   - Only use for artworks where artist died 70+ years ago
   - Already configured in next.config.ts

### 2. Copyrighted Artworks (Modern/Contemporary)

**DO NOT scrape or hotlink these.** Options:
- Link to museum's official page
- Use placeholder with "Visit museum website" CTA
- Contact museum for licensing

### 3. Artist Portraits

**Priority order:**
1. Self-portraits (ideal for artists)
2. Photographs (for modern artists in public domain)
3. Contemporary portraits by other artists
4. Fall back to artwork with "No Portrait Available" tag

**Implementation:** See `scripts/fix-all-broken-portraits.js`

---

## Image URL Configuration

All external image domains must be added to `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    { protocol: "https", hostname: "upload.wikimedia.org" },
    { protocol: "https", hostname: "images.metmuseum.org" },
    { protocol: "https", hostname: "cdn.shopify.com" },
    { protocol: "https", hostname: "luxurywallart.com" },
    { protocol: "https", hostname: "www.rijksmuseum.nl" },
    { protocol: "https", hostname: "api.artic.edu" },
    { protocol: "https", hostname: "uploads2.wikiart.org" },
  ],
},
```

---

## Expansion Roadmap

### Phase 1: Fix Data Quality (Mostly Complete)
- [x] Fix broken portrait URLs
- [x] Add "No Portrait Available" fallback with tag
- [x] Fix incorrect artwork images
- [x] Fix old-format internal links across sculpture descriptions
- [ ] Audit all artwork imageUrls for broken links
- [ ] Replace low-quality images with museum API sources

### Phase 2: Content Enrichment (In Progress)
- [x] Artist bios and FAQs: 314/799 complete (39%)
- [x] Artwork descriptions and FAQs: 5,112/6,494 complete (78.7%)
- [x] Museum descriptions and FAQs: 110/467 complete (23.5%)
- [x] Sculpture artist enrichment: 20 major sculpture artists done
- [x] Sculpture landing page FAQs improved
- [ ] Remaining 485 artists need bios/FAQs
- [ ] Remaining 1,382 artworks need descriptions (mostly T3, ~1,330 are sculptures with no assigned artist)
- [ ] Remaining 357 museums need FAQs

### Phase 3: Expand Catalog
- [x] 2,546 sculptures added to database
- [x] Sculpture browsing hub with 13 categories (by material and origin)
- [ ] Script to find missing artworks from WikiArt (public domain only)
- [ ] Import museum collection data via APIs

### Phase 4: Differentiation Features
- [x] Opening hours and practical info for 20 top museums
- [ ] "Museums near me" geolocation
- [ ] "See these 5 masterpieces in one visit" trip planning
- [ ] User reviews / tips for visiting

### Phase 5: SEO & Traffic
- [ ] City landing pages ("Art museums in Paris")
- [ ] Artist movement pages
- [ ] "Best paintings at [Museum]" guides

---

## Data Scripts Reference

| Script | Purpose |
|--------|---------|
| `fix-all-broken-portraits.js` | Test all artist imageUrls, clear broken ones |
| `fix-page5-portraits.js` | Fix specific page of artists |
| `check-page5-artists.js` | Audit artists for missing portraits |

### Running Scripts

```bash
cd /Apps/Masterpiece\ Locator/masterpiece-locator
node scripts/fix-all-broken-portraits.js
```

---

## Legal Notes

1. **Public Domain**: Works published before 1928 OR where the artist died 70+ years ago are public domain in most jurisdictions.

2. **WikiArt Fair Use**: WikiArt hosts copyrighted images under fair use for "informational and educational purposes" only. These are intentionally low-resolution and cannot be used commercially.

3. **Museum Images**: Always prefer official museum API images when available. They explicitly license their public domain collections for reuse.

4. **Attribution**: While not legally required for public domain, attribution is good practice:
   - Source museum name
   - Wikimedia Commons link when applicable

---

## Quick Reference: Copyright Status

| Artist Death Year | Copyright Status |
|-------------------|------------------|
| Before 1954 | Public domain (70+ years) |
| 1954-1995 | Likely still copyrighted |
| After 1995 | Definitely copyrighted |

**Note:** This is simplified. Actual rules vary by country and whether work was published.
