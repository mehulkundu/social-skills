---
name: x-event
description: >-
  Turn a meetup, conference, talk, demo day or launch the user attended into X
  (Twitter) posts: a live post from the room and a recap. Use when the user
  says "I'm at {event}", "tweet from this meetup", "recap this talk", or pastes
  notes or photos from an event.
---

# x-event

Events are the easiest content a person ever gets: a room full of people saying
things worth reacting to, and a crowd who'll search the event name tonight.

## Ask for what they actually wrote down

In one message:

1. The event's name and its official handle or hashtag, if the user has it.
2. Who spoke, and whether the user is happy to name them.
3. The two or three things that stuck.
4. The one thing they disagreed with.
5. The room: how many people, what the crowd was like.

**Never put words in a named person's mouth.** Quote only what the user wrote
down. Never invent a handle or tag someone the user didn't name.

## Write

- **One live post** from the room, during or right after: the observation, not a
  summary. "the room clapped for X. nobody asked about Y." beats "great talk by
  {name} at {event}!".
- **One recap:** a tweet if there's one idea, a 4 to 6 tweet thread if there are
  several. Shape: what the room believed, what the user noticed that the room
  missed, what they'd tell someone who wasn't there.
- **A reply** to the organiser's or speaker's own post, if the user has it, via
  `/x-reply`.
- The event hashtag, if there is one, can be the one hashtag.

Humanize everything with `/x-human`. The user posts it.

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
