---
name: accuracy-and-trust
description: The hard publish gate for randomyl.com. Two kinds of load-bearing content must pass. (1) Every instruction and content unit must be correct and reproducible — a how-to step that works and ends in verification, a phone/QR format that's valid, an embed snippet that actually renders; a step that fails the reader is a blocker. (2) Every factual claim — a statistic, a technical spec (QR error correction, E.164/NANP formats, scanning behavior), a scripture quote + reference + translation, a legal or privacy claim — must be verified against a real authority (standards docs, .edu/.gov, a reputable Bible source) and cited or cut. Fabricated statistics, invented "studies show 90%…" claims, misquoted scripture, legal absolutes, and framing the tools for misuse (fraud, spam, harassment) are publish blockers. The tools are presented for legitimate use only, and YMYL topics (faith, legality, privacy) get responsible, non-advice framing. This is the role technique-and-fact-verification played in the original pack.
---

# Accuracy & Trust — The Hard Gate

The internet is full of tool and how-to posts that cite a statistic that doesn't exist, give a QR-code step that skips the test and sends the reader to print 500 flyers with a dead code, present a "fake number" as if it were a live line, or misquote a Bible verse to a reader who knows the text. A site that ships any of those is just another thin aggregator — and worse, it wastes the reader's time and trust at the exact moment they came to us to get something done. A site whose instructions actually work and whose every claim is honest and sourced earns the trust, the links, and the rankings.

**The rule: no instruction and no factual claim ships unless it is verified.** Instructions are verified by confirming each step works and ends in a check; facts, specs, scripture, and legal/privacy claims are verified against an authority. A confident-but-wrong step — or a beautiful sentence that quietly misleads — is not a small error. It is the one thing this whole site exists to get right: a real person trusting us to help them finish a task.

---

## Two kinds of content, two ways to verify

### 1. The instructions and content units → they must be correct and reproducible

The steps, formats, snippets, and curated entries the reader will actually act on. Following them should leave the reader with a working result, not a broken one.

- **Source of truth:** the content-craft contract (`content-craft-skill.md`). Each unit is correct, actionable, specific, self-contained, and honest about its limits.
- **Run each step as the reader.** Does the how-to produce a QR code that scans? Does the phone format validate? Does the embed snippet render? A how-to that ends before the verification step (test the scan, send the test SMS, preview the verse) is incomplete and fails the reader downstream.
- **No silently-broken or unsafe guidance.** A step that produces a non-scanning code, an invalid number format, or a snippet that errors is the randomyl equivalent of a harmful instruction. Re-form it until it works, then re-check around it.
- **On-topic and honest about the tool.** A random phone number is for testing, demo data, and privacy — not a working line. Frame it that way, and never frame any tool for fraud, spam, evasion, or harassment.

### 2. Facts, specs, scripture & legal/privacy claims → an authority wins

Anything the post asserts as true: a statistic, a technical spec, a Bible verse and its reference, a statement about what's legal or what a privacy tool protects.

- **Acceptable sources:** standards bodies and authoritative technical docs for formats and specs (ITU E.164, the NANP, the ISO/IEC 18004 QR standard, platform docs for scanning behavior); reputable research bodies and .gov/.edu for statistics (e.g. ADAA / NIMH for anxiety prevalence, named research firms for QR/market adoption); a reputable Bible source for scripture (and always name the translation); recognized legal/privacy authorities for legality and data-protection claims (and frame as general information, not legal advice). Wikipedia is a starting point, never a final citation — follow it to the standard or primary source and cite that.
- **Synthesize and attribute — never copy, never inflate.** "QR codes use Reed–Solomon error correction, with four levels (L, M, Q, H) that recover from roughly 7% to 30% of damage" (sourced) beats "QR codes basically never fail." State what the source *actually* supports, including its limits.
- **Where a claim genuinely varies or is uncertain, say so.** Adoption numbers, scanner behavior across phones, and legality across jurisdictions vary — present them honestly as "as of [year]", "on most modern phones", "in many U.S. states", not as flat universals.

