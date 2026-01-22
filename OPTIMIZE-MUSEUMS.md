# Museum Optimization Task

Write rich descriptions and FAQs for museums in the Masterpiece Locator database.

## Workflow

1. Read `CLAUDE.md` for link formats and banned words
2. Check `MUSEUM-CHECKLIST.md` for TODO items
3. Pick 10 museums from Tier 1 first (most artworks = highest priority)
4. Research each via Wikipedia/WebFetch
5. Write/enhance description and FAQs following guidelines below
6. Update database with Prisma
7. Run `node get-museums.js` to refresh checklist

---

## Description Requirements

### Length
- **200-300 words** (2 paragraphs)
- Enhance existing description if present, don't replace unless poor quality

### Structure
```html
<p>Paragraph 1: When founded, what it was originally (palace, private collection, etc.). What it specializes in, collection size, notable holdings. Its significance in the art world.</p>

<p>Paragraph 2: Building history and architecture if notable. Major collections or wings. Famous works visitors can see with [Artwork links]. Which [Artist links] are well represented. Visitor info if interesting (free entry, famous views, etc.).</p>
```

### What to Include
- Founding date and original purpose
- Collection focus and specialization
- Notable artists represented (with links)
- Famous artworks in the collection (with links)
- Building history if interesting
- Size and visitor numbers if impressive
- Any unique features (free entry, famous architecture, etc.)

### Interlinking
- **Artist links**: `<a href="/apps/masterpieces/artist/artist-slug"><strong>Artist Name</strong></a>`
- **Artwork links**: `<a href="/apps/masterpieces/art/artwork-slug"><strong>Artwork Title</strong></a>`
- **Movement links**: `<a href="/apps/masterpieces/movement/movement-slug"><strong>Movement Name</strong></a>`
- **LuxuryWallArt**: Rarely. 0-1 per museum, only if extremely natural fit
- **Bold keywords**: At least 1 per paragraph

---

## FAQ Requirements

### Count
- **5-6 FAQs per museum**

### Answer Length
- **35-50 words each**
- Every answer must have **at least 1 interlink** (artist, artwork, or movement)
- Target **3-4 internal links** across all FAQs
- **LWA links: 0-1 per museum** (only if truly natural fit, most museums need none)

### Common FAQ Topics
1. When was it founded? / What's the history? → context about origins
2. What are the highlights? → link notable artworks in database
3. Which artists are featured? → link artists in database
4. Where is it located? / How do I visit? → practical info
5. What style/period does it specialize in? → link movements
6. What's unique about this museum? → architecture, free entry, views, etc.

### FAQ Format
```json
{
  "question": "What famous paintings can I see at [Museum]?",
  "answer": "The museum holds <a href=\"/art/artwork-slug\"><strong>Artwork Title</strong></a> by <a href=\"/artist/artist-slug\"><strong>Artist Name</strong></a>, along with other masterpieces from the <a href=\"/movement/movement-slug\"><strong>Movement</strong></a> period."
}
```

---

## Database Update

```javascript
await prisma.museum.update({
  where: { slug: 'museum-slug' },
  data: {
    description: `Enhanced description here...`,
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

- [ ] Description: 200-300 words
- [ ] 2 paragraphs with appropriate flow
- [ ] Bold keywords: at least 1 per paragraph
- [ ] Artist links for major artists at museum
- [ ] Artwork links if famous works are in database
- [ ] Movement links where relevant
- [ ] No banned AI words or phrases (see CLAUDE.md)
- [ ] No sentences starting with "And"
- [ ] No em dashes
- [ ] Varied sentence lengths
- [ ] 5-6 FAQs with 35-50 words each
- [ ] Every FAQ has at least one internal link (artist/artwork/movement)
- [ ] 3-4 internal links total across all FAQs
- [ ] LWA links: 0-1 max (only if truly natural)

---

## Example

**Museum**: louvre-museum

**description**:
```
The Louvre opened as a public museum in 1793, housed in a former royal palace that dates back to the 12th century. Today it ranks as the world's largest and most visited art museum, with over 380,000 objects spanning 9,000 years of history. The collection excels in Italian Renaissance painting, ancient Egyptian artifacts, and French decorative arts.

Beyond the famous glass pyramid entrance, visitors encounter works by Leonardo da Vinci, Vermeer, and Delacroix spread across three wings. The Mona Lisa draws enormous crowds, but the museum rewards those who venture further with Greek antiquities like the Venus de Milo and Winged Victory of Samothrace. French kings amassed much of the collection, with Napoleon adding significantly through conquest. Entry is free for visitors under 26 from EU countries and for everyone on the first Saturday evening of each month.
```

**FAQs**:
```json
[
  {
    "question": "When was the Louvre founded?",
    "answer": "The Louvre opened to the public in <strong>1793</strong> during the French Revolution, though the building itself served as a royal palace since the 12th century. French kings had been collecting art there for centuries before it became a museum."
  },
  {
    "question": "What famous paintings are at the Louvre?",
    "answer": "The Louvre houses <a href=\"/art/mona-lisa\"><strong>Mona Lisa</strong></a> by <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>, along with Vermeer's <strong>The Lacemaker</strong> and Delacroix's <strong>Liberty Leading the People</strong> among thousands of masterworks."
  },
  {
    "question": "Which artists are best represented at the Louvre?",
    "answer": "Italian <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> masters dominate, including <a href=\"/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>, Raphael, and Caravaggio. French painters like Delacroix and Poussin also feature prominently throughout the galleries."
  },
  {
    "question": "How big is the Louvre Museum?",
    "answer": "The Louvre spans <strong>72,735 square meters</strong> of gallery space across three wings, making it the world's largest art museum. The full collection includes over 380,000 objects, though only about 35,000 are on display at any time."
  },
  {
    "question": "Is the Louvre free to visit?",
    "answer": "Entry is free for visitors under 26 from EU countries and for everyone on the <strong>first Saturday evening</strong> of each month. Regular admission costs around €17. The museum closes on Tuesdays."
  },
  {
    "question": "What style of art does the Louvre specialize in?",
    "answer": "The Louvre excels in <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> paintings, ancient Egyptian artifacts, Greek sculptures, and French decorative arts. The collection spans from ancient Mesopotamia to mid-19th century European art."
  }
]

Note: This example has zero LWA links, which is appropriate for most museums. Only add an LWA link if a museum specializes in something with an obvious collection match (e.g., a museum of abstract art → abstract collection).
```

Work systematically. Only write verified facts. Follow all formatting rules in CLAUDE.md.
