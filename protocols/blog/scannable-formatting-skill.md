---
name: scannable-formatting
description: Heading hierarchy rules, paragraph-length discipline, bullets vs prose, blockquotes and tables, and the core content blocks (the leading blockquote answer, the how-to-use note, the grouped lists / comparison tables / step lists / verse blocks) for randomyl.com posts. This is the file that turns prose into a web page Google can index and a human can scan. Calibrated for the Markdown renderer (components/MarkdownRenderer.tsx) — full GitHub-Flavored Markdown: ## / ### / #### headings, > blockquotes, - / 1. lists, TABLES, and fenced code blocks all render. Heading hierarchy is non-negotiable.
---

# Scannable Formatting — the layer between prose and page

> A great paragraph that nobody scrolls to is dead writing. This skill is the discipline of structuring content so the person hunting a QR fix at midnight, the developer skimming for an embed snippet on a phone, the screen reader, and Google's crawler can all find what they came for — using everything this site's renderer actually produces.

---

## What the renderer does (and doesn't do)

Every post is a **Markdown file** at `content/blog/<slug>.md` with YAML frontmatter, parsed by `gray-matter` in `lib/posts.ts` and rendered through `components/MarkdownRenderer.tsx` (which runs `react-markdown` with `remark-gfm` + `rehype-highlight`) by `app/blog/[slug]/page.tsx`. Before any formatting rule, internalize these facts:

- **The body is full GitHub-Flavored Markdown.** Headings (`##`/`###`/`####`), `>` blockquotes, `-`/`1.` lists, GFM task lists, **tables**, and **fenced code blocks** all render. This is a major capability gain over a limited-block renderer — use it.
- **Tables RENDER.** `remark-gfm` ships real `<table>` output. Use Markdown tables for comparisons, specs, format references (E.164 / NANP), use-case matrices, and translation-by-translation verse comparisons. A table *is* a scannability event here — reach for one whenever the data is genuinely 2-D.
- **Fenced code blocks render and are syntax-highlighted** (`rehype-highlight`, github-dark theme). Use them for HTML/JSON/CLI/format snippets — the QR-embed HTML, a phone-format example, a JSON payload. Show HTML *inside* a ```html code block; raw HTML in the Markdown body does **not** render (no `rehype-raw`).
- **The frontmatter `title` is the page H1.** It does double duty as the `<h1>` and the `<title>`. **Never put a `#` H1 in the body** — start body sections at `##`. The frontmatter `title` owns the H1.
- **No auto heading anchors / no on-page TOC.** There's no `{#id}` jump-link TOC. Rely on clear heading phrasing instead.
- **The leading `>` blockquote is the answer box.** A `>` blockquote (left-border styled) is the answer box and the tip/note box; a **bold lead-in line** is the inline alternative. There is no separate callout component — a blockquote or a bold lead-in *is* the callout.

---

## The heading hierarchy (non-negotiable)

This is the most important section in this file. Codify it.

### H1 — exactly one per page, from the frontmatter title

The H1 is the page title. It lives in the frontmatter `title` and is rendered by the blog route (`app/blog/[slug]/page.tsx` emits the `<h1>`). **Never put an H1 in the body, and never write a `#` heading in the body** — it would compete with the frontmatter title.

```
[Frontmatter title: "Custom QR Code Generator Guide: Make One That Actually Scans"]
[The route renders <h1>Custom QR Code Generator Guide: Make One That Actually Scans</h1>]

[Body starts here — first content is often the featured/inline image, then the
leading > blockquote answer, then ## sections. Never an H1 or # heading in the body.]
```

Why: multiple H1s confuse Google's understanding of what the page is about, harm accessibility, and break the semantic outline.

### ## — major sections, multiple allowed

Every major section of the post is a `##`. Rules:

- Start after the opening answer blockquote + the how-to-use note.
- Use need or question phrasing: "How to make a QR code that scans", "Why QR codes fail and how to fix them", "Is it legal to use a random phone number?".
- Avoid label phrasing: "Background", "Section 1", "Introduction".
- No `{#id}` anchors — this renderer doesn't generate them.
- Top-level headings capture featured snippets — write them as if they were searchable themselves.

