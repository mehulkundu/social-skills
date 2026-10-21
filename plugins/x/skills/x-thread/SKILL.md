---
name: x-thread
description: >-
  Build a thread for X (Twitter): a listicle, a story, a curiosity-gap opener
  or a how-I teardown, with every tweet able to stand alone. Use when the user
  says "thread", "tweetstorm", "turn this into a thread", or has an idea with
  steps, a story or a teardown that will not fit in one tweet.
---

# x-thread

A thread is a funnel. Tweet 1 is the whole top of it.

## Before you write

Read `./x/voice.md`, `./story-bank.md` and `../x-post/hooks.md` (formulas X7
to X10 are the thread shapes). Never invent a fact. A thread with a made-up
number is a retraction waiting to happen.

## Is it a thread?

Only if it has a build: steps, a story with beats, a list where each item needs
teaching, or a screen-by-screen teardown. A one-claim idea padded into eight
tweets is a tweet. Say so and send it to `/x-post`.

## Shape

- **Tweet 1:** promise a payoff and open a loop. It has to stop the scroll with
  nothing after it.
- **Front-load.** The best item goes at position 1 or 2. Tap-through drops with
  every tweet.
- **5 to 9 tweets** for a list or teaching thread. A strong story can run
  longer.
- **Every tweet stands alone,** for someone who lands on tweet 4 from a quote.
- **Links go in tweet 2 or later,** never tweet 1.
- **Last tweet:** the most quotable line, then one ask: bookmark, follow, or
  "reply with yours". One, not two.

## Output

Each tweet separated by `---`, with its character count. Then:

```
THREAD READY
formula:  X10 How-I teardown
tweets:   7  (longest 268 / 280)
goal:     bookmarks
```

Run it through `/x-human` first. On "yes", log the first line to `./x/log.md`.
The user posts it. Nothing here publishes.

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
