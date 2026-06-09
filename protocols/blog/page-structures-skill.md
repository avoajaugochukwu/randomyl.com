---
name: page-structures
description: The content types randomyl.com ships. Every post is a Markdown file at content/blog/<slug>.md (YAML frontmatter parsed by gray-matter in lib/posts.ts) rendered by app/blog/[slug]/page.tsx + components/MarkdownRenderer.tsx (H1 from the frontmatter title; body = full GitHub-Flavored Markdown — headings, lists, blockquotes, tables, fenced code, images all render; the leading blockquote is the answer box). The five types — 🛠️ tool guide/how-to, 🔍 explainer, 📋 listicle/curated collection, ⚖️ decision/comparison/legality, 🙏 faith/scripture article — each have a frontmatter shape, a body skeleton, and a word-count band. Pick the type from the keyword's intent before writing. Audience/tone tuning (beginner, business, developer, faith reader) is a modifier, not a separate type.
---

# Page Structures — The randomyl Content Types

> randomyl renders every blog post through **one** pipeline: a Markdown file at `content/blog/<slug>.md` (YAML frontmatter + GFM body) is read by `lib/posts.ts` (via `gray-matter`); `app/blog/[slug]/page.tsx` renders the `<h1>` from the **title** frontmatter field and the body through `components/MarkdownRenderer.tsx`. That renderer runs `react-markdown` + `remark-gfm` + `rehype-highlight`, so the body is **full GitHub-Flavored Markdown**: `##`/`###` headings, `- `/`1.` lists, `> ` blockquotes, **tables**, fenced **code blocks** (syntax-highlighted), images (`next/image`), and links (external auto-`target=_blank`) all render. The only hard body rule is **no `#` H1** — the frontmatter `title` is the page's single H1. The "shape" of a post is the body skeleton you choose.

Pick the type from the keyword's search intent. The value drives word count and snippet strategy. Every instruction is correct and reproducible (`content-craft-skill.md`) and every load-bearing claim is sourced (`accuracy-and-trust-skill.md`).

---

## What carries structure

Because the body is full Markdown, the structural elements are native:

- **Answer box** → a **leading `> ` blockquote** near the top of the body (right after the optional featured image). This is the featured-snippet target and the orienting 40–60-word answer.
- **CTA / cross-link** → a normal inline **link** to the tool this post supports (`/tools/<tool>`) or a sibling post in the same cluster (`/blog/<sibling-slug>`), placed in the conclusion.
- **Tip / note** → a **`> ` blockquote** or a bold lead-in line in a paragraph ("**Before you print:** test the scan").
- **Comparison / spec** → a **Markdown table** (it renders — use it for real comparisons and format references).
- **Code / embed** → a **fenced code block** (renders + highlights — use it for HTML/JSON/CLI snippets).

Everything else is `##` / `###` headings, paragraphs, lists, and images.

---

## Type index

| Type | Intent | Word count | Snippet play |
|---|---|---|---|
| 🛠️ Tool guide / how-to | "how to X" → do the task the tool does | 1,200–2,000 | Answer blockquote + numbered steps |
| 🔍 Explainer / "what is" | "what is X / how does X work" → understand it | 1,000–1,800 | Answer blockquote + definition + table |
| 📋 Listicle / curated collection | "X for Y / best X / list of X" → grouped list | 1,500–2,500 | Answer blockquote + grouped list |
| ⚖️ Decision / comparison / legality | "is X legal / X vs Y / when to use X" → decide | 1,200–2,000 | Answer blockquote + comparison table |
| 🙏 Faith / scripture article | "what does the Bible say about X" → cited verses + meaning | 1,200–2,200 | Answer blockquote + verse blocks |

All types output to a Markdown file → `content/blog/<slug>.md`. They share the universal rules at the bottom.

---

## Frontmatter contract (all types)

The pipeline reads these YAML keys (see `lib/posts.ts`). Don't invent fields.

