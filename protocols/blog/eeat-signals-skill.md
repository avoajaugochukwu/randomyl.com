---
name: eeat-signals
description: Experience, Expertise, Authoritativeness, Trustworthiness — the four signals Google uses to judge whether a page deserves to rank. This skill codifies the concrete on-page elements that demonstrate E-E-A-T for a random-generator-tools blog: the "Ugo Charles" author byline, the publisher signal, instructions that are correct and reproducible, technical/statistic claims traced to standards bodies / regulators / .edu / named studies, scripture quoted accurately with the translation named, first-person experience markers, keeping content current (the frontmatter `lastModified` field feeds dateModified — it exists on this site), named source citations, and responsible YMYL framing (legality-and-privacy-not-legal-advice, legitimate-use framing for phone/fake-number tools, no fabricated stats).
---

# E-E-A-T Signals — the trust layer

> E-E-A-T is not a ranking algorithm. It is the framework Google's human Quality Raters use to evaluate pages, and the algorithm tries to approximate their judgment. So E-E-A-T is real, even though it is not a number.

Every post on this site has to prove four things before it deserves to rank:

1. **Experience** — has the author actually done the thing they are writing about (generated and scanned the QR code, seeded a test database with generated numbers, prayed the scripture, embedded the snippet and watched it render)?
2. **Expertise** — does the author know the field (what makes a QR code scan, the real phone-format standards, the correct verse and translation, where legality actually turns)?
3. **Authoritativeness** — is the site a recognized voice in this space?
4. **Trustworthiness** — is the page honest, current, accurate, responsible about legality/privacy, and genuinely useful?

This skill is the checklist of on-page elements that make those four claims visible. Without them, the post is a faceless wall of text and Google has no reason to rank it over the thousand other walls of text on the same topic.

For a random-generator-tools blog, the single highest-leverage trust signal is **instructions that actually work + sourced claims**: the internet is full of "best QR generator" pages that hand the reader broken embed code, invalid phone formats, vague non-reproducible steps, fabricated "90% of businesses…" statistics, and misquoted scripture. A page whose steps are correct and reproducible — and whose technical claims (QR specs, E.164/NANP formats) trace to a standards body, regulator, `.edu`, or named study, whose verses are exact with the translation named, and whose legality/privacy framing is responsible — is doing something most competitors don't bother to.

---

## YMYL — when E-E-A-T matters most

Google holds "your money or your life" topics to a higher bar. YMYL topics include:

- Financial advice
- Medical / mental-health information
- Legal information
- News and current events
- Civic information (voting, government)

**A random-generator-tools blog sits adjacent to YMYL — and several of its core topics are squarely inside it.** randomyl's content touches **legality** (is it legal to use a random/fake phone number), **privacy** (data-privacy tools, online safety), and **faith** (Bible/Christian). That means trust signals matter *more* here, not less. The bar is met by **correct, reproducible instructions + true technical/statistic claims cited to a standard / regulator / .edu / study + scripture quoted exactly with the translation named + responsible legality/privacy framing (general information, not legal advice; legitimate-use, never fraud) + the "Ugo Charles" byline + content kept current** — and by never handing out a confident legal absolute or encouraging misuse of a generator.

**The real-stakes corners that raise the care bar:**

- **Legality / privacy topics** — random/fake phone numbers, data privacy, "is it legal to use X". Add a light, non-alarmist note that this is general information, not legal advice, and frame the tools for **legitimate** use (software testing, QA, demos, privacy, education) — never fraud, spam, harassment, or evading the law. (See `accuracy-and-trust-skill.md`.)
- **Faith / scripture** — any quoted verse must be exact, the reference correct, and the translation named (NIV/ESV/KJV/NLT). Don't bend a verse to fit a theme.
- **Technical correctness** — a QR-embed snippet must render a scannable code, a stated phone format must be valid, a scan step must match real behavior; confirm specs against the standard. (See `research-and-citation-skill.md`.)

Everything else skates by on the ordinary trust signals — but because so many of this blog's topics touch one of these corners, the responsible-claims discipline is in play often.

---

## The on-page signals (mandatory)

### Signal 1 — Author byline ("Ugo Charles")

Every post displays an author in the post header. The blog route (`app/blog/[slug]/page.tsx`) renders a visible byline alongside the published date, and **already emits `BlogPosting` JSON-LD** on every post — `author` (Person), `publisher` (Organization "Randomyl"), `headline`, `datePublished`, `dateModified`, and more, all derived from the frontmatter. So the byline is both visible on-page and carried in structured data; you do not hand-write that schema.

