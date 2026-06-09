---
name: variety-rotation
description: Anti-repetition rotation system for BlogOS on Randomyl. Prevents same-y posts (templated QR how-tos, templated "Bible verses about X" listicles) by rotating content type, audience/tone, intro patterns, how the post is structured/grouped, the worked-example/evidence framing, transitions, sub-head phrasings, emphasis types, conclusion shape, and CTA target. The writer must pick ONE option from each relevant bank and log selections so the next post avoids the same combo. Originally adapted from FacelessOS, retuned for blog mechanics.
---

# Variety Rotation — every post should feel like its own thing

> Originally created by Joey Sergio for FacelessOS, retuned here for blog posts. Same principle: AI writers default to the same mechanical choices, post after post. Rotation forces variety into the slots where the default is sameness.

**MANDATORY:** Before drafting, consult this file. After drafting, append a rotation log to the audit (NOT to the Markdown body / `content/blog/<slug>.md` — the orchestrator persists the log separately). When the next post is written, pass the last log so the new post avoids the same combo.

If you don't rotate, three consecutive posts on the same site read as templated even if individually each is good — and on a tools site, where many posts share either a "how to do X with the tool → why it works → the steps → the mistakes → CTA" backbone or a "verses about X → why they help → the list → how to use them" backbone, the risk is acute. A reader who lands on "custom QR code generator guide," then "how to scan a QR code," then "free QR code templates" should not feel they're reading one article with the topic swapped — and three "Bible verses about X" posts in a row must not read as one set with the theme find-and-replaced. Rotation is the antidote.

---

## How the system works

Each post has a set of mechanical slots where the writer defaults to the same choices. This file provides **numbered rotation banks** for each slot — including content-level slots unique to Randomyl (the content type, the audience/tone, how the body is structured/grouped) and the usual prose slots (intro, transitions, conclusions). The writer must:

1. Pick ONE number from each relevant bank per post
2. Never reuse the same combination across consecutive posts on the same site
3. Log selections in the audit (separate from the Markdown body)

The orchestrator persists the log to `protocols/rotation-log.md` (one level up from this skill, already created) and feeds it to the next run with: *"Avoid these rotation numbers from the last post: [paste log]"*

---

## SLOT 0A — CONTENT TYPE (content-level)

The single biggest "same-y" risk on Randomyl: every post being the same *kind* of page. Rotate the type across the corpus so the blog index isn't five identical tool how-tos or five identical verse listicles in a row. These are the five content types defined in `page-structures-skill.md`.

| Code | Content type | Shape | Lives at |
|---|---|---|---|
| 0A-1 | Tool guide / how-to | hook → why it matters → the steps → the mistakes/edge cases → CTA to the tool | `content/blog/<slug>.md` |
| 0A-2 | Explainer / "what is" / "how it works" | define the concept → how it works → why it matters → CTA | `content/blog/<slug>.md` |
| 0A-3 | Listicle / curated collection | hook → framing/why → the grouped list → how to use → close | `content/blog/<slug>.md` |
| 0A-4 | Decision / comparison / legality (YMYL-adjacent) | the question → the factors → comparison rows / the honest call → close | `content/blog/<slug>.md` |
| 0A-5 | Faith / scripture article | hook → context → verses quoted exactly (translation named) → meaning → close | `content/blog/<slug>.md` |

**Rule:** don't publish two posts of the same content type back to back unless a cluster build calls for it (and even then, vary everything below). When you ship two of the same type in a row (two QR how-tos, two verse listicles), rotate Slot 0B (audience/tone), Slot 0C (structure/grouping), and Slot 5 (worked-example framing) hard.

---

## SLOT 0B — AUDIENCE / TONE (content-level)

Rotate who the post is pitched at and the register, so the corpus serves the whole audience and doesn't sound like one narrator on repeat.

| Code | Audience / register | Voice & scope |
|---|---|---|
| 0B-1 | General / clear-default | the house Randomyl voice — helpful, plain, concrete |
| 0B-2 | Business / marketer | tuned to a small-business or marketing reader (flyers, menus, campaigns, use cases) |
| 0B-3 | Developer / technical | for embed/format/testing posts — precise, shows code and specs, assumes some tooling |
| 0B-4 | Faith reader / pastoral | for Bible-cluster posts — warm, respectful, grounded in cited scripture, never doctrinaire |
| 0B-5 | Privacy / safety-conscious | for legality and online-privacy posts — careful, sourced, qualified, "legitimate use" framed |

