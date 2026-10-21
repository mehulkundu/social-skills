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

Save answers to `./story-bank.md` at the project root, shared by every
platform of the persona.

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
