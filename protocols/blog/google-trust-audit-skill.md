---
name: google-trust-audit
description: Pre-publish audit for Google's Helpful Content system, E-E-A-T framework, and spam policies (including scaled content abuse, site reputation abuse, and expired-domain abuse). This skill is the gate between a finished draft and "ready to ship." If the post fails any check here, do not publish. For randomyl.com, an accuracy & trust gate is a first-class check alongside the Google checks: every instruction must actually work and be reproducible, every QR/phone spec and embed snippet must be correct, every statistic must be true and traceable to a named authority (no fabricated "studies show 90%…" numbers), every Bible verse must be exact with the translation named, and every legality, privacy, or faith topic must carry responsible framing (tools framed for legitimate testing/QA/privacy use, never fraud/spam/harassment; legality/privacy carries a "general information, not legal advice" note).
---

# Google Trust Audit — the gate before publish

> Google does not ban AI-generated content. It bans content that does not help people. This audit is the difference. Run it on every post.

---

## What the audit covers

Four frameworks:

1. **Helpful Content system** — Google's site-wide signal that judges whether content is people-first or search-engine-first. A single bad post can drag the whole site. For randomyl, this is where the **"thin list" trap** lives: a bare list of "50 QR code use cases" with no original framing, no how-it-works, no worked example — or a post that just restates what the tool's own page already says — is exactly what HCU punishes.
2. **E-E-A-T framework** — Experience, Expertise, Authoritativeness, Trustworthiness.
3. **Accuracy & trust gate** — for this site, every instruction in a post must be **correct and reproducible** (a QR-embed snippet that renders, a scan step that works, a phone format that's valid); every statistic must be true and traceable to a named authority (a research firm, a standards body, a `.edu`/`.gov` source — no fabricated "studies show 90%…" numbers); every Bible verse must be quoted exactly with the reference correct and the translation named; and every legality, privacy, or faith topic must carry responsible framing. A broken instruction, a fabricated statistic, a misquoted verse, an invalid spec, or a fraud-enabling framing is a publish blocker. (See `accuracy-and-trust-skill.md` — the trust gate for this site.)
4. **Spam policies** — Scaled content abuse, site reputation abuse, expired-domain abuse, cloaking, sneaky redirects.

If a post passes all four, it's eligible to rank. If a post fails any, it should be revised or killed before publish.

Note on YMYL: several of this site's core topics ARE YMYL-adjacent — phone-number content touches **legality** (testing/QA vs fraud/spam), **online privacy** touches **personal data and safety**, and the Bible cluster touches **faith**. The audit does not require a lawyer's sign-off, but it does require **responsible framing**: tools framed for **legitimate** use (software testing, QA, demos, privacy, education) and never fraud/spam/harassment/evading the law; a light "general information, not legal advice" note where legality or privacy is discussed; and scripture quoted exactly with the translation named, grounded in the text rather than doctrinaire overreach.

---

## Section 1 — Helpful Content audit

The HCU classifier asks (loosely paraphrased from Google's own documentation): *would someone reading this content feel they got what they were looking for, that they trust who wrote it, and that the writer knows the topic well enough to teach it?*

### Helpful Content checks (must pass 8 of 9)

#### Check 1: People-first framing
- [ ] The post is written for someone with a specific need (how to make a QR code that scans, how to generate test phone numbers for QA, what the Bible says about anxiety), not for a keyword
- [ ] The H1 (the frontmatter `title`) and excerpt describe what the reader will *get* (a QR code that actually scans, valid test data, a faith anchor), not just what the post *covers*
- [ ] The intent (do the task, understand the concept, decide/compare, read scripture) matches what someone typing the target query actually wants

#### Check 2: Unique angle
- [ ] The angle is not the same as the top 3 results on Google for this query
- [ ] The post takes a position, gives a genuinely working how-to, a usefully grouped/curated list, an honest comparison, or a synthesis the top 3 do not
- [ ] If the angle is "more comprehensive than competitors," there is genuinely 30%+ more useful information (a worked example, a comparison table, a "common mistakes" section, a real spec reference), not padding

#### Check 3: First-hand experience
- [ ] At least one first-hand marker present (the QR code actually generated and scanned, the phone format actually tested in a form, the snippet actually rendered), OR
- [ ] At least one named primary/authoritative source explicitly cited (a standards doc, a named research source, a `.gov`/`.edu` page, or a reputable Bible source with the translation named)
- [ ] The post does not read as if it could have been written by someone who never opened the tool, made a QR code, or tested a phone format

#### Check 4: Demonstrated expertise
- [ ] The brand has a displayed editorial standard (instructions verified to work + specs checked against the standard + statistics sourced + scripture quoted exactly with the translation named + responsible framing)
- [ ] Specific, non-obvious knowledge present in the post — why a QR code fails to scan (quiet zone, contrast, error correction), the real E.164 / NANP phone-format rules, the correct verse and translation, the actual steps that produce a working result

#### Check 5: Satisfying depth
- [ ] The post fully answers the target query without forcing the reader to leave for another page
- [ ] All natural follow-up questions are addressed (does it scan on older phones, is this legal, which format do I use, what does this verse mean), either in the body or in an FAQ section
- [ ] No "we'll cover that in part 2" deferrals on the core task

#### Check 6: Honest claims
- [ ] No exaggerated headline claims that the body doesn't deliver on (a "10 QR templates" post delivers 10, that work)
- [ ] No "the only QR guide you'll ever need" framing unless the post genuinely is comprehensive; no "untraceable / anonymous" promise on a phone-number post
- [ ] No false certainty — where outcome depends on the reader's setup, the law in their jurisdiction, or correct use, say so; tools are framed for legitimate use, not a guaranteed loophole

#### Check 7: Not search-engine-first
- [ ] The post would still be valuable if Google didn't exist
- [ ] Keywords appear naturally in prose, not stuffed into headings, alt text, or paragraphs
- [ ] No "this article will cover" preamble that exists to load keywords into the first paragraph

#### Check 8: Original or value-add to existing information
- [ ] If the post covers a common topic (how to make a QR code, how to generate a phone number), it adds a genuinely working how-to, original grouping, a comparison table, a "common mistakes" section, or unique synthesis
- [ ] **Not a thin list, and not a bare tool restatement** — NOT "just 50 use cases dumped in a bullet list with no framing," and NOT a page that only re-states what `/tools/<tool>` already shows. The worked example + how-it-works + original grouping + the CTA-with-context is what lifts it above the clones. A bare list or a thin tool-restatement is an HCU fail.

#### Check 9: Trust foundations
- [ ] Author byline present (**Ugo Charles**, via the frontmatter `author` field)
- [ ] Brand editorial note / About link present
- [ ] Content is current (`date` set correctly; `lastModified` bumped on meaningful updates so `dateModified` is accurate)
- [ ] Outbound links to primary / authoritative sources where a spec, statistic, or scripture is asserted
- [ ] No misleading headlines

**Pass threshold:** 8 of 9. Failures on Check 4 or Check 9 are blocking — fix before publish.

---

## Section 2 — E-E-A-T audit

See `eeat-signals-skill.md` for the full discipline. This audit verifies the signals are present.

### E-E-A-T checks (must pass 9 of 10)

#### Experience
- [ ] First-hand marker present (the QR code generated and scanned, the format tested, the snippet rendered) or named authoritative source cited
- [ ] Specific details that suggest real use (which error-correction level survived a crumpled flyer, that a `+1` E.164 number passed a real form's validation, what broke and how it was fixed)
- [ ] Instructions and terminology are **correct and reproducible** — steps that work, valid specs, domain vocabulary used accurately (see `content-craft-skill.md`). No steps that produce a broken result.

#### Expertise
- [ ] The brand has a displayed editorial standard relevant to this post
- [ ] At least 2 named source citations if the content type calls for them (waive only for a simple curated list that asserts no statistic/spec claim — but it still needs original framing and a real CTA)
- [ ] Instructions confirmed to work; specs verified against the standard; statistics sourced; and scripture verified exact with the translation named by the trust pass

#### Authoritativeness
- [ ] Site has an About page linked from the footer
- [ ] The author byline (Ugo Charles) is consistent across the site
- [ ] Site has links from at least 5 other relevant sites (out of scope per post, but the audit notes if the site is new)
- [ ] Internal linking signals topical authority — this post lives in a cluster (how-to ↔ related guides ↔ the supporting `/tools/<tool>`)

#### Trustworthiness
- [ ] Primary / authoritative source citations (≥ 3: standards doc / named research / .gov / .edu / reputable Bible source where facts, specs, or scripture are asserted)
- [ ] Content current (`date` correct; `lastModified` reflects the latest meaningful update)
- [ ] Corrections policy linked
- [ ] Honest framing — no clickbait, no false-certainty "this works everywhere," no fraud-enabling promise
- [ ] Every instruction works and is reproducible; every statistic and scripture passed the trust gate
- [ ] Responsible framing present where legality/privacy/faith (tools framed for legitimate use; "general information, not legal advice" note; scripture exact + translation named); affiliate links (if any) clearly disclosed
- [ ] Contact / about info reachable from this page

**Pass threshold:** 9 of 10.

### Responsible-claims checks (apply ONLY if the post touches a legality, privacy, or faith topic)

Several core randomyl topics are YMYL-adjacent, so when the post covers phone-number legality, online privacy/data, or scripture, all relevant items must pass:

- [ ] Tools are framed for **legitimate** use (software testing, QA, demos, form validation, privacy, education) and explicitly NOT for fraud, spam, robocalls, harassment, or evading the law
- [ ] No legal absolutes ("this is legal everywhere," "you can't be traced"); a light "general information, not legal advice" note is present where legality or privacy is discussed, and a real authority is cited
- [ ] Privacy guidance is accurate and doesn't overpromise anonymity; it names real protections and their limits
- [ ] Every Bible verse is quoted exactly, the reference correct, and the translation named (NIV/ESV/KJV/NLT)
- [ ] Faith content stays respectful and grounded in cited scripture, not doctrinaire overreach
- [ ] No fabricated statistics or invented mechanisms presented as fact

---

## Section 3 — Accuracy & trust audit (site-specific gate)

This site's defining failure modes are the **broken instruction** (an embed snippet that doesn't render, a scan step that's wrong, an invalid phone format), the **fabricated statistic** ("studies show 90% of QR scans…"), the **misquoted scripture** (wrong wording / reference / no translation named), the **fraud-enabling framing** (a phone-number post pitched for spam or evading the law), and the **thin/restated page** (a bare list or a page that only repeats what the tool page already shows). This section is a hard gate. See `accuracy-and-trust-skill.md` for the full method.

#### Accuracy & trust checks (must have ZERO unresolved violations)

- [ ] Every instruction, step, format, and code snippet in the post is correct and reproducible (the QR embed renders, the scan steps work, the phone format is valid E.164 / NANP)
- [ ] No statistic or technical claim is asserted without a named authority (research firm, standards body, `.gov`/`.edu`) — and no fabricated "studies show 90%…" number appears
- [ ] Nothing is fabricated; where outcome genuinely varies (device, jurisdiction, setup), it's framed honestly — not a false single "this always works"
- [ ] Every Bible verse is quoted exactly, the reference correct, and the translation named (NIV/ESV/KJV/NLT), verified against a reputable Bible source
- [ ] Each asserted statistic or spec links to its source (standards doc / named research / .gov / .edu)
- [ ] Responsible framing present where legality/privacy/faith: legitimate-use framing; "general information, not legal advice" note; scripture accurate
- [ ] The post is **not a thin list and not a bare tool restatement** — it has original grouping, a how-it-works or worked-example explanation, and a contextual CTA to the tool, not just a dump or a paraphrase of the tool page

#### How to test
Actually run the instructions as the target reader would: generate the QR code and scan it, paste the embed snippet and confirm it renders, validate the phone format against a real form or the E.164 / NANP rules. Independently re-check every statistic and spec against an authoritative source (a standards doc, a named research source, a `.gov`/`.edu` page) — if a "studies show" number can't be located, it's fabricated. Re-check every Bible verse word-for-word against a reputable Bible source and confirm the reference and translation. Confirm any legality/privacy topic carries the "general information" note and frames the tool for legitimate use only. Confirm the post has real framing (how-it-works + worked example + contextual tool CTA), not just a list or a restatement. If any instruction is broken, any statistic is fabricated or unsourced, any spec is invalid, any verse is misquoted/mis-cited, any fraud-enabling framing is present, or the post is a bare thin list / tool restatement, it is a **blocking fail** — do not ship.

---

## Section 4 — Spam policy audit

Google's spam policies have evolved sharply with AI. The three most relevant for blog production at scale:

### Scaled content abuse

> "Producing many pages with the primary purpose of manipulating search rankings, regardless of whether the content is created by humans or AI."

#### Scaled content checks (must have ZERO violations)

- [ ] This post is NOT one of many near-identical posts where only the topic word varies — the **template-clone trap** (e.g. 200 near-identical "QR codes for X industry" posts that swap only the industry word, with the same generic steps and no real, distinct framing)
- [ ] This post is NOT a template fill-in where only the theme changes between posts (the trap for "QR codes for X" or "phone numbers for X" pages — cloned across hundreds with no genuinely distinct steps, examples, how-it-works, or use cases)
- [ ] If we're publishing many posts on related needs, each has genuinely topic-specific instructions, its own examples, a relevant how-it-works note, and a CTA that fits that need
- [ ] Publishing rate is reasonable (not 50 cloned "QR codes for X" posts/day)
- [ ] No `<h1>` keyword stuffing (the H1 comes from the frontmatter `title`; keep it natural)
- [ ] No paragraph keyword stuffing (target query appears naturally, not 10x per paragraph)

#### How to test
Search 3 random sentences from the post in Google with quotes around them. If they return zero results, that's a unique post. If they return results from other AI-spammy tool/QR/generator sites, the post has the same fingerprint as scaled content. Rewrite — and check that the steps and examples aren't just the same generic ones every "QR code generator" listicle uses.

### Site reputation abuse (formerly "parasite SEO")

> "Publishing pages on a third-party site to take advantage of that site's ranking signals."

Not applicable per post — applies if this site has a section that hosts third-party content disconnected from the site's main purpose. Flag in the audit if the post:

- [ ] Is on a topic completely unrelated to the random-generator tools, QR/phone/words/Bible/privacy themes, or the site's purpose
- [ ] Was written by a third party (guest post) that the site has no editorial relationship with
- [ ] Exists to drive traffic to an unrelated affiliate offer

A tools site publishing a post about, say, crypto trading or unrelated product reviews hits this.

### Expired-domain abuse

Not applicable per post — applies at the domain level. The audit confirms:

- [ ] This site is not built on an expired domain that previously had different content
- [ ] If it is, there is a clear continuity story (acquisition, rebrand) declared publicly

Default: this is not a concern for new domains. Flag only if relevant.

### Cloaking
- [ ] The content shown to crawlers matches the content shown to users
- [ ] No JavaScript that hides text from one and shows it to the other
- [ ] No keyword-stuffed alt text invisible to readers

### Hidden text
- [ ] No white text on white background
- [ ] No tiny-font keywords
- [ ] No off-screen keyword blocks

### Doorway pages
- [ ] This post does not exist purely to funnel into the tool or an affiliate link
- [ ] Each post is genuinely useful as a destination on its own (the guide actually helps the reader even before they click through to the `/tools/<tool>` generator)

### Link spam
- [ ] No participation in link-trading schemes
- [ ] No purchase of links for ranking
- [ ] Outbound links are editorial, not paid placements (paid get `rel="sponsored"`)
- [ ] Internal links serve readers, not just SEO

---

## Section 5 — AI-content honesty (Google's stance)

Google's published stance (as of 2026): AI-generated content is fine if it is helpful, accurate, and adds value. AI-generated content is contraband if it is scaled, templated, or low-effort.

There is no "AI-generated" disclosure requirement from Google. There is from some industries (legal, regulated finance) and from honesty norms.

**This site's policy:** disclose AI assistance when it materially shaped the content. Example footer line:

> "This post was drafted with AI assistance under Randomyl's editorial review by Ugo Charles. Every instruction is tested to work, every statistic is checked against a named authority, every Bible verse is quoted exactly with the translation named, and the tools are presented for legitimate testing, QA, and privacy use — never for fraud, spam, or harassment."

Adding this does not hurt SEO. Not adding it is fine too. What matters is that the post is genuinely helpful, accurate, and — for this site — that the instructions work, the statistics are true and sourced, the scripture is accurate, and legality/privacy/faith topics are framed responsibly.

---

## Section 6 — The audit output

The writer / reviewer outputs the audit as a structured block, separate from the post content:

```
===GOOGLE TRUST AUDIT===

**Helpful Content checks (X/9 passing)**
- ✅ People-first framing
- ✅ Unique angle: <one-line description of the unique angle>
- ✅ First-hand experience: <which marker, e.g. "generated and scanned the QR code on three phones">
- ❌ Demonstrated expertise: <what's missing — e.g., "no editorial standard displayed">
- ✅ Satisfying depth
- ✅ Honest claims
- ✅ Not search-engine-first
- ✅ Original value-add: <why it's not a thin list / restatement — e.g. "worked example + why-QR-codes-fail section + contextual tool CTA">
- ✅ Trust foundations

**E-E-A-T checks (X/10 passing)**
- ✅ Experience
- ✅ Expertise
- ⚠️ Authoritativeness: site is < 6 months old, limited inbound links
- ✅ Trustworthiness

**Accuracy & trust checks (X violations)**
- ✅ All instructions / formats / snippets correct and reproducible
- ✅ All statistics + specs sourced to a standards doc / named research / .gov / .edu; no fabricated numbers
- ✅ All scripture exact, referenced, translation named
- ✅ Responsible framing present where legality/privacy/faith; not a thin list or tool restatement

**Responsible-claims checks (N/A unless legality / privacy / faith topic)**
- ✅ Tools framed for legitimate use; "general information, not legal advice" note present; scripture accurate

**Spam policy checks (X violations)**
- ✅ No scaled content / template-clone fingerprint
- ✅ No site reputation abuse
- ✅ No cloaking / hidden text / doorway

**Overall risk level:** [LOW / MEDIUM / HIGH]

**Action required before publish:**
1. <specific fix>
2. <specific fix>
```

The orchestrator presents this to the user. If risk is MEDIUM or HIGH, the user decides whether to ship with the flag or fix. An unresolved accuracy/trust violation — a broken instruction, a fabricated statistic, an invalid spec, a misquoted verse, or a fraud-enabling framing — is always HIGH.

---

## Risk-level guide

| Risk | Trigger | Action |
|---|---|---|
| LOW | All HCU + E-E-A-T pass, all instructions work, all statistics/scripture sourced and accurate, responsible framing present where needed, zero spam violations | Ship |
| MEDIUM | 1-2 HCU/E-E-A-T fails OR 1 spam violation OR site is new | Fix the specific issues, then ship |
| HIGH | 3+ HCU fails OR any broken instruction/invalid spec OR any fabricated/unsourced statistic OR any misquoted/mis-cited scripture OR any fraud-enabling framing OR a legality/privacy post missing the general-information note OR a bare thin list / tool restatement OR multiple spam violations | Do not ship; redo |

---

## What the audit does NOT check

- **Whether the post will rank** — that's a long-term outcome, not an audit gate
- **Whether the writing is "good"** — that's the anti-AI-slop checklist in `blog-os-master.md`
- **Schema validity** — covered by `seo-and-schema-skill.md` (note: `BlogPosting` JSON-LD ships automatically per post; `FAQPage`/breadcrumb are future work — don't claim they ship)
- **Snippet eligibility** — covered by `featured-snippet-skill.md`
- **Internal-link math** — covered by `topical-authority-skill.md`

Each skill checks its own scope. This audit specifically checks Google's published quality + policy guidelines, plus the site's accuracy & trust gate (working instructions, valid specs, true sourced statistics, accurate scripture, responsible framing).

---

**blogOS** — pass the audit, then ship.
