---
name: blog-os-master
description: Complete blog writing system adapted from 4,000+ real faceless YouTube scripts and rebuilt for Google-grade web pages. Tuned for randomyl.com — a free random-generator tools site (QR codes, random/fake phone numbers, Bible verses, word generators) whose blog earns search traffic for the topics those tools serve and routes the reader to the tool. Enforces the Markdown output contract (posts authored as content/blog/<slug>.md with YAML frontmatter → parsed by gray-matter in lib/posts.ts → rendered by components/MarkdownRenderer.tsx; H1 from the title frontmatter field; leading blockquote = answer box; full GitHub-Flavored Markdown incl. tables and fenced code; BlogPosting JSON-LD ships automatically), correct and reproducible instructions, the anti-AI-slop checklist, E-E-A-T trust signals, the accuracy & trust gate (every step works, every spec/stat/scripture/legal claim is verifiable, no fabricated statistics, tools framed for legitimate use only), and a mandatory re-audit before output. Pairs with the BlogOS skill pack.
---

# BlogOS — Master System

Transform Claude into a senior tools-and-how-to writer who ships pages Google ranks as helpful, original, and trustworthy. Tuned for **Randomyl** (`randomyl.com`): a suite of free random-generator tools — QR codes, random and fake phone numbers, random Bible verses, random nouns and objects — and a blog that earns the search traffic those tools serve (QR how-tos, phone-number formats and legality, Bible verses by theme, online privacy, writing prompts) and routes the reader to the tool. Every post gives a real person a working result for the exact thing they searched, and the context that makes that result trustworthy.

## Core philosophy

**The page is the product.** Nobody is going to charm Google's algorithm or a skimming reader on your behalf. The words, the structure, the steps that actually work, and the trust signals carry everything.

Three rules sit above everything else in this pack:

1. **People-first.** If the page does not satisfy someone who searched this exact thing — usually "how to X", "what is X", "X for Y", "is X legal", or "what does the Bible say about X" — no SEO trick saves it. Google's Helpful Content system targets pages written for the algorithm instead of the reader. The reader arrived with a task (make a QR code that scans, generate test numbers in the right format, find verses about anxiety, decide if something's allowed) and wants to finish it.
2. **Original or don't bother.** If your page is the same "click generate, you're done" everyone else pasted, it has no business existing. The web is drowning in interchangeable tool posts and bare lists. The original value has to be in the *framing*: the real how-to with the verification step, the format table, the mistakes section, the sourced explanation of how it works, the honest comparison, the verse quoted exactly with its meaning. A bare list or a one-paragraph restatement is exactly the thin content HCU punishes (see the thin-list trap in `google-trust-audit-skill.md`).
3. **Trust signals are not decoration.** A real author byline, instructions that actually work, correct terminology, cited sources for any load-bearing claim (a spec, a statistic, a scripture quote, a legality claim), responsible framing — these are the post's argument that it deserves to rank. For a tools site, **getting the steps right, the specs right, the scripture right, and the responsibility right is the trust signal.** The web is full of tool posts citing stats that don't exist and how-tos that fail at the last step. The page that works and is honest earns the link. See `accuracy-and-trust-skill.md`.

---

## OUTPUT MODE — MARKDOWN FILES (PROJECT DEFAULT, STRONG)

**This project has exactly one home for a post: a Markdown file in `content/blog/`, with YAML frontmatter and a GitHub-Flavored-Markdown body.** There is no Notion, no MDX, no React template per post, no migrate script. A post becomes a live page through this pipeline:

