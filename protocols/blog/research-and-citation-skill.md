---
name: research-and-citation
description: The discipline of sourcing and citing primary research for a random-generator-tools blog. Defines what counts as a primary source (standards bodies and technical docs for QR/phone specs, .gov and recognized legal/privacy authorities for legality and privacy claims, reputable Bible references with the translation named for scripture, named research orgs for any statistic), how to verify a factual claim and confirm an instruction is correct and reproducible, how to handle responsible-claims phrasing (legality-and-privacy-not-legal-advice, scripture accuracy, technical correctness, no fabricated stats), how to quote and cite with full attribution, how to format outbound links, and what to do when sources contradict each other. This is the skill that prevents the writer from producing a Wikipedia paraphrase with extra steps — or worse, publishing a fabricated "90% of businesses…" statistic, a QR-embed snippet that doesn't render, an invalid phone format, a misquoted Bible verse, or copy that gives confident legal absolutes or encourages misuse of a generator.
---

# Research & Citation — the discipline of primary sources

> "Studies show" is contraband. Every load-bearing claim cites a named source the reader can click through to verify — and every instruction is one you have actually confirmed works.

The fastest way to fail Google's Helpful Content classifier — and to lose credibility with any reader who knows the topic — is to write paragraphs full of factual claims with no traceable origin, or to hand the reader steps that don't actually work. This skill is the discipline of doing it the other way.

For a random-generator-tools blog, the cardinal sins are **a fabricated statistic** (a made-up "90% of businesses use QR codes" number, an invented adoption figure, or a misattributed study), **a wrong technical instruction** (a QR-embed snippet that doesn't render, an invalid phone format presented as valid, a scan step that's wrong), **a misquoted or mis-cited scripture** (a Bible verse with the wrong wording, wrong reference, or no translation named), and **an irresponsible legality/privacy claim** (a confident legal absolute, or framing that encourages using a fake-number generator for fraud, spam, or harassment instead of legitimate testing/QA/privacy use). Tool and how-to content on the open web is *saturated* with confidently wrong claims — fake adoption stats, broken embed code, invalid format examples, and copied-around misquoted verses. Repeating them destroys credibility faster than any other error. The fake-statistic and broken-instruction problems are the two biggest trust failures in this niche — catch them first. Verifying every claim, naming every translation, confirming every step works, and framing every legality/privacy topic responsibly before publishing is non-negotiable — see the verification gate below.

---

## Fabricated stats, broken instructions, misquoted scripture, and irresponsible legality claims are the cardinal sins (the verification gate)

Before any post ships, every factual claim, every instruction, every scripture quote, and every responsible-claims line must be verified. This is a hard publish blocker.

For every instruction in a draft (the steps, formats, and snippets the reader is meant to follow):

1. **Confirm it is correct and reproducible.** A working instruction can actually be followed to the stated result: the QR-embed code renders a scannable code, the phone format is valid (E.164 / NANP where claimed), the scan step matches real phone behavior. "Paste the URL, pick a size, download the PNG, scan it with your camera" works because each step is real; a snippet that throws an error or a format the validator rejects is broken content.
2. **Confirm it is not misuse-encouraging.** No framing that steers a reader toward fraud, spam, harassment, or evading the law with a fake-number or random-data generator. Where the topic is legality/privacy (random/fake numbers, data privacy), frame the tool for **legitimate** use (software testing, QA, demos, privacy, education) and add a light, non-alarmist "this is general information, not legal advice" note where relevant.
3. **Don't invent certainty.** If something depends on the platform, country, or context (a phone format that varies by country, a QR capacity that depends on error-correction level, a legality that varies by jurisdiction), say so — don't assert a false-universal "this always works / this is always legal."

For every domain claim (a technical spec, a cited statistic, an adoption figure, a legality or privacy statement):

