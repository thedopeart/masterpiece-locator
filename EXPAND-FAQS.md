# Artist FAQ Expansion Task

Expand existing artist FAQs to be more detailed, SEO-optimized, and interlinked.

## Rules
- Read `CLAUDE.md` for link formats and banned words
- Research each artist via Wikipedia if needed for accurate details
- **35-60 words per FAQ answer** (current ones are too short)
- **3-4 interlinks total across all 5-6 FAQs** (not every answer needs a link, but spread them naturally)
- Keep the existing questions, just expand the answers
- Add specific dates, names, locations, and context

## Link Types to Include
- **Movement**: `/apps/masterpieces/movement/movement-slug`
- **Museum**: `/apps/masterpieces/museum/museum-slug`
- **Artwork**: `/apps/masterpieces/art/artwork-slug`
- **Artist**: `/apps/masterpieces/artist/artist-slug`
- **LuxuryWallArt collections**: `https://luxurywallart.com/collections/slug`

## FAQ Answer Formula
Each answer should include:
1. **Direct answer** to the question
2. **Specific detail** (date, name, place)
3. **Context or significance**
4. **Link when natural** (aim for 3-4 links spread across all FAQs)

## Example Expansion

**Before (22 words):**
```
Q: What art movement was Frida Kahlo part of?
A: Kahlo is often associated with <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealism</strong></a>, though she rejected the label. Her work also connects to Mexican folk art.
```

**After (52 words):**
```
Q: What art movement was Frida Kahlo part of?
A: André Breton declared Kahlo a <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> in 1938, though she insisted "I never painted dreams, I painted my own reality." Her deeply personal <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-portraits</strong></a> blend Mexican folk traditions, Catholic imagery, and unflinching depictions of physical and emotional pain that influenced <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>colorful contemporary art</strong></a>.
```

## Database Update

```javascript
await prisma.artist.update({
  where: { slug: 'artist-slug' },
  data: {
    faqs: [
      { question: "existing question", answer: "expanded 35-60 word answer with 2+ links" },
      // ... all FAQs
    ],
    updatedAt: new Date()
  }
});
```

## Workflow
1. For each artist slug, fetch their current FAQs from database
2. Research the artist if needed (Wikipedia)
3. Expand each FAQ answer to 35-60 words with 2+ interlinks
4. Update the database
5. Move to next artist
6. Run `node get-artists.js` when batch complete

## LuxuryWallArt Collection Opportunities

Link to relevant collections based on content:

- **Portraits/self-portraits** → `/collections/portrait-art`
- **Women subjects** → `/collections/women-art`
- **Landscapes** → `/collections/landscapes`
- **Religious themes** → `/collections/spiritual-art`
- **Bold colors** → `/collections/colorful-artwork`
- **Dark themes** → `/collections/macabre-art`
- **Nature scenes** → `/collections/nature-art`
- **Floral subjects** → `/collections/floral-art`
- **Abstract work** → `/collections/abstract-wall-art`
- **Specific colors** → `/collections/blue-wall-art`, `/collections/gold-art`, etc.

See CLAUDE.md for full collection list.

Work through each artist systematically. Quality over speed.
