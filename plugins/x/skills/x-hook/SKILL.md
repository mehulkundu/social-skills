---
name: x-hook
description: >-
  Reverse-engineer why an X (Twitter) post or thread worked, name its hook
  formula, and write two versions of the same shape on the user's topic. Use
  when the user pastes a viral tweet and says "why did this work", "steal this
  hook", "break this down", or wants a swipe file.
---

# x-hook

## Input

Pasted tweets or threads, with their numbers if the user has them (likes,
replies, reposts, bookmarks, views) and the author's follower count. Read
public posts only. Never use a logged-in session.

## The breakdown

For each one:

1. **Formula,** matched against `../x-post/hooks.md`.
2. **First-line mechanics:** what makes it stop the scroll. A number? A named
   thing? A tension? A gap it doesn't close?
3. **The goal it optimised for:** replies, reposts, likes or bookmarks, judged
   from its numbers if given.
4. **The multiple,** if the user gave follower counts: engagement divided by
   followers, so a big account's average post doesn't look like a hit.

Be honest: the formula is a judgement about the text, not proof of why it
spread. Timing, the author's network and luck are invisible from here.

## Then make it theirs

Write two versions of the same shape on the user's topic, in their voice
(`./x/voice.md`), using only facts they have given or that are in
`./story-bank.md`. Humanize with `/x-human`.

If the user collects several, append each breakdown to `./x/swipe.md` so
`/x-plan` can use what works in their niche.

## Where files live

**Ground rule: one persona, one project.** A persona is one identity: a founder,
a DJ, an artist. Its accounts on Instagram, X, LinkedIn and YouTube are that
persona on different platforms. The format and the style change from platform
to platform, but the persona stays the same, so it never splits into a project
per account. Each platform is a folder inside the persona's project:

```
founder/
├── CLAUDE.md
├── persona.md        # true on every platform: facts, goals, positions, limits
├── story-bank.md     # stories every platform draws from
├── instagram/        # voice.md, profile.md, plan.md, swipe.md, log.md
├── x/
└── linkedin/
```

When a persona starts on a new platform, add a folder to its project. Don't
start a new project for it, and don't copy the persona's facts into the
platform's `voice.md`: that file only says how the persona sounds and what it
posts on that platform.

Paths like `./x/voice.md` above mean the platform's folder, found in this
order so one persona's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./x/` in the current project, if `./x/voice.md` exists.
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this x account (an older one-account repo:
   offer to move it into `./x/`).
3. `~/.claude/x/` otherwise, as a global default.

Read `./persona.md` before the voice file whenever it exists. On facts, the
persona file wins; on format and style, the platform's `voice.md` wins.
`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create `./x/voice.md` from this plugin's
`templates/voice.md`, and put anything that is true on every platform in
`./persona.md` instead.
