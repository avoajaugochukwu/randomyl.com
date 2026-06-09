---
name: media-and-images
description: Featured-image rules, alt-text craft, captions, file naming, social-card dimensions, Markdown image embeds, inline image placement, and licensing for randomyl.com. Images set the tone and clarity of a tools/topical post — a clean tool screenshot or a labelled QR diagram signals care and actually teaches before a reader reads a word. One featured image per post for the header and index card, plus inline images embedded as Markdown, with descriptive alt text (carried by the `![alt]`), sized so nothing shifts. Covers the discipline of media that signals quality to readers, helps accessibility, and feeds the SEO signals Google rewards.
---

# Media & Images — the visual layer

> Images on a randomyl post serve four audiences at once: the skimming reader (visual rhythm and a place to rest the eye), the person mid-task (a screenshot or diagram that shows exactly what to do), the accessibility user (alt text), and Google's crawler (alt text + filename). The same image either serves all four or fails all four. On randomyl the house style is **clean, clear, on-theme**: a sharp tool screenshot, a labelled QR/phone diagram, a calm faith or privacy visual — nothing busy or cliché. Every post ships with one **featured image** for the header and index card; longer how-tos and collections use a few **inline images** (screenshots, diagrams, on-theme photos) to break the body and reinforce the point.

---

## How images actually get into a post (the Markdown pipeline)

Posts are Markdown files at `content/blog/<slug>.md`. Images are referenced with standard Markdown and the files live in `public/blog/`:

```markdown
![A QR code printed on a café menu, scanned by a phone camera](/blog/custom-qr-code-generator-guide-content-1.webp)
```

You **place the image files in `public/blog/` yourself** and reference them by path. There is no migrate script and no Notion download step. The mechanical contract:

- The **featured image** defaults to `public/blog/<slug>.webp` (override via the frontmatter `featuredImage` key). The route renders it above the body and the index card uses it as the thumbnail.
- **Inline (body) images** are referenced as `![alt](/blog/<slug>-content-N.webp)`, where `N` is `1, 2, 3…` in the order they appear. You name and drop these files yourself.
- **Export to WebP at a sensible size before committing** — there is no automated `sharp` step. Aim for **≤ ~1200px on the long edge, WebP quality ~80**, landscape-ish. This is now your responsibility, not a script's.

`components/MarkdownRenderer.tsx` renders each Markdown image with **`next/image`** (at 800×500). The **alt text comes from the `![alt]` text** in the Markdown. Keep the alt descriptive and accurate. `components/BlogPostCard.tsx` renders the index-card thumbnail from the frontmatter `featuredImage` (defaulting to `/blog/<slug>.webp`).

---

## The featured image

Every post ships with one featured image. It defaults to `public/blog/<slug>.webp`; set the frontmatter `featuredImage` key only to override:

```
public/blog/<slug>.webp   →   frontmatter: featuredImage: "/blog/<slug>.webp"
```

It is used for the **post header** (rendered above the body) and the **index-page card thumbnail** (`BlogPostCard.tsx`). It also feeds the `BlogPosting` JSON-LD `image` field, which ships automatically — so the image itself has to carry the meaning at a glance.

> Note on social cards: `generateMetadata` emits OpenGraph and Twitter tags from the frontmatter, and the `BlogPosting` schema's `image` is the featured image. Confirm the per-post `og:image` resolves to the featured image in your build before assuming every share uses the post's own picture; if a share falls back to a site default, treat per-post `og:image` wiring as a small fix, not a guarantee.

### Featured image rules

- **Source quality first.** Provide a clean source at least ~1200px on the long edge before you down-export, so the WebP has real pixels to work with. A small, soft, or upscaled source stays soft.
- **Aspect ratio: aim landscape, roughly 3:2 / 16:10.** The index card renders inside a fixed landscape frame and `next/image` renders at 800×500. A landscape source crops predictably; a tall portrait source gets center-cropped on the card and can lose its subject.
- **Format/size: WebP at ~q80, ≤ ~1200px long edge.** Since there's no automated resize step, export it yourself before committing.
- **On-theme, clear imagery > generic stock.** A sharp screenshot of the actual tool, a labelled diagram, or a clean on-theme photo beats a generic "person at a laptop" shot. Stock clichés signal "any blog could have written this."
- **Recognizable subject at a glance.** Even as a small thumbnail the featured image should read the topic: a QR code on a flyer for a QR guide, a phone keypad / formatted number for a phone-format post, an open Bible in soft light for a scripture post, a lock/shield motif for a privacy post.

### What good randomyl imagery looks like

The image sets the topic and tone before the words do. Match the visual to the cluster:

