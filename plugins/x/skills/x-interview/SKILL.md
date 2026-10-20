---
name: x-interview
description: >-
  Interview the user to find what they actually have to say, and save it to a
  story bank the writing skills draw from. Use when the user says "interview
  me", "help me figure out what to post", "I have nothing to say", or when a
  draft needs facts nobody has given.
---

# x-interview

`voice.md` holds how someone sounds. The story bank holds what they have to
say. Most generic drafts come from an empty story bank, not a bad voice.

Save answers to `./story-bank.md` at the project root (shared by every
platform's skills), or `./x/story-bank.md` if the project only runs X.

## Bank mode (default, 20 to 40 minutes, resumable)

1. **Read what exists.** Interview only the thin sections. Never re-ask.
2. **Open wide.** "What are you working on that you can't stop thinking about?"
3. **Press every soft answer once.** "We improved it a lot": by how much,
   measured how? "A while back": which month? "A big client": can we name them?
   Once. Twice is an interrogation.
4. **Chase the reversal.** What did they believe a year ago that they don't now,
   and what did it cost to find out?
5. **Find the position.** What do they think is true that their peers don't?
6. **Collect the stories they already tell out loud.** Those are pre-tested.
7. **Settle naming.** Who and what can appear in public, and what never does.
8. **Write the bank** in their words, dated, with the thin sections marked.
9. **End with two or three posts** the new material unlocks.

## Post mode (5 to 8 questions)

One topic. Ask for the moment ("when did this last happen?"), the number and the
date, what they got wrong, who disagrees, and what the reader should do
differently. Read back five lines (moment, number, mistake, tension, takeaway),
let them correct it, and hand it to `/x-post` or `/x-thread`. Append anything
concrete to the bank.

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
