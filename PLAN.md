# Museum Hours & Practical Info - Implementation Plan

## Current State (Updated 2026-01-23)

- **440 total museums** in the database
- **20 museums** have `hoursOfOperation` data in the database ✓
- **136 museums** have FAQs
- **5 JSON files** exist in `data/museums/` with comprehensive data (synced to DB)

## Objective

Add hours, admission, tips, and practical visitor info for top museums by collection size. Include this info in museum FAQs for SEO value (targeting queries like "[museum] hours", "[museum] tickets", "[museum] best time to visit").

---

## Phase 1: Sync Existing JSON Data to Database

The following museums already have complete JSON files in `data/museums/`:
- Met (112 artworks)
- Louvre (173 artworks)
- National Gallery London (150 artworks)
- Musée d'Orsay (134 artworks)
- Uffizi (80 artworks)

**Task:** Create sync script to update these museums' `hoursOfOperation` and `faqs` fields from their JSON files.

---

## Phase 2: Research & Add Data for Top 15 Museums (Missing Hours)

Priority order by collection size, excluding Private Collection:

| Priority | Museum | Artworks | City | Notes |
|----------|--------|----------|------|-------|
| 1 | State Hermitage Museum | 139 | St. Petersburg | Major collection, Russian hours |
| 2 | Museo del Prado | 83 | Madrid | Tier 1 per feature doc |
| 3 | Art Institute of Chicago | 73 | Chicago | Tier 2 per feature doc |
| 4 | National Gallery of Art | 59 | Washington DC | Tier 2 per feature doc |
| 5 | Rijksmuseum | 59 | Amsterdam | Tier 2 per feature doc |
| 6 | State Russian Museum | 53 | St. Petersburg | |
| 7 | Cleveland Museum of Art | 45 | Cleveland | |
| 8 | Kunsthistorisches Museum | 45 | Vienna | |
| 9 | Museum of Fine Arts Boston | 40 | Boston | Tier 2 per feature doc |
| 10 | Tate Britain | 31 | London | |
| 11 | Gemäldegalerie Berlin | 28 | Berlin | |
| 12 | Thyssen-Bornemisza Museum | 27 | Madrid | |
| 13 | MoMA | 25 | New York | Tier 1 per feature doc |
| 14 | Kunstmuseum Basel | 24 | Basel | |
| 15 | Courtauld Gallery | 22 | London | |

**For each museum, research:**
- Hours of operation (regular + holiday closures)
- Admission prices (adult, senior, student, child, free days)
- Best times to visit / crowd data
- Insider tips (3-5 tips)
- Ticket URL

**Output:** JSON file per museum + database update

---

## Phase 3: Add Hours FAQs for SEO

For each museum with hours data, add/update FAQs targeting search queries:

1. **"What are [museum] hours?"** - Include open/close times, closed days
2. **"How much does [museum] cost?"** - Admission prices, free policies
3. **"What is the best time to visit [museum]?"** - Best days, times, seasons
4. **"How long should I spend at [museum]?"** - Recommended duration

These FAQs will appear on museum pages and in structured data for featured snippets.

---

## Data Structure

Each museum JSON follows this structure (from feature doc):

```json
{
  "hours": {
    "regular": {
      "monday": { "open": "10:00", "close": "18:00" },
      ...
    },
    "exceptions": [...],
    "notes": "..."
  },
  "admission": {
    "adult": 20,
    "senior": 15,
    "student": 12,
    "child": 0,
    "currency": "EUR",
    "freeDay": "First Sunday of month",
    ...
  },
  "crowdData": {
    "bestDays": [...],
    "bestTimes": [...],
    ...
  },
  "tips": [...],
  "faqs": [...]
}
```

---

## Execution Steps

### Step 1: Sync existing JSON files
- Create `scripts/sync-museum-json.js`
- Update 5 museums' DB records from JSON files
- Verify data appears correctly

### Step 2: Research Phase 2 museums (batch of 5 at a time)
- Use WebSearch to find hours from official museum websites
- Create JSON file for each museum
- Update database with hours and FAQs

### Step 3: Add SEO FAQs
- Ensure each museum has 4+ FAQs targeting hours/tickets/best time queries
- Include rich formatting with bold keywords and internal links

---

## Success Criteria

- [x] 20+ museums have complete hours data (20 completed)
- [x] All top 15 museums (by collection) have hours and FAQs
- [x] FAQs target "[museum] hours" search queries
- [ ] JSON files created for future schema markup implementation (5 exist, data in DB for all 20)

---

## Estimated Effort

- Phase 1: ~30 minutes (script creation + sync)
- Phase 2: ~20-30 minutes per museum × 15 museums = 5-8 hours
- Phase 3: Included in Phase 2 (FAQs created alongside hours)

**Total: ~6-9 hours of work**
