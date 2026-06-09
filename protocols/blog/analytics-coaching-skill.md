---
name: analytics-coaching
description: Read your web analytics (GA4) and Google Search Console to diagnose post problems on randomyl.com. Replaces FacelessOS's retention-coaching-skill (which read YouTube Studio retention graphs). This is the skill for post-publish optimization — what does it mean when a QR or phone guide has high impressions but low CTR, or high CTR but low time-on-page, or readers who land on a thin tool-guide page and bounce, or a guide that draws readers but never sends them to the tool it supports?
---

# Analytics Coaching — diagnose what the post is actually doing

> A post can be perfectly written and still underperform — and the data tells you specifically what's wrong. This skill is how to read your web analytics + Google Search Console and translate the numbers into the specific writing / SEO fix to apply. It is **tool-agnostic**: whatever analytics package the site runs (GA4, a privacy-light tool, server logs, or none yet), the shapes below are read from whatever pageview / engagement signals you have. Don't assume a specific package is installed — but the single signal that matters most here is the **post → tool click**.

---

## The two data sources

### Google Search Console (GSC)

Tells you what's happening *in the SERP* before the click:

- Impressions (how many times the post showed up in search results)
- Clicks (how many times someone clicked through)
- CTR (Clicks ÷ Impressions)
- Average position (1-100, where the post ranks for each query)
- Top queries the post ranks for

GSC is the "is the post discoverable and clickable" signal. It's free and should always be connected. (For this site, also watch which queries pull tool-intent traffic — "QR code generator," "random phone number generator," "random bible verse" — those searchers want the tool, and a guide that ranks for them should route fast.)

### Your web analytics (GA4)

Tells you what's happening *on the page* after the click. In GA4 (or whatever tool you use), the signals that matter are:

- Users / pageviews (and `page_view` events)
- Average engagement time (GA4's engagement-time-per-session / per-page)
- Engagement rate / bounce
- Scroll depth (GA4 fires a `scroll` event at 90% by default; add finer thresholds if you want them)
- Outbound / internal clicks — most importantly, the **"clicked through to the tool" action** (a click from the post to its `/tools/<tool>` generator), and for longer guides, a **scroll-past-the-steps** signal (did they reach the worked example / FAQ, or stop at step 1?)

If the site doesn't have a "clicked through to the tool" event configured yet, set one up — it's the single most useful on-page conversion signal for this corpus. **The post's job is to send the reader to the generator it supports**, so the post → tool click is the core conversion. In GA4, track it as a click event on the `/tools/<tool>` CTA link (or mark it as a key event). Until then, infer it from outbound/internal-click or next-page (`/tools/...`) path data.

Together: GSC tells you whether the post is *found and clicked*. GA4 tells you whether it *keeps the reader and routes them to the tool* (or a sibling post in the cluster).

---

## The five performance shapes

Every published post falls into one of five shapes. Each shape has a specific diagnosis and fix.

### Shape 1: HIGH IMPRESSIONS, LOW CTR (poor SERP attractiveness)

**What you see:**
- GSC: 1,000+ impressions, < 1% CTR, average position 5-15
- The post is being shown to people, but they're clicking competitors instead

**Diagnosis:** the title and/or meta description aren't winning the click. Could also be a SERP feature (People Also Ask, an image pack, a featured snippet you don't own) eating the click above the organic results — common for "how to" QR/phone queries.

**Fix:**
1. Search the target query yourself and look at the SERP
2. Read your `title` and `metaDescription` from a searcher's perspective (remember: the frontmatter **`title`** is both the page H1 and the `<title>`/og:title; **`metaDescription`** is the separate 150-160 char SERP line)
3. Compare to the top 3 organic results — what are they offering that yours isn't?
4. Iterate on:
   - Front-loading the query in the `title` ("How to Generate Random Phone Numbers (Valid Formats, Step by Step)" beats "A Quick Note on Phone Numbers")
   - Adding a modifier (a count, Free, Online, Step-by-Step, for Testing, for Developers, [2026])
   - Rewriting the **`metaDescription`** (150-160 chars) with active phrasing and a specific promise (the number of templates, "renders in any browser," "valid E.164 numbers for QA")
   - Making sure the **`featuredImage`** is a strong, recognizable thumbnail — for image-forward queries the visual wins the click
