---
name: x-profile
description: >-
  Audit and rewrite an X (Twitter) profile: bio, display name, header and
  pinned post. Use when the user says "fix my bio", "optimize my X profile",
  "what should I pin", or pastes their profile.
---

# x-profile

The profile is where a reply turns into a follow. Someone who liked a reply
taps through and decides in about three seconds.

## Input

The bio, display name, a description of the header image, the pinned post, and
the follower count. A screenshot works.

## Check

| part | full marks |
| --- | --- |
| bio, line 1 | who they are and what they post about, specifically |
| bio, proof | one real proof point if there is one (a role, a thing built, a number) |
| bio, link | one link, to the thing that matters most right now |
| bio, banned | no hashtags, no "entrepreneur \| thinker \| builder" lists |
| name | their name, optionally plus a short descriptor |
| header | one line of positioning, legible on a phone |
| pinned | under 30 days old, their best thread or take, gives a reason to follow |
| activity | a reply ratio of 30% or more, so the profile looks like a person |

Score each honestly and say what is missing.

## Rewrite

- Three bio options, each under 160 characters, counted.
- Two name-field options.
- A header brief: the line, and what the image does behind it.
- Which post to pin, from what they paste, and why.

Humanize everything with `/x-human`. Nothing is changed on X by this skill. The
user pastes each part in.

## Where files live

Paths like `./x/voice.md` above mean the account's workspace folder, found
in this order so one account's voice never leaks into another's:

0. Whatever the project's `CLAUDE.md` maps this platform to. A project (an
   Obsidian vault, say) can list its own file names for the voice, plan,
   log, swipe file, drafts folder and story bank. Use those exactly.
1. `./x/` in the current project, if `./x/voice.md` exists (a project that
   runs several platforms or brands).
2. The project root `./`, if `./voice.md` exists and the project's
   `CLAUDE.md` says it is this x account (a one-account repo).
3. `~/.claude/x/` otherwise, as a global default.

`story-bank.md` lives at the project root and is shared by every platform. If
no voice file exists anywhere, create one in the first location from this
plugin's `templates/voice.md`.
