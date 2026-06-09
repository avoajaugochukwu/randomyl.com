---
description: Research + draft a randomyl.com blog post → content/blog/<slug>.md (with the accuracy & trust gate)
argument-hint: <topic or keyword>
---

# /b-write — Research, draft, and ship a post

Take the topic **$ARGUMENTS**, research it, draft it per the BlogOS pack, run the hard accuracy & trust gate and the mandatory re-audit, and write the finished post to `content/blog/<slug>.md`.

If `$ARGUMENTS` is empty, ask for a topic/keyword and stop.

## Load the pack first

Read these before drafting:
- @protocols/blog/blog-os-master.md
- @protocols/blog/page-structures-skill.md
- @protocols/blog/content-craft-skill.md
- @protocols/blog/accuracy-and-trust-skill.md
- @protocols/blog/keyword-research-skill.md
- @protocols/blog/title-meta-slug-skill.md
- @protocols/blog/featured-snippet-skill.md
- @protocols/blog/conclusion-and-cta-skill.md
- @protocols/blog/variety-rotation-skill.md

Pull in any other craft skill as needed (`@protocols/blog/README.md` is the index). If `@protocols/voice-profile.md` exists, read it and treat it as a `===SITE VOICE LOCK===` you must preserve verbatim; otherwise fall back to `@protocols/site-voice-profile.md`.

## The pipeline (do this in order)

1. **Identify the content type + the tool it supports.** From the intent of `$ARGUMENTS`, pick one of the 5 types in `page-structures-skill.md` (🛠️ tool guide / 🔍 explainer / 📋 listicle / ⚖️ decision-comparison-legality / 🙏 faith-scripture) and the tool the post routes to. If genuinely ambiguous, ask one question; otherwise proceed.

2. **Pass 1 — Grounding (WebSearch + WebFetch).** Study the SERP for the target query, read the People-Also-Ask box, and confirm the load-bearing facts against authorities (ISO/IEC 18004 for QR specs, ITU E.164 / the NANP for phone formats, a reputable Bible source for any verse + translation, .gov/regulators for legality/privacy, named research for any statistic). Find 3–6 sibling posts in `content/blog/` to cross-link. Write a short **Grounding** block. If you can't find a way to make the post non-generic or can't source the load-bearing facts, stop and output `NEEDS MORE RESEARCH — <topic>`.

3. **Check rotation.** Read the recent entries in `@protocols/rotation-log.md` and pick slot values that differ from the last post(s) in the same cluster (intro pattern, body structure, worked-example framing, conclusion shape, CTA target).

4. **Plan the skeleton.** Codify the `##`/`###` heading skeleton from the content type's body skeleton in `page-structures-skill.md` before writing prose.

5. **Draft.** Write the frontmatter block + GFM body:
   - Frontmatter: `title`, `slug`, `excerpt`, `metaDescription` (150–160 chars, separate from excerpt), `date` (today, ISO 8601), `lastModified` (= date for a new post), `author: "Ugo Charles"`, `tags` (1–4), `featuredImage: "/blog/<slug>.webp"`.
   - Body: a leading `>` blockquote answer (40–60 words), then the steps / grouped list / comparison table / verse blocks per the skeleton, the why-it-works framing, a `## Frequently asked questions` section (2–4 `###` questions from PAA), and one CTA to the tool or a sibling. **No `#` H1 in the body.** No hand-written schema.

6. **Pass 2 — The hard gate (`accuracy-and-trust-skill.md`).** Walk every instruction as the reader (each step correct, actionable, ends in a verification step). Verify every load-bearing claim against the authority; quote scripture exactly with the translation named; add the "general information, not legal advice" note where the post turns on legality; frame the tools for legitimate use only. Patch inline (literal swaps only). Bucket each item Verified / Range / Contradicted / Unverifiable.

7. **Mandatory re-audit (`blog-os-master.md` STEP 8).** Run the full re-audit checklist, fix every violation, and confirm fixes introduced nothing new.

8. **Ship.** If any load-bearing claim is Unverifiable or any instruction is Contradicted-and-unsalvageable, emit ONLY the audit with `❌ POST NOT SHIPPED — claims unverified / instructions broken` and stop. Otherwise:
   - Write the post to `content/blog/<slug>.md`.
   - Append a rotation-log entry to `@protocols/rotation-log.md`.
   - Output the `===AUDIT===` block, then tell the user the file path, note that the featured image should be placed at `public/blog/<slug>.webp`, and that they can preview at `/blog/<slug>` with `npm run dev`.

## Non-negotiables

- Markdown file only; full GFM; no `#` H1 in body; leading `>` blockquote answer; tables and code blocks where they help.
- No invented frontmatter fields (`metaTitle`, `readingTime`, `status`) and no hand-written schema — `BlogPosting` JSON-LD ships automatically.
- Every instruction works and ends in a check; every claim sourced or cut; scripture exact + translation named; tools for legitimate use only.
- One CTA. 3–6 internal links plus the tool link. FAQ from real PAA.
