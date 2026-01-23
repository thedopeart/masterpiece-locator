# Migration Log

This file tracks completed data migrations for the Masterpiece Locator database.

---

## Artist Optimizations (Jan 20-21, 2026)

**Completed:** 303/312 artists with bios and FAQs

Scripts executed:
- `batch-update-artists-1.js` through `batch-update-artists-5.js`
- `batch-update-25-artists.js`
- `update-artists-batch1.js` through `update-artists-batch4.js`
- `update-40-artists.js`, `update-10-artists.js`

**Remaining:** 9 artists (see ARTIST-CHECKLIST.md)

---

## Artwork Optimizations (Jan 19-21, 2026)

**Completed:** 1,912/3,742 artworks with descriptions and FAQs

Scripts executed:
- `batch-update-artworks-1.js` through `batch-update-artworks-6.js`
- `batch-update-b.js`, `batch-update-d.js`
- `update-20-artworks.js`, `update-20-artworks-batch2.js`
- `update-25-artworks-tier3.js`, `update-25-artworks-batch4.js`
- `scripts/update-faqs-batch1.js` through `update-faqs-batch17.js`
- `scripts/update-artworks-*.js` (various batches)

**Remaining:** 1,830 artworks (see ARTWORK-CHECKLIST.md)

---

## Museum Optimizations (Jan 21, 2026)

**Completed:** 56/440 museums with FAQs

Scripts executed:
- `update-15-museums.js`, `update-15-museums-batch2.js`
- `batch-update-museums-20.js`, `batch-update-museums-20-part2.js`
- `update-20-museums-batch3.js`

**Remaining:** 384 museums (see MUSEUM-CHECKLIST.md)

---

## Image Fixes (Jan 16-19, 2026)

Scripts executed in `scripts/`:
- `fix-broken-images.ts` through `fix-broken-images-3.ts`
- `fix-artist-images.js`, `fix-artist-portraits.ts`
- `fix-page1-portraits.js` through `fix-page5-portraits.js`
- `fix-all-broken-portraits.js`

---

## Data Seeding (Jan 16-18, 2026)

Initial data import scripts in `scripts/`:
- `seed.ts` - initial database seed
- `add-more-art-1.ts` through `add-more-art-9.ts`
- `add-orphan-artworks.ts` through `add-orphan-artworks-4.ts`
- `add-descriptions.ts` through `add-descriptions-4.ts`
- `assign-museums.ts` through `assign-museums-4.ts`
- `merge-duplicate-museums.ts`, `cleanup-museums.ts`
- `import-from-wikiart.js`, `enrich-with-museums.js`

---

## Utility Scripts (KEEP)

These scripts are still in use:
- `get-artists.js` - generates ARTIST-CHECKLIST.md
- `get-artworks.js` - generates ARTWORK-CHECKLIST.md
- `get-museums.js` - generates MUSEUM-CHECKLIST.md
- `get-todo-artworks.js` - query helper for TODO artworks

---

*All one-time migration scripts were removed on Jan 22, 2026.*
