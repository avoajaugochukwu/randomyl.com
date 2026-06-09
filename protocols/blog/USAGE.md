# BlogOS — Usage

One default workflow (manual, research-driven) and three optional commands.

## The workflow at a glance

The default is a manual pipeline you drive yourself. There's no orchestrator and no stored keyword pipeline — research is WebSearch/WebFetch. For each post:

1. **Pick a topic** with clear intent (a keyword like "how to generate random phone numbers", or a gap in an existing cluster).
2. **Identify the content type** from `page-structures-skill.md` — 🛠️ tool guide, 🔍 explainer, 📋 listicle, ⚖️ decision/comparison/legality, or 🙏 faith/scripture (plus any audience/angle modifier) — and the tool it supports.
3. **Research the SERP with WebSearch** — read the top posts and the People-Also-Ask box, then WebFetch any source you need to confirm a fact (a QR or phone-format spec, a scripture quote, a legality/privacy claim).
4. **Assemble a brief** — the angle that makes it non-generic (the real how-to with a verification step, the format table, the sourced explanation, the honest comparison), the FAQ from PAA, the heading skeleton, the sibling posts and the tool to cross-link.
5. **Draft the post** per the content type's spec in `page-structures-skill.md` — the frontmatter block, then a GFM body: a leading `>` blockquote answer box, the steps / grouped list / comparison table / verse blocks, the framing, the FAQ, one CTA.
6. **Check every instruction works and ends in a verification step** (`content-craft-skill.md`) — correct, actionable, self-contained; every list entry earns its place.
7. **Verify factual claims** against reputable sources and cite them; quote any scripture exactly with the translation named; add a general-information-not-legal-advice note where the post turns on legality (`accuracy-and-trust-skill.md`).
8. **Run the re-audit** (`google-trust-audit-skill.md` + the gate in `accuracy-and-trust-skill.md`).
9. **Publish.** Write the post to `content/blog/<slug>.md` (frontmatter + body), drop images into `public/blog/`, and commit. The route is statically generated, so a rebuild publishes it — there is no Notion, no migrate script, and no `Status` field.

## Optional commands

These live as plain markdown files in `.claude/commands/<name>.md`.

```
/blog                                           # load the pack into chat
/b-write <topic/keyword>                        # research + draft → content/blog/<slug>.md
/b-review <slug>                                # audit + fix an existing post
```

`/b-write` takes a topic, infers the content type and the tool it supports, researches via WebSearch, assembles the brief, drafts as a frontmatter block + GFM body, checks every instruction, verifies facts/specs/scripture, runs the re-audit, and writes `content/blog/<slug>.md`. `/b-review` resolves `content/blog/<slug>.md`, audits against the full pack, re-walks the instructions, re-verifies facts, bumps `lastModified`, and writes back — refusing to ship if a broken step or an unverifiable claim remains. `/blog` just loads the pack for brainstorming or manual edits.

---

## The 5 content types (defined in page-structures-skill.md)

| Type | Use for |
|---|---|
| 🛠️ Tool guide / how-to | "how to X" → numbered steps that end in a working result + CTA to the tool ("how to generate random phone numbers", "custom QR code generator guide", "how to scan a QR code") — the core type for the tools |
| 🔍 Explainer / "what is" | "what is X / how does X work" → definition + mechanism + honest limits ("what is a random phone number generator", "understanding phone number formats", "jesus wept meaning") |
| 📋 Listicle / curated collection | "X for Y / best X / templates" → grouped, framed, sourced list ("Bible verses about anxiety", "free QR code templates", "women of the Bible") |
| ⚖️ Decision / comparison / legality | "is X legal / X vs Y / when to use X" → an honest verdict, often with a comparison table ("is it legal to use a random phone number generator", "burial vs cremation") |
| 🙏 Faith / scripture article | "what does the Bible say about X" → cited verses + meaning ("what does the Bible say about cremation", "forgiveness in the Bible") |

Audience tuning (beginner, business owner, developer, faith reader) and angle tuning (free, printable, for-testing) are modifiers on a type, not separate types. Infer the type from the keyword's intent, or ask if ambiguous.

---

## The hard rules