```yaml
---
title: "How to Generate Random Phone Numbers (Free, Step by Step)"
slug: "how-to-generate-random-phone-numbers"
excerpt: "A short 1–2 sentence on-page hook (shown on the blog index card)."
metaDescription: "150–160 char SERP description, SEPARATE from excerpt."
date: "2025-03-02T15:35:00.000Z"
lastModified: "2025-05-03T22:02:00.000Z"
author: "Ugo Charles"
tags: ["phone numbers", "tools"]
featuredImage: "/blog/how-to-generate-random-phone-numbers.webp"
---
```

Field notes:

- `title` — serves as **both** the H1 and the `<title>` / og:title. There is one title field; there is no `metaTitle`. Front-load the keyword; keep the load-bearing part ≤ ~60 chars. Do **not** repeat it as a heading at the top of the body.
- `excerpt` — a short 1–2 sentence on-page hook.
- `metaDescription` — a **separate** 150–160 char SERP description. Don't conflate it with `excerpt`. (Some existing posts have this truncated — fix to a full line when you touch them.)
- `date` / `lastModified` — ISO 8601. `date` is the publish date (`datePublished` / og:publishedTime); `lastModified` is the update date (`dateModified` / og:modifiedTime). **`lastModified` is a real field** — bump it on meaningful updates.
- `author` — the byline. Default **"Ugo Charles"**.
- `tags` — 1–4 short topical tags (e.g. `phone numbers`, `tools`).
- `featuredImage` — path under `public/`; defaults to `/blog/<slug>.webp` if omitted.

There is **no `readingTime` field** (auto-computed at ~200 wpm) and **no `status` field** (a file in `content/blog/` is published; the route is static via `generateStaticParams` + `dynamicParams = false`). The route **auto-emits `BlogPosting` JSON-LD** and all meta tags from this frontmatter — don't hand-write schema. `FAQPage` / breadcrumb schema are **not** wired, so FAQ content lives in the body as prose. See `seo-and-schema-skill.md`.

---

## Type 1 — 🛠️ Tool guide / how-to ("How to X")

**The core type for the tools.** Rank the "how to X" query, walk the reader through the task the matching generator does, and send them to the tool.
**Word count:** 1,200–2,000.

### Body skeleton (no `#` H1 — rendered from `title`)

```
![A phone screen showing a generated number in international format](/blog/<slug>.webp)

> A random phone number generator creates realistic, correctly formatted numbers
> that aren't tied to a live line — handy for testing forms, demos, and keeping your
> real number private. This guide shows how to generate one in a few clicks, the
> formats to choose, and the mistakes that produce invalid numbers.

## What a random phone number generator does
[2–4 sentences, accurate: format-valid, unassigned numbers; for testing/privacy, not a live line.]

## How to generate a random phone number (step by step)
1. Open the generator and choose a country/format.
2. Pick how many numbers you need.
3. Generate — the numbers appear instantly.
4. Copy them, or download as a list.
5. **Verify** the format fits where you'll use it (E.164 for APIs, local for a form demo).
[Each step: one action + its result. End on a verification step.]

## Choosing the right format
| Format | Looks like | Use it for |
|---|---|---|
| E.164 (international) | +14155550123 | APIs, validation, storage |
| National | (415) 555-0123 | US-facing form demos |
| Local | 555-0123 | quick UI mockups |

## Common mistakes (and fixes)
[Invalid area codes, wrong length, using a real number by accident — and how to avoid each.]

## Frequently asked questions
### Are these numbers real?
### Can I receive a text on a generated number?
...

[One-line CTA → the tool: "Ready to make some? Try the **random phone number generator**."]
```

The real how-to, the format table, and the mistakes section are what make this non-generic. A bare "click generate" post ships as thin content. Every step must be correct and end in a check (`content-craft-skill.md`).

---

## Type 2 — 🔍 Explainer / "what is" / "how it works"

