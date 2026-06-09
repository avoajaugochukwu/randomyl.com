---
name: seo-and-schema
description: On-page SEO discipline for randomyl.com's tool guides, explainers, curated lists, comparison/legality pieces, and faith/scripture articles — plus an honest account of the Schema.org JSON-LD this route ALREADY ships. Covers the on-page artifacts the route emits automatically (title, meta description, canonical, hreflang, OpenGraph, Twitter, AND BlogPosting JSON-LD), the URL slug rules, and the structured-data types (FAQPage, BreadcrumbList) that WOULD help but are not wired today. This is the file that turns a well-written post into an indexable, internal-link-discoverable web page that routes the reader to the matching generator.
---

# SEO & Schema — the page Google can rank

> A post can be perfectly written and never rank if Google can't parse it, can't crawl it, or can't trust it. This skill is the layer between the prose and the search index. On randomyl.com the route emits clean metadata — title, meta description, canonical, hreflang, OpenGraph, Twitter — **and `BlogPosting` JSON-LD** automatically from the Markdown frontmatter. Your job is NOT to hand-write any of that. It's to feed the route clean frontmatter and to write the body so it earns snippets and internal-link discovery on top of the structured data that already ships.

---

## What the page actually emits (read this first)

Posts are **Markdown files** at `content/blog/<slug>.md` with YAML frontmatter, parsed by `gray-matter` in `lib/posts.ts` and rendered by `components/MarkdownRenderer.tsx` through `app/blog/[slug]/page.tsx`. There is **no Notion, no migrate script, no `content/posts/*.json`** — a file existing in `content/blog/` IS published (the route uses `generateStaticParams` + `dynamicParams = false`). The blog index reads the same files via `lib/posts.ts`.

The route's `generateMetadata` emits a **full metadata set**, and the route component emits **`BlogPosting` JSON-LD**. So the writer does **not** author schema or meta tags by hand — you feed clean frontmatter and rely on the route.

Auto-emitted, per post, with zero extra work:

- **`<title>`** = the frontmatter **`title`** (which is *also* the page H1 — one field does both)
- **`<meta name="description">`** = the frontmatter **`metaDescription`**
- **`metadata.alternates.canonical`** = `https://randomyl.com/blog/<slug>` (canonical **is** emitted — you never set it by hand)
- **hreflang, OpenGraph (`og:title`/`og:description`/`og:url`/`og:image`/`og:publishedTime`/`og:modifiedTime`), and Twitter card** — all derived from the frontmatter
- **`BlogPosting` JSON-LD** — emitted on every post (see the Schema section)

**Not emitted today:** FAQPage, BreadcrumbList, HowTo, ItemList. Treat those as **optional future** enhancements — see the OPTIONAL section. Never claim FAQPage or breadcrumb rich results ship; they don't. Everything else above does.

---

## The Markdown frontmatter (the SEO-relevant keys)

Posts carry **YAML frontmatter** — the exact keys `lib/posts.ts` reads. The ones that matter for SEO:

| Frontmatter key | Maps to | Max length | Purpose |
|---|---|---|---|
| **`title`** | The page `<h1>` **and** `metadata.title` → `<title>`/og:title and SERP | ≤ 60 chars (load-bearing part) | The heading the reader sees AND what Google shows |
| **`metaDescription`** | `metadata.description` → `<meta name="description">` and og:description | 150–160 chars | The SERP snippet under the title |
| **`slug`** | the filename `content/blog/<slug>.md` → path `/blog/<slug>` | ≤ 60 chars | Permanent, indexable URL |
| **`excerpt`** | on-page hook / index-card dek (not the SERP snippet) | ~1–2 sentences | The warm orienting line |
| **`featuredImage`** | `/blog/<slug>.webp` (default) → og:image + JSON-LD image | — | Social/preview image |
| **`date`** | datePublished / og:publishedTime | ISO 8601 | Publish date |
| **`lastModified`** | dateModified / og:modifiedTime | ISO 8601 | Last meaningful update — bump it |
| **`author`** | byline + JSON-LD author Person (default "Ugo Charles") | — | Named author |
| **`tags`** | JSON-LD `keywords` | — | 1–4 topical tags |

**Key consequence of this site's setup:** the **`title`** does double duty as both H1 and meta title, so write a title that works in both the SERP and on the page (keep the load-bearing part ≤ ~60 chars). The **`metaDescription`** is its own key — distinct from **`excerpt`**, which is the on-page hook shown on the blog index card. There is **no separate `metaTitle`** — the one `title` field is both surfaces.

**The body must NOT contain its own H1.** The page H1 renders from the frontmatter `title` in `app/blog/[slug]/page.tsx`. Start the body with content — typically the answer blockquote (see `featured-snippet-skill.md`), optionally a featured image above it. Top-level body sections start at **`##`**; sub-sections at `###`. Never skip a heading level, and never put a `#` H1 in the body.

