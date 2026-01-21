# Artist Optimization Task

Write rich biographical content for artists in the Masterpiece Locator database.

## Workflow

1. Read `CLAUDE.md` for link formats and banned words
2. Check `ARTIST-CHECKLIST.md` for TODO items
3. Pick 10-15 artists from Tier 1 first (most artworks = highest priority)
4. Research each via Wikipedia/WebFetch
5. Write bioFull and FAQs following guidelines below
6. Update database with Prisma
7. Run `node get-artists.js` to refresh checklist

---

## Bio Requirements

### Length
- **250-350 words** (2 solid paragraphs)
- Every artist gets full treatment, no shortcuts

### Structure
```html
<p>Paragraph 1: [Movement link] artist [name] (birth-death years). Where they worked, what they're known for. Their signature style or technique. Major works or series.</p>

<p>Paragraph 2: Training and influences. Career highlights, royal/church patrons, famous commissions. Legacy and influence on later artists. Where to see their work today with [Museum links].</p>
```

### What to Include
- Art movement(s) they belonged to with links
- Nationality and where they primarily worked
- Signature style, techniques, or subjects
- Major works (link to artwork pages if in database)
- Training, influences, mentors
- Notable patrons or commissions
- Historical context (wars, religious changes, etc.)
- Legacy and influence on later artists
- Museums holding major collections of their work

### Interlinking
- **Movement links**: `<a href="/apps/masterpieces/movement/movement-slug"><strong>Movement Name</strong></a>`
- **Museum links**: `<a href="/apps/masterpieces/museum/museum-slug"><strong>Museum Name</strong></a>`
- **Artwork links**: `<a href="/apps/masterpieces/art/artwork-slug"><strong>Artwork Title</strong></a>`
- **LuxuryWallArt**: When style matches collections (see CLAUDE.md for full list)
- **Bold keywords**: At least 1 per paragraph

---

## FAQ Requirements

### Count
- **5-6 FAQs per artist**

### Answer Length
- **25-40 words each**
- Every answer must have at least one interlink

### Common FAQ Topics
1. What movement/style? → link movement
2. Where can I see their work? → link major museums
3. What are their famous paintings? → link artworks if in database
4. When did they live? → birth/death years, historical context
5. What subjects did they paint? → link LWA collections if natural fit
6. Who influenced them / who did they influence?
7. What techniques are they known for?

### FAQ Format
```json
{
  "question": "What art movement was [Artist] part of?",
  "answer": "[Artist] was a leading figure in <a href=\"/movement/...\"><strong>Movement Name</strong></a>. [One more sentence of context about their role in the movement.]"
}
```

---

## Database Update

```javascript
await prisma.artist.update({
  where: { slug: 'artist-slug' },
  data: {
    bioFull: `<p>...</p><p>...</p>`,
    faqs: [
      { question: "...", answer: "..." },
      { question: "...", answer: "..." },
      { question: "...", answer: "..." },
      { question: "...", answer: "..." },
      { question: "...", answer: "..." }
    ],
    updatedAt: new Date()
  }
});
```

---

## Pre-Save Checklist

- [ ] Word count: 250-350 words
- [ ] 2 paragraphs with `<p>` tags
- [ ] Bold keywords: at least 1 per paragraph
- [ ] Movement link(s) included
- [ ] Museum links for where to see their work
- [ ] Artwork links if their works are in database
- [ ] No banned AI words or phrases (see CLAUDE.md)
- [ ] No sentences starting with "And"
- [ ] No em dashes
- [ ] Varied sentence lengths
- [ ] 5-6 FAQs with 25-40 words each
- [ ] Every FAQ has at least one interlink

---

## Example

**Artist**: vincent-van-gogh

**bioFull**:
```html
<p><a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter <strong>Vincent van Gogh</strong> (1853-1890) created nearly 2,100 artworks in just over a decade, despite selling only one painting during his lifetime. The Dutch artist developed his bold, expressive style while living in France, where swirling brushstrokes and vivid colors became his signature. His subjects ranged from sunflowers and starry nights to self-portraits and humble peasant life. Works like <a href="/apps/masterpieces/art/the-starry-night"><strong>The Starry Night</strong></a> and <a href="/apps/masterpieces/art/sunflowers"><strong>Sunflowers</strong></a> now rank among the most recognized images in Western art.</p>

<p>Van Gogh came to painting late, starting seriously at age 27 after failed careers in art dealing and ministry. His brother Theo provided crucial financial and emotional support throughout his artistic career. Time spent in Arles, southern France, proved intensely productive but also marked by mental health struggles, including the famous incident where he severed part of his ear. He died at 37, but his influence on <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a> and modern art proved immense. Today, the <a href="/apps/masterpieces/museum/van-gogh-museum-amsterdam"><strong>Van Gogh Museum</strong></a> in Amsterdam holds the world's largest collection of his work, while major pieces hang in the <a href="/apps/masterpieces/museum/museum-of-modern-art"><strong>Museum of Modern Art</strong></a> and <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>
```

**FAQs**:
```json
[
  {
    "question": "What art movement was Vincent van Gogh part of?",
    "answer": "Van Gogh was a key figure in <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>, a movement that emphasized bold colors and emotional expression over the naturalistic approach of earlier Impressionists."
  },
  {
    "question": "Where can I see Van Gogh's paintings?",
    "answer": "The largest collection is at the <a href=\"/museum/van-gogh-museum-amsterdam\"><strong>Van Gogh Museum</strong></a> in Amsterdam. Major works also hang at the <a href=\"/museum/museum-of-modern-art\"><strong>MoMA</strong></a> in New York and Paris's Musée d'Orsay."
  },
  {
    "question": "What are Van Gogh's most famous paintings?",
    "answer": "<a href=\"/art/the-starry-night\"><strong>The Starry Night</strong></a>, <a href=\"/art/sunflowers\"><strong>Sunflowers</strong></a>, and his many self-portraits are among his most celebrated works, known for swirling brushwork and vivid <a href=\"https://luxurywallart.com/collections/yellow-paintings\" target=\"_blank\" rel=\"noopener\"><strong>yellow</strong></a> and <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue</strong></a> tones."
  },
  {
    "question": "How many paintings did Van Gogh create?",
    "answer": "Van Gogh produced around 900 paintings and 1,100 drawings in just over a decade, an extraordinary output considering he only began painting seriously at age 27."
  },
  {
    "question": "Did Van Gogh sell any paintings while alive?",
    "answer": "Van Gogh sold only one painting during his lifetime, <strong>The Red Vineyard</strong>, for 400 francs. His brother Theo, an art dealer, supported him financially throughout his career."
  },
  {
    "question": "What techniques is Van Gogh known for?",
    "answer": "Van Gogh developed a distinctive style using thick, visible <strong>impasto brushstrokes</strong>, bold complementary colors, and expressive, swirling patterns that conveyed emotion and movement."
  }
]
```

Work systematically. Only write verified facts. Follow all formatting rules in CLAUDE.md.
