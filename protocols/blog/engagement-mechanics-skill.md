---
name: engagement-mechanics
description: Scroll-depth psychology and scannability mechanics for blog posts. This is how a randomyl.com tools/topical post keeps a skimming reader scrolling and a real reader engaged — through scannability cadence, the But/Therefore rule, the Dopamine Ladder adapted for text, and the four web-specific retention killers. Calibrated for the Markdown renderer: the scannability events are the leading blockquote answer, the grouped lists / comparison tables / code snippets / step lists / verse blocks, themed sub-headings, blockquote tips, and inline images — full GFM, with tables and code blocks now first-class events.
---

# Engagement Mechanics — keeping the scroll alive

> A blog reader is a different animal from a video viewer. They are skimming first, reading second. They scroll faster than they read. They make stay-or-leave decisions in 8-15 seconds on every screen. Your post has to win the skim test before the read test ever happens.

This is the psychology of retention, mapped onto a page authored as Markdown and rendered through `components/MarkdownRenderer.tsx` (`react-markdown` + `remark-gfm` + `rehype-highlight`). Same psychology, different surface — and a *generous* surface: full GitHub-Flavored Markdown, where `##`/`###` headings, `-`/`1.` lists, `>` blockquotes, **tables**, **fenced code blocks**, and images all render and all count as scannability events.

---

## The Dopamine Ladder (web version)

Every reader's journey releases increasing dopamine as they progress. The six levels, mapped to blog reality:

### Level 1: STIMULATION (first 0.5 seconds)
- The page loads
- They see the headline, the featured image, the visual rhythm
- Subconscious processing in milliseconds

**For blogs:** the H1 (rendered from the frontmatter `title` in `app/blog/[slug]/page.tsx`) + featured image + the visible first lines are the stun gun. If those don't earn 2 more seconds, the reader bounces. On a "Custom QR Code Generator Guide" post, a clean QR-on-a-flyer featured image carries half the work before a single word is read.

### Level 2: CAPTIVATION (first 8-15 seconds)
- The reader reads the leading blockquote answer
- They evaluate: "is this what I came for, and will it actually solve my problem right now?"
- A curiosity gap forms or doesn't

**Trigger:** the leading `>` blockquote answer satisfies them in 40-60 words AND opens a loop they need scrolled to close. On this site the leading blockquote *is* the answer box — it's the first thing in the body and the styled, left-border break that orients the reader. "A QR code generator turns a link into a scannable square in seconds — but three small mistakes are why so many printed codes never scan."

### Level 3: ANTICIPATION (first scroll, ~30 seconds)
- They scan the `##` skeleton
- They form a hypothesis about whether the rest of the post is worth their time
- HIGHEST engagement happens when the headings preview specific value they didn't expect

**For blogs:** every `##` must promise something specific. "Background" is not a promise. "The three mistakes that break printed QR codes" is.

### Level 4: VALIDATION (every section they reach)
- They scan-read or fully read a section
- They get either: a payoff (a step list that works, a comparison table that decides it) or a setup for the next loop
- Unclosed loops compound — readers who stop mid-post don't return

**Critical:** every section should close the loop opened by the previous one AND open the next. The "how to make one that scans" steps deliver; the last line teases that even a perfect code fails if you skip the one test step coming next.

### Level 5: AFFECTION (second visit)
- Reader returns to randomyl for another tool guide, format reference, or verse set
- They start to recognize the voice
- Why trust matters — affection requires *someone* to be affectionate toward

**For blogs:** build trust through the clear, grounded Randomyl voice, consistency, and reliable delivery on the headline promise — the steps actually work, the formats are valid, the verses are quoted exactly, and YMYL topics are handled honestly rather than with hype.

### Level 6: REVELATION (bookmark / save / share / use the tool)
- Reader trusts the site as a consistent source of value
- They bookmark it, share a post, copy an embed snippet, or — the real conversion here — click through to the matching generator tool or a sibling post in the same cluster
- This is what compounds into a real readership

**Action:** every post earns one clear CTA, usually the inline link to the relevant tool (`/tools/<tool>`) or a sibling post in the same cluster (`/blog/<slug>`). See `conclusion-and-cta-skill.md`.