5. Make the edit in the `content/blog/<slug>.md` file, bump `lastModified`, rebuild, then wait 2-4 weeks. Compare CTR.

**Not the fix:** changing the body of the post. The body is fine — Google ranks it, but the SERP listing isn't winning the click.

### Shape 2: LOW IMPRESSIONS, ANY CTR (poor discoverability)

**What you see:**
- GSC: < 100 impressions per month, average position > 20
- The post isn't ranking high enough to be seen

**Diagnosis:** the post lacks topical authority signals or has technical SEO problems.

**Fix:**
1. Check the topical map — does this post have inbound internal links from siblings in its cluster (other guides in the QR/phone/Bible/privacy cluster, the topic hub)?
2. Check the `title` — is the target query in it?
3. Check the `slug` — is the target query in it?
4. Check the body — does the target query appear naturally throughout, or only once?
5. Build internal links from 2-3 sibling posts to this one
6. Verify the post is in the sitemap and indexed (GSC → Pages / Coverage); confirm the `.md` file is actually present in `content/blog/` and was included in the static build (`generateStaticParams` + `dynamicParams = false` — if the file isn't there, the route doesn't exist)
7. Wait 4-8 weeks. Re-check.

**Not the fix:** rewriting the body before fixing the topical authority and technical SEO.

### Shape 3: HIGH CTR, LOW ENGAGEMENT TIME (the bounce shape)

**What you see:**
- GSC: 2-5% CTR (above average)
- GA4: average engagement time < 30 seconds, low engagement rate
- People click, see the page, and leave fast

**Diagnosis:** the title / description is over-promising or mis-framing what the post delivers — OR, common on a thin tool-guide page, **the page is just a bare restatement of the tool with no real how-to**. They clicked "how to scan a QR code" and got three obvious sentences with no worked example, no "why it won't scan" troubleshooting, and no real steps, so there's nothing to hold them; they bounce.

**Fix:**
1. Read the `title` and `metaDescription`
2. Read the first thing on the page — is the 40-60 word direct answer in the **leading `>` blockquote** (the answer box, right after the featured image), and is the reader oriented within the first screen?
3. If the guide is thin, add the missing scaffolding: a real **step-by-step** with a worked example, a **"common mistakes / why it fails"** section (honest, verified — see the trust model), and a comparison **table** where it helps. That depth is what turns a bounce into a read.
4. Either:
   - Align the `title`/`metaDescription` to what the post actually delivers
   - Or add the substance the title implied (a "how to" should actually walk the steps, not just describe the tool)
5. The reader should know within the first screen that this is a genuinely useful guide — not a paraphrase of the tool page.

**Not the fix:** assuming the post is "just not what they were looking for" — it is, it's just missing the depth that makes a guide worth reading.

### Shape 4: LONG ENGAGEMENT TIME, LOW SCROLL DEPTH (early payoff, no journey)

**What you see:**
- GA4: average engagement time 1-2 minutes
- Scroll event (if captured at finer thresholds): most readers stop at 25-40%
- People are reading, but only the top

**Diagnosis:** the top of the post is satisfying — they got the first steps — but the rest isn't pulling them through. A guide where readers stall at 40% means many never reach the worked example, the FAQ, or the tool CTA; the strongest material may all be front-loaded.

**Fix:**
1. Look at the `##` heading list of the post
2. Are the headings phrased as claims/questions that *promise specific value* ("Why your QR code won't scan — and the three fixes") rather than labels ("More info")?
3. Does the post have an arc (answer box → how it works → the steps → the worked example / common mistakes → FAQ → tool CTA)? See the structure slots in `variety-rotation-skill.md`.
4. Spread the most useful material through the sections, not all at the top
5. Add a re-hook around 30-40% — a "here's the mistake that breaks most QR codes, and how to avoid it" beat
6. Make sure any inline images (`/blog/<slug>-content-N.webp`) are light enough to load, so a slow image isn't where readers drop
7. Add internal links so a reader who finishes a section can keep going (to a sibling guide or down to the tool)