### ### — sub-sections inside a ##

Use `###` only when a `##` has 2+ genuine sub-sections — for example, the format groups inside a phone-format explainer ("E.164 international", "NANP / US numbers", "Local formats") or the themed groups inside a verse collection ("For panic in the moment", "For sleepless nights", "For the long haul"). A single `###` inside a `##` is an orphan — promote it or fold it into the parent prose.

Rules:
- Always under a `##` (never a lone sub-heading at the top of the body)
- Phrase consistently with the parent `##`'s style
- A `####` is available for a rare third nesting level, but if you reach for it often the section is probably its own post

### Deeper levels — restructure first

The renderer styles `##`/`###`/`####`. If you feel you need a fifth heading level, the post structure has failed — restructure, or that section is probably its own post.

---

## Heading rules summary

```
H1            — frontmatter title only, exactly one (no H1 / # heading in body)
##            — major sections, need/question phrasing, NO {#id}
###           — sub-sections (e.g. format groups, themed verse groups), only when 2+ exist under one ##
####          — rare third level; if used often, the section is probably its own post
```

The semantic outline of every post is H1 (title) → `##` sections → optional `###` sub-sections, with no skips and no orphans.

---

## Paragraph length

The default paragraph length on the web is shorter than print. Real readers scan first; long paragraphs intimidate — and a randomyl reader is often someone mid-task (a QR code that won't scan, a phone format that's failing QA, a verse they need right now), skimming on a phone for the one line that solves it.

### Rules

- **2-4 sentences per paragraph** for most prose
- **Single-sentence paragraphs** are allowed for emphasis, transition, or beat. Use sparingly — three in a row is an AI tell.
- **5-6 sentence paragraphs** are allowed in pillar pieces or longer how-to intros, when the reader is committed and the prose earns it.
- **8+ sentence paragraphs** are wallpaper. The skimmer scrolls past.

### Visual rhythm test

Preview the post. Look at the *shape* of the paragraphs on the page. Healthy posts have varied paragraph shapes — some 2 lines, some 5, some 1, some 4. Posts that are all 4-line paragraphs read as templated.

---

## First-sentence discipline

The skimming reader reads the first sentence of every paragraph. So:

- The first sentence carries the paragraph's claim
- Don't bury the point in sentence 3
- "There are several reasons QR codes fail to scan. First, …" — wastes the first sentence. Start with "First, …" directly.
- Topic sentences that don't say anything ("Let's now turn to the next group") are contraband

If you delete every sentence except the first in each paragraph, can a reader follow along? That's the skim test.

---

## Lists vs prose — when to use each

On a randomyl post, the payload is often a **list**: the steps of a how-to (`1.` numbered), a grouped set of verses or use-cases (`-` bulleted), a checklist of QR mistakes, a set of phone formats. Use `bulleted` for a grouped set where order doesn't drive meaning, `numbered` when sequence or counting matters (a step-by-step how-to, a ranked list).

### Use lists when:
- 3+ items share the same shape (parallel) — the steps of a procedure, the entries of a curated set
- Order doesn't matter much (use bulleted) or matters a lot — a numbered how-to or ranked set (use numbered)
- The reader needs to *scan* or *count* the items (a how-to checklist, a set of verses, a list of formats)
- The content is genuinely parallel — not narrative dressed up as a list

### Use prose when:
- The items have varied shape or depth
- The connections between items matter (why this step depends on the last)
- One idea flows into the next (the "why QR codes fail" explanation)
- The argument needs sentences

### List anti-patterns

- 2-item lists — write it as prose
- Lists where each item is a paragraph — reformat as `###` groups or as prose
- Lists of mixed-grammar items — "Pick a size. You should test it. QR codes use error correction." — three different shapes; a how-to list should be consistently imperative steps
- Nested lists deeper than 2 levels — restructure