On randomyl the byline is a **real author name**, not a brand persona. The frontmatter `author` field standardizes on **"Ugo Charles"**, which the route renders as the visible byline and emits as the JSON-LD `author`:

```yaml
author: "Ugo Charles"   # the byline on every post (code's fallback default is "Randomyl Team", but we write Ugo Charles)
```

**Rule:** never publish under "Admin" or "Staff" or a random handle. "Ugo Charles" is the consistent author byline for this site — a real person who writes and reviews the content to a consistent editorial standard (instructions that actually work, sourced technical claims, accurate scripture, responsible legality/privacy framing). If a specific guest contributor ever writes a post, name them in `author`; otherwise it stays "Ugo Charles."

### Signal 2 — Brand/editorial standard at footer

At the bottom of every post, the editorial standard should be visible (a short "About Randomyl" / editorial-note block):

- The Randomyl name and the "Ugo Charles" byline
- A 60–120 word note on what Randomyl is and how its content is made
- One link: to the About page
- Social links if applicable

Editorial-note rule: the note should make the *specific* claim that makes Randomyl qualified to publish *this* kind of content. Generic notes ("Randomyl makes random generators") are inert. Specific notes ("Every Randomyl how-to is tested so the steps actually work; every phone format is checked against E.164/NANP and every QR spec against ISO 18004; every Bible verse is quoted exactly with the translation named; and we frame our tools for legitimate testing, QA, and privacy use, never fraud") carry weight.

### Signal 3 — About / publisher page

The site has an About page (treat this as the site convention) that backs the author byline. It is a high-E-E-A-T artifact in its own right and contains:

- What Randomyl is and who it's for (anyone who needs a free random generator — QR codes, phone numbers, Bible verses, nouns, objects — and the supporting how-to/explainer content around each)
- The editorial standard: instructions tested to actually work, technical claims checked against standards and regulators, scripture quoted exactly with translations named, legality/privacy framed responsibly as general information for legitimate use
- Links to the main hubs (the tools, key cluster pillars)
- Contact info
- Social profiles
- A clear statement of scope ("Randomyl provides free generators and supporting guides for legitimate use such as testing, QA, demos, privacy, and education. Our legality and privacy content is general information, not legal advice — check the rules that apply to you.")

Schema note: the route **already emits `BlogPosting` JSON-LD and a `publisher` Organization ("Randomyl", logo `/opengraph-image`)** on every post, plus canonical, hreflang, OpenGraph, and Twitter tags from the frontmatter. So `BlogPosting` and publisher schema ship and are correct — rely on them, don't duplicate them in the body. **`FAQPage` and breadcrumb schema are NOT wired** — treat those as future renderer enhancements; never claim they ship. FAQ content lives in the body as a prose `## Frequently asked questions` section, which is good practice regardless.

### Signal 4 — Correct, reproducible instructions & true, sourced claims (the trust spine for this site)

This is the heaviest E-E-A-T signal for a tools blog. **Every instruction in a post must be correct and reproducible, and every technical/statistic/scripture claim must be true and traceable** before publish. The verification chain is:

- **The instructions** — every step, format, and snippet the reader is meant to follow must actually produce the stated result: the QR-embed code renders a scannable code, the phone format is valid (E.164 / NANP where claimed), the scan step matches real phone behavior (see `content-craft-skill.md`). "Paste the URL, pick a size, download, scan before you print" works because each step is real; a snippet that errors or a format the validator rejects is broken content. And nothing misuse-encouraging: no framing that steers a reader toward fraud, spam, or harassment with a fake-number generator.
- **The facts** — any technical claim (QR capacity, error-correction, phone-format rules), any cited statistic, and any legality/privacy note must trace to a **standards body or official doc (ISO 18004, ITU E.164, NANP), a `.gov`/regulator (FTC, FCC, a data-protection authority), a `.edu`, or a named study** — not a content-farm "best generator" affiliate page. No fabricated "90% of businesses…" numbers, ever.
- **The scripture** — every verse must be quoted exactly, the reference correct, and the translation named (NIV/ESV/KJV/NLT), verified against a reputable Bible source.

