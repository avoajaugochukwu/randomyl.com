---
name: title-meta-slug
description: The title artifacts every randomyl.com post has and how each one is different. In this project the frontmatter **`title`** is BOTH the on-page H1 AND the meta title (one field), **`metaDescription`** is the SERP snippet (150–160), and **`excerpt`** is the on-page hook — they are SEPARATE frontmatter keys. The **`slug`** is permanent. Lazy writers paste the same string everywhere; real writers tune the `title` for the SERP, write a distinct `metaDescription` that earns the click, and a warm `excerpt` that hooks the reader on the blog index.
---

# Title, Meta, Slug — the artifacts

> On most sites the H1 and the meta title are separate fields. On **randomyl they collapse**: the frontmatter **`title`** does double duty as the H1 *and* the meta title. But the description does NOT collapse — **`metaDescription`** (the SERP snippet, 150–160 chars) and **`excerpt`** (the on-page index-card hook) are **separate frontmatter keys**. Treat each piece with its own rules, knowing the `title` is doing two jobs at once.

---

## The artifacts at a glance

| Artifact | Lives in (frontmatter key) | Doubles as | Max length | Purpose |
|---|---|---|---|---|
| **Title** | `title` | On-page H1 **and** SERP/`<title>`/og:title | ≤ 60 chars (load-bearing part) | The heading the reader sees AND what Google shows in results |
| **Meta description** | `metaDescription` | SERP snippet + og:description | 150–160 chars | The snippet under the title in search results |
| **Excerpt** | `excerpt` | On-page index-card hook / dek only | ~1–2 sentences | The warm orienting line on the blog index (not the SERP) |
| **URL slug** | `slug` (= `content/blog/<slug>.md` filename) | — | ≤ 60 chars | The permanent URL |

There is **no separate `metaTitle` or og-title key** — the route derives `<title>`, canonical, OpenGraph, and Twitter from the **`title`** + **`metaDescription`**. Don't look for one; the single `title` field is both surfaces. The featured-image key is **`featuredImage`** (defaults to `/blog/<slug>.webp`, rendered via `next/image` at 800×500). Unlike the old Notion setup, **`lastModified` DOES exist** — it feeds `dateModified`/og:modifiedTime, alongside `date` (datePublished). Bump `lastModified` when you meaningfully update a post; track finer history via git.

> One existing-content note: keep every `metaDescription` in the full 150–160 band. When you touch any post, lengthen a short description to the band — see the Meta Description rules below.

---

## The title (H1 + meta title in one)

Because one key is both surfaces, the title has to satisfy two readers at once: the searcher scanning the SERP, and the person who just landed on the page wanting to get a task done with one of randomyl's tools.

### Rules

- **Load-bearing part ≤ 60 chars** — longer wraps badly on mobile and Google truncates the SERP title around 60. This is the binding constraint since the key is also the H1.
- **Front-load the target query** — the keyword goes near the start (good for the SERP) while still reading naturally (good for the lander).
- **No brand suffix** — do **not** append `| Randomyl`. There is no separate meta title to brand, and the suffix eats your 60-char budget.
- **Title Case or sentence case** — pick one for the site and stay consistent.
- **A modifier that signals what's inside** is welcome when it fits in 60 chars — a count, an audience (`for Beginners`, `for Testing`), a payoff (`Step by Step`, `That Actually Scan`, `Finding Peace in God's Word`).
- **Match the slug and metaDescription** — all three describe the same page and share the query.
- **Stay clear and direct.** This is Randomyl's plain, helpful, practical voice. "How to Generate Random Phone Numbers (Step by Step)" reads better than "Phone Number Randomization: A Methodology".

### Title patterns by content type

#### Pattern A — Tool guide / how-to ("How to X" → CTA to the matching tool)
```
How to Generate Random Phone Numbers (Step by Step)
Custom QR Code Generator: A Complete Guide
How to Scan a QR Code With Any Phone
```

#### Pattern B — Explainer / "what is" / "how it works"
```
What Is a Random Phone Number Generator and How Does It Work?
Understanding Phone Number Formats: E.164, NANP, and More
Jesus Wept: The Meaning of the Bible's Shortest Verse
```

#### Pattern C — Listicle / curated collection
```
Bible Verses About Anxiety: Finding Peace in God's Word
Free QR Code Templates for Flyers, Cards, and Menus
Women of the Bible: Stories of Strength, Courage, and Faith
```

#### Pattern D — Decision / comparison / legality (YMYL-adjacent)
```
Is It Legal to Use a Random Phone Number Generator?
When to Use a Random Phone Number Generator: A Guide
Free Fake Phone Number Generator for Testing
```

#### Pattern E — Audience- or tone-tuned variant (modifier on A/B)
```
QR Codes for Restaurants: Menus, Reviews, and Ordering
Random Phone Numbers for QA: A Tester's Guide
Bible Verses About Relationships: Love, Marriage, and Friendship
```

#### Pattern F — Pillar (topic hub)
```
QR Codes: The Complete Guide to Making, Scanning, and Using Them
```

### Title anti-patterns

- Stuffing: "QR Code QR Code Generator Free QR Codes Make a QR Code Online"
- All caps: "GENERATE A QR CODE RIGHT NOW — FREE"
- Vague: "Some Thoughts on Random Numbers"
- Brand-first or brand-suffixed: "Randomyl: How to Scan a QR Code" or "… | Randomyl" — no brand in the title at all.
- Over 60 chars in the load-bearing part (the audit catches this — it truncates the SERP title and bloats the H1).
- An H1 inside the body — the `title` already renders the page H1; the body starts at `##`.
- A claim the post can't deliver, or one that over-promises ("The QR Generator That Never Fails" — be honest; see `accuracy-and-trust-skill.md`). For phone/privacy/legality topics, no legal absolutes in the title.

