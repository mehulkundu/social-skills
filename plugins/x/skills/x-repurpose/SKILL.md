---
name: x-repurpose
description: >-
  Turn a long piece (a LinkedIn post, a YouTube video, a newsletter, a
  transcript, notes) into native X (Twitter) posts and a thread. Use when the
  user says "repurpose this for X", "turn this into tweets", or pastes long
  content and wants it on X.
---

# x-repurpose

Shrinking a LinkedIn post into 280 characters gives you a worse LinkedIn post.
Pull the sharp parts out and rewrite them for X.

## Extract first

Read the whole source. List, with counts, before writing anything:

- **claims** that would start an argument
- **numbers**, every figure, cost, duration
- **moments**, a person, a scene, a cost
- **steps**, anything with a sequence
- **lines** already quotable as they are

Fewer than three items means the source is thin, and say so.

## Then write

- A single claim, number or moment becomes a tweet (`/x-post`).
- Steps or a story become one thread (`/x-thread`).
- A long video usually gives one thread and three to five tweets.
- Native to X: shorter, more casual, no LinkedIn line-break rhythm, no "as I
  said in my video".
- The link to the original goes in a reply, never the main post.

Show the list of planned posts first. Draft one at a time on request, each
through `/x-human`. Dumping five finished posts at once means none get edited.

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
