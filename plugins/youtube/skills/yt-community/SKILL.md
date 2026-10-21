---
name: yt-community
description: >-
  Write YouTube community posts (text, poll, image or quiz) that keep
  subscribers engaged between uploads and feed the next video. Use for
  "community post", "poll my audience", "announce the next video", or "what do
  I post between uploads".
---

# yt-community

A community post reaches subscribers in their feed without them clicking
anything. Its two jobs: keep the channel alive between uploads, and find out
what to make next.

## Before you write

Read `./youtube/voice.md`. Never invent a number, a result or a date.

## Pick the format

| format | use it for |
| --- | --- |
| **poll** | choosing the next video. Two to four options, each a real video you'd make |
| **text** | a behind-the-scenes moment, an opinion, a question the next video answers |
| **image** | a frame, a thumbnail test, a before/after, a work-in-progress |
| **teaser** | the day before an upload: one line of what's coming, no spoiler |

## Rules

- **Two to four short lines.** It's read in a feed, between videos.
- **One question, specific.** "Which should I make first?" with real options
  beats "what do you want to see?".
- **Polls are research.** Never offer an option the user won't make. Note the
  winner in `./youtube/plan.md`.
- **Never "new video out!" as the whole post.** Say what the viewer gets, then the
  link.
- **One or two a week.** More reads as noise.

Hand back the post copy-ready, humanized with `/li-human`'s rules (no em dashes,
no stock words). The user posts it.

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

Paths like `./youtube/voice.md` above mean the platform's folder, found in this
order so one persona's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./youtube/` in the current project, if `./youtube/voice.md` exists.
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this youtube account (an older one-account repo:
   offer to move it into `./youtube/`).
3. `~/.claude/youtube/` otherwise, as a global default.

Read `./persona.md` before the voice file whenever it exists. On facts, the
persona file wins; on format and style, the platform's `voice.md` wins.
`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create `./youtube/voice.md` from this plugin's
`templates/voice.md`, and put anything that is true on every platform in
`./persona.md` instead.