### When to iterate the title

If a post ranks but doesn't get clicked, the title is the lever (it is your only SERP title). Try: adding a modifier (a count, `Step by Step`), restating a question as a claim or vice versa, or front-loading the query harder. Track CTR in Search Console.

---

## The meta description (the `metaDescription` field)

`metaDescription` is emitted as the meta description and og:description, shown as the SERP snippet under the title. It doesn't directly rank, but it drives click-through — so it has to sell the click in 150–160 characters, ideally with a nod to the tool payoff.

### Rules

- **150–160 chars** — Google truncates around 155 on desktop; aim for the upper band to use the space, but don't blow past 160.
- **Active verb in the first half** — "Generate random phone numbers in seconds for testing…" not "This article covers…".
- **Target query appears once**, naturally.
- **Specific, not abstract** — name the payoff: the formats covered, what the tool does, the use case, the audience.
- **No HTML, no Markdown** — plain text only.
- **Stands alone** — it should make sense in the SERP without the title above it.
- **Distinct from `excerpt`** — these are different keys shown in different places; don't paste the same string into both.
- **No absolutes on YMYL topics** — for legality/privacy, describe the safe use, never assert a legal certainty.

### Meta description patterns

#### Pattern A — Tool guide / how-to
```
Generate random phone numbers in seconds for app testing, demos, and QA. Learn valid E.164 and NANP formats, when fake numbers are fine, and how to do it safely.
```

#### Pattern B — Explainer / how it works
```
A random phone number generator builds valid-looking numbers for testing and demos. See how it works, what makes a number valid, and where it's the right tool to reach for.
```

#### Pattern C — Listicle / curated collection
```
Find peace with Bible verses about anxiety, grouped by what you're facing. Each verse is quoted in full with its translation named, plus a short note on what it means.
```

#### Pattern D — Decision / comparison / legality
```
Is it legal to use a random phone number generator? Usually yes for testing and demos, not for fraud. Here's how the law treats fake numbers, with the safe-use lines drawn.
```

### Meta description anti-patterns

- Starts with "In this article, we will…".
- Duplicates the title verbatim (wastes the snippet).
- Generic: "Learn everything about QR codes."
- Promises something the post doesn't deliver, or asserts a legal/health absolute.
- Under 150 or over 160 chars.

---

## The excerpt (on-page index-card hook)

The `excerpt` is the warm 1–2 sentence hook shown on the blog index card (and in post listings), *not* the SERP snippet. It's where Randomyl's plain, helpful voice gets to orient the reader — clear, practical, never salesy.

### Rules

- **1–2 sentences**, friendly and inviting.
- **Talk to the reader** ("you", "your"). Direct and helpful, never hype.
- **Include the primary keyword once**, naturally.
- **Don't just repeat the `metaDescription`** — this one can be warmer and more conversational since it's read on the index page, not in a results list.
- **Write one** — a good hook lifts click-through from the blog index.

Example for "how to generate random phone numbers":

> "Need a batch of phone numbers that look real but aren't? This walks you through generating random phone numbers for testing, demos, and QA — in the right formats, without breaking any rules."

---

## The URL slug

The slug is **permanent**. Changing it after publish requires a 301 redirect and loses some SEO equity. Get it right the first time.

### Rules

