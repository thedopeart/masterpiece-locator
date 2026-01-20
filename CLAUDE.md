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
- Use `<p>` tags for paragraphs
- No `<br>` tags between paragraphs (CSS handles spacing)
- Vary sentence length dramatically

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
Use for color mentions. Only use these verified URLs:

```html
<a href="https://luxurywallart.com/collections/[slug]" target="_blank" rel="noopener"><strong>color name</strong></a>
```

**Verified Color Collection URLs:**
| Color | URL Slug |
|-------|----------|
| Gold | `/collections/gold-art` |
| Blue | `/collections/blue-wall-art` |
| Red | `/collections/red-wall-art` |
| Green | `/collections/green-wall-art` |
| Orange | `/collections/orange-art` |
| Pink | `/collections/pink-wall-art` |
| Yellow | `/collections/yellow-paintings` |
| Purple | `/collections/purple-paintings` |
| Brown | `/collections/brown-art` |
| Beige | `/collections/beige` |
| Navy Blue | `/collections/navy-blue` |
| Gray | `/collections/grey-art` |
| Black | `/collections/black-wall-art` |
| Black and Gold | `/collections/black-and-gold` |
| Black and White | `/collections/black-and-white-artwork` |
| Earth Tones | `/collections/earth-tones` |
| Colorful | `/collections/colorful-artwork` |
| Neutral | `/collections/neutral-art` |
| Red and Black | `/collections/red-and-black-art` |
| Green and Gold | `/collections/green-and-gold` |
| Purple and Gold | `/collections/purple-and-gold` |
| Rainbow | `/collections/rainbow-art` |

**DO NOT guess or create URLs. Only use URLs from this list.**

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
- What colors? → link LWA collection
- How big is it?
- When was it painted?
- Who painted it? → link artist
- What does it depict?

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
