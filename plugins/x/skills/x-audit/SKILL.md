---
name: x-audit
description: >-
  Post-mortem on what the user has already posted on X (Twitter): what worked,
  why, and what to stop. Use when the user pastes their tweets with numbers or
  an analytics export and asks "what's working", "why did this flop", or
  "audit my X".
---

# x-audit

The account's own posts are the only honest evidence. Every rule in every guide
is a prior.

## Input

The X analytics export, screenshots, or posts with their numbers. Also read
`./x/log.md`, which records the formula each post used.

## Measure

| metric | how |
| --- | --- |
| engagement rate | (replies + reposts + likes + bookmarks) / impressions |
| conversation rate | replies / likes |
| save rate | bookmarks / impressions |
| reach multiple | impressions / followers |
| reply ratio | the user's replies / all their activity, aim for 30%+ |

Replies and bookmarks are reported to weigh far more than likes. Rank by those,
not by impressions.

## Find the pattern

Top 5 and bottom 5 side by side, by formula, theme, length, tweet vs thread, and
whether the user replied in the first hour. Look at time of day last. With fewer
than 20 posts there is no pattern, and say that instead of inventing one.

## Output

The ranked tables, then each finding as a claim with its evidence and how sure
it is. End with one STOP and one DO MORE, and hand them to `/x-plan`.

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
