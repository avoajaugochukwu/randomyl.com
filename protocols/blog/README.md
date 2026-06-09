# BlogOS — Human-Quality Tool & Topic Posts at Scale

A skill pack adapted from FacelessOS (YouTube scriptwriting) for writing blog posts that Google rates as helpful, original, and trustworthy — and specifically tuned for `randomyl.com`: a suite of free random-generator tools (QR codes, random and fake phone numbers, random Bible verses, random nouns and objects) and a blog that earns the search traffic those tools serve — QR how-tos and templates, phone-number formats and legality, Bible verses by theme, online privacy, and writing prompts — then routes the reader to the tool. Every post gives a real person a working result for the exact thing they searched, and the context that makes that result trustworthy.

## How the system maps to the project

- **Posts are authored as Markdown files** (the content directory is the source of truth). Each post is `content/blog/<slug>.md`: a YAML frontmatter block (title, slug, excerpt, metaDescription, date, lastModified, author, tags, featuredImage) followed by a GitHub-Flavored-Markdown body. Adding the file and rebuilding publishes it; removing it unpublishes it. There is no `Status` field.
- **`lib/posts.ts` reads the files.** It parses each `content/blog/<slug>.md` with `gray-matter`, computes reading time from word count (~200 wpm), and exposes the posts to the routes. Images live in `public/blog/<slug>.webp` (featured) and `public/blog/<slug>-content-N.webp` (inline).
- **Rendering.** `app/blog/page.tsx` lists posts via `lib/posts.ts`. `app/blog/[slug]/page.tsx` renders the `<h1>` from the **title** frontmatter field and the body through `components/MarkdownRenderer.tsx`. The route is static (`generateStaticParams` + `dynamicParams = false`).
- **The renderer is full GitHub-Flavored Markdown** (`react-markdown` + `remark-gfm` + `rehype-highlight`): `##`/`###` headings, lists, `> ` blockquotes, **tables**, fenced **code blocks** (syntax-highlighted), images (via `next/image`), and links (external auto-`target=_blank`) all render. The only hard body rule is **no `#` H1** — the frontmatter `title` is the page's single H1. The leading `>` blockquote is the answer box.
- **The route emits JSON-LD automatically.** `BlogPosting` schema (headline, description, datePublished, dateModified, author Person, publisher Organization "Randomyl", keywords, image) plus title, description, canonical, hreflang, OpenGraph, and Twitter all ship from the frontmatter via `generateMetadata` and the inline JSON-LD. The writer **never hand-writes schema**. `FAQPage` / breadcrumb schema are **not** wired — treat them as optional future enhancements, never claim they ship.
- **This pack** at `protocols/blog/` — the writing craft + SEO discipline + research alignment + the accuracy & trust gate that produces instructions that actually work and verifiable claims.

The pack does NOT define React templates. randomyl renders every post through one route. A post's "shape" is carried by the content type the writer chooses from `page-structures-skill.md` and the Markdown body skeleton it implies.

> Note: `scripts/export-notion.mjs` was a **one-time legacy export** from the old Notion setup into Markdown. It is **not** part of the authoring loop and is never a publish step. The Markdown file is the source of truth.

### Frontmatter contract (the YAML keys the pipeline reads)

```yaml
title            # the rendered <h1> AND the meta <title>/og:title (no separate metaTitle)
slug             # kebab-case; equals content/blog/<slug>.md filename
excerpt          # short 1–2 sentence on-page hook (blog index card)
metaDescription  # 150–160 char SERP description; SEPARATE from excerpt
date             # ISO 8601 publish date → datePublished / og:publishedTime
lastModified     # ISO 8601 update date → dateModified / og:modifiedTime
author           # the byline; default "Ugo Charles"
tags             # 1–4 short topical tags
featuredImage    # path under public/, defaults to /blog/<slug>.webp
```

There is **no `readingTime` field** (computed from word count) and **no `status` field** (a file in `content/blog/` is published). Don't invent `metaTitle`, `readingTime`, `status`, or schema fields — schema ships automatically from the route.

## How it differs from FacelessOS

| | FacelessOS (YouTube) | BlogOS (web) |
|---|---|---|
| Output | TTS-ready prose | Markdown file (`content/blog/<slug>.md`) |
| Retention model | Watch time, rehook every 60-90s | Scroll depth, scannability every 200-300 words |
| Quality gate | YouTube monetization policy | Google HCU + E-E-A-T + spam policy + **instructions that work, claims that verify** |
| Output target | Baserow row (`script` field) | A Markdown file in `content/blog/` |
| Per-channel personality | Voice profile per channel | Voice profile per site |
| Brief origin | Operator-provided | WebSearch SERP/PAA research |

## Files in this pack (20 skills + README + USAGE)

