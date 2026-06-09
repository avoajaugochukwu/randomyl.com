---
description: Load the BlogOS pack for randomyl.com into context for brainstorming or manual edits
---

# /blog — Load BlogOS

Load the randomyl.com BlogOS skill pack into context so we can brainstorm topics, plan a cluster, or hand-edit a post together. This command does **not** draft a post (use `/b-write`) or audit one (use `/b-review`) — it just brings the system into the conversation.

## Do this

1. Read the master system and the contract files:
   - @protocols/blog/blog-os-master.md
   - @protocols/blog/page-structures-skill.md
   - @protocols/blog/content-craft-skill.md
   - @protocols/blog/accuracy-and-trust-skill.md
2. Skim the rest of the pack as needed for the task at hand (`@protocols/blog/README.md` lists every file). Pull in the specific craft skills when relevant — e.g. `@protocols/blog/keyword-research-skill.md` for topic ideation, `@protocols/blog/topical-authority-skill.md` for cluster planning, `@protocols/blog/title-meta-slug-skill.md` for titling.
3. If a site voice lock exists, read it: @protocols/voice-profile.md (optional — may not exist yet; fall back to @protocols/site-voice-profile.md).
4. Confirm you've loaded the pack and ask what we're working on — a new topic, a cluster plan, or an existing post.

## The randomyl reality (keep this straight)

- Posts are **Markdown files** at `content/blog/<slug>.md` (YAML frontmatter + GitHub-Flavored-Markdown body), rendered by `components/MarkdownRenderer.tsx`. No Notion, no migrate script, no `Status` field.
- The body is full GFM: `##`/`###` headings (no `#` H1 — the frontmatter `title` is the H1), `>` blockquotes (the leading one is the answer box), **tables**, fenced **code blocks**, lists, images, links.
- `BlogPosting` JSON-LD and all meta tags ship automatically from the frontmatter — never hand-write schema.
- The five content types: 🛠️ tool guide, 🔍 explainer, 📋 listicle/collection, ⚖️ decision/comparison/legality, 🙏 faith/scripture. Each post supports one of the tools (`/tools/random-qr-code-generator`, `/tools/random-phone-number-generator`, `/tools/random-bible-verse-generator`, `/tools/random-noun-generator`, `/tools/random-object-generator`).
- Research is **WebSearch + WebFetch** only. The accuracy & trust gate is non-negotiable: every instruction works, every claim is sourced or cut, scripture is exact with the translation named, the tools are framed for legitimate use only.