**Not the fix:** writing a longer post. Scroll depth is a quality signal, not a length signal.

### Shape 5: HIGH ENGAGEMENT, HIGH SCROLL DEPTH, NO TOOL CLICKS (engaged readers don't convert)

**What you see:**
- GA4: 3+ minutes engagement time, 75%+ scroll depth
- "Clicked through to the tool" action: 0 — they finish the guide and leave without ever opening the generator it supports

**Diagnosis:** the reader is engaged but the CTA isn't right. Could be:
- CTA is too generic ("learn more")
- CTA is buried after a wall of closing text
- The reader has no obvious next step (they just read how to make a QR code — give them the [random QR code generator](/tools/random-qr-code-generator) right there)
- The post explains the task but never links the tool that does it

**Fix:**
1. Look at the conclusion shape — is the close followed by a single specific CTA to the tool?
2. Is the CTA descriptive ("Ready to make one? Open the random QR code generator") or generic ("see more")?
3. Is the tool linked *early too* — right under the answer box, at the moment a reader thinks "I just need to make one" — not only at the very bottom?
4. Are the internal cross-links to siblings actually set so they exist?
5. Add or rewrite: a single, specific link to the supporting tool (e.g. `[random phone number generator](/tools/random-phone-number-generator)`). Plus the tool link at the peak-interest moment.

**Not the fix:** adding three competing CTAs.

---

## The query-level diagnosis (GSC)

Beyond per-post analytics, look at *what queries* each post ranks for.

### Healthy pattern
- Top query matches the post's intended target
- 5-10 supporting long-tail queries also rank
- All queries are topically aligned

### Unhealthy patterns

#### Pattern A: Mismatched top query
- The post ranks for a query you didn't target
- It doesn't rank for the query you did target

**Diagnosis:** Google has decided the post is about a different topic than you intended. Either your `title`/headings are mis-signaling, or the body is genuinely off-topic from your declared target. (Example: a "how to generate random phone numbers" guide that ranks for "fake phone number for SMS verification" instead — Google read it as a different-intent post.)

**Fix:** Either re-align the post (rewrite `title`/headings/intro to actually target the declared query) or, if the post genuinely serves the other intent better, lean into that — and make sure a dedicated post exists for the original intent.

#### Pattern B: Long-tail without head term
- Post ranks for 20+ specific queries ("QR code for restaurant menu," "QR code for wifi password")
- Doesn't rank for the main head term ("QR code generator")

**Diagnosis:** the post is a thin cluster competing with a non-existent pillar. The site needs the pillar.

**Fix:** Write the pillar (the comprehensive "QR code generator" guide/hub that links down to `/tools/random-qr-code-generator`). Link the existing post(s) up to it.

#### Pattern C: Cannibalization / losing to a competitor
- Two posts on the same site rank for the same query, both poorly (e.g. the near-duplicate QR maker guides `free-qr-code-maker-guide` / `qr-code-creator-guide`, or two "fake phone number" pages), OR your guide is steadily losing position to a competitor's stronger one
- Neither of yours hits position 1-5; both float around 10-30

**Diagnosis:** duplicate intent diluting each other, or a single post that's been out-classed by a fresher, more complete competitor.

**Fix:** If it's two of your own, merge them (see `update-discipline-skill.md`) — pick the stronger as survivor, redirect the other. If you're losing to a competitor, study their post: clearer steps, a working embed snippet, a real "why it fails" section, a comparison table, fresher framing — then do a substantive refresh (and bump `lastModified`) that beats it.

---

## Tracking the right metrics

You don't need 50 metrics. The five that matter:

| Metric | Where | Target |
|---|---|---|
| **Impressions** | GSC, last 28 days | Growing month over month |
| **CTR** | GSC, last 28 days | > 2% on average; > 5% on top posts |
| **Average position** | GSC, last 28 days | < 15 within 6 months of publish; < 10 within 12 |
| **Average engagement time** | GA4 | > 90 seconds on guides; > 3 min on pillars / deep how-tos |
| **Post → tool click rate** | GA4 (custom event / key event on the `/tools/<tool>` CTA) | Site-specific — track the trend (the core conversion: post → the generator it supports) |

