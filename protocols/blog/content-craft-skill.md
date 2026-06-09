---
name: content-craft
description: The craft and vocabulary contract for randomyl.com. Defines what makes each content unit genuinely useful and correct — a how-to step that actually works, a curated list entry that earns its place, an explainer paragraph that's accurate, a comparison row that's fair, a scripture entry quoted exactly with its translation named — and the domain terminology used correctly across randomyl's clusters (QR codes, random phone numbers, Bible/Christian, online privacy, word generators). Covers how to write each unit, how to group a list so it isn't a wall, how to write steps a reader can follow without getting stuck, and how to frame the tools honestly (for legitimate testing/QA/privacy/education use, never fraud or spam). Pairs with blog-os-master, page-structures, and accuracy-and-trust (accuracy-and-trust-skill.md). This is the role the materials-and-terminology guide played in the original pack.
---

# Content Craft & Terminology — Write Units That Actually Help

randomyl.com covers several corners of the random-generator world — QR codes, random and fake phone numbers, Bible verses and Christian topics, online privacy, and word generators (nouns, objects). Each post is built from small **content units**: a step in a how-to, an entry in a curated list, a sentence that explains how something works, a row in a comparison table, a verse paired with its meaning. A post reads as competent — and actually *helps* — only when every one of those units is built correctly and the vocabulary is used the way the field actually uses it. A how-to step that skips the part where the QR code is tested quietly fails the reader at the print shop; a "fake" phone number presented as if it were a real working line invites misuse; a Bible verse paraphrased and passed off as a quote breaks trust with a reader who knows the text. This is a hard product rule, not a stylistic preference (see `blog-os-master.md` and `accuracy-and-trust-skill.md`).

## The one rule

**Write every unit so a real person can act on it and trust it — each step works, each fact is correct, each claim is sourced or cut, each example is reproducible.** When a thing genuinely varies or is uncertain, say so honestly rather than flattening it to a false certainty. Carry the same care from the steps to the tips to the FAQ.

