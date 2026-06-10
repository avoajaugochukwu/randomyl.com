# TODO

## Tools roadmap (generator universe — from keyword + KD research, see seo/more-keywords.md)

### Batch 2 — DONE (built & verified, 2026-06-09)
- [x] Random Letter Generator — KD 5 · 40.5K/mo → /tools/random-letter-generator
- [x] Random Color Generator — KD 27 · 33.1K/mo → /tools/random-color-generator
- [x] Random Animal Generator — KD 0 · 27.1K/mo → /tools/random-animal-generator
- [x] Random Team Generator (+ group variant) — KD 14 · 22.2K + 33.1K/mo → /tools/random-team-generator (+/groups)
- [x] Random Country Generator — KD 24 · 22.2K/mo → /tools/random-country-generator
- [x] Decision Maker (+ yes-or-no variant) — KD 6 · 18.1K + 14.8K/mo → /tools/decision-maker (+/yes-or-no)
- [x] Random Sentence Generator — KD 4 · 6.6K/mo → /tools/random-sentence-generator
- [x] Random Question Generator — KD 11 · 6.6K/mo → /tools/random-question-generator

### Batch 3 — backlog (still easy, build next)
- [ ] Random Username Generator — KD 22 · 14.8K/mo
- [ ] Character Name Generator — KD 19 · 12.1K/mo
- [ ] Random Fact Generator — KD 2 · 2.4K/mo
- [ ] Random Emoji Generator — KD 0 · 2.9K/mo
- [ ] Truth or Dare Generator — KD 0 · 1.9K/mo
- [ ] Random Name Generator — KD 25 · 201K/mo (big; dedicated push)

### Deferred — Google widgets / brand-owned SERPs (low ROI for now)
- [ ] Wheel of Names — 1.2M/mo but SERP owned by wheelofnames.com (needs real interactive wheel)
- [ ] Dice Roller (KD 42), Coin Flip (KD 52), Spin the Wheel (KD 61), Random Password Generator (KD 70)

## Tooling / refactors (not now — deprioritized)
- [ ] **Build a uniform tool shell/layout** so every generator page shares one consistent
      structure (Hero + tool panel + variants + description + FAQ + related tools). Right now
      each tool page wires these pieces by hand. A single `<ToolShell>` (or layout) would make
      all tools uniform and cut boilerplate when adding new ones. Deferred — prioritizing content first.