Set up GSC alerts for:
- Posts dropping > 50% impressions month-over-month (something broke)
- Posts dropping > 20% CTR month-over-month (SERP competition changed)
- Sudden new high-impression query (an opportunity to update the post to capture more)
- A tool-intent query climbing (more reason to make sure that post routes hard to its tool)

---

## When to update vs leave alone

GSC + GA4 tell you which posts deserve attention:

| Signal | Action |
|---|---|
| Post is ranking #1-3 + good CTR + good engagement + good tool clicks | Leave alone. Don't touch a winner. |
| Post is ranking #5-15 + good CTR + good engagement | Update lightly — refresh a step, add a table, link a new sibling; bump `lastModified`. |
| Post is ranking #15-30 + decent CTR + okay engagement | Substantive update — new sections, better internal linking, surface the tool CTA earlier; bump `lastModified`. |
| Post is ranking > 30 + low CTR + low engagement | Question whether to rewrite, replace, or sunset. |
| Post is ranking #1-3 + good CTR + low engagement | The opening is right but the body is failing. Rewrite the middle — spread the useful material, add a re-hook, add a worked example. |
| Post is ranking #5-15 + low CTR + low engagement | `title` / `metaDescription` rewrite. The post itself might be fine. |
| Post is ranking #1-5 + good engagement + zero tool clicks | The guide works but doesn't convert. Fix the CTA — descriptive, early, and pointed at the right `/tools/<tool>`. |

See `update-discipline-skill.md` for the full update / replace / sunset decision tree.

---

## The monthly analytics rhythm

A reasonable cadence for a site of 30-100 posts:

### Weekly (5 min)
- Glance at GSC top performers and top decliners (and which tool-intent queries are moving)
- Note any post with a sudden 50%+ change

### Monthly (45 min)
- Review every post's impressions / CTR / engagement time / post→tool-click rate
- Triage: leave / light update / substantive update / replace / sunset
- For each substantive update, schedule the work (and remember to bump `lastModified`)
- Flag any seasonal/occasion post whose window is within 6 weeks

### Quarterly (3 hours)
- Topical map review — are clusters (QR, phone numbers, Bible, privacy, words) healthy, and does each route to its tool?
- Pillar refresh — are pillars still ranking? Do they need new sections?
- Stale post audit — anything ranking poorly or losing to a competitor that should be refreshed or retired

### Annually
- Full corpus audit — every post checked against the freshness model
- Voice profile updated based on the year's audience signals (`protocols/site-voice-profile.md`)
- Topical map redrawn if site direction has shifted

---

## What the data does NOT tell you

Some things analytics can't measure:

- Whether the post is *good* — only whether it's engaged with
- Whether the post is *trustworthy* — only whether it's clicked
- Whether the instructions *actually work* — no analytics tool catches a QR-embed snippet that doesn't render or a phone format that's invalid; only a content review and a real test do (see `accuracy-and-trust-skill.md`)
- Whether a scripture quote is accurate or a legality claim overpromises — only a content review catches that
- Whether the post is *helpful* — engagement time is a proxy, not a measure
- Whether the post will rank *next month* — past performance isn't future ranking

So: read the data, but also read (and test) the post. The data is a flashlight on what's happening, not the judgment of what to do.

---

## Pre-update analytics checklist

Before deciding to update a post, check:

- [ ] What's the current impression count?
- [ ] What's the current CTR?
- [ ] What's the average position for the target query?
- [ ] What other queries does the post rank for?
- [ ] What's the average engagement time?
- [ ] What's the scroll depth (if available)? Do readers reach the worked example / the tool CTA?
- [ ] What's the post → tool click rate for this post?
- [ ] How are referral sources trending?
- [ ] What changed in the last 28 days?

Then decide which of the five shapes the post is in, and apply the matching fix.

---

**BlogOS** — read the data, then read the post.
