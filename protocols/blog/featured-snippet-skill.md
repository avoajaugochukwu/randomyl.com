---
name: featured-snippet
description: Win position-zero. The 40-60 word direct-answer paragraph, definition snippets, list snippets, table snippets, and People Also Ask capture for randomyl.com's tool guides, explainers, curated lists, comparison/legality pieces, and faith/scripture articles. This skill teaches the writer to structure paragraphs, lists, and tables that Google's snippet bot can directly lift and display above the regular search results — using the full GitHub-Flavored Markdown this site's renderer supports.
---

# Featured Snippet — winning position zero

> Position zero is the box at the top of Google search results that lifts a paragraph, list, or table from a single page and shows it as the direct answer. Pages that win the snippet typically see a ~20-30% lift in click-through, plus voice-assistant inclusion. For a tools site this is high-leverage SEO — the reader who sees "a QR code generator turns a link into a scannable square in seconds" in the box still clicks through for the full walkthrough and then lands on the generator.

---

## What renders here (capabilities before tactics)

Posts are **Markdown files** — `content/blog/<slug>.md` with YAML frontmatter, rendered by `components/MarkdownRenderer.tsx` (`react-markdown` + `remark-gfm` + `rehype-highlight`). The body is **full GitHub-Flavored Markdown**, a major capability gain over the old Notion renderer. That shapes everything below:

- **The snippet "answer box" is a leading `>` blockquote.** Put the 40-60 word direct answer in a blockquote near the **top** of the body, right after the featured image. The renderer styles a blockquote as a left-border callout, so the answer reads as a deliberate AnswerBox *and* is the first prose Google sees. What's on the page *is* the source of truth.
- **Tables RENDER (remark-gfm).** Unlike the old Notion renderer, randomyl supports Markdown tables — so the **table snippet is a real play** for comparison and spec queries ("QR code vs barcode", "E.164 vs NANP", phone-format references). Use a tight 2-3 column table where the query wants a comparison.
- **Fenced code blocks render and are syntax-highlighted** (rehype-highlight) — valuable for QR-embed/format snippets, though code blocks aren't a snippet shape Google lifts.
- **No auto heading IDs.** Don't rely on `#anchor` fragments for snippet structure.
- **No H1 in the body.** The page H1 comes from the frontmatter **`title`**. Start body sections at `##`. The leading blockquote is the first prose after the title/hook — place the featured image above it.

So the three workable snippet shapes on this site are: **paragraph** (the leading blockquote), **list** (a bulleted/numbered list under a `##`), and **table** (a small GFM table under a `##`).

---

## The snippet shapes Google awards

| Snippet shape | What it looks like in SERP | Source on page | Trigger queries |
|---|---|---|---|
| **Paragraph** | 1-2 sentence answer in a card | The leading `>` blockquote (40-60 words) | "what is a random phone number generator", "how does a QR code work", "is it legal to use a fake number" |
| **List** | Numbered or bulleted list of 6-8 items | A `##` heading + a Markdown list | "how to scan a qr code", "qr code use cases", "bible verses about anxiety" |
| **Table** | A small 2-3 column table | A `##` heading + a GFM table | "qr code vs barcode", "phone number formats", "burial vs cremation" |
| **Video** | A YouTube thumbnail | A YouTube video, not a blog post | Out of scope for blog SEO |

---

## The paragraph snippet (most common, and the default here)

This is the default shape and the natural target for **explainer** queries ("what is a random phone number generator", "how does a QR code work"), **yes/no questions** ("is it legal to use a random phone number generator"), and any "what is X" search. Google lifts a single paragraph and shows it.

### Where the paragraph lives — the leading blockquote

Put the direct answer in a **`>` blockquote at the very top of the body**, before the first `##`. The renderer styles the blockquote as a left-border "answer box," so the answer reads as a deliberate callout *and* is the first prose Google sees. This is the site's AnswerBox equivalent — just a leading Markdown blockquote.

There is no H1 in the body (the H1 comes from the frontmatter `title`), so the blockquote really is the first prose after the title/hook (place the featured image above it).

### Anatomy of a winning paragraph snippet