### Trust rule: responsible claims (YMYL)

randomyl is partly Your-Money-or-Your-Life: faith content, legality of phone-number tools, and online privacy all sit in YMYL territory. False or over-promising claims here are a trust *and* a safety failure.

- **Tools for legitimate use only.** The random and fake phone number generators, and the privacy tooling, are presented for software testing, QA, demo data, education, and protecting your own number. Never present or imply use for fraud, spam, robocalls, evading verification you're required to pass, impersonation, or harassment. A line that reads as a how-to-deceive ships nothing.
- **No legal absolutes — and not legal advice.** Legality (of using generated/fake numbers, of scraping, of data handling) varies by jurisdiction and use. State the general principle, cite a real authority, and add a light, non-alarmist "this is general information, not legal advice; check the rules for your situation" note where the post turns on legality. One warm sentence, not a scary disclaimer wall.
- **Scripture handled with care.** Quote verses exactly, reference them correctly (Book chapter:verse), and name the translation. Don't present a paraphrase as a quote. Frame faith content respectfully, grounded in the cited text rather than doctrinaire overreach.
- **No fabricated statistics or studies.** This is the single most common failure in this kind of content. If you can't source a number or a "study" to a real authority, cut it. "Studies show 90% of people…" with no real citation is an automatic blocker. (The existing `bible-verses-about-anxiety` post's "40 million adults" figure is the canonical example to fix — attach a real ADAA/NIMH citation or cut the number.)

---

## The verification ladder

Every load-bearing instruction/claim gets one of four buckets:

| Bucket | Meaning | What to do |
|---|---|---|
| Verified | The step works and ends in a check; or the fact/spec/scripture matches an authority | Ship it. Cite the authority for facts, specs, stats, and scripture. |
| Range / hedged | The evidence varies or depends on context (jurisdiction, device, year) | Ship it **honestly hedged** ("on most phones", "as of 2024", "in many U.S. states") and name the limit. Never inflate to certainty. |
| Contradicted | A step fails / produces a broken result, or a claim contradicts the authority (misquoted verse, wrong spec, false legality) | Correct it. Re-form the step or fix the fact, then re-check around it. |
| Unverifiable / fabricated | An invented stat, a study that doesn't exist, a legal absolute, a step that can't be made to work, framing for misuse | Cut it or replace with a sourced/safe/working version. Do not ship. |

A post may ship with Verified and Range items. A post that still contains an unresolved Contradicted or Unverifiable item **does not ship**.

---

## The verification mechanism

### For instructions — run them as the reader

1. **Walk each step in order** as the person who searched this and wants a result.
2. **Check the form:** correct, actionable, specific, self-contained, ends in verification.
3. **Check the result:** does it actually work (code scans, format validates, snippet renders)? If it fails → Contradicted; re-form the step (add the missing action, the test, the caveat) and re-walk it.

### For facts, specs, scripture & claims — WebSearch / WebFetch an authority

There is no research API on this site. Use **WebSearch** to find an authority and **WebFetch** to read the exact fact, then check it. Batch independent lookups.

1. **WebSearch** for the claim at an authority, e.g. `QR code error correction levels L M Q H percentage`, `E.164 phone number format max digits ITU`, `555 reserved fictional phone numbers NANP`, `Philippians 4:6 NIV exact wording`, `is it legal to use a fake phone number for testing`.
2. **WebFetch** the authoritative page (a standards doc, a .gov/.edu page, a reputable Bible source, a recognized legal/privacy resource) and read the precise fact, finding, spec, or wording.
3. **Compare** with the draft:
   - Matches → Verified; add the citation.
   - Varies by context / year / device / jurisdiction → Range; hedge honestly in the copy.
   - Contradicts the draft (wrong spec, misquoted verse, false legality) → Contradicted; correct it.
   - No credible authority (invented stat/study, legal absolute, misuse framing) → Unverifiable; cut or replace.

