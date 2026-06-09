---
name: update-discipline
description: When to update an existing post vs publish a new one. When to redirect. How to bump the lastModified frontmatter stamp that feeds dateModified and og:modifiedTime. When to sunset stale posts. This is the skill that prevents content rot, link decay, claim/scripture/spec drift, and accidental duplicate-intent posts from accumulating across randomyl.com's tools-and-blog corpus.
---

# Update Discipline — the long maintenance game

> Most blog content rots. A "custom QR code generator guide" that ranked in year one drifts out of relevance, cited sources move, a "how to generate random phone numbers" guide falls out of sync with a fresher competitor, an embed snippet stops rendering, a stale post sits dead weight, and the site quietly loses traffic — and tool conversions — without anyone noticing why. This skill is the maintenance discipline that prevents that.

---

## The three lifecycle decisions

For any post that has been published for ≥ 6 months, you face one of three decisions:

1. **Leave alone** — post is still ranking, still accurate, still routing readers to the tool
2. **Update in place** — post needs refreshing but the intent and angle are still valid
3. **Replace** — post is fundamentally outdated, off-strategy, or the angle has changed

The wrong decision rots the corpus. The right decision compounds.

---

## What triggers a re-check

A tools-and-blog site refreshes on a mix of **events** and **the calendar** (some content is seasonal/occasion-bound). Re-check a post when any of these happens:

- **An instruction or spec stops being correct** — a QR-embed snippet that no longer renders, a scan step that's changed, a phone format (E.164 / NANP) that's been mis-stated, a tool screenshot or step that's drifted from the live `/tools/<tool>` UI
- **A claim needs correcting** — an overclaimy "this is 100% legal everywhere" line on a phone-number post, a statistic that can't be sourced, or a privacy claim that should carry a "general information, not legal advice" note and doesn't
- **A scripture or translation error surfaces** — a verse mis-quoted, attributed to the wrong book, or quoted without naming the translation (Bible cluster, trust model)
- **A new related post or the tool's capabilities change so this post should re-link** — when a sibling post ships or the generator gains a feature, re-link the relevant posts to it and the tool
- **A post drifts from a stronger competitor** — a thinner, older guide that a fresher, more complete competitor has out-classed
- **A better source appears** — a clearer standard, study, or reputable reference supersedes a weaker citation

When any trigger fires, run the post through the update / replace / merge / sunset decision below.

---

## Tracking updates with the `lastModified` stamp

**Important — this is the opposite of the old Notion setup.** randomyl posts **have a `lastModified` frontmatter field** (ISO 8601). It feeds `dateModified` in the auto-shipped `BlogPosting` JSON-LD and `og:modifiedTime`, both emitted by `app/blog/[slug]/page.tsx`. So freshness is a field you set, by hand, in the `.md` file:

- **`lastModified`** — bump this to the edit date whenever you make a *meaningful* update (see "substantive" below). It is the single freshness stamp Google reads on the page. If you skip it after a real refresh, the post looks stale to crawlers even though its content is current.
- **`date`** — the original publish date / `datePublished`. **Never change `date` for an in-place refresh** — only `lastModified` moves. For a *replacement* you create a new `.md` file at a new slug with its own fresh `date`.
- **`git history`** — `git log content/blog/<slug>.md` is the durable repo-side record of every edit, in addition to the `lastModified` field. The commit message documents *what* changed.
- **A visible correction note in the body** — when an update *corrects* a previous claim, say so in the post (see below). That's the reader-facing trust signal on top of the machine-readable `lastModified` bump.

Freshness on randomyl is therefore communicated by *the content being current and accurate* **and** by an honestly-bumped `lastModified` — not by faking either one.

---

## When to UPDATE in place

Update the existing post (do not publish a new one) when:

- The target query and intent are unchanged
- The structural skeleton is still sound
- Specific steps, list entries, comparison rows, or sources need refreshing (e.g. correcting an embed snippet, adding a missing "how it works" section, swapping a weak source)
- A seasonal/occasion post needs its yearly pass before its window
- A legality/privacy claim needs re-sourcing or a "general information, not legal advice" note added to meet the trust model
- A new related post should now be linked, or the supporting tool's CTA/feature reference needs updating
- New internal links should be added (because new sibling posts / hubs have been published)

### How to update in place

