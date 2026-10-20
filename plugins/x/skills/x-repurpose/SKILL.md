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