**Define and explain the concept** behind a tool or topic. "what is a random phone number generator and how does it work", "understanding phone number formats", "jesus wept bible verse meaning". The organizing principle is *understanding*, not *doing*.
**Word count:** 1,000–1,800.

### Body skeleton

```
![diagram of how a QR code stores data](/blog/<slug>.webp)

> A QR code is a square barcode that stores data — a link, text, Wi-Fi details, or a
> contact — that a phone camera reads in an instant. Here's how it actually encodes
> that data, why some codes scan and others fail, and where the technology is headed.

## What it is (in plain terms)
[Define the concept clearly. SOURCE the load-bearing technical claim.]

## How it works
[The mechanism, with a worked example or a simple table. Accurate to the standard.]

## Why it matters / where it's used
[Concrete, real use-cases.]

## The limits (honest)
[What it can't do, where it breaks. Builds trust.]

## Frequently asked questions
### Do QR codes expire?
...

[CTA → the relevant tool, or a how-to sibling so the reader can act on the understanding.]
```

Source the explanation responsibly — no invented specs, no "rewires/never fails" overclaims. See `accuracy-and-trust-skill.md`.

---

## Type 3 — 📋 Listicle / curated collection

**A grouped, framed, curated list.** "Bible verses about anxiety", "free QR code templates for flyers cards menus", "women of the Bible". Each entry earns its place; the grouping and framing are the original value.
**Word count:** 1,500–2,500 (long lists are long — outline and draft in sections, see master §LONG-FORM).

### Body skeleton

```
![soft image on theme](/blog/<slug>.webp)

> When anxiety keeps you up, Scripture can be a steadying place to turn. These [N]
> Bible verses about anxiety are grouped by what you might need — trusting God,
> casting your cares, the peace that guards you — each quoted in full with its
> reference, so you can read the verse and sit with what it says.

## How to use this list
[Short, practical: how to read, save, or pray these. 60–120 words.]

## Verses about trusting God with worry
> *Do not be anxious about anything... (Philippians 4:6–7, NIV)*
[Each entry: exact quote, reference, translation named, one sentence of plain context.]

## Verses about casting your cares
...

## Verses about the peace that guards you
...

## Frequently asked questions
### What is the most comforting Bible verse for anxiety?
...

[CTA → /tools/random-bible-verse-generator, or a sibling Bible post.]
```

The grouping + the framing + the exact, sourced entries are what make this non-generic. A bare wall of 30 items is the thin-list trap (`google-trust-audit-skill.md`). For scripture, quote exactly and name the translation (`content-craft-skill.md`, `accuracy-and-trust-skill.md`).

---

## Type 4 — ⚖️ Decision / comparison / legality (YMYL-adjacent)

**Help the reader decide, compare, or understand legality/ethics/safety.** "is it legal to use a random phone number generator", "burial vs cremation Bible guide", "when to use a random phone number generator". The value is a fair, honest verdict the reader can act on.
**Word count:** 1,200–2,000.

### Body skeleton

```
![image on theme](/blog/<slug>.webp)

> Using a randomly generated phone number is legal for legitimate purposes — testing,
> demos, and protecting your real number. It crosses the line when it's used to
> deceive, spam, or evade verification you're required to pass. Here's where the
> line actually sits, and how to stay on the right side of it.

## The short answer
[Lead with the verdict, honestly hedged. Then explain.]

## When it's fine
[Legitimate use-cases, concrete.]

## When it isn't
[The misuse cases — fraud, spam, harassment — named plainly.]

## [Comparison, where the type calls for it]
| Option | Pros | Cons | Best for |
|---|---|---|---|
[A fair, parallel comparison table.]

## A note on the law
[General information, not legal advice; varies by jurisdiction; cite a real authority.]

## Frequently asked questions
### Can I get in trouble for using a fake number?
...

[CTA → the tool, or a sibling.]
```

No legal absolutes; cite a real authority; add the general-information-not-legal-advice note; frame the tools for legitimate use only (`accuracy-and-trust-skill.md`).