1. Open the `content/blog/<slug>.md` file (the source of truth — there is no Notion) and make the changes in the Markdown body
2. Add or update inline citations where you've touched a factual claim — link a reputable, real source (no fabricated statistics); for Bible posts quote scripture exactly and name the translation; verify any QR/phone spec against the standard
3. If the update *corrects* a previous claim — a wrong instruction, a mis-quoted verse, an overclaimy legality line — add a correction note (see below)
4. Refresh internal links to point at any newly-shipped sibling posts, and confirm the `/tools/<tool>` CTA still points at the right generator
5. **Bump `lastModified`** in the frontmatter to today's date (ISO 8601) so `dateModified` and `og:modifiedTime` reflect the refresh
6. Run `/b-review` to audit the updated post
7. Commit and rebuild (static) with a clear message — the commit *is* your repo-side update record: `Refresh "custom QR code generator guide": fix the embed snippet, re-source the QR adoption stat, link the scanning guide`

### What counts as a "substantive" update

(These are the changes worth doing — and worth a `lastModified` bump.)

- New section added (e.g. a "how it works" or "common mistakes" section)
- A how-to step or embed/format snippet corrected so it actually works
- A statistic corrected or re-sourced to a real authority
- A scripture quote corrected or its translation named
- An overclaimy legality/privacy line softened to meet the trust model
- A newly-shipped sibling post or tool feature linked in
- Seasonal/occasion refresh for the upcoming window
- New internal links added (3+)

What does NOT count as substantive (do **not** bump `lastModified` for these):
- Typo fix
- Formatting tweak
- Single-link replacement (without changing a claim)
- Image swap with no content change

Never fake freshness by bumping `lastModified` without changing the substance — readers and Google both notice over time, and a hollow date bump on a stale post is the dishonest move the HCU is built to catch.

### How to write a correction (plain Markdown — no custom component)

`MarkdownRenderer.tsx` renders standard GFM; there is no `<CorrectionNote>` component. Write the correction as a `>` blockquote (the tinted note box) or a paragraph led with a bold **Correction:**. Add it when the update *changes a previous claim*. Examples:

- "This guide previously showed an embed snippet that didn't render. Corrected — the `<img>` tag now points at a valid data URI and is shown inside a fenced code block."
- "The post previously linked our old QR maker guide, which has been consolidated. Updated to the current [custom QR code generator guide](/blog/custom-qr-code-generator-guide)."
- "The post previously quoted Philippians 4:13 without naming a translation, and slightly mis-worded it. Corrected, with the translation (NIV) now named."

Format — blockquote form (rendered as the tinted box):

```
> Correction: This guide previously implied a random phone number generator
> could be used to mask your identity for any purpose. It can't, legally.
> The line now frames the tool for legitimate testing, QA, and privacy use only.
```

Or the bold-line form, inline where the correction applies:

```
**Correction:** the earlier version cited a QR-adoption statistic we couldn't
verify. That sentence is removed; the claim below links a real, reputable source.
```

A visible, honestly-worded correction plus the `lastModified` bump is the full trust signal — and on YMYL-adjacent content (legality, privacy, faith), a reader leaning on these instructions deserves to know what changed. Sites that log corrections are taken more seriously than sites that quietly edit.

---

## When to REPLACE (publish a new post + redirect the old)

Replace when:

- The target query has *shifted* (e.g. a dated "2021 QR code guide" now competes against a 2026-intent query)
- The angle has *changed* (the new post takes a substantially different approach — say, from a bare tool restatement to a real worked how-to with a comparison table)
- The post architecture is wrong (e.g. it was a one-paragraph dump and you need a full how-to with sections)
- The post would require >50% rewrite to update

### How to replace

1. Write the new post as a new `content/blog/<new-slug>.md` file (do not reuse the old slug — the URL is stamped on history), with its own `slug`, fresh `date`, `lastModified` equal to that date, and a `metaDescription`
2. Drop its images in `public/blog/`
3. Commit and rebuild (static) — the file existing in `content/blog/` IS published; there is no Status field
4. Set up a 301 redirect from the old slug to the new slug
5. Update any internal links pointing to the old slug (use `Grep` / repo-wide search across `content/blog/`)
6. Remove the old post from publication — **delete `content/blog/<old-slug>.md`** (the 301 keeps the URL alive); git history preserves the old version
7. Keep a git reference to the old file if anyone needs to consult it

### The 301 redirect

Redirects live in the Next config via `redirects()`. The convention:

```js
async redirects() {
  return [
    {
      source: '/blog/old-slug',
      destination: '/blog/new-slug',
      permanent: true,
    },
  ]
}
```