**Rule:** if the last two posts were both clear-default (0B-1), push the next one to a distinct register (e.g. 0B-3 developer or 0B-4 faith). A QR embed how-to and a forgiveness scripture article should not feel narrated by the same mood.

---

## SLOT 0C — HOW THE BODY IS STRUCTURED / GROUPED (content-level)

The body's *organizing principle* is the easiest thing to leave on default ("here are the steps" / "here are the verses"). Rotate how the body is structured so two posts of the same type never have the same spine.

| Code | Structure / grouping principle | Best for |
|---|---|---|
| 0C-1 | Sequential steps | tool how-tos — "do this, then this, then this," in strict order |
| 0C-2 | By sub-theme | a broad topic split into facets (verses about anxiety → fear, sleep, trust; QR → links, vCards, Wi-Fi) |
| 0C-3 | By difficulty / depth ladder | basics first → advanced/edge cases last, so a beginner can stop early and a pro can read on |
| 0C-4 | By use-case / scenario | "for flyers," "for menus," "for testing forms," "for a vCard" — when the topic spans uses |
| 0C-5 | By situation / trigger | "when X happens, do/read Y" — strong for failure-mode posts and verses-for-a-moment sets |
| 0C-6 | Comparison matrix | a table-driven spine (static vs dynamic, KJV vs NIV, format A vs B) — uses real Markdown tables |
| 0C-7 | Flat, curated, numbered | a single strong run with no sub-heads — use sparingly, and only for short lists |

**Rule:** never use the same structure (0C) two same-type posts in a row. If the last QR post laddered by difficulty, structure the next by use-case or by failure trigger. The structure is most of what makes a post feel like *its own* article. Tables (0C-6) render on Randomyl (remark-gfm) — reach for them on comparison and spec posts, not on every post.

---

## SLOT 1 — INTRO PATTERN

The opening paragraph shape — the leading `>` blockquote answer box at the top of the body, and the hook inside it. See `BLOG-INTRO-SWIPE.md` for the full patterns. Pick one per post.

| Code | Pattern | Best for |
|---|---|---|
| 1A | Direct Answer | tool how-tos — name the task and the steps right away |
| 1B | Cold Open | a pillar guide, a story-led explainer |
| 1C | Stake-First | "is it legal to use a random phone number generator?" decision posts |
| 1D | Contrarian | myth-busting ("random phone numbers aren't illegal — here's what actually is") |
| 1E | Story-First | a women-of-the-Bible profile, a use-case anchored in one real situation |
| 1F | Specific Number | counted listicles ("25 Bible verses about anxiety," "12 free QR templates") |
| 1G | Question Opener | "what does 'Jesus wept' mean?" / "what is a random phone number generator?" |
| 1H | Practical Promise | how-tos and embed guides — "you'll have a code embedded in five minutes" |
| 1I | Friction Opener | topics readers feel stuck or uneasy on (why QR codes fail, online privacy and faith) |
| 1J | Cross-Reference | a post inside a larger cluster/hub |

**Rule:** never use the same Slot 1 + Slot 9 (conclusion) combo two posts in a row.

---

## SLOT 2 — CONTEXT BRIDGE (after intro → into the body)

The transition from intro to the first H2's content. Default crutches: *"To understand this, we need to..."*, *"But before we dive in..."*

### Rotation bank (pick one)

**2A — The Specifics Drop**
Jump straight to the most specific thing the body will do.
```
The first step is the one most people skip: test the code with your own phone before you print a single copy.
```

**2B — The Common-Belief Bridge**
Frame the body as a response to what readers usually believe.
```
Most people think a bigger QR code always scans better. It doesn't. Contrast and the dead-URL problem matter more — here's why.
```

**2C — The Personal Bridge**
Use real, concrete experience with the task.
```
The first batch of test numbers I generated failed our form's validation. The fix was one formatting rule.
```

**2D — The Hard Question Bridge**
Lead with the part readers actually worry about.
```
The part that stops most people is "is this even legal?" Let's settle that first, with the actual guidance.
```

**2E — The Standard Bridge**
Anchor the body in the underlying standard or source.
```
Every valid phone number follows a numbering plan — E.164 internationally, NANP in North America. Match it and your test data behaves.
```

