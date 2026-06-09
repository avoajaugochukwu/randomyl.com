---
name: keyword-research
description: The pre-draft research routine. Takes a random-generator-tools keyword and produces a synthesized brief covering SERP shape, People Also Ask boxes, related queries, audience voice, and competitor angles for randomyl.com's tool guides, explainers, curated listicles, decision/legality posts, and faith/scripture articles across the QR-code, random-phone-number, Bible/Christian, online-privacy, and word-generator clusters. There is no keyword API or stored plan on this site — research is done by hand with WebSearch + WebFetch SERP/PAA recon, plus fact/scripture/technical verification, before you draft.
---

# Keyword Research — assembling the brief

> The writer cannot produce a Google-grade post from a keyword alone. The keyword must be turned into a *brief* — SERP shape, what's actually ranking, what real searchers asked next, what audience pain looks like in their own words, what angle is open. On randomyl there is no keyword pipeline and no stored plan: you build the brief by hand with live SERP/PAA recon. The rigor comes from *how* you read the SERP and verify the facts, not from an API.

---

## Inputs

The routine accepts one of:

1. **A bare keyword**: `how to generate random phone numbers`
2. **A keyword + content type**: `how to generate random phone numbers` (tool guide / how-to)
3. **A keyword + slug + content type** (full manual override)

If the input is just a keyword and it has multiple plausible content types, decide it from the SERP intent (Pass 3) — a "how to / generator guide" search usually wants a tool guide; a "what is / how does it work" search wants an explainer; a "best / list of / verses about X" search wants a curated listicle; an "is it legal / X vs Y" search wants a decision/legality post; a "Bible / what does the Bible say" search wants a faith/scripture article.

The five canonical content types on this site (defined fully in `page-structures-skill.md`):

1. **Tool guide / how-to (CORE)** — teach the task the matching generator does and CTA to that tool ("how to generate random phone numbers", "custom QR code generator guide").
2. **Explainer / "what is" / "how it works"** — define and explain the concept behind a tool or topic ("what is a random phone number generator and how does it work", "understanding phone number formats").
3. **Listicle / curated collection** — a grouped, framed, curated list, never a bare wall ("Bible verses about anxiety", "free QR code templates for flyers, cards, and menus").
4. **Decision / comparison / legality** (YMYL-adjacent) — help the reader decide, compare, or understand legality/ethics/safety ("is it legal to use a random phone number generator", "when to use a random phone number generator").
5. **Faith / scripture article** — Bible-cluster content, each verse quoted exactly with the translation named ("Bible verses about relationships", "forgiveness in the Bible").

Audience-tuning (beginners, businesses, developers, a faith reader) and tone-tuning are cross-cutting modifiers on a type, not separate types.

---

## No stored pipeline — you build the brief from the live SERP

There is **no DataForSEO/Apify keyword tool, no `MASTER_keywords.csv`, no `plan/` folder of briefs, and no `site-infra/` research code on this site.** Do not reference them, do not try to grep them, do not invent a "volume" or "KD" number you can't see. If you need a sense of demand, you read it off the live SERP signals below — autocomplete order, PAA presence, how many strong competitors are ranking — and mark it as an *inferred* high/medium/low, never a fabricated figure.

Your only research tools are **WebSearch** and **WebFetch** — the same tools any reader has. Nothing to install, nothing to configure, no credentials.

### The site's real clusters (use these to place a keyword)

Every keyword belongs to one of the site's clusters. Knowing the cluster tells you the tool it routes to, the pillar it links up to, and the siblings it links across to:

- **QR codes** — making, scanning, embedding, templates, use-cases-by-industry, why QR codes fail (anchors `/tools/random-qr-code-generator`).
- **Random phone numbers** — generating, formats, testing/QA, legality, privacy, when-to-use (anchors `/tools/random-phone-number-generator`).
- **Bible / Christian (faith)** — verses by theme, verse meaning, "what does the Bible say about X", women of the Bible (anchors `/tools/random-bible-verse-generator`).
- **Online privacy / data** — data-privacy tools, online safety, privacy-as-a-faith-issue (cross-links phone + Bible clusters).
- **Words** — noun and object generators: writing prompts, vocabulary, games, brainstorming (anchors `/tools/random-noun-generator` and `/tools/random-object-generator`).