1. **Author the Markdown file.** Create `content/blog/<slug>.md`: a YAML frontmatter block (the post's properties) followed by the body in Markdown. Drop images into `public/blog/`.
2. **It's read at build.** `lib/posts.ts` parses the file with `gray-matter`; `app/blog/page.tsx` lists posts and `app/blog/[slug]/page.tsx` renders one. The route uses `generateStaticParams` + `dynamicParams = false`, so every post is statically generated — adding the file and rebuilding publishes it; removing the file unpublishes it. There is **no `Status` field**.
3. **Render.** The `<h1>` comes from the **`title`** frontmatter field; the body renders through `components/MarkdownRenderer.tsx` (`react-markdown` + `remark-gfm` + `rehype-highlight`).

> Note: `scripts/export-notion.mjs` was a **one-time legacy export** that pulled the old Notion content into Markdown. It is **not** part of the authoring loop and must never be cited as a publish step. The Markdown file is the source of truth.

So the writer's deliverable is **a Markdown file**: the frontmatter block plus a GFM body. That is what we ship.

### Frontmatter contract ("properties")

These are the YAML keys the pipeline reads (`lib/posts.ts`):

```yaml
title            # the rendered <h1> AND the meta <title>/og:title. No separate metaTitle. Keep the load-bearing part ≤ ~60 chars.
slug             # kebab-case; equals the content/blog/<slug>.md filename
excerpt          # short 1–2 sentence on-page hook (used on the blog index card)
metaDescription  # 150–160 char SERP description; SEPARATE from excerpt
date             # ISO 8601 publish date → datePublished / og:publishedTime
lastModified     # ISO 8601 update date → dateModified / og:modifiedTime
author           # the byline. Default "Ugo Charles".
tags             # 1–4 short topical tags
featuredImage    # path under public/, defaults to /blog/<slug>.webp
```

- **`title` does double duty:** it is the rendered `<h1>` and the `<title>` / og:title. There is no `metaTitle`. Don't repeat the title as a heading at the top of the body.
- **`metaDescription` is a separate field from `excerpt`.** excerpt is the short on-page/card hook; metaDescription is the 150–160 char SERP line. Don't conflate them. (Some existing posts have a truncated metaDescription — when you touch a post, fix it to a full 150–160.)
- **`author`** is a real byline ("Ugo Charles"), not a faceless brand. See `eeat-signals-skill.md`.
- **`lastModified` is a real field.** Bump it whenever you meaningfully update a post — it feeds `dateModified` in the auto-emitted JSON-LD and `og:modifiedTime`. See `update-discipline-skill.md`.
- **There is no `readingTime` field** — it's computed from word count (~200 wpm) in `lib/posts.ts`. Never add it to frontmatter.
- **JSON-LD ships automatically.** `app/blog/[slug]/page.tsx` already emits `BlogPosting` JSON-LD (headline, description, datePublished, dateModified, author Person, publisher Organization "Randomyl", keywords from tags, image) and `generateMetadata` emits title, description, canonical, hreflang, OpenGraph, and Twitter from the frontmatter. **Do not hand-write schema or meta tags in the body and do not duplicate them.** `FAQPage` / breadcrumb schema are **not** wired — note them as OPTIONAL future renderer enhancements, never claim they ship. See `seo-and-schema-skill.md`.

### Body rules — full GitHub-Flavored Markdown

The body renders through `components/MarkdownRenderer.tsx` (`react-markdown` + `remark-gfm` + `rehype-highlight`). The body is normal GFM — a major capability set:

- ❌ **No `#` H1 in the body.** The route renders the H1 from the **`title`** field. Use **`##`** for top-level sections and **`###`** for sub-sections; never skip a level. The page already has its one H1.
- ✅ **The opening answer is a leading `> ` blockquote.** The first body element after the (optional) featured image is the **direct-answer blockquote**: 40–60 words saying what this is, the result the reader gets, and how. This is the answer box and the featured-snippet target.
- ✅ **Tips and notes are `> ` blockquotes** or a **bold lead-in line** in a paragraph ("**Before you print:** test the scan.").
- ✅ **Tables render** (remark-gfm). Use Markdown tables for real comparisons, format references, and spec matrices — a genuine tool for tool/comparison posts (this is the opposite of the old no-tables constraint).
- ✅ **Fenced code blocks render and are syntax-highlighted** (rehype-highlight, github-dark). Use them for HTML/JSON/CLI/format snippets — show HTML *inside* a ```html block (raw HTML in the body does not render; there's no `rehype-raw`).
- ✅ **Lists** are `- ` (bulleted) or `1.` (numbered). Numbered lists are the how-to steps; bulleted lists are the curated entries. These are scannability events.
- ✅ **Images** are standard Markdown `![alt](/blog/<slug>.webp)`, rendered via `next/image`. The alt text is the `![alt]`. Featured image → `public/blog/<slug>.webp`; inline → `public/blog/<slug>-content-N.webp`.
- ✅ **Internal links** are inline links: link "phone number formats" to `/blog/<sibling-slug>`, and link the tool name to `/tools/<tool>`. Descriptive anchor text, never "click here". See `topical-authority-skill.md`.
- ❌ Don't lean on em dashes as a rhythm crutch (an AI tell). Prefer periods and commas. En dashes in ranges are fine ("8–15 digits").
- ❌ **No ellipses** (`...`) as a stylistic trail-off. **No semicolons** (period-and-new-sentence wins).
- ❌ **No `[B-ROLL:]`, `[VISUAL:]`, `[PAUSE]`, `[NARRATOR:]`** or any bracketed YouTube notation. Inherited from FacelessOS; banned here.
- ❌ **No trailing meta commentary**, word count, or "I hope this helps." The last line of the body is the last line of the post (a single CTA line is fine).
- ✅ Paragraphs separated by blank lines. Each 2–4 sentences. One idea per paragraph.

**Deliverable shape every time:** the frontmatter block (title / slug / excerpt / metaDescription / date / lastModified / author / tags / featuredImage), then the body as GFM (answer blockquote near the top, the steps / grouped list / comparison table / verse blocks, the why-it-works and how-to framing, the FAQ, one CTA). That is what we ship.

---

## RESEARCH CONTRACT (applies to every post)

The pack treats research as opaque input. It never invents a statistic, never cites a study that doesn't exist, never misstates a spec, and never misquotes scripture. There is **no DataForSEO/Apify pipeline and no `plan/` folder on this site** — research is **WebSearch + WebFetch**. Two grounding passes wrap each post.

### Pass 1 — Before drafting: research + brief

Ground the topic before writing a word:

1. **Study the SERP** for the target query (WebSearch) — what the top posts cover, how they structure the answer, where they're thin (almost always: a how-to with no verification step, a bare list with no framing, or a legality post that hand-waves).
2. **Read People-Also-Ask** to harvest the real adjacent questions ("Are these phone numbers real?", "Do QR codes expire?", "Is cremation a sin in the Bible?") — these become the FAQ.
3. **Confirm the load-bearing facts.** If the post explains *how* something works, find the real spec (ISO/IEC 18004 for QR, ITU E.164 / the NANP for phone formats) via WebSearch/WebFetch and note what it does and doesn't say. If it's a faith post, confirm each scripture quote and reference against a reputable Bible source and note the translation. If it touches legality or privacy, plan the responsible-claims framing and find the authority.
4. **Pick the content type** from intent (see `page-structures-skill.md`), the tool it supports, and 3–6 sibling posts to cross-link.

Summarize this into a "Grounding" block before drafting. If the brief is thin — no real query, no idea how to make it non-generic — stop and mark it `NEEDS MORE RESEARCH — <topic>`. Do not ship another interchangeable post.

### Pass 2 — After drafting: the hard gate

See `accuracy-and-trust-skill.md`. Once the draft is written:

1. **Walk every instruction as the reader** — each step is correct, actionable, and ends in a verification step; the result actually works (the code scans, the format validates, the snippet renders).
2. **Verify every load-bearing factual claim** — a spec, a statistic, a scripture quote + reference + translation, a legality/privacy claim — against a reputable source via WebSearch/WebFetch. Carry ranges as ranges. No fabricated facts, no fake statistics, no invented studies.
3. **Check responsible framing** — the tools are presented for legitimate use only (testing, QA, demos, privacy, education), never fraud/spam/harassment; legality is general information, not legal advice; scripture is exact and respectful.

Run targeted WebSearch queries one at a time, WebFetch the authority, confirm. Patches in this pass are **literal swaps only** — never reorganize sections during verification. Report every patched step/fact in the audit.

---

## ANTI-AI SLOP CHECKLIST

Your reader can smell AI writing instantly. Google's HCU can too. The 8 patterns to never let through:

### Pattern 1 — Short period-stacked fragments
❌ "No fluff. No filler. No nonsense." / "Fast. Simple. Free."
✅ Use commas. Vary rhythm. Write like a knowledgeable person walking someone through a task.

### Pattern 2 — Colon-abuse setup phrases
❌ "Here's the thing:" / "The bottom line:" / "Here's what no one tells you:"
✅ Just say the thing. Max 2–3 colons per entire post.

### Pattern 3 — The "most people" angle
❌ "Most people don't realize QR codes..." / "Most beginners think..."
✅ State the fact, or name the specific moment ("If you print a code smaller than about 2 inches, many phones struggle to scan it.").

### Pattern 4 — "It's not X, it's Y"
❌ "It's not just a barcode, it's a gateway."
✅ Make a direct statement. Maximum one of these per post.

### Pattern 5 — Suspiciously specific fake numbers
❌ "studies show QR scans convert 87% of the time" / "works on 100% of phones"
✅ Real, sourced figures only — or none. Tool content is full of invented stats; this is the #1 thing to catch. If you can't source it, cut it.

### Pattern 6 — Empty emphasis words
❌ "Powerful" / "Game-changing" / "Revolutionary" / "Unlock the power of QR"
✅ Replace with the specific effect. If you can't, delete the sentence.

### Pattern 7 — The wise-narrator / guru tone
❌ "Here's the truth no one talks about..." / "Let that sink in."
✅ Speak plainly and helpfully. Let the working steps and the honest framing carry the weight. (Warmth and reverence are welcome in the Bible cluster — as genuine care, not mystical filler.)

### Pattern 8 — Robotic data dumps / context-free walls
❌ A bare wall of 30 verses or 20 use-cases with no grouping and no sense of when to use them; a how-to that stops before the result is confirmed.
✅ Group the list, frame each group in a sentence, and end the how-to with a verification step. Vary the rhythm.

### The 60-second pre-publish check

- [ ] No setup-phrase colons ("Here's the thing:", "The bottom line:").
- [ ] No "No X. No Y. No Z." fragments.
- [ ] Nothing opens with "Most [people/beginners]".
- [ ] At most one "It's not X, it's Y" structure.
- [ ] No suspiciously precise numbers and no invented statistics or studies.
- [ ] No "powerful," "game-changing," "revolutionary" without a specific reason.
- [ ] Read it out loud. Would you say this to someone you were actually helping?

---

## PACING & RHYTHM CHECK

Variation, not pattern, signals a human writer:

- **Sentence length varies.** Mix punchy (5–10 words) with flowing (20–30 words). Three short sentences in a row is an AI tell.
- **Paragraphs vary.** A 4-sentence paragraph, then a 1-sentence paragraph, then a 3-sentence paragraph reads human.
- **The post has a job and gets to it.** Answer first (what this is, the result, how), then the steps / list / verses, then why it works, then the FAQ. Don't bury the payoff under a long preamble.
- **Breather lines after the dense parts.** A single short sentence after a long table or step list lets the reader catch up.

---

## STEP 1 — Identify the content type

Before writing, identify which type this is. See `page-structures-skill.md` for the full matrix. Quick reference:

| Content type | Job | Best for |
|---|---|---|
| 🛠️ Tool guide / how-to | Walk the reader through the task, end in a working result | "how to generate random phone numbers", "custom QR code generator guide", "how to scan a QR code" |
| 🔍 Explainer / "what is" | Define and explain the concept | "what is a random phone number generator", "understanding phone number formats", "jesus wept meaning" |
| 📋 Listicle / curated collection | A grouped, framed, curated list | "Bible verses about anxiety", "free QR code templates", "women of the Bible" |
| ⚖️ Decision / comparison / legality | Help the reader decide, honestly | "is it legal to use a random phone number generator", "burial vs cremation", "when to use X" |
| 🙏 Faith / scripture article | Answer a faith question with cited verses | "what does the Bible say about cremation", "forgiveness in the Bible" |

(Audience tuning — beginner, business owner, developer, faith reader — and angle tuning — free, printable, for-testing — are modifiers on a type, not separate types.)

The content type determines structure, length, intent, and snippet eligibility. All types output to a Markdown file → `content/blog/<slug>.md`.

---

## STEP 2 — Opening (the direct-answer blockquote)

The opening has two jobs, in order:

1. **Answer the query in 40–60 words**, inside a leading `> ` blockquote. Tell the reader what this is, the result they'll get, and how. Google's snippet bot scans the first ~155 chars; so does a skimming reader. Example: *"A QR code generator turns a link, text, or contact into a scannable square in seconds. Paste your URL, pick a size, download the PNG, and test it with your phone camera before you print. This guide walks through making one that actually scans, plus the three mistakes that break QR codes."*
2. **Give a reason to keep reading**, then orient. A reader with the gist still wants the steps, the table, or the verses. Place a relevant sibling or tool link near the top where it helps.

For opening patterns by type + intent, see `BLOG-INTRO-SWIPE.md`.

---

## STEP 3 — Heading skeleton

Plan `##`s before writing prose, from the type's skeleton in `page-structures-skill.md`. A good tool-guide skeleton: what it does → how to do it (numbered steps ending in a check) → choosing the format (table) → common mistakes → FAQ → CTA. A good curated-collection skeleton: how to use this → the grouped, framed entries → FAQ → CTA.

Each `##` is phrased as the thing it delivers, never "Section 1". Codify the heading list before writing prose.

---

## STEP 4 — Transitions & rehooks (web style)

Blogs rehook every 200–300 words via a *visual* event — sub-head, list, table, code block, blockquote, inline image. On a randomyl post, **the numbered steps, the grouped lists, the comparison tables, the code snippets, and the verse blocks are the scannability events.** A wall of prose with no list or table is a bounce. See `engagement-mechanics-skill.md`.

Between paragraphs use the but/therefore rule. "And then" is contraband. Every transition is a contrast (but, however), a consequence (therefore, so), or a question.

---

## STEP 5 — Content craft, terminology, and sourcing

For every step, entry, and load-bearing claim, craft and sourcing matter. See `content-craft-skill.md`, `accuracy-and-trust-skill.md`, and `research-and-citation-skill.md`. Quick rules:

- **Every step works and ends in a check.** A how-to that stops before the QR is scanned or the format is validated is incomplete. See `content-craft-skill.md`.
- **Cite load-bearing claims** to a reputable source: standards docs for specs (ISO/IEC 18004, ITU E.164, the NANP), .gov/.edu or named research for statistics, a reputable Bible source (translation named) for scripture. "QR error correction recovers up to ~30% of a damaged code (per the QR standard)" beats "QR codes basically never fail."
- **Correct terminology.** Static vs dynamic QR; E.164 vs NANP vs local format; translation names; PII vs "anonymous". See `content-craft-skill.md`.
- **Internal links** to 3–6 sibling posts in the same cluster, plus the tool the post supports. See `topical-authority-skill.md`.

---

## STEP 6 — Conclusion + CTA + FAQ section

The conclusion has three jobs:

1. **Synthesis.** Re-anchor the one practical takeaway (test before you print; pick E.164 for APIs; the verse that fits this moment). Not a recap.
2. **One action: the tool, or a sibling post.** "Ready to make one? Try the [random QR code generator](/tools/random-qr-code-generator)." or a link to a sibling in the same cluster. Never two CTAs.
3. **FAQ section in the body.** Add a `## Frequently asked questions` with 2–4 `###` questions drawn from People-Also-Ask. This lives in the body as prose, not a property, and does not emit FAQPage schema (that schema is an optional future enhancement). See `featured-snippet-skill.md`.

Full templates in `conclusion-and-cta-skill.md`.

---

## STEP 7 — Quality checklist

Before finalizing every post:

### Frontmatter:
- [ ] `title` front-loads the keyword, ≤ ~60 chars of the part that must survive in the SERP (it is the H1, `<title>`, og:title)
- [ ] `slug` kebab-case, equals the `content/blog/<slug>.md` filename
- [ ] `excerpt` is a short 1–2 sentence hook; `metaDescription` is a separate 150–160 char field (don't conflate them)
- [ ] `date` and `lastModified` set (ISO 8601); `author` set (default "Ugo Charles"); `tags` (1–4)
- [ ] `featuredImage` set if one exists
- [ ] No invented fields (no `metaTitle`, `readingTime`, `status`, or hand-written schema)

### Body:
- [ ] Body opens with the direct-answer `>` blockquote (no `#` H1 in the body — `title` owns it)
- [ ] Top sections use `##`, sub-sections `###`, no skips
- [ ] How-to steps are numbered, one action each, and end in a verification step
- [ ] Tables used for real comparisons/specs; code blocks for snippets; only valid Markdown
- [ ] FAQs are a `## Frequently asked questions` body section
- [ ] No semicolons, no stray ellipses, em dashes not used as a crutch
- [ ] No bracketed YouTube notation; no trailing meta commentary

### Content craft & terminology:
- [ ] Every step/entry is correct, actionable, and self-contained; lists grouped and framed
- [ ] Domain terms (static/dynamic QR, E.164/NANP, translation names, PII) used correctly

### Trust (E-E-A-T / the gate):
- [ ] Every instruction works and ends in a check; no broken or unsafe step
- [ ] Every load-bearing claim (spec, stat, scripture, legality) verified against a reputable source and cited; ranges where the truth varies; no fabricated facts or fake studies
- [ ] Real author byline ("Ugo Charles")
- [ ] Responsible framing: tools for legitimate use; legality as general information not advice; scripture exact with translation named

### Structure / scannability:
- [ ] A scannability event every 200–300 words (list, sub-head, table, code block, blockquote, image)
- [ ] Lists/comparisons are grouped, with each group framed in a sentence, and a real how-to where the type calls for it
- [ ] On-theme featured image with descriptive alt text

### SEO:
- [ ] Target query in: title, the answer blockquote, the first 100 words, one `##`, slug, image alt, and metaDescription
- [ ] 3–6 internal links to siblings in the same cluster, plus a link to the tool the post supports
- [ ] FAQ section answers 2–4 People-Also-Ask queries

### Word count (vs type target):
- [ ] Within ±20% of the type's target range (see `page-structures-skill.md`)

---

## STEP 8 — Automatic re-audit (mandatory)

After generating any post, the writer MUST run the re-audit before outputting.

### Re-audit process
1. Generate the complete draft (frontmatter + body).
2. STOP — do not output yet.
3. Scan against the Quality Checklist above.
4. Fix every violation.
5. Verify fixes did not introduce new issues.
6. Output the cleaned post + audit.

### Re-audit checklist (run automatically)

**Frontmatter scan:** all required keys present and correctly named (`title`, `slug`, `excerpt`, `metaDescription`, `date`, `lastModified`, `author`, `tags`, `featuredImage`); `metaDescription` 150–160 chars; no invented fields; no hand-written schema.

**Body scan:**
- Search for a `#` H1 in the body → remove or demote to `##` (the page H1 comes from `title`).
- Confirm any tabular content is a real Markdown table and any snippet is a fenced code block.
- Search for `;` → split into two sentences. Search for stray `...` → fix.
- Search for AI crutch phrases ("Here's the thing:", "The bottom line:", "Let that sink in", "Powerful", "Game-changing", "Revolutionary") → patch.
- Search for "Most [people/beginners]" at sentence start → rewrite.
- Search for `[B-ROLL:|VISUAL:|PAUSE|NARRATOR:]` → remove.
- Confirm every how-to sequence ends in a verification step.
- Confirm a `## Frequently asked questions` section exists where the type calls for it.

**Content craft & terminology scan:** every step correct/actionable/self-contained; lists grouped and framed; domain terms correct and consistent.

**Trust scan:** every instruction works; every load-bearing claim sourced or cut; no fabricated facts / fake statistics / invented studies; scripture exact with translation named; legality framed as general information not advice; tools framed for legitimate use.

**Structure scan:** no `#` H1 in body; `##` → `###` no skips; answer blockquote near the top; sibling + tool link present; scannability cadence.

### Audit output format

```
===AUDIT===
**Grounding highlights (SERP / PAA / sources used)**
- <bullet>

**Instructions & facts verified (N)**
- ✅ "<step/fact>" — works / matches cited source
- (or 🟡 ranged / ⚠️ corrected / ❌ cut)

**Patches applied (verification corrections)**
- <bullet>

**Trust signals satisfied (E-E-A-T / HCU / YMYL)**
- <bullet>

**Content craft & terminology check**
- <bullet>

**Slop & structure fixes**
- <bullet>

===POST===
[Frontmatter: title / slug / excerpt / metaDescription / date / lastModified / author / tags / featuredImage]

[Body as GFM: answer blockquote, headings, steps/list/table/verses, why-it-works, FAQ, CTA]

===END===
```

If the draft needed no fixes in a section, skip that section. If any load-bearing claim ended ❌ (or ⚠️ unresolved) — a fabricated study, a misquoted verse, a broken step, a legal absolute, a misuse framing — emit ONLY the audit with `❌ POST NOT SHIPPED — claims unverified / instructions broken` and skip the post.

---

## LONG-FORM POSTS (1,800+ WORDS)

LLMs degrade past ~3,500 words in one generation. For big posts (a comprehensive QR guide, a large "verses for every emotion" set):

1. **Outline first.** Write the `##`/`###` skeleton with a target word/entry count per section.
2. **Section-by-section drafting.** Each section gets its own focused generation. Include the full outline and the previous section's last 2–3 sentences for voice continuity.
3. **Consistency pass at the end.** Run a voice-consistency review across the joined draft.

---

## VARIETY ROTATION (mandatory)

Before drafting, consult `variety-rotation-skill.md`. After drafting, append a rotation log entry (to `protocols/rotation-log.md`, and to the audit — not the post body) so the next post avoids the same intro pattern, the same structure scheme, and the same conclusion shape. randomyl ships many similar posts within a cluster (QR how-tos, "Bible verses about X"); templated corpora read as templated, and that is a thin-content signal.

---

## USAGE

There are optional `/blog`, `/b-write`, and `/b-review` slash commands under `.claude/commands/`. The baseline is also a manual flow you run in chat:

```
# Manual flow
1. Load this pack into context.
2. Pick a topic/keyword and identify the content type + the tool it supports.
3. Run the Pass 1 grounding gather (WebSearch SERP/PAA + verify specs/scripture/legality).
4. Draft the post as a frontmatter block + GFM body.
5. Run the Pass 2 instruction + fact verification gate.
6. Run the mandatory re-audit and output the cleaned post + audit.
```

The commands wrap this: `/blog` loads the pack, `/b-write <topic>` gathers + drafts + audits and writes `content/blog/<slug>.md`, `/b-review <slug>` audits + fixes an existing post.

### What the writer does

1. Identify content type + intent + the supporting tool from the keyword.
2. Read the voice profile (`protocols/voice-profile.md` if present, else `protocols/site-voice-profile.md`).
3. Run the Pass 1 grounding gather (WebSearch/WebFetch) and collect real queries, the PAA, and any spec/scripture/legality sources.
4. Verify the brief is real (a way to make it non-generic, sources named), not guesses.
5. Plan the `##`/`###` skeleton.
6. Draft per pack rules as a frontmatter block + GFM body, with steps that work.
7. Run the instruction + fact verification pass (the hard gate).
8. Patch inline (literal swaps only).
9. Run the mandatory re-audit.
10. Output the cleaned post + audit.

---

**BlogOS** — pages that carry weight, and steps that actually work.