See `title-meta-slug-skill.md` for the full title / metaDescription / excerpt / slug rules. This skill assumes those are set.

---

## URL slug discipline

The slug is permanent — it's the frontmatter **`slug`**, the `content/blog/<slug>.md` filename, and the `/blog/<slug>` path. Changing it later breaks every inbound link and shuffles your SEO equity. Get it right the first time.

### Rules

- **Kebab-case.** `how-to-generate-random-phone-numbers` not `How_To_Generate_Phone_Numbers` or `howToGenerate`.
- **Front-load the keyword.** `custom-qr-code-generator-guide` beats `the-best-way-to-make-a-qr-code`.
- **Drop stop words unless load-bearing.** `how-to-scan-qr-code` beats `the-easiest-way-to-scan-a-qr-code-with-your-phone`.
- **No dates in the slug.** `2026-qr-code-templates` ages out and forces a yearly redirect. Track freshness via the `lastModified` frontmatter field and git, not a slug year.
- **No numbers in the slug unless they're the point.** A count is fine when the count is genuinely the set size; if the count later changes, the slug lies.
- **No filler.** No "the", "a", "an" unless the title doesn't parse without it.
- **No trailing words.** Don't end with `-post` or `-article` as filler. (A descriptive tail like `-guide` is fine when it's meaning — `custom-qr-code-generator-guide` is the canonical real slug.)
- **No special characters.** Hyphens only. No underscores, no en-dashes, no emoji.
- **Match the target query.** If the target query is "is it legal to use a random phone number generator", the slug front-loads it (`is-it-legal-to-use-a-random-phone-number-generator`), not `phone-number-laws-explained`.

### Slug examples

| Target query | Good slug | Bad slug |
|---|---|---|
| "how to generate random phone numbers" | `how-to-generate-random-phone-numbers` | `the-complete-guide-to-fake-phone-numbers-2026` |
| "custom QR code generator" | `custom-qr-code-generator-guide` | `everything-about-making-qr-codes` |
| "bible verses about anxiety" | `bible-verses-about-anxiety` | `scripture-to-calm-you-down-fast` |
| "is it legal to use a random phone number generator" | `is-it-legal-to-use-a-random-phone-number-generator` | `phone-number-laws-the-easy-way` |
| "how to scan a QR code" | `how-to-scan-qr-code` | `scanning-qr-codes-made-simple-2026` |

---

## Meta title rules (the `title` field)

The `title` is both your H1 and your `<title>`/SERP title, so it has to earn its place in search results while still reading well as a page heading.

- Load-bearing part ≤ ~60 chars (Google truncates at ~580 pixels, ~60 chars in most fonts) — the binding constraint since the field is also the H1
- Target query front-loaded
- A modifier that signals depth or value: a count, `Step by Step`, `for Beginners`, `That Actually Scan`, `Finding Peace in God's Word`
- Title case
- No clickbait the post can't deliver
- No brand suffix — a `| Randomyl` suffix eats your 60-char budget; skip it

Examples (matching real posts on the site):

- `How to Generate Random Phone Numbers (Step by Step)`
- `Custom QR Code Generator: A Complete Guide`
- `Bible Verses About Anxiety: Finding Peace in God's Word`

> Note: when you touch a post, make the `metaDescription` a full 150–160 chars — short descriptions waste SERP real estate and cost click-through.

---

## Meta description rules (the `metaDescription` field)

`metaDescription` becomes the `<meta name="description">` and feeds og:description. It doesn't directly influence ranking — but it drives click-through, which does. (The visible hook on the index card is the separate **`excerpt`** field; keep them distinct so the page doesn't read the same line twice.)

- **150–160 chars** (the sweet spot — shorter wastes the SERP real estate, longer gets truncated)
- Active verb in the first half
- Target query somewhere in it
- Ends on an implicit "what they'll get if they click" — and where it fits, the tool payoff
- Never starts with "In this article, we will…"
- Never duplicates the `title` verbatim — they sit one above the other in the SERP

Example for "how to generate random phone numbers":

> "Generate random phone numbers in seconds for app testing, demos, and QA. Learn valid E.164 and NANP formats, when fake numbers are fine, and how to do it safely."

In the 150–160 band, leads with the action, names what's inside, ends on a value promise.

---

## Canonical tag — automatic

You do **not** set the canonical. `generateMetadata` in `app/blog/[slug]/page.tsx` sets `alternates.canonical` to `https://randomyl.com/blog/<slug>` for every post. The host is **randomyl.com**, so a post with slug `how-to-generate-random-phone-numbers` canonicalizes to:

```
https://randomyl.com/blog/how-to-generate-random-phone-numbers
```

