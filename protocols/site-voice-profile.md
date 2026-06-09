# Site Voice Profile — Per-Site Voice Lock for BlogOS

## What it is

A `voice-profile.md` is a per-site artifact that captures **audience-specific voice rules the BlogOS writer must preserve verbatim**. It lives at:

- `protocols/voice-profile.md` — the randomyl site-wide lock (optional; build it once real reader data accrues).

It is picked up by `/b-write` as a `SITE VOICE LOCK` block in the writer prompt.

It exists because **BlogOS is generic by design** — anti-AI-slop, scannability cadence, E-E-A-T patterns, conclusion shapes — and the writer runs with zero memory. Without a voice profile, the writer will apply generic patterns even when the site has earned a specific voice that the pack would otherwise flatten.

A voice profile is the site's answer to: *"BlogOS, here's what's load-bearing about how this audience hears us. Touch the rest, but not this."*

For randomyl this matters in two distinct registers. Most of the site is **task-mode**: someone wants to make a QR code that scans or generate test numbers in the right format, and the voice that wins is clear, confident, and practical — get them to a working result fast, then earn trust by being honest about the limits. But one cluster (Bible / Christian) is **reflective-mode**: the reader is looking for verses about anxiety or a faith question answered, and the voice that wins is warm, reverent, and exact with Scripture. The wrong register — hype in the task posts, or breezy tool-speak in the faith posts — loses them in a sentence.

---

## When to build one

Build a voice profile **when the site has a non-obvious voice signal** that generic BlogOS would damage. Trigger conditions:

### 1. Distinct audience or mode outlier
The reader base splits into modes (task-mode for the tools, reflective-mode for the Bible cluster) or skews to a specific audience on a given cluster (a small-business owner making QR menus, a developer generating test data, a believer searching for comfort). Generic punch-ups assume one neutral reader; randomyl has at least two.

### 2. Comment / email / search-query scrape reveals a load-bearing frame
Pull the top reader comments, emails, or the actual search queries hitting the site. Look for:

- First-person statements of why they searched ("my QR code won't scan", "I need fake numbers to test a signup form", "verses to calm my anxiety", "is it legal to use a fake number")
- Repeated situation references (printing flyers, testing an app, a hard season, a privacy worry)
- Vocabulary patterns from a specific community (developers, small-business owners, a faith community)
- Explicit gratitude for a value the site provides ("finally a guide that says to test the code first")
- Frustration arcs the audience shares ("every QR tutorial stops before it actually works", "every verse list is the same 10 verses with no context")

### 3. Existing post performance reveals voice patterns that win
If certain framings produce higher engagement or higher post→tool click-through, codify them. If `/b-review` keeps trimming a phrase you keep wanting back, that phrase is voice-locked.

### 4. The site has an explicit editorial stance
randomyl has one: clear, practical, trustworthy — get the reader to a working result and never overpromise. Tools are framed for legitimate use; legality is general information, not advice; Scripture is exact and treated with respect. That stance needs to be load-bearing in the voice.

**Skip if:** the site is generic / broad-audience with no signature voice. randomyl is not generic — it has a strong practical-trust stance and a distinct faith register — so it warrants a profile (optional until backed by reader data).

---

## The canonical structure (6 sections, in order)

A voice profile is short — under 400 lines, often closer to 250. Long enough to be load-bearing, short enough to inject whole into a writer prompt.

### Section 1 — The audience identity sentence(s)

Open with one sentence per mode — the most important in the document — that names the audience as a specific *kind of person in a specific moment*, not a content cohort. Lead with what they want/struggle with, not what they read.

**Generic / wrong:**
> "The audience is people interested in random generators."

**Specific / right (task-mode):**
> "The audience is someone with a job to finish — a QR code to print, test numbers to feed a form, a format to get right — who has been burned by tutorials that stop before the thing actually works, and who wants a clear, confident walkthrough that ends in a result they can trust, plus the honest caveat that keeps them out of trouble."

**Specific / right (reflective-mode, Bible cluster):**
> "The audience is someone turning to Scripture at a real moment — anxious, grieving, deciding something hard — who wants verses quoted accurately and explained plainly, in a warm and reverent voice that respects the text rather than skimming it for a listicle."

Follow each with 3-5 lines quantifying the signal (search-query data, comment-scrape hit rates, post→tool click-through) so the claim has receipts.

### Section 2 — The N voice rules

Numbered list. 5-8 rules. Each rule:

- **Rule name** in bold (one short phrase)
- 1-2 sentences explaining the mechanic
- One ❌ counter-example and one ✅ exemplar

The rules should cover: how to address the reader (a capable guide walking them through it), vocabulary expectations (technical terms welcomed but defined; Scripture exact), tonal register (confident and practical for tools; warm and reverent for faith; never hype), what to validate vs. gently correct ("test the scan first", "these numbers aren't a live line"), any explicit value line to say out loud ("test it before you print"), and friction points NOT to smooth away (the honest limits of a tool, the not-legal-advice caveat).

