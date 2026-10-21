---
name: yt-plan
description: >-
  Plan a week or a month of YouTube uploads - what to post, when, and in
  what order, sized to the creator's actual capacity. Use for "plan my
  week", "content calendar", "what should I post", "I have no idea what to
  make next".
---

# yt-plan

A plan that does not fit the week is a list of regrets. Ask two questions before writing anything:
**how many hours do you actually have**, and **what is already half-made**.

## Before you write

1. Read `./youtube/voice.md` if it exists. That is the user's voice profile: how they talk
   on camera, the words they never use, who they are talking to, what they will not claim. If it
   does not exist, ask for **three of their own videos**, read or transcribe them, infer the voice,
   and write the file. A script in the wrong voice is worse than no script, because they have to
   read it out loud.
2. Never invent a number, a result or a source. If a figure would strengthen it and you do not have
   one, ask for it or write the line without it.

## The shape of a week

- **One anchor.** The video the week is for. It gets the most time and it goes out on the day the
  channel's own analytics say is best - ask for that, do not assume Tuesday.
- **One cheap one.** Built from something that exists: a clip, a reaction, a follow-up to the
  comment that got the most replies last week.
- **Shorts from the anchor.** Three, cut from the long video, not written separately. `/yt-shorts`
  finds them.

Three uploads on a seven-day week, not seven. A plan that posts daily is not a plan anyone
recognises, and the empty days are what make the filled ones survive a bad week.

## What to hand back

A table: day, format, working title, the one sentence it promises, and what already exists for it.
Then the honest line at the bottom - how many hours this costs, and what to drop first if the week
goes wrong.

## The gate

Nothing here publishes. This skill writes and you publish. Every output ends in a block the user
copies, and the last line of every run is the question: **ship it, or change it?**

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