There is no `canonical` frontmatter key and no need for one. If you ever syndicate a post elsewhere, the canonical already points at your version — nothing to configure. This is part of the SEO plumbing the route ships for free, alongside hreflang, OpenGraph, Twitter, and the BlogPosting JSON-LD below.

---

## Schema / JSON-LD — `BlogPosting` SHIPS; FAQPage + breadcrumb do NOT

**`BlogPosting` JSON-LD is emitted automatically on every post.** `app/blog/[slug]/page.tsx` builds it from the frontmatter and renders a `<script type="application/ld+json">`. **Do not hand-write it, and do not duplicate any JSON-LD or meta tags in the body** — the body is GFM Markdown, not a place for `<script>` (and raw HTML doesn't render anyway). Rely on the shipped schema; feed it clean frontmatter.

What `BlogPosting` already carries, per post (host `randomyl.com`):

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "<title>",
  "description": "<metaDescription>",
  "datePublished": "<date, ISO>",
  "dateModified": "<lastModified, ISO>",
  "url": "https://randomyl.com/blog/<slug>",
  "author": { "@type": "Person", "name": "<author, default 'Ugo Charles'>" },
  "publisher": {
    "@type": "Organization",
    "name": "Randomyl",
    "url": "https://randomyl.com",
    "logo": { "@type": "ImageObject", "url": "https://randomyl.com/opengraph-image" }
  },
  "keywords": "<tags joined>",
  "image": { "@type": "ImageObject", "url": "https://randomyl.com<featuredImage>" }
}
```

Because this is wired and correct, your only schema responsibility is **frontmatter hygiene**: a clean `title`, a full 150–160 `metaDescription`, accurate `date`/`lastModified`, the right `author`, sensible `tags` (they become `keywords`), and a real `featuredImage`. Get those right and the structured data is right.

### OPTIONAL future enhancements (NOT shipping — never claim they do)

The types below are **recommendations**, not reality. Adding any means editing `app/blog/[slug]/page.tsx` to emit an additional `<script type="application/ld+json">`. Do **not** describe them to anyone as shipping, and do not add a frontmatter key expecting them to render — nothing reads it.

#### FAQPage (high-value content add)

Best paired with the body's `## Frequently asked questions` section (a `##` heading + `###` questions — see `featured-snippet-skill.md`). To emit it honestly, the answer text in the JSON-LD must match the visible answer word-for-word.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it legal to use a random phone number generator?",
      "acceptedAnswer": { "@type": "Answer", "text": "<answer, plain text, 40-60 words, matching the visible answer>" }
    }
  ]
}
```

How you'd wire it: parse the FAQ `##` section and its `###`/paragraph pairs out of the Markdown body in `page.tsx`, and emit JSON-LD built from the same source so visible and structured stay in sync. Until that exists, the FAQ section still earns People Also Ask placement on its own — write it regardless.

#### BreadcrumbList (cheapest add)

Home → Blog → this post. Pure derived data — built from the slug + title in `page.tsx`. Breadcrumbs render under the title in the SERP and lift CTR, which makes this the cheapest high-value win once you start wiring more schema.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://randomyl.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://randomyl.com/blog" },
    { "@type": "ListItem", "position": 3, "name": "<title>", "item": "https://randomyl.com/blog/<slug>" }
  ]
}
```

#### ItemList (curated-list posts)

For a curated collection ("Bible verses about anxiety", "free QR code templates") you might emit an `ItemList` of the entries. This needs you to parse the list items out of the Markdown body, so it's more work than the BlogPosting that already ships.

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "numberOfItems": "<N>",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Philippians 4:6-7" },
    { "@type": "ListItem", "position": 2, "name": "1 Peter 5:7" }
  ]
}
```

#### If you add several

Render each as its own `<script type="application/ld+json">` block alongside the existing BlogPosting. Do not merge multiple `@type`s into one object — validators get confused. Sensible order to wire the *additions*: **BreadcrumbList** (cheap, derived), then **FAQPage** (high value), then **ItemList** where it fits.

---

## Open Graph + Twitter Card — these DO ship

Unlike the future schema above, **OpenGraph and Twitter Card tags ARE emitted** by `generateMetadata` from the frontmatter: `og:type=article`, `og:site_name=Randomyl`, `og:title`/`og:description` from `title`/`metaDescription`, `og:url`=canonical, `og:image` from `featuredImage`, plus `og:publishedTime`/`og:modifiedTime` from `date`/`lastModified`, and the Twitter summary-large-image card. You don't author these. Your job is to set a real `featuredImage` (defaults to `/blog/<slug>.webp`) so the social crop is a genuine 800×500-friendly image, not a placeholder.

---

## Robots, sitemap, indexing