### Section 3 — Canonical reader quotes

8-15 verbatim quotes from comments, emails, reviews, or search queries that show the audience in their own words. The receipts.

### Section 4 — Touchstone library (when applicable)

The reassuring, honest facts the audience wants to hear and the misconceptions to gently correct. For randomyl: that a QR code should always be tested before printing; that random/"fake" numbers are format-valid but not live lines (for testing and privacy, not for receiving calls); that QR error correction lets a logo sit safely in a high-correction code; the myth that a generated number gives you a working second line (replace with the accurate framing); the myth that using a fake number is automatically illegal (replace with the legitimate-use distinction). For the faith cluster: that the Bible has 66 books (Protestant canon), that "Jesus wept" (John 11:35) is its own verse, that a translation should always be named. Dropping a correct, useful version of something they half-believe is a trust win.

### Section 5 — Anti-patterns

Two-column table: **Don't / Why**. The phrasings that specifically kill *this site's* audience. Generic anti-patterns (em dashes, fake stats) belong in BlogOS, not here.

| Don't | Why |
|---|---|
| End a how-to before the result is confirmed working | The reader's whole job is a working result; stopping early is the exact failure they came to escape. |
| Frame a generated number as a usable second line | It's false and invites misuse; it breaks trust the moment they try to receive a text on it. |
| Skim a Bible verse for a listicle without quoting it exactly | The faith reader knows the text; a paraphrase passed off as a quote loses them and the link. |
| Hand-wave legality with "it's totally fine" or "it's illegal" | Both are absolutes the law doesn't support; the reader needs the honest distinction, not a verdict. |

### Section 6 — Whitelist (recommended)

The preferred outbound sources. For randomyl: standards bodies and authoritative docs for specs (ITU E.164, the NANP, ISO/IEC 18004 for QR); .gov/regulators for legality and privacy (FTC, FCC); reputable research firms for adoption statistics, attributed and dated; a reputable Bible source for Scripture (translation always named). Plus a blacklist: content-farm "ultimate guide" pages that never actually work, sites citing studies that don't exist, pages that frame the tools for spam/fraud, and "is it legal" pages that give absolutes.

---

## How it's consumed

`/b-write` picks up the voice profile per post:

1. Reads the brief
2. Looks for `protocols/voice-profile.md`
3. If found, injects the full file as a `===SITE VOICE LOCK===` block in the writer prompt
4. The writer treats the lock with the same protection as the trust gate — do not paraphrase, do not strip voice-locked language, even when a generic rule would flag it

Without a profile, the writer behaves with pack-only voice. The system is opt-in.

---

## How to bootstrap one

1. **Reader data first.** If you have analytics: GA4 demographics, GSC top queries hitting the site, email replies, comments, post→tool click-through. For a new cluster without data: build from the *intended* audience, mark it provisional, refine after 90 days of real data.
2. **Quantify signals.** Run pattern passes for repeated phrasings, situation references, audience markers (developer, business owner, faith), frustration markers ("the tutorial didn't work"), gratitude markers ("finally…"). Record hit rates.
3. **Draft the 6 sections.** Identity sentence(s) first, then voice rules, quotes, touchstones, anti-patterns, whitelist.
4. **File at `protocols/voice-profile.md`.** `/b-write` picks it up on the next run.
5. **Re-scrape quarterly.** Audiences drift.

---

## What NOT to put in a voice profile

- **Factual constraints** about specific topics — those go in the per-post brief
- **Structural rules** (heading skeleton, length, hook formula) — BlogOS pack territory
- **Title / meta / slug rules** — `title-meta-slug-skill.md`
- **Generic SEO best practices** — `seo-and-schema-skill.md`
- **The accuracy & trust gate** — `accuracy-and-trust-skill.md` (the *voice* profile says how we sound; the *trust* gate says what's correct and safe)

A voice profile is exclusively about **phrasings and identity frames the writer would otherwise damage**.

---

## Existing voice profiles

- `protocols/voice-profile.md` — randomyl.com, site-wide (clear, practical, trustworthy for the tools; warm and reverent for the Bible cluster; ~grade 7; author byline "Ugo Charles"). **Optional / provisional** until backed by real reader data — build it once GSC and reader data accrue.

Add new ones here as they're built.

---

## When to skip voice profiles

For a brand-new site or cluster with no audience data yet, the profile is provisional. Better to ship 5-10 posts with the pack-only voice, observe what resonates (and what converts to tool clicks), then build from real signals. Premature voice locking can lock in the writer's idea of the audience rather than the actual audience. randomyl already has a clear practical-trust stance and a distinct faith register, so a provisional profile is worth keeping — just revisit it once GSC and reader data accrue.

---

**BlogOS** — voice that survives the writer.