- **QR codes** — a clean QR code in real use (on a menu, flyer, business card), a phone camera scanning one, or a simple labelled diagram of the parts (quiet zone, finder patterns, error-correction). Screenshots of the generator are ideal for how-tos.
- **Phone numbers** — a tidy diagram or screenshot showing format structure (E.164 vs NANP), a phone keypad, a "test data" / QA context. Use reserved/`555-01xx`-style example numbers in any visible text.
- **Bible / Christian** — an open Bible in soft natural light, a quiet sanctuary, hands holding a book; reverent and gentle. Keep any on-image verse text accurate and translation-named (better to keep verses in the body).
- **Online privacy / data** — a clean lock or shield motif, a privacy-settings screen, a calm "your data is yours" visual; clear and reassuring, not fear-mongering.
- **Words / games / brainstorming** — a clean word-prompt or notebook scene, dice/cards for games, a simple brainstorming visual.
- **Screenshots and diagrams** — the tools niche benefits hugely from these. A step screenshot or a labelled diagram often teaches better than any prose; prefer them over decorative stock for how-tos.

### Avoid

- **Cliché stock.** The "businessman jumping," the over-bright fake laughter, the lone "person at a desk." These are the strongest signals of low-effort content.
- **Unreadable text-on-image.** Don't bake the load-bearing instruction, code, or verse into the picture — keep real, indexable text (steps, snippets, verses) in the post body and let the image show the *result* or *context*.
- **Fake or misleading visuals.** No doctored screenshots, no QR codes that don't actually encode what the caption claims, no example phone numbers that aren't from a reserved range, no scripture text that's misquoted on the image.

### When the post has no obvious image

Some topics resist a literal picture. Fallbacks that stay on-brand:

- A clean labelled **diagram** of the concept (a QR code's parts, a phone-number format breakdown).
- A tasteful **screenshot** of the tool or a relevant interface.
- A calm, on-theme photo or simple graphic that carries the topic without a literal subject (soft light + open book for faith, a lock motif for privacy).

Never use a generic "person at a desk" or stock-smile image as a filler.

---

## Alt text craft (it lives in the `![alt]`)

On randomyl the alt text **is the `![alt]` text** in the Markdown image — `![this is the alt](/blog/...webp)`. There is no separate alt field and no caption-derived alt. So **write real, descriptive alt text on every meaningful image**. It should describe the image faithfully for someone who can't see it, as descriptive, keyword-aware prose.

Because alt text is read by screen readers and parsed by search, write it to describe the image honestly — and on a tools site, that often means naming *what the image teaches* (the step, the format, the result).

### Rules

- **Describe the image, not the post.** The alt is for someone who can't see the picture, not a place to keyword-stuff.
- **Keep it tight, ~125 characters or so.** Screen readers read better short; aim for one clear sentence.
- **Sentence-case prose, not phrase fragments.** "A QR code on a café menu being scanned by a phone camera" beats "qr code generator free best scan".
- **Target the query naturally if relevant** — don't force it. If the image actually shows the topic, the honest description already carries the keyword.
- **No "image of," "picture of," "photo of"** — the renderer wraps it in a `<figure>` and screen readers already announce it's an image.
- **Describe screenshots and diagrams usefully** — "The QR generator with the error-correction setting set to High" tells a non-sighted reader what step the image illustrates.

### Examples

| Image | Good alt | Bad alt |
|---|---|---|
| Featured for a QR generator guide | "A QR code printed on a flyer being scanned by a phone camera." | "qr code generator free best scan online" |
| Inline in a phone-format explainer | "A diagram breaking a number into country code, area code, and subscriber digits." | "phone number format random generator" |
| Inline in a Bible / scripture post | "An open Bible on a wooden table with soft light across the pages." | "bible verses anxiety scripture faith" |
| Inline in a privacy post | "A padlock icon over a browser privacy-settings panel." | "data privacy tools protect identity online" |

### Keep each alt distinct

If a post has several inline images, give each its **own** alt text describing that specific image. Don't paste the same line under every picture — repeated identical alt text is noise to a screen reader and a wasted signal to search.

---

## Captions (optional, via the renderer)

The primary text-for-images job is the `![alt]`. If the renderer also surfaces a visible caption, treat it as a chance to add context — but the alt is the load-bearing accessibility text, so never skip the alt in favor of a caption.

### When to add context

- **Always write good alt** — that's non-negotiable on every meaningful image.
- **Always credit sourced or licensed images** — name the source/attribution the license requires (in the alt, or a caption if the renderer shows one).
- **Add teaching value where you can** — a screenshot or diagram benefits from a short line tying it to the step or concept it illustrates.

### Format

- Sentence-case prose, a complete sentence preferred.
- Keep it short (~125 chars for alt; a caption can be a touch longer).
- Include source/attribution where the license requires it.

### Examples

> A QR code on a café menu being scanned by a phone camera.

> A diagram breaking a phone number into country code, area code, and subscriber digits.

> Photo by [name] on Unsplash, used here for an open-Bible scene.

---

## File naming (you do it by hand)

Unlike a Notion pipeline, **you name and place the image files yourself** from the slug. The convention:

- **Featured:** `public/blog/<slug>.webp` → frontmatter `featuredImage: "/blog/<slug>.webp"` (default; the key is optional if you use the default path).
- **Inline (body) images:** `public/blog/<slug>-content-N.webp`, where `N` is `1, 2, 3…` in the order the images appear in the body. The first inline image is `-content-1.webp`, the second `-content-2.webp`, and so on.
- **Format should be `.webp`** — export to WebP (~q80, ≤ ~1200px long edge) before committing.

Example for a QR guide (slug `custom-qr-code-generator-guide`):

```
public/blog/custom-qr-code-generator-guide.webp             (featured)
public/blog/custom-qr-code-generator-guide-content-1.webp   (first inline image)
public/blog/custom-qr-code-generator-guide-content-2.webp   (second inline image)
public/blog/custom-qr-code-generator-guide-content-3.webp   (third, etc.)
```

To re-order or replace an inline image, change the **Markdown `![alt](...)` references** and the files in `public/blog/` to match — keep the `-content-N` numbering aligned with the order the images appear in the body.

---

## Embedding images in the body (Markdown image syntax)

In the body, images are **standard Markdown** — `![alt](/blog/<slug>-content-N.webp)`. After rendering, `MarkdownRenderer.tsx` turns each into a `next/image` inside a `<figure>`, using the local path and the alt text.

### Rules

- **Embed images with Markdown** `![descriptive alt](/blog/<slug>-content-N.webp)`, placed where you want them in the flow. There's no Notion block and no `<Image>` JSX to call.
- **Always write descriptive alt** in the `![ ]` — it's the accessibility text and a real search signal. Apply the full alt discipline above (descriptive, ~125 chars, no keyword stuffing, no "image of").
- **Local paths only.** Reference `/blog/<slug>-content-N.webp` from `public/blog/`. Don't hotlink remote URLs — host the file in the repo.
- **Don't re-embed the featured image in the body.** The route already renders it in the header; a duplicate in the body is redundant.
- **Raw HTML/`<img>` won't render** — react-markdown has no `rehype-raw`. Use Markdown `![ ]` for images, not an HTML tag.

---

## Aesthetic: clean and clear

The visual brand is clean, clear, and on-theme. Images should teach or set tone, not clutter:

- **Sharp over soft.** Favor crisp screenshots, well-labelled diagrams, and uncluttered photos. Avoid busy collages, blurry crops, and noise.
- **On-theme over generic.** The image should reinforce the post's specific topic (a real QR code for a QR guide, a format diagram for a phone post, an open Bible for scripture) rather than a generic "tech" or "positive" stock shot.
- **Restraint and clarity.** A single, clear subject reads better than a crowded frame — especially as a small index-card thumbnail.
- **Light and dark themes.** The site supports a dark theme. Choose images that survive the toggle; very bright, pure-white screenshots can look harsh in dark mode — a neutral or framed background sits comfortably in both.

---

## Image density by archetype

How many images a post needs. randomyl is **content-forward** — the steps, tables, snippets, and verses are the payload — so images teach a step or set tone and break the body. One strong featured image plus a few well-placed inline images (screenshots/diagrams for how-tos) is usually plenty.

| Content type | Featured | Body images | Notes |
|---|---|---|---|
| 🛠️ Tool guide / how-to | 1 | 1–3 | Step screenshots or a labelled diagram where they genuinely clarify the task |
| 🔍 Explainer / "what is" | 1 | 0–2 | A single clear diagram where it clarifies the concept (e.g. a format breakdown) |
| 📋 Listicle / curated collection | 1 | 1 every ~600–1,000 words, or one per major section | Inline images break a long list and reset the eye between groups |
| ⚖️ Decision / comparison / legality | 1 | 0–2 | A comparison is often better as a table; an image only where it adds clarity |
| 🙏 Faith / scripture article | 1 | 1–2 | Soft light / open-Bible imagery to reinforce reverence; keep verse text in the body |

### Don't pad, don't skimp

Don't stuff a short explainer with stock filler just to hit a number — one clean featured image can be the whole visual payload. Conversely, a long how-to that's a wall of text benefits from a couple of step screenshots or a diagram to show, not just tell.

---

## Image licensing

Every image on the site needs a clear license source. Options:

### Tier 1 — Owned by the site
- Original screenshots of randomyl's own tools, original diagrams, or photography created for randomyl
- Images the author/site holds full rights to

**No license file needed; the site owns the image.**

### Tier 2 — Licensed
- Stock from a paid source (Adobe Stock, Shutterstock, etc.)
- Commissioned work with a usage license
- Public domain (clearly marked)

**Keep license proof in `/private/licenses/<image-slug>.txt` (out of the public repo if confidentiality matters).**

### Tier 3 — Free with attribution
- Unsplash / Pexels photos (free; attribution recommended)
- Wikimedia Commons (varies by image)
- Public-domain reference imagery

**Include attribution per the license's requirements** — in the alt text or a visible caption where the license needs it, kept short.

### Tier 4 — Don't ship
- Any image found via image search with no clear license
- Screenshots of copyrighted material (other companies' apps/sites) beyond fair use
- Trademarked/branded imagery used in a way that implies endorsement
- AI-generated images from a service whose ToS doesn't allow commercial use

**Don't ship.**

---

## AI-generated images

A nuanced area. Many sites use Midjourney, DALL·E, or Stable Diffusion for clean, on-theme illustrations or background graphics. For a tools/topical blog, AI imagery is reasonable for *non-load-bearing* tone or background graphics — but **never** for anything that has to be factually exact.

### Rules

- Check the generator's terms of service for commercial use.
- **Never fake a tool screenshot or a diagram with AI.** Screenshots and diagrams are load-bearing instruction — they must reflect the real tool/format. Generate the real screenshot; draw the real diagram.
- Disclose AI generation in the alt/caption when material — e.g. "Illustration generated with an AI tool."
- **Never use AI-generated images of real people** (consent and likeness issues).
- For YMYL trust (phone/privacy/legality, faith), don't use AI to fabricate anything that reads as evidence (fake "proof," fake people, fake scenes presented as real).
- Quality bar: if the image has the AI "tells" (extra fingers, melted edges, garbled text — especially garbled QR codes or numbers), don't ship it.

---

## Featured image and social sharing

The featured image is the post header, the index-card thumbnail, and the `BlogPosting` schema `image`. `generateMetadata` emits OpenGraph/Twitter tags from the frontmatter.

- Make the **header / index thumbnail** work: recognizable, clear, on-theme at small sizes.
- Provide a good landscape source so the card crop stays centered on the subject.
- **Verify the share image:** confirm the per-post `og:image` resolves to `featuredImage` in your build. If a share falls back to a site default, wiring per-post `og:image` from `featuredImage` is a small fix — don't author copy that *assumes* the featured image is always the social card until you've confirmed it.

---

## Decorative graphics, icons, dividers

A clean blog doesn't need extra decorative clutter. Sections are separated by `##` headings and the rhythm of the real images, screenshots, and tables — not by horizontal-rule graphics or fancy dividers. A plain Markdown `---` (rendered `<hr>`) is available where a visual break genuinely helps. Don't add competing decoration inside the post body.

---

## Image performance

Images are usually the largest assets on a page. Since there's no automated resize step, performance is fully in your hands:

- **Export to WebP at ~q80, ≤ ~1200px long edge** before committing — don't drop a 6000px camera original or a multi-MB PNG into `public/blog/`.
- **Don't over-image.** A content-forward post rarely needs more than a handful of inline images; each one is bytes the reader downloads.
- **Prefer simple, clean compositions** — sharp screenshots and flat diagrams compress smaller in WebP than busy, high-detail photos.
- **Size and format are your job here.** Unlike a pipeline with a `sharp` step, nothing standardizes your exports — get format, dimensions, and quality right before you commit, and let `next/image` handle responsive delivery.

---

## Pre-publish media checklist

- [ ] Featured image present at `public/blog/<slug>.webp` (or `featuredImage` frontmatter set to override)
- [ ] Featured source is landscape-ish (~3:2 / 16:10) and at least ~1200px on the long edge
- [ ] Featured image is clean, clear, and on-theme — not cliché stock, not load-bearing text-on-image
- [ ] Featured image reads well at thumbnail size and on both light and dark themes
- [ ] Every inline image is Markdown `![alt](/blog/<slug>-content-N.webp)` (no HTML `<img>`, hosted in `public/blog/`)
- [ ] Every meaningful image has descriptive, keyword-aware **alt text** in the `![ ]`
- [ ] Screenshots/diagrams reflect the real tool/format — no faked or AI-fabricated instructional images
- [ ] Each inline image's alt is distinct — no copy-pasted identical alt text
- [ ] No alt is keyword-stuffed; none start with "image of / picture of / photo of"
- [ ] Featured image is not also re-embedded in the body
- [ ] License source clear for every image; attribution where required
- [ ] No AI-generated images of real people; AI disclosed when material; no AI on instructional screenshots/diagrams
- [ ] Images exported to WebP (~q80, ≤ ~1200px long edge) before committing — no oversized originals
- [ ] Verify the per-post `og:image` resolves to `featuredImage` (wire it if it falls back to a site default)

---

**BlogOS** — images that earn their bytes.
