---
name: li-dm
description: >-
  Write connection notes and DM follow-ups that get replies - the 200-character
  invite, the first message, and the two follow-ups. Use when the user says
  "write a connection request", "DM this person", "outreach message", "how do I
  follow up", or is reaching out to someone specific on LinkedIn.
---

# li-dm

The invite note is 200 characters. The first DM decides whether there is a
second one. Neither is a pitch.

## Before writing, get the specifics

Ask for, in one batched question:

1. **Who** - name, role, company.
2. **The hook** - the actual reason to reach out now. A post they wrote, a
   thing their company shipped, a mutual connection, a talk they gave. Not
   "they fit my ICP".
3. **What the user wants** - a conversation, a referral, a job, a sale. Be
   honest internally, even if the message does not lead with it.

If there is no specific reason to message this person today, say so. A message
with no reason is what everyone else sends, and it is why their reply rate is
2%.

## The invite note (200 characters)

```
{one specific reference to them} + {one line of who you are} + {no ask}
```

The note asks for nothing. It exists to make the accept obvious. Under 200
characters including spaces - count them and show the count.

```
Saw your post on killing the discovery call - we did the same thing in March
and it worked. I run ops at a 12-person studio. Would like to follow along.
                                                                    [187/200]
```

## The first message, after they accept

Wait a day. Then:

- **Two to four sentences.** A screen of text is a delete.
- **Reference the specific thing** from the note - continuity is the whole
  reason the note was specific.
- **Give something before asking.** A number, a template, a name, an answer.
- **One ask, and make it small.** "Worth a 15-minute call?" beats "let me walk
  you through our platform".
- **No calendar link in message one.** It reads as a funnel, because it is.

## Follow-ups

Two. That is the number.

- **+4 days** - add something new. Never "just bumping this" or "following up
  on my last message". If you have nothing new, you have no follow-up.
- **+10 days** - the close-the-loop message. Say you will stop, and mean it.
  This one gets a surprising share of the total replies, because it removes
  the pressure.

Then stop. A third follow-up converts nobody and costs the relationship.

## Never

- Never send an automated connection or message sequence. Automated outreach
  tools violate LinkedIn's User Agreement and get accounts restricted.
- Never fabricate a mutual connection, a shared school, or having read
  something the user has not read.
- Never write the message that opens "I hope this message finds you well".
- Never send more than 20 invites a day. Beyond that, LinkedIn throttles the
  account, and a throttled account is a dead one.

## Output

The invite note with its character count, the first message, and both
follow-ups with the day they go out. All humanized through `/li-human`. The
user sends every one of them by hand.

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

Paths like `./linkedin/voice.md` above mean the platform's folder, found in this
order so one persona's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./linkedin/` in the current project, if `./linkedin/voice.md` exists.
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this linkedin account (an older one-account repo:
   offer to move it into `./linkedin/`).
3. `~/.claude/linkedin/` otherwise, as a global default.

Read `./persona.md` before the voice file whenever it exists. On facts, the
persona file wins; on format and style, the platform's `voice.md` wins.
`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create `./linkedin/voice.md` from this plugin's
`templates/voice.md`, and put anything that is true on every platform in
`./persona.md` instead.
