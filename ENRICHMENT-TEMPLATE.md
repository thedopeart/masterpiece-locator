# Artwork Enrichment Template

Use this template when enriching artworks. Follow the format exactly.

---

## Example: Well-Enriched Artwork

**Slug:** `gerard-ter-borch-helena-van-der-schalcke-as-a-child`

### Description (HTML, 200-300 words)

```html
<p><a href="/apps/masterpieces/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this small portrait around 1648 when his subject, Helena van der Schalcke, was only two years old. The oil-on-panel work shows the child standing alone in what appears to be an entirely empty interior. No furniture, no decorative objects. Just Helena in her fine dress with a minimal separation between floor and wall.</p>

<p>Ter Borch often employed this <strong>neutral background</strong> approach in his portraits, stripping away context to focus entirely on his subjects. It's a technique that gives his work a timeless quality, unmarked by the fashions of any particular Dutch home. Helena would live only until 1671, dying at twenty-five, which adds an unavoidable poignancy to this early image of her.</p>

<p>The painting now hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, where it remains one of the most recognized examples of <strong>Dutch Golden Age</strong> child portraiture. Ter Borch's skill in rendering fabrics and capturing quiet dignity, even in someone so young, is on full display here.</p>
```

### FAQs (JSON, 3-5 questions, 40+ words each answer)

```json
[
  {
    "question": "Where can I see Helena van der Schalcke as a Child?",
    "answer": "This portrait is displayed at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, Netherlands. The museum holds an extensive collection of Dutch Golden Age paintings."
  },
  {
    "question": "When was this portrait painted?",
    "answer": "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> created this portrait around 1648 when Helena was approximately two years old. The oil-on-panel work captures her in a stark, empty interior."
  },
  {
    "question": "Who was Helena van der Schalcke?",
    "answer": "Helena van der Schalcke (1646-1671) was the young daughter of a Dutch family. She died at just twenty-five years old, making this early <strong>childhood portrait</strong> a rare record of her short life."
  }
]
```

---

## Requirements Checklist

### Description
- [ ] 200-300 words minimum
- [ ] 3 paragraphs typical
- [ ] First paragraph: artist link, basic facts (year, medium, subject)
- [ ] Second paragraph: historical context, significance, technique
- [ ] Third paragraph: current location with museum link, legacy
- [ ] Use `<strong>` for 2-3 key terms
- [ ] Natural, human voice (contractions, varied sentences)
- [ ] NO banned words (see CLAUDE.md)

### FAQs
- [ ] 3-5 questions minimum
- [ ] Each answer 40+ words
- [ ] First FAQ: "Where can I see [artwork]?" with museum link
- [ ] Include artist link in at least one answer
- [ ] Include at least one LWA collection link where relevant
- [ ] Questions should be what real visitors would ask

### Links Format
- Artist: `/apps/masterpieces/artist/[slug]`
- Museum: `/apps/masterpieces/museum/[slug]`
- LWA Collection: `https://luxurywallart.com/collections/[handle]`

### Common LWA Collections to Link
- `/collections/portrait-art` - Portraits
- `/collections/religious-art` - Religious subjects
- `/collections/landscape-art` - Landscapes
- `/collections/women-art` - Women subjects
- `/collections/classical-art` - Classical/mythological
- `/collections/abstract-art` - Abstract works

---

## Anti-Patterns (Don't Do This)

### Too Short
```
This painting by Vermeer shows a woman. It's in a museum.
```

### Too Generic
```
This masterpiece showcases the artist's exceptional talent and remarkable skill in creating a stunning visual experience.
```

### No Links
```
The painting hangs in the Louvre, one of the world's greatest museums.
```
Should be:
```
The painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris.
```

### Robotic FAQs
```
Q: What is this painting?
A: It is a painting.
```
