---
name: yt-pivot
description: >-
  Relaunch or reposition a YouTube channel that is changing what it makes,
  without losing the subscribers worth keeping. Use for "I'm changing my
  channel's niche", "restart my channel", "what do I do with my old videos",
  "my old format stopped working", or the first video after a long break.
---

# yt-pivot

A channel that changes direction has two audiences at once: the subscribers who
came for the old thing, and the people the new thing is for. The pivot is
mostly about the first five uploads and the channel page.

## Before you write

Read `./youtube/voice.md`. Ask, in one message: what the channel made before,
what it makes now, why it changed, how long since the last upload, and the
subscriber count.

## The first video back

- **Not a channel trailer, and not an apology.** It's a strong episode of the new
  format. The pivot gets one or two lines in the first 30 seconds: what it used
  to be, what it is now, and why the viewer should care. Then the video starts.
- **Script it with `/yt-script`.** The hook still has to earn the first 15
  seconds.
- **Package it with `/yt-package`.** The title promises the new thing, not "I'm
  back".

## The channel page

- **Description and banner** say the new line first.
- **Trailer for non-subscribers,** under 60 seconds, about the new line only.
- **Playlists:** the new format at the top. Old playlists lower, not deleted.
- **Old videos:** keep them, they still earn search traffic. Unlist only what's
  actively wrong now, and ask before suggesting it.

## The first month

- One **community post** (`/yt-community`) announcing the change, with a poll
  whose options are real first videos.
- Upload on a rhythm the user can keep. Consistency matters more after a gap.
- Expect some old subscribers to leave, and say so. A smaller audience that
  wants the new thing is the goal.
- Read retention on the first three (`/yt-retention`) before changing anything.

## Output

A one-page plan: the first video (working title, the pivot lines, the hook),
the channel-page changes as copy-ready text, the community post, and the first
four uploads. Ship it, or change it?

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