1. **Markdown-native output, full GFM.** Frontmatter block first, then the body. H1 comes from the **title** field — no `#` H1 in the body, and top sections are `##`, sub-sections `###`. The answer box is a leading `>` blockquote. Tables and fenced code blocks render — use them for comparisons, specs, and snippets. No invented frontmatter fields; schema ships automatically from the route.
2. **Instructions that work.** Every how-to step is correct, actionable, self-contained, and ends in a verification step (test the scan, validate the format, preview the verse). Every curated entry earns its place; every comparison is fair (`content-craft-skill.md`).
3. **Accuracy & trust is a publish gate.** Every step is walked as the reader and confirmed to work. Every load-bearing claim (a spec, a statistic, a scripture quote, a legality/privacy claim) is verified against a reputable source and cited; use honest hedges where the truth varies; no fabricated facts or fake statistics. Scripture is quoted exactly with the translation named. The tools are framed for legitimate use only; legality is general information, not advice. A broken step or an unverifiable claim → the post does not ship (`accuracy-and-trust-skill.md`).
4. **Content-type skeletons guide structure.** Read `page-structures-skill.md`. Each type has a frontmatter shape, a body skeleton, and a word-count band. Adapt to what the SERP rewards.
5. **No fake briefs, no invented facts.** The brief comes from WebSearch research, not assumptions. If the brief lacks a way to make the post non-generic or a sourced fact, don't write one — mark it `NEEDS MORE RESEARCH`.

---

## Day-to-day flow

### Writing one post

Worked example: **"how to generate random phone numbers"**, a 🛠️ tool guide.

1. Identify the type (🛠️ tool guide), the tool it supports (`/tools/random-phone-number-generator`), and the angle that beats the SERP (most rank a thin "click generate" post — we add a real format table, a verification step, and a mistakes section).
2. WebSearch the keyword → read the top 10 results, the PAA, and the snippet currently winning. WebFetch the ITU E.164 / NANP references to confirm the formats and the reserved `555-01XX` example range.
3. Synthesize the brief → the steps, the format table, the FAQ from PAA, the heading outline, the sibling posts to link (phone-number formats, legality) and the tool.
4. Draft as a frontmatter block + GFM body: the leading `>` blockquote answer, the numbered steps ending in a verification step, the format table, the mistakes section, the FAQ, one CTA to the tool.
5. Walk every step as the reader — correct, actionable, ends in a check. Verify the format facts and any stat.
6. Run the re-audit, then publish: write `content/blog/how-to-generate-random-phone-numbers.md`, drop the featured image at `public/blog/how-to-generate-random-phone-numbers.webp`, commit.

Review at `/blog/<slug>` after `npm run dev`.

### Writing a batch

Do one topic at a time. Each post needs its own research pass and its own instruction check — don't fan out N keywords at once.

### Updating an existing post

The canonical edit happens **in the Markdown file** (`content/blog/<slug>.md`). After editing → re-audit (or `/b-review <slug>`) → re-walk the instructions, re-verify facts, correct what manual edits missed, and **bump `lastModified`** (it feeds `dateModified` in the JSON-LD and `og:modifiedTime`). Don't change `date` (the original publish date). See `update-discipline-skill.md`.

---

## Path conventions

| Artifact | Location |
|---|---|
| Post Markdown file | `content/blog/<slug>.md` |
| Featured image | `public/blog/<slug>.webp` |
| Inline / in-body images | `public/blog/<slug>-content-N.webp` |
| Post loader | `lib/posts.ts` |
| Renderer | `components/MarkdownRenderer.tsx` |
| Routes | `app/blog/[slug]/page.tsx`, `app/blog/page.tsx` |
| Tools (CTA targets) | `app/tools/<tool>/` → `/tools/<tool>` |
| Voice profile | `protocols/voice-profile.md` (lock, optional), `protocols/site-voice-profile.md` (guide) |
| Rotation log | `protocols/rotation-log.md` |
| Optional commands | `.claude/commands/{blog,b-write,b-review}.md` |

---

## What's NOT needed

- **No research API or keyword pipeline.** This site has no DataForSEO/Apify pipeline and no `plan/` folder. WebSearch / WebFetch cover SERP recon and fact-checking.
- **No Notion, no migrate script, no JSON output.** Posts are Markdown files. `scripts/export-notion.mjs` was a one-time legacy export, not part of the loop.
- **No hand-written schema or meta tags.** `BlogPosting` JSON-LD plus title/description/canonical/OpenGraph/Twitter ship automatically from the frontmatter via the route.
- **No manual orchestrator.** You drive the pipeline; the pack supplies the discipline.
- **No install.** The pack is markdown files in `protocols/blog/`. The slash commands are markdown files in `.claude/commands/`. Both load via `@` references.
- **No React templates.** Every post renders through the single `app/blog/[slug]` route via the Markdown renderer. The content type carries the shape; the CTA is an inline link to the tool or a sibling post.

---

## Pack file map

See `protocols/blog/README.md` for the full file list. The pack covers writing craft, SEO, E-E-A-T, scannability, the content craft & terminology guide, the accuracy & trust gate, keyword research via WebSearch, and the 5 content types.