- **40-60 words.** Under 40 looks incomplete in the card; over 60 gets truncated.
- **First sentence is the answer.** Pattern: `<Direct answer / one-line method / definition>.`
- **Sentences 2-3 add the non-obvious.** The mechanism, a believable qualification, or the next-most-relevant tip.
- **No "in this article" preamble.** Google strips the paragraph from context — it must stand alone.
- **Plain prose.** No links, no bold, no nested lists inside the answer. (It's a blockquote, which is fine — still a single liftable paragraph.)
- **Clear but honest.** Randomyl's plain, practical voice, but the claim has to be true — no over-promising, correct specs and formats, no legal absolutes, and any statistic/spec/scripture/legal claim verified per `accuracy-and-trust-skill.md`.

### Example (definition + method answer)

The frontmatter **`title`** is `Custom QR Code Generator: A Complete Guide`. Body opens with the featured image, then a blockquote:

```
> A QR code generator turns a link, text, or contact into a scannable square in seconds. Paste your URL, pick a size, download the PNG, and test it with your phone camera before you print. This guide walks through making one that actually scans, plus the three mistakes that break QR codes.
```

That blockquote is the snippet target. It's ~55 words, leads with the definition, names the method (paste, size, download, test), and adds the "test before print" qualifier. Any spec claim (size, error correction, scan behavior) must be verifiable per `accuracy-and-trust-skill.md` — no fabricated "98% of phones scan…" stats.

### Example (yes/no legality answer)

Frontmatter **`title`** `Is It Legal to Use a Random Phone Number Generator?`. Body opens:

```
> Yes, in most places it's legal to use a random phone number generator for testing, demos, and QA, since the numbers are generated patterns, not assigned lines. It becomes illegal when you use a number to defraud, spam, or harass someone. This is general information, not legal advice, so check your local rules.
```

Leads with the honest yes, names the safe uses, draws the illegal line, and carries the light "general information, not legal advice" note required on YMYL topics. Any legal framing must be hedged and cited per `accuracy-and-trust-skill.md` — never a flat legal absolute.

### Common paragraph-snippet patterns

**"What is X" (definition):**
> `<X> is <one-sentence definition>. <How it works / how you do it, with a short concrete step>. <What makes it work well — the spec, the format, the practical tip.>`

**"Is it legal / safe" (hedged yes/no):**
> `<Honest yes/no for the legitimate case>, because <the reason>. It crosses the line when <the misuse>. <The "general information, not legal advice" or safe-use caveat>.`

**"How does X work" (mechanism answer):**
> `<X> works by <the mechanism in one sentence>. <The next step or the key detail that makes it reliable>. <The practical "test it / check the format" tip>.`

---

## The list snippet

Google lifts a numbered or bulleted list. This is the core shape for **how-to steps and curated collections** — "how to scan a QR code", "QR code use cases", "Bible verses about anxiety" — where the searcher wants a usable sequence or set. Markdown list blocks render cleanly, so this shape is fully available and is the workhorse for tool guides and listicles.

### Anatomy of a winning list snippet

- **6-8 items.** Fewer looks thin; more gets truncated.
- **List title is a `##` phrased as the query.**
- **Each item is short** — under ~12 words for parallel lists; a tight step for how-to lists. One idea per line.
- **Parallel grammar** — steps all start with a verb ("Open…", "Point…", "Tap…"); entries all framed the same way.
- **No deep formatting inside items** — Google's snippet view drops nested lists, links, and most bold. Keep each item short plain text.
- **Accurate and reproducible** — every step must actually work, every verse quoted exactly with its translation, every format valid (see `content-craft-skill.md`).

### Example (how-to list snippet target)

```
## How to scan a QR code on a phone

1. Open your phone's camera app.
2. Point the camera at the QR code so it fills the frame.
3. Hold steady until a link or banner appears.
4. Tap the notification to open the link.
5. If nothing appears, enable QR scanning in camera settings.
6. On older phones, use a free QR scanner app instead.
```

Each item is short, parallel, verb-first, and a real reproducible step — a liftable, correct sequence. Verify each step works on current iOS/Android per `accuracy-and-trust-skill.md`.

### Example (curated-list snippet target)

```
## Bible verses about anxiety

- Philippians 4:6-7 — do not be anxious about anything (NIV).
- 1 Peter 5:7 — cast all your anxiety on him (NIV).
- Matthew 6:34 — do not worry about tomorrow (NIV).
- Psalm 94:19 — your consolation brought me joy (NIV).
- Isaiah 41:10 — do not fear, for I am with you (NIV).
- John 14:27 — peace I leave with you (NIV).
```

Each item names the reference and translation. In the full body the verse is quoted **verbatim**; the list-snippet line stays short. Confirm every reference and wording against a reputable Bible source per `accuracy-and-trust-skill.md`.

### List snippet pitfalls

- **Items too long.** If each item is a paragraph of commentary it won't get pulled. Keep the step/entry tight; save commentary for prose between items.
- **Inconsistent grammar.** Mixed verb-first steps and noun phrases makes Google skip.
- **Wrong heading.** "Section 2: A Few More Tips" doesn't match the query; "How to scan a QR code on a phone" does.
- **A step that doesn't work, or a misquoted verse.** Both disqualify the answer — accuracy is the gate.

### Numbered vs bulleted

- **Numbered** for ordered sequences (scanning steps; a generate-then-embed workflow; a setup in order).
- **Bulleted** for parallel, unordered sets (a themed group of verses; a list of QR use cases; format options).

Google rewards numbered lists slightly more often for "how to" and step queries; tool guides are usually numbered, curated collections usually bulleted.

---

## The table snippet (now available — use it for comparison/spec queries)

Unlike the old Notion renderer, **randomyl's renderer supports Markdown tables** (remark-gfm). Google does sometimes lift a small table into a snippet for comparison and reference queries — so for any "X vs Y" or spec/format question, a tight **2-3 column GFM table** is a real snippet play and reads cleanly on the page.

### Anatomy of a winning table snippet

- **2-3 columns, ~4-6 rows.** Bigger tables get truncated in the card.
- **Header row is the comparison axis.** The `##` above it is phrased as the query.
- **Cells are short** — a word or short phrase, not a paragraph.
- **One clear distinction per row.** The reader should grasp it at a glance.

### Example (comparison table snippet target)

```
## QR code vs barcode

| Feature | QR code | Barcode |
|---|---|---|
| Shape | 2D square | 1D lines |
| Data capacity | Hundreds of characters | ~20 characters |
| Scans from | Any angle | One direction |
| Reads with | Phone camera | Dedicated scanner |
```

### Example (spec/format reference table)

```
## Common phone number formats

| Format | Example | Use |
|---|---|---|
| E.164 | +14155550132 | International, APIs |
| National | (415) 555-0132 | US display |
| Plain | 4155550132 | Storage, testing |
```

Verify every spec, capacity figure, and format against an authoritative source per `accuracy-and-trust-skill.md` — a wrong capacity number or an invalid example format is the table-snippet equivalent of a broken step. Tables are best for genuinely comparative or reference content; for a usable set of phrases or steps, a list still wins.

---

## People Also Ask (PAA) capture

Below or beside the snippet box, Google shows "People Also Ask" — expandable related questions, each pulling a paragraph from some page. Capturing PAA boxes wins extra SERP real estate.

### How to capture PAA on this site

**FAQPage schema is NOT wired today** (see the OPTIONAL section of `seo-and-schema-skill.md`) — so you capture PAA with a plain FAQ section built from Markdown in the body, not from any frontmatter key or schema.

1. **Research the PAA stack.** Search the target query, read the PAA box, write down the 5-8 questions Google shows, and click each to see the source page it pulled. Tool PAA is rich — e.g. "Is it legal to use a random phone number generator?", "Do fake phone numbers work for verification?", "How do I make a QR code for free?", "Why won't my QR code scan?".
2. **Add a `##` heading titled "Frequently asked questions"** near the end of the body.
3. **Phrase each question exactly as Google shows it, as a `###`.**
4. **Answer each in 40-60 words** of plain prose directly under the `###` — a self-contained, liftable answer, same discipline as the leading blockquote.

### Example

Target query "is it legal to use a random phone number generator"; the PAA box shows several related questions. The body carries:

```
## Frequently asked questions

### Is it legal to use a random phone number generator?
In most places, yes, for legitimate uses like software testing, QA, and demos, because the numbers are generated patterns rather than assigned lines. It becomes illegal when a number is used to defraud, spam, or harass. This is general information, not legal advice, so check your local rules.

### Do fake phone numbers work for verification?
Usually not. Services that send a verification code route it to a real, active line, and a randomly generated number rarely maps to one. Random numbers are best for filling test fields, seeding databases, and demos, not for receiving codes or passing real verification.

### Why won't my QR code scan?
Common reasons are low contrast, too little quiet space around the code, a size too small for the scan distance, or a broken link behind it. Use dark on light, leave a clear margin, print at a readable size, and always test with a phone before you publish.
```

Each answer is 40-60 words, plain prose, self-contained — so any one can be lifted into a PAA box. Note the legality answer carries the "general information, not legal advice" note. Make sure every claim is verifiable and every step/spec/verse accurate per `accuracy-and-trust-skill.md`.

> Note: FAQPage rich results require FAQPage JSON-LD, which isn't emitted yet (see the OPTIONAL section of `seo-and-schema-skill.md`). The Markdown FAQ section still earns PAA placement on its own; if/when FAQPage is wired up, the answer text must match these visible answers word-for-word.

---

## The Featured Snippet decision tree

Before writing, decide which snippet you're targeting:

1. **Is the target query informational?** (Yes for almost all tool/topic searches.)
2. **What shape is the existing snippet on Google?**
   - Search the target query.
   - If a snippet box already shows → that's the shape Google has decided this query wants.
   - If no snippet → opportunity, but harder to predict which shape will win.
3. **Build the matching structure:**
   - Paragraph showing → leading blockquote, 40-60 words, plain prose.
   - List showing → `##` (phrased as the query) + 6-8 short parallel steps/entries.
   - Table showing → a tight 2-3 column GFM table under a `##` (tables render here now).
4. **Steal the format, beat the content.** If "how to scan a QR code" gets a list snippet, your list beats the incumbent because every step actually works, it's tighter, and it routes to the tool. If "QR code vs barcode" gets a table, your table is more accurate and easier to scan.

---

## Pre-publish snippet checklist

- [ ] Snippet shape decided (paragraph / list / table)
- [ ] Paragraph target sits in the **leading blockquote** of the body, above the first `##`
- [ ] Paragraph: 40-60 words, plain prose, no inline links/bold, no over-promise or legal absolute
- [ ] List: 6-8 short parallel steps/entries (verb-first steps; parallel collection entries), numbered only if genuinely ordered
- [ ] `##` above any list/table phrased close to the target query
- [ ] Table (where it fits a comparison/spec query): 2-3 columns, short cells, every figure/format verified — tables render via remark-gfm
- [ ] Voice stays plain and helpful while the claim stays honest
- [ ] PAA questions captured in a body `## Frequently asked questions` (`##` + `###` + 40-60 word paragraph answers), not a frontmatter key
- [ ] YMYL topics (phone-number legality, privacy, health) carry the light "general information, not legal advice" / safe-use note
- [ ] Every statistic/spec/scripture/legal claim in a snippet target is correct per `accuracy-and-trust-skill.md`; the matching tool CTA is present in the body

---

## What kills snippet eligibility

- The direct answer is buried under an "in this article we'll explore…" preamble instead of leading the blockquote
- The `##` above a list/table doesn't match the query
- The opening paragraph runs past ~80 words
- The answer paragraph contains inline links or bold
- A how-to step that doesn't actually work, or a misquoted verse, or an invalid format in a table cell
- The list items are full paragraphs of commentary, or break parallel grammar
- The page has zero internal links (Google rewards pages embedded in a topical hub — link ≥ 3 cluster siblings, the pillar, and the matching tool)
- The page isn't on page 1 yet — snippets only come from already-ranking pages

**Snippets are a multiplier, not a starter.** A page that doesn't already rank on page 1 won't win the snippet. Write the page well first, then optimize for the box.

---

**BlogOS** — own the box, route to the tool.