See `accuracy-and-trust-skill.md` for the full **accuracy & trust gate**. In short: every instruction works, every technical/statistic claim is checked against an authoritative source, every verse is exact with its translation named, and every legality/privacy topic carries the not-legal-advice note and legitimate-use framing — and a broken instruction, an invalid format, a fabricated statistic, a misquoted verse, or a misuse-encouraging legality claim is a **publish blocker**. The post does not ship until it's fixed.

When something genuinely varies (a phone format that depends on country, a QR capacity that depends on error-correction level, a legality that depends on jurisdiction and use), say so rather than asserting one universal "this always works":

> A random phone number generator is great for seeding test data, but "valid" depends on the country. A US number follows the North American Numbering Plan; an international one follows the E.164 rules and tops out at 15 digits. Generate to the format your system expects, and confirm it passes your validator before you rely on it.

Honest "here's what it can and can't do" framing is itself a trust signal, and it is exactly what AI-slop tool sites never do.

### Signal 5 — Keeping content current (the `lastModified` field EXISTS on this site)

Every post carries a `date` (publish date) and a **`lastModified`** field in the frontmatter. **Unlike the old setup, this site DOES have a modified-date field** — `lastModified` feeds `dateModified` in the `BlogPosting` JSON-LD and `og:modifiedTime`. Bump it when you meaningfully update a post.

```yaml
date: "2025-03-02T15:35:00.000Z"          # datePublished / og:publishedTime — the publish date the post surfaces
lastModified: "2025-05-03T22:02:00.000Z"  # dateModified / og:modifiedTime — bump this on a substantive edit
```

Track currency by:

- **Bumping `lastModified`** on a substantive edit — this is the real, machine-readable signal that the post was refreshed, and it flows straight into the structured data.
- **Git history** — substantive edits (re-checking a spec, correcting a verse, fixing an embed snippet, adding internal links) are captured in the commit log, which is the human record of when a post changed.