- **Kebab-case:** `how-to-generate-random-phone-numbers`, never `How_To_Generate_Numbers` or `howToGenerate`.
- **Front-load the keyword:** `custom-qr-code-generator-guide` not `make-a-qr-code-the-easy-way`.
- **Drop stop words unless load-bearing:** `how-to-scan-qr-code` beats `the-easiest-way-to-scan-a-qr-code`. Keep words that change meaning or are part of the query.
- **No dates** — track freshness via the `lastModified` frontmatter field; keep the slug evergreen and update the body over time.
- **No numbers** unless the number is core (a count that *is* the query).
- **No filler suffixes** in general (`-article`, `-post`) — but a short descriptive tail (`-guide`) is fine and is used across this site (`custom-qr-code-generator-guide`).
- **No leading/trailing hyphens. All lowercase. Under 60 chars** ideally, under 80 max. (Some real slugs run long — `women-of-the-bible-stories-of-strength-courage-and-faith` — keep new ones tighter where you can.)

### Slug patterns by content type

| Content type | Slug pattern | Example |
|---|---|---|
| Tool guide / how-to | `how-to-<task>` / `<tool>-guide` | `how-to-generate-random-phone-numbers` |
| Tool guide (named tool) | `custom-<tool>-generator-guide` | `custom-qr-code-generator-guide` |
| Explainer / "what is" | `what-is-a-<thing>-and-how-does-it-work` / `understanding-<thing>` | `understanding-phone-number-formats` |
| Listicle / collection | `<topic>-about-<theme>` / `free-<thing>-templates-<uses>` | `bible-verses-about-anxiety` |
| Decision / legality | `is-it-legal-to-<action>` / `when-to-use-<tool>-guide` | `is-it-legal-to-use-a-random-phone-number-generator` |
| Faith / scripture | `<verse>-bible-verse-meaning` / `<topic>-in-the-bible` | `jesus-wept-bible-verse-meaning` |
| Pillar (hub) | `<topic>` (root term) | `qr-codes` |

### When to change a slug

Almost never. If you must:

1. Add a 301 redirect from old to new in `next.config.mjs`.
2. Update all internal links from old slug to new slug (grep `content/blog/` for the old `/blog/<slug>` href).
3. Update the sitemap.

Cost of a slug change: 1–3 months of partial ranking dilution. Don't do it casually.

---

## Target query placement

The target query should appear in:

1. **`title`** (verbatim or close, front-loaded — covers both the H1 and the meta title).
2. **`metaDescription`** (once, naturally — the SERP snippet).
3. **`slug`** (verbatim or close, front-loaded).
4. **First paragraph** of the body — i.e. the leading **`>` blockquote** answer (within the first ~100 words).
5. **At least one `##` heading** (verbatim or close).
6. **`featuredImage` alt / surrounding text** (naturally, if it fits).

Do this naturally; don't stuff. If the query is "how to scan a QR code" and a `##` heading reads "How to scan a QR code on iPhone," that repetition is fine.

---

## Brand placement

- **Site name** in `title`: no — there is no separate meta title to carry it.
- **Site name** in `slug`: no.
- **Site name** in `metaDescription`/`excerpt`: only if it genuinely adds credibility. Usually skip it.

---

## Reuse and consistency

Across the site:

- **Capitalization consistency** — pick title case or sentence case for titles and stick to it.
- **Slug pattern consistency** — within a content type, slugs follow the same pattern (see the table).
- **Query consistency** — the `title`, `metaDescription`, and `slug` all describe the same page and share the target query.
- **Voice consistency** — plain, helpful, practical (~grade 7); no stiff or salesy language (see `protocols/site-voice-profile.md`).

---

## The audit

The pre-publish audit checks the four artifacts:

- [ ] **`title`** set, load-bearing part ≤ 60 chars, includes the target query, no brand suffix, no H1 duplicated in the body.
- [ ] **`metaDescription`** set, 150–160 chars, includes the target query, no "in this article" preamble, not a verbatim copy of the `title`, no legal/health absolutes on YMYL topics.
- [ ] **`excerpt`** set as a warm on-page index-card hook, distinct from `metaDescription`.
- [ ] **`slug`** kebab-case, no dates, front-loaded query; matches the `content/blog/<slug>.md` filename.
- [ ] All artifacts include the target query (verbatim or close paraphrase) and describe the same page.
- [ ] No phantom keys relied on (no separate `metaTitle`/`ogTitle`, no `readingTime`, no `status`) — use `title`, `metaDescription`, `excerpt`, `slug`, `featuredImage`, `date`, `lastModified`, `author`, `tags`.

---

**BlogOS** — get the artifacts right, earn the click, route to the tool.
