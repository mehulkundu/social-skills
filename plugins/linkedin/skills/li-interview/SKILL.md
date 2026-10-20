---
name: li-interview
description: >-
  Interview the user to find what they actually have to say on LinkedIn, and
  save it to a story bank every writing skill draws from. Use when the user
  says "interview me", "help me figure out what to post", "I have nothing to
  write about", or when a draft needs facts nobody has given.
---

# li-interview

`voice.md` holds how someone sounds. The story bank holds what they have to
say: the numbers, the dated moments, the positions, the stories. Most generic
posts come from an empty story bank, not a bad voice.

Save answers to `./story-bank.md` at the project root (shared by every
platform's skills), or `./linkedin/story-bank.md` if the project only runs
LinkedIn. `/li-post`, `/li-plan` and `/li-repurpose` read it before asking for
anything.

## Bank mode (default, 20 to 40 minutes, resumable)

1. **Read what exists.** Interview only the thin sections. Never re-ask.
2. **Open wide.** "What are you working on that you can't stop thinking about?"
   beats "list your achievements".
3. **Press every soft answer once.** "We grew a lot": by how much, over what
   period? "A while back": which month? "A big client": can we name them? Once.
4. **Chase the reversal.** What did they believe a year ago that they don't now,
   and what did it cost to find out?
5. **Find the position.** What do they think is true that their peers don't, and
   what does holding it cost them? A claim with no cost isn't a position.
6. **Collect the three stories they already tell in person.** Pre-tested.
7. **Settle naming.** Clients, employers, colleagues: who can be named, who stays
   anonymous, what never appears.
8. **Write the bank** in their own words where they're vivid, dated, with the
   thin sections marked.
9. **End with three posts** the new material unlocks, each with a hook formula
   from `../li-post/hooks.json`.

## Post mode (5 to 8 questions)

One topic. Ask for the moment, not the theme ("when did this last happen?"),
the number and the date, what they got wrong, who disagrees, and what the reader
should do differently. Read back five lines (moment, number, mistake, tension,
takeaway), let them correct it, and hand it to `/li-post`. Append anything
concrete to the bank.

## Where files live

Paths like `./linkedin/voice.md` above mean the account's workspace folder, found
in this order so one account's voice never leaks into another's:

1. `./linkedin/` in the current project, if `./linkedin/voice.md` exists (a project that
   runs several platforms or brands).
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this linkedin account (a one-account repo).
3. `~/.claude/linkedin/` otherwise, as a global default.

`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create one in the first location from this
plugin's `templates/voice.md`.
