---
name: x-hook
description: >-
  Reverse-engineer why an X (Twitter) post or thread worked, name its hook
  formula, and write two versions of the same shape on the user's topic. Use
  when the user pastes a viral tweet and says "why did this work", "steal this
  hook", "break this down", or wants a swipe file.
---

# x-hook

## Input

Pasted tweets or threads, with their numbers if the user has them (likes,
replies, reposts, bookmarks, views) and the author's follower count. Read
public posts only. Never use a logged-in session.

## The breakdown

For each one:

1. **Formula,** matched against `../x-post/hooks.md`.
2. **First-line mechanics:** what makes it stop the scroll. A number? A named
   thing? A tension? A gap it doesn't close?
3. **The goal it optimised for:** replies, reposts, likes or bookmarks, judged
   from its numbers if given.
4. **The multiple,** if the user gave follower counts: engagement divided by
   followers, so a big account's average post doesn't look like a hit.

Be honest: the formula is a judgement about the text, not proof of why it
spread. Timing, the author's network and luck are invisible from here.

## Then make it theirs

Write two versions of the same shape on the user's topic, in their voice
(`./x/voice.md`), using only facts they have given or that are in
`./x/story-bank.md`. Humanize with `/x-human`.

If the user collects several, append each breakdown to `./x/swipe.md` so
`/x-plan` can use what works in their niche.

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
