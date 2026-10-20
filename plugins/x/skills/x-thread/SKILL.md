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

Read `./x/voice.md`, `./x/story-bank.md` and `../x-post/hooks.md` (formulas X7
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

Paths like `./x/voice.md` above mean the account's workspace folder, found
in this order so one account's voice never leaks into another's:

1. `./x/` in the current project, if `./x/voice.md` exists (a project that
   runs several platforms or brands).
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this x account (a one-account repo).
3. `~/.claude/x/` otherwise, as a global default.

`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create one in the first location from this
plugin's `templates/voice.md`.