Rule: a *substantive* change is correcting a technical claim, fixing a misquoted verse, repairing a broken snippet, strengthening the legality/privacy note, reworking a section, or adding internal links — not fixing a typo. Bump `lastModified` and record the change in git. (No `readingTime` or `status` field — reading time is auto-computed from word count, and a file existing in `content/blog/` IS published; don't add either field.)

### Signal 6 — First-person experience markers

This is the "Experience" letter in E-E-A-T, added in Google's December 2022 update specifically to push back against AI-generated theoretical content.

Where it applies, mark first-person experience in the prose:

- "I generated a QR code for my café menu, printed it on a test flyer, and scanned it from across the table — the first version failed because the URL was too long and the contrast was low, so I shortened the link and bumped the size."
- "When I needed 500 fake numbers to seed a staging database, the generated ones only passed our validation regex once I generated them in proper E.164 format — random 10-digit strings kept getting rejected."
- "I embedded the QR snippet myself and watched it render inside the HTML code block before I trusted it in the post."
- "Reading 1 Peter 5:7 each morning during a stressful launch gave me something concrete to come back to."
- "I tested the same QR code on an old phone and a new one — the camera app picked it up instantly on the new one, but the old one needed a dedicated scanner, which is exactly the gap the troubleshooting section now covers."

Generic prose:
> "A QR code generator turns a link into a scannable square."

First-person prose:
> "I assumed any QR generator would just work, but my first menu code wouldn't scan from a printed flyer — the URL was too long and the error-correction too low. Regenerating it shorter and larger fixed it, and that failure is why this guide leads with the three things that actually break a code."

The second version is the same idea, but it has *experience* in it. Google's HCU classifier is built to detect the difference.

**Constraint:** never fabricate experience. If the steps weren't actually run, don't claim they were. And never invent a "this tool saved my business" testimonial — that's both a fabricated experience and a trust violation. Better to cite a standard, regulator, or study by name than to invent a fake "I tried this and it worked perfectly."

### Signal 7 — Named source citations

Every tool guide, explainer, and any post that asserts a technical, statistic, or legality claim cites at least two named, authoritative sources for its facts. Full citation:

> The [QR Code standard (ISO/IEC 18004)](URL) defines the symbol versions and error-correction levels that determine how much data a code can hold. (source)

> The [FTC](URL) describes which automated and spoofed calls are unlawful, which is why this guide frames generated numbers for testing and QA only. (source)

Citation rule: **source + publication + linked reference** (and **translation named** for any scripture). Anything less is contraband.

Go to the primary source — the standards doc, the regulator, the reputable Bible reference — wherever possible. Quoting an affiliate roundup that paraphrases a spec is two steps removed and is exactly how fabricated "statistics" and broken formats spread.

### Signal 8 — Primary-source citations

E-E-A-T's "trustworthiness" letter. The post links to ≥ 3 primary or reputable sources (more for pillars, explainers, and legality posts). Strong sources for randomyl content are:

- **Standards bodies and official docs** (ISO/IEC 18004 for QR, ITU E.164 and the NANP for phone formats, MDN/W3C for HTML embed) for technical specs
- **`.gov` and regulators** (FTC, FCC, a data-protection authority) for legality, robocall/spam, and privacy claims
- **University / research `.edu`** pages and named studies for any statistic
- **Reputable Bible references with the translation named** (Bible Gateway, recognized NIV/ESV/KJV publishers) for scripture
- **Recognized reference and developer documentation** (MDN Web Docs) for general technical context

What does **not** count as primary:

- Pinterest, generic "best generator" affiliate blogs, and "50 uses" listicles
- A competitor's tool page (write and verify your own)
- AI-generated summaries
- Reddit, Quora, Medium (useful for audience voice in research — not as a fact source)
- Vendor/sales copy quoted to imply a spec or a legal ruling

### Signal 9 — Editorial-standard display

Where the post asserts a technical claim or covers a legality/privacy topic, display the standard inline somewhere in the post body (a `>` blockquote works well):

> "Every step here was tested so it actually works, every phone format is checked against E.164/NANP and every QR spec against ISO 18004, and any Bible verse is quoted exactly with the translation named. Our tools are for legitimate use — testing, QA, demos, privacy, education — and our legality notes are general information, not legal advice."

This is much stronger than burying the standard in the footer note. The reader sees the editorial rigor in context, where it earns trust for the specific claims.

### Signal 10 — Corrections policy

The site should have a public corrections policy linked from the footer:

> "We fix mistakes in our posts — especially a technical detail that's off, an embed snippet that broke, a misquoted Bible verse, or a legality note that needs nuance. Spot something? [Reply to us](mailto:...) and we'll fix it. Corrections are noted at the bottom of the affected post with the date and what changed."

The renderer (`components/MarkdownRenderer.tsx`) supports full GitHub-Flavored Markdown, so a correction is just a `>` blockquote (the styled note box) at the bottom of the post:

> **Correction (2026-05-10):** This post previously cited a "90% of businesses" statistic with no source; that figure has been removed and replaced with attributed, honest language. The embed snippet has been corrected so it actually renders a scannable code, and the Psalm 23 quote has been corrected to the NIV wording with the reference named. (We also bumped `lastModified`.) Corrected.

This is a strong trust signal. Sites that publicly track corrections look serious. Sites that quietly edit look sketchy — and for a tools site, publishing a broken instruction, a fabricated statistic, or a misquoted verse and silently fixing it is exactly the failure mode readers distrust.

---

## What E-E-A-T is NOT

Common confusions:

- **It is not keyword density.** Stuffing the footer note with keywords doesn't help.
- **It is not link count.** Ten low-quality outbound links hurt more than three primary sources.
- **It is not "AI disclosure".** Google's stated position is that AI use is fine as long as the content is helpful and accurate. Adding "this post was written by AI" doesn't earn or lose ranking by itself. The page either has E-E-A-T or it doesn't.
- **It is not just for YMYL.** Several of this site's core topics ARE YMYL (legality, privacy, faith) — and correct, reproducible instructions + true, sourced claims + accurate scripture + responsible legality/privacy framing are exactly the signals that set a serious tools blog apart.

---

## E-E-A-T audit checklist (run on every post before publish)

### Author / brand signals
- [ ] Visible byline present (default: **Ugo Charles**, via the frontmatter `author` field)
- [ ] About / publisher page exists and is linked (where the convention is in place)
- [ ] Brand editorial note rendered at the post footer
- [ ] Note contains a *specific* claim of relevant editorial standard (tested instructions, checked specs, accurate scripture, responsible legality/privacy framing)
- [ ] Byline flows into the `BlogPosting` JSON-LD `author` automatically (it ships) — do not hand-write the schema

### Accuracy signals (the spine for this site)
- [ ] Every instruction is correct and reproducible (steps work, formats valid, snippets render) and not misuse-encouraging
- [ ] Every technical/statistic claim traces to a standard / regulator / .edu / named study — no fabricated "90% of businesses…" numbers
- [ ] Every scripture quote is exact, the reference correct, and the translation named (NIV/ESV/KJV/NLT)
- [ ] Where the answer genuinely varies (country, error-correction level, jurisdiction) it's given honestly — not a false single "this always works / this is always legal"

### Responsible-claims signals (only if the post touches a legality/privacy, faith, or technical topic)
- [ ] Light, non-alarmist "general information, not legal advice" note present where the topic is legality/privacy, with legitimate-use framing (testing, QA, demos, privacy, education — never fraud/spam/harassment)
- [ ] Faith content: scripture handled per the accuracy rule (exact, referenced, translation named)
- [ ] Technical content: specs confirmed against the standard and snippets tested

### Experience signals
- [ ] At least one first-person experience marker in the body (e.g. "I scanned the printed code from across the table and the first version failed") OR a named standard / regulator / study explicitly cited
- [ ] If the author actually ran the task (generated and scanned a code, seeded test data, embedded the snippet, prayed the verse), it is stated inline

### Trust signals
- [ ] `date` set correctly; `lastModified` bumped on substantive edits (this field EXISTS and feeds `dateModified` — use it)
- [ ] ≥ 3 outbound links to primary / reputable sources (more for pillars/explainers; standard / regulator / .edu / study / reputable Bible source preferred)
- [ ] ≥ 2 named source citations with full attribution + linked reference (where the post asserts technical or legality facts)
- [ ] Every technical/statistic fact cited or traceable; every instruction reproducible; every verse exact with translation named
- [ ] Corrections policy linked in the footer
- [ ] If the post has been previously corrected, the correction is logged at the bottom (a `>` blockquote) and `lastModified` bumped

---

## E-E-A-T anti-patterns

These are the easy-to-spot mistakes:

- **Faceless or wrong byline.** "By Admin" → fix by using the author byline (default: **Ugo Charles**)
- **Generic footer note.** "We love random tools" → fix by stating the specific editorial standard (tested instructions, checked specs, accurate scripture, responsible legality/privacy framing)
- **Fabricated statistic.** "90% of businesses use QR codes" with no source → fix by cutting it or replacing with an attributed, sourced figure or honest general language
- **Broken instructions.** A how-to with a QR-embed snippet that doesn't render or a phone format the validator rejects → fix by correcting against the standard and testing per `content-craft-skill.md`
- **Misquoted scripture.** A verse with altered wording, wrong reference, or no translation named → fix by quoting exactly, correcting the reference, naming the translation
- **Irresponsible legality claim.** "It's totally legal to use fake numbers for anything" or framing that invites misuse → fix by adding the not-legal-advice note and legitimate-use framing
- **Missing legality/privacy note.** An "is it legal" or privacy post with no general-information-not-legal-advice note → fix by adding the light, non-alarmist note
- **Stale-date confusion.** Forgetting to bump `lastModified` on a substantive edit → this field EXISTS; bump it (and never add `readingTime`/`status`, which don't exist)
- **AI-only voice.** Zero first-person markers across a 1,200-word post → fix by inserting at least one specific moment of actually running the task
- **Standards by implication.** Footer says "carefully made" without showing the method → fix by being specific

---

## What to do if there's no named expert author

Randomyl publishes under the "Ugo Charles" byline, not a standards-committee engineer or a practicing attorney — and that's fine, because the trust comes from method and responsibility, not titles.

The footer note should declare Randomyl's *actual* standard, honestly:

> "Randomyl isn't a standards body, and Ugo Charles isn't your lawyer. We're people who got tired of tool guides full of made-up statistics, embed code that doesn't render, and 'is it legal' takes with no nuance — so we test every how-to so the steps actually work, check every phone format against E.164/NANP and every QR spec against ISO 18004, quote every Bible verse exactly with the translation named, and frame our generators for legitimate use like testing, QA, and privacy. Our legality and privacy notes are general information, not legal advice."

This honest framing is actually a strong trust signal. It is the AI-slop sites that confidently publish fabricated "90% of businesses" stats, broken snippets, and misquoted verses. A site that tests its instructions, sources its specs, quotes scripture exactly, and is honest about what its tools are and aren't for earns more trust than a fake authority.

For posts on **legality/privacy topics** specifically (is-it-legal, data privacy), the trust gap is closed not by a credential but by the not-legal-advice note, the legitimate-use framing, and cited authority — see the YMYL guidance above.

---

**BlogOS** — pages that earn the ranking they get.