For the instructions themselves you don't need WebSearch — walk them against the craft contract and, where you can, against the tool's actual behavior.

---

## High-risk claim types (verify with extra care)

- **"Studies show…" statistics** — the #1 failure in this content. Never invent a number or a study. Source it to a real authority or cut it.
- **Technical specs and behavior** — QR error correction and size/quiet-zone rules, E.164/NANP phone formats, scanning behavior across phones, embed/HTML snippets. State what the standard/docs actually say and the limits; cite them. Don't overclaim universal behavior the docs don't establish.
- **Scripture** — exact wording, correct reference, named translation, and correct counts (books, chapters). Never quote from memory; confirm against a reputable source.
- **Legality** (using generated/fake numbers, scraping, data handling) — no absolutes, cite a real authority, add the general-information-not-legal-advice note, and never frame for evasion or fraud.
- **Privacy / data claims** — don't overstate what a tool protects ("anonymous" vs. "reduces what you share"). Be precise about PII and what is and isn't masked.
- **Tool framing** — the random/fake number and privacy tools are for testing, QA, demos, education, and protecting your own number. Never imply use for spam, fraud, impersonation, or harassment.

---

## How to present verified, hedged, and corrected content

**Verified (instruction, works and ends in a check):**
> Generate the code, download the PNG, then scan it with your phone camera to confirm it opens the right link before you print. *(actionable, self-contained, verified by a real test step)*

**Verified (fact, checked against an authority):**
> QR codes use four error-correction levels — L, M, Q, and H — recovering from roughly 7% up to 30% of a damaged or covered code, which is why a logo can sit safely in the middle of a high-correction code. *(per the ISO/IEC 18004 QR standard)*

**Range / hedged (varies by context):**
> Most modern iPhone and Android cameras scan QR codes natively, with no separate app — though older phones may still need a scanner app. *(honest hedge, not "every phone scans automatically")*

**Corrected (contradicted the draft):**
> "These numbers work as a real second line" rewritten to **"These numbers are correctly formatted but not assigned to a live line — they're for testing and privacy, not for receiving calls or texts"** — the first is false and invites misuse; the second is accurate and frames legitimate use.

**Trust (responsible framing):**
> Whether a generated number is fine to use depends on what you're doing with it. For testing forms, demos, or keeping your real number off a throwaway sign-up, it's a common and legitimate practice. This is general information, not legal advice — never use a number to deceive, spam, or evade verification you're required to pass.

---

## Integration with the write/review pipeline

- **In the writer pass:** run this verification after drafting and before the re-audit. The audit's "Instructions & facts verified (N)" block reports every item's bucket.
- **In the review pass:** instruction/claim verification is part of the audit. Any Contradicted/Unverifiable left unresolved blocks the rewrite from overwriting the file.
- **Gate behavior:** if any load-bearing claim ends Unverifiable (a fabricated study, a legal absolute, a misuse framing) or any instruction ends Contradicted-and-unsalvageable (a step that can't be made to work), emit the audit with `POST NOT SHIPPED — claims unverified / instructions broken` and do not write the file.

---

## Audit reporting format

```
**Instructions & facts verified (N)**
- Verified: "scan the code before printing" — step works and ends in a real check
- Verified: "QR error correction L–H recovers ~7–30%" — ISO/IEC 18004, cited
- Verified: "E.164 allows up to 15 digits with a leading +" — ITU source, cited
- Verified: "Philippians 4:6 (NIV)" — wording and reference confirmed, translation named
- Range: "most modern phones scan QR natively" — varies by device, hedged honestly
- Contradicted → corrected: "fake numbers work as a real line" — false; rewritten to testing/privacy framing
- Unverifiable → cut: "studies show 90% of QR scans convert" — no real source, removed
- Trust → fixed: added a general-information-not-legal-advice note to the legality section; framed the generator for legitimate testing use
```

---

**Get the steps and the facts right.** It is the one thing the rest of the internet gets wrong, and the reason a real person who comes to us to finish a task leaves with a working result — and the reason this site deserves to rank.