When you place the keyword, name its cluster in the brief; that's what the internal-link plan (see `topical-authority-skill.md`) and the tool CTA hang off.

---

## How the live recon is run

Four passes. Passes 1–3 cover the SERP, the related space, and the competitors; Pass 4 captures audience voice; the synthesis at the end is something you write, not something an API returns.

### Pass 1 — Study the live SERP (what's actually ranking)

Run the keyword as a WebSearch exactly as a user would type it. Read the result page the way Google presents it and capture every signal:

- **The top 10 organic results** — URL, title, and the snippet Google chose. These are the pages you have to beat.
- **The featured snippet** (if present) — which URL holds it, its shape (paragraph / numbered list / bulleted list / table / definition), and its exact text. This is your snippet target; you are trying to take it.
- **People Also Ask (PAA)** — capture the questions verbatim. Expand a couple and note the answers Google is surfacing. PAA is the richest source of sub-questions to cover as headings or in the FAQ block (e.g. "Are QR codes free to make?", "Is it legal to use a random phone number?", "Why does my QR code say invalid?").
- **Related searches** ("people also search for" at the bottom) — capture the terms verbatim. These become heading candidates, internal-link targets, or sibling-post ideas.
- **SERP feature mix** — is there a PAA stack, a "things to know" carousel, a video block, an image pack? QR and phone-tool SERPs often surface a how-to step block plus a heavy PAA stack — which means the post must lead with a tight answer paragraph and deliver genuinely reproducible steps; Bible SERPs lean to grouped verse lists with PAA.

Run 2–4 variant queries to widen the picture. For `how to generate random phone numbers`, also search `random phone number generator`, `fake phone number for testing`, and `valid phone number format example` — the PAA and related-searches sets differ across variants and together map the topic.

### Pass 2 — Map the related-keyword space (demand by proxy)

There is no stored volume figure to pull, so infer demand from signals you *can* see:

- **Autocomplete** — start typing the seed into the search box and record the suggestions. Google orders autocomplete roughly by popularity, so `qr code` → `generator`, `scanner`, `for menu`, `free` tells you the dominant needs. Typing `random phone number` → `generator`, `for testing`, `usa`, `verification` shows the live modifier families.
- **"People also search for"** from Pass 1 — already a ranked-ish related set.
- **Modifier families** — group the related terms into families the post should cover: the *use-case* family (`qr code for menu`, `qr code for business card`, `fake number for app testing`), the *format/spec* family (`E.164 format`, `phone number format by country`, `qr code size`), the *audience* family (`for developers`, `for small business`, `for teachers`), the *outcome* family (`qr code that works`, `valid test phone number`), the *theme* family for faith (`Bible verses about anxiety`, `…about relationships`, `…about forgiveness`).
- **Trend sanity check** — if you doubt a term has demand, a quick WebSearch plus "Google Trends" confirms it isn't dead or purely seasonal (tool guides like QR/phone how-tos are evergreen; some faith themes are mildly seasonal around holidays).

Mark volume as "inferred: high / medium / low" from autocomplete position, PAA presence, and how many strong sites already rank. The brief needs *relative* priority (which modifiers to cover, in what order), not a fabricated number.

### Pass 3 — Read the top 3 competitors (find the open angle)

Use WebFetch on the top 3 organic URLs from Pass 1 and read what they actually say. For each, record:

- **URL** and **H1**
- **The heading list** — what sections they cover, in order
- **Rough word count** — how long the post is
- **How they open** — do they answer in the first paragraph, or bury the steps behind 600 words of preamble?
- **Whether the instructions are actually usable** — are the steps reproducible and correct, the formats valid, the embed snippets functional; or is it vague filler that never lets you do the task? For faith posts, are the verses quoted exactly with a translation named, or paraphrased loosely?
- **Whether they ground the "why"** — do they cite real standards/docs (E.164/NANP for phone formats, the QR spec for capacity/error-correction, a Bible source for scripture) or just assert things with no source? Do legality posts cite real authority or hand out confident legal absolutes?

