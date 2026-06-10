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

### Batch 3 — DONE (built & verified, 2026-06-09)
- [x] Random Username Generator — KD 22 · 14.8K/mo → /tools/random-username-generator
- [x] Character Name Generator — KD 19 · 12.1K/mo → /tools/character-name-generator
- [x] Random Fact Generator — KD 2 · 2.4K/mo → /tools/random-fact-generator (facts Perplexity-sourced + human-reviewed)
- [x] Random Emoji Generator — KD 0 · 2.9K/mo → /tools/random-emoji-generator
- [x] Truth or Dare Generator — KD 0 · 1.9K/mo → /tools/truth-or-dare-generator

### Batch 4 — Name-generator cluster (research DONE → seo/name-keywords.md)
Build on a shared NameEngine component (dataset-driven) so all share one engine.
**Phase 4a — core + biggest easy wins:**
- [ ] random-name-generator (HUB, realistic first+last by gender) — KD 25 · 201K/mo
- [ ] fantasy-name-generator (people + places: town/city/kingdom) — KD 20 · 135K/mo
- [ ] last-name-generator (surnames by origin) — KD 9 · 40.5K/mo
- [ ] dnd-name-generator (by race/class) — KD 0 · 18.1K/mo
- [ ] elf-name-generator — KD 5 · 18.1K/mo
- [ ] superhero-name-generator — KD 4 · 14.8K/mo
- [ ] gamertag-generator — KD 0 · 14.8K/mo
**Phase 4b — more themed:**
- [ ] band (KD9·12.1K), rapper (KD0·12.1K), city/town (KD0·8.1K), villain (KD0·3.6K),
      dog (KD2·3.6K), cat (KD0·2.4K), couple/ship-name (KD0·2.4K), pet (KD0·1.6K)
- [ ] nickname-generator (KD37·22.2K) + KD-0 variants (rapper/viking/anime/korean/team nickname)
**Skip:** business-name (KD 77, owned by Shopify/Namelix/Wix) · baby names (YMYL, nameberry/babycenter own it)

### Deferred — Google widgets / brand-owned SERPs (low ROI for now)
- [ ] Wheel of Names — 1.2M/mo but SERP owned by wheelofnames.com (needs real interactive wheel)
- [ ] Dice Roller (KD 42), Coin Flip (KD 52), Spin the Wheel (KD 61), Random Password Generator (KD 70)

## Tooling / refactors (not now — deprioritized)
- [ ] **Build a uniform tool shell/layout** so every generator page shares one consistent
      structure (Hero + tool panel + variants + description + FAQ + related tools). Right now
      each tool page wires these pieces by hand. A single `<ToolShell>` (or layout) would make
      all tools uniform and cut boilerplate when adding new ones. Deferred — prioritizing content first.