❌ "Just generate the QR code and you're done." (skips the test step — the #1 way QR codes fail in the wild)
❌ "A random phone number generator gives you a working second line." (false — these produce format-valid, unassigned numbers, not live lines)
❌ "Be still and know — Psalm 46." (misquoted and mis-referenced — it's "Be still, and know that I am God," Psalm 46:10)
✅ "Generate the code, then scan it with your own phone camera before you download or print it."
✅ "A random phone number generator produces realistic, correctly formatted numbers that aren't assigned to a live line — useful for testing forms and protecting your real number."
✅ "*Be still, and know that I am God.* (Psalm 46:10, NIV)"

## The six marks of a well-formed content unit

1. **Correct.** The step works, the format is valid, the fact matches an authority, the verse is exact. Correctness is the whole job (see `accuracy-and-trust-skill.md`). A confidently wrong unit is worse than no unit.
2. **Actionable.** The reader can do something with it. A how-to step names the action and its result ("Download the PNG and scan it to confirm it resolves"). A list entry says why it's here and how to use it, not just what it is.
3. **Specific and concrete.** "Use a 2-inch minimum print size with a quiet zone around the code" beats "make it big enough." Concrete numbers, formats, and examples are easier to trust and to use — but only real ones (never invented; see the slop rules in `blog-os-master.md`).
4. **Self-contained at the point of need.** The reader skims to the unit they need and it works without backtracking. Define a term where it's first used; don't assume they read the intro.
5. **Honest about limits.** Where a tool, format, or claim has edges, name them. A random phone number is for testing and privacy, not for receiving real calls or SMS. A QR code's error correction has limits. The evidence behind a stat may be modest. Saying so is a trust win, not a weakness.
6. **Scannable in shape.** One idea per step, per bullet, per row. Short, speakable sentences for instructions; a reader following a how-to is doing two things at once. Brevity is part of the craft.

## Writing each unit type

randomyl's posts are built from a handful of recurring unit types. Each has its own craft.

- **The how-to step.** Numbered, imperative, one action per step, and it states the *result* so the reader knows it worked ("Paste your URL into the field — the preview updates to show the new code"). Order steps the way the reader actually does them. End the sequence with a verification step (test the QR scan, send the test SMS to the form, preview the verse). Never leave the reader at "and that's it" before the thing is confirmed working.
- **The curated-list entry.** Each entry earns its place: the item plus the one thing that makes it worth listing — when to use it, why it fits, the catch. For "Bible verses about anxiety," each verse comes with the exact quote, the reference and translation, and a sentence of plain context. A bare list of items with no framing is the thin-content trap (see `blog-os-master.md` rule 2 and the thin-list trap in `google-trust-audit-skill.md`).
- **The explainer paragraph.** Defines or explains a concept (how a QR code stores data, what E.164 means, why "Jesus wept" is its own verse). Accurate, plain, and grounded — source the load-bearing claim, and prefer a worked example over an abstraction.
- **The comparison row.** A fair, parallel comparison across real dimensions. randomyl's renderer supports Markdown tables, so a genuine comparison (formats, tools, options, costs) belongs in a table with consistent columns — not a vague "X is better than Y." Compare like for like; note the trade-off, don't crown a winner the evidence doesn't support.
- **The scripture entry.** A first-class unit in the Bible cluster: the verse quoted **exactly**, the reference correct (Book chapter:verse), the **translation named**, then plain-language meaning or application. Never paraphrase a verse and present it as a quote; never cite from memory. See `accuracy-and-trust-skill.md`.
- **The code / embed snippet.** For QR-embed and developer-leaning posts, fenced code blocks render and are syntax-highlighted. Show real, working, minimal snippets (HTML inside a ```html block, JSON inside ```json). Test the snippet's logic before shipping it; a copy-paste block that doesn't work is a broken step.

## Grouping a list so it isn't a wall

A bare run of 30 verses or 20 use-cases is thin content and hard to use. Group every list:

- **By situation / use-case** — for QR codes: flyers, menus, business cards, events; for phone-number testing: form validation, demo data, privacy sign-ups.
- **By sub-theme** — for a "Bible verses about anxiety" post: trusting God, casting your cares, peace that guards you, do-not-fear.
- **By skill level or stage** — for a tool guide: get-started basics, then customization, then troubleshooting.
- **By type or format** — for phone formats: local, national, international/E.164; for QR: static vs dynamic, URL vs vCard vs Wi-Fi.

Give each group a `##` (or `###` under a section), frame it in one sentence, then the entries as list items (or a table where it's genuinely tabular). The grouping *is* part of the original value (see `blog-os-master.md` rule 2).

## The terminology — use each field's own words correctly

- **QR code** — a two-dimensional barcode that stores data (URL, text, vCard, Wi-Fi) read by a camera. **Static** QR = the data is fixed in the code; **dynamic** QR = the code points to a short URL you can edit later (a redirect). **Quiet zone** = the empty margin a scanner needs. **Error correction** (levels L/M/Q/H) = how much of the code can be damaged or covered (e.g. with a logo) and still scan. Use these precisely; don't call a static code "editable."
- **Random vs. fake phone number** — randomyl generates **format-valid, randomly chosen numbers that aren't assigned to a live line**. They're "fake" only in the sense of *not your real number* and *not a working subscriber line*. Frame them for legitimate use — testing forms, demo/sample data, QA, protecting your real number on a throwaway sign-up — never as live lines that receive calls or texts, and never for fraud, spam, or harassment.
- **Phone-number formats** — use the real standards: **E.164** (the international format, `+` and up to 15 digits, e.g. `+14155550123`), **NANP** (the North American Numbering Plan: `NXX-NXX-XXXX`), **national** vs **international** notation. The `555-01XX` range is the reserved fictional-number block (per the NANP) — the correct example range to use, and worth teaching. Don't invent area-code rules.
- **Scripture / Bible references** — Book chapter:verse (e.g. Philippians 4:6–7). Name the **translation** (NIV, ESV, KJV, NLT, NKJV…) every time you quote. A "passage" spans verses; a "chapter" is the numbered division; the "books" are the 66 (Protestant canon) — get counts right and source them. Quote exactly. See `accuracy-and-trust-skill.md`.
- **Online privacy terms** — use them correctly: **PII** (personally identifiable information), a **disposable / masked number**, a **data broker**, **opt-out**. Don't overstate what a tool protects ("anonymous" vs. "reduces what you share").
- **Word-generator terms** — a **noun**, a **concrete vs. abstract noun**, a **prompt**; for object generators, keep it about brainstorming, writing prompts, games, and vocabulary. Plain and correct.

## Consistency & defining on first use

- **Define the domain terms on first use** in a guide: "a dynamic QR code (one that points to a short link you can edit later)."
- **Carry one voice and one level of assumed knowledge through the post.** If the guide opened for a beginner, don't switch to unexplained jargon at the troubleshooting section.
- **Match the register to the audience/tone modifier** (a business reader, a developer, a faith reader, a beginner) **without breaking the six marks** — a developer-leaning post is still correct, actionable, and honest; it just assumes more.
- **Ranges use an en dash:** "8–15 digits", "2–3 verses to memorize", "level Q–H error correction".

## How to present a grouped section (the four-part pattern)

A grouped section is where the reader actually acts, so it's high-stakes. Each group follows this pattern:

1. **Name the group with a `##`/`###`** that says when or why to use it ("QR codes for restaurant menus", "Verses for when worry keeps you up").
2. **Frame it in one sentence** — when this set applies and how to use it.
3. **List the entries** as steps, bullets, a table, or verse blocks — correct, actionable, and self-contained.
4. **Offer a using tip or a caveat** where useful — the print size, the test step, the translation note, the legitimate-use reminder.

A complete answer therefore reads: grouped by use-case, each group framed, every unit correct and reproducible, with the honest caveat the reader needs to avoid the common mistake.

## Re-audit hook

Every post passes this content-craft & terminology check before it ships (folded into the master re-audit):

- [ ] Every **how-to step works** and ends in a verification step; no step leaves the reader stuck or at "and that's it" before the thing is confirmed.
- [ ] Every **list/comparison entry earns its place** — framed with when/why/how, not a bare wall.
- [ ] Every **fact, format, and snippet is correct** and reproducible (QR specs, E.164/NANP formats, embed code) — sourced where load-bearing, cut where unverifiable.
- [ ] Every **scripture quote is exact**, correctly referenced, with the **translation named** (see `accuracy-and-trust-skill.md`).
- [ ] The **tools are framed for legitimate use** (testing, QA, demos, privacy, education) — never fraud, spam, or harassment.
- [ ] Units are **specific and honest about limits**; lists are **grouped** with each group framed in a sentence.
- [ ] Domain **terminology** (static/dynamic QR, E.164/NANP, translation names, PII) used correctly and consistently; defined on first use in guides.

---

**Write the unit a real person can act on and trust.** Correct, actionable, specific, honest about its limits — grouped so the list helps, and never a step that fails them or a claim that can't be sourced.
