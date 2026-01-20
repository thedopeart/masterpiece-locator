# Masterpiece Locator - Content Guidelines

## Artwork Descriptions

### Length
- **130-150 words** for paintings with limited context
- **Up to 350 words** only if there's genuinely interesting, true content to share
- Never pad text just because a painting is famous

### Structure
- Use `<p>` tags for paragraphs
- No `<br>` tags between paragraphs (CSS handles spacing)
- Vary sentence length dramatically (short punchy sentences mixed with longer ones)

### Bold Keywords
- Minimum **1 bold keyword per 100 words**
- Bold keywords should be black (not colored) unless inside a link
- Use `<strong>` tags

### Interlinking
All descriptions should include links where natural:

**Internal Links (green #028161):**
- Artists: `<a href="/artist/artist-slug"><strong>Artist Name</strong></a>`
- Movements: `<a href="/movement/movement-slug"><strong>Movement Name</strong></a>`

**External Links (gold #C9A84C):**
- Museums: `<a href="/museum/museum-slug"><strong>Museum Name</strong></a>`
- LuxuryWallArt: `<a href="https://luxurywallart.com/collections/collection-slug" target="_blank" rel="noopener"><strong>color/subject</strong></a>`

### LuxuryWallArt Collection URLs
**ONLY use confirmed URLs from `/Interlinking/Collections Links.csv`**

Common color collections:
- `/collections/gold-art`
- `/collections/blue-wall-art`
- `/collections/red-wall-art`
- `/collections/green-wall-art`
- `/collections/orange-art`
- `/collections/pink-wall-art`
- `/collections/yellow-paintings`
- `/collections/purple-paintings`
- `/collections/brown-art`
- `/collections/beige`
- `/collections/navy-blue`
- `/collections/grey-art`
- `/collections/black-and-gold`
- `/collections/black-and-white-artwork`
- `/collections/earth-tones`
- `/collections/colorful-artwork`
- `/collections/neutral-art`
- `/collections/red-and-black-art`

---

## FAQs

### Requirements
- **2-5 FAQs per artwork** (more for famous paintings)
- **25-40 words per answer**
- Every FAQ answer must have at least one interlink
- Use bold for key terms

### Common FAQ Topics
- Where can I see [painting]? (link to museum)
- What style/movement is this? (link to movement)
- What colors are in this painting? (link to LWA collection)
- How big is [painting]?
- When was it painted?
- Who painted it? (link to artist)
- What does it depict/mean?

---

## Writing Style

### Grammar Rules
- Never start sentences with "And"
- Never use em dashes (use commas, periods, or parentheses)
- Use contractions: "don't" not "do not", "isn't" not "is not"

### Filler Text to Avoid
Never use these patterns:
- "The painting is..."
- "This masterpiece..."
- "The [adjective] masterpiece has..."
- "There is a [quality] to..."
- "What makes X [adjective] isn't... but..."
- "It's important to note..."
- "This approach was typical of..."

### AI Words - BANNED
Never use these words:
- **Superlatives:** exceptional, unparalleled, revolutionary, remarkable, transformative, groundbreaking
- **Overused adjectives:** captivating, exquisite, stunning, compelling, intriguing, intricate, comprehensive, pivotal
- **AI favorites:** tapestry, meticulous, testament, endeavors, realm, myriad, paramount, bespoke, curated, masterpiece, enigmatic
- **Transitions:** furthermore, moreover, additionally, consequently, thus, hence
- **Action verbs:** unleash, unlock, empower, embark, delve, foster, navigate, harness, elevate

### AI Phrases - BANNED
- "Whether you're..."
- "In today's world..."
- "At its core..."
- "Not only... but also..."
- "Embark on a journey..."
- "A tapestry of..."
- "Transform your space"
- "Make a statement"

### Sentence Structure Red Flags
Avoid:
- Three adjectives in a row
- Uniform sentence length
- Starting paragraphs with transitional adverbs
- Perfectly balanced lists
- Formulaic introductions

### How to Sound Human
- Use contractions
- Vary sentence length dramatically
- Be direct and factual
- Let interesting facts speak for themselves
- Read it aloud - if it sounds robotic, rewrite it

---

## Technical Notes

### Database Schema
```prisma
model Artwork {
  description  String?   // HTML with <p> tags and links
  faqs         Json?     // Array of {question: string, answer: string}
}
```

### CSS Styling
Link colors are handled in `globals.css`:
- Artist/movement links: green (#028161)
- Museum/LWA links: gold (#C9A84C)
- Buttons with `inline-block` class are excluded from color override
- Bold text (`<strong>`) stays black unless inside a colored link
- Paragraphs get margin via `.prose p { margin-bottom: 1rem; }`

---

## Checklist Before Saving

- [ ] Word count appropriate (130-350 based on available content)
- [ ] At least 1 bold keyword per 100 words
- [ ] All FAQ answers 25-40 words with interlinking
- [ ] No banned AI words or phrases
- [ ] No filler text patterns
- [ ] No sentences starting with "And"
- [ ] No em dashes
- [ ] Varied sentence lengths
- [ ] All LWA collection URLs verified against interlinking file
- [ ] Links to artist, movement, museum included where natural