301 (permanent) signals to Google that the old URL is gone and the new URL inherits its SEO equity. 302 (temporary) does not transfer equity. Always 301 for retirements.

### When NOT to replace

- The old post still ranks #1 — leave it alone, even if you'd write it differently today
- The old post is the canonical reference for inbound links you don't control (round-ups, resource lists, pins) — leave the URL alive

---

## When to MERGE two posts

If two posts target overlapping intents (e.g. the near-duplicate QR maker guides `free-qr-code-maker-guide` / `qr-code-creator-guide` / `generate-qr-codes-online-beginners-guide`, or two phone-format pages that say the same thing):

1. Pick the stronger of the two as the survivor
2. Move the unique, verified material (an extra worked example, a clearer comparison table, a better-sourced stat) from the weaker into the survivor — in the survivor's `.md` file
3. Expand the survivor's target in the keyword brief, run `/b-review`
4. **Bump the survivor's `lastModified`**; 301-redirect the weaker's slug to the survivor's slug
5. Update any internal links that pointed at the weaker slug
6. Delete `content/blog/<weaker-slug>.md`

### Detecting overlap

Run a periodic audit:

- For each post in the corpus, list its primary target query (from the keyword brief / the post's intended angle)
- Group posts by that query
- Any group with > 1 post is a merge candidate

On a tools site, near-duplicate intents are common (the three QR maker guides above; "how to generate random phone numbers" vs "random phone number generator how to"; "how to create a fake phone number" vs "free fake phone number generator for testing") — catch these before they're written by checking the existing `content/blog/` corpus for the intent first.

---

## When to SUNSET (delete and 410)

Sunset when:

- The topic is genuinely irrelevant to the site's current direction (a stale one-off that draws nothing and fits no cluster)
- The post is harming the site's quality profile (thin, off-topic, or built around a claim you can't make trust-compliant)
- The URL has no inbound links worth preserving

### How to sunset

1. Confirm no internal links point to the slug (search `content/blog/`)
2. Delete `content/blog/<slug>.md`
3. Either:
   - Return HTTP 410 Gone (preferred for content that should be deindexed quickly)
   - Or 301 to the closest topical post — usually a relevant cluster post or the supporting tool's hub (preferred if there's a natural successor)

Sunsetting is rare. Most "old" posts should be updated, replaced, or merged — not sunset.

An interim option short of deletion: because publishing = the file existing in `content/blog/`, you "unpublish" by **removing the `.md` file** (move it out of the tree or delete it) and rebuilding — there is no Status field to flip. That pulls the post from the static build entirely (the route uses `generateStaticParams` + `dynamicParams = false`). Useful when a post is wrong but a fix is pending; restore the file when it's ready.

---

## The freshness model

Different content has different freshness expectations. On a tools-and-blog site the cadence is event-and-spec-driven:

| Content type | Re-check trigger | Calendar backstop |
|---|---|---|
| Tool guide / how-to (QR, phone) | A step/snippet breaks or the tool UI changes; a competitor pulls ahead | Every 12 months |
| Explainer / "how it works" | A spec or standard changes (E.164, QR error correction) | Every 18-24 months |
| Listicle / curated collection | A list entry goes stale or a stronger list ranks | Every 12-18 months |
| Decision / comparison / legality | Law, pricing, or a comparison row changes | Every 12 months |
| Faith / scripture article | A verse or translation needs correcting | Every 18-24 months |
| Pillar / topic hub (e.g. the QR or phone hub) | A new sibling post ships under it, or the tool gains a feature | Every 12-18 months |

When a post is due, the orchestrator can flag it via a maintenance run that checks `date`, `lastModified`, and git's last-touched date on the `.md` file against this model and the event triggers above.

---

## The maintenance run

Periodically (monthly is fine, plus a pre-season sweep), the site runs a maintenance audit:

```
For each post in content/blog/:
  - Check date + lastModified + git last-modified against the freshness
    model and event triggers
  - Flag seasonal/occasion posts whose window is within 6 weeks
  - Check every outbound URL for 200 status (no 404s)
  - Check every internal link (to siblings) and every /tools/<tool> CTA for resolution
  - Confirm the file is present in content/blog/ (published) or intentionally removed
  - Re-verify headline claims (any statistic, any QR/phone spec) against current
    reputable sources / standards — no fabricated statistics
  - Re-test that how-to steps and embed snippets still work
  - Confirm scripture quotes are accurate with the translation named
  - Confirm no legal-absolute / fraud-enabling framing slipped in; legality/privacy
    carries the "general information, not legal advice" note
  - Confirm every instruction is correct and reproducible
  - Confirm posts link to any newly-shipped relevant sibling and to their tool
  - Flag posts ranking below position 20 for the target query
  - Flag posts with declining traffic OR declining post→tool clicks in Search Console / GA4
```

