# Rotation Log — randomyl.com

Append-only log of the variety-rotation slot picks used by each `/b-write` and `/b-review` run. The next run reads the recent entries and avoids repeating the same intro pattern, the same body structure, the same worked-example/evidence framing, and the same conclusion shape — so a reader browsing several posts in one cluster (a few QR how-tos, or several "Bible verses about X" posts) doesn't feel like they're reading one article with the topic swapped. See `protocols/blog/variety-rotation-skill.md` for the slot definitions and rotation banks.

Track variety across the slots that matter for randomyl:

- **Content type** (🛠️ tool guide · 🔍 explainer · 📋 listicle/collection · ⚖️ decision/comparison/legality · 🙏 faith/scripture) — Slot 0A. Clusters cause back-to-back same-type posts, so the *structure/grouping* (0C) is the real differentiator when two of a type ship close together.
- **Audience / tone register** (Slot 0B: beginner · business owner · developer · privacy-conscious · faith reader · general).
- **Body structure / grouping scheme** (Slot 0C: sequential steps · by use-case · by sub-theme · by situation · failure-modes · comparison matrix) — don't reuse the same scheme back-to-back within a cluster.
- **Worked-example / evidence framing** (Slot 5: worked example · spec/standard · sourced statistic · comparison · scripture-exact · honest-limits). Any legality/privacy/stat post must include the honest-limits framing (5F) and the "general information, not legal advice" note.
- **Intro pattern** (Slot 1) — the opening hook before the `>` answer blockquote.
- **Conclusion shape** (Slot 9) and **CTA target** (Slot 10: the tool · a sibling post · the pillar) — don't point two consecutive posts at the identical destination.

Format per entry (see `variety-rotation-skill.md` → ROTATION LOG TEMPLATE for the full slot codes):

```
## <slug> — <YYYY-MM-DD> — <content type>
- Slot 0A (Content Type): <code>
- Slot 0B (Audience/Tone): <code>
- Slot 0C (Structure/Grouping): <code>
- Slot 1 (Intro Pattern): <code>
- Slot 3 (H2 Phrasing Mix): <codes>
- Slot 5 (Worked-Example/Evidence Framing): <codes>
- Slot 9 (Conclusion): <code>
- Slot 10 (CTA Target): <code> → <destination>
```

Cross-post rules to honor (from `variety-rotation-skill.md`): never reuse the Slot 1 + Slot 9 combo two posts in a row; never repeat Slot 0A two posts in a row unless deliberately building a cluster (and rotate 0B/0C/5 hard if you do); never lead two consecutive posts with the same Slot 5 framing; don't point two consecutive posts at the same Slot 10 destination.

---

<!-- New entries appended below by /b-write and /b-review. No entries yet — fresh corpus for randomyl. -->
