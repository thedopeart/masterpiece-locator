# Quick Artwork Optimization (Tier 3)

For lesser-known artworks. Keep it simple and fast.

## Task
Write ~120 word descriptions + 2-3 short FAQs for each artwork.

## Rules
- Read `CLAUDE.md` for link formats and banned words
- ~120 words per description (2 short paragraphs)
- 2-3 FAQs, 20-30 words each
- Must include: artist link, museum link, 1 bold per paragraph
- **NO research needed** - use only database fields (title, artist, year, museum, medium, dimensions)
- No Wikipedia lookups
- Work through slugs quickly in large batches

## Format
```
Paragraph 1: [Artist link], painted this [year], showing [what's depicted]. [One sentence about style/technique].

Paragraph 2: [Brief context or artist info]. Now at [Museum link].
```

## FAQs (pick 2-3)
- Where is it? → museum link
- Who painted it? → artist link
- What size? → dimensions
- What style? → movement link if available

Update database, then run `node get-artworks.js` when done.