1. **Find the authority** — a standards body or official technical doc (the QR Code / ISO 18004 spec, the E.164 ITU recommendation, the NANP for North American numbers), a `.gov` or recognized legal/privacy authority (FTC, FCC, a data-protection regulator) for legality/privacy, a university or research org (`.edu`) or named study for any statistic. Vendor marketing pages and content-farm listicles may be *mentioned* but never cited as proof of a spec or a number.
2. **Confirm the claim and its conditions.** Many facts are condition-dependent (QR capacity depends on version and error-correction level; phone format depends on country; legality depends on jurisdiction and use); cite the condition, not a bare absolute.
3. **Classify the result:**
   - **Verified** — the instruction is correct and reproducible, or the fact traces to a real authority → publish with the claim and link.
   - **Range only** — sources give a spread or the answer is genuinely conditional → publish that explicitly ("a QR code can hold up to ~4,296 alphanumeric characters at the lowest error-correction level, less at higher levels"), don't overstate it as one settled number.
   - **Unsourced** — no authority and not demonstrable → cut it or reframe it as general language ("many businesses use QR codes for menus"), never as a confirmed statistic.
   - **Fabricated / wrong / misuse-encouraging** — a "statistic" no authority supports, a snippet that doesn't render, an invalid format, a misquoted verse, or copy that promotes fraud → publish blocker, full stop. Fix or cut.

For every scripture quote:

1. **Name the translation** (NIV, ESV, KJV, NLT…) — a verse without a translation named is unverifiable and not publishable.
2. **Quote it exactly** and confirm the **reference is correct** (book, chapter, verse) against a reputable Bible source (e.g. Bible Gateway, a recognized publisher's text).

Run this as the dedicated **accuracy & trust pass** (see `accuracy-and-trust-skill.md`). A draft with any fabricated statistic, broken instruction, invalid format, misquoted verse, or misuse-encouraging legality claim does not ship.

---

## Responsible claims (a hard rule)

randomyl's tools touch **legality, privacy, faith, and technical correctness**, which makes parts of the site a YMYL space. The trust line is not negotiable:

- **Legality and privacy are not legal advice.** Where a post covers a legality or privacy topic (random/fake phone numbers, data privacy, using a generator for a given purpose), include a light, non-alarmist note: *"This is general information, not legal advice. Laws vary by country and use — check the rules that apply to you."* Never give a confident legal absolute, and never frame a fake-number or random-data generator for fraud, spam, harassment, robocalls, or evading the law. Frame these tools for **legitimate** use: software testing, QA seeding, demos, form-validation testing, privacy, and education.
- **Scripture is quoted exactly, with the translation named.** "Cast all your anxiety on him because he cares for you" — name it (e.g. *1 Peter 5:7, NIV*). A wrong reference, altered wording, or unnamed translation is a publish blocker. Don't bend a verse to fit a theme.
- **Technical instructions must actually work.** A QR-embed snippet must render a scannable code, a stated phone format must be valid, a scan step must match real behavior. Confirm specs against the standard (ISO 18004 / E.164 / NANP) and test snippets — a broken instruction is the randomyl equivalent of a harmful claim.
- **No fabricated studies or statistics.** Never write "90% of businesses use QR codes," "scientists found random data is always anonymous," or any number you cannot trace to a real, named, linkable source. This is one of the top trust failures in tool content — if a stat has no source, cut it or replace it with attributed, honest language.

This discipline travels with every legality/privacy, faith, and technical subject through the whole pipeline — it is checked in the keyword brief (`keyword-research-skill.md`), the trust gate (`accuracy-and-trust-skill.md`), and the pre-publish audit (`google-trust-audit-skill.md`).

---

## What counts as a primary source

**Primary sources** are the original location where a fact was established. For a tools blog, the primary source of a technical spec is the standards body or official documentation; the primary source of a legality/privacy point is a `.gov` or recognized regulator; the primary source of a statistic is the named study or research org; the primary source of a scripture quote is a reputable Bible reference with the translation named; and a correct, reproducible instruction is judged against the relevant standard and actually testing it, not "sourced" like a stat. The hierarchy:

### Tier 1 — Always cite when available

- Standards bodies and official technical documentation (ISO/IEC 18004 for QR codes, the ITU E.164 recommendation, the North American Numbering Plan / NANP, RFCs, MDN/W3C for HTML embed) — for the *spec* of how a tool's output is structured
- `.gov` and recognized legal/privacy authorities (FTC, FCC, a national data-protection regulator) — for legality, robocall/spam, and privacy claims
- Universities, research orgs, and named studies (`.edu` / institutional / a named, locatable report) — for any statistic about adoption or behavior
- Reputable Bible references that name the translation (Bible Gateway, recognized publishers of the NIV/ESV/KJV/NLT) — for scripture quotes and references

### Tier 2 — Acceptable for general-knowledge claims

- Recognized reference and developer documentation (MDN Web Docs, vendor technical docs *for their own format*, Mayo/Harvard-style references for any wellbeing context in a faith post) for general technical and background context
- Major outlets reporting on a named, traceable study or regulatory action (Reuters, BBC tech/consumer desks) — but follow the link to the underlying source and cite that
- Established reference works for definitions and background, attributed as such
- Official guidance from a professional or pastoral body for a faith-practice framing

### Tier 3 — Acceptable only when Tiers 1-2 are unavailable

- Wikipedia — **with care.** Use it only as a starting point, then follow its citations to the primary standard / regulator / study / Bible source and cite that instead. Never cite Wikipedia as the load-bearing source for a spec, a legality point, or a scripture reference.
- Reputable sites run by recognized institutions or named, credentialed authors
- Encyclopedias (Britannica) for general background, not for load-bearing facts

### Tier 4 — Contraband

Never cite these as load-bearing sources:

- AI-generated content (ChatGPT summaries, etc.)
- Random "best QR generator" affiliate roundups, content-farm "50 uses for random numbers" listicles, and SEO spam — these are the single biggest source of fabricated statistics ("90% of businesses…"), broken embed code, invalid format examples, and copied-around misquoted verses, and never count as proof of a fact
- "The secret to viral QR codes" or "everything about fake numbers" listicles on content-farm blogs that cite no standard, regulator, or study
- Pinterest, Reddit, Quora, Medium posts (unless the author IS a recognized authority — e.g. a standards contributor or a credentialed legal/privacy expert publishing original work — and the post is the original publication)
- Forum posts and unsourced "this stat is everywhere" claims
- Any "study" that cannot be located, named, and linked — if you can't find the actual study, the statistic does not exist
- Old archives of dead sites unless preserved by Wayback Machine
- Marketing/sales copy pretending to be a spec or a legal ruling

---

## The attribution format

Every external claim takes one of two attribution shapes:

### Inline attribution (preferred for most claims)

> Per the [ITU's E.164 recommendation](URL), an international phone number is at most 15 digits including the country code.

The link goes on the source identifier, not on the fact. The reader can verify by clicking the underlined text.

### Quoted attribution (for direct quotes and scripture)

> "Cast all your anxiety on him because he cares for you," reads [1 Peter 5:7 (NIV)](URL).

> The [QR Code standard (ISO/IEC 18004)](URL) defines the symbol versions and error-correction levels that determine how much data a code can hold.

Claim, source, role/context, publication, translation/edition/date if relevant, link. Anything less is contraband.

### What an attribution must contain

| Element | Required? | Example |
|---|---|---|
| Source identifier | Yes | "the ITU's E.164 recommendation" / "1 Peter 5:7" |
| Translation (scripture) | Yes, always | "NIV" / "ESV" / "KJV" |
| Date / edition | Yes if the fact can change | "FTC, 2023" / "ISO/IEC 18004:2015" |
| Publication / institution | Yes | "ITU" / "FCC" / Bible Gateway / the study's journal |
| Author / body name | Yes if a named expert or body | "from the NANP administrator" |
| Role / context | Yes if helpful | "for North American numbers specifically" |
| Link to the source | Yes | `[anchor](URL)` |

---

## Fair-use quoting

Quoting from copyrighted source material is allowed under fair use, but the rules matter:

### Length limits

- **Up to ~90 words** for most cases — a short excerpt from a standard, a regulator's page, or a technical doc, used for commentary or analysis
- **Single short quotes** — a one- or two-line definition, a single spec line, or a single Bible verse quoted with attribution and translation is squarely fair use; cite the original publication
- **Scripture** — quoting individual verses with the reference and translation named is standard practice; quote what the post needs and link to the full passage on a reputable Bible site
- **Code / format snippets** — quote the minimal snippet that demonstrates the format (show HTML inside a ```html code block so it renders), and attribute the spec or doc it comes from
- **Longer excerpts** — quote sparingly and only as much as the commentary needs; for extended passages, quote a short excerpt and link out to the original

### Always include
- Quotation marks (or blockquote / code-block formatting)
- Attribution (standard / regulator / author / scripture reference + original publication)
- Translation named, for any scripture
- Link to the source
- Edition / revision date where it pins down the fact

### When in doubt, paraphrase

If a passage is genuinely needed and you're unsure if you're within fair use, paraphrase and link out. Paraphrase still requires attribution. (Scripture is the exception — quote the verse exactly; never paraphrase a verse and present it as the verse.)

---

## Outbound link discipline

Links are how trust is paid forward and inherited. Rules:

### Always link
- Every named source on first mention
- Every factual claim drawn from an authority (a spec, a regulator, a study)
- Every cited statistic
- Every scripture quote (link to the verse on a reputable Bible site, translation named)
- Every standard / regulator / organization on first mention

### Anchor text rules
- ✅ **Descriptive:** "the [FTC's guidance on robocalls](URL)"
- ❌ **"Click here":** "...as found [here](URL)"
- ✅ **The named source:** "[the QR Code standard (ISO/IEC 18004)](URL) defines..."
- ❌ **The URL itself:** "as discussed at https://..."

### Where to link
- Inline within the prose, not in a footnote stack at the bottom (modern web readers don't scan footnotes)
- The first time a source appears, with attribution
- On the relevant phrase, not on a generic word
- Note: in this site's MarkdownRenderer, external links automatically get `target="_blank" rel="noopener noreferrer"` — you don't add those by hand.

### How to handle the link
- External targets open in a new tab automatically (the renderer adds `rel="noopener noreferrer"`); you just write `[anchor](URL)`
- No `rel="nofollow"` on legitimate primary sources — that's a signal that you don't trust them, and you shouldn't be citing untrusted sources anyway
- `rel="nofollow"` only for sponsored links, paid placements, or untrusted user-generated content
- `rel="ugc"` for legitimate user-generated content links (forum posts, comments)
- `rel="sponsored"` for affiliate or paid links

### Internal links to sibling posts and the matching tool

Link the matching sibling post on first natural mention — e.g. `[understanding phone number formats](/blog/understanding-phone-number-formats)`, `[how to scan a QR code](/blog/how-to-scan-qr-code)` — and end the post with one clear CTA to the relevant tool (`/tools/random-phone-number-generator`, `/tools/random-qr-code-generator`, `/tools/random-bible-verse-generator`, etc.). These cross-links are both the reader's next step and the post's topical-authority signal; the tool CTA is how the post does its job.

---

## When sources contradict

Real research turns up disagreement. Don't paper over it. Handle it explicitly:

### Pattern 1 — Two reasonable sources disagree
> "Sources differ on QR capacity because it depends on version and error-correction level: the maximum is ~4,296 alphanumeric characters at the lowest correction level, far less at the highest — quote the range and the condition, not one bare number." — give the range and the condition, not one bare "fact."

### Pattern 2 — One source is clearly more authoritative
> "Affiliate roundups often claim 'any 10 digits is a valid US phone number,' but [the NANP rules](URL) reserve certain area-code and exchange patterns — use the standard's framing, not the viral simplification."

Cite both, but note which is current/authoritative.

### Pattern 3 — Sources contradict on a load-bearing fact
Don't pick a side without justification. For a legality or technical claim where authorities genuinely differ, write the disagreement *into* the post rather than asserting a false certainty:

> "Whether using a generated number for a given purpose is permitted varies by jurisdiction and use ([regulator guidance](URL)) — treat this as general information, not legal advice, and check the rules where you are."

This is a strong E-E-A-T signal — it shows you read enough to know the answer is conditional. For scripture, there is no "contradiction" to split: quote the verse exactly in the named translation; if two translations word it differently, name both translations.

---

## Quoting people who are not "experts"

Sometimes a useful quote comes from a non-expert: a reader, a developer sharing a testing tip, a small-business owner, a member of a faith community. These quotes are legitimate but follow different rules:

- Don't promote them to authority. "A developer who seeds test data told us…" not "An ITU engineer noted…" Never let an anecdote override the standard or a regulator's page, and never let a personal story imply a universal technical or legal fact.
- Get their consent before using their name. If they want anonymity, give them a descriptive identifier ("a QA engineer who tests phone-number forms")
- Don't fabricate composite reader testimonials — Google's HCU treats this as scaled content abuse, and a fake "this tool saved my launch" story is a trust violation.

If you're writing about something the *author personally did* (you actually generated a QR code, embedded it, and scanned it from a printout), that's a first-person experience marker, not a "quote." See `eeat-signals-skill.md`.

---

## The research log

Before drafting any post, the writer keeps a research log (in scratch space, not in the final output):

```
Topic: <target query>

Sources collected:
- [URL] — <standard/regulator/study/Bible source> — <relevance>
- [URL] — <org/body> — <relevance>
...

Domain claims collected (with source status):
- "<technical/legality/statistic claim>" — <ISO 18004 / E.164 / NANP / .gov / study / .edu> — [URL] — <verified | range only | unsourced>
- "<claim>" — <source> — [URL] — <status>
...

Scripture collected (exact quote + translation + reference verified):
- "<verse text>" — <Book chapter:verse> — <translation, e.g. NIV> — [URL] — verified? <yes/no>
...

Instructions collected (correct + reproducible):
- "<step / format / snippet>" — actually works to the stated result? <yes/no> — any misuse-encouraging framing? <yes/no>
...

Responsible-claims check:
- Legality/privacy topic (random/fake numbers, data privacy)? <yes/no> — not-legal-advice note present + legitimate-use framing? <yes/no>
- Technical claims confirmed against the standard and tested? <yes/no>

Open questions / contradictions:
- <claim> — sources disagree: [URL1] vs [URL2]
```

The log feeds the post's outbound links and ensures every claim in the post traces back to something verifiable (a standard / regulator / study / .edu for facts, a reputable Bible source for scripture) — and that every instruction is correct, reproducible, and framed for legitimate use.

---

## The WebSearch grounding pass (writer instruction)

Before writing the draft, the writer runs WebSearch on:

1. The exact target query (e.g., "how to generate random phone numbers", "is it legal to use a random phone number generator")
2. The 2-3 most important domain facts/claims in the brief (the technical spec, the cited statistic, the scripture reference, the legality point)
3. "E.164 phone number format ITU", "QR code capacity ISO 18004", "robocall rules FTC" for each load-bearing technical/legality claim
4. "<verse reference> NIV" / "<verse> Bible Gateway" to confirm exact wording and reference for each scripture quote
5. The relevant standard or regulator where one exists ("NANP area code rules", "FCC spoofing rules", "MDN qr embed img")

Then collect ≥ 8 grounding bullets. Each bullet must include the URL. Use **WebFetch** to read the precise fact, spec, regulation, or verse wording from the authoritative page.

If WebSearch can only find:
- Random affiliate roundups, "50 uses" listicles, and content farms → the topic has no real factual spine; build the post on correct, reproducible steps + an honest framing, and do **not** import their fabricated stats
- AI-generated SERP entries quoting fake "90% of businesses…" numbers on the first page → the topic is contaminated; ignore the numbers and ground only on real authorities
- No standard, regulator, study, or reputable Bible source for the load-bearing claims → mark the brief NEEDS MORE RESEARCH and stop, or drop the unsupported claim and keep the post to honest, verified language

---

## The fact-check pass (writer instruction)

After drafting, for every load-bearing claim — a technical spec, a cited statistic, a legality/privacy statement, an embed snippet, a phone format, or a scripture quote — verify it with **WebSearch + WebFetch** against an authority. Every domain claim also goes through the dedicated accuracy & trust pass (see `accuracy-and-trust-skill.md`); every instruction is confirmed correct and reproducible; every verse is confirmed exact with its translation named.

Procedure:

1. **WebSearch** for the fact/spec/verse at an authority, e.g. `E.164 maximum digits ITU`, `QR code error correction capacity ISO 18004`, `Philippians 4:13 NIV Bible Gateway`.
2. **WebFetch** the authoritative page and read the precise fact, spec, regulation, or verse wording.
3. **Patch the draft inline** if the authority contradicts or refines what you wrote. Patches are **literal swaps only** — never reorganize sections during this pass. If a statistic can't be sourced, **delete it** in the patch. If a snippet or format is wrong, **correct it** to the spec.

If the authority contradicts a claim that came directly from the brief / RESEARCH block, trust the RESEARCH (it is the curated brief) and note the disagreement at the end of the audit instead of patching — **except** for a fabricated statistic, a wrong format/snippet, or a misquoted verse, which is always cut/corrected regardless of where it came from.

Skip the fact-check pass entirely if the brief carries an explicit "research is final, do not fact-check" instruction — but the scripture-accuracy, technical-correctness, and no-fabricated-stats checks are **never** skippable.

---

## Citation density by type

How many primary-source citations should appear in a post:

| Content type | Minimum primary citations |
|---|---|
| 🛠️ Tool guide / how-to (e.g. "custom QR code generator guide") | 2-5 (a standard/spec for any format claim; a doc for any embed snippet) |
| 🔍 Explainer / "what is" / "how it works" | 3-6 (standard / regulator / .edu for each mechanism or spec claim) |
| 📋 Listicle / curated collection | 2-5 (authority for any stat; for faith listicles, a reputable Bible source per verse block, translation named) |
| ⚖️ Decision / comparison / legality (YMYL-adjacent) | 3-6 (a .gov / regulator per legality point; not-legal-advice note present) |
| 🙏 Faith / scripture article | 2-5 (a reputable Bible source per verse block, translation named; +1 for any factual claim) |

A post below the minimum should be flagged in the audit. For explainers and any post asserting a spec, statistic, or legality point, every domain claim that is not common knowledge needs a standard / regulator / study / .edu source; every instruction must be correct and reproducible; every verse must be exact with its translation named.

---

## Citation pitfalls the audit catches

- **Fabricated statistic** ("90% of businesses use QR codes…") with no traceable source → publish blocker; cut it or replace with attributed, honest language. This is a top failure mode in tool content.
- **Wrong technical claim** (a QR-embed snippet that doesn't render, an invalid phone format, a wrong capacity figure) → publish blocker; correct it against the standard (ISO 18004 / E.164 / NANP) and test it, or cut
- **Misquoted or mis-cited scripture** (wrong wording, wrong reference, no translation named) → publish blocker; quote exactly, fix the reference, name the translation
- **Irresponsible legality/privacy claim** (a confident legal absolute, or framing that encourages fraud/spam/harassment) → publish blocker; reframe as general information not legal advice, and frame the tool for legitimate testing/QA/privacy use
- **Claim sourced only to an affiliate roundup or listicle** → trace to a standard / regulator / study / .edu or downgrade to honest, general language ("many businesses use…")
- **Wikipedia as the only source for a load-bearing claim** → fix by following the citation to the primary source
- **Claim without a link** → fix by linking
- **Dead links** → fix by replacing with archive.org or a fresh source
- **False certainty** (asserting a conditional spec or legality as a flat universal) → present the range and the condition
- **Broken or non-reproducible steps** (an embed snippet shown as raw HTML in the body rather than inside a ```html code block, a format the validator rejects) → fix per `content-craft-skill.md`
- **AI-summarized facts** (a spec or legality from an LLM with no source) → rewrite from a verifiable authority

---

**BlogOS** — sources are not decoration, and instructions are not guesses.
