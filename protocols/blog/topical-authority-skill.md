---
name: topical-authority
description: The hub-and-spoke (pillar-cluster) content architecture that signals topical authority to Google for randomyl.com's tools-and-blog content. This skill is how a site of 100 posts becomes a recognized authority on QR codes, random phone numbers, Bible topics, and online privacy rather than 100 disconnected pages. Covers pillar selection (a QR-codes pillar, a Phone-numbers pillar, a Bible/Christian pillar, a Privacy pillar, a Word-generators pillar), cluster mapping, inline internal-linking discipline via Markdown links, the randomyl-specific rule that every cluster also links down to the tool it supports, and when to write a new cluster vs expand an existing post.
---

# Topical Authority — hub-and-spoke

> Google does not just rank individual pages anymore. It ranks sites for *topics*. A site with a well-organized pillar plus 8-15 supporting cluster pages will outrank a site with 50 disconnected pages on the same topic, even if the disconnected pages are individually better written.

---

## The model in one diagram

```
                        Pillar page (head term)
                        e.g. "QR Code Generator"
                              ▲
                              │  internal links
                              │
            ┌────────┬────────┼────────┬────────┐
            │        │        │        │        │
        Cluster 1  Cluster 2  ...   Cluster 4   Cluster 5
        "how to    "free QR        "QR code     "why QR
         scan a     code            use cases    codes fail
         QR code"   templates       by           and how to
                    for flyers"     industry"    make them
                                                 work"

                    (clusters link to each other,
                     up to the pillar, AND down to
                     the /tools/<generator> they support)
```

The pillar covers the head term comprehensively. Each cluster covers one specific long-tail under it — a how-to, an explainer, a curated list, a comparison/legality piece, or a faith article. Clusters link **up** to the pillar, **across** to siblings, and **down** to the generator tool they support. The pillar links **down** to every cluster and to its tool. That dense cross-linking is the spine of the whole graph.

This is the structure Google's notion of "topical authority" was built to recognize. The randomyl twist: every cluster has a tool at its center, so the strongest internal signal is the post-to-tool link that routes a researching reader to the thing that does the job.

---

## How linking physically works on this site

Internal links live in the **body**, as standard **GitHub-Flavored Markdown links**: `[descriptive anchor](/blog/<sibling-slug>)` for siblings and `[anchor](/tools/<tool>)` for the supporting tool. `components/MarkdownRenderer.tsx` runs `react-markdown` with `remark-gfm`, so a `[text](url)` link renders as a styled `<a>`. Relative paths resolve against the site root.

- To a sibling post: `[anchor](/blog/<sibling-slug>)` with the anchor text = the sibling's target query.
- To the pillar: `[anchor](/blog/<pillar-slug>)`.
- To the tool the cluster supports: `[anchor](/tools/<tool>)` — the randomyl-specific link every cluster post should carry, ideally as the closing CTA.

Posts live flat under `/blog/<slug>`; tools live flat under `/tools/<tool>`. External links automatically get `target="_blank" rel="noopener noreferrer"`; internal links do not, which is correct — keep readers on-site.

There is **no separate "related posts" field and no tag-based navigation namespace** — the only internal-link mechanism is the inline Markdown link in the body. So put real editorial links in the prose where the sibling topic genuinely relates, and route to the tool where the reader is ready to act; that *is* the topical signal.

The real link targets you'll pair posts with are other files in `content/blog/` (verify the slug exists as a `content/blog/<slug>.md` file before linking — never link a 404):

| Cluster | Tool it supports | Real slugs to link (examples) |
|---|---|---|
| QR codes | `/tools/random-qr-code-generator` | `/blog/custom-qr-code-generator-guide`, `/blog/how-to-scan-qr-code`, `/blog/free-qr-code-templates-flyers-cards-menus`, `/blog/qr-code-use-cases-by-industry`, `/blog/why-qr-codes-fail-how-to-make-them-work`, `/blog/copy-paste-html-templates-embed-qr-codes` |
| random phone numbers | `/tools/random-phone-number-generator` | `/blog/how-to-generate-random-phone-numbers`, `/blog/understanding-phone-number-formats`, `/blog/is-it-legal-to-use-a-random-phone-number-generator`, `/blog/free-fake-phone-number-generator-for-testing`, `/blog/when-to-use-random-phone-number-generator-guide` |
| Bible / Christian | `/tools/random-bible-verse-generator` | `/blog/bible-verses-about-anxiety`, `/blog/bible-verses-about-relationships`, `/blog/forgiveness-in-the-bible`, `/blog/what-does-the-bible-say-about-tattoos`, `/blog/women-of-the-bible-stories-of-strength-courage-and-faith`, `/blog/jesus-wept-bible-verse-meaning` |
| online privacy / data | `/tools/random-phone-number-generator` (privacy use) | `/blog/how-data-privacy-tools-protect-your-identity`, `/blog/what-bible-teaches-about-online-safety`, `/blog/online-privacy-faith-issue` |
| words / writing prompts | `/tools/random-noun-generator`, `/tools/random-object-generator` | noun/object generator guides (writing prompts, games, brainstorming, vocabulary) |