- Site-level discoverability is handled by the route + the `robots`/`sitemap` config in `app/`.
- New posts enter the index by the canonical workflow: create `content/blog/<slug>.md`, drop images in `public/blog/`, commit, and rebuild/redeploy. The route is statically generated (`generateStaticParams` + `dynamicParams = false`), so the file *is* the publish action.
- **There is no draft `status` mechanism and no `noindex` to manage:** a file in `content/blog/` is published; to unpublish, remove the file and rebuild. Keep a work-in-progress outside `content/blog/` until it's ready.

---

## Internal linking architecture

See `topical-authority-skill.md` for the full hub-and-spoke discipline. The SEO essentials:

- Links live **in the body** as standard Markdown `[descriptive anchor](url)`. Internal links to siblings use `/blog/<sibling-slug>`; tool CTAs use `/tools/<tool>`. External links automatically get `target="_blank" rel="noopener noreferrer"` from the renderer.
- Every post links to **≥ 3 sibling posts** in its cluster and **1 pillar** where one exists, plus **one clear CTA to the relevant tool** (the post's whole job is routing the reader to its generator).
- Anchor text should *be* the target query of the linked page — the strongest internal-link signal Google has. Anchor "how to scan a QR code" on the link to that post; anchor "understanding phone number formats" on the link to that sibling.
- Link to the home page only via global nav, not the body.

Real routes to link to: `/blog/<slug>` for posts and `/tools/<tool>` for generators. Verify a slug is real before linking it; never link a 404. Examples of real slugs: `/blog/how-to-generate-random-phone-numbers`, `/blog/custom-qr-code-generator-guide`, `/blog/how-to-scan-qr-code`, `/blog/bible-verses-about-anxiety`, `/blog/is-it-legal-to-use-a-random-phone-number-generator`. Tool routes: `/tools/random-phone-number-generator`, `/tools/random-qr-code-generator`, `/tools/random-bible-verse-generator`, `/tools/random-noun-generator`, `/tools/random-object-generator`.

---

## Common SEO mistakes the audit catches

The `google-trust-audit-skill.md` checks for these. Recap:

- An H1 inside the body (the H1 comes from the frontmatter `title` — the body must not repeat it; start sections at `##`)
- Missing or truncated `metaDescription` (no snippet, or a short snippet that wastes the band — lengthen to 150–160)
- `title` load-bearing part > ~60 chars (truncated SERP title and a bloated H1)
- Slug contains stop words, dates, or special characters
- No body links to siblings, the pillar, or — critically — **no CTA to the matching tool**
- No outbound source citations where a load-bearing claim is made (any statistic, QR/phone spec, scripture quote, health/legal claim)
- Missing `featuredImage` (no preview image)
- A statistic, spec, scripture, or legal/health claim that wasn't verified (see the trust gate in `accuracy-and-trust-skill.md`)
- A how-to step that doesn't actually work, an invalid phone format, or a QR-embed snippet that doesn't render — randomyl's equivalent of a harmful claim
- A legal/privacy absolute on a YMYL phone/privacy post (hedge it, cite authority, add the "general information, not legal advice" note)

---

## Pre-publish SEO checklist

- [ ] `title` load-bearing part ≤ ~60 chars, target query front-loaded (it's both H1 and SERP title)
- [ ] `metaDescription` 150–160 chars, reads as a SERP snippet, distinct from `excerpt`
- [ ] `excerpt` set as the on-page index-card hook (distinct from `metaDescription`)
- [ ] `slug` kebab-case, no stop words, no dates, no special chars; matches the `content/blog/<slug>.md` filename
- [ ] No H1 in the body — body opens with content + the answer blockquote; top-level sections use `##`
- [ ] Tables used where they help (comparisons/specs) — they render via remark-gfm; fenced code blocks used for embed/format snippets
- [ ] Target query in: `title`, `metaDescription`, `slug`, first paragraph (the leading blockquote), ≥ 1 `##` heading, `featuredImage` alt
- [ ] `author` set (default "Ugo Charles"); `date` + `lastModified` accurate; `featuredImage` at `/blog/<slug>.webp`; `tags` set (they become `keywords`)
- [ ] ≥ 3 body links to sibling posts + 1 to the pillar + **1 CTA to the matching tool**; anchor text = the linked page's target query; no "click here"
- [ ] Outbound links to credible sources for any load-bearing claim (statistic / spec / named-translation scripture / legal or health authority)
- [ ] Every statistic / scripture / spec / legal / health claim verified per `accuracy-and-trust-skill.md`; no fabricated stats
- [ ] BlogPosting JSON-LD relied on (it ships — never hand-write it); FAQPage/BreadcrumbList treated as future, never claimed to ship

Canonical, hreflang, OpenGraph, Twitter, and BlogPosting JSON-LD are emitted automatically — nothing to check there beyond feeding clean frontmatter. FAQPage and BreadcrumbList are **not** emitted yet; don't rely on them.

---

**BlogOS** — the page Google can rank, routed to the right tool.