This is what shapes the angle. The pattern you are hunting for is *what all three do badly*:

- If all three open with "In this article we will explore the world of QR codes…" — yours opens with the warm hook and a tight answer paragraph, then the steps.
- If all three give vague, non-reproducible steps — yours gives numbered steps that actually work, with a worked example and a verification step (e.g. "scan it with your phone camera before you print").
- If all three cite a vague "90% of businesses use QR codes" stat with no link — yours cites a real, named source or cuts the number and keeps the honest framing.
- If all three are 1,200 words of identical filler — yours either goes tighter (a clean answer-first how-to that wins the snippet) or substantially deeper (a fuller guide with a format/spec table, a use-case section, a troubleshooting section, and a genuine FAQ).
- If all three leave the reader with nothing next — yours ends with one clear CTA to the matching tool (e.g. `/tools/random-phone-number-generator`) and links to the natural sibling in the same cluster.

Also classify the **dominant intent** from the SERP makeup: if the top 10 are how-to step pages, the intent is *teach me to do the task* (tool guide); if they're "what is / how it works" explainers, it's an explainer; if they're grouped lists, it's a listicle; if they're "is it legal / X vs Y" pages, it's a decision/legality post; if they're scripture pages, it's a faith article. The intent decides the content type and the skeleton (see `page-structures-skill.md`).

### Pass 4 — Capture audience voice (optional but high-signal)

For tool-guide, explainer, and faith topics, find how real people phrase the need and where they get stuck. WebSearch the keyword with a community qualifier and read the threads with WebFetch:

- `random phone number generator reddit`
- `why does my qr code not scan site:reddit.com`
- `<keyword> tips` on a community
- `<keyword> quora`

For developer/QA topics, try `r/QualityAssurance`, `r/webdev`, `r/learnprogramming`; for QR and small-business, `r/smallbusiness` and `r/marketing`; for faith, `r/Christianity` and Christian-life communities; for privacy, `r/privacy` and `r/privacytoolsIO`; for words/games, `r/writingprompts` and tabletop communities.

Stash:

- **5–10 verbatim reader questions** (their exact phrasing — do not paraphrase)
- **3–5 verbatim pain-point quotes** ("I need fake numbers to seed my test database but half the ones I make get rejected by the validation regex…")
- **Common sticking points** — especially the ones a good post fixes: a QR code that won't scan because of low contrast or a too-long URL, a "fake" phone number that fails E.164 validation, not knowing whether random-number use is legal, a verse that's been misquoted around the web. The fix lives in your how-to steps and your accurate-content discipline (see `content-craft-skill.md`).
- **Beliefs the audience holds** — and whether they're actually sound (e.g. "any random 10 digits is a valid US phone number" — worth correcting against NANP rules).

This is the highest-signal source of *real audience voice*. SERP research gives you keywords; communities give you the language readers actually use and the exact spot where the task breaks — which is where your steps and troubleshooting box should focus.

### Synthesis — you write the brief

With Passes 1–4 in hand, compress the research into the brief yourself (template below). There is no synthesis API call — you are the synthesizer. Read across the four passes and answer: what are the reader intents, what is the open angle, which facts (technical spec, any stat, any scripture, any legality/privacy claim) must be exactly right and cited, which PAA to cover, what to link to internally, and which tool the CTA routes to.

---

## The assembled brief (output of this routine)

After the four passes, you have assembled a brief covering:

```
## TARGET QUERY
"<keyword>"  (demand inferred: high|medium|low — from autocomplete position + PAA presence + competitor strength)

## CONTENT TYPE
<tool guide/how-to | explainer | listicle/curated collection | decision/comparison/legality | faith/scripture article>
(+ any audience/tone modifier: beginners | businesses | developers | faith reader)
(from SERP intent in Pass 3)

## CLUSTER + TOOL CTA
<QR codes | random phone numbers | Bible/Christian | online privacy | words>
CTA tool: </tools/random-qr-code-generator | /tools/random-phone-number-generator |
           /tools/random-bible-verse-generator | /tools/random-noun-generator | /tools/random-object-generator>

## SLUG
<kebab-case slug — see title-meta-slug-skill.md>
content/blog/<slug>.md   (Markdown file with YAML frontmatter, parsed by gray-matter in lib/posts.ts)

## SERP shape
- Featured snippet currently: <yes/no, shape, holding URL>
- PAA questions: [<5-10 verbatim — e.g. "Is it legal to use a random phone number?", "Why won't my QR code scan?">]
- Top 3 ranking: <URLs + heading lists + word counts + opening style + steps-reproducible? + cites-real-sources?>
- Related searches / autocomplete: [<terms>]
- Dominant intent: <teach-the-task | what-is/how-it-works | grouped-list | decide/compare/legality | scripture>

## OPEN ANGLE
<2-3 sentences on what the top 3 are missing — specific, not "more comprehensive">

## AUDIENCE VOICE (from communities)
- Real questions readers ask: [<5-10 verbatim>]
- Pain points: [<verbatim quotes>]
- Sticking points: [<bullets — including the exact spot where the task breaks, the legality confusion, the misquote risk>]

## PRIMARY SOURCES (for the load-bearing claims)
- [<URL, outlet, relevance — a standards doc / .gov / .edu / a named Bible translation / a research authority>] × 3-8

## VERIFIED FACTS / CLAIMS TO FEATURE
- <technical claim (QR spec, E.164/NANP format, scan behavior)> — <source: standard or authoritative doc> — <verification confidence>
- <any statistic referenced> — <real citation, no fabricated "90% of businesses…" stat>
- <any scripture> — <exact quote + book chapter:verse + named translation>
- <any legality/privacy claim> — <cited authority + general-information-not-legal-advice framing>

## RESPONSIBLE-CLAIMS FLAG (YMYL)
- Is the topic legality/privacy (random/fake numbers, data privacy)? <yes/no>
- If yes: no legal absolutes; cite real authority; add the light "general information, not legal advice" note;
  frame the tool for legitimate use (testing, QA, demos, privacy, education) — never fraud, spam, or harassment.
- Is the topic faith? Scripture quoted accurately, translation named.
- Is the topic technical (QR/phone how-to)? Every step, format, and snippet must be correct and reproducible.
(See accuracy-and-trust-skill.md — the trust gate.)

## HEADING PLAN (per content type)
<heading list per the content type's template in page-structures-skill.md
 — the page H1 comes from the frontmatter `title`, so the body has NO `#` H1;
 start top-level sections at ## (h2), sub-sections at ### (h3), never skip a level>

## INTERNAL LINK TARGETS
<1 pillar slug + 3-5 sibling slugs from the same/adjacent cluster, drawn from the existing
content/blog/ directory — verified real, never a 404 — plus the one tool CTA>

## FAQ QUESTIONS (PAA capture)
- <PAA question 1> — <40-60 word answer plan>
- × 2-4

## FEATURED SNIPPET TARGET
- query: <the snippet target>
- shape: paragraph | numbered list | bulleted list | table | definition
  (NOTE: tables DO render — remark-gfm — so a comparison/spec table is a valid snippet shape here;
   the leading `>` blockquote right after the featured image is the 40-60-word answer box.)
