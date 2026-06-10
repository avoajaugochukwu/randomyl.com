# Content & SEO Plan — randomyl.com

Living plan for the content engine. Records what shipped, how it's wired, and the DataForSEO-mined
keyword backlog that seeds the next fan-outs. Keyword data lives in `seo/` (`blog-keywords.md` =
round 1, `blog-keywords-2.md` = round 2). Mining script: `scripts/seo/mine-blog-keywords.mjs`.

---

## 🎛 Generators behind the content (status)

Every content item routes to a live, functional generator. Most already existed (Batch 2/3); the two
that were missing were built this session and are now registered, discoverable, and in the sitemap.

| Content | Generator | Status |
|---|---|---|
| Truth or Dare Questions | `/tools/truth-or-dare-generator` | pre-existing ✅ |
| Would You Rather Questions | `/tools/would-you-rather-generator` | **built this session** 🆕 |
| Team-Building Icebreaker Games | `/tools/random-team-generator` (+ groups variant) | pre-existing ✅ |
| Icebreaker / Questions to Ask Friends | `/tools/random-question-generator` | pre-existing ✅ |
| Words that start with X (A–Z) | `/words-that-start-with` + `/tools/random-word-generator` + `/tools/random-letter-generator` | built this session ✅ |
| Funny Animal Facts / Mythical Animals | `/tools/random-animal-generator` | pre-existing ✅ |
| Mood Ring Color Meanings | `/tools/mood-ring-generator` | **built this session** 🆕 |
| Country Facts (Mexico/Colombia/Chile) | `/tools/random-country-generator` | pre-existing ✅ |

New generators (full wiring: ToolKey, `tools[]`, description, FAQ, JSON-LD `WebApplication`, sitemap):
- **Would You Rather** — `app/tools/would-you-rather-generator/` — 7 categories (classic/funny/hard/food/gross/deep/kids), ~80 dilemmas. Targets the 201,000/mo head term.
- **Mood Ring** — `app/tools/mood-ring-generator/` — interactive ring swatch + verified color→mood chart. Supports the 33,100/mo post.

---

## ✅ Shipped — 2026-06-09 (Batch: game/question + facts blog cluster + A–Z word-list pages)

### 10 blog posts (`content/blog/*.md`)
All researched against the live SERP + communities, fact-checked through the accuracy gate, and
written to the BlogOS contract (YAML frontmatter, no body H1, leading answer blockquote, one tool
CTA, sibling internal links, FAQ). Each auto-emits `BlogPosting` JSON-LD and appears in the sitemap
via `getAllPosts()` — no extra wiring needed.

| Slug | Target keyword | Vol/mo · KD | CTA tool | Words |
|---|---|---|---|--:|
| `truth-or-dare-questions` | truth or dare questions | 110,000 · 0 | /tools/truth-or-dare-generator | 2,585 |
| `would-you-rather-questions` | would you rather questions | 201,000 · 5 | /tools/random-question-generator | 3,758 |
| `team-building-icebreaker-games` | team building icebreaker games | 74,000 · 0–5 | /tools/random-team-generator | 2,589 |
| `icebreaker-questions` | icebreaker questions / questions to ask friends / conversation starters | 74k+74k+18k | /tools/random-question-generator | 3,325 |
| `funny-animal-facts` | funny animal facts | 18,100 · 1 | /tools/random-animal-generator | 2,055 |
| `list-of-mythical-animals` | list of mythical animals | 14,800 · 10 | /tools/random-animal-generator | 2,383 |
| `mood-ring-color-meanings` | mood ring color meaning | 33,100 · 0 | /tools/random-color-generator | 1,571 |
| `fun-facts-about-mexico` | mexico country facts | 14,800 · 22 | /tools/random-country-generator | 1,844 |
| `fun-facts-about-colombia` | colombia country facts | 8,100 · 8 | /tools/random-country-generator | 1,840 |
| `fun-facts-about-chile` | fun facts about chile | 8,100 · 0 | /tools/random-country-generator | 2,191 |

Accuracy notes: every fact/stat verified vs reputable sources (Smithsonian, Nat Geo, Britannica,
Wikipedia, .edu, McGill OSS for thermochromic mood-ring science, marshmallowchallenge.com for the
team game). Unverifiable claims were cut, not guessed.

### A–Z word-list pages (programmatic template) — `/words-that-start-with`
- **Hub:** `app/words-that-start-with/page.tsx` → `/words-that-start-with` (A–Z grid).
- **26 letter pages:** `app/words-that-start-with/[letter]/page.tsx` → `/words-that-start-with/a…z`,
  SSG via `generateStaticParams`, `dynamicParams = false`. Each renders words grouped by length
  (3–8+), an interactive random-word picker (`RandomWordPicker.tsx`), a word-game tips section, FAQ,
  `CollectionPage` JSON-LD, an A–Z nav strip (internal linking), and CTAs to the word + letter
  generators. Targets `words that start with x` (110,000 · KD 0–4) and the per-letter family.
- **Data:** `app/words-that-start-with/wordsByLetter.ts` — 2,500+ words, LLM-curated for
  common/family-friendly + hand-supplemented x/z, **all validated against the `words_alpha`
  dictionary** (0 invalid). Counts per letter: a:87 b:110 c:145 … s:322 t:170 … x:26 y:24 z:38.
- **Discoverability:** added to `app/sitemap.ts` (hub + 26 letters); linked from the random-letter
  generator page.