| File | Purpose |
|---|---|
| `blog-os-master.md` | Core philosophy, the Markdown output contract, the accuracy & trust gate, anti-AI-slop checklist, mandatory re-audit |
| `page-structures-skill.md` | The randomyl content types (🛠️ tool guide, 🔍 explainer, 📋 listicle, ⚖️ decision/comparison/legality, 🙏 faith/scripture) — frontmatter shape, body skeleton, word counts |
| `content-craft-skill.md` | **The content craft & terminology guide.** What makes each unit genuinely useful and correct (a step that works and ends in a check, a list entry that earns its place, a verse quoted exactly, a fair comparison row), grouping, and correct domain terminology (static/dynamic QR, E.164/NANP, translation names, PII) |
| `accuracy-and-trust-skill.md` | **Hard gate.** Every instruction works and is reproducible; every spec/stat/scripture/legal claim is verified against a real authority and cited; no fabricated facts or fake statistics; scripture exact with translation named; tools framed for legitimate use only; legality as general information, not advice |
| `keyword-research-skill.md` | The research alignment: WebSearch SERP/PAA recon for randomyl keywords (no DataForSEO/Apify pipeline on this site) |
| `engagement-mechanics-skill.md` | Scroll-depth psychology, scannability cadence, dwell-time mechanics |
| `BLOG-INTRO-SWIPE.md` | Answer-first opening patterns by intent (the leading `>` blockquote) |
| `variety-rotation-skill.md` | Rotation system to prevent same-y posts within a cluster |
| `narrative-arc-skill.md` | Arc for longform (pillar guides / big curated sets) |
| `conclusion-and-cta-skill.md` | Conclusion shapes, single-CTA discipline (to the tool or a sibling post), FAQ section |
| `title-meta-slug-skill.md` | Title / meta description / excerpt / URL slug rules (mapped to frontmatter) |
| `seo-and-schema-skill.md` | On-page SEO + canonical; the auto-shipped BlogPosting schema (and FAQPage/breadcrumb as future enhancements) |
| `research-and-citation-skill.md` | Source rules, sourcing discipline, the responsible-claims discipline (scripture / legality / privacy / technical correctness) |
| `eeat-signals-skill.md` | Author byline (Ugo Charles), working instructions, the YMYL trust angle (faith / legality / privacy) |
| `featured-snippet-skill.md` | 40-60 word answer paragraph, PAA capture, list and table snippets |
| `media-and-images-skill.md` | Featured/inline image paths, alt text, on-theme imagery |
| `scannable-formatting-skill.md` | Heading cadence, paragraph length, lists/tables/code vs prose |
| `topical-authority-skill.md` | Pillar-cluster architecture, internal linking, hub-and-spoke across clusters, linking to the tool |
| `update-discipline-skill.md` | Update vs replace vs merge vs sunset; bumping `lastModified`; periodic re-check |
| `google-trust-audit-skill.md` | HCU + E-E-A-T + spam-policy pre-publish audit (incl. the thin-list trap) |
| `analytics-coaching-skill.md` | Read analytics + GSC, diagnose post problems and post→tool conversion |
| `README.md` | This file |
| `USAGE.md` | The day-to-day operator guide |

Plus adjacent files:

- `protocols/site-voice-profile.md` — the canonical structure for a per-site voice lock, and the randomyl voice notes
- `protocols/voice-profile.md` — the randomyl voice lock the writer injects (build it from real reader data; optional until then)
- `protocols/rotation-log.md` — the append-only variety-rotation log

## Optional slash commands

The pack runs as a manual workflow, and there are command shortcuts under `.claude/commands/`:

```
/blog                         # load the pack into chat
/b-write <topic/keyword>      # research + draft → content/blog/<slug>.md
/b-review <slug>              # audit + fix an existing post
```

Each is a plain markdown file in `.claude/commands/<name>.md` — no installation, no build step.

## The non-negotiable defaults

Enforced by `blog-os-master.md`, `page-structures-skill.md`, `content-craft-skill.md`, and `accuracy-and-trust-skill.md`:

1. **Markdown-native output, full GFM.** Frontmatter block first, then a GFM body. No `#` H1 in the body (the `title` is the H1); top sections are `##`, sub-sections `###`. Tables and fenced code blocks render — use them.
2. **The answer is a leading `>` blockquote.** 40–60 words: what this is, the result, how to get it.
3. **Instructions that work.** Every how-to step is correct, actionable, and ends in a verification step. Every list entry earns its place. Every comparison is fair.
4. **Accuracy & trust as a publish gate** — every step works; every load-bearing claim (a spec, a statistic, a scripture quote, a legality claim) is verified against a real authority and cited. No fabricated facts, no fake "studies show 90%…" statistics. Scripture is quoted exactly with the translation named. The tools are framed for legitimate use only; legality is general information, not advice. A broken step or an unverifiable claim means the post does not ship.
5. **Anti-AI slop checklist.** No "let that sink in", no fake-specific numbers, no hype words without a reason.
6. **Research contract.** WebSearch SERP/PAA recon + WebFetch fact/spec/scripture verification. There is no keyword pipeline or `plan/` folder on this site.
7. **Content-type skeletons** match `page-structures-skill.md`.
8. **Variety rotation log** appended to every audit; next run avoids the same slot picks.

## Provenance

Forked from FacelessOS (extracted from 4,000+ real faceless YouTube scripts), re-tuned for blog mechanics, ported through an earlier BlogOS build (and an affirmations-site build), and retargeted here for randomyl.com's random-generator tools and topical blog, its Markdown → `content/blog/` rendering pipeline, and the accuracy & trust discipline that tool how-tos, technical specs, scripture, and legality demand.
