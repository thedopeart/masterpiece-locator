# Masterpiece Locator - Image Issues

Updated: 2026-01-30

---

## Summary

**Note:** Image audit data below is from Jan 2026 when there were 453 artworks. The database has since grown to 6,494 artworks (including 2,546 sculptures). A new audit of all image URLs is needed.

| Category | Count | Notes |
|----------|-------|-------|
| **Total Artworks** | 6,494 | 3,948 paintings + 2,546 sculptures |
| Audited (Jan 18) | 453 | All working at time of audit |
| Unaudited | ~6,041 | Needs image URL verification |

---

## Repair History

### Phase 1: Commons Search Script
- Initial status: 93 working (20%)
- Fixed: 144 images
- Result: 237 working (52%)

### Phase 2: Wikipedia-based Script
- Found 211 broken URLs
- Fixed: 205 images automatically
- Result: 442 working (98%)

### Phase 3: Manual Fixes
- Remaining: 11 images
- Fixed: 11 images manually via web search
- Result: 453 working (100%)

---

## Copyrighted Works (NULL intentionally)

These 11 artworks have no image URL due to copyright restrictions:

1. Guernica - Pablo Picasso, 1937
2. Les Demoiselles d'Avignon - Pablo Picasso, 1907
3. The Persistence of Memory - Salvador Dali, 1931
4. Campbell's Soup Cans - Andy Warhol, 1962
5. Jimson Weed/White Flower No. 1 - Georgia O'Keeffe, 1932
6. The Son of Man - Rene Magritte, 1964
7. Number 1A, 1948 - Jackson Pollock, 1948
8. Contrast of Forms - Fernand Leger, 1913
9. The Dance - Henri Matisse, 1910
10. The Gust of Wind - Leon Spilliaert, 1904
11. The Bread Eater - Constant Permeke, 1936

---

## Repair Scripts

### 1. Commons Search Script (fix-broken-images.js)
```bash
node scripts/fix-broken-images.js --dry-run  # Preview changes
node scripts/fix-broken-images.js             # Run all
```

### 2. Wikipedia-based Script (fix-images-wikipedia.js)
```bash
node scripts/fix-images-wikipedia.js
```

### Status Check
```bash
node scripts/check-status.js
```

---

## Completed

- [x] Identified broken URLs
- [x] Created automated repair script (Commons search)
- [x] Created Wikipedia-based repair script
- [x] Fixed all 453 images (100% success rate)
