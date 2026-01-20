# Masterpiece Locator - Content Guidelines

## Project Overview
Art discovery app with artwork pages featuring descriptions and FAQs. Content interlinks to internal pages (artists, museums, movements) and external LuxuryWallArt.com collections.

---

## Artwork Descriptions

### Length
- **130-150 words** for paintings with limited context
- **Up to 350 words** only if there's genuinely interesting, true content
- Never pad text just because a painting is famous

### Structure
- Use `<p>` tags for paragraphs (typically 2-3 paragraphs)
- No `<br>` tags between paragraphs (CSS handles spacing)
- Vary sentence length dramatically

### Typical Paragraph Flow
1. **Opening paragraph**: Artist link, date, what the painting depicts visually
2. **Middle paragraph**: Historical context, technique, interesting facts, controversies
3. **Closing paragraph**: Artist bio context, current museum location with link

### What to Include (when true and interesting)
- What the painting actually shows (describe the scene)
- When and where it was created
- Historical context or story behind it
- Interesting facts (scandals, thefts, X-ray discoveries, controversies)
- Technical approach (technique, medium, series context)
- Artist's life context relevant to the work
- Current location and how it got there

### What NOT to Do
- Don't pad with generic art appreciation language
- Don't repeat information already in the metadata (title, year shown on page)
- Don't invent facts - only write what you actually know
- Don't write longer just because a painting is famous

### Bold Keywords
- Minimum **1 bold keyword per 100 words**
- Bold text is black unless inside a link
- Use `<strong>` tags

---

## Interlinking

### Internal Links (display in green #028161)
```html
<a href="/artist/artist-slug"><strong>Artist Name</strong></a>
<a href="/movement/movement-slug"><strong>Movement Name</strong></a>
```

### Museum Links (display in gold #C9A84C)
```html
<a href="/museum/museum-slug"><strong>Museum Name</strong></a>
```

### LuxuryWallArt Links (display in gold #C9A84C)
Link to collections for colors, subjects, styles, rooms. Great opportunity when mentioning colors in descriptions.

```html
<a href="https://luxurywallart.com/collections/[slug]" target="_blank" rel="noopener"><strong>text</strong></a>
```

**ONLY use verified URLs from:**
`/Users/thedopeart/Desktop/luxury-wall-art/Interlinking/Collections Links.csv`

150+ collections available. DO NOT guess URLs - always verify in the CSV first.

---

## FAQs

### Requirements
- **2-5 FAQs per artwork** (more for famous paintings)
- **25-40 words per answer**
- Every FAQ answer must have at least one interlink
- Bold key terms

### Common FAQ Topics
- Where can I see [painting]? → link museum
- What style/movement? → link movement
- What colors? → link LWA collection if natural fit
- How big is it? (include both metric and imperial)
- When was it painted?
- Who painted it? → link artist
- What does it depict/mean?
- Why is it famous? (for well-known works)
- Interesting facts (theft, scandal, hidden details)

### FAQ Answer Structure
1. Direct answer first
2. Add supporting detail or context
3. Weave in link naturally

**Example:**
```
Q: Where can I see The Tempest?
A: You can view this painting at <a href="/museum/..."><strong>Gallerie dell'Accademia</strong></a> in Venice, Italy. The museum preserves Venetian art spanning five centuries, and The Tempest remains one of its most mysterious treasures.
```

### Link Placement Patterns
- **Artist link**: Usually in first paragraph, first mention of artist name
- **Movement link**: When discussing style or art historical context
- **Museum link**: In description's final paragraph OR in "where to see" FAQ
- **LWA collection link**: When naturally mentioning colors (don't force it)

---

## Writing Style

### Grammar Rules
- Never start sentences with "And"
- Never use em dashes (use commas, periods, parentheses)
- Use contractions: "don't" not "do not"

### Filler Patterns - AVOID
- "The painting is..."
- "This masterpiece..."
- "There is a [quality] to..."
- "What makes X [adjective] isn't... but..."
- "It's important to note..."
- "This approach was typical of..."
- "The [adjective] masterpiece has..."

### Banned Words
| Category | Words |
|----------|-------|
| Superlatives | exceptional, unparalleled, revolutionary, remarkable, transformative, groundbreaking |
| Adjectives | captivating, exquisite, stunning, compelling, intriguing, intricate, comprehensive, pivotal |
| AI favorites | tapestry, meticulous, testament, endeavors, realm, myriad, paramount, bespoke, curated, masterpiece, enigmatic |
| Transitions | furthermore, moreover, additionally, consequently, thus, hence |
| Verbs | unleash, unlock, empower, embark, delve, foster, navigate, harness, elevate |

### Banned Phrases
- "Whether you're..."
- "In today's world..."
- "At its core..."
- "Not only... but also..."
- "Embark on a journey..."
- "A tapestry of..."
- "Transform your space"
- "Make a statement"

### Structure Red Flags
- Three adjectives in a row
- Uniform sentence length
- Starting paragraphs with transitional adverbs
- Perfectly balanced lists

---

## Database

### Schema
```prisma
model Artwork {
  description  String?   // HTML with <p> tags and links
  faqs         Json?     // Array of {question: string, answer: string}
}
```

### Updating Artworks
```javascript
await prisma.artwork.update({
  where: { slug: 'artwork-slug' },
  data: {
    description: `<p>...</p><p>...</p>`,
    faqs: [
      { question: "...", answer: "..." },
      { question: "...", answer: "..." }
    ],
    updatedAt: new Date()
  }
});
```

---

## Pre-Save Checklist

- [ ] Word count: 130-350 based on available true content
- [ ] Bold keywords: at least 1 per 100 words
- [ ] FAQ answers: 25-40 words each with interlinking
- [ ] No banned AI words or phrases
- [ ] No filler text patterns
- [ ] No sentences starting with "And"
- [ ] No em dashes
- [ ] Varied sentence lengths
- [ ] All LWA URLs from verified list above
- [ ] Artist, movement, museum links included naturally