---

## Type 5 — 🙏 Faith / scripture article

**Bible-cluster prose** answering a faith question. "what does the Bible say about cremation/tattoos", "forgiveness in the Bible", "bible verses about relationships". Each verse is quoted **exactly**, referenced correctly, with the **translation named**.
**Word count:** 1,200–2,200.

### Body skeleton

```
![soft, light-themed image](/blog/<slug>.webp)

> The Bible doesn't address cremation directly, but it speaks clearly about the body,
> burial, and the resurrection. This article walks through what Scripture does and
> doesn't say, the verses people point to on each side, and how Christians across
> traditions have understood it.

## What the question is really asking
[Frame it honestly and charitably.]

## What Scripture says
> *exact verse... (Reference, TRANSLATION)*
[Quote exactly, then plain-language explanation. Never paraphrase-as-quote.]

## How Christians have understood it
[Represent the range fairly; attribute views; don't overreach beyond the text.]

## Frequently asked questions
### Is cremation a sin in the Bible?
...

[CTA → /tools/random-bible-verse-generator, or a sibling Bible post.]
```

Scripture accuracy is a hard gate: exact wording, correct reference, translation named, respectful framing grounded in the cited text (`accuracy-and-trust-skill.md`).

---

## Audience & tone modifiers (not separate types)

Posts for a specific audience (a beginner, a business owner, a developer, a faith reader) or a specific angle (free/budget, privacy-first, printable) are a **modifier on a type**, usually Type 1, 3, or 4:

- **Audience modifier** — shift the examples, the assumed knowledge, and the register to that reader. "Custom QR code generator guide" for a small-business owner keeps the steps simple and design-focused; a developer-leaning QR post can show the embed code. Keep every unit correct.
- **Angle modifier** — "free", "printable", "for testing" change the framing and examples, not the skeleton. A "free QR code templates" post is still a curated collection underneath.

The structure stays the type's structure; the modifier changes the voice and examples, not the skeleton.

---

## Choosing the type

1. **Read the keyword's intent.** "how to X" → 🛠️ tool guide. "what is X / how does X work" → 🔍 explainer. "X for Y / best X / templates" → 📋 listicle. "is X legal / X vs Y / when to use X" → ⚖️ decision. "what does the Bible say about X / verses about X" → 🙏 faith (or 📋 if it's primarily a verse list).
2. **Check the SERP.** If the top results are step guides, write a tool guide and beat them on a real how-to, a format table, and a mistakes section. If they're thin lists, write a curated collection and beat them on grouping and sourced entries.
3. **When ambiguous, ask the operator** — or default to the tool guide for tool-anchored queries and the curated collection for "X for Y" queries.

---

## Heading hierarchy (universal, non-negotiable)

- H1 lives in the **`title`** frontmatter field only. **Never in the body.** The route renders the H1. Don't use `#` — top sections are `##`, sub-sections `###`, sub-sub `####`.
- Body starts with content (often the featured image), then the **answer `>` blockquote**, then `##` sections.
- `##` → `###`, no skips.

See `scannable-formatting-skill.md` for the full discipline.

---

## Voice (universal)

All types share:

- Clear, practical, trustworthy prose (~grade 7). "Test the scan before you print" beats "unlock the power of QR." Warm and reverent for the Bible cluster.
- Correct, reproducible instructions and correct terminology, every time (`content-craft-skill.md`).
- Claims that verify, specs that match the standard, and scripture that's accurate, always (`accuracy-and-trust-skill.md`).
- One CTA per post — to the tool the post supports, or a sibling in the same cluster.
- No hype, no "powerful / game-changing" without a reason.
- Responsible framing: tools for legitimate use; legality as general information, not advice.

See `protocols/site-voice-profile.md` (and `protocols/voice-profile.md` if a site-wide lock has been built) for the randomyl voice.

---

**BlogOS** — content types that give the reader a working result and the tool to do it again.