---

## Selecting pillars

A pillar is worth writing only when:

1. The head term has meaningful search demand (judged from autocomplete strength + competitor count — see `keyword-research-skill.md`; there's no stored volume number to look up)
2. You have or can write ≥ 6 cluster pages under it
3. The topic is genuinely within the site's domain (a topic one of the generator tools serves, or a faith/privacy theme adjacent to it)
4. You can credibly take an angle that beats the existing top 3

randomyl.com's natural pillars map onto the site's real clusters, each anchored by a tool:

- **PILLAR "QR Code Generator"** — hubs the QR spokes (`custom-qr-code-generator-guide`, `how-to-scan-qr-code`, `free-qr-code-templates-flyers-cards-menus`, `qr-code-use-cases-by-industry`, `why-qr-codes-fail-how-to-make-them-work`, `copy-paste-html-templates-embed-qr-codes`) and links down to `/tools/random-qr-code-generator`. Every embed snippet and scan step must actually work (see `accuracy-and-trust-skill.md`).
- **PILLAR "Random Phone Number Generator"** — hubs the phone spokes (`how-to-generate-random-phone-numbers`, `understanding-phone-number-formats`, `is-it-legal-to-use-a-random-phone-number-generator`, `free-fake-phone-number-generator-for-testing`, `when-to-use-random-phone-number-generator-guide`) and links down to `/tools/random-phone-number-generator`. Frame the tool for legitimate use — testing, QA, demos, privacy — never fraud, spam, or harassment.
- **PILLAR "Bible Verses" / Christian topics** — hubs the faith spokes (`bible-verses-about-anxiety`, `bible-verses-about-relationships`, `forgiveness-in-the-bible`, `what-does-the-bible-say-about-tattoos`, `women-of-the-bible-stories-of-strength-courage-and-faith`, `jesus-wept-bible-verse-meaning`) and links down to `/tools/random-bible-verse-generator`. Every scripture quoted verbatim with a named translation.
- **PILLAR "Online Privacy"** — hubs the privacy/data spokes (`how-data-privacy-tools-protect-your-identity`, `what-bible-teaches-about-online-safety`, `online-privacy-faith-issue`) and links down to the privacy use of `/tools/random-phone-number-generator`. Carry a light "general information, not legal advice" note where relevant.
- **PILLAR "Random Word / Noun Generator"** — hubs the word/writing-prompt spokes (noun and object generator guides for writing prompts, games, brainstorming, vocabulary) and links down to `/tools/random-noun-generator` and `/tools/random-object-generator`.

Other ready clusters worth a pillar as the library grows: **QR embedding for developers** (HTML/JSON snippets), **phone-format references** (E.164 / NANP by country), and **audience** variants (businesses, developers, teachers, a faith reader).

For each candidate pillar, list 6+ candidate clusters before committing. If you can't list 6, the pillar is too narrow and should be a cluster instead. The `content/blog/` directory is the source for what exists.

---

## Mapping a cluster

For a chosen pillar, the cluster map enumerates every spoke. Example for the QR pillar:

| Cluster slug | Target query | Type | Tool |
|---|---|---|---|
| `random-qr-code-generator` | "QR code generator" | Pillar | `/tools/random-qr-code-generator` |
| `custom-qr-code-generator-guide` | "custom QR code generator" | Tool guide / how-to | `/tools/random-qr-code-generator` |
| `how-to-scan-qr-code` | "how to scan a QR code" | Tool guide / how-to | `/tools/random-qr-code-generator` |
| `free-qr-code-templates-flyers-cards-menus` | "free QR code templates" | Listicle / curated | `/tools/random-qr-code-generator` |
| `qr-code-use-cases-by-industry` | "QR code use cases" | Listicle / curated | `/tools/random-qr-code-generator` |
| `why-qr-codes-fail-how-to-make-them-work` | "why QR codes fail" | Explainer / how-it-works | `/tools/random-qr-code-generator` |

Example for the Phone-numbers pillar:

| Cluster slug | Target query | Type | Tool |
|---|---|---|---|
| `random-phone-number-generator` | "random phone number generator" | Pillar | `/tools/random-phone-number-generator` |
| `how-to-generate-random-phone-numbers` | "how to generate random phone numbers" | Tool guide / how-to | `/tools/random-phone-number-generator` |
| `understanding-phone-number-formats` | "phone number formats" | Explainer / how-it-works | `/tools/random-phone-number-generator` |
| `is-it-legal-to-use-a-random-phone-number-generator` | "is it legal to use a random phone number generator" | Decision / legality | `/tools/random-phone-number-generator` |
| `free-fake-phone-number-generator-for-testing` | "fake phone number for testing" | Tool guide / how-to | `/tools/random-phone-number-generator` |

This map lives in context for the write (and `content/blog/` is the ground truth for what's already shipped). It is the source of truth for what clusters exist, which siblings each spoke pairs with, and which tool each cluster routes to. The writer reads it when writing any post in the cluster so the inline body links resolve to the right real slugs and the CTA points at the right tool.

---

## Internal-link discipline

Every post links **up** and **across** — pillars also link **down** to clusters, and every cluster post links **down to its tool** — via inline body Markdown links.

### Cluster post internal-link rules

- **1 link up to the pillar** — in the introduction or first major section. Anchor text = the pillar's exact target query. ("…this is one piece of our bigger guide to the [QR code generator](/blog/random-qr-code-generator)…")
- **≥ 3 links across to sibling posts** — placed where the sibling topic genuinely relates, not dumped in the conclusion. ("…printing it on a flyer? See [free QR code templates](/blog/free-qr-code-templates-flyers-cards-menus).")
- **1 link down to the supporting tool** — the closing CTA. ("Ready to make one? Open the [random QR code generator](/tools/random-qr-code-generator).") This is the randomyl-specific link the whole cluster exists to feed.
- **0-2 links to posts outside the cluster**, only when relevant — e.g. a phone-testing post linking across to [how data privacy tools protect your identity](/blog/how-data-privacy-tools-protect-your-identity).

Total internal-link minimum per post: pillar (1, where one exists) + ≥ 3 siblings + 1 tool — landing around the 3–6 internal links the writing guide calls for. Keep links contextual so they read as editorial, not stuffed. (Each link is a standard `[anchor](url)` Markdown link; there is no related-posts array to maintain alongside it.)

### Pillar internal-link rules

- **Link down to every cluster post** in the relevant "where to start" or "popular guides" section.
- **Link down to the cluster's tool** prominently (often the primary CTA at the top and bottom).
- **Group cluster links by sub-topic** when there are > 8 clusters (e.g. for a QR pillar: making, scanning, templates, use cases, embedding).
- **No "see also" appendix** — surface links in the body where they're relevant.

### Anchor text rules

The anchor text on an internal link is the single most powerful internal-SEO signal Google has. Rules:

- Anchor text = the linked page's target query, or very close
- Anchor reads naturally in the surrounding sentence
- Never "click here," "this article," "learn more"
- Never the exact same anchor text linking to the same page twice on one page

Example body sentence from a QR how-to:

> "If you're just getting started, our [custom QR code generator guide](/blog/custom-qr-code-generator-guide) ties it all together; to fix one that won't scan, read [why QR codes fail](/blog/why-qr-codes-fail-how-to-make-them-work), and when you're ready, open the [random QR code generator](/tools/random-qr-code-generator)."

Each anchor is the target query of the linked page (or the tool's name) — natural English that doubles as the SEO signal, and each is a real, shipped slug or tool route.

---

## Hub-and-spoke math: what good looks like

For a healthy pillar:

- 1 pillar post (2,000-3,500 words)
- 8-15 cluster pages (how-tos, explainers, listicles, comparisons, faith articles — roughly 1,200–2,500 words per the type bands)
- Every cluster links up to the pillar (so the pillar gets 8-15 inbound internal links)
- Each cluster links to ≥ 3 siblings (so each cluster accrues many inbound links from siblings)
- Each cluster links down to the supporting tool (so the tool accrues inbound links from the whole cluster)
- The pillar links down to every cluster and to the tool (so each cluster gets 1 link from the pillar)

Net per cluster: a handful of outbound contextual links plus the tool CTA, many inbound from siblings + pillar. This density is what Google reads as "this page is a recognized part of a topic the site covers seriously," and it concentrates link equity on the tool the cluster is built to convert toward.

---

## When to write a new cluster vs expand an existing post

A common mistake: writing 20 short posts on adjacent sub-questions when one comprehensive post would serve users better and rank harder. (Synonym intents like "how to generate random phone numbers" / "random phone number generator how to" should be **one** canonical page targeting the variants on-page, not separate posts — watch for near-duplicate QR maker guides too, e.g. `free-qr-code-maker-guide` vs `qr-code-creator-guide` vs `generate-qr-codes-online-beginners-guide`; if they cannibalize, consolidate to one canonical page and redirect the others.)

### Write a NEW cluster when:
- The query has a meaningfully different intent (how-to vs explainer vs listicle vs legality vs faith article)
- The query targets a different need, audience, or use case (a developer embed guide vs a beginner scan guide)
- Combining would push the post past ~2,000 words and dilute focus
- The existing post is already optimized and ranking well — don't disturb it

### EXPAND an existing post when:
- The new question shares the existing post's intent
- The existing post is short (< 1,000 words) and would benefit from depth
- The new question is a natural sub-section of the existing post
- The existing post isn't ranking well yet — expansion is cheaper than a new post

When expanding, the workflow is:

1. Open the `content/blog/<slug>.md` file (the source of truth) and add the new `##` / `###` headings + Markdown content
2. Add any new source citations inline where a load-bearing claim is made (QR/phone specs, any study or statistic, any scripture, any legal/privacy claim)
3. Add any new sibling and tool links where the new section genuinely relates
4. Re-verify any technical/scripture/legal/statistical claim per `accuracy-and-trust-skill.md`, and confirm every instruction still works and every verse is still quoted exactly
5. **Bump `lastModified`** in the frontmatter to the edit date so `dateModified` (JSON-LD) and `og:modifiedTime` reflect the update, then commit and rebuild (static) — see `update-discipline-skill.md`
6. Re-audit the expanded post

---

## Topical map maintenance

The cluster map lives in context for each write, anchored to `content/blog/` (what's shipped). Keep your mental map current:

- When a new post in the cluster is planned or published (the `.md` file added and committed)
- When a post is retired (the `.md` file removed)
- When a post is consolidated into another (redirect the old slug)

The writer reads `content/blog/` to know which siblings exist and link to, and which tool the cluster supports, when writing a new post. Keeping that current is what makes the inline internal linking reliable and 404-free.

---

## When the cluster is multi-pillar

Some topics genuinely sit between two pillars — e.g. `what-bible-teaches-about-online-safety` belongs to the Bible pillar but also feeds the Privacy cluster, and `online-privacy-faith-issue` sits the same way. The post links up to both, with anchor text that differentiates which aspect goes where:

> "Grounded in scripture? See our [Bible verses about anxiety](/blog/bible-verses-about-anxiety). Worried about your data specifically? Read [how data privacy tools protect your identity](/blog/how-data-privacy-tools-protect-your-identity)."

Multi-pillar links are the exception. If half a cluster's posts link to two pillars, the pillars probably need consolidating or the cluster splitting.

---

## The semantic neighborhood

Beyond explicit linking, posts in a cluster share *semantic* signals — the same use cases, questions, domain vocabulary, and sources. Google's modern understanding picks up on this.

To strengthen it:

- Reuse the same canonical way of describing how the tool works, the same domain terms (QR error-correction levels, E.164 / NANP phone formats, the named Bible translation), and the same trusted sources across cluster posts (see `content-craft-skill.md`)
- Use consistent guidance — don't say "you must use the highest QR error-correction level" in one post and "error correction barely matters" in another; pick the sound version and reuse it
- Cross-reference the same verified specs, scripture, and worked examples across posts where they genuinely apply

This makes the cluster read as one clear, helpful voice across the set (Randomyl's practical, trustworthy voice), not a content farm's scattered coverage.

---

## What kills topical authority

- **Orphan posts** — posts with zero inbound internal links. They signal the site doesn't recognize the post as part of any topic.
- **Tag-only architecture** — relying on frontmatter `tags` for navigation instead of explicit body links. Tags are weak signals.
- **Duplicate-intent posts** — two posts targeting the same query (e.g. the near-duplicate QR maker guides, or two phone-format pages). Pick one canonical page, redirect the rest.
- **Pillar without clusters** — a long pillar with no supporting spokes reads as a one-off, not a hub.
- **Clusters without a pillar** — 10 related posts with no central pillar to anchor them.
- **Clusters that never link to their tool** — a QR cluster that never routes to `/tools/random-qr-code-generator` wastes its whole reason to exist; every cluster post needs the tool CTA.
- **Broken links** — an inline link pointing at a slug that isn't a real `content/blog/<slug>.md` file, or a `/tools/<tool>` route that doesn't exist. Verify every link target is real before publishing.

---

## Pre-publish topical authority checklist

- [ ] Post's cluster and pillar identified (from `content/blog/` + the cluster map)
- [ ] Inline body link UP to the pillar present (for clusters), as a Markdown link
- [ ] ≥ 3 inline body links across to sibling posts (for clusters), as Markdown links
- [ ] 1 inline body link DOWN to the supporting tool (`/tools/<tool>`), as the closing CTA
- [ ] Anchor text = the target query of each linked page (or the tool's name)
- [ ] No "click here" / "learn more" anchors
- [ ] Contextual internal links kept to a readable density (~3-6)
- [ ] All links use real `/blog/<slug>` or `/tools/<tool>` routes verified to exist (no 404s)
- [ ] Tool use framed for legitimate purposes; scripture cited with translation; legality/privacy carries the general-information note
- [ ] `content/blog/` reflects the new post once it ships (file added and committed)

---

**BlogOS** — sites that rank cover topics, not pages.
