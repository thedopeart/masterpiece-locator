# Artwork Optimization (Tier 3)

For lesser-known artworks. Efficient but quality content.

## Task
Write ~120-150 word descriptions + 3-4 quality FAQs for each artwork.

## Rules
- Read `CLAUDE.md` for link formats and banned words
- ~120-150 words per description (2 short paragraphs)
- 3-4 FAQs, **35-50 words each** with helpful detail
- Must include: artist link, museum link, 1 bold per paragraph
- **3-4 interlinks total** across all FAQs (spread naturally)
- Use database fields + general artist/movement knowledge
- Work through slugs systematically

## Link Format (IMPORTANT)
- Artist: `/apps/masterpieces/artist/artist-slug`
- Museum: `/apps/masterpieces/museum/museum-slug`
- Movement: `/apps/masterpieces/movement/movement-slug`
- LuxuryWallArt: `https://luxurywallart.com/collections/collection-slug`

## Description Format
```
Paragraph 1: [Artist link], painted this [year], showing [what's depicted]. [One sentence about style/technique with bold keyword].

Paragraph 2: [Brief context or artist connection to subject]. Now at [Museum link]. [Optional: color/style mention with LWA link if natural fit].
```

## FAQ Requirements
Each FAQ answer should be **35-50 words** with specific details:

**Good FAQ topics:**
- Where can I see this painting? → museum link + city + what else is there
- Who painted this? → artist link + brief bio context + movement link
- What does it depict? → describe scene + historical/symbolic meaning
- What style is it? → movement link + technique details
- How big is it? → dimensions + context (intimate vs monumental)
- When was it painted? → year + what was happening in artist's life/career

**Example quality FAQ:**
```
Q: Where can I see The Geographer?
A: Johannes Vermeer's The Geographer hangs at the <a href="/apps/masterpieces/museum/staedel-museum"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The museum houses one of Europe's finest collections of Old Masters, including works by Botticelli, Rembrandt, and Dürer.
```

Update database, then run `node get-artworks.js` when done.