---

## The four web-specific retention killers

### Killer 1: THE WALL OF TEXT

**What it looks like:**
> 1,200 words of unbroken prose about how QR codes work — no sub-headings, no step list, no comparison table, no code snippet, no inline image, no blockquote.

**Why it kills:** the skimming reader scrolls past it because they cannot tell what's in it. On a tools post the reader came for the *steps* (or the table, or the embed snippet) — a wall of prose with no list or table is a bounce. Someone whose QR code won't scan will leave the instant they can't find the fix.

**The fix:** every 200-300 words gets a *scannability event* — a themed sub-head, a numbered step list or bulleted set, a comparison table, a fenced code snippet, an inline image, or a `>` blockquote tip. Tables and code blocks are first-class events here — if you have 2-D data, build the table; if you have an embed snippet, fence it.

A 1,500-word post should have 5-7 scannability events minimum. Otherwise it reads as undifferentiated mass.

### Killer 2: THE DELAY DISEASE

**What it looks like:**
> "In this article, we will explore the wonderful world of QR codes, examining their history, the technology behind them, and how you might begin. Before we begin, it's important to understand…"

**Why it kills:** the first lines are supposed to *answer the query*, not announce what the article will cover. The reader has 8 seconds; you spent them on a menu.

**The fix:** the leading blockquote IS the direct answer — "A random phone number generator creates valid-format numbers for software testing, QA, and demos. Pick a country format, generate as many as you need, and copy them straight into your test data. Here's how to do it, and how to stay on the right side of the rules." 40-60 words. Then the first `##` with a section worth scrolling for.

### Killer 3: THE CONTEXT DUMP

**What it looks like:**
> ## "A Brief History of the QR Code"
> 800 words on Denso Wave and 1994 — before the post shows a single step for actually making one.

**Why it kills:** brains cannot store abstract context without anchoring it to a stake. Front-loaded history = mass exit. The reader came to *make a working QR code*, not to read a lecture.

**The fix:** the Golden Ratio:
- 30 seconds of context maximum at the top
- Followed by the first real payoff (the usable steps, the key table, the answer)
- The deeper "how it works" / "why it fails" detail shows up later, when the reader has motivation to absorb it

For a blog: never let "Background" or "The History of QR Codes" be the first `##`. Lead with the thing the reader can use right now; backfill the sourced "how it works" section only when the reader is already invested.

### Killer 4: THE PAYOFF VOID

**What it looks like:** the reader hits the step list they came for, completes the task, and the post stops being interesting from that point on.

**Why it kills:** there's a 30-second window after each payoff where the reader thinks "got what I came for, leaving now."

**The fix:** within the same paragraph that delivers a payoff, open the next loop:

> "Those steps get you a code that scans on screen. But the codes that survive *print* — small sizes, folds, a logo over the center — need the error-correction trick in the next section, the one most generators bury."
> [next ## shows the error-correction settings]

The loop closes, then opens immediately. The reader scrolls to the next section to close the new loop.

---

## The But/Therefore rule (still works)

If your transitions between paragraphs and sections read as "and then" — you have boring content. Every transition should be:

- **But** (contrast)
- **However** (contrast)
- **Therefore** (consequence)
- **So** (consequence)
- **Which is why** (consequence)
- A question (open new loop)

If "and then" works, the connection isn't earned. Rewrite with conflict or consequence.

### The test

Read just the first sentence of each new paragraph. Does it follow from the last sentence of the previous paragraph by *contrast* or *consequence*? If half are "And then…" or "Also…", you have a list dressed as an argument.

---

## Sentence rhythm (Gary Provost principle)

Three short sentences in a row is an AI fingerprint. So is a paragraph of identical-length sentences. Vary the rhythm.

**Bad:**
> Paste the link. Pick a size. Download the code.

**Good:**
> Paste the link — that's the easy part. Then pick a size, because a 1cm code on a poster is the single most common reason a scan fails, and a code only has to be big enough for a phone to lock onto it from arm's length to work every time, which is why "make it bigger than you think" is the rule that fixes most broken QR codes.

Mix punchy (5-10 words) with flowing (20-30 words). The post should look jagged on the page, not smooth.

---

## Scannability cadence (the web's rehook)

The rule is one **scannability event every 200-300 words**. On this site the events are the ones that *actually render* through `MarkdownRenderer.tsx` — which is full GFM, so the menu is wide:

- **Sub-head** (`##` or `###`) — a new section or themed group
- **Bulleted or numbered list** — a how-to's steps, a grouped set, a checklist; the strongest event on a how-to or listicle
- **A table** — a comparison, spec reference, or use-case matrix (a real event here, and a snippet target)
- **A fenced code block** — an embed snippet, a JSON/format example (syntax-highlighted)
- **An inline image** — a clean tool screenshot, a QR/phone diagram, an on-theme visual, `/blog/<slug>-content-N.webp`
- **A `>` blockquote** — the leading answer box, a highlighted line, a tip, or a cited verse / source line

Everything that renders in GFM counts — and **tables and code blocks are first-class events**, not contraband. Use a table to make a comparison scannable; use a code fence to make an embed snippet a visual beat.

For tool guides and listicles, the leading blockquote answer plus the grouped lists / step lists / comparison tables are the strongest events — they break the prose visually and reward the skimmer exactly when they're scanning for "just give me the steps" or "just show me the table." A how-to grouped into five step-clusters is five visual beats; a verse set grouped into five themed sub-sections is five beats; a comparison built as a table is one strong beat.

Without a scannability event, the prose becomes wallpaper. The skimming reader scrolls past wallpaper.

### Cadence rules by length

For each band, count every GFM event that renders here (leading blockquote answer, lists, tables, code blocks, themed sub-heads, inline images, blockquote tips):

| Body length | Minimum scannability events | Distribution |
|---|---|---|
| 300-600 | 3-4 | answer + first step list/table + one themed group minimum |
| 700-1,200 | 4-6 | one every 200-250 words |
| 1,200-2,000 | 6-9 | one every 200-300 words |
| 2,000-2,500 | 9-12 | one every 200-250 words |

(That table is also a perfectly valid published-post element here — randomyl's renderer ships real tables, so use them in posts wherever the data is genuinely 2-D.)

---

## The skim-then-read pattern

Realistic reader behavior on a blog post:

1. **Skim H1 + featured image** (1 second)
2. **Read the leading blockquote answer** (8 seconds)
3. **Skim the `##` list** (5 seconds)
4. **Decide:** scroll to a specific section (often the one that names their exact task or question), read top-down, or leave
5. **Scan the chosen section** by reading the first sentence + the step list / table under it
6. **Read full prose** only after the scan rewards them

Designing for this pattern:

- **First sentence of every paragraph** is the most load-bearing. The skim reader reads only first sentences.
- **First sentence of every section** is the second-most. Often the snippet target.
- **Bold the load-bearing phrase** in each paragraph — gives the skimmer their anchor.
- **Lists, tables, and code fences for the payload** — the skimmer scans the steps, the comparison rows, or the snippet without reading prose.
- **The step lists, comparison tables, and grouped sets** are skim magnets — readers scrolling for "just show me how" stop on them.
- **Heading phrasing** = the search query they typed, restated as a need or question.

Posts written for the read-only reader (long prose, no bolds, no step lists, no tables) lose the skim reader by paragraph 3.

---

## Stakes escalation across the post

A post should feel like each section is more rewarding than the last, until the wrap-up. The post earns its length by escalating, not flattening.

For a tool guide (e.g., "custom QR code generator guide"):
- Section 1: the simplest path — the 4 steps that make a basic working code
- Section 2: the most-searched sub-need (sizing and error correction so it scans in print)
- Section 3: the surprising angle (the three mistakes that silently break codes)
- Section 4: how it works (the sourced "why error correction matters" / QR-spec note)
- Section 5: the power move (the copy-paste embed snippet for a web page)
- Conclusion: what to do next — and the inline link to the QR generator tool

Each section takes the reader one step deeper into a task they can actually complete. The post is "worth scrolling for" because the payoff keeps growing.

For a listicle or verse set, escalation is grouping: open with the easiest, most universal entries, build toward the more specific or moving ones, so the reader feels the set deepening as they scroll.

---

## Pace variety inside sections

Within a section, mix:

- A short setup paragraph (1-3 sentences)
- A longer "here's how to do it and why" paragraph (3-5 sentences)
- A scannability event (step list, comparison table, code snippet, inline image)
- A short consequence paragraph ("now your code survives a fold")
- A transition that opens the next loop

This rhythm — short → long → visual → short → transition — keeps both the skimmer and the reader engaged. A section that is just five 4-sentence paragraphs is monotone, even if each paragraph is well-written.

---

## The post's emotional (or task) arc

Even a simple tool guide has an arc. Label the intended beat of each section as you outline:

- Recognition (name the reader's problem — "your printed QR code won't scan")
- Relief (deliver the first working steps — "make it bigger and turn on high error correction")
- Capability (the move that makes them feel competent, not just unblocked — the embed snippet, the format table)
- Honesty (the grounded note — legitimate use only for phone/privacy tools; exact, translation-named scripture for faith posts)
- Resolution (the practice or setting that makes it stick)
- Forward momentum (what to do next — the matching tool, a sibling post)

A post that hits the same beat in every section is flat. A post that swings recognition → relief → capability → resolution is alive — and leaves the reader with the thing solved, which is the whole Randomyl promise.

For pillar guides and large sets, the arc matters even more. See `narrative-arc-skill.md`.

---

## Read-aloud test

Before publishing, read the post out loud — or have a TTS engine read it. Listen for:

- **Robotic patches:** "It is important to note that…", "It can be observed that…" → rewrite
- **Awkward word sequences** — if it doesn't roll, it doesn't write
- **Identical sentence lengths in a row** — sentence-length variation is rhythm
- **Steps that don't sound like something you'd actually tell a person** ("Utilize the generation interface to instantiate a code") → rewrite to plain, direct instructions
- **Where you naturally pause** — those are your paragraph breaks
- **Anything that overpromises or misleads** — this is a clear, grounded voice; if a line hypes a tool, states a legal absolute, or paraphrases scripture as a quote, fix it

It applies just as much to prose written for the eye as to anything spoken — and a step that doesn't sound right out loud usually doesn't read right either.

---

## What kills engagement that anti-AI-slop doesn't catch

- **No scannability events** — the wall of text problem
- **No step list / table / snippet** — readers came for the payload; a prose-only how-to is a bounce
- **Ignoring tables and code blocks** — they render here; skipping them when the data is 2-D or the snippet is real wastes the strongest events
- **No inline images** — a long guide with no visual breaks (no screenshot, no diagram) is a hard scroll
- **No emotional/task arc** — the flat report problem
- **No stakes escalation** — every section feels like the same depth
- **All paragraphs same length** — the AI-rhythm problem
- **First sentence of paragraph is generic** — the skimmer loses their anchor
- **Headings phrased as labels not as needs** — "Background" vs "The three mistakes that break printed QR codes"
- **A vague or hype-y tone** — readers solving a task need clear, honest guidance, not marketing
- **No internal links in the body** — the post feels like a dead end (link the matching tool and a sibling post)

---

## Pre-publish engagement checklist

- [ ] A scannability event every 200-300 words (events that render: leading blockquote, lists, tables, code blocks, inline images, sub-heads — all GFM counts)
- [ ] Leading blockquote delivers the answer in 40-60 words
- [ ] First sentence of every paragraph is load-bearing
- [ ] Bold the load-bearing phrase per paragraph
- [ ] Heading phrasing is a need or question, never a label
- [ ] Sentence-length variation visible (jagged edge if printed)
- [ ] Stakes / payoff escalate across sections
- [ ] Each section has a clear beat (task or emotional)
- [ ] But/Therefore over And/Then
- [ ] Each loop closes and opens another
- [ ] At least one step list / grouped set / comparison table (and for longer posts, inline images) present
- [ ] Voice is clear and grounded — never hype, overpromise, or YMYL absolutes
- [ ] Read aloud sounds natural — and the steps sound like real instructions

---

**BlogOS** — engagement is structure plus rhythm.