The output is a triage list. Each post gets one of the three decisions (leave / update / replace) and the corresponding action. Any post whose statistic can't be sourced, whose scripture is wrong, whose instructions don't work, or that frames a tool for fraud/spam/harassment, is escalated immediately.

---

## Tracking versions with a visible change log (advanced)

`lastModified` and the git log are the authoritative machine and repo history. For a handful of high-traffic posts where updates happen often, you may *also* want an in-body, visible change log near the bottom — plain Markdown (a `##` heading + bulleted list), reader-facing, honest:

```
## What's changed
- Refreshed for 2026: fixed the embed snippet, added a "common mistakes" section.
- Added a "scanning on older phones" sub-section.
- First published.
```

This is optional and reader-facing — it does not replace bumping `lastModified` in the frontmatter, which is what Google actually reads. The in-body note is for readers who want to know the post is maintained. Reserve it for posts that get cited externally or drive significant traffic and tool conversions.

---

## Redirect hygiene

Over time the redirects pile up. Rules:

- Never redirect a redirect (A → B → C). Update the A redirect to point directly to C.
- Audit redirects quarterly. Remove redirects for slugs that have been gone for > 2 years and have zero referrer traffic.
- Never repurpose a slug. If `/blog/free-qr-code-maker-guide` was once thin and is now a full guide at the same URL that's fine — but never point an old slug at unrelated content; Google notices the bait-and-switch.

---

## What kills update discipline

- **Faking freshness by bumping `lastModified` without changing content** — Google and readers notice the dishonesty over time; a hollow date stamp on a stale post is exactly what the HCU penalizes
- **Forgetting to bump `lastModified` after a real refresh** — the opposite failure: the content is current but the page advertises a stale `dateModified` to crawlers
- **Leaving 404s on outbound links or a dead `/tools/<tool>` CTA** — reference sites move and routes get renamed; the maintenance run catches them
- **Letting an overclaimy or unsourced claim sit** — the moment a legality line states a false absolute, a statistic can't be sourced, or a privacy line should carry the general-information note and doesn't, fix it; on YMYL-adjacent topics a reader trusting these instructions deserves accuracy
- **Letting a broken how-to step or embed snippet sit** — an instruction that no longer works is the randomyl equivalent of a harmful claim; re-test on the schedule
- **Missing the seasonal/occasion window** — a holiday-QR or year-in-review post refreshed after the window is wasted; do the pass before it
- **Not re-linking to new siblings/tools** — when a related post ships or the tool gains a feature, the posts that should point to it are orphaned value
- **Sunsetting posts without redirects** — every dead URL is wasted SEO equity
- **Duplicate intent across posts** — kills both, since neither concentrates ranking signals (very common with the near-duplicate QR and phone guides)
- **Never updating anything** — the corpus rots quietly

---

## Pre-update checklist

- [ ] Decision (update / replace / merge / sunset) is correct for this post
- [ ] If updating, all changes are substantive (not cosmetic)
- [ ] `lastModified` bumped to the edit date (ISO 8601) for a substantive update; `date` left unchanged
- [ ] Update also tracked via a clear git commit message
- [ ] Edit made directly in the `content/blog/<slug>.md` file (there is no Notion)
- [ ] File present in `content/blog/` to publish, or removed to unpublish (no Status field)
- [ ] If a seasonal/occasion post, refreshed ahead of its window
- [ ] Every how-to step and embed/format snippet still works
- [ ] Any newly-cited fact verified against a reputable source / standard (no fabricated statistics)
- [ ] Scripture quoted exactly with the translation named (Bible cluster)
- [ ] No legal-absolute / fraud-enabling framing; legality/privacy carries the general-information note
- [ ] Correction note (a `>` blockquote or bold "Correction:" line) added if a previous claim was corrected
- [ ] New citations added as inline Markdown links
- [ ] Internal links updated to any newly-shipped sibling, and the `/tools/<tool>` CTA verified
- [ ] If replacing, new slug differs from old slug, with its own fresh `date` and matching `lastModified`
- [ ] If replacing, 301 redirect configured
- [ ] If replacing/merging, internal links to old slug have been updated
- [ ] `/b-review` run on the updated post

---

**blogOS** — content compounds when you maintain it.
