---
description: Audit + fix an existing randomyl.com blog post against the full BlogOS pack
argument-hint: <slug>
---

# /b-review — Audit and fix an existing post

Resolve the post **$ARGUMENTS** at `content/blog/$ARGUMENTS.md`, audit it against the full BlogOS pack, re-walk every instruction, re-verify every claim, fix what's wrong, bump `lastModified`, and write it back — refusing to ship if a broken step or an unverifiable claim remains.

If `$ARGUMENTS` is empty, ask for a slug (or list `content/blog/*.md`) and stop. If `content/blog/$ARGUMENTS.md` doesn't exist, say so and stop.

## Load the pack first

Read these before auditing:
- @protocols/blog/blog-os-master.md
- @protocols/blog/page-structures-skill.md
- @protocols/blog/content-craft-skill.md
- @protocols/blog/accuracy-and-trust-skill.md
- @protocols/blog/google-trust-audit-skill.md
- @protocols/blog/seo-and-schema-skill.md
- @protocols/blog/scannable-formatting-skill.md
- @protocols/blog/update-discipline-skill.md

Pull in other craft skills as needed (`@protocols/blog/README.md` is the index). If `@protocols/voice-profile.md` exists, read it and preserve any voice-locked language verbatim; otherwise fall back to `@protocols/site-voice-profile.md`.

## The audit (do this in order)

1. **Read the post** at `content/blog/$ARGUMENTS.md` — frontmatter and body.

2. **Frontmatter scan.** Confirm `title`, `slug`, `excerpt`, `metaDescription`, `date`, `lastModified`, `author`, `tags`, `featuredImage` are present and correctly named; `metaDescription` is a full 150–160 chars and distinct from `excerpt`; no invented fields (`metaTitle`, `readingTime`, `status`); no hand-written schema in the body (it ships from the route).

3. **Body scan.** No `#` H1 in the body (`title` owns the H1); `##` → `###` no skips; a leading `>` blockquote answer near the top; tabular content is a real Markdown table and snippets are fenced code blocks; no semicolons, stray ellipses, em-dash-as-crutch, bracketed YouTube notation, or AI-slop phrases; every how-to sequence ends in a verification step; a `## Frequently asked questions` section exists where the type calls for it.

4. **Content craft & terminology.** Every step/entry correct, actionable, self-contained; lists grouped and framed; domain terms (static/dynamic QR, E.164/NANP, translation names, PII) correct and consistent (`content-craft-skill.md`).

5. **The hard gate (`accuracy-and-trust-skill.md`).** Re-walk every instruction as the reader. Re-verify every load-bearing claim against an authority via WebSearch/WebFetch — specs, statistics, scripture (exact wording + reference + translation), legality/privacy. Bucket each Verified / Range / Contradicted / Unverifiable. Confirm the tools are framed for legitimate use only and any legality content carries the "general information, not legal advice" note. **Fix the canonical failures** (e.g. an unsourced "40 million adults" stat → attach a real ADAA/NIMH citation or cut; a paraphrased verse → quote exactly; a "fake number works as a real line" claim → correct it).

6. **SEO & structure.** Target query in title, the answer blockquote, the first 100 words, one `##`, slug, image alt, and metaDescription; 3–6 internal links to siblings plus the tool the post supports; scannability event every 200–300 words.

7. **Patch inline (literal swaps only).** Don't reorganize sections during verification. Preserve voice-locked language.

8. **Decide.** If any load-bearing claim ends Unverifiable or any instruction ends Contradicted-and-unsalvageable, emit ONLY the audit with `❌ POST NOT SHIPPED — claims unverified / instructions broken` and do **not** overwrite the file. Otherwise:
   - **Bump `lastModified`** to today (ISO 8601). Leave `date` (original publish date) unchanged.
   - Write the corrected post back to `content/blog/$ARGUMENTS.md`.
   - Append a rotation-log entry to `@protocols/rotation-log.md`.
   - Output the `===AUDIT===` block (Grounding / Instructions & facts verified / Patches applied / Trust signals / Content-craft check / Slop & structure fixes) and confirm the file was updated.

## Non-negotiables

- Edits go into the Markdown file; bump `lastModified`, never `date`.
- Every instruction works and ends in a check; every claim sourced or cut; scripture exact + translation named; tools for legitimate use only.
- A broken step or an unverifiable claim blocks the rewrite from overwriting the file.