**2F — The Cold Cut**
No bridge. Hard cut from intro to the first H2 with no connector at all.

**2G — The In-The-Moment Bridge**
Open with exactly when and how to use the thing.
```
Pick the verse below that fits the night you're having. Read it slowly, twice. That's where this set is meant to be used.
```

**2H — The Stakes Bridge**
Restate what makes this worth doing.
```
The reason this matters: a code that fails in print costs you the scan, the reprint, and the trust. Getting it right once is cheaper.
```

---

## SLOT 3 — SUB-HEAD PHRASING

H2s default to label phrasings ("Steps", "Section 1", "The verses"). Rotate phrasing across the post.

### Rotation bank (pick at least 3 different styles per post)

**3A — Question H2:** "Why won't my QR code scan after I print it?"
**3B — Claim H2:** "High contrast beats large size every time"
**3C — Specific anchor H2:** "Step 2: paste your URL and pick the size"
**3D — Direct-instruction H2:** "Test the code before you print anything"
**3E — Comparison H2:** "Static vs dynamic QR codes: which one you actually need"
**3F — Number H2:** "5 verses for the nights anxiety won't let you sleep"
**3G — Contrarian H2:** "Generating a number isn't the part the law cares about"
**3H — Setup H2:** "How to use the verses below" / "What you'll need first"  *(use sparingly — but a how-to-use or what-you'll-need H2 is genuinely useful)*
**3I — Scenario H2:** "For flyers and posters: the size and contrast that work"

**Rule:** in a post with 5+ H2s, use at least 3 different H2 styles. Mixing styles is itself a quality signal.

---

## SLOT 4 — TRANSITIONS BETWEEN SECTIONS

Default: *"Now let's look at..."*, *"Moving on to..."*, *"Another important aspect is..."*

### Rotation bank (pick one per transition, vary across sections)

**4A — Consequence Cut**
```
Get the contrast right and the next problem — the dead URL — becomes the only thing left to fix.
```

**4B — Contrast Cut**
```
The next case asks something different of you: not making a code, but reading one someone else printed.
```

**4C — Question Cut**
```
Which raises the question most people reach next: [next H2 question].
```

**4D — Specific Detail Cut**
```
Notice the country code in that last example — it's what keeps the number valid for E.164.
```

**4E — Quiet Cut**
No transition line — just end the section on a clean beat and start the next with a new H2 and a fresh first sentence.

**4F — Foreshadow Cut**
```
This won't fully matter until you pair it with the embed snippet at the end.
```

**4G — Reversal Cut**
```
The rule you just read has one exception, and it's the one that trips up most flyers.
```

**4H — Scope Expansion Cut**
```
Once these steps feel automatic, they stop being a "QR thing" and become how you ship any printed asset.
```

---

## SLOT 5 — WORKED-EXAMPLE / EVIDENCE FRAMING

Every post should show, briefly and honestly, *why* the method works or *why* the claim holds — but the framing defaults to the same vague "experts agree" line. Rotate the angle. (All claims must follow the trust model: real, sourced facts and specs; no fabricated stats; legality framed as general information with cited authority; scripture quoted exactly with the translation named.)

### Rotation bank (pick one primary framing per post)

**5A — Worked-example framing**
```
Walk one real example end to end — make this exact QR code, see it render, scan it — so the method isn't abstract.
```

**5B — Sourced-spec / sourced-stat framing** *(cite a real source; see `research-and-citation-skill.md`)*
```
Anchor the claim to a real standard or authority — E.164 / NANP for phone formats, the QR spec for error correction, ADAA/NIMH for an anxiety stat — state it plainly, link it, don't overclaim.
```

**5C — Failure-mode framing**
```
Show what breaks and why (low contrast, too much data, a dead URL), then the fix — the mistake teaches the rule.
```

**5D — Comparison framing** *(reach for a Markdown table)*
```
Lay the options side by side (static vs dynamic, KJV vs NIV) in a table so the reader can decide at a glance.
```

**5E — Scripture-grounded framing** *(for 0A-5; quote exactly, name the translation)*
```
Ground each point in a verse quoted verbatim with its reference and translation, so the meaning rests on the text itself.
```

**5F — Honest-limits / responsibility framing**
```
Name what the tool won't do and the responsible boundary — "this is for testing and QA, not for contacting real people; general information, not legal advice."
```

**Rule:** never lead two consecutive posts with the same evidence framing. A legality post leaning on 5B (sourced authority) and a faith post leaning on 5E (scripture) should not both also open with 5A. And any post that touches legality, privacy, or health stats MUST include 5F somewhere, regardless of its primary framing.

---

## SLOT 6 — COMMENTARY / VOICE LINES

Personality phrases — the helpful Randomyl voice showing up between sections. Defaults: "It's worth noting that...", "Importantly..."

### Rotation bank (pick 2-4 per post)

**6A** — "Yes, this tripped me up the first time too."
**6B** — "[Short concrete observation specific to the topic]."
**6C** — "Test it once before you commit to a reprint — it takes ten seconds."  *(use max once per 5 posts)*
**6D** — "Which is the part that quietly breaks most codes in the wild."
**6E** — "Pick the format your form expects — that's usually where validation fails."
**6F** — "[Plain-language rephrasing of a technical line]."
**6G** — "And this is where a tool beats doing it by hand."
**6H** — "Which is not the same as saying the tool is for contacting real people."
**6I** — "No special software needed — your phone camera already does this."
**6J** — "I'd qualify this more than most posts do — [the careful version]."

---

## SLOT 7 — EMPHASIS TYPE

When a section needs pulled emphasis, rotate the type. The Markdown renderer (`components/MarkdownRenderer.tsx`, react-markdown + remark-gfm + rehype-highlight) supports full GFM: `>` blockquotes (the answer/tip box), **tables** (they render), fenced code blocks (syntax-highlighted), bold lead-ins, and pulled key sentences. "Emphasis" here means picking the *kind of emphasis*, then rendering it with the right GFM element.

### Rotation bank (pick the type that fits)

**7A — Tip:** practical advice, as a `>` blockquote (the tip box) or a bold **Tip:** lead-in
**7B — Gentle caution:** what to watch for (a dead URL, an invalid format, a legal boundary), as a `>` blockquote or a bold **A note:** line
**7C — Key Takeaway:** the load-bearing single sentence, as a standalone bolded line
**7D — Sidebar:** related context that breaks the main flow, as a `>` blockquote
**7E — Definition:** an inline definition of a term (*error correction level*, *E.164*, *quiet zone*), as a bolded term + plain prose
**7F — Pull Quote:** a sourced spec/stat, a verse, or a key line pulled out as a `>` blockquote
**7G — Comparison:** an "X vs Y" contrast as a **Markdown table** (tables render — use them)
**7H — Code / format snippet:** an HTML embed, a format example, or a CLI line in a fenced ```code block (renders, syntax-highlighted)

**Rule:** not every post needs pulled emphasis. But every post over 1,500 words should have at least one. Remember the top-of-body answer is itself a `>` blockquote — don't double up with a redundant one right beside it. On comparison/spec posts, prefer a table (7G) or code block (7H) over a generic blockquote.

---

## SLOT 8 — FAQ BLOCK STYLE (when applicable)

When the post includes a FAQ block at the bottom, the questions and answers can be styled in different ways. All in supported GFM (`###` questions, paragraph answers; tables allowed where useful — and note no FAQPage schema is auto-emitted, the FAQ is body prose only).

### Rotation bank

**8A — Plain Q/A:** Question `###`, answer paragraph
**8B — Inline question + bolded answer first line + supporting prose**
**8C — Q/A with a linked related post or the matching tool per answer**
**8D — Q/A with "short answer / longer answer" two-paragraph structure**

---

## SLOT 9 — CONCLUSION SHAPE

The final beat before the CTA. Defaults: *"In conclusion..."*, *"To summarize..."*, *"At the end of the day..."*

### Rotation bank (pick one)

**9A — Full Circle**
Reference a detail from the opening and reframe it.
```
That flyer that wouldn't scan up top? Run it through the four checks above and it scans on the first try now.
```

**9B — Open Invitation**
Leave the reader with the next thing to try.
```
Generate one code right now, test it with your phone camera, and see it work before you print a single copy.
```

**9C — Quiet Landing**
End on a single clear statement. Let it sit.
```
[Plain, useful closing line — "A code that scans is just four checks away: contrast, size, quiet zone, live URL."]
```

**9D — Wider Lens**
Pull out to show what this unlocks beyond the one task.
```
[How getting the format right once carries over to every test dataset, demo, and QA run you'll ever set up.]
```

**9E — Practical Synthesis**
Restate what to do right now.
```
If you want to ship this today: generate the code, save the PNG, drop in the embed snippet, and scan-test it once.
```

**9F — Honest Acknowledgement**
Acknowledge what the post doesn't cover or the responsible boundary.
```
This covers legitimate testing and QA use. It is general information, not legal advice — if your use touches real people or contact, check the rules that apply to you first.
```

**9G — Specific Recommendation**
Recommend one specific next action or read.
```
The single thing I'd do next is build one with the [Random QR Code Generator](/tools/random-qr-code-generator) and scan-test it before anything goes to print.
```

**9H — Restatement of Stakes**
Why this mattered.
```
[Sentence restating why a valid format / a code that actually scans is the difference between a working asset and a wasted print run, in the post's framing.]
```

---

## SLOT 10 — CTA TARGET

The single CTA points to one of two things. Rotate which, so the corpus doesn't always funnel the same way. (Single-CTA discipline is in `conclusion-and-cta-skill.md`.)

| Code | CTA target | Best for |
|---|---|---|
| 10A | The matching tool (`/tools/<tool>`) | tool how-tos and explainers — send the reader to do the task |
| 10B | A sibling post in the same cluster (`/blog/<slug>`) | listicles, decision posts, faith articles — the natural next read |
| 10C | The pillar / hub post in the cluster | a focused post that sits under a broader guide |

**Rule:** never the same Slot 10 target two posts in a row *to the same destination*. A QR how-to (10A → `/tools/random-qr-code-generator`) followed by another QR how-to should send the second to a sibling post (10B) or the pillar (10C), not the same tool link again.

---

## ROTATION LOG TEMPLATE

After every post, append this block to the audit (not the Markdown body — orchestrator persists it):

```
Rotation Log — <slug> — <date>
- Slot 0A (Content Type): 0A-1
- Slot 0B (Audience/Tone): 0B-3
- Slot 0C (Structure/Grouping): 0C-1
- Slot 1 (Intro Pattern): 1H
- Slot 2 (Context Bridge): 2A
- Slot 3 (H2 Phrasing Mix): 3C, 3D, 3B, 3H  (across the H2s)
- Slot 4 (Section Transitions): 4A, 4B, 4D, 4H
- Slot 5 (Worked-Example/Evidence Framing): 5A, 5F
- Slot 6 (Commentary Lines): 6A, 6G, 6I
- Slot 7 (Emphasis): 7A, 7H
- Slot 8 (FAQ Style): 8C
- Slot 9 (Conclusion): 9G
- Slot 10 (CTA Target): 10A → /tools/random-qr-code-generator
```

The orchestrator stores the log in `protocols/rotation-log.md` (one level up; already created). The next run reads recent logs and avoids the same combos.

---

## CROSS-POST RULES

1. **Never reuse the Slot 1 + Slot 9 combo** two posts in a row on the same site (these define how the post *feels*).
2. **Never repeat Slot 0A (content type) two posts in a row** unless deliberately building a cluster — and rotate 0B/0C/5 hard if you do. Because clusters cause back-to-back same-type posts (QR how-tos, verse listicles), treat 0C (structure/grouping) as the de-facto "type" rotation when two same-type posts ship close together.
3. **Slot 4 transitions:** use at least 3 different codes per post AND swap at least one between consecutive posts.
4. **Slot 5 (worked-example/evidence):** never lead two consecutive posts with the same framing; any legality/privacy/health-stat post must include 5F.
5. **Slot 6 commentary lines:** rotate at least 2 of 3-4 selections between consecutive posts.
6. **Slot 3 sub-head phrasing:** if the last post had a question-heavy H2 mix, the next post should lean claim-heavy or instruction-heavy.
7. **Slot 10 (CTA target):** don't point two consecutive posts at the identical destination; alternate tool / sibling / pillar.
8. **If a slot's options have all been used in the last 3 posts**, force yourself into older options or write a new one in.

---

## CLUSTER-LEVEL VARIETY

On a tools site, the sharpest repetition risk is *within a cluster* — three QR how-tos, or four "Bible verses about X" listicles, written back to back land as a template. Extra guard rails by cluster:

- **QR-code cluster** (`custom-qr-code-generator-guide`, `how-to-scan-qr-code`, `free-qr-code-templates-flyers-cards-menus`, `qr-code-use-cases-by-industry`, `why-qr-codes-fail-how-to-make-them-work`, `copy-paste-html-templates-embed-qr-codes`): these almost beg for the identical "hook → steps → mistakes → CTA to the QR tool" shape. Force different Slot 1 / Slot 9 combos, a different Slot 0C structure (sequential steps vs use-case vs failure-mode), and a different Slot 5 framing between any two. Vary whether the post opens with the task (1A) or the failure (1I), and rotate Slot 10 so they don't all link the same tool.
- **Phone-number cluster** (`how-to-generate-random-phone-numbers`, `understanding-phone-number-formats`, `is-it-legal-to-use-a-random-phone-number-generator`, `free-fake-phone-number-generator-for-testing`, `when-to-use-random-phone-number-generator-guide`): these share a format/legality spine. Rotate whether the post opens practical (1H/1A) or stake-first (1C), alternate Slot 0C between sequential steps (0C-1) and comparison matrix (0C-6), and ensure every legality post carries 5F and the "general information, not legal advice" note.
- **Bible / Christian cluster** (`bible-verses-about-anxiety`, `bible-verses-about-relationships`, `forgiveness-in-the-bible`, `what-does-the-bible-say-about-tattoos`, `women-of-the-bible-stories-of-strength-courage-and-faith`, `jesus-wept-bible-verse-meaning`): these share a "verses about X" or scripture-explainer shape. Rotate which theme/book anchors the set, the translation named, the Slot 0C grouping (by sub-theme vs by situation), and whether the framing leads with the verse or the meaning. Always quote scripture verbatim with the reference and translation (trust model).
- **Online-privacy / data cluster** (`how-data-privacy-tools-protect-your-identity`, `what-bible-teaches-about-online-safety`, `online-privacy-faith-issue`): these can blur into one "privacy matters" essay. Rotate the Slot 0B register (privacy-conscious 0B-5 vs faith 0B-4), the angle (practical-protection vs faith-grounded), and keep claims sourced and qualified.
- **Words cluster** (noun/object generators — writing prompts, games, brainstorming, vocabulary): rotate the use-case that anchors the post (prompts vs games vs vocabulary), the Slot 0C structure, and whether the framing leans worked-example (5A) or comparison (5D).

When two posts in the same cluster ship close together, treat the second as "consecutive" for the cross-post rules even if other posts came between them.

---

## EMERGENCY VARIETY CHECK

If a post STILL feels templated after rotation, scan for these sneaky defaults that no slot fully catches:

| Sneaky default | Fix |
|---|---|
| "The reality is..." | Just state the reality. |
| "In fact..." | Usually unnecessary; delete. |
| "You see..." | Filler. Cut. |
| "Here's the thing:" | AI tell. Rewrite. |
| "At the end of the day..." | Cliché. Use a specific. |
| "Simply follow these steps..." | List tell. Show the actual step and what it produces. |
| "It's important to note that..." | Note it without the preamble. |
| "Let's dive in." | Cut. Start with the first step or the why. |
| "Needless to say..." | If it's needless, don't say it. |
| "Revolutionize your workflow" / "this one trick guarantees..." | Overused and overclaimy. State the honest mechanism; never promise a guaranteed outcome or a legal absolute. |

---

## When variety is the wrong move

Variety for variety's sake isn't the goal. Some patterns are best because they fit the content type:

- **Tool how-tos almost always start with Pattern 1A (Direct Answer) or 1H (Practical Promise)** — readers came to do the task; name it and start. Rotating to "Cold Open" would lose the snippet and the reader.
- **Curated listicles almost always start with 1F (Specific Number)** — the count is the hook ("25 Bible verses about anxiety").
- **Legality/decision posts earn 1C (Stake-First) or 1D (Contrarian)** — name the question or the misconception, then resolve it honestly.
- **Pillar guides and story-led pieces earn 1B or 1E (Cold Open or Story-First)** — they need narrative pull.

The rotation log catches the *sub-slots* (transitions, commentary, conclusions) more than the structural choices. The structural choices follow content type — but the **content type (0A), audience/tone (0B), structure/grouping (0C), worked-example framing (5), and CTA target (10) must always rotate** so the corpus stays fresh.

---

**BlogOS** — every post should feel like its own thing.