### List item phrasing

- **Step lists:** start with a verb if procedural ("Paste your URL", "Pick a size", "Download the PNG and scan it before you print")
- **Curated-set items:** keep them parallel — each verse entry quoted exactly with its reference, each use-case framed the same way
- **Short items:** scannable lists read best short — most items under ~15 words where the content allows
- **Long items:** if a single list item needs 40+ words, it's a paragraph, not a list item — tighten it or promote it to a `###` group

---

## Grouped and comparative data — tables ARE allowed (and good)

Unlike a limited-block renderer, randomyl's Markdown pipeline ships real tables via `remark-gfm`. So when data is genuinely 2-D, **build a table** — it's both a clearer presentation and a scannability event, and comparison tables are strong featured-snippet targets.

### Use a table for:

- **Format / spec references** — E.164 vs NANP vs local phone formats; QR version vs capacity; error-correction levels.
- **Comparisons / decision matrices** — random generator vs paid alternative; "use this when / avoid when"; tool A vs tool B.
- **Use-case matrices** — QR codes by industry (industry → use-case → what to encode).
- **Translation comparisons** — a verse across NIV / ESV / KJV side by side (with each translation named).

```
| Format | Example          | When to use                 |
|--------|------------------|-----------------------------|
| E.164  | +14155550132     | APIs, international, storage |
| NANP   | (415) 555-0132   | US display, forms           |
| Local  | 0151 555 0132    | Region-specific display     |
```

Keep tables tight — 2–4 columns, scannable rows. A table that's really one column of prose should be a list; a table that needs paragraphs per cell should be `###` groups. (Phone numbers in examples use reserved/`555-01xx` ranges — see `accuracy-and-trust-skill.md`.)

### Fenced code blocks for snippets

For QR-embed HTML, JSON payloads, CLI commands, or format strings, use a fenced code block — it renders syntax-highlighted:

````
```html
<a href="https://randomyl.com/tools/random-qr-code-generator">
  <img src="qr.png" alt="Scan to open the menu" width="200" height="200">
</a>
```
````

Raw HTML in the body does **not** render (no `rehype-raw`) — always show HTML *inside* a ```html fence so it displays as code, not as a (silently dropped) element.

---

## Callouts — the blockquote and bold lead-ins

On this renderer a "callout" is one of two things:

### 1. A `>` blockquote (the answer / tip / note box)

A `>` blockquote renders left-border styled — this is the answer box and the tip/note box. Use it for:

- **The leading answer** (its primary job — see below).
- **A how-to-use tip** — "> Test the code with your actual phone camera before you print it — what renders on screen can fail at small print sizes."
- **A gentle, honest note** — "> A random phone number generator is for testing, QA, and demos. Don't use generated numbers to contact real people or evade the law."

### 2. A bold lead-in sentence

For tips and definitions inside the flow, a bold lead-in is cleaner than a blockquote:

**Tip.** Pick the highest error-correction level your design allows — it's what lets a QR code survive a smudge, a fold, or a logo over the center.

**E.164 vs NANP.** E.164 is the international storage/API format (`+14155550132`); NANP is the North American display format (`(415) 555-0132`). This site shows both — see `content-craft-skill.md`.

### The leading blockquote is the answer box

The **leading** `>` blockquote right after the featured image is the **direct answer** (the featured-snippet target). Reserve heavy blockquote use for the answer, a single highlighted line, or a genuine cited source/scripture quote (with attribution and translation). Don't blockquote ordinary emphasis — use bold.

### Frequency

- 1-3 blockquote/lead-in tips per post is healthy (beyond the leading answer blockquote)
- 5+ becomes noise
- Match the callout to the moment — don't dress every aside as a warning

---

## The core content blocks (answer, how-to-use, the payload)

The load-bearing content of a randomyl post is the **leading blockquote answer**, the **how-to-use note**, and the **payload** — which depending on the content type is the **grouped lists**, **comparison tables**, **code snippets**, **step lists**, or **verse blocks**. These are the scannability events that carry the page.

### The leading blockquote answer

Lead with the answer. The very first text in the body (often right after the featured/inline image) is a `>` blockquote — this *is* the answer box, the featured-snippet target, and the orienting beat:

```
> A QR code generator turns a link, text, or contact into a scannable square in
> seconds. Paste your URL, pick a size, download the PNG, and test it with your
> phone camera before you print. This guide walks through making one that
> actually scans, plus the three mistakes that break QR codes.
```

40-60 words. Direct and useful. Every factual or scriptural claim must hold up, and every step/format/snippet must be accurate — see `content-craft-skill.md` and `accuracy-and-trust-skill.md`.

### The how-to-use note

Right under the answer, a short note (paragraph, list, or `>` blockquote) on how to actually use the thing — the quick path, the one habit that makes it work:

```
> How to use this in 30 seconds: paste your link, leave error correction on
> "high," download the PNG, and scan it with your own phone before you print
> a single copy. If it scans on your screen, it'll scan on paper.
```

### The payload (lists / tables / code / step lists / verse blocks)

This is the heart of the post. Group it under `##` sections, with `###` sub-sections and the right block for the content type:

```
## How to make a QR code that scans

1. Paste your link, text, or contact into the generator.
2. Pick a size — 2cm minimum for print, larger if it'll be scanned from a distance.
3. Set error correction to "high" so a logo or a smudge won't break it.
4. Download the PNG and scan it with your phone camera before you print.
```

```
## Bible verses about anxiety

### For panic in the moment
> "Do not be anxious about anything, but in every situation, by prayer and
> petition, with thanksgiving, present your requests to God." — Philippians 4:6 (NIV)
```

Keep every step reproducible, every verse quoted verbatim with its reference and translation named, every table row correct, and everything consistent with the post's framing.

### The honest note (YMYL topics)

For phone-number, fake-number, privacy, and faith topics, include a light, non-alarmist note: frame the tool for legitimate use (testing, QA, demos, privacy, education), avoid legal absolutes, and add a "general information, not legal advice" line where relevant — as a blockquote or a short paragraph. This is part of the trust gate, not optional.

### Don't use a blockquote for:
- Emphasis (use bold)
- A whole section of ordinary prose (it's not a quote)
- General commentary (reserve it for the answer, a highlighted line, or a cited source)

### Sourcing rule

Every step must actually work, every format must be valid, and every load-bearing factual claim — a QR spec, an E.164/NANP format, a scanning behavior, a statistic, any scripture quote/citation, any legality or privacy claim — must be correct and verifiable against a real authority and cited. Research is WebSearch + WebFetch (there is no brief folder or SEO pipeline). Never fabricate a study or a statistic, never quote scripture inaccurately or without naming the translation, and never frame a tool for fraud, spam, or evading the law. See `accuracy-and-trust-skill.md` for the trust gate every post must pass before publishing.

---

## Code / formula blocks

Unlike a mood-led affirmations site, randomyl's tools cluster has real legitimate uses for fenced code:

- **QR-embed HTML** — the copy-paste snippet a reader drops into a page (show it in a ```html fence).
- **JSON / API payloads** — a phone-number or QR config example.
- **CLI / format strings** — a command or an E.164 pattern.
- **An exact field/route/file name** set off in inline code (`content/blog/<slug>.md`, `/tools/random-qr-code-generator`, `lib/posts.ts`).

Fenced blocks are syntax-highlighted (github-dark). Use inline code (`backticks`) for route/field names, file paths, format tokens, and exact technical strings — not for ordinary emphasis. Don't pad faith or general posts with code that adds nothing; reach for it only when a real snippet helps the reader.

---

## Images in flow

See `media-and-images-skill.md` for the full image discipline. Quick scannability points:

- Featured image set via frontmatter `featuredImage` (defaults to `/blog/<slug>.webp`), rendered by the route above the body
- Inline images as Markdown `![alt](/blog/<slug>-content-N.webp)`, rendered via `next/image`
- Long how-tos and collections want an on-theme inline image (a clean tool screenshot, a QR diagram, a calm visual) every 600-1,000 words to break the scroll
- Every image has real alt text (it comes from the `![alt]`)
- No decorative-only filler — every image earns its presence (a screenshot or diagram that clarifies a step is ideal on a tools site)

---

## Bold and italic

Bold and italic are emphasis types with different jobs:

- **Bold** for the load-bearing phrase in a paragraph — what the skimmer needs to see; also the lead-in label for an inline callout
- *Italic* for a term on first use (*error correction*, *E.164*, *NANP*) or a light, deliberate emphasis

### Rules

- Bold one phrase per paragraph maximum (more dilutes)
- Italic 2-3 times per page maximum (more is precious)
- Never both at once (***bold italic*** is shouting)
- Never an entire sentence bolded — break it or rewrite
- **Don't bold the list payload itself** — steps and verse entries live in lists/blockquotes; bolding a whole list is noise

### What NOT to bold

- Keywords for SEO — Google notices the artificial pattern
- Random words for "visual interest"
- Every sentence in a paragraph
- Headings (they're already styled)

---

## Table of contents

There is **no on-page TOC** and **no auto heading IDs** on this renderer. Don't write a manual jump-link list (the anchors won't resolve), and don't add a `toc` field. Your job is to make the heading phrasing so clear that the heading list *is* the visual outline. For pillar posts that want a contents overview, write a short prose "what this covers" paragraph near the top instead of a linked TOC.

---

## The visual rhythm budget

For every 250-300 words of body, there should be a scannability event. On this renderer the events are:

- A new `##` or `###`
- A bulleted or numbered list (a how-to's steps, a grouped set, a checklist)
- A **table** (a comparison, spec reference, or use-case matrix — a real event here)
- A **fenced code block** (an embed snippet, a JSON/format example)
- An inline image (a clean tool screenshot, a QR/phone diagram, an on-theme visual)
- A `>` blockquote (the answer, a highlighted line, or a cited source/scripture quote)

Every renderable GFM block counts — and tables and code blocks are now first-class events, not contraband.

A 1,500-word post should have 6-9 scannability events distributed across the body — not clustered at the top, not absent for a 600-word stretch. On a randomyl post the easiest way to hit this is to keep the grouped lists, tables, and step lists short and frequent: a wall of prose with no list, table, or snippet is a bounce.

The audit catches: any 300-word run with zero scannability events.

---

## Pre-publish formatting checklist

- [ ] Exactly one H1 (from the frontmatter title; no H1 or `#` heading in the body)
- [ ] Top-level sections are `##`, sub-sections `###` (no `#` in body; `####` only rarely)
- [ ] No `{#id}` anchors written (renderer doesn't support them)
- [ ] Headings use need/question phrasing, not labels
- [ ] No orphan `###` (a single sub-heading under one `##`)
- [ ] No paragraph > 6 sentences (unless a pillar piece)
- [ ] No 3+ short paragraphs in a row
- [ ] First sentence of every paragraph is load-bearing
- [ ] Lists are genuinely parallel (consistent imperative steps / consistent set entries)
- [ ] Tables used for genuine 2-D data (comparisons/specs/matrices) — tight, 2–4 columns
- [ ] Fenced code blocks used for real snippets (```html for HTML; raw HTML in body won't render)
- [ ] Callouts are `>` blockquotes or bold lead-ins; the leading blockquote is the answer
- [ ] Opening blockquote is the direct, useful answer (40-60 words)
- [ ] How-to-use note sits right under the answer
- [ ] Payload present and grouped (steps / set / table / verse blocks); for YMYL topics an honest note is included
- [ ] Bold used for load-bearing phrases, not keywords or list payloads
- [ ] Every step works and every fact/scripture verified per `accuracy-and-trust-skill.md`
- [ ] Scannability event every 200-300 words

---

**BlogOS** — structure is content.