### Verification
- `npm run build` → **clean (exit 0)**, 138 static pages generated incl. all 10 posts + 26 letter
  pages + hub. Only warning is the pre-existing lockfile workspace-root notice (unrelated).
- All 10 posts pass QC: required frontmatter keys, slug match, no body H1, answer blockquote,
  literal `&`, valid internal/blog + tool-CTA links.

### Follow-ups (not done this batch)
- **Featured images:** posts ship with no `featuredImage` (none exist yet). PostRow renders no
  image so cards are clean, but OG cards have no image. Generate `/public/blog/<slug>.webp` later
  and add the `featuredImage` frontmatter key.
- **Dedicated length×letter pages:** `5 letter words that start with a` (90,500 · KD 2) is currently
  served only by an on-page length section. Worth promoting to its own pages if it underperforms.
- **No would-you-rather tool yet** — the WYR post CTAs to `/tools/random-question-generator`.
  Consider building a dedicated would-you-rather generator (201k head term).

---

## 🔜 Next fan-outs — DataForSEO round-2 backlog (`seo/blog-keywords-2.md`)

Mined 2,027 blog-intent keywords ($0.63). Prioritized by volume ÷ difficulty. These are the seeds
for the next content fan-out.

### Tier 1 — huge volume, KD 0–6 (do next)
- **Trivia Questions** — `trivia questions` **165,000 · KD 6**. Big categorized listicle (by topic +
  difficulty) → `/tools/random-question-generator`. Highest single opportunity in round 2.
- **Never Have I Ever Questions** — `never have i ever questions` **90,500 · KD 0**. Game-question
  listicle (clean / friends / couples / spicy-tasteful) → random-question/truth-or-dare.
- **"Words that end in [X]" template** — `5 letter words ending in e` **90,500 · KD 0** (and the full
  ending-in family). Mirror of the words-that-start-with template: `/words-that-end-in/[letter]` or
  a Wordle-helper. Reuse `wordsByLetter` data, just filter by suffix.
- **Words that start with X page** already shipped — confirmed `words that start with x` 110,000 · KD 0.

### Tier 2 — strong clusters to expand
- **Color cluster** (mood-ring already shipped):
  - `what does the color blue and green make` (color mixing) — 33,100 · KD 0 (whole "X and Y make" family 22–33k KD 0).
  - `aura colors meaning` — 12,100 · KD 0.
  - `what does the color purple mean/symbolize` — 18–22k · KD 2–16.
- **Game-question cluster** (4 posts shipped): `this or that questions`, `hot seat questions`,
  `most likely to questions`, `20 questions game` — all game listicles → random-question generator.
- **"Questions to ask" cluster**: `questions to ask a guy` 60,500 · KD 12; `deep questions to ask`
  18,100 · KD 1; `deep questions to ask your significant other` 18,100 · KD 0.
- **Animal cluster** (2 shipped): `fastest animals in the world` 18,100 · KD 8; `cutest animals in
  the world` 8,100 · KD 0; `extinct animals list` 5,400 · KD 14; **`animals that start with [letter]`**
  (template, mirrors word lists) → random-animal generator.
- **Country-facts template** (3 shipped): replicate for top countries — `fun facts about italy`
  6,600 · KD 0, `…japan` 5,400 · KD 0, `…france` 5,400 · KD 0, `…brazil` 4,400 · KD 5, `…egypt`
  2,900 · KD 3. Same skeleton, swap the country.
- **Decision-maker / "bored" cluster**: `what to do when bored` 27,100 · KD 8–16; `what should i
  eat for dinner` 27,100 · KD 19; `what i should eat for lunch` 6,600 · KD 0 → decision-maker tool.

### Word-game head terms (higher KD — defer / template only)
- `5 letter words` 823,000 but KD 47 head (low-KD slices: `5-letter s words` KD 6). Word-game
  helper templates can capture these at scale; not single blog posts.
- `words with friends cheat` 673,000 · KD 51 — needs a real solver tool, not a post.

---

## 🛠 DataForSEO mining — how to run

- Creds in `.env` (`DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD`). Balance ~$20.6 (this session spent ~$1.20).
- Script: `node scripts/seo/mine-blog-keywords.mjs` — edit the `SEEDS` map (cluster → seed phrases)
  and the output filename, then run. It auto-filters to blog-intent (listicle/info) keywords,
  excludes tool-intent ("X generator"), attaches KD (free, included), and ranks by volume ÷ KD.
- **Gotcha:** `dataforseo_labs/google/keyword_suggestions/live` accepts **only ONE task per POST**
  (batched arrays return `40000 You can set only one task at a time`). The script fires one request
  per seed with capped concurrency — keep that pattern.
- Endpoint also returns morphological **aliases that share one aggregate volume** (e.g. 13 phrasings
  all at 201,000) — each collapses to a single post target, not 13.

---

## Cluster → tool map (for routing CTAs)
- Game questions / icebreakers / trivia / WYR / never-have-i-ever → `/tools/random-question-generator`
  (+ `/tools/truth-or-dare-generator`, `/tools/random-team-generator`)
- Word lists / word games → `/tools/random-word-generator`, `/tools/random-letter-generator`, `/words-that-start-with`
- Animal facts/lists → `/tools/random-animal-generator`
- Color meanings/mixing → `/tools/random-color-generator`
- Country facts → `/tools/random-country-generator`
- Decision / "what should I…" / bored → `/tools/decision-maker`