- answer: <40-60 word answer plan — this becomes the opening blockquote>
```

This brief is what the writer receives. It does not exist as a saved file by default — it lives in context for the duration of the write. You can choose to save it as `research/briefs/<slug>.md` for audit / review purposes.

---

## When to save the brief vs run inline

Two modes:

### Inline (default)
The brief is assembled, the writer drafts immediately, the brief is discarded after the post ships. Faster, simpler.

### Saved
The brief is saved to `research/briefs/<slug>.md` before drafting. Useful for:

- Topics where you want to review the brief before drafting
- Posts that may need re-drafting later with the same research base
- Topics with heavy trust risk (anything legality/privacy, any scripture set, any post with a technical claim that must be exactly correct) where extra review is warranted

The default is inline.

---

## When to skip or trim the passes

The routine assembles a brief from scratch. Skip or trim the relevant passes if:

- **The keyword is a settled, well-understood task** (e.g. *how to scan a QR code*, where the shape is standard and the SERP is settled) — run Pass 1 (snippet + PAA) and Pass 3 (open angle) only; skip Pass 4.
- **You're writing a sibling in an already-mapped cluster** — you already know the pillar, siblings, and tool CTA; lean on Pass 1 (PAA + snippet) and Pass 3 (competitors), and just confirm the internal-link targets still exist.
- **The topic is legality/privacy, faith, or carries a technical spec** — do NOT skip the responsible-claims flag and source verification; that check is mandatory regardless of which passes you trim.

---

## Quality bar

A bad brief produces a bad post no matter how good the writer is. The brief is the load-bearing artifact. Specifically:

- **The open angle must be specific.** "More comprehensive than competitors" is not an angle. "Every competitor gives vague QR steps and skips the three things that actually break a code; we give numbered steps that work, a contrast/size/URL-length checklist, an embed snippet that renders, and a scan-it-before-you-print test" is an angle.
- **The featured facts and claims must be correct and verifiable, not guessed.** The writer should not assert "QR codes can hold 10,000 characters" or "any 10 digits is a valid US number" or invent a statistic. Where a technical claim appears it traces to a standard or authoritative doc. Where a scripture appears it's quoted exactly with book chapter:verse and a named translation. Where a legality/privacy claim appears it cites real authority and carries the not-legal-advice note. (See `accuracy-and-trust-skill.md` — the trust gate.)
- **The content units themselves must be accurate and genuinely useful.** Steps reproducible, formats valid, snippets functional, verses exact, comparison rows true. (See `content-craft-skill.md`.)
- **Legality/privacy, faith, and technical topics carry the responsible-claims note.** No legal absolutes and not-legal-advice framing where relevant; tools framed for legitimate testing/QA/privacy use, never fraud; scripture accurate with translation named; every step and format correct.
- **The audience voice should be verbatim.** Reader quotes from communities aren't paraphrased — they're stored as exact strings.
- **The internal-link targets must exist.** Before listing `/blog/understanding-phone-number-formats` or `/blog/how-to-scan-qr-code` as a link target, confirm the slug exists in `content/blog/`. Never link a 404. Confirm the tool CTA route exists too.

---

## Pre-write checklist (run this on the assembled brief)

- [ ] Target query is specific and matches a real search intent
- [ ] Content type is decided (tool guide / explainer / listicle / decision-legality / faith article) + any audience/tone modifier
- [ ] Cluster identified + tool CTA chosen (so the pillar, siblings, and routing target are known)
- [ ] Slug is kebab-case, front-loaded, and not yet taken
- [ ] Demand marked as inferred high/medium/low (no fabricated volume/KD number)
- [ ] At least 3 competitor pages were read (Pass 3)
- [ ] At least 3 primary sources identified for the load-bearing claims (a standard/spec / .gov / .edu / named translation / research authority)
- [ ] Every technical/statistic/scripture/legality claim is correct and traced to a citable source — no fabricated stats or unverified specs
- [ ] Legality/privacy, faith, and technical topics carry the responsible-claims note (not-legal-advice; legitimate-use framing; exact scripture; reproducible steps)
- [ ] The content units to feature are accurate and genuinely useful (steps work, formats valid, snippets render, verses exact)
- [ ] Heading plan matches the content type's template in `page-structures-skill.md` (body has NO `#` H1; top-level sections at `##`)
- [ ] Internal-link targets are real slugs (verified against `content/blog/`) and the tool CTA route exists
- [ ] PAA questions are real (lifted from Pass 1, not invented)
- [ ] Featured-snippet target is set, with a render-true shape (a table IS allowed — remark-gfm renders it; the leading blockquote is the answer box)

---

**BlogOS** — the keyword becomes the brief becomes the post that routes to the tool.
